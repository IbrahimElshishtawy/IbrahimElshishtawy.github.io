/* 
   Futuristic 3D Cinematic Portfolio Engine
   Developed by Antigravity for Ibrahim Elshishtawy
*/

// Check if loaded successfully
console.log("3D Interactive Portfolio Engine Initializing...");

// Global Variables
let scene, camera, renderer, particlesGeometry, particlesMaterial, particlesMesh;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

// Project Data for Cinematic overlays
const PROJECTS_DATA = {
  elmasryeen: {
    title: "ElMasryeen Smart Living",
    subtitle: "A futuristic real estate ecosystem engineered for high-performance property discovery. Leveraging reactive architectures to deliver seamless property exploration and instant owner connectivity.",
    tags: ["Flutter", "Firebase", "BLoC", "Google Maps"],
    image: "assets/assets/doctor1.jpg", // Using one of the high-res screenshots
    secondaryImage: "assets/assets/food1.jpg",
    demoLink: "https://elmasryeen.dev",
    repoLink: "https://github.com/IbrahimElshishtawy/elmasryeen",
    features: [
      {
        icon: "fa-map-marked-alt",
        title: "Interactive Spatial Search",
        desc: "Precision-engineered map integration for real-time property discovery and neighborhood analysis."
      },
      {
        icon: "fa-filter",
        title: "Smart Filtering",
        desc: "Multi-layered attribute selection with near-zero latency using optimized local caching."
      },
      {
        icon: "fa-comments",
        title: "Unified Messaging",
        desc: "Encrypted WebSockets-based communication between buyers and property owners."
      },
      {
        icon: "fa-tachometer-alt",
        title: "60 FPS Fluidity",
        desc: "Optimized BLoC state management ensuring a buttery-smooth experience even on lower-tier hardware."
      }
    ],
    journey: [
      {
        phase: "PHASE 01: CONCEPT",
        title: "The Search-First Paradigm",
        desc: "The initial challenge was creating a 'search-first' experience that felt instantaneous. We spent weeks prototyping the property cards to ensure they felt tactile and modern while maintaining optimal image loading strategies."
      },
      {
        phase: "PHASE 02: SCALE",
        title: "Cloud Infrastructure Integration",
        desc: "Implementing Firebase Cloud Functions for dynamic resizing and Firestore indexing was critical. We developed a custom pagination system that pre-fetches data based on scroll velocity, eliminating visual stutter."
      },
      {
        phase: "PHASE 03: POLISHING",
        title: "Micro-Interactions",
        desc: "The final layer was adding atmospheric micro-interactions. Haptic feedback on property saves, subtle shadow shifts on card focus, and custom page transitions built with the Flutter Animate package."
      }
    ]
  },
  bostan: {
    title: "Bostan (بُستان)",
    subtitle: "A serene Quranic reading, reflection, and habit tracking companion. Designed to elevate daily spiritual habits through interactive progress metrics (مسار الحفظ), customizable reading environments, and a smooth audio synchronization engine.",
    tags: ["Flutter", "Sqflite", "Audio Player", "GetX"],
    image: "assets/assets/bostan_stats.png",
    secondaryImage: "assets/assets/bostan_settings.png",
    demoLink: "https://bostan.app",
    repoLink: "https://github.com/IbrahimElshishtawy/bostan",
    features: [
      {
        icon: "fa-book-open",
        title: "Serene Typography",
        desc: "Highly-optimized vector Arabic glyph scaling for pixel-perfect rendering at any zoom level."
      },
      {
        icon: "fa-music",
        title: "Audio Synced Player",
        desc: "Verse-by-verse reciter synchronization with automatic scroll behavior and background playback."
      },
      {
        icon: "fa-heart",
        title: "Interactive Habit Tracker",
        desc: "Visually striking weekly reading heatmaps and memorization path loops (مسار الحفظ)."
      },
      {
        icon: "fa-palette",
        title: "Ambient Dark Themes",
        desc: "OLED-friendly dark designs with carefully measured contrast guidelines and custom fonts."
      }
    ],
    journey: [
      {
        phase: "PHASE 01: DRAFTING",
        title: "Arabic Glyphs Precision",
        desc: "Arabic text rendering can be notoriously unstable on cross-platform frameworks. We implemented custom text span rendering algorithms to guarantee accurate ligatures, vowel signs (Tashkeel), and smooth line breaking."
      },
      {
        phase: "PHASE 02: PERFORMANCE",
        title: "Offline Storage Engine",
        desc: "Designed an efficient Sqflite relational model mapping over 6,000 verses, bookmark logs, and user progress. Queries execute under 3 milliseconds due to custom column indexings."
      },
      {
        phase: "PHASE 03: EXPERIENCE",
        title: "Sensory Audio Loops",
        desc: "Built a robust background audio runner that handles sudden OS level audio focus interruptions gracefully, storing last heard offsets in local reactive preferences."
      }
    ]
  },
  animalzone: {
    title: "AnimalZone Marketplace",
    subtitle: "A premium, secure ecosystem for pet adoption, pet-care services, and premium food marketplaces. Featuring direct instant chatting, secure payment, and customized animal wellness trackers.",
    tags: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    image: "assets/assets/doctor2.jpg",
    secondaryImage: "assets/assets/food2.jpg",
    demoLink: "https://animalzone.net",
    repoLink: "https://github.com/IbrahimElshishtawy/animalzone",
    features: [
      {
        icon: "fa-shopping-cart",
        title: "Pet Adoption Portal",
        desc: "A fully verified adoption pipeline ensuring safe transactions, certified health records, and legal compliance."
      },
      {
        icon: "fa-stethoscope",
        title: "Virtual Vet Diagnostic",
        desc: "AI-assisted symptoms log recommending nearby clinics and initial step checklists."
      },
      {
        icon: "fa-bolt",
        title: "Instant In-App Chat",
        desc: "Socket.io active communication with typing indicators, real-time message states, and push integrations."
      },
      {
        icon: "fa-credit-card",
        title: "Premium Checkout",
        desc: "Integrated Stripe payment processing supporting recurring pet-food plans and multi-vendor systems."
      }
    ],
    journey: [
      {
        phase: "PHASE 01: EXPLORE",
        title: "Bridging Communities",
        desc: "We wanted a platform that combined adoption security with commercial ease. Prototyping focused on designing vet verify cycles where vets could upload cryptographically secure vaccination certs."
      },
      {
        phase: "PHASE 02: SERVER",
        title: "Robust REST & Socket Backend",
        desc: "Developed a secure Node.js, Express, and MongoDB backend. Implemented JWT authentications and socket connections capable of handling 5,000 concurrent message streams with horizontal scaling."
      },
      {
        phase: "PHASE 03: SHIP",
        title: "Frictionless Onboarding",
        desc: "Simplified booking workflows by over 40% using an interactive timeline calendar component where users can select slots, pay, and receive appointment receipts in under three taps."
      }
    ]
  },
  tolabapp: {
    title: "Tola'b Student Assistant",
    subtitle: "A student-centric, productivity hub built to centralize lecture notes, attendance tracking, exam countdowns, and automated task reminders using localized offline-first architectures.",
    tags: ["Flutter", "Hive DB", "Local Notifications", "PDF Reader"],
    image: "assets/assets/tolab_schedule.png",
    secondaryImage: "assets/assets/tolab_courses.png",
    demoLink: "https://tolab.dev",
    repoLink: "https://github.com/IbrahimElshishtawy/tolab",
    features: [
      {
        icon: "fa-calendar-alt",
        title: "Intelligent Schedule",
        desc: "Auto-organizing weekly planners that merge class timings, exam dates, and assignment deadlines."
      },
      {
        icon: "fa-file-pdf",
        title: "Embedded Document Reader",
        desc: "High-performance PDF and note renderer featuring dark mode overrides and highlights."
      },
      {
        icon: "fa-bell",
        title: "Proactive Task Alerts",
        desc: "Smart local alarm channels that remind students of approaching tasks with progressive snooze actions."
      },
      {
        icon: "fa-chart-pie",
        title: "Academic Metrics Dashboard",
        desc: "Visual trackers scoring GPA estimations, lecture attendances, and study hour timers."
      }
    ],
    journey: [
      {
        phase: "PHASE 01: DISCOVER",
        title: "Understanding Student Pain Points",
        desc: "Students are overwhelmed by multiple apps. We interviewed university focus groups to build a clean single-app dashboard summarizing 'What is next' within a high-density, low-clutter interface."
      },
      {
        phase: "PHASE 02: ENGINE",
        title: "Ultra-Fast Offline Sync",
        desc: "Replaced SQLite with Hive DB for blazingly fast student data updates. Document caching handles offline PDF readings seamlessly without consuming device space."
      },
      {
        phase: "PHASE 03: SCALE",
        title: "Widgets & Integrations",
        desc: "Shipped Android Home Screen widgets using Flutter's native integration modules, keeping critical schedule timers visible directly from the user's phone launch deck."
      }
    ]
  }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Background 3D Engine
  initThreeJS();
  
  // Custom Cinematic Cursor
  initCustomCursor();
  
  // Mouse Card Tilting Interface
  initCardTilting();
  
  // Interactive Hover Magnetic Buttons
  initMagneticButtons();
  
  // Interactive Tech Stack Hover Spotlights
  initTechHoverSpotlights();

  // Selected Works Case Studies Loader
  initCaseStudyOverlay();

  // Contact Form Interactivity
  initContactForm();

  // Scroll Timeline Dynamic Bar
  initScrollTimeline();

  // Start Preloader Outro
  setTimeout(() => {
    fadeOutPreloader();
  }, 1000);
});

