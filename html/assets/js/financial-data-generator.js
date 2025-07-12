// ===================================
// Financial Data Generator System
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if we're on a page that needs dynamic data
    if (document.querySelector('.dynamic-exercise, .financial-simulator')) {
        initializeFinancialGenerator();
    }
});

// ===================================
// Company and Industry Data
// ===================================

const COMPANY_DATA = {
    names: [
        "TechStart Solutions", "Digital Dynamics", "Innovation Labs", "CloudFirst Consulting",
        "DataDriven Analytics", "SmartBiz Systems", "NextGen Technologies", "PixelPerfect Design",
        "CodeCraft Studios", "ByteWise Solutions", "FlexFlow Consulting", "RapidScale Tech",
        "AgileCore Systems", "MetricMaster Analytics", "StreamLine Operations", "ValueBoost Consulting"
    ],
    
    industries: [
        {
            name: "Technology Consulting",
            revenueRange: [50000, 200000],
            expenseRatios: { salaries: 0.6, rent: 0.1, utilities: 0.03, marketing: 0.08, other: 0.19 },
            commonAccounts: ["Consulting Revenue", "Contract Revenue", "Software Licenses"]
        },
        {
            name: "Digital Marketing",
            revenueRange: [30000, 150000],
            expenseRatios: { salaries: 0.5, rent: 0.08, utilities: 0.02, marketing: 0.15, other: 0.25 },
            commonAccounts: ["Marketing Services", "Campaign Revenue", "Ad Revenue"]
        },
        {
            name: "E-commerce",
            revenueRange: [75000, 300000],
            expenseRatios: { salaries: 0.4, rent: 0.12, utilities: 0.04, marketing: 0.2, other: 0.24 },
            commonAccounts: ["Product Sales", "Shipping Revenue", "Subscription Revenue"]
        },
        {
            name: "Software Development",
            revenueRange: [80000, 250000],
            expenseRatios: { salaries: 0.65, rent: 0.08, utilities: 0.02, marketing: 0.05, other: 0.2 },
            commonAccounts: ["Development Services", "Maintenance Revenue", "License Revenue"]
        }
    ],
    
    founders: [
        { name: "Sarah Chen", role: "CEO", background: "Business" },
        { name: "Marcus Rodriguez", role: "CTO", background: "Technical" },
        { name: "Elena Kowalski", role: "COO", background: "Operations" },
        { name: "David Kim", role: "CFO", background: "Finance" },
        { name: "Priya Patel", role: "VP Marketing", background: "Marketing" },
        { name: "James Thompson", role: "Lead Developer", background: "Technical" }
    ]
};

const FINANCIAL_SCENARIOS = {
    startup: {
        cashRange: [5000, 25000],
        monthlyBurn: [8000, 15000],
        revenueGrowth: 0.15,
        challenges: ["Cash flow management", "Investor reporting", "Expense tracking"]
    },
    
    growth: {
        cashRange: [25000, 100000],
        monthlyBurn: [15000, 40000],
        revenueGrowth: 0.25,
        challenges: ["Scaling operations", "Inventory management", "Team expansion"]
    },
    
    established: {
        cashRange: [50000, 200000],
        monthlyBurn: [30000, 80000],
        revenueGrowth: 0.1,
        challenges: ["Market expansion", "Product diversification", "Competitive pressure"]
    }
};

// ===================================
// Random Data Generation
// ===================================

class FinancialDataGenerator {
    constructor() {
        this.currentScenario = null;
        this.generatedData = {};
    }
    
    generateCompanyProfile(stage = 'startup') {
        const industry = this.randomChoice(COMPANY_DATA.industries);
        const scenario = FINANCIAL_SCENARIOS[stage];
        
        const profile = {
            // Basic info
            name: this.randomChoice(COMPANY_DATA.names),
            industry: industry.name,
            stage: stage,
            founded: this.generateFoundedDate(),
            
            // Financial parameters
            revenueRange: industry.revenueRange,
            expenseRatios: industry.expenseRatios,
            cashPosition: this.randomBetween(scenario.cashRange[0], scenario.cashRange[1]),
            monthlyBurn: this.randomBetween(scenario.monthlyBurn[0], scenario.monthlyBurn[1]),
            
            // Team
            founders: this.selectFounders(2, 4),
            employees: this.randomBetween(3, 12),
            
            // Business context
            challenges: scenario.challenges,
            revenueAccounts: industry.commonAccounts
        };
        
        this.currentScenario = profile;
        return profile;
    }
    
    generateTransactionData(company, months = 3, transactionsPerMonth = 20) {
        const transactions = [];
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - months);
        
        for (let month = 0; month < months; month++) {
            const monthlyTransactions = this.generateMonthlyTransactions(
                company, 
                new Date(startDate.getFullYear(), startDate.getMonth() + month, 1),
                transactionsPerMonth
            );
            transactions.push(...monthlyTransactions);
        }
        
