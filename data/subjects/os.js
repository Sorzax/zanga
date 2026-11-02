// Course content. Question order is stable: saved mistakes refer to these indices.

export const TOPICS = [
  {
    "id": "os",
    "ch": 1,
    "t": "What is an Operating System?",
    "ar": "وش هو نظام التشغيل",
    "pts": [
      [
        "A program that acts as an <b>intermediary</b> between a user of a computer and the computer hardware. It <b>hides the complexity of hardware</b> from uninterested users.",
        "برنامج وسيط بين المستخدم والهاردوير، ويخبي تعقيد الهاردوير عن المستخدم."
      ],
      [
        "OS goals: <b>Execute user programs</b> and make solving user problems easier · Make the computer system <b>convenient</b> to use · Use the computer hardware in an <b>efficient</b> manner.",
        "أهدافه ثلاثة: يشغّل برامج المستخدم ويسهّل حل مشاكله، يخلي الجهاز مريح بالاستخدام، ويستخدم الهاردوير بكفاءة."
      ],
      [
        "Computer system has four components: <b>Hardware</b> (CPU, memory, I/O) → <b>Operating system</b> → <b>Application programs</b> (word processors, compilers, browsers…) → <b>Users</b> (people, machines, other computers).",
        "الجهاز له 4 مكونات: الهاردوير، نظام التشغيل، البرامج التطبيقية، والمستخدمين."
      ]
    ],
    "trap": [
      "Compilers and web browsers are <b>application programs</b>, not part of the OS.",
      "الكومبايلر والمتصفح من البرامج التطبيقية، مو جزء من نظام التشغيل."
    ],
    "idx": 0
  },
  {
    "id": "view",
    "ch": 1,
    "t": "What Operating Systems Do",
    "ar": "وش يسوي النظام (وجهتين نظر)",
    "pts": [
      [
        "<b>User view:</b> users want convenience, ease of use and good performance — they don't care about resource utilization.",
        "من وجهة نظر المستخدم: يبي سهولة وأداء زين، وما يهمه استغلال الموارد."
      ],
      [
        "A shared computer such as a <b>mainframe</b> must keep all users happy → <b>maximize resource utilization</b>.",
        "الجهاز المشترك مثل الـ mainframe لازم يرضي الكل، فيستغل الموارد لأقصى حد."
      ],
      [
        "<b>Mobile devices</b> are resource poor, optimized for <b>usability and battery life</b> (touch screens, voice recognition).",
        "الجوالات مواردها قليلة، فتركّز على سهولة الاستخدام وعمر البطارية."
      ],
      [
        "<b>Embedded computers</b> (devices, automobiles) have little or no UI and run primarily <b>without user intervention</b>.",
        "الأجهزة المدمجة (مثل اللي في السيارات) ما لها واجهة تقريباً وتشتغل بدون تدخل المستخدم."
      ],
      [
        "<b>System view:</b> OS is a <b>resource allocator</b> — manages all resources and decides between conflicting requests for efficient and fair use.",
        "من وجهة نظر النظام: هو موزّع الموارد، يدير الموارد ويقرر بين الطلبات المتعارضة بعدل وكفاءة."
      ],
      [
        "OS is a <b>control program</b> — controls execution of programs to prevent errors and improper use of the computer.",
        "وهو برنامج تحكم: يراقب تشغيل البرامج عشان يمنع الأخطاء والاستخدام الغلط."
      ]
    ],
    "idx": 1
  },
  {
    "id": "def",
    "ch": 1,
    "t": "Operating System Definition",
    "ar": "تعريف النظام",
    "pts": [
      [
        "No universally accepted definition. \"Everything a vendor ships when you order an OS\" is a good approximation.",
        "ما فيه تعريف متفق عليه. تقريباً هو كل شي تشحنه الشركة لما تطلب نظام تشغيل."
      ],
      [
        "\"The one program running at all times on the computer\" is the <b>kernel</b>.",
        "البرنامج الوحيد اللي شغّال دايماً هو الـ kernel."
      ],
      [
        "Everything else is either a <b>system program</b> (ships with the OS, but not part of the kernel) or an <b>application program</b>.",
        "الباقي: إما برنامج نظام (يجي مع النظام بس مو جزء من الكيرنل)، أو برنامج تطبيقي."
      ],
      [
        "<b>Middleware</b> – a set of software frameworks that provide additional services to application developers (databases, multimedia, graphics).",
        "الـ Middleware مجموعة أطر برمجية تعطي المطورين خدمات إضافية مثل قواعد البيانات والوسائط والجرافيكس."
      ]
    ],
    "idx": 2
  },
  {
    "id": "ctrl",
    "ch": 1,
    "t": "Device Controller & Device Driver",
    "ar": "الكنترولر والدرايفر",
    "pts": [
      [
        "One or more CPUs and device controllers connect through a <b>common bus</b> providing access to shared memory.",
        "المعالجات والكنترولرات متصلين ببعض عن طريق bus مشترك يوصلهم بالذاكرة."
      ],
      [
        "A <b>device controller</b> is a hardware component that manages a specific type of device. It has a <b>local buffer storage</b> and a set of <b>special-purpose registers</b>.",
        "الكنترولر قطعة هاردوير تدير نوع معيّن من الأجهزة، وعنده buffer محلي وريجسترات خاصة."
      ],
      [
        "Each controller has an OS <b>device driver</b> — software that understands the controller and provides a <b>uniform interface</b> to the device.",
        "لكل كنترولر درايفر، وهو سوفتوير داخل النظام يفهم الكنترولر ويعطي باقي النظام واجهة موحّدة."
      ],
      [
        "<b>CPU</b> moves data from/to <b>main memory</b> to/from <b>local buffers</b>. <b>I/O</b> occurs between the <b>device</b> and the <b>local buffer</b> of the controller.",
        "الـ CPU ينقل البيانات بين الذاكرة والبفر، والـ I/O نفسه يصير بين الجهاز والبفر."
      ],
      [
        "Device controller informs CPU that it has finished its operation by causing an <b>interrupt</b>.",
        "الكنترولر يبلّغ الـ CPU إنه خلص عن طريق interrupt."
      ],
      [
        "Steps: CPU initiates transfer (via driver, through registers) → controller takes charge and moves data (read/write) → controller raises <b>interrupt</b> → CPU halts current task and responds.",
        "الخطوات: الـ CPU يرسل الأوامر للكنترولر عن طريق الدرايفر، الكنترولر ينقل البيانات، بعدين يرفع interrupt، والـ CPU يوقف اللي بيده ويتعامل معه."
      ]
    ],
    "trap": [
      "Controller = <b>hardware</b>. Driver = <b>software</b>.",
      "الكنترولر هاردوير والدرايفر سوفتوير، لا تخلط بينهم."
    ],
    "idx": 3
  },
  {
    "id": "intr",
    "ch": 1,
    "t": "Interrupts",
    "ar": "المقاطعات",
    "pts": [
      [
        "An <b>interrupt</b> is a signal sent to the CPU by a device controller to indicate it completed an operation or requires attention.",
        "الـ interrupt إشارة يرسلها الكنترولر للـ CPU يقول فيها: خلصت، أو أحتاج انتباهك."
      ],
      [
        "Interrupt transfers control to the <b>interrupt service routine (ISR)</b> through the <b>interrupt vector</b> — a table in memory that contains the <b>addresses of all ISRs</b>.",
        "الـ interrupt ينقل التحكم للـ ISR عن طريق الـ interrupt vector، وهو جدول في الذاكرة فيه عناوين كل الـ ISRs."
      ],
      [
        "Interrupt vector is indexed by a <b>unique number</b> given with the interrupt request.",
        "الجدول مرتّب برقم فريد يجي مع طلب الـ interrupt."
      ],
      [
        "Interrupt architecture must save the <b>address of the interrupted instruction</b>. OS preserves CPU state by storing the <b>registers and the program counter</b>.",
        "لازم يحفظ عنوان التعليمة اللي انقطعت، والنظام يحفظ حالة الـ CPU (الريجسترات والـ program counter) عشان يرجع يكمّل."
      ],
      [
        "Hardware may trigger an interrupt at any time, usually by way of the <b>system bus</b>.",
        "الهاردوير يقدر يرسل interrupt بأي وقت، غالباً عن طريق الـ system bus."
      ],
      [
        "A <b>trap or exception</b> is a <b>software-generated interrupt</b> caused either by an error or a user request.",
        "الـ trap أو الـ exception: interrupt يطلع من السوفتوير، بسبب خطأ أو طلب من المستخدم."
      ],
      [
        "An operating system is <b>interrupt driven</b>. In the I/O cycle, the CPU checks for interrupts <b>between instructions</b>.",
        "نظام التشغيل يمشي بالـ interrupts، والـ CPU يفحص إذا فيه interrupt بين كل تعليمة والثانية."
      ]
    ],
    "idx": 4
  },
  {
    "id": "stor",
    "ch": 1,
    "t": "Storage Structure",
    "ar": "هيكل التخزين",
    "pts": [
      [
        "<b>Main memory</b> – only large storage media that the CPU can access <b>directly</b>. Random access, typically <b>volatile</b>, typically <b>DRAM</b>.",
        "الذاكرة الرئيسية هي الوحيدة الكبيرة اللي يوصلها الـ CPU مباشرة، وغالباً تنمسح إذا طفى الجهاز، ونوعها DRAM."
      ],
      [
        "<b>Secondary storage</b> – large <b>nonvolatile</b> storage capacity, much <b>slower</b> than main memory.",
        "التخزين الثانوي كبير وما ينمسح، بس أبطأ بكثير."
      ],
      [
        "<b>HDD</b> – disk surface is logically divided into <b>tracks</b>, which are subdivided into <b>sectors</b>. <b>NVM</b> devices – <b>faster</b> than hard disks, nonvolatile.",
        "الهارديسك سطحه مقسوم tracks وكل track مقسوم sectors. والـ NVM أسرع من الهارديسك وما ينمسح."
      ],
      [
        "<b>bit</b> = 0 or 1 · <b>byte</b> = 8 bits · <b>word</b> = a computer architecture's native unit of data (64-bit registers → 8-byte words).",
        "البت صفر أو واحد، البايت 8 بت، والـ word هي الوحدة الأساسية للمعالج (لو 64 بت يعني 8 بايت)."
      ],
      [
        "KB = 1,024 bytes · MB = 1,024² · GB = 1,024³ · TB = 1,024⁴ · PB = 1,024⁵. Networking is measured in <b>bits</b>.",
        "الكيلوبايت 1024 بايت وكل وحدة أكبر تضرب في 1024. والشبكات تنقاس بالبت لأنها تنقل بت بت."
      ]
    ],
    "idx": 5
  },
  {
    "id": "cache",
    "ch": 1,
    "t": "Storage Hierarchy & Caching",
    "ar": "هرمية التخزين والكاش",
    "pts": [
      [
        "Storage systems organized in hierarchy by <b>speed, cost, volatility</b>. Trade-off between size and speed: <b>smaller and faster memory closer to the CPU</b>.",
        "التخزين مرتّب حسب السرعة والتكلفة والقابلية للمسح. الأصغر والأسرع يكون أقرب للـ CPU."
      ],
      [
        "<b>Caching</b> – copying information into faster storage system; <b>main memory can be viewed as a cache for secondary storage</b>.",
        "الكاش: نسخ البيانات لمكان أسرع. والذاكرة الرئيسية تعتبر كاش للتخزين الثانوي."
      ],
      [
        "Faster storage (cache) <b>checked first</b>: if there → used directly (fast); if not → copied to cache and used there.",
        "نشيّك الكاش أول: لو البيانات فيه نستخدمها على طول، ولو مو موجودة ننسخها للكاش ونستخدمها."
      ],
      [
        "Cache smaller than storage being cached → design problems: <b>cache size and replacement policy</b>.",
        "الكاش أصغر من الأصل، فالمشكلة: كم حجمه، ومين نطلّع لما يمتلي."
      ]
    ],
    "idx": 6
  },
  {
    "id": "dma",
    "ch": 1,
    "t": "Direct Memory Access (DMA)",
    "ar": "الوصول المباشر للذاكرة",
    "pts": [
      [
        "Interrupt-driven I/O is fine for small data but produces <b>high overhead for bulk data</b> movement → <b>DMA</b> is used.",
        "الـ I/O بالـ interrupts ممتاز للبيانات الصغيرة، بس مع البيانات الكبيرة يصير فيه overhead عالي، فنستخدم DMA."
      ],
      [
        "Used for high-speed I/O devices. Device controller transfers <b>blocks</b> of data from buffer directly to main memory <b>without CPU intervention</b>.",
        "للأجهزة السريعة: الكنترولر ينقل blocks من البفر للذاكرة مباشرة بدون ما يتدخل الـ CPU."
      ],
      [
        "While the controller performs these operations, the <b>CPU is available</b> to accomplish other work.",
        "خلال النقل الـ CPU فاضي يسوي شغل ثاني."
      ],
      [
        "Only <b>one interrupt per block</b>, rather than one interrupt per byte.",
        "interrupt واحد لكل block بدل واحد لكل byte."
      ]
    ],
    "idx": 7
  },
  {
    "id": "multi",
    "ch": 1,
    "t": "Multiprogramming & Multitasking",
    "ar": "تعدد البرامج والمهام",
    "pts": [
      [
        "<b>Multiprogramming (batch)</b>: a single user cannot keep CPU and I/O busy at all times; organizes jobs so <b>CPU always has one to execute</b>. One job selected via <b>job scheduling</b>; when it has to wait (for I/O) → OS <b>switches</b> to another job.",
        "مستخدم واحد ما يقدر يشغّل الـ CPU طول الوقت، فالنظام يرتّب الـ jobs بحيث الـ CPU دايم عنده شغل. ولما job ينتظر I/O ينتقل لغيره."
      ],
      [
        "<b>Timesharing (multitasking)</b>: CPU switches jobs so frequently that users can interact with each job → interactive computing. <b>Response time &lt; 1 second</b>.",
        "الـ Timesharing: الـ CPU يبدّل بين الـ jobs بسرعة لدرجة إن المستخدم يتفاعل معها، وزمن الاستجابة أقل من ثانية."
      ],
      [
        "Program executing in memory → <b>process</b> · several ready → <b>CPU scheduling</b> · don't fit in memory → <b>swapping</b> · not completely in memory → <b>virtual memory</b>.",
        "البرنامج لما يشتغل يصير process. كذا process جاهز يحتاج CPU scheduling. ما تكفي الذاكرة نسوي swapping. ولو الـ process مو كله في الذاكرة نستخدم virtual memory."
      ]
    ],
    "idx": 8
  },
  {
    "id": "boot",
    "ch": 1,
    "t": "Operating-System Operations (Boot)",
    "ar": "الإقلاع وعمليات النظام",
    "pts": [
      [
        "<b>Bootstrap program</b> is loaded at power-up or reboot – simple code to initialize the system and <b>load the kernel</b>. Stored in <b>ROM or EPROM</b>, known as <b>firmware</b>.",
        "الـ bootstrap كود بسيط يشتغل أول ما تشغّل الجهاز، يجهّز النظام ويحمّل الكيرنل، ومخزّن في ROM أو EPROM (يعني firmware)."
      ],
      [
        "Kernel starts <b>system daemons</b> – services provided outside of the kernel by system programs, running the entire time the kernel is running.",
        "الكيرنل يشغّل الـ daemons، وهي خدمات برّا الكيرنل تظل شغّالة طول ما الكيرنل شغّال."
      ],
      [
        "If nothing to do, the OS sits quietly waiting. Events are almost always signaled by an <b>interrupt</b>.",
        "لو ما فيه شغل النظام ينتظر، وأي حدث غالباً يوصله على شكل interrupt."
      ],
      [
        "<b>Hardware interrupt</b>: by a device. <b>Software interrupt (exception or trap)</b>: software error (division by zero, infinite loop, invalid memory access) or request for OS service – <b>system call</b>.",
        "Hardware interrupt يجي من جهاز. وSoftware interrupt (trap) يجي من خطأ برمجي مثل القسمة على صفر، أو من طلب خدمة من النظام وهو الـ system call."
      ]
    ],
    "idx": 9
  },
  {
    "id": "dual",
    "ch": 1,
    "t": "Dual-mode Operation & Timer",
    "ar": "وضعين التشغيل والتايمر",
    "pts": [
      [
        "Dual-mode allows OS to <b>protect itself</b> and other components: <b>user mode</b> and <b>kernel mode</b> (also called <b>supervisor, system, or privileged</b> mode).",
        "نظام الوضعين يحمي النظام من البرامج الغلط أو الخبيثة. فيه user mode وkernel mode (واسمه الثاني supervisor أو system أو privileged)."
      ],
      [
        "<b>Mode bit</b> provided by hardware: user → <b>1</b>, kernel → <b>0</b>.",
        "الـ mode bit من الهاردوير: المستخدم = 1 والكيرنل = 0."
      ],
      [
        "Some instructions are <b>privileged</b>, only executable in kernel mode.",
        "بعض التعليمات ما تنفّذ إلا في kernel mode."
      ],
      [
        "At <b>boot</b> the hardware starts in <b>kernel mode</b>. Trap or interrupt → kernel (bit = 0). Before passing control to a user program → user (bit = 1).",
        "عند الإقلاع يبدأ في kernel mode. أي trap أو interrupt يحوّله kernel، وقبل ما يعطي التحكم لبرنامج مستخدم يرجّعه user."
      ],
      [
        "<b>Timer</b> prevents infinite loop / process hogging resources. Counter decremented by physical clock; at zero → interrupt. Setting it is a <b>privileged instruction</b>.",
        "التايمر يمنع البرنامج يعلّق أو يحتكر الموارد. عدّاد ينقص مع الساعة، ولما يوصل صفر يصير interrupt. وضبطه تعليمة privileged."
      ]
    ],
    "trap": [
      "Kernel = <b>0</b>, not 1!",
      "الكيرنل صفر مو واحد! احفظها كذا: الكيرنل يبدأ من الصفر وقت الإقلاع."
    ],
    "idx": 10
  },
  {
    "id": "svc",
    "ch": 2,
    "t": "Operating System Services",
    "ar": "خدمات النظام",
    "pts": [
      [
        "<b>Helpful to the user:</b> User interface (CLI, GUI, touch-screen, Batch) · Program execution · I/O operations · File-system manipulation · Communications (shared memory or message passing) · Error detection.",
        "خدمات تفيد المستخدم: الواجهة، تشغيل البرامج، عمليات الإدخال والإخراج، التعامل مع الملفات، التواصل بين العمليات، واكتشاف الأخطاء."
      ],
      [
        "For efficiency and protection, users usually <b>cannot control I/O devices directly</b>.",
        "عشان الكفاءة والحماية، المستخدم ما يتحكم بأجهزة الـ I/O مباشرة."
      ],
      [
        "<b>Efficient operation of the system itself:</b> <b>Resource allocation</b> · <b>Logging</b> (which users use how much – accounting, usage statistics) · <b>Protection and security</b>.",
        "خدمات لكفاءة النظام نفسه: توزيع الموارد، التسجيل (مين استخدم كم)، والحماية والأمان."
      ],
      [
        "<b>Protection</b> – all access to system resources is controlled. <b>Security</b> from outsiders requires <b>user authentication</b>.",
        "الحماية: كل وصول للموارد متحكَّم فيه. الأمان من الخارج يحتاج التحقق من هوية المستخدم."
      ]
    ],
    "trap": [
      "Resource allocation, Logging, Protection = for the <b>system's</b> efficiency, not user-helpful services.",
      "هذي الثلاث لكفاءة النظام، مو من الخدمات اللي تفيد المستخدم."
    ],
    "idx": 11
  },
  {
    "id": "ui",
    "ch": 2,
    "t": "Command Line Interpreter & GUI",
    "ar": "واجهات المستخدم",
    "pts": [
      [
        "<b>CLI</b> allows direct command entry; primarily fetches a command from user and executes it. Sometimes in kernel, sometimes a system program. Multiple flavors – <b>shells</b>.",
        "الـ CLI ياخذ الأمر من المستخدم وينفّذه. أحياناً يكون في الكيرنل وأحياناً برنامج نظام، وأنواعه المختلفة اسمها shells."
      ],
      [
        "Commands either <b>built-in</b>, or just <b>names of programs</b> → adding new commands <b>doesn't require shell modification</b>.",
        "الأوامر إما مدمجة في المفسّر، أو أسماء برامج. ولو برامج، تضيف أمر جديد بدون ما تعدّل الـ shell."
      ],
      [
        "<b>GUI</b>: user-friendly desktop metaphor; icons represent files, programs, actions.",
        "الـ GUI واجهة سطح مكتب سهلة، والأيقونات تمثل الملفات والبرامج."
      ],
      [
        "Windows = GUI with CLI shell · Mac OS X = <b>\"Aqua\"</b> GUI with <b>UNIX kernel</b> underneath · Unix/Linux = CLI with optional GUI (<b>KDE, GNOME</b>). Touchscreen: gestures, virtual keyboard, voice commands.",
        "ويندوز GUI ومعه shell. الماك واجهته Aqua وتحتها UNIX. ولينكس CLI ومعه GUI اختياري مثل KDE وGNOME. واللمس فيه إيماءات وكيبورد افتراضي وأوامر صوتية."
      ]
    ],
    "idx": 12
  },
  {
    "id": "sc",
    "ch": 2,
    "t": "System Calls & API",
    "ar": "استدعاءات النظام والـ API",
    "pts": [
      [
        "<b>System calls</b> provide programming interface to OS services, generally written in <b>C or C++</b> (some low-level tasks in assembly). e.g. open, read, write, close, wait, exec, fork, exit, kill.",
        "الـ system calls هي الواجهة البرمجية لخدمات النظام، مكتوبة غالباً بـ C أو C++، وبعض المهام المنخفضة بالأسمبلي."
      ],
      [
        "Programmers use an <b>API</b> rather than direct system calls. Most common: <b>Win32 API</b> (Windows), <b>POSIX API</b> (UNIX, Linux, Mac OS X), <b>Java API</b> (JVM).",
        "المبرمج يتعامل مع API بدل الـ system calls مباشرة. أشهرها Win32 للويندوز، وPOSIX للينكس واليونكس والماك، وJava API."
      ],
      [
        "Why APIs? <b>Portability</b> + <b>simpler</b> than actual system calls.",
        "ليش API؟ لأنه ينقل بين الأجهزة بسهولة، وأبسط من الـ system calls الفعلية."
      ],
      [
        "A <b>number</b> is associated with each system call; the system-call interface maintains a <b>table indexed by these numbers</b>. Details hidden by API, managed by <b>run-time support library</b>.",
        "كل system call له رقم، وفيه جدول مرتّب بالأرقام. والتفاصيل مخفية عن المبرمج وتديرها مكتبة الـ run-time."
      ],
      [
        "C program invoking <b>printf()</b> library call, which calls <b>write()</b> system call.",
        "دالة printf في C تستدعي الـ system call اللي اسمه write."
      ]
    ],
    "idx": 13
  },
  {
    "id": "param",
    "ch": 2,
    "t": "System Call Parameter Passing",
    "ar": "تمرير المعاملات",
    "pts": [
      [
        "Simplest: pass the parameters in <b>registers</b> — may be more parameters than registers.",
        "أبسط طريقة: نحطها في الريجسترات، بس ممكن تكون أكثر من عدد الريجسترات."
      ],
      [
        "Parameters stored in a <b>block (table) in memory</b>, address of block passed in a register — approach taken by <b>Linux and Solaris</b>.",
        "نحطها في block بالذاكرة ونمرّر عنوانه في ريجستر. هذي طريقة لينكس وسولاريس."
      ],
      [
        "Parameters <b>pushed onto the stack</b> by the program and popped off by the OS.",
        "البرنامج يدفعها في الـ stack والنظام يسحبها."
      ],
      [
        "<b>Block and stack</b> methods do not limit the number or length of parameters.",
        "طريقة الـ block والـ stack ما تحدّ عدد المعاملات ولا طولها."
      ]
    ],
    "idx": 14
  },
  {
    "id": "types",
    "ch": 2,
    "t": "Types of System Calls",
    "ar": "أنواع الاستدعاءات (6)",
    "pts": [
      [
        "<b>Process control</b>: create/terminate process, end/abort, load/execute, wait for time, wait/signal event, allocate/free memory, dump memory, debugger, <b>locks</b>.",
        "التحكم بالعمليات: إنشاء وإنهاء، تحميل وتشغيل، انتظار، حجز الذاكرة، الـ debugger، والـ locks."
      ],
      [
        "<b>File management</b>: create/delete file, open/close, read/write/reposition, get/set file attributes.",
        "إدارة الملفات: إنشاء وحذف، فتح وإغلاق، قراءة وكتابة، وخصائص الملف."
      ],
      [
        "<b>Device management</b>: request/release device, read/write/reposition, device attributes, logically attach/detach devices.",
        "إدارة الأجهزة: طلب وتحرير جهاز، قراءة وكتابة، وتوصيل وفصل الأجهزة."
      ],
      [
        "<b>Information maintenance</b>: get/set <b>time or date</b>, get/set system data, process/file/device attributes.",
        "حفظ المعلومات: الوقت والتاريخ وبيانات النظام."
      ],
      [
        "<b>Communications</b>: create/delete connection, send/receive messages, shared-memory, transfer status info, attach/detach <b>remote</b> devices.",
        "التواصل: إنشاء اتصال، إرسال واستقبال رسائل، ذاكرة مشتركة، وأجهزة عن بُعد."
      ],
      [
        "<b>Protection</b>: control access to resources, get/set <b>permissions</b>, allow/deny user access.",
        "الحماية: التحكم بالوصول والصلاحيات."
      ]
    ],
    "trap": [
      "<b>Arduino</b>: single-tasking, <b>no OS</b>, sketch loaded via USB into flash. <b>FreeBSD</b>: multitasking, shell executes <b>fork()</b> then <b>exec()</b>. Exit code <b>0 = no error</b>, &gt; 0 = error.",
      "Arduino: مهمة وحدة وبدون نظام تشغيل. FreeBSD: متعدد المهام، الـ shell يسوي fork بعدين exec. وكود الخروج صفر يعني ما فيه خطأ."
    ],
    "idx": 15
  },
  {
    "id": "sysprog",
    "ch": 2,
    "t": "System Services (System Programs)",
    "ar": "برامج النظام",
    "pts": [
      [
        "Logical hierarchy: Hardware → OS → <b>System programs</b> → Application programs → Users.",
        "الترتيب من تحت لفوق: الهاردوير، النظام، برامج النظام، البرامج التطبيقية، المستخدمين."
      ],
      [
        "<b>File management</b> · <b>Status information</b> (date, time, memory, disk space; some systems use a <b>registry</b> to store configuration) · <b>File modification</b> (text editors).",
        "إدارة الملفات، معلومات الحالة (والـ registry لحفظ الإعدادات)، وتعديل الملفات مثل محررات النصوص."
      ],
      [
        "<b>Programming-language support</b> (compilers, assemblers, debuggers, interpreters) · <b>Program loading and execution</b> (absolute/relocatable loaders, linkage editors) · <b>Communications</b>.",
        "دعم لغات البرمجة (كومبايلرات وdebuggers)، تحميل وتشغيل البرامج (loaders)، والتواصل."
      ],
      [
        "<b>Background services</b>: launch at boot; run in <b>user context not kernel context</b>; known as services, subsystems, <b>daemons</b>.",
        "خدمات الخلفية: تبدأ مع الإقلاع، تشتغل في سياق المستخدم مو الكيرنل، واسمها daemons."
      ],
      [
        "Most users' view of the OS is defined by <b>system programs</b>, not the actual system calls.",
        "أغلب المستخدمين يشوفون النظام من خلال برامج النظام، مو من الـ system calls."
      ]
    ],
    "idx": 16
  },
  {
    "id": "design",
    "ch": 2,
    "t": "Design and Implementation",
    "ar": "التصميم والتنفيذ",
    "pts": [
      [
        "<b>User goals</b> – convenient to use, easy to learn, reliable, safe, and fast.",
        "أهداف المستخدم: سهل، سريع التعلّم، موثوق، آمن، وسريع."
      ],
      [
        "<b>System goals</b> – easy to design, implement, and maintain, flexible, reliable, error-free, and efficient.",
        "أهداف النظام: سهل التصميم والتنفيذ والصيانة، مرن، بدون أخطاء، وكفؤ."
      ],
      [
        "Early OSes in assembly. Now: <b>lowest levels of kernel in assembly</b>, <b>main body in C</b>, system programs in C, C++, scripting languages.",
        "قديماً بالأسمبلي. الحين: أدنى جزء من الكيرنل أسمبلي، والجسم الرئيسي بـ C."
      ],
      [
        "More high-level language → <b>easier to port</b> to other hardware, but <b>slower</b>.",
        "كل ما كانت اللغة عالية المستوى صار أسهل تنقله لهاردوير ثاني، بس أبطأ."
      ]
    ],
    "idx": 17
  },
  {
    "id": "struct",
    "ch": 2,
    "t": "Operating System Structure",
    "ar": "هياكل النظام",
    "pts": [
      [
        "<b>Simple – MS-DOS</b>: most functionality in least space; <b>not divided into modules</b>; apps access basic I/O routines directly → malicious programs can crash the entire system.",
        "MS-DOS بسيط: أكبر وظائف بأقل مساحة، مو مقسّم، والبرامج توصل للـ I/O مباشرة، فبرنامج خبيث يطيّح النظام كله."
      ],
      [
        "<b>Monolithic – original UNIX</b>: all kernel functionality in a <b>single static binary</b>, single address space. <b>Tightly coupled</b>. Difficult to implement and extend, but <b>performance advantage</b> (little system-call overhead).",
        "Monolithic: الكيرنل كله ملف واحد ومساحة عنوان وحدة، مترابط بقوة. صعب تطوّره بس أداؤه سريع."
      ],
      [
        "<b>Layered</b>: divided into layers; <b>layer 0 = hardware</b>, <b>layer N = user interface</b>. Each layer uses only lower-level layers → simplifies <b>debugging and verification</b>. (loosely coupled)",
        "الطبقات: الطبقة صفر هي الهاردوير والأخيرة هي الواجهة. كل طبقة تستخدم اللي تحتها بس، فيسهل اكتشاف الأخطاء والتحقق."
      ],
      [
        "<b>Microkernel – Mach</b>: moves as much as possible into <b>user space</b>; communication via <b>message passing</b>. Benefits: easier to extend and port, more <b>reliable and secure</b>. Disadvantage: <b>performance overhead</b>. Mac OS X kernel (Darwin) partly based on Mach.",
        "Microkernel: يطلّع كل شي مو ضروري لمساحة المستخدم ويتواصلون برسائل. أسهل توسعة وأكثر أمان، بس أبطأ."
      ],
      [
        "<b>Modules (LKMs)</b>: object-oriented; each core component separate, loadable as needed. Similar to layers but <b>more flexible</b>. Linux, Solaris.",
        "الـ Modules: كل مكوّن منفصل ويتحمّل وقت الحاجة. يشبه الطبقات بس أكثر مرونة."
      ],
      [
        "<b>Hybrid</b>: Linux/Solaris = monolithic + modular · Windows = mostly monolithic + microkernel for <b>subsystem personalities</b> · Mac OS X = Mach + BSD + I/O kit + <b>kernel extensions</b>.",
        "Hybrid: أغلب الأنظمة الحديثة تخلط أكثر من أسلوب، مثل ويندوز ولينكس والماك."
      ]
    ],
    "idx": 18
  },
  {
    "id": "pconcept",
    "ch": 3,
    "t": "Process Concept",
    "ar": "مفهوم العملية",
    "pts": [
      [
        "Early systems allowed only <b>one program</b> at a time with complete control. Today multiple programs are loaded into memory and executed <b>concurrently</b> → needs firmer control → the notion of a <b>process</b>.",
        "زمان كان يشتغل برنامج واحد بس وله تحكم كامل. الحين برامج كثيرة تشتغل مع بعض، فاحتجنا تحكم أقوى، ومن هنا جا مفهوم الـ process."
      ],
      [
        "<b>Process</b> – a <b>program in execution</b> (a unit of work); execution must progress in <b>sequential fashion</b>. No parallel execution of instructions of a single process.",
        "الـ process هو برنامج شغّال، وتعليماته تتنفّذ وحدة ورا الثانية، ما تتنفّذ تعليمات نفس الـ process بالتوازي."
      ],
      [
        "Running processes are either <b>OS processes</b> executing system code or <b>user processes</b> executing user code. Textbook uses <b>job</b> and <b>process</b> almost interchangeably.",
        "العمليات إما عمليات نظام تنفّذ كود النظام، أو عمليات مستخدم. والكتاب يستخدم job وprocess بنفس المعنى تقريباً."
      ],
      [
        "<b>Program</b> is a <b>passive</b> entity stored on disk (executable file); <b>process</b> is <b>active</b>, with a <b>program counter</b> and a set of associated resources.",
        "البرنامج شي ساكن محفوظ على الديسك، والـ process شي نشط عنده program counter وموارد."
      ],
      [
        "Program becomes process when an executable file is <b>loaded into memory</b> (GUI click, command line: prog.exe, a.out).",
        "البرنامج يصير process لما ينحمّل في الذاكرة."
      ],
      [
        "<b>One program can be several processes</b> (e.g. many users running the mail program) — they are <b>separate execution sequences</b>.",
        "برنامج واحد ممكن يصير كذا process، مثل كذا مستخدم فاتحين نفس البرنامج، وكل واحد منها تنفيذ مستقل."
      ]
    ],
    "trap": [
      "Program = <b>passive</b>, Process = <b>active</b>.",
      "البرنامج ساكن والـ process نشط. لا تقلبها."
    ],
    "idx": 19
  },
  {
    "id": "pmem",
    "ch": 3,
    "t": "Process in Memory",
    "ar": "العملية في الذاكرة",
    "pts": [
      [
        "Current activity is represented by the value of the <b>program counter</b> and the content of the <b>processor registers</b>.",
        "النشاط الحالي للعملية يتمثّل في قيمة الـ program counter ومحتوى الريجسترات."
      ],
      [
        "Memory layout sections: <b>Text</b> (program code) · <b>Data</b> (global variables) · <b>Heap</b> (memory dynamically allocated during run time) · <b>Stack</b> (temporary data: function parameters, return addresses, local variables).",
        "أقسام الذاكرة: text فيه الكود، data فيه المتغيرات العامة، heap للذاكرة اللي تنحجز وقت التشغيل، وstack للبيانات المؤقتة مثل معاملات الدوال وعناوين الرجوع والمتغيرات المحلية."
      ],
      [
        "Sizes of <b>text and data are fixed</b>; <b>stack and heap shrink and grow</b> dynamically.",
        "حجم الـ text والـ data ثابت، أما الـ stack والـ heap يكبرون ويصغرون."
      ],
      [
        "Each function call pushes an <b>activation record</b> (parameters, local variables, return address) onto the stack; popped when control returns.",
        "كل استدعاء دالة يدفع activation record في الـ stack، ولما ترجع الدالة ينسحب."
      ],
      [
        "Stack and heap <b>grow toward one another</b>; the OS must ensure they <b>do not overlap</b>.",
        "الـ stack والـ heap يكبرون باتجاه بعض، والنظام لازم يتأكد إنهم ما يتداخلون."
      ]
    ],
    "trap": [
      "Global variables → <b>data</b>, not heap. <b>malloc/new</b> → heap. Local variables → <b>stack</b>.",
      "المتغيرات العامة في الـ data مو الـ heap. اللي ينحجز بـ malloc أو new يروح للـ heap. والمحلية في الـ stack."
    ],
    "idx": 20
  },
  {
    "id": "pstate",
    "ch": 3,
    "t": "Process State & PCB",
    "ar": "حالات العملية والـ PCB",
    "pts": [
      [
        "<b>New</b>: being created · <b>Running</b>: instructions being executed · <b>Waiting</b>: waiting for some event · <b>Ready</b>: waiting to be assigned to a processor · <b>Terminated</b>: finished execution.",
        "الحالات الخمس: New تنشأ، Running تتنفّذ، Waiting تنتظر حدث، Ready تنتظر المعالج، Terminated خلصت."
      ],
      [
        "Only <b>one process</b> can be <b>running</b> on any processor core at an instant; many may be ready and waiting.",
        "على كل core تقدر عملية وحدة بس تكون Running بنفس اللحظة، وكثير ممكن يكونون Ready أو Waiting."
      ],
      [
        "Transitions: new → <b>admitted</b> → ready → <b>scheduler dispatch</b> → running → <b>interrupt</b> → ready · running → <b>I/O or event wait</b> → waiting → <b>I/O or event completion</b> → ready · running → <b>exit</b> → terminated.",
        "الانتقالات: من new لـ ready بالقبول، من ready لـ running بالجدولة، والـ interrupt يرجعها ready، وانتظار I/O يوديها waiting، ولما يخلص الـ I/O ترجع ready، والـ exit يوديها terminated."
      ],
      [
        "<b>PCB (Process Control Block)</b>, also called <b>task control block</b>: process state · program counter · CPU registers · CPU-scheduling info (priorities, queue pointers) · memory-management info · accounting info (CPU used, time limits) · I/O status info (devices, open files).",
        "الـ PCB بطاقة هوية العملية، فيها: الحالة، الـ program counter، الريجسترات، معلومات الجدولة، معلومات الذاكرة، المحاسبة، وحالة الـ I/O والملفات المفتوحة."
      ],
      [
        "<b>Threads</b>: a process with a single thread performs one task at a time. Multiple threads → more than one task at a time (e.g. typing + spell checker). PCB must store <b>multiple program counters</b>.",
        "لو العملية فيها thread واحد تسوي مهمة وحدة بس. ولو فيها أكثر تسوي كذا مهمة مع بعض، والـ PCB لازم يحفظ أكثر من program counter."
      ]
    ],
    "trap": [
      "Waiting → Running directly? <b>No!</b> Waiting → <b>Ready</b> → Running.",
      "ما فيه انتقال مباشر من Waiting لـ Running. لازم تمر على Ready أول."
    ],
    "idx": 21
  },
  {
    "id": "psched",
    "ch": 3,
    "t": "Process Scheduling & Context Switch",
    "ar": "جدولة العمليات وتبديل السياق",
    "pts": [
      [
        "<b>Process scheduler</b> selects among available processes for next execution on a CPU core. Goal: <b>maximize CPU use</b>, quickly switch processes onto the core.",
        "الـ scheduler يختار مين يشتغل بعدين، وهدفه يخلي الـ CPU مشغول دايماً."
      ],
      [
        "<b>Ready queue</b> – processes in main memory, ready and waiting to execute. <b>Wait queues</b> – processes waiting for an event (I/O). Processes <b>migrate</b> among queues.",
        "الـ ready queue للعمليات الجاهزة، والـ wait queues للي تنتظر حدث مثل I/O، والعمليات تتنقّل بينها."
      ],
      [
        "<b>Context switch</b>: save the state of the old process and load the saved state of the new one. Context is represented in the <b>PCB</b>.",
        "تبديل السياق: نحفظ حالة العملية القديمة ونحمّل حالة الجديدة، والحالة محفوظة في الـ PCB."
      ],
      [
        "Context-switch time is <b>pure overhead</b> — no useful work while switching. More complex OS and PCB → longer switch. Some hardware provides <b>multiple sets of registers</b> → multiple contexts loaded at once.",
        "وقت التبديل ضايع ما فيه شغل مفيد، وكل ما كان النظام والـ PCB أعقد كان أطول. وبعض الهاردوير فيه أكثر من مجموعة ريجسترات فيسرّع."
      ],
      [
        "<b>Mobile</b>: early iOS – single foreground process, multiple background processes with limits. <b>Android</b> – foreground and background with fewer limits; background uses a <b>service</b> (no UI, small memory, keeps running even if background process is suspended).",
        "الجوال: iOS القديم عملية وحدة في الواجهة والباقي بالخلفية بقيود. أندرويد قيوده أقل، ويستخدم service تكمّل حتى لو العملية انوقفت."
      ]
    ],
    "trap": [
      "Context switch = <b>overhead</b> (no useful work).",
      "تبديل السياق وقت ضايع، مو شغل مفيد."
    ],
    "idx": 22
  },
  {
    "id": "pcreate",
    "ch": 3,
    "t": "Process Creation",
    "ar": "إنشاء العمليات",
    "pts": [
      [
        "<b>Parent</b> process creates <b>children</b>, which create others → a <b>tree of processes</b>. Each identified by a <b>process identifier (pid)</b>.",
        "العملية الأب تنشئ أبناء، والأبناء ينشئون غيرهم، فتتكوّن شجرة. وكل عملية لها رقم pid."
      ],
      [
        "Resource sharing options: parent and children <b>share all</b> resources · children share a <b>subset</b> of parent's (prevents overloading the system) · <b>share no</b> resources (child gets from OS directly; one process can overload the system).",
        "مشاركة الموارد: يتشاركون كل شي، أو الابن ياخذ جزء من موارد الأب (يمنع إغراق النظام)، أو ما يتشاركون شي والابن ياخذ من النظام."
      ],
      [
        "<b>Initialization data</b> (input) passed from parent to child on creation (e.g. the file name to display).",
        "الأب يعطي الابن بيانات بداية، مثل اسم الملف اللي بيعرضه."
      ],
      [
        "Execution: parent and children execute <b>concurrently</b>, or parent <b>waits</b> until children terminate. Address space: child is a <b>duplicate</b> of parent, or child has a <b>new program loaded</b>.",
        "التنفيذ: إما يشتغلون مع بعض، أو الأب ينتظر. والذاكرة: الابن نسخة من الأب، أو ينحمّل فيه برنامج جديد."
      ],
      [
        "UNIX: <b>fork()</b> creates new process; parent's address space duplicated; both resume after fork(). Return code is <b>0 for the child</b>, <b>child's pid (nonzero) for the parent</b>.",
        "في يونكس: fork تنشئ عملية جديدة نسخة من الأب، والاثنين يكمّلون بعد fork. وترجع صفر للابن، وللأب ترجع pid الابن."
      ],
      [
        "<b>exec()</b> used by child after fork to <b>replace</b> the process' memory space with a new program. <b>wait()</b> takes the parent out of the ready queue until the child terminates.",
        "exec يستبدل ذاكرة العملية ببرنامج جديد، وwait تطلّع الأب من الـ ready queue لين يخلص الابن."
      ]
    ],
    "trap": [
      "fork() returns <b>0 to the child</b>, and the <b>child's pid</b> to the parent.",
      "fork ترجع صفر للابن، وترجع pid الابن للأب. انتبه لا تعكسها."
    ],
    "idx": 23
  },
  {
    "id": "pterm",
    "ch": 3,
    "t": "Process Termination",
    "ar": "إنهاء العمليات",
    "pts": [
      [
        "Process executes last statement and asks the OS to delete it using <b>exit()</b>; status returned to parent via <b>wait()</b>; resources deallocated by the OS.",
        "العملية لما تخلص تطلب من النظام يحذفها بـ exit، وترجع حالتها للأب عن طريق wait، والنظام يحرر مواردها."
      ],
      [
        "Parent may terminate children using <b>abort()</b>: child exceeded allocated resources · task no longer required · the parent is exiting and the OS doesn't allow a child to continue.",
        "الأب يقدر ينهي ابنه بـ abort إذا تعدّى موارده، أو مهمته ما عاد لها داعي، أو الأب نفسه بيطلع."
      ],
      [
        "<b>Cascading termination</b>: if a process terminates, all children, grandchildren, etc. are terminated — initiated by the <b>OS</b>.",
        "الإنهاء المتسلسل: إذا انتهى الأب ينتهي كل أبنائه وأحفاده، والنظام هو اللي يسويه."
      ],
      [
        "<b>pid = wait(&status);</b> returns status and pid of the terminated child.",
        "wait ترجع حالة الابن اللي انتهى ورقمه."
      ],
      [
        "No parent waiting (did not invoke wait()) → <b>zombie</b>. Parent terminated without invoking wait() → <b>orphan</b>.",
        "إذا الابن خلص والأب ما سوّى wait يصير zombie. وإذا الأب انتهى بدون wait يصير الابن orphan."
      ],
      [
        "<b>Android importance hierarchy</b> (most → least): <b>Foreground → Visible → Service → Background → Empty</b>. Terminates least important first.",
        "أندرويد يرتب العمليات من الأهم: الواجهة، المرئية، الخدمة، الخلفية، الفاضية. ويبدأ يقفل من الأقل أهمية."
      ],
      [
        "<b>Chrome</b> is multiprocess: <b>Browser</b> process (UI, disk & network I/O) · <b>Renderer</b> process (HTML, JavaScript; one per website; runs in <b>sandbox</b>) · <b>Plug-in</b> process per plug-in type.",
        "كروم متعدد العمليات: عملية المتصفح للواجهة والـ I/O، عملية renderer لكل موقع وتشتغل في sandbox، وعملية لكل نوع plug-in."
      ]
    ],
    "trap": [
      "<b>Zombie</b> = child finished, parent hasn't called wait(). <b>Orphan</b> = parent died first.",
      "الزومبي ابن خلص والأب ما سأل عنه. اليتيم أبوه مات قبله."
    ],
    "idx": 24
  },
  {
    "id": "ipc",
    "ch": 3,
    "t": "Interprocess Communication (IPC)",
    "ar": "التواصل بين العمليات",
    "pts": [
      [
        "Processes may be <b>independent</b> or <b>cooperating</b>. Cooperating processes can affect or be affected by other processes, including sharing data.",
        "العمليات إما مستقلة، أو متعاونة تأثّر وتتأثّر ببعض وتتشارك بيانات."
      ],
      [
        "Reasons for cooperating: <b>Information sharing</b> (copy & paste) · <b>Computation speedup</b> (subtasks in parallel — only with <b>multiple cores</b>) · <b>Modularity</b>.",
        "أسباب التعاون: مشاركة المعلومات، تسريع الحساب (يحتاج أكثر من core)، والتقسيم لوحدات."
      ],
      [
        "Two models of IPC: <b>Shared memory</b> (region shared; read/write it) and <b>Message passing</b> (messages exchanged).",
        "نموذجين: ذاكرة مشتركة يقرون ويكتبون فيها، أو تبادل رسائل."
      ],
      [
        "<b>Producer-Consumer</b>: producer produces info consumed by consumer. <b>Unbounded buffer</b>: producer <b>never waits</b>; consumer waits if empty. <b>Bounded buffer</b>: producer waits if <b>full</b>; consumer waits if empty.",
        "مشكلة المنتج والمستهلك: في البفر غير المحدود المنتج ما ينتظر أبداً. في البفر المحدود المنتج ينتظر لو امتلى. والمستهلك في الحالتين ينتظر لو فاضي."
      ]
    ],
    "trap": [
      "Computation speedup only with <b>multiple processing cores</b>.",
      "التسريع ما يصير إلا إذا فيه أكثر من core."
    ],
    "idx": 25
  },
  {
    "id": "shm",
    "ch": 3,
    "t": "IPC – Shared Memory & Race Condition",
    "ar": "الذاكرة المشتركة وحالة السباق",
    "pts": [
      [
        "Shared memory communication is under the control of the <b>user processes, not the OS</b>. Major issue: <b>synchronize</b> their actions (Chapters 6 & 7).",
        "التواصل بالذاكرة المشتركة تحت تحكم عمليات المستخدم مو النظام، والمشكلة الكبيرة هي التزامن."
      ],
      [
        "Bounded buffer as <b>circular array</b> with <b>in</b> and <b>out</b>. Empty when <b>in == out</b>. Full when <b>((in + 1) % BUFFER_SIZE) == out</b>.",
        "البفر مصفوفة دائرية بمؤشرين in وout. فاضي إذا in يساوي out، ومليان إذا (in+1) % SIZE يساوي out."
      ],
      [
        "This solution can only use <b>BUFFER_SIZE − 1</b> elements.",
        "هالحل يستخدم SIZE ناقص واحد بس من الخانات."
      ],
      [
        "To fill all buffers: integer <b>counter</b> (initially 0), <b>incremented by producer</b>, <b>decremented by consumer</b>.",
        "عشان نستخدم كل الخانات نضيف counter يبدأ صفر، المنتج يزيده والمستهلك ينقصه."
      ],
      [
        "<b>Race condition</b>: counter++ / counter-- are each 3 machine instructions (load, add/sub, store). Interleaving with counter = 5 can give <b>4 or 6</b> instead of 5.",
        "حالة السباق: counter++ وcounter-- كل وحدة ثلاث تعليمات، ولو تداخلت ممكن تطلع النتيجة 4 أو 6 بدل 5."
      ]
    ],
    "trap": [
      "Without counter: max <b>N − 1</b> items. Full test: <b>(in+1) % SIZE == out</b>.",
      "بدون counter أقصى شي N ناقص واحد. وشرط الامتلاء: (in+1) % SIZE == out."
    ],
    "idx": 26
  },
  {
    "id": "msg",
    "ch": 3,
    "t": "IPC – Message Passing",
    "ar": "تبادل الرسائل",
    "pts": [
      [
        "Processes communicate <b>without shared variables</b>. Two operations: <b>send(message)</b>, <b>receive(message)</b>. Message size fixed or variable.",
        "العمليات تتواصل بدون متغيرات مشتركة، بعمليتين send وreceive، وحجم الرسالة ثابت أو متغير."
      ],
      [
        "P and Q must <b>establish a communication link</b>, then exchange via send/receive. Physical: shared memory, hardware bus, network. Logical: direct/indirect, synchronous/asynchronous, automatic/explicit buffering.",
        "لازم يسوون رابط اتصال أول. فيزيائياً: ذاكرة مشتركة أو bus أو شبكة. ومنطقياً: مباشر أو غير مباشر، متزامن أو لا، وبفر تلقائي أو صريح."
      ],
      [
        "<b>Direct</b>: name each other explicitly — send(P, msg), receive(Q, msg). Link established <b>automatically</b>; associated with <b>exactly one pair</b>; <b>exactly one link</b> per pair; usually bi-directional.",
        "المباشر: كل عملية تسمي الثانية. الرابط ينشأ تلقائياً، لزوج واحد بالضبط، ورابط واحد بس بينهم."
      ],
      [
        "<b>Indirect</b>: via <b>mailboxes (ports)</b>, each with unique id. Link only if they <b>share a mailbox</b>; may be associated with <b>many processes</b>; a pair may share <b>several links</b>. send(A, msg) / receive(A, msg).",
        "غير المباشر: عن طريق mailbox (port). الرابط بس لو يتشاركون mailbox، وممكن يكون بين أكثر من عمليتين، والزوج ممكن يكون بينهم أكثر من رابط."
      ],
      [
        "Mailbox sharing (P1 sends, P2 & P3 receive — who gets it?): allow link with at most two processes · allow only one process at a time to receive · system selects receiver arbitrarily and notifies sender.",
        "لو أكثر من واحد ينتظر من نفس الـ mailbox: يا نحصر الرابط في عمليتين، يا نخلي وحدة بس تستقبل بكل مرة، يا النظام يختار ويبلّغ المرسل."
      ],
      [
        "<b>Blocking = synchronous</b>: blocking send (sender blocked until received), blocking receive (blocked until available). <b>Non-blocking = asynchronous</b>: send and continue; receive valid or <b>null</b>. Both blocking → <b>rendezvous</b>.",
        "الـ blocking يعني متزامن: المرسل ينتظر لين تنستلم والمستقبل ينتظر لين توصل. والـ non-blocking غير متزامن. ولو الاثنين blocking نسميه rendezvous."
      ],
      [
        "<b>Buffering</b>: <b>Zero capacity</b> – sender must wait (rendezvous) · <b>Bounded</b> – n messages, wait if full · <b>Unbounded</b> – sender never waits.",
        "البفر: سعة صفر المرسل ينتظر، محدودة ينتظر إذا امتلت، غير محدودة ما ينتظر أبداً."
      ]
    ],
    "trap": [
      "Direct = <b>exactly one</b> link per pair. Indirect = <b>several</b> links possible, many processes.",
      "المباشر رابط واحد بالضبط لكل زوج، وغير المباشر ممكن أكثر من رابط وأكثر من عمليتين."
    ],
    "idx": 27
  },
  {
    "id": "tconcept",
    "ch": 4,
    "t": "Threads – Motivation & Concept",
    "ar": "مفهوم الـ Threads",
    "pts": [
      [
        "Most modern applications are <b>multithreaded</b>: update display, fetch data, spell checking, answer a network request. <b>Kernels are generally multithreaded</b>.",
        "أغلب البرامج الحديثة فيها كذا thread: واحد يحدّث الشاشة، وواحد يجيب بيانات، وواحد يدقق إملائي. وحتى الكيرنل نفسه multithreaded."
      ],
      [
        "Process creation is <b>heavy-weight</b>; thread creation is <b>light-weight</b>. Threads can simplify code and increase efficiency.",
        "إنشاء process ثقيل، وإنشاء thread خفيف."
      ],
      [
        "A <b>thread</b> is a <b>basic unit of CPU utilization</b>; it comprises: <b>thread ID, program counter, register set, stack</b>.",
        "الـ thread هو الوحدة الأساسية لاستخدام الـ CPU، وله خاص فيه: ID وprogram counter وريجسترات وstack."
      ],
      [
        "It <b>shares</b> with other threads of the same process: <b>code section, data section, other OS resources</b> (open files).",
        "ويتشارك مع باقي الـ threads في نفس العملية: الكود والبيانات والملفات المفتوحة."
      ],
      [
        "Multithreaded server: request → server <b>creates a new thread</b> to service it → resumes listening for more requests.",
        "السيرفر لما يجيه طلب يسوي thread جديد يخدمه، ويرجع يستقبل طلبات ثانية."
      ]
    ],
    "trap": [
      "Each thread has its <b>own stack & registers</b>; <b>code, data, files are shared</b>.",
      "كل thread له stack وريجسترات خاصة، والكود والبيانات والملفات مشتركة."
    ],
    "idx": 28
  },
  {
    "id": "tbenefit",
    "ch": 4,
    "t": "Benefits & Concurrency vs Parallelism",
    "ar": "المميزات والتزامن مقابل التوازي",
    "pts": [
      [
        "<b>Responsiveness</b> – continued execution if part of process is blocked (important for UIs).",
        "الاستجابة: البرنامج يكمّل حتى لو جزء منه معلّق، ومهم للواجهات."
      ],
      [
        "<b>Resource sharing</b> – threads share resources of process, easier than shared memory or message passing.",
        "مشاركة الموارد: الـ threads تتشارك موارد العملية بشكل أسهل من الذاكرة المشتركة أو الرسائل."
      ],
      [
        "<b>Economy</b> – cheaper than process creation; thread switching lower overhead than context switching.",
        "التوفير: أرخص من إنشاء process، والتبديل بين الـ threads أخف من الـ context switch."
      ],
      [
        "<b>Scalability</b> – process can take advantage of <b>multicore</b> architectures.",
        "قابلية التوسع: يستفيد من المعالجات متعددة الأنوية."
      ],
      [
        "<b>Parallelism</b>: perform more than one task <b>simultaneously</b> (multi-core). <b>Concurrency</b>: more than one task <b>making progress</b> (single core, scheduler). → <b>Concurrency without parallelism</b> is possible.",
        "التوازي: أكثر من مهمة بنفس اللحظة فعلياً، ويحتاج أكثر من core. التزامن: أكثر من مهمة تتقدم بالتناوب حتى على core واحد. فممكن يكون فيه تزامن بدون توازي."
      ],
      [
        "<b>Data parallelism</b>: same operation on subsets of data across cores. <b>Task parallelism</b>: different tasks (threads) across cores.",
        "توازي البيانات: نفس العملية على أجزاء مختلفة من البيانات. توازي المهام: كل core يسوي مهمة مختلفة."
      ]
    ],
    "trap": [
      "Single core → <b>concurrency only</b>, not parallelism.",
      "على core واحد فيه تزامن بس، ما فيه توازي."
    ],
    "idx": 29
  },
  {
    "id": "tuk",
    "ch": 4,
    "t": "User Threads vs Kernel Threads",
    "ar": "خيوط المستخدم وخيوط الكيرنل",
    "pts": [
      [
        "<b>User threads</b> – management done by a <b>user-level threads library</b>, without kernel support. Scheduling managed by the library (user mode). All belong to the process that created them. <b>Kernel is unaware</b> of user-level threads.",
        "خيوط المستخدم تديرها مكتبة في مساحة المستخدم بدون الكيرنل، والكيرنل ما يدري عنها أصلاً."
      ],
      [
        "Three primary thread libraries: <b>POSIX Pthreads</b>, <b>Windows threads</b>, <b>Java threads</b>.",
        "أشهر المكتبات: Pthreads وWindows threads وJava threads."
      ],
      [
        "<b>Kernel threads</b> – supported and managed directly by the OS; sometimes called a <b>Lightweight Process (LWP)</b>. <b>More expensive to create</b> than user threads.",
        "خيوط الكيرنل يديرها النظام مباشرة، واسمها أحياناً LWP، وإنشاؤها أغلى من خيوط المستخدم."
      ],
      [
        "Virtually all general-purpose OSes support kernel threads: Windows, Linux, Mac OS X, iOS, Android, Solaris.",
        "تقريباً كل الأنظمة تدعم خيوط الكيرنل."
      ],
      [
        "For a user thread to execute, it must be <b>associated with a kernel thread</b> — a relationship must exist.",
        "عشان خيط المستخدم يشتغل لازم يرتبط بخيط كيرنل."
      ]
    ],
    "trap": [
      "Kernel thread = <b>LWP</b>, more expensive to create.",
      "خيط الكيرنل اسمه LWP، وإنشاؤه أغلى."
    ],
    "idx": 30
  },
  {
    "id": "tmodels",
    "ch": 4,
    "t": "Multithreading Models",
    "ar": "نماذج الربط",
    "pts": [
      [
        "<b>Many-to-One</b>: many user threads → single kernel thread. <b>One thread blocking causes all to block</b>. Cannot run in parallel on multicore (only one may be in kernel at a time). Few systems use it. Examples: <b>Solaris Green Threads, GNU Portable Threads</b>.",
        "كثير لواحد: كل خيوط المستخدم على خيط كيرنل واحد. لو واحد تعلّق تعلّقوا كلهم، وما يشتغلون بالتوازي."
      ],
      [
        "<b>One-to-One</b>: each user thread → one kernel thread. <b>More concurrency</b> (one blocking doesn't block others; can run in parallel). Creating a user thread requires creating a kernel thread; number of threads may be restricted due to overhead. Examples: <b>Windows, Linux</b>.",
        "واحد لواحد: كل خيط مستخدم له خيط كيرنل. تزامن أكثر وتوازي، بس كل خيط جديد يحتاج خيط كيرنل، فممكن يتحدد العدد."
      ],
      [
        "<b>Many-to-Many</b>: many user threads → many kernel threads. Allows the OS to create a <b>sufficient number</b> of kernel threads. Example: <b>Windows with the ThreadFiber package</b>. Otherwise not very common.",
        "كثير لكثير: النظام يسوي عدد كافي من خيوط الكيرنل. مثاله Windows مع ThreadFiber، وغير كذا مو منتشر."
      ]
    ],
    "trap": [
      "Many-to-One: one blocks → <b>all block</b>, <b>no parallelism</b>.",
      "في كثير لواحد: لو واحد تعلّق تعلّق الكل، وما فيه توازي."
    ],
    "idx": 31
  },
  {
    "id": "tlib",
    "ch": 4,
    "t": "Thread Libraries & Java Threads",
    "ar": "مكتبات الخيوط وجافا",
    "pts": [
      [
        "<b>Thread library</b> provides programmer with an <b>API</b> for creating and managing threads.",
        "مكتبة الخيوط تعطي المبرمج API لإنشاء الخيوط وإدارتها."
      ],
      [
        "(1) Library entirely in <b>user space</b>: no kernel support; calling a function = <b>local function call</b>, not a system call.",
        "النوع الأول بالكامل في مساحة المستخدم، واستدعاء دالة فيها مجرد استدعاء محلي مو system call."
      ],
      [
        "(2) <b>Kernel-level</b> library supported by the OS: code in kernel space; calling an API function typically results in a <b>system call</b>.",
        "النوع الثاني على مستوى الكيرنل، واستدعاء دالة فيها يصير system call."
      ],
      [
        "<b>Java threads</b> managed by the <b>JVM</b>, typically using the underlying OS thread model. Created by <b>extending Thread class</b> or <b>implementing Runnable interface</b> (standard practice: <b>Runnable</b>).",
        "خيوط جافا يديرها الـ JVM. تنشئها إما بوراثة Thread أو بتطبيق Runnable، والمعتاد Runnable."
      ],
      [
        "<b>start()</b> begins the thread; <b>join()</b> makes main <b>wait</b> for the thread to finish. Without join() result is not guaranteed (may print 0.0 instead of 20.0).",
        "start تبدأ الخيط، وjoin تخلي main ينتظره يخلص. بدون join ممكن تنطبع 0.0 بدل 20.0 لأن الحساب ما خلص."
      ]
    ],
    "trap": [
      "User-space library call = <b>local function call</b>, NOT a system call.",
      "مكتبة مساحة المستخدم استدعاؤها محلي، مو system call."
    ],
    "idx": 32
  },
  {
    "id": "sbasic",
    "ch": 5,
    "t": "CPU Scheduling – Basic Concepts",
    "ar": "أساسيات الجدولة",
    "pts": [
      [
        "Maximum CPU utilization obtained with <b>multiprogramming</b>. <b>CPU–I/O Burst Cycle</b>: execution is a cycle of CPU execution and I/O wait. CPU burst distribution: <b>large number of short bursts</b>, small number of longer ones.",
        "أعلى استغلال للـ CPU يجي من الـ multiprogramming. التنفيذ دورة: شغل على الـ CPU ثم انتظار I/O. وأغلب الـ bursts قصيرة."
      ],
      [
        "<b>CPU scheduler</b> selects from processes in the <b>ready queue</b> and allocates a CPU core.",
        "الـ scheduler يختار من الـ ready queue ويعطيه الـ CPU."
      ],
      [
        "Decisions when a process: (1) running → <b>waiting</b> · (2) running → <b>ready</b> · (3) waiting → <b>ready</b> · (4) <b>terminates</b>. For 1 and 4 <b>no choice</b>; for 2 and 3 there is a choice.",
        "قرار الجدولة يصير في 4 حالات. في 1 و4 ما فيه خيار، لازم نختار عملية جديدة. وفي 2 و3 فيه خيار."
      ],
      [
        "Only under 1 and 4 → <b>nonpreemptive</b>; otherwise <b>preemptive</b>. Nonpreemptive: process keeps CPU until it terminates or switches to waiting.",
        "إذا الجدولة بس في 1 و4 تكون nonpreemptive، غير كذا preemptive. وفي الـ nonpreemptive العملية تمسك الـ CPU لين تخلص أو تنتظر."
      ],
      [
        "Virtually all modern OSes (Windows, MacOS, Linux, UNIX) use <b>preemptive</b> scheduling. Preemptive can cause <b>race conditions</b> on shared data; needs queue/remaining-time storage overhead. Starvation possible in both.",
        "كل الأنظمة الحديثة preemptive. والـ preemptive ممكن يسبب race condition، وله overhead لحفظ الطابور والوقت المتبقي."
      ]
    ],
    "trap": [
      "Cases <b>1 & 4 only</b> = nonpreemptive.",
      "إذا الجدولة في الحالة 1 و4 بس، فهي nonpreemptive."
    ],
    "idx": 33
  },
  {
    "id": "scrit",
    "ch": 5,
    "t": "Dispatcher & Scheduling Criteria",
    "ar": "الـ Dispatcher ومعايير الجدولة",
    "pts": [
      [
        "<b>Dispatcher</b> gives control of the CPU to the process selected by the scheduler: <b>switching context</b>, <b>switching to user mode</b>, <b>jumping to the proper location</b> in the user program.",
        "الـ dispatcher يسلّم الـ CPU للعملية اللي اختارها الـ scheduler: يبدّل السياق، يحوّل لـ user mode، وينط للمكان الصح في البرنامج."
      ],
      [
        "<b>Dispatch latency</b> – time for the dispatcher to stop one process and start another.",
        "زمن الـ dispatch: الوقت اللي ياخذه عشان يوقف عملية ويشغّل الثانية."
      ],
      [
        "<b>CPU utilization</b> (keep CPU busy) · <b>Throughput</b> (# processes completed per time unit) · <b>Turnaround time</b> (time to execute a process) · <b>Waiting time</b> (time in <b>ready queue</b>) · <b>Response time</b> (submission → first response).",
        "المعايير: استغلال الـ CPU، الإنتاجية (كم عملية تخلص بوحدة الوقت)، وقت الإنجاز الكلي، وقت الانتظار في الـ ready queue، ووقت أول استجابة."
      ],
      [
        "Optimize: <b>Max</b> CPU utilization & throughput · <b>Min</b> turnaround, waiting, response time.",
        "نبي أعلى استغلال وإنتاجية، وأقل وقت إنجاز وانتظار واستجابة."
      ],
      [
        "Formulas: <b>TAT = Completion − Arrival</b> · <b>WT = TAT − Burst</b> · <b>RT = First start − Arrival</b>.",
        "المعادلات: TAT يساوي وقت الانتهاء ناقص وقت الوصول، وWT يساوي TAT ناقص الـ burst."
      ]
    ],
    "trap": [
      "Waiting time = time in the <b>ready queue</b> only. Scheduler <b>selects</b>, dispatcher <b>gives control</b>.",
      "وقت الانتظار هو الوقت في الـ ready queue بس. والـ scheduler يختار، والـ dispatcher يسلّم."
    ],
    "idx": 34
  },
  {
    "id": "sfcfs",
    "ch": 5,
    "t": "FCFS Scheduling",
    "ar": "اللي يجي أول يُخدم أول",
    "pts": [
      [
        "<b>First-Come, First-Served</b>: processes served in order of arrival. <b>Nonpreemptive</b>.",
        "FCFS: اللي يوصل أول ينخدم أول، وما يقاطع أحد."
      ],
      [
        "Example P1=24, P2=3, P3=3 in order P1,P2,P3: WT P1=0, P2=24, P3=27 → <b>average = 17</b>.",
        "مثال السلايد: بالترتيب P1 ثم P2 ثم P3 متوسط الانتظار 17."
      ],
      [
        "Order P2, P3, P1: WT P1=6, P2=0, P3=3 → <b>average = 3</b>. Much better.",
        "لو غيّرنا الترتيب لـ P2 ثم P3 ثم P1 يصير المتوسط 3 بس."
      ],
      [
        "<b>Convoy effect</b> – short process behind long process (one CPU-bound and many I/O-bound processes).",
        "تأثير القافلة: عمليات قصيرة عالقة ورا عملية طويلة."
      ]
    ],
    "trap": [
      "FCFS order 24,3,3 → avg <b>17</b>; order 3,3,24 → avg <b>3</b>.",
      "احفظ أرقام مثال السلايد: 17 و3."
    ],
    "idx": 35
  },
  {
    "id": "ssjf",
    "ch": 5,
    "t": "SJF & Shortest-Remaining-Time-First",
    "ar": "أقصر مهمة أولاً",
    "pts": [
      [
        "<b>SJF</b>: schedule the process with the <b>shortest next CPU burst</b>. SJF is <b>optimal</b> – gives <b>minimum average waiting time</b> for a given set of processes.",
        "SJF يشغّل العملية اللي الـ burst الجاي لها أقصر، وهو الأمثل لأنه يعطي أقل متوسط انتظار."
      ],
      [
        "Example P1=6, P2=8, P3=7, P4=3 (all at 0): order P4, P1, P3, P2 → average WT = (3+16+9+0)/4 = <b>7</b>.",
        "مثال السلايد: الترتيب P4 ثم P1 ثم P3 ثم P2، والمتوسط 7."
      ],
      [
        "Length of next burst can only be <b>estimated</b> (similar to previous) using <b>exponential averaging</b> of previous bursts, or ask the user.",
        "طول الـ burst الجاي ما نعرفه بالضبط، نقدّره من اللي قبله بالـ exponential averaging."
      ],
      [
        "Preemptive version = <b>Shortest-Remaining-Time-First (SRTF)</b>: whenever a new process arrives, the decision is redone.",
        "النسخة اللي تقاطع اسمها SRTF: كل ما وصلت عملية جديدة نعيد القرار."
      ],
      [
        "SRTF example: P1(0,8), P2(1,4), P3(2,9), P4(3,5) → P1 0–1, P2 1–5, P4 5–10, P1 10–17, P3 17–26 → average WT = 26/4 = <b>6.5</b>.",
        "مثال SRTF من السلايد: متوسط الانتظار 6.5."
      ]
    ],
    "trap": [
      "SJF preemptive = <b>SRTF</b>. SJF = <b>optimal</b> (min avg waiting time).",
      "SJF اللي يقاطع اسمه SRTF، وSJF هو الأمثل في متوسط الانتظار."
    ],
    "idx": 36
  },
  {
    "id": "srr",
    "ch": 5,
    "t": "Round Robin (RR)",
    "ar": "الدور الدائري",
    "pts": [
      [
        "Each process gets a small unit of CPU time (<b>time quantum q</b>), usually <b>10–100 ms</b>. After it elapses, the process is <b>preempted</b> and added to the <b>end of the ready queue</b>.",
        "كل عملية تاخذ وقت صغير اسمه quantum، وبعده تنقطع وترجع لآخر الطابور."
      ],
      [
        "n processes, quantum q → each gets <b>1/n</b> of CPU time in chunks of at most q. <b>No process waits more than (n−1)q</b>. Timer interrupts every quantum.",
        "لو فيه n عملية، كل وحدة تاخذ 1/n من الوقت، وما فيه عملية تنتظر أكثر من (n−1)q."
      ],
      [
        "<b>q large → FIFO (FCFS)</b>. q small → RR, but q must be large relative to <b>context switch</b> time, otherwise overhead too high (context switch &lt; 10 µs).",
        "لو الـ quantum كبير يصير مثل FCFS. ولو صغير لازم يكون أكبر بوضوح من وقت التبديل، وإلا الـ overhead يكبر."
      ],
      [
        "Example q=4, P1=24, P2=3, P3=3: P1 0–4, P2 4–7, P3 7–10, P1 10–30. Typically <b>higher average turnaround than SJF</b>, but <b>better response</b>.",
        "مثال q=4. الـ RR عادة وقت إنجازه أعلى من SJF، بس استجابته أحسن."
      ],
      [
        "Rule of thumb: <b>80% of CPU bursts should be shorter than q</b>. <b>TAT − BT = WT</b>.",
        "القاعدة: 80% من الـ bursts لازم تكون أقصر من q."
      ]
    ],
    "trap": [
      "q very large → RR becomes <b>FCFS</b>.",
      "إذا الـ quantum كبير جداً الـ RR يصير FCFS."
    ],
    "idx": 37
  },
  {
    "id": "sprio",
    "ch": 5,
    "t": "Priority Scheduling",
    "ar": "الجدولة بالأولوية",
    "pts": [
      [
        "A priority number (integer) per process; CPU allocated to <b>highest priority</b> (<b>smallest integer ≡ highest priority</b>). Can be preemptive or nonpreemptive.",
        "كل عملية لها رقم أولوية، والأصغر رقماً هو الأعلى أولوية. وممكن تكون preemptive أو لا."
      ],
      [
        "<b>SJF is priority scheduling</b> where priority is the <b>inverse of predicted next CPU burst</b>.",
        "SJF نوع من الأولوية، والأولوية فيه عكس طول الـ burst."
      ],
      [
        "Problem: <b>Starvation</b> – low priority processes may never execute. Solution: <b>Aging</b> – increase priority as time progresses.",
        "المشكلة: العمليات الضعيفة ممكن ما تشتغل أبداً (starvation)، والحل aging: نرفع أولويتها مع الوقت."
      ],
      [
        "Example (all at 0): P1(10,3), P2(1,1), P3(2,4), P4(1,5), P5(5,2) → P2, P5, P1, P3, P4 → average WT = <b>8.2</b>.",
        "مثال السلايد: الترتيب P2 ثم P5 ثم P1 ثم P3 ثم P4، والمتوسط 8.2."
      ],
      [
        "<b>Priority with Round-Robin</b>: run highest priority; processes with the <b>same priority run round-robin</b>.",
        "الأولوية مع RR: الأعلى أولوية يشتغل، واللي لهم نفس الأولوية يتناوبون بالـ RR."
      ]
    ],
    "trap": [
      "Smallest number = <b>highest</b> priority. Starvation → <b>Aging</b>.",
      "الرقم الأصغر هو الأعلى أولوية. والـ starvation علاجه aging."
    ],
    "idx": 38
  },
  {
    "id": "smlq",
    "ch": 5,
    "t": "Multilevel Queue & Feedback Queue",
    "ar": "الطوابير متعددة المستويات",
    "pts": [
      [
        "<b>Multilevel queue</b>: ready queue consists of multiple queues. Parameters: number of queues · algorithm for each queue · method to determine which queue a process enters · scheduling among the queues.",
        "الطابور متعدد المستويات: الـ ready queue مقسوم لكذا طابور، كل واحد بخوارزميته."
      ],
      [
        "With priority: separate queue for each priority; schedule the process in the <b>highest-priority queue</b>. Prioritization can be based on <b>process type</b> (real-time, system, interactive, batch).",
        "مع الأولوية: طابور لكل أولوية، ونشغّل من الطابور الأعلى، والتقسيم ممكن حسب نوع العملية."
      ],
      [
        "<b>Multilevel feedback queue</b>: a process <b>can move between queues</b>. Adds methods to <b>upgrade</b> and <b>demote</b> a process. <b>Aging can be implemented</b> using MLFQ.",
        "الـ feedback queue: العملية تقدر تنتقل بين الطوابير، فيه ترقية وتنزيل، ونقدر نطبق الـ aging فيه."
      ],
      [
        "Example: <b>Q0 – RR q=8 ms</b>, <b>Q1 – RR q=16 ms</b>, <b>Q2 – FCFS</b>. New process enters Q0; not finished in 8 → moved to Q1; gets 16 more; still not done → preempted and moved to Q2.",
        "المثال: Q0 بـ RR وq=8، وQ1 بـ RR وq=16، وQ2 بـ FCFS. العملية تبدأ في Q0، ولو ما خلصت في 8 تنزل Q1، ولو ما خلصت في 16 تنزل Q2."
      ]
    ],
    "trap": [
      "Multilevel queue: process <b>fixed</b> in its queue. <b>Feedback</b>: it <b>can move</b>.",
      "في الطابور العادي العملية ثابتة في طابورها، وفي الـ feedback تقدر تتنقل."
    ],
    "idx": 39
  },
  {
    "id": "sthread",
    "ch": 5,
    "t": "Thread & Multiprocessor Scheduling",
    "ar": "جدولة الخيوط والمعالجات المتعددة",
    "pts": [
      [
        "When threads are supported, <b>threads are scheduled, not processes</b>.",
        "إذا النظام يدعم الخيوط، الجدولة تكون للخيوط مو للعمليات."
      ],
      [
        "Many-to-one and many-to-many: thread library schedules user-level threads onto <b>LWP</b> → <b>process-contention scope (PCS)</b>, competition <b>within the process</b>; typically via priority set by programmer.",
        "في كثير لواحد وكثير لكثير، المكتبة تجدول خيوط المستخدم على LWP، واسمه PCS لأن المنافسة داخل العملية."
      ],
      [
        "Kernel thread scheduled onto an available CPU = <b>system-contention scope (SCS)</b> – competition among <b>all threads in system</b>.",
        "خيط الكيرنل لما ينجدول على CPU اسمه SCS، والمنافسة بين كل خيوط النظام."
      ],
      [
        "Multiple-processor scheduling is more complex. Architectures: <b>Multicore CPUs</b>, <b>Multithreaded cores</b>, <b>NUMA systems</b>, <b>Heterogeneous multiprocessing</b>.",
        "الجدولة مع أكثر من معالج أعقد. الأنواع: متعدد الأنوية، أنوية متعددة الخيوط، NUMA، وغير المتجانس."
      ]
    ],
    "trap": [
      "PCS = within <b>process</b>; SCS = whole <b>system</b>.",
      "PCS المنافسة داخل العملية، وSCS المنافسة على مستوى النظام كله."
    ],
    "idx": 40
  }
];

