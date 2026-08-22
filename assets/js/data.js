/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO DATA ENGINE
   Comprehensive Datasets for Projects & Tools (data.js)
   ============================================================ */

'use strict';

/* ── 1. TOOLS & TECHNOLOGIES DATASET ───────────────────────── */
const TOOLS_DATA = [
  // ── Mobile ──
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    categoryAr: "الموبايل",
    subtitle: "UI Framework",
    subtitleAr: "إطار عمل واجهات الموبايل",
    level: 95,
    icon: "flutter",
    color: "#02569B",
    neon: "#00E5FF",
    featured: true
  },
  {
    id: "dart",
    name: "Dart",
    category: "mobile",
    categoryAr: "الموبايل",
    subtitle: "Programming Language",
    subtitleAr: "لغة برمجة الأنظمة",
    level: 90,
    icon: "dart",
    color: "#0175C2",
    neon: "#29B6F6",
    featured: true
  },
  {
    id: "bloc-getx",
    name: "BLoC & GetX",
    category: "mobile",
    categoryAr: "الموبايل",
    subtitle: "State Management",
    subtitleAr: "إدارة حالة التطبيقات",
    level: 92,
    icon: "code",
    color: "#8b5cf6",
    neon: "#a78bfa",
    featured: false
  },

  // ── Frontend ──
  {
    id: "react",
    name: "React",
    category: "frontend",
    categoryAr: "الواجهة الأمامية",
    subtitle: "UI Library",
    subtitleAr: "مكتبة واجهات المستخدم",
    level: 85,
    icon: "react",
    color: "#61DAFB",
    neon: "#00D8FF",
    featured: true
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    categoryAr: "الواجهة الأمامية",
    subtitle: "React Framework",
    subtitleAr: "إطار عمل ريأكت متقدم",
    level: 85,
    icon: "nextjs",
    color: "#ffffff",
    neon: "#e2e8f0",
    featured: true
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    categoryAr: "الواجهة الأمامية",
    subtitle: "Language",
    subtitleAr: "لغة برمجية قوية النوع",
    level: 90,
    icon: "typescript",
    color: "#3178C6",
    neon: "#60A5FA",
    featured: true
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    categoryAr: "الواجهة الأمامية",
    subtitle: "Utility Styling",
    subtitleAr: "إطار تنسيق متقدم",
    level: 92,
    icon: "css",
    color: "#06B6D4",
    neon: "#22D3EE",
    featured: false
  },

  // ── Backend ──
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    categoryAr: "الواجهة الخلفية",
    subtitle: "Runtime Environment",
    subtitleAr: "بيئة تشغيل السيرفرات",
    level: 90,
    icon: "nodejs",
    color: "#339933",
    neon: "#4ade80",
    featured: true
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    categoryAr: "الواجهة الخلفية",
    subtitle: "Node.js Framework",
    subtitleAr: "إطار عمل خوادم منظم",
    level: 85,
    icon: "nestjs",
    color: "#E0234E",
    neon: "#FF4081",
    featured: true
  },
  {
    id: "fastify",
    name: "Fastify / Express",
    category: "backend",
    categoryAr: "الواجهة الخلفية",
    subtitle: "High Speed APIs",
    subtitleAr: "بناء واجهات برمجية سريعة",
    level: 88,
    icon: "bolt",
    color: "#000000",
    neon: "#38bdf8",
    featured: false
  },
  {
    id: "socketio",
    name: "Socket.io / WebRTC",
    category: "backend",
    categoryAr: "الواجهة الخلفية",
    subtitle: "Real-time Streams",
    subtitleAr: "بث واتصالات فورية",
    level: 85,
    icon: "network",
    color: "#010101",
    neon: "#06b6d4",
    featured: false
  },

  // ── Database ──
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    categoryAr: "قواعد البيانات",
    subtitle: "Relational DB",
    subtitleAr: "قواعد بيانات علائقية متقدمة",
    level: 80,
    icon: "postgresql",
    color: "#4169E1",
    neon: "#818CF8",
    featured: true
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "database",
    categoryAr: "قواعد البيانات",
    subtitle: "Backend Platform",
    subtitleAr: "منصة سحابية متكاملة",
    level: 85,
    icon: "firebase",
    color: "#FFA000",
    neon: "#FFCA28",
    featured: true
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    categoryAr: "قواعد البيانات",
    subtitle: "Document DB",
    subtitleAr: "قواعد بيانات مستندية",
    level: 82,
    icon: "mongodb",
    color: "#47A248",
    neon: "#4ade80",
    featured: false
  },
  {
    id: "redis",
    name: "Redis & Hive DB",
    category: "database",
    categoryAr: "قواعد البيانات",
    subtitle: "In-Memory Cache",
    subtitleAr: "تخزين مؤقت عالي السرعة",
    level: 85,
    icon: "database",
    color: "#DC382D",
    neon: "#f87171",
    featured: false
  },

  // ── Development Tools ──
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "devtools",
    categoryAr: "أدوات التطوير",
    subtitle: "Version Control",
    subtitleAr: "إدارة ومزامنة الأكواد",
    level: 95,
    icon: "github",
    color: "#ffffff",
    neon: "#c084fc",
    featured: true
  },
  {
    id: "postman",
    name: "Postman & Swagger",
    category: "devtools",
    categoryAr: "أدوات التطوير",
    subtitle: "API Testing & Docs",
    subtitleAr: "فحص وتوثيق الـ APIs",
    level: 90,
    icon: "paper-plane",
    color: "#FF6C37",
    neon: "#fb923c",
    featured: false
  },
  {
    id: "figma",
    name: "Figma to Code",
    category: "devtools",
    categoryAr: "أدوات التطوير",
    subtitle: "Pixel Precision",
    subtitleAr: "تحويل التصاميم لكود دقيق",
    level: 92,
    icon: "figma",
    color: "#F24E1E",
    neon: "#f472b6",
    featured: false
  },

  // ── DevOps ──
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    categoryAr: "DevOps",
    subtitle: "Containerization",
    subtitleAr: "حزم ونشر التطبيقات",
    level: 78,
    icon: "docker",
    color: "#2496ED",
    neon: "#38bdf8",
    featured: false
  },
  {
    id: "cicd",
    name: "CI/CD & Actions",
    category: "devops",
    categoryAr: "DevOps",
    subtitle: "Automation Pipelines",
    subtitleAr: "أتمتة الفحص والنشر",
    level: 80,
    icon: "cogs",
    color: "#2088FF",
    neon: "#60a5fa",
    featured: false
  }
];

