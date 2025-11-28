// ===================================
// ANIMATIONS JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Animated Counter for Stats
    const animateCounter = (element, target) => {
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = Math.round(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    };

    // Intersection Observer for Stats Animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number, .stat-value');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (target && !stat.classList.contains('animated')) {
                        stat.classList.add('animated');
                        animateCounter(stat, target);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe stats sections
    const statsSections = document.querySelectorAll('.stats-section, .stats-showcase');
    statsSections.forEach(section => {
        statsObserver.observe(section);
    });

    // Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = hero.querySelectorAll('.hero-content, .hero-visual');
            parallaxElements.forEach((el, index) => {
                const speed = (index + 1) * 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Rotating Text Effect (optional enhancement)
    const highlightTexts = document.querySelectorAll('.highlight');
    highlightTexts.forEach(text => {
        text.style.animation = 'none';
        setTimeout(() => {
            text.style.animation = '';
        }, 10);
    });

    // Pulsing Effect for Data Orb
    const dataOrb = document.querySelector('.data-orb');
    if (dataOrb) {
        const orbRings = dataOrb.querySelectorAll('.orb-ring');
        orbRings.forEach((ring, index) => {
            ring.style.animationDelay = `${index * 0.3}s`;
        });
    }

    // Staggered Animation for Grid Items
    const animateGridItems = () => {
        const gridItems = document.querySelectorAll('.tech-card, .player-card, .service-item');
        gridItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    };

    animateGridItems();

    // Scroll Progress Indicator (optional)
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #00d9ff, #00b8d4);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createScrollProgress();

    // Hover Effect Enhancement for Cards
    const enhanceCardHover = () => {
        const cards = document.querySelectorAll('.tech-card, .player-card, .service-item, .info-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function(e) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function(e) {
                this.style.transform = 'translateY(0) scale(1)';
            });

            // Track mouse movement for tilt effect
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    };

    // Only apply advanced hover on non-touch devices
    if (!('ontouchstart' in window)) {
        enhanceCardHover();
    }

    // Loading Animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Random Data Animation for Dashboard Elements
function animateDataVisuals() {
    const visualElements = document.querySelectorAll('.viz-circle, .orb-ring');
    
    visualElements.forEach((el, index) => {
        setInterval(() => {
            const randomScale = 0.95 + Math.random() * 0.1;
            el.style.transform = `scale(${randomScale})`;
        }, 2000 + (index * 500));
    });
}

document.addEventListener('DOMContentLoaded', animateDataVisuals);
