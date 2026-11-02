// Course content. Question order is stable: saved mistakes refer to these indices.

export const TOPICS = [
  {
    "id": "products",
    "ch": 1,
    "t": "Software Products vs Custom Software",
    "ar": "المنتجات البرمجية مقابل البرمجيات المخصصة",
    "pts": [
      [
        "<b>Software products</b> are generic software systems that provide functionality that is useful to a range of customers — from large-scale business systems (MS Excel) through personal products (Evernote) to simple mobile apps and games (Sudoku).",
        "<b>المنتجات البرمجية</b> أنظمة عامة تقدم وظائف مفيدة لمجموعة من العملاء، من أنظمة الأعمال الكبيرة (Excel) للمنتجات الشخصية (Evernote) لين تطبيقات الجوال البسيطة والألعاب."
      ],
      [
        "Product engineering methods evolved from techniques that support the development of <b>one-off, custom</b> software systems. Custom systems are still important for large businesses, government and public bodies; they are developed in dedicated <b>software projects</b>.",
        "طرق هندسة المنتجات تطورت من طرق تطوير الأنظمة <b>المخصصة لمرة وحدة</b>. والأنظمة المخصصة للحين مهمة للشركات الكبيرة والحكومة، وتنبني في <b>مشاريع</b> مخصصة."
      ],
      [
        "<b>Project-based</b>: the starting point is a set of <b>software requirements</b> owned by an <b>external client</b>; a software company (the <b>contractor</b>) designs and implements the system.",
        "<b>المبني على مشروع</b>: البداية <b>متطلبات</b> يملكها <b>عميل خارجي</b>، وشركة البرمجة (<b>المقاول</b>) تصمم وتنفذ."
      ],
      [
        "In project-based development the customer may change the requirements at any time (they usually do); custom software usually has a <b>long lifetime (10 years or more)</b> and must be supported over it.",
        "العميل ممكن يغير المتطلبات بأي وقت (وغالباً يغيرها)، والبرنامج المخصص <b>عمره طويل (10 سنين أو أكثر)</b> ولازم يندعم طوال هالفترة."
      ],
      [
        "<b>Product-based</b>: the starting point is a <b>business opportunity</b> identified by individuals or a company; they develop a product to take advantage of it and sell it to customers.",
        "<b>المبني على منتج</b>: البداية <b>فرصة تجارية</b> يكتشفها أفراد أو شركة، يطورون منتج يستغلها ويبيعونه."
      ],
      [
        "In product development the <b>software company is responsible</b> for deciding the development timescale, which features to include and when the product should change; <b>rapid delivery</b> is essential to capture the market.",
        "في المنتج <b>الشركة نفسها</b> تقرر الجدول الزمني والميزات ومتى يتغير المنتج، و<b>التسليم السريع</b> أساسي عشان تكسب السوق."
      ]
    ],
    "trap": [
      "Project-based starts from <b>requirements</b> (owned by an external client); product-based starts from a <b>business opportunity</b> (the company decides features).",
      "المشروع يبدأ من <b>متطلبات عميل</b>، والمنتج يبدأ من <b>فرصة تجارية</b> والشركة تقرر الميزات."
    ],
    "idx": 0
  },
  {
    "id": "lines",
    "ch": 1,
    "t": "Product Lines, Platforms & Execution Models",
    "ar": "خطوط المنتجات والمنصات ونماذج التنفيذ",
    "pts": [
      [
        "<b>Software product line</b>: a set of software products that share a <b>common core</b>; each member includes customer-specific adaptations and additions; used to implement a custom system for a customer with specific needs. Example: emergency-services communication software adapted to each customer's radio equipment.",
        "<b>خط المنتجات</b>: مجموعة منتجات تتشارك <b>نواة مشتركة</b>، وكل واحد فيه تعديلات وإضافات للعميل، وتستخدم لعميل احتياجاته خاصة. مثال: نظام اتصالات الطوارئ يتعدل حسب أجهزة الراديو عند كل عميل."
      ],
      [
        "<b>Platform</b>: a software (or software+hardware) product that includes functionality so that <b>new applications can be built on it</b> — e.g., Facebook and \"Facebook apps\".",
        "<b>المنصة</b>: منتج فيه وظائف تخليك <b>تبني تطبيقات جديدة فوقه</b>، مثل فيسبوك وتطبيقاته."
      ],
      [
        "<b>Stand-alone</b>: the software executes entirely on the customer's computers.",
        "<b>المستقل</b>: البرنامج يشتغل كامل على جهاز العميل."
      ],
      [
        "<b>Hybrid</b>: part of the functionality is on the customer's computer, some features on the product developer's servers.",
        "<b>الهجين</b>: جزء على جهاز العميل وجزء على خوادم المطوّر."
      ],
      [
        "<b>Software service</b>: all features are implemented on the developer's servers and the customer accesses them through a <b>browser or a mobile app</b>.",
        "<b>البرنامج كخدمة</b>: كل الميزات على خوادم المطوّر، والعميل يستخدمها من <b>المتصفح أو تطبيق الجوال</b>."
      ],
      [
        "Comparable development (no external customer): <b>student projects</b>, <b>research software</b>, <b>internal tool development</b>.",
        "تطوير مشابه (بدون عميل خارجي): <b>مشاريع الطلاب</b>، <b>برمجيات البحث</b>، و<b>الأدوات الداخلية</b>."
      ]
    ],
    "trap": [
      "Product line = <b>common core</b> + customer adaptations; platform = others <b>build apps on it</b>. Service = <b>all</b> features on the vendor's servers.",
      "خط المنتجات = نواة مشتركة + تعديلات، والمنصة = غيرك يبني تطبيقات فوقها. والخدمة = <b>كل</b> شي على خوادم المطوّر."
    ],
    "idx": 1
  },
  {
    "id": "vision",
    "ch": 1,
    "t": "The Product Vision",
    "ar": "رؤية المنتج",
    "pts": [
      [
        "The starting point for product development is a <b>product vision</b>: simple statements that define the essence of the product.",
        "نقطة البداية <b>رؤية المنتج</b>: عبارات بسيطة تحدد جوهر المنتج."
      ],
      [
        "It should answer three questions: <b>What</b> is the product? <b>Who</b> are the target customers and users? <b>Why</b> should customers buy it?",
        "تجاوب 3 أسئلة: <b>وش</b> المنتج؟ <b>مين</b> العملاء والمستخدمين؟ <b>ليش</b> يشترونه؟"
      ],
      [
        "<b>Moore's vision template</b>: FOR (target customer) WHO (need or opportunity) THE (product name) IS A (product category) THAT (key benefit) UNLIKE (primary competitive alternative) OUR PRODUCT (primary differentiation).",
        "<b>قالب Moore</b>: FOR (العميل) WHO (الحاجة) THE (اسم المنتج) IS A (الفئة) THAT (الفائدة الأساسية) UNLIKE (المنافس) OUR PRODUCT (وش يميزنا)."
      ],
      [
        "Example: \"FOR a mid-sized company's marketing and sales departments WHO need basic CRM functionality, THE CRM-Innovator is a Web-based service THAT provides sales tracking… UNLIKE other services… OUR product provides very capable services at a moderate cost.\"",
        "مثال CRM-Innovator: لأقسام التسويق في الشركات المتوسطة اللي تحتاج CRM أساسي، خدمة ويب تتابع المبيعات، وتتميز بخدمات قوية بسعر معقول."
      ],
      [
        "Information sources: <b>domain experience</b> (developers work in the area and see deficiencies), <b>product experience</b> (users of existing software see simpler/better ways; new tech like speech interfaces), <b>customer experience</b> (discussions with prospective customers: problems, constraints like interoperability), <b>prototyping and \"playing around\"</b>.",
        "مصادر الرؤية: <b>خبرة المجال</b> (تشتغل فيه وتشوف النواقص)، <b>خبرة المنتجات</b> (تستخدم برامج وتشوف طريقة أحسن)، <b>خبرة العملاء</b> (نقاش مع العملاء عن مشاكلهم وقيودهم)، و<b>النماذج الأولية والتجريب</b>."
      ]
    ],
    "trap": [
      "Vision = What, Who, Why. Moore's template keywords in order: <b>FOR, WHO, THE…IS A, THAT, UNLIKE, OUR PRODUCT</b>.",
      "الرؤية = وش ومين وليش. وكلمات قالب Moore بالترتيب: FOR ثم WHO ثم THE ثم THAT ثم UNLIKE ثم OUR PRODUCT."
    ],
    "idx": 2
  },
  {
    "id": "pm",
    "ch": 1,
    "t": "Software Product Management",
    "ar": "إدارة المنتج البرمجي",
    "pts": [
      [
        "Software product management is a <b>business activity</b> focusing on the products developed and sold by the business. <b>Product managers (PMs)</b> take overall responsibility for the product: planning, development and marketing.",
        "إدارة المنتج <b>نشاط تجاري</b> يركز على المنتجات اللي تطورها وتبيعها الشركة. و<b>مدير المنتج</b> مسؤول عنه كامل: تخطيط وتطوير وتسويق."
      ],
      [
        "PMs are the <b>interface</b> between the organization, its customers and the development team; involved at all stages from conception to withdrawal; they must <b>look outward</b> to customers rather than focus on the software.",
        "مدير المنتج هو <b>الوسيط</b> بين الشركة والعملاء وفريق التطوير، من فكرة المنتج لين سحبه من السوق، ولازم <b>يطالع للخارج</b> (العملاء) مو بس البرنامج."
      ],
      [
        "Product management concerns: <b>business needs</b> (meets the company's business goals), <b>technology constraints</b> (make developers aware of technology issues important to customers), <b>customer experience</b> (regular contact with customers).",
        "اهتمامات مدير المنتج: <b>احتياجات العمل</b>، <b>قيود التقنية</b>، و<b>تجربة العميل</b>."
      ],
      [
        "Technical interactions: <b>product vision management</b> (no \"vision drift\"), <b>product roadmap development</b> (plan for development, release and marketing; PM is the ultimate authority on changes), <b>user story and scenario development</b>.",
        "التفاعلات التقنية: <b>إدارة الرؤية</b> (ما يصير انحراف عنها)، <b>خارطة الطريق</b> (خطة التطوير والإصدار والتسويق، ومدير المنتج صاحب القرار النهائي)، و<b>كتابة القصص والسيناريوهات</b>."
      ],
      [
        "<b>Product backlog creation and management</b> (prioritized to-do list), <b>acceptance testing</b> (verify a release meets the roadmap goals, efficient and reliable), <b>customer testing</b> (take a release to customers for feedback), <b>user interface design</b> (act as surrogate users).",
        "<b>إدارة الـ backlog</b> (قائمة مهام مرتبة بالأولوية)، <b>اختبار القبول</b> (الإصدار يحقق أهداف الخارطة)، <b>اختبار العملاء</b> (نعطي الإصدار للعملاء ونسمع رأيهم)، و<b>تصميم الواجهة</b> (يمثل المستخدم)."
      ]
    ],
    "trap": [
      "The PM looks <b>outward</b> to customers. The PM is the ultimate authority on <b>roadmap</b> changes.",
      "مدير المنتج يطالع <b>للخارج</b> للعملاء، وهو صاحب القرار النهائي في تغيير <b>خارطة الطريق</b>."
    ],
    "idx": 3
  },
  {
    "id": "proto",
    "ch": 1,
    "t": "Product Prototyping",
    "ar": "النماذج الأولية للمنتج",
    "pts": [
      [
        "<b>Product prototyping</b>: developing an early version of a product to test your ideas and to convince yourself and company funders that the product has real market potential.",
        "<b>النمذجة الأولية</b>: نسخة مبكرة من المنتج تختبر فيها أفكارك وتقنع نفسك والممولين إن للمنتج سوق."
      ],
      [
        "Users can only really relate to your product when they see a working version; a prototype can also identify fundamental components or services and test technology.",
        "المستخدمين ما يتفاعلون مع المنتج إلا لما يشوفون نسخة شغالة، والنموذج يساعد تحدد المكونات الأساسية وتختبر التقنية."
      ],
      [
        "Building a prototype should be the <b>first thing</b> you do; always plan to <b>throw away</b> the prototype and re-implement, taking account of security and reliability.",
        "النموذج <b>أول شي</b> تسويه، وخطط إنك <b>ترميه</b> بعدين وتعيد البناء مع مراعاة الأمان والموثوقية."
      ],
      [
        "<b>Two-stage prototyping</b>: (1) <b>feasibility demonstration</b> — an executable system showing the new ideas works and impressing funders/management; (2) <b>customer demonstration</b> — extend it with specific customer features, after doing user studies.",
        "<b>النمذجة على مرحلتين</b>: (1) <b>إثبات الجدوى</b>: نظام يشتغل يبين إن الأفكار ناجحة ويقنع الممولين، (2) <b>عرض للعملاء</b>: تضيف ميزات للعملاء بعد دراسة المستخدمين."
      ]
    ],
    "trap": [
      "The prototype is <b>thrown away</b>; feasibility demo comes <b>before</b> customer demo.",
      "النموذج <b>ينرمى</b>، وإثبات الجدوى <b>قبل</b> عرض العملاء."
    ],
    "idx": 4
  },
  {
    "id": "agile",
    "ch": 2,
    "t": "Agile Software Engineering & the Manifesto",
    "ar": "هندسة البرمجيات الرشيقة والبيان",
    "pts": [
      [
        "Products must be brought to market quickly; virtually all products are now developed using an <b>agile</b> approach: deliver functionality quickly, respond to changing specifications, minimize development overheads.",
        "المنتجات لازم تنزل السوق بسرعة، وأغلبها الحين تنبني بأسلوب <b>Agile</b>: تسليم سريع، تجاوب مع التغيير، وتقليل العبء."
      ],
      [
        "There is <b>no 'best' agile method</b>; it depends on who uses it, the team and the type of product.",
        "ما فيه طريقة Agile <b>هي الأفضل</b>، يعتمد على الفريق ونوع المنتج."
      ],
      [
        "<b>Plan-driven</b> development evolved for large, long-lifetime systems (aircraft control) with dispersed teams: detailed planning, requirements specification, modelling — but significant <b>overheads and documentation</b>, no rapid delivery.",
        "<b>المبني على الخطة</b> تطور للأنظمة الكبيرة طويلة العمر (تحكم الطائرات): تخطيط مفصل ومواصفات ونمذجة، بس فيه <b>عبء وتوثيق كثير</b> وما يسلّم بسرعة."
      ],
      [
        "Agile methods were developed in the <b>1990s</b>: focus on the software rather than its documentation, develop in a series of <b>increments</b>, reduce process bureaucracy.",
        "طرق Agile طلعت في <b>التسعينات</b>: تركز على البرنامج مو التوثيق، وتطور على <b>زيادات</b>، وتقلل البيروقراطية."
      ],
      [
        "<b>Agile manifesto</b>: individuals and interactions <b>over</b> processes and tools; working software <b>over</b> comprehensive documentation; customer collaboration <b>over</b> contract negotiation; responding to change <b>over</b> following a plan. There is value in the items on the right, but we value the items on the left more.",
        "<b>البيان الرشيق</b>: الأفراد والتفاعل <b>أهم من</b> العمليات والأدوات، البرنامج الشغال <b>أهم من</b> التوثيق الشامل، التعاون مع العميل <b>أهم من</b> التفاوض على العقد، والتجاوب مع التغيير <b>أهم من</b> اتباع الخطة. اللي يمين له قيمة، بس اللي يسار نقدّره أكثر."
      ]
    ],
    "trap": [
      "The manifesto does <b>not</b> reject documentation or plans; it values the left items <b>more</b>.",
      "البيان <b>ما يرفض</b> التوثيق والخطط، بس يقدّر اللي يسار <b>أكثر</b>."
    ],
    "idx": 5
  },
  {
    "id": "incr",
    "ch": 2,
    "t": "Incremental Development & Agile Principles",
    "ar": "التطوير التزايدي ومبادئ Agile",
    "pts": [
      [
        "All agile methods are based around <b>incremental development and delivery</b>; development focuses on <b>features</b> (a feature does something for the user); the highest-priority features are implemented first; you only define the details of the feature being implemented in an increment.",
        "كل طرق Agile مبنية على <b>التطوير والتسليم التزايدي</b>، والتركيز على <b>الميزات</b>، والأهم ينبني أول، وما تفصّل إلا الميزة اللي تشتغل عليها."
      ],
      [
        "Users or surrogate users try each increment and give feedback; then you define and implement the next feature.",
        "المستخدمين (أو من يمثلهم) يجربون كل زيادة ويعطون رأيهم، بعدين الميزة اللي بعدها."
      ],
      [
        "Increment activities: <b>choose features</b> → <b>refine feature descriptions</b> → <b>implement and test</b> (with automated tests) → <b>integrate feature and test</b> → <b>deliver system increment</b>.",
        "أنشطة الزيادة: <b>اختيار الميزات</b> ← <b>تفصيل وصفها</b> ← <b>تنفيذ واختبار</b> (اختبارات آلية) ← <b>دمج واختبار</b> ← <b>تسليم الزيادة</b>."
      ],
      [
        "Agile principles: <b>involve the customer</b> (provide and prioritize requirements, evaluate increments); <b>embrace change</b>; <b>develop and deliver incrementally</b>; <b>maintain simplicity</b>; <b>focus on people, not the development process</b> (trust the team).",
        "مبادئ Agile: <b>إشراك العميل</b>، <b>تقبّل التغيير</b>، <b>التطوير والتسليم التزايدي</b>، <b>البساطة</b>، و<b>التركيز على الناس مو العملية</b> (ثق بالفريق)."
      ]
    ],
    "trap": [
      "Five principles: involve customer, embrace change, incremental delivery, simplicity, <b>people not process</b>.",
      "المبادئ الخمسة، وآخرها: الناس أهم من العملية."
    ],
    "idx": 6
  },
  {
    "id": "xp",
    "ch": 2,
    "t": "Extreme Programming (XP)",
    "ar": "البرمجة المتطرفة XP",
    "pts": [
      [
        "XP is the most influential work that changed development culture; the name was coined by <b>Kent Beck in 1998</b> by pushing recognized good practice (e.g., iterative development) to <b>'extreme'</b> levels; it focused on <b>12</b> new techniques.",
        "XP أكثر شي غيّر ثقافة التطوير، الاسم من <b>Kent Beck سنة 1998</b> لأنه دفع الممارسات الجيدة لحدها <b>المتطرف</b>، وفيها <b>12</b> تقنية."
      ],
      [
        "XP practices: test-first development, refactoring, small releases, simple design, on-site customer, sustainable pace, pair programming, collective ownership, incremental planning, continuous integration.",
        "ممارسات XP: الاختبار أولاً، إعادة الهيكلة، إصدارات صغيرة، تصميم بسيط، عميل في الموقع، وتيرة مستدامة، البرمجة بالأزواج، الملكية الجماعية، التخطيط التزايدي، والدمج المستمر."
      ],
      [
        "Widely adopted — <b>incremental planning/user stories</b>: no grand plan; requirements written as user stories with a customer representative; stories in a release chosen by time available and priority.",
        "المنتشرة: <b>التخطيط التزايدي/قصص المستخدم</b>: ما فيه خطة كبيرة، المتطلبات قصص مع ممثل العميل، وتنختار حسب الوقت والأولوية."
      ],
      [
        "<b>Small releases</b>: the minimal useful set of functionality that provides business value is developed first; frequent releases add functionality.",
        "<b>إصدارات صغيرة</b>: أقل مجموعة مفيدة تعطي قيمة تنبني أول، والإصدارات متكررة."
      ],
      [
        "<b>Test-driven development</b>: write the tests <b>first</b>; clarifies what the code should do; an automated unit test framework runs tests after every change; new code should not break existing code.",
        "<b>التطوير الموجه بالاختبار</b>: تكتب الاختبار <b>أول</b>، يوضح وش لازم يسوي الكود، وتشتغل الاختبارات آلياً بعد كل تغيير."
      ],
      [
        "<b>Continuous integration</b>: when work on a task is complete, it is integrated into the whole system and a new version created; all unit tests run automatically and must succeed. <b>Refactoring</b>: improving structure, readability, efficiency and security of a program as soon as improvements are found.",
        "<b>الدمج المستمر</b>: أول ما تخلص مهمة تندمج وتنبني نسخة جديدة والاختبارات كلها لازم تنجح. <b>إعادة الهيكلة</b>: تحسين البنية والقراءة والكفاءة والأمان أول ما تلقى تحسين."
      ]
    ],
    "trap": [
      "XP = Kent Beck, <b>1998</b>, 12 practices. TDD writes tests <b>before</b> the code.",
      "XP من Kent Beck سنة 1998، و12 ممارسة، والـ TDD الاختبار <b>قبل</b> الكود."
    ],
    "idx": 7
  },
  {
    "id": "scrum",
    "ch": 2,
    "t": "Scrum: Terminology & Roles",
    "ar": "Scrum: المصطلحات والأدوار",
    "pts": [
      [
        "Managers need cost and time information; plan-driven gives long-term plans but plans always change. <b>Scrum</b> is an agile method that provides a framework for agile project <b>organization and planning</b>; it does <b>not mandate any specific technical practices</b>.",
        "المدراء يبون معلومات التكلفة والوقت، والخطط الطويلة تتغير. <b>Scrum</b> طريقة Agile تعطي إطار <b>للتنظيم والتخطيط</b>، و<b>ما تفرض</b> ممارسات تقنية."
      ],
      [
        "<b>Product Owner</b>: responsible for identifying product features and attributes; reviews work and helps test; keeps the team focused on the product (normally the product manager).",
        "<b>مالك المنتج</b>: يحدد الميزات ويراجع الشغل ويساعد بالاختبار، ويخلي الفريق مركز على المنتج (غالباً مدير المنتج)."
      ],
      [
        "<b>ScrumMaster</b>: a team <b>coach</b> who guides the team in the effective use of Scrum; <b>not a conventional project manager</b>; has authority on how Scrum is used (in many companies also has project management responsibilities).",
        "<b>ScrumMaster</b>: <b>مدرب</b> الفريق في استخدام Scrum، <b>مو مدير مشروع تقليدي</b> (بس في شركات كثيرة ياخذ مهام إدارة)."
      ],
      [
        "<b>Development team</b>: small self-organizing team of <b>five to eight</b> people. <b>Sprint</b>: short period (typically <b>2–4 weeks</b>) when an increment is developed. <b>Scrum</b>: daily team meeting.",
        "<b>فريق التطوير</b>: فريق صغير ذاتي التنظيم من <b>5 لـ 8</b>. <b>Sprint</b>: فترة قصيرة (<b>2–4 أسابيع</b>). <b>Scrum</b>: اجتماع يومي."
      ],
      [
        "<b>Product backlog</b>: to-do list (bugs, features, improvements) not yet completed. <b>Potentially shippable product increment</b>: sprint output of high enough quality to deploy. <b>Velocity</b>: estimate of how much work a team can do in a single sprint.",
        "<b>Product backlog</b>: قائمة المهام اللي ما خلصت. <b>الزيادة القابلة للشحن</b>: ناتج الـ sprint جاهز للعميل. <b>Velocity</b>: تقدير كم شغل يقدر الفريق يخلص في sprint."
      ],
      [
        "Top benefits of Scrum: product broken into understandable chunks; unstable requirements don't hold up progress; customers see on-time increments and give feedback; team communication improves; trust between customers and developers.",
        "أهم فوايد Scrum: المنتج ينقسم لأجزاء مفهومة، المتطلبات المتغيرة ما توقف الشغل، العملاء يشوفون الزيادات في وقتها، التواصل يتحسن، والثقة تنبني."
      ]
    ],
    "trap": [
      "ScrumMaster = <b>coach</b>, not project manager; Product Owner = features & priorities. Scrum <b>doesn't</b> define technical practices (unlike XP).",
      "ScrumMaster <b>مدرب</b> مو مدير، ومالك المنتج للميزات والأولويات. وScrum <b>ما تحدد</b> ممارسات تقنية (عكس XP)."
    ],
    "idx": 8
  },
  {
    "id": "backlog",
    "ch": 2,
    "t": "Product Backlog",
    "ar": "قائمة المنتج (Product Backlog)",
    "pts": [
      [
        "The product backlog is a list of what needs to be done; its items are <b>product backlog items (PBIs)</b>: features, user requests, essential development activities, engineering improvements; it is always <b>prioritized</b> (first items at the top).",
        "الـ backlog قائمة اللي لازم ينسوى، وعناصرها <b>PBIs</b>: ميزات، طلبات مستخدمين، أنشطة تطوير، وتحسينات هندسية، ودايماً <b>مرتبة بالأولوية</b>."
      ],
      [
        "Examples: \"As a teacher, I want to configure the group of tools…\" (<b>feature</b>); \"pictorial interface for children…\" (<b>user request</b>); \"establish criteria for assessing open source software\" (<b>development activity</b>); \"refactor UI code\", \"implement encryption for personal data\" (<b>engineering improvement</b>).",
        "أمثلة: قصة المعلم (<b>ميزة</b>)، واجهة مصورة للأطفال (<b>طلب مستخدم</b>)، معايير تقييم البرمجيات المفتوحة (<b>نشاط تطوير</b>)، إعادة هيكلة الواجهة وتشفير البيانات (<b>تحسين هندسي</b>)."
      ],
      [
        "PBI states: <b>ready for consideration</b> (high-level tentative ideas), <b>ready for refinement</b> (agreed important, reasonably clear, needs refining), <b>ready for implementation</b> (enough detail to estimate and implement; dependencies identified).",
        "حالات الـ PBI: <b>جاهز للنظر</b> (أفكار مبدئية)، <b>جاهز للتفصيل</b> (متفق إنه مهم ويحتاج تفصيل)، <b>جاهز للتنفيذ</b> (فيه تفاصيل كافية للتقدير والتنفيذ والاعتماديات معروفة)."
      ],
      [
        "Backlog activities: <b>refinement</b> (analyse and refine PBIs), <b>estimation</b> (estimate work), <b>creation</b> (add new items), <b>prioritization</b> (reorder items).",
        "أنشطة الـ backlog: <b>التفصيل</b>، <b>التقدير</b>، <b>الإنشاء</b>، و<b>ترتيب الأولوية</b>."
      ],
      [
        "Estimation metrics: <b>effort required</b> (person-hours or person-days — not calendar time) and <b>story points</b> (arbitrary relative estimate considering size, complexity, technology and unknowns; agree on a baseline task and compare).",
        "مقاييس التقدير: <b>الجهد</b> (ساعات أو أيام شخص، مو أيام تقويم) و<b>نقاط القصة</b> (تقدير نسبي يشمل الحجم والتعقيد والتقنية والمجهول، بمقارنة مع مهمة مرجعية)."
      ]
    ],
    "trap": [
      "Person-days ≠ calendar time. Story points are <b>relative</b> estimates.",
      "أيام الشخص مو أيام التقويم، ونقاط القصة تقدير <b>نسبي</b>."
    ],
    "idx": 9
  },
  {
    "id": "sprints",
    "ch": 2,
    "t": "Timeboxed Sprints & Daily Scrums",
    "ar": "الـ Sprints محددة الوقت والاجتماع اليومي",
    "pts": [
      [
        "Sprints are short (1–4 weeks), with defined start and end dates; <b>timeboxed</b>: development <b>stops at the end of a sprint whether or not the work has been completed</b>.",
        "الـ Sprints قصيرة (1–4 أسابيع) لها بداية ونهاية، و<b>محددة الوقت</b>: الشغل <b>يوقف بنهاية الـ sprint سواء خلص أو لا</b>."
      ],
      [
        "Timeboxing benefits: <b>demonstrable progress</b> (tangible output every sprint), <b>problem discovery</b> (rework limited to a sprint), <b>work planning</b> (the team learns how much it can do in a fixed period).",
        "فوايد تحديد الوقت: <b>تقدم ظاهر</b>، <b>اكتشاف المشاكل</b> (الإعادة محصورة في sprint)، و<b>تخطيط الشغل</b>."
      ],
      [
        "Sprint activities: <b>sprint planning</b> (select items, create a sprint backlog; no more than a day), <b>sprint execution</b> (implement items; if not all done, the sprint is <b>not extended</b> — unfinished items return to the product backlog), <b>sprint reviewing</b>.",
        "أنشطة الـ Sprint: <b>التخطيط</b> (تختار العناصر وتسوي sprint backlog، بالكثير يوم)، <b>التنفيذ</b> (لو ما خلص <b>ما يتمدد</b> والباقي يرجع للـ backlog)، و<b>المراجعة</b>."
      ],
      [
        "Sprint planning: establish an agreed <b>sprint goal</b> (functional, support, or performance and reliability), decide the items, create a <b>sprint backlog</b>; key inputs are effort estimates and the team's <b>velocity</b>.",
        "تخطيط الـ Sprint: <b>هدف</b> متفق عليه (وظيفي، دعم، أو أداء وموثوقية)، اختيار العناصر، و<b>sprint backlog</b>، والمدخلات التقديرات و<b>الـ velocity</b>."
      ],
      [
        "A <b>scrum</b> is a short daily meeting at the beginning of the day: everyone shares progress, problems and plans; sometimes <b>stand-up</b> meetings (no chairs) to keep it short; the sprint backlog is reviewed, completed items removed.",
        "الـ <b>scrum</b> اجتماع يومي قصير أول اليوم: كل واحد يقول وش سوى ومشاكله وخطته، وأحياناً <b>وقوف</b> بدون كراسي عشان يقصر، ونراجع الـ sprint backlog."
      ]
    ],
    "trap": [
      "A sprint is <b>never extended</b>; unfinished items go back to the <b>product backlog</b>.",
      "الـ sprint <b>ما يتمدد أبد</b>، والناقص يرجع للـ <b>product backlog</b>."
    ],
    "idx": 10
  },
  {
    "id": "agileact",
    "ch": 2,
    "t": "Agile Activities, Code Completeness & Sprint Reviews",
    "ar": "الأنشطة والكود المكتمل ومراجعة الـ Sprint",
    "pts": [
      [
        "Two practices that should always be used in a sprint: <b>test automation</b> (a suite of executable tests that can run at any time) and <b>continuous integration</b> (components immediately integrated and tested for interaction problems).",
        "ممارستين لازم في كل sprint: <b>أتمتة الاختبار</b> و<b>الدمج المستمر</b>."
      ],
      [
        "Code completeness checklist (in order): <b>Reviewed</b> (another member checked standards, comments, refactoring) → <b>Unit tested</b> → <b>Integrated</b> → <b>Integration tested</b> → <b>Accepted</b> (acceptance tests; Product Owner or team confirms the PBI is complete).",
        "قائمة اكتمال الكود بالترتيب: <b>مراجع</b> ← <b>مختبر وحدات</b> ← <b>مدموج</b> ← <b>مختبر دمج</b> ← <b>مقبول</b>."
      ],
      [
        "Sprint review: reviews whether the sprint met its goal, sets out new problems, and is a way for the team to reflect on how to improve.",
        "مراجعة الـ sprint: هل حقق الهدف؟ وش المشاكل الجديدة؟ وكيف نتحسن."
      ],
      [
        "The <b>Product Owner</b> has the ultimate authority to decide whether the sprint goal has been achieved; the review includes a <b>process review</b> on how Scrum was used.",
        "<b>مالك المنتج</b> صاحب القرار النهائي إن الهدف تحقق، والمراجعة فيها <b>مراجعة للعملية</b> نفسها."
      ]
    ],
    "trap": [
      "Order: reviewed → unit tested → integrated → integration tested → <b>accepted</b>. The <b>Product Owner</b> decides if the sprint goal is met.",
      "الترتيب ينتهي بـ <b>مقبول</b>، و<b>مالك المنتج</b> يقرر تحقق الهدف."
    ],
    "idx": 11
  },
  {
    "id": "teams",
    "ch": 2,
    "t": "Self-Organizing Teams & Project Management",
    "ar": "الفرق ذاتية التنظيم وإدارة المشروع",
    "pts": [
      [
        "A <b>self-organizing team</b> coordinates the work by discussing tasks and reaching a consensus on who should do what; limits the involvement of engineers in external interactions; makes its own decisions on schedule and deliverables.",
        "<b>الفريق ذاتي التنظيم</b>: ينسق الشغل بالنقاش والاتفاق، ويقلل تعامل المهندسين مع الخارج، ويقرر جدوله ومخرجاته."
      ],
      [
        "Ideal Scrum team size: <b>5–8 people</b> — large enough to be diverse, small enough to communicate informally; advantages: cohesive, adapts to change, copes with people leaving and joining.",
        "الحجم المثالي <b>5–8</b>: متنوع وصغير يتواصل بسهولة، ومتماسك ويتحمل دخول وخروج الأعضاء."
      ],
      [
        "Scrum assumes co-located full-time workers who can all attend a morning meeting — not always true (part-time, different places, flexible hours, students with different classes).",
        "Scrum يفترض فريق متفرغ في نفس المكان ويحضر اجتماع الصباح، وهذا مو دايماً صحيح (دوام جزئي، أماكن مختلفة، طلاب جداولهم مختلفة)."
      ],
      [
        "External interactions: <b>team-focused</b> handled by the <b>ScrumMaster</b>; <b>product-focused</b> handled by the <b>Product Owner</b>; developers focus on development.",
        "التعامل الخارجي: اللي يخص <b>الفريق</b> يتولاه <b>ScrumMaster</b>، واللي يخص <b>المنتج</b> يتولاه <b>مالك المنتج</b>."
      ],
      [
        "Project management: someone must report progress; <b>rotating</b> this role is <b>not viable</b>; often the ScrumMaster takes it. Responsibilities: <b>reporting</b> (budget, schedule, risks, problems, progress), <b>administration</b> (finance, compliance, procurement, liaison), <b>people</b> (vacations, absence, work quality, reviewing, hiring).",
        "إدارة المشروع: لازم أحد يرفع التقارير، و<b>تدويرها</b> بين الأعضاء <b>ما ينفع</b>، وغالباً ياخذها ScrumMaster. المسؤوليات: <b>تقارير</b> (ميزانية، جدول، مخاطر، مشاكل، تقدم)، <b>إدارة</b> (مالية، امتثال، مشتريات، تنسيق)، و<b>أشخاص</b> (إجازات، غياب، جودة، تقييم، توظيف)."
      ]
    ],
    "trap": [
      "Team-focused external interactions → <b>ScrumMaster</b>; product-focused → <b>Product Owner</b>.",
      "الخارجي للفريق ← ScrumMaster، وللمنتج ← مالك المنتج."
    ],
    "idx": 12
  },
  {
    "id": "drivers",
    "ch": 3,
    "t": "Product Drivers, Features & User Understanding",
    "ar": "دوافع المنتج والميزات وفهم المستخدم",
    "pts": [
      [
        "Three factors drive the design of software products: business and consumer <b>needs not met</b> by current products; <b>dissatisfaction</b> with existing products; <b>changes in technology</b> that make new types of product possible.",
        "3 عوامل تدفع تصميم المنتجات: <b>احتياجات ما تلبيها</b> المنتجات الحالية، <b>عدم الرضا</b> عن المنتجات الموجودة، و<b>تغير التقنية</b>."
      ],
      [
        "A <b>feature</b> is a fragment of functionality such as a 'print' feature, a 'change background' feature, a 'new document' feature; create a <b>feature list</b> before programming — it is the starting point for design and development.",
        "<b>الميزة</b> جزء من الوظائف مثل «طباعة» أو «تغيير الخلفية»، وتسوي <b>قائمة الميزات</b> قبل البرمجة لأنها نقطة البداية."
      ],
      [
        "Techniques for understanding users: <b>user interviews, surveys, ethnography, task analysis</b> — some expensive for small companies; informal user analysis and discussions are inexpensive and very valuable.",
        "طرق فهم المستخدم: <b>مقابلات، استبيانات، دراسة إثنوغرافية، تحليل المهام</b>، وبعضها مكلف، والنقاش غير الرسمي رخيص ومفيد جداً."
      ],
      [
        "From personas to features: <b>personas inspire scenarios</b>; scenarios <b>are developed into</b> stories; scenarios inspire and stories <b>define features</b>.",
        "من الشخصيات للميزات: <b>الشخصيات تلهم السيناريوهات</b>، والسيناريوهات <b>تتحول</b> لقصص، والقصص <b>تحدد الميزات</b>."
      ],
      [
        "Feature description template: <b>input</b> (from the user and other sources), <b>activation</b> (how the user activates it), <b>action</b> (how the input data is processed), <b>output</b> (to the user and the system).",
        "قالب وصف الميزة: <b>المدخل</b>، <b>التفعيل</b> (كيف يشغلها المستخدم)، <b>الإجراء</b> (كيف تتعالج البيانات)، و<b>المخرج</b>."
      ]
    ],
    "trap": [
      "Personas → scenarios → stories → features. Feature template: input, activation, action, output.",
      "الشخصيات ← السيناريوهات ← القصص ← الميزات."
    ],
    "idx": 13
  },
  {
    "id": "personas",
    "ch": 3,
    "t": "Personas",
    "ar": "الشخصيات (Personas)",
    "pts": [
      [
        "<b>Personas</b> are 'imagined users': a character portrait of a type of user who might use your product (e.g., for a dentist appointment system: dentist, receptionist and patient personas).",
        "<b>الشخصيات</b> «مستخدمين متخيلين»: صورة لنوع مستخدم ممكن يستخدم المنتج (مثل الطبيب والموظف والمريض في نظام مواعيد أسنان)."
      ],
      [
        "A persona should 'paint a picture' of a type of user; relatively short and easy to read; describe background, why they might use the product, education and technical skills.",
        "الشخصية «ترسم صورة» للمستخدم، قصيرة وسهلة، فيها خلفيته وليش يستخدم المنتج وتعليمه ومهاراته التقنية."
      ],
      [
        "Aspects: <b>personalization</b> (name, personal circumstances, maybe a stock photo), <b>job-related</b>, <b>education</b> (education and technical skills — important for interface design), <b>relevance</b> (why interested in the product).",
        "الجوانب: <b>التخصيص</b> (اسم وظروف وصورة)، <b>الوظيفة</b>، <b>التعليم</b> (مهم لتصميم الواجهة)، و<b>الصلة</b> (ليش يهمه المنتج)."
      ],
      [
        "Examples: <b>Jack</b> (primary teacher, confident with technology, project-based teaching), <b>Emma</b> (history teacher, not interested in digital tech, wants less admin), <b>Elena</b> (school IT technician, Python programmer, power user).",
        "أمثلة: <b>Jack</b> معلم ابتدائي متمكن تقنياً، <b>Emma</b> معلمة تاريخ ما تهتم بالتقنية وتبي إدارة أقل، و<b>Elena</b> فنية تقنية مبرمجة Python."
      ],
      [
        "Benefit: help developers <b>empathize</b> with users ('step into the user's shoes'); check you don't include unneeded features; avoid unwarranted assumptions and over-complicated products.",
        "الفايدة: تخلي المطورين <b>يتعاطفون</b> مع المستخدم (يحطون نفسهم مكانه)، وتمنع الميزات الزايدة والافتراضات والتعقيد."
      ],
      [
        "Personas should be based on studying potential users. Personas developed from limited user information are <b>proto-personas</b> — less accurate but better than nothing.",
        "الشخصيات تنبني على دراسة المستخدمين، واللي تنبني على معلومات قليلة اسمها <b>proto-personas</b>: أقل دقة بس أحسن من لا شي."
      ]
    ],
    "trap": [
      "Main benefit of personas = <b>empathy</b>. Limited information → <b>proto-personas</b>.",
      "الفايدة الأساسية <b>التعاطف</b>، والمعلومات القليلة ← <b>proto-personas</b>."
    ],
    "idx": 14
  },
  {
    "id": "scenarios",
    "ch": 3,
    "t": "Scenarios",
    "ar": "السيناريوهات",
    "pts": [
      [
        "A <b>scenario</b> is a <b>narrative</b> that describes how a user, or a group of users, might use your system; it is <b>not a system specification</b>; from two to three paragraphs up to a page.",
        "<b>السيناريو</b> <b>قصة سردية</b> توصف كيف يستخدم مستخدم أو مجموعة النظام، و<b>مو مواصفات</b>، طوله من فقرتين لين صفحة."
      ],
      [
        "Scenario elements: <b>scenario name</b>, <b>overall objective</b>, <b>personas of actors involved</b>, <b>what's involved</b> in reaching the objective, <b>problem that can't be addressed</b> by the existing system, <b>possible ways</b> the problem could be tackled.",
        "عناصر السيناريو: <b>اسم</b>، <b>هدف عام</b>، <b>الشخصيات</b>، <b>وش يتطلب</b>، <b>المشكلة اللي النظام الحالي ما يحلها</b>، و<b>طرق ممكنة للحل</b>."
      ],
      [
        "Jack's scenario (fishing in Ullapool): photo sharing needs moderation because pre-teen children can't understand copyright and privacy → use KidsTakePics. Emma's scenario describes a <b>common, well-understood</b> process (setting up a group, email alias, web page) automated by iLearn.",
        "سيناريو Jack: مشاركة الصور تحتاج إشراف لأن الأطفال ما يفهمون الحقوق والخصوصية. وسيناريو Emma عملية <b>معروفة</b> (إنشاء مجموعة وبريد وصفحة) يأتمتها iLearn."
      ],
      [
        "Writing: always from the <b>user's perspective</b>, based on personas or real users; imagine several scenarios per persona; ideally general without implementation information; cover all user roles.",
        "الكتابة: من <b>منظور المستخدم</b>، مبنية على شخصيات أو مستخدمين حقيقيين، عدة سيناريوهات لكل شخصية، عامة بدون تفاصيل تنفيذ، وتغطي كل الأدوار."
      ],
      [
        "User involvement: write an imaginary scenario and ask users what you got wrong; <b>users are not good at writing scenarios</b> (too detailed, based on how they work now, can't generalize).",
        "إشراك المستخدم: اكتب سيناريو واسألهم وش الغلط، لأن <b>المستخدمين مو شاطرين بكتابة السيناريوهات</b> (تفاصيل زايدة وما يعممون)."
      ]
    ],
    "trap": [
      "A scenario is a narrative, <b>not a specification</b>; users are <b>bad</b> at writing scenarios.",
      "السيناريو سرد <b>مو مواصفات</b>، والمستخدمين <b>ما يجيدون</b> كتابته."
    ],
    "idx": 15
  },
  {
    "id": "stories",
    "ch": 3,
    "t": "User Stories & Epics",
    "ar": "قصص المستخدم والـ Epics",
    "pts": [
      [
        "Scenarios are high-level; <b>user stories</b> are <b>finer-grain</b> narratives that set out in a detailed, structured way a <b>single thing</b> a user wants from a system.",
        "السيناريو عام، و<b>قصة المستخدم</b> <b>أدق</b>: توصف بشكل منظم <b>شي واحد</b> يبيه المستخدم."
      ],
      [
        "Standard format: <b>As a &lt;role&gt;, I &lt;want | need&gt; to &lt;do something&gt;</b> — e.g., \"As a teacher, I want to tell all members of my group when new information is available.\"",
        "الصيغة: <b>As a &lt;دور&gt;, I &lt;want | need&gt; to &lt;شي&gt;</b>."
      ],
      [
        "Variant with justification: <b>As a &lt;role&gt; I &lt;want | need&gt; to &lt;do something&gt; so that &lt;reason&gt;</b>.",
        "صيغة مع السبب: نضيف <b>so that &lt;السبب&gt;</b>."
      ],
      [
        "Use in planning: many Scrum users represent the <b>product backlog as user stories</b>; a story should focus on a feature that can be implemented within a <b>single sprint</b>.",
        "في التخطيط: كثير يكتبون الـ <b>backlog كقصص</b>، والقصة لازم تنفع تنبني في <b>sprint واحد</b>."
      ],
      [
        "A story about a complex feature that might take <b>several sprints</b> is an <b>epic</b> (e.g., backup and restore of applications, files, directories or the whole system) — break it into simpler stories.",
        "القصة اللي تحتاج <b>كذا sprint</b> اسمها <b>epic</b> (مثل نسخ واستعادة النظام كامل)، وتتقسم لقصص أبسط."
      ],
      [
        "Why still use scenarios? They <b>read more naturally</b>; real users don't talk in the stylized way of stories; scenarios provide <b>more context</b>.",
        "ليش السيناريوهات للحين؟ <b>أطبع في القراءة</b>، والمستخدمين ما يتكلمون بأسلوب القصص، وفيها <b>سياق أكثر</b>."
      ]
    ],
    "trap": [
      "A story too big for one sprint is an <b>epic</b>. The 'so that' part gives the <b>reason</b>.",
      "القصة الأكبر من sprint = <b>epic</b>، وso that = <b>السبب</b>."
    ],
    "idx": 16
  },
  {
    "id": "features",
    "ch": 3,
    "t": "Feature Identification & Design",
    "ar": "تحديد الميزات وتصميمها",
    "pts": [
      [
        "Aim of initial design: a <b>list of features</b> that defines the product; a feature is a way of allowing users to access and use the product's functionality.",
        "الهدف المبدئي <b>قائمة ميزات</b> تحدد المنتج، والميزة طريقة يوصل فيها المستخدم لوظائف المنتج."
      ],
      [
        "Features should be: <b>Independent</b> (not depend on how other features are implemented or on activation order), <b>Coherent</b> (linked to a single item of functionality, no side-effects), <b>Relevant</b> (reflect how users normally carry out tasks, no obscure functionality).",
        "الميزات لازم: <b>مستقلة</b> (ما تعتمد على تنفيذ غيرها ولا ترتيب تشغيله)، <b>متماسكة</b> (وظيفة وحدة بدون آثار جانبية)، و<b>ذات صلة</b> (تعكس شغل المستخدم الطبيعي)."
      ],
      [
        "Knowledge for feature design: <b>user knowledge</b> (scenarios and stories), <b>product knowledge</b> (existing products), <b>domain knowledge</b> (the work area), <b>technology knowledge</b> (latest technology).",
        "المعرفة المطلوبة: <b>معرفة المستخدم</b>، <b>معرفة المنتجات</b>، <b>معرفة المجال</b>، و<b>معرفة التقنية</b>."
      ],
      [
        "Feature trade-offs: <b>simplicity vs functionality</b>; <b>familiarity vs novelty</b>; <b>automation vs control</b>.",
        "الموازنات: <b>البساطة مقابل الوظائف</b>، <b>المألوف مقابل الجديد</b>، و<b>الأتمتة مقابل التحكم</b>."
      ]
    ],
    "trap": [
      "Independence, coherence, relevance. Coherent features do <b>one thing with no side-effects</b>.",
      "مستقلة ومتماسكة وذات صلة، والمتماسكة تسوي <b>شي واحد بدون آثار جانبية</b>."
    ],
    "idx": 17
  },
  {
    "id": "creep",
    "ch": 3,
    "t": "Feature Creep, Derivation & the Feature List",
    "ar": "تضخم الميزات واشتقاقها وقائمتها",
    "pts": [
      [
        "<b>Feature creep</b>: new features added in response to user requests without considering whether they are generally useful or can be implemented another way; too many features make products hard to use.",
        "<b>تضخم الميزات</b>: إضافة ميزات حسب طلبات المستخدمين بدون ما تفكر هل هي مفيدة للكل أو تنحل بطريقة ثانية، وكثرتها تصعّب المنتج."
      ],
      [
        "Three reasons: PMs are <b>reluctant to say 'no'</b>; developers try to <b>match competitors</b>; the product supports both <b>inexperienced and experienced</b> users.",
        "3 أسباب: مدير المنتج <b>ما يقدر يقول لا</b>، المطورين <b>يقلدون المنافسين</b>، والمنتج يخدم <b>المبتدئ والخبير</b>."
      ],
      [
        "Avoiding it — feature questions: Does it really add anything new? Is it important to most users? Can it be implemented by <b>extending an existing feature</b>? Does it provide general or very specific functionality?",
        "تتجنبه بأسئلة: هل تضيف جديد؟ مهمة لأغلب المستخدمين؟ تنحل <b>بتوسيع ميزة موجودة</b>؟ عامة ولا خاصة جداً؟"
      ],
      [
        "<b>Feature derivation</b>: identify features from the product vision or scenarios by <b>highlighting phrases</b> — especially <b>active verbs</b> such as use and choose. From the iLearn vision: access web resources, multiple instantiations, user configuration. From Jack's scenario: a wiki, SCRAN access, email group, integration with iLearn authentication.",
        "<b>اشتقاق الميزات</b>: من الرؤية أو السيناريوهات <b>بتظليل العبارات</b>، خصوصاً <b>الأفعال</b> مثل use وchoose. من رؤية iLearn: الوصول للموارد، نسخ متعددة، والتهيئة. ومن سيناريو Jack: wiki وSCRAN ومجموعة بريد ودمج مع المصادقة."
      ],
      [
        "The <b>feature list</b> is the output of feature identification; no need for much detail at this stage; describe features with an <b>input-action-output</b> template, structured narrative, or a set of <b>user stories</b> (with constraints and comments).",
        "<b>قائمة الميزات</b> ناتج التحديد، بدون تفاصيل كثيرة الحين، وتوصفها بقالب <b>مدخل-إجراء-مخرج</b> أو سرد منظم أو <b>قصص مستخدم</b>."
      ],
      [
        "Innovation: scenarios tell you how users work <b>now</b>; user research on its own rarely helps you innovate — think creatively about alternative features.",
        "الابتكار: السيناريوهات تقول كيف يشتغلون <b>الحين</b>، والبحث لحاله نادراً يبتكر، ففكر بإبداع بميزات بديلة."
      ]
    ],
    "trap": [
      "Feature creep's three reasons include PMs not saying <b>'no'</b>. Derive features from <b>active verbs</b> in scenarios.",
      "من أسباب التضخم إن المدير ما يقول <b>لا</b>، والاشتقاق من <b>الأفعال</b> في السيناريو."
    ],
    "idx": 18
  },
  {
    "id": "archdef",
    "ch": 4,
    "t": "What Is Software Architecture?",
    "ar": "وش هي معمارية البرمجيات؟",
    "pts": [
      [
        "To create a reliable, secure and efficient product, you pay attention to architectural design: its <b>overall organization</b>, how the software is <b>decomposed into components</b>, the <b>server organization</b>, and the <b>technologies</b> used to build it.",
        "عشان تبني منتج موثوق وآمن وفعّال، تهتم بالتصميم المعماري: التنظيم العام، وتقسيم البرنامج لمكونات، وتنظيم السيرفرات، والتقنيات المستخدمة."
      ],
      [
        "The architecture of a software product affects its <b>performance, usability, security, reliability and maintainability</b>.",
        "المعمارية تأثر على الأداء وسهولة الاستخدام والأمان والموثوقية وسهولة الصيانة."
      ],
      [
        "Some see 'architecture' as a <b>noun</b> (the structure of a system); others see it as a <b>verb</b> (the process of defining these structures).",
        "فيه اللي يشوف المعمارية «اسم» يعني بنية النظام، وفيه اللي يشوفها «فعل» يعني عملية تعريف هالبنية."
      ],
      [
        "<b>IEEE definition</b>: architecture is the fundamental organization of a software system embodied in its <b>components</b>, their <b>relationships</b> to each other and to the <b>environment</b>, and the <b>principles</b> guiding its design and evolution.",
        "تعريف IEEE: التنظيم الأساسي للنظام المتمثل في مكوناته، وعلاقاتها ببعض وبالبيئة، والمبادئ اللي توجّه تصميمه وتطوره."
      ],
      [
        "A <b>component</b> is an element that implements a coherent set of functionality or features; it can be considered a collection of one or more <b>services</b> used by other components.",
        "المكوّن عنصر ينفّذ مجموعة متماسكة من الوظائف، وتقدر تعتبره مجموعة خدمات تستخدمها مكونات ثانية."
      ],
      [
        "When designing the architecture you <b>don't decide how a component is implemented</b>: you design the <b>component interface</b> and leave implementation to a later stage.",
        "في التصميم المعماري ما تقرر كيف ينبني المكوّن، تصمم الواجهة (interface) بس وتخلي التنفيذ لبعدين."
      ]
    ],
    "trap": [
      "Architecture design focuses on the <b>interface</b>, not the implementation. IEEE: components + relationships + environment + principles.",
      "المعمارية تصمم الواجهة مو التنفيذ. وتعريف IEEE فيه المكونات والعلاقات والبيئة والمبادئ."
    ],
    "idx": 19
  },
  {
    "id": "archwhy",
    "ch": 4,
    "t": "Why Architecture Matters: Quality Attributes",
    "ar": "ليش المعمارية مهمة: صفات الجودة",
    "pts": [
      [
        "Architecture has a fundamental influence on the <b>non-functional</b> system properties.",
        "المعمارية تأثر بشكل أساسي على الخصائص غير الوظيفية للنظام."
      ],
      [
        "<b>Responsiveness</b>: does the system return results in a reasonable time? <b>Reliability</b>: do features behave as expected by developers and users? <b>Availability</b>: can it deliver services when requested?",
        "سرعة الاستجابة: يرجع النتائج بوقت معقول؟ الموثوقية: الميزات تشتغل مثل المتوقع؟ التوفر: يقدم الخدمة وقت ما تنطلب؟"
      ],
      [
        "<b>Security</b>: does it protect itself and users' data from unauthorized attacks? <b>Usability</b>: can users access features quickly and without errors?",
        "الأمان: يحمي نفسه وبيانات المستخدمين من الهجمات؟ سهولة الاستخدام: يوصل المستخدم للميزات بسرعة وبدون أخطاء؟"
      ],
      [
        "<b>Maintainability</b>: can it be readily updated and new features added without undue costs? <b>Resilience</b>: can it continue to deliver services in the event of <b>partial failure or external attack</b>?",
        "سهولة الصيانة: ينحدّث وتنضاف له ميزات بدون تكلفة كبيرة؟ المرونة (resilience): يكمل يقدم الخدمة لو صار عطل جزئي أو هجوم؟"
      ],
      [
        "<b>Minimizing complexity</b> should be an important goal: the more complex a system, the more difficult and expensive it is to understand and change, and programmers are more likely to introduce bugs and security vulnerabilities.",
        "تقليل التعقيد هدف مهم: كل ما زاد التعقيد صار الفهم والتعديل أصعب وأغلى، وتزيد الأخطاء والثغرات."
      ]
    ],
    "trap": [
      "Resilience = keeps working during <b>partial failure or attack</b>; availability = delivers services <b>when requested</b>.",
      "المرونة = يكمل يشتغل مع العطل أو الهجوم، والتوفر = يقدم الخدمة وقت ما تنطلب."
    ],
    "idx": 20
  },
  {
    "id": "archsec",
    "ch": 4,
    "t": "Centralized vs Distributed: Security & Databases",
    "ar": "المركزي مقابل الموزّع: الأمان وقواعد البيانات",
    "pts": [
      [
        "<b>Centralized security architecture</b> (Rogue One example): all information in one place, so you can apply lots of resources to protect it.",
        "المعمارية الأمنية المركزية (مثال Rogue One): كل المعلومات في مكان واحد عشان تركّز الحماية عليه."
      ],
      [
        "Benefits: <b>easier to design and build protection</b> and information can be <b>accessed more efficiently</b>. But if security is breached, <b>you lose everything</b>.",
        "فوايدها: الحماية أسهل والوصول أسرع. بس لو انخرقت تخسر كل شي."
      ],
      [
        "<b>Distributed</b>: takes longer to access all information and costs more to protect, but a breach in one location loses <b>only the information stored there</b>.",
        "الموزّعة: الوصول أبطأ والحماية أغلى، بس الاختراق يخسرك اللي في ذاك المكان بس."
      ],
      [
        "<b>Shared database</b> (Figure 4.2): C1 and C2 share one database; making C1 faster may require changing the database, which forces C2 to change too.",
        "قاعدة بيانات مشتركة: C1 و C2 يتشاركونها، فلو غيّرت القاعدة عشان C1 لازم يتغير C2 بعد."
      ],
      [
        "<b>Multiple database</b> (Figure 4.3): each component has its own copy of the data it needs, so changes don't affect the other; but it may run <b>more slowly</b>, cost more, and needs a mechanism (<b>C3</b>) to keep shared data <b>consistent</b>.",
        "قواعد متعددة: كل مكوّن عنده نسخته، فالتغيير ما يأثر على الثاني، بس ممكن أبطأ وأغلى ويحتاج مكوّن C3 يحافظ على تطابق البيانات."
      ]
    ],
    "trap": [
      "Centralized: easier + faster but lose <b>everything</b> on breach. Multi-database needs <b>C3</b> for consistency.",
      "المركزي أسهل وأسرع بس تخسر كل شي، والقواعد المتعددة تحتاج C3 للتطابق."
    ],
    "idx": 21
  },
  {
    "id": "archissues",
    "ch": 4,
    "t": "Issues That Influence Architectural Decisions",
    "ar": "العوامل اللي تأثر على قرارات المعمارية",
    "pts": [
      [
        "Five architectural influences (Figure 4.4): <b>non-functional product characteristics</b>, <b>product lifetime</b>, <b>software reuse</b>, <b>number of users</b>, <b>software compatibility</b>.",
        "5 عوامل: الخصائص غير الوظيفية، عمر المنتج، إعادة استخدام البرمجيات، عدد المستخدمين، والتوافق مع برامج ثانية."
      ],
      [
        "<b>Non-functional characteristics</b> (security, performance) affect all users; some are <b>opposing</b>, so you can optimize only the most important.",
        "الخصائص غير الوظيفية تأثر على كل المستخدمين، وبعضها متعارض فتحسّن الأهم بس."
      ],
      [
        "<b>Product lifetime</b>: a long lifetime needs regular revisions, so an architecture that can <b>evolve</b>.",
        "عمر المنتج: لو طويل تحتاج معمارية تتطور مع الوقت."
      ],
      [
        "<b>Software reuse</b>: saves time and effort, but <b>constrains</b> your choices because you must fit the design around the reused software.",
        "إعادة الاستخدام: توفر وقت، بس تقيّدك لأنك لازم تصمم حول البرنامج المستخدم."
      ],
      [
        "<b>Number of users</b>: can change very quickly for Internet consumer software, so design to <b>scale up and down</b>. <b>Software compatibility</b>: may limit choices such as the database software.",
        "عدد المستخدمين: يتغير بسرعة فلازم المعمارية تتوسع وتنكمش. والتوافق: ممكن يحدد خياراتك مثل قاعدة البيانات."
      ]
    ],
    "trap": [
      "Reuse saves effort but <b>constrains</b> the architecture.",
      "إعادة الاستخدام توفر بس تقيّد المعمارية."
    ],
    "idx": 22
  },
  {
    "id": "tradeoffs",
    "ch": 4,
    "t": "Architectural Trade-offs",
    "ar": "الموازنات المعمارية",
    "pts": [
      [
        "<b>Maintainability vs performance</b>: maintainability improves with small self-contained, <b>fine-grain</b> components that do one thing only; but components take time to communicate, so many components make the software <b>slower</b>.",
        "الصيانة مقابل الأداء: مكونات صغيرة كل وحدة تسوي شي واحد تسهّل الصيانة، بس التواصل بينها ياخذ وقت فيصير أبطأ."
      ],
      [
        "<b>Security vs usability</b>: security as a series of <b>layers</b> (authentication, critical-feature authentication, encryption) implemented as separate components; an attacker must penetrate all layers.",
        "الأمان مقابل سهولة الاستخدام: الأمان طبقات (مصادقة، مصادقة للميزات الحساسة، تشفير)، والمهاجم لازم يخترقها كلها."
      ],
      [
        "Layered security hurts usability: users remember passwords and are slowed down, and look for <b>work-arounds</b>. So: not too many layers, no unnecessary security, and <b>helper components</b> that reduce user load.",
        "الطبقات تزعج المستخدم فيدوّر طرق يتهرب فيها، فالحل: طبقات أقل، بدون أمان زايد، ومكونات مساعدة تخفف عليه."
      ],
      [
        "<b>Availability vs time-to-market</b>: availability (% uptime, 24/7 in finance) is achieved with <b>redundant components</b>, plus <b>sensor</b> components that detect failure and <b>switching</b> components that switch to the redundant one.",
        "التوفر مقابل سرعة الطرح: التوفر يحتاج مكونات احتياطية، ومكونات استشعار تكتشف العطل، ومكونات تحويل تنقل للاحتياطي."
      ],
      [
        "Extra components take time and money, add complexity and increase the chance of <b>bugs and vulnerabilities</b>, which delays time-to-market.",
        "المكونات الزايدة تاخذ وقت وفلوس وتزيد التعقيد والأخطاء، فتأخر نزول المنتج."
      ]
    ],
    "trap": [
      "Fine-grain = maintainable but <b>slower</b>. Availability = <b>redundancy + sensor + switching</b>.",
      "المكونات الصغيرة أسهل صيانة بس أبطأ، والتوفر = احتياط + استشعار + تحويل."
    ],
    "idx": 23
  },
  {
    "id": "comporg",
    "ch": 4,
    "t": "Component Organization, Complexity & Guidelines",
    "ar": "تنظيم المكونات والتعقيد والإرشادات",
    "pts": [
      [
        "Three architectural design questions: how to organize the system into <b>components</b>; how components are <b>distributed and communicate</b>; which <b>technologies</b> to use and which components to <b>reuse</b>.",
        "3 أسئلة: كيف تنظم النظام لمكونات، كيف تتوزع وتتواصل، ووش التقنيات والمكونات المعاد استخدامها."
      ],
      [
        "<b>Abstraction</b>: focus on the essential elements without concern for details. <b>Decomposition</b>: analyse large-scale components and represent them as finer-grain components. <b>Layered models</b> illustrate the composition.",
        "التجريد: تركز على الأساسيات بدون تفاصيل. التحليل (decomposition): تقسم المكونات الكبيرة لمكونات أصغر. والنماذج الطبقية توضح هالتركيب."
      ],
      [
        "Complexity arises from the <b>number and nature of relationships</b> between components. Avoid it by <b>localizing relationships</b> (related A and B in the same module) and <b>reducing shared dependencies</b>; prefer local data.",
        "التعقيد يجي من عدد العلاقات ونوعها. تقلله بحصر العلاقات في نفس الوحدة وتقليل الاعتماديات المشتركة، والأفضل بيانات محلية."
      ],
      [
        "Component relationships (Figure 4.7): <b>is-part-of</b>, <b>uses</b> (calls), <b>is-located-with</b>, <b>shares-data-with</b>.",
        "أنواع العلاقات: جزء من، يستخدم (يستدعي)، موجود مع، يتشارك بيانات مع."
      ],
      [
        "Design guidelines (Figure 4.8): <b>Separation of concerns</b> (each component focuses on a single concern), <b>Stable interfaces</b> (coherent, change slowly), <b>Implement once</b> (avoid duplicating functionality).",
        "الإرشادات: فصل الاهتمامات، واجهات ثابتة، ونفّذ مرة وحدة (لا تكرر الوظائف)."
      ]
    ],
    "trap": [
      "Guidelines = separation of concerns, stable interfaces, implement once. Complexity = relationships.",
      "الإرشادات الثلاثة، والتعقيد سببه العلاقات."
    ],
    "idx": 24
  },
  {
    "id": "layers",
    "ch": 4,
    "t": "Layered Architecture & Cross-cutting Concerns",
    "ar": "المعمارية الطبقية والاهتمامات العابرة",
    "pts": [
      [
        "Each <b>layer</b> is an area of concern considered separately; within a layer, components are <b>independent</b> and don't overlap; lower layers provide <b>general functionality</b>.",
        "كل طبقة مجال اهتمام لحالها، ومكوناتها مستقلة، والطبقات السفلية تقدم وظائف عامة."
      ],
      [
        "The architectural model is <b>high-level</b> with no implementation information. Components at level X should only interact with the APIs of level <b>X−1</b>: between layers, <b>not across</b> layers.",
        "النموذج عالي المستوى بدون تنفيذ، والطبقة X تتعامل مع واجهات X−1 بس، يعني بين الطبقات مو قفز عليها."
      ],
      [
        "<b>Cross-cutting concerns</b> are <b>systemic</b> (affect the whole system and all layers), e.g. <b>security, performance, reliability</b>; they are completely different from the functional concerns represented by layers.",
        "الاهتمامات العابرة شاملة وتأثر على كل الطبقات، مثل الأمان والأداء والموثوقية، وتختلف عن الاهتمامات الوظيفية للطبقات."
      ],
      [
        "They are the reason why <b>modifying a system after design to improve security</b> is often difficult. A <b>single security component</b> is a critical vulnerability; distributing security across layers is more <b>resilient</b>.",
        "هي السبب إن تحسين الأمان بعد التصميم صعب. ومكوّن أمان واحد ثغرة خطيرة، وتوزيعه على الطبقات أقوى."
      ],
      [
        "Generic web-based layered architecture (Figure 4.10, top to bottom): <b>browser-based or mobile UI</b> → <b>authentication and UI management</b> → <b>application-specific functionality</b> → <b>basic shared services</b> → <b>transaction and database management</b>.",
        "الطبقات الخمس للويب: واجهة المتصفح أو الجوال، المصادقة وإدارة الواجهة، وظائف التطبيق، الخدمات المشتركة، وإدارة قاعدة البيانات والمعاملات."
      ]
    ],
    "trap": [
      "Interactions between adjacent layers (X → X−1), not across. Cross-cutting = security, performance, reliability.",
      "التعامل بين الطبقات المتجاورة بس، والعابرة = الأمان والأداء والموثوقية."
    ],
    "idx": 25
  },
  {
    "id": "ilearn",
    "ch": 4,
    "t": "iLearn: Design Principles & Service Integration",
    "ar": "iLearn: مبادئ التصميم وتكامل الخدمات",
    "pts": [
      [
        "iLearn principles: <b>Replaceability</b> (replace/add applications; not hardwired), <b>Extensibility</b> (create own versions that extend or limit the standard system), <b>Age-appropriate</b> (alternative UIs for different ages).",
        "مبادئ iLearn: قابلية الاستبدال، قابلية التوسع، ومناسب للعمر (واجهات مختلفة حسب العمر)."
      ],
      [
        "<b>Programmability</b> (create applications by linking existing ones), <b>Minimum work</b> (users who don't want changes shouldn't do extra work).",
        "قابلية البرمجة (تربط تطبيقات موجودة)، وأقل جهد (اللي ما يبي يغيّر ما يتعب)."
      ],
      [
        "Users span ages <b>3 to 18</b>; these principles led to a <b>service-oriented</b> design: every component is a service, any service is replaceable, new services by combining existing ones.",
        "المستخدمين من 3 لـ 18 سنة، فالمبادئ قادت لتصميم موجّه بالخدمات: كل مكوّن خدمة قابلة للاستبدال."
      ],
      [
        "Service integration: <b>Full</b> (services aware of and communicate through APIs), <b>Partial</b> (share components and databases but not aware of each other), <b>Independent</b> (no shared services or databases; replaceable by any comparable service).",
        "تكامل الخدمات: كامل (تعرف بعض وتتواصل بالـ API)، جزئي (تتشارك مكونات وقواعد بس ما تعرف بعض)، ومستقل (ما تتشارك شي وتنستبدل بسهولة)."
      ]
    ],
    "trap": [
      "Partial = <b>shares</b> databases but <b>can't communicate</b>. Independent = shares <b>nothing</b>.",
      "الجزئي يتشارك بس ما يتواصل، والمستقل ما يتشارك شي."
    ],
    "idx": 26
  },
  {
    "id": "distarch",
    "ch": 4,
    "t": "Distribution Architecture: Client-Server, MVC & SOA",
    "ar": "معمارية التوزيع: client-server و MVC و SOA",
    "pts": [
      [
        "The <b>distribution architecture</b> defines the <b>servers</b> in the system and the <b>allocation of components</b> to these servers.",
        "معمارية التوزيع تحدد السيرفرات وتوزيع المكونات عليها."
      ],
      [
        "<b>Client-server</b>: suited when clients access a <b>shared database</b> and business logic; the UI runs on the user's computer or mobile device; functionality is distributed between client and servers.",
        "client-server: مناسب لما العملاء يوصلون لقاعدة بيانات مشتركة، والواجهة على جهاز المستخدم."
      ],
      [
        "<b>MVC</b> (Figure 4.13): <b>View</b> and <b>Controller</b> on the client (browser), <b>Model</b> on the server; controller handles user inputs, view displays pages, model holds the data.",
        "MVC: الـ View والـ Controller عند العميل، والـ Model عند السيرفر."
      ],
      [
        "Communication uses <b>HTTP</b> (GET, POST + URL). HTTP is <b>text-only</b>, so structured data uses <b>XML</b> (markup with tags) or <b>JSON</b> (simpler, based on JavaScript objects).",
        "التواصل بـ HTTP، ولأنه نصي بس، البيانات تنكتب XML (وسوم) أو JSON (أبسط ومبني على كائنات JavaScript)."
      ],
      [
        "<b>Multi-tier</b> (Figure 4.14): clients → web server → application server → database server. <b>Service-oriented</b> (Figure 4.15): services are <b>stateless</b>, can be <b>replicated and migrate</b>; easier to <b>scale</b> and <b>resilient</b> to failure.",
        "متعدد الطبقات: عميل ← web server ← application server ← database server. والـ SOA: خدمات بدون حالة تنتسخ وتنتقل، أسهل توسع وأقوى ضد الأعطال."
      ],
      [
        "Choice issues: <b>data type and updates</b> (structured shared data → single database with locking/transactions), <b>change frequency</b> (often-changed components → separate services), <b>execution platform</b> (cloud → SOA; local business servers → multi-tier).",
        "عوامل الاختيار: نوع البيانات وتحديثها (مشتركة → قاعدة وحدة)، كثرة التغيير (→ خدمات منفصلة)، ومنصة التشغيل (سحابة → SOA، سيرفرات محلية → multi-tier)."
      ]
    ],
    "trap": [
      "SOA services are <b>stateless</b>. Cloud → <b>SOA</b>; local business servers → <b>multi-tier</b>.",
      "خدمات SOA بدون حالة، والسحابة → SOA، والسيرفرات المحلية → multi-tier."
    ],
    "idx": 27
  },
  {
    "id": "techchoice",
    "ch": 4,
    "t": "Technology Choices",
    "ar": "اختيار التقنيات",
    "pts": [
      [
        "Technology decisions: <b>Database</b> (SQL or NoSQL), <b>Platform</b> (mobile app and/or web), <b>Server</b> (in-house or public cloud; which provider), <b>Open source</b> (suitable components?), <b>Development tools</b> (do they embed architectural assumptions?).",
        "قرارات التقنية: قاعدة البيانات، المنصة، السيرفر، المصادر المفتوحة، وأدوات التطوير."
      ],
      [
        "<b>Relational</b> (e.g., MySQL): structured tables; suitable when you need <b>transaction management</b> and data structures are predictable and simple. <b>NoSQL</b> (e.g., MongoDB): flexible, hierarchical organization; more efficient for <b>data analysis</b> and concurrent processing of <b>big data</b>.",
        "العلائقية (MySQL): جداول منظمة ومناسبة لإدارة المعاملات. NoSQL (MongoDB): مرنة وهرمية وأفضل لتحليل البيانات الضخمة."
      ],
      [
        "Mobile issues: <b>intermittent connectivity</b> (provide limited offline service), <b>processor power</b> (minimize heavy computation), <b>power management</b> (save battery), <b>on-screen keyboard</b> (minimize input). Usually separate browser and mobile front-ends.",
        "مشاكل الجوال: الاتصال المتقطع، ضعف المعالج، البطارية، ولوحة المفاتيح على الشاشة. وغالباً تحتاج واجهة للمتصفح وواجهة للجوال."
      ],
      [
        "<b>Server</b>: consumer products → almost always the <b>cloud</b>; some businesses prefer <b>in-house servers</b> due to cloud security concerns and predictable usage.",
        "السيرفر: المنتجات الاستهلاكية غالباً سحابة، وبعض الشركات تفضّل سيرفرات داخلية عشان الأمان والاستخدام المتوقع."
      ],
      [
        "<b>Open source</b>: reuse reduces cost and time to market, but you are <b>constrained</b> and have <b>no control over its evolution</b>; consider availability, maturity, support and <b>license</b> issues.",
        "المصادر المفتوحة: توفر وقت وفلوس، بس تقيّدك وما تتحكم بتطورها، وانتبه للرخصة."
      ],
      [
        "<b>Development tools</b> (mobile toolkit, web framework) have <b>built-in architectural assumptions</b>; developers also favour <b>familiar technologies</b> (e.g., relational over NoSQL).",
        "أدوات التطوير فيها افتراضات معمارية، والمطورين يميلون للتقنيات اللي يعرفونها."
      ]
    ],
    "trap": [
      "Transactions + predictable data → <b>relational</b>; big data analysis → <b>NoSQL</b>. Open source: no control over <b>evolution</b>.",
      "المعاملات → علائقية، والبيانات الضخمة → NoSQL، والمصادر المفتوحة ما تتحكم بتطورها."
    ],
    "idx": 28
  }
];

