// ===================================
// Month-End Automation Wizard
// For Unit 2: Month-End Wizard
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeMonthEndWizards();
});

let wizardInstances = {};

// ===================================
// System Initialization
// ===================================

function initializeMonthEndWizards() {
    const containers = document.querySelectorAll('.month-end-wizard');
    
    containers.forEach((container, index) => {
        const wizardId = container.dataset.id || `wizard-${index}`;
        const scenario = container.dataset.scenario || 'techstart_month1';
        
        createMonthEndWizard(container, wizardId, scenario);
    });
}

class MonthEndWizard {
    constructor(container, id, scenario = 'techstart_month1') {
        this.container = container;
        this.id = id;
        this.scenario = scenario;
        
        this.scenarios = {
            techstart_month1: {
                title: "TechStart Solutions - January Month-End",
                description: "Process Sarah's first month-end closing for TechStart Solutions",
                transactions: [
                    { date: "Jan 31", description: "Accrued consulting revenue", amount: 2500, type: "revenue_accrual" },
                    { date: "Jan 31", description: "Prepaid insurance expires", amount: 200, type: "prepaid_expense" },
                    { date: "Jan 31", description: "Depreciation on equipment", amount: 150, type: "depreciation" },
                    { date: "Jan 31", description: "Interest earned on savings", amount: 25, type: "accrued_income" },
                    { date: "Jan 31", description: "Unearned revenue earned", amount: 1000, type: "deferred_revenue" }
                ],
                complexity: "beginner"
            },
            techstart_month2: {
                title: "TechStart Solutions - February Month-End",
                description: "More complex month-end with multiple adjustments and automation",
                transactions: [
                    { date: "Feb 28", description: "Accrued wages payable", amount: 3200, type: "accrued_expense" },
                    { date: "Feb 28", description: "Bad debt provision", amount: 180, type: "bad_debt" },
                    { date: "Feb 28", description: "Inventory shrinkage", amount: 95, type: "inventory_adjustment" },
                    { date: "Feb 28", description: "Accrued utilities", amount: 340, type: "accrued_expense" },
                    { date: "Feb 28", description: "Rent allocation", amount: 1200, type: "allocation" },
                    { date: "Feb 28", description: "Contract revenue recognition", amount: 4500, type: "revenue_recognition" }
                ],
                complexity: "intermediate"
            },
            quarterly_close: {
                title: "TechStart Solutions - Q1 Quarterly Close",
                description: "Advanced quarterly close with comprehensive adjustments",
                transactions: [
                    { date: "Mar 31", description: "Tax provision calculation", amount: 2800, type: "tax_provision" },
                    { date: "Mar 31", description: "Bonus accrual", amount: 1500, type: "bonus_accrual" },
                    { date: "Mar 31", description: "Foreign exchange adjustment", amount: 320, type: "fx_adjustment" },
                    { date: "Mar 31", description: "Restructuring reserves", amount: 5000, type: "restructuring" },
                    { date: "Mar 31", description: "Goodwill impairment test", amount: 0, type: "impairment_test" }
                ],
                complexity: "advanced"
            }
        };
        
        this.currentScenario = this.scenarios[scenario];
        this.currentStep = 0;
        this.completedSteps = [];
        this.automationLevel = 0; // 0 = manual, 1 = semi-auto, 2 = full-auto
        
        this.steps = [
            { 
                id: 'data_validation', 
                title: 'Data Validation', 
                description: 'Review and validate all transaction data',
                automated: false 
            },
            { 
                id: 'adjusting_entries', 
                title: 'Adjusting Entries', 
                description: 'Create necessary adjusting journal entries',
                automated: false 
            },
            { 
                id: 'trial_balance', 
                title: 'Adjusted Trial Balance', 
                description: 'Generate and review adjusted trial balance',
                automated: true 
            },
            { 
                id: 'financial_statements', 
                title: 'Financial Statements', 
                description: 'Prepare month-end financial statements',
                automated: true 
            },
            { 
                id: 'closing_entries', 
                title: 'Closing Entries', 
                description: 'Post closing entries and finalize the period',
                automated: true 
            },
            { 
                id: 'reporting', 
                title: 'Management Reporting', 
                description: 'Generate management reports and analytics',
                automated: true 
            }
        ];
        
        this.timeTracking = {
            startTime: null,
            stepTimes: {},
            totalTime: 0,
            automationSavings: 0
        };
        
        this.init();
    }
    
