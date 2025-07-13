// ===================================
// Business Simulation Mini-Games
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeBusinessSimulations();
});

let simulationInstances = {};
let gameState = {};

// ===================================
// System Initialization
// ===================================

function initializeBusinessSimulations() {
    setupSimulationContainers();
    addSimulationStyles();
    loadGameState();
}

function setupSimulationContainers() {
    const containers = document.querySelectorAll('.business-simulation');
    
    containers.forEach((container, index) => {
        const simType = container.dataset.type || 'lemonade-stand';
        const simId = container.dataset.id || `sim-${index}`;
        
        createBusinessSimulation(container, simType, simId);
    });
}

function loadGameState() {
    gameState = JSON.parse(localStorage.getItem('business-sim-state') || '{}');
}

function saveGameState() {
    localStorage.setItem('business-sim-state', JSON.stringify(gameState));
}

// ===================================
// Simulation Creation
// ===================================

function createBusinessSimulation(container, type, id) {
    const simulations = {
        'lemonade-stand': createLemonadeStandSimulation,
        'startup-journey': createStartupJourneySimulation,
        'cash-flow-challenge': createCashFlowChallengeSimulation,
        'inventory-manager': createInventoryManagerSimulation,
        'budget-balancer': createBudgetBalancerSimulation
    };
    
    const createFunction = simulations[type] || simulations['lemonade-stand'];
    createFunction(container, id);
    
    simulationInstances[id] = {
        container: container,
        type: type,
        active: false,
        score: 0,
        level: 1
    };
}

// ===================================
// Lemonade Stand Simulation
// ===================================

function createLemonadeStandSimulation(container, id) {
    const gameData = {
        cash: 50,
        day: 1,
        revenue: 0,
        expenses: 0,
        inventory: { lemons: 0, sugar: 0, cups: 0 },
        weather: 'sunny',
        customerSatisfaction: 100,
        recipe: { lemons: 2, sugar: 1, price: 1.00 }
    };
    
    container.innerHTML = `
        <div class="simulation-container lemonade-stand" id="${id}">
            <div class="simulation-header">
                <h3>🍋 Lemonade Stand Tycoon</h3>
                <p>Run your lemonade stand and learn about profit, pricing, and customer satisfaction!</p>
            </div>
            
            <div class="game-stats">
                <div class="stat-card">
                    <h4>Cash</h4>
                    <div class="stat-value" id="cash-${id}">$${gameData.cash}</div>
                </div>
                <div class="stat-card">
                    <h4>Day</h4>
                    <div class="stat-value" id="day-${id}">${gameData.day}</div>
                </div>
                <div class="stat-card">
                    <h4>Revenue</h4>
                    <div class="stat-value" id="revenue-${id}">$${gameData.revenue}</div>
                </div>
                <div class="stat-card">
                    <h4>Profit</h4>
                    <div class="stat-value" id="profit-${id}">$${gameData.revenue - gameData.expenses}</div>
                </div>
            </div>
            
            <div class="weather-display">
                <h4>Today's Weather: <span id="weather-${id}" class="weather-status sunny">☀️ Sunny</span></h4>
                <p>Weather affects customer demand for lemonade!</p>
            </div>
            
            <div class="game-sections">
                <div class="shopping-section">
                    <h4>🛒 Buy Supplies</h4>
                    <div class="supply-grid">
                        <div class="supply-item">
                            <span class="supply-name">Lemons (bag)</span>
                            <span class="supply-price">$3.00</span>
                            <button onclick="buySupply('${id}', 'lemons', 10, 3)" class="btn btn-sm">Buy 10</button>
                        </div>
                        <div class="supply-item">
                            <span class="supply-name">Sugar (bag)</span>
                            <span class="supply-price">$2.00</span>
                            <button onclick="buySupply('${id}', 'sugar', 10, 2)" class="btn btn-sm">Buy 10</button>
                        </div>
                        <div class="supply-item">
                            <span class="supply-name">Cups (pack)</span>
                            <span class="supply-price">$1.50</span>
                            <button onclick="buySupply('${id}', 'cups', 20, 1.5)" class="btn btn-sm">Buy 20</button>
                        </div>
                    </div>
                </div>
                
                <div class="inventory-section">
                    <h4>📦 Inventory</h4>
                    <div class="inventory-grid">
                        <div class="inventory-item">
                            <span>Lemons:</span>
                            <span id="lemons-${id}">${gameData.inventory.lemons}</span>
                        </div>
                        <div class="inventory-item">
                            <span>Sugar:</span>
                            <span id="sugar-${id}">${gameData.inventory.sugar}</span>
                        </div>
                        <div class="inventory-item">
                            <span>Cups:</span>
                            <span id="cups-${id}">${gameData.inventory.cups}</span>
                        </div>
                    </div>
                </div>
                
                <div class="recipe-section">
                    <h4>🧪 Recipe & Pricing</h4>
                    <div class="recipe-controls">
                        <div class="recipe-item">
                            <label>Lemons per cup:</label>
                            <input type="number" id="recipe-lemons-${id}" value="${gameData.recipe.lemons}" min="1" max="5" onchange="updateRecipe('${id}')">
                        </div>
                        <div class="recipe-item">
                            <label>Sugar per cup:</label>
                            <input type="number" id="recipe-sugar-${id}" value="${gameData.recipe.sugar}" min="0" max="3" onchange="updateRecipe('${id}')">
                        </div>
                        <div class="recipe-item">
                            <label>Price per cup:</label>
                            <input type="number" id="recipe-price-${id}" value="${gameData.recipe.price}" min="0.25" max="5.00" step="0.25" onchange="updateRecipe('${id}')">
                        </div>
                    </div>
                    <div class="recipe-feedback" id="recipe-feedback-${id}">
                        <p>Balanced recipe! Customers will be satisfied.</p>
                    </div>
                </div>
            </div>
            
            <div class="game-actions">
                <button onclick="startDay('${id}')" class="btn btn-primary" id="start-day-${id}">Start Selling!</button>
                <button onclick="endDay('${id}')" class="btn btn-secondary" id="end-day-${id}" disabled>End Day</button>
                <button onclick="resetGame('${id}')" class="btn btn-secondary">Reset Game</button>
            </div>
            
            <div class="sales-display" id="sales-display-${id}" style="display: none;">
                <h4>💰 Today's Sales</h4>
                <div class="sales-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" id="sales-progress-${id}" style="width: 0%"></div>
                    </div>
                    <div class="sales-info">
                        <span>Cups sold: <span id="cups-sold-${id}">0</span></span>
                        <span>Revenue: $<span id="daily-revenue-${id}">0</span></span>
                    </div>
                </div>
            </div>
            
            <div class="daily-report" id="daily-report-${id}" style="display: none;">
                <h4>📊 Daily Report</h4>
                <div class="report-content">
                    <div class="report-item">
                        <span>Cups Sold:</span>
                        <span id="report-cups-${id}">0</span>
                    </div>
                    <div class="report-item">
                        <span>Revenue:</span>
                        <span id="report-revenue-${id}">$0</span>
                    </div>
                    <div class="report-item">
                        <span>Expenses:</span>
                        <span id="report-expenses-${id}">$0</span>
                    </div>
                    <div class="report-item total">
                        <span>Daily Profit:</span>
                        <span id="report-profit-${id}">$0</span>
                    </div>
                </div>
                <div class="customer-feedback" id="customer-feedback-${id}">
                    <p>Customers loved your lemonade!</p>
                </div>
            </div>
        </div>
    `;
    
    // Initialize game state
    gameState[id] = gameData;
    saveGameState();
}

