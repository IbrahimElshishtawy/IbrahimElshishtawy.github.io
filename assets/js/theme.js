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
  const MODE_KEY = 'ibrahim-portfolio-mode';

  /* ── STATE ─────────────────────────────────────────────── */
  let isOpen = false;
  let currentTheme = '';
  let isLightMode = false;

  /* ── DOM REFS ──────────────────────────────────────────── */
  const html       = document.documentElement;
  const toggleBtn  = document.getElementById('theme-toggle-btn');
  const palette    = document.getElementById('theme-palette');
  const swatches   = document.querySelectorAll('.theme-swatch');
  const modeBtn    = document.getElementById('mode-toggle-btn');
  const modeIcon   = document.getElementById('mode-icon');

  /* ── INIT ──────────────────────────────────────────────── */
  function init() {
    if (!toggleBtn || !palette) return;

    // Inject flash overlay element
    const flash = document.createElement('div');
    flash.className = 'theme-flash';
    flash.id = 'theme-flash';
    document.body.appendChild(flash);

    // Load saved theme and mode
    const saved = localStorage.getItem(STORAGE_KEY) || '';
    const savedMode = localStorage.getItem(MODE_KEY);
    isLightMode = savedMode === 'light';
    
    applyTheme(saved, false);
    applyMode(isLightMode, false);

    // Bind theme toggle button
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePalette();
    });

    // Bind mode toggle button
    if (modeBtn) {
      modeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isLightMode = !isLightMode;
        applyMode(isLightMode, true);
      });
    }

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

  /* ── APPLY MODE (LIGHT/DARK) ───────────────────────────── */
  function applyMode(isLight, animate) {
    if (isLight) {
      html.setAttribute('data-theme-mode', 'light');
      localStorage.setItem(MODE_KEY, 'light');
      if (modeIcon) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        modeIcon.style.color = '#f59e0b'; // Sun color
      }
    } else {
      html.removeAttribute('data-theme-mode');
      localStorage.setItem(MODE_KEY, 'dark');
      if (modeIcon) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        modeIcon.style.color = ''; // Reset color
      }
    }

    // Update Three.js particles color to adapt to mode
    updateParticleColor(currentTheme);

    // Flash animation
    if (animate) flashTransition();

    // Update body background explicitly
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
