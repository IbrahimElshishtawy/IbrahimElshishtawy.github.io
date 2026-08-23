/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO OPENING EXPERIENCE ENGINE
   (intro.js)
   ============================================================ */

'use strict';

window.PortfolioIntroEngine = (function () {
  let introEl = null;
  let canvasEl = null;
  let animId = null;
  let isExited = false;

  function init() {
    introEl = document.getElementById('portfolio-intro');
    if (!introEl) return;

    // Reset initial state
    introEl.style.display = 'flex';
    introEl.style.opacity = '1';
    introEl.classList.remove('exiting');
    isExited = false;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Setup 3D Mini Opening Scene
    initIntro3D();

    // Bind Skip Button
    const skipBtn = document.getElementById('intro-skip-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        finishIntro();
      });
    }

    // Keyboard shortcut (Escape or Enter to skip)
    document.addEventListener('keydown', (e) => {
      if (!isExited && (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter')) {
        finishIntro();
      }
    });

    if (isReduced) {
      setTimeout(finishIntro, 500);
      return;
    }

    // Always play the full cinematic opening sequence
    playIntroSequence();

    // Safety fallback
    setTimeout(() => {
      if (!isExited) finishIntro();
    }, 3600);
  }

  /* ─────────────────────────────────────────────────────────────
     1. CINEMATIC INTRO TIMELINE SEQUENCE
     ───────────────────────────────────────────────────────────── */
  function playIntroSequence() {
    const dot = document.querySelector('.intro-center-dot');
    const glow = document.querySelector('.intro-ambient-glow');
    const content = document.querySelector('.intro-content');
    const devTag = document.querySelector('.intro-developer-tag');
    const skipBtn = document.getElementById('intro-skip-btn');

    // Stage 1: Pulse center light (100ms)
    setTimeout(() => {
      if (dot) dot.classList.add('pulse');
    }, 100);

    // Stage 2: Expand ambient lighting (250ms)
    setTimeout(() => {
      if (glow) glow.classList.add('active');
    }, 280);

    // Stage 3: Show Skip button (400ms)
    setTimeout(() => {
      if (skipBtn) skipBtn.classList.add('show');
    }, 400);

    // Stage 4: Logo & 3D object reveal (550ms)
    setTimeout(() => {
      if (content) content.classList.add('visible');
    }, 550);

    // Stage 5: Developer identity subtitle reveal (950ms)
    setTimeout(() => {
      if (devTag) devTag.classList.add('show');
    }, 950);

    // Stage 6: Seamless Transition to Website Hero (2400ms)
    setTimeout(() => {
      finishIntro();
    }, 2400);
  }

  /* ─────────────────────────────────────────────────────────────
     2. FINISH INTRO & REVEAL HERO SECTION
     ───────────────────────────────────────────────────────────── */
  function finishIntro() {
    if (isExited || !introEl) return;
    isExited = true;

    // Add exiting class for morphing scale & blur transition
    introEl.classList.add('exiting');

    // Trigger website hero reveal animations smoothly
    if (typeof triggerEntranceReveal === 'function') {
      triggerEntranceReveal();
    }

    // Clean up DOM and 3D resources after fade out
    setTimeout(() => {
      if (introEl) {
        introEl.style.display = 'none';
      }
      if (animId) cancelAnimationFrame(animId);
    }, 850);
  }

  /* ─────────────────────────────────────────────────────────────
     3. INTRO 3D GEOMETRIC PRISM SCENE
     ───────────────────────────────────────────────────────────── */
  function initIntro3D() {
    canvasEl = document.getElementById('intro-3d-canvas');
    if (!canvasEl || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasEl,
      alpha: true,
      antialias: true
    });
    renderer.setSize(80, 80);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Outer Cyber Octahedron
    const geo = new THREE.OctahedronGeometry(1.05, 0);
    const edges = new THREE.EdgesGeometry(geo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.9,
      linewidth: 2
    });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    scene.add(wireframe);

    // Inner Glowing Core
    const coreGeo = new THREE.OctahedronGeometry(0.6, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    function animate() {
      if (isExited) return;
      animId = requestAnimationFrame(animate);
      wireframe.rotation.x += 0.014;
      wireframe.rotation.y += 0.02;
      core.rotation.x -= 0.01;
      core.rotation.y -= 0.015;
      renderer.render(scene, camera);
    }
    animate();
  }

  return {
    init: init,
    finish: finishIntro
  };
})();