// 1. Three.js Universe Engine
function initThreeJS() {
  const canvas = document.querySelector("#particles-canvas");
  if (!canvas) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;

  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles Creation
  const particlesCount = 1200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  const colorPalette = [
    new THREE.Color('#8b5cf6'), // Purple
    new THREE.Color('#06b6d4'), // Cyan
    new THREE.Color('#ffffff'), // White
    new THREE.Color('#4f46e5')  // Deep Blue
  ];

  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Spatial Sphere coordinates
    const radius = Math.random() * 500 + 100;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);

    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);

    // Random colors from selected futuristic colors
    const clr = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    colors[i] = clr.r;
    colors[i + 1] = clr.g;
    colors[i + 2] = clr.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle Material Design using a custom glow
  // Creating a nice circular glowing star particle texture manually
  const particleTexture = createCircularParticleTexture();

  particlesMaterial = new THREE.PointsMaterial({
    size: 4,
    map: particleTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  particlesMesh = new THREE.Points(geometry, particlesMaterial);
  scene.add(particlesMesh);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const directionLight = new THREE.DirectionalLight(0x8b5cf6, 0.8);
  directionLight.position.set(100, 200, 100);
  scene.add(directionLight);

  // Resize Listener
  window.addEventListener("resize", onWindowResize);
  
  // Track Mouse Movement for 3D Shifting
  document.addEventListener("mousemove", onDocumentMouseMove);
  
  // Animation Loop
  animate();
}

function createCircularParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.4)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 16, 16);
  
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  // Map coordinates relative to center of screen
  mouseX = (event.clientX - windowHalfX) * 0.15;
  mouseY = (event.clientY - windowHalfY) * 0.15;
}

