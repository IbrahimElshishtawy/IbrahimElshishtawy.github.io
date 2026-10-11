/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v3.0
   Interactive Project Gallery & Universal Lightbox (gallery.js)
   High-Fidelity Showcase of All 25+ Production Screenshots
   ============================================================ */

'use strict';

/* ── STATE MANAGEMENT ───────────────────────────────────────── */
const GalleryState = {
  activeList: [],        // Current list of images in lightbox
  currentIndex: 0,       // Current index in lightbox
  isZoomed: false,       // Lightbox zoom state
  mockupState: {},       // Active slide indices for project mockups { [projectId]: index }
  touchStartX: 0,
  touchEndX: 0
};

/* ── 1. MOCKUP SLIDER CONTROLLER ────────────────────────────── */
/**
 * Changes the active image in a project mockup (modal or card)
 * @param {string} projectId 
 * @param {number} index 
 */
function setMockupGalleryImage(projectId, index) {
  const data = typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA[projectId] : null;
  if (!data || !data.gallery || !data.gallery[index]) return;

  GalleryState.mockupState[projectId] = index;
  const item = data.gallery[index];
  const isArabic = document.documentElement.lang === 'ar';

  // Target mockup image elements
  const imgElements = document.querySelectorAll(`[data-mockup-img="${projectId}"]`);
  imgElements.forEach(img => {
    img.style.opacity = '0.3';
    img.style.transform = 'scale(0.97)';
    setTimeout(() => {
      img.src = item.src;
      img.alt = isArabic ? (item.titleAr || item.title) : item.title;
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, 150);
  });

  // Target counter elements
  const counterElements = document.querySelectorAll(`[data-mockup-counter="${projectId}"]`);
  counterElements.forEach(counter => {
    counter.textContent = `${index + 1} / ${data.gallery.length}`;
  });

  // Target caption elements
  const captionElements = document.querySelectorAll(`[data-mockup-caption="${projectId}"]`);
  captionElements.forEach(caption => {
    const title = isArabic ? (item.titleAr || item.title) : item.title;
    const desc = isArabic ? (item.descAr || item.desc) : item.desc;
    caption.innerHTML = `<strong class="text-white">${title}</strong> <span class="text-slate-400 block mt-0.5">${desc}</span>`;
  });

  // Target thumbnail buttons
  const thumbBtns = document.querySelectorAll(`[data-mockup-thumb="${projectId}"]`);
  thumbBtns.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });
}

/**
 * Navigates mockup gallery forward or backward
 */
function navigateMockupGallery(projectId, delta) {
  const data = typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA[projectId] : null;
  if (!data || !data.gallery || data.gallery.length <= 1) return;

  const current = GalleryState.mockupState[projectId] || 0;
  let next = current + delta;
  if (next < 0) next = data.gallery.length - 1;
  if (next >= data.gallery.length) next = 0;

  setMockupGalleryImage(projectId, next);
}

window.setMockupGalleryImage = setMockupGalleryImage;
window.navigateMockupGallery = navigateMockupGallery;

/* ── 2. GLOBAL UNIVERSAL LIGHTBOX ENGINE ─────────────────────── */
/**
 * Opens the fullscreen Lightbox with a custom image list and start index
 * @param {Array} imagesList 
 * @param {number} startIndex 
 */
function openLightbox(imagesList, startIndex = 0) {
  if (!imagesList || !imagesList.length) return;

  GalleryState.activeList = imagesList;
  GalleryState.currentIndex = Math.max(0, Math.min(startIndex, imagesList.length - 1));
  GalleryState.isZoomed = false;

  const lightbox = document.getElementById('global-lightbox');
  if (!lightbox) return;

  renderLightboxSlide();
  renderLightboxThumbnails();

  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus close button for accessibility
  setTimeout(() => {
    document.getElementById('lightbox-close-btn')?.focus();
  }, 100);
}

/**
 * Opens Lightbox for all images of a specific project
 */
