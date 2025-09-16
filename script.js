const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}
// Project Cards Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Gradient Project Cards
    const projectCards = document.querySelectorAll('.project-card-gradient');
    
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const projectUrls = [
                'https://github.com/hariprasath/driver-drowsiness-detection',
                'https://github.com/hariprasath/customer-segmentation-kmeans',
                'https://github.com/hariprasath/fake-profile-detection'
            ];
            
            if (projectUrls[index]) {
                window.open(projectUrls[index], '_blank');
            }
        });
        
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Dashboard Cards Click Handlers
    // Enhanced Dashboard Cards Click Handlers - ADD THIS
const dashboardCards = document.querySelectorAll('.dashboard-card');
const projectUrls = {
    'adidas-sales': 'https://github.com/hariprasathmca/Powerbi-Projects-',
    'amazon-analysis': 'https://github.com/hariprasathmca/Powerbi-Projects-',
    'superstore-analysis': 'https://github.com/hariprasathmca/Powerbi-Projects-'
};

dashboardCards.forEach(card => {
    const projectType = card.getAttribute('data-project');
    
    card.addEventListener('click', function() {
        const url = projectUrls[projectType] || 'https://github.com/hariprasathmca/Powerbi-Projects-';
        window.open(url, '_blank');
    });
    
    // Enhanced hover effects
    card.addEventListener('mouseenter', function() {
        const preview = this.querySelector('.dashboard-preview');
        const overlay = this.querySelector('.dashboard-overlay');
        
        if (preview) {
            preview.style.transform = 'scale(1.02)';
        }
        
        // Animate chart elements
        const bars = this.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transform = 'scaleY(1.1)';
            }, index * 100);
        });
    });
    
    card.addEventListener('mouseleave', function() {
        const preview = this.querySelector('.dashboard-preview');
        
        if (preview) {
            preview.style.transform = 'scale(1)';
        }
        
        // Reset chart animations
        const bars = this.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'scaleY(1)';
        });
    });
});

// Animate dashboard cards on scroll
const dashboardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate internal elements
                animateDashboardElements(entry.target);
            }, index * 200);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply scroll animations to dashboard cards
dashboardCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease';
    dashboardObserver.observe(card);
});

// Animate statistics numbers
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const finalValue = stat.textContent;
                const numericValue = parseInt(finalValue);
                
                if (!isNaN(numericValue)) {
                    animateStatNumber(stat, 0, numericValue, 1500, finalValue.includes('+') ? '+' : '');
                }
            });
            
            const metricValues = entry.target.querySelectorAll('.metric-value');
            metricValues.forEach(metric => {
                metric.style.animation = 'pulse 2s ease-in-out infinite';
            });
        }
    });
}, { threshold: 0.3 });

dashboardCards.forEach(card => {
    statObserver.observe(card);
});

// Add floating animation to dashboard previews
dashboardCards.forEach((card, index) => {
    const preview = card.querySelector('.dashboard-preview');
    if (preview) {
        preview.style.animation = `float 4s ease-in-out infinite`;
        preview.style.animationDelay = `${index * 0.5}s`;
    }
});
    
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);
    
    // Apply animation to all project cards
    const allCards = document.querySelectorAll('.project-card-gradient, .dashboard-card');
    allCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
});

// Add ripple effect on click
function createRipple(event) {
    const card = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    card.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple CSS
const rippleCSS = `
.project-card-gradient, .dashboard-card {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Inject ripple CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Add ripple effect to cards
document.querySelectorAll('.project-card-gradient, .dashboard-card').forEach(card => {
    card.addEventListener('click', createRipple);
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add scroll animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Apply animations to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .cert-card, .project-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        animateOnScroll.observe(el);
    });

});

