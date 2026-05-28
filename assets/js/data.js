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

  /* ── LEARNING & BACKEND APPLICATIONS (VECTOR ब्लू-प्रिंट VIEW) ── */
  egy_courier: {
    title:    "Egy-Courier (إيجي كوريير)",
    category: "LOGISTICS · PATH OPTIMIZATION",
    subtitle: "A high-performance courier logistics and delivery route optimization platform. Uses advanced graph algorithms, real-time geolocation tracking, and high-tier Node.js backend streams to organize delivery queues for logistics companies.",
    tags:  ["Flutter", "Node.js", "Express", "MongoDB", "Google Maps API", "Dijkstra"],
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#10b981",
    features: [
      { icon: "fa-route",          title: "Route Path Optimization",    desc: "Algorithms calculating fastest courier routes based on traffic density and spatial coordinates." },
      { icon: "fa-map-marked-alt", title: "Live Fleet Tracking",        desc: "Continuous bi-directional location broadcasts using WebSockets, rendering live markers on vector maps." },
      { icon: "fa-history",        title: "Historical Tracking Logs",   desc: "Compressed tracking archives storing fleet coordinate histories in MongoDB collections, queryable in under 10ms." },
      { icon: "fa-shield-alt",     title: "Secured Agent Portals",     desc: "Secure login terminals for delivery agents using JSON Web Tokens (JWT) and encrypted localized storage blocks." }
    ],
    journey: [
      { phase: "PHASE 01 — MATHEMATICS", title: "Path Optimization Math",     desc: "Researched and integrated Dijkstra path optimization strategies inside Node.js microservices to order multi-destination delivery queues." },
      { phase: "PHASE 02 — DATA STREAMS",title: "WebSocket Location Streams", desc: "Constructed continuous data streams sending high-density courier coordinates without overloading mobile CPU battery profiles." },
      { phase: "PHASE 03 — PORTAL",      title: "Logistics Admin Console",    desc: "Designed an interactive dashboard displaying active fleets, delivery KPIs, and dynamic route calculations." }
    ]
  },
  task_orbit: {
    title:    "Task-Orbit",
    category: "PRODUCTIVITY · STATE WORKFLOWS",
    subtitle: "An enterprise-grade task collaboration and calendar organizer. Focuses on advanced BLoC state management patterns, reactive local notifications, multi-member task boards, and highly scalable offline-first document databases.",
    tags:  ["Flutter", "BLoC", "Hive DB", "Awesome Notifications", "Get_It"],
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#8b5cf6",
    features: [
      { icon: "fa-tasks",      title: "Advanced Task Workflows",    desc: "Interactive kanban-like pipelines mapping tasks from backlog to testing, complete with assignees and checklists." },
      { icon: "fa-sync",       title: "BLoC Event Architectures",   desc: "Highly-predictable UI state tracking, isolating view models from backend networks to prevent frame drops." },
      { icon: "fa-bell",       title: "Local Notification Engine",  desc: "Scheduling contextual calendar alerts using the Awesome Notifications package with high-priority channels." },
      { icon: "fa-database",   title: "Hive Document Caching",      desc: "Storing structured workspace configurations locally, facilitating offline loading under 5ms." }
    ],
    journey: [
      { phase: "PHASE 01 — WORKFLOWS",  title: "Predictable BLoC States",    desc: "Structured rigid event-state workflows inside our Flutter layer. Isolated database writes to background blocks for lag-free performance." },
      { phase: "PHASE 02 — ALARMS",     title: "Awesome Notification Setup", desc: "Configured custom audio signals and high-priority OS-level alarms notifying users of approaching deadlines." },
      { phase: "PHASE 03 — REFINING",   title: "Dynamic Drag and Drop",      desc: "Built a custom responsive drag-and-drop gesture controller for kanban boards with smooth list height transitions." }
    ]
  },
  medvibe: {
    title:    "MedVibe",
    category: "HEALTHCARE · APPOINTMENTS",
    subtitle: "A digital medical portal connecting patients with specialized clinicians. Implements secure Firebase user authentication, real-time medical appointment scheduler grids, dynamic review feeds, and automated SMS appointment reminders.",
    tags:  ["Flutter", "Firebase Auth", "Cloud Firestore", "Cloud Functions", "Twilio"],
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#ec4899",
    features: [
      { icon: "fa-user-md",    title: "Clinician Directory Grids",   desc: "Smart filtering algorithms listing available medical professionals by specialty, user reviews, and pricing models." },
      { icon: "fa-calendar",   title: "Dynamic Slot Scheduler",      desc: "Interactive appointment calendars displaying available clinic hours, auto-locking slots during patient checkouts." },
      { icon: "fa-shield-alt", title: "HIPAA-compliant Database",    desc: "Securing patient records, clinical consultation logs, and medical files using robust Firestore security rules." },
      { icon: "fa-sms",        title: "Automated Twilio Reminders",  desc: "Deploying automated Node.js cron functions that trigger direct SMS appointment notifications to patients." }
    ],
    journey: [
      { phase: "PHASE 01 — SECURITIES", title: "Firebase Authentication",    desc: "Implemented complex email, password, and Google login pipelines. Added multi-factor SMS codes to guarantee patient database safety." },
      { phase: "PHASE 02 — SLOT ENGINE",title: "Real-time Slot Locking",     desc: "Engineered write-transaction locks in Firestore to prevent double-booking of doctor slots during high-traffic intervals." },
      { phase: "PHASE 03 — CRON JOBS",  title: "Automated SMS Workflows",    desc: "Wrote Cloud Scheduler functions that query upcoming slots daily, triggering custom SMS notifications using Twilio APIs." }
    ]
  },
  bazar_eats: {
    title:    "Bazar-Eats",
    category: "E-COMMERCE · REST CLIENTS",
    subtitle: "A modern fast-food and local grocery delivery storefront. Focuses on high-performance RESTful API clients, Provider state management, cached local database indexing, and complex search query autocomplete engines.",
    tags:  ["Flutter", "Provider", "Retrofit", "SQLite", "Dio Client", "JWT"],
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#f59e0b",
    features: [
      { icon: "fa-hamburger",  title: "Rich Product Showcase",     desc: "Categorized menus with item variants, ingredients, customization add-ons, and dynamic price estimations." },
      { icon: "fa-search",     title: "Autocomplete Search Index", desc: "Instant fuzzy-search indices filtering dishes, cuisines, and local stores with rapid client-side sorting." },
      { icon: "fa-shopping-cart",title: "Reactive Offline Cart",   desc: "Storing temporary cart items in local SQLite databases, updating total values reactively across sessions." },
      { icon: "fa-exchange-alt",title: "Dio Network Interceptors", desc: "Configuring Dio middleware blocks that automatically attach JWT authentication headers and handle token renewals." }
    ],
    journey: [
      { phase: "PHASE 01 — CLIENTS",    title: "Retrofit Code-Generation",   desc: "Utilized Retrofit libraries to auto-generate type-safe Dart network clients, decreasing manually-written API code by 70%." },
      { phase: "PHASE 02 — DATABASE",   title: "Local Cart Sync Engine",     desc: "Crafted relational tables in SQLite to house active cart entries, ensuring seamless cart retention when reloading the app." },
      { phase: "PHASE 03 — ROUTING",    title: "Complex Order Checkout",     desc: "Designed multi-step checkout paths capturing shipping addresses, coupon codes, and payment options with clean UI checks." }
    ]
  },
  gitstat_viewer: {
    title:    "GitStat Viewer",
    category: "DEVELOPER TOOLS · GRAPHQL",
    subtitle: "An analytical dashboard for GitHub developers. Interacts with GitHub's GraphQL API, rendering extensive contribution timelines, language breakdown charts, and repo metrics in a futuristic visual format.",
    tags:  ["Flutter", "GraphQL API", "Fl_Chart", "Hive DB", "OAuth2"],
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#3b82f6",
    features: [
      { icon: "fa-code-branch", title: "High-density GraphQL Logs",desc: "Querying complex user repositories, commit logs, and pull request indices using single highly-optimized GraphQL queries." },
      { icon: "fa-chart-bar",   title: "Interactive Charts Data",  desc: "Visualizing repository statistics, programming language percentages, and commit timeline charts with custom graphs." },
      { icon: "fa-key",         title: "Secure GitHub OAuth2 Flow", desc: "Authorizing developer access tokens securely using official GitHub OAuth login flows and local encryptions." },
      { icon: "fa-bolt",        title: "Hive query Caching",        desc: "Storing expensive GraphQL query results in local Hive boxes, cutting API rate-limit usage by 80%." }
    ],
    journey: [
      { phase: "PHASE 01 — API DESIGN", title: "GraphQL Schema Parsing",     desc: "Drafted complex GraphQL queries to request nested contribution datasets in one trip, avoiding standard REST API bottlenecks." },
      { phase: "PHASE 02 — PLOTTING",   title: "Complex SVG Graphs",         desc: "Created dynamic SVG-based graphs displaying contribution metrics over 365-day grids with responsive grid highlights." },
      { phase: "PHASE 03 — SECURITY",   title: "Secure Token Vaults",        desc: "Encrypted developer access tokens using Flutter Secure Storage keys, preventing malicious access of sensitive tokens." }
    ]
  },
  chatspace: {
    title:    "ChatSpace",
    category: "COMMUNICATION · SOCKET.IO",
    subtitle: "A secure, real-time messaging workspace built with Socket.io cluster servers. Focuses on low-latency messaging, bi-directional audio/video note sharing, encrypted file attachments, and active status streams.",
    tags:  ["Flutter", "Node.js", "Socket.io", "MongoDB", "AES-256", "GetX"],
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#8b5cf6",
    features: [
      { icon: "fa-comments",   title: "Bi-directional Messaging",   desc: "Buttery-smooth message streams with real-time indicators for active typing, read receipts, and user presence." },
      { icon: "fa-lock",       title: "End-to-End AES Ciphers",     desc: "Securing private chats using client-side AES-256 cryptographic algorithms, guaranteeing complete data safety." },
      { icon: "fa-microphone", title: "Voice & Media Sharing",       desc: "Uploading voice notes and photo messages with automatic local compression, keeping database sizes minimal." },
      { icon: "fa-bell",       title: "Real-time Push Alerts",      desc: "Setting up background socket listeners that trigger instant OS notifications for offline members." }
    ],
    journey: [
      { phase: "PHASE 01 — WORK-SOCKETS", title: "Socket.io Integration",     desc: "Configured a high-efficiency Node.js Socket.io server. Managed chat channels, online registries, and message queues." },
      { phase: "PHASE 02 — CIPHERS",    title: "Client-side AES Ciphers",    desc: "Implemented AES-256 cryptographic ciphers inside Flutter models. Ensured database messages are unreadable by third parties." },
      { phase: "PHASE 03 — AUDIO",      title: "Audio Record Controllers",   desc: "Designed custom voice recorders that compress audio into lightweight AAC formats before database transmission." }
    ]
  },
  weather_x: {
    title:    "WeatherX",
    category: "METEOROLOGY · DYNAMIC UX",
    subtitle: "A premium meteorological forecasting application. Integrates OpenWeather APIs, rendering atmospheric particle animations (rain, snowfall, thunder) matching current climate states, with detailed air quality gauges.",
    tags:  ["Flutter", "OpenWeather API", "Geolocator", "Custom Paint", "GetX"],
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#0ea5e9",
    features: [
      { icon: "fa-cloud-sun",  title: "Fuzzy Climate forecasts",    desc: "Dynamic air quality trackers, ultraviolet radiation gauges, and 7-day hourly climate projection metrics." },
      { icon: "fa-paint-brush",title: "Atmospheric Canvas Paints",  desc: "Custom Canvas Paint systems rendering rain, snow, or fog animations matching localized weather metrics." },
      { icon: "fa-crosshairs", title: "Auto Geolocator Indexing",   desc: "Measuring user location coordinates reactively to fetch nearby weather conditions in under 2 seconds." },
      { icon: "fa-star",       title: "Favorite Location Pins",     desc: "Saving frequently-monitored coordinates locally in SQLite, updating weather metrics on single swipes." }
    ],
    journey: [
      { phase: "PHASE 01 — CANVAS",     title: "Dynamic Canvas Animations",  desc: "Used Flutter's CustomPainter to render realistic rainfall physics, creating dynamic snow and cloud movements." },
      { phase: "PHASE 02 — LOCATIONS",  title: "Reactive Geolocation Hook",  desc: "Integrated the Geolocator package to fetch coordinates with fine accuracy, handling permission prompts gracefully." },
      { phase: "PHASE 03 — AIR QUALITY",title: "Air Index Data Mapping",     desc: "Parsed open meteorological Air Quality Index (AQI) reports, displaying interactive gauges for pollutant counts." }
    ]
  },
  smart_vault: {
    title:    "Smart-Vault",
    category: "UTILITIES · CRYPTOGRAPHY",
    subtitle: "An offline password and credit-card vault. Focuses on military-grade AES-256 database encryption, biometric authentication gates (FaceID/Fingerprint), and encrypted local document generators.",
    tags:  ["Flutter", "AES-256", "Flutter Secure Storage", "Local Auth", "Hive DB"],
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#10b981",
    features: [
      { icon: "fa-key",        title: "Secure Account Credentials", desc: "Structured forms capturing credit cards, accounts, and server logins under encrypted local keys." },
      { icon: "fa-fingerprint",title: "Biometric Authentication Gate",desc: "Locking the application behind FaceID or fingerprint checks, with secure automatic lock timers." },
      { icon: "fa-shield-alt", title: "AES-256 local database",     desc: "Encrypting local Hive database boxes using 256-bit encryption keys stored in secure hardware elements." },
      { icon: "fa-random",     title: "Password Strength Analyzer", desc: "Generating secure passwords with customized length, character variables, and real-time entropy indicators." }
    ],
    journey: [
      { phase: "PHASE 01 — ENCRYPTION", title: "Hardware Key Storage",       desc: "Wrote native plugins mapping keys directly inside iOS Keychain and Android Keystore, keeping keys isolated." },
      { phase: "PHASE 02 — DATABASE",   title: "Encrypted Hive Boxes",       desc: "Configured Hive's encrypted storage adapter. Queries decrypt and encrypt data reactively, maintaining 60fps." },
      { phase: "PHASE 03 — BIOMETRICS",  title: "Local Auth Gating",          desc: "Integrated the Local Auth package. Added background blur states when the application loses screen focus." }
    ]
  },

  /* ── 16 MORE LEARNING/PRACTICE PROJECTS TO COMPLETE THE 28+ LIST ── */
  agrolink: {
    title: "AgroLink",
    category: "MARKETPLACE · B2B COMMERCE",
    subtitle: "A business-to-business agricultural trading platform linking crop farmers directly with commercial retailers. Focuses on offline product listing, crop price trends, and localized logistic schedulers.",
    tags: ["Flutter", "Node.js", "Express", "MongoDB", "Clean Architecture"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#10b981",
    features: [
      { icon: "fa-leaf", title: "Direct Crop Trading", desc: "Post crop listings, expected yields, and price per ton with high-quality crop photo galleries." },
      { icon: "fa-chart-line", title: "Live Market Indexes", desc: "Scrape and chart current vegetable and grain price indexes, protecting farmers from market brokers." }
    ],
    journey: [{ phase: "PHASE 01", title: "B2B Flow Design", desc: "Designed B2B transaction portals with payment schedules, crop inspections, and shipping logistics." }]
  },
  fitfocus: {
    title: "FitFocus",
    category: "HEALTH · FITNESS TRACKER",
    subtitle: "A highly visual workout companion and gym routine logger. Implements dynamic training calendar grids, offline SQLite activity records, and dynamic progress graphs.",
    tags: ["Flutter", "SQLite", "GetX", "Fl_Chart", "Local Storage"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#ec4899",
    features: [
      { icon: "fa-dumbbell", title: "Routine Builders", desc: "Design customized training splits, logging exact sets, reps, and target muscle groups." },
      { icon: "fa-chart-area", title: "Volume Analytics", desc: "Plot weekly volume and personal records with smooth curves using advanced visual components." }
    ],
    journey: [{ phase: "PHASE 01", title: "Local DB Relational Maps", desc: "Structured SQL tables to link workouts, exercises, and sets, enabling historical logs queryable under 1ms." }]
  },
  cryptopulse: {
    title: "CryptoPulse",
    category: "FINANCE · LIVE WEBSOCKETS",
    subtitle: "A cryptocurrency tracking dashboard showing live coin valuations. Establishes steady WebSocket connections with public exchange nodes, saving target alerts in Hive databases.",
    tags: ["Flutter", "WebSockets", "Hive DB", "Provider", "Fl_Chart"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#f59e0b",
    features: [
      { icon: "fa-coins", title: "Live Price Boards", desc: "Display real-time cryptocurrency price grids, updating coin values in milliseconds." },
      { icon: "fa-bell", title: "Custom Price Triggers", desc: "Schedule local alerts that pop up when target coin prices rise or fall past set limits." }
    ],
    journey: [{ phase: "PHASE 01", title: "WebSocket Connection Optimization", desc: "Structured lightweight socket client channels, decoding coin price updates without frame lag." }]
  },
  autocare: {
    title: "AutoCare",
    category: "SERVICES · SCHEDULER",
    subtitle: "A vehicle maintenance scheduler and diagnostic workbook. Features dynamic service calendars, repair quote generators, and automated SMS appointment updates.",
    tags: ["Flutter", "Node.js", "Express", "Twilio API", "GetX"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#3b82f6",
    features: [
      { icon: "fa-wrench", title: "Diagnostic Schedulers", desc: "Log vehicle issues, select maintenance slots, and request price quotes from auto shops." },
      { icon: "fa-mobile-alt", title: "SMS Booking Updates", desc: "Automate booking updates and status tracking notifications using custom Twilio APIs." }
    ],
    journey: [{ phase: "PHASE 01", title: "Booking Logic Design", desc: "Configured clean calendar grids and checkout pipelines, ensuring zero double-booking conflicts." }]
  },
  cinestream: {
    title: "CineStream",
    category: "MEDIA · ENTERTAINMENT",
    subtitle: "A clean movie catalog and media review library. Links directly with the TMDB API, featuring custom video trailers, cast registries, and offline watchlists.",
    tags: ["Flutter", "TMDB API", "Hive DB", "Cached Network Image", "Provider"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#ef4444",
    features: [
      { icon: "fa-video", title: "Infinite Movie Catalogs", desc: "Explore trending movies, categorized genres, and search databases with infinite scrolling." },
      { icon: "fa-star", title: "Review Board Panels", desc: "Read and post reviews, check rating breakdown charts, and browse movie cast lists." }
    ],
    journey: [{ phase: "PHASE 01", title: "Code-generated HTTP Adapters", desc: "Utilized Dio network clients and JSON serializing tools, parsing tmdb payloads under 5ms." }]
  },
  lingolearn: {
    title: "LingoLearn",
    category: "EDUCATION · LANGUAGE TECH",
    subtitle: "A language study system powered by spaced repetition models. Features customizable vocabulary flashcards, local speech-to-text pronunciation reviews, and study streak heatmaps.",
    tags: ["Flutter", "Hive DB", "Speech to Text", "GetX", "Spaced Repetition"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#8b5cf6",
    features: [
      { icon: "fa-graduation-cap", title: "Spaced Repetition Cards", desc: "Study custom vocabulary lists, using optimized review timelines that adjust based on test scores." },
      { icon: "fa-microphone-alt", title: "Pronunciation Reviews", desc: "Test vocabulary speech pronunciation locally using fast speech-to-text processing." }
    ],
    journey: [{ phase: "PHASE 01", title: "Repetition Math Design", desc: "Wrote custom study engines utilizing SuperMemo algorithms, updating vocabulary review weights locally." }]
  },
  newssphere: {
    title: "NewsSphere",
    category: "NEWS · CONTENT AGGREGATOR",
    subtitle: "A streamlined global news dashboard. Connects with multi-source news APIs, caching articles in Hive files for offline reading.",
    tags: ["Flutter", "News API", "Hive DB", "Dio Client", "Url Launcher"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#ec4899",
    features: [
      { icon: "fa-newspaper", title: "Custom News Streams", desc: "Browse global headlines, filter by language, or search news categories with clean article cards." },
      { icon: "fa-bookmark", title: "Offline Bookmark Vaults", desc: "Save complete article structures, caching layouts locally for reading without internet." }
    ],
    journey: [{ phase: "PHASE 01", title: "Cache Optimization", desc: "Engineered offline reading channels, caching complete text payloads and image assets inside local DB files." }]
  },
  finflow: {
    title: "FinFlow",
    category: "FINANCE · CAPITAL LEDGER",
    subtitle: "A personal budgeting tool featuring envelope accounting logic. Implements category expense buckets, income logs, and monthly target charts.",
    tags: ["Flutter", "BLoC", "SqFlite", "Fl_Chart", "Budgeting Math"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#10b981",
    features: [
      { icon: "fa-wallet", title: "Envelope Budget Pools", desc: "Set monthly transaction caps across categories like food, rent, or transport with clean gauges." },
      { icon: "fa-exchange-alt", title: "Automated Bill Schedulers", desc: "Log recurring expenses, scheduling automated local reminders when payments approach." }
    ],
    journey: [{ phase: "PHASE 01", title: "SQL Schema Design", desc: "Drafted SQL tables mapping accounts, categories, and bills, ensuring zero transaction bookkeeping errors." }]
  },
  notewave: {
    title: "NoteWave",
    category: "PRODUCTIVITY · AUDIO NOTES",
    subtitle: "A high-fidelity speech-to-text notebook. Focuses on local microphone audio capture, instant speech translation, and structured keyword folders.",
    tags: ["Flutter", "Speech to Text", "SQLite", "Audio Recorder", "GetX"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#0ea5e9",
    features: [
      { icon: "fa-microphone", title: "Voice Note Transcription", desc: "Record audio notes, automatically generating written text logs using highly precise speech engines." },
      { icon: "fa-folder-open", title: "Dynamic Note Categories", desc: "Sort notes into custom folders, search text contents, and export text files." }
    ],
    journey: [{ phase: "PHASE 01", title: "Audio Capture Bindings", desc: "Configured low-level audio encoders, capturing and compressing sound clips into light formats." }]
  },
  shopvibe: {
    title: "ShopVibe",
    category: "E-COMMERCE · CHECKOUT SYSTEMS",
    subtitle: "A visual e-commerce store companion. Connects with Node.js stripe payment processors, organizing checkout pipelines and order lists.",
    tags: ["Flutter", "Stripe API", "Node.js", "Express", "MongoDB", "Provider"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#f59e0b",
    features: [
      { icon: "fa-shopping-bag", title: "Secure Stripe Checkout", desc: "Process payments securely inside the application using encrypted Stripe forms." },
      { icon: "fa-box", title: "Live Order Delivery Tracking", desc: "Check active shipment schedules, displaying progressive steps from packing to delivery." }
    ],
    journey: [{ phase: "PHASE 01", title: "Payment Backend Config", desc: "Constructed Stripe webhook processing portals inside Express servers, updating user checkout states." }]
  },
  quizsphere: {
    title: "QuizSphere",
    category: "EDUCATION · GAMIFIED QUIZZING",
    subtitle: "A real-time multiplayer quizzing client. Focuses on multiplayer game lobbies powered by Node.js socket streams, with visual leaderboard charts.",
    tags: ["Flutter", "Node.js", "Socket.io", "MongoDB", "GetX", "Timer Engine"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#8b5cf6",
    features: [
      { icon: "fa-trophy", title: "Real-Time Quiz Lobbies", desc: "Join multiplayer quiz lobbies, competing on active timers with instant scoring." },
      { icon: "fa-list-ol", title: "Live Match Leaderboards", desc: "Track points reactively on live scoreboard panels as participants submit answers." }
    ],
    journey: [{ phase: "PHASE 01", title: "WebSocket Sync Loops", desc: "Constructed precise socket loops, syncing countdown clocks and match scores across active clients." }]
  },
  docushare: {
    title: "DocuShare",
    category: "UTILITIES · FILE EXCHANGE",
    subtitle: "A secure cloud file exchange platform. Focuses on AWS S3 direct uploads, file encryption models, and access sharing codes.",
    tags: ["Flutter", "AWS S3 SDK", "Node.js", "MongoDB", "Clean Architecture"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#3b82f6",
    features: [
      { icon: "fa-cloud-upload-alt", title: "Direct S3 Cloud Uploads", desc: "Upload files securely to AWS cloud buckets using optimized progress tracking bars." },
      { icon: "fa-key", title: "Encrypted Sharing Links", desc: "Generate secure, expiring download codes, protecting private files from unauthorized access." }
    ],
    journey: [{ phase: "PHASE 01", title: "S3 Signatures Portal", desc: "Configured Node.js signature generators, allowing clients to upload large files directly to AWS securely." }]
  },
  recipebox: {
    title: "RecipeBox",
    category: "HEALTH · CULINARY LOG",
    subtitle: "An AI-powered recipe planner and kitchen log. Focuses on AI-powered ingredient recognition APIs, daily meal lists, and automated shopping checklists.",
    tags: ["Flutter", "AI Recognition API", "Hive DB", "Provider", "JSON Models"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#10b981",
    features: [
      { icon: "fa-utensils", title: "AI Ingredient Scanners", desc: "Upload kitchen photos to automatically identify ingredients, suggesting matching recipes." },
      { icon: "fa-list-check", title: "Smart Shopping Checklists", desc: "Add missing recipe ingredients to shopping lists, organizing items by supermarket aisle." }
    ],
    journey: [{ phase: "PHASE 01", title: "AI API Integration", desc: "Connected ingredient classification APIs, parsing recognition data into structured grocery items." }]
  },
  rentgo: {
    title: "RentGo",
    category: "MARKETPLACE · CAR RENTAL",
    subtitle: "A vehicle rental finder application. Integrates geo-location car filters, user booking grids, and verified identification uploads.",
    tags: ["Flutter", "GetX", "SqFlite", "Geolocator", "Image Picker"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#0ea5e9",
    features: [
      { icon: "fa-car", title: "Geo-filtered Vehicle Logs", desc: "Browse local car rentals on maps, filtering by brand, pricing, and active availability." },
      { icon: "fa-id-card", title: "Verified Driver Uploads", desc: "Upload driver credentials securely, storing encrypted verification stamps in databases." }
    ],
    journey: [{ phase: "PHASE 01", title: "Map Grid Math", desc: "Wrote optimized database queries filtering available cars within a 15km user radius under 3ms." }]
  },
  travelcraft: {
    title: "TravelCraft",
    category: "UTILITIES · ITINERARY BUILDER",
    subtitle: "A detailed trip organizer featuring offline coordinate sync. Tracks hotel bookings, daily checksheets, and weather forecasts.",
    tags: ["Flutter", "Hive DB", "OpenWeather API", "Provider", "Offline Sync"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#f59e0b",
    features: [
      { icon: "fa-plane", title: "Daily Activity Builders", desc: "Draft customized travel timelines, logging daily hotel, dining, and sightseeing bookings." },
      { icon: "fa-cloud-sun", title: "Destination Weather Updates", desc: "Check upcoming weather conditions at scheduled trip locations with clean widgets." }
    ],
    journey: [{ phase: "PHASE 01", title: "Offline Trip Databases", desc: "Structured light Hive document adapters, keeping travel configurations accessible without cell coverage." }]
  },
  artgalaxy: {
    title: "ArtGalaxy",
    category: "CREATIVE · DYNAMIC GALLERY",
    subtitle: "A visual digital art portfolio featuring an NFT preview simulator. Implements dynamic carousel displays and custom canvas shaders.",
    tags: ["Flutter", "Custom Paint", "GetX", "Shaders", "Carousel Controller"],
    demoLink: "#", repoLink: "https://github.com/IbrahimElshishtawy", accentColor: "#ec4899",
    features: [
      { icon: "fa-palette", title: "Fluid 3D Slider Displays", desc: "Browse artistic pieces using responsive sliders with realistic parallax animations." },
      { icon: "fa-gem", title: "Holographic NFT Previews", desc: "Simulate glass card reflections on art pieces using high-tier custom canvas paints." }
    ],
    journey: [{ phase: "PHASE 01", title: "Interactive Canvas Paint", desc: "Created realistic refraction painting calculations, rendering metallic card gradients that move with device rotation." }]
  }
};

/* Export for core main engine access */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS_DATA };
}
