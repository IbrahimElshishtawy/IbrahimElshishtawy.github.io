/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE
   Project Detail Overlays (overlay.js)
   Verified, Architectural Case-Study Modals
   ============================================================ */

'use strict';

/* ── OPEN CASE STUDY ────────────────────────────────────────── */
function openCaseStudy(cardOrId) {
  let id;
  if (typeof cardOrId === 'string') {
    id = cardOrId;
  } else if (cardOrId && typeof cardOrId.getAttribute === 'function') {
    id = cardOrId.getAttribute('data-project');
  }

  const data = typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA[id] : null;
  if (!data) return;

  renderCaseStudy(data);

  const overlay = document.getElementById('case-study-overlay');
  if (!overlay) return;

  overlay.classList.add('active');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Focus close button for keyboard accessibility
  setTimeout(() => {
    document.getElementById('close-overlay-btn')?.focus();
  }, 60);

  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.case-study-reveal',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out', stagger: 0.08, delay: 0.1 }
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

window.closeCaseStudyGlobal = closeCaseStudy;

/* ── RENDER CASE STUDY CONTENT ──────────────────────────────── */
function renderCaseStudy(data) {
  const container = document.getElementById('case-study-content');
  if (!container) return;

  const techList = data.verifiedTech || data.tags || [];

  /* Build tech tags */
  const tagsHTML = techList.map(t => `
    <span class="cyber-badge text-[10px] px-2.5 py-1">
      <i class="fas fa-terminal text-[9px] text-cyan-400 mr-1" aria-hidden="true"></i> ${t}
    </span>
  `).join('');

  /* Build contribution list if provided */
  const contributionsHTML = (data.contributionDetails && Array.isArray(data.contributionDetails)) ? `
    <div class="glass-panel p-6 sm:p-8 border-cyan-500/20 bg-cyan-950/10 mb-8 case-study-reveal">
      <div class="flex items-center gap-2 mb-4">
        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
        <h4 class="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-wider">
          Specific Implementation Responsibilities
        </h4>
      </div>
      <ul class="flex flex-col gap-2.5 text-xs text-slate-300">
        ${data.contributionDetails.map(item => `
          <li class="flex items-start gap-2.5 leading-relaxed">
            <i class="fas fa-check text-cyan-400 text-[11px] mt-1 flex-shrink-0" aria-hidden="true"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  ` : '';

  /* Build feature cards */
  const featuresHTML = (data.features || []).map(f => `
    <div class="glass-panel p-6 flex flex-col gap-3.5 case-study-reveal" style="min-height:170px;">
      <div class="icon-box icon-box-cyan flex-shrink-0">
        <i class="fas ${f.icon}" aria-hidden="true"></i>
      </div>
      <div>
        <h4 class="font-heading text-sm font-bold text-white mb-2">${f.title}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">${f.desc}</p>
      </div>
    </div>
  `).join('');

  /* Build journey/stages */
  const journeyHTML = (data.journey || []).map(j => `
    <div class="border border-white/[0.08] bg-white/[0.02] rounded-2xl p-6 case-study-reveal">
      <div class="text-[10px] font-bold text-cyan-400 mb-2 tracking-wider uppercase">${j.phase}</div>
      <h4 class="font-heading text-sm font-bold text-white mb-2">${j.title}</h4>
      <p class="text-xs text-slate-400 leading-relaxed">${j.desc}</p>
    </div>
  `).join('');

  /* Smart asset selector: Browser Mockup, Hardware Blueprint, or Mobile Frame */
  let mockupHTML = '';

  if (data.mockupType === 'browser') {
    mockupHTML = `
      <div class="cyber-browser-mockup relative w-full aspect-[16/10] max-w-xl mx-auto rounded-2xl border border-white/10 bg-[#070514]/90 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col" style="box-shadow: 0 25px 60px -15px rgba(0,0,0,0.85), 0 0 30px ${data.accentColor || '#06b6d4'}33;">
        <!-- Browser Top Bar -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <div class="flex items-center gap-2 px-4 py-1 rounded-lg bg-black/40 border border-white/10 text-[10px] text-slate-300 font-mono flex-1 max-w-xs mx-4 truncate">
            <i class="fas fa-lock text-[9px] text-emerald-400"></i>
            <span class="truncate">${data.urlPreview || data.demoLink || 'https://production.app'}</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400 text-xs">
            <i class="fas fa-shield-alt text-[10px] text-cyan-400"></i>
          </div>
        </div>
        <!-- Browser Body / Preview Visual -->
        <div class="relative flex-1 p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20">
          <div class="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden="true"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="cyber-badge cyber-badge-cyan text-[9px]"><i class="fas fa-globe mr-1.5"></i> ${data.projectClass || 'WEB PLATFORM'}</span>
              <span class="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"><i class="fas fa-circle text-[6px] mr-1 animate-pulse"></i> VERIFIED DEPLOYMENT</span>
            </div>
            <h3 class="font-heading text-2xl font-black text-white mb-2 leading-tight">${data.title}</h3>
            <p class="text-xs text-slate-300/85 max-w-md line-clamp-3 leading-relaxed">${data.summary || data.subtitle || data.description}</p>
          </div>
          <div class="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              ${techList.slice(0, 4).map(t => `<span class="px-2 py-0.5 rounded text-[9px] font-mono bg-white/5 text-slate-300 border border-white/10">${t}</span>`).join('')}
            </div>
            ${data.demoLink && data.demoLink !== '#' ? `
              <a href="${data.demoLink}" target="_blank" rel="noopener noreferrer" class="text-[10px] font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                Open Platform <i class="fas fa-arrow-up-right-from-square text-[8px]"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  } else if (data.mockupType === 'hardware') {
    mockupHTML = `
      <div class="cyber-hardware-mockup relative w-full aspect-[16/10] max-w-xl mx-auto rounded-2xl border border-purple-500/30 bg-[#060411]/95 shadow-2xl p-6 overflow-hidden backdrop-blur-xl flex flex-col justify-between" style="box-shadow: 0 25px 60px -15px rgba(0,0,0,0.9), 0 0 35px rgba(139, 92, 246, 0.25);">
        <!-- Top status bar -->
        <div class="flex items-center justify-between border-b border-purple-500/20 pb-3">
          <div class="flex items-center gap-2">
            <i class="fas fa-microchip text-purple-400"></i>
            <span class="font-mono text-xs font-bold text-white">OPENWRT_SYSTEMS_ENGINEERING // ARCHITECTURE</span>
          </div>
          <span class="cyber-badge cyber-badge-cyan text-[8px]"><i class="fas fa-circle text-[5px] mr-1 text-emerald-400 animate-ping"></i> ACTIVE REPO</span>
        </div>
        <!-- Architectural Component Breakdown -->
        <div class="grid grid-cols-3 gap-3 my-4">
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-[9px] text-slate-400 font-mono mb-1">ROUTER FIRMWARE</div>
            <div class="text-xs font-black text-cyan-400 font-heading">OpenWrt OS</div>
            <div class="text-[8px] text-slate-400 font-mono mt-0.5">iptables &amp; tc shaping</div>
          </div>
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-[9px] text-slate-400 font-mono mb-1">DAEMON SERVICE</div>
            <div class="text-xs font-black text-purple-400 font-heading">Node.js Daemon</div>
            <div class="text-[8px] text-slate-400 font-mono mt-0.5">IPC &amp; WebSockets bridge</div>
          </div>
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-[9px] text-slate-400 font-mono mb-1">CONTROLLER APP</div>
            <div class="text-xs font-black text-amber-400 font-heading">Flutter Mobile</div>
            <div class="text-[8px] text-slate-400 font-mono mt-0.5">Clean Architecture UI</div>
          </div>
        </div>
        <!-- Shell rules excerpt -->
        <div class="p-3 rounded-xl bg-black/70 border border-white/5 font-mono text-[10px] text-slate-400 leading-relaxed overflow-hidden">
          <div class="text-cyan-400 font-semibold">[KERNEL] iptables -I FORWARD -m quota --quota $BYTES_LIMIT -j ACCEPT</div>
          <div class="text-purple-300">[DAEMON] Node.js telemetry socket @ /var/run/quota_daemon.sock</div>
          <div class="text-emerald-400">[MOBILE] Flutter client receives live device quota metrics</div>
        </div>
      </div>
    `;
  } else if (data.image) {
    mockupHTML = `
      <div class="iphone-mockup mx-auto">
        <div class="iphone-notch" aria-hidden="true"></div>
        <div class="iphone-screen">
          <img src="${data.image}" alt="${data.title} — Application interface" class="iphone-img" loading="lazy">
        </div>
      </div>
    `;
  } else {
    mockupHTML = `
      <div class="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl border border-cyan-500/20 bg-cyan-950/10 p-8 flex flex-col justify-between overflow-hidden backdrop-blur-xl">
        <div class="z-10 text-left">
          <div class="flex justify-between items-center mb-6">
            <span class="cyber-badge cyber-badge-cyan text-[10px]"><i class="fas fa-code mr-1"></i> ARCHITECTURAL SPECIFICATION</span>
            <span class="text-[9px] font-bold text-slate-500 uppercase tracking-widest">${data.projectClass || 'SYSTEM'}</span>
          </div>
          <div class="font-mono text-cyan-400 text-xs leading-relaxed mb-6">
            <p class="text-white/40">// ENGINEERING SPECIFICATION</p>
            <p class="mt-1"><span class="text-purple-400">package</span> ${data.id}.architecture;</p>
            <p class="mt-1 text-slate-300">Clean Architecture Domain separation;</p>
            <p class="mt-0.5 text-emerald-400">// Verified Technologies: ${techList.slice(0, 3).join(', ')}</p>
          </div>
        </div>
        <div class="z-10 flex justify-between items-end text-left">
          <div>
            <span class="block text-[8px] font-bold text-slate-500 tracking-wider uppercase mb-1">ENGINEERING STATUS</span>
            <span class="cyber-badge text-green-400 border-green-500/30 bg-green-500/10 text-[9px]">VERIFIED</span>
          </div>
          <div class="text-right">
            <span class="font-heading font-black text-white tracking-widest text-xs">${data.title}</span>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <!-- Top Ambient Glow -->
    <div class="case-study-aurora" aria-hidden="true">
      <div style="background:radial-gradient(circle,${data.accentColor || '#06b6d4'}20 0%,transparent 70%);position:absolute;top:-15%;right:-15%;width:65vw;height:65vw;border-radius:50%;filter:blur(80px);"></div>
    </div>

    <!-- Hero Showcase Block -->
    <div class="relative py-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 items-center min-h-[80vh]">
      
      <!-- Text details -->
      <div class="w-full lg:w-1/2 flex flex-col items-start justify-center z-10 text-left">
        
        <div class="flex flex-wrap items-center gap-2 mb-4 case-study-reveal">
          <span class="cyber-badge cyber-badge-cyan text-[9px] font-bold">${data.projectClass || 'FEATURED WORK'}</span>
          ${data.statusBadge ? `<span class="cinematic-badge cinematic-badge-live text-[9px]">${data.statusBadge}</span>` : ''}
        </div>

        ${data.client ? `
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 mb-4 case-study-reveal">
            <i class="fas fa-building text-cyan-400 text-xs"></i>
            <span>Context / Organization: <strong class="text-white">${data.client}</strong></span>
          </div>
        ` : ''}

        ${data.role ? `
          <div class="text-xs text-cyan-300 font-mono mb-4 case-study-reveal">
            <i class="fas fa-user-gear mr-1"></i> Role: ${data.role}
          </div>
        ` : ''}

        <h2 class="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight case-study-reveal">
          ${data.title}
        </h2>

        <p class="text-sm text-slate-300 leading-relaxed mb-6 max-w-lg case-study-reveal">
          ${data.summary || data.subtitle || data.description}
        </p>

        <!-- Tech tags -->
        <div class="flex flex-wrap gap-2 mb-8 case-study-reveal">
          ${tagsHTML}
        </div>

        <!-- Action Links -->
        <div class="flex flex-wrap gap-4 case-study-reveal">
          ${data.demoLink && data.demoLink !== '#' ? `
            <a href="${data.demoLink}" target="_blank" rel="noopener noreferrer" class="magnetic-btn btn-glowing flex items-center gap-2.5 text-xs py-3 px-6 font-bold" aria-label="Open live project">
              <i class="fas fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
              <span>${data.demoLabel || 'Live Platform'}</span>
            </a>
          ` : ''}
          ${data.repoLink ? `
            <a href="${data.repoLink}" target="_blank" rel="noopener noreferrer" class="magnetic-btn btn-outline flex items-center gap-2.5 text-xs py-3 px-6 font-semibold" aria-label="View source repository">
              <i class="fab fa-github text-sm" aria-hidden="true"></i>
              <span>${data.repoLabel || 'Source Code'}</span>
            </a>
          ` : ''}
        </div>
      </div>

      <!-- Mockup Showcase -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 case-study-reveal">
        <div class="tilt-container w-full">
          ${mockupHTML}
        </div>
      </div>
    </div>

    <!-- Verified Contributions Section -->
    <div class="px-4 md:px-12 max-w-7xl mx-auto text-left">
      ${contributionsHTML}
    </div>

    <!-- Features Section -->
    ${(data.features && data.features.length) ? `
      <div class="py-20 border-t border-white/[0.06] bg-black/20 px-4 md:px-12 text-left">
        <div class="max-w-7xl mx-auto">
          <span class="section-label case-study-reveal">ARCHITECTURE &amp; FEATURES</span>
          <h3 class="section-title mb-4 case-study-reveal">Technical Highlights</h3>
          <p class="text-xs text-slate-400 max-w-lg mb-12 leading-relaxed case-study-reveal">
            Detailed engineering features verified against the working application or codebase.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${featuresHTML}
          </div>
        </div>
      </div>
    ` : ''}

    <!-- Development Journey Section -->
    ${(data.journey && data.journey.length) ? `
      <div class="py-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 text-left">
        <div class="w-full lg:w-1/3">
          <span class="section-label case-study-reveal">IMPLEMENTATION MILESTONES</span>
          <h3 class="section-title mb-4 case-study-reveal">Development Stages</h3>
          <p class="text-xs text-slate-400 leading-relaxed mb-6 case-study-reveal">
            Structured development workflow translating architectural specifications into verified deliverables.
          </p>
        </div>
        <div class="w-full lg:w-2/3 flex flex-col gap-4">
          ${journeyHTML}
        </div>
      </div>
    ` : ''}

    <!-- Modal Footer CTA -->
    <div class="py-20 border-t border-white/[0.06] text-center px-4 md:px-12">
      <div class="max-w-lg mx-auto glass-panel p-10 case-study-reveal">
        <h3 class="font-heading text-xl font-extrabold text-white mb-3">Discuss this Architecture</h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-6">
          Have questions about the technical implementation, systems design, or mobile integration?
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <a href="#contact" class="btn-glowing magnetic-btn flex items-center gap-2 text-xs py-2.5 px-6 font-bold" onclick="closeCaseStudyGlobal()" aria-label="Contact Ibrahim">
            <i class="fas fa-paper-plane text-yellow-300 text-[10px]" aria-hidden="true"></i> Contact Me
          </a>
          <a href="https://github.com/IbrahimElshishtawy" target="_blank" rel="noopener noreferrer" class="btn-outline flex items-center gap-2 text-xs py-2.5 px-6 font-semibold" aria-label="Visit GitHub Profile">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub Profile
          </a>
        </div>
      </div>
    </div>
  `;

  // Re-initialize interactions on dynamic elements
  if (typeof initCardTilting === 'function') initCardTilting();
  if (typeof initMagneticButtons === 'function') initMagneticButtons();
}
