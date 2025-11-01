// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (barPosition < screenPosition) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

let skillsAnimated = false;
window.addEventListener('scroll', () => {
    if (!skillsAnimated) {
        const skillsSection = document.querySelector('.skills');
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (skillsPosition < screenPosition) {
            animateSkills();
            skillsAnimated = true;
        }
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateOnScroll = document.querySelectorAll('.stat-card, .project-card, .timeline-content');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission (you can add your own logic here)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);

        // Add your form submission logic here
        // For example, send to an API endpoint

        // Show success message (example)
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
        contactForm.reset();
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for stats
const counters = document.querySelectorAll('.stat-card h4');
const speed = 200;

const runCounter = (counter) => {
    const target = counter.innerText.replace('+', '');
    const increment = parseInt(target) / speed;
    let count = 0;

    const updateCounter = () => {
        count += increment;
        if (count < parseInt(target)) {
            counter.innerText = Math.ceil(count) + '+';
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target + '+';
        }
    };

    updateCounter();
};

let countersAnimated = false;
window.addEventListener('scroll', () => {
    if (!countersAnimated) {
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            const aboutPosition = aboutSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (aboutPosition < screenPosition) {
                counters.forEach(counter => runCounter(counter));
                countersAnimated = true;
            }
        }
    }
});
