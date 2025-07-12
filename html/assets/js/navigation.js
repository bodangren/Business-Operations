// ===================================
// Navigation and UI Functionality
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProgressBar();
    initializeMobileMenu();
    initializeDropdowns();
});

// ===================================
// Mobile Navigation Toggle
// ===================================

function initializeMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
        
        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// ===================================
// Dropdown Menu Functionality
// ===================================

function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (toggle && menu) {
            // Touch/mobile support
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                }
            });
        }
    });
}

// ===================================
// Progress Bar
// ===================================

function initializeProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    
    if (progressBar) {
        function updateProgressBar() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            progressBar.style.width = scrolled + '%';
        }
        
        window.addEventListener('scroll', updateProgressBar);
    }
}

// ===================================
// Navigation Utilities
// ===================================

function initializeNavigation() {
    // Highlight current page in navigation
    highlightCurrentPage();
    
    // Initialize smooth scrolling for anchor links
    initializeSmoothScrolling();
    
    // Initialize back to top functionality
    initializeBackToTop();
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a, .footer-links a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('current');
        }
    });
}

function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

function initializeBackToTop() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Utility Functions
// ===================================

// Get user preferences from localStorage
function getUserPreferences() {
    const preferences = localStorage.getItem('textbook-preferences');
    return preferences ? JSON.parse(preferences) : {
        darkMode: false,
        fontSize: 'medium',
        sidebarOpen: true
    };
}

// Save user preferences to localStorage
function saveUserPreferences(preferences) {
    localStorage.setItem('textbook-preferences', JSON.stringify(preferences));
}

// Update page title with section info
function updatePageTitle(sectionTitle, unitTitle) {
    const baseTitle = 'Math for Business Operations';
    let newTitle = baseTitle;
    
    if (sectionTitle && unitTitle) {
        newTitle = `${sectionTitle} - ${unitTitle} | ${baseTitle}`;
    } else if (sectionTitle) {
        newTitle = `${sectionTitle} | ${baseTitle}`;
    }
    
    document.title = newTitle;
}

// Show notification to user
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after duration
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

// ===================================
// Keyboard Navigation
// ===================================

document.addEventListener('keydown', function(e) {
    // Alt + Left Arrow: Previous page
    if (e.altKey && e.key === 'ArrowLeft') {
        const prevLink = document.querySelector('.page-nav-item.prev');
        if (prevLink && !prevLink.classList.contains('disabled')) {
            window.location.href = prevLink.href;
        }
    }
    
    // Alt + Right Arrow: Next page
    if (e.altKey && e.key === 'ArrowRight') {
        const nextLink = document.querySelector('.page-nav-item.next');
        if (nextLink && !nextLink.classList.contains('disabled')) {
            window.location.href = nextLink.href;
        }
    }
    
    // Ctrl/Cmd + K: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('quick-search');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape: Close mobile menu or modals
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// ===================================
// Export functions for use in other modules
// ===================================

window.TextbookNavigation = {
    updatePageTitle,
    showNotification,
    getUserPreferences,
    saveUserPreferences
};