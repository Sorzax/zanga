import { S } from '../core/state.js';
import { beep, confetti } from '../core/effects.js';
import { solved } from '../core/rewards.js';
import { $, $$ } from '../core/utils.js';

import { FIGS, TOPICS, Q, CH_NAMES, EX, CHS, HOT_POINTS } from '../../../data/subjects/os.js';

export function createSubject() {
  
  /* ============ CONTENT ============ */

  /* Analogies for the calm mode (Arabic) */

  /* 14-day plan */

  /* OS explanations aligned with the OS question order: [arabic, english] */

  const TOP=Object.fromEntries(TOPICS.map((t,i)=>[t.id,Object.assign(t,{idx:i})]));
  /* ============ RAYEQ: SCHEDULING LAB ============ */
  const PRESETS={
    fcfs1:{n:"FCFS: 24, 3, 3",alg:"fcfs",P:[["P1",0,24,0],["P2",0,3,0],["P3",0,3,0]]},
    fcfs2:{n:"FCFS: 3, 3, 24",alg:"fcfs",P:[["P2",0,3,0],["P3",0,3,0],["P1",0,24,0]]},
    sjf:{n:"SJF: 6, 8, 7, 3",alg:"sjf",P:[["P1",0,6,0],["P2",0,8,0],["P3",0,7,0],["P4",0,3,0]]},
    srtf:{n:"SRTF: مع أوقات وصول",alg:"srtf",P:[["P1",0,8,0],["P2",1,4,0],["P3",2,9,0],["P4",3,5,0]]},
    rr:{n:"RR q=4: 24, 3, 3",alg:"rr",q:4,P:[["P1",0,24,0],["P2",0,3,0],["P3",0,3,0]]},
    prio:{n:"Priority: 5 عمليات",alg:"prio",P:[["P1",0,10,3],["P2",0,1,1],["P3",0,2,4],["P4",0,1,5],["P5",0,5,2]]},
    prr:{n:"Priority + RR q=2",alg:"prr",q:2,P:[["P1",0,4,3],["P2",0,5,2],["P3",0,8,2],["P4",0,7,1],["P5",0,3,3]]}
  };
  const ALGS={fcfs:"FCFS",sjf:"SJF (non-preemptive)",srtf:"SRTF (preemptive SJF)",prio:"Priority (non-preemptive)",pprio:"Priority (preemptive)",rr:"Round Robin",prr:"Priority + Round Robin"};
  let lab={alg:"fcfs",q:4,P:PRESETS.fcfs1.P.map(r=>r.slice()),self:true}, labPreset=null;
  let labChal=null,labOpened=false;
  function schedule(P,alg,q){
    const n=P.length, rem=P.map(p=>p[2]), first=Array(n).fill(null), done=Array(n).fill(false), ct=Array(n).fill(0); let segs=[], t=0;
    const push=(p,s,e)=>{
      if(e<=s)return;
      const L=segs[segs.length-1];if(L&&L.p===p&&L.e===s)L.e=e;
      else segs.push({p,s,e});
      if(p!=null&&first[p]==null)first[p]=s
    };
    const arrived=i=>P[i][1]<=t;
    const byKey=(key)=>(a,b)=>key(a)-key(b)||P[a][1]-P[b][1]||a-b;
    if(alg==="fcfs"||alg==="sjf"||alg==="prio"){
      let left=n;
      while(left){
        let ready=[...Array(n).keys()].filter(i=>!done[i]&&arrived(i));
        if(!ready.length){
          const nt=Math.min(...[...Array(n).keys()].filter(i=>!done[i]).map(i=>P[i][1]));push(null,t,nt);
          t=nt;
          continue
        }
        const key=alg==="fcfs"?(i=>P[i][1]):alg==="sjf"?(i=>P[i][2]):(i=>P[i][3]);
        ready.sort(byKey(key));
        const i=ready[0];
        push(i,t,t+P[i][2]);
        t+=P[i][2];
        rem[i]=0;
        done[i]=true;
        ct[i]=t;
        left--;
        
      }
      
    }else if(alg==="srtf"||alg==="pprio"){
      let left=n,last=null;
      while(left){
        let ready=[...Array(n).keys()].filter(i=>!done[i]&&arrived(i));
        if(!ready.length){
          const nt=Math.min(...[...Array(n).keys()].filter(i=>!done[i]).map(i=>P[i][1]));push(null,t,nt);
          t=nt;
          last=null;
          continue
        }
        const key=alg==="srtf"?(i=>rem[i]):(i=>P[i][3]);
        ready.sort((a,b)=>key(a)-key(b)||(a===last?-1:b===last?1:0)||P[a][1]-P[b][1]||a-b);
        const i=ready[0]; push(i,t,t+1);
        t+=1;
        rem[i]-=1;
        last=i;
        if(rem[i]<=0){
          done[i]=true;
          ct[i]=t;
          left--;
          last=null
        }
        
      }
      
    }else{
      /* rr, prr */
      const order=[...Array(n).keys()].sort((a,b)=>P[a][1]-P[b][1]||a-b); let added=new Set(), Qu=[];
      const addArr=()=>order.forEach(i=>{
        if(!added.has(i)&&P[i][1]<=t){
          Qu.push(i);
          added.add(i)
        }
      });
      addArr();
      let left=n;
      while(left){
        if(!Qu.length){
          const nt=Math.min(...order.filter(i=>!added.has(i)).map(i=>P[i][1]));push(null,t,nt);
          t=nt;
          addArr();
          continue
        }
        let k=0;
        if(alg==="prr"){
          const best=Math.min(...Qu.map(i=>P[i][3]));k=Qu.findIndex(i=>P[i][3]===best)
        }
        const i=Qu.splice(k,1)[0]; const run=Math.min(q,rem[i]);
        push(i,t,t+run);
        t+=run;
        rem[i]-=run;
        addArr();
        if(rem[i]>0)Qu.push(i);
        else {
          done[i]=true;
          ct[i]=t;
          left--
        }
        
      }
      
    }
    const rows=P.map((p,i)=>{
      const tat=ct[i]-p[1];return{name:p[0],at:p[1],bt:p[2],pr:p[3],ct:ct[i],tat,wt:tat-p[2],rt:first[i]-p[1]}
    });
    const avg=k=>rows.reduce((s,r)=>s+r[k],0)/n;
    return{segs,rows,avgWT:avg("wt"),avgTAT:avg("tat"),avgRT:avg("rt")};
  }
  const COLORS=["#d8b56a","#a5c98f","#e58a6e","#8fb7d8","#c9a0dc","#e6d48a","#9ad1c4","#f0a6a6"];
  const fmt=x=>Math.round(x*100)/100;
  function renderLab(){
    if(labPreset&&PRESETS[labPreset]){
      const p=PRESETS[labPreset];lab.alg=p.alg;
      lab.q=p.q||lab.q;
      lab.P=p.P.map(r=>r.slice());
      labChal=labPreset;
      lab.self=true;
      labPreset=null
    }
    const needPr=lab.alg==="prio"||lab.alg==="pprio"||lab.alg==="prr", needQ=lab.alg==="rr"||lab.alg==="prr";
    $("#labArea").innerHTML=`
   <div class="card"><div class="arl" style="margin:0 0 8px">أمثلة السلايدات (كل واحد تحدي): اختر مثال، ارسم الـ Gantt، واكتب متوسط WT وTAT:</div><div class="chips" style="margin:0">${Object.entries(PRESETS).map(([k,p])=>`<button class="pill${S.lab[k]?" okp":""}" data-pre="${k}" aria-pressed="${k===labChal}" dir="ltr">${S.lab[k]?"✓ ":""}${p.n}</button>`).join("")}</div></div>
   <div class="card">
    <div class="ctrls">
      <label>الخوارزمية <select id="algSel">${Object.entries(ALGS).map(([k,v])=>`<option value="${k}"${k===lab.alg?" selected":""}>${v}</option>`).join("")}</select></label>
      ${needQ?`<label>Quantum q <input id="qIn" type="number" min="1" value="${lab.q}" style="width:70px"></label>`:""}
      <label><input type="checkbox" id="selfChk"${lab.self?" checked":""}> حل بنفسك أول</label>
    </div>
    <div class="ptable-wrap" style="margin-top:10px"><table class="pt"><thead><tr><th>Process</th><th>Arrival</th><th>Burst</th>${needPr?"<th>Priority (smaller = higher)</th>":""}<th></th></tr></thead>
     <tbody>${lab.P.map((r,i)=>`<tr><td><input id="pn${i}" value="${r[0]}" data-i="${i}" data-k="0"></td><td><input id="pa${i}" type="number" min="0" value="${r[1]}" data-i="${i}" data-k="1"></td><td><input id="pb${i}" type="number" min="1" value="${r[2]}" data-i="${i}" data-k="2"></td>${needPr?`<td><input id="pp${i}" type="number" min="0" value="${r[3]}" data-i="${i}" data-k="3"></td>`:""}<td><button class="x" data-del="${i}" aria-label="حذف">×</button></td></tr>`).join("")}</tbody></table></div>
    <div class="row" style="justify-content:flex-start"><button class="btn ghost" id="addP">+ عملية</button></div>
   </div>
   <div id="labOut"></div>`;
    $$("#labArea [data-pre]").forEach(b=>b.onclick=()=>{
      labPreset=b.dataset.pre;
      renderLab()
    });
    $("#algSel").onchange=e=>{
      labChal=null;
      lab.alg=e.target.value;
      renderLab()
    };
    if($("#qIn"))$("#qIn").oninput=e=>{
      labChal=null;
      lab.q=Math.max(1,+e.target.value||1);
      labCompute()
    };
    $("#selfChk").onchange=e=>{
      lab.self=e.target.checked;
      labCompute()
    };
    $$("#labArea table input").forEach(inp=>inp.oninput=e=>{
      labChal=null;
      const i=+e.target.dataset.i,k=+e.target.dataset.k;lab.P[i][k]=k===0?e.target.value:Math.max(k===2?1:0,+e.target.value||0);
      labCompute()
    });
    $$("#labArea [data-del]").forEach(b=>b.onclick=()=>{
      if(lab.P.length>1){
        labChal=null;
        lab.P.splice(+b.dataset.del,1);
        renderLab()
      }
    });
    $("#addP").onclick=()=>{
      if(lab.P.length<8){
        labChal=null;
        lab.P.push(["P"+(lab.P.length+1),0,3,1]);
        renderLab()
      }
    };
    labCompute();
  }
  function labCompute(){
    const r=schedule(lab.P,lab.alg,lab.q), total=r.segs[r.segs.length-1].e, needPr=/prio|prr/.test(lab.alg);
    const gantt=`<div class="gantt"><div class="gbar">${r.segs.map(s=>`<div class="gseg${s.p==null?" idle":""}" style="flex:${s.e-s.s};background:${s.p==null?"":COLORS[s.p%COLORS.length]}" title="${s.p==null?"idle":lab.P[s.p][0]}: ${s.s}–${s.e}">${s.p==null?"":lab.P[s.p][0]}</div>`).join("")}</div>
    <div class="gticks">${[0,...r.segs.map(s=>s.e)].map(x=>`<span style="left:${100*x/total}%">${x}</span>`).join("")}</div></div>`;
    const table=`<div class="ptable-wrap"><table class="pt"><thead><tr><th>Process</th><th>AT</th><th>BT</th>${needPr?"<th>Pr</th>":""}<th>CT</th><th>TAT = CT − AT</th><th>WT = TAT − BT</th><th>RT</th></tr></thead><tbody>
    ${r.rows.map(x=>`<tr><td>${x.name}</td><td>${x.at}</td><td>${x.bt}</td>${needPr?`<td>${x.pr}</td>`:""}<td>${x.ct}</td><td>${x.tat}</td><td>${x.wt}</td><td>${x.rt}</td></tr>`).join("")}
    <tr><td colspan="${needPr?5:4}" style="text-align:right"><b>Average</b></td><td><b>${fmt(r.avgTAT)}</b></td><td><b>${fmt(r.avgWT)}</b></td><td><b>${fmt(r.avgRT)}</b></td></tr></tbody></table></div>
    <div class="formula">Avg WT = (${r.rows.map(x=>x.wt).join(" + ")}) / ${r.rows.length} = ${fmt(r.avgWT)}</div>`;
    const out=$("#labOut");
    if(lab.self){
      out.innerHTML=`<div class="card"><p style="margin:0 0 8px">ارسم الـ Gantt على ورقة، احسب، واكتب جوابك:</p>
      <div class="guess"><label>متوسط WT <input id="gWT" type="number" step="0.01" dir="ltr"></label><label>متوسط TAT <input id="gTAT" type="number" step="0.01" dir="ltr"></label><button class="btn" id="chkG">تحقّق</button><button class="btn ghost" id="reveal">اكشف الحل</button></div>
      <p id="gRes" class="arl"></p></div><div id="solution" hidden><div class="card">${gantt}${table}</div></div>`;
      $("#chkG").onclick=()=>{
        const a=parseFloat($("#gWT").value),b=parseFloat($("#gTAT").value);
        const okA=Math.abs(a-r.avgWT)<0.02,okB=isNaN(b)||Math.abs(b-r.avgTAT)<0.02;
        if(okA&&okB){
          $("#gRes").textContent="صح! حلّك مضبوط.";
          confetti(60);
          beep("soft");
          $("#solution").hidden=false;
          if(labChal)solved(labChal)
        }
        else $("#gRes").textContent=isNaN(a)?"اكتب متوسط WT أول.":"مو مضبوط. راجع ترتيب الـ Gantt، وتذكّر WT = TAT − BT. جرّب مرة ثانية أو اكشف الحل.";
        
      };
      $("#reveal").onclick=()=>{
        $("#solution").hidden=false
      };
      
    }else out.innerHTML=`<div class="card">${gantt}${table}</div>`;
  }

  const chl=ch=>"Chapter "+ch;

  /* generated questions */
  const rint=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  function addGen(ch,tp,q,opts,arx,enx){
    const o=[...new Set(opts.map(String))];let k=1;while(o.length<4){
      const x=String(Math.round((parseFloat(opts[0])+k*1.5)*100)/100);if(!o.includes(x))o.push(x);
      k++
    }Q.push([ch,tp,q,o.slice(0,4),arx,enx,0,1]);
    return Q.length-1
  }
  const fx2=x=>String(Math.round(x*100)/100);
  function genSched(alg,tp){
    const n=rint(3,4),pr=alg==="prio";
    const P=Array.from({length:n},(_,i)=>["P"+(i+1),alg==="rr"?0:rint(0,4),rint(1,9),rint(1,5)]);
    if(!P.some(p=>p[1]===0))P[0][1]=0;
    const q=rint(2,4);const r=schedule(P,alg,q);
    const others=["fcfs","sjf","rr","prio"].filter(a=>a!==alg).map(a=>schedule(P,a,q).avgWT);
    const name={fcfs:"FCFS",sjf:"SJF (non-preemptive)",rr:"Round Robin q = "+q,prio:"Priority (smaller = higher, non-preemptive)"}[alg];
    const list=P.map(p=>`${p[0]}(AT=${p[1]}, BT=${p[2]}${pr?", Pr="+p[3]:""})`).join(", ");
    const gantt=r.segs.map(s=>`${s.p==null?"idle":P[s.p][0]} ${s.s}–${s.e}`).join(" | ");
    const wts=r.rows.map(x=>`${x.name}=${x.wt}`).join("، ");
    return addGen(5,tp,`${name}: ${list}. Average waiting time?`,[fx2(r.avgWT),...others.map(fx2),fx2(r.avgTAT)],
    `الـ Gantt: ${gantt}. الانتظار WT = TAT − BT: ${wts} ← المتوسط ${fx2(r.avgWT)}.`,`Gantt: ${gantt}. WT = TAT − BT: ${r.rows.map(x=>x.name+"="+x.wt).join(", ")} → average ${fx2(r.avgWT)}.`);
  }
  const GEN={
    sfcfs:()=>genSched("fcfs","sfcfs"), ssjf:()=>genSched("sjf","ssjf"), srr:()=>genSched("rr","srr"), sprio:()=>genSched("prio","sprio"),
    pcreate:()=>{
      const n=rint(1,5);const k=Math.random()<.5;
      return k?addGen(3,"pcreate",`A program calls fork() ${n} time(s) in sequence (no if-checks). How many processes exist in total, including the original?`,[2**n,2*n,n+1,2**(n+1)].map(String),`كل fork يضاعف العمليات، فبعد ${n} مرات ← 2^${n} = ${2**n}.`,`Each fork() doubles the processes: 2^${n} = ${2**n}.`)
      :addGen(3,"pcreate",`fork() is called ${n} time(s) in sequence, then printf("hi"). How many times is "hi" printed?`,[2**n,n,2*n,2**n-1].map(String),`كل العمليات (2^${n} = ${2**n}) تطبع مرة.`,`All 2^${n} = ${2**n} processes print once.`)
    },
    scrit:()=>{
      const at=rint(0,6),bt=rint(2,9),wt=rint(0,10),ct=at+bt+wt;const ask=Math.random()<.5;
      return ask?addGen(5,"scrit",`A process arrives at ${at}, has burst ${bt}, and completes at ${ct}. Its waiting time is:`,[wt,ct-at,ct-bt,wt+bt].map(String),`TAT = ${ct} − ${at} = ${ct-at}، وWT = ${ct-at} − ${bt} = ${wt}.`,`TAT = ${ct} − ${at} = ${ct-at}; WT = ${ct-at} − ${bt} = ${wt}.`)
      :addGen(5,"scrit",`A process arrives at ${at}, has burst ${bt}, and completes at ${ct}. Its turnaround time is:`,[ct-at,wt,ct,bt+at].map(String),`TAT = CT − AT = ${ct} − ${at} = ${ct-at}.`,`TAT = CT − AT = ${ct} − ${at} = ${ct-at}.`)
    }
  };
  const genFor=tp=>GEN[tp]||null;
  const CHAL=Object.entries(PRESETS).map(([k,p])=>({id:k,tp:{fcfs1:"sfcfs",fcfs2:"sfcfs",sjf:"ssjf",srtf:"ssjf",rr:"srr",prio:"sprio",prr:"sprio"}[k],t:p.n}));
  const chalOfTopics=ids=>CHAL.filter(x=>ids.includes(x.tp));
  
  return {FIGS,TOPICS,Q,TOP,EX,HOT_POINTS,CH_NAMES,CHS,chl,GEN,genFor,CHAL,chalOfTopics,lab:{render:()=>{
        if(!labOpened){
          labOpened=true;
          if(!labPreset)labPreset=(CHAL.find(x=>!S.lab[x.id])||CHAL[0]).id
        }renderLab()
      },open:id=>{
        labOpened=true;
        labPreset=id
      }}};
  
}
