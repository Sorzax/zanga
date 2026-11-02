import { M, Q, S } from '../core/state.js';
import { esc, qt, iso, ar } from '../core/utils.js';
import { isGen, tname } from '../core/helpers.js';
import { runQuiz } from './quiz.js';

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

export { renderMiss };
