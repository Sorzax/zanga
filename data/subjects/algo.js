// Course content. Question order is stable: saved mistakes refer to these indices.

export const TOPICS = [
  {
    "id": "algo",
    "ch": 1,
    "t": "What is an Algorithm?",
    "ar": "وش هي الخوارزمية",
    "pts": [
      [
        "An <b>algorithm</b> is an <b>unambiguous step-by-step procedure</b> for solving a problem given a <b>predefined set of inputs</b> in a <b>finite</b> amount of time.",
        "الخوارزمية خطوات واضحة بدون غموض، لحل مشكلة بمدخلات محددة، وتنتهي بعدد محدود من الخطوات."
      ],
      [
        "Each step must be <b>clear and unambiguous</b> · the input set must be <b>defined</b> · it <b>terminates</b> after a finite number of steps.",
        "كل خطوة لازم تكون واضحة وبدون غموض، والمدخلات معرّفة، وتنتهي بعد عدد محدود من الخطوات."
      ],
      [
        "Example – <b>Euclid's algorithm</b> for gcd(m, n): `while n ≠ 0: r ← m mod n; m ← n; n ← r` then `return m`.",
        "مثال: خوارزمية إقليدس لإيجاد القاسم المشترك الأكبر gcd(m, n): طول ما n ≠ 0 نحسب r = m mod n، ثم m = n و n = r، وفي النهاية نرجّع m."
      ],
      [
        "Design & analysis process: understand the <b>computational means</b> (RAM, CPU) · <b>exact vs approximate</b> solutions · choose a <b>design technique/paradigm</b> · design (data structure + <b>pseudocode</b>) · <b>prove correctness</b> (use cases for small inputs, <b>mathematical induction</b> for large) · <b>analyse</b> (efficiency, simplicity, generality) · <b>code</b> and test.",
        "مراحل التصميم: تعرف قدرات الجهاز، تحدد هل الحل دقيق أو تقريبي، تختار أسلوب، تكتب pseudocode، تثبت الصحة بالاستقراء، تحلل الكفاءة، ثم تبرمج."
      ]
    ],
    "trap": [
      "Correctness for <b>large</b> inputs is proved by <b>mathematical induction</b>.",
      "صحة الخوارزمية للمدخلات الكبيرة نثبتها بالاستقراء الرياضي."
    ],
    "idx": 0
  },
  {
    "id": "why",
    "ch": 1,
    "t": "Why Analyse Algorithms? Input Size",
    "ar": "ليش نحلل الخوارزميات",
    "pts": [
      [
        "Hardware improves, but <b>algorithms still matter</b>. Key goal: find the most efficient algorithm <b>regardless of the machine</b>.",
        "الهاردوير يتطور، بس الخوارزمية هي اللي تفرق. والهدف أكفأ خوارزمية بغض النظر عن الجهاز."
      ],
      [
        "Resources: <b>time complexity</b> – how running time increases as input size increases; <b>space complexity</b> – how required memory increases as input size increases.",
        "الموارد: تعقيد الوقت يعني كيف يزيد وقت التشغيل لما يكبر حجم المدخلات، وتعقيد المساحة يعني كيف تزيد الذاكرة المطلوبة لما يكبر حجم المدخلات."
      ],
      [
        "Input size n examples: <b>array</b> → # of elements · <b>graph</b> → vertices + edges · <b>polynomial</b> → degree.",
        "حجم المدخل: للمصفوفة عدد العناصر، للـ graph الرؤوس والحواف، ولكثير الحدود الدرجة."
      ],
      [
        "Why not a <b>stopwatch</b>? It depends on hardware, compiler, coding style; <b>not portable</b>. Instead → <b>count basic operations</b>.",
        "ما نستخدم ساعة توقيت لأنها تعتمد على الجهاز والمترجم، فنعدّ العمليات الأساسية بدالها."
      ]
    ],
    "trap": [
      "Graph input size = <b>vertices + edges</b>; polynomial = <b>degree</b>.",
      "حجم الـ graph رؤوس وحواف، وكثير الحدود درجته."
    ],
    "idx": 1
  },
  {
    "id": "timec",
    "ch": 1,
    "t": "Time Complexity & Step Counting",
    "ar": "تعقيد الوقت وعدّ الخطوات",
    "pts": [
      [
        "A <b>step</b> is a simple operation taking constant time: arithmetic (+ − × ÷ mod), assignment, comparison, array access `A[i]`, Boolean ops, function calls → each costs <b>1 step</b>.",
        "الخطوة عملية بسيطة وقتها ثابت: العمليات الحسابية (+ − × ÷ mod)، والإسناد، والمقارنة، والوصول لعنصر A[i]، والعمليات المنطقية، واستدعاء الدوال، وكل وحدة تكلف خطوة."
      ],
      [
        "Rules: heading → 0 · braces → 0 · simple statement → 1 · sequence → sum · conditional → test + branch · <b>loop → (steps inside) × (iterations)</b> · <b>nested loops → multiply</b> · <b>divide input by x → log_{x} n</b>.",
        "القواعد: عنوان الخوارزمية والأقواس = 0، الجملة البسيطة = 1، سلسلة الجمل = مجموعها، الشرط = خطوات الاختبار + خطوات الفرع، الحلقة = الخطوات داخلها × عدد التكرار، الحلقات المتداخلة نضربها، وتقسيم المدخل على x كل مرة يعطي log_{x} n."
      ],
      [
        "Summation algorithm: `sum = 0` (1) + loop n×2 = 2n + `return` (1) → <b>T = 2n + 2</b>.",
        "خوارزمية الجمع: sum = 0 خطوة، والحلقة n × 2، و return خطوة، فالمجموع T = 2n + 2."
      ],
      [
        "<b>Constant time</b>: fixed time for all inputs — `return a+b*c+(a+b+c)/(a+b)+4` → T(p) = 1.",
        "الوقت الثابت: نفس الوقت مهما كانت المدخلات، ومثاله return بعملية حسابية وحدة: T(p) = 1."
      ],
      [
        "<b>Linear time</b>: `sum=0,i` (1) + `for(i=0;i<n;i++)` (1 + (n+1) + n) + body (n) + return (1) → <b>T(p) = 3n + 4</b>.",
        "الوقت الخطي: التعريف خطوة، ورأس الحلقة 1 + (n+1) + n، وجسمها n، و return خطوة، فالمجموع T(p) = 3n + 4."
      ]
    ],
    "trap": [
      "Loop header `for(i=0;i<n;i++)` = 1 + (n+1) + n (the test runs <b>n+1</b> times).",
      "شرط الحلقة يتنفذ n+1 مرة مو n."
    ],
    "idx": 2
  },
  {
    "id": "spacec",
    "ch": 1,
    "t": "Space Complexity",
    "ar": "تعقيد المساحة",
    "pts": [
      [
        "Total memory as a function of n: <b>S(P) = C (fixed part) + S_{p} (variable part)</b>. Focus on the <b>variable part</b>.",
        "المساحة = جزء ثابت + جزء متغير، والتركيز على المتغير."
      ],
      [
        "Fixed: constants, instructions, fixed-size variables. Variable: <b>arrays, call stack, recursion overhead, dynamic structures</b> (lists, trees, hash tables).",
        "الجزء الثابت: الثوابت وتعليمات البرنامج والمتغيرات ثابتة الحجم. الجزء المتغير: المصفوفات، وستاك استدعاء الدوال، وتكلفة الاستدعاء الذاتي، والتراكيب الديناميكية (قوائم وأشجار و hash tables)."
      ],
      [
        "Rules: simple variable → constant · array of size n → <b>n</b> · 2D n×n → <b>n²</b> · <b>loops do not increase space</b> · pointer → 1 · function call → params + return address + locals · <b>recursion → depth × memory per call</b>.",
        "القواعد: المتغير البسيط ثابت، المصفوفة بحجم n تاخذ n، الثنائية n×n تاخذ n²، الحلقات ما تزيد المساحة، المؤشر وحدة، استدعاء الدالة = المعاملات + عنوان الرجوع + المتغيرات المحلية، والاستدعاء الذاتي = العمق × ذاكرة كل استدعاء."
      ],
      [
        "Examples: summation (sum, i) → <b>2</b> · `sum(a,b,c)` → 3 + 0 = <b>3 units</b> · `int sum(A[], n)` → 1 + n + 1 + 1 = <b>n + 3 words</b> · `SUM(A, n)` → <b>3 + n</b>.",
        "أمثلة: خوارزمية الجمع (sum و i) = 2، و sum(a,b,c) = 3 + 0 = 3 وحدات، و int sum(A[], n) = 1 + n + 1 + 1 = n + 3، و SUM(A, n) = 3 + n."
      ],
      [
        "Exercise `find(A, x)`: time <b>3 + 2n</b>, space <b>2 + n</b>.",
        "تمرين البحث: الوقت 3 + 2n، والمساحة 2 + n."
      ]
    ],
    "trap": [
      "Loops reuse the same variables → <b>no extra space</b>.",
      "الحلقة ما تزيد المساحة لأنها تعيد استخدام نفس المتغيرات."
    ],
    "idx": 3
  },
  {
    "id": "cases",
    "ch": 1,
    "t": "Case Behaviours",
    "ar": "أفضل وأسوأ ومتوسط حالة",
    "pts": [
      [
        "Runtime varies depending on input.",
        "وقت التشغيل يختلف حسب المدخلات."
      ],
      [
        "<b>Best case</b>: input for which the algorithm runs <b>fastest</b>; minimum steps; a <b>lower bound</b>.",
        "أفضل حالة: أقل خطوات، وتعطي الحد الأدنى."
      ],
      [
        "<b>Worst case</b>: an <b>absolute guarantee</b> it won't run longer; maximum steps; an <b>upper bound</b>.",
        "أسوأ حالة: ضمان إنها ما تتعدى هالوقت، وتعطي الحد الأعلى."
      ],
      [
        "<b>Average case</b>: assumes the input is <b>random</b>; gives a <b>prediction</b>.",
        "الحالة المتوسطة: نفترض المدخلات عشوائية، وتعطي توقّع."
      ],
      [
        "Why worst case? Gives a <b>guarantee</b> (upper bound) · <b>safer</b> for critical systems · <b>simpler</b> than average-case analysis. LowerBound ≤ RunningTime ≤ UpperBound.",
        "نهتم بأسوأ حالة لأنها ضمان (حد أعلى)، وأأمن للأنظمة الحساسة، وأسهل من تحليل المتوسط. والقاعدة: الحد الأدنى ≤ وقت التشغيل ≤ الحد الأعلى."
      ],
      [
        "Linear search `find(A,x)`: best case x at A[0] → <b>O(1)</b>; worst case x absent or last → <b>O(n)</b>.",
        "البحث الخطي: أفضل حالة x أول عنصر A[0] فتطلع O(1)، وأسوأ حالة x آخر عنصر أو مو موجود فتطلع O(n)."
      ]
    ],
    "idx": 4
  },
  {
    "id": "growth",
    "ch": 1,
    "t": "Asymptotic Analysis & Order of Growth",
    "ar": "التحليل التقاربي ورتب النمو",
    "pts": [
      [
        "Express running time as a function f(n); what matters is the <b>growth rate</b>. In asymptotic analysis <b>constants and lower-order terms are ignored</b>, for arbitrarily large n.",
        "نكتب الوقت كدالة f(n)، واللي يهمنا معدل النمو، ونتجاهل الثوابت والحدود الأصغر لما تكون n كبيرة جداً."
      ],
      [
        "Order: <b>1 &lt; log n &lt; n &lt; n log n &lt; n² &lt; n³ &lt; n^{k} &lt; 2^{n} &lt; k^{n} &lt; n!</b>",
        "الترتيب من الأبطأ نمواً للأسرع: 1 ثم log n ثم n ثم n log n ثم n² ثم n³ ثم n^{k} ثم 2^{n} ثم k^{n} ثم n!."
      ],
      [
        "O(1) array access · O(log n) <b>binary search</b> · O(n) <b>linear search</b> · O(n log n) <b>merge, quick sort</b> · O(n²) nested loops, <b>bubble sort</b> · O(2^{n}) exponential · O(n!) factorial → <b>intractable</b>.",
        "أمثلة: O(1) الوصول لعنصر في المصفوفة، O(log n) البحث الثنائي، O(n) البحث الخطي، O(n log n) الدمج والسريع، O(n²) الحلقات المتداخلة والفقاعي، O(2^{n}) الأسي، و O(n!) المضروب، والأخيرين غير عمليين (intractable)."
      ],
      [
        "Algorithm analysis does <b>NOT</b> answer: how much resource is used to <b>represent</b> n pieces of data.",
        "التحليل ما يجاوب على كم مساحة نحتاج لتمثيل البيانات نفسها."
      ]
    ],
    "trap": [
      "n log n grows <b>faster</b> than n but <b>slower</b> than n².",
      "n log n بين n و n²."
    ],
    "idx": 5
  },
  {
    "id": "bigo",
    "ch": 1,
    "t": "Big-O, Big-Ω, Big-Θ",
    "ar": "الرموز التقاربية",
    "pts": [
      [
        "<b>Big-O</b> (upper bound): f(n) = O(g(n)) if there exist constants c and n_{0} such that <b>f(n) ≤ c·g(n) for all n ≥ n_{0}</b>. In the slides: represents the <b>worst case</b>.",
        "Big-O حد أعلى: f أصغر من أو تساوي c·g من n₀ وطالع. وفي السلايدات يمثل أسوأ حالة."
      ],
      [
        "<b>Big-Ω</b> (lower bound): <b>f(n) ≥ c·g(n) for all n ≥ n_{0}</b>. Represents the <b>best case</b>.",
        "Big-Ω حد أدنى: f أكبر من أو تساوي c·g. ويمثل أفضل حالة."
      ],
      [
        "<b>Big-Θ</b> (tight bound): <b>0 ≤ c_{1}g(n) ≤ f(n) ≤ c_{2}g(n)</b> for all n ≥ n_{0}. Represents the <b>average case</b>; exists <b>only when upper and lower bounds have the same growth</b> (not for alternating growth).",
        "Big-Θ حد محكم: c_{1}g(n) ≤ f(n) ≤ c_{2}g(n) من n₀ وطالع، ويمثل الحالة المتوسطة في السلايدات، ويوجد بس إذا الحد الأعلى والأدنى نفس النمو (ما يوجد للدوال المتذبذبة)."
      ],
      [
        "Find Big-O of f(n): keep the <b>dominant term</b>, ignore constants. 3n² + 17n log n + 1000 → <b>O(n²)</b> (tight). It is also O(n³) (loose).",
        "عشان تلقى Big-O: خذ الحد المسيطر واحذف الثوابت. 3n² + 17n log n + 1000 تطلع O(n²) محكم، وتطلع O(n³) بعد بس واسع."
      ],
      [
        "Tight O: fastest-growing dominant term; loose O: any higher term. Tight Ω: dominant term; loose Ω: any lower term. Θ: only if both sides match.",
        "Big-O المحكم هو الحد المسيطر، والواسع أي دالة أعلى نمواً. Big-Ω المحكم هو الحد المسيطر، والواسع أي دالة أدنى نمواً. وΘ موجودة بس إذا الجهتين متطابقة."
      ]
    ],
    "trap": [
      "O(g) is a <b>set</b>: 3n² is O(n²) <b>and</b> O(n³).",
      "Big-O مجموعة، فـ 3n² تنتمي لـ O(n²) و O(n³) بعد."
    ],
    "idx": 6
  },
  {
    "id": "proofs",
    "ch": 2,
    "t": "Proving O, Ω and Θ (finding c and n₀)",
    "ar": "الإثبات وإيجاد c و n₀",
    "pts": [
      [
        "Steps: (1) write the inequality · (2) simplify / compare terms (e.g. log n ≤ n for n ≥ 2) · (3) choose a <b>safe n_{0}</b> · (4) pick <b>c large enough</b> to absorb constants and lower terms.",
        "الخطوات: اكتب المتباينة، قارن الحدود، اختر n₀ آمن، واختر c كبيرة كفاية."
      ],
      [
        "To prove <b>Big-O</b>: <b>overestimate smaller terms</b> with larger ones. To prove <b>Big-Ω</b>: <b>ignore positive smaller terms</b>. To prove <b>Big-Θ</b>: combine both with two constants.",
        "لإثبات O نكبّر الحدود الصغيرة، ولإثبات Ω نهمل الحدود الصغيرة الموجبة، ولـ Θ نجمع الإثباتين."
      ],
      [
        "Prove 3n² + 17n log n + 1000 ∈ O(n²): 3n² ≤ 3n² · 17n log n ≤ 17n² (n ≥ 2) · 1000 ≤ 1000n² (n ≥ 1) → <b>c = 3 + 17 + 1000 = 1020, n_{0} = 2</b>.",
        "إثبات O: ‏3n² ≤ 3n²، و 17n log n ≤ 17n² لما n ≥ 2، و 1000 ≤ 1000n² لما n ≥ 1، فنجمع المعاملات c = 3 + 17 + 1000 = 1020، وناخذ أكبر n₀ = 2."
      ],
      [
        "Prove ∈ Ω(n²): keep dominant 3n² → f(n) ≥ 3n² → <b>c = 3, n_{0} = 0</b>.",
        "إثبات Ω: نخلي الحد المسيطر 3n² بس، فـ f(n) ≥ 3n² ويطلع c = 3 و n₀ = 0."
      ],
      [
        "Prove ∈ Θ(n²): for n ≥ 2: <b>3n² ≤ f(n) ≤ 1020n²</b> (use the larger n_{0}).",
        "إثبات Θ: نجمعهم ونستخدم n₀ الأكبر: 3n² ≤ f ≤ 1020n²."
      ]
    ],
    "trap": [
      "For O, c is the <b>sum</b> of the coefficients; n_{0} is the <b>largest</b> n among the terms.",
      "في O نجمع المعاملات للـ c، وناخذ أكبر n₀."
    ],
    "idx": 7
  },
  {
    "id": "compare",
    "ch": 2,
    "t": "Comparing Functions & Insertion Sort Cases",
    "ar": "مقارنة الدوال وحالات Insertion Sort",
    "pts": [
      [
        "If f(n) = 2n² then <b>Θ = n²</b>; <b>O</b> can be n², n³, n^{k}, 2^{n}, n! (same or bigger); <b>Ω</b> can be n², n log n, n, log n, 1 (same or smaller).",
        "إذا f = 2n²: Θ هي n²، وO أي شي يساويها أو أكبر، وΩ أي شي يساويها أو أصغر."
      ],
      [
        "T/F: n² + n = O(n²) <b>T</b> · 2n = Ω(10n²) <b>F</b> · 2n = O(3n) <b>T</b> · 10 = Θ(log 10) <b>T</b> (both constants) · n = O(10) <b>F</b> · n = Ω(log n²) <b>T</b> · (log n)² = Θ(log n + 5) <b>F</b>.",
        "صح وخطأ من السلايدات: n² + n = O(n²) صح، 2n = Ω(10n²) خطأ، 2n = O(3n) صح، 10 = Θ(log 10) صح لأن الاثنين ثوابت، n = O(10) خطأ، n = Ω(log n²) صح، (log n)² = Θ(log n + 5) خطأ."
      ],
      [
        "Is 3n + 2 in Ω(n²)? <b>No</b> — 3n + 2 grows slower than n². Is 3n + 2 in Θ(n)? <b>Yes</b> (e.g. 3n ≤ 3n + 2 ≤ 5n for n ≥ 1).",
        "3n + 2 مو Ω(n²) لأنها تنمو أبطأ من n²، بس هي Θ(n) لأن 3n ≤ 3n + 2 ≤ 5n لما n ≥ 1."
      ],
      [
        "Big-O practice: 7n² + 25n + 60 → <b>O(n²)</b> · 50n log n + 20n → <b>O(n log n)</b> · 5 log n + 100 → <b>O(log n)</b> · 15 → <b>O(1)</b>.",
        "تمارين Big-O من السلايدات: 7n² + 25n + 60 = O(n²)، و 50n log n + 20n = O(n log n)، و 5 log n + 100 = O(log n)، و 15 = O(1)."
      ],
      [
        "<b>Insertion sort</b>: already sorted → while loop never shifts → <b>O(n)</b> (best). Reverse-sorted → every element shifts all the way → <b>O(n²)</b> (worst).",
        "الترتيب بالإدراج: لو المصفوفة مرتبة أصلاً، حلقة while ما تحرك شي فيطلع O(n) (أفضل حالة). ولو معكوسة، كل عنصر يتحرك لأول المصفوفة فيطلع O(n²) (أسوأ حالة)."
      ]
    ],
    "trap": [
      "(log n)² is <b>not</b> Θ(log n): it grows faster.",
      "(log n)² أسرع من log n، فما هي Θ لها."
    ],
    "idx": 8
  },
  {
    "id": "iter",
    "ch": 3,
    "t": "Iterative Algorithms & Summations",
    "ar": "تحليل الحلقات والمجاميع",
    "pts": [
      [
        "Two types: <b>iterative</b> (for, while, do while) and <b>recursive</b> (function calls itself). Any recursive algorithm can be converted to iterative. With <b>neither iteration nor recursion</b>, runtime is <b>constant</b>.",
        "نوعين: تكرارية (for و while و do while) وذاتية الاستدعاء. وأي خوارزمية ذاتية الاستدعاء نقدر نحولها لتكرارية. وإذا ما فيها لا حلقات ولا استدعاء ذاتي فوقتها ثابت."
      ],
      [
        "Single loop: T(n) = # iterations. Nested loop: <b>inner iterations × outer iterations</b>. Printing w×h rectangle → <b>O(w·h)</b>.",
        "الحلقة الوحدة = عدد التكرارات، والمتداخلة = تكرارات الداخلية × تكرارات الخارجية، ومثال طباعة مستطيل w×h يطلع O(w·h)."
      ],
      [
        "`for i=1..n: for j=1..i` → Σ i = <b>n(n+1)/2 = O(n²)</b>.",
        "الحلقة المثلثية: مجموع i من 1 لـ n = n(n+1)/2 = O(n²)."
      ],
      [
        "Formulas: Σ_{i=1}^{n} 1 = n · Σ i = n(n+1)/2 · Σ i² = n(n+1)(2n+1)/6 · Σ_{i=m}^{n} c = c(n − m + 1) · Σ_{i=0}^{n} a^{i} = (a^{n+1} − 1)/(a − 1), a ≠ 1.",
        "القوانين: مجموع 1 = n، مجموع i = n(n+1)/2، مجموع i² = n(n+1)(2n+1)/6، مجموع ثابت c من m لـ n = c(n − m + 1)، والمتسلسلة الهندسية = (a^{n+1} − 1)/(a − 1) بشرط a ≠ 1."
      ]
    ],
    "trap": [
      "Triangular loop (j ≤ i) is still <b>O(n²)</b>, not O(n).",
      "الحلقة المثلثية برضو O(n²)."
    ],
    "idx": 9
  },
  {
    "id": "recur",
    "ch": 3,
    "t": "Recurrence Relations",
    "ar": "العلاقات التكرارية",
    "pts": [
      [
        "A <b>recurrence</b> is an equation or inequality describing a function in terms of its value on <b>smaller inputs</b>. Arises from recursive calls.",
        "العلاقة التكرارية معادلة (أو متباينة) تعرّف الدالة بقيمتها على مدخلات أصغر، وتطلع لنا لما الخوارزمية تستدعي نفسها."
      ],
      [
        "`funR(n)`: print + if → <b>T(n) = c + T(n − 1)</b> (c = 2 non-recursive ops). The stopping condition is the <b>base case</b>.",
        "funR(n) فيها طباعة وشرط، فـ T(n) = c + T(n − 1) و c = 2. وشرط التوقف اسمه حالة الأساس (base case)."
      ],
      [
        "Factorial: <b>T(n) = 1 if n = 0; T(n − 1) + O(1) if n ≠ 0</b>.",
        "المضروب: T(n) = 1 لما n = 0، و T(n − 1) + O(1) لما n ≠ 0."
      ],
      [
        "T(n) = T(n−1) + n → <b>Θ(n²)</b> (loops to eliminate one item) · T(n) = T(n/2) + c → <b>Θ(log n)</b> (halves) · T(n) = T(n/2) + n → <b>Θ(n)</b> (halves but examines every item) · T(n) = 2T(n/2) + 1 → <b>Θ(n)</b> (two halves, constant work).",
        "جدول العلاقات: T(n−1) + n = Θ(n²) (يمر على الكل ويشيل عنصر)، T(n/2) + c = Θ(log n) (ينصّف)، T(n/2) + n = Θ(n) (ينصّف بس يمر على كل عنصر)، 2T(n/2) + 1 = Θ(n) (نصين وشغل ثابت)."
      ],
      [
        "Solving methods: <b>iteration (back-substitution)</b>, <b>substitution</b> (guess + prove by induction), <b>recursion tree</b>, <b>master method</b>.",
        "طرق الحل: التعويض التكراري، التخمين والإثبات، شجرة الاستدعاء، والمبرهنة الرئيسية."
      ]
    ],
    "trap": [
      "T(n/2) + n is <b>Θ(n)</b>, not Θ(n log n).",
      "T(n/2)+n تطلع Θ(n) مو n log n."
    ],
    "idx": 10
  },
  {
    "id": "backsub",
    "ch": 3,
    "t": "Iteration (Back-Substitution) Method",
    "ar": "طريقة التعويض التكراري",
    "pts": [
      [
        "Steps: (1) write and <b>expand</b> · (2) detect a <b>pattern</b> in k · (3) set the recursive input = <b>base case</b>, solve for k · (4) substitute k → final cost and Big-O.",
        "الخطوات: وسّع، لاحظ النمط بدلالة k، خلي المدخل يساوي حالة الأساس وحل لـ k، ثم عوّض."
      ],
      [
        "T(n) = c + T(n−1): → 2c + T(n−2) → 3c + T(n−3) → pattern <b>kc + T(n−k)</b>; n − k = 1 → k = n − 1 → cn − c + 1 = <b>O(n)</b>.",
        "مثال c + T(n−1): نوسّع 2c + T(n−2) ثم 3c + T(n−3)، والنمط kc + T(n−k)، و n − k = 1 يعني k = n − 1، فالنتيجة cn − c + 1 = O(n)."
      ],
      [
        "T(n) = n + T(n−1), T(1) = 1: → n + (n−1) + (n−2) + … → k = n − 2 → sum 1..n = n(n+1)/2 = <b>O(n²)</b>.",
        "مثال n + T(n−1) و T(1) = 1: نوسّع n + (n−1) + (n−2) + …، و k = n − 2، فالمجموع n(n+1)/2 = O(n²)."
      ],
      [
        "Merge sort T(n) = 2T(n/2) + n: → 4T(n/4) + 2n → 8T(n/8) + 3n → <b>2^{k}T(n/2^{k}) + kn</b>; n/2^{k} = 1 → k = log n → n + n log n = <b>Θ(n log n)</b>.",
        "الدمج 2T(n/2) + n: نوسّع 4T(n/4) + 2n ثم 8T(n/8) + 3n، والنمط 2^{k}T(n/2^{k}) + kn، و n/2^{k} = 1 يعني k = log n، فالنتيجة n + n log n = Θ(n log n)."
      ]
    ],
    "trap": [
      "For halving recurrences: n/2^{k} = 1 → <b>k = log₂ n</b>.",
      "في القسمة على 2: k = log n."
    ],
    "idx": 11
  },
  {
    "id": "rtree",
    "ch": 3,
    "t": "Recursion Tree Method",
    "ar": "طريقة شجرة الاستدعاء",
    "pts": [
      [
        "Visualise the recurrence as a tree; each level = recursive calls. Steps: (1) each recursive call → a <b>subtree</b> · (2) <b>non-recursive cost = root</b> · (3) <b># children = # subproblems</b> · (4) each child has input size subprob_size.",
        "نرسم العلاقة كشجرة وكل مستوى هو استدعاءات: كل استدعاء ذاتي يصير شجرة فرعية، وتكلفة الشغل غير الذاتي هي الجذر، وعدد الأبناء = عدد المسائل الفرعية، وكل ابن مدخله بحجم المسألة الفرعية."
      ],
      [
        "T(n) = 2T(n/2) + cn: level 0 cost <b>cn</b>, level 1: 2·c(n/2) = <b>cn</b>, level 2: 4·c(n/4) = <b>cn</b> … every level costs cn.",
        "في 2T(n/2) + cn: المستوى صفر cn، والأول 2·c(n/2) = cn، والثاني 4·c(n/4) = cn، يعني كل مستوى تكلفته cn."
      ],
      [
        "Height <b>h = log₂ n</b>; # leaves = 2^{log₂ n} = <b>n</b>, last level Θ(n).",
        "الارتفاع log₂ n، وعدد الأوراق 2^{log₂ n} = n، وتكلفة آخر مستوى Θ(n)."
      ],
      [
        "T(n) = Σ level costs = cn·log n + Θ(n) = <b>Θ(n log n)</b>.",
        "T(n) = مجموع تكلفة المستويات = cn·log n + Θ(n) = Θ(n log n)."
      ]
    ],
    "trap": [
      "T(n) = <b>sum of the costs of all levels</b> (cost per level × number of levels).",
      "التكلفة الكلية = مجموع تكلفة كل المستويات."
    ],
    "idx": 12
  },
  {
    "id": "merge",
    "ch": 3,
    "t": "Merge Sort Case Study",
    "ar": "خوارزمية الدمج",
    "pts": [
      [
        "Sorting: input a sequence of n numbers; output a <b>permutation</b> with a_{1}' ≤ a_{2}' ≤ … ≤ a_{n}'.",
        "الترتيب: المدخل n رقم، والمخرج نفس الأرقام بترتيب جديد (permutation) بحيث a_{1}' ≤ a_{2}' ≤ … ≤ a_{n}'."
      ],
      [
        "<b>Internal sort</b>: all data in main memory · <b>External sort</b>: some data on an external slower device · <b>In-place sort</b>: extra space is <b>constant</b>.",
        "الترتيب الداخلي كل البيانات في الذاكرة، الخارجي بعضها في جهاز أبطأ، وin-place يعني المساحة الإضافية ثابتة."
      ],
      [
        "Merge sort: (1) <b>divide</b> into two halves · (2) <b>recursively sort</b> each half · (3) <b>merge</b> the two sorted halves.",
        "الدمج: قسّم لنصين، رتّب كل نص بالاستدعاء الذاتي، وادمجهم."
      ],
      [
        "Recurrence: <b>T(n) = 1 if n = 1; 2T(n/2) + O(n) if n > 1</b> (two subproblems of size n/2, merge is O(n)) → <b>Θ(n log n)</b>.",
        "العلاقة: T(n) = 1 لما n = 1، و 2T(n/2) + O(n) لما n > 1 (مسألتين بحجم n/2 والدمج O(n))، والنتيجة Θ(n log n)."
      ],
      [
        "Space: n, mid → O(1) · L and R halves → <b>O(n)</b> · recursion depth → O(log n) → total <b>O(n)</b>. Merge sort is fast but <b>not in-place</b>.",
        "المساحة: n و mid تاخذ O(1)، ونسخ النصين L و R ياخذ O(n)، وعمق الاستدعاء O(log n)، فالمجموع O(n). يعني الدمج سريع بس مو in-place."
      ]
    ],
    "trap": [
      "Merge sort space = <b>O(n)</b> → <b>not in-place</b>.",
      "الدمج يحتاج O(n) مساحة، فهو مو in-place."
    ],
    "idx": 13
  },
  {
    "id": "master",
    "ch": 4,
    "t": "The Master Theorem",
    "ar": "المبرهنة الرئيسية",
    "pts": [
      [
        "Solves recurrences of the form <b>T(n) = aT(n/b) + f(n)</b>, <b>a ≥ 1, b > 1</b>: a subproblems of size n/b; f(n) = cost of <b>dividing and combining</b>.",
        "تحل العلاقات من الشكل aT(n/b) + f(n): a عدد المسائل، n/b حجمها، وf تكلفة التقسيم والدمج."
      ],
      [
        "Write <b>f(n) = Θ(n^{k} log^{p} n)</b>; find <b>log_{b} a</b>, k, p.",
        "نكتب f(n) بصيغة Θ(n^{k} log^{p} n)، ونحسب log_{b} a و k و p."
      ],
      [
        "<b>Case 1</b>: log_{b} a <b>&gt;</b> k → <b>T(n) = Θ(n^{log_{b} a})</b>.",
        "الحالة 1: إذا log_{b} a أكبر من k، الجواب Θ(n^{log_{b} a})."
      ],
      [
        "<b>Case 2</b>: log_{b} a <b>=</b> k → p &gt; −1: <b>Θ(n^{k} log^{p+1} n)</b> · p = −1: <b>Θ(n^{k} log log n)</b> · p &lt; −1: <b>Θ(n^{k})</b>.",
        "الحالة 2: إذا log_{b} a = k: لو p > −1 الجواب Θ(n^{k} log^{p+1} n)، لو p = −1 الجواب Θ(n^{k} log log n)، ولو p < −1 الجواب Θ(n^{k})."
      ],
      [
        "<b>Case 3</b>: log_{b} a <b>&lt;</b> k → p ≥ 0: <b>Θ(n^{k} log^{p} n)</b> · p &lt; 0: <b>Θ(n^{k})</b>.",
        "الحالة 3: إذا log_{b} a أصغر من k: لو p ≥ 0 الجواب Θ(n^{k} log^{p} n)، ولو p < 0 الجواب Θ(n^{k})."
      ],
      [
        "Examples: 2T(n/2) + n → a=2,b=2,k=1,p=0 → Case 2 → <b>Θ(n log n)</b> · 5T(n/2) + n² → log₂5 ≈ 2.32 &gt; 2 → Case 1 → <b>Θ(n^{2.32})</b> · 12T(n/3) + n³ → log₃12 ≈ 2.26 &lt; 3 → Case 3 → <b>Θ(n³)</b> · 4T(n/2) + n²/log² n → k=2, p=−2 → Case 2, p &lt; −1 → <b>Θ(n²)</b>.",
        "أمثلة السلايدات: 2T(n/2) + n حالة 2 = Θ(n log n)، و 5T(n/2) + n² حالة 1 = Θ(n^{2.32})، و 12T(n/3) + n³ حالة 3 = Θ(n³)، و 4T(n/2) + n²/log² n حالة 2 مع p = −2 = Θ(n²)."
      ]
    ],
    "trap": [
      "n²/log² n means <b>p = −2</b> (negative), not 2.",
      "القسمة على log² n تعني p = −2."
    ],
    "idx": 14
  },
  {
    "id": "dc",
    "ch": 4,
    "t": "Divide & Conquer, Binary Search, Quick Sort",
    "ar": "فرّق تسد والبحث الثنائي والسريع",
    "pts": [
      [
        "Three phases: <b>Divide</b> into smaller subproblems · <b>Conquer</b> each (recursively if large, directly if small) · <b>Combine</b> results. Generic recurrence <b>T(n) = aT(n/b) + f(n)</b>.",
        "ثلاث مراحل: قسّم المشكلة لمسائل أصغر، حل كل مسألة (بالاستدعاء الذاتي لو كبيرة أو مباشرة لو صغيرة)، واجمع النتائج. والعلاقة العامة T(n) = aT(n/b) + f(n)."
      ],
      [
        "Why: reduces large problems into manageable chunks, natural fit for recursion, big gains over brute force. Famous: <b>merge sort, quick sort, binary search, Strassen's, FFT</b>.",
        "فائدته: يقسم المشكلة الكبيرة لأجزاء يسهل التعامل معها، ويناسب الاستدعاء الذاتي، ويحسّن الكفاءة كثير مقارنة بالحل المباشر. ومن أشهر أمثلته: الدمج، والسريع، والبحث الثنائي، وستراسن، و FFT."
      ],
      [
        "<b>Binary search</b> (sorted array): compare key with middle → search left or right half; <b>no real combine</b>. <b>T(n) = T(n/2) + O(1) → O(log n)</b>.",
        "البحث الثنائي على مصفوفة مرتبة: نقارن بالوسط ونروح لنص، وما فيه دمج، والنتيجة O(log n)."
      ],
      [
        "<b>Quick sort</b> splits by <b>values</b> (merge sort splits by <b>positions</b>) using <b>partitioning</b>: left of A[s] ≤ A[s], right ≥ A[s]. Combine: <b>none</b>.",
        "الترتيب السريع يقسّم حسب القيم مو المواقع، باستخدام partition، وما فيه دمج."
      ],
      [
        "Partition (Lomuto): `pivot = A[high]; i = low − 1; for j = low..high−1: if A[j] ≤ pivot: i++, swap A[i], A[j]`; then swap A[i+1], A[high]; return i+1.",
        "خطوات Lomuto: الـ pivot = A[high] و i = low − 1، ولكل j من low لـ high − 1 إذا A[j] ≤ pivot نزيد i ونبدّل A[i] مع A[j]، وفي الآخر نبدّل A[i+1] مع A[high] ونرجّع i + 1."
      ],
      [
        "Quick sort time: best (pivot in middle) 2T(n/2) + O(n) → <b>Ω(n log n)</b>; worst (pivot largest/smallest) T(n−1) + O(n) → <b>O(n²)</b>. Space <b>Ω(log n)</b>, <b>O(n)</b>.",
        "الوقت: أفضل حالة (الـ pivot بالنص) 2T(n/2) + O(n) = Ω(n log n)، وأسوأ حالة (الـ pivot أكبر أو أصغر عنصر) T(n−1) + O(n) = O(n²). والمساحة Ω(log n) و O(n)."
      ]
    ],
    "trap": [
      "Quick sort: <b>no combine</b> step; merge sort: <b>no work on divide</b>, all in merge.",
      "السريع ما فيه مرحلة دمج."
    ],
    "idx": 15
  },
  {
    "id": "sorts",
    "ch": 4,
    "t": "Sorting Algorithms Comparison",
    "ar": "مقارنة خوارزميات الترتيب",
    "pts": [
      [
        "<b>Bubble</b>: best O(n), avg/worst O(n²), space O(1), stable, not D&C — small or nearly-sorted arrays.",
        "الفقاعي: أفضل حالة O(n)، والمتوسط والأسوأ O(n²)، مساحة O(1)، مستقر، ومو فرّق تسد. يناسب المصفوفات الصغيرة أو شبه المرتبة."
      ],
      [
        "<b>Insertion</b>: best O(n), avg/worst O(n²), O(1), stable, not D&C — adaptive, good for nearly-sorted.",
        "الإدراج: أفضل حالة O(n)، والمتوسط والأسوأ O(n²)، مساحة O(1)، مستقر، ومو فرّق تسد. يتكيّف وممتاز للمصفوفات شبه المرتبة."
      ],
      [
        "<b>Merge</b>: O(n log n) in all cases, space <b>O(n)</b>, <b>stable</b>, <b>D&C</b> — guaranteed but needs extra memory.",
        "الدمج: O(n log n) في كل الحالات، مساحة O(n)، مستقر، وفرّق تسد. مضمون بس يحتاج ذاكرة إضافية."
      ],
      [
        "<b>Quick</b>: best/avg O(n log n), worst <b>O(n²)</b>, space O(log n) avg / O(n) worst, <b>not stable</b>, <b>D&C</b> — fast in practice, in-place, pivot critical.",
        "السريع: أفضل ومتوسط O(n log n)، أسوأ O(n²)، مساحة O(log n) بالمتوسط و O(n) بالأسوأ، مو مستقر، وفرّق تسد. سريع عملياً و in-place، واختيار الـ pivot مهم."
      ],
      [
        "<b>Heap</b>: O(n log n) all cases, <b>O(1)</b>, not stable, <b>not D&C</b> — robust, slower constants than quick.",
        "الكومة: O(n log n) في كل الحالات، مساحة O(1)، مو مستقر، ومو فرّق تسد. قوي ومضمون بس ثوابته أبطأ من السريع."
      ],
      [
        "Trade-off: <b>Merge</b> (fast + stable, O(n) space) vs <b>Quick</b> (fast + in-place, unstable). Only merge and quick are D&C.",
        "المقارنة: الدمج (سريع ومستقر بس مساحته O(n)) مقابل السريع (سريع و in-place بس مو مستقر). والدمج والسريع بس هم فرّق تسد."
      ]
    ],
    "trap": [
      "Heap sort is <b>not</b> divide-and-conquer.",
      "الـ Heap sort مو من فرّق تسد."
    ],
    "idx": 16
  },
  {
    "id": "matrix",
    "ch": 4,
    "t": "Matrix Multiplication & Strassen",
    "ar": "ضرب المصفوفات",
    "pts": [
      [
        "c_{ij} = Σ_{k} a_{ik}·b_{kj}. <b>Classical</b>: three nested loops → <b>O(mnl)</b>, or <b>O(n³)</b> square; space <b>O(ml)</b> / O(n²).",
        "c_{ij} = مجموع a_{ik}·b_{kj}. الطريقة العادية ثلاث حلقات: O(mnl) أو O(n³) للمربعة، والمساحة O(ml) أو O(n²)."
      ],
      [
        "<b>Recursive (naïve D&C)</b>: split into 4 submatrices n/2 × n/2, <b>8 products</b>: <b>T(n) = 8T(n/2) + 4n²</b> → master → <b>O(n³)</b>. Space <b>O(n²)</b>. No asymptotic improvement.",
        "التقسيم العادي: 4 مصفوفات فرعية n/2 × n/2 و 8 ضربات: 8T(n/2) + 4n² وتطلع O(n³) بالمبرهنة الرئيسية، والمساحة O(n²)، يعني ما تحسّن الرتبة."
      ],
      [
        "<b>Strassen</b>: <b>7 multiplications</b> (M1…M7) instead of 8: <b>T(n) = 7T(n/2) + 4n²</b> → <b>O(n^{log₂7}) ≈ O(n^{2.81})</b>. Space <b>O(n²)</b>.",
        "ستراسن: 7 ضربات (M1 لـ M7) بدل 8: 7T(n/2) + 4n² فتطلع O(n^{log₂7}) ≈ O(n^{2.81})، والمساحة O(n²)."
      ],
      [
        "Strassen improves <b>time but not space</b>; more additions/subtractions (overhead, higher constants, less stable). <b>First</b> algorithm faster than cubic. Modern ones reach exponent &lt; 2.4.",
        "ستراسن يحسّن الوقت مو المساحة، وفيه جمع وطرح أكثر (overhead وثوابت أعلى وأقل استقرار). وهو أول خوارزمية أسرع من n³، والحديثة نزلت الأس لأقل من 2.4."
      ]
    ],
    "trap": [
      "8 products → n³; <b>7</b> products → n^{2.81}.",
      "8 ضربات n³، و7 ضربات n^2.81."
    ],
    "idx": 17
  },
  {
    "id": "whyrand",
    "ch": 5,
    "t": "Why Randomness? Las Vegas vs Monte Carlo",
    "ar": "ليش العشوائية وأنواعها",
    "pts": [
      [
        "(1) <b>Breaking ties and symmetry</b>: deterministic tie-breaking is predictable → worst-case inputs; random pivot avoids O(n²) on sorted arrays.",
        "(1) كسر التعادل والتماثل: الاختيار الثابت متوقع، فتقدر مدخلات معيّنة تطيّحك لأسوأ حالة، والـ pivot العشوائي يتجنب O(n²) على المصفوفات المرتبة."
      ],
      [
        "(2) <b>Avoiding adversarial inputs</b>: behaviour unpredictable (e.g. randomized hash functions reduce collisions).",
        "(2) تفادي المدخلات العدائية: السلوك ما يمكن توقعه، مثل دوال hash العشوائية اللي تقلل التصادمات."
      ],
      [
        "(3) <b>Reducing complexity</b>: randomized approximation – \"good enough\" answers faster (approximate counting, randomized rounding, min-cut). (4) <b>Simplicity & practicality</b> (load balancing \"power of two choices\").",
        "(3) تقليل التعقيد: الخوارزميات التقريبية العشوائية تعطي جواب «كافي» أسرع (العد التقريبي، والتقريب العشوائي، و min-cut). (4) البساطة والعملية: أسهل وأسرع بالمتوسط (توزيع الحمل بـ power of two choices)."
      ],
      [
        "<b>Las Vegas</b>: <b>always correct</b>; runtime varies. Key metric: <b>expected running time</b>. Example: randomized quicksort.",
        "لاس فيقاس: الجواب صحيح دايماً، والوقت متغير، ونقيسه بالوقت المتوقع."
      ],
      [
        "<b>Monte Carlo</b>: <b>bounded time</b>, answer may be <b>incorrect with small probability</b>. Key metric: <b>probability of error</b> (reduced by repetition).",
        "مونت كارلو: الوقت محدود، بس الجواب ممكن يغلط باحتمال صغير، ونقلل الخطأ بالتكرار."
      ]
    ],
    "trap": [
      "Las Vegas = always <b>correct</b>; Monte Carlo = always <b>fast</b>.",
      "لاس فيقاس دايماً صح، ومونت كارلو دايماً سريع."
    ],
    "idx": 18
  },
  {
    "id": "rquick",
    "ch": 5,
    "t": "Randomized Quicksort",
    "ar": "الترتيب السريع العشوائي",
    "pts": [
      [
        "Deterministic worst case: pivot always smallest/largest → <b>T(n) = T(n−1) + O(n) = O(n²)</b> (e.g. sorted array with first-element pivot). Best: <b>2T(n/2) + O(n) = O(n log n)</b>.",
        "السريع العادي: أسوأ حالة لما الـ pivot دايماً أصغر أو أكبر عنصر T(n−1) + O(n) = O(n²)، مثل مصفوفة مرتبة والـ pivot أول عنصر. وأفضل حالة 2T(n/2) + O(n) = O(n log n)."
      ],
      [
        "Solution: <b>pick the pivot randomly</b> — equally likely to be any of the n elements; balanced partitions become probable, consistently unbalanced ones <b>exponentially unlikely</b>.",
        "الحل: نختار الـ pivot عشوائياً، فكل عنصر من الـ n له نفس الاحتمال، والتقسيم المتوازن يصير هو المحتمل، والتقسيم السيء باستمرار احتماله يقل بشكل أسي."
      ],
      [
        "`i = RANDOM(low, high); swap A[i], A[high]; p = Partition(A, low, high)` then recurse on both sides. Partition is <b>O(n)</b>.",
        "نختار عنصر عشوائي، نبدله مع الأخير، ثم partition عادي."
      ],
      [
        "Expected comparisons: E[C(n)] = Σ P(i & j compared), P = 2/(j − i + 1) → <b>Θ(n log n)</b>. Each element is compared a logarithmic number of times on average.",
        "عدد المقارنات المتوقع: E[C(n)] = مجموع احتمالات المقارنة، و P(i و j يتقارنون) = 2/(j − i + 1)، فالمجموع Θ(n log n). وكل عنصر يتقارن عدد لوغاريتمي من المرات بالمتوسط."
      ],
      [
        "Pivot strategies: <b>first</b> / <b>last</b> element → worst O(n²), bad on sorted input · <b>median-of-three</b> → better in practice, not adversarially robust · <b>random</b> → O(n²) worst but O(n log n) <b>expected</b>, robust.",
        "طرق اختيار الـ pivot: الأول والأخير أسوأ حالتهم O(n²) وسيئين للمدخلات المرتبة. الوسيط من ثلاثة أحسن عملياً بس ممكن يُستغل. والعشوائي أسوأه O(n²) بس المتوقع O(n log n)، وقوي ضد المدخلات العدائية."
      ],
      [
        "Even randomized quicksort <b>can</b> hit O(n²), but with very low probability. It is a <b>Las Vegas</b> algorithm.",
        "حتى العشوائي ممكن يوصل O(n²)، بس احتماله ضئيل جداً. وهو من نوع لاس فيقاس."
      ]
    ],
    "trap": [
      "Randomized quicksort is <b>Las Vegas</b> (always sorts correctly).",
      "العشوائي من نوع لاس فيقاس لأنه يرتب صح دايماً."
    ],
    "idx": 19
  },
  {
    "id": "qselect",
    "ch": 5,
    "t": "Randomized Selection (Quickselect)",
    "ar": "الاختيار السريع",
    "pts": [
      [
        "Problem: find the <b>k-th smallest</b> element in an unsorted array. Pick a random pivot, partition, <b>recurse only into the side containing k</b>.",
        "نبي العنصر رقم k من الأصغر: نختار pivot عشوائي، نقسّم، ونكمل في جهة وحدة بس."
      ],
      [
        "`if k == p: return A[p]; elif k < p: left side; else: right side`. k is a <b>global index</b>.",
        "إذا k == p نرجّع A[p]، وإذا k < p نكمل في اليسار، وإلا في اليمين. و k هنا موقع عام (global index)."
      ],
      [
        "T(n) = n + max{T(|X1|), T(|X2|)}. Worst (one side empty): <b>n + T(n−1) = Θ(n²)</b>. Best (balanced): <b>O(n) + T(n/2) = Θ(n)</b>. <b>Expected: O(n)</b>.",
        "T(n) = n + max{T(|X1|), T(|X2|)}. أسوأ حالة (جهة فاضية كل مرة) n + T(n−1) = Θ(n²)، وأفضل حالة (متوازن) O(n) + T(n/2) = Θ(n)، والمتوقع O(n)."
      ],
      [
        "Applications: <b>median finding</b>, order statistics, data sampling. Practice: 4th smallest (k = 3, 0-based) of [2, 3, 1, 9, 7, 6, 10, 5] → <b>5</b>.",
        "استخداماته: إيجاد الوسيط، و order statistics، وأخذ العينات. ومثال السلايد: رابع أصغر عنصر (k = 3) في [2, 3, 1, 9, 7, 6, 10, 5] = 5."
      ],
      [
        "Common mistakes: off-by-one on k · wrong k semantics · not randomizing the pivot · slicing arrays (keep low/high) · ignoring duplicates (3-way variant).",
        "الأخطاء الشائعة: خطأ بواحد في k (0-based أو 1-based)، وفهم k غلط، وعدم اختيار pivot عشوائي، ونسخ المصفوفات بدل استخدام low و high، وتجاهل القيم المكررة (الحل تقسيم ثلاثي)."
      ],
      [
        "Why randomized wins: <b>simplicity</b>, <b>speed</b>, <b>adversarial robustness</b>, <b>scalability</b>, <b>tunable guarantees</b>. Quickselect is <b>Las Vegas</b>.",
        "ليش العشوائية تفوز: بساطة، سرعة، مقاومة للمدخلات السيئة، توسّع، وضمانات تتحكم فيها."
      ]
    ],
    "trap": [
      "Quickselect recurses on <b>one</b> side → expected <b>O(n)</b>, not n log n.",
      "الاختيار السريع يروح لجهة وحدة، فالمتوقع O(n)."
    ],
    "idx": 20
  }
];