// ===================================
// Startup Journey Simulation
// ===================================

function createStartupJourneySimulation(container, id) {
    const gameData = {
        funding: 10000,
        monthlyBurn: 2000,
        users: 100,
        revenue: 0,
        stage: 'Idea',
        month: 1,
        decisions: []
    };
    
    gameState[id] = gameData;
    
    container.innerHTML = `
        <div class="simulation-container startup-journey" id="${id}">
            <div class="simulation-header">
                <h3>🚀 Startup Journey</h3>
                <p>Build a tech startup from idea to IPO! Make strategic decisions about funding, hiring, and growth.</p>
            </div>
            
            <div class="startup-stats">
                <div class="stat-card">
                    <h4>Funding</h4>
                    <div class="stat-value" id="funding-${id}">$10,000</div>
                </div>
                <div class="stat-card">
                    <h4>Monthly Burn</h4>
                    <div class="stat-value" id="burn-${id}">$2,000</div>
                </div>
                <div class="stat-card">
                    <h4>Users</h4>
                    <div class="stat-value" id="users-${id}">100</div>
                </div>
                <div class="stat-card">
                    <h4>Revenue</h4>
                    <div class="stat-value" id="startup-revenue-${id}">$0</div>
                </div>
            </div>
            
            <div class="startup-stage">
                <h4>Current Stage: <span id="stage-${id}">Idea</span></h4>
                <div class="stage-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" id="stage-progress-${id}" style="width: 10%"></div>
                    </div>
                </div>
            </div>
            
            <div class="decision-panel" id="decision-panel-${id}">
                <h4>Strategic Decision</h4>
                <div class="decision-content">
                    <p id="decision-text-${id}">You have a great app idea! What's your first move?</p>
                    <div class="decision-options" id="decision-options-${id}">
                        <button onclick="makeDecision('${id}', 'bootstrap')" class="decision-btn">
                            Bootstrap with personal savings ($5,000)
                        </button>
                        <button onclick="makeDecision('${id}', 'accelerator')" class="decision-btn">
                            Apply to startup accelerator
                        </button>
                        <button onclick="makeDecision('${id}', 'investors')" class="decision-btn">
                            Pitch to angel investors
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="outcome-display" id="outcome-${id}" style="display: none;">
                <h4>Outcome</h4>
                <div class="outcome-content" id="outcome-content-${id}"></div>
                <button onclick="continueJourney('${id}')" class="btn btn-primary">Continue</button>
            </div>
        </div>
    `;
    
    initializeStartupGame(id);
}

