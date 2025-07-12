// ===================================
// Progress Tracking System
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeProgressTracking();
    updateProgressDisplay();
    trackPageVisit();
});

let progressData = {};

// ===================================
// Progress Data Management
// ===================================

function initializeProgressTracking() {
    // Load existing progress data
    progressData = JSON.parse(localStorage.getItem('textbook-progress') || '{}');
    
    // Initialize structure if empty
    if (Object.keys(progressData).length === 0) {
        initializeProgressStructure();
    }
    
    // Set up progress tracking events
    setupProgressEvents();
    
    // Update progress display
    updateProgressDisplay();
}

function initializeProgressStructure() {
    progressData = {
        units: {
            'unit01-smart-ledger': {
                name: 'Smart Ledger Launch',
                sections: {
                    'intro': { name: 'Introduction', completed: false, timeSpent: 0, lastVisited: null },
                    'concepts': { name: 'Core Concepts', completed: false, timeSpent: 0, lastVisited: null },
                    'excel-model': { name: 'Excel Model Building', completed: false, timeSpent: 0, lastVisited: null },
                    'examples': { name: 'Worked Examples', completed: false, timeSpent: 0, lastVisited: null },
                    'exercises': { name: 'Interactive Exercises', completed: false, timeSpent: 0, lastVisited: null },
                    'summary': { name: 'Summary & Assessment', completed: false, timeSpent: 0, lastVisited: null }
                },
                overallProgress: 0,
                startDate: null,
                completedDate: null
            },
            'unit02-month-end-wizard': {
                name: 'Month-End Wizard',
                sections: {
                    'intro': { name: 'Introduction', completed: false, timeSpent: 0, lastVisited: null },
                    'concepts': { name: 'Core Concepts', completed: false, timeSpent: 0, lastVisited: null },
                    'excel-model': { name: 'Excel Model Building', completed: false, timeSpent: 0, lastVisited: null },
                    'examples': { name: 'Worked Examples', completed: false, timeSpent: 0, lastVisited: null },
                    'exercises': { name: 'Interactive Exercises', completed: false, timeSpent: 0, lastVisited: null },
                    'summary': { name: 'Summary & Assessment', completed: false, timeSpent: 0, lastVisited: null }
                },
                overallProgress: 0,
                startDate: null,
                completedDate: null
            }
            // Additional units would be added here
        },
        global: {
            totalTimeSpent: 0,
            sessionsCount: 0,
            lastActivity: null,
            achievements: [],
            preferences: {
                reminderFrequency: 'weekly',
                goalSetting: true,
                showProgress: true
            }
        },
        assessments: {},
        bookmarks: [],
        notes: {}
    };
    
    saveProgressData();
}

// ===================================
// Page Visit Tracking
// ===================================

function trackPageVisit() {
    const currentPath = window.location.pathname;
    const pageInfo = extractPageInfo(currentPath);
    
    if (pageInfo.unit && pageInfo.section) {
        // Record page visit
        recordSectionVisit(pageInfo.unit, pageInfo.section);
        
        // Start time tracking
        startTimeTracking(pageInfo.unit, pageInfo.section);
        
        // Update last activity
        progressData.global.lastActivity = Date.now();
        progressData.global.sessionsCount++;
        
        saveProgressData();
    }
}

function extractPageInfo(path) {
    // Extract unit and section from path like "/units/unit01-smart-ledger/intro.html"
    const match = path.match(/\/units\/([^\/]+)\/([^\/]+)\.html/);
    
    if (match) {
        return {
            unit: match[1],
            section: match[2] === 'index' ? 'overview' : match[2]
        };
    }
    
    return { unit: null, section: null };
}

function recordSectionVisit(unitId, sectionId) {
    if (!progressData.units[unitId]) return;
    
    const section = progressData.units[unitId].sections[sectionId];
    if (section) {
        section.lastVisited = Date.now();
        
        // Set unit start date if this is the first visit
        if (!progressData.units[unitId].startDate) {
            progressData.units[unitId].startDate = Date.now();
        }
    }
}

// ===================================
// Time Tracking
// ===================================

let currentSession = {
    startTime: null,
    unit: null,
    section: null,
    active: true
};

function startTimeTracking(unitId, sectionId) {
    currentSession = {
        startTime: Date.now(),
        unit: unitId,
        section: sectionId,
        active: true
    };
    
    // Track time every 30 seconds
    setInterval(updateTimeTracking, 30000);
    
    // Stop tracking when user leaves page
    window.addEventListener('beforeunload', stopTimeTracking);
    
    // Pause tracking when tab becomes inactive
    document.addEventListener('visibilitychange', function() {
        currentSession.active = !document.hidden;
        if (!currentSession.active) {
            updateTimeTracking();
        }
    });
}

