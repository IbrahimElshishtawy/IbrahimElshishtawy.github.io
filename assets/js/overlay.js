/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v3.0
   Project Detail Overlays (overlay.js)
   Architectural Case-Study Modals with Multi-Screenshot Showcase
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

  window.currentActiveCaseStudyId = id;
  renderCaseStudy(data);

  const overlay = document.getElementById('case-study-overlay');
  if (!overlay) return;

  overlay.classList.add('active');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Initialize mockup gallery to first image
  if (typeof setMockupGalleryImage === 'function' && data.gallery && data.gallery.length) {
    setMockupGalleryImage(data.id, 0);
  }

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

window.openCaseStudy = openCaseStudy;
window.closeCaseStudyGlobal = closeCaseStudy;

/* ── RENDER CASE STUDY CONTENT ──────────────────────────────── */
function renderCaseStudy(data) {
  const container = document.getElementById('case-study-content');
  if (!container) return;

  const techList = data.verifiedTech || data.tags || [];
  const isArabic = document.documentElement.lang === 'ar';
  const gallery = data.gallery || [];
  const hasMultipleImages = gallery.length > 1;

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
          ${isArabic ? 'مسؤوليات التنفيذ الهندسي' : 'Specific Implementation Responsibilities'}
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
  const featuresHTML = (data.features || []).map(f => {
    const fTitle = isArabic ? (f.titleAr || f.title) : f.title;
    const fDesc = isArabic ? (f.descAr || f.desc) : f.desc;
    return `
    <div class="glass-panel p-6 flex flex-col gap-3.5 case-study-reveal" style="min-height:170px;">
      <div class="icon-box icon-box-cyan flex-shrink-0">
        <i class="fas ${f.icon}" aria-hidden="true"></i>
      </div>
      <div>
        <h4 class="font-heading text-sm font-bold text-white mb-2">${fTitle}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">${fDesc}</p>
      </div>
    </div>
  `}).join('');

  /* Build journey/stages */
  const journeyHTML = (data.journey || []).map(j => {
    const jPhase = isArabic ? (j.phaseAr || j.phase) : j.phase;
    const jTitle = isArabic ? (j.titleAr || j.title) : j.title;
    const jDesc = isArabic ? (j.descAr || j.desc) : j.desc;
    return `
    <div class="border border-white/[0.08] bg-white/[0.02] rounded-2xl p-6 case-study-reveal">
      <div class="text-[10px] font-bold text-cyan-400 mb-2 tracking-wider uppercase">${jPhase}</div>
      <h4 class="font-heading text-sm font-bold text-white mb-2">${jTitle}</h4>
      <p class="text-xs text-slate-400 leading-relaxed">${jDesc}</p>
    </div>
  `}).join('');

  /* Dedicated Screenshot Gallery Grid (All images for this project) */
  let projectScreenshotsHTML = '';
  if (gallery.length > 0) {
    projectScreenshotsHTML = `
      <div class="py-20 border-t border-white/[0.06] bg-black/40 px-4 md:px-12 text-left">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <span class="section-label case-study-reveal">${isArabic ? 'لقطات الشاشة والمعرض المرئي' : 'VISUAL ARCHITECTURE & SCREENSHOTS'}</span>
              <h3 class="section-title mb-2 case-study-reveal">${isArabic ? `معرض لقطات التطبيق (${gallery.length} شاشات بدقة عالية)` : `Production Screenshots (${gallery.length} High-Res Views)`}</h3>
              <p class="text-xs text-slate-400 max-w-xl leading-relaxed case-study-reveal">
                ${isArabic ? 'استعراض دقيق لكافة واجهات المستخدم، لوحات التحكم، والمخططات البيانية المسجلة للتطبيق.' : 'Comprehensive visual documentation of user interfaces, telemetry controllers, and database interactions.'}
              </p>
            </div>
            <button type="button" class="cinematic-action-btn cinematic-action-live self-start sm:self-auto case-study-reveal" onclick="openProjectGallery('${data.id}', 0)">
              <i class="fas fa-expand text-xs mr-1"></i>
              <span>${isArabic ? 'تكبير كل الشاشات ملء الشاشة' : 'Launch Fullscreen Gallery'}</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gallery.length > 2 ? '3' : '2'} gap-6">
            ${gallery.map((img, idx) => {
              const imgTitle = isArabic ? (img.titleAr || img.title) : img.title;
              const imgDesc = isArabic ? (img.descAr || img.desc) : img.desc;
              const isMobile = img.aspect === 'mobile';

              return `
                <div class="group/screen relative rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 p-4 transition-all duration-300 flex flex-col justify-between case-study-reveal cursor-pointer" onclick="openProjectGallery('${data.id}', ${idx})">
                  <div class="relative overflow-hidden rounded-xl bg-black/60 mb-4 ${isMobile ? 'aspect-[9/13] flex items-center justify-center p-3' : 'aspect-[16/10]'}">
                    ${isMobile ? `
                      <div class="iphone-mini-frame w-full max-w-[210px] h-full rounded-[20px] border-[2px] border-white/10 bg-black overflow-hidden shadow-xl group-hover/screen:border-cyan-400/50 transition-colors">
                        <img src="${img.src}" alt="${imgTitle}" class="w-full h-full object-cover object-top group-hover/screen:scale-105 transition-transform duration-500" loading="lazy">
                      </div>
                    ` : `
                      <img src="${img.src}" alt="${imgTitle}" class="w-full h-full object-cover object-top group-hover/screen:scale-105 transition-transform duration-500" loading="lazy">
                    `}
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/screen:opacity-90 transition-opacity"></div>
                    <div class="absolute bottom-3 right-3 left-3 flex items-center justify-between text-[10px] font-mono">
                      <span class="text-white/80 font-bold truncate">${imgTitle}</span>
                      <span class="text-cyan-400 bg-black/80 px-2 py-0.5 rounded border border-cyan-500/30 flex items-center gap-1">
                        <i class="fas fa-search-plus text-[9px]"></i> HD
                      </span>
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <h4 class="font-heading text-sm font-bold text-white group-hover/screen:text-cyan-400 transition-colors">${imgTitle}</h4>
                      <span class="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">${idx + 1} / ${gallery.length}</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed">${imgDesc}</p>
                  </div>

                  <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-cyan-400">
                    <span>${isArabic ? 'اضغط للتكبير' : 'Click to Expand'}</span>
                    <i class="fas fa-arrow-up-right-from-square text-[9px] group-hover/screen:translate-x-0.5 transition-transform"></i>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  /* ── SMART MOCKUP COMPONENT WITH INTEGRATED GALLERY CONTROLS ── */
  let mockupHTML = '';
  const firstImage = (gallery[0] && gallery[0].src) || data.image || '';

  if (data.mockupType === 'browser' || data.mockupType === 'desktop') {
    mockupHTML = `
      <div class="cyber-browser-mockup relative w-full aspect-[16/10] max-w-2xl mx-auto rounded-2xl border border-white/10 bg-[#070514]/90 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col group/browser" style="box-shadow: 0 25px 60px -15px rgba(0,0,0,0.85), 0 0 30px ${data.accentColor || '#06b6d4'}33;">
        
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
            ${hasMultipleImages ? `
              <span data-mockup-counter="${data.id}" class="text-[9px] font-mono text-cyan-400 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/30">1 / ${gallery.length}</span>
            ` : ''}
            <i class="fas fa-shield-alt text-[10px] text-cyan-400"></i>
          </div>
        </div>

        <!-- Browser Body With Real Image Preview & Gallery Slider -->
        <div class="relative flex-1 overflow-hidden bg-black/60 group/modalimg min-h-[280px]">
          <img src="${firstImage}" data-mockup-img="${data.id}" alt="${data.title}" class="w-full h-full object-cover object-top transition-all duration-500 cursor-pointer" onclick="openProjectGallery('${data.id}', GalleryState?.mockupState?.['${data.id}'] || 0)" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>

          ${hasMultipleImages ? `
            <!-- Prev / Next Navigation Arrows -->
            <button type="button" class="mockup-nav-arrow mockup-nav-prev" onclick="navigateMockupGallery('${data.id}', -1)" aria-label="Previous image">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button type="button" class="mockup-nav-arrow mockup-nav-next" onclick="navigateMockupGallery('${data.id}', 1)" aria-label="Next image">
              <i class="fas fa-chevron-right"></i>
            </button>
          ` : ''}

          <!-- Bottom Floating Bar -->
          <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono pointer-events-none">
            <span class="text-white font-bold drop-shadow-lg flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span> ${data.title}
            </span>
            <div class="pointer-events-auto flex items-center gap-2">
              <button type="button" class="text-cyan-400 bg-black/80 px-2.5 py-1 rounded-lg border border-cyan-500/40 hover:bg-cyan-500/20 transition-colors flex items-center gap-1.5 text-[11px] font-bold" onclick="openProjectGallery('${data.id}', GalleryState?.mockupState?.['${data.id}'] || 0)">
                <i class="fas fa-search-plus text-[10px]"></i> ${isArabic ? 'تكبير' : 'Zoom HD'}
              </button>
              ${data.demoLink && data.demoLink !== '#' ? `
                <a href="${data.demoLink}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 bg-black/80 px-2.5 py-1 rounded-lg border border-cyan-500/40 hover:bg-cyan-500/20 transition-colors flex items-center gap-1.5 text-[11px] font-bold">
                  Live ↗
                </a>
              ` : ''}
            </div>
          </div>
        </div>

      </div>

      <!-- Thumbnail Strip & Caption if multiple images -->
      ${hasMultipleImages ? `
        <div class="mt-4 flex items-center justify-center gap-2 flex-wrap">
          ${gallery.map((g, idx) => `
            <button type="button" class="mockup-thumb-btn ${idx === 0 ? 'active' : ''}" data-mockup-thumb="${data.id}" onclick="setMockupGalleryImage('${data.id}', ${idx})" title="${g.title}" aria-label="Screenshot ${idx + 1}">
              <img src="${g.src}" alt="${g.title}" class="w-11 h-11 object-cover rounded-lg">
            </button>
          `).join('')}
        </div>
        <div class="mt-2 text-center text-xs text-slate-300 font-mono" data-mockup-caption="${data.id}">
          <strong class="text-white">${isArabic ? (gallery[0].titleAr || gallery[0].title) : gallery[0].title}</strong>
        </div>
      ` : ''}
    `;
  } else if (data.mockupType === 'hardware') {
    mockupHTML = `
      <div class="cyber-hardware-mockup relative w-full aspect-[16/10] max-w-2xl mx-auto rounded-2xl border border-purple-500/30 bg-[#060411]/95 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col justify-between" style="box-shadow: 0 25px 60px -15px rgba(0,0,0,0.9), 0 0 35px rgba(139, 92, 246, 0.25);">
        
        <!-- Top status bar -->
        <div class="flex items-center justify-between px-5 py-3 border-b border-purple-500/20 bg-white/[0.02]">
          <div class="flex items-center gap-2">
            <i class="fas fa-microchip text-purple-400"></i>
            <span class="font-mono text-xs font-bold text-white">OPENWRT_SYSTEMS_ENGINEERING // TELEMETRY</span>
          </div>
          <span class="cyber-badge cyber-badge-cyan text-[8px]"><i class="fas fa-circle text-[5px] mr-1 text-emerald-400 animate-ping"></i> ACTIVE REPO</span>
        </div>

        <!-- Real Systems Engineering Visual -->
        <div class="relative flex-1 overflow-hidden bg-black/80 min-h-[260px] group/hwimg">
          <img src="${firstImage}" data-mockup-img="${data.id}" alt="${data.title}" class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 cursor-pointer" onclick="openProjectGallery('${data.id}', 0)" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
            <span class="text-white font-bold drop-shadow-lg">Router Firmware &amp; Telemetry</span>
            <button type="button" class="text-purple-300 bg-black/70 px-2.5 py-1 rounded border border-purple-500/30 font-bold hover:bg-purple-500/20 transition-colors flex items-center gap-1.5" onclick="openProjectGallery('${data.id}', 0)">
              <i class="fas fa-search-plus"></i> ${isArabic ? 'تكبير' : 'Zoom HD'}
            </button>
          </div>
        </div>

        <!-- Architectural Component Breakdown -->
        <div class="p-4 grid grid-cols-3 gap-3 border-t border-white/5 bg-[#070514]/90">
          <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-[8px] text-slate-400 font-mono mb-0.5">ROUTER FIRMWARE</div>
            <div class="text-[11px] font-black text-cyan-400 font-heading">OpenWrt OS</div>
            <div class="text-[7.5px] text-slate-400 font-mono">iptables &amp; tc shaping</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-[8px] text-slate-400 font-mono mb-0.5">DAEMON SERVICE</div>
            <div class="text-[11px] font-black text-purple-400 font-heading">Node.js Daemon</div>
            <div class="text-[7.5px] text-slate-400 font-mono">WebSockets IPC</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-[8px] text-slate-400 font-mono mb-0.5">CONTROLLER APP</div>
            <div class="text-[11px] font-black text-amber-400 font-heading">Flutter Mobile</div>
            <div class="text-[7.5px] text-slate-400 font-mono">Clean Architecture</div>
          </div>
        </div>

      </div>
    `;
  } else {
    // Mobile iPhone Frame with Slider
    mockupHTML = `
      <div class="relative flex flex-col items-center">
        
        <div class="iphone-mockup mx-auto relative group/phone">
          <div class="iphone-notch" aria-hidden="true"></div>
          
          <div class="iphone-screen">
            <img src="${firstImage}" data-mockup-img="${data.id}" alt="${data.title} — Application interface" class="iphone-img cursor-pointer" onclick="openProjectGallery('${data.id}', GalleryState?.mockupState?.['${data.id}'] || 0)" loading="lazy">
            
            ${hasMultipleImages ? `
              <!-- Phone Left / Right Nav Arrows -->
              <button type="button" class="mockup-nav-arrow mockup-nav-prev" onclick="navigateMockupGallery('${data.id}', -1)" aria-label="Previous screenshot">
                <i class="fas fa-chevron-left text-xs"></i>
              </button>
              <button type="button" class="mockup-nav-arrow mockup-nav-next" onclick="navigateMockupGallery('${data.id}', 1)" aria-label="Next screenshot">
                <i class="fas fa-chevron-right text-xs"></i>
              </button>
            ` : ''}

            <!-- Bottom Floating Action Bar in Phone -->
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none z-10">
              ${hasMultipleImages ? `
                <span data-mockup-counter="${data.id}" class="text-white font-bold bg-black/80 px-2 py-0.5 rounded-full border border-white/10 shadow-md">1 / ${gallery.length}</span>
              ` : '<span></span>'}
              <button type="button" class="pointer-events-auto text-cyan-400 bg-black/80 px-2.5 py-1 rounded-full border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors flex items-center gap-1 font-bold shadow-md" onclick="openProjectGallery('${data.id}', GalleryState?.mockupState?.['${data.id}'] || 0)">
                <i class="fas fa-search-plus text-[9px]"></i> HD
              </button>
            </div>
          </div>
        </div>

        <!-- Thumbnail Strip & Caption if multiple images -->
        ${hasMultipleImages ? `
          <div class="mt-4 flex items-center justify-center gap-2 flex-wrap max-w-sm">
            ${gallery.map((g, idx) => `
              <button type="button" class="mockup-thumb-btn ${idx === 0 ? 'active' : ''}" data-mockup-thumb="${data.id}" onclick="setMockupGalleryImage('${data.id}', ${idx})" title="${g.title}" aria-label="Screenshot ${idx + 1}">
                <img src="${g.src}" alt="${g.title}" class="w-10 h-10 object-cover rounded-lg">
              </button>
            `).join('')}
          </div>
          <div class="mt-2 text-center text-xs text-slate-300 font-mono max-w-xs" data-mockup-caption="${data.id}">
            <strong class="text-white">${isArabic ? (gallery[0].titleAr || gallery[0].title) : gallery[0].title}</strong>
          </div>
        ` : ''}

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
          ${hasMultipleImages ? `
            <span class="cinematic-badge text-[9px] text-cyan-300 border-cyan-500/30">
              <i class="fas fa-images mr-1"></i> ${gallery.length} ${isArabic ? 'لقطات شاشة' : 'Screenshots'}
            </span>
          ` : ''}
        </div>

        ${data.client ? `
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 mb-4 case-study-reveal">
            <i class="fas fa-building text-cyan-400 text-xs"></i>
            <span>${isArabic ? 'الجهة / السياق:' : 'Context / Organization:'} <strong class="text-white">${isArabic ? (data.clientAr || data.client) : data.client}</strong></span>
          </div>
        ` : ''}

        ${data.role ? `
          <div class="text-xs text-cyan-300 font-mono mb-4 case-study-reveal">
            <i class="fas fa-user-gear mr-1"></i> ${isArabic ? 'الدور الهندسي:' : 'Role:'} ${isArabic ? (data.roleAr || data.role) : data.role}
          </div>
        ` : ''}

        <h2 class="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight case-study-reveal">
          ${isArabic ? (data.titleAr || data.title) : data.title}
        </h2>

        <p class="text-sm text-slate-300 leading-relaxed mb-6 max-w-lg case-study-reveal">
          ${isArabic ? (data.description || data.summary) : (data.summary || data.description)}
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
          ${gallery.length > 0 ? `
            <button type="button" class="cinematic-action-btn cinematic-action-live flex items-center gap-2 py-3 px-5 text-xs font-bold" onclick="openProjectGallery('${data.id}', 0)">
              <i class="fas fa-images text-cyan-400"></i>
              <span>${isArabic ? `معرض الصور (${gallery.length})` : `Visual Gallery (${gallery.length})`}</span>
            </button>
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

    <!-- Multi-Screenshot Visual Showcase Section -->
    ${projectScreenshotsHTML}

    <!-- Features Section -->
    ${(data.features && data.features.length) ? `
      <div class="py-20 border-t border-white/[0.06] bg-black/20 px-4 md:px-12 text-left">
        <div class="max-w-7xl mx-auto">
          <span class="section-label case-study-reveal">ARCHITECTURE &amp; FEATURES</span>
          <h3 class="section-title mb-4 case-study-reveal">${isArabic ? 'المعالم والمواصفات التقنية' : 'Technical Highlights'}</h3>
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
          <h3 class="section-title mb-4 case-study-reveal">${isArabic ? 'مراحل التطوير والإطلاق' : 'Development Stages'}</h3>
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
        <h3 class="font-heading text-xl font-extrabold text-white mb-3">${isArabic ? 'ناقش هذا المشروع معي' : 'Discuss this Architecture'}</h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-6">
          ${isArabic ? 'هل لديك أسئلة حول المعمارية البرمجية أو ترغب في تطوير نظام مشابه؟' : 'Have questions about the technical implementation, systems design, or mobile integration?'}
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <a href="#contact" class="btn-glowing magnetic-btn flex items-center gap-2 text-xs py-2.5 px-6 font-bold" onclick="closeCaseStudyGlobal()" aria-label="Contact Ibrahim">
            <i class="fas fa-paper-plane text-yellow-300 text-[10px]" aria-hidden="true"></i> ${isArabic ? 'تواصل معي مباشرة' : 'Contact Me'}
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
