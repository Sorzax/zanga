import { M, Q, TOP, S } from './state.js';
import { esc } from './utils.js';

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

export { HYPE, COMBO, OOPS, CALM_OK, CALM_NO, chip, isGen, isExtra, qOfTopic, qOfCh, figsHTML, isMast, tname, CHAL, chalOf, genKeys, chips, chChips };
