// ===================================
// Gamification System
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeGamificationSystem();
});

let gamificationData = {};
let achievements = {};
let leaderboard = {};

// ===================================
// System Initialization
// ===================================

function initializeGamificationSystem() {
    loadGamificationData();
    setupAchievementSystem();
    setupPointsSystem();
    setupBadgeSystem();
    setupLeaderboard();
    addGamificationUI();
    addGamificationStyles();
    
    // Check for achievements periodically
    setInterval(checkAchievements, 5000);
}

function loadGamificationData() {
    gamificationData = JSON.parse(localStorage.getItem('gamification-data') || JSON.stringify({
        totalPoints: 0,
        level: 1,
        xp: 0,
        xpToNextLevel: 100,
        completedExercises: 0,
        perfectScores: 0,
        streakCurrent: 0,
        streakLongest: 0,
        timeSpent: 0,
        badgesEarned: [],
        achievements: [],
        dailyGoals: {
            exercisesCompleted: 0,
            pointsEarned: 0,
            timeSpent: 0,
            target: {
                exercises: 3,
                points: 150,
                time: 30 // minutes
            }
        },
        sessionStart: Date.now(),
        lastActivity: Date.now()
    }));
    
    achievements = JSON.parse(localStorage.getItem('achievements-unlocked') || '[]');
    leaderboard = JSON.parse(localStorage.getItem('leaderboard-data') || '{}');
}

function saveGamificationData() {
    localStorage.setItem('gamification-data', JSON.stringify(gamificationData));
    localStorage.setItem('achievements-unlocked', JSON.stringify(achievements));
    localStorage.setItem('leaderboard-data', JSON.stringify(leaderboard));
}

// ===================================
// Points and XP System
// ===================================

function awardPoints(points, reason = 'Activity completed') {
    gamificationData.totalPoints += points;
    gamificationData.xp += points;
    gamificationData.dailyGoals.pointsEarned += points;
    gamificationData.lastActivity = Date.now();
    
    // Check for level up
    if (gamificationData.xp >= gamificationData.xpToNextLevel) {
        levelUp();
    }
    
    // Show points notification
    showPointsNotification(points, reason);
    
    // Update UI
    updateGamificationUI();
    saveGamificationData();
    
    // Check for achievements
    checkAchievements();
}

function levelUp() {
    gamificationData.level++;
    gamificationData.xp -= gamificationData.xpToNextLevel;
    gamificationData.xpToNextLevel = Math.floor(gamificationData.xpToNextLevel * 1.5);
    
    // Award level up bonus
    const levelBonus = gamificationData.level * 25;
    gamificationData.totalPoints += levelBonus;
    
    // Show level up celebration
    showLevelUpCelebration();
    
    // Check for level-based achievements
    checkLevelAchievements();
}

function calculateTimeSpent() {
    const sessionTime = Date.now() - gamificationData.sessionStart;
    gamificationData.timeSpent += sessionTime;
    gamificationData.dailyGoals.timeSpent += Math.floor(sessionTime / 60000); // Convert to minutes
    gamificationData.sessionStart = Date.now();
}

// ===================================
// Achievement System
// ===================================