/* ── 2. FEATURED & COMPREHENSIVE PROJECTS DATASET ──────────── */
const PROJECTS_DATA = {
  naseeji: {
    id: "naseeji",
    title: "Naseeji (نسيجي)",
    titleAr: "نسيجي — Naseeji",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "B2B TEXTILE MARKETPLACE",
    subtitle: "A specialized B2B marketplace application seamlessly bridging raw textile suppliers, fabric mills, and garment manufacturers with real-time order matching, quotation engines, and inventory monitoring.",
    description: "منصة B2B تربط بين الموردين والمصانع في صناعة النسيج مع نظام طلبات فورية وفواتير.",
    tags: ["Flutter", "Dart", "Firebase", "GetX", "Cloud Functions"],
    image: "assets/assets/animal_connect_home.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#8b5cf6",
    features: [
      { icon: "fa-industry", title: "Supplier Hub", desc: "Dynamic wholesale fabric listings with custom weight, GSM, and blend filtering indices." },
      { icon: "fa-file-invoice-dollar", title: "Quotation Engine", desc: "Direct bidding and negotiation channels between fabric mills and garment factories." },
      { icon: "fa-shield-check", title: "Escrow Protocol", desc: "Verified payment milestones guaranteeing supply receipt before fund release." }
    ],
    journey: [
      { phase: "PHASE 01 — FLOWS", title: "Supply Chain Mapping", desc: "Structured trade nodes enabling wholesale orders and multi-currency quotes with low latency." },
      { phase: "PHASE 02 — REALTIME", title: "Live Order Pipeline", desc: "Real-time state updates and instant push notifications when orders transition between production and delivery." }
    ]
  },

  analytics_dashboard: {
    id: "analytics_dashboard",
    title: "Dashboard Analytics",
    titleAr: "Dashboard Analytics",
    type: "web",
    typeLabel: "Web App",
    typeLabelAr: "تطبيق ويب",
    category: "FINTECH & DATA ANALYTICS",
    subtitle: "A state-of-the-art SaaS analytics dashboard delivering interactive financial charts, revenue stream forecasting, and high-density performance KPI monitoring.",
    description: "لوحة تحكم تحليلية للبيانات مع رسوم بيانية تفاعلية وتقارير أداء فورية.",
    tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS", "REST API"],
    image: "assets/assets/aqar_dashboard.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#06b6d4",
    features: [
      { icon: "fa-chart-line", title: "Real-Time Telemetry", desc: "High-frequency streaming charts updating user transactions and system load dynamically." },
      { icon: "fa-layer-group", title: "Modular Bento Tiles", desc: "Customizable widget dashboard allowing users to rearrange and pin vital KPIs." },
      { icon: "fa-file-export", title: "Automated Reporting", desc: "One-click PDF/CSV export compiling weekly growth indices and operational bottlenecks." }
    ],
    journey: [
      { phase: "PHASE 01 — ARCHITECTURE", title: "Component Systems", desc: "Engineered scalable Next.js server components with optimistic UI updates and fast client hydration." }
    ]
  },

  ecommerce_store: {
    id: "ecommerce_store",
    title: "E-Commerce Store",
    titleAr: "E-Commerce Store",
    type: "web",
    typeLabel: "Web App",
    typeLabelAr: "تطبيق ويب",
    category: "FULL STACK COMMERCE",
    subtitle: "A modern ultra-fast digital commerce storefront with instant category filtering, secure Stripe checkout sessions, customer reviews, and automated warehouse dispatch sync.",
    description: "متجر إلكتروني متكامل مع نظام دفع إلكتروني وسلة مشتريات وتتبع شحنات.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    image: "assets/assets/newscope.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#10b981",
    features: [
      { icon: "fa-shopping-cart", title: "Dynamic Cart & Wishlist", desc: "Instant local caching with seamless guest-to-account migration on checkout." },
      { icon: "fa-credit-card", title: "Stripe Payment Vault", desc: "PCI-compliant checkout pipelines supporting cards, Apple Pay, and local gateways." }
    ],
    journey: [
      { phase: "PHASE 01 — PERFORMANCE", title: "Zero Layout Shift", desc: "Optimized product grid layouts and lazy image loading to achieve 98+ Lighthouse performance scores." }
    ]
  },

  chat_app: {
    id: "chat_app",
    title: "Chat Application",
    titleAr: "Chat Application",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "REAL-TIME COMMUNICATION",
    subtitle: "A feature-rich real-time messaging application supporting end-to-end encrypted chats, voice notes, media sharing, and low-latency peer-to-peer WebRTC video calls.",
    description: "تطبيق دردشة فورية مع دعم المجموعات والمكالمات المشفرة ومشاركة الوسائط.",
    tags: ["Flutter", "Firebase", "WebRTC", "Socket.io", "BLoC"],
    image: "assets/assets/umum.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#ec4899",
    features: [
      { icon: "fa-comment-dots", title: "Instant Messaging", desc: "Sub-50ms message delivery with typing indicators, delivery receipts, and reaction emojis." },
      { icon: "fa-video", title: "WebRTC Video Engine", desc: "Optimized adaptive bitrate video and crystal-clear audio streaming." }
    ],
    journey: [
      { phase: "PHASE 01 — WEBRTC", title: "Peer Handshaking", desc: "Engineered STUN/TURN signaling routines for seamless NAT traversal and stable mobile calls." }
    ]
  },

  aqar: {
    id: "aqar",
    title: "Aqar (عقار)",
    titleAr: "عقار — Aqar",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "REAL ESTATE · OFFLINE-FIRST",
    subtitle: "A futuristic real estate and construction management dashboard engineered with local-first offline synchronization. Enables active builders and investors to track unit sales and supply loads seamlessly.",
    description: "تطبيق إدارة مشاريع عقارية وعقود ومبيعات يعمل بدون إنترنت بتزامن محلي كامل.",
    tags: ["Flutter", "SqFlite", "Fl_Chart", "GetX", "Clean Architecture"],
    image: "assets/assets/aqar_activities.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#8b5cf6",
    features: [
      { icon: "fa-chart-pie", title: "Dynamic Sales Analytics", desc: "High-density charts compiling total contract values and pending collections." },
      { icon: "fa-cloud-upload-alt", title: "Offline-First Sync", desc: "Robust local cache auto-merging with remote servers on reconnect." }
    ],
    journey: [
      { phase: "PHASE 01 — DB", title: "Relational DB Modeling", desc: "Designed local SQL schema with indexed foreign keys for sub-3ms queries." }
    ]
  },

  bostan: {
    id: "bostan",
    title: "Bostan (بُستان)",
    titleAr: "بُستان — Bostan",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "SPIRITUAL TECH · AUDIO SYNC",
    subtitle: "A serene Quranic companion with optimized Arabic vector glyph scaling, Streak heatmaps, custom OLED dark themes, and verse-by-verse audio synchronization.",
    description: "تطبيق إسلامي متطور لقراءة القرآن ومتابعة العادات اليومية مع مزامنة صوتية.",
    tags: ["Flutter", "SqFlite", "Audio Player", "Hive", "GetX"],
    image: "assets/assets/bostan_stats.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#06b6d4",
    features: [
      { icon: "fa-book-open", title: "Arabic Glyphs Precision", desc: "Custom text span engine rendering complex Arabic Tashkeel at any zoom scale." },
      { icon: "fa-music", title: "Verse-Synced Audio Player", desc: "Verse-by-verse active audio sync with background playback service." }
    ],
    journey: [
      { phase: "PHASE 01 — TYPOGRAPHY", title: "Ligature Precision", desc: "Engineered text span logic to prevent ligature clipping and Tashkeel overlap." }
    ]
  },

  tolabapp: {
    id: "tolabapp",
    title: "Tola'b App (طُلاَّب)",
    titleAr: "طُلاَّب — Tola'b",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "PRODUCTIVITY · STUDENT TECH",
    subtitle: "A student-centric productivity hub centralizing academic lectures, attendance tracking, assignment deadlines, and lecture PDF files.",
    description: "تطبيق إنتاجية وتنظيم أكاديمي للطلاب الجامعيين مع قارئ PDF مدمج وتنبيهات ذكية.",
    tags: ["Flutter", "Hive DB", "Local Notifications", "PDF Engine"],
    image: "assets/assets/tolab_schedule.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#f59e0b",
    features: [
      { icon: "fa-calendar-alt", title: "Intelligent Weekly Planner", desc: "Dynamic calendars merging active lectures, homework, and exam timelines." },
      { icon: "fa-file-pdf", title: "Embedded PDF Engine", desc: "High-speed document parser with dark mode renders and interactive bookmarks." }
    ],
    journey: [
      { phase: "PHASE 01 — DB", title: "Hive Database Migration", desc: "Boosted app startup time and read/write execution by 400%." }
    ]
  },

  animalconnect: {
    id: "animalconnect",
    title: "Animal Connect",
    titleAr: "Animal Connect",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "MARKETPLACE · REAL-TIME",
    subtitle: "A premium pet adoption and wellness marketplace featuring geo-location listings, categorized care items, and Socket.io messaging.",
    description: "سوق إلكتروني متكامل للحيوانات الأليفة وخدمات الرعاية البيطرية مع محادثات حية.",
    tags: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Geohash"],
    image: "assets/assets/animal_connect_home.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#10b981",
    features: [
      { icon: "fa-map-marker-alt", title: "Geo-Location Proximity", desc: "High-speed maps querying nearby listings with relative distances." },
      { icon: "fa-paper-plane", title: "Socket.io Live Chats", desc: "Bi-directional real-time chat with active typing animations." }
    ],
    journey: [
      { phase: "PHASE 01 — GEOHASH", title: "Grid Queries", desc: "Converted 2D coordinates into fast string index queries in MongoDB." }
    ]
  }
};

/* Export for Node / CommonJS environments if applicable */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOOLS_DATA, PROJECTS_DATA };
}
