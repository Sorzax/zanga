// Course content. Question order is stable: saved mistakes refer to these indices.

export const TOPICS = [
  {
    "id": "inet",
    "ch": 1,
    "t": "What is the Internet?",
    "ar": "وش هو الإنترنت",
    "pts": [
      [
        "<b>Nuts and bolts view:</b> billions of connected computing devices (<b>hosts</b> = end systems) running network apps at the Internet's \"edge\".",
        "نظرة «المكونات»: مليارات الأجهزة المتصلة (تسمى <b>hosts</b> أو end systems) تشغّل تطبيقات شبكية على «أطراف» الإنترنت."
      ],
      [
        "<b>Packet switches</b> forward packets (chunks of data): <b>routers</b> and <b>switches</b>. <b>Communication links</b>: fiber, copper, radio, satellite; transmission rate = <b>bandwidth</b>.",
        "المحوّلات (routers و switches) تمرّر الحزم (أجزاء البيانات). وروابط الاتصال: ألياف ونحاس وراديو وأقمار صناعية، ومعدل الإرسال اسمه <b>bandwidth</b>."
      ],
      [
        "Internet: <b>\"network of networks\"</b> — interconnected ISPs.",
        "الإنترنت «شبكة من الشبكات»: مزودي خدمة (ISPs) مربوطين ببعض."
      ],
      [
        "<b>Protocols are everywhere:</b> they control sending and receiving of messages, e.g., HTTP (Web), streaming video, Skype, TCP, IP, WiFi, 4/5G, Ethernet.",
        "البروتوكولات في كل مكان: هي اللي تتحكم بإرسال واستقبال الرسائل، مثل HTTP وTCP وIP وWiFi و4G/5G وEthernet."
      ],
      [
        "Internet standards: <b>RFC</b> = Request for Comments; <b>IETF</b> = Internet Engineering Task Force.",
        "معايير الإنترنت: <b>RFC</b> يعني «طلب تعليقات» (وثائق المعايير)، و<b>IETF</b> هي الجهة الهندسية اللي تكتبها."
      ],
      [
        "<b>Services view:</b> infrastructure that provides services to applications (Web, streaming, email, games, e-commerce, social media…).",
        "نظرة «الخدمات»: الإنترنت بنية تحتية تقدم خدمات للتطبيقات (الويب، البث، الإيميل، الألعاب، التجارة…)."
      ],
      [
        "It provides a <b>programming interface</b> to distributed applications: \"hooks\" that let apps connect to and use the Internet transport service — analogous to the postal service.",
        "ويقدّم واجهة برمجية (programming interface) للتطبيقات الموزعة: «خطافات» تخلي التطبيق يتصل ويستخدم خدمة النقل، مثل خدمة البريد."
      ]
    ],
    "trap": [
      "Two views: <b>nuts and bolts</b> (hosts, switches, links, protocols) vs <b>services</b> (infrastructure + programming interface).",
      "فيه نظرتين: «المكونات» (أجهزة، محولات، روابط، بروتوكولات) و«الخدمات» (بنية تحتية + واجهة برمجية). لا تخلطهم."
    ],
    "idx": 0
  },
  {
    "id": "proto",
    "ch": 1,
    "t": "What's a Protocol?",
    "ar": "وش هو البروتوكول",
    "pts": [
      [
        "Human protocols: \"what's the time?\", \"I have a question\", introductions.",
        "بروتوكولات البشر: «كم الساعة؟»، «عندي سؤال»، التعارف."
      ],
      [
        "Network protocols: between <b>computers (devices)</b> rather than humans; <b>all communication activity in the Internet is governed by protocols</b>.",
        "بروتوكولات الشبكة: بين الأجهزة بدل البشر، وكل نشاط اتصال في الإنترنت تحكمه بروتوكولات."
      ],
      [
        "<b>Protocols define the format, order of messages</b> sent and received among network entities, and <b>actions taken</b> on message transmission and receipt.",
        "البروتوكول يحدد <b>شكل الرسائل وترتيبها</b> بين أطراف الشبكة، و<b>الأفعال</b> اللي تنسوى عند إرسال الرسالة أو استلامها."
      ],
      [
        "Rules for: … specific messages sent; … specific actions taken when a message is received, or other events.",
        "قواعد لـ: رسائل محددة تنرسل، وأفعال محددة تنسوى لما توصل رسالة أو يصير حدث ثاني."
      ]
    ],
    "trap": [
      "A protocol = <b>format + order</b> of messages + <b>actions</b>. Not just \"a language\".",
      "البروتوكول = <b>شكل + ترتيب</b> الرسائل + <b>الأفعال</b> عند الإرسال والاستلام."
    ],
    "idx": 1
  },
  {
    "id": "edge",
    "ch": 1,
    "t": "Network Edge & Access Networks",
    "ar": "أطراف الشبكة وشبكات الوصول",
    "pts": [
      [
        "<b>Network edge:</b> hosts — clients and servers; servers often in <b>data centers</b>.",
        "أطراف الشبكة: الأجهزة، عملاء (clients) وخوادم (servers)، والخوادم غالباً في مراكز البيانات."
      ],
      [
        "<b>Access networks, physical media:</b> wired, wireless communication links. <b>Network core:</b> interconnected routers, network of networks.",
        "شبكات الوصول والوسائط: روابط سلكية ولاسلكية. ولبّ الشبكة (core): راوترات مربوطة ببعض، شبكة من الشبكات."
      ],
      [
        "Q: How to connect end systems to edge router? <b>residential</b> access nets, <b>institutional</b> access networks (school, company), <b>mobile</b> access networks (WiFi, 4G/5G).",
        "كيف نوصل الأجهزة براوتر الطرف؟ شبكات وصول منزلية، ومؤسسية (جامعة، شركة)، وجوال (WiFi و4G/5G)."
      ],
      [
        "<b>Cable-based access:</b> frequency division multiplexing (<b>FDM</b>): different channels transmitted in different frequency bands.",
        "الوصول بالكيبل: تقسيم بالتردد (FDM)، كل قناة تنرسل في نطاق تردد مختلف."
      ],
      [
        "<b>HFC: hybrid fiber coax</b> — asymmetric: up to 40 Mbps – 1.2 Gbps downstream, 30–100 Mbps upstream. Homes <b>share</b> the access network to the cable headend.",
        "HFC (ألياف + كوأكس): غير متماثل، التنزيل من 40 Mbps إلى 1.2 Gbps والرفع 30–100 Mbps. والبيوت <b>تتشارك</b> شبكة الوصول لين الـ cable headend."
      ],
      [
        "<b>DSL:</b> uses the <b>existing telephone line</b> to the central office DSLAM; data goes to the Internet, voice to the telephone net. 24–52 Mbps <b>dedicated</b> downstream, 3.5–16 Mbps dedicated upstream.",
        "DSL: يستخدم خط الهاتف الموجود لين السنترال (DSLAM)؛ البيانات تروح للإنترنت والصوت لشبكة الهاتف. التنزيل 24–52 Mbps <b>مخصص</b> (مو مشترك) والرفع 3.5–16 Mbps."
      ],
      [
        "<b>Wireless access:</b> shared wireless access network connects end system to router via base station aka <b>\"access point\"</b>.",
        "الوصول اللاسلكي: شبكة لاسلكية مشتركة توصل الجهاز بالراوتر عن طريق محطة قاعدة اسمها «access point»."
      ],
      [
        "<b>Enterprise networks:</b> mix of wired and wireless links connecting switches and routers; Ethernet: 100 Mbps, 1 Gbps, 10 Gbps; WiFi: 11, 54, 450 Mbps.",
        "شبكات المؤسسات: خليط سلكي ولاسلكي يربط switches وراوترات؛ Ethernet بسرعات 100 Mbps و1 و10 Gbps، وWiFi بسرعات 11 و54 و450 Mbps."
      ],
      [
        "<b>Data center networks:</b> high-bandwidth links (10s to 100s Gbps) connect hundreds to thousands of servers together, and to the Internet.",
        "شبكات مراكز البيانات: روابط عالية جداً (عشرات لمئات Gbps) تربط مئات لآلاف الخوادم ببعض وبالإنترنت."
      ]
    ],
    "trap": [
      "Cable (HFC) is <b>shared</b> to the headend; DSL is <b>dedicated</b> to the central office.",
      "الكيبل (HFC) <b>مشترك</b> بين البيوت، والـ DSL <b>مخصص</b> لكل خط. سؤال مشهور."
    ],
    "idx": 2
  },
  {
    "id": "media",
    "ch": 1,
    "t": "Sending Packets & Physical Media",
    "ar": "إرسال الحزم والوسائط الفيزيائية",
    "pts": [
      [
        "Host sending function: takes application message, breaks it into smaller chunks known as <b>packets, of length L bits</b>, and transmits the packet into the access network at <b>transmission rate R</b>.",
        "الجهاز ياخذ رسالة التطبيق، يقسمها لأجزاء أصغر اسمها <b>حزم طولها L بت</b>، ويرسلها لشبكة الوصول بـ<b>معدل إرسال R</b>."
      ],
      [
        "R = link transmission rate, aka <b>link capacity</b>, aka <b>link bandwidth</b>.",
        "R هو معدل إرسال الرابط، ويسمى سعة الرابط أو الـ bandwidth."
      ],
      [
        "<b>Bit:</b> propagates between transmitter/receiver pairs. <b>Physical link:</b> what lies between transmitter & receiver.",
        "البت ينتشر بين المرسل والمستقبل، والرابط الفيزيائي هو اللي بينهم."
      ],
      [
        "<b>Guided media:</b> signals propagate in solid media: copper, fiber, coax. <b>Unguided media:</b> signals propagate freely, e.g., radio.",
        "وسائط موجّهة: الإشارة تمشي في وسط صلب (نحاس، ألياف، كوأكس). وغير موجّهة: الإشارة تنتشر بحرية مثل الراديو."
      ],
      [
        "<b>Coaxial cable:</b> two concentric copper conductors; bidirectional; broadband: multiple frequency channels on cable, 100's Mbps per channel.",
        "الكيبل المحوري (coax): موصلين نحاس متحدين المركز، باتجاهين، و broadband يعني قنوات تردد متعددة، مئات Mbps لكل قناة."
      ],
      [
        "<b>Wireless radio:</b> signal carried in various \"bands\" in the electromagnetic spectrum; no physical \"wire\"; broadcast, <b>\"half-duplex\"</b>; affected by reflection, obstruction by objects, interference/noise.",
        "الراديو اللاسلكي: الإشارة في نطاقات من الطيف الكهرومغناطيسي، بدون سلك، بث و<b>half-duplex</b> (اتجاه واحد بنفس الوقت)، ويتأثر بالانعكاس والعوائق والتشويش."
      ],
      [
        "Radio link types: <b>WiFi</b> 10–100's Mbps over 10's of meters; <b>4G/5G</b> 10's Mbps over ~10 km; <b>Bluetooth</b> cable replacement, short distances; <b>terrestrial microwave</b> point-to-point, 45 Mbps; <b>satellite</b> up to &lt;100 Mbps (Starlink), <b>270 msec</b> end-end delay (geostationary).",
        "أنواع الراديو: WiFi لعشرات الأمتار، 4G/5G لحوالي 10 كم، Bluetooth بديل الكيبل لمسافات قصيرة، المايكروويف الأرضي نقطة لنقطة 45 Mbps، والأقمار الصناعية أقل من 100 Mbps مع تأخير <b>270 ms</b> للمدار الثابت."
      ]
    ],
    "trap": [
      "Coax and fiber are <b>guided</b>; radio is <b>unguided</b>. Geostationary satellite delay = <b>270 msec</b>.",
      "الكوأكس والألياف <b>موجّهة</b>، والراديو <b>غير موجّه</b>. وتأخير القمر الثابت 270 ms."
    ],
    "idx": 3
  },
  {
    "id": "core",
    "ch": 1,
    "t": "Network Core: Packet Switching",
    "ar": "لبّ الشبكة: تحويل الحزم",
    "pts": [
      [
        "Network core: <b>mesh of interconnected routers</b>.",
        "لبّ الشبكة: شبكة متشابكة من الراوترات."
      ],
      [
        "<b>Packet-switching:</b> hosts break application-layer messages into packets; the network forwards packets from one router to the next, across links on the path from source to destination.",
        "تحويل الحزم: الأجهزة تقسم الرسائل لحزم، والشبكة تمرر كل حزمة من راوتر للي بعده على المسار من المصدر للوجهة."
      ],
      [
        "<b>Forwarding</b> (aka \"switching\"): <b>local</b> action: move arriving packets from router's input link to the appropriate output link.",
        "التمرير (forwarding): فعل <b>محلي</b> داخل الراوتر، ينقل الحزمة من رابط الدخول للرابط الخارج المناسب."
      ],
      [
        "<b>Routing:</b> <b>global</b> action: determine source-destination paths taken by packets (routing algorithms).",
        "التوجيه (routing): فعل <b>عام</b> على مستوى الشبكة، يحدد المسار الكامل من المصدر للوجهة بخوارزميات التوجيه."
      ],
      [
        "<b>Packet transmission delay:</b> takes <b>L/R</b> seconds to transmit (push out) an L-bit packet into a link at R bps.",
        "تأخير الإرسال: تحتاج <b>L/R</b> ثانية عشان تدفع حزمة طولها L بت على رابط سرعته R."
      ],
      [
        "<b>Store and forward:</b> the <b>entire packet</b> must arrive at the router before it can be transmitted on the next link.",
        "خزّن ثم مرّر: لازم <b>الحزمة كاملة</b> توصل الراوتر قبل ما يرسلها للرابط اللي بعده."
      ],
      [
        "<b>Queueing and loss:</b> if arrival rate (bps) to a link exceeds its transmission rate for some period: packets <b>queue</b>, waiting to be transmitted; packets can be <b>dropped (lost)</b> if the router's memory (buffer) fills up.",
        "الطوابير والفقد: إذا معدل الوصول أكبر من معدل الإرسال لفترة: الحزم تنتظر في <b>طابور</b>، وممكن <b>تنفقد</b> إذا امتلأت ذاكرة الراوتر (buffer)."
      ]
    ],
    "trap": [
      "Forwarding = <b>local</b> (inside one router); routing = <b>global</b> (whole path). Store-and-forward: 1 hop costs L/R, so N links cost <b>N·L/R</b>.",
      "التمرير <b>محلي</b> والتوجيه <b>عام</b>. ومع store-and-forward كل رابط ياخذ L/R، فـ N روابط = N·L/R."
    ],
    "idx": 4
  },
  {
    "id": "circuit",
    "ch": 1,
    "t": "Circuit Switching vs Packet Switching",
    "ar": "تحويل الدوائر مقابل تحويل الحزم",
    "pts": [
      [
        "<b>Circuit switching:</b> end-end resources allocated to, <b>reserved</b> for a \"call\" between source and destination.",
        "تحويل الدوائر: الموارد من الطرف للطرف <b>محجوزة</b> للمكالمة بين المصدر والوجهة."
      ],
      [
        "In the diagram, each link has four circuits; the call gets the 2nd circuit in the top link and the 1st circuit in the right link.",
        "في الرسم كل رابط فيه 4 دوائر، والمكالمة أخذت الدائرة الثانية في الرابط العلوي والأولى في الرابط اليمين."
      ],
      [
        "<b>Dedicated resources: no sharing</b> → circuit-like (<b>guaranteed</b>) performance; circuit segment is <b>idle</b> if not used by the call. Commonly used in traditional <b>telephone networks</b>.",
        "موارد مخصصة <b>بدون مشاركة</b>، فالأداء <b>مضمون</b>، لكن الدائرة تبقى <b>فاضية</b> إذا المكالمة ما استخدمتها. تُستخدم في شبكات الهاتف التقليدية."
      ],
      [
        "<b>FDM:</b> frequencies divided into narrow frequency bands; each call gets its own band and can transmit at the max rate of that narrow band.",
        "FDM: الترددات تنقسم لنطاقات ضيقة، كل مكالمة لها نطاقها وترسل بأعلى سرعة لهذا النطاق الضيق."
      ],
      [
        "<b>TDM:</b> time divided into slots; each call gets periodic slot(s) and can transmit at the maximum rate of the (wider) frequency band <b>only during its time slot(s)</b>.",
        "TDM: الوقت ينقسم لفترات (slots)، كل مكالمة لها فترات دورية، وترسل بأعلى سرعة للنطاق الكامل لكن <b>بس وقت فترتها</b>."
      ],
      [
        "Example: 1 Gb/s link; each user: 100 Mb/s when \"active\", active 10% of time. <b>Circuit-switching: 10 users</b>. Packet switching: with <b>35 users</b>, probability &gt; 10 active at the same time is less than .0004.",
        "مثال: رابط 1 Gb/s، كل مستخدم يحتاج 100 Mb/s لما يكون نشط، ونشط 10% من الوقت. تحويل الدوائر يخدم <b>10 مستخدمين</b> بس، وتحويل الحزم يخدم <b>35</b> واحتمال إن أكثر من 10 ينشطون بنفس الوقت أقل من 0.0004."
      ],
      [
        "Packet switching: <b>great for bursty traffic</b> (sometimes has data to send, sometimes not) — resource sharing, simpler, <b>no call setup</b>. But: <b>excessive congestion possible</b> (delay and loss from buffer overflow) → protocols needed for reliable data transfer and congestion control.",
        "تحويل الحزم: ممتاز للترافيك المتقطع (مرة عندك بيانات ومرة لا)، فيه مشاركة موارد، أبسط، و<b>بدون إعداد مكالمة</b>. لكن ممكن يصير <b>ازدحام شديد</b> (تأخير وفقد)، فنحتاج بروتوكولات للنقل الموثوق والتحكم بالازدحام."
      ]
    ],
    "trap": [
      "1 Gb/s ÷ 100 Mb/s = <b>10</b> users with circuit switching; packet switching supports <b>35</b> (more users, no guarantee).",
      "1 Gb/s ÷ 100 Mb/s = <b>10</b> مستخدمين بالدوائر، والحزم تخدم <b>35</b>. حفظ الأرقام مهم."
    ],
    "idx": 5
  },
  {
    "id": "istruct",
    "ch": 1,
    "t": "Internet Structure: Network of Networks",
    "ar": "بنية الإنترنت: شبكة الشبكات",
    "pts": [
      [
        "Hosts connect to the Internet via <b>access ISPs</b> (Internet Service Providers); access ISPs in turn must be interconnected so that any two hosts can send packets to each other.",
        "الأجهزة تتصل بالإنترنت عن طريق مزودي الوصول (access ISPs)، وهم لازم يكونون مربوطين ببعض عشان أي جهازين يقدرون يتراسلون."
      ],
      [
        "Connecting each access ISP to each other directly <b>doesn't scale: O(N²) connections</b>.",
        "ربط كل ISP بكل ISP مباشرة <b>ما يتوسع</b>: يحتاج O(N²) اتصال."
      ],
      [
        "Option: connect each access ISP to one <b>global transit ISP</b>; customer and provider ISPs have an <b>economic agreement</b>.",
        "الحل: كل ISP يتصل بـ ISP عالمي للعبور (transit)، وبين العميل والمزود اتفاق تجاري."
      ],
      [
        "If one global ISP is a viable business, there will be <b>competitors</b>… who will want to be connected; <b>regional networks</b> may arise to connect access nets to ISPs.",
        "إذا الـ ISP العالمي مربح بيطلع له <b>منافسين</b> يبون يتصلون ببعض، وتطلع <b>شبكات إقليمية</b> تربط شبكات الوصول بالـ ISPs."
      ],
      [
        "<b>Content provider networks</b> (e.g., Google, Microsoft, Akamai) may run their own network to bring services and content close to end users.",
        "شبكات مزودي المحتوى (Google وMicrosoft وAkamai) ممكن تشغّل شبكتها الخاصة عشان تقرّب المحتوى من المستخدمين."
      ],
      [
        "At the \"center\": a small # of well-connected large networks — <b>\"tier-1\" commercial ISPs</b> (e.g., Level 3, Sprint, AT&T, NTT) with national & international coverage, and content provider networks: private networks that connect their data centers to the Internet, often <b>bypassing</b> tier-1 and regional ISPs.",
        "في «المركز»: عدد قليل من الشبكات الكبيرة: <b>tier-1 ISPs</b> التجارية (Level 3 وSprint وAT&T وNTT) بتغطية محلية ودولية، وشبكات المحتوى الخاصة اللي تربط مراكز بياناتها بالإنترنت وغالباً <b>تتجاوز</b> tier-1 والإقليمية."
      ]
    ],
    "trap": [
      "Full mesh of N ISPs = <b>O(N²)</b> → doesn't scale. Content providers <b>bypass</b> tier-1.",
      "ربط الكل بالكل O(N²) وما يتوسع، وشبكات المحتوى <b>تتجاوز</b> tier-1."
    ],
    "idx": 6
  },
  {
    "id": "delay",
    "ch": 1,
    "t": "Packet Delay: Four Sources",
    "ar": "تأخير الحزمة: أربعة مصادر",
    "pts": [
      [
        "Packets queue in router buffers waiting for their turn; queue length grows when arrival rate to the link (temporarily) exceeds output link capacity; <b>packet loss</b> occurs when memory to hold queued packets fills up.",
        "الحزم تنتظر في ذاكرة الراوتر، والطابور يطول لما معدل الوصول يتعدى سعة الرابط مؤقتاً، والفقد يصير لما الذاكرة تمتلئ."
      ],
      [
        "<b>d_{nodal} = d_{proc} + d_{queue} + d_{trans} + d_{prop}</b>",
        "التأخير في العقدة = المعالجة + الطابور + الإرسال + الانتشار."
      ],
      [
        "<b>d_{proc}: nodal processing</b> — check bit errors, determine output link; typically &lt; microsecs.",
        "المعالجة: فحص أخطاء البت وتحديد رابط الخروج، عادة أقل من ميكروثانية."
      ],
      [
        "<b>d_{queue}: queueing delay</b> — time waiting at output link for transmission; depends on <b>congestion level</b> of router.",
        "الطابور: وقت الانتظار عند رابط الخروج، ويعتمد على <b>مستوى الازدحام</b>."
      ],
      [
        "<b>d_{trans}: transmission delay = L/R</b> (L: packet length in bits, R: link transmission rate in bps).",
        "الإرسال: <b>L/R</b> (طول الحزمة ÷ سرعة الرابط)."
      ],
      [
        "<b>d_{prop}: propagation delay = d/s</b> (d: length of physical link, s: propagation speed ~2×10^{8} m/sec).",
        "الانتشار: <b>d/s</b> (طول الرابط ÷ سرعة الانتشار، تقريباً 2×10^{8} م/ث)."
      ],
      [
        "<b>Caravan analogy:</b> car ~ bit, caravan ~ packet, toll service ~ link transmission. Toll booth takes 12 sec per car; 10 cars; 100 km at 100 km/hr → push caravan through booth = 12×10 = <b>120 sec</b>; last car propagates 100 km = <b>1 hr</b> → <b>A: 62 minutes</b>.",
        "تشبيه القافلة: السيارة = بت، القافلة = حزمة، كشك الرسوم = الإرسال. 12 ثانية لكل سيارة × 10 = 120 ثانية، والمسافة 100 كم بسرعة 100 كم/س = ساعة، فالجواب <b>62 دقيقة</b>."
      ],
      [
        "If cars propagate at 1000 km/hr and the booth takes 1 min per car: <b>Yes!</b> after 7 min the first car arrives at the second booth; three cars still at the first booth.",
        "لو السرعة 1000 كم/س والكشك دقيقة لكل سيارة: أول سيارة توصل الكشك الثاني بعد 7 دقايق، و3 سيارات للحين عند الأول. يعني البت الأول يوصل قبل ما تخلص الحزمة إرسال."
      ]
    ],
    "trap": [
      "<b>Transmission</b> (L/R) depends on packet size and rate, <b>not distance</b>; <b>propagation</b> (d/s) depends on distance, <b>not packet size</b>.",
      "الإرسال L/R يعتمد على الحجم والسرعة <b>مو المسافة</b>، والانتشار d/s يعتمد على المسافة <b>مو الحجم</b>. أشهر فخ!"
    ],
    "idx": 7
  },
  {
    "id": "queue",
    "ch": 1,
    "t": "Queueing Delay, Traceroute & Loss",
    "ar": "تأخير الطابور وtraceroute والفقد",
    "pts": [
      [
        "a: average packet arrival rate; L: packet length (bits); R: link bandwidth. <b>Traffic intensity = La/R</b>.",
        "a متوسط وصول الحزم، L طولها، R سرعة الرابط. <b>شدة الترافيك = La/R</b>."
      ],
      [
        "La/R ~ 0: avg. queueing delay <b>small</b>. La/R → 1: avg. queueing delay <b>large</b>. La/R &gt; 1: more \"work\" arriving than can be serviced — average delay <b>infinite</b>!",
        "إذا La/R قريب من صفر التأخير صغير، وإذا يقرب من 1 التأخير كبير، وإذا أكبر من 1 الشغل الواصل أكثر من اللي ينخدم والتأخير <b>لا نهائي</b>."
      ],
      [
        "<b>traceroute</b> program: provides delay measurement from source to each router along the end-end path towards destination.",
        "برنامج traceroute يقيس التأخير من المصدر لكل راوتر على المسار للوجهة."
      ],
      [
        "For all i: sends <b>three packets</b> that will reach router i (with <b>time-to-live</b> field value of i); router i returns packets to sender; sender measures the time interval between transmission and reply.",
        "لكل راوتر i: يرسل <b>3 حزم</b> قيمة TTL فيها i، فتوقف عند الراوتر i ويرجعها، والمرسل يقيس الوقت بين الإرسال والرد."
      ],
      [
        "A <b>*</b> in traceroute output means no response (probe lost, router not replying).",
        "النجمة * في النتيجة تعني ما جا رد (الحزمة ضاعت أو الراوتر ما يرد)."
      ],
      [
        "<b>Packet loss:</b> queue (aka buffer) preceding the link has <b>finite capacity</b>; a packet arriving to a full queue is dropped (lost); lost packet may be retransmitted by previous node, by source end system, or not at all.",
        "فقد الحزم: الطابور قبل الرابط سعته <b>محدودة</b>، والحزمة اللي توصل وهو مليان تنرمى، وممكن تنعاد من العقدة السابقة أو من المصدر أو ما تنعاد أبد."
      ]
    ],
    "trap": [
      "La/R &gt; 1 → delay <b>infinite</b> (not just large). Traceroute sends <b>3</b> probes per router using <b>TTL = i</b>.",
      "إذا La/R أكبر من 1 التأخير <b>لا نهائي</b>. وtraceroute يرسل <b>3</b> لكل راوتر بـ TTL = i."
    ],
    "idx": 8
  },
  {
    "id": "thru",
    "ch": 1,
    "t": "Throughput",
    "ar": "الإنتاجية (Throughput)",
    "pts": [
      [
        "<b>Throughput:</b> rate (bits/time unit) at which bits are being sent from sender to receiver. <b>Instantaneous:</b> rate at a given point in time; <b>average:</b> rate over a longer period of time.",
        "الإنتاجية: معدل وصول البتات من المرسل للمستقبل. لحظية (في لحظة معينة) أو متوسطة (على فترة أطول)."
      ],
      [
        "Server with file of F bits to send to client; link capacities R_{s} and R_{c}.",
        "خادم عنده ملف حجمه F بت يرسله للعميل عبر رابطين سعتهم R_{s} و R_{c}."
      ],
      [
        "R_{s} &lt; R_{c}: average end-end throughput = <b>R_{s}</b>. R_{s} &gt; R_{c}: throughput = <b>R_{c}</b>.",
        "إذا R_{s} أصغر الإنتاجية = R_{s}، وإذا R_{c} أصغر = R_{c}. يعني الأصغر يحكم."
      ],
      [
        "<b>Bottleneck link:</b> link on end-end path that constrains end-end throughput.",
        "رابط عنق الزجاجة: الرابط اللي يحدد الإنتاجية على المسار."
      ],
      [
        "Network scenario: 10 connections (fairly) share backbone bottleneck link R bits/sec → per-connection end-end throughput: <b>min(R_{c}, R_{s}, R/10)</b>. In practice: R_{c} or R_{s} is often the bottleneck.",
        "سيناريو: 10 اتصالات تتشارك رابط رئيسي R، فإنتاجية كل اتصال = <b>min(R_{c}, R_{s}, R/10)</b>، وغالباً R_{c} أو R_{s} هو عنق الزجاجة."
      ]
    ],
    "trap": [
      "Throughput = the <b>minimum</b> along the path (not the sum or average). Shared link → divide by number of connections.",
      "الإنتاجية = <b>أصغر</b> رابط على المسار (مو مجموع ولا متوسط)، والرابط المشترك تقسمه على عدد الاتصالات."
    ],
    "idx": 9
  },
  {
    "id": "sec",
    "ch": 1,
    "t": "Network Security",
    "ar": "أمن الشبكات",
    "pts": [
      [
        "Internet not originally designed with (much) security in mind: original vision \"a group of mutually trusting users attached to a transparent network\"; designers playing \"catch-up\"; security considerations in <b>all layers</b>.",
        "الإنترنت ما انصمم أصلاً مع أمن: الفكرة كانت «مستخدمين يثقون ببعض على شبكة شفافة»، والمصممين الحين يلحقون، والأمن لازم في <b>كل الطبقات</b>."
      ],
      [
        "We need to think about: how bad guys can attack, how to defend, how to design architectures immune to attacks.",
        "نفكر: كيف يهاجم المخترق، كيف ندافع، وكيف نصمم معمارية محمية."
      ],
      [
        "<b>Packet \"sniffing\":</b> broadcast media (shared Ethernet, wireless); <b>promiscuous</b> network interface reads/records all packets (e.g., including passwords!) passing by.",
        "التنصت (sniffing): على الوسائط المشتركة (Ethernet مشترك، لاسلكي)، كرت شبكة في وضع promiscuous يقرأ ويسجل كل الحزم اللي تمر (حتى الباسوردات)."
      ],
      [
        "<b>IP spoofing:</b> injection of a packet with a <b>false source address</b>.",
        "انتحال IP: حقن حزمة بعنوان مصدر <b>مزيّف</b>."
      ],
      [
        "<b>Denial of Service (DoS):</b> attackers make resources (server, bandwidth) unavailable to legitimate traffic by overwhelming them with bogus traffic: 1. select target, 2. break into hosts around the network (see <b>botnet</b>), 3. send packets to target from compromised hosts.",
        "حجب الخدمة (DoS): يخلي الموارد (خادم، bandwidth) مو متاحة للمستخدمين الحقيقيين بإغراقها بترافيك مزيف: 1. يختار هدف، 2. يخترق أجهزة حول الشبكة (botnet)، 3. يرسل حزم للهدف منها."
      ],
      [
        "Lines of defense: <b>authentication</b> (proving you are who you say you are; cellular has SIM hardware identity), <b>confidentiality</b> via encryption, <b>integrity checks</b> (digital signatures prevent/detect tampering), <b>access restrictions</b> (password-protected VPNs), <b>firewalls</b>.",
        "خطوط الدفاع: <b>المصادقة</b> (تثبت إنك أنت، والجوال عنده SIM)، <b>السرية</b> بالتشفير، <b>فحص السلامة</b> (التوقيع الرقمي يكشف التلاعب)، <b>تقييد الوصول</b> (VPN بباسورد)، و<b>الجدار الناري</b>."
      ],
      [
        "<b>Firewalls:</b> specialized \"middleboxes\" in access and core networks; <b>off-by-default</b>: filter incoming packets to restrict senders, receivers, applications; detecting/reacting to DoS attacks.",
        "الجدار الناري: أجهزة وسيطة متخصصة، <b>مقفلة افتراضياً</b>، تفلتر الحزم الداخلة حسب المرسل والمستقبل والتطبيق، وتكشف وتتصدى لـ DoS."
      ]
    ],
    "trap": [
      "Spoofing = <b>fake source address</b>; sniffing = <b>reading</b> packets; DoS = <b>overwhelming</b> with bogus traffic.",
      "الانتحال = عنوان مصدر <b>مزيّف</b>، التنصت = <b>قراءة</b> الحزم، DoS = <b>إغراق</b> بترافيك مزيف."
    ],
    "idx": 10
  },
  {
    "id": "layers",
    "ch": 1,
    "t": "Protocol Layers: Internet Stack",
    "ar": "طبقات البروتوكولات",
    "pts": [
      [
        "Networks are complex, with many \"pieces\": hosts, routers, links of various media, applications, protocols, hardware, software.",
        "الشبكات معقدة وفيها قطع كثير: أجهزة، راوترات، روابط، تطبيقات، بروتوكولات، هاردوير وسوفتوير."
      ],
      [
        "<b>Why layering?</b> Explicit structure allows identification and relationship of the system's pieces (layered reference model); <b>modularization</b> eases maintenance and updating: a change in a layer's service implementation is <b>transparent</b> to the rest of the system.",
        "ليش طبقات؟ الهيكل الواضح يعرّف القطع وعلاقتها، والتقسيم يسهّل الصيانة والتحديث: تغيير طريقة تنفيذ طبقة ما يأثر (شفاف) على باقي النظام."
      ],
      [
        "<b>application:</b> supporting network applications — HTTP, IMAP, SMTP, DNS.",
        "التطبيقات: تدعم تطبيقات الشبكة، مثل HTTP وIMAP وSMTP وDNS."
      ],
      [
        "<b>transport:</b> <b>process-process</b> data transfer — TCP, UDP.",
        "النقل: نقل البيانات من <b>عملية لعملية</b>، مثل TCP وUDP."
      ],
      [
        "<b>network:</b> routing of <b>datagrams</b> from source to destination — IP, routing protocols.",
        "الشبكة: توجيه الـ datagrams من المصدر للوجهة، مثل IP وبروتوكولات التوجيه."
      ],
      [
        "<b>link:</b> data transfer between <b>neighboring</b> network elements — Ethernet, 802.11 (WiFi), PPP.",
        "الربط (link): نقل البيانات بين عناصر الشبكة <b>المتجاورة</b>، مثل Ethernet وWiFi وPPP."
      ],
      [
        "<b>physical:</b> bits \"on the wire\".",
        "الفيزيائية: البتات على السلك."
      ]
    ],
    "trap": [
      "Order top→bottom: <b>Application, Transport, Network, Link, Physical</b> (5 layers). DNS is an <b>application</b>-layer protocol.",
      "الترتيب من فوق: تطبيقات، نقل، شبكة، ربط، فيزيائية (5 طبقات). والـ DNS بروتوكول <b>تطبيقات</b>."
    ],
    "idx": 11
  },
  {
    "id": "encap",
    "ch": 1,
    "t": "Encapsulation & the OSI Model",
    "ar": "التغليف ونموذج OSI",
    "pts": [
      [
        "Application exchanges <b>messages</b> (M) to implement some application service using services of the transport layer.",
        "التطبيق يتبادل <b>رسائل</b> (M) باستخدام خدمات طبقة النقل."
      ],
      [
        "Transport-layer protocol encapsulates M with transport-layer header H_{t} to create a <b>segment</b> [H_{t} | M].",
        "النقل يغلّف الرسالة بترويسة H_{t} ويطلع <b>segment</b>."
      ],
      [
        "Network-layer protocol encapsulates the segment with header H_{n} to create a <b>datagram</b> [H_{n} | [H_{t} | M]].",
        "الشبكة تغلّف الـ segment بترويسة H_{n} ويطلع <b>datagram</b>."
      ],
      [
        "Link-layer protocol encapsulates the datagram with header H_{l} to create a <b>frame</b>; link layer transfers it from host to <b>neighboring</b> host.",
        "الربط يغلّف الـ datagram بترويسة H_{l} ويطلع <b>frame</b>، وينقله للجهاز المجاور."
      ],
      [
        "Encapsulation = <b>Matryoshka dolls</b> (stacking dolls): message ⊂ segment ⊂ datagram ⊂ frame.",
        "التغليف مثل الدمى الروسية: الرسالة داخل segment داخل datagram داخل frame."
      ],
      [
        "End-end view: a <b>switch</b> implements link + physical; a <b>router</b> implements network + link + physical; hosts implement all five layers.",
        "من الطرف للطرف: الـ <b>switch</b> يشتغل على الربط والفيزيائية، والـ <b>router</b> على الشبكة والربط والفيزيائية، والأجهزة الطرفية كل الخمس."
      ],
      [
        "<b>ISO/OSI</b> seven-layer reference model adds two layers not found in the Internet stack: <b>presentation</b> (allow applications to interpret meaning of data, e.g., encryption, compression, machine-specific conventions) and <b>session</b> (synchronization, checkpointing, recovery of data exchange).",
        "نموذج OSI سبع طبقات فيه طبقتين مو موجودة في الإنترنت: <b>presentation</b> (تفسير معنى البيانات: تشفير، ضغط، أعراف الجهاز) و<b>session</b> (المزامنة ونقاط الحفظ واستعادة تبادل البيانات)."
      ],
      [
        "Internet stack \"missing\" these layers: these services, if needed, <b>must be implemented in the application</b>.",
        "الإنترنت «ناقص» هالطبقتين، وإذا احتجت خدماتهم <b>التطبيق نفسه</b> يسويها."
      ]
    ],
    "trap": [
      "Names per layer: application = <b>message</b>, transport = <b>segment</b>, network = <b>datagram</b>, link = <b>frame</b>.",
      "الأسماء: التطبيق message، النقل segment، الشبكة datagram، الربط frame. يجي سؤال أكيد."
    ],
    "idx": 12
  },
  {
    "id": "appar",
    "ch": 2,
    "t": "Network Apps: Client-Server vs P2P",
    "ar": "تطبيقات الشبكة: عميل/خادم و P2P",
    "pts": [
      [
        "Creating a network app: write programs that run on (different) <b>end systems</b> and communicate over the network, e.g., web server software communicates with browser software.",
        "تسوي تطبيق شبكي: تكتب برامج تشتغل على أجهزة <b>طرفية</b> مختلفة وتتواصل عبر الشبكة، مثل خادم الويب والمتصفح."
      ],
      [
        "<b>No need to write software for network-core devices</b>: network-core devices do not run user applications; applications on end systems allow rapid app development and propagation.",
        "ما تحتاج تبرمج أجهزة لبّ الشبكة، لأنها ما تشغّل تطبيقات المستخدم، وهذا يخلي التطوير والانتشار سريع."
      ],
      [
        "<b>Server:</b> always-on host, <b>permanent IP address</b>, often in data centers for scaling.",
        "الخادم: شغّال دايماً، <b>عنوانه ثابت</b>، وغالباً في مراكز البيانات عشان التوسع."
      ],
      [
        "<b>Clients:</b> contact and communicate with server; may be intermittently connected; may have <b>dynamic IP addresses</b>; <b>do not communicate directly with each other</b>. Examples: HTTP, IMAP, FTP.",
        "العملاء: يتواصلون مع الخادم، ممكن اتصالهم متقطع، وعناوينهم ممكن <b>متغيرة</b>، و<b>ما يتواصلون مع بعض مباشرة</b>. أمثلة: HTTP وIMAP وFTP."
      ],
      [
        "<b>Peer-peer:</b> <b>no always-on server</b>; arbitrary end systems directly communicate; peers request service from other peers and provide service in return.",
        "P2P: <b>ما فيه خادم دايم</b>، الأجهزة تتواصل مباشرة، كل peer يطلب خدمة من غيره ويقدم خدمة بالمقابل."
      ],
      [
        "<b>Self scalability</b> — new peers bring new service capacity, as well as new service demands.",
        "التوسع الذاتي: كل peer جديد يجيب سعة خدمة جديدة ومعها طلبات جديدة."
      ],
      [
        "Peers are intermittently connected and change IP addresses → <b>complex management</b>. Example: P2P file sharing [BitTorrent].",
        "الـ peers يتصلون وينقطعون ويغيرون عناوينهم، فالإدارة <b>معقدة</b>. مثال: BitTorrent."
      ]
    ],
    "trap": [
      "In client-server, clients <b>never</b> talk directly to each other. P2P = <b>self scalability</b> but <b>complex management</b>.",
      "في عميل/خادم العملاء <b>ما</b> يكلمون بعض مباشرة. وP2P يتوسع ذاتياً لكن إدارته معقدة."
    ],
    "idx": 13
  },
  {
    "id": "sockets",
    "ch": 2,
    "t": "Processes, Sockets & Addressing",
    "ar": "العمليات والـ Sockets والعناوين",
    "pts": [
      [
        "<b>Process:</b> program running within a host. Within the same host, two processes communicate using <b>inter-process communication</b> (defined by OS); processes in different hosts communicate by <b>exchanging messages</b>.",
        "العملية: برنامج شغّال داخل جهاز. داخل نفس الجهاز يتواصلون بـ IPC (يحددها نظام التشغيل)، وبين أجهزة مختلفة بـ<b>تبادل الرسائل</b>."
      ],
      [
        "<b>Client process:</b> process that initiates communication; <b>server process:</b> process that waits to be contacted. Note: applications with P2P architectures have both client processes & server processes.",
        "عملية العميل هي اللي تبدأ الاتصال، وعملية الخادم تنتظر أحد يتصل. وتطبيقات P2P فيها الاثنين."
      ],
      [
        "Process sends/receives messages to/from its <b>socket</b>; socket analogous to a <b>door</b>: sending process shoves message out the door and relies on transport infrastructure on the other side to deliver it. Two sockets involved: one on each side.",
        "العملية ترسل وتستقبل عن طريق الـ <b>socket</b>، وهو مثل <b>الباب</b>: المرسل يدفع الرسالة من الباب ويعتمد على النقل يوصلها. فيه socket على كل جهة."
      ],
      [
        "The socket is the interface between the <b>application layer</b> (controlled by app developer) and the <b>transport layer</b> (controlled by OS).",
        "الـ socket هو الحد بين طبقة التطبيقات (يتحكم فيها المطور) وطبقة النقل (يتحكم فيها نظام التشغيل)."
      ],
      [
        "To receive messages, a process must have an <b>identifier</b>; host device has a unique <b>32-bit IP address</b>. Q: does the IP address suffice? <b>A: no</b>, many processes can be running on the same host.",
        "عشان العملية تستقبل لازم يكون لها معرّف. الجهاز له IP بطول <b>32 بت</b>، بس هل يكفي؟ <b>لا</b>، لأن فيه عمليات كثير على نفس الجهاز."
      ],
      [
        "Identifier includes both <b>IP address and port numbers</b>. Example port numbers: HTTP server: <b>80</b>; mail server: <b>25</b>. E.g., gaia.cs.umass.edu: IP 128.119.245.12, port 80.",
        "المعرّف = <b>IP + رقم المنفذ (port)</b>. منافذ مشهورة: HTTP على <b>80</b>، والبريد على <b>25</b>."
      ],
      [
        "An application-layer protocol defines: <b>types</b> of messages (request, response), message <b>syntax</b> (fields and how delineated), message <b>semantics</b> (meaning of fields), and <b>rules</b> for when and how processes send & respond.",
        "بروتوكول التطبيقات يحدد: <b>أنواع</b> الرسائل، و<b>صيغتها</b> (الحقول وكيف تنفصل)، و<b>معناها</b>، و<b>قواعد</b> متى وكيف ترسل وترد."
      ],
      [
        "<b>Open protocols:</b> defined in RFCs, everyone has access, allows interoperability (e.g., HTTP, SMTP). <b>Proprietary protocols:</b> e.g., Skype, Zoom.",
        "بروتوكولات مفتوحة معرّفة في RFCs ومتاحة للكل (HTTP وSMTP)، وبروتوكولات خاصة مملوكة (Skype وZoom)."
      ]
    ],
    "trap": [
      "IP alone does <b>not</b> identify a process → need <b>IP + port</b>. HTTP = 80, SMTP = 25.",
      "الـ IP لحاله <b>ما يكفي</b>، لازم IP + port. وHTTP على 80 وSMTP على 25."
    ],
    "idx": 14
  },
  {
    "id": "tservice",
    "ch": 2,
    "t": "Transport Services Apps Need: TCP vs UDP",
    "ar": "خدمات النقل اللي يحتاجها التطبيق",
    "pts": [
      [
        "<b>Data integrity:</b> some apps (file transfer, web transactions) require 100% reliable data transfer; others (audio) can tolerate some loss.",
        "سلامة البيانات: تطبيقات تحتاج نقل موثوق 100% (نقل ملفات، معاملات ويب)، وتطبيقات تتحمل فقد بسيط (الصوت)."
      ],
      [
        "<b>Timing:</b> some apps (Internet telephony, interactive games) require low delay. <b>Throughput:</b> some apps (multimedia) require a minimum; others (<b>\"elastic apps\"</b>) use whatever they get. <b>Security:</b> encryption, data integrity.",
        "التوقيت: تطبيقات تحتاج تأخير قليل (اتصال الإنترنت، الألعاب). الإنتاجية: تطبيقات تحتاج حد أدنى (الوسائط) وتطبيقات «مرنة» تاخذ اللي يجيها. والأمن: تشفير وسلامة."
      ],
      [
        "Table: file transfer, e-mail, Web documents, text messaging → <b>no loss</b>, elastic; real-time audio/video → loss-tolerant, time-sensitive (10's msec); streaming → few secs; interactive games → 10's msec.",
        "الجدول: نقل الملفات والإيميل والويب والرسائل <b>بدون فقد</b> ومرنة. الصوت/الفيديو الحي يتحمل فقد وحساس للوقت (عشرات ms)، والبث بضع ثواني، والألعاب عشرات ms."
      ],
      [
        "<b>TCP service:</b> <b>reliable transport</b>, <b>flow control</b> (sender won't overwhelm receiver), <b>congestion control</b> (throttle sender when network overloaded), <b>connection-oriented</b> (setup required). Does <b>not</b> provide: timing, minimum throughput guarantee, security.",
        "خدمة TCP: نقل <b>موثوق</b>، <b>تحكم بالتدفق</b> (ما يغرق المستقبل)، <b>تحكم بالازدحام</b> (يهدّي المرسل لما الشبكة زحمة)، و<b>اتصال مسبق</b>. وما يقدم: توقيت ولا ضمان إنتاجية ولا أمن."
      ],
      [
        "<b>UDP service:</b> <b>unreliable</b> data transfer. Does not provide: reliability, flow control, congestion control, timing, throughput guarantee, security, or connection setup.",
        "خدمة UDP: نقل <b>غير موثوق</b>، وما يقدم أي شي من هذي: موثوقية، تدفق، ازدحام، توقيت، إنتاجية، أمن، أو اتصال مسبق."
      ],
      [
        "Apps: file transfer FTP → TCP; e-mail SMTP → TCP; Web HTTP → TCP; Internet telephony SIP/RTP → <b>TCP or UDP</b>; streaming HTTP/DASH → TCP; interactive games → <b>UDP or TCP</b>.",
        "التطبيقات: FTP وSMTP وHTTP والبث على TCP، والاتصال الصوتي والألعاب على <b>UDP أو TCP</b>."
      ],
      [
        "<b>Securing TCP:</b> vanilla TCP & UDP sockets have <b>no encryption</b> (cleartext passwords traverse the Internet in cleartext!). <b>TLS</b> provides encrypted TCP connections, data integrity, end-point authentication.",
        "تأمين TCP: الـ sockets العادية <b>بدون تشفير</b> (الباسورد يمشي نص واضح!). و<b>TLS</b> يقدم اتصال TCP مشفر وسلامة بيانات ومصادقة للأطراف."
      ],
      [
        "<b>TLS is implemented in the application layer</b>: apps use TLS libraries, that use TCP in turn.",
        "<b>TLS ينفّذ في طبقة التطبيقات</b>: التطبيق يستخدم مكتبة TLS وهي تستخدم TCP."
      ]
    ],
    "trap": [
      "TCP does <b>not</b> provide timing, throughput guarantee, or security. TLS lives in the <b>application</b> layer.",
      "TCP <b>ما</b> يضمن توقيت ولا إنتاجية ولا أمن. وTLS في طبقة <b>التطبيقات</b> مو النقل."
    ],
    "idx": 15
  },
  {
    "id": "http",
    "ch": 2,
    "t": "Web and HTTP Overview",
    "ar": "الويب و HTTP",
    "pts": [
      [
        "A web page consists of <b>objects</b>, each of which can be stored on different Web servers; an object can be an HTML file, JPEG image, Java applet, audio file…",
        "صفحة الويب تتكون من <b>كائنات</b> (objects)، وكل واحد ممكن يكون على خادم مختلف: ملف HTML، صورة JPEG، صوت…"
      ],
      [
        "A web page consists of a <b>base HTML file</b> which includes several referenced objects, each addressable by a <b>URL</b>, e.g., www.someschool.edu/someDept/pic.gif (host name + path name).",
        "الصفحة فيها <b>ملف HTML أساسي</b> يشير لكائنات ثانية، كل واحد له <b>URL</b> (اسم الجهاز + المسار)."
      ],
      [
        "<b>HTTP: hypertext transfer protocol</b> — Web's application-layer protocol; <b>client/server</b> model: client = browser that requests, receives and \"displays\" Web objects; server = Web server sends objects in response to requests.",
        "HTTP: بروتوكول طبقة التطبيقات للويب، بنموذج عميل/خادم: المتصفح يطلب ويعرض، والخادم يرسل الكائنات ردّاً على الطلبات."
      ],
      [
        "HTTP uses <b>TCP</b>: client initiates TCP connection (creates socket) to server, <b>port 80</b>; server accepts; HTTP messages exchanged; TCP connection closed.",
        "HTTP يستخدم <b>TCP</b>: العميل يفتح اتصال للخادم على <b>port 80</b>، الخادم يقبل، يتبادلون الرسائل، ويقفل الاتصال."
      ],
      [
        "<b>HTTP is \"stateless\"</b>: server maintains <b>no information about past client requests</b>.",
        "HTTP «عديم الحالة»: الخادم <b>ما يحفظ أي معلومة</b> عن طلبات العميل السابقة."
      ]
    ],
    "trap": [
      "HTTP is <b>stateless</b> (cookies are how sites keep state). HTTP runs over <b>TCP</b> port 80.",
      "HTTP <b>عديم الحالة</b>، والكوكيز هي الحل لحفظ الحالة. ويشتغل على TCP منفذ 80."
    ],
    "idx": 16
  },
  {
    "id": "httpconn",
    "ch": 2,
    "t": "Non-persistent vs Persistent HTTP",
    "ar": "HTTP غير الدائم والدائم",
    "pts": [
      [
        "<b>Non-persistent HTTP:</b> TCP connection opened; <b>at most one object</b> sent over the TCP connection; connection closed; downloading multiple objects requires <b>multiple connections</b>.",
        "غير الدائم: يفتح اتصال TCP، يرسل <b>كائن واحد بالكثير</b>، ويقفله، فكل كائن يحتاج اتصال جديد."
      ],
      [
        "<b>Persistent HTTP:</b> TCP connection opened to a server; <b>multiple objects</b> can be sent over a single TCP connection between client and that server; connection closed.",
        "الدائم: يفتح اتصال واحد، ويرسل <b>كائنات كثيرة</b> عليه، بعدين يقفله."
      ],
      [
        "Example: URL with base HTML containing text and references to <b>10 jpeg images</b> → with non-persistent HTTP, steps 1–5 are repeated for each of the 10 jpeg objects.",
        "مثال: صفحة فيها 10 صور، بالـ non-persistent الخطوات تتكرر لكل صورة من العشر."
      ],
      [
        "<b>RTT (definition):</b> time for a small packet to travel from client to server and back.",
        "RTT: الوقت اللي تاخذه حزمة صغيرة من العميل للخادم وترجع."
      ],
      [
        "HTTP response time (per object): one RTT to initiate TCP connection, one RTT for HTTP request and first few bytes of response to return, plus object/file transmission time → <b>Non-persistent HTTP response time = 2RTT + file transmission time</b>.",
        "وقت الاستجابة لكل كائن: RTT لفتح الاتصال + RTT للطلب وأول البايتات + وقت إرسال الملف، يعني <b>2RTT + وقت الإرسال</b>."
      ],
      [
        "Non-persistent issues: requires <b>2 RTTs per object</b>; OS overhead for each TCP connection; browsers often open multiple <b>parallel</b> TCP connections to fetch referenced objects.",
        "مشاكل غير الدائم: <b>2 RTT لكل كائن</b>، وعبء على النظام لكل اتصال، فالمتصفحات تفتح اتصالات متوازية."
      ],
      [
        "<b>Persistent HTTP (HTTP 1.1):</b> server leaves connection open after sending response; subsequent messages sent over the open connection; client sends requests as soon as it encounters a referenced object → <b>as little as one RTT for all the referenced objects</b> (cutting response time in half).",
        "الدائم (HTTP 1.1): الخادم يخلي الاتصال مفتوح، والطلبات اللي بعدها تمشي عليه، والعميل يطلب أول ما يلقى كائن، فيكفي <b>RTT واحد تقريباً لكل الكائنات</b> (يقص الوقت للنص)."
      ]
    ],
    "trap": [
      "Non-persistent = <b>2RTT + transmission</b> per object. Base page + 10 images, serial non-persistent = 11 × 2RTT = <b>22 RTT</b> (+ transmissions).",
      "غير الدائم = 2RTT + الإرسال لكل كائن. صفحة + 10 صور بالتسلسل = 11 × 2RTT = <b>22 RTT</b>."
    ],
    "idx": 17
  },
  {
    "id": "httpmsg",
    "ch": 2,
    "t": "HTTP Messages, Methods & Status Codes",
    "ar": "رسائل HTTP والطرق والأكواد",
    "pts": [
      [
        "Two types of HTTP messages: <b>request, response</b>. Request message is <b>ASCII</b> (human-readable format).",
        "نوعين رسائل: طلب ورد. ورسالة الطلب نص <b>ASCII</b> مقروء."
      ],
      [
        "Request line: `GET /index.html HTTP/1.1\\r\\n`, then header lines (`Host:`, `User-Agent:`, `Accept:`, `Accept-Language:`, `Accept-Encoding:`, `Connection: keep-alive`), then a blank line `\\r\\n` = end of header lines.",
        "سطر الطلب (الطريقة، الـ URL، النسخة)، بعده سطور الترويسة مثل Host وUser-Agent، وسطر فاضي \\r\\n يعني نهاية الترويسة."
      ],
      [
        "General format: <b>method</b> sp <b>URL</b> sp <b>version</b> cr lf; header lines; blank line; <b>entity body</b>.",
        "الشكل العام: الطريقة، مسافة، الـ URL، مسافة، النسخة، ثم الترويسات، ثم سطر فاضي، ثم الجسم (entity body)."
      ],
      [
        "<b>POST:</b> web page often includes form input; user input sent from client to server in <b>entity body</b>. <b>GET</b> (for sending data): include user data in the <b>URL field</b> following a '?': www.somesite.com/search?result",
        "POST: مدخلات الفورم تنرسل في <b>جسم الرسالة</b>. GET: البيانات تنحط في <b>الـ URL</b> بعد علامة ?."
      ],
      [
        "<b>HEAD:</b> requests <b>headers only</b> that would be returned if the URL were requested with GET. <b>PUT:</b> uploads new file (object) to server; <b>completely replaces</b> file that exists at the URL with content in the entity body.",
        "HEAD: يطلب <b>الترويسات بس</b> بدون الكائن. PUT: يرفع ملف جديد و<b>يستبدل بالكامل</b> الملف الموجود على نفس الـ URL."
      ],
      [
        "Response: status line (protocol, status code, status phrase) e.g. `HTTP/1.1 200 OK`, header lines (`Date`, `Server`, `Last-Modified`, `Content-Length`, `Content-Type`), then data (e.g., requested HTML file).",
        "الرد: سطر الحالة (البروتوكول، الكود، العبارة) مثل HTTP/1.1 200 OK، بعده الترويسات، بعده البيانات."
      ],
      [
        "Status codes: <b>200 OK</b> (request succeeded); <b>301 Moved Permanently</b> (new location in Location: field); <b>400 Bad Request</b> (not understood); <b>404 Not Found</b>; <b>505 HTTP Version Not Supported</b>. Status code appears in the <b>1st line</b> of the response.",
        "الأكواد: 200 نجح، 301 انتقل نهائياً (المكان الجديد في Location)، 400 طلب مو مفهوم، 404 مو موجود، 505 نسخة HTTP مو مدعومة. والكود في <b>أول سطر</b> من الرد."
      ]
    ],
    "trap": [
      "GET puts data in the <b>URL</b>; POST puts it in the <b>body</b>. HEAD = headers only. 301 = moved, 404 = not found.",
      "GET البيانات في <b>الرابط</b>، وPOST في <b>الجسم</b>، وHEAD ترويسات بس. 301 انتقل و404 مو موجود."
    ],
    "idx": 18
  },
  {
    "id": "cookies",
    "ch": 2,
    "t": "Cookies: Keeping User State",
    "ar": "الكوكيز وحفظ الحالة",
    "pts": [
      [
        "Recall: HTTP GET/response interaction is <b>stateless</b>: all HTTP requests are independent of each other; no need to \"recover\" from a partially-completed transaction.",
        "تذكّر: HTTP عديم الحالة، كل طلب مستقل، وما فيه داعي للتعافي من معاملة ناقصة."
      ],
      [
        "A <b>stateful</b> protocol: client makes two changes to X, or none at all.",
        "البروتوكول ذو الحالة: العميل يسوي التغييرين على X أو ولا واحد."
      ],
      [
        "Web sites and client browser use <b>cookies</b> to maintain some state between transactions. Four components: 1) <b>cookie header line of HTTP response</b> message; 2) <b>cookie header line in next HTTP request</b>; 3) <b>cookie file</b> kept on user's host, managed by browser; 4) <b>back-end database</b> at Web site.",
        "المواقع تستخدم الكوكيز تحفظ حالة بين المعاملات. 4 مكونات: 1) سطر كوكي في <b>الرد</b>، 2) سطر كوكي في <b>الطلب اللي بعده</b>، 3) <b>ملف كوكي</b> عند المستخدم يديره المتصفح، 4) <b>قاعدة بيانات</b> في الموقع."
      ],
      [
        "Example: first visit → site creates a <b>unique ID</b> (aka \"cookie\") and an entry in the backend database; subsequent requests contain the cookie ID, allowing the site to \"identify\" the user.",
        "أول زيارة: الموقع يسوي <b>رقم فريد</b> (الكوكي) وسجل في قاعدته، والطلبات بعدها تحمل الرقم فيعرفك."
      ],
      [
        "Uses: <b>authorization</b>, <b>shopping carts</b>, <b>recommendations</b>, <b>user session state</b> (Web e-mail).",
        "الاستخدامات: التفويض، سلة المشتريات، التوصيات، حالة الجلسة (الإيميل على الويب)."
      ],
      [
        "Keeping state: at protocol endpoints (maintain state at sender/receiver over multiple transactions); in messages: cookies in HTTP messages carry state.",
        "حفظ الحالة: عند الأطراف (المرسل والمستقبل) أو داخل الرسائل (الكوكيز تحمل الحالة)."
      ],
      [
        "Privacy: <b>first party cookies</b> track behavior on a given website; <b>third party cookies</b> (tracking cookies) allow a common identity to be tracked across <b>multiple</b> websites without the user ever choosing to visit the tracker site (e.g., AdX). Third party tracking is <b>disabled by default</b> in Firefox and Safari.",
        "الخصوصية: كوكيز الطرف الأول تتبعك في نفس الموقع، وكوكيز الطرف الثالث تتبعك عبر <b>مواقع كثيرة</b> بدون ما تزور موقع المتتبع (مثل AdX). وFirefox وSafari <b>يقفلونها افتراضياً</b>."
      ]
    ],
    "trap": [
      "Cookies have <b>four</b> components. <b>Third-party</b> cookies track across sites.",
      "الكوكيز لها <b>4</b> مكونات، وكوكيز <b>الطرف الثالث</b> هي اللي تتبعك بين المواقع."
    ],
    "idx": 19
  },
  {
    "id": "cache",
    "ch": 2,
    "t": "Web Caches & Conditional GET",
    "ar": "الكاش (Web Cache) و Conditional GET",
    "pts": [
      [
        "<b>Goal:</b> satisfy client requests <b>without involving origin server</b>. User configures browser to point to a (local) Web cache; browser sends all HTTP requests to cache: if object in cache → return it; else cache requests it from origin server, caches it, then returns it.",
        "الهدف: نخدم الطلب <b>بدون ما نروح للخادم الأصلي</b>. المتصفح يرسل كل طلباته للكاش: إذا الكائن موجود يرجعه، وإلا يجيبه من الأصلي ويخزنه ويرجعه."
      ],
      [
        "Web cache (aka <b>proxy server</b>) acts as <b>both client and server</b>: server for original requesting client, client to origin server.",
        "الكاش (proxy) يشتغل <b>عميل وخادم</b>: خادم للعميل اللي طلب، وعميل للخادم الأصلي."
      ],
      [
        "Why caching? <b>Reduce response time</b> (cache is closer to client); <b>reduce traffic</b> on an institution's access link; enables \"poor\" content providers to deliver content more effectively.",
        "ليش؟ <b>يقلل وقت الاستجابة</b> (أقرب للعميل)، و<b>يقلل الترافيك</b> على رابط المؤسسة، ويساعد مزودي المحتوى الصغار."
      ],
      [
        "Scenario: access link 1.54 Mbps, RTT router→server 2 sec, object 100K bits, 15 requests/sec → avg data rate to browsers 1.50 Mbps → <b>access link utilization = .97</b>, LAN utilization .0015 → end-end delay = 2 sec + <b>minutes</b> + usecs (large queueing at high utilization).",
        "المثال: رابط 1.54 Mbps و15 طلب/ث × 100K بت = 1.50 Mbps، فاستغلال الرابط <b>0.97</b> والتأخير يصير ثانيتين + <b>دقايق</b> بسبب الطابور."
      ],
      [
        "Option 1: buy a faster access link (154 Mbps) → utilization .0097, delay ≈ 2 sec + msecs — <b>expensive!</b>",
        "الخيار 1: رابط أسرع (154 Mbps) يخلي الاستغلال 0.0097، بس <b>غالي</b>."
      ],
      [
        "Option 2: install a web cache (<b>cheap!</b>), hit rate 0.4: 60% via access link → 0.6 × 1.50 = .9 Mbps → utilization = 0.9/1.54 = <b>.58</b> → low delay. Average delay = 0.6 × (2.01) + 0.4 × (~msecs) ≈ <b>1.2 secs</b> — lower than with the 154 Mbps link (and cheaper too!).",
        "الخيار 2: كاش (<b>رخيص</b>) بنسبة إصابة 0.4: 60% بس تمر من الرابط = 0.9 Mbps، الاستغلال <b>0.58</b>، ومتوسط التأخير ≈ <b>1.2 ثانية</b>، أقل من الرابط السريع وأرخص."
      ],
      [
        "<b>Conditional GET</b> (browser caching). Goal: don't send object if browser has an up-to-date cached version (no transmission delay). Client specifies date of cached copy: `If-modified-since: <date>`; server response contains <b>no object</b> if copy is up-to-date: `HTTP/1.0 304 Not Modified`; otherwise `200 OK` with data.",
        "Conditional GET: ما نرسل الكائن إذا نسخة المتصفح محدّثة. العميل يرسل If-modified-since بتاريخ نسخته، والخادم يرد <b>304 Not Modified بدون كائن</b> إذا ما تغير، وإلا 200 OK مع البيانات."
      ]
    ],
    "trap": [
      "With a 0.4 hit rate the access-link utilization becomes <b>0.58</b> (= 0.9/1.54), not 0.4 or 0.6. Not modified → <b>304</b>.",
      "مع إصابة 0.4 الاستغلال يصير <b>0.58</b> (0.9 ÷ 1.54) مو 0.4 ولا 0.6. وإذا ما تغير الكائن الرد <b>304</b>."
    ],
    "idx": 20
  },
  {
    "id": "http2",
    "ch": 2,
    "t": "HTTP/2 and HTTP/3",
    "ar": "HTTP/2 و HTTP/3",
    "pts": [
      [
        "Key goal: <b>decreased delay in multi-object HTTP requests</b>.",
        "الهدف: تقليل التأخير في الطلبات اللي فيها كائنات كثيرة."
      ],
      [
        "HTTP 1.1 introduced multiple, <b>pipelined GETs</b> over a single TCP connection; server responds <b>in-order (FCFS)</b>; with FCFS a small object may have to wait behind large object(s) → <b>head-of-line (HOL) blocking</b>; loss recovery (retransmitting lost TCP segments) stalls object transmission.",
        "HTTP 1.1 سمح بطلبات GET متتالية على اتصال واحد، بس الخادم يرد <b>بالترتيب</b>، فالكائن الصغير ينتظر ورا الكبير: هذا <b>HOL blocking</b>. وإعادة إرسال الحزم الضايعة توقّف الكل."
      ],
      [
        "<b>HTTP/2</b> [RFC 7540, 2015]: methods, status codes, most header fields <b>unchanged</b> from HTTP 1.1; transmission order based on <b>client-specified object priority</b> (not necessarily FCFS); <b>push</b> unrequested objects to client; divide objects into <b>frames</b>, schedule frames to mitigate HOL blocking.",
        "HTTP/2: نفس الطرق والأكواد وأغلب الترويسات، بس الترتيب حسب <b>أولوية يحددها العميل</b>، والخادم يقدر <b>يدفع</b> كائنات ما طُلبت، ويقسم الكائنات لـ <b>frames</b> ويخلطها عشان يخفف HOL."
      ],
      [
        "Example: 1 large object O1 + 3 small (O2–O4). HTTP 1.1: O2, O3, O4 wait behind O1. HTTP/2: frames interleaved → O2, O3, O4 delivered quickly, O1 slightly delayed.",
        "مثال: كائن كبير و3 صغار. في 1.1 الصغار ينتظرون الكبير، وفي HTTP/2 الـ frames تتداخل فالصغار يوصلون بسرعة والكبير يتأخر شوي."
      ],
      [
        "HTTP/2 over a single TCP connection means: recovery from packet loss <b>still stalls all object transmissions</b>; no security over vanilla TCP.",
        "HTTP/2 على اتصال TCP واحد: فقد حزمة <b>يوقف كل الكائنات</b>، وما فيه أمن على TCP العادي."
      ],
      [
        "<b>HTTP/3:</b> adds <b>security</b>, per-object error- and congestion-control (more pipelining) <b>over UDP</b>.",
        "HTTP/3: يضيف <b>أمن</b> وتحكم بالأخطاء والازدحام لكل كائن، <b>فوق UDP</b>."
      ]
    ],
    "trap": [
      "HTTP/2 still runs over <b>TCP</b>; HTTP/3 runs over <b>UDP</b>. HOL blocking = small object stuck behind a large one.",
      "HTTP/2 على <b>TCP</b> وHTTP/3 على <b>UDP</b>. وHOL = الصغير عالق ورا الكبير."
    ],
    "idx": 21
  },
  {
    "id": "email",
    "ch": 2,
    "t": "E-mail: SMTP and IMAP",
    "ar": "البريد: SMTP و IMAP",
    "pts": [
      [
        "Three major components: <b>user agents</b>, <b>mail servers</b>, <b>simple mail transfer protocol: SMTP</b>.",
        "ثلاث مكونات: وكيل المستخدم، خوادم البريد، وبروتوكول SMTP."
      ],
      [
        "<b>User Agent</b> a.k.a. \"mail reader\": composing, editing, reading mail messages (e.g., Outlook, iPhone mail client); outgoing, incoming messages stored on server.",
        "وكيل المستخدم (قارئ البريد): تكتب وتعدل وتقرأ (Outlook، بريد الآيفون)، والرسائل محفوظة على الخادم."
      ],
      [
        "Mail servers: <b>mailbox</b> contains incoming messages for user; <b>message queue</b> of outgoing (to be sent) messages; SMTP between mail servers: client = sending mail server, \"server\" = receiving mail server.",
        "خادم البريد: <b>صندوق</b> للرسائل الواردة، و<b>طابور</b> للصادرة، وSMTP بينهم: الخادم المرسل عميل والمستقبل خادم."
      ],
      [
        "<b>SMTP [RFC 5321]</b> uses <b>TCP</b> to reliably transfer email from client to server, <b>port 25</b>; <b>direct transfer</b>: sending server (acting like client) to receiving server.",
        "SMTP يستخدم <b>TCP</b> على <b>منفذ 25</b>، والنقل <b>مباشر</b> من الخادم المرسل للخادم المستقبل."
      ],
      [
        "Three phases of transfer: SMTP <b>handshaking</b> (greeting), SMTP <b>transfer</b> of messages, SMTP <b>closure</b>. Command/response interaction (like HTTP): commands ASCII text; response: status code and phrase.",
        "3 مراحل: المصافحة (تحية)، نقل الرسائل، الإغلاق. وأوامر وردود مثل HTTP: الأوامر نص ASCII والرد كود + عبارة."
      ],
      [
        "Alice → Bob: 1) Alice uses UA to compose e-mail to bob@someschool.edu; 2) her UA sends it to <b>her mail server</b> using SMTP (placed in message queue); 3) client side of SMTP opens TCP connection with <b>Bob's mail server</b>; 4) SMTP client sends message over TCP; 5) Bob's server places it in Bob's mailbox; 6) Bob invokes his user agent to read it.",
        "أليس ترسل لبوب: 1) تكتب بالـ UA، 2) ترسله لخادمها بـ SMTP (يدخل الطابور)، 3) خادمها يفتح TCP مع خادم بوب، 4) يرسل الرسالة، 5) خادم بوب يحطها في صندوقه، 6) بوب يقراها بالـ UA حقه."
      ],
      [
        "SMTP: delivery/storage of e-mail to receiver's server. Mail access protocol: retrieval from server — <b>IMAP</b> [RFC 3501]: messages stored on server; provides retrieval, deletion, folders. <b>HTTP</b> (gmail, Hotmail, Yahoo!Mail): web-based interface on top of SMTP (to send) and IMAP (or POP) to retrieve.",
        "SMTP للتوصيل والتخزين في خادم المستقبل، والاسترجاع ببروتوكول وصول مثل <b>IMAP</b> (الرسائل على الخادم مع حذف ومجلدات). وGmail وHotmail واجهة ويب <b>HTTP</b> فوق SMTP للإرسال وIMAP/POP للاستلام."
      ]
    ],
    "trap": [
      "SMTP <b>pushes</b> mail to the receiver's server; <b>IMAP</b> retrieves it. SMTP uses TCP port <b>25</b>, direct server-to-server.",
      "SMTP <b>يدفع</b> البريد لخادم المستقبل، و<b>IMAP</b> يسترجعه. وSMTP على TCP منفذ <b>25</b> مباشر بين الخوادم."
    ],
    "idx": 22
  },
  {
    "id": "dns",
    "ch": 2,
    "t": "DNS: Services & Hierarchy",
    "ar": "نظام أسماء النطاقات DNS",
    "pts": [
      [
        "Internet hosts: <b>IP address</b> (32 bit) used for addressing datagrams; <b>\"name\"</b> (e.g., cs.umass.edu) used by humans.",
        "الأجهزة لها IP (32 بت) للحزم، واسم مثل cs.umass.edu للبشر."
      ],
      [
        "DNS: <b>distributed database</b> implemented in a <b>hierarchy</b> of many name servers; <b>application-layer protocol</b>: hosts and DNS servers communicate to resolve names (address/name translation). Core Internet function implemented as an application-layer protocol → complexity at network's \"edge\".",
        "DNS: <b>قاعدة بيانات موزعة</b> على <b>تسلسل هرمي</b> من الخوادم، و<b>بروتوكول طبقة تطبيقات</b> يحوّل الأسماء لعناوين. وظيفة أساسية بس منفذة في التطبيقات، فالتعقيد عند أطراف الشبكة."
      ],
      [
        "DNS services: hostname-to-IP-address <b>translation</b>; <b>host aliasing</b> (canonical, alias names); <b>mail server aliasing</b>; <b>load distribution</b> (replicated Web servers: many IP addresses correspond to one name).",
        "خدمات DNS: تحويل الاسم لـ IP، الأسماء المستعارة للأجهزة، أسماء مستعارة لخوادم البريد، وتوزيع الحمل (اسم واحد لعدة عناوين)."
      ],
      [
        "Q: Why not centralize DNS? <b>single point of failure</b>, <b>traffic volume</b>, <b>distant centralized database</b>, <b>maintenance</b>. A: doesn't scale!",
        "ليش ما نخليه مركزي؟ نقطة فشل وحدة، حجم ترافيك ضخم، قاعدة بعيدة، وصعوبة صيانة. ما يتوسع!"
      ],
      [
        "Hierarchy, 1st approximation for www.amazon.com: client queries <b>root</b> server to find .com DNS server → queries <b>.com</b> DNS server to get amazon.com DNS server → queries <b>amazon.com</b> DNS server to get the IP address.",
        "الهرم: للوصول لـ www.amazon.com: نسأل <b>الجذر</b> عن خادم .com، بعدين <b>.com</b> عن خادم amazon.com، بعدين <b>amazon.com</b> عن الـ IP."
      ],
      [
        "<b>Root name servers:</b> official, contact-of-last-resort by name servers that cannot resolve a name; Internet couldn't function without it; <b>DNSSEC</b> provides security (authentication, message integrity); <b>ICANN</b> manages root DNS domain; <b>13 logical root name \"servers\"</b> worldwide, each replicated many times (~200 servers in US).",
        "خوادم الجذر: الملجأ الأخير لأي خادم ما عرف الاسم، والإنترنت ما يشتغل بدونها. DNSSEC للأمن، وICANN تدير الجذر، و<b>13 خادم جذر منطقي</b> كل واحد منسوخ مرات كثيرة."
      ],
      [
        "<b>TLD servers:</b> responsible for .com, .org, .net, .edu, .aero, .jobs, .museums and all top-level country domains (.cn, .uk, .fr, .ca, .jp). Network Solutions: registry for .com, .net; Educause: .edu.",
        "خوادم TLD: مسؤولة عن .com و.org و.edu ونطاقات الدول مثل .uk و.jp."
      ],
      [
        "<b>Authoritative DNS servers:</b> organization's own DNS server(s), providing <b>authoritative</b> hostname-to-IP mappings for the organization's named hosts; can be maintained by the organization or service provider.",
        "الخوادم الموثوقة (authoritative): خادم المؤسسة نفسها، فيه التحويل الرسمي لأسماء أجهزتها، تديره المؤسسة أو مزود الخدمة."
      ],
      [
        "<b>Local DNS name servers:</b> when a host makes a DNS query it is sent to its local DNS server, which answers from its local cache (possibly out of date!) or forwards into the hierarchy; each ISP has one; <b>doesn't strictly belong to the hierarchy</b>.",
        "خادم DNS المحلي: الجهاز يرسل له الاستعلام، فيرد من الكاش (ممكن قديم!) أو يمرره للهرم. كل ISP عنده واحد، و<b>مو جزء رسمي من الهرم</b>."
      ]
    ],
    "trap": [
      "DNS is an <b>application-layer</b> protocol (runs over UDP). There are <b>13</b> logical root servers. The local DNS server is <b>not strictly</b> part of the hierarchy.",
      "DNS بروتوكول <b>تطبيقات</b>. خوادم الجذر <b>13</b> منطقية. والخادم المحلي <b>مو جزء</b> رسمي من الهرم."
    ],
    "idx": 23
  },
  {
    "id": "dnsq",
    "ch": 2,
    "t": "DNS Resolution, Caching & Records",
    "ar": "الاستعلام والكاش والسجلات في DNS",
    "pts": [
      [
        "<b>Iterated query:</b> contacted server replies with name of server to contact: \"I don't know this name, but ask this server\". Example: host at engineering.nyu.edu wants IP for gaia.cs.umass.edu → local → root → TLD → authoritative (8 messages).",
        "الاستعلام التكراري (iterated): الخادم يرد «ما أعرف، بس اسأل هذا». مثال: المحلي يسأل الجذر ثم TLD ثم الموثوق (8 رسائل)."
      ],
      [
        "<b>Recursive query:</b> puts the <b>burden of name resolution on the contacted name server</b> → heavy load at upper levels of hierarchy?",
        "الاستعلام العودي (recursive): <b>الحمل على الخادم المسؤول</b> يكمل البحث بنفسه، وهذا يثقل الطبقات العليا."
      ],
      [
        "<b>Caching:</b> once (any) name server learns a mapping, it <b>caches</b> it and immediately returns it; caching improves response time; cache entries <b>timeout (disappear) after some time (TTL)</b>; TLD servers typically cached in local name servers.",
        "الكاش: أي خادم يعرف تحويل يخزنه ويرد فيه على طول، يسرّع الرد، والمدخلات تنتهي بعد وقت (<b>TTL</b>)، وخوادم TLD غالباً مخزنة في المحلي."
      ],
      [
        "Cached entries may be <b>out-of-date</b>: if a named host changes IP, it may not be known Internet-wide until all TTLs expire → <b>best-effort</b> name-to-address translation!",
        "المخزن ممكن يكون <b>قديم</b>: إذا تغير IP الجهاز ما ينعرف لين تنتهي كل الـ TTLs، فالتحويل «أفضل جهد»."
      ],
      [
        "Resource records (RR) format: <b>(name, value, type, ttl)</b>.",
        "شكل السجل: (الاسم، القيمة، النوع، ttl)."
      ],
      [
        "<b>type=A:</b> name is hostname, value is <b>IP address</b> (IPv4). <b>type=NS:</b> name is domain (foo.com), value is hostname of the <b>authoritative name server</b> for the domain.",
        "A: الاسم جهاز والقيمة <b>IP</b>. NS: الاسم نطاق والقيمة اسم <b>الخادم الموثوق</b> للنطاق."
      ],
      [
        "<b>type=CNAME:</b> name is alias name for some \"canonical\" (the real) name, value is canonical name (www.ibm.com is really servereast.backup2.ibm.com). <b>type=MX:</b> value is name of <b>SMTP mail server</b> associated with name.",
        "CNAME: الاسم مستعار والقيمة الاسم <b>الحقيقي</b>. MX: القيمة اسم <b>خادم البريد</b> للاسم."
      ],
      [
        "DNS messages: query and reply have the <b>same format</b>; header: <b>identification</b> 16-bit # (reply uses same #); flags: query or reply, recursion desired, recursion available, reply is authoritative; then questions, answers (RRs), authority records, additional \"helpful\" info.",
        "رسائل DNS: الطلب والرد <b>بنفس الشكل</b>. الترويسة فيها رقم تعريف 16 بت (الرد بنفس الرقم)، وأعلام (طلب/رد، recursion مطلوب/متاح، رد موثوق)، بعدين الأسئلة والأجوبة وسجلات الموثوق ومعلومات إضافية."
      ],
      [
        "Getting info into DNS: new startup \"Network Utopia\" registers networkutopia.com at a <b>DNS registrar</b>, providing names and IPs of authoritative servers; registrar inserts <b>NS and A</b> RRs into the .com TLD server: (networkutopia.com, dns1.networkutopia.com, NS), (dns1.networkutopia.com, 212.212.212.1, A); create authoritative server locally with type A for www and type MX for networkutopia.com.",
        "تسجيل شركة جديدة: تسجل الاسم عند <b>مسجّل نطاقات</b> وتعطيه أسماء وعناوين خوادمها، فيضيف سجلات <b>NS و A</b> في خادم .com، وهي تسوي خادمها الموثوق فيه A للـ www وMX للبريد."
      ]
    ],
    "trap": [
      "Alias → <b>CNAME</b>; mail server → <b>MX</b>; name server of a domain → <b>NS</b>; hostname → IP = <b>A</b>. Recursive = burden on the contacted server.",
      "مستعار → CNAME، بريد → MX، خادم النطاق → NS، اسم → IP هو A. والعودي الحمل على الخادم المسؤول."
    ],
    "idx": 24
  },
  {
    "id": "p2p",
    "ch": 2,
    "t": "P2P File Distribution & BitTorrent",
    "ar": "توزيع الملفات P2P و BitTorrent",
    "pts": [
      [
        "Q: how much time to distribute a file (size F) from one server to N peers? Peer upload/download capacity is a limited resource. u_{s}: server upload capacity; u_{i}: peer i upload; d_{i}: peer i download.",
        "كم ياخذ توزيع ملف حجمه F من خادم لـ N أجهزة؟ u_{s} رفع الخادم، u_{i} رفع الجهاز، d_{i} تنزيله."
      ],
      [
        "<b>Client-server:</b> server must sequentially send N copies: NF/u_{s}; each client must download: min time F/d_{min} → <b>D_{c-s} ≥ max{NF/u_{s}, F/d_{min}}</b> — increases <b>linearly in N</b>.",
        "عميل/خادم: الخادم يرسل N نسخة (NF/u_{s})، وكل عميل ينزل (F/d_{min})، فالوقت ≥ max{NF/u_{s}, F/d_{min}} ويزيد <b>خطياً مع N</b>."
      ],
      [
        "<b>P2P:</b> server must upload at least one copy: F/u_{s}; each client downloads: F/d_{min}; clients as aggregate must download NF bits at max rate u_{s} + Σu_{i} → <b>D_{P2P} ≥ max{F/u_{s}, F/d_{min}, NF/(u_{s} + Σu_{i})}</b>.",
        "P2P: الخادم يرفع نسخة وحدة على الأقل (F/u_{s})، وكل عميل ينزل (F/d_{min})، والمجموع NF بت بأقصى سرعة u_{s} + Σu_{i}، فالوقت ≥ max{F/u_{s}, F/d_{min}, NF/(u_{s}+Σu_{i})}."
      ],
      [
        "Example: client upload rate = u, F/u = 1 hour, u_{s} = 10u, d_{min} ≥ u_{s}: client-server time grows linearly with N, while P2P stays <b>below about 1 hour</b> even for large N.",
        "مثال: F/u = ساعة وu_{s} = 10u: وقت العميل/خادم يزيد خطياً، وP2P يبقى <b>أقل من ساعة تقريباً</b> حتى مع N كبير."
      ],
      [
        "<b>BitTorrent:</b> file divided into <b>256Kb chunks</b>; peers in torrent send/receive chunks; <b>tracker</b>: tracks peers participating in torrent; <b>torrent</b>: group of peers exchanging chunks of a file.",
        "BitTorrent: الملف ينقسم لقطع <b>256Kb</b>، والـ <b>tracker</b> يتابع المشاركين، والـ <b>torrent</b> هو مجموعة الـ peers اللي يتبادلون قطع الملف."
      ],
      [
        "Peer joining: has no chunks, accumulates them over time; registers with tracker to get list of peers, connects to a subset (\"neighbors\"); while downloading it uploads chunks; <b>churn</b>: peers may come and go; once it has the entire file it may (selfishly) leave or (altruistically) remain.",
        "المنضم الجديد: ما عنده قطع ويجمعها، يسجل عند الـ tracker ويتصل بجيران، ويرفع وهو ينزل. <b>churn</b> يعني الـ peers يجون ويروحون، واللي يكمل الملف يا يطلع (أناني) يا يبقى (كريم)."
      ],
      [
        "Requesting chunks: periodically Alice asks each peer for its list of chunks and requests missing chunks <b>rarest first</b>.",
        "طلب القطع: أليس تسأل كل جار وش عنده، وتطلب الناقص <b>الأندر أولاً</b>."
      ],
      [
        "Sending chunks: <b>tit-for-tat</b> — Alice sends chunks to the <b>four peers</b> currently sending her chunks at the highest rate (others are <b>choked</b>); re-evaluate top 4 every <b>10 secs</b>; every <b>30 secs</b> randomly select another peer: <b>\"optimistically unchoke\"</b> it.",
        "إرسال القطع: <b>واحدة بواحدة</b> (tit-for-tat): أليس ترسل لأعلى <b>4</b> يرسلون لها، والباقي «مخنوقين»، وتعيد التقييم كل <b>10 ثواني</b>، وكل <b>30 ثانية</b> تختار واحد عشوائي وتفك خنقه «بتفاؤل»."
      ],
      [
        "Higher upload rate: find better trading partners, get file faster!",
        "كل ما رفعت أكثر لقيت شركاء أحسن ونزلت أسرع!"
      ]
    ],
    "trap": [
      "P2P has <b>three</b> terms in the max; client-server only <b>two</b> (NF/u_{s} grows with N). Top <b>4</b> every <b>10 s</b>; optimistic unchoke every <b>30 s</b>; chunks <b>256Kb</b>; <b>rarest first</b>.",
      "P2P فيها <b>3</b> حدود في max والعميل/خادم <b>2</b>. أعلى 4 كل 10 ثواني، وفك الخنق كل 30، والقطع 256Kb، والأندر أولاً."
    ],
    "idx": 25
  },
  {
    "id": "tsvc",
    "ch": 3,
    "t": "Transport-Layer Services",
    "ar": "خدمات طبقة النقل",
    "pts": [
      [
        "Transport services: provide <b>logical communication between application processes</b> running on different hosts.",
        "النقل يوفر <b>اتصال منطقي بين العمليات</b> على أجهزة مختلفة."
      ],
      [
        "Transport protocol actions in end systems: <b>sender</b> breaks application messages into <b>segments</b>, passes to network layer; <b>receiver</b> reassembles segments into messages, passes to application layer.",
        "المرسل يقسم الرسائل لـ <b>segments</b> ويعطيها لطبقة الشبكة، والمستقبل يجمعها رسائل ويعطيها للتطبيق."
      ],
      [
        "<b>Network layer:</b> logical communication between <b>hosts</b>. <b>Transport layer:</b> logical communication between <b>processes</b>; relies on and enhances network layer services.",
        "طبقة الشبكة: بين <b>الأجهزة</b>. طبقة النقل: بين <b>العمليات</b>، وتعتمد على الشبكة وتحسّن خدماتها."
      ],
      [
        "Sender actions: is passed an application-layer message; determines segment header field values; creates segment; passes segment to IP.",
        "المرسل: ياخذ رسالة التطبيق، يحدد قيم الترويسة، يسوي segment، ويعطيه لـ IP."
      ],
      [
        "Receiver actions: receives segment from IP; checks header values; extracts application-layer message; <b>demultiplexes</b> message up to application via socket.",
        "المستقبل: ياخذ الـ segment من IP، يفحص الترويسة، يطلّع الرسالة، و<b>يوزعها</b> للتطبيق عبر الـ socket."
      ],
      [
        "<b>TCP:</b> reliable, in-order delivery; congestion control; flow control; connection setup. <b>UDP:</b> unreliable, unordered delivery; no-frills extension of \"best-effort\" IP.",
        "TCP: توصيل موثوق ومرتب، تحكم بالازدحام والتدفق، وإعداد اتصال. UDP: غير موثوق ولا مرتب، امتداد بسيط لـ IP «أفضل جهد»."
      ],
      [
        "Services <b>not available</b> (in either): <b>delay guarantees</b>, <b>bandwidth guarantees</b>.",
        "خدمات <b>مو متوفرة</b> في الاثنين: ضمان التأخير وضمان الـ bandwidth."
      ]
    ],
    "trap": [
      "Network = host-to-host; transport = <b>process-to-process</b>. Neither TCP nor UDP guarantees delay or bandwidth.",
      "الشبكة جهاز لجهاز، والنقل <b>عملية لعملية</b>. ولا TCP ولا UDP يضمن تأخير أو bandwidth."
    ],
    "idx": 26
  },
  {
    "id": "mux",
    "ch": 3,
    "t": "Multiplexing & Demultiplexing",
    "ar": "الدمج والتوزيع (Mux/Demux)",
    "pts": [
      [
        "<b>Multiplexing at sender:</b> handle data from multiple sockets, add transport header (later used for demultiplexing). <b>Demultiplexing at receiver:</b> use header info to deliver received segments to the correct socket.",
        "الدمج عند المرسل: يجمع بيانات من sockets كثيرة ويضيف ترويسة. والتوزيع عند المستقبل: يستخدم الترويسة يوصل كل segment للـ socket الصح."
      ],
      [
        "Q: how did the transport layer know to deliver a message to the Firefox browser process rather than Netflix or Skype? → by <b>port numbers</b> (demultiplexing).",
        "كيف عرف النقل يوصل الرسالة لـ Firefox مو Netflix؟ بأرقام <b>المنافذ</b>."
      ],
      [
        "How demultiplexing works: host receives IP datagrams; each datagram has source and destination IP address and carries one transport-layer segment; each segment has <b>source, destination port number</b>; host uses <b>IP addresses & port numbers</b> to direct segment to the appropriate socket.",
        "كيف يشتغل: كل datagram فيه IP مصدر ووجهة ويحمل segment واحد، وكل segment فيه منفذ مصدر ووجهة، والجهاز يستخدم العناوين والمنافذ يوجهه للـ socket المناسب."
      ],
      [
        "<b>Connectionless (UDP) demux:</b> when creating a socket, must specify host-local port # (`DatagramSocket mySocket1 = new DatagramSocket(12534);`); receiver checks <b>destination port #</b> and directs segment to the socket with that port #.",
        "توزيع UDP: لما تسوي socket تحدد رقم منفذ، والمستقبل يشيك <b>منفذ الوجهة</b> بس ويوجهه للـ socket اللي بنفس الرقم."
      ],
      [
        "IP/UDP datagrams with the <b>same dest. port #</b> but different source IP addresses and/or source port numbers will be directed to the <b>same socket</b> at the receiving host.",
        "حزم UDP بنفس منفذ الوجهة حتى لو المصدر مختلف (IP أو منفذ) تروح <b>لنفس الـ socket</b>."
      ],
      [
        "<b>Connection-oriented (TCP) demux:</b> TCP socket identified by <b>4-tuple</b>: source IP address, source port number, dest IP address, dest port number; receiver uses <b>all four values</b> to direct segment to the appropriate socket.",
        "توزيع TCP: الـ socket يتعرف بـ <b>4 قيم</b>: IP المصدر ومنفذه، وIP الوجهة ومنفذها، والمستقبل يستخدم <b>الأربع</b>."
      ],
      [
        "Server may support many simultaneous TCP sockets: each socket identified by its own 4-tuple, each associated with a different connecting client. Example: three segments all destined to IP B, dest port 80, are demultiplexed to <b>different sockets</b>.",
        "الخادم يقدر يفتح sockets كثيرة بنفس الوقت، كل واحد بـ 4-tuple خاص وعميل مختلف. مثال: 3 segments كلها لـ B منفذ 80 بس تروح لـ <b>sockets مختلفة</b>."
      ],
      [
        "Summary: UDP demultiplexing uses <b>destination port number (only)</b>; TCP uses the <b>4-tuple</b>; multiplexing/demultiplexing happen at <b>all layers</b>.",
        "الخلاصة: UDP بمنفذ الوجهة بس، وTCP بالـ 4-tuple، والدمج والتوزيع يصير في <b>كل الطبقات</b>."
      ]
    ],
    "trap": [
      "Two UDP senders to the same dest port → <b>same socket</b>. Two TCP clients to port 80 → <b>different sockets</b>.",
      "مرسلين UDP لنفس المنفذ → <b>نفس</b> الـ socket. عميلين TCP لمنفذ 80 → sockets <b>مختلفة</b>."
    ],
    "idx": 27
  },
  {
    "id": "udp",
    "ch": 3,
    "t": "UDP & the Internet Checksum",
    "ar": "UDP والـ Checksum",
    "pts": [
      [
        "UDP: \"no frills,\" \"bare bones\" transport protocol; segments may be <b>lost</b> or <b>delivered out-of-order</b> to app; <b>connectionless</b>: no handshaking between sender and receiver; each segment handled independently.",
        "UDP بروتوكول بسيط جداً: الحزم ممكن <b>تضيع</b> أو توصل <b>بدون ترتيب</b>، و<b>بدون اتصال</b>: ما فيه مصافحة، وكل segment مستقل."
      ],
      [
        "Why UDP? <b>no connection establishment</b> (which can add RTT delay); simple: no connection state at sender/receiver; <b>small header size</b>; no congestion control (UDP can blast away as fast as desired; can function in the face of congestion).",
        "ليش UDP؟ <b>بدون إنشاء اتصال</b> (ما فيه RTT زيادة)، بسيط بدون حالة، <b>ترويسة صغيرة</b>، وبدون تحكم ازدحام فيرسل بأي سرعة."
      ],
      [
        "UDP used: <b>streaming multimedia</b> apps (loss tolerant, rate sensitive), <b>DNS</b>, <b>SNMP</b>, <b>HTTP/3</b>. If reliable transfer is needed over UDP (e.g., HTTP/3): add needed reliability and congestion control <b>at the application layer</b>.",
        "يُستخدم في: البث (يتحمل فقد وحساس للسرعة)، DNS، SNMP، وHTTP/3. وإذا احتجت موثوقية فوق UDP تضيفها <b>في طبقة التطبيقات</b>."
      ],
      [
        "UDP segment header (32 bits wide): <b>source port #, dest port #, length, checksum</b>; length = in bytes of UDP segment, <b>including header</b>; then application data (payload).",
        "ترويسة UDP: <b>منفذ المصدر، منفذ الوجهة، الطول، الـ checksum</b>. والطول بالبايت للـ segment كامل <b>مع الترويسة</b>، بعدها بيانات التطبيق."
      ],
      [
        "UDP checksum goal: <b>detect errors</b> (i.e., flipped bits) in transmitted segment. E.g., transmitted 5, 6, sum 11; received 4, 6, sum 11 → receiver computes 10 ≠ 11 → error.",
        "هدف الـ checksum: <b>كشف الأخطاء</b> (بتات انقلبت). مثال: أرسلنا 5 و6 ومجموعهم 11، ووصل 4 و6 مع 11، فالمستقبل يحسب 10 ≠ 11 فيكشف الخطأ."
      ],
      [
        "Sender: treat contents of UDP segment (including header fields and IP addresses) as sequence of <b>16-bit integers</b>; checksum: addition (<b>one's complement sum</b>) of segment content, put into checksum field.",
        "المرسل: يعامل المحتوى (مع الترويسة والعناوين) كأرقام <b>16 بت</b>، ويجمعها بالـ one's complement، ويحط النتيجة في حقل الـ checksum."
      ],
      [
        "Receiver: compute checksum of received segment; check if it equals checksum field: <b>not equal → error detected</b>; equal → no error detected (but maybe errors nonetheless?).",
        "المستقبل: يحسب ويقارن: <b>مختلف → فيه خطأ</b>، متساوي → ما انكشف خطأ (بس ممكن فيه!)."
      ],
      [
        "Example: 1110011001100110 + 1101010101010101 = <b>1</b>1011101110111011 → <b>wraparound</b> (add the carry-out to the result) → sum 1011101110111100 → checksum = <b>one's complement</b> (flip bits) = 0100010001000011.",
        "مثال: نجمع الرقمين، والـ carry اللي يطلع من آخر بت <b>نرجعه ونضيفه</b> (wraparound)، فالمجموع 1011101110111100، والـ checksum <b>عكس البتات</b> = 0100010001000011."
      ],
      [
        "Internet checksum: <b>weak protection!</b> Even though numbers have changed (bit flips), there may be <b>no change</b> in checksum.",
        "الـ checksum <b>حماية ضعيفة</b>: ممكن تتغير الأرقام وما يتغير المجموع."
      ]
    ],
    "trap": [
      "Checksum = <b>one's complement of the sum</b>, with the carry <b>wrapped around</b>. Matching checksum does <b>not</b> guarantee no error.",
      "الـ checksum = <b>عكس</b> المجموع بعد إرجاع الـ carry. وتطابقه <b>ما يضمن</b> إن ما فيه خطأ."
    ],
    "idx": 28
  },
  {
    "id": "rdt",
    "ch": 3,
    "t": "Reliable Data Transfer: rdt1.0 → rdt3.0",
    "ar": "النقل الموثوق: من rdt1.0 إلى rdt3.0",
    "pts": [
      [
        "Complexity of reliable data transfer protocol depends (strongly) on characteristics of <b>unreliable channel</b> (lose, corrupt, reorder data?). Sender and receiver do not know the \"state\" of each other unless communicated via a message.",
        "تعقيد البروتوكول الموثوق يعتمد على القناة غير الموثوقة (تفقد؟ تخرب؟ تلخبط الترتيب؟). والمرسل والمستقبل ما يعرفون حالة بعض إلا برسالة."
      ],
      [
        "We incrementally develop sender/receiver sides, consider only <b>unidirectional</b> data transfer (but control info flows in both directions!), and use <b>finite state machines (FSM)</b>.",
        "نبني البروتوكول خطوة خطوة، نقل باتجاه واحد (بس معلومات التحكم بالاتجاهين)، ونستخدم <b>آلات الحالة المنتهية (FSM)</b>."
      ],
      [
        "<b>rdt1.0:</b> underlying channel <b>perfectly reliable</b> (no bit errors, no loss); separate FSMs: sender sends data into channel, receiver reads data from channel.",
        "rdt1.0: القناة <b>موثوقة تماماً</b>، المرسل يرسل والمستقبل يقرأ وبس."
      ],
      [
        "<b>rdt2.0:</b> channel may <b>flip bits</b> → <b>checksum</b> to detect bit errors; <b>ACKs</b>: receiver tells sender pkt received OK; <b>NAKs</b>: pkt had errors; sender <b>retransmits</b> on NAK. (stop and wait)",
        "rdt2.0: القناة ممكن <b>تقلب بتات</b>، فنستخدم <b>checksum</b> للكشف، و<b>ACK</b> (وصل سليم) و<b>NAK</b> (فيه خطأ)، والمرسل <b>يعيد الإرسال</b> عند NAK. (أرسل وانتظر)"
      ],
      [
        "<b>rdt2.0 has a fatal flaw!</b> What if ACK/NAK is corrupted? Sender doesn't know what happened; can't just retransmit (possible duplicate). Handling duplicates: sender retransmits if ACK/NAK corrupted, adds <b>sequence number</b> to each pkt; receiver <b>discards</b> duplicate pkt.",
        "rdt2.0 فيه <b>عيب قاتل</b>: لو الـ ACK/NAK نفسه خرب؟ المرسل ما يدري، ولو أعاد ممكن يتكرر. الحل: يعيد ويضيف <b>رقم تسلسل</b>، والمستقبل <b>يرمي</b> المكرر."
      ],
      [
        "<b>rdt2.1:</b> seq # added; <b>two seq. #s (0,1) will suffice</b>; must check if received ACK/NAK corrupted; twice as many states. Receiver must check if received packet is duplicate; note: receiver cannot know if its last ACK/NAK was received OK.",
        "rdt2.1: رقم تسلسل، و<b>رقمين (0 و1) يكفون</b>، وعدد الحالات يتضاعف، والمستقبل يشيك على التكرار، وما يقدر يعرف إذا الـ ACK حقه وصل."
      ],
      [
        "<b>rdt2.2: a NAK-free protocol</b> — same functionality as rdt2.1, using <b>ACKs only</b>; instead of NAK, receiver sends ACK for <b>last pkt received OK</b> (must include seq #); <b>duplicate ACK</b> at sender = same action as NAK: retransmit. TCP uses this approach.",
        "rdt2.2: <b>بدون NAK</b>، بس ACKs: بدل NAK يرسل ACK لآخر حزمة سليمة مع رقمها، و<b>ACK مكرر</b> عند المرسل = NAK فيعيد. وTCP يستخدم هالفكرة."
      ],
      [
        "<b>rdt3.0:</b> channel can also <b>lose packets</b> (data, ACKs). Approach: sender waits a \"reasonable\" amount of time for ACK; retransmits if no ACK; if pkt (or ACK) just delayed → duplicate, but seq #s handle this; use a <b>countdown timer</b>.",
        "rdt3.0: القناة ممكن <b>تفقد</b> حزم أو ACKs. الحل: المرسل ينتظر وقت معقول، وإذا ما جا ACK يعيد، ولو كانت متأخرة بس فالتكرار يتعالج بأرقام التسلسل. ونستخدم <b>مؤقت عد تنازلي</b>."
      ],
      [
        "rdt3.0 in action: (a) no loss, (b) packet loss → timeout → resend, (c) ACK loss → resend → receiver <b>detects duplicate</b>, resends ACK, (d) premature timeout/delayed ACK.",
        "rdt3.0: (أ) بدون فقد، (ب) فقد حزمة → timeout وإعادة، (ج) فقد ACK → إعادة والمستقبل <b>يكشف التكرار</b>، (د) timeout مبكر أو ACK متأخر."
      ]
    ],
    "trap": [
      "rdt2.0 → bit errors (checksum + ACK/NAK). rdt2.1 → corrupted ACK/NAK (seq #). rdt2.2 → NAK-free. rdt3.0 → loss (<b>timer</b>).",
      "2.0 أخطاء بت، 2.1 خراب ACK/NAK (رقم تسلسل)، 2.2 بدون NAK، 3.0 فقد (<b>مؤقت</b>). احفظ وش يحل كل واحد."
    ],
    "idx": 29
  },
  {
    "id": "pipe",
    "ch": 3,
    "t": "Stop-and-Wait Performance & Pipelining",
    "ar": "أداء أرسل-وانتظر والتوازي (Pipelining)",
    "pts": [
      [
        "U_{sender}: <b>utilization</b> — fraction of time sender busy sending.",
        "الاستغلال U: نسبة الوقت اللي المرسل مشغول فيه بالإرسال."
      ],
      [
        "Example: 1 Gbps link, 15 ms prop delay, 8000 bit packet → time to transmit: D_{trans} = L/R = 8000 bits / 10^{9} bits/sec = <b>8 microsecs</b>.",
        "مثال: رابط 1 Gbps وانتشار 15 ms وحزمة 8000 بت: وقت الإرسال = 8000 ÷ 10^{9} = <b>8 ميكروثانية</b>."
      ],
      [
        "Stop-and-wait: <b>U_{sender} = (L/R) / (RTT + L/R)</b> = .008 / 30.008 = <b>0.00027</b> → the protocol <b>limits performance</b> of the underlying infrastructure (channel).",
        "أرسل-وانتظر: U = (L/R) ÷ (RTT + L/R) = 0.008 ÷ 30.008 = <b>0.00027</b>، يعني البروتوكول <b>يخنق</b> أداء القناة."
      ],
      [
        "<b>Pipelining:</b> sender allows <b>multiple, \"in-flight\", yet-to-be-acknowledged</b> packets: range of sequence numbers must be increased; buffering at sender and/or receiver.",
        "التوازي (pipelining): المرسل يرسل <b>حزم كثيرة بدون ما ينتظر ACK</b>، فنحتاج مدى أكبر لأرقام التسلسل وتخزين عند المرسل و/أو المستقبل."
      ],
      [
        "Pipelining increases utilization: with 3 packets in flight, U_{sender} = 3L/R / (RTT + L/R) = .0024 / 30.008 = 0.00081 (<b>3× the utilization</b>).",
        "التوازي يرفع الاستغلال: 3 حزم بنفس الوقت → U = 3L/R ÷ (RTT + L/R) = 0.00081، يعني <b>3 أضعاف</b>."
      ]
    ],
    "trap": [
      "Use <b>RTT = 2 × prop</b> (30 ms, not 15). Window of N packets multiplies utilization by <b>N</b> (until it reaches 1).",
      "الـ RTT = ضعف الانتشار (30 ms مو 15). ونافذة N حزم تضرب الاستغلال في N."
    ],
    "idx": 30
  },
  {
    "id": "gbn",
    "ch": 3,
    "t": "Go-Back-N & Selective Repeat",
    "ar": "Go-Back-N و Selective Repeat",
    "pts": [
      [
        "<b>Go-Back-N sender:</b> \"window\" of up to N consecutive transmitted but unACKed pkts; k-bit seq # in pkt header.",
        "GBN المرسل: «نافذة» فيها لين N حزم مرسلة بدون ACK، وأرقام تسلسل k بت."
      ],
      [
        "<b>Cumulative ACK:</b> ACK(n) ACKs all packets up to, <b>including</b> seq # n → on receiving ACK(n), move window forward to begin at n+1.",
        "ACK تراكمي: ACK(n) يأكد كل الحزم لين n <b>ومعها</b> n، فالنافذة تتحرك تبدأ من n+1."
      ],
      [
        "GBN: <b>timer for oldest in-flight packet</b>; <b>timeout(n): retransmit packet n and all higher seq # packets in window</b>.",
        "GBN: <b>مؤقت واحد لأقدم حزمة</b>، وعند timeout(n) <b>يعيد n وكل اللي بعدها</b> في النافذة."
      ],
      [
        "GBN receiver: ACK-only: always send ACK for correctly-received packet so far with <b>highest in-order seq #</b>; may generate duplicate ACKs; need only remember <b>rcv_base</b>. Out-of-order packet: can discard or buffer (implementation decision); re-ACK pkt with highest in-order seq #.",
        "GBN المستقبل: يرسل ACK لأعلى رقم <b>وصل بالترتيب</b>، ممكن يكرر ACKs، ويحفظ rcv_base بس. والحزمة اللي خارج الترتيب يرميها أو يخزنها (قرار تنفيذ) ويعيد آخر ACK."
      ],
      [
        "GBN in action (N=4): pkt2 lost → receiver discards pkt3, 4, 5 and (re)sends ack1 → timeout on pkt2 → sender resends pkt2, 3, 4, 5.",
        "مثال GBN بنافذة 4: ضاعت pkt2 فالمستقبل يرمي 3 و4 و5 ويكرر ack1، وبعد timeout المرسل يعيد 2 و3 و4 و5 كلها."
      ],
      [
        "<b>Selective repeat:</b> receiver <b>individually ACKs</b> all correctly received packets and <b>buffers</b> them for in-order delivery; sender maintains (conceptually) a <b>timer for each unACKed pkt</b>; timeout: retransmits <b>single</b> unACKed packet.",
        "Selective Repeat: المستقبل يأكد <b>كل حزمة لحالها</b> ويخزن اللي خارج الترتيب، والمرسل عنده <b>مؤقت لكل حزمة</b>، وعند timeout يعيد <b>الحزمة وحدها</b> بس."
      ],
      [
        "SR in action: pkt2 lost → receiver buffers pkt3, 4, 5 and sends ack3, ack4, ack5 → sender resends <b>only pkt2</b> → receiver delivers pkt2, 3, 4, 5 and sends ack2.",
        "مثال SR: ضاعت pkt2 فالمستقبل يخزن 3 و4 و5 ويأكدها، والمرسل يعيد <b>pkt2 بس</b>، فيسلّم 2 و3 و4 و5 مع ack2."
      ],
      [
        "<b>SR dilemma:</b> seq #s 0, 1, 2, 3 (base 4 counting), window size = 3 → receiver can't see sender side; receiver behavior identical in both cases → something's (very) wrong! Need window size ≤ ½ of seq # space.",
        "معضلة SR: أرقام 0–3 ونافذة 3: المستقبل ما يقدر يفرق بين حزمة جديدة وحزمة مكررة، فلازم النافذة ≤ <b>نص</b> مدى الأرقام."
      ]
    ],
    "trap": [
      "GBN: <b>one timer</b>, cumulative ACK, resend <b>all</b> after the lost one. SR: <b>timer per packet</b>, individual ACK, resend <b>only</b> the lost one.",
      "GBN: مؤقت واحد وACK تراكمي ويعيد <b>الكل</b>. SR: مؤقت لكل حزمة وACK فردي ويعيد <b>الضايعة بس</b>."
    ],
    "idx": 31
  },
  {
    "id": "tcp",
    "ch": 3,
    "t": "TCP Overview, Segment & Sequence Numbers",
    "ar": "نظرة على TCP وأرقام التسلسل",
    "pts": [
      [
        "TCP: <b>point-to-point</b> (one sender, one receiver); <b>reliable, in-order byte stream</b> (no \"message boundaries\"); <b>full duplex</b> data (bi-directional flow in same connection); <b>MSS</b>: maximum segment size.",
        "TCP: <b>نقطة لنقطة</b> (مرسل ومستقبل واحد)، <b>تيار بايتات موثوق ومرتب</b> (بدون حدود رسائل)، <b>ثنائي الاتجاه</b>، وMSS هو أكبر حجم segment."
      ],
      [
        "<b>Cumulative ACKs</b>; <b>pipelining</b>: TCP congestion and flow control set window size; <b>connection-oriented</b>: handshaking initializes sender and receiver state before data exchange; <b>flow controlled</b>: sender will not overwhelm receiver.",
        "ACKs تراكمية، وتوازي (الازدحام والتدفق يحددون النافذة)، و<b>اتصال مسبق</b> بالمصافحة، و<b>تحكم بالتدفق</b>."
      ],
      [
        "Segment structure (32 bits wide): source port #, dest port #, <b>sequence number</b>, <b>acknowledgement number</b>, header length, flags (C, E: congestion notification; U; <b>A</b>: ACK # valid; P; <b>R, S, F</b>: RST, SYN, FIN connection management), <b>receive window</b> (flow control: # bytes receiver willing to accept), checksum, Urg data pointer, options, application data.",
        "الترويسة: منفذ المصدر والوجهة، <b>رقم التسلسل</b>، <b>رقم الـ ACK</b>، طول الترويسة، الأعلام (C وE للازدحام، A يعني الـ ACK صالح، R وS وF لإدارة الاتصال RST وSYN وFIN)، <b>نافذة الاستقبال</b> (كم بايت يقبل المستقبل)، checksum، وغيرها."
      ],
      [
        "<b>Sequence numbers:</b> byte stream \"number\" of the <b>first byte in segment's data</b>.",
        "رقم التسلسل: رقم <b>أول بايت</b> في بيانات الـ segment."
      ],
      [
        "<b>Acknowledgements:</b> seq # of <b>next byte expected</b> from other side; cumulative ACK.",
        "رقم الـ ACK: رقم <b>البايت الجاي المتوقع</b> من الطرف الثاني، وتراكمي."
      ],
      [
        "Q: how does the receiver handle out-of-order segments? A: <b>TCP spec doesn't say</b> — up to implementor.",
        "كيف يتعامل المستقبل مع الـ segments اللي خارج الترتيب؟ <b>المواصفات ما تقول</b>، يرجع للمبرمج."
      ],
      [
        "Simple telnet scenario: user types 'C' → Host A sends Seq=42, ACK=79, data='C'; Host B ACKs receipt of 'C' and echoes back: Seq=79, ACK=43, data='C'; Host A ACKs echoed 'C': Seq=43, ACK=80.",
        "مثال telnet: A يرسل Seq=42 وACK=79 مع 'C'، وB يرد Seq=79 وACK=43 ويرجع 'C'، وA يأكد بـ Seq=43 وACK=80."
      ]
    ],
    "trap": [
      "ACK number = <b>next byte expected</b> (seq + data length), not the last byte received. Seq 92 with 8 bytes → ACK <b>100</b>.",
      "رقم الـ ACK = <b>البايت الجاي</b> (التسلسل + طول البيانات) مو آخر بايت. Seq 92 مع 8 بايت → ACK <b>100</b>."
    ],
    "idx": 32
  },
  {
    "id": "rtt",
    "ch": 3,
    "t": "TCP RTT, Timeout & Retransmission",
    "ar": "RTT والـ Timeout وإعادة الإرسال في TCP",
    "pts": [
      [
        "Q: how to set TCP timeout value? <b>Longer than RTT</b>, but RTT varies! Too short: premature timeout, unnecessary retransmissions; too long: slow reaction to segment loss.",
        "كيف نحدد الـ timeout؟ <b>أطول من RTT</b>، بس الـ RTT يتغير! لو قصير: إعادات ما لها داعي، ولو طويل: نتأخر بالرد على الفقد."
      ],
      [
        "<b>SampleRTT:</b> measured time from segment transmission until ACK receipt; <b>ignore retransmissions</b>; SampleRTT varies, want an estimated RTT \"smoother\" → average several recent measurements.",
        "SampleRTT: الوقت المقاس من الإرسال لين يجي الـ ACK، <b>نتجاهل الإعادات</b>، ولأنه يتذبذب ناخذ متوسط."
      ],
      [
        "<b>EstimatedRTT = (1 − α)·EstimatedRTT + α·SampleRTT</b>; exponential weighted moving average (<b>EWMA</b>); influence of past sample decreases exponentially fast; typical value: <b>α = 0.125</b>.",
        "EstimatedRTT = (1−α)×القديم + α×العينة. متوسط متحرك أُسّي (EWMA)، وتأثير العينات القديمة يقل بسرعة، وα عادة <b>0.125</b>."
      ],
      [
        "<b>DevRTT = (1 − β)·DevRTT + β·|SampleRTT − EstimatedRTT|</b> (typically, <b>β = 0.25</b>) — EWMA of SampleRTT deviation from EstimatedRTT.",
        "DevRTT = (1−β)×القديم + β×|العينة − المقدّر|، وβ عادة <b>0.25</b>: متوسط الانحراف."
      ],
      [
        "<b>TimeoutInterval = EstimatedRTT + 4·DevRTT</b> — estimated RTT plus \"safety margin\"; large variation in EstimatedRTT → want a larger safety margin.",
        "<b>TimeoutInterval = EstimatedRTT + 4×DevRTT</b>: المقدّر + هامش أمان، وكل ما زاد التذبذب زاد الهامش."
      ],
      [
        "TCP sender events: <b>data received from app</b> → create segment with seq #, start timer if not already running (timer for oldest unACKed segment). <b>Timeout</b> → retransmit segment that caused timeout, restart timer. <b>ACK received</b> → if it ACKs previously unACKed segments: update what is known ACKed, start timer if there are still unACKed segments.",
        "أحداث المرسل: بيانات من التطبيق → segment برقم وشغّل المؤقت إذا مو شغال (لأقدم segment). timeout → أعد الـ segment اللي سبب الـ timeout وشغّل المؤقت من جديد. ACK → حدّث المؤكد وشغّل المؤقت إذا باقي غير مؤكد."
      ],
      [
        "Receiver ACK generation [RFC 5681]: in-order segment, all data up to expected already ACKed → <b>delayed ACK</b>, wait up to <b>500ms</b>; in-order with one other ACK pending → immediately send <b>single cumulative ACK</b>; out-of-order higher-than-expected (gap) → immediately send <b>duplicate ACK</b>; segment that fills gap → immediate ACK.",
        "توليد الـ ACK: segment بالترتيب وكل شي مأكد → <b>ACK مؤجل</b> لين 500ms. بالترتيب ومعه واحد معلّق → <b>ACK تراكمي واحد</b> فوراً. خارج الترتيب (فجوة) → <b>ACK مكرر</b> فوراً. segment يسد الفجوة → ACK فوري."
      ],
      [
        "Retransmission scenarios: <b>lost ACK</b> (Seq=92, 8 bytes; ACK=100 lost → timeout → resend Seq=92); <b>premature timeout</b> (resend Seq=92, then send cumulative ACK for 120); <b>cumulative ACK covers for earlier lost ACK</b> (ACK=100 lost but ACK=120 arrives → no retransmission).",
        "سيناريوهات: <b>ضياع ACK</b> → timeout ويعيد Seq=92. <b>timeout مبكر</b> → يعيد 92 والمستقبل يرد ACK تراكمي 120. <b>ACK تراكمي يغطي</b> ACK ضايع → ما يعيد شي."
      ],
      [
        "<b>TCP fast retransmit:</b> if sender receives <b>3 additional ACKs for same data (\"triple duplicate ACKs\")</b>, resend unACKed segment with smallest seq # — likely that unACKed segment lost, so <b>don't wait for timeout</b>.",
        "الإعادة السريعة: إذا وصل المرسل <b>3 ACKs مكررة</b> لنفس البيانات يعيد أصغر segment ما تأكد، <b>بدون ما ينتظر الـ timeout</b>."
      ]
    ],
    "trap": [
      "α = <b>0.125</b>, β = <b>0.25</b>, Timeout = EstRTT + <b>4</b>·DevRTT. Fast retransmit needs <b>3 duplicate</b> ACKs.",
      "α = 0.125 وβ = 0.25 والـ Timeout = EstRTT + <b>4</b>×DevRTT. والإعادة السريعة بعد <b>3 ACKs مكررة</b>."
    ],
    "idx": 33
  },
  {
    "id": "flow",
    "ch": 3,
    "t": "TCP Flow Control",
    "ar": "التحكم بالتدفق في TCP",
    "pts": [
      [
        "Q: What happens if the network layer delivers data faster than the application layer removes data from socket buffers? → receiver buffer overflow.",
        "وش يصير لو الشبكة توصل بيانات أسرع من ما التطبيق يسحبها من الـ buffer؟ يفيض."
      ],
      [
        "<b>Flow control:</b> receiver controls sender, so sender won't overflow receiver's buffer by transmitting too much, too fast.",
        "التحكم بالتدفق: المستقبل يتحكم بالمرسل عشان ما يغرق الـ buffer حقه بإرسال كثير وسريع."
      ],
      [
        "TCP receiver <b>\"advertises\" free buffer space</b> in the <b>rwnd</b> field in the TCP header; RcvBuffer size set via socket options (typical default is <b>4096 bytes</b>); many operating systems auto-adjust RcvBuffer.",
        "المستقبل <b>يعلن المساحة الفاضية</b> في حقل <b>rwnd</b> في الترويسة، وحجم RcvBuffer يتحدد بخيارات الـ socket (الافتراضي عادة <b>4096 بايت</b>) وأغلب الأنظمة تعدله تلقائياً."
      ],
      [
        "Sender <b>limits amount of unACKed (\"in-flight\") data to received rwnd</b> → guarantees receive buffer will not overflow.",
        "المرسل <b>يحدد البيانات اللي ما تأكدت بقيمة rwnd</b>، فالـ buffer ما يفيض أبد."
      ]
    ],
    "trap": [
      "Flow control = protect the <b>receiver</b> (rwnd). Congestion control = protect the <b>network</b> (cwnd).",
      "التحكم بالتدفق يحمي <b>المستقبل</b> (rwnd)، والتحكم بالازدحام يحمي <b>الشبكة</b> (cwnd)."
    ],
    "idx": 34
  },
  {
    "id": "conn",
    "ch": 3,
    "t": "TCP Connection Management",
    "ar": "إدارة اتصال TCP",
    "pts": [
      [
        "Before exchanging data, sender/receiver \"<b>handshake</b>\": agree to establish connection (each knowing the other is willing) and agree on connection parameters (e.g., <b>starting seq #s</b>).",
        "قبل تبادل البيانات يسوون «مصافحة»: يتفقون على الاتصال وعلى إعداداته مثل <b>أرقام التسلسل الابتدائية</b>."
      ],
      [
        "Connection state: <b>ESTAB</b>; connection variables: seq # client-to-server and server-to-client, rcvBuffer size at server and client.",
        "حالة الاتصال ESTAB، والمتغيرات: أرقام التسلسل بالاتجاهين وحجم الـ buffer."
      ],
      [
        "Q: will a <b>2-way handshake</b> always work in a network? Variable delays, retransmitted messages (e.g. req_conn(x)) due to message loss, message reordering, can't \"see\" other side → problems: <b>half open connection</b> (no client!) and <b>duplicate data accepted</b>.",
        "المصافحة الثنائية تنفع دايم؟ لا: التأخير متغير، الرسائل تنعاد بسبب الفقد، الترتيب يتلخبط، وما تشوف الطرف الثاني، فيصير <b>اتصال نص مفتوح</b> (بدون عميل) أو <b>بيانات مكررة تنقبل</b>."
      ],
      [
        "<b>TCP 3-way handshake:</b> client → <b>SYNbit=1, Seq=x</b> (SYNSENT); server → <b>SYNbit=1, Seq=y, ACKbit=1, ACKnum=x+1</b> (SYN RCVD); client → <b>ACKbit=1, ACKnum=y+1</b> (ESTAB) — may contain client-to-server data; server → ESTAB.",
        "المصافحة الثلاثية: العميل يرسل SYN بـ Seq=x، الخادم يرد SYN+ACK بـ Seq=y وACKnum=x+1، والعميل يرد ACK بـ ACKnum=y+1 (ممكن معه بيانات)، وكلهم ESTAB."
      ],
      [
        "Server: `serverSocket.listen(1)` → <b>LISTEN</b>; `connectionSocket, addr = serverSocket.accept()`. Client: `clientSocket.connect((serverName,serverPort))`.",
        "الخادم في حالة LISTEN بعد listen ويقبل بـ accept، والعميل يتصل بـ connect."
      ],
      [
        "<b>Closing a TCP connection:</b> client and server each close their side: send TCP segment with <b>FIN bit = 1</b>; respond to received FIN with <b>ACK</b>; on receiving FIN, ACK can be combined with own FIN; simultaneous FIN exchanges can be handled.",
        "إغلاق الاتصال: كل طرف يقفل جهته بإرسال <b>FIN = 1</b>، والثاني يرد <b>ACK</b>، وممكن يدمج الـ ACK مع الـ FIN حقه، وتبادل FIN بنفس الوقت ينحل عادي."
      ]
    ],
    "trap": [
      "3-way: SYN(x) → SYNACK(y, ACK x+1) → ACK(y+1). 2-way fails: <b>half-open</b> connections, <b>duplicate data</b>. Close with <b>FIN</b>.",
      "الثلاثية: SYN(x) ← SYNACK(y, x+1) ← ACK(y+1). الثنائية تفشل بسبب الاتصال النص مفتوح والبيانات المكررة. والإغلاق بـ FIN."
    ],
    "idx": 35
  },
  {
    "id": "cong",
    "ch": 3,
    "t": "Principles of Congestion Control",
    "ar": "مبادئ التحكم بالازدحام",
    "pts": [
      [
        "<b>Congestion</b> informally: \"too many sources sending too much data too fast for <b>network</b> to handle\"; manifestations: <b>long delays</b> (queueing in router buffers), <b>packet loss</b> (buffer overflow at routers); a top-10 problem!",
        "الازدحام: «مصادر كثيرة ترسل بيانات كثيرة بسرعة أكبر من قدرة <b>الشبكة</b>». علاماته: <b>تأخير طويل</b> (طوابير) و<b>فقد حزم</b> (فيضان الـ buffers)."
      ],
      [
        "<b>Different from flow control!</b> Flow control: <b>one sender too fast for one receiver</b>.",
        "يختلف عن التحكم بالتدفق! التدفق: <b>مرسل واحد أسرع من مستقبل واحد</b>."
      ],
      [
        "Scenario 1 (one router, infinite buffers, no retransmissions): maximum per-connection throughput <b>R/2</b>; <b>large delays</b> as arrival rate approaches capacity.",
        "السيناريو 1 (buffers لا نهائية): أعلى إنتاجية لكل اتصال <b>R/2</b>، والتأخير يكبر جداً لما الوصول يقرب من السعة."
      ],
      [
        "Scenario 2 (finite buffers): packets can be lost and must be retransmitted; sender may time out prematurely, sending two copies that are both delivered (<b>un-needed duplicates</b>).",
        "السيناريو 2 (buffers محدودة): الحزم تضيع وتنعاد، وممكن timeout مبكر يرسل نسختين توصلان الاثنتين (<b>تكرار ما له داعي</b>)."
      ],
      [
        "\"Costs\" of congestion: <b>more work</b> (retransmission) for given receiver throughput; <b>unneeded retransmissions</b>: link carries multiple copies of a packet, decreasing maximum achievable throughput.",
        "تكاليف الازدحام: <b>شغل أكثر</b> (إعادات) لنفس الإنتاجية، و<b>إعادات ما لها داعي</b> تخلي الرابط يحمل نسخ كثيرة فتقل الإنتاجية القصوى."
      ],
      [
        "Scenario 3 (four senders, multi-hop): as red λ'_{in} increases, all arriving blue pkts at upper queue are dropped → blue throughput → 0. Another cost: when a packet is dropped, any <b>upstream transmission capacity and buffering used for that packet was wasted</b>!",
        "السيناريو 3 (4 مرسلين ومسارات متعددة): كل ما زاد الأحمر انرمت حزم الأزرق لين إنتاجيته تصير صفر. وتكلفة ثانية: الحزمة اللي تنرمى، <b>كل السعة والتخزين اللي استخدمتها قبل ضاعت</b>."
      ],
      [
        "<b>End-end congestion control:</b> no explicit feedback from network; congestion <b>inferred</b> from observed loss, delay — <b>approach taken by TCP</b>.",
        "التحكم من الطرف للطرف: بدون إشارة من الشبكة، نستنتج الازدحام من الفقد والتأخير، و<b>هذا أسلوب TCP</b>."
      ],
      [
        "<b>Network-assisted congestion control:</b> routers provide direct feedback to sending/receiving hosts with flows passing through congested router; may indicate congestion level or explicitly set sending rate — TCP ECN, ATM, DECbit protocols.",
        "التحكم بمساعدة الشبكة: الراوترات ترسل إشارة مباشرة للأجهزة اللي تمر من الراوتر المزدحم، تقول مستوى الازدحام أو تحدد السرعة. مثل TCP ECN وATM وDECbit."
      ]
    ],
    "trap": [
      "Congestion control protects the <b>network</b>; flow control protects the <b>receiver</b>. Classic TCP = <b>end-end</b> (infers from loss/delay).",
      "الازدحام يحمي <b>الشبكة</b> والتدفق يحمي <b>المستقبل</b>. وTCP التقليدي <b>من الطرف للطرف</b> يستنتج من الفقد والتأخير."
    ],
    "idx": 36
  },
  {
    "id": "tcpcc",
    "ch": 3,
    "t": "TCP Congestion Control: AIMD, Slow Start, CUBIC",
    "ar": "تحكم TCP بالازدحام",
    "pts": [
      [
        "<b>AIMD</b> approach: senders increase sending rate until packet loss (congestion) occurs, then decrease on loss event. <b>Additive Increase:</b> increase sending rate by <b>1 MSS every RTT</b> until loss detected. <b>Multiplicative Decrease:</b> cut sending rate in half at each loss event → <b>sawtooth</b> behavior: probing for bandwidth.",
        "AIMD: المرسل يزيد السرعة لين يصير فقد، بعدين ينقص. <b>زيادة جمعية</b>: +1 MSS كل RTT. <b>نقص ضربي</b>: ينقص للنص عند الفقد، فيطلع شكل <b>المنشار</b>."
      ],
      [
        "Multiplicative decrease detail: sending rate is <b>cut in half on loss detected by triple duplicate ACK (TCP Reno)</b>; <b>cut to 1 MSS when loss detected by timeout (TCP Tahoe)</b>.",
        "النقص: ينقص <b>للنص</b> إذا انكشف الفقد بـ <b>3 ACKs مكررة (Reno)</b>، وينقص لـ <b>1 MSS</b> إذا انكشف بـ <b>timeout (Tahoe)</b>."
      ],
      [
        "Why AIMD? A distributed, asynchronous algorithm shown to optimize congested flow rates network wide and have desirable stability properties.",
        "ليش AIMD؟ خوارزمية موزعة وغير متزامنة ثبت إنها تحسن السرعات على مستوى الشبكة ومستقرة."
      ],
      [
        "Details: TCP sender limits transmission: <b>LastByteSent − LastByteAcked ≤ cwnd</b>; cwnd is dynamically adjusted in response to observed congestion; <b>TCP rate ≈ cwnd/RTT</b> bytes/sec.",
        "التفاصيل: المرسل ما يتعدى cwnd في البيانات اللي ما تأكدت، وcwnd تتعدل حسب الازدحام، و<b>السرعة ≈ cwnd ÷ RTT</b>."
      ],
      [
        "<b>Slow start:</b> when connection begins, increase rate <b>exponentially</b> until first loss event: initially <b>cwnd = 1 MSS</b>; <b>double cwnd every RTT</b>; done by incrementing cwnd for every ACK received → initial rate is slow, but ramps up exponentially fast.",
        "البداية البطيئة: أول الاتصال تزيد <b>أُسّياً</b> لين أول فقد: تبدأ cwnd = 1 MSS و<b>تتضاعف كل RTT</b> (بزيادة لكل ACK). تبدأ بطيئة بس تطير بسرعة."
      ],
      [
        "Q: when should exponential increase switch to linear? A: when cwnd gets to <b>1/2 of its value before timeout</b>. Implementation: variable <b>ssthresh</b>; on loss event, <b>ssthresh = 1/2 of cwnd just before loss</b>.",
        "متى نتحول من أُسّي لخطي؟ لما cwnd توصل <b>نص قيمتها قبل الـ timeout</b>. ونستخدم متغير <b>ssthresh</b>: عند الفقد ssthresh = نص cwnd."
      ],
      [
        "Summary: slow start → (cwnd ≥ ssthresh) → congestion avoidance (+1 MSS per RTT); <b>timeout</b> → ssthresh = cwnd/2, <b>cwnd = 1 MSS</b>, slow start; <b>triple dup ACK</b> → ssthresh = cwnd/2, cwnd = ssthresh + 3 (fast recovery, Reno).",
        "الخلاصة: بداية بطيئة لين ssthresh، بعدين تجنب ازدحام (+1 كل RTT). <b>timeout</b> → ssthresh = النص و<b>cwnd = 1</b>. <b>3 مكررة</b> → ssthresh = النص وcwnd = ssthresh + 3 (Reno)."
      ],
      [
        "<b>TCP CUBIC:</b> W_{max} = sending rate at which congestion loss was detected; congestion state of bottleneck probably hasn't changed much → after cutting in half, initially ramp to W_{max} <b>faster</b>, then approach W_{max} more <b>slowly</b>. K: point in time when window reaches W_{max}; increase W as a function of the <b>cube</b> of distance between current time and K. <b>Default in Linux</b>, most popular TCP for popular Web servers.",
        "CUBIC: W_{max} السرعة اللي صار عندها الفقد. بعد النقص يرجع لـ W_{max} <b>بسرعة</b> وقربها <b>يهدّي</b>. K الوقت اللي يوصل فيه W_{max}، والزيادة دالة <b>تكعيبية</b> للمسافة عن K. <b>الافتراضي في Linux</b>."
      ],
      [
        "<b>Bottleneck link:</b> TCP (classic, CUBIC) increases rate until packet loss occurs at some router's output. Goal: \"keep the end-end pipe <b>just full, but not fuller</b>\".",
        "رابط عنق الزجاجة: TCP يزيد لين يصير فقد عند راوتر. والهدف: «خل الأنبوب <b>مليان بالضبط بس لا يفيض</b>»."
      ],
      [
        "<b>Delay-based:</b> RTT_{min} = minimum observed RTT (uncongested path); uncongested throughput = cwnd/RTT_{min}; if measured throughput \"very close\" → increase cwnd linearly; if \"far below\" → decrease cwnd linearly. Congestion control <b>without inducing/forcing loss</b>; <b>BBR</b> deployed on Google's (internal) backbone.",
        "المبني على التأخير: RTT_{min} أقل RTT، والإنتاجية بدون ازدحام cwnd/RTT_{min}. إذا المقاس قريب منها يزيد خطياً، وإذا أقل بكثير ينقص. تحكم <b>بدون ما يسبب فقد</b>، ومثاله <b>BBR</b> في شبكة Google."
      ],
      [
        "<b>ECN</b> (Explicit congestion notification): network-assisted; <b>two bits in IP header (ToS field)</b> marked by router to indicate congestion; destination sets <b>ECE bit on ACK</b> to notify sender; involves both IP and TCP.",
        "ECN: بمساعدة الشبكة، الراوتر يعلّم <b>بتين في ترويسة IP</b> (حقل ToS)، والوجهة تحط بت <b>ECE في الـ ACK</b> تخبر المرسل. يشمل IP وTCP."
      ],
      [
        "<b>Fairness goal:</b> if K TCP sessions share the same bottleneck link of bandwidth R, each should have average rate of <b>R/K</b>. TCP is fair (under idealized assumptions): additive increase slope 1, multiplicative decrease proportional → converges to equal share.",
        "العدالة: لو K اتصالات تتشارك رابط R، كل واحد ياخذ <b>R/K</b>. وTCP عادل (بافتراضات مثالية) لأن AIMD يوصلهم للتساوي."
      ],
      [
        "Fairness and UDP: multimedia apps often use UDP (don't want rate throttled; send at constant rate, tolerate loss); there is <b>no \"Internet police\"</b>. Parallel connections: link R with 9 existing connections: new app asking for 1 TCP gets <b>R/10</b>; asking for 11 TCPs gets <b>R/2</b>.",
        "UDP والعدالة: تطبيقات الوسائط تستخدم UDP (ما تبي أحد يهدّيها)، و<b>ما فيه شرطة إنترنت</b>. والاتصالات المتوازية: رابط فيه 9 اتصالات، تطبيق بـ 1 ياخذ <b>R/10</b>، وبـ 11 ياخذ <b>R/2</b>."
      ]
    ],
    "trap": [
      "<b>Timeout</b> → cwnd = <b>1 MSS</b> (Tahoe); <b>3 dup ACKs</b> → cwnd <b>halved</b> (Reno). ssthresh = cwnd/2 in both. Slow start is exponential (not slow!).",
      "<b>timeout</b> → cwnd = <b>1</b>، و<b>3 مكررة</b> → <b>النص</b>. وssthresh = النص في الحالتين. والبداية البطيئة أُسّية (مو بطيئة!)."
    ],
    "idx": 37
  }
];

export const Q = [
  [
    1,
    "inet",
    "In the \"nuts and bolts\" view, end systems such as laptops and phones are called:",
    [
      "Hosts",
      "Routers",
      "Packet switches",
      "Links"
    ],
    "الأجهزة الطرفية اللي تشغّل التطبيقات اسمها hosts أو end systems، أما الراوترات والـ switches فهي محوّلات حزم.",
    "Devices at the Internet's edge running network apps are hosts (end systems); routers and switches are packet switches.",
    0,
    0
  ],
  [
    1,
    "inet",
    "Routers and switches are examples of:",
    [
      "Packet switches",
      "Hosts",
      "Access points only",
      "Protocols"
    ],
    "الراوترات والـ switches وظيفتها تمرير الحزم، فاسمها packet switches.",
    "Routers and switches forward packets, so they are packet switches.",
    0,
    0
  ],
  [
    1,
    "inet",
    "The transmission rate of a communication link is called its:",
    [
      "Bandwidth",
      "Latency",
      "Throughput",
      "Hop count"
    ],
    "معدل إرسال الرابط اسمه bandwidth حسب السلايد.",
    "The slides define a link's transmission rate as its bandwidth.",
    0,
    0
  ],
  [
    1,
    "inet",
    "The Internet is described as a \"network of networks\" because it is made of:",
    [
      "Interconnected ISPs",
      "One global router",
      "A single backbone cable",
      "Only data centers"
    ],
    "الإنترنت عبارة عن مزودي خدمة (ISPs) مربوطين ببعض، فهو شبكة من الشبكات.",
    "The Internet is interconnected ISPs, hence a network of networks.",
    0,
    0
  ],
  [
    1,
    "inet",
    "RFC stands for:",
    [
      "Request for Comments",
      "Router Forwarding Control",
      "Remote Function Call",
      "Reliable Frame Channel"
    ],
    "RFC = Request for Comments، وهي وثائق معايير الإنترنت.",
    "RFC = Request for Comments, the Internet standards documents.",
    0,
    0
  ],
  [
    1,
    "inet",
    "Which organization develops Internet standards (RFCs)?",
    [
      "IETF",
      "ICANN",
      "IEEE only",
      "W3C"
    ],
    "IETF = Internet Engineering Task Force، هي اللي تكتب معايير الإنترنت. أما ICANN فتدير الأسماء والجذر.",
    "The IETF (Internet Engineering Task Force) produces Internet standards; ICANN manages names and the DNS root.",
    0,
    0
  ],
  [
    1,
    "inet",
    "In the \"services\" view, the Internet provides distributed applications with:",
    [
      "A programming interface (hooks) to use the transport service",
      "A list of all routers",
      "Physical cables",
      "Guaranteed delay"
    ],
    "نظرة الخدمات: الإنترنت يقدم واجهة برمجية (hooks) تخلي التطبيقات تستخدم خدمة النقل، مثل خدمة البريد.",
    "The services view: infrastructure plus a programming interface (hooks) letting apps use Internet transport, like a postal service.",
    0,
    0
  ],
  [
    1,
    "inet",
    "Which of these is NOT listed as a protocol on the slides?",
    [
      "Windows",
      "HTTP",
      "TCP",
      "Ethernet"
    ],
    "Windows نظام تشغيل مو بروتوكول. HTTP وTCP وEthernet كلها بروتوكولات.",
    "Windows is an operating system, not a protocol; HTTP, TCP and Ethernet are protocols.",
    0,
    0
  ],
  [
    1,
    "proto",
    "Protocols define:",
    [
      "The format and order of messages, and actions taken on transmission/receipt",
      "Only the speed of a link",
      "Only the physical cable type",
      "Only the IP address of a host"
    ],
    "البروتوكول يحدد شكل الرسائل وترتيبها، والأفعال اللي تنسوى عند الإرسال والاستلام.",
    "A protocol defines message format and order, plus the actions taken on sending and receiving.",
    0,
    0
  ],
  [
    1,
    "proto",
    "In the Internet, communication activity is governed by:",
    [
      "Protocols",
      "Operating systems only",
      "Users",
      "Cables"
    ],
    "كل نشاط اتصال في الإنترنت تحكمه بروتوكولات.",
    "All communication activity in the Internet is governed by protocols.",
    0,
    0
  ],
  [
    1,
    "proto",
    "\"What's the time?\" followed by an answer is an example of a:",
    [
      "Human protocol",
      "Network protocol",
      "Routing algorithm",
      "Socket"
    ],
    "هذا مثال بروتوكول بشري: رسالة محددة ورد محدد.",
    "It's a human protocol: a specific message and a specific response.",
    0,
    0
  ],
  [
    1,
    "proto",
    "Network protocols differ from human protocols mainly because they are between:",
    [
      "Computers (devices) rather than humans",
      "Humans only",
      "Cables only",
      "Countries"
    ],
    "البروتوكولات الشبكية بين الأجهزة بدل البشر، بس نفس الفكرة.",
    "Network protocols run between devices instead of humans; the idea is the same.",
    0,
    0
  ],
  [
    1,
    "edge",
    "Servers at the network edge are often located in:",
    [
      "Data centers",
      "Access points",
      "Routers",
      "Cable modems"
    ],
    "الخوادم غالباً في مراكز البيانات (data centers).",
    "Servers are often in data centers.",
    0,
    0
  ],
  [
    1,
    "edge",
    "Cable-based access uses which technique to carry different channels?",
    [
      "Frequency division multiplexing (FDM)",
      "Time division multiplexing only",
      "Store-and-forward",
      "Circuit reservation"
    ],
    "الكيبل يستخدم FDM: كل قناة في نطاق تردد مختلف.",
    "Cable access uses FDM: different channels in different frequency bands.",
    0,
    0
  ],
  [
    1,
    "edge",
    "HFC stands for:",
    [
      "Hybrid fiber coax",
      "High frequency cable",
      "Host forwarding channel",
      "Half-duplex fiber cable"
    ],
    "HFC = hybrid fiber coax، خليط ألياف وكوأكس.",
    "HFC = hybrid fiber coax.",
    0,
    0
  ],
  [
    1,
    "edge",
    "Cable (HFC) access is described as asymmetric. This means:",
    [
      "Downstream rate is higher than upstream rate",
      "Upstream is higher than downstream",
      "Both directions are equal",
      "It only works one way"
    ],
    "غير متماثل يعني التنزيل (حتى 1.2 Gbps) أعلى من الرفع (30–100 Mbps).",
    "Asymmetric: downstream (up to 1.2 Gbps) exceeds upstream (30–100 Mbps).",
    0,
    0
  ],
  [
    1,
    "edge",
    "In cable access, homes:",
    [
      "Share the access network to the cable headend",
      "Each have a dedicated line to the central office",
      "Connect directly to a tier-1 ISP",
      "Need no modem"
    ],
    "في الكيبل البيوت تتشارك الشبكة لين الـ cable headend، عكس DSL المخصص.",
    "In cable access, homes share the network to the cable headend, unlike dedicated DSL.",
    0,
    0
  ],
  [
    1,
    "edge",
    "DSL uses:",
    [
      "The existing telephone line to the central office DSLAM",
      "Coaxial TV cable to the headend",
      "Satellite links",
      "Fiber to every home only"
    ],
    "DSL يستخدم خط الهاتف الموجود لين السنترال (DSLAM).",
    "DSL uses the existing telephone line to the central office DSLAM.",
    0,
    0
  ],
  [
    1,
    "edge",
    "DSL downstream transmission rate is:",
    [
      "Dedicated (24–52 Mbps)",
      "Shared among neighbors (up to 1.2 Gbps)",
      "Always 1 Gbps",
      "Zero"
    ],
    "DSL التنزيل مخصص 24–52 Mbps، والرفع 3.5–16 Mbps.",
    "DSL downstream is dedicated at 24–52 Mbps (upstream 3.5–16 Mbps).",
    0,
    0
  ],
  [
    1,
    "edge",
    "Over a DSL line, voice traffic goes to:",
    [
      "The telephone network",
      "The Internet",
      "The cable headend",
      "A data center"
    ],
    "على DSL: البيانات للإنترنت، والصوت لشبكة الهاتف.",
    "On DSL, data goes to the Internet and voice goes to the telephone net.",
    0,
    0
  ],
  [
    1,
    "edge",
    "In wireless access, an end system connects to the router through a base station also called:",
    [
      "An access point",
      "A DSLAM",
      "A headend",
      "A tracker"
    ],
    "المحطة القاعدية في الشبكة اللاسلكية اسمها access point.",
    "The wireless base station is also called an access point.",
    0,
    0
  ],
  [
    1,
    "edge",
    "Which link speeds are listed for enterprise Ethernet?",
    [
      "100 Mbps, 1 Gbps, 10 Gbps",
      "11, 54, 450 Mbps",
      "24–52 Mbps",
      "56 kbps"
    ],
    "Ethernet في المؤسسات: 100 Mbps و1 و10 Gbps. أما 11 و54 و450 فهي WiFi.",
    "Enterprise Ethernet: 100 Mbps, 1 Gbps, 10 Gbps; 11/54/450 Mbps are WiFi.",
    0,
    0
  ],
  [
    1,
    "edge",
    "Data center networks use links of:",
    [
      "10s to 100s of Gbps",
      "Only 1 Mbps",
      "Only wireless links",
      "Telephone lines"
    ],
    "مراكز البيانات روابطها عالية جداً: عشرات لمئات Gbps.",
    "Data center networks use 10s to 100s of Gbps links.",
    0,
    0
  ],
  [
    1,
    "edge",
    "Which is NOT one of the three kinds of access networks listed?",
    [
      "Core access network",
      "Residential",
      "Institutional",
      "Mobile"
    ],
    "شبكات الوصول: منزلية، مؤسسية، وجوال. ما فيه شي اسمه core access.",
    "Access networks are residential, institutional and mobile; there is no \"core access\" type.",
    0,
    0
  ],
  [
    1,
    "media",
    "A host breaks an application message into packets of length L bits and transmits them at rate R. R is also called:",
    [
      "Link capacity / link bandwidth",
      "Propagation speed",
      "Queue length",
      "Processing delay"
    ],
    "R معدل الإرسال، ويسمى link capacity أو link bandwidth.",
    "R is the link transmission rate, aka link capacity or bandwidth.",
    0,
    0
  ],
  [
    1,
    "media",
    "Which of the following is UNGUIDED media?",
    [
      "Radio",
      "Coaxial cable",
      "Fiber optic",
      "Copper twisted pair"
    ],
    "غير الموجّه الإشارة تنتشر بحرية مثل الراديو، والباقي وسائط صلبة موجّهة.",
    "Unguided media propagate freely (radio); copper, coax and fiber are guided.",
    0,
    0
  ],
  [
    1,
    "media",
    "Coaxial cable consists of:",
    [
      "Two concentric copper conductors",
      "Glass fiber carrying light",
      "Radio waves",
      "A single twisted pair"
    ],
    "الكوأكس: موصلين نحاس متحدين المركز، وباتجاهين.",
    "Coax is two concentric copper conductors, bidirectional.",
    0,
    0
  ],
  [
    1,
    "media",
    "\"Broadband\" on coaxial cable means:",
    [
      "Multiple frequency channels on the cable",
      "Only one channel",
      "Light pulses",
      "Wireless transmission"
    ],
    "broadband يعني قنوات تردد متعددة على نفس الكيبل.",
    "Broadband means multiple frequency channels on the cable.",
    0,
    0
  ],
  [
    1,
    "media",
    "Wireless radio links are described as:",
    [
      "Broadcast and half-duplex",
      "Point-to-point full-duplex wires",
      "Guided media",
      "Immune to interference"
    ],
    "الراديو بث وhalf-duplex، ويتأثر بالانعكاس والعوائق والتشويش.",
    "Radio is broadcast and half-duplex, affected by reflection, obstruction and interference.",
    0,
    0
  ],
  [
    1,
    "media",
    "End-end delay of a geostationary satellite link is about:",
    [
      "270 msec",
      "1 msec",
      "27 sec",
      "2.7 µsec"
    ],
    "تأخير القمر الصناعي الثابت حوالي 270 ms.",
    "Geostationary satellite end-end delay is about 270 msec.",
    0,
    0
  ],
  [
    1,
    "media",
    "Which radio link type is described as \"cable replacement, short distances, limited rates\"?",
    [
      "Bluetooth",
      "4G/5G",
      "Terrestrial microwave",
      "Satellite"
    ],
    "Bluetooth بديل الكيبل لمسافات قصيرة وسرعات محدودة.",
    "Bluetooth: cable replacement for short distances with limited rates.",
    0,
    0
  ],
  [
    1,
    "media",
    "Wide-area cellular (4G) offers around:",
    [
      "10's Mbps over ~10 km",
      "Gbps over 10 m",
      "45 Mbps point-to-point",
      "270 msec delay"
    ],
    "4G: عشرات Mbps لمسافة حوالي 10 كم.",
    "4G cellular gives 10's of Mbps over about 10 km.",
    0,
    0
  ],
  [
    1,
    "media",
    "Which propagation effect is NOT listed for wireless radio?",
    [
      "Store-and-forward",
      "Reflection",
      "Obstruction by objects",
      "Interference/noise"
    ],
    "تأثيرات الراديو: الانعكاس والعوائق والتشويش. store-and-forward خاص بالراوترات.",
    "Radio effects are reflection, obstruction and interference; store-and-forward is a router concept.",
    0,
    0
  ],
  [
    1,
    "core",
    "The network core is:",
    [
      "A mesh of interconnected routers",
      "The set of all laptops",
      "A single server",
      "The physical layer only"
    ],
    "لبّ الشبكة شبكة متشابكة من الراوترات.",
    "The network core is a mesh of interconnected routers.",
    0,
    0
  ],
  [
    1,
    "core",
    "Forwarding is:",
    [
      "A local action: move a packet from input link to the appropriate output link",
      "A global action that computes end-end paths",
      "Encrypting a packet",
      "Assigning IP addresses"
    ],
    "التمرير فعل محلي داخل الراوتر: من رابط الدخول للخروج المناسب.",
    "Forwarding is local: moving an arriving packet to the right output link.",
    1,
    0
  ],
  [
    1,
    "core",
    "Routing is:",
    [
      "A global action that determines source-destination paths",
      "A local move from input to output port",
      "Breaking messages into packets",
      "Checking bit errors"
    ],
    "التوجيه فعل عام يحدد المسار كامل بخوارزميات التوجيه.",
    "Routing is global: determining source-to-destination paths with routing algorithms.",
    1,
    0
  ],
  [
    1,
    "core",
    "How long does it take to push an L-bit packet into a link of R bps?",
    [
      "L/R seconds",
      "R/L seconds",
      "L×R seconds",
      "d/s seconds"
    ],
    "تأخير الإرسال = L/R ثانية.",
    "Transmission delay = L/R seconds.",
    1,
    0
  ],
  [
    1,
    "core",
    "Store-and-forward means:",
    [
      "The entire packet must arrive at the router before it is transmitted on the next link",
      "Bits are forwarded as soon as they arrive",
      "Routers store packets forever",
      "Only the header is stored"
    ],
    "لازم الحزمة كاملة توصل الراوتر قبل ما تنرسل للرابط اللي بعده.",
    "The whole packet must arrive at the router before being sent on the next link.",
    1,
    0
  ],
  [
    1,
    "core",
    "A 10,000-bit packet crosses 2 links of 1 Mbps each (store-and-forward, ignore propagation). End-end delay?",
    [
      "20 ms",
      "10 ms",
      "5 ms",
      "40 ms"
    ],
    "كل رابط L/R = 10000/10^6 = 10 ms، ورابطين = 20 ms.",
    "Each link takes L/R = 10,000/10^6 = 10 ms; two links = 20 ms.",
    1,
    0
  ],
  [
    1,
    "core",
    "Packets are dropped at a router when:",
    [
      "The router's buffer (memory) fills up",
      "The link is idle",
      "The packet is too short",
      "Routing tables are empty"
    ],
    "الحزم تنفقد لما الـ buffer يمتلي.",
    "Packets are lost when the router's buffer fills up.",
    0,
    0
  ],
  [
    1,
    "core",
    "Packets queue at a router when:",
    [
      "Arrival rate to a link exceeds its transmission rate for some period",
      "The link is faster than the arrival rate",
      "No packets arrive",
      "The packet has no header"
    ],
    "الطابور يصير لما معدل الوصول يتعدى معدل الإرسال لفترة.",
    "Packets queue when arrival rate exceeds the link's transmission rate for a while.",
    0,
    0
  ],
  [
    1,
    "circuit",
    "Circuit switching:",
    [
      "Reserves end-end resources for a call",
      "Shares links on demand with no reservation",
      "Breaks messages into packets",
      "Has no call setup"
    ],
    "تحويل الدوائر يحجز الموارد من الطرف للطرف للمكالمة.",
    "Circuit switching reserves end-end resources for the call.",
    1,
    0
  ],
  [
    1,
    "circuit",
    "A key drawback of circuit switching is that:",
    [
      "A circuit segment is idle if not used by its call (no sharing)",
      "Performance is not guaranteed",
      "It always loses packets",
      "It needs no setup"
    ],
    "عيبه: الدائرة تبقى فاضية إذا المكالمة ما استخدمتها، لأنه ما فيه مشاركة.",
    "Circuits sit idle when unused because resources aren't shared.",
    0,
    0
  ],
  [
    1,
    "circuit",
    "Circuit switching is commonly used in:",
    [
      "Traditional telephone networks",
      "The modern Internet core",
      "BitTorrent",
      "DNS"
    ],
    "تحويل الدوائر يُستخدم في شبكات الهاتف التقليدية.",
    "Circuit switching is used in traditional telephone networks.",
    0,
    0
  ],
  [
    1,
    "circuit",
    "In TDM, each call:",
    [
      "Gets periodic time slots and transmits at the full band's max rate only during its slots",
      "Gets its own narrow frequency band all the time",
      "Shares no time at all",
      "Is sent as packets"
    ],
    "TDM: الوقت ينقسم slots، والمكالمة ترسل بالسرعة الكاملة بس وقت فترتها.",
    "In TDM each call gets periodic slots and sends at the wide band's max rate only during them.",
    1,
    0
  ],
  [
    1,
    "circuit",
    "In FDM, each call:",
    [
      "Gets its own frequency band and can transmit at that narrow band's max rate",
      "Gets periodic time slots",
      "Uses the whole band at all times",
      "Uses store-and-forward"
    ],
    "FDM: كل مكالمة لها نطاق تردد ضيق خاص فيها.",
    "In FDM each call gets its own narrow frequency band.",
    1,
    0
  ],
  [
    1,
    "circuit",
    "1 Gb/s link; each user needs 100 Mb/s when active. How many users with circuit switching?",
    [
      "10",
      "35",
      "100",
      "1"
    ],
    "1 Gb/s ÷ 100 Mb/s = 10 مستخدمين.",
    "1 Gb/s ÷ 100 Mb/s = 10 users.",
    1,
    0
  ],
  [
    1,
    "circuit",
    "Same link (1 Gb/s, users 100 Mb/s active 10% of the time): packet switching supports about:",
    [
      "35 users (P[>10 active] < .0004)",
      "10 users",
      "5 users",
      "1000 users"
    ],
    "تحويل الحزم يخدم 35 مستخدم، واحتمال أكثر من 10 نشطين أقل من 0.0004.",
    "Packet switching supports 35 users with P(more than 10 active) < .0004.",
    1,
    0
  ],
  [
    1,
    "circuit",
    "Packet switching is great for:",
    [
      "Bursty traffic (sometimes data to send, sometimes not)",
      "Guaranteed constant-rate calls",
      "Avoiding all congestion",
      "Reserving resources"
    ],
    "تحويل الحزم ممتاز للترافيك المتقطع: مشاركة موارد وبدون إعداد مكالمة.",
    "Packet switching suits bursty traffic: resource sharing, no call setup.",
    1,
    0
  ],
  [
    1,
    "circuit",
    "A disadvantage of packet switching is:",
    [
      "Excessive congestion possible: delay and loss from buffer overflow",
      "Resources are always idle",
      "Call setup is required",
      "It cannot share links"
    ],
    "عيبه: ممكن ازدحام شديد يسبب تأخير وفقد، فنحتاج بروتوكولات موثوقية وتحكم ازدحام.",
    "Excessive congestion may cause delay and loss, needing reliable transfer and congestion control.",
    0,
    0
  ],
  [
    1,
    "istruct",
    "Why not connect every access ISP directly to every other access ISP?",
    [
      "It doesn't scale: O(N²) connections",
      "It is too fast",
      "It needs no routers",
      "ISPs are not allowed to connect"
    ],
    "ربط الكل بالكل يحتاج O(N²) اتصال، ما يتوسع.",
    "Full mesh needs O(N²) connections; it doesn't scale.",
    0,
    0
  ],
  [
    1,
    "istruct",
    "Customer and provider ISPs are connected under:",
    [
      "An economic agreement",
      "A free public law",
      "No agreement",
      "A DNS record"
    ],
    "بين العميل والمزود اتفاق تجاري.",
    "Customer and provider ISPs have an economic agreement.",
    0,
    0
  ],
  [
    1,
    "istruct",
    "Which are examples of tier-1 commercial ISPs?",
    [
      "Level 3, Sprint, AT&T, NTT",
      "Google, Facebook",
      "BitTorrent, Skype",
      "Gmail, Yahoo"
    ],
    "tier-1: Level 3 وSprint وAT&T وNTT بتغطية محلية ودولية.",
    "Tier-1 ISPs: Level 3, Sprint, AT&T, NTT.",
    0,
    0
  ],
  [
    1,
    "istruct",
    "Content provider networks (e.g., Google) often:",
    [
      "Bypass tier-1 and regional ISPs with their own private network",
      "Depend only on home networks",
      "Use circuit switching",
      "Have no data centers"
    ],
    "شبكات المحتوى الخاصة تربط مراكز بياناتها وغالباً تتجاوز tier-1 والإقليمية.",
    "Content providers run private networks connecting their data centers, often bypassing tier-1 and regional ISPs.",
    0,
    0
  ],
  [
    1,
    "istruct",
    "Hosts connect to the Internet via:",
    [
      "Access ISPs",
      "Tier-1 ISPs directly only",
      "Root DNS servers",
      "Trackers"
    ],
    "الأجهزة تتصل عن طريق access ISPs.",
    "Hosts connect through access ISPs.",
    0,
    0
  ],
  [
    1,
    "istruct",
    "Regional networks may arise to:",
    [
      "Connect access nets to ISPs",
      "Replace DNS",
      "Encrypt traffic",
      "Assign port numbers"
    ],
    "الشبكات الإقليمية تربط شبكات الوصول بالـ ISPs.",
    "Regional networks connect access networks to ISPs.",
    0,
    0
  ],
  [
    1,
    "delay",
    "The four components of nodal delay are:",
    [
      "Processing, queueing, transmission, propagation",
      "Encoding, routing, framing, decoding",
      "Setup, transfer, closure, ACK",
      "DNS, HTTP, TCP, IP"
    ],
    "d_nodal = المعالجة + الطابور + الإرسال + الانتشار.",
    "d_nodal = d_proc + d_queue + d_trans + d_prop.",
    1,
    0
  ],
  [
    1,
    "delay",
    "Which delay depends on the congestion level of the router?",
    [
      "Queueing delay",
      "Propagation delay",
      "Transmission delay",
      "Processing delay"
    ],
    "تأخير الطابور يعتمد على مستوى الازدحام.",
    "Queueing delay depends on the router's congestion level.",
    1,
    0
  ],
  [
    1,
    "delay",
    "Propagation delay is computed as:",
    [
      "d/s (link length ÷ propagation speed)",
      "L/R",
      "La/R",
      "R/L"
    ],
    "الانتشار = d/s: طول الرابط ÷ سرعة الانتشار.",
    "Propagation delay = d/s.",
    1,
    0
  ],
  [
    1,
    "delay",
    "Transmission delay depends on:",
    [
      "Packet length and link rate, not distance",
      "Distance only",
      "Propagation speed",
      "The number of routers in the world"
    ],
    "الإرسال L/R يعتمد على الحجم والسرعة، مو المسافة.",
    "Transmission delay L/R depends on packet size and rate, not distance.",
    1,
    0
  ],
  [
    1,
    "delay",
    "Nodal processing delay includes:",
    [
      "Checking bit errors and determining the output link",
      "Waiting in the output queue",
      "Pushing bits onto the link",
      "Bits traveling along the wire"
    ],
    "المعالجة: فحص أخطاء البت وتحديد رابط الخروج (أقل من ميكروثانية).",
    "Processing: check bit errors, determine output link (typically < microsecs).",
    0,
    0
  ],
  [
    1,
    "delay",
    "Typical propagation speed in a link is about:",
    [
      "2×10^8 m/sec",
      "3×10^3 m/sec",
      "2×10^12 m/sec",
      "100 km/hr"
    ],
    "سرعة الانتشار حوالي 2×10^8 م/ث.",
    "Propagation speed is about 2×10^8 m/sec.",
    0,
    0
  ],
  [
    1,
    "delay",
    "A 1,000-bit packet on a 1 Mbps link. Transmission delay?",
    [
      "1 ms",
      "1 µs",
      "1 s",
      "10 ms"
    ],
    "L/R = 1000 ÷ 10^6 = 0.001 ثانية = 1 ms.",
    "L/R = 1000/10^6 = 1 ms.",
    1,
    0
  ],
  [
    1,
    "delay",
    "A link of 2,000 km with s = 2×10^8 m/s. Propagation delay?",
    [
      "10 ms",
      "1 ms",
      "100 ms",
      "0.1 ms"
    ],
    "d/s = 2×10^6 ÷ 2×10^8 = 0.01 ثانية = 10 ms.",
    "d/s = 2×10^6 / 2×10^8 = 0.01 s = 10 ms.",
    1,
    0
  ],
  [
    1,
    "delay",
    "Caravan analogy: 10 cars, toll booth 12 sec/car, 100 km to next booth at 100 km/hr. Time until caravan lined up at 2nd booth?",
    [
      "62 minutes",
      "60 minutes",
      "2 minutes",
      "120 minutes"
    ],
    "الإرسال 12×10 = 120 ثانية = دقيقتين، والانتشار 100 كم ÷ 100 كم/س = ساعة، المجموع 62 دقيقة.",
    "Transmission 12×10 = 120 s (2 min) + propagation 1 hr = 62 minutes.",
    0,
    0
  ],
  [
    1,
    "delay",
    "In the caravan analogy, a car corresponds to a ___ and the caravan to a ___.",
    [
      "bit; packet",
      "packet; bit",
      "router; link",
      "link; router"
    ],
    "السيارة = بت، والقافلة = حزمة، والكشك = إرسال الرابط.",
    "Car ~ bit, caravan ~ packet, toll service ~ link transmission.",
    0,
    0
  ],
  [
    1,
    "delay",
    "Cars propagate at 1000 km/hr and the booth takes 1 min/car. Do cars arrive at the 2nd booth before all are serviced at the first?",
    [
      "Yes: after 7 min the first car arrives while 3 cars are still at the first booth",
      "No, never",
      "Only if there are 20 cars",
      "Only at 100 km/hr"
    ],
    "نعم: أول سيارة توصل بعد 7 دقايق (1 خدمة + 6 انتشار) و3 سيارات للحين عند الكشك الأول.",
    "Yes: first car arrives after 7 min (1 service + 6 travel) while 3 cars remain at the first booth.",
    0,
    0
  ],
  [
    1,
    "delay",
    "Doubling the length of a link (same rate) changes:",
    [
      "Propagation delay only",
      "Transmission delay only",
      "Both equally",
      "Neither"
    ],
    "طول الرابط يأثر على الانتشار d/s بس، والإرسال L/R ما يتغير.",
    "Link length affects only propagation d/s; L/R is unchanged.",
    0,
    0
  ],
  [
    1,
    "queue",
    "Traffic intensity is defined as:",
    [
      "La/R",
      "L/R",
      "d/s",
      "R/La"
    ],
    "شدة الترافيك = La/R (a معدل وصول الحزم).",
    "Traffic intensity = La/R.",
    1,
    0
  ],
  [
    1,
    "queue",
    "When La/R > 1:",
    [
      "More work arrives than can be serviced; average delay is infinite",
      "Queueing delay is small",
      "Queueing delay is zero",
      "Packets are never lost"
    ],
    "إذا La/R أكبر من 1 الشغل الواصل أكثر من الخدمة، والتأخير لا نهائي.",
    "If La/R > 1, more work arrives than can be served; average delay is infinite.",
    1,
    0
  ],
  [
    1,
    "queue",
    "When La/R is close to 0:",
    [
      "Average queueing delay is small",
      "Average delay is infinite",
      "Every packet is lost",
      "The link is overloaded"
    ],
    "إذا La/R قريب من الصفر التأخير صغير.",
    "With La/R ≈ 0, average queueing delay is small.",
    0,
    0
  ],
  [
    1,
    "queue",
    "As La/R approaches 1, average queueing delay:",
    [
      "Becomes large",
      "Becomes zero",
      "Stays constant",
      "Becomes negative"
    ],
    "لما La/R يقرب من 1 التأخير يكبر جداً.",
    "As La/R → 1, average queueing delay grows large.",
    0,
    0
  ],
  [
    1,
    "queue",
    "Traceroute sends how many probe packets to each router i?",
    [
      "Three",
      "One",
      "Ten",
      "Two"
    ],
    "traceroute يرسل 3 حزم لكل راوتر.",
    "Traceroute sends three probes per router.",
    1,
    0
  ],
  [
    1,
    "queue",
    "How does traceroute make the packets stop at router i?",
    [
      "Sets the time-to-live (TTL) field to i",
      "Sets the port to i",
      "Uses DNS",
      "Sends to router i's MAC address"
    ],
    "يحط TTL = i، فالحزمة توقف عند الراوتر i ويرجع رد.",
    "It sets TTL = i so router i returns the packet.",
    1,
    0
  ],
  [
    1,
    "queue",
    "In traceroute output, \"* * *\" means:",
    [
      "No reply was received from that hop",
      "Delay was zero",
      "The destination was reached",
      "The router is the fastest"
    ],
    "النجوم تعني ما جا رد من هالراوتر.",
    "Asterisks mean no response from that hop.",
    0,
    0
  ],
  [
    1,
    "queue",
    "A packet arriving to a full buffer is:",
    [
      "Dropped (lost)",
      "Stored on disk",
      "Sent backwards",
      "Compressed"
    ],
    "الـ buffer سعته محدودة، فالحزمة اللي توصل وهو مليان تنرمى.",
    "The buffer is finite, so a packet arriving at a full queue is dropped.",
    0,
    0
  ],
  [
    1,
    "queue",
    "A lost packet may be retransmitted by:",
    [
      "The previous node, the source end system, or not at all",
      "Only the destination",
      "The DNS server",
      "The tracker"
    ],
    "الحزمة الضايعة ممكن تنعاد من العقدة السابقة أو المصدر أو ما تنعاد.",
    "A lost packet may be resent by the previous node, by the source, or not at all.",
    0,
    0
  ],
  [
    1,
    "thru",
    "Throughput is:",
    [
      "The rate at which bits are sent from sender to receiver",
      "The delay of one packet",
      "The length of a link",
      "The number of hops"
    ],
    "الإنتاجية: معدل وصول البتات من المرسل للمستقبل.",
    "Throughput: rate (bits/time) at which bits flow from sender to receiver.",
    0,
    0
  ],
  [
    1,
    "thru",
    "Server link R_s = 2 Mbps, client link R_c = 10 Mbps. End-end throughput?",
    [
      "2 Mbps",
      "10 Mbps",
      "12 Mbps",
      "6 Mbps"
    ],
    "الإنتاجية = الأصغر = min(2, 10) = 2 Mbps.",
    "Throughput = min(R_s, R_c) = 2 Mbps.",
    1,
    0
  ],
  [
    1,
    "thru",
    "The bottleneck link is:",
    [
      "The link on the path that constrains end-end throughput",
      "The longest link",
      "The first link",
      "The link with the most routers"
    ],
    "عنق الزجاجة: الرابط اللي يحدد الإنتاجية.",
    "The bottleneck is the link that limits end-end throughput.",
    1,
    0
  ],
  [
    1,
    "thru",
    "10 connections share a backbone link R fairly. Per-connection throughput is:",
    [
      "min(R_c, R_s, R/10)",
      "R_c + R_s + R",
      "R × 10",
      "max(R_c, R_s, R)"
    ],
    "كل اتصال ياخذ min(R_c, R_s, R/10).",
    "Per-connection throughput = min(R_c, R_s, R/10).",
    1,
    0
  ],
  [
    1,
    "thru",
    "R_s = 5 Mbps, R_c = 4 Mbps, backbone R = 30 Mbps shared by 10 connections. Per-connection throughput?",
    [
      "3 Mbps",
      "4 Mbps",
      "5 Mbps",
      "30 Mbps"
    ],
    "R/10 = 3 Mbps، فالأصغر min(5, 4, 3) = 3 Mbps.",
    "R/10 = 3 Mbps; min(5, 4, 3) = 3 Mbps.",
    1,
    0
  ],
  [
    1,
    "thru",
    "In practice, the bottleneck is often:",
    [
      "R_c or R_s (the access links)",
      "The backbone",
      "The DNS server",
      "The propagation speed"
    ],
    "في الواقع غالباً R_c أو R_s هو عنق الزجاجة.",
    "In practice R_c or R_s is often the bottleneck.",
    0,
    0
  ],
  [
    1,
    "thru",
    "Instantaneous throughput is:",
    [
      "The rate at a given point in time",
      "The rate over a long period",
      "Always equal to bandwidth",
      "The sum of all link rates"
    ],
    "اللحظية: المعدل في لحظة معينة، والمتوسطة على فترة أطول.",
    "Instantaneous throughput is the rate at a given point in time.",
    0,
    0
  ],
  [
    1,
    "sec",
    "IP spoofing is:",
    [
      "Injecting a packet with a false source address",
      "Reading all packets on a shared medium",
      "Overwhelming a server with bogus traffic",
      "Encrypting packets"
    ],
    "الانتحال: حقن حزمة بعنوان مصدر مزيّف.",
    "IP spoofing injects packets with a false source address.",
    0,
    0
  ],
  [
    1,
    "sec",
    "Packet sniffing is possible on:",
    [
      "Broadcast media such as shared Ethernet and wireless",
      "Only fiber links",
      "Only encrypted links",
      "Only the network core"
    ],
    "التنصت يصير على الوسائط المشتركة مثل Ethernet المشترك واللاسلكي.",
    "Sniffing works on broadcast media (shared Ethernet, wireless).",
    0,
    0
  ],
  [
    1,
    "sec",
    "A network interface that reads/records all packets passing by is in ___ mode.",
    [
      "Promiscuous",
      "Half-duplex",
      "Persistent",
      "Stateless"
    ],
    "كرت الشبكة في وضع promiscuous يقرأ كل الحزم.",
    "A promiscuous interface reads/records all passing packets.",
    0,
    0
  ],
  [
    1,
    "sec",
    "Denial of Service (DoS) attacks:",
    [
      "Make resources unavailable by overwhelming them with bogus traffic",
      "Steal passwords by sniffing",
      "Fake the source address only",
      "Encrypt the victim's files"
    ],
    "DoS يخلي الموارد مو متاحة بإغراقها بترافيك مزيف.",
    "DoS makes resources unavailable by flooding them with bogus traffic.",
    0,
    0
  ],
  [
    1,
    "sec",
    "In a DoS attack, the compromised hosts used to send traffic form a:",
    [
      "Botnet",
      "Torrent",
      "Subnet",
      "Tracker"
    ],
    "الأجهزة المخترقة تسمى botnet.",
    "Compromised hosts form a botnet.",
    0,
    0
  ],
  [
    1,
    "sec",
    "Which defense proves \"you are who you say you are\"?",
    [
      "Authentication",
      "Confidentiality",
      "Firewall",
      "Compression"
    ],
    "المصادقة: تثبت إنك أنت.",
    "Authentication proves your identity.",
    0,
    0
  ],
  [
    1,
    "sec",
    "Confidentiality is achieved via:",
    [
      "Encryption",
      "Digital signatures only",
      "Traceroute",
      "Port numbers"
    ],
    "السرية تتحقق بالتشفير.",
    "Confidentiality is provided by encryption.",
    0,
    0
  ],
  [
    1,
    "sec",
    "Digital signatures provide:",
    [
      "Integrity checks that prevent/detect tampering",
      "Faster transmission",
      "IP addresses",
      "Compression"
    ],
    "التوقيع الرقمي يكشف التلاعب (فحص السلامة).",
    "Digital signatures provide integrity checks against tampering.",
    0,
    0
  ],
  [
    1,
    "sec",
    "Firewalls are described as:",
    [
      "Off-by-default middleboxes that filter incoming packets",
      "On-by-default routers",
      "Application-layer protocols",
      "DNS servers"
    ],
    "الجدار الناري جهاز وسيط مقفل افتراضياً يفلتر الحزم الداخلة.",
    "Firewalls are off-by-default middleboxes filtering incoming packets.",
    0,
    0
  ],
  [
    1,
    "sec",
    "The original vision of the Internet was:",
    [
      "A group of mutually trusting users attached to a transparent network",
      "A secure military network",
      "A circuit-switched phone network",
      "A single company's LAN"
    ],
    "الفكرة الأصلية: مستخدمين يثقون ببعض على شبكة شفافة، فما كان فيه أمن.",
    "The original vision: mutually trusting users on a transparent network, so security wasn't designed in.",
    0,
    0
  ],
  [
    1,
    "layers",
    "The correct order of the Internet protocol stack (top to bottom) is:",
    [
      "Application, Transport, Network, Link, Physical",
      "Application, Network, Transport, Link, Physical",
      "Transport, Application, Network, Physical, Link",
      "Physical, Link, Network, Transport, Application"
    ],
    "الترتيب من فوق: تطبيقات، نقل، شبكة، ربط، فيزيائية.",
    "Top to bottom: application, transport, network, link, physical.",
    1,
    0
  ],
  [
    1,
    "layers",
    "Process-to-process data transfer is the job of the:",
    [
      "Transport layer",
      "Network layer",
      "Link layer",
      "Physical layer"
    ],
    "النقل مسؤول عن النقل من عملية لعملية (TCP وUDP).",
    "The transport layer does process-process transfer (TCP, UDP).",
    1,
    0
  ],
  [
    1,
    "layers",
    "Routing of datagrams from source to destination is done by the:",
    [
      "Network layer",
      "Transport layer",
      "Application layer",
      "Link layer"
    ],
    "طبقة الشبكة توجّه الـ datagrams (IP وبروتوكولات التوجيه).",
    "The network layer routes datagrams (IP, routing protocols).",
    1,
    0
  ],
  [
    1,
    "layers",
    "Data transfer between neighboring network elements is done by the:",
    [
      "Link layer",
      "Network layer",
      "Transport layer",
      "Application layer"
    ],
    "الربط ينقل بين العناصر المتجاورة (Ethernet وWiFi وPPP).",
    "The link layer transfers data between neighbors (Ethernet, 802.11, PPP).",
    1,
    0
  ],
  [
    1,
    "layers",
    "Which protocols belong to the application layer?",
    [
      "HTTP, IMAP, SMTP, DNS",
      "TCP, UDP",
      "IP, routing protocols",
      "Ethernet, 802.11, PPP"
    ],
    "التطبيقات: HTTP وIMAP وSMTP وDNS.",
    "Application layer: HTTP, IMAP, SMTP, DNS.",
    1,
    0
  ],
  [
    1,
    "layers",
    "802.11 (WiFi) belongs to which layer?",
    [
      "Link",
      "Network",
      "Transport",
      "Application"
    ],
    "WiFi (802.11) في طبقة الربط.",
    "802.11 is a link-layer protocol.",
    0,
    0
  ],
  [
    1,
    "layers",
    "A benefit of layering is that:",
    [
      "A change in a layer's implementation is transparent to the rest of the system",
      "Every layer must know all others' internals",
      "It removes the need for protocols",
      "It makes networks slower"
    ],
    "التقسيم يسهّل الصيانة: تغيير تنفيذ طبقة ما يأثر على الباقي.",
    "Modularity: changing one layer's implementation is transparent to the rest.",
    0,
    0
  ],
  [
    1,
    "layers",
    "The physical layer is responsible for:",
    [
      "Bits \"on the wire\"",
      "Routing datagrams",
      "Process-to-process delivery",
      "Name resolution"
    ],
    "الفيزيائية: البتات على السلك.",
    "Physical layer: bits on the wire.",
    0,
    0
  ],
  [
    1,
    "encap",
    "A transport-layer packet is called a:",
    [
      "Segment",
      "Frame",
      "Datagram",
      "Message"
    ],
    "وحدة النقل اسمها segment.",
    "The transport-layer unit is a segment.",
    1,
    0
  ],
  [
    1,
    "encap",
    "A network-layer packet is called a:",
    [
      "Datagram",
      "Segment",
      "Frame",
      "Message"
    ],
    "وحدة الشبكة اسمها datagram.",
    "The network-layer unit is a datagram.",
    1,
    0
  ],
  [
    1,
    "encap",
    "A link-layer packet is called a:",
    [
      "Frame",
      "Datagram",
      "Segment",
      "Message"
    ],
    "وحدة الربط اسمها frame.",
    "The link-layer unit is a frame.",
    1,
    0
  ],
  [
    1,
    "encap",
    "Which is the correct encapsulation of a datagram?",
    [
      "[H_n | [H_t | M]]",
      "[H_t | [H_n | M]]",
      "[M | H_t]",
      "[H_l | M]"
    ],
    "الـ datagram = ترويسة الشبكة + (ترويسة النقل + الرسالة).",
    "A datagram is H_n wrapped around the segment [H_t | M].",
    1,
    0
  ],
  [
    1,
    "encap",
    "Which device implements only the link and physical layers?",
    [
      "A link-layer switch",
      "A router",
      "A host",
      "A DNS server"
    ],
    "الـ switch يشتغل على الربط والفيزيائية بس، والراوتر يضيف الشبكة.",
    "A switch implements link + physical; a router adds the network layer.",
    1,
    0
  ],
  [
    1,
    "encap",
    "Which two OSI layers are NOT in the Internet stack?",
    [
      "Presentation and session",
      "Transport and network",
      "Link and physical",
      "Application and transport"
    ],
    "OSI فيه presentation وsession، وهم مو موجودين في الإنترنت.",
    "OSI's presentation and session layers are absent from the Internet stack.",
    1,
    0
  ],
  [
    1,
    "encap",
    "Encryption and compression belong to which OSI layer?",
    [
      "Presentation",
      "Session",
      "Transport",
      "Network"
    ],
    "presentation: تفسير معنى البيانات مثل التشفير والضغط.",
    "Presentation: interpreting data meaning, e.g., encryption, compression.",
    0,
    0
  ],
  [
    1,
    "encap",
    "Synchronization, checkpointing and recovery of data exchange belong to the:",
    [
      "Session layer",
      "Presentation layer",
      "Link layer",
      "Physical layer"
    ],
    "session: المزامنة ونقاط الحفظ والاستعادة.",
    "Session: synchronization, checkpointing, recovery.",
    0,
    0
  ],
  [
    1,
    "encap",
    "If an Internet app needs presentation/session services, they:",
    [
      "Must be implemented in the application",
      "Are provided by TCP",
      "Are provided by IP",
      "Are impossible"
    ],
    "الإنترنت ناقص هالطبقتين، فالتطبيق نفسه يسويها.",
    "They must be implemented in the application.",
    0,
    0
  ],
  [
    1,
    "encap",
    "How many layers does the ISO/OSI reference model have?",
    [
      "Seven",
      "Five",
      "Four",
      "Six"
    ],
    "OSI سبع طبقات، والإنترنت خمس.",
    "OSI has seven layers; the Internet stack has five.",
    0,
    0
  ],
  [
    2,
    "appar",
    "When creating a network app, you:",
    [
      "Write programs for end systems only, not for network-core devices",
      "Must program every router",
      "Must write code for switches",
      "Must modify the physical layer"
    ],
    "تكتب برامج للأجهزة الطرفية بس، لأن أجهزة اللب ما تشغّل تطبيقات المستخدم.",
    "You write programs for end systems; core devices don't run user apps.",
    0,
    0
  ],
  [
    2,
    "appar",
    "A server in the client-server paradigm:",
    [
      "Is always-on with a permanent IP address",
      "Is intermittently connected",
      "Has a dynamic IP address",
      "Talks directly to other clients' clients"
    ],
    "الخادم شغّال دايماً وعنوانه ثابت.",
    "The server is always-on with a permanent IP address.",
    0,
    0
  ],
  [
    2,
    "appar",
    "In client-server, clients:",
    [
      "Do not communicate directly with each other",
      "Always communicate directly with each other",
      "Must have permanent IP addresses",
      "Are always-on"
    ],
    "العملاء ما يتواصلون مع بعض مباشرة، كل شي عن طريق الخادم.",
    "Clients do not talk directly to each other.",
    0,
    0
  ],
  [
    2,
    "appar",
    "Which is a client-server example from the slides?",
    [
      "HTTP, IMAP, FTP",
      "BitTorrent",
      "KanKan streaming",
      "Skype (previously)"
    ],
    "أمثلة عميل/خادم: HTTP وIMAP وFTP.",
    "Client-server examples: HTTP, IMAP, FTP.",
    0,
    0
  ],
  [
    2,
    "appar",
    "\"Self scalability\" in P2P means:",
    [
      "New peers bring new service capacity as well as new demands",
      "The server scales itself",
      "Peers never leave",
      "There is no demand"
    ],
    "كل peer جديد يجيب سعة جديدة ومعه طلبات جديدة.",
    "New peers add service capacity along with new demand.",
    0,
    0
  ],
  [
    2,
    "appar",
    "Why is P2P management complex?",
    [
      "Peers are intermittently connected and change IP addresses",
      "There is an always-on server",
      "Peers have permanent IPs",
      "There are no peers"
    ],
    "الـ peers يتصلون وينقطعون ويغيرون عناوينهم.",
    "Peers connect intermittently and change IP addresses.",
    0,
    0
  ],
  [
    2,
    "appar",
    "Which architecture has no always-on server?",
    [
      "Peer-peer",
      "Client-server",
      "Data center",
      "Web caching"
    ],
    "P2P ما فيه خادم دايم.",
    "P2P has no always-on server.",
    0,
    0
  ],
  [
    2,
    "sockets",
    "Processes in different hosts communicate by:",
    [
      "Exchanging messages",
      "Inter-process communication defined by the OS",
      "Sharing memory",
      "Using the same CPU"
    ],
    "بين أجهزة مختلفة يتبادلون رسائل، أما داخل نفس الجهاز فـ IPC.",
    "Across hosts, processes exchange messages; within a host they use OS-defined IPC.",
    0,
    0
  ],
  [
    2,
    "sockets",
    "The client process is the one that:",
    [
      "Initiates communication",
      "Waits to be contacted",
      "Has no IP address",
      "Always runs in a data center"
    ],
    "عملية العميل هي اللي تبدأ الاتصال.",
    "The client process initiates communication.",
    1,
    0
  ],
  [
    2,
    "sockets",
    "A socket is analogous to a:",
    [
      "Door",
      "Road",
      "Mailbox key",
      "Router"
    ],
    "الـ socket مثل الباب: ترسل الرسالة منه وتعتمد على النقل يوصلها.",
    "A socket is like a door the process shoves messages through.",
    1,
    0
  ],
  [
    2,
    "sockets",
    "The socket lies between:",
    [
      "The application layer and the transport layer",
      "The network and link layers",
      "The link and physical layers",
      "Two routers"
    ],
    "الـ socket بين طبقة التطبيقات (المطور) وطبقة النقل (نظام التشغيل).",
    "The socket is the interface between the application (developer) and transport (OS) layers.",
    1,
    0
  ],
  [
    2,
    "sockets",
    "Does a host's IP address alone identify a process?",
    [
      "No, many processes can run on the same host",
      "Yes, always",
      "Only for UDP",
      "Only for servers"
    ],
    "لا، فيه عمليات كثير على نفس الجهاز، فنحتاج رقم منفذ.",
    "No; many processes share a host, so a port number is needed.",
    1,
    0
  ],
  [
    2,
    "sockets",
    "A process identifier includes:",
    [
      "IP address and port number",
      "MAC address only",
      "Host name only",
      "Process ID only"
    ],
    "المعرّف = IP + رقم المنفذ.",
    "The identifier is IP address + port number.",
    1,
    0
  ],
  [
    2,
    "sockets",
    "The well-known port for an HTTP server is:",
    [
      "80",
      "25",
      "53",
      "443"
    ],
    "HTTP على منفذ 80.",
    "HTTP servers use port 80.",
    1,
    0
  ],
  [
    2,
    "sockets",
    "The well-known port for a mail (SMTP) server is:",
    [
      "25",
      "80",
      "110",
      "21"
    ],
    "خادم البريد على منفذ 25.",
    "Mail servers (SMTP) use port 25.",
    0,
    0
  ],
  [
    2,
    "sockets",
    "A host IP address is:",
    [
      "32 bits",
      "16 bits",
      "48 bits",
      "128 bits"
    ],
    "عنوان IP (IPv4) طوله 32 بت.",
    "An IPv4 address is 32 bits.",
    0,
    0
  ],
  [
    2,
    "sockets",
    "\"Meaning of information in fields\" is the protocol's message:",
    [
      "Semantics",
      "Syntax",
      "Types",
      "Rules"
    ],
    "المعنى = semantics، والصيغة = syntax.",
    "Semantics = meaning of fields; syntax = fields and delineation.",
    0,
    0
  ],
  [
    2,
    "sockets",
    "Which is a proprietary protocol?",
    [
      "Zoom",
      "HTTP",
      "SMTP",
      "DNS"
    ],
    "Skype وZoom بروتوكولات مملوكة، وHTTP وSMTP مفتوحة في RFCs.",
    "Skype and Zoom are proprietary; HTTP and SMTP are open (RFCs).",
    0,
    0
  ],
  [
    2,
    "sockets",
    "Open protocols are defined in ___ and allow ___.",
    [
      "RFCs; interoperability",
      "Patents; secrecy",
      "OS kernels; speed",
      "Routers; routing"
    ],
    "المفتوحة معرّفة في RFCs ومتاحة للكل، فتسمح بالتوافق.",
    "Open protocols are defined in RFCs and allow interoperability.",
    0,
    0
  ],
  [
    2,
    "tservice",
    "Which application requires 100% reliable data transfer?",
    [
      "File transfer",
      "Real-time audio",
      "Streaming video",
      "Interactive games"
    ],
    "نقل الملفات لازم بدون فقد، أما الصوت والفيديو يتحملون.",
    "File transfer needs 100% reliability; audio/video tolerate loss.",
    1,
    0
  ],
  [
    2,
    "tservice",
    "\"Elastic apps\" are apps that:",
    [
      "Make use of whatever throughput they get",
      "Need a minimum throughput",
      "Require low delay",
      "Cannot tolerate any delay"
    ],
    "التطبيقات المرنة تستخدم أي إنتاجية تجيها.",
    "Elastic apps use whatever throughput they get.",
    1,
    0
  ],
  [
    2,
    "tservice",
    "Which TCP service prevents the sender from overwhelming the receiver?",
    [
      "Flow control",
      "Congestion control",
      "Connection setup",
      "Checksum"
    ],
    "التحكم بالتدفق يمنع المرسل من إغراق المستقبل.",
    "Flow control keeps the sender from overwhelming the receiver.",
    1,
    0
  ],
  [
    2,
    "tservice",
    "Which TCP service throttles the sender when the network is overloaded?",
    [
      "Congestion control",
      "Flow control",
      "Reliable transport",
      "Port numbers"
    ],
    "التحكم بالازدحام يهدّي المرسل لما الشبكة زحمة.",
    "Congestion control throttles the sender under network overload.",
    1,
    0
  ],
  [
    2,
    "tservice",
    "TCP does NOT provide:",
    [
      "Timing, minimum throughput guarantee, or security",
      "Reliable transport",
      "Flow control",
      "Congestion control"
    ],
    "TCP ما يقدم توقيت ولا ضمان إنتاجية ولا أمن.",
    "TCP doesn't provide timing, throughput guarantees, or security.",
    1,
    0
  ],
  [
    2,
    "tservice",
    "Which service does UDP provide?",
    [
      "Unreliable data transfer between processes",
      "Flow control",
      "Congestion control",
      "Connection setup"
    ],
    "UDP بس نقل غير موثوق بين العمليات.",
    "UDP only provides unreliable process-to-process transfer.",
    1,
    0
  ],
  [
    2,
    "tservice",
    "Interactive games and Internet telephony are time-sensitive at about:",
    [
      "10's of msec",
      "Few minutes",
      "Hours",
      "No time sensitivity"
    ],
    "الألعاب والاتصال الحي حساسة بعشرات ms، والبث بضع ثواني.",
    "Interactive games and telephony: 10's of msec; streaming: a few secs.",
    0,
    0
  ],
  [
    2,
    "tservice",
    "Which transport protocol is listed for interactive games?",
    [
      "UDP or TCP",
      "Only TCP",
      "Only SCTP",
      "None"
    ],
    "الألعاب: UDP أو TCP.",
    "Interactive games use UDP or TCP.",
    0,
    0
  ],
  [
    2,
    "tservice",
    "E-mail uses which application-layer protocol and transport?",
    [
      "SMTP over TCP",
      "HTTP over UDP",
      "FTP over UDP",
      "DNS over TCP only"
    ],
    "البريد SMTP على TCP.",
    "E-mail uses SMTP over TCP.",
    0,
    0
  ],
  [
    2,
    "tservice",
    "Vanilla TCP and UDP sockets:",
    [
      "Have no encryption; cleartext passwords traverse the Internet in cleartext",
      "Encrypt all data",
      "Use TLS by default",
      "Authenticate end points"
    ],
    "الـ sockets العادية بدون تشفير، الباسورد يمشي نص واضح.",
    "Vanilla sockets have no encryption; passwords travel in cleartext.",
    0,
    0
  ],
  [
    2,
    "tservice",
    "TLS provides:",
    [
      "Encrypted TCP connections, data integrity, end-point authentication",
      "Guaranteed bandwidth",
      "Lower delay",
      "Multicast"
    ],
    "TLS: اتصال TCP مشفر، سلامة بيانات، ومصادقة الأطراف.",
    "TLS gives encrypted TCP, integrity and end-point authentication.",
    0,
    0
  ],
  [
    2,
    "tservice",
    "TLS is implemented in the:",
    [
      "Application layer",
      "Transport layer kernel",
      "Network layer",
      "Link layer"
    ],
    "TLS في طبقة التطبيقات: التطبيق يستخدم مكتبة TLS وهي تستخدم TCP.",
    "TLS is in the application layer: apps use TLS libraries over TCP.",
    0,
    0
  ],
  [
    2,
    "tservice",
    "Which application is loss-tolerant?",
    [
      "Streaming audio/video",
      "Web documents",
      "E-mail",
      "File transfer"
    ],
    "البث يتحمل فقد بسيط، والويب والبريد والملفات لا.",
    "Streaming audio/video is loss-tolerant; web, email and files are not.",
    0,
    0
  ],
  [
    2,
    "http",
    "A web page consists of:",
    [
      "A base HTML file and several referenced objects",
      "Only one image",
      "Only JavaScript",
      "A single TCP segment"
    ],
    "الصفحة: ملف HTML أساسي يشير لكائنات ثانية.",
    "A page = base HTML file + referenced objects.",
    0,
    0
  ],
  [
    2,
    "http",
    "Each object of a web page is addressable by a:",
    [
      "URL",
      "Port number",
      "MAC address",
      "Sequence number"
    ],
    "كل كائن له URL.",
    "Each object is addressable by a URL.",
    0,
    0
  ],
  [
    2,
    "http",
    "HTTP is:",
    [
      "The Web's application-layer protocol",
      "A transport-layer protocol",
      "A link-layer protocol",
      "A routing protocol"
    ],
    "HTTP بروتوكول طبقة التطبيقات للويب.",
    "HTTP is the Web's application-layer protocol.",
    0,
    0
  ],
  [
    2,
    "http",
    "HTTP uses which transport protocol (HTTP/1.1 and HTTP/2)?",
    [
      "TCP",
      "UDP",
      "IP",
      "ICMP"
    ],
    "HTTP يستخدم TCP على منفذ 80 (أما HTTP/3 فعلى UDP).",
    "HTTP uses TCP, port 80 (HTTP/3 uses UDP).",
    0,
    0
  ],
  [
    2,
    "http",
    "HTTP is \"stateless\" because:",
    [
      "The server maintains no information about past client requests",
      "It never uses TCP",
      "It encrypts everything",
      "It has no headers"
    ],
    "عديم الحالة: الخادم ما يحفظ شي عن الطلبات السابقة.",
    "Stateless: the server keeps no information about past requests.",
    0,
    0
  ],
  [
    2,
    "http",
    "In HTTP, who initiates the TCP connection?",
    [
      "The client",
      "The server",
      "The DNS server",
      "The router"
    ],
    "العميل يفتح الاتصال (يسوي socket) للخادم على منفذ 80.",
    "The client initiates the TCP connection to port 80.",
    0,
    0
  ],
  [
    2,
    "httpconn",
    "In non-persistent HTTP:",
    [
      "At most one object is sent over a TCP connection",
      "Many objects share one connection",
      "No TCP connection is used",
      "The connection never closes"
    ],
    "غير الدائم: كائن واحد بالكثير لكل اتصال.",
    "Non-persistent: at most one object per TCP connection.",
    1,
    0
  ],
  [
    2,
    "httpconn",
    "RTT is defined as:",
    [
      "Time for a small packet to travel from client to server and back",
      "Time to transmit a file",
      "Time a packet waits in queue",
      "Time to resolve a DNS name"
    ],
    "RTT: وقت ذهاب وإياب حزمة صغيرة.",
    "RTT: time for a small packet to go client→server and back.",
    1,
    0
  ],
  [
    2,
    "httpconn",
    "Non-persistent HTTP response time per object is:",
    [
      "2RTT + file transmission time",
      "1RTT",
      "3RTT + transmission",
      "RTT/2"
    ],
    "RTT للاتصال + RTT للطلب + وقت الإرسال = 2RTT + الإرسال.",
    "One RTT for TCP setup + one RTT for request = 2RTT + transmission time.",
    1,
    0
  ],
  [
    2,
    "httpconn",
    "Persistent HTTP (HTTP 1.1) can need as little as:",
    [
      "One RTT for all the referenced objects",
      "Two RTTs per object",
      "No RTT at all",
      "Ten RTTs"
    ],
    "الدائم: RTT واحد تقريباً لكل الكائنات (يقص الوقت للنص).",
    "Persistent HTTP can need as little as one RTT for all referenced objects.",
    1,
    0
  ],
  [
    2,
    "httpconn",
    "A base HTML file references 10 jpeg images. With non-persistent HTTP (no parallel connections), how many TCP connections are opened?",
    [
      "11",
      "10",
      "1",
      "2"
    ],
    "اتصال للـ HTML + 10 للصور = 11.",
    "One for the HTML + one per image = 11 connections.",
    1,
    0
  ],
  [
    2,
    "httpconn",
    "Same page (base + 10 images), serial non-persistent HTTP, ignoring transmission time. Total time?",
    [
      "22 RTT",
      "11 RTT",
      "12 RTT",
      "2 RTT"
    ],
    "كل كائن 2RTT، و11 كائن = 22 RTT.",
    "11 objects × 2RTT = 22 RTT.",
    1,
    0
  ],
  [
    2,
    "httpconn",
    "Which is a non-persistent HTTP issue?",
    [
      "OS overhead for each TCP connection",
      "Only one RTT per page",
      "Connections never close",
      "Objects cannot be images"
    ],
    "مشاكله: 2 RTT لكل كائن، وعبء النظام لكل اتصال.",
    "Issues: 2 RTTs per object and OS overhead for each connection.",
    0,
    0
  ],
  [
    2,
    "httpconn",
    "To speed up non-persistent HTTP, browsers often:",
    [
      "Open multiple parallel TCP connections",
      "Use UDP",
      "Disable DNS",
      "Send one object per minute"
    ],
    "المتصفحات تفتح اتصالات متوازية.",
    "Browsers open parallel TCP connections.",
    0,
    0
  ],
  [
    2,
    "httpconn",
    "In persistent HTTP, after sending a response the server:",
    [
      "Leaves the connection open",
      "Closes it immediately",
      "Restarts",
      "Sends a NAK"
    ],
    "الخادم يخلي الاتصال مفتوح للطلبات اللي بعدها.",
    "The server leaves the connection open for subsequent messages.",
    0,
    0
  ],
  [
    2,
    "httpmsg",
    "HTTP request messages are written in:",
    [
      "ASCII (human-readable format)",
      "Binary only",
      "Encrypted form only",
      "Morse code"
    ],
    "رسالة الطلب نص ASCII مقروء.",
    "HTTP request messages are ASCII, human-readable.",
    0,
    0
  ],
  [
    2,
    "httpmsg",
    "In \"GET /index.html HTTP/1.1\", the three fields are:",
    [
      "Method, URL, version",
      "Host, port, path",
      "Status, code, phrase",
      "Header, body, trailer"
    ],
    "سطر الطلب: الطريقة، الـ URL، النسخة.",
    "The request line is method, URL, version.",
    1,
    0
  ],
  [
    2,
    "httpmsg",
    "The end of HTTP header lines is marked by:",
    [
      "A blank line (carriage return, line feed)",
      "A FIN bit",
      "The word END",
      "A 404 code"
    ],
    "سطر فاضي (\\r\\n) يعني نهاية الترويسات.",
    "A blank line (\\r\\n) ends the header lines.",
    0,
    0
  ],
  [
    2,
    "httpmsg",
    "With the POST method, user input is sent in:",
    [
      "The entity body of the request",
      "The URL after a '?'",
      "The status line",
      "A cookie only"
    ],
    "POST: المدخلات في جسم الرسالة.",
    "POST sends input in the entity body.",
    1,
    0
  ],
  [
    2,
    "httpmsg",
    "With the GET method (sending data), user data is included:",
    [
      "In the URL field following a '?'",
      "In the entity body",
      "In the status code",
      "In a DNS record"
    ],
    "GET: البيانات في الـ URL بعد علامة ?.",
    "GET puts user data in the URL after '?'.",
    1,
    0
  ],
  [
    2,
    "httpmsg",
    "The HEAD method:",
    [
      "Requests only the headers that a GET would return",
      "Uploads a file",
      "Deletes a file",
      "Requests the body only"
    ],
    "HEAD يطلب الترويسات بس.",
    "HEAD requests only the headers.",
    1,
    0
  ],
  [
    2,
    "httpmsg",
    "The PUT method:",
    [
      "Uploads a new file and completely replaces the file at the URL",
      "Requests headers only",
      "Retrieves a file",
      "Moves a file permanently"
    ],
    "PUT يرفع ملف ويستبدل الموجود بالكامل.",
    "PUT uploads a new object, completely replacing the one at the URL.",
    1,
    0
  ],
  [
    2,
    "httpmsg",
    "Status code 200 means:",
    [
      "OK: request succeeded",
      "Moved Permanently",
      "Bad Request",
      "Not Found"
    ],
    "200 OK: نجح الطلب والكائن في الرسالة.",
    "200 OK: request succeeded.",
    1,
    0
  ],
  [
    2,
    "httpmsg",
    "Status code 301 means:",
    [
      "Moved Permanently (new location in Location: field)",
      "Not Found",
      "OK",
      "Version Not Supported"
    ],
    "301: الكائن انتقل نهائياً، والمكان الجديد في حقل Location.",
    "301 Moved Permanently, new location in the Location: field.",
    0,
    0
  ],
  [
    2,
    "httpmsg",
    "Status code 404 means:",
    [
      "Not Found",
      "Bad Request",
      "Moved Permanently",
      "OK"
    ],
    "404: الملف مو موجود على الخادم.",
    "404: document not found on this server.",
    0,
    0
  ],
  [
    2,
    "httpmsg",
    "Status code 400 means:",
    [
      "Bad Request: message not understood by server",
      "Not Found",
      "OK",
      "Moved"
    ],
    "400: الخادم ما فهم الطلب.",
    "400 Bad Request: the server didn't understand the message.",
    0,
    0
  ],
  [
    2,
    "httpmsg",
    "Status code 505 means:",
    [
      "HTTP Version Not Supported",
      "Server busy",
      "Not Modified",
      "Moved Permanently"
    ],
    "505: نسخة HTTP مو مدعومة.",
    "505: HTTP Version Not Supported.",
    0,
    0
  ],
  [
    2,
    "httpmsg",
    "Where does the status code appear?",
    [
      "In the 1st line of the server-to-client response",
      "In the last header line",
      "In the URL",
      "In the entity body"
    ],
    "الكود في أول سطر (سطر الحالة) من الرد.",
    "The status code is in the first line of the response.",
    0,
    0
  ],
  [
    2,
    "httpmsg",
    "\"Connection: keep-alive\" in a request indicates:",
    [
      "The client wants a persistent connection",
      "The client wants to close",
      "An error",
      "A cookie"
    ],
    "keep-alive يعني العميل يبي اتصال دائم.",
    "keep-alive requests a persistent connection.",
    0,
    0
  ],
  [
    2,
    "cookies",
    "Cookies are used because HTTP is:",
    [
      "Stateless",
      "Encrypted",
      "Connectionless",
      "Too fast"
    ],
    "HTTP عديم الحالة، فالكوكيز تحفظ حالة بين المعاملات.",
    "HTTP is stateless, so cookies keep state between transactions.",
    1,
    0
  ],
  [
    2,
    "cookies",
    "How many components does the cookie mechanism have?",
    [
      "Four",
      "Two",
      "Three",
      "Five"
    ],
    "أربع مكونات: سطر في الرد، سطر في الطلب اللي بعده، ملف عند المستخدم، وقاعدة بيانات في الموقع.",
    "Four: response header line, next-request header line, user's cookie file, back-end database.",
    1,
    0
  ],
  [
    2,
    "cookies",
    "Which is NOT a component of cookies?",
    [
      "A DNS resource record",
      "Cookie header line in the HTTP response",
      "Cookie file kept on the user's host",
      "Back-end database at the Web site"
    ],
    "سجل DNS مو من مكونات الكوكيز.",
    "A DNS resource record is not a cookie component.",
    1,
    0
  ],
  [
    2,
    "cookies",
    "On a user's first visit, the site creates:",
    [
      "A unique ID and an entry in its backend database",
      "A new IP address",
      "A TCP checksum",
      "A DNS record"
    ],
    "أول زيارة: الموقع يسوي رقم فريد وسجل في قاعدته.",
    "On the first visit, the site creates a unique ID and a backend database entry.",
    0,
    0
  ],
  [
    2,
    "cookies",
    "Which is a use of cookies listed on the slides?",
    [
      "Shopping carts",
      "Routing packets",
      "Error detection",
      "Assigning ports"
    ],
    "الاستخدامات: التفويض، سلة المشتريات، التوصيات، حالة الجلسة.",
    "Uses: authorization, shopping carts, recommendations, session state.",
    0,
    0
  ],
  [
    2,
    "cookies",
    "Third-party (tracking) cookies allow:",
    [
      "Tracking a common identity across multiple websites",
      "Tracking on one site only",
      "Faster downloads",
      "Encryption"
    ],
    "كوكيز الطرف الثالث تتبعك عبر مواقع كثيرة.",
    "Third-party cookies track a common identity across multiple sites.",
    1,
    0
  ],
  [
    2,
    "cookies",
    "Third-party tracking via cookies is disabled by default in:",
    [
      "Firefox and Safari",
      "All browsers",
      "No browser",
      "Only Internet Explorer"
    ],
    "Firefox وSafari يقفلونها افتراضياً.",
    "Firefox and Safari disable third-party tracking by default.",
    0,
    0
  ],
  [
    2,
    "cookies",
    "A \"stateful\" protocol example is:",
    [
      "Client makes two changes to X, or none at all",
      "All requests are independent",
      "No need to recover from partial transactions",
      "Server forgets everything"
    ],
    "ذو الحالة: يسوي التغييرين أو ولا واحد.",
    "Stateful: the client makes both changes to X or none.",
    0,
    0
  ],
  [
    2,
    "cookies",
    "Cookies tracking user behavior on a given (visited) website are:",
    [
      "First party cookies",
      "Third party cookies",
      "DNS cookies",
      "TCP cookies"
    ],
    "كوكيز الطرف الأول تتبعك في نفس الموقع اللي زرته.",
    "First-party cookies track behavior on the visited site.",
    0,
    0
  ],
  [
    2,
    "cache",
    "The goal of a Web cache is to:",
    [
      "Satisfy client requests without involving the origin server",
      "Encrypt all requests",
      "Replace DNS",
      "Store cookies"
    ],
    "الهدف: نخدم الطلب بدون الخادم الأصلي.",
    "Goal: satisfy requests without involving the origin server.",
    1,
    0
  ],
  [
    2,
    "cache",
    "A Web cache (proxy server) acts as:",
    [
      "Both client and server",
      "Only a client",
      "Only a server",
      "A router"
    ],
    "الكاش خادم للعميل وعميل للخادم الأصلي.",
    "A cache is a server to the client and a client to the origin server.",
    1,
    0
  ],
  [
    2,
    "cache",
    "Which is a reason for Web caching?",
    [
      "Reduce response time and reduce traffic on the access link",
      "Increase delay",
      "Increase access-link traffic",
      "Remove the need for TCP"
    ],
    "الكاش يقلل وقت الاستجابة والترافيك على رابط المؤسسة.",
    "Caching reduces response time and access-link traffic.",
    1,
    0
  ],
  [
    2,
    "cache",
    "Scenario: 15 requests/sec × 100K bits on a 1.54 Mbps access link. Access link utilization?",
    [
      "0.97",
      "0.58",
      "0.0015",
      "0.4"
    ],
    "1.50 ÷ 1.54 ≈ 0.97، فالطابور كبير جداً.",
    "1.50/1.54 ≈ 0.97, causing huge queueing delay.",
    1,
    0
  ],
  [
    2,
    "cache",
    "With cache hit rate 0.4, the data rate over the access link becomes:",
    [
      "0.9 Mbps",
      "1.5 Mbps",
      "0.6 Mbps",
      "0.4 Mbps"
    ],
    "60% بس تمر: 0.6 × 1.50 = 0.9 Mbps.",
    "Only 60% go to the origin: 0.6 × 1.50 = 0.9 Mbps.",
    1,
    0
  ],
  [
    2,
    "cache",
    "With hit rate 0.4, the access link utilization is:",
    [
      "0.58",
      "0.97",
      "0.40",
      "0.60"
    ],
    "0.9 ÷ 1.54 = 0.58.",
    "0.9/1.54 = 0.58.",
    1,
    0
  ],
  [
    2,
    "cache",
    "With hit rate 0.4, average end-end delay is about:",
    [
      "1.2 secs",
      "2 secs + minutes",
      "0 secs",
      "20 secs"
    ],
    "0.6 × 2.01 + 0.4 × (msecs) ≈ 1.2 ثانية.",
    "0.6 × 2.01 + 0.4 × (~msecs) ≈ 1.2 secs.",
    0,
    0
  ],
  [
    2,
    "cache",
    "Compared to buying a 154 Mbps link, installing a cache gives:",
    [
      "Lower average delay and is cheaper",
      "Higher delay and costs more",
      "Exactly the same",
      "No benefit"
    ],
    "الكاش يعطي تأخير أقل وأرخص من الرابط السريع.",
    "The cache gives lower average delay and is cheaper.",
    0,
    0
  ],
  [
    2,
    "cache",
    "In a conditional GET, the client includes:",
    [
      "If-modified-since: <date>",
      "Set-cookie: <id>",
      "Location: <url>",
      "Host: <ip>"
    ],
    "العميل يرسل If-modified-since بتاريخ نسخته.",
    "The client sends If-modified-since with its cached copy's date.",
    0,
    0
  ],
  [
    2,
    "cache",
    "If the cached copy is up to date, the server replies:",
    [
      "304 Not Modified (no object)",
      "200 OK with the object",
      "404 Not Found",
      "301 Moved"
    ],
    "إذا ما تغير: 304 Not Modified بدون الكائن.",
    "If unchanged, the server replies 304 Not Modified with no object.",
    0,
    0
  ],
  [
    2,
    "cache",
    "Why does the original scenario have an end-end delay of \"minutes\"?",
    [
      "Large queueing delays at high access-link utilization",
      "Slow LAN",
      "Long DNS lookups",
      "Propagation over the LAN"
    ],
    "لأن استغلال الرابط 0.97 فالطابور ضخم.",
    "Utilization 0.97 causes huge queueing delays on the access link.",
    0,
    0
  ],
  [
    2,
    "http2",
    "The key goal of HTTP/2 is:",
    [
      "Decreased delay in multi-object HTTP requests",
      "Adding cookies",
      "Replacing TCP with IP",
      "Removing status codes"
    ],
    "هدف HTTP/2: تقليل التأخير في الطلبات اللي فيها كائنات كثيرة.",
    "HTTP/2 aims to decrease delay in multi-object requests.",
    0,
    0
  ],
  [
    2,
    "http2",
    "Head-of-line (HOL) blocking happens when:",
    [
      "A small object waits behind a large object (FCFS)",
      "DNS fails",
      "A cookie expires",
      "A router drops the head of the packet"
    ],
    "HOL: الكائن الصغير ينتظر ورا الكبير بسبب الترتيب FCFS.",
    "HOL blocking: a small object waits behind large ones under FCFS.",
    0,
    0
  ],
  [
    2,
    "http2",
    "HTTP 1.1 servers respond to pipelined GETs:",
    [
      "In order (FCFS)",
      "By client priority",
      "Randomly",
      "In reverse order"
    ],
    "HTTP 1.1 يرد بالترتيب FCFS.",
    "HTTP 1.1 responds in order (FCFS).",
    0,
    0
  ],
  [
    2,
    "http2",
    "HTTP/2 mitigates HOL blocking by:",
    [
      "Dividing objects into frames and interleaving them",
      "Using more cookies",
      "Closing the connection after each object",
      "Using UDP"
    ],
    "HTTP/2 يقسم الكائنات frames ويخلطها.",
    "HTTP/2 divides objects into frames and interleaves them.",
    0,
    0
  ],
  [
    2,
    "http2",
    "Which is NOT a change in HTTP/2?",
    [
      "New status codes and methods",
      "Client-specified object priority",
      "Server push of unrequested objects",
      "Frames to mitigate HOL blocking"
    ],
    "HTTP/2 خلّى الطرق والأكواد وأغلب الترويسات زي ما هي.",
    "Methods, status codes and most headers are unchanged in HTTP/2.",
    0,
    0
  ],
  [
    2,
    "http2",
    "HTTP/3 runs over:",
    [
      "UDP",
      "TCP",
      "IP only",
      "SMTP"
    ],
    "HTTP/3 فوق UDP مع أمن وتحكم أخطاء وازدحام لكل كائن.",
    "HTTP/3 runs over UDP, adding security and per-object error/congestion control.",
    0,
    0
  ],
  [
    2,
    "http2",
    "A remaining problem of HTTP/2 over a single TCP connection is:",
    [
      "Recovery from packet loss still stalls all object transmissions",
      "It cannot send images",
      "It has no headers",
      "It needs one connection per object"
    ],
    "فقد حزمة يوقف كل الكائنات لأنها على نفس اتصال TCP.",
    "Loss recovery still stalls all objects on the single TCP connection.",
    0,
    0
  ],
  [
    2,
    "http2",
    "HTTP/2 was standardized in:",
    [
      "RFC 7540, 2015",
      "RFC 959, 1985",
      "RFC 5321, 2008",
      "RFC 768, 1980"
    ],
    "HTTP/2 في RFC 7540 سنة 2015.",
    "HTTP/2 is RFC 7540 (2015).",
    0,
    0
  ],
  [
    2,
    "email",
    "The three major components of e-mail are:",
    [
      "User agents, mail servers, SMTP",
      "Browsers, caches, cookies",
      "DNS, TCP, IP",
      "Trackers, peers, chunks"
    ],
    "البريد: وكيل المستخدم، خوادم البريد، وSMTP.",
    "E-mail: user agents, mail servers, SMTP.",
    0,
    0
  ],
  [
    2,
    "email",
    "SMTP uses which transport protocol and port?",
    [
      "TCP, port 25",
      "UDP, port 25",
      "TCP, port 80",
      "UDP, port 53"
    ],
    "SMTP على TCP منفذ 25.",
    "SMTP uses TCP on port 25.",
    0,
    0
  ],
  [
    2,
    "email",
    "The three phases of SMTP transfer are:",
    [
      "Handshaking, transfer of messages, closure",
      "Request, response, close",
      "SYN, SYNACK, ACK",
      "Connect, push, pull"
    ],
    "المراحل: المصافحة، نقل الرسائل، الإغلاق.",
    "SMTP phases: handshaking, message transfer, closure.",
    0,
    0
  ],
  [
    2,
    "email",
    "A mail server's mailbox contains:",
    [
      "Incoming messages for the user",
      "Outgoing messages only",
      "DNS records",
      "Cookies"
    ],
    "الصندوق للرسائل الواردة، والطابور للصادرة.",
    "The mailbox holds incoming messages; the queue holds outgoing ones.",
    0,
    0
  ],
  [
    2,
    "email",
    "In SMTP between mail servers, the sending mail server acts as the:",
    [
      "Client",
      "Server",
      "Tracker",
      "Proxy"
    ],
    "الخادم المرسل يتصرف كعميل، والمستقبل كخادم.",
    "The sending server acts as client; the receiving server as server.",
    0,
    0
  ],
  [
    2,
    "email",
    "When Alice sends mail to Bob, her user agent first sends the message to:",
    [
      "Alice's mail server (using SMTP)",
      "Bob's user agent directly",
      "Bob's mail server directly",
      "The root DNS server"
    ],
    "الـ UA حق أليس يرسل لخادمها هي أول بـ SMTP.",
    "Alice's UA first sends to her own mail server via SMTP.",
    0,
    0
  ],
  [
    2,
    "email",
    "Which protocol retrieves mail from the server, with folders and deletion?",
    [
      "IMAP",
      "SMTP",
      "HTTP/2",
      "FTP"
    ],
    "IMAP للاسترجاع مع مجلدات وحذف.",
    "IMAP retrieves mail with folders and deletion.",
    0,
    0
  ],
  [
    2,
    "email",
    "Gmail's web interface uses:",
    [
      "HTTP on top of SMTP (send) and IMAP/POP (retrieve)",
      "Only FTP",
      "Only DNS",
      "Only UDP"
    ],
    "Gmail واجهة HTTP فوق SMTP للإرسال وIMAP/POP للاستلام.",
    "Webmail uses HTTP over SMTP for sending and IMAP/POP for retrieval.",
    0,
    0
  ],
  [
    2,
    "email",
    "SMTP transfer between servers is:",
    [
      "Direct: sending server to receiving server",
      "Via the root DNS",
      "Via BitTorrent peers",
      "Via the recipient's browser"
    ],
    "النقل مباشر من الخادم المرسل للمستقبل.",
    "Direct transfer from the sending server to the receiving server.",
    0,
    0
  ],
  [
    2,
    "email",
    "SMTP commands are:",
    [
      "ASCII text, with responses as status code and phrase",
      "Binary frames",
      "Encrypted only",
      "DNS queries"
    ],
    "الأوامر نص ASCII والرد كود وعبارة مثل HTTP.",
    "Commands are ASCII; responses are a status code and phrase.",
    0,
    0
  ],
  [
    2,
    "dns",
    "DNS is:",
    [
      "A distributed, hierarchical database and an application-layer protocol",
      "A transport protocol",
      "A link-layer protocol",
      "A single central server"
    ],
    "DNS قاعدة بيانات موزعة هرمية وبروتوكول طبقة تطبيقات.",
    "DNS is a distributed hierarchical database and an application-layer protocol.",
    1,
    0
  ],
  [
    2,
    "dns",
    "Which is NOT a reason against centralizing DNS?",
    [
      "It would be too secure",
      "Single point of failure",
      "Traffic volume",
      "Distant centralized database / maintenance"
    ],
    "أسباب عدم المركزية: نقطة فشل، حجم الترافيك، البعد، الصيانة.",
    "Reasons: single point of failure, traffic volume, distance, maintenance.",
    1,
    0
  ],
  [
    2,
    "dns",
    "Which is a DNS service?",
    [
      "Load distribution among replicated Web servers",
      "Reliable byte stream",
      "Flow control",
      "Error correction"
    ],
    "خدمات DNS: التحويل، الأسماء المستعارة، أسماء البريد، وتوزيع الحمل.",
    "DNS services: translation, host aliasing, mail aliasing, load distribution.",
    1,
    0
  ],
  [
    2,
    "dns",
    "To find www.amazon.com (1st approximation), the client first queries:",
    [
      "A root server to find the .com DNS server",
      "The amazon.com server directly",
      "The local web cache",
      "The tracker"
    ],
    "أول شي الجذر عشان يعرف خادم .com.",
    "First the root server, to find the .com DNS server.",
    1,
    0
  ],
  [
    2,
    "dns",
    "How many logical root name \"servers\" are there worldwide?",
    [
      "13",
      "1",
      "200",
      "1000"
    ],
    "13 خادم جذر منطقي، كل واحد منسوخ مرات كثيرة.",
    "13 logical root servers, each replicated many times.",
    1,
    0
  ],
  [
    2,
    "dns",
    "Who manages the root DNS domain?",
    [
      "ICANN",
      "IETF",
      "Network Solutions",
      "Educause"
    ],
    "ICANN تدير نطاق الجذر.",
    "ICANN manages the root DNS domain.",
    1,
    0
  ],
  [
    2,
    "dns",
    "DNSSEC provides:",
    [
      "Security: authentication and message integrity",
      "Faster caching",
      "Load balancing",
      "Port numbers"
    ],
    "DNSSEC للأمن: مصادقة وسلامة الرسائل.",
    "DNSSEC provides authentication and message integrity.",
    0,
    0
  ],
  [
    2,
    "dns",
    "TLD servers are responsible for:",
    [
      ".com, .org, .edu and country domains such as .uk and .jp",
      "Individual company hostnames",
      "Local caching only",
      "SMTP delivery"
    ],
    "TLD: النطاقات العليا مثل .com ونطاقات الدول.",
    "TLD servers handle .com, .org, .edu and country domains.",
    0,
    0
  ],
  [
    2,
    "dns",
    "An organization's own DNS server providing official hostname-to-IP mappings is a:",
    [
      "Authoritative DNS server",
      "Root server",
      "TLD server",
      "Web cache"
    ],
    "خادم المؤسسة الرسمي اسمه authoritative.",
    "An organization's own DNS server is authoritative.",
    0,
    0
  ],
  [
    2,
    "dns",
    "The local DNS name server:",
    [
      "Doesn't strictly belong to the hierarchy",
      "Is a root server",
      "Is a TLD server",
      "Never caches"
    ],
    "الخادم المحلي مو جزء رسمي من الهرم.",
    "The local DNS server doesn't strictly belong to the hierarchy.",
    0,
    0
  ],
  [
    2,
    "dns",
    "A local DNS server may answer from its cache, which is possibly:",
    [
      "Out of date",
      "Always correct",
      "Encrypted",
      "Empty"
    ],
    "الكاش ممكن يكون قديم.",
    "Its cache may be out of date.",
    0,
    0
  ],
  [
    2,
    "dns",
    "Which registry is authoritative for .com and .net?",
    [
      "Network Solutions",
      "Educause",
      "ICANN",
      "IETF"
    ],
    "Network Solutions لـ .com و.net، وEducause لـ .edu.",
    "Network Solutions for .com/.net; Educause for .edu.",
    0,
    0
  ],
  [
    2,
    "dnsq",
    "In an iterated query, the contacted server replies:",
    [
      "\"I don't know this name, but ask this server\"",
      "With the final answer after asking others itself",
      "With a 404",
      "Nothing"
    ],
    "التكراري: الخادم يقول «اسأل هذا».",
    "Iterated: \"I don't know, but ask this server.\"",
    1,
    0
  ],
  [
    2,
    "dnsq",
    "A recursive query:",
    [
      "Puts the burden of name resolution on the contacted name server",
      "Puts the burden on the requesting host",
      "Never reaches the root",
      "Is never cached"
    ],
    "العودي: الحمل على الخادم اللي سألته.",
    "Recursive puts the resolution burden on the contacted server.",
    1,
    0
  ],
  [
    2,
    "dnsq",
    "A drawback of recursive queries is:",
    [
      "Heavy load at upper levels of the hierarchy",
      "No answers at all",
      "Too many cookies",
      "No caching possible"
    ],
    "العودي يثقل الطبقات العليا.",
    "Recursive queries put heavy load at upper hierarchy levels.",
    0,
    0
  ],
  [
    2,
    "dnsq",
    "DNS cache entries disappear after:",
    [
      "Their TTL expires",
      "One request",
      "A reboot only",
      "Never"
    ],
    "المدخلات تنتهي بعد الـ TTL.",
    "Cache entries time out after the TTL.",
    1,
    0
  ],
  [
    2,
    "dnsq",
    "If a host changes its IP address:",
    [
      "It may not be known Internet-wide until all TTLs expire",
      "Everyone knows immediately",
      "DNS stops working",
      "The root server is notified first"
    ],
    "ما ينعرف لين تنتهي كل الـ TTLs، فالتحويل best-effort.",
    "It may not be known until all TTLs expire (best-effort).",
    0,
    0
  ],
  [
    2,
    "dnsq",
    "The DNS resource record format is:",
    [
      "(name, value, type, ttl)",
      "(src, dst, port, seq)",
      "(host, path, version)",
      "(id, flags, data)"
    ],
    "شكل السجل: (name, value, type, ttl).",
    "RR format: (name, value, type, ttl).",
    1,
    0
  ],
  [
    2,
    "dnsq",
    "A type=A record maps:",
    [
      "A hostname to an IPv4 address",
      "A domain to its name server",
      "An alias to a canonical name",
      "A name to a mail server"
    ],
    "A: اسم الجهاز ← IP.",
    "Type A: hostname → IPv4 address.",
    1,
    0
  ],
  [
    2,
    "dnsq",
    "A type=NS record's value is:",
    [
      "The hostname of the authoritative name server for the domain",
      "An IP address",
      "A canonical name",
      "A mail server"
    ],
    "NS: القيمة اسم الخادم الموثوق للنطاق.",
    "NS value: hostname of the domain's authoritative name server.",
    1,
    0
  ],
  [
    2,
    "dnsq",
    "www.ibm.com is really servereast.backup2.ibm.com. Which record type expresses this?",
    [
      "CNAME",
      "A",
      "MX",
      "NS"
    ],
    "الاسم المستعار والحقيقي = CNAME.",
    "Alias → canonical name is a CNAME record.",
    0,
    0
  ],
  [
    2,
    "dnsq",
    "Which record gives the mail server associated with a name?",
    [
      "MX",
      "A",
      "CNAME",
      "NS"
    ],
    "MX: خادم البريد.",
    "MX gives the associated SMTP mail server.",
    0,
    0
  ],
  [
    2,
    "dnsq",
    "DNS query and reply messages:",
    [
      "Have the same format",
      "Use different formats",
      "Are HTTP messages",
      "Have no header"
    ],
    "الطلب والرد بنفس الشكل.",
    "DNS queries and replies share the same format.",
    0,
    0
  ],
  [
    2,
    "dnsq",
    "The DNS identification field is:",
    [
      "16 bits, and the reply uses the same number",
      "32 bits, different in reply",
      "8 bits",
      "Not used"
    ],
    "رقم التعريف 16 بت والرد بنفس الرقم.",
    "The 16-bit ID is reused in the reply.",
    0,
    0
  ],
  [
    2,
    "dnsq",
    "When Network Utopia registers its domain, the registrar inserts into the .com TLD server:",
    [
      "NS and A resource records",
      "Only an MX record",
      "Only a CNAME",
      "Nothing"
    ],
    "المسجّل يضيف سجلات NS وA في خادم .com.",
    "The registrar inserts NS and A records into the .com TLD.",
    0,
    0
  ],
  [
    2,
    "dnsq",
    "In the slide example (engineering.nyu.edu → gaia.cs.umass.edu) with iterated queries, how many DNS messages are exchanged?",
    [
      "8",
      "4",
      "2",
      "6"
    ],
    "المحلي مع الجذر (2) وTLD (2) والموثوق (2) + الجهاز مع المحلي (2) = 8.",
    "Host↔local (2), local↔root (2), ↔TLD (2), ↔authoritative (2) = 8.",
    0,
    0
  ],
  [
    2,
    "p2p",
    "Client-server minimum distribution time for N clients is:",
    [
      "max{NF/u_s, F/d_min}",
      "max{F/u_s, F/d_min, NF/(u_s + Σu_i)}",
      "F/u_s",
      "N × F"
    ],
    "عميل/خادم: max{NF/u_s, F/d_min}.",
    "Client-server: D ≥ max{NF/u_s, F/d_min}.",
    1,
    0
  ],
  [
    2,
    "p2p",
    "P2P minimum distribution time is:",
    [
      "max{F/u_s, F/d_min, NF/(u_s + Σu_i)}",
      "max{NF/u_s, F/d_min}",
      "NF/u_s",
      "F/d_min only"
    ],
    "P2P: max{F/u_s, F/d_min, NF/(u_s + Σu_i)}.",
    "P2P: D ≥ max{F/u_s, F/d_min, NF/(u_s + Σu_i)}.",
    1,
    0
  ],
  [
    2,
    "p2p",
    "Client-server distribution time increases:",
    [
      "Linearly in N",
      "Logarithmically in N",
      "Not at all with N",
      "Exponentially in N"
    ],
    "وقت العميل/خادم يزيد خطياً مع N.",
    "Client-server time increases linearly in N.",
    1,
    0
  ],
  [
    2,
    "p2p",
    "F = 1 Gbit, u_s = 100 Mbps, d_min = 50 Mbps, N = 10 (client-server). Minimum distribution time?",
    [
      "100 s",
      "20 s",
      "10 s",
      "200 s"
    ],
    "NF/u_s = 10×1000/100 = 100 ث، وF/d_min = 20 ث، والأكبر 100 ثانية.",
    "NF/u_s = 10,000/100 = 100 s; F/d_min = 20 s; max = 100 s.",
    1,
    0
  ],
  [
    2,
    "p2p",
    "In BitTorrent, a file is divided into chunks of:",
    [
      "256Kb",
      "1 MB",
      "64 bytes",
      "1 bit"
    ],
    "الملف ينقسم لقطع 256Kb.",
    "Files are divided into 256Kb chunks.",
    1,
    0
  ],
  [
    2,
    "p2p",
    "The BitTorrent tracker:",
    [
      "Tracks peers participating in a torrent",
      "Stores the whole file",
      "Encrypts chunks",
      "Is a DNS server"
    ],
    "الـ tracker يتابع المشاركين في الـ torrent.",
    "The tracker tracks peers in a torrent.",
    1,
    0
  ],
  [
    2,
    "p2p",
    "A torrent is:",
    [
      "A group of peers exchanging chunks of a file",
      "A single server",
      "A DNS record",
      "A TCP segment"
    ],
    "الـ torrent مجموعة peers يتبادلون قطع الملف.",
    "A torrent is a group of peers exchanging chunks of a file.",
    0,
    0
  ],
  [
    2,
    "p2p",
    "Alice requests missing chunks:",
    [
      "Rarest first",
      "Largest first",
      "In random order only",
      "From the tracker"
    ],
    "تطلب الأندر أولاً.",
    "She requests missing chunks rarest first.",
    0,
    0
  ],
  [
    2,
    "p2p",
    "In tit-for-tat, Alice sends chunks to:",
    [
      "The four peers currently sending her chunks at the highest rate",
      "All peers equally",
      "Only the tracker",
      "One random peer only"
    ],
    "ترسل لأعلى 4 يرسلون لها.",
    "She sends to the top four peers sending to her at the highest rate.",
    0,
    0
  ],
  [
    2,
    "p2p",
    "How often does Alice re-evaluate her top 4 peers?",
    [
      "Every 10 secs",
      "Every 30 secs",
      "Every minute",
      "Never"
    ],
    "تعيد التقييم كل 10 ثواني.",
    "Top 4 are re-evaluated every 10 secs.",
    0,
    0
  ],
  [
    2,
    "p2p",
    "Every 30 secs, Alice:",
    [
      "Randomly selects another peer and \"optimistically unchokes\" it",
      "Leaves the torrent",
      "Contacts the tracker",
      "Chokes all peers"
    ],
    "كل 30 ثانية تختار واحد عشوائي وتفك خنقه بتفاؤل.",
    "Every 30 s she optimistically unchokes a random peer.",
    0,
    0
  ],
  [
    2,
    "p2p",
    "\"Churn\" in BitTorrent means:",
    [
      "Peers may come and go",
      "Chunks are corrupted",
      "The tracker fails",
      "Files are compressed"
    ],
    "churn: الـ peers يجون ويروحون.",
    "Churn: peers come and go.",
    0,
    0
  ],
  [
    2,
    "p2p",
    "Peers not receiving chunks from Alice are:",
    [
      "Choked",
      "Unchoked",
      "Seeded",
      "Tracked"
    ],
    "اللي ما تعطيهم اسمهم choked (مخنوقين).",
    "Peers not getting chunks from Alice are choked.",
    0,
    0
  ],
  [
    3,
    "tsvc",
    "Transport services provide logical communication between:",
    [
      "Application processes on different hosts",
      "Hosts only",
      "Routers",
      "Links"
    ],
    "النقل: اتصال منطقي بين العمليات على أجهزة مختلفة.",
    "Transport: logical communication between processes on different hosts.",
    0,
    0
  ],
  [
    3,
    "tsvc",
    "The network layer provides logical communication between:",
    [
      "Hosts",
      "Processes",
      "Sockets",
      "Applications"
    ],
    "الشبكة بين الأجهزة، والنقل بين العمليات.",
    "Network layer: between hosts; transport: between processes.",
    0,
    0
  ],
  [
    3,
    "tsvc",
    "At the sender, the transport layer:",
    [
      "Breaks application messages into segments and passes them to the network layer",
      "Reassembles segments into messages",
      "Routes datagrams",
      "Transmits bits"
    ],
    "المرسل يقسم الرسائل segments ويعطيها لطبقة الشبكة.",
    "The sender breaks messages into segments and passes them to the network layer.",
    0,
    0
  ],
  [
    3,
    "tsvc",
    "Which service is NOT available in TCP or UDP?",
    [
      "Delay and bandwidth guarantees",
      "Reliable delivery",
      "Checksum",
      "Port numbers"
    ],
    "لا TCP ولا UDP يضمن تأخير أو bandwidth.",
    "Neither TCP nor UDP guarantees delay or bandwidth.",
    0,
    0
  ],
  [
    3,
    "tsvc",
    "UDP is described as:",
    [
      "A no-frills extension of \"best-effort\" IP",
      "Reliable and in-order",
      "Connection-oriented",
      "Congestion-controlled"
    ],
    "UDP امتداد بسيط لـ IP أفضل جهد، غير موثوق ولا مرتب.",
    "UDP is a no-frills extension of best-effort IP.",
    0,
    0
  ],
  [
    3,
    "tsvc",
    "The receiver's transport layer delivers the message to the application via:",
    [
      "A socket (demultiplexing)",
      "A router",
      "The DNS",
      "The tracker"
    ],
    "المستقبل يوزع الرسالة للتطبيق عبر الـ socket.",
    "The receiver demultiplexes the message up via the socket.",
    0,
    0
  ],
  [
    3,
    "mux",
    "Demultiplexing at the receiver means:",
    [
      "Using header info to deliver segments to the correct socket",
      "Adding headers to data",
      "Routing between hosts",
      "Encrypting data"
    ],
    "التوزيع: نستخدم الترويسة نوصل كل segment للـ socket الصح.",
    "Demultiplexing uses header info to deliver segments to the right socket.",
    1,
    0
  ],
  [
    3,
    "mux",
    "UDP demultiplexing uses:",
    [
      "Destination port number only",
      "The full 4-tuple",
      "Source IP only",
      "Sequence numbers"
    ],
    "UDP يوزع بمنفذ الوجهة بس.",
    "UDP demultiplexes by destination port only.",
    1,
    0
  ],
  [
    3,
    "mux",
    "A TCP socket is identified by:",
    [
      "A 4-tuple: source IP, source port, dest IP, dest port",
      "Destination port only",
      "Source IP only",
      "A 2-tuple"
    ],
    "TCP socket يتعرف بـ 4-tuple.",
    "A TCP socket is identified by the 4-tuple.",
    1,
    0
  ],
  [
    3,
    "mux",
    "Two UDP segments with the same destination port but different source IPs arrive at a host. They go to:",
    [
      "The same socket",
      "Different sockets",
      "No socket",
      "The tracker"
    ],
    "UDP: نفس منفذ الوجهة ← نفس الـ socket حتى لو المصدر مختلف.",
    "Same destination port in UDP → same socket.",
    1,
    0
  ],
  [
    3,
    "mux",
    "Three TCP segments all to server B port 80, from different clients, are demultiplexed to:",
    [
      "Different sockets",
      "The same socket",
      "Port 25",
      "They are dropped"
    ],
    "TCP يستخدم الـ 4-tuple، فكل عميل له socket مختلف.",
    "TCP uses the 4-tuple, so each client gets a different socket.",
    1,
    0
  ],
  [
    3,
    "mux",
    "Multiplexing/demultiplexing happen at:",
    [
      "All layers",
      "Only the transport layer",
      "Only the application layer",
      "Only the physical layer"
    ],
    "الدمج والتوزيع يصير في كل الطبقات.",
    "Mux/demux happen at all layers.",
    0,
    0
  ],
  [
    3,
    "mux",
    "Each IP datagram carries how many transport-layer segments?",
    [
      "One",
      "Two",
      "Ten",
      "None"
    ],
    "كل datagram يحمل segment واحد.",
    "Each datagram carries one transport-layer segment.",
    0,
    0
  ],
  [
    3,
    "mux",
    "When creating a UDP socket in Java (DatagramSocket(12534)), you specify:",
    [
      "A host-local port number",
      "A remote IP",
      "A sequence number",
      "A TTL"
    ],
    "لما تسوي socket تحدد رقم منفذ محلي.",
    "You specify a host-local port number.",
    0,
    0
  ],
  [
    3,
    "udp",
    "UDP is connectionless, meaning:",
    [
      "No handshaking between sender and receiver; each segment handled independently",
      "It always uses three-way handshake",
      "It keeps connection state",
      "It retransmits lost segments"
    ],
    "بدون اتصال: ما فيه مصافحة وكل segment مستقل.",
    "Connectionless: no handshaking, each segment independent.",
    1,
    0
  ],
  [
    3,
    "udp",
    "Which of these uses UDP?",
    [
      "DNS",
      "SMTP",
      "HTTP/1.1",
      "FTP"
    ],
    "UDP: البث، DNS، SNMP، وHTTP/3.",
    "UDP is used by streaming, DNS, SNMP, HTTP/3.",
    1,
    0
  ],
  [
    3,
    "udp",
    "If reliable transfer is needed over UDP (e.g., HTTP/3), reliability is added:",
    [
      "At the application layer",
      "At the network layer",
      "At the link layer",
      "It can't be added"
    ],
    "تضاف الموثوقية في طبقة التطبيقات.",
    "Reliability and congestion control are added at the application layer.",
    1,
    0
  ],
  [
    3,
    "udp",
    "How many fields does the UDP header have?",
    [
      "Four: source port, dest port, length, checksum",
      "Two",
      "Six",
      "Ten"
    ],
    "ترويسة UDP أربع حقول: المنفذين والطول والـ checksum.",
    "UDP header: source port, dest port, length, checksum.",
    1,
    0
  ],
  [
    3,
    "udp",
    "The UDP length field gives:",
    [
      "The length in bytes of the UDP segment, including header",
      "Only the payload length in bits",
      "The number of segments",
      "The IP header length"
    ],
    "الطول بالبايت للـ segment كامل مع الترويسة.",
    "Length in bytes of the whole segment, including header.",
    1,
    0
  ],
  [
    3,
    "udp",
    "The goal of the UDP checksum is to:",
    [
      "Detect errors (flipped bits)",
      "Correct errors",
      "Encrypt data",
      "Order segments"
    ],
    "الـ checksum يكشف الأخطاء بس، ما يصححها.",
    "The checksum detects errors (flipped bits); it doesn't correct them.",
    1,
    0
  ],
  [
    3,
    "udp",
    "The Internet checksum is computed as:",
    [
      "The one's complement of the one's complement sum of 16-bit words",
      "A CRC-32",
      "An MD5 hash",
      "The XOR of bytes"
    ],
    "نجمع كلمات 16 بت بالـ one's complement ونعكس النتيجة.",
    "Sum 16-bit words in one's complement and take the complement.",
    0,
    0
  ],
  [
    3,
    "udp",
    "When adding 16-bit numbers for the checksum, a carry out of the most significant bit is:",
    [
      "Added back to the result (wraparound)",
      "Discarded",
      "Doubled",
      "Stored in a separate field"
    ],
    "الـ carry نرجعه ونضيفه للنتيجة (wraparound).",
    "The carry-out is wrapped around and added to the result.",
    0,
    0
  ],
  [
    3,
    "udp",
    "Sum = 1011101110111100. What is the checksum?",
    [
      "0100010001000011",
      "1011101110111100",
      "1111111111111111",
      "0000000000000000"
    ],
    "الـ checksum = عكس كل بت في المجموع.",
    "Checksum = one's complement (flip every bit) of the sum.",
    0,
    0
  ],
  [
    3,
    "udp",
    "If the receiver's computed checksum equals the field value:",
    [
      "No error detected, but errors may still exist",
      "The data is guaranteed correct",
      "The segment is discarded",
      "A NAK is sent"
    ],
    "متساوي = ما انكشف خطأ، بس ممكن فيه خطأ (حماية ضعيفة).",
    "Equal means no error detected — errors may still exist (weak protection).",
    0,
    0
  ],
  [
    3,
    "udp",
    "Why is UDP useful even though it is unreliable?",
    [
      "No setup/handshaking (no RTT incurred) and small header",
      "It guarantees delivery",
      "It has congestion control",
      "It keeps connection state"
    ],
    "ميزاته: بدون إعداد (ما فيه RTT)، ترويسة صغيرة، ويشتغل حتى لو الشبكة متضررة.",
    "Pluses: no setup RTT, small header, works when the network is compromised.",
    0,
    0
  ],
  [
    3,
    "udp",
    "UDP segments may be:",
    [
      "Lost or delivered out-of-order",
      "Always delivered in order",
      "Never lost",
      "Retransmitted automatically"
    ],
    "segments الـ UDP ممكن تضيع أو توصل بدون ترتيب.",
    "UDP segments may be lost or delivered out of order.",
    0,
    0
  ],
  [
    3,
    "udp",
    "The UDP header is how many bytes?",
    [
      "8",
      "20",
      "4",
      "16"
    ],
    "4 حقول × 16 بت = 64 بت = 8 بايت.",
    "Four 16-bit fields = 8 bytes.",
    0,
    0
  ],
  [
    3,
    "rdt",
    "rdt1.0 assumes the underlying channel is:",
    [
      "Perfectly reliable: no bit errors, no loss",
      "Lossy",
      "Bit-error prone",
      "Reordering"
    ],
    "rdt1.0: قناة موثوقة تماماً.",
    "rdt1.0 assumes a perfectly reliable channel.",
    1,
    0
  ],
  [
    3,
    "rdt",
    "rdt2.0 handles which channel problem?",
    [
      "Bit errors",
      "Packet loss",
      "Reordering",
      "Congestion"
    ],
    "rdt2.0 للقنوات اللي تقلب البتات.",
    "rdt2.0 handles bit errors.",
    1,
    0
  ],
  [
    3,
    "rdt",
    "rdt2.0 uses which mechanisms to recover from errors?",
    [
      "Checksum, ACKs, NAKs, retransmission",
      "Timers only",
      "Sequence numbers only",
      "Congestion windows"
    ],
    "rdt2.0: checksum للكشف، وACK وNAK، وإعادة إرسال عند NAK.",
    "rdt2.0: checksum, ACK/NAK, and retransmission on NAK.",
    1,
    0
  ],
  [
    3,
    "rdt",
    "The fatal flaw of rdt2.0 is:",
    [
      "It fails if the ACK/NAK itself is corrupted",
      "It has no checksum",
      "It can't send data",
      "It uses too many sequence numbers"
    ],
    "العيب القاتل: لو الـ ACK/NAK خرب المرسل ما يدري وش صار.",
    "If ACK/NAK is corrupted, the sender doesn't know what happened.",
    1,
    0
  ],
  [
    3,
    "rdt",
    "rdt2.1 solves duplicates by:",
    [
      "Adding sequence numbers; the receiver discards duplicates",
      "Adding a timer",
      "Removing ACKs",
      "Using a bigger checksum"
    ],
    "rdt2.1 يضيف أرقام تسلسل والمستقبل يرمي المكرر.",
    "rdt2.1 adds sequence numbers so the receiver discards duplicates.",
    1,
    0
  ],
  [
    3,
    "rdt",
    "How many sequence numbers suffice for rdt2.1?",
    [
      "Two (0 and 1)",
      "One",
      "Four",
      "256"
    ],
    "رقمين (0 و1) يكفون لأنه stop-and-wait.",
    "Two sequence numbers (0, 1) suffice.",
    1,
    0
  ],
  [
    3,
    "rdt",
    "In rdt2.2 (NAK-free), a duplicate ACK at the sender means:",
    [
      "Same as a NAK: retransmit the current packet",
      "Everything is fine",
      "Close the connection",
      "Increase the window"
    ],
    "ACK مكرر = NAK فيعيد الحزمة.",
    "A duplicate ACK acts like a NAK: retransmit.",
    0,
    0
  ],
  [
    3,
    "rdt",
    "Which TCP-like approach does rdt2.2 introduce?",
    [
      "Using ACKs only (NAK-free)",
      "Using NAKs only",
      "Using no checksum",
      "Using UDP"
    ],
    "rdt2.2 يستخدم ACKs بس، وTCP يسوي نفسه.",
    "rdt2.2 is NAK-free (ACKs only), as TCP is.",
    0,
    0
  ],
  [
    3,
    "rdt",
    "rdt3.0 adds which mechanism to handle packet loss?",
    [
      "A countdown timer and retransmission",
      "NAKs",
      "More sequence numbers only",
      "Encryption"
    ],
    "rdt3.0 يضيف مؤقت: إذا ما جا ACK في وقت معقول يعيد.",
    "rdt3.0 adds a countdown timer with retransmission.",
    0,
    0
  ],
  [
    3,
    "rdt",
    "In rdt3.0, if a packet was only delayed (not lost) and retransmitted:",
    [
      "The duplicate is handled by sequence numbers",
      "The connection breaks",
      "Data is corrupted",
      "The receiver delivers it twice"
    ],
    "التكرار ينحل بأرقام التسلسل.",
    "Sequence numbers already handle the duplicate.",
    0,
    0
  ],
  [
    3,
    "rdt",
    "Protocols in rdt are specified using:",
    [
      "Finite state machines (FSM)",
      "Truth tables",
      "DNS records",
      "Gantt charts"
    ],
    "نستخدم FSM للمرسل والمستقبل.",
    "Sender and receiver are specified with FSMs.",
    0,
    0
  ],
  [
    3,
    "rdt",
    "In rdt3.0 \"ACK loss\" scenario, the receiver gets pkt1 twice and:",
    [
      "Detects the duplicate, discards it, and resends ack1",
      "Delivers it twice",
      "Sends a NAK",
      "Closes the connection"
    ],
    "المستقبل يكشف التكرار ويرميه ويعيد ack1.",
    "The receiver detects the duplicate, discards it and resends ack1.",
    0,
    0
  ],
  [
    3,
    "rdt",
    "rdt considers ___ data transfer, but control info flows in both directions.",
    [
      "Unidirectional",
      "Bidirectional",
      "Broadcast",
      "Multicast"
    ],
    "البيانات باتجاه واحد، بس معلومات التحكم بالاتجاهين.",
    "Unidirectional data transfer, with control info flowing both ways.",
    0,
    0
  ],
  [
    3,
    "pipe",
    "Sender utilization U_sender is:",
    [
      "The fraction of time the sender is busy sending",
      "The link's bandwidth",
      "The packet size",
      "The number of ACKs"
    ],
    "الاستغلال: نسبة الوقت اللي المرسل مشغول فيه بالإرسال.",
    "Utilization is the fraction of time the sender is busy sending.",
    1,
    0
  ],
  [
    3,
    "pipe",
    "Stop-and-wait utilization is:",
    [
      "(L/R) / (RTT + L/R)",
      "RTT / (L/R)",
      "L × R",
      "(RTT + L/R) / (L/R)"
    ],
    "U = (L/R) ÷ (RTT + L/R).",
    "U = (L/R) / (RTT + L/R).",
    1,
    0
  ],
  [
    3,
    "pipe",
    "1 Gbps link, 8000-bit packet. Transmission time L/R?",
    [
      "8 µs",
      "8 ms",
      "0.8 s",
      "80 µs"
    ],
    "8000 ÷ 10^9 = 8 ميكروثانية.",
    "8000/10^9 = 8 microseconds.",
    1,
    0
  ],
  [
    3,
    "pipe",
    "1 Gbps, 15 ms one-way propagation, 8000-bit packet. Stop-and-wait utilization?",
    [
      "0.00027",
      "0.5",
      "0.027",
      "0.97"
    ],
    "RTT = 30 ms، U = 0.008 ÷ 30.008 ≈ 0.00027.",
    "RTT = 30 ms; U = 0.008/30.008 ≈ 0.00027.",
    1,
    0
  ],
  [
    3,
    "pipe",
    "With 3 packets pipelined, utilization becomes:",
    [
      "3 times the stop-and-wait utilization",
      "The same",
      "One third",
      "Zero"
    ],
    "ثلاث حزم = ثلاث أضعاف: 0.00081.",
    "3 packets in flight triples utilization (0.00081).",
    1,
    0
  ],
  [
    3,
    "pipe",
    "Pipelining requires:",
    [
      "A larger range of sequence numbers and buffering at sender and/or receiver",
      "No sequence numbers",
      "No buffering",
      "Circuit switching"
    ],
    "التوازي يحتاج مدى أكبر لأرقام التسلسل وتخزين.",
    "Pipelining needs more sequence numbers and buffering.",
    1,
    0
  ],
  [
    3,
    "pipe",
    "The main lesson from stop-and-wait performance is:",
    [
      "The protocol limits performance of the underlying channel",
      "The channel limits the protocol",
      "Bigger packets always hurt",
      "RTT doesn't matter"
    ],
    "البروتوكول نفسه يخنق أداء القناة.",
    "The protocol limits the underlying channel's performance.",
    0,
    0
  ],
  [
    3,
    "gbn",
    "In Go-Back-N, ACK(n) is:",
    [
      "Cumulative: ACKs all packets up to and including n",
      "For packet n only",
      "A negative ACK",
      "For packet n+1 only"
    ],
    "GBN: ACK(n) تراكمي لين n ومعها.",
    "GBN ACK(n) is cumulative up to and including n.",
    1,
    0
  ],
  [
    3,
    "gbn",
    "In Go-Back-N, on timeout(n) the sender:",
    [
      "Retransmits packet n and all higher seq # packets in the window",
      "Retransmits only packet n",
      "Retransmits nothing",
      "Closes the connection"
    ],
    "GBN يعيد n وكل اللي بعدها في النافذة.",
    "GBN resends packet n and all higher packets in the window.",
    1,
    0
  ],
  [
    3,
    "gbn",
    "How many timers does a Go-Back-N sender use?",
    [
      "One, for the oldest in-flight packet",
      "One per packet",
      "None",
      "Two"
    ],
    "GBN مؤقت واحد لأقدم حزمة.",
    "GBN uses one timer for the oldest unACKed packet.",
    1,
    0
  ],
  [
    3,
    "gbn",
    "A Go-Back-N receiver needs to remember only:",
    [
      "rcv_base (expected seq #)",
      "All buffered packets",
      "The sender's window",
      "The RTT"
    ],
    "المستقبل في GBN يحفظ rcv_base بس.",
    "The GBN receiver only needs rcv_base.",
    0,
    0
  ],
  [
    3,
    "gbn",
    "In Selective Repeat, the receiver:",
    [
      "Individually ACKs all correctly received packets and buffers them",
      "Discards out-of-order packets",
      "Sends cumulative ACKs only",
      "Never buffers"
    ],
    "SR: كل حزمة ACK لحالها وتخزين للي خارج الترتيب.",
    "SR individually ACKs packets and buffers out-of-order ones.",
    1,
    0
  ],
  [
    3,
    "gbn",
    "In Selective Repeat, on timeout the sender:",
    [
      "Retransmits only the single unACKed packet",
      "Retransmits the whole window",
      "Stops sending",
      "Sends a NAK"
    ],
    "SR يعيد الحزمة الضايعة بس.",
    "SR retransmits only the timed-out packet.",
    1,
    0
  ],
  [
    3,
    "gbn",
    "Selective Repeat sender maintains:",
    [
      "(Conceptually) a timer for each unACKed packet",
      "One timer only",
      "No timers",
      "A timer per connection"
    ],
    "SR مؤقت لكل حزمة.",
    "SR keeps a timer per unACKed packet.",
    1,
    0
  ],
  [
    3,
    "gbn",
    "GBN with N = 4: pkt2 is lost; pkts 3, 4, 5 arrive. The receiver:",
    [
      "Discards them and re-sends ack1",
      "Buffers them and sends ack3, ack4, ack5",
      "Sends ack5",
      "Sends a NAK for 2"
    ],
    "GBN يرمي اللي خارج الترتيب ويكرر ack1.",
    "GBN discards out-of-order packets and re-ACKs 1.",
    0,
    0
  ],
  [
    3,
    "gbn",
    "Same loss with Selective Repeat (pkt2 lost, 3–5 arrive). The sender retransmits:",
    [
      "Only pkt2",
      "pkt2, 3, 4, 5",
      "Nothing",
      "pkt3 only"
    ],
    "SR يعيد pkt2 بس، والباقي مخزن عند المستقبل.",
    "SR resends only pkt2; 3–5 are buffered.",
    0,
    0
  ],
  [
    3,
    "gbn",
    "The Selective Repeat dilemma (seq #s 0–3, window 3) shows that:",
    [
      "The window must be ≤ half of the sequence number space",
      "Windows can be any size",
      "Sequence numbers are not needed",
      "Timers are useless"
    ],
    "المستقبل ما يفرق بين جديد ومكرر، فالنافذة لازم ≤ نص مدى الأرقام.",
    "The receiver can't tell new from duplicate; window must be ≤ half the seq space.",
    0,
    0
  ],
  [
    3,
    "gbn",
    "With k-bit sequence numbers, the sequence number space is:",
    [
      "2^k",
      "k",
      "2k",
      "k²"
    ],
    "k بت تعطي 2^k رقم.",
    "k bits give 2^k sequence numbers.",
    0,
    0
  ],
  [
    3,
    "gbn",
    "In Selective Repeat, when the missing pkt2 finally arrives (3, 4, 5 buffered), the receiver:",
    [
      "Delivers pkt2, 3, 4, 5 to the upper layer and sends ack2",
      "Delivers only pkt2",
      "Discards 3–5",
      "Sends ack5 only"
    ],
    "يسلّم 2 و3 و4 و5 بالترتيب ويرسل ack2.",
    "It delivers pkt2–5 in order and sends ack2.",
    0,
    0
  ],
  [
    3,
    "tcp",
    "TCP is point-to-point, meaning:",
    [
      "One sender, one receiver",
      "Many receivers",
      "Broadcast",
      "No receiver"
    ],
    "نقطة لنقطة: مرسل واحد ومستقبل واحد.",
    "Point-to-point: one sender, one receiver.",
    1,
    0
  ],
  [
    3,
    "tcp",
    "TCP provides a reliable, in-order:",
    [
      "Byte stream with no message boundaries",
      "Message stream with boundaries",
      "Datagram service",
      "Frame service"
    ],
    "TCP تيار بايتات بدون حدود رسائل.",
    "TCP is a reliable in-order byte stream, no message boundaries.",
    1,
    0
  ],
  [
    3,
    "tcp",
    "\"Full duplex\" in TCP means:",
    [
      "Bi-directional data flow in the same connection",
      "Data flows one way only",
      "Two connections are needed",
      "Half the data is lost"
    ],
    "ثنائي الاتجاه على نفس الاتصال.",
    "Full duplex: data flows both ways on one connection.",
    0,
    0
  ],
  [
    3,
    "tcp",
    "MSS stands for:",
    [
      "Maximum segment size",
      "Minimum sequence size",
      "Main socket server",
      "Multiple segment send"
    ],
    "MSS = أكبر حجم segment.",
    "MSS = maximum segment size.",
    1,
    0
  ],
  [
    3,
    "tcp",
    "A TCP sequence number is:",
    [
      "The byte-stream number of the first byte in the segment's data",
      "The segment count",
      "The ACK of the last byte",
      "The port number"
    ],
    "رقم التسلسل = رقم أول بايت في بيانات الـ segment.",
    "The sequence number is the byte-stream number of the segment's first data byte.",
    1,
    0
  ],
  [
    3,
    "tcp",
    "A TCP acknowledgement number is:",
    [
      "The seq # of the next byte expected from the other side",
      "The last byte received",
      "Always zero",
      "The window size"
    ],
    "رقم الـ ACK = البايت الجاي المتوقع.",
    "The ACK number is the next byte expected.",
    1,
    0
  ],
  [
    3,
    "tcp",
    "Host A sends a segment with Seq = 92 and 8 bytes of data. What ACK number does B send?",
    [
      "100",
      "92",
      "93",
      "8"
    ],
    "92 + 8 = 100: البايت الجاي المتوقع.",
    "92 + 8 = 100, the next expected byte.",
    1,
    0
  ],
  [
    3,
    "tcp",
    "Telnet: A sends Seq=42, ACK=79, data='C'. B echoes 'C' with:",
    [
      "Seq=79, ACK=43",
      "Seq=43, ACK=79",
      "Seq=42, ACK=80",
      "Seq=80, ACK=42"
    ],
    "B يرسل من 79، ويأكد 43 (42 + بايت واحد).",
    "B sends Seq=79 and ACK=43 (42 + 1 byte).",
    0,
    0
  ],
  [
    3,
    "tcp",
    "How does a TCP receiver handle out-of-order segments?",
    [
      "The TCP spec doesn't say; it's up to the implementor",
      "It must discard them",
      "It must buffer them",
      "It sends a NAK"
    ],
    "المواصفات ما تحدد، يرجع للمنفذ.",
    "The TCP spec doesn't say; it's up to the implementation.",
    0,
    0
  ],
  [
    3,
    "tcp",
    "Which TCP header field is used for flow control?",
    [
      "Receive window",
      "Checksum",
      "Urgent pointer",
      "Sequence number"
    ],
    "حقل receive window: كم بايت يقبل المستقبل.",
    "The receive window field gives the bytes the receiver will accept.",
    0,
    0
  ],
  [
    3,
    "tcp",
    "Which flags are used for connection management (setup/teardown)?",
    [
      "RST, SYN, FIN",
      "C, E",
      "A only",
      "U, P"
    ],
    "RST وSYN وFIN لإدارة الاتصال، وC وE للازدحام.",
    "RST, SYN, FIN manage connections; C, E signal congestion.",
    0,
    0
  ],
  [
    3,
    "tcp",
    "TCP ACKs are:",
    [
      "Cumulative",
      "Selective only",
      "Negative",
      "Not used"
    ],
    "TCP يستخدم ACKs تراكمية.",
    "TCP uses cumulative ACKs.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "The TCP timeout should be:",
    [
      "Longer than RTT",
      "Shorter than RTT",
      "Exactly RTT/2",
      "Zero"
    ],
    "الـ timeout لازم أطول من RTT.",
    "The timeout must be longer than the RTT.",
    1,
    0
  ],
  [
    3,
    "rtt",
    "A timeout that is too short causes:",
    [
      "Premature timeouts and unnecessary retransmissions",
      "Slow reaction to loss",
      "No retransmissions",
      "Infinite delay"
    ],
    "قصير = إعادات ما لها داعي.",
    "Too short: premature timeouts, unnecessary retransmissions.",
    1,
    0
  ],
  [
    3,
    "rtt",
    "SampleRTT measurements:",
    [
      "Ignore retransmissions",
      "Include retransmissions",
      "Are taken only once",
      "Are the same as TimeoutInterval"
    ],
    "SampleRTT يتجاهل الإعادات.",
    "SampleRTT ignores retransmissions.",
    1,
    0
  ],
  [
    3,
    "rtt",
    "EstimatedRTT = (1 − α)·EstimatedRTT + α·SampleRTT, with typical α =",
    [
      "0.125",
      "0.25",
      "0.5",
      "4"
    ],
    "α عادة 0.125.",
    "Typical α = 0.125.",
    1,
    0
  ],
  [
    3,
    "rtt",
    "DevRTT uses typical β =",
    [
      "0.25",
      "0.125",
      "0.5",
      "4"
    ],
    "β عادة 0.25.",
    "Typical β = 0.25.",
    1,
    0
  ],
  [
    3,
    "rtt",
    "TimeoutInterval =",
    [
      "EstimatedRTT + 4·DevRTT",
      "EstimatedRTT + DevRTT",
      "2·EstimatedRTT",
      "SampleRTT + 4"
    ],
    "Timeout = EstimatedRTT + 4×DevRTT.",
    "TimeoutInterval = EstimatedRTT + 4·DevRTT.",
    1,
    0
  ],
  [
    3,
    "rtt",
    "EstimatedRTT = 100 ms, SampleRTT = 180 ms, α = 0.125. New EstimatedRTT?",
    [
      "110 ms",
      "180 ms",
      "100 ms",
      "122.5 ms"
    ],
    "0.875×100 + 0.125×180 = 87.5 + 22.5 = 110 ms.",
    "0.875×100 + 0.125×180 = 110 ms.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "EstimatedRTT = 100 ms, DevRTT = 5 ms. TimeoutInterval?",
    [
      "120 ms",
      "105 ms",
      "400 ms",
      "125 ms"
    ],
    "100 + 4×5 = 120 ms.",
    "100 + 4×5 = 120 ms.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "EstimatedRTT is an example of:",
    [
      "Exponential weighted moving average (EWMA)",
      "A simple maximum",
      "A median",
      "A random choice"
    ],
    "EWMA: تأثير العينات القديمة يقل أُسّياً.",
    "It's an EWMA: past samples' influence decays exponentially.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "When a TCP timeout occurs, the sender:",
    [
      "Retransmits the segment that caused the timeout and restarts the timer",
      "Retransmits all segments",
      "Closes the connection",
      "Doubles the MSS"
    ],
    "عند timeout يعيد الـ segment اللي سببه ويشغّل المؤقت.",
    "On timeout: retransmit that segment and restart the timer.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "TCP fast retransmit is triggered by:",
    [
      "Three duplicate ACKs for the same data",
      "One NAK",
      "A single timeout",
      "A SYN"
    ],
    "3 ACKs مكررة = إعادة سريعة بدون انتظار timeout.",
    "Triple duplicate ACKs trigger fast retransmit.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "On arrival of an in-order segment when all prior data is ACKed, a TCP receiver:",
    [
      "Delays the ACK up to 500 ms waiting for the next segment",
      "Sends a duplicate ACK",
      "Sends a NAK",
      "Ignores it"
    ],
    "ACK مؤجل لين 500ms.",
    "Delayed ACK: wait up to 500 ms for the next segment.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "On arrival of an out-of-order segment (gap detected), a TCP receiver:",
    [
      "Immediately sends a duplicate ACK with the next expected byte",
      "Waits 500 ms",
      "Sends nothing",
      "Closes the connection"
    ],
    "فجوة = ACK مكرر فوراً.",
    "Gap detected → immediately send a duplicate ACK.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "Cumulative ACK covers for earlier lost ACK: ACK=100 is lost but ACK=120 arrives before timeout. The sender:",
    [
      "Does not retransmit (120 covers everything up to 119)",
      "Retransmits Seq=92",
      "Retransmits Seq=100",
      "Closes the connection"
    ],
    "ACK 120 تراكمي يغطي اللي قبله، فما يعيد شي.",
    "ACK 120 is cumulative, so nothing is retransmitted.",
    0,
    0
  ],
  [
    3,
    "rtt",
    "Premature timeout: A sends Seq=92 (8 B) and Seq=100 (20 B); ACKs are delayed and A resends Seq=92. B replies with:",
    [
      "A cumulative ACK for 120",
      "ACK 92",
      "ACK 100",
      "A NAK"
    ],
    "B استلم الاثنين، فيرد ACK تراكمي 120.",
    "B has both, so it sends a cumulative ACK for 120.",
    0,
    0
  ],
  [
    3,
    "flow",
    "TCP flow control prevents:",
    [
      "The sender from overflowing the receiver's buffer",
      "Network congestion",
      "Bit errors",
      "DNS failures"
    ],
    "التدفق يمنع المرسل من إغراق buffer المستقبل.",
    "Flow control prevents overflowing the receiver's buffer.",
    0,
    0
  ],
  [
    3,
    "flow",
    "The TCP receiver advertises free buffer space in the:",
    [
      "rwnd field",
      "cwnd field",
      "ssthresh field",
      "checksum field"
    ],
    "المستقبل يعلن المساحة الفاضية في rwnd.",
    "The receiver advertises free space in rwnd.",
    0,
    0
  ],
  [
    3,
    "flow",
    "The typical default RcvBuffer size is:",
    [
      "4096 bytes",
      "64 KB",
      "1 MSS",
      "256Kb"
    ],
    "الافتراضي عادة 4096 بايت.",
    "Typical default RcvBuffer is 4096 bytes.",
    0,
    0
  ],
  [
    3,
    "flow",
    "The sender limits unACKed (in-flight) data to:",
    [
      "The received rwnd value",
      "ssthresh",
      "1 MSS always",
      "The RTT"
    ],
    "المرسل يحد البيانات بقيمة rwnd.",
    "The sender limits in-flight data to rwnd.",
    0,
    0
  ],
  [
    3,
    "flow",
    "Flow control is needed when:",
    [
      "The network delivers data faster than the application removes it from socket buffers",
      "Routers are congested",
      "Bits are flipped",
      "Packets are reordered"
    ],
    "لما البيانات توصل أسرع من ما التطبيق يسحبها.",
    "When data arrives faster than the app reads it from the buffer.",
    0,
    0
  ],
  [
    3,
    "conn",
    "Before exchanging data, TCP sender and receiver agree on connection parameters such as:",
    [
      "Starting sequence numbers",
      "The MAC address",
      "The DNS TTL",
      "The HTTP version"
    ],
    "يتفقون على أرقام التسلسل الابتدائية.",
    "They agree on parameters like starting sequence numbers.",
    0,
    0
  ],
  [
    3,
    "conn",
    "A 2-way handshake can fail because of:",
    [
      "Variable delays, retransmissions, reordering — causing half-open connections and duplicate data",
      "Too much encryption",
      "Too few routers",
      "Fixed delays"
    ],
    "الثنائية تفشل بسبب التأخير والإعادات والترتيب، فيصير اتصال نص مفتوح أو بيانات مكررة.",
    "2-way fails under variable delays/retransmission/reordering: half-open connections, duplicate data.",
    1,
    0
  ],
  [
    3,
    "conn",
    "In the TCP 3-way handshake, the first segment from the client has:",
    [
      "SYNbit = 1, Seq = x",
      "FIN = 1",
      "ACKbit = 1 only",
      "SYNbit = 1, ACKnum = y+1"
    ],
    "أول segment: SYN = 1 مع Seq = x.",
    "The first segment: SYNbit=1, Seq=x.",
    1,
    0
  ],
  [
    3,
    "conn",
    "The server's reply in the 3-way handshake (SYNACK) has:",
    [
      "SYNbit=1, Seq=y, ACKbit=1, ACKnum=x+1",
      "FIN=1, Seq=x",
      "ACKnum=y+1",
      "Seq=x+1 only"
    ],
    "الخادم: SYN مع Seq=y و ACK مع ACKnum=x+1.",
    "SYNACK: SYNbit=1, Seq=y, ACKbit=1, ACKnum=x+1.",
    1,
    0
  ],
  [
    3,
    "conn",
    "The third segment of the handshake (client) has:",
    [
      "ACKbit=1, ACKnum=y+1 (may contain data)",
      "SYNbit=1, Seq=x",
      "FIN=1",
      "No ACK"
    ],
    "الثالث: ACK بـ ACKnum=y+1 وممكن معه بيانات.",
    "Third: ACKbit=1, ACKnum=y+1, may carry data.",
    1,
    0
  ],
  [
    3,
    "conn",
    "After serverSocket.listen(1), the server is in state:",
    [
      "LISTEN",
      "ESTAB",
      "SYNSENT",
      "CLOSED"
    ],
    "بعد listen الخادم في حالة LISTEN.",
    "After listen(), the server is in LISTEN.",
    0,
    0
  ],
  [
    3,
    "conn",
    "To close a TCP connection, each side sends a segment with:",
    [
      "FIN bit = 1",
      "SYN bit = 1",
      "RST only",
      "Seq = 0"
    ],
    "الإغلاق: FIN = 1، والثاني يرد ACK.",
    "Each side sends FIN=1 and the other responds with ACK.",
    1,
    0
  ],
  [
    3,
    "conn",
    "On receiving a FIN, the receiver's ACK:",
    [
      "Can be combined with its own FIN",
      "Must be delayed 500 ms",
      "Is never sent",
      "Must be a NAK"
    ],
    "الـ ACK ممكن يندمج مع الـ FIN حقه.",
    "The ACK can be combined with its own FIN.",
    0,
    0
  ],
  [
    3,
    "conn",
    "How many segments does the TCP connection setup use?",
    [
      "Three",
      "Two",
      "Four",
      "One"
    ],
    "المصافحة الثلاثية: 3 segments.",
    "The 3-way handshake uses three segments.",
    0,
    0
  ],
  [
    3,
    "cong",
    "Congestion is informally:",
    [
      "Too many sources sending too much data too fast for the network to handle",
      "One sender too fast for one receiver",
      "Bit errors in a link",
      "A slow DNS server"
    ],
    "الازدحام: مصادر كثيرة ترسل كثير بسرعة أكبر من قدرة الشبكة.",
    "Congestion: too many sources sending too much too fast for the network.",
    0,
    0
  ],
  [
    3,
    "cong",
    "Manifestations of congestion include:",
    [
      "Long delays and packet loss",
      "Bit flips only",
      "Shorter RTTs",
      "More bandwidth"
    ],
    "علامات الازدحام: تأخير طويل وفقد حزم.",
    "Congestion shows as long delays (queueing) and packet loss (overflow).",
    0,
    0
  ],
  [
    3,
    "cong",
    "Flow control differs from congestion control because flow control is about:",
    [
      "One sender too fast for one receiver",
      "The whole network",
      "Routing",
      "DNS"
    ],
    "التدفق: مرسل واحد أسرع من مستقبل واحد.",
    "Flow control: one sender too fast for one receiver.",
    0,
    0
  ],
  [
    3,
    "cong",
    "In scenario 1 (infinite buffers), maximum per-connection throughput is:",
    [
      "R/2",
      "R",
      "2R",
      "R/4"
    ],
    "اتصالين على رابط R: كل واحد R/2 بالكثير.",
    "Two flows over capacity R: at most R/2 each.",
    0,
    0
  ],
  [
    3,
    "cong",
    "A cost of congestion is:",
    [
      "Unneeded retransmissions that waste link capacity",
      "Lower delays",
      "More free buffers",
      "Faster DNS"
    ],
    "تكلفة: إعادات ما لها داعي تقلل الإنتاجية.",
    "Unneeded retransmissions carry duplicate copies and lower max throughput.",
    0,
    0
  ],
  [
    3,
    "cong",
    "When a packet is dropped in a multi-hop path (scenario 3):",
    [
      "Upstream transmission capacity and buffering used for it were wasted",
      "Nothing is lost",
      "The packet is delivered anyway",
      "Throughput increases"
    ],
    "الحزمة اللي تنرمى، كل السعة والتخزين قبلها ضاعت.",
    "Upstream capacity and buffering used for that packet are wasted.",
    0,
    0
  ],
  [
    3,
    "cong",
    "Classic TCP uses which congestion control approach?",
    [
      "End-end: congestion inferred from observed loss and delay",
      "Network-assisted only",
      "No congestion control",
      "Circuit reservation"
    ],
    "TCP: من الطرف للطرف، يستنتج من الفقد والتأخير.",
    "TCP uses end-end congestion control, inferring from loss/delay.",
    0,
    0
  ],
  [
    3,
    "cong",
    "In network-assisted congestion control:",
    [
      "Routers provide direct feedback to hosts",
      "Hosts infer congestion from loss only",
      "There is no feedback",
      "Only DNS helps"
    ],
    "بمساعدة الشبكة: الراوترات ترسل إشارة مباشرة.",
    "Routers give direct feedback to sending/receiving hosts.",
    0,
    0
  ],
  [
    3,
    "cong",
    "Which are examples of network-assisted congestion control?",
    [
      "TCP ECN, ATM, DECbit",
      "TCP Reno only",
      "UDP, DNS",
      "HTTP/2"
    ],
    "أمثلة: TCP ECN وATM وDECbit.",
    "Examples: TCP ECN, ATM, DECbit.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "AIMD stands for:",
    [
      "Additive Increase, Multiplicative Decrease",
      "Automatic Increase, Manual Decrease",
      "Additive Increase, Minimal Delay",
      "Average Increase, Maximum Decrease"
    ],
    "AIMD = زيادة جمعية ونقص ضربي.",
    "AIMD = Additive Increase, Multiplicative Decrease.",
    1,
    0
  ],
  [
    3,
    "tcpcc",
    "In additive increase, the sending rate grows by:",
    [
      "1 MSS every RTT",
      "Double every RTT",
      "1 byte per second",
      "Half every RTT"
    ],
    "الزيادة الجمعية: +1 MSS كل RTT.",
    "Additive increase: +1 MSS every RTT.",
    1,
    0
  ],
  [
    3,
    "tcpcc",
    "On loss detected by triple duplicate ACK (TCP Reno), the rate is:",
    [
      "Cut in half",
      "Cut to 1 MSS",
      "Doubled",
      "Unchanged"
    ],
    "Reno: 3 ACKs مكررة → نص.",
    "Reno: triple duplicate ACK → cut in half.",
    1,
    0
  ],
  [
    3,
    "tcpcc",
    "On loss detected by timeout (TCP Tahoe), cwnd is:",
    [
      "Cut to 1 MSS",
      "Cut in half",
      "Doubled",
      "Unchanged"
    ],
    "timeout → 1 MSS.",
    "Timeout (Tahoe) → cut to 1 MSS.",
    1,
    0
  ],
  [
    3,
    "tcpcc",
    "AIMD produces which pattern of sending rate?",
    [
      "Sawtooth",
      "Flat line",
      "Exponential growth forever",
      "Random"
    ],
    "AIMD يطلع شكل المنشار (sawtooth).",
    "AIMD produces a sawtooth: probing for bandwidth.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "In slow start, cwnd initially equals:",
    [
      "1 MSS",
      "ssthresh",
      "rwnd",
      "64 KB"
    ],
    "البداية: cwnd = 1 MSS.",
    "Slow start begins with cwnd = 1 MSS.",
    1,
    0
  ],
  [
    3,
    "tcpcc",
    "During slow start, cwnd:",
    [
      "Doubles every RTT (exponential)",
      "Increases by 1 MSS every RTT",
      "Halves every RTT",
      "Stays constant"
    ],
    "في البداية البطيئة cwnd تتضاعف كل RTT.",
    "In slow start cwnd doubles every RTT.",
    1,
    0
  ],
  [
    3,
    "tcpcc",
    "Slow start doubling is implemented by:",
    [
      "Incrementing cwnd for every ACK received",
      "Doubling the MSS",
      "Waiting for timeouts",
      "Halving ssthresh"
    ],
    "زيادة cwnd مع كل ACK تخليها تتضاعف كل RTT.",
    "Incrementing cwnd per ACK doubles it each RTT.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "Slow start switches to linear increase when:",
    [
      "cwnd reaches ssthresh (1/2 of cwnd before the loss)",
      "cwnd reaches rwnd",
      "A SYN arrives",
      "After exactly 10 RTTs"
    ],
    "التحول لما cwnd توصل ssthresh (نص قيمتها قبل الفقد).",
    "Switch to linear when cwnd reaches ssthresh.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "On a loss event, ssthresh is set to:",
    [
      "1/2 of cwnd just before the loss",
      "1 MSS",
      "Double cwnd",
      "rwnd"
    ],
    "ssthresh = نص cwnd قبل الفقد.",
    "ssthresh = 1/2 of cwnd just before the loss.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "cwnd = 16 MSS when a timeout occurs. New ssthresh and cwnd?",
    [
      "ssthresh = 8, cwnd = 1",
      "ssthresh = 16, cwnd = 8",
      "ssthresh = 8, cwnd = 8",
      "ssthresh = 1, cwnd = 16"
    ],
    "timeout: ssthresh = 16/2 = 8 و cwnd = 1 MSS.",
    "Timeout: ssthresh = 16/2 = 8, cwnd = 1 MSS.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "cwnd = 16 MSS when triple duplicate ACKs arrive (Reno). New cwnd is about:",
    [
      "8 MSS (half)",
      "1 MSS",
      "16 MSS",
      "32 MSS"
    ],
    "Reno: النص تقريباً (8 MSS، ومع fast recovery 8+3).",
    "Reno halves cwnd to about 8 MSS (8+3 during fast recovery).",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "TCP sending rate is roughly:",
    [
      "cwnd / RTT bytes/sec",
      "RTT / cwnd",
      "cwnd × RTT",
      "MSS / RTT always"
    ],
    "السرعة ≈ cwnd ÷ RTT.",
    "TCP rate ≈ cwnd/RTT bytes/sec.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "The TCP sender limits: LastByteSent − LastByteAcked ≤",
    [
      "cwnd",
      "ssthresh",
      "MSS",
      "RTT"
    ],
    "البيانات اللي ما تأكدت ≤ cwnd.",
    "LastByteSent − LastByteAcked ≤ cwnd.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "TCP CUBIC increases W as a function of:",
    [
      "The cube of the distance between current time and K",
      "The square of RTT",
      "Linear time only",
      "The number of ACKs squared"
    ],
    "CUBIC: دالة تكعيبية للمسافة بين الوقت الحالي وK.",
    "CUBIC grows W with the cube of the distance between now and K.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "In CUBIC, after cutting the window in half, the window initially ramps toward W_max:",
    [
      "Faster, then approaches W_max more slowly",
      "Slower, then faster",
      "At a constant rate",
      "It never returns to W_max"
    ],
    "CUBIC يرجع بسرعة وبعدين يهدّي قرب W_max.",
    "CUBIC ramps quickly toward W_max, then approaches it slowly.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "TCP CUBIC is:",
    [
      "Default in Linux, most popular for popular Web servers",
      "Only used in Windows XP",
      "A UDP protocol",
      "A DNS feature"
    ],
    "CUBIC الافتراضي في Linux.",
    "CUBIC is the Linux default and most popular for Web servers.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "The goal at the bottleneck link is to keep the end-end pipe:",
    [
      "Just full, but not fuller",
      "Always empty",
      "Overflowing",
      "Half full"
    ],
    "الهدف: الأنبوب مليان بالضبط بدون ما يفيض.",
    "Keep the pipe just full, but not fuller.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "Delay-based congestion control (e.g., BBR):",
    [
      "Controls congestion without inducing/forcing loss",
      "Needs packet loss to work",
      "Is used only by UDP",
      "Uses NAKs"
    ],
    "المبني على التأخير يتحكم بدون ما يسبب فقد، ومثاله BBR في Google.",
    "Delay-based control avoids forcing loss (e.g., BBR on Google's backbone).",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "In delay-based control, uncongested throughput is:",
    [
      "cwnd / RTT_min",
      "RTT_min / cwnd",
      "cwnd × RTT",
      "MSS"
    ],
    "الإنتاجية بدون ازدحام = cwnd ÷ RTT_min.",
    "Uncongested throughput = cwnd/RTT_min.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "ECN marks congestion using:",
    [
      "Two bits in the IP header (ToS field), and the ECE bit on the ACK",
      "The TCP checksum",
      "DNS TTL",
      "The HTTP status code"
    ],
    "ECN: بتين في ترويسة IP، والوجهة تحط ECE في الـ ACK.",
    "ECN: two ToS bits in IP marked by routers; destination sets ECE on the ACK.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "TCP fairness goal: K sessions sharing bottleneck R each get:",
    [
      "R/K",
      "R",
      "K/R",
      "R×K"
    ],
    "العدالة: كل اتصال R/K.",
    "Each of K sessions should get R/K.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "A link of rate R has 9 existing connections. A new app opens 11 TCP connections. It gets about:",
    [
      "R/2",
      "R/10",
      "R/20",
      "R"
    ],
    "المجموع 20 اتصال، والتطبيق عنده 11 ≈ 11/20 ≈ R/2.",
    "20 connections total; 11 of them ≈ R/2.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "Why do multimedia apps often use UDP instead of TCP?",
    [
      "They don't want their rate throttled by congestion control",
      "UDP is more reliable",
      "UDP has flow control",
      "TCP doesn't support audio"
    ],
    "ما تبي أحد يهدّي سرعتها، وتتحمل الفقد.",
    "They don't want congestion control throttling their rate.",
    0,
    0
  ],
  [
    3,
    "tcpcc",
    "There is no \"Internet police\" means:",
    [
      "Nothing forces apps to use congestion control",
      "Routers block all UDP",
      "TCP is mandatory",
      "ICANN polices traffic"
    ],
    "ما فيه أحد يجبر التطبيقات تستخدم تحكم ازدحام.",
    "Nothing polices whether apps use congestion control.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "The Internet contains billions of connected computing devices.",
    [
      "True",
      "False"
    ],
    "صح: الإنترنت فيه مليارات الأجهزة المتصلة (hosts).",
    "True: billions of connected computing devices (hosts).",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Communication links include fiber, copper, radio, and satellite, and are used to transmit data.",
    [
      "True",
      "False"
    ],
    "صح: هذي أنواع روابط الاتصال، ومعدل إرسالها اسمه bandwidth.",
    "True: these are communication links; their rate is the bandwidth.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Protocols define the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt.",
    [
      "True",
      "False"
    ],
    "صح: هذا تعريف البروتوكول حرفياً من السلايد.",
    "True: this is the slide's definition of a protocol.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Cable-based networks use telephone lines to access the Internet.",
    [
      "False",
      "True"
    ],
    "خطأ: اللي يستخدم خط الهاتف هو DSL. الكيبل يستخدم شبكة كيبل/ألياف (HFC) مع FDM.",
    "False: DSL uses telephone lines; cable uses HFC (hybrid fiber coax) with FDM.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Forwarding is a global action that determines source-destination paths taken by packets.",
    [
      "False",
      "True"
    ],
    "خطأ: هذا تعريف الـ routing. الـ forwarding فعل محلي ينقل الحزمة من رابط الدخول للخروج داخل الراوتر.",
    "False: that's routing. Forwarding is local: input link → output link.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Queuing happens when the arrival rate to a link is slower than the transmission rate of that link for some period of time.",
    [
      "False",
      "True"
    ],
    "خطأ: الطابور يصير لما معدل الوصول أكبر (أسرع) من معدل الإرسال.",
    "False: queuing happens when arrival rate exceeds the transmission rate.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "What is the transmission delay for a 15 Kbits packet pushed into a 100 Mbps link?",
    [
      "0.15 msec",
      "0.015 msec",
      "1.5 msec",
      "None of the above"
    ],
    "L/R = 15,000 ÷ 100×10^6 = 0.00015 ثانية = 0.15 ms.",
    "L/R = 15,000 / 10^8 = 0.00015 s = 0.15 ms.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "What is the transmission delay for a 20 Kbits packet pushed into a 100 Mbps link?",
    [
      "0.2 ms",
      "20 ms",
      "2 ms",
      "0.02 ms"
    ],
    "L/R = 20,000 ÷ 10^8 = 0.0002 ثانية = 0.2 ms.",
    "L/R = 20,000 / 10^8 = 0.0002 s = 0.2 ms.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Which of the following is considered a network edge (end system)?",
    [
      "Smartphone",
      "Router",
      "Switch",
      "Wireless router"
    ],
    "أطراف الشبكة = الأجهزة الطرفية (hosts) مثل الجوال. الراوتر والـ switch أجهزة تحويل في لب الشبكة.",
    "Edge = hosts like a smartphone; routers and switches are packet switches.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Select a radio link from the following.",
    [
      "All the above",
      "Wireless LAN",
      "Bluetooth",
      "Microwave"
    ],
    "كلها روابط راديو: WiFi وBluetooth والمايكروويف الأرضي (ومعها 4G/5G والأقمار).",
    "All are radio links: WiFi, Bluetooth, terrestrial microwave.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Which factors determine the efficiency of data communication?",
    [
      "Delivery, accuracy, timeliness, and jitter",
      "Speed, color, size, and price",
      "Routing, forwarding, framing, and coding",
      "Bandwidth only"
    ],
    "كفاءة الاتصال: التوصيل للشخص الصح، الدقة، الوصول في الوقت، والتعامل مع الـ jitter.",
    "Efficiency factors: delivery, accuracy, timeliness, jitter.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Variation in the arrival time of data packets is called:",
    [
      "Jitter",
      "Throughput",
      "Bandwidth",
      "Propagation"
    ],
    "الـ jitter هو اختلاف أوقات وصول الحزم، ومشكلة للتطبيقات الحساسة للوقت.",
    "Jitter is the variation in packet arrival time.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Communication at a distance (e.g. telephony, telegraph, television) is called:",
    [
      "Telecommunication",
      "Data communication",
      "Multiplexing",
      "Routing"
    ],
    "Telecommunication يعني الاتصال عن بُعد. أما data communication فهو تبادل البيانات بين جهازين عبر وسط نقل.",
    "Telecommunication = communication at a distance.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "In which data flow mode can both devices transmit, but not at the same time?",
    [
      "Half-duplex",
      "Simplex",
      "Full-duplex",
      "Broadcast only"
    ],
    "Half-duplex: الاثنين يرسلون بس مو بنفس الوقت. Simplex اتجاه واحد، وFull-duplex الاثنين بنفس الوقت.",
    "Half-duplex: both can send, not simultaneously. Simplex is one-way; full-duplex is simultaneous.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Data flow in one direction only (e.g., mainframe to monitor) is:",
    [
      "Simplex",
      "Half-duplex",
      "Full-duplex",
      "Multipoint"
    ],
    "Simplex: اتجاه واحد بس.",
    "Simplex is one-way only.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Which are the two types of links (physical structure)?",
    [
      "Point-to-point and multipoint",
      "Mesh and star",
      "LAN and WAN",
      "Simplex and duplex"
    ],
    "أنواع الروابط: نقطة لنقطة، ومتعدد النقاط. أما Mesh وStar وBus وRing فهي topologies.",
    "Link types: point-to-point and multipoint; mesh/star/bus/ring are topologies.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Which of the following is NOT a network topology?",
    [
      "Hub-and-port",
      "Mesh",
      "Star",
      "Bus"
    ],
    "الـ topologies: Mesh وStar وBus وRing.",
    "Topologies: mesh, star, bus, ring.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Which network type covers about 1–10 m?",
    [
      "Personal Area Network (PAN)",
      "Local Area Network (LAN)",
      "Metropolitan Area Network (MAN)",
      "Wide Area Network (WAN)"
    ],
    "PAN من 1 لـ 10 م، LAN من 10 م لـ 1 كم، MAN مدينة، WAN مدن أو دولة، GAN عبر الدول.",
    "PAN 1–10 m; LAN 10 m–1 km; MAN city; WAN cities/country; GAN across countries.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "A network covering a city is a:",
    [
      "MAN",
      "LAN",
      "PAN",
      "GAN"
    ],
    "MAN تغطي مدينة.",
    "A MAN covers a city.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Which factors distinguish one network type from another?",
    [
      "Size, geographical coverage, and ownership",
      "Color, speed, and price",
      "Protocols only",
      "Number of users only"
    ],
    "نفرّق بين الشبكات بالحجم والتغطية الجغرافية والملكية.",
    "Size, geographical coverage and ownership.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "A LAN is usually:",
    [
      "Privately owned and limited to a building or campus",
      "Run by communication companies and leased",
      "Covering a whole country",
      "Without addresses"
    ],
    "الـ LAN غالباً ملك خاص ومحدودة بمبنى أو حرم. الـ WAN تديرها شركات اتصالات وتنأجر.",
    "LANs are usually private and limited in size; WANs are run by carriers and leased.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "A WAN is usually:",
    [
      "Created and run by communication companies and leased by the organization that uses it",
      "Privately owned inside one office",
      "Limited to 10 m",
      "A personal network"
    ],
    "الـ WAN تغطي مدينة أو دولة أو العالم، وتديرها شركات اتصالات.",
    "WANs are run by communication companies and leased.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "In the Internet stack, which layer breaks outgoing data into frames and reassembles received frames?",
    [
      "Link layer",
      "Network layer",
      "Transport layer",
      "Application layer"
    ],
    "طبقة الربط تقسم البيانات frames وتجمعها، وتنقلها للجهاز المجاور.",
    "The link layer creates and reassembles frames.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Which layer defines logical addressing and selects the optimum path?",
    [
      "Network layer",
      "Link layer",
      "Physical layer",
      "Session layer"
    ],
    "طبقة الشبكة: العنونة المنطقية واختيار أفضل مسار.",
    "Network layer: logical addressing and path selection.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "The first principle of protocol layering states that in bidirectional communication:",
    [
      "Each layer performs two opposite tasks, one in each direction (e.g., encrypt and decrypt)",
      "Each layer must be identical in speed",
      "Only the top layer communicates",
      "Layers can skip each other"
    ],
    "المبدأ الأول: كل طبقة تسوي مهمتين عكسيتين، وحدة لكل اتجاه، مثل التشفير وفك التشفير.",
    "Principle 1: each layer does two opposite tasks (e.g., encrypt/decrypt).",
    0,
    0
  ],
  [
    90,
    "imp1",
    "The second principle of protocol layering states that:",
    [
      "Objects under each layer at both sites should be identical",
      "Each layer must use TCP",
      "Only five layers are allowed",
      "Headers are removed at the sender"
    ],
    "المبدأ الثاني: الكائنات تحت كل طبقة في الطرفين لازم تكون متطابقة.",
    "Principle 2: objects under each layer at both sites are identical.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "An advantage of protocol layering is that it:",
    [
      "Divides a complex task into smaller, simpler tasks and separates services from implementation",
      "Removes the need for protocols",
      "Makes all layers the same",
      "Prevents encapsulation"
    ],
    "مزايا الطبقات: تقسيم المهمة المعقدة لمهام أبسط، وفصل الخدمة عن طريقة تنفيذها.",
    "Layering divides complex tasks and separates services from implementation.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Who created the OSI reference model?",
    [
      "ISO (International Organization for Standardization)",
      "IETF",
      "ICANN",
      "IEEE"
    ],
    "منظمة ISO هي اللي سوّت نموذج OSI.",
    "ISO created the OSI model.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "In the OSI model, which layers are the upper layers focused on application services?",
    [
      "Application, presentation, session (7, 6, 5)",
      "Transport, network, data link (4, 3, 2)",
      "Physical and data link",
      "Network and transport"
    ],
    "العليا 7 و6 و5 للتطبيقات، والسفلى 4 و3 و2 و1 تدير تدفق البيانات.",
    "Upper layers 7–5 serve applications; lower layers 4–1 manage data flow.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Which is a benefit of the OSI model?",
    [
      "Makes troubleshooting easier",
      "Increases bandwidth",
      "Removes the need for routers",
      "Encrypts all traffic"
    ],
    "فوايده: يوضح كيف تشتغل الشبكات، ويسهل حل المشاكل، ويعطي مصطلحات مشتركة، ويساعد تفهم التقنيات الجديدة ومنتجات الموردين.",
    "Benefits include easier troubleshooting and common terms.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Increasing the bandwidth in hertz means:",
    [
      "An increase in bandwidth in bits per second",
      "A decrease in bps",
      "No change in bps",
      "More jitter"
    ],
    "كل ما زاد الـ bandwidth بالهيرتز زاد بالـ bps.",
    "More bandwidth in Hz means more bandwidth in bps.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Throughput is:",
    [
      "A measure of how fast we can actually send data through a network",
      "The capacity of the link in hertz",
      "Variation in arrival time",
      "Time to process a message"
    ],
    "الإنتاجية = كم نقدر فعلياً نرسل، والـ bandwidth = السعة.",
    "Throughput = how fast data actually goes through.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Latency (delay) consists of:",
    [
      "Propagation, transmission, queuing, and processing time",
      "Bandwidth and jitter only",
      "Only propagation time",
      "Encoding and decoding"
    ],
    "التأخير = انتشار + إرسال + طابور + معالجة.",
    "Latency = propagation + transmission + queuing + processing.",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Transmission time is computed as:",
    [
      "Message size / bandwidth",
      "Distance / propagation speed",
      "Bandwidth / message size",
      "Propagation speed × period"
    ],
    "وقت الإرسال = حجم الرسالة ÷ الـ bandwidth (يعني L/R).",
    "Transmission time = message size / bandwidth (L/R).",
    0,
    0
  ],
  [
    90,
    "imp1",
    "Wavelength equals:",
    [
      "Propagation speed × period",
      "Bandwidth × size",
      "Size / bandwidth",
      "Frequency × period"
    ],
    "طول الموجة = سرعة الانتشار × الزمن الدوري.",
    "Wavelength = propagation speed × period.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "A process sends and receives messages to and from its socket.",
    [
      "True",
      "False"
    ],
    "صح: الـ socket هو الباب اللي العملية ترسل وتستقبل منه.",
    "True: a process sends/receives through its socket.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "The application-layer FTP protocol is used to display web objects.",
    [
      "False",
      "True"
    ],
    "خطأ: اللي يعرض كائنات الويب هو HTTP. وFTP لنقل الملفات.",
    "False: HTTP displays web objects; FTP transfers files.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Persistent HTTP uses a single TCP connection to send multiple objects between a client and a server, rather than opening a new TCP connection for each object.",
    [
      "True",
      "False"
    ],
    "صح: هذا تعريف الدائم.",
    "True: that's persistent HTTP.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "When the iterated query approach is used in DNS name resolution, the root DNS server contacts all the other DNS servers in the hierarchy.",
    [
      "False",
      "True"
    ],
    "خطأ: في التكراري كل خادم يرد «اسأل هذا»، والخادم المحلي هو اللي يسأل الكل. اللي يحط الحمل على الخادم هو العودي.",
    "False: in iterated queries each server replies with the next server to ask.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Authoritative DNS servers are responsible for the \".com, .net, .org, .edu\" domains.",
    [
      "False",
      "True"
    ],
    "خطأ: هذي خوادم TLD. الـ authoritative خادم المؤسسة نفسها.",
    "False: those are TLD servers; authoritative servers belong to the organization.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Which of the following features describes servers?",
    [
      "Servers are often used in data centers",
      "Servers do not communicate directly with each other",
      "Servers have dynamic IP addresses",
      "None of the above"
    ],
    "الخادم شغّال دايماً، عنوانه ثابت، وغالباً في مراكز البيانات. اللي ما يكلمون بعض مباشرة هم العملاء، واللي عناوينهم متغيرة هم العملاء.",
    "Servers are often in data centers; clients have dynamic IPs and don't talk to each other.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Which HTTP request method is used to upload a new object (file) to the server?",
    [
      "PUT method",
      "POST method",
      "GET method",
      "HEAD method"
    ],
    "PUT يرفع ملف جديد ويستبدل الموجود على نفس الـ URL بالكامل.",
    "PUT uploads a new object, replacing the file at the URL.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Which HTTP request method is used to send (form) data to the server?",
    [
      "POST method",
      "GET method",
      "HEAD method",
      "PUT method"
    ],
    "POST يرسل مدخلات المستخدم في جسم الرسالة.",
    "POST sends user input in the entity body.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Select the HTTP response status code that indicates the request succeeded.",
    [
      "200",
      "301",
      "400",
      "404"
    ],
    "200 OK: نجح الطلب.",
    "200 OK = success.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Select the HTTP response status code that indicates the requested document was not found on the server.",
    [
      "404",
      "200",
      "301",
      "400"
    ],
    "404 Not Found.",
    "404 = Not Found.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Which application-layer protocol is used to transfer an e-mail message from client to server?",
    [
      "SMTP",
      "IMAP",
      "HTTP",
      "FTP"
    ],
    "SMTP يدفع الرسالة من العميل للخادم، وIMAP للاسترجاع.",
    "SMTP pushes mail to the server; IMAP retrieves it.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Which of these is considered a DNS service?",
    [
      "Host to IP address translation",
      "Audio and video streaming",
      "Email delivery",
      "None of the above"
    ],
    "خدمات DNS: تحويل الاسم لـ IP، الأسماء المستعارة، أسماء البريد المستعارة، وتوزيع الحمل.",
    "DNS services: hostname-to-IP translation, aliasing, load distribution.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "FTP clients contact the server for control on port ___ and transfer files on port ___.",
    [
      "21; 20",
      "80; 25",
      "20; 21",
      "25; 80"
    ],
    "FTP: التحكم على 21، ونقل الملفات باتصال TCP جديد على 20.",
    "FTP: control on port 21, data on port 20.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "FTP is considered \"out-of-band\" because:",
    [
      "Control and data are sent on separate connections",
      "It uses UDP",
      "It has no control messages",
      "It runs on port 80"
    ],
    "لأن التحكم والبيانات على اتصالين منفصلين، عكس HTTP.",
    "Control and data flow on separate connections.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Unlike HTTP, FTP:",
    [
      "Maintains user state (current directory, authorization)",
      "Is stateless",
      "Uses port 80",
      "Has no authorization"
    ],
    "FTP يحفظ حالة المستخدم، وHTTP عديم الحالة.",
    "FTP keeps user state; HTTP is stateless.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "SMTP uses which type of connection?",
    [
      "Persistent TCP connections on port 25",
      "Non-persistent UDP",
      "UDP on port 53",
      "TCP on port 21"
    ],
    "SMTP يستخدم اتصال TCP دائم على منفذ 25.",
    "SMTP uses persistent TCP connections on port 25.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "A Web cache is also called a:",
    [
      "Proxy server",
      "Tracker",
      "Root server",
      "Socket"
    ],
    "الكاش اسمه proxy server، ويخدم الطلبات بدل الخادم الأصلي.",
    "A web cache is a proxy server.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "The client process is the process that:",
    [
      "Initiates communication",
      "Waits to be contacted",
      "Has no IP",
      "Runs only on servers"
    ],
    "العميل يبدأ الاتصال، والخادم ينتظر.",
    "The client initiates; the server waits.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Video streaming challenges include:",
    [
      "Scale and heterogeneity of users",
      "Lack of protocols",
      "No need for bandwidth",
      "Fixed delays"
    ],
    "تحديات البث: الوصول لمليار مستخدم (scale)، واختلاف قدرات المستخدمين (heterogeneity).",
    "Streaming challenges: scale and heterogeneity.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Because network delays are variable (jitter), streaming stored video needs:",
    [
      "A client-side buffer to keep continuous playout",
      "No buffer",
      "A bigger monitor",
      "Circuit switching"
    ],
    "عشان التشغيل يبقى متواصل نحتاج buffer عند العميل.",
    "A client-side buffer matches the continuous playout constraint.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "Content Distribution Networks (CDNs):",
    [
      "Store/serve multiple copies of videos at geographically distributed sites",
      "Keep one copy on one server",
      "Replace DNS",
      "Use only P2P"
    ],
    "الـ CDN تخزن نسخ كثيرة من الفيديو في أماكن موزعة.",
    "CDNs store multiple copies at distributed sites.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "The CDN strategy that pushes CDN servers deep into many access networks, close to users (e.g., Akamai), is:",
    [
      "Enter deep",
      "Bring home",
      "Tit-for-tat",
      "Rarest first"
    ],
    "Enter deep: سيرفرات كثيرة قريبة من المستخدمين (Akamai). Bring home: عدد قليل من العناقيد الكبيرة قرب شبكات الوصول.",
    "Enter deep pushes servers into access networks; bring home uses fewer large clusters.",
    0,
    0
  ],
  [
    91,
    "imp2",
    "In Netflix streaming, the service provider returns a ___ that the client uses to retrieve content at the highest supportable rate.",
    [
      "Manifest",
      "Cookie",
      "Tracker list",
      "DNS record"
    ],
    "يرجع manifest، والعميل يختار السرعة أو النسخة الأنسب.",
    "A manifest lets the client pick the rate/copy.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "UDP demultiplexing uses the 4-tuple: source and destination IP and source and destination port numbers.",
    [
      "False",
      "True"
    ],
    "خطأ: UDP يستخدم منفذ الوجهة بس. الـ 4-tuple لـ TCP.",
    "False: UDP uses only the destination port; TCP uses the 4-tuple.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Network congestion indicates that many sources are sending too much data too fast for the network to handle.",
    [
      "True",
      "False"
    ],
    "صح: هذا تعريف الازدحام.",
    "True: that's congestion.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "In AIMD, senders increase their sending rate by 1/2 MSS every RTT until loss is detected.",
    [
      "False",
      "True"
    ],
    "خطأ: الزيادة 1 MSS كل RTT، والنص هو النقص عند الفقد.",
    "False: additive increase is 1 MSS per RTT; halving is the decrease.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Delay-based TCP congestion control is an example of network-assisted congestion control.",
    [
      "False",
      "True"
    ],
    "خطأ: المبني على التأخير من الطرف للطرف (يقيس RTT بنفسه). المثال على مساعدة الشبكة هو ECN.",
    "False: delay-based is end-end (measures RTT); ECN is network-assisted.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Which of the following describes the UDP protocol?",
    [
      "No connection setup required",
      "Reliable, in-order delivery",
      "Congestion control",
      "Flow control"
    ],
    "UDP بدون إنشاء اتصال (بدون مصافحة). الباقي خدمات TCP.",
    "UDP needs no connection setup; the rest are TCP services.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Calculate the TCP rate for a window size of 524,280 bits and an RTT of 0.030 seconds.",
    [
      "17,476,000 bps",
      "15,728.4 bps",
      "2,184.5 kbps",
      "None of the above"
    ],
    "السرعة ≈ cwnd ÷ RTT = 524,280 ÷ 0.030 = 17,476,000 bps.",
    "Rate ≈ cwnd/RTT = 524,280 / 0.03 = 17,476,000 bps.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Calculate the TCP rate for a window size of 262,136 bits and an RTT of 0.015 seconds.",
    [
      "17,475,733.33 bps",
      "2,184,466 bps",
      "3,932 bps",
      "1,048,544 bps"
    ],
    "262,136 ÷ 0.015 = 17,475,733.33 bps.",
    "262,136 / 0.015 = 17,475,733.33 bps.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Calculate the sender utilization for stop-and-wait with an 8000-bit packet, 1 Mbps link, and 10 ms propagation delay.",
    [
      "28.57%",
      "11%",
      "8%",
      "None of the above"
    ],
    "L/R = 8000 ÷ 10^6 = 8 ms، والـ RTT = 2×10 = 20 ms، فـ U = 8 ÷ (20 + 8) = 28.57%.",
    "L/R = 8 ms, RTT = 20 ms → U = 8/28 = 28.57%.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Calculate the sender utilization for stop-and-wait with a 2000-bit packet, 10 Mbps link, and 5 ms propagation delay.",
    [
      "1.96%",
      "7%",
      "19%",
      "95%"
    ],
    "L/R = 2000 ÷ 10^7 = 0.2 ms، والـ RTT = 10 ms، فـ U = 0.2 ÷ 10.2 = 1.96%.",
    "L/R = 0.2 ms, RTT = 10 ms → U = 0.2/10.2 = 1.96%.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "The transport layer ensures that data units are delivered:",
    [
      "Error free, in sequence, with no loss or duplication",
      "Only fast",
      "To hosts, not processes",
      "Without any headers"
    ],
    "النقل يضمن وصول البيانات بدون أخطاء، بالترتيب، وبدون فقد أو تكرار.",
    "Transport ensures error-free, in-sequence delivery with no loss or duplication.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Why is there a UDP?",
    [
      "No connection establishment, no connection state, and a small header",
      "It is more reliable than TCP",
      "It has congestion control",
      "It guarantees order"
    ],
    "UDP: بدون إنشاء اتصال (ما فيه RTT زيادة)، بدون حالة، وترويسة صغيرة.",
    "UDP: no setup RTT, no state, small header.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Which application does NOT typically use UDP?",
    [
      "E-mail (SMTP)",
      "DNS",
      "Streaming multimedia",
      "HTTP/3"
    ],
    "UDP: البث وDNS وSNMP وHTTP/3. البريد SMTP على TCP.",
    "UDP is used by streaming, DNS, SNMP, HTTP/3; SMTP uses TCP.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "In TCP, the ACK number is:",
    [
      "The sequence number of the next byte expected from the other side",
      "The number of the last byte received",
      "Always 1",
      "The window size"
    ],
    "رقم الـ ACK = البايت الجاي المتوقع، وتراكمي.",
    "The ACK number is the next byte expected (cumulative).",
    0,
    0
  ],
  [
    92,
    "imp3",
    "To close a TCP connection, each side sends a segment with:",
    [
      "FIN bit = 1",
      "SYN bit = 1",
      "RST only",
      "ACK = 0"
    ],
    "كل طرف يرسل FIN = 1، والثاني يرد ACK، وممكن يدمجه مع FIN حقه.",
    "Each side sends FIN=1 and the other replies with ACK.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Which congestion control approach involves routers setting a bit in the IP datagram header to indicate congestion?",
    [
      "ECN (Explicit Congestion Notification)",
      "AIMD",
      "CUBIC",
      "Delay-based"
    ],
    "ECN: الراوتر يعلّم بت في ترويسة IP، والمستقبل يبلغ المرسل.",
    "ECN: routers mark a bit in the IP header.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "In slow start, when should the exponential increase switch to linear?",
    [
      "When cwnd gets to 1/2 of its value before timeout",
      "When cwnd reaches 1 MSS",
      "Never",
      "After the first ACK"
    ],
    "يتحول لخطي لما cwnd توصل نص قيمتها قبل الـ timeout (ssthresh).",
    "Switch to linear at ssthresh = half of cwnd before the timeout.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "TCP fairness: if K TCP sessions share the same bottleneck link of bandwidth R, each should get:",
    [
      "R/K",
      "R",
      "K/R",
      "R×K"
    ],
    "كل اتصال ياخذ R/K.",
    "Each gets R/K.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "A VPN uses a public network to:",
    [
      "Interconnect private sites in a secure way",
      "Replace all private networks with Wi-Fi",
      "Remove encryption",
      "Assign MAC addresses"
    ],
    "الـ VPN يستخدم شبكة عامة يربط فيها مواقع خاصة بأمان (نفق VPN).",
    "A VPN securely interconnects private sites over a public network.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "VPN tunneling is:",
    [
      "A virtual point-to-point connection through a public network that carries encapsulated datagrams",
      "A physical cable between sites",
      "A DNS lookup",
      "A congestion control method"
    ],
    "النفق: اتصال افتراضي نقطة لنقطة عبر شبكة عامة، ينقل datagrams مغلّفة.",
    "Tunneling: a virtual point-to-point link carrying encapsulated datagrams.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "Which is a VPN protocol for individual client-to-server connections?",
    [
      "PPTP (Point-to-Point Tunneling Protocol)",
      "SMTP",
      "HTTP",
      "DNS"
    ],
    "PPTP وL2TP للاتصال من عميل لخادم، وIPsec مدمج في IPv6.",
    "PPTP and L2TP are client-to-server VPN protocols; IPsec is built into IPv6.",
    0,
    0
  ],
  [
    92,
    "imp3",
    "An advantage of VPNs is:",
    [
      "Cost savings by eliminating expensive long-distance leased lines",
      "Immature standards",
      "Availability outside the company's control",
      "Need for deep security knowledge"
    ],
    "من المزايا توفير التكلفة وقابلية التوسع. والباقي عيوب.",
    "Advantages: cost savings, scalability; the others are disadvantages.",
    0,
    0
  ]
];

export const EXTRA_NAMES = {
  "imp1": "أسئلة مهمة · Ch 1",
  "imp2": "أسئلة مهمة · Ch 2",
  "imp3": "أسئلة مهمة · Ch 3"
};

export const CH_NAMES = {
  "1": "Introduction",
  "2": "Application Layer",
  "3": "Transport Layer"
};

export const CHS = [
  1,
  2,
  3
];

export const EX = {
  "inet": "الإنترنت مثل شبكة طرق بين المدن: البيوت والمحلات هي الأجهزة (hosts)، والدوّارات اللي توزع السيارات هي الراوترات، والطرق نفسها هي الروابط، وأنظمة المرور هي البروتوكولات.",
  "proto": "البروتوكول مثل طريقة طلبك في الدرايف ثرو: تسلّم «السلام عليكم»، يرد «حياك وش تطلب»، تطلب، يكرر عليك الطلب، تدفع. لو قلبت الترتيب يتلخبط الموظف، وهذا بالضبط شكل وترتيب الرسائل والأفعال.",
  "edge": "الـ DSL مثل خط ماء خاص لبيتك من الخزان، محد يشاركك فيه. الكيبل مثل خط ماء واحد للحارة كلها: لو الكل فتح الدش بنفس الوقت ينزل الضغط.",
  "media": "الوسائط الموجّهة مثل القطار: يمشي على سكة (سلك). غير الموجّهة مثل الطيارة: تطير بالجو بحرية وتتأثر بالجو (تشويش وعوائق).",
  "core": "store-and-forward مثل محطة شحن طرود: ما تطلع الشاحنة للمحطة الجاية إلا لما تنزل كل الطرود فيها. والتمرير (forwarding) هو الموظف اللي يحط الطرد على السير الصح، والتوجيه (routing) هو اللي رسم خريطة الطرق كلها.",
  "circuit": "تحويل الدوائر مثل حجز طاولة في مطعم طول الليل حتى لو ما جيت. تحويل الحزم مثل المطعم بدون حجز: يخدم ناس أكثر بس أحياناً تنتظر بالطابور.",
  "istruct": "لو كل بقالة تتفق مع كل مصنع مباشرة يصير عدد العقود ضخم (N²)، فيطلع موزّعين كبار (tier-1) وموزّعين إقليميين، وبعض المصانع الكبيرة (Google) تسوي أسطول توصيل خاص فيها.",
  "delay": "المعالجة = التفتيش عند البوابة، الطابور = انتظارك بالسرى، الإرسال = وقت دخول كل سيارات القافلة البوابة (يعتمد على عدد السيارات)، الانتشار = وقت السفر بالطريق (يعتمد على المسافة).",
  "queue": "شدة الترافيك مثل كاشير: لو الزباين يجون أبطأ من سرعته (أقل من 1) الطابور قصير، لو تقريباً بنفس سرعته الطابور يطول، ولو يجون أسرع منه (أكبر من 1) الطابور يطول للأبد.",
  "thru": "الإنتاجية مثل أنابيب الماء الموصولة ببعض: الماء يطلع بسرعة أضيق أنبوب، مهما كانت الأنابيب الثانية واسعة.",
  "sec": "الـ sniffing مثل واحد يسمع سواليفك في مجلس مفتوح، الـ spoofing مثل رسالة مكتوب عليها اسم مرسل غيرك، والـ DoS مثل ألف واحد يتصلون على مطعم بنفس الوقت عشان الزبون الحقيقي ما يلقى خط.",
  "layers": "الطبقات مثل شركة شحن: التطبيق يكتب الرسالة، النقل يحدد لأي موظف بالضبط داخل الشركة، الشبكة تحدد المدينة والشارع، الربط ينقل من محطة للي جنبها، والفيزيائية هي الشاحنة والطريق.",
  "encap": "التغليف مثل الدمى الروسية أو الظرف داخل ظرف: الرسالة بظرف النقل (segment)، وهذا بظرف الشبكة (datagram)، وهذا بكرتون الربط (frame). وكل محطة تفتح بس الغلاف اللي يخصها.",
  "appar": "عميل/خادم مثل مطعم: المطبخ (الخادم) ثابت ومفتوح دايم، والزباين (العملاء) يجون ويروحون وما يطبخون لبعض. P2P مثل عزيمة كل واحد جايب طبق ويتبادلون: كل ما زاد الضيوف زاد الأكل.",
  "sockets": "الـ IP مثل عنوان العمارة، والـ port رقم الشقة. الـ socket هو باب الشقة: ترمي الرسالة من الباب وشركة التوصيل (النقل) تتكفل بالباقي.",
  "tservice": "TCP مثل البريد المسجل: يوصل أكيد وبالترتيب وما يزحمك. UDP مثل رمي ورقة بصندوق الحارة: سريع وبدون إجراءات، بس ممكن تضيع.",
  "http": "HTTP مثل نادل ما يتذكر الزباين: كل طلب جديد عنده كأنه أول مرة (stateless).",
  "httpconn": "غير الدائم مثل إنك تتصل على المطعم وتسكر بعد كل صنف تطلبه. الدائم مثل إنك تطلب كل الأصناف في نفس المكالمة.",
  "httpmsg": "GET مثل إنك تكتب طلبك على ظهر الظرف (الكل يشوفه في الرابط)، وPOST مثل إنك تحطه داخل الظرف. HEAD تسأل «وش في الظرف؟» بدون ما تفتحه.",
  "cookies": "الكوكي مثل كرت ولاء في الكوفي: أول مرة يعطونك رقم ويسجلونه عندهم، وكل مرة تجي تعطيهم الرقم فيعرفون وش تحب.",
  "cache": "الكاش مثل ثلاجة البيت: بدل ما تروح البقالة كل مرة تبي حليب، تاخذ من الثلاجة. وConditional GET مثل إنك تتصل تسأل «فيه عدد جديد من المجلة؟» ولو لا (304) ما يرسلونها.",
  "http2": "HOL blocking مثل كاشير واحد وقدامك واحد عربيته مليانة: أنت بس معك ماء وتنتظر. HTTP/2 يخلي الكاشير يحاسب منك ومنه بالتناوب.",
  "email": "SMTP مثل البريد بين مكتب بريد ومكتب بريد (يدفع الرسالة)، وIMAP مثل إنك تروح صندوقك تفتحه وتنظم الرسائل في ملفات.",
  "dns": "DNS مثل دليل الهاتف بس موزّع: الجذر يقول لك وين دليل .com، ودليل .com يقول وين دليل amazon، ودليل amazon يعطيك الرقم.",
  "dnsq": "التكراري مثل إنك تسأل بنفسك كل واحد «وين المكان؟» ويحولك على غيره. العودي مثل إنك توكّل صاحبك يدوّر ويرجع لك بالجواب النهائي.",
  "p2p": "العميل/خادم مثل مطبعة وحدة تطبع لكل الطلاب نسخة (كل ما زادوا تأخرت). P2P مثل كل طالب ياخذ ورقة ويصوّرها لزملائه: كل ما زاد الطلاب زادت آلات التصوير.",
  "tsvc": "طبقة الشبكة توصل الطرد لباب العمارة (الجهاز)، وطبقة النقل تسلمه للشخص الصح داخل العمارة (العملية).",
  "mux": "UDP مثل صندوق بريد الشقة: أي رسالة لرقم الشقة تدخل نفس الصندوق مهما كان المرسل. TCP مثل خط تلفون خاص لكل مكالمة: نفس الرقم 80 بس كل متصل له خط.",
  "udp": "الـ checksum مثل إنك تكتب مجموع المبالغ تحت الفاتورة: لو رقم تغير غالباً المجموع ما يطابق. بس ممكن رقمين يتغيرون بطريقة تخلي المجموع نفسه، فهي حماية ضعيفة.",
  "rdt": "تخيل ترسل رسائل لصاحبك بقروب: rdt2.0 يرد «وصلت» أو «ما فهمت». لو رده نفسه تلخبط تعيد، فلازم ترقّم الرسائل (2.1) عشان ما يكررها. ولو الرسالة ضاعت كلياً تحتاج منبه (3.0).",
  "pipe": "أرسل-وانتظر مثل إنك ترسل طرد وتنتظر يوصل الرد قبل الطرد الثاني: الطريق السريع فاضي أغلب الوقت. التوازي مثل إنك ترسل عدة طرود ورا بعض.",
  "gbn": "GBN مثل معلم إذا غلطت في السؤال 2 يقول «أعد من 2 لين النهاية». SR مثل معلم يقول «أعد السؤال 2 بس، والباقي صح وحفظته».",
  "tcp": "رقم التسلسل مثل رقم الصفحة الأولى في الفصل اللي أرسلته، ورقم الـ ACK مثل «أنا وصلت لين صفحة 99، أبي من 100».",
  "rtt": "EstimatedRTT مثل تقدير وقت مشوارك للدوام: ما تغيّره كله عشان يوم واحد زحمة، تعدله شوي (12.5%). والـ Timeout مثل إنك تطلع بدري بهامش أمان على قد ما الزحمة متقلبة.",
  "flow": "التحكم بالتدفق مثل إنك تصب ماء في كاسة: صاحب الكاسة يقول لك كم باقي فاضي (rwnd) عشان ما تفيض.",
  "conn": "المصافحة الثلاثية مثل مكالمة: «تسمعني؟» «إيه أسمعك، وأنت تسمعني؟» «إيه أسمعك». بعدها تبدون السالفة.",
  "cong": "التدفق مشكلة بينك وبين صاحبك (هو ما يلحق يقرأ). الازدحام مشكلة الطريق كله (الكل طالع بنفس الوقت).",
  "tcpcc": "البداية البطيئة مثل إنك تسرّع سيارتك بقوة أول ما تطلع (تضاعف)، ولما تقرب من السرعة اللي صار فيها حادث آخر مرة (ssthresh) تزيد شوي شوي. لو صار فقد بثلاث ACKs مكررة تهدي للنص، ولو timeout ترجع من الصفر تقريباً."
};

export const HOT_POINTS = [
  {
    "ch": 1,
    "en": "d_{nodal} = d_{proc} + d_{queue} + <b>d_{trans} = L/R</b> + <b>d_{prop} = d/s</b> (s ≈ 2×10^{8} m/s). Transmission depends on size & rate, <b>not distance</b>.",
    "ar": "التأخير في العقدة = معالجة + طابور + إرسال (L/R) + انتشار (d/s)، وسرعة الانتشار تقريباً 2×10^8 م/ث. الإرسال يعتمد على حجم الحزمة والسرعة، مو المسافة."
  },
  {
    "ch": 1,
    "en": "Store-and-forward: whole packet before next link → N links = <b>N·L/R</b>.",
    "ar": "خزّن ثم مرّر: لازم الحزمة كاملة توصل قبل الرابط اللي بعده، فـ N روابط = N × L/R."
  },
  {
    "ch": 1,
    "en": "Caravan: 10 cars × 12 s = 120 s + 1 hr travel = <b>62 minutes</b>.",
    "ar": "القافلة: 10 سيارات × 12 ثانية = 120 ثانية، + ساعة سفر = 62 دقيقة."
  },
  {
    "ch": 1,
    "en": "Traffic intensity <b>La/R</b>: ~0 small delay, → 1 large, <b>&gt; 1 infinite</b>.",
    "ar": "شدة الترافيك La/R: قريبة من 0 ← تأخير صغير، تقرب من 1 ← تأخير كبير، أكبر من 1 ← تأخير لا نهائي."
  },
  {
    "ch": 1,
    "en": "Throughput = <b>min</b> over the path; shared link R by 10 → min(R_{c}, R_{s}, R/10).",
    "ar": "الإنتاجية = أصغر رابط على المسار، ولو رابط مشترك بين 10 اتصالات: min(R_c, R_s, R/10)."
  },
  {
    "ch": 1,
    "en": "Circuit vs packet: 1 Gb/s, 100 Mb/s users active 10% → circuit <b>10</b> users, packet <b>35</b>. FDM = frequency bands; TDM = time slots.",
    "ar": "دوائر مقابل حزم: رابط 1 Gb/s ومستخدم يحتاج 100 Mb/s ونشط 10% ← الدوائر 10 مستخدمين والحزم 35. FDM = نطاقات تردد، TDM = فترات زمنية."
  },
  {
    "ch": 1,
    "en": "Forwarding = <b>local</b> (input → output link); routing = <b>global</b> (source → destination path).",
    "ar": "التمرير محلي (من رابط الدخول للخروج داخل الراوتر)، والتوجيه عام (المسار من المصدر للوجهة)."
  },
  {
    "ch": 1,
    "en": "5 layers: application (HTTP, SMTP, DNS) · transport (TCP, UDP) · network (IP) · link (Ethernet, WiFi) · physical. Units: <b>message, segment, datagram, frame</b>. OSI adds <b>presentation + session</b>.",
    "ar": "5 طبقات: تطبيقات (HTTP وSMTP وDNS)، نقل (TCP وUDP)، شبكة (IP)، ربط (Ethernet وWiFi)، فيزيائية. الوحدات: message وsegment وdatagram وframe. وOSI يضيف presentation وsession."
  },
  {
    "ch": 1,
    "en": "Security: sniffing (read), <b>spoofing (fake source address)</b>, DoS (botnet floods). Defenses: authentication, encryption, integrity (signatures), VPN, firewalls (off-by-default).",
    "ar": "الهجمات: التنصت (قراءة الحزم)، الانتحال (عنوان مصدر مزيّف)، وDoS (إغراق من botnet). الدفاع: مصادقة، تشفير، فحص سلامة (توقيع رقمي)، VPN، وجدار ناري مقفل افتراضياً."
  },
  {
    "ch": 2,
    "en": "Client-server: always-on server, permanent IP; clients don't talk to each other. P2P: <b>self scalability</b>, complex management.",
    "ar": "عميل/خادم: خادم شغّال دايم بعنوان ثابت، والعملاء ما يكلمون بعض. P2P: يتوسع ذاتياً بس إدارته معقدة."
  },
  {
    "ch": 2,
    "en": "Process address = <b>IP + port</b>. HTTP <b>80</b>, SMTP <b>25</b>. Socket = door between app and transport.",
    "ar": "عنوان العملية = IP + رقم المنفذ. HTTP على 80 وSMTP على 25. والـ socket باب بين التطبيق والنقل."
  },
  {
    "ch": 2,
    "en": "TCP: reliable, flow control, congestion control, connection-oriented; <b>no</b> timing/throughput/security. UDP: none of these. <b>TLS</b> lives in the application layer.",
    "ar": "TCP: موثوق، تحكم بالتدفق والازدحام، واتصال مسبق، وما يضمن توقيت ولا إنتاجية ولا أمن. UDP ما فيه ولا وحدة منها. وTLS في طبقة التطبيقات."
  },
  {
    "ch": 2,
    "en": "HTTP over TCP, <b>stateless</b>. Non-persistent = <b>2RTT + transmission</b> per object; persistent: as little as <b>1 RTT</b> for all referenced objects.",
    "ar": "HTTP على TCP وعديم الحالة. غير الدائم = 2RTT + وقت الإرسال لكل كائن، والدائم يكفيه RTT واحد تقريباً لكل الكائنات."
  },
  {
    "ch": 2,
    "en": "Methods: GET (data in URL after ?), POST (body), HEAD (headers only), PUT (replace). Codes: <b>200, 301, 400, 404, 505</b>; conditional GET → <b>304</b>.",
    "ar": "الطرق: GET (البيانات في الرابط بعد ?)، POST (في الجسم)، HEAD (ترويسات بس)، PUT (يستبدل الملف). الأكواد: 200 و301 و400 و404 و505، وConditional GET يرد 304."
  },
  {
    "ch": 2,
    "en": "Cookies: <b>4 components</b> (response header, request header, browser file, back-end DB); third-party cookies track across sites.",
    "ar": "الكوكيز 4 مكونات: سطر في الرد، سطر في الطلب اللي بعده، ملف عند المتصفح، وقاعدة بيانات في الموقع. وكوكيز الطرف الثالث تتبعك بين المواقع."
  },
  {
    "ch": 2,
    "en": "Cache example: utilization .97 → with hit rate 0.4: 0.9 Mbps → <b>.58</b>, avg delay ≈ <b>1.2 s</b>; cheaper than a 154 Mbps link.",
    "ar": "مثال الكاش: الاستغلال 0.97، ومع إصابة 0.4 يمر 0.9 Mbps بس فيصير 0.58، والتأخير المتوسط ≈ 1.2 ثانية، أرخص من رابط 154 Mbps."
  },
  {
    "ch": 2,
    "en": "HTTP/2: priority, server push, <b>frames</b> → less HOL blocking (still TCP). HTTP/3 → <b>UDP</b>.",
    "ar": "HTTP/2: أولوية، دفع من الخادم، وframes تقلل HOL blocking (للحين على TCP). وHTTP/3 على UDP."
  },
  {
    "ch": 2,
    "en": "SMTP: TCP port 25, push to receiver's server, 3 phases (handshaking, transfer, closure). IMAP retrieves.",
    "ar": "SMTP: على TCP منفذ 25، يدفع البريد لخادم المستقبل، وله 3 مراحل (مصافحة، نقل، إغلاق). وIMAP للاسترجاع."
  },
  {
    "ch": 2,
    "en": "DNS: root (<b>13</b>, ICANN) → TLD → authoritative; local DNS not strictly in hierarchy. Iterated vs <b>recursive</b> (burden on contacted server). RR (name, value, type, ttl): <b>A, NS, CNAME, MX</b>.",
    "ar": "DNS: الجذر (13، وتديره ICANN) ← TLD ← الموثوق، والمحلي مو جزء رسمي من الهرم. التكراري مقابل العودي (الحمل على الخادم المسؤول). السجل (name, value, type, ttl): A وNS وCNAME وMX."
  },
  {
    "ch": 2,
    "en": "Distribution: D_{c-s} ≥ max{NF/u_{s}, F/d_{min}} (linear in N); D_{P2P} ≥ max{F/u_{s}, F/d_{min}, NF/(u_{s}+Σu_{i})}. BitTorrent: 256Kb chunks, tracker, <b>rarest first</b>, top <b>4</b> every 10 s, optimistic unchoke every 30 s.",
    "ar": "عميل/خادم ≥ max{NF/u_s, F/d_min} ويزيد خطياً مع N، وP2P ≥ max{F/u_s, F/d_min, NF/(u_s+Σu_i)}. BitTorrent: قطع 256Kb، tracker، الأندر أولاً، أعلى 4 كل 10 ثواني، وفك خنق متفائل كل 30."
  },
  {
    "ch": 3,
    "en": "Demux: UDP by <b>dest port only</b> (same socket); TCP by <b>4-tuple</b> (different sockets).",
    "ar": "التوزيع: UDP بمنفذ الوجهة بس (نفس الـ socket)، وTCP بالـ 4-tuple (sockets مختلفة)."
  },
  {
    "ch": 3,
    "en": "UDP header: src port, dst port, length, checksum (8 bytes). Checksum = <b>one's complement of the sum</b> with wraparound; weak protection.",
    "ar": "ترويسة UDP: منفذ المصدر والوجهة والطول والـ checksum (8 بايت). الـ checksum = عكس المجموع بعد إرجاع الـ carry، وحمايته ضعيفة."
  },
  {
    "ch": 3,
    "en": "rdt2.0 bit errors (checksum, ACK/NAK) → 2.1 corrupted ACK/NAK (seq # 0/1) → 2.2 NAK-free (duplicate ACK) → 3.0 loss (<b>timer</b>).",
    "ar": "rdt2.0 لأخطاء البت (checksum وACK/NAK) ← 2.1 لخراب ACK/NAK (رقم 0/1) ← 2.2 بدون NAK (ACK مكرر) ← 3.0 للفقد (مؤقت)."
  },
  {
    "ch": 3,
    "en": "U_{sender} = (L/R)/(RTT + L/R) = .008/30.008 = <b>0.00027</b>; pipelining 3 → ×3.",
    "ar": "استغلال أرسل-وانتظر = (L/R) ÷ (RTT + L/R) = 0.008 ÷ 30.008 = 0.00027، والتوازي بـ 3 حزم يضربه في 3."
  },
  {
    "ch": 3,
    "en": "GBN: cumulative ACK, one timer, resend <b>all</b> from n. SR: individual ACKs, timer per pkt, resend <b>only</b> lost; window ≤ ½ seq space.",
    "ar": "GBN: ACK تراكمي، مؤقت واحد، ويعيد كل شي من n. SR: ACK لكل حزمة، مؤقت لكل حزمة، ويعيد الضايعة بس، والنافذة ≤ نص مدى الأرقام."
  },
  {
    "ch": 3,
    "en": "TCP: seq = first byte number; <b>ACK = next byte expected</b> (Seq 92 + 8 bytes → ACK 100); cumulative.",
    "ar": "TCP: رقم التسلسل = رقم أول بايت، ورقم الـ ACK = البايت الجاي المتوقع (Seq 92 + 8 بايت ← ACK 100)، وتراكمي."
  },
  {
    "ch": 3,
    "en": "EstimatedRTT = 0.875·Est + <b>0.125</b>·Sample; DevRTT with β = <b>0.25</b>; Timeout = Est + <b>4</b>·Dev. Fast retransmit after <b>3 dup ACKs</b>.",
    "ar": "EstimatedRTT = 0.875×القديم + 0.125×العينة، وDevRTT بـ β = 0.25، والـ Timeout = EstimatedRTT + 4×DevRTT. والإعادة السريعة بعد 3 ACKs مكررة."
  },
  {
    "ch": 3,
    "en": "Flow control: receiver advertises <b>rwnd</b>; congestion control: sender's <b>cwnd</b>. 3-way handshake: SYN(x) → SYNACK(y, x+1) → ACK(y+1); close with FIN.",
    "ar": "التدفق: المستقبل يعلن rwnd، والازدحام: المرسل عنده cwnd. المصافحة: SYN(x) ← SYNACK(y, x+1) ← ACK(y+1)، والإغلاق بـ FIN."
  },
  {
    "ch": 3,
    "en": "AIMD: +1 MSS/RTT, halve on 3 dup ACKs (Reno), <b>1 MSS on timeout</b> (Tahoe). Slow start: cwnd = 1, doubles each RTT until <b>ssthresh = cwnd/2</b> at last loss. CUBIC (Linux default), BBR (delay-based), ECN, fairness R/K.",
    "ar": "AIMD: +1 MSS كل RTT، والنص عند 3 ACKs مكررة (Reno)، و1 MSS عند timeout (Tahoe). البداية البطيئة: cwnd = 1 وتتضاعف كل RTT لين ssthresh (نص cwnd وقت آخر فقد). CUBIC افتراضي Linux، BBR مبني على التأخير، ECN، والعدالة R/K."
  }
];

export const FIGS = {
  "inet": [
    [
      "img/net_9c0c_3.webp",
      "The Internet: a “nuts and bolts” view",
      "وش هو الإنترنت"
    ],
    [
      "img/net_9c0c_2.webp",
      "The Internet: a “nuts and bolts” view",
      "وش هو الإنترنت"
    ]
  ],
  "proto": [
    [
      "img/net_9c0c_5.webp",
      "What’s a protocol?",
      "وش هو البروتوكول"
    ]
  ],
  "edge": [
    [
      "img/net_9c0c_14.webp",
      "Access networks: digital subscriber line (DSL)",
      "أطراف الشبكة وشبكات الوصول"
    ],
    [
      "img/net_9c0c_13.webp",
      "Access networks: cable-based access",
      "أطراف الشبكة وشبكات الوصول"
    ]
  ],
  "media": [
    [
      "img/net_9c0c_22.webp",
      "Links: physical media",
      "إرسال الحزم والوسائط الفيزيائية"
    ]
  ],
  "core": [
    [
      "img/net_9c0c_24.webp",
      "The network core",
      "لبّ الشبكة: تحويل الحزم"
    ],
    [
      "img/net_9c0c_28.webp",
      "Packet-switching: store-and-forward",
      "لبّ الشبكة: تحويل الحزم"
    ]
  ],
  "circuit": [
    [
      "img/net_9c0c_31.webp",
      "Alternative to packet switching: circuit",
      "تحويل الدوائر مقابل تحويل الحزم"
    ],
    [
      "img/net_9c0c_32.webp",
      "Circuit switching: FDM and TDM",
      "تحويل الدوائر مقابل تحويل الحزم"
    ]
  ],
  "istruct": [
    [
      "img/net_9c0c_43.webp",
      "Internet structure: a “network of networks",
      "بنية الإنترنت: شبكة الشبكات"
    ]
  ],
  "delay": [
    [
      "img/net_9c0c_46.webp",
      "Packet delay: four sources",
      "تأخير الحزمة: أربعة مصادر"
    ],
    [
      "img/net_9c0c_48.webp",
      "Caravan analogy",
      "تأخير الحزمة: أربعة مصادر"
    ]
  ],
  "queue": [
    [
      "img/net_9c0c_50.webp",
      " a: average packet arrival rate",
      "تأخير الطابور وtraceroute والفقد"
    ],
    [
      "img/net_9c0c_51.webp",
      "Real” Internet delays and routes",
      "تأخير الطابور وtraceroute والفقد"
    ]
  ],
  "thru": [
    [
      "img/net_9c0c_54.webp",
      "Throughput",
      "الإنتاجية (Throughput)"
    ],
    [
      "img/net_9c0c_56.webp",
      "Throughput: network scenario",
      "الإنتاجية (Throughput)"
    ]
  ],
  "sec": [
    [
      "img/net_9c0c_62.webp",
      "Lines of defense:",
      "أمن الشبكات"
    ],
    [
      "img/net_9c0c_58.webp",
      "Network security",
      "أمن الشبكات"
    ]
  ],
  "layers": [
    [
      "img/net_9c0c_66.webp",
      "Layered Internet protocol stack",
      "طبقات البروتوكولات"
    ]
  ],
  "encap": [
    [
      "img/net_9c0c_73.webp",
      "ISO/OSI reference model",
      "التغليف ونموذج OSI"
    ]
  ],
  "appar": [
    [
      "img/net_7d3e_5.webp",
      "Peer-peer architecture",
      "تطبيقات الشبكة: عميل/خادم و P2P"
    ],
    [
      "img/net_7d3e_72.webp",
      "Peer-to-peer (P2P) architecture",
      "تطبيقات الشبكة: عميل/خادم و P2P"
    ]
  ],
  "sockets": [
    [
      "img/net_7d3e_6.webp",
      "Processes communicating",
      "العمليات والـ Sockets والعناوين"
    ],
    [
      "img/net_7d3e_8.webp",
      "Addressing processes",
      "العمليات والـ Sockets والعناوين"
    ]
  ],
  "tservice": [
    [
      "img/net_7d3e_10.webp",
      "What transport service does an app need?",
      "خدمات النقل اللي يحتاجها التطبيق"
    ],
    [
      "img/net_7d3e_12.webp",
      "Internet transport protocols services",
      "خدمات النقل اللي يحتاجها التطبيق"
    ]
  ],
  "http": [
    [
      "img/net_7d3e_16.webp",
      "Web and HTTP",
      "الويب و HTTP"
    ]
  ],
  "httpconn": [
    [
      "img/net_7d3e_23.webp",
      "Persistent HTTP (HTTP 1.1)",
      "HTTP غير الدائم والدائم"
    ],
    [
      "img/net_7d3e_22.webp",
      "Non-persistent HTTP: response time",
      "HTTP غير الدائم والدائم"
    ]
  ],
  "httpmsg": [
    [
      "img/net_7d3e_26.webp",
      "Other HTTP request messages",
      "رسائل HTTP والطرق والأكواد"
    ]
  ],
  "cookies": [
    [
      "img/net_7d3e_30.webp",
      "Maintaining user/server state: cookies",
      "الكوكيز وحفظ الحالة"
    ],
    [
      "img/net_7d3e_32.webp",
      "HTTP cookies: comments",
      "الكوكيز وحفظ الحالة"
    ]
  ],
  "cache": [
    [
      "img/net_7d3e_41.webp",
      "Option 1: buy a faster access link",
      "الكاش (Web Cache) و Conditional GET"
    ],
    [
      "img/net_7d3e_39.webp",
      "Web caches (aka proxy servers)",
      "الكاش (Web Cache) و Conditional GET"
    ]
  ],
  "http2": [
    [
      "img/net_7d3e_46.webp",
      "HTTP/2",
      "HTTP/2 و HTTP/3"
    ],
    [
      "img/net_7d3e_45.webp",
      "HTTP/2",
      "HTTP/2 و HTTP/3"
    ]
  ],
  "email": [
    [
      "img/net_7d3e_51.webp",
      "E-mail",
      "البريد: SMTP و IMAP"
    ],
    [
      "img/net_7d3e_53.webp",
      "SMTP RFC (5321)",
      "البريد: SMTP و IMAP"
    ]
  ],
  "dns": [
    [
      "img/net_7d3e_62.webp",
      "Top-Level Domain, and authoritative servers",
      "نظام أسماء النطاقات DNS"
    ],
    [
      "img/net_7d3e_58.webp",
      "DNS: services, structure",
      "نظام أسماء النطاقات DNS"
    ]
  ],
  "dnsq": [
    [
      "img/net_7d3e_67.webp",
      "DNS records",
      "الاستعلام والكاش والسجلات في DNS"
    ],
    [
      "img/net_7d3e_70.webp",
      "Getting your info into the DNS",
      "الاستعلام والكاش والسجلات في DNS"
    ]
  ],
  "p2p": [
    [
      "img/net_7d3e_79.webp",
      "BitTorrent: requesting, sending file chunks",
      "توزيع الملفات P2P و BitTorrent"
    ],
    [
      "img/net_7d3e_78.webp",
      "P2P file distribution: BitTorrent",
      "توزيع الملفات P2P و BitTorrent"
    ]
  ],
  "tsvc": [
    [
      "img/net_53e3_2.webp",
      "Transport services and protocols",
      "خدمات طبقة النقل"
    ],
    [
      "img/net_53e3_6.webp",
      "Two principal Internet transport protocols",
      "خدمات طبقة النقل"
    ]
  ],
  "mux": [
    [
      "img/net_53e3_14.webp",
      "Connection-oriented demultiplexing",
      "الدمج والتوزيع (Mux/Demux)"
    ],
    [
      "img/net_53e3_11.webp",
      "How demultiplexing works",
      "الدمج والتوزيع (Mux/Demux)"
    ]
  ],
  "udp": [
    [
      "img/net_53e3_26.webp",
      "Internet checksum",
      "UDP والـ Checksum"
    ]
  ],
  "rdt": [
    [
      "img/net_53e3_43.webp",
      "rdt2.0 has a fatal flaw!",
      "النقل الموثوق: من rdt1.0 إلى rdt3.0"
    ],
    [
      "img/net_53e3_47.webp",
      "rdt2.2: a NAK-free protocol",
      "النقل الموثوق: من rdt1.0 إلى rdt3.0"
    ]
  ],
  "pipe": [
    [
      "img/net_53e3_55.webp",
      "Performance of rdt3.0 (stop-and-wait)",
      "أداء أرسل-وانتظر والتوازي (Pipelining)"
    ]
  ],
  "gbn": [
    [
      "img/net_53e3_60.webp",
      "Go-Back-N: sender",
      "Go-Back-N و Selective Repeat"
    ]
  ],
  "tcp": [
    [
      "img/net_53e3_70.webp",
      "TCP: overview RFCs: 793,1122, 2018, 5681, 7323",
      "نظرة على TCP وأرقام التسلسل"
    ],
    [
      "img/net_53e3_73.webp",
      "TCP sequence numbers, ACKs",
      "نظرة على TCP وأرقام التسلسل"
    ]
  ],
  "rtt": [
    [
      "img/net_53e3_74.webp",
      "TCP round trip time, timeout",
      "RTT والـ Timeout وإعادة الإرسال في TCP"
    ],
    [
      "img/net_53e3_76.webp",
      "TCP round trip time, timeout",
      "RTT والـ Timeout وإعادة الإرسال في TCP"
    ]
  ],
  "flow": [
    [
      "img/net_53e3_87.webp",
      "TCP flow control",
      "التحكم بالتدفق في TCP"
    ],
    [
      "img/net_53e3_86.webp",
      "TCP flow control",
      "التحكم بالتدفق في TCP"
    ]
  ],
  "conn": [
    [
      "img/net_53e3_94.webp",
      "Closing a TCP connection",
      "إدارة اتصال TCP"
    ],
    [
      "img/net_53e3_88.webp",
      "TCP connection management",
      "إدارة اتصال TCP"
    ]
  ],
  "cong": [
    [
      "img/net_53e3_96.webp",
      "Principles of congestion control",
      "مبادئ التحكم بالازدحام"
    ],
    [
      "img/net_53e3_108.webp",
      "Approaches towards congestion control",
      "مبادئ التحكم بالازدحام"
    ]
  ],
  "tcpcc": [
    [
      "img/net_53e3_111.webp",
      "TCP AIMD: more",
      "تحكم TCP بالازدحام"
    ],
    [
      "img/net_53e3_110.webp",
      "TCP congestion control: AIMD",
      "تحكم TCP بالازدحام"
    ]
  ]
};