export const Q = [
  [
    1,
    "products",
    "Software products are best described as:",
    [
      "Generic systems providing functionality useful to a range of customers",
      "One-off systems built for a single external client",
      "Hardware devices sold with software",
      "Internal scripts used by one developer"
    ],
    "المنتجات البرمجية أنظمة عامة تقدم وظائف مفيدة لمجموعة من العملاء.",
    "Software products are generic systems useful to a range of customers.",
    1,
    0
  ],
  [
    1,
    "products",
    "In project-based software engineering, the starting point is:",
    [
      "A set of software requirements owned by an external client",
      "A business opportunity identified by the company",
      "A product vision written by developers",
      "A prototype built for funders"
    ],
    "في المشروع البداية متطلبات يملكها عميل خارجي.",
    "Project-based development starts from requirements owned by an external client.",
    1,
    0
  ],
  [
    1,
    "products",
    "In product-based software engineering, the starting point is:",
    [
      "A business opportunity",
      "A signed contract with a client",
      "A detailed requirements document",
      "A government regulation"
    ],
    "في المنتج البداية فرصة تجارية.",
    "Product-based development starts from a business opportunity.",
    1,
    0
  ],
  [
    1,
    "products",
    "Who decides which features to include and when the product changes in product development?",
    [
      "The software company itself",
      "The external client",
      "The contractor's lawyers",
      "The end users by vote"
    ],
    "في المنتج الشركة نفسها تقرر الميزات والجدول والتغييرات.",
    "In product development the software company is responsible for these decisions.",
    1,
    0
  ],
  [
    1,
    "products",
    "Custom software usually has a lifetime of:",
    [
      "10 years or more",
      "Less than 6 months",
      "Exactly 2 years",
      "One sprint"
    ],
    "البرامج المخصصة عمرها طويل، 10 سنين أو أكثر.",
    "Custom software usually has a long lifetime (10 years or more).",
    0,
    0
  ],
  [
    1,
    "products",
    "Why is rapid delivery essential in software product development?",
    [
      "To capture the market for that type of product",
      "Because clients demand fixed contracts",
      "Because documentation is required first",
      "To reduce hardware cost"
    ],
    "التسليم السريع أساسي عشان تكسب السوق.",
    "Rapid delivery is essential to capture the market.",
    0,
    0
  ],
  [
    1,
    "products",
    "Which statement about the client in project-based development is true?",
    [
      "The customer may change the requirements at any time",
      "The customer never changes requirements",
      "There is no customer",
      "The developer owns the requirements"
    ],
    "العميل ممكن يغير المتطلبات بأي وقت، وغالباً يغيرها.",
    "The customer may change requirements at any time (and usually does).",
    0,
    0
  ],
  [
    1,
    "products",
    "Microsoft Excel, Evernote and Sudoku are examples of:",
    [
      "Software products",
      "Custom one-off systems",
      "Software product lines",
      "Research software"
    ],
    "كلها أمثلة على منتجات برمجية عامة بأحجام مختلفة.",
    "All are examples of software products of different scales.",
    0,
    0
  ],
  [
    1,
    "products",
    "Large businesses, government and public bodies still rely on:",
    [
      "Custom software developed in dedicated projects",
      "Only mobile games",
      "Only open-source products",
      "Prototypes only"
    ],
    "الأنظمة المخصصة للحين مهمة للجهات الكبيرة وتنبني في مشاريع مخصصة.",
    "Custom systems are still important and are developed in dedicated software projects.",
    0,
    0
  ],
  [
    1,
    "lines",
    "A software product line is:",
    [
      "A set of products sharing a common core, each with customer-specific adaptations",
      "A single product with one version",
      "A platform others build apps on",
      "A queue of features in the backlog"
    ],
    "خط المنتجات مجموعة منتجات تتشارك نواة مشتركة مع تعديلات لكل عميل.",
    "A product line is a set of products sharing a common core with customer-specific adaptations.",
    1,
    0
  ],
  [
    1,
    "lines",
    "Facebook with its third-party \"Facebook apps\" is an example of a:",
    [
      "Platform",
      "Product line",
      "Stand-alone system",
      "Custom project"
    ],
    "المنصة منتج تقدر تبني تطبيقات جديدة فوقه، مثل فيسبوك.",
    "A platform includes functionality so new applications can be built on it.",
    1,
    0
  ],
  [
    1,
    "lines",
    "In which execution model does the software run entirely on the customer's computers?",
    [
      "Stand-alone",
      "Hybrid",
      "Software service",
      "Platform"
    ],
    "المستقل يشتغل كامل على جهاز العميل.",
    "Stand-alone software executes entirely on the customer's computers.",
    1,
    0
  ],
  [
    1,
    "lines",
    "Part of the functionality is on the customer's computer and some on the developer's servers. This is:",
    [
      "Hybrid execution",
      "Stand-alone execution",
      "Software service",
      "A product line"
    ],
    "الهجين جزء عند العميل وجزء على خوادم المطوّر.",
    "That is the hybrid execution model.",
    1,
    0
  ],
  [
    1,
    "lines",
    "All features are on the developer's servers and accessed through a browser or app. This is:",
    [
      "A software service",
      "A stand-alone product",
      "A hybrid product",
      "A product line"
    ],
    "الخدمة كل ميزاتها على خوادم المطوّر ويوصلها العميل بالمتصفح أو التطبيق.",
    "In a software service all features are implemented on the developer's servers.",
    1,
    0
  ],
  [
    1,
    "lines",
    "Emergency-services communication software adapted to each customer's radio equipment illustrates:",
    [
      "A software product line",
      "A software service",
      "Feature creep",
      "A proto-persona"
    ],
    "نظام الطوارئ مثال على خط منتجات بنواة مشتركة تتعدل حسب أجهزة العميل.",
    "It's the slides' example of a product line adapted to each customer.",
    0,
    0
  ],
  [
    1,
    "lines",
    "Which is NOT listed as comparable to product development (no external customer)?",
    [
      "Government contract systems",
      "Student projects",
      "Research software",
      "Internal tool development"
    ],
    "المشابه للمنتج: مشاريع الطلاب، برمجيات البحث، والأدوات الداخلية. أنظمة العقود الحكومية مشاريع لعميل خارجي.",
    "Comparable development: student projects, research software, internal tools.",
    0,
    0
  ],
  [
    1,
    "vision",
    "The starting point for software product development is:",
    [
      "A product vision",
      "A detailed contract",
      "A test plan",
      "A database schema"
    ],
    "نقطة البداية رؤية المنتج.",
    "The starting point is a product vision.",
    1,
    0
  ],
  [
    1,
    "vision",
    "Which three questions should a product vision answer?",
    [
      "What is the product, who are the target customers/users, why should they buy it",
      "How, when and where to deploy",
      "Which language, framework and database",
      "Cost, schedule and risks"
    ],
    "الرؤية تجاوب: وش المنتج، مين العملاء، وليش يشترونه.",
    "What is the product? Who are the target customers? Why buy it?",
    1,
    0
  ],
  [
    1,
    "vision",
    "In Moore's vision template, which keyword introduces the primary competitive alternative?",
    [
      "UNLIKE",
      "THAT",
      "WHO",
      "FOR"
    ],
    "UNLIKE تقدم المنافس الأساسي.",
    "UNLIKE introduces the primary competitive alternative.",
    1,
    0
  ],
  [
    1,
    "vision",
    "In Moore's template, \"WHO\" is followed by:",
    [
      "The statement of the need or opportunity",
      "The product name",
      "The key benefit",
      "The primary differentiation"
    ],
    "بعد WHO تجي الحاجة أو الفرصة.",
    "WHO is followed by the statement of need or opportunity.",
    1,
    0
  ],
  [
    1,
    "vision",
    "In Moore's template, \"THAT\" introduces:",
    [
      "The key benefit / compelling reason to buy",
      "The target customer",
      "The competitor",
      "The product category"
    ],
    "THAT تقدم الفائدة الأساسية (سبب الشراء).",
    "THAT introduces the key benefit.",
    1,
    0
  ],
  [
    1,
    "vision",
    "Which is the correct order of Moore's template keywords?",
    [
      "FOR, WHO, THE … IS A, THAT, UNLIKE, OUR PRODUCT",
      "WHO, FOR, THAT, THE, OUR PRODUCT, UNLIKE",
      "THE, FOR, WHO, UNLIKE, THAT, OUR PRODUCT",
      "FOR, THE, WHO, UNLIKE, THAT, OUR PRODUCT"
    ],
    "الترتيب: FOR ثم WHO ثم THE…IS A ثم THAT ثم UNLIKE ثم OUR PRODUCT.",
    "Order: FOR, WHO, THE…IS A, THAT, UNLIKE, OUR PRODUCT.",
    1,
    0
  ],
  [
    1,
    "vision",
    "Developers who work in a particular area and recognize deficiencies in current software use which information source?",
    [
      "Domain experience",
      "Product experience",
      "Customer experience",
      "Prototyping"
    ],
    "خبرة المجال: يشتغلون فيه ويشوفون النواقص.",
    "That is domain experience.",
    0,
    0
  ],
  [
    1,
    "vision",
    "Users of existing software who see simpler and better ways of providing comparable functionality use:",
    [
      "Product experience",
      "Domain experience",
      "Customer experience",
      "Stakeholder interviews"
    ],
    "خبرة المنتجات: يستخدمون برامج ويشوفون طريقة أحسن.",
    "That is product experience.",
    0,
    0
  ],
  [
    1,
    "vision",
    "Discussions with prospective customers about their problems and constraints (e.g., interoperability) give:",
    [
      "Customer experience",
      "Domain experience",
      "Product experience",
      "Feature creep"
    ],
    "خبرة العملاء من النقاش مع العملاء المحتملين.",
    "That is customer experience.",
    0,
    0
  ],
  [
    1,
    "vision",
    "In Moore's template, \"OUR PRODUCT\" is followed by:",
    [
      "The statement of primary differentiation",
      "The target customer",
      "The need",
      "The product category"
    ],
    "بعد OUR PRODUCT يجي وش يميزنا عن المنافس.",
    "OUR PRODUCT is followed by the primary differentiation.",
    0,
    0
  ],
  [
    1,
    "pm",
    "Software product management is primarily:",
    [
      "A business activity focusing on the products developed and sold by the business",
      "A coding activity",
      "A testing method",
      "A database design technique"
    ],
    "إدارة المنتج نشاط تجاري.",
    "It is a business activity focused on the products the business develops and sells.",
    1,
    0
  ],
  [
    1,
    "pm",
    "Which is NOT one of the three product management concerns?",
    [
      "Code review standards",
      "Business needs",
      "Technology constraints",
      "Customer experience"
    ],
    "الاهتمامات: احتياجات العمل، قيود التقنية، وتجربة العميل.",
    "The concerns are business needs, technology constraints and customer experience.",
    1,
    0
  ],
  [
    1,
    "pm",
    "Product managers must look outward to:",
    [
      "Customers and potential customers",
      "Only the source code",
      "Only the hardware",
      "Only competitors' prices"
    ],
    "مدير المنتج يطالع للخارج للعملاء مو يركز على البرنامج بس.",
    "PMs look outward to customers rather than focusing on the software.",
    1,
    0
  ],
  [
    1,
    "pm",
    "Who is the ultimate authority on changes to the product roadmap?",
    [
      "The product manager",
      "The ScrumMaster",
      "The newest developer",
      "The external client"
    ],
    "مدير المنتج صاحب القرار النهائي في تغيير الخارطة.",
    "The PM is the ultimate authority on roadmap changes.",
    1,
    0
  ],
  [
    1,
    "pm",
    "Ensuring the product vision doesn't change and avoiding \"vision drift\" is:",
    [
      "Product vision management",
      "Acceptance testing",
      "Customer testing",
      "Backlog refinement"
    ],
    "إدارة الرؤية تمنع انحرافها.",
    "That is product vision management.",
    0,
    0
  ],
  [
    1,
    "pm",
    "Verifying that a release meets the goals in the roadmap and is efficient and reliable is:",
    [
      "Acceptance testing",
      "Customer testing",
      "Unit testing",
      "User interface design"
    ],
    "اختبار القبول يتأكد إن الإصدار يحقق أهداف الخارطة.",
    "That is acceptance testing.",
    1,
    0
  ],
  [
    1,
    "pm",
    "Taking a release of the product to existing and potential customers to get feedback is:",
    [
      "Customer testing",
      "Acceptance testing",
      "Integration testing",
      "Sprint planning"
    ],
    "اختبار العملاء: نعطيهم الإصدار ونسمع رأيهم.",
    "That is customer testing.",
    0,
    0
  ],
  [
    1,
    "pm",
    "In user interface design, product managers act as:",
    [
      "Surrogate users",
      "Programmers",
      "Testers only",
      "Investors"
    ],
    "في تصميم الواجهة مدير المنتج يمثل المستخدم.",
    "PMs act as surrogate users.",
    0,
    0
  ],
  [
    1,
    "pm",
    "The product backlog managed by the PM is best described as:",
    [
      "A prioritized to-do list of what needs to be developed",
      "A list of bugs only",
      "A financial report",
      "A list of team members"
    ],
    "الـ backlog قائمة مهام مرتبة بالأولوية.",
    "It is a prioritized to-do list.",
    0,
    0
  ],
  [
    1,
    "proto",
    "Product prototyping means:",
    [
      "Developing an early version of a product to test ideas and convince funders",
      "Writing the final release",
      "Signing a contract",
      "Writing user manuals"
    ],
    "النمذجة: نسخة مبكرة تختبر الأفكار وتقنع الممولين.",
    "An early version to test ideas and convince funders of market potential.",
    1,
    0
  ],
  [
    1,
    "proto",
    "What should you plan to do with a prototype?",
    [
      "Throw it away and re-implement the product",
      "Ship it directly to customers",
      "Freeze it as the final architecture",
      "Sell it as a product line"
    ],
    "خطط إنك ترمي النموذج وتعيد البناء مع مراعاة الأمان والموثوقية.",
    "Always plan to throw away the prototype and re-implement.",
    1,
    0
  ],
  [
    1,
    "proto",
    "In two-stage prototyping, the first stage is:",
    [
      "Feasibility demonstration",
      "Customer demonstration",
      "Acceptance testing",
      "Release planning"
    ],
    "المرحلة الأولى إثبات الجدوى.",
    "The first stage is a feasibility demonstration.",
    1,
    0
  ],
  [
    1,
    "proto",
    "The customer demonstration stage:",
    [
      "Extends the feasibility prototype with features for specific customers",
      "Comes before the feasibility demonstration",
      "Throws away all features",
      "Is only for investors"
    ],
    "عرض العملاء يوسع نموذج الجدوى بميزات لعملاء محددين بعد دراسة المستخدمين.",
    "It extends the feasibility prototype with specific customer features.",
    1,
    0
  ],
  [
    1,
    "proto",
    "Why are prototypes valuable for users?",
    [
      "Users can only really relate to a product when they see a working version",
      "Users prefer reading specifications",
      "Prototypes are cheaper than products",
      "Prototypes never need testing"
    ],
    "المستخدمين ما يتفاعلون إلا لما يشوفون نسخة شغالة.",
    "Users can only relate to the product when they see a working version.",
    0,
    0
  ],
  [
    1,
    "proto",
    "When should building a prototype happen?",
    [
      "It should be the first thing you do",
      "After the final release",
      "Only if the product fails",
      "After writing all documentation"
    ],
    "النموذج أول شي تسويه.",
    "Building a prototype should be the first thing you do.",
    0,
    0
  ],
  [
    2,
    "agile",
    "Agile approaches aim to:",
    [
      "Deliver functionality quickly, respond to changing specifications and minimize overheads",
      "Produce full documentation before coding",
      "Avoid customer involvement",
      "Freeze requirements early"
    ],
    "Agile: تسليم سريع وتجاوب مع التغيير وتقليل العبء.",
    "Agile aims for quick delivery, responsiveness to change and minimal overheads.",
    1,
    0
  ],
  [
    2,
    "agile",
    "Plan-driven development was developed for:",
    [
      "Large, long-lifetime systems built by dispersed teams",
      "Small mobile games",
      "Single-developer scripts",
      "Throw-away prototypes"
    ],
    "المبني على الخطة تطور للأنظمة الكبيرة طويلة العمر.",
    "Plan-driven methods evolved for large, long-lifetime systems.",
    1,
    0
  ],
  [
    2,
    "agile",
    "Agile methods were developed in the:",
    [
      "1990s",
      "1960s",
      "1970s",
      "2010s"
    ],
    "طرق Agile طلعت في التسعينات.",
    "Agile methods were developed in the 1990s.",
    1,
    0
  ],
  [
    2,
    "agile",
    "Which is one of the agile manifesto values?",
    [
      "Working software over comprehensive documentation",
      "Contract negotiation over customer collaboration",
      "Following a plan over responding to change",
      "Processes and tools over individuals"
    ],
    "البرنامج الشغال أهم من التوثيق الشامل.",
    "Working software over comprehensive documentation.",
    1,
    0
  ],
  [
    2,
    "agile",
    "\"Customer collaboration over ___\"",
    [
      "Contract negotiation",
      "Working software",
      "Following a plan",
      "Individuals and interactions"
    ],
    "التعاون مع العميل أهم من التفاوض على العقد.",
    "Customer collaboration over contract negotiation.",
    1,
    0
  ],
  [
    2,
    "agile",
    "\"Individuals and interactions over ___\"",
    [
      "Processes and tools",
      "Working software",
      "Customer collaboration",
      "Responding to change"
    ],
    "الأفراد والتفاعل أهم من العمليات والأدوات.",
    "Individuals and interactions over processes and tools.",
    1,
    0
  ],
  [
    2,
    "agile",
    "According to the manifesto, the items on the right (e.g., documentation):",
    [
      "Have value, but the items on the left are valued more",
      "Have no value",
      "Are forbidden",
      "Are valued more"
    ],
    "اللي يمين له قيمة، بس اللي يسار نقدّره أكثر.",
    "There is value in the right items, but the left items are valued more.",
    0,
    0
  ],
  [
    2,
    "agile",
    "What is the 'best' agile method?",
    [
      "There is no best method; it depends on the team and product type",
      "Scrum always",
      "XP always",
      "Waterfall"
    ],
    "ما فيه طريقة أفضل، يعتمد على الفريق ونوع المنتج.",
    "There is no best agile method.",
    0,
    0
  ],
  [
    2,
    "agile",
    "A major drawback of plan-driven development is:",
    [
      "Significant overheads and documentation, no rapid delivery",
      "No planning at all",
      "Too little documentation",
      "No requirements"
    ],
    "المبني على الخطة فيه عبء وتوثيق كثير وما يسلّم بسرعة.",
    "It has significant overheads and documentation and doesn't support rapid delivery.",
    0,
    0
  ],
  [
    2,
    "incr",
    "All agile methods are based around:",
    [
      "Incremental development and delivery",
      "A single big release",
      "Formal mathematical specification",
      "Outsourcing"
    ],
    "كل طرق Agile مبنية على التطوير والتسليم التزايدي.",
    "All agile methods are based on incremental development and delivery.",
    1,
    0
  ],
  [
    2,
    "incr",
    "In incremental development, which features are implemented first?",
    [
      "The highest-priority features",
      "The easiest features",
      "The most expensive features",
      "Random features"
    ],
    "الأعلى أولوية ينبني أول.",
    "The highest-priority features are implemented first.",
    1,
    0
  ],
  [
    2,
    "incr",
    "Which is the correct order of increment activities?",
    [
      "Choose features → refine descriptions → implement & test → integrate & test → deliver",
      "Deliver → choose → implement → refine → integrate",
      "Implement → choose → deliver → test → refine",
      "Refine → deliver → choose → integrate → implement"
    ],
    "الترتيب: اختيار ← تفصيل ← تنفيذ واختبار ← دمج واختبار ← تسليم.",
    "Choose, refine, implement & test, integrate & test, deliver.",
    1,
    0
  ],
  [
    2,
    "incr",
    "Which is NOT one of the agile principles?",
    [
      "Focus on the development process, not people",
      "Involve the customer",
      "Embrace change",
      "Maintain simplicity"
    ],
    "المبدأ هو التركيز على الناس مو العملية.",
    "The principle is focus on people, not the development process.",
    1,
    0
  ],
  [
    2,
    "incr",
    "\"Involve the customer\" means the customer should:",
    [
      "Provide and prioritize requirements and evaluate increments",
      "Write all the code",
      "Avoid seeing the product until release",
      "Only sign the contract"
    ],
    "العميل يقدم ويرتب المتطلبات ويقيّم الزيادات.",
    "Customers provide and prioritize requirements and evaluate each increment.",
    0,
    0
  ],
  [
    2,
    "incr",
    "In incremental development, you only define details of:",
    [
      "The feature being implemented in that increment",
      "All features up front",
      "The final release",
      "The hardware"
    ],
    "ما تفصّل إلا الميزة اللي تشتغل عليها في الزيادة.",
    "You only define details of the feature being implemented.",
    0,
    0
  ],
  [
    2,
    "incr",
    "\"Focus on people, not the development process\" means:",
    [
      "Trust the team and don't prescribe rigid processes",
      "Ignore the customer",
      "Hire more managers",
      "Document everything"
    ],
    "ثق بالفريق ولا تفرض عمليات جامدة.",
    "Trust the team rather than prescribing processes.",
    0,
    0
  ],
  [
    2,
    "xp",
    "The name Extreme Programming was coined by:",
    [
      "Kent Beck in 1998",
      "Ian Sommerville in 2019",
      "Geoffrey Moore in 1991",
      "Alan Turing in 1950"
    ],
    "الاسم من Kent Beck سنة 1998.",
    "Kent Beck coined XP in 1998.",
    1,
    0
  ],
  [
    2,
    "xp",
    "XP gets its name from:",
    [
      "Pushing recognized good practice to 'extreme' levels",
      "Using extreme hardware",
      "Writing extremely long documents",
      "Extremely large teams"
    ],
    "دفع الممارسات الجيدة لحدها المتطرف.",
    "It pushes recognized good practice to extreme levels.",
    1,
    0
  ],
  [
    2,
    "xp",
    "How many new techniques did XP focus on?",
    [
      "12",
      "5",
      "4",
      "20"
    ],
    "XP فيها 12 تقنية.",
    "XP focused on 12 techniques.",
    1,
    0
  ],
  [
    2,
    "xp",
    "In test-driven development:",
    [
      "Tests are written before the code",
      "Tests are written after release",
      "Testing is done by customers only",
      "There are no automated tests"
    ],
    "في TDD تكتب الاختبار أول.",
    "In TDD you write the tests first.",
    1,
    0
  ],
  [
    2,
    "xp",
    "When a task is complete it is integrated, a new version is built and all unit tests must pass. This is:",
    [
      "Continuous integration",
      "Refactoring",
      "Pair programming",
      "Small releases"
    ],
    "هذا الدمج المستمر.",
    "That is continuous integration.",
    1,
    0
  ],
  [
    2,
    "xp",
    "Improving structure, readability, efficiency and security of a program as soon as improvements are found is:",
    [
      "Refactoring",
      "Integration",
      "Sustainable pace",
      "Collective ownership"
    ],
    "إعادة الهيكلة: تحسين البنية أول ما تلقى تحسين.",
    "That is refactoring.",
    1,
    0
  ],
  [
    2,
    "xp",
    "\"The minimal useful set of functionality that provides business value is developed first\" describes:",
    [
      "Small releases",
      "Test-first development",
      "Pair programming",
      "On-site customer"
    ],
    "الإصدارات الصغيرة: أقل مجموعة مفيدة أول.",
    "That describes small releases.",
    0,
    0
  ],
  [
    2,
    "xp",
    "In XP incremental planning, requirements are written as:",
    [
      "User stories",
      "UML diagrams only",
      "Legal contracts",
      "Test cases only"
    ],
    "المتطلبات تنكتب كقصص مستخدم.",
    "Requirements are written as user stories.",
    0,
    0
  ],
  [
    2,
    "xp",
    "Which is NOT one of the widely adopted XP practices listed?",
    [
      "On-site customer",
      "Test-driven development",
      "Continuous integration",
      "Refactoring"
    ],
    "المنتشرة: التخطيط التزايدي، الإصدارات الصغيرة، TDD، الدمج المستمر، وإعادة الهيكلة.",
    "Widely adopted: incremental planning, small releases, TDD, CI, refactoring.",
    0,
    0
  ],
  [
    2,
    "xp",
    "Writing tests first in TDD helps to:",
    [
      "Clarify what the code should actually do",
      "Avoid writing code",
      "Skip integration",
      "Remove the need for refactoring"
    ],
    "كتابة الاختبار أول توضح وش لازم يسوي الكود.",
    "It clarifies what the code should do.",
    0,
    0
  ],
  [
    2,
    "scrum",
    "Scrum provides a framework for agile project:",
    [
      "Organization and planning",
      "Coding standards",
      "Database design",
      "Hardware selection"
    ],
    "Scrum إطار للتنظيم والتخطيط.",
    "Scrum is a framework for agile project organization and planning.",
    1,
    0
  ],
  [
    2,
    "scrum",
    "Does Scrum mandate specific technical practices?",
    [
      "No",
      "Yes, pair programming",
      "Yes, TDD",
      "Yes, UML modelling"
    ],
    "Scrum ما تفرض ممارسات تقنية.",
    "Scrum does not mandate any specific technical practices.",
    1,
    0
  ],
  [
    2,
    "scrum",
    "Who is responsible for identifying product features and attributes in Scrum?",
    [
      "The Product Owner",
      "The ScrumMaster",
      "The development team alone",
      "The customer's lawyer"
    ],
    "مالك المنتج يحدد الميزات.",
    "The Product Owner identifies product features and attributes.",
    1,
    0
  ],
  [
    2,
    "scrum",
    "The ScrumMaster is best described as:",
    [
      "A team coach, not a conventional project manager",
      "The product's financial owner",
      "A senior programmer",
      "An external auditor"
    ],
    "ScrumMaster مدرب الفريق مو مدير مشروع تقليدي.",
    "The ScrumMaster is a coach, not a conventional project manager.",
    1,
    0
  ],
  [
    2,
    "scrum",
    "A typical Scrum development team has:",
    [
      "Five to eight people",
      "One person",
      "20–30 people",
      "Exactly 12 people"
    ],
    "الفريق 5 لـ 8.",
    "A Scrum team has 5–8 people.",
    1,
    0
  ],
  [
    2,
    "scrum",
    "A sprint typically lasts:",
    [
      "2–4 weeks",
      "2–4 months",
      "1 day",
      "1 year"
    ],
    "الـ sprint عادة 2–4 أسابيع.",
    "A sprint is typically 2–4 weeks.",
    1,
    0
  ],
  [
    2,
    "scrum",
    "An estimate of how much work a team can do in a single sprint is called:",
    [
      "Velocity",
      "Backlog",
      "Story",
      "Epic"
    ],
    "الـ Velocity تقدير كم شغل في sprint.",
    "That is velocity.",
    0,
    0
  ],
  [
    2,
    "scrum",
    "Sprint output of high enough quality to be deployed for customer use is:",
    [
      "A potentially shippable product increment",
      "A prototype",
      "A product backlog",
      "A proto-persona"
    ],
    "الزيادة القابلة للشحن جاهزة للاستخدام.",
    "That is a potentially shippable product increment.",
    0,
    0
  ],
  [
    2,
    "scrum",
    "Which is a benefit of Scrum?",
    [
      "Unstable requirements do not hold up progress",
      "No need for customers",
      "No meetings at all",
      "Guaranteed fixed cost"
    ],
    "المتطلبات المتغيرة ما توقف الشغل.",
    "Unstable requirements do not hold up progress.",
    0,
    0
  ],
  [
    2,
    "scrum",
    "The Product Owner is normally:",
    [
      "The product manager",
      "The ScrumMaster",
      "A tester",
      "An investor"
    ],
    "مالك المنتج غالباً مدير المنتج.",
    "The Product Owner is normally the product manager.",
    0,
    0
  ],
  [
    2,
    "backlog",
    "Items in the product backlog are called:",
    [
      "Product backlog items (PBIs)",
      "Sprints",
      "Epics only",
      "Personas"
    ],
    "عناصر الـ backlog اسمها PBIs.",
    "They are product backlog items (PBIs).",
    1,
    0
  ],
  [
    2,
    "backlog",
    "\"Refactor user interface code to improve understandability\" is which type of PBI?",
    [
      "Engineering improvement",
      "User request",
      "Feature",
      "Development activity"
    ],
    "إعادة الهيكلة تحسين هندسي.",
    "It is an engineering improvement.",
    1,
    0
  ],
  [
    2,
    "backlog",
    "\"Establish criteria for the assessment of open source software\" is which type of PBI?",
    [
      "Development activity",
      "Feature",
      "User request",
      "Engineering improvement"
    ],
    "معايير تقييم البرمجيات المفتوحة نشاط تطوير.",
    "It is a development activity.",
    1,
    0
  ],
  [
    2,
    "backlog",
    "\"As a teacher, I want to configure the group of tools…\" is which type of PBI?",
    [
      "Feature (user story)",
      "Engineering improvement",
      "Development activity",
      "Bug report"
    ],
    "هذي ميزة مكتوبة كقصة مستخدم.",
    "It is a feature written as a user story.",
    0,
    0
  ],
  [
    2,
    "backlog",
    "\"Implement encryption for all personal user data\" is which type of PBI?",
    [
      "Engineering improvement",
      "User request",
      "Feature",
      "Development activity"
    ],
    "التشفير تحسين هندسي.",
    "It is an engineering improvement.",
    0,
    0
  ],
  [
    2,
    "backlog",
    "A PBI with enough detail to estimate and implement, with dependencies identified, is:",
    [
      "Ready for implementation",
      "Ready for consideration",
      "Ready for refinement",
      "Done"
    ],
    "جاهز للتنفيذ: تفاصيل كافية والاعتماديات معروفة.",
    "It is ready for implementation.",
    1,
    0
  ],
  [
    2,
    "backlog",
    "High-level, tentative ideas of features in the backlog are:",
    [
      "Ready for consideration",
      "Ready for implementation",
      "Ready for refinement",
      "Accepted"
    ],
    "الأفكار المبدئية جاهزة للنظر.",
    "They are ready for consideration.",
    1,
    0
  ],
  [
    2,
    "backlog",
    "An item agreed to be important, reasonably clear, but needing refinement is:",
    [
      "Ready for refinement",
      "Ready for consideration",
      "Ready for implementation",
      "Rejected"
    ],
    "متفق إنه مهم ويحتاج تفصيل.",
    "It is ready for refinement.",
    1,
    0
  ],
  [
    2,
    "backlog",
    "Which is NOT a product backlog activity?",
    [
      "Deployment",
      "Refinement",
      "Estimation",
      "Prioritization"
    ],
    "الأنشطة: التفصيل، التقدير، الإنشاء، والترتيب.",
    "Activities: refinement, estimation, creation, prioritization.",
    0,
    0
  ],
  [
    2,
    "backlog",
    "Effort required for a PBI is measured in:",
    [
      "Person-hours or person-days (not calendar time)",
      "Calendar weeks",
      "Lines of code",
      "Number of testers"
    ],
    "الجهد بساعات أو أيام شخص مو أيام تقويم.",
    "Effort is in person-hours or person-days, not calendar time.",
    0,
    0
  ],
  [
    2,
    "backlog",
    "Story points are:",
    [
      "An arbitrary relative estimate considering size, complexity, technology and unknowns",
      "Exact hours of work",
      "The number of users",
      "A count of defects"
    ],
    "نقاط القصة تقدير نسبي.",
    "Story points are an arbitrary relative estimate.",
    0,
    0
  ],
  [
    2,
    "backlog",
    "How are story points usually calibrated?",
    [
      "Agree on a baseline task and compare others to it",
      "Measure lines of code",
      "Count users",
      "Use calendar days"
    ],
    "تتفق على مهمة مرجعية وتقارن الباقي فيها.",
    "Agree a baseline task and compare.",
    0,
    0
  ],
  [
    2,
    "backlog",
    "The product backlog is always:",
    [
      "Prioritized, with items to be implemented first at the top",
      "Alphabetical",
      "Random",
      "Sorted by cost only"
    ],
    "الـ backlog دايماً مرتب بالأولوية.",
    "It is always prioritized.",
    0,
    0
  ],
  [
    2,
    "sprints",
    "Timeboxed sprints mean:",
    [
      "Development stops at the end of the sprint whether or not work is complete",
      "The sprint is extended until work is done",
      "There is no end date",
      "Each sprint lasts one year"
    ],
    "الشغل يوقف بنهاية الـ sprint سواء خلص أو لا.",
    "Work stops at the end whether or not it is complete.",
    1,
    0
  ],
  [
    2,
    "sprints",
    "If not all sprint items are completed:",
    [
      "The sprint is not extended; unfinished items return to the product backlog",
      "The sprint is extended",
      "The items are deleted",
      "The team is replaced"
    ],
    "ما يتمدد، والباقي يرجع للـ product backlog.",
    "The sprint isn't extended; unfinished items return to the backlog.",
    1,
    0
  ],
  [
    2,
    "sprints",
    "Which is NOT a benefit of timeboxing?",
    [
      "Unlimited time for each feature",
      "Demonstrable progress",
      "Problem discovery",
      "Work planning"
    ],
    "الفوايد: تقدم ظاهر، اكتشاف المشاكل، وتخطيط الشغل.",
    "Benefits: demonstrable progress, problem discovery, work planning.",
    1,
    0
  ],
  [
    2,
    "sprints",
    "Sprint planning should take no more than:",
    [
      "A day",
      "A week",
      "A month",
      "Two sprints"
    ],
    "تخطيط الـ sprint بالكثير يوم.",
    "Sprint planning should take no more than a day.",
    1,
    0
  ],
  [
    2,
    "sprints",
    "Which is NOT a type of sprint goal?",
    [
      "Marketing goal",
      "Functional",
      "Support",
      "Performance and reliability"
    ],
    "أنواع الأهداف: وظيفي، دعم، أداء وموثوقية.",
    "Goals: functional, support, performance & reliability.",
    1,
    0
  ],
  [
    2,
    "sprints",
    "Key inputs to sprint planning are:",
    [
      "Effort estimates and the team's velocity",
      "The marketing budget",
      "The number of competitors",
      "The office layout"
    ],
    "المدخلات: التقديرات والـ velocity.",
    "Effort estimates and the team's velocity.",
    1,
    0
  ],
  [
    2,
    "sprints",
    "A daily scrum is:",
    [
      "A short daily meeting where the team shares progress, problems and plans",
      "A monthly review",
      "A customer demo",
      "A code review"
    ],
    "اجتماع يومي قصير يتكلمون فيه عن التقدم والمشاكل والخطة.",
    "A short daily meeting to share progress, problems and plans.",
    0,
    0
  ],
  [
    2,
    "sprints",
    "Why are some scrums held as stand-up meetings?",
    [
      "To keep them short",
      "To impress customers",
      "To save chairs",
      "To allow longer discussions"
    ],
    "الوقوف عشان الاجتماع يقصر.",
    "Stand-ups keep the meeting short.",
    0,
    0
  ],
  [
    2,
    "sprints",
    "Sprints typically last:",
    [
      "1–4 weeks",
      "3–6 months",
      "1 hour",
      "1 year"
    ],
    "الـ Sprints قصيرة 1–4 أسابيع.",
    "Sprints are short, 1–4 weeks.",
    0,
    0
  ],
  [
    2,
    "sprints",
    "The output of sprint planning includes:",
    [
      "A sprint backlog",
      "A final product release",
      "A persona",
      "An epic"
    ],
    "التخطيط ينتج sprint backlog.",
    "It produces a sprint backlog.",
    0,
    0
  ],
  [
    2,
    "agileact",
    "Which two practices should always be used in a sprint?",
    [
      "Test automation and continuous integration",
      "Pair programming and on-site customer",
      "UML modelling and formal proofs",
      "Documentation and contracts"
    ],
    "أتمتة الاختبار والدمج المستمر.",
    "Test automation and continuous integration.",
    1,
    0
  ],
  [
    2,
    "agileact",
    "The correct order of the code completeness checklist is:",
    [
      "Reviewed → unit tested → integrated → integration tested → accepted",
      "Accepted → reviewed → integrated → unit tested",
      "Integrated → reviewed → accepted → unit tested",
      "Unit tested → accepted → reviewed → integrated"
    ],
    "الترتيب: مراجع ← وحدات ← مدموج ← اختبار دمج ← مقبول.",
    "Reviewed, unit tested, integrated, integration tested, accepted.",
    1,
    0
  ],
  [
    2,
    "agileact",
    "The last state in the code completeness checklist is:",
    [
      "Accepted",
      "Integrated",
      "Reviewed",
      "Unit tested"
    ],
    "آخر حالة مقبول.",
    "The last state is Accepted.",
    1,
    0
  ],
  [
    2,
    "agileact",
    "Who has the ultimate authority to decide whether the sprint goal has been achieved?",
    [
      "The Product Owner",
      "The ScrumMaster",
      "The newest developer",
      "The customer's manager"
    ],
    "مالك المنتج صاحب القرار.",
    "The Product Owner decides whether the goal was achieved.",
    1,
    0
  ],
  [
    2,
    "agileact",
    "\"Code reviewed\" means:",
    [
      "Another team member checked it meets standards, is commented and refactored",
      "The customer tested it",
      "It was merged",
      "It passed acceptance tests"
    ],
    "عضو ثاني راجعه للمعايير والتعليقات والهيكلة.",
    "Another team member checked standards, comments and refactoring.",
    0,
    0
  ],
  [
    2,
    "agileact",
    "A sprint review also includes:",
    [
      "A process review on how Scrum was used",
      "A hiring decision",
      "A new product vision",
      "Writing the user manual"
    ],
    "المراجعة فيها مراجعة للعملية.",
    "It includes a process review.",
    0,
    0
  ],
  [
    2,
    "agileact",
    "Test automation means:",
    [
      "A suite of executable tests that can be run at any time",
      "Testers work automatically overnight",
      "Customers test the product",
      "No tests are needed"
    ],
    "مجموعة اختبارات تشتغل بأي وقت.",
    "A suite of executable tests runnable at any time.",
    0,
    0
  ],
  [
    2,
    "teams",
    "A self-organizing team:",
    [
      "Coordinates work by discussing tasks and reaching consensus",
      "Is told exactly what to do by a manager",
      "Has no communication",
      "Has no deadlines"
    ],
    "الفريق ذاتي التنظيم ينسق بالنقاش والاتفاق.",
    "It coordinates work by discussion and consensus.",
    1,
    0
  ],
  [
    2,
    "teams",
    "Team-focused external interactions are handled by:",
    [
      "The ScrumMaster",
      "The Product Owner",
      "The developers",
      "The customer"
    ],
    "التعامل الخارجي للفريق ← ScrumMaster.",
    "Team-focused external interactions → ScrumMaster.",
    1,
    0
  ],
  [
    2,
    "teams",
    "Product-focused external interactions are handled by:",
    [
      "The Product Owner",
      "The ScrumMaster",
      "The developers",
      "The HR department"
    ],
    "التعامل الخارجي للمنتج ← مالك المنتج.",
    "Product-focused external interactions → Product Owner.",
    1,
    0
  ],
  [
    2,
    "teams",
    "Is rotating the project-management reporting role among team members viable?",
    [
      "No, it is not viable; often the ScrumMaster takes it",
      "Yes, always",
      "Yes, daily rotation is ideal",
      "Only for teams over 20"
    ],
    "تدوير الدور ما ينفع، وغالباً ياخذه ScrumMaster.",
    "Rotation isn't viable; often the ScrumMaster takes the role.",
    1,
    0
  ],
  [
    2,
    "teams",
    "Which is NOT one of the project management responsibilities?",
    [
      "Writing all the code",
      "Reporting",
      "Administration",
      "People"
    ],
    "المسؤوليات: تقارير، إدارة، أشخاص.",
    "Responsibilities: reporting, administration, people.",
    1,
    0
  ],
  [
    2,
    "teams",
    "Budget, schedule, risks and progress belong to which PM responsibility?",
    [
      "Reporting",
      "Administration",
      "People",
      "Development"
    ],
    "هذي ضمن التقارير.",
    "They belong to reporting.",
    0,
    0
  ],
  [
    2,
    "teams",
    "Vacations, absence and hiring belong to which PM responsibility?",
    [
      "People",
      "Reporting",
      "Administration",
      "Development"
    ],
    "هذي ضمن الأشخاص.",
    "They belong to people management.",
    0,
    0
  ],
  [
    2,
    "teams",
    "Finance, compliance and procurement belong to which PM responsibility?",
    [
      "Administration",
      "People",
      "Reporting",
      "Testing"
    ],
    "هذي ضمن الإدارة.",
    "They belong to administration.",
    0,
    0
  ],
  [
    2,
    "teams",
    "Which Scrum assumption is often not true in practice?",
    [
      "The team is co-located, full-time and can all attend a morning meeting",
      "Teams use software",
      "Teams have members",
      "Products have features"
    ],
    "Scrum يفترض فريق متفرغ في نفس المكان، وهذا مو دايماً صحيح.",
    "Scrum assumes a co-located full-time team, which is often not true.",
    0,
    0
  ],
  [
    3,
    "drivers",
    "Which is NOT one of the three factors driving software product design?",
    [
      "Lower hardware prices",
      "Needs not met by current products",
      "Dissatisfaction with existing products",
      "Changes in technology"
    ],
    "العوامل: احتياجات ما تنلبى، عدم الرضا، وتغير التقنية.",
    "Drivers: unmet needs, dissatisfaction, technology change.",
    1,
    0
  ],
  [
    3,
    "drivers",
    "A 'print' feature or 'new document' feature is an example of:",
    [
      "A feature — a fragment of functionality",
      "A persona",
      "A scenario",
      "An epic"
    ],
    "الميزة جزء من الوظائف.",
    "A feature is a fragment of functionality.",
    1,
    0
  ],
  [
    3,
    "drivers",
    "What should you create before programming a product?",
    [
      "A feature list",
      "The final user manual",
      "A marketing video",
      "A list of bugs"
    ],
    "تسوي قائمة الميزات قبل البرمجة.",
    "Create a feature list before programming.",
    1,
    0
  ],
  [
    3,
    "drivers",
    "The correct flow from user understanding to features is:",
    [
      "Personas → scenarios → stories → features",
      "Features → stories → personas → scenarios",
      "Stories → personas → features → scenarios",
      "Scenarios → features → personas → stories"
    ],
    "الشخصيات ← السيناريوهات ← القصص ← الميزات.",
    "Personas inspire scenarios, which become stories that define features.",
    1,
    0
  ],
  [
    3,
    "drivers",
    "Which is NOT part of the feature description template?",
    [
      "Price",
      "Input",
      "Activation",
      "Output"
    ],
    "القالب: مدخل، تفعيل، إجراء، مخرج.",
    "Template: input, activation, action, output.",
    1,
    0
  ],
  [
    3,
    "drivers",
    "In the feature template, \"how the input data is processed\" is:",
    [
      "Action",
      "Activation",
      "Input",
      "Output"
    ],
    "الإجراء: كيف تتعالج البيانات.",
    "That is the action.",
    0,
    0
  ],
  [
    3,
    "drivers",
    "In the feature template, \"how the user activates the feature\" is:",
    [
      "Activation",
      "Action",
      "Output",
      "Input"
    ],
    "التفعيل: كيف يشغلها المستخدم.",
    "That is activation.",
    0,
    0
  ],
  [
    3,
    "drivers",
    "Which is a technique for understanding users?",
    [
      "Ethnography",
      "Compilation",
      "Refactoring",
      "Continuous integration"
    ],
    "من الطرق: المقابلات، الاستبيانات، الإثنوغرافيا، تحليل المهام.",
    "Ethnography is one user-understanding technique.",
    0,
    0
  ],
  [
    3,
    "personas",
    "Personas are:",
    [
      "Imagined users — character portraits of types of users",
      "Real customer contracts",
      "Test scripts",
      "Database tables"
    ],
    "الشخصيات مستخدمين متخيلين.",
    "Personas are imagined users.",
    1,
    0
  ],
  [
    3,
    "personas",
    "The main benefit of personas is that they help developers to:",
    [
      "Empathize with potential users",
      "Write faster code",
      "Avoid testing",
      "Choose a database"
    ],
    "تخلي المطورين يتعاطفون مع المستخدم.",
    "They help developers empathize with users.",
    1,
    0
  ],
  [
    3,
    "personas",
    "Personas developed from limited user information are called:",
    [
      "Proto-personas",
      "Epics",
      "Stories",
      "Archetypes"
    ],
    "اللي تنبني على معلومات قليلة اسمها proto-personas.",
    "They are proto-personas.",
    1,
    0
  ],
  [
    3,
    "personas",
    "Which is NOT one of the persona aspects?",
    [
      "Salary history",
      "Personalization",
      "Education",
      "Relevance"
    ],
    "الجوانب: التخصيص، الوظيفة، التعليم، الصلة.",
    "Aspects: personalization, job-related, education, relevance.",
    1,
    0
  ],
  [
    3,
    "personas",
    "The 'education' aspect of a persona is important especially for:",
    [
      "User interface design",
      "Database design",
      "Network design",
      "Pricing"
    ],
    "التعليم والمهارات مهمة لتصميم الواجهة.",
    "It matters for interface design.",
    0,
    0
  ],
  [
    3,
    "personas",
    "The 'relevance' aspect describes:",
    [
      "Why the persona might be interested in using the product",
      "The persona's name",
      "The persona's photo",
      "The persona's salary"
    ],
    "الصلة: ليش يهمه المنتج.",
    "Why they might be interested in the product.",
    0,
    0
  ],
  [
    3,
    "personas",
    "Which persona example is a school IT technician and Python programmer?",
    [
      "Elena",
      "Jack",
      "Emma",
      "Moore"
    ],
    "Elena فنية تقنية مبرمجة Python.",
    "Elena is the IT technician persona.",
    0,
    0
  ],
  [
    3,
    "personas",
    "Emma, the history teacher persona, is characterized as:",
    [
      "Not interested in digital technology and wanting less admin",
      "A power user",
      "A primary school teacher confident with tech",
      "A Python programmer"
    ],
    "Emma ما تهتم بالتقنية وتبي إدارة أقل.",
    "Emma isn't interested in digital tech and wants less admin.",
    0,
    0
  ],
  [
    3,
    "personas",
    "Personas help avoid:",
    [
      "Unwarranted assumptions and unneeded features",
      "Writing any code",
      "Talking to customers",
      "Using version control"
    ],
    "تمنع الافتراضات والميزات الزايدة.",
    "They help avoid unwarranted assumptions and unneeded features.",
    0,
    0
  ],
  [
    3,
    "scenarios",
    "A scenario is:",
    [
      "A narrative describing how users might use the system",
      "A system specification",
      "A test case",
      "A database schema"
    ],
    "السيناريو قصة سردية.",
    "A scenario is a narrative of how users might use the system.",
    1,
    0
  ],
  [
    3,
    "scenarios",
    "Is a scenario a system specification?",
    [
      "No",
      "Yes",
      "Only for agile teams",
      "Only for embedded systems"
    ],
    "السيناريو مو مواصفات.",
    "No, a scenario is not a specification.",
    1,
    0
  ],
  [
    3,
    "scenarios",
    "Which is NOT an element of a scenario?",
    [
      "Source code",
      "Scenario name",
      "Overall objective",
      "Personas of actors involved"
    ],
    "العناصر: اسم، هدف، شخصيات، وش يتطلب، المشكلة، طرق الحل.",
    "Source code is not a scenario element.",
    1,
    0
  ],
  [
    3,
    "scenarios",
    "Scenarios should always be written from:",
    [
      "The user's perspective",
      "The developer's perspective",
      "The investor's perspective",
      "The compiler's perspective"
    ],
    "تنكتب من منظور المستخدم.",
    "Always from the user's perspective.",
    1,
    0
  ],
  [
    3,
    "scenarios",
    "Why are users not good at writing scenarios?",
    [
      "They add too much detail, base them on current work, and can't generalize",
      "They don't know the product name",
      "They write too briefly",
      "They only write code"
    ],
    "تفاصيل زايدة ويعتمدون على شغلهم الحالي وما يعممون.",
    "Too detailed, based on current work, unable to generalize.",
    1,
    0
  ],
  [
    3,
    "scenarios",
    "Typical scenario length is:",
    [
      "Two to three paragraphs up to a page",
      "One word",
      "50 pages",
      "Exactly one sentence"
    ],
    "من فقرتين لين صفحة.",
    "From 2–3 paragraphs up to a page.",
    0,
    0
  ],
  [
    3,
    "scenarios",
    "A good way to involve users with scenarios is to:",
    [
      "Write an imaginary scenario and ask users what you got wrong",
      "Ask users to write all scenarios alone",
      "Never show users scenarios",
      "Let users write the code"
    ],
    "اكتب سيناريو واسألهم وش الغلط.",
    "Write one yourself and ask users what's wrong.",
    0,
    0
  ],
  [
    3,
    "scenarios",
    "In Jack's scenario, why does photo sharing need moderation?",
    [
      "Pre-teen children can't understand copyright and privacy issues",
      "Photos are too large",
      "The school has no internet",
      "Teachers don't like photos"
    ],
    "الأطفال ما يفهمون الحقوق والخصوصية.",
    "Children can't understand copyright and privacy.",
    0,
    0
  ],
  [
    3,
    "stories",
    "User stories are:",
    [
      "Finer-grain narratives describing a single thing a user wants",
      "High-level scenarios",
      "Test plans",
      "Marketing slogans"
    ],
    "القصص أدق: شي واحد يبيه المستخدم.",
    "Finer-grain narratives of a single thing a user wants.",
    1,
    0
  ],
  [
    3,
    "stories",
    "The standard user story format is:",
    [
      "As a <role>, I <want|need> to <do something>",
      "Given <context> then <result>",
      "IF <condition> THEN <action>",
      "FOR <customer> WHO <need>"
    ],
    "الصيغة: As a <دور>, I <want|need> to <شي>.",
    "As a <role>, I <want|need> to <do something>.",
    1,
    0
  ],
  [
    3,
    "stories",
    "In \"… so that <reason>\", the 'so that' part provides:",
    [
      "The justification / reason",
      "The role",
      "The action",
      "The persona's name"
    ],
    "so that = السبب.",
    "It provides the reason/justification.",
    1,
    0
  ],
  [
    3,
    "stories",
    "A user story about a complex feature that may take several sprints is:",
    [
      "An epic",
      "A persona",
      "A PBI state",
      "A scenario"
    ],
    "القصة اللي تاخذ كذا sprint = epic.",
    "That is an epic.",
    1,
    0
  ],
  [
    3,
    "stories",
    "A user story should focus on a feature that can be implemented within:",
    [
      "A single sprint",
      "Several releases",
      "One day exactly",
      "One year"
    ],
    "القصة تنبني في sprint واحد.",
    "Within a single sprint.",
    1,
    0
  ],
  [
    3,
    "stories",
    "\"Backup and restore of applications, files, directories or the whole system\" is an example of:",
    [
      "An epic",
      "A simple story",
      "A persona",
      "An engineering improvement"
    ],
    "مثال epic من السلايدات.",
    "It is the slides' epic example.",
    0,
    0
  ],
  [
    3,
    "stories",
    "Why are scenarios still used alongside stories?",
    [
      "They read more naturally and provide more context",
      "They are shorter",
      "They are executable",
      "They replace testing"
    ],
    "أطبع في القراءة وفيها سياق أكثر.",
    "They read more naturally and provide more context.",
    0,
    0
  ],
  [
    3,
    "stories",
    "Many Scrum users represent the product backlog as:",
    [
      "User stories",
      "Personas",
      "UML diagrams",
      "Contracts"
    ],
    "كثير يكتبون الـ backlog كقصص.",
    "As user stories.",
    0,
    0
  ],
  [
    3,
    "features",
    "Features should be:",
    [
      "Independent, coherent and relevant",
      "Dependent, complex and novel",
      "Hidden, large and automated",
      "Expensive, rare and fixed"
    ],
    "مستقلة ومتماسكة وذات صلة.",
    "Independent, coherent, relevant.",
    1,
    0
  ],
  [
    3,
    "features",
    "A coherent feature:",
    [
      "Is linked to a single item of functionality with no side-effects",
      "Depends on activation order",
      "Does many unrelated things",
      "Is obscure functionality"
    ],
    "المتماسكة وظيفة وحدة بدون آثار جانبية.",
    "Linked to one item of functionality, no side-effects.",
    1,
    0
  ],
  [
    3,
    "features",
    "An independent feature:",
    [
      "Does not depend on how other features are implemented or their activation order",
      "Must run before all others",
      "Uses no input",
      "Has no output"
    ],
    "المستقلة ما تعتمد على تنفيذ غيرها ولا ترتيب تشغيله.",
    "It doesn't depend on others' implementation or activation order.",
    1,
    0
  ],
  [
    3,
    "features",
    "Which is NOT one of the feature design trade-offs?",
    [
      "Speed vs memory",
      "Simplicity vs functionality",
      "Familiarity vs novelty",
      "Automation vs control"
    ],
    "الموازنات: البساطة/الوظائف، المألوف/الجديد، الأتمتة/التحكم.",
    "Trade-offs: simplicity–functionality, familiarity–novelty, automation–control.",
    1,
    0
  ],
  [
    3,
    "features",
    "Which is NOT a type of knowledge needed for feature design?",
    [
      "Legal knowledge",
      "User knowledge",
      "Domain knowledge",
      "Technology knowledge"
    ],
    "المعرفة: المستخدم، المنتجات، المجال، التقنية.",
    "User, product, domain and technology knowledge.",
    1,
    0
  ],
  [
    3,
    "features",
    "A relevant feature:",
    [
      "Reflects the way users normally carry out tasks",
      "Provides obscure functionality",
      "Depends on other features",
      "Has side-effects"
    ],
    "ذات الصلة تعكس شغل المستخدم الطبيعي.",
    "It reflects how users normally carry out tasks.",
    0,
    0
  ],
  [
    3,
    "features",
    "Knowledge of existing products in the area is:",
    [
      "Product knowledge",
      "Domain knowledge",
      "User knowledge",
      "Technology knowledge"
    ],
    "معرفة المنتجات الموجودة.",
    "That is product knowledge.",
    0,
    0
  ],
  [
    3,
    "creep",
    "Feature creep is:",
    [
      "Adding new features in response to requests without considering general usefulness",
      "Removing features",
      "Slow software",
      "A type of persona"
    ],
    "تضخم الميزات: إضافة بدون تفكير في الفايدة العامة.",
    "Adding features without considering general usefulness.",
    1,
    0
  ],
  [
    3,
    "creep",
    "Which is a reason for feature creep?",
    [
      "Product managers are reluctant to say 'no'",
      "Users never request features",
      "Teams are too small",
      "Testing is automated"
    ],
    "مدير المنتج ما يقدر يقول لا.",
    "PMs are reluctant to say no.",
    1,
    0
  ],
  [
    3,
    "creep",
    "Feature derivation highlights which phrases in scenarios?",
    [
      "Active verbs such as use and choose",
      "Nouns only",
      "Adjectives",
      "Numbers"
    ],
    "الأفعال مثل use وchoose.",
    "Active verbs such as use and choose.",
    1,
    0
  ],
  [
    3,
    "creep",
    "Which question helps avoid feature creep?",
    [
      "Can it be implemented by extending an existing feature?",
      "How expensive can we make it?",
      "Can we copy all competitors?",
      "Can we hide it?"
    ],
    "هل تنحل بتوسيع ميزة موجودة؟",
    "Can it be implemented by extending an existing feature?",
    1,
    0
  ],
  [
    3,
    "creep",
    "The feature list is:",
    [
      "The output of the feature identification process",
      "The first sprint backlog",
      "The product vision",
      "A list of personas"
    ],
    "قائمة الميزات ناتج التحديد.",
    "It is the output of feature identification.",
    1,
    0
  ],
  [
    3,
    "creep",
    "Which is NOT one of the three reasons for feature creep?",
    [
      "Developers dislike writing code",
      "PMs reluctant to say no",
      "Matching competitors' features",
      "Supporting both inexperienced and experienced users"
    ],
    "الأسباب الثلاثة: ما يقول لا، يقلدون المنافسين، المبتدئ والخبير.",
    "The three reasons don't include disliking coding.",
    0,
    0
  ],
  [
    3,
    "creep",
    "Why does user research alone rarely help you innovate?",
    [
      "Scenarios tell you how users work now",
      "Users lie",
      "Research is too cheap",
      "It is illegal"
    ],
    "السيناريوهات تقول كيف يشتغلون الحين.",
    "Scenarios only show how users work now.",
    0,
    0
  ],
  [
    3,
    "creep",
    "Features in the feature list can be described using:",
    [
      "An input-action-output template, structured narrative, or user stories",
      "Only source code",
      "Only diagrams",
      "Only contracts"
    ],
    "قالب مدخل-إجراء-مخرج، سرد منظم، أو قصص.",
    "Input-action-output, structured narrative or user stories.",
    0,
    0
  ],
  [
    4,
    "archdef",
    "Which is NOT part of architectural design as described in the chapter?",
    [
      "The exact implementation code of each component",
      "Overall organization",
      "Decomposition into components",
      "Technologies used to build the software"
    ],
    "التصميم المعماري يشمل التنظيم والتقسيم والسيرفرات والتقنيات، مو كود التنفيذ.",
    "Architectural design covers organization, decomposition, server organization and technologies, not implementation code.",
    1,
    0
  ],
  [
    4,
    "archdef",
    "According to the IEEE definition, software architecture is the fundamental organization of a system embodied in its:",
    [
      "Components, their relationships to each other and to the environment, and the principles guiding its design and evolution",
      "Source code and test cases",
      "User interface and database only",
      "Hardware and network"
    ],
    "تعريف IEEE: المكونات وعلاقاتها والبيئة والمبادئ.",
    "IEEE: components, relationships, environment and guiding principles.",
    1,
    0
  ],
  [
    4,
    "archdef",
    "Considering 'architecture' as a verb means:",
    [
      "The process of defining the system's structures",
      "The structure of a system",
      "The source code",
      "The hardware"
    ],
    "«فعل» = عملية تعريف البنية، و«اسم» = البنية نفسها.",
    "As a verb it is the process of defining structures; as a noun, the structure.",
    0,
    0
  ],
  [
    4,
    "archdef",
    "A software component is:",
    [
      "An element that implements a coherent set of functionality or features",
      "A hardware device",
      "A database table",
      "A test case"
    ],
    "المكوّن عنصر ينفذ مجموعة متماسكة من الوظائف.",
    "A component implements a coherent set of functionality.",
    1,
    0
  ],
  [
    4,
    "archdef",
    "When designing the architecture, you should:",
    [
      "Design the component interface and leave implementation to a later stage",
      "Decide exactly how each component is implemented",
      "Write the final code",
      "Ignore components"
    ],
    "تصمم الواجهة وتأجل التنفيذ.",
    "Design interfaces; implement later.",
    1,
    0
  ],
  [
    4,
    "archdef",
    "The architecture of a software product affects its:",
    [
      "Performance, usability, security, reliability and maintainability",
      "Logo and colors only",
      "Price only",
      "Marketing plan"
    ],
    "المعمارية تأثر على الأداء والاستخدام والأمان والموثوقية والصيانة.",
    "Architecture affects performance, usability, security, reliability, maintainability.",
    0,
    0
  ],
  [
    4,
    "archwhy",
    "Architecture has a fundamental influence on which system properties?",
    [
      "Non-functional properties",
      "Only functional features",
      "Only the user interface colors",
      "Only the documentation"
    ],
    "المعمارية تأثر على الخصائص غير الوظيفية.",
    "Architecture strongly influences non-functional properties.",
    1,
    0
  ],
  [
    4,
    "archwhy",
    "\"Can the system continue to deliver user services in the event of partial failure or external attack?\" describes:",
    [
      "Resilience",
      "Availability",
      "Usability",
      "Responsiveness"
    ],
    "المرونة: يكمل مع العطل أو الهجوم.",
    "That is resilience.",
    1,
    0
  ],
  [
    4,
    "archwhy",
    "\"Can the system deliver its services when requested by users?\" describes:",
    [
      "Availability",
      "Resilience",
      "Maintainability",
      "Security"
    ],
    "التوفر: يقدم الخدمة وقت ما تنطلب.",
    "That is availability.",
    1,
    0
  ],
  [
    4,
    "archwhy",
    "\"Does the system return results to users in a reasonable time?\" describes:",
    [
      "Responsiveness",
      "Reliability",
      "Usability",
      "Availability"
    ],
    "سرعة الاستجابة.",
    "That is responsiveness.",
    1,
    0
  ],
  [
    4,
    "archwhy",
    "\"Can the system be readily updated and new features added without undue costs?\" describes:",
    [
      "Maintainability",
      "Security",
      "Resilience",
      "Responsiveness"
    ],
    "سهولة الصيانة.",
    "That is maintainability.",
    1,
    0
  ],
  [
    4,
    "archwhy",
    "\"Do the system features behave as expected by both developers and users?\" describes:",
    [
      "Reliability",
      "Usability",
      "Availability",
      "Responsiveness"
    ],
    "الموثوقية.",
    "That is reliability.",
    0,
    0
  ],
  [
    4,
    "archwhy",
    "Why should architects minimize complexity?",
    [
      "Complex systems are harder and more expensive to understand and change, and modifications introduce more bugs and vulnerabilities",
      "Complex systems are always faster",
      "Complexity improves security",
      "Customers prefer complex systems"
    ],
    "التعقيد يصعّب الفهم والتعديل ويزيد الأخطاء والثغرات.",
    "Complexity makes change harder and increases bugs and vulnerabilities.",
    1,
    0
  ],
  [
    4,
    "archsec",
    "A benefit of a centralized security architecture is:",
    [
      "It is easier to design and build protection and information is accessed more efficiently",
      "If breached you lose only part of the information",
      "It is cheaper to access distributed data",
      "It cannot be breached"
    ],
    "المركزي أسهل في الحماية وأسرع وصول.",
    "Centralized: easier protection, efficient access.",
    1,
    0
  ],
  [
    4,
    "archsec",
    "The main risk of a centralized security architecture is:",
    [
      "If security is breached, you lose everything",
      "Access is very slow",
      "It costs more to protect",
      "It needs more servers"
    ],
    "لو انخرق تخسر كل شي.",
    "If breached, you lose everything.",
    1,
    0
  ],
  [
    4,
    "archsec",
    "In the Rogue One example, a distributed security architecture would have meant:",
    [
      "The rebels would have had to breach security in all locations to steal the complete plans",
      "The plans were safer in one place",
      "No security was needed",
      "The plans could be accessed faster"
    ],
    "الموزع يجبر المهاجم يخترق كل المواقع.",
    "Distributed means breaching all locations.",
    0,
    0
  ],
  [
    4,
    "archsec",
    "In a shared database architecture (C1 and C2 share a database), making C1 faster by changing the database means:",
    [
      "C2 also has to be changed",
      "C2 is not affected",
      "The database is removed",
      "C1 gets slower"
    ],
    "تغيير القاعدة المشتركة يجبر C2 يتغير.",
    "Changing the shared database forces C2 to change.",
    1,
    0
  ],
  [
    4,
    "archsec",
    "A multiple-database architecture needs component C3 to:",
    [
      "Keep the data shared by C1 and C2 consistent when it changes",
      "Encrypt the data",
      "Display the user interface",
      "Replace C1"
    ],
    "C3 يحافظ على تطابق البيانات.",
    "C3 keeps shared data consistent.",
    1,
    0
  ],
  [
    4,
    "archsec",
    "A disadvantage of a multi-database architecture is that it:",
    [
      "May run more slowly and cost more to implement and change",
      "Forces every component to change together",
      "Has no consistency issues",
      "Is always faster"
    ],
    "ممكن أبطأ وأغلى.",
    "It may be slower and more expensive.",
    0,
    0
  ],
  [
    4,
    "archissues",
    "Which is NOT one of the five issues that influence architectural decisions?",
    [
      "Programming language syntax",
      "Product lifetime",
      "Software reuse",
      "Number of users"
    ],
    "العوامل: الخصائص غير الوظيفية، العمر، إعادة الاستخدام، عدد المستخدمين، التوافق.",
    "Influences: non-functional characteristics, lifetime, reuse, number of users, compatibility.",
    1,
    0
  ],
  [
    4,
    "archissues",
    "Why does software reuse constrain your architectural choices?",
    [
      "You must fit your design around the software being reused",
      "It increases development time",
      "It removes all components",
      "It requires more users"
    ],
    "لازم تصمم حول البرنامج المعاد استخدامه.",
    "You must design around the reused software.",
    1,
    0
  ],
  [
    4,
    "archissues",
    "If you anticipate a long product lifetime, you need:",
    [
      "An architecture that can evolve to accommodate new features and technology",
      "A single fixed release",
      "No revisions",
      "Fewer users"
    ],
    "العمر الطويل يحتاج معمارية تتطور.",
    "A long lifetime needs an evolvable architecture.",
    1,
    0
  ],
  [
    4,
    "archissues",
    "For consumer software delivered over the Internet, the number of users:",
    [
      "Can change very quickly, so the system should scale up and down",
      "Never changes",
      "Doesn't affect performance",
      "Is always small"
    ],
    "عدد المستخدمين يتغير بسرعة فلازم التوسع.",
    "Users can change quickly; design to scale.",
    0,
    0
  ],
  [
    4,
    "archissues",
    "Why can you usually optimize only the most important non-functional characteristics?",
    [
      "Some characteristics are opposing",
      "They are all identical",
      "They don't affect users",
      "They are free to implement"
    ],
    "بعضها متعارض.",
    "Some characteristics oppose each other.",
    0,
    0
  ],
  [
    4,
    "tradeoffs",
    "Decomposing a system into many fine-grain components improves maintainability but:",
    [
      "Can make the software slower because components take time to communicate",
      "Always makes it faster",
      "Removes security",
      "Reduces the number of users"
    ],
    "المكونات الكثيرة تبطّئ بسبب التواصل.",
    "Many components slow the system due to communication.",
    1,
    0
  ],
  [
    4,
    "tradeoffs",
    "Security can be achieved by designing protection as:",
    [
      "A series of layers implemented as separate components",
      "A single component",
      "No authentication",
      "One password for all users"
    ],
    "الأمان طبقات بمكونات منفصلة.",
    "Security as layers in separate components.",
    1,
    0
  ],
  [
    4,
    "tradeoffs",
    "Layered security affects usability because:",
    [
      "Users must remember information like passwords and are slowed down, so they look for work-arounds",
      "It makes the system faster",
      "Users never need to log in",
      "It removes features"
    ],
    "الطبقات تبطّئ المستخدم فيدوّر طرق يتهرب فيها.",
    "Users are slowed down and seek work-arounds.",
    1,
    0
  ],
  [
    4,
    "tradeoffs",
    "Which is NOT a way to reduce the usability impact of security?",
    [
      "Add as many security layers as possible",
      "Avoid too many security layers",
      "Don't enforce unnecessary security",
      "Provide helper components that reduce user load"
    ],
    "الحل طبقات أقل مو أكثر.",
    "Use fewer layers, not more.",
    0,
    0
  ],
  [
    4,
    "tradeoffs",
    "Architecturally, availability is achieved by:",
    [
      "Having redundant components with sensor and switching components",
      "Removing all components",
      "Using one server only",
      "Adding more passwords"
    ],
    "التوفر = احتياط + استشعار + تحويل.",
    "Redundancy plus sensor and switching components.",
    1,
    0
  ],
  [
    4,
    "tradeoffs",
    "Why does high availability conflict with time-to-market?",
    [
      "Extra components take time, increase cost and complexity, and increase the chance of bugs",
      "Availability needs no components",
      "It reduces cost",
      "It removes testing"
    ],
    "المكونات الزايدة تاخذ وقت وتزيد التكلفة والأخطاء.",
    "Extra components cost time and add complexity.",
    1,
    0
  ],
  [
    4,
    "tradeoffs",
    "Availability is normally expressed as:",
    [
      "A percentage of the time the system is available",
      "The number of users",
      "The number of components",
      "Lines of code"
    ],
    "نسبة وقت التشغيل.",
    "A percentage of uptime.",
    0,
    0
  ],
  [
    4,
    "comporg",
    "Which is NOT one of the three architectural design questions?",
    [
      "Which colors should the user interface use?",
      "How should the system be organized as components?",
      "How should components be distributed and communicate?",
      "What technologies should be used and which components reused?"
    ],
    "الأسئلة: التنظيم، التوزيع والتواصل، التقنيات وإعادة الاستخدام.",
    "Questions: organization, distribution/communication, technologies/reuse.",
    1,
    0
  ],
  [
    4,
    "comporg",
    "Decomposition involves:",
    [
      "Analysing large-scale components and representing them as finer-grain components",
      "Ignoring details",
      "Merging all components into one",
      "Writing test cases"
    ],
    "تقسيم المكونات الكبيرة لأصغر.",
    "Splitting large components into finer-grain ones.",
    1,
    0
  ],
  [
    4,
    "comporg",
    "Abstraction in software design means:",
    [
      "Focusing on essential elements without concern for details",
      "Writing all details first",
      "Removing components",
      "Testing the code"
    ],
    "التركيز على الأساسيات.",
    "Focus on essentials, ignore details.",
    0,
    0
  ],
  [
    4,
    "comporg",
    "Complexity in a system architecture arises because of:",
    [
      "The number and nature of relationships between components",
      "The color of the UI",
      "The number of developers",
      "The programming language name"
    ],
    "التعقيد من العلاقات.",
    "Complexity comes from component relationships.",
    1,
    0
  ],
  [
    4,
    "comporg",
    "To reduce complexity you should:",
    [
      "Localize relationships and reduce shared dependencies",
      "Share as much data as possible",
      "Spread related components across modules",
      "Increase dependencies"
    ],
    "حصر العلاقات وتقليل الاعتماديات المشتركة.",
    "Localize relationships; reduce shared dependencies.",
    1,
    0
  ],
  [
    4,
    "comporg",
    "Which is NOT one of the component relationships in Figure 4.7?",
    [
      "C1 replaces C2",
      "C1 is-part-of C2",
      "C1 uses C2",
      "C1 shares-data-with C2"
    ],
    "العلاقات: is-part-of، uses، is-located-with، shares-data-with.",
    "Relationships: is-part-of, uses, is-located-with, shares-data-with.",
    0,
    0
  ],
  [
    4,
    "comporg",
    "\"Organize your architecture into components that focus on a single concern\" is the guideline:",
    [
      "Separation of concerns",
      "Stable interfaces",
      "Implement once",
      "Programmability"
    ],
    "فصل الاهتمامات.",
    "Separation of concerns.",
    1,
    0
  ],
  [
    4,
    "comporg",
    "\"Avoid duplicating functionality at different places in your architecture\" is the guideline:",
    [
      "Implement once",
      "Stable interfaces",
      "Separation of concerns",
      "Replaceability"
    ],
    "نفّذ مرة وحدة.",
    "Implement once.",
    1,
    0
  ],
  [
    4,
    "comporg",
    "\"Design component interfaces that are coherent and that change slowly\" is the guideline:",
    [
      "Stable interfaces",
      "Implement once",
      "Separation of concerns",
      "Extensibility"
    ],
    "واجهات ثابتة.",
    "Stable interfaces.",
    0,
    0
  ],
  [
    4,
    "layers",
    "In a layered architecture, components at level X should interact with:",
    [
      "Only the APIs of the components in level X−1",
      "Any layer directly",
      "Only the top layer",
      "Only the database"
    ],
    "بين الطبقات المتجاورة بس.",
    "Only level X−1 APIs, not across layers.",
    1,
    0
  ],
  [
    4,
    "layers",
    "Within each layer, components:",
    [
      "Are independent and do not overlap in functionality",
      "Duplicate each other",
      "Must be in different modules",
      "Have no functionality"
    ],
    "مستقلة وما تتداخل.",
    "Independent and non-overlapping.",
    0,
    0
  ],
  [
    4,
    "layers",
    "Cross-cutting concerns are:",
    [
      "Systemic concerns that affect the whole system and all layers",
      "Concerns of a single layer only",
      "Functional features of the UI",
      "Database tables"
    ],
    "اهتمامات شاملة لكل الطبقات.",
    "Systemic concerns affecting all layers.",
    1,
    0
  ],
  [
    4,
    "layers",
    "Which are examples of cross-cutting concerns in Figure 4.9?",
    [
      "Security, performance, reliability",
      "User interface, application, hardware",
      "HTML, CSS, JavaScript",
      "GET, POST, PUT"
    ],
    "الأمان والأداء والموثوقية.",
    "Security, performance, reliability.",
    1,
    0
  ],
  [
    4,
    "layers",
    "Why is improving security after a system has been designed often difficult?",
    [
      "Because security is a cross-cutting concern that affects every layer",
      "Because security is a single layer",
      "Because users don't need security",
      "Because databases can't be secured"
    ],
    "لأن الأمان عابر لكل الطبقات.",
    "Security is cross-cutting.",
    1,
    0
  ],
  [
    4,
    "layers",
    "Having only a single security component in a system:",
    [
      "Represents a critical system vulnerability",
      "Makes the system more resilient",
      "Is recommended",
      "Improves usability"
    ],
    "مكوّن أمان واحد ثغرة خطيرة.",
    "A single security component is a critical vulnerability.",
    0,
    0
  ],
  [
    4,
    "layers",
    "Which is the correct order (top to bottom) of the generic web-based layered architecture?",
    [
      "UI → Authentication & UI management → Application-specific functionality → Basic shared services → Transaction & database management",
      "Database → UI → Application → Shared services → Authentication",
      "Application → UI → Database → Authentication → Shared services",
      "Shared services → UI → Database → Application → Authentication"
    ],
    "من فوق: الواجهة، المصادقة، التطبيق، الخدمات المشتركة، قاعدة البيانات.",
    "UI, authentication/UI management, application, shared services, database.",
    1,
    0
  ],
  [
    4,
    "layers",
    "Which layer may include JavaScript components for input validation?",
    [
      "Browser-based or mobile user interface",
      "Basic shared services",
      "Database and transaction management",
      "Application-specific functionality"
    ],
    "طبقة الواجهة.",
    "The browser/mobile UI layer.",
    0,
    0
  ],
  [
    4,
    "ilearn",
    "Which is NOT one of the iLearn architectural design principles?",
    [
      "Centralization",
      "Replaceability",
      "Extensibility",
      "Minimum work"
    ],
    "المبادئ: replaceability، extensibility، age-appropriate، programmability، minimum work.",
    "Principles: replaceability, extensibility, age-appropriate, programmability, minimum work.",
    1,
    0
  ],
  [
    4,
    "ilearn",
    "\"Users who do not wish to change the system should not have to do extra work\" is the principle:",
    [
      "Minimum work",
      "Programmability",
      "Replaceability",
      "Extensibility"
    ],
    "أقل جهد.",
    "Minimum work.",
    1,
    0
  ],
  [
    4,
    "ilearn",
    "\"It should be easy for users to create their own applications by linking existing applications\" is:",
    [
      "Programmability",
      "Extensibility",
      "Replaceability",
      "Age-appropriate"
    ],
    "قابلية البرمجة.",
    "Programmability.",
    0,
    0
  ],
  [
    4,
    "ilearn",
    "The iLearn principles led to the decision that the system should be:",
    [
      "Service-oriented",
      "Monolithic",
      "Stand-alone only",
      "Hardware-based"
    ],
    "موجّه بالخدمات.",
    "Service-oriented.",
    1,
    0
  ],
  [
    4,
    "ilearn",
    "In partial integration, services:",
    [
      "May share components and databases but cannot communicate directly with other services",
      "Communicate through APIs",
      "Share nothing",
      "Cannot be replaced"
    ],
    "الجزئي يتشارك بس ما يتواصل.",
    "Share resources but don't communicate.",
    1,
    0
  ],
  [
    4,
    "ilearn",
    "Independent services:",
    [
      "Do not use shared services or databases and can be replaced by any comparable service",
      "Communicate through APIs",
      "Share databases",
      "Depend on all other services"
    ],
    "المستقل ما يتشارك شي وينستبدل.",
    "Share nothing and are replaceable.",
    1,
    0
  ],
  [
    4,
    "ilearn",
    "iLearn users span which age range?",
    [
      "3 to 18",
      "18 to 60",
      "6 to 12",
      "Adults only"
    ],
    "من 3 لـ 18.",
    "Ages 3 to 18.",
    0,
    0
  ],
  [
    4,
    "distarch",
    "The distribution architecture of a software system defines:",
    [
      "The servers in the system and the allocation of components to these servers",
      "The colors of the UI",
      "The programming language",
      "The test plan"
    ],
    "السيرفرات وتوزيع المكونات.",
    "Servers and allocation of components.",
    1,
    0
  ],
  [
    4,
    "distarch",
    "Client-server architectures are suited to applications where:",
    [
      "Clients access a shared database and business logic operations on that data",
      "There is no data",
      "Each client has its own server",
      "No network is used"
    ],
    "العملاء يوصلون لقاعدة مشتركة.",
    "Clients access shared data and logic.",
    1,
    0
  ],
  [
    4,
    "distarch",
    "In the MVC pattern (Figure 4.13), the Model is located on the:",
    [
      "Server",
      "Client browser",
      "Keyboard",
      "Router"
    ],
    "الـ Model على السيرفر.",
    "Model on the server.",
    1,
    0
  ],
  [
    4,
    "distarch",
    "Because HTTP is a text-only protocol, structured data is represented using:",
    [
      "XML or JSON",
      "Binary only",
      "Images",
      "SQL"
    ],
    "XML أو JSON.",
    "XML or JSON.",
    1,
    0
  ],
  [
    4,
    "distarch",
    "JSON is:",
    [
      "A simpler representation based on JavaScript objects",
      "A markup language with tags",
      "A database",
      "A transport protocol"
    ],
    "JSON أبسط ومبني على كائنات JavaScript.",
    "JSON is based on JavaScript objects.",
    1,
    0
  ],
  [
    4,
    "distarch",
    "In a multi-tier client-server architecture, the web server communicates with:",
    [
      "The application server, which communicates with the database server",
      "The clients only",
      "The database directly only",
      "Nothing"
    ],
    "web ← application ← database.",
    "Web server → application server → database server.",
    0,
    0
  ],
  [
    4,
    "distarch",
    "Services in a service-oriented architecture are:",
    [
      "Stateless components that can be replicated and migrate between computers",
      "Stateful and fixed to one computer",
      "Hardware devices",
      "Database tables"
    ],
    "خدمات بدون حالة تنتسخ وتنتقل.",
    "Stateless, replicable, migratable.",
    1,
    0
  ],
  [
    4,
    "distarch",
    "If your system runs on the cloud with users accessing it over the Internet, it is usually best to use:",
    [
      "A service-oriented architecture",
      "A multi-tier architecture on local servers",
      "A single stand-alone program",
      "No architecture"
    ],
    "السحابة → SOA.",
    "Cloud → SOA.",
    0,
    0
  ],
  [
    4,
    "distarch",
    "If you mostly use structured data updated by different features, it is usually best to have:",
    [
      "A single shared database with locking and transaction management",
      "Data distributed across services",
      "No database",
      "A separate database per feature"
    ],
    "قاعدة وحدة مع قفل ومعاملات.",
    "A single shared database with transactions.",
    0,
    0
  ],
  [
    4,
    "techchoice",
    "Relational databases such as MySQL are particularly suitable when:",
    [
      "You need transaction management and data structures are predictable and simple",
      "You analyse big data with flexible structure",
      "There is no data",
      "Data is hierarchical only"
    ],
    "العلائقية للمعاملات والبيانات المتوقعة.",
    "Relational: transactions + predictable data.",
    1,
    0
  ],
  [
    4,
    "techchoice",
    "NoSQL databases such as MongoDB are more efficient for:",
    [
      "Data analysis and concurrent processing of big data",
      "Transaction management only",
      "Small fixed tables",
      "Printing reports"
    ],
    "NoSQL للبيانات الضخمة.",
    "NoSQL: data analysis, big data.",
    1,
    0
  ],
  [
    4,
    "techchoice",
    "Which is NOT one of the mobile delivery issues?",
    [
      "Unlimited processor power",
      "Intermittent connectivity",
      "Power management",
      "On-screen keyboard"
    ],
    "المشاكل: الاتصال، المعالج، البطارية، الكيبورد.",
    "Issues: connectivity, processor power, power, keyboard.",
    1,
    0
  ],
  [
    4,
    "techchoice",
    "A disadvantage of using open-source software is that:",
    [
      "You are constrained by it and have no control over its evolution",
      "It increases development cost",
      "It takes longer to market",
      "It is never available"
    ],
    "تقيّدك وما تتحكم بتطورها.",
    "Constrained, no control over evolution.",
    1,
    0
  ],
  [
    4,
    "techchoice",
    "Why may some businesses prefer in-house servers over the cloud?",
    [
      "Concerns about cloud security and predictable usage patterns",
      "The cloud is always slower",
      "In-house is always cheaper",
      "Cloud can't run software"
    ],
    "الأمان والاستخدام المتوقع.",
    "Cloud security concerns and predictable usage.",
    0,
    0
  ],
  [
    4,
    "techchoice",
    "How can development tools influence the architecture?",
    [
      "They have built-in architectural assumptions you must conform to",
      "They have no influence",
      "They write the requirements",
      "They choose the users"
    ],
    "الأدوات فيها افتراضات معمارية.",
    "Tools embed architectural assumptions.",
    1,
    0
  ],
  [
    4,
    "techchoice",
    "Which is NOT a technology choice listed in Table 4.8?",
    [
      "Programming font",
      "Database",
      "Platform",
      "Open source"
    ],
    "الخيارات: Database، Platform، Server، Open source، Development tools.",
    "Database, platform, server, open source, development tools.",
    0,
    0
  ]
];

