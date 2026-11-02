// Course content. Question order is stable: saved mistakes refer to these indices.

export const TOPICS = [
  {
    "id": "why",
    "ch": 1,
    "t": "Reasons for Studying PL Concepts",
    "ar": "ليش ندرس مفاهيم لغات البرمجة",
    "pts": [
      [
        "<b>Increased ability to express ideas</b>.",
        "تزيد قدرتك على التعبير عن الأفكار."
      ],
      [
        "<b>Improved background for choosing appropriate languages</b>.",
        "خلفية أحسن لاختيار اللغة المناسبة."
      ],
      [
        "<b>Increased ability to learn new languages</b>: the number of languages in use and the dynamic nature of the statistics imply that every developer must be prepared to learn different languages.",
        "قدرة أكبر على تعلم لغات جديدة، لأن عدد اللغات المستخدمة كبير وإحصائياتها تتغير، فلازم كل مطور يكون مستعد يتعلم لغات مختلفة."
      ],
      [
        "<b>Better understanding of significance of implementation</b>.",
        "فهم أعمق لأهمية طريقة تنفيذ اللغة."
      ],
      [
        "<b>Better use of languages that are already known</b>.",
        "استخدام أفضل للغات اللي تعرفها أصلاً."
      ],
      [
        "<b>Overall advancement of computing</b>.",
        "تطور الحوسبة بشكل عام."
      ]
    ],
    "trap": [
      "There are <b>six</b> reasons; \"writing faster code\" is not one of them.",
      "الأسباب <b>ستة</b>، و«كتابة كود أسرع» مو منها."
    ],
    "idx": 0
  },
  {
    "id": "domains",
    "ch": 1,
    "t": "Programming Domains",
    "ar": "مجالات البرمجة",
    "pts": [
      [
        "<b>Scientific applications</b>: large numbers of floating-point computations; use of arrays → <b>Fortran</b>.",
        "التطبيقات العلمية: حسابات كثيرة بالأعداد العشرية (floating-point) والمصفوفات ← <b>Fortran</b>."
      ],
      [
        "<b>Business applications</b>: produce reports, use decimal numbers and characters → <b>COBOL</b>.",
        "تطبيقات الأعمال: تقارير، أرقام عشرية (decimal) وحروف ← <b>COBOL</b>."
      ],
      [
        "<b>Artificial intelligence</b>: symbols rather than numbers manipulated; use of linked lists → <b>LISP, Scheme, Prolog and Python</b>.",
        "الذكاء الاصطناعي: تتعامل مع رموز بدل أرقام، وقوائم مترابطة ← <b>LISP وScheme وProlog وPython</b>."
      ],
      [
        "<b>Systems programming</b>: need efficiency because of continuous use → <b>C and C++</b>.",
        "برمجة الأنظمة: تحتاج كفاءة لأنها تشتغل باستمرار ← <b>C وC++</b>."
      ],
      [
        "<b>Web software</b>: eclectic collection of languages: markup (HTML), scripting (PHP), general-purpose (Java).",
        "برمجيات الويب: خليط متنوع: ترميز (HTML)، سكربت (PHP)، وعامة الأغراض (Java)."
      ]
    ],
    "trap": [
      "Business → <b>COBOL</b> (decimal); scientific → <b>Fortran</b> (floating-point). Don't swap them.",
      "الأعمال ← <b>COBOL</b> (decimal)، والعلمية ← <b>Fortran</b> (floating-point). لا تقلبها."
    ],
    "idx": 1
  },
  {
    "id": "read",
    "ch": 1,
    "t": "Evaluation Criteria: Readability",
    "ar": "معايير التقييم: سهولة القراءة",
    "pts": [
      [
        "The four main criteria: <b>Readability</b> (ease with which programs can be read and understood), <b>Writability</b> (ease of using the language to create programs), <b>Reliability</b> (conformance to specifications), <b>Cost</b> (the ultimate total cost).",
        "المعايير الأربعة: <b>القابلية للقراءة</b> (سهولة قراءة البرنامج وفهمه)، <b>القابلية للكتابة</b> (سهولة كتابة البرامج)، <b>الموثوقية</b> (البرنامج يتصرف حسب مواصفاته)، و<b>التكلفة</b> (التكلفة الكلية النهائية)."
      ],
      [
        "<b>Overall simplicity</b>: a manageable set of features and constructs; <b>minimal feature multiplicity</b> (e.g., many ways to increment a counter in Java); <b>minimal operator overloading</b> (e.g., `array1 + array2`).",
        "البساطة الكلية: عدد معقول من الميزات، و<b>قلة تعدد الطرق</b> لنفس الشي (مثل طرق زيادة العداد في Java)، و<b>قلة إعادة تعريف المعاملات</b> (operator overloading) مثل جمع مصفوفتين بـ +."
      ],
      [
        "<b>Orthogonality</b>: a relatively small set of primitive constructs can be combined in a relatively small number of ways, and <b>every possible combination is legal</b> (ALGOL 68 is the most orthogonal PL).",
        "التعامد (Orthogonality): مجموعة صغيرة من البنى الأساسية تنجمع بعدد صغير من الطرق، و<b>كل تركيبة ممكنة تكون قانونية</b>. وALGOL 68 أكثر لغة متعامدة."
      ],
      [
        "<b>Data types</b>: adequate predefined data types. Without a Boolean type you write `timeout = 1;` instead of the clearer `timeout = true;`.",
        "أنواع البيانات: لازم تكون كافية. بدون نوع Boolean تكتب timeout = 1 بدل timeout = true الأوضح."
      ],
      [
        "<b>Syntax design</b>: identifier forms (flexible composition, legality of using keywords as identifiers); special words and methods of forming compound statements; <b>form and meaning</b>: self-descriptive constructs, meaningful keywords.",
        "تصميم الصيغة (syntax): أشكال المعرّفات (هل تقدر تستخدم الكلمات المحجوزة كأسماء)، الكلمات الخاصة وطريقة بناء الجمل المركبة، و<b>الشكل والمعنى</b>: بنى تشرح نفسها وكلمات مفتاحية لها معنى."
      ]
    ],
    "trap": [
      "<b>Orthogonality</b> = few primitives, combined in few ways, <b>every combination legal</b>. Too much orthogonality can hurt (huge number of combinations).",
      "التعامد = بنى أساسية قليلة، تنجمع بطرق قليلة، و<b>كل تركيبة قانونية</b>."
    ],
    "idx": 2
  },
  {
    "id": "write",
    "ch": 1,
    "t": "Writability & Reliability",
    "ar": "القابلية للكتابة والموثوقية",
    "pts": [
      [
        "Writability — <b>Simplicity and orthogonality</b>: few constructs, a small number of primitives, a small set of rules for combining them.",
        "الكتابة: <b>البساطة والتعامد</b>: بنى قليلة، وأساسيات قليلة، وقواعد قليلة لتركيبها."
      ],
      [
        "Writability — <b>Support for abstraction</b>: the ability to define and use complex structures or operations in ways that allow details to be ignored.",
        "دعم التجريد (abstraction): تقدر تعرّف وتستخدم بنى أو عمليات معقدة بطريقة تخليك تتجاهل التفاصيل."
      ],
      [
        "Writability — <b>Expressivity</b>: convenient ways of specifying operations (e.g., `counter++` vs `counter = counter + 1;`); strength and number of operators and predefined functions.",
        "التعبيرية (expressivity): طرق مريحة لكتابة العمليات (counter++ بدل counter = counter + 1)، وقوة وعدد المعاملات والدوال الجاهزة."
      ],
      [
        "Reliability — <b>Type checking</b>: testing for type errors, preferably at <b>compile-time</b> (at run-time is expensive).",
        "الموثوقية: <b>فحص الأنواع</b>، والأفضل وقت <b>الترجمة</b> لأن وقت التشغيل مكلف."
      ],
      [
        "Reliability — <b>Exception handling</b>: intercept run-time errors and take corrective measures.",
        "معالجة الاستثناءات: تمسك أخطاء وقت التشغيل وتتصرف لتصحيحها."
      ],
      [
        "Reliability — <b>Aliasing</b>: two or more distinct referencing methods for the same memory location; considered a <b>dangerous</b> feature.",
        "الأسماء المستعارة (aliasing): طريقتين أو أكثر للوصول لنفس خانة الذاكرة، وتعتبر ميزة <b>خطيرة</b>."
      ],
      [
        "Reliability — <b>Readability and writability</b>: a language that does not support \"natural\" ways of expressing an algorithm requires \"unnatural\" approaches → reduced reliability.",
        "القراءة والكتابة تأثر على الموثوقية: اللغة اللي ما تدعم طريقة «طبيعية» للتعبير عن الخوارزمية تجبرك على طرق «غير طبيعية» فتقل الموثوقية."
      ]
    ],
    "trap": [
      "Type checking, exception handling, aliasing → <b>reliability</b>. Abstraction and expressivity → <b>writability</b>.",
      "فحص الأنواع والاستثناءات والـ aliasing ← <b>الموثوقية</b>. التجريد والتعبيرية ← <b>الكتابة</b>."
    ],
    "idx": 3
  },
  {
    "id": "cost",
    "ch": 1,
    "t": "Cost & Other Criteria",
    "ar": "التكلفة ومعايير أخرى",
    "pts": [
      [
        "Cost of <b>training programmers</b> (depends on simplicity and orthogonality).",
        "تكلفة <b>تدريب المبرمجين</b> (تعتمد على البساطة والتعامد)."
      ],
      [
        "Cost of <b>writing programs</b> (closeness to particular applications; depends on writability).",
        "تكلفة <b>كتابة البرامج</b> (قرب اللغة من التطبيق، وتعتمد على القابلية للكتابة)."
      ],
      [
        "Cost of <b>executing programs</b>: a language that requires many run-time type checks will prohibit fast code execution.",
        "تكلفة <b>التنفيذ</b>: اللغة اللي تحتاج فحوصات أنواع كثيرة وقت التشغيل تمنع التنفيذ السريع."
      ],
      [
        "<b>Reliability</b>: poor reliability leads to high costs (lost future business or lawsuits over defective software).",
        "<b>الموثوقية</b>: ضعفها يرفع التكلفة (خسارة عملاء أو قضايا بسبب برامج معيبة)."
      ],
      [
        "Cost of <b>maintaining programs</b> (corrections and modifications): <b>readability is crucial</b> here.",
        "تكلفة <b>الصيانة</b> (تصحيح وتعديل): هنا <b>القابلية للقراءة حاسمة</b>."
      ],
      [
        "<b>Portability</b>: ease of moving programs from one implementation to another; most strongly influenced by the degree of <b>standardization</b> (time-consuming: C++ 1989–1998).",
        "<b>قابلية النقل</b>: سهولة نقل البرنامج من تنفيذ لتنفيذ ثاني، وأكثر شي يأثر فيها <b>التوحيد القياسي</b> (ياخذ وقت: C++ من 1989 لـ 1998)."
      ],
      [
        "<b>Generality</b>: applicability to a wide range of applications. <b>Well-definedness</b>: completeness and precision of the language's official definition document.",
        "<b>العمومية</b>: تنفع لمجالات كثيرة. <b>وضوح التعريف</b>: اكتمال ودقة الوثيقة الرسمية للغة."
      ]
    ],
    "trap": [
      "Maintenance cost depends mostly on <b>readability</b>; portability depends mostly on <b>standardization</b>.",
      "تكلفة الصيانة تعتمد على <b>القراءة</b>، وقابلية النقل تعتمد على <b>التوحيد القياسي</b>."
    ],
    "idx": 4
  },
  {
    "id": "influence",
    "ch": 1,
    "t": "Influences on Language Design",
    "ar": "المؤثرات على تصميم اللغات",
    "pts": [
      [
        "Two factors influence language design: <b>computer architecture</b> and <b>program design methodologies</b>.",
        "عاملين يأثرون على التصميم: <b>معمارية الحاسب</b> و<b>منهجيات تصميم البرامج</b>."
      ],
      [
        "Languages are developed around the <b>von Neumann architecture</b> → called <b>imperative languages</b> (most dominant).",
        "اللغات انبنت حول معمارية <b>فون نيومان</b>، واسمها <b>اللغات الأمرية (imperative)</b> وهي الأكثر انتشاراً."
      ],
      [
        "Von Neumann: data and programs stored in memory; memory separate from CPU; instructions and data piped from memory to CPU; results moved back to memory.",
        "فون نيومان: البيانات والبرامج في الذاكرة، والذاكرة منفصلة عن المعالج، والتعليمات والبيانات تنتقل للمعالج والنتائج ترجع للذاكرة."
      ],
      [
        "Basis for imperative languages: <b>variables model memory cells</b>; <b>assignment statements model piping</b>; <b>iteration is efficient</b>.",
        "أساس اللغات الأمرية: <b>المتغيرات تمثل خانات الذاكرة</b>، و<b>الإسناد يمثل النقل</b>، و<b>التكرار فعّال</b>."
      ],
      [
        "Fetch-execute cycle: initialize the program counter; repeat forever: fetch the instruction pointed by the counter, increment the counter, decode the instruction, execute the instruction.",
        "دورة الجلب والتنفيذ: نبدأ عداد البرنامج، وللأبد: نجلب التعليمة، نزيد العداد، نفك التعليمة، وننفذها."
      ],
      [
        "<b>Von Neumann bottleneck</b>: connection speed between memory and processor determines computer speed; instructions execute faster than the connection → the primary limiting factor.",
        "<b>عنق زجاجة فون نيومان</b>: سرعة الاتصال بين الذاكرة والمعالج تحدد سرعة الجهاز، لأن التعليمات تتنفذ أسرع من الاتصال، وهو العامل الأول اللي يحد السرعة."
      ],
      [
        "Methodologies: 1950s–early 60s machine efficiency; late 60s people efficiency (readability, structured programming, top-down design, step-wise refinement); late 70s process→data-oriented (<b>data abstraction</b>); mid 80s <b>OOP</b> (data abstraction + inheritance + polymorphism).",
        "المنهجيات: الخمسينات كفاءة الآلة، أواخر الستينات كفاءة البشر (البرمجة المهيكلة والتصميم من أعلى لأسفل)، أواخر السبعينات التحول للبيانات (تجريد البيانات)، ومنتصف الثمانينات البرمجة كائنية التوجه (تجريد + وراثة + تعدد أشكال)."
      ]
    ],
    "trap": [
      "OOP = data abstraction + <b>inheritance</b> + <b>polymorphism</b> (mid 1980s). The bottleneck is the <b>memory–CPU connection</b>.",
      "OOP = تجريد + وراثة + تعدد أشكال (منتصف الثمانينات). وعنق الزجاجة هو <b>الاتصال بين الذاكرة والمعالج</b>."
    ],
    "idx": 5
  },
  {
    "id": "categories",
    "ch": 1,
    "t": "Language Categories & Trade-Offs",
    "ar": "تصنيفات اللغات والموازنات",
    "pts": [
      [
        "<b>Imperative</b>: central features are variables, assignment statements, and iteration; include OOP, scripting and visual languages — C, Java, Perl, JavaScript, Visual BASIC .NET, C++.",
        "<b>الأمرية</b>: أساسها المتغيرات والإسناد والتكرار، وتشمل الكائنية والسكربت والمرئية: C وJava وPerl وJavaScript وVB.NET وC++."
      ],
      [
        "<b>Functional</b>: main means of computation is applying functions to given parameters — LISP, Scheme, ML, F#.",
        "<b>الوظيفية</b>: الحساب الأساسي بتطبيق دوال على معاملات: LISP وScheme وML وF#."
      ],
      [
        "<b>Logic</b>: rule-based (rules specified in no particular order) — Prolog.",
        "<b>المنطقية</b>: مبنية على قواعد بدون ترتيب معين: Prolog."
      ],
      [
        "<b>Markup/programming hybrid</b>: markup languages extended to support some programming — JSTL, XSLT.",
        "<b>هجينة ترميز/برمجة</b>: لغات ترميز مضاف لها شوية برمجة: JSTL وXSLT."
      ],
      [
        "Trade-off <b>reliability vs. cost of execution</b>: Java checks all array index references → increased execution costs.",
        "موازنة <b>الموثوقية مقابل تكلفة التنفيذ</b>: Java تفحص كل وصول لعناصر المصفوفة، فيزيد وقت التنفيذ."
      ],
      [
        "Trade-off <b>readability vs. writability</b>: APL has many powerful operators/symbols → compact programs but poor readability.",
        "موازنة <b>القراءة مقابل الكتابة</b>: APL فيها معاملات ورموز قوية كثيرة، فالبرنامج قصير بس صعب القراءة."
      ],
      [
        "Trade-off <b>writability (flexibility) vs. reliability</b>: C++ pointers are powerful and flexible but unreliable.",
        "موازنة <b>الكتابة (المرونة) مقابل الموثوقية</b>: مؤشرات C++ قوية ومرنة بس غير موثوقة."
      ]
    ],
    "trap": [
      "Java array checks = reliability vs <b>cost of execution</b>; APL = readability vs writability; C++ pointers = writability vs reliability.",
      "Java ← الموثوقية مقابل تكلفة التنفيذ، APL ← القراءة مقابل الكتابة، مؤشرات C++ ← الكتابة مقابل الموثوقية."
    ],
    "idx": 6
  },
  {
    "id": "compile",
    "ch": 1,
    "t": "Implementation: Compilation",
    "ar": "طرق التنفيذ: الترجمة",
    "pts": [
      [
        "Three methods: <b>compilation</b> (translated into machine language, includes JIT; for large commercial applications), <b>pure interpretation</b> (small programs or when efficiency is not an issue), <b>hybrid</b> (small/medium systems when efficiency is not the first concern).",
        "ثلاث طرق: <b>الترجمة</b> (تتحول للغة الآلة، وتشمل JIT، للتطبيقات التجارية الكبيرة)، <b>التفسير البحت</b> (برامج صغيرة أو الكفاءة مو مهمة)، و<b>الهجين</b> (أنظمة صغيرة ومتوسطة والكفاءة مو أول اهتمام)."
      ],
      [
        "The operating system and language implementation are <b>layered</b> over the machine interface of a computer.",
        "نظام التشغيل وتنفيذ اللغة طبقات فوق واجهة الآلة."
      ],
      [
        "Compilation: translate high-level source program into machine code; <b>slow translation, fast execution</b>.",
        "الترجمة: تحويل البرنامج عالي المستوى لكود الآلة. <b>ترجمة بطيئة وتنفيذ سريع</b>."
      ],
      [
        "Phases: <b>lexical analysis</b> (characters → lexical units), <b>syntax analysis</b> (lexical units → parse trees), <b>semantics analysis</b> (generate intermediate code), <b>code generation</b> (machine code).",
        "المراحل: <b>التحليل المعجمي</b> (الحروف ← وحدات معجمية)، <b>التحليل النحوي</b> (الوحدات ← أشجار تحليل parse trees)، <b>التحليل الدلالي</b> (يولّد كود وسيط)، و<b>توليد الكود</b> (كود الآلة)."
      ],
      [
        "<b>Load module</b> (executable image): the user and system code together. <b>Linking and loading</b>: collecting system program units and linking them to a user program.",
        "<b>Load module</b> (الصورة التنفيذية): كود المستخدم وكود النظام مع بعض. <b>الربط والتحميل</b>: جمع وحدات برامج النظام وربطها ببرنامج المستخدم."
      ]
    ],
    "trap": [
      "Lexical → units; <b>syntax → parse trees</b>; semantics → intermediate code. Compilation = slow translation, <b>fast execution</b>.",
      "المعجمي ← وحدات، <b>النحوي ← parse trees</b>، الدلالي ← كود وسيط. والترجمة: بطيئة بس التنفيذ <b>سريع</b>."
    ],
    "idx": 7
  },
  {
    "id": "interp",
    "ch": 1,
    "t": "Interpretation, Hybrid, JIT & Environments",
    "ar": "التفسير والهجين وJIT وبيئات البرمجة",
    "pts": [
      [
        "<b>Pure interpretation</b>: no translation; easier implementation (run-time errors displayed immediately); <b>slower execution (10 to 100 times)</b>; often requires more space; now rare for traditional languages but a comeback with Web scripting (JavaScript, PHP).",
        "<b>التفسير البحت</b>: بدون ترجمة، أسهل (الأخطاء تطلع فوراً)، <b>أبطأ 10 لـ 100 مرة</b>، ويحتاج مساحة أكثر. نادر في اللغات التقليدية بس رجع مع سكربتات الويب (JavaScript وPHP)."
      ],
      [
        "<b>Hybrid</b>: a compromise; program translated to an <b>intermediate language</b> that allows easy interpretation; faster than pure interpretation. Perl is partially compiled to detect errors; initial Java was hybrid — <b>byte code</b> gives portability to any machine with a byte code interpreter and run-time system (<b>JVM</b>).",
        "<b>الهجين</b>: حل وسط، البرنامج يتحول لـ<b>لغة وسيطة</b> سهلة التفسير، وأسرع من التفسير البحت. Perl تترجم جزئياً لكشف الأخطاء، وJava الأولى كانت هجينة: الـ <b>byte code</b> يعطي قابلية نقل لأي جهاز فيه مفسر ونظام تشغيل وقت التنفيذ (<b>JVM</b>)."
      ],
      [
        "<b>Just-in-Time (JIT)</b>: translate to intermediate language, then compile subprograms into machine code <b>when they are called</b>; machine code kept for subsequent calls; widely used for Java; .NET languages use JIT; JIT systems are <b>delayed compilers</b>.",
        "<b>JIT</b>: يترجم للغة وسيطة، وبعدين يترجم الدوال لكود الآلة <b>لما تنستدعى</b>، ويحفظه للمرات الجاية. مستخدم بكثرة في Java و.NET، وهو <b>مترجم متأخر</b>."
      ],
      [
        "<b>Preprocessor</b>: processes a program immediately before compilation to expand embedded macros; e.g., the C preprocessor expands `#include`, `#define` (`#include \"myLib.h\"`).",
        "<b>المعالج المسبق</b>: يعالج البرنامج قبل الترجمة مباشرة ويوسع الماكروز، مثل معالج C اللي يوسع #include و#define."
      ],
      [
        "<b>Programming environments</b>: a collection of tools used in software development — UNIX (often via a GUI such as CDE, KDE, GNOME), Microsoft Visual Studio .NET (large visual environment for any .NET language), NetBeans (like VS .NET but for Java).",
        "<b>بيئات البرمجة</b>: مجموعة أدوات للتطوير: UNIX (غالباً بواجهة رسومية مثل KDE وGNOME)، وVisual Studio .NET (بيئة مرئية كبيرة لأي لغة .NET)، وNetBeans (مثلها بس لـ Java)."
      ]
    ],
    "trap": [
      "JIT = <b>delayed compiler</b> (compiles on first call). Pure interpretation is <b>10–100×</b> slower.",
      "JIT = <b>مترجم متأخر</b> يترجم أول ما تنستدعى الدالة، والتفسير البحت أبطأ <b>10–100</b> مرة."
    ],
    "idx": 8
  },
  {
    "id": "dtintro",
    "ch": 2,
    "t": "Data Types: Introduction",
    "ar": "أنواع البيانات: مقدمة",
    "pts": [
      [
        "A <b>data type</b> defines a collection of data objects and a set of predefined operations on those objects.",
        "<b>نوع البيانات</b> يعرّف مجموعة كائنات بيانات ومجموعة عمليات جاهزة عليها."
      ],
      [
        "A <b>descriptor</b> is the collection of the attributes of a variable.",
        "<b>الواصف (descriptor)</b> هو مجموعة خصائص المتغير."
      ],
      [
        "An <b>object</b> represents an instance of a user-defined (abstract data) type.",
        "<b>الكائن</b> نسخة من نوع معرّف من المستخدم (نوع بيانات مجرد)."
      ],
      [
        "One design issue for all data types: <b>what operations are defined and how are they specified?</b>",
        "سؤال تصميم لكل الأنواع: <b>وش العمليات المعرّفة وكيف تنحدد؟</b>"
      ]
    ],
    "trap": [
      "Descriptor = attributes of a <b>variable</b>; object = instance of a <b>user-defined</b> type.",
      "الواصف = خصائص <b>المتغير</b>، والكائن = نسخة من نوع <b>معرّف من المستخدم</b>."
    ],
    "idx": 9
  },
  {
    "id": "prim",
    "ch": 2,
    "t": "Primitive Types: Integer, Floating Point, Complex, Decimal",
    "ar": "الأنواع الأولية: الصحيح والعشري والمركب والـ Decimal",
    "pts": [
      [
        "<b>Primitive data types</b>: those not defined in terms of other data types; some are merely reflections of the hardware, others need only a little non-hardware support.",
        "<b>الأنواع الأولية</b>: ما تتعرّف بأنواع ثانية، بعضها انعكاس للهاردوير مباشرة وبعضها يحتاج دعم بسيط."
      ],
      [
        "<b>Integer</b>: almost always an exact reflection of the hardware (trivial mapping); up to eight integer types; Java signed sizes: `byte`, `short`, `int`, `long`.",
        "<b>الصحيح</b>: انعكاس دقيق للهاردوير، وممكن 8 أنواع، وفي Java: byte وshort وint وlong."
      ],
      [
        "<b>Floating point</b>: model real numbers, but only as <b>approximations</b>; scientific languages support at least two types (`float`, `double`); IEEE Floating-Point Standard 754 (single and double precision).",
        "<b>العشري (floating point)</b>: يمثل الأعداد الحقيقية بس <b>تقريبياً</b>، واللغات العلمية فيها نوعين على الأقل (float وdouble)، ومعيار IEEE 754 (دقة مفردة ومزدوجة)."
      ],
      [
        "<b>Complex</b>: supported by C99, Fortran, Python; each value is two floats (real and imaginary parts); Python literal `(7 + 3j)`.",
        "<b>المركب</b>: في C99 وFortran وPython، كل قيمة عددين عشريين (حقيقي وتخيلي)، مثل (7 + 3j) في Python."
      ],
      [
        "<b>Decimal</b>: for business (money); essential to COBOL; C# offers a decimal type; stores a fixed number of decimal digits in <b>BCD</b> (binary coded decimal). Advantage: <b>accuracy</b>; disadvantages: <b>limited range, wastes memory</b>.",
        "<b>Decimal</b>: للأعمال (الفلوس)، أساسي في COBOL وموجود في C#، يخزن عدد ثابت من الخانات العشرية بترميز <b>BCD</b>. ميزته <b>الدقة</b>، وعيوبه <b>مدى محدود وهدر للذاكرة</b>."
      ]
    ],
    "trap": [
      "Decimal (BCD): <b>accuracy</b> ✓, <b>limited range + wastes memory</b> ✗. Floating point is only an <b>approximation</b>.",
      "Decimal: دقيق، بس مداه محدود ويهدر ذاكرة. والعشري تقريبي بس."
    ],
    "idx": 10
  },
  {
    "id": "boolchar",
    "ch": 2,
    "t": "Boolean & Character Types",
    "ar": "المنطقي والحرفي",
    "pts": [
      [
        "<b>Boolean</b>: simplest of all; two values (true, false); could be implemented as bits, but often as <b>bytes</b>; advantage: <b>readability</b>.",
        "<b>المنطقي</b>: أبسط نوع، قيمتين (صح وخطأ)، ممكن بت بس غالباً <b>بايت</b>، وميزته <b>القابلية للقراءة</b>."
      ],
      [
        "<b>Character</b>: stored as numeric codings; most common: <b>ASCII</b>.",
        "<b>الحرفي</b>: يتخزن كأرقام، والأشهر <b>ASCII</b>."
      ],
      [
        "<b>16-bit Unicode (UCS-2)</b>: includes characters from most natural languages; originally used in Java; now supported by many languages.",
        "<b>Unicode بـ 16 بت (UCS-2)</b>: فيه حروف أغلب اللغات الطبيعية، استخدمته Java أول، والحين لغات كثيرة."
      ],
      [
        "<b>32-bit Unicode (UCS-4)</b>: supported by Fortran, starting with 2003.",
        "<b>Unicode بـ 32 بت (UCS-4)</b>: تدعمه Fortran من 2003."
      ]
    ],
    "trap": [
      "Boolean is often stored as a <b>byte</b>, not a bit. UCS-2 = <b>16</b>-bit (Java); UCS-4 = <b>32</b>-bit (Fortran 2003).",
      "المنطقي غالباً <b>بايت</b> مو بت. UCS-2 = 16 بت (Java)، وUCS-4 = 32 بت (Fortran 2003)."
    ],
    "idx": 11
  },
  {
    "id": "strings",
    "ch": 2,
    "t": "Character String Types",
    "ar": "السلاسل النصية",
    "pts": [
      [
        "Values are sequences of characters. Design issues: <b>is it a primitive type or just a special kind of array?</b> <b>Static or dynamic length?</b>",
        "القيم سلسلة حروف. أسئلة التصميم: <b>نوع أولي ولا نوع خاص من المصفوفات؟</b> و<b>طولها ثابت ولا متغير؟</b>"
      ],
      [
        "Typical operations: assignment and copying, comparison (=, >), <b>catenation</b>, substring reference (<b>slicing</b>), <b>pattern matching</b>.",
        "العمليات: الإسناد والنسخ، المقارنة، <b>الدمج (catenation)</b>، أخذ جزء (<b>slicing</b>)، و<b>مطابقة الأنماط</b>."
      ],
      [
        "<b>C and C++</b>: not primitive; char arrays + library functions. <b>SNOBOL4</b>: primitive with elaborate pattern matching. <b>Fortran, Python</b>: primitive. <b>Java, C#, Ruby, Swift</b>: primitive via the String class. <b>Perl, JavaScript, Ruby, PHP</b>: built-in pattern matching with regular expressions.",
        "C وC++: مو أولي (مصفوفة حروف + مكتبة). SNOBOL4: أولي مع مطابقة أنماط متقدمة. Fortran وPython: أولي. Java وC# وRuby وSwift: أولي عن طريق كلاس String. Perl وJavaScript وRuby وPHP: مطابقة أنماط مدمجة بالـ regular expressions."
      ],
      [
        "Length options: <b>static</b> (COBOL, Java's String class); <b>limited dynamic</b> (C, C++ — a special character marks the end instead of storing length); <b>dynamic, no maximum</b> (SNOBOL4, Perl, JavaScript).",
        "خيارات الطول: <b>ثابت</b> (COBOL وString في Java)، <b>متغير محدود</b> (C وC++، حرف خاص يحدد النهاية بدل ما نخزن الطول)، و<b>متغير بلا حد</b> (SNOBOL4 وPerl وJavaScript)."
      ],
      [
        "Evaluation: aid to writability; as a primitive with static length they are inexpensive. Implementation: static → <b>compile-time descriptor</b>; limited dynamic → may need a run-time descriptor (not in C/C++); dynamic → <b>run-time descriptor</b>, and <b>allocation/deallocation is the biggest implementation problem</b>.",
        "التقييم: تساعد الكتابة، والثابتة رخيصة. التنفيذ: الثابت ← <b>واصف وقت الترجمة</b>، المحدود ← ممكن واصف وقت التشغيل (مو في C وC++)، المتغير ← <b>واصف وقت التشغيل</b> و<b>الحجز والتحرير أكبر مشكلة</b>."
      ]
    ],
    "trap": [
      "Java's String = <b>static</b> length; C/C++ = <b>limited dynamic</b> (null-terminated); Perl/JavaScript = <b>dynamic</b>.",
      "String في Java <b>ثابت</b>، وC/C++ <b>محدود</b>، وPerl وJavaScript <b>متغير بلا حد</b>."
    ],
    "idx": 12
  },
  {
    "id": "ordinal",
    "ch": 2,
    "t": "User-Defined Ordinal Types",
    "ar": "الأنواع الترتيبية",
    "pts": [
      [
        "An <b>ordinal type</b> is one in which the range of possible values can be easily associated with the set of <b>positive integers</b>.",
        "<b>النوع الترتيبي</b>: مدى قيمه يرتبط بسهولة بمجموعة <b>الأعداد الصحيحة الموجبة</b>."
      ],
      [
        "Primitive ordinal types in Java: <b>integer, char, boolean</b>.",
        "أمثلة الترتيبية الأولية في Java: <b>integer وchar وboolean</b>."
      ]
    ],
    "trap": [
      "Floating-point types are <b>not</b> ordinal.",
      "الأعداد العشرية <b>مو</b> ترتيبية."
    ],
    "idx": 13
  },
  {
    "id": "arrays",
    "ch": 3,
    "t": "Array Types, Indexing & Subscripts",
    "ar": "المصفوفات والفهرسة",
    "pts": [
      [
        "An <b>array</b> is a <b>homogeneous</b> aggregate of data elements in which an element is identified by its <b>position</b> relative to the first element. In C, C++, Java, C# all elements must be the same type; C# and Java 5.0 provide generic arrays through their class libraries.",
        "<b>المصفوفة</b>: تجميعة <b>متجانسة</b> من العناصر، وكل عنصر يتحدد بـ<b>موقعه</b> نسبة لأول عنصر. في C وC++ وJava وC# كلها نفس النوع، وC# وJava 5.0 فيها مصفوفات generic عن طريق المكتبات."
      ],
      [
        "Design issues: legal subscript types; range checking; when subscript ranges are bound; when allocation takes place; ragged or rectangular; maximum number of subscripts; initialization; slices.",
        "أسئلة التصميم: أنواع الفهارس المسموحة، فحص المدى، متى ترتبط حدود الفهارس، متى يصير الحجز، مصفوفة متعرجة أو مستطيلة، أقصى عدد فهارس، التهيئة، والـ slices."
      ],
      [
        "<b>Indexing</b> is a mapping from indices to elements. <b>Fortran and Ada</b> use parentheses `()` (Ada: to show uniformity with function calls — both are mappings); most others use brackets `[]`.",
        "<b>الفهرسة</b> ربط من الفهارس للعناصر. Fortran وAda تستخدم أقواس عادية () (Ada عشان تبين إن المصفوفة والدالة كلهم mapping)، والباقي أقواس مربعة []."
      ],
      [
        "Subscript types: FORTRAN, C → integer only; Java → integer types only.",
        "أنواع الفهارس: FORTRAN وC أعداد صحيحة بس، وJava أنواع صحيحة بس."
      ],
      [
        "Range checking: <b>C, C++, Perl, Fortran do not</b> specify range checking; <b>Java, ML, C# do</b>.",
        "فحص المدى: <b>C وC++ وPerl وFortran ما تحدده</b>، و<b>Java وML وC# تحدده</b>."
      ]
    ],
    "trap": [
      "Ada uses <b>()</b> for arrays (like function calls). C/C++ do <b>not</b> range-check; Java/C# do.",
      "Ada تستخدم <b>()</b>. وC/C++ <b>ما</b> تفحص المدى، وJava وC# تفحص."
    ],
    "idx": 14
  },
  {
    "id": "arraycat",
    "ch": 3,
    "t": "Subscript Binding & Array Categories",
    "ar": "ربط الفهارس وأصناف المصفوفات",
    "pts": [
      [
        "<b>Static array</b>: subscript ranges statically bound; storage allocation static (before run-time). Advantage: <b>efficiency</b> (no dynamic allocation).",
        "<b>الساكنة (static)</b>: الحدود ثابتة والحجز قبل التشغيل. ميزتها <b>الكفاءة</b>."
      ],
      [
        "<b>Fixed stack-dynamic</b>: subscript ranges statically bound; allocation done at <b>declaration time</b>. Advantage: <b>space efficiency</b>.",
        "<b>الثابتة على الـ stack</b>: الحدود ثابتة والحجز <b>وقت التعريف</b>. ميزتها <b>توفير المساحة</b>."
      ],
      [
        "<b>Fixed heap-dynamic</b>: like fixed stack-dynamic, but storage binding is dynamic and fixed after allocation; done when requested and allocated from the <b>heap</b>, not the stack.",
        "<b>الثابتة على الـ heap</b>: مثل اللي قبلها بس الحجز ديناميكي وثابت بعد الحجز، ويصير وقت الطلب من الـ <b>heap</b>."
      ],
      [
        "<b>Heap-dynamic</b>: binding of subscript ranges and storage allocation is dynamic and can change any number of times. Advantage: <b>flexibility</b> (arrays grow or shrink).",
        "<b>الديناميكية على الـ heap</b>: الحدود والحجز ديناميكية وتتغير أي عدد مرات. ميزتها <b>المرونة</b> (تكبر وتصغر)."
      ],
      [
        "C/C++ with `static` modifier → static; without `static` → fixed stack-dynamic; C/C++ provide fixed heap-dynamic; C# `ArrayList` → fixed heap-dynamic (per slide); Perl, JavaScript, Python, Ruby → heap-dynamic.",
        "C/C++ مع static ← ساكنة، وبدونها ← ثابتة على الـ stack، وC/C++ توفر الثابتة على الـ heap، وArrayList في C# (حسب السلايد) ثابتة على الـ heap، وPerl وJavaScript وPython وRuby ديناميكية على الـ heap."
      ]
    ],
    "trap": [
      "Static → <b>efficiency</b>; fixed stack-dynamic → <b>space efficiency</b>; heap-dynamic → <b>flexibility</b>.",
      "الساكنة ← الكفاءة، الثابتة على الـ stack ← توفير المساحة، الديناميكية ← المرونة."
    ],
    "idx": 15
  },
  {
    "id": "arrayops",
    "ch": 3,
    "t": "Initialization, Heterogeneous, Jagged & Slices",
    "ar": "التهيئة والمتجانسة والمتعرجة والـ Slices",
    "pts": [
      [
        "Initialization at storage allocation: C, C++, Java, Swift, C# — e.g., `int list[] = {4, 5, 7, 83}`, `char name[] = \"freddie\";`, `String[] names = {\"Bob\", \"Jake\", \"Joe\"};`.",
        "التهيئة وقت الحجز في C وC++ وJava وSwift وC#، مثل int list[] = {4, 5, 7, 83}."
      ],
      [
        "Python list comprehensions: `list = [x ** 2 for x in range(12) if x % 3 == 0]` puts `[0, 9, 36, 81]` in list.",
        "Python: قائمة بالـ comprehension تحط [0, 9, 36, 81] (مربعات 0 و3 و6 و9)."
      ],
      [
        "A <b>heterogeneous array</b> is one in which the elements need not be of the same type — supported by Perl, Python, JavaScript, Ruby.",
        "<b>المصفوفة غير المتجانسة</b>: عناصرها ممكن أنواع مختلفة، في Perl وPython وJavaScript وRuby."
      ],
      [
        "Operations: <b>APL</b> provides the most powerful array processing operations (vectors, matrices, unary operators); Python array assignments are only reference changes; Python supports catenation and membership; Ruby provides catenation.",
        "العمليات: <b>APL</b> أقوى لغة بعمليات المصفوفات، وإسناد المصفوفات في Python مجرد تغيير مرجع، وPython فيها دمج وفحص عضوية، وRuby فيها دمج."
      ],
      [
        "<b>Rectangular</b>: all rows have the same number of elements and all columns the same. <b>Jagged</b>: rows with varying numbers of elements (arrays of arrays) — C, C++, Java support jagged; F# and C# support both.",
        "<b>المستطيلة</b>: كل الصفوف نفس عدد العناصر. <b>المتعرجة</b>: الصفوف تختلف (مصفوفة من مصفوفات)، في C وC++ وJava، وF# وC# تدعم الاثنين."
      ],
      [
        "A <b>slice</b> is some substructure of an array; nothing more than a <b>referencing mechanism</b>; only useful in languages with array operations. Python: `mat[0][0:2]` = first and second element of the first row; Ruby: `list.slice(2, 2)` returns the third and fourth elements.",
        "الـ <b>slice</b> جزء من المصفوفة، مجرد <b>آلية مرجعية</b>، ومفيد بس في اللغات اللي فيها عمليات مصفوفات. Python: mat[0][0:2] أول عنصرين في الصف الأول، وRuby: list.slice(2, 2) العنصر الثالث والرابع."
      ]
    ],
    "trap": [
      "C/C++/Java support <b>jagged</b> arrays; F# and C# support <b>both</b> rectangular and jagged.",
      "C وC++ وJava متعرجة، وF# وC# <b>الاثنين</b>."
    ],
    "idx": 16
  },
  {
    "id": "arrayimpl",
    "ch": 3,
    "t": "Implementation of Arrays",
    "ar": "تنفيذ المصفوفات وحساب العناوين",
    "pts": [
      [
        "An <b>access function</b> maps subscript expressions to an address in the array.",
        "<b>دالة الوصول</b> تحول الفهرس لعنوان في الذاكرة."
      ],
      [
        "Single-dimensioned: `address(list[k]) = address(list[lower_bound]) + ((k - lower_bound) * element_size)`.",
        "أحادية البعد: العنوان = عنوان أول عنصر + (k − الحد الأدنى) × حجم العنصر."
      ],
      [
        "Multi-dimensioned arrays are stored in <b>row major order</b> (by rows) — used in most languages — or <b>column major order</b> (by columns) — used in <b>Fortran</b>.",
        "متعددة الأبعاد: <b>بالصفوف (row major)</b> في أغلب اللغات، أو <b>بالأعمدة (column major)</b> في <b>Fortran</b>."
      ],
      [
        "Row major: `Location(a[i, j]) = address of a[row_lb, col_lb] + (((i - row_lb) * n) + (j - col_lb)) * element_size` (n = number of columns).",
        "بالصفوف: العنوان = عنوان أول عنصر + ((i − row_lb) × n + (j − col_lb)) × حجم العنصر، وn عدد الأعمدة."
      ],
      [
        "A <b>compile-time descriptor</b> stores the array's element type, index type, number of dimensions, index ranges and address.",
        "<b>الواصف وقت الترجمة</b> يخزن نوع العنصر ونوع الفهرس وعدد الأبعاد والحدود والعنوان."
      ]
    ],
    "trap": [
      "Row major multiplies by <b>n = number of columns</b>; Fortran is <b>column</b> major.",
      "بالصفوف نضرب في <b>عدد الأعمدة</b>، وFortran <b>بالأعمدة</b>."
    ],
    "idx": 17
  },
  {
    "id": "assoc",
    "ch": 3,
    "t": "Associative Arrays",
    "ar": "المصفوفات الترابطية",
    "pts": [
      [
        "An <b>associative array</b> is an <b>unordered</b> collection of data elements indexed by an equal number of values called <b>keys</b>; user-defined keys must be stored.",
        "<b>المصفوفة الترابطية</b>: مجموعة <b>غير مرتبة</b> من العناصر تتفهرس بقيم اسمها <b>مفاتيح</b>، ولازم نخزن المفاتيح."
      ],
      [
        "Design issues: form of references to elements; is the size static or dynamic? Built-in type in <b>Perl, Python, Ruby, Swift</b>.",
        "أسئلة التصميم: شكل الوصول للعناصر، والحجم ثابت أو متغير. موجودة أساساً في <b>Perl وPython وRuby وSwift</b>."
      ],
      [
        "Perl: names begin with `%`, literals delimited by parentheses: `%hi_temps = (\"Mon\" => 77, \"Tue\" => 79, ...);` subscripting with braces and keys: `$hi_temps{\"Wed\"} = 83;` remove with `delete $hi_temps{\"Tue\"};`.",
        "Perl: الاسم يبدأ بـ %، والقيم بين أقواس عادية، والوصول بأقواس معكوفة والمفتاح، والحذف بـ delete."
      ]
    ],
    "trap": [
      "Associative arrays are <b>unordered</b> and indexed by <b>keys</b>, not positions. In Perl the name starts with <b>%</b>.",
      "الترابطية <b>غير مرتبة</b> وتتفهرس <b>بالمفاتيح</b>. وفي Perl الاسم يبدأ بـ <b>%</b>."
    ],
    "idx": 18
  },
  {
    "id": "records",
    "ch": 3,
    "t": "Record Types",
    "ar": "السجلات (Records)",
    "pts": [
      [
        "A <b>record</b> is a possibly <b>heterogeneous</b> aggregate of data elements in which the individual elements are identified by <b>names</b>.",
        "<b>السجل</b>: تجميعة ممكن تكون <b>غير متجانسة</b>، وكل عنصر يتحدد <b>باسمه</b>."
      ],
      [
        "Design issues: syntactic form of references to fields; are <b>elliptical references</b> allowed?",
        "أسئلة التصميم: صيغة الوصول للحقول، وهل الوصول المختصر (elliptical) مسموح؟"
      ],
      [
        "COBOL uses <b>level numbers</b> to show nested records; others use recursive definition.",
        "COBOL تستخدم <b>أرقام مستويات</b> للسجلات المتداخلة، والباقي تعريف متكرر."
      ],
      [
        "References: COBOL `field_name OF record_name_1 OF ... OF record_name_n`; others use <b>dot notation</b> `record_name_1.record_name_2. ... .field_name`. <b>Fully qualified</b> references include all record names; <b>elliptical</b> references leave out record names as long as unambiguous (COBOL: `FIRST`, `FIRST OF EMP-NAME`).",
        "الوصول: COBOL بـ OF، والباقي بـ<b>النقطة</b>. الوصول <b>الكامل</b> يذكر كل أسماء السجلات، و<b>المختصر</b> يحذف بعضها بشرط ما يصير غموض (مثل FIRST في COBOL)."
      ],
      [
        "Records are used when the collection of data values is heterogeneous. <b>Access to array elements is much slower than access to record fields</b>, because subscripts are dynamic (field names are static).",
        "السجلات للبيانات غير المتجانسة. <b>الوصول لعناصر المصفوفة أبطأ بكثير من حقول السجل</b> لأن الفهارس ديناميكية وأسماء الحقول ثابتة."
      ],
      [
        "Implementation: an <b>offset address</b> relative to the beginning of the record is associated with each field.",
        "التنفيذ: كل حقل له <b>إزاحة (offset)</b> من بداية السجل."
      ]
    ],
    "trap": [
      "Record field access is <b>faster</b> than array element access (static names vs dynamic subscripts).",
      "الوصول لحقل السجل <b>أسرع</b> من عنصر المصفوفة."
    ],
    "idx": 19
  }
];