function openProjectGallery(projectId, startIndex = 0) {
  const data = typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA[projectId] : null;
  if (!data || !data.gallery) return;

  const isArabic = document.documentElement.lang === 'ar';
  const list = data.gallery.map((g, idx) => ({
    src: g.src,
    title: isArabic ? (g.titleAr || g.title) : g.title,
    desc: isArabic ? (g.descAr || g.desc) : g.desc,
    projectTitle: isArabic ? (data.titleAr || data.title) : data.title,
    projectClass: data.projectClass || '',
    accentColor: data.accentColor || '#06b6d4',
    aspect: g.aspect || 'desktop',
    projectId: data.id,
    index: idx
  }));

  openLightbox(list, startIndex);
}

/**
 * Opens Lightbox for the aggregated ALL_PROJECT_SCREENSHOTS collection
 */
function openAllScreenshotsLightbox(startIndex = 0) {
  if (typeof ALL_PROJECT_SCREENSHOTS === 'undefined' || !ALL_PROJECT_SCREENSHOTS.length) return;

  const isArabic = document.documentElement.lang === 'ar';
  const list = ALL_PROJECT_SCREENSHOTS.map(s => ({
    src: s.src,
    title: isArabic ? (s.titleAr || s.title) : s.title,
    desc: isArabic ? (s.descAr || s.desc) : s.desc,
    projectTitle: isArabic ? (s.projectTitleAr || s.projectTitle) : s.projectTitle,
    projectClass: s.projectClass || '',
    accentColor: s.accentColor || '#06b6d4',
    aspect: s.aspect || 'desktop',
    projectId: s.projectId,
    index: s.index
  }));

  openLightbox(list, startIndex);
}

window.openLightbox = openLightbox;
window.openProjectGallery = openProjectGallery;
window.openAllScreenshotsLightbox = openAllScreenshotsLightbox;

/**
 * Closes the lightbox
 */
