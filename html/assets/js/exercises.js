// ===================================
// Interactive Exercise System
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeExerciseSystem();
});

let exerciseData = {};
let userPerformance = {};

// ===================================
// Exercise System Initialization
// ===================================

function initializeExerciseSystem() {
    loadUserPerformance();
    setupComprehensionChecks();
    setupInteractiveExercises();
    initializeExerciseTracking();
}

function loadUserPerformance() {
    userPerformance = JSON.parse(localStorage.getItem('exercise-performance') || '{}');
    
    // Initialize structure if empty
    if (Object.keys(userPerformance).length === 0) {
        userPerformance = {
            totalAttempts: 0,
            correctAnswers: 0,
            topicPerformance: {},
            difficultyProgression: 'beginner',
            lastActivity: null,
            streaks: {
                current: 0,
                longest: 0
            },
            achievements: []
        };
        saveUserPerformance();
    }
}

function saveUserPerformance() {
    localStorage.setItem('exercise-performance', JSON.stringify(userPerformance));
}

// ===================================
// Comprehension Check System
// ===================================

function setupComprehensionChecks() {
    const comprehensionChecks = document.querySelectorAll('.comprehension-check');
    
    comprehensionChecks.forEach(check => {
        enhanceComprehensionCheck(check);
    });
    
    // Add floating comprehension check trigger
    if (document.querySelector('#main-content')) {
        addFloatingComprehensionTrigger();
    }
}

function enhanceComprehensionCheck(checkElement) {
    // Add progress indicator
    const progressIndicator = document.createElement('div');
    progressIndicator.className = 'comprehension-progress';
    progressIndicator.innerHTML = `
        <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
        </div>
        <span class="progress-text">0 of 0 questions answered</span>
    `;
    checkElement.insertBefore(progressIndicator, checkElement.firstChild.nextSibling);
    
    // Enhance questions with better interaction
    const questions = checkElement.querySelectorAll('.question');
    questions.forEach((question, index) => {
        enhanceQuestion(question, index, questions.length);
    });
    
    // Add completion tracking
    trackComprehensionCheckProgress(checkElement);
}

function enhanceQuestion(questionElement, index, total) {
    // Add question numbering and difficulty indicator
    const header = questionElement.querySelector('h4');
    if (header && !header.querySelector('.question-meta')) {
        const meta = document.createElement('div');
        meta.className = 'question-meta';
        meta.innerHTML = `
            <span class="question-number">Question ${index + 1} of ${total}</span>
            <span class="question-difficulty">Beginner</span>
        `;
        header.appendChild(meta);
    }
    
    // Add interaction enhancements
    const options = questionElement.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    options.forEach(option => {
        option.addEventListener('change', function() {
            updateQuestionProgress(questionElement);
            
            // Show immediate feedback for practice questions
            if (questionElement.dataset.showImmediate === 'true') {
                showImmediateFeedback(questionElement);
            }
        });
    });
    
    // Add hint system
    addQuestionHints(questionElement);
}

function addQuestionHints(questionElement) {
    const hintButton = document.createElement('button');
    hintButton.className = 'hint-button';
    hintButton.innerHTML = '💡 Need a hint?';
    hintButton.style.cssText = `
        background: none;
        border: 1px solid #3498db;
        color: #3498db;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.85rem;
        cursor: pointer;
        margin-top: 0.5rem;
        transition: all 0.3s ease;
    `;
    
    const hintContent = document.createElement('div');
    hintContent.className = 'hint-content';
    hintContent.style.cssText = `
        display: none;
        background: #e8f4f8;
        border: 1px solid #3498db;
        border-radius: 4px;
        padding: 0.75rem;
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: #2c3e50;
    `;
    
    // Generate contextual hints based on question content
    const questionText = questionElement.querySelector('h4').textContent;
    const hint = generateContextualHint(questionText);
    hintContent.textContent = hint;
    
    hintButton.addEventListener('click', function() {
        if (hintContent.style.display === 'none') {
            hintContent.style.display = 'block';
            hintButton.innerHTML = '👁️ Hide hint';
            hintButton.style.backgroundColor = '#3498db';
            hintButton.style.color = 'white';
            
            // Track hint usage
            trackHintUsage(questionElement);
        } else {
            hintContent.style.display = 'none';
            hintButton.innerHTML = '💡 Need a hint?';
            hintButton.style.backgroundColor = 'transparent';
            hintButton.style.color = '#3498db';
        }
    });
    
    questionElement.appendChild(hintButton);
    questionElement.appendChild(hintContent);
}