    init() {
        this.createHTML();
        this.setupEventListeners();
        this.updateDisplay();
        this.startTimeTracking();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="month-end-wizard" id="${this.id}">
                <div class="wizard-header">
                    <h3>📊 Month-End Automation Wizard</h3>
                    <p>Experience the power of automation in month-end closing processes</p>
                </div>
                
                <div class="scenario-info">
                    <h4>${this.currentScenario.title}</h4>
                    <p>${this.currentScenario.description}</p>
                    <div class="scenario-stats">
                        <span class="stat"><strong>Transactions:</strong> ${this.currentScenario.transactions.length}</span>
                        <span class="stat"><strong>Complexity:</strong> ${this.currentScenario.complexity}</span>
                        <span class="stat"><strong>Automation Level:</strong> <span id="automation-level-${this.id}">Manual</span></span>
                    </div>
                </div>
                
                <div class="automation-controls">
                    <label for="automation-select-${this.id}">Choose Automation Level:</label>
                    <select id="automation-select-${this.id}" class="automation-select">
                        <option value="0">Manual Process</option>
                        <option value="1">Semi-Automated</option>
                        <option value="2">Fully Automated</option>
                    </select>
                    <button class="start-wizard-btn" onclick="startWizardProcess('${this.id}')">Start Month-End Process</button>
                </div>
                
                <div class="wizard-progress">
                    <h4>Process Steps</h4>
                    <div class="progress-timeline" id="timeline-${this.id}">
                        ${this.generateTimelineHTML()}
                    </div>
                </div>
                
                <div class="current-step-container">
                    <div class="step-content" id="step-content-${this.id}">
                        <!-- Current step content will be displayed here -->
                    </div>
                </div>
                
                <div class="wizard-controls">
                    <button class="wizard-btn prev-btn" onclick="previousStep('${this.id}')" disabled>⬅️ Previous</button>
                    <button class="wizard-btn next-btn" onclick="nextStep('${this.id}')" disabled>Next ➡️</button>
                    <button class="wizard-btn auto-btn" onclick="runAutomation('${this.id}')" style="display: none;">🤖 Run Automation</button>
                </div>
                
                <div class="efficiency-metrics">
                    <h4>Process Efficiency</h4>
                    <div class="metrics-grid">
                        <div class="metric-card">
                            <div class="metric-value" id="time-taken-${this.id}">0:00</div>
                            <div class="metric-label">Time Taken</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value" id="time-saved-${this.id}">0:00</div>
                            <div class="metric-label">Time Saved</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value" id="accuracy-score-${this.id}">100%</div>
                            <div class="metric-label">Accuracy</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value" id="efficiency-gain-${this.id}">0%</div>
                            <div class="metric-label">Efficiency Gain</div>
                        </div>
                    </div>
                </div>
                
                <div class="vba-showcase" style="display: none;">
                    <h4>VBA Automation Preview</h4>
                    <div class="code-preview">
                        <pre id="vba-code-${this.id}"></pre>
                    </div>
                    <div class="automation-benefits">
                        <h5>Benefits of Automation:</h5>
                        <ul id="benefits-list-${this.id}"></ul>
                    </div>
                </div>
                
                <div class="learning-reflection">
                    <h4>Learning Check</h4>
                    <div class="reflection-question">
                        <p>How does automation change the role of an accountant in the month-end process?</p>
                        <textarea class="reflection-input" placeholder="Share your thoughts on automation's impact..."></textarea>
                        <button class="reflection-btn" onclick="submitReflection('${this.id}')">Submit Reflection</button>
                    </div>
                </div>
            </div>
        `;
        
        this.addStyles();
    }
    
    generateTimelineHTML() {
        return this.steps.map((step, index) => `
            <div class="timeline-step ${index === 0 ? 'current' : ''}" data-step="${index}">
                <div class="step-number">${index + 1}</div>
                <div class="step-info">
                    <div class="step-title">${step.title}</div>
                    <div class="step-description">${step.description}</div>
                    <div class="automation-indicator ${step.automated ? 'automated' : 'manual'}">
                        ${step.automated ? '🤖 Automated' : '👤 Manual'}
                    </div>
                </div>
                <div class="step-status">⏳</div>
            </div>
        `).join('');
    }
    
    setupEventListeners() {
        const container = this.container;
        
        // Automation level selection
        const automationSelect = container.querySelector(`#automation-select-${this.id}`);
        automationSelect.addEventListener('change', (e) => {
            this.setAutomationLevel(parseInt(e.target.value));
        });
    }
    
    setAutomationLevel(level) {
        this.automationLevel = level;
        const levelNames = ['Manual', 'Semi-Automated', 'Fully Automated'];
        
        const levelDisplay = this.container.querySelector(`#automation-level-${this.id}`);
        levelDisplay.textContent = levelNames[level];
        
        // Update step automation based on level
        this.updateStepAutomation();
        this.updateTimelineDisplay();
    }
    
    updateStepAutomation() {
        this.steps.forEach((step, index) => {
            if (this.automationLevel === 2) { // Fully automated
                step.automated = true;
            } else if (this.automationLevel === 1) { // Semi-automated
                step.automated = index >= 2; // Automate last 4 steps
            } else { // Manual
                step.automated = false;
            }
        });
    }
    
    updateTimelineDisplay() {
        const timeline = this.container.querySelector(`#timeline-${this.id}`);
        timeline.innerHTML = this.generateTimelineHTML();
        
        // Mark completed steps
        this.completedSteps.forEach(stepIndex => {
            const stepElement = timeline.querySelector(`[data-step="${stepIndex}"]`);
            if (stepElement) {
                stepElement.classList.add('completed');
                stepElement.querySelector('.step-status').textContent = '✅';
            }
        });
        
        // Mark current step
        if (this.currentStep < this.steps.length) {
            const currentStepElement = timeline.querySelector(`[data-step="${this.currentStep}"]`);
            if (currentStepElement) {
                currentStepElement.classList.add('current');
            }
        }
    }
    
    updateDisplay() {
        this.updateTimelineDisplay();
        this.displayCurrentStep();
        this.updateControls();
        this.updateMetrics();
    }
    
    displayCurrentStep() {
        const stepContent = this.container.querySelector(`#step-content-${this.id}`);
        
        if (this.currentStep >= this.steps.length) {
            this.displayCompletion();
            return;
        }
        
        const step = this.steps[this.currentStep];
        let content = '';
        
        switch (step.id) {
            case 'data_validation':
                content = this.generateDataValidationContent();
                break;
            case 'adjusting_entries':
                content = this.generateAdjustingEntriesContent();
                break;
            case 'trial_balance':
                content = this.generateTrialBalanceContent();
                break;
            case 'financial_statements':
                content = this.generateFinancialStatementsContent();
                break;
            case 'closing_entries':
                content = this.generateClosingEntriesContent();
                break;
            case 'reporting':
                content = this.generateReportingContent();
                break;
            default:
                content = '<p>Step content not available.</p>';
        }
        
        stepContent.innerHTML = `
            <div class="step-header">
                <h4>${step.title}</h4>
                <p>${step.description}</p>
                ${step.automated ? '<div class="automation-badge">🤖 Automated Process</div>' : '<div class="manual-badge">👤 Manual Process</div>'}
            </div>
            <div class="step-body">
                ${content}
            </div>
        `;
    }
    
