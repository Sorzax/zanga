import { M, Q } from '../core/state.js';
import { $, ar } from '../core/utils.js';
import { isGen, chips } from '../core/helpers.js';
import { runQuiz } from './quiz.js';

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

export { exSet, renderExtra };