function generateContextualHint(questionText) {
    const hints = {
        'accounting equation': 'Remember: Assets = Liabilities + Equity. This equation must always balance.',
        'debit': 'Think DEAL: Debits increase Dividends, Expenses, Assets, and Losses.',
        'credit': 'Think CLIP: Credits increase Capital, Liabilities, Income, and Profit.',
        'trial balance': 'A trial balance checks that total debits equal total credits.',
        'journal entry': 'Every journal entry must have equal debits and credits.',
        'revenue': 'Revenue increases with credits and represents money earned.',
        'expense': 'Expenses increase with debits and represent money spent.',
        'asset': 'Assets are things the business owns and increase with debits.',
        'liability': 'Liabilities are what the business owes and increase with credits.'
    };
    
    const lowerQuestion = questionText.toLowerCase();
    
    for (const [keyword, hint] of Object.entries(hints)) {
        if (lowerQuestion.includes(keyword)) {
            return hint;
        }
    }
    
    return 'Think about the fundamental accounting concepts: debits, credits, and the accounting equation.';
}

// ===================================
// Interactive Exercise Framework
// ===================================

function setupInteractiveExercises() {
    createDynamicExerciseContainers();
    initializeExerciseTypes();
}

function createDynamicExerciseContainers() {
    const exerciseContainers = document.querySelectorAll('.dynamic-exercise');
    
    exerciseContainers.forEach(container => {
        const exerciseType = container.dataset.type || 'journal-entry';
        const difficulty = container.dataset.difficulty || getUserDifficulty();
        
        generateAndDisplayExercise(container, exerciseType, difficulty);
    });
}

function generateAndDisplayExercise(container, type, difficulty) {
    let exercise;
    
    switch (type) {
        case 'journal-entry':
            exercise = generateJournalEntryExercise(difficulty);
            break;
        case 'trial-balance':
            exercise = generateTrialBalanceExercise(difficulty);
            break;
        case 'fill-blank':
            exercise = generateFillBlankExercise(difficulty);
            break;
        case 'drag-drop':
            exercise = generateDragDropExercise(difficulty);
            break;
        default:
            exercise = generateJournalEntryExercise(difficulty);
    }
    
    displayExercise(container, exercise);
}

function generateJournalEntryExercise(difficulty) {
    // Use the financial data generator
    if (window.FinancialDataGenerator) {
        return window.FinancialDataGenerator.generateJournalExercise(difficulty);
    }
    
    // Fallback exercise
    return {
        company: "TechStart Solutions",
        scenario: "Received $1,500 cash for consulting services",
        solution: [
            { account: "Cash", debit: 1500, credit: 0 },
            { account: "Consulting Revenue", debit: 0, credit: 1500 }
        ],
        difficulty: difficulty
    };
}

function generateTrialBalanceExercise(difficulty) {
    const accounts = [
        { name: "Cash", balance: 5000, type: "Asset" },
        { name: "Accounts Receivable", balance: 2500, type: "Asset" },
        { name: "Equipment", balance: 10000, type: "Asset" },
        { name: "Accounts Payable", balance: 3000, type: "Liability" },
        { name: "Owner's Equity", balance: 12000, type: "Equity" },
        { name: "Revenue", balance: 8500, type: "Revenue" },
        { name: "Expense", balance: 6000, type: "Expense" }
    ];
    
    // Add intentional errors based on difficulty
    if (difficulty !== 'beginner') {
        accounts[0].balance = 4900; // Create $100 imbalance
    }
    
    return {
        accounts: accounts,
        difficulty: difficulty,
        expectedBalance: difficulty === 'beginner' ? 0 : -100
    };
}

