/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO DATA ENGINE
   Centralized, Verified Project & Engineering Datasets
   ============================================================ */

'use strict';

/* ── 1. VERIFIED ENGINEERING EXPERTISE GROUPS ────────────── */
const EXPERTISE_GROUPS = [
  {
    id: "mobile-engineering",
    title: "Mobile Application Engineering",
    titleAr: "هندسة تطبيقات الموبايل",
    icon: "fab fa-flutter",
    color: "#06b6d4",
    lead: "Building production-grade, responsive cross-platform applications with Flutter & Dart, structured around Clean Architecture principles.",
    focusAreas: [
      "Clean Architecture (Presentation, Domain, Data layers separation)",
      "State Management: BLoC, Riverpod, Provider, and GetX",
      "Robust REST API integration, Dio interceptors, and JSON serialization",
      "Offline-first local persistence: Hive DB and SQLite / Sqflite",
      "Pixel-precise responsive layouts, vector graphics, and 60/120 FPS UI performance"
    ],
    technologies: ["Flutter", "Dart", "BLoC", "Riverpod", "GetX", "Hive DB", "Sqflite", "REST APIs", "Clean Architecture"]
  },
  {
    id: "web-backend",
    title: "Web & Backend Engineering",
    titleAr: "تطوير الويب والخوادم والـ APIs",
    icon: "fab fa-react",
    color: "#38bdf8",
    lead: "Developing scalable, performant web platforms and robust backend API integrations for enterprise and client deployments.",
    focusAreas: [
      "Modern Web Applications: Next.js (App Router / Pages), React, TypeScript",
      "Enterprise Backend Integration: REST APIs with PHP services (Cyber-Wise)",
      "Backend Services & Daemons: Node.js, Express, and WebSocket gateways",
      "Cloud & Real-time Persistence: Firebase Firestore, MongoDB, and PostgreSQL",
      "Web performance fundamentals, accessibility (a11y), responsive design, and SEO"
    ],
    technologies: ["Next.js", "React", "TypeScript", "JavaScript", "PHP", "Node.js", "Firebase", "REST APIs", "Tailwind CSS"]
  },
  {
    id: "systems-networking",
    title: "Systems & Networking Engineering",
    titleAr: "هندسة الأنظمة والشبكات والعتاد",
    icon: "fas fa-network-wired",
    color: "#a855f7",
    lead: "Low-level network telemetry, router firmware engineering, and integration between physical hardware, backend services, and controllers.",
    focusAreas: [
      "Router Firmware: OpenWrt Linux OS customization, configuration, and UCI scripts",
      "Network Traffic Control: iptables byte quota counters and tc bandwidth traffic shaping",
      "System Daemons: Node.js background services communicating via local sockets",
      "Hardware Integration: Interfacing microcontrollers and physical status peripherals",
      "Protocol Communication: WebSockets, local IPC, and network interface isolation"
    ],
    technologies: ["OpenWrt", "Linux Networking", "iptables", "tc (Traffic Control)", "Node.js Daemons", "Shell Scripting", "Hardware IoT"]
  },
  {
    id: "technical-education",
    title: "Technical Education & Python Training",
    titleAr: "التعليم التقني وتدريب بايثون",
    icon: "fab fa-python",
    color: "#10b981",
    lead: "Delivering structured programming education, designing computer science curricula, and building interactive EdTech portals.",
    focusAreas: [
      "Python Instructor: Mostaqbal Watan Python training course instructor",
      "Core Curriculum: Python syntax, control flow, functions, and standard libraries",
      "Computer Science Fundamentals: Object-Oriented Programming (OOP) & Design",
      "Algorithms & Data Structures: Problem-solving methodology and computational thinking",
      "EdTech Platforms: Engineering interactive web portals for student progress tracking"
    ],
    technologies: ["Python 3", "OOP", "Data Structures", "Algorithms", "Curriculum Design", "EdTech Portals", "Student Mentorship"]
  }
];

