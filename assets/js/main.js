/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v3.0
   Core Application Bootstrapper (main.js)
   ============================================================ */

'use strict';

console.log('%c🚀 Ibrahim.Dev Portfolio Engine v3.0 — Initializing Core', 
  'color: #8b5cf6; font-weight: bold; font-size: 13px;');

/* ── DOM READY BOOTSTRAPPER ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Three.js WebGL background
  initThreeJS();

  // Initialize 3D Interactive Hero Experience
  if (window.Hero3DController && typeof window.Hero3DController.init === 'function') {
    window.Hero3DController.init();
  }

  // Initialize mouse interactions & tracking
  initCustomCursor();
  initCardTilting();
  initMagneticButtons();
  initTechSpotlights();
  initProjectCardMouse();

  // Initialize selected works cards & overlay handlers
  initProjectCards();
  initMiniProjectList();
  initCaseStudyOverlay();
  initCinematicFilters();

  // Initialize Structural Scroll Triggers & Visibility
  initScrollTimeline();
  initScrollHeader();
  initPageVisibility();

  // Initialize Premium Portfolio Opening Experience
  if (window.PortfolioIntroEngine && typeof window.PortfolioIntroEngine.init === 'function') {
    window.PortfolioIntroEngine.init();
  } else {
    setTimeout(fadeOutPreloader, 900);
  }
});

/* ── MOBILE MENU TOGGLES ────────────────────────────────────── */
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  if (!menu || !btn) return;
  menu.classList.remove('active');
  btn.setAttribute('aria-expanded', 'false');
}

// Bind mobile menu trigger clicks
const mobBtn = document.getElementById('mobile-menu-btn');
if (mobBtn) {
  mobBtn.addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    const isOpen = menu.classList.toggle('active');
    this.setAttribute('aria-expanded', isOpen.toString());
  });
}

// Global escape key listener for overlays and mobile navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
    closeCaseStudy();
  }
});

/* ── PROJECT DETAILS EVENT HANDLERS ────────────────────────── */
function initProjectCards() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // Allow direct links to function
      openCaseStudy(card);
    });
    card.addEventListener('keydown', e => {
      if (e.target.closest('a')) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCaseStudy(card); }
    });
  });
}

function initMiniProjectList() {
  document.querySelectorAll('.mini-project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openCaseStudy(card);
    });
    card.addEventListener('keydown', e => {
      if (e.target.closest('a')) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCaseStudy(card); }
    });
  });
}

/* ── CINEMATIC CATEGORY FILTER SYSTEM ───────────────────────── */
function initCinematicFilters() {
  const filterBtns = document.querySelectorAll('.cinematic-filter-btn');
  const projectCards = document.querySelectorAll('.cinematic-project-card');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.classList.remove('is-hidden');
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
          }
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

function initCaseStudyOverlay() {
  const closeBtn = document.getElementById('close-overlay-btn');
  if (!closeBtn) return;

  closeBtn.addEventListener('click', closeCaseStudy);

  // Close on overlay backdrop clicks
  const overlay = document.getElementById('case-study-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeCaseStudy();
    });
  }
}

/* ── TIMELINE TRACKING PROGRESS ─────────────────────────────── */
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

/* ── FLOATING HEADER RESIZING ───────────────────────────────── */
function initScrollHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.style.paddingTop    = '8px';
      header.style.paddingBottom = '8px';
    } else {
      header.style.paddingTop    = '';
      header.style.paddingBottom = '';
    }
  }, { passive: true });
}

/* ── DEBOUNCING RESIZE CALCULATIONS ─────────────────────────── */
function debounce(fn, delay = 100) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

window.addEventListener('resize', debounce(onWindowResize), { passive: true });

console.log('%c✅ Portfolio Engine Bootstrapped', 'color: #10b981; font-weight: bold;');
