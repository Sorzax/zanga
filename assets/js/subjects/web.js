import { S, save } from '../core/state.js';
import { beep, confetti, toast } from '../core/effects.js';
import { $, $$, ar } from '../core/utils.js';

import { FIGS, TOPICS, Q, CH_NAMES, CHS, EX, HOT_POINTS, EXTRA_NAMES } from '../../../data/subjects/web.js';

export function createSubject() {
  
  /* ============ CONTENT ============ */
  /* Convention: text inside `backticks` is code; it is escaped and shown as <code>. Everything else in TOPICS may hold <b>. Q strings are fully escaped. */

  const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const fm=s=>String(s).replace(/`([^`]+)`/g,(m,c)=>"<code>"+esc(c)+"</code>");
  const qt=s=>esc(s).replace(/`([^`]+)`/g,(m,c)=>"<code>"+c+"</code>");

  const chl=ch=>({1:"Chapter 1",2:"Chapter 2 · Part 1",25:"Chapter 2 · Part 2",3:"Chapter 3",4:"Chapter 4",90:"تدريبات مهمة · HTML",91:"تدريبات مهمة · CSS",92:"تدريبات مهمة · JavaScript"})[ch]||("Chapter "+ch);
  
  /* Analogies for the calm mode (Arabic) */

  /* 14-day plan */

  /* Web explanations aligned with the Web question order: [arabic, english]. `x` = code */

  const EXTRA={tab:"تدريبات مهمة",sub:"HTML · CSS · JS",lead:"أسئلة مهمة على نمط الاختبارات (HTML وCSS وJavaScript). جاوب، واللي تغلط فيه ينحفظ في أخطائك. بعضها مكتوب جنبه إنه مو في السلايدات.",
    sets:[["hc","HTML + CSS",q=>q[0]===90||q[0]===91],["90","HTML",q=>q[0]===90],["91","CSS",q=>q[0]===91],["92","JavaScript",q=>q[0]===92]]};
  
  const GEN={}; const genFor=()=>null;
  
  const TOP=Object.fromEntries(TOPICS.map((t,i)=>[t.id,Object.assign(t,{idx:i})]));
  /* ============ RAYEQ: HTML LAB ============ */
  const P=(code)=>new DOMParser().parseFromString(code,"text/html");
  const nonEmpty=e=>!!(e&&e.textContent.trim());
  const CHAL=[
  {id:"c1",tp:"elements",t:"قالب صفحة HTML5 كامل",task:"اكتب قالب صفحة كامل: DTD، و<code>html</code> بلغة إنجليزي، و<code>head</code> فيه <code>title</code> و<code>meta</code> للترميز utf-8، و<code>body</code> فيه أي نص.",
    start:"",
    sol:'<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>My Page</title>\n<meta charset="utf-8">\n</head>\n<body>\n<p>Hello!</p>\n</body>\n</html>',
    check:(c,d)=>[[/^\s*<!DOCTYPE html>/i.test(c),"أول سطر <!DOCTYPE html>"],[d.documentElement.getAttribute("lang")==="en",'html فيه lang="en"'],[/<head[\s>]/i.test(c)&&/<\/head>/i.test(c),"head بفتح وإغلاق"],[nonEmpty(d.querySelector("head title")),"title داخل head وفيه نص"],[(d.querySelector('meta[charset]')?.getAttribute("charset")||"").toLowerCase()==="utf-8",'meta charset="utf-8"'],[/<body[\s>]/i.test(c)&&nonEmpty(d.body),"body فيه محتوى"]]},
  {id:"c2",tp:"text",t:"عناوين وفقرة وسطر جديد",task:"حط <code>h1</code> للعنوان الرئيسي، وتحته <code>h2</code>، وبعدها فقرة <code>p</code> فيها سطرين بينهم <code>br</code>، وبعدها <code>blockquote</code>.",
    start:"<h1></h1>\n",
    sol:"<h1>My Trip</h1>\n<h2>Day One</h2>\n<p>We arrived in the morning.<br>Then we had lunch.</p>\n<blockquote>The journey is the reward.</blockquote>",
    check:(c,d)=>[[nonEmpty(d.querySelector("h1")),"h1 فيه نص"],[nonEmpty(d.querySelector("h2")),"h2 فيه نص"],[!!d.querySelector("p br"),"br داخل الفقرة"],[nonEmpty(d.querySelector("blockquote")),"blockquote فيه نص"]]},
  {id:"c3",tp:"phrase",t:"عناصر الـ phrase",task:"اكتب فقرة فيها: كلمة بـ <code>strong</code>، وكلمة بـ <code>em</code>، والماء H₂O باستخدام <code>sub</code>، وx² باستخدام <code>sup</code>، وكلمة مظللة بـ <code>mark</code>.",
    start:"<p>\n\n</p>",
    sol:"<p><strong>Important:</strong> drink <em>more</em> H<sub>2</sub>O. Area = x<sup>2</sup>. <mark>Exam tomorrow</mark></p>",
    check:(c,d)=>[[!!d.querySelector("p strong"),"strong داخل p"],[!!d.querySelector("p em"),"em داخل p"],[d.querySelector("sub")?.textContent.trim()==="2","sub فيه 2"],[d.querySelector("sup")?.textContent.trim()==="2","sup فيه 2"],[nonEmpty(d.querySelector("mark")),"mark فيه نص"]]},
  {id:"c4",tp:"lists",t:"قائمة مرقمة بحروف كبيرة",task:"سوّ قائمة مرقمة تستخدم حروف كبيرة (A, B, C) وتبدأ من الحرف الثالث، وفيها 3 عناصر على الأقل. وبعدها قائمة نقاط فيها عنصرين.",
    start:"",
    sol:'<ol type="A" start="3">\n<li>HTML</li>\n<li>CSS</li>\n<li>JavaScript</li>\n</ol>\n<ul>\n<li>GIF</li>\n<li>PNG</li>\n</ul>',
    check:(c,d)=>{
      const o=d.querySelector("ol");return[[!!o,"فيه ol"],[o?.getAttribute("type")==="A",'type="A"'],[o?.getAttribute("start")==="3",'start="3"'],[(o?.querySelectorAll(":scope>li").length||0)>=3,"3 عناصر li أو أكثر"],[(d.querySelector("ul")?.querySelectorAll(":scope>li").length||0)>=2,"ul فيها عنصرين"]]
    }},
  {id:"c5",tp:"lists",t:"قائمة وصف (FAQ)",task:"سوّ قائمة وصف فيها سؤالين وجوابهم: كل سؤال في <code>dt</code> وجوابه في <code>dd</code>.",
    start:"<dl>\n\n</dl>",
    sol:"<dl>\n<dt>What is HTML?</dt>\n<dd>A markup language for web pages.</dd>\n<dt>What is W3C?</dt>\n<dd>The organization that sets web standards.</dd>\n</dl>",
    check:(c,d)=>[[!!d.querySelector("dl"),"فيه dl"],[d.querySelectorAll("dl dt").length>=2,"dt عدد 2 أو أكثر"],[d.querySelectorAll("dl dd").length>=2,"dd عدد 2 أو أكثر"],[!d.querySelector("dl li"),"ما فيه li داخل dl"]]},
  {id:"c6",tp:"struct",t:"الرموز الخاصة",task:"اكتب <code>footer</code> فيه النص: <b dir=\"ltr\">Copyright © 2026 Web &amp; Design</b> باستخدام أكواد الرموز الخاصة (مو الرمز نفسه).",
    start:"<footer>\n\n</footer>",
    sol:"<footer>Copyright &copy; 2026 Web &amp; Design</footer>",
    check:(c,d)=>[[!!d.querySelector("footer"),"فيه footer"],[/&copy;/.test(c),"استخدمت &copy;"],[/&amp;/.test(c),"استخدمت &amp;"],[(d.querySelector("footer")?.textContent||"").includes("©"),"العلامة © ظاهرة"]]},
  {id:"c7",tp:"struct",t:"هيكل HTML5",task:"ابنِ هيكل صفحة: <code>header</code> فيه <code>h1</code>، و<code>nav</code> فيه 3 روابط نسبية (Home, Services, Contact)، و<code>main</code> فيه فقرة، و<code>footer</code>.",
    start:"",
    sol:'<header><h1>Trillium Media Design</h1></header>\n<nav>\n<a href="index.html">Home</a>\n<a href="services.html">Services</a>\n<a href="contact.html">Contact</a>\n</nav>\n<main><p>We bring your business to the Web.</p></main>\n<footer>Copyright &copy; 2026</footer>',
    check:(c,d)=>{
      const a=[...d.querySelectorAll("nav a")];return[[!!d.querySelector("header h1"),"h1 داخل header"],[a.length>=3,"3 روابط داخل nav"],[a.length>0&&a.every(x=>!/^https?:/i.test(x.getAttribute("href")||"")&&(x.getAttribute("href")||"").length>0),"الروابط نسبية (بدون http)"],[!!d.querySelector("main p"),"p داخل main"],[!!d.querySelector("footer"),"فيه footer"]]
    }},
  {id:"c8",tp:"links",t:"ثلاث أنواع روابط",task:"سوّ 3 روابط: رابط مطلق لـ yahoo.com، ورابط نسبي لصفحة contact.html، ورابط إيميل لـ me@site.com.",
    start:"",
    sol:'<a href="http://yahoo.com">Yahoo</a>\n<a href="contact.html">Contact Us</a>\n<a href="mailto:me@site.com">Email Me</a>',
    check:(c,d)=>{
      const h=[...d.querySelectorAll("a")].map(a=>a.getAttribute("href")||"");return[[h.some(x=>/^https?:\/\/(www\.)?yahoo\.com\/?$/i.test(x)),"رابط مطلق فيه http://yahoo.com"],[h.includes("contact.html"),'رابط نسبي href="contact.html"'],[h.some(x=>/^mailto:me@site\.com$/i.test(x)),"رابط mailto:me@site.com"],[[...d.querySelectorAll("a")].every(nonEmpty),"كل رابط له نص ظاهر"]]
    }},
  {id:"c9",tp:"img",t:"عنصر الصورة",task:"أضف صورة <code>logo.gif</code> عرضها 500 وطولها 200، مع نص بديل يوصف الصورة (مو اسم الملف). وبعدها خط أفقي <code>hr</code>.",
    start:"",
    sol:'<img src="logo.gif" width="500" height="200" alt="My Company Name">\n<hr>',
    check:(c,d)=>{
      const i=d.querySelector("img");const alt=i?.getAttribute("alt")||"";return[[i?.getAttribute("src")==="logo.gif",'src="logo.gif"'],[i?.getAttribute("width")==="500","width=500"],[i?.getAttribute("height")==="200","height=200"],[alt.trim().length>0&&!/\.(gif|jpe?g|png)$/i.test(alt.trim()),"alt يوصف الصورة ومو اسم الملف"],[!!d.querySelector("hr"),"فيه hr"],[!/<\/img>/i.test(c)&&!/<\/hr>/i.test(c),"ما قفلت img ولا hr (void)"]]
    }},
  {id:"c10",tp:"img",t:"صورة مصغرة (thumbnail)",task:"سوّ صورة صغيرة <code>small.jpg</code> لما تضغط عليها تفتح الصورة الكبيرة <code>big.jpg</code>.",
    start:"",
    sol:'<a href="big.jpg"><img src="small.jpg" alt="Sunset at the beach" width="100" height="75"></a>',
    check:(c,d)=>{
      const i=d.querySelector("a > img, a img");return[[!!i,"img داخل a"],[i?.closest("a")?.getAttribute("href")==="big.jpg",'الرابط href="big.jpg"'],[i?.getAttribute("src")==="small.jpg",'src="small.jpg"'],[(i?.getAttribute("alt")||"").trim().length>0,"فيه alt"]]
    }},
  {id:"c11",tp:"figmeter",t:"figure و figcaption",task:"حط صورة <code>lighthouse.jpg</code> داخل <code>figure</code>، وتحتها تعليق في <code>figcaption</code>.",
    start:"",
    sol:'<figure>\n<img src="lighthouse.jpg" alt="Lighthouse on the coast" width="300" height="200">\n<figcaption>Island Lighthouse, Built in 1870</figcaption>\n</figure>',
    check:(c,d)=>[[!!d.querySelector("figure img"),"img داخل figure"],[nonEmpty(d.querySelector("figure figcaption")),"figcaption داخل figure وفيه نص"],[(d.querySelector("figure img")?.getAttribute("alt")||"").trim().length>0,"الصورة فيها alt"]]},
  {id:"c12",tp:"figmeter",t:"meter و progress",task:"سوّ <code>meter</code> قيمته 7 من 0 إلى 10، و<code>progress</code> قيمته 40 من 100.",
    start:"",
    sol:'<p>Rating: <meter value="7" min="0" max="10">7/10</meter></p>\n<p>Download: <progress value="40" max="100">40%</progress></p>',
    check:(c,d)=>{
      const m=d.querySelector("meter"),p=d.querySelector("progress");return[[m?.getAttribute("value")==="7",'meter value="7"'],[m?.getAttribute("min")==="0",'meter min="0"'],[m?.getAttribute("max")==="10",'meter max="10"'],[p?.getAttribute("value")==="40",'progress value="40"'],[p?.getAttribute("max")==="100",'progress max="100"'],[!p?.hasAttribute("min"),"progress بدون min"]]
    }},
  {id:"c13",tp:"imap",t:"خريطة صورة (image map)",task:"صورة <code>boat.jpg</code> مربوطة بـ <code>map</code> اسمها boat، فيها منطقة مستطيلة من (24,188) إلى (339,283) تودي لـ http://www.fishingdude.com مع alt.",
    start:"",
    sol:'<map name="boat" id="boat">\n<area href="http://www.fishingdude.com" shape="rect" coords="24,188,339,283" alt="Fishing Dude">\n</map>\n<img src="boat.jpg" usemap="#boat" alt="Fishing boat" width="416" height="350">',
    check:(c,d)=>{
      const a=d.querySelector('map[name="boat"] area');return[[d.querySelector("img")?.getAttribute("usemap")==="#boat",'img فيه usemap="#boat"'],[!!d.querySelector('map[name="boat"]'),'map name="boat"'],[a?.getAttribute("shape")==="rect",'shape="rect"'],[(a?.getAttribute("coords")||"").replace(/\s/g,"")==="24,188,339,283","coords بالترتيب: أعلى يسار ثم أسفل يمين"],[/fishingdude\.com/.test(a?.getAttribute("href")||""),"href للموقع"],[(a?.getAttribute("alt")||"").trim().length>0,"area فيها alt"]]
    }},
  {id:"c14",tp:"imap",t:"أيقونة الموقع (favicon)",task:"أضف favicon للصفحة داخل <code>head</code> باستخدام <code>link</code> بالـ rel والـ href والـ type الصحيحة.",
    start:'<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>Favicon</title>\n<meta charset="utf-8">\n\n</head>\n<body>\n<p>Look at the tab!</p>\n</body>\n</html>',
    sol:'<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>Favicon</title>\n<meta charset="utf-8">\n<link rel="icon" href="favicon.ico" type="image/x-icon">\n</head>\n<body>\n<p>Look at the tab!</p>\n</body>\n</html>',
    check:(c,d)=>{
      const l=d.head.querySelector('link[rel="icon"]');const hi=c.toLowerCase().indexOf("<link"),bi=c.toLowerCase().indexOf("<body");return[[!!l,'link rel="icon"'],[l?.getAttribute("href")==="favicon.ico",'href="favicon.ico"'],[l?.getAttribute("type")==="image/x-icon",'type="image/x-icon"'],[hi>-1&&(bi===-1||hi<bi),"link داخل head قبل body"]]
    }},
  {id:"c15",tp:"phrase",t:"صلّح التداخل",task:"الكود هذا تداخله غلط. رتّبه بحيث آخر وسم ينفتح هو أول وسم ينقفل.",
    start:"<p><i>Call for a free quote: <strong>888.555.5555</i></strong></p>",
    sol:"<p><i>Call for a free quote: <strong>888.555.5555</strong></i></p>",
    check:(c,d)=>[[/<p>\s*<i>[\s\S]*<strong>[\s\S]*<\/strong>\s*<\/i>\s*<\/p>/i.test(c),"الترتيب: </strong> ثم </i> ثم </p>"],[!/<\/i>\s*<\/strong>/i.test(c),"ما فيه </i></strong>"]]}
  ];
  const CHT=Object.fromEntries(CHAL.map(x=>[x.id,x]));
  const chalOfTopics=ids=>CHAL.filter(x=>ids.includes(x.tp));
  const cssOf=(c,d)=>[...d.querySelectorAll("style")].map(s=>s.textContent).join("\n");
  const rule=(css,sel,prop,val)=>{
    const re=new RegExp(sel.replace(/[.#*+?^${}()|[\]\\]/g,"\\$&").replace(/ /g,"\\s+")+"\\s*\\{([^}]*)\\}","i");const m=css.match(re);if(!m)return false;
    if(!prop)return true;
    const p=m[1].match(new RegExp("(^|;|\\s)"+prop+"\\s*:\\s*([^;]+)","i"));return !!p&&(val==null||val.test(p[2].trim()))
  };
  const CHAL2=[
  {id:"t1",tp:"tables",t:"جدول بعنوان وخلايا عناوين",task:"سوّ جدول له <code>border=\"1\"</code> وعنوان <code>caption</code> «Bird Sightings»، وصف أول فيه <code>th</code> للعمودين Name وDate، وصفين بيانات بـ <code>td</code>.",
    start:'<table border="1">\n\n</table>',
    sol:'<table border="1">\n<caption>Bird Sightings</caption>\n<tr><th>Name</th><th>Date</th></tr>\n<tr><td>Bobolink</td><td>5/25/10</td></tr>\n<tr><td>Upland Sandpiper</td><td>6/03/10</td></tr>\n</table>',
    check:(c,d)=>{
      const t=d.querySelector("table");return[[t?.getAttribute("border")==="1",'border="1"'],[(t?.querySelector("caption")?.textContent||"").trim().toLowerCase()==="bird sightings","caption فيه Bird Sightings"],[(t?.querySelectorAll("th").length||0)>=2,"th عدد 2"],[(t?.querySelectorAll("tr").length||0)>=3,"3 صفوف tr أو أكثر"],[(t?.querySelectorAll("td").length||0)>=4,"td عدد 4 أو أكثر"]]
    }},
  {id:"t2",tp:"tables",t:"colspan و rowspan",task:"سوّ جدول فيه خلية <b>Birthday List</b> تمتد على عمودين، وتحتها صفين (James 11/08) و(Karen 4/17). وبعده جدول ثاني فيه خلية تمتد على صفين.",
    start:'<table border="1">\n\n</table>',
    sol:'<table border="1">\n<tr><td colspan="2">Birthday List</td></tr>\n<tr><td>James</td><td>11/08</td></tr>\n<tr><td>Karen</td><td>4/17</td></tr>\n</table>\n<br>\n<table border="1">\n<tr><td rowspan="2">This spans two rows</td><td>Row 1 Column 2</td></tr>\n<tr><td>Row 2 Column 2</td></tr>\n</table>',
    check:(c,d)=>[[[...d.querySelectorAll("[colspan]")].some(x=>x.getAttribute("colspan")==="2"&&/birthday list/i.test(x.textContent)),'Birthday List فيها colspan="2"'],[/james/i.test(d.body.textContent)&&/karen/i.test(d.body.textContent),"صفوف James وKaren"],[!!d.querySelector('[rowspan="2"]'),'خلية فيها rowspan="2"'],[d.querySelectorAll("table").length>=2,"جدولين"]]},
  {id:"t3",tp:"tacc",t:"thead و tbody و tfoot",task:"سوّ جدول Time Sheet: عنوان caption، و<code>thead</code> فيه th بـ id (day وhours)، و<code>tbody</code> فيه يومين كل td له <code>headers</code>، و<code>tfoot</code> فيه المجموع Total.",
    start:'<table border="1">\n<caption>Time Sheet</caption>\n\n</table>',
    sol:'<table border="1">\n<caption>Time Sheet</caption>\n<thead>\n<tr><th id="day">Day</th><th id="hours">Hours</th></tr>\n</thead>\n<tbody>\n<tr><td headers="day">Monday</td><td headers="hours">4</td></tr>\n<tr><td headers="day">Tuesday</td><td headers="hours">3</td></tr>\n</tbody>\n<tfoot>\n<tr><td headers="day">Total</td><td headers="hours">7</td></tr>\n</tfoot>\n</table>',
    check:(c,d)=>{
      const ids=[...d.querySelectorAll("thead th[id]")].map(x=>x.id);const tds=[...d.querySelectorAll("tbody td")];return[[!!d.querySelector("table caption"),"فيه caption"],[ids.length>=2,"th داخل thead لها id"],[tds.length>=4,"tbody فيه صفين"],[tds.length>0&&tds.every(x=>ids.includes(x.getAttribute("headers"))),"كل td في tbody لها headers يطابق id"],[/total/i.test(d.querySelector("tfoot")?.textContent||""),"tfoot فيه Total"]]
    }},
  {id:"f1",tp:"forms",t:"فورم تواصل",task:"سوّ <code>form</code> يرسل بـ <b>post</b> إلى <code>process.php</code>، فيه label مربوط بمربع نص للاسم، وlabel مربوط بمربع email، وزر submit وزر reset.",
    start:'<form>\n\n</form>',
    sol:'<form method="post" action="process.php">\n<label for="name">Name:</label>\n<input type="text" name="name" id="name"><br>\n<label for="email">Email:</label>\n<input type="email" name="email" id="email" required><br>\n<input type="submit" value="Send">\n<input type="reset" value="Clear">\n</form>',
    check:(c,d)=>{
      const f=d.querySelector("form");const labs=[...d.querySelectorAll("label[for]")];const linked=labs.filter(l=>d.getElementById(l.getAttribute("for")));return[[(f?.getAttribute("method")||"").toLowerCase()==="post",'method="post"'],[f?.getAttribute("action")==="process.php",'action="process.php"'],[!!d.querySelector('input[type="text"]'),"input نوعه text"],[!!d.querySelector('input[type="email"]'),"input نوعه email"],[linked.length>=2,"labelين مربوطة بـ for = id"],[!!d.querySelector('input[type="submit"]')&&!!d.querySelector('input[type="reset"]'),"زر submit وزر reset"]]
    }},
  {id:"f2",tp:"inputs",t:"radio و checkbox",task:"سوّ 3 أزرار radio للمقاس (Small, Medium, Large) بحيث تقدر تختار واحد بس، وMedium مختار افتراضياً. وبعدها 3 checkbox للهوايات.",
    start:'<p>Size:</p>\n\n<p>Hobbies:</p>\n',
    sol:'<p>Size:</p>\n<input type="radio" name="size" id="s" value="small"><label for="s">Small</label>\n<input type="radio" name="size" id="m" value="medium" checked><label for="m">Medium</label>\n<input type="radio" name="size" id="l" value="large"><label for="l">Large</label>\n<p>Hobbies:</p>\n<input type="checkbox" name="hobby" value="reading"> Reading\n<input type="checkbox" name="hobby" value="sports"> Sports\n<input type="checkbox" name="hobby" value="music"> Music',
    check:(c,d)=>{
      const r=[...d.querySelectorAll('input[type="radio"]')];const names=new Set(r.map(x=>x.name));const vals=new Set(r.map(x=>x.value));return[[r.length>=3,"3 أزرار radio"],[r.length>0&&names.size===1&&[...names][0]!=="","كلها نفس الـ name"],[vals.size===r.length&&r.length>0,"كل واحد value مختلف"],[r.filter(x=>x.hasAttribute("checked")).length===1,"واحد بس فيه checked"],[d.querySelectorAll('input[type="checkbox"]').length>=3,"3 checkbox"]]
    }},
  {id:"f3",tp:"h5in",t:"مدخلات HTML5",task:"أضف: slider من 1 إلى 100 (<code>range</code>)، وspinner (<code>number</code>)، وتقويم (<code>date</code>)، ومنتقي لون (<code>color</code>)، ورقم جوال (<code>tel</code>) فيه placeholder. كل واحد له label مربوط.",
    start:'',
    sol:'<label for="myChoice">Choose 1-100:</label>\n<input type="range" name="myChoice" id="myChoice" min="1" max="100"><br>\n<label for="qty">Quantity:</label>\n<input type="number" name="qty" id="qty"><br>\n<label for="when">Date:</label>\n<input type="date" name="when" id="when"><br>\n<label for="myColor">Color:</label>\n<input type="color" name="myColor" id="myColor"><br>\n<label for="phone">Phone:</label>\n<input type="tel" name="phone" id="phone" placeholder="05xxxxxxxx">',
    check:(c,d)=>{
      const g=t=>d.querySelector(`input[type="${t}"]`);const rg=g("range");const all=["range","number","date","color","tel"].map(g).filter(Boolean);return[[rg?.getAttribute("min")==="1"&&rg?.getAttribute("max")==="100","range من 1 إلى 100"],[!!g("number"),"number"],[!!g("date"),"date"],[!!g("color"),"color"],[!!g("tel")?.getAttribute("placeholder"),"tel فيه placeholder"],[all.length===5&&all.every(x=>x.id&&d.querySelector(`label[for="${x.id}"]`)),"كل عنصر له label مربوط"]]
    }},
  {id:"f4",tp:"select",t:"select و textarea",task:"سوّ قائمة منسدلة للدولة فيها 4 خيارات وSaudi Arabia مختار افتراضياً، وتحتها <code>textarea</code> للرسالة بـ 5 صفوف و40 عمود.",
    start:'<label for="country">Choose your country:</label>\n<select id="country" name="country">\n\n</select>',
    sol:'<label for="country">Choose your country:</label>\n<select id="country" name="country">\n<option value="saudi" selected>Saudi Arabia</option>\n<option value="uae">United Arab Emirates</option>\n<option value="qatar">Qatar</option>\n<option value="kuwait">Kuwait</option>\n</select><br>\n<textarea name="message" id="message" rows="5" cols="40"></textarea>',
    check:(c,d)=>{
      const o=[...d.querySelectorAll("select option")];const t=d.querySelector("textarea");return[[o.length>=4,"4 خيارات option"],[o.some(x=>x.hasAttribute("selected")&&/saudi/i.test(x.textContent)),"Saudi Arabia فيها selected"],[o.length>0&&o.every(x=>x.hasAttribute("value")),"كل option له value"],[t?.getAttribute("rows")==="5"&&t?.getAttribute("cols")==="40",'textarea rows="5" cols="40"']]
    }},
  {id:"f5",tp:"select",t:"datalist",task:"سوّ مربع نص للون المفضل مربوط بـ <code>datalist</code> اسمه colors فيه 3 اقتراحات أو أكثر (المستخدم يقدر يكتب أو يختار).",
    start:'<label for="color">Favorite Color:</label>\n',
    sol:'<label for="color">Favorite Color:</label>\n<input type="text" name="color" id="color" list="colors">\n<datalist id="colors">\n<option value="red" label="Red">\n<option value="green" label="Green">\n<option value="blue" label="Blue">\n</datalist>',
    check:(c,d)=>{
      const i=d.querySelector("input[list]");const dl=d.getElementById(i?.getAttribute("list")||"_");return[[!!i,"input فيه list"],[dl?.tagName==="DATALIST","list يطابق id الـ datalist"],[(dl?.querySelectorAll("option").length||0)>=3,"3 option داخل datalist"]]
    }},
  {id:"f6",tp:"fieldset",t:"fieldset و legend",task:"جمّع حقلين (Name وEmail) داخل <code>fieldset</code> عنوانه <code>legend</code> «Customer Information».",
    start:'',
    sol:'<fieldset>\n<legend>Customer Information</legend>\n<label>Name: <input type="text" name="Name" id="Name"></label><br><br>\n<label>Email: <input type="text" name="Email" id="Email"></label>\n</fieldset>',
    check:(c,d)=>{
      const f=d.querySelector("fieldset");return[[!!f,"فيه fieldset"],[/customer information/i.test(f?.querySelector("legend")?.textContent||""),"legend داخل fieldset فيه Customer Information"],[(f?.querySelectorAll("input").length||0)>=2,"حقلين داخل fieldset"]]
    }},
  {id:"s1",tp:"csstypes",t:"Inline CSS",task:"خلّ عنوان <code>h1</code> أحمر <code>#ff0000</code> باستخدام inline style، وفقرة لونها أبيض وخلفيتها orchid (خاصيتين في نفس الـ style).",
    start:'<h1>This is displayed as a red heading</h1>\n<p>White on orchid</p>',
    sol:'<h1 style="color:#ff0000">This is displayed as a red heading</h1>\n<p style="color:white; background-color:orchid">White on orchid</p>',
    check:(c,d)=>{
      const h=(d.querySelector("h1")?.getAttribute("style")||"").toLowerCase().replace(/\s/g,"");const p=(d.querySelector("p")?.getAttribute("style")||"").toLowerCase().replace(/\s/g,"");return[[/(^|;)color:(#ff0000|#f00|red)/.test(h),"h1 فيه style لونه أحمر"],[/(^|;)color:(white|#fff|#ffffff)/.test(p),"p لون النص أبيض"],[/background-color:orchid/.test(p),"p خلفيته orchid"],[!d.querySelector("style"),"بدون style element (inline بس)"]]
    }},
  {id:"s2",tp:"csstext",t:"Embedded CSS للنصوص",task:"داخل <code>&lt;style&gt;</code>: body خطه Arial مع عائلة sans-serif احتياط، وh1 في الوسط وحروفه كبيرة (uppercase)، والفقرة p مسافة أسطرها 200% وأول سطر مزاح 5em، والروابط a بدون خط تحت.",
    start:'<style>\n\n</style>\n<h1>Trillium Media Design</h1>\n<p>We bring your company\'s web presence to the next level. Our expert designers are creative and eager to work with you.</p>\n<a href="contact.html">Contact</a>',
    sol:'<style>\nbody { font-family: Arial, Verdana, sans-serif; }\nh1 { text-align: center; text-transform: uppercase; }\np { line-height: 200%; text-indent: 5em; }\na { text-decoration: none; }\n</style>\n<h1>Trillium Media Design</h1>\n<p>We bring your company\'s web presence to the next level. Our expert designers are creative and eager to work with you.</p>\n<a href="contact.html">Contact</a>',
    check:(c,d)=>{
      const s=cssOf(c,d);return[[rule(s,"body","font-family",/arial.*sans-serif/i),"body: font-family فيه Arial وآخره sans-serif"],[rule(s,"h1","text-align",/^center$/i),"h1: text-align: center"],[rule(s,"h1","text-transform",/^uppercase$/i),"h1: text-transform: uppercase"],[rule(s,"p","line-height",/^200%$/),"p: line-height: 200%"],[rule(s,"p","text-indent",/^5em$/i),"p: text-indent: 5em"],[rule(s,"a","text-decoration",/^none$/i),"a: text-decoration: none"]]
    }},
  {id:"s3",tp:"color",t:"الألوان و text-shadow",task:"في style: body خلفيته <code>#0000FF</code> ونصه أبيض <code>#FFFFFF</code>، وh1 له ظل رمادي: إزاحة أفقية 3px وعمودية 2px وتمويه 5px ولون <code>#666</code>.",
    start:'<style>\n\n</style>\n<h1>Shadow Heading</h1>\n<p>This web page uses colors.</p>',
    sol:'<style>\nbody { background-color: #0000FF; color: #FFFFFF; }\nh1 { text-shadow: 3px 2px 5px #666; }\n</style>\n<h1>Shadow Heading</h1>\n<p>This web page uses colors.</p>',
    check:(c,d)=>{
      const s=cssOf(c,d);return[[rule(s,"body","background-color",/^(#0000ff|#00f|blue)$/i),"body: background-color أزرق"],[rule(s,"body","color",/^(#ffffff|#fff|white)$/i),"body: color أبيض"],[rule(s,"h1","text-shadow",/^3px\s+2px\s+5px\s+#666(666)?$/i),"h1: text-shadow: 3px 2px 5px #666 بالترتيب"]]
    }},
  {id:"s4",tp:"selectors",t:"class و id و descendant و span",task:"سوّ: class اسمه <code>feature</code> لونه <code>#C70000</code> وطبّقه على عنصرين li، وid اسمه <code>new</code> أحمر وحجمه 2em ومائل وطبّقه على فقرة، وdescendant يخلي p داخل div لونها أزرق، و<code>span</code> داخل فقرة.",
    start:'<style>\n\n</style>\n<ul>\n<li>Usability Studies</li>\n<li>Search Engine Optimization</li>\n</ul>\n<p>This text is red, large, and in italics</p>\n<div><p>I am inside a div.</p></div>',
    sol:'<style>\n.feature { color: #C70000; }\n#new { color: #FF0000; font-size: 2em; font-style: italic; }\ndiv p { color: blue; }\n</style>\n<ul>\n<li class="feature">Usability Studies</li>\n<li class="feature">Search Engine Optimization</li>\n</ul>\n<p id="new">This text is red, large, and in italics</p>\n<div><p>I am inside a div. <span>This part is a span.</span></p></div>',
    check:(c,d)=>{
      const s=cssOf(c,d);return[[rule(s,".feature","color",/^#c70000$/i),".feature { color: #C70000 }"],[d.querySelectorAll('li.feature').length>=2,'عنصرين li فيهم class="feature"'],[rule(s,"#new","font-size",/^2em$/i)&&rule(s,"#new","font-style",/^italic$/i)&&rule(s,"#new","color",/^(#ff0000|#f00|red)$/i),"#new: أحمر و2em ومائل"],[!!d.querySelector('p#new'),'p فيها id="new"'],[rule(s,"div p","color",/^(blue|#0000ff|#00f)$/i),"div p { color: blue }"],[!!d.querySelector("p span"),"span داخل p"]]
    }},
  {id:"s5",tp:"external",t:"ربط ملف CSS خارجي + توسيط",task:"اكتب صفحة كاملة تربط ملف <code>color.css</code> الخارجي في الـ head، وفي نفس الصفحة اكتب embedded style يوسّط <code>#container</code> بعرض 80%.",
    start:'<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>External Styles</title>\n<meta charset="utf-8">\n\n</head>\n<body>\n<div id="container"><p>This web page uses an external style sheet.</p></div>\n</body>\n</html>',
    sol:'<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>External Styles</title>\n<meta charset="utf-8">\n<link rel="stylesheet" href="color.css">\n<style>\n#container { margin-left: auto; margin-right: auto; width: 80%; }\n</style>\n</head>\n<body>\n<div id="container"><p>This web page uses an external style sheet.</p></div>\n</body>\n</html>',
    check:(c,d)=>{
      const l=d.head.querySelector('link[rel="stylesheet"]');const s=cssOf(c,d);const li=c.toLowerCase().indexOf("<link"),bi=c.toLowerCase().indexOf("<body");return[[!!l,'link rel="stylesheet"'],[l?.getAttribute("href")==="color.css",'href="color.css"'],[li>-1&&li<bi,"link داخل head"],[rule(s,"#container","margin-left",/^auto$/i)&&rule(s,"#container","margin-right",/^auto$/i),"margin-left و margin-right: auto"],[rule(s,"#container","width",/^80%$/),"width: 80%"]]
    }}
  ];
  CHAL.push(...CHAL2);
  {
    const ORDT=TOPICS.map(t=>t.id);CHAL.sort((a,b)=>ORDT.indexOf(a.tp)-ORDT.indexOf(b.tp));
  }
  CHAL.forEach(x=>CHT[x.id]=x);
  
  let labCur=null, labCode={};
  function renderLab(){
    if(!labCur)labCur=(CHAL.find(x=>!S.lab[x.id])||CHAL[0]).id;
    const ch=labCur==="free"?null:CHT[labCur];
    const doneN=CHAL.filter(x=>S.lab[x.id]).length;
    const code=labCode[labCur]!=null?labCode[labCur]:(ch?ch.start:'<h1>Hello</h1>\n<p>جرّب أي كود هنا</p>');
    $("#labArea").innerHTML=`
   <div class="card"><div class="arl" style="margin:0 0 8px">التحديات (${ar(doneN)}/${ar(CHAL.length)}):</div>
    <div class="chips" style="margin:0">${CHAL.map((x,k)=>`<button class="pill${S.lab[x.id]?" okp":""}" data-c="${x.id}" aria-pressed="${x.id===labCur}">${S.lab[x.id]?"✓ ":""}${ar(k+1)}. ${x.t}</button>`).join("")}<button class="pill" data-c="free" aria-pressed="${labCur==="free"}">ملعب حر</button></div></div>
   <div class="card">
    ${ch?`<h3 style="margin:0 0 6px">${ch.t} <span class="tar">· <span class="ttl">${TOP[ch.tp].t}</span></span></h3><p style="margin:0 0 10px">${ch.task}</p>`:`<h3 style="margin:0 0 6px">ملعب حر</h3><p style="margin:0 0 10px">اكتب أي HTML وشوف النتيجة.</p>`}
    <div class="editor">
      <div class="pane"><div class="pane-h">الكود</div><textarea id="codeIn" dir="ltr" spellcheck="false" autocapitalize="off" autocomplete="off">${esc(code)}</textarea></div>
      <div class="pane"><div class="pane-h">المتصفح</div><iframe id="prev" sandbox="" title="معاينة"></iframe></div>
    </div>
    <p class="arl" style="font-size:.82rem">الصور ما تظهر هنا لأن ملفاتها مو موجودة، فيطلع مكانها نص الـ alt. وهذي بالضبط فايدة alt.</p>
    ${ch?`<div class="row" style="justify-content:flex-start"><button class="btn" id="chkC">تحقّق</button><button class="btn ghost" id="solC">اكشف الحل</button><button class="btn ghost" id="rstC">ابدأ من جديد</button></div><div id="chkOut"></div>`:""}
   </div>`;
    $$("#labArea [data-c]").forEach(b=>b.onclick=()=>{
      labCur=b.dataset.c;
      renderLab()
    });
    const ta=$("#codeIn"),pv=$("#prev");
    const upd=()=>{
      labCode[labCur]=ta.value;
      pv.srcdoc=ta.value
    };
    ta.oninput=upd;
    upd();
    ta.addEventListener("keydown",e=>{
      if(e.key==="Tab"){
        e.preventDefault();
        const s=ta.selectionStart;ta.setRangeText("  ",s,ta.selectionEnd,"end");
        upd()
      }
    });
    if(!ch)return;
    $("#chkC").onclick=()=>{
      const c=ta.value,res=ch.check(c,P(c)),ok=res.every(r=>r[0]);
      $("#chkOut").innerHTML=`<ul class="checks">${res.map(r=>`<li class="${r[0]?"y":"n"}">${r[0]?"✓":"✗"} ${esc(r[1])}</li>`).join("")}</ul>${ok?`<p class="arl"><b>تمام!</b> التحدي محلول.</p>`:""}`;
      if(ok){
        const was=S.lab[ch.id];S.lab[ch.id]=true;
        save();
        if(!was){
          confetti(70);
          beep("soft");
          toast("تحدي محلول")
        }
      }
      
    };
    $("#solC").onclick=()=>{
      $("#chkOut").innerHTML=`<p class="arl">الحل النموذجي (جرّبه بنفسك بعدين بدون ما تشوف):</p><pre class="sol" dir="ltr">${esc(ch.sol)}</pre><button class="btn ghost" id="useSol">حطه في المحرر</button>`;
      $("#useSol").onclick=()=>{
        ta.value=ch.sol;
        upd()
      }
    };
    $("#rstC").onclick=()=>{
      ta.value=ch.start;
      upd();
      $("#chkOut").innerHTML=""
    };
  }

  return {FIGS,TOPICS,Q,TOP,EX,HOT_POINTS,CH_NAMES,CHS,chl,GEN,genFor,CHAL,chalOfTopics,EXTRA,EXTRA_NAMES,lab:{render:renderLab,open:id=>{
        labCur=id
      }}};
  
}