export const Q = [
  [
    1,
    "why",
    "Which is a reason for studying concepts of programming languages?",
    [
      "Increased ability to learn new languages",
      "Guaranteed faster programs",
      "Avoiding the need for compilers",
      "Reducing hardware cost"
    ],
    "من الأسباب: زيادة القدرة على تعلم لغات جديدة، والتعبير عن الأفكار، واختيار اللغة المناسبة.",
    "Reasons include a better ability to learn new languages, express ideas and choose languages.",
    0,
    0
  ],
  [
    1,
    "why",
    "Why must every software developer be prepared to learn different languages?",
    [
      "The number of languages in use and the dynamic nature of the statistics",
      "Old languages are illegal",
      "Compilers change every year",
      "Hardware only supports new languages"
    ],
    "عدد اللغات المستخدمة كبير وإحصائياتها تتغير باستمرار.",
    "Because of the number of languages in use and the dynamic statistics.",
    0,
    0
  ],
  [
    1,
    "why",
    "\"Better use of languages that are already known\" is:",
    [
      "A reason for studying PL concepts",
      "A language evaluation criterion",
      "An implementation method",
      "A language category"
    ],
    "هذا من أسباب دراسة مفاهيم اللغات.",
    "It's one of the reasons for studying PL concepts.",
    0,
    0
  ],
  [
    1,
    "why",
    "Which is NOT one of the listed reasons for studying PL concepts?",
    [
      "Increased hardware speed",
      "Improved background for choosing appropriate languages",
      "Better understanding of significance of implementation",
      "Overall advancement of computing"
    ],
    "الأسباب ستة وما فيها زيادة سرعة الهاردوير.",
    "The six reasons don't include increased hardware speed.",
    0,
    0
  ],
  [
    1,
    "domains",
    "Which language is associated with scientific applications (floating-point, arrays)?",
    [
      "Fortran",
      "COBOL",
      "LISP",
      "PHP"
    ],
    "العلمية: حسابات floating-point ومصفوفات ← Fortran.",
    "Scientific: floating-point and arrays → Fortran.",
    1,
    0
  ],
  [
    1,
    "domains",
    "Which language is associated with business applications (reports, decimal numbers)?",
    [
      "COBOL",
      "Fortran",
      "C",
      "Prolog"
    ],
    "الأعمال: تقارير وأرقام decimal وحروف ← COBOL.",
    "Business: reports, decimals, characters → COBOL.",
    1,
    0
  ],
  [
    1,
    "domains",
    "Artificial intelligence applications mainly manipulate:",
    [
      "Symbols rather than numbers, using linked lists",
      "Floating-point arrays",
      "Decimal numbers",
      "Markup"
    ],
    "الذكاء الاصطناعي يتعامل مع رموز وقوائم مترابطة (LISP وScheme وProlog وPython).",
    "AI manipulates symbols using linked lists (LISP, Scheme, Prolog, Python).",
    1,
    0
  ],
  [
    1,
    "domains",
    "Systems programming needs efficiency because of continuous use. Typical languages:",
    [
      "C and C++",
      "COBOL",
      "Prolog",
      "HTML"
    ],
    "برمجة الأنظمة تحتاج كفاءة ← C وC++.",
    "Systems programming → C and C++.",
    1,
    0
  ],
  [
    1,
    "domains",
    "Web software uses:",
    [
      "An eclectic collection: markup (HTML), scripting (PHP), general-purpose (Java)",
      "Only COBOL",
      "Only Fortran",
      "Only Prolog"
    ],
    "الويب خليط: ترميز وسكربت ولغات عامة.",
    "Web software uses markup, scripting and general-purpose languages.",
    0,
    0
  ],
  [
    1,
    "domains",
    "Which of these is listed as an AI language?",
    [
      "Prolog",
      "COBOL",
      "Fortran",
      "PHP"
    ],
    "لغات الذكاء الاصطناعي: LISP وScheme وProlog وPython.",
    "AI languages: LISP, Scheme, Prolog, Python.",
    0,
    0
  ],
  [
    1,
    "read",
    "Readability is:",
    [
      "The ease with which programs can be read and understood",
      "The ease of creating programs",
      "Conformance to specifications",
      "The ultimate total cost"
    ],
    "القراءة: سهولة قراءة البرنامج وفهمه.",
    "Readability: ease of reading and understanding programs.",
    1,
    0
  ],
  [
    1,
    "read",
    "Reliability is defined as:",
    [
      "Conformance to specifications (performs to its specifications)",
      "Ease of reading",
      "Ease of writing",
      "Low cost"
    ],
    "الموثوقية: البرنامج يتصرف حسب مواصفاته.",
    "Reliability = conformance to specifications.",
    1,
    0
  ],
  [
    1,
    "read",
    "Which are the four main language evaluation criteria?",
    [
      "Readability, writability, reliability, cost",
      "Speed, size, color, price",
      "Portability, generality, syntax, semantics",
      "Compilation, interpretation, hybrid, JIT"
    ],
    "المعايير الأربعة: القراءة، الكتابة، الموثوقية، التكلفة.",
    "Readability, writability, reliability, cost.",
    1,
    0
  ],
  [
    1,
    "read",
    "Orthogonality means:",
    [
      "A relatively small set of primitive constructs can be combined in a relatively small number of ways, and every combination is legal",
      "Many ways to do the same thing",
      "Heavy operator overloading",
      "Using keywords as identifiers"
    ],
    "التعامد: بنى أساسية قليلة تنجمع بطرق قليلة وكل تركيبة قانونية.",
    "Orthogonality: few primitives, few combination ways, every combination legal.",
    1,
    0
  ],
  [
    1,
    "read",
    "Which language is described as the most orthogonal?",
    [
      "ALGOL 68",
      "Java",
      "COBOL",
      "APL"
    ],
    "ALGOL 68 أكثر لغة متعامدة.",
    "ALGOL 68 is the most orthogonal PL.",
    1,
    0
  ],
  [
    1,
    "read",
    "Having many ways to increment a counter (count++, ++count, count += 1, count = count + 1) hurts readability because of:",
    [
      "Feature multiplicity",
      "Orthogonality",
      "Exception handling",
      "Portability"
    ],
    "تعدد الطرق لنفس العمل (feature multiplicity) يضر البساطة والقراءة.",
    "Feature multiplicity reduces simplicity and readability.",
    1,
    0
  ],
  [
    1,
    "read",
    "Writing array1 + array2 using a redefined + operator is an example of:",
    [
      "Operator overloading",
      "Aliasing",
      "Orthogonality",
      "Type checking"
    ],
    "إعادة تعريف + = operator overloading، والقليل منها أفضل للقراءة.",
    "Redefining + is operator overloading; minimal use helps readability.",
    0,
    0
  ],
  [
    1,
    "read",
    "Using timeout = 1 instead of timeout = true shows the readability problem of:",
    [
      "Lacking adequate predefined data types (no Boolean)",
      "Too much orthogonality",
      "Aliasing",
      "Operator overloading"
    ],
    "بدون نوع Boolean تضطر تستخدم أرقام، فتقل القراءة.",
    "Without a Boolean type, readability suffers.",
    0,
    0
  ],
  [
    1,
    "read",
    "Which is a syntax design consideration for readability?",
    [
      "Identifier forms, special words, and form and meaning",
      "Exception handling",
      "Compilation speed",
      "Standardization"
    ],
    "تصميم الصيغة: أشكال المعرّفات، الكلمات الخاصة، والشكل والمعنى.",
    "Syntax design: identifier forms, special words, form and meaning.",
    0,
    0
  ],
  [
    1,
    "read",
    "\"Self-descriptive constructs, meaningful keywords\" belongs to:",
    [
      "Form and meaning (syntax design)",
      "Type checking",
      "Expressivity",
      "Portability"
    ],
    "هذا من الشكل والمعنى في تصميم الصيغة.",
    "That's form and meaning under syntax design.",
    0,
    0
  ],
  [
    1,
    "write",
    "Writability is:",
    [
      "The ease with which a language can be used to create programs",
      "The ease of reading programs",
      "Conformance to specifications",
      "Portability"
    ],
    "الكتابة: سهولة استخدام اللغة لكتابة البرامج.",
    "Writability: ease of creating programs.",
    1,
    0
  ],
  [
    1,
    "write",
    "The ability to define and use complex structures or operations in ways that allow details to be ignored is:",
    [
      "Support for abstraction",
      "Expressivity",
      "Aliasing",
      "Orthogonality"
    ],
    "هذا تعريف دعم التجريد.",
    "That's support for abstraction.",
    1,
    0
  ],
  [
    1,
    "write",
    "counter++ vs counter = counter + 1 is an example of:",
    [
      "Expressivity",
      "Aliasing",
      "Type checking",
      "Portability"
    ],
    "طريقة مريحة لكتابة العملية = التعبيرية (expressivity).",
    "A convenient way to specify an operation is expressivity.",
    1,
    0
  ],
  [
    1,
    "write",
    "Testing for type errors is preferably done:",
    [
      "At compile-time",
      "At run-time",
      "Never",
      "Only by the user"
    ],
    "الفحص وقت الترجمة أفضل لأن وقت التشغيل مكلف.",
    "Compile-time checking is preferred; run-time is expensive.",
    1,
    0
  ],
  [
    1,
    "write",
    "Intercepting run-time errors and taking corrective measures is:",
    [
      "Exception handling",
      "Type checking",
      "Aliasing",
      "Expressivity"
    ],
    "هذا تعريف معالجة الاستثناءات.",
    "That's exception handling.",
    1,
    0
  ],
  [
    1,
    "write",
    "Two or more distinct referencing methods for the same memory location is called:",
    [
      "Aliasing",
      "Orthogonality",
      "Overloading",
      "Abstraction"
    ],
    "هذا الـ aliasing، ويعتبر ميزة خطيرة.",
    "That's aliasing, considered dangerous.",
    1,
    0
  ],
  [
    1,
    "write",
    "Aliasing is considered:",
    [
      "A dangerous feature that reduces reliability",
      "A feature that increases readability",
      "Required for portability",
      "A compilation phase"
    ],
    "الـ aliasing خطير على الموثوقية.",
    "Aliasing is dangerous for reliability.",
    0,
    0
  ],
  [
    1,
    "write",
    "Which feature affects reliability (not writability)?",
    [
      "Type checking",
      "Support for abstraction",
      "Expressivity",
      "Simplicity of constructs"
    ],
    "فحص الأنواع من الموثوقية، والباقي من الكتابة.",
    "Type checking is a reliability feature.",
    0,
    0
  ],
  [
    1,
    "write",
    "How do readability and writability affect reliability?",
    [
      "Unnatural ways of expressing an algorithm reduce reliability",
      "They don't affect it",
      "More readable code is always slower",
      "They only affect cost"
    ],
    "لو اللغة تجبرك على طرق غير طبيعية، تقل الموثوقية.",
    "Unnatural approaches reduce reliability.",
    0,
    0
  ],
  [
    1,
    "cost",
    "Which is NOT listed as a cost category?",
    [
      "Cost of choosing the font",
      "Training programmers",
      "Writing programs",
      "Maintaining programs"
    ],
    "التكاليف: التدريب، الكتابة، التنفيذ، الموثوقية، الصيانة.",
    "Costs: training, writing, executing, reliability, maintenance.",
    0,
    0
  ],
  [
    1,
    "cost",
    "The cost of maintaining programs depends mostly on:",
    [
      "Readability",
      "Portability",
      "Generality",
      "Expressivity"
    ],
    "الصيانة تعتمد أكثر شي على القابلية للقراءة.",
    "Maintenance depends mostly on readability.",
    1,
    0
  ],
  [
    1,
    "cost",
    "Training cost depends on:",
    [
      "Simplicity and orthogonality of the language",
      "Execution speed",
      "The number of compilers",
      "Hardware price"
    ],
    "تكلفة التدريب تعتمد على البساطة والتعامد.",
    "Training cost depends on simplicity and orthogonality.",
    1,
    0
  ],
  [
    1,
    "cost",
    "A language that requires many run-time type checks will:",
    [
      "Prohibit fast code execution",
      "Be more readable",
      "Be more portable",
      "Have no cost"
    ],
    "فحوصات وقت التشغيل الكثيرة تبطئ التنفيذ.",
    "Many run-time checks prevent fast execution.",
    1,
    0
  ],
  [
    1,
    "cost",
    "Poor reliability leads to high costs because of:",
    [
      "Lost future business or lawsuits over defective software",
      "Faster compilers",
      "More readable code",
      "Cheaper hardware"
    ],
    "ضعف الموثوقية يكلف: خسارة عملاء أو قضايا.",
    "Poor reliability costs lost business and lawsuits.",
    0,
    0
  ],
  [
    1,
    "cost",
    "Portability is most strongly influenced by:",
    [
      "The degree of standardization of the language",
      "The number of operators",
      "The use of pointers",
      "Exception handling"
    ],
    "قابلية النقل تتأثر أكثر شي بالتوحيد القياسي.",
    "Portability depends most on standardization.",
    1,
    0
  ],
  [
    1,
    "cost",
    "C++ standardization took from:",
    [
      "1989 to 1998",
      "1950 to 1960",
      "2000 to 2001",
      "1998 to 2011"
    ],
    "توحيد C++ أخذ من 1989 لين 1998 (عملية طويلة وصعبة).",
    "C++ standardization took 1989–1998.",
    0,
    0
  ],
  [
    1,
    "cost",
    "Generality is:",
    [
      "The applicability to a wide range of applications",
      "Completeness of the official definition",
      "Ease of moving programs",
      "Cost of execution"
    ],
    "العمومية: تنفع لمجالات كثيرة.",
    "Generality = applicability to many applications.",
    1,
    0
  ],
  [
    1,
    "cost",
    "Well-definedness is:",
    [
      "The completeness and precision of the language's official definition document",
      "Ease of writing",
      "Ease of reading",
      "Execution speed"
    ],
    "وضوح التعريف: اكتمال ودقة الوثيقة الرسمية.",
    "Well-definedness = completeness and precision of the official definition.",
    1,
    0
  ],
  [
    1,
    "influence",
    "Which two factors influence the basic design of programming languages?",
    [
      "Computer architecture and program design methodologies",
      "Price and popularity",
      "Font and color",
      "Compilers and editors"
    ],
    "العاملين: معمارية الحاسب ومنهجيات التصميم.",
    "Computer architecture and design methodologies.",
    1,
    0
  ],
  [
    1,
    "influence",
    "Languages developed around the von Neumann architecture are called:",
    [
      "Imperative languages",
      "Functional languages",
      "Logic languages",
      "Markup languages"
    ],
    "اللغات المبنية حول فون نيومان = الأمرية.",
    "They are imperative languages.",
    1,
    0
  ],
  [
    1,
    "influence",
    "In imperative languages, variables model:",
    [
      "Memory cells",
      "Functions",
      "Rules",
      "Pipes"
    ],
    "المتغيرات تمثل خانات الذاكرة، والإسناد يمثل النقل.",
    "Variables model memory cells; assignment models piping.",
    1,
    0
  ],
  [
    1,
    "influence",
    "In imperative languages, assignment statements model:",
    [
      "Piping (moving data between memory and CPU)",
      "Memory cells",
      "Recursion",
      "Rules"
    ],
    "الإسناد يمثل نقل البيانات (piping).",
    "Assignment statements model piping.",
    1,
    0
  ],
  [
    1,
    "influence",
    "In the von Neumann architecture:",
    [
      "Data and programs are stored in memory, separate from the CPU",
      "Programs are stored inside the CPU only",
      "There is no memory",
      "Data is stored in the program counter"
    ],
    "البيانات والبرامج في الذاكرة، والذاكرة منفصلة عن المعالج.",
    "Data and programs are in memory, separate from the CPU.",
    1,
    0
  ],
  [
    1,
    "influence",
    "The correct order of the fetch-execute cycle step after fetching the instruction is:",
    [
      "Increment the counter, decode, execute",
      "Execute, decode, fetch",
      "Decode, fetch, execute",
      "Execute, increment, fetch"
    ],
    "نجلب، نزيد العداد، نفك التعليمة، ننفذ.",
    "Fetch, increment the counter, decode, execute.",
    1,
    0
  ],
  [
    1,
    "influence",
    "The von Neumann bottleneck is:",
    [
      "The speed of the connection between memory and processor limiting computer speed",
      "Slow compilers",
      "Too many registers",
      "Slow keyboards"
    ],
    "عنق الزجاجة: سرعة الاتصال بين الذاكرة والمعالج.",
    "The memory–processor connection speed limits computer speed.",
    0,
    0
  ],
  [
    1,
    "influence",
    "Object-oriented programming (middle 1980s) is:",
    [
      "Data abstraction + inheritance + polymorphism",
      "Structured programming only",
      "Top-down design only",
      "Machine efficiency"
    ],
    "OOP = تجريد البيانات + الوراثة + تعدد الأشكال.",
    "OOP = data abstraction + inheritance + polymorphism.",
    0,
    0
  ],
  [
    1,
    "influence",
    "In the late 1960s, the focus moved to:",
    [
      "People efficiency: readability, better control structures, structured programming",
      "Machine efficiency",
      "Object-oriented programming",
      "Data abstraction"
    ],
    "أواخر الستينات: كفاءة البشر والبرمجة المهيكلة.",
    "Late 1960s: people efficiency and structured programming.",
    0,
    0
  ],
  [
    1,
    "influence",
    "In the late 1970s, languages moved from process-oriented to:",
    [
      "Data-oriented (data abstraction)",
      "Logic programming",
      "Machine code",
      "Markup"
    ],
    "أواخر السبعينات: التحول للبيانات (تجريد البيانات).",
    "Late 1970s: data-oriented, data abstraction.",
    0,
    0
  ],
  [
    1,
    "influence",
    "Why is iteration efficient in imperative languages?",
    [
      "Instructions are stored in adjacent memory cells on von Neumann machines",
      "Recursion is forbidden",
      "CPUs have no memory",
      "Functions are slow"
    ],
    "لأن التعليمات في خانات متجاورة في الذاكرة، فالتكرار فعّال على فون نيومان.",
    "On von Neumann machines, iteration is efficient (instructions in adjacent cells).",
    0,
    0
  ],
  [
    1,
    "categories",
    "Central features of imperative languages are:",
    [
      "Variables, assignment statements, and iteration",
      "Applying functions to parameters",
      "Rules in no particular order",
      "Markup tags"
    ],
    "الأمرية: المتغيرات والإسناد والتكرار.",
    "Imperative: variables, assignment, iteration.",
    1,
    0
  ],
  [
    1,
    "categories",
    "Which is a functional language?",
    [
      "LISP",
      "C",
      "Prolog",
      "XSLT"
    ],
    "الوظيفية: LISP وScheme وML وF#.",
    "Functional: LISP, Scheme, ML, F#.",
    1,
    0
  ],
  [
    1,
    "categories",
    "Prolog belongs to which category?",
    [
      "Logic (rule-based)",
      "Functional",
      "Imperative",
      "Markup hybrid"
    ],
    "Prolog منطقية مبنية على قواعد.",
    "Prolog is a logic, rule-based language.",
    1,
    0
  ],
  [
    1,
    "categories",
    "JSTL and XSLT are examples of:",
    [
      "Markup/programming hybrid languages",
      "Functional languages",
      "Logic languages",
      "Assembly languages"
    ],
    "لغات ترميز مضاف لها برمجة.",
    "Markup/programming hybrids.",
    1,
    0
  ],
  [
    1,
    "categories",
    "Imperative languages include:",
    [
      "Object-oriented, scripting, and visual languages",
      "Only Prolog",
      "Only LISP",
      "Only HTML"
    ],
    "الأمرية تشمل الكائنية والسكربت والمرئية.",
    "Imperative includes OOP, scripting and visual languages.",
    0,
    0
  ],
  [
    1,
    "categories",
    "Java checks all array references for proper indexing. This is a trade-off between:",
    [
      "Reliability and cost of execution",
      "Readability and writability",
      "Writability and reliability",
      "Portability and generality"
    ],
    "Java تفحص الفهارس فتزيد الموثوقية وترفع تكلفة التنفيذ.",
    "Index checking: reliability vs. cost of execution.",
    1,
    0
  ],
  [
    1,
    "categories",
    "APL's many powerful operators allow compact programs but poor readability. This is:",
    [
      "Readability vs. writability",
      "Reliability vs. cost",
      "Writability vs. reliability",
      "Portability vs. generality"
    ],
    "APL: كتابة قصيرة على حساب القراءة.",
    "APL: readability vs. writability.",
    1,
    0
  ],
  [
    1,
    "categories",
    "C++ pointers are powerful and flexible but unreliable. This is:",
    [
      "Writability (flexibility) vs. reliability",
      "Readability vs. writability",
      "Reliability vs. cost of execution",
      "Cost vs. portability"
    ],
    "المؤشرات: مرونة الكتابة على حساب الموثوقية.",
    "Pointers: writability vs. reliability.",
    0,
    0
  ],
  [
    1,
    "categories",
    "In logic languages, rules are specified:",
    [
      "In no particular order",
      "In strict sequential order",
      "As loops",
      "As markup tags"
    ],
    "القواعد بدون ترتيب معين.",
    "Rules are in no particular order.",
    0,
    0
  ],
  [
    1,
    "compile",
    "Compilation is used mostly for:",
    [
      "Large commercial applications",
      "Small programs when efficiency is not an issue",
      "Only web scripts",
      "Only teaching"
    ],
    "الترجمة للتطبيقات التجارية الكبيرة.",
    "Compilation is for large commercial applications.",
    1,
    0
  ],
  [
    1,
    "compile",
    "Compilation is characterized by:",
    [
      "Slow translation, fast execution",
      "Fast translation, slow execution",
      "No translation",
      "Only interpretation"
    ],
    "ترجمة بطيئة وتنفيذ سريع.",
    "Slow translation, fast execution.",
    1,
    0
  ],
  [
    1,
    "compile",
    "Which compilation phase converts characters in the source program into lexical units?",
    [
      "Lexical analysis",
      "Syntax analysis",
      "Semantics analysis",
      "Code generation"
    ],
    "المعجمي: الحروف ← وحدات معجمية.",
    "Lexical analysis produces lexical units.",
    1,
    0
  ],
  [
    1,
    "compile",
    "Which phase transforms lexical units into parse trees?",
    [
      "Syntax analysis",
      "Lexical analysis",
      "Semantics analysis",
      "Linking"
    ],
    "النحوي: الوحدات ← parse trees.",
    "Syntax analysis builds parse trees.",
    1,
    0
  ],
  [
    1,
    "compile",
    "Which phase generates intermediate code?",
    [
      "Semantics analysis",
      "Lexical analysis",
      "Syntax analysis",
      "Loading"
    ],
    "الدلالي يولد الكود الوسيط.",
    "Semantics analysis generates intermediate code.",
    1,
    0
  ],
  [
    1,
    "compile",
    "The correct order of compilation phases is:",
    [
      "Lexical → syntax → semantics → code generation",
      "Syntax → lexical → code generation → semantics",
      "Code generation → lexical → syntax → semantics",
      "Semantics → syntax → lexical → code generation"
    ],
    "الترتيب: معجمي ← نحوي ← دلالي ← توليد كود.",
    "Lexical, syntax, semantics, code generation.",
    1,
    0
  ],
  [
    1,
    "compile",
    "The user and system code together is called:",
    [
      "Load module (executable image)",
      "Parse tree",
      "Byte code",
      "Preprocessor"
    ],
    "الـ load module = الصورة التنفيذية.",
    "A load module is the executable image.",
    0,
    0
  ],
  [
    1,
    "compile",
    "Collecting system program units and linking them to a user program is:",
    [
      "Linking and loading",
      "Lexical analysis",
      "Interpretation",
      "JIT"
    ],
    "هذا الربط والتحميل.",
    "That's linking and loading.",
    0,
    0
  ],
  [
    1,
    "compile",
    "The operating system and language implementation are:",
    [
      "Layered over the machine interface of a computer",
      "Stored inside the CPU",
      "Part of the source code",
      "Not related"
    ],
    "نظام التشغيل وتنفيذ اللغة طبقات فوق واجهة الآلة.",
    "They are layered over the machine interface.",
    0,
    0
  ],
  [
    1,
    "interp",
    "Pure interpretation is about how much slower than compiled programs?",
    [
      "10 to 100 times",
      "2 times",
      "1000 times",
      "Same speed"
    ],
    "التفسير البحت أبطأ 10 لـ 100 مرة.",
    "10 to 100 times slower.",
    1,
    0
  ],
  [
    1,
    "interp",
    "An advantage of pure interpretation is:",
    [
      "Easier implementation; run-time errors are displayed immediately",
      "Fast execution",
      "Less memory",
      "No interpreter needed"
    ],
    "ميزته: أسهل والأخطاء تطلع فوراً.",
    "Easier implementation with immediate error display.",
    1,
    0
  ],
  [
    1,
    "interp",
    "Pure interpretation made a significant comeback with:",
    [
      "Web scripting languages (JavaScript, PHP)",
      "COBOL",
      "Fortran",
      "Assembly"
    ],
    "رجع مع سكربتات الويب.",
    "It came back with web scripting (JavaScript, PHP).",
    1,
    0
  ],
  [
    1,
    "interp",
    "Hybrid implementation systems:",
    [
      "Translate to an intermediate language that allows easy interpretation",
      "Compile directly to machine code only",
      "Do no translation",
      "Run only on hardware"
    ],
    "الهجين: يحول للغة وسيطة سهلة التفسير.",
    "Hybrid systems translate to an easily interpreted intermediate language.",
    1,
    0
  ],
  [
    1,
    "interp",
    "In initial Java implementations, the intermediate form was:",
    [
      "Byte code",
      "Parse tree",
      "Machine code",
      "Assembly"
    ],
    "الـ byte code يعطي قابلية نقل.",
    "Java's intermediate form is byte code.",
    1,
    0
  ],
  [
    1,
    "interp",
    "The byte code interpreter and the run-time system together are called:",
    [
      "Java Virtual Machine (JVM)",
      "JIT",
      "Preprocessor",
      "Linker"
    ],
    "المفسر ونظام وقت التشغيل = JVM.",
    "Together they form the JVM.",
    1,
    0
  ],
  [
    1,
    "interp",
    "Perl programs are:",
    [
      "Partially compiled to detect errors before interpretation",
      "Purely compiled",
      "Never interpreted",
      "Written in byte code"
    ],
    "Perl تترجم جزئياً لكشف الأخطاء.",
    "Perl is partially compiled before interpretation.",
    0,
    0
  ],
  [
    1,
    "interp",
    "JIT systems compile subprograms into machine code:",
    [
      "When they are called, keeping the machine code for subsequent calls",
      "Before the program is written",
      "Never",
      "Only at the end"
    ],
    "JIT يترجم الدالة لما تنستدعى ويحفظها.",
    "JIT compiles subprograms when called and keeps them.",
    0,
    0
  ],
  [
    1,
    "interp",
    "In essence, JIT systems are:",
    [
      "Delayed compilers",
      "Pure interpreters",
      "Preprocessors",
      "Linkers"
    ],
    "JIT = مترجمات متأخرة.",
    "JIT systems are delayed compilers.",
    0,
    0
  ],
  [
    1,
    "interp",
    ".NET languages are implemented with:",
    [
      "A JIT system",
      "Pure interpretation",
      "Only preprocessors",
      "No implementation"
    ],
    "لغات .NET تستخدم JIT.",
    ".NET languages use JIT.",
    0,
    0
  ],
  [
    1,
    "interp",
    "A preprocessor:",
    [
      "Processes a program immediately before compilation to expand macros",
      "Executes the program",
      "Links object files",
      "Interprets byte code"
    ],
    "المعالج المسبق يشتغل قبل الترجمة ويوسع الماكروز.",
    "A preprocessor expands macros before compilation.",
    0,
    0
  ],
  [
    1,
    "interp",
    "Which is a C preprocessor macro?",
    [
      "#include",
      "printf",
      "main",
      "return"
    ],
    "#include و#define ماكروز المعالج المسبق.",
    "#include and #define are preprocessor macros.",
    0,
    0
  ],
  [
    1,
    "interp",
    "A programming environment is:",
    [
      "A collection of tools used in software development",
      "A compiler phase",
      "A data type",
      "A language category"
    ],
    "بيئة البرمجة: مجموعة أدوات للتطوير.",
    "A collection of development tools.",
    0,
    0
  ],
  [
    1,
    "interp",
    "NetBeans is:",
    [
      "Related to Visual Studio .NET, except for applications in Java",
      "An operating system",
      "A JIT compiler",
      "A preprocessor"
    ],
    "NetBeans مثل VS .NET بس لـ Java.",
    "NetBeans is like VS .NET but for Java.",
    0,
    0
  ],
  [
    2,
    "dtintro",
    "A data type defines:",
    [
      "A collection of data objects and a set of predefined operations on them",
      "Only memory size",
      "Only variable names",
      "A compiler phase"
    ],
    "النوع = مجموعة كائنات + عمليات جاهزة عليها.",
    "A data type = data objects + predefined operations.",
    0,
    0
  ],
  [
    2,
    "dtintro",
    "A descriptor is:",
    [
      "The collection of the attributes of a variable",
      "An instance of a user-defined type",
      "An operator",
      "A compiler"
    ],
    "الواصف = خصائص المتغير.",
    "A descriptor = a variable's attributes.",
    0,
    0
  ],
  [
    2,
    "dtintro",
    "An object represents:",
    [
      "An instance of a user-defined (abstract data) type",
      "A primitive type",
      "A descriptor",
      "A keyword"
    ],
    "الكائن = نسخة من نوع معرّف من المستخدم.",
    "An object is an instance of a user-defined type.",
    0,
    0
  ],
  [
    2,
    "dtintro",
    "One design issue for all data types is:",
    [
      "What operations are defined and how are they specified?",
      "What color is the code?",
      "How fast is the compiler?",
      "Which IDE is used?"
    ],
    "سؤال التصميم: وش العمليات وكيف تنحدد.",
    "Which operations are defined and how they're specified.",
    0,
    0
  ],
  [
    2,
    "prim",
    "Primitive data types are:",
    [
      "Those not defined in terms of other data types",
      "Arrays and records",
      "User-defined types only",
      "Strings only"
    ],
    "الأولية ما تتعرف بأنواع ثانية.",
    "Primitive types aren't defined in terms of others.",
    1,
    0
  ],
  [
    2,
    "prim",
    "Which are Java's signed integer types?",
    [
      "byte, short, int, long",
      "float, double",
      "char, boolean",
      "int, float, char, string"
    ],
    "Java: byte وshort وint وlong.",
    "byte, short, int, long.",
    1,
    0
  ],
  [
    2,
    "prim",
    "How many different integer types may a language have?",
    [
      "As many as eight",
      "Exactly one",
      "At most two",
      "Sixteen"
    ],
    "ممكن لين 8 أنواع صحيحة.",
    "Up to eight integer types.",
    0,
    0
  ],
  [
    2,
    "prim",
    "Floating-point types model real numbers:",
    [
      "Only as approximations",
      "Exactly",
      "Only as integers",
      "As strings"
    ],
    "العشري تقريبي بس.",
    "Floating point is only an approximation.",
    1,
    0
  ],
  [
    2,
    "prim",
    "The IEEE floating-point standard is:",
    [
      "Standard 754 (single and double precision)",
      "Standard 802",
      "Standard 3501",
      "Standard 5321"
    ],
    "المعيار IEEE 754.",
    "IEEE Standard 754.",
    1,
    0
  ],
  [
    2,
    "prim",
    "In Python, the literal (7 + 3j) has imaginary part:",
    [
      "3",
      "7",
      "10",
      "j"
    ],
    "7 الحقيقي و3 التخيلي.",
    "7 is real, 3 is imaginary.",
    1,
    0
  ],
  [
    2,
    "prim",
    "Which languages support a complex type (per the slides)?",
    [
      "C99, Fortran, Python",
      "COBOL, Java",
      "HTML, CSS",
      "Prolog, LISP"
    ],
    "المركب في C99 وFortran وPython.",
    "Complex: C99, Fortran, Python.",
    0,
    0
  ],
  [
    2,
    "prim",
    "The decimal type stores a fixed number of decimal digits in:",
    [
      "Binary coded decimal (BCD)",
      "IEEE 754",
      "ASCII",
      "Unicode"
    ],
    "Decimal يتخزن بترميز BCD.",
    "Decimal uses BCD.",
    1,
    0
  ],
  [
    2,
    "prim",
    "The advantage of the decimal type is:",
    [
      "Accuracy",
      "Unlimited range",
      "Saving memory",
      "Speed of hardware"
    ],
    "ميزته الدقة.",
    "Its advantage is accuracy.",
    0,
    0
  ],
  [
    2,
    "prim",
    "The disadvantages of the decimal type are:",
    [
      "Limited range and wastes memory",
      "Inaccuracy and slowness",
      "No support in COBOL",
      "It is not primitive"
    ],
    "عيوبه: مدى محدود وهدر للذاكرة.",
    "Limited range and wasted memory.",
    0,
    0
  ],
  [
    2,
    "prim",
    "Which language considers the decimal type essential?",
    [
      "COBOL",
      "Fortran",
      "LISP",
      "Prolog"
    ],
    "COBOL لأنها للأعمال والفلوس.",
    "COBOL (business, money).",
    0,
    0
  ],
  [
    2,
    "boolchar",
    "The Boolean type is often implemented as:",
    [
      "Bytes",
      "Single bits always",
      "Floating-point numbers",
      "Strings"
    ],
    "ممكن بت بس غالباً بايت.",
    "Usually as bytes (could be bits).",
    0,
    0
  ],
  [
    2,
    "boolchar",
    "The advantage of the Boolean type is:",
    [
      "Readability",
      "Speed",
      "Memory saving",
      "Portability"
    ],
    "ميزته القابلية للقراءة.",
    "Its advantage is readability.",
    0,
    0
  ],
  [
    2,
    "boolchar",
    "The most commonly used character coding is:",
    [
      "ASCII",
      "UCS-4",
      "BCD",
      "IEEE 754"
    ],
    "الأشهر ASCII.",
    "ASCII is most common.",
    0,
    0
  ],
  [
    2,
    "boolchar",
    "UCS-2 Unicode is:",
    [
      "16-bit, originally used in Java",
      "32-bit, used by Fortran 2003",
      "8-bit ASCII",
      "Binary coded decimal"
    ],
    "UCS-2 = 16 بت، استخدمته Java أول.",
    "UCS-2 is 16-bit, originally used in Java.",
    0,
    0
  ],
  [
    2,
    "boolchar",
    "32-bit Unicode (UCS-4) is supported by Fortran starting with:",
    [
      "2003",
      "1990",
      "1977",
      "2020"
    ],
    "Fortran من 2003.",
    "Fortran from 2003.",
    0,
    0
  ],
  [
    2,
    "boolchar",
    "Unicode includes:",
    [
      "Characters from most natural languages",
      "Only English letters",
      "Only digits",
      "Only symbols"
    ],
    "Unicode فيه حروف أغلب اللغات.",
    "Unicode includes most natural languages' characters.",
    0,
    0
  ],
  [
    2,
    "strings",
    "Which is a design issue for character string types?",
    [
      "Is it a primitive type or just a special kind of array?",
      "Is it a floating-point type?",
      "Is it stored in BCD?",
      "Does it need a JVM?"
    ],
    "السؤالين: أولي أو مصفوفة؟ وطوله ثابت أو متغير؟",
    "Primitive vs array, and static vs dynamic length.",
    1,
    0
  ],
  [
    2,
    "strings",
    "Substring reference is also known as:",
    [
      "Slicing",
      "Catenation",
      "Pattern matching",
      "Aliasing"
    ],
    "أخذ جزء من النص = slicing.",
    "Substring reference = slicing.",
    1,
    0
  ],
  [
    2,
    "strings",
    "In C and C++, strings are:",
    [
      "Not primitive: char arrays with a library of functions",
      "Primitive via String class",
      "Dynamic with no maximum",
      "Associative arrays"
    ],
    "في C وC++ مو أولية، مصفوفة حروف + مكتبة.",
    "Not primitive: char arrays + library.",
    1,
    0
  ],
  [
    2,
    "strings",
    "SNOBOL4 is known for:",
    [
      "Primitive strings with elaborate pattern matching",
      "No string support",
      "Static-length strings only",
      "BCD strings"
    ],
    "SNOBOL4 لغة نصوص، مطابقة أنماط متقدمة.",
    "SNOBOL4: primitive strings, elaborate pattern matching.",
    1,
    0
  ],
  [
    2,
    "strings",
    "In Java, strings are primitive via:",
    [
      "The String class",
      "char arrays only",
      "Regular expressions",
      "BCD"
    ],
    "Java عن طريق كلاس String.",
    "Via the String class.",
    1,
    0
  ],
  [
    2,
    "strings",
    "Which languages provide built-in pattern matching using regular expressions?",
    [
      "Perl, JavaScript, Ruby, PHP",
      "C and C++",
      "COBOL and Fortran",
      "Ada and Prolog"
    ],
    "Perl وJavaScript وRuby وPHP.",
    "Perl, JavaScript, Ruby, PHP.",
    1,
    0
  ],
  [
    2,
    "strings",
    "Java's String class has which length option?",
    [
      "Static length",
      "Limited dynamic length",
      "Dynamic (no maximum)",
      "No length"
    ],
    "String في Java طوله ثابت.",
    "Static length.",
    0,
    0
  ],
  [
    2,
    "strings",
    "C and C++ strings have which length option?",
    [
      "Limited dynamic length (special end character)",
      "Static length",
      "Dynamic, no maximum",
      "Fixed by the hardware"
    ],
    "محدود متغير، وحرف خاص يحدد النهاية.",
    "Limited dynamic, marked by a special end character.",
    0,
    0
  ],
  [
    2,
    "strings",
    "Which languages have dynamic-length strings with no maximum?",
    [
      "SNOBOL4, Perl, JavaScript",
      "COBOL, Java",
      "C, C++",
      "Fortran, Ada"
    ],
    "المتغير بلا حد: SNOBOL4 وPerl وJavaScript.",
    "Dynamic: SNOBOL4, Perl, JavaScript.",
    0,
    0
  ],
  [
    2,
    "strings",
    "Static-length strings need:",
    [
      "A compile-time descriptor",
      "A run-time descriptor",
      "No descriptor",
      "A garbage collector"
    ],
    "الثابت ← واصف وقت الترجمة.",
    "Static strings use a compile-time descriptor.",
    0,
    0
  ],
  [
    2,
    "strings",
    "The biggest implementation problem of dynamic-length strings is:",
    [
      "Allocation/deallocation",
      "Pattern matching",
      "Comparison",
      "Catenation syntax"
    ],
    "أكبر مشكلة: الحجز والتحرير.",
    "Allocation/deallocation.",
    0,
    0
  ],
  [
    2,
    "strings",
    "Do C and C++ limited dynamic strings need a run-time descriptor for length?",
    [
      "No, the end is marked by a special character",
      "Yes, always",
      "Only in C++",
      "Only for constants"
    ],
    "لا، النهاية بحرف خاص.",
    "No; a special character marks the end.",
    0,
    0
  ],
  [
    2,
    "strings",
    "Joining two strings together is called:",
    [
      "Catenation",
      "Slicing",
      "Aliasing",
      "Pattern matching"
    ],
    "الدمج = catenation.",
    "Joining strings is catenation.",
    0,
    0
  ],
  [
    2,
    "ordinal",
    "An ordinal type is one whose range of values:",
    [
      "Can be easily associated with the set of positive integers",
      "Are real numbers",
      "Are strings",
      "Are unordered"
    ],
    "الترتيبي: قيمه ترتبط بالأعداد الصحيحة الموجبة.",
    "An ordinal type maps easily onto positive integers.",
    0,
    0
  ],
  [
    2,
    "ordinal",
    "Which is NOT a primitive ordinal type in Java?",
    [
      "double",
      "int",
      "char",
      "boolean"
    ],
    "الترتيبية في Java: integer وchar وboolean. double مو ترتيبي.",
    "double is not ordinal.",
    0,
    0
  ],
  [
    3,
    "arrays",
    "An array is:",
    [
      "A homogeneous aggregate where an element is identified by its position relative to the first",
      "A heterogeneous aggregate identified by names",
      "An unordered collection indexed by keys",
      "A single primitive value"
    ],
    "المصفوفة: متجانسة والعنصر يتحدد بموقعه.",
    "An array is homogeneous, elements identified by position.",
    0,
    0
  ],
  [
    3,
    "arrays",
    "Which languages use parentheses () for array indexing?",
    [
      "Fortran and Ada",
      "C and Java",
      "Python and Ruby",
      "C# and Perl"
    ],
    "Fortran وAda بأقواس عادية.",
    "Fortran and Ada use ().",
    0,
    0
  ],
  [
    3,
    "arrays",
    "Why does Ada use parentheses for array references?",
    [
      "To show uniformity between array references and function calls, since both are mappings",
      "Because brackets are reserved",
      "For speed",
      "For portability"
    ],
    "عشان توضح إن المصفوفة والدالة كلهم mapping.",
    "Both are mappings, so Ada shows uniformity.",
    0,
    0
  ],
  [
    3,
    "arrays",
    "Which languages do NOT specify index range checking?",
    [
      "C, C++, Perl, Fortran",
      "Java, ML, C#",
      "Ada, Java",
      "Python, C#"
    ],
    "C وC++ وPerl وFortran ما تفحص.",
    "C, C++, Perl, Fortran don't range-check.",
    0,
    0
  ],
  [
    3,
    "arrays",
    "Which languages specify range checking?",
    [
      "Java, ML, C#",
      "C, C++",
      "Perl, Fortran",
      "Assembly"
    ],
    "Java وML وC# تفحص المدى.",
    "Java, ML, C# do.",
    0,
    0
  ],
  [
    3,
    "arrays",
    "In FORTRAN and C, array subscripts are:",
    [
      "Integer only",
      "Any type",
      "Strings",
      "Floating-point"
    ],
    "FORTRAN وC: صحيح بس.",
    "Integer only.",
    0,
    0
  ],
  [
    3,
    "arrays",
    "C# and Java 5.0 provide generic arrays:",
    [
      "Through their class libraries (elements are references to objects)",
      "Through the hardware",
      "Through BCD",
      "They don't"
    ],
    "عن طريق المكتبات.",
    "Through class libraries.",
    0,
    0
  ],
  [
    3,
    "arrays",
    "Indexing (subscripting) is:",
    [
      "A mapping from indices to elements",
      "A compilation phase",
      "A type of record",
      "An exception"
    ],
    "الفهرسة: ربط من الفهارس للعناصر.",
    "Indexing maps indices to elements.",
    0,
    0
  ],
  [
    3,
    "arraycat",
    "An array whose subscript ranges are statically bound and storage is allocated before run-time is:",
    [
      "Static",
      "Fixed stack-dynamic",
      "Fixed heap-dynamic",
      "Heap-dynamic"
    ],
    "الساكنة: كل شي قبل التشغيل.",
    "That's a static array.",
    1,
    0
  ],
  [
    3,
    "arraycat",
    "The advantage of static arrays is:",
    [
      "Efficiency (no dynamic allocation)",
      "Flexibility",
      "Space efficiency",
      "Unlimited size"
    ],
    "الساكنة ← الكفاءة.",
    "Efficiency.",
    1,
    0
  ],
  [
    3,
    "arraycat",
    "Subscript ranges statically bound, allocation at declaration time:",
    [
      "Fixed stack-dynamic",
      "Static",
      "Heap-dynamic",
      "Associative"
    ],
    "الحجز وقت التعريف = ثابتة على الـ stack.",
    "Fixed stack-dynamic.",
    1,
    0
  ],
  [
    3,
    "arraycat",
    "The advantage of fixed stack-dynamic arrays is:",
    [
      "Space efficiency",
      "Flexibility",
      "No allocation at all",
      "Range checking"
    ],
    "ميزتها توفير المساحة.",
    "Space efficiency.",
    1,
    0
  ],
  [
    3,
    "arraycat",
    "Storage allocated from the heap when requested, then fixed after allocation:",
    [
      "Fixed heap-dynamic",
      "Static",
      "Fixed stack-dynamic",
      "Heap-dynamic"
    ],
    "من الـ heap وتثبت بعد الحجز = fixed heap-dynamic.",
    "Fixed heap-dynamic.",
    1,
    0
  ],
  [
    3,
    "arraycat",
    "Subscript range binding and storage allocation are dynamic and can change any number of times:",
    [
      "Heap-dynamic",
      "Static",
      "Fixed stack-dynamic",
      "Fixed heap-dynamic"
    ],
    "تتغير أي عدد مرات = heap-dynamic.",
    "Heap-dynamic.",
    1,
    0
  ],
  [
    3,
    "arraycat",
    "The advantage of heap-dynamic arrays is:",
    [
      "Flexibility (they can grow or shrink)",
      "Efficiency",
      "Space efficiency",
      "Compile-time checking"
    ],
    "ميزتها المرونة.",
    "Flexibility.",
    0,
    0
  ],
  [
    3,
    "arraycat",
    "C/C++ arrays that include the static modifier are:",
    [
      "Static",
      "Fixed stack-dynamic",
      "Heap-dynamic",
      "Associative"
    ],
    "مع static ← ساكنة.",
    "Static.",
    0,
    0
  ],
  [
    3,
    "arraycat",
    "C/C++ arrays declared in functions without the static modifier are:",
    [
      "Fixed stack-dynamic",
      "Static",
      "Heap-dynamic",
      "Jagged"
    ],
    "بدون static ← ثابتة على الـ stack.",
    "Fixed stack-dynamic.",
    0,
    0
  ],
  [
    3,
    "arraycat",
    "Which languages support heap-dynamic arrays?",
    [
      "Perl, JavaScript, Python, Ruby",
      "Fortran only",
      "COBOL only",
      "None"
    ],
    "Perl وJavaScript وPython وRuby.",
    "Perl, JavaScript, Python, Ruby.",
    0,
    0
  ],
  [
    3,
    "arrayops",
    "list = [x ** 2 for x in range(12) if x % 3 == 0] puts which list?",
    [
      "[0, 9, 36, 81]",
      "[0, 3, 6, 9]",
      "[1, 4, 9, 16]",
      "[0, 1, 4, 9]"
    ],
    "x = 0 و3 و6 و9، ومربعاتها 0 و9 و36 و81.",
    "x ∈ {0, 3, 6, 9}, squares 0, 9, 36, 81.",
    1,
    0
  ],
  [
    3,
    "arrayops",
    "A heterogeneous array is one in which:",
    [
      "Elements need not be of the same type",
      "All elements are integers",
      "Rows have different lengths",
      "Elements are indexed by keys"
    ],
    "غير المتجانسة: العناصر أنواع مختلفة.",
    "Elements need not share a type.",
    1,
    0
  ],
  [
    3,
    "arrayops",
    "Which languages support heterogeneous arrays?",
    [
      "Perl, Python, JavaScript, Ruby",
      "C, C++",
      "Java, C#",
      "Fortran, COBOL"
    ],
    "Perl وPython وJavaScript وRuby.",
    "Perl, Python, JavaScript, Ruby.",
    1,
    0
  ],
  [
    3,
    "arrayops",
    "Which language provides the most powerful array processing operations?",
    [
      "APL",
      "C",
      "COBOL",
      "Java"
    ],
    "APL أقوى لغة في عمليات المصفوفات.",
    "APL.",
    1,
    0
  ],
  [
    3,
    "arrayops",
    "Python's array assignments are:",
    [
      "Only reference changes",
      "Deep copies",
      "Illegal",
      "Compile-time only"
    ],
    "الإسناد في Python تغيير مرجع بس.",
    "Only reference changes.",
    0,
    0
  ],
  [
    3,
    "arrayops",
    "A rectangular array is:",
    [
      "A multi-dimensioned array where all rows have the same number of elements and all columns too",
      "An array with rows of varying length",
      "An associative array",
      "A record"
    ],
    "المستطيلة: كل الصفوف والأعمدة نفس العدد.",
    "All rows and columns have equal sizes.",
    1,
    0
  ],
  [
    3,
    "arrayops",
    "A jagged matrix has:",
    [
      "Rows with varying number of elements",
      "All rows equal",
      "No rows",
      "Only one column"
    ],
    "المتعرجة: الصفوف تختلف بالطول.",
    "Rows of varying lengths.",
    1,
    0
  ],
  [
    3,
    "arrayops",
    "Which languages support both rectangular and jagged arrays?",
    [
      "F# and C#",
      "C and C++",
      "Java only",
      "Fortran only"
    ],
    "F# وC# تدعم الاثنين.",
    "F# and C#.",
    0,
    0
  ],
  [
    3,
    "arrayops",
    "A slice is:",
    [
      "Some substructure of an array; nothing more than a referencing mechanism",
      "A copy of the whole array",
      "A record field",
      "A key"
    ],
    "الـ slice جزء من المصفوفة ومجرد آلية مرجعية.",
    "A substructure; a referencing mechanism.",
    0,
    0
  ],
  [
    3,
    "arrayops",
    "Slices are only useful in languages that have:",
    [
      "Array operations",
      "Pointers",
      "Records",
      "Exceptions"
    ],
    "مفيدة بس في اللغات اللي فيها عمليات مصفوفات.",
    "Languages with array operations.",
    0,
    0
  ],
  [
    3,
    "arrayops",
    "In Ruby, list.slice(2, 2) returns:",
    [
      "The third and fourth elements",
      "The second element twice",
      "The first two elements",
      "Elements 2 to 4"
    ],
    "يبدأ من الفهرس 2 (الثالث) وياخذ عنصرين.",
    "Starting at index 2 (third), two elements.",
    0,
    0
  ],
  [
    3,
    "arrayops",
    "For mat = [[1,2,3],[4,5,6],[7,8,9]], mat[0][0:2] is:",
    [
      "[1, 2]",
      "[1, 2, 3]",
      "[1, 4]",
      "[4, 5]"
    ],
    "الصف الأول، أول عنصرين: [1, 2].",
    "First row, first two elements: [1, 2].",
    0,
    0
  ],
  [
    3,
    "arrayimpl",
    "An access function:",
    [
      "Maps subscript expressions to an address in the array",
      "Checks types",
      "Allocates heap memory",
      "Expands macros"
    ],
    "دالة الوصول تحول الفهرس لعنوان.",
    "It maps subscripts to addresses.",
    1,
    0
  ],
  [
    3,
    "arrayimpl",
    "For single-dimensioned arrays, address(list[k]) =",
    [
      "address(list[lower_bound]) + (k − lower_bound) × element_size",
      "address(list[0]) × k",
      "k × element_size − lower_bound",
      "address(list[k−1]) + 1"
    ],
    "المعادلة: الأساس + (k − الحد الأدنى) × الحجم.",
    "Base + (k − lb) × element_size.",
    1,
    0
  ],
  [
    3,
    "arrayimpl",
    "Which storage order is used in most languages?",
    [
      "Row major order",
      "Column major order",
      "Random order",
      "Key order"
    ],
    "أغلب اللغات بالصفوف.",
    "Row major.",
    1,
    0
  ],
  [
    3,
    "arrayimpl",
    "Which language uses column major order?",
    [
      "Fortran",
      "C",
      "Java",
      "Python"
    ],
    "Fortran بالأعمدة.",
    "Fortran.",
    1,
    0
  ],
  [
    3,
    "arrayimpl",
    "In row-major order, location(a[i, j]) uses n which is:",
    [
      "The number of elements per row (number of columns)",
      "The number of rows",
      "The element size",
      "The lower bound"
    ],
    "n عدد العناصر في كل صف (الأعمدة).",
    "n is the number of columns.",
    1,
    0
  ],
  [
    3,
    "arrayimpl",
    "list starts at address 1000, lower bound 0, element size 4. Address of list[5]?",
    [
      "1020",
      "1005",
      "1024",
      "1016"
    ],
    "1000 + (5 − 0) × 4 = 1020.",
    "1000 + 5×4 = 1020.",
    1,
    0
  ],
  [
    3,
    "arrayimpl",
    "a has 3 rows and 4 columns, row-major, lower bounds 0, base 2000, element size 2. Address of a[2, 1]?",
    [
      "2018",
      "2014",
      "2010",
      "2022"
    ],
    "(2 × 4 + 1) × 2 = 18، فالعنوان 2000 + 18 = 2018.",
    "(2×4 + 1)×2 = 18 → 2018.",
    0,
    0
  ],
  [
    3,
    "assoc",
    "An associative array is:",
    [
      "An unordered collection of data elements indexed by keys",
      "An ordered homogeneous aggregate",
      "A record",
      "A slice"
    ],
    "الترابطية: غير مرتبة وتتفهرس بالمفاتيح.",
    "Unordered, indexed by keys.",
    0,
    0
  ],
  [
    3,
    "assoc",
    "In associative arrays, user-defined keys:",
    [
      "Must be stored",
      "Are never stored",
      "Are always integers",
      "Are computed by the compiler"
    ],
    "المفاتيح لازم تتخزن.",
    "Keys must be stored.",
    0,
    0
  ],
  [
    3,
    "assoc",
    "Associative arrays are a built-in type in:",
    [
      "Perl, Python, Ruby, Swift",
      "C and C++",
      "Fortran and COBOL",
      "Ada only"
    ],
    "Perl وPython وRuby وSwift.",
    "Perl, Python, Ruby, Swift.",
    0,
    0
  ],
  [
    3,
    "assoc",
    "In Perl, associative array names begin with:",
    [
      "%",
      "$",
      "@",
      "#"
    ],
    "في Perl الاسم يبدأ بـ %.",
    "They begin with %.",
    0,
    0
  ],
  [
    3,
    "assoc",
    "In Perl, how do you remove an element from an associative array?",
    [
      "delete $hi_temps{\"Tue\"};",
      "remove hi_temps[Tue];",
      "$hi_temps{\"Tue\"} = null;",
      "free(%hi_temps);"
    ],
    "الحذف بـ delete.",
    "Use delete.",
    0,
    0
  ],
  [
    3,
    "assoc",
    "In Perl, $hi_temps{\"Wed\"} = 83; uses:",
    [
      "Braces and a key for subscripting",
      "Parentheses and an index",
      "Brackets and a position",
      "Dot notation"
    ],
    "الوصول بأقواس معكوفة ومفتاح.",
    "Braces and a key.",
    0,
    0
  ],
  [
    3,
    "records",
    "A record is:",
    [
      "A possibly heterogeneous aggregate whose elements are identified by names",
      "A homogeneous aggregate identified by position",
      "An unordered collection indexed by keys",
      "A primitive type"
    ],
    "السجل: ممكن غير متجانس وعناصره بالأسماء.",
    "A record: heterogeneous, elements identified by names.",
    1,
    0
  ],
  [
    3,
    "records",
    "COBOL shows nested records using:",
    [
      "Level numbers",
      "Dot notation",
      "Brackets",
      "Keys"
    ],
    "COBOL تستخدم أرقام مستويات.",
    "Level numbers.",
    1,
    0
  ],
  [
    3,
    "records",
    "Most languages (other than COBOL) reference record fields using:",
    [
      "Dot notation",
      "OF keyword",
      "Level numbers",
      "Parentheses"
    ],
    "الباقي بالنقطة.",
    "Dot notation.",
    1,
    0
  ],
  [
    3,
    "records",
    "A reference that includes all record names is:",
    [
      "Fully qualified",
      "Elliptical",
      "Ambiguous",
      "Associative"
    ],
    "الكامل يذكر كل الأسماء.",
    "Fully qualified.",
    1,
    0
  ],
  [
    3,
    "records",
    "Elliptical references:",
    [
      "Leave out record names as long as the reference is unambiguous",
      "Include all record names",
      "Are illegal in COBOL",
      "Use keys"
    ],
    "المختصر يحذف أسماء بشرط ما فيه غموض، وCOBOL تسمح فيه.",
    "Elliptical references omit names if unambiguous (allowed in COBOL).",
    1,
    0
  ],
  [
    3,
    "records",
    "Records are used when the collection of data values is:",
    [
      "Heterogeneous",
      "Homogeneous",
      "Unordered",
      "Infinite"
    ],
    "السجلات للبيانات غير المتجانسة.",
    "Heterogeneous.",
    1,
    0
  ],
  [
    3,
    "records",
    "Why is access to array elements much slower than access to record fields?",
    [
      "Subscripts are dynamic while field names are static",
      "Records are stored in the CPU",
      "Arrays have no addresses",
      "Records use keys"
    ],
    "لأن الفهارس ديناميكية وأسماء الحقول ثابتة.",
    "Subscripts are dynamic; field names are static.",
    0,
    0
  ],
  [
    3,
    "records",
    "Records are implemented by associating each field with:",
    [
      "An offset address relative to the beginning of the record",
      "A key",
      "A run-time descriptor only",
      "A hash"
    ],
    "كل حقل له إزاحة من بداية السجل.",
    "An offset from the record's beginning.",
    0,
    0
  ],
  [
    3,
    "records",
    "In COBOL, FIRST, FIRST OF EMP-NAME and FIRST OF EMP-REC are:",
    [
      "Elliptical references to the employee's first name",
      "Three different fields",
      "Errors",
      "Array subscripts"
    ],
    "كلها وصول مختصر لنفس الحقل.",
    "Elliptical references to the same field.",
    0,
    0
  ]
];