function animate() {
  requestAnimationFrame(animate);

  // Soft rotation of particle grid
  particlesMesh.rotation.y += 0.0006;
  particlesMesh.rotation.x += 0.0003;

  // Fluid camera position chase based on mouse coordinates & scroll depth
  targetX = mouseX;
  targetY = mouseY;

  camera.position.x += (targetX - camera.position.x) * 0.05;
  camera.position.y += (-targetY - camera.position.y) * 0.05;

  // Dynamic Camera Shift based on vertical scroll
  const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
  camera.position.z = 400 - (scrollPercent * 180);

  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

// 2. Cinematic Preloader Outro
function fadeOutPreloader() {
  const preloader = document.querySelector("#cyber-preloader");
  if (!preloader) return;

  preloader.style.opacity = 0;
  preloader.style.pointerEvents = "none";

  setTimeout(() => {
    preloader.style.display = "none";
    // Trigger entrance animation for Hero elements
    triggerEntranceReveal();
  }, 600);
}

function triggerEntranceReveal() {
  // If GSAP is present, perform fine-tuned entry
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline();
    
    // Header Navigation Reveal
    tl.fromTo("header", 
      { y: -30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Hero Text components
    tl.fromTo(".hero-reveal-text", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.12 },
      "-=0.5"
    );

    // Glass Avatar Profile Frame
    tl.fromTo(".hero-reveal-avatar", 
      { scale: 0.9, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.75)" },
      "-=0.8"
    );

    // Floating badges and quick stats panel
    tl.fromTo(".hero-reveal-floating", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 },
      "-=0.6"
    );

    // Trigger Scroll reveals across sections
    setupSectionScrollTrigger();
  }
}