        return transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    
    generateMonthlyTransactions(company, startDate, count) {
        const transactions = [];
        const monthlyRevenue = this.randomBetween(company.revenueRange[0] / 12, company.revenueRange[1] / 12);
        const monthlyExpenses = monthlyRevenue * 0.8; // 20% profit margin
        
        // Generate revenue transactions (fewer, larger amounts)
        const revenueTransactions = Math.floor(count * 0.3);
        for (let i = 0; i < revenueTransactions; i++) {
            transactions.push(this.generateRevenueTransaction(company, startDate, monthlyRevenue / revenueTransactions));
        }
        
        // Generate expense transactions (more frequent, smaller amounts)
        const expenseTransactions = count - revenueTransactions;
        for (let i = 0; i < expenseTransactions; i++) {
            transactions.push(this.generateExpenseTransaction(company, startDate, monthlyExpenses / expenseTransactions));
        }
        
        return transactions;
    }
    
    generateRevenueTransaction(company, baseDate, baseAmount) {
        const amount = baseAmount * this.randomBetween(0.5, 2.0);
        const date = this.randomDateInMonth(baseDate);
        
        const revenueTypes = [
            { account: "Consulting Revenue", description: "Consulting services provided to {client}" },
            { account: "Project Revenue", description: "Project milestone payment from {client}" },
            { account: "Maintenance Revenue", description: "Monthly maintenance contract from {client}" },
            { account: "License Revenue", description: "Software license sale to {client}" }
        ];
        
        const type = this.randomChoice(revenueTypes);
        const client = this.generateClientName();
        
        return {
            date: date.toISOString().split('T')[0],
            description: type.description.replace('{client}', client),
            account: type.account,
            type: 'revenue',
            debit: amount,
            credit: 0,
            runningBalance: 0 // Will be calculated later
        };
    }
    
    generateExpenseTransaction(company, baseDate, baseAmount) {
        const amount = baseAmount * this.randomBetween(0.3, 1.8);
        const date = this.randomDateInMonth(baseDate);
        
        const expenseTypes = [
            { account: "Salaries Expense", description: "Monthly salaries - {month}", weight: 0.6 },
            { account: "Rent Expense", description: "Office rent - {month}", weight: 0.1 },
            { account: "Utilities Expense", description: "Utilities - {month}", weight: 0.03 },
            { account: "Marketing Expense", description: "Marketing and advertising costs", weight: 0.08 },
            { account: "Office Supplies", description: "Office supplies and equipment", weight: 0.05 },
            { account: "Software Subscriptions", description: "Software and SaaS subscriptions", weight: 0.04 },
            { account: "Travel Expense", description: "Business travel and meals", weight: 0.03 },
            { account: "Professional Services", description: "Legal and accounting services", weight: 0.07 }
        ];
        
        const type = this.weightedRandomChoice(expenseTypes);
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        
        return {
            date: date.toISOString().split('T')[0],
            description: type.description.replace('{month}', monthName),
            account: type.account,
            type: 'expense',
            debit: 0,
            credit: amount,
            runningBalance: 0 // Will be calculated later
        };
    }
    
    generateChartOfAccounts(company) {
        const baseAccounts = [
            // Assets (1000-1999)
            { number: 1000, name: "Cash - Operating", type: "Asset", normalBalance: "Debit" },
            { number: 1100, name: "Accounts Receivable", type: "Asset", normalBalance: "Debit" },
            { number: 1200, name: "Prepaid Expenses", type: "Asset", normalBalance: "Debit" },
            { number: 1500, name: "Equipment", type: "Asset", normalBalance: "Debit" },
            { number: 1600, name: "Accumulated Depreciation", type: "Asset", normalBalance: "Credit" },
            
            // Liabilities (2000-2999)
            { number: 2000, name: "Accounts Payable", type: "Liability", normalBalance: "Credit" },
            { number: 2100, name: "Accrued Expenses", type: "Liability", normalBalance: "Credit" },
            { number: 2500, name: "Notes Payable", type: "Liability", normalBalance: "Credit" },
            
            // Equity (3000-3999)
            { number: 3000, name: "Owner's Equity", type: "Equity", normalBalance: "Credit" },
            { number: 3100, name: "Retained Earnings", type: "Equity", normalBalance: "Credit" },
            
            // Revenue (4000-4999)
            { number: 4000, name: "Consulting Revenue", type: "Revenue", normalBalance: "Credit" },
            { number: 4100, name: "Project Revenue", type: "Revenue", normalBalance: "Credit" },
            { number: 4200, name: "Maintenance Revenue", type: "Revenue", normalBalance: "Credit" },
            
            // Expenses (5000-5999)
            { number: 5000, name: "Salaries Expense", type: "Expense", normalBalance: "Debit" },
            { number: 5100, name: "Rent Expense", type: "Expense", normalBalance: "Debit" },
            { number: 5200, name: "Utilities Expense", type: "Expense", normalBalance: "Debit" },
            { number: 5300, name: "Marketing Expense", type: "Expense", normalBalance: "Debit" },
            { number: 5400, name: "Office Supplies", type: "Expense", normalBalance: "Debit" },
            { number: 5500, name: "Software Subscriptions", type: "Expense", normalBalance: "Debit" },
            { number: 5600, name: "Travel Expense", type: "Expense", normalBalance: "Debit" },
            { number: 5700, name: "Professional Services", type: "Expense", normalBalance: "Debit" }
        ];
        
        // Add industry-specific accounts
        company.revenueAccounts.forEach((account, index) => {
            if (!baseAccounts.find(a => a.name === account)) {
                baseAccounts.push({
                    number: 4300 + (index * 10),
                    name: account,
                    type: "Revenue",
                    normalBalance: "Credit"
                });
            }
        });
        
        return baseAccounts.sort((a, b) => a.number - b.number);
    }
    
