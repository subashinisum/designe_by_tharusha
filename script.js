// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile-menu');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const skillsRain1 = document.querySelector('.skills-rain');
const riverFlow2= document.querySelector('.river-flow');
const shootingStarsContainer = document.querySelector('.shooting-stars');
const starsBackground = document.querySelector('.stars-background');
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const cursorTrail = document.querySelector('.cursor-trail');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!mobileMenu.contains(e.target) && !navToggle.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
    }
});

// Handle mobile menu link clicks
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        if (window.innerWidth <= 768) {
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
        
        // Add small delay before scrolling to section
        setTimeout(() => {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    });
});

// Add scroll event listener for navbar background
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = '';
    }
});

// Section Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        
        // Update active states
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Close mobile navigation
        if (window.innerWidth <= 768) {
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Skills Animation
const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Python', 'MongoDB', 'Git', 'Express', 'Next.js', 'TailwindCSS',
    'PostgreSQL', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'Redux'
];

let isSkillsAnimationStarted = false;
const skillsRain = document.querySelector('.skills-rain'); // Added missing reference
const riverFlow = document.querySelector('.river-flow'); // Added missing reference

function createSkillDrop() {
    if (!skillsRain) return; // Safety check
    
    const skill = skills[Math.floor(Math.random() * skills.length)];
    const drop = document.createElement('div');
    drop.className = 'skill-drop';
    drop.textContent = skill;
    
    // Random position along the width
    const left = Math.random() * (skillsRain.offsetWidth - 100);
    drop.style.left = `${left}px`;
    
    skillsRain.appendChild(drop);
    
    // Create floating skill in river after drop animation ends
    drop.addEventListener('animationend', () => {
        createFloatingSkill(skill);
        drop.remove();
    });
}

function createFloatingSkill(skill) {
    if (!riverFlow) return; // Safety check
    
    const floating = document.createElement('div');
    floating.className = 'skill-floating';
    floating.textContent = skill;
    
    // Random vertical position in the river
    const top = Math.random() * 60 + 20; // Between 20% and 80% of river height
    floating.style.top = `${top}%`;
    
    riverFlow.appendChild(floating);
    
    // Remove after animation completes
    floating.addEventListener('animationend', () => floating.remove());
}

// Start skills animation when section is in view
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isSkillsAnimationStarted) {
            console.log('Starting skills animation');
            isSkillsAnimationStarted = true;
            startSkillsAnimation();
        }
    });
}, { threshold: 0.2 });

const skillsSection = document.getElementById('skills-river');
if (skillsSection) {
    console.log('Observing skills section');
    skillsObserver.observe(skillsSection);
}

function startSkillsAnimation() {
    console.log('Animation started');
    
    // Create initial river skills
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const skill = skills[Math.floor(Math.random() * skills.length)];
            createFloatingSkill(skill);
        }, i * 500);
    }
    
    // Create drops at random intervals
    const dropInterval = setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance each second
            createSkillDrop();
        }
    }, 1000);
    
    // Store interval for cleanup if needed
    return dropInterval;
}

// Initialize skills animation if already in view
if (skillsSection && window.innerHeight > skillsSection.getBoundingClientRect().top) {
    console.log('Skills section already in view');
    const intervalId = startSkillsAnimation();
    isSkillsAnimationStarted = true;
}

// Duplicate skill stream for infinite scroll
function duplicateSkillStream() {
    if (!riverFlow) return;
    const clone = riverFlow.cloneNode(true);
    riverFlow.parentElement.appendChild(clone);
}

// Space Background Animation
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight / 2); // Start in top half
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;
    
    // Random animation duration and delay
    const duration = 1 + Math.random() * 2;
    const delay = Math.random() * 15;
    
    star.style.animation = `shooting-star ${duration}s linear ${delay}s`;
    shootingStarsContainer.appendChild(star);
    
    // Remove star after animation
    setTimeout(() => {
        star.remove();
    }, (duration + delay) * 1000);
}

// Create shooting stars periodically
function startShootingStars() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance to create a star
            createShootingStar();
        }
    }, 1000);
}

// Start space animations
startShootingStars();

// Stars Background Animation
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.opacity = Math.random();
    starsBackground.appendChild(star);

    star.addEventListener('animationend', () => {
        star.remove();
        createStar();
    });
}

