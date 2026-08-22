/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D DEVELOPER AVATAR & WORKSTATION
   (hero-avatar.js)
   ============================================================ */

'use strict';

window.Hero3DAvatar = (function () {
  let avatarGroup = null;
  let headGroup = null;
  let neckGroup = null;
  let torsoMesh = null;
  let leftArmGroup = null;
  let rightArmGroup = null;
  let leftEyelid = null;
  let rightEyelid = null;
  let workstationGroup = null;
  let codeTextureCanvas = null;
  let codeTextureCtx = null;
  let codeTexture = null;
  let monitorScreenMesh = null;
  let sideMonitorTexture = null;
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
  let scrollFactor = 0;
  let codeScrollY = 0;
  let externalModelLoaded = false;

  function init(scene) {
    avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, -0.65, 0);

    // Build the Developer Cyber Workstation
    buildWorkstation();

    // Check if external GLB is available and requested, otherwise build high-poly procedural developer
    if (window.Hero3DConfig.ENABLE_EXTERNAL_GLB && typeof THREE.GLTFLoader !== 'undefined') {
      tryLoadExternalModel(scene, () => {
        // Fallback or procedural base
        if (!externalModelLoaded) {
          buildProceduralDeveloper();
        }
      });
    } else {
      buildProceduralDeveloper();
    }

    scene.add(avatarGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     1. PROCEDURAL 3D DEVELOPER AVATAR
     ───────────────────────────────────────────────────────────── */
  function buildProceduralDeveloper() {
    const devGroup = new THREE.Group();
    devGroup.name = 'DeveloperCharacter';

    // Materials Palette
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xd49b78,
      roughness: 0.55,
      metalness: 0.05
    });

    const hoodieMat = new THREE.MeshStandardMaterial({
      color: 0x111119,
      roughness: 0.7,
      metalness: 0.15
    });

    const pantsMat = new THREE.MeshStandardMaterial({
      color: 0x090910,
      roughness: 0.8,
      metalness: 0.1
    });

    const shoeMat = new THREE.MeshStandardMaterial({
      color: 0x1e1b2e,
      roughness: 0.4,
      metalness: 0.3
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x151212,
      roughness: 0.9,
      metalness: 0.1
    });

    const glassesMat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      metalness: 0.85,
      roughness: 0.1,
      transmission: 0.8,
      opacity: 0.9,
      transparent: true,
      reflectivity: 0.9
    });

    const glassesFrameMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.2
    });

    // ── TORSO & HOODIE ──────────────────────────────
    const torsoGeo = new THREE.CylinderGeometry(0.38, 0.33, 0.85, 16);
    torsoMesh = new THREE.Mesh(torsoGeo, hoodieMat);
    torsoMesh.position.set(0, 1.45, -0.05);
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    devGroup.add(torsoMesh);

    // Hoodie Logo ("IBRAHIM.DEV" glowing emblem)
    const emblemCanvas = document.createElement('canvas');
    emblemCanvas.width = 256;
    emblemCanvas.height = 128;
    const ectx = emblemCanvas.getContext('2d');
    ectx.fillStyle = 'rgba(0,0,0,0)';
    ectx.fillRect(0, 0, 256, 128);
    ectx.fillStyle = '#8b5cf6';
    ectx.font = 'bold 26px sans-serif';
    ectx.textAlign = 'center';
    ectx.fillText('IBRAHIM.DEV', 128, 60);
    ectx.fillStyle = '#06b6d4';
    ectx.font = '14px sans-serif';
    ectx.fillText('FLUTTER ARCHITECT', 128, 86);
    const emblemTex = new THREE.CanvasTexture(emblemCanvas);

    const emblemGeo = new THREE.PlaneGeometry(0.24, 0.12);
    const emblemMat = new THREE.MeshBasicMaterial({
      map: emblemTex,
      transparent: true,
      depthWrite: false
    });
    const emblemMesh = new THREE.Mesh(emblemGeo, emblemMat);
    emblemMesh.position.set(0, 1.55, 0.32);
    devGroup.add(emblemMesh);

    // Hoodie Pocket
    const pocketGeo = new THREE.BoxGeometry(0.36, 0.2, 0.12);
    const pocketMesh = new THREE.Mesh(pocketGeo, hoodieMat);
    pocketMesh.position.set(0, 1.25, 0.26);
    pocketMesh.rotation.x = -0.15;
    devGroup.add(pocketMesh);

    // ── NECK & HEAD ─────────────────────────────────
    neckGroup = new THREE.Group();
    neckGroup.position.set(0, 1.88, -0.02);
    devGroup.add(neckGroup);

    const neckGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.2, 12);
    const neckMesh = new THREE.Mesh(neckGeo, skinMat);
    neckGroup.add(neckMesh);

    headGroup = new THREE.Group();
    headGroup.position.set(0, 0.18, 0.04);
    neckGroup.add(headGroup);

    // Head Base
    const headGeo = new THREE.SphereGeometry(0.25, 20, 20);
    headGeo.scale(0.92, 1.12, 0.96);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Jaw / Chin contour
    const chinGeo = new THREE.BoxGeometry(0.18, 0.18, 0.16);
    const chinMesh = new THREE.Mesh(chinGeo, skinMat);
    chinMesh.position.set(0, -0.16, 0.12);
    chinMesh.rotation.x = 0.35;
    headGroup.add(chinMesh);

    // Stylized Fade Hair
    const hairGeo = new THREE.SphereGeometry(0.27, 18, 18);
    hairGeo.scale(0.96, 1.05, 1.0);
    const hairMesh = new THREE.Mesh(hairGeo, hairMat);
    hairMesh.position.set(0, 0.08, -0.04);
    headGroup.add(hairMesh);

    // Top Textured Hair Strands
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

    // ── EYES & GLASSES ──────────────────────────────
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x1f1610 });

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

    // Frame Bridge
    const bridgeGeo = new THREE.BoxGeometry(0.05, 0.01, 0.015);
    const bridge = new THREE.Mesh(bridgeGeo, glassesFrameMat);
    bridge.position.set(0, 0.025, 0.26);
    headGroup.add(bridge);

    // ── ARMS & HANDS (Typing / Coding posture) ──────
    leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.42, 1.75, 0);
    devGroup.add(leftArmGroup);

    const leftUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.45, 12), hoodieMat);
    leftUpperArm.position.set(0, -0.2, 0);
    leftUpperArm.rotation.z = 0.2;
    leftUpperArm.rotation.x = 0.45;
    leftArmGroup.add(leftUpperArm);

    const leftForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.42, 12), hoodieMat);
    leftForearm.position.set(0.1, -0.42, 0.26);
    leftForearm.rotation.x = 1.35;
    leftForearm.rotation.z = -0.3;
    leftArmGroup.add(leftForearm);

    const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.12), skinMat);
    leftHand.position.set(0.18, -0.48, 0.52);
    leftHand.rotation.y = 0.2;
    leftArmGroup.add(leftHand);

    rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.42, 1.75, 0);
    devGroup.add(rightArmGroup);

    const rightUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.45, 12), hoodieMat);
    rightUpperArm.position.set(0, -0.2, 0);
    rightUpperArm.rotation.z = -0.2;
    rightUpperArm.rotation.x = 0.45;
    rightArmGroup.add(rightUpperArm);

    const rightForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.42, 12), hoodieMat);
    rightForearm.position.set(-0.1, -0.42, 0.26);
    rightForearm.rotation.x = 1.35;
    rightForearm.rotation.z = 0.3;
    rightArmGroup.add(rightForearm);

    const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.12), skinMat);
    rightHand.position.set(-0.18, -0.48, 0.52);
    rightHand.rotation.y = -0.2;
    rightArmGroup.add(rightHand);

    // ── LEGS & SNEAKERS (Seated) ───────────────────
    const leftThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 0.55, 12), pantsMat);
    leftThigh.position.set(-0.2, 1.0, 0.26);
    leftThigh.rotation.x = 1.45;
    devGroup.add(leftThigh);

    const rightThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 0.55, 12), pantsMat);
    rightThigh.position.set(0.2, 1.0, 0.26);
    rightThigh.rotation.x = 1.45;
    devGroup.add(rightThigh);

    const leftCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.55, 12), pantsMat);
    leftCalf.position.set(-0.22, 0.65, 0.55);
    leftCalf.rotation.x = 0.15;
    devGroup.add(leftCalf);

    const rightCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.55, 12), pantsMat);
    rightCalf.position.set(0.22, 0.65, 0.55);
    rightCalf.rotation.x = 0.15;
    devGroup.add(rightCalf);

    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.32), shoeMat);
    leftShoe.position.set(-0.22, 0.35, 0.62);
    devGroup.add(leftShoe);

    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.32), shoeMat);
    rightShoe.position.set(0.22, 0.35, 0.62);
    devGroup.add(rightShoe);

    avatarGroup.add(devGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     2. FUTURISTIC WORKSTATION & POD ENVIRONMENT
     ───────────────────────────────────────────────────────────── */
  function buildWorkstation() {
    workstationGroup = new THREE.Group();
    workstationGroup.name = 'DeveloperWorkstation';

    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x0c0c16,
      roughness: 0.25,
      metalness: 0.85
    });

    const neonMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.85
    });

    const purpleNeonMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.85
    });

    // ── MAIN DESK SURFACE ───────────────────────────
    const deskGeo = new THREE.BoxGeometry(2.4, 0.08, 1.1);
    const deskMesh = new THREE.Mesh(deskGeo, deskMat);
    deskMesh.position.set(0, 1.1, 0.6);
    deskMesh.castShadow = true;
    deskMesh.receiveShadow = true;
    workstationGroup.add(deskMesh);

    // Glowing Neon Edge on Desk Front
    const neonEdgeGeo = new THREE.BoxGeometry(2.42, 0.015, 0.02);
    const neonEdgeMesh = new THREE.Mesh(neonEdgeGeo, neonMat);
    neonEdgeMesh.position.set(0, 1.1, 1.15);
    workstationGroup.add(neonEdgeMesh);

    // Desk Futuristic Support Legs
    [-1.05, 1.05].forEach(x => {
      const legGeo = new THREE.BoxGeometry(0.08, 1.1, 0.9);
      const legMesh = new THREE.Mesh(legGeo, deskMat);
      legMesh.position.set(x, 0.55, 0.6);
      workstationGroup.add(legMesh);

      const legGlowGeo = new THREE.BoxGeometry(0.02, 1.1, 0.02);
      const legGlow = new THREE.Mesh(legGlowGeo, purpleNeonMat);
      legGlow.position.set(x > 0 ? x + 0.04 : x - 0.04, 0.55, 1.0);
      workstationGroup.add(legGlow);
    });

    // ── CURVED ULTRAWIDE CODE MONITOR ───────────────
    createCodeCanvasTexture();

    const monitorFrameMat = new THREE.MeshStandardMaterial({
      color: 0x05050a,
      metalness: 0.9,
      roughness: 0.2
    });

    const monitorStandGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.45, 16);
    const monitorStand = new THREE.Mesh(monitorStandGeo, monitorFrameMat);
    monitorStand.position.set(0, 1.32, 0.95);
    workstationGroup.add(monitorStand);

    const monitorBaseGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.02, 24);
    const monitorBase = new THREE.Mesh(monitorBaseGeo, monitorFrameMat);
    monitorBase.position.set(0, 1.15, 0.95);
    workstationGroup.add(monitorBase);

    // Curved Ultrawide Display Frame
    const monitorGeo = new THREE.BoxGeometry(1.6, 0.68, 0.04);
    const monitorFrame = new THREE.Mesh(monitorGeo, monitorFrameMat);
    monitorFrame.position.set(0, 1.7, 0.92);
    workstationGroup.add(monitorFrame);

    // Live Syntax-Highlighted Code Screen
    const screenGeo = new THREE.PlaneGeometry(1.54, 0.62);
    const screenMat = new THREE.MeshBasicMaterial({
      map: codeTexture,
      transparent: true
    });
    monitorScreenMesh = new THREE.Mesh(screenGeo, screenMat);
    monitorScreenMesh.position.set(0, 1.7, 0.89);
    monitorScreenMesh.rotation.y = Math.PI;
    workstationGroup.add(monitorScreenMesh);

    // ── SECONDARY VERTICAL TERMINAL MONITOR (Right) ─
    createSideTerminalTexture();
    const sideMonitorGeo = new THREE.BoxGeometry(0.48, 0.72, 0.03);
    const sideMonitor = new THREE.Mesh(sideMonitorGeo, monitorFrameMat);
    sideMonitor.position.set(0.98, 1.68, 0.78);
    sideMonitor.rotation.y = -0.38;
    workstationGroup.add(sideMonitor);

    const sideScreenGeo = new THREE.PlaneGeometry(0.44, 0.66);
    const sideScreenMat = new THREE.MeshBasicMaterial({
      map: sideMonitorTexture,
      transparent: true
    });
    const sideScreenMesh = new THREE.Mesh(sideScreenGeo, sideScreenMat);
    sideScreenMesh.position.set(0.97, 1.68, 0.76);
    sideScreenMesh.rotation.y = Math.PI - 0.38;
    workstationGroup.add(sideScreenMesh);

    // ── MECHANICAL KEYBOARD & MOUSE ─────────────────
    const keyboardGeo = new THREE.BoxGeometry(0.65, 0.02, 0.22);
    const keyboard = new THREE.Mesh(keyboardGeo, deskMat);
    keyboard.position.set(0, 1.15, 0.58);
    workstationGroup.add(keyboard);

    // Glowing Key Matrix Lines
    const keyGlowGeo = new THREE.PlaneGeometry(0.62, 0.19);
    const keyGlowMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const keyGlow = new THREE.Mesh(keyGlowGeo, keyGlowMat);
    keyGlow.position.set(0, 1.162, 0.58);
    keyGlow.rotation.x = -Math.PI / 2;
    workstationGroup.add(keyGlow);

    // Ergonomic Mouse
    const mouseGeo = new THREE.BoxGeometry(0.08, 0.03, 0.12);
    const mouseMesh = new THREE.Mesh(mouseGeo, deskMat);
    mouseMesh.position.set(0.45, 1.155, 0.58);
    workstationGroup.add(mouseMesh);

    // ── CYBER PEDESTAL PLATFORM & NEON RINGS ────────
    const baseGeo = new THREE.CylinderGeometry(1.6, 1.7, 0.2, 32);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x080712,
      metalness: 0.8,
      roughness: 0.3
    });
    const pedestal = new THREE.Mesh(baseGeo, baseMat);
    pedestal.position.set(0, 0.1, 0.35);
    pedestal.receiveShadow = true;
    workstationGroup.add(pedestal);

    // Rotating Neon Concentric Rings
    [1.65, 1.85, 2.05].forEach((radius, idx) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.03, 48);
      const ringMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? 0x8b5cf6 : 0x06b6d4,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75 - idx * 0.18
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(0, 0.015 + idx * 0.005, 0.35);
      ringMesh.rotation.x = -Math.PI / 2;
      workstationGroup.add(ringMesh);
      pedestalRings.push(ringMesh);
    });

    avatarGroup.add(workstationGroup);
  }

  /* ─────────────────────────────────────────────────────────────
     3. LIVE SYNTAX-HIGHLIGHTED CODE SCREEN TEXTURES
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
    ctx.fillRect(10, 8, 240, 36);

    ctx.fillStyle = '#818cf8';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('⚡ flutter_architect.dart', 24, 32);

    // Window controls
    ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(w - 60, 22, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#eab308'; ctx.beginPath(); ctx.arc(w - 40, 22, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#22c55e'; ctx.beginPath(); ctx.arc(w - 20, 22, 6, 0, Math.PI * 2); ctx.fill();

    // Code lines with syntax highlighting
    const lines = [
      { text: '// IBRAHIM ELSHISHTAWY — FLUTTER & MOBILE SYSTEMS', color: '#64748b' },
      { text: 'import "package:flutter/material.dart";', color: '#f43f5e' },
      { text: 'import "package:bloc/bloc.dart";', color: '#f43f5e' },
      { text: '', color: '' },
      { text: 'class FlutterArchitect extends FullStackEngineer {', color: '#06b6d4' },
      { text: '  final String name = "Ibrahim Elshishtawy";', color: '#a78bfa' },
      { text: '  final String tier = "Mid-Level Architect";', color: '#a78bfa' },
      { text: '  final List<String> stack = ["Flutter", "Dart", "Node.js", "Firebase"];', color: '#38bdf8' },
      { text: '', color: '' },
      { text: '  @override', color: '#fbbf24' },
      { text: '  Widget buildEcosystem(BuildContext context) {', color: '#34d399' },
      { text: '    return CleanArchitecture(', color: '#818cf8' },
      { text: '      performance: FrameRate.smooth60Fps,', color: '#f472b6' },
      { text: '      design: PremiumCyberAesthetics.v3,', color: '#f472b6' },
      { text: '      status: Status.availableForHire,', color: '#4ade80' },
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
        // Line number
        ctx.fillStyle = '#334155';
        ctx.fillText(String(idx + 1).padStart(2, '0'), 20, y);

        // Text
        ctx.fillStyle = line.color || '#e2e8f0';
        ctx.fillText(line.text, 65, y);
      }
    }

    // Glowing active line cursor
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(480, 240, 10, 22);

    if (codeTexture) codeTexture.needsUpdate = true;
  }

  function createSideTerminalTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#05070f';
    ctx.fillRect(0, 0, 512, 768);

    ctx.fillStyle = '#06b6d4';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('> SYSTEM STATUS: OPTIMAL', 25, 45);

    const logs = [
      '[OK] Flutter Engine Initialized',
      '[OK] BLoC State Pipeline Ready',
      '[OK] Socket.io Connected',
      '[OK] ACES Tone Mapping Active',
      '[OK] 3D Hero Workstation Live',
      '[OK] WebGL 60FPS Sync Online',
      '>> Listening for interactions...'
    ];

    ctx.font = '18px monospace';
    logs.forEach((log, i) => {
      ctx.fillStyle = i === logs.length - 1 ? '#4ade80' : '#94a3b8';
      ctx.fillText(log, 25, 100 + i * 36);
    });

    sideMonitorTexture = new THREE.CanvasTexture(canvas);
  }

  /* ─────────────────────────────────────────────────────────────
     4. EXTERNAL GLB LOADER (Seamless Fallback Mechanism)
     ───────────────────────────────────────────────────────────── */
  function tryLoadExternalModel(scene, onFallback) {
    const loader = new THREE.GLTFLoader();
    loader.load(
      window.Hero3DConfig.DEVELOPER_MODEL_URL,
      function (gltf) {
        console.log('✅ External 3D Developer Model Loaded successfully');
        externalModelLoaded = true;
        const model = gltf.scene;
        model.scale.set(1.2, 1.2, 1.2);
        model.position.set(0, 0.4, 0);
        model.traverse(node => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        avatarGroup.add(model);
      },
      undefined,
      function () {
        console.log('ℹ️ External GLB not found. Using high-fidelity procedural Developer Avatar.');
        if (typeof onFallback === 'function') onFallback();
      }
    );
  }

  /* ─────────────────────────────────────────────────────────────
     5. ANIMATION LOOP & MOUSE TRACKING
     ───────────────────────────────────────────────────────────── */
  function update(normalizedMouseX, normalizedMouseY, scrollPct) {
    const elapsedTime = clock.getElapsedTime();
    scrollFactor = scrollPct;

    // 1. Natural Idle Breathing & Micro-sway
    const breathOffset = Math.sin(elapsedTime * 1.8) * 0.015;
    if (torsoMesh) {
      torsoMesh.position.y = 1.45 + breathOffset;
      torsoMesh.scale.set(1 + breathOffset * 0.4, 1 + breathOffset * 0.2, 1 + breathOffset * 0.4);
    }
    if (neckGroup) {
      neckGroup.position.y = 1.88 + breathOffset * 1.2;
    }
    if (leftArmGroup && rightArmGroup) {
      leftArmGroup.position.y = 1.75 + breathOffset * 0.8;
      rightArmGroup.position.y = 1.75 + breathOffset * 0.8;
    }

    // 2. Smooth Head & Eye Mouse Tracking
    targetHeadRotY = normalizedMouseX * 0.42;
    targetHeadRotX = -normalizedMouseY * 0.25;

    currentHeadRotY += (targetHeadRotY - currentHeadRotY) * 0.08;
    currentHeadRotX += (targetHeadRotX - currentHeadRotX) * 0.08;

    if (headGroup) {
      headGroup.rotation.y = currentHeadRotY;
      headGroup.rotation.x = currentHeadRotX;
    }

    // 3. Natural Eye Blinking Cycles
    if (elapsedTime > nextBlinkTime) {
      isBlinking = true;
      blinkProgress += 0.15;
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

    // 4. Pedestal Neon Rings Rotation
    pedestalRings.forEach((ring, idx) => {
      const direction = idx % 2 === 0 ? 1 : -1;
      ring.rotation.z += 0.003 * direction;
    });

    // 5. Code Screen Line Scrolling Animation
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
