/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v2.0
   Three.js · GSAP · ScrollTrigger · Cinematic Interactions
   ============================================================ */

'use strict';

console.log('%c🚀 Ibrahim.Dev Portfolio Engine v2.0 — Initializing', 
  'color: #8b5cf6; font-weight: bold; font-size: 13px;');

/* ── GLOBAL STATE ─────────────────────────────────────────── */
let scene, camera, renderer, particlesMesh, particlesMaterial;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let windowHalfX = window.innerWidth  / 2;
let windowHalfY = window.innerHeight / 2;
let animFrameId  = null;
let isPageVisible = true;

/* ── PROJECT CASE STUDY DATA ─────────────────────────────── */
const PROJECTS_DATA = {
  aqar: {
    title:    "Aqar (عقار)",
    category: "REAL ESTATE · OFFLINE-FIRST",
    subtitle: "A futuristic real estate and construction management dashboard engineered with local-first offline synchronization. Enables active builders and partners to track sales, concrete/supply expenses, and remaining installments — all without internet dependency.",
    tags:  ["Flutter", "SqFlite", "Fl_Chart", "GetX", "Local Sync"],
    image:        "assets/assets/aqar_dashboard.png",
    secondaryImage: "assets/assets/aqar_activities.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#8b5cf6",
    features: [
      { icon: "fa-chart-pie",        title: "Dynamic Sales Analytics",  desc: "Comprehensive projects dashboard aggregating total contract sales, expenses, and pending installment logs in real-time." },
      { icon: "fa-users",            title: "Partner Workspace",        desc: "Integrated secure credentials manager designed to invite and sync ledger permissions across construction partners." },
      { icon: "fa-receipt",          title: "Active Cost Ledger",       desc: "Chronological transaction logging mapping concrete pouring, bricks, and labor costs with custom filters." },
      { icon: "fa-cloud-upload-alt", title: "Offline-First Sync",      desc: "High-performance SqFlite architecture preserving ledger modifications when offline, auto-indexing on internet recovery." }
    ],
    journey: [
      { phase: "PHASE 01 — BLUEPRINT", title: "The Financial Grid Concept",     desc: "Construction managers need high-density details on the go. We designed a clear grid dashboard tracking crucial sales-to-expense metrics at a single glance, avoiding nested sub-menus entirely." },
      { phase: "PHASE 02 — SYNC",      title: "Local Database Performance",    desc: "Designed an efficient SqFlite relational model mapping projects, expenses, and partners. The ledger synchronizes securely, reducing transaction collision rates to near-zero." },
      { phase: "PHASE 03 — REFINE",    title: "Atmospheric Micro-Interactions", desc: "Added subtle UI visual feedback for new transactions, custom date-range chart loaders, and smooth page flows using Flutter Animate tools." }
    ]
  },
  bostan: {
    title:    "Bostan (بُستان)",
    category: "SPIRITUAL TECH · AUDIO SYNC",
    subtitle: "A serene Quranic reading, reflection, and habit tracking companion. Designed to elevate daily spiritual habits through interactive progress metrics (مسار الحفظ), customizable reading environments, and a smooth verse-by-verse audio synchronization engine.",
    tags:  ["Flutter", "SqFlite", "Audio Player", "GetX", "Hive"],
    image:        "assets/assets/bostan_stats.png",
    secondaryImage: "assets/assets/bostan_settings.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#06b6d4",
    features: [
      { icon: "fa-book-open", title: "Serene Arabic Typography",    desc: "Highly-optimized vector Arabic glyph scaling for pixel-perfect Quranic text rendering at any zoom level on any device." },
      { icon: "fa-music",     title: "Verse-Synced Audio Player",   desc: "Verse-by-verse reciter synchronization with automatic scroll behavior, background playback, and audio focus interruption handling." },
      { icon: "fa-heart",     title: "Interactive Habit Tracker",   desc: "Visually striking weekly reading heatmaps and memorization path loops (مسار الحفظ) with streaks and milestone badges." },
      { icon: "fa-palette",   title: "OLED Ambient Dark Themes",    desc: "OLED-optimized dark designs with carefully calibrated contrast guidelines, custom Arabic fonts, and night-reading mode." }
    ],
    journey: [
      { phase: "PHASE 01 — DRAFTING",    title: "Arabic Glyphs Precision",    desc: "Arabic text rendering on cross-platform frameworks can be unstable. We implemented custom text span rendering algorithms to guarantee accurate ligatures, Tashkeel vowels, and smooth line breaking." },
      { phase: "PHASE 02 — PERFORMANCE", title: "Offline Storage Engine",     desc: "Designed an efficient SqFlite relational model mapping 6,000+ verses, bookmark logs, and user progress. Queries execute under 3ms due to custom column indexing strategies." },
      { phase: "PHASE 03 — EXPERIENCE",  title: "Sensory Audio Loops",         desc: "Built a robust background audio runner that gracefully handles OS-level audio focus interruptions, storing last heard offsets in local reactive preferences." }
    ]
  },
  animalconnect: {
    title:    "Animal Connect",
    category: "MARKETPLACE · REAL-TIME",
    subtitle: "A premium pet companion and wellness ecosystem. Featuring dynamic geo-location nearby indexing, micro-segmented product categories (Adoption, Food, Accessories), secure real-time partner chatting via Socket.io, and offline relational caching for seamless experiences.",
    tags:  ["Flutter", "Node.js", "MongoDB", "Socket.io", "GetX"],
    image:        "assets/assets/animal_connect_home.png",
    secondaryImage: "assets/assets/animal_connect_list.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#10b981",
    features: [
      { icon: "fa-map-marker-alt", title: "Geo-Location Proximity Search",   desc: "High-precision map-first indexing measuring buyer-to-seller coordinates across Egypt with sub-second distance calculations." },
      { icon: "fa-th-large",       title: "Micro-Segmented Marketplace",     desc: "Curated categorical routing splitting between live pet discovery, verified adoption paths, and premium nutrition/accessory catalogs." },
      { icon: "fa-paper-plane",    title: "Socket.io Bi-Directional Chat",   desc: "Instant live messaging with active typing indicators, read-receipt confirmations, and cross-platform push notification channels." },
      { icon: "fa-check-double",   title: "Verified Health Checklists",      desc: "Cryptographically signed animal wellness cards detailing certified vet vaccination logs and legal adoption contracts." }
    ],
    journey: [
      { phase: "PHASE 01 — ARCHITECTURE", title: "Map-First Listing Paradigms",  desc: "Pet trading demands immediate distance calculations. We built custom geohash grid queries in MongoDB, converting geographic coordinates into highly indexable strings for lightning-fast results." },
      { phase: "PHASE 02 — STREAMING",    title: "Reactive State & Real-Time",   desc: "Integrated Node.js backend streams using Socket.io cluster servers to distribute message events. Flutter local database caching shows past conversations instantly on app startup." },
      { phase: "PHASE 03 — POLISH",       title: "Atmospheric Visual Feedback",  desc: "Shipped dynamic scrolling list components with lazy image loaders and custom shimmer overlays ensuring a buttery 60fps experience even on low-spec hardware." }
    ]
  },
  tolabapp: {
    title:    "Tola'b App (طُلاَّب)",
    category: "PRODUCTIVITY · STUDENT TECH",
    subtitle: "A student-centric productivity hub built to centralize lecture notes, attendance tracking, exam countdowns, embedded PDF reader, and automated task reminders — all powered by an ultra-fast offline-first Hive architecture with optional Android home-screen widgets.",
    tags:  ["Flutter", "Hive DB", "Local Notifications", "PDF Reader", "GetX"],
    image:        "assets/assets/tolab_schedule.png",
    secondaryImage: "assets/assets/tolab_courses.png",
    demoLink: "#",
    repoLink: "https://github.com/IbrahimElshishtawy",
    accentColor: "#f59e0b",
    features: [
      { icon: "fa-calendar-alt", title: "Intelligent Weekly Planner", desc: "Auto-organizing weekly planners that merge class timings, exam countdown dates, and assignment deadlines into a single unified dashboard." },
      { icon: "fa-file-pdf",     title: "Embedded PDF Reader",        desc: "High-performance PDF and lecture note renderer featuring dark mode overrides, text highlights, and bookmarking." },
      { icon: "fa-bell",         title: "Proactive Task Alerts",      desc: "Smart local alarm channels reminding students of approaching tasks with progressive snooze actions and customizable ringtones." },
      { icon: "fa-chart-pie",    title: "Academic Metrics Dashboard", desc: "Visual trackers for GPA estimations, lecture attendance rates, and cumulative study hour timers with streak rewards." }
    ],
    journey: [
      { phase: "PHASE 01 — DISCOVER", title: "Understanding Student Pain Points", desc: "Students are overwhelmed by fragmented apps. We interviewed university focus groups to build a clean single-app dashboard summarizing 'What is next' within a high-density, low-clutter UI." },
      { phase: "PHASE 02 — ENGINE",   title: "Ultra-Fast Offline Sync",           desc: "Replaced SQLite with Hive DB for blazingly fast student data updates. Document caching handles offline PDF readings seamlessly without consuming excess device storage." },
      { phase: "PHASE 03 — SCALE",    title: "Home Screen Widgets",               desc: "Shipped Android Home Screen widgets using Flutter's native integration modules, keeping critical schedule timers visible directly from the user's phone home screen." }
    ]
  }
};

