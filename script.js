/* ============================================
   MANASA PANUGANTI — PORTFOLIO JS
   ============================================ */

/* ===== LOADER ===== */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => { loader.style.display = 'none'; }, 700);
    }
  }, 1600);
});

/* ===== CUSTOM CURSOR ===== */
const cursorDot     = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

if (cursorDot && cursorOutline) {
  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.12;
    outlineY += (mouseY - outlineY) * 0.12;
    cursorOutline.style.left = outlineX + 'px';
    cursorOutline.style.top  = outlineY + 'px';
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Grow cursor on hoverable elements
  const hoverTargets = document.querySelectorAll('a, button, .skill-tag, .project-card, .cert-card, .edu-card');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.style.width   = '56px';
      cursorOutline.style.height  = '56px';
      cursorOutline.style.opacity = '0.4';
      cursorDot.style.transform   = 'translate(-50%, -50%) scale(1.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursorOutline.style.width   = '36px';
      cursorOutline.style.height  = '36px';
      cursorOutline.style.opacity = '0.6';
      cursorDot.style.transform   = 'translate(-50%, -50%) scale(1)';
    });
  });
}

/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections  = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

/* ===== TYPEWRITER EFFECT ===== */
const roles = [
  'Software Engineer',
  'Backend Developer',
  'Full Stack Developer',
  'AI Enthusiast',
  'Problem Solver'
];

const typedEl = document.getElementById('typedText');
if (typedEl) {
  let roleIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;
  let typingTimeout;

  function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typedEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentRole.length) {
        isDeleting = true;
        typingTimeout = setTimeout(type, 1800);
        return;
      }
    } else {
      typedEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex  = (roleIndex + 1) % roles.length;
        typingTimeout = setTimeout(type, 400);
        return;
      }
    }
    typingTimeout = setTimeout(type, isDeleting ? 60 : 90);
  }

  // Start after loader
  setTimeout(type, 1800);
}

/* ===== SCROLL REVEAL ===== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on sibling index
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 100;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));

/* ===== BACK TO TOP ===== */
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formNote.textContent = '⚠ Please fill in all required fields.';
      formNote.className   = 'form-note error';
      return;
    }

    // Simulate send — replace with EmailJS or Formspree for real email
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled    = true;

    setTimeout(() => {
      formNote.textContent = '✓ Message sent! I\'ll get back to you soon.';
      formNote.className   = 'form-note success';
      contactForm.reset();
      submitBtn.innerHTML  = 'Send Message <i class="fas fa-paper-plane"></i>';
      submitBtn.disabled   = false;
      setTimeout(() => { formNote.textContent = ''; }, 5000);
    }, 1200);
  });
}

/* ===== SMOOTH SCROLL for anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== SKILL TAG HOVER SOUND EFFECT (subtle) ===== */
// Visual ripple on skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('click', function () {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => { this.style.transform = ''; }, 150);
  });
});

/* ===== NAVBAR ACTIVE STYLE ===== */
const style = document.createElement('style');
style.textContent = `.nav-link.active { color: var(--green) !important; }
.nav-link.active::after { width: 100% !important; }`;
document.head.appendChild(style);
