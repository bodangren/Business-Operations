// ===================================
// Dark/Light Mode Toggle System
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeThemeSystem();
    initializeFontSizeControls();
});

// ===================================
// Theme System Initialization
// ===================================

function initializeThemeSystem() {
    createThemeToggle();
    loadUserThemePreference();
    detectSystemThemeChange();
}

function createThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.innerHTML = `
        <span class="theme-icon theme-icon-light">☀️</span>
        <span class="theme-icon theme-icon-dark">🌙</span>
    `;
    
    // Add CSS styles
    const themeToggleStyles = `
        .theme-toggle {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            background: var(--toggle-bg, #fff);
            border: 2px solid var(--toggle-border, #e0e0e0);
            border-radius: 25px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        }
        
        .theme-toggle:hover {
            transform: translateY(-50%) scale(1.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .theme-toggle:focus {
            outline: 2px solid #3498db;
            outline-offset: 2px;
        }
        
        .theme-icon {
            transition: all 0.3s ease;
            position: absolute;
        }
        
        .theme-icon-dark {
            opacity: 0;
            transform: rotate(180deg);
        }
        
        [data-theme="dark"] .theme-icon-light {
            opacity: 0;
            transform: rotate(-180deg);
        }
        
        [data-theme="dark"] .theme-icon-dark {
            opacity: 1;
            transform: rotate(0deg);
        }
        
        [data-theme="dark"] .theme-toggle {
            --toggle-bg: #2d3748;
            --toggle-border: #4a5568;
        }
        
        @media (max-width: 768px) {
            .theme-toggle {
                top: auto;
                bottom: 80px;
                right: 15px;
                width: 45px;
                height: 45px;
                font-size: 1.1rem;
            }
        }
    `;
    
    // Inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = themeToggleStyles;
    document.head.appendChild(styleSheet);
    
    // Add to page
    document.body.appendChild(themeToggle);
    
    // Add click handler
    themeToggle.addEventListener('click', toggleTheme);
}

function createAccessibilityControls() {
    // Create accessibility control panel
    const accessibilityPanel = document.createElement('div');
    accessibilityPanel.id = 'accessibility-controls';
    accessibilityPanel.className = 'accessibility-controls';
    accessibilityPanel.innerHTML = `
        <button class="accessibility-toggle" aria-label="Accessibility options">
            ♿
        </button>
        <div class="accessibility-menu">
            <h3>Accessibility Options</h3>
            <div class="font-size-controls">
                <label>Font Size:</label>
                <button data-size="small">A</button>
                <button data-size="medium" class="active">A</button>
                <button data-size="large">A</button>
                <button data-size="extra-large">A</button>
            </div>
            <div class="contrast-controls">
                <label>
                    <input type="checkbox" id="high-contrast"> High Contrast
                </label>
            </div>
            <div class="motion-controls">
                <label>
                    <input type="checkbox" id="reduce-motion"> Reduce Motion
                </label>
            </div>
        </div>
    `;
    
    // Add CSS for accessibility controls
    const accessibilityStyles = `
        .accessibility-controls {
            position: fixed;
            top: 50%;
            right: 80px;
            transform: translateY(-50%);
            z-index: 1001;
        }
        
        .accessibility-toggle {
            background: #fff;
            border: 2px solid #e0e0e0;
            border-radius: 25px;
            width: 45px;
            height: 45px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .accessibility-toggle:hover {
            transform: scale(1.1);
        }
        
        .accessibility-menu {
            position: absolute;
            right: 0;
            top: 100%;
            margin-top: 10px;
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            min-width: 200px;
            display: none;
        }
        
        .accessibility-menu.open {
            display: block;
        }
        
        .accessibility-menu h3 {
            margin: 0 0 1rem 0;
            font-size: 0.9rem;
            color: #2c3e50;
        }
        
        .font-size-controls {
            margin-bottom: 1rem;
        }
        
        .font-size-controls label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.85rem;
            color: #666;
        }
        
        .font-size-controls button {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 0.25rem 0.5rem;
            margin-right: 0.25rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.2s ease;
        }
        
        .font-size-controls button:hover,
        .font-size-controls button.active {
            background: #3498db;
            color: white;
            border-color: #3498db;
        }
        
        .font-size-controls button[data-size="large"] {
            font-size: 0.9rem;
        }
        
        .font-size-controls button[data-size="extra-large"] {
            font-size: 1rem;
        }
        
        .contrast-controls,
        .motion-controls {
            margin-bottom: 0.5rem;
        }
        
        .contrast-controls label,
        .motion-controls label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            color: #666;
            cursor: pointer;
        }
        
        @media (max-width: 768px) {
            .accessibility-controls {
                bottom: 140px;
                right: 15px;
                top: auto;
                transform: none;
            }
            
            .accessibility-menu {
                right: auto;
                left: 0;
                bottom: 100%;
                top: auto;
                margin-bottom: 10px;
                margin-top: 0;
            }
        }
    `;
    
    const accessibilityStyleSheet = document.createElement('style');
    accessibilityStyleSheet.textContent = accessibilityStyles;
    document.head.appendChild(accessibilityStyleSheet);
    
    document.body.appendChild(accessibilityPanel);
    
    // Add event listeners
    const toggle = accessibilityPanel.querySelector('.accessibility-toggle');
    const menu = accessibilityPanel.querySelector('.accessibility-menu');
    
    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!accessibilityPanel.contains(e.target)) {
            menu.classList.remove('open');
        }
    });
}