function setupAchievementSystem() {
    const achievementDefinitions = [
        {
            id: 'first-steps',
            name: 'First Steps',
            description: 'Complete your first exercise',
            icon: '🎯',
            points: 25,
            condition: () => gamificationData.completedExercises >= 1
        },
        {
            id: 'perfect-score',
            name: 'Perfectionist',
            description: 'Get a perfect score on an exercise',
            icon: '💯',
            points: 50,
            condition: () => gamificationData.perfectScores >= 1
        },
        {
            id: 'streak-master',
            name: 'Streak Master',
            description: 'Get 5 correct answers in a row',
            icon: '🔥',
            points: 75,
            condition: () => gamificationData.streakCurrent >= 5
        },
        {
            id: 'dedicated-learner',
            name: 'Dedicated Learner',
            description: 'Spend 30 minutes learning',
            icon: '📚',
            points: 100,
            condition: () => gamificationData.timeSpent >= 1800000 // 30 minutes in milliseconds
        },
        {
            id: 'practice-makes-perfect',
            name: 'Practice Makes Perfect',
            description: 'Complete 10 exercises',
            icon: '🏆',
            points: 150,
            condition: () => gamificationData.completedExercises >= 10
        },
        {
            id: 'accounting-apprentice',
            name: 'Accounting Apprentice',
            description: 'Reach level 5',
            icon: '⭐',
            points: 200,
            condition: () => gamificationData.level >= 5
        },
        {
            id: 'balance-master',
            name: 'Balance Master',
            description: 'Complete 5 journal entry exercises perfectly',
            icon: '⚖️',
            points: 250,
            condition: () => gamificationData.perfectJournalEntries >= 5
        },
        {
            id: 'simulation-success',
            name: 'Business Simulation Success',
            description: 'Complete a business simulation with profit',
            icon: '💼',
            points: 200,
            condition: () => gamificationData.simulationsCompleted >= 1
        },
        {
            id: 'daily-achiever',
            name: 'Daily Achiever',
            description: 'Meet all daily goals',
            icon: '📅',
            points: 100,
            condition: () => checkDailyGoalsComplete()
        },
        {
            id: 'knowledge-seeker',
            name: 'Knowledge Seeker',
            description: 'Use hints 10 times',
            icon: '💡',
            points: 50,
            condition: () => gamificationData.hintsUsed >= 10
        }
    ];
    
    window.achievementDefinitions = achievementDefinitions;
}

function checkAchievements() {
    if (!window.achievementDefinitions) return;
    
    window.achievementDefinitions.forEach(achievement => {
        if (!achievements.includes(achievement.id) && achievement.condition()) {
            unlockAchievement(achievement);
        }
    });
}

function unlockAchievement(achievement) {
    achievements.push(achievement.id);
    gamificationData.achievements.push({
        id: achievement.id,
        unlockedAt: Date.now()
    });
    
    // Award points
    awardPoints(achievement.points, `Achievement: ${achievement.name}`);
    
    // Show achievement notification
    showAchievementNotification(achievement);
    
    saveGamificationData();
}

function checkLevelAchievements() {
    // Check for level-based achievements when user levels up
    checkAchievements();
}

function checkDailyGoalsComplete() {
    const goals = gamificationData.dailyGoals;
    return goals.exercisesCompleted >= goals.target.exercises &&
           goals.pointsEarned >= goals.target.points &&
           goals.timeSpent >= goals.target.time;
}

// ===================================
// Badge System
// ===================================

function setupBadgeSystem() {
    const badgeDefinitions = [
        {
            id: 'quick-learner',
            name: 'Quick Learner',
            description: 'Complete exercise in under 2 minutes',
            icon: '⚡',
            rarity: 'common'
        },
        {
            id: 'persistent',
            name: 'Persistent',
            description: 'Try the same exercise 5 times',
            icon: '🔄',
            rarity: 'common'
        },
        {
            id: 'explorer',
            name: 'Explorer',
            description: 'Try all exercise types',
            icon: '🗺️',
            rarity: 'rare'
        },
        {
            id: 'night-owl',
            name: 'Night Owl',
            description: 'Study after 10 PM',
            icon: '🦉',
            rarity: 'uncommon'
        },
        {
            id: 'early-bird',
            name: 'Early Bird',
            description: 'Study before 7 AM',
            icon: '🐦',
            rarity: 'uncommon'
        },
        {
            id: 'weekend-warrior',
            name: 'Weekend Warrior',
            description: 'Study on weekends',
            icon: '⚔️',
            rarity: 'uncommon'
        },
        {
            id: 'legend',
            name: 'Accounting Legend',
            description: 'Reach level 10',
            icon: '👑',
            rarity: 'legendary'
        }
    ];
    
    window.badgeDefinitions = badgeDefinitions;
}

