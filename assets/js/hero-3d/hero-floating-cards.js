/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D FLOATING TECH CARDS & CODE GLYPHS
   (hero-floating-cards.js)
   ============================================================ */

'use strict';

window.Hero3DFloatingCards = (function () {
  let cardsGroup = null;
  let glyphsGroup = null;
  let cardMeshes = [];
  let glyphMeshes = [];
  let clock = new THREE.Clock();

  function init(scene) {
    cardsGroup = new THREE.Group();
    cardsGroup.name = 'FloatingTechCards';
    scene.add(cardsGroup);

    glyphsGroup = new THREE.Group();
    glyphsGroup.name = 'FloatingCodeGlyphs';
    scene.add(glyphsGroup);

    buildTechCards();
    buildCodeGlyphs();
  }

  /* ─────────────────────────────────────────────────────────────
     1. 3D FLOATING TECH CARDS
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

    // Generate high-resolution 2D canvas texture for the card face
    const canvas = document.createElement('canvas');
    canvas.width = 380;
    canvas.height = 140;
    const ctx = canvas.getContext('2d');

    // Rounded rectangle background
    const r = 24;
    const w = 380;
    const h = 140;

    // Glass frosted background
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

    // Dark glass fill
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, 'rgba(18, 16, 32, 0.92)');
    grad.addColorStop(1, 'rgba(8, 8, 18, 0.95)');
    ctx.fillStyle = grad;
    ctx.fill();

    // Glowing Neon Border
    ctx.lineWidth = 4;
    ctx.strokeStyle = def.neon;
    ctx.stroke();

    // Inner subtle glow border
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.stroke();

    // Icon Circle Badge
    ctx.beginPath();
    ctx.arc(68, 70, 38, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.strokeStyle = def.neon;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Tech Icon Glyph / Symbol
    drawIconGlyph(ctx, def.icon, 68, 70, def.neon);

    // Tech Label Text
    ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(def.name, 126, 74);

    // Subtitle badge
    ctx.font = '600 16px monospace';
    ctx.fillStyle = def.neon;
    ctx.fillText('CORE STACK', 128, 102);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;

    // Card 3D Body Mesh
    const cardGeo = new THREE.BoxGeometry(2.4, 0.88, 0.08);
    const cardBodyMat = new THREE.MeshStandardMaterial({
      color: 0x080814,
      metalness: 0.85,
      roughness: 0.2
    });

    const cardFaceMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true
    });

    // Multi-material box: front has the canvas texture
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

    // Subtle Neon Backlight halo
    const glowPlaneGeo = new THREE.PlaneGeometry(2.6, 1.05);
    const glowPlaneMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(def.neon),
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });
    const glowPlane = new THREE.Mesh(glowPlaneGeo, glowPlaneMat);
    glowPlane.position.z = -0.05;
    group.add(glowPlane);

    return group;
  }

  function drawIconGlyph(ctx, iconType, cx, cy, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;

    if (iconType === 'flutter') {
      // Flutter Wing Chevron
      ctx.beginPath();
      ctx.moveTo(cx - 16, cy - 20);
      ctx.lineTo(cx + 12, cy - 20);
      ctx.lineTo(cx - 4, cy);
      ctx.lineTo(cx + 16, cy + 20);
      ctx.lineTo(cx - 2, cy + 20);
      ctx.lineTo(cx - 16, cy + 6);
      ctx.closePath();
      ctx.fill();
    } else if (iconType === 'dart') {
      // Dart Target / Chevron
      ctx.beginPath();
      ctx.moveTo(cx - 18, cy + 18);
      ctx.lineTo(cx + 18, cy - 18);
      ctx.lineTo(cx - 6, cy - 6);
      ctx.closePath();
      ctx.fill();
    } else if (iconType === 'firebase') {
      // Firebase Flame
      ctx.beginPath();
      ctx.moveTo(cx, cy - 22);
      ctx.quadraticCurveTo(cx + 18, cy - 4, cx + 12, cy + 18);
      ctx.quadraticCurveTo(cx, cy + 24, cx - 12, cy + 18);
      ctx.quadraticCurveTo(cx - 18, cy - 4, cx, cy - 22);
      ctx.fill();
    } else if (iconType === 'nodejs') {
      // Node Hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = cx + 18 * Math.cos(angle);
        const y = cy + 18 * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('N', cx - 7, cy + 7);
    } else if (iconType === 'typescript') {
      ctx.font = 'bold 24px monospace';
      ctx.fillText('TS', cx - 15, cy + 8);
    } else if (iconType === 'react') {
      // React Atom ellipse
      ctx.beginPath();
      ctx.ellipse(cx, cy, 20, 8, Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, cy, 20, 8, -Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();
    } else if (iconType === 'nestjs') {
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText('🦅', cx - 14, cy + 10);
    } else {
      ctx.font = 'bold 22px monospace';
      ctx.fillText('SQL', cx - 18, cy + 8);
    }

    ctx.restore();
  }

  /* ─────────────────────────────────────────────────────────────
     2. 3D FLOATING CODE GLYPHS (</>, {}, (), =>, #, 01)
     ───────────────────────────────────────────────────────────── */
  function buildCodeGlyphs() {
    const glyphs = window.Hero3DConfig.codeGlyphs;
    const glyphCount = 14;

    for (let i = 0; i < glyphCount; i++) {
      const text = glyphs[i % glyphs.length];
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      const isPurple = i % 2 === 0;
      ctx.fillStyle = isPurple ? '#8b5cf6' : '#06b6d4';
      ctx.font = 'bold 28px "Fira Code", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 64, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const mat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
      });

      const sprite = new THREE.Sprite(mat);
      const angle = (i / glyphCount) * Math.PI * 2;
      const radius = 2.2 + (i % 3) * 0.4;
      const x = Math.cos(angle) * radius;
      const y = 0.5 + Math.sin(i * 1.5) * 1.6;
      const z = Math.sin(angle) * 1.2 - 0.2;

      sprite.position.set(x, y, z);
      sprite.scale.set(0.7, 0.35, 1);
      glyphsGroup.add(sprite);

      glyphMeshes.push({
        sprite: sprite,
        baseX: x,
        baseY: y,
        baseZ: z,
        speed: 0.6 + (i % 4) * 0.2,
        offset: i * 1.2
      });
    }
  }

  /* ─────────────────────────────────────────────────────────────
     3. ANIMATION & FLOATING LEVITATION LOOP
     ───────────────────────────────────────────────────────────── */
  function update(normalizedMouseX, normalizedMouseY) {
    const t = clock.getElapsedTime();

    // Animate 3D Tech Cards with harmonic floating
    cardMeshes.forEach(c => {
      const floatY = Math.sin(t * c.speed + c.offset) * 0.07;
      const floatX = Math.cos(t * c.speed * 0.7 + c.offset) * 0.03;
      const tiltZ = Math.sin(t * c.speed * 0.5 + c.offset) * 0.04;
      const tiltX = Math.cos(t * c.speed * 0.6 + c.offset) * 0.05;

      // Parallax mouse reaction
      c.mesh.position.y = c.baseY + floatY - normalizedMouseY * 0.08;
      c.mesh.position.x = c.baseX + floatX + normalizedMouseX * 0.08;

      c.mesh.rotation.z = tiltZ + normalizedMouseX * 0.05;
      c.mesh.rotation.x = tiltX - normalizedMouseY * 0.05;
      c.mesh.rotation.y = (c.baseX > 0 ? -0.22 : 0.22) + normalizedMouseX * 0.12;
    });

    // Animate Code Glyphs
    glyphMeshes.forEach(g => {
      g.sprite.position.y = g.baseY + Math.sin(t * g.speed + g.offset) * 0.12;
      g.sprite.position.x = g.baseX + Math.cos(t * g.speed * 0.5 + g.offset) * 0.08;
      g.sprite.material.opacity = 0.45 + Math.sin(t * 1.2 + g.offset) * 0.25;
    });
  }

  return {
    init: init,
    update: update
  };
})();
