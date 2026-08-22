/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D HERO CONFIGURATION
   (hero-config.js)
   ============================================================ */

'use strict';

window.Hero3DConfig = {
  // External GLTF/GLB model configuration (if available)
  DEVELOPER_MODEL_URL: 'assets/models/developer-avatar.glb',
  ENABLE_EXTERNAL_GLB: true,

  // Camera settings
  camera: {
    fov: 42,
    near: 0.1,
    far: 1000,
    defaultPos: { x: 0, y: 1.4, z: 5.2 },
    lookAt: { x: 0, y: 0.9, z: 0 },
    mouseMoveRange: { x: 0.45, y: 0.28 },
    damping: 0.05,
    scrollParallaxFactor: 0.8
  },

  // Tech Cards specifications
  techCards: [
    { name: 'Flutter', icon: 'flutter', color: '#02569B', neon: '#00E5FF', x: -1.75, y: 1.65, z: 0.4, scale: 0.32, speed: 1.2, floatOffset: 0 },
    { name: 'Dart', icon: 'dart', color: '#0175C2', neon: '#29B6F6', x: -1.9, y: 0.85, z: 0.7, scale: 0.29, speed: 1.0, floatOffset: 1.5 },
    { name: 'Firebase', icon: 'firebase', color: '#FFA000', neon: '#FFCA28', x: -1.5, y: 0.05, z: 0.9, scale: 0.30, speed: 1.4, floatOffset: 3.1 },
    { name: 'Node.js', icon: 'nodejs', color: '#339933', neon: '#68A063', x: 1.8, y: 1.55, z: 0.3, scale: 0.30, speed: 1.1, floatOffset: 0.8 },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6', neon: '#60A5FA', x: 1.9, y: 0.75, z: 0.6, scale: 0.28, speed: 1.3, floatOffset: 2.4 },
    { name: 'React', icon: 'react', color: '#61DAFB', neon: '#00D8FF', x: 1.6, y: -0.05, z: 0.85, scale: 0.29, speed: 0.9, floatOffset: 4.2 },
    { name: 'NestJS', icon: 'nestjs', color: '#E0234E', neon: '#FF4081', x: -1.1, y: 2.25, z: -0.2, scale: 0.26, speed: 1.15, floatOffset: 1.9 },
    { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1', neon: '#818CF8', x: 1.2, y: 2.15, z: -0.2, scale: 0.26, speed: 1.05, floatOffset: 3.7 }
  ],

  // Floating Code Glyphs
  codeGlyphs: ['</>', '{}', '()', '=>', '01', '#', 'async', 'await', 'Bloc'],

  // Theme palettes for 3D lights and glowing materials
  themes: {
    '': {
      name: 'Cyber Purple',
      primary: '#8b5cf6',
      primaryRgb: [139, 92, 246],
      secondary: '#06b6d4',
      secondaryRgb: [6, 182, 212],
      accent: '#ec4899',
      rimPurple: 0x9333ea,
      rimCyan: 0x06b6d4,
      ambientDark: 0x0d0b1a,
      ambientLight: 0x3b3355,
      pedestalGlow: 0x8b5cf6,
      screenGlow: 0x00f2fe
    },
    'cyber-blue': {
      name: 'Cyber Blue',
      primary: '#0ea5e9',
      primaryRgb: [14, 165, 233],
      secondary: '#06d6a0',
      secondaryRgb: [6, 214, 160],
      accent: '#38bdf8',
      rimPurple: 0x0284c7,
      rimCyan: 0x06d6a0,
      ambientDark: 0x061320,
      ambientLight: 0x224466,
      pedestalGlow: 0x0ea5e9,
      screenGlow: 0x38bdf8
    },
    'neon-green': {
      name: 'Neon Green',
      primary: '#22c55e',
      primaryRgb: [34, 197, 94],
      secondary: '#06b6d4',
      secondaryRgb: [6, 182, 212],
      accent: '#84cc16',
      rimPurple: 0x16a34a,
      rimCyan: 0x06b6d4,
      ambientDark: 0x061a0f,
      ambientLight: 0x20442c,
      pedestalGlow: 0x22c55e,
      screenGlow: 0x4ade80
    },
    'solar-red': {
      name: 'Solar Red',
      primary: '#f97316',
      primaryRgb: [249, 115, 22],
      secondary: '#eab308',
      secondaryRgb: [234, 179, 8],
      accent: '#ec4899',
      rimPurple: 0xe11d48,
      rimCyan: 0xf59e0b,
      ambientDark: 0x1a0a06,
      ambientLight: 0x552a1a,
      pedestalGlow: 0xf97316,
      screenGlow: 0xfbbf24
    }
  },

  // Performance thresholds
  performance: {
    maxPixelRatio: 2,
    targetFps: 60,
    enableShadows: true,
    reduceMotionFallback: true
  }
};