function awardBadge(badgeId, reason = '') {
    if (gamificationData.badgesEarned.includes(badgeId)) return;
    
    const badge = window.badgeDefinitions.find(b => b.id === badgeId);
    if (!badge) return;
    
    gamificationData.badgesEarned.push(badgeId);
    
    // Award points based on rarity
    const rarityPoints = {
        common: 25,
        uncommon: 50,
        rare: 100,
        legendary: 200
    };
    
    awardPoints(rarityPoints[badge.rarity], `Badge: ${badge.name}`);
    
    // Show badge notification
    showBadgeNotification(badge);
    
    saveGamificationData();
}

// ===================================
// Leaderboard System
// ===================================

function setupLeaderboard() {
    // Initialize user in leaderboard if not exists
    const userId = getUserId();
    if (!leaderboard[userId]) {
        leaderboard[userId] = {
            name: getUserName(),
            points: 0,
            level: 1,
            lastUpdate: Date.now()
        };
    }
    
    updateLeaderboard();
}

function updateLeaderboard() {
    const userId = getUserId();
    leaderboard[userId] = {
        ...leaderboard[userId],
        points: gamificationData.totalPoints,
        level: gamificationData.level,
        lastUpdate: Date.now()
    };
    
    saveGamificationData();
}

function getUserId() {
    let userId = localStorage.getItem('user-id');
    if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('user-id', userId);
    }
    return userId;
}

function getUserName() {
    return localStorage.getItem('user-name') || 'Student';
}

function getTopPlayers(limit = 10) {
    return Object.entries(leaderboard)
        .map(([id, data]) => ({ id, ...data }))
        .sort((a, b) => b.points - a.points)
        .slice(0, limit);
}

// ===================================
// UI Components
// ===================================

function addGamificationUI() {
    // Add floating progress widget
    createFloatingProgressWidget();
    
    // Add gamification dashboard
    createGamificationDashboard();
    
    // Add daily goals panel
    createDailyGoalsPanel();
}