export const Q = [
  [
    1,
    "os",
    "An operating system is best described as:",
    [
      "A program that acts as an intermediary between the user and the computer hardware",
      "A program that only compiles user code",
      "A hardware component that manages memory",
      "An application program like a web browser"
    ],
    "نظام التشغيل برنامج وسيط بين المستخدم والهاردوير: يشغّل برامجه ويخلي الجهاز سهل وكفء.",
    "An OS is a program that acts as an intermediary between the user and the computer hardware.",
    0,
    0
  ],
  [
    1,
    "os",
    "Which is NOT one of the operating system goals?",
    [
      "Maximize the number of system calls",
      "Execute user programs and make solving problems easier",
      "Make the computer system convenient to use",
      "Use the computer hardware in an efficient manner"
    ],
    "أهداف النظام ثلاثة: تشغيل برامج المستخدم، جعل الجهاز سهل الاستخدام (convenient)، واستخدام الهاردوير بكفاءة. زيادة عدد الـ system calls مو هدف.",
    "OS goals: execute user programs, make the system convenient, use hardware efficiently. Maximizing system calls is not a goal.",
    0,
    0
  ],
  [
    1,
    "os",
    "The four components of a computer system are:",
    [
      "Hardware, OS, application programs, users",
      "CPU, memory, I/O, bus",
      "Kernel, shell, drivers, users",
      "Hardware, firmware, middleware, users"
    ],
    "مكونات الجهاز الأربعة بالترتيب: الهاردوير، نظام التشغيل، برامج التطبيقات، المستخدمين.",
    "The four components are hardware, OS, application programs, and users.",
    0,
    0
  ],
  [
    1,
    "view",
    "From the user view, a shared computer such as a mainframe must:",
    [
      "Maximize resource utilization",
      "Ignore resource utilization",
      "Optimize battery life",
      "Run without any user intervention"
    ],
    "الجهاز المشترك (mainframe) لازم يرضي كل المستخدمين، فهدفه أقصى استغلال للموارد.",
    "A shared computer (mainframe) must keep all users happy, so it maximizes resource utilization.",
    0,
    0
  ],
  [
    1,
    "view",
    "Mobile devices are optimized for:",
    [
      "Usability and battery life",
      "Maximum resource utilization",
      "Batch processing",
      "Running without user interface"
    ],
    "الجوال موارده محدودة (resource poor)، فيركّز على سهولة الاستخدام وعمر البطارية.",
    "Mobile devices are resource poor, optimized for usability and battery life.",
    0,
    0
  ],
  [
    1,
    "view",
    "Embedded computers in devices and automobiles:",
    [
      "Run primarily without user intervention",
      "Need a rich GUI",
      "Are shared by many users",
      "Always use a CLI"
    ],
    "الأجهزة المدمجة (embedded) واجهتها قليلة أو معدومة وتشتغل غالباً بدون تدخل المستخدم.",
    "Embedded computers have little or no user interface and run mostly without user intervention.",
    0,
    0
  ],
  [
    1,
    "view",
    "\"Decides between conflicting requests for efficient and fair resource use\" describes the OS as a:",
    [
      "Resource allocator",
      "Control program",
      "Middleware",
      "System daemon"
    ],
    "من نظرة النظام: هو موزّع موارد (resource allocator) يقرر بين الطلبات المتعارضة بعدل وكفاءة.",
    "From the system view, the OS is a resource allocator deciding between conflicting requests.",
    0,
    0
  ],
  [
    1,
    "view",
    "The OS as a control program:",
    [
      "Controls execution of programs to prevent errors and improper use",
      "Allocates CPU time fairly",
      "Provides a GUI",
      "Loads the kernel at boot"
    ],
    "كبرنامج تحكّم (control program): يتحكم بتنفيذ البرامج عشان يمنع الأخطاء والاستخدام الخاطئ للجهاز.",
    "As a control program, the OS controls program execution to prevent errors and improper use.",
    0,
    0
  ],
  [
    1,
    "def",
    "\"The one program running at all times on the computer\" is the:",
    [
      "Kernel",
      "Shell",
      "Bootstrap program",
      "Middleware"
    ],
    "«البرنامج الوحيد اللي يشتغل طول الوقت» هو تعريف الـ kernel.",
    "\"The one program running at all times\" is the kernel.",
    0,
    0
  ],
  [
    1,
    "def",
    "A program that ships with the OS but is NOT part of the kernel is a:",
    [
      "System program",
      "Application program",
      "Device controller",
      "Interrupt vector"
    ],
    "البرنامج اللي يجي مع النظام بس مو جزء من الكيرنل اسمه system program.",
    "A program shipped with the OS but not part of the kernel is a system program.",
    0,
    0
  ],
  [
    1,
    "def",
    "Middleware is:",
    [
      "A set of software frameworks that provide additional services to application developers",
      "The part of the kernel that handles interrupts",
      "A hardware layer between CPU and memory",
      "A type of device driver"
    ],
    "الـ middleware مجموعة أطر برمجية تقدم خدمات إضافية لمطوري التطبيقات (قواعد بيانات، وسائط، رسوميات).",
    "Middleware is a set of software frameworks giving extra services (databases, multimedia, graphics) to app developers.",
    0,
    0
  ],
  [
    1,
    "ctrl",
    "Each device controller has:",
    [
      "A local buffer storage and a set of special-purpose registers",
      "Its own operating system",
      "Direct access to the kernel code",
      "An interrupt vector table"
    ],
    "كل device controller عنده ذاكرة مؤقتة محلية (local buffer) ومجموعة registers خاصة.",
    "Each device controller has a local buffer and special-purpose registers.",
    0,
    0
  ],
  [
    1,
    "ctrl",
    "The device driver is:",
    [
      "Software in the OS that understands the controller and provides a uniform interface",
      "A hardware component on the device",
      "The local buffer of the controller",
      "A user application"
    ],
    "الـ device driver برنامج داخل النظام يفهم الـ controller ويقدم واجهة موحدة لباقي النظام. الـ controller نفسه هاردوير.",
    "The device driver is OS software that understands the controller and gives a uniform interface; the controller is hardware.",
    0,
    0
  ],
  [
    1,
    "ctrl",
    "I/O operations occur between:",
    [
      "The device and the local buffer of the controller",
      "The CPU and the device directly",
      "Main memory and the disk only",
      "The kernel and the shell"
    ],
    "عمليات الإدخال والإخراج تصير بين الجهاز والـ local buffer حق الـ controller.",
    "I/O happens between the device and the controller's local buffer.",
    0,
    0
  ],
  [
    1,
    "ctrl",
    "The CPU moves data:",
    [
      "From/to main memory to/from local buffers",
      "From the device directly to registers",
      "Only during DMA",
      "From the bootstrap to ROM"
    ],
    "الـ CPU ينقل البيانات بين الذاكرة الرئيسية والـ local buffers.",
    "The CPU moves data between main memory and the local buffers.",
    0,
    0
  ],
  [
    1,
    "ctrl",
    "A device controller informs the CPU that it has finished its operation by:",
    [
      "Causing an interrupt",
      "Issuing a system call",
      "Setting the mode bit to 1",
      "Writing to the stack"
    ],
    "الـ controller يبلغ الـ CPU إنه خلص عن طريق interrupt.",
    "The controller signals completion by causing an interrupt.",
    0,
    0
  ],
  [
    1,
    "intr",
    "The interrupt vector is:",
    [
      "A table in memory containing the addresses of all interrupt service routines",
      "A register that holds the mode bit",
      "The program that handles system calls",
      "A queue of waiting processes"
    ],
    "الـ interrupt vector جدول في الذاكرة فيه عناوين كل إجراءات خدمة المقاطعات (ISRs).",
    "The interrupt vector is a memory table of the addresses of all interrupt service routines.",
    1,
    0
  ],
  [
    1,
    "intr",
    "The interrupt vector is indexed by:",
    [
      "A unique number given with the interrupt request",
      "The process ID",
      "The device's memory address",
      "The time of the interrupt"
    ],
    "الجدول مفهرس برقم فريد يجي مع طلب المقاطعة، فيعرف أي ISR يشغّل.",
    "It is indexed by a unique number delivered with the interrupt request.",
    1,
    0
  ],
  [
    1,
    "intr",
    "The interrupt architecture must save:",
    [
      "The address of the interrupted instruction",
      "The whole disk contents",
      "The interrupt vector",
      "The user's password"
    ],
    "لازم يحفظ عنوان التعليمة اللي انقطعت عشان يرجع يكمل منها بعد المقاطعة.",
    "The address of the interrupted instruction must be saved so execution can resume.",
    1,
    0
  ],
  [
    1,
    "intr",
    "The OS preserves the state of the CPU by storing:",
    [
      "The registers and the program counter",
      "Only the mode bit",
      "The interrupt vector",
      "The cache contents"
    ],
    "النظام يحفظ حالة المعالج بتخزين الـ registers والـ program counter.",
    "The OS saves CPU state by storing the registers and program counter.",
    1,
    0
  ],
  [
    1,
    "intr",
    "A trap or exception is:",
    [
      "A software-generated interrupt caused by an error or a user request",
      "A hardware interrupt from the disk",
      "A type of device controller",
      "A timer that prevents infinite loops"
    ],
    "الـ trap أو exception مقاطعة برمجية سببها خطأ (مثل القسمة على صفر) أو طلب من المستخدم (system call).",
    "A trap/exception is a software interrupt caused by an error or a user request (system call).",
    1,
    0
  ],
  [
    1,
    "intr",
    "Hardware usually triggers an interrupt by sending a signal to the CPU via:",
    [
      "The system bus",
      "A system call",
      "The stack",
      "The shell"
    ],
    "الهاردوير عادة يرسل إشارة المقاطعة للمعالج عبر الـ system bus.",
    "Hardware usually signals an interrupt to the CPU via the system bus.",
    1,
    0
  ],
  [
    1,
    "intr",
    "In the interrupt-driven I/O cycle, the CPU checks for interrupts:",
    [
      "Between instructions",
      "Only at boot time",
      "Only when the timer reaches zero",
      "After every system call returns"
    ],
    "المعالج يتفقد المقاطعات بين التعليمات، بعد ما يخلص كل تعليمة.",
    "The CPU checks for interrupts between instructions.",
    0,
    0
  ],
  [
    1,
    "stor",
    "The only large storage media that the CPU can access directly is:",
    [
      "Main memory",
      "Hard disk drive",
      "NVM device",
      "Magnetic tape"
    ],
    "الذاكرة الرئيسية هي الوسيط الكبير الوحيد اللي المعالج يوصل له مباشرة.",
    "Main memory is the only large storage the CPU can access directly.",
    0,
    0
  ],
  [
    1,
    "stor",
    "Main memory is typically:",
    [
      "Volatile, random access, DRAM",
      "Nonvolatile and sequential",
      "Slower than HDD",
      "Stored in ROM"
    ],
    "الذاكرة الرئيسية: وصول عشوائي (random access)، متطايرة (volatile)، ونوعها DRAM.",
    "Main memory is random access, volatile, typically DRAM.",
    0,
    0
  ],
  [
    1,
    "stor",
    "Secondary storage provides:",
    [
      "Large nonvolatile storage, slower than main memory",
      "Small volatile storage, faster than registers",
      "Direct CPU access",
      "The interrupt vector"
    ],
    "التخزين الثانوي كبير وغير متطاير (nonvolatile) بس أبطأ من الذاكرة الرئيسية.",
    "Secondary storage is large, nonvolatile, and slower than main memory.",
    0,
    0
  ],
  [
    1,
    "stor",
    "An HDD disk surface is logically divided into:",
    [
      "Tracks, which are subdivided into sectors",
      "Sectors, which are subdivided into tracks",
      "Pages and frames",
      "Blocks and registers"
    ],
    "سطح القرص الصلب مقسوم منطقياً لمسارات (tracks)، وكل مسار مقسوم لقطاعات (sectors).",
    "An HDD surface is divided into tracks, subdivided into sectors.",
    0,
    0
  ],
  [
    1,
    "stor",
    "Compared to hard disks, NVM devices are:",
    [
      "Faster and nonvolatile",
      "Slower and volatile",
      "Faster but volatile",
      "The same speed"
    ],
    "أجهزة NVM (مثل SSD) أسرع من الأقراص الصلبة وغير متطايرة.",
    "NVM devices are faster than HDDs and nonvolatile.",
    0,
    0
  ],
  [
    1,
    "stor",
    "A computer with 64-bit registers typically has words of size:",
    [
      "8 bytes",
      "64 bytes",
      "4 bytes",
      "16 bytes"
    ],
    "الكلمة بحجم الـ register: 64 بت ÷ 8 = 8 بايت.",
    "Word size matches the registers: 64 bits ÷ 8 = 8 bytes.",
    0,
    0
  ],
  [
    1,
    "stor",
    "A gigabyte (GB) is:",
    [
      "1024³ bytes",
      "1000 bytes",
      "1024² bytes",
      "1024⁴ bytes"
    ],
    "KB = 1024، MB = 1024²، GB = 1024³ بايت.",
    "KB = 1024, MB = 1024², GB = 1024³ bytes.",
    0,
    0
  ],
  [
    1,
    "stor",
    "Networking measurements are given in:",
    [
      "Bits",
      "Bytes",
      "Words",
      "Kilobytes only"
    ],
    "الشبكات تنقل بت بعد بت، فقياساتها بالـ bits.",
    "Networking measures are given in bits since data moves one bit at a time.",
    0,
    0
  ],
  [
    1,
    "cache",
    "In the storage hierarchy, as a general rule:",
    [
      "Smaller and faster memory is closer to the CPU",
      "Larger and faster memory is closer to the CPU",
      "Slower memory is closer to the CPU",
      "All levels have the same cost"
    ],
    "في هرم التخزين: الأصغر والأسرع أقرب للمعالج، والأكبر والأبطأ أبعد.",
    "In the storage hierarchy, smaller and faster memory is closer to the CPU.",
    0,
    0
  ],
  [
    1,
    "cache",
    "Main memory can be viewed as a cache for:",
    [
      "Secondary storage",
      "Registers",
      "The CPU cache",
      "The interrupt vector"
    ],
    "الذاكرة الرئيسية تعتبر cache للتخزين الثانوي.",
    "Main memory acts as a cache for secondary storage.",
    0,
    0
  ],
  [
    1,
    "cache",
    "Important cache management design problems are:",
    [
      "Cache size and replacement policy",
      "Mode bit and timer",
      "Tracks and sectors",
      "Shell and GUI"
    ],
    "أهم مشاكل تصميم الكاش: حجمه، وسياسة الاستبدال (أي عنصر نطلّعه).",
    "Key cache design problems: cache size and replacement policy.",
    0,
    0
  ],
  [
    1,
    "dma",
    "DMA is used mainly to solve:",
    [
      "High overhead of interrupt-driven I/O for bulk data movement",
      "Infinite loops in user programs",
      "Lack of a user interface",
      "Parameter passing to system calls"
    ],
    "DMA يحل مشكلة العبء الكبير لما ننقل بيانات كثيرة بمقاطعة لكل بايت.",
    "DMA solves the high overhead of interrupt-driven I/O for bulk data.",
    0,
    0
  ],
  [
    1,
    "dma",
    "With DMA, how many interrupts are generated?",
    [
      "One per block",
      "One per byte",
      "One per bit",
      "None at all"
    ],
    "مع DMA تطلع مقاطعة وحدة لكل block بدل مقاطعة لكل بايت.",
    "With DMA, one interrupt is generated per block, not per byte.",
    0,
    0
  ],
  [
    1,
    "dma",
    "While the device controller performs a DMA transfer, the CPU:",
    [
      "Is available to accomplish other work",
      "Must wait for every byte",
      "Switches to user mode permanently",
      "Reloads the kernel"
    ],
    "وقت نقل الـ DMA المعالج فاضي يسوي شغل ثاني، لأن الـ controller هو اللي ينقل.",
    "During DMA the CPU is free for other work since the controller moves the data.",
    0,
    0
  ],
  [
    1,
    "multi",
    "In multiprogramming, when a job has to wait (e.g., for I/O):",
    [
      "The OS switches to another job",
      "The CPU stays idle",
      "The system reboots",
      "The job is deleted"
    ],
    "في الـ multiprogramming لما شغلة تنتظر (مثلاً I/O) النظام يحوّل لشغلة ثانية، فالمعالج دايم مشغول.",
    "In multiprogramming, when a job waits the OS switches to another job, keeping the CPU busy.",
    0,
    0
  ],
  [
    1,
    "multi",
    "In timesharing (multitasking), response time should be:",
    [
      "Less than 1 second",
      "Less than 1 minute",
      "Exactly 10 seconds",
      "Not important"
    ],
    "في الـ timesharing لازم وقت الاستجابة أقل من ثانية.",
    "In timesharing, response time should be under 1 second.",
    0,
    0
  ],
  [
    1,
    "multi",
    "If several processes are ready to run at the same time, the OS needs:",
    [
      "CPU scheduling",
      "Swapping",
      "Virtual memory",
      "A bootstrap program"
    ],
    "إذا فيه عمليات كثيرة جاهزة بنفس الوقت، النظام يحتاج جدولة المعالج (CPU scheduling).",
    "If several processes are ready at once, the OS needs CPU scheduling.",
    0,
    0
  ],
  [
    1,
    "multi",
    "If processes don't fit in memory, they are moved in and out by:",
    [
      "Swapping",
      "Caching",
      "DMA",
      "Logging"
    ],
    "إذا العمليات ما تكفيها الذاكرة، تنتقل داخل وخارج الذاكرة بالـ swapping.",
    "If processes don't fit in memory, swapping moves them in and out.",
    0,
    0
  ],
  [
    1,
    "multi",
    "Virtual memory allows:",
    [
      "Execution of processes not completely in memory",
      "Faster disk access",
      "Direct hardware access by users",
      "Two CPUs to share a cache"
    ],
    "الذاكرة الافتراضية تسمح بتشغيل عملية مو كلها في الذاكرة.",
    "Virtual memory allows executing processes not completely in memory.",
    0,
    0
  ],
  [
    1,
    "boot",
    "The bootstrap program is typically stored in:",
    [
      "ROM or EPROM (firmware)",
      "Main memory (DRAM)",
      "The hard disk only",
      "The cache"
    ],
    "برنامج الإقلاع (bootstrap) مخزن في ROM أو EPROM، ويسمى firmware.",
    "The bootstrap program is stored in ROM/EPROM (firmware).",
    0,
    0
  ],
  [
    1,
    "boot",
    "The main job of the bootstrap program is to:",
    [
      "Initialize the system and load the kernel",
      "Run user applications",
      "Handle all system calls",
      "Manage the GUI"
    ],
    "وظيفة الـ bootstrap: يجهّز النظام ويحمّل الكيرنل.",
    "The bootstrap initializes the system and loads the kernel.",
    0,
    0
  ],
  [
    1,
    "boot",
    "System daemons are:",
    [
      "Services provided outside the kernel that run the entire time the kernel is running",
      "Hardware interrupts",
      "Part of the interrupt vector",
      "Malicious programs"
    ],
    "الـ daemons خدمات برا الكيرنل تنحمّل وقت الإقلاع وتظل شغالة طول ما الكيرنل شغال.",
    "Daemons are services outside the kernel that run the entire time the kernel runs.",
    0,
    0
  ],
  [
    1,
    "boot",
    "A division by zero causes a:",
    [
      "Software interrupt (trap/exception)",
      "Hardware interrupt",
      "DMA transfer",
      "Context of user mode only"
    ],
    "القسمة على صفر خطأ برمجي يسبب مقاطعة برمجية (trap/exception).",
    "Division by zero causes a software interrupt (trap/exception).",
    0,
    0
  ],
  [
    1,
    "boot",
    "A request for an operating system service is called a:",
    [
      "System call",
      "Hardware interrupt",
      "Daemon",
      "Bootstrap"
    ],
    "طلب خدمة من النظام اسمه system call.",
    "A request for an OS service is a system call.",
    0,
    0
  ],
  [
    1,
    "dual",
    "When kernel code is executing, the mode bit is:",
    [
      "0",
      "1",
      "2",
      "-1"
    ],
    "لما الكيرنل يشتغل الـ mode bit = 0.",
    "Kernel mode: mode bit = 0.",
    1,
    0
  ],
  [
    1,
    "dual",
    "When a user program is running, the mode bit is:",
    [
      "1",
      "0",
      "Undefined",
      "Equal to the timer value"
    ],
    "لما برنامج المستخدم يشتغل الـ mode bit = 1.",
    "User mode: mode bit = 1.",
    1,
    0
  ],
  [
    1,
    "dual",
    "At system boot time, the hardware starts in:",
    [
      "Kernel mode",
      "User mode",
      "Batch mode",
      "Sleep mode"
    ],
    "عند الإقلاع الهاردوير يبدأ في kernel mode.",
    "At boot, hardware starts in kernel mode.",
    1,
    0
  ],
  [
    1,
    "dual",
    "Privileged instructions can be executed:",
    [
      "Only in kernel mode",
      "Only in user mode",
      "In both modes",
      "Only by device controllers"
    ],
    "التعليمات المميزة (privileged) تتنفذ في kernel mode بس.",
    "Privileged instructions execute only in kernel mode.",
    1,
    0
  ],
  [
    1,
    "dual",
    "Which is NOT another name for kernel mode?",
    [
      "Application mode",
      "Supervisor mode",
      "System mode",
      "Privileged mode"
    ],
    "أسماء kernel mode: supervisor وsystem وprivileged. «application mode» مو منها.",
    "Kernel mode is also called supervisor, system, or privileged mode — not application mode.",
    1,
    0
  ],
  [
    1,
    "dual",
    "A system call or interrupt changes the mode to:",
    [
      "Kernel mode",
      "User mode",
      "Batch mode",
      "It doesn't change the mode"
    ],
    "الـ system call أو المقاطعة تحوّل الوضع لـ kernel mode، والرجوع يحوله لـ user mode.",
    "A system call or interrupt switches to kernel mode; returning switches back to user.",
    1,
    0
  ],
  [
    1,
    "dual",
    "The purpose of the timer is to:",
    [
      "Prevent infinite loops or a process hogging resources",
      "Speed up the CPU clock",
      "Count system calls",
      "Measure network speed"
    ],
    "الـ timer يمنع الحلقات اللانهائية أو احتكار عملية للموارد، لأنه يقاطع بعد مدة.",
    "The timer prevents infinite loops or a process hogging resources.",
    0,
    0
  ],
  [
    1,
    "dual",
    "Setting the timer counter is:",
    [
      "A privileged instruction",
      "A user-mode instruction",
      "Done by the device driver only",
      "Done by the application"
    ],
    "ضبط عداد الـ timer تعليمة privileged عشان المستخدم ما يلعب فيه.",
    "Setting the timer is privileged so users can't tamper with it.",
    0,
    0
  ],
  [
    1,
    "intr",
    "An operating system is:",
    [
      "Interrupt driven",
      "Timer driven only",
      "Shell driven",
      "Cache driven"
    ],
    "نظام التشغيل يشتغل بالمقاطعات (interrupt driven).",
    "An operating system is interrupt driven.",
    0,
    0
  ],
  [
    2,
    "svc",
    "Which OS service ensures the efficient operation of the system itself (not mainly helpful to the user)?",
    [
      "Resource allocation",
      "User interface",
      "Program execution",
      "File-system manipulation"
    ],
    "توزيع الموارد (resource allocation) والـ logging والحماية خدمات لكفاءة النظام نفسه، مو مساعدة المستخدم مباشرة.",
    "Resource allocation (with logging and protection) ensures efficient system operation rather than helping the user.",
    0,
    0
  ],
  [
    2,
    "svc",
    "Keeping track of which users use how much and what kinds of resources is:",
    [
      "Logging",
      "Error detection",
      "Communications",
      "Program execution"
    ],
    "تتبع مين يستخدم كم ووش من الموارد اسمه logging (محاسبة وإحصائيات).",
    "Tracking usage per user is logging (accounting).",
    0,
    0
  ],
  [
    2,
    "svc",
    "Communications between processes may be via:",
    [
      "Shared memory or message passing",
      "Only shared memory",
      "Only the interrupt vector",
      "The bootstrap program"
    ],
    "التواصل بين العمليات يكون بالذاكرة المشتركة أو تبادل الرسائل.",
    "Processes communicate via shared memory or message passing.",
    0,
    0
  ],
  [
    2,
    "svc",
    "Security of the system from outsiders requires:",
    [
      "User authentication",
      "A larger cache",
      "DMA",
      "A microkernel"
    ],
    "حماية النظام من الخارج تحتاج مصادقة المستخدم (authentication).",
    "Security from outsiders requires user authentication.",
    0,
    0
  ],
  [
    2,
    "svc",
    "Ensuring that all access to system resources is controlled is called:",
    [
      "Protection",
      "Logging",
      "Caching",
      "Swapping"
    ],
    "التحكم بكل وصول لموارد النظام اسمه Protection، أما Security فهي الحماية من الخارج.",
    "Controlling all access to resources is protection; security defends against outsiders.",
    0,
    0
  ],
  [
    2,
    "svc",
    "For efficiency and protection, users usually:",
    [
      "Cannot control I/O devices directly",
      "Control I/O devices directly",
      "Write their own interrupt vectors",
      "Run in kernel mode"
    ],
    "عشان الكفاءة والحماية المستخدم ما يتحكم بأجهزة I/O مباشرة، النظام يتحكم.",
    "For efficiency and protection, users can't control I/O devices directly.",
    0,
    0
  ],
  [
    2,
    "ui",
    "Which is NOT a type of user interface listed?",
    [
      "Interrupt interface",
      "Command-Line (CLI)",
      "Graphical (GUI)",
      "Batch"
    ],
    "أنواع الواجهات: سطر الأوامر، الرسومية، اللمس، والـ batch. ما فيه «interrupt interface».",
    "Interfaces: CLI, GUI, touch-screen, batch — no \"interrupt interface\".",
    0,
    0
  ],
  [
    2,
    "ui",
    "Multiple flavors of command interpreters are called:",
    [
      "Shells",
      "Kernels",
      "Daemons",
      "Drivers"
    ],
    "أنواع مفسّرات الأوامر المختلفة اسمها shells.",
    "Different command interpreters are called shells.",
    0,
    0
  ],
  [
    2,
    "ui",
    "If the command interpreter implements commands as names of system programs:",
    [
      "Adding new commands doesn't require shell modification",
      "Every new command needs a new kernel",
      "Commands cannot manipulate files",
      "The shell must be rewritten each time"
    ],
    "إذا الأوامر أسماء برامج نظام، تضيف أمر جديد بإضافة ملف بدون تعديل الـ shell.",
    "If commands are system program names, new commands don't require modifying the shell.",
    0,
    0
  ],
  [
    2,
    "ui",
    "Apple Mac OS X uses:",
    [
      "\"Aqua\" GUI with a UNIX kernel underneath",
      "KDE on a Windows kernel",
      "Only a CLI",
      "MS-DOS structure"
    ],
    "ماك يستخدم واجهة Aqua وتحتها كيرنل UNIX.",
    "Mac OS X uses the Aqua GUI over a UNIX kernel.",
    0,
    0
  ],
  [
    2,
    "ui",
    "Optional GUI interfaces for Unix and Linux include:",
    [
      "KDE and GNOME",
      "Aqua and Cocoa",
      "Win32 and POSIX",
      "Mach and Darwin"
    ],
    "واجهات رسومية اختيارية لـ Unix وLinux: KDE وGNOME.",
    "Optional Unix/Linux GUIs include KDE and GNOME.",
    0,
    0
  ],
  [
    2,
    "sc",
    "System calls are generally available as functions written in:",
    [
      "C or C++",
      "Java only",
      "Python only",
      "HTML"
    ],
    "الـ system calls مكتوبة غالباً كدوال بلغة C أو C++، وبعضها بالأسمبلي.",
    "System calls are generally C/C++ functions (some assembly).",
    1,
    0
  ],
  [
    2,
    "sc",
    "The three most common APIs are:",
    [
      "Win32, POSIX, Java API",
      "Win32, Mach, BSD",
      "POSIX, Aqua, KDE",
      "C, C++, assembly"
    ],
    "أشهر ثلاث APIs: Win32 وPOSIX وJava API.",
    "The three common APIs: Win32, POSIX, Java API.",
    1,
    0
  ],
  [
    2,
    "sc",
    "POSIX API is used for:",
    [
      "UNIX, Linux, and Mac OS X",
      "Windows only",
      "Java Virtual Machine",
      "Arduino"
    ],
    "POSIX يستخدم في UNIX وLinux وMac OS X.",
    "POSIX is used on UNIX, Linux, and Mac OS X.",
    1,
    0
  ],
  [
    2,
    "sc",
    "Why use APIs rather than system calls directly?",
    [
      "Portability and simpler calls",
      "APIs run in kernel mode",
      "APIs are faster than hardware",
      "APIs don't need the OS"
    ],
    "نستخدم الـ API بدل الـ system call مباشرة عشان قابلية النقل (portability) وسهولة الاستدعاء.",
    "APIs give portability and simpler calls than raw system calls.",
    1,
    0
  ],
  [
    2,
    "sc",
    "The system-call interface maintains:",
    [
      "A table indexed by the number associated with each system call",
      "A list of user passwords",
      "The interrupt vector",
      "The cache replacement policy"
    ],
    "واجهة الـ system calls عندها جدول مفهرس برقم كل system call.",
    "The system-call interface keeps a table indexed by each system call's number.",
    1,
    0
  ],
  [
    2,
    "sc",
    "Most details of the OS interface are hidden from the programmer by the API and managed by:",
    [
      "Run-time support library",
      "The bootstrap program",
      "The device controller",
      "The timer"
    ],
    "تفاصيل واجهة النظام مخفية بالـ API وتديرها مكتبة run-time support.",
    "OS interface details are hidden by the API and managed by the run-time support library.",
    1,
    0
  ],
  [
    2,
    "param",
    "The simplest method to pass parameters to the OS is:",
    [
      "Registers",
      "Stack",
      "Block in memory",
      "Interrupt vector"
    ],
    "أبسط طريقة لتمرير المعاملات: في الـ registers.",
    "The simplest parameter passing is in registers.",
    0,
    0
  ],
  [
    2,
    "param",
    "Passing a block of parameters in memory and putting its address in a register is the approach taken by:",
    [
      "Linux and Solaris",
      "MS-DOS",
      "Arduino",
      "Windows only"
    ],
    "طريقة الـ block (عنوانه في register) تستخدمها Linux وSolaris.",
    "Passing a block address in a register is used by Linux and Solaris.",
    0,
    0
  ],
  [
    2,
    "param",
    "Which parameter-passing methods do NOT limit the number or length of parameters?",
    [
      "Block and stack",
      "Registers only",
      "Registers and stack",
      "Registers and block"
    ],
    "طريقتي الـ block والـ stack ما تحدّ عدد أو طول المعاملات، عكس الـ registers.",
    "Block and stack methods don't limit the number or length of parameters.",
    0,
    0
  ],
  [
    2,
    "types",
    "\"Locks for managing access to shared data between processes\" belongs to:",
    [
      "Process control",
      "File management",
      "Device management",
      "Information maintenance"
    ],
    "الأقفال لإدارة الوصول للبيانات المشتركة تحت process control.",
    "Locks for shared data belong to process control.",
    1,
    0
  ],
  [
    2,
    "types",
    "\"Get time or date, set time or date\" belongs to:",
    [
      "Information maintenance",
      "Process control",
      "Communications",
      "Protection"
    ],
    "قراءة وضبط الوقت والتاريخ تحت information maintenance.",
    "Get/set time or date is information maintenance.",
    1,
    0
  ],
  [
    2,
    "types",
    "\"Request device, release device\" belongs to:",
    [
      "Device management",
      "File management",
      "Protection",
      "Communications"
    ],
    "طلب الجهاز وتحريره تحت device management.",
    "Request/release device is device management.",
    1,
    0
  ],
  [
    2,
    "types",
    "\"Get and set permissions\" belongs to:",
    [
      "Protection",
      "Information maintenance",
      "Device management",
      "Process control"
    ],
    "قراءة وضبط الصلاحيات تحت protection.",
    "Get/set permissions is protection.",
    1,
    0
  ],
  [
    2,
    "types",
    "\"Create, delete communication connection\" belongs to:",
    [
      "Communications",
      "Device management",
      "Process control",
      "File management"
    ],
    "إنشاء وحذف اتصال تحت communications.",
    "Create/delete connection is communications.",
    1,
    0
  ],
  [
    2,
    "types",
    "\"Read, write, reposition\" and \"get and set file attributes\" belong to:",
    [
      "File management",
      "Process control",
      "Protection",
      "Communications"
    ],
    "القراءة والكتابة وخصائص الملفات تحت file management.",
    "Read/write/reposition and file attributes belong to file management.",
    1,
    0
  ],
  [
    2,
    "types",
    "Arduino is an example of:",
    [
      "Single-tasking with no operating system",
      "Multitasking UNIX variant",
      "Microkernel OS",
      "Hybrid OS"
    ],
    "Arduino نظام مهمة وحدة بدون نظام تشغيل، يحمّل الـ sketch عبر USB.",
    "Arduino is single-tasking with no OS; sketches load via USB.",
    0,
    0
  ],
  [
    2,
    "types",
    "In FreeBSD, the shell creates a new process using:",
    [
      "fork()",
      "exec()",
      "printf()",
      "exit()"
    ],
    "في FreeBSD الـ shell ينشئ عملية جديدة بـ fork().",
    "FreeBSD's shell creates a process with fork().",
    0,
    0
  ],
  [
    2,
    "types",
    "In FreeBSD, after fork(), the shell loads the program into the process using:",
    [
      "exec()",
      "fork()",
      "wait()",
      "kill()"
    ],
    "بعد fork() الـ shell يحمّل البرنامج في العملية بـ exec().",
    "After fork(), exec() loads the program into the process.",
    0,
    0
  ],
  [
    2,
    "types",
    "A process exits with code = 0. This means:",
    [
      "No error",
      "An error occurred",
      "The process was killed",
      "The shell crashed"
    ],
    "رمز الخروج 0 يعني ما فيه خطأ، وأكبر من 0 رمز خطأ.",
    "Exit code 0 means no error; > 0 is an error code.",
    0,
    0
  ],
  [
    2,
    "sc",
    "The C library call printf() invokes which system call?",
    [
      "write()",
      "read()",
      "open()",
      "fork()"
    ],
    "printf() في مكتبة C تستدعي الـ system call write().",
    "printf() invokes the write() system call.",
    0,
    0
  ],
  [
    2,
    "sysprog",
    "Most users' view of the operating system is defined by:",
    [
      "System programs, not actual system calls",
      "The interrupt vector",
      "The bootstrap program",
      "The mode bit"
    ],
    "أغلب المستخدمين يشوفون النظام من خلال برامج النظام، مو الـ system calls.",
    "Most users see the OS through system programs, not system calls.",
    0,
    0
  ],
  [
    2,
    "sysprog",
    "A registry is used to:",
    [
      "Store and retrieve configuration information",
      "Pass parameters to system calls",
      "Hold the interrupt vector",
      "Schedule the CPU"
    ],
    "الـ registry يخزن ويسترجع معلومات الإعدادات (تحت status information).",
    "A registry stores and retrieves configuration information.",
    0,
    0
  ],
  [
    2,
    "sysprog",
    "Background services (daemons) run in:",
    [
      "User context, not kernel context",
      "Kernel context only",
      "The interrupt vector",
      "ROM"
    ],
    "خدمات الخلفية (daemons) تشتغل في سياق المستخدم، مو سياق الكيرنل.",
    "Daemons run in user context, not kernel context.",
    0,
    0
  ],
  [
    2,
    "sysprog",
    "Compilers, assemblers, debuggers, and interpreters belong to which system program category?",
    [
      "Programming-language support",
      "File modification",
      "Status information",
      "Communications"
    ],
    "المترجمات والأسمبلر والمصححات والمفسرات تحت دعم لغات البرمجة.",
    "Compilers, assemblers, debuggers, interpreters are programming-language support.",
    0,
    0
  ],
  [
    2,
    "sysprog",
    "Absolute loaders, relocatable loaders, and linkage editors belong to:",
    [
      "Program loading and execution",
      "File management",
      "Communications",
      "Background services"
    ],
    "الـ loaders والـ linkage editors تحت تحميل وتشغيل البرامج.",
    "Loaders and linkage editors are program loading and execution.",
    0,
    0
  ],
  [
    2,
    "design",
    "\"Easy to design, implement, and maintain, flexible, error-free, efficient\" are:",
    [
      "System goals",
      "User goals",
      "Hardware goals",
      "API goals"
    ],
    "«سهل التصميم والتنفيذ والصيانة، مرن، بدون أخطاء، كفء» أهداف النظام (system goals).",
    "Easy to design/implement/maintain, flexible, error-free, efficient = system goals.",
    0,
    0
  ],
  [
    2,
    "design",
    "\"Convenient to use, easy to learn, reliable, safe, and fast\" are:",
    [
      "User goals",
      "System goals",
      "Kernel goals",
      "Microkernel benefits"
    ],
    "«سهل الاستخدام والتعلم، موثوق، آمن، سريع» أهداف المستخدم (user goals).",
    "Convenient, easy to learn, reliable, safe, fast = user goals.",
    0,
    0
  ],
  [
    2,
    "design",
    "The lowest levels of the kernel are usually written in:",
    [
      "Assembly",
      "C",
      "Python",
      "Java"
    ],
    "أدنى مستويات الكيرنل مكتوبة بالأسمبلي، والجسم الرئيسي بـ C.",
    "The lowest kernel levels are in assembly; the main body in C.",
    0,
    0
  ],
  [
    2,
    "design",
    "Writing an OS in a high-level language makes it:",
    [
      "Easier to port but slower",
      "Harder to port but faster",
      "Faster and easier to port",
      "Impossible to debug"
    ],
    "كتابة النظام بلغة عالية تخليه أسهل في النقل بس أبطأ.",
    "A high-level language makes the OS easier to port but slower.",
    0,
    0
  ],
  [
    2,
    "struct",
    "MS-DOS has a:",
    [
      "Simple structure, not divided into modules",
      "Microkernel structure",
      "Layered structure with N layers",
      "Loadable kernel modules"
    ],
    "MS-DOS بنيته بسيطة، مو مقسّم لوحدات.",
    "MS-DOS has a simple structure, not divided into modules.",
    1,
    0
  ],
  [
    2,
    "struct",
    "In MS-DOS, a malicious program can crash the entire system because:",
    [
      "Application programs can access basic I/O routines directly",
      "It uses a microkernel",
      "It has dual-mode protection",
      "It uses message passing"
    ],
    "في MS-DOS البرامج توصل لإجراءات I/O الأساسية مباشرة، فبرنامج خبيث يطيّح النظام.",
    "In MS-DOS apps access basic I/O routines directly, so a malicious program can crash the system.",
    1,
    0
  ],
  [
    2,
    "struct",
    "Placing all kernel functionality in a single static binary in a single address space is:",
    [
      "Monolithic structure",
      "Layered approach",
      "Microkernel",
      "Modules"
    ],
    "كل وظائف الكيرنل في ملف ثنائي واحد بمساحة عناوين وحدة = بنية monolithic.",
    "All kernel functionality in one static binary/address space is monolithic.",
    1,
    0
  ],
  [
    2,
    "struct",
    "The main advantage of monolithic kernels is:",
    [
      "Performance: little system-call overhead and fast kernel communication",
      "Easy to extend",
      "More secure",
      "Easier to port"
    ],
    "ميزة الـ monolithic الأداء: عبء قليل للـ system calls وتواصل سريع داخل الكيرنل.",
    "Monolithic kernels perform well: little system-call overhead, fast internal communication.",
    1,
    0
  ],
  [
    2,
    "struct",
    "A monolithic system is often called:",
    [
      "Tightly coupled",
      "Loosely coupled",
      "Layered",
      "Hybrid"
    ],
    "الـ monolithic يسمى tightly coupled لأن كل الأجزاء مترابطة.",
    "A monolithic system is called tightly coupled.",
    1,
    0
  ],
  [
    2,
    "struct",
    "In the layered approach, layer 0 is:",
    [
      "The hardware",
      "The user interface",
      "The kernel",
      "The shell"
    ],
    "في الطبقات: الطبقة 0 هي الهاردوير.",
    "In the layered approach, layer 0 is the hardware.",
    1,
    0
  ],
  [
    2,
    "struct",
    "In the layered approach, the highest layer (layer N) is:",
    [
      "The user interface",
      "The hardware",
      "The device driver",
      "Memory"
    ],
    "أعلى طبقة (N) هي واجهة المستخدم.",
    "Layer N is the user interface.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Each layer uses functions of only lower-level layers. The main benefit is:",
    [
      "Simplifies debugging and system verification",
      "Faster performance",
      "Smaller kernel",
      "No need for system calls"
    ],
    "كل طبقة تستخدم اللي تحتها بس، فيسهل اكتشاف الأخطاء والتحقق.",
    "Using only lower layers simplifies debugging and verification.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Mach is an example of:",
    [
      "Microkernel",
      "Monolithic kernel",
      "Simple structure",
      "Layered approach"
    ],
    "Mach مثال على الـ microkernel.",
    "Mach is a microkernel.",
    0,
    0
  ],
  [
    2,
    "struct",
    "In a microkernel, communication between user modules takes place using:",
    [
      "Message passing",
      "Shared registers",
      "Interrupt vector",
      "DMA"
    ],
    "في الـ microkernel التواصل بين وحدات المستخدم بتبادل الرسائل.",
    "Microkernel modules communicate via message passing.",
    0,
    0
  ],
  [
    2,
    "struct",
    "The main disadvantage of microkernels is:",
    [
      "Performance overhead of user space to kernel space communication",
      "Hard to extend",
      "Less secure",
      "Hard to port"
    ],
    "عيب الـ microkernel: عبء أداء من التواصل بين مساحة المستخدم والكيرنل.",
    "The microkernel drawback is user–kernel communication overhead.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Which is a benefit of microkernels?",
    [
      "More reliable because less code runs in kernel mode",
      "No message passing needed",
      "Fastest system-call performance",
      "Single address space"
    ],
    "ميزته: أكثر موثوقية لأن الكود اللي يشتغل في kernel mode أقل.",
    "It's more reliable because less code runs in kernel mode.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Mac OS X kernel (Darwin) is partly based on:",
    [
      "Mach",
      "MS-DOS",
      "Solaris",
      "Win32"
    ],
    "كيرنل ماك (Darwin) مبني جزئياً على Mach.",
    "Darwin is partly based on Mach.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Loadable kernel modules (LKMs):",
    [
      "Use an object-oriented approach; each component is loadable as needed",
      "Put everything in one binary",
      "Remove the kernel entirely",
      "Are only used by MS-DOS"
    ],
    "الوحدات القابلة للتحميل (LKMs) أسلوب كائني: كل مكون ينحمّل وقت الحاجة.",
    "LKMs use an object-oriented approach, each loadable as needed.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Compared to layers, modules are:",
    [
      "Similar but more flexible",
      "Less flexible",
      "Identical",
      "Slower and not used today"
    ],
    "الوحدات تشبه الطبقات بس أكثر مرونة لأن أي وحدة تكلم أي وحدة.",
    "Modules are like layers but more flexible.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Windows is described as:",
    [
      "Mostly monolithic, plus microkernel for subsystem personalities",
      "Pure microkernel",
      "Simple structure like MS-DOS",
      "Purely layered"
    ],
    "Windows غالباً monolithic مع microkernel لشخصيات الأنظمة الفرعية.",
    "Windows is mostly monolithic plus a microkernel for subsystem personalities.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Linux and Solaris kernels are:",
    [
      "Monolithic plus modular for dynamic loading",
      "Pure microkernels",
      "Simple structure",
      "Pure layered"
    ],
    "Linux وSolaris: monolithic مع وحدات للتحميل الديناميكي.",
    "Linux and Solaris are monolithic plus modular.",
    0,
    0
  ],
  [
    2,
    "struct",
    "In Mac OS X, dynamically loadable modules are called:",
    [
      "Kernel extensions",
      "Daemons",
      "Personalities",
      "Shells"
    ],
    "في ماك الوحدات القابلة للتحميل اسمها kernel extensions.",
    "Mac OS X loadable modules are kernel extensions.",
    0,
    0
  ],
  [
    2,
    "struct",
    "Most modern operating systems are:",
    [
      "Hybrid – not one pure model",
      "Pure monolithic",
      "Pure microkernel",
      "Simple structure"
    ],
    "أغلب الأنظمة الحديثة هجينة (hybrid)، تجمع أكثر من نموذج.",
    "Most modern OSes are hybrid.",
    0,
    0
  ],
  [
    3,
    "pconcept",
    "A process is best defined as:",
    [
      "A program in execution",
      "A program stored on disk",
      "A file containing instructions",
      "A set of system calls"
    ],
    "العملية (process) برنامج قاعد يتنفذ.",
    "A process is a program in execution.",
    0,
    0
  ],
  [
    3,
    "pconcept",
    "Which statement is correct?",
    [
      "A program is passive; a process is active",
      "A program is active; a process is passive",
      "Both are passive entities",
      "Both are active entities"
    ],
    "البرنامج كيان ساكن (passive) على القرص، والعملية كيان نشط (active) لها program counter.",
    "A program is passive; a process is active.",
    0,
    0
  ],
  [
    3,
    "pconcept",
    "A program becomes a process when:",
    [
      "Its executable file is loaded into memory",
      "It is saved to disk",
      "It is compiled",
      "It is written in C"
    ],
    "البرنامج يصير عملية لما ملفه التنفيذي ينحمّل في الذاكرة.",
    "A program becomes a process when loaded into memory.",
    0,
    0
  ],
  [
    3,
    "pconcept",
    "Several users running the same mail program results in:",
    [
      "Several separate processes (separate execution sequences)",
      "One shared process",
      "One process with one thread",
      "No processes until one user exits"
    ],
    "برنامج واحد يقدر يصير كذا عملية مستقلة، كل وحدة لها تسلسل تنفيذ.",
    "One program can be several separate processes.",
    0,
    0
  ],
  [
    3,
    "pconcept",
    "Process execution must progress in:",
    [
      "Sequential fashion – no parallel execution of instructions of a single process",
      "Parallel fashion always",
      "Random order",
      "Reverse order"
    ],
    "تعليمات العملية الوحدة تتنفذ بالتسلسل، بدون توازي داخلها.",
    "A single process's instructions execute sequentially.",
    0,
    0
  ],
  [
    3,
    "pconcept",
    "The textbook uses which terms almost interchangeably?",
    [
      "Job and process",
      "Program and file",
      "Thread and kernel",
      "Stack and heap"
    ],
    "الكتاب يستخدم job وprocess تقريباً بنفس المعنى.",
    "The textbook uses job and process almost interchangeably.",
    0,
    0
  ],
  [
    3,
    "pmem",
    "Global variables of a process are stored in the:",
    [
      "Data section",
      "Stack",
      "Heap",
      "Text section"
    ],
    "المتغيرات العامة في الـ data section.",
    "Global variables are in the data section.",
    0,
    0
  ],
  [
    3,
    "pmem",
    "Memory dynamically allocated during run time is in the:",
    [
      "Heap",
      "Stack",
      "Data section",
      "Text section"
    ],
    "الذاكرة اللي تنحجز وقت التشغيل في الـ heap.",
    "Dynamically allocated memory is in the heap.",
    0,
    0
  ],
  [
    3,
    "pmem",
    "Function parameters, return addresses, and local variables are stored in the:",
    [
      "Stack",
      "Heap",
      "Data section",
      "Text section"
    ],
    "معاملات الدوال وعناوين الرجوع والمتغيرات المحلية في الـ stack.",
    "Function parameters, return addresses and locals are on the stack.",
    0,
    0
  ],
  [
    3,
    "pmem",
    "The executable code of a process is in the:",
    [
      "Text section",
      "Data section",
      "Heap",
      "Stack"
    ],
    "الكود التنفيذي في الـ text section.",
    "Executable code is in the text section.",
    0,
    0
  ],
  [
    3,
    "pmem",
    "Which sections have fixed size during run time?",
    [
      "Text and data",
      "Stack and heap",
      "Heap and data",
      "Stack and text"
    ],
    "الـ text والـ data حجمها ثابت، والـ stack والـ heap يتغيرون.",
    "Text and data are fixed size; stack and heap change.",
    0,
    0
  ],
  [
    3,
    "pmem",
    "Each time a function is called, what is pushed onto the stack?",
    [
      "An activation record",
      "The whole heap",
      "The PCB",
      "The interrupt vector"
    ],
    "مع كل استدعاء دالة ينضاف activation record للـ stack.",
    "Each function call pushes an activation record.",
    0,
    0
  ],
  [
    3,
    "pmem",
    "The stack and heap grow toward each other. The OS must ensure that they:",
    [
      "Do not overlap",
      "Are always the same size",
      "Are stored on disk",
      "Are shared between processes"
    ],
    "الـ stack والـ heap يكبرون باتجاه بعض، والنظام يتأكد إنهم ما يتداخلون.",
    "The OS ensures the growing stack and heap don't overlap.",
    0,
    0
  ],
  [
    3,
    "pstate",
    "A process waiting to be assigned to a processor is in the ___ state.",
    [
      "Ready",
      "Waiting",
      "Running",
      "New"
    ],
    "Ready = تنتظر المعالج. Waiting = تنتظر حدث مثل I/O.",
    "Ready = waiting for the CPU; Waiting = waiting for an event.",
    1,
    0
  ],
  [
    3,
    "pstate",
    "A process waiting for some event (such as I/O completion) to occur is in the ___ state.",
    [
      "Waiting",
      "Ready",
      "Running",
      "Terminated"
    ],
    "Waiting = تنتظر حدث مثل انتهاء I/O.",
    "Waiting = waiting for an event such as I/O completion.",
    1,
    0
  ],
  [
    3,
    "pstate",
    "How many processes can be in the running state on one processor core at any instant?",
    [
      "Only one",
      "Unlimited",
      "Two",
      "Equal to the number of threads"
    ],
    "على كل نواة عملية وحدة بس في حالة Running بأي لحظة.",
    "Only one process runs per core at any instant.",
    1,
    0
  ],
  [
    3,
    "pstate",
    "When an I/O operation completes, a waiting process moves to the:",
    [
      "Ready state",
      "Running state",
      "New state",
      "Terminated state"
    ],
    "بعد انتهاء الـ I/O العملية تنتقل من Waiting إلى Ready، مو Running مباشرة.",
    "After I/O completes, Waiting → Ready (not Running).",
    1,
    0
  ],
  [
    3,
    "pstate",
    "A running process that receives an interrupt moves to:",
    [
      "Ready",
      "Waiting",
      "New",
      "Terminated"
    ],
    "المقاطعة ترجّع العملية من Running إلى Ready.",
    "An interrupt moves a running process to Ready.",
    1,
    0
  ],
  [
    3,
    "pstate",
    "Ready → Running is caused by:",
    [
      "Scheduler dispatch",
      "Interrupt",
      "I/O completion",
      "Exit"
    ],
    "الانتقال من Ready إلى Running بسبب scheduler dispatch.",
    "Ready → Running happens by scheduler dispatch.",
    1,
    0
  ],
  [
    3,
    "pstate",
    "The PCB is also called:",
    [
      "Task control block",
      "Thread control register",
      "Program counter block",
      "Process cache buffer"
    ],
    "الـ PCB اسمه بعد task control block.",
    "The PCB is also called the task control block.",
    0,
    0
  ],
  [
    3,
    "pstate",
    "Which of the following is NOT stored in the PCB?",
    [
      "The source code of the program",
      "Process state",
      "Program counter",
      "List of open files"
    ],
    "الـ PCB فيه الحالة والـ PC والـ registers ومعلومات الجدولة والذاكرة والمحاسبة والـ I/O، بس مو كود البرنامج.",
    "The PCB holds state, PC, registers, scheduling, memory, accounting, I/O info — not source code.",
    0,
    0
  ],
  [
    3,
    "pstate",
    "\"CPU used, clock time elapsed since start, time limits\" in the PCB is:",
    [
      "Accounting information",
      "I/O status information",
      "CPU-scheduling information",
      "Memory-management information"
    ],
    "وقت المعالج المستخدم والوقت المنقضي والحدود = accounting information.",
    "CPU used, elapsed time, limits = accounting information.",
    0,
    0
  ],
  [
    3,
    "pstate",
    "Priorities and scheduling queue pointers in the PCB belong to:",
    [
      "CPU-scheduling information",
      "Accounting information",
      "Memory-management information",
      "I/O status information"
    ],
    "الأولويات ومؤشرات الطوابير = CPU-scheduling information.",
    "Priorities and queue pointers = CPU-scheduling information.",
    0,
    0
  ],
  [
    3,
    "pstate",
    "For a multithreaded process, the PCB must store:",
    [
      "Multiple program counters",
      "Only one program counter",
      "No program counter",
      "The kernel code"
    ],
    "كل thread له program counter، فالـ PCB لعملية متعددة الـ threads يحفظ أكثر من PC.",
    "A multithreaded process's PCB stores multiple program counters.",
    0,
    0
  ],
  [
    3,
    "psched",
    "The goal of the process scheduler is to:",
    [
      "Maximize CPU use and quickly switch processes onto the CPU core",
      "Minimize the number of processes",
      "Keep the CPU idle",
      "Increase context-switch time"
    ],
    "هدف الـ process scheduler: أقصى استغلال للمعالج وتبديل سريع للعمليات عليه.",
    "The process scheduler maximizes CPU use and switches processes quickly.",
    1,
    0
  ],
  [
    3,
    "psched",
    "The set of all processes residing in main memory, ready and waiting to execute, is the:",
    [
      "Ready queue",
      "Wait queue",
      "Job pool",
      "Device queue"
    ],
    "كل العمليات في الذاكرة الجاهزة تنتظر التنفيذ = ready queue.",
    "Processes in memory ready to execute form the ready queue.",
    1,
    0
  ],
  [
    3,
    "psched",
    "Processes waiting for an event such as I/O are placed in:",
    [
      "A wait queue",
      "The ready queue",
      "The PCB",
      "The heap"
    ],
    "العمليات اللي تنتظر حدث مثل I/O تنحط في wait queue.",
    "Processes waiting for an event go in a wait queue.",
    1,
    0
  ],
  [
    3,
    "psched",
    "Saving the state of the old process and loading the saved state of the new process is called:",
    [
      "Context switch",
      "Dispatch latency",
      "Swapping",
      "Forking"
    ],
    "حفظ حالة العملية القديمة وتحميل حالة الجديدة = context switch.",
    "Saving the old state and loading the new is a context switch.",
    1,
    0
  ],
  [
    3,
    "psched",
    "Context-switch time is:",
    [
      "Pure overhead – the system does no useful work while switching",
      "Useful work time",
      "Always zero",
      "Part of the user program's execution"
    ],
    "وقت الـ context switch عبء خالص، النظام ما يسوي شغل مفيد وقته.",
    "Context-switch time is pure overhead.",
    1,
    0
  ],
  [
    3,
    "psched",
    "The context of a process is represented in the:",
    [
      "PCB",
      "Ready queue",
      "Stack only",
      "Interrupt vector"
    ],
    "سياق العملية محفوظ في الـ PCB.",
    "A process's context is represented in the PCB.",
    1,
    0
  ],
  [
    3,
    "psched",
    "Some hardware reduces context-switch time by:",
    [
      "Providing multiple sets of registers per CPU",
      "Removing the PCB",
      "Disabling interrupts",
      "Using a larger disk"
    ],
    "بعض الهاردوير يوفر أكثر من مجموعة registers لكل معالج فيقلل وقت التبديل.",
    "Multiple register sets per CPU reduce context-switch time.",
    0,
    0
  ],
  [
    3,
    "psched",
    "In Android, a background process performs tasks using a:",
    [
      "Service",
      "Renderer",
      "Daemon thread in kernel",
      "Zombie process"
    ],
    "في Android عملية الخلفية تسوي شغلها بـ service، بدون واجهة وبذاكرة قليلة.",
    "Android background processes use a service (no UI, little memory).",
    0,
    0
  ],
  [
    3,
    "psched",
    "Early versions of iOS allowed:",
    [
      "A single foreground process, with others suspended or limited in background",
      "Unlimited foreground processes",
      "No background processes ever",
      "Only kernel threads"
    ],
    "iOS القديم يسمح بعملية وحدة في الواجهة، والباقي معلّق أو محدود في الخلفية.",
    "Early iOS allowed one foreground process; others suspended or limited.",
    0,
    0
  ],
  [
    3,
    "pcreate",
    "Processes are generally identified and managed via a:",
    [
      "Process identifier (pid)",
      "File name",
      "Program counter",
      "Mailbox"
    ],
    "العمليات تتعرّف وتندار برقم العملية (pid).",
    "Processes are identified by a process identifier (pid).",
    1,
    0
  ],
  [
    3,
    "pcreate",
    "Restricting a child process to a subset of the parent's resources:",
    [
      "Prevents any process from overloading the system by creating too many children",
      "Makes the child faster",
      "Is required by fork()",
      "Causes a zombie"
    ],
    "تقييد الابن بجزء من موارد الأب يمنع أي عملية تغرق النظام بأبناء كثير.",
    "Restricting children to a subset of parent resources prevents overloading the system.",
    1,
    0
  ],
  [
    3,
    "pcreate",
    "In UNIX, the fork() return value in the child is:",
    [
      "0",
      "The child's pid",
      "The parent's pid",
      "-1 always"
    ],
    "fork() ترجع 0 داخل الابن.",
    "fork() returns 0 in the child.",
    1,
    0
  ],
  [
    3,
    "pcreate",
    "In UNIX, the fork() return value in the parent is:",
    [
      "The (nonzero) pid of the child",
      "0",
      "The parent's own pid",
      "Always 1"
    ],
    "fork() ترجع للأب رقم pid الابن (قيمة غير صفرية).",
    "fork() returns the child's nonzero pid to the parent.",
    1,
    0
  ],
  [
    3,
    "pcreate",
    "After fork(), where do both processes resume execution?",
    [
      "At the instruction after the fork()",
      "At the beginning of main()",
      "At exec()",
      "At exit()"
    ],
    "بعد fork() الأب والابن يكملون من التعليمة اللي بعد fork().",
    "Both resume at the instruction after fork().",
    1,
    0
  ],
  [
    3,
    "pcreate",
    "Which system call replaces the process' memory space with a new program?",
    [
      "exec()",
      "fork()",
      "wait()",
      "abort()"
    ],
    "exec() يستبدل مساحة ذاكرة العملية ببرنامج جديد.",
    "exec() replaces the process's memory with a new program.",
    1,
    0
  ],
  [
    3,
    "pcreate",
    "Which system call takes the parent out of the ready queue until the child terminates?",
    [
      "wait()",
      "exec()",
      "fork()",
      "exit()"
    ],
    "wait() يطلّع الأب من الـ ready queue لين الابن يخلص.",
    "wait() keeps the parent out of the ready queue until the child terminates.",
    0,
    0
  ],
  [
    3,
    "pcreate",
    "When a process creates a new process, the two possibilities for execution are:",
    [
      "Parent and children execute concurrently, or parent waits until children terminate",
      "Parent always terminates first, or child always terminates first",
      "Both run in kernel mode, or both run in user mode",
      "Child replaces parent, or parent replaces child"
    ],
    "خيارات التنفيذ: الأب والأبناء يشتغلون مع بعض، أو الأب ينتظر لين يخلصون.",
    "Parent and children run concurrently, or the parent waits.",
    0,
    0
  ],
  [
    3,
    "pcreate",
    "The two possibilities for the child's address space are:",
    [
      "Duplicate of parent, or a new program loaded into it",
      "Shared stack, or shared heap",
      "Kernel space, or user space",
      "Empty, or full"
    ],
    "مساحة عناوين الابن: نسخة من الأب، أو برنامج جديد ينحمّل فيها.",
    "The child's address space duplicates the parent or loads a new program.",
    0,
    0
  ],
  [
    3,
    "pterm",
    "A process asks the OS to delete it using:",
    [
      "exit()",
      "abort()",
      "fork()",
      "exec()"
    ],
    "العملية تطلب من النظام يحذفها بـ exit().",
    "A process asks to be deleted with exit().",
    1,
    0
  ],
  [
    3,
    "pterm",
    "A parent terminates the execution of a child using:",
    [
      "abort()",
      "exit()",
      "exec()",
      "signal()"
    ],
    "الأب ينهي ابنه بـ abort().",
    "A parent terminates a child with abort().",
    1,
    0
  ],
  [
    3,
    "pterm",
    "Which is NOT a reason for a parent to abort a child?",
    [
      "The child called exec()",
      "Child exceeded allocated resources",
      "Task assigned to child is no longer required",
      "The parent is exiting"
    ],
    "أسباب abort: الابن تعدى موارده، مهمته ما عاد لها داعي، أو الأب طالع والنظام ما يسمح يبقى الابن. استدعاء exec() مو سبب.",
    "Abort reasons: exceeded resources, task not needed, or parent exiting — not calling exec().",
    1,
    0
  ],
  [
    3,
    "pterm",
    "When a process terminates and all its children, grandchildren, etc. are terminated, this is:",
    [
      "Cascading termination",
      "Context switching",
      "Aging",
      "Rendezvous"
    ],
    "إنهاء العملية وكل أبنائها وأحفادها = cascading termination، والنظام يبدأه.",
    "Terminating a process and all descendants is cascading termination.",
    1,
    0
  ],
  [
    3,
    "pterm",
    "A child that has terminated but whose parent has not invoked wait() is a:",
    [
      "Zombie",
      "Orphan",
      "Daemon",
      "Thread"
    ],
    "الابن اللي انتهى بس أبوه ما سوى wait() اسمه zombie.",
    "A terminated child whose parent hasn't called wait() is a zombie.",
    1,
    0
  ],
  [
    3,
    "pterm",
    "If a parent terminated without invoking wait(), its child becomes:",
    [
      "An orphan",
      "A zombie",
      "A daemon",
      "A kernel thread"
    ],
    "إذا الأب طلع بدون wait() الابن يصير orphan (يتيم).",
    "If the parent exits without wait(), the child becomes an orphan.",
    1,
    0
  ],
  [
    3,
    "pterm",
    "pid = wait(&status) returns:",
    [
      "Status information and the pid of the terminated child",
      "The child's code",
      "The parent's pid",
      "The number of children"
    ],
    "wait(&status) ترجع معلومات الحالة ورقم الابن اللي انتهى.",
    "wait(&status) returns the status and the terminated child's pid.",
    0,
    0
  ],
  [
    3,
    "pterm",
    "In Android's importance hierarchy, the MOST important process is the:",
    [
      "Foreground process",
      "Visible process",
      "Service process",
      "Empty process"
    ],
    "ترتيب الأهمية في Android: Foreground ثم Visible ثم Service ثم Background ثم Empty.",
    "Android importance: foreground > visible > service > background > empty.",
    0,
    0
  ],
  [
    3,
    "pterm",
    "Android begins terminating processes that are:",
    [
      "Least important (starting with empty processes)",
      "Most important",
      "Foreground",
      "Newest"
    ],
    "Android يبدأ يقفل الأقل أهمية، يبدأ بالعمليات الفاضية (empty).",
    "Android terminates the least important first, starting with empty processes.",
    0,
    0
  ],
  [
    3,
    "pterm",
    "In Chrome, which process renders web pages and runs in a sandbox?",
    [
      "Renderer process",
      "Browser process",
      "Plug-in process",
      "Kernel process"
    ],
    "في Chrome عملية renderer لكل موقع ترسم الصفحة وتشتغل في sandbox.",
    "Chrome's renderer process renders pages in a sandbox.",
    0,
    0
  ],
  [
    3,
    "pterm",
    "In Chrome, the process that manages the user interface, disk and network I/O is the:",
    [
      "Browser process",
      "Renderer process",
      "Plug-in process",
      "Service process"
    ],
    "عملية browser في Chrome تدير الواجهة والقرص والشبكة.",
    "The browser process manages UI, disk and network I/O.",
    0,
    0
  ],
  [
    3,
    "ipc",
    "Which is NOT a reason for cooperating processes?",
    [
      "Increasing context-switch time",
      "Information sharing",
      "Computation speedup",
      "Modularity"
    ],
    "أسباب التعاون: مشاركة المعلومات، تسريع الحساب، الـ modularity، والراحة. زيادة وقت التبديل مو سبب.",
    "Cooperation reasons: information sharing, speedup, modularity — not increasing context-switch time.",
    0,
    0
  ],
  [
    3,
    "ipc",
    "Computation speedup through cooperating processes can be achieved only if:",
    [
      "The computer has multiple processing cores",
      "The processes are independent",
      "Message passing is used",
      "The buffer is unbounded"
    ],
    "التسريع بالتعاون يتحقق بس إذا الجهاز فيه أكثر من نواة.",
    "Speedup needs multiple processing cores.",
    0,
    0
  ],
  [
    3,
    "ipc",
    "The two models of IPC are:",
    [
      "Shared memory and message passing",
      "Fork and exec",
      "Stack and heap",
      "Direct and cascading"
    ],
    "نموذجين للـ IPC: الذاكرة المشتركة وتبادل الرسائل.",
    "The two IPC models are shared memory and message passing.",
    0,
    0
  ],
  [
    3,
    "ipc",
    "In the unbounded-buffer producer-consumer problem:",
    [
      "The producer never waits",
      "The producer waits if the buffer is full",
      "The consumer never waits",
      "Both never wait"
    ],
    "في الـ buffer غير المحدود المنتج ما ينتظر أبد، والمستهلك ينتظر إذا فاضي.",
    "With an unbounded buffer the producer never waits.",
    0,
    0
  ],
  [
    3,
    "ipc",
    "In the bounded-buffer problem, the producer must wait if:",
    [
      "All buffers are full",
      "The buffer is empty",
      "The consumer is running",
      "Never"
    ],
    "في الـ buffer المحدود المنتج ينتظر إذا كل الخانات مليانة.",
    "With a bounded buffer the producer waits when it's full.",
    0,
    0
  ],
  [
    3,
    "shm",
    "In shared-memory IPC, communication is under the control of:",
    [
      "The user processes, not the OS",
      "The OS kernel",
      "The device controller",
      "The interrupt vector"
    ],
    "في الذاكرة المشتركة التواصل تحت تحكم عمليات المستخدم مو النظام.",
    "Shared-memory communication is controlled by user processes, not the OS.",
    1,
    0
  ],
  [
    3,
    "shm",
    "In the circular bounded buffer, the buffer is empty when:",
    [
      "in == out",
      "((in + 1) % BUFFER_SIZE) == out",
      "in == 0",
      "out == BUFFER_SIZE"
    ],
    "الـ buffer الدائري فاضي إذا in == out.",
    "The circular buffer is empty when in == out.",
    1,
    0
  ],
  [
    3,
    "shm",
    "In the circular bounded buffer, the buffer is full when:",
    [
      "((in + 1) % BUFFER_SIZE) == out",
      "in == out",
      "out == 0",
      "in == BUFFER_SIZE"
    ],
    "الـ buffer مليان إذا ((in + 1) % BUFFER_SIZE) == out.",
    "It's full when ((in + 1) % BUFFER_SIZE) == out.",
    1,
    0
  ],
  [
    3,
    "shm",
    "The shared-memory bounded-buffer solution (without a counter) can hold at most:",
    [
      "BUFFER_SIZE − 1 items",
      "BUFFER_SIZE items",
      "BUFFER_SIZE + 1 items",
      "Unlimited items"
    ],
    "الحل بدون counter يخزن بالكثير BUFFER_SIZE − 1 عنصر، لأن خانة وحدة تبقى فاضية للتمييز.",
    "Without a counter it holds at most BUFFER_SIZE − 1 items.",
    1,
    0
  ],
  [
    3,
    "shm",
    "In the counter solution, counter is incremented by ___ and decremented by ___.",
    [
      "the producer; the consumer",
      "the consumer; the producer",
      "the OS; the producer",
      "the consumer; the OS"
    ],
    "المنتج يزيد الـ counter والمستهلك ينقصه.",
    "The producer increments counter; the consumer decrements it.",
    1,
    0
  ],
  [
    3,
    "shm",
    "With counter = 5, interleaved counter++ and counter-- may produce:",
    [
      "4 or 6 (incorrect) instead of 5",
      "Always 5",
      "Always 0",
      "An infinite loop"
    ],
    "تداخل counter++ وcounter-- ممكن يطلع 4 أو 6 بدل 5: هذا race condition.",
    "Interleaving can yield 4 or 6 instead of 5 — a race condition.",
    1,
    0
  ],
  [
    3,
    "shm",
    "A situation where the outcome depends on the interleaving of concurrent accesses to shared data is a:",
    [
      "Race condition",
      "Context switch",
      "Convoy effect",
      "Rendezvous"
    ],
    "لما النتيجة تعتمد على ترتيب الوصول المتزامن للبيانات المشتركة = race condition.",
    "Outcome depending on interleaving of concurrent accesses is a race condition.",
    0,
    0
  ],
  [
    3,
    "msg",
    "The two operations provided by the message-passing IPC facility are:",
    [
      "send(message) and receive(message)",
      "fork() and exec()",
      "read() and write() on shared memory",
      "push() and pop()"
    ],
    "تبادل الرسائل يوفر عمليتين: send وreceive.",
    "Message passing provides send(message) and receive(message).",
    1,
    0
  ],
  [
    3,
    "msg",
    "In direct communication, a link is associated with:",
    [
      "Exactly one pair of communicating processes",
      "Many processes",
      "No processes",
      "A mailbox"
    ],
    "في التواصل المباشر الرابط لزوج واحد بالضبط من العمليات.",
    "In direct communication a link joins exactly one pair.",
    1,
    0
  ],
  [
    3,
    "msg",
    "In direct communication, links are established:",
    [
      "Automatically",
      "Only through a mailbox",
      "Manually by the OS administrator",
      "Never"
    ],
    "في التواصل المباشر الروابط تنشأ تلقائياً.",
    "Direct links are established automatically.",
    1,
    0
  ],
  [
    3,
    "msg",
    "In indirect communication, messages are sent to and received from:",
    [
      "Mailboxes (ports)",
      "Process IDs directly",
      "The PCB",
      "The heap"
    ],
    "في التواصل غير المباشر الرسائل تروح وتجي من mailboxes (ports).",
    "Indirect communication uses mailboxes (ports).",
    1,
    0
  ],
  [
    3,
    "msg",
    "In indirect communication, which is TRUE?",
    [
      "A link may be associated with many processes",
      "Each pair has exactly one link",
      "Processes must name each other explicitly",
      "Links are always unidirectional"
    ],
    "في غير المباشر الرابط ممكن يربط أكثر من عمليتين.",
    "An indirect link may be associated with many processes.",
    1,
    0
  ],
  [
    3,
    "msg",
    "send(A, message) in indirect communication means:",
    [
      "Send a message to mailbox A",
      "Send a message to process A",
      "Send a message to all processes",
      "Block process A"
    ],
    "send(A, message) هنا A صندوق بريد (mailbox).",
    "send(A, message) sends to mailbox A.",
    1,
    0
  ],
  [
    3,
    "msg",
    "Blocking message passing is considered:",
    [
      "Synchronous",
      "Asynchronous",
      "Indirect",
      "Unbounded"
    ],
    "الإرسال المعطّل (blocking) يعتبر متزامن (synchronous).",
    "Blocking message passing is synchronous.",
    0,
    0
  ],
  [
    3,
    "msg",
    "A non-blocking receive returns:",
    [
      "A valid message or a null message",
      "Always a valid message",
      "Nothing, it blocks",
      "The sender's pid only"
    ],
    "الاستقبال غير المعطّل يرجع رسالة صالحة أو null.",
    "Non-blocking receive returns a valid message or null.",
    0,
    0
  ],
  [
    3,
    "msg",
    "If both send and receive are blocking, we have a:",
    [
      "Rendezvous",
      "Race condition",
      "Zombie",
      "Convoy"
    ],
    "إذا الإرسال والاستقبال الاثنين blocking = rendezvous.",
    "Blocking send and receive together is a rendezvous.",
    0,
    0
  ],
  [
    3,
    "msg",
    "With zero-capacity buffering:",
    [
      "The sender must wait for the receiver",
      "The sender never waits",
      "Up to n messages can be queued",
      "Messages are lost"
    ],
    "سعة صفر: المرسل لازم ينتظر المستقبل.",
    "Zero capacity: the sender must wait for the receiver.",
    0,
    0
  ],
  [
    3,
    "msg",
    "With unbounded-capacity buffering:",
    [
      "The sender never waits",
      "The sender always waits",
      "Only one message can be queued",
      "The receiver never waits"
    ],
    "سعة غير محدودة: المرسل ما ينتظر أبد.",
    "Unbounded capacity: the sender never waits.",
    0,
    0
  ],
  [
    3,
    "msg",
    "Which is a PHYSICAL implementation of a communication link?",
    [
      "Hardware bus",
      "Direct or indirect",
      "Synchronous or asynchronous",
      "Automatic buffering"
    ],
    "التنفيذ الفيزيائي للرابط: ذاكرة مشتركة، bus، أو شبكة.",
    "Physical link implementations: shared memory, hardware bus, network.",
    0,
    0
  ],
  [
    4,
    "tconcept",
    "A thread is:",
    [
      "A basic unit of CPU utilization",
      "A type of process with its own address space",
      "A device driver",
      "A file in memory"
    ],
    "الـ thread الوحدة الأساسية لاستخدام المعالج.",
    "A thread is a basic unit of CPU utilization.",
    0,
    0
  ],
  [
    4,
    "tconcept",
    "Which is NOT owned separately by each thread?",
    [
      "Code section",
      "Thread ID",
      "Program counter",
      "Stack"
    ],
    "كل thread له ID وPC وregisters وstack خاصة، بس قسم الكود مشترك.",
    "Each thread has its own ID, PC, registers, stack; the code section is shared.",
    0,
    0
  ],
  [
    4,
    "tconcept",
    "Threads of the same process share:",
    [
      "Code section, data section, and open files",
      "Stack and registers",
      "Program counter",
      "Thread ID"
    ],
    "الـ threads في نفس العملية تتشارك الكود والبيانات والملفات المفتوحة.",
    "Threads share code, data and open files.",
    0,
    0
  ],
  [
    4,
    "tconcept",
    "Compared to process creation, thread creation is:",
    [
      "Light-weight",
      "Heavy-weight",
      "Impossible in modern OS",
      "Done only by hardware"
    ],
    "إنشاء thread خفيف مقارنة بإنشاء عملية (ثقيل).",
    "Thread creation is light-weight compared to process creation.",
    0,
    0
  ],
  [
    4,
    "tconcept",
    "In a multithreaded server, when a request arrives the server:",
    [
      "Creates a new thread to service the request and resumes listening",
      "Creates a new process and stops listening",
      "Rejects the request",
      "Waits until all requests finish"
    ],
    "الخادم متعدد الـ threads يسوي thread جديد لكل طلب ويرجع يسمع.",
    "A multithreaded server spawns a thread per request and keeps listening.",
    0,
    0
  ],
  [
    4,
    "tconcept",
    "Kernels are generally:",
    [
      "Multithreaded",
      "Single-threaded",
      "Without threads",
      "Only user-level threads"
    ],
    "الكيرنل نفسه عادة multithreaded.",
    "Kernels are generally multithreaded.",
    0,
    0
  ],
  [
    4,
    "tbenefit",
    "\"Allows continued execution if part of the process is blocked\" is the benefit of:",
    [
      "Responsiveness",
      "Economy",
      "Scalability",
      "Resource sharing"
    ],
    "الاستجابة (responsiveness): التنفيذ يكمل حتى لو جزء من العملية متعطل.",
    "Responsiveness: execution continues if part of the process blocks.",
    1,
    0
  ],
  [
    4,
    "tbenefit",
    "\"Cheaper than process creation; thread switching has lower overhead than context switching\" is:",
    [
      "Economy",
      "Responsiveness",
      "Scalability",
      "Resource sharing"
    ],
    "الاقتصاد (economy): الـ thread أرخص من العملية وتبديله أخف.",
    "Economy: cheaper creation and lower switching overhead.",
    1,
    0
  ],
  [
    4,
    "tbenefit",
    "\"A process can take advantage of multicore architectures\" is:",
    [
      "Scalability",
      "Economy",
      "Responsiveness",
      "Resource sharing"
    ],
    "القابلية للتوسع (scalability): العملية تستفيد من تعدد الأنوية.",
    "Scalability: a process can use multicore architectures.",
    1,
    0
  ],
  [
    4,
    "tbenefit",
    "\"Threads share the resources of the process, easier than shared memory or message passing\" is:",
    [
      "Resource sharing",
      "Economy",
      "Scalability",
      "Responsiveness"
    ],
    "مشاركة الموارد (resource sharing): الـ threads تتشارك موارد العملية بسهولة.",
    "Resource sharing: threads share process resources easily.",
    1,
    0
  ],
  [
    4,
    "tbenefit",
    "A system that performs more than one task simultaneously has:",
    [
      "Parallelism",
      "Only concurrency",
      "Starvation",
      "A convoy effect"
    ],
    "تنفيذ أكثر من مهمة بنفس اللحظة = parallelism.",
    "Doing more than one task simultaneously is parallelism.",
    1,
    0
  ],
  [
    4,
    "tbenefit",
    "On a single-core system, multiple threads can achieve:",
    [
      "Concurrency without parallelism",
      "Parallelism without concurrency",
      "Both parallelism and concurrency",
      "Neither"
    ],
    "على نواة وحدة: concurrency بدون parallelism (تبديل سريع).",
    "On one core: concurrency without parallelism.",
    1,
    0
  ],
  [
    4,
    "tbenefit",
    "Distributing subsets of the same data across cores and performing the same operation is:",
    [
      "Data parallelism",
      "Task parallelism",
      "Concurrency",
      "Context switching"
    ],
    "توزيع أجزاء نفس البيانات على الأنوية بنفس العملية = data parallelism.",
    "Splitting the same data across cores with the same operation is data parallelism.",
    0,
    0
  ],
  [
    4,
    "tuk",
    "User threads are managed by:",
    [
      "A user-level threads library, without kernel support",
      "The OS kernel directly",
      "The device controller",
      "The interrupt vector"
    ],
    "الـ user threads تديرها مكتبة في مستوى المستخدم بدون دعم الكيرنل.",
    "User threads are managed by a user-level library.",
    0,
    0
  ],
  [
    4,
    "tuk",
    "The kernel is ___ of user-level threads.",
    [
      "Unaware",
      "Fully aware",
      "The creator",
      "The scheduler"
    ],
    "الكيرنل ما يدري عن الـ user threads.",
    "The kernel is unaware of user-level threads.",
    0,
    0
  ],
  [
    4,
    "tuk",
    "A kernel thread is sometimes called a:",
    [
      "Lightweight Process (LWP)",
      "Heavyweight Process",
      "Zombie",
      "Daemon"
    ],
    "الـ kernel thread يسمى أحياناً LWP (عملية خفيفة).",
    "A kernel thread is sometimes called an LWP.",
    0,
    0
  ],
  [
    4,
    "tuk",
    "Compared to user threads, kernel threads are:",
    [
      "More expensive to create",
      "Cheaper to create",
      "Unsupported by modern OSes",
      "Unknown to the OS"
    ],
    "الـ kernel threads أغلى في الإنشاء من الـ user threads.",
    "Kernel threads are more expensive to create.",
    0,
    0
  ],
  [
    4,
    "tuk",
    "The three primary thread libraries are:",
    [
      "POSIX Pthreads, Windows threads, Java threads",
      "Win32, POSIX, Mach",
      "Green threads, GNU threads, Fiber",
      "C, C++, Java"
    ],
    "المكتبات الثلاث: POSIX Pthreads وWindows threads وJava threads.",
    "The three libraries: Pthreads, Windows threads, Java threads.",
    0,
    0
  ],
  [
    4,
    "tmodels",
    "In the many-to-one model, if one thread makes a blocking call:",
    [
      "All threads block",
      "Only that thread blocks",
      "The kernel creates a new thread",
      "Nothing happens"
    ],
    "في many-to-one لو thread سوى استدعاء معطّل كل الـ threads تتعطل.",
    "Many-to-one: one blocking call blocks all threads.",
    1,
    0
  ],
  [
    4,
    "tmodels",
    "Why can't many-to-one threads run in parallel on a multicore system?",
    [
      "Only one thread may be in the kernel at a time",
      "They use too much memory",
      "The kernel creates too many threads",
      "They use message passing"
    ],
    "في many-to-one بس thread وحدة تقدر تكون في الكيرنل، فما فيه توازي على الأنوية.",
    "Only one thread can be in the kernel at a time, so no parallelism.",
    1,
    0
  ],
  [
    4,
    "tmodels",
    "Solaris Green Threads and GNU Portable Threads are examples of:",
    [
      "Many-to-One",
      "One-to-One",
      "Many-to-Many",
      "Two-level"
    ],
    "Solaris Green Threads وGNU Portable Threads أمثلة many-to-one.",
    "Green Threads and GNU Portable Threads are many-to-one.",
    1,
    0
  ],
  [
    4,
    "tmodels",
    "Windows and Linux use which model?",
    [
      "One-to-One",
      "Many-to-One",
      "Many-to-Many",
      "None"
    ],
    "Windows وLinux يستخدمون one-to-one.",
    "Windows and Linux use one-to-one.",
    1,
    0
  ],
  [
    4,
    "tmodels",
    "A drawback of the one-to-one model is:",
    [
      "Creating a user thread requires creating a kernel thread, so the number of threads may be restricted",
      "One blocking thread blocks all",
      "No parallelism",
      "The kernel is unaware of threads"
    ],
    "عيب one-to-one: كل user thread يحتاج kernel thread، فعدد الـ threads ممكن ينحدّ.",
    "One-to-one needs a kernel thread per user thread, so thread count may be limited.",
    1,
    0
  ],
  [
    4,
    "tmodels",
    "The model that allows the OS to create a sufficient number of kernel threads is:",
    [
      "Many-to-Many",
      "Many-to-One",
      "One-to-One",
      "Single-threaded"
    ],
    "many-to-many يخلي النظام ينشئ عدد كافي من الـ kernel threads.",
    "Many-to-many lets the OS create enough kernel threads.",
    1,
    0
  ],
  [
    4,
    "tmodels",
    "Windows with the ThreadFiber package is an example of:",
    [
      "Many-to-Many",
      "Many-to-One",
      "One-to-One",
      "Single-threaded"
    ],
    "Windows مع ThreadFiber مثال many-to-many.",
    "Windows ThreadFiber is many-to-many.",
    0,
    0
  ],
  [
    4,
    "tlib",
    "In a thread library implemented entirely in user space, invoking a library function results in:",
    [
      "A local function call in user space, not a system call",
      "A system call to the kernel",
      "A context switch",
      "An interrupt"
    ],
    "مكتبة في مساحة المستخدم: استدعاء دالة = استدعاء محلي مو system call.",
    "A user-space library call is a local function call, not a system call.",
    0,
    0
  ],
  [
    4,
    "tlib",
    "In a kernel-level thread library, invoking an API function typically results in:",
    [
      "A system call to the kernel",
      "A local function call",
      "Nothing",
      "Process termination"
    ],
    "مكتبة على مستوى الكيرنل: استدعاء الـ API = system call.",
    "A kernel-level library call is a system call.",
    0,
    0
  ],
  [
    4,
    "tlib",
    "Java threads are managed by:",
    [
      "The JVM",
      "The device driver",
      "The bootstrap program",
      "The shell"
    ],
    "الـ Java threads تديرها الـ JVM.",
    "Java threads are managed by the JVM.",
    0,
    0
  ],
  [
    4,
    "tlib",
    "The standard practice for creating Java threads is to:",
    [
      "Implement the Runnable interface",
      "Extend the Process class",
      "Call fork()",
      "Use the Win32 API"
    ],
    "المعتاد في Java: تطبيق واجهة Runnable.",
    "Standard Java practice: implement Runnable.",
    0,
    0
  ],
  [
    4,
    "tlib",
    "In Java, join() is used to:",
    [
      "Make the calling thread wait until the other thread finishes",
      "Start a new thread",
      "Kill a thread",
      "Create a process"
    ],
    "join() يخلي الـ thread المستدعي ينتظر لين الثاني يخلص.",
    "join() makes the caller wait for the other thread to finish.",
    0,
    0
  ],
  [
    4,
    "tlib",
    "If main prints the result without calling join(), the output:",
    [
      "Is not guaranteed (it may print the initial value 0.0)",
      "Is always correct",
      "Causes a compile error",
      "Is always 0"
    ],
    "بدون join() النتيجة مو مضمونة، ممكن يطبع القيمة الابتدائية.",
    "Without join(), output isn't guaranteed (may print the initial value).",
    0,
    0
  ],
  [
    5,
    "sbasic",
    "Maximum CPU utilization is obtained with:",
    [
      "Multiprogramming",
      "Single tasking",
      "Batch with one job",
      "Disabling interrupts"
    ],
    "أقصى استغلال للمعالج بالـ multiprogramming.",
    "Maximum CPU utilization comes from multiprogramming.",
    1,
    0
  ],
  [
    5,
    "sbasic",
    "Process execution consists of a cycle of:",
    [
      "CPU execution and I/O wait",
      "Fork and exec",
      "Compile and link",
      "Ready and terminated"
    ],
    "تنفيذ العملية دورة بين تنفيذ على المعالج وانتظار I/O (CPU–I/O burst cycle).",
    "Execution cycles between CPU bursts and I/O waits.",
    1,
    0
  ],
  [
    5,
    "sbasic",
    "The CPU-burst histogram shows:",
    [
      "A large number of short bursts and a small number of longer bursts",
      "Only long bursts",
      "Only short bursts",
      "Equal short and long bursts"
    ],
    "الرسم البياني: أغلب الـ bursts قصيرة، وقليل منها طويلة.",
    "Many short CPU bursts and few long ones.",
    1,
    0
  ],
  [
    5,
    "sbasic",
    "The CPU scheduler selects from processes in the:",
    [
      "Ready queue",
      "Wait queue",
      "Job pool on disk",
      "PCB"
    ],
    "الـ CPU scheduler يختار من العمليات في الـ ready queue.",
    "The CPU scheduler picks from the ready queue.",
    1,
    0
  ],
  [
    5,
    "sbasic",
    "In which situations is there NO choice in scheduling?",
    [
      "Running → waiting, and terminates (1 and 4)",
      "Running → ready, and waiting → ready (2 and 3)",
      "All four",
      "None"
    ],
    "الحالتين 1 (Running → Waiting) و4 (انتهاء) ما فيهم خيار، لازم نختار عملية جديدة.",
    "Cases 1 (running→waiting) and 4 (terminate) leave no choice.",
    1,
    0
  ],
  [
    5,
    "sbasic",
    "If scheduling takes place only when a process switches to waiting or terminates, the scheme is:",
    [
      "Nonpreemptive",
      "Preemptive",
      "Round robin",
      "Multilevel"
    ],
    "إذا الجدولة بس في الحالتين 1 و4 تكون nonpreemptive.",
    "Scheduling only in cases 1 and 4 is nonpreemptive.",
    1,
    0
  ],
  [
    5,
    "sbasic",
    "Under nonpreemptive scheduling, a process keeps the CPU until:",
    [
      "It terminates or switches to the waiting state",
      "Its quantum expires",
      "A higher-priority process arrives",
      "The timer interrupts"
    ],
    "في nonpreemptive العملية تحتفظ بالمعالج لين تخلص أو تنتقل لـ waiting.",
    "Nonpreemptive: a process keeps the CPU until it terminates or waits.",
    0,
    0
  ],
  [
    5,
    "sbasic",
    "Windows, MacOS, Linux and UNIX use:",
    [
      "Preemptive scheduling",
      "Nonpreemptive scheduling",
      "Only FCFS",
      "No scheduling"
    ],
    "Windows وMacOS وLinux وUNIX كلها preemptive.",
    "Windows, MacOS, Linux, UNIX use preemptive scheduling.",
    0,
    0
  ],
  [
    5,
    "sbasic",
    "Preemptive scheduling can result in:",
    [
      "Race conditions when data are shared among processes",
      "Zero overhead",
      "No starvation ever",
      "No context switches"
    ],
    "الـ preemptive ممكن يسبب race conditions لما فيه بيانات مشتركة.",
    "Preemption can cause race conditions on shared data.",
    0,
    0
  ],
  [
    5,
    "scrit",
    "The module that gives control of the CPU to the process selected by the scheduler is the:",
    [
      "Dispatcher",
      "Scheduler",
      "Loader",
      "Shell"
    ],
    "الـ dispatcher هو اللي يعطي المعالج للعملية اللي اختارها الـ scheduler.",
    "The dispatcher gives the CPU to the selected process.",
    1,
    0
  ],
  [
    5,
    "scrit",
    "Which is NOT a function of the dispatcher?",
    [
      "Selecting which process runs next",
      "Switching context",
      "Switching to user mode",
      "Jumping to the proper location in the user program"
    ],
    "اختيار العملية الجاية شغل الـ scheduler مو الـ dispatcher. الـ dispatcher يبدّل السياق ويحول لـ user mode ويقفز للمكان الصح.",
    "Selecting is the scheduler's job; the dispatcher switches context, mode and jumps to the program.",
    1,
    0
  ],
  [
    5,
    "scrit",
    "Dispatch latency is:",
    [
      "The time for the dispatcher to stop one process and start another",
      "The time a process waits in the ready queue",
      "The burst time",
      "The quantum"
    ],
    "dispatch latency: وقت إيقاف عملية وتشغيل ثانية.",
    "Dispatch latency: time to stop one process and start another.",
    1,
    0
  ],
  [
    5,
    "scrit",
    "The number of processes that complete their execution per time unit is:",
    [
      "Throughput",
      "Turnaround time",
      "Response time",
      "CPU utilization"
    ],
    "عدد العمليات اللي تخلص بوحدة الزمن = throughput.",
    "Processes completed per time unit is throughput.",
    1,
    0
  ],
  [
    5,
    "scrit",
    "The amount of time a process has been waiting in the ready queue is:",
    [
      "Waiting time",
      "Turnaround time",
      "Response time",
      "Burst time"
    ],
    "الوقت اللي قضته العملية تنتظر في الـ ready queue = waiting time.",
    "Time spent in the ready queue is waiting time.",
    1,
    0
  ],
  [
    5,
    "scrit",
    "The time from when a request was submitted until the first response is produced is:",
    [
      "Response time",
      "Turnaround time",
      "Waiting time",
      "Throughput"
    ],
    "من تقديم الطلب لين أول رد = response time.",
    "Time from submission to first response is response time.",
    1,
    0
  ],
  [
    5,
    "scrit",
    "Which criterion should be MAXIMIZED?",
    [
      "Throughput",
      "Waiting time",
      "Turnaround time",
      "Response time"
    ],
    "نزيد: استغلال المعالج والـ throughput. ونقلل: turnaround وwaiting وresponse.",
    "Maximize CPU utilization and throughput; minimize the times.",
    0,
    0
  ],
  [
    5,
    "scrit",
    "A process arrives at 2, has burst 5, and completes at 12. Its waiting time is:",
    [
      "5",
      "10",
      "7",
      "12"
    ],
    "TAT = 12 − 2 = 10، وWT = 10 − 5 = 5.",
    "TAT = 12 − 2 = 10; WT = 10 − 5 = 5.",
    0,
    0
  ],
  [
    5,
    "scrit",
    "A process arrives at 0 and completes at 9. Its turnaround time is:",
    [
      "9",
      "0",
      "Depends on the quantum only",
      "Cannot be computed"
    ],
    "TAT = CT − AT = 9 − 0 = 9.",
    "TAT = CT − AT = 9.",
    0,
    0
  ],
  [
    5,
    "sfcfs",
    "FCFS with P1=24, P2=3, P3=3 arriving in order P1, P2, P3. Average waiting time?",
    [
      "17",
      "3",
      "7",
      "27"
    ],
    "P1 تبدأ 0، P2 عند 24، P3 عند 27: (0 + 24 + 27) ÷ 3 = 17.",
    "Waits 0, 24, 27 → 51/3 = 17.",
    1,
    0
  ],
  [
    5,
    "sfcfs",
    "FCFS with the same processes arriving in order P2, P3, P1. Average waiting time?",
    [
      "3",
      "17",
      "6",
      "10"
    ],
    "بالترتيب P2, P3, P1: الانتظار 0 و3 و6 ← 9 ÷ 3 = 3.",
    "Order P2, P3, P1: waits 0, 3, 6 → 3.",
    1,
    0
  ],
  [
    5,
    "sfcfs",
    "\"Short processes waiting behind a long process\" is called the:",
    [
      "Convoy effect",
      "Starvation",
      "Aging",
      "Race condition"
    ],
    "العمليات القصيرة تنتظر ورا عملية طويلة = convoy effect.",
    "Short processes stuck behind a long one is the convoy effect.",
    1,
    0
  ],
  [
    5,
    "sfcfs",
    "FCFS scheduling is:",
    [
      "Nonpreemptive",
      "Preemptive",
      "Priority-based with aging",
      "Round robin with q=1"
    ],
    "FCFS ما يقاطع (nonpreemptive).",
    "FCFS is nonpreemptive.",
    1,
    0
  ],
  [
    5,
    "ssjf",
    "Which algorithm gives the minimum average waiting time for a given set of processes?",
    [
      "SJF",
      "FCFS",
      "Round Robin",
      "Priority"
    ],
    "SJF يعطي أقل متوسط انتظار (optimal).",
    "SJF gives the minimum average waiting time.",
    1,
    0
  ],
  [
    5,
    "ssjf",
    "SJF with P1=6, P2=8, P3=7, P4=3 (all arrive at 0). Average waiting time?",
    [
      "7",
      "10.25",
      "6",
      "8"
    ],
    "الترتيب P4, P1, P3, P2: انتظار 0, 3, 9, 16 ← 28 ÷ 4 = 7.",
    "Order P4, P1, P3, P2: waits 3, 16, 9, 0 → 28/4 = 7.",
    1,
    0
  ],
  [
    5,
    "ssjf",
    "The preemptive version of SJF is called:",
    [
      "Shortest-Remaining-Time-First (SRTF)",
      "Round Robin",
      "Multilevel queue",
      "Priority with aging"
    ],
    "النسخة المقاطعة من SJF اسمها SRTF.",
    "Preemptive SJF is SRTF.",
    1,
    0
  ],
  [
    5,
    "ssjf",
    "The length of the next CPU burst is predicted using:",
    [
      "Exponential averaging of previous bursts",
      "The process's pid",
      "The size of the PCB",
      "The quantum"
    ],
    "طول الـ burst الجاي يتوقع بالمتوسط الأُسّي للـ bursts السابقة.",
    "The next burst is predicted by exponential averaging.",
    1,
    0
  ],
  [
    5,
    "ssjf",
    "SRTF with P1(0,8), P2(1,4), P3(2,9), P4(3,5). Average waiting time?",
    [
      "6.5",
      "7.75",
      "5",
      "8.5"
    ],
    "SRTF: الانتظار P1 = 9، P2 = 0، P3 = 15، P4 = 2 ← 26 ÷ 4 = 6.5.",
    "SRTF waits: 9, 0, 15, 2 → 26/4 = 6.5.",
    1,
    0
  ],
  [
    5,
    "ssjf",
    "In SRTF, the scheduling decision is redone:",
    [
      "Whenever a new process arrives in the ready queue",
      "Only when a process terminates",
      "Every quantum",
      "Never"
    ],
    "في SRTF القرار ينعاد كل ما وصلت عملية جديدة للـ ready queue.",
    "SRTF re-decides whenever a new process arrives.",
    1,
    0
  ],
  [
    5,
    "srr",
    "In Round Robin, after the time quantum elapses the process is:",
    [
      "Preempted and added to the end of the ready queue",
      "Terminated",
      "Moved to the waiting state",
      "Given another quantum immediately"
    ],
    "في RR بعد انتهاء الـ quantum العملية تنقطع وترجع آخر الطابور.",
    "After the quantum, RR preempts and requeues the process.",
    1,
    0
  ],
  [
    5,
    "srr",
    "With n processes and quantum q, no process waits more than:",
    [
      "(n − 1)q time units",
      "nq time units",
      "q time units",
      "n time units"
    ],
    "مع n عمليات وquantum q ما فيه عملية تنتظر أكثر من (n − 1)q.",
    "No process waits more than (n − 1)q.",
    1,
    0
  ],
  [
    5,
    "srr",
    "If the time quantum q is very large, RR behaves like:",
    [
      "FCFS (FIFO)",
      "SJF",
      "Priority",
      "SRTF"
    ],
    "إذا q كبير جداً RR يصير مثل FCFS.",
    "A very large q makes RR behave like FCFS.",
    1,
    0
  ],
  [
    5,
    "srr",
    "The time quantum must be large with respect to:",
    [
      "Context-switch time",
      "Burst time of the longest process",
      "Disk access time",
      "The number of processes"
    ],
    "الـ quantum لازم يكون كبير مقارنة بوقت الـ context switch وإلا العبء يكبر.",
    "q must be large relative to context-switch time.",
    1,
    0
  ],
  [
    5,
    "srr",
    "Rule of thumb for choosing q:",
    [
      "80% of CPU bursts should be shorter than q",
      "q should equal the longest burst",
      "q should be 1 µs",
      "q should be less than context switch"
    ],
    "القاعدة: 80% من الـ CPU bursts أقصر من q.",
    "Rule: 80% of CPU bursts should be shorter than q.",
    1,
    0
  ],
  [
    5,
    "srr",
    "Compared to SJF, RR typically has:",
    [
      "Higher average turnaround but better response",
      "Lower turnaround and worse response",
      "Same turnaround and response",
      "No preemption"
    ],
    "RR متوسط turnaround أعلى من SJF بس response أحسن.",
    "RR has higher average turnaround than SJF but better response.",
    1,
    0
  ],
  [
    5,
    "srr",
    "RR with q=4: P1=24, P2=3, P3=3 (all at 0). When does P3 finish?",
    [
      "10",
      "7",
      "30",
      "14"
    ],
    "P1 من 0 لـ 4، P2 من 4 لـ 7، P3 من 7 لـ 10.",
    "P1 0–4, P2 4–7, P3 7–10.",
    0,
    0
  ],
  [
    5,
    "srr",
    "RR with q=4: P1=24, P2=3, P3=3 (all at 0). Average waiting time?",
    [
      "≈ 5.67",
      "17",
      "3",
      "7"
    ],
    "الانتظار: P1 = 6، P2 = 4، P3 = 7 ← 17 ÷ 3 ≈ 5.67.",
    "Waits P1 6, P2 4, P3 7 → 17/3 ≈ 5.67.",
    0,
    0
  ],
  [
    5,
    "srr",
    "Typical time quantum values are:",
    [
      "10 to 100 milliseconds",
      "1 to 10 seconds",
      "1 nanosecond",
      "Equal to the context switch"
    ],
    "قيم الـ quantum المعتادة 10 إلى 100 ms.",
    "Typical quanta are 10–100 ms.",
    0,
    0
  ],
  [
    5,
    "sprio",
    "In priority scheduling (as in the slides), the highest priority is:",
    [
      "The smallest integer",
      "The largest integer",
      "Always 10",
      "Chosen randomly"
    ],
    "في السلايدات الرقم الأصغر = أعلى أولوية.",
    "In the slides, the smallest integer is the highest priority.",
    1,
    0
  ],
  [
    5,
    "sprio",
    "The main problem of priority scheduling is:",
    [
      "Starvation of low-priority processes",
      "Convoy effect",
      "Too many context switches",
      "Race conditions only"
    ],
    "مشكلة الأولوية: التجويع (starvation) للعمليات ذات الأولوية المنخفضة.",
    "Priority scheduling's problem is starvation.",
    1,
    0
  ],
  [
    5,
    "sprio",
    "The solution to starvation is:",
    [
      "Aging – increase priority as time progresses",
      "Decrease priority over time",
      "Use FCFS",
      "Increase the quantum"
    ],
    "الحل: الشيخوخة (aging): نرفع الأولوية مع الوقت.",
    "The fix is aging: raise priority over time.",
    1,
    0
  ],
  [
    5,
    "sprio",
    "SJF is a priority algorithm where priority is:",
    [
      "The inverse of the predicted next CPU burst",
      "The arrival time",
      "The pid",
      "Random"
    ],
    "SJF نوع من الأولوية، والأولوية = عكس طول الـ burst المتوقع.",
    "SJF is priority scheduling with priority = inverse of predicted burst.",
    1,
    0
  ],
  [
    5,
    "sprio",
    "Priority example: P1(10,3), P2(1,1), P3(2,4), P4(1,5), P5(5,2), all at 0. Average waiting time?",
    [
      "8.2",
      "12",
      "9.6",
      "6.2"
    ],
    "الترتيب P2, P5, P1, P3, P4: الانتظار 6, 0, 16, 18, 1 ← 41 ÷ 5 = 8.2.",
    "Order P2, P5, P1, P3, P4; waits 6, 0, 16, 18, 1 → 8.2.",
    1,
    0
  ],
  [
    5,
    "sprio",
    "In Priority with Round-Robin, processes with the same priority:",
    [
      "Run round-robin",
      "Run FCFS without preemption",
      "Are terminated",
      "Never run"
    ],
    "الأولوية مع RR: العمليات بنفس الأولوية تتناوب round-robin.",
    "Same-priority processes run round-robin.",
    1,
    0
  ],
  [
    5,
    "smlq",
    "In a multilevel queue, the ready queue:",
    [
      "Consists of multiple queues",
      "Is a single FIFO",
      "Is stored in the PCB",
      "Has no scheduling algorithm"
    ],
    "الطابور متعدد المستويات: الـ ready queue مقسوم لأكثر من طابور.",
    "A multilevel queue has multiple ready queues.",
    1,
    0
  ],
  [
    5,
    "smlq",
    "The key difference of a multilevel FEEDBACK queue is that:",
    [
      "A process can move between the various queues",
      "There is only one queue",
      "Processes never change priority",
      "It uses only FCFS"
    ],
    "الفرق في الـ feedback: العملية تقدر تتنقل بين الطوابير.",
    "In MLFQ a process can move between queues.",
    1,
    0
  ],
  [
    5,
    "smlq",
    "Aging can be implemented using:",
    [
      "Multilevel feedback queue",
      "FCFS",
      "SJF only",
      "The dispatcher"
    ],
    "الشيخوخة تتنفذ بالـ multilevel feedback queue.",
    "Aging can be implemented with MLFQ.",
    1,
    0
  ],
  [
    5,
    "smlq",
    "In the MLFQ example (Q0 RR q=8, Q1 RR q=16, Q2 FCFS), a new process enters:",
    [
      "Q0",
      "Q1",
      "Q2",
      "A random queue"
    ],
    "العملية الجديدة تدخل Q0.",
    "A new process enters Q0.",
    1,
    0
  ],
  [
    5,
    "smlq",
    "In the MLFQ example, a process that does not finish in 8 ms in Q0 is:",
    [
      "Moved to Q1",
      "Terminated",
      "Moved to Q2 directly",
      "Kept in Q0 forever"
    ],
    "إذا ما خلصت في 8 ms تنزل Q1.",
    "If not done in 8 ms it moves to Q1.",
    1,
    0
  ],
  [
    5,
    "smlq",
    "In the MLFQ example, the lowest queue Q2 uses:",
    [
      "FCFS",
      "RR q=8",
      "RR q=16",
      "SJF"
    ],
    "الطابور الأخير Q2 يستخدم FCFS.",
    "Q2 uses FCFS.",
    1,
    0
  ],
  [
    5,
    "smlq",
    "Which is a parameter of a multilevel feedback queue but NOT of a plain multilevel queue?",
    [
      "Method to determine when to upgrade or demote a process",
      "Number of queues",
      "Scheduling algorithm for each queue",
      "Scheduling among the queues"
    ],
    "طريقة الترقية والتنزيل خاصة بالـ feedback queue.",
    "Upgrade/demote rules exist only in the feedback queue.",
    0,
    0
  ],
  [
    5,
    "sthread",
    "When threads are supported by the OS, the scheduler schedules:",
    [
      "Threads, not processes",
      "Processes, not threads",
      "Only user-level threads",
      "Only the kernel"
    ],
    "إذا النظام يدعم الـ threads، الـ scheduler يجدول threads مو عمليات.",
    "With OS thread support, threads are scheduled.",
    0,
    0
  ],
  [
    5,
    "sthread",
    "Scheduling user-level threads onto LWPs where competition is within the process is:",
    [
      "Process-contention scope (PCS)",
      "System-contention scope (SCS)",
      "Dispatch latency",
      "Aging"
    ],
    "جدولة user threads على LWPs والمنافسة داخل العملية = PCS.",
    "Competition within the process is process-contention scope (PCS).",
    0,
    0
  ],
  [
    5,
    "sthread",
    "Kernel threads scheduled onto an available CPU, competing with all threads in the system, is:",
    [
      "System-contention scope (SCS)",
      "Process-contention scope (PCS)",
      "Many-to-one",
      "Convoy effect"
    ],
    "جدولة kernel threads على المعالج والمنافسة مع كل الـ threads = SCS.",
    "Competition among all system threads is system-contention scope (SCS).",
    0,
    0
  ],
  [
    5,
    "sthread",
    "Which is NOT listed as a multiple-processor architecture?",
    [
      "Single-core batch system",
      "Multicore CPUs",
      "NUMA systems",
      "Heterogeneous multiprocessing"
    ],
    "الأنواع: multicore، أنوية متعددة الـ threads، NUMA، وheterogeneous. «single-core batch» مو منها.",
    "Architectures: multicore, multithreaded cores, NUMA, heterogeneous — not single-core batch.",
    0,
    0
  ]
];