export const CH_NAMES = {
  "1": "Software Products (Chapter 1)",
  "2": "Agile Software Engineering (Chapter 2)",
  "3": "Features, Scenarios & Stories (Chapter 3)",
  "4": "Software Architecture (Chapter 4)"
};

export const CHS = [
  1,
  2,
  3,
  4
];

export const EX = {
  "products": "المشروع مثل خياط يفصّل ثوب على مقاس زبون واحد، والزبون يقدر يغير رأيه بالقماش. والمنتج مثل محل ملابس جاهزة: المحل نفسه يقرر وش يخيط ومتى ينزل الموديل الجديد، ولازم يسبق المحلات الثانية.",
  "lines": "خط المنتجات مثل سيارة بنفس الشاصيه وكل عميل يختار إضافاته. والمنصة مثل مجمّع تجاري: هو يوفر المكان والكهرباء، والمحلات (التطبيقات) يبنيها غيره. والخدمة مثل نتفليكس: كل شي عندهم وأنت تشغّل من المتصفح.",
  "vision": "رؤية المنتج مثل «البيتش» لما تبي تقنع مستثمر في المصعد: وش المنتج؟ لمين؟ وليش يشترونه بدل المنافس؟ قالب Moore يرتب لك هالكلام في جملة وحدة.",
  "pm": "مدير المنتج مثل مدرب منتخب: ما يلعب بنفسه، بس يعرف الجمهور (العملاء) ويعرف الإدارة (الأعمال) ويعرف قدرات اللاعبين (التقنية)، وهو اللي يقرر خطة الموسم (الخارطة).",
  "proto": "النموذج الأولي مثل بروفة العرس: تسويها عشان تتأكد إن الفكرة تمشي وتقنع الأهل (الممولين)، بس ما تعتبرها العرس نفسه، ترميها وتسوي الحقيقي على أصوله.",
  "agile": "المبني على الخطة مثل رحلة مخطط لها بالدقيقة قبل سنة، وAgile مثل رحلة تخطط لكل يوم بيومه حسب الجو. البيان ما يقول لا تخطط، يقول التجاوب مع التغيير أهم.",
  "incr": "التطوير التزايدي مثل بناء بيت غرفة غرفة: تخلص المطبخ (أهم شي) وتسكن فيه وتشوف وش ناقص، بعدين تبني الغرفة اللي بعدها.",
  "xp": "TDD مثل إنك تكتب أسئلة الاختبار قبل ما تذاكر: تعرف بالضبط وش المطلوب منك. والدمج المستمر مثل إنك كل ما تخلص فصل تحطه في الكتاب وتراجع الكتاب كامل.",
  "scrum": "Scrum مثل فريق كورة: مالك المنتج هو اللي يحدد وش نبي نحقق (الأهداف)، والـ ScrumMaster هو المدرب اللي يعلّمهم يلعبون صح، والـ sprint هو المباراة، والـ velocity كم هدف عادة نسجل في المباراة.",
  "backlog": "الـ backlog مثل قائمة مشتريات مرتبة بالأهمية: فوق اللي لازم اليوم، وتحت اللي «إذا بقى فلوس». ونقاط القصة مثل إنك تقول «هالمشوار ضعف مشوار البقالة» بدل ما تقول كم دقيقة بالضبط.",
  "sprints": "الـ sprint محدد الوقت مثل اختبار له وقت: لما يخلص الوقت تسلّم الورقة سواء خلصت أو لا، والسؤال اللي ما حليته يرجع لك تذاكره للاختبار الجاي.",
  "agileact": "قائمة اكتمال الكود مثل طبخة: يذوقها أحد ثاني (مراجعة) ← تتأكد كل مكوّن لحاله (اختبار وحدات) ← تجمعها في الصحن (دمج) ← تذوق الصحن كامل (اختبار دمج) ← الضيف يقول تمام (قبول).",
  "teams": "الفريق ذاتي التنظيم مثل شلة طالعين رحلة: يتفقون مين يجيب الأكل ومين يسوق بدون مدير. واللي يكلّم الفندق عن الشلة (أمور الفريق) هو ScrumMaster، واللي يقرر وين نروح (أمور المنتج) هو مالك المنتج.",
  "drivers": "الشخصيات ← السيناريوهات ← القصص ← الميزات مثل: تتخيل ضيفك (شخصية) ← تتخيل يومه عندك (سيناريو) ← تكتب طلباته وحدة وحدة (قصص) ← تجهز الأغراض (ميزات).",
  "personas": "الشخصية مثل لما تجهز هدية لشخص: تتخيل عمره وذوقه واهتماماته. ما تعرفه بالضبط، بس تخليك تتعاطف معه وما تجيب شي ما يحتاجه.",
  "scenarios": "السيناريو مثل قصة قصيرة عن يوم المستخدم: مين هو، وش يبي يحقق، وش المشكلة اللي واجهته، وكيف ممكن النظام يحلها. قصة، مو كتالوج مواصفات.",
  "stories": "قصة المستخدم مثل طلب واحد في المطعم: «أنا كزبون أبي قهوة بدون سكر عشان أنا رجيم». والـ epic مثل «أبي أسوي عزيمة لخمسين شخص»: كبيرة وتتقسم لطلبات أصغر.",
  "features": "الموازنات مثل جوال: كل ما زادت الأزرار (وظائف) قلت البساطة. ونظام مألوف مريح بس ما يبهر. والأتمتة تريحك بس تاخذ منك التحكم.",
  "creep": "تضخم الميزات مثل سكين الجيش السويسري اللي فيه 40 أداة: تحاول ترضي الكل، وفي الأخير صار ثقيل وما تلقى السكين نفسه.",
  "archdef": "المعمارية مثل مخطط البيت: يحدد الغرف (المكونات) ووش يربطها ببعض (العلاقات) وكيف يتعامل مع الشارع (البيئة)، وما يحدد لون البلاط (التنفيذ). تصمم الأبواب (الواجهات) والباقي بعدين.",
  "archwhy": "صفات الجودة مثل مواصفات السيارة: سرعة الاستجابة = تسارعها، الموثوقية = تمشي مثل المتوقع، التوفر = تشتغل وقت ما تبيها، والمرونة = تكمل حتى لو تعطل كفر.",
  "archsec": "المركزي مثل إنك تحط كل فلوسك في خزنة وحدة: حمايتها أسهل، بس لو انسرقت راح كل شي. والموزّع مثل إنك توزعها على كذا بنك: أتعب بس الخسارة أقل.",
  "archissues": "قبل ما تبني بيت تسأل: كم بيعيش؟ (العمر)، كم شخص بيسكن؟ (عدد المستخدمين)، بتستخدم أثاث جاهز؟ (إعادة الاستخدام)، ولازم يتوافق مع الجيران؟ (التوافق).",
  "tradeoffs": "الموازنات مثل البيت: أبواب أكثر بأقفال = أمان أكثر بس دخولك أبطأ وتزهق. ومولّد احتياطي = الكهرباء ما تنقطع، بس يأخر تسليم البيت ويزيد التكلفة.",
  "comporg": "فصل الاهتمامات مثل المطبخ: كل واحد مسؤول عن شي (واحد للسلطة وواحد للشوي)، والواجهات الثابتة مثل الشبابيك اللي يستلم منها كل واحد، ونفّذ مرة وحدة يعني لا تخلي اثنين يطبخون نفس الطبخة.",
  "layers": "الطبقات مثل العمارة: كل دور يتعامل مع الدور اللي تحته بس. والاهتمامات العابرة مثل المصعد وتمديدات الكهرباء: تمر بكل الأدوار، عشان كذا تغييرها بعد البناء صعب.",
  "ilearn": "تكامل الخدمات مثل الجيران: الكامل يعرفون بعض ويتكلمون، الجزئي يتشاركون موقف السيارات بس ما يتكلمون، والمستقل بيت لحاله تقدر تبدله بأي بيت ثاني.",
  "distarch": "client-server مثل المطعم: الزبون (client) يطلب، والمطبخ (server) يجهز. الـ multi-tier: الويتر ← الطباخ ← المخزن. والـ SOA مثل الفود كورت: كل محل خدمة مستقلة تقدر تزيد منه نسخ وقت الزحمة.",
  "techchoice": "العلائقية مثل دفتر حسابات بجداول مرتبة، والـ NoSQL مثل ملف تحط فيه أي شي بأي شكل. والمصادر المفتوحة مثل سيارة مستعملة ببلاش: توفر، بس ما تتحكم بقطع غيارها."
};

