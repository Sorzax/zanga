import { CUR, M, TOPICS, TOP, S, save } from '../core/state.js';
import { toast } from '../core/effects.js';
import { showR } from '../ui/navigation.js';
import { fm, iso, $, $$, ar } from '../core/utils.js';
import { qOfTopic, figsHTML, isMast, chalOf } from '../core/helpers.js';
import { runQuiz } from './quiz.js';
import { META } from '../../../data/catalog.js';

function renderLessons(){
  const nx=M.CHS.flatMap(ch=>TOPICS.filter(t=>t.ch===ch)).find(t=>!isMast(t.id));
  let h=`<h2>الدروس</h2>${nx?`<button class="btn next" id="contL" style="margin:0 0 14px">كمّل: <span class="ttl">${nx.t}</span></button>`:`<p class="lead"><b>أتقنت كل الدروس!</b> جرّب الاختبار الشامل.</p>`}<p class="lead">${ar(TOPICS.length)} درس بالترتيب. كل درس: النقاط من السلايدات بالإنجليزي وتحتها معناها، تشبيه يثبّت الفكرة، الفخ، وأسئلة الدرس مع شرح بالعربي والإنجليزي. الدرس يصير متقن لما تجيب 80% أو أكثر.</p>`;
  M.CHS.forEach(ch=>{
    const ts=TOPICS.filter(t=>t.ch===ch),m=ts.filter(t=>isMast(t.id)).length;
    h+=`<div class="chprog"><div class="chapter-label">${M.chl(ch)} — <span class="ttl">${M.CH_NAMES[ch]}</span></div><span class="arl" style="margin:0">${ar(m)}/${ar(ts.length)}</span><div class="mini"><i style="width:${100*m/ts.length}%"></i></div></div><div class="cards">`;
    const PT=(M.PARTS||{})[ch];
    ts.forEach((t,k)=>{
      const pp=PT&&PT.find(p=>p[1][0]===t.id);if(pp)h+=`<div class="partlbl" dir="ltr">${pp[0]}</div>`;
      const st=isMast(t.id)?`<span class="status m">متقن ${ar(S.mast[t.id])}%</span>`:S.mast[t.id]!=null?`<span class="status s">${ar(S.mast[t.id])}% · أعد</span>`:S.seen[t.id]?`<span class="status s">بديت</span>`:`<span class="status">جديد</span>`;
      h+=`<button class="lrow" data-id="${t.id}"><span class="n">${ar(k+1)}</span><span class="meta"><span class="ttl">${t.t}</span><span class="tar">${t.ar} · ${ar(qOfTopic(t.id).length)} سؤال</span></span>${st}</button>`;
      
    });
    h+="</div>";
    
  });
  $("#lessonsArea").innerHTML=h;
  $$("#lessonsArea .lrow").forEach(b=>b.onclick=()=>{
    openLesson(b.dataset.id);
    scrollTo({top:0,behavior:"smooth"})
  });
  if(nx)$("#contL").onclick=()=>{
    openLesson(nx.id);
    scrollTo({top:0,behavior:"smooth"})
  };
}
function openLesson(id){
  if (!TOP[id]) return renderLessons();
  const t=TOP[id]; S.seen[id]=true;
  save();
  const seq=M.CHS.flatMap(ch=>TOPICS.filter(x=>x.ch===ch)),pos=seq.indexOf(t);
  const ts=TOPICS.filter(x=>x.ch===t.ch),k=ts.indexOf(t),prev=seq[pos-1],next=seq[pos+1],lc=chalOf([id]);
  $("#lessonsArea").innerHTML=`<div class="lesson">
    <div class="lessonhead"><button class="btn ghost" id="back">→ كل الدروس</button><span class="arl" style="margin:0">${M.chl(t.ch)} · درس ${ar(k+1)} من ${ar(ts.length)}${S.mast[id]!=null?" · أفضل نتيجة "+ar(S.mast[id])+"%":""}</span></div>
    <h2 class="ttl" style="direction:ltr;text-align:left">${t.t}</h2><p class="lead">${t.ar}</p>
    <div class="card"><ol class="pts">${t.pts.map(p=>`<li><p class="enl" dir="ltr">${fm(p[0])}</p><p class="arl">${fm(iso(p[1]))}</p></li>`).join("")}</ol>
      ${M.EX[id]?`<div class="analogy"><b>تخيّلها كذا</b><p style="margin:4px 0 0">${fm(iso(M.EX[id]))}</p></div>`:""}
      ${t.trap?`<div class="trap"><p class="enl" dir="ltr"><b>Exam trap:</b> ${fm(t.trap[0])}</p><p class="arl"><b>فخ:</b> ${fm(iso(t.trap[1]))}</p></div>`:""}
      ${figsHTML(id,true)}
      ${lc.length?`<div class="row"><button class="btn ghost" id="toLab">طبّقها في ${META[CUR].lab.tab} (${ar(lc.length)} تحدي)</button></div>`:""}
    </div>
    <h3 class="section-t">اختبر نفسك على الدرس (${ar(qOfTopic(id).length)} سؤال)</h3>
    <div id="lq"></div>
    <div class="navrow">${prev?`<button class="btn ghost" id="prevL">→ <span class="ttl">${prev.t}</span></button>`:"<span></span>"}${next?`<button class="btn ghost" id="nextL"><span class="ttl">${next.t}</span> ←</button>`:""}</div>
  </div>`;
  $("#back").onclick=renderLessons;
  if($("#toLab"))$("#toLab").onclick=()=>{
    M.lab.open((lc.find(x=>!S.lab[x.id])||lc[0]).id);
    showR("lab")
  };
  if(prev)$("#prevL").onclick=()=>{
    openLesson(prev.id);
    scrollTo({top:0,behavior:"smooth"})
  };
  if(next)$("#nextL").onclick=()=>{
    openLesson(next.id);
    scrollTo({top:0,behavior:"smooth"})
  };
  runQuiz($("#lq"),qOfTopic(id),{calm:true,
    doneMsg:pct=>pct>=80?"الدرس صار متقن. انتقل للي بعده.":"قريب. اقرأ النقاط مرة ثانية وأعد الأسئلة.",
    extraBtn:next?`<button class="btn ghost" id="goNext">الدرس اللي بعده</button>`:"",
    onDone:(r,n,pct)=>{
      const was=isMast(id); S.mast[id]=Math.max(S.mast[id]||0,pct);
      save();
      if(!was&&isMast(id))toast("الدرس صار متقن");
    },
    onResult:()=>{
      const g=$("#goNext"); if(g)g.onclick=()=>{
        openLesson(next.id);
        scrollTo({top:0,behavior:"smooth"})
      };
      
    }});
}

export { renderLessons, openLesson };