export const CH_NAMES = {
  "1": "Introduction",
  "2": "OS Services & Structures",
  "3": "Processes",
  "4": "Threads & Concurrency",
  "5": "CPU Scheduling"
};

export const EX = {
  "os": "تخيّل النظام مثل موظف الاستقبال في فندق: أنت (المستخدم) تطلب، وهو يتعامل مع الغرف والمطبخ والصيانة (الهاردوير) بدالك.",
  "view": "نفس المطعم: الزبون يبي أكله يجي بسرعة (user view)، والمدير يبي يستغل كل طاولة وكل طباخ (system view).",
  "def": "الكيرنل مثل قلب الجسم، شغّال دايماً. برامج النظام مثل الأعضاء اللي تجي معك من الولادة، والتطبيقات أشياء تركّبها أنت.",
  "ctrl": "الكنترولر مثل الكاشير اللي عنده درج (buffer)، والدرايفر مثل دليل التعليمات اللي يفهّم المدير كيف يتعامل مع هالكاشير.",
  "intr": "الـ interrupt مثل جرس الباب: توقف اللي بيدك، تحفظ وين وصلت (PC)، تشوف مين (vector)، تتصرّف (ISR)، وترجع تكمّل.",
  "stor": "الريجسترات جيبك، الـ cache شنطتك، الـ RAM مكتبك، والهارديسك المستودع. كل ما قرب أسرع وأصغر.",
  "cache": "مثل لما تحط الأغراض اللي تستخدمها كثير على مكتبك بدل ما تروح المستودع كل مرة.",
  "dma": "بدل ما المدير (CPU) ينقل الكراتين وحدة وحدة، يكلّف عامل (DMA) ينقل الشحنة كاملة ويبلّغه مرة وحدة لما يخلص.",
  "multi": "مثل طباخ عنده كذا طبخة: لما وحدة على النار تنتظر، يشتغل على الثانية بدل ما يوقف.",
  "boot": "الـ bootstrap مثل المفتاح اللي يشغّل السيارة: كود صغير في الـ ROM يشغّل المحرك الكبير (الكيرنل).",
  "dual": "user mode مثل الزبون في البنك، وkernel mode مثل الموظف داخل الخزنة. الـ mode bit هو البطاقة: 0 تدخل الخزنة، 1 تبقى برّا.",
  "svc": "خدمات النظام مثل خدمات المجمّع السكني: بعضها لك (مصعد، بوابة)، وبعضها لإدارة المجمّع نفسه (فواتير، حراسة).",
  "ui": "الـ CLI مثل إنك تكتب طلبك للنادل، والـ GUI مثل إنك تأشر على صورة الأكل في المنيو.",
  "sc": "الـ API مثل المنيو، والـ system call مثل الطلب اللي يوصل للمطبخ فعلياً. أنت تتعامل مع المنيو بس.",
  "param": "تمرير المعاملات: يا تعطيها باليد (registers)، يا تحطها في ظرف وتعطيه عنوانه (block)، يا تحطها في كومة (stack).",
  "types": "ستة أبواب للنظام: العمليات، الملفات، الأجهزة، المعلومات، التواصل، الحماية. كل system call يدخل من واحد منها.",
  "sysprog": "برامج النظام مثل الأدوات اللي تجي مع الجوال: مدير الملفات، الإعدادات، الآلة الحاسبة.",
  "design": "أهداف المستخدم = راحة الساكن. أهداف النظام = راحة المهندس اللي يبني ويصون.",
  "struct": "MS-DOS غرفة وحدة كل شي فيها. Monolithic بيت كبير بدون جدران داخلية. Layered عمارة أدوار. Microkernel شقة صغيرة والباقي برّا. Modules قطع ليغو تركّبها وقت الحاجة.",
  "pconcept": "البرنامج وصفة طبخ مكتوبة في كتاب (passive)، والـ process هو الطبخ نفسه وهو شغّال (active).",
  "pmem": "text = الوصفة، data = المكونات الثابتة، heap = أغراض تشتريها وقت الطبخ، stack = ملاحظات مؤقتة لكل خطوة.",
  "pstate": "مثل طابور المستشفى: New تسجيل، Ready في صالة الانتظار، Running عند الدكتور، Waiting ينتظر نتيجة التحليل، Terminated طلع.",
  "psched": "الـ context switch مثل لما الدكتور يبدّل مريض بمريض: يقفل ملف هذا ويفتح ملف ذاك، والوقت هذا ما فيه علاج لأحد.",
  "pcreate": "fork مثل نسخ ملف: نسختين متطابقة. وexec مثل إنك تمسح محتوى النسخة وتكتب فيها شي جديد.",
  "pterm": "zombie ولد خلص شغله وأبوه ما سأل عنه. orphan ولد أبوه راح قبله.",
  "ipc": "المنتج والمستهلك مثل الخباز والزبون والرف بينهم: الخباز يوقف لو الرف مليان، والزبون ينتظر لو فاضي.",
  "shm": "الـ race condition مثل اثنين يعدّلون نفس الرقم في ورقة بنفس اللحظة، وكل واحد يمسح شغل الثاني.",
  "msg": "direct مثل إنك ترسل لشخص برقمه مباشرة. indirect مثل صندوق بريد مشترك أي أحد عنده المفتاح يقدر ياخذ منه.",
  "tconcept": "الـ process بيت، والـ threads ساكنينه: يتشاركون المطبخ والصالة (code, data, files)، بس كل واحد له دفتره الخاص (stack, registers).",
  "tbenefit": "التزامن (concurrency) شخص واحد يطبخ طبختين بالتناوب. التوازي (parallelism) شخصين كل واحد يطبخ طبخة بنفس اللحظة.",
  "tuk": "خيوط المستخدم مثل موظفين يرتّبهم مديرهم داخل القسم والإدارة العليا (الكيرنل) ما تدري عنهم. خيوط الكيرنل الإدارة العليا تعرفهم بالاسم.",
  "tmodels": "Many-to-One: كل الموظفين يستخدمون سيارة وحدة، لو تعطّلت وقف الكل. One-to-One: كل موظف له سيارة. Many-to-Many: أسطول سيارات يتوزّع حسب الحاجة.",
  "tlib": "start() مثل إنك تكلّف شخص بمهمة، وjoin() مثل إنك تنتظره يرجع بالنتيجة قبل ما تعلنها.",
  "sbasic": "preemptive مثل حكم يقدر يوقف اللاعب بأي وقت. nonpreemptive اللاعب يكمّل لين يخلص أو يطلع بنفسه.",
  "scrit": "الـ scheduler مدرّب يختار اللاعب، والـ dispatcher الحكم المساعد اللي يدخّله الملعب فعلاً.",
  "sfcfs": "طابور الكاشير: لو قدامك واحد عربته مليانة وأنت معك علبة ماء، تنتظر كثير. هذا هو الـ convoy effect.",
  "ssjf": "كاشير ذكي يخدم اللي أغراضه أقل أول، فمتوسط الانتظار يصير أقل شي ممكن.",
  "srr": "مثل دور البلايستيشن بين الأخوان: كل واحد ياخذ 10 دقايق ويرجع لآخر الدور.",
  "sprio": "طوارئ المستشفى: الحالة الأخطر أول. والـ aging يعني اللي انتظر كثير ترتفع أولويته عشان ما ينتسى.",
  "smlq": "مثل مدرسة فيها فصول مستويات: في الـ feedback لو الطالب تأخر ينزل فصل، ولو تحسّن يطلع.",
  "sthread": "PCS منافسة داخل العائلة على سيارة البيت. SCS منافسة كل أهل الحي على الطريق."
};

