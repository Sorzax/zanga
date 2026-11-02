import { S } from '../core/state.js';
import { solved } from '../core/rewards.js';
import { fm, $, $$, ar, pick } from '../core/utils.js';

import { FIGS, TOPICS, Q, EXTRA_NAMES, CH_NAMES, CHS, EX, HOT_POINTS } from '../../../data/subjects/net.js';

export function createSubject() {
  
  /* Networks — Kurose & Ross v8.2, Ch 1–3. pts: [English as on the slides, accurate Arabic meaning] */

  /* [ch, topic, question, [correct, ...wrong], arabic explanation, english explanation, hot] */

  /* Important questions (Ch 1–3 only). ch 90 = Ch1, 91 = Ch2, 92 = Ch3 */

  const EXTRA={tab:"أسئلة مهمة",sub:"ذاكرها",lead:"أسئلة مهمة على الشابترات 1 و2 و3، بنفس أسلوب أسئلة الاختبارات: صح وخطأ، اختيارات، ومسائل حسابية. ذاكرها كلها، وكل غلطة يطلع لك شرحها بالعربي والإنجليزي وتنحفظ في أخطائك.",
    sets:[["all","الكل",q=>q[0]>=90],["90","Ch 1",q=>q[0]===90],["91","Ch 2",q=>q[0]===91],["92","Ch 3",q=>q[0]===92]]};

  const TOP=Object.fromEntries(TOPICS.map((t,i)=>[t.id,Object.assign(t,{idx:i})]));

  const chl=ch=>ch>=90?"أسئلة مهمة · Ch "+(ch-89):"Chapter "+ch;

  /* ============ NETWORK CALCULATIONS LAB ============ */
  const nf=(x,d=3)=>{
    if(!isFinite(x))return"∞";
    const a=Math.abs(x);if(a>=1e7)return x.toExponential(2);
    if(a!==0&&a<0.01)return String(+x.toPrecision(3));
    return String(Math.round(x*10**d)/10**d)
  };
  function ones16(words){
    let s=0;const st=[];words.forEach((w,i)=>{
      s+=parseInt(w,2);
      const c=s>0xffff;if(c)s=(s&0xffff)+1;
      st.push({i,sum:s,carry:c})
    });
    const sum=s.toString(2).padStart(16,"0");const cs=(~s&0xffff).toString(2).padStart(16,"0");return{sum,cs,st}
  }
  function cwndTrace(ss0,rounds,events,ver){
    let cwnd=1,ss=ss0;const rows=[];
    for(let r=1;r<=rounds;r++){
      const ev=events[r];rows.push({r,cwnd,ss,phase:cwnd<ss?"SS":"CA",ev:ev||""});
      if(ev){
        ss=Math.max(1,Math.floor(cwnd/2));
        cwnd=(ev==="3D"&&ver==="reno")?ss+3:1;
        continue
      }
      cwnd=cwnd<ss?Math.min(cwnd*2,ss):cwnd+1;
      
    }
    return rows;
  }
  const LCHAL=[
  {id:"n1",tp:"delay",t:"قافلة السيارات",prompt:"Caravan: 10 cars, toll booth takes <b>12 sec/car</b>, next booth <b>100 km</b> away, cars travel at <b>100 km/hr</b>. How many <b>minutes</b> until the caravan is lined up at the 2nd booth?",ans:62,tol:0.01,unit:"min",steps:"d_trans = 12 × 10 = 120 s = 2 min · d_prop = 100 km ÷ 100 km/hr = 60 min · total = <b>62 min</b>"},
  {id:"n2",tp:"delay",t:"إرسال + انتشار",prompt:"L = 1,500 bytes, R = 10 Mbps, link length d = 4,000 km, s = 2×10^{8} m/s. Find <b>d_trans + d_prop</b> in <b>ms</b>.",ans:21.2,tol:0.05,unit:"ms",steps:"L = 1500 × 8 = 12,000 bits · d_trans = 12,000 / 10^{7} = 1.2 ms · d_prop = 4×10^{6} / 2×10^{8} = 20 ms · total = <b>21.2 ms</b>"},
  {id:"n3",tp:"core",t:"Store-and-forward",prompt:"A 10,000-bit packet crosses <b>3 links</b> of 1 Mbps each (store-and-forward, ignore propagation, processing, queueing). End-end delay in <b>ms</b>?",ans:30,tol:0.01,unit:"ms",steps:"each link L/R = 10,000 / 10^{6} = 10 ms · 3 links × 10 ms = <b>30 ms</b>"},
  {id:"n4",tp:"queue",t:"شدة الترافيك",prompt:"a = 100 packets/sec, L = 10,000 bits, R = 1.5 Mbps. Traffic intensity <b>La/R</b>? (decimal)",ans:0.667,tol:0.005,unit:"",steps:"La = 10,000 × 100 = 10^{6} bps · La/R = 10^{6} / 1.5×10^{6} = <b>0.667</b> → below 1, delay finite but noticeable"},
  {id:"n5",tp:"thru",t:"عنق الزجاجة",prompt:"R_s = 5 Mbps, R_c = 4 Mbps, backbone R = 30 Mbps shared fairly by <b>10</b> connections. Per-connection throughput in <b>Mbps</b>?",ans:3,tol:0.01,unit:"Mbps",steps:"R/10 = 3 Mbps · min(5, 4, 3) = <b>3 Mbps</b> (the backbone share is the bottleneck)"},
  {id:"n6",tp:"httpconn",t:"HTTP غير الدائم",prompt:"Base HTML + <b>10</b> small images, RTT = 50 ms, ignore transmission times. Non-persistent HTTP, <b>no parallel</b> connections. Total time in <b>ms</b>?",ans:1100,tol:0.5,unit:"ms",steps:"11 objects × 2RTT = 22 RTT · 22 × 50 = <b>1100 ms</b>"},
  {id:"n7",tp:"httpconn",t:"HTTP الدائم",prompt:"Same page (base + 10 small images, RTT = 50 ms). <b>Persistent</b> HTTP where the client requests all images at once (as little as one RTT for all referenced objects). Total time in <b>ms</b>?",ans:150,tol:0.5,unit:"ms",steps:"2RTT for the base file (TCP setup + request) + 1RTT for all 10 images = 3 RTT = <b>150 ms</b>"},
  {id:"n8",tp:"cache",t:"Web cache",prompt:"Access link 1.54 Mbps, avg data rate to browsers 1.50 Mbps, cache hit rate <b>0.4</b>. Access link <b>utilization</b>? (decimal)",ans:0.584,tol:0.006,unit:"",steps:"rate over access link = 0.6 × 1.50 = 0.9 Mbps · utilization = 0.9 / 1.54 = <b>0.58</b>"},
  {id:"n9",tp:"p2p",t:"توزيع عميل/خادم",prompt:"F = 600 Mbit, u_s = 60 Mbps, d_min = 20 Mbps, N = 20. <b>Client-server</b> minimum distribution time in <b>seconds</b>?",ans:200,tol:0.5,unit:"s",steps:"NF/u_s = 20 × 600 / 60 = 200 s · F/d_min = 600 / 20 = 30 s · max = <b>200 s</b>"},
  {id:"n10",tp:"p2p",t:"توزيع P2P",prompt:"Same file: F = 600 Mbit, u_s = 60 Mbps, d_min = 20 Mbps, N = 20, each peer uploads <b>u = 10 Mbps</b>. <b>P2P</b> minimum distribution time in <b>seconds</b>?",ans:46.15,tol:0.1,unit:"s",steps:"F/u_s = 10 s · F/d_min = 30 s · NF/(u_s + Σu_i) = 12,000 / (60 + 200) = 46.15 s · max = <b>46.15 s</b> (vs 200 s client-server)"},
  {id:"n11",tp:"udp",t:"Internet checksum",prompt:"Compute the Internet checksum of the two 16-bit words:<br>`1110011001100110`<br>`1101010101010101`<br>Type the <b>16-bit checksum</b>.",ans:"0100010001000011",unit:"",steps:"sum = 1 1011101110111011 → wrap the carry: 1011101110111100 → flip every bit → <b>0100010001000011</b>"},
  {id:"n12",tp:"pipe",t:"استغلال أرسل-وانتظر",prompt:"R = 1 Gbps, one-way propagation = 15 ms, L = 8,000 bits. Stop-and-wait <b>U_sender</b>? (decimal)",ans:0.00027,tol:0.000005,unit:"",steps:"L/R = 8 µs = 0.008 ms · RTT = 30 ms · U = 0.008 / 30.008 = <b>0.00027</b>"},
  {id:"n13",tp:"gbn",t:"GBN مقابل SR",prompt:"Window N = 4, sender sends pkt0–pkt5; <b>pkt2 is lost</b>, all others arrive. After the timeout, how many packets does <b>Go-Back-N</b> retransmit? (Selective Repeat would resend only 1.)",ans:4,tol:0.01,unit:"packets",steps:"GBN resends pkt2 and every later packet in the window: pkt2, pkt3, pkt4, pkt5 = <b>4</b>"},
  {id:"n14",tp:"rtt",t:"EstimatedRTT و Timeout",prompt:"EstimatedRTT = 100 ms, DevRTT = 5 ms, new SampleRTT = 140 ms, α = 0.125, β = 0.25. Find the new <b>TimeoutInterval</b> in ms (update EstimatedRTT first, then DevRTT using the new EstimatedRTT).",ans:155,tol:0.05,unit:"ms",steps:"Est = 0.875×100 + 0.125×140 = 105 ms · Dev = 0.75×5 + 0.25×|140 − 105| = 3.75 + 8.75 = 12.5 ms · Timeout = 105 + 4×12.5 = <b>155 ms</b>"},
  {id:"n15",tp:"tcpcc",t:"cwnd بعد timeout",prompt:"Slow start begins with cwnd = 1 MSS, ssthresh = 8. Round 1: cwnd = 1, then 2, 4, 8, then congestion avoidance 9, 10, 11, 12. A <b>timeout</b> occurs when cwnd = 12. What is the <b>new ssthresh</b> (MSS)?",ans:6,tol:0.01,unit:"MSS",steps:"on loss ssthresh = cwnd / 2 = 12 / 2 = <b>6</b>; with a timeout cwnd drops to 1 MSS and slow start restarts: 1, 2, 4, 6, 7…"}
  ];
  const CHAL=LCHAL.map(x=>({id:x.id,tp:x.tp,t:x.t}));
  const LCT=Object.fromEntries(LCHAL.map(x=>[x.id,x]));
  const chalOfTopics=ids=>CHAL.filter(x=>ids.includes(x.tp));
  let labCur=null, labTab="ch", calcTab="delay";
  const CALCS={delay:"التأخير",thru:"الإنتاجية",http:"زمن HTTP",p2p:"توزيع الملفات",rtt:"RTT و Timeout",cks:"Checksum",util:"الاستغلال",cwnd:"cwnd خطوة بخطوة"};
  function renderLab(){
    const done=CHAL.filter(x=>S.lab[x.id]).length;
    $("#labArea").innerHTML=`<div class="chips" style="margin:0"><button class="pill" data-lt="ch" aria-pressed="${labTab==="ch"}">تحديات الحسابات (${ar(done)}/${ar(CHAL.length)})</button><button class="pill" data-lt="calc" aria-pressed="${labTab==="calc"}">الحاسبات</button></div><div id="labIn"></div>`;
    $$("#labArea [data-lt]").forEach(b=>b.onclick=()=>{
      labTab=b.dataset.lt;
      renderLab()
    });
    labTab==="ch"?labChal():labCalcs();
  }
  function labChal(){
    if(!labCur||!LCT[labCur])labCur=(CHAL.find(x=>!S.lab[x.id])||CHAL[0]).id;
    const c=LCT[labCur];
    $("#labIn").innerHTML=`<div class="chips" style="margin-top:10px">${CHAL.map((x,k)=>`<button class="pill${S.lab[x.id]?" okp":""}" data-c="${x.id}" aria-pressed="${x.id===labCur}">${S.lab[x.id]?"✓ ":""}${ar(k+1)}. ${x.t}</button>`).join("")}</div>
   <div class="card"><p class="arl" style="margin:0 0 6px">حل على ورقة، اكتب الجواب، وبعدها شوف الخطوات. <span class="ttl">${TOP[c.tp].t}</span></p>
   <p class="enl" dir="ltr">${fm(c.prompt)}</p>
   <div class="guess" style="margin-top:10px"><label>الجواب <input id="lcAns" ${typeof c.ans==="string"?'':'type="number" step="any"'} dir="ltr" style="width:${typeof c.ans==="string"?"200px":"130px"}"></label>${c.unit?`<span class="en">${c.unit}</span>`:""}<button class="btn" id="lcChk">تحقّق</button><button class="btn ghost" id="lcShow">اكشف الحل</button></div>
   <p id="lcRes" class="arl"></p><div id="lcSteps"></div></div>`;
    $$("#labIn [data-c]").forEach(b=>b.onclick=()=>{
      labCur=b.dataset.c;
      labChal()
    });
    const steps=()=>{
      $("#lcSteps").innerHTML=`<p class="formula" dir="ltr">${fm(c.steps)}</p>`
    };
    $("#lcChk").onclick=()=>{
      const raw=$("#lcAns").value.trim(); if(!raw){
        $("#lcRes").textContent="اكتب جوابك أول.";
        return
      }
      const ok=typeof c.ans==="string"?raw.replace(/\s/g,"")===c.ans:Math.abs(parseFloat(raw)-c.ans)<=Math.max(c.tol||0,Math.abs(c.ans)*0.002);
      if(ok){
        $("#lcRes").textContent="صح! حلّك مضبوط.";
        steps();
        solved(c.id)
      }
      else $("#lcRes").textContent="مو مضبوط. راجع الوحدات (bits مقابل bytes، ms مقابل s) وجرّب مرة ثانية، أو اكشف الحل.";
      
    };
    $("#lcShow").onclick=steps;
  }
  function numIn(id,label,val,step){
    return `<label>${label} <input id="${id}" type="number" step="${step||"any"}" value="${val}" dir="ltr"></label>`
  }
  function labCalcs(){
    $("#labIn").innerHTML=`<div class="chips" style="margin-top:10px">${Object.entries(CALCS).map(([k,v])=>`<button class="pill" data-k="${k}" aria-pressed="${k===calcTab}">${v}</button>`).join("")}</div><div class="card" id="calcBox"></div>`;
    $$("#labIn [data-k]").forEach(b=>b.onclick=()=>{
      calcTab=b.dataset.k;
      labCalcs()
    });
    const box=$("#calcBox"),v=id=>parseFloat($("#"+id).value)||0;
    const F={
      delay:{h:`<p class="arl" style="margin:0 0 8px">d<sub>nodal</sub> = d<sub>proc</sub> + d<sub>queue</sub> + L/R + d/s، ومع store-and-forward على N روابط.</p><div class="ctrls" dir="ltr">${numIn("dL","L (bits)",12000)}${numIn("dR","R (Mbps)",10)}${numIn("dD","d (km)",4000)}${numIn("dS","s (m/s)",2e8)}${numIn("dN","links N",1,1)}${numIn("dP","proc+queue per hop (ms)",0)}</div>`,
        go:()=>{
          const tr=v("dL")/(v("dR")*1e6)*1e3,pr=v("dD")*1e3/v("dS")*1e3,N=Math.max(1,Math.round(v("dN")));
          return `d_trans = L/R = ${v("dL")} / ${v("dR")}×10^{6} = <b>${nf(tr)} ms</b> · d_prop = d/s = ${v("dD")} km / ${v("dS")} = <b>${nf(pr)} ms</b><br>one hop = ${nf(tr+pr+v("dP"))} ms · ${N} hop(s) store-and-forward = N·(L/R + d/s + proc/queue) = <b>${nf(N*(tr+pr+v("dP")))} ms</b>`
        }},
      thru:{h:`<div class="ctrls" dir="ltr">${numIn("tS","R_s (Mbps)",5)}${numIn("tC","R_c (Mbps)",4)}${numIn("tR","backbone R (Mbps)",30)}${numIn("tK","connections sharing R",10,1)}</div>`,
        go:()=>{
          const sh=v("tR")/Math.max(1,v("tK")),m=Math.min(v("tS"),v("tC"),sh);const who=m===v("tS")?"R_s":m===v("tC")?"R_c":"R/"+v("tK");return `R/${v("tK")} = ${nf(sh)} · throughput = min(${v("tS")}, ${v("tC")}, ${nf(sh)}) = <b>${nf(m)} Mbps</b> → bottleneck: <b>${who}</b>`
        }},
      http:{h:`<div class="ctrls" dir="ltr">${numIn("hR","RTT (ms)",50)}${numIn("hN","referenced objects",10,1)}${numIn("hT","transmission per object (ms)",0)}${numIn("hP","parallel connections",1,1)}</div>`,
        go:()=>{
          const R=v("hR"),n=Math.round(v("hN")),t=v("hT"),p=Math.max(1,Math.round(v("hP")));
          const np=(n+1)*(2*R+t), par=(2*R+t)+Math.ceil(n/p)*(2*R+t), pers=2*R+t+R+n*t, persNo=2*R+t+n*(R+t);
          return `non-persistent, serial: (n+1)·(2RTT + t) = <b>${nf(np)} ms</b><br>non-persistent, ${p} parallel: 2RTT + t + ⌈n/${p}⌉·(2RTT + t) = <b>${nf(par)} ms</b><br>persistent, no pipelining: 2RTT + t + n·(RTT + t) = <b>${nf(persNo)} ms</b><br>persistent, pipelined (one RTT for all objects): 2RTT + t + RTT + n·t = <b>${nf(pers)} ms</b>`
        }},
      p2p:{h:`<div class="ctrls" dir="ltr">${numIn("pF","F (Mbit)",600)}${numIn("pU","u_s (Mbps)",60)}${numIn("pD","d_min (Mbps)",20)}${numIn("pN","N peers",20,1)}${numIn("pu","u per peer (Mbps)",10)}</div>`,
        go:()=>{
          const F=v("pF"),us=v("pU"),d=v("pD"),N=Math.round(v("pN")),u=v("pu");const a=N*F/us,b=F/d,c=F/us,e=N*F/(us+N*u);
          return `client-server: max{NF/u_s = ${nf(a)}, F/d_min = ${nf(b)}} = <b>${nf(Math.max(a,b))} s</b><br>P2P: max{F/u_s = ${nf(c)}, F/d_min = ${nf(b)}, NF/(u_s + Σu_i) = ${nf(e)}} = <b>${nf(Math.max(c,b,e))} s</b>`
        }},
      rtt:{h:`<div class="ctrls" dir="ltr">${numIn("rE","EstimatedRTT (ms)",100)}${numIn("rD","DevRTT (ms)",5)}${numIn("rS","SampleRTT (ms)",140)}${numIn("rA","α",0.125)}${numIn("rB","β",0.25)}</div>`,
        go:()=>{
          const a=v("rA"),b=v("rB"),E=(1-a)*v("rE")+a*v("rS"),D=(1-b)*v("rD")+b*Math.abs(v("rS")-E);
          return `EstimatedRTT = (1 − ${a})·${v("rE")} + ${a}·${v("rS")} = <b>${nf(E)} ms</b><br>DevRTT = (1 − ${b})·${v("rD")} + ${b}·|${v("rS")} − ${nf(E)}| = <b>${nf(D)} ms</b><br>TimeoutInterval = ${nf(E)} + 4·${nf(D)} = <b>${nf(E+4*D)} ms</b>`
        }},
      cks:{h:`<p class="arl" style="margin:0 0 8px">اكتب كلمات 16 بت (سطر لكل كلمة):</p><textarea id="kW" dir="ltr" rows="3" style="width:100%;background:var(--pitch-2);color:var(--chalk);border:1px solid var(--line);border-radius:8px;font-family:var(--f-mono);padding:8px">1110011001100110\n1101010101010101</textarea>`,
        go:()=>{
          const w=$("#kW").value.split(/\s+/).filter(Boolean);if(!w.length||w.some(x=>!/^[01]{16}$/.test(x)))return "كل كلمة لازم 16 بت (0 و 1 بس).";
          const r=ones16(w);
          return r.st.map(s=>`+ word ${s.i+1} → ${s.sum.toString(2).padStart(16,"0")}${s.carry?" (carry wrapped around)":""}`).join("<br>")+`<br>sum = ${r.sum} · checksum = flip bits = <b>${r.cs}</b>`
        }},
      util:{h:`<div class="ctrls" dir="ltr">${numIn("uL","L (bits)",8000)}${numIn("uR","R (Gbps)",1)}${numIn("uP","one-way prop (ms)",15)}${numIn("uN","window N",1,1)}</div>`,
        go:()=>{
          const t=v("uL")/(v("uR")*1e9)*1e3,rtt=2*v("uP"),N=Math.max(1,Math.round(v("uN"))),U=Math.min(1,N*t/(rtt+t));
          return `L/R = ${nf(t,5)} ms · RTT = ${nf(rtt)} ms · U = N·(L/R)/(RTT + L/R) = ${N}×${nf(t,5)}/${nf(rtt+t,5)} = <b>${nf(U,6)}</b>${N*t/(rtt+t)>1?" (capped at 1)":""}`
        }},
      cwnd:{h:`<p class="arl" style="margin:0 0 8px">حدد ssthresh الابتدائي، والجولات اللي يصير فيها فقد (رقم الجولة: TO للـ timeout أو 3D لثلاث ACKs مكررة). الافتراض: cwnd تبدأ 1، وفي البداية البطيئة تتضاعف لين ssthresh.</p><div class="ctrls" dir="ltr">${numIn("cS","ssthresh",8,1)}${numIn("cR","rounds",20,1)}<label>losses <input id="cE" value="8:3D, 14:TO" style="width:160px"></label><label>version <select id="cV"><option value="reno">Reno</option><option value="tahoe">Tahoe</option></select></label></div>`,
        go:()=>{
          const ev={};$("#cE").value.split(",").forEach(p=>{
            const m=p.trim().match(/^(\d+)\s*:\s*(TO|3D)$/i);if(m)ev[+m[1]]=m[2].toUpperCase()
          });
          const rows=cwndTrace(Math.max(1,Math.round(v("cS"))),Math.min(40,Math.max(1,Math.round(v("cR")))),ev,$("#cV").value);
          return `<div class="ptable-wrap"><table class="pt"><thead><tr><th>round</th><th>cwnd</th><th>ssthresh</th><th>phase</th><th>loss</th></tr></thead><tbody>${rows.map(x=>`<tr><td>${x.r}</td><td><b>${x.cwnd}</b></td><td>${x.ss}</td><td>${x.phase==="SS"?"slow start":"cong. avoid."}</td><td>${x.ev==="TO"?"timeout → ssthresh = cwnd/2, cwnd = 1":x.ev==="3D"?($("#cV").value==="reno"?"3 dup ACKs → ssthresh = cwnd/2, cwnd = ssthresh + 3":"3 dup ACKs (Tahoe) → cwnd = 1"):""}</td></tr>`).join("")}</tbody></table></div>`
        }}
    };
    const f=F[calcTab]; box.innerHTML=f.h+`<div class="formula" id="calcOut" dir="ltr" style="margin-top:10px"></div>`;
    const run=()=>{
      $("#calcOut").innerHTML=fm(f.go())
    };
    box.querySelectorAll("input,select,textarea").forEach(i=>i.oninput=run);
    run();
  }
  
  /* ============ GENERATED QUESTIONS ============ */
  const rint=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  function addGen(ch,tp,q,opts,arx,enx){
    const o=[...new Set(opts.map(String))];let k=2;while(o.length<4){
      const x=String(nf(parseFloat(opts[0])*k));if(!o.includes(x))o.push(x);
      k++
    }Q.push([ch,tp,q,o.slice(0,4),arx,enx,0,1]);
    return Q.length-1
  }
  const dist=(ans,f)=>{
    const s=new Set([nf(ans)]);f.forEach(x=>{
      if(isFinite(x)&&x>0&&s.size<4)s.add(nf(x))
    });
    let k=2;while(s.size<4){
      s.add(nf(ans*k));
      k++
    }return[...s]
  };
  const GEN={
    delay:()=>{
      const Lb=pick([1000,1500,4000,8000,12000]),Rm=pick([1,2,5,10,100]),dk=pick([200,1000,2000,4000,6000]);
      if(Math.random()<.5){
        const t=Lb/(Rm*1e6)*1e3;return addGen(1,"delay",`L = ${Lb} bits, R = ${Rm} Mbps. Transmission delay d_trans (ms)?`,dist(t,[t*10,t/10,Lb/Rm,dk/200]).map(x=>x+" ms"),`d_trans = L/R = ${Lb} ÷ ${Rm}×10^6 = ${nf(t)} ms. المسافة ما تدخل في الإرسال.`,`d_trans = L/R = ${Lb} / ${Rm}×10^6 = ${nf(t)} ms; distance doesn't matter.`)
      }
      const p=dk*1e3/2e8*1e3;return addGen(1,"delay",`A link is ${dk} km long, s = 2×10^8 m/s. Propagation delay d_prop (ms)?`,dist(p,[p*10,p/10,p*2,p/2]).map(x=>x+" ms"),`d_prop = d/s = ${dk}×10^3 ÷ 2×10^8 = ${nf(p)} ms. حجم الحزمة ما يدخل.`,`d_prop = d/s = ${dk}×10^3 / 2×10^8 = ${nf(p)} ms; packet size doesn't matter.`)
    },
    core:()=>{
      const Lb=pick([1000,5000,10000,20000]),Rm=pick([1,2,5,10]),N=rint(2,5);const one=Lb/(Rm*1e6)*1e3;
      return addGen(1,"core",`Store-and-forward: a ${Lb}-bit packet crosses ${N} links of ${Rm} Mbps each (ignore propagation, processing, queueing). End-end delay (ms)?`,dist(N*one,[one,(N+1)*one,(N-1)*one,N*one*2]).map(x=>x+" ms"),`كل رابط L/R = ${nf(one)} ms، و${N} روابط = ${nf(N*one)} ms.`,`Each link takes L/R = ${nf(one)} ms; ${N} links = ${nf(N*one)} ms.`)
    },
    queue:()=>{
      const a=pick([50,100,120,200,300]),Lb=pick([1000,5000,10000]),Rm=pick([0.5,1,1.5,2,5]);const I=a*Lb/(Rm*1e6);
      const verdict=I>1?"More work arrives than can be served: delay → infinite":I>0.8?"Large average queueing delay":"Small/moderate average queueing delay";
      return addGen(1,"queue",`a = ${a} packets/s, L = ${Lb} bits, R = ${Rm} Mbps. Traffic intensity La/R and its meaning?`,[`${nf(I)}: ${verdict}`,`${nf(I*2)}: ${I*2>1?"Delay infinite":"Small delay"}`,`${nf(I/2)}: Small delay`,`${nf(1/I)}: Large delay`],`La/R = ${a}×${Lb} ÷ ${Rm}×10^6 = ${nf(I)}. إذا أكبر من 1 التأخير لا نهائي، وقريب من 1 كبير.`,`La/R = ${a}×${Lb} / ${Rm}×10^6 = ${nf(I)}. > 1 → infinite delay; → 1 → large.`)
    },
    thru:()=>{
      const rs=rint(2,20),rc=rint(2,20),K=pick([5,10,20]),R=pick([20,50,100,200]);const sh=R/K,m=Math.min(rs,rc,sh);
      return addGen(1,"thru",`R_s = ${rs} Mbps, R_c = ${rc} Mbps, backbone R = ${R} Mbps shared fairly by ${K} connections. Per-connection throughput?`,dist(m,[rs,rc,sh,rs+rc,R]).map(x=>x+" Mbps"),`الإنتاجية = min(${rs}, ${rc}, ${R}/${K} = ${nf(sh)}) = ${nf(m)} Mbps.`,`Throughput = min(${rs}, ${rc}, ${R}/${K} = ${nf(sh)}) = ${nf(m)} Mbps.`)
    },
    httpconn:()=>{
      const R=pick([10,20,30,50,100]),n=rint(2,12);const kind=pick(["np","p"]);
      if(kind==="np")return addGen(2,"httpconn",`Base HTML + ${n} small objects, RTT = ${R} ms, ignore transmission. Non-persistent HTTP, no parallel connections. Total time?`,dist(2*R*(n+1),[R*(n+1),2*R*n,3*R,2*R*(n+2)]).map(x=>x+" ms"),`كل كائن 2RTT، والكائنات ${n+1} (الأساسي + ${n}) ← ${2*(n+1)} RTT = ${2*R*(n+1)} ms.`,`Each of the ${n+1} objects costs 2RTT → ${2*(n+1)} RTT = ${2*R*(n+1)} ms.`);
      return addGen(2,"httpconn",`Base HTML + ${n} small objects, RTT = ${R} ms, ignore transmission. Persistent HTTP with all referenced objects requested at once. Total time?`,dist(3*R,[2*R*(n+1),2*R,R*(n+2),4*R]).map(x=>x+" ms"),`2RTT للملف الأساسي (اتصال + طلب) + RTT واحد لكل الكائنات = 3RTT = ${3*R} ms.`,`2RTT for the base file + one RTT for all referenced objects = 3RTT = ${3*R} ms.`)
    },
    cache:()=>{
      const h=pick([0.2,0.3,0.4,0.5,0.6]),rate=1.5,link=pick([1.54,2,3]);const u=(1-h)*rate/link;
      return addGen(2,"cache",`Access link ${link} Mbps, average data rate to browsers ${rate} Mbps, cache hit rate ${h}. Access link utilization?`,dist(u,[rate/link,h,1-h,h*rate/link]),`اللي يمر من الرابط ${nf(1-h)} × ${rate} = ${nf((1-h)*rate)} Mbps، والاستغلال ${nf((1-h)*rate)} ÷ ${link} = ${nf(u)}.`,`Only ${nf(1-h)} of traffic uses the link: ${nf((1-h)*rate)} Mbps / ${link} = ${nf(u)}.`)
    },
    p2p:()=>{
      const F=pick([100,300,600,1000]),us=pick([20,50,100]),d=pick([10,20,25]),N=pick([10,20,50,100]),u=pick([1,2,5,10]);const cs=Math.max(N*F/us,F/d),pp=Math.max(F/us,F/d,N*F/(us+N*u));
      if(Math.random()<.5)return addGen(2,"p2p",`F = ${F} Mbit, u_s = ${us} Mbps, d_min = ${d} Mbps, N = ${N}. Client-server minimum distribution time?`,dist(cs,[pp,F/us,F/d,N*F/d]).map(x=>x+" s"),`max{NF/u_s = ${nf(N*F/us)}, F/d_min = ${nf(F/d)}} = ${nf(cs)} ثانية.`,`max{NF/u_s = ${nf(N*F/us)}, F/d_min = ${nf(F/d)}} = ${nf(cs)} s.`);
      return addGen(2,"p2p",`F = ${F} Mbit, u_s = ${us} Mbps, d_min = ${d} Mbps, N = ${N}, each peer uploads ${u} Mbps. P2P minimum distribution time?`,dist(pp,[cs,F/us,N*F/us,N*F/(N*u)]).map(x=>x+" s"),`max{F/u_s = ${nf(F/us)}, F/d_min = ${nf(F/d)}, NF/(u_s + Nu) = ${nf(N*F/(us+N*u))}} = ${nf(pp)} ثانية.`,`max{F/u_s = ${nf(F/us)}, F/d_min = ${nf(F/d)}, NF/(u_s + Nu) = ${nf(N*F/(us+N*u))}} = ${nf(pp)} s.`)
    },
    rtt:()=>{
      const E=pick([80,100,120,150,200]),Sm=E+pick([-40,-20,20,40,60,80]),Dv=pick([4,5,8,10]);
      if(Math.random()<.5){
        const n=0.875*E+0.125*Sm;return addGen(3,"rtt",`EstimatedRTT = ${E} ms, SampleRTT = ${Sm} ms, α = 0.125. New EstimatedRTT?`,dist(n,[Sm,(E+Sm)/2,E,0.125*E+0.875*Sm]).map(x=>x+" ms"),`0.875×${E} + 0.125×${Sm} = ${nf(n)} ms.`,`0.875×${E} + 0.125×${Sm} = ${nf(n)} ms.`)
      }
      return addGen(3,"rtt",`EstimatedRTT = ${E} ms and DevRTT = ${Dv} ms. TimeoutInterval?`,dist(E+4*Dv,[E+Dv,E*2,E+2*Dv,4*E+Dv]).map(x=>x+" ms"),`Timeout = EstimatedRTT + 4×DevRTT = ${E} + ${4*Dv} = ${E+4*Dv} ms.`,`Timeout = EstimatedRTT + 4·DevRTT = ${E} + ${4*Dv} = ${E+4*Dv} ms.`)
    },
    udp:()=>{
      const w=()=>Array.from({length:16},()=>Math.random()<.5?"0":"1").join("");const a=w(),b=w();const r=ones16([a,b]);
      const flip=x=>x.split("").map(c=>c==="0"?"1":"0").join("");const raw=((parseInt(a,2)+parseInt(b,2))&0xffff).toString(2).padStart(16,"0");
      const o=new Set([r.cs,r.sum,flip(raw),r.cs.split("").reverse().join("")]);while(o.size<4)o.add(w());
      return addGen(3,"udp",`Internet checksum of the 16-bit words ${a} and ${b}:`,[...o],`المجموع مع إرجاع الـ carry = ${r.sum}، والـ checksum عكس البتات = ${r.cs}.`,`Sum with wraparound = ${r.sum}; checksum = one's complement = ${r.cs}.`)
    },
    pipe:()=>{
      const L=pick([1000,8000,12000]),Rg=pick([0.1,1,10]),p=pick([5,10,15,30]),N=pick([1,1,3,10]);const t=L/(Rg*1e9)*1e3,U=Math.min(1,N*t/(2*p+t));
      return addGen(3,"pipe",`L = ${L} bits, R = ${Rg} Gbps, one-way propagation = ${p} ms, ${N===1?"stop-and-wait":N+" packets pipelined"}. Sender utilization?`,dist(U,[t/(p+t),U*2,U/2,N*t/(2*p)*10]),`L/R = ${nf(t,5)} ms، والـ RTT = ${2*p} ms، فـ U = ${N}×${nf(t,5)} ÷ ${nf(2*p+t,5)} = ${nf(U,6)}.`,`L/R = ${nf(t,5)} ms, RTT = ${2*p} ms → U = ${N}×${nf(t,5)}/${nf(2*p+t,5)} = ${nf(U,6)}.`)
    },
    tcpcc:()=>{
      const c=pick([8,10,12,16,20,24,32]),ev=pick(["TO","3D"]);const ss=Math.floor(c/2);
      const ans=ev==="TO"?`ssthresh = ${ss}, cwnd = 1 MSS`:`ssthresh = ${ss}, cwnd ≈ ${ss} MSS (halved; ${ss}+3 during fast recovery)`;
      return addGen(3,"tcpcc",`TCP${ev==="3D"?" Reno":""}: cwnd = ${c} MSS when ${ev==="TO"?"a timeout":"triple duplicate ACKs"} occur(s). New ssthresh and cwnd?`,[ans,ev==="TO"?`ssthresh = ${ss}, cwnd = ${ss} MSS`:`ssthresh = ${ss}, cwnd = 1 MSS`,`ssthresh = ${c}, cwnd = ${c*2} MSS`,`ssthresh = ${c*2}, cwnd = ${c} MSS`],`عند الفقد ssthresh = cwnd/2 = ${ss}. ${ev==="TO"?"وبالـ timeout cwnd ترجع 1 MSS.":"وبثلاث ACKs مكررة (Reno) cwnd تصير النص تقريباً."}`,`On loss, ssthresh = cwnd/2 = ${ss}. ${ev==="TO"?"A timeout resets cwnd to 1 MSS.":"Triple dup ACKs (Reno) halve cwnd."}`)
    },
    gbn:()=>{
      const N=pick([4,5,6,8]),lost=rint(0,N-2);const n=N-lost;
      const p=pick(["gbn","sr"]);
      return addGen(3,"gbn",`Window N = ${N}; packets 0..${N-1} are sent and only pkt${lost} is lost. After the timeout, how many packets does ${p==="gbn"?"Go-Back-N":"Selective Repeat"} retransmit?`,p==="gbn"?dist(n,[1,N,n-1,n+1]):dist(1,[n,N,0,2]),p==="gbn"?`GBN يعيد pkt${lost} وكل اللي بعدها في النافذة: ${n} حزم.`:`SR يعيد الحزمة الضايعة بس: حزمة وحدة.`,p==="gbn"?`GBN resends pkt${lost} and all later packets in the window: ${n}.`:`SR resends only the lost packet: 1.`)
    }
  };
  const genFor=tp=>GEN[tp]||null;
  
  return {FIGS,TOPICS,Q,TOP,EX,HOT_POINTS,CH_NAMES,CHS,chl,GEN,genFor,CHAL,chalOfTopics,EXTRA,EXTRA_NAMES,lab:{render:renderLab,open:id=>{
        labCur=id;
        labTab="ch"
      }}};
  
}
