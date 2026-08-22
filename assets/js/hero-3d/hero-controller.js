/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D HERO CONTROLLER & BOOTSTRAPPER
   (hero-controller.js)
   ============================================================ */

'use strict';

window.Hero3DController = (function () {
  let container = null;
  let canvas = null;
  let loadingEl = null;
  let fallbackEl = null;
  let animFrameId = null;
  let isVisible = true;
  let isReducedMotion = false;
  let mouseX = 0;
  let mouseY = 0;

  function init() {
    container = document.getElementById('hero-3d-container');
    canvas = document.getElementById('hero-3d-canvas');
    loadingEl = document.getElementById('hero-3d-loading');
    fallbackEl = document.getElementById('hero-3d-fallback');

    if (!container || !canvas) {
      console.warn('Hero3D: Required container or canvas element not found.');
      return;
    }

    // Check accessibility: prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotion = motionQuery.matches;
    motionQuery.addEventListener('change', e => {
      isReducedMotion = e.matches;
    });

    // Check WebGL availability
    if (!isWebGLSupported()) {
      showFallback();
      return;
    }

    // Initialize 3D Scene
    try {
      const sceneReady = window.Hero3DScene.init(canvas, container);
      if (!sceneReady) {
        showFallback();
        return;
      }

      const scene = window.Hero3DScene.scene();

      // Initialize Developer Avatar & Workstation
      window.Hero3DAvatar.init(scene);

      // Initialize Floating Tech Badges & Code Glyphs
      window.Hero3DFloatingCards.init(scene);

      // Bind Mouse, Scroll & Resize events
      bindEvents();

      // Start Render Loop
      startLoop();

      // Smoothly hide loading screen after brief initialization
      setTimeout(hideLoader, 550);

      console.log('%c⚡ 3D Interactive Hero Experience Initialized Successfully', 
        'color: #06b6d4; font-weight: bold;');
    } catch (err) {
      console.error('Hero3D initialization error:', err);
      showFallback();
    }
  }

  function isWebGLSupported() {
    try {
      const testCanvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
        (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  function showFallback() {
    if (loadingEl) loadingEl.style.display = 'none';
    if (canvas) canvas.style.display = 'none';
    if (fallbackEl) {
      fallbackEl.classList.remove('hidden');
      fallbackEl.style.display = 'block';
    }
  }

  function hideLoader() {
    if (!loadingEl) return;
    loadingEl.style.opacity = '0';
    loadingEl.style.pointerEvents = 'none';
    setTimeout(() => {
      loadingEl.style.display = 'none';
    }, 400);
  }

  function bindEvents() {
    // Mouse movement tracking (RTL-aware)
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Touch movement for mobile devices
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // Window resize
    window.addEventListener('resize', onResize, { passive: true });

    // Scroll parallax tracking
    window.addEventListener('scroll', onScroll, { passive: true });

    // Viewport Intersection Observer (pause when scrolled out of view)
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      observer.observe(container);
    }
  }

  function onMouseMove(e) {
    if (isReducedMotion) return;
    const w = window.innerWidth;
    const h = window.innerHeight;

    // RTL Awareness: invert X direction if document is in RTL mode
    const isRtl = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
    const rawX = (e.clientX - w / 2) / (w / 2);
    mouseX = isRtl ? -rawX : rawX;
    mouseY = (e.clientY - h / 2) / (h / 2);

    window.Hero3DScene.setNormalizedMouse(mouseX, mouseY);
  }

  function onTouchMove(e) {
    if (isReducedMotion || !e.touches || !e.touches[0]) return;
    const touch = e.touches[0];
    const w = window.innerWidth;
    const h = window.innerHeight;
    mouseX = (touch.clientX - w / 2) / (w / 2) * 0.8;
    mouseY = (touch.clientY - h / 2) / (h / 2) * 0.8;
    window.Hero3DScene.setNormalizedMouse(mouseX, mouseY);
  }

  function onResize() {
    window.Hero3DScene.handleResize();
  }

  function onScroll() {
    const scrollY = window.scrollY;
    const heroH = container.offsetHeight || 600;
    const progress = Math.min(1, Math.max(0, scrollY / heroH));
    window.Hero3DScene.setScrollProgress(progress);
  }

  function startLoop() {
    function animate() {
      animFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // Save GPU/CPU when not in viewport

      // Update character and environment animations
      window.Hero3DAvatar.update(mouseX, mouseY, 0);

      // Update floating tech cards and glyphs
      window.Hero3DFloatingCards.update(mouseX, mouseY);

      // Render Three.js scene
      window.Hero3DScene.render();
    }
    animate();
  }

  function updateTheme(themeId, isLight) {
    if (window.Hero3DScene && typeof window.Hero3DScene.updateTheme === 'function') {
      window.Hero3DScene.updateTheme(themeId, isLight);
    }
  }

  return {
    init: init,
    updateTheme: updateTheme,
    showFallback: showFallback
  };
})();

// Global Theme Hook for ThemeEngine in theme.js
window.setHero3DTheme = function (themeId, isLight) {
  if (window.Hero3DController) {
    window.Hero3DController.updateTheme(themeId, isLight);
  }
};
