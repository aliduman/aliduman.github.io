// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Language Switcher
let currentLang = localStorage.getItem('language') || 'en';

function updateContent(lang) {
    const t = translations[lang];

    // Navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['work', 'about', 'contact'];
        link.textContent = t.nav[keys[index]];
        link.setAttribute('data-text', t.nav[keys[index]]);
    });

    // Hero Section
    document.querySelector('.hero-tagline .tag:nth-child(1)').textContent = t.hero.tagline1;
    document.querySelector('.hero-tagline .tag:nth-child(2)').textContent = t.hero.tagline2;
    document.querySelectorAll('.hero-title .word')[0].textContent = t.hero.title1;
    document.querySelectorAll('.hero-title .word')[1].textContent = t.hero.title2;
    document.querySelectorAll('.hero-title .word')[2].textContent = t.hero.title3;
    document.querySelector('.hero-description p').textContent = t.hero.description;
    document.querySelector('.scroll-indicator span').textContent = t.hero.scrollText;

    // Hero Metrics
    const metricTitles = document.querySelectorAll('.metric-content h4');
    const metricDescs = document.querySelectorAll('.metric-content p');
    metricTitles[0].textContent = t.metrics.software.title;
    metricDescs[0].textContent = t.metrics.software.desc;
    metricTitles[1].textContent = t.metrics.uiux.title;
    metricDescs[1].textContent = t.metrics.uiux.desc;
    metricTitles[2].textContent = t.metrics.app.title;
    metricDescs[2].textContent = t.metrics.app.desc;

    // Projects Section
    const projectsSection = document.querySelector('.featured .section-number');
    const projectsTitle = document.querySelector('.featured .section-title');
    if (projectsSection) projectsSection.textContent = t.projects.sectionNumber;
    if (projectsTitle) projectsTitle.textContent = t.projects.sectionTitle;

    // Individual Projects
    const projects = document.querySelectorAll('.project');
    const projectKeys = ['project1', 'project2', 'project3', 'project4'];
    projects.forEach((project, index) => {
        const key = projectKeys[index];
        const projectData = t.projects[key];

        project.querySelector('.project-year').textContent = projectData.year;
        project.querySelector('.project-tags').textContent = projectData.tags;
        project.querySelector('.project-title').textContent = projectData.title;
        project.querySelector('.project-description').textContent = projectData.description;
        project.querySelector('.link-arrow').textContent = projectData.link + ' →';
    });

    // Capabilities Section
    const capSection = document.querySelector('.capabilities .section-number');
    const capTitle = document.querySelector('.capabilities .section-title');
    if (capSection) capSection.textContent = t.capabilities.sectionNumber;
    if (capTitle) capTitle.textContent = t.capabilities.sectionTitle;

    const capabilities = document.querySelectorAll('.capability');
    const capKeys = ['frontend', 'design', 'creative', 'performance'];
    capabilities.forEach((cap, index) => {
        const key = capKeys[index];
        cap.querySelector('h3').textContent = t.capabilities[key].title;
        cap.querySelector('p').textContent = t.capabilities[key].description;
    });

    // About Section
    const aboutSection = document.querySelector('.about .section-number');
    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutSection) aboutSection.textContent = t.about.sectionNumber;
    if (aboutTitle) aboutTitle.textContent = t.about.sectionTitle;

    const aboutText = document.querySelectorAll('.about-text p');
    aboutText[0].textContent = t.about.large;
    aboutText[1].textContent = t.about.p1;
    aboutText[2].textContent = t.about.p2;

    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = t.about.stats.experience;
    statLabels[1].textContent = t.about.stats.projects;
    statLabels[2].textContent = t.about.stats.clients;

    // Contact Section
    const contactSection = document.querySelector('.contact .section-number');
    const contactTitle = document.querySelector('.contact .section-title');
    if (contactSection) contactSection.textContent = t.contact.sectionNumber;
    if (contactTitle) contactTitle.textContent = t.contact.sectionTitle;

    document.querySelector('.contact-text').textContent = t.contact.text;

    const contactLinks = document.querySelectorAll('.contact-link');
    const contactKeys = ['email', 'linkedin', 'github', 'twitter'];
    contactLinks.forEach((link, index) => {
        const key = contactKeys[index];
        link.querySelector('.link-label').textContent = t.contact[key].label;
        link.querySelector('.link-value').textContent = t.contact[key].value;
    });

    // Footer
    document.querySelectorAll('.footer p')[0].textContent = '© ' + t.footer.copyright;
    document.querySelector('.footer-link').textContent = t.footer.backToTop + ' ↑';

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
}

// Language toggle functionality
const langOptions = document.querySelectorAll('.lang-option');

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');

        if (lang !== currentLang) {
            currentLang = lang;
            localStorage.setItem('language', lang);

            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Update content with animation
            gsap.to('body', {
                opacity: 0.7,
                duration: 0.2,
                onComplete: () => {
                    updateContent(lang);
                    gsap.to('body', {
                        opacity: 1,
                        duration: 0.3
                    });
                }
            });
        }
    });
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);

    // Set active language option
    langOptions.forEach(option => {
        if (option.getAttribute('data-lang') === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
});

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
} else if (systemPrefersDark) {
    html.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Animate theme toggle
    gsap.to(themeToggle, {
        rotation: '+=180',
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate cursor with smooth follow
function animateCursor() {
    // Cursor follows mouse instantly
    cursorX += (mouseX - cursorX) * 0.9;
    cursorY += (mouseY - cursorY) * 0.9;

    // Follower follows with delay
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .project-image');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursorFollower.style.opacity = '0.3';
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursorFollower.style.opacity = '1';
    });
});