// Create initial stars
for (let i = 0; i < 50; i++) {
    setTimeout(() => {
        createStar();
    }, i * 100);
}

// Mouse Effects
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    // Move cursor dot and outline
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;
    cursorOutline.style.left = `${x}px`;
    cursorOutline.style.top = `${y}px`;
    
    // Create trail effect
    createTrailDot(x, y);
});

// Create trail dots
function createTrailDot(x, y) {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    cursorTrail.appendChild(dot);
    
    // Remove trail dot after animation
    setTimeout(() => dot.remove(), 1000);
}

// Magnetic effect for interactive elements
const magneticElements = document.querySelectorAll('.card-icon, .btn, .nav-link');

magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.classList.add('magnetic-active');
        element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.classList.remove('magnetic-active');
        element.style.transform = '';
    });
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

// Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const text = typewriter.textContent;
typewriter.textContent = '';
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        typewriter.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typewriter effect
setTimeout(typeText, 1000);

// Add CSS for star animation
const style = document.createElement('style');
style.textContent = `
    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        animation: twinkle linear infinite;
    }

    @keyframes twinkle {
        0% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(0); opacity: 0; }
    }
    
    .shooting-star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        animation: shooting-star linear;
    }

    @keyframes shooting-star {
        0% { transform: translateY(0); }
        100% { transform: translateY(100vh); }
    }
`;
document.head.appendChild(style);

//skills designe 

