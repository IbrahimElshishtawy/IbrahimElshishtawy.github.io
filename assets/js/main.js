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

  // Initialize structural scroll triggers
  initScrollTimeline();
  initScrollHeader();
  initPageVisibility();

  // Trigger Preloader fade out
  setTimeout(fadeOutPreloader, 900);
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
    card.addEventListener('click',   () => openCaseStudy(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCaseStudy(card); }
    });
  });
}

function initMiniProjectList() {
  document.querySelectorAll('.mini-project-card').forEach(card => {
    card.addEventListener('click',   () => openCaseStudy(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCaseStudy(card); }
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
