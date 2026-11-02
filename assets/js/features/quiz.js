import { CUR, Q, S, save } from '../core/state.js';
import { beep, confetti, hype, toast } from '../core/effects.js';
import { esc, qt, iso, ar, pick, shuffle } from '../core/utils.js';
import { HYPE, COMBO, OOPS, CALM_OK, CALM_NO, chip, isGen, figsHTML, tname } from '../core/helpers.js';
import { META } from '../../../data/catalog.js';

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

export { record, runQuiz };
