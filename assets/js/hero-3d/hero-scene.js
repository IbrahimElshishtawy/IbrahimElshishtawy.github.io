/* ============================================================
   IBRAHIM ELSHISHTAWY — 3D HERO SCENE MANAGER
   (hero-scene.js)
   ============================================================ */

'use strict';

window.Hero3DScene = (function () {
  let scene = null;
  let camera = null;
  let renderer = null;
  let container = null;
  let canvas = null;

  // Lighting references for dynamic theme updates
  let ambientLight = null;
  let keyLight = null;
  let fillLight = null;
  let rimLightPurple = null;
  let rimLightCyan = null;
  let workstationLight = null;
  let pedestalLight = null;

  // Camera & Mouse interpolation state
  let targetCamX = 0;
  let targetCamY = 1.4;
  let currentCamX = 0;
  let currentCamY = 1.4;
  let mouseX = 0;
  let mouseY = 0;
  let scrollProgress = 0;

  function init(canvasElement, containerElement) {
    canvas = canvasElement;
    container = containerElement;

    if (!canvas || !container || typeof THREE === 'undefined') {
      console.warn('Hero3DScene: Prerequisites missing or THREE not defined.');
      return false;
    }

    const width = container.clientWidth || window.innerWidth / 2;
    const height = container.clientHeight || 560;

    // 1. Scene
    scene = new THREE.Scene();

    // 2. Camera
    const cfg = window.Hero3DConfig.camera;
    camera = new THREE.PerspectiveCamera(cfg.fov, width / height, cfg.near, cfg.far);
    camera.position.set(cfg.defaultPos.x, cfg.defaultPos.y, cfg.defaultPos.z);
    camera.lookAt(cfg.lookAt.x, cfg.lookAt.y, cfg.lookAt.z);

    // 3. WebGL Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'mediump'
    });

    const pixelRatio = Math.min(window.devicePixelRatio || 1, window.Hero3DConfig.performance.maxPixelRatio);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 4. Setup Lighting System
    setupCinematicLighting();

    return true;
  }

  function setupCinematicLighting() {
    const activeThemeId = document.documentElement.getAttribute('data-theme') || '';
    const isLight = document.documentElement.getAttribute('data-theme-mode') === 'light';
    const theme = window.Hero3DConfig.themes[activeThemeId] || window.Hero3DConfig.themes[''];

    // Ambient Light (subtle base radiance)
    ambientLight = new THREE.AmbientLight(isLight ? 0x666688 : theme.ambientDark, isLight ? 1.4 : 0.85);
    scene.add(ambientLight);

    // 1. Key Light (Soft Warm/Neutral front-top-right)
    keyLight = new THREE.DirectionalLight(0xfff5ea, 1.8);
    keyLight.position.set(2.5, 4.5, 3.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 12;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // 2. Fill Light (Soft cool light from opposite angle)
    fillLight = new THREE.DirectionalLight(0x38bdf8, 0.75);
    fillLight.position.set(-3, 2, 2.5);
    scene.add(fillLight);

    // 3. Purple Rim Light (Sharp cinematic backlight behind-left)
    rimLightPurple = new THREE.SpotLight(theme.rimPurple, 3.8, 14, Math.PI / 4, 0.5, 1.2);
    rimLightPurple.position.set(-3.2, 3.2, -2.5);
    rimLightPurple.lookAt(0, 1.2, 0);
    scene.add(rimLightPurple);

    // 4. Cyan Rim Light (Sharp cinematic backlight behind-right)
    rimLightCyan = new THREE.SpotLight(theme.rimCyan, 3.2, 14, Math.PI / 4, 0.5, 1.2);
    rimLightCyan.position.set(3.2, 3.0, -2.2);
    rimLightCyan.lookAt(0, 1.2, 0);
    scene.add(rimLightCyan);

    // 5. Workstation Screen Glow (Point light right at the monitor looking at the face)
    workstationLight = new THREE.PointLight(theme.screenGlow, 1.6, 3.5);
    workstationLight.position.set(0, 1.15, 0.65);
    scene.add(workstationLight);

    // 6. Pedestal Neon Glow (Point light under the cyber platform)
    pedestalLight = new THREE.PointLight(theme.pedestalGlow, 2.5, 4.0);
    pedestalLight.position.set(0, -0.4, 0.2);
    scene.add(pedestalLight);
  }

  function updateTheme(themeId, isLight) {
    if (!scene) return;
    const theme = window.Hero3DConfig.themes[themeId] || window.Hero3DConfig.themes[''];

    if (ambientLight) {
      ambientLight.color.setHex(isLight ? 0x666688 : theme.ambientDark);
      ambientLight.intensity = isLight ? 1.4 : 0.85;
    }
    if (rimLightPurple) {
      rimLightPurple.color.setHex(theme.rimPurple);
    }
    if (rimLightCyan) {
      rimLightCyan.color.setHex(theme.rimCyan);
    }
    if (workstationLight) {
      workstationLight.color.setHex(theme.screenGlow);
    }
    if (pedestalLight) {
      pedestalLight.color.setHex(theme.pedestalGlow);
    }
  }

  function handleResize() {
    if (!container || !camera || !renderer) return;
    const width = container.clientWidth;
    const height = container.clientHeight || 560;
    if (width === 0 || height === 0) return;

    camera.aspect = width / height;

    // Adjust FOV slightly on smaller mobile screens to keep the full workstation visible
    if (width < 640) {
      camera.fov = 48;
      camera.position.z = 5.8;
    } else if (width < 1024) {
      camera.fov = 44;
      camera.position.z = 5.4;
    } else {
      camera.fov = window.Hero3DConfig.camera.fov;
      camera.position.z = window.Hero3DConfig.camera.defaultPos.z;
    }

    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function setNormalizedMouse(x, y) {
    mouseX = x;
    mouseY = y;
  }

  function setScrollProgress(progress) {
    scrollProgress = Math.max(0, Math.min(1, progress));
  }

  function updateCamera() {
    if (!camera) return;
    const cfg = window.Hero3DConfig.camera;

    // Target camera position with mouse parallax and scroll movement
    targetCamX = cfg.defaultPos.x + mouseX * cfg.mouseMoveRange.x;
    targetCamY = cfg.defaultPos.y - mouseY * cfg.mouseMoveRange.y + (scrollProgress * cfg.scrollParallaxFactor * 0.4);

    // Smooth Lerp Damping
    currentCamX += (targetCamX - currentCamX) * cfg.damping;
    currentCamY += (targetCamY - currentCamY) * cfg.damping;

    camera.position.x = currentCamX;
    camera.position.y = currentCamY;

    // Subtle scroll-induced camera tilt
    const targetLookAtY = cfg.lookAt.y + scrollProgress * 0.2;
    camera.lookAt(cfg.lookAt.x, targetLookAtY, cfg.lookAt.z);
  }

  function render() {
    if (!renderer || !scene || !camera) return;
    updateCamera();
    renderer.render(scene, camera);
  }

  function dispose() {
    if (renderer) {
      renderer.dispose();
      renderer.forceContextLoss();
    }
  }

  return {
    init: init,
    scene: function () { return scene; },
    camera: function () { return camera; },
    renderer: function () { return renderer; },
    handleResize: handleResize,
    setNormalizedMouse: setNormalizedMouse,
    setScrollProgress: setScrollProgress,
    updateTheme: updateTheme,
    render: render,
    dispose: dispose
  };
})();