function updateTimeTracking() {
    if (!currentSession.active || !currentSession.startTime) return;
    
    const timeSpent = Math.floor((Date.now() - currentSession.startTime) / 1000);
    
    if (currentSession.unit && currentSession.section) {
        const section = progressData.units[currentSession.unit]?.sections[currentSession.section];
        if (section) {
            section.timeSpent += timeSpent;
            progressData.global.totalTimeSpent += timeSpent;
        }
    }
    
    currentSession.startTime = Date.now();
    saveProgressData();
}

function stopTimeTracking() {
    updateTimeTracking();
    currentSession.active = false;
}

// ===================================
// Section Completion
// ===================================

function markSectionComplete(unitId, sectionId) {
    if (!progressData.units[unitId]?.sections[sectionId]) return;
    
    const section = progressData.units[unitId].sections[sectionId];
    section.completed = true;
    section.completedDate = Date.now();
    
    // Update unit progress
    updateUnitProgress(unitId);
    
    // Check for achievements
    checkAchievements(unitId, sectionId);
    
    // Show completion notification
    showCompletionNotification(section.name);
    
    saveProgressData();
    updateProgressDisplay();
}

function updateUnitProgress(unitId) {
    const unit = progressData.units[unitId];
    if (!unit) return;
    
    const sections = Object.values(unit.sections);
    const completedSections = sections.filter(s => s.completed).length;
    const totalSections = sections.length;
    
    unit.overallProgress = Math.round((completedSections / totalSections) * 100);
    
    // Mark unit as completed if all sections are done
    if (unit.overallProgress === 100 && !unit.completedDate) {
        unit.completedDate = Date.now();
        showUnitCompletionNotification(unit.name);
    }
}

// ===================================
// Progress Display
// ===================================

function updateProgressDisplay() {
    updateSidebarProgress();
    updateOverallProgress();
    updateProgressStats();
}

function updateSidebarProgress() {
    const currentPath = window.location.pathname;
    const pageInfo = extractPageInfo(currentPath);
    
    if (!pageInfo.unit) return;
    
    const unit = progressData.units[pageInfo.unit];
    if (!unit) return;
    
    // Update individual section progress bars
    Object.entries(unit.sections).forEach(([sectionId, section]) => {
        const progressElement = document.querySelector(`.progress-item[data-section="${sectionId}"] .progress-fill`);
        if (progressElement) {
            const progress = section.completed ? 100 : (section.timeSpent > 0 ? 30 : 0);
            progressElement.style.width = `${progress}%`;
            
            // Add completion checkmark
            const progressItem = progressElement.closest('.progress-item');
            if (section.completed && !progressItem.querySelector('.completion-check')) {
                const checkmark = document.createElement('span');
                checkmark.className = 'completion-check';
                checkmark.innerHTML = '✓';
                checkmark.style.cssText = 'color: #27ae60; font-weight: bold; margin-left: 0.5rem;';
                progressItem.appendChild(checkmark);
            }
        }
    });
}

function updateOverallProgress() {
    const allUnits = Object.values(progressData.units);
    const totalProgress = allUnits.reduce((sum, unit) => sum + unit.overallProgress, 0);
    const averageProgress = totalProgress / allUnits.length;
    
    // Update overall progress indicator if it exists
    const overallProgressElement = document.querySelector('.overall-progress');
    if (overallProgressElement) {
        overallProgressElement.textContent = `Overall Progress: ${Math.round(averageProgress)}%`;
    }
}

function updateProgressStats() {
    const stats = calculateProgressStats();
    
    // Update stats display if it exists
    const statsElement = document.querySelector('.progress-stats');
    if (statsElement) {
        statsElement.innerHTML = `
            <div class="stat-item">
                <span class="stat-value">${stats.completedSections}</span>
                <span class="stat-label">Sections Completed</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${stats.totalTimeFormatted}</span>
                <span class="stat-label">Time Spent</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${stats.averageSessionFormatted}</span>
                <span class="stat-label">Avg. Session</span>
            </div>
        `;
    }
}