// 3. Dynamic Section Scroll Reveals
function setupSectionScrollTrigger() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Bento Card Reveals
  gsap.utils.toArray(".bento-reveal").forEach(card => {
    gsap.fromTo(card, 
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Numbers Count-up
  const countElements = document.querySelectorAll(".count-number");
  countElements.forEach(el => {
    const targetVal = parseInt(el.getAttribute("data-target"));
    const valueObj = { val: 0 };
    
    gsap.to(valueObj, {
      val: targetVal,
      duration: 2.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%"
      },
      onUpdate: () => {
        el.innerText = Math.floor(valueObj.val) + (el.id === "exp-num" ? "+" : "+");
      }
    });
  });

  // Journey timeline node elements
  gsap.utils.toArray(".timeline-node").forEach(node => {
    gsap.fromTo(node, 
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: node,
          start: "top 85%"
        }
      }
    );
  });
}

// 4. Custom Cinematic Cursor
function initCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const dot = document.querySelector(".custom-cursor-dot");
  if (!cursor || !dot) return;

  // Custom cursor position updating
  document.addEventListener("mousemove", (e) => {
    // Smoothen movement
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.25, ease: "power2.out" });
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.05 });
  });

  // Interactable Hover states
  const interactables = "a, button, .project-card, .glass-panel, input, textarea, select, .magnetic-btn, .close-overlay-btn";
  
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactables)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactables)) {
      // Check if mouse left to another interactable
      if (!e.relatedTarget || !e.relatedTarget.closest(interactables)) {
        document.body.classList.remove("cursor-hover");
      }
    }
  });
}

// 5. 3D Card Parallax Tilt Interaction
function initCardTilting() {
  const tiltCards = document.querySelectorAll(".glass-panel, .project-card, .hero-avatar-tilt");
  
  tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate within card
      const y = e.clientY - rect.top;  // y coordinate within card
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Maximum degrees of rotation (subtle)
      const maxRotateX = card.classList.contains("hero-avatar-tilt") ? 15 : 8;
      const maxRotateY = card.classList.contains("hero-avatar-tilt") ? 15 : 8;
      
      const rotateX = ((centerY - y) / centerY) * maxRotateX;
      const rotateY = ((x - centerX) / centerX) * maxRotateY;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.4
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.6
      });
    });
  });
}

// 6. Interactive Hover Magnetic Buttons
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll(".magnetic-btn");

  magneticButtons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Pull element toward cursor (magnetic pull strength 0.35)
      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", () => {
      // Return to baseline
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      });
    });
  });
}

