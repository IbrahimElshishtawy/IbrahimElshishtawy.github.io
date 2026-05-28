/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v3.0
   Cinematic Mouse Interactions (interactions.js)
   ============================================================ */

'use strict';

/* ── CUSTOM CINEMATIC CURSOR ────────────────────────────────── */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const dot    = document.querySelector('.custom-cursor-dot');
  if (!cursor || !dot || typeof gsap === 'undefined') return;

  // Only on pointer devices
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.addEventListener('mousemove', e => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.22, ease: 'power2.out' });
    gsap.to(dot,    { x: e.clientX, y: e.clientY, duration: 0.04 });
  });

  const INTERACTABLES = 'a, button, .project-card, .mini-project-card, .glass-panel, .cert-card, .tech-card, .social-pill, .social-pill-lg, .magnetic-btn';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTABLES)) document.body.classList.add('cursor-hover');
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(INTERACTABLES)) {
      if (!e.relatedTarget?.closest(INTERACTABLES)) {
        document.body.classList.remove('cursor-hover');
      }
    }
  });

  // Click pulse
  document.addEventListener('mousedown', () => {
    gsap.to(cursor, { scale: 0.8, duration: 0.1 });
  });
  document.addEventListener('mouseup', () => {
    gsap.to(cursor, { scale: 1, duration: 0.2, ease: 'back.out(2)' });
  });
}

/* ── 3D CARD TILT (Parallax) ────────────────────────────────── */
function initCardTilting() {
  if (typeof gsap === 'undefined') return;

  const cards = document.querySelectorAll('.glass-panel, .project-card, .mini-project-card, .cert-card, .hero-avatar-tilt');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect    = card.getBoundingClientRect();
      const x       = e.clientX - rect.left;
      const y       = e.clientY - rect.top;
      const cx      = rect.width  / 2;
      const cy      = rect.height / 2;
      const isAvatar = card.classList.contains('hero-avatar-tilt');
      const maxR    = isAvatar ? 14 : 7;

      gsap.to(card, {
        rotateX: ((cy - y) / cy) * maxR,
        rotateY: ((x - cx) / cx) * maxR,
        transformPerspective: 1100,
        ease: 'power2.out',
        duration: 0.4
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, ease: 'power3.out', duration: 0.7 });
    });
  });
}

/* ── MAGNETIC BUTTONS ───────────────────────────────────────── */
function initMagneticButtons() {
  if (typeof gsap === 'undefined') return;

  document.querySelectorAll('.magnetic-btn, .social-pill, .social-pill-lg').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width  / 2;
      const y = e.clientY - r.top  - r.height / 2;
      gsap.to(btn, { x: x * 0.32, y: y * 0.32, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'power3.out' });
    });
  });
}

/* ── TECH CARD SPOTLIGHT ────────────────────────────────────── */
function initTechSpotlights() {
  document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
    });
  });
}

/* ── PROJECT CARD MOUSE TRACKING (for radial gradient) ───────── */
function initProjectCardMouse() {
  document.querySelectorAll('.project-card, .mini-project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
    });
  });
}
