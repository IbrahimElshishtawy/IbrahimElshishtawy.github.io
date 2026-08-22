/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D DEVELOPER AVATAR & CYBER POD
   (hero-avatar.js)
   ============================================================ */

'use strict';

window.Hero3DAvatar = (function () {
  let avatarGroup = null;
  let devCharacterGroup = null;
  let headGroup = null;
  let neckGroup = null;
  let torsoMesh = null;
  let leftArmGroup = null;
  let rightArmGroup = null;
  let leftEyelid = null;
  let rightEyelid = null;
  let workstationGroup = null;
  let cyberPodGroup = null;
  let floatingHoloCube = null;
  let codeTextureCanvas = null;
  let codeTextureCtx = null;
  let codeTexture = null;
  let pedestalRings = [];

  // Animation & tracking state
  let clock = new THREE.Clock();
  let nextBlinkTime = 2.0;
  let isBlinking = false;
  let blinkProgress = 0;
  let targetHeadRotY = 0;
  let targetHeadRotX = 0;
  let currentHeadRotY = 0;
  let currentHeadRotX = 0;
  let codeScrollY = 0;
  let externalModelLoaded = false;

  function init(scene) {
    avatarGroup = new THREE.Group();
    avatarGroup.position.set(0.15, -0.68, 0);

    // 1. Build Ground Cyber Pedestal Platform
    buildGroundPedestal();

    // 2. Build Glowing Cyber Pod / Box (Seat)
    buildCyberPodSeat();

    // 3. Build Workstation Desk & Monitor in Background
    buildWorkstation();

    // 4. Build Floating Cyber Hologram Cube
    buildFloatingHoloCube();

    // 5. Build Developer Character (or load external GLB if present)
    if (window.Hero3DConfig.ENABLE_EXTERNAL_GLB && typeof THREE.GLTFLoader !== 'undefined') {
      tryLoadExternalModel(scene, () => {
        if (!externalModelLoaded) buildProceduralDeveloper();
      });
    } else {
      buildProceduralDeveloper();
    }

    scene.add(avatarGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     1. GROUND CYBER PLATFORM
     ───────────────────────────────────────────────────────────── */
  function buildGroundPedestal() {
    const groundGroup = new THREE.Group();

    // Dark Reflective Base Cylinder
    const baseGeo = new THREE.CylinderGeometry(2.3, 2.45, 0.12, 48);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x070611,
      metalness: 0.85,
      roughness: 0.25
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.set(0, 0.06, 0.15);
    baseMesh.receiveShadow = true;
    groundGroup.add(baseMesh);

    // Glowing Neon Rings on Platform Floor
    [2.32, 2.1, 1.85].forEach((radius, idx) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.035, 64);
      const isPurple = idx % 2 === 0;
      const ringMat = new THREE.MeshBasicMaterial({
        color: isPurple ? 0x9333ea : 0x06b6d4,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.88 - idx * 0.2
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(0, 0.125 + idx * 0.003, 0.15);
      ringMesh.rotation.x = -Math.PI / 2;
      groundGroup.add(ringMesh);
      pedestalRings.push(ringMesh);
    });

    avatarGroup.add(groundGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     2. GLOWING CYBER POD / BOX (The Seated Tech Chest)
     ───────────────────────────────────────────────────────────── */
  function buildCyberPodSeat() {
    cyberPodGroup = new THREE.Group();
    cyberPodGroup.position.set(0.08, 0.6, 0.05);

    const podMat = new THREE.MeshStandardMaterial({
      color: 0x0a0916,
      metalness: 0.9,
      roughness: 0.2
    });

    const purpleNeonMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.95
    });

    const cyanNeonMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.9
    });

    // Main Box Structure
    const boxGeo = new THREE.BoxGeometry(0.96, 0.95, 0.92);
    const boxMesh = new THREE.Mesh(boxGeo, podMat);
    boxMesh.castShadow = true;
    boxMesh.receiveShadow = true;
    cyberPodGroup.add(boxMesh);

    // Glowing Neon Perimeter Bevel Edges (Top and Bottom)
    // Top front rim
    const topEdgeGeo = new THREE.BoxGeometry(0.98, 0.02, 0.02);
    const topFrontEdge = new THREE.Mesh(topEdgeGeo, purpleNeonMat);
    topFrontEdge.position.set(0, 0.47, 0.46);
    cyberPodGroup.add(topFrontEdge);

    const topBackEdge = new THREE.Mesh(topEdgeGeo, purpleNeonMat);
    topBackEdge.position.set(0, 0.47, -0.46);
    cyberPodGroup.add(topBackEdge);

    const topSideGeo = new THREE.BoxGeometry(0.02, 0.02, 0.94);
    const topLeftEdge = new THREE.Mesh(topSideGeo, purpleNeonMat);
    topLeftEdge.position.set(-0.48, 0.47, 0);
    cyberPodGroup.add(topLeftEdge);

    const topRightEdge = new THREE.Mesh(topSideGeo, purpleNeonMat);
    topRightEdge.position.set(0.48, 0.47, 0);
    cyberPodGroup.add(topRightEdge);

    // Bottom Neon Trim
    const botFrontEdge = new THREE.Mesh(topEdgeGeo, cyanNeonMat);
    botFrontEdge.position.set(0, -0.46, 0.46);
    cyberPodGroup.add(botFrontEdge);

    // Front Illuminated "IBRAHIM.DEV" Shield Logo on Pod
    const logoCanvas = document.createElement('canvas');
    logoCanvas.width = 256;
    logoCanvas.height = 256;
    const lctx = logoCanvas.getContext('2d');
    
    // Draw Shield & Emblem
    lctx.fillStyle = 'rgba(0,0,0,0)';
    lctx.fillRect(0, 0, 256, 256);
    
    // Glowing stylized "I" logo chevron
    lctx.fillStyle = '#a855f7';
    lctx.beginPath();
    lctx.moveTo(80, 50);
    lctx.lineTo(176, 50);
    lctx.lineTo(150, 110);
    lctx.lineTo(190, 110);
    lctx.lineTo(100, 206);
    lctx.lineTo(120, 140);
    lctx.lineTo(80, 140);
    lctx.closePath();
    lctx.fill();

    lctx.font = 'bold 22px sans-serif';
    lctx.fillStyle = '#ffffff';
    lctx.textAlign = 'center';
    lctx.fillText('IBRAHIM.DEV', 128, 235);

    const logoTexture = new THREE.CanvasTexture(logoCanvas);
    const logoPlaneGeo = new THREE.PlaneGeometry(0.48, 0.48);
    const logoMat = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
      depthWrite: false
    });
    const logoMesh = new THREE.Mesh(logoPlaneGeo, logoMat);
    logoMesh.position.set(0, -0.04, 0.47);
    cyberPodGroup.add(logoMesh);

    avatarGroup.add(cyberPodGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     3. BACKGROUND WORKSTATION & MONITOR
     ───────────────────────────────────────────────────────────── */
  function buildWorkstation() {
    workstationGroup = new THREE.Group();
    workstationGroup.position.set(1.4, 0.35, -0.65);

    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x090912,
      roughness: 0.3,
      metalness: 0.8
    });

    const monitorMat = new THREE.MeshStandardMaterial({
      color: 0x050508,
      roughness: 0.15,
      metalness: 0.95
    });

    // Desk Surface
    const deskGeo = new THREE.BoxGeometry(1.6, 0.08, 0.9);
    const deskMesh = new THREE.Mesh(deskGeo, deskMat);
    deskMesh.position.set(0, 0.85, 0);
    deskMesh.castShadow = true;
    deskMesh.receiveShadow = true;
    workstationGroup.add(deskMesh);

    // Desk Legs
    [-0.7, 0.7].forEach(x => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.85, 0.8), deskMat);
      leg.position.set(x, 0.42, 0);
      workstationGroup.add(leg);
    });

    // Ultrawide Curved Monitor Stand & Frame
    const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.42, 16), monitorMat);
    stand.position.set(0, 1.05, -0.15);
    workstationGroup.add(stand);

    const monitorFrameGeo = new THREE.BoxGeometry(1.45, 0.65, 0.04);
    const monitorFrame = new THREE.Mesh(monitorFrameGeo, monitorMat);
    monitorFrame.position.set(0, 1.4, -0.18);
    monitorFrame.rotation.y = -0.18; // angled slightly towards center
    workstationGroup.add(monitorFrame);

    // Live Code Editor Screen
    createCodeCanvasTexture();
    const screenGeo = new THREE.PlaneGeometry(1.4, 0.6);
    const screenMat = new THREE.MeshBasicMaterial({
      map: codeTexture,
      transparent: true
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.4, -0.155);
    screenMesh.rotation.y = Math.PI - 0.18;
    workstationGroup.add(screenMesh);

    // Mini Cyber Potted Plant on Desk (Succulent / Bonsai)
    const potGeo = new THREE.CylinderGeometry(0.08, 0.06, 0.12, 16);
    const potMat = new THREE.MeshStandardMaterial({ color: 0x1a162b, metalness: 0.7 });
    const potMesh = new THREE.Mesh(potGeo, potMat);
    potMesh.position.set(-0.55, 0.95, 0.15);
    workstationGroup.add(potMesh);

    // Leaves
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.4 });
    for (let i = 0; i < 5; i++) {
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), leafMat);
      leaf.scale.set(1, 1.6, 0.4);
      leaf.position.set(-0.55 + Math.cos(i * 1.2) * 0.04, 1.03, 0.15 + Math.sin(i * 1.2) * 0.04);
      leaf.rotation.set(0.3, i * 1.2, 0.2);
      workstationGroup.add(leaf);
    }

    // Keyboard on Desk
    const kbGeo = new THREE.BoxGeometry(0.48, 0.02, 0.16);
    const kbMesh = new THREE.Mesh(kbGeo, deskMat);
    kbMesh.position.set(0, 0.9, 0.15);
    workstationGroup.add(kbMesh);

    avatarGroup.add(workstationGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     4. FLOATING CYBER HOLOGRAM WIREFRAME CUBE
     ───────────────────────────────────────────────────────────── */
  function buildFloatingHoloCube() {
    floatingHoloCube = new THREE.Group();
    floatingHoloCube.position.set(-0.05, 2.7, 0.1);

    // Outer Neon Wireframe
    const cubeGeo = new THREE.BoxGeometry(0.38, 0.38, 0.38);
    const edges = new THREE.EdgesGeometry(cubeGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      linewidth: 2,
      transparent: true,
      opacity: 0.85
    });
    const wireframeCube = new THREE.LineSegments(edges, lineMat);
    floatingHoloCube.add(wireframeCube);

    // Inner Glass Core
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.7
    });
    const innerCube = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.28), glassMat);
    floatingHoloCube.add(innerCube);

    avatarGroup.add(floatingHoloCube);
  }

  /* ─────────────────────────────────────────────────────────────
     5. PROCEDURAL 3D DEVELOPER CHARACTER (Seated Pose)
     ───────────────────────────────────────────────────────────── */
  function buildProceduralDeveloper() {
    devCharacterGroup = new THREE.Group();
    devCharacterGroup.position.set(0.08, 0.6, 0.05);

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xce916d,
      roughness: 0.52,
      metalness: 0.05
    });

    const hoodieMat = new THREE.MeshStandardMaterial({
      color: 0x13131c,
      roughness: 0.72,
      metalness: 0.12
    });

    const pantsMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a12,
      roughness: 0.8,
      metalness: 0.08
    });

    const shoeMat = new THREE.MeshStandardMaterial({
      color: 0x181524,
      roughness: 0.4,
      metalness: 0.35
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x141010,
      roughness: 0.9,
      metalness: 0.05
    });

    const glassesMat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      metalness: 0.85,
      roughness: 0.1,
      transmission: 0.85,
      opacity: 0.92,
      transparent: true
    });

    const glassesFrameMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.2
    });

    // ── TORSO & HOODIE (Seated Upright) ────────────
    const torsoGeo = new THREE.CylinderGeometry(0.38, 0.33, 0.88, 16);
    torsoMesh = new THREE.Mesh(torsoGeo, hoodieMat);
    torsoMesh.position.set(0, 0.92, 0.02);
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    devCharacterGroup.add(torsoMesh);

    // Hoodie Chest Emblem ("IBRAHIM.DEV")
    const chestCanvas = document.createElement('canvas');
    chestCanvas.width = 256;
    chestCanvas.height = 128;
    const cctx = chestCanvas.getContext('2d');
    cctx.fillStyle = 'rgba(0,0,0,0)';
    cctx.fillRect(0, 0, 256, 128);
    cctx.fillStyle = '#8b5cf6';
    cctx.font = 'bold 26px sans-serif';
    cctx.textAlign = 'center';
    cctx.fillText('IBRAHIM.DEV', 128, 62);
    cctx.fillStyle = '#06b6d4';
    cctx.font = '14px sans-serif';
    cctx.fillText('FLUTTER ARCHITECT', 128, 88);
    const chestTex = new THREE.CanvasTexture(chestCanvas);

    const chestPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(0.25, 0.12),
      new THREE.MeshBasicMaterial({ map: chestTex, transparent: true, depthWrite: false })
    );
    chestPlane.position.set(0, 1.05, 0.37);
    devCharacterGroup.add(chestPlane);

    // ── NECK & HEAD ─────────────────────────────────
    neckGroup = new THREE.Group();
    neckGroup.position.set(0, 1.38, 0.04);
    devCharacterGroup.add(neckGroup);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.18, 12), skinMat);
    neckGroup.add(neck);

    headGroup = new THREE.Group();
    headGroup.position.set(0, 0.16, 0.04);
    neckGroup.add(headGroup);

    // Head Base
    const headGeo = new THREE.SphereGeometry(0.25, 22, 22);
    headGeo.scale(0.92, 1.12, 0.96);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Jaw / Chin
    const chinGeo = new THREE.BoxGeometry(0.18, 0.18, 0.16);
    const chinMesh = new THREE.Mesh(chinGeo, skinMat);
    chinMesh.position.set(0, -0.16, 0.12);
    chinMesh.rotation.x = 0.35;
    headGroup.add(chinMesh);

    // Hair Style
    const hairGeo = new THREE.SphereGeometry(0.27, 18, 18);
    hairGeo.scale(0.96, 1.05, 1.0);
    const hairMesh = new THREE.Mesh(hairGeo, hairMat);
    hairMesh.position.set(0, 0.08, -0.04);
    headGroup.add(hairMesh);

    // Textured Hair Strands
    for (let i = -3; i <= 3; i++) {
      const strandGeo = new THREE.BoxGeometry(0.06, 0.08, 0.26);
      const strandMesh = new THREE.Mesh(strandGeo, hairMat);
      strandMesh.position.set(i * 0.05, 0.28, 0.02);
      strandMesh.rotation.set(0.2, i * 0.08, 0);
      headGroup.add(strandMesh);
    }

    // Beard / Goatee
    const beardGeo = new THREE.BoxGeometry(0.22, 0.16, 0.14);
    const beardMesh = new THREE.Mesh(beardGeo, hairMat);
    beardMesh.position.set(0, -0.18, 0.14);
    beardMesh.rotation.x = 0.3;
    headGroup.add(beardMesh);

    // Eyes & Glasses
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x1e1510 });

    [-0.08, 0.08].forEach((eyeX, idx) => {
      const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.038, 12, 12), eyeWhiteMat);
      eyeWhite.position.set(eyeX, 0.02, 0.22);
      eyeWhite.scale.set(1, 0.8, 0.5);
      headGroup.add(eyeWhite);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 10), pupilMat);
      pupil.position.set(eyeX, 0.02, 0.24);
      headGroup.add(pupil);

      // Eyelid for Blinking
      const eyelidGeo = new THREE.SphereGeometry(0.042, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2);
      const eyelid = new THREE.Mesh(eyelidGeo, skinMat);
      eyelid.position.set(eyeX, 0.04, 0.22);
      eyelid.rotation.x = -Math.PI / 2;
      eyelid.scale.set(1.05, 0.01, 1.05);
      headGroup.add(eyelid);

      if (idx === 0) leftEyelid = eyelid;
      else rightEyelid = eyelid;
    });

    // Modern Developer Glasses
    const leftLens = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.01, 16), glassesMat);
    leftLens.position.set(-0.085, 0.02, 0.26);
    leftLens.rotation.x = Math.PI / 2;
    headGroup.add(leftLens);

    const rightLens = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.01, 16), glassesMat);
    rightLens.position.set(0.085, 0.02, 0.26);
    rightLens.rotation.x = Math.PI / 2;
    headGroup.add(rightLens);

    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.01, 0.015), glassesFrameMat);
    bridge.position.set(0, 0.025, 0.26);
    headGroup.add(bridge);

    // ── ARMS & CLASPED HANDS (Seated in Lap) ────────
    leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.4, 1.25, 0.05);
    devCharacterGroup.add(leftArmGroup);

    const leftUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.44, 12), hoodieMat);
    leftUpperArm.position.set(0.05, -0.2, 0.1);
    leftUpperArm.rotation.set(0.3, 0, 0.35);
    leftArmGroup.add(leftUpperArm);

    const leftForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.4, 12), hoodieMat);
    leftForearm.position.set(0.18, -0.42, 0.3);
    leftForearm.rotation.set(0.65, 0.2, -0.7);
    leftArmGroup.add(leftForearm);

    rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.4, 1.25, 0.05);
    devCharacterGroup.add(rightArmGroup);

    const rightUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.44, 12), hoodieMat);
    rightUpperArm.position.set(-0.05, -0.2, 0.1);
    rightUpperArm.rotation.set(0.3, 0, -0.35);
    rightArmGroup.add(rightUpperArm);

    const rightForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.4, 12), hoodieMat);
    rightForearm.position.set(-0.18, -0.42, 0.3);
    rightForearm.rotation.set(0.65, -0.2, 0.7);
    rightArmGroup.add(rightForearm);

    // Clasped Hands in Center Lap
    const claspedHands = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.14), skinMat);
    claspedHands.position.set(0, 0.76, 0.46);
    devCharacterGroup.add(claspedHands);

    // ── LEGS & SNEAKERS (Hanging over Pod Edge) ────
    const leftThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 0.52, 12), pantsMat);
    leftThigh.position.set(-0.2, 0.52, 0.28);
    leftThigh.rotation.x = 1.45;
    devCharacterGroup.add(leftThigh);

    const rightThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 0.52, 12), pantsMat);
    rightThigh.position.set(0.2, 0.52, 0.28);
    rightThigh.rotation.x = 1.45;
    devCharacterGroup.add(rightThigh);

    const leftCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.55, 12), pantsMat);
    leftCalf.position.set(-0.2, 0.12, 0.54);
    leftCalf.rotation.x = 0.12;
    devCharacterGroup.add(leftCalf);

    const rightCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.55, 12), pantsMat);
    rightCalf.position.set(0.2, 0.12, 0.54);
    rightCalf.rotation.x = 0.12;
    devCharacterGroup.add(rightCalf);

    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.32), shoeMat);
    leftShoe.position.set(-0.2, -0.18, 0.62);
    devCharacterGroup.add(leftShoe);

    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.32), shoeMat);
    rightShoe.position.set(0.2, -0.18, 0.62);
    devCharacterGroup.add(rightShoe);

    avatarGroup.add(devCharacterGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     6. CODE SCREEN ANIMATION
     ───────────────────────────────────────────────────────────── */
  function createCodeCanvasTexture() {
    codeTextureCanvas = document.createElement('canvas');
    codeTextureCanvas.width = 1024;
    codeTextureCanvas.height = 512;
    codeTextureCtx = codeTextureCanvas.getContext('2d');

    codeTexture = new THREE.CanvasTexture(codeTextureCanvas);
    codeTexture.wrapS = THREE.RepeatWrapping;
    codeTexture.wrapT = THREE.RepeatWrapping;

    renderCodeScreen();
  }

  function renderCodeScreen() {
    if (!codeTextureCtx) return;
    const ctx = codeTextureCtx;
    const w = 1024;
    const h = 512;

    ctx.fillStyle = '#06060e';
    ctx.fillRect(0, 0, w, h);

    // Editor Tab Bar
    ctx.fillStyle = '#0f0f1c';
    ctx.fillRect(0, 0, w, 44);
    ctx.fillStyle = '#1e1b4b';
    ctx.fillRect(10, 8, 250, 36);

    ctx.fillStyle = '#818cf8';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('⚡ flutter_architect.dart', 24, 32);

    // Controls
    ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(w - 60, 22, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#eab308'; ctx.beginPath(); ctx.arc(w - 40, 22, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#22c55e'; ctx.beginPath(); ctx.arc(w - 20, 22, 6, 0, Math.PI * 2); ctx.fill();

    const lines = [
      { text: '// IBRAHIM ELSHISHTAWY — FLUTTER ARCHITECT', color: '#64748b' },
      { text: 'import "package:flutter/material.dart";', color: '#f43f5e' },
      { text: 'import "package:bloc/bloc.dart";', color: '#f43f5e' },
      { text: '', color: '' },
      { text: 'class IbrahimPortfolio extends MobileEcosystem {', color: '#06b6d4' },
      { text: '  final String developer = "Ibrahim Elshishtawy";', color: '#a78bfa' },
      { text: '  final String role = "Flutter & FullStack Architect";', color: '#a78bfa' },
      { text: '  final List<Tech> core = [Flutter, Dart, Firebase, Node];', color: '#38bdf8' },
      { text: '', color: '' },
      { text: '  @override', color: '#fbbf24' },
      { text: '  Future<Experience> buildFuture() async {', color: '#34d399' },
      { text: '    return CleanArchitecture(', color: '#818cf8' },
      { text: '      quality: UltraHighPrecision,', color: '#f472b6' },
      { text: '      status: AvailableForHire,', color: '#4ade80' },
      { text: '    );', color: '#818cf8' },
      { text: '  }', color: '#34d399' },
      { text: '}', color: '#06b6d4' }
    ];

    ctx.font = '20px "Fira Code", monospace';
    const lineHeight = 28;
    const startY = 75 - (codeScrollY % (lines.length * lineHeight));

    for (let i = -1; i <= lines.length + 1; i++) {
      const idx = ((i % lines.length) + lines.length) % lines.length;
      const line = lines[idx];
      const y = startY + i * lineHeight;
      if (y > 45 && y < h - 10) {
        ctx.fillStyle = '#334155';
        ctx.fillText(String(idx + 1).padStart(2, '0'), 20, y);
        ctx.fillStyle = line.color || '#e2e8f0';
        ctx.fillText(line.text, 65, y);
      }
    }

    // Glowing active cursor
    ctx.fillStyle = '#06b6d4';
    ctx.fillRect(490, 240, 10, 22);

    if (codeTexture) codeTexture.needsUpdate = true;
  }

  /* ─────────────────────────────────────────────────────────────
     7. EXTERNAL MODEL LOADER FALLBACK
     ───────────────────────────────────────────────────────────── */
  function tryLoadExternalModel(scene, onFallback) {
    const loader = new THREE.GLTFLoader();
    loader.load(
      window.Hero3DConfig.DEVELOPER_MODEL_URL,
      function (gltf) {
        externalModelLoaded = true;
        const model = gltf.scene;
        model.scale.set(1.15, 1.15, 1.15);
        model.position.set(0.08, 0.6, 0.05);
        avatarGroup.add(model);
      },
      undefined,
      function () {
        if (typeof onFallback === 'function') onFallback();
      }
    );
  }

  /* ─────────────────────────────────────────────────────────────
     8. ANIMATION LOOP & MOUSE TRACKING
     ───────────────────────────────────────────────────────────── */
  function update(normalizedMouseX, normalizedMouseY) {
    const elapsedTime = clock.getElapsedTime();

    // 1. Idle Breathing on Torso & Neck
    const breathOffset = Math.sin(elapsedTime * 1.8) * 0.012;
    if (torsoMesh) {
      torsoMesh.position.y = 0.92 + breathOffset;
      torsoMesh.scale.set(1 + breathOffset * 0.3, 1 + breathOffset * 0.15, 1 + breathOffset * 0.3);
    }
    if (neckGroup) {
      neckGroup.position.y = 1.38 + breathOffset * 1.1;
    }

    // 2. Smooth Head and Eyes Mouse Tracking
    targetHeadRotY = normalizedMouseX * 0.38;
    targetHeadRotX = -normalizedMouseY * 0.22;

    currentHeadRotY += (targetHeadRotY - currentHeadRotY) * 0.08;
    currentHeadRotX += (targetHeadRotX - currentHeadRotX) * 0.08;

    if (headGroup) {
      headGroup.rotation.y = currentHeadRotY;
      headGroup.rotation.x = currentHeadRotX;
    }

    // 3. Eye Blinking Cycles
    if (elapsedTime > nextBlinkTime) {
      isBlinking = true;
      blinkProgress += 0.16;
      if (blinkProgress >= 1.0) {
        isBlinking = false;
        blinkProgress = 0;
        nextBlinkTime = elapsedTime + 2.5 + Math.random() * 3.5;
      }
    }

    if (leftEyelid && rightEyelid) {
      const eyelidScaleY = isBlinking ? Math.sin(blinkProgress * Math.PI) * 1.05 : 0.01;
      leftEyelid.scale.y = Math.max(0.01, eyelidScaleY);
      rightEyelid.scale.y = Math.max(0.01, eyelidScaleY);
    }

    // 4. Floating Hologram Wireframe Cube Rotation & Bobbing
    if (floatingHoloCube) {
      floatingHoloCube.rotation.x += 0.008;
      floatingHoloCube.rotation.y += 0.012;
      floatingHoloCube.position.y = 2.7 + Math.sin(elapsedTime * 1.5) * 0.06;
    }

    // 5. Pedestal Neon Rings Subtle Rotation
    pedestalRings.forEach((ring, idx) => {
      const dir = idx % 2 === 0 ? 1 : -1;
      ring.rotation.z += 0.002 * dir;
    });

    // 6. Code Screen Live Scrolling
    codeScrollY += 0.35;
    if (Math.floor(codeScrollY) % 3 === 0) {
      renderCodeScreen();
    }
  }

  return {
    init: init,
    update: update
  };
})();
