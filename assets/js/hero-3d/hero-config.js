/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D HERO CONFIGURATION
   (hero-config.js)
   ============================================================ */

'use strict';

window.Hero3DConfig = {
  // Camera settings
  camera: {
    fov: 38,
    near: 0.1,
    far: 1000,
    defaultPos: { x: 0.05, y: 1.35, z: 4.6 },
    lookAt: { x: 0.05, y: 1.15, z: 0 },
    mouseMoveRange: { x: 0.3, y: 0.18 },
    damping: 0.05,
    scrollParallaxFactor: 0.6
  },

  // Tech Cards specifications (Flutter, Dart, Node.js)
  techCards: [
    // Top Left: Flutter
    { name: 'Flutter', icon: 'flutter', color: '#02569B', neon: '#00E5FF', x: -1.35, y: 1.95, z: 0.4, scale: 0.32, speed: 1.1, floatOffset: 0 },
    // Mid Left: Dart
    { name: 'Dart', icon: 'dart', color: '#0175C2', neon: '#29B6F6', x: -1.45, y: 1.05, z: 0.65, scale: 0.30, speed: 1.0, floatOffset: 1.8 },
    // Mid Right: Node.js
    { name: 'Node.js', icon: 'nodejs', color: '#339933', neon: '#4ade80', x: 1.45, y: 1.35, z: 0.6, scale: 0.30, speed: 1.05, floatOffset: 0.9 }
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
      rimCyan: 0x38bdf8,
      ambientDark: 0x0f1b2b,
      ambientLight: 0x3a4f66,
      pedestalGlow: 0x0284c7,
      screenGlow: 0x38bdf8
    },
    'neon-green': {
      name: 'Neon Green',
      primary: '#10b981',
      primaryRgb: [16, 185, 129],
      secondary: '#06b6d4',
      secondaryRgb: [6, 182, 212],
      accent: '#34d399',
      rimPurple: 0x059669,
      rimCyan: 0x10b981,
      ambientDark: 0x0e201b,
      ambientLight: 0x33594e,
      pedestalGlow: 0x10b981,
      screenGlow: 0x34d399
    },
    'solar-red': {
      name: 'Solar Red',
      primary: '#ef4444',
      primaryRgb: [239, 68, 68],
      secondary: '#f97316',
      secondaryRgb: [249, 115, 22],
      accent: '#f87171',
      rimPurple: 0xdc2626,
      rimCyan: 0xf97316,
      ambientDark: 0x221111,
      ambientLight: 0x5e3333,
      pedestalGlow: 0xef4444,
      screenGlow: 0xf87171
    }
  }
};
