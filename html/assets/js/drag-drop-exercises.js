// ===================================
// Drag-and-Drop Exercise System
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeDragDropExercises();
});

let dragDropInstances = {};

// ===================================
// System Initialization
// ===================================

function initializeDragDropExercises() {
    setupDragDropContainers();
    addDragDropStyles();
    setupGlobalEventListeners();
}

function setupDragDropContainers() {
    const containers = document.querySelectorAll('.drag-drop-exercise');
    
    containers.forEach((container, index) => {
        const exerciseType = container.dataset.type || 'categorize-accounts';
        const exerciseId = container.dataset.id || `dragdrop-${index}`;
        
        createDragDropExercise(container, exerciseType, exerciseId);
    });
}

// ===================================
// Exercise Creation
// ===================================

function createDragDropExercise(container, type, id) {
    const exercises = {
        'categorize-accounts': createAccountCategorizationExercise,
        'journal-entry-builder': createJournalEntryBuilderExercise,
        'trial-balance-sort': createTrialBalanceSortExercise
    };
    
    const createFunction = exercises[type];
    if (!createFunction) {
        console.warn(`Exercise type '${type}' not implemented, falling back to 'categorize-accounts'`);
        exercises['categorize-accounts'](container, id);
        return;
    }
    
    createFunction(container, id);
    
    dragDropInstances[id] = {
        container: container,
        type: type,
        completed: false,
        attempts: 0
    };
}

