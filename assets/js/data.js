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
  {
    id: "php",
    name: "PHP & APIs",
    category: "backend",
    categoryAr: "الواجهة الخلفية",
    subtitle: "Server APIs & Services",
    subtitleAr: "خوادم وخدمات برمجية متطورة",
    level: 84,
    icon: "php",
    color: "#777BB4",
    neon: "#818cf8",
    featured: true
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    categoryAr: "الواجهة الخلفية",
    subtitle: "Data & Core Scripts",
    subtitleAr: "لغة البرمجة وتحليل البيانات",
    level: 88,
    icon: "python",
    color: "#3776AB",
    neon: "#38bdf8",
    featured: true
  },
  {
    id: "openwrt",
    name: "OpenWrt & Linux",
    category: "systems",
    categoryAr: "أنظمة وشبكات",
    subtitle: "Router OS & Firmware",
    subtitleAr: "أنظمة تشغيل الراوترات والشبكات",
    level: 90,
    icon: "network-wired",
    color: "#00558F",
    neon: "#00E5FF",
    featured: true
  },
  {
    id: "hardware-iot",
    name: "Hardware & IoT",
    category: "systems",
    categoryAr: "أنظمة وشبكات",
    subtitle: "Embedded Electronics",
    subtitleAr: "هاردوير ودوائر إلكترونية ذكية",
    level: 82,
    icon: "microchip",
    color: "#F59E0B",
    neon: "#FBBF24",
    featured: true
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
  gouna_lifestyle: {
    id: "gouna_lifestyle",
    title: "Gouna Lifestyle Platform",
    titleAr: "منصة الجونة لايف ستايل — Gouna Lifestyle",
    type: "web",
    typeLabel: "Enterprise Web Platform",
    typeLabelAr: "منصة ويب مؤسسية",
    client: "Cyber-Wise",
    clientAr: "شركة Cyper-Wise",
    category: "LUXURY REAL ESTATE · LIFESTYLE · CYBER-WISE",
    subtitle: "A premier luxury living and high-end real estate showcase platform engineered for El Gouna, Red Sea. Developed for Cyber-Wise using Next.js for lightning-fast SSR performance paired with scalable PHP backend APIs, featuring interactive property maps, curated luxury districts, and VIP concierge bookings.",
    description: "منصة رقمية فاخرة متكاملة لاستكشاف العقارات ونمط الحياة السياحي الراقي في مدينة الجونة بالبحر الأحمر. تم تنفيذها لصالح شركة Cyber-Wise باستخدام Next.js وواجهات خلفية قوية بلغة PHP.",
    tags: ["Next.js", "React", "PHP", "Tailwind CSS", "REST API", "SEO Engine", "Bilingual RTL/LTR"],
    image: "", // Will render cinematic browser frame
    demoLink: "https://gouna-lifestyle-platform-cbmy-3qqy66fpn-covantage-sr.vercel.app/ar",
    demoLabel: "Live Platform (معاينة المنصة الحية)",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#06b6d4",
    badge: "CLIENT: CYBER-WISE · LIVE PRODUCTION",
    mockupType: "browser",
    urlPreview: "gouna-lifestyle-platform-cbmy.vercel.app/ar",
    features: [
      { icon: "fa-gem", title: "Luxury Real Estate Engine", desc: "Dynamic villa & apartment directory with rich filtering, high-resolution media galleries, and neighborhood highlights." },
      { icon: "fa-bolt", title: "Next.js SSR & Sub-Second Loads", desc: "Optimized server-side rendering guaranteeing 95+ Core Web Vitals and top-tier search engine indexing." },
      { icon: "fa-server", title: "Resilient PHP Backend Services", desc: "Secure endpoints processing customer inquiries, booking queues, and real estate inventory synchronizations." },
      { icon: "fa-language", title: "Bilingual Arabic/English Experience", desc: "Flawless bidirectional RTL/LTR layout transitions, tailored typography, and localized content delivery." }
    ],
    journey: [
      { phase: "PHASE 01 — ENTERPRISE ARCHITECTURE", title: "Next.js & PHP API Decoupling", desc: "Architected a high-throughput headless frontend connecting seamlessly to PHP server microservices with caching." },
      { phase: "PHASE 02 — LUXURY UI/UX", title: "Cinematic Visual Polish", desc: "Created atmospheric glassmorphic interfaces, smooth layout transitions, and high-density property specs." },
      { phase: "PHASE 03 — GLOBAL LAUNCH", title: "Vercel Production Deployment", desc: "Configured global Edge CDN distribution, automated CI/CD builds, and full mobile responsiveness." }
    ]
  },

  openwrt_quota: {
    id: "openwrt_quota",
    title: "OpenWrt WiFi Quota & Bandwidth Manager",
    titleAr: "نظام إدارة كوتة وشبكات الواي فاي — OpenWrt",
    type: "systems",
    typeLabel: "Hardware, Network & Mobile System",
    typeLabelAr: "أنظمة شبكات وهاردوير وموبايل",
    client: "Self-Initiated Innovation",
    clientAr: "مشروع أنظمة وهاردوير مدمج",
    category: "EMBEDDED LINUX · HARDWARE IOT · NETWORKING",
    subtitle: "A comprehensive end-to-end network management, router traffic metering, and quota control ecosystem. Directly hooks into OpenWrt Linux router firmware using custom iptables packet counters and tc traffic shaping, driven by a Node.js daemon service, physical microcontroller hardware, and a Flutter mobile controller.",
    description: "نظام شامل يربط بين هاردوير الشبكات والراوترات (OpenWrt Linux)، وخادم تحكم Node.js، وتطبيق موبايل فلاتر، لإدارة كوتة واستهلاك الإنترنت لحظياً والتحكم في سرعات وأجهزة المستخدمين.",
    tags: ["OpenWrt", "Node.js", "Flutter", "Embedded Hardware", "iptables & tc", "WebSockets", "Linux Networking"],
    image: "", // Will render cinematic hardware/terminal blueprint
    demoLink: "https://github.com/IbrahimElshishtawy/openwrt-wifi-quota-manager",
    demoLabel: "Source Code & Docs (المستودع والشرح)",
    repoLink: "https://github.com/IbrahimElshishtawy/openwrt-wifi-quota-manager",
    repoLabel: "GitHub Repository ↗",
    accentColor: "#8b5cf6",
    badge: "HARDWARE & LINUX NETWORKING",
    mockupType: "hardware",
    urlPreview: "github.com/IbrahimElshishtawy/openwrt-wifi-quota-manager",
    features: [
      { icon: "fa-network-wired", title: "Kernel-Level Quota Intercept", desc: "Direct iptables packet counting and traffic control (tc) rules metering bandwidth consumption per IP/MAC address." },
      { icon: "fa-microchip", title: "Hardware & Microcontroller Sync", desc: "Embedded telemetry module monitoring router health, CPU load, and hardware interfaces in real time." },
      { icon: "fa-server", title: "Node.js Network Daemon", desc: "High-speed background daemon orchestrating user voucher expiration, speed throttling, and quota resets." },
      { icon: "fa-mobile-screen", title: "Flutter Command Dashboard", desc: "Live mobile app visualizing real-time bandwidth gauges, connected device kicks, and voucher generation." }
    ],
    journey: [
      { phase: "PHASE 01 — FIRMWARE ROUTINES", title: "OpenWrt Packet Shaping", desc: "Engineered shell and iptables daemon scripts inside OpenWrt router memory to monitor byte streams without bottlenecks." },
      { phase: "PHASE 02 — DAEMON & PROTOCOLS", title: "Node.js WebSocket Bridge", desc: "Constructed low-latency socket pipelines communicating live router statistics to client controllers." },
      { phase: "PHASE 03 — MOBILE INTERFACE", title: "Flutter Real-Time Monitoring", desc: "Crafted sleek reactive gauges, device management lists, and instant toggle controls in Flutter with Clean Architecture." }
    ]
  },

  etihad_bshababha: {
    id: "etihad_bshababha",
    title: "Etihad Bshababha — Python EdTech Platform",
    titleAr: "منصة اتحاد بشبابها ومبادرة مستقبل وطن لتعليم بايثون",
    type: "web",
    typeLabel: "EdTech & Interactive Learning Portal",
    typeLabelAr: "منصة تعليمية تفاعلية للشباب",
    client: "Mostaqbal Watan (مستقبل وطن) & Etihad Bshababha (اتحاد بشبابها)",
    clientAr: "مبادرة اتحاد بشبابها وحزب مستقبل وطن",
    category: "EDTECH · COMMUNITY EMPOWERMENT · PYTHON",
    subtitle: "An interactive national education platform engineered for the 'Etihad Bshababha' youth initiative and 'Mostaqbal Watan' Python Training Course. Empowers aspiring developers to master Python programming through structured video lectures, coding challenges, student progress tracking, and interactive community exercises.",
    description: "المنصة التفاعلية الرسمية لمبادرة اتحاد بشبابها ومسار كورس بايثون (مستقبل وطن)، لتنظيم المحاضرات ومتابعة مستوى الطلاب وحل التمارين البرمجية بلغة بايثون في بيئة سحابية حديثة.",
    tags: ["Next.js", "Firebase", "Node.js", "Python", "Tailwind CSS", "Cloud Firestore", "Authentication"],
    image: "", // Will render cinematic browser frame
    demoLink: "https://etihad-bshababha.web.app/",
    demoLabel: "Live EdTech Platform (المنصة المباشرة)",
    repoLink: "https://github.com/IbrahimElshishtawy/project_pyrthon",
    repoLabel: "Python Curriculum Repo (مستودع كورس بايثون)",
    accentColor: "#10b981",
    badge: "EDTECH INITIATIVE · MOSTAQBAL WATAN",
    mockupType: "browser",
    urlPreview: "etihad-bshababha.web.app",
    features: [
      { icon: "fa-graduation-cap", title: "Interactive Python Roadmap", desc: "Curated learning tracks taking students from foundational logic and syntax up to OOP, algorithms, and real-world scripts." },
      { icon: "fa-code", title: "Hands-On Code Challenges", desc: "Embedded programming exercises with immediate automated checks and algorithmic score calculations." },
      { icon: "fa-fire", title: "Firebase Cloud Backbone", desc: "Cloud Firestore user progress synchronization, secure JWT student authentication, and instant lecture unlock." },
      { icon: "fa-users-gear", title: "Teacher & Student Dashboards", desc: "High-density admin portals allowing instructors to track attendance, assignment completion, and leaderboard rankings." }
    ],
    journey: [
      { phase: "PHASE 01 — CURRICULUM & ENGINE", title: "Python Educational Framework", desc: "Formulated the comprehensive Python course syllabus and step-by-step problem sets for students." },
      { phase: "PHASE 02 — CLOUD PLATFORM", title: "Next.js & Firebase Build", desc: "Engineered ultra-responsive web UI on Next.js, backed by Firebase real-time database queries." },
      { phase: "PHASE 03 — NATIONWIDE IMPACT", title: "Empowering Next-Gen Coders", desc: "Rolled out the platform to hundreds of ambitious youth participants with seamless performance." }
    ]
  },

  pro_setup_platform: {
    id: "pro_setup_platform",
    title: "Pro Setup Platform (مكتب وتجهيز بيئات العمل)",
    titleAr: "منصة تجهيز المكاتب ومساحات العمل — Pro Setup",
    type: "web",
    typeLabel: "Interactive Workstation Customizer",
    typeLabelAr: "منصة تفاعلية للمكاتب والتجهيزات",
    client: "Creator & Professional Workspaces",
    clientAr: "منصة بيئات العمل والإنتاجية",
    category: "ERGONOMICS · PRODUCTIVITY · WORKSPACES",
    subtitle: "A modern digital showcase and interactive configurator dedicated to professional developer workstations, ergonomic desk setups, and creator workspaces. Allows users to curate premium monitors, custom desks, cable management accessories, and ambient lighting layouts.",
    description: "منصة تفاعلية متقدمة تهدف لمساعدة المطورين والمبدعين في استعراض واختيار وتجهيز مكاتبهم وبيئات العمل الاحترافية بأعلى معايير الإنتاجية والأناقة.",
    tags: ["Next.js", "React", "Tailwind CSS", "Interactive UI", "Firebase", "Workstation Ergonomics"],
    image: "", // Will render cinematic browser frame
    demoLink: "https://pro-setup-platform.web.app/",
    demoLabel: "Live Setup Platform (استعراض المنصة)",
    repoLink: "https://github.com/IbrahimElshishtawy",
    repoLabel: "GitHub Profile",
    accentColor: "#f59e0b",
    badge: "INTERACTIVE WEB PLATFORM",
    mockupType: "browser",
    urlPreview: "pro-setup-platform.web.app",
    features: [
      { icon: "fa-desktop", title: "Curated Workstation Configurations", desc: "Interactive galleries of multi-monitor setups, standing desks, monitor arms, and ergonomic essentials." },
      { icon: "fa-sliders", title: "Custom Setup Configurator", desc: "Modular picker allowing users to assemble custom peripheral bundles and inspect compatibility." },
      { icon: "fa-wand-magic-sparkles", title: "Cinematic Dark Mode Aesthetics", desc: "Atmospheric cyber styling matching modern high-end productivity spaces with smooth CSS interactions." },
      { icon: "fa-cubes", title: "Optimized Performance", desc: "Sub-second client hydration, lazy-loaded media assets, and fluid micro-animations." }
    ],
    journey: [
      { phase: "PHASE 01 — CONCEPT & DESIGN", title: "Ergonomics Research & UI", desc: "Designed aesthetic layout paradigms focusing on clean lines, high contrast, and visual clarity." },
      { phase: "PHASE 02 — REACT & NEXT.JS", title: "Modular Component Architecture", desc: "Built reusable product and setup cards with fluid filtering and state synchronization." }
    ]
  },

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
  },

  eduassess: {
    id: "eduassess",
    title: "Edu Assess (إيدو أسيس)",
    titleAr: "إيدو أسيس — Edu Assess",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "EDTECH · ASSESSMENTS",
    subtitle: "An intelligent examination and student performance assessment system with offline test taking and automatic grading.",
    description: "منصة وتطبيق اختبارات وتقييم أكاديمي ذكي مع تصحيح فوري وتحليل أداء الطلاب.",
    tags: ["Flutter", "Dart", "Firebase", "Clean Architecture", "SqFlite"],
    image: "assets/assets/Edu Assess.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#8b5cf6",
    features: [
      { icon: "fa-clipboard-check", title: "Automated Evaluation", desc: "Instant test scoring with deep breakdown of student weak points." },
      { icon: "fa-wifi-slash", title: "Offline Testing", desc: "Take tests without interruption; auto-syncs when online." }
    ],
    journey: [
      { phase: "PHASE 01 — SECURITY", title: "Cheating Prevention", desc: "Prevented app switching during active exam sessions." }
    ]
  },

  quickbit: {
    id: "quickbit",
    title: "Quick Bit (كويك بيت)",
    titleAr: "كويك بيت — Quick Bit",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "FINTECH · CRYPTO & WALLET",
    subtitle: "A high-speed crypto and digital asset portfolio tracker with real-time price tickers, candlestick charts, and multi-currency alerts.",
    description: "محفظة رقمية وتتبع فوري لأسعار العملات الرقمية مع رسوم بيانية وتنبيهات مخصصة.",
    tags: ["Flutter", "REST API", "Fl_Chart", "WebSockets", "BLoC"],
    image: "assets/assets/Quick Bit.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#06b6d4",
    features: [
      { icon: "fa-coins", title: "Live Price Streaming", desc: "Sub-second WebSockets price feed for top cryptocurrencies." },
      { icon: "fa-bell", title: "Custom Volatility Alerts", desc: "Configurable threshold alerts sent via local background notifications." }
    ],
    journey: [
      { phase: "PHASE 01 — CHARTS", title: "High-Frequency Render", desc: "Optimized chart frame rates to maintain 60 FPS while tickers fluctuate." }
    ]
  },

  umum: {
    id: "umum",
    title: "Umum (عُموم)",
    titleAr: "عُموم — Umum",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "SOCIAL COMMUNITY",
    subtitle: "A community discussions and polling platform connecting thought leaders and youth around shared cultural questions.",
    description: "شبكة تواصل مجتمعية للنقاشات الهادفة واستطلاعات الرأي التفاعلية بين الشباب.",
    tags: ["Flutter", "Firebase", "Cloud Functions", "GetX"],
    image: "assets/assets/umum.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#ec4899",
    features: [
      { icon: "fa-poll", title: "Real-Time Polling", desc: "Interactive voting cards that recalculate percentages dynamically." },
      { icon: "fa-comments", title: "Threaded Dialogues", desc: "Nested comments with rich mention tags and notification triggers." }
    ],
    journey: [
      { phase: "PHASE 01 — FEED", title: "Infinite Scroll Optimizations", desc: "Lazy loaded feed cards eliminating any lag while scrolling." }
    ]
  },

  writle: {
    id: "writle",
    title: "Writle (رايتل)",
    titleAr: "رايتل — Writle",
    type: "mobile",
    typeLabel: "Mobile App",
    typeLabelAr: "تطبيق موبايل",
    category: "CREATIVE · MINDFUL WRITING",
    subtitle: "A minimalist distraction-free Markdown editor and digital journal featuring ambient soundscapes and encrypted notes.",
    description: "محرر نصوص ومفكرة ماركداون مشفرة ومصممة للكتابة الإبداعية والتركيز الذهني.",
    tags: ["Flutter", "Hive DB", "Markdown Engine", "Audio Player"],
    image: "assets/assets/writle.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#f59e0b",
    features: [
      { icon: "fa-feather", title: "Distraction-Free Zen Mode", desc: "Clean typography with customizable ambient rain & lo-fi sounds." },
      { icon: "fa-lock", title: "Encrypted Vault", desc: "Local AES-256 storage protecting personal journal entries." }
    ],
    journey: [
      { phase: "PHASE 01 — PARSER", title: "Custom Markdown Spans", desc: "Built realtime syntax parser rendering formatting on the fly." }
    ]
  }
};

/* Export for Node / CommonJS environments if applicable */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOOLS_DATA, PROJECTS_DATA };
}