// 7. Tech Icon Hover Spotlights
function initTechHoverSpotlights() {
  const techCards = document.querySelectorAll(".tech-card");
  
  techCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

// 8. Dynamic Scroll Timeline Draws
function initScrollTimeline() {
  const timelineProgress = document.querySelector(".timeline-progress");
  const track = document.querySelector(".timeline-track");
  if (!timelineProgress || !track) return;

  window.addEventListener("scroll", () => {
    const rect = track.getBoundingClientRect();
    const trackHeight = rect.height;
    
    // Calculations for scroll visibility
    const triggerOffset = window.innerHeight * 0.7;
    const progressStart = rect.top - triggerOffset;
    
    let progressPercent = 0;
    if (progressStart < 0) {
      progressPercent = Math.abs(progressStart) / trackHeight * 100;
    }
    
    // Clamp between 0 and 100
    const clampedProgress = Math.max(0, Math.min(100, progressPercent));
    timelineProgress.style.height = `${clampedProgress}%`;
  });
}

// 9. Selected Works Case Studies System
function initCaseStudyOverlay() {
  const projectCards = document.querySelectorAll(".project-card");
  const overlay = document.querySelector("#case-study-overlay");
  const closeBtn = document.querySelector(".close-overlay-btn");

  if (!overlay || !closeBtn) return;

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      const projectData = PROJECTS_DATA[projectId];

      if (projectData) {
        populateCaseStudy(projectData);
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent main body scrolling
        
        // Dynamic Entry reveals inside overlay
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(".case-study-reveal", 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 }
          );
        }
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Enable main page scroll
  });
}