/* ── 2. FEATURED & COMPREHENSIVE PROJECTS DATASET ──────────── */
const PROJECTS_DATA = {
  gouna_lifestyle: {
    id: "gouna_lifestyle",
    title: "Gouna Lifestyle Platform",
    titleAr: "منصة الجونة لايف ستايل — Gouna Lifestyle",
    type: "web",
    categoryFilter: "web",
    projectClass: "Client Project · Cyber-Wise",
    client: "Cyber-Wise",
    clientAr: "شركة Cyber-Wise",
    role: "Frontend Architecture & PHP Backend API Integration",
    roleAr: "معمارية الواجهة الأمامية وربط خدمات الـ PHP",
    statusBadge: "CLIENT WORK · LIVE DEPLOYMENT",
    statusBadgeColor: "cyan",
    verifiedTech: ["Next.js", "PHP", "Tailwind CSS", "REST APIs", "Bilingual RTL/LTR", "Responsive UI"],
    summary: "A bilingual (Arabic/English) tourism and lifestyle web platform focused on El Gouna, Red Sea. Developed for Cyber-Wise to showcase destinations, activities, and local services.",
    description: "منصة رقمية فاخرة متكاملة لاستكشاف العقارات ونمط الحياة السياحي الراقي في مدينة الجونة بالبحر الأحمر. تم تنفيذها لصالح شركة Cyber-Wise بالاعتماد على Next.js لواجهة المستخدم وربطها مع خدمات خلفية بلغة PHP عبر REST APIs.",
    demoLink: "https://gouna-lifestyle-platform-cbmy-3qqy66fpn-covantage-sr.vercel.app/ar",
    demoLabel: "Live Platform ↗",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#06b6d4",
    mockupType: "browser",
    image: "assets/assets/gouna_lifestyle.jpg",
    gallery: [
      {
        src: "assets/assets/gouna_lifestyle.jpg",
        title: "Luxury Destination & Real Estate Platform",
        titleAr: "منصة الجونة الفاخرة للاستكشاف والخدمات العقارية",
        desc: "Bilingual lifestyle portal showcasing El Gouna destinations, activities, and hotel inquiries with Next.js & PHP APIs.",
        descAr: "واجهة رقمية متكاملة ثنائية اللغة مبنية بـ Next.js وربط كامل مع خدمات الـ PHP REST API.",
        aspect: "desktop"
      }
    ],
    urlPreview: "gouna-lifestyle-platform.vercel.app/ar",
    contributionDetails: [
      "Engineered the modern, responsive user interface using Next.js and Tailwind CSS with high visual fidelity.",
      "Built complete bilingual experiences supporting seamless Arabic (RTL) and English (LTR) transitions.",
      "Integrated frontend client components with PHP backend REST APIs for destination listings and service inquiries.",
      "Implemented structured information architecture for effortless discovery of hotels, activities, and dining.",
      "Applied web performance best practices and responsive layout optimizations across mobile, tablet, and desktop."
    ],
    features: [
      {
        icon: "fa-compass",
        title: "Destination & Service Discovery",
        desc: "Structured catalog of El Gouna districts, activities, dining, and lifestyle destinations with high-resolution imagery."
      },
      {
        icon: "fa-language",
        title: "Bilingual Experience (Arabic & English)",
        desc: "Dedicated Arabic RTL and English LTR layouts with localized typography and intuitive direction-aware navigation."
      },
      {
        icon: "fa-server",
        title: "PHP Backend REST Integration",
        desc: "Reliable API endpoints handling dynamic content queries, user inquiries, and service listings smoothly."
      },
      {
        icon: "fa-mobile-screen",
        title: "Responsive Interface Architecture",
        desc: "Tailored design system providing fluid navigation across all screen sizes with accessible UI controls."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — ARCHITECTURE & DESIGN",
        title: "Component & Layout Engineering",
        desc: "Constructed the responsive component foundation using Next.js and Tailwind CSS, aligning with luxury brand guidelines."
      },
      {
        phase: "STAGE 02 — BILINGUAL & API PIPELINE",
        title: "RTL Integration & PHP Endpoints",
        desc: "Connected dynamic views to PHP backend REST endpoints while engineering flawless bidirectional RTL/LTR switching."
      },
      {
        phase: "STAGE 03 — PRODUCTION DEPLOYMENT",
        title: "Vercel Platform Delivery",
        desc: "Deployed to production on Vercel with responsive testing across real mobile and desktop viewport profiles."
      }
    ]
  },

  openwrt_quota: {
    id: "openwrt_quota",
    title: "OpenWrt WiFi Quota & Bandwidth Manager",
    titleAr: "نظام إدارة كوتة وشبكات الواي فاي — OpenWrt",
    type: "systems",
    categoryFilter: "systems",
    projectClass: "Systems Engineering Case Study",
    client: "Personal Engineering Project",
    clientAr: "مشروع أنظمة وهاردوير",
    role: "Firmware Rules, Backend Daemon & Flutter Controller",
    roleAr: "برمجة نظام الراوتر والباك إند وتطبيق الموبايل",
    statusBadge: "SYSTEMS REPOSITORY · FULL-STACK",
    statusBadgeColor: "purple",
    verifiedTech: ["OpenWrt", "Linux (iptables & tc)", "Node.js", "Flutter", "Hardware Integration", "WebSockets"],
    summary: "A systems-oriented project exploring network quota management and integration between router firmware, a background Node.js daemon, hardware components, and a Flutter mobile controller.",
    description: "مشروع هندسة أنظمة متكامل يستكشف إدارة كوتة استهلاك الإنترنت والتحكم في النطاق الترددي عبر الربط بين نظام تشغيل الراوتر (OpenWrt Linux)، وخادم Node.js، وعناصر الهاردوير، وتطبيق فلاتر على الموبايل.",
    demoLink: "https://github.com/IbrahimElshishtawy/openwrt-wifi-quota-manager",
    demoLabel: "GitHub Repository ↗",
    repoLink: "https://github.com/IbrahimElshishtawy/openwrt-wifi-quota-manager",
    repoLabel: "GitHub Repository",
    accentColor: "#8b5cf6",
    mockupType: "hardware",
    image: "assets/assets/openwrt_manager.jpg",
    gallery: [
      {
        src: "assets/assets/openwrt_manager.jpg",
        title: "Router Telemetry & Bandwidth Management Dashboard",
        titleAr: "لوحة مراقبة استهلاك الراوتر والتحكم في السرعات",
        desc: "Linux iptables byte quota monitoring, tc rate shaping, and Node.js telemetry daemon integration.",
        descAr: "مراقبة حزم البيانات عبر iptables والتحكم في عرض النطاق عبر خادم Node.js ونظام OpenWrt.",
        aspect: "desktop"
      }
    ],
    urlPreview: "github.com/IbrahimElshishtawy/openwrt-wifi-quota-manager",
    contributionDetails: [
      "Configured OpenWrt Linux router firmware and established kernel-level iptables byte quota counting rules.",
      "Researched and implemented traffic control (tc) policies for dynamic bandwidth throttling per connected device.",
      "Built a lightweight Node.js daemon service to monitor network usage counters and bridge data via local WebSockets.",
      "Developed a Flutter mobile application with Clean Architecture for network monitoring and device management.",
      "Explored hardware integration aspects including status indicators and physical interface monitoring."
    ],
    features: [
      {
        icon: "fa-network-wired",
        title: "Kernel-Level iptables Quota Rules",
        desc: "Network packet metering utilizing Linux iptables quota match modules to track bytes consumed per IP and MAC address."
      },
      {
        icon: "fa-gauge-high",
        title: "Traffic Shaping & Bandwidth Control",
        desc: "Traffic control (tc) queuing disciplines to enforce download and upload rate limits without overloading router CPU."
      },
      {
        icon: "fa-server",
        title: "Node.js Telemetry Daemon",
        desc: "Background service parsing active network tables, managing quota thresholds, and streaming data via WebSockets."
      },
      {
        icon: "fa-mobile-screen",
        title: "Flutter Management Application",
        desc: "Intuitive mobile client displaying live bandwidth meters, connected devices list, and manual quota resets."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — ROUTER FIRMWARE",
        title: "OpenWrt & iptables Setup",
        desc: "Configured custom iptables chains on OpenWrt to measure traffic without disrupting native Linux forwarding."
      },
      {
        phase: "STAGE 02 — DAEMON BRIDGE",
        title: "Node.js Local Communication",
        desc: "Constructed the communication bridge reading router metrics and transmitting status updates over local WebSockets."
      },
      {
        phase: "STAGE 03 — MOBILE INTERFACE",
        title: "Flutter Controller UI",
        desc: "Built a reactive mobile controller UI in Flutter adhering to Clean Architecture for real-time device oversight."
      }
    ]
  },

  etihad_bshababha: {
    id: "etihad_bshababha",
    title: "Etihad Bshababha Platform & Python Training",
    titleAr: "منصة اتحاد بشبابها وتدريب بايثون — مستقبل وطن",
    type: "education",
    categoryFilter: "education",
    projectClass: "Educational Platform & Technical Instruction",
    client: "Etihad Bshababha & Mostaqbal Watan",
    clientAr: "مبادرة اتحاد بشبابها وحزب مستقبل وطن",
    role: "Web Platform Development & Python Instructor",
    roleAr: "تطوير المنصة التعليمية وتدريس لغة بايثون",
    statusBadge: "EDTECH PLATFORM · PYTHON INSTRUCTION",
    statusBadgeColor: "emerald",
    verifiedTech: ["Next.js", "Firebase", "Node.js", "Python", "Tailwind CSS", "Cloud Firestore"],
    summary: "Worked on an interactive educational platform associated with Etihad Bshababha and served as a Python instructor in the Mostaqbal Watan training course.",
    description: "مساهمة هندسية وتعليمية تجمع بين: (1) تطوير منصة ويب تفاعلية لمبادرة 'اتحاد بشبابها' باستخدام Next.js وFirebase، و(2) إعداد وتدريس منهج بايثون شامل للشباب ضمن كورس حزب مستقبل وطن يغطي الأساسيات وهياكل البيانات والبرمجة كائنية التوجه.",
    demoLink: "https://etihad-bshababha.web.app/",
    demoLabel: "Live Platform ↗",
    repoLink: "https://github.com/IbrahimElshishtawy/project_pyrthon",
    repoLabel: "Python Curriculum Repo ↗",
    accentColor: "#10b981",
    mockupType: "browser",
    image: "assets/assets/etihad_platform.jpg",
    gallery: [
      {
        src: "assets/assets/etihad_platform.jpg",
        title: "Youth Interactive Learning Portal & Python Hub",
        titleAr: "بوابة اتحاد بشبابها ومبادرة تدريب بايثون",
        desc: "Interactive educational portal with Next.js, Firebase Auth, and structured Python CS curriculum roadmap.",
        descAr: "منصة ويب تفاعلية مبنية بـ Next.js وFirebase لخدمة تدريب الشباب وتدريس مناهج بايثون.",
        aspect: "desktop"
      }
    ],
    urlPreview: "etihad-bshababha.web.app",
    contributionDetails: [
      "Engineered the educational web application frontend utilizing Next.js and Tailwind CSS.",
      "Integrated Firebase Authentication and Cloud Firestore for user accounts, progress tracking, and lecture notes.",
      "Formulated and taught a comprehensive Python curriculum in the Mostaqbal Watan training course.",
      "Created structured coding exercises covering syntax, logic, algorithms, and Object-Oriented Programming (OOP).",
      "Maintained the open Python curriculum repository providing students with code samples and reference projects."
    ],
    features: [
      {
        icon: "fa-graduation-cap",
        title: "Python Training Curriculum",
        desc: "Step-by-step instructional syllabus covering Python basics, data structures, algorithms, and OOP fundamentals."
      },
      {
        icon: "fa-chalkboard-user",
        title: "Interactive Student Portal",
        desc: "Web portal providing youth participants with organized learning resources, lecture slides, and assignment roadmaps."
      },
      {
        icon: "fa-fire",
        title: "Firebase Cloud Backend",
        desc: "Real-time user progress storage with Cloud Firestore and secure authentication for registered students."
      },
      {
        icon: "fa-code",
        title: "Practical Code Repository",
        desc: "Hands-on Python repository containing exercises, solution files, and algorithmic challenge implementations."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — CURRICULUM DESIGN",
        title: "Python Instructional Material",
        desc: "Authored lessons, code snippets, and structured problem sets designed to build solid programming fundamentals."
      },
      {
        phase: "STAGE 02 — WEB PLATFORM",
        title: "Next.js & Firebase Build",
        desc: "Built and deployed the student-facing portal with responsive design and streamlined lecture discovery."
      },
      {
        phase: "STAGE 03 — INSTRUCTION & DELIVERY",
        title: "Course Teaching & Mentorship",
        desc: "Delivered Python lectures, mentored students through coding assignments, and conducted code review sessions."
      }
    ]
  },

  pro_setup_platform: {
    id: "pro_setup_platform",
    title: "Pro Setup Platform",
    titleAr: "منصة تجهيز المكاتب الذكية — Pro Setup",
    type: "web",
    categoryFilter: "web",
    projectClass: "Interactive Web Platform",
    client: "Personal Web Platform",
    clientAr: "منصة ويب تفاعلية",
    role: "Frontend Architecture & Interactive Layout Design",
    roleAr: "معمارية وتصميم الواجهة التفاعلية",
    statusBadge: "INTERACTIVE WEB · LIVE DEPLOYMENT",
    statusBadgeColor: "amber",
    verifiedTech: ["Next.js", "React", "Tailwind CSS", "Firebase Hosting", "Interactive UI"],
    summary: "An interactive website focused on presenting and configuring developer workspaces, desk ergonomics, and creator setups.",
    description: "موقع تفاعلي حديث يهدف إلى استعراض وتنسيق مساحات عمل المطورين وبيئات المكاتب الاحترافية، مع التركيز على التصميم المتجاوب وتجربة المستخدم التفاعلية.",
    demoLink: "https://pro-setup-platform.web.app/",
    demoLabel: "Live Platform ↗",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#f59e0b",
    mockupType: "browser",
    image: "assets/assets/pro_setup.jpg",
    gallery: [
      {
        src: "assets/assets/pro_setup.jpg",
        title: "Workstation Configurator & Ergonomics Showcase",
        titleAr: "منصة تنسيق مساحات عمل المطورين وبيئات المكاتب",
        desc: "Modern workstation builder with interactive hardware selectors, ergonomic tips, and dark UI styling.",
        descAr: "منصة تفاعلية لاختيار وتنسيق مكاتب المطورين وملحقات العمل المريحة بتصميم داكن متجاوب.",
        aspect: "desktop"
      }
    ],
    urlPreview: "pro-setup-platform.web.app",
    contributionDetails: [
      "Engineered an interactive workspace customizer allowing visitors to preview desks, monitors, and accessories.",
      "Designed a sleek, dark-themed visual layout showcasing ergonomic hardware and workspace setups.",
      "Built modular React components with smooth hover interactions and responsive layouts.",
      "Optimized client asset loading and responsive breakpoints for mobile and desktop screens."
    ],
    features: [
      {
        icon: "fa-sliders",
        title: "Interactive Workspace Configurator",
        desc: "Interactive selector allowing users to browse monitor layouts, desk dimensions, and peripheral arrangements."
      },
      {
        icon: "fa-desktop",
        title: "Visual Product Presentation",
        desc: "Rich visual showcases highlighting ergonomic monitors, mechanical keyboards, desk mats, and lighting setups."
      },
      {
        icon: "fa-mobile-screen",
        title: "Responsive Interface Design",
        desc: "Carefully designed responsive grid adapting smoothly between mobile devices, tablets, and wide monitors."
      },
      {
        icon: "fa-wand-magic-sparkles",
        title: "Clean Modern Aesthetics",
        desc: "High-contrast dark mode aesthetic with purposeful borders, subtle lighting, and fast load performance."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — UX & ERGONOMICS",
        title: "Workspace Layout Research",
        desc: "Curated modern developer workstation setups focusing on ergonomic health, monitor positioning, and clean cable management."
      },
      {
        phase: "STAGE 02 — COMPONENT BUILD",
        title: "Interactive UI & State",
        desc: "Built dynamic selection interfaces using Next.js and Tailwind CSS with fast client hydration."
      }
    ]
  },

  aqar: {
    id: "aqar",
    title: "Aqar (عقار)",
    titleAr: "تطبيق عقار — Aqar Real Estate",
    type: "mobile",
    categoryFilter: "mobile",
    projectClass: "Mobile Application",
    client: "Personal Mobile Project",
    clientAr: "تطبيق موبايل شخصي",
    role: "Flutter Mobile Developer & Architect",
    roleAr: "مطور ومعماري تطبيق الموبايل",
    statusBadge: "MOBILE APP · OFFLINE-FIRST SQL",
    statusBadgeColor: "purple",
    verifiedTech: ["Flutter", "Dart", "SqFlite", "Clean Architecture", "GetX", "Fl_Chart"],
    summary: "A real estate management mobile application engineered with local-first offline synchronization, Clean Architecture, and contract analytics.",
    description: "تطبيق موبايل لإدارة الوحدات العقارية والعقود مع ميزة العمل بدون إنترنت بتزامن محلي كامل عبر SqFlite وهيكلية برمجية نظيفة (Clean Architecture).",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#8b5cf6",
    mockupType: "mobile",
    image: "assets/assets/aqar_dashboard.png",
    gallery: [
      {
        src: "assets/assets/aqar_dashboard.png",
        title: "Real Estate Analytics & Sales Dashboard",
        titleAr: "لوحة تحكم العقارات وإحصائيات المبيعات",
        desc: "Flutter mobile dashboard rendering key financial metrics, contract statuses, and Fl_Chart graphs.",
        descAr: "شاشة رئيسية تفاعلية تعرض مؤشرات الأداء المالي والعقود ومخططات بيانية دقيقة.",
        aspect: "mobile"
      },
      {
        src: "assets/assets/aqar_activities.png",
        title: "Transactions & Client Activities Pipeline",
        titleAr: "سجل المعاملات والأنشطة العقارية اليومية",
        desc: "Detailed timeline tracking recent sales interactions, payments, and client communications offline.",
        descAr: "جدول زمني يوثق كافة التحصيلات والتعاملات مع العملاء مع دعم الحفظ المحلي أوفلاين.",
        aspect: "mobile"
      },
      {
        src: "assets/assets/Aqar.jpg",
        title: "Property Units Directory & Contract Management",
        titleAr: "إدارة الوحدات العقارية والعقود المبرمة",
        desc: "Unit inventory management, contract lifecycle status, and offline SQLite synchronized database.",
        descAr: "إدارة تفصيلية لبيانات الوحدات وتفاصيل العقود مع قاعدة بيانات Sqflite سريعة.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Implemented layered Clean Architecture separating Domain, Data, and Presentation layers.",
      "Engineered local SQLite database with indexed foreign keys for sub-5ms queries and offline reliability.",
      "Created interactive analytics dashboards using Fl_Chart for tracking contract statuses and revenue summaries."
    ],
    features: [
      {
        icon: "fa-database",
        title: "Offline-First SQLite Engine",
        desc: "Complete local database persistence allowing full contract management without continuous internet connectivity."
      },
      {
        icon: "fa-chart-pie",
        title: "Interactive Financial Analytics",
        desc: "High-density data visualization charts rendering property sales distributions and collections."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — ARCHITECTURE",
        title: "Clean Architecture Setup",
        desc: "Separated domain models, repository interfaces, and presentation controllers using GetX."
      }
    ]
  },

  bostan: {
    id: "bostan",
    title: "Bostan (بُستان)",
    titleAr: "تطبيق بُستان — Bostan",
    type: "mobile",
    categoryFilter: "mobile",
    projectClass: "Mobile Application",
    client: "Personal Mobile Project",
    clientAr: "تطبيق موبايل شخصي",
    role: "Flutter Mobile Developer",
    roleAr: "مطور تطبيق الموبايل",
    statusBadge: "MOBILE APP · AUDIO & LOCAL STORAGE",
    statusBadgeColor: "cyan",
    verifiedTech: ["Flutter", "Dart", "SqFlite", "Hive DB", "Audio Player", "GetX"],
    summary: "A mobile application featuring custom vector glyph scaling, streak analytics, and verse-by-verse audio synchronization.",
    description: "تطبيق موبايل متطور يعتمد على الرسم الرقمي الدقيق، مع ميزة المزامنة الصوتية آية بآية، وتخزين البيانات محلياً عبر Hive وSqFlite.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#06b6d4",
    mockupType: "mobile",
    image: "assets/assets/bostan_stats.png",
    gallery: [
      {
        src: "assets/assets/bostan_stats.png",
        title: "Reading Streaks & Habit Analytics",
        titleAr: "إحصائيات القراءة والورد اليومي",
        desc: "Visual habit tracking dashboard with daily Quranic streaks, pages completed, and progress curves.",
        descAr: "لوحة تفاعلية تتبع إنجاز القراءة اليومي وعدد الصفحات المقروءة ومعدلات الاستمرار.",
        aspect: "mobile"
      },
      {
        src: "assets/assets/bostan_settings.png",
        title: "Reciters Audio & Typography Settings",
        titleAr: "إعدادات القراء ومزامنة التلاوة والخطوط",
        desc: "Audio playback preferences, reciter selection, offline audio caching, and Uthmani font scaling.",
        descAr: "تخصيص مشغل الصوت واختيار القراء والتحكم في حجم الخط القرآني بدون تشويه الخطوط.",
        aspect: "mobile"
      },
      {
        src: "assets/assets/bostan.jpg",
        title: "Holy Quran Reading & Verse Highlighting",
        titleAr: "واجهة المصحف الشريف والتصفح السلس",
        desc: "High-precision vector typography rendering with synchronized verse highlighting and audio cues.",
        descAr: "تصفح انسيابي للمصحف الشريف بدقة متناهية مع تمييز الآيات بالتزامن مع التلاوة الصوتية.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Built custom typography rendering engine preventing glyph clipping at high zoom levels.",
      "Integrated audio playback services synchronized with interactive text highlights.",
      "Utilized Hive DB for high-speed local preferences and reading bookmark management."
    ],
    features: [
      {
        icon: "fa-music",
        title: "Synchronized Audio Playback",
        desc: "Background audio player synchronized with visual text highlights for an engaging experience."
      },
      {
        icon: "fa-box-open",
        title: "High-Speed Hive Storage",
        desc: "Sub-millisecond key-value reads for user streaks, bookmarks, and display preferences."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — AUDIO & TEXT",
        title: "Timing & Audio Pipeline",
        desc: "Engineered audio playback controllers with reactive text progress highlighting in Flutter."
      }
    ]
  },

  animalconnect: {
    id: "animalconnect",
    title: "Animal Connect",
    titleAr: "تطبيق Animal Connect",
    type: "mobile",
    categoryFilter: "mobile",
    projectClass: "Mobile Application",
    client: "Collaborative Project",
    clientAr: "مشروع تطبيقي",
    role: "Flutter Mobile & Backend Integration",
    roleAr: "تطوير واجهات الموبايل والربط مع الخادم",
    statusBadge: "MOBILE APP · SOCKET.IO & GEO",
    statusBadgeColor: "emerald",
    verifiedTech: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Geohash"],
    summary: "A pet adoption and community application featuring geolocation discovery and real-time chat via WebSockets.",
    description: "تطبيق موبايل لربط مربي الحيوانات الأليفة وخدمات التبني مع البحث الجغرافي عبر الـ Geohash ومحادثات فورية باستخدام Socket.io.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#10b981",
    mockupType: "mobile",
    image: "assets/assets/animal_connect_home.png",
    gallery: [
      {
        src: "assets/assets/animal_connect_home.png",
        title: "Marketplace Feed & Animal Discovery",
        titleAr: "الواجهة الرئيسية واستكشاف الحيوانات والتبني",
        desc: "Curated animal feed featuring categorized cards, vaccination status tags, and direct inquiry links.",
        descAr: "بطاقات مصنفة للحيوانات المتاحة مع بيان الحالة الصحية والتطعيمات وأزرار التواصل السريع.",
        aspect: "mobile"
      },
      {
        src: "assets/assets/animal_connect_list.png",
        title: "Geolocation Proximity Search & Filters",
        titleAr: "البحث الجغرافي والفلترة حسب المسافة",
        desc: "Location-aware search utilizing Geohash indices to discover pets and veterinary clinics closest to you.",
        descAr: "تصفية ذكية بحسب النطاق الجغرافي باستخدام إحداثيات Geohash للعثور على أقرب الحيوانات والعيادات.",
        aspect: "mobile"
      },
      {
        src: "assets/assets/animal.jpg",
        title: "Adoption Profile & Live Chat Interface",
        titleAr: "ملف التبني التعريفي وتفاصيل التواصل",
        desc: "Comprehensive profile with pet history, image gallery, and instant Socket.io chat with owners.",
        descAr: "تفاصيل السلالة والاحتياجات مع إمكانية بدء محادثة فورية مشفرة باستخدام Socket.io.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Engineered mobile interface in Flutter with custom search filters and category tags.",
      "Implemented Socket.io client bindings for real-time bi-directional messaging.",
      "Integrated location-based listing queries utilizing Geohash indices."
    ],
    features: [
      {
        icon: "fa-map-pin",
        title: "Proximity Location Filtering",
        desc: "Fast geospatial distance calculation providing users with nearby pet listings."
      },
      {
        icon: "fa-comments",
        title: "Real-Time Socket Messaging",
        desc: "Instant chat pipeline with typing indicators, message delivery states, and push notifications."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — REALTIME",
        title: "Socket.io Communication",
        desc: "Connected the Flutter mobile frontend to Node.js backend sockets for immediate message transmission."
      }
    ]
  },

  tolabapp: {
    id: "tolabapp",
    title: "Tola'b (طُلاَّب)",
    titleAr: "تطبيق طُلاَّب — Tola'b App",
    type: "mobile",
    categoryFilter: "mobile",
    projectClass: "Mobile Application",
    client: "Personal Mobile Project",
    clientAr: "تطبيق موبايل للطلاب",
    role: "Flutter Mobile Developer",
    roleAr: "مطور تطبيق الموبايل",
    statusBadge: "MOBILE APP · STUDENT TECH",
    statusBadgeColor: "amber",
    verifiedTech: ["Flutter", "Hive DB", "Local Notifications", "PDF Engine"],
    summary: "A student-centric productivity mobile application organizing university courses, PDF materials, and academic schedules.",
    description: "تطبيق إنتاجية أكاديمي لطلاب الجامعات يساعد في تنظيم المحاضرات، قراءة ملفات الـ PDF الدراسية، وضبط التنبيهات الذكية للمهام.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#f59e0b",
    mockupType: "mobile",
    image: "assets/assets/tolab_schedule.png",
    gallery: [
      {
        src: "assets/assets/tolab_schedule.png",
        title: "Smart Academic Schedule & Class Timetable",
        titleAr: "الجدول الدراسي والمنبهات الذكية للمحاضرات",
        desc: "Weekly schedule view with time-sensitive color codes and automatic pre-lecture local notifications.",
        descAr: "جدول دراسي أسبوعي تفاعلي يرسل تنبيهات محلية تلقائية للطلاب قبل موعد كل محاضرة.",
        aspect: "mobile"
      },
      {
        src: "assets/assets/Tolab_1.png",
        title: "Student Academic Dashboard & Home View",
        titleAr: "لوحة تحكم الطالب والواجهة الرئيسية الشاملة",
        desc: "Centralized overview of current semester progress, daily upcoming lectures, and urgent tasks.",
        descAr: "نظرة عامة على المقررات والمهام المستعجلة ومحاضرات اليوم مع إمكانية الوصول السريع.",
        aspect: "desktop"
      },
      {
        src: "assets/assets/Tolab_2.png",
        title: "Lecture Modules & Task Tracking",
        titleAr: "تفاصيل المقررات والمحاضرات والواجبات",
        desc: "Subject syllabus view organizing lecture files, recorded voice notes, and assignment checkpoints.",
        descAr: "شاشة استعراض المواد الدراسية وربط كل مادة بملفاتها وملاحظاتها وتاريخ تسليم التكاليف.",
        aspect: "desktop"
      },
      {
        src: "assets/assets/Tolab_3.png",
        title: "Academic Calendar & Examination Alarms",
        titleAr: "التقويم الجامعي ومواعيد الاختبارات الدورية",
        desc: "Integrated calendar synchronizing midterm, final, and quiz deadlines with offline Hive DB caching.",
        descAr: "تقويم دراسي متزامن مع مواعيد الامتحانات وأنشطة الفصل الدراسي مع حفظ دائم في قاعدة Hive.",
        aspect: "desktop"
      },
      {
        src: "assets/assets/tolab_courses.png",
        title: "Course Catalog & Built-in PDF Reader",
        titleAr: "دليل المقررات وقارئ مستندات PDF المدمج",
        desc: "Built-in PDF document viewing engine supporting inverted night reading and persistent bookmarks.",
        descAr: "قارئ PDF مدمج يتيح قراءة المذكرات والملازم الجامعية مع دعم الوضع الليلي وحفظ العلامات.",
        aspect: "mobile"
      }
    ],
    contributionDetails: [
      "Integrated lightweight PDF reading engine supporting in-app lecture viewing and page bookmarks.",
      "Implemented weekly timetable calendar with recurring local schedule notifications.",
      "Persisted course files, assignment statuses, and notes locally using Hive database."
    ],
    features: [
      {
        icon: "fa-file-pdf",
        title: "Integrated PDF Reader",
        desc: "In-app document viewer with smooth scrolling, dark-mode inverted rendering, and bookmarking."
      },
      {
        icon: "fa-calendar-check",
        title: "Academic Timetable Engine",
        desc: "Organized schedule manager triggering local alarms before active lectures and assignment deadlines."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — OFFLINE HUB",
        title: "Hive Database Caching",
        desc: "Ensured all lecture metadata and timetable data load instantly offline with sub-second startup times."
      }
    ]
  },

  eduassess: {
    id: "eduassess",
    title: "EduAssess Pro",
    titleAr: "نموذج EduAssess Pro",
    type: "concept",
    categoryFilter: "education",
    projectClass: "Concept Prototype",
    client: "Conceptual Project",
    clientAr: "نموذج أولي تجريبي",
    role: "Mobile Architecture & UI Concept",
    roleAr: "تصميم ومعمارية النموذج التجريبي",
    statusBadge: "CONCEPT PROTOTYPE · EDTECH",
    statusBadgeColor: "purple",
    verifiedTech: ["Flutter", "Dart", "Clean Architecture", "Local Persistence"],
    summary: "An electronic examination and student assessment system prototype designed for offline test delivery and automated evaluation.",
    description: "نموذج تجريبي (Concept Prototype) لمنصة وتطبيق امتحانات ذكي يهدف لدعم إجراء الاختبارات بدون انترنت وتصحيحها آلياً.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#8b5cf6",
    mockupType: "mobile",
    image: "assets/assets/Edu Assess.jpg",
    gallery: [
      {
        src: "assets/assets/Edu Assess.jpg",
        title: "Electronic Examination & Automated Evaluation System",
        titleAr: "منظومة الامتحانات الإلكترونية والتقييم الآلي",
        desc: "Distraction-free mobile exam interface with offline question caching and instant score breakdowns.",
        descAr: "واجهة اختبارات ذكية تدعم خوض الامتحانات بدون إنترنت مع تصحيح فوري وحساب الدرجات.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Designed the assessment workflow concept including timed question timers and multi-choice validation.",
      "Architected an offline test-taking model caching responses locally before synchronizing upon reconnection.",
      "Built high-contrast examination UI designed to minimize distractions and test anxiety."
    ],
    features: [
      {
        icon: "fa-clipboard-check",
        title: "Automated Evaluation Model",
        desc: "Prototype logic calculating test scores instantly with category breakdowns upon submission."
      },
      {
        icon: "fa-shield-halved",
        title: "Offline Assessment Pipeline",
        desc: "Concept architecture storing encrypted test questions and student inputs locally."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — PROTOTYPE",
        title: "UI & State Proof of Concept",
        desc: "Explored UI architecture and timer synchronization for reliable mobile exam interfaces."
      }
    ]
  },

  quickbit: {
    id: "quickbit",
    title: "QuickBit Wallet",
    titleAr: "نموذج QuickBit Wallet",
    type: "concept",
    categoryFilter: "mobile",
    projectClass: "Concept Prototype",
    client: "Conceptual Project",
    clientAr: "نموذج أولي تجريبي",
    role: "Mobile Architecture & UI Concept",
    roleAr: "تصميم ومعمارية النموذج التجريبي",
    statusBadge: "CONCEPT PROTOTYPE · FINTECH UI",
    statusBadgeColor: "cyan",
    verifiedTech: ["Flutter", "WebSockets", "Fl_Chart", "BLoC"],
    summary: "A digital asset and crypto portfolio tracker concept prototype featuring live streaming price tickers and candlestick charts.",
    description: "نموذج أولي تجريبي (Concept Prototype) لمحفظة رقمية وتتبع فوري لأسعار الأصول الرقمية مع رسوم بيانية وتنبيهات أسعار.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#06b6d4",
    mockupType: "mobile",
    image: "assets/assets/Quick Bit.jpg",
    gallery: [
      {
        src: "assets/assets/Quick Bit.jpg",
        title: "Crypto Portfolio Tracker & Streaming Tickers",
        titleAr: "محفظة العملات الرقمية وتتبع الأسعار اللحظية",
        desc: "Real-time market candlestick charting with Fl_Chart and smooth BLoC state updates at 60 FPS.",
        descAr: "رسوم بيانية حية للشموع اليابانية وتحديثات فورية لأسعار الأصول عبر WebSockets مع أداء عالي.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Built fluid financial candlestick and line chart widgets powered by Fl_Chart.",
      "Structured BLoC state management to handle high-frequency price ticker updates at 60 FPS.",
      "Designed dark fintech visual aesthetics featuring restrained cyan and emerald accents."
    ],
    features: [
      {
        icon: "fa-chart-line",
        title: "Streaming Price Tickers",
        desc: "High-frequency ticker updates reflecting market fluctuations with smooth animated numerical transitions."
      },
      {
        icon: "fa-wallet",
        title: "Portfolio Asset Visualization",
        desc: "Clean card layouts summarizing holdings, daily percentage changes, and price alerts."
      }
    ],
    journey: [
      {
        phase: "STAGE 01 — VISUAL PROTOTYPE",
        title: "Chart & Ticker Engineering",
        desc: "Prototyped financial chart components in Flutter with optimized frame rates for fast data feeds."
      }
    ]
  },

  umum: {
    id: "umum",
    title: "UmUm (عُموم)",
    titleAr: "عُموم — UmUm Community",
    type: "mobile",
    categoryFilter: "mobile",
    projectClass: "Mobile Application",
    client: "Community Platform",
    clientAr: "تطبيق مجتمعي",
    role: "Flutter Mobile Developer",
    roleAr: "مطور تطبيقات فلاتر",
    statusBadge: "MOBILE APP · SOCIAL COMMUNITY",
    statusBadgeColor: "purple",
    verifiedTech: ["Flutter", "Firebase", "Cloud Functions", "GetX"],
    summary: "A community discussions and polling platform connecting youth and users around shared cultural questions and ideas.",
    description: "شبكة تواصل مجتمعية للنقاشات الهادفة واستطلاعات الرأي التفاعلية بين المستخدمين مع تصويت لحظي.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#ec4899",
    mockupType: "mobile",
    image: "assets/assets/umum.jpg",
    gallery: [
      {
        src: "assets/assets/umum.jpg",
        title: "Community Dialogues & Real-Time Polling Cards",
        titleAr: "منصة الحوارات المجتمعية واستطلاعات الرأي التفاعلية",
        desc: "Interactive polling cards recalculating percentages live with Firebase and threaded replies.",
        descAr: "بطاقات استطلاع رأي تفاعلية تعيد احتساب نسب التصويت لحظياً مع نقاشات مجتمعية هادفة.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Designed and implemented clean, responsive social feed cards in Flutter.",
      "Integrated real-time voting widgets with animated percentage updates via Firebase.",
      "Engineered threaded dialogue components with instant state updates using GetX."
    ],
    features: [
      {
        icon: "fa-poll",
        title: "Real-Time Polling Cards",
        desc: "Interactive voting components recalculating community percentages dynamically without reloading."
      },
      {
        icon: "fa-comments",
        title: "Threaded Community Dialogues",
        desc: "Structured replies with smooth animations and reactive notifications."
      }
    ],
    journey: [
      {
        phase: "PHASE 01 — FEED ARCHITECTURE",
        title: "Optimized List Rendering",
        desc: "Implemented memory-efficient list views and cached image loading for smooth 60fps scrolling."
      }
    ]
  },

  writle: {
    id: "writle",
    title: "Writle (رايتل)",
    titleAr: "رايتل — Writle Editor",
    type: "mobile",
    categoryFilter: "mobile",
    projectClass: "Mobile Application",
    client: "Productivity App",
    clientAr: "تطبيق إنتاجية وكتابة",
    role: "Flutter Mobile Developer",
    roleAr: "مطور تطبيقات فلاتر",
    statusBadge: "MOBILE APP · MINDFUL WRITING",
    statusBadgeColor: "amber",
    verifiedTech: ["Flutter", "Hive DB", "Markdown Engine", "Audio Player"],
    summary: "A minimalist distraction-free Markdown editor and digital journal featuring ambient soundscapes and encrypted offline notes.",
    description: "محرر نصوص ومفكرة ماركداون مشفرة ومصممة للكتابة الإبداعية والتركيز الذهني مع ميزات التخزين المحلي بدون إنترنت.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#f59e0b",
    mockupType: "mobile",
    image: "assets/assets/writle.jpg",
    gallery: [
      {
        src: "assets/assets/writle.jpg",
        title: "Minimalist Encrypted Markdown Journal & Soundscapes",
        titleAr: "مفكرة الماركداون المشفرة ببيئة هادئة ومؤثرات صوتية",
        desc: "Private local vault with AES encryption, dual preview Markdown, and ambient focus soundscapes.",
        descAr: "محرر نصوص مشفر محلياً يوفر أجواء صوتية هادئة للتركيز والكتابة بدون أي تشتيت.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Implemented a custom real-time Markdown syntax parser and preview renderer in Flutter.",
      "Integrated local encrypted storage using Hive DB for zero-latency, private offline note persistence.",
      "Built background ambient audio player widgets for distraction-free focus modes."
    ],
    features: [
      {
        icon: "fa-feather",
        title: "Live Markdown Rendering",
        desc: "Dual edit-and-preview modes supporting headers, bullet lists, code snippets, and blockquotes."
      },
      {
        icon: "fa-lock",
        title: "Encrypted Offline Vault",
        desc: "Fast on-device key encryption ensuring user notes remain private and stored locally without external servers."
      }
    ],
    journey: [
      {
        phase: "PHASE 01 — CORE ENGINE",
        title: "Fast Markdown Parsing",
        desc: "Engineered a low-latency text editing pipeline handling large documents smoothly."
      }
    ]
  },

  factory_mgmt: {
    id: "factory_mgmt",
    title: "Factory Management System",
    titleAr: "نظام إدارة وتشغيل المصانع",
    type: "systems",
    categoryFilter: "systems",
    projectClass: "Industrial Software",
    client: "Manufacturing Operations",
    clientAr: "إدارة العمليات الصناعية",
    role: "Full-Stack & Systems Developer",
    roleAr: "تطوير الواجهة والنظام",
    statusBadge: "SYSTEMS APP · INDUSTRIAL ERP",
    statusBadgeColor: "emerald",
    verifiedTech: ["Flutter", "Node.js", "REST APIs", "SQLite"],
    summary: "An industrial operations monitoring and inventory management system for tracking production lines, machine shifts, and supply batches.",
    description: "نظام متكامل لمتابعة خطوط الإنتاج الصناعية، المخازن، وإدارة دورات تشغيل الآلات وحساب المواد الخام بدقة.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#10b981",
    mockupType: "desktop",
    image: "assets/assets/factorymanagement.jpg",
    gallery: [
      {
        src: "assets/assets/factorymanagement.jpg",
        title: "Industrial Production Lines & Shifts Monitoring",
        titleAr: "نظام إدارة ومتابعة خطوط الإنتاج والورديات بالمصانع",
        desc: "Industrial monitoring system tracking manufacturing work orders, machine shifts, and raw materials.",
        descAr: "منظومة لمراقبة خطوط الإنتاج بالمصانع وحساب مخزون المواد الخام وتوزيع ورديات العمل.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Engineered production stage tracking dashboards with real-time operational status indicators.",
      "Designed local-first database caching with SQLite ensuring uninterrupted factory-floor operation.",
      "Implemented raw material batch tracking and supply alerts with automated low-stock triggers."
    ],
    features: [
      {
        icon: "fa-industry",
        title: "Production Line Monitoring",
        desc: "Visual tracking of work orders from raw material ingestion through final packaging and inspection."
      },
      {
        icon: "fa-boxes",
        title: "Inventory & Batch Accounting",
        desc: "Automated calculation of raw materials used per shift and warehouse stock reconciliation."
      }
    ],
    journey: [
      {
        phase: "PHASE 01 — ARCHITECTURE",
        title: "Offline-Resilient Data Store",
        desc: "Configured offline syncing queues ensuring data integrity during factory network drops."
      }
    ]
  },

  lms_platform: {
    id: "lms_platform",
    title: "LMS Academic Portal",
    titleAr: "منصة التعليم الأكاديمي LMS",
    type: "education",
    categoryFilter: "education",
    projectClass: "EdTech Application",
    client: "Educational Institutions",
    clientAr: "منصة تعليمية متكاملة",
    role: "Mobile Application Developer",
    roleAr: "مطور تطبيقات الموبايل",
    statusBadge: "EDTECH · COURSE MANAGEMENT",
    statusBadgeColor: "purple",
    verifiedTech: ["Flutter", "Firebase", "Dart", "Provider"],
    summary: "An academic learning management application connecting students and instructors with course materials, assignments, and test schedules.",
    description: "منصة تعليمية متكاملة للطلاب والمحاضرين لمتابعة المحاضرات والواجبات والاختبارات الأكاديمية مع تنبيهات ذكية.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#8b5cf6",
    mockupType: "mobile",
    image: "assets/assets/lms.jpg",
    gallery: [
      {
        src: "assets/assets/lms.jpg",
        title: "Academic Learning Management & Course Portal",
        titleAr: "بوابة إدارة المقررات والتعليم الجامعي LMS",
        desc: "University academic platform managing lectures, video materials, quizzes, and grade announcements.",
        descAr: "بوابة إلكترونية متكاملة للطلاب والأساتذة لإدارة المحاضرات ورفع التكليفات ورصد الدرجات.",
        aspect: "mobile"
      }
    ],
    contributionDetails: [
      "Built dynamic course syllabus and lecture video streaming interfaces in Flutter.",
      "Integrated assignment submission modules supporting document uploads and grading status.",
      "Engineered real-time notifications for upcoming exam schedules and lecture deadlines."
    ],
    features: [
      {
        icon: "fa-graduation-cap",
        title: "Interactive Course Streams",
        desc: "Structured syllabi with lesson modules, attached resources, and completion progress bars."
      },
      {
        icon: "fa-tasks",
        title: "Assignments & Submission Portal",
        desc: "Secure upload workflows with automated deadline warnings and instructor grade feedback."
      }
    ],
    journey: [
      {
        phase: "PHASE 01 — STUDENT UX",
        title: "Intuitive Schedule Management",
        desc: "Designed unified weekly calendar views combining lectures, quizzes, and project deadlines."
      }
    ]
  },

  newsscope: {
    id: "newsscope",
    title: "NewsScope Global Feed",
    titleAr: "تطبيق الأخبار NewsScope",
    type: "mobile",
    categoryFilter: "mobile",
    projectClass: "Mobile Application",
    client: "Media & News Reader",
    clientAr: "تطبيق قراءة ومتابعة الأخبار",
    role: "Flutter Mobile Developer",
    roleAr: "مطور تطبيقات فلاتر",
    statusBadge: "MOBILE APP · NEWS AGGREGATOR",
    statusBadgeColor: "cyan",
    verifiedTech: ["Flutter", "REST APIs", "Hive DB", "BLoC"],
    summary: "A streamlined news aggregator application delivering categorized global news feeds with offline article caching and bookmarked vaults.",
    description: "تطبيق إخباري متطور لتصفح الأخبار العالمية المصنفة مع ميزات حفظ المقالات للقراءة بدون اتصال بالإنترنت.",
    demoLink: "https://github.com/IbrahimElshishtawy",
    demoLabel: "GitHub Profile",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#06b6d4",
    mockupType: "mobile",
    image: "assets/assets/newscope.jpg",
    gallery: [
      {
        src: "assets/assets/newscope.jpg",
        title: "NewsScope Categorized Feed & Offline Reader",
        titleAr: "تطبيق الأخبار العالمية والقراءة دون اتصال",
        desc: "Global news aggregator caching articles in Hive DB for smooth offline reading on the move.",
        descAr: "موجز إخباري عالمي مصنف يدعم حفظ المقالات في ذاكرة Hive لقراءتها في أي وقت دون إنترنت.",
        aspect: "desktop"
      }
    ],
    contributionDetails: [
      "Engineered multi-category news feed consumption using high-speed REST API endpoints.",
      "Implemented offline article storage with Hive DB caching full story contents and images.",
      "Built clean bookmarking and tag filtering interfaces with smooth BLoC state transitions."
    ],
    features: [
      {
        icon: "fa-newspaper",
        title: "Categorized News Feeds",
        desc: "Instant filtering across technology, science, business, and global headlines."
      },
      {
        icon: "fa-bookmark",
        title: "Offline Reading Vault",
        desc: "Save articles to device storage with formatted typography for reading on the go."
      }
    ],
    journey: [
      {
        phase: "PHASE 01 — NETWORK CACHE",
        title: "Resilient Offline Sync",
        desc: "Structured caching layers that seamlessly fall back to local disk when disconnected."
      }
    ]
  }
};

/* Export for Node / CommonJS environments if applicable */

/* ── 3. AGGREGATED ALL SCREENSHOTS DATASET (FOR UNIVERSAL GALLERY) ── */
const ALL_PROJECT_SCREENSHOTS = [];
Object.values(PROJECTS_DATA).forEach(project => {
  if (project.gallery && Array.isArray(project.gallery)) {
    project.gallery.forEach((item, index) => {
      ALL_PROJECT_SCREENSHOTS.push({
        id: project.id + '_' + index,
        projectId: project.id,
        projectTitle: project.title,
        projectTitleAr: project.titleAr,
        category: project.categoryFilter || project.type || 'mobile',
        projectClass: project.projectClass || '',
        accentColor: project.accentColor || '#06b6d4',
        src: item.src,
        title: item.title,
        titleAr: item.titleAr,
        desc: item.desc,
        descAr: item.descAr,
        aspect: item.aspect || 'desktop',
        index: index,
        totalInProject: project.gallery.length
      });
    });
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EXPERTISE_GROUPS, PROJECTS_DATA, ALL_PROJECT_SCREENSHOTS };
}
