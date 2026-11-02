import { M, TOPICS, S, save } from '../core/state.js';
import { beep, confetti, hype, reduced } from '../core/effects.js';
import { showZ } from '../ui/navigation.js';
import { fm, qt, iso, $, $$, ar, pick, shuffle } from '../core/utils.js';
import { qOfTopic, qOfCh, chips, chChips } from '../core/helpers.js';
import { runQuiz } from './quiz.js';
import { selectDrillSet } from './drills.js';

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

export { sumCh, renderSum, renderHot };