export const PL_DOCS = {
  "spec": "<p><strong>Objective:</strong><br />\nStudents will research a programming language of their choice (excluding Java) and demonstrate understanding of the language’s design, grammar, syntax, and semantics. They will critically evaluate it using the criteria from Sebesta’s “Concepts of Programming Languages”, with evidence from code they have personally run, and a clear description of the tools used.</p>\n<h4><strong>Key Rules</strong></h4>\n<ul>\n<li><blockquote>\n<p>Java is not allowed.</p>\n</blockquote></li>\n<li><blockquote>\n<p>You must demonstrate your understanding of the chosen language (explain concepts in your own words, justify claims, and correctly use terminology).</p>\n</blockquote></li>\n<li><blockquote>\n<p>You must discuss the language’s grammar, syntax, and semantics (<em>see Section 3</em>).</p>\n</blockquote></li>\n<li><blockquote>\n<p>You must run code examples yourself and document exactly how you ran them (compiler/interpreter, IDE/editor, OS, version numbers, commands).</p>\n</blockquote></li>\n</ul>\n<h4><strong>Deliverables</strong></h4>\n<ul>\n<li><blockquote>\n<p><strong>Report</strong> (2,500–3,500 words or even more is OK), in PDF-format.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Code</strong> <strong>appendix</strong>: short, self-contained examples you have run (max 200 lines total).</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Reproducibility</strong> <strong>notes</strong> subsection detailing tools and steps used to run code.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Bibliography</strong> with properly formatted references (APA or IEEE).</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Presentation</strong>: 2–5 minutes video-recorded presentation.</p>\n</blockquote></li>\n</ul>\n<h4><strong>Timeline</strong></h4>\n<ul>\n<li><blockquote>\n<p>Final report &amp; video presentation due: <strong>Before 12:00 am on Saturday of Week 17</strong>.</p>\n</blockquote></li>\n</ul>\n<h4><strong>Language Selection Guidance</strong></h4>\n<ul>\n<li><blockquote>\n<p>Choose any general-purpose or domain-specific language except Java (e.g., Python, Rust, Haskell, Go, Swift, Kotlin, C, C++, C#, Scala, Elixir, Julia, R, SQL, Prolog, OCaml, TypeScript, Zig).</p>\n</blockquote></li>\n<li><blockquote>\n<p>Pick a language you can install and execute locally (or in a container/online REPL) so you can run examples.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Pick a language with which you are not familiar to maximise the learning benefits from this report project.</p>\n</blockquote></li>\n</ul>\n<h4><strong>Report Structure and Required Sections</strong></h4>\n<h5>1. Executive Summary (150–250 words)</h5>\n<ul>\n<li><p>State the language, context (creator, year, paradigm), headline strengths/weaknesses, and your overall judgement.</p></li>\n</ul>\n<h5>2. Introduction and Background</h5>\n<ul>\n<li><blockquote>\n<p><strong>History</strong>: origin, key designers, release timeline, major versions.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Paradigms</strong> and <strong>primary</strong> <strong>use</strong> <strong>cases</strong>.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Design</strong> <strong>goals</strong> (e.g., safety, performance, simplicity, concurrency, portability).</p>\n</blockquote></li>\n</ul>\n<h5>3. Language Grammar, Syntax, and Semantics</h5>\n<ul>\n<li><p><strong>Grammar</strong>: describe the language’s formal grammar or its approach (e.g., BNF/EBNF in official specs, parser combinators, LL/LR parsing, precedence rules). Include a small grammar excerpt or reference to the official grammar and explain it in plain terms.</p></li>\n<li><p><strong>Syntax</strong>: explain how programs are written (lexical rules, identifiers, literals, keywords, operator precedence, statement forms, block structure, indentation/braces). Provide short examples.</p></li>\n<li><p><strong>Semantics</strong>: describe meaning of programs and constructs (static vs dynamic semantics, type system rules and constraints, evaluation strategy, scoping, binding, parameter passing, memory model, concurrency semantics). Include at least one example that highlights a semantic rule (e.g., variable shadowing, borrow checker behaviour, lazy evaluation).</p></li>\n<li><p>Clearly demonstrate your understanding by paraphrasing concepts and correctly using terminology.</p></li>\n</ul>\n<h5>4. Language Overview</h5>\n<ul>\n<li><blockquote>\n<p><strong>Core</strong> <strong>features</strong>: type system, control structures, data abstractions, modularity, concurrency model, memory management.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Ecosystem</strong>: compiler/interpreter(s), standard library, package manager, tooling (IDE support, linters, formatters), community and governance.</p>\n</blockquote></li>\n</ul>\n<h5>5. Language Evaluation</h5>\n<p>Use Sebesta’s criteria and for each criterion, explain, provide evidence/examples (code snippets you have run), and assess trade-offs. Where applicable, compare with at least one contrasting language.</p>\n<ul>\n<li><p><strong>Readability</strong></p>\n<ul>\n<li><p>Simplicity, orthogonality, data types, syntax design.</p></li>\n<li><p><em>Example</em>: an idiomatic program with commentary.</p></li>\n</ul></li>\n<li><p><strong>Writability</strong></p>\n<ul>\n<li><p>Expressivity, abstraction support, modularity, convenience features.</p></li>\n<li><p><em>Example</em>: implement a simple task two ways and discuss brevity/clarity.</p></li>\n</ul></li>\n<li><p><strong>Reliability</strong></p>\n<ul>\n<li><p>Type checking, error handling, memory safety, aliasing, concurrency safety.</p></li>\n<li><p><em>Example</em>: show error handling and discuss common pitfalls.</p></li>\n</ul></li>\n<li><p><strong>Cost</strong></p>\n<ul>\n<li><p>Learning curve, productivity, performance, maintenance, deployment/operational costs.</p></li>\n</ul></li>\n<li><p><strong>Efficiency/Performance</strong></p>\n<ul>\n<li><p>Compile-time vs run-time efficiency; include small measurements where possible.</p></li>\n</ul></li>\n<li><p><strong>Portability</strong></p>\n<ul>\n<li><p>Platform support, cross-compilation, VM/runtime portability, standardisation.</p></li>\n</ul></li>\n<li><p><strong>Generality</strong></p>\n<ul>\n<li><p>Breadth of application domains; limitations/specialisation.</p></li>\n</ul></li>\n<li><p><strong>Safety</strong> <strong>and</strong> <strong>Security</strong></p>\n<ul>\n<li><p>Features preventing vulnerabilities; common pitfalls; security tooling.</p></li>\n</ul></li>\n<li><p><strong>Support for Software Engineering</strong></p>\n<ul>\n<li><p>Encapsulation, testing, build/dependency management, documentation, versioning.</p></li>\n</ul></li>\n<li><p><strong>Maintainability</strong></p>\n<ul>\n<li><p>Stability, backward compatibility, readability, refactoring support.</p></li>\n</ul></li>\n</ul>\n<h5>6. Case Study or Mini Project</h5>\n<ul>\n<li><blockquote>\n<p>Implement a small program (e.g., CLI tool, data processing script, simple web/service component).</p>\n</blockquote></li>\n<li><blockquote>\n<p>Explain design choices and language idioms.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Include performance or reliability observations if relevant.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Provide clear instructions to run the code (<em>see Section 7</em>).</p>\n</blockquote></li>\n</ul>\n<h5>7. Reproducibility Notes</h5>\n<p>Tools and How You Ran the Code</p>\n<ul>\n<li><p>Document exactly how you executed all examples:</p>\n<ul>\n<li><p>Operating system and version.</p></li>\n<li><p>Language version, compiler/interpreter name and version (e.g., rustc 1.80, Python 3.12).</p></li>\n<li><p>Toolchain details (e.g., cargo, pip, npm, stack, cabal, dotnet, gcc/clang).</p></li>\n<li><p>IDE/editor and extensions used (e.g., VS Code + specific plugins).</p></li>\n<li><p>Commands used to build/run/test (include command lines).</p></li>\n<li><p>Any configuration files (e.g., Cargo.toml, package.json) or environment variables.</p></li>\n</ul></li>\n<li><p>Screenshots or terminal logs are welcome in an <em>appendix</em>.</p></li>\n<li><p>If using an online REPL or container, specify URL/image and steps.</p></li>\n</ul>\n<h5>8. Discussion: Trade-offs and Design Philosophy</h5>\n<ul>\n<li><blockquote>\n<p>Identify explicit trade-offs (e.g., performance vs safety).</p>\n</blockquote></li>\n<li><blockquote>\n<p>Reflect on how philosophy manifests in daily use.</p>\n</blockquote></li>\n</ul>\n<h5>Conclusion</h5>\n<ul>\n<li><p>Summarise findings and state who the language suits and why.</p></li>\n</ul>\n<h5>References</h5>\n<ul>\n<li><blockquote>\n<p>Include textbooks (Sebesta), official language docs, reputable articles, and academic sources.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Cite all benchmarks and historical facts.</p>\n</blockquote></li>\n</ul>\n<h4><strong>Marking Rubric (100 marks)</strong></h4>\n<ul>\n<li><p>Understanding demonstrated of chosen language (15 marks)</p>\n<ul>\n<li><p>Accurate explanations of grammar, syntax, and semantics.</p></li>\n<li><p>Correct use of terminology and coherent reasoning.</p></li>\n</ul></li>\n<li><p>Application of Sebesta’s criteria (25 marks)</p></li>\n<li><p>Depth and accuracy of technical analysis (15 marks)</p></li>\n<li><p>Use of evidence: runnable code, citations, measurements (20 marks)</p></li>\n<li><p>Clarity, organisation, and writing quality (15 marks)</p></li>\n<li><p>Case study quality and insight (10 marks)</p></li>\n</ul>\n<h4><strong>Formatting and Submission</strong></h4>\n<ul>\n<li><p>PDF, 11–12 pt serif or sans-serif font, 1.5 line spacing, clear headings.</p></li>\n<li><p>Code snippets in monospaced font inside code blocks.</p></li>\n<li><p>Diagrams and tables are encouraged; label clearly.</p></li>\n<li><p>Submit via the Blackboard by 11:59 pm on the due date.</p></li>\n<li><p>File name: <strong>CS3713T-Report-Surname-Language.pdf</strong>.</p></li>\n</ul>\n<h4><strong>Academic Integrity</strong></h4>\n<ul>\n<li><blockquote>\n<p>Write in your own words. Cite all sources.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Plagiarism, excessive AI-generated content without proper human editing, or unreferenced material will be penalised.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Code must be genuinely executed by you; include reproducibility notes.</p>\n</blockquote></li>\n</ul>\n<h4><strong>Assessment Tips</strong></h4>\n<ul>\n<li><blockquote>\n<p>Tie each evaluation point to Sebesta’s definitions; avoid vague claims.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Keep examples small and runnable; show commands or IDE steps.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Compare with at least one other language to illustrate trade-offs.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Quantify where possible (compile time, runtime, memory, lines of code).</p>\n</blockquote></li>\n<li><blockquote>\n<p>Use the official grammar/spec as an anchor for syntax/semantics, paraphrased in your own words.</p>\n</blockquote></li>\n</ul>\n",
  "rubric": "<p><strong>CS3713T Programming Language Evaluation Report (Academic Rubric)</strong></p>\n<p><strong>Purpose</strong>:<br />\nAssess the student’s ability to research a programming language (excluding Java), demonstrate understanding of its grammar, syntax, and semantics, and evaluate it using Sebesta’s criteria with evidence from personally executed code.</p>\n<p><strong>Criteria and Performance Levels</strong></p>\n<ol type=\"1\">\n<li><blockquote>\n<p><strong>Demonstrated Understanding of the Chosen Language</strong></p>\n</blockquote></li>\n</ol>\n<ul>\n<li><blockquote>\n<p><strong>Excellent</strong>: Shows deep, accurate understanding. Explains concepts in own words with precise terminology. Clear grasp of paradigms, core features, and typical idioms. Correctly identifies design goals and trade-offs with nuanced reasoning.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Good</strong>: Mostly accurate and clear. Minor terminology slips or superficial areas. Reasoning is sound with occasional gaps.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Satisfactory</strong>: Basic understanding with noticeable gaps. Some definitions paraphrased correctly; occasional inaccuracies or vague statements.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Limited</strong>: Fragmented understanding; several inaccuracies. Overreliance on quotations or generic claims.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Poor</strong>: Misconceptions; fails to demonstrate understanding.</p>\n</blockquote></li>\n</ul>\n<ol start=\"2\" type=\"1\">\n<li><blockquote>\n<p><strong>Grammar, Syntax, and Semantics</strong></p>\n</blockquote></li>\n</ol>\n<ul>\n<li><blockquote>\n<p><strong>Excellent</strong>: Provides a coherent account of the formal grammar or authoritative grammar reference (e.g., EBNF), explains lexical rules, structure, and precedence. Semantics are clearly described (static vs dynamic semantics, typing, scoping/binding, evaluation strategy, parameter passing, memory model, concurrency semantics). Includes concise, correct examples that illustrate specific grammar and semantic rules; explains parser or specification context where relevant.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Good</strong>: Covers most elements with accurate examples; minor omissions (e.g., limited detail on precedence or binding) but overall strong.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Satisfactory</strong>: Covers syntax well; grammar/semantics superficially or partially treated. Examples exist but weakly tied to rules.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Limited</strong>: Minimal grammar or semantics; mostly lists syntax without explanatory depth; examples are sparse or flawed.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Poor</strong>: Incorrect or missing treatment of grammar/syntax/semantics.</p>\n</blockquote></li>\n</ul>\n<ol start=\"3\" type=\"1\">\n<li><blockquote>\n<p><strong>Application of Sebesta’s Evaluation Criteria</strong></p>\n</blockquote></li>\n</ol>\n<ul>\n<li><blockquote>\n<p><strong>Excellent</strong>: Systematically applies readability, writability, reliability, cost, efficiency/performance, portability, generality, safety/security, support for software engineering, and maintainability. Each criterion is supported by specific evidence, code or references, and thoughtful comparisons/trade-offs. Aligns clearly with Sebesta’s definitions.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Good</strong>: Applies most criteria with solid evidence and some comparison; minor gaps or uneven depth.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Satisfactory</strong>: Applies several criteria; limited evidence or weak linkage to Sebesta’s definitions; minimal comparison.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Limited</strong>: Superficial application; primarily descriptive with few links to criteria; scarce evidence.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Poor</strong>: Little or no use of Sebesta’s framework.</p>\n</blockquote></li>\n</ul>\n<ol start=\"4\" type=\"1\">\n<li><blockquote>\n<p><strong>Runnable Code and Reproducibility</strong></p>\n</blockquote></li>\n</ol>\n<ul>\n<li><blockquote>\n<p><strong>Excellent</strong>: Provides small, clean, runnable examples. Documents exact environment and steps (OS, versions, compiler/interpreter, toolchain, IDE/editor, commands). Includes configuration files or snippets where relevant. Evidence of execution (logs or screenshots) and any measurements are reproducible.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Good</strong>: Examples are runnable; reproducibility notes cover most details; minor omissions (e.g., missing version numbers) but replicable.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Satisfactory</strong>: Examples plausible but incomplete documentation; replication likely but may require guesswork.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Limited</strong>: Examples unclear or not evidently run; sparse tool details; replication uncertain.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Poor</strong>: No proof of execution; missing or incorrect tooling information.</p>\n</blockquote></li>\n</ul>\n<ol start=\"5\" type=\"1\">\n<li><blockquote>\n<p><strong>Technical Accuracy and Use of Evidence</strong></p>\n</blockquote></li>\n</ol>\n<ul>\n<li><blockquote>\n<p><strong>Excellent</strong>: Claims are accurate, supported by credible sources (official docs, textbooks, academic papers) and/or measurements. Benchmarks or micro-experiments include methodology and context; historical facts correctly cited.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Good</strong>: Mostly accurate; minor unsubstantiated claims; sources generally strong.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Satisfactory</strong>: Some inaccuracies or generalisations; limited sourcing; measurements lack context.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Limited</strong>: Several errors; weak or non-credible sources; anecdotal evidence.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Poor</strong>: Frequent inaccuracies; unsourced assertions.</p>\n</blockquote></li>\n</ul>\n<ol start=\"6\" type=\"1\">\n<li><blockquote>\n<p><strong>Organisation, Clarity, and Academic Writing</strong></p>\n</blockquote></li>\n</ol>\n<ul>\n<li><blockquote>\n<p><strong>Excellent</strong>: Clear structure aligned to specification; logical flow; concise, precise prose; consistent terminology; figures/tables/code blocks well formatted; correct referencing (APA or IEEE).</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Good</strong>: Well organised; minor clarity issues; mostly consistent formatting and references.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Satisfactory</strong>: Adequate structure; some redundancy or unclear passages; formatting inconsistencies; referencing errors.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Limited</strong>: Disorganised; unclear writing; poor formatting; weak referencing.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Poor</strong>: Very unclear; non-compliant formatting; missing references.</p>\n</blockquote></li>\n</ul>\n<ol start=\"7\" type=\"1\">\n<li><blockquote>\n<p><strong>Case Study or Mini Project Quality</strong></p>\n</blockquote></li>\n</ol>\n<ul>\n<li><blockquote>\n<p><strong>Excellent</strong>: Well-chosen task demonstrating idiomatic use and language features; insightful reflection on design choices and how features influenced the solution.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Good</strong>: Appropriate task; shows features; some reflection.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Satisfactory</strong>: Basic task; limited insight.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Limited</strong>: Minimal relevance; superficial treatment.</p>\n</blockquote></li>\n<li><blockquote>\n<p><strong>Poor</strong>: Missing or not fit for purpose.</p>\n</blockquote></li>\n</ul>\n<p><strong>Compliance Checks (deductions)</strong></p>\n<ul>\n<li><blockquote>\n<p>Java selected: automatic fail or resubmission required (department policy to set).</p>\n</blockquote></li>\n<li><blockquote>\n<p>Missing reproducibility notes: up to −10.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Word count substantially below minimum or above maximum: −5.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Late submission: follow departmental policy (e.g., −10% per day).</p>\n</blockquote></li>\n<li><blockquote>\n<p>Academic integrity violations: penalties per university regulations (may include zero).</p>\n</blockquote></li>\n</ul>\n<p><strong>Markers’ Checklist</strong></p>\n<ul>\n<li><blockquote>\n<p>Excludes Java.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Demonstrates understanding in own words with accurate terminology.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Covers grammar (with spec or formal reference), syntax, and semantics, with examples.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Applies Sebesta’s criteria with evidence and comparisons.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Includes runnable code and complete reproducibility details (OS, versions, tools, commands).</p>\n</blockquote></li>\n<li><blockquote>\n<p>Uses credible sources; all facts/benchmarks cited.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Clear, well-structured report; proper formatting and references.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Case study present with insight.</p>\n</blockquote></li>\n</ul>\n<p><strong>Notes for Students</strong></p>\n<ul>\n<li><blockquote>\n<p>Anchor explanations to official language specifications for grammar and semantics; paraphrase, don’t copy.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Keep code examples small, runnable, and directly linked to points you make.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Quantify where possible and state methodology (versions, flags, hardware).</p>\n</blockquote></li>\n<li><blockquote>\n<p>Compare with at least one contrasting language to highlight trade-offs.</p>\n</blockquote></li>\n<li><blockquote>\n<p>Check all commands and version numbers before submission.</p>\n</blockquote></li>\n</ul>\n",
  "check": "<p><strong>CS3713T Programming Language Evaluation Report (Student Checklist)</strong></p>\n<p>Use this checklist before submitting your report. Tick each item when done. If you cannot tick an item, fix it before submission.</p>\n<p><strong>Language selection</strong></p>\n<blockquote>\n<p>☐ I did not choose Java.</p>\n<p>☐ I can install and run the language locally or in a container/online REPL.</p>\n</blockquote>\n<p><strong>Understanding and coverage</strong></p>\n<blockquote>\n<p>☐ I explained the language in my own words, using correct terminology.</p>\n<p>☐ I identified the language’s paradigms, typical idioms, and design goals.</p>\n<p>☐ I discussed key trade-offs (e.g., performance vs safety) with clear reasoning.</p>\n</blockquote>\n<p><strong>Grammar, syntax, semantics</strong></p>\n<blockquote>\n<p>☐ I referenced the official grammar/specification (e.g., BNF/EBNF or equivalent) or a reputable source.</p>\n<p>☐ I included a small grammar excerpt or clearly explained the grammar approach.</p>\n<p>☐ Syntax: I covered lexical rules, identifiers, literals, keywords, operator precedence, statements, and block structure.</p>\n<p>☐ Semantics: I covered typing (static/dynamic, generics), scoping and binding, evaluation strategy, parameter passing, memory model/management, and any concurrency semantics.</p>\n<p>☐ I provided short code examples that directly illustrate grammar/syntax/semantic points.</p>\n<p>☐ My explanations show I understand these concepts (not copied text).</p>\n</blockquote>\n<p><strong>Sebesta’s evaluation criteria for each criterion below, I included explanation, evidence, and at least one comparison where useful:</strong></p>\n<blockquote>\n<p>☐ Readability: simplicity, orthogonality, data types, syntax design, with example.</p>\n<p>☐ Writability: expressivity, abstraction support, modularity, convenience features, with example.</p>\n<p>☐ Reliability: type checking, error handling, memory safety, aliasing, concurrency safety, with example.</p>\n<p>☐ Cost: learning curve, productivity, performance, maintenance, deployment/operations.</p>\n<p>☐ Efficiency/Performance: compile/run-time aspects; I included small measurements or clear reasoning.</p>\n<p>☐ Portability: platforms, cross-compilation, VM/runtime portability, standardisation.</p>\n<p>☐ Generality: breadth of domains; noted limitations.</p>\n<p>☐ Safety and Security: protective features, common pitfalls, security tooling.</p>\n<p>☐ Support for Software Engineering: encapsulation, testing, build/dependency management, documentation, versioning.</p>\n<p>☐ Maintainability: stability, backward compatibility, readability, refactoring support.</p>\n</blockquote>\n<p><strong>Runnable code and reproducibility</strong></p>\n<blockquote>\n<p>☐ I wrote small, clean examples that I have actually executed.</p>\n<p>☐ I documented exactly how to run them:</p>\n<p>☐ OS and version.</p>\n<p>☐ Language version.</p>\n<p>☐ Compiler/interpreter name and version.</p>\n<p>☐ Package manager/build tools (with versions if applicable).</p>\n<p>☐ IDE/editor and relevant extensions.</p>\n<p>☐ Exact commands to build/run/test.</p>\n<p>☐ Any configuration files or environment variables.</p>\n<p>☐ I included screenshots or logs (optional) in an appendix.</p>\n<p>☐ If I used an online REPL or container, I provided the URL/image and precise steps.</p>\n</blockquote>\n<p><strong>Technical accuracy and evidence</strong></p>\n<blockquote>\n<p>☐ All factual claims are correct and cited (official docs, textbook, reputable sources).</p>\n<p>☐ Benchmarks/measurements include methodology (hardware/software versions, flags, data size).</p>\n<p>☐ Historical facts (creator, year, versions) are referenced.</p>\n<p>☐ I avoided unverified claims; comparisons are fair and justified.</p>\n</blockquote>\n<p><strong>Case study or mini project</strong></p>\n<blockquote>\n<p>☐ I implemented a small but meaningful program that showcases language features/idioms.</p>\n<p>☐ I explained design choices and how language features influenced the solution.</p>\n<p>☐ I provided clear run instructions and, where relevant, observations on performance or reliability.</p>\n</blockquote>\n<p><strong>Organisation and writing</strong></p>\n<blockquote>\n<p>☐ My report follows the required structure and headings.</p>\n<p>☐ Writing is clear, concise, and coherent; terminology is consistent.</p>\n<p>☐ Code blocks are formatted with monospaced font and triple backticks.</p>\n<p>☐ Figures/diagrams are labelled and referenced in the text.</p>\n<p>☐ References are complete and correctly formatted (APA or IEEE).</p>\n</blockquote>\n<p><strong>Formatting and submission</strong></p>\n<blockquote>\n<p>☐ Word count is between 2,500 and 3,500 or even more.</p>\n<p>☐ File is a PDF.</p>\n<p>☐ File name follows: CS3713T_Report_Surname_Language.pdf.</p>\n<p>☐ I will submit via the VLE before 23:59 on the due date.</p>\n</blockquote>\n<p><strong>Compliance and integrity</strong></p>\n<blockquote>\n<p>☐ No prohibited language selected (Java).</p>\n<p>☐ Work is my own; all sources are cited.</p>\n<p>☐ Code was executed by me; reproducibility notes are complete.</p>\n<p>☐ I reviewed departmental policies on late submissions and academic integrity.</p>\n</blockquote>\n<p><strong>Submitter’s</strong> <strong>details</strong>: <strong>ID</strong>: ……………………… <strong>Name</strong>: ………………………………</p>\n",
  "checkItems": [
    {
      "h": "Language selection",
      "items": [
        "I did not choose Java.",
        "I can install and run the language locally or in a container/online REPL."
      ]
    },
    {
      "h": "Understanding and coverage",
      "items": [
        "I explained the language in my own words, using correct terminology.",
        "I identified the language’s paradigms, typical idioms, and design goals.",
        "I discussed key trade-offs (e.g., performance vs safety) with clear reasoning."
      ]
    },
    {
      "h": "Grammar, syntax, semantics",
      "items": [
        "I referenced the official grammar/specification (e.g., BNF/EBNF or equivalent) or a reputable source.",
        "I included a small grammar excerpt or clearly explained the grammar approach.",
        "Syntax: I covered lexical rules, identifiers, literals, keywords, operator precedence, statements, and block structure.",
        "Semantics: I covered typing (static/dynamic, generics), scoping and binding, evaluation strategy, parameter passing, memory model/management, and any concurrency semantics.",
        "I provided short code examples that directly illustrate grammar/syntax/semantic points.",
        "My explanations show I understand these concepts (not copied text)."
      ]
    },
    {
      "h": "Sebesta’s evaluation criteria for each criterion below, I included explanation, evidence, and at least one comparison where useful:",
      "items": [
        "Readability: simplicity, orthogonality, data types, syntax design, with example.",
        "Writability: expressivity, abstraction support, modularity, convenience features, with example.",
        "Reliability: type checking, error handling, memory safety, aliasing, concurrency safety, with example.",
        "Cost: learning curve, productivity, performance, maintenance, deployment/operations.",
        "Efficiency/Performance: compile/run-time aspects; I included small measurements or clear reasoning.",
        "Portability: platforms, cross-compilation, VM/runtime portability, standardisation.",
        "Generality: breadth of domains; noted limitations.",
        "Safety and Security: protective features, common pitfalls, security tooling.",
        "Support for Software Engineering: encapsulation, testing, build/dependency management, documentation, versioning.",
        "Maintainability: stability, backward compatibility, readability, refactoring support."
      ]
    },
    {
      "h": "Runnable code and reproducibility",
      "items": [
        "I wrote small, clean examples that I have actually executed.",
        "I documented exactly how to run them:",
        "OS and version.",
        "Language version.",
        "Compiler/interpreter name and version.",
        "Package manager/build tools (with versions if applicable).",
        "IDE/editor and relevant extensions.",
        "Exact commands to build/run/test.",
        "Any configuration files or environment variables.",
        "I included screenshots or logs (optional) in an appendix.",
        "If I used an online REPL or container, I provided the URL/image and precise steps."
      ]
    },
    {
      "h": "Technical accuracy and evidence",
      "items": [
        "All factual claims are correct and cited (official docs, textbook, reputable sources).",
        "Benchmarks/measurements include methodology (hardware/software versions, flags, data size).",
        "Historical facts (creator, year, versions) are referenced.",
        "I avoided unverified claims; comparisons are fair and justified."
      ]
    },
    {
      "h": "Case study or mini project",
      "items": [
        "I implemented a small but meaningful program that showcases language features/idioms.",
        "I explained design choices and how language features influenced the solution.",
        "I provided clear run instructions and, where relevant, observations on performance or reliability."
      ]
    },
    {
      "h": "Organisation and writing",
      "items": [
        "My report follows the required structure and headings.",
        "Writing is clear, concise, and coherent; terminology is consistent.",
        "Code blocks are formatted with monospaced font and triple backticks.",
        "Figures/diagrams are labelled and referenced in the text.",
        "References are complete and correctly formatted (APA or IEEE)."
      ]
    },
    {
      "h": "Formatting and submission",
      "items": [
        "Word count is between 2,500 and 3,500 or even more.",
        "File is a PDF.",
        "File name follows: CS3713T_Report_Surname_Language.pdf.",
        "I will submit via the VLE before 23:59 on the due date."
      ]
    },
    {
      "h": "Compliance and integrity",
      "items": [
        "No prohibited language selected (Java).",
        "Work is my own; all sources are cited.",
        "Code was executed by me; reproducibility notes are complete.",
        "I reviewed departmental policies on late submissions and academic integrity."
      ]
    }
  ]
};