    generateFinancialStatementData(transactions, chartOfAccounts) {
        const balances = {};
        
        // Initialize all accounts with zero balance
        chartOfAccounts.forEach(account => {
            balances[account.name] = 0;
        });
        
        // Process transactions to calculate balances
        transactions.forEach(transaction => {
            if (transaction.type === 'revenue') {
                // Revenue increases with credits, so add to balance
                balances[transaction.account] = (balances[transaction.account] || 0) + transaction.debit;
                balances["Cash - Operating"] = (balances["Cash - Operating"] || 0) + transaction.debit;
            } else if (transaction.type === 'expense') {
                // Expenses increase with debits, so add to balance  
                balances[transaction.account] = (balances[transaction.account] || 0) + transaction.credit;
                balances["Cash - Operating"] = (balances["Cash - Operating"] || 0) - transaction.credit;
            }
        });
        
        return balances;
    }
    
    // ===================================
    // Exercise Generation
    // ===================================
    
    generateJournalEntryExercise(difficulty = 'beginner') {
        const company = this.generateCompanyProfile();
        
        const scenarios = {
            beginner: [
                {
                    description: "Received $2,500 cash for consulting services",
                    solution: [
                        { account: "Cash", debit: 2500, credit: 0 },
                        { account: "Consulting Revenue", debit: 0, credit: 2500 }
                    ]
                },
                {
                    description: "Paid $800 for office rent",
                    solution: [
                        { account: "Rent Expense", debit: 800, credit: 0 },
                        { account: "Cash", debit: 0, credit: 800 }
                    ]
                }
            ],
            intermediate: [
                {
                    description: "Purchased equipment for $5,000: paid $2,000 cash and signed a note for the remainder",
                    solution: [
                        { account: "Equipment", debit: 5000, credit: 0 },
                        { account: "Cash", debit: 0, credit: 2000 },
                        { account: "Notes Payable", debit: 0, credit: 3000 }
                    ]
                }
            ],
            advanced: [
                {
                    description: "Recorded monthly depreciation of $500 on equipment",
                    solution: [
                        { account: "Depreciation Expense", debit: 500, credit: 0 },
                        { account: "Accumulated Depreciation", debit: 0, credit: 500 }
                    ]
                }
            ]
        };
        
        const scenario = this.randomChoice(scenarios[difficulty]);
        
        return {
            company: company.name,
            industry: company.industry,
            scenario: scenario.description,
            solution: scenario.solution,
            hints: this.generateHints(scenario),
            difficulty: difficulty
        };
    }
    
    generateTrialBalanceExercise() {
        const company = this.generateCompanyProfile();
        const chartOfAccounts = this.generateChartOfAccounts(company);
        const transactions = this.generateTransactionData(company, 1, 15);
        const balances = this.generateFinancialStatementData(transactions, chartOfAccounts);
        
        // Introduce intentional errors for student to find
        const errors = this.introduceTrialBalanceErrors(balances);
        
        return {
            company: company.name,
            chartOfAccounts: chartOfAccounts,
            transactions: transactions,
            balancesWithErrors: errors.balances,
            errors: errors.errorList,
            correctBalances: balances
        };
    }
    
    // ===================================
    // Utility Functions
    // ===================================
    
    randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    weightedRandomChoice(items) {
        const totalWeight = items.reduce((sum, item) => sum + (item.weight || 1), 0);
        let random = Math.random() * totalWeight;
        
        for (const item of items) {
            random -= (item.weight || 1);
            if (random <= 0) return item;
        }
        
        return items[items.length - 1];
    }
    
