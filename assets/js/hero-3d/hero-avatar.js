/* ============================================================
   IBRAHIM ELSHISHTAWY — SEAMLESS 3D DEVELOPER HERO ENGINE
   (hero-avatar.js)
   ============================================================ */

'use strict';

window.Hero3DAvatar = (function () {
  let stageGroup = null;
  let characterMesh = null;
  let floorRingMesh = null;
  let holoCubeMesh = null;

  // Animation & tracking state
  let clock = new THREE.Clock();
  let targetRotY = 0;
  let targetRotX = 0;
  let currentRotY = 0;
  let currentRotX = 0;

  function init(scene) {
    stageGroup = new THREE.Group();
    stageGroup.position.set(0, 0, 0);

    // 1. Build Seamless 3D Visual Plane
    buildSeamlessDeveloperVisual();

    // 2. Build Floating Wireframe Holo Cube (Top-Left)
    buildFloatingHoloCube();

    scene.add(stageGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     1. BUILD SEAMLESS DEVELOPER VISUAL
     ───────────────────────────────────────────────────────────── */
  function buildSeamlessDeveloperVisual() {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      'assets/assets/hero_seamless_3d.jpg',
      (texture) => {
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;

        // Visual Plane matching 1:1 aspect ratio
        const planeGeo = new THREE.PlaneGeometry(3.6, 3.6);
        const planeMat = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.FrontSide
        });

        characterMesh = new THREE.Mesh(planeGeo, planeMat);
        characterMesh.position.set(0, 1.15, 0);
        stageGroup.add(characterMesh);
      },
      undefined,
      (err) => {
        console.warn('Hero3D: Fallback image texture error', err);
      }
    );
  }

  /* ─────────────────────────────────────────────────────────────
     2. FLOATING WIREFRAME HOLO CUBE
     ───────────────────────────────────────────────────────────── */
  function buildFloatingHoloCube() {
    const cubeGeo = new THREE.BoxGeometry(0.32, 0.32, 0.32);
    const edges = new THREE.EdgesGeometry(cubeGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.85,
      linewidth: 2
    });
    holoCubeMesh = new THREE.LineSegments(edges, lineMat);
    holoCubeMesh.position.set(-1.05, 2.35, 0.4);
    stageGroup.add(holoCubeMesh);
  }

  /* ─────────────────────────────────────────────────────────────
     3. UPDATE LOOP (IDLE FLOATING & MOUSE PARALLAX)
     ───────────────────────────────────────────────────────────── */
  function update(delta, mouseNormalized) {
    const elapsed = clock.getElapsedTime();

    // 1. Mouse Tilt & Parallax
    if (mouseNormalized) {
      targetRotY = mouseNormalized.x * 0.18;
      targetRotX = -mouseNormalized.y * 0.12;
    }

    currentRotY += (targetRotY - currentRotY) * 0.06;
    currentRotX += (targetRotX - currentRotX) * 0.06;

    if (characterMesh) {
      // Subtle organic breathing motion
      const floatY = 1.15 + Math.sin(elapsed * 1.4) * 0.025;
      characterMesh.position.y = floatY;
      characterMesh.rotation.y = currentRotY;
      characterMesh.rotation.x = currentRotX;
    }

    // 2. Rotate Floating Wireframe Cube
    if (holoCubeMesh) {
      holoCubeMesh.rotation.x += delta * 0.6;
      holoCubeMesh.rotation.y += delta * 0.8;
      holoCubeMesh.position.y = 2.35 + Math.sin(elapsed * 1.8 + 1.0) * 0.04;
    }
  }

  /* ─────────────────────────────────────────────────────────────
     4. THEME RECOLOR
     ───────────────────────────────────────────────────────────── */
  function updateTheme(themeKey, isLightMode) {
    const conf = window.Hero3DConfig.themes[themeKey] || window.Hero3DConfig.themes[''];
    if (holoCubeMesh) {
      holoCubeMesh.material.color.setHex(conf.rimPurple);
    }
  }

  return {
    init: init,
    update: update,
    updateTheme: updateTheme
  };
})();