export const CH_NAMES = {
  "1": "Preliminaries (Chapter 1)",
  "2": "Data Types – Part 1 (Chapter 6)",
  "3": "Data Types – Part 2 (Chapter 6)"
};

export const CHS = [
  1,
  2,
  3
];

export const EX = {
  "why": "تعلم مفاهيم اللغات مثل إنك تتعلم قواعد اللغة بشكل عام: بعدها أي لغة جديدة (إسباني، فرنسي) تتعلمها أسرع لأنك تعرف وش تدوّر عليه.",
  "domains": "كل مجال له عدّته: النجار يستخدم منشار، والسباك مفتاح. العلمي يبي Fortran للحسابات، والمحاسب يبي COBOL للفلوس، والذكاء الاصطناعي يبي LISP للرموز.",
  "read": "التعامد مثل قطع الليغو: قطع قليلة، وكل قطعة تركب مع أي قطعة. لو فيه قطع ما تركب مع بعض لازم تحفظ استثناءات كثير، وهذا يصعّب القراءة.",
  "write": "الـ aliasing مثل شقة لها مفتاحين عند شخصين: واحد يغيّر الأثاث والثاني يتفاجأ. عشان كذا خطير على الموثوقية.",
  "cost": "تكلفة البرنامج مثل تكلفة السيارة: مو بس سعر الشراء، فيه تدريب السواق، والبنزين (التنفيذ)، والحوادث (الموثوقية)، والصيانة. والصيانة أسهل إذا الكتيّب واضح (القراءة).",
  "influence": "عنق زجاجة فون نيومان مثل مطبخ فيه طباخ سريع جداً، بس الثلاجة في غرفة ثانية ومعه ممر ضيق: سرعة الممر هي اللي تحدد سرعة الأكل.",
  "categories": "الأمرية مثل وصفة خطوة بخطوة، والوظيفية مثل معادلات تدخل وتطلع، والمنطقية مثل قوانين («كل إنسان فاني») والكمبيوتر يستنتج.",
  "compile": "الترجمة مثل ترجمة كتاب كامل قبل ما تقراه: تاخذ وقت، بس بعدها القراءة سريعة. والمراحل: تقطيع الكلمات (lexical) ← إعراب الجمل (syntax) ← فهم المعنى (semantics) ← كتابة الترجمة.",
  "interp": "التفسير البحت مثل مترجم فوري يترجم جملة جملة: يبدأ على طول بس أبطأ. والـ JIT مثل مترجم يحفظ ترجمة الجمل اللي تتكرر عشان المرة الجاية يقولها على طول.",
  "dtintro": "نوع البيانات مثل نوع الحساب البنكي: يحدد وش يتخزن فيه (القيم) ووش تقدر تسوي فيه (العمليات).",
  "prim": "الـ float مثل مسطرة أرقامها تقريبية: تمشي للقياسات العلمية بس مو للفلوس. والـ decimal مثل عدّاد فلوس دقيق بالهللة بس ياخذ مساحة ومداه محدود.",
  "boolchar": "ASCII مثل كيبورد إنجليزي بس، وUnicode مثل كيبورد فيه كل لغات العالم.",
  "strings": "النص الثابت مثل خانة اسم في استمارة لها عدد مربعات محدد، والمحدود مثل دفتر تكتب لين نقطة النهاية، والمتغير بلا حد مثل ورق يمتد على قد ما تكتب.",
  "ordinal": "الترتيبي مثل أيام الأسبوع: تقدر ترقمها 1، 2، 3… أما الأعداد العشرية فما تقدر تقول «وش اللي بعد 1.5 مباشرة».",
  "arrays": "المصفوفة مثل صف كراسي مرقمة في قاعة: كلها كراسي (نفس النوع) وتوصل لأي كرسي برقمه.",
  "arraycat": "الساكنة مثل كراسي مثبتة في الأرض من البداية، الثابتة على الـ stack مثل كراسي تنحط وقت ما تدخل القاعة، والديناميكية مثل كراسي تضيف وتشيل منها وقت الحفلة.",
  "arrayops": "المتعرجة مثل عمارة كل دور فيه عدد شقق مختلف، والمستطيلة مثل عمارة كل الأدوار نفس عدد الشقق. والـ slice مثل إنك تأشر على جزء من الصف بدون ما تنسخه.",
  "arrayimpl": "حساب العنوان مثل رقم الشقة: الدور × عدد الشقق بالدور + رقم الشقة في الدور. هذا بالضبط row-major.",
  "assoc": "المصفوفة الترابطية مثل دليل الجوال: توصل للرقم بالاسم (المفتاح) مو بالترتيب.",
  "records": "السجل مثل بطاقة الهوية: فيها اسم (نص) وتاريخ ميلاد (رقم) وصورة، أنواع مختلفة وكل حقل له اسم."
};

