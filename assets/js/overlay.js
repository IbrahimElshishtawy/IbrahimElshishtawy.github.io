/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v3.0
   Project Detail Overlays (overlay.js)
   ============================================================ */

'use strict';

/* ── OPEN CASE STUDY ────────────────────────────────────────── */
function openCaseStudy(cardOrId) {
  let id;
  if (typeof cardOrId === 'string') {
    id = cardOrId;
  } else {
    id = cardOrId.getAttribute('data-project');
  }

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

/* ── CLOSE CASE STUDY ───────────────────────────────────────── */
function closeCaseStudy() {
  const overlay = document.getElementById('case-study-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ── RENDER CASE STUDY CONTENT ──────────────────────────────── */
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

  /* Smart asset selector: If project has screenshots, render 3D iPhone mockup. 
     If it is a text-based learning app, render a stunning glowing Holographic Code Blueprint! */
  let mockupHTML = '';
  let additionalScreenHTML = '';

  if (data.image) {
    mockupHTML = `
      <div class="iphone-mockup" style="transform:rotateX(8deg) rotateY(-8deg);">
        <div class="iphone-notch" aria-hidden="true"></div>
        <div class="iphone-screen">
          <img src="${data.image}" alt="${data.title} — App Screenshot" class="iphone-img">
        </div>
      </div>
    `;
    
    if (data.secondaryImages && Array.isArray(data.secondaryImages)) {
      const galleryLabels = data.screenshotLabels || [];

      const galleryCards = data.secondaryImages.map((img, idx) => {
        const label = galleryLabels[idx] || `Screen ${idx + 1}`;
        return `
          <div class="gallery-screen-card case-study-reveal group">
            <div class="gallery-screen-img-wrap">
              <img src="${img}" alt="${data.title} — ${label}" loading="lazy" class="gallery-screen-img">
              <div class="gallery-screen-overlay">
                <span class="gallery-screen-label">${label}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');

      additionalScreenHTML = `
        <div class="py-20 border-t border-white/[0.06] bg-black/20 px-4 md:px-12">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-14 case-study-reveal">
              <span class="section-label">APP GALLERY</span>
              <h3 class="section-title mb-4">More from the App</h3>
              <p class="text-xs text-slate-400 leading-relaxed max-w-lg mx-auto">
                A closer look at the real screens built into ${data.title} — designed with pixel precision, atmospheric depth, and full RTL Arabic support.
              </p>
            </div>
            <div class="gallery-screen-grid">
              ${galleryCards}
            </div>
          </div>
        </div>
      `;
    } else if (data.secondaryImage) {
      additionalScreenHTML = `
        <div class="py-16 border-t border-white/[0.06] bg-black/20 px-4 md:px-12">
          <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div class="w-full lg:w-1/2 case-study-reveal">
              <span class="section-label">ADDITIONAL SCREENS</span>
              <h3 class="section-title mb-4">More from the App</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Each screen is designed with pixel precision — balancing high information density with beautiful, atmospheric visual clarity.
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
      `;
    }
  } else {
    // Generate high-tier holographic vector code block for learning apps
    mockupHTML = `
      <div class="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl border border-cyan-500/20 bg-cyan-950/10 p-8 flex flex-col justify-between overflow-hidden backdrop-blur-xl" style="transform:rotateX(8deg) rotateY(-8deg); box-shadow: 0 30px 70px -15px rgba(0,0,0,0.8), 0 0 35px rgba(6, 182, 212, 0.15);">
        <!-- Glowing grid background -->
        <div style="position:absolute; inset:0; background:linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px); background-size: 20px 20px;" aria-hidden="true"></div>
        <div style="position:absolute; top:-20%; left:-20%; width:140%; height:140%; background:radial-gradient(circle at 50% 50%, rgba(6,182,212,0.15) 0%, transparent 60%); pointer-events:none;" aria-hidden="true"></div>
        
        <div class="z-10 text-left">
          <div class="flex justify-between items-center mb-6">
            <span class="cyber-badge cyber-badge-cyan text-[10px]"><i class="fas fa-microchip mr-1" aria-hidden="true"></i> CORE SYSTEM LOGIC</span>
            <span class="text-[9px] font-bold text-slate-500 uppercase tracking-widest">BUILD SCHEMA v3.1</span>
          </div>
          
          <div class="font-mono text-cyan-400 text-xs leading-relaxed mb-6">
            <p class="text-white/40">// SYSTEM ARCHITECTURE DATA FLOW</p>
            <p class="mt-1"><span class="text-purple-400">import</span> 'package:clean_architecture/core.dart';</p>
            <p class="mt-1"><span class="text-purple-400">void</span> <span class="text-yellow-400">initializeSubsystem</span>() <span class="text-white/60">{</span></p>
            <p class="pl-4 mt-0.5 text-slate-300">locator.registerLazySingleton(() => ApiClient());</p>
            <p class="pl-4 mt-0.5 text-slate-300">locator.registerFactory(() => ServiceController(locator()));</p>
            <p class="pl-4 mt-0.5 text-slate-300">print(<span class="text-emerald-400">"🚀 ${data.title} Subsystem Active"</span>);</p>
            <p class="text-white/60">}</p>
          </div>
        </div>

        <div class="z-10 flex justify-between items-end text-left">
          <div>
            <span class="block text-[8px] font-bold text-slate-500 tracking-wider uppercase mb-1">SYSTEM STATE</span>
            <span class="cyber-badge text-green-400 border-green-500/30 bg-green-500/10 text-[9px]">ACTIVE</span>
          </div>
          <div class="text-right">
            <span class="block text-[8px] font-bold text-slate-500 tracking-wider uppercase mb-1">ACCENT FLOW</span>
            <span class="font-heading font-black text-white tracking-widest text-xs">${data.title.toUpperCase()}</span>
          </div>
        </div>
      </div>
    `;
    
    // Additional conceptual visual
    additionalScreenHTML = `
      <div class="py-16 border-t border-white/[0.06] bg-black/20 px-4 md:px-12">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div class="w-full lg:w-1/2 case-study-reveal text-left">
            <span class="section-label">ARCHITECTURAL DESIGN</span>
            <h3 class="section-title mb-4">Clean Architecture Schema</h3>
            <p class="text-xs text-slate-400 leading-relaxed max-w-md">
              Constructed according to strict Clean Architecture design rules. This decouples the core domain models and business logic layer from dynamic UI adapters, framework states, and external DB platforms, creating bulletproof modular systems.
            </p>
          </div>
          <div class="w-full lg:w-1/2 flex justify-center case-study-reveal">
            <div class="relative w-full aspect-[16/9] max-w-lg rounded-2xl border border-purple-500/20 bg-purple-950/10 p-6 flex flex-col justify-between overflow-hidden backdrop-blur-md">
              <div style="position:absolute; inset:0; background:linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px); background-size: 24px 24px;" aria-hidden="true"></div>
              
              <div class="flex justify-between items-center mb-4 z-10 text-left">
                <span class="cyber-badge text-[9px]"><i class="fas fa-layer-group mr-1" aria-hidden="true"></i> STACK SPECIFICATION</span>
                <span class="text-[9px] font-bold text-slate-500 tracking-widest">LAYER FLOW</span>
              </div>
              
              <div class="flex-1 flex flex-col justify-center gap-2.5 z-10">
                <div class="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center text-xs font-bold text-purple-300">PRESENTATION LAYER (UI, BLoC / State Controllers)</div>
                <div class="text-center text-[10px] text-slate-500 font-bold"><i class="fas fa-arrow-down" aria-hidden="true"></i> invokes</div>
                <div class="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center text-xs font-bold text-cyan-300">DOMAIN LAYER (Entities, Use Cases, Interfaces)</div>
                <div class="text-center text-[10px] text-slate-500 font-bold"><i class="fas fa-arrow-up" aria-hidden="true"></i> implements</div>
                <div class="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-xs font-bold text-emerald-300">DATA LAYER (Repositiories, local DB / REST Datasources)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <!-- Aurora accent -->
    <div class="case-study-aurora" aria-hidden="true">
      <div style="background:radial-gradient(circle,${data.accentColor}22 0%,transparent 70%);position:absolute;top:-20%;right:-20%;width:70vw;height:70vw;border-radius:50%;filter:blur(80px);"></div>
    </div>

    <!-- Hero Block -->
    <div class="relative py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center min-h-[88vh]">
      
      <!-- Text side -->
      <div class="w-full lg:w-1/2 flex flex-col items-start justify-center z-10 text-left">
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
          <a href="${data.repoLink}" target="_blank" rel="noopener noreferrer" class="magnetic-btn btn-outline flex items-center gap-2 text-xs py-3 px-6" aria-label="View GitHub profile repository">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub Profile
          </a>
        </div>
      </div>

      <!-- Mockup side -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 case-study-reveal">
        <div class="tilt-container">
          ${mockupHTML}
        </div>
      </div>
    </div>

    <!-- Core Features -->
    <div class="py-24 border-t border-white/[0.06] bg-black/20 px-4 md:px-12 text-left">
      <div class="max-w-7xl mx-auto">
        <span class="section-label case-study-reveal">CAPABILITIES</span>
        <h3 class="section-title mb-4 case-study-reveal">Core Infrastructure</h3>
        <p class="text-xs text-slate-400 max-w-lg mb-16 leading-relaxed case-study-reveal">
          Carefully structured, clean modular layers designed to achieve maximum efficiency, zero memory leak risks, and near-zero database access speeds.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${featuresHTML}
        </div>
      </div>
    </div>

    <!-- The Journey -->
    <div class="py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 text-left">
      <div class="w-full lg:w-1/3">
        <span class="section-label case-study-reveal">CHRONICLES</span>
        <h3 class="section-title mb-4 case-study-reveal">Development Journey</h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-6 case-study-reveal">
          Every phase of development represents strict planning and precise software crafting — translating product goals into stable, high-performance binary deployments.
        </p>
        <div class="flex flex-col gap-3 case-study-reveal">
          <span class="text-xs text-slate-400 flex items-center gap-2">
            <i class="fas fa-check-circle text-purple-400 text-[11px]" aria-hidden="true"></i> Advanced SQL / DB Design
          </span>
          <span class="text-xs text-slate-400 flex items-center gap-2">
            <i class="fas fa-check-circle text-purple-400 text-[11px]" aria-hidden="true"></i> Threaded Performance Math
          </span>
          <span class="text-xs text-slate-400 flex items-center gap-2">
            <i class="fas fa-check-circle text-purple-400 text-[11px]" aria-hidden="true"></i> Decoupled Core Business Logic
          </span>
        </div>
      </div>

      <div class="w-full lg:w-2/3 flex flex-col gap-5">
        ${journeyHTML}
      </div>
    </div>

    <!-- Additional screen section (image or conceptual) -->
    ${additionalScreenHTML}

    <!-- CTA Footer -->
    <div class="py-24 border-t border-white/[0.06] text-center px-4 md:px-12">
      <div class="max-w-lg mx-auto glass-panel p-12 case-study-reveal">
        <h3 class="font-heading text-2xl font-extrabold text-white mb-4">Interested in this architecture?</h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-8">
          Let's build something exceptional together. Whether creating advanced offline mobile databases or setting up distributed WebSockets backends, I'm ready to craft your solutions.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <a href="#contact" class="btn-glowing magnetic-btn flex items-center gap-2 text-xs py-3 px-6" onclick="closeCaseStudyGlobal()" aria-label="Start project thread">
            <i class="fas fa-bolt text-yellow-300 text-[10px]" aria-hidden="true"></i> Start a Project
          </a>
          <a href="${data.repoLink}" target="_blank" rel="noopener noreferrer" class="btn-outline flex items-center gap-2 text-xs py-3 px-6" aria-label="Visit GitHub repository profile">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  `;

  // Re-initialize tilts and magnetic nodes on new DOM additions
  initCardTilting();
  initMagneticButtons();
  initProjectCardMouse();
}

window.closeCaseStudyGlobal = closeCaseStudy;