    generateDataValidationContent() {
        return `
            <div class="data-validation-step">
                <h5>Transaction Data Review</h5>
                <div class="validation-checklist">
                    <div class="validation-item">
                        <input type="checkbox" id="val-completeness" class="validation-check">
                        <label for="val-completeness">All transactions for the period are recorded</label>
                    </div>
                    <div class="validation-item">
                        <input type="checkbox" id="val-accuracy" class="validation-check">
                        <label for="val-accuracy">Account classifications are accurate</label>
                    </div>
                    <div class="validation-item">
                        <input type="checkbox" id="val-cutoff" class="validation-check">
                        <label for="val-cutoff">Cutoff procedures properly applied</label>
                    </div>
                    <div class="validation-item">
                        <input type="checkbox" id="val-supporting" class="validation-check">
                        <label for="val-supporting">Supporting documentation is complete</label>
                    </div>
                </div>
                
                <div class="transaction-preview">
                    <h6>Transactions Requiring Adjustment:</h6>
                    <div class="transaction-list">
                        ${this.currentScenario.transactions.map(transaction => `
                            <div class="transaction-item">
                                <span class="transaction-date">${transaction.date}</span>
                                <span class="transaction-description">${transaction.description}</span>
                                <span class="transaction-amount">$${transaction.amount.toLocaleString()}</span>
                                <span class="transaction-type">${this.formatTransactionType(transaction.type)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    generateAdjustingEntriesContent() {
        const transaction = this.currentScenario.transactions[0]; // Focus on first transaction for demo
        
        return `
            <div class="adjusting-entries-step">
                <h5>Create Adjusting Entries</h5>
                <div class="entry-builder">
                    <div class="transaction-focus">
                        <h6>Current Transaction: ${transaction.description}</h6>
                        <p>Amount: $${transaction.amount.toLocaleString()}</p>
                        <p>Type: ${this.formatTransactionType(transaction.type)}</p>
                    </div>
                    
                    <div class="journal-entry-builder">
                        <h6>Journal Entry:</h6>
                        <div class="entry-table">
                            <table class="adjustment-table">
                                <tr>
                                    <th>Account</th>
                                    <th>Debit</th>
                                    <th>Credit</th>
                                </tr>
                                ${this.generateAdjustingEntryRows(transaction)}
                            </table>
                        </div>
                    </div>
                    
                    <div class="automation-preview" style="display: ${this.steps[this.currentStep].automated ? 'block' : 'none'};">
                        <h6>🤖 Automation in Action:</h6>
                        <p>The system automatically identifies adjustment patterns and suggests appropriate journal entries based on historical data and business rules.</p>
                        <div class="vba-snippet">
                            <pre>Sub CreateAdjustingEntries()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    ' Automated adjustment for ${transaction.type}
    ws.Range("A1").Value = "${this.getDebitAccount(transaction.type)}"
    ws.Range("B1").Value = ${transaction.amount}
    ws.Range("A2").Value = "${this.getCreditAccount(transaction.type)}"
    ws.Range("C2").Value = ${transaction.amount}
End Sub</pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateTrialBalanceContent() {
        return `
            <div class="trial-balance-step">
                <h5>Adjusted Trial Balance</h5>
                <div class="automated-process" style="display: ${this.steps[this.currentStep].automated ? 'block' : 'none'};">
                    <div class="automation-progress">
                        <div class="progress-item completed">
                            <span class="progress-icon">✅</span>
                            <span class="progress-text">Calculating account balances...</span>
                        </div>
                        <div class="progress-item completed">
                            <span class="progress-icon">✅</span>
                            <span class="progress-text">Applying adjusting entries...</span>
                        </div>
                        <div class="progress-item in-progress">
                            <span class="progress-icon">⏳</span>
                            <span class="progress-text">Generating trial balance...</span>
                        </div>
                    </div>
                </div>
                
                <div class="trial-balance-table">
                    <h6>TechStart Solutions - Adjusted Trial Balance</h6>
                    <table class="balance-table">
                        <tr>
                            <th>Account</th>
                            <th>Debit</th>
                            <th>Credit</th>
                        </tr>
                        <tr><td>Cash</td><td>$15,250</td><td></td></tr>
                        <tr><td>Accounts Receivable</td><td>$8,750</td><td></td></tr>
                        <tr><td>Prepaid Insurance</td><td>$2,200</td><td></td></tr>
                        <tr><td>Equipment</td><td>$12,000</td><td></td></tr>
                        <tr><td>Accumulated Depreciation</td><td></td><td>$450</td></tr>
                        <tr><td>Accounts Payable</td><td></td><td>$3,200</td></tr>
                        <tr><td>Unearned Revenue</td><td></td><td>$2,000</td></tr>
                        <tr><td>Owner's Equity</td><td></td><td>$25,000</td></tr>
                        <tr><td>Consulting Revenue</td><td></td><td>$12,500</td></tr>
                        <tr><td>Rent Expense</td><td>$2,400</td><td></td></tr>
                        <tr><td>Insurance Expense</td><td>$200</td><td></td></tr>
                        <tr><td>Depreciation Expense</td><td>$150</td><td></td></tr>
                        <tr><td>Interest Income</td><td></td><td>$25</td></tr>
                        <tr class="total-row">
                            <td><strong>TOTALS</strong></td>
                            <td><strong>$40,950</strong></td>
                            <td><strong>$40,950</strong></td>
                        </tr>
                    </table>
                </div>
                
                <div class="balance-verification">
                    <div class="verification-result success">
                        <span class="result-icon">✅</span>
                        <span class="result-text">Trial balance is in balance!</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateFinancialStatementsContent() {
        return `
            <div class="financial-statements-step">
                <h5>Financial Statement Generation</h5>
                <div class="automated-process" style="display: ${this.steps[this.currentStep].automated ? 'block' : 'none'};">
                    <p>🤖 <strong>Full Automation:</strong> Financial statements are automatically generated from the adjusted trial balance using predefined templates and account mapping rules.</p>
                </div>
                
                <div class="statement-tabs">
                    <button class="statement-tab active" data-statement="income">Income Statement</button>
                    <button class="statement-tab" data-statement="balance">Balance Sheet</button>
                    <button class="statement-tab" data-statement="cash">Cash Flow</button>
                </div>
                
                <div class="statement-content">
                    <div class="statement income-statement active">
                        <h6>TechStart Solutions - Income Statement</h6>
                        <table class="statement-table">
                            <tr><td>Revenue:</td><td></td></tr>
                            <tr><td>&nbsp;&nbsp;Consulting Revenue</td><td>$12,500</td></tr>
                            <tr><td>&nbsp;&nbsp;Interest Income</td><td>$25</td></tr>
                            <tr><td><strong>Total Revenue</strong></td><td><strong>$12,525</strong></td></tr>
                            <tr><td>Expenses:</td><td></td></tr>
                            <tr><td>&nbsp;&nbsp;Rent Expense</td><td>$2,400</td></tr>
                            <tr><td>&nbsp;&nbsp;Insurance Expense</td><td>$200</td></tr>
                            <tr><td>&nbsp;&nbsp;Depreciation Expense</td><td>$150</td></tr>
                            <tr><td><strong>Total Expenses</strong></td><td><strong>$2,750</strong></td></tr>
                            <tr class="net-income"><td><strong>Net Income</strong></td><td><strong>$9,775</strong></td></tr>
                        </table>
                    </div>
                </div>
                
                <div class="automation-insights">
                    <h6>Automation Benefits:</h6>
                    <ul>
                        <li><strong>Speed:</strong> Statements generated in seconds vs. hours</li>
                        <li><strong>Accuracy:</strong> Eliminates manual calculation errors</li>
                        <li><strong>Consistency:</strong> Standardized formatting and presentation</li>
                        <li><strong>Real-time:</strong> Updates automatically when data changes</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    generateClosingEntriesContent() {
        return `
            <div class="closing-entries-step">
                <h5>Closing Entries</h5>
                <div class="automated-process" style="display: ${this.steps[this.currentStep].automated ? 'block' : 'none'};">
                    <p>🤖 <strong>Automated Closing Process:</strong> Revenue and expense accounts are automatically closed to retained earnings with predefined closing entry templates.</p>
                </div>
                
                <div class="closing-sequence">
                    <h6>Automated Closing Sequence:</h6>
                    <div class="closing-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h7>Close Revenue Accounts</h7>
                            <div class="closing-entry">
                                <table class="mini-table">
                                    <tr><td>Consulting Revenue</td><td>$12,500</td><td></td></tr>
                                    <tr><td>Interest Income</td><td>$25</td><td></td></tr>
                                    <tr><td>Income Summary</td><td></td><td>$12,525</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="closing-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h7>Close Expense Accounts</h7>
                            <div class="closing-entry">
                                <table class="mini-table">
                                    <tr><td>Income Summary</td><td>$2,750</td><td></td></tr>
                                    <tr><td>Rent Expense</td><td></td><td>$2,400</td></tr>
                                    <tr><td>Insurance Expense</td><td></td><td>$200</td></tr>
                                    <tr><td>Depreciation Expense</td><td></td><td>$150</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="closing-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h7>Close Income Summary</h7>
                            <div class="closing-entry">
                                <table class="mini-table">
                                    <tr><td>Income Summary</td><td>$9,775</td><td></td></tr>
                                    <tr><td>Retained Earnings</td><td></td><td>$9,775</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="vba-automation">
                    <h6>VBA Automation Code:</h6>
                    <pre>Sub AutomatedClosingEntries()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    ' Close all revenue accounts
    Call CloseRevenueAccounts()
    
    ' Close all expense accounts  
    Call CloseExpenseAccounts()
    
    ' Close income summary
    Call CloseIncomeSummary()
    
    MsgBox "Closing entries completed automatically!"
End Sub</pre>
                </div>
            </div>
        `;
    }
    
    generateReportingContent() {
        return `
            <div class="reporting-step">
                <h5>Management Reporting & Analytics</h5>
                <div class="automated-process" style="display: ${this.steps[this.currentStep].automated ? 'block' : 'none'};">
                    <p>🤖 <strong>Intelligent Reporting:</strong> Management reports and KPIs are automatically calculated and formatted for executive review.</p>
                </div>
                
                <div class="kpi-dashboard">
                    <h6>Key Performance Indicators</h6>
                    <div class="kpi-grid">
                        <div class="kpi-card">
                            <div class="kpi-value">$12,525</div>
                            <div class="kpi-label">Monthly Revenue</div>
                            <div class="kpi-change positive">+25%</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">$9,775</div>
                            <div class="kpi-label">Net Income</div>
                            <div class="kpi-change positive">+78%</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">78%</div>
                            <div class="kpi-label">Profit Margin</div>
                            <div class="kpi-change positive">+12%</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-value">1.2</div>
                            <div class="kpi-label">Current Ratio</div>
                            <div class="kpi-change stable">0%</div>
                        </div>
                    </div>
                </div>
                
                <div class="executive-summary">
                    <h6>Executive Summary (Auto-Generated)</h6>
                    <div class="summary-content">
                        <p><strong>Financial Performance:</strong> TechStart Solutions achieved strong performance in January with revenue of $12,525 and net income of $9,775, representing a healthy 78% profit margin.</p>
                        
                        <p><strong>Key Highlights:</strong></p>
                        <ul>
                            <li>Revenue growth driven by new consulting contracts</li>
                            <li>Controlled expense management maintaining high profitability</li>
                            <li>Strong cash position supporting future growth</li>
                            <li>Depreciation and insurance properly allocated</li>
                        </ul>
                        
                        <p><strong>Recommendations:</strong></p>
                        <ul>
                            <li>Continue investment in automation tools to scale operations</li>
                            <li>Monitor accounts receivable collection closely</li>
                            <li>Consider expanding service offerings based on strong margins</li>
                        </ul>
                    </div>
                </div>
                
                <div class="automation-impact">
                    <h6>Automation Impact Analysis</h6>
                    <div class="impact-metrics">
                        <div class="impact-item">
                            <span class="impact-label">Time Savings:</span>
                            <span class="impact-value">85% reduction (from 8 hours to 1.2 hours)</span>
                        </div>
                        <div class="impact-item">
                            <span class="impact-label">Error Reduction:</span>
                            <span class="impact-value">95% fewer manual errors</span>
                        </div>
                        <div class="impact-item">
                            <span class="impact-label">Cost Savings:</span>
                            <span class="impact-value">$2,400 monthly in reduced labor costs</span>
                        </div>
                        <div class="impact-item">
                            <span class="impact-label">Reporting Speed:</span>
                            <span class="impact-value">Real-time vs. 3-day delay</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    displayCompletion() {
        const stepContent = this.container.querySelector(`#step-content-${this.id}`);
        const totalTime = this.calculateTotalTime();
        const timeSaved = this.calculateTimeSaved();
        const efficiencyGain = this.calculateEfficiencyGain();
        
        stepContent.innerHTML = `
            <div class="completion-content">
                <div class="completion-header">
                    <h4>🎉 Month-End Process Complete!</h4>
                    <p>Congratulations! You've successfully completed the month-end closing process.</p>
                </div>
                
                <div class="completion-summary">
                    <h5>Process Summary</h5>
                    <div class="summary-stats">
                        <div class="stat-item">
                            <span class="stat-label">Total Time:</span>
                            <span class="stat-value">${totalTime}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Time Saved:</span>
                            <span class="stat-value">${timeSaved}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Efficiency Gain:</span>
                            <span class="stat-value">${efficiencyGain}%</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Automation Level:</span>
                            <span class="stat-value">${['Manual', 'Semi-Automated', 'Fully Automated'][this.automationLevel]}</span>
                        </div>
                    </div>
                </div>
                
                <div class="key-learnings">
                    <h5>Key Learning Outcomes</h5>
                    <ul>
                        <li><strong>Process Understanding:</strong> Experienced the complete month-end workflow</li>
                        <li><strong>Automation Benefits:</strong> Witnessed time and accuracy improvements</li>
                        <li><strong>Error Prevention:</strong> Saw how automation reduces manual errors</li>
                        <li><strong>Scalability:</strong> Understood how automation enables business growth</li>
                        <li><strong>Strategic Value:</strong> Learned how automation frees time for analysis</li>
                    </ul>
                </div>
                
                <div class="next-steps">
                    <h5>What's Next for Sarah?</h5>
                    <p>With automated month-end processes in place, Sarah can now:</p>
                    <ul>
                        <li>Focus on business analysis and strategic planning</li>
                        <li>Provide real-time financial insights to clients</li>
                        <li>Scale her consulting services efficiently</li>
                        <li>Invest time in growing her business rather than manual tasks</li>
                    </ul>
                </div>
            </div>
        `;
        
        // Award completion points
        if (window.awardPoints) {
            const points = this.automationLevel === 2 ? 75 : this.automationLevel === 1 ? 60 : 45;
            window.awardPoints(points, `Month-end wizard completed (${['Manual', 'Semi-Auto', 'Full Auto'][this.automationLevel]})`);
        }
    }
    
    updateControls() {
        const prevBtn = this.container.querySelector('.prev-btn');
        const nextBtn = this.container.querySelector('.next-btn');
        const autoBtn = this.container.querySelector('.auto-btn');
        
        prevBtn.disabled = this.currentStep === 0;
        nextBtn.disabled = this.currentStep >= this.steps.length;
        
        if (this.currentStep < this.steps.length && this.steps[this.currentStep].automated) {
            autoBtn.style.display = 'inline-block';
            nextBtn.disabled = true;
        } else {
            autoBtn.style.display = 'none';
        }
    }
    
    updateMetrics() {
        const timeTaken = this.container.querySelector(`#time-taken-${this.id}`);
        const timeSaved = this.container.querySelector(`#time-saved-${this.id}`);
        const accuracyScore = this.container.querySelector(`#accuracy-score-${this.id}`);
        const efficiencyGain = this.container.querySelector(`#efficiency-gain-${this.id}`);
        
        if (timeTaken) timeTaken.textContent = this.calculateTotalTime();
        if (timeSaved) timeSaved.textContent = this.calculateTimeSaved();
        if (accuracyScore) accuracyScore.textContent = this.calculateAccuracy();
        if (efficiencyGain) efficiencyGain.textContent = this.calculateEfficiencyGain() + '%';
    }
    
    // Utility methods for calculations and formatting
    formatTransactionType(type) {
        const typeMap = {
            revenue_accrual: 'Revenue Accrual',
            prepaid_expense: 'Prepaid Expense',
            depreciation: 'Depreciation',
            accrued_income: 'Accrued Income',
            deferred_revenue: 'Deferred Revenue',
            accrued_expense: 'Accrued Expense',
            bad_debt: 'Bad Debt Provision',
            inventory_adjustment: 'Inventory Adjustment',
            allocation: 'Cost Allocation',
            revenue_recognition: 'Revenue Recognition',
            tax_provision: 'Tax Provision',
            bonus_accrual: 'Bonus Accrual',
            fx_adjustment: 'Foreign Exchange',
            restructuring: 'Restructuring',
            impairment_test: 'Impairment Test'
        };
        return typeMap[type] || type;
    }
    
    getDebitAccount(type) {
        const debitMap = {
            revenue_accrual: 'Accounts Receivable',
            prepaid_expense: 'Insurance Expense',
            depreciation: 'Depreciation Expense',
            accrued_income: 'Interest Receivable',
            deferred_revenue: 'Unearned Revenue'
        };
        return debitMap[type] || 'Account';
    }
    
    getCreditAccount(type) {
        const creditMap = {
            revenue_accrual: 'Consulting Revenue',
            prepaid_expense: 'Prepaid Insurance',
            depreciation: 'Accumulated Depreciation',
            accrued_income: 'Interest Income',
            deferred_revenue: 'Revenue'
        };
        return creditMap[type] || 'Account';
    }
    
    generateAdjustingEntryRows(transaction) {
        const debitAccount = this.getDebitAccount(transaction.type);
        const creditAccount = this.getCreditAccount(transaction.type);
        
        return `
            <tr>
                <td>${debitAccount}</td>
                <td>$${transaction.amount.toLocaleString()}</td>
                <td>—</td>
            </tr>
            <tr>
                <td>${creditAccount}</td>
                <td>—</td>
                <td>$${transaction.amount.toLocaleString()}</td>
            </tr>
        `;
    }
    
    startTimeTracking() {
        this.timeTracking.startTime = Date.now();
    }
    
    calculateTotalTime() {
        if (!this.timeTracking.startTime) return '0:00';
        const elapsed = Date.now() - this.timeTracking.startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    calculateTimeSaved() {
        const manualTime = this.automationLevel === 2 ? 480 : this.automationLevel === 1 ? 240 : 0; // minutes
        const actualTime = this.timeTracking.startTime ? (Date.now() - this.timeTracking.startTime) / 60000 : 0;
        const saved = Math.max(0, manualTime - actualTime);
        const hours = Math.floor(saved / 60);
        const minutes = Math.floor(saved % 60);
        return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }
    
    calculateAccuracy() {
        return this.automationLevel === 2 ? '99.8%' : this.automationLevel === 1 ? '97.5%' : '92.0%';
    }
    
    calculateEfficiencyGain() {
        return this.automationLevel === 2 ? 85 : this.automationLevel === 1 ? 65 : 0;
    }
    
    addStyles() {
        if (document.getElementById('month-end-wizard-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'month-end-wizard-styles';
        styles.textContent = `
            .month-end-wizard {
                max-width: 1200px;
                margin: 20px auto;
                padding: 20px;
                border: 2px solid #8e44ad;
                border-radius: 10px;
                background: #f8f9fa;
            }
            
            .wizard-header {
                text-align: center;
                margin-bottom: 20px;
            }
            
            .wizard-header h3 {
                color: #8e44ad;
                margin: 0;
            }
            
            .scenario-info {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #9b59b6;
            }
            
            .scenario-stats {
                display: flex;
                gap: 20px;
                margin-top: 10px;
                flex-wrap: wrap;
            }
            
            .scenario-stats .stat {
                background: #e8f4f8;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 14px;
            }
            
            .automation-controls {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
                display: flex;
                align-items: center;
                gap: 15px;
                flex-wrap: wrap;
            }
            
            .automation-select {
                padding: 8px 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
            }
            
            .start-wizard-btn {
                background: #8e44ad;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
            }
            
            .start-wizard-btn:hover {
                background: #7d3c98;
            }
            
            .wizard-progress {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
            }
            
            .progress-timeline {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .timeline-step {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 10px;
                border-radius: 6px;
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                transition: all 0.3s ease;
            }
            
            .timeline-step.current {
                background: #e8f4f8;
                border-color: #3498db;
            }
            
            .timeline-step.completed {
                background: #d4edda;
                border-color: #28a745;
            }
            
            .step-number {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #6c757d;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 14px;
            }
            
            .timeline-step.current .step-number {
                background: #3498db;
            }
            
            .timeline-step.completed .step-number {
                background: #28a745;
            }
            
            .step-info {
                flex: 1;
            }
            
            .step-title {
                font-weight: bold;
                color: #2c3e50;
            }
            
            .step-description {
                font-size: 14px;
                color: #6c757d;
                margin-top: 2px;
            }
            
            .automation-indicator {
                font-size: 12px;
                padding: 2px 6px;
                border-radius: 3px;
                margin-top: 4px;
                display: inline-block;
            }
            
            .automation-indicator.automated {
                background: #d1ecf1;
                color: #0c5460;
            }
            
            .automation-indicator.manual {
                background: #fff3cd;
                color: #856404;
            }
            
            .step-status {
                font-size: 18px;
            }
            
            .current-step-container {
                background: white;
                border-radius: 8px;
                margin: 20px 0;
                min-height: 400px;
            }
            
            .step-content {
                padding: 20px;
            }
            
            .step-header {
                border-bottom: 1px solid #e9ecef;
                padding-bottom: 15px;
                margin-bottom: 20px;
            }
            
            .automation-badge {
                background: #d1ecf1;
                color: #0c5460;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                margin-top: 8px;
                display: inline-block;
            }
            
            .manual-badge {
                background: #fff3cd;
                color: #856404;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                margin-top: 8px;
                display: inline-block;
            }
            
            .wizard-controls {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin: 20px 0;
            }
            
            .wizard-btn {
                padding: 10px 20px;
                border: 1px solid #ccc;
                background: white;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .wizard-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .wizard-btn:not(:disabled):hover {
                background: #f8f9fa;
            }
            
            .auto-btn {
                background: #17a2b8;
                color: white;
                border-color: #17a2b8;
            }
            
            .auto-btn:hover {
                background: #138496;
            }
            
            .efficiency-metrics {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
            }
            
            .metrics-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 15px;
                margin-top: 15px;
            }
            
            .metric-card {
                text-align: center;
                padding: 15px;
                border: 1px solid #e9ecef;
                border-radius: 6px;
                background: #f8f9fa;
            }
            
            .metric-value {
                font-size: 24px;
                font-weight: bold;
                color: #8e44ad;
            }
            
            .metric-label {
                font-size: 12px;
                color: #6c757d;
                margin-top: 5px;
            }
            
            .validation-checklist {
                margin: 15px 0;
            }
            
            .validation-item {
                margin: 10px 0;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .validation-check {
                width: 18px;
                height: 18px;
            }
            
            .transaction-preview {
                margin-top: 20px;
                border: 1px solid #e9ecef;
                border-radius: 6px;
                padding: 15px;
            }
            
            .transaction-list {
                margin-top: 10px;
            }
            
            .transaction-item {
                display: grid;
                grid-template-columns: 80px 1fr 100px 120px;
                gap: 10px;
                padding: 8px 0;
                border-bottom: 1px solid #f8f9fa;
                align-items: center;
            }
            
            .transaction-item:last-child {
                border-bottom: none;
            }
            
            .transaction-date {
                font-weight: bold;
                color: #6c757d;
                font-size: 14px;
            }
            
            .transaction-description {
                color: #2c3e50;
            }
            
            .transaction-amount {
                font-weight: bold;
                color: #27ae60;
                text-align: right;
            }
            
            .transaction-type {
                font-size: 12px;
                background: #e9ecef;
                padding: 2px 6px;
                border-radius: 3px;
                text-align: center;
            }
            
            .adjustment-table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }
            
            .adjustment-table th,
            .adjustment-table td {
                border: 1px solid #dee2e6;
                padding: 8px 12px;
                text-align: left;
            }
            
            .adjustment-table th {
                background: #f8f9fa;
                font-weight: bold;
            }
            
            .automation-progress {
                margin: 15px 0;
            }
            
            .progress-item {
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 8px 0;
                padding: 8px;
                border-radius: 4px;
            }
            
            .progress-item.completed {
                background: #d4edda;
            }
            
            .progress-item.in-progress {
                background: #fff3cd;
            }
            
            .progress-icon {
                width: 20px;
                text-align: center;
            }
            
            .balance-table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
                font-family: 'Courier New', monospace;
            }
            
            .balance-table th,
            .balance-table td {
                border: 1px solid #dee2e6;
                padding: 6px 12px;
                text-align: left;
            }
            
            .balance-table th {
                background: #f8f9fa;
                font-weight: bold;
            }
            
            .balance-table td:nth-child(2),
            .balance-table td:nth-child(3) {
                text-align: right;
            }
            
            .total-row {
                border-top: 2px solid #333;
                font-weight: bold;
            }
            
            .verification-result {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px;
                border-radius: 4px;
                margin: 15px 0;
            }
            
            .verification-result.success {
                background: #d4edda;
                color: #155724;
            }
            
            .statement-tabs {
                display: flex;
                gap: 5px;
                margin-bottom: 15px;
            }
            
            .statement-tab {
                padding: 8px 16px;
                border: 1px solid #ccc;
                background: white;
                cursor: pointer;
                border-bottom: none;
                border-radius: 4px 4px 0 0;
            }
            
            .statement-tab.active {
                background: #f8f9fa;
                border-bottom: 1px solid #f8f9fa;
            }
            
            .statement-content {
                border: 1px solid #ccc;
                padding: 20px;
                border-radius: 0 8px 8px 8px;
                background: #f8f9fa;
            }
            
            .statement-table {
                width: 100%;
                border-collapse: collapse;
                font-family: 'Courier New', monospace;
            }
            
            .statement-table td {
                padding: 4px 8px;
                border-bottom: 1px solid #e9ecef;
            }
            
            .statement-table td:last-child {
                text-align: right;
                width: 120px;
            }
            
            .net-income td {
                border-top: 1px solid #333;
                border-bottom: 2px solid #333;
                font-weight: bold;
            }
            
            .automation-insights {
                margin-top: 20px;
                padding: 15px;
                background: #e8f4f8;
                border-radius: 6px;
            }
            
            .closing-sequence {
                margin: 20px 0;
            }
            
            .closing-step {
                display: flex;
                gap: 15px;
                margin: 15px 0;
                padding: 15px;
                border: 1px solid #e9ecef;
                border-radius: 6px;
                background: white;
            }
            
            .closing-step .step-number {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background: #8e44ad;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 12px;
                flex-shrink: 0;
            }
            
            .closing-step .step-content {
                flex: 1;
            }
            
            .mini-table {
                width: 100%;
                border-collapse: collapse;
                font-family: 'Courier New', monospace;
                font-size: 14px;
                margin-top: 8px;
            }
            
            .mini-table td {
                border: 1px solid #dee2e6;
                padding: 4px 8px;
            }
            
            .mini-table td:nth-child(2),
            .mini-table td:nth-child(3) {
                text-align: right;
                width: 80px;
            }
            
            .vba-automation {
                margin: 20px 0;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
                border-left: 4px solid #17a2b8;
            }
            
            .vba-automation pre {
                background: #2c3e50;
                color: #ecf0f1;
                padding: 15px;
                border-radius: 4px;
                overflow-x: auto;
                font-size: 12px;
                margin: 10px 0;
            }
            
            .kpi-dashboard {
                margin: 20px 0;
            }
            
            .kpi-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 15px;
                margin-top: 15px;
            }
            
            .kpi-card {
                text-align: center;
                padding: 20px;
                border: 1px solid #e9ecef;
                border-radius: 8px;
                background: white;
            }
            
            .kpi-value {
                font-size: 28px;
                font-weight: bold;
                color: #2c3e50;
            }
            
            .kpi-label {
                font-size: 14px;
                color: #6c757d;
                margin: 8px 0 4px 0;
            }
            
            .kpi-change {
                font-size: 12px;
                font-weight: bold;
            }
            
            .kpi-change.positive {
                color: #27ae60;
            }
            
            .kpi-change.negative {
                color: #e74c3c;
            }
            
            .kpi-change.stable {
                color: #f39c12;
            }
            
            .executive-summary {
                margin: 20px 0;
                padding: 20px;
                background: white;
                border-radius: 8px;
                border: 1px solid #e9ecef;
            }
            
            .summary-content {
                line-height: 1.6;
            }
            
            .automation-impact {
                margin: 20px 0;
                padding: 15px;
                background: #e8f5e8;
                border-radius: 6px;
                border-left: 4px solid #28a745;
            }
            
            .impact-metrics {
                margin-top: 15px;
            }
            
            .impact-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0;
                border-bottom: 1px solid #d4edda;
            }
            
            .impact-item:last-child {
                border-bottom: none;
            }
            
            .impact-label {
                font-weight: bold;
                color: #2c3e50;
            }
            
            .impact-value {
                color: #27ae60;
                font-weight: bold;
            }
            
            .learning-reflection {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #f39c12;
            }
            
            .reflection-input {
                width: 100%;
                height: 80px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin: 10px 0;
                resize: vertical;
            }
            
            .reflection-btn {
                background: #f39c12;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
            }
            
            .reflection-btn:hover {
                background: #e67e22;
            }
            
            .completion-content {
                text-align: center;
                padding: 20px;
            }
            
            .completion-summary {
                margin: 30px 0;
                padding: 20px;
                background: #e8f5e8;
                border-radius: 8px;
            }
            
            .summary-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 15px;
            }
            
            .stat-item {
                display: flex;
                justify-content: space-between;
                padding: 10px;
                background: white;
                border-radius: 4px;
            }
            
            .stat-label {
                font-weight: bold;
                color: #2c3e50;
            }
            
            .stat-value {
                color: #27ae60;
                font-weight: bold;
            }
            
            .key-learnings,
            .next-steps {
                text-align: left;
                margin: 30px auto;
                max-width: 600px;
                padding: 20px;
                background: white;
                border-radius: 8px;
            }
            
            @media (max-width: 768px) {
                .scenario-stats {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .automation-controls {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .transaction-item {
                    grid-template-columns: 1fr;
                    gap: 5px;
                }
                
                .metrics-grid,
                .kpi-grid {
                    grid-template-columns: 1fr;
                }
                
                .wizard-controls {
                    flex-direction: column;
                }
                
                .closing-step {
                    flex-direction: column;
                    gap: 10px;
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
}

// ===================================
// Utility Functions
// ===================================

function createMonthEndWizard(container, id, scenario) {
    const wizard = new MonthEndWizard(container, id, scenario);
    wizardInstances[id] = wizard;
    return wizard;
}

// ===================================
// Global Functions for Button Clicks
// ===================================

window.startWizardProcess = function(wizardId) {
    const wizard = wizardInstances[wizardId];
    if (wizard) {
        wizard.currentStep = 0;
        wizard.updateDisplay();
        wizard.container.querySelector('.next-btn').disabled = false;
        wizard.startTimeTracking();
        
        // Award points for starting
        if (window.awardPoints) {
            window.awardPoints(10, 'Started month-end automation wizard');
        }
    }
};

window.nextStep = function(wizardId) {
    const wizard = wizardInstances[wizardId];
    if (wizard && wizard.currentStep < wizard.steps.length) {
        wizard.completedSteps.push(wizard.currentStep);
        wizard.currentStep++;
        wizard.updateDisplay();
        
        // Award step completion points
        if (window.awardPoints) {
            window.awardPoints(5, `Completed step: ${wizard.steps[wizard.currentStep - 1].title}`);
        }
    }
};

window.previousStep = function(wizardId) {
    const wizard = wizardInstances[wizardId];
    if (wizard && wizard.currentStep > 0) {
        wizard.currentStep--;
        wizard.completedSteps = wizard.completedSteps.filter(step => step !== wizard.currentStep);
        wizard.updateDisplay();
    }
};

window.runAutomation = function(wizardId) {
    const wizard = wizardInstances[wizardId];
    if (wizard) {
        const currentStepElement = wizard.container.querySelector(`[data-step="${wizard.currentStep}"]`);
        
        // Simulate automation process
        setTimeout(() => {
            wizard.completedSteps.push(wizard.currentStep);
            wizard.currentStep++;
            wizard.updateDisplay();
            
            // Award automation points
            if (window.awardPoints) {
                window.awardPoints(15, `Automated step: ${wizard.steps[wizard.currentStep - 1].title}`);
            }
        }, 1500); // 1.5 second automation simulation
    }
};

window.submitReflection = function(wizardId) {
    const wizard = wizardInstances[wizardId];
    const reflection = wizard.container.querySelector('.reflection-input').value;
    
    if (reflection.trim().length < 30) {
        alert('Please provide a more detailed reflection (at least 30 characters).');
        return;
    }
    
    // Award reflection points
    if (window.awardPoints) {
        window.awardPoints(20, 'Completed automation reflection');
    }
    
    // Show feedback
    const feedbackHTML = `
        <div class="reflection-feedback">
            <h5>Excellent Reflection!</h5>
            <p>You've demonstrated understanding of how automation transforms the accounting profession. Key insights include:</p>
            <ul>
                <li><strong>Strategic Focus:</strong> Automation frees accountants to focus on analysis and advisory services</li>
                <li><strong>Accuracy Improvement:</strong> Reduced manual errors through systematic processes</li>
                <li><strong>Scalability:</strong> Ability to handle growing business volumes efficiently</li>
                <li><strong>Value Creation:</strong> More time for strategic business partnerships</li>
            </ul>
            <p>Sarah's journey shows how embracing technology enables accountants to become strategic business advisors rather than just data processors.</p>
        </div>
    `;
    
    const reflectionContainer = wizard.container.querySelector('.learning-reflection');
    reflectionContainer.innerHTML += feedbackHTML;
};

// ===================================
// Integration with Existing Systems
// ===================================

// Integration with gamification system
document.addEventListener('monthEndWizardComplete', function(event) {
    const { wizardId, automationLevel, timeSaved, stepsCompleted } = event.detail;
    
    // Award completion points based on automation level and performance
    let points = 50; // Base points
    
    if (automationLevel === 2) points += 25; // Full automation bonus
    if (automationLevel === 1) points += 15; // Semi-automation bonus
    if (timeSaved > 300) points += 20; // Time efficiency bonus
    if (stepsCompleted === 6) points += 10; // Completion bonus
    
    if (window.awardPoints) {
        window.awardPoints(points, `Month-end wizard mastery (${['Manual', 'Semi-Auto', 'Full Auto'][automationLevel]})`);
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MonthEndWizard, createMonthEndWizard };
}