export const HOT_POINTS = [
  {
    "ch": 1,
    "en": "Domains: scientific → <b>Fortran</b>; business → <b>COBOL</b>; AI → <b>LISP, Scheme, Prolog, Python</b>; systems → <b>C, C++</b>; web → HTML, PHP, Java.",
    "ar": "المجالات: العلمية Fortran، الأعمال COBOL، الذكاء الاصطناعي LISP وScheme وProlog وPython، الأنظمة C وC++، والويب HTML وPHP وJava."
  },
  {
    "ch": 1,
    "en": "Criteria: <b>readability</b> (read & understand), <b>writability</b> (create programs), <b>reliability</b> (conformance to specifications), <b>cost</b> (ultimate total cost).",
    "ar": "المعايير: القراءة (القراءة والفهم)، الكتابة (إنشاء البرامج)، الموثوقية (التوافق مع المواصفات)، والتكلفة (التكلفة الكلية)."
  },
  {
    "ch": 1,
    "en": "Readability: simplicity (minimal feature multiplicity & operator overloading), <b>orthogonality</b> (few primitives, every combination legal — ALGOL 68), data types, syntax design.",
    "ar": "القراءة: البساطة (قلة تعدد الطرق وإعادة تعريف المعاملات)، التعامد (بنى قليلة وكل تركيبة قانونية، وALGOL 68 أكثرها)، أنواع البيانات، وتصميم الصيغة."
  },
  {
    "ch": 1,
    "en": "Writability: simplicity & orthogonality, <b>abstraction</b>, <b>expressivity</b> (`counter++`). Reliability: <b>type checking</b> (compile-time), <b>exception handling</b>, <b>aliasing</b> (dangerous), readability & writability.",
    "ar": "الكتابة: البساطة والتعامد والتجريد والتعبيرية. الموثوقية: فحص الأنواع وقت الترجمة، معالجة الاستثناءات، الـ aliasing (خطير)، والقراءة والكتابة."
  },
  {
    "ch": 1,
    "en": "Cost: training, writing, executing, reliability, <b>maintenance (readability crucial)</b>. Others: <b>portability</b> (standardization), generality, well-definedness.",
    "ar": "التكلفة: التدريب والكتابة والتنفيذ والموثوقية والصيانة (القراءة أهم شي فيها). وغيرها: قابلية النقل (التوحيد القياسي)، العمومية، ووضوح التعريف."
  },
  {
    "ch": 1,
    "en": "Von Neumann → <b>imperative</b>: variables = memory cells, assignment = piping, iteration efficient. <b>Bottleneck</b> = memory–CPU connection speed. Fetch → increment → decode → execute.",
    "ar": "فون نيومان ← اللغات الأمرية: المتغيرات خانات ذاكرة، والإسناد نقل، والتكرار فعّال. وعنق الزجاجة سرعة الاتصال بين الذاكرة والمعالج. والدورة: جلب ← زيادة العداد ← فك ← تنفيذ."
  },
  {
    "ch": 1,
    "en": "Categories: imperative (C, Java, Perl, JavaScript, C++), functional (LISP, Scheme, ML, F#), logic (Prolog), markup hybrid (JSTL, XSLT). Trade-offs: Java array checks (reliability vs execution cost), APL (readability vs writability), C++ pointers (writability vs reliability).",
    "ar": "التصنيفات والموازنات الثلاث، سؤال مضمون."
  },
  {
    "ch": 1,
    "en": "Compilation: slow translation, fast execution; phases <b>lexical → syntax (parse trees) → semantics (intermediate code) → code generation</b>; load module; linking and loading.",
    "ar": "الترجمة: بطيئة بس التنفيذ سريع، والمراحل: معجمي ← نحوي (parse trees) ← دلالي (كود وسيط) ← توليد الكود."
  },
  {
    "ch": 1,
    "en": "Pure interpretation: <b>10–100× slower</b>, easy errors, more space (JavaScript, PHP). Hybrid: intermediate language (Perl, early Java <b>byte code + JVM</b>). <b>JIT = delayed compiler</b> (Java, .NET). Preprocessor: `#include`, `#define`.",
    "ar": "التفسير البحت أبطأ 10–100 مرة. الهجين لغة وسيطة (Perl وJava الأولى بالـ byte code والـ JVM). الـ JIT مترجم متأخر. والمعالج المسبق يوسع #include و#define."
  },
  {
    "ch": 2,
    "en": "Data type = objects + operations; <b>descriptor</b> = attributes of a variable; object = instance of a user-defined type. Primitive = not defined in terms of other types.",
    "ar": "النوع = كائنات + عمليات، والواصف = خصائص المتغير، والكائن = نسخة من نوع معرّف، والأولي = ما يتعرف بأنواع ثانية."
  },
  {
    "ch": 2,
    "en": "Integer (Java: byte, short, int, long); floating point = <b>approximation</b> (IEEE 754); complex (C99, Fortran, Python: `(7 + 3j)`); decimal = <b>BCD</b>, accurate but limited range & wastes memory (COBOL, C#); Boolean often a byte (readability); ASCII, UCS-2 16-bit (Java), UCS-4 32-bit (Fortran 2003).",
    "ar": "الأنواع الأولية وخصائص كل واحد."
  },
  {
    "ch": 2,
    "en": "Strings: primitive or array? static or dynamic length? Ops: assignment, comparison, catenation, slicing, pattern matching. Static (COBOL, Java String), limited dynamic (C/C++), dynamic (SNOBOL4, Perl, JavaScript). Dynamic → run-time descriptor; allocation/deallocation is the biggest problem.",
    "ar": "النصوص: أسئلة التصميم، العمليات، خيارات الطول مع أمثلتها، والتنفيذ."
  },
  {
    "ch": 2,
    "en": "Ordinal type: values map to positive integers (Java: integer, char, boolean).",
    "ar": "الترتيبي: قيمه ترتبط بالأعداد الموجبة (integer وchar وboolean في Java)."
  },
  {
    "ch": 3,
    "en": "Array = homogeneous, by position. Fortran/Ada use (); range checking: Java, ML, C# yes — C, C++, Perl, Fortran no.",
    "ar": "المصفوفة متجانسة وبالموقع. Fortran وAda بأقواس عادية، والفحص في Java وML وC# وما فيه في C وC++ وPerl وFortran."
  },
  {
    "ch": 3,
    "en": "Categories: <b>static</b> (efficiency), <b>fixed stack-dynamic</b> (space efficiency, C/C++ without static), <b>fixed heap-dynamic</b> (heap, fixed after allocation), <b>heap-dynamic</b> (flexibility: Perl, JavaScript, Python, Ruby).",
    "ar": "الأصناف الأربعة وميزة كل واحد، أكثر شي ينسأل في المحاضرة."
  },
  {
    "ch": 3,
    "en": "Heterogeneous arrays (Perl, Python, JavaScript, Ruby); APL strongest ops; rectangular vs <b>jagged</b> (C, C++, Java jagged; F#, C# both); slice = referencing mechanism.",
    "ar": "المتجانسة وغير المتجانسة، المستطيلة والمتعرجة، والـ slice."
  },
  {
    "ch": 3,
    "en": "address(list[k]) = address(list[lb]) + (k − lb) × size; row-major: base + ((i − row_lb) × n + (j − col_lb)) × size; <b>Fortran = column major</b>.",
    "ar": "معادلات العنوان، تجي مسألة حسابية أكيد. وFortran بالأعمدة."
  },
  {
    "ch": 3,
    "en": "Associative array: unordered, indexed by <b>keys</b> (Perl %, Python, Ruby, Swift). Record: heterogeneous, by <b>names</b>; COBOL level numbers & OF; dot notation; elliptical references; field access <b>faster</b> than array access; fields have offsets.",
    "ar": "الترابطية بالمفاتيح، والسجل بالأسماء، والوصول لحقل السجل أسرع من عنصر المصفوفة."
  }
];