function createFloatingProgressWidget() {
    const widget = document.createElement('div');
    widget.id = 'progress-widget';
    widget.className = 'progress-widget';
    widget.innerHTML = `
        <div class="widget-header" onclick="toggleGamificationDashboard()">
            <div class="level-display">
                <span class="level-number">Lvl ${gamificationData.level}</span>
                <div class="xp-bar">
                    <div class="xp-fill" style="width: ${(gamificationData.xp / gamificationData.xpToNextLevel) * 100}%"></div>
                </div>
            </div>
            <div class="points-display">
                <span class="points-number">${gamificationData.totalPoints}</span>
                <span class="points-label">pts</span>
            </div>
        </div>
        <div class="widget-content" id="widget-content" style="display: none;">
            <div class="daily-progress">
                <h4>Daily Goals</h4>
                <div class="goal-item">
                    <span>Exercises</span>
                    <span>${gamificationData.dailyGoals.exercisesCompleted}/${gamificationData.dailyGoals.target.exercises}</span>
                </div>
                <div class="goal-item">
                    <span>Points</span>
                    <span>${gamificationData.dailyGoals.pointsEarned}/${gamificationData.dailyGoals.target.points}</span>
                </div>
                <div class="goal-item">
                    <span>Time</span>
                    <span>${gamificationData.dailyGoals.timeSpent}/${gamificationData.dailyGoals.target.time}min</span>
                </div>
            </div>
            <div class="recent-achievements" id="recent-achievements">
                <h4>Recent Achievements</h4>
                <div class="achievement-list"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(widget);
    updateProgressWidget();
}

function createGamificationDashboard() {
    const dashboard = document.createElement('div');
    dashboard.id = 'gamification-dashboard';
    dashboard.className = 'gamification-dashboard';
    dashboard.style.display = 'none';
    dashboard.innerHTML = `
        <div class="dashboard-header">
            <h2>Your Progress</h2>
            <button onclick="toggleGamificationDashboard()" class="close-btn">×</button>
        </div>
        
        <div class="dashboard-tabs">
            <button class="tab-btn active" onclick="showDashboardTab('overview')">Overview</button>
            <button class="tab-btn" onclick="showDashboardTab('achievements')">Achievements</button>
            <button class="tab-btn" onclick="showDashboardTab('badges')">Badges</button>
            <button class="tab-btn" onclick="showDashboardTab('leaderboard')">Leaderboard</button>
        </div>
        
        <div class="dashboard-content">
            <div class="tab-content active" id="overview-tab">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">📊</div>
                        <div class="stat-info">
                            <h3>${gamificationData.totalPoints}</h3>
                            <p>Total Points</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">⭐</div>
                        <div class="stat-info">
                            <h3>Level ${gamificationData.level}</h3>
                            <p>Current Level</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🎯</div>
                        <div class="stat-info">
                            <h3>${gamificationData.completedExercises}</h3>
                            <p>Exercises Completed</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🔥</div>
                        <div class="stat-info">
                            <h3>${gamificationData.streakLongest}</h3>
                            <p>Best Streak</p>
                        </div>
                    </div>
                </div>
                
                <div class="level-progress">
                    <h3>Level Progress</h3>
                    <div class="level-bar">
                        <div class="level-fill" style="width: ${(gamificationData.xp / gamificationData.xpToNextLevel) * 100}%"></div>
                    </div>
                    <p>${gamificationData.xp} / ${gamificationData.xpToNextLevel} XP to Level ${gamificationData.level + 1}</p>
                </div>
            </div>
            
            <div class="tab-content" id="achievements-tab">
                <div class="achievements-grid" id="achievements-grid"></div>
            </div>
            
            <div class="tab-content" id="badges-tab">
                <div class="badges-grid" id="badges-grid"></div>
            </div>
            
            <div class="tab-content" id="leaderboard-tab">
                <div class="leaderboard-list" id="leaderboard-list"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(dashboard);
    populateDashboardContent();
}

function createDailyGoalsPanel() {
    // Daily goals are included in the progress widget
    updateDailyGoalsDisplay();
}

// ===================================
// UI Update Functions
// ===================================

function updateGamificationUI() {
    updateProgressWidget();
    updateDashboardStats();
    updateDailyGoalsDisplay();
    updateLeaderboard();
}

function updateProgressWidget() {
    const widget = document.getElementById('progress-widget');
    if (!widget) return;
    
    const levelNumber = widget.querySelector('.level-number');
    const xpFill = widget.querySelector('.xp-fill');
    const pointsNumber = widget.querySelector('.points-number');
    
    if (levelNumber) levelNumber.textContent = `Lvl ${gamificationData.level}`;
    if (xpFill) xpFill.style.width = `${(gamificationData.xp / gamificationData.xpToNextLevel) * 100}%`;
    if (pointsNumber) pointsNumber.textContent = gamificationData.totalPoints;
    
    updateDailyGoalsDisplay();
}

function updateDashboardStats() {
    const overview = document.getElementById('overview-tab');
    if (!overview) return;
    
    const statCards = overview.querySelectorAll('.stat-card h3');
    if (statCards.length >= 4) {
        statCards[0].textContent = gamificationData.totalPoints;
        statCards[1].textContent = `Level ${gamificationData.level}`;
        statCards[2].textContent = gamificationData.completedExercises;
        statCards[3].textContent = gamificationData.streakLongest;
    }
    
    const levelFill = overview.querySelector('.level-fill');
    if (levelFill) {
        levelFill.style.width = `${(gamificationData.xp / gamificationData.xpToNextLevel) * 100}%`;
    }
}

