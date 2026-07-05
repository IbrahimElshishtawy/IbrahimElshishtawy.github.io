/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v3.0
   Dynamic Theme Switcher (theme.js)
   ============================================================ */

'use strict';

(function ThemeEngine() {

  /* ── CONFIGURATION ──────────────────────────────────────── */
  const THEMES = [
    { id: '',           label: 'Cyber Purple', emoji: '🟣' },
    { id: 'cyber-blue', label: 'Cyber Blue',   emoji: '🔵' },
    { id: 'neon-green', label: 'Neon Green',   emoji: '🟢' },
    { id: 'solar-red',  label: 'Solar Red',    emoji: '🟠' },
  ];

  const STORAGE_KEY = 'ibrahim-portfolio-theme';

  /* ── STATE ─────────────────────────────────────────────── */
  let isOpen = false;
  let currentTheme = '';

  /* ── DOM REFS ──────────────────────────────────────────── */
  const html       = document.documentElement;
  const toggleBtn  = document.getElementById('theme-toggle-btn');
  const palette    = document.getElementById('theme-palette');
  const swatches   = document.querySelectorAll('.theme-swatch');

  /* ── INIT ──────────────────────────────────────────────── */
  function init() {
    if (!toggleBtn || !palette) return;

    // Inject flash overlay element
    const flash = document.createElement('div');
    flash.className = 'theme-flash';
    flash.id = 'theme-flash';
    document.body.appendChild(flash);

    // Load saved theme
    const saved = localStorage.getItem(STORAGE_KEY) || '';
    applyTheme(saved, false);

    // Bind toggle button
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePalette();
    });

    // Bind swatch buttons
    swatches.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const theme = btn.getAttribute('data-theme') || '';
        if (theme !== currentTheme) {
          applyTheme(theme, true);
        }
        closePalette();
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (isOpen && !palette.contains(e.target) && e.target !== toggleBtn) {
        closePalette();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closePalette();
    });

    console.log('%c🎨 Theme Engine ready — 4 themes available', 
      'color: #8b5cf6; font-weight:bold;');
  }

  /* ── APPLY THEME ───────────────────────────────────────── */
  function applyTheme(themeId, animate) {
    currentTheme = themeId;

    // Set data-theme on <html>
    if (themeId) {
      html.setAttribute('data-theme', themeId);
    } else {
      html.removeAttribute('data-theme');
    }

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, themeId);

    // Update active swatch
    swatches.forEach(btn => {
      const id = btn.getAttribute('data-theme') || '';
      btn.classList.toggle('active', id === themeId);
    });

    // Update Three.js particles color if engine is available
    updateParticleColor(themeId);

    // Flash animation
    if (animate) flashTransition();

    // Update body background explicitly for full flush
    document.body.style.backgroundColor = getComputedStyle(html)
      .getPropertyValue('--bg').trim();
  }

  /* ── FLASH ANIMATION ───────────────────────────────────── */
  function flashTransition() {
    const flash = document.getElementById('theme-flash');
    if (!flash) return;
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 250);
  }

  /* ── UPDATE THREE.JS PARTICLE COLOR ────────────────────── */
  function updateParticleColor(themeId) {
    // Try to update Three.js particle system color if it exposes a setter
    if (typeof window.setParticleTheme === 'function') {
      window.setParticleTheme(themeId);
    }
  }

  /* ── TOGGLE PALETTE ────────────────────────────────────── */
  function togglePalette() {
    isOpen ? closePalette() : openPalette();
  }

  function openPalette() {
    isOpen = true;
    palette.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.style.transform = 'rotate(30deg) scale(1.1)';
  }

  function closePalette() {
    isOpen = false;
    palette.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.style.transform = '';
  }

  /* ── BOOTSTRAP ─────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external callers
  window.ThemeEngine = { apply: applyTheme };

})();