document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        'HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Angular',
        'Node.js', 'Express', 'Python', 'Django', 'Flask', 'PHP',
        'Laravel', 'MySQL', 'MongoDB', 'PostgreSQL', 'Git', 'Docker',
        'AWS', 'Azure', 'Firebase', 'TypeScript', 'SASS', 'LESS',
        'Webpack', 'Babel', 'GraphQL', 'REST API', 'Jest', 'Mocha',
        'Cypress', 'TensorFlow', 'Machine Learning', 'Data Science',
        'UI/UX Design', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator'
    ];
    
    // Initialize river animation for desktop/tablet
    if (window.innerWidth > 768) {
        initRiverAnimation();
    } else {
        initMobileSkills();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelector('.skills').style.display = 'block';
            document.querySelector('.mobile-skills').style.display = 'none';
            initRiverAnimation();
        } else {
            document.querySelector('.skills').style.display = 'none';
            document.querySelector('.mobile-skills').style.display = 'block';
            initMobileSkills();
        }
    });
    
    function initRiverAnimation() {
        const skillsContainer = document.querySelector('.skills');
        // Clear existing items
        skillsContainer.querySelectorAll('.skill-item').forEach(item => item.remove());
        
        // Create skill items
        skills.forEach((skill, index) => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            
            // Set yellow color
            skillItem.style.color = '#FFFF00';
            skillItem.style.textShadow = '0 0 5px #FFFF00';
            
            // Random position along the river (Y-axis centered with some variation)
            const yPos = 50 + (Math.random() * 20 - 10); // 40-60% of container height
            
            // Initial position (off-screen to the left)
            skillItem.style.left = '-100px';
            skillItem.style.top = `${yPos}%`;
            
            // Slower speed (15-25 seconds to cross the screen)
            const duration = 15 + Math.random() * 10;
            skillItem.style.transition = `left ${duration}s linear`;
            
            skillsContainer.appendChild(skillItem);
            
            // Show the item after a random delay (0-2s)
            setTimeout(() => {
                skillItem.classList.add('show');
                
                // Start animation after show transition completes
                setTimeout(() => {
                    skillItem.style.left = 'calc(100% + 100px)';
                }, 300);
                
                // Remove item after animation completes and create a new one
                skillItem.addEventListener('transitionend', function(e) {
                    if (e.propertyName === 'left') {
                        skillsContainer.removeChild(skillItem);
                        addNewSkillItem();
                    }
                });
            }, Math.random() * 2000);
        });
        
        function addNewSkillItem() {
            const skill = skills[Math.floor(Math.random() * skills.length)];
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            
            // Set yellow color
            skillItem.style.color = '#FFFF00';
            skillItem.style.textShadow = '0 0 5px #FFFF00';
            
            const yPos = 50 + (Math.random() * 20 - 10);
            skillItem.style.left = '-100px';
            skillItem.style.top = `${yPos}%`;
            
            // Slower speed (15-25 seconds)
            const duration = 15 + Math.random() * 10;
            skillItem.style.transition = `left ${duration}s linear`;
            
            skillsContainer.appendChild(skillItem);
            
            setTimeout(() => {
                skillItem.classList.add('show');
                
                setTimeout(() => {
                    skillItem.style.left = 'calc(100% + 100px)';
                }, 300);
                
                skillItem.addEventListener('transitionend', function(e) {
                    if (e.propertyName === 'left') {
                        skillsContainer.removeChild(skillItem);
                        addNewSkillItem();
                    }
                });
            }, 2000 + Math.random() * 3000); // Longer delay between new items (2-5 seconds)
        }
    }
    
    function initMobileSkills() {
        const mobileContainer = document.querySelector('.mobile-skills');
        mobileContainer.innerHTML = '';
        
        // Show skills as a simple grid on mobile
        skills.forEach(skill => {
            const skillItem = document.createElement('span');
            skillItem.className = 'mobile-skill';
            skillItem.textContent = skill;
            skillItem.style.color = '#FFFF00'; // Yellow color
            skillItem.style.textShadow = '0 0 3px #FFFF00';
            mobileContainer.appendChild(skillItem);
        });
    }
});
//hearo
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentIndex = 0;
    let autoSlideInterval;
    let isAnimating = false;
    const slideCount = slides.length;
    const animationDuration = 1200; // Match CSS transition duration
    
    // Initialize slider
    function initSlider() {
        updateSliderPosition();
        startAutoSlide();
        
        // Set up event listeners
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                if (isAnimating) return;
                const index = parseInt(this.getAttribute('data-index'));
                goToSlide(index);
            });
        });
        
        arrowLeft.addEventListener('click', () => {
            if (isAnimating) return;
            prevSlide();
        });
        
        arrowRight.addEventListener('click', () => {
            if (isAnimating) return;
            nextSlide();
        });
        
        // Pause autoslide on hover/touch
        slider.addEventListener('mouseenter', pauseAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
        slider.addEventListener('touchstart', pauseAutoSlide);
        slider.addEventListener('touchend', startAutoSlide);
    }
    
    // Update slider position
    function updateSliderPosition() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === (currentIndex + 1) % slideCount) {
                slide.classList.add('next');
            } else if (index === (currentIndex - 1 + slideCount) % slideCount) {
                slide.classList.add('prev');
            }
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index === currentIndex) return;
        
        isAnimating = true;
        currentIndex = index;
        updateSliderPosition();
        
        setTimeout(() => {
            isAnimating = false;
        }, animationDuration);
        
        resetAutoSlide();
    }
    
    // Next slide
    function nextSlide() {
        isAnimating = true;
        currentIndex = (currentIndex + 1) % slideCount;
        updateSliderPosition();
        
        setTimeout(() => {
            isAnimating = false;
        }, animationDuration);
        
        resetAutoSlide();
    }
    
    // Previous slide
    function prevSlide() {
        isAnimating = true;
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSliderPosition();
        
        setTimeout(() => {
            isAnimating = false;
        }, animationDuration);
        
        resetAutoSlide();
    }
    
    // Auto slide functionality
    function startAutoSlide() {
        if (!autoSlideInterval && slideCount > 1) {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
    }
    
    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
    
    function resetAutoSlide() {
        pauseAutoSlide();
        startAutoSlide();
    }
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    slider.addEventListener('touchend', (e) => {
        if (isAnimating) return;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const difference = touchEndX - touchStartX;
        
        if (difference < -swipeThreshold) {
            nextSlide();
        } else if (difference > swipeThreshold) {
            prevSlide();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isAnimating) return;
        
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Initialize everything
    initSlider();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Adjust slider height if needed
        const hero = document.querySelector('.hero');
        hero.style.height = window.innerHeight + 'px';
    });
});
//incept
// Disable Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable Keyboard Shortcuts for DevTools
document.addEventListener("keydown", (event) => {
    if (
        event.ctrlKey && 
        (event.key === "u" || event.key === "U" || event.key === "i" || event.key === "I" || event.key === "j" || event.key === "J") ||
        event.key === "F12"
    ) {
        event.preventDefault();
    }
});

// Detect DevTools Open and Redirect or Close
setInterval(() => {
    if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        document.body.innerHTML = "<h1>Access Denied</h1>";
    }
}, 1000);

