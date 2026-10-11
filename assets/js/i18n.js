/* ============================================================
   IBRAHIM ELSHISHTAWY — PORTFOLIO ENGINE
   Multilingual Internationalization (i18n.js)
   Bilingual System (Arabic RTL & English LTR)
   ============================================================ */

'use strict';

const I18N_TRANSLATIONS = {
  en: {
    lang_toggle: "AR",
    nav_overview: "Overview",
    nav_works: "Featured Works",
    nav_gallery: "Screenshots Gallery",
    nav_systems: "Systems Engineering",
    nav_expertise: "Expertise",
    nav_experience: "Experience",
    nav_tools: "Tools / Stack",
    nav_contact: "Contact",
    nav_cta: "Let's Talk",

    gallery_label: "PRODUCTION VISUALS & ALL SCREENSHOTS",
    gallery_title: "All Projects Visual Showcase",
    gallery_desc: "Direct high-resolution showcase displaying all 25+ application screens across mobile apps, web platforms, and systems firmware.",
    gallery_filter_all: "All Screens (25)",
    gallery_filter_mobile: "Flutter Mobile (16)",
    gallery_filter_web: "Web Platforms (5)",
    gallery_filter_systems: "Systems & Networks (4)",

    hero_status: "OPEN FOR ENGINEERING ROLES &amp; CLIENT PROJECTS",
    hero_eyebrow: "SOFTWARE ENGINEERING · MOBILE · SYSTEMS",
    hero_headline_1: "Building Digital Products.",
    hero_headline_2: "Engineering Connected Systems.",
    hero_desc: "Ibrahim Elshishtawy — a software engineer working across mobile applications, modern web platforms, backend systems, and network-integrated solutions.",
    hero_cta_work: "Explore My Work",
    hero_cta_contact: "Contact Me",

    pillar_1_title: "Mobile Engineering",
    pillar_1_desc: "Flutter &amp; Dart · Clean Architecture · Local-first DBs",
    pillar_2_title: "Systems &amp; Networks",
    pillar_2_desc: "OpenWrt Linux · iptables traffic management &amp; QoS",
    pillar_3_title: "Technical Training",
    pillar_3_desc: "Python education · Mentorship &amp; Curriculum Design",
    pillar_4_title: "Web Platforms",
    pillar_4_desc: "Next.js &amp; PHP · REST APIs · Responsive Interfaces",

    works_label: "VERIFIED PORTFOLIO · PRODUCTION &amp; RESEARCH",
    works_title: "Featured Engineering Works",
    works_desc: "Carefully engineered software systems spanning bilingual enterprise web, router firmware, education portals, and mobile applications with real project media.",

    filter_all: "All Work",
    filter_mobile: "Mobile Apps (Flutter)",
    filter_web: "Web Platforms",
    filter_systems: "Systems &amp; Networks",
    filter_education: "Education &amp; Training",

    subsystems_label: "APPLICATIONS &amp; SUBSYSTEMS SHOWCASE",
    subsystems_title: "Curated Engineering Systems &amp; Prototypes",
    subsystems_desc: "Specialized production-grade apps, EdTech systems, industrial monitoring, and creative tools built across Flutter, Node.js, and offline architecture.",

    systems_label: "SYSTEMS &amp; NETWORK ENGINEERING · ARCHITECTURE SHOWCASE",
    systems_title: "OpenWrt WiFi Quota &amp; Bandwidth Manager",
    systems_desc: "Beyond conventional application development, this systems project bridges low-level router firmware, Linux kernel packet filtering, background daemon communications, and a mobile management controller.",

    expertise_label: "CORE COMPETENCIES · ARCHITECTURE &amp; STACK",
    expertise_title: "Engineering Expertise",
    expertise_desc: "Disciplined engineering skills grounded in working code, system boundaries, and verified development practices.",

    exp_label: "VERIFIED CONTRIBUTIONS · PROFESSIONAL JOURNEY",
    exp_title: "Professional Milestones &amp; Experience",
    exp_desc: "Accurate breakdown of professional client work, educational mentorship, open research repositories, and formal engineering training.",

    contact_label: "AVAILABLE FOR WORK &amp; ENGINEERING CONTRACTS",
    contact_title: "Initiate Engineering Collaboration",
    contact_desc: "I am available for full-time software engineering roles, mobile development contracting, and systems consultation. Reach out directly via verified channels.",
    contact_primary_email_label: "Primary Email",
    contact_primary_tag: "Primary",
    contact_eng_email_label: "Engineering Email",
    contact_eng_tag: "Engineering",
    contact_call: "Primary Mobile / Call",
    contact_location_title: "Location &amp; Birthplace",
    contact_location: "El Mahalla El Kubra (Birthplace) · Cairo / Mansoura, Egypt",
    contact_verified_profiles: "Verified Profiles",
    contact_badge: "Direct Communication Channel",
    contact_card_title: "Start a Conversation",
    contact_card_desc: "Whether you need a high-performance Flutter mobile application, an enterprise Next.js platform, or specialized systems integration, let's discuss your project requirements directly.",
    contact_email_btn: "Send Direct Email",
    contact_copy_btn: "Copy Address",
    contact_wa_btn: "Direct WhatsApp Chat",

    footer_rights: "All rights reserved. Built with semantic HTML5, Vanilla CSS &amp; Modern JS."
  },

  ar: {
    lang_toggle: "EN",
    nav_overview: "الرئيسية",
    nav_works: "المشاريع المميزة",
    nav_gallery: "معرض الصور",
    nav_systems: "هندسة الأنظمة",
    nav_expertise: "مجالات الخبرة",
    nav_experience: "المسار المهني",
    nav_tools: "أدوات التطوير",
    nav_contact: "تواصل معي",
    nav_cta: "تحدث معي",

    gallery_label: "لقطات الشاشة والمعرض البصري الكامل",
    gallery_title: "معرض صور ولقطات المشاريع الكامل",
    gallery_desc: "استعراض بصري شامل واحترافي لكافة شاشات وتطبيقات الموبايل ومنصات الويب بدقة عالية (25+ لقطة شاشة وتطبيق).",
    gallery_filter_all: "كافة الشاشات (25)",
    gallery_filter_mobile: "تطبيقات فلاتر (16)",
    gallery_filter_web: "منصات الويب (5)",
    gallery_filter_systems: "الأنظمة والشبكات (4)",

    hero_status: "متاح لفرص العمل الهندسية ومشاريع التطوير",
    hero_eyebrow: "هندسة البرمجيات · تطبيقات الموبايل · الأنظمة والشبكات",
    hero_headline_1: "تطوير التطبيقات الرقمية.",
    hero_headline_2: "وهندسة الأنظمة المتكاملة.",
    hero_desc: "إبراهيم الشيشتاوي — مهندس برمجيات متخصص في تطوير تطبيقات الهاتف المحمول (Flutter)، منصات الويب الحديثة (Next.js & PHP)، وهندسة الشبكات والأنظمة المدمجة (OpenWrt).",
    hero_cta_work: "استكشف أعمالي",
    hero_cta_contact: "تواصل معي",

    pillar_1_title: "هندسة تطبيقات الموبايل",
    pillar_1_desc: "فلاتر ودارت · معمارية برمجية نظيفة · قواعد بيانات محلية",
    pillar_2_title: "الأنظمة والشبكات",
    pillar_2_desc: "نظام OpenWrt · إدارة حركة الحزم بقواعد iptables",
    pillar_3_title: "التدريب والتعليم التقني",
    pillar_3_desc: "تدريس لغة بايثون · إعداد المناهج وتوجيه الطلاب",
    pillar_4_title: "منصات الويب الحديثة",
    pillar_4_desc: "Next.js و PHP · واجهات برمجية REST · تصميم متجاوب",

    works_label: "أعمال هندسية موثقة · مشاريع عملية وبحثية",
    works_title: "أبرز الأعمال الهندسية والمشاريع",
    works_desc: "أنظمة برمجية مصممة باحترافية تشمل منصات الويب ثنائية اللغة، أنظمة التحكم بالراوتر، منصات التعليم، وتطبيقات الموبايل المكتملة.",

    filter_all: "كافة المشاريع",
    filter_mobile: "تطبيقات الموبايل (Flutter)",
    filter_web: "منصات الويب",
    filter_systems: "الأنظمة والشبكات",
    filter_education: "التعليم والتدريب",

    subsystems_label: "معرض الأنظمة والتطبيقات البرمجية",
    subsystems_title: "الأنظمة التطبيقية والنماذج البرمجية",
    subsystems_desc: "تطبيقات متخصصة في التكنولوجيا التعليمية، المراقبة الصناعية، وأدوات الإنتاجية مبنية بهيكلية برمجية نظيفة وتخزين محلي متقدم.",

    systems_label: "هندسة الأنظمة والشبكات · استعراض المعمارية",
    systems_title: "نظام إدارة كوتة وشبكات الواي فاي — OpenWrt",
    systems_desc: "مشروع أنظمة هندسي يربط بين نواة نظام تشغيل الراوتر (Linux Kernel)، تصفية الحزم بـ iptables، خادم Node.js الخلفي، وتطبيق فلاتر على الموبايل.",

    expertise_label: "الكفاءات التقنية · المكدس البرمجي والمعمارية",
    expertise_title: "مجالات الخبرة الهندسية",
    expertise_desc: "مهارات برمجية دقيقة قائمة على مشاريع حقيقية وفهم عميق لمعمارية النظم وتكامل البيانات.",

    exp_label: "المساهمات الموثقة · المسار والخبرات العملية",
    exp_title: "المحطات المهنية والخبرات العملية",
    exp_desc: "تفصيل موثق ودقيق للمشاريع المنفذة مع الشركات، التدريس والتدريب التقني، والأبحاث التطبيقية المفتوحة.",

    contact_label: "متاح لعقود العمل والتوظيف الهندسي",
    contact_title: "بدء التعاون الهندسي والتوظيف",
    contact_desc: "متاح لفرص العمل الدائمة، وتطوير التطبيقات التعاقدية، واستشارات الأنظمة. يمكنك التواصل معي مباشرة عبر القنوات المعتمدة.",
    contact_primary_email_label: "الإيميل الأساسي",
    contact_primary_tag: "الأساسي",
    contact_eng_email_label: "إيميل المهندس والتطوير",
    contact_eng_tag: "المهندس والعمل",
    contact_call: "اتصال مباشر / هاتف",
    contact_location_title: "الموقع ومسقط الرأس",
    contact_location: "المحلة الكبرى (بلد الولادة ومسقط الرأس) · القاهرة والمنصورة، مصر",
    contact_verified_profiles: "الحسابات المعتمدة",
    contact_badge: "قناة تواصل هندسية مباشرة",
    contact_card_title: "بدء محادثة هندسية مباشرة",
    contact_card_desc: "سواء كنت بحاجة إلى تطوير تطبيق موبايل فلاتر عالي الأداء، أو منصة ويب متطورة بـ Next.js، أو حلول شبكات وأنظمة مخصصة، يمكنك مراسلتي مباشرة عبر الإيميل أو الواتساب.",
    contact_email_btn: "إرسال بريد إلكتروني",
    contact_copy_btn: "نسخ البريد",
    contact_wa_btn: "محادثة فورية على واتساب",

    footer_rights: "جميع الحقوق محفوظة. تم التطوير بأحدث معايير الويب HTML5 و CSS و JavaScript."
  }
};