function generateFillBlankExercise(difficulty) {
    const templates = {
        beginner: [
            {
                text: "The accounting equation is: _____ = _____ + _____",
                blanks: ["Assets", "Liabilities", "Equity"],
                explanation: "This fundamental equation must always balance."
            },
            {
                text: "When cash is received, we _____ the Cash account and _____ the Revenue account.",
                blanks: ["debit", "credit"],
                explanation: "Cash increases with debits, Revenue increases with credits."
            }
        ],
        intermediate: [
            {
                text: "SUMIF(_____, \"Cash\", _____) calculates the total of all Cash transactions.",
                blanks: ["Table1[Account]", "Table1[Amount]"],
                explanation: "SUMIF adds values where the condition is met."
            }
        ]
    };
    
    const template = templates[difficulty] || templates.beginner;
    return template[Math.floor(Math.random() * template.length)];
}

function generateDragDropExercise(difficulty) {
    return {
        type: 'categorize-accounts',
        instructions: "Drag each account to the correct category:",
        items: [
            { name: "Cash", category: "Asset" },
            { name: "Accounts Payable", category: "Liability" },
            { name: "Owner's Equity", category: "Equity" },
            { name: "Revenue", category: "Revenue" },
            { name: "Rent Expense", category: "Expense" }
        ],
        categories: ["Asset", "Liability", "Equity", "Revenue", "Expense"],
        difficulty: difficulty
    };
}

// ===================================
// Exercise Display and Interaction
// ===================================

function displayExercise(container, exercise) {
    container.innerHTML = `
        <div class="exercise-header">
            <h3>Interactive Exercise</h3>
            <div class="exercise-meta">
                <span class="difficulty ${exercise.difficulty}">${exercise.difficulty}</span>
                <span class="exercise-type">${exercise.type || 'Journal Entry'}</span>
            </div>
        </div>
        
        <div class="exercise-content">
            ${generateExerciseHTML(exercise)}
        </div>
        
        <div class="exercise-controls">
            <button onclick="checkExerciseAnswer(this)" class="btn btn-primary">Check Answer</button>
            <button onclick="showExerciseSolution(this)" class="btn btn-secondary">Show Solution</button>
            <button onclick="generateNewExercise(this)" class="btn btn-secondary">New Problem</button>
        </div>
        
        <div class="exercise-feedback" style="display: none;"></div>
    `;
    
    // Store exercise data for checking
    container.exerciseData = exercise;
}

function generateExerciseHTML(exercise) {
    switch (exercise.type) {
        case 'fill-blank':
            return generateFillBlankHTML(exercise);
        case 'drag-drop':
            return generateDragDropHTML(exercise);
        case 'trial-balance':
            return generateTrialBalanceHTML(exercise);
        default:
            return generateJournalEntryHTML(exercise);
    }
}

function generateJournalEntryHTML(exercise) {
    return `
        <div class="scenario">
            <p><strong>Company:</strong> ${exercise.company}</p>
            <p><strong>Transaction:</strong> ${exercise.scenario}</p>
        </div>
        
        <div class="journal-entry-form">
            <h4>Record the journal entry:</h4>
            <div class="excel-container">
                <div class="excel-grid">
                    <table class="excel-table">
                        <tr>
                            <td class="col-header">Account</td>
                            <td class="col-header">Debit</td>
                            <td class="col-header">Credit</td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder="Account name" class="account-input"></td>
                            <td><input type="number" placeholder="0.00" class="debit-input"></td>
                            <td><input type="number" placeholder="0.00" class="credit-input"></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder="Account name" class="account-input"></td>
                            <td><input type="number" placeholder="0.00" class="debit-input"></td>
                            <td><input type="number" placeholder="0.00" class="credit-input"></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="balance-check">
                <span>Total Debits: $<span id="total-debits">0.00</span></span>
                <span>Total Credits: $<span id="total-credits">0.00</span></span>
                <span id="balance-status">Not Balanced</span>
            </div>
        </div>
    `;
}