function calculateProgressStats() {
    const allSections = Object.values(progressData.units).flatMap(unit => Object.values(unit.sections));
    const completedSections = allSections.filter(s => s.completed).length;
    const totalTime = progressData.global.totalTimeSpent;
    const sessions = progressData.global.sessionsCount;
    
    return {
        completedSections,
        totalSections: allSections.length,
        totalTime,
        totalTimeFormatted: formatTime(totalTime),
        averageSession: sessions > 0 ? totalTime / sessions : 0,
        averageSessionFormatted: formatTime(sessions > 0 ? totalTime / sessions : 0),
        completionPercentage: Math.round((completedSections / allSections.length) * 100)
    };
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
        return `${minutes}m`;
    } else {
        return `${seconds}s`;
    }
}

// ===================================
// Achievements System
// ===================================

function checkAchievements(unitId, sectionId) {
    const achievements = [
        {
            id: 'first-section',
            name: 'Getting Started',
            description: 'Complete your first section',
            condition: () => Object.values(progressData.units).some(unit => 
                Object.values(unit.sections).some(section => section.completed)
            )
        },
        {
            id: 'first-unit',
            name: 'Unit Master',
            description: 'Complete your first unit',
            condition: () => Object.values(progressData.units).some(unit => unit.overallProgress === 100)
        },
        {
            id: 'time-tracker',
            name: 'Dedicated Student',
            description: 'Spend 2+ hours studying',
            condition: () => progressData.global.totalTimeSpent >= 7200
        },
        {
            id: 'streak-7',
            name: 'Week Warrior',
            description: 'Study for 7 consecutive days',
            condition: () => checkStudyStreak() >= 7
        }
    ];
    
    achievements.forEach(achievement => {
        if (!progressData.global.achievements.includes(achievement.id) && achievement.condition()) {
            progressData.global.achievements.push(achievement.id);
            showAchievementNotification(achievement);
        }
    });
}

function checkStudyStreak() {
    // This would need more sophisticated date tracking
    // For now, return a placeholder
    return progressData.global.sessionsCount > 7 ? 7 : 0;
}

// ===================================
// Notifications
// ===================================

function showCompletionNotification(sectionName) {
    if (window.TextbookNavigation) {
        window.TextbookNavigation.showNotification(
            `✅ Section completed: ${sectionName}`, 
            'success', 
            4000
        );
    }
}

function showUnitCompletionNotification(unitName) {
    if (window.TextbookNavigation) {
        window.TextbookNavigation.showNotification(
            `🎉 Unit completed: ${unitName}!`, 
            'success', 
            6000
        );
    }
}

function showAchievementNotification(achievement) {
    if (window.TextbookNavigation) {
        window.TextbookNavigation.showNotification(
            `🏆 Achievement unlocked: ${achievement.name}!`, 
            'success', 
            5000
        );
    }
}

// ===================================
// Event Setup
// ===================================

function setupProgressEvents() {
    // Mark section complete when user scrolls to bottom
    let hasScrolledToBottom = false;
    
    window.addEventListener('scroll', function() {
        if (hasScrolledToBottom) return;
        
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= documentHeight - 100) {
            hasScrolledToBottom = true;
            
            const pageInfo = extractPageInfo(window.location.pathname);
            if (pageInfo.unit && pageInfo.section) {
                // Auto-complete after user has spent at least 2 minutes on page
                setTimeout(() => {
                    if (currentSession.unit === pageInfo.unit && currentSession.section === pageInfo.section) {
                        markSectionComplete(pageInfo.unit, pageInfo.section);
                    }
                }, 120000); // 2 minutes
            }
        }
    });
    
    // Manual completion buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.mark-complete-btn')) {
            const pageInfo = extractPageInfo(window.location.pathname);
            if (pageInfo.unit && pageInfo.section) {
                markSectionComplete(pageInfo.unit, pageInfo.section);
            }
        }
    });
}

// ===================================
// Data Persistence
// ===================================

function saveProgressData() {
    localStorage.setItem('textbook-progress', JSON.stringify(progressData));
}

function exportProgressData() {
    const data = {
        progress: progressData,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'textbook-progress.json';
    a.click();
    
    URL.revokeObjectURL(url);
}

function importProgressData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            progressData = imported.progress;
            saveProgressData();
            updateProgressDisplay();
            
            if (window.TextbookNavigation) {
                window.TextbookNavigation.showNotification(
                    'Progress data imported successfully!', 
                    'success'
                );
            }
        } catch (error) {
            if (window.TextbookNavigation) {
                window.TextbookNavigation.showNotification(
                    'Error importing progress data', 
                    'error'
                );
            }
        }
    };
    reader.readAsText(file);
}

// ===================================
// Export Functions
// ===================================

window.ProgressTracker = {
    markSectionComplete,
    updateProgressDisplay,
    calculateProgressStats,
    exportProgressData,
    importProgressData,
    getProgressData: () => progressData
};