/* ═══════════════════════════════════════════════════════════
   INITIALIZATION
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initThreeJS();
  initCustomCursor();
  initCardTilting();
  initMagneticButtons();
  initTechSpotlights();
  initProjectCards();
  initProjectCardMouse();
  initCaseStudyOverlay();
  initContactForm();
  initScrollTimeline();
  initScrollHeader();
  initPageVisibility();

  setTimeout(fadeOutPreloader, 900);
});

/* ═══════════════════════════════════════════════════════════
   1. THREE.JS PARTICLE UNIVERSE
   ═══════════════════════════════════════════════════════════ */
function initThreeJS() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  /* ── Build Particle Geometry ── */
  const COUNT = 1400;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(COUNT * 3);
  const colors    = new Float32Array(COUNT * 3);

  const palette = [
    new THREE.Color('#8b5cf6'),
    new THREE.Color('#06b6d4'),
    new THREE.Color('#ffffff'),
    new THREE.Color('#4f46e5'),
    new THREE.Color('#ec4899'),
  ];

  for (let i = 0; i < COUNT * 3; i += 3) {
    const radius = Math.random() * 500 + 80;
    const theta  = Math.random() * Math.PI * 2;
    const phi    = Math.acos((Math.random() * 2) - 1);

    positions[i]     = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);

    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i]     = c.r;
    colors[i + 1] = c.g;
    colors[i + 2] = c.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color',    new THREE.BufferAttribute(colors,    3));

  particlesMaterial = new THREE.PointsMaterial({
    size:         4.5,
    map:          createGlowTexture(),
    vertexColors: true,
    transparent:  true,
    opacity:      0.72,
    blending:     THREE.AdditiveBlending,
    depthWrite:   false,
    sizeAttenuation: true,
  });

  particlesMesh = new THREE.Points(geometry, particlesMaterial);
  scene.add(particlesMesh);

  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onMouseMove);

  animate();
}

function createGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0,    'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.7)');
  g.addColorStop(0.6,  'rgba(139,92,246,0.3)');
  g.addColorStop(1,    'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 32, 32);
  const tex = new THREE.Texture(c);
  tex.needsUpdate = true;
  return tex;
}

function onWindowResize() {
  windowHalfX = window.innerWidth  / 2;
  windowHalfY = window.innerHeight / 2;
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e) {
  mouseX = (e.clientX - windowHalfX) * 0.14;
  mouseY = (e.clientY - windowHalfY) * 0.14;
}

function animate() {
  if (!isPageVisible) { animFrameId = requestAnimationFrame(animate); return; }

  animFrameId = requestAnimationFrame(animate);

  if (!particlesMesh || !camera || !renderer || !scene) return;

  particlesMesh.rotation.y += 0.0005;
  particlesMesh.rotation.x += 0.00025;

  targetX = mouseX;
  targetY = mouseY;

  camera.position.x += (targetX - camera.position.x) * 0.045;
  camera.position.y += (-targetY - camera.position.y) * 0.045;

  const scrollH = document.documentElement.scrollHeight - window.innerHeight || 1;
  camera.position.z = 400 - (window.scrollY / scrollH) * 170;

  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

function initPageVisibility() {
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
  });
}

/* ═══════════════════════════════════════════════════════════
   2. PRELOADER OUTRO
   ═══════════════════════════════════════════════════════════ */
