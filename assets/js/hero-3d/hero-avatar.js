/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D HOLOGRAPHIC DEVELOPER STAGE ENGINE
   (hero-avatar.js)
   ============================================================ */

'use strict';

window.Hero3DAvatar = (function () {
  let stageGroup = null;
  let portraitCardGroup = null;
  let laptopGroup = null;
  let pedestalRings = [];
  let codeCanvas = null;
  let codeCtx = null;
  let codeTexture = null;
  let codeScrollY = 0;

  // Animation & tracking state
  let clock = new THREE.Clock();
  let targetRotY = 0;
  let targetRotX = 0;
  let currentRotY = 0;
  let currentRotX = 0;

  function init(scene) {
    stageGroup = new THREE.Group();
    stageGroup.position.set(0.1, -0.45, 0);

    // 1. Build Cyber Pedestal & Floor Rings
    buildCyberPedestal();

    // 2. Build 3D Holographic Portrait Frame with Real Profile Image
    buildHolographicPortrait();

    // 3. Build Sleek 3D Developer Laptop on Base
    buildDeveloperLaptop();

    scene.add(stageGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     1. CYBER PEDESTAL & GROUND NEON RINGS
     ───────────────────────────────────────────────────────────── */
  function buildCyberPedestal() {
    const pedestalGroup = new THREE.Group();

    // Dark Reflective Circular Base
    const baseGeo = new THREE.CylinderGeometry(1.9, 2.05, 0.08, 48);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x080714,
      metalness: 0.9,
      roughness: 0.2
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.set(0, 0.04, 0);
    baseMesh.receiveShadow = true;
    pedestalGroup.add(baseMesh);

    // Neon Floor Rings
    const ringRadii = [
      { r: 1.95, color: 0x8b5cf6, speed: 0.4 },
      { r: 1.7,  color: 0x06b6d4, speed: -0.5 },
      { r: 1.45, color: 0x8b5cf6, speed: 0.3 }
    ];

    ringRadii.forEach((item, idx) => {
      const ringGeo = new THREE.RingGeometry(item.r, item.r + 0.03, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: item.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = -Math.PI / 2;
      ringMesh.position.y = 0.085 + (idx * 0.003);
      pedestalGroup.add(ringMesh);
      pedestalRings.push({ mesh: ringMesh, speed: item.speed });
    });

    stageGroup.add(pedestalGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     2. 3D HOLOGRAPHIC PORTRAIT FRAME WITH REAL PROFILE IMAGE
     ───────────────────────────────────────────────────────────── */
  function buildHolographicPortrait() {
    portraitCardGroup = new THREE.Group();
    portraitCardGroup.position.set(0, 1.45, 0);

    const cardWidth = 1.75;
    const cardHeight = 2.25;
    const cardDepth = 0.08;

    // Outer Beveled Cyber Glass Chassis
    const chassisGeo = new THREE.BoxGeometry(cardWidth + 0.1, cardHeight + 0.1, cardDepth);
    const chassisMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a0818,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9
    });
    const chassisMesh = new THREE.Mesh(chassisGeo, chassisMat);
    chassisMesh.castShadow = true;
    portraitCardGroup.add(chassisMesh);

    // Glowing Neon Border Edge
    const edges = new THREE.EdgesGeometry(chassisGeo);
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.9,
      linewidth: 2
    });
    const edgeMesh = new THREE.LineSegments(edges, edgeMat);
    portraitCardGroup.add(edgeMesh);

    // Load High-Res Profile Image Texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      'assets/assets/profile.jpg',
      (texture) => {
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;

        // Front Image Plane
        const imgGeo = new THREE.PlaneGeometry(cardWidth, cardHeight);
        const imgMat = new THREE.MeshStandardMaterial({
          map: texture,
          metalness: 0.15,
          roughness: 0.4,
          side: THREE.FrontSide
        });
        const imgMesh = new THREE.Mesh(imgGeo, imgMat);
        imgMesh.position.z = cardDepth / 2 + 0.005;
        portraitCardGroup.add(imgMesh);

        // Glass Front Cover
        const glassGeo = new THREE.PlaneGeometry(cardWidth, cardHeight);
        const glassMat = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          transmission: 0.4,
          opacity: 0.6,
          transparent: true,
          roughness: 0.05,
          metalness: 0.1,
          clearcoat: 1.0,
          reflectivity: 0.9
        });
        const glassMesh = new THREE.Mesh(glassGeo, glassMat);
        glassMesh.position.z = cardDepth / 2 + 0.015;
        portraitCardGroup.add(glassMesh);
      },
      undefined,
      (err) => {
        console.warn('Hero3D: Fallback to dark gradient card surface', err);
      }
    );

    // Holographic ID Banner at Bottom of Frame
    const bannerCanvas = document.createElement('canvas');
    bannerCanvas.width = 512;
    bannerCanvas.height = 128;
    const bCtx = bannerCanvas.getContext('2d');
    bCtx.fillStyle = 'rgba(8, 6, 20, 0.9)';
    bCtx.fillRect(0, 0, 512, 128);

    bCtx.strokeStyle = 'rgba(139, 92, 246, 0.6)';
    bCtx.lineWidth = 4;
    bCtx.strokeRect(4, 4, 504, 120);

    bCtx.font = 'bold 36px "Outfit", sans-serif';
    bCtx.fillStyle = '#ffffff';
    bCtx.fillText('IBRAHIM ELSHISHTAWY', 24, 52);

    bCtx.font = '600 24px "Outfit", sans-serif';
    bCtx.fillStyle = '#06b6d4';
    bCtx.fillText('FLUTTER ARCHITECT & ENGINEER', 24, 94);

    const bannerTexture = new THREE.CanvasTexture(bannerCanvas);
    const bannerGeo = new THREE.PlaneGeometry(cardWidth * 0.92, 0.42);
    const bannerMat = new THREE.MeshBasicMaterial({
      map: bannerTexture,
      transparent: true,
      opacity: 0.95
    });
    const bannerMesh = new THREE.Mesh(bannerGeo, bannerMat);
    bannerMesh.position.set(0, -cardHeight / 2 + 0.26, cardDepth / 2 + 0.025);
    portraitCardGroup.add(bannerMesh);

    // Top Status Indicator: "ONLINE • AVAILABLE"
    const statusGeo = new THREE.SphereGeometry(0.035, 16, 16);
    const statusMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const statusMesh = new THREE.Mesh(statusGeo, statusMat);
    statusMesh.position.set(cardWidth / 2 - 0.15, cardHeight / 2 - 0.15, cardDepth / 2 + 0.02);
    portraitCardGroup.add(statusMesh);

    stageGroup.add(portraitCardGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     3. 3D DEVELOPER LAPTOP WITH LIVE SCROLLING CODE
     ───────────────────────────────────────────────────────────── */
  function buildDeveloperLaptop() {
    laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.12, 0.85);

    // Laptop Base Chassis
    const baseGeo = new THREE.BoxGeometry(0.85, 0.03, 0.6);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x18152e,
      metalness: 0.9,
      roughness: 0.2
    });
    const baseMesh = new THREE.Mesh(baseGeo, metalMat);
    laptopGroup.add(baseMesh);

    // Glowing Keyboard Area
    const kbGeo = new THREE.PlaneGeometry(0.75, 0.35);
    const kbMat = new THREE.MeshBasicMaterial({
      color: 0x2e2555,
      side: THREE.DoubleSide
    });
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.rotation.x = -Math.PI / 2;
    kbMesh.position.set(0, 0.018, -0.05);
    laptopGroup.add(kbMesh);

    // Laptop Screen (Opened at 110 degrees)
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.015, -0.28);
    screenGroup.rotation.x = 0.32; // Tilted back

    // Screen Lid Back
    const lidGeo = new THREE.BoxGeometry(0.85, 0.56, 0.02);
    const lidMesh = new THREE.Mesh(lidGeo, metalMat);
    lidMesh.position.set(0, 0.28, 0);
    screenGroup.add(lidMesh);

    // Animated Code Texture on Screen
    codeCanvas = document.createElement('canvas');
    codeCanvas.width = 512;
    codeCanvas.height = 320;
    codeCtx = codeCanvas.getContext('2d');
    drawCodeTexture();

    codeTexture = new THREE.CanvasTexture(codeCanvas);
    const screenGeo = new THREE.PlaneGeometry(0.8, 0.5);
    const screenMat = new THREE.MeshBasicMaterial({
      map: codeTexture
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.28, 0.012);
    screenGroup.add(screenMesh);

    laptopGroup.add(screenGroup);
    stageGroup.add(laptopGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     4. DRAW CODE TEXTURE FOR LAPTOP SCREEN
     ───────────────────────────────────────────────────────────── */
  function drawCodeTexture() {
    if (!codeCtx) return;
    codeCtx.fillStyle = '#060410';
    codeCtx.fillRect(0, 0, 512, 320);

    codeCtx.font = '16px monospace';
    const lines = [
      { text: '// IBRAHIM.Dev — Flutter Systems Architecture', color: '#64748b' },
      { text: 'class MobileSystemEngineer extends FullStack {', color: '#c084fc' },
      { text: '  final String focus = "Clean Architecture";', color: '#38bdf8' },
      { text: '  final int experienceYears = 5;', color: '#4ade80' },
      { text: '  Future<void> deploySolution() async {', color: '#facc15' },
      { text: '    await Flutter.build(performance: 120fps);', color: '#38bdf8' },
      { text: '    await CloudServices.syncLocalState();', color: '#fb923c' },
      { text: '  }', color: '#c084fc' },
      { text: '}', color: '#c084fc' }
    ];

    lines.forEach((line, i) => {
      codeCtx.fillStyle = line.color;
      codeCtx.fillText(line.text, 24, 40 + (i * 30));
    });
  }

  /* ─────────────────────────────────────────────────────────────
     5. UPDATE LOOP (IDLE HOVER & MOUSE PARALLAX)
     ───────────────────────────────────────────────────────────── */
  function update(delta, mouseNormalized) {
    const elapsed = clock.getElapsedTime();

    // 1. Rotate Floor Rings
    pedestalRings.forEach(item => {
      item.mesh.rotation.z += item.speed * delta;
    });

    // 2. Smooth Mouse Look / Tilt
    if (mouseNormalized) {
      targetRotY = mouseNormalized.x * 0.25;
      targetRotX = -mouseNormalized.y * 0.18;
    }

    currentRotY += (targetRotY - currentRotY) * 0.06;
    currentRotX += (targetRotX - currentRotX) * 0.06;

    if (portraitCardGroup) {
      // Gentle floating levitation wave
      const floatY = 1.45 + Math.sin(elapsed * 1.6) * 0.04;
      portraitCardGroup.position.y = floatY;
      portraitCardGroup.rotation.y = currentRotY;
      portraitCardGroup.rotation.x = currentRotX;
    }

    // 3. Subtle Code Scroll on Laptop
    if (codeTexture) {
      codeScrollY += delta * 0.05;
      codeTexture.offset.y = codeScrollY % 1;
    }
  }

  /* ─────────────────────────────────────────────────────────────
     6. THEME RECOLOR
     ───────────────────────────────────────────────────────────── */
  function updateTheme(themeKey, isLightMode) {
    const conf = window.Hero3DConfig.themes[themeKey] || window.Hero3DConfig.themes[''];
    if (pedestalRings.length > 0) {
      pedestalRings.forEach((ring, i) => {
        const color = (i % 2 === 0) ? conf.rimPurple : conf.rimCyan;
        ring.mesh.material.color.setHex(color);
      });
    }
  }

  return {
    init: init,
    update: update,
    updateTheme: updateTheme
  };
})();
