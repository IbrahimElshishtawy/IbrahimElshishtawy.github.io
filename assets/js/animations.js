/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE v3.0
   GSAP Cinematic Animations (animations.js)
   ============================================================ */

'use strict';

/* ── PRELOADER OUTRO ─────────────────────────────────────────── */
function fadeOutPreloader() {
  const preloader = document.getElementById('cyber-preloader');
  if (!preloader) return;

  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';

  setTimeout(() => {
    preloader.style.display = 'none';
    triggerEntranceReveal();
  }, 700);
}

function triggerEntranceReveal() {
  if (typeof gsap === 'undefined') return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('header',
    { y: -25, opacity: 0 },
    { y: 0,   opacity: 1, duration: 0.7 }
  );

  tl.fromTo('.hero-reveal-text',
    { y: 45, opacity: 0 },
    { y: 0,  opacity: 1, duration: 1, stagger: 0.13 },
    '-=0.4'
  );

  tl.fromTo('.hero-reveal-avatar',
    { scale: 0.88, opacity: 0, rotateY: -12 },
    { scale: 1,    opacity: 1, rotateY: 0,  duration: 1.3, ease: 'elastic.out(1, 0.72)' },
    '-=0.85'
  );

  tl.fromTo('.hero-reveal-floating',
    { y: 18, opacity: 0 },
    { y: 0,  opacity: 1, duration: 0.8, stagger: 0.1 },
    '-=0.7'
  );

  tl.add(setupScrollTriggers, '-=0.2');
}

/* ── GSAP SCROLL TRIGGERS ────────────────────────────────────── */
function setupScrollTriggers() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* Bento cards stagger reveal */
  gsap.utils.toArray('.bento-reveal').forEach((el) => {
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  /* Count-up numbers */
  document.querySelectorAll('.count-number').forEach(el => {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate() { el.textContent = '+' + Math.floor(obj.val); }
    });
  });

  /* Timeline nodes slide in */
  gsap.utils.toArray('.timeline-node').forEach(node => {
    gsap.fromTo(node,
      { x: -28, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: node, start: 'top 85%' }
      }
    );
  });

  /* Certifications nodes slide in */
  gsap.utils.toArray('.cert-reveal').forEach(card => {
    gsap.fromTo(card,
      { y: 35, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%' }
      }
    );
  });
}