function fadeOutPreloader() {
  const preloader = document.getElementById('cyber-preloader');
  if (!preloader) return;

  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';

  setTimeout(() => {
    preloader.style.display = 'none';
    triggerEntranceReveal();
  }, 700);
}

function triggerEntranceReveal() {
  if (typeof gsap === 'undefined') return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('header',
    { y: -25, opacity: 0 },
    { y: 0,   opacity: 1, duration: 0.7 }
  );

  tl.fromTo('.hero-reveal-text',
    { y: 45, opacity: 0 },
    { y: 0,  opacity: 1, duration: 1, stagger: 0.13 },
    '-=0.4'
  );

  tl.fromTo('.hero-reveal-avatar',
    { scale: 0.88, opacity: 0, rotateY: -12 },
    { scale: 1,    opacity: 1, rotateY: 0,  duration: 1.3, ease: 'elastic.out(1, 0.72)' },
    '-=0.85'
  );

  tl.fromTo('.hero-reveal-floating',
    { y: 18, opacity: 0 },
    { y: 0,  opacity: 1, duration: 0.8, stagger: 0.1 },
    '-=0.7'
  );

  tl.add(setupScrollTriggers, '-=0.2');
}

/* ═══════════════════════════════════════════════════════════
   3. GSAP SCROLL TRIGGERS
   ═══════════════════════════════════════════════════════════ */
function setupScrollTriggers() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* Bento cards stagger reveal */
  gsap.utils.toArray('.bento-reveal').forEach((el, i) => {
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  /* Count-up numbers */
  document.querySelectorAll('.count-number').forEach(el => {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate() { el.textContent = Math.floor(obj.val) + '+'; }
    });
  });

  /* Timeline nodes slide in */
  gsap.utils.toArray('.timeline-node').forEach(node => {
    gsap.fromTo(node,
      { x: -28, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: node, start: 'top 85%' }
      }
    );
  });
}

/* ═══════════════════════════════════════════════════════════
   4. CUSTOM CINEMATIC CURSOR
   ═══════════════════════════════════════════════════════════ */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const dot    = document.querySelector('.custom-cursor-dot');
  if (!cursor || !dot || typeof gsap === 'undefined') return;

  // Only on pointer devices
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.addEventListener('mousemove', e => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.22, ease: 'power2.out' });
    gsap.to(dot,    { x: e.clientX, y: e.clientY, duration: 0.04 });
  });

  const INTERACTABLES = 'a, button, .project-card, .glass-panel, input, textarea, select, .magnetic-btn';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTABLES)) document.body.classList.add('cursor-hover');
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(INTERACTABLES)) {
      if (!e.relatedTarget?.closest(INTERACTABLES)) {
        document.body.classList.remove('cursor-hover');
      }
    }
  });

  // Click pulse
  document.addEventListener('mousedown', () => {
    gsap.to(cursor, { scale: 0.8, duration: 0.1 });
  });
  document.addEventListener('mouseup', () => {
    gsap.to(cursor, { scale: 1, duration: 0.2, ease: 'back.out(2)' });
  });
}

/* ═══════════════════════════════════════════════════════════
   5. 3D CARD TILT (Parallax)
   ═══════════════════════════════════════════════════════════ */
