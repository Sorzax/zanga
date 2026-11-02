import { S, save } from '../core/state.js';
import { beep, toast } from '../core/effects.js';
import { esc, $, $$, ar, pick } from '../core/utils.js';

import { FIGS, TOPICS, Q, PL_DOCS, CH_NAMES, CHS, EX, HOT_POINTS, PRJ_STEPS, PRJ_SECTIONS, PRJ_MARKS, PRJ_LANGS } from '../../../data/subjects/pl.js';

export function createSubject() {
  
  /* Programming Languages CS3713T — Sebesta, Lecture 1 (Ch 1), Lectures 2–3 (Ch 6 Data Types) */

  const TOP=Object.fromEntries(TOPICS.map((t,i)=>[t.id,Object.assign(t,{idx:i})]));

  const chl=ch=>"Lecture "+ch;

  const rint=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  function addGen(ch,tp,q,opts,arx,enx){
    const o=[...new Set(opts.map(String))];let k=1;while(o.length<4){
      const x=String(parseInt(opts[0])+k*4);if(!o.includes(x))o.push(x);
      k++
    }Q.push([ch,tp,q,o.slice(0,4),arx,enx,0,1]);
    return Q.length-1
  }
  const GEN={
    arrayimpl:()=>{
      const base=pick([1000,1200,2000,3000,4000]),size=pick([1,2,4,8]);
      if(Math.random()<.45){
        const lb=pick([0,0,1,5]),k=lb+rint(1,9);const a=base+(k-lb)*size;
        return addGen(3,"arrayimpl",`A single-dimensioned array starts at address ${base}, lower bound ${lb}, element size ${size}. Address of list[${k}]?`,[a,base+k*size,base+(k-lb+1)*size,a+size].map(String),`${base} + (${k} − ${lb}) × ${size} = ${a}.`,`${base} + (${k} − ${lb}) × ${size} = ${a}.`)
      }
      const rows=rint(3,6),cols=rint(3,7),i=rint(0,rows-1),j=rint(0,cols-1),col=Math.random()<.25;
      const rm=base+(i*cols+j)*size,cm=base+(j*rows+i)*size;
      return addGen(3,"arrayimpl",`Array a has ${rows} rows and ${cols} columns, lower bounds 0, base ${base}, element size ${size}, stored in ${col?"column":"row"} major order. Address of a[${i}, ${j}]?`,[col?cm:rm,col?rm:cm,base+(i*rows+j)*size,base+(i+j)*size].map(String),
      col?`بالأعمدة: (j × عدد الصفوف + i) × الحجم = (${j}×${rows} + ${i})×${size} = ${(j*rows+i)*size}، فالعنوان ${cm}.`:`بالصفوف: (i × عدد الأعمدة + j) × الحجم = (${i}×${cols} + ${j})×${size} = ${(i*cols+j)*size}، فالعنوان ${rm}.`,
      col?`Column major: (j × rows + i) × size = (${j}×${rows} + ${i})×${size} → ${cm}.`:`Row major: (i × cols + j) × size = (${i}×${cols} + ${j})×${size} → ${rm}.`)
    }
  };
  const genFor=tp=>GEN[tp]||null;
  const CHAL=[]; const chalOfTopics=()=>[];
  /* ============ COURSE PROJECT PAGE ============ */

  let prjTab="req";
  function renderLab(){
    const st=PRJ_STEPS.flatMap((g,gi)=>g[2].map((s,si)=>"p"+gi+"_"+si)),done=st.filter(k=>S.lab[k]).length;
    const ck=PL_DOCS.checkItems.flatMap((g,gi)=>g.items.map((s,si)=>"c"+gi+"_"+si)),ckd=ck.filter(k=>S.lab[k]).length;
    $("#labArea").innerHTML=`<div class="card" style="border-color:var(--red)"><p style="margin:0"><b>ملاحظة مهمة: الدكتور قال تقدر تختار أي لغة برمجة ماعدا Java.</b> اختيار Java يعني رسوب أو إعادة تسليم حسب سياسة القسم.</p></div>
   <div class="chips" style="margin:0">${[["req","المطلوب باختصار"],["sec","شرح أقسام التقرير"],["marks","توزيع الدرجات"],["plan",`الخطة (${ar(done)}/${ar(st.length)})`],["check",`قائمة التحقق (${ar(ckd)}/${ar(ck.length)})`],["lang","اختيار اللغة"],["files","الملفات الأصلية"]].map(([k,l])=>`<button class="pill" data-pt="${k}" aria-pressed="${k===prjTab}">${l}</button>`).join("")}</div><div id="prjIn"></div>`;
    $$("#labArea [data-pt]").forEach(b=>b.onclick=()=>{
      prjTab=b.dataset.pt;
      renderLab()
    });
    const el=$("#prjIn");
    if(prjTab==="req"){
      el.innerHTML=`<div class="card"><h3 style="margin:0 0 8px">وش المطلوب؟</h3>
    <p class="arl" style="color:var(--chalk)">تبحث عن لغة برمجة تختارها (ماعدا Java)، وتشرح تصميمها وقواعدها (grammar) وصيغتها (syntax) ودلالتها (semantics) بكلامك، وتقيّمها بمعايير Sebesta، وكل كلامك مدعوم بكود شغّلته بنفسك مع شرح الأدوات اللي استخدمتها.</p>
    <ol class="pts" style="padding-inline-start:34px;margin-top:12px">
     <li><p class="arl" style="color:var(--chalk)"><b>تقرير PDF</b>: من 2500 لـ 3500 كلمة (أكثر عادي)، خط 11–12، تباعد 1.5، عناوين واضحة، والكود بخط monospace.</p></li>
     <li><p class="arl" style="color:var(--chalk)"><b>ملحق كود</b>: أمثلة قصيرة مستقلة شغلتها بنفسك، مجموعها 200 سطر بالكثير.</p></li>
     <li><p class="arl" style="color:var(--chalk)"><b>ملاحظات إعادة التشغيل</b> (Reproducibility notes): الأدوات والخطوات بالتفصيل. غيابها يخصم لين 10 درجات.</p></li>
     <li><p class="arl" style="color:var(--chalk)"><b>مراجع</b> بتنسيق APA أو IEEE.</p></li>
     <li><p class="arl" style="color:var(--chalk)"><b>فيديو عرض</b> من 2 لـ 5 دقايق.</p></li>
     <li><p class="arl" style="color:var(--chalk)"><b>التسليم</b>: على Blackboard، قبل 12:00 ص يوم السبت من الأسبوع 17، واسم الملف <code>CS3713T-Report-Surname-Language.pdf</code>.</p></li></ol>
    <div class="trap"><p class="arl" style="margin:0"><b>انتبه:</b> الملفات فيها اختلاف بسيط: المواصفات تقول اسم الملف بشرطات (-) والموعد 12:00 ص، وقائمة التحقق تقول شرطات سفلية (_) والموعد 11:59 م على VLE. تأكد من الدكتور، والأحوط تسلم قبل الاثنين.</p></div>
    <div class="analogy"><b>قواعد ما تنكسر</b><p style="margin:4px 0 0">1) ممنوع Java. 2) لازم تبين فهمك بكلامك وبالمصطلحات الصح. 3) لازم تتكلم عن الـ grammar والـ syntax والـ semantics. 4) لازم تشغّل الأكواد بنفسك وتوثق بالضبط كيف (المترجم، المحرر، النظام، الإصدارات، الأوامر). والنسخ أو المحتوى المولّد بالذكاء الاصطناعي بدون تحرير ينخصم عليه.</p></div>
    <p class="arl">موقع تبدأ منه تتصفح اللغات: <a href="https://programminglanguages.info/" target="_blank" rel="noopener" style="color:var(--score)">programminglanguages.info</a></p></div>`
    }
    else if(prjTab==="sec"){
      el.innerHTML=`<p class="lead" style="margin:10px 0">الأقسام المطلوبة بالترتيب، وكل واحد وش تكتب فيه (هذا شرح للمطلوب، مو حل).</p><div class="cards">${PRJ_SECTIONS.map(s=>`<div class="card"><h3><span class="ttl">${s[0]}</span><span class="tar">${s[1]}</span></h3><p class="arl" style="color:var(--chalk);margin:0">${s[2]}</p></div>`).join("")}</div>
    <div class="card" style="margin-top:12px"><h3 style="margin:0 0 6px">نصائح التقييم من الملفات</h3><ul class="pts"><li><p class="arl" style="margin:0">اربط كل نقطة تقييم بتعريف Sebesta، وابعد عن الكلام العام.</p></li><li><p class="arl" style="margin:0">خل الأمثلة صغيرة وتشتغل، واكتب الأوامر أو خطوات المحرر.</p></li><li><p class="arl" style="margin:0">قارن مع لغة ثانية واحدة على الأقل.</p></li><li><p class="arl" style="margin:0">حط أرقام لما تقدر (وقت الترجمة، وقت التشغيل، الذاكرة، عدد الأسطر).</p></li><li><p class="arl" style="margin:0">اعتمد على الـ grammar والمواصفات الرسمية واشرحها بكلامك.</p></li></ul></div>`
    }
    else if(prjTab==="marks"){
      el.innerHTML=`<div class="card"><h3 style="margin:0 0 10px">توزيع الدرجات (100)</h3>${PRJ_MARKS.map(m=>`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><span>${m[1]} <span class="tar ttl">· ${m[0]}</span></span><b class="en">${m[2]}</b></div><div class="progress" style="margin:4px 0 0"><i style="width:${m[2]*4}%"></i></div></div>`).join("")}
    <div class="trap"><p class="arl" style="margin:0"><b>الخصومات:</b> اختيار Java = رسوب أو إعادة تسليم. غياب ملاحظات إعادة التشغيل = لين −10. عدد كلمات أقل أو أكثر بكثير = −5. التأخير حسب سياسة القسم (مثلاً −10% لكل يوم). والانتحال حسب أنظمة الجامعة (ممكن صفر).</p></div>
    <p class="arl">أعلى وزن: <b>تطبيق معايير Sebesta (25)</b> و<b>الأدلة والكود (20)</b>، فلا تكتب تقييم بدون كود شغلته ومراجع.</p></div>`
    }
    else if(prjTab==="plan"){
      el.innerHTML=`<p class="lead" style="margin:10px 0">خطة مقترحة على 6 أسابيع (تقدر تضغطها). علّم كل خطوة تخلصها، وينحفظ تقدمك. الخطة تقولك وش تسوي ومتى، والكتابة والتجربة عليك.</p>`+PRJ_STEPS.map((g,gi)=>`<div class="chapter-label">${g[0]} <span class="tar">· ${g[1]}</span></div><div class="cards">${g[2].map((s,si)=>{
          const k="p"+gi+"_"+si;return `<label class="brow${S.lab[k]?"":" off"}" style="opacity:1;cursor:pointer"><span style="display:flex;gap:10px;align-items:flex-start;flex:1;min-width:0"><input type="checkbox" data-k="${k}"${S.lab[k]?" checked":""} style="margin-top:6px"><span><b>${s[0]}</b><br><span class="arl">${s[1]}</span></span></span></label>`
        }).join("")}</div>`).join("")
    }
    else if(prjTab==="check"){
      el.innerHTML=`<p class="lead" style="margin:10px 0">نفس قائمة التحقق اللي من المادة (Student Checklist). علّم كل بند قبل التسليم، وأي بند ما تقدر تعلمه صحّحه.</p>`+PL_DOCS.checkItems.map((g,gi)=>`<div class="chapter-label ttl" style="direction:ltr;text-align:left">${esc(g.h)}</div><div class="cards">${g.items.map((s,si)=>{
          const k="c"+gi+"_"+si;return `<label class="brow" style="cursor:pointer;direction:ltr;text-align:left"><span style="display:flex;gap:10px;align-items:flex-start;flex:1;min-width:0"><input type="checkbox" data-k="${k}"${S.lab[k]?" checked":""} style="margin-top:6px"><span>${esc(s)}</span></span></label>`
        }).join("")}</div>`).join("")
    }
    else if(prjTab==="lang"){
      el.innerHTML=`<p class="lead" style="margin:10px 0">نصيحة المواصفات: اختار لغة تقدر تثبتها وتشغلها، ويفضّل ما تعرفها عشان تستفيد. هذي ملاحظات تساعدك تختار، والقرار لك.</p><div class="cards">${PRJ_LANGS.map(l=>`<div class="card"><h3 style="margin:0 0 4px"><span class="ttl">${l[0]}</span></h3><p class="arl" style="margin:0">${l[1]}</p></div>`).join("")}</div>
    <div class="card" style="margin-top:12px"><h3 style="margin:0 0 6px">أسئلة تسألها لنفسك قبل ما تختار</h3><ul class="pts"><li><p class="arl" style="margin:0">هل لها grammar أو مواصفات رسمية منشورة أقدر أرجع لها؟</p></li><li><p class="arl" style="margin:0">هل أقدر أثبتها وأشغلها بسهولة على جهازي أو أونلاين؟</p></li><li><p class="arl" style="margin:0">هل فيها شي مميز أقدر أقيّمه بعمق (أمان الذاكرة، التزامن، الكسل lazy، نظام الأنواع)؟</p></li><li><p class="arl" style="margin:0">وش اللغة الثانية اللي بقارنها فيها؟</p></li><li><p class="arl" style="margin:0">هل عندها مراجع موثوقة كفاية للتاريخ والإصدارات؟</p></li></ul>
    <p class="arl">تقدر تتصفح اللغات من <a href="https://programminglanguages.info/" target="_blank" rel="noopener" style="color:var(--score)">programminglanguages.info</a>.</p></div>`
    }
    else{
      el.innerHTML=`<p class="lead" style="margin:10px 0">نص الملفات الأصلية كامل بالإنجليزي (المواصفات، الـ Rubric، قائمة التحقق) والرابط اللي معهم.</p>
    ${[["CS3713T Programming Languages Project Specification","spec"],["CS3713T Programming Language Evaluation Report Rubric","rubric"],["CS3713T Programming Language Evaluation Report Checklist","check"]].map(([n,k])=>`<details class="card" style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:700" class="ttl">${n}</summary><div class="enl doc" dir="ltr" style="margin-top:10px">${PL_DOCS[k]}</div></details>`).join("")}
    <div class="card"><b>A Website to Start with</b><p class="enl" dir="ltr" style="margin:6px 0 0"><a href="https://programminglanguages.info/" target="_blank" rel="noopener" style="color:var(--score)">https://programminglanguages.info/</a></p></div>`
    }
    $$("#prjIn [data-k]").forEach(c=>c.onchange=()=>{
      S.lab[c.dataset.k]=c.checked;
      save();
      const all=st.every(k=>S.lab[k]);if(c.checked){
        beep("soft");
        toast(all&&c.dataset.k[0]==="p"?"خلّصت كل خطوات الخطة!":"تم")
      }renderLab()
    });
  }
  
  return {FIGS,TOPICS,Q,TOP,EX,HOT_POINTS,CH_NAMES,CHS,chl,GEN,genFor,CHAL,chalOfTopics,lab:{render:renderLab,open:()=>{
      }}};
  
}