function updateDailyGoalsDisplay() {
    const goals = gamificationData.dailyGoals;
    const goalItems = document.querySelectorAll('.goal-item span:last-child');
    
    if (goalItems.length >= 3) {
        goalItems[0].textContent = `${goals.exercisesCompleted}/${goals.target.exercises}`;
        goalItems[1].textContent = `${goals.pointsEarned}/${goals.target.points}`;
        goalItems[2].textContent = `${goals.timeSpent}/${goals.target.time}min`;
    }
}

function populateDashboardContent() {
    populateAchievements();
    populateBadges();
    populateLeaderboard();
}

function populateAchievements() {
    const grid = document.getElementById('achievements-grid');
    if (!grid || !window.achievementDefinitions) return;
    
    grid.innerHTML = '';
    
    window.achievementDefinitions.forEach(achievement => {
        const isUnlocked = achievements.includes(achievement.id);
        const achievementElement = document.createElement('div');
        achievementElement.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        achievementElement.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <h4>${achievement.name}</h4>
                <p>${achievement.description}</p>
                <span class="achievement-points">+${achievement.points} pts</span>
            </div>
            ${isUnlocked ? '<div class="achievement-check">✓</div>' : ''}
        `;
        
        grid.appendChild(achievementElement);
    });
}

function populateBadges() {
    const grid = document.getElementById('badges-grid');
    if (!grid || !window.badgeDefinitions) return;
    
    grid.innerHTML = '';
    
    window.badgeDefinitions.forEach(badge => {
        const isEarned = gamificationData.badgesEarned.includes(badge.id);
        const badgeElement = document.createElement('div');
        badgeElement.className = `badge-card ${badge.rarity} ${isEarned ? 'earned' : 'locked'}`;
        badgeElement.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-info">
                <h4>${badge.name}</h4>
                <p>${badge.description}</p>
                <span class="badge-rarity">${badge.rarity}</span>
            </div>
        `;
        
        grid.appendChild(badgeElement);
    });
}

function populateLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;
    
    const topPlayers = getTopPlayers();
    const currentUserId = getUserId();
    
    list.innerHTML = '';
    
    topPlayers.forEach((player, index) => {
        const isCurrentUser = player.id === currentUserId;
        const playerElement = document.createElement('div');
        playerElement.className = `leaderboard-item ${isCurrentUser ? 'current-user' : ''}`;
        playerElement.innerHTML = `
            <div class="player-rank">#${index + 1}</div>
            <div class="player-info">
                <h4>${player.name}${isCurrentUser ? ' (You)' : ''}</h4>
                <p>Level ${player.level}</p>
            </div>
            <div class="player-points">${player.points} pts</div>
        `;
        
        list.appendChild(playerElement);
    });
}

// ===================================
// Notification Functions
// ===================================

function showPointsNotification(points, reason) {
    const notification = createNotification(`+${points} points`, reason, 'points');
    showNotification(notification);
}

function showAchievementNotification(achievement) {
    const notification = createNotification(
        achievement.name,
        achievement.description,
        'achievement',
        achievement.icon
    );
    showNotification(notification);
}

function showBadgeNotification(badge) {
    const notification = createNotification(
        badge.name,
        badge.description,
        'badge',
        badge.icon
    );
    showNotification(notification);
}

function showLevelUpCelebration() {
    const celebration = document.createElement('div');
    celebration.className = 'level-up-celebration';
    celebration.innerHTML = `
        <div class="celebration-content">
            <h2>🎉 LEVEL UP! 🎉</h2>
            <p>You reached Level ${gamificationData.level}!</p>
            <div class="celebration-bonus">
                +${gamificationData.level * 25} Bonus Points!
            </div>
        </div>
    `;
    
    document.body.appendChild(celebration);
    
    setTimeout(() => {
        celebration.classList.add('fade-out');
        setTimeout(() => celebration.remove(), 500);
    }, 3000);
}

