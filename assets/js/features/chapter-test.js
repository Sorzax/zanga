import { M, S, save } from '../core/state.js';
import { $, ar, shuffle } from '../core/utils.js';
import { chip, qOfCh, chips } from '../core/helpers.js';
import { runQuiz } from './quiz.js';

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

export { ctCh, renderCtest };
