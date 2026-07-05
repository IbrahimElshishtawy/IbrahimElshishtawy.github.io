/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v3.0
   Three.js Particle Universe (three-engine.js)
   ============================================================ */

'use strict';

/* ── GLOBAL STATE ─────────────────────────────────────────── */
let scene, camera, renderer, particlesMesh, particlesMaterial;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let windowHalfX = window.innerWidth  / 2;
let windowHalfY = window.innerHeight / 2;
let animFrameId  = null;
let isPageVisible = true;

/* ── THREE.JS PARTICLE UNIVERSE ────────────────────────────── */
function initThreeJS() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  /* ── Build Particle Geometry ── */
  const COUNT = 1400;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(COUNT * 3);
  const colors    = new Float32Array(COUNT * 3);

  const palette = [
    new THREE.Color('#8b5cf6'),
    new THREE.Color('#06b6d4'),
    new THREE.Color('#ffffff'),
    new THREE.Color('#4f46e5'),
    new THREE.Color('#ec4899'),
  ];

  for (let i = 0; i < COUNT * 3; i += 3) {
    const radius = Math.random() * 500 + 80;
    const theta  = Math.random() * Math.PI * 2;
    const phi    = Math.acos((Math.random() * 2) - 1);

    positions[i]     = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);

    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i]     = c.r;
    colors[i + 1] = c.g;
    colors[i + 2] = c.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color',    new THREE.BufferAttribute(colors,    3));

  particlesMaterial = new THREE.PointsMaterial({
    size:         4.5,
    map:          createGlowTexture(),
    vertexColors: true,
    transparent:  true,
    opacity:      0.72,
    blending:     THREE.AdditiveBlending,
    depthWrite:   false,
    sizeAttenuation: true,
  });

  particlesMesh = new THREE.Points(geometry, particlesMaterial);
  scene.add(particlesMesh);

  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onMouseMove);

  animate();
}

function createGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0,    'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.7)');
  g.addColorStop(0.6,  'rgba(139,92,246,0.3)');
  g.addColorStop(1,    'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 32, 32);
  const tex = new THREE.Texture(c);
  tex.needsUpdate = true;
  return tex;
}

function onWindowResize() {
  windowHalfX = window.innerWidth  / 2;
  windowHalfY = window.innerHeight / 2;
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e) {
  mouseX = (e.clientX - windowHalfX) * 0.14;
  mouseY = (e.clientY - windowHalfY) * 0.14;
}

function animate() {
  if (!isPageVisible) { animFrameId = requestAnimationFrame(animate); return; }

  animFrameId = requestAnimationFrame(animate);

  if (!particlesMesh || !camera || !renderer || !scene) return;

  particlesMesh.rotation.y += 0.0005;
  particlesMesh.rotation.x += 0.00025;

  targetX = mouseX;
  targetY = mouseY;

  camera.position.x += (targetX - camera.position.x) * 0.045;
  camera.position.y += (-targetY - camera.position.y) * 0.045;

  const scrollH = document.documentElement.scrollHeight - window.innerHeight || 1;
  camera.position.z = 400 - (window.scrollY / scrollH) * 170;

  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

function initPageVisibility() {
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
  });
}

/* ── THEME-AWARE PARTICLE RECOLOR ─────────────────────────── */
function setParticleTheme(themeId) {
  if (!particlesMesh || typeof THREE === 'undefined') return;

  const THEME_PALETTES = {
    '': [
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#4f46e5'),
      new THREE.Color('#ec4899'),
    ],
    'cyber-blue': [
      new THREE.Color('#0ea5e9'),
      new THREE.Color('#06d6a0'),
      new THREE.Color('#e0f2fe'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#f59e0b'),
    ],
    'neon-green': [
      new THREE.Color('#22c55e'),
      new THREE.Color('#84cc16'),
      new THREE.Color('#d1fae5'),
      new THREE.Color('#4ade80'),
      new THREE.Color('#06b6d4'),
    ],
    'solar-red': [
      new THREE.Color('#f97316'),
      new THREE.Color('#eab308'),
      new THREE.Color('#fff7ed'),
      new THREE.Color('#fb923c'),
      new THREE.Color('#ec4899'),
    ],
  };

  const palette  = THEME_PALETTES[themeId] || THEME_PALETTES[''];
  const geometry = particlesMesh.geometry;
  const colors   = geometry.attributes.color;
  const count    = colors.count;

  for (let i = 0; i < count; i++) {
    const c = palette[Math.floor(Math.random() * palette.length)];
    colors.setXYZ(i, c.r, c.g, c.b);
  }
  colors.needsUpdate = true;

  // Handle light/dark mode adaptations for particles
  const isLight = document.documentElement.getAttribute('data-theme-mode') === 'light';
  if (isLight && particlesMaterial) {
    particlesMaterial.blending = THREE.NormalBlending;
    particlesMaterial.opacity = 0.45;
  } else if (particlesMaterial) {
    particlesMaterial.blending = THREE.AdditiveBlending;
    particlesMaterial.opacity = 0.72;
  }
}

/* Expose to window for ThemeEngine */
window.setParticleTheme = setParticleTheme;
