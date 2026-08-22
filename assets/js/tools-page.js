/* ============================================================
   IBRAHIM ELSHISHTAWY — TOOLS & PROJECTS PAGE CONTROLLER
   (tools-page.js)
   ============================================================ */

'use strict';

(function ToolsPageEngine() {
  let activeToolCategory = 'all';
  let activeProjectType = 'all';
  let showAllTools = false;
  let showAllProjects = false;

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Header 3D Rotating Cube Canvas
    initHeader3DCubes();

    // 2. Render initial Tools Grid
    renderToolsGrid();

    // 3. Render initial Projects Grid
    renderProjectsGrid();

    // 4. Bind Filter Buttons
    bindFilterButtons();

    // 5. Bind View All Toggles
    bindViewAllToggles();

    // 6. Setup Progress Bar & Scroll Observers
    setupCardObservers();
  });

  /* ─────────────────────────────────────────────────────────────
     1. 3D ROTATING CYBER CUBE HEADER
     ───────────────────────────────────────────────────────────── */
  function initHeader3DCubes() {
    document.querySelectorAll('.header-3d-cube-canvas').forEach(canvas => {
      if (typeof THREE === 'undefined') return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 2.8;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
      });
      renderer.setSize(48, 48);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Outer Wireframe Cube
      const cubeGeo = new THREE.BoxGeometry(1.1, 1.1, 1.1);
      const edges = new THREE.EdgesGeometry(cubeGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.9,
        linewidth: 2
      });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      scene.add(wireframe);

      // Inner Glowing Core
      const innerGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.35
      });
      const innerCube = new THREE.Mesh(innerGeo, innerMat);
      scene.add(innerCube);

      function animate() {
        requestAnimationFrame(animate);
        wireframe.rotation.x += 0.012;
        wireframe.rotation.y += 0.016;
        innerCube.rotation.x -= 0.008;
        innerCube.rotation.y -= 0.012;
        renderer.render(scene, camera);
      }
      animate();
    });
  }

  /* ─────────────────────────────────────────────────────────────
     2. RENDER TOOLS GRID
     ───────────────────────────────────────────────────────────── */
  function renderToolsGrid() {
    const container = document.getElementById('tools-grid-container');
    if (!container || typeof TOOLS_DATA === 'undefined') return;

    // Filter tools based on category
    let list = TOOLS_DATA.filter(tool => {
      if (activeToolCategory === 'all') return true;
      return tool.category === activeToolCategory;
    });

    // Limit initial display unless "show all" is active
    const totalCount = list.length;
    if (!showAllTools && activeToolCategory === 'all') {
      list = list.slice(0, 10);
    }

    container.innerHTML = list.map(tool => `
      <div class="tool-card bento-reveal" style="--tool-neon: ${tool.neon};" data-level="${tool.level}">
        <div>
          <div class="tool-icon-wrapper" style="color: ${tool.neon};">
            ${getToolIconSvg(tool.icon, tool.neon)}
          </div>
          <h3 class="tool-name">${tool.name}</h3>
          <p class="tool-subtitle">${tool.subtitle}</p>
        </div>
        <div class="tool-progress-wrapper">
          <div class="tool-progress-header">
            <span>Skill Level</span>
            <span>${tool.level}%</span>
          </div>
          <div class="tool-progress-track">
            <div class="tool-progress-fill" style="width: 0%;" data-target-width="${tool.level}%"></div>
          </div>
        </div>
      </div>
    `).join('');

    // Update View All button text/state
    const viewAllBtn = document.getElementById('view-all-tools-btn');
    if (viewAllBtn) {
      if (activeToolCategory !== 'all') {
        viewAllBtn.style.display = 'none';
      } else {
        viewAllBtn.style.display = 'inline-flex';
        viewAllBtn.innerHTML = showAllTools
          ? `<i class="fas fa-chevron-up"></i> <span>عرض أقل / Show Less</span>`
          : `<i class="fas fa-th-large"></i> <span>عرض جميع التولز / View All Tools (${TOOLS_DATA.length})</span>`;
      }
    }

    // Trigger animations for newly rendered elements
    setupCardObservers();
  }

  /* ─────────────────────────────────────────────────────────────
     3. RENDER PROJECTS GRID
     ───────────────────────────────────────────────────────────── */
  function renderProjectsGrid() {
    const container = document.getElementById('projects-grid-container');
    if (!container || typeof PROJECTS_DATA === 'undefined') return;

    let projectsList = Object.keys(PROJECTS_DATA).map(key => ({
      key: key,
      ...PROJECTS_DATA[key]
    }));

    if (activeProjectType !== 'all') {
      projectsList = projectsList.filter(p => {
        if (activeProjectType === 'mobile') return p.type === 'mobile';
        if (activeProjectType === 'web') return p.type === 'web';
        if (activeProjectType === 'backend') return p.tags.some(t => ['Node.js', 'MongoDB', 'Firebase', 'Socket.io', 'Express'].includes(t));
        if (activeProjectType === 'fullstack') return p.tags.length >= 4;
        return true;
      });
    }

    if (!showAllProjects && activeProjectType === 'all') {
      projectsList = projectsList.slice(0, 8);
    }

    container.innerHTML = projectsList.map(project => `
      <div class="project-showcase-card project-card bento-reveal" data-project="${project.key}">
        <div class="project-img-box">
          <img src="${project.image || 'assets/assets/profile.jpg'}" alt="${project.title}" loading="lazy">
          <span class="project-type-badge">
            ${project.typeLabelAr || (project.type === 'mobile' ? 'تطبيق موبايل' : 'تطبيق ويب')}
          </span>
        </div>
        <div class="project-card-body">
          <div>
            <h3 class="project-card-title">${project.titleAr || project.title}</h3>
            <p class="project-card-desc">${project.description || project.subtitle}</p>
          </div>
          <div>
            <div class="project-tech-tags">
              ${(project.tags || []).slice(0, 3).map(tag => `
                <span class="project-tech-tag">
                  <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span> ${tag}
                </span>
              `).join('')}
            </div>
            <div class="project-card-footer">
              <span class="project-action-link">
                عرض التفاصيل <i class="fas fa-arrow-left text-[10px]"></i>
              </span>
              ${project.repoLink && project.repoLink !== '#' ? `
                <a href="${project.repoLink}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white text-xs" onclick="event.stopPropagation();" aria-label="GitHub Code">
                  <i class="fab fa-github"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Bind click events on project cards to open case study overlay
    container.querySelectorAll('.project-showcase-card').forEach(card => {
      card.addEventListener('click', () => {
        if (typeof openCaseStudy === 'function') openCaseStudy(card);
      });
    });

    const viewAllProjBtn = document.getElementById('view-all-projects-btn');
    if (viewAllProjBtn) {
      if (activeProjectType !== 'all') {
        viewAllProjBtn.style.display = 'none';
      } else {
        viewAllProjBtn.style.display = 'inline-flex';
        viewAllProjBtn.innerHTML = showAllProjects
          ? `<span>عرض أقل / Show Less</span> <i class="fas fa-arrow-up"></i>`
          : `<span>عرض كل المشاريع / View All Projects</span> <i class="fas fa-arrow-left"></i>`;
      }
    }
  }

  /* ─────────────────────────────────────────────────────────────
     4. BIND FILTER BUTTONS
     ───────────────────────────────────────────────────────────── */
  function bindFilterButtons() {
    // Tool Category Filter Buttons
    document.querySelectorAll('#tool-filters .filter-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#tool-filters .filter-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeToolCategory = btn.getAttribute('data-category') || 'all';
        renderToolsGrid();
      });
    });

    // Project Type Filter Buttons
    document.querySelectorAll('#project-filters .filter-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#project-filters .filter-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeProjectType = btn.getAttribute('data-type') || 'all';
        renderProjectsGrid();
      });
    });
  }

  /* ─────────────────────────────────────────────────────────────
     5. VIEW ALL TOGGLES
     ───────────────────────────────────────────────────────────── */
  function bindViewAllToggles() {
    const viewAllToolsBtn = document.getElementById('view-all-tools-btn');
    if (viewAllToolsBtn) {
      viewAllToolsBtn.addEventListener('click', () => {
        showAllTools = !showAllTools;
        renderToolsGrid();
      });
    }

    const viewAllProjectsBtn = document.getElementById('view-all-projects-btn');
    if (viewAllProjectsBtn) {
      viewAllProjectsBtn.addEventListener('click', () => {
        showAllProjects = !showAllProjects;
        renderProjectsGrid();
      });
    }
  }

  /* ─────────────────────────────────────────────────────────────
     6. CARD OBSERVERS & ANIMATED PROGRESS BARS
     ───────────────────────────────────────────────────────────── */
  function setupCardObservers() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.tool-progress-fill').forEach(fill => {
        fill.style.width = fill.getAttribute('data-target-width') || '85%';
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.tool-progress-fill');
          if (fill) {
            const target = fill.getAttribute('data-target-width') || '85%';
            setTimeout(() => { fill.style.width = target; }, 120);
          }
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.tool-card').forEach(card => observer.observe(card));
  }

  /* ─────────────────────────────────────────────────────────────
     7. ICON HELPER
     ───────────────────────────────────────────────────────────── */
  function getToolIconSvg(iconType, color) {
    if (iconType === 'flutter') {
      return `<svg class="w-6 h-6" viewBox="0 0 256 317" fill="currentColor"><path d="M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z"/><path d="m121 280 37 37h97l-85-86z" fill-opacity="0.8"/><path d="m72 230 48-48 50 49-49 49z" fill-opacity="0.9"/></svg>`;
    } else if (iconType === 'dart') {
      return `<i class="fas fa-terminal"></i>`;
    } else if (iconType === 'react') {
      return `<i class="fab fa-react"></i>`;
    } else if (iconType === 'nextjs') {
      return `<i class="fas fa-circle-notch"></i>`;
    } else if (iconType === 'typescript') {
      return `<i class="fas fa-file-code"></i>`;
    } else if (iconType === 'nodejs') {
      return `<i class="fab fa-node-js"></i>`;
    } else if (iconType === 'nestjs') {
      return `<i class="fas fa-feather-alt"></i>`;
    } else if (iconType === 'postgresql') {
      return `<i class="fas fa-database"></i>`;
    } else if (iconType === 'firebase') {
      return `<i class="fas fa-fire"></i>`;
    } else if (iconType === 'github') {
      return `<i class="fab fa-github"></i>`;
    } else if (iconType === 'docker') {
      return `<i class="fab fa-docker"></i>`;
    } else if (iconType === 'figma') {
      return `<i class="fab fa-figma"></i>`;
    } else {
      return `<i class="fas fa-code"></i>`;
    }
  }

})();