// ===================================
// Theme Management
// ===================================

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
    saveThemePreference(newTheme);
    
    // Announce theme change for screen readers
    announceThemeChange(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme-color meta tag for mobile browsers
    updateThemeColorMeta(theme);
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themechange', { 
        detail: { theme } 
    }));
}

function saveThemePreference(theme) {
    localStorage.setItem('preferred-theme', theme);
}

function loadUserThemePreference() {
    const savedTheme = localStorage.getItem('preferred-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
}

function detectSystemThemeChange() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', function(e) {
        // Only auto-switch if user hasn't set a preference
        if (!localStorage.getItem('preferred-theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function updateThemeColorMeta(theme) {
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    
    if (!themeColorMeta) {
        themeColorMeta = document.createElement('meta');
        themeColorMeta.name = 'theme-color';
        document.head.appendChild(themeColorMeta);
    }
    
    themeColorMeta.content = theme === 'dark' ? '#2d3748' : '#ffffff';
}

// ===================================
// Font Size Controls
// ===================================

function initializeFontSizeControls() {
    createAccessibilityControls();
    loadFontSizePreference();
    
    // Add event listeners for font size buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.font-size-controls button')) {
            changeFontSize(e.target.dataset.size);
        }
    });
    
    // Add event listeners for accessibility checkboxes
    document.addEventListener('change', function(e) {
        if (e.target.id === 'high-contrast') {
            toggleHighContrast(e.target.checked);
        } else if (e.target.id === 'reduce-motion') {
            toggleReducedMotion(e.target.checked);
        }
    });
}

function changeFontSize(size) {
    // Remove existing font size classes
    document.body.classList.remove('font-size-small', 'font-size-large', 'font-size-extra-large');
    
    // Add new font size class
    if (size !== 'medium') {
        document.body.classList.add(`font-size-${size}`);
    }
    
    // Update active button
    document.querySelectorAll('.font-size-controls button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-size="${size}"]`).classList.add('active');
    
    // Save preference
    localStorage.setItem('font-size-preference', size);
    
    // Announce change for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Font size changed to ${size}`;
    document.body.appendChild(announcement);
    
    setTimeout(() => document.body.removeChild(announcement), 1000);
}

function loadFontSizePreference() {
    const savedSize = localStorage.getItem('font-size-preference') || 'medium';
    changeFontSize(savedSize);
}

function toggleHighContrast(enabled) {
    document.body.classList.toggle('high-contrast', enabled);
    localStorage.setItem('high-contrast-preference', enabled);
}

function toggleReducedMotion(enabled) {
    document.body.classList.toggle('reduce-motion', enabled);
    localStorage.setItem('reduce-motion-preference', enabled);
    
    if (enabled) {
        const style = document.createElement('style');
        style.id = 'reduced-motion-override';
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        `;
        document.head.appendChild(style);
    } else {
        const existingStyle = document.getElementById('reduced-motion-override');
        if (existingStyle) {
            existingStyle.remove();
        }
    }
}

// ===================================
// Accessibility Announcements
// ===================================

function announceThemeChange(theme) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Switched to ${theme} mode`;
    
    document.body.appendChild(announcement);
    
    // Clean up announcement after screen reader has had time to read it
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ===================================
// CSS Custom Properties for Themes
// ===================================

function injectThemeStyles() {
    const themeStyles = `
        :root {
            --bg-color: #ffffff;
            --text-color: #2c3e50;
            --text-muted: #666666;
            --border-color: #e0e0e0;
            --card-bg: #ffffff;
            --card-shadow: rgba(0, 0, 0, 0.1);
            --link-color: #3498db;
            --link-hover: #2980b9;
        }
        
        [data-theme="dark"] {
            --bg-color: #1a202c;
            --text-color: #e2e8f0;
            --text-muted: #a0aec0;
            --border-color: #4a5568;
            --card-bg: #2d3748;
            --card-shadow: rgba(0, 0, 0, 0.3);
            --link-color: #63b3ed;
            --link-hover: #90cdf4;
        }
        
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .card,
        .callout,
        .excel-container {
            background-color: var(--card-bg);
            box-shadow: 0 2px 4px var(--card-shadow);
        }
        
        a {
            color: var(--link-color);
        }
        
        a:hover {
            color: var(--link-hover);
        }
        
        .high-contrast {
            filter: contrast(150%);
        }
        
        .high-contrast a {
            text-decoration: underline;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .reduce-motion *,
            .reduce-motion *::before,
            .reduce-motion *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = themeStyles;
    document.head.appendChild(styleSheet);
}

// ===================================
// Initialize on Load
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    injectThemeStyles();
    
    // Load accessibility preferences
    const highContrastPref = localStorage.getItem('high-contrast-preference') === 'true';
    const reducedMotionPref = localStorage.getItem('reduce-motion-preference') === 'true';
    
    if (highContrastPref) {
        toggleHighContrast(true);
        document.getElementById('high-contrast').checked = true;
    }
    
    if (reducedMotionPref) {
        toggleReducedMotion(true);
        document.getElementById('reduce-motion').checked = true;
    }
});

// ===================================
// Export Functions
// ===================================

window.ThemeSystem = {
    setTheme,
    toggleTheme,
    changeFontSize,
    toggleHighContrast,
    toggleReducedMotion
};