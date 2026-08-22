/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D FLOATING TECH CARDS
   (hero-floating-cards.js)
   ============================================================ */

'use strict';

window.Hero3DFloatingCards = (function () {
  let cardsGroup = null;
  let cardMeshes = [];
  let clock = new THREE.Clock();

  function init(scene) {
    cardsGroup = new THREE.Group();
    cardsGroup.name = 'FloatingTechCards';
    scene.add(cardsGroup);

    buildTechCards();
  }

  /* ─────────────────────────────────────────────────────────────
     1. 3D FLOATING TECH CARDS (Flutter, Dart, Firebase, Node.js)
     ───────────────────────────────────────────────────────────── */
  function buildTechCards() {
    const cardDefs = window.Hero3DConfig.techCards;

    cardDefs.forEach(def => {
      const cardObj = createTechCardMesh(def);
      cardObj.position.set(def.x, def.y, def.z);
      cardObj.scale.set(def.scale, def.scale, def.scale);
      cardsGroup.add(cardObj);

      cardMeshes.push({
        mesh: cardObj,
        baseX: def.x,
        baseY: def.y,
        baseZ: def.z,
        speed: def.speed,
        offset: def.floatOffset,
        neonColor: def.neon,
        scale: def.scale
      });
    });
  }

  function createTechCardMesh(def) {
    const group = new THREE.Group();

    // High-resolution canvas for crisp rendering on retina displays
    const canvas = document.createElement('canvas');
    canvas.width = 440;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');

    const w = 440;
    const h = 150;
    const r = 36; // Rounded pill radius

    // 1. Dark Glass Rounded Pill Path
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(w - r, 0);
    ctx.quadraticCurveTo(w, 0, w, r);
    ctx.lineTo(w, h - r);
    ctx.quadraticCurveTo(w, h, w - r, h);
    ctx.lineTo(r, h);
    ctx.quadraticCurveTo(0, h, 0, h - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();

    // 2. Glossy Glass Gradient Fill
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(24, 20, 42, 0.95)');
    grad.addColorStop(0.5, 'rgba(12, 10, 24, 0.92)');
    grad.addColorStop(1, 'rgba(6, 5, 14, 0.97)');
    ctx.fillStyle = grad;
    ctx.fill();

    // 3. Glowing Neon Outer Border
    ctx.lineWidth = 5;
    ctx.strokeStyle = def.neon;
    ctx.stroke();

    // 4. Subtle Inner Highlight
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.stroke();

    // 5. Draw Icon Glyph / Logo
    drawIconGlyph(ctx, def.icon, 78, 75, def.neon);

    // 6. Tech Name Typography
    ctx.font = 'bold 44px "Plus Jakarta Sans", -apple-system, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textBaseline = 'middle';
    ctx.fillText(def.name, 145, 75);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;

    // Card 3D Mesh
    const cardGeo = new THREE.BoxGeometry(2.4, 0.82, 0.08);
    const cardBodyMat = new THREE.MeshStandardMaterial({
      color: 0x06060f,
      metalness: 0.9,
      roughness: 0.15
    });

    const cardFaceMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true
    });

    const materials = [
      cardBodyMat, // right
      cardBodyMat, // left
      cardBodyMat, // top
      cardBodyMat, // bottom
      cardFaceMat, // front
      cardBodyMat  // back
    ];

    const cardMesh = new THREE.Mesh(cardGeo, materials);
    cardMesh.castShadow = true;
    group.add(cardMesh);

    // Neon Halo Glow Plane behind card
    const haloGeo = new THREE.PlaneGeometry(2.65, 1.05);
    const haloMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(def.neon),
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.z = -0.05;
    group.add(haloMesh);

    return group;
  }

  function drawIconGlyph(ctx, iconType, cx, cy, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;

    if (iconType === 'flutter') {
      // Official Flutter Logo Double Chevron
      ctx.beginPath();
      ctx.moveTo(cx - 24, cy - 28);
      ctx.lineTo(cx + 18, cy - 28);
      ctx.lineTo(cx - 6, cy - 4);
      ctx.lineTo(cx + 24, cy + 26);
      ctx.lineTo(cx - 2, cy + 26);
      ctx.lineTo(cx - 24, cy + 4);
      ctx.closePath();
      ctx.fillStyle = '#02569B';
      ctx.fill();

      // Lower Wing Cyan
      ctx.beginPath();
      ctx.moveTo(cx - 6, cy - 4);
      ctx.lineTo(cx + 10, cy + 12);
      ctx.lineTo(cx + 24, cy + 26);
      ctx.lineTo(cx + 6, cy + 26);
      ctx.lineTo(cx - 16, cy + 4);
      ctx.closePath();
      ctx.fillStyle = '#00E5FF';
      ctx.fill();
    } else if (iconType === 'dart') {
      // Official Dart Blue Diamond & Target
      ctx.beginPath();
      ctx.moveTo(cx - 22, cy + 22);
      ctx.lineTo(cx + 22, cy - 22);
      ctx.lineTo(cx - 4, cy - 8);
      ctx.closePath();
      ctx.fillStyle = '#0175C2';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(cx - 22, cy + 22);
      ctx.lineTo(cx + 4, cy + 8);
      ctx.lineTo(cx + 22, cy - 22);
      ctx.closePath();
      ctx.fillStyle = '#29B6F6';
      ctx.fill();
    } else if (iconType === 'firebase') {
      // Firebase Yellow / Orange Flame
      ctx.beginPath();
      ctx.moveTo(cx - 4, cy - 28);
      ctx.quadraticCurveTo(cx + 22, cy - 4, cx + 16, cy + 22);
      ctx.quadraticCurveTo(cx, cy + 30, cx - 16, cy + 22);
      ctx.quadraticCurveTo(cx - 24, cy - 4, cx - 4, cy - 28);
      ctx.fillStyle = '#FFA000';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(cx, cy - 18);
      ctx.quadraticCurveTo(cx + 14, cy, cx + 10, cy + 18);
      ctx.quadraticCurveTo(cx, cy + 24, cx - 10, cy + 18);
      ctx.quadraticCurveTo(cx - 16, cy, cx, cy - 18);
      ctx.fillStyle = '#FFCA28';
      ctx.fill();
    } else if (iconType === 'nodejs') {
      // Node.js Hexagon with 'JS'
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = cx + 24 * Math.cos(angle);
        const y = cy + 24 * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#4ade80';
      ctx.stroke();

      ctx.font = 'bold 24px monospace';
      ctx.fillStyle = '#4ade80';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('JS', cx, cy + 2);
    }

    ctx.restore();
  }

  /* ─────────────────────────────────────────────────────────────
     2. FLOATING LEVITATION & PARALLAX
     ───────────────────────────────────────────────────────────── */
  function update(normalizedMouseX, normalizedMouseY) {
    const t = clock.getElapsedTime();

    cardMeshes.forEach(c => {
      const floatY = Math.sin(t * c.speed + c.offset) * 0.06;
      const floatX = Math.cos(t * c.speed * 0.8 + c.offset) * 0.025;
      const tiltZ = Math.sin(t * c.speed * 0.6 + c.offset) * 0.035;
      const tiltX = Math.cos(t * c.speed * 0.5 + c.offset) * 0.04;

      c.mesh.position.y = c.baseY + floatY - normalizedMouseY * 0.08;
      c.mesh.position.x = c.baseX + floatX + normalizedMouseX * 0.08;

      c.mesh.rotation.z = tiltZ + normalizedMouseX * 0.04;
      c.mesh.rotation.x = tiltX - normalizedMouseY * 0.04;
      c.mesh.rotation.y = (c.baseX > 0 ? -0.2 : 0.2) + normalizedMouseX * 0.1;
    });
  }

  return {
    init: init,
    update: update
  };
})();