function initCardTilting() {
  if (typeof gsap === 'undefined') return;

  const cards = document.querySelectorAll('.glass-panel, .project-card, .hero-avatar-tilt');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect    = card.getBoundingClientRect();
      const x       = e.clientX - rect.left;
      const y       = e.clientY - rect.top;
      const cx      = rect.width  / 2;
      const cy      = rect.height / 2;
      const isAvatar = card.classList.contains('hero-avatar-tilt');
      const maxR    = isAvatar ? 14 : 7;

      gsap.to(card, {
        rotateX: ((cy - y) / cy) * maxR,
        rotateY: ((x - cx) / cx) * maxR,
        transformPerspective: 1100,
        ease: 'power2.out',
        duration: 0.4
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, ease: 'power3.out', duration: 0.7 });
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   6. MAGNETIC BUTTONS
   ═══════════════════════════════════════════════════════════ */
function initMagneticButtons() {
  if (typeof gsap === 'undefined') return;

  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width  / 2;
      const y = e.clientY - r.top  - r.height / 2;
      gsap.to(btn, { x: x * 0.32, y: y * 0.32, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'power3.out' });
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   7. TECH CARD SPOTLIGHT
   ═══════════════════════════════════════════════════════════ */
function initTechSpotlights() {
  document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   8. PROJECT CARD MOUSE TRACKING (for radial gradient)
   ═══════════════════════════════════════════════════════════ */
function initProjectCardMouse() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   9. SCROLL TIMELINE DRAW
   ═══════════════════════════════════════════════════════════ */
function initScrollTimeline() {
  const progress = document.querySelector('.timeline-progress');
  const track    = document.querySelector('.timeline-track');
  if (!progress || !track) return;

  const update = () => {
    const r       = track.getBoundingClientRect();
    const offset  = window.innerHeight * 0.7;
    const start   = r.top - offset;
    const pct     = start < 0 ? Math.abs(start) / r.height * 100 : 0;
    progress.style.height = `${Math.max(0, Math.min(100, pct))}%`;
  };

  window.addEventListener('scroll', update, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   10. SCROLL HEADER SHRINK
   ═══════════════════════════════════════════════════════════ */
function initScrollHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 80) {
      header.style.paddingTop    = '8px';
      header.style.paddingBottom = '8px';
    } else {
      header.style.paddingTop    = '';
      header.style.paddingBottom = '';
    }
    lastY = y;
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   11. PROJECT CARDS — Click + Keyboard support
   ═══════════════════════════════════════════════════════════ */
function initProjectCards() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click',   () => openCaseStudy(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCaseStudy(card); }
    });
  });
}

function openCaseStudy(card) {
  const id   = card.getAttribute('data-project');
  const data = PROJECTS_DATA[id];
  if (!data) return;

  renderCaseStudy(data);

  const overlay = document.getElementById('case-study-overlay');
  if (!overlay) return;

  overlay.classList.add('active');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Focus the close button for accessibility
  setTimeout(() => {
    document.getElementById('close-overlay-btn')?.focus();
  }, 50);

  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.case-study-reveal',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out', stagger: 0.1, delay: 0.15 }
    );
  }
}

/* ═══════════════════════════════════════════════════════════
   12. CASE STUDY OVERLAY
   ═══════════════════════════════════════════════════════════ */
function initCaseStudyOverlay() {
  const closeBtn = document.getElementById('close-overlay-btn');
  if (!closeBtn) return;

  closeBtn.addEventListener('click', closeCaseStudy);

  // Close on backdrop click (outside content)
  document.getElementById('case-study-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('case-study-overlay')) closeCaseStudy();
  });
}