function closeLightbox() {
  const lightbox = document.getElementById('global-lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  GalleryState.isZoomed = false;

  // Restore scrolling only if case-study overlay is not currently open
  const overlay = document.getElementById('case-study-overlay');
  if (!overlay || !overlay.classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

window.closeLightbox = closeLightbox;

/**
 * Navigates Lightbox prev/next
 */
function navigateLightbox(delta) {
  if (!GalleryState.activeList.length) return;

  let newIndex = GalleryState.currentIndex + delta;
  if (newIndex < 0) newIndex = GalleryState.activeList.length - 1;
  if (newIndex >= GalleryState.activeList.length) newIndex = 0;

  GalleryState.currentIndex = newIndex;
  GalleryState.isZoomed = false;
  renderLightboxSlide();
  updateLightboxThumbnailsActive();
}

window.navigateLightbox = navigateLightbox;

/**
 * Renders the active slide in the Lightbox
 */
function renderLightboxSlide() {
  const current = GalleryState.activeList[GalleryState.currentIndex];
  if (!current) return;

  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  const badgeEl = document.getElementById('lightbox-project-badge');
  const counterEl = document.getElementById('lightbox-counter');
  const zoomBtn = document.getElementById('lightbox-zoom-btn');

  if (counterEl) {
    counterEl.textContent = `${GalleryState.currentIndex + 1} / ${GalleryState.activeList.length}`;
  }

  if (badgeEl) {
    badgeEl.textContent = current.projectTitle || 'PROJECT';
    badgeEl.style.borderColor = (current.accentColor || '#06b6d4') + '55';
    badgeEl.style.color = current.accentColor || '#06b6d4';
  }

  if (titleEl) titleEl.textContent = current.title || '';
  if (captionEl) captionEl.textContent = current.desc || '';

  if (imgEl) {
    imgEl.style.opacity = '0.3';
    imgEl.style.transform = 'scale(0.96)';
    
    // Adjust aspect-ratio classes for mobile screenshots vs widescreen
    if (current.aspect === 'mobile') {
      imgEl.classList.add('is-mobile-shot');
    } else {
      imgEl.classList.remove('is-mobile-shot');
    }

    const temp = new Image();
    temp.src = current.src;
    temp.onload = () => {
      imgEl.src = current.src;
      imgEl.alt = current.title || 'Screenshot';
      imgEl.style.opacity = '1';
      imgEl.style.transform = GalleryState.isZoomed ? 'scale(1.4)' : 'scale(1)';
    };
  }

  if (zoomBtn) {
    zoomBtn.innerHTML = GalleryState.isZoomed ? 
      '<i class="fas fa-search-minus"></i>' : 
      '<i class="fas fa-search-plus"></i>';
  }
}

/**
 * Toggles zoom on current image
 */
function toggleLightboxZoom() {
  const imgEl = document.getElementById('lightbox-img');
  const zoomBtn = document.getElementById('lightbox-zoom-btn');
  if (!imgEl) return;

  GalleryState.isZoomed = !GalleryState.isZoomed;
  imgEl.style.transform = GalleryState.isZoomed ? 'scale(1.4)' : 'scale(1)';
  imgEl.style.cursor = GalleryState.isZoomed ? 'zoom-out' : 'zoom-in';

  if (zoomBtn) {
    zoomBtn.innerHTML = GalleryState.isZoomed ? 
      '<i class="fas fa-search-minus"></i>' : 
      '<i class="fas fa-search-plus"></i>';
  }
}

window.toggleLightboxZoom = toggleLightboxZoom;

/**
 * Renders thumbnail carousel in the Lightbox
 */
function renderLightboxThumbnails() {
  const container = document.getElementById('lightbox-thumbnails');
  if (!container) return;

  if (GalleryState.activeList.length <= 1) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  container.style.display = 'flex';
  container.innerHTML = GalleryState.activeList.map((item, idx) => `
    <button type="button" class="lightbox-thumb-btn ${idx === GalleryState.currentIndex ? 'active' : ''}" onclick="selectLightboxIndex(${idx})" aria-label="View slide ${idx + 1}">
      <img src="${item.src}" alt="${item.title || ''}" class="w-full h-full object-cover">
    </button>
  `).join('');

  scrollToActiveThumbnail();
}

function selectLightboxIndex(idx) {
  GalleryState.currentIndex = idx;
  GalleryState.isZoomed = false;
  renderLightboxSlide();
  updateLightboxThumbnailsActive();
}

window.selectLightboxIndex = selectLightboxIndex;

function updateLightboxThumbnailsActive() {
  const btns = document.querySelectorAll('.lightbox-thumb-btn');
  btns.forEach((btn, idx) => {
    if (idx === GalleryState.currentIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  scrollToActiveThumbnail();
}

function scrollToActiveThumbnail() {
  const container = document.getElementById('lightbox-thumbnails');
  const activeBtn = container?.querySelector('.lightbox-thumb-btn.active');
  if (container && activeBtn) {
    activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

/* ── 3. VISUAL GALLERY SECTION RENDERER & INTERACTIVE FILTER ─ */
function initVisualGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container || typeof ALL_PROJECT_SCREENSHOTS === 'undefined') return;

  const isArabic = document.documentElement.lang === 'ar';

  // Render cards for all 25+ screenshots with uniform height and clean layout
  container.innerHTML = ALL_PROJECT_SCREENSHOTS.map((s, idx) => {
    const title = isArabic ? (s.titleAr || s.title) : s.title;
    const desc = isArabic ? (s.descAr || s.desc) : s.desc;
    const projectTitle = isArabic ? (s.projectTitleAr || s.projectTitle) : s.projectTitle;
    const isMobile = s.aspect === 'mobile';

    return `
      <article class="gallery-card group bento-reveal relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 transition-all duration-400 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10" data-category="${s.category}" data-gallery-index="${idx}" onclick="openAllScreenshotsLightbox(${idx})" tabindex="0" role="button" aria-label="${title}">
        
        <!-- Image Preview Frame (Uniform 16:10 Aspect Ratio) -->
        <div class="gallery-card-img-wrap relative w-full aspect-[16/10] overflow-hidden bg-[#060411] flex items-center justify-center">
          ${isMobile ? `
            <!-- Ambient blurred backdrop for mobile screens -->
            <img src="${s.src}" alt="" class="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-125" aria-hidden="true">
            <!-- Centered mobile phone frame -->
            <div class="relative h-[92%] w-auto aspect-[9/16] rounded-xl overflow-hidden border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10 bg-black flex-shrink-0">
              <img src="${s.src}" alt="${title}" class="w-full h-full object-cover object-top" loading="lazy">
            </div>
          ` : `
            <img src="${s.src}" alt="${title}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy">
          `}
          
          <!-- Hover Overlay Gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-40 group-hover:opacity-70 transition-opacity z-10 pointer-events-none"></div>
          
          <!-- Top Badges -->
          <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-20">
            <span class="cyber-badge text-[9px] px-2 py-0.5 bg-black/85 backdrop-blur-md" style="color:${s.accentColor}; border-color:${s.accentColor}55;">
              <i class="${isMobile ? 'fas fa-mobile-screen' : 'fas fa-desktop'} mr-1"></i> ${projectTitle}
            </span>
            <span class="text-[9px] font-mono font-bold text-cyan-300 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded border border-cyan-500/30">
              HD
            </span>
          </div>

          <!-- Hover Center Expand Icon -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
            <span class="w-10 h-10 rounded-full bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 flex items-center justify-center text-sm shadow-xl backdrop-blur-sm transform group-hover:scale-110 transition-transform">
              <i class="fas fa-expand-arrows-alt"></i>
            </span>
          </div>
        </div>

        <!-- Details Footer -->
        <div class="p-4 flex flex-col justify-between flex-1 text-left bg-[#080616]/80 border-t border-white/5">
          <div>
            <h4 class="font-heading text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1 mb-1">${title}</h4>
            <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed min-h-[32px]">${desc}</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
            <span class="text-slate-400 flex items-center gap-1.5 truncate max-w-[60%]"><i class="fas fa-layer-group text-cyan-400 flex-shrink-0"></i> <span class="truncate">${projectTitle}</span></span>
            <span class="text-cyan-400 font-bold group-hover:underline flex items-center gap-1 flex-shrink-0">${isArabic ? 'تكبير الشاشة ↗' : 'View Full HD ↗'}</span>
          </div>
        </div>

      </article>
    `;
  }).join('');

  // Setup gallery category filters
  initGalleryFilterTabs();
}

/**
 * Filter tabs for the Visual Gallery section
 */
function initGalleryFilterTabs() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const cards = document.querySelectorAll('.gallery-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';

      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        const shouldShow = (filter === 'all') || cat.split(' ').includes(filter);

        if (shouldShow) {
          card.classList.remove('is-hidden');
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
          }
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

window.initVisualGallery = initVisualGallery;

/* ── 4. KEYBOARD & SWIPE GESTURES FOR LIGHTBOX ──────────────── */
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('global-lightbox');
  if (!lightbox || !lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    // If RTL, ArrowLeft goes next, ArrowRight goes prev
    const isRtl = document.documentElement.dir === 'rtl';
    navigateLightbox(isRtl ? 1 : -1);
  } else if (e.key === 'ArrowRight') {
    const isRtl = document.documentElement.dir === 'rtl';
    navigateLightbox(isRtl ? -1 : 1);
  }
});

// Touch swipe gestures for mobile
document.addEventListener('touchstart', (e) => {
  const lightbox = document.getElementById('global-lightbox');
  if (!lightbox || !lightbox.classList.contains('active')) return;
  GalleryState.touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const lightbox = document.getElementById('global-lightbox');
  if (!lightbox || !lightbox.classList.contains('active')) return;
  GalleryState.touchEndX = e.changedTouches[0].screenX;
  handleLightboxSwipe();
}, { passive: true });

function handleLightboxSwipe() {
  const threshold = 50;
  const diff = GalleryState.touchEndX - GalleryState.touchStartX;
  const isRtl = document.documentElement.dir === 'rtl';

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      // Swiped right
      navigateLightbox(isRtl ? 1 : -1);
    } else {
      // Swiped left
      navigateLightbox(isRtl ? -1 : 1);
    }
  }
}
