/* ============================================
   Saike Lab — Main JS
   ============================================ */
(function () {
  'use strict';

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  /* ---- Hero animation — skip on scroll ---- */
  function initHeroAnimation() {
    var hero = document.getElementById('hero');
    if (!hero) return;

    var skipped = false;

    function skip() {
      if (skipped) return;
      skipped = true;
      hero.classList.add('hero-skip');
    }

    window.addEventListener('scroll', function () {
      skip();
    }, { once: true, passive: true });
  }

  function init() {
    initHeroAnimation();
    initScrollReveal();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();