function generateFillBlankHTML(exercise) {
    let html = exercise.text;
    
    exercise.blanks.forEach((blank, index) => {
        html = html.replace('_____', `<input type="text" class="fill-blank-input" data-answer="${blank}" placeholder="Enter your answer">`);
    });
    
    return `
        <div class="fill-blank-exercise">
            <p>${html}</p>
            <div class="explanation" style="display: none;">
                <strong>Explanation:</strong> ${exercise.explanation}
            </div>
        </div>
    `;
}

function generateTrialBalanceHTML(exercise) {
    return `
        <div class="trial-balance-exercise">
            <h4>Complete the Trial Balance:</h4>
            <div class="excel-container">
                <div class="excel-grid">
                    <table class="excel-table">
                        <tr>
                            <td class="col-header">Account</td>
                            <td class="col-header">Debit</td>
                            <td class="col-header">Credit</td>
                        </tr>
                        ${exercise.accounts.map(account => `
                            <tr>
                                <td class="cell text">${account.name}</td>
                                <td class="cell">
                                    <input type="number" 
                                           class="balance-input debit-balance" 
                                           data-account="${account.name}"
                                           placeholder="0.00">
                                </td>
                                <td class="cell">
                                    <input type="number" 
                                           class="balance-input credit-balance" 
                                           data-account="${account.name}"
                                           placeholder="0.00">
                                </td>
                            </tr>
                        `).join('')}
                        <tr class="total-row">
                            <td class="cell text"><strong>TOTALS</strong></td>
                            <td class="cell"><strong id="total-trial-debits">$0.00</strong></td>
                            <td class="cell"><strong id="total-trial-credits">$0.00</strong></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ===================================
// Exercise Validation and Feedback
// ===================================

function checkExerciseAnswer(button) {
    const container = button.closest('.dynamic-exercise');
    const exercise = container.exerciseData;
    const feedbackElement = container.querySelector('.exercise-feedback');
    
    let isCorrect = false;
    let feedback = '';
    
    switch (exercise.type) {
        case 'fill-blank':
            ({ isCorrect, feedback } = validateFillBlank(container, exercise));
            break;
        case 'trial-balance':
            ({ isCorrect, feedback } = validateTrialBalance(container, exercise));
            break;
        default:
            ({ isCorrect, feedback } = validateJournalEntry(container, exercise));
    }
    
    // Update performance tracking
    updateUserPerformance(exercise.difficulty, isCorrect);
    
    // Display feedback
    feedbackElement.innerHTML = `
        <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
            <h4>${isCorrect ? '✅ Correct!' : '❌ Not quite right'}</h4>
            ${feedback}
        </div>
    `;
    feedbackElement.style.display = 'block';
    
    // Show achievement if earned
    if (isCorrect) {
        checkForAchievements();
    }
}

function validateJournalEntry(container, exercise) {
    const accountInputs = container.querySelectorAll('.account-input');
    const debitInputs = container.querySelectorAll('.debit-input');
    const creditInputs = container.querySelectorAll('.credit-input');
    
    const studentEntry = [];
    for (let i = 0; i < accountInputs.length; i++) {
        const account = accountInputs[i].value.trim();
        const debit = parseFloat(debitInputs[i].value) || 0;
        const credit = parseFloat(creditInputs[i].value) || 0;
        
        if (account && (debit > 0 || credit > 0)) {
            studentEntry.push({ account, debit, credit });
        }
    }
    
    // Check if debits equal credits
    const totalDebits = studentEntry.reduce((sum, entry) => sum + entry.debit, 0);
    const totalCredits = studentEntry.reduce((sum, entry) => sum + entry.credit, 0);
    
    if (Math.abs(totalDebits - totalCredits) > 0.01) {
        return {
            isCorrect: false,
            feedback: `<p>Your entry is not balanced. Debits ($${totalDebits.toFixed(2)}) must equal Credits ($${totalCredits.toFixed(2)}).</p>`
        };
    }
    
    // Check against solution
    let correctAccounts = 0;
    let totalExpected = exercise.solution.length;
    
    exercise.solution.forEach(solutionEntry => {
        const studentMatch = studentEntry.find(entry => 
            entry.account.toLowerCase().includes(solutionEntry.account.toLowerCase()) ||
            solutionEntry.account.toLowerCase().includes(entry.account.toLowerCase())
        );
        
        if (studentMatch && 
            Math.abs(studentMatch.debit - solutionEntry.debit) < 0.01 &&
            Math.abs(studentMatch.credit - solutionEntry.credit) < 0.01) {
            correctAccounts++;
        }
    });
    
    const isCorrect = correctAccounts === totalExpected;
    
    let feedback = isCorrect 
        ? '<p>Perfect! You correctly identified the accounts and amounts.</p>'
        : `<p>You got ${correctAccounts} out of ${totalExpected} accounts correct. Review the solution to see what you missed.</p>`;
    
    return { isCorrect, feedback };
}

function validateFillBlank(container, exercise) {
    const inputs = container.querySelectorAll('.fill-blank-input');
    let correct = 0;
    
    inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.answer.toLowerCase();
        
        if (userAnswer === correctAnswer) {
            correct++;
            input.style.backgroundColor = '#d4edda';
        } else {
            input.style.backgroundColor = '#f8d7da';
        }
    });
    
    const isCorrect = correct === inputs.length;
    const feedback = isCorrect 
        ? '<p>Excellent! All blanks filled correctly.</p>'
        : `<p>You got ${correct} out of ${inputs.length} correct. Check the highlighted fields.</p>`;
    
    return { isCorrect, feedback };
}

// ===================================
// Performance Tracking and Analytics
// ===================================

function updateUserPerformance(difficulty, isCorrect) {
    userPerformance.totalAttempts++;
    if (isCorrect) {
        userPerformance.correctAnswers++;
        userPerformance.streaks.current++;
        if (userPerformance.streaks.current > userPerformance.streaks.longest) {
            userPerformance.streaks.longest = userPerformance.streaks.current;
        }
    } else {
        userPerformance.streaks.current = 0;
    }
    
    // Track topic performance
    if (!userPerformance.topicPerformance[difficulty]) {
        userPerformance.topicPerformance[difficulty] = { attempts: 0, correct: 0 };
    }
    userPerformance.topicPerformance[difficulty].attempts++;
    if (isCorrect) {
        userPerformance.topicPerformance[difficulty].correct++;
    }
    
    userPerformance.lastActivity = Date.now();
    
    // Adjust difficulty based on performance
    adjustDifficulty();
    
    saveUserPerformance();
}

function adjustDifficulty() {
    const recentPerformance = calculateRecentPerformance();
    
    if (recentPerformance > 0.8 && userPerformance.difficultyProgression === 'beginner') {
        userPerformance.difficultyProgression = 'intermediate';
    } else if (recentPerformance > 0.85 && userPerformance.difficultyProgression === 'intermediate') {
        userPerformance.difficultyProgression = 'advanced';
    } else if (recentPerformance < 0.5 && userPerformance.difficultyProgression === 'advanced') {
        userPerformance.difficultyProgression = 'intermediate';
    } else if (recentPerformance < 0.4 && userPerformance.difficultyProgression === 'intermediate') {
        userPerformance.difficultyProgression = 'beginner';
    }
}

function calculateRecentPerformance() {
    if (userPerformance.totalAttempts < 5) return 0.5;
    
    // Calculate performance over last 10 attempts
    const recentAttempts = Math.min(10, userPerformance.totalAttempts);
    const recentCorrect = Math.min(userPerformance.correctAnswers, recentAttempts);
    
    return recentCorrect / recentAttempts;
}

function getUserDifficulty() {
    return userPerformance.difficultyProgression || 'beginner';
}

// ===================================
// Achievement System
// ===================================

function checkForAchievements() {
    const achievements = [
        {
            id: 'first-correct',
            name: 'Getting Started',
            description: 'Answer your first question correctly',
            condition: () => userPerformance.correctAnswers >= 1
        },
        {
            id: 'streak-5',
            name: 'On Fire',
            description: 'Answer 5 questions correctly in a row',
            condition: () => userPerformance.streaks.current >= 5
        },
        {
            id: 'practice-master',
            name: 'Practice Master',
            description: 'Complete 25 practice exercises',
            condition: () => userPerformance.totalAttempts >= 25
        },
        {
            id: 'accuracy-expert',
            name: 'Accuracy Expert',
            description: 'Maintain 90% accuracy over 10 attempts',
            condition: () => userPerformance.totalAttempts >= 10 && 
                             (userPerformance.correctAnswers / userPerformance.totalAttempts) >= 0.9
        }
    ];
    
    achievements.forEach(achievement => {
        if (!userPerformance.achievements.includes(achievement.id) && achievement.condition()) {
            userPerformance.achievements.push(achievement.id);
            showAchievementNotification(achievement);
            saveUserPerformance();
        }
    });
}

function showAchievementNotification(achievement) {
    if (window.TextbookNavigation) {
        window.TextbookNavigation.showNotification(
            `🏆 Achievement: ${achievement.name}!`,
            'success',
            5000
        );
    }
}

// ===================================
// Utility Functions
// ===================================

function trackComprehensionCheckProgress(checkElement) {
    const questions = checkElement.querySelectorAll('.question');
    let answered = 0;
    
    questions.forEach(question => {
        const inputs = question.querySelectorAll('input[type="radio"], input[type="checkbox"]');
        inputs.forEach(input => {
            input.addEventListener('change', function() {
                // Recount answered questions
                answered = 0;
                questions.forEach(q => {
                    const qInputs = q.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked');
                    if (qInputs.length > 0) answered++;
                });
                
                // Update progress
                const progressFill = checkElement.querySelector('.progress-fill');
                const progressText = checkElement.querySelector('.progress-text');
                
                if (progressFill && progressText) {
                    const percentage = (answered / questions.length) * 100;
                    progressFill.style.width = `${percentage}%`;
                    progressText.textContent = `${answered} of ${questions.length} questions answered`;
                }
            });
        });
    });
}

function updateQuestionProgress(questionElement) {
    // Add visual feedback for answered questions
    questionElement.classList.add('answered');
}

function showImmediateFeedback(questionElement) {
    // Implementation for immediate feedback on practice questions
    const feedback = questionElement.querySelector('.feedback');
    if (feedback) {
        feedback.style.display = 'block';
    }
}

function trackHintUsage(questionElement) {
    // Track hint usage for analytics
    const topic = questionElement.dataset.topic || 'general';
    const hintUsage = JSON.parse(localStorage.getItem('hint-usage') || '{}');
    hintUsage[topic] = (hintUsage[topic] || 0) + 1;
    localStorage.setItem('hint-usage', JSON.stringify(hintUsage));
}

function initializeExerciseTracking() {
    // Set up real-time validation for journal entries
    document.addEventListener('input', function(e) {
        if (e.target.matches('.debit-input, .credit-input')) {
            updateJournalBalance(e.target);
        }
        
        if (e.target.matches('.balance-input')) {
            updateTrialBalanceTotals(e.target);
        }
    });
}

function updateJournalBalance(input) {
    const container = input.closest('.journal-entry-form');
    if (!container) return;
    
    const debitInputs = container.querySelectorAll('.debit-input');
    const creditInputs = container.querySelectorAll('.credit-input');
    
    let totalDebits = 0;
    let totalCredits = 0;
    
    debitInputs.forEach(input => {
        totalDebits += parseFloat(input.value) || 0;
    });
    
    creditInputs.forEach(input => {
        totalCredits += parseFloat(input.value) || 0;
    });
    
    const totalDebitsElement = container.querySelector('#total-debits');
    const totalCreditsElement = container.querySelector('#total-credits');
    const balanceStatus = container.querySelector('#balance-status');
    
    if (totalDebitsElement) totalDebitsElement.textContent = totalDebits.toFixed(2);
    if (totalCreditsElement) totalCreditsElement.textContent = totalCredits.toFixed(2);
    
    if (balanceStatus) {
        const isBalanced = Math.abs(totalDebits - totalCredits) < 0.01;
        balanceStatus.textContent = isBalanced ? '✅ Balanced' : '❌ Not Balanced';
        balanceStatus.style.color = isBalanced ? '#27ae60' : '#e74c3c';
    }
}

function updateTrialBalanceTotals(input) {
    const container = input.closest('.trial-balance-exercise');
    if (!container) return;
    
    const debitInputs = container.querySelectorAll('.debit-balance');
    const creditInputs = container.querySelectorAll('.credit-balance');
    
    let totalDebits = 0;
    let totalCredits = 0;
    
    debitInputs.forEach(input => {
        totalDebits += parseFloat(input.value) || 0;
    });
    
    creditInputs.forEach(input => {
        totalCredits += parseFloat(input.value) || 0;
    });
    
    const totalDebitsElement = container.querySelector('#total-trial-debits');
    const totalCreditsElement = container.querySelector('#total-trial-credits');
    
    if (totalDebitsElement) totalDebitsElement.textContent = `$${totalDebits.toFixed(2)}`;
    if (totalCreditsElement) totalCreditsElement.textContent = `$${totalCredits.toFixed(2)}`;
}

// ===================================
// Global Functions for Button Clicks
// ===================================

window.showExerciseSolution = function(button) {
    const container = button.closest('.dynamic-exercise');
    const exercise = container.exerciseData;
    const feedbackElement = container.querySelector('.exercise-feedback');
    
    let solutionHTML = '<div class="solution"><h4>Solution:</h4>';
    
    if (exercise.solution) {
        solutionHTML += '<div class="excel-container"><div class="excel-grid"><table class="excel-table">';
        solutionHTML += '<tr><td class="col-header">Account</td><td class="col-header">Debit</td><td class="col-header">Credit</td></tr>';
        
        exercise.solution.forEach(entry => {
            solutionHTML += `<tr>
                <td class="cell text">${entry.account}</td>
                <td class="cell currency">${entry.debit > 0 ? '$' + entry.debit.toFixed(2) : '—'}</td>
                <td class="cell currency">${entry.credit > 0 ? '$' + entry.credit.toFixed(2) : '—'}</td>
            </tr>`;
        });
        
        solutionHTML += '</table></div></div>';
    }
    
    solutionHTML += '</div>';
    
    feedbackElement.innerHTML = solutionHTML;
    feedbackElement.style.display = 'block';
};

window.generateNewExercise = function(button) {
    const container = button.closest('.dynamic-exercise');
    const exerciseType = container.dataset.type || 'journal-entry';
    const difficulty = getUserDifficulty();
    
    generateAndDisplayExercise(container, exerciseType, difficulty);
};

// ===================================
// Export Functions
// ===================================

window.ExerciseSystem = {
    updateUserPerformance,
    getUserDifficulty,
    checkForAchievements,
    generateJournalEntryExercise,
    generateTrialBalanceExercise
};