export const PRJ_STEPS = [
  [
    "اختيار اللغة",
    "أسبوع 1",
    [
      [
        "اختر لغة (ممنوع Java) وتأكد إنك تقدر تثبتها وتشغلها على جهازك أو في REPL أونلاين",
        "الدكتور قال أي لغة ماعدا Java. المواصفات تنصح بلغة ما تعرفها عشان تستفيد أكثر."
      ],
      [
        "ثبّت اللغة وشغّل أول برنامج Hello World، وسجّل الإصدار والأمر اللي استخدمته",
        "من أول يوم ابدأ ملف «ملاحظات التشغيل» (Reproducibility notes): نظام التشغيل، الإصدار، المحرر، الأوامر."
      ],
      [
        "اجمع مصادرك: كتاب Sebesta، الوثائق الرسمية للغة، والـ grammar/spec الرسمي",
        "المراجع لازم APA أو IEEE. سجّل كل مصدر وقت ما تقراه عشان ما تضيع."
      ]
    ]
  ],
  [
    "فهم اللغة",
    "أسبوع 2",
    [
      [
        "اكتب نقاطك للتاريخ: المصمم، السنة، الإصدارات الرئيسية، النماذج (paradigms)، وأهداف التصميم",
        "هذا القسم 2 (Introduction and Background). كل حقيقة تاريخية لازم لها مرجع."
      ],
      [
        "اقرأ الـ grammar الرسمي (BNF/EBNF) وطلّع مقطع صغير تشرحه بكلامك",
        "القسم 3: مقطع grammar صغير + شرح بسيط. لا تنسخ، اشرح بأسلوبك."
      ],
      [
        "جرّب أمثلة صغيرة للـ syntax: المعرّفات، الثوابت، الكلمات المحجوزة، أولوية المعاملات، والبلوكات",
        "كل مثال لازم تشغله بنفسك وتحفظ الناتج."
      ],
      [
        "جرّب مثال واحد على الأقل يوضح قاعدة دلالية (semantics) مثل الـ shadowing أو الـ scoping أو طريقة تمرير المعاملات",
        "المطلوب صراحة: مثال يبين قاعدة semantic."
      ]
    ]
  ],
  [
    "التقييم بمعايير Sebesta",
    "أسبوع 3",
    [
      [
        "لكل معيار من العشرة: اكتب شرح + دليل (كود شغلته) + موازنة (trade-off)",
        "المعايير: Readability وWritability وReliability وCost وEfficiency وPortability وGenerality وSafety وSupport for SE وMaintainability."
      ],
      [
        "اختر لغة ثانية للمقارنة (مثلاً C أو Python) وقارن فيها في كل نقطة تقدر",
        "المواصفات تطلب مقارنة مع لغة واحدة على الأقل."
      ],
      [
        "سوّ قياس بسيط (وقت تشغيل أو ذاكرة) واكتب طريقة القياس والإصدارات والجهاز",
        "القياسات بدون منهجية تنقص الدرجة."
      ]
    ]
  ],
  [
    "المشروع المصغّر",
    "أسبوع 4",
    [
      [
        "اختر برنامج صغير يبين مزايا اللغة (أداة سطر أوامر، معالجة بيانات، خدمة بسيطة)",
        "القسم 6 (Case Study). اختار شي يستخدم أسلوب اللغة (idioms) مو مجرد ترجمة من لغة ثانية."
      ],
      [
        "اكتب الكود وشغّله وسجّل الأوامر والناتج، وخل مجموع أكواد الملحق أقل من 200 سطر",
        "ملحق الكود: أمثلة قصيرة مستقلة شغلتها بنفسك، 200 سطر بالكثير."
      ],
      [
        "اكتب لماذا صممته كذا وكيف أثرت مزايا اللغة على الحل",
        "هذا اللي يجيب درجة الـ insight في المشروع المصغر."
      ]
    ]
  ],
  [
    "كتابة التقرير",
    "أسبوع 5",
    [
      [
        "اكتب المسودة بالترتيب المطلوب (الأقسام 1–8 + الخاتمة + المراجع)",
        "التقرير 2500–3500 كلمة أو أكثر، PDF، خط 11–12، تباعد 1.5."
      ],
      [
        "اكتب الملخص التنفيذي آخر شي (150–250 كلمة)",
        "يذكر اللغة والسياق ونقاط القوة والضعف وحكمك العام."
      ],
      [
        "أكمل قسم Reproducibility: النظام، الإصدارات، الأدوات، المحرر، الأوامر، ملفات الإعداد",
        "غيابه يخصم لين 10 درجات."
      ],
      [
        "راجع إن كل كلامك بأسلوبك، وكل معلومة لها مرجع",
        "الاعتماد الزائد على الذكاء الاصطناعي بدون تحرير بشري ينخصم عليه."
      ]
    ]
  ],
  [
    "العرض والتسليم",
    "أسبوع 6",
    [
      [
        "سجّل فيديو عرض من 2 لـ 5 دقايق",
        "مطلوب ضمن التسليم."
      ],
      [
        "مرّ على قائمة التحقق (Checklist) كاملة تحت وصحّح أي شي ناقص",
        "القائمة من ملفات المادة نفسها."
      ],
      [
        "سمّ الملف CS3713T-Report-Surname-Language.pdf وسلّمه على Blackboard قبل الموعد",
        "الموعد: قبل 12:00 ص يوم السبت من الأسبوع 17 (حسب المواصفات)."
      ]
    ]
  ]
];

