import { CUR, M, TOPICS } from '../core/state.js';
import { toast } from '../core/effects.js';
import { $, $$, ar, shuffle } from '../core/utils.js';
import { qOfTopic, genKeys } from '../core/helpers.js';
import { runQuiz } from './quiz.js';

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

export { B, renderBuilder, distribute, startBuilt };
