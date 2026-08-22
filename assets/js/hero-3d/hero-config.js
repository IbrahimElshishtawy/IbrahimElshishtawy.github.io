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
    fov: 38,
    near: 0.1,
    far: 1000,
    defaultPos: { x: 0.15, y: 1.35, z: 4.8 },
    lookAt: { x: 0.1, y: 1.05, z: 0 },
    mouseMoveRange: { x: 0.35, y: 0.2 },
    damping: 0.05,
    scrollParallaxFactor: 0.6
  },

  // Tech Cards specifications matching reference composition
  techCards: [
    // Top Left: Flutter
    { name: 'Flutter', icon: 'flutter', color: '#02569B', neon: '#00E5FF', x: -1.45, y: 1.45, z: 0.5, scale: 0.33, speed: 1.1, floatOffset: 0 },
    // Mid Left: Dart
    { name: 'Dart', icon: 'dart', color: '#0175C2', neon: '#29B6F6', x: -1.55, y: 0.82, z: 0.75, scale: 0.31, speed: 1.0, floatOffset: 1.8 },
    // Bottom Left: Firebase
    { name: 'Firebase', icon: 'firebase', color: '#FFA000', neon: '#FFCA28', x: -1.35, y: 0.15, z: 0.95, scale: 0.32, speed: 1.25, floatOffset: 3.4 },
    // Right (in front of desk): Node.js
    { name: 'Node.js', icon: 'nodejs', color: '#339933', neon: '#4ade80', x: 1.55, y: 0.75, z: 0.85, scale: 0.32, speed: 1.05, floatOffset: 0.9 }
  ],

  // Theme palettes for 3D lights and glowing materials
  themes: {
    '': {
      name: 'Cyber Purple',
      primary: '#8b5cf6',
      primaryRgb: [139, 92, 246],
      secondary: '#06b6d4',
      secondaryRgb: [6, 182, 212],
      accent: '#ec4899',
      rimPurple: 0xa855f7,
      rimCyan: 0x06b6d4,
      ambientDark: 0x120f26,
      ambientLight: 0x483d6e,
      pedestalGlow: 0x9333ea,
      screenGlow: 0x38bdf8
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

  performance: {
    maxPixelRatio: 2,
    targetFps: 60,
    enableShadows: true
  }
};