export const HOT_POINTS = [
  {
    "ch": 1,
    "en": "<b>Project-based</b>: starts from requirements owned by an <b>external client</b>. <b>Product-based</b>: starts from a <b>business opportunity</b>; the company decides features and timescale; rapid delivery is essential.",
    "ar": "المبني على مشروع يبدأ من متطلبات يملكها عميل خارجي. والمبني على منتج يبدأ من فرصة تجارية، والشركة تقرر الميزات والجدول، والتسليم السريع أساسي."
  },
  {
    "ch": 1,
    "en": "Product line = products sharing a <b>common core</b> + customer adaptations. Platform = others <b>build applications</b> on it (Facebook apps).",
    "ar": "خط المنتجات = منتجات تتشارك نواة مشتركة مع تعديلات للعميل. والمنصة = غيرك يبني تطبيقات فوقها (تطبيقات فيسبوك)."
  },
  {
    "ch": 1,
    "en": "Execution models: <b>stand-alone</b> (all on the customer's computer), <b>hybrid</b> (part on customer, part on developer servers), <b>software service</b> (all on developer servers, via browser/app).",
    "ar": "نماذج التنفيذ: مستقل (كله على جهاز العميل)، هجين (جزء عند العميل وجزء على خوادم المطوّر)، وخدمة (كله على خوادم المطوّر عن طريق المتصفح أو التطبيق)."
  },
  {
    "ch": 1,
    "en": "Product vision answers <b>What</b>, <b>Who</b>, <b>Why</b>. Moore: <b>FOR</b> customer <b>WHO</b> need <b>THE</b> product <b>IS A</b> category <b>THAT</b> benefit <b>UNLIKE</b> competitor <b>OUR PRODUCT</b> differentiation.",
    "ar": "رؤية المنتج تجاوب: وش المنتج، مين العملاء، وليش يشترونه. وقالب Moore: FOR العميل، WHO الحاجة، THE اسم المنتج IS A الفئة، THAT الفائدة، UNLIKE المنافس، OUR PRODUCT وش يميزنا."
  },
  {
    "ch": 1,
    "en": "Vision sources: <b>domain</b> experience, <b>product</b> experience, <b>customer</b> experience, <b>prototyping</b> and playing around.",
    "ar": "مصادر الرؤية: خبرة المجال، خبرة المنتجات، خبرة العملاء، والنماذج الأولية والتجريب."
  },
  {
    "ch": 1,
    "en": "PM concerns: <b>business needs</b>, <b>technology constraints</b>, <b>customer experience</b>. PM is the ultimate authority on <b>roadmap</b> changes; acts as <b>surrogate user</b> in UI design.",
    "ar": "اهتمامات مدير المنتج: احتياجات العمل، قيود التقنية، وتجربة العميل. وهو صاحب القرار النهائي في تغيير خارطة الطريق، ويمثل المستخدم في تصميم الواجهة."
  },
  {
    "ch": 1,
    "en": "Prototype first, then <b>throw it away</b>. Two-stage: <b>feasibility demonstration</b> → <b>customer demonstration</b>.",
    "ar": "النموذج الأولي أول شي، وبعدين ترميه. والنمذجة على مرحلتين: إثبات الجدوى ثم عرض للعملاء."
  },
  {
    "ch": 2,
    "en": "Manifesto: <b>individuals & interactions</b> > processes & tools; <b>working software</b> > documentation; <b>customer collaboration</b> > contract negotiation; <b>responding to change</b> > following a plan.",
    "ar": "البيان: الأفراد والتفاعل أهم من العمليات والأدوات، البرنامج الشغال أهم من التوثيق، التعاون مع العميل أهم من التفاوض على العقد، والتجاوب مع التغيير أهم من اتباع الخطة."
  },
  {
    "ch": 2,
    "en": "Agile principles: involve the customer, embrace change, develop & deliver incrementally, maintain simplicity, focus on <b>people not process</b>.",
    "ar": "مبادئ Agile: إشراك العميل، تقبّل التغيير، التطوير والتسليم التزايدي، البساطة، والتركيز على الناس مو العملية."
  },
  {
    "ch": 2,
    "en": "XP: <b>Kent Beck, 1998</b>, 12 practices. Widely adopted: incremental planning/user stories, small releases, <b>TDD</b> (tests first), <b>continuous integration</b>, <b>refactoring</b>.",
    "ar": "XP من Kent Beck سنة 1998، وفيها 12 ممارسة. المنتشرة: التخطيط التزايدي وقصص المستخدم، الإصدارات الصغيرة، TDD (الاختبار أول)، الدمج المستمر، وإعادة الهيكلة."
  },
  {
    "ch": 2,
    "en": "Scrum doesn't mandate technical practices. <b>Product Owner</b> = features & priorities; <b>ScrumMaster</b> = coach (not a project manager); team <b>5–8</b>; sprint <b>2–4 weeks</b>; <b>velocity</b> = work per sprint.",
    "ar": "Scrum ما تفرض ممارسات تقنية. مالك المنتج للميزات والأولويات، وScrumMaster مدرب مو مدير مشروع، والفريق من 5 لـ 8، والـ sprint من 2 لـ 4 أسابيع، والـ velocity كمية الشغل في sprint."
  },
  {
    "ch": 2,
    "en": "PBI types: feature, user request, development activity, engineering improvement. States: ready for <b>consideration</b> → <b>refinement</b> → <b>implementation</b>. Activities: refinement, estimation, creation, prioritization.",
    "ar": "أنواع عناصر الـ backlog: ميزة، طلب مستخدم، نشاط تطوير، وتحسين هندسي. الحالات: جاهز للنظر ثم للتفصيل ثم للتنفيذ. والأنشطة: التفصيل، التقدير، الإنشاء، والترتيب بالأولوية."
  },
  {
    "ch": 2,
    "en": "Estimates: <b>effort</b> in person-hours/days (not calendar time); <b>story points</b> = relative estimate (size, complexity, technology, unknowns).",
    "ar": "التقدير: الجهد بساعات أو أيام شخص (مو أيام تقويم)، ونقاط القصة تقدير نسبي (الحجم والتعقيد والتقنية والمجهول)."
  },
  {
    "ch": 2,
    "en": "Sprints are <b>timeboxed</b>: never extended; unfinished items return to the product backlog. Benefits: demonstrable progress, problem discovery, work planning.",
    "ar": "الـ sprints محددة الوقت: ما تتمدد أبد، والناقص يرجع للـ product backlog. والفوايد: تقدم ظاهر، اكتشاف المشاكل، وتخطيط الشغل."
  },
  {
    "ch": 2,
    "en": "Sprint goals: <b>functional</b>, <b>support</b>, <b>performance & reliability</b>. Code complete: reviewed → unit tested → integrated → integration tested → <b>accepted</b>.",
    "ar": "أهداف الـ sprint: وظيفي، دعم، وأداء وموثوقية. والكود المكتمل: مراجع ثم مختبر وحدات ثم مدموج ثم مختبر دمج ثم مقبول."
  },
  {
    "ch": 2,
    "en": "External interactions: team-focused → <b>ScrumMaster</b>; product-focused → <b>Product Owner</b>. PM responsibilities: reporting, administration, people.",
    "ar": "التعامل الخارجي: اللي يخص الفريق ← ScrumMaster، واللي يخص المنتج ← مالك المنتج. ومسؤوليات إدارة المشروع: التقارير، الإدارة، والأشخاص."
  },
  {
    "ch": 3,
    "en": "Drivers: unmet needs, dissatisfaction with products, technology change. Flow: <b>personas → scenarios → stories → features</b>. Feature template: input, activation, action, output.",
    "ar": "الدوافع: احتياجات ما تنلبى، عدم الرضا عن المنتجات، وتغير التقنية. والتسلسل: الشخصيات ثم السيناريوهات ثم القصص ثم الميزات. وقالب الميزة: مدخل، تفعيل، إجراء، مخرج."
  },
  {
    "ch": 3,
    "en": "Persona aspects: personalization, job-related, education, relevance. Benefit: <b>empathy</b>. Limited info → <b>proto-personas</b>.",
    "ar": "جوانب الشخصية: التخصيص، الوظيفة، التعليم، والصلة. والفايدة التعاطف، والمعلومات القليلة تعطي proto-personas."
  },
  {
    "ch": 3,
    "en": "Scenario = narrative, <b>not a specification</b>; elements: name, objective, personas, what's involved, problem, possible solutions. Users are bad at writing them.",
    "ar": "السيناريو سرد مو مواصفات، وعناصره: الاسم، الهدف، الشخصيات، وش يتطلب، المشكلة، وطرق الحل. والمستخدمين ما يجيدون كتابته."
  },
  {
    "ch": 3,
    "en": "Story: <b>As a &lt;role&gt;, I &lt;want|need&gt; to &lt;do something&gt; so that &lt;reason&gt;</b>; fits one sprint; bigger = <b>epic</b>.",
    "ar": "القصة: As a دور، I want أو need to شي، so that السبب، وتنبني في sprint واحد، واللي أكبر منها epic."
  },
  {
    "ch": 3,
    "en": "Features: <b>independent, coherent, relevant</b>. Trade-offs: simplicity–functionality, familiarity–novelty, automation–control. Feature creep: PMs can't say no, matching competitors, novice+expert users.",
    "ar": "الميزات: مستقلة، متماسكة، وذات صلة. والموازنات: البساطة والوظائف، المألوف والجديد، الأتمتة والتحكم. وأسباب التضخم: المدير ما يقول لا، تقليد المنافسين، وخدمة المبتدئ والخبير."
  },
  {
    "ch": 4,
    "en": "IEEE: architecture = fundamental organization embodied in <b>components</b>, their <b>relationships</b> to each other and the <b>environment</b>, and the <b>principles</b> guiding design and evolution. Design the <b>interface</b>, not the implementation.",
    "ar": "تعريف IEEE: المكونات وعلاقاتها ببعض وبالبيئة والمبادئ. وتصمم الواجهة مو التنفيذ."
  },
  {
    "ch": 4,
    "en": "Quality attributes: <b>responsiveness, reliability, availability, security, usability, maintainability, resilience</b> (works during partial failure or attack).",
    "ar": "صفات الجودة: الاستجابة، الموثوقية، التوفر، الأمان، سهولة الاستخدام، الصيانة، والمرونة (تشتغل مع العطل أو الهجوم)."
  },
  {
    "ch": 4,
    "en": "Centralized security: easier and faster, but breach = <b>lose everything</b>. Distributed: slower and costlier, breach loses only that location. Multi-database needs <b>C3</b> for consistency.",
    "ar": "المركزي أسهل وأسرع بس الاختراق يخسرك كل شي، والموزّع أبطأ وأغلى بس تخسر جزء. والقواعد المتعددة تحتاج C3 للتطابق."
  },
  {
    "ch": 4,
    "en": "Influences: non-functional characteristics, product lifetime, software reuse, number of users, software compatibility.",
    "ar": "العوامل المؤثرة: غير الوظيفية، العمر، إعادة الاستخدام، عدد المستخدمين، التوافق."
  },
  {
    "ch": 4,
    "en": "Trade-offs: maintainability vs performance (fine-grain = slower), security vs usability (layers), availability vs time-to-market (<b>redundant + sensor + switching</b> components).",
    "ar": "الموازنات: الصيانة ضد الأداء، الأمان ضد سهولة الاستخدام، والتوفر ضد سرعة الطرح (احتياط + استشعار + تحويل)."
  },
  {
    "ch": 4,
    "en": "Guidelines: <b>separation of concerns, stable interfaces, implement once</b>. Complexity comes from relationships: localize relationships, reduce shared dependencies.",
    "ar": "الإرشادات: فصل الاهتمامات، واجهات ثابتة، نفّذ مرة. والتعقيد من العلاقات."
  },
  {
    "ch": 4,
    "en": "Layers interact with level <b>X−1</b> only. Cross-cutting concerns (<b>security, performance, reliability</b>) affect all layers. Web layers: UI → auth/UI mgmt → application → shared services → database.",
    "ar": "كل طبقة تتعامل مع اللي تحتها بس، والعابرة (الأمان والأداء والموثوقية) تأثر على الكل."
  },
  {
    "ch": 4,
    "en": "iLearn: replaceability, extensibility, age-appropriate, programmability, minimum work → service-oriented. Integration: full (APIs), partial (share DB, no talk), independent (share nothing).",
    "ar": "مبادئ iLearn الخمسة قادت لتصميم موجّه بالخدمات، والتكامل: كامل، جزئي، مستقل."
  },
  {
    "ch": 4,
    "en": "Distribution: client-server, <b>MVC</b> (model on server), HTTP + <b>XML/JSON</b>, multi-tier (web → app → DB server), <b>SOA</b> (stateless, scalable). Cloud → SOA; local servers → multi-tier.",
    "ar": "التوزيع: client-server، MVC، XML/JSON، multi-tier، و SOA. السحابة → SOA، والسيرفرات المحلية → multi-tier."
  },
  {
    "ch": 4,
    "en": "Tech: relational (MySQL, transactions) vs NoSQL (MongoDB, big data); mobile issues: connectivity, processor, power, keyboard; open source = no control over evolution.",
    "ar": "التقنيات: علائقية للمعاملات و NoSQL للبيانات الضخمة، ومشاكل الجوال الأربع، والمصادر المفتوحة ما تتحكم بتطورها."
  }
];

