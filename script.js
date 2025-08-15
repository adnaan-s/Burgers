// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initMobileNavigation();
    initScrollAnimations();
    initSmoothScrolling();
    initGalleryCarousel();
    initHoverEffects();
    initLazyLoading();
    initMobileCTA();
});

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Enhanced Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add spectacular staggered animation for menu items
                if (entry.target.classList.contains('menu-grid')) {
                    const menuItems = entry.target.querySelectorAll('.menu-item');
                    menuItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                            item.style.animationDelay = `${index * 0.15}s`;
                            item.style.animation = 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                        }, index * 100);
                    });
                }
                
                // Enhanced features animation
                if (entry.target.classList.contains('about-features')) {
                    const features = entry.target.querySelectorAll('.feature');
                    features.forEach((feature, index) => {
                        setTimeout(() => {
                            feature.style.opacity = '1';
                            feature.style.transform = 'translateX(0) scale(1)';
                            feature.style.animation = 'bounceIn 0.6s ease-out';
                        }, index * 150);
                    });
                }

                // Gallery items animation
                if (entry.target.classList.contains('gallery-carousel')) {
                    const galleryItems = entry.target.querySelectorAll('.gallery-item');
                    galleryItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1) rotateY(0deg)';
                        }, index * 80);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.about, .menu, .gallery, .contact, .menu-grid, .about-features, .gallery-carousel');
    animateElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    // Initial setup for menu items with enhanced styling
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px) scale(0.9)';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Enhanced setup for features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-30px) scale(0.8)';
        feature.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Gallery items initial setup
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8) rotateY(15deg)';
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Add bounceIn animation keyframes
    const bounceInStyle = document.createElement('style');
    bounceInStyle.textContent = `
        @keyframes bounceIn {
            0% { opacity: 0; transform: translateX(-30px) scale(0.3); }
            50% { opacity: 1; transform: translateX(10px) scale(1.05); }
            70% { transform: translateX(-5px) scale(0.98); }
            100% { opacity: 1; transform: translateX(0) scale(1); }
        }
    `;
    document.head.appendChild(bounceInStyle);
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Gallery Carousel Enhancement
function initGalleryCarousel() {
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryTrack && galleryItems.length > 0) {
        // Clone items for infinite scroll effect
        galleryItems.forEach(item => {
            const clone = item.cloneNode(true);
            galleryTrack.appendChild(clone);
        });
        
        // Pause animation on hover
        galleryTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        galleryTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
        
        // Add click to expand functionality
        const allGalleryItems = document.querySelectorAll('.gallery-item img');
        allGalleryItems.forEach(img => {
            img.addEventListener('click', function() {
                createImageModal(this.src, this.alt);
            });
        });
    }
}

// Image Modal for Gallery
function createImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-backdrop">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img src="${src}" alt="${alt}">
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.9);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    const modalImg = modal.querySelector('img');
    modalImg.style.cssText = `
        width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: -40px;
        background: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close handlers
    function closeModal() {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
}

// Enhanced Hover Effects with Particle Magic
function initHoverEffects() {
    // Spectacular menu item hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02) rotateX(5deg)';
            createParticleEffect(this);
            
            // Add glow effect
            this.style.boxShadow = '0 25px 80px rgba(244, 180, 0, 0.3), 0 0 30px rgba(229, 57, 53, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });

    // Create particle effect for menu items
    function createParticleEffect(element) {
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: ${i % 2 === 0 ? '#F4B400' : '#E53935'};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 1000;
                `;
                
                const rect = element.getBoundingClientRect();
                particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                
                document.body.appendChild(particle);
                
                // Animate particle
                particle.animate([
                    { transform: 'translateY(0) scale(1)', opacity: 1 },
                    { transform: 'translateY(-100px) scale(0)', opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }).onfinish = () => particle.remove();
            }, i * 100);
        }
    }
    
    // Enhanced CTA button effects with multiple ripples
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create multiple ripples for more impact
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height) * (1 + i * 0.5);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.cssText = `
                        position: absolute;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, ${0.4 - i * 0.1});
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        transform: scale(0);
                        animation: ripple ${0.8 + i * 0.2}s cubic-bezier(0.4, 0, 0.2, 1);
                        pointer-events: none;
                    `;
                    
                    this.style.position = 'relative';
                    this.style.overflow = 'hidden';
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        if (ripple.parentNode) ripple.remove();
                    }, 1000 + i * 200);
                }, i * 150);
            }
        });

        // Add hover glow effect to buttons
        button.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) drop-shadow(0 0 20px rgba(244, 180, 0, 0.5))';
        });

        button.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });

    // Logo hover effect with rotation
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.filter = 'drop-shadow(0 8px 16px rgba(244, 180, 0, 0.3))';
        });

        logoImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))';
        });
    }

    // Enhanced feature hover effects
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05) rotateY(5deg)';
            // Add random color pulse
            const colors = ['#F4B400', '#E53935', '#4CAF50', '#2196F3'];
            this.style.background = `linear-gradient(135deg, ${colors[index % colors.length]}, ${colors[(index + 1) % colors.length]})`;
        });

        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            this.style.background = 'var(--light-gray)';
        });
    });
    
    // Add enhanced ripple and glow animations
    const enhancedStyle = document.createElement('style');
    enhancedStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        @keyframes glow {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.2) drop-shadow(0 0 20px rgba(244, 180, 0, 0.6)); }
        }

        .menu-item:hover .menu-badge {
            animation: glow 1.5s ease-in-out infinite;
        }

        .floating-particle {
            animation: floatUp 2s ease-out forwards;
        }

        @keyframes floatUp {
            0% { 
                transform: translateY(0) scale(1) rotate(0deg); 
                opacity: 1; 
            }
            100% { 
                transform: translateY(-150px) scale(0) rotate(360deg); 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(enhancedStyle);
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = function() {
                    this.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Mobile CTA Enhancement
function initMobileCTA() {
    const mobileCTA = document.querySelector('.mobile-cta');
    
    if (mobileCTA) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Hide/show mobile CTA based on scroll direction
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                mobileCTA.style.transform = 'translateY(100px)';
            } else {
                // Scrolling up
                mobileCTA.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
        
        // Add pulse animation when in view
        const pulseInterval = setInterval(() => {
            const ctaBtn = mobileCTA.querySelector('.mobile-cta-btn');
            if (ctaBtn) {
                ctaBtn.style.animation = 'pulse 0.6s ease-in-out';
                setTimeout(() => {
                    ctaBtn.style.animation = '';
                }, 600);
            }
        }, 5000);
        
        // Add pulse animation CSS
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(pulseStyle);
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Stagger hero elements animation
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', debounce(function() {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-img');
    
    if (heroImg && scrolled < window.innerHeight) {
        heroImg.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 + scrolled * 0.0002})`;
    }
}, 10));

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();