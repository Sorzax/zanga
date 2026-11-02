import { S, save } from '../core/state.js';
import { beep, confetti, toast } from '../core/effects.js';
import { $, $$, ar, pick, shuffle } from '../core/utils.js';

import { TOPICS, Q, CH_NAMES, CHS, EX, EXTRA_NAMES, DOCQ, PARTS, FIGS, HOT_POINTS } from '../../../data/subjects/algo.js';

export function createSubject() {
  
  /* ============ CONTENT ============ */
  /* Convention: text inside `backticks` is code; it is escaped and shown as <code>. Everything else in TOPICS may hold <b>. Q strings are fully escaped. */
  /* `x` = code; ^{x} = superscript; _{x} = subscript (works in TOPICS and Q). */

  const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const fm=s=>String(s).replace(/`([^`]+)`/g,(m,c)=>"<code>"+esc(c)+"</code>").replace(/_\{([^}]*)\}/g,"<sub>$1</sub>").replace(/\^\{([^}]*)\}/g,"<sup>$1</sup>");
  const iso=s=>String(s).replace(/[A-Za-z0-9ΘΩΟΣ∑√≈(\[|][^\u0600-\u06FF\u060C\u061B]*[^\u0600-\u06FF\u060C\u061B\s.]/g,m=>"\u2066"+m+"\u2069");
  const qt=s=>esc(s).replace(/`([^`]+)`/g,(m,c)=>"<code>"+c+"</code>").replace(/_\{([^}]*)\}/g,"<sub>$1</sub>").replace(/\^\{([^}]*)\}/g,"<sup>$1</sup>");

  const chl=ch=>ch>=90?"تدريبات الدكتور · Lecture "+(ch-89):"Lecture "+ch;

  /* Doctor's tutorial questions (Tutorials 1–5) — correct option first */

  const EXTRA={tab:"تدريبات من الدكتور",sub:"على الشباتر",lead:"أسئلة التدريب (Tutorials) اللي نزّلها الدكتور على كل محاضرة، بالترتيب ومع الإجابات المعتمدة. كل غلطة يطلع لك شرحها بالعربي والإنجليزي وتنحفظ في أخطائك.",
    sets:[["all","الكل",q=>q[0]>=90],["90","Lecture 1",q=>q[0]===90],["91","Lecture 2",q=>q[0]===91],["92","Lecture 3",q=>q[0]===92],["93","Lecture 4",q=>q[0]===93],["94","Lecture 5",q=>q[0]===94]]};
  
  /* the doctor's tutorial questions also live inside each lecture's question bank (first in their topic) */

  /* Lecture organisation following the doctor's tutorials (parts), slide figures, and lecture order fix */

  const TOP=Object.fromEntries(TOPICS.map((t,i)=>[t.id,Object.assign(t,{idx:i})]));
  /* ============ RAYEQ: ANALYSIS LAB ============ */
  const lg=(x,b)=>Math.log(x)/Math.log(b);
  const nk=k=>k===0?"1":k===1?"n":`n^{${k}}`;
  const lgp=p=>p===0?"":p===1?" log n":` log^{${p}} n`;
  const th=s=>`Θ(${s.replace(/^1 log/,"log")})`;
  function masterSolve(a,b,k,p){
    const L=lg(a,b), Li=Math.round(L), isInt=Math.abs(L-Li)<1e-9;
    const Lstr=isInt?String(Li):`log_{${b}}${a} ≈ ${(Math.round(L*100)/100)}`;
    const nL=isInt?nk(Li):`n^{log_{${b}}${a}} ≈ n^{${(Math.round(L*100)/100)}}`;
    let cs,res,why;
    if(L>k+1e-9){
      cs=1;
      res=th(nL);
      why=`log_{${b}}${a} = ${isInt?Li:(Math.round(L*100)/100)} > k = ${k}`
    }
    else if(Math.abs(L-k)<1e-9){
      cs=2;
      if(p>-1){
        res=th(nk(k)+lgp(p+1));
        why=`p = ${p} > −1 → n^{k} log^{p+1} n`
      }
      else if(p===-1){
        res=th(nk(k)+" log log n");
        why="p = −1 → n^{k} log log n"
      }
      else{
        res=th(nk(k));
        why=`p = ${p} < −1 → n^{k}`
      }
    }
    else{
      cs=3;
      if(p>=0){
        res=th(nk(k)+lgp(p));
        why=`p = ${p} ≥ 0 → n^{k} log^{p} n`
      }
      else{
        res=th(nk(k));
        why=`p = ${p} < 0 → n^{k}`
      }
    }
    const opts=[...new Set([res,th(nL),th(nk(k)+lgp(Math.max(p+1,1))),th(nk(k)),th(nk(k)+" log log n"),th(nk(k)+lgp(Math.max(p,0))),th(nk(k+1)),th("n")])];
    return{L,Lstr,cs,res,why,opts};
  }
  const fDisp=(k,p)=>{
    const top=nk(k);if(p===0)return top;
    if(p>0)return top+lgp(p);
    return `${top} / log^{${-p}} n`.replace("log^{1}","log")
  };
  const recDisp=(a,b,k,p)=>`T(n) = ${a===1?"":a}T(n/${b}) + ${fDisp(k,p)}`;
  const LOOPS={
    l1:{code:"for i = 1 to n:\n    print(\"Welcome\")",ans:"O(n)",run:n=>{
        let c=0;for(let i=1;i<=n;i++)c++;
        return c
      },why:"حلقة وحدة تتكرر n مرة."},
    l2:{code:"for i = 1 to n:\n    for j = 1 to n:\n        statement",ans:"O(n²)",run:n=>{
        let c=0;for(let i=1;i<=n;i++)for(let j=1;j<=n;j++)c++;
        return c
      },why:"n × n = n²."},
    l3:{code:"for i = 1 to n:\n    for j = 1 to i:\n        statement",ans:"O(n²)",run:n=>{
        let c=0;for(let i=1;i<=n;i++)for(let j=1;j<=i;j++)c++;
        return c
      },why:"Σ i = n(n+1)/2 → O(n²). نصف المربع بس الرتبة نفسها."},
    l4:{code:"i = 1\nwhile i < n:\n    i = i * 2",ans:"O(log n)",run:n=>{
        let c=0;for(let i=1;i<n;i*=2)c++;
        return c
      },why:"i تتضاعف كل مرة، فعدد المرات log₂ n."},
    l5:{code:"for i = 1 to n:\n    j = 1\n    while j < n:\n        j = j * 2",ans:"O(n log n)",run:n=>{
        let c=0;for(let i=1;i<=n;i++)for(let j=1;j<n;j*=2)c++;
        return c
      },why:"حلقة خارجية n × داخلية log n."},
    l6:{code:"for i = 1 to n:\n    for j = 1 to n:\n        for k = 1 to n:\n            C[i,j] += A[i,k]*B[k,j]",ans:"O(n³)",run:n=>{
        let c=0;for(let i=1;i<=n;i++)for(let j=1;j<=n;j++)for(let k=1;k<=n;k++)c++;
        return c
      },why:"ثلاث حلقات متداخلة: ضرب المصفوفات العادي n³."},
    l7:{code:"for i = 1 to n:\n    for j = 1 to 10:\n        statement",ans:"O(n)",run:n=>{
        let c=0;for(let i=1;i<=n;i++)for(let j=1;j<=10;j++)c++;
        return c
      },why:"الحلقة الداخلية ثابتة (10)، فالمجموع 10n = O(n). فخ!"},
    l8:{code:"i = n\nwhile i > 1:\n    for j = 1 to i:\n        statement\n    i = i / 2",ans:"O(n)",run:n=>{
        let c=0;for(let i=n;i>1;i=Math.floor(i/2))for(let j=1;j<=i;j++)c++;
        return c
      },why:"n + n/2 + n/4 + … ≈ 2n = O(n). نفس فكرة T(n/2) + n."}
  };
  const LOOP_OPTS=["O(1)","O(log n)","O(n)","O(n log n)","O(n²)","O(n³)"];
  const CHAL=[
  {id:"m1",tp:"master",kind:"m",t:"2T(n/2) + n",a:2,b:2,k:1,p:0},
  {id:"m2",tp:"master",kind:"m",t:"5T(n/2) + n²",a:5,b:2,k:2,p:0},
  {id:"m3",tp:"master",kind:"m",t:"12T(n/3) + n³",a:12,b:3,k:3,p:0},
  {id:"m4",tp:"master",kind:"m",t:"4T(n/2) + n²/log² n",a:4,b:2,k:2,p:-2},
  {id:"m5",tp:"master",kind:"m",t:"T(n/2) + 1",a:1,b:2,k:0,p:0},
  {id:"m6",tp:"matrix",kind:"m",t:"8T(n/2) + n²",a:8,b:2,k:2,p:0},
  {id:"m7",tp:"matrix",kind:"m",t:"7T(n/2) + n²",a:7,b:2,k:2,p:0},
  {id:"m8",tp:"master",kind:"m",t:"2T(n/2) + n/log n",a:2,b:2,k:1,p:-1},
  {id:"m9",tp:"master",kind:"m",t:"3T(n/4) + n log n",a:3,b:4,k:1,p:1},
  {id:"m10",tp:"master",kind:"m",t:"4T(n/2) + n² log n",a:4,b:2,k:2,p:1},
  ...Object.keys(LOOPS).map((k,i)=>({id:k,tp:"iter",kind:"l",t:"Loop "+(i+1)})),
  {id:"p1",tp:"dc",kind:"p",t:"Partition: موقع الـ pivot"},
  {id:"p2",tp:"qselect",kind:"p",t:"Quickselect: رابع أصغر عنصر"}
  ];
  const CHT=Object.fromEntries(CHAL.map(x=>[x.id,x]));
  const chalOfTopics=ids=>CHAL.filter(x=>ids.includes(x.tp));
  let labCur=null, labTab="m";
  const solved=id=>{
    const was=S.lab[id];S.lab[id]=true;
    save();
    if(!was){
      confetti(70);
      beep("soft");
      toast("تحدي محلول")
    }
  };
  function renderLab(){
    if(labCur&&CHT[labCur])labTab=CHT[labCur].kind;
    const cnt=k=>CHAL.filter(x=>x.kind===k);
    const done=k=>cnt(k).filter(x=>S.lab[x.id]).length;
    $("#labArea").innerHTML=`<div class="chips" style="margin:0">
    <button class="pill" data-lt="m" aria-pressed="${labTab==="m"}">Master Theorem (${ar(done("m"))}/${ar(cnt("m").length)})</button>
    <button class="pill" data-lt="l" aria-pressed="${labTab==="l"}">عدّاد الحلقات (${ar(done("l"))}/${ar(cnt("l").length)})</button>
    <button class="pill" data-lt="p" aria-pressed="${labTab==="p"}">Partition و Quickselect (${ar(done("p"))}/${ar(cnt("p").length)})</button>
    <button class="pill" data-lt="calc" aria-pressed="${labTab==="calc"}">حاسبة Master</button></div><div id="labIn"></div>`;
    $$("#labArea [data-lt]").forEach(b=>b.onclick=()=>{
      labTab=b.dataset.lt;
      labCur=null;
      renderLab()
    });
    ({m:labMaster,l:labLoops,p:labPart,calc:labCalc})[labTab]();
  }
  function pickList(kind){
    const items=CHAL.filter(x=>x.kind===kind);
    if(!labCur||!CHT[labCur]||CHT[labCur].kind!==kind)labCur=(items.find(x=>!S.lab[x.id])||items[0]).id;
    return `<div class="chips">${items.map(x=>`<button class="pill${S.lab[x.id]?" okp":""}" data-c="${x.id}" aria-pressed="${x.id===labCur}" dir="ltr">${S.lab[x.id]?"✓ ":""}${kind==="m"?mx(qt(x.t)):x.t}</button>`).join("")}</div>`;
  }
  const mx=s=>s;
  function bindPick(){
    $$("#labIn [data-c]").forEach(b=>b.onclick=()=>{
      labCur=b.dataset.c;
      renderLab()
    })
    
  }
  function stepsHTML(a,b,k,p,r){
    return `<ol class="steps">
   <li><b>Identify:</b> a = ${a}, b = ${b}, f(n) = ${fDisp(k,p)}</li>
   <li><b>f(n) = Θ(n^{k} log^{p} n):</b> k = ${k}, p = ${p}</li>
   <li><b>log_{b} a</b> = log_{${b}} ${a} = ${r.Lstr.replace(/^log_\{\d+\}\d+ ≈ /,"≈ ")}</li>
   <li><b>Compare:</b> log_{b} a ${r.cs===1?"&gt;":r.cs===2?"=":"&lt;"} k → <b>Case ${r.cs}</b></li>
   <li><b>Apply:</b> ${r.why} → <b>T(n) = ${r.res}</b></li></ol>`.replace(/_\{([^}]*)\}/g,"<sub>$1</sub>").replace(/\^\{([^}]*)\}/g,"<sup>$1</sup>");
  }
  function labMaster(){
    const c=CHT[labCur]&&CHT[labCur].kind==="m"?CHT[labCur]:null; const html=pickList("m");
    const x=c||CHT[labCur]; const r=masterSolve(x.a,x.b,x.k,x.p);
    const opts=[r.res,...shuffle(r.opts.filter(o=>o!==r.res)).slice(0,3)];
    let pickCase=null;
    $("#labIn").innerHTML=html+`<div class="card"><p class="arl" style="margin:0 0 4px">طبّق المبرهنة الرئيسية بنفسك:</p>
   <p class="recur" dir="ltr">${qt(recDisp(x.a,x.b,x.k,x.p))}</p>
   <p style="margin:10px 0 6px"><b>1. أي حالة؟</b></p><div class="chips" id="caseBtns">${[1,2,3].map(i=>`<button class="pill" data-case="${i}">Case ${i}</button>`).join("")}</div>
   <p style="margin:10px 0 6px"><b>2. وش الجواب؟</b></p><div class="chips" id="resBtns">${shuffle(opts).map(o=>`<button class="pill" data-res="${esc(o)}" dir="ltr">${qt(o)}</button>`).join("")}</div>
   <div class="row" style="justify-content:flex-start"><button class="btn" id="mChk">تحقّق</button><button class="btn ghost" id="mShow">اكشف الحل</button></div><div id="mOut"></div></div>`;
    bindPick();
    $$("#caseBtns .pill").forEach(b=>b.onclick=()=>{
      pickCase=+b.dataset.case;
      $$("#caseBtns .pill").forEach(y=>y.setAttribute("aria-pressed",y===b))
    });
    let pickRes=null;
    $$("#resBtns .pill").forEach(b=>b.onclick=()=>{
      pickRes=b.dataset.res;
      $$("#resBtns .pill").forEach(y=>y.setAttribute("aria-pressed",y===b))
    });
    $("#mChk").onclick=()=>{
      if(pickCase==null||pickRes==null){
        $("#mOut").innerHTML=`<p class="arl">اختر الحالة والجواب أول.</p>`;
        return
      }
      const okC=pickCase===r.cs, okR=pickRes===r.res;
      $("#mOut").innerHTML=`<ul class="checks"><li class="${okC?"y":"n"}">${okC?"✓":"✗"} الحالة</li><li class="${okR?"y":"n"}">${okR?"✓":"✗"} الجواب</li></ul>${okC&&okR?stepsHTML(x.a,x.b,x.k,x.p,r):`<p class="arl">${!okC?"راجع المقارنة بين log_b a و k.":"الحالة صح، راجع قاعدة p داخل الحالة."}</p>`}`.replace("log_b a","log<sub>b</sub> a");
      if(okC&&okR)solved(x.id);
      
    };
    $("#mShow").onclick=()=>{
      $("#mOut").innerHTML=stepsHTML(x.a,x.b,x.k,x.p,r)
    };
  }
  function labCalc(){
    $("#labIn").innerHTML=`<div class="card"><p class="arl" style="margin:0 0 8px">اكتب أي علاقة من الشكل T(n) = aT(n/b) + Θ(n<sup>k</sup> log<sup>p</sup> n) وتطلع لك الخطوات الخمس مثل السلايدات:</p>
   <div class="ctrls" dir="ltr"><label>a <input id="ca" type="number" min="1" value="2"></label><label>b <input id="cb" type="number" min="2" value="2"></label><label>k <input id="ck" type="number" step="0.5" value="1"></label><label>p <input id="cp" type="number" value="0"></label></div>
   <p class="recur" dir="ltr" id="cRec"></p><div id="cOut"></div></div>`;
    const go=()=>{
      const a=Math.max(1,+$("#ca").value||1),b=Math.max(2,+$("#cb").value||2),k=+$("#ck").value||0,p=Math.round(+$("#cp").value||0);
      $("#cRec").innerHTML=qt(recDisp(a,b,k,p));
      $("#cOut").innerHTML=stepsHTML(a,b,k,p,masterSolve(a,b,k,p))
    };
    $$("#labIn input").forEach(i=>i.oninput=go);
    go();
  }
  function labLoops(){
    const html=pickList("l"); const L=LOOPS[labCur]; let pick=null;
    const ns=[16,32,64,128,256];
    $("#labIn").innerHTML=html+`<div class="card"><p class="arl" style="margin:0 0 6px">كم مرة تتنفذ العملية الداخلية؟ توقّع الـ Big-O، بعدين شغّل وشوف الأرقام.</p>
   <pre class="sol" dir="ltr">${esc(L.code)}</pre>
   <div class="chips" id="loBtns">${LOOP_OPTS.map(o=>`<button class="pill" data-o="${o}" dir="ltr">${o}</button>`).join("")}</div>
   <div class="row" style="justify-content:flex-start"><button class="btn" id="loChk">تحقّق</button><button class="btn ghost" id="loRun">شغّل وعدّ</button></div><div id="loOut"></div><div id="loRunOut"></div></div>`;
    bindPick();
    $$("#loBtns .pill").forEach(b=>b.onclick=()=>{
      pick=b.dataset.o;
      $$("#loBtns .pill").forEach(y=>y.setAttribute("aria-pressed",y===b))
    });
    $("#loChk").onclick=()=>{
      if(!pick){
        $("#loOut").innerHTML=`<p class="arl">اختر جواب أول.</p>`;
        return
      }
      const ok=pick===L.ans;$("#loOut").innerHTML=`<ul class="checks"><li class="${ok?"y":"n"}">${ok?"✓ صح":"✗ الجواب "+L.ans}</li></ul><p class="arl">${L.why}</p>`;
      if(ok)solved(labCur)
    };
    $("#loRun").onclick=()=>{
      const rows=ns.map(n=>[n,L.run(n)]);
      $("#loRunOut").innerHTML=`<div class="ptable-wrap"><table class="pt"><thead><tr><th>n</th><th>عدد التنفيذ</th><th>T(2n) ÷ T(n)</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${r[0]}</td><td>${r[1].toLocaleString("en")}</td><td>${i?(Math.round(100*r[1]/rows[i-1][1])/100):"—"}</td></tr>`).join("")}</tbody></table></div>
    <p class="arl">لما n تتضاعف: النسبة ≈ 1 يعني log n (يزيد بواحد)، ≈ 2 يعني n، شوي فوق 2 يعني n log n، ≈ 4 يعني n²، ≈ 8 يعني n³.</p>`
    };
  }
  function lomuto(A,low,high){
    const a=A.slice(),st=[];const pv=a[high];let i=low-1;
    st.push({a:a.slice(),i,j:null,msg:`pivot = A[${high}] = ${pv}، و i = ${i}`});
    for(let j=low;j<high;j++){
      if(a[j]<=pv){
        i++;
        [a[i],a[j]]=[a[j],a[i]];
        st.push({a:a.slice(),i,j,msg:`A[${j}] = ${a[i]} ≤ ${pv} → i = ${i}، بدّل A[${i}] و A[${j}]`})
      }
      else st.push({a:a.slice(),i,j,msg:`A[${j}] = ${a[j]} > ${pv} → ما نسوي شي`});
      
    }
    [a[i+1],a[high]]=[a[high],a[i+1]];
    st.push({a:a.slice(),i,j:null,p:i+1,msg:`بدّل A[${i+1}] و A[${high}] → الـ pivot في موقعه: p = ${i+1}`});
    return st;
  }
  let partArr=[2,3,1,9,7,6,10,5];
  function labPart(){
    const html=pickList("p");
    const st=lomuto(partArr,0,partArr.length-1); let s=0;
    const sorted=partArr.slice().sort((x,y)=>x-y);
    const isP1=labCur==="p1";
    $("#labIn").innerHTML=html+`<div class="card">
   <p style="margin:0 0 6px">${isP1?`نفّذ Partition (Lomuto، الـ pivot آخر عنصر) على المصفوفة. <b>وش موقع الـ pivot النهائي p (0-based)؟</b>`:`مثال السلايد: <b>وش رابع أصغر عنصر (k = 3، 0-based)؟</b> استخدم الـ Partition: إذا p = k خلصنا.`}</p>
   <div class="ctrls" dir="ltr"><label>Array <input id="pArr" value="${partArr.join(", ")}" style="width:220px"></label></div>
   <div class="guess" style="margin-top:8px"><label>${isP1?"p =":"العنصر ="} <input id="pAns" type="number" dir="ltr"></label><button class="btn" id="pChk">تحقّق</button></div><p id="pRes" class="arl"></p>
   <div class="arr" id="arrV" dir="ltr"></div><p class="arl" id="pMsg" dir="rtl"></p>
   <div class="row" style="justify-content:flex-start"><button class="btn ghost" id="pPrev">→ السابق</button><button class="btn ghost" id="pNext">الخطوة الجاية ←</button></div></div>`;
    bindPick();
    const draw=()=>{
      const x=st[s];$("#arrV").innerHTML=x.a.map((v,i)=>`<span class="cell${i===partArr.length-1&&x.p==null?" pv":""}${x.p===i?" pv done":""}${i<=x.i&&x.p==null?" le":""}${i===x.j?" cur":""}"><b>${v}</b><small>${i}</small></span>`).join("");
      $("#pMsg").textContent=`خطوة ${s+1}/${st.length}: ${x.msg}`
    };
    draw();
    $("#pNext").onclick=()=>{
      if(s<st.length-1){
        s++;
        draw()
      }
    };
    $("#pPrev").onclick=()=>{
      if(s>0){
        s--;
        draw()
      }
    };
    $("#pArr").onchange=e=>{
      const v=e.target.value.split(/[ ,]+/).map(Number).filter(x=>!isNaN(x));if(v.length>=3&&v.length<=12){
        partArr=v;
        labPart()
      }
    };
    $("#pChk").onclick=()=>{
      const v=+$("#pAns").value;const target=isP1?st[st.length-1].p:sorted[3];
      if(v===target){
        $("#pRes").textContent=isP1?`صح! p = ${target}`:`صح! الرابع = ${target}${st[st.length-1].p===3?"، وطلع من أول partition لأن p = k = 3.":"."}`;
        const isSlide=partArr.join()==="2,3,1,9,7,6,10,5";if(isSlide)solved(labCur);
        else toast("صح")
      }
      else $("#pRes").textContent="مو صح. امش على الخطوات تحت وشوف وين يوقف الـ pivot."
    };
  }

  /* ============ GENERATED PRACTICE ============ */
  const rint=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  const GROW=[["1","1"],["log n","log n"],["n","n"],["n log n","n log n"],["n²","n²"],["n³","n³"],["2^{n}","2ⁿ"],["n!","n!"]];
  function addGen(ch,tp,q,opts,arx,enx){
    Q.push([ch,tp,q,opts,arx,enx,0,1]);
    return Q.length-1
  }
  const GEN={
    growth:()=>{
      let a=rint(0,7),b=rint(0,7);while(b===a)b=rint(0,7);
      const f=Math.max(a,b);
      return addGen(1,"growth",`Which grows faster for large n: ${GROW[a][0]} or ${GROW[b][0]}?`,[GROW[f][0],GROW[Math.min(a,b)][0],"They grow at the same rate","It depends on the constant"],
      `حسب الترتيب: 1 < log n < n < n log n < n² < n³ < 2ⁿ < n!، فـ ${GROW[f][1]} أسرع.`,`By the order 1 < log n < n < n log n < n² < n³ < 2ⁿ < n!, ${GROW[f][1]} grows faster.`)
    },
    bigo:()=>{
      const T=[["n³",5],["n²",4],["n log n",3],["n",2],["log n",1]];const pickT=shuffle(T).slice(0,3).sort((x,y)=>y[1]-x[1]);
      const cs=pickT.map(()=>rint(2,60));const f=pickT.map((t,i)=>`${cs[i]}${t[0]}`).join(" + ")+` + ${rint(5,999)}`;
      const dom=pickT[0][0];const others=T.map(t=>`O(${t[0]})`).filter(x=>x!==`O(${dom})`);
      return addGen(1,"bigo",`Tight Big-O of f(n) = ${f}:`,[`O(${dom})`,...shuffle(others).slice(0,3)],
      `الحد المسيطر ${cs[0]}${dom}، نحذف الثابت: O(${dom}).`,`The dominant term is ${cs[0]}${dom}; dropping the constant gives O(${dom}).`)
    },
    compare:()=>{
      let a=rint(1,6),b=rint(1,6);const rel=pick(["O","Ω","Θ"]);
      const ok=rel==="O"?a<=b:rel==="Ω"?a>=b:a===b;
      const why=a===b?"same growth rate":a<b?`${GROW[a][1]} grows slower than ${GROW[b][1]}`:`${GROW[a][1]} grows faster than ${GROW[b][1]}`;
      const whyA=a===b?"نفس معدل النمو":a<b?`${GROW[a][1]} أبطأ من ${GROW[b][1]}`:`${GROW[a][1]} أسرع من ${GROW[b][1]}`;
      return addGen(2,"compare",`True or False: ${GROW[a][0]} = ${rel}(${GROW[b][0]})`,[ok?"True":"False",ok?"False":"True"],
      `${whyA}. O تعني ≤ بالنمو، Ω تعني ≥، Θ تعني =، فالجواب ${ok?"صح":"خطأ"}.`,`${why}. O means ≤ in growth, Ω means ≥, Θ means =, so it is ${ok?"True":"False"}.`)
    },
    iter:()=>{
      const k=pick(Object.keys(LOOPS));const L=LOOPS[k];
      return addGen(3,"iter",`Time complexity of:\n\`${L.code.replace(/\n/g," ⏎ ")}\``,[L.ans,...shuffle(LOOP_OPTS.filter(o=>o!==L.ans)).slice(0,3)],L.why,{
        l1:"A single loop of n iterations: O(n).",l2:"n × n nested iterations: O(n²).",l3:"Σ i = n(n+1)/2: O(n²).",l4:"i doubles each time: O(log n).",l5:"n outer × log n inner: O(n log n).",l6:"Three nested loops: O(n³).",l7:"The inner loop is constant (10): 10n = O(n).",l8:"n + n/2 + n/4 + … ≈ 2n: O(n)."}[k])
    },
    master:()=>{
      const c=pick([[1,2,0,0],[2,2,1,0],[2,2,0,0],[2,2,2,0],[3,2,1,0],[4,2,1,0],[4,2,2,0],[4,2,3,0],[8,2,2,0],[8,2,3,0],[7,2,2,0],[9,3,1,0],[9,3,2,0],[9,3,3,0],[2,4,0.5,0],[3,3,1,1],[2,2,1,1],[2,2,1,-1],[2,2,1,-2],[4,2,2,-1],[4,2,2,1],[16,4,2,0],[3,4,1,1],[5,2,2,0],[27,3,3,0],[2,2,3,-1]]);
      const [a,b,k,p]=c;const r=masterSolve(a,b,k,p);const opts=[r.res,...shuffle(r.opts.filter(o=>o!==r.res)).slice(0,3)];
      const L=Math.round(r.L*100)/100;
      return addGen(4,"master",`${recDisp(a,b,k,p)} solves to:`,opts,
      `a = ${a}، b = ${b}، k = ${k}، p = ${p}. log_{${b}} ${a} = ${L} ${r.cs===1?">":r.cs===2?"=":"<"} k ← Case ${r.cs}. ${r.why} ← ${r.res}.`,
      `a = ${a}, b = ${b}, k = ${k}, p = ${p}. log_{${b}} ${a} = ${L} ${r.cs===1?">":r.cs===2?"=":"<"} k → Case ${r.cs}. ${r.why} → ${r.res}.`)
    },
    dc:()=>{
      const A=shuffle([...Array(30).keys()].map(x=>x+1)).slice(0,rint(5,8));const pv=A[A.length-1];const p=A.slice(0,-1).filter(x=>x<=pv).length;
      const o=new Set([p]);while(o.size<4)o.add(rint(0,A.length-1));
      return addGen(4,"dc",`Lomuto partition on [${A.join(", ")}] with pivot = last element (${pv}). Final pivot index (0-based)?`,[...o].map(String),
      `العناصر الأصغر من أو تساوي ${pv}: ${p} عنصر، فالـ pivot يستقر في موقع ${p}.`,`${p} element(s) are ≤ ${pv}, so the pivot ends at index ${p}.`)
    },
    qselect:()=>{
      const A=shuffle([...Array(40).keys()].map(x=>x+1)).slice(0,rint(6,9));const k=rint(0,A.length-1);const s=A.slice().sort((x,y)=>x-y);
      const o=new Set([s[k]]);while(o.size<4)o.add(pick(A));
      return addGen(5,"qselect",`Quickselect: find k = ${k} (0-based) in [${A.join(", ")}]`,[...o].map(String),
      `المرتبة: ${s.join(", ")} ← الموقع ${k} = ${s[k]}.`,`Sorted: ${s.join(", ")} → index ${k} is ${s[k]}.`)
    }
  };
  GEN.timec=GEN.iter;
  const genFor=tp=>GEN[tp]||null;

  /* questions above the tutorials' level (long traces / heavy arithmetic) — hidden, kept in place so saved indices stay valid */

  /* self-contained wording: no question depends on unseen slide code or "according to the slides" */

  return {TOPICS,Q,TOP,EX,HOT_POINTS,CH_NAMES,CHS,chl,GEN,genFor,CHAL,chalOfTopics,EXTRA,EXTRA_NAMES,PARTS,FIGS,DOCQ,lab:{render:renderLab,open:id=>{
        labCur=id
      }}};
  
}