    generateFoundedDate() {
        const currentYear = new Date().getFullYear();
        const year = currentYear - Math.floor(Math.random() * 3); // 0-3 years ago
        const month = Math.floor(Math.random() * 12) + 1;
        return `${month}/${year}`;
    }
    
    selectFounders(min, max) {
        const count = Math.floor(Math.random() * (max - min + 1)) + min;
        const shuffled = [...COMPANY_DATA.founders].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    randomDateInMonth(baseDate) {
        const year = baseDate.getFullYear();
        const month = baseDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const day = Math.floor(Math.random() * daysInMonth) + 1;
        return new Date(year, month, day);
    }
    
    generateClientName() {
        const clients = [
            "Acme Corp", "Global Industries", "Metro Solutions", "Peak Performance",
            "Summit Enterprises", "Apex Holdings", "Vertex Systems", "Prime Technologies",
            "Core Dynamics", "Elite Consulting", "Foundation Partners", "Bridge Solutions"
        ];
        return this.randomChoice(clients);
    }
    
    generateHints(scenario) {
        return [
            "Remember: every transaction affects at least two accounts",
            "Check that your debits equal your credits",
            "Think about what the business is receiving vs. what it's giving up"
        ];
    }
    
    introduceTrialBalanceErrors(balances) {
        const errorTypes = [
            "transposition", // 1,234 becomes 1,324
            "omission",      // Missing an entry
            "commission",    // Wrong account
            "amount"         // Wrong amount
        ];
        
        const errorList = [];
        const modifiedBalances = { ...balances };
        
        // Introduce 2-3 errors
        const numErrors = Math.floor(Math.random() * 2) + 2;
        
        for (let i = 0; i < numErrors; i++) {
            const errorType = this.randomChoice(errorTypes);
            const accountNames = Object.keys(balances);
            const account = this.randomChoice(accountNames);
            const originalAmount = balances[account];
            
            switch (errorType) {
                case "transposition":
                    const digits = originalAmount.toString().split('');
                    if (digits.length >= 2) {
                        [digits[0], digits[1]] = [digits[1], digits[0]];
                        modifiedBalances[account] = parseFloat(digits.join(''));
                        errorList.push(`Transposition error in ${account}`);
                    }
                    break;
                    
                case "amount":
                    modifiedBalances[account] = originalAmount * (Math.random() * 0.4 + 0.8); // 80-120% of original
                    errorList.push(`Incorrect amount in ${account}`);
                    break;
            }
        }
        
        return {
            balances: modifiedBalances,
            errorList: errorList
        };
    }
}

// ===================================
// Export and Initialize
// ===================================

const financialGenerator = new FinancialDataGenerator();

window.FinancialDataGenerator = {
    generator: financialGenerator,
    generateCompany: (stage) => financialGenerator.generateCompanyProfile(stage),
    generateTransactions: (company, months, count) => financialGenerator.generateTransactionData(company, months, count),
    generateChartOfAccounts: (company) => financialGenerator.generateChartOfAccounts(company),
    generateJournalExercise: (difficulty) => financialGenerator.generateJournalEntryExercise(difficulty),
    generateTrialBalanceExercise: () => financialGenerator.generateTrialBalanceExercise()
};

function initializeFinancialGenerator() {
    console.log('Financial Data Generator initialized');
    
    // Add generator controls to relevant pages
    addGeneratorControls();
}

function addGeneratorControls() {
    const controls = document.createElement('div');
    controls.className = 'financial-generator-controls';
    controls.innerHTML = `
        <div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 1rem; margin: 1rem 0;">
            <h4 style="margin: 0 0 1rem 0; color: #495057;">🎲 Generate New Scenario</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button onclick="generateNewCompany()" class="btn btn-secondary">New Company</button>
                <button onclick="generateNewExercise()" class="btn btn-secondary">New Exercise</button>
                <button onclick="resetToDefault()" class="btn btn-secondary">Reset</button>
            </div>
        </div>
    `;
    
    const exerciseContainer = document.querySelector('.dynamic-exercise');
    if (exerciseContainer) {
        exerciseContainer.insertBefore(controls, exerciseContainer.firstChild);
    }
}

// Global functions for button clicks
window.generateNewCompany = function() {
    const company = financialGenerator.generateCompanyProfile();
    displayCompanyInfo(company);
};

window.generateNewExercise = function() {
    const exercise = financialGenerator.generateJournalEntryExercise('beginner');
    displayExercise(exercise);
};

window.resetToDefault = function() {
    location.reload();
};

function displayCompanyInfo(company) {
    // Implementation would update the page with new company data
    console.log('Generated company:', company);
}

function displayExercise(exercise) {
    // Implementation would update the page with new exercise
    console.log('Generated exercise:', exercise);
}