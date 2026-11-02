import { S, save } from '../core/state.js';
import { beep, confetti } from '../core/effects.js';
import { esc, $, $$, ar, pick } from '../core/utils.js';

import { FIGS, TOPICS, Q, CH_NAMES, CHS, EX, HOT_POINTS, MOORE, SORT_SETS, SPR_ITEMS } from '../../../data/subjects/sc.js';

export function createSubject() {
  
  /* Software Construction — Sommerville, Engineering Software Products, Ch 1–3 */

  /* Software Construction — Chapter 4: Software Architecture */

  const TOP=Object.fromEntries(TOPICS.map((t,i)=>[t.id,Object.assign(t,{idx:i})]));

  const chl=ch=>"Chapter "+ch;

  const rint=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  function addGen(ch,tp,q,opts,arx,enx){
    const o=[...new Set(opts.map(String))];let k=1;while(o.length<4){
      const x=String(parseInt(opts[0])+k);if(!o.includes(x))o.push(x);
      k++
    }Q.push([ch,tp,q,o.slice(0,4),arx,enx,0,1]);
    return Q.length-1
  }
  const GEN={
    sprints:()=>{
      if(Math.random()<.5){
        const v=[rint(18,34),rint(18,34),rint(18,34)],s=v[0]+v[1]+v[2];const avg=Math.round(s/3);
        return addGen(2,"sprints",`A team completed ${v[0]}, ${v[1]} and ${v[2]} story points in its last three sprints. Using the average as its velocity, how many story points should it plan for the next sprint?`,[avg,Math.max(...v),Math.min(...v),s].map(String),`المتوسط = (${v.join(" + ")}) ÷ 3 = ${s} ÷ 3 ≈ ${avg}.`,`Average = (${v.join(" + ")}) / 3 = ${s} / 3 ≈ ${avg}.`)
      }
      const vel=rint(15,30);const items=Array.from({length:6},()=>pick([2,3,5,8,13]));let t=0,n=0;for(const x of items){
        if(t+x>vel)break;
        t+=x;
        n++
      }
      return addGen(2,"sprints",`Velocity is ${vel} points. The prioritized backlog items are estimated at ${items.join(", ")} points (top first). Taking items strictly in priority order, how many points go into the sprint backlog?`,[t,Math.min(vel,items.reduce((a,b)=>a+b,0)),t+items[n]||t+1,items.reduce((a,b)=>a+b,0)].map(String),`نمشي بالترتيب ونوقف قبل ما نتعدى ${vel}: ناخذ أول ${n} عناصر = ${t} نقطة.`,`Take items in order until the next one would exceed ${vel}: first ${n} items = ${t} points.`)
    },
    backlog:()=>{
      const p=rint(4,8),w=pick([2,3,4]),d=pick([5,4]);const c=p*w*d;
      return addGen(2,"backlog",`A Scrum team of ${p} developers works ${d} days a week in a ${w}-week sprint. What is the team's total effort capacity in person-days?`,[c,w*d,p*w,p*d].map(String),`الجهد = عدد الأشخاص × الأسابيع × أيام الأسبوع = ${p} × ${w} × ${d} = ${c} يوم شخص (مو أيام تقويم).`,`Effort = people × weeks × days = ${p} × ${w} × ${d} = ${c} person-days (not calendar time).`)
    }
  };
  const genFor=tp=>GEN[tp]||null;
  const CHAL=[]; const chalOfTopics=()=>[];
  
  /* ============ PRODUCT LAB ============ */

  let scTab="vision",scSort="pbi",scQ=null,scVel=20,scSel=null,scSto="";
  function renderLab(){
    const tabs=[["vision","قالب رؤية المنتج"],["story","كاتب قصة المستخدم"],["sprint","مخطط الـ Sprint"],["sort","صنّفها"]];
    $("#labArea").innerHTML=`<div class="chips" style="margin:0">${tabs.map(([k,l])=>`<button class="pill" data-st="${k}" aria-pressed="${k===scTab}">${l}</button>`).join("")}</div><div id="scIn"></div>`;
    $$("#labArea [data-st]").forEach(b=>b.onclick=()=>{
      scTab=b.dataset.st;
      renderLab()
    });
    const el=$("#scIn"),V=S.lab.vis||{};
    if(scTab==="vision"){
      el.innerHTML=`<p class="lead" style="margin:10px 0">عبّ قالب Moore لمنتج من فكرتك (أو مشروعك)، ويطلع لك الرؤية كجملة وحدة. الأمثلة الرمادية من سلايد CRM-Innovator.</p>
     <div class="card">${MOORE.map(m=>`<div style="margin-bottom:10px"><label><b class="en" dir="ltr">${m[0]}</b> · ${m[2]} <span class="tar">(${m[3]})</span><input class="inp" dir="ltr" data-v="${m[1]}" placeholder="${esc(m[4])}" value="${esc(V[m[1]]||"")}" style="width:100%;margin-top:4px"></label></div>`).join("")}
     <div class="row"><button class="btn" id="vEx">املأ بمثال السلايد</button><button class="btn ghost" id="vClr">امسح</button></div></div>
     <div class="card" style="margin-top:12px"><h3 style="margin:0 0 6px">رؤيتك</h3><p id="vOut" class="enl" dir="ltr" style="margin:0"></p><div id="vChk" style="margin-top:8px"></div></div>`;
      const upd=()=>{
        const v=S.lab.vis||{};const miss=MOORE.filter(m=>!(v[m[1]]||"").trim());
        $("#vOut").innerHTML=MOORE.map(m=>`<b>${m[0]}</b> ${v[m[1]]?esc(v[m[1]]):`<span style="color:var(--muted)">[${m[3]}]</span>`}`).join(" ")+".";
        $("#vChk").innerHTML=miss.length?`<p class="arl" style="margin:0;color:var(--muted)">باقي: ${miss.map(m=>m[2]).join("، ")}.</p>`:`<p class="arl" style="margin:0;color:var(--good)"><b>كاملة.</b> الحين اسأل نفسك: هل تجاوب وش المنتج؟ ومين العملاء؟ وليش يشترونه بدل المنافس؟</p>`
      };
      $$("#scIn [data-v]").forEach(i=>i.oninput=()=>{
        S.lab.vis=Object.assign(S.lab.vis||{},{[i.dataset.v]:i.value});
        save();
        upd()
      });
      $("#vEx").onclick=()=>{
        S.lab.vis=Object.fromEntries(MOORE.map(m=>[m[1],m[4]]));
        save();
        renderLab()
      };
      $("#vClr").onclick=()=>{
        S.lab.vis={};
        save();
        renderLab()
      };
      upd()
    }
    else if(scTab==="story"){
      el.innerHTML=`<p class="lead" style="margin:10px 0">اكتب قصة مستخدم بالإنجليزي، والفاحص يشيّك على الصيغة اللي في السلايدات.</p>
     <div class="card"><textarea class="inp" id="sIn" dir="ltr" rows="3" style="width:100%" placeholder="As a teacher, I want to tell all members of my group when new information is available so that they don't miss it.">${esc(scSto)}</textarea>
     <div class="row"><button class="btn ghost" id="sEx">مثال</button><button class="btn ghost" id="sEp">مثال epic</button></div><div id="sOut" style="margin-top:10px"></div></div>
     <div class="analogy"><b>الصيغة</b><p class="enl" dir="ltr" style="margin:4px 0 0">As a &lt;role&gt;, I &lt;want | need&gt; to &lt;do something&gt; so that &lt;reason&gt;</p></div>`;
      const chk=()=>{
        const s=scSto.trim();if(!s){
          $("#sOut").innerHTML="";
          return
        }
        const role=s.match(/^as an?\s+([^,]+?)\s*,?\s+i\s+(want|need)/i),act=s.match(/\bi\s+(?:want|need)\s+to\s+(.+?)(?:\s+so\s+that\b|[.!]?$)/i),why=/\bso\s+that\s+\S+/i.test(s);
        const ands=(act&&act[1].match(/\b(and|or)\b|,/gi)||[]).length,big=/\b(whole system|entire|everything|backup and restore|all (?:applications|files|data|features)|manage all)\b/i.test(s);
        const R=[[!!role,"فيه دور (As a …)",role&&esc(role[1]),"ابدأ بـ As a &lt;role&gt;"],[!!(role&&role[2]),"فيه I want أو I need","","لازم I want to أو I need to"],[!!act,"فيه فعل (to do something)",act&&esc(act[1]),"اكتب وش يبي يسوي بعد to"],[why,"فيه السبب (so that)","","اختياري، بس يوضح الهدف"],[ands<2,"تركّز على شي واحد","","فيها أشياء كثيرة، قسّمها لقصص"],[!big,"حجمها يناسب sprint واحد","","شكلها كبيرة: غالباً epic وتحتاج تقسيم لقصص أصغر"]];
        $("#sOut").innerHTML=R.map(r=>{
          const t=r[0]?r[2]:r[3];return `<p class="arl" style="margin:3px 0;color:${r[0]?"var(--good)":r[1].includes("so that")?"var(--score)":"var(--red)"}">${r[0]?"✓":"✗"} ${r[1]}${t?` <span style="color:var(--muted)">· ${t}</span>`:""}</p>`
        }).join("")
      };
      $("#sIn").oninput=e=>{
        scSto=e.target.value;
        chk()
      };
      $("#sEx").onclick=()=>{
        scSto="As a teacher, I want to tell all members of my group when new information is available so that nobody misses an update.";
        renderLab()
      };
      $("#sEp").onclick=()=>{
        scSto="As a system manager, I need to be able to backup and restore all applications, files, directories or the whole system.";
        renderLab()
      };
      chk()
    }
    else if(scTab==="sprint"){
      if(!scSel)scSel=SPR_ITEMS.map(()=>false);
      const tot=SPR_ITEMS.reduce((a,x,i)=>a+(scSel[i]?x[2]:0),0);
      el.innerHTML=`<p class="lead" style="margin:10px 0">هذا product backlog مرتب بالأولوية (فوق الأهم) والتقدير بنقاط القصة. حدد الـ velocity واختار اللي يدخل الـ sprint.</p>
     <div class="card"><label>Velocity (نقاط لكل sprint): <input class="inp" type="number" id="vel" min="1" max="60" value="${scVel}" style="width:80px" dir="ltr"></label>
     <div class="progress" style="margin:10px 0 4px"><i style="width:${Math.min(100,tot/scVel*100)}%;${tot>scVel?"background:var(--red)":""}"></i></div>
     <p class="arl" style="margin:0">مجموعك: <b class="en">${tot}</b> / <span class="en">${scVel}</span> ${tot>scVel?`<span style="color:var(--red)"> · تعديت الـ velocity، الـ sprint ما يتمدد فشيل شي.</span>`:""}</p></div>
     <div class="cards" style="margin-top:10px">${SPR_ITEMS.map((x,i)=>`<label class="brow${scSel[i]?"":" off"}" style="opacity:1;cursor:pointer"><span style="display:flex;gap:10px;align-items:center;flex:1;min-width:0"><input type="checkbox" data-sp="${i}"${scSel[i]?" checked":""}><span><span class="ttl">${ar(i+1)}. ${x[0]}</span><span class="tar"> · ${x[1]}</span></span></span><b class="en">${x[2]} pts</b></label>`).join("")}</div>
     <div class="row"><button class="btn" id="spChk">شيّك على اختياري</button><button class="btn ghost" id="spClr">امسح</button></div><div id="spOut"></div>`;
      $("#vel").onchange=e=>{
        scVel=Math.max(1,Math.min(60,Math.round(+e.target.value||1)));
        renderLab()
      };
      $$("#scIn [data-sp]").forEach(c=>c.onchange=()=>{
        scSel[+c.dataset.sp]=c.checked;
        renderLab()
      });
      $("#spClr").onclick=()=>{
        scSel=null;
        renderLab()
      };
      $("#spChk").onclick=()=>{
        const msgs=[];if(tot>scVel)msgs.push(["bad","المجموع أكبر من الـ velocity. الـ sprint محدد الوقت، فاللي ما يخلص يرجع للـ backlog."]);
        const first=scSel.indexOf(false),skip=scSel.some((s,i)=>s&&i>first&&first>=0);
        if(skip)msgs.push(["mid","تجاوزت عنصر أولويته أعلى. مسموح لو ما يتسع، بس الأصل تمشي بالترتيب، وأي تجاوز تبرره مع مالك المنتج."]);
        const free=scVel-tot,fit=SPR_ITEMS.map((x,i)=>!scSel[i]&&x[2]<=free?i:-1).filter(i=>i>=0);
        if(tot<=scVel&&fit.length)msgs.push(["mid",`باقي ${free} نقطة، ويتسع ${fit.map(i=>"«"+SPR_ITEMS[i][1]+"»").join(" أو ")}.`]);
        if(!tot)msgs.length=0,msgs.push(["bad","ما اخترت شي."]);
        if(tot&&tot<=scVel&&!fit.length&&!skip){
          msgs.push(["good","ممتاز! استغليت الـ velocity بدون ما تتعداها وبالترتيب."]);
          confetti(40);
          beep("soft")
        }
        $("#spOut").innerHTML=msgs.map(m=>`<p class="arl" style="margin:6px 0;color:${m[0]==="good"?"var(--good)":m[0]==="bad"?"var(--red)":"var(--score)"}">${m[1]}</p>`).join("")
      }
    }
    else{
      const set=SORT_SETS[scSort];if(!scQ||scQ.set!==scSort)scQ={set:scSort,i:Math.floor(Math.random()*set.items.length),ans:null};
      const it=set.items[scQ.i],sc=S.lab["s_"+scSort]||[0,0];
      el.innerHTML=`<div class="chips" style="margin:10px 0">${Object.entries(SORT_SETS).map(([k,s])=>`<button class="pill" data-ss="${k}" aria-pressed="${k===scSort}">${s.t}</button>`).join("")}</div>
     <div class="card"><p class="arl" style="margin:0 0 4px;color:var(--muted)">${set.t} · صح <span class="en">${sc[0]}</span> من <span class="en">${sc[1]}</span></p><p class="enl" dir="ltr" style="font-size:1.08em;margin:6px 0 12px">${esc(it[0])}</p>
     <div class="opts">${set.opts.map((o,j)=>`<button class="opt${scQ.ans!=null?(j===it[1]?" right":j===scQ.ans?" wrong":""):""}" data-so="${j}"${scQ.ans!=null?" disabled":""}><span class="en">${o[0]}</span> · ${o[1]}</button>`).join("")}</div>
     ${scQ.ans!=null?`<div class="row"><button class="btn" id="soN">اللي بعده</button></div>`:""}</div>`;
      $$("#scIn [data-ss]").forEach(b=>b.onclick=()=>{
        scSort=b.dataset.ss;
        scQ=null;
        renderLab()
      });
      $$("#scIn [data-so]").forEach(b=>b.onclick=()=>{
        const j=+b.dataset.so;scQ.ans=j;
        const s=S.lab["s_"+scSort]||[0,0];s[1]++;
        if(j===it[1]){
          s[0]++;
          beep("good")
        }else beep("bad");
        S.lab["s_"+scSort]=s;
        save();
        renderLab()
      });
      if($("#soN"))$("#soN").onclick=()=>{
        let n;do{
          n=Math.floor(Math.random()*set.items.length)
        }while(set.items.length>1&&n===scQ.i);scQ={set:scSort,i:n,ans:null};
        renderLab()
      }
    }
  }
  
  /* Chapter 4 additions: chapter name, analogies, top points */

  return {FIGS,TOPICS,Q,TOP,EX,HOT_POINTS,CH_NAMES,CHS,chl,GEN,genFor,CHAL,chalOfTopics,lab:{render:renderLab,open:()=>{
      }}};
  
}