function createNotification(title, description, type, icon = '') {
    return {
        title,
        description,
        type,
        icon,
        timestamp: Date.now()
    };
}

function showNotification(notification) {
    const notificationElement = document.createElement('div');
    notificationElement.className = `gamification-notification ${notification.type}`;
    notificationElement.innerHTML = `
        <div class="notification-icon">${notification.icon || getTypeIcon(notification.type)}</div>
        <div class="notification-content">
            <h4>${notification.title}</h4>
            <p>${notification.description}</p>
        </div>
    `;
    
    document.body.appendChild(notificationElement);
    
    // Animate in
    setTimeout(() => notificationElement.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
        notificationElement.classList.remove('show');
        setTimeout(() => notificationElement.remove(), 300);
    }, 4000);
}

function getTypeIcon(type) {
    const icons = {
        points: '🎯',
        achievement: '🏆',
        badge: '🏅',
        level: '⭐'
    };
    return icons[type] || '🎉';
}

// ===================================
// Public API Functions
// ===================================

window.toggleGamificationDashboard = function() {
    const dashboard = document.getElementById('gamification-dashboard');
    const widget = document.getElementById('widget-content');
    
    if (dashboard.style.display === 'none') {
        dashboard.style.display = 'flex';
        if (widget) widget.style.display = 'none';
    } else {
        dashboard.style.display = 'none';
    }
};

window.showDashboardTab = function(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showDashboardTab('${tabName}')"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Refresh content for specific tabs
    if (tabName === 'leaderboard') {
        populateLeaderboard();
    }
};

// Integration with exercise system
window.onExerciseComplete = function(score, isCorrect, exerciseType) {
    gamificationData.completedExercises++;
    gamificationData.dailyGoals.exercisesCompleted++;
    
    if (isCorrect) {
        gamificationData.streakCurrent++;
        if (gamificationData.streakCurrent > gamificationData.streakLongest) {
            gamificationData.streakLongest = gamificationData.streakCurrent;
        }
        
        // Award points based on score
        let points = Math.floor(score * 20); // Max 20 points for perfect score
        if (score === 100) {
            points += 10; // Bonus for perfect score
            gamificationData.perfectScores++;
        }
        
        awardPoints(points, 'Exercise completed');
        
        // Check for exercise-specific badges
        if (exerciseType === 'journal-entry' && score === 100) {
            if (!gamificationData.perfectJournalEntries) gamificationData.perfectJournalEntries = 0;
            gamificationData.perfectJournalEntries++;
        }
    } else {
        gamificationData.streakCurrent = 0;
        awardPoints(5, 'Good effort!'); // Consolation points
    }
    
    // Time-based badges
    const currentHour = new Date().getHours();
    if (currentHour >= 22 || currentHour < 6) {
        awardBadge('night-owl');
    } else if (currentHour < 7) {
        awardBadge('early-bird');
    }
    
    const currentDay = new Date().getDay();
    if (currentDay === 0 || currentDay === 6) {
        awardBadge('weekend-warrior');
    }
    
    saveGamificationData();
};

window.onHintUsed = function() {
    if (!gamificationData.hintsUsed) gamificationData.hintsUsed = 0;
    gamificationData.hintsUsed++;
    saveGamificationData();
};

window.onSimulationComplete = function(profit) {
    if (!gamificationData.simulationsCompleted) gamificationData.simulationsCompleted = 0;
    gamificationData.simulationsCompleted++;
    
    if (profit > 0) {
        awardPoints(100, 'Profitable simulation!');
        awardBadge('simulation-success');
    } else {
        awardPoints(25, 'Simulation completed');
    }
    
    saveGamificationData();
};

// ===================================
// Styling
// ===================================

