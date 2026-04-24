/* ============================================================
   THE ARGON COMPANY — main.js
   Handles: Navbar scroll, mobile menu, scroll animations,
            form validation & submission
   ============================================================ */

(function () {
  'use strict';

  /* ── Navbar Scroll Behaviour ── */
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load in case page is mid-scroll

  /* ── Mobile Hamburger Menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll-Reveal Animations ── */
  function initScrollReveal() {
    const targets = document.querySelectorAll('.fade-up');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  initScrollReveal();

  /* ── Contact Form Handling ── */
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      const required = contactForm.querySelectorAll('[required]');
      let valid = true;

      required.forEach(function (field) {
        const group = field.closest('.form-group');
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#e05252';
        } else {
          field.style.borderColor = '';
        }
      });

      // Email format check
      const emailField = document.getElementById('email');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          valid = false;
          emailField.style.borderColor = '#e05252';
        }
      }

      if (!valid) {
        // Shake the submit button
        const submitBtn = contactForm.querySelector('[type="submit"]');
        submitBtn.style.animation = 'none';
        submitBtn.offsetHeight; // reflow
        submitBtn.style.transform = 'translateX(-4px)';
        setTimeout(() => submitBtn.style.transform = '', 200);
        return;
      }

      // Simulate submission (replace with real endpoint)
      const submitBtn = contactForm.querySelector('[type="submit"]');
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      setTimeout(function () {
        contactForm.style.display = 'none';
        if (successMsg) {
          successMsg.style.display = 'block';
        }
      }, 1200);
    });

    // Clear error state on input
    contactForm.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        field.style.borderColor = '';
      });
    });
  }

  /* ── Smooth Anchor Links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 88; // navbar height + breathing room
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── Hero Parallax (subtle) ── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      const y = window.scrollY;
      heroBg.style.transform = 'scale(1.04) translateY(' + (y * 0.18) + 'px)';
    }, { passive: true });
  }

})();








  