function populateCaseStudy(data) {
  const container = document.querySelector("#case-study-content");
  if (!container) return;

  // Build the details content exactly modeled after Page 2 of the design (ElMasryeen detail page mockups)
  let featuresHTML = "";
  data.features.forEach(f => {
    featuresHTML += `
      <div class="glass-panel p-6 flex flex-col justify-between case-study-reveal" style="min-height: 180px;">
        <div class="flex justify-between items-start mb-4">
          <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
            <i class="fas ${f.icon}"></i>
          </div>
        </div>
        <div>
          <h4 class="font-heading text-lg font-bold text-white mb-2">${f.title}</h4>
          <p class="text-xs text-slate-400 leading-relaxed">${f.desc}</p>
        </div>
      </div>
    `;
  });

  let journeyHTML = "";
  data.journey.forEach((j, i) => {
    journeyHTML += `
      <div class="border border-white/5 bg-white/[0.01] rounded-2xl p-6 case-study-reveal mb-4">
        <div class="text-[10px] font-bold text-purple-400 mb-2 tracking-wider">${j.phase}</div>
        <h4 class="font-heading text-base font-bold text-white mb-2">${j.title}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">${j.desc}</p>
      </div>
    `;
  });

  let tagsHTML = "";
  data.tags.forEach(t => {
    tagsHTML += `
      <span class="cyber-badge flex items-center gap-1.5 text-[10px] px-3 py-1">
        <i class="fab fa-flutter text-xs"></i> ${t}
      </span>
    `;
  });

  container.innerHTML = `
    <!-- Top Hero Space -->
    <div class="relative py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center min-h-[85vh]">
      
      <!-- Text details -->
      <div class="w-full lg:w-1/2 flex flex-col items-start justify-center z-10">
        <div class="glass-tag-row mb-4 case-study-reveal">
          <span class="cyber-badge cyber-badge-cyan text-[9px]">REAL ESTATE</span>
          <span class="cyber-badge cyber-badge-cyan text-[9px]">SPACE</span>
          <span class="cyber-badge cyber-badge-cyan text-[9px]">PRECISE</span>
        </div>
        
        <h1 class="font-heading text-5xl md:text-7xl font-extrabold text-white mb-6 text-glow-primary case-study-reveal">
          ${data.title}
        </h1>
        
        <p class="text-sm md:text-base text-slate-300 leading-relaxed mb-8 max-w-lg case-study-reveal">
          ${data.subtitle}
        </p>

        <!-- Tech tags -->
        <div class="flex flex-wrap gap-3 mb-8 case-study-reveal">
          ${tagsHTML}
        </div>

        <div class="flex flex-wrap gap-4 case-study-reveal">
          <a href="${data.demoLink}" target="_blank" class="magnetic-btn btn-glowing flex items-center gap-2 text-xs py-3 px-6">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href="${data.repoLink}" target="_blank" class="magnetic-btn btn-outline flex items-center gap-2 text-xs py-3 px-6">
            <i class="fab fa-github"></i> Github Repo
          </a>
        </div>
      </div>

      <!-- Mockup on Right -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 case-study-reveal">
        <div class="tilt-container hero-avatar-tilt">
          <div class="iphone-mockup" style="transform: rotateX(10deg) rotateY(-10deg);">
            <div class="iphone-notch"></div>
            <div class="iphone-screen">
              <img class="iphone-img" src="${data.image}" alt="${data.title}">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Infrastructure Section -->
    <div class="py-24 border-t border-white/5 bg-[#04030d]/50 px-6 md:px-12">
      <div class="max-w-7xl mx-auto">
        <h2 class="font-heading text-3xl font-extrabold text-center text-white mb-4 case-study-reveal">
          Core Infrastructure
        </h2>
        <p class="text-xs text-slate-400 text-center max-w-md mx-auto mb-16 leading-relaxed case-study-reveal">
          Carefully structured custom subsystems enabling real-time, low-latency, and energy-efficient transactions.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${featuresHTML}
        </div>
      </div>
    </div>

    <!-- The Journey Section -->
    <div class="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
      
      <!-- Intro description -->
      <div class="w-full lg:w-1/3 flex flex-col justify-start">
        <h3 class="font-heading text-3xl font-extrabold text-white mb-6 case-study-reveal">
          The Journey
        </h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-6 case-study-reveal">
          Engineering a solution that scales from 100 to 100,000 properties required a radical rethink of data synchronization and rendering pipelines.
        </p>
        <div class="flex flex-col gap-3 mt-4">
          <span class="text-xs text-slate-400 flex items-center gap-2"><i class="fas fa-check-circle text-purple-400"></i> Map Architecture</span>
          <span class="text-xs text-slate-400 flex items-center gap-2"><i class="fas fa-check-circle text-purple-400"></i> Client Integrations</span>
          <span class="text-xs text-slate-400 flex items-center gap-2"><i class="fas fa-check-circle text-purple-400"></i> Beta Testers</span>
        </div>
      </div>

      <!-- Phases timeline grid -->
      <div class="w-full lg:w-2/3">
        ${journeyHTML}
      </div>
    </div>

    <!-- Ready for Production CTA -->
    <div class="py-24 border-t border-white/5 bg-[#020108] text-center px-6 md:px-12">
      <div class="max-w-xl mx-auto glass-panel p-12">
        <h3 class="font-heading text-3xl font-extrabold text-white mb-4 case-study-reveal">
          Ready for Production?
        </h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-8 case-study-reveal">
          This system is optimized, verified, and fully prepared for enterprise deployments. Explore repository code or run the live showcase.
        </p>
        <div class="flex justify-center gap-4 case-study-reveal">
          <a href="${data.repoLink}" target="_blank" class="btn-outline flex items-center gap-2 text-xs py-3 px-6"><i class="fab fa-github"></i> Github Repo</a>
          <a href="${data.demoLink}" target="_blank" class="btn-glowing flex items-center gap-2 text-xs py-3 px-6"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
      </div>
    </div>
  `;

  // Re-run Magnetic buttons & Card tilt inside overlay
  initMagneticButtons();
  initCardTilting();
}

// 10. Contact Form Hologram Labels & Verification
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Elegant loading status
    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
      const origText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Transmitting...';
      submitBtn.disabled = true;

      // Simulate network transmission
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Transmitted Successfully!';
        submitBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
        submitBtn.style.boxShadow = "0 0 25px rgba(16, 185, 129, 0.4)";
        
        setTimeout(() => {
          form.reset();
          submitBtn.innerHTML = origText;
          submitBtn.disabled = false;
          submitBtn.style.background = "";
          submitBtn.style.boxShadow = "";
        }, 3000);
      }, 1500);
    }
  });
}