// ===================================
// Cash Flow Challenge
// ===================================

function createCashFlowChallengeSimulation(container, id) {
    const gameData = {
        cashPosition: 25000,
        day: 1,
        totalIncoming: 45000,
        totalOutgoing: 38000,
        incomingFlows: [
            { description: 'Customer Payment A', amount: 15000, daysLeft: 5 },
            { description: 'Customer Payment B', amount: 20000, daysLeft: 12 },
            { description: 'Invoice Collection', amount: 10000, daysLeft: 25 }
        ],
        outgoingFlows: [
            { description: 'Supplier Payment', amount: 12000, daysLeft: 3 },
            { description: 'Payroll', amount: 18000, daysLeft: 15 },
            { description: 'Rent Payment', amount: 8000, daysLeft: 30 }
        ]
    };
    
    gameState[id] = gameData;
    
    container.innerHTML = `
        <div class="simulation-container cash-flow-challenge" id="${id}">
            <div class="simulation-header">
                <h3>💰 Cash Flow Challenge</h3>
                <p>Manage cash flow for a growing business. Balance incoming and outgoing payments to stay solvent!</p>
            </div>
            
            <div class="cash-flow-dashboard">
                <div class="cash-position">
                    <h4>Current Cash Position</h4>
                    <div class="cash-amount" id="cash-position-${id}">$25,000</div>
                    <div class="cash-status" id="cash-status-${id}">Healthy</div>
                </div>
                
                <div class="upcoming-flows">
                    <div class="flow-section">
                        <h5>Incoming (Next 30 days)</h5>
                        <div class="flow-list" id="incoming-${id}">
                            <div class="flow-item positive">
                                <span>Client payment</span>
                                <span>+$15,000</span>
                                <span>Day 15</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flow-section">
                        <h5>Outgoing (Next 30 days)</h5>
                        <div class="flow-list" id="outgoing-${id}">
                            <div class="flow-item negative">
                                <span>Rent payment</span>
                                <span>-$8,000</span>
                                <span>Day 1</span>
                            </div>
                            <div class="flow-item negative">
                                <span>Payroll</span>
                                <span>-$12,000</span>
                                <span>Day 15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="actions-panel">
                <h4>Available Actions</h4>
                <div class="action-buttons">
                    <button onclick="requestPayment('${id}')" class="action-btn">
                        📞 Call client for early payment
                    </button>
                    <button onclick="negotiateTerms('${id}')" class="action-btn">
                        📝 Negotiate payment terms
                    </button>
                    <button onclick="getLineOfCredit('${id}')" class="action-btn">
                        🏦 Apply for line of credit
                    </button>
                    <button onclick="delayExpense('${id}')" class="action-btn">
                        ⏰ Delay non-critical expense
                    </button>
                </div>
            </div>
            
            <div class="simulation-controls">
                <button onclick="advanceDay('${id}')" class="btn btn-primary" id="advance-day-${id}">Advance Day</button>
                <button onclick="resetCashFlow('${id}')" class="btn btn-secondary">Reset Challenge</button>
            </div>
            
            <div class="day-counter">
                Day <span id="current-day-${id}">1</span> of 30
            </div>
        </div>
    `;
    
    initializeCashFlowGame(id);
}

// ===================================
// Inventory Manager Simulation
// ===================================