export const Q = [
  [
    1,
    "algo",
    "An algorithm is:",
    [
      "An unambiguous step-by-step procedure for solving a problem in a finite amount of time",
      "Any computer program",
      "A programming language",
      "A data structure"
    ],
    "الخوارزمية خطوات واضحة بدون غموض تحل مشكلة لمدخلات معرّفة وتنتهي بوقت محدود.",
    "An algorithm is an unambiguous, step-by-step procedure that solves a problem for a defined input set and terminates in finite time.",
    1,
    0
  ],
  [
    1,
    "algo",
    "Which is NOT a required property of an algorithm?",
    [
      "It must be written in C",
      "Each step is clear and unambiguous",
      "The input set is defined",
      "It terminates after a finite number of steps"
    ],
    "الشروط: خطوات واضحة، ومدخلات معرّفة، وتنتهي. ولغة البرمجة ما لها دخل.",
    "The required properties are clear steps, a defined input set, and termination. The programming language is irrelevant.",
    0,
    0
  ],
  [
    1,
    "algo",
    "Euclid's algorithm computes:",
    [
      "The greatest common divisor of two integers",
      "The factorial of n",
      "The sum of an array",
      "The k-th smallest element"
    ],
    "خوارزمية إقليدس تحسب gcd(m, n) بتكرار استبدال (m, n) بـ (n, m mod n).",
    "Euclid's algorithm computes gcd(m, n) by repeatedly replacing (m, n) with (n, m mod n).",
    0,
    0
  ],
  [
    1,
    "algo",
    "In Euclid's algorithm, the loop runs while:",
    [
      "n ≠ 0",
      "m ≠ 0",
      "m > n",
      "r = 0"
    ],
    "الحلقة تستمر طول ما n ≠ 0، ولما تصير n صفر يكون m هو القاسم المشترك الأكبر.",
    "The loop continues while n ≠ 0; when n becomes 0, m holds the gcd.",
    0,
    1
  ],
  [
    1,
    "algo",
    "Correctness of an algorithm for a large input set is proved using:",
    [
      "Mathematical induction",
      "A stopwatch",
      "Random testing only",
      "Big-O notation"
    ],
    "المدخلات الصغيرة نتأكد منها بأمثلة، بس المدخلات الكبيرة لازم نثبتها بالاستقراء الرياضي.",
    "Small inputs can be checked with use cases, but large input sets require a proof by mathematical induction.",
    0,
    0
  ],
  [
    1,
    "algo",
    "Which is a criterion in the \"algorithm analysis\" step of the design process?",
    [
      "Efficiency, simplicity, generality",
      "Color, font, size",
      "Compiler, IDE, OS",
      "Price, license, vendor"
    ],
    "في مرحلة التحليل نقيّم الخوارزمية بالكفاءة والبساطة والعمومية.",
    "In the analysis step, an algorithm is judged by efficiency, simplicity, and generality.",
    0,
    0
  ],
  [
    1,
    "why",
    "The key goal of algorithm analysis is to find the most efficient algorithm:",
    [
      "Regardless of the machine",
      "For one specific computer",
      "Using the fastest hardware",
      "Using a stopwatch"
    ],
    "نبي أكفأ خوارزمية بغض النظر عن نوع الجهاز.",
    "We want the most efficient algorithm independent of any particular machine.",
    0,
    0
  ],
  [
    1,
    "why",
    "Time complexity describes:",
    [
      "How the running time increases as the input size increases",
      "The exact seconds on a specific machine",
      "Memory usage",
      "The number of lines of code"
    ],
    "تعقيد الوقت يقيس كيف يزيد وقت التشغيل لما يكبر حجم المدخلات n.",
    "Time complexity measures how running time grows as input size n grows.",
    1,
    0
  ],
  [
    1,
    "why",
    "Space complexity describes:",
    [
      "How the required memory increases as the input size increases",
      "How fast the CPU is",
      "The running time",
      "The size of the source file"
    ],
    "تعقيد المساحة يقيس كيف تزيد الذاكرة المطلوبة لما يكبر حجم المدخلات n.",
    "Space complexity measures how required memory grows as input size n grows.",
    1,
    0
  ],
  [
    1,
    "why",
    "For a graph, the input size is measured by:",
    [
      "Vertices + edges",
      "Degree",
      "Number of bits",
      "Number of pixels"
    ],
    "حجم الـ graph يُقاس بعدد الرؤوس + عدد الحواف.",
    "A graph's size is measured by its number of vertices plus edges.",
    0,
    0
  ],
  [
    1,
    "why",
    "For a polynomial, the input size is its:",
    [
      "Degree",
      "Number of vertices",
      "Number of edges",
      "Array length"
    ],
    "حجم كثيرة الحدود هو درجتها.",
    "A polynomial's input size is its degree.",
    0,
    0
  ],
  [
    1,
    "why",
    "Why not measure running time with a stopwatch?",
    [
      "It depends on hardware, compiler, and coding style and is not portable",
      "It is too accurate",
      "It counts basic operations",
      "It is required by Big-O"
    ],
    "ساعة التوقيت تعتمد على الهاردوير والمترجم وطريقة كتابة الكود، فما تنفع بين الأجهزة، عشان كذا نعدّ العمليات الأساسية.",
    "Stopwatch timing depends on hardware, compiler, and coding style, so it is not portable. We count basic operations instead.",
    1,
    0
  ],
  [
    1,
    "timec",
    "In step counting, each simple operation (assignment, comparison, arithmetic) costs:",
    [
      "1 step",
      "0 steps",
      "n steps",
      "log n steps"
    ],
    "كل عملية بسيطة (إسناد، مقارنة، عملية حسابية، وصول لعنصر في المصفوفة) تكلف خطوة وحدة.",
    "Each simple operation (assignment, comparison, arithmetic, array access) costs 1 step.",
    0,
    0
  ],
  [
    1,
    "timec",
    "The step count of a loop is:",
    [
      "(steps inside) × (number of iterations)",
      "Always 1",
      "Steps inside + iterations",
      "The square of iterations"
    ],
    "تكلفة الحلقة = (الخطوات داخلها) × (عدد التكرار).",
    "A loop costs (steps inside the body) × (number of iterations).",
    1,
    0
  ],
  [
    1,
    "timec",
    "Nested loops are counted by:",
    [
      "Multiplying",
      "Adding",
      "Taking the maximum",
      "Ignoring the inner loop"
    ],
    "الحلقات المتداخلة نضربها: تكرارات الداخلية × تكرارات الخارجية.",
    "Nested loops multiply: inner iterations × outer iterations.",
    1,
    0
  ],
  [
    1,
    "timec",
    "An algorithm that divides the input by x each step contributes:",
    [
      "log_{x} n",
      "x·n",
      "n/x",
      "n^{x}"
    ],
    "إذا قسمنا المدخل على x كل خطوة، يصير عدد الخطوات log n بأساس x.",
    "Dividing the input by x each step gives log base x of n steps.",
    0,
    0
  ],
  [
    1,
    "timec",
    "The summation algorithm (`sum=0`, loop of n doing `sum=sum+i`, `return sum`) has total steps:",
    [
      "2n + 2",
      "n + 1",
      "3n + 4",
      "n²"
    ],
    "1 (sum = 0) + 2n (الحلقة) + 1 (return) = 2n + 2.",
    "1 (sum = 0) + 2n (loop) + 1 (return) = 2n + 2.",
    1,
    0
  ],
  [
    1,
    "timec",
    "Time complexity T(p) = the total number of steps program p executes for an input of size n. Count the steps of this function (each declaration, assignment, comparison and return = 1 step). What is its time complexity T(p)? `int sum(int A[], int n) { int sum = 0, i;  for (i = 0; i < n; i++)  sum = sum + A[i];  return sum; }`",
    [
      "3n + 4",
      "2n + 2",
      "n + 3",
      "n²"
    ],
    "T(p) يعني عدد الخطوات اللي ينفذها البرنامج لمدخل حجمه n. سطر التعريف خطوة وحدة. رأس الحلقة: الإسناد الأول خطوة، والمقارنة تتكرر (n+1) مرة، والزيادة تتكرر n مرة. جسم الحلقة يتكرر n مرة، والـ return خطوة. فالتعقيد الزمني T(p) = 3n + 4، يعني خطي O(n).",
    "T(p) = number of steps executed for input size n. Declaration `int sum = 0, i` = 1; loop header: i = 0 once (1) + comparison i < n runs n+1 times + i++ runs n times; body runs n times; return = 1. Total: T(p) = 1 + [1 + (n+1) + n] + n + 1 = 3n + 4, which is linear time complexity, O(n).",
    1,
    0
  ],
  [
    1,
    "timec",
    "How many times is the test `i < n` executed in `for(i=0;i<n;i++)`?",
    [
      "n + 1",
      "n",
      "n − 1",
      "2n"
    ],
    "الشرط i < n يتحقق n مرة، ومرة زيادة لما يفشل ويطلع: n + 1.",
    "The test i < n runs n times true and once more when it fails: n + 1.",
    1,
    0
  ],
  [
    1,
    "timec",
    "`return a+b*c+(a+b+c)/(a+b)+4` has:",
    [
      "Constant time complexity",
      "Linear time complexity",
      "Quadratic time complexity",
      "Logarithmic time complexity"
    ],
    "ما فيه حلقات ولا استدعاء ذاتي، فالوقت ثابت.",
    "There is no loop or recursion, so the running time is constant.",
    0,
    0
  ],
  [
    1,
    "spacec",
    "Space complexity is written as:",
    [
      "S(P) = C + S_{p}",
      "S(P) = n²",
      "S(P) = T(n) + 1",
      "S(P) = log n"
    ],
    "المساحة = جزء ثابت C + جزء متغير Sp.",
    "Space = fixed part C + variable part Sp.",
    0,
    0
  ],
  [
    1,
    "spacec",
    "The focus of space analysis is on:",
    [
      "The variable part",
      "The fixed part",
      "The program instructions",
      "The constants"
    ],
    "الجزء الثابت ما يتغير، فالتحليل يركّز على الجزء المتغير اللي يكبر مع n.",
    "The fixed part is constant, so analysis focuses on the variable part that grows with n.",
    0,
    0
  ],
  [
    1,
    "spacec",
    "A 2D array of size n×n requires space:",
    [
      "n²",
      "n",
      "2n",
      "log n"
    ],
    "مصفوفة n × n فيها n² عنصر.",
    "An n × n array stores n² elements.",
    1,
    0
  ],
  [
    1,
    "spacec",
    "Do loops increase space?",
    [
      "No, they reuse the same variables",
      "Yes, by n",
      "Yes, by n²",
      "Only nested loops"
    ],
    "الحلقات تعيد استخدام نفس المتغيرات، فما تضيف مساحة.",
    "Loops reuse the same variables, so they add no extra space.",
    1,
    0
  ],
  [
    1,
    "spacec",
    "Space for recursion is:",
    [
      "Depth × local memory per call",
      "Always constant",
      "Number of loops",
      "n²"
    ],
    "كل استدعاء شغّال يحتفظ بمتغيراته، فالمساحة = عمق الاستدعاء × ذاكرة كل استدعاء.",
    "Each active call keeps its own locals, so space = recursion depth × memory per call.",
    1,
    0
  ],
  [
    1,
    "spacec",
    "`Algorithm sum(a,b,c){ a=10; b=20; c=a+b; }` has space:",
    [
      "3 units",
      "n units",
      "0 units",
      "n + 3 units"
    ],
    "ثلاث متغيرات بسيطة (a و b و c) = 3 وحدات، وما فيه جزء متغير.",
    "Three simple variables (a, b, c) give 3 units with no variable part.",
    0,
    0
  ],
  [
    1,
    "spacec",
    "`int sum(int A[], int n)` (array A, n, sum, i) needs:",
    [
      "n + 3 words",
      "3 words",
      "2n words",
      "n² words"
    ],
    "المصفوفة A (n) + n (1) + sum (1) + i (1) = n + 3.",
    "Array A (n) + n (1) + sum (1) + i (1) = n + 3 words.",
    1,
    0
  ],
  [
    1,
    "spacec",
    "An algorithm receives an array A of n integers and a value x, and uses one loop counter i: `for i = 0 to n − 1: if A[i] == x: return true` then `return false`. Using the space-counting rules (array of size n → n units, each simple variable → 1 unit), what is its total space?",
    [
      "2 + n",
      "3 + 2n",
      "1",
      "n²"
    ],
    "المصفوفة A حجمها n فتاخذ n، والمتغير x وحدة، وعداد الحلقة i وحدة، فالمجموع n + 2.",
    "Array A takes n units, x takes 1 and the counter i takes 1: total n + 2.",
    0,
    0
  ],
  [
    1,
    "spacec",
    "Which belongs to the VARIABLE part of space?",
    [
      "Arrays and the recursion call stack",
      "Constants",
      "Program instructions",
      "Fixed-size variables"
    ],
    "المصفوفات وستاك الاستدعاءات والتراكيب الديناميكية تكبر مع n، فهي الجزء المتغير.",
    "Arrays, the call stack, and dynamic structures grow with n, so they are the variable part.",
    0,
    0
  ],
  [
    1,
    "cases",
    "The best case:",
    [
      "Gives the minimum steps and a lower bound",
      "Gives the maximum steps",
      "Assumes random input",
      "Is always O(1)"
    ],
    "أفضل حالة هي أسرع مدخل: أقل عدد خطوات، وتعطي الحد الأدنى.",
    "The best case is the fastest input: minimum steps, giving a lower bound.",
    1,
    0
  ],
  [
    1,
    "cases",
    "The worst case:",
    [
      "Is an absolute guarantee and an upper bound",
      "Is a lower bound",
      "Assumes random input",
      "Is the fastest input"
    ],
    "أسوأ حالة هي أبطأ مدخل: أكثر عدد خطوات، وتعطي الحد الأعلى والضمان.",
    "The worst case is the slowest input: maximum steps, giving an upper bound and a guarantee.",
    1,
    0
  ],
  [
    1,
    "cases",
    "The average case:",
    [
      "Assumes the input is random and gives a prediction",
      "Gives a guarantee",
      "Is the minimum",
      "Is always equal to the worst case"
    ],
    "الحالة المتوسطة تفترض المدخلات عشوائية وتتوقع الوقت المعتاد.",
    "The average case assumes random input and predicts typical running time.",
    0,
    0
  ],
  [
    1,
    "cases",
    "Which is NOT a reason for using worst-case analysis?",
    [
      "It is always equal to the best case",
      "It gives a guarantee",
      "It is safer for critical systems",
      "It is simpler than average-case analysis"
    ],
    "تحليل أسوأ حالة يعطي ضمان، وأأمن، وأبسط. وهو ما يساوي أفضل حالة.",
    "Worst-case analysis gives a guarantee, is safer, and is simpler. It is not equal to the best case.",
    0,
    0
  ],
  [
    1,
    "cases",
    "Linear search: the best case occurs when:",
    [
      "x is the first element",
      "x is not in the array",
      "x is the last element",
      "The array is sorted"
    ],
    "إذا x موجود في A[0]، البحث الخطي يوقف بعد مقارنة وحدة: O(1).",
    "If x is at A[0], linear search stops after one comparison: O(1).",
    1,
    0
  ],
  [
    1,
    "cases",
    "Linear search worst case time is:",
    [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "إذا x آخر عنصر أو مو موجود، البحث الخطي يمر على كل الـ n عنصر: O(n).",
    "If x is last or absent, linear search checks all n elements: O(n).",
    1,
    0
  ],
  [
    1,
    "growth",
    "In asymptotic analysis we ignore:",
    [
      "Constants and lower-order terms",
      "The dominant term",
      "The input size",
      "The growth rate"
    ],
    "التحليل التقاربي يهتم بمعدل النمو بس، ويتجاهل الثوابت والحدود الأصغر.",
    "Asymptotic analysis keeps only the growth rate, ignoring constants and lower-order terms.",
    1,
    0
  ],
  [
    1,
    "growth",
    "Which order is correct (slowest to fastest growth)?",
    [
      "1 < log n < n < n log n < n² < 2^{n} < n!",
      "1 < n < log n < n² < n log n",
      "log n < 1 < n < n!",
      "n! < 2^{n} < n²"
    ],
    "ترتيب النمو: 1 < log n < n < n log n < n² < n³ < 2ⁿ < n!.",
    "The order of growth is 1 < log n < n < n log n < n² < n³ < 2ⁿ < n!.",
    1,
    0
  ],
  [
    1,
    "growth",
    "Binary search is an example of:",
    [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "البحث الثنائي ينصّف مساحة البحث كل خطوة: O(log n).",
    "Binary search halves the search space each step: O(log n).",
    0,
    0
  ],
  [
    1,
    "growth",
    "Merge sort and quick sort (average) are:",
    [
      "O(n log n)",
      "O(n)",
      "O(n²)",
      "O(log n)"
    ],
    "الدمج والسريع بالمتوسط O(n log n).",
    "Merge sort and average quicksort run in O(n log n).",
    0,
    0
  ],
  [
    1,
    "growth",
    "Bubble sort / nested loops are:",
    [
      "O(n²)",
      "O(n log n)",
      "O(log n)",
      "O(2^{n})"
    ],
    "حلقتين متداخلة على n (مثل الفقاعي) تعطي O(n²).",
    "Two nested loops over n (as in bubble sort) give O(n²).",
    0,
    0
  ],
  [
    1,
    "growth",
    "O(2^{n}) and O(n!) are described as:",
    [
      "Intractable",
      "Linear",
      "Logarithmic",
      "Constant"
    ],
    "النمو الأسي والمضروب غير عملي (intractable) لما n تكبر.",
    "Exponential and factorial growth are intractable for large n.",
    0,
    0
  ],
  [
    1,
    "growth",
    "Which grows faster: n log n or n²?",
    [
      "n²",
      "n log n",
      "They are equal",
      "Depends on the constant"
    ],
    "n² ÷ (n log n) = n / log n وتكبر بلا حدود، فـ n² أسرع.",
    "n² / (n log n) = n / log n → ∞, so n² grows faster.",
    1,
    0
  ],
  [
    1,
    "growth",
    "Algorithm analysis does NOT answer:",
    [
      "How much resource is used to represent n pieces of data",
      "How time grows with n",
      "How memory grows with n",
      "Which algorithm is more efficient"
    ],
    "التحليل يقيس كيف تنمو الموارد، مو كم ذاكرة نحتاج عشان نمثّل البيانات نفسها.",
    "Analysis measures how resources grow, not how much memory is needed just to represent the data.",
    0,
    0
  ],
  [
    1,
    "bigo",
    "f(n) = O(g(n)) means there exist c and n_{0} such that:",
    [
      "f(n) ≤ c·g(n) for all n ≥ n_{0}",
      "f(n) ≥ c·g(n) for all n ≥ n_{0}",
      "f(n) = g(n)",
      "c_{1}g(n) ≤ f(n) ≤ c_{2}g(n)"
    ],
    "Big-O: f(n) ≤ c·g(n) لكل n ≥ n₀ (حد أعلى).",
    "Big-O: f(n) ≤ c·g(n) for all n ≥ n₀ (upper bound).",
    1,
    0
  ],
  [
    1,
    "bigo",
    "f(n) = Ω(g(n)) means:",
    [
      "f(n) ≥ c·g(n) for all n ≥ n_{0}",
      "f(n) ≤ c·g(n)",
      "f(n) < g(n) always",
      "f(n) = c"
    ],
    "Big-Ω: f(n) ≥ c·g(n) لكل n ≥ n₀ (حد أدنى).",
    "Big-Ω: f(n) ≥ c·g(n) for all n ≥ n₀ (lower bound).",
    1,
    0
  ],
  [
    1,
    "bigo",
    "Big-Θ is a:",
    [
      "Tight bound",
      "Upper bound only",
      "Lower bound only",
      "Loose bound"
    ],
    "Big-Θ يحصر f من فوق ومن تحت بنفس الدالة g: حد محكم.",
    "Big-Θ bounds f from above and below by the same g: a tight bound.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "In this course, Big-O is used to describe the ___ case.",
    [
      "Worst",
      "Best",
      "Average",
      "Random"
    ],
    "حسب اصطلاح السلايدات، Big-O مرتبط بأسوأ حالة.",
    "In the slides' convention, Big-O is associated with the worst case.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "In this course, Big-Ω is used to describe the ___ case.",
    [
      "Best",
      "Worst",
      "Average",
      "Expected"
    ],
    "حسب اصطلاح السلايدات، Big-Ω مرتبط بأفضل حالة.",
    "In the slides' convention, Big-Ω is associated with the best case.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "In this course, Big-Θ is used to describe the ___ case.",
    [
      "Average",
      "Best",
      "Worst",
      "Amortized"
    ],
    "حسب اصطلاح السلايدات، Big-Θ مرتبط بالحالة المتوسطة.",
    "In the slides' convention, Big-Θ is associated with the average case.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "Big-Θ exists only when:",
    [
      "The upper and lower bounds have the same growth function",
      "The function is constant",
      "The function is alternating",
      "n_{0} = 0"
    ],
    "Θ ما توجد إلا إذا الحد الأعلى والأدنى لهم نفس معدل النمو.",
    "Θ exists only when the upper and lower bounds have the same growth rate.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "f(n) = 3n² + 17n log n + 1000. Which is true? A: f is O(n²). B: f is O(n³).",
    [
      "Both A and B",
      "A only",
      "B only",
      "Neither"
    ],
    "O مجموعة حدود عليا: 3n² تنتمي لـ O(n²) و O(n³) بعد.",
    "O is a set of upper bounds: 3n² is in O(n²) and also in O(n³).",
    1,
    0
  ],
  [
    1,
    "bigo",
    "The TIGHT Big-O of 3n² + 17n log n + 1000 is:",
    [
      "O(n²)",
      "O(n log n)",
      "O(n³)",
      "O(1000)"
    ],
    "الحد المسيطر 3n²، ولما نحذف الثابت يطلع O(n²).",
    "The dominant term is 3n². Dropping the constant gives O(n²).",
    1,
    0
  ],
  [
    1,
    "bigo",
    "A LOOSE Big-Ω uses:",
    [
      "Any term with a lower growth rate",
      "Any term with a higher growth rate",
      "Only the constant",
      "Only the dominant term"
    ],
    "Ω الواسع ممكن يكون أي دالة تنمو أبطأ من f.",
    "A loose Ω can use any function that grows slower than f.",
    0,
    0
  ],
  [
    2,
    "proofs",
    "To prove Big-O you should:",
    [
      "Overestimate smaller terms with larger ones",
      "Ignore positive smaller terms",
      "Choose c = 0",
      "Use only the smallest term"
    ],
    "لإثبات Big-O: نبدّل كل حد صغير بالحد الكبير، وبعدين نجمع المعاملات.",
    "For Big-O, replace each smaller term with the larger one, then add the coefficients.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "To prove Big-Ω you should:",
    [
      "Ignore positive smaller terms (the largest term is enough)",
      "Overestimate smaller terms",
      "Add all coefficients",
      "Set n_{0} = ∞"
    ],
    "لإثبات Big-Ω: نحذف الحدود الصغيرة الموجبة ونخلي الحد المسيطر.",
    "For Big-Ω, drop the smaller positive terms and keep the dominant one.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "To prove Big-Θ you:",
    [
      "Combine the O and Ω proofs with two constants",
      "Only prove Big-O",
      "Only prove Big-Ω",
      "Use a stopwatch"
    ],
    "Θ تحتاج حد أعلى وحد أدنى، فنثبت O و Ω.",
    "Θ needs both an upper and a lower bound, so we prove O and Ω.",
    0,
    0
  ],
  [
    2,
    "proofs",
    "To prove f(n) = 3n² + 17n log n + 1000 ∈ O(n²), you overestimate every term by n² (3n² ≤ 3n², 17n log n ≤ 17n², 1000 ≤ 1000n²). What constant c do you get?",
    [
      "1020",
      "3",
      "17",
      "1000"
    ],
    "3 + 17 + 1000 = 1020، فـ c = 1020.",
    "3 + 17 + 1000 = 1020, so c = 1020.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "In the proof 3n² + 17n log n + 1000 ≤ 1020n², the step 17n log n ≤ 17n² uses log n ≤ n. From which n₀ is the whole inequality guaranteed?",
    [
      "2",
      "0",
      "1",
      "1020"
    ],
    "log n ≤ n تتحقق من n ≥ 2، فـ n₀ = 2.",
    "log n ≤ n holds from n ≥ 2, so n₀ = 2.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "To prove f(n) = 3n² + 17n log n + 1000 ∈ Ω(n²), you keep only the dominant term (f(n) ≥ 3n²). Which constants work?",
    [
      "c = 3, n_{0} = 0",
      "c = 1020, n_{0} = 2",
      "c = 17, n_{0} = 1",
      "c = 1000, n_{0} = 1"
    ],
    "f(n) ≥ 3n² تتحقق لكل n ≥ 0، فـ c = 3 و n₀ = 0.",
    "f(n) ≥ 3n² holds for all n ≥ 0, so c = 3 and n₀ = 0.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "The Θ proof for 3n² + 17n log n + 1000 gives (for n ≥ 2):",
    [
      "3n² ≤ f(n) ≤ 1020n²",
      "f(n) ≤ 3n²",
      "n ≤ f(n) ≤ n²",
      "1020 ≤ f(n) ≤ 3n²"
    ],
    "نجمع الإثباتين: 3n² ≤ f(n) ≤ 1020n² لما n ≥ 2.",
    "Combining both proofs: 3n² ≤ f(n) ≤ 1020n² for n ≥ 2.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "When combining O and Ω proofs for Θ, which n_{0} do we use?",
    [
      "The larger n_{0}",
      "The smaller n_{0}",
      "Their sum",
      "Always 0"
    ],
    "ناخذ n₀ الأكبر عشان المتباينتين يتحققون مع بعض.",
    "Use the larger n₀ so that both inequalities hold at the same time.",
    0,
    0
  ],
  [
    2,
    "proofs",
    "Which known inequality is used in the proofs?",
    [
      "log n ≤ n for n ≥ 2",
      "n ≤ log n for all n",
      "n² ≤ n for n ≥ 2",
      "2^{n} ≤ n"
    ],
    "log n ≤ n لما n ≥ 2، فنقدر نحصر n log n بـ n².",
    "log n ≤ n for n ≥ 2 lets us bound n log n by n².",
    0,
    0
  ],
  [
    2,
    "compare",
    "If f(n) = 2n², then Θ(f(n)) is:",
    [
      "n²",
      "n³",
      "n",
      "2"
    ],
    "نحذف الثابت 2: Θ(n²).",
    "Drop the constant 2: Θ(n²).",
    1,
    0
  ],
  [
    2,
    "compare",
    "If f(n) = 2n², which can be a Big-O of f?",
    [
      "n³",
      "n log n",
      "n",
      "log n"
    ],
    "Big-O لازم يكون مثل n² أو أكبر منها، مثل n³.",
    "Any Big-O of f can be the same as or larger than n², such as n³.",
    1,
    0
  ],
  [
    2,
    "compare",
    "If f(n) = 2n², which can be a Big-Ω of f?",
    [
      "n log n",
      "n³",
      "2^{n}",
      "n!"
    ],
    "Big-Ω لازم يكون مثل n² أو أصغر منها، مثل n log n.",
    "Any Big-Ω of f can be the same as or smaller than n², such as n log n.",
    1,
    0
  ],
  [
    2,
    "compare",
    "True or False: n² + n = O(n²)",
    [
      "True",
      "False"
    ],
    "n² + n ≤ 2n² لما n ≥ 1، فهي O(n²): صح.",
    "n² + n ≤ 2n² for n ≥ 1, so it is O(n²). True.",
    1,
    0
  ],
  [
    2,
    "compare",
    "True or False: 2n = Ω(10n²)",
    [
      "False",
      "True"
    ],
    "2n أبطأ من 10n²، فما ينفع تكون 10n² حد أدنى لها: خطأ.",
    "2n grows slower than 10n², so 2n cannot be bounded below by it. False.",
    1,
    0
  ],
  [
    2,
    "compare",
    "True or False: 2n = O(3n)",
    [
      "True",
      "False"
    ],
    "2n و 3n الفرق بينهم ثابت بس: صح.",
    "2n and 3n differ only by a constant, so it is true.",
    0,
    0
  ],
  [
    2,
    "compare",
    "True or False: 10 = Θ(log 10)",
    [
      "True",
      "False"
    ],
    "10 و log 10 الاثنين ثوابت: صح.",
    "Both 10 and log 10 are constants, so it is true.",
    0,
    0
  ],
  [
    2,
    "compare",
    "True or False: n = O(10)",
    [
      "False",
      "True"
    ],
    "n تكبر بلا حدود وما تقدر تبقى تحت ثابت: خطأ.",
    "n grows without limit and cannot stay below a constant. False.",
    1,
    0
  ],
  [
    2,
    "compare",
    "True or False: n = Ω(log(n²))",
    [
      "True",
      "False"
    ],
    "log(n²) = 2 log n وتنمو أبطأ من n: صح.",
    "log(n²) = 2 log n, which grows slower than n. True.",
    0,
    0
  ],
  [
    2,
    "compare",
    "True or False: (log n)² = Θ(log n + 5)",
    [
      "False",
      "True"
    ],
    "(log n)² تنمو أسرع من log n + 5: خطأ.",
    "(log n)² grows faster than log n + 5. False.",
    1,
    0
  ],
  [
    2,
    "compare",
    "Is f(n) = 3n + 2 in Ω(n²)?",
    [
      "No, 3n + 2 grows slower than n²",
      "Yes, always",
      "Yes, for n ≥ 2",
      "Only if c = 3"
    ],
    "3n + 2 تنمو خطياً وأبطأ من n²، فما هي Ω(n²).",
    "3n + 2 grows linearly, slower than n², so it is not Ω(n²).",
    0,
    0
  ],
  [
    2,
    "compare",
    "f(n) = 3n + 2 is:",
    [
      "Θ(n)",
      "Θ(n²)",
      "Θ(1)",
      "Θ(log n)"
    ],
    "3n ≤ 3n + 2 ≤ 5n لما n ≥ 1، فهي Θ(n).",
    "3n ≤ 3n + 2 ≤ 5n for n ≥ 1, so it is Θ(n).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Big-O of 7n² + 25n + 60:",
    [
      "O(n²)",
      "O(n)",
      "O(n³)",
      "O(60)"
    ],
    "الحد المسيطر 7n²، فهي O(n²).",
    "The dominant term is 7n², so O(n²).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Big-O of 50n log n + 20n:",
    [
      "O(n log n)",
      "O(n)",
      "O(n²)",
      "O(log n)"
    ],
    "الحد المسيطر 50n log n، فهي O(n log n).",
    "The dominant term is 50n log n, so O(n log n).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Big-O of 5 log n + 100:",
    [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(100)"
    ],
    "الحد المسيطر 5 log n، فهي O(log n).",
    "The dominant term is 5 log n, so O(log n).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Big-O of f(n) = 15:",
    [
      "O(1)",
      "O(15)",
      "O(n)",
      "O(log n)"
    ],
    "الدالة الثابتة O(1).",
    "A constant function is O(1).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Insertion sort on an already sorted array runs in:",
    [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(n log n)"
    ],
    "لو المدخلات مرتبة، حلقة while الداخلية ما تحرك شي: n − 1 مقارنة، O(n).",
    "On sorted input the inner while loop never shifts: n − 1 comparisons, O(n).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Insertion sort on a reverse-sorted array runs in:",
    [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "لو المدخلات معكوسة، كل عنصر يتحرك لأول المصفوفة: تقريباً n²/2 تحريك، O(n²).",
    "On reverse-sorted input each element shifts all the way left: about n²/2 moves, O(n²).",
    1,
    0
  ],
  [
    3,
    "iter",
    "The two types of algorithms are:",
    [
      "Iterative and recursive",
      "Fast and slow",
      "Sorted and unsorted",
      "Internal and external"
    ],
    "الخوارزميات إما تكرارية (حلقات) أو ذاتية الاستدعاء.",
    "Algorithms are either iterative (loops) or recursive (self-calls).",
    0,
    0
  ],
  [
    3,
    "iter",
    "If an algorithm contains neither iteration nor recursion, its runtime is:",
    [
      "Constant",
      "Linear",
      "Logarithmic",
      "Exponential"
    ],
    "بدون حلقات ولا استدعاء ذاتي، عدد الخطوات ما يعتمد على n.",
    "With no loops and no recursion, the number of steps does not depend on n.",
    0,
    0
  ],
  [
    3,
    "iter",
    "The number of operations in a nested loop is:",
    [
      "Inner loop's iterations × outer loop's iterations",
      "Inner + outer",
      "Only the outer",
      "Only the inner"
    ],
    "الحلقة الداخلية تشتغل كاملة مع كل لفة من الخارجية، فنضرب.",
    "The inner loop runs fully for each outer iteration, so we multiply.",
    1,
    0
  ],
  [
    3,
    "iter",
    "Printing a rectangle of width w and height h (two nested loops) costs:",
    [
      "O(w·h)",
      "O(w + h)",
      "O(log w)",
      "O(1)"
    ],
    "h صف × w عمود = w·h طباعة.",
    "h rows × w columns = w·h prints.",
    0,
    0
  ],
  [
    3,
    "iter",
    "`for i = 1 to n: for j = 1 to i: …` runs in:",
    [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "1 + 2 + … + n = n(n+1)/2، وهذا O(n²).",
    "1 + 2 + … + n = n(n+1)/2, which is O(n²).",
    1,
    0
  ],
  [
    3,
    "iter",
    "Σ_{i=1}^{n} i equals:",
    [
      "n(n+1)/2",
      "n²",
      "n(n+1)(2n+1)/6",
      "2^{n}"
    ],
    "مجموع 1 + 2 + … + n = n(n+1)/2.",
    "The sum 1 + 2 + … + n equals n(n+1)/2.",
    1,
    0
  ],
  [
    3,
    "iter",
    "Σ_{i=1}^{n} i² equals:",
    [
      "n(n+1)(2n+1)/6",
      "n(n+1)/2",
      "n³",
      "n²/2"
    ],
    "مجموع المربعات = n(n+1)(2n+1)/6.",
    "The sum of squares equals n(n+1)(2n+1)/6.",
    0,
    0
  ],
  [
    3,
    "iter",
    "Σ_{i=m}^{n} c equals:",
    [
      "c(n − m + 1)",
      "c·n",
      "c(n − m)",
      "n − m"
    ],
    "الثابت c ينضاف (n − m + 1) مرة.",
    "A constant c is added (n − m + 1) times.",
    0,
    0
  ],
  [
    3,
    "iter",
    "Σ_{i=0}^{n} a^{i} (a ≠ 1) equals:",
    [
      "(a^{n+1} − 1)/(a − 1)",
      "a^{n}",
      "n·a",
      "(a^{n} − 1)/a"
    ],
    "متسلسلة هندسية: (a^(n+1) − 1)/(a − 1).",
    "Geometric series: (a^(n+1) − 1)/(a − 1).",
    0,
    1
  ],
  [
    3,
    "iter",
    "Can any recursive algorithm be converted to an iterative form?",
    [
      "Yes",
      "No",
      "Only sorting algorithms",
      "Only if it has no base case"
    ],
    "أي خوارزمية ذاتية الاستدعاء نقدر نكتبها تكرارية، مثلاً باستخدام stack.",
    "Any recursive algorithm can be rewritten iteratively, for example by using an explicit stack.",
    0,
    1
  ],
  [
    3,
    "recur",
    "A recurrence is:",
    [
      "An equation describing a function in terms of its value on smaller inputs",
      "A type of loop",
      "A sorting algorithm",
      "A Big-O bound"
    ],
    "العلاقة التكرارية تعرّف T(n) بدلالة T على مدخلات أصغر.",
    "A recurrence defines T(n) in terms of T on smaller inputs.",
    0,
    0
  ],
  [
    3,
    "recur",
    "Which recurrence describes the running time of: `ALG funR(n): print(\"Welcome\"); if n > 1: funR(n − 1)`",
    [
      "T(n) = c + T(n − 1)",
      "T(n) = 2T(n/2) + c",
      "T(n) = T(n/2) + 1",
      "T(n) = n·T(n − 1)"
    ],
    "شغل ثابت c + استدعاء على n − 1: T(n) = c + T(n − 1).",
    "Constant work c plus one call on n − 1: T(n) = c + T(n − 1).",
    0,
    0
  ],
  [
    3,
    "recur",
    "The recurrence of the recursive factorial is:",
    [
      "T(n) = T(n − 1) + O(1), T(0) = 1",
      "T(n) = n·T(n − 1)",
      "T(n) = 2T(n/2) + n",
      "T(n) = T(n/2) + 1"
    ],
    "عملية ضرب وحدة + استدعاء على n − 1: T(n) = T(n − 1) + O(1).",
    "One multiplication plus a call on n − 1: T(n) = T(n − 1) + O(1).",
    0,
    0
  ],
  [
    3,
    "recur",
    "The stopping condition of a recursive algorithm is called the:",
    [
      "Base case",
      "Pivot",
      "Recurrence",
      "Pattern"
    ],
    "حالة الأساس (base case) هي اللي توقف الاستدعاء الذاتي.",
    "The base case stops the recursion.",
    0,
    0
  ],
  [
    3,
    "recur",
    "T(n) = T(n − 1) + n solves to:",
    [
      "Θ(n²)",
      "Θ(n)",
      "Θ(log n)",
      "Θ(n log n)"
    ],
    "n + (n−1) + … + 1 = n(n+1)/2 ← Θ(n²).",
    "n + (n−1) + … + 1 = n(n+1)/2 → Θ(n²).",
    1,
    0
  ],
  [
    3,
    "recur",
    "T(n) = T(n/2) + c solves to:",
    [
      "Θ(log n)",
      "Θ(n)",
      "Θ(1)",
      "Θ(n log n)"
    ],
    "التنصيف مع شغل ثابت ياخذ log n مستوى: Θ(log n).",
    "Halving with constant work takes log n levels: Θ(log n).",
    1,
    0
  ],
  [
    3,
    "recur",
    "T(n) = T(n/2) + n solves to:",
    [
      "Θ(n)",
      "Θ(n log n)",
      "Θ(log n)",
      "Θ(n²)"
    ],
    "n + n/2 + n/4 + … ≤ 2n ← Θ(n).",
    "n + n/2 + n/4 + … ≤ 2n → Θ(n).",
    1,
    0
  ],
  [
    3,
    "recur",
    "T(n) = 2T(n/2) + 1 solves to:",
    [
      "Θ(n)",
      "Θ(log n)",
      "Θ(n log n)",
      "Θ(1)"
    ],
    "الشجرة فيها تقريباً 2n عقدة وكل وحدة شغلها ثابت: Θ(n).",
    "The tree has about 2n nodes with constant work each: Θ(n).",
    1,
    0
  ],
  [
    3,
    "recur",
    "Which method guesses the solution and proves it by induction?",
    [
      "Substitution method",
      "Iteration method",
      "Recursion tree method",
      "Master method"
    ],
    "طريقة التعويض (substitution) نخمّن الجواب ونثبته بالاستقراء.",
    "The substitution method guesses the answer and proves it by induction.",
    0,
    0
  ],
  [
    3,
    "recur",
    "Which method provides a direct formula for divide-and-conquer recurrences?",
    [
      "Master method",
      "Iteration method",
      "Recursion tree method",
      "Stopwatch method"
    ],
    "الطريقة الرئيسية (Master) تعطي قانون مباشر للعلاقة aT(n/b) + f(n).",
    "The Master method gives a direct formula for aT(n/b) + f(n).",
    0,
    0
  ],
  [
    3,
    "backsub",
    "In the iteration (back-substitution) method, after expanding we:",
    [
      "Detect a pattern in terms of k, then reach the base case to solve for k",
      "Draw a tree",
      "Guess and prove by induction",
      "Use the master formula"
    ],
    "نوسّع العلاقة، نكتب النمط بدلالة k، نخلي المدخل يساوي حالة الأساس، نحل لـ k، وبعدين نعوّض.",
    "Expand the recurrence, express the pattern in k, set the argument equal to the base case, solve for k, then substitute.",
    0,
    0
  ],
  [
    3,
    "backsub",
    "For T(n) = c + T(n − 1), the pattern after k steps is:",
    [
      "kc + T(n − k)",
      "c^{k} + T(n/k)",
      "k + T(n/2^{k})",
      "2^{k}c"
    ],
    "بعد k توسيع: kc + T(n − k).",
    "After k expansions: kc + T(n − k).",
    1,
    0
  ],
  [
    3,
    "backsub",
    "For T(n) = c + T(n − 1) with base T(1), k equals:",
    [
      "n − 1",
      "log n",
      "n/2",
      "n²"
    ],
    "n − k = 1 ← k = n − 1.",
    "n − k = 1 → k = n − 1.",
    1,
    0
  ],
  [
    3,
    "backsub",
    "T(n) = c + T(n − 1) solves to:",
    [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(1)"
    ],
    "(n − 1)c + T(1) ← O(n).",
    "(n − 1)c + T(1) → O(n).",
    0,
    0
  ],
  [
    3,
    "backsub",
    "T(n) = n + T(n − 1), T(1) = 1 solves to:",
    [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "المجموع n + (n−1) + … + 1 = n(n+1)/2 ← O(n²).",
    "The sum n + (n−1) + … + 1 = n(n+1)/2 → O(n²).",
    1,
    0
  ],
  [
    3,
    "backsub",
    "For merge sort T(n) = 2T(n/2) + n, the pattern after k steps is:",
    [
      "2^{k}T(n/2^{k}) + kn",
      "kT(n − k) + n",
      "2T(n/k) + k",
      "n^{k} + T(1)"
    ],
    "كل توسيع يضاعف المعامل ويزيد n: 2^k T(n/2^k) + kn.",
    "Each expansion doubles the coefficient and adds n: 2^k T(n/2^k) + kn.",
    1,
    0
  ],
  [
    3,
    "backsub",
    "Setting n/2^{k} = 1 gives:",
    [
      "k = log₂ n",
      "k = n/2",
      "k = n − 1",
      "k = 2n"
    ],
    "n/2^k = 1 ← 2^k = n ← k = log₂ n.",
    "n/2^k = 1 → 2^k = n → k = log₂ n.",
    1,
    0
  ],
  [
    3,
    "rtree",
    "In the recursion tree method, the cost of non-recursive work becomes:",
    [
      "The root of the subtree",
      "A leaf",
      "The height",
      "The number of children"
    ],
    "التكلفة غير الذاتية f(n) تنحط في العقدة (جذر كل شجرة فرعية).",
    "The non-recursive cost f(n) is placed at the node (root of each subtree).",
    0,
    0
  ],
  [
    3,
    "rtree",
    "In a recursion tree, the number of children equals:",
    [
      "The number of subproblems (a)",
      "The subproblem size",
      "The height",
      "The cost at the root"
    ],
    "كل عقدة لها ابن لكل مسألة فرعية، يعني a أبناء.",
    "Each node has one child per subproblem, so a children.",
    1,
    0
  ],
  [
    3,
    "rtree",
    "For T(n) = 2T(n/2) + cn, the cost of each level is:",
    [
      "cn",
      "c",
      "2^{i}",
      "n²"
    ],
    "المستوى i فيه 2^i عقدة، وكل وحدة تكلف c·n/2^i، فكل مستوى تكلفته cn.",
    "Level i has 2^i nodes, each costing c·n/2^i, so every level costs cn.",
    1,
    0
  ],
  [
    3,
    "rtree",
    "For T(n) = 2T(n/2) + cn, the height of the tree is:",
    [
      "log₂ n",
      "n",
      "n/2",
      "√n"
    ],
    "الحجم ينقسم على 2 كل مستوى، فالارتفاع log₂ n.",
    "The size halves each level, so the height is log₂ n.",
    1,
    0
  ],
  [
    3,
    "rtree",
    "For T(n) = 2T(n/2) + cn, the number of leaves is:",
    [
      "n",
      "log n",
      "2n",
      "1"
    ],
    "2^(log₂ n) = n ورقة.",
    "2^(log₂ n) = n leaves.",
    1,
    0
  ],
  [
    3,
    "rtree",
    "Total cost in the recursion tree method is:",
    [
      "The sum of each level's cost",
      "The cost of the root only",
      "The number of leaves",
      "The height"
    ],
    "T(n) = مجموع تكلفة كل المستويات.",
    "T(n) = the sum of the costs of all levels.",
    0,
    0
  ],
  [
    3,
    "merge",
    "An in-place sort uses extra space that is:",
    [
      "Constant",
      "Linear",
      "Logarithmic",
      "Quadratic"
    ],
    "الترتيب in-place يستخدم مساحة إضافية ثابتة بس.",
    "An in-place sort uses only constant extra space.",
    0,
    0
  ],
  [
    3,
    "merge",
    "A sort where some data is stored on an external, slower device is:",
    [
      "External sort",
      "Internal sort",
      "In-place sort",
      "Stable sort"
    ],
    "الترتيب الخارجي (external) يخلي جزء من البيانات في جهاز خارجي أبطأ.",
    "An external sort keeps part of the data on a slower external device.",
    0,
    0
  ],
  [
    3,
    "merge",
    "Merge sort's three steps are:",
    [
      "Divide into halves, recursively sort each, merge",
      "Pick pivot, partition, recurse",
      "Find min, swap, repeat",
      "Hash, bucket, collect"
    ],
    "الدمج يقسم لنصين، يرتب كل نص بالاستدعاء الذاتي، وبعدين يدمجهم.",
    "Merge sort divides into halves, sorts each recursively, then merges.",
    1,
    0
  ],
  [
    3,
    "merge",
    "The merge sort recurrence is:",
    [
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n − 1) + O(n)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 8T(n/2) + n²"
    ],
    "مسألتين بحجم n/2 + دمج O(n).",
    "Two subproblems of size n/2 plus an O(n) merge.",
    1,
    0
  ],
  [
    3,
    "merge",
    "The merge step of merge sort costs:",
    [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "الدمج يمر على كل الـ n عنصر مرة وحدة: O(n).",
    "Merging walks through all n elements once: O(n).",
    0,
    0
  ],
  [
    3,
    "merge",
    "Merge sort space complexity is:",
    [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "نسخ L و R يحتاج مساحة إضافية O(n).",
    "The L and R copies need O(n) extra space.",
    1,
    0
  ],
  [
    3,
    "merge",
    "Is merge sort in-place?",
    [
      "No",
      "Yes"
    ],
    "الدمج يحتاج مساحة إضافية O(n)، فهو مو in-place.",
    "Merge sort needs O(n) extra space, so it is not in-place.",
    1,
    0
  ],
  [
    4,
    "master",
    "The Master Theorem applies to recurrences of the form:",
    [
      "T(n) = aT(n/b) + f(n), a ≥ 1, b > 1",
      "T(n) = T(n − 1) + n",
      "T(n) = T(n − 1)·n",
      "Any recurrence"
    ],
    "المبرهنة الرئيسية تحل T(n) = aT(n/b) + f(n) بشرط a ≥ 1 و b > 1.",
    "The Master Theorem solves T(n) = aT(n/b) + f(n) with a ≥ 1 and b > 1.",
    1,
    0
  ],
  [
    4,
    "master",
    "In T(n) = aT(n/b) + f(n), f(n) represents:",
    [
      "The cost of dividing and combining",
      "The number of subproblems",
      "The subproblem size",
      "The base case"
    ],
    "f(n) هي التكلفة غير الذاتية للتقسيم والدمج.",
    "f(n) is the non-recursive cost of dividing and combining.",
    0,
    0
  ],
  [
    4,
    "master",
    "In T(n) = aT(n/b) + f(n), a represents:",
    [
      "The number of subproblems",
      "The subproblem size",
      "The non-recursive cost",
      "The depth"
    ],
    "a هو عدد المسائل الفرعية.",
    "a is the number of subproblems.",
    0,
    0
  ],
  [
    4,
    "master",
    "Case 1 of the Master Theorem applies when:",
    [
      "log_{b} a > k",
      "log_{b} a = k",
      "log_{b} a < k",
      "p < 0"
    ],
    "الحالة 1: log_b a > k، يعني الأوراق هي المسيطرة.",
    "Case 1: log_b a > k, so the leaves dominate.",
    1,
    0
  ],
  [
    4,
    "master",
    "In Case 1, T(n) =",
    [
      "Θ(n^{log_{b} a})",
      "Θ(n^{k} log n)",
      "Θ(n^{k})",
      "Θ(log n)"
    ],
    "نتيجة الحالة 1: Θ(n^(log_b a)).",
    "Case 1 result: Θ(n^(log_b a)).",
    1,
    0
  ],
  [
    4,
    "master",
    "In Case 2 with p > −1, T(n) =",
    [
      "Θ(n^{k} log^{p+1} n)",
      "Θ(n^{k} log^{p} n)",
      "Θ(n^{log_{b} a})",
      "Θ(n^{k} log log n)"
    ],
    "الحالة 2 مع p > −1: نضرب في log زيادة، فتطلع Θ(n^k log^(p+1) n).",
    "Case 2 with p > −1: multiply by one more log, giving Θ(n^k log^(p+1) n).",
    1,
    0
  ],
  [
    4,
    "master",
    "In Case 2 with p = −1, T(n) =",
    [
      "Θ(n^{k} log log n)",
      "Θ(n^{k})",
      "Θ(n^{k} log n)",
      "Θ(log n)"
    ],
    "الحالة 2 مع p = −1: Θ(n^k log log n).",
    "Case 2 with p = −1: Θ(n^k log log n).",
    0,
    0
  ],
  [
    4,
    "master",
    "In Case 2 with p < −1, T(n) =",
    [
      "Θ(n^{k})",
      "Θ(n^{k} log n)",
      "Θ(n^{k} log log n)",
      "Θ(n^{log_{b} a} log n)"
    ],
    "الحالة 2 مع p < −1: Θ(n^k).",
    "Case 2 with p < −1: Θ(n^k).",
    0,
    0
  ],
  [
    4,
    "master",
    "In Case 3 with p ≥ 0, T(n) =",
    [
      "Θ(n^{k} log^{p} n)",
      "Θ(n^{log_{b} a})",
      "Θ(n^{k} log^{p+1} n)",
      "Θ(1)"
    ],
    "الحالة 3 مع p ≥ 0: الجذر هو المسيطر، فتطلع Θ(n^k log^p n).",
    "Case 3 with p ≥ 0: the root dominates, giving Θ(n^k log^p n).",
    1,
    0
  ],
  [
    4,
    "master",
    "In Case 3 with p < 0, T(n) =",
    [
      "Θ(n^{k})",
      "Θ(n^{k} log^{p} n)",
      "Θ(n^{log_{b} a})",
      "Θ(n log n)"
    ],
    "الحالة 3 مع p < 0: Θ(n^k).",
    "Case 3 with p < 0: Θ(n^k).",
    0,
    0
  ],
  [
    4,
    "master",
    "T(n) = 2T(n/2) + n solves to:",
    [
      "Θ(n log n)",
      "Θ(n)",
      "Θ(n²)",
      "Θ(log n)"
    ],
    "a = 2، b = 2، k = 1، p = 0: log₂2 = 1 = k ← الحالة 2 ← Θ(n log n).",
    "a = 2, b = 2, k = 1, p = 0: log₂2 = 1 = k → Case 2 → Θ(n log n).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 5T(n/2) + n²: which case?",
    [
      "Case 1 (log₂5 ≈ 2.32 > 2)",
      "Case 2",
      "Case 3",
      "Master theorem doesn't apply"
    ],
    "log₂5 ≈ 2.32 > k = 2 ← الحالة 1.",
    "log₂5 ≈ 2.32 > k = 2 → Case 1.",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 5T(n/2) + n² solves to:",
    [
      "Θ(n^{log₂5}) ≈ Θ(n^{2.32})",
      "Θ(n²)",
      "Θ(n² log n)",
      "Θ(n^{5})"
    ],
    "الحالة 1 ← Θ(n^(log₂5)) ≈ Θ(n^2.32).",
    "Case 1 → Θ(n^(log₂5)) ≈ Θ(n^2.32).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 12T(n/3) + n³ solves to:",
    [
      "Θ(n³)",
      "Θ(n^{2.26})",
      "Θ(n³ log n)",
      "Θ(n^{12})"
    ],
    "log₃12 ≈ 2.26 < k = 3 ← الحالة 3 و p = 0 ← Θ(n³).",
    "log₃12 ≈ 2.26 < k = 3 → Case 3, p = 0 → Θ(n³).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 4T(n/2) + n²/log² n: the values of k and p are:",
    [
      "k = 2, p = −2",
      "k = 2, p = 2",
      "k = 4, p = −2",
      "k = 2, p = 0"
    ],
    "n²/log² n = n² · log⁻² n، فـ k = 2 و p = −2.",
    "n²/log² n = n² · log⁻² n, so k = 2 and p = −2.",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 4T(n/2) + n²/log² n solves to:",
    [
      "Θ(n²)",
      "Θ(n² log log n)",
      "Θ(n² log n)",
      "Θ(n^{4})"
    ],
    "log₂4 = 2 = k ← الحالة 2، و p = −2 < −1 ← Θ(n²).",
    "log₂4 = 2 = k → Case 2, and p = −2 < −1 → Θ(n²).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = T(n/2) + 1 (binary search) by the Master Theorem:",
    [
      "Case 2, Θ(log n)",
      "Case 1, Θ(n)",
      "Case 3, Θ(1)",
      "Not applicable"
    ],
    "a = 1، b = 2: log₂1 = 0 = k ← الحالة 2 و p = 0 ← Θ(log n).",
    "a = 1, b = 2: log₂1 = 0 = k → Case 2, p = 0 → Θ(log n).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 8T(n/2) + n² solves to:",
    [
      "Θ(n³)",
      "Θ(n² log n)",
      "Θ(n²)",
      "Θ(n^{8})"
    ],
    "log₂8 = 3 > 2 ← الحالة 1 ← Θ(n³).",
    "log₂8 = 3 > 2 → Case 1 → Θ(n³).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 2T(n/2) + n log n solves to:",
    [
      "Θ(n log² n)",
      "Θ(n log n)",
      "Θ(n)",
      "Θ(n²)"
    ],
    "log₂2 = 1 = k و p = 1 > −1 ← الحالة 2 ← Θ(n log² n).",
    "log₂2 = 1 = k, p = 1 > −1 → Case 2 → Θ(n log² n).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 2T(n/2) + n/log n solves to:",
    [
      "Θ(n log log n)",
      "Θ(n log n)",
      "Θ(n)",
      "Θ(log n)"
    ],
    "log₂2 = 1 = k و p = −1 ← الحالة 2 ← Θ(n log log n).",
    "log₂2 = 1 = k, p = −1 → Case 2 → Θ(n log log n).",
    1,
    0
  ],
  [
    4,
    "dc",
    "The three phases of divide-and-conquer are:",
    [
      "Divide, Conquer, Combine",
      "Pick, Partition, Recurse",
      "Guess, Prove, Repeat",
      "Sort, Search, Merge"
    ],
    "فرّق تسد له ثلاث مراحل: Divide و Conquer و Combine.",
    "Divide-and-conquer has three phases: Divide, Conquer, Combine.",
    1,
    0
  ],
  [
    4,
    "dc",
    "Which is NOT listed as a divide-and-conquer algorithm?",
    [
      "Heap sort",
      "Merge sort",
      "Binary search",
      "Strassen's"
    ],
    "الـ Heap sort مو من فرّق تسد.",
    "Heap sort is not divide-and-conquer.",
    0,
    0
  ],
  [
    4,
    "dc",
    "Binary search requires the array to be:",
    [
      "Sorted",
      "Unsorted",
      "Of even length",
      "Two-dimensional"
    ],
    "البحث الثنائي ما يشتغل إلا على مصفوفة مرتبة.",
    "Binary search only works on a sorted array.",
    1,
    0
  ],
  [
    4,
    "dc",
    "The combine step of binary search is:",
    [
      "No real combination (just return the answer)",
      "Merging two halves",
      "Adding results",
      "Partitioning"
    ],
    "البحث الثنائي ما يحتاج دمج: يرجّع الجواب من نص واحد.",
    "Binary search needs no combine step: it just returns the answer from one half.",
    0,
    0
  ],
  [
    4,
    "dc",
    "Binary search recurrence and runtime:",
    [
      "T(n) = T(n/2) + O(1) → O(log n)",
      "T(n) = 2T(n/2) + O(n) → O(n log n)",
      "T(n) = T(n − 1) + 1 → O(n)",
      "T(n) = T(n/2) + n → O(n)"
    ],
    "نص واحد + شغل ثابت: T(n/2) + O(1) ← O(log n).",
    "One half plus constant work: T(n/2) + O(1) → O(log n).",
    1,
    0
  ],
  [
    4,
    "dc",
    "Unlike merge sort, quick sort splits elements based on their:",
    [
      "Values",
      "Positions",
      "Indices only",
      "Memory addresses"
    ],
    "السريع يقسم حسب القيمة حول الـ pivot، والدمج يقسم حسب الموقع.",
    "Quicksort partitions by value around a pivot. Merge sort splits by position.",
    1,
    0
  ],
  [
    4,
    "dc",
    "After partitioning around A[s]:",
    [
      "Elements left of A[s] are ≤ A[s] and elements right are ≥ A[s]",
      "The array is fully sorted",
      "A[s] is the smallest element",
      "All elements are equal"
    ],
    "الـ partition يحط الأصغر أو المساوي يسار، والأكبر أو المساوي يمين.",
    "Partition puts smaller-or-equal elements on the left and larger-or-equal on the right.",
    0,
    0
  ],
  [
    4,
    "dc",
    "In this Partition procedure, which element is the pivot? `ALG Partition(A, low, high): pivot = A[high]; i = low − 1; for j = low to high − 1: if A[j] ≤ pivot: i = i + 1; swap A[i], A[j]` then `swap A[i+1], A[high]; return i + 1`",
    [
      "A[high] (the last element)",
      "A[low]",
      "A random element",
      "The median"
    ],
    "الـ Partition هذا يحط pivot = A[high]، يعني آخر عنصر.",
    "This Partition sets pivot = A[high], the last element.",
    0,
    0
  ],
  [
    4,
    "dc",
    "The combine step of quick sort is:",
    [
      "None",
      "Merging two sorted halves",
      "Partitioning",
      "Binary search"
    ],
    "السريع ما فيه مرحلة دمج: بعد الـ partition والترتيب تكون المصفوفة جاهزة مكانها.",
    "Quicksort has no combine step: after partitioning and sorting, the array is in place.",
    1,
    0
  ],
  [
    4,
    "dc",
    "Quick sort's worst case happens when the pivot is:",
    [
      "The largest or smallest element",
      "The median",
      "Random",
      "In the middle"
    ],
    "لو الـ pivot أصغر أو أكبر عنصر، يصير التقسيم غير متوازن لأقصى حد.",
    "A pivot that is the smallest or largest element gives the most unbalanced split.",
    1,
    0
  ],
  [
    4,
    "dc",
    "Quick sort's worst-case recurrence is:",
    [
      "T(n) = T(n − 1) + O(n) → O(n²)",
      "T(n) = 2T(n/2) + O(n) → O(n log n)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 7T(n/2) + n²"
    ],
    "التقسيم غير المتوازن يعطي T(n − 1) + O(n) ← O(n²).",
    "An unbalanced split gives T(n − 1) + O(n) → O(n²).",
    1,
    0
  ],
  [
    4,
    "dc",
    "The space complexity of quick sort (its recursion stack) is:",
    [
      "Ω(log n), O(n)",
      "O(1) always",
      "O(n²)",
      "O(n log n)"
    ],
    "عمق الستاك log n لما يكون متوازن، ويوصل n لما يكون غير متوازن.",
    "Stack depth is log n when balanced and up to n when unbalanced.",
    0,
    0
  ],
  [
    4,
    "matrix",
    "Classical matrix multiplication of square n×n matrices runs in:",
    [
      "O(n³)",
      "O(n²)",
      "O(n^{2.81})",
      "O(n log n)"
    ],
    "ثلاث حلقات متداخلة كل وحدة n: O(n³).",
    "Three nested loops of n each: O(n³).",
    0,
    0
  ],
  [
    4,
    "matrix",
    "Classical multiplication of m×n by n×l matrices runs in:",
    [
      "O(mnl)",
      "O(ml)",
      "O(m + n + l)",
      "O(n²)"
    ],
    "m × l عنصر، وكل عنصر مجموع n حاصل ضرب: O(mnl).",
    "m × l entries, each a sum of n products: O(mnl).",
    0,
    0
  ],
  [
    4,
    "matrix",
    "Recursive (naïve D&C) matrix multiplication computes how many products?",
    [
      "8",
      "7",
      "4",
      "16"
    ],
    "التقسيم العادي يحسب 8 ضربات لمصفوفات فرعية n/2 × n/2.",
    "Naive divide-and-conquer computes 8 products of n/2 × n/2 submatrices.",
    1,
    0
  ],
  [
    4,
    "matrix",
    "The recurrence of recursive matrix multiplication is:",
    [
      "T(n) = 8T(n/2) + 4n²",
      "T(n) = 7T(n/2) + 4n²",
      "T(n) = 4T(n/2) + n",
      "T(n) = 2T(n/2) + n"
    ],
    "8 ضربات ذاتية + جمع O(n²): 8T(n/2) + 4n².",
    "8 recursive multiplications plus O(n²) additions: 8T(n/2) + 4n².",
    1,
    0
  ],
  [
    4,
    "matrix",
    "Naïve recursive matrix multiplication runs in:",
    [
      "O(n³)",
      "O(n^{2.81})",
      "O(n²)",
      "O(n log n)"
    ],
    "log₂8 = 3 > 2 ← Θ(n³)، نفس الطريقة العادية.",
    "log₂8 = 3 > 2 → Θ(n³), the same as the classical method.",
    0,
    0
  ],
  [
    4,
    "matrix",
    "Strassen's algorithm uses how many multiplications?",
    [
      "7",
      "8",
      "4",
      "9"
    ],
    "ستراسن يستخدم 7 ضربات بدل 8.",
    "Strassen uses 7 multiplications instead of 8.",
    1,
    0
  ],
  [
    4,
    "matrix",
    "Strassen's recurrence is:",
    [
      "T(n) = 7T(n/2) + 4n²",
      "T(n) = 8T(n/2) + 4n²",
      "T(n) = 7T(n/7) + n",
      "T(n) = 2T(n/2) + n"
    ],
    "7 ضربات ذاتية + جمع O(n²): 7T(n/2) + 4n².",
    "7 recursive multiplications plus O(n²) additions: 7T(n/2) + 4n².",
    1,
    0
  ],
  [
    4,
    "matrix",
    "Strassen's time complexity is:",
    [
      "O(n^{log₂7}) ≈ O(n^{2.81})",
      "O(n³)",
      "O(n²)",
      "O(n^{7})"
    ],
    "log₂7 ≈ 2.81 ← O(n^2.81).",
    "log₂7 ≈ 2.81 → O(n^2.81).",
    1,
    0
  ],
  [
    4,
    "matrix",
    "Space complexity of Strassen's algorithm is:",
    [
      "O(n²)",
      "O(n³)",
      "O(1)",
      "O(log n)"
    ],
    "ستراسن يحتاج مصفوفات فرعية مؤقتة: مساحة O(n²).",
    "Strassen needs temporary submatrices: O(n²) space.",
    0,
    0
  ],
  [
    4,
    "matrix",
    "Strassen improves:",
    [
      "Time complexity but not space complexity",
      "Space but not time",
      "Both time and space",
      "Neither"
    ],
    "ستراسن ينزّل أس الوقت، بس المساحة ما تتحسن.",
    "Strassen lowers the time exponent but not the space.",
    1,
    0
  ],
  [
    4,
    "matrix",
    "Strassen's was the first algorithm to multiply matrices in:",
    [
      "Less than cubic time",
      "Linear time",
      "Constant space",
      "Logarithmic time"
    ],
    "ستراسن أول خوارزمية ضرب مصفوفات أسرع من n³.",
    "Strassen was the first sub-cubic matrix multiplication algorithm.",
    0,
    0
  ],
  [
    4,
    "sorts",
    "Which sorting algorithm guarantees O(n log n) in all cases but needs O(n) extra memory?",
    [
      "Merge sort",
      "Quick sort",
      "Heap sort",
      "Insertion sort"
    ],
    "الدمج O(n log n) في كل الحالات، بس يحتاج مساحة إضافية O(n).",
    "Merge sort is O(n log n) in every case but needs O(n) extra space.",
    1,
    0
  ],
  [
    4,
    "sorts",
    "Which sort is O(n log n) in all cases with O(1) space?",
    [
      "Heap sort",
      "Merge sort",
      "Quick sort",
      "Bubble sort"
    ],
    "الـ Heap sort رتبته O(n log n) في كل الحالات، وهو in-place بمساحة O(1).",
    "Heap sort is O(n log n) in every case and in-place with O(1) space.",
    1,
    0
  ],
  [
    4,
    "sorts",
    "Which sort is fast in practice and in-place but has O(n²) worst case?",
    [
      "Quick sort",
      "Merge sort",
      "Heap sort",
      "Insertion sort"
    ],
    "السريع سريع و in-place، بس أسوأ حالته O(n²).",
    "Quicksort is fast and in-place, but its worst case is O(n²).",
    1,
    0
  ],
  [
    4,
    "sorts",
    "Which sorting algorithms are stable?",
    [
      "Bubble, insertion, merge",
      "Quick and heap",
      "Only quick",
      "Only heap"
    ],
    "المستقرة في الجدول: الفقاعي والإدراج والدمج.",
    "The stable sorts in the table are bubble, insertion, and merge.",
    1,
    0
  ],
  [
    4,
    "sorts",
    "Which sorting algorithms are divide-and-conquer?",
    [
      "Merge and quick",
      "Bubble and insertion",
      "Heap and bubble",
      "Heap and merge"
    ],
    "الدمج والسريع بس هم فرّق تسد.",
    "Only merge sort and quicksort are divide-and-conquer.",
    1,
    0
  ],
  [
    4,
    "sorts",
    "Best case of bubble sort and insertion sort is:",
    [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(n log n)"
    ],
    "على مدخلات مرتبة، الفقاعي (مع الخروج المبكر) والإدراج يخلصون بـ O(n).",
    "On already-sorted input, bubble sort (with early exit) and insertion sort finish in O(n).",
    0,
    0
  ],
  [
    4,
    "sorts",
    "Which sort is good for nearly-sorted data and adaptive?",
    [
      "Insertion sort",
      "Heap sort",
      "Merge sort",
      "Quick sort with first pivot"
    ],
    "الإدراج يتكيّف مع المصفوفات شبه المرتبة.",
    "Insertion sort adapts well to nearly-sorted data.",
    0,
    0
  ],
  [
    5,
    "whyrand",
    "Why can deterministic tie-breaking be harmful?",
    [
      "It is predictable, so adversarial or unlucky inputs can trigger the worst case",
      "It is always slower",
      "It uses more memory",
      "It always gives wrong answers"
    ],
    "الاختيارات المتوقعة تخلي مدخلات سيئة تجبرك على أسوأ حالة كل مرة.",
    "Predictable choices let bad inputs force the worst case every time.",
    0,
    0
  ],
  [
    5,
    "whyrand",
    "Which is NOT a reason for using randomness in algorithms?",
    [
      "Guaranteeing O(1) runtime",
      "Breaking ties and symmetry",
      "Avoiding adversarial inputs",
      "Simplicity and practicality"
    ],
    "الأسباب: كسر التعادل، تفادي المدخلات العدائية، تقليل التعقيد، والبساطة. والعشوائية ما تضمن O(1).",
    "The reasons are breaking ties, avoiding adversarial inputs, reducing complexity, and simplicity. Randomness does not guarantee O(1).",
    0,
    0
  ],
  [
    5,
    "whyrand",
    "Randomized hash functions are an example of:",
    [
      "Avoiding adversarial inputs (fewer collisions)",
      "Breaking ties",
      "Monte Carlo errors",
      "Divide and conquer"
    ],
    "دوال hash العشوائية تخلي التصادمات صعب أحد يفرضها.",
    "Random hash functions make collisions hard to force.",
    0,
    0
  ],
  [
    5,
    "whyrand",
    "\"Power of two choices\" load balancing illustrates:",
    [
      "Simplicity and practicality",
      "Reducing correctness",
      "Deterministic tie-breaking",
      "Strassen's algorithm"
    ],
    "power of two choices فكرة عشوائية بسيطة وعملية لتوزيع الحمل.",
    "Power of two choices is a simple, practical randomized load-balancing idea.",
    0,
    0
  ],
  [
    5,
    "whyrand",
    "A Las Vegas algorithm:",
    [
      "Always produces the correct answer; runtime varies",
      "Runs in bounded time but may be wrong",
      "Is always deterministic",
      "Never terminates"
    ],
    "لاس فيقاس: الجواب صحيح دايماً، بس الوقت يتغير.",
    "A Las Vegas algorithm is always correct, but its running time varies.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "A Monte Carlo algorithm:",
    [
      "Runs in bounded time but may be incorrect with small probability",
      "Is always correct",
      "Has unbounded runtime",
      "Never uses randomness"
    ],
    "مونت كارلو: الوقت محدود، بس فيه احتمال صغير يكون الجواب غلط.",
    "A Monte Carlo algorithm has bounded time but a small probability of a wrong answer.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "The key metric of a Las Vegas algorithm is:",
    [
      "Expected running time",
      "Probability of error",
      "Number of pivots",
      "Space"
    ],
    "لاس فيقاس نقيسه بالوقت المتوقع.",
    "Las Vegas algorithms are measured by expected running time.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "The key metric of a Monte Carlo algorithm is:",
    [
      "Probability of error",
      "Expected running time",
      "Stability",
      "Recursion depth"
    ],
    "مونت كارلو نقيسه باحتمال الخطأ.",
    "Monte Carlo algorithms are measured by error probability.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "How can a Monte Carlo algorithm's error probability be reduced?",
    [
      "By repetition",
      "By sorting first",
      "By using a stopwatch",
      "It cannot be reduced"
    ],
    "إذا شغّلنا مونت كارلو كذا مرة بشكل مستقل، يقل احتمال الخطأ.",
    "Running a Monte Carlo algorithm independently several times lowers the error probability.",
    0,
    0
  ],
  [
    5,
    "rquick",
    "Deterministic quicksort with first-element pivot on an already sorted array runs in:",
    [
      "O(n²)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "pivot أول عنصر على مدخلات مرتبة يعطي دايماً أسوأ تقسيم: O(n²).",
    "A first-element pivot on sorted input always gives the most unbalanced split: O(n²).",
    1,
    0
  ],
  [
    5,
    "rquick",
    "In randomized quicksort, the pivot is:",
    [
      "Chosen uniformly at random",
      "Always the first element",
      "Always the median",
      "Always the last element"
    ],
    "الـ pivot ينختار عشوائياً وكل العناصر لها نفس الاحتمال.",
    "The pivot is chosen uniformly at random.",
    1,
    0
  ],
  [
    5,
    "rquick",
    "In RandQuickSort, after choosing random index i, the algorithm:",
    [
      "Swaps A[i] with A[high] then partitions",
      "Sorts A[i] first",
      "Removes A[i]",
      "Splits at i without partition"
    ],
    "نبدّل العنصر العشوائي مع الأخير، وبعدين نسوي partition عادي.",
    "Swap the random element to the end, then run the normal partition.",
    0,
    0
  ],
  [
    5,
    "rquick",
    "The expected number of comparisons of randomized quicksort is:",
    [
      "Θ(n log n)",
      "Θ(n²)",
      "Θ(n)",
      "Θ(log n)"
    ],
    "عدد المقارنات المتوقع Θ(n log n).",
    "The expected number of comparisons is Θ(n log n).",
    1,
    0
  ],
  [
    5,
    "rquick",
    "P(elements i and j are compared) in randomized quicksort is:",
    [
      "2/(j − i + 1)",
      "1/n",
      "1/2",
      "(j − i)/n"
    ],
    "العنصرين i و j يتقارنون بس إذا واحد منهم هو أول pivot ينختار من i..j، والاحتمال 2/(j − i + 1).",
    "Elements i and j are compared only if one of them is the first pivot chosen from i..j: probability 2/(j − i + 1).",
    0,
    1
  ],
  [
    5,
    "rquick",
    "Randomized quicksort is a:",
    [
      "Las Vegas algorithm",
      "Monte Carlo algorithm",
      "Deterministic algorithm",
      "Greedy algorithm"
    ],
    "السريع العشوائي لاس فيقاس لأنه يرتب صح دايماً.",
    "Randomized quicksort is Las Vegas because it always sorts correctly.",
    1,
    0
  ],
  [
    5,
    "rquick",
    "Can randomized quicksort still hit O(n²)?",
    [
      "Yes, but with very low probability",
      "No, never",
      "Yes, always on sorted input",
      "Only for n < 10"
    ],
    "ممكن يصير O(n²)، بس احتماله صغير جداً.",
    "An O(n²) run is still possible, but with very small probability.",
    0,
    0
  ],
  [
    5,
    "rquick",
    "Which pivot strategy is \"often better in practice, but not adversarially robust\"?",
    [
      "Median-of-three",
      "Random element",
      "First element",
      "Last element"
    ],
    "الوسيط من ثلاثة ممتاز عملياً، بس ممكن تنجبر على أسوأ حالة.",
    "Median-of-three works well in practice but can still be forced into the worst case.",
    1,
    0
  ],
  [
    5,
    "rquick",
    "Which pivot strategy is robust against adversarial input?",
    [
      "Random element",
      "First element",
      "Last element",
      "Median-of-three"
    ],
    "الـ pivot العشوائي ما أحد يقدر يستهدفه.",
    "A random pivot cannot be targeted by an adversary.",
    1,
    0
  ],
  [
    5,
    "rquick",
    "The partition step of quicksort runs in:",
    [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "الـ partition يمر على المصفوفة الفرعية مرة وحدة: O(n).",
    "Partition scans the subarray once: O(n).",
    0,
    0
  ],
  [
    5,
    "qselect",
    "Quickselect finds:",
    [
      "The k-th smallest element in an unsorted array",
      "The sorted order of the array",
      "The maximum only",
      "Duplicate elements"
    ],
    "Quickselect يلقى العنصر رقم k من الأصغر بدون ما يرتب كل شي.",
    "Quickselect finds the k-th smallest element without fully sorting.",
    1,
    0
  ],
  [
    5,
    "qselect",
    "After partitioning, Quickselect recurses into:",
    [
      "Only the side containing the k-th element",
      "Both sides",
      "Neither side",
      "The larger side always"
    ],
    "Quickselect يكمل بس في الجهة اللي فيها الموقع k.",
    "Quickselect recurses only into the side that contains index k.",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Expected runtime of randomized Quickselect is:",
    [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(log n)"
    ],
    "مع pivot عشوائي الشغل المتوقع n + n/2 + … = O(n).",
    "With random pivots the expected work is n + n/2 + … = O(n).",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Worst-case runtime of Quickselect is:",
    [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "لو دايماً نختار أصغر أو أكبر عنصر: n + T(n − 1) = O(n²).",
    "Always choosing the min or max pivot gives n + T(n − 1) = O(n²).",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Quickselect's general recurrence is:",
    [
      "T(n) = n + max{T(|X1|), T(|X2|)}",
      "T(n) = 2T(n/2) + n",
      "T(n) = T(n/2) + 1",
      "T(n) = 7T(n/2) + n²"
    ],
    "الـ partition يكلف n، وبعدين استدعاء وحد على الجهة الأكبر في أسوأ حالة.",
    "Partition costs n, then one recursion into the larger side in the worst case.",
    0,
    1
  ],
  [
    5,
    "qselect",
    "Quickselect's worst case recurrence n + T(n − 1) happens when:",
    [
      "One of the parts is empty on each call",
      "Both parts are equal",
      "k is the median",
      "The array is random"
    ],
    "الجهة الفاضية تعني إن المسألة صغرت بعنصر واحد بس.",
    "An empty side means the problem shrinks by only one element.",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Find the 4th smallest element (k = 3, 0-based) of [2, 3, 1, 9, 7, 6, 10, 5]:",
    [
      "5",
      "6",
      "3",
      "7"
    ],
    "المرتبة: 1, 2, 3, 5, 6, 7, 9, 10، والموقع 3 هو 5.",
    "Sorted: 1, 2, 3, 5, 6, 7, 9, 10. Index 3 is 5.",
    1,
    1
  ],
  [
    5,
    "qselect",
    "A common Quickselect application is:",
    [
      "Median finding",
      "Matrix multiplication",
      "Binary search",
      "Hash collision"
    ],
    "إيجاد الوسيط هو نفسه مسألة العنصر رقم k مع k = n/2.",
    "Finding the median is the k-th smallest problem with k = n/2.",
    0,
    0
  ],
  [
    5,
    "qselect",
    "Which is a common Quickselect mistake?",
    [
      "Off-by-one on k",
      "Using random pivot",
      "Keeping low/high indices",
      "Partitioning in O(n)"
    ],
    "الخلط بين 0-based و 1-based في k هو الخطأ الكلاسيكي (off-by-one).",
    "Mixing 0-based and 1-based k is the classic off-by-one bug.",
    0,
    0
  ],
  [
    5,
    "qselect",
    "Why keep (low, high) indices instead of slicing arrays?",
    [
      "To avoid extra space and time",
      "To make it Monte Carlo",
      "To sort the array",
      "To avoid recursion"
    ],
    "نسخ المصفوفات يضيّع مساحة ووقت، فنمرر المؤشرات low و high بدالها.",
    "Slicing copies arrays, which wastes space and time. Pass indices instead.",
    0,
    0
  ],
  [
    5,
    "qselect",
    "Randomized Quickselect is a:",
    [
      "Las Vegas algorithm",
      "Monte Carlo algorithm",
      "Greedy algorithm",
      "Dynamic programming algorithm"
    ],
    "Quickselect يرجّع العنصر الصحيح دايماً، فهو لاس فيقاس.",
    "Quickselect always returns the correct element, so it is Las Vegas.",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Which is NOT listed as a reason randomized approaches win in practice?",
    [
      "They always give exact worst-case O(1)",
      "Simplicity",
      "Adversarial robustness",
      "Tunable guarantees"
    ],
    "الأسباب المذكورة: البساطة، والسرعة، ومقاومة المدخلات السيئة، والتوسّع، والضمانات القابلة للضبط. وما تعطي O(1).",
    "The listed reasons are simplicity, speed, robustness, scalability, and tunable guarantees. They do not give O(1).",
    0,
    0
  ],
  [
    1,
    "algo",
    "Euclid(60, 24): what does it return?",
    [
      "12",
      "6",
      "24",
      "4"
    ],
    "60 mod 24 = 12، بعدين 24 mod 12 = 0، فالجواب 12.",
    "60 mod 24 = 12, then 24 mod 12 = 0, so gcd = 12.",
    0,
    1
  ],
  [
    1,
    "algo",
    "How many iterations does Euclid(48, 18) perform?",
    [
      "3",
      "2",
      "4",
      "5"
    ],
    "(48,18) ثم (18,12) ثم (12,6) ثم (6,0): ثلاث لفات.",
    "(48,18) → (18,12) → (12,6) → (6,0): 3 iterations.",
    0,
    1
  ],
  [
    1,
    "algo",
    "\"Exact vs approximate solutions\" in the design process means:",
    [
      "Deciding if the solution must be exact or can be approximated with numerical methods",
      "Choosing the programming language",
      "Measuring with a stopwatch",
      "Choosing the hardware vendor"
    ],
    "نقرر هل الحل لازم يكون دقيق، أو يكفي تقريبي بطرق عددية.",
    "We decide whether an exact answer is needed or an approximation via numerical methods suffices.",
    0,
    0
  ],
  [
    1,
    "algo",
    "A general approach to solving problems algorithmically is called a:",
    [
      "Design technique / strategy / paradigm",
      "Data structure",
      "Programming language",
      "Compiler"
    ],
    "أسلوب التصميم (paradigm) طريقة عامة لحل المشاكل.",
    "A design technique (paradigm) is a general approach to solving problems algorithmically.",
    0,
    0
  ],
  [
    1,
    "algo",
    "Which step comes right after designing the algorithm (pseudocode)?",
    [
      "Proving its correctness",
      "Coding it",
      "Choosing hardware",
      "Publishing it"
    ],
    "بعد التصميم نثبت الصحة، ثم نحلل، ثم نبرمج.",
    "After design we prove correctness, then analyse, then code.",
    0,
    0
  ],
  [
    1,
    "why",
    "For an array, the input size n is:",
    [
      "The number of elements",
      "The sum of elements",
      "The largest element",
      "The memory address"
    ],
    "حجم المصفوفة = عدد عناصرها.",
    "The input size of an array is its number of elements.",
    0,
    0
  ],
  [
    1,
    "why",
    "Instead of measuring seconds, algorithm analysis:",
    [
      "Counts basic operations",
      "Counts lines of code",
      "Measures CPU temperature",
      "Counts files"
    ],
    "نعدّ العمليات الأساسية لأنها ما تعتمد على الجهاز.",
    "We count basic operations because they are machine-independent.",
    0,
    0
  ],
  [
    1,
    "why",
    "Besides running time, algorithms can also be compared by:",
    [
      "Memory requirements and programmer's effort",
      "The color of the code",
      "The number of comments",
      "The file name"
    ],
    "المقارنة تكون بالوقت أساساً، ومعه الذاكرة وجهد المبرمج.",
    "Running time mainly, plus memory requirements and programmer's effort.",
    0,
    0
  ],
  [
    1,
    "timec",
    "Count the steps: `x = 5; y = x + 2; return y;`",
    [
      "3",
      "1",
      "2",
      "5"
    ],
    "ثلاث جمل بسيطة، كل وحدة خطوة.",
    "Three simple statements, 1 step each = 3.",
    0,
    0
  ],
  [
    1,
    "timec",
    "A loop runs n times and its body has 3 simple statements. Steps for the body:",
    [
      "3n",
      "n + 3",
      "3",
      "n³"
    ],
    "الخطوات داخل الحلقة × عدد التكرار = 3n.",
    "Steps inside × iterations = 3n.",
    0,
    0
  ],
  [
    1,
    "timec",
    "An outer loop runs n times and an inner loop runs m times with 1 statement. Total body steps:",
    [
      "n·m",
      "n + m",
      "n",
      "m²"
    ],
    "الحلقات المتداخلة تنضرب.",
    "Nested loops multiply: n·m.",
    0,
    0
  ],
  [
    1,
    "timec",
    "A loop that halves n each iteration (n = n/2) runs about:",
    [
      "log₂ n times",
      "n/2 times",
      "n times",
      "2n times"
    ],
    "القسمة على 2 كل مرة تعطي log₂ n.",
    "Dividing by 2 each step gives log₂ n iterations.",
    0,
    0
  ],
  [
    1,
    "timec",
    "An if-statement's step count is:",
    [
      "Steps for the test + steps inside the branch",
      "Always 0",
      "Always n",
      "Steps of both branches multiplied"
    ],
    "الشرط = خطوات الاختبار + خطوات الفرع اللي ينفذ.",
    "Conditional = test steps + steps of the executed branch.",
    0,
    0
  ],
  [
    1,
    "timec",
    "In step counting, an algorithm heading and braces cost:",
    [
      "0 steps",
      "1 step each",
      "n steps",
      "2 steps"
    ],
    "العنوان والأقواس ما لها تكلفة.",
    "Headings and braces cost 0 steps.",
    0,
    0
  ],
  [
    1,
    "timec",
    "The exercise find(A, x) has total time steps:",
    [
      "3 + 2n",
      "2 + n",
      "3n + 4",
      "n²"
    ],
    "من جدول السلايد: 3 + 2n.",
    "From the slide's table: 3 + 2n.",
    0,
    1
  ],
  [
    1,
    "spacec",
    "A pointer/reference costs how much space in the counting rules?",
    [
      "1 unit",
      "n units",
      "0 units",
      "2 units"
    ],
    "المؤشر وحدة وحدة.",
    "Each pointer/reference is 1 unit.",
    0,
    0
  ],
  [
    1,
    "spacec",
    "Function call overhead includes:",
    [
      "Parameters + return address + local variables",
      "Only the return value",
      "Only global variables",
      "Nothing"
    ],
    "تكلفة الاستدعاء: المعاملات وعنوان الرجوع والمتغيرات المحلية.",
    "Call overhead = parameters + return address + locals.",
    0,
    0
  ],
  [
    1,
    "spacec",
    "A recursive function of depth n that uses 3 local variables per call needs space:",
    [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "العمق n × ذاكرة ثابتة = O(n).",
    "Depth n × constant memory per call = O(n).",
    0,
    0
  ],
  [
    1,
    "spacec",
    "`int square(int a){ return a*a; }` has space complexity:",
    [
      "Constant",
      "Linear",
      "Quadratic",
      "Logarithmic"
    ],
    "مساحة ثابتة لكل المدخلات.",
    "A fixed amount of space for all inputs: constant.",
    0,
    0
  ],
  [
    1,
    "spacec",
    "`ALG SUM(A, n): total = 0; for i = 1 to n: total = total + A[i]; return total`. A is an array of n integers. Using the space-counting rules (array of size n → n units, each simple variable → 1 unit), what is S(p)?",
    [
      "3 + n",
      "n",
      "3",
      "2n"
    ],
    "المصفوفة A تاخذ n، وn وtotal وi كل واحد وحدة، فالمجموع n + 3.",
    "A takes n units; n, total and i take 1 each: S(p) = n + 3.",
    0,
    0
  ],
  [
    1,
    "cases",
    "Which inequality relates the bounds to running time?",
    [
      "LowerBound ≤ RunningTime ≤ UpperBound",
      "UpperBound ≤ RunningTime ≤ LowerBound",
      "RunningTime ≤ LowerBound",
      "They are unrelated"
    ],
    "الوقت دايماً بين الحد الأدنى والأعلى.",
    "Running time always lies between the lower and upper bound.",
    0,
    0
  ],
  [
    1,
    "cases",
    "Insertion sort's best-case input is:",
    [
      "An already sorted array",
      "A reverse-sorted array",
      "A random array",
      "An array of size 1 only"
    ],
    "المرتبة أصلاً ما تحتاج تحريك.",
    "Already sorted input needs no shifting.",
    0,
    0
  ],
  [
    1,
    "cases",
    "Which case is most commonly analysed because it gives a guarantee?",
    [
      "Worst case",
      "Best case",
      "Average case",
      "Random case"
    ],
    "أسوأ حالة لأنها ضمان.",
    "The worst case, because it is a guarantee.",
    0,
    0
  ],
  [
    1,
    "cases",
    "Binary search best case occurs when:",
    [
      "The key is at the middle position on the first check",
      "The key is absent",
      "The array is unsorted",
      "n is even"
    ],
    "لو المفتاح في الوسط من أول مقارنة: O(1).",
    "If the key is the first middle element: O(1).",
    0,
    0
  ],
  [
    1,
    "growth",
    "Which grows fastest?",
    [
      "n!",
      "2^{n}",
      "n³",
      "n log n"
    ],
    "n! أسرع شي في الترتيب.",
    "n! is the fastest in the order of growth.",
    0,
    0
  ],
  [
    1,
    "growth",
    "Which grows slowest (besides constants)?",
    [
      "log n",
      "n",
      "n log n",
      "√n"
    ],
    "log n أبطأ من أي قوة لـ n.",
    "log n grows slower than any power of n.",
    0,
    0
  ],
  [
    1,
    "growth",
    "Arrange: n², log n, 2^{n}, n — from slowest to fastest:",
    [
      "log n, n, n², 2^{n}",
      "n, log n, n², 2^{n}",
      "log n, n², n, 2^{n}",
      "2^{n}, n², n, log n"
    ],
    "حسب الترتيب المعروف.",
    "By the standard order of growth.",
    0,
    0
  ],
  [
    1,
    "growth",
    "Array access A[i] is:",
    [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "الوصول المباشر ثابت.",
    "Direct access is constant time.",
    0,
    0
  ],
  [
    1,
    "growth",
    "If an algorithm is O(n²) and n doubles, its time roughly:",
    [
      "Quadruples",
      "Doubles",
      "Stays the same",
      "Increases by 1"
    ],
    "(2n)² = 4n².",
    "(2n)² = 4n², so it quadruples.",
    0,
    0
  ],
  [
    1,
    "growth",
    "If an algorithm is O(log n) and n doubles, its time:",
    [
      "Increases by about one step",
      "Doubles",
      "Quadruples",
      "Halves"
    ],
    "log(2n) = log n + 1.",
    "log(2n) = log n + 1: about one more step.",
    0,
    0
  ],
  [
    1,
    "growth",
    "If an algorithm is O(n) and n doubles, its time roughly:",
    [
      "Doubles",
      "Quadruples",
      "Stays the same",
      "Triples"
    ],
    "خطي: الضعف.",
    "Linear time doubles.",
    0,
    0
  ],
  [
    1,
    "bigo",
    "Which is the tight Big-O of f(n) = 4n³ + 2n² + 100?",
    [
      "O(n³)",
      "O(n²)",
      "O(n⁴)",
      "O(100)"
    ],
    "الحد المسيطر 4n³.",
    "The dominant term is 4n³ → O(n³).",
    1,
    0
  ],
  [
    1,
    "bigo",
    "f(n) = n log n + n². Tight Big-O:",
    [
      "O(n²)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "n² أسرع من n log n.",
    "n² dominates n log n.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "f(n) = 2^{n} + n¹⁰⁰. Tight Big-O:",
    [
      "O(2^{n})",
      "O(n¹⁰⁰)",
      "O(n)",
      "O(1)"
    ],
    "الأسي يغلب أي قوة.",
    "Exponential dominates any polynomial.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "Which statement is TRUE for f(n) = 5n?",
    [
      "f(n) is O(n²)",
      "f(n) is Ω(n²)",
      "f(n) is Θ(n²)",
      "f(n) is O(1)"
    ],
    "O حد أعلى، فـ n² يصلح كحد أعلى واسع.",
    "O is an upper bound, so n² is a valid (loose) upper bound.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "Which statement is TRUE for f(n) = 5n²?",
    [
      "f(n) is Ω(n)",
      "f(n) is O(n)",
      "f(n) is Θ(n)",
      "f(n) is Θ(n³)"
    ],
    "Ω حد أدنى، وn أصغر من n² فيصلح.",
    "Ω is a lower bound; n is below n², so Ω(n) holds.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "The constant n_{0} in the Big-O definition means:",
    [
      "The inequality only needs to hold for all n ≥ n_{0}",
      "n must equal n_{0}",
      "n_{0} is the input size",
      "n_{0} must be 0"
    ],
    "المتباينة لازم تتحقق من n₀ وطالع بس.",
    "The inequality must hold only for all sufficiently large n ≥ n₀.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "Big-Θ for f(n) = 6n log n + 3n:",
    [
      "Θ(n log n)",
      "Θ(n)",
      "Θ(n²)",
      "Θ(log n)"
    ],
    "الحد المسيطر n log n من الجهتين.",
    "n log n dominates from both sides.",
    1,
    1
  ],
  [
    1,
    "bigo",
    "Which function does NOT have a Big-Θ bound by a single simple function?",
    [
      "f(n) = n when n is even, n² when n is odd",
      "f(n) = 3n² + 5",
      "f(n) = n log n",
      "f(n) = 7"
    ],
    "الدالة المتذبذبة ما لها Θ.",
    "An alternating-growth function has no Θ bound.",
    0,
    0
  ],
  [
    2,
    "proofs",
    "To prove 7n² + 25n + 60 ∈ O(n²) using the slide method, c =",
    [
      "92 (7 + 25 + 60), with n₀ = 1",
      "7",
      "25",
      "60"
    ],
    "نجمع المعاملات: 7+25+60 = 92 لما n ≥ 1.",
    "Sum the coefficients: 7 + 25 + 60 = 92 for n ≥ 1.",
    1,
    1
  ],
  [
    2,
    "proofs",
    "To prove 7n² + 25n + 60 ∈ Ω(n²), choose:",
    [
      "c = 7, n₀ = 0",
      "c = 92, n₀ = 1",
      "c = 25, n₀ = 2",
      "c = 60, n₀ = 0"
    ],
    "نخلي الحد المسيطر بس: 7n².",
    "Keep only the dominant term: f(n) ≥ 7n².",
    1,
    1
  ],
  [
    2,
    "proofs",
    "To prove 50n log n + 20n ∈ O(n log n), c can be:",
    [
      "70 with n₀ = 2",
      "50 with n₀ = 0",
      "20 with n₀ = 1",
      "1 with n₀ = 1"
    ],
    "20n ≤ 20n log n لما n ≥ 2، فـ c = 50 + 20 = 70.",
    "20n ≤ 20n log n for n ≥ 2, so c = 50 + 20 = 70.",
    1,
    1
  ],
  [
    2,
    "proofs",
    "To prove 5 log n + 100 ∈ O(log n), c can be:",
    [
      "105 with n₀ = 2",
      "5 with n₀ = 0",
      "100 with n₀ = 1",
      "1 with n₀ = 0"
    ],
    "100 ≤ 100 log n لما n ≥ 2 (log 2 = 1)، فـ c = 105.",
    "100 ≤ 100 log n for n ≥ 2 (log₂2 = 1), so c = 105.",
    1,
    1
  ],
  [
    2,
    "proofs",
    "Why does 1000 ≤ 1000n² hold?",
    [
      "Because n² ≥ 1 for n ≥ 1",
      "Because n² < 1",
      "Because 1000 is negative",
      "It never holds"
    ],
    "لأن n² ≥ 1 من n ≥ 1.",
    "Because n² ≥ 1 whenever n ≥ 1.",
    0,
    0
  ],
  [
    2,
    "proofs",
    "For 3n + 2 ∈ Θ(n), valid constants are:",
    [
      "c₁ = 3, c₂ = 5, n₀ = 1",
      "c₁ = 5, c₂ = 3, n₀ = 1",
      "c₁ = 0, c₂ = 0",
      "c₁ = 3, c₂ = 3, n₀ = 0"
    ],
    "3n ≤ 3n + 2 ≤ 5n لما n ≥ 1.",
    "3n ≤ 3n + 2 ≤ 5n for n ≥ 1.",
    1,
    1
  ],
  [
    2,
    "proofs",
    "In a Θ proof, c₁ and c₂ are:",
    [
      "The lower and upper constants",
      "Both upper constants",
      "The input sizes",
      "Always equal"
    ],
    "c₁ للحد الأدنى وc₂ للأعلى.",
    "c₁ is for the lower bound, c₂ for the upper bound.",
    0,
    0
  ],
  [
    2,
    "proofs",
    "To prove n³ + 20n + 100 ∈ Θ(n³), the upper constant with n₀ = 1 is:",
    [
      "121",
      "1",
      "100",
      "20"
    ],
    "1 + 20 + 100 = 121.",
    "1 + 20 + 100 = 121.",
    1,
    1
  ],
  [
    2,
    "compare",
    "True or False: n³ = O(n²)",
    [
      "False",
      "True"
    ],
    "n³ أسرع من n².",
    "n³ grows faster than n², so it is not O(n²).",
    0,
    0
  ],
  [
    2,
    "compare",
    "True or False: n² = Ω(n log n)",
    [
      "True",
      "False"
    ],
    "n² أسرع، فـ n log n حد أدنى صحيح.",
    "n² grows faster, so n log n is a valid lower bound.",
    0,
    0
  ],
  [
    2,
    "compare",
    "True or False: log n = O(n)",
    [
      "True",
      "False"
    ],
    "log n أبطأ من n.",
    "log n grows slower than n.",
    0,
    0
  ],
  [
    2,
    "compare",
    "True or False: 2^{n} = O(n¹⁰)",
    [
      "False",
      "True"
    ],
    "الأسي أسرع من أي قوة.",
    "Exponential grows faster than any polynomial.",
    0,
    0
  ],
  [
    2,
    "compare",
    "True or False: 100n + 5 = Θ(n)",
    [
      "True",
      "False"
    ],
    "خطي من الجهتين.",
    "Linear on both sides.",
    0,
    0
  ],
  [
    2,
    "compare",
    "True or False: n log n = O(n)",
    [
      "False",
      "True"
    ],
    "n log n أسرع من n.",
    "n log n grows faster than n.",
    0,
    0
  ],
  [
    2,
    "compare",
    "For f(n) = 4n log n, which is NOT a valid Big-O?",
    [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(2^{n})"
    ],
    "O لازم يكون نفسها أو أكبر، وn أصغر.",
    "Big-O must be the same or larger; n is smaller.",
    0,
    0
  ],
  [
    2,
    "compare",
    "For f(n) = 4n log n, which is NOT a valid Big-Ω?",
    [
      "Ω(n²)",
      "Ω(n log n)",
      "Ω(n)",
      "Ω(1)"
    ],
    "Ω لازم يكون نفسها أو أصغر، وn² أكبر.",
    "Big-Ω must be the same or smaller; n² is larger.",
    0,
    0
  ],
  [
    2,
    "compare",
    "Insertion sort's average case is:",
    [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "المتوسط نفس الأسوأ: n².",
    "Average case is O(n²), like the worst case.",
    0,
    0
  ],
  [
    2,
    "compare",
    "In insertion sort, the variable `key` holds:",
    [
      "The current element A[i] being inserted",
      "The largest element",
      "The array length",
      "The pivot"
    ],
    "key العنصر اللي نحطه في مكانه.",
    "key is the current element A[i] to insert.",
    0,
    0
  ],
  [
    3,
    "iter",
    "`for i = 1 to n: for j = 1 to n: for k = 1 to n:` runs:",
    [
      "O(n³)",
      "O(n²)",
      "O(3n)",
      "O(n log n)"
    ],
    "ثلاث حلقات n: n³.",
    "Three nested loops of n: n³.",
    0,
    0
  ],
  [
    3,
    "iter",
    "`for i = 1 to n: for j = 1 to 100:` runs:",
    [
      "O(n)",
      "O(n²)",
      "O(100)",
      "O(n log n)"
    ],
    "الحلقة الداخلية ثابتة: 100n = O(n).",
    "The inner loop is constant: 100n = O(n).",
    0,
    0
  ],
  [
    3,
    "iter",
    "`i = 1; while i < n: i = i * 2` runs:",
    [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "i تتضاعف: log n.",
    "i doubles each time: log n iterations.",
    0,
    0
  ],
  [
    3,
    "iter",
    "`for i = 1 to n: j = 1; while j < n: j = j * 2` runs:",
    [
      "O(n log n)",
      "O(n²)",
      "O(log n)",
      "O(n)"
    ],
    "n × log n.",
    "n outer × log n inner.",
    0,
    0
  ],
  [
    3,
    "iter",
    "`for i = 1 to n: for j = i to n:` runs:",
    [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "n + (n−1) + … + 1 = n(n+1)/2.",
    "n + (n−1) + … + 1 = n(n+1)/2 = O(n²).",
    0,
    0
  ],
  [
    3,
    "iter",
    "Exact number of times the inner statement runs in `for i = 1 to 10: for j = 1 to i`:",
    [
      "55",
      "100",
      "10",
      "45"
    ],
    "10×11/2 = 55.",
    "10·11/2 = 55.",
    0,
    1
  ],
  [
    3,
    "iter",
    "Σ_{i=1}^{100} i =",
    [
      "5050",
      "10000",
      "5000",
      "100"
    ],
    "100×101/2 = 5050.",
    "100·101/2 = 5050.",
    0,
    1
  ],
  [
    3,
    "iter",
    "Σ_{i=0}^{n} 2^{i} =",
    [
      "2^{n+1} − 1",
      "2^{n}",
      "n·2",
      "2^{n} − 1"
    ],
    "متسلسلة هندسية a = 2.",
    "Geometric series with a = 2: 2^(n+1) − 1.",
    0,
    1
  ],
  [
    3,
    "iter",
    "Σ_{i=3}^{10} 5 =",
    [
      "40",
      "50",
      "35",
      "15"
    ],
    "5 × (10 − 3 + 1) = 40.",
    "5 × (10 − 3 + 1) = 40.",
    0,
    1
  ],
  [
    3,
    "iter",
    "Σ_{i=1}^{n} i² is in:",
    [
      "Θ(n³)",
      "Θ(n²)",
      "Θ(n)",
      "Θ(n log n)"
    ],
    "n(n+1)(2n+1)/6 ≈ n³/3.",
    "n(n+1)(2n+1)/6 ≈ n³/3 → Θ(n³).",
    0,
    0
  ],
  [
    3,
    "recur",
    "T(n) = T(n − 1) + c solves to:",
    [
      "Θ(n)",
      "Θ(n²)",
      "Θ(log n)",
      "Θ(1)"
    ],
    "n مرة × ثابت.",
    "n levels × constant = Θ(n).",
    1,
    0
  ],
  [
    3,
    "recur",
    "Which recurrence describes an algorithm that halves the input and does constant work?",
    [
      "T(n) = T(n/2) + c",
      "T(n) = T(n − 1) + n",
      "T(n) = 2T(n/2) + n",
      "T(n) = T(n − 1) + c"
    ],
    "نصف المدخل + ثابت.",
    "Half the input plus constant work: T(n/2) + c.",
    1,
    0
  ],
  [
    3,
    "recur",
    "Which recurrence describes an algorithm that splits into 2 halves and does constant work?",
    [
      "T(n) = 2T(n/2) + 1",
      "T(n) = T(n/2) + 1",
      "T(n) = T(n − 1) + 1",
      "T(n) = 2T(n − 1) + 1"
    ],
    "نصين + ثابت.",
    "Two halves plus constant work: 2T(n/2) + 1.",
    1,
    0
  ],
  [
    3,
    "recur",
    "Which recurrence describes \"loop through the input to eliminate one item\"?",
    [
      "T(n) = T(n − 1) + n",
      "T(n) = T(n/2) + n",
      "T(n) = 2T(n/2) + n",
      "T(n) = T(n − 1) + 1"
    ],
    "يمر على الكل ويشيل عنصر: T(n−1) + n.",
    "Scan all and remove one item: T(n − 1) + n.",
    1,
    0
  ],
  [
    3,
    "recur",
    "In `funR(n)`, the value of c (non-recursive basic operations) in the slide is:",
    [
      "2",
      "1",
      "n",
      "0"
    ],
    "print و if = خطوتين.",
    "print and the if test: c = 2.",
    0,
    1
  ],
  [
    3,
    "recur",
    "To find the runtime of a recursive algorithm we must:",
    [
      "Solve its recurrence",
      "Count its lines",
      "Measure with a stopwatch",
      "Convert it to HTML"
    ],
    "نحل العلاقة التكرارية.",
    "We solve its recurrence.",
    0,
    0
  ],
  [
    3,
    "backsub",
    "T(n) = T(n/2) + 1, T(1) = 1. After k steps the pattern is:",
    [
      "T(n/2^{k}) + k",
      "2^{k}T(n/2) + k",
      "T(n − k) + k",
      "kT(n/k)"
    ],
    "كل خطوة تقسم على 2 وتزيد 1.",
    "Each step halves n and adds 1: T(n/2^k) + k.",
    1,
    0
  ],
  [
    3,
    "backsub",
    "T(n) = T(n/2) + 1 solves to:",
    [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "k = log n، فـ T = log n + 1.",
    "k = log n, so T(n) = log n + 1.",
    1,
    0
  ],
  [
    3,
    "backsub",
    "T(n) = 2T(n − 1) + 1, T(0) = 0 (back-substitution) solves to:",
    [
      "O(2^{n})",
      "O(n)",
      "O(n²)",
      "O(log n)"
    ],
    "كل مستوى يتضاعف: 2^n − 1.",
    "Each level doubles: 2^n − 1 → O(2^n).",
    0,
    1
  ],
  [
    3,
    "backsub",
    "In merge sort back-substitution, the final expression is:",
    [
      "n·T(1) + n log n",
      "log n + n",
      "n²",
      "2^{n}"
    ],
    "2^k T(1) + kn مع k = log n.",
    "2^k T(1) + kn with k = log n: n + n log n.",
    1,
    0
  ],
  [
    3,
    "backsub",
    "For T(n) = 3 + T(n − 1), T(1) = 1, the closed form is:",
    [
      "3n − 2",
      "3n",
      "n + 3",
      "3^{n}"
    ],
    "k = n − 1: 3(n−1) + 1 = 3n − 2.",
    "k = n − 1: 3(n−1) + 1 = 3n − 2.",
    0,
    1
  ],
  [
    3,
    "rtree",
    "For T(n) = 3T(n/3) + n, each level of the recursion tree costs:",
    [
      "n",
      "3n",
      "n/3",
      "n²"
    ],
    "3^i عقدة × n/3^i = n.",
    "3^i nodes × n/3^i = n per level.",
    0,
    0
  ],
  [
    3,
    "rtree",
    "For T(n) = 3T(n/3) + n, the tree height is:",
    [
      "log₃ n",
      "log₂ n",
      "n/3",
      "3n"
    ],
    "الحجم يقسم على 3 كل مستوى.",
    "The size divides by 3 each level: log₃ n.",
    0,
    0
  ],
  [
    3,
    "rtree",
    "For T(n) = 4T(n/2) + n, level i costs:",
    [
      "2^{i}·n",
      "n",
      "n/2^{i}",
      "4n"
    ],
    "4^i عقدة × n/2^i = 2^i n.",
    "4^i nodes × n/2^i = 2^i·n.",
    0,
    1
  ],
  [
    3,
    "rtree",
    "The number of leaves in the tree of T(n) = aT(n/b) + f(n) is:",
    [
      "n^{log_{b} a}",
      "a·b",
      "log n",
      "n"
    ],
    "a^(log_b n) = n^(log_b a).",
    "a^(log_b n) = n^(log_b a) leaves.",
    0,
    1
  ],
  [
    3,
    "merge",
    "Merge [1, 4, 7] and [2, 3, 9]. The result is:",
    [
      "[1, 2, 3, 4, 7, 9]",
      "[1, 4, 7, 2, 3, 9]",
      "[2, 3, 9, 1, 4, 7]",
      "[1, 2, 4, 3, 7, 9]"
    ],
    "ناخذ الأصغر من رأس القائمتين كل مرة.",
    "Repeatedly take the smaller head of the two lists.",
    0,
    0
  ],
  [
    3,
    "merge",
    "Merge sort on [5, 2, 4, 1]: after splitting and sorting halves we merge:",
    [
      "[2, 5] and [1, 4]",
      "[5, 2] and [4, 1]",
      "[1, 2] and [4, 5]",
      "[2, 4] and [1, 5]"
    ],
    "كل نص يترتب لحاله قبل الدمج.",
    "Each half is sorted before merging: [2,5] and [1,4].",
    0,
    1
  ],
  [
    3,
    "merge",
    "How many levels of splitting does merge sort have for n = 16?",
    [
      "4",
      "16",
      "8",
      "2"
    ],
    "log₂16 = 4.",
    "log₂ 16 = 4.",
    0,
    0
  ],
  [
    3,
    "merge",
    "Merge sort's best, average, and worst case are all:",
    [
      "Θ(n log n)",
      "Θ(n)",
      "Θ(n²)",
      "Different"
    ],
    "دايماً n log n.",
    "Always Θ(n log n).",
    0,
    0
  ],
  [
    3,
    "merge",
    "Merge sort's recursion depth contributes how much space?",
    [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n²)"
    ],
    "عمق الاستدعاء log n.",
    "The call-stack depth is log n.",
    0,
    0
  ],
  [
    4,
    "master",
    "T(n) = 9T(n/3) + n solves to:",
    [
      "Θ(n²)",
      "Θ(n log n)",
      "Θ(n)",
      "Θ(n³)"
    ],
    "log₃9 = 2 > 1: Case 1 → n².",
    "log₃9 = 2 > k = 1: Case 1 → Θ(n²).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = T(2n/3) + 1 solves to:",
    [
      "Θ(log n)",
      "Θ(n)",
      "Θ(1)",
      "Θ(n log n)"
    ],
    "a = 1، b = 3/2: log = 0 = k → Case 2 → log n.",
    "a = 1, b = 3/2: log_b a = 0 = k → Case 2 → Θ(log n).",
    0,
    0
  ],
  [
    4,
    "master",
    "T(n) = 3T(n/4) + n log n solves to:",
    [
      "Θ(n log n)",
      "Θ(n^{0.79})",
      "Θ(n log² n)",
      "Θ(n)"
    ],
    "log₄3 ≈ 0.79 < 1: Case 3، p = 1 → n log n.",
    "log₄3 ≈ 0.79 < k = 1: Case 3, p = 1 → Θ(n log n).",
    1,
    1
  ],
  [
    4,
    "master",
    "T(n) = 2T(n/4) + √n solves to:",
    [
      "Θ(√n log n)",
      "Θ(√n)",
      "Θ(n)",
      "Θ(log n)"
    ],
    "log₄2 = 0.5 = k: Case 2 → √n log n.",
    "log₄2 = 0.5 = k: Case 2, p = 0 → Θ(√n log n).",
    1,
    1
  ],
  [
    4,
    "master",
    "T(n) = 4T(n/2) + n³ solves to:",
    [
      "Θ(n³)",
      "Θ(n²)",
      "Θ(n² log n)",
      "Θ(n³ log n)"
    ],
    "log₂4 = 2 < 3: Case 3 → n³.",
    "log₂4 = 2 < k = 3: Case 3 → Θ(n³).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 4T(n/2) + n² solves to:",
    [
      "Θ(n² log n)",
      "Θ(n²)",
      "Θ(n³)",
      "Θ(n)"
    ],
    "log₂4 = 2 = k: Case 2 → n² log n.",
    "log₂4 = 2 = k: Case 2 → Θ(n² log n).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 16T(n/4) + n solves to:",
    [
      "Θ(n²)",
      "Θ(n)",
      "Θ(n log n)",
      "Θ(n⁴)"
    ],
    "log₄16 = 2 > 1: Case 1 → n².",
    "log₄16 = 2 > k = 1: Case 1 → Θ(n²).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 2T(n/2) + n² solves to:",
    [
      "Θ(n²)",
      "Θ(n log n)",
      "Θ(n² log n)",
      "Θ(n)"
    ],
    "log₂2 = 1 < 2: Case 3 → n².",
    "log₂2 = 1 < k = 2: Case 3 → Θ(n²).",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 7T(n/2) + n² is solved by which case?",
    [
      "Case 1",
      "Case 2",
      "Case 3",
      "Not applicable"
    ],
    "log₂7 ≈ 2.81 > 2.",
    "log₂7 ≈ 2.81 > 2 → Case 1.",
    1,
    0
  ],
  [
    4,
    "master",
    "Can the Master Theorem (this form) solve T(n) = T(n − 1) + n?",
    [
      "No, it is not of the form aT(n/b) + f(n)",
      "Yes, Case 1",
      "Yes, Case 2",
      "Yes, Case 3"
    ],
    "لازم n/b مو n − 1.",
    "It needs n/b, not n − 1, so it does not apply.",
    1,
    0
  ],
  [
    4,
    "master",
    "Which is NOT a valid Master Theorem condition?",
    [
      "a < 1",
      "a ≥ 1",
      "b > 1",
      "f(n) = Θ(n^{k} log^{p} n)"
    ],
    "الشرط a ≥ 1.",
    "The condition is a ≥ 1, so a < 1 is invalid.",
    0,
    0
  ],
  [
    4,
    "master",
    "In the Master Theorem, comparing log_b a with k compares:",
    [
      "The cost of the leaves vs the cost of the root",
      "Time vs space",
      "Best vs worst case",
      "Two different algorithms"
    ],
    "المقارنة بين تكلفة الأوراق والجذر.",
    "It compares the cost at the leaves vs at the root.",
    1,
    0
  ],
  [
    4,
    "master",
    "T(n) = 3T(n/2) + n solves to:",
    [
      "Θ(n^{log₂3}) ≈ Θ(n^{1.58})",
      "Θ(n log n)",
      "Θ(n)",
      "Θ(n²)"
    ],
    "log₂3 ≈ 1.58 > 1: Case 1.",
    "log₂3 ≈ 1.58 > 1: Case 1.",
    1,
    0
  ],
  [
    4,
    "dc",
    "Binary search for K = 70 in a sorted array of 15 elements needs at most how many comparisons?",
    [
      "4",
      "15",
      "8",
      "2"
    ],
    "⌈log₂16⌉ = 4.",
    "⌈log₂(15+1)⌉ = 4 comparisons.",
    1,
    1
  ],
  [
    4,
    "dc",
    "Binary search: low = 0, high = 9. The first mid is:",
    [
      "4",
      "5",
      "9",
      "0"
    ],
    "(0 + 9)/2 = 4 (قسمة صحيحة).",
    "(0 + 9)/2 = 4 (integer division).",
    0,
    1
  ],
  [
    4,
    "dc",
    "Binary search space for the recursive version is:",
    [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "عمق الاستدعاء log n.",
    "Recursion depth log n.",
    0,
    0
  ],
  [
    4,
    "dc",
    "Partition [3, 8, 2, 5] with pivot = last element (5). The final pivot index is:",
    [
      "2",
      "1",
      "3",
      "0"
    ],
    "الأصغر من 5: 3 و2 ← يصير الـ pivot في موقع 2.",
    "Elements ≤ 5: 3 and 2, so the pivot lands at index 2.",
    1,
    1
  ],
  [
    4,
    "dc",
    "Quicksort's best case occurs when the pivot:",
    [
      "Splits the array in half",
      "Is the smallest element",
      "Is the largest element",
      "Is the first element of a sorted array"
    ],
    "التقسيم المتوازن أفضل حالة.",
    "A balanced split gives the best case.",
    1,
    0
  ],
  [
    4,
    "dc",
    "Quicksort best-case recurrence:",
    [
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n − 1) + O(n)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 8T(n/2) + n²"
    ],
    "نصين + partition خطي.",
    "Two halves + linear partition.",
    1,
    0
  ],
  [
    4,
    "dc",
    "In the Lomuto partition, i starts at:",
    [
      "low − 1",
      "low",
      "high",
      "0 always"
    ],
    "i = low − 1.",
    "i starts at low − 1.",
    0,
    1
  ],
  [
    4,
    "dc",
    "The generic divide-and-conquer recurrence is:",
    [
      "T(n) = aT(n/b) + f(n)",
      "T(n) = T(n − 1) + 1",
      "T(n) = n!",
      "T(n) = 2^{n}"
    ],
    "a مسائل بحجم n/b + تكلفة التقسيم والدمج.",
    "a subproblems of size n/b plus dividing/combining cost.",
    1,
    0
  ],
  [
    4,
    "matrix",
    "For 2×2 matrices, c₁₁ =",
    [
      "a₁₁b₁₁ + a₁₂b₂₁",
      "a₁₁b₁₁ + a₂₁b₁₂",
      "a₁₁ + b₁₁",
      "a₁₂b₁₂ + a₂₁b₂₁"
    ],
    "صف 1 من A × عمود 1 من B.",
    "Row 1 of A times column 1 of B.",
    0,
    1
  ],
  [
    4,
    "matrix",
    "In Strassen, C₁₂ =",
    [
      "M3 + M5",
      "M1 + M4 − M5 + M7",
      "M2 + M4",
      "M1 − M2 + M3 + M6"
    ],
    "من السلايد: C12 = M3 + M5.",
    "From the slide: C12 = M3 + M5.",
    0,
    1
  ],
  [
    4,
    "matrix",
    "Strassen's extra additions/subtractions per level cost:",
    [
      "O(n²)",
      "O(n³)",
      "O(1)",
      "O(log n)"
    ],
    "جمع المصفوفات n².",
    "Matrix additions cost O(n²).",
    0,
    0
  ],
  [
    4,
    "matrix",
    "Why does naive recursive multiplication not beat O(n³)?",
    [
      "8 subproblems of size n/2 give log₂8 = 3",
      "It uses 7 products",
      "It has no recursion",
      "It uses O(1) space"
    ],
    "log₂8 = 3 بالضبط.",
    "8 subproblems: log₂8 = 3 → n³.",
    0,
    0
  ],
  [
    4,
    "matrix",
    "Modern matrix multiplication algorithms reduced the exponent to:",
    [
      "Less than 2.4",
      "Exactly 3",
      "More than 3",
      "Exactly 2"
    ],
    "الحديثة أقل من 2.4.",
    "Modern methods are below 2.4.",
    0,
    1
  ],
  [
    4,
    "sorts",
    "Which sort is stable AND guarantees O(n log n)?",
    [
      "Merge sort",
      "Quick sort",
      "Heap sort",
      "Bubble sort"
    ],
    "الدمج مستقر وn log n دايماً.",
    "Merge sort is stable and always O(n log n).",
    0,
    0
  ],
  [
    4,
    "sorts",
    "Quick sort average space is:",
    [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n²)"
    ],
    "عمق الاستدعاء بالمتوسط log n.",
    "Average recursion depth is log n.",
    0,
    0
  ],
  [
    4,
    "sorts",
    "Heap sort worst case is:",
    [
      "O(n log n)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "دايماً n log n.",
    "Always O(n log n).",
    0,
    0
  ],
  [
    4,
    "sorts",
    "Which sort is NOT stable?",
    [
      "Quick sort",
      "Merge sort",
      "Insertion sort",
      "Bubble sort"
    ],
    "السريع والكومة غير مستقرين.",
    "Quick sort (and heap sort) are not stable.",
    0,
    0
  ],
  [
    4,
    "sorts",
    "The memory vs speed trade-off: merge sort vs quick sort means:",
    [
      "Merge is stable but uses O(n) space; quick is in-place but unstable",
      "Both use O(1) space",
      "Quick is always faster in the worst case",
      "Merge is in-place"
    ],
    "الدمج مستقر بمساحة n، والسريع in-place بس غير مستقر.",
    "Merge: stable, O(n) space. Quick: in-place, unstable.",
    0,
    0
  ],
  [
    5,
    "whyrand",
    "Approximate counting and randomized min-cut illustrate which reason for randomness?",
    [
      "Reducing complexity",
      "Breaking ties",
      "Simplicity only",
      "Stability"
    ],
    "إجابات تقريبية أسرع = تقليل التعقيد.",
    "Faster good-enough answers = reducing complexity.",
    0,
    0
  ],
  [
    5,
    "whyrand",
    "Randomized quicksort and Quickselect are both:",
    [
      "Las Vegas",
      "Monte Carlo",
      "Deterministic",
      "Greedy"
    ],
    "دايماً صحيحة.",
    "Both are always correct: Las Vegas.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "\"Fast runtime but small probability of error\" describes:",
    [
      "Monte Carlo",
      "Las Vegas",
      "Merge sort",
      "Binary search"
    ],
    "مونت كارلو.",
    "Monte Carlo.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "\"Correct but variable runtime\" describes:",
    [
      "Las Vegas",
      "Monte Carlo",
      "Strassen",
      "Heap sort"
    ],
    "لاس فيقاس.",
    "Las Vegas.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "Randomized tie-breaking makes behaviour:",
    [
      "Unpredictable, so an adversary can't force bad cases",
      "Always slower",
      "Always wrong",
      "Deterministic"
    ],
    "ما أحد يقدر يتوقعه.",
    "Unpredictable, so an adversary cannot force bad cases.",
    0,
    0
  ],
  [
    5,
    "rquick",
    "With random pivots, consistently unbalanced partitions become:",
    [
      "Exponentially unlikely",
      "Guaranteed",
      "More likely",
      "Impossible to detect"
    ],
    "احتمالها ضئيل جداً.",
    "They become exponentially unlikely.",
    0,
    0
  ],
  [
    5,
    "rquick",
    "Last-element pivot on a reverse-sorted array gives:",
    [
      "O(n²)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "نفس مشكلة العنصر الأول.",
    "Same problem as the first-element pivot: O(n²).",
    0,
    0
  ],
  [
    5,
    "rquick",
    "Median-of-three worst case is:",
    [
      "O(n²)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "ممكن يوصل n² بمدخلات خبيثة.",
    "It can still be forced into O(n²).",
    0,
    0
  ],
  [
    5,
    "rquick",
    "In randomized quicksort, the probability that any specific element is chosen as pivot is:",
    [
      "1/n",
      "1/2",
      "2/n",
      "1"
    ],
    "كل عنصر نفس الاحتمال.",
    "Each of the n elements is equally likely: 1/n.",
    0,
    1
  ],
  [
    5,
    "rquick",
    "Expected runtime of randomized quicksort is:",
    [
      "O(n log n)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "المتوقع n log n.",
    "Expected O(n log n).",
    0,
    0
  ],
  [
    5,
    "qselect",
    "Quickselect: find the smallest element (k = 0) of [7, 2, 9, 4]:",
    [
      "2",
      "4",
      "7",
      "9"
    ],
    "الأصغر 2.",
    "The minimum is 2.",
    0,
    1
  ],
  [
    5,
    "qselect",
    "Quickselect: find k = 2 (0-based) in [8, 1, 6, 3, 5]:",
    [
      "5",
      "3",
      "6",
      "1"
    ],
    "المرتبة: 1, 3, 5, 6, 8 ← موقع 2 = 5.",
    "Sorted: 1, 3, 5, 6, 8 → index 2 is 5.",
    1,
    1
  ],
  [
    5,
    "qselect",
    "In Quickselect, if k < p (pivot index), we:",
    [
      "Recurse on the left side",
      "Recurse on the right side",
      "Return A[p]",
      "Recurse on both sides"
    ],
    "k على اليسار.",
    "k is on the left side.",
    1,
    0
  ],
  [
    5,
    "qselect",
    "In Quickselect, if k == p, we:",
    [
      "Return A[p]",
      "Recurse left",
      "Recurse right",
      "Sort the array"
    ],
    "لقيناه.",
    "Found it: return A[p].",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Quickselect's best case recurrence:",
    [
      "T(n) = O(n) + T(n/2)",
      "T(n) = 2T(n/2) + n",
      "T(n) = n + T(n − 1)",
      "T(n) = T(n/2) + 1"
    ],
    "جهة وحدة بنص الحجم.",
    "One side of half the size: O(n) + T(n/2) = Θ(n).",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Why is Quickselect faster than sorting then picking?",
    [
      "It recurses into only one side",
      "It uses Strassen",
      "It is Monte Carlo",
      "It never partitions"
    ],
    "جهة وحدة بدل الثنتين.",
    "It recurses into only one side, not both.",
    1,
    0
  ],
  [
    5,
    "qselect",
    "For arrays with many duplicate values, which partition variant is recommended for Quickselect?",
    [
      "A 3-way partition variant",
      "Removing duplicates",
      "Using merge sort",
      "Using binary search"
    ],
    "تقسيم ثلاثي.",
    "A 3-way partition.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "Which of the following is NOT a required characteristic of an algorithm as defined in the lecture?",
    [
      "It must be implemented in a specific programming language like Python or C++.",
      "It must be an unambiguous step-by-step procedure.",
      "It must terminate after a finite amount of time.",
      "The set of inputs must be predefined."
    ],
    "الخوارزمية ما تحتاج تنكتب بلغة برمجة معينة؛ هي خطوات واضحة تنتهي في وقت محدود ومدخلاتها محددة.",
    "An algorithm is language-independent; it must be unambiguous, finite and have predefined inputs.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "During the \"Prove Correctness\" phase of the algorithm design and analysis process, which method is specifically recommended for large input sets?",
    [
      "Mathematical induction.",
      "Use cases.",
      "Stop-watch measurement.",
      "Counting basic operations."
    ],
    "للمدخلات الكبيرة نثبت الصحة بالاستقراء الرياضي، أما حالات الاستخدام فتنفع للمدخلات الصغيرة.",
    "For large input sets correctness is proved by mathematical induction (use cases suit small inputs).",
    0,
    0
  ],
  [
    90,
    "tut1",
    "When deciding on the \"computational means\" for a problem, what factors should be ascertained?",
    [
      "The capabilities of the hardware, such as RAM and CPU.",
      "The complexity of the programming language.",
      "Whether the solution should be exact or approximate.",
      "The specific algorithm design technique to be used."
    ],
    "الوسائل الحسابية يعني قدرات الجهاز نفسه مثل الذاكرة والمعالج. (الدقيق أو التقريبي وأسلوب التصميم خطوات ثانية في العملية.)",
    "Computational means = the capabilities of the device (RAM, CPU). Exact vs approximate and design technique are separate steps.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "Why is using a \"stopwatch\" to measure an algorithm's efficiency considered a poor practice in analysis?",
    [
      "It depends on hardware, compilers, and coding style, making it non-portable.",
      "It cannot measure the growth rate of the algorithm.",
      "It is too difficult to count small fractions of a second.",
      "It only measures space complexity, not time complexity."
    ],
    "القياس بالساعة يعتمد على الجهاز والمترجم وأسلوب الكود، فما ينفع نقارن فيه بين خوارزميات.",
    "Stopwatch timing depends on hardware, compiler and coding style, so it isn't portable.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "In time complexity analysis, which of the following is considered a \"basic operation\" that typically costs 1 step?",
    [
      "Comparison operations such as == or <.",
      "The algorithm heading.",
      "Opening and closing braces.",
      "The entire execution of a nested loop."
    ],
    "المقارنة عملية أساسية بخطوة وحدة، أما رأس الخوارزمية والأقواس فما تنحسب.",
    "Comparisons count as 1 step; headings and braces count as 0.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "If an algorithm's total steps are calculated as T(p) = 3n + 4, what type of time complexity does it exhibit?",
    [
      "Linear.",
      "Constant.",
      "Quadratic.",
      "Logarithmic."
    ],
    "أعلى حد هو 3n، يعني خطي Θ(n).",
    "The dominant term is 3n, so it is linear, Θ(n).",
    0,
    0
  ],
  [
    90,
    "tut1",
    "Space complexity includes both a fixed part and a variable part. Which of the following is considered part of the \"variable part\"?",
    [
      "Recursion overhead and dynamic data structures like trees.",
      "Program instructions.",
      "Memory for constants.",
      "Fixed-size variables."
    ],
    "الجزء المتغير يعتمد على المدخل: مكدس الاستدعاء الذاتي وهياكل البيانات الديناميكية مثل الأشجار.",
    "The variable part depends on the input: recursion stack and dynamic structures such as trees.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "Which case behavior provides an \"absolute guarantee\" or \"upper bound,\" ensuring the algorithm will not run longer than a specific limit regardless of the input?",
    [
      "Worst-case.",
      "Best-case.",
      "Average-case.",
      "Constant-case."
    ],
    "أسوأ حالة تعطي ضمان إن الخوارزمية ما تتعدى هالحد مهما كان المدخل.",
    "The worst case gives an absolute upper-bound guarantee.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "What is the primary focus of \"Asymptotic Analysis\"?",
    [
      "Comparing algorithms based on the growth rate of resources as input size n becomes arbitrarily large.",
      "Determining the exact number of operations for a small input size.",
      "Calculating the precise memory usage in bytes.",
      "Identifying which hardware is best suited for a specific algorithm."
    ],
    "التحليل التقاربي يقارن معدل نمو الموارد لما n تكبر جداً.",
    "Asymptotic analysis compares growth rates as n becomes very large.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "Arrange the following orders of growth from slowest (most efficient) to fastest (least efficient):",
    [
      "1 < log n < n < n log n < n^{2}",
      "1 < n < log n < n^{2}",
      "n < n log n < n! < 2^{n}",
      "log n < 1 < n < n^{2}"
    ],
    "الترتيب الصحيح: ثابت ثم لوغاريتمي ثم خطي ثم n log n ثم تربيعي.",
    "Correct order: 1 < log n < n < n log n < n².",
    0,
    0
  ],
  [
    90,
    "tut1",
    "By definition, f(n) = O(g(n)) if there exist two constants c and n_{0} such that:",
    [
      "f(n) ≤ c · g(n) for all n ≥ n_{0}",
      "f(n) ≥ c · g(n) for all n ≥ n_{0}",
      "c_{1} · g(n) ≤ f(n) ≤ c_{2} · g(n) for all n ≥ n_{0}",
      "f(n) = g(n) for all n ≥ n_{0}"
    ],
    "Big-O حد أعلى: f(n) أصغر من أو تساوي c·g(n) من n₀ وطالع. (≥ هذي Ω، والاثنين مع بعض Θ.)",
    "Big-O is an upper bound: f(n) ≤ c·g(n) for n ≥ n₀ (≥ is Ω; both sides is Θ).",
    0,
    0
  ],
  [
    90,
    "tut1",
    "Which asymptotic notation represents the \"Tight Bound\" or exact growth rate of an algorithm?",
    [
      "Big-Theta (Θ).",
      "Big-O (O).",
      "Big-Omega (Ω).",
      "Little-o (o)."
    ],
    "Θ هي الحد المحكم (من فوق ومن تحت).",
    "Θ is the tight bound.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "To find the Big-O of a complex function like f(n) = 3n^{2} + 17n log n + 1000, what is the correct procedure?",
    [
      "Keep only the dominant term (3n^{2}) and ignore constants.",
      "Add all the coefficients together (3 + 17 + 1000).",
      "Multiply all terms together.",
      "Focus on the smallest term since it represents the best case."
    ],
    "ناخذ الحد المسيطر ونهمل الثوابت، فالجواب O(n²).",
    "Keep the dominant term and drop constants: O(n²).",
    0,
    0
  ],
  [
    90,
    "tut1",
    "Under what condition does a Big-Theta (Θ) bound exist for a function?",
    [
      "When the upper bound (Big-O) and lower bound (Big-Omega) have the same growth function.",
      "Only when the input size is small.",
      "Only if the algorithm has constant time complexity.",
      "Whenever a Big-O bound is found."
    ],
    "Θ موجودة بس إذا الحد الأعلى O والحد الأدنى Ω نفس الدالة.",
    "Θ exists only when O and Ω have the same growth function.",
    0,
    0
  ],
  [
    90,
    "tut1",
    "When proving Big-Omega (Ω), it is suggested that you should:",
    [
      "Ignore positive smaller terms, as the largest term is enough to establish the lower bound.",
      "Overestimate smaller terms with larger ones.",
      "Choose a c that is as large as possible.",
      "Use a stopwatch to verify the constants."
    ],
    "في Ω نهمل الحدود الموجبة الصغيرة، والحد الأكبر يكفي للحد الأدنى. (المبالغة في الحدود الصغيرة هذي طريقة إثبات O.)",
    "For Ω ignore smaller positive terms; overestimating is the trick for proving O.",
    0,
    0
  ],
  [
    91,
    "tut2",
    "Based on the formal definition of Big-Ω, which of the following must be true for f(n) ∈ Ω(g(n))?",
    [
      "∃c > 0, n_{0} > 0 such that f(n) ≥ c · g(n) for all n ≥ n_{0}",
      "∃c > 0, n_{0} > 0 such that f(n) ≤ c · g(n) for all n ≥ n_{0}",
      "f(n) represents the exact average-case growth.",
      "f(n) is always strictly greater than g(n) for all values of n"
    ],
    "Ω حد أدنى: f(n) أكبر من أو تساوي c·g(n) من n₀ وطالع.",
    "Ω is a lower bound: f(n) ≥ c·g(n) for n ≥ n₀.",
    0,
    0
  ],
  [
    91,
    "tut2",
    "Big-Θ (Tight Bound) only exists for a function if:",
    [
      "Both the upper bound (Big-O) and lower bound (Big-Ω) match on the same dominant growth function.",
      "The algorithm has no best-case or worst-case scenarios.",
      "The input size n is a constant value.",
      "The constant c is equal to 1."
    ],
    "Θ موجودة لما O وΩ يتطابقون على نفس الدالة المسيطرة.",
    "Θ exists when O and Ω match on the same dominant function.",
    0,
    0
  ],
  [
    91,
    "tut2",
    "If an algorithm has a tight bound of Θ(n^{2}), which of the following is a valid statement regarding its Big-O and Big-Ω sets?",
    [
      "O(f(n)) can be n^{2} or n^{3}, and Ω(f(n)) can be n^{2} or n",
      "O(f(n)) can be n, and Ω(f(n)) can be n^{3}",
      "Both O(f(n)) and Ω(f(n)) must be exactly n^{2} only",
      "O(f(n)) must be 1, and Ω(f(n)) must be n!"
    ],
    "O تكون نفس الدالة أو أكبر، وΩ نفس الدالة أو أصغر.",
    "O can be the same or bigger; Ω the same or smaller.",
    0,
    0
  ],
  [
    91,
    "tut2",
    "Arrange the following functions in increasing order of growth rate as per the lecture hierarchy: n!, 2^{n}, n log n, n^{k}, 1, log n",
    [
      "1 < log n < n log n < n^{k} < 2^{n} < n!",
      "1 < log n < n^{k} < n log n < 2^{n} < n!",
      "n! < 2^{n} < n^{k} < n log n < log n < 1",
      "1 < n log n < log n < 2^{n} < n^{k} < n!"
    ],
    "الترتيب: ثابت، لوغاريتمي، n log n، كثيرة الحدود n^k، أسي 2^n، ثم المضروب n!.",
    "Hierarchy: 1 < log n < n log n < n^k < 2^n < n!.",
    0,
    0
  ],
  [
    91,
    "tut2",
    "To prove that f(n) = 3n^{2} + 17n log n + 1000 ∈ O(n^{2}), the lecture demonstrates combining terms to find constants. What are the resulting c and n_{0} values used in the final step of this proof?",
    [
      "c = 1020, n_{0} = 2",
      "c = 3, n_{0} = 0",
      "c = 17, n_{0} = 2",
      "c = 1000, n_{0} = 1"
    ],
    "نبالغ في كل حد إلى n² فيصير ≤ (3 + 17 + 1000)n² = 1020n²، والـ n₀ = 2.",
    "Overestimate each term by n²: ≤ (3+17+1000)n² = 1020n², with n₀ = 2.",
    0,
    0
  ],
  [
    91,
    "tut2",
    "When proving Big-Ω for a polynomial function, what is the recommended strategy?",
    [
      "Ignore positive smaller terms and keep only the dominant (fastest-growing) term.",
      "Overestimate smaller terms with larger ones.",
      "Multiply all coefficients together to find the constant c.",
      "Choose n_{0} to be the smallest possible integer."
    ],
    "في Ω نشيل الحدود الموجبة الصغيرة ونخلي الحد المسيطر.",
    "For Ω drop smaller positive terms and keep the dominant one.",
    0,
    0
  ],
  [
    91,
    "tut2",
    "If the input array provided to the Insertion Sort algorithm is already sorted, what is its runtime behavior?",
    [
      "It achieves its Best-case behavior (Linear).",
      "It remains Θ(n^{2}) because of the nested loops.",
      "It achieves its Worst-case behavior (Quadratic).",
      "The algorithm will fail to execute."
    ],
    "المصفوفة المرتبة أحسن حالة للـ Insertion Sort: خطي، لأن الحلقة الداخلية ما تتحرك.",
    "An already-sorted array is the best case: linear time.",
    0,
    0
  ],
  [
    91,
    "tut2",
    "What happens to the time complexity of Insertion Sort when the input array is reverse-sorted?",
    [
      "It becomes O(n^{2})",
      "It becomes O(log n)",
      "It becomes O(n)",
      "The complexity remains constant O(1)"
    ],
    "المرتبة بالعكس أسوأ حالة: كل عنصر يتحرك لأول المصفوفة، فيصير O(n²).",
    "Reverse-sorted input is the worst case: O(n²).",
    0,
    0
  ],
  [
    91,
    "tut2",
    "Which of the following statements regarding f(n) = 2^{n} and g(n) = 10n^{2} is TRUE?",
    [
      "f(n) = Ω(g(n)), because exponential growth eventually exceeds quadratic growth.",
      "f(n) = O(g(n)), because 10n^{2} has a larger coefficient.",
      "f(n) = Θ(g(n)), because both grow as n increases.",
      "f(n) is slower growing than g(n)."
    ],
    "الأسي 2ⁿ يتعدى التربيعي مهما كان المعامل، فـ f = Ω(g).",
    "Exponential eventually beats quadratic regardless of coefficients, so f = Ω(g).",
    0,
    0
  ],
  [
    91,
    "tut2",
    "Determine the correctness of this statement: f(n) = n is O(g(n)) where g(n) = 10.",
    [
      "False, because a linear function grows faster than a constant function.",
      "True, because 10 is a constant.",
      "True, because n can be smaller than 10.",
      "False, because the coefficient 10 must be ignored."
    ],
    "خطأ: n تكبر و10 ثابتة، فما فيه c يخلي n ≤ 10c لكل n كبيرة. يعني n ∉ O(1).",
    "False: n grows while 10 is constant, so n ∉ O(1).",
    0,
    0
  ],
  [
    91,
    "tut2",
    "Find the Big-O for the function f(n) = 50n log n + 20n",
    [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(n^{2})"
    ],
    "الحد المسيطر n log n، فالجواب O(n log n).",
    "The dominant term is n log n.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "If an algorithm contains neither iteration (loops) nor recursion, what can be concluded about its running time T(n)?",
    [
      "It will always be a constant value regardless of input size.",
      "It is dependent on the input size n.",
      "It cannot be analyzed using asymptotic notation.",
      "It will grow linearly with the input size."
    ],
    "بدون حلقات ولا استدعاء ذاتي، عدد الخطوات ثابت: O(1).",
    "With no loops or recursion the running time is constant.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "When analyzing a nested loop where the inner loop's iterations depend on the outer loop's index (e.g., for j = 1 to i), which summation formula represents the total number of basic operations?",
    [
      "Σ_{i=1}^{n} Σ_{j=1}^{i} 1 = n(n+1)/2",
      "Σ_{i=1}^{n} 1 = n",
      "Σ_{i=1}^{n} Σ_{j=1}^{n} 1 = n^{2}",
      "Σ_{i=1}^{n} i^{2} = n(n+1)(2n+1)/6"
    ],
    "الحلقة الداخلية تمشي i مرة، فالمجموع 1 + 2 + … + n = n(n+1)/2.",
    "The inner loop runs i times: 1+2+…+n = n(n+1)/2.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "What is the time complexity T(n) for a nested loop where both the outer and inner loops run from 1 to n?",
    [
      "Θ(n^{2})",
      "Θ(n)",
      "Θ(n log n)",
      "Θ(1)"
    ],
    "n × n = n²، يعني Θ(n²).",
    "n × n iterations = Θ(n²).",
    0,
    0
  ],
  [
    92,
    "tut3",
    "A recurrence relation is formally defined as:",
    [
      "An equation or inequality describes a function in terms of its value on smaller inputs.",
      "A loop that calls itself until a stopping condition is met.",
      "The process of converting a recursive algorithm into an iterative form.",
      "A method used only to measure space complexity in fixed memory."
    ],
    "علاقة التكرار معادلة أو متباينة تعرّف الدالة بقيمها على مدخلات أصغر.",
    "A recurrence describes a function in terms of its values on smaller inputs.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "Match the following recurrence relation to its correct tight bound: T(n) = T(n/2) + c",
    [
      "Θ(log n)",
      "Θ(n)",
      "Θ(n^{2})",
      "Θ(n log n)"
    ],
    "نقسم على 2 كل مرة بتكلفة ثابتة (مثل Binary Search)، فـ Θ(log n).",
    "Halving with constant work each step gives Θ(log n) (like binary search).",
    0,
    0
  ],
  [
    92,
    "tut3",
    "In the recurrence T(n) = c + T(n − 1), what does the 'c' represent?",
    [
      "The time cost of non-recursive basic operations within the function.",
      "The number of recursive calls made.",
      "The base case stopping condition.",
      "The total depth of the recursion tree."
    ],
    "c تكلفة العمليات غير الذاتية داخل الدالة.",
    "c is the cost of the non-recursive work in each call.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "Which method of solving recurrences involves guessing the form of the solution and then proving it using mathematical induction?",
    [
      "Substitution method.",
      "Iteration (Back-substitution) method.",
      "Recursion tree method.",
      "Master method."
    ],
    "طريقة التعويض (Substitution): نخمن الحل ونثبته بالاستقراء.",
    "The substitution method guesses then proves by induction.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "In a recursion tree for the recurrence T(n) = 2T(n/2) + cn, what does each node in the tree represent?",
    [
      "The cost of non-recursive work at that level of recursion.",
      "A recursive call.",
      "The base case value.",
      "The total space complexity of the algorithm."
    ],
    "كل عقدة تمثل تكلفة الشغل غير الذاتي عند ذاك المستوى.",
    "Each node holds the non-recursive cost at that level.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "For the recurrence T(n) = 2T(n/2) + cn, what is the total height h of the recursion tree?",
    [
      "h = log_{2} n",
      "h = n",
      "h = n^{2}",
      "h = n log_{2} n"
    ],
    "نقسم على 2 لين نوصل 1، فالارتفاع log₂ n.",
    "Halving until size 1 gives height log₂ n.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "How many leaves are present in the recursion tree for T(n) = 2T(n/2) + cn once the input size reaches 1?",
    [
      "n leaves.",
      "1 leaf.",
      "log_{2} n leaves.",
      "2n leaves."
    ],
    "عدد الأوراق 2^{log₂ n} = n.",
    "Leaves = 2^{log₂ n} = n.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "Merge Sort is categorized as which type of sorting algorithm based on its space requirements?",
    [
      "Not In-Place Sort.",
      "In-Place Sort.",
      "Internal Sort only.",
      "External Sort only."
    ],
    "Merge Sort يحتاج مساحة إضافية O(n)، فهو مو in-place.",
    "Merge Sort needs O(n) extra space, so it is not in-place.",
    0,
    0
  ],
  [
    92,
    "tut3",
    "What is the correct recurrence relation for the Merge Sort algorithm?",
    [
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n − 1) + O(1)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(1)"
    ],
    "نصين (2T(n/2)) والدمج خطي O(n).",
    "Two halves plus linear merging: 2T(n/2) + O(n).",
    0,
    0
  ],
  [
    92,
    "tut3",
    "During the space complexity analysis of Merge Sort, why is the total space complexity considered O(n)?",
    [
      "It combines the space for local variables O(1), the recursion stack O(log_{2} n), and storing array halves O(n).",
      "Because it only uses constant space for indices.",
      "Because it sorts the array in-place without extra memory.",
      "Because the recursion depth is n."
    ],
    "المتغيرات O(1) + المكدس O(log n) + الأنصاف O(n)، والمسيطر O(n).",
    "O(1) locals + O(log n) stack + O(n) halves = O(n).",
    0,
    0
  ],
  [
    92,
    "tut3",
    "What is the tight asymptotic bound for the time complexity of Merge Sort?",
    [
      "Θ(n log_{2} n)",
      "Θ(n)",
      "Θ(n^{2})",
      "Θ(log_{2} n)"
    ],
    "Merge Sort دايماً Θ(n log n).",
    "Merge Sort is always Θ(n log n).",
    0,
    0
  ],
  [
    92,
    "tut3",
    "Which of the following describes an \"Internal Sort\"?",
    [
      "All data to be sorted is stored in the computer's main memory.",
      "The amount of extra space required is constant.",
      "Data is stored on a slower, external device.",
      "The algorithm divides the input into halves recursively."
    ],
    "الترتيب الداخلي: كل البيانات في الذاكرة الرئيسية. (المساحة الثابتة هذي in-place.)",
    "Internal sort keeps all data in main memory (constant extra space is in-place).",
    0,
    0
  ],
  [
    92,
    "tut3",
    "When using the Back-substitution (Iteration) method to solve T(n) = c + T(n − 1), what is the generalized pattern after k steps?",
    [
      "T(n) = kc + T(n − k)",
      "T(n) = k + T(n − k)",
      "T(n) = c^{k} + T(n/k)",
      "T(n) = n · T(n − k)"
    ],
    "كل خطوة تضيف c، فبعد k خطوات: kc + T(n − k).",
    "Each step adds c: T(n) = kc + T(n − k).",
    0,
    0
  ],
  [
    93,
    "tut4",
    "Given the general form of the Master Theorem T(n) = aT(n/b) + f(n), what do the parameters a and b represent?",
    [
      "a is the number of subproblems; b is the factor by which the problem size is reduced.",
      "a is the subproblem size; b is the number of subproblems.",
      "a is the non-recursive cost; b is the recursion depth.",
      "a is the constant time for the base case; b is the number of levels in the recursion tree."
    ],
    "a عدد المسائل الفرعية، وb معامل تصغير حجم المسألة.",
    "a = number of subproblems, b = size reduction factor.",
    0,
    0
  ],
  [
    93,
    "tut4",
    "Which condition must be met for f(n) to be expressed as Θ(n^{k} log^{p} n) in the generalized Master Theorem?",
    [
      "a ≥ 1 and b > 1",
      "a < 1 and b = 1",
      "k must be a negative integer.",
      "p must always be greater than 0."
    ],
    "شرط النظرية: a ≥ 1 وb > 1.",
    "The theorem requires a ≥ 1 and b > 1.",
    0,
    0
  ],
  [
    93,
    "tut4",
    "If an algorithm's recurrence results in log_{b} a > k, which case of the Master Theorem applies, and what is the resulting complexity?",
    [
      "Case 1; T(n) = Θ(n^{log_{b} a})",
      "Case 2; T(n) = Θ(n^{k} log n)",
      "Case 3; T(n) = Θ(f(n))",
      "Case 1; T(n) = Θ(n^{k})"
    ],
    "إذا log_b a > k فهي الحالة 1 والجواب Θ(n^{log_{b} a}).",
    "If log_b a > k it's Case 1: Θ(n^{log_{b} a}).",
    0,
    0
  ],
  [
    93,
    "tut4",
    "Consider the recurrence T(n) = 4T(n/2) + n^{2}/log^{2} n. According to the provided lecture examples, why does this result in T(n) = Θ(n^{2})?",
    [
      "Because it is Case 2 with p = −2, which is less than -1.",
      "Because log_{b} a < k.",
      "Because f(n) grows faster than the subproblems.",
      "Because the log term in the denominator is ignored in asymptotic analysis."
    ],
    "a = 4, b = 2, فـ log₂4 = 2 = k والـ p = −2 < −1، فهي الحالة 2 (c) والجواب Θ(n^{log_{b} a}) = Θ(n²).",
    "log₂4 = 2 = k and p = −2 < −1 → Case 2(c): Θ(n^{log_{b} a}) = Θ(n²).",
    0,
    0
  ],
  [
    93,
    "tut4",
    "What are the three phases of the Divide-and-Conquer paradigm in their correct order?",
    [
      "Divide, Conquer, Combine",
      "Split, Solve, Merge",
      "Conquer, Divide, Combine",
      "Partition, Recurse, Return"
    ],
    "الترتيب: تقسيم ثم حل ثم دمج.",
    "Divide, Conquer, Combine.",
    0,
    0
  ],
  [
    93,
    "tut4",
    "In the context of Binary Search, what occurs during the \"Combine\" phase?",
    [
      "No real combination is required; the answer is simply returned.",
      "The left and right halves of the array are merged.",
      "The middle element is added to a results list.",
      "The indices are recalculated for the next iteration."
    ],
    "في البحث الثنائي ما فيه دمج فعلي؛ نرجع الجواب على طول.",
    "Binary search needs no real combine step; the answer is returned.",
    0,
    0
  ],
  [
    93,
    "tut4",
    "How does Quicksort differ fundamentally from Mergesort in its \"Divide\" phase?",
    [
      "Quicksort splits elements based on their values (partitioning), while Mergesort splits based on position.",
      "Quicksort splits elements based on their positions.",
      "Mergesort splits elements based on their values.",
      "Quicksort does not have a \"Divide\" phase; it only has a \"Conquer\" phase."
    ],
    "Quicksort يقسم حسب القيم (partition حول الـ pivot)، وMergesort يقسم حسب المكان (نصين).",
    "Quicksort partitions by value; Mergesort splits by position.",
    0,
    0
  ],
  [
    93,
    "tut4",
    "What is the worst-case time complexity and space complexity of Quicksort?",
    [
      "O(n^{2}) time and O(n) space.",
      "O(n log n) time and O(n) space.",
      "O(n^{2}) time and O(1) space.",
      "O(n log n) time and O(log n) space."
    ],
    "أسوأ حالة O(n²) وقت، والمكدس يوصل عمقه n فالمساحة O(n).",
    "Worst case is O(n²) time with O(n) recursion-stack space.",
    0,
    0
  ],
  [
    93,
    "tut4",
    "Which sorting algorithm is characterized as being stable, using O(n) extra memory, and having a guaranteed O(n log n) time complexity?",
    [
      "Merge Sort",
      "Quicksort",
      "Heapsort",
      "Insertion Sort"
    ],
    "Merge Sort: مستقر، يحتاج O(n) ذاكرة، ومضمون O(n log n).",
    "Merge Sort is stable, uses O(n) memory, and is always O(n log n).",
    0,
    0
  ],
  [
    93,
    "tut4",
    "According to the \"Memory vs. Speed\" trade-off analysis, which algorithm is \"memory-light\" but often too slow for large datasets?",
    [
      "Insertion Sort",
      "Merge Sort",
      "Quick Sort",
      "Heap Sort"
    ],
    "Insertion Sort ما ياخذ ذاكرة (O(1)) بس O(n²) بطيء للبيانات الكبيرة.",
    "Insertion Sort is O(1) space but O(n²) time.",
    0,
    0
  ],
  [
    93,
    "tut4",
    "The classical iterative matrix multiplication algorithm (triple nested loops) has a time complexity of:",
    [
      "O(n^{3})",
      "O(n^{2})",
      "O(n^{log_{2} 7})",
      "O(n log n)"
    ],
    "ثلاث حلقات متداخلة كل وحدة n، فـ O(n³).",
    "Three nested loops of n: O(n³).",
    0,
    0
  ],
  [
    93,
    "tut4",
    "Why does the Naïve Recursive Divide-and-Conquer method for matrix multiplication fail to improve asymptotic time complexity over the iterative method?",
    [
      "It requires 8 recursive multiplications of size n/2, resulting in T(n) = 8T(n/2) + O(n^{2}), which still solves to O(n^{3}).",
      "It uses too much space.",
      "It involves too many additions.",
      "Partitioning the matrices takes O(n^{3}) time."
    ],
    "8 ضربات بحجم n/2: log₂8 = 3 > 2، فالحالة 1 وتطلع O(n³).",
    "8T(n/2) + O(n²): log₂8 = 3 > 2 → Case 1 → O(n³).",
    0,
    0
  ],
  [
    93,
    "tut4",
    "What is the primary mathematical \"trick\" Strassen's Algorithm uses to achieve a complexity of approximately O(n^{2.81})?",
    [
      "It reduces the number of recursive multiplications from 8 to 7.",
      "It reduces the number of matrix additions from 18 to 7.",
      "It eliminates the need for partitioning.",
      "It uses an iterative approach within the recursion."
    ],
    "Strassen يقلل الضربات من 8 إلى 7: T(n) = 7T(n/2) + O(n²) = O(n^{log₂7}) ≈ O(n^{2.81}).",
    "Strassen uses 7 multiplications instead of 8: O(n^{log₂7}) ≈ O(n^{2.81}).",
    0,
    0
  ],
  [
    93,
    "tut4",
    "Which of the following is a disadvantage of Strassen's Algorithm compared to the classical method?",
    [
      "It has higher constant factors and more additions/subtractions, making it less stable.",
      "It has a higher theoretical time complexity.",
      "It is more asymptotically complex.",
      "It requires O(n^{3}) space."
    ],
    "عيبه: ثوابت أكبر وجمع وطرح أكثر (18 عملية)، فهو أقل ثباتاً عددياً.",
    "Higher constants and more additions/subtractions make it less numerically stable.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "According to the lecture, what is the primary reason for using randomness in algorithms?",
    [
      "To break ties and symmetry that could lead to predictable, worst-case behavior.",
      "To ensure the algorithm always finishes in the same amount of time.",
      "To eliminate the need for recursive functions in divide-and-conquer paradigms.",
      "To guarantee that the algorithm is 100% accurate in all cases, unlike deterministic ones."
    ],
    "العشوائية تكسر التماثل والتعادل اللي ممكن يوصلنا لأسوأ حالة متوقعة.",
    "Randomness breaks ties/symmetry that cause predictable worst cases.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "Which of the following best describes a \"Las Vegas\" algorithm?",
    [
      "It always produces the correct answer, but its running time is a random variable.",
      "It has a fixed, bounded running time but may produce an incorrect answer with a small probability.",
      "It is designed specifically for gambling applications and probability simulations.",
      "It is an approximation algorithm that yields \"good enough\" answers in linear time."
    ],
    "Las Vegas: الجواب دايماً صح، والوقت هو العشوائي.",
    "Las Vegas: always correct, random running time.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "If an algorithm always runs in O(n log n) time but has a 1% probability of providing the wrong result, it is classified as:",
    [
      "A Monte Carlo algorithm.",
      "A deterministic algorithm.",
      "A Las Vegas algorithm.",
      "An adversarial algorithm."
    ],
    "Monte Carlo: الوقت محدود، بس فيه احتمال صغير للخطأ.",
    "Monte Carlo: bounded time, small chance of a wrong answer.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "In deterministic Quicksort, which input type typically triggers the worst-case O(n^{2}) runtime when the first element is consistently chosen as the pivot?",
    [
      "Already sorted or reverse-sorted arrays.",
      "Randomized arrays.",
      "Arrays with many duplicate values.",
      "Very small arrays where n < 10."
    ],
    "لو الـ pivot أول عنصر والمصفوفة مرتبة (أو بالعكس)، التقسيم يطلع غير متوازن فـ O(n²).",
    "With the first element as pivot, sorted/reverse-sorted input gives O(n²).",
    0,
    0
  ],
  [
    94,
    "tut5",
    "How does the Randomized Quicksort algorithm modify the standard partitioning process?",
    [
      "It selects a random index i, swaps A[i] with the pivot position, and then partitions.",
      "It partitions the array into three parts instead of two.",
      "It sorts the array before selecting the median as a pivot.",
      "It eliminates the recursion step to save space."
    ],
    "يختار index عشوائي i، يبدّل A[i] مع مكان الـ pivot (غالباً الأخير)، بعدين يسوي partition.",
    "Pick a random i, swap A[i] into the pivot position, then partition.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "What is the expected number of comparisons E[C(n)] for Randomized Quicksort?",
    [
      "Θ(n log n)",
      "Θ(n)",
      "Θ(n^{2})",
      "Θ(log n)"
    ],
    "العدد المتوقع للمقارنات Θ(n log n).",
    "Expected comparisons are Θ(n log n).",
    0,
    0
  ],
  [
    94,
    "tut5",
    "Even with a random pivot strategy, what is the theoretical worst-case time complexity of Randomized Quicksort?",
    [
      "O(n^{2})",
      "O(n)",
      "O(n log n)",
      "O(2^{n})"
    ],
    "حتى مع العشوائية، أسوأ حالة نظرياً O(n²) بس احتمالها ضعيف جداً.",
    "Worst case is still O(n²), though extremely unlikely.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "What is the main goal of the Quickselect algorithm?",
    [
      "To find the k-th smallest element in an unsorted array.",
      "To sort an entire array in linear time.",
      "To determine the maximum value in a balanced BST.",
      "To select a random sample of data for statistical analysis."
    ],
    "Quickselect يلقى العنصر رقم k الأصغر في مصفوفة غير مرتبة.",
    "Quickselect finds the k-th smallest element in an unsorted array.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "Why is the expected runtime of Quickselect O(n), while Quicksort is O(n log n)?",
    [
      "Quickselect only recurses into one side of the partition that contains the target element.",
      "Quickselect uses a faster partitioning method.",
      "Quickselect does not use random pivots.",
      "Quickselect requires the input array to be pre-sorted."
    ],
    "Quickselect يكمل في جهة وحدة بس (اللي فيها العنصر)، فالمجموع n + n/2 + … ≈ 2n = O(n).",
    "It recurses into only one side: n + n/2 + … ≈ 2n = O(n).",
    0,
    0
  ],
  [
    94,
    "tut5",
    "Which of the following is identified as a \"common mistake\" when implementing Quickselect?",
    [
      "Converting the global index k to a \"rank within a subarray\" without precise adjustment.",
      "Using recursion instead of iteration.",
      "Picking the median of the array as the pivot.",
      "Using O(n) space for the partitioning step."
    ],
    "الغلطة الشائعة: تحويل k من ترتيب عام لترتيب داخل المصفوفة الفرعية بدون تعديل دقيق.",
    "A common mistake is converting global k to a subarray rank without precise adjustment.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "Which pivot strategy is described as \"often better in practice\" but still \"not adversarially robust\"?",
    [
      "Median-of-three.",
      "First element.",
      "Last element.",
      "Random element."
    ],
    "Median-of-three أحسن عملياً، بس ممكن أحد يصمم مدخل يخربه.",
    "Median-of-three is good in practice but not robust against adversarial inputs.",
    0,
    0
  ],
  [
    94,
    "tut5",
    "Based on the lecture \"Key Takeaways,\" randomized approaches are often preferred in practice because:",
    [
      "They have better expected performance and are robust against adversarial inputs.",
      "They are more complex and therefore more secure.",
      "They guarantee a O(log n) worst-case runtime for all sorting problems.",
      "They eliminate the need for space complexity analysis."
    ],
    "العشوائية تعطي أداء متوقع أحسن ومقاومة للمدخلات الخبيثة.",
    "Better expected performance and robustness to adversarial inputs.",
    0,
    0
  ],
  [
    1,
    "algo",
    "Which of the following is NOT a required characteristic of an algorithm as defined in the lecture?",
    [
      "It must be implemented in a specific programming language like Python or C++.",
      "It must be an unambiguous step-by-step procedure.",
      "It must terminate after a finite amount of time.",
      "The set of inputs must be predefined."
    ],
    "الخوارزمية ما تحتاج تنكتب بلغة برمجة معينة؛ هي خطوات واضحة تنتهي في وقت محدود ومدخلاتها محددة.",
    "An algorithm is language-independent; it must be unambiguous, finite and have predefined inputs.",
    1,
    0
  ],
  [
    1,
    "algo",
    "During the \"Prove Correctness\" phase of the algorithm design and analysis process, which method is specifically recommended for large input sets?",
    [
      "Mathematical induction.",
      "Use cases.",
      "Stop-watch measurement.",
      "Counting basic operations."
    ],
    "للمدخلات الكبيرة نثبت الصحة بالاستقراء الرياضي، أما حالات الاستخدام فتنفع للمدخلات الصغيرة.",
    "For large input sets correctness is proved by mathematical induction (use cases suit small inputs).",
    1,
    0
  ],
  [
    1,
    "algo",
    "When deciding on the \"computational means\" for a problem, what factors should be ascertained?",
    [
      "The capabilities of the hardware, such as RAM and CPU.",
      "The complexity of the programming language.",
      "Whether the solution should be exact or approximate.",
      "The specific algorithm design technique to be used."
    ],
    "الوسائل الحسابية يعني قدرات الجهاز نفسه مثل الذاكرة والمعالج. (الدقيق أو التقريبي وأسلوب التصميم خطوات ثانية في العملية.)",
    "Computational means = the capabilities of the device (RAM, CPU). Exact vs approximate and design technique are separate steps.",
    1,
    0
  ],
  [
    1,
    "why",
    "Why is using a \"stopwatch\" to measure an algorithm's efficiency considered a poor practice in analysis?",
    [
      "It depends on hardware, compilers, and coding style, making it non-portable.",
      "It cannot measure the growth rate of the algorithm.",
      "It is too difficult to count small fractions of a second.",
      "It only measures space complexity, not time complexity."
    ],
    "القياس بالساعة يعتمد على الجهاز والمترجم وأسلوب الكود، فما ينفع نقارن فيه بين خوارزميات.",
    "Stopwatch timing depends on hardware, compiler and coding style, so it isn't portable.",
    1,
    0
  ],
  [
    1,
    "timec",
    "In time complexity analysis, which of the following is considered a \"basic operation\" that typically costs 1 step?",
    [
      "Comparison operations such as == or <.",
      "The algorithm heading.",
      "Opening and closing braces.",
      "The entire execution of a nested loop."
    ],
    "المقارنة عملية أساسية بخطوة وحدة، أما رأس الخوارزمية والأقواس فما تنحسب.",
    "Comparisons count as 1 step; headings and braces count as 0.",
    1,
    0
  ],
  [
    1,
    "timec",
    "If an algorithm's total steps are calculated as T(p) = 3n + 4, what type of time complexity does it exhibit?",
    [
      "Linear.",
      "Constant.",
      "Quadratic.",
      "Logarithmic."
    ],
    "أعلى حد هو 3n، يعني خطي Θ(n).",
    "The dominant term is 3n, so it is linear, Θ(n).",
    1,
    0
  ],
  [
    1,
    "spacec",
    "Space complexity includes both a fixed part and a variable part. Which of the following is considered part of the \"variable part\"?",
    [
      "Recursion overhead and dynamic data structures like trees.",
      "Program instructions.",
      "Memory for constants.",
      "Fixed-size variables."
    ],
    "الجزء المتغير يعتمد على المدخل: مكدس الاستدعاء الذاتي وهياكل البيانات الديناميكية مثل الأشجار.",
    "The variable part depends on the input: recursion stack and dynamic structures such as trees.",
    1,
    0
  ],
  [
    1,
    "cases",
    "Which case behavior provides an \"absolute guarantee\" or \"upper bound,\" ensuring the algorithm will not run longer than a specific limit regardless of the input?",
    [
      "Worst-case.",
      "Best-case.",
      "Average-case.",
      "Constant-case."
    ],
    "أسوأ حالة تعطي ضمان إن الخوارزمية ما تتعدى هالحد مهما كان المدخل.",
    "The worst case gives an absolute upper-bound guarantee.",
    1,
    0
  ],
  [
    1,
    "growth",
    "What is the primary focus of \"Asymptotic Analysis\"?",
    [
      "Comparing algorithms based on the growth rate of resources as input size n becomes arbitrarily large.",
      "Determining the exact number of operations for a small input size.",
      "Calculating the precise memory usage in bytes.",
      "Identifying which hardware is best suited for a specific algorithm."
    ],
    "التحليل التقاربي يقارن معدل نمو الموارد لما n تكبر جداً.",
    "Asymptotic analysis compares growth rates as n becomes very large.",
    1,
    0
  ],
  [
    1,
    "growth",
    "Arrange the following orders of growth from slowest (most efficient) to fastest (least efficient):",
    [
      "1 < log n < n < n log n < n^{2}",
      "1 < n < log n < n^{2}",
      "n < n log n < n! < 2^{n}",
      "log n < 1 < n < n^{2}"
    ],
    "الترتيب الصحيح: ثابت ثم لوغاريتمي ثم خطي ثم n log n ثم تربيعي.",
    "Correct order: 1 < log n < n < n log n < n².",
    1,
    0
  ],
  [
    1,
    "bigo",
    "By definition, f(n) = O(g(n)) if there exist two constants c and n_{0} such that:",
    [
      "f(n) ≤ c · g(n) for all n ≥ n_{0}",
      "f(n) ≥ c · g(n) for all n ≥ n_{0}",
      "c_{1} · g(n) ≤ f(n) ≤ c_{2} · g(n) for all n ≥ n_{0}",
      "f(n) = g(n) for all n ≥ n_{0}"
    ],
    "Big-O حد أعلى: f(n) أصغر من أو تساوي c·g(n) من n₀ وطالع. (≥ هذي Ω، والاثنين مع بعض Θ.)",
    "Big-O is an upper bound: f(n) ≤ c·g(n) for n ≥ n₀ (≥ is Ω; both sides is Θ).",
    1,
    0
  ],
  [
    1,
    "bigo",
    "Which asymptotic notation represents the \"Tight Bound\" or exact growth rate of an algorithm?",
    [
      "Big-Theta (Θ).",
      "Big-O (O).",
      "Big-Omega (Ω).",
      "Little-o (o)."
    ],
    "Θ هي الحد المحكم (من فوق ومن تحت).",
    "Θ is the tight bound.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "To find the Big-O of a complex function like f(n) = 3n^{2} + 17n log n + 1000, what is the correct procedure?",
    [
      "Keep only the dominant term (3n^{2}) and ignore constants.",
      "Add all the coefficients together (3 + 17 + 1000).",
      "Multiply all terms together.",
      "Focus on the smallest term since it represents the best case."
    ],
    "ناخذ الحد المسيطر ونهمل الثوابت، فالجواب O(n²).",
    "Keep the dominant term and drop constants: O(n²).",
    1,
    0
  ],
  [
    1,
    "bigo",
    "Under what condition does a Big-Theta (Θ) bound exist for a function?",
    [
      "When the upper bound (Big-O) and lower bound (Big-Omega) have the same growth function.",
      "Only when the input size is small.",
      "Only if the algorithm has constant time complexity.",
      "Whenever a Big-O bound is found."
    ],
    "Θ موجودة بس إذا الحد الأعلى O والحد الأدنى Ω نفس الدالة.",
    "Θ exists only when O and Ω have the same growth function.",
    1,
    0
  ],
  [
    1,
    "bigo",
    "When proving Big-Omega (Ω), it is suggested that you should:",
    [
      "Ignore positive smaller terms, as the largest term is enough to establish the lower bound.",
      "Overestimate smaller terms with larger ones.",
      "Choose a c that is as large as possible.",
      "Use a stopwatch to verify the constants."
    ],
    "في Ω نهمل الحدود الموجبة الصغيرة، والحد الأكبر يكفي للحد الأدنى. (المبالغة في الحدود الصغيرة هذي طريقة إثبات O.)",
    "For Ω ignore smaller positive terms; overestimating is the trick for proving O.",
    1,
    0
  ],
  [
    2,
    "compare",
    "Based on the formal definition of Big-Ω, which of the following must be true for f(n) ∈ Ω(g(n))?",
    [
      "∃c > 0, n_{0} > 0 such that f(n) ≥ c · g(n) for all n ≥ n_{0}",
      "∃c > 0, n_{0} > 0 such that f(n) ≤ c · g(n) for all n ≥ n_{0}",
      "f(n) represents the exact average-case growth.",
      "f(n) is always strictly greater than g(n) for all values of n"
    ],
    "Ω حد أدنى: f(n) أكبر من أو تساوي c·g(n) من n₀ وطالع.",
    "Ω is a lower bound: f(n) ≥ c·g(n) for n ≥ n₀.",
    1,
    0
  ],
  [
    2,
    "compare",
    "Big-Θ (Tight Bound) only exists for a function if:",
    [
      "Both the upper bound (Big-O) and lower bound (Big-Ω) match on the same dominant growth function.",
      "The algorithm has no best-case or worst-case scenarios.",
      "The input size n is a constant value.",
      "The constant c is equal to 1."
    ],
    "Θ موجودة لما O وΩ يتطابقون على نفس الدالة المسيطرة.",
    "Θ exists when O and Ω match on the same dominant function.",
    1,
    0
  ],
  [
    2,
    "compare",
    "If an algorithm has a tight bound of Θ(n^{2}), which of the following is a valid statement regarding its Big-O and Big-Ω sets?",
    [
      "O(f(n)) can be n^{2} or n^{3}, and Ω(f(n)) can be n^{2} or n",
      "O(f(n)) can be n, and Ω(f(n)) can be n^{3}",
      "Both O(f(n)) and Ω(f(n)) must be exactly n^{2} only",
      "O(f(n)) must be 1, and Ω(f(n)) must be n!"
    ],
    "O تكون نفس الدالة أو أكبر، وΩ نفس الدالة أو أصغر.",
    "O can be the same or bigger; Ω the same or smaller.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "Arrange the following functions in increasing order of growth rate as per the lecture hierarchy: n!, 2^{n}, n log n, n^{k}, 1, log n",
    [
      "1 < log n < n log n < n^{k} < 2^{n} < n!",
      "1 < log n < n^{k} < n log n < 2^{n} < n!",
      "n! < 2^{n} < n^{k} < n log n < log n < 1",
      "1 < n log n < log n < 2^{n} < n^{k} < n!"
    ],
    "الترتيب: ثابت، لوغاريتمي، n log n، كثيرة الحدود n^k، أسي 2^n، ثم المضروب n!.",
    "Hierarchy: 1 < log n < n log n < n^k < 2^n < n!.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "To prove that f(n) = 3n^{2} + 17n log n + 1000 ∈ O(n^{2}), the lecture demonstrates combining terms to find constants. What are the resulting c and n_{0} values used in the final step of this proof?",
    [
      "c = 1020, n_{0} = 2",
      "c = 3, n_{0} = 0",
      "c = 17, n_{0} = 2",
      "c = 1000, n_{0} = 1"
    ],
    "نبالغ في كل حد إلى n² فيصير ≤ (3 + 17 + 1000)n² = 1020n²، والـ n₀ = 2.",
    "Overestimate each term by n²: ≤ (3+17+1000)n² = 1020n², with n₀ = 2.",
    1,
    0
  ],
  [
    2,
    "proofs",
    "When proving Big-Ω for a polynomial function, what is the recommended strategy?",
    [
      "Ignore positive smaller terms and keep only the dominant (fastest-growing) term.",
      "Overestimate smaller terms with larger ones.",
      "Multiply all coefficients together to find the constant c.",
      "Choose n_{0} to be the smallest possible integer."
    ],
    "في Ω نشيل الحدود الموجبة الصغيرة ونخلي الحد المسيطر.",
    "For Ω drop smaller positive terms and keep the dominant one.",
    1,
    0
  ],
  [
    2,
    "compare",
    "If the input array provided to the Insertion Sort algorithm is already sorted, what is its runtime behavior?",
    [
      "It achieves its Best-case behavior (Linear).",
      "It remains Θ(n^{2}) because of the nested loops.",
      "It achieves its Worst-case behavior (Quadratic).",
      "The algorithm will fail to execute."
    ],
    "المصفوفة المرتبة أحسن حالة للـ Insertion Sort: خطي، لأن الحلقة الداخلية ما تتحرك.",
    "An already-sorted array is the best case: linear time.",
    1,
    0
  ],
  [
    2,
    "compare",
    "What happens to the time complexity of Insertion Sort when the input array is reverse-sorted?",
    [
      "It becomes O(n^{2})",
      "It becomes O(log n)",
      "It becomes O(n)",
      "The complexity remains constant O(1)"
    ],
    "المرتبة بالعكس أسوأ حالة: كل عنصر يتحرك لأول المصفوفة، فيصير O(n²).",
    "Reverse-sorted input is the worst case: O(n²).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Which of the following statements regarding f(n) = 2^{n} and g(n) = 10n^{2} is TRUE?",
    [
      "f(n) = Ω(g(n)), because exponential growth eventually exceeds quadratic growth.",
      "f(n) = O(g(n)), because 10n^{2} has a larger coefficient.",
      "f(n) = Θ(g(n)), because both grow as n increases.",
      "f(n) is slower growing than g(n)."
    ],
    "الأسي 2ⁿ يتعدى التربيعي مهما كان المعامل، فـ f = Ω(g).",
    "Exponential eventually beats quadratic regardless of coefficients, so f = Ω(g).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Determine the correctness of this statement: f(n) = n is O(g(n)) where g(n) = 10.",
    [
      "False, because a linear function grows faster than a constant function.",
      "True, because 10 is a constant.",
      "True, because n can be smaller than 10.",
      "False, because the coefficient 10 must be ignored."
    ],
    "خطأ: n تكبر و10 ثابتة، فما فيه c يخلي n ≤ 10c لكل n كبيرة. يعني n ∉ O(1).",
    "False: n grows while 10 is constant, so n ∉ O(1).",
    1,
    0
  ],
  [
    2,
    "compare",
    "Find the Big-O for the function f(n) = 50n log n + 20n",
    [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(n^{2})"
    ],
    "الحد المسيطر n log n، فالجواب O(n log n).",
    "The dominant term is n log n.",
    1,
    0
  ],
  [
    3,
    "iter",
    "If an algorithm contains neither iteration (loops) nor recursion, what can be concluded about its running time T(n)?",
    [
      "It will always be a constant value regardless of input size.",
      "It is dependent on the input size n.",
      "It cannot be analyzed using asymptotic notation.",
      "It will grow linearly with the input size."
    ],
    "بدون حلقات ولا استدعاء ذاتي، عدد الخطوات ثابت: O(1).",
    "With no loops or recursion the running time is constant.",
    1,
    0
  ],
  [
    3,
    "iter",
    "When analyzing a nested loop where the inner loop's iterations depend on the outer loop's index (e.g., for j = 1 to i), which summation formula represents the total number of basic operations?",
    [
      "Σ_{i=1}^{n} Σ_{j=1}^{i} 1 = n(n+1)/2",
      "Σ_{i=1}^{n} 1 = n",
      "Σ_{i=1}^{n} Σ_{j=1}^{n} 1 = n^{2}",
      "Σ_{i=1}^{n} i^{2} = n(n+1)(2n+1)/6"
    ],
    "الحلقة الداخلية تمشي i مرة، فالمجموع 1 + 2 + … + n = n(n+1)/2.",
    "The inner loop runs i times: 1+2+…+n = n(n+1)/2.",
    1,
    0
  ],
  [
    3,
    "iter",
    "What is the time complexity T(n) for a nested loop where both the outer and inner loops run from 1 to n?",
    [
      "Θ(n^{2})",
      "Θ(n)",
      "Θ(n log n)",
      "Θ(1)"
    ],
    "n × n = n²، يعني Θ(n²).",
    "n × n iterations = Θ(n²).",
    1,
    0
  ],
  [
    3,
    "recur",
    "A recurrence relation is formally defined as:",
    [
      "An equation or inequality describes a function in terms of its value on smaller inputs.",
      "A loop that calls itself until a stopping condition is met.",
      "The process of converting a recursive algorithm into an iterative form.",
      "A method used only to measure space complexity in fixed memory."
    ],
    "علاقة التكرار معادلة أو متباينة تعرّف الدالة بقيمها على مدخلات أصغر.",
    "A recurrence describes a function in terms of its values on smaller inputs.",
    1,
    0
  ],
  [
    3,
    "recur",
    "Match the following recurrence relation to its correct tight bound: T(n) = T(n/2) + c",
    [
      "Θ(log n)",
      "Θ(n)",
      "Θ(n^{2})",
      "Θ(n log n)"
    ],
    "نقسم على 2 كل مرة بتكلفة ثابتة (مثل Binary Search)، فـ Θ(log n).",
    "Halving with constant work each step gives Θ(log n) (like binary search).",
    1,
    0
  ],
  [
    3,
    "recur",
    "In the recurrence T(n) = c + T(n − 1), what does the 'c' represent?",
    [
      "The time cost of non-recursive basic operations within the function.",
      "The number of recursive calls made.",
      "The base case stopping condition.",
      "The total depth of the recursion tree."
    ],
    "c تكلفة العمليات غير الذاتية داخل الدالة.",
    "c is the cost of the non-recursive work in each call.",
    1,
    0
  ],
  [
    3,
    "recur",
    "Which method of solving recurrences involves guessing the form of the solution and then proving it using mathematical induction?",
    [
      "Substitution method.",
      "Iteration (Back-substitution) method.",
      "Recursion tree method.",
      "Master method."
    ],
    "طريقة التعويض (Substitution): نخمن الحل ونثبته بالاستقراء.",
    "The substitution method guesses then proves by induction.",
    1,
    0
  ],
  [
    3,
    "rtree",
    "In a recursion tree for the recurrence T(n) = 2T(n/2) + cn, what does each node in the tree represent?",
    [
      "The cost of non-recursive work at that level of recursion.",
      "A recursive call.",
      "The base case value.",
      "The total space complexity of the algorithm."
    ],
    "كل عقدة تمثل تكلفة الشغل غير الذاتي عند ذاك المستوى.",
    "Each node holds the non-recursive cost at that level.",
    1,
    0
  ],
  [
    3,
    "rtree",
    "For the recurrence T(n) = 2T(n/2) + cn, what is the total height h of the recursion tree?",
    [
      "h = log_{2} n",
      "h = n",
      "h = n^{2}",
      "h = n log_{2} n"
    ],
    "نقسم على 2 لين نوصل 1، فالارتفاع log₂ n.",
    "Halving until size 1 gives height log₂ n.",
    1,
    0
  ],
  [
    3,
    "rtree",
    "How many leaves are present in the recursion tree for T(n) = 2T(n/2) + cn once the input size reaches 1?",
    [
      "n leaves.",
      "1 leaf.",
      "log_{2} n leaves.",
      "2n leaves."
    ],
    "عدد الأوراق 2^{log₂ n} = n.",
    "Leaves = 2^{log₂ n} = n.",
    1,
    0
  ],
  [
    3,
    "merge",
    "Merge Sort is categorized as which type of sorting algorithm based on its space requirements?",
    [
      "Not In-Place Sort.",
      "In-Place Sort.",
      "Internal Sort only.",
      "External Sort only."
    ],
    "Merge Sort يحتاج مساحة إضافية O(n)، فهو مو in-place.",
    "Merge Sort needs O(n) extra space, so it is not in-place.",
    1,
    0
  ],
  [
    3,
    "merge",
    "What is the correct recurrence relation for the Merge Sort algorithm?",
    [
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n − 1) + O(1)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(1)"
    ],
    "نصين (2T(n/2)) والدمج خطي O(n).",
    "Two halves plus linear merging: 2T(n/2) + O(n).",
    1,
    0
  ],
  [
    3,
    "merge",
    "During the space complexity analysis of Merge Sort, why is the total space complexity considered O(n)?",
    [
      "It combines the space for local variables O(1), the recursion stack O(log_{2} n), and storing array halves O(n).",
      "Because it only uses constant space for indices.",
      "Because it sorts the array in-place without extra memory.",
      "Because the recursion depth is n."
    ],
    "المتغيرات O(1) + المكدس O(log n) + الأنصاف O(n)، والمسيطر O(n).",
    "O(1) locals + O(log n) stack + O(n) halves = O(n).",
    1,
    0
  ],
  [
    3,
    "merge",
    "What is the tight asymptotic bound for the time complexity of Merge Sort?",
    [
      "Θ(n log_{2} n)",
      "Θ(n)",
      "Θ(n^{2})",
      "Θ(log_{2} n)"
    ],
    "Merge Sort دايماً Θ(n log n).",
    "Merge Sort is always Θ(n log n).",
    1,
    0
  ],
  [
    3,
    "merge",
    "Which of the following describes an \"Internal Sort\"?",
    [
      "All data to be sorted is stored in the computer's main memory.",
      "The amount of extra space required is constant.",
      "Data is stored on a slower, external device.",
      "The algorithm divides the input into halves recursively."
    ],
    "الترتيب الداخلي: كل البيانات في الذاكرة الرئيسية. (المساحة الثابتة هذي in-place.)",
    "Internal sort keeps all data in main memory (constant extra space is in-place).",
    1,
    0
  ],
  [
    3,
    "backsub",
    "When using the Back-substitution (Iteration) method to solve T(n) = c + T(n − 1), what is the generalized pattern after k steps?",
    [
      "T(n) = kc + T(n − k)",
      "T(n) = k + T(n − k)",
      "T(n) = c^{k} + T(n/k)",
      "T(n) = n · T(n − k)"
    ],
    "كل خطوة تضيف c، فبعد k خطوات: kc + T(n − k).",
    "Each step adds c: T(n) = kc + T(n − k).",
    1,
    0
  ],
  [
    4,
    "master",
    "Given the general form of the Master Theorem T(n) = aT(n/b) + f(n), what do the parameters a and b represent?",
    [
      "a is the number of subproblems; b is the factor by which the problem size is reduced.",
      "a is the subproblem size; b is the number of subproblems.",
      "a is the non-recursive cost; b is the recursion depth.",
      "a is the constant time for the base case; b is the number of levels in the recursion tree."
    ],
    "a عدد المسائل الفرعية، وb معامل تصغير حجم المسألة.",
    "a = number of subproblems, b = size reduction factor.",
    1,
    0
  ],
  [
    4,
    "master",
    "Which condition must be met for f(n) to be expressed as Θ(n^{k} log^{p} n) in the generalized Master Theorem?",
    [
      "a ≥ 1 and b > 1",
      "a < 1 and b = 1",
      "k must be a negative integer.",
      "p must always be greater than 0."
    ],
    "شرط النظرية: a ≥ 1 وb > 1.",
    "The theorem requires a ≥ 1 and b > 1.",
    1,
    0
  ],
  [
    4,
    "master",
    "If an algorithm's recurrence results in log_{b} a > k, which case of the Master Theorem applies, and what is the resulting complexity?",
    [
      "Case 1; T(n) = Θ(n^{log_{b} a})",
      "Case 2; T(n) = Θ(n^{k} log n)",
      "Case 3; T(n) = Θ(f(n))",
      "Case 1; T(n) = Θ(n^{k})"
    ],
    "إذا log_b a > k فهي الحالة 1 والجواب Θ(n^{log_{b} a}).",
    "If log_b a > k it's Case 1: Θ(n^{log_{b} a}).",
    1,
    0
  ],
  [
    4,
    "master",
    "Consider the recurrence T(n) = 4T(n/2) + n^{2}/log^{2} n. According to the provided lecture examples, why does this result in T(n) = Θ(n^{2})?",
    [
      "Because it is Case 2 with p = −2, which is less than -1.",
      "Because log_{b} a < k.",
      "Because f(n) grows faster than the subproblems.",
      "Because the log term in the denominator is ignored in asymptotic analysis."
    ],
    "a = 4, b = 2, فـ log₂4 = 2 = k والـ p = −2 < −1، فهي الحالة 2 (c) والجواب Θ(n^{log_{b} a}) = Θ(n²).",
    "log₂4 = 2 = k and p = −2 < −1 → Case 2(c): Θ(n^{log_{b} a}) = Θ(n²).",
    1,
    0
  ],
  [
    4,
    "dc",
    "What are the three phases of the Divide-and-Conquer paradigm in their correct order?",
    [
      "Divide, Conquer, Combine",
      "Split, Solve, Merge",
      "Conquer, Divide, Combine",
      "Partition, Recurse, Return"
    ],
    "الترتيب: تقسيم ثم حل ثم دمج.",
    "Divide, Conquer, Combine.",
    1,
    0
  ],
  [
    4,
    "dc",
    "In the context of Binary Search, what occurs during the \"Combine\" phase?",
    [
      "No real combination is required; the answer is simply returned.",
      "The left and right halves of the array are merged.",
      "The middle element is added to a results list.",
      "The indices are recalculated for the next iteration."
    ],
    "في البحث الثنائي ما فيه دمج فعلي؛ نرجع الجواب على طول.",
    "Binary search needs no real combine step; the answer is returned.",
    1,
    0
  ],
  [
    4,
    "sorts",
    "How does Quicksort differ fundamentally from Mergesort in its \"Divide\" phase?",
    [
      "Quicksort splits elements based on their values (partitioning), while Mergesort splits based on position.",
      "Quicksort splits elements based on their positions.",
      "Mergesort splits elements based on their values.",
      "Quicksort does not have a \"Divide\" phase; it only has a \"Conquer\" phase."
    ],
    "Quicksort يقسم حسب القيم (partition حول الـ pivot)، وMergesort يقسم حسب المكان (نصين).",
    "Quicksort partitions by value; Mergesort splits by position.",
    1,
    0
  ],
  [
    4,
    "sorts",
    "What is the worst-case time complexity and space complexity of Quicksort?",
    [
      "O(n^{2}) time and O(n) space.",
      "O(n log n) time and O(n) space.",
      "O(n^{2}) time and O(1) space.",
      "O(n log n) time and O(log n) space."
    ],
    "أسوأ حالة O(n²) وقت، والمكدس يوصل عمقه n فالمساحة O(n).",
    "Worst case is O(n²) time with O(n) recursion-stack space.",
    1,
    0
  ],
  [
    4,
    "sorts",
    "Which sorting algorithm is characterized as being stable, using O(n) extra memory, and having a guaranteed O(n log n) time complexity?",
    [
      "Merge Sort",
      "Quicksort",
      "Heapsort",
      "Insertion Sort"
    ],
    "Merge Sort: مستقر، يحتاج O(n) ذاكرة، ومضمون O(n log n).",
    "Merge Sort is stable, uses O(n) memory, and is always O(n log n).",
    1,
    0
  ],
  [
    4,
    "sorts",
    "According to the \"Memory vs. Speed\" trade-off analysis, which algorithm is \"memory-light\" but often too slow for large datasets?",
    [
      "Insertion Sort",
      "Merge Sort",
      "Quick Sort",
      "Heap Sort"
    ],
    "Insertion Sort ما ياخذ ذاكرة (O(1)) بس O(n²) بطيء للبيانات الكبيرة.",
    "Insertion Sort is O(1) space but O(n²) time.",
    1,
    0
  ],
  [
    4,
    "matrix",
    "The classical iterative matrix multiplication algorithm (triple nested loops) has a time complexity of:",
    [
      "O(n^{3})",
      "O(n^{2})",
      "O(n^{log_{2} 7})",
      "O(n log n)"
    ],
    "ثلاث حلقات متداخلة كل وحدة n، فـ O(n³).",
    "Three nested loops of n: O(n³).",
    1,
    0
  ],
  [
    4,
    "matrix",
    "Why does the Naïve Recursive Divide-and-Conquer method for matrix multiplication fail to improve asymptotic time complexity over the iterative method?",
    [
      "It requires 8 recursive multiplications of size n/2, resulting in T(n) = 8T(n/2) + O(n^{2}), which still solves to O(n^{3}).",
      "It uses too much space.",
      "It involves too many additions.",
      "Partitioning the matrices takes O(n^{3}) time."
    ],
    "8 ضربات بحجم n/2: log₂8 = 3 > 2، فالحالة 1 وتطلع O(n³).",
    "8T(n/2) + O(n²): log₂8 = 3 > 2 → Case 1 → O(n³).",
    1,
    0
  ],
  [
    4,
    "matrix",
    "What is the primary mathematical \"trick\" Strassen's Algorithm uses to achieve a complexity of approximately O(n^{2.81})?",
    [
      "It reduces the number of recursive multiplications from 8 to 7.",
      "It reduces the number of matrix additions from 18 to 7.",
      "It eliminates the need for partitioning.",
      "It uses an iterative approach within the recursion."
    ],
    "Strassen يقلل الضربات من 8 إلى 7: T(n) = 7T(n/2) + O(n²) = O(n^{log₂7}) ≈ O(n^{2.81}).",
    "Strassen uses 7 multiplications instead of 8: O(n^{log₂7}) ≈ O(n^{2.81}).",
    1,
    0
  ],
  [
    4,
    "matrix",
    "Which of the following is a disadvantage of Strassen's Algorithm compared to the classical method?",
    [
      "It has higher constant factors and more additions/subtractions, making it less stable.",
      "It has a higher theoretical time complexity.",
      "It is more asymptotically complex.",
      "It requires O(n^{3}) space."
    ],
    "عيبه: ثوابت أكبر وجمع وطرح أكثر (18 عملية)، فهو أقل ثباتاً عددياً.",
    "Higher constants and more additions/subtractions make it less numerically stable.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "According to the lecture, what is the primary reason for using randomness in algorithms?",
    [
      "To break ties and symmetry that could lead to predictable, worst-case behavior.",
      "To ensure the algorithm always finishes in the same amount of time.",
      "To eliminate the need for recursive functions in divide-and-conquer paradigms.",
      "To guarantee that the algorithm is 100% accurate in all cases, unlike deterministic ones."
    ],
    "العشوائية تكسر التماثل والتعادل اللي ممكن يوصلنا لأسوأ حالة متوقعة.",
    "Randomness breaks ties/symmetry that cause predictable worst cases.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "Which of the following best describes a \"Las Vegas\" algorithm?",
    [
      "It always produces the correct answer, but its running time is a random variable.",
      "It has a fixed, bounded running time but may produce an incorrect answer with a small probability.",
      "It is designed specifically for gambling applications and probability simulations.",
      "It is an approximation algorithm that yields \"good enough\" answers in linear time."
    ],
    "Las Vegas: الجواب دايماً صح، والوقت هو العشوائي.",
    "Las Vegas: always correct, random running time.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "If an algorithm always runs in O(n log n) time but has a 1% probability of providing the wrong result, it is classified as:",
    [
      "A Monte Carlo algorithm.",
      "A deterministic algorithm.",
      "A Las Vegas algorithm.",
      "An adversarial algorithm."
    ],
    "Monte Carlo: الوقت محدود، بس فيه احتمال صغير للخطأ.",
    "Monte Carlo: bounded time, small chance of a wrong answer.",
    1,
    0
  ],
  [
    5,
    "rquick",
    "In deterministic Quicksort, which input type typically triggers the worst-case O(n^{2}) runtime when the first element is consistently chosen as the pivot?",
    [
      "Already sorted or reverse-sorted arrays.",
      "Randomized arrays.",
      "Arrays with many duplicate values.",
      "Very small arrays where n < 10."
    ],
    "لو الـ pivot أول عنصر والمصفوفة مرتبة (أو بالعكس)، التقسيم يطلع غير متوازن فـ O(n²).",
    "With the first element as pivot, sorted/reverse-sorted input gives O(n²).",
    1,
    0
  ],
  [
    5,
    "rquick",
    "How does the Randomized Quicksort algorithm modify the standard partitioning process?",
    [
      "It selects a random index i, swaps A[i] with the pivot position, and then partitions.",
      "It partitions the array into three parts instead of two.",
      "It sorts the array before selecting the median as a pivot.",
      "It eliminates the recursion step to save space."
    ],
    "يختار index عشوائي i، يبدّل A[i] مع مكان الـ pivot (غالباً الأخير)، بعدين يسوي partition.",
    "Pick a random i, swap A[i] into the pivot position, then partition.",
    1,
    0
  ],
  [
    5,
    "rquick",
    "What is the expected number of comparisons E[C(n)] for Randomized Quicksort?",
    [
      "Θ(n log n)",
      "Θ(n)",
      "Θ(n^{2})",
      "Θ(log n)"
    ],
    "العدد المتوقع للمقارنات Θ(n log n).",
    "Expected comparisons are Θ(n log n).",
    1,
    0
  ],
  [
    5,
    "rquick",
    "Even with a random pivot strategy, what is the theoretical worst-case time complexity of Randomized Quicksort?",
    [
      "O(n^{2})",
      "O(n)",
      "O(n log n)",
      "O(2^{n})"
    ],
    "حتى مع العشوائية، أسوأ حالة نظرياً O(n²) بس احتمالها ضعيف جداً.",
    "Worst case is still O(n²), though extremely unlikely.",
    1,
    0
  ],
  [
    5,
    "qselect",
    "What is the main goal of the Quickselect algorithm?",
    [
      "To find the k-th smallest element in an unsorted array.",
      "To sort an entire array in linear time.",
      "To determine the maximum value in a balanced BST.",
      "To select a random sample of data for statistical analysis."
    ],
    "Quickselect يلقى العنصر رقم k الأصغر في مصفوفة غير مرتبة.",
    "Quickselect finds the k-th smallest element in an unsorted array.",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Why is the expected runtime of Quickselect O(n), while Quicksort is O(n log n)?",
    [
      "Quickselect only recurses into one side of the partition that contains the target element.",
      "Quickselect uses a faster partitioning method.",
      "Quickselect does not use random pivots.",
      "Quickselect requires the input array to be pre-sorted."
    ],
    "Quickselect يكمل في جهة وحدة بس (اللي فيها العنصر)، فالمجموع n + n/2 + … ≈ 2n = O(n).",
    "It recurses into only one side: n + n/2 + … ≈ 2n = O(n).",
    1,
    0
  ],
  [
    5,
    "qselect",
    "Which of the following is identified as a \"common mistake\" when implementing Quickselect?",
    [
      "Converting the global index k to a \"rank within a subarray\" without precise adjustment.",
      "Using recursion instead of iteration.",
      "Picking the median of the array as the pivot.",
      "Using O(n) space for the partitioning step."
    ],
    "الغلطة الشائعة: تحويل k من ترتيب عام لترتيب داخل المصفوفة الفرعية بدون تعديل دقيق.",
    "A common mistake is converting global k to a subarray rank without precise adjustment.",
    1,
    0
  ],
  [
    5,
    "rquick",
    "Which pivot strategy is described as \"often better in practice\" but still \"not adversarially robust\"?",
    [
      "Median-of-three.",
      "First element.",
      "Last element.",
      "Random element."
    ],
    "Median-of-three أحسن عملياً، بس ممكن أحد يصمم مدخل يخربه.",
    "Median-of-three is good in practice but not robust against adversarial inputs.",
    1,
    0
  ],
  [
    5,
    "whyrand",
    "Based on the lecture \"Key Takeaways,\" randomized approaches are often preferred in practice because:",
    [
      "They have better expected performance and are robust against adversarial inputs.",
      "They are more complex and therefore more secure.",
      "They guarantee a O(log n) worst-case runtime for all sorting problems.",
      "They eliminate the need for space complexity analysis."
    ],
    "العشوائية تعطي أداء متوقع أحسن ومقاومة للمدخلات الخبيثة.",
    "Better expected performance and robustness to adversarial inputs.",
    1,
    0
  ]
];

export const CH_NAMES = {
  "1": "Algorithm Behaviour & Complexity Analysis",
  "2": "Practice: Complexity Analysis",
  "3": "Iterative Analysis & Recurrence Relations",
  "4": "Master Theorem & Divide-and-Conquer",
  "5": "Randomized Algorithms"
};

export const CHS = [
  1,
  2,
  3,
  4,
  5
];

export const EX = {
  "algo": "الخوارزمية مثل وصفة الطبخ: خطوات واضحة، مكونات معروفة (المدخلات)، ولازم تخلص وتطلع لك طبخة (المخرج). وصفة تقول «ضيف ملح على كيفك» مو خوارزمية لأنها مو واضحة.",
  "why": "ساعة التوقيت مثل إنك تقيس سرعة عدّاء على طرق مختلفة، مرة رمل ومرة إسفلت. عشان كذا نعدّ الخطوات نفسها بدل الثواني.",
  "timec": "عدّ الخطوات مثل عدّ الدرجات في الدرج: كل درجة خطوة، والحلقة مثل درج تطلعه n مرة، والحلقتين المتداخلة درج داخل كل دور.",
  "spacec": "المساحة الثابتة مثل شنطتك اليومية، والمتغيرة مثل عدد الكراتين اللي تحتاجها حسب عدد الأغراض (n). والحلقة ما تحتاج كرتون جديد كل لفة.",
  "cases": "البحث عن اسمك في كشف: أفضل حالة اسمك أول واحد، أسوأ حالة آخر واحد أو مو موجود، والمتوسط تقريباً بالنص.",
  "growth": "لما n كبيرة جداً الثوابت ما تفرق: سيارة بسرعة n² بتسبق أي سيارة سرعتها 1000n بعد ما تمشي مسافة كافية.",
  "bigo": "Big-O سقف: «ما راح يتعدى كذا». Big-Ω أرضية: «على الأقل كذا». Big-Θ لما السقف والأرضية نفس الشكل، فأنت عارف المكان بالضبط.",
  "proofs": "إثبات O مثل إنك تقول «كل الطلاب أطول من متر وعشرين بالكثير 2 متر»: تكبّر الصغار لين يصيرون نفس الكبير وتجمع.",
  "compare": "Insertion sort مثل ترتيب أوراق اللعب في يدك: لو جات مرتبة تحطها على طول (n)، ولو جات معكوسة كل ورقة تزحلقها لأول اليد (n²).",
  "iter": "الحلقة المثلثية مثل تسلّم على ناس في صف: الأول يسلم على واحد، والثاني على اثنين… المجموع n(n+1)/2، يعني نص المربع بس برضو n².",
  "recur": "العلاقة التكرارية مثل الدمى الروسية: كل دمية فيها دمية أصغر، وT(n) = شغلك على الدمية الحالية + T(اللي داخلها).",
  "backsub": "التعويض التكراري مثل إنك تفك الدمى وحدة وحدة وتكتب كل مرة وش صار، لين تشوف النمط وتعرف كم دمية (k) لين توصل للأصغر.",
  "rtree": "شجرة الاستدعاء مثل شجرة عائلة: كل جيل (مستوى) تحسب شغله كله، وبعدين تضرب في عدد الأجيال (الارتفاع).",
  "merge": "الدمج مثل ترتيب كومة أوراق امتحان مع زميلك: تقسمونها نصين، كل واحد يرتب نصه، وبعدين تدمجون الكومتين ورقة ورقة.",
  "master": "المبرهنة الرئيسية سباق بين الجذر والأوراق: إذا الأوراق أثقل (log_b a > k) هي تفوز، إذا الجذر أثقل f(n) تفوز، وإذا متساويين نضرب في عدد المستويات (log n).",
  "dc": "البحث الثنائي مثل لعبة «أكبر أو أصغر» لتخمين رقم من 1 لـ 1000: كل سؤال يقسم الاحتمالات نصين، فتخلص بـ 10 أسئلة بس.",
  "matrix": "ستراسن مثل طباخ اكتشف إنه يقدر يسوي نفس الطبخة بـ 7 قدور بدل 8. قدر واحد أقل كل مرة يفرق كثير لما تتكرر الوصفة.",
  "sorts": "Merge مثل شركة شحن مضمونة بس تحتاج مستودع كبير (O(n) مساحة). Quick أسرع وما يحتاج مستودع، بس لو حظك سيء (pivot سيء) يتأخر كثير.",
  "whyrand": "لاس فيقاس مثل مطعم أكله دايماً صح بس وقت الانتظار يختلف. مونت كارلو مثل مطعم يسلمك خلال 5 دقايق مضمونة بس أحياناً نادرة يغلط في الطلب.",
  "rquick": "الـ pivot العشوائي مثل إنك تختار حكم المباراة بالقرعة: محد يقدر يرتب مباراة ضدك لأنه ما يدري مين بيكون الحكم.",
  "qselect": "Quickselect مثل تدوّر على رابع أطول طالب: تختار طالب، تفرز الأقصر يمين والأطول يسار، وتكمل بس في الجهة اللي فيها الرابع وتنسى الثانية."
};

export const EXTRA_NAMES = {
  "tut1": "تدريبات الدكتور · Lecture 1",
  "tut2": "تدريبات الدكتور · Lecture 2",
  "tut3": "تدريبات الدكتور · Lecture 3",
  "tut4": "تدريبات الدكتور · Lecture 4",
  "tut5": "تدريبات الدكتور · Lecture 5"
};

export const DOCQ = new Set([
  404,
  405,
  406,
  407,
  408,
  409,
  410,
  411,
  412,
  413,
  414,
  415,
  416,
  417,
  418,
  419,
  420,
  421,
  422,
  423,
  424,
  425,
  426,
  427,
  428,
  429,
  430,
  431,
  432,
  433,
  434,
  435,
  436,
  437,
  438,
  439,
  440,
  441,
  442,
  443,
  444,
  445,
  446,
  447,
  448,
  449,
  450,
  451,
  452,
  453,
  454,
  455,
  456,
  457,
  458,
  459,
  460,
  461,
  462,
  463,
  464,
  465,
  466,
  467,
  468,
  469,
  470,
  471
]);

export const PARTS = {
  "1": [
    [
      "Part 1 · Fundamental Concepts and the Design Process",
      [
        "algo"
      ]
    ],
    [
      "Part 2 · Time and Space Complexity",
      [
        "why",
        "timec",
        "spacec"
      ]
    ],
    [
      "Part 3 · Case Behaviors and Asymptotic Analysis",
      [
        "cases",
        "growth"
      ]
    ],
    [
      "Part 4 · Big-O, Omega, and Theta Notations",
      [
        "bigo"
      ]
    ]
  ],
  "2": [
    [
      "Part 1–2 · Asymptotic Definitions, Growth Hierarchy and Proof Mechanics",
      [
        "proofs"
      ]
    ],
    [
      "Part 3–4 · Case Behaviours (Insertion Sort) and Asymptotic Comparisons",
      [
        "compare"
      ]
    ]
  ],
  "3": [
    [
      "Part 1 · Algorithm Types and Iterative Analysis",
      [
        "iter"
      ]
    ],
    [
      "Part 2 · Recursive Analysis and Recurrence Relations",
      [
        "recur",
        "backsub"
      ]
    ],
    [
      "Part 3 · The Recursion Tree Method",
      [
        "rtree"
      ]
    ],
    [
      "Part 4–5 · Case Study: Merge Sort",
      [
        "merge"
      ]
    ]
  ],
  "4": [
    [
      "Part 1 · Master Theorem & Recurrence Relations",
      [
        "master"
      ]
    ],
    [
      "Part 2 · Divide-and-Conquer Principles",
      [
        "dc"
      ]
    ],
    [
      "Part 3 · Sorting Algorithms",
      [
        "sorts"
      ]
    ],
    [
      "Part 4 · Matrix Multiplication",
      [
        "matrix"
      ]
    ]
  ],
  "5": [
    [
      "Part 1 · Introduction and Theory of Randomization",
      [
        "whyrand"
      ]
    ],
    [
      "Part 2 · Randomized Quicksort",
      [
        "rquick"
      ]
    ],
    [
      "Part 3–4 · Randomized Selection (Quickselect) and Comparison",
      [
        "qselect"
      ]
    ]
  ]
};

export const FIGS = {
  "algo": [
    [
      "img/l1p4.webp",
      "Algorithm Design and Analysis Process",
      "خطوات تصميم وتحليل الخوارزمية"
    ]
  ],
  "why": [
    [
      "img/l1p7.webp",
      "Time complexity: step-counting rules",
      "قواعد عدّ الخطوات"
    ]
  ],
  "timec": [
    [
      "img/l1p7.webp",
      "Step-counting rules + summation example (2n + 2)",
      "قواعد عدّ الخطوات ومثال الجمع"
    ],
    [
      "img/l1p9.webp",
      "Linear time example: T(p) = 3n + 4",
      "مثال الوقت الخطي"
    ]
  ],
  "spacec": [
    [
      "img/l1p10.webp",
      "Space complexity: S(P) = C + Sp and space-counting rules",
      "قواعد حساب المساحة"
    ]
  ],
  "cases": [
    [
      "img/l1p16.webp",
      "Best, worst and average case",
      "أفضل وأسوأ ومتوسط حالة"
    ]
  ],
  "growth": [
    [
      "img/l1p18.webp",
      "Order of growth",
      "ترتيب النمو"
    ]
  ],
  "bigo": [
    [
      "img/l1p24.webp",
      "Summary: Big-O (worst), Big-Ω (best), Big-Θ (average)",
      "ملخص الرموز الثلاثة"
    ]
  ],
  "proofs": [
    [
      "img/l2p3.webp",
      "Prove Big-O: c = 1020, n₀ = 2",
      "مثال إثبات Big-O"
    ]
  ],
  "compare": [
    [
      "img/l2p13.webp",
      "When are O, Ω, Θ equal to another function?",
      "متى تكون O وΩ وΘ نفس الدالة"
    ],
    [
      "img/l2p9.webp",
      "Insertion sort on an unsorted array",
      "Insertion Sort خطوة خطوة"
    ]
  ],
  "iter": [
    [
      "img/l3p6.webp",
      "Loops → summation formulas",
      "من الحلقات لصيغ الجمع"
    ]
  ],
  "recur": [
    [
      "img/l3p9.webp",
      "Common recurrences and their tight bounds",
      "علاقات تكرار مشهورة وحلولها"
    ]
  ],
  "backsub": [
    [
      "img/l3p12.webp",
      "Iterative (back-substitution) method",
      "طريقة التعويض التكراري"
    ]
  ],
  "rtree": [
    [
      "img/l3p28.webp",
      "Recursion tree for T(n) = 2T(n/2) + cn",
      "شجرة الاستدعاء"
    ]
  ],
  "merge": [
    [
      "img/l3p31.webp",
      "Merge sort operation",
      "طريقة عمل Merge Sort"
    ],
    [
      "img/l3p35.webp",
      "Merge sort space complexity: O(n)",
      "مساحة Merge Sort"
    ]
  ],
  "master": [
    [
      "img/l4p5.webp",
      "Master Theorem (general form) and its cases",
      "المبرهنة الرئيسية وحالاتها"
    ]
  ],
  "dc": [
    [
      "img/l4p13.webp",
      "Binary search",
      "البحث الثنائي"
    ],
    [
      "img/l4p16.webp",
      "Quicksort and partition",
      "Quick Sort والتقسيم"
    ]
  ],
  "sorts": [
    [
      "img/l4p24.webp",
      "Sorting algorithms comparison",
      "مقارنة خوارزميات الترتيب"
    ],
    [
      "img/l4p25.webp",
      "Memory vs speed trade-offs",
      "الذاكرة مقابل السرعة"
    ]
  ],
  "matrix": [
    [
      "img/l4p21.webp",
      "Recursive matrix multiplication",
      "الضرب التعاودي للمصفوفات"
    ],
    [
      "img/l4p22.webp",
      "Strassen's matrix multiplication",
      "خوارزمية Strassen"
    ],
    [
      "img/l4p23.webp",
      "Matrix multiplication summary",
      "ملخص ضرب المصفوفات"
    ]
  ],
  "whyrand": [
    [
      "img/l5p6.webp",
      "Las Vegas vs Monte Carlo",
      "Las Vegas ضد Monte Carlo"
    ]
  ],
  "rquick": [
    [
      "img/l5p9.webp",
      "Pivot choice strategies",
      "استراتيجيات اختيار الـ pivot"
    ]
  ],
  "qselect": [
    [
      "img/l5p10.webp",
      "Randomized selection (Quickselect)",
      "Quickselect"
    ],
    [
      "img/l5p12.webp",
      "Quickselect common mistakes",
      "أخطاء شائعة في Quickselect"
    ]
  ]
};

export const HOT_POINTS = [
  {
    "lec": 1,
    "en": "Order of growth: <b>1 &lt; log n &lt; n &lt; n log n &lt; n² &lt; n³ &lt; 2^{n} &lt; n!</b>",
    "ar": "ترتيب النمو من الأبطأ للأسرع. احفظه حرف حرف، أغلب أسئلة المقارنة تجي منه."
  },
  {
    "lec": 1,
    "en": "Big-O: f(n) ≤ c·g(n) for n ≥ n_{0} (upper, <b>worst</b>). Big-Ω: f(n) ≥ c·g(n) (lower, <b>best</b>). Big-Θ: both (tight, <b>average</b>).",
    "ar": "تعريفات الرموز الثلاثة، وكل واحد بأي حالة يرتبط في السلايدات."
  },
  {
    "lec": 1,
    "en": "Tight Big-O = keep the <b>dominant term</b>, drop constants: 3n² + 17n log n + 1000 → <b>O(n²)</b>. It is also O(n³) (loose).",
    "ar": "Big-O المحكم: الحد المسيطر بدون الثابت. وأي دالة أكبر تصير Big-O واسع."
  },
  {
    "lec": 1,
    "en": "Step counting: loop = steps inside × iterations; nested = multiply; `for(i=0;i<n;i++)` test runs <b>n+1</b> times → sum example <b>T = 3n + 4</b>.",
    "ar": "عدّ الخطوات: الحلقة = داخلها × التكرار، والمتداخلة ضرب، والشرط يتنفذ n+1 مرة."
  },
  {
    "lec": 1,
    "en": "Space: S(P) = C + S_{p}. Arrays → n, 2D → n², <b>loops add nothing</b>, recursion = depth × per-call memory. sum(A, n) = <b>n + 3</b>.",
    "ar": "المساحة: الحلقات ما تزيد شي، والاستدعاء الذاتي = العمق × ذاكرة كل استدعاء."
  },
  {
    "lec": 1,
    "en": "Best case → lower bound; worst case → upper bound & guarantee; average → random input. Linear search: best O(1), worst O(n).",
    "ar": "أفضل حالة حد أدنى، أسوأ حالة حد أعلى وضمان، والمتوسط مدخلات عشوائية."
  },
  {
    "lec": 2,
    "en": "Proofs: <b>O</b> → overestimate small terms, c = sum of coefficients (3+17+1000 = <b>1020</b>, n₀ = 2). <b>Ω</b> → keep dominant term (c = 3). <b>Θ</b> → both, larger n₀.",
    "ar": "الإثبات: في O نجمع المعاملات، في Ω نخلي الحد المسيطر، وفي Θ الاثنين مع n₀ الأكبر."
  },
  {
    "lec": 2,
    "en": "If f = Θ(n²): O can be n², n³, 2^{n}, n! (≥); Ω can be n², n log n, n, 1 (≤). (log n)² ≠ Θ(log n).",
    "ar": "O أي شي يساوي أو أكبر، Ω أي شي يساوي أو أصغر."
  },
  {
    "lec": 2,
    "en": "Insertion sort: sorted input → <b>O(n)</b>; reverse-sorted → <b>O(n²)</b>.",
    "ar": "الإدراج: مرتبة O(n)، معكوسة O(n²)."
  },
  {
    "lec": 3,
    "en": "Σ i = n(n+1)/2 → the triangular loop `for j = 1 to i` is <b>O(n²)</b>. Σ i² = n(n+1)(2n+1)/6. Doubling loop `i *= 2` → <b>O(log n)</b>.",
    "ar": "الحلقة المثلثية n²، وحلقة المضاعفة log n."
  },
  {
    "lec": 3,
    "en": "Recurrence table: T(n−1)+n → <b>n²</b> · T(n/2)+c → <b>log n</b> · T(n/2)+n → <b>n</b> · 2T(n/2)+1 → <b>n</b> · 2T(n/2)+n → <b>n log n</b>.",
    "ar": "جدول العلاقات المشهورة، يجي منه سؤال أكيد."
  },
  {
    "lec": 3,
    "en": "Back-substitution: expand → pattern in k → set argument = base case → solve k → substitute. c + T(n−1): k = n − 1 → <b>O(n)</b>.",
    "ar": "خطوات التعويض التكراري الأربع."
  },
  {
    "lec": 3,
    "en": "Recursion tree of 2T(n/2) + cn: every level costs <b>cn</b>, height <b>log₂ n</b>, leaves <b>n</b> → <b>Θ(n log n)</b>.",
    "ar": "شجرة الدمج: كل مستوى cn، والارتفاع log n."
  },
  {
    "lec": 3,
    "en": "Merge sort: T(n) = 2T(n/2) + O(n) → <b>Θ(n log n)</b> always; space <b>O(n)</b> → <b>not in-place</b>.",
    "ar": "الدمج n log n دايماً، ومساحته O(n) فهو مو in-place."
  },
  {
    "lec": 4,
    "en": "Master: T(n) = aT(n/b) + Θ(n^{k} log^{p} n). Compare log_{b} a with k. <b>Case 1</b> (&gt;): n^{log_{b} a}. <b>Case 2</b> (=): p&gt;−1 → n^{k} log^{p+1} n; p=−1 → n^{k} log log n; p&lt;−1 → n^{k}. <b>Case 3</b> (&lt;): p≥0 → n^{k} log^{p} n; p&lt;0 → n^{k}.",
    "ar": "أهم شي في المادة كلها. احفظ الحالات الثلاث وقواعد p."
  },
  {
    "lec": 4,
    "en": "Slide examples: 2T(n/2)+n → <b>n log n</b> · 5T(n/2)+n² → <b>n^{2.32}</b> · 12T(n/3)+n³ → <b>n³</b> · 4T(n/2)+n²/log² n → <b>n²</b> (p = −2).",
    "ar": "أمثلة السلايدات الأربعة، احتمال كبير يجي واحد منها."
  },
  {
    "lec": 4,
    "en": "Binary search: T(n/2) + O(1) → <b>O(log n)</b>, no combine. Quicksort: best 2T(n/2)+n → n log n; worst T(n−1)+n → <b>n²</b> (pivot min/max); no combine.",
    "ar": "البحث الثنائي log n، والسريع أفضل n log n وأسوأ n²."
  },
  {
    "lec": 4,
    "en": "Matrix: classical <b>n³</b>; naive D&C 8T(n/2)+4n² → <b>n³</b>; Strassen <b>7</b> products: 7T(n/2)+4n² → <b>n^{2.81}</b>, space n² (time improved, space not).",
    "ar": "ضرب المصفوفات: ستراسن 7 ضربات بدل 8."
  },
  {
    "lec": 4,
    "en": "Sorting table: Merge (n log n, O(n), stable, D&C) · Quick (avg n log n, worst n², in-place, unstable, D&C) · Heap (n log n, O(1), unstable, <b>not</b> D&C) · Bubble/Insertion (best n, worst n², stable).",
    "ar": "جدول الترتيب: انتبه إن Heap مو D&C، والسريع مو مستقر."
  },
  {
    "lec": 5,
    "en": "<b>Las Vegas</b>: always correct, variable time (expected time). <b>Monte Carlo</b>: bounded time, may be wrong (error probability, reduce by repetition).",
    "ar": "لاس فيقاس دايماً صح، مونت كارلو دايماً سريع بس ممكن يغلط."
  },
  {
    "lec": 5,
    "en": "Randomized quicksort: random pivot → expected <b>Θ(n log n)</b> comparisons; still O(n²) possible but very unlikely. Pivot table: first/last bad on sorted; median-of-3 not adversarially robust; random = robust.",
    "ar": "السريع العشوائي: المتوقع n log n، والـ pivot العشوائي أقوى خيار."
  },
  {
    "lec": 5,
    "en": "Quickselect: recurse on <b>one side</b> → expected <b>O(n)</b>, worst <b>O(n²)</b>. Slide: 4th smallest (k = 3) of [2,3,1,9,7,6,10,5] = <b>5</b>.",
    "ar": "الاختيار السريع جهة وحدة فالمتوقع O(n)، والأسوأ n²."
  }
];