function createAccountCategorizationExercise(container, id) {
    const accounts = [
        { name: 'Cash', category: 'Assets', description: 'Money on hand or in bank accounts' },
        { name: 'Accounts Receivable', category: 'Assets', description: 'Money owed by customers' },
        { name: 'Equipment', category: 'Assets', description: 'Physical assets used in business' },
        { name: 'Inventory', category: 'Assets', description: 'Goods held for sale' },
        { name: 'Accounts Payable', category: 'Liabilities', description: 'Money owed to suppliers' },
        { name: 'Notes Payable', category: 'Liabilities', description: 'Formal written promises to pay' },
        { name: 'Owner\'s Equity', category: 'Equity', description: 'Owner\'s investment in the business' },
        { name: 'Retained Earnings', category: 'Equity', description: 'Accumulated profits kept in business' },
        { name: 'Service Revenue', category: 'Revenue', description: 'Income from providing services' },
        { name: 'Sales Revenue', category: 'Revenue', description: 'Income from selling products' },
        { name: 'Rent Expense', category: 'Expenses', description: 'Cost of renting facilities' },
        { name: 'Salary Expense', category: 'Expenses', description: 'Cost of employee wages' }
    ];
    
    // Shuffle accounts for randomization
    const shuffledAccounts = accounts.sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div class="drag-drop-container" id="${id}">
            <div class="exercise-header">
                <h3>Account Categorization Challenge</h3>
                <p>Drag each account to its correct category in the accounting equation</p>
                <div class="exercise-stats">
                    <span class="attempts">Attempts: <span id="attempts-${id}">0</span></span>
                    <span class="score">Score: <span id="score-${id}">0</span>%</span>
                </div>
            </div>
            
            <div class="drag-source-area">
                <h4>Accounts to Classify</h4>
                <div class="draggable-items" id="source-${id}">
                    ${shuffledAccounts.map(account => `
                        <div class="draggable-item" 
                             draggable="true" 
                             data-account="${account.name}"
                             data-category="${account.category}"
                             data-description="${account.description}"
                             title="${account.description}">
                            <span class="account-name">${account.name}</span>
                            <span class="account-hint">💡</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="accounting-equation">
                <div class="equation-part">
                    <h4>Assets</h4>
                    <div class="drop-zone" 
                         data-category="Assets" 
                         id="assets-${id}">
                        <p class="drop-hint">Drop asset accounts here</p>
                    </div>
                </div>
                
                <div class="equation-equals">=</div>
                
                <div class="equation-part">
                    <h4>Liabilities</h4>
                    <div class="drop-zone" 
                         data-category="Liabilities" 
                         id="liabilities-${id}">
                        <p class="drop-hint">Drop liability accounts here</p>
                    </div>
                </div>
                
                <div class="equation-plus">+</div>
                
                <div class="equation-part">
                    <h4>Equity</h4>
                    <div class="drop-zone" 
                         data-category="Equity" 
                         id="equity-${id}">
                        <p class="drop-hint">Drop equity accounts here</p>
                    </div>
                </div>
            </div>
            
            <div class="revenue-expense-section">
                <div class="equation-part">
                    <h4>Revenue</h4>
                    <div class="drop-zone" 
                         data-category="Revenue" 
                         id="revenue-${id}">
                        <p class="drop-hint">Drop revenue accounts here</p>
                    </div>
                </div>
                
                <div class="equation-part">
                    <h4>Expenses</h4>
                    <div class="drop-zone" 
                         data-category="Expenses" 
                         id="expenses-${id}">
                        <p class="drop-hint">Drop expense accounts here</p>
                    </div>
                </div>
            </div>
            
            <div class="exercise-controls">
                <button onclick="checkAccountCategorization('${id}')" class="btn btn-primary">Check Answers</button>
                <button onclick="resetAccountCategorization('${id}')" class="btn btn-secondary">Reset</button>
                <button onclick="showAccountHints('${id}')" class="btn btn-secondary">Show Hints</button>
            </div>
            
            <div class="exercise-feedback" id="feedback-${id}" style="display: none;"></div>
        </div>
    `;
    
    setupDragDropEvents(id);
}

function createJournalEntryBuilderExercise(container, id) {
    const scenario = {
        description: "Your business receives $1,500 cash for consulting services provided to a client.",
        correctEntry: [
            { account: "Cash", type: "debit", amount: 1500 },
            { account: "Service Revenue", type: "credit", amount: 1500 }
        ]
    };
    
    const availableAccounts = [
        "Cash", "Accounts Receivable", "Service Revenue", "Equipment", 
        "Accounts Payable", "Owner's Equity", "Rent Expense", "Salary Expense"
    ];
    
    container.innerHTML = `
        <div class="drag-drop-container journal-builder" id="${id}">
            <div class="exercise-header">
                <h3>Journal Entry Builder</h3>
                <p>Drag accounts to create the correct journal entry for this transaction:</p>
                <div class="scenario-box">
                    <strong>Transaction:</strong> ${scenario.description}
                </div>
            </div>
            
            <div class="account-bank">
                <h4>Available Accounts</h4>
                <div class="draggable-accounts">
                    ${availableAccounts.map(account => `
                        <div class="draggable-account" 
                             draggable="true" 
                             data-account="${account}">
                            ${account}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="journal-entry-builder">
                <h4>Build Your Journal Entry</h4>
                <table class="journal-table">
                    <thead>
                        <tr>
                            <th>Account</th>
                            <th>Debit</th>
                            <th>Credit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="journal-row">
                            <td class="account-drop-zone" data-row="1">
                                <span class="drop-hint">Drop account here</span>
                            </td>
                            <td class="amount-cell">
                                <input type="number" class="debit-input" data-row="1" placeholder="0.00">
                            </td>
                            <td class="amount-cell">
                                <input type="number" class="credit-input" data-row="1" placeholder="0.00">
                            </td>
                        </tr>
                        <tr class="journal-row">
                            <td class="account-drop-zone" data-row="2">
                                <span class="drop-hint">Drop account here</span>
                            </td>
                            <td class="amount-cell">
                                <input type="number" class="debit-input" data-row="2" placeholder="0.00">
                            </td>
                            <td class="amount-cell">
                                <input type="number" class="credit-input" data-row="2" placeholder="0.00">
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="totals-row">
                            <td><strong>TOTALS</strong></td>
                            <td><strong id="total-debits-${id}">$0.00</strong></td>
                            <td><strong id="total-credits-${id}">$0.00</strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            
            <div class="exercise-controls">
                <button onclick="checkJournalEntry('${id}')" class="btn btn-primary">Check Entry</button>
                <button onclick="resetJournalEntry('${id}')" class="btn btn-secondary">Reset</button>
            </div>
            
            <div class="exercise-feedback" id="feedback-${id}" style="display: none;"></div>
        </div>
    `;
    
    setupJournalBuilderEvents(id, scenario);
}

function createTrialBalanceSortExercise(container, id) {
    const accounts = [
        { name: 'Cash', balance: 5000, side: 'debit' },
        { name: 'Accounts Receivable', balance: 2500, side: 'debit' },
        { name: 'Equipment', balance: 15000, side: 'debit' },
        { name: 'Accounts Payable', balance: 3200, side: 'credit' },
        { name: 'Notes Payable', balance: 8000, side: 'credit' },
        { name: 'Owner\'s Equity', balance: 12000, side: 'credit' },
        { name: 'Service Revenue', balance: 4800, side: 'credit' },
        { name: 'Rent Expense', balance: 1200, side: 'debit' },
        { name: 'Salary Expense', balance: 4300, side: 'debit' }
    ];
    
    const shuffledAccounts = accounts.sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div class="drag-drop-container trial-balance-sort" id="${id}">
            <div class="exercise-header">
                <h3>Trial Balance Organization</h3>
                <p>Drag each account to the correct side of the trial balance</p>
            </div>
            
            <div class="unsorted-accounts">
                <h4>Accounts to Sort</h4>
                <div class="account-items">
                    ${shuffledAccounts.map(account => `
                        <div class="draggable-account-item" 
                             draggable="true" 
                             data-account="${account.name}"
                             data-balance="${account.balance}"
                             data-side="${account.side}">
                            <span class="account-name">${account.name}</span>
                            <span class="account-balance">$${account.balance.toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="trial-balance-grid">
                <div class="trial-balance-side">
                    <h4>Debit Balances</h4>
                    <div class="drop-zone trial-debit" data-side="debit" id="debit-side-${id}">
                        <p class="drop-hint">Drop debit balance accounts here</p>
                    </div>
                    <div class="side-total">Total: $<span id="debit-total-${id}">0</span></div>
                </div>
                
                <div class="trial-balance-side">
                    <h4>Credit Balances</h4>
                    <div class="drop-zone trial-credit" data-side="credit" id="credit-side-${id}">
                        <p class="drop-hint">Drop credit balance accounts here</p>
                    </div>
                    <div class="side-total">Total: $<span id="credit-total-${id}">0</span></div>
                </div>
            </div>
            
            <div class="balance-check">
                <div class="balance-status" id="balance-status-${id}">
                    Drag accounts to see if trial balance is balanced
                </div>
            </div>
            
            <div class="exercise-controls">
                <button onclick="checkTrialBalance('${id}')" class="btn btn-primary">Check Balance</button>
                <button onclick="resetTrialBalance('${id}')" class="btn btn-secondary">Reset</button>
            </div>
            
            <div class="exercise-feedback" id="feedback-${id}" style="display: none;"></div>
        </div>
    `;
    
    setupTrialBalanceEvents(id);
}

// ===================================
// Event Setup Functions
// ===================================

function setupDragDropEvents(id) {
    const container = document.getElementById(id);
    
    // Setup draggable items
    const draggableItems = container.querySelectorAll('.draggable-item');
    draggableItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    // Setup drop zones
    const dropZones = container.querySelectorAll('.drop-zone');
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

function setupJournalBuilderEvents(id, scenario) {
    const container = document.getElementById(id);
    
    // Setup draggable accounts
    const draggableAccounts = container.querySelectorAll('.draggable-account');
    draggableAccounts.forEach(account => {
        account.addEventListener('dragstart', handleAccountDragStart);
        account.addEventListener('dragend', handleDragEnd);
    });
    
    // Setup account drop zones
    const accountDropZones = container.querySelectorAll('.account-drop-zone');
    accountDropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleAccountDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
    
    // Setup amount inputs with real-time calculation
    const inputs = container.querySelectorAll('.debit-input, .credit-input');
    inputs.forEach(input => {
        input.addEventListener('input', () => updateJournalTotals(id));
    });
    
    // Store scenario data
    container.dataset.scenario = JSON.stringify(scenario);
}

function setupTrialBalanceEvents(id) {
    const container = document.getElementById(id);
    
    // Setup draggable account items
    const draggableItems = container.querySelectorAll('.draggable-account-item');
    draggableItems.forEach(item => {
        item.addEventListener('dragstart', handleTrialBalanceDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    // Setup drop zones
    const dropZones = container.querySelectorAll('.trial-debit, .trial-credit');
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleTrialBalanceDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

function setupGlobalEventListeners() {
    // Prevent default drag behavior on images and other elements
    document.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('drop', function(e) {
        e.preventDefault();
    });
}

// ===================================
// Drag and Drop Event Handlers
// ===================================

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.account);
    e.dataTransfer.setData('application/json', JSON.stringify({
        account: e.target.dataset.account,
        category: e.target.dataset.category,
        description: e.target.dataset.description
    }));
    e.target.classList.add('dragging');
}

function handleAccountDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.account);
    e.target.classList.add('dragging');
}

function handleTrialBalanceDragStart(e) {
    const data = {
        account: e.target.dataset.account,
        balance: parseFloat(e.target.dataset.balance),
        side: e.target.dataset.side
    };
    e.dataTransfer.setData('application/json', JSON.stringify(data));
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.target.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    try {
        const data = JSON.parse(e.dataTransfer.getData('application/json'));
        const dropZone = e.target.closest('.drop-zone');
        const expectedCategory = dropZone.dataset.category;
        
        if (data.category === expectedCategory) {
            // Correct drop
            createDroppedItem(dropZone, data);
            removeOriginalItem(data.account);
            showFeedback('Correct!', 'success');
        } else {
            // Incorrect drop
            showFeedback(`${data.account} belongs in ${data.category}, not ${expectedCategory}`, 'error');
        }
    } catch (error) {
        console.error('Error handling drop:', error);
    }
}

function handleAccountDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    const account = e.dataTransfer.getData('text/plain');
    const dropZone = e.target.closest('.account-drop-zone');
    
    // Remove existing account if any
    const existingAccount = dropZone.querySelector('.dropped-account');
    if (existingAccount) {
        existingAccount.remove();
    }
    
    // Add new account
    const accountElement = document.createElement('div');
    accountElement.className = 'dropped-account';
    accountElement.textContent = account;
    accountElement.dataset.account = account;
    
    // Clear the drop hint
    const dropHint = dropZone.querySelector('.drop-hint');
    if (dropHint) {
        dropHint.style.display = 'none';
    }
    
    dropZone.appendChild(accountElement);
    
    // Update the original draggable item as used
    const originalItem = document.querySelector(`[data-account="${account}"]`);
    if (originalItem) {
        originalItem.classList.add('used');
    }
}

function handleTrialBalanceDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    try {
        const data = JSON.parse(e.dataTransfer.getData('application/json'));
        const dropZone = e.target.closest('.drop-zone');
        const expectedSide = dropZone.dataset.side;
        
        // Create dropped item
        const droppedItem = document.createElement('div');
        droppedItem.className = 'dropped-trial-item';
        droppedItem.innerHTML = `
            <span class="account-name">${data.account}</span>
            <span class="account-balance">$${data.balance.toLocaleString()}</span>
        `;
        droppedItem.dataset.balance = data.balance;
        droppedItem.dataset.side = data.side;
        droppedItem.dataset.correct = (data.side === expectedSide);
        
        dropZone.appendChild(droppedItem);
        
        // Remove original item
        const originalItem = document.querySelector(`[data-account="${data.account}"]`);
        if (originalItem) {
            originalItem.remove();
        }
        
        // Update totals
        updateTrialBalanceTotals(dropZone.closest('.drag-drop-container').id);
        
    } catch (error) {
        console.error('Error handling trial balance drop:', error);
    }
}

// ===================================
// Helper Functions
// ===================================

function createDroppedItem(dropZone, data) {
    const droppedItem = document.createElement('div');
    droppedItem.className = 'dropped-item';
    droppedItem.innerHTML = `
        <span class="account-name">${data.account}</span>
        <button class="remove-item" onclick="removeDroppedItem(this)">×</button>
    `;
    droppedItem.dataset.account = data.account;
    droppedItem.dataset.category = data.category;
    
    dropZone.appendChild(droppedItem);
    
    // Hide drop hint if this is the first item
    const dropHint = dropZone.querySelector('.drop-hint');
    if (dropHint && dropZone.children.length > 1) {
        dropHint.style.display = 'none';
    }
}

function removeOriginalItem(account) {
    const originalItem = document.querySelector(`[data-account="${account}"]`);
    if (originalItem && originalItem.classList.contains('draggable-item')) {
        originalItem.style.opacity = '0.3';
        originalItem.draggable = false;
    }
}

function showFeedback(message, type) {
    // Create temporary feedback
    const feedback = document.createElement('div');
    feedback.className = `feedback-popup ${type}`;
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? '#48bb78' : '#f56565'};
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

function updateJournalTotals(id) {
    const container = document.getElementById(id);
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
    
    document.getElementById(`total-debits-${id}`).textContent = `$${totalDebits.toFixed(2)}`;
    document.getElementById(`total-credits-${id}`).textContent = `$${totalCredits.toFixed(2)}`;
}

function updateTrialBalanceTotals(id) {
    const container = document.getElementById(id);
    const debitItems = container.querySelectorAll('.trial-debit .dropped-trial-item');
    const creditItems = container.querySelectorAll('.trial-credit .dropped-trial-item');
    
    let debitTotal = 0;
    let creditTotal = 0;
    
    debitItems.forEach(item => {
        debitTotal += parseFloat(item.dataset.balance) || 0;
    });
    
    creditItems.forEach(item => {
        creditTotal += parseFloat(item.dataset.balance) || 0;
    });
    
    document.getElementById(`debit-total-${id}`).textContent = debitTotal.toLocaleString();
    document.getElementById(`credit-total-${id}`).textContent = creditTotal.toLocaleString();
    
    // Update balance status
    const balanceStatus = document.getElementById(`balance-status-${id}`);
    const isBalanced = Math.abs(debitTotal - creditTotal) < 0.01;
    
    if (debitTotal === 0 && creditTotal === 0) {
        balanceStatus.textContent = 'Drag accounts to see if trial balance is balanced';
        balanceStatus.className = 'balance-status';
    } else if (isBalanced) {
        balanceStatus.textContent = '✅ Trial Balance is Balanced!';
        balanceStatus.className = 'balance-status balanced';
    } else {
        balanceStatus.textContent = `❌ Trial Balance is OFF by $${Math.abs(debitTotal - creditTotal).toLocaleString()}`;
        balanceStatus.className = 'balance-status unbalanced';
    }
}

// ===================================
// Exercise Validation Functions
// ===================================

window.checkAccountCategorization = function(id) {
    const container = document.getElementById(id);
    const dropZones = container.querySelectorAll('.drop-zone');
    
    let correct = 0;
    let total = 0;
    let feedback = '';
    
    dropZones.forEach(zone => {
        const droppedItems = zone.querySelectorAll('.dropped-item');
        droppedItems.forEach(item => {
            total++;
            if (item.dataset.category === zone.dataset.category) {
                correct++;
                item.classList.add('correct');
            } else {
                item.classList.add('incorrect');
            }
        });
    });
    
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    const attempts = dragDropInstances[id].attempts + 1;
    dragDropInstances[id].attempts = attempts;
    
    document.getElementById(`attempts-${id}`).textContent = attempts;
    document.getElementById(`score-${id}`).textContent = score;
    
    if (score === 100) {
        feedback = `🎉 Perfect! You correctly categorized all ${total} accounts!`;
        dragDropInstances[id].completed = true;
        
        // Track achievement
        if (window.ExerciseSystem) {
            window.ExerciseSystem.updateUserPerformance('beginner', true);
        }
    } else {
        feedback = `You got ${correct} out of ${total} accounts correct (${score}%). Review the incorrect ones and try again!`;
    }
    
    const feedbackElement = document.getElementById(`feedback-${id}`);
    feedbackElement.innerHTML = `
        <div class="feedback ${score === 100 ? 'correct' : 'partial'}">
            <h4>${score === 100 ? 'Excellent Work!' : 'Keep Trying!'}</h4>
            <p>${feedback}</p>
        </div>
    `;
    feedbackElement.style.display = 'block';
};

window.resetAccountCategorization = function(id) {
    const container = document.getElementById(id);
    
    // Clear all drop zones
    const dropZones = container.querySelectorAll('.drop-zone');
    dropZones.forEach(zone => {
        const droppedItems = zone.querySelectorAll('.dropped-item');
        droppedItems.forEach(item => item.remove());
        
        const dropHint = zone.querySelector('.drop-hint');
        if (dropHint) {
            dropHint.style.display = 'block';
        }
    });
    
    // Reset all draggable items
    const draggableItems = container.querySelectorAll('.draggable-item');
    draggableItems.forEach(item => {
        item.style.opacity = '1';
        item.draggable = true;
        item.classList.remove('correct', 'incorrect');
    });
    
    // Hide feedback
    const feedbackElement = document.getElementById(`feedback-${id}`);
    feedbackElement.style.display = 'none';
};

window.showAccountHints = function(id) {
    const container = document.getElementById(id);
    const draggableItems = container.querySelectorAll('.draggable-item');
    
    draggableItems.forEach(item => {
        const hint = item.querySelector('.account-hint');
        if (hint) {
            hint.title = item.dataset.description;
            hint.style.opacity = '1';
            hint.style.animation = 'pulse 2s infinite';
        }
    });
    
    setTimeout(() => {
        draggableItems.forEach(item => {
            const hint = item.querySelector('.account-hint');
            if (hint) {
                hint.style.opacity = '0.3';
                hint.style.animation = 'none';
            }
        });
    }, 5000);
};

window.removeDroppedItem = function(button) {
    const droppedItem = button.parentElement;
    const account = droppedItem.dataset.account;
    
    // Remove the dropped item
    droppedItem.remove();
    
    // Restore the original draggable item
    const originalItem = document.querySelector(`[data-account="${account}"]`);
    if (originalItem && originalItem.classList.contains('draggable-item')) {
        originalItem.style.opacity = '1';
        originalItem.draggable = true;
    }
    
    // Show drop hint if zone is empty
    const dropZone = droppedItem.parentElement;
    if (dropZone && dropZone.children.length === 1) {
        const dropHint = dropZone.querySelector('.drop-hint');
        if (dropHint) {
            dropHint.style.display = 'block';
        }
    }
};

// ===================================
// Styling
// ===================================

function addDragDropStyles() {
    if (document.getElementById('drag-drop-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'drag-drop-styles';
    styles.textContent = `
        .drag-drop-container {
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            padding: 2rem;
            margin: 2rem 0;
        }
        
        .exercise-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .exercise-stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
            font-weight: 600;
        }
        
        .drag-source-area {
            margin-bottom: 2rem;
        }
        
        .draggable-items {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 6px;
        }
        
        .draggable-item {
            background: white;
            border: 2px solid #e1e5e9;
            border-radius: 6px;
            padding: 0.75rem 1rem;
            cursor: grab;
            user-select: none;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
        }
        
        .draggable-item:hover {
            border-color: #667eea;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .draggable-item.dragging {
            opacity: 0.8;
            transform: rotate(5deg);
        }
        
        .draggable-item.used {
            opacity: 0.3;
            background: #f1f5f9;
        }
        
        .account-hint {
            opacity: 0.3;
            font-size: 0.8rem;
            transition: opacity 0.3s ease;
        }
        
        .accounting-equation {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin: 2rem 0;
            flex-wrap: wrap;
        }
        
        .equation-part {
            text-align: center;
            min-width: 180px;
        }
        
        .equation-equals, .equation-plus {
            font-size: 2rem;
            font-weight: bold;
            color: #667eea;
        }
        
        .drop-zone {
            min-height: 120px;
            border: 3px dashed #d2d6dc;
            border-radius: 8px;
            padding: 1rem;
            margin-top: 0.5rem;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .drop-zone.drag-over {
            border-color: #667eea;
            background: rgba(102, 126, 234, 0.1);
        }
        
        .drop-hint {
            color: #9ca3af;
            font-style: italic;
            text-align: center;
            margin: 2rem 0;
        }
        
        .dropped-item {
            background: #667eea;
            color: white;
            border-radius: 4px;
            padding: 0.5rem 0.75rem;
            margin: 0.25rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            animation: dropIn 0.3s ease;
        }
        
        .dropped-item.correct {
            background: #48bb78;
        }
        
        .dropped-item.incorrect {
            background: #f56565;
            animation: shake 0.5s ease;
        }
        
        .remove-item {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1.2rem;
            padding: 0;
            margin-left: 0.5rem;
        }
        
        .revenue-expense-section {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
            flex-wrap: wrap;
        }
        
        /* Journal Entry Builder Styles */
        .journal-builder .account-bank {
            margin-bottom: 2rem;
        }
        
        .draggable-accounts {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 6px;
        }
        
        .draggable-account {
            background: white;
            border: 2px solid #e1e5e9;
            border-radius: 6px;
            padding: 0.5rem 1rem;
            cursor: grab;
            transition: all 0.3s ease;
        }
        
        .draggable-account:hover {
            border-color: #667eea;
            transform: translateY(-2px);
        }
        
        .draggable-account.used {
            opacity: 0.3;
            pointer-events: none;
        }
        
        .journal-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        
        .journal-table th,
        .journal-table td {
            border: 1px solid #e1e5e9;
            padding: 1rem;
            text-align: center;
        }
        
        .journal-table th {
            background: #f8f9fa;
            font-weight: 600;
        }
        
        .account-drop-zone {
            min-height: 60px;
            border: 2px dashed #d2d6dc;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .account-drop-zone.drag-over {
            border-color: #667eea;
            background: rgba(102, 126, 234, 0.1);
        }
        
        .dropped-account {
            background: #667eea;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-weight: 600;
        }
        
        .amount-cell input {
            width: 100%;
            border: none;
            background: transparent;
            text-align: center;
            font-size: 1rem;
            padding: 0.5rem;
        }
        
        .totals-row {
            background: #f8f9fa;
            font-weight: bold;
        }
        
        /* Trial Balance Styles */
        .trial-balance-sort .unsorted-accounts {
            margin-bottom: 2rem;
        }
        
        .account-items {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 6px;
        }
        
        .draggable-account-item {
            background: white;
            border: 2px solid #e1e5e9;
            border-radius: 6px;
            padding: 0.75rem;
            cursor: grab;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 140px;
        }
        
        .draggable-account-item:hover {
            border-color: #667eea;
            transform: translateY(-2px);
        }
        
        .account-name {
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        
        .account-balance {
            color: #667eea;
            font-weight: bold;
        }
        
        .trial-balance-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .trial-balance-side h4 {
            text-align: center;
            margin-bottom: 1rem;
        }
        
        .dropped-trial-item {
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 4px;
            padding: 0.75rem;
            margin: 0.5rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .side-total {
            text-align: center;
            font-weight: bold;
            margin-top: 1rem;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 4px;
        }
        
        .balance-check {
            text-align: center;
            margin: 2rem 0;
        }
        
        .balance-status {
            padding: 1rem;
            border-radius: 6px;
            font-weight: bold;
            background: #f8f9fa;
            border: 1px solid #e1e5e9;
        }
        
        .balance-status.balanced {
            background: #f0fff4;
            border-color: #48bb78;
            color: #22543d;
        }
        
        .balance-status.unbalanced {
            background: #fef2f2;
            border-color: #f56565;
            color: #c53030;
        }
        
        .exercise-controls {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .exercise-feedback {
            margin-top: 2rem;
        }
        
        .feedback {
            padding: 1.5rem;
            border-radius: 6px;
            text-align: center;
        }
        
        .feedback.correct {
            background: #f0fff4;
            border: 1px solid #48bb78;
            color: #22543d;
        }
        
        .feedback.partial {
            background: #fef2f2;
            border: 1px solid #f56565;
            color: #c53030;
        }
        
        .feedback-popup {
            animation: slideIn 0.3s ease;
        }
        
        @keyframes dropIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .accounting-equation {
                flex-direction: column;
                gap: 1rem;
            }
            
            .equation-equals, .equation-plus {
                font-size: 1.5rem;
            }
            
            .trial-balance-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .exercise-controls {
                flex-direction: column;
                align-items: center;
            }
            
            .draggable-items,
            .draggable-accounts,
            .account-items {
                justify-content: center;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// ===================================
// Export Functions
// ===================================

window.DragDropExercises = {
    createDragDropExercise,
    createAccountCategorizationExercise,
    createJournalEntryBuilderExercise,
    createTrialBalanceSortExercise,
    dragDropInstances
};