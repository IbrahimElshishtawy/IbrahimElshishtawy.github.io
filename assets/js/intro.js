/* ============================================================
   IBRAHIM ELSHISHTAWY — CINEMATIC COSMIC INTRO ENGINE v4.0
   Full-Screen 3D Cyber Warp Portal & Dimensional Entrance
   (intro.js)
   ============================================================ */

'use strict';

window.PortfolioIntroEngine = (function () {
  let introEl = null;
  let canvasEl = null;
  let animId = null;
  let isExited = false;
  let isWarping = false;

  // Three.js instances
  let renderer = null;
  let scene = null;
  let camera = null;

  // 3D Objects
  let starsGeo = null;
  let starsMesh = null;
  let starPositions = null;
  const STAR_COUNT = 1100;
  let starSpeed = 0.35;
  let targetStarSpeed = 0.35;

  let quantumCoreGroup = null;
  let outerPoly = null;
  let innerPoly = null;
  let ring1 = null;
  let ring2 = null;

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  function init() {
    introEl = document.getElementById('portfolio-intro');
    canvasEl = document.getElementById('intro-3d-canvas');
    if (!introEl || !canvasEl) return;

    // Reset initial state
    introEl.style.display = 'flex';
    introEl.style.opacity = '1';
    introEl.classList.remove('exiting');
    isExited = false;
    isWarping = false;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize Fullscreen 3D Portal Scene
    initPortal3D();

    // Mouse Parallax tracking
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onWindowResize, { passive: true });

    // Bind Skip / Enter Button
    const skipBtn = document.getElementById('intro-skip-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        startHyperWarp();
      });
    }

    // Keyboard shortcut (Escape, Space, or Enter to warp into portfolio)
    document.addEventListener('keydown', onKeyDown);

    if (isReduced) {
      setTimeout(finishIntroDirectly, 400);
      return;
    }

    // Start Cinematic Sequence & Progress HUD
    playIntroSequence();

    // Safety fallback: auto-finish if not already exited
    setTimeout(() => {
      if (!isExited) startHyperWarp();
    }, 3800);
  }

  function onMouseMove(e) {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }

  function onKeyDown(e) {
    if (!isExited && (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      startHyperWarp();
    }
  }

  function onWindowResize() {
    if (!camera || !renderer || !canvasEl) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  /* ─────────────────────────────────────────────────────────────
     1. FULLSCREEN 3D COSMIC WARP & QUANTUM CORE ENGINE
     ───────────────────────────────────────────────────────────── */
  function initPortal3D() {
    if (typeof THREE === 'undefined') return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 16);

    renderer = new THREE.WebGLRenderer({
      canvas: canvasEl,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // A. Build Cosmic Warp Starfield Tunnel
    buildStarfieldTunnel();

    // B. Build Central Dimensional Quantum Core
    buildQuantumCore();

    // C. Ambient Lights for Crystal Core
    const purpleLight = new THREE.PointLight(0x8b5cf6, 3, 50);
    purpleLight.position.set(5, 5, 8);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3, 50);
    cyanLight.position.set(-5, -3, 8);
    scene.add(cyanLight);

    const ambientLight = new THREE.AmbientLight(0x1a1530, 1.2);
    scene.add(ambientLight);

    // D. Start 60FPS Render Loop
    animate();
  }

  function buildStarfieldTunnel() {
    starsGeo = new THREE.BufferGeometry();
    starPositions = new Float32Array(STAR_COUNT * 3);
    const starColors = new Float32Array(STAR_COUNT * 3);

    const colorPalette = [
      new THREE.Color(0x8b5cf6), // Cyber Purple
      new THREE.Color(0x06b6d4), // Neon Cyan
      new THREE.Color(0xec4899), // Neon Pink
      new THREE.Color(0xffffff), // Diamond White
      new THREE.Color(0x38bdf8)  // Sky Blue
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;
      // Cylinder distribution along Z-axis tunnel
      const radius = 3.5 + Math.random() * 24;
      const angle = Math.random() * Math.PI * 2;

      starPositions[i3]     = Math.cos(angle) * radius;
      starPositions[i3 + 1] = Math.sin(angle) * radius;
      starPositions[i3 + 2] = (Math.random() - 0.7) * 110; // -77 to +33

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i3]     = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;
    }

    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Particle sprite using canvas
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d');
    const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    grad.addColorStop(0.7, 'rgba(139, 92, 246, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = grad;
    pCtx.beginPath();
    pCtx.arc(16, 16, 16, 0, Math.PI * 2);
    pCtx.fill();

    const starTexture = new THREE.CanvasTexture(pCanvas);

    const starsMat = new THREE.PointsMaterial({
      size: 1.15,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    starsMesh = new THREE.Points(starsGeo, starsMat);
    scene.add(starsMesh);
  }

  function buildQuantumCore() {
    quantumCoreGroup = new THREE.Group();
    // Positioned gracefully above the logo
    quantumCoreGroup.position.set(0, 1.35, 0);

    // 1. Outer Wireframe Polyhedron (Icosahedron)
    const icosaGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const icosaEdges = new THREE.EdgesGeometry(icosaGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.9,
      linewidth: 2
    });
    outerPoly = new THREE.LineSegments(icosaEdges, outerMat);
    quantumCoreGroup.add(outerPoly);

    // Glowing vertex anchors
    const vertexPointsGeo = new THREE.BufferGeometry().copy(icosaGeo);
    const vertexPointsMat = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.22,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    quantumCoreGroup.add(vertexPoints);

    // 2. Inner Translucent Faceted Crystal (Dodecahedron)
    const dodecaGeo = new THREE.DodecahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      emissive: 0x044359,
      specular: 0xffffff,
      shininess: 90,
      transparent: true,
      opacity: 0.55,
      wireframe: false,
      side: THREE.DoubleSide
    });
    innerPoly = new THREE.Mesh(dodecaGeo, innerMat);
    quantumCoreGroup.add(innerPoly);

    // Inner wireframe edges for crystal definition
    const innerEdges = new THREE.EdgesGeometry(dodecaGeo);
    const innerEdgesMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8
    });
    const innerWire = new THREE.LineSegments(innerEdges, innerEdgesMat);
    innerPoly.add(innerWire);

    // 3. Dual Gyroscopic Orbital Energy Rings
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.024, 8, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.75
    });
    ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.5;
    ring1.rotation.y = Math.PI / 6;
    quantumCoreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.7, 0.018, 8, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.7
    });
    ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 5;
    quantumCoreGroup.add(ring2);

    scene.add(quantumCoreGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     2. 60FPS THREE.JS RENDER LOOP WITH HYPER-WARP ACCELERATION
     ───────────────────────────────────────────────────────────── */
  function animate() {
    if (isExited) return;
    animId = requestAnimationFrame(animate);

    // Smooth mouse lerp
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    // Camera parallax and perspective sway
    camera.position.x = mouseX * 0.8;
    camera.position.y = -mouseY * 0.6;
    camera.lookAt(0, 0.4, 0);

    // A. Quantum Core Rotation
    if (outerPoly) {
      outerPoly.rotation.x += 0.011;
      outerPoly.rotation.y += 0.014;
    }
    if (innerPoly) {
      innerPoly.rotation.x -= 0.015;
      innerPoly.rotation.y -= 0.018;
      innerPoly.rotation.z += 0.008;
    }
    if (ring1) {
      ring1.rotation.z += 0.022;
      ring1.rotation.x += 0.007;
    }
    if (ring2) {
      ring2.rotation.z -= 0.018;
      ring2.rotation.y += 0.009;
    }

    // B. Warp Speed Interpolation
    starSpeed += (targetStarSpeed - starSpeed) * (isWarping ? 0.15 : 0.05);

    // C. Starfield forward motion tunnel
    if (starsGeo && starPositions) {
      const positions = starsGeo.attributes.position.array;
      for (let i = 0; i < STAR_COUNT; i++) {
        const i3 = i * 3 + 2;
        positions[i3] += starSpeed;

        // Wrap stars from behind camera back to deep space
        if (positions[i3] > 20) {
          positions[i3] = -95 - Math.random() * 20;
        }
      }
      starsGeo.attributes.position.needsUpdate = true;

      // Slight vortex twist
      starsMesh.rotation.z += 0.0015;
    }

    // D. Hyper-Warp Exit Motion
    if (isWarping) {
      camera.position.z -= 0.45; // Camera rushes into the portal core
      if (quantumCoreGroup) {
        quantumCoreGroup.scale.x += 0.06;
        quantumCoreGroup.scale.y += 0.06;
        quantumCoreGroup.scale.z += 0.06;
      }
    }

    renderer.render(scene, camera);
  }

  /* ─────────────────────────────────────────────────────────────
     3. CINEMATIC TIMELINE SEQUENCE & PROGRESS HUD
     ───────────────────────────────────────────────────────────── */
  function playIntroSequence() {
    const content = document.querySelector('.intro-content');
    const hudTopLeft = document.querySelector('.intro-hud-top-left');
    const hudTopRight = document.querySelector('.intro-hud-top-right');
    const skipBtn = document.getElementById('intro-skip-btn');
    const progressFill = document.getElementById('intro-progress-fill');
    const progressPercent = document.getElementById('intro-progress-percent');

    // Stage 1: Ambient HUD activation (120ms)
    setTimeout(() => {
      if (hudTopLeft) hudTopLeft.classList.add('visible');
      if (hudTopRight) hudTopRight.classList.add('visible');
    }, 120);

    // Stage 2: Brand content & 3D Core visible (350ms)
    setTimeout(() => {
      if (content) content.classList.add('visible');
    }, 350);

    // Stage 3: Enter Dimension button reveal (500ms)
    setTimeout(() => {
      if (skipBtn) skipBtn.classList.add('show');
    }, 500);

    // Stage 4: High-Tech Progress Counter Animation (0 -> 100%)
    const startTime = Date.now();
    const duration = 2100; // 2.1 seconds for loading progress

    function updateProgress() {
      if (isExited || isWarping) return;
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeOutCubic(progress);
      const pct = Math.floor(easeProgress * 100);

      if (progressFill) progressFill.style.width = `${pct}%`;
      if (progressPercent) progressPercent.textContent = `${pct}%`;

      if (progress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Automatically trigger Hyper-Warp once 100% is reached
        setTimeout(() => {
          if (!isExited && !isWarping) {
            startHyperWarp();
          }
        }, 150);
      }
    }

    setTimeout(() => {
      requestAnimationFrame(updateProgress);
    }, 300);
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  /* ─────────────────────────────────────────────────────────────
     4. HYPER-WARP ACCELERATION & TRANSITION TO WEBSITE WORLD
     ───────────────────────────────────────────────────────────── */
  function startHyperWarp() {
    if (isExited || isWarping || !introEl) return;
    isWarping = true;

    // Trigger hyperspace particle acceleration
    targetStarSpeed = 5.2;

    // Add exiting morph class for cosmic dimension burst
    introEl.classList.add('exiting');

    // Remove window event listeners
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onWindowResize);
    document.removeEventListener('keydown', onKeyDown);

    // Smoothly handoff and trigger website hero entrance reveal
    if (typeof triggerEntranceReveal === 'function') {
      setTimeout(() => {
        triggerEntranceReveal();
      }, 180);
    }

    // Clean up DOM and WebGL resources
    setTimeout(() => {
      finishIntroDirectly();
    }, 750);
  }

  function finishIntroDirectly() {
    if (isExited) return;
    isExited = true;

    if (introEl) {
      introEl.style.display = 'none';
    }
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }

    // Dispose 3D scene resources to free GPU memory
    try {
      if (starsGeo) starsGeo.dispose();
      if (renderer) renderer.dispose();
    } catch (e) {
      // safe fallback
    }
  }

  return {
    init: init,
    finish: startHyperWarp
  };
})();