export const CHS = [
  1,
  2,
  3,
  4,
  5
];

export const HOT_POINTS = [
  {
    "ch": 1,
    "en": "OS = <b>intermediary</b> between user and hardware. Goals: execute programs, <b>convenient</b>, <b>efficient</b>. Components: hardware → OS → application programs → users.",
    "ar": "النظام وسيط بين المستخدم والهاردوير. أهدافه: تشغيل البرامج، سهولة الاستخدام، والكفاءة. المكونات: هاردوير ← نظام ← تطبيقات ← مستخدمين."
  },
  {
    "ch": 1,
    "en": "Kernel = the one program running at all times. System programs ship with the OS but are not kernel. OS views: <b>resource allocator</b> + <b>control program</b>.",
    "ar": "الكيرنل هو البرنامج اللي يشتغل طول الوقت، وبرامج النظام تجي معه بس مو جزء من الكيرنل. النظام موزّع موارد وبرنامج تحكّم."
  },
  {
    "ch": 1,
    "en": "Interrupt vector = table of ISR addresses; save the <b>address of the interrupted instruction</b>; trap/exception = <b>software</b> interrupt (error or system call); OS is <b>interrupt driven</b>.",
    "ar": "الـ interrupt vector جدول عناوين ISRs، ولازم يحفظ عنوان التعليمة المقطوعة. الـ trap مقاطعة برمجية (خطأ أو system call). والنظام يشتغل بالمقاطعات."
  },
  {
    "ch": 1,
    "en": "Main memory = only large storage CPU accesses directly (volatile DRAM). DMA → <b>one interrupt per block</b>, CPU free meanwhile.",
    "ar": "الذاكرة الرئيسية الوحيدة اللي المعالج يوصل لها مباشرة (DRAM متطايرة). والـ DMA مقاطعة وحدة لكل block والمعالج فاضي."
  },
  {
    "ch": 1,
    "en": "Mode bit: <b>kernel = 0, user = 1</b>; boot starts in kernel mode; privileged instructions only in kernel; <b>timer</b> prevents infinite loops (setting it is privileged).",
    "ar": "الـ mode bit: الكيرنل = 0 والمستخدم = 1. الإقلاع يبدأ kernel، والتعليمات المميزة في kernel بس، والـ timer يمنع الحلقات اللانهائية وضبطه مميز."
  },
  {
    "ch": 1,
    "en": "Multiprogramming keeps CPU busy (switch on wait); timesharing: response <b>&lt; 1 second</b>; swapping; virtual memory.",
    "ar": "الـ multiprogramming يخلي المعالج مشغول (يبدّل لما شغلة تنتظر)، والـ timesharing استجابته أقل من ثانية، ومعهم swapping وذاكرة افتراضية."
  },
  {
    "ch": 2,
    "en": "Services for the user: UI, program execution, I/O, file systems, communications, error detection. For efficiency: <b>resource allocation, logging, protection & security</b>.",
    "ar": "خدمات للمستخدم: الواجهة، تشغيل البرامج، I/O، الملفات، التواصل، كشف الأخطاء. ولكفاءة النظام: توزيع الموارد، الـ logging، والحماية والأمن."
  },
  {
    "ch": 2,
    "en": "APIs: <b>Win32, POSIX (UNIX, Linux, Mac OS X), Java</b>; why API: portability + simpler. `printf()` → `write()`. Parameters: <b>registers</b> (simplest), <b>block</b> (Linux, Solaris), <b>stack</b> — block & stack don't limit count.",
    "ar": "الـ APIs: Win32 وPOSIX (UNIX وLinux وMac) وJava، وفايدتها النقل والسهولة. printf ← write. المعاملات: registers (الأبسط)، block (Linux وSolaris)، stack، وblock وstack ما يحدّون العدد."
  },
  {
    "ch": 2,
    "en": "6 types of system calls: process control (locks), file management, device management, information maintenance (time/date), communications, <b>protection</b> (permissions).",
    "ar": "6 أنواع system calls: التحكم بالعمليات (الأقفال)، الملفات، الأجهزة، صيانة المعلومات (الوقت والتاريخ)، التواصل، والحماية (الصلاحيات)."
  },
  {
    "ch": 2,
    "en": "Structures: MS-DOS <b>simple</b>; <b>monolithic</b> (fast, tightly coupled); <b>layered</b> (layer 0 = hardware, N = UI, easy debugging); <b>microkernel</b> (Mach, message passing, reliable but slower); <b>modules</b> (LKMs); <b>hybrid</b> (most modern).",
    "ar": "الهياكل: MS-DOS بسيط، monolithic سريع ومترابط، الطبقات (0 هاردوير وN واجهة، سهل التصحيح)، microkernel (Mach، رسائل، موثوق بس أبطأ)، وحدات LKM، وhybrid (أغلب الحديثة)."
  },
  {
    "ch": 3,
    "en": "Program = passive, process = active. Memory: <b>text</b> (code), <b>data</b> (globals), <b>heap</b> (dynamic), <b>stack</b> (calls); text/data fixed.",
    "ar": "البرنامج ساكن والعملية نشطة. ذاكرتها: text للكود، data للعامة، heap للديناميكي، stack للاستدعاءات، والـ text والـ data ثابتين."
  },
  {
    "ch": 3,
    "en": "States: new, <b>ready</b> (waiting for CPU), running (one per core), <b>waiting</b> (event), terminated. I/O done → <b>ready</b>; interrupt → ready; dispatch → running.",
    "ar": "الحالات: جديدة، جاهزة (تنتظر المعالج)، شغالة (وحدة لكل نواة)، منتظرة (حدث)، منتهية. انتهاء I/O ← جاهزة، مقاطعة ← جاهزة، dispatch ← شغالة."
  },
  {
    "ch": 3,
    "en": "PCB (task control block): state, PC, registers, scheduling, memory, accounting, I/O — <b>not the code</b>. Context switch = pure overhead.",
    "ar": "الـ PCB فيه الحالة والـ PC والـ registers والجدولة والذاكرة والمحاسبة والـ I/O، مو الكود. والـ context switch عبء خالص."
  },
  {
    "ch": 3,
    "en": "`fork()` → <b>0 in child</b>, child's pid in parent; `exec()` replaces memory; `wait()`; `exit()`; `abort()`. <b>Zombie</b> = parent didn't wait; <b>orphan</b> = parent exited; cascading termination.",
    "ar": "fork ترجع 0 للابن ورقم الابن للأب، exec يستبدل الذاكرة، wait ينتظر، exit ينهي، abort ينهي الابن. Zombie = الأب ما سوى wait، وOrphan = الأب طلع، وفيه cascading termination."
  },
  {
    "ch": 3,
    "en": "IPC: shared memory (user-controlled) vs message passing. Bounded buffer: empty <b>in == out</b>, full <b>(in+1) % SIZE == out</b>, holds <b>SIZE − 1</b>; counter++/-- → <b>race condition</b>.",
    "ar": "IPC: ذاكرة مشتركة (يتحكم فيها المستخدم) أو رسائل. الـ buffer فاضي إذا in == out ومليان إذا (in+1) % SIZE == out ويخزن SIZE − 1، وcounter++ و-- يسببون race condition."
  },
  {
    "ch": 3,
    "en": "Message passing: direct (one pair, automatic) vs indirect (mailboxes, many processes); blocking = <b>synchronous</b>; both blocking = <b>rendezvous</b>; zero capacity → sender waits.",
    "ar": "الرسائل: مباشر (زوج واحد وتلقائي) أو غير مباشر (mailboxes ولأكثر من عمليتين). الـ blocking = متزامن، والاثنين blocking = rendezvous، وسعة صفر المرسل ينتظر."
  },
  {
    "ch": 4,
    "en": "Thread owns <b>ID, PC, registers, stack</b>; shares code, data, files. Benefits: <b>responsiveness, resource sharing, economy, scalability</b>. Single core = concurrency, not parallelism.",
    "ar": "الـ thread له ID وPC وregisters وstack، ويتشارك الكود والبيانات والملفات. المزايا: الاستجابة، مشاركة الموارد، الاقتصاد، التوسع. ونواة وحدة = concurrency بدون parallelism."
  },
  {
    "ch": 4,
    "en": "Models: <b>many-to-one</b> (one blocks → all block; Green Threads), <b>one-to-one</b> (Windows, Linux), <b>many-to-many</b> (ThreadFiber). Kernel thread = LWP.",
    "ar": "النماذج: many-to-one (واحد يتعطل الكل يتعطل، Green Threads)، one-to-one (Windows وLinux)، many-to-many (ThreadFiber). والـ kernel thread = LWP."
  },
  {
    "ch": 5,
    "en": "Nonpreemptive = decisions only in cases 1 & 4 (→ waiting, terminate). Maximize CPU utilization & throughput; minimize turnaround, waiting, response. <b>TAT = CT − AT, WT = TAT − BT</b>.",
    "ar": "Nonpreemptive = القرار بس في الحالتين 1 و4. نزيد استغلال المعالج والـ throughput ونقلل الأوقات. TAT = CT − AT، وWT = TAT − BT."
  },
  {
    "ch": 5,
    "en": "FCFS 24,3,3 → <b>17</b>; order 3,3,24 → <b>3</b> (convoy effect). SJF 6,8,7,3 → <b>7</b> (optimal). SRTF example → <b>6.5</b>.",
    "ar": "FCFS على 24 و3 و3 ← 17، وبترتيب 3 و3 و24 ← 3 (convoy effect). SJF على 6 و8 و7 و3 ← 7 (الأمثل). ومثال SRTF ← 6.5."
  },
  {
    "ch": 5,
    "en": "RR q = 4 on 24,3,3 → <b>5.67</b>; wait ≤ (n−1)q; q huge → FCFS; 80% of bursts &lt; q. Priority: smallest = highest, example → <b>8.2</b>; starvation → <b>aging</b>.",
    "ar": "RR بـ q = 4 على 24 و3 و3 ← 5.67، والانتظار ≤ (n−1)q، وq كبير = FCFS، و80% من الـ bursts أقصر من q. الأولوية: الأصغر أعلى، والمثال ← 8.2، والتجويع حله aging."
  },
  {
    "ch": 5,
    "en": "MLFQ: Q0 RR q=8 → Q1 RR q=16 → Q2 FCFS; processes <b>move</b> between queues. Threads: PCS (within process) vs SCS (system-wide).",
    "ar": "MLFQ: Q0 بـ RR q=8 ← Q1 بـ RR q=16 ← Q2 بـ FCFS، والعمليات تتنقل بين الطوابير. والـ threads: PCS داخل العملية وSCS على مستوى النظام."
  }
];

