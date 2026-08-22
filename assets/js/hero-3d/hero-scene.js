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

  // Lighting references
  let ambientLight = null;
  let keyLight = null;
  let fillLight = null;
  let rimLightPurple = null;
  let rimLightCyan = null;
  let workstationLight = null;
  let pedestalLight = null;

  // Camera & Mouse interpolation
  let targetCamX = 0.15;
  let targetCamY = 1.35;
  let currentCamX = 0.15;
  let currentCamY = 1.35;
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

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 620;

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
      precision: 'highp'
    });

    const pixelRatio = Math.min(window.devicePixelRatio || 1, window.Hero3DConfig.performance.maxPixelRatio);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // 4. Setup Cinematic 3D Studio Lighting
    setupCinematicLighting();

    return true;
  }

  function setupCinematicLighting() {
    const activeThemeId = document.documentElement.getAttribute('data-theme') || '';
    const isLight = document.documentElement.getAttribute('data-theme-mode') === 'light';
    const theme = window.Hero3DConfig.themes[activeThemeId] || window.Hero3DConfig.themes[''];

    // Base Ambient Light
    ambientLight = new THREE.AmbientLight(isLight ? 0x8888aa : theme.ambientDark, isLight ? 1.6 : 1.1);
    scene.add(ambientLight);

    // 1. Front Key Light (Studio portrait light)
    keyLight = new THREE.DirectionalLight(0xfff8f0, 2.2);
    keyLight.position.set(2.0, 4.0, 4.0);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // 2. Soft Fill Light (Subtle blue illumination from left)
    fillLight = new THREE.DirectionalLight(0x60a5fa, 0.9);
    fillLight.position.set(-3.5, 2.5, 3.0);
    scene.add(fillLight);

    // 3. Purple Rim Spotlight (From back-left, creates intense cyber glow on character and box edge)
    rimLightPurple = new THREE.SpotLight(theme.rimPurple, 4.8, 16, Math.PI / 3.5, 0.4, 1.1);
    rimLightPurple.position.set(-3.0, 3.2, -2.2);
    rimLightPurple.lookAt(0, 1.0, 0);
    scene.add(rimLightPurple);

    // 4. Cyan Rim Spotlight (From back-right, creates sharp cyan accent on monitor & right side)
    rimLightCyan = new THREE.SpotLight(theme.rimCyan, 4.2, 16, Math.PI / 3.5, 0.4, 1.1);
    rimLightCyan.position.set(3.5, 2.8, -1.8);
    rimLightCyan.lookAt(0.5, 1.0, 0.2);
    scene.add(rimLightCyan);

    // 5. Workstation Screen Light (Glow from the code monitor)
    workstationLight = new THREE.PointLight(theme.screenGlow, 2.2, 3.8);
    workstationLight.position.set(1.4, 1.35, 0.2);
    scene.add(workstationLight);

    // 6. Pedestal & Cyber Pod Glowing Base Light
    pedestalLight = new THREE.PointLight(theme.pedestalGlow, 3.5, 4.5);
    pedestalLight.position.set(0, 0.05, 0.2);
    scene.add(pedestalLight);
  }

  function updateTheme(themeId, isLight) {
    if (!scene) return;
    const theme = window.Hero3DConfig.themes[themeId] || window.Hero3DConfig.themes[''];

    if (ambientLight) {
      ambientLight.color.setHex(isLight ? 0x8888aa : theme.ambientDark);
      ambientLight.intensity = isLight ? 1.6 : 1.1;
    }
    if (rimLightPurple) rimLightPurple.color.setHex(theme.rimPurple);
    if (rimLightCyan) rimLightCyan.color.setHex(theme.rimCyan);
    if (workstationLight) workstationLight.color.setHex(theme.screenGlow);
    if (pedestalLight) pedestalLight.color.setHex(theme.pedestalGlow);
  }

  function handleResize() {
    if (!container || !camera || !renderer) return;
    const width = container.clientWidth;
    const height = container.clientHeight || 620;
    if (width === 0 || height === 0) return;

    camera.aspect = width / height;

    if (width < 640) {
      camera.fov = 44;
      camera.position.z = 5.6;
      camera.position.x = 0;
    } else if (width < 1024) {
      camera.fov = 40;
      camera.position.z = 5.1;
      camera.position.x = 0.08;
    } else {
      camera.fov = window.Hero3DConfig.camera.fov;
      camera.position.z = window.Hero3DConfig.camera.defaultPos.z;
      camera.position.x = window.Hero3DConfig.camera.defaultPos.x;
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

    targetCamX = cfg.defaultPos.x + mouseX * cfg.mouseMoveRange.x;
    targetCamY = cfg.defaultPos.y - mouseY * cfg.mouseMoveRange.y + (scrollProgress * cfg.scrollParallaxFactor * 0.3);

    currentCamX += (targetCamX - currentCamX) * cfg.damping;
    currentCamY += (targetCamY - currentCamY) * cfg.damping;

    camera.position.x = currentCamX;
    camera.position.y = currentCamY;

    camera.lookAt(cfg.lookAt.x + mouseX * 0.08, cfg.lookAt.y + scrollProgress * 0.15, cfg.lookAt.z);
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