export const PRJ_SECTIONS = [
  [
    "1. Executive Summary",
    "الملخص التنفيذي",
    "150–250 كلمة: اسم اللغة، سياقها (المصمم، السنة، النموذج)، أهم نقاط القوة والضعف، وحكمك العام عليها."
  ],
  [
    "2. Introduction and Background",
    "المقدمة والخلفية",
    "تاريخ اللغة (الأصل، المصممين، الإصدارات الرئيسية)، النماذج البرمجية واستخداماتها، وأهداف التصميم (الأمان، الأداء، البساطة، التزامن، قابلية النقل)."
  ],
  [
    "3. Grammar, Syntax, and Semantics",
    "القواعد والصيغة والدلالة",
    "أهم قسم للفهم: <b>Grammar</b> (القواعد الرسمية BNF/EBNF أو طريقة التحليل، مع مقطع صغير وشرحه)، <b>Syntax</b> (القواعد المعجمية، المعرّفات، الثوابت، الكلمات المحجوزة، الأولوية، أشكال الجمل، البلوكات أو المسافات)، و<b>Semantics</b> (المعنى: الدلالة الثابتة والديناميكية، نظام الأنواع، طريقة التقييم، النطاق scoping، الربط binding، تمرير المعاملات، نموذج الذاكرة، والتزامن) مع مثال واحد على الأقل يبين قاعدة دلالية."
  ],
  [
    "4. Language Overview",
    "نظرة عامة على اللغة",
    "المزايا الأساسية (نظام الأنواع، جمل التحكم، تجريد البيانات، التقسيم modularity، التزامن، إدارة الذاكرة)، والبيئة المحيطة (المترجم أو المفسر، المكتبة القياسية، مدير الحزم، أدوات المحررات، والمجتمع)."
  ],
  [
    "5. Language Evaluation",
    "تقييم اللغة",
    "لكل معيار من معايير Sebesta: شرح + دليل (كود شغلته) + موازنة، ومقارنة مع لغة ثانية: القراءة، الكتابة، الموثوقية، التكلفة، الكفاءة والأداء، قابلية النقل، العمومية، الأمان، دعم هندسة البرمجيات، وقابلية الصيانة."
  ],
  [
    "6. Case Study or Mini Project",
    "دراسة حالة أو مشروع مصغّر",
    "برنامج صغير (أداة سطر أوامر، سكربت بيانات، جزء خدمة ويب)، تشرح قرارات التصميم وأسلوب اللغة، وملاحظات الأداء أو الموثوقية، وطريقة التشغيل."
  ],
  [
    "7. Reproducibility Notes",
    "ملاحظات إعادة التشغيل",
    "بالضبط كيف شغّلت كل الأمثلة: نظام التشغيل وإصداره، إصدار اللغة والمترجم، أدوات البناء (cargo، pip، npm…)، المحرر والإضافات، الأوامر، وملفات الإعداد. والصور أو سجلات الطرفية مرحب فيها."
  ],
  [
    "8. Discussion: Trade-offs and Design Philosophy",
    "النقاش: الموازنات وفلسفة التصميم",
    "الموازنات الصريحة (مثل الأداء مقابل الأمان)، وكيف تظهر فلسفة اللغة في الاستخدام اليومي."
  ],
  [
    "Conclusion",
    "الخاتمة",
    "تلخص النتائج وتقول اللغة تناسب مين وليش."
  ],
  [
    "References",
    "المراجع",
    "كتاب Sebesta، الوثائق الرسمية، مقالات موثوقة، ومصادر أكاديمية. وكل قياس أو معلومة تاريخية لازم لها مرجع."
  ]
];

