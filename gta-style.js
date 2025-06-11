// Smooth scrolling para enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-menu a, .footer-section a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para la navbar fija
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    // Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.feature-character, .tech-content, .download-section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect para el hero
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Efectos de hover para botones
    const buttons = document.querySelectorAll('.btn, .download-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animación de texto para el título principal
    const titleMain = document.querySelector('.title-main');
    if (titleMain) {
        const text = titleMain.textContent;
        titleMain.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.animationDelay = `${index * 0.1}s`;
            span.style.animation = 'fadeInChar 0.5s ease forwards';
            titleMain.appendChild(span);
        });
    }

    // Efecto de partículas en el fondo
    createParticles();

    // Animación de código
    animateCodeLines();

    // Inicializar animaciones de scroll
    initializeScrollAnimations();
    
    // Inicializar indicadores de scroll
    initializeScrollIndicators();
    
    // Inicializar barra de progreso
    initializeScrollProgress();
    
    // Inicializar observadores de intersección
    initializeIntersectionObservers();

    // Función específica para asegurar que el marquee funcione
    ensureMarqueeWorks();

    // Función para forzar animaciones importantes
    forceImportantAnimations();
});

// Función para crear partículas
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(78, 205, 196, 0.6);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
            z-index: 1;
        `;
        
        hero.appendChild(particle);
    }
}

// Función para animar líneas de código
function animateCodeLines() {
    const codeLines = document.querySelectorAll('.code-line');
    
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Añadir estilos CSS dinámicamente para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInChar {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(10, 10, 10, 0.98);
        backdrop-filter: blur(15px);
        padding: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .particle {
        pointer-events: none;
    }
    
    .feature-character:hover .character-image {
        transform: scale(1.05) rotate(1deg);
    }
    
    .tech-item:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 10px 25px rgba(78, 205, 196, 0.2);
    }
    
    .download-btn:hover {
        transform: translateY(-5px) scale(1.02);
    }
    
    .btn:hover {
        transform: translateY(-2px) scale(1.02);
    }
`;

document.head.appendChild(style);

// Animación de carga de la página
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Efecto de scroll suave para elementos internos
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Lazy loading para imágenes
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, 100);
            
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Nuevas funciones para animaciones de scroll (compatibles con versión actual)
function initializeScrollAnimations() {
    // Efectos de scroll para el hero
    const hero = document.querySelector('.hero-scroll-effect');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            
            if (scrolled > 0 && scrolled < heroHeight) {
                const progress = scrolled / heroHeight;
                
                if (progress > 0.1) {
                    hero.classList.add('scrolling');
                } else {
                    hero.classList.remove('scrolling');
                }
                
                // Parallax suave
                const rate = scrolled * -0.3;
                heroContent.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

function initializeScrollIndicators() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollDots = document.querySelectorAll('.scroll-dot');
    const sections = ['inicio', 'personajes', 'tecnologia', 'descargar'];
    
    // Mostrar indicador después de la carga inicial
    setTimeout(() => {
        if (scrollIndicator) {
            scrollIndicator.classList.add('visible');
        }
    }, 2000);
    
    // Actualizar punto activo basado en la posición del scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section && scrollDots[index]) {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrolled >= sectionTop && scrolled < sectionBottom) {
                    // Remover clase activa de todos los puntos
                    scrollDots.forEach(dot => dot.classList.remove('active'));
                    // Añadir clase activa al punto actual
                    scrollDots[index].classList.add('active');
                }
            }
        });
    });
    
    // Click en puntos para navegar a secciones
    scrollDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const targetSection = document.getElementById(sections[index]);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    if (scrollProgress) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / maxScroll) * 100;
            
            scrollProgress.style.width = progress + '%';
        });
    }
}

function initializeIntersectionObservers() {
    // Observador para secciones con fade
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observador para animaciones escalonadas
    const staggerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observar secciones con fade
    const fadeSections = document.querySelectorAll('.section-fade');
    fadeSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Observar elementos con animación escalonada
    const staggerElements = document.querySelectorAll('.stagger-animation');
    staggerElements.forEach(element => {
        staggerObserver.observe(element);
    });
}