/* ── CURRENT LANGUAGE STATE ── */
let currentLang = localStorage.getItem('portfolio_lang') || 'ar';

function applyLanguage(lang) {
  currentLang = lang === 'en' ? 'en' : 'ar';
  localStorage.setItem('portfolio_lang', currentLang);

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  const t = I18N_TRANSLATIONS[currentLang];
  if (!t) return;

  // 1. Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // 2. Update Language toggle button label
  const langLabels = document.querySelectorAll('#lang-label, .lang-label');
  langLabels.forEach(label => {
    label.textContent = t.lang_toggle;
  });

  // 3. Toggle CSS class on body for specific RTL tweaks
  if (currentLang === 'ar') {
    document.body.classList.add('rtl-mode');
  } else {
    document.body.classList.remove('rtl-mode');
  }

  // 4. Translate all Flagship & Mini Project cards dynamically
  if (typeof PROJECTS_DATA !== 'undefined') {
    document.querySelectorAll('[data-project]').forEach(card => {
      const pId = card.getAttribute('data-project');
      const pData = PROJECTS_DATA[pId];
      if (!pData) return;

      const titleEl = card.querySelector('h3');
      const descEl = card.querySelector('p');
      const ctaEl = card.querySelector('.project-cta');

      if (currentLang === 'ar') {
        if (titleEl && pData.titleAr) titleEl.textContent = pData.titleAr;
        if (descEl && (pData.description || pData.summary)) descEl.textContent = pData.description || pData.summary;
        if (ctaEl) {
          ctaEl.innerHTML = 'عرض تفاصيل المشروع <i class="fas fa-chevron-left text-[9px] mr-1 group-hover:-translate-x-1 transition-transform" aria-hidden="true"></i>';
        }
      } else {
        if (titleEl && pData.title) titleEl.textContent = pData.title;
        if (descEl && (pData.summary || pData.description)) descEl.textContent = pData.summary || pData.description;
        if (ctaEl) {
          ctaEl.innerHTML = 'Explore Case Study <i class="fas fa-chevron-right text-[9px] ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>';
        }
      }
    });
  }

  // 5. Re-render Visual Screenshots Gallery if present
  if (typeof initVisualGallery === 'function') {
    initVisualGallery();
  }

  // 6. Re-render active Case Study Overlay if open
  const overlay = document.getElementById('case-study-overlay');
  if (overlay && overlay.classList.contains('active') && typeof renderCaseStudy === 'function') {
    const activeId = window.currentActiveCaseStudyId || document.querySelector('.project-card.active-open, [data-project].active-open')?.getAttribute('data-project');
    if (activeId && PROJECTS_DATA?.[activeId]) {
      renderCaseStudy(PROJECTS_DATA[activeId]);
    }
  }
}

function initLanguageSwitcher() {
  const toggleBtns = document.querySelectorAll('#lang-toggle-btn, .lang-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(newLang);
    });
  });

  // Initialize on load
  applyLanguage(currentLang);
}

// Auto init on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}

window.applyLanguage = applyLanguage;
window.I18N_TRANSLATIONS = I18N_TRANSLATIONS;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { I18N_TRANSLATIONS, applyLanguage };
}