export const MOORE = [
  [
    "FOR",
    "for",
    "العميل المستهدف",
    "target customer",
    "a mid-sized company's marketing and sales departments"
  ],
  [
    "WHO",
    "who",
    "الحاجة أو الفرصة",
    "need or opportunity",
    "need basic CRM functionality"
  ],
  [
    "THE",
    "the",
    "اسم المنتج",
    "product name",
    "CRM-Innovator"
  ],
  [
    "IS A",
    "isa",
    "فئة المنتج",
    "product category",
    "Web-based service"
  ],
  [
    "THAT",
    "that",
    "الفائدة الأساسية",
    "key benefit",
    "provides sales tracking, lead generation, and sales staff support"
  ],
  [
    "UNLIKE",
    "unlike",
    "المنافس الأساسي",
    "primary competitive alternative",
    "other services"
  ],
  [
    "OUR PRODUCT",
    "our",
    "وش يميزنا",
    "primary differentiation",
    "provides very capable services at a moderate cost"
  ]
];

export const SORT_SETS = {
  "pbi": {
    "t": "نوع عنصر الـ backlog",
    "opts": [
      [
        "Feature",
        "ميزة"
      ],
      [
        "User request",
        "طلب مستخدم"
      ],
      [
        "Development activity",
        "نشاط تطوير"
      ],
      [
        "Engineering improvement",
        "تحسين هندسي"
      ]
    ],
    "items": [
      [
        "As a teacher, I want to configure the group of tools that are available to individual classes.",
        0
      ],
      [
        "As a parent, I want to be able to view my children's work and the assessments made by their teachers.",
        0
      ],
      [
        "As a teacher of young children, I want a pictorial interface for children with limited reading ability.",
        0
      ],
      [
        "Establish criteria for the assessment of open source software that might be used as a basis for parts of this system.",
        2
      ],
      [
        "Refactor user interface code to improve understandability and performance.",
        3
      ],
      [
        "Implement encryption for all personal user data.",
        3
      ],
      [
        "Evaluate a cloud provider before committing to it.",
        2
      ],
      [
        "Speed up the build by caching dependencies.",
        3
      ],
      [
        "Users asked for a dark mode in the app.",
        1
      ],
      [
        "Teachers asked for printable class reports.",
        1
      ]
    ]
  },
  "who": {
    "t": "مين يتولى التعامل الخارجي؟",
    "opts": [
      [
        "ScrumMaster",
        "ScrumMaster"
      ],
      [
        "Product Owner",
        "مالك المنتج"
      ]
    ],
    "items": [
      [
        "Reporting the team's progress and budget to company management.",
        0
      ],
      [
        "Talking to customers about which features they want next.",
        1
      ],
      [
        "Arranging the team's vacations and absences with HR.",
        0
      ],
      [
        "Discussing pricing and marketing of the release.",
        1
      ],
      [
        "Liaising with another team about shared resources.",
        0
      ],
      [
        "Deciding with sales which customer problems to tackle.",
        1
      ]
    ]
  },
  "man": {
    "t": "البيان الرشيق: وش اللي نقدّره أكثر؟",
    "opts": [
      [
        "Valued more (left)",
        "نقدّره أكثر (يسار)"
      ],
      [
        "Valued less (right)",
        "أقل (يمين)"
      ]
    ],
    "items": [
      [
        "Individuals and interactions",
        0
      ],
      [
        "Processes and tools",
        1
      ],
      [
        "Working software",
        0
      ],
      [
        "Comprehensive documentation",
        1
      ],
      [
        "Customer collaboration",
        0
      ],
      [
        "Contract negotiation",
        1
      ],
      [
        "Responding to change",
        0
      ],
      [
        "Following a plan",
        1
      ]
    ]
  },
  "code": {
    "t": "رتّب قائمة اكتمال الكود: وش الحالة اللي بعد…؟",
    "opts": [
      [
        "Reviewed",
        "مراجع"
      ],
      [
        "Unit tested",
        "مختبر وحدات"
      ],
      [
        "Integrated",
        "مدموج"
      ],
      [
        "Integration tested",
        "مختبر دمج"
      ],
      [
        "Accepted",
        "مقبول"
      ]
    ],
    "items": [
      [
        "Start (code written) → next is…",
        0
      ],
      [
        "After Reviewed → next is…",
        1
      ],
      [
        "After Unit tested → next is…",
        2
      ],
      [
        "After Integrated → next is…",
        3
      ],
      [
        "After Integration tested → next is…",
        4
      ]
    ]
  }
};

