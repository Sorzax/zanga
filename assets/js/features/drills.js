import { M, S } from '../core/state.js';
import { $, ar, pick, shuffle } from '../core/utils.js';
import { qOfCh, genKeys, chips, chChips } from '../core/helpers.js';
import { runQuiz } from './quiz.js';

let dCh="hot",dN="20";
export function selectDrillSet(value) { dCh = value; }
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

export { dCh, dN, renderDrill };