function addGamificationStyles() {
    if (document.getElementById('gamification-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'gamification-styles';
    styles.textContent = `
        .progress-widget {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border: 2px solid #667eea;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            min-width: 200px;
        }
        
        .widget-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            cursor: pointer;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 10px 10px 0 0;
        }
        
        .level-display {
            flex: 1;
        }
        
        .level-number {
            font-weight: bold;
            font-size: 0.9rem;
        }
        
        .xp-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            margin-top: 4px;
            overflow: hidden;
        }
        
        .xp-fill {
            height: 100%;
            background: #48bb78;
            transition: width 0.5s ease;
        }
        
        .points-display {
            text-align: right;
        }
        
        .points-number {
            font-weight: bold;
            font-size: 1.1rem;
        }
        
        .points-label {
            font-size: 0.8rem;
            opacity: 0.8;
        }
        
        .widget-content {
            padding: 1rem;
            border-top: 1px solid #e1e5e9;
        }
        
        .daily-progress h4 {
            margin: 0 0 0.5rem 0;
            color: #4a5568;
            font-size: 0.9rem;
        }
        
        .goal-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.25rem;
            font-size: 0.85rem;
        }
        
        .gamification-dashboard {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .dashboard-header h2 {
            margin: 0;
        }
        
        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .close-btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .dashboard-tabs {
            display: flex;
            background: #f8f9fa;
        }
        
        .tab-btn {
            flex: 1;
            padding: 1rem;
            border: none;
            background: transparent;
            cursor: pointer;
            font-weight: 600;
            color: #6b7280;
            transition: all 0.3s ease;
        }
        
        .tab-btn.active {
            background: white;
            color: #667eea;
            border-bottom: 3px solid #667eea;
        }
        
        .dashboard-content {
            background: white;
            width: 90vw;
            max-width: 800px;
            max-height: 80vh;
            overflow-y: auto;
            border-radius: 12px;
        }
        
        .tab-content {
            display: none;
            padding: 2rem;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .stat-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .stat-icon {
            font-size: 2rem;
        }
        
        .stat-info h3 {
            margin: 0;
            font-size: 1.5rem;
            color: #2d3748;
        }
        
        .stat-info p {
            margin: 0;
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        .level-progress {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .level-bar {
            width: 100%;
            height: 12px;
            background: #e2e8f0;
            border-radius: 6px;
            overflow: hidden;
            margin: 1rem 0;
        }
        
        .level-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transition: width 0.5s ease;
        }
        
        .achievements-grid, .badges-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
        }
        
        .achievement-card, .badge-card {
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .achievement-card.unlocked, .badge-card.earned {
            background: #f0fff4;
            border-color: #48bb78;
        }
        
        .achievement-card.locked, .badge-card.locked {
            opacity: 0.6;
            background: #f8f9fa;
        }
        
        .achievement-icon, .badge-icon {
            font-size: 2rem;
            width: 60px;
            text-align: center;
        }
        
        .achievement-info, .badge-info {
            flex: 1;
        }
        
        .achievement-info h4, .badge-info h4 {
            margin: 0 0 0.5rem 0;
            color: #2d3748;
        }
        
        .achievement-info p, .badge-info p {
            margin: 0 0 0.5rem 0;
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        .achievement-points {
            background: #667eea;
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .badge-rarity {
            font-size: 0.8rem;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        .badge-card.common .badge-rarity { color: #9ca3af; }
        .badge-card.uncommon .badge-rarity { color: #10b981; }
        .badge-card.rare .badge-rarity { color: #3b82f6; }
        .badge-card.legendary .badge-rarity { color: #f59e0b; }
        
        .achievement-check {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #48bb78;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
        }
        
        .leaderboard-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .leaderboard-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 8px;
            border: 1px solid #e1e5e9;
        }
        
        .leaderboard-item.current-user {
            background: #e6fffa;
            border-color: #4fd1c7;
        }
        
        .player-rank {
            font-size: 1.25rem;
            font-weight: bold;
            color: #667eea;
            min-width: 40px;
            text-align: center;
        }
        
        .player-info {
            flex: 1;
        }
        
        .player-info h4 {
            margin: 0;
            color: #2d3748;
        }
        
        .player-info p {
            margin: 0;
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        .player-points {
            font-weight: bold;
            color: #667eea;
        }
        
        .gamification-notification {
            position: fixed;
            top: 80px;
            right: 20px;
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1500;
            min-width: 300px;
            display: flex;
            align-items: center;
            gap: 1rem;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .gamification-notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .gamification-notification.points {
            border-left: 4px solid #667eea;
        }
        
        .gamification-notification.achievement {
            border-left: 4px solid #f59e0b;
        }
        
        .gamification-notification.badge {
            border-left: 4px solid #10b981;
        }
        
        .notification-icon {
            font-size: 1.5rem;
        }
        
        .notification-content h4 {
            margin: 0 0 0.25rem 0;
            color: #2d3748;
        }
        
        .notification-content p {
            margin: 0;
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        .level-up-celebration {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: celebrationIn 0.5s ease;
        }
        
        .celebration-content {
            background: white;
            border-radius: 12px;
            padding: 3rem;
            text-align: center;
            animation: celebrationBounce 0.5s ease;
        }
        
        .celebration-content h2 {
            margin: 0 0 1rem 0;
            color: #2d3748;
            font-size: 2.5rem;
        }
        
        .celebration-bonus {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: bold;
            font-size: 1.25rem;
            margin-top: 1rem;
        }
        
        .level-up-celebration.fade-out {
            animation: celebrationOut 0.5s ease;
        }
        
        @keyframes celebrationIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes celebrationOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes celebrationBounce {
            0% { transform: scale(0.3); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        @media (max-width: 768px) {
            .progress-widget {
                top: 10px;
                right: 10px;
                min-width: 180px;
            }
            
            .dashboard-content {
                width: 95vw;
                height: 90vh;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
            }
            
            .achievements-grid, .badges-grid {
                grid-template-columns: 1fr;
            }
            
            .gamification-notification {
                right: 10px;
                min-width: 280px;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// ===================================
// Auto-tracking
// ===================================

// Track time spent
setInterval(() => {
    if (document.visibilityState === 'visible') {
        calculateTimeSpent();
    }
}, 60000); // Update every minute

// Track page visibility
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        calculateTimeSpent();
        saveGamificationData();
    } else {
        gamificationData.sessionStart = Date.now();
    }
});

// Missing functions for API compatibility
function addExperience(xp, reason = 'Experience gained') {
    return awardPoints(xp, reason); // XP and points are the same in our system
}

function updateProgress(activity, progress) {
    // Update progress for a specific activity
    if (!gamificationData.activityProgress) {
        gamificationData.activityProgress = {};
    }
    gamificationData.activityProgress[activity] = progress;
    saveGamificationData();
    
    // Check if activity is completed
    if (progress >= 100) {
        awardPoints(25, `Completed ${activity}`);
    }
}

function getPlayerLevel() {
    return {
        level: gamificationData.level,
        xp: gamificationData.xp,
        xpToNextLevel: gamificationData.xpToNextLevel,
        totalPoints: gamificationData.totalPoints
    };
}

// Export global functions for direct access
window.awardPoints = awardPoints;
window.addExperience = addExperience;
window.updateProgress = updateProgress;
window.getPlayerLevel = getPlayerLevel;
window.unlockAchievement = unlockAchievement;
window.showNotification = showNotification;

// Export functions
window.Gamification = {
    awardPoints,
    addExperience,
    updateProgress, 
    getPlayerLevel,
    unlockAchievement,
    showNotification,
    onExerciseComplete: window.onExerciseComplete,
    onHintUsed: window.onHintUsed,
    onSimulationComplete: window.onSimulationComplete,
    awardBadge,
    gamificationData
};