// Hero Section Animations
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Animate tagline
    tl.to('.hero-tagline', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5
    });

    // Animate title words
    tl.to('.hero-title .word', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1
    }, '-=0.5');

    // Animate description
    tl.to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.8');

    // Animate scroll indicator
    tl.to('.scroll-indicator', {
        opacity: 1,
        duration: 0.8
    }, '-=0.5');

    // Animate hero metrics
    tl.to('.hero-metrics', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15
    }, '-=0.6');
}

// Initialize hero animations
initHeroAnimations();

// Smooth Scroll - Fixed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just # (like back to top)
        if (href === '#') {
            e.preventDefault();
            gsap.to(window, {
                duration: 2,
                scrollTo: { y: 0 },
                ease: 'power4.inOut'
            });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: target,
                    offsetY: 100
                },
                ease: 'power4.inOut'
            });
        }
    });
});

// Projects Slider
const projectsSwiper = new Swiper('.projects.swiper', {
    slidesPerView: 1,
    spaceBetween: 60,
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.2,
            spaceBetween: 80,
        },
        1024: {
            slidesPerView: 1.5,
            spaceBetween: 100,
        },
    },
    mousewheel: {
        forceToAxis: true,
    },
    keyboard: {
        enabled: true,
    },
});

// Parallax Effect for Hero
gsap.to('.hero-title', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 200,
    opacity: 0.5
});

gsap.to('.hero-description', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 150
});

// Projects Scroll Animations - Updated for Swiper
const projects = document.querySelectorAll('.project');

// Fade in animation on section enter
gsap.from('.featured', {
    scrollTrigger: {
        trigger: '.featured',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1
    },
    opacity: 0,
    y: 60
});

// Individual project hover effects
projects.forEach((project) => {
    const projectImage = project.querySelector('.project-image img');

    // Subtle parallax for visible slides
    if (projectImage) {
        gsap.to(projectImage, {
            scrollTrigger: {
                trigger: '.featured',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -30,
            ease: 'none'
        });
    }
});

// Capabilities Section Animations
const capabilities = document.querySelectorAll('.capability');

capabilities.forEach((capability, index) => {
    gsap.to(capability, {
        scrollTrigger: {
            trigger: capability,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1
        },
        opacity: 1,
        y: 0,
        duration: 1
    });
});

// About Section Animations
gsap.to('.about-image', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1
    },
    opacity: 1,
    y: 0,
    duration: 1.5
});

gsap.to('.about-content', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1
    },
    opacity: 1,
    y: 0,
    duration: 1.5
});

// About image parallax
gsap.to('.about-image img', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    y: -80,
    scale: 1,
    ease: 'none'
});

// Number counter animation for stats
const stats = document.querySelectorAll('.stat-number');

stats.forEach(stat => {
    const target = parseInt(stat.textContent);

    ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        onEnter: () => {
            gsap.to(stat, {
                textContent: target,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                onUpdate: function() {
                    stat.textContent = Math.ceil(this.targets()[0].textContent) + '+';
                }
            });
        },
        once: true
    });
});

// Contact Section Reveal
gsap.to('.contact-content', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 60%',
        end: 'top 30%',
        scrub: 1
    },
    opacity: 1,
    y: 0,
    duration: 1.5
});

// Contact links stagger animation
const contactLinks = document.querySelectorAll('.contact-link');

contactLinks.forEach((link, index) => {
    gsap.from(link, {
        scrollTrigger: {
            trigger: link,
            start: 'top 90%',
            end: 'top 70%',
            scrub: 1
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: index * 0.1
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.nav');

ScrollTrigger.create({
    start: 'top -100',
    end: 99999,
    toggleClass: {
        className: 'scrolled',
        targets: navbar
    }
});

// Add scrolled class styles with dark mode support
const style = document.createElement('style');
style.textContent = `
    .nav.scrolled {
        background-color: var(--color-bg);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    [data-theme="dark"] .nav.scrolled {
        box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1);
    }
`;
document.head.appendChild(style);

// Project hover effect
projects.forEach(project => {
    const projectImage = project.querySelector('.project-image');
    const projectInfo = project.querySelector('.project-info');

    project.addEventListener('mouseenter', () => {
        gsap.to(projectImage, {
            scale: 0.98,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    project.addEventListener('mouseleave', () => {
        gsap.to(projectImage, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
});

// Smooth page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Magnetic effect for buttons and links
const magneticElements = document.querySelectorAll('.link-arrow, .nav-link');

magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

// Scroll to top on footer link click
document.querySelector('.footer-link').addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(window, {
        duration: 2,
        scrollTo: { y: 0 },
        ease: 'power4.inOut'
    });
});

// Update cursor position on page load
document.addEventListener('DOMContentLoaded', () => {
    cursor.style.left = window.innerWidth / 2 + 'px';
    cursor.style.top = window.innerHeight / 2 + 'px';
    cursorFollower.style.left = window.innerWidth / 2 + 'px';
    cursorFollower.style.top = window.innerHeight / 2 + 'px';
});

// Refresh ScrollTrigger on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// Mobile menu (if needed in future)
// Currently using simple responsive nav
if (window.innerWidth <= 768) {
    // Disable custom cursor on mobile
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
}
