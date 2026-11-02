/* Generated browser entry 2.0.1. Source files remain in assets/js and data. */
(function () {
'use strict';
const entryUrl = document.currentScript.src;
const moduleRegistry = new Map();
const pendingChunks = new Map();
const chunkVersions = {"net":"5d8813d96c3f","os":"7d7cdd162f35","algo":"6d1c64c974b8","web":"8bfcd2e1e569","pl":"43c5727cc5ca","sc":"a717336decaf"};
function loadSubjectChunk(key) {
  if (moduleRegistry.has(key)) return Promise.resolve(moduleRegistry.get(key));
  if (pendingChunks.has(key)) return pendingChunks.get(key);
  if (!Object.hasOwn(chunkVersions, key)) return Promise.reject(new Error('Unknown subject'));
  const pending = new Promise((resolveModule, rejectModule) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = new URL(key + '.js?v=' + chunkVersions[key], entryUrl).href;
    script.onload = () => {
      if (moduleRegistry.has(key)) resolveModule(moduleRegistry.get(key));
      else rejectModule(new Error('Subject script did not register'));
    };
    script.onerror = () => rejectModule(new Error('Subject script could not load'));
    document.head.appendChild(script);
  });
  pendingChunks.set(key, pending);
  pending.then(() => pendingChunks.delete(key), () => pendingChunks.delete(key));
  return pending;
}

/* Source: data/catalog.js */
const META={
  os:{name:"نظم التشغيل",en:"Operating Systems",sub:"Silberschatz · Chapters 1–5",
    lab:{tab:"مختبر الجدولة",sub:"Gantt + حساب",title:"مختبر جدولة المعالج",lead:"اختر خوارزمية، عدّل العمليات، وارسم الـ Gantt بنفسك. أمثلة السلايدات تنحسب «تحديات»: حلها بنفسك (متوسط WT وTAT) قبل ما تكشف."},
    hype:["Context switch\nبدون overhead!","Kernel mode\nيا وحش!","fork() مرتين\nوضبطت!","SJF optimal\nزيّك!","ولا starvation!","Round Robin\nوصار دورك!"]},
  web:{name:"تطوير الويب",en:"Web Development",sub:"HTML · CSS · Chapters 1–4",
    lab:{tab:"مختبر الكود",sub:"HTML + CSS",title:"مختبر HTML و CSS",lead:"اكتب الكود وشوف النتيجة على طول. كل تحدي له فحص تلقائي، والتطبيق العملي هو أهم شي في هالمادة."},
    hype:["<strong>يا وحش</strong>","CSS بالكامل!","Valid HTML\nيا بطل!","inline أقوى\nوأنت أقوى!","ولا tag ناقص!","W3C يصفّق!"]},
  algo:{name:"تصميم وتحليل الخوارزميات",en:"Algorithms · CS2107T",sub:"Lectures 1–5",
    lab:{tab:"مختبر التحليل",sub:"Master + loops",title:"مختبر التحليل",lead:"تتدرب على أسئلة الحل: Master Theorem خطوة خطوة، تحليل الحلقات وعدّ التنفيذ، وتمشي على Partition وQuickselect. حل بنفسك قبل ما تكشف."},
    hype:["Strassen يصفّق!","log n\nوخلصت!","O(1)\nيا وحش!!","Θ(فل مارك)!!","Master Theorem\nيحييك!","Case 2\nوضبطت!"]},
  net:{name:"شبكات الحاسب",en:"Computer Networks",sub:"Kurose & Ross · Chapters 1–3",
    lab:{tab:"مختبر الحسابات",sub:"delay · HTTP · TCP",title:"مختبر حسابات الشبكات",lead:"مسائل الحساب هي أكثر شي يجي في الاختبار: التأخير، الإنتاجية، زمن HTTP، توزيع الملفات، الـ checksum، RTT وcwnd. حل التحديات بنفسك، والحاسبات تعطيك الخطوات لأي أرقام."},
    hype:["ACK!!\nوصلت سليمة","3-way handshake\nوضبطت!","Throughput\nفل!","0% packet loss!","TCP يصفّق!","cwnd يتضاعف\nمثلك!"]},
  pl:{name:"لغات البرمجة",en:"Programming Languages · CS3713T",sub:"Sebesta · Lectures 1–3",
    lab:{tab:"مشروع المادة",sub:"المطلوب + الخطة",title:"مشروع المادة: تقرير تقييم لغة برمجة",lead:"المطلوب من ملفات المشروع باختصار وبالعربي، مع الملفات الأصلية، وخطة تمشي عليها خطوة خطوة. الخطة تساعدك ترتب شغلك، والحل والكتابة عليك."},
    hype:["Orthogonality\nيا وحش!","Strongly typed\nمثلك!","Compiled\nبدون أخطاء!","Row major\nوضبطت!","Type safe!!","Sebesta يصفّق!"]},
  sc:{name:"نظم بناء البرمجيات",en:"Engineering Software Products",sub:"Sommerville · Chapters 1–4",
    lab:{tab:"مختبر المنتج",sub:"رؤية · قصص · Sprint",title:"مختبر المنتج",lead:"طبّق اللي درسته: اكتب رؤية منتج بقالب Moore، افحص قصة مستخدم، خطط sprint على قد الـ velocity، وصنّف عناصر الـ backlog."},
    hype:["Sprint goal\nتحقق!","Velocity\nفل!","Accepted ✓","ولا feature creep!","Product Owner\nراضي!","Done done!!"]}
};
const ORDER=["net","os","algo","web","pl","sc"];
const THEMES={
  home:{pitch:"#121318",p2:"#1a1c23",p3:"#252832",deep:"#0c0d11",chalk:"#eef0f5",muted:"#a3a8b6",score:"#ffd166",red:"#ff6b6b",good:"#7ee0a1"},
  os:{rayeq:{pitch:"#1b1611",p2:"#241d16",p3:"#30271d",deep:"#120e0a",chalk:"#f3ece2",muted:"#b9aa98",score:"#f2a93b",red:"#e8775f",good:"#a3cf8a"},
    zanga:{pitch:"#231505",p2:"#2e1c08",p3:"#3d260d",deep:"#170d03",chalk:"#fbf1e4",muted:"#cdb59a",score:"#ffb638",red:"#ff5a48",good:"#74e08c"}},
  web:{rayeq:{pitch:"#0f1b1c",p2:"#142527",p3:"#1b3234",deep:"#0a1314",chalk:"#e5f1ef",muted:"#98b5b1",score:"#3ccfb5",red:"#ee7f6e",good:"#a6d98c"},
    zanga:{pitch:"#052421",p2:"#08302c",p3:"#0d403a",deep:"#021a17",chalk:"#e9fbf7",muted:"#9ccbc3",score:"#2ef0cf",red:"#ff5d55",good:"#9af27f"}},
  algo:{rayeq:{pitch:"#16142a",p2:"#1e1b37",p3:"#29254a",deep:"#0f0d1f",chalk:"#edeafb",muted:"#aca5cb",score:"#b39dff",red:"#f08a8f",good:"#9cd9a4"},
    zanga:{pitch:"#190e34",p2:"#231446",p3:"#2f1c5d",deep:"#100827",chalk:"#f4efff",muted:"#b9acdb",score:"#c9adff",red:"#ff5c7c",good:"#72f0a3"}},
  net:{rayeq:{pitch:"#0e1726",p2:"#132036",p3:"#1b2b48",deep:"#09101c",chalk:"#e7eef9",muted:"#9fb1ca",score:"#5eb3ff",red:"#f28b73",good:"#9fd78c"},
    zanga:{pitch:"#06183b",p2:"#0a2150",p3:"#102d69",deep:"#030f29",chalk:"#eef5ff",muted:"#a3bce0",score:"#4fc6ff",red:"#ff5d52",good:"#6ff09a"}},
  pl:{rayeq:{pitch:"#121a10",p2:"#182316",p3:"#212f1e",deep:"#0c120a",chalk:"#ebf3e6",muted:"#a4b79b",score:"#8bd450",red:"#ef8370",good:"#7fdcc0"},
    zanga:{pitch:"#0f2207",p2:"#152d0b",p3:"#1e3c11",deep:"#091704",chalk:"#f1fbe9",muted:"#aecb9c",score:"#a2f05a",red:"#ff5a52",good:"#62f0d0"}},
  sc:{rayeq:{pitch:"#1c1218",p2:"#26171f",p3:"#331f2a",deep:"#130c10",chalk:"#f6e9ef",muted:"#c0a3b1",score:"#f78fb3",red:"#ff8a65",good:"#9ed99a"},
    zanga:{pitch:"#2a0b1a",p2:"#370f22",p3:"#48152e",deep:"#1d0611",chalk:"#fff0f6",muted:"#d6a7bd",score:"#ff86b4",red:"#ff6a3d",good:"#7af0a0"}}
};

const SUBJECT_STATS = {
  "net": {
    "lessons": 38,
    "questions": 463
  },
  "os": {
    "lessons": 41,
    "questions": 277
  },
  "algo": {
    "lessons": 21,
    "questions": 434
  },
  "web": {
    "lessons": 36,
    "questions": 398
  },
  "pl": {
    "lessons": 20,
    "questions": 169
  },
  "sc": {
    "lessons": 29,
    "questions": 235
  }
};

/* Source: assets/js/core/utils.js */
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const subsup=s=>s.replace(/_\{([^}]*)\}/g,"<sub>$1</sub>").replace(/\^\{([^}]*)\}/g,"<sup>$1</sup>");
const fm=s=>subsup(String(s).replace(/`([^`]+)`/g,(m,c)=>"<code>"+esc(c)+"</code>"));
const qt=s=>subsup(esc(s).replace(/`([^`]+)`/g,(m,c)=>"<code>"+c+"</code>"));
const iso=s=>String(s).replace(/[A-Za-z0-9ΘΩΟΣ∑√≈(\[|`<#&@/*+="'.][^\u0600-\u06FF\u060C\u061B]*[^\u0600-\u06FF\u060C\u061B\s.]/g,m=>{
  let pre="",post="";const cnt=(x,c)=>x.split(c).length-1;
  for(let k=0;k<4;k++){
    if(/^[(\[]/.test(m)&&cnt(m,m[0]==="("?")":"]")<cnt(m,m[0])){
      pre+=m[0];
      m=m.slice(1).replace(/^\s+/,x=>{
        pre+=x;
        return""
      });
      continue
    }
    if(/[)\]]$/.test(m)&&cnt(m,m.slice(-1))>cnt(m,m.slice(-1)===")"?"(":"[")){
      post=m.slice(-1)+post;
      m=m.slice(0,-1).replace(/\s+$/,x=>{
        post=x+post;
        return""
      });
      continue
    }
    break
  }
  if(cnt(m,"(")>cnt(m,")")){
    const k=m.lastIndexOf("("),L=m.slice(0,k).replace(/\s+$/,""),Rr=m.slice(k+1).replace(/^\s+/,"");return pre+(L?"\u2066"+L+"\u2069 ":"")+"("+(Rr?"\u2066"+Rr+"\u2069":"")+post
  }
  return m?pre+"\u2066"+m+"\u2069"+post:pre+post
});
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const ar=n=>String(n).replace(/\d/g,d=>"0123456789"[d]);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{
  a=a.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]
  }return a
};

/* Source: assets/js/core/events.js */
// Shared notifications keep storage independent of the screen that is open.
const listeners = new Map();

function on(event, callback) {
  if (!listeners.has(event)) listeners.set(event, new Set());
  listeners.get(event).add(callback);
  return () => listeners.get(event)?.delete(callback);
}

function emit(event, value) {
  for (const callback of listeners.get(event) || []) callback(value);
}

/* Source: assets/js/core/storage.js */
// Keep the original uz_* keys. In-memory fallback keeps studying possible when
// browser storage is blocked; the interface then explains that saving is temporary.
const memory = new Map();
let available = true;

const LS = {
  get available() { return available; },
  get(key, fallback) {
    let raw;
    try {
      raw = globalThis.localStorage?.getItem(key);
      if (!globalThis.localStorage) available = false;
    } catch {
      available = false;
    }
    raw ??= memory.get(key);
    if (raw == null) return structuredClone(fallback);
    try { return JSON.parse(raw); } catch { return structuredClone(fallback); }
  },
  set(key, value) {
    const raw = JSON.stringify(value);
    memory.set(key, raw);
    try {
      if (!globalThis.localStorage) throw new Error('Storage unavailable');
      globalThis.localStorage.setItem(key, raw);
      return true;
    } catch {
      available = false;
      return false;
    }
  }
};

/* Source: assets/js/core/state.js */
let CUR = null;
let M = null;
let TOPICS = [];
let Q = [];
let TOP = {};
// Keep this object stable: independently loaded classic scripts share it too.
const S = {};
let MODE = 'rayeq';
const G = { sound: LS.get('uz_sound', true) === true };

const KEYS = ['xp', 'best', 'right', 'total', 'done3', 'miss', 'mast', 'ctest', 'seen', 'lab', 'plan', 'rtab', 'ztab'];
const number = value => Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
const object = value => value && typeof value === 'object' && !Array.isArray(value) ? value : {};
const unique = value => [...new Set(Array.isArray(value) ? value : [])];

function loadS(key, subject) {
  const get = (field, fallback) => LS.get(`uz_${key}_${field}`, fallback);
  const state = {
    xp: number(get('xp', 0)),
    best: number(get('best', 0)),
    right: number(get('right', 0)),
    total: number(get('total', 0)),
    done3: unique(get('done3', [])).filter(v => typeof v === 'string'),
    miss: unique(get('miss', [])).filter(v => Number.isInteger(v) && v >= 0),
    mast: object(get('mast', {})),
    ctest: object(get('ctest', {})),
    seen: object(get('seen', {})),
    lab: object(get('lab', {})),
    plan: get('plan', null),
    rtab: get('rtab', 'plan'),
    ztab: get('ztab', 'sum')
  };
  state.right = Math.min(state.right, state.total);
  for (const field of ['mast', 'ctest']) {
    state[field] = Object.fromEntries(Object.entries(state[field]).filter(([, v]) => Number.isFinite(v) && v >= 0 && v <= 100));
  }
  if (typeof state.rtab !== 'string') state.rtab = 'plan';
  if (typeof state.ztab !== 'string') state.ztab = 'sum';
  const plan = state.plan;
  const date = plan && typeof plan.start === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(plan.start) ? new Date(plan.start + 'T12:00:00Z') : null;
  if (!plan || !Number.isInteger(plan.days) || plan.days < 1 || plan.days > 90 || !date || Number.isNaN(+date) || date.toISOString().slice(0, 10) !== plan.start) {
    state.plan = null;
  } else {
    state.plan = { days: plan.days, start: plan.start };
  }
  if (subject) {
    const ids = new Set(subject.TOPICS.map(t => t.id));
    state.done3 = state.done3.filter(id => ids.has(id));
    state.miss = state.miss.filter(index => subject.Q[index] && !subject.Q[index][7]);
    state.mast = Object.fromEntries(Object.entries(state.mast).filter(([id]) => ids.has(id)));
  }
  return state;
}

function save() {
  if (!CUR) return;
  for (const key of KEYS) LS.set(`uz_${CUR}_${key}`, S[key]);
  emit('statechange');
}

function activateSubject(key, subject) {
  CUR = key;
  M = subject;
  TOPICS = subject.TOPICS;
  Q = subject.Q;
  TOP = subject.TOP;
  const restored = loadS(key, subject);
  for (const field of Object.keys(S)) delete S[field];
  Object.assign(S, restored);
  MODE = 'rayeq';
  LS.set('uz_last', key);
}

function clearSubject() {
  CUR = null;
  M = null;
  TOPICS = [];
  Q = [];
  TOP = {};
  for (const field of Object.keys(S)) delete S[field];
  MODE = 'rayeq';
}

function setCurrentMode(mode) { MODE = mode; }

/* Source: assets/js/core/effects.js */
let audio = null;
let canvas = null;
let context = null;
let particles = [];
let frame = 0;
let hypeTimer;
let toastTimer;

const reduced = () => globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;

function beep(type) {
  if (!G.sound) return;
  try {
    audio ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') void audio.resume();
    const notes = {
      good: [523, 659, 784], combo: [523, 659, 784, 1046],
      win: [392, 523, 659, 784, 1046, 1318], soft: [660, 880],
      horn: [196, 262, 330, 392, 523, 659]
    }[type] || [220, 165];
    notes.forEach((frequency, i) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const start = audio.currentTime + i * (type === 'horn' ? .07 : .08);
      oscillator.type = type === 'bad' ? 'sawtooth' : type === 'soft' ? 'sine' : 'square';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(type === 'soft' ? .08 : .06, start);
      gain.gain.exponentialRampToValueAtTime(.0001, start + .22);
      oscillator.connect(gain).connect(audio.destination);
      oscillator.start(start);
      oscillator.stop(start + .24);
    });
  } catch { /* Audio may be blocked until a user gesture. */ }
}

function resize() {
  if (!canvas) return;
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;
}

function initEffects() {
  if (canvas) return;
  canvas = $('#fx');
  context = canvas?.getContext('2d');
  addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearEffects(); });
  resize();
}

function confetti(count = 60) {
  if (reduced() || !context || document.hidden) return;
  const style = getComputedStyle(document.body);
  const colors = ['--score', '--chalk', '--good', '--red'].map(key => style.getPropertyValue(key).trim() || '#fff');
  const ratio = Math.min(devicePixelRatio || 1, 2);
  const start = !particles.length;
  for (let i = 0; i < Math.min(count, 180); i++) {
    particles.push({ x: canvas.width / 2, y: canvas.height * .45,
      vx: (Math.random() - .5) * 26 * ratio, vy: (-Math.random() * 22 - 6) * ratio,
      size: (4 + Math.random() * 6) * ratio, color: colors[i % colors.length],
      rotation: Math.random() * 6, life: 90 });
  }
  if (start) frame = requestAnimationFrame(tick);
}

function tick() {
  const ratio = Math.min(devicePixelRatio || 1, 2);
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    p.vy += .7 * ratio;
    p.x += p.vx;
    p.y += p.vy;
    p.vx *= .98;
    p.rotation += .2;
    p.life--;
    context.save();
    context.translate(p.x, p.y);
    context.rotate(p.rotation);
    context.fillStyle = p.color;
    context.globalAlpha = Math.max(p.life / 90, 0);
    context.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    context.restore();
  }
  particles = particles.filter(p => p.life > 0 && p.y < canvas.height + 40);
  frame = particles.length ? requestAnimationFrame(tick) : 0;
}

function clearEffects() {
  cancelAnimationFrame(frame);
  frame = 0;
  particles = [];
  context?.clearRect(0, 0, canvas.width, canvas.height);
  clearTimeout(hypeTimer);
  const text = $('#hypeText');
  if (text) text.className = '';
}

function hype(text, bad) {
  const el = $('#hypeText');
  el.className = '';
  void el.offsetWidth;
  el.textContent = text;
  el.className = 'go' + (bad ? ' bad' : '');
  clearTimeout(hypeTimer);
  hypeTimer = setTimeout(() => { el.className = ''; }, 1150);
}

function toast(text) {
  const el = $('#toast');
  el.textContent = text;
  el.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('on'), 2200);
}

/* Source: assets/js/core/rewards.js */
function solved(id) {
  const was = S.lab[id];
  S.lab[id] = true;
  save();
  if (!was) { confetti(70); beep('soft'); toast('تحدي محلول'); }
}

/* Source: assets/js/core/helpers.js */
const HYPE=["يالعيييييب!!!","يامجنووووون!!","ضبطنااااا!","وبالله ضبطنا!","حركات بركات!","ولا غلطة!","الله الله!","فخم يا بطل!","الدكتور يصفّق!","كفووو!!"];
const COMBO={3:"هاتريك!!!",5:"خمسة على التوالي\nيا مجنووون!",7:"سبعة!! مين يوقفك؟",10:"عشرة!!!\nالدرجة الكاملة جاية!",15:"15 !! أسطوووورة",20:"20!!! خلاص\nأنت أسطورة المادة"};
const OOPS=["عادي، ركّز على الشرح تحت","الغلطة هنا أحسن من الورقة","ولا يهمك، سجّلناها في أخطائك","قريبة! اقرأ الشرح وتمشي"];
const CALM_OK=["تمام","صح، أحسنت","مضبوط","ممتاز","بالضبط"];
const CALM_NO=["قريب، اقرأ الشرح تحت","ولا يهمك، الشرح تحت","انحفظت في أخطائك"];
const chip=ch=>String(M.chl(ch)).replace("Chapter","Ch").replace("Lecture","Lec");
const isGen=i=>!!Q[i][7], isExtra=i=>Q[i][0]>=90;
const qOfTopic=id=>Q.map((q,i)=>i).filter(i=>!isGen(i)&&Q[i][1]===id).sort((a,b)=>(M.DOCQ&&M.DOCQ.has(a)?0:1)-(M.DOCQ&&M.DOCQ.has(b)?0:1)||a-b);
const qOfCh=ch=>{
  const l=Q.map((q,i)=>i).filter(i=>!isGen(i)&&!isExtra(i)&&(ch==="all"||(ch==="hot"?Q[i][6]:Q[i][0]===+ch)));
  if(ch==="all"||ch==="hot")return l;
  const r=i=>TOP[Q[i][1]]?TOP[Q[i][1]].idx:999,d=i=>M.DOCQ&&M.DOCQ.has(i)?0:1;return l.sort((a,b)=>r(a)-r(b)||d(a)-d(b)||a-b)
};
const figsHTML=(id,open)=>{
  const f=(M.FIGS||{})[id];if(!f)return "";
  const body=f.map(x=>`<figure class="fig"><img src="${x[0]}" alt="${esc(x[1])}" loading="lazy"><figcaption><span class="en" dir="ltr">${esc(x[1])}</span> · ${x[2]}</figcaption></figure>`).join("");
  return open?`<div class="figs"><h3 class="section-t">من السلايدات</h3>${body}</div>`:`<details class="figd"><summary>شوف السلايد</summary>${body}</details>`
};
const isMast=id=>(S.mast[id]||0)>=80;
const tname=id=>TOP[id]?TOP[id].t:((M.EXTRA_NAMES||{})[id]||id);
const CHAL=()=>M.CHAL||[];
const chalOf=ids=>M.chalOfTopics?M.chalOfTopics(ids):[];
const genKeys=()=>Object.keys(M.GEN||{}).filter(k=>TOP[k]);
function chips(el,items,cur,onPick){
  el.innerHTML=items.map(([v,l])=>`<button class="pill" data-v="${v}" aria-pressed="${String(v)===String(cur)}">${l}</button>`).join("");
  el.querySelectorAll(".pill").forEach(p=>p.onclick=()=>{
    el.querySelectorAll(".pill").forEach(x=>x.setAttribute("aria-pressed",x===p));
    onPick(p.dataset.v)
  });
}
const chChips=()=>[["all","الكل"],...M.CHS.map(c=>[String(c),chip(c)])];

/* Source: assets/js/ui/theme.js */
function applyTheme(key,mode){
  const t=key==="home"?THEMES.home:THEMES[key][mode],b=document.body.style;
  const set=(k,v)=>b.setProperty(k,v);
  set("--pitch",t.pitch);
  set("--pitch-2",t.p2);
  set("--pitch-3",t.p3);
  set("--deep",t.deep);
  set("--chalk",t.chalk);
  set("--muted",t.muted);
  set("--line",t.chalk+(mode==="zanga"?"3d":"2e"));
  set("--score",t.score);
  set("--red",t.red);
  set("--good",t.good);
  set("--score-ink","#10131a");
  set("--stripe",key!=="home"&&mode==="zanga"?`repeating-linear-gradient(90deg,${t.pitch} 0 80px,${t.p2} 80px 160px)`:`radial-gradient(1100px 520px at 85% -10%,${t.score}1f,transparent 60%),radial-gradient(900px 520px at 0% 110%,${t.score}12,transparent 60%),${t.pitch}`);
  document.documentElement.style.background=t.pitch;
}

/* Source: assets/js/features/quiz.js */
function record(id,ok){
  S.total++;
  if(isGen(id)){
    if(ok)S.right++;
    return
  }
  if(ok){
    S.right++;
    S.miss=S.miss.filter(x=>x!==id)
  }
  else if(!S.miss.includes(id))S.miss.push(id);
}
/* runQuiz(area, ids, {calm, onDone(right,total,pct), keepOrder, doneMsg, extraBtn, empty}) — Previous/Next, bilingual explanation */
function runQuiz(area,ids,o={}){
  const $a=sel=>area.querySelector(sel);
  const valid = ids.filter(id => Number.isInteger(id) && Q[id]);
  const list=o.keepOrder?valid:shuffle(valid); let i=0,combo=0,completed=false;
  const ans=list.map(()=>null);
  const orders=list.map(id=>shuffle(Q[id][3].map((t,k)=>k)));
  if(!list.length){
    area.innerHTML=`<div class="empty">${o.empty||"ما في أسئلة هنا."}</div>`;
    return
  }
  const rightN=()=>ans.filter(a=>a&&a.ok).length, doneN=()=>ans.filter(Boolean).length;
  const finish=()=>{
    const right=rightN(),pct=Math.round(100*right/list.length);
    area.innerHTML=`<div class="qbox result"><div class="grade">${pct}%</div><p>${ar(right)} / ${ar(list.length)} صح</p><p>${o.doneMsg?o.doneMsg(pct):(pct>=90?"جاهز وزيادة.":pct>=70?"زين! راجع أخطائك وتصير فل.":"عادي، راجع وأعد. كل جولة تفرق.")}</p>
      <div class="row" style="justify-content:center"><button class="btn ghost" data-q="review">→ راجع أسئلتي</button><button class="btn" data-q="again">أعد</button>${o.extraBtn||""}</div></div>`;
    $a('[data-q="again"]').onclick=()=>runQuiz(area,o.regen?o.regen():ids,o);
    $a('[data-q="review"]').onclick=()=>{
      i=list.length-1;
      show()
    };
    o.onResult?.();
    if (completed) return;
    completed = true;
    o.onDone&&o.onDone(right,list.length,pct);
    if(pct>=80){
      confetti(o.calm?70:150);
      beep(o.calm?"soft":"win");
      if(!o.calm)hype(pct===100?"فل ماااارك!!":"ضبطناااا!!")
    }
    
  };
  const explainHTML=(id,ok)=>{
    const q=Q[id];
    return `<div class="explain${ok?"":" wrongx"}"><p class="enl" dir="ltr"><b>Answer:</b> ${qt(q[3][0])}</p>
      ${q[5]?`<p class="enl en-exp" dir="ltr"><b>${ok?"Correct!":"Explanation:"}</b> ${qt(q[5])}</p>`:""}
      <p class="arl ar-tr"><b>بالعربي:</b> ${qt(iso(q[4]))}</p>${figsHTML(q[1],false)}</div>`;
    
  };
  const show=()=>{
    if(i>=list.length)return finish();
    const id=list[i],q=Q[id],a=ans[i],ord=orders[i];
    const dots=list.map((_,k)=>`<span class="qd${ans[k]?(ans[k].ok?" g":" r"):""}${k===i?" cur":""}"></span>`).join("");
    area.innerHTML=`<div class="qbox" data-q="box">${!o.calm&&combo>=2?`<span class="combo">كومبو ×${ar(combo)}</span>`:""}
      <div class="qmeta"><span><bdi>سؤال ${ar(i+1)} من ${ar(list.length)}</bdi> · <bdi>${ar(rightN())} صح</bdi></span><span class="ttl">${q[7]?"🎲 ":""}${q[0]>=90?"":chip(q[0])+" · "}${esc(tname(q[1]))}</span></div>
      ${list.length<=60?`<div class="qdots">${dots}</div>`:""}
      <p class="qtext">${qt(q[2])}</p>
      <div class="opts">${ord.map((k,j)=>`<button class="opt${a?(k===0?" right":a.pick===k?" wrong":""):""}" data-k="${k}"${a?" disabled":""}><kbd>${j+1}</kbd><span>${qt(q[3][k])}</span></button>`).join("")}</div>
      <div class="after">${a?explainHTML(id,a.ok):""}</div>
      <div class="navq"><button class="btn ghost" data-q="prev"${i===0?" disabled":""}>→ السابق</button>
        <button class="btn" data-q="next"${a?"":" hidden"}>${i+1<list.length?"التالي ←":"النتيجة"}</button>
        ${!a&&doneN()>0&&i<list.length-1&&ans[i+1]?`<button class="btn ghost" data-q="fwd">رجوع لآخر سؤال ←</button>`:""}</div></div>`;
    $a('[data-q="prev"]').onclick=()=>{
      if(i>0){
        i--;
        show()
      }
    };
    $a('[data-q="next"]').onclick=()=>{
      i++;
      show()
    };
    const fw=$a('[data-q="fwd"]'); if(fw)fw.onclick=()=>{
      i=ans.findIndex(x=>!x);
      if(i<0)i=list.length;
      show()
    };
    if(!a)area.querySelectorAll(".opt").forEach(b=>b.onclick=()=>answer(+b.dataset.k));
    else $a('[data-q="next"]').focus({preventScroll:true});
    
  };
  const answer=k=>{
    if (ans[i] || !Number.isInteger(k) || !Q[list[i]]?.[3][k]) return;
    const id=list[i],ok=k===0; ans[i]={pick:k,ok};
    record(id,ok);
    if(ok){
      combo++;
      if(o.calm){
        toast(pick(CALM_OK));
        beep("soft")
      }
      else{
        S.xp+=10*Math.min(combo,5);
        S.best=Math.max(S.best,combo);
        if(COMBO[combo]){
          hype(COMBO[combo]);
          confetti(120);
          beep("combo")
        }else{
          hype(pick(Math.random()<.35?META[CUR].hype:HYPE));
          confetti(35);
          beep("good")
        }
      }
      
    }else{
      combo=0;
      if(o.calm)toast(pick(CALM_NO));
      else{
        hype(pick(OOPS),true);
        beep("bad")
      }
    }
    save();
    show();
    if(!ok&&!o.calm){
      const qb=$a('[data-q="box"]');qb&&qb.classList.add("shake")
    }
    
  };
  show();
}

/* Source: assets/js/features/plan.js */
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

/* Source: assets/js/features/lessons.js */
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

/* Source: assets/js/features/chapter-test.js */
let ctCh=null;
function renderCtest(arg){
  if(arg)ctCh=String(arg);
  if(!ctCh||(ctCh!=="all"&&!M.CHS.map(String).includes(ctCh)))ctCh=String(M.CHS[0]);
  chips($("#ctChips"),[...M.CHS.map(c=>[String(c),chip(c)]),["all","شامل (60)"]],ctCh,v=>{
    ctCh=v;
    renderCtest()
  });
  const ids=ctCh==="all"?shuffle(qOfCh("all")).slice(0,60):qOfCh(ctCh);
  const best=S.ctest[ctCh],area=$("#ctArea");
  area.innerHTML=`<div class="rules"><div class="rule"><b>${ar(ids.length)} سؤال</b>${ctCh==="all"?"عشوائي من كل الشابترات":"كل أسئلة "+M.chl(ctCh)}</div><div class="rule"><b>${best!=null?ar(best)+"%":"—"}</b>أفضل نتيجة لك</div><div class="rule"><b>80%</b>الهدف</div></div><button class="btn next" id="ctGo">ابدأ الاختبار</button>`;
  $("#ctGo").onclick=()=>runQuiz(area,ids,{calm:true,onDone:(r,n,pct)=>{
      S.ctest[ctCh]=Math.max(S.ctest[ctCh]||0,pct);
      save()
    },
    doneMsg:pct=>pct>=90?"مستوى فل مارك.":pct>=80?"ممتاز، انحسب في خطتك.":"راجع الدروس اللي غلطت فيها (تلقاها في أخطائي) وأعد."});
}

/* Source: assets/js/features/builder.js */
let B=null;
function renderBuilder(){
  if(!B||B.key!==CUR){
    B={key:CUR,total:20,gen:true,sel:{},cnt:{}};
    TOPICS.forEach(t=>B.sel[t.id]=true);
    distribute()
  }
  const avail=id=>qOfTopic(id).length,hasGen=genKeys().length>0;
  let h=`<div class="card"><div class="ctrls">
    <label>عدد الأسئلة الكلي <input id="bTotal" type="number" min="1" max="300" value="${B.total}" dir="ltr"></label>
    <button class="btn ghost" id="bDist">🎲 وزّع عشوائي</button>
    ${hasGen?`<label><input type="checkbox" id="bGen"${B.gen?" checked":""}> ضمّن أسئلة حسابية مولّدة (أرقام جديدة كل مرة)</label>`:""}</div>
    <p class="arl" style="margin:8px 0 0">اختر الدروس، وعدّل العدد لكل درس إذا تبي.${hasGen?" الدروس اللي جنبها «+ ∞» فيها أسئلة مولّدة بلا نهاية.":""}</p></div>`;
  M.CHS.forEach(ch=>{
    const ts=TOPICS.filter(t=>t.ch===ch);
    h+=`<div class="chprog"><div class="chapter-label">${M.chl(ch)} — <span class="ttl">${M.CH_NAMES[ch]}</span></div><button class="pill" data-all="${ch}">الكل</button><button class="pill" data-none="${ch}">ولا شي</button></div><div class="cards">`;
    ts.forEach(t=>{
      const g=B.gen&&M.genFor(t.id);h+=`<div class="brow${B.sel[t.id]?"":" off"}"><label><input type="checkbox" data-sel="${t.id}"${B.sel[t.id]?" checked":""}> <span class="ttl">${t.t}</span><span class="tar"> · ${t.ar}</span></label>
      <span class="bnum"><input type="number" min="0" data-cnt="${t.id}" value="${B.cnt[t.id]||0}" dir="ltr"${B.sel[t.id]?"":" disabled"} aria-label="عدد أسئلة ${t.ar}"><small>من ${ar(avail(t.id))}${g?" + ∞":""}</small></span></div>`
    });
    h+="</div>"
  });
  const sum=Object.keys(B.cnt).filter(k=>B.sel[k]).reduce((s,k)=>s+(B.cnt[k]||0),0);
  h+=`<button class="btn next" id="bGo">ابدأ الاختبار (${ar(sum)} سؤال)</button>`;
  $("#bArea").innerHTML=h;
  $("#bTotal").oninput=e=>{
    B.total=Math.max(1,Math.min(300,Math.round(+e.target.value||1)));
    distribute();
    syncBuilderControls()
  };
  $("#bDist").onclick=()=>{
    distribute();
    renderBuilder()
  };
  if($("#bGen"))$("#bGen").onchange=e=>{
    B.gen=e.target.checked;
    distribute();
    renderBuilder()
  };
  $$("#bArea [data-sel]").forEach(c=>c.onchange=()=>{
    B.sel[c.dataset.sel]=c.checked;
    distribute();
    renderBuilder()
  });
  $$("#bArea [data-cnt]").forEach(c=>c.oninput=()=>{
    const id=c.dataset.cnt;let v=Math.max(0,Math.min(300,Math.round(+c.value||0)));if(!(B.gen&&M.genFor(id)))v=Math.min(v,qOfTopic(id).length);
    B.cnt[id]=v;
    syncBuilderControls(c)
  });
  $$("#bArea [data-all]").forEach(b=>b.onclick=()=>{
    TOPICS.filter(t=>t.ch===+b.dataset.all).forEach(t=>B.sel[t.id]=true);
    distribute();
    renderBuilder()
  });
  $$("#bArea [data-none]").forEach(b=>b.onclick=()=>{
    TOPICS.filter(t=>t.ch===+b.dataset.none).forEach(t=>B.sel[t.id]=false);
    distribute();
    renderBuilder()
  });
  $("#bGo").onclick=startBuilt;
}
function syncBuilderControls(activeInput) {
  $$('#bArea [data-cnt]').forEach(input => {
    if (input !== activeInput) input.value = B.cnt[input.dataset.cnt] || 0;
  });
  const count = Object.keys(B.cnt).filter(id => B.sel[id]).reduce((sum, id) => sum + (B.cnt[id] || 0), 0);
  $('#bGo').textContent = `ابدأ الاختبار (${ar(count)} سؤال)`;
  $('#bGo').disabled = count < 1 || count > 300;
}
function distribute(){
  const ids=TOPICS.map(t=>t.id).filter(id=>B.sel[id]);B.cnt={};
  ids.forEach(id=>B.cnt[id]=0);
  if(!ids.length)return;
  const cap=id=>B.gen&&M.genFor(id)?Infinity:qOfTopic(id).length;
  let left=B.total,guard=0;
  while(left>0&&guard<5000){
    guard++;
    const open=ids.filter(id=>B.cnt[id]<cap(id));if(!open.length)break;
    shuffle(open).forEach(id=>{
      if(left>0&&B.cnt[id]<cap(id)){
        B.cnt[id]++;
        left--
      }
    })
  }
}
function startBuilt(){
  const total = Object.keys(B.cnt).filter(id => B.sel[id]).reduce((sum, id) => sum + (B.cnt[id] || 0), 0);
  if (total > 300) { toast('الحد الأقصى 300 سؤال للاختبار'); return; }
  const make=()=>{
    const list=[];Object.keys(B.cnt).filter(k=>B.sel[k]&&B.cnt[k]>0).forEach(id=>{
      const st=shuffle(qOfTopic(id)),n=B.cnt[id];list.push(...st.slice(0,n));
      for(let i=st.length;i<n;i++){
        const g=M.genFor(id);if(g)list.push(g())
      }
    });
    return shuffle(list)
  };
  const list=make();
  if(!list.length){
    toast("اختر دروس وعدد أسئلة أول");
    return
  }
  $("#bArea").innerHTML=`<div class="row" style="justify-content:flex-start;margin:0 0 10px"><button class="btn ghost" id="bBack">→ رجوع للإعدادات</button></div><div id="bQuiz"></div>`;
  $("#bBack").onclick=renderBuilder;
  runQuiz($("#bQuiz"),list,{calm:true,keepOrder:true,regen:make});
}

/* Source: assets/js/features/extra.js */
let exSet=null;
function renderExtra(m){
  const X=M.EXTRA,sec=$("#"+m+"-extra");
  if(!exSet||!X.sets.some(s=>s[0]===exSet))exSet=X.sets[0][0];
  sec.innerHTML=`<h2>${X.tab}</h2><p class="lead">${X.lead}</p><div class="chips" id="${m}ExChips"></div><div id="${m}ExArea"></div>`;
  const ids=k=>{
    const f=X.sets.find(s=>s[0]===k)[2];return Q.map((q,i)=>i).filter(i=>!isGen(i)&&f(Q[i]))
  };
  chips($("#"+m+"ExChips"),X.sets.map(s=>[s[0],`${s[1]} (${ar(ids(s[0]).length)})`]),exSet,v=>{
    exSet=v;
    renderExtra(m)
  });
  runQuiz($("#"+m+"ExArea"),ids(exSet),{calm:m==="r",keepOrder:true,doneMsg:pct=>pct>=90?"صارت بجيبك 🔥":pct>=70?"زين! أعد اللي غلطت فيه من «أخطائي».":"أعدها مرة ثانية، الأسئلة نفسها ممكن تتكرر."});
}

/* Source: assets/js/features/mistakes.js */
function renderMiss(el,mode){
  S.miss=S.miss.filter(i=>Q[i]&&!isGen(i));
  if(!S.miss.length){
    el.innerHTML=`<div class="empty">ولا غلطة محفوظة. يا سلام!</div>`;
    return
  }
  const by={};S.miss.forEach(i=>{
    (by[Q[i][0]]=by[Q[i][0]]||[]).push(i)
  });
  const order=[...M.CHS,...Object.keys(by).map(Number).filter(c=>!M.CHS.includes(c))].filter(c=>by[c]);
  el.innerHTML=`<button class="btn next" style="margin:0 0 12px" data-drill>درّبني على أخطائي (${ar(S.miss.length)})</button>`+
  order.map(c=>`<div class="chapter-label">${M.chl(c)}</div><div class="cards">`+by[c].map(i=>`<div class="card mistake"><div class="q">${qt(Q[i][2])}</div><div class="ans">✓ ${qt(Q[i][3][0])}</div><div class="ex">${qt(iso(Q[i][4]))} — <span class="ttl">${esc(tname(Q[i][1]))}</span></div></div>`).join("")+"</div>").join("");
  el.querySelector("[data-drill]").onclick=()=>{
    el.innerHTML="";
    const box=document.createElement("div");el.appendChild(box);
    runQuiz(box,S.miss.slice(),{calm:mode==="r"})
  };
}

/* Source: assets/js/features/summary.js */
let sumCh="all";
function renderSum(){
  if(sumCh!=="all"&&!M.CHS.map(String).includes(sumCh))sumCh="all";
  chips($("#sumChips"),chChips(),sumCh,v=>{
    sumCh=v;
    renderSum()
  });
  const scope=TOPICS.filter(t=>sumCh==="all"||t.ch===+sumCh);
  let h="";
  M.CHS.filter(ch=>sumCh==="all"||ch===+sumCh).forEach(ch=>{
    h+=`<div class="chapter-label">${M.chl(ch)} — <span class="ttl">${M.CH_NAMES[ch]}</span></div><div class="cards">`;
    TOPICS.filter(t=>t.ch===ch).forEach(c=>{
      const d=S.done3.includes(c.id),n=qOfTopic(c.id).length;
      h+=`<article class="card${d?" done":""}" data-id="${c.id}"><h3><span class="ttl">${c.t}</span><span class="tar">${c.ar}</span></h3><ul class="pts">${c.pts.map(p=>`<li><p class="enl" dir="ltr">${fm(p[0])}</p><p class="arl">${fm(iso(p[1]))}</p></li>`).join("")}</ul>${c.trap?`<div class="trap"><p class="enl" dir="ltr"><b>Trap:</b> ${fm(c.trap[0])}</p><p class="arl"><b>فخ:</b> ${fm(iso(c.trap[1]))}</p></div>`:""}
        <div class="row">${n?`<button class="chk" data-drill="${c.id}">درّبني (${ar(Math.min(5,n))})</button>`:""}<button class="chk" data-done="1">${d?"خلّصته ✓":"خلّصته"}</button></div><div class="drillbox"></div></article>`
    });
    h+="</div>";
    
  });
  $("#sumList").innerHTML=h;
  const bar=()=>$("#sumBar").style.width=(100*scope.filter(t=>S.done3.includes(t.id)).length/scope.length)+"%";bar();
  $$("#sumList [data-done]").forEach(b=>b.onclick=e=>{
    const card=e.target.closest(".card"),id=card.dataset.id;
    if(S.done3.includes(id))S.done3=S.done3.filter(x=>x!==id);
    else{
      S.done3.push(id);
      S.xp+=5;
      if(scope.every(t=>S.done3.includes(t.id))){
        hype("خلّصت التلخيص!\nروح للتدريبات");
        confetti(140);
        beep("win")
      }
      else{
        hype(pick(["كرت ورا كرت!","تمام التمام!","يا سرعتك!","كمّل كمّل!","ولا يوقفك شي!"]));
        beep("good")
      }
    }
    save();
    const dn=S.done3.includes(id);card.classList.toggle("done",dn);
    e.target.textContent=dn?"خلّصته ✓":"خلّصته";
    bar();
    
  });
  $$("#sumList [data-drill]").forEach(b=>b.onclick=()=>{
    const card=b.closest(".card"),box=card.querySelector(".drillbox"),id=b.dataset.drill;
    const make=()=>shuffle(qOfTopic(id)).slice(0,5);
    runQuiz(box,make(),{keepOrder:true,regen:make,doneMsg:pct=>pct>=80?"الكرت هذا صار بجيبك! اضغط «خلّصته» وكمّل.":"اقرأ الكرت مرة ثانية وأعد."});
    box.scrollIntoView({behavior:reduced()?"auto":"smooth",block:"nearest"});
    
  });
}

/* ================= ZANGA: TOP POINTS ================= */
function renderHot(){
  let h=`<p class="lead">${ar(M.HOT_POINTS.length)} نقطة هي الأكثر احتمال في الاختبار. اقراها كلها، وبعدها اضغط الزر تحت وتدرّب على الأسئلة الأهم 🔥.</p>`,ch=null,n=0;
  M.HOT_POINTS.forEach(x=>{
    const c=x.ch!=null?x.ch:x.lec;if(c!==ch){
      if(ch!=null)h+="</div>";
      ch=c;
      h+=`<div class="chapter-label">${M.chl(c)} — <span class="ttl">${M.CH_NAMES[c]}</span></div><div class="cards">`
    }
    n++;
    h+=`<article class="card hotcard"><span class="hotn">${ar(n)}</span><p class="enl" dir="ltr">${fm(x.en)}</p><p class="arl">${qt(iso(x.ar))}</p></article>`
  });
  h+=`</div><button class="big-cta" id="hotGo">تدرّب على الأهم 🔥<small>${ar(qOfCh("hot").length)} سؤال من أكثر الأشياء احتمالاً، مع شرح لكل غلطة</small></button>`;
  $("#hotList").innerHTML=h;
  $("#hotGo").onclick=()=>{
    selectDrillSet("hot");
    showZ("drill")
  };
}

/* Source: assets/js/features/drills.js */
let dCh="hot",dN="20";
function selectDrillSet(value) { dCh = value; }
function renderDrill(){
  const items=[["hot","🔥 الأهم"],...chChips()];
  if(genKeys().length)items.push(["gen","🎲 مسائل حسابية"]);
  items.push(["miss",`أخطائي (${ar(S.miss.length)})`]);
  if(!items.some(x=>x[0]===dCh))dCh="hot";
  $("#drillCtl").innerHTML=`<div class="chiprow"><span class="lbl">على وش؟</span><div class="chips" id="dSet"></div></div><div class="chiprow"><span class="lbl">كم سؤال؟</span><div class="chips" id="dNum"></div></div>`;
  chips($("#dSet"),items,dCh,v=>{
    dCh=v;
    renderDrill()
  });
  chips($("#dNum"),[["10","10"],["20","20"],["40","40"],["all","الكل"]],dN,v=>{
    dN=v;
    renderDrill()
  });
  const make=()=>{
    let ids;
    if(dCh==="gen"){
      const gk=genKeys(),n=dN==="all"?20:+dN;ids=Array.from({length:n},()=>M.GEN[pick(gk)]())
    }
    else ids=shuffle(dCh==="miss"?S.miss.slice():qOfCh(dCh));
    return dN==="all"?ids:ids.slice(0,+dN)
  };
  runQuiz($("#drillArea"),make(),{keepOrder:true,regen:make,empty:dCh==="miss"?"ما عندك أخطاء! يا سلام عليك.":"ما في أسئلة.",
    doneMsg:pct=>pct>=90?"جاهز وزيادة! بالله ضبطنا 🔥":pct>=70?"زين! جولة على أخطائك وتصير فل.":"عادي، ارجع للتلخيص وأعد. كل جولة تفرق."});
}

/* Source: assets/js/ui/home.js */
// Small, local vector icons; no image downloads are needed for the home screen.
const icons = {
  net: '<path d="M12 16l34 0-8 28H20L12 16zm0 0 26 28M46 16 20 44"/><circle cx="12" cy="16" r="5"/><circle cx="46" cy="16" r="5"/><circle cx="20" cy="44" r="5"/><circle cx="38" cy="44" r="5"/>',
  os: '<rect x="9" y="12" width="40" height="29" rx="3"/><path d="M20 49h18M29 41v8M17 21h9m-9 8h23"/>',
  algo: '<rect x="4" y="32" width="9" height="19"/><rect x="18" y="24" width="9" height="27"/><rect x="32" y="13" width="9" height="38"/><rect x="46" y="5" width="9" height="46"/>',
  web: '<rect x="5" y="10" width="48" height="38" rx="4"/><path d="M5 20h48M23 28l-8 6 8 6m12-12 8 6-8 6"/>',
  pl: '<path d="M20 8c-8 0-8 4-8 12 0 6-6 9-6 9s6 3 6 9c0 8 0 12 8 12M38 8c8 0 8 4 8 12 0 6 6 9 6 9s-6 3-6 9c0 8 0 12-8 12M25 35l8-13"/>',
  sc: '<rect x="4" y="9" width="13" height="12" rx="2"/><rect x="23" y="9" width="13" height="12" rx="2"/><rect x="42" y="9" width="12" height="12" rx="2"/><rect x="4" y="27" width="13" height="12" rx="2"/><rect x="42" y="27" width="12" height="12" rx="2"/><path d="M4 46h13m25 0h12"/>'
};

function renderHome() {
  clearSubject();
  document.body.dataset.mode = 'rayeq';
  document.title = 'زنقة الكلاب';
  $('#home').hidden = false;
  $('#subj').hidden = true;
  $('#loading').hidden = true;
  $('#splash').hidden = true;
  $('#homeError').hidden = true;
  applyTheme('home');
  const last = LS.get('uz_last', null);
  $('#subjects').innerHTML = ORDER.map(key => {
    const stats = SUBJECT_STATS[key], color = THEMES[key].rayeq.score, state = loadS(key);
    const mastered = Math.min(stats.lessons, Object.values(state.mast).filter(value => value >= 80).length);
    const pct = Math.round(100 * mastered / stats.lessons);
    return `<button class="scard" data-s="${key}" style="--c:${color}">
      ${last === key ? '<span class="last">آخر وحدة</span>' : ''}
      <svg viewBox="0 0 58 58" aria-hidden="true" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${icons[key]}</svg>
      <h2>${META[key].name}</h2><div class="sen">${META[key].en}</div>
      <div class="smeta"><span>${ar(stats.lessons)} درس</span><span>${ar(stats.questions)} سؤال</span>
      <span>${META[key].sub}</span>${state.plan ? `<span>خطتك: ${nDays(state.plan.days)}</span>` : ''}${mastered ? `<span>أتقنت ${pct}%</span>` : ''}</div>
      <div class="sbar"><i style="width:${pct}%"></i></div></button>`;
  }).join('');
  $$('#subjects .scard').forEach(button => button.onclick = () => { void openSubject(button.dataset.s); });
  scrollTo({ top: 0 });
}

/* Source: assets/js/ui/navigation.js */
const loaders = {
  net: () => loadSubjectChunk('net'), os: () => loadSubjectChunk('os'),
  algo: () => loadSubjectChunk('algo'), web: () => loadSubjectChunk('web'),
  pl: () => loadSubjectChunk('pl'), sc: () => loadSubjectChunk('sc')
};
const cache = new Map();
let request = 0;
let splashTimer;
let splashConfetti;

function closeSplash() {
  clearTimeout(splashTimer);
  clearTimeout(splashConfetti);
  $('#splash').hidden = true;
}

function updateHistory(key, mode) {
  if (mode === 'none') return;
  const next = location.pathname + location.search + (key ? '#' + key : '');
  if (next === location.pathname + location.search + location.hash) return;
  history[mode === 'replace' ? 'replaceState' : 'pushState'](null, '', next);
}

function navigateHome({ historyMode = 'push' } = {}) {
  request++;
  closeSplash();
  clearEffects();
  renderHome();
  $('#app').removeAttribute('aria-busy');
  updateHistory(null, historyMode);
}

async function openSubject(key, { historyMode = 'push' } = {}) {
  if (!ORDER.includes(key)) return navigateHome({ historyMode: 'replace' });
  const token = ++request;
  closeSplash();
  clearEffects();
  $('#home').hidden = true;
  $('#subj').hidden = true;
  $('#loading').hidden = false;
  $('#app').setAttribute('aria-busy', 'true');
  try {
    if (!cache.has(key)) cache.set(key, (await loaders[key]()).createSubject());
    if (token !== request) return;
    activateSubject(key, cache.get(key));
    document.title = 'زنقة الكلاب · ' + META[key].en;
    $('#loading').hidden = true;
    $('#subj').hidden = false;
    setMode('rayeq');
    updateHistory(key, historyMode);
  } catch (error) {
    if (token !== request) return;
    renderHome();
    $('#homeError').textContent = 'ما قدرنا نحمّل المادة. تأكد من الاتصال، وحاول تفتحها مرة ثانية.';
    $('#homeError').hidden = false;
    console.error('Subject load failed:', key, error);
  } finally {
    if (token === request) $('#app').removeAttribute('aria-busy');
  }
}

function setMode(mode) {
  if (!CUR) return;
  closeSplash();
  clearEffects();
  setCurrentMode(mode);
  document.body.dataset.mode = mode;
  applyTheme(CUR, mode);
  $('#rayeqMode').hidden = mode !== 'rayeq';
  $('#zangaMode').hidden = mode !== 'zanga';
  $('#brand').innerHTML = (mode === 'zanga' ? 'زنقة الكلاب' : 'الرايق') + `<small>${META[CUR].name} · ${META[CUR].en}</small>`;
  $('#modebar').innerHTML = mode === 'rayeq'
    ? '<button class="zbtn" id="toZ"><span><b>مزنوق؟</b><br><span>الاختبار قريب؟ ادخل زنقة الكلاب: التلخيص، أهم النقاط، وتدريبات عليها</span></span><i>يلا ←</i></button>'
    : '<button class="rbtn" id="toR">→ رجّعني للرايق (الدروس والخطة)</button>';
  if (mode === 'rayeq') {
    $('#toZ').onclick = enterZanga;
    buildRTabs();
    showR(S.rtab || 'plan');
  } else {
    $('#toR').onclick = () => setMode('rayeq');
    buildZTabs();
    showZ(S.ztab || 'sum');
  }
  paintStats();
}

function enterZanga() {
  setMode('zanga');
  const splash = $('#splash');
  splash.hidden = false;
  beep('horn');
  splashConfetti = setTimeout(() => confetti(160), 250);
  const close = () => { closeSplash(); hype('يلا يلا يلا!!'); scrollTo({ top: 0 }); };
  splash.onclick = close;
  splashTimer = setTimeout(close, reduced() ? 900 : 2300);
}

function tabsHTML(items, prefix) {
  return items.map(([key, title, description]) => `<button class="tab" role="tab" id="${prefix}-tab-${key}" aria-controls="${prefix}-${key}" data-tab="${key}" tabindex="-1">${title}<small>${description}</small></button>`).join('');
}

function buildRTabs() {
  const items = [['plan','خطتي','على قد وقتك'], ['lessons','الدروس','بالترتيب'],
    ['lab',META[CUR].lab.tab,META[CUR].lab.sub], ['build','اختبار مخصص','العدد والدروس'], ['ctest','اختبار شابتر','بدون وقت']];
  if (M.EXTRA) items.push(['extra', M.EXTRA.tab, M.EXTRA.sub]);
  items.push(['miss','أخطائي', `<span class="missCount">${ar(S.miss.length)} سؤال</span>`]);
  $('#rTabs').innerHTML = tabsHTML(items, 'r');
  $$('#rTabs .tab').forEach(button => button.onclick = () => showR(button.dataset.tab));
}

function buildZTabs() {
  const items = [['sum','التلخيص','كروت + درّبني'], ['hot','أهم النقاط',`${ar(M.HOT_POINTS.length)} نقطة`], ['drill','تدريبات','على الملخص']];
  if (M.EXTRA) items.push(['extra', M.EXTRA.tab, M.EXTRA.sub]);
  items.push(['miss','أخطائي', `<span class="missCount">${ar(S.miss.length)} سؤال</span>`]);
  $('#zTabs').innerHTML = tabsHTML(items, 'z');
  $$('#zTabs .tab').forEach(button => button.onclick = () => showZ(button.dataset.tab));
}

function selectTab(prefix, tab, all) {
  $$(`#${prefix}Tabs .tab`).forEach(button => {
    const selected = button.dataset.tab === tab;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  for (const key of all) {
    const panel = $(`#${prefix}-${key}`);
    panel.hidden = key !== tab;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `${prefix}-tab-${key}`);
  }
}

function showR(tab, arg) {
  const all = ['plan','lessons','lab','build','ctest','extra','miss'];
  if (!all.includes(tab) || (tab === 'extra' && !M.EXTRA)) tab = 'plan';
  S.rtab = tab;
  save();
  selectTab('r', tab, all);
  if (tab === 'plan') renderPlan();
  if (tab === 'lessons') arg ? openLesson(arg) : renderLessons();
  if (tab === 'lab') {
    $('#labTitle').textContent = META[CUR].lab.title;
    $('#labLead').textContent = META[CUR].lab.lead;
    M.lab.render();
  }
  if (tab === 'build') renderBuilder();
  if (tab === 'ctest') renderCtest(arg);
  if (tab === 'extra') renderExtra('r');
  if (tab === 'miss') renderMiss($('#r-miss .missList'), 'r');
  scrollTo({ top: 0, behavior: reduced() ? 'instant' : 'smooth' });
}

function showZ(tab, arg) {
  const all = ['sum','hot','drill','extra','miss'];
  if (!all.includes(tab) || (tab === 'extra' && !M.EXTRA)) tab = 'sum';
  S.ztab = tab;
  save();
  selectTab('z', tab, all);
  if (tab === 'sum') renderSum();
  if (tab === 'hot') renderHot();
  if (tab === 'drill') renderDrill(arg);
  if (tab === 'extra') renderExtra('z');
  if (tab === 'miss') renderMiss($('#z-miss .missList'), 'z');
}

function paintStats() {
  if (!CUR) return;
  $$('.missCount').forEach(el => { el.textContent = ar(S.miss.length) + ' سؤال'; });
  const accuracy = S.total ? ar(Math.round(100 * S.right / S.total)) + '%' : '—';
  const mastered = TOPICS.filter(t => isMast(t.id)).length;
  if (MODE === 'rayeq') {
    const challenges = CHAL();
    $('#stats').innerHTML = `<div class="stat"><b>${mastered}/${TOPICS.length}</b><span>دروس متقنة</span></div>
      <div class="stat"><b>${Math.round(100 * mastered / TOPICS.length)}%</b><span>تقدّمك</span></div>
      <div class="stat"><b>${accuracy}</b><span>دقّتك</span></div>
      ${challenges.length ? `<div class="stat"><b>${challenges.filter(x => S.lab[x.id]).length}/${challenges.length}</b><span>تحديات المختبر</span></div>` : ''}`;
  } else {
    $('#stats').innerHTML = `<div class="stat"><b>${ar(S.xp)}</b><span>نقاط</span></div>
      <div class="stat"><b>${ar(S.best)}</b><span>أعلى كومبو</span></div><div class="stat"><b>${accuracy}</b><span>دقّتك</span></div>
      <div class="stat"><b>${TOPICS.filter(t => S.done3.includes(t.id)).length}/${TOPICS.length}</b><span>كروت الملخص</span></div>`;
  }
}

function initNavigation() {
  $('#homeBtn').onclick = () => navigateHome();
  on('statechange', paintStats);
  const route = () => {
    const key = location.hash.slice(1);
    if (ORDER.includes(key)) void openSubject(key, { historyMode: 'none' });
    else navigateHome({ historyMode: key ? 'replace' : 'none' });
  };
  addEventListener('popstate', route);
  addEventListener('hashchange', () => {
    const key = location.hash.slice(1);
    if (key !== (CUR || '') && $('#loading').hidden) route();
  });
  addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#splash').hidden) closeSplash(); });
  for (const prefix of ['r', 'z']) {
    $(`#${prefix}Tabs`).addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      const buttons = $$(`#${prefix}Tabs .tab`);
      const current = buttons.indexOf(document.activeElement);
      if (current < 0) return;
      event.preventDefault();
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
        : (current + (event.key === 'ArrowLeft' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[index].click();
      buttons[index].focus();
    });
  }
  route();
}

const shared = { $, $$, S, ar, beep, confetti, esc, fm, pick, save, shuffle, solved, toast };
globalThis.ZangaChunks = Object.freeze({ register(key, setup) {
  if (!Object.hasOwn(chunkVersions, key) || moduleRegistry.has(key)) return;
  moduleRegistry.set(key, setup(shared));
} });
function paintSound() {
  $('#soundBtn').textContent = 'الصوت: ' + (G.sound ? 'شغّال' : 'طافي');
  $('#soundBtn').setAttribute('aria-pressed', String(G.sound));
}

$('#soundBtn').onclick = () => {
  G.sound = !G.sound;
  LS.set('uz_sound', G.sound);
  paintSound();
};

addEventListener('keydown', event => {
  if (event.ctrlKey || event.altKey || event.metaKey || event.repeat || !$('#splash').hidden) return;
  if (/INPUT|SELECT|TEXTAREA/.test(event.target.tagName) || event.target.isContentEditable) return;
  const number = Number(event.key);
  if (!Number.isInteger(number) || number < 1 || number > 4) return;
  const options = $$('.opts').find(el => el.getClientRects().length);
  const button = options?.querySelectorAll('.opt')[number - 1];
  if (button && !button.disabled) { event.preventDefault(); button.click(); }
});

// Image paths are preserved. A readable caption replaces a missing slide image.
document.addEventListener('error', event => {
  if (event.target.tagName !== 'IMG' || !event.target.closest('.fig')) return;
  const img = event.target;
  img.hidden = true;
  const note = document.createElement('p');
  note.className = 'missing-slide';
  note.textContent = 'صورة السلايد غير متوفرة حاليًا.';
  img.after(note);
}, true);

paintSound();
initEffects();
initNavigation();
globalThis.ZangaBoot?.ready();
if (!LS.available) toast('الحفظ مؤقت في هذه الجلسة؛ تخزين المتصفح غير متاح.');
})();