export const PRJ_MARKS = [
  [
    "Understanding of the chosen language",
    "فهمك للغة (القواعد والصيغة والدلالة والمصطلحات)",
    15
  ],
  [
    "Application of Sebesta's criteria",
    "تطبيق معايير Sebesta",
    25
  ],
  [
    "Depth and accuracy of technical analysis",
    "عمق ودقة التحليل",
    15
  ],
  [
    "Use of evidence: runnable code, citations, measurements",
    "الأدلة: كود يشتغل، مراجع، قياسات",
    20
  ],
  [
    "Clarity, organisation, and writing quality",
    "الوضوح والتنظيم وجودة الكتابة",
    15
  ],
  [
    "Case study quality and insight",
    "جودة المشروع المصغر",
    10
  ]
];

export const PRJ_LANGS = [
  [
    "Python",
    "سهلة التثبيت وفيها grammar رسمي منشور (PEG)، بس لو تعرفها من قبل تستفيد أقل حسب نصيحة المواصفات."
  ],
  [
    "Go",
    "بسيطة ومواصفاتها الرسمية قصيرة وواضحة (EBNF)، وفيها تزامن مثير للتقييم."
  ],
  [
    "Rust",
    "ممتازة لنقاش الموثوقية والأمان (borrow checker) بس منحنى تعلمها أصعب."
  ],
  [
    "Kotlin",
    "قريبة من بيئة Java بس مسموحة لأنها لغة مختلفة. تأكد بنفسك إنها مقبولة عند الدكتور."
  ],
  [
    "C#",
    "مواصفات رسمية (ECMA) وتنفيذ JIT مثل اللي في المحاضرة الأولى."
  ],
  [
    "Haskell",
    "وظيفية وكسولة (lazy evaluation)، تعطيك أمثلة دلالية قوية، بس أصعب."
  ],
  [
    "Swift / TypeScript / Julia / Ruby",
    "خيارات حديثة ولها توثيق رسمي جيد."
  ]
];

export const FIGS = {
  "why": [
    [
      "img/pl_5d94_3.webp",
      "Reasons for Studying Concepts of",
      "ليش ندرس مفاهيم لغات البرمجة"
    ]
  ],
  "domains": [
    [
      "img/pl_5d94_5.webp",
      "Programming Domains",
      "مجالات البرمجة"
    ]
  ],
  "read": [
    [
      "img/pl_5d94_7.webp",
      "Evaluation Criteria: Readability",
      "معايير التقييم: سهولة القراءة"
    ],
    [
      "img/pl_5d94_8.webp",
      "Evaluation Criteria: Readability",
      "معايير التقييم: سهولة القراءة"
    ]
  ],
  "write": [
    [
      "img/pl_5d94_10.webp",
      "Evaluation Criteria: Reliability",
      "القابلية للكتابة والموثوقية"
    ],
    [
      "img/pl_5d94_9.webp",
      "Evaluation Criteria: Writability",
      "القابلية للكتابة والموثوقية"
    ]
  ],
  "cost": [
    [
      "img/pl_5d94_11.webp",
      "Evaluation Criteria: Cost",
      "التكلفة ومعايير أخرى"
    ]
  ],
  "influence": [
    [
      "img/pl_5d94_14.webp",
      "Computer Architecture Influence",
      "المؤثرات على تصميم اللغات"
    ],
    [
      "img/pl_5d94_16.webp",
      "The von Neumann Architecture",
      "المؤثرات على تصميم اللغات"
    ]
  ],
  "categories": [
    [
      "img/pl_5d94_18.webp",
      "Language Categories",
      "تصنيفات اللغات والموازنات"
    ]
  ],
  "compile": [
    [
      "img/pl_5d94_22.webp",
      "Compilation",
      "طرق التنفيذ: الترجمة"
    ]
  ],
  "interp": [
    [
      "img/pl_5d94_28.webp",
      "Hybrid Implementation Systems",
      "التفسير والهجين وJIT وبيئات البرمجة"
    ],
    [
      "img/pl_5d94_30.webp",
      "Just-in-Time Implementation Systems",
      "التفسير والهجين وJIT وبيئات البرمجة"
    ]
  ],
  "dtintro": [
    [
      "img/pl_6f95_3.webp",
      "Introduction",
      "أنواع البيانات: مقدمة"
    ]
  ],
  "prim": [
    [
      "img/pl_6f95_8.webp",
      "Primitive Data Types: Decimal",
      "الأنواع الأولية: الصحيح والعشري والمركب والـ Decimal"
    ]
  ],
  "boolchar": [
    [
      "img/pl_6f95_10.webp",
      "Primitive Data Types: Character",
      "المنطقي والحرفي"
    ]
  ],
  "strings": [
    [
      "img/pl_6f95_16.webp",
      "Character String Implementation",
      "السلاسل النصية"
    ],
    [
      "img/pl_6f95_13.webp",
      "Character String Type in Certain Languages",
      "السلاسل النصية"
    ]
  ],
  "ordinal": [
    [
      "img/pl_6f95_18.webp",
      "User-Defined Ordinal Types",
      "الأنواع الترتيبية"
    ]
  ],
  "arrays": [
    [
      "img/pl_ceab_6.webp",
      "Arrays Index (Subscript) Types",
      "المصفوفات والفهرسة"
    ]
  ],
  "arraycat": [
    [
      "img/pl_ceab_7.webp",
      "Subscript Binding & Array Categories",
      "ربط الفهارس وأصناف المصفوفات"
    ]
  ],
  "arrayops": [
    [
      "img/pl_ceab_14.webp",
      "Arrays Operations",
      "التهيئة والمتجانسة والمتعرجة والـ Slices"
    ],
    [
      "img/pl_ceab_15.webp",
      "Rectangular & Jagged Arrays",
      "التهيئة والمتجانسة والمتعرجة والـ Slices"
    ]
  ],
  "arrayimpl": [
    [
      "img/pl_ceab_18.webp",
      "Implementation of Arrays",
      "تنفيذ المصفوفات وحساب العناوين"
    ],
    [
      "img/pl_ceab_19.webp",
      "Accessing Multi-dimensioned Arrays",
      "تنفيذ المصفوفات وحساب العناوين"
    ]
  ],
  "assoc": [
    [
      "img/pl_ceab_22.webp",
      "Associative Arrays",
      "المصفوفات الترابطية"
    ]
  ],
  "records": [
    [
      "img/pl_ceab_24.webp",
      "Record Types",
      "السجلات (Records)"
    ],
    [
      "img/pl_ceab_26.webp",
      "References to Records Fields",
      "السجلات (Records)"
    ]
  ]
};
