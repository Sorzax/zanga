import { CUR, M, TOPICS, TOP, S, save } from '../core/state.js';
import { beep, confetti, toast } from '../core/effects.js';
import { showR } from '../ui/navigation.js';
import { $, $$, ar } from '../core/utils.js';
import { chip, qOfTopic, qOfCh, isMast, CHAL, chalOf } from '../core/helpers.js';
import { META } from '../../../data/catalog.js';

const est=t=>Math.round(t.pts.length*2.5+qOfTopic(t.id).length*.75+chalOf([t.id]).length*4+3);
const testMins=c=>c==="all"?45:Math.round(qOfCh(c).length*.6);
const DAYMS=864e5;
const today0=()=>{
  const d=new Date();d.setHours(0,0,0,0);
  return d
};
const isoDate=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const parseDate=s=>{
  const [y,m,d]=String(s).split("-").map(Number);const x=new Date(y,(m||1)-1,d||1);x.setHours(0,0,0,0);
  return x
};
function fmtDay(d){
  try{
    return d.toLocaleDateString("ar-SA-u-ca-gregory-nu-latn",{weekday:"long",day:"numeric",month:"long"})
  }catch(e){
    return isoDate(d)
  }
}
const nDars=n=>n===1?"درس":n===2?"درسين":n<=10?ar(n)+" دروس":ar(n)+" درس";
const nDays=n=>n===1?"يوم":n===2?"يومين":n<=10?ar(n)+" أيام":ar(n)+" يوم";
const topicNames=ids=>{
  const n=ids.map(id=>TOP[id].ar);return n.length<=2?n.join("، "):n.slice(0,2).join("، ")+" + "+nDars(n.length-2)
};
function buildPlan(N){
  const order=M.CHS.flatMap(ch=>TOPICS.filter(t=>t.ch===ch));
  const hasLab=CHAL().length>0;
  const R=N>=8?2:N>=3?1:0; let D=N-R,extra=0;
  if(D>order.length){
    extra=D-order.length;
    D=order.length
  }
  const W=order.reduce((s,t)=>s+est(t),0),target=W/D;
  const groups=[];let cur=[],acc=0;
  order.forEach((t,i)=>{
    cur.push(t);
    acc+=est(t);
    const left=order.length-i-1,gl=D-groups.length-1;
    if(gl>0&&(acc>=target*(groups.length+1)||left===gl)){
      groups.push(cur);
      cur=[]
    }
  });
  if(cur.length)groups.push(cur);
  const lastOf={};order.forEach(t=>lastOf[t.ch]=t.id);
  let days=groups.map(g=>{
    const L=g.map(t=>t.id);return{L,tests:N>=4?M.CHS.filter(c=>L.includes(lastOf[c])).map(String):[],LAB:hasLab&&chalOf(L).length>0}
  });
  for(const c of M.CHS){
    if(extra<=0)break;
    const k=days.findIndex(d=>d.tests.includes(String(c)));if(k<0)continue;
    days[k].tests=days[k].tests.filter(x=>x!==String(c));
    days.splice(k+1,0,{L:[],tests:[String(c)],t:"مراجعة واختبار "+chip(c),note:"راجع دروس الشابتر بسرعة، وبعدها حل اختباره كامل بدون وقت. الهدف 80% أو أكثر."});
    extra--
  }
  if(extra>0){
    const step=Math.max(1,Math.floor(days.length/(extra+1)));let pos=step;
    for(;extra>0;extra--){
      days.splice(Math.min(pos,days.length),0,{L:[],MISS:true,t:"يوم مراجعة خفيف",note:"صفّر أخطائك وأعد أي درس نسبته أقل من 80%. ولو كل شي تمام، خذ جولة تدريبات من «مزنوق؟»."});
      pos+=step+1
    }
  }
  if(R===2){
    days.push({L:[],MISS:true,LAB:hasLab?"all":false,t:hasLab?"صفّر أخطائك وخلّص المختبر":"صفّر أخطائك",note:"كل سؤال في «أخطائي» جاوبه صح لين تفضى القائمة"+(hasLab?"، وحل كل تحديات المختبر بدون ما تكشف الحل.":".")});
    days.push({L:[],tests:["all"],t:"البروفة النهائية",note:"اختبار شامل لكل الشابترات، وبعدها ادخل «مزنوق؟» وراجع أهم النقاط للتسخين."})
  }
  else if(R===1)days.push({L:[],MISS:true,tests:["all"],t:"البروفة النهائية + أخطائك",note:"اختبار شامل، وبعدها صفّر أخطائك وراجع «أهم النقاط»."});
  else{
    const L=days[days.length-1];L.tests=(L.tests||[]).concat("all");
    L.MISS=true
  }
  return days.map((p,i)=>{
    p.d=i+1;
    p.tests=p.tests||[];
    if(!p.t)p.t=topicNames(p.L);
    p.mins=p.L.reduce((s,id)=>s+est(TOP[id]),0)+p.tests.reduce((s,c)=>s+testMins(c),0)+(p.MISS?20:0)+(p.LAB==="all"?CHAL().length*3:0);
    return p
  });
}
const dayChal=p=>p.LAB==="all"?CHAL():p.LAB?chalOf(p.L):[];
function dayDone(p){
  return p.L.every(isMast)&&p.tests.every(c=>(S.ctest[c]||0)>=80)&&(!p.MISS||S.miss.length===0)&&dayChal(p).every(x=>S.lab[x.id])
}
const fmtMins=m=>m>=60?`${ar(Math.floor(m/60))} س ${m%60?ar(m%60)+" د":""}`.trim():`${ar(m)} د`;
let pickN=null;
function renderPlan(){
  const el=$("#r-plan");
  if(!S.plan){
    const total=TOPICS.reduce((s,t)=>s+est(t),0)+M.CHS.reduce((s,c)=>s+testMins(c),0)+45;
    const opts=[[1,"يوم","الليلة بس"],[2,"يومين",""],[3,"3 أيام",""],[5,"5 أيام",""],[7,"أسبوع",""],[10,"10 أيام",""],[14,"أسبوعين",""],[21,"3 أسابيع",""],[30,"شهر",""]];
    if(pickN==null)pickN=7;
    const per=Math.round(total/pickN);
    el.innerHTML=`<div class="picker"><h2>كم يوم عندك عشان تخلص ${META[CUR].name}؟</h2>
      <p class="lead">اختر المدة اللي تناسبك، والموقع يوزّع الدروس (${nDars(TOPICS.length)}) عليها بالترتيب، ويحط اختبار كل شابتر وقت ما تخلصه، وآخر الأيام للمراجعة والبروفة. تقدر تغيّر المدة بأي وقت وتقدمك يظل محفوظ.</p>
      <div class="dchips" id="dChips">${opts.map(([n,l,s])=>`<button class="dchip" data-n="${n}" aria-pressed="${n===pickN}"><b>${l}</b><small>${s||nDays(n)}</small></button>`).join("")}</div>
      <div class="ctrls"><label>أو اكتب عدد الأيام <input id="dCustom" type="number" min="1" max="90" value="${pickN}" dir="ltr"></label></div>
      <div class="estline">المادة كاملة تقريباً <b>${fmtMins(total)}</b> من القراءة والحل. على <b>${nDays(pickN)}</b> يعني تقريباً <b>${fmtMins(per)}</b> باليوم.${pickN===1?" يوم واحد ضغط، فلو وقتك أقل جرّب «مزنوق؟».":""}</div>
      <button class="btn next" id="dGo">سوّ لي الخطة</button>
      <button class="btn ghost" id="dSkip">ابدأ الدروس على طول بدون خطة</button></div>`;
    $$("#dChips .dchip").forEach(b=>b.onclick=()=>{
      pickN=+b.dataset.n;
      renderPlan()
    });
    $("#dCustom").onchange=e=>{
      pickN=Math.max(1,Math.min(90,Math.round(+e.target.value||1)));
      renderPlan()
    };
    $("#dGo").onclick=()=>{
      S.plan={days:pickN,start:isoDate(today0())};
      save();
      confetti(60);
      beep("soft");
      toast("خطتك جاهزة");
      renderPlan()
    };
    $("#dSkip").onclick=()=>showR("lessons");
    return;
    
  }
  const PLAN=buildPlan(S.plan.days),start=parseDate(S.plan.start);
  const curIdx=PLAN.findIndex(p=>!dayDone(p)),doneN=PLAN.filter(dayDone).length;
  const todayIdx=Math.floor((today0()-start)/DAYMS);
  let status="",cls="ok";
  if(curIdx<0){
    status="خلّصت الخطة كاملة!";
  }
  else if(todayIdx>curIdx){
    status=`متأخر ${nDays(todayIdx-curIdx)} عن الخطة`;
    cls="late"
  }
  else if(todayIdx<curIdx){
    status=`متقدم ${nDays(curIdx-todayIdx)}`;
    cls="ahead"
  }
  else status="على الخطة بالضبط";
  el.innerHTML=`<div class="planhead"><div><h2 style="margin:0">خطتك: ${nDays(S.plan.days)}</h2><p class="arl" style="margin:0">بدأت ${fmtDay(start)} · الدرس ينحسب «متقن» لما تجيب 80% أو أكثر في أسئلته. بدون أي مؤقت.</p></div>
    <div class="row" style="margin:0;align-items:center"><span class="pstatus ${cls}">${status}</span><button class="btn ghost" id="pChange">غيّر المدة</button></div></div>
    <div class="progress"><i style="width:${100*doneN/PLAN.length}%"></i></div><div class="days" id="days"></div>`;
  $("#days").innerHTML=PLAN.map((p,k)=>{
    const dd=dayDone(p),today=k===curIdx,date=new Date(start.getTime()+k*DAYMS);
    const tasks=p.L.map(id=>`<span class="task${isMast(id)?" ok":""}"><span class="ttl">${TOP[id].t}</span>${S.mast[id]!=null?` · ${ar(S.mast[id])}%`:""}</span>`);
    const dc=dayChal(p);if(dc.length){
      const n=dc.filter(x=>S.lab[x.id]).length;tasks.push(`<span class="task${n===dc.length?" ok":""}">${p.LAB==="all"?"كل ":""}تحديات المختبر ${ar(n)}/${ar(dc.length)}</span>`)
    }
    p.tests.forEach(c=>tasks.push(`<span class="task${(S.ctest[c]||0)>=80?" ok":""}">اختبار ${c==="all"?"شامل":chip(c)}${S.ctest[c]!=null?` · ${ar(S.ctest[c])}%`:""}</span>`));
    if(p.MISS)tasks.push(`<span class="task${S.miss.length===0?" ok":""}">أخطائي: ${ar(S.miss.length)}</span>`);
    return `<div class="day${today?" today":""}${dd?" complete":""}"><div class="dnum">${ar(p.d)}<small>${dd?"تم":today?"اليوم":"يوم"}</small></div>
      <div class="dbody"><h4>${p.t}</h4><div class="ddate">${fmtDay(date)} · تقريباً ${fmtMins(p.mins)}</div>${p.note?`<p class="arl" style="margin:0 0 6px">${p.note}</p>`:""}<div class="dtasks">${tasks.join("")}</div></div>
      <button class="btn${today?"":" ghost"} dgo" data-d="${k}">${dd?"راجع":today?"ابدأ":"افتح"}</button></div>`;
    
  }).join("");
  $("#pChange").onclick=()=>{
    pickN=S.plan.days;
    S.plan=null;
    save();
    renderPlan()
  };
  $$("#days .dgo").forEach(b=>b.onclick=()=>{
    const p=PLAN[+b.dataset.d];
    const nextL=p.L.find(id=>!isMast(id)); if(nextL)return showR("lessons",nextL);
    const nc=dayChal(p).find(x=>!S.lab[x.id]); if(nc){
      M.lab.open(nc.id);
      return showR("lab")
    }
    const t=p.tests.find(c=>(S.ctest[c]||0)<80); if(t)return showR("ctest",t);
    if(p.MISS&&S.miss.length)return showR("miss");
    if(p.L.length)return showR("lessons",p.L[0]);
    showR("ctest",p.tests[0]||"all");
    
  });
}

export { est, testMins, DAYMS, today0, isoDate, parseDate, fmtDay, nDars, nDays, topicNames, buildPlan, dayChal, dayDone, fmtMins, pickN, renderPlan };