export const FIGS = {
  "os": [
    [
      "img/os_8417_3a.webp",
      "Computer System Structure",
      "وش هو نظام التشغيل"
    ]
  ],
  "view": [
    [
      "img/os_8417_4a.webp",
      "What Operating Systems Do",
      "وش يسوي النظام (وجهتين نظر)"
    ],
    [
      "img/os_8417_4b.webp",
      "What Operating Systems Do",
      "وش يسوي النظام (وجهتين نظر)"
    ]
  ],
  "def": [
    [
      "img/os_8417_5a.webp",
      "Operating System Definition",
      "تعريف النظام"
    ]
  ],
  "ctrl": [
    [
      "img/os_8417_6a.webp",
      "Computer-System Operation",
      "الكنترولر والدرايفر"
    ],
    [
      "img/os_8417_6b.webp",
      "Data transfer and interrupts",
      "الكنترولر والدرايفر"
    ]
  ],
  "intr": [
    [
      "img/os_8417_7b.webp",
      "Common Functions of Interrupts",
      "المقاطعات"
    ],
    [
      "img/os_8417_8b.webp",
      "Interrupt Handling",
      "المقاطعات"
    ]
  ],
  "stor": [
    [
      "img/os_8417_10a.webp",
      "Storage Structure (Cont.)",
      "هيكل التخزين"
    ],
    [
      "img/os_8417_10b.webp",
      "Storage Definitions and Notation Review",
      "هيكل التخزين"
    ]
  ],
  "cache": [
    [
      "img/os_8417_11a.webp",
      "Storage Hierarchy",
      "هرمية التخزين والكاش"
    ]
  ],
  "dma": [
    [
      "img/os_8417_13a.webp",
      "Direct Memory Access Structure",
      "الوصول المباشر للذاكرة"
    ]
  ],
  "multi": [
    [
      "img/os_8417_14a.webp",
      "Multiprogramming and Multitasking",
      "تعدد البرامج والمهام"
    ]
  ],
  "boot": [
    [
      "img/os_8417_15a.webp",
      "Operating-System Operations",
      "الإقلاع وعمليات النظام"
    ],
    [
      "img/os_8417_15b.webp",
      "Operating-System Operations",
      "الإقلاع وعمليات النظام"
    ]
  ],
  "dual": [
    [
      "img/os_8417_16a.webp",
      "Dual-mode Operation",
      "وضعين التشغيل والتايمر"
    ],
    [
      "img/os_8417_16b.webp",
      "Transition from User to Kernel Mode",
      "وضعين التشغيل والتايمر"
    ]
  ],
  "svc": [
    [
      "img/os_8417_19a.webp",
      "Operating System Services (Cont.)",
      "خدمات النظام"
    ],
    [
      "img/os_8417_18a.webp",
      "Operating System Services",
      "خدمات النظام"
    ]
  ],
  "ui": [
    [
      "img/os_8417_21a.webp",
      "User Operating System Interface - GUI",
      "واجهات المستخدم"
    ],
    [
      "img/os_8417_21b.webp",
      "Touchscreen Interfaces",
      "واجهات المستخدم"
    ],
    [
      "img/os_8417_20a.webp",
      "Command Line interpreter",
      "واجهات المستخدم"
    ]
  ],
  "sc": [
    [
      "img/os_8417_24a.webp",
      "System Call Implementation",
      "استدعاءات النظام والـ API"
    ],
    [
      "img/os_8417_24b.webp",
      "System Call Implementation",
      "استدعاءات النظام والـ API"
    ],
    [
      "img/os_8417_23a.webp",
      "System Calls",
      "استدعاءات النظام والـ API"
    ]
  ],
  "param": [
    [
      "img/os_8417_25b.webp",
      "System Call Parameter Passing",
      "تمرير المعاملات"
    ]
  ],
  "types": [
    [
      "img/os_8417_28a.webp",
      "Types of System Calls (Cont.)",
      "أنواع الاستدعاءات (6)"
    ],
    [
      "img/os_8417_28b.webp",
      "Types of System Calls (Cont.)",
      "أنواع الاستدعاءات (6)"
    ]
  ],
  "sysprog": [
    [
      "img/os_8417_32a.webp",
      "System Services (Cont.)",
      "برامج النظام"
    ],
    [
      "img/os_8417_32b.webp",
      "System Services (Cont.)",
      "برامج النظام"
    ]
  ],
  "design": [
    [
      "img/os_8417_33a.webp",
      "Design and Implementation",
      "التصميم والتنفيذ"
    ],
    [
      "img/os_8417_33b.webp",
      "Implementation",
      "التصميم والتنفيذ"
    ]
  ],
  "struct": [
    [
      "img/os_8417_37a.webp",
      "Microkernels",
      "هياكل النظام"
    ],
    [
      "img/os_8417_38a.webp",
      "Modules",
      "هياكل النظام"
    ]
  ],
  "pconcept": [
    [
      "img/os_e9aa_3a.webp",
      "Process Concept",
      "مفهوم العملية"
    ]
  ],
  "pmem": [
    [
      "img/os_e9aa_4a.webp",
      "Process in Memory",
      "العملية في الذاكرة"
    ]
  ],
  "pstate": [
    [
      "img/os_e9aa_5a.webp",
      "Process State",
      "حالات العملية والـ PCB"
    ],
    [
      "img/os_e9aa_5b.webp",
      "Process State",
      "حالات العملية والـ PCB"
    ],
    [
      "img/os_e9aa_6b.webp",
      "Process Control Block (PCB)",
      "حالات العملية والـ PCB"
    ]
  ],
  "psched": [
    [
      "img/os_e9aa_9b.webp",
      "Context Switch",
      "جدولة العمليات وتبديل السياق"
    ]
  ],
  "pcreate": [
    [
      "img/os_e9aa_11a.webp",
      "Process Creation",
      "إنشاء العمليات"
    ],
    [
      "img/os_e9aa_11b.webp",
      "Process Creation",
      "إنشاء العمليات"
    ],
    [
      "img/os_e9aa_12b.webp",
      "Process Creation (Cont.)",
      "إنشاء العمليات"
    ]
  ],
  "pterm": [
    [
      "img/os_e9aa_14a.webp",
      "Process Termination",
      "إنهاء العمليات"
    ],
    [
      "img/os_e9aa_14b.webp",
      "Process Termination",
      "إنهاء العمليات"
    ]
  ],
  "ipc": [
    [
      "img/os_e9aa_16a.webp",
      "Interprocess Communication",
      "التواصل بين العمليات"
    ],
    [
      "img/os_e9aa_16b.webp",
      "Interprocess Communication",
      "التواصل بين العمليات"
    ]
  ],
  "shm": [
    [
      "img/os_e9aa_19a.webp",
      "Consumer Process – Shared Memory",
      "الذاكرة المشتركة وحالة السباق"
    ],
    [
      "img/os_e9aa_19b.webp",
      "What about Filling all the Buffers?",
      "الذاكرة المشتركة وحالة السباق"
    ],
    [
      "img/os_e9aa_18a.webp",
      "Bounded-Buffer – Shared-Memory Solution",
      "الذاكرة المشتركة وحالة السباق"
    ]
  ],
  "msg": [
    [
      "img/os_e9aa_23a.webp",
      "Implementation of Communication Link",
      "تبادل الرسائل"
    ],
    [
      "img/os_e9aa_23b.webp",
      "Direct Communication",
      "تبادل الرسائل"
    ],
    [
      "img/os_e9aa_25a.webp",
      "Indirect Communication (Cont.)",
      "تبادل الرسائل"
    ],
    [
      "img/os_e9aa_25b.webp",
      "Synchronization",
      "تبادل الرسائل"
    ]
  ],
  "tconcept": [
    [
      "img/os_cf3d_5.webp",
      "Threads Concept",
      "مفهوم الـ Threads"
    ],
    [
      "img/os_cf3d_4.webp",
      "Motivation",
      "مفهوم الـ Threads"
    ]
  ],
  "tbenefit": [
    [
      "img/os_cf3d_8.webp",
      "Benefits",
      "المميزات والتزامن مقابل التوازي"
    ]
  ],
  "tuk": [
    [
      "img/os_cf3d_11.webp",
      "User Threads and Kernel Threads",
      "خيوط المستخدم وخيوط الكيرنل"
    ],
    [
      "img/os_cf3d_13.webp",
      "User and Kernel Threads",
      "خيوط المستخدم وخيوط الكيرنل"
    ]
  ],
  "tmodels": [
    [
      "img/os_cf3d_15.webp",
      "Many-to-One",
      "نماذج الربط"
    ]
  ],
  "tlib": [
    [
      "img/os_cf3d_18.webp",
      "Thread Libraries",
      "مكتبات الخيوط وجافا"
    ],
    [
      "img/os_cf3d_19.webp",
      "Java Threads",
      "مكتبات الخيوط وجافا"
    ]
  ],
  "sbasic": [
    [
      "img/os_0818_4.webp",
      "Basic Concepts",
      "أساسيات الجدولة"
    ],
    [
      "img/os_0818_6.webp",
      "CPU Scheduler",
      "أساسيات الجدولة"
    ]
  ],
  "scrit": [
    [
      "img/os_0818_10.webp",
      "Dispatcher",
      "الـ Dispatcher ومعايير الجدولة"
    ],
    [
      "img/os_0818_11.webp",
      "Scheduling Criteria",
      "الـ Dispatcher ومعايير الجدولة"
    ]
  ],
  "sfcfs": [
    [
      "img/os_0818_14.webp",
      "FCFS Scheduling (Cont.)",
      "اللي يجي أول يُخدم أول"
    ],
    [
      "img/os_0818_13.webp",
      "First- Come, First-Served (FCFS) Scheduling",
      "اللي يجي أول يُخدم أول"
    ]
  ],
  "ssjf": [
    [
      "img/os_0818_15.webp",
      "Shortest-Job-First (SJF) Scheduling",
      "أقصر مهمة أولاً"
    ],
    [
      "img/os_0818_19.webp",
      "Example of Shortest-remaining-time-first",
      "أقصر مهمة أولاً"
    ]
  ],
  "srr": [
    [
      "img/os_0818_21.webp",
      "Round Robin (RR)",
      "الدور الدائري"
    ]
  ],
  "sprio": [
    [
      "img/os_0818_25.webp",
      "Priority Scheduling",
      "الجدولة بالأولوية"
    ]
  ],
  "smlq": [
    [
      "img/os_0818_31.webp",
      "Multilevel Feedback Queue",
      "الطوابير متعددة المستويات"
    ],
    [
      "img/os_0818_28.webp",
      "Multilevel Queue",
      "الطوابير متعددة المستويات"
    ]
  ],
  "sthread": [
    [
      "img/os_0818_33.webp",
      "Thread Scheduling",
      "جدولة الخيوط والمعالجات المتعددة"
    ]
  ]
};
