const META={
  os:{name:"نظم التشغيل",en:"Operating Systems",sub:"Silberschatz · Chapters 1–5",
    lab:{tab:"مختبر الجدولة",sub:"Gantt + حساب",title:"مختبر جدولة المعالج",lead:"اختر خوارزمية، عدّل العمليات، وارسم الـ Gantt بنفسك. أمثلة السلايدات تنحسب «تحديات»: حلها بنفسك (متوسط WT وTAT) قبل ما تكشف."},
    hype:["Context switch\nبدون overhead!","Kernel mode\nيا وحش!","fork() مرتين\nوضبطت!","SJF optimal\nزيّك!","ولا starvation!","Round Robin\nوصار دورك!"]},
  web:{name:"تطوير الويب",en:"Web Development",sub:"HTML · CSS · Chapters 1–4",
    lab:{tab:"مختبر الكود",sub:"HTML + CSS",title:"مختبر HTML و CSS",lead:"اكتب الكود وشوف النتيجة على طول. كل تحدي له فحص تلقائي، والتطبيق العملي هو أهم شي في هالمادة."},
    hype:["<strong>يا وحش</strong>","CSS بالكامل!","Valid HTML\nيا بطل!","inline أقوى\nوأنت أقوى!","ولا tag ناقص!","W3C يصفّق!"]},
  algo:{name:"تصميم وتحليل الخوارزميات",en:"Algorithms · CS2107T",sub:"Lectures 1–5",
    lab:{tab:"مختبر التحليل",sub:"Master + loops",title:"مختبر التحليل",lead:"تتدرب على أسئلة الحل: Master Theorem خطوة خطوة، تحليل الحلقات وعدّ التنفيذ، وتمشي على Partition وQuickselect. حل بنفسك قبل ما تكشف."},
    hype:["Strassen يصفّق!","log n\nوخلصت!","O(1)\nيا وحش!!","Θ(فل مارك)!!","Master Theorem\nيحييك!","Case 2\nوضبطت!"]},
  net:{name:"شبكات الحاسب",en:"Computer Networks",sub:"Kurose & Ross · Chapters 1–3",
    lab:{tab:"مختبر الحسابات",sub:"delay · HTTP · TCP",title:"مختبر حسابات الشبكات",lead:"مسائل الحساب هي أكثر شي يجي في الاختبار: التأخير، الإنتاجية، زمن HTTP، توزيع الملفات، الـ checksum، RTT وcwnd. حل التحديات بنفسك، والحاسبات تعطيك الخطوات لأي أرقام."},
    hype:["ACK!!\nوصلت سليمة","3-way handshake\nوضبطت!","Throughput\nفل!","0% packet loss!","TCP يصفّق!","cwnd يتضاعف\nمثلك!"]},
  pl:{name:"لغات البرمجة",en:"Programming Languages · CS3713T",sub:"Sebesta · Lectures 1–3",
    lab:{tab:"مشروع المادة",sub:"المطلوب + الخطة",title:"مشروع المادة: تقرير تقييم لغة برمجة",lead:"المطلوب من ملفات المشروع باختصار وبالعربي، مع الملفات الأصلية، وخطة تمشي عليها خطوة خطوة. الخطة تساعدك ترتب شغلك، والحل والكتابة عليك."},
    hype:["Orthogonality\nيا وحش!","Strongly typed\nمثلك!","Compiled\nبدون أخطاء!","Row major\nوضبطت!","Type safe!!","Sebesta يصفّق!"]},
  sc:{name:"نظم بناء البرمجيات",en:"Engineering Software Products",sub:"Sommerville · Chapters 1–4",
    lab:{tab:"مختبر المنتج",sub:"رؤية · قصص · Sprint",title:"مختبر المنتج",lead:"طبّق اللي درسته: اكتب رؤية منتج بقالب Moore، افحص قصة مستخدم، خطط sprint على قد الـ velocity، وصنّف عناصر الـ backlog."},
    hype:["Sprint goal\nتحقق!","Velocity\nفل!","Accepted ✓","ولا feature creep!","Product Owner\nراضي!","Done done!!"]}
};
const ORDER=["net","os","algo","web","pl","sc"];
const THEMES={
  home:{pitch:"#121318",p2:"#1a1c23",p3:"#252832",deep:"#0c0d11",chalk:"#eef0f5",muted:"#a3a8b6",score:"#ffd166",red:"#ff6b6b",good:"#7ee0a1"},
  os:{rayeq:{pitch:"#1b1611",p2:"#241d16",p3:"#30271d",deep:"#120e0a",chalk:"#f3ece2",muted:"#b9aa98",score:"#f2a93b",red:"#e8775f",good:"#a3cf8a"},
    zanga:{pitch:"#231505",p2:"#2e1c08",p3:"#3d260d",deep:"#170d03",chalk:"#fbf1e4",muted:"#cdb59a",score:"#ffb638",red:"#ff5a48",good:"#74e08c"}},
  web:{rayeq:{pitch:"#0f1b1c",p2:"#142527",p3:"#1b3234",deep:"#0a1314",chalk:"#e5f1ef",muted:"#98b5b1",score:"#3ccfb5",red:"#ee7f6e",good:"#a6d98c"},
    zanga:{pitch:"#052421",p2:"#08302c",p3:"#0d403a",deep:"#021a17",chalk:"#e9fbf7",muted:"#9ccbc3",score:"#2ef0cf",red:"#ff5d55",good:"#9af27f"}},
  algo:{rayeq:{pitch:"#16142a",p2:"#1e1b37",p3:"#29254a",deep:"#0f0d1f",chalk:"#edeafb",muted:"#aca5cb",score:"#b39dff",red:"#f08a8f",good:"#9cd9a4"},
    zanga:{pitch:"#190e34",p2:"#231446",p3:"#2f1c5d",deep:"#100827",chalk:"#f4efff",muted:"#b9acdb",score:"#c9adff",red:"#ff5c7c",good:"#72f0a3"}},
  net:{rayeq:{pitch:"#0e1726",p2:"#132036",p3:"#1b2b48",deep:"#09101c",chalk:"#e7eef9",muted:"#9fb1ca",score:"#5eb3ff",red:"#f28b73",good:"#9fd78c"},
    zanga:{pitch:"#06183b",p2:"#0a2150",p3:"#102d69",deep:"#030f29",chalk:"#eef5ff",muted:"#a3bce0",score:"#4fc6ff",red:"#ff5d52",good:"#6ff09a"}},
  pl:{rayeq:{pitch:"#121a10",p2:"#182316",p3:"#212f1e",deep:"#0c120a",chalk:"#ebf3e6",muted:"#a4b79b",score:"#8bd450",red:"#ef8370",good:"#7fdcc0"},
    zanga:{pitch:"#0f2207",p2:"#152d0b",p3:"#1e3c11",deep:"#091704",chalk:"#f1fbe9",muted:"#aecb9c",score:"#a2f05a",red:"#ff5a52",good:"#62f0d0"}},
  sc:{rayeq:{pitch:"#1c1218",p2:"#26171f",p3:"#331f2a",deep:"#130c10",chalk:"#f6e9ef",muted:"#c0a3b1",score:"#f78fb3",red:"#ff8a65",good:"#9ed99a"},
    zanga:{pitch:"#2a0b1a",p2:"#370f22",p3:"#48152e",deep:"#1d0611",chalk:"#fff0f6",muted:"#d6a7bd",score:"#ff86b4",red:"#ff6a3d",good:"#7af0a0"}}
};

const SUBJECT_STATS = {
  "net": {
    "lessons": 38,
    "questions": 463
  },
  "os": {
    "lessons": 41,
    "questions": 277
  },
  "algo": {
    "lessons": 21,
    "questions": 434
  },
  "web": {
    "lessons": 36,
    "questions": 398
  },
  "pl": {
    "lessons": 20,
    "questions": 169
  },
  "sc": {
    "lessons": 29,
    "questions": 235
  }
};
export { META, ORDER, THEMES, SUBJECT_STATS };