function createInventoryManagerSimulation(container, id) {
    const gameData = {
        cash: 1000,
        day: 1,
        totalRevenue: 0,
        totalExpenses: 0,
        inventory: {
            laptops: { quantity: 0, cost: 800, price: 1200, demand: 'medium' },
            phones: { quantity: 0, cost: 400, price: 600, demand: 'high' },
            tablets: { quantity: 0, cost: 300, price: 450, demand: 'low' }
        },
        storageCost: 50,
        orderHistory: []
    };
    
    gameState[id] = gameData;
    
    container.innerHTML = `
        <div class="simulation-container inventory-manager" id="${id}">
            <div class="simulation-header">
                <h3>📦 Inventory Manager</h3>
                <p>Manage inventory levels, optimize ordering, and maximize profits!</p>
            </div>
            
            <div class="game-stats">
                <div class="stat-card">
                    <h4>Cash</h4>
                    <div class="stat-value" id="cash-${id}">$${gameData.cash}</div>
                </div>
                <div class="stat-card">
                    <h4>Day</h4>
                    <div class="stat-value" id="day-${id}">${gameData.day}</div>
                </div>
                <div class="stat-card">
                    <h4>Profit</h4>
                    <div class="stat-value" id="profit-${id}">$${gameData.totalRevenue - gameData.totalExpenses}</div>
                </div>
            </div>
            
            <div class="inventory-dashboard">
                <h4>Current Inventory</h4>
                <div class="inventory-items">
                    ${Object.keys(gameData.inventory).map(item => `
                        <div class="inventory-card">
                            <h5>${item.charAt(0).toUpperCase() + item.slice(1)}</h5>
                            <p>Quantity: <span id="${item}-qty-${id}">${gameData.inventory[item].quantity}</span></p>
                            <p>Cost: $${gameData.inventory[item].cost}</p>
                            <p>Price: $${gameData.inventory[item].price}</p>
                            <p>Demand: ${gameData.inventory[item].demand}</p>
                            <button onclick="orderStock('${id}', '${item}', 5)" class="btn btn-sm">Order 5</button>
                            <button onclick="orderStock('${id}', '${item}', 10)" class="btn btn-sm">Order 10</button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="game-actions">
                <button onclick="advanceDay('${id}')" class="btn btn-primary">Advance Day</button>
                <button onclick="resetGame('${id}')" class="btn btn-secondary">Reset Game</button>
            </div>
        </div>
    `;
}

// ===================================
// Budget Balancer Simulation
// ===================================

function createBudgetBalancerSimulation(container, id) {
    const gameData = {
        monthlyIncome: 5000,
        month: 1,
        totalSavings: 1000,
        expenses: {
            rent: { amount: 1200, required: true, paid: false },
            utilities: { amount: 300, required: true, paid: false },
            groceries: { amount: 400, required: true, paid: false },
            transportation: { amount: 200, required: true, paid: false },
            entertainment: { amount: 0, required: false, paid: false },
            dining: { amount: 0, required: false, paid: false },
            shopping: { amount: 0, required: false, paid: false }
        },
        emergencyFund: 500,
        financialHealth: 100
    };
    
    gameState[id] = gameData;
    
    container.innerHTML = `
        <div class="simulation-container budget-balancer" id="${id}">
            <div class="simulation-header">
                <h3>💰 Budget Balancer</h3>
                <p>Manage your monthly budget and make smart financial decisions!</p>
            </div>
            
            <div class="game-stats">
                <div class="stat-card">
                    <h4>Income</h4>
                    <div class="stat-value" id="income-${id}">$${gameData.monthlyIncome}</div>
                </div>
                <div class="stat-card">
                    <h4>Month</h4>
                    <div class="stat-value" id="month-${id}">${gameData.month}</div>
                </div>
                <div class="stat-card">
                    <h4>Savings</h4>
                    <div class="stat-value" id="savings-${id}">$${gameData.totalSavings}</div>
                </div>
                <div class="stat-card">
                    <h4>Financial Health</h4>
                    <div class="stat-value" id="health-${id}">${gameData.financialHealth}%</div>
                </div>
            </div>
            
            <div class="budget-dashboard">
                <h4>Monthly Expenses</h4>
                <div class="expense-items">
                    ${Object.keys(gameData.expenses).map(expense => `
                        <div class="expense-card ${gameData.expenses[expense].required ? 'required' : 'optional'}">
                            <h5>${expense.charAt(0).toUpperCase() + expense.slice(1)}</h5>
                            <p>${gameData.expenses[expense].required ? 'Required' : 'Optional'}</p>
                            <input type="number" id="${expense}-${id}" value="${gameData.expenses[expense].amount}" min="0" step="50">
                            <button onclick="updateExpense('${id}', '${expense}')" class="btn btn-sm">Update</button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="game-actions">
                <button onclick="advanceMonth('${id}')" class="btn btn-primary">End Month</button>
                <button onclick="resetGame('${id}')" class="btn btn-secondary">Reset Game</button>
            </div>
        </div>
    `;
}

// ===================================
// Game Logic Functions
// ===================================

// Lemonade Stand Functions
window.buySupply = function(id, supply, quantity, cost) {
    const gameData = gameState[id];
    const totalCost = cost;
    
    if (gameData.cash >= totalCost) {
        gameData.cash -= totalCost;
        gameData.inventory[supply] += quantity;
        gameData.expenses += totalCost;
        
        updateLemonadeDisplay(id);
        saveGameState();
        
        showNotification(`Bought ${quantity} ${supply} for $${totalCost}`, 'success');
    } else {
        showNotification('Not enough cash!', 'error');
    }
};

window.updateRecipe = function(id) {
    const gameData = gameState[id];
    
    gameData.recipe.lemons = parseInt(document.getElementById(`recipe-lemons-${id}`).value);
    gameData.recipe.sugar = parseInt(document.getElementById(`recipe-sugar-${id}`).value);
    gameData.recipe.price = parseFloat(document.getElementById(`recipe-price-${id}`).value);
    
    // Calculate recipe feedback
    const feedback = document.getElementById(`recipe-feedback-${id}`);
    const totalIngredients = gameData.recipe.lemons + gameData.recipe.sugar;
    
    if (totalIngredients < 2) {
        feedback.innerHTML = '<p style="color: #f56565;">Recipe too weak - customers won\'t like it!</p>';
    } else if (totalIngredients > 5) {
        feedback.innerHTML = '<p style="color: #f56565;">Recipe too strong - too expensive to make!</p>';
    } else if (gameData.recipe.price < 0.5) {
        feedback.innerHTML = '<p style="color: #f56565;">Price too low - you won\'t make profit!</p>';
    } else if (gameData.recipe.price > 3) {
        feedback.innerHTML = '<p style="color: #f56565;">Price too high - customers won\'t buy!</p>';
    } else {
        feedback.innerHTML = '<p style="color: #48bb78;">Great recipe and pricing!</p>';
    }
    
    saveGameState();
};

window.startDay = function(id) {
    const gameData = gameState[id];
    
    // Check if enough supplies
    const cupsNeeded = Math.min(gameData.inventory.cups, 
        Math.floor(gameData.inventory.lemons / gameData.recipe.lemons),
        Math.floor(gameData.inventory.sugar / gameData.recipe.sugar));
    
    if (cupsNeeded <= 0) {
        showNotification('Not enough supplies to make lemonade!', 'error');
        return;
    }
    
    // Generate random weather
    const weathers = ['sunny', 'cloudy', 'rainy', 'hot'];
    gameData.weather = weathers[Math.floor(Math.random() * weathers.length)];
    
    // Simulate sales
    simulateLemonadeSales(id, cupsNeeded);
    
    document.getElementById(`start-day-${id}`).disabled = true;
    document.getElementById(`end-day-${id}`).disabled = false;
    document.getElementById(`sales-display-${id}`).style.display = 'block';
};

function simulateLemonadeSales(id, maxCups) {
    const gameData = gameState[id];
    
    // Calculate demand based on weather, price, and recipe
    let demandMultiplier = 1;
    
    switch (gameData.weather) {
        case 'sunny': demandMultiplier = 1.5; break;
        case 'hot': demandMultiplier = 2.0; break;
        case 'cloudy': demandMultiplier = 0.8; break;
        case 'rainy': demandMultiplier = 0.3; break;
    }
    
    // Price sensitivity
    if (gameData.recipe.price > 2) demandMultiplier *= 0.5;
    if (gameData.recipe.price < 1) demandMultiplier *= 1.2;
    
    // Recipe quality
    const recipeQuality = (gameData.recipe.lemons + gameData.recipe.sugar) / 4;
    demandMultiplier *= recipeQuality;
    
    const potentialCustomers = Math.floor(Math.random() * 50 + 20);
    const actualCustomers = Math.min(maxCups, Math.floor(potentialCustomers * demandMultiplier));
    
    // Animate sales
    let cupsSold = 0;
    const salesInterval = setInterval(() => {
        if (cupsSold >= actualCustomers) {
            clearInterval(salesInterval);
            endSalesDay(id, cupsSold);
            return;
        }
        
        cupsSold++;
        const progress = (cupsSold / actualCustomers) * 100;
        
        document.getElementById(`sales-progress-${id}`).style.width = `${progress}%`;
        document.getElementById(`cups-sold-${id}`).textContent = cupsSold;
        document.getElementById(`daily-revenue-${id}`).textContent = (cupsSold * gameData.recipe.price).toFixed(2);
    }, 100);
}

function endSalesDay(id, cupsSold) {
    const gameData = gameState[id];
    
    // Update inventory
    gameData.inventory.cups -= cupsSold;
    gameData.inventory.lemons -= cupsSold * gameData.recipe.lemons;
    gameData.inventory.sugar -= cupsSold * gameData.recipe.sugar;
    
    // Calculate finances
    const dailyRevenue = cupsSold * gameData.recipe.price;
    gameData.revenue += dailyRevenue;
    gameData.cash += dailyRevenue;
    
    // Show daily report
    showDailyReport(id, cupsSold, dailyRevenue);
    
    updateLemonadeDisplay(id);
    saveGameState();
}

window.endDay = function(id) {
    const gameData = gameState[id];
    gameData.day++;
    
    document.getElementById(`start-day-${id}`).disabled = false;
    document.getElementById(`end-day-${id}`).disabled = true;
    document.getElementById(`sales-display-${id}`).style.display = 'none';
    document.getElementById(`daily-report-${id}`).style.display = 'none';
    
    updateLemonadeDisplay(id);
    saveGameState();
};

function showDailyReport(id, cupsSold, revenue) {
    const gameData = gameState[id];
    const profit = revenue - (cupsSold * (gameData.recipe.lemons * 0.3 + gameData.recipe.sugar * 0.2 + 0.075));
    
    document.getElementById(`report-cups-${id}`).textContent = cupsSold;
    document.getElementById(`report-revenue-${id}`).textContent = `$${revenue.toFixed(2)}`;
    document.getElementById(`report-expenses-${id}`).textContent = `$${gameData.expenses.toFixed(2)}`;
    document.getElementById(`report-profit-${id}`).textContent = `$${profit.toFixed(2)}`;
    
    const feedback = document.getElementById(`customer-feedback-${id}`);
    if (cupsSold > 30) {
        feedback.innerHTML = '<p style="color: #48bb78;">🎉 Amazing sales day! Customers loved your lemonade!</p>';
    } else if (cupsSold > 15) {
        feedback.innerHTML = '<p style="color: #667eea;">👍 Good sales! Customers were satisfied.</p>';
    } else {
        feedback.innerHTML = '<p style="color: #f56565;">😕 Slow sales day. Try adjusting your recipe or pricing.</p>';
    }
    
    document.getElementById(`daily-report-${id}`).style.display = 'block';
}

function updateLemonadeDisplay(id) {
    const gameData = gameState[id];
    
    document.getElementById(`cash-${id}`).textContent = `$${gameData.cash.toFixed(2)}`;
    document.getElementById(`day-${id}`).textContent = gameData.day;
    document.getElementById(`revenue-${id}`).textContent = `$${gameData.revenue.toFixed(2)}`;
    document.getElementById(`profit-${id}`).textContent = `$${(gameData.revenue - gameData.expenses).toFixed(2)}`;
    
    document.getElementById(`lemons-${id}`).textContent = gameData.inventory.lemons;
    document.getElementById(`sugar-${id}`).textContent = gameData.inventory.sugar;
    document.getElementById(`cups-${id}`).textContent = gameData.inventory.cups;
    
    // Update weather display
    const weatherElement = document.getElementById(`weather-${id}`);
    const weatherEmojis = { sunny: '☀️', cloudy: '☁️', rainy: '🌧️', hot: '🔥' };
    weatherElement.textContent = `${weatherEmojis[gameData.weather]} ${gameData.weather.charAt(0).toUpperCase() + gameData.weather.slice(1)}`;
    weatherElement.className = `weather-status ${gameData.weather}`;
}

// Startup Journey Functions
function initializeStartupGame(id) {
    gameState[id] = {
        stage: 'idea',
        funding: 10000,
        burn: 2000,
        users: 100,
        revenue: 0,
        decisions: [],
        month: 1
    };
    saveGameState();
}

window.makeDecision = function(id, decision) {
    const gameData = gameState[id];
    gameData.decisions.push(decision);
    
    let outcome = '';
    
    switch (decision) {
        case 'bootstrap':
            gameData.funding += 5000;
            gameData.burn = 1500;
            outcome = 'You bootstrapped with personal savings. Lower burn rate but limited resources.';
            break;
        case 'accelerator':
            gameData.funding += 25000;
            gameData.users *= 2;
            outcome = 'Accepted into accelerator! Gained funding, mentorship, and user growth.';
            break;
        case 'investors':
            gameData.funding += 100000;
            gameData.burn = 8000;
            outcome = 'Angel investors invested! High funding but increased pressure and burn rate.';
            break;
    }
    
    document.getElementById(`outcome-content-${id}`).innerHTML = `<p>${outcome}</p>`;
    document.getElementById(`decision-panel-${id}`).style.display = 'none';
    document.getElementById(`outcome-${id}`).style.display = 'block';
    
    updateStartupDisplay(id);
    saveGameState();
};

function updateStartupDisplay(id) {
    const gameData = gameState[id];
    
    document.getElementById(`funding-${id}`).textContent = `$${gameData.funding.toLocaleString()}`;
    document.getElementById(`burn-${id}`).textContent = `$${gameData.burn.toLocaleString()}`;
    document.getElementById(`users-${id}`).textContent = gameData.users.toLocaleString();
    document.getElementById(`startup-revenue-${id}`).textContent = `$${gameData.revenue.toLocaleString()}`;
}

// Cash Flow Functions
function initializeCashFlowGame(id) {
    gameState[id] = {
        cash: 25000,
        day: 1,
        incomingFlows: [
            { name: 'Client payment', amount: 15000, day: 15 }
        ],
        outgoingFlows: [
            { name: 'Rent payment', amount: -8000, day: 1 },
            { name: 'Payroll', amount: -12000, day: 15 }
        ]
    };
    saveGameState();
}

window.advanceDay = function(id) {
    const gameData = gameState[id];
    gameData.day++;
    
    // Process any flows due today
    gameData.incomingFlows.forEach(flow => {
        if (flow.day === gameData.day) {
            gameData.cash += flow.amount;
            showNotification(`Received ${flow.name}: +$${flow.amount.toLocaleString()}`, 'success');
        }
    });
    
    gameData.outgoingFlows.forEach(flow => {
        if (flow.day === gameData.day) {
            gameData.cash += flow.amount; // amount is negative
            showNotification(`Paid ${flow.name}: $${Math.abs(flow.amount).toLocaleString()}`, 'info');
        }
    });
    
    updateCashFlowDisplay(id);
    saveGameState();
    
    if (gameData.day > 30) {
        if (gameData.cash > 0) {
            showNotification('🎉 Challenge completed! You maintained positive cash flow!', 'success');
        } else {
            showNotification('💸 Challenge failed! You ran out of cash!', 'error');
        }
    }
};

function updateCashFlowDisplay(id) {
    const gameData = gameState[id];
    
    document.getElementById(`cash-position-${id}`).textContent = `$${gameData.cash.toLocaleString()}`;
    document.getElementById(`current-day-${id}`).textContent = gameData.day;
    
    const status = document.getElementById(`cash-status-${id}`);
    if (gameData.cash > 20000) {
        status.textContent = 'Healthy';
        status.className = 'cash-status healthy';
    } else if (gameData.cash > 5000) {
        status.textContent = 'Tight';
        status.className = 'cash-status warning';
    } else {
        status.textContent = 'Critical';
        status.className = 'cash-status critical';
    }
}

// ===================================
// Utility Functions
// ===================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    switch (type) {
        case 'success': notification.style.background = '#48bb78'; break;
        case 'error': notification.style.background = '#f56565'; break;
        case 'warning': notification.style.background = '#ed8936'; break;
        default: notification.style.background = '#667eea';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

window.resetGame = function(id) {
    delete gameState[id];
    saveGameState();
    
    const container = simulationInstances[id].container;
    const type = simulationInstances[id].type;
    createBusinessSimulation(container, type, id);
};

// ===================================
// Styling
// ===================================

function addSimulationStyles() {
    if (document.getElementById('simulation-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'simulation-styles';
    styles.textContent = `
        .simulation-container {
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 12px;
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        }
        
        .simulation-header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f0f0f0;
        }
        
        .simulation-header h3 {
            margin: 0 0 0.5rem 0;
            color: #2d3748;
            font-size: 1.75rem;
        }
        
        .game-stats, .startup-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
        }
        
        .stat-card h4 {
            margin: 0 0 0.5rem 0;
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .weather-display {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .weather-status {
            font-size: 1.2rem;
            font-weight: bold;
        }
        
        .weather-status.sunny { color: #f6ad55; }
        .weather-status.cloudy { color: #a0aec0; }
        .weather-status.rainy { color: #4299e1; }
        .weather-status.hot { color: #f56565; }
        
        .game-sections {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .shopping-section, .inventory-section, .recipe-section {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .supply-grid, .inventory-grid {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .supply-item, .inventory-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
            background: white;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
        }
        
        .recipe-controls {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .recipe-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .recipe-item input {
            width: 80px;
            padding: 0.5rem;
            border: 1px solid #d2d6dc;
            border-radius: 4px;
            text-align: center;
        }
        
        .recipe-feedback {
            margin-top: 1rem;
            padding: 0.75rem;
            background: white;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
        }
        
        .game-actions, .simulation-controls {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .sales-display, .daily-report {
            background: #f0fff4;
            border: 1px solid #48bb78;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1rem 0;
        }
        
        .progress-bar {
            width: 100%;
            height: 20px;
            background: #e2e8f0;
            border-radius: 10px;
            overflow: hidden;
            margin: 0.5rem 0;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #48bb78, #38a169);
            transition: width 0.3s ease;
        }
        
        .sales-info {
            display: flex;
            justify-content: space-between;
            margin-top: 0.5rem;
        }
        
        .report-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .report-item {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .report-item.total {
            font-weight: bold;
            border-bottom: 2px solid #48bb78;
            background: #f0fff4;
            padding: 0.75rem;
            border-radius: 4px;
        }
        
        /* Startup Journey Styles */
        .startup-stage {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .decision-panel {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .decision-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .decision-btn {
            background: white;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            padding: 1rem;
            text-align: left;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .decision-btn:hover {
            border-color: #667eea;
            background: #f7fafc;
        }
        
        .outcome-display {
            background: #e6fffa;
            border: 1px solid #4fd1c7;
            border-radius: 8px;
            padding: 1.5rem;
            text-align: center;
        }
        
        /* Cash Flow Challenge Styles */
        .cash-flow-dashboard {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .cash-position {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
        }
        
        .cash-amount {
            font-size: 2rem;
            font-weight: bold;
            margin: 0.5rem 0;
        }
        
        .cash-status {
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        .cash-status.healthy { color: #48bb78; }
        .cash-status.warning { color: #ed8936; }
        .cash-status.critical { color: #f56565; }
        
        .upcoming-flows {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        
        .flow-section {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 1rem;
        }
        
        .flow-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .flow-item {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 0.5rem;
            padding: 0.75rem;
            background: white;
            border-radius: 4px;
            border-left: 4px solid;
        }
        
        .flow-item.positive {
            border-left-color: #48bb78;
        }
        
        .flow-item.negative {
            border-left-color: #f56565;
        }
        
        .actions-panel {
            margin-bottom: 2rem;
        }
        
        .action-buttons {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .action-btn {
            background: white;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            padding: 1rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .action-btn:hover {
            border-color: #667eea;
            background: #f7fafc;
        }
        
        .day-counter {
            text-align: center;
            font-weight: bold;
            color: #4a5568;
        }
        
        /* Notifications */
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
        
        @media (max-width: 768px) {
            .game-sections {
                grid-template-columns: 1fr;
            }
            
            .cash-flow-dashboard {
                grid-template-columns: 1fr;
            }
            
            .upcoming-flows {
                grid-template-columns: 1fr;
            }
            
            .game-actions,
            .simulation-controls {
                flex-direction: column;
                align-items: center;
            }
            
            .action-buttons {
                grid-template-columns: 1fr;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// Missing game functions for new simulations
window.orderStock = function(id, item, quantity) {
    const gameData = gameState[id];
    const itemData = gameData.inventory[item];
    const cost = itemData.cost * quantity;
    
    if (gameData.cash >= cost) {
        gameData.cash -= cost;
        gameData.totalExpenses += cost;
        gameData.inventory[item].quantity += quantity;
        
        document.getElementById(`cash-${id}`).textContent = `$${gameData.cash}`;
        document.getElementById(`${item}-qty-${id}`).textContent = gameData.inventory[item].quantity;
        saveGameState();
    }
};

window.updateExpense = function(id, expense) {
    const gameData = gameState[id];
    const newAmount = parseInt(document.getElementById(`${expense}-${id}`).value);
    gameData.expenses[expense].amount = newAmount;
    saveGameState();
};

window.advanceMonth = function(id) {
    const gameData = gameState[id];
    let totalExpenses = 0;
    
    Object.keys(gameData.expenses).forEach(expense => {
        totalExpenses += gameData.expenses[expense].amount;
    });
    
    const remaining = gameData.monthlyIncome - totalExpenses;
    gameData.totalSavings += remaining;
    gameData.month++;
    
    // Calculate financial health
    const savingsRate = remaining / gameData.monthlyIncome;
    gameData.financialHealth = Math.max(0, Math.min(100, 50 + (savingsRate * 100)));
    
    document.getElementById(`month-${id}`).textContent = gameData.month;
    document.getElementById(`savings-${id}`).textContent = `$${gameData.totalSavings}`;
    document.getElementById(`health-${id}`).textContent = `${Math.round(gameData.financialHealth)}%`;
    
    saveGameState();
};

// ===================================
// Export Functions
// ===================================

// Export globals for test compatibility
window.simulationInstances = simulationInstances;
window.gameState = gameState;

window.BusinessSimulations = {
    createBusinessSimulation,
    simulationInstances,
    gameState
};