export const SPR_ITEMS = [
  [
    "Login with school account",
    "تسجيل الدخول بحساب المدرسة",
    5
  ],
  [
    "Upload class photos",
    "رفع صور الفصل",
    8
  ],
  [
    "Teacher moderates photos",
    "المعلم يراجع الصور",
    5
  ],
  [
    "Email the class group",
    "إرسال بريد لمجموعة الفصل",
    3
  ],
  [
    "Class wiki page",
    "صفحة wiki للفصل",
    8
  ],
  [
    "Refactor UI code",
    "إعادة هيكلة كود الواجهة",
    3
  ],
  [
    "Encrypt personal data",
    "تشفير البيانات الشخصية",
    5
  ],
  [
    "Parent view of work",
    "ولي الأمر يشوف الأعمال",
    13
  ]
];

export const FIGS = {
  "products": [
    [
      "img/sc_2ddc_2.webp",
      "Software products",
      "المنتجات البرمجية مقابل البرمجيات المخصصة"
    ]
  ],
  "lines": [
    [
      "img/sc_2ddc_11.webp",
      "Software execution models",
      "خطوط المنتجات والمنصات ونماذج التنفيذ"
    ],
    [
      "img/sc_2ddc_9.webp",
      "Table 1.1 Software product lines and",
      "خطوط المنتجات والمنصات ونماذج التنفيذ"
    ]
  ],
  "vision": [
    [
      "img/sc_2ddc_16.webp",
      "Vision template example",
      "رؤية المنتج"
    ],
    [
      "img/sc_2ddc_15.webp",
      "Moore’s vision template",
      "رؤية المنتج"
    ]
  ],
  "pm": [
    [
      "img/sc_2ddc_19.webp",
      "Software product management (1 of 2)",
      "إدارة المنتج البرمجي"
    ],
    [
      "img/sc_2ddc_22.webp",
      "Product management concerns",
      "إدارة المنتج البرمجي"
    ]
  ],
  "proto": [
    [
      "img/sc_2ddc_28.webp",
      "Product prototyping (1 of 2)",
      "النماذج الأولية للمنتج"
    ]
  ],
  "agile": [
    [
      "img/sc_2548_6.webp",
      "Table 2.1 The agile manifesto",
      "هندسة البرمجيات الرشيقة والبيان"
    ]
  ],
  "incr": [
    [
      "img/sc_2548_7.webp",
      "Incremental development",
      "التطوير التزايدي ومبادئ Agile"
    ]
  ],
  "xp": [
    [
      "img/sc_2548_16.webp",
      "Table 2.4 Widely adopted XP practices",
      "البرمجة المتطرفة XP"
    ],
    [
      "img/sc_2548_13.webp",
      "Extreme programming (1 of 2)",
      "البرمجة المتطرفة XP"
    ]
  ],
  "scrum": [
    [
      "img/sc_2548_19.webp",
      "Table 2.5 Scrum terminology (1 of 2)",
      "Scrum: المصطلحات والأدوار"
    ],
    [
      "img/sc_2548_20.webp",
      "Table 2.5 Scrum terminology (2 of 2)",
      "Scrum: المصطلحات والأدوار"
    ]
  ],
  "backlog": [
    [
      "img/sc_2548_33.webp",
      "PBI estimation metrics (1 of 2)",
      "قائمة المنتج (Product Backlog)"
    ],
    [
      "img/sc_2548_28.webp",
      "Table 2.6 Examples of product backlog",
      "قائمة المنتج (Product Backlog)"
    ]
  ],
  "sprints": [
    [
      "img/sc_2548_37.webp",
      "Sprint activities (1 of 2)",
      "الـ Sprints محددة الوقت والاجتماع اليومي"
    ],
    [
      "img/sc_2548_40.webp",
      "Sprint planning (1 of 2)",
      "الـ Sprints محددة الوقت والاجتماع اليومي"
    ]
  ],
  "agileact": [
    [
      "img/sc_2548_44.webp",
      "Agile activities",
      "الأنشطة والكود المكتمل ومراجعة الـ Sprint"
    ],
    [
      "img/sc_2548_45.webp",
      "Table 2.9 Code completeness checklist",
      "الأنشطة والكود المكتمل ومراجعة الـ Sprint"
    ]
  ],
  "teams": [
    [
      "img/sc_2548_53.webp",
      "External interactions",
      "الفرق ذاتية التنظيم وإدارة المشروع"
    ],
    [
      "img/sc_2548_49.webp",
      "Team size and composition (1 of 2)",
      "الفرق ذاتية التنظيم وإدارة المشروع"
    ]
  ],
  "drivers": [
    [
      "img/sc_322a_2.webp",
      "Software products",
      "دوافع المنتج والميزات وفهم المستخدم"
    ],
    [
      "img/sc_322a_3.webp",
      "Software features",
      "دوافع المنتج والميزات وفهم المستخدم"
    ]
  ],
  "personas": [
    [
      "img/sc_322a_12.webp",
      "Persona descriptions",
      "الشخصيات (Personas)"
    ],
    [
      "img/sc_322a_9.webp",
      "Personas (1 of 2)",
      "الشخصيات (Personas)"
    ]
  ],
  "scenarios": [
    [
      "img/sc_322a_31.webp",
      "Writing scenarios (1 of 2)",
      "السيناريوهات"
    ],
    [
      "img/sc_322a_21.webp",
      "Scenarios",
      "السيناريوهات"
    ]
  ],
  "stories": [
    [
      "img/sc_322a_37.webp",
      "User stories (1 of 2)",
      "قصص المستخدم والـ Epics"
    ],
    [
      "img/sc_322a_38.webp",
      "User stories (2 of 2)",
      "قصص المستخدم والـ Epics"
    ]
  ],
  "features": [
    [
      "img/sc_322a_47.webp",
      "Feature identification (2 of 2)",
      "تحديد الميزات وتصميمها"
    ],
    [
      "img/sc_322a_46.webp",
      "Feature identification (1 of 2)",
      "تحديد الميزات وتصميمها"
    ]
  ],
  "creep": [
    [
      "img/sc_322a_53.webp",
      "Feature creep (1 of 2)",
      "تضخم الميزات واشتقاقها وقائمتها"
    ]
  ],
  "archdef": [
    [
      "img/sc4_4.webp",
      "Table 4.1 The IEEE definition of software architecture",
      "وش هي معمارية البرمجيات؟"
    ],
    [
      "img/sc4_6.webp",
      "Figure 4.1 Access to services provided by software components",
      "وش هي معمارية البرمجيات؟"
    ]
  ],
  "archwhy": [
    [
      "img/sc4_9.webp",
      "Table 4.2 Non-functional system quality attributes",
      "صفات الجودة"
    ]
  ],
  "archsec": [
    [
      "img/sc4_10.webp",
      "Table 4.3 Centralized security architecture (Rogue One)",
      "المركزي مقابل الموزّع"
    ],
    [
      "img/sc4_14.webp",
      "Figure 4.2 Shared database architecture",
      "المركزي مقابل الموزّع"
    ],
    [
      "img/sc4_15.webp",
      "Figure 4.3 Multiple database architecture",
      "المركزي مقابل الموزّع"
    ]
  ],
  "archissues": [
    [
      "img/sc4_16.webp",
      "Figure 4.4 Issues that influence architectural decisions",
      "العوامل المؤثرة"
    ],
    [
      "img/sc4_17.webp",
      "Table 4.4 The importance of architectural design issues (1 of 2)",
      "العوامل المؤثرة"
    ]
  ],
  "tradeoffs": [
    [
      "img/sc4_22.webp",
      "Figure 4.5 Authentication layers",
      "الموازنات المعمارية"
    ],
    [
      "img/sc4_26.webp",
      "Trade off: Availability vs time-to-market",
      "الموازنات المعمارية"
    ]
  ],
  "comporg": [
    [
      "img/sc4_29.webp",
      "Figure 4.6 Architectural model of a document retrieval system",
      "تنظيم المكونات"
    ],
    [
      "img/sc4_32.webp",
      "Figure 4.7 Examples of component relationships",
      "تنظيم المكونات"
    ],
    [
      "img/sc4_33.webp",
      "Figure 4.8 Architectural design guidelines",
      "تنظيم المكونات"
    ]
  ],
  "layers": [
    [
      "img/sc4_37.webp",
      "Figure 4.9 Cross-cutting concerns",
      "المعمارية الطبقية"
    ],
    [
      "img/sc4_39.webp",
      "Figure 4.10 Generic layered architecture for a web-based application",
      "المعمارية الطبقية"
    ]
  ],
  "ilearn": [
    [
      "img/sc4_42.webp",
      "Table 4.7 iLearn architectural design principles",
      "iLearn"
    ],
    [
      "img/sc4_46.webp",
      "Figure 4.11 Layered architectural model of the iLearn system",
      "iLearn"
    ]
  ],
  "distarch": [
    [
      "img/sc4_48.webp",
      "Figure 4.12 Client–server architecture",
      "معمارية التوزيع"
    ],
    [
      "img/sc4_49.webp",
      "Figure 4.13 The Model-View-Controller pattern",
      "معمارية التوزيع"
    ],
    [
      "img/sc4_52.webp",
      "Figure 4.14 Multi-tier client–server architecture",
      "معمارية التوزيع"
    ],
    [
      "img/sc4_54.webp",
      "Figure 4.15 Service-oriented architecture",
      "معمارية التوزيع"
    ]
  ],
  "techchoice": [
    [
      "img/sc4_57.webp",
      "Table 4.8 Technology choices",
      "اختيار التقنيات"
    ],
    [
      "img/sc4_60.webp",
      "Delivery platform: mobile issues",
      "اختيار التقنيات"
    ]
  ]
};
