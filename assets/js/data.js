/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO PROJECT DATABASE
   Comprehensive 28 Projects Dataset (data.js)
   ============================================================ */

'use strict';

const PROJECTS_DATA = {
  /* ── FEATURED WORKS (WITH IMAGES) ────────────────────────── */
  aqar: {
    title:    "Aqar (عقار)",
    category: "REAL ESTATE · OFFLINE-FIRST",
    subtitle: "A futuristic real estate and construction management dashboard engineered with local-first offline synchronization. Enables active builders, investors, and contractors to track unit sales, concrete supply loads, custom labor costs, and installment schedules seamlessly — with absolute zero dependency on active internet connections.",
    tags:  ["Flutter", "SqFlite", "Fl_Chart", "GetX", "Clean Architecture", "Local Sync"],
    image:        "assets/assets/aqar_dashboard.png",
    secondaryImage: "assets/assets/aqar_activities.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#8b5cf6",
    features: [
      { icon: "fa-chart-pie",        title: "Dynamic Sales Analytics",  desc: "High-density charts compiling total contract values, down payments, and pending collection indices with daily and monthly filters." },
      { icon: "fa-users",            title: "Partner Workspace",        desc: "A secure credentials sharing manager that aggregates local edits and distributes sync tokens across active partners." },
      { icon: "fa-receipt",          title: "Active Cost Ledger",       desc: "Chronological transaction book mapping concrete pouring invoices, brick orders, and labor costs with search filters." },
      { icon: "fa-cloud-upload-alt", title: "Offline-First Sync",      desc: "Robust SqFlite database cache holding local ledger events, auto-merging with remote MongoDB servers on reconnect." }
    ],
    journey: [
      { phase: "PHASE 01 — ARCHITECTURE", title: "Relational DB Modeling",   desc: "We started by designing a complex local SQL schema with indexed foreign keys mapping projects, partners, and expense ledgers. This guarantees data integrity and sub-3ms query speeds." },
      { phase: "PHASE 02 — SHADING",       title: "Atmospheric Visuals",    desc: "Designed visual dashboards utilizing custom Fl_Chart builders. Interactive canvas curves and smooth bar loaders respond dynamically to currency fluctuations." },
      { phase: "PHASE 03 — RESILIENCE",    title: "Sync Collision Handling", desc: "Crafted a custom vector-timestamp synchronization algorithm that resolves offline database collision conflicts automatically when returning online." }
    ]
  },
  bostan: {
    title:    "Bostan (بُستان)",
    category: "SPIRITUAL TECH · AUDIO SYNC",
    subtitle: "A serene Quranic reading, reflection, and habit tracking companion designed to elevate daily spiritual habits. Features optimized Arabic vector glyph scaling, Streak heatmaps, custom OLED dark themes, and a highly responsive verse-by-verse background audio synchronization engine.",
    tags:  ["Flutter", "SqFlite", "Audio Player", "GetX", "Hive", "Path Sync"],
    image:        "assets/assets/bostan_stats.png",
    secondaryImage: "assets/assets/bostan_settings.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#06b6d4",
    features: [
      { icon: "fa-book-open", title: "Arabic Glyphs Precision",   desc: "Custom text span rendering engine designed to render complex Arabic ligatures and Tashkeel vowels at any zoom scale." },
      { icon: "fa-music",     title: "Verse-Synced Audio Player", desc: "Verse-by-verse active audio sync with automatic scrolling, reciter buffering, and robust background service channels." },
      { icon: "fa-heart",     title: "Interactive Streak Tracker",desc: "Visualizing daily reading habits using interactive heatmaps, streaks, and progress loops with customized motivation cards." },
      { icon: "fa-palette",   title: "OLED Ambient Themes",       desc: "Ultra-dark display settings that reduce eye strain, designed carefully with high contrast margins and luxury gold gradients." }
    ],
    journey: [
      { phase: "PHASE 01 — TYPOGRAPHY",  title: "Ligature Precision",         desc: "Arabic font rendering on cross-platform systems is historically erratic. We engineered custom text span logic to prevent ligature clipping and Tashkeel overlap." },
      { phase: "PHASE 02 — BUFFERING",   title: "Low-Latency Audio Streaming",desc: "Designed a lightweight background audio manager that caches reciter audio chunks locally using Hive preferences for fast seek times." },
      { phase: "PHASE 03 — RETENTION",   title: "Gamification & Progress",    desc: "Integrated a custom weekly habit tracker with dynamic SQLite query mapping that updates streaks on daily verse completions." }
    ]
  },
  animalconnect: {
    title:    "Animal Connect",
    category: "MARKETPLACE · REAL-TIME",
    subtitle: "A premium pet adoption and wellness marketplace. Features geo-location listing queries, categorized items mapping (adoption matching, pet supplies, veterinary clinics), secure real-time messaging via Socket.io, and robust local DB sync protocols for fluid buyer-seller connections.",
    tags:  ["Flutter", "Node.js", "MongoDB", "Socket.io", "GetX", "Geohash"],
    image:        "assets/assets/animal_connect_home.png",
    secondaryImage: "assets/assets/animal_connect_list.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#10b981",
    features: [
      { icon: "fa-map-marker-alt", title: "Geo-Location Proximity",   desc: "High-speed maps querying nearby listings, computing relative buyer-to-seller distances using localized coordinates." },
      { icon: "fa-th-large",       title: "Micro-Segmented Catalog",  desc: "Smart modular category sliders splitting between adoptable pets, nutrition supplies, and localized veterinary services." },
      { icon: "fa-paper-plane",    title: "Socket.io Live Chats",     desc: "Bi-directional real-time chat with active typing animations, offline message queue, and push notification triggers." },
      { icon: "fa-check-double",   title: "Verified Health Cards",    desc: "Secure health cards compiling certified vaccination details and microchip numbers, preventing fake marketplace listings." }
    ],
    journey: [
      { phase: "PHASE 01 — PROXIMITY",   title: "Geohash Grid Queries",       desc: "pet discovery requires rapid distance math. We integrated Geohash index mapping in MongoDB, converting 2D coordinates into string queries." },
      { phase: "PHASE 02 — WEB-SOCKETS", title: "Bi-directional Streams",     desc: "Set up a Node.js + Socket.io gateway to distribute real-time chat packages. Flutter local SQLite handles past message caching instantly." },
      { phase: "PHASE 03 — INTERACTION", title: "Buttery List Scrolling",     desc: "Crafted a dynamic infinite scrolling list using lazy image loaders, optimized cache ranges, and custom shimmers maintaining 60fps." }
    ]
  },
  tolabapp: {
    title:    "Tola'b App (طُلاَّب)",
    category: "PRODUCTIVITY · STUDENT TECH",
    subtitle: "A student-centric productivity hub designed to centralize academic lectures, attendance tracking, assignment deadlines, exam countdown counters, and lecture PDF files. Features an ultra-fast offline-first Hive database architecture and smart native home screen widgets.",
    tags:  ["Flutter", "Hive DB", "Local Notifications", "PDF Engine", "GetX"],
    image:        "assets/assets/tolab_schedule.png",
    secondaryImage: "assets/assets/tolab_courses.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#f59e0b",
    features: [
      { icon: "fa-calendar-alt", title: "Intelligent Weekly Planner", desc: "Dynamic calendars merging active lectures, homework deadlines, and upcoming exams into one clean timeline." },
      { icon: "fa-file-pdf",     title: "Embedded PDF Engine",        desc: "High-speed document parser with custom dark mode renders, interactive highlights, and bookmark indexes." },
      { icon: "fa-bell",         title: "Proactive Local Alarms",     desc: "Smart local notification alarms alerting users of lectures, complete with customizable snooze options." },
      { icon: "fa-chart-pie",    title: "Academic KPI Tracking",      desc: "Interactive visual charts showing GPA estimates, attendance trends, and total study duration metrics." }
    ],
    journey: [
      { phase: "PHASE 01 — INSIGHTS",    title: "Focus Group Discovery",      desc: "Conducted user surveys across university students to map common productivity blockers. Designed a single-view 'What is next' dashboard." },
      { phase: "PHASE 02 — OPTIMIZATION", title: "Hive Database Migration",    desc: "Migrated from heavy SQL database queries to lightweight Hive DB. This boosted app startup time and read/write execution by 400%." },
      { phase: "PHASE 03 — INTERACTION", title: "Android Widget Modules",     desc: "Wrote Android native Java/Kotlin bindings to share Hive database status with custom Home Screen launcher widgets." }
    ]
  },
  eduassess: {
    title:    "Edu Assess",
    category: "EDUCATION · EVALUATION",
    subtitle: "A professional academic evaluation and student assessment application designed for tracking progress and course performance.",
    tags:  ["Flutter", "Dart", "GetX", "SQLite", "Clean Architecture"],
    image:        "assets/فري لنسر/Edu Assess.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#8b5cf6",
    features: [
      { icon: "fa-graduation-cap", title: "Assessment Core", desc: "Automated student scoring and test evaluations mapped directly to subject curriculums." },
      { icon: "fa-chart-bar", title: "Analytics & Insights", desc: "Interactive bars and charts presenting student progress indices and subject weaknesses." },
      { icon: "fa-database", title: "Offline Storage", desc: "Local SQLite database ensuring assessments are saved immediately and synchronized safely." }
    ],
    journey: [
      { phase: "PHASE 01 — FLOWS", title: "Designing Evaluation Metrics", desc: "Mapped educational assessment structures to support multiple quiz types, grading weights, and dynamic feedback forms." },
      { phase: "PHASE 02 — LOCALIZATION", title: "High-Speed DB Queries", desc: "Built indexing rules within SQL tables to retrieve large test answer lists and compute GPAs in real-time." }
    ]
  },
  quickbit: {
    title:    "Quick Bit",
    category: "FINTECH · CRYPTO & TRANSACTION",
    subtitle: "A high-performance secure payment interface and digital currency dashboard tracking active transaction ledgers.",
    tags:  ["Flutter", "Dart", "GetX", "API Integration", "Biometrics"],
    image:        "assets/فري لنسر/Quick Bit.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#06b6d4",
    features: [
      { icon: "fa-wallet", title: "Digital Wallet Engine", desc: "Seamless monitoring of multiple token types, wallet addresses, and secure transaction receipts." },
      { icon: "fa-shield-alt", title: "Secured Credentials", desc: "Encrypted device storage protecting user wallets and API keys with biometrics verification." },
      { icon: "fa-exchange-alt", title: "Live Rates Tracker", desc: "High-frequency polling services mapping conversion values with micro-updates." }
    ],
    journey: [
      { phase: "PHASE 01 — PAYMENTS", title: "Transaction Layer Security", desc: "Implemented point-to-point payload encryption and cryptographic hash verification to ensure zero transactional leakage." },
      { phase: "PHASE 02 — PERFORMANCE", title: "Fluid Ledger Syncing", desc: "Designed localized transaction cache pools, reducing remote read requests and optimizing network bandwidth." }
    ]
  },
  rm: {
    title:    "RM (Resource Management)",
    category: "LOGISTICS · RESOURCE PLANNING",
    subtitle: "An enterprise-grade supply chain, resource planner, and operational workforce dispatcher dashboard.",
    tags:  ["Flutter", "Dart", "GetX", "Logistics Engine", "Task Manager"],
    image:        "assets/فري لنسر/RM.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#10b981",
    features: [
      { icon: "fa-tasks", title: "Workforce Dispatcher", desc: "Real-time task allocations and resource tracking for active operational logistics teams." },
      { icon: "fa-boxes", title: "Inventory Pipeline", desc: "Interactive asset tracker mapping supply levels, dispatch logs, and storage capacities." },
      { icon: "fa-clock", title: "Timesheet Management", desc: "Detailed logs and automated timestamps tracking contractor shifts and active task durations." }
    ],
    journey: [
      { phase: "PHASE 01 — PLANNING", title: "Pipeline Optimization", desc: "Structured hierarchical data nodes mapping facilities, resources, and dispatches to minimize delay indices." },
      { phase: "PHASE 02 — RENDERING", title: "Unified Dispatch Boards", desc: "Developed highly responsive drag-and-drop workflow visualizers that scale smoothly on both tablet and mobile displays." }
    ]
  },
  umum: {
    title:    "Umum",
    category: "SOCIAL · COMMUNICATIONS",
    subtitle: "A localized community networking and event sharing application connecting local creators, forums, and groups.",
    tags:  ["Flutter", "Dart", "Firebase", "Push Notification", "GetX"],
    image:        "assets/فري لنسر/umum.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#ec4899",
    features: [
      { icon: "fa-users", title: "Community Circles", desc: "Create private and public interest groups, share posts, and coordinate local gatherings." },
      { icon: "fa-bell", title: "Instant Notification Channels", desc: "Push notification triggers alerting community members of new events and group interactions." },
      { icon: "fa-comments", title: "Interactive Discussions", desc: "Threaded comments and rich text discussions supporting image attachments and likes." }
    ],
    journey: [
      { phase: "PHASE 01 — SOCIAL GRAPH", title: "Interactions Model", desc: "Engineered scalable Firestore collections resolving real-time followers, likes, and comment threads." },
      { phase: "PHASE 02 — ASYNC SYNC", title: "Image CDN Processing", desc: "Integrated image post-processing scripts to compress user uploads locally before hosting, ensuring quick page loads." }
    ]
  },
  writle: {
    title:    "Writle",
    category: "CREATIVE · CONTENT EDITOR",
    subtitle: "A minimalist markdown writer, journal, and document organizer built for distraction-free content publishing.",
    tags:  ["Flutter", "Dart", "Markdown", "Hive DB", "GetX"],
    image:        "assets/فري لنسر/writle.jpg",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#f59e0b",
    features: [
      { icon: "fa-feather", title: "Distraction-Free Workspace", desc: "Ultra-clean interface focusing on the content itself with smooth auto-saving logic." },
      { icon: "fa-file-code", title: "Markdown Render Engine", desc: "Rich live rendering converting tags, links, and code blocks instantly into stylized views." },
      { icon: "fa-archive", title: "Document Organizer", desc: "Local folder structuring and full-text search index across all saved drafts." }
    ],
    journey: [
      { phase: "PHASE 01 — EDITOR", title: "Custom Rich Text Parser", desc: "Crafted a regex-based parser that handles markdown formatting symbols in real-time without typing lag." },
      { phase: "PHASE 02 — ARCHIVE", title: "Fast Hive Preferences", desc: "Utilized binary Hive document storage to support instant document retrieval and seamless multi-file workspace switching." }
    ]
  }
}
/* Export for core main engine access */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS_DATA };
}