// Función para el indicador de scroll hacia abajo
document.addEventListener('DOMContentLoaded', function() {
    const scrollDownHint = document.querySelector('.scroll-down-hint');
    
    if (scrollDownHint) {
        scrollDownHint.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Mejorar efectos de hover existentes
document.addEventListener('DOMContentLoaded', function() {
    const hoverElements = document.querySelectorAll('.hover-lift');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(78, 205, 196, 0.2)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Función específica para asegurar que el marquee funcione
function ensureMarqueeWorks() {
    const marqueeTrack = document.querySelector('.tech-marquee-track');
    if (!marqueeTrack) return;
    
    // Función para reiniciar la animación del marquee
    function restartMarquee() {
        // Detener la animación actual
        marqueeTrack.style.animation = 'none';
        marqueeTrack.style.webkitAnimation = 'none';
        marqueeTrack.style.mozAnimation = 'none';
        marqueeTrack.style.oAnimation = 'none';
        
        // Forzar un reflow
        marqueeTrack.offsetHeight;
        
        // Reiniciar la animación
        marqueeTrack.style.animation = 'marquee 30s linear infinite';
        marqueeTrack.style.webkitAnimation = 'marquee 30s linear infinite';
        marqueeTrack.style.mozAnimation = 'marquee 30s linear infinite';
        marqueeTrack.style.oAnimation = 'marquee 30s linear infinite';
    }
    
    // Verificar si la animación está funcionando
    function checkMarqueeAnimation() {
        const computedStyle = window.getComputedStyle(marqueeTrack);
        const animationName = computedStyle.animationName || computedStyle.webkitAnimationName;
        
        if (animationName === 'none' || animationName === '') {
            console.log('Marquee animation stopped, restarting...');
            restartMarquee();
        }
    }
    
    // Reiniciar la animación cuando la sección entre en vista
    const techSection = document.querySelector('.technology-section');
    if (techSection) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(restartMarquee, 100);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(techSection);
    }
    
    // Asegurar que la animación funcione después de la carga
    setTimeout(restartMarquee, 500);
    
    // Verificar periódicamente si la animación está funcionando
    setInterval(checkMarqueeAnimation, 10000);
    
    // Asegurar que la animación funcione después de que la página esté completamente cargada
    window.addEventListener('load', function() {
        setTimeout(restartMarquee, 1000);
    });
}

// Función para forzar animaciones importantes
function forceImportantAnimations() {
    // Verificar si las preferencias de movimiento reducido están activadas
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Forzar animaciones importantes
        const importantElements = [
            '.title-main',
            '.nav-logo span',
            '.btn-login',
            '.btn-login i',
            '.download-section h2',
            '.highlight-badge',
            '.app-screenshot',
            '.tech-marquee-track',
            '.code-line'
        ];
        
        importantElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                // Forzar la animación
                element.style.animation = 'none';
                element.offsetHeight; // Trigger reflow
                
                // Restaurar animación específica
                if (selector === '.title-main' || selector === '.nav-logo span' || selector === '.btn-login' || selector === '.btn-login i' || selector === '.download-section h2') {
                    element.style.animation = 'gradientShift 3s ease-in-out infinite';
                } else if (selector === '.highlight-badge') {
                    element.style.animation = 'pulse 2s ease-in-out infinite';
                } else if (selector === '.app-screenshot') {
                    element.style.animation = 'float3D 4s ease-in-out infinite';
                } else if (selector === '.tech-marquee-track') {
                    element.style.animation = 'marquee 30s linear infinite';
                } else if (selector === '.code-line') {
                    element.style.animation = 'fadeInUp 0.5s ease forwards';
                }
            });
        });
    }
}

// Inicializar animaciones forzadas
document.addEventListener('DOMContentLoaded', function() {
    forceImportantAnimations();
    
    // También forzar después de que la página esté completamente cargada
    window.addEventListener('load', function() {
        setTimeout(forceImportantAnimations, 1000);
    });
}); 