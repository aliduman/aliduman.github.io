// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

// Add scrolled class styles
const style = document.createElement('style');
style.textContent = `
    .nav.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        mix-blend-mode: normal;
    }

    .nav.scrolled .nav-logo,
    .nav.scrolled .nav-link {
        color: var(--color-text);
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
