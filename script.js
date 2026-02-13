// Language and Interaction Management for Speak Up Website

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Initialize Language
    setLanguage(currentLanguage);

    // Initialize Theme
    const savedTheme = localStorage.getItem('speakUpTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Language switcher dropdown
    const languageSwitcher = document.getElementById('languageSwitcher');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');

    // Toggle dropdown
    languageSwitcher.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSwitcher.classList.toggle('active');
        languageDropdown.classList.toggle('show');
    });

    // Language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            languageSwitcher.classList.remove('active');
            languageDropdown.classList.remove('show');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageSwitcher.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageSwitcher.classList.remove('active');
            languageDropdown.classList.remove('show');
        }
    });

    // Theme switcher
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('speakUpTheme', newTheme);
    });

    // EmailJS Initialization
    // IMPORTANT: Replace "YOUR_PUBLIC_KEY" with your actual EmailJS Public Key
    emailjs.init("Anm2VV32eh9UB4CDZ");

    // Discovery "Other" toggle
    const discoverySelect = document.getElementById('discovery');
    const otherDiscoveryGroup = document.getElementById('otherDiscoveryGroup');
    if (discoverySelect && otherDiscoveryGroup) {
        discoverySelect.addEventListener('change', (e) => {
            otherDiscoveryGroup.style.display = e.target.value === 'other' ? 'block' : 'none';
        });
    }

    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Initialize Scroll Animations
    initScrollAnimations();
});

// ============================================
// Language Switching Logic
// ============================================
let currentLanguage = localStorage.getItem('speakUpLanguage') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('speakUpLanguage', lang);

    // Update HTML attributes
    document.documentElement.lang = lang;

    // Toggle RTL for Arabic
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.dir = 'ltr';
    }

    // Update all text content
    updateContent();

    // Update language switcher button
    document.getElementById('currentLang').textContent = lang.toUpperCase();

    // Update active state in dropdown
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function updateContent() {
    const lang = currentLanguage;
    const contentData = content[lang];

    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = contentData;

        keys.forEach(key => {
            value = value?.[key];
        });

        if (value) {
            element.textContent = value;
        }
    });

    // Update attributes (like placeholders)
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const attrConfig = element.getAttribute('data-i18n-attr'); // e.g., "placeholder:join.form.motivationPlaceholder"
        const [attr, keyPath] = attrConfig.split(':');
        const keys = keyPath.split('.');
        let value = contentData;

        keys.forEach(key => {
            value = value?.[key];
        });

        if (value) {
            element.setAttribute(attr, value);
        }
    });

    // Update dynamically generated content
    populateValues();
    populateSessions();
    populateTestimonials();

    // Refresh icons
    lucide.createIcons();

    // Re-initialize scroll animations for new content
    observeElements();
}

// ============================================
// Dynamic Content Population
// ============================================
function populateValues() {
    const valuesGrid = document.getElementById('valuesGrid');
    if (!valuesGrid) return;

    const values = content[currentLanguage].about.values;
    valuesGrid.innerHTML = values.map(value => `
    <div class="value-card fade-in">
      <div class="value-icon"><i data-lucide="${value.icon}"></i></div>
      <h3>${value.title}</h3>
      <p>${value.description}</p>
    </div>
  `).join('');
}

function populateSessions() {
    const sessionsGrid = document.getElementById('sessionsGrid');
    if (!sessionsGrid) return;

    const sessions = content[currentLanguage].sessions.types;
    sessionsGrid.innerHTML = sessions.map(session => `
    <div class="session-card fade-in">
      <div class="session-icon"><i data-lucide="${session.icon}"></i></div>
      <h3>${session.title}</h3>
      <p>${session.description}</p>
      <span class="session-level">${session.level}</span>
    </div>
  `).join('');
}

function populateTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;

    const testimonials = content[currentLanguage].voices.testimonials;
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial-card fade-in">
      <p class="testimonial-text">${testimonial.text}</p>
      <div class="testimonial-author">
        <span class="author-name">${testimonial.author}</span>
        <span class="author-role">${testimonial.role}</span>
      </div>
    </div>
  `).join('');
}

// ============================================
// Scroll Animation Observer
// ============================================
let observer;

function initScrollAnimations() {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    observeElements();
}

function observeElements() {
    if (!observer) return;

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// Smooth Scrolling
// ============================================
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && !link.classList.contains('no-scroll') && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// ============================================
// Form Handling (Registration via EmailJS)
// ============================================
function handleFormSubmit(e) {
    e.preventDefault();

    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    // UI Feedback
    submitButton.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Submitting...';
    lucide.createIcons();

    // Collect Data
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        level: document.getElementById('level').value,
        aboutMe: document.getElementById('aboutMe').value,
        goals: document.getElementById('goals').value,
        instagram: document.getElementById('instagram').value,
        tiktok: document.getElementById('tiktok').value,
        motivation: document.getElementById('motivation').value,
        agreement: document.getElementById('agreement').checked ? "Yes" : "No",
        discovery: document.getElementById('discovery').value,
        otherDiscovery: document.getElementById('otherDiscovery')?.value || ""
    };

    console.log('Registration Data:', formData);

    // Send to EmailJS
    // Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with your actual IDs
    emailjs.send("service_yi5gg4t", "template_argjbas", formData)
        .then(() => {
            showSuccess(submitButton, originalText, e.target);
            if (document.getElementById('otherDiscoveryGroup')) {
                document.getElementById('otherDiscoveryGroup').style.display = 'none';
            }
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert("Application Error: Please replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' in script.js to make this work.");
            submitButton.innerHTML = originalText;
        });
}

function showSuccess(btn, originalText, form) {
    const messages = {
        en: '✓ Submitted Successfully!',
        ar: '✓ تم التسجيل بنجاح!',
        fr: '✓ Inscription envoyée !'
    };

    btn.textContent = messages[currentLanguage];
    btn.style.background = '#10B981';
    btn.style.borderColor = '#10B981';

    form.reset();

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
    }, 3000);
}

// ============================================
// Header Scroll Effect
// ============================================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