function closeCaseStudy() {
  const overlay = document.getElementById('case-study-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderCaseStudy(data) {
  const container = document.getElementById('case-study-content');
  if (!container) return;

  /* Build feature cards */
  const featuresHTML = data.features.map(f => `
    <div class="glass-panel p-6 flex flex-col gap-4 case-study-reveal" style="min-height:180px;">
      <div class="icon-box icon-box-purple flex-shrink-0">
        <i class="fas ${f.icon}" aria-hidden="true"></i>
      </div>
      <div>
        <h4 class="font-heading text-base font-bold text-white mb-2">${f.title}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">${f.desc}</p>
      </div>
    </div>
  `).join('');

  /* Build journey items */
  const journeyHTML = data.journey.map(j => `
    <div class="border border-white/[0.06] bg-white/[0.015] rounded-2xl p-6 case-study-reveal">
      <div class="text-[10px] font-bold text-purple-400 mb-2 tracking-wider uppercase">${j.phase}</div>
      <h4 class="font-heading text-sm font-bold text-white mb-2">${j.title}</h4>
      <p class="text-xs text-slate-400 leading-relaxed">${j.desc}</p>
    </div>
  `).join('');

  /* Build tech tags */
  const tagsHTML = data.tags.map(t => `
    <span class="cyber-badge text-[10px]">
      <i class="fab fa-flutter text-xs" aria-hidden="true"></i> ${t}
    </span>
  `).join('');

  container.innerHTML = `
    <!-- Aurora accent -->
    <div class="case-study-aurora" aria-hidden="true">
      <div style="background:radial-gradient(circle,${data.accentColor}22 0%,transparent 70%);position:absolute;top:-20%;right:-20%;width:70vw;height:70vw;border-radius:50%;filter:blur(80px);"></div>
    </div>

    <!-- Hero Block -->
    <div class="relative py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center min-h-[88vh]">
      
      <!-- Text side -->
      <div class="w-full lg:w-1/2 flex flex-col items-start justify-center z-10">
        <div class="flex flex-wrap gap-2 mb-5 case-study-reveal">
          ${data.category.split('·').map(c => `<span class="cyber-badge cyber-badge-cyan text-[9px]">${c.trim()}</span>`).join('')}
        </div>

        <h2 class="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight case-study-reveal">
          ${data.title}
        </h2>

        <p class="text-sm text-slate-300 leading-relaxed mb-8 max-w-lg case-study-reveal">
          ${data.subtitle}
        </p>

        <div class="flex flex-wrap gap-2 mb-8 case-study-reveal">
          ${tagsHTML}
        </div>

        <div class="flex flex-wrap gap-4 case-study-reveal">
          <a href="${data.repoLink}" target="_blank" rel="noopener noreferrer" class="magnetic-btn btn-outline flex items-center gap-2 text-xs py-3 px-6" aria-label="View GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub Repo
          </a>
        </div>
      </div>

      <!-- Mockup side -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 case-study-reveal">
        <div class="tilt-container">
          <div class="iphone-mockup" style="transform:rotateX(8deg) rotateY(-8deg);">
            <div class="iphone-notch" aria-hidden="true"></div>
            <div class="iphone-screen">
              <img src="${data.image}" alt="${data.title} — App Screenshot" class="iphone-img">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Features -->
    <div class="py-24 border-t border-white/[0.06] bg-black/20 px-4 md:px-12">
      <div class="max-w-7xl mx-auto">
        <span class="section-label case-study-reveal">CAPABILITIES</span>
        <h3 class="section-title mb-4 case-study-reveal">Core Infrastructure</h3>
        <p class="text-xs text-slate-400 max-w-lg mb-16 leading-relaxed case-study-reveal">
          Carefully structured subsystems enabling real-time, low-latency, and energy-efficient operations.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${featuresHTML}
        </div>
      </div>
    </div>

    <!-- The Journey -->
    <div class="py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-14">
      <div class="w-full lg:w-1/3">
        <span class="section-label case-study-reveal">CHRONICLES</span>
        <h3 class="section-title mb-4 case-study-reveal">The Journey</h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-6 case-study-reveal">
          Every phase of development was intentional — from research and architecture to polished deployment.
        </p>
        <div class="flex flex-col gap-3 case-study-reveal">
          <span class="text-xs text-slate-400 flex items-center gap-2">
            <i class="fas fa-check-circle text-purple-400 text-[11px]" aria-hidden="true"></i> Architecture Design
          </span>
          <span class="text-xs text-slate-400 flex items-center gap-2">
            <i class="fas fa-check-circle text-purple-400 text-[11px]" aria-hidden="true"></i> Performance Optimization
          </span>
          <span class="text-xs text-slate-400 flex items-center gap-2">
            <i class="fas fa-check-circle text-purple-400 text-[11px]" aria-hidden="true"></i> UX Micro-Interactions
          </span>
        </div>
      </div>

      <div class="w-full lg:w-2/3 flex flex-col gap-5">
        ${journeyHTML}
      </div>
    </div>

    <!-- Second Screenshot -->
    <div class="py-16 border-t border-white/[0.06] bg-black/20 px-4 md:px-12">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div class="w-full lg:w-1/2 case-study-reveal">
          <span class="section-label">ADDITIONAL SCREENS</span>
          <h3 class="section-title mb-4">More from the App</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Each screen is designed with pixel precision — balancing information density with visual clarity.
          </p>
        </div>
        <div class="w-full lg:w-1/2 flex justify-center case-study-reveal">
          <div class="tilt-container">
            <div class="iphone-mockup">
              <div class="iphone-notch" aria-hidden="true"></div>
              <div class="iphone-screen">
                <img src="${data.secondaryImage}" alt="${data.title} — Secondary Screenshot" class="iphone-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Footer -->
    <div class="py-24 border-t border-white/[0.06] text-center px-4 md:px-12">
      <div class="max-w-lg mx-auto glass-panel p-12 case-study-reveal">
        <h3 class="font-heading text-2xl font-extrabold text-white mb-4">Interested in this stack?</h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-8">
          Let's build something together. Whether it's a similar architecture or a unique challenge — I'm ready.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <a href="#contact" class="btn-glowing magnetic-btn flex items-center gap-2 text-xs py-3 px-6" onclick="closeCaseStudyGlobal()" aria-label="Go to contact section">
            <i class="fas fa-bolt text-yellow-300 text-[10px]" aria-hidden="true"></i> Start a Project
          </a>
          <a href="${data.repoLink}" target="_blank" rel="noopener noreferrer" class="btn-outline flex items-center gap-2 text-xs py-3 px-6" aria-label="View GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  `;

  // Re-init tilt on the new mockup elements
  initCardTilting();
  initMagneticButtons();
}

/* Global close (used in inline onclick) */
window.closeCaseStudyGlobal = closeCaseStudy;

/* ═══════════════════════════════════════════════════════════
   13. CONTACT FORM
   ═══════════════════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn     = document.getElementById('contact-submit-btn');
    const name    = document.getElementById('form-name')?.value.trim()    || '';
    const email   = document.getElementById('form-email')?.value.trim()   || '';
    const message = document.getElementById('form-message')?.value.trim() || '';

    if (!name || !email || !message) {
      shakeButton(btn);
      return;
    }

    if (!isValidEmail(email)) {
      shakeButton(btn);
      return;
    }

    if (!btn) return;

    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2" aria-hidden="true"></i> Transmitting...';
    btn.disabled  = true;
    btn.style.opacity = '0.75';

    // Simulate transmission (replace with actual backend in production)
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check mr-2" aria-hidden="true"></i> Message Transmitted!';
      btn.style.background  = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
      btn.style.boxShadow   = '0 0 28px rgba(16,185,129,0.45)';
      btn.style.opacity     = '1';

      setTimeout(() => {
        form.reset();
        btn.innerHTML     = orig;
        btn.disabled      = false;
        btn.style.background  = '';
        btn.style.boxShadow   = '';
      }, 3200);
    }, 1600);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeButton(btn) {
  if (!btn || typeof gsap === 'undefined') return;
  gsap.fromTo(btn, { x: -8 }, { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
}

/* ═══════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════ */
function debounce(fn, delay = 100) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

window.addEventListener('resize', debounce(onWindowResize), { passive: true });

console.log('%c✅ Portfolio Engine Ready', 'color: #10b981; font-weight: bold;');
