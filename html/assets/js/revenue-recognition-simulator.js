// ===================================
// Revenue Recognition Simulator
// For Unit 2: Month-End Wizard
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeRevenueRecognitionSimulators();
});

let revenueSimulatorInstances = {};

// ===================================
// System Initialization
// ===================================

function initializeRevenueRecognitionSimulators() {
    const containers = document.querySelectorAll('.revenue-recognition-simulator');
    
    containers.forEach((container, index) => {
        const simId = container.dataset.id || `revenue-sim-${index}`;
        const scenario = container.dataset.scenario || 'subscription_revenue';
        
        createRevenueRecognitionSimulator(container, simId, scenario);
    });
}

class RevenueRecognitionSimulator {
    constructor(container, id, scenario = 'subscription_revenue') {
        this.container = container;
        this.id = id;
        this.scenario = scenario;
        
        this.scenarios = {
            subscription_revenue: {
                title: "SaaS Subscription Revenue",
                description: "TechStart offers monthly marketing automation subscriptions",
                timeline: 12, // months
                contractValue: 12000,
                paymentSchedule: "monthly_advance"
            },
            contract_revenue: {
                title: "Website Development Contract",
                description: "TechStart builds e-commerce site for retail client",
                timeline: 6, // months
                contractValue: 25000,
                paymentSchedule: "milestone_based"
            },
            service_revenue: {
                title: "Marketing Consulting Services",
                description: "TechStart provides ongoing marketing strategy",
                timeline: 3, // months
                contractValue: 9000,
                paymentSchedule: "monthly_arrears"
            }
        };
        
        this.currentScenario = this.scenarios[scenario];
        this.revenueEvents = [];
        this.currentMethod = 'cash_basis';
        
        this.init();
    }
    
    init() {
        this.createHTML();
        this.setupEventListeners();
        this.generateRevenueEvents();
        this.updateDisplay();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="revenue-recognition-simulator" id="${this.id}">
                <div class="simulator-header">
                    <h3>Revenue Recognition Simulator</h3>
                    <p>Learn the difference between cash and accrual accounting</p>
                </div>
                
                <div class="scenario-selection">
                    <label for="scenario-select-${this.id}">Scenario:</label>
                    <select id="scenario-select-${this.id}" class="scenario-select">
                        ${Object.entries(this.scenarios).map(([key, scenario]) => 
                            `<option value="${key}" ${key === this.scenario ? 'selected' : ''}>${scenario.title}</option>`
                        ).join('')}
                    </select>
                </div>
                
                <div class="scenario-details">
                    <h4>${this.currentScenario.title}</h4>
                    <p>${this.currentScenario.description}</p>
                    <div class="scenario-metrics">
                        <span><strong>Contract Value:</strong> $${this.currentScenario.contractValue.toLocaleString()}</span>
                        <span><strong>Timeline:</strong> ${this.currentScenario.timeline} months</span>
                        <span><strong>Payment:</strong> ${this.formatPaymentSchedule(this.currentScenario.paymentSchedule)}</span>
                    </div>
                </div>
                
                <div class="recognition-methods">
                    <div class="method-tabs">
                        <button class="method-tab active" data-method="cash_basis">Cash Basis</button>
                        <button class="method-tab" data-method="accrual_basis">Accrual Basis</button>
                        <button class="method-tab" data-method="comparison">Side-by-Side</button>
                    </div>
                </div>
                
                <div class="timeline-container">
                    <div class="timeline-header">
                        <h4>Revenue Recognition Timeline</h4>
                        <div class="timeline-controls">
                            <button class="timeline-btn" data-action="play">▶️ Play</button>
                            <button class="timeline-btn" data-action="reset">🔄 Reset</button>
                            <button class="timeline-btn" data-action="step">⏭️ Step</button>
                        </div>
                    </div>
                    
                    <div class="revenue-timeline" id="timeline-${this.id}">
                        <!-- Timeline will be generated dynamically -->
                    </div>
                </div>
                
                <div class="recognition-results">
                    <div class="method-display" id="method-display-${this.id}">
                        <!-- Results will be displayed here -->
                    </div>
                </div>
                
                <div class="adjusting-entries">
                    <h4>Required Adjusting Entries</h4>
                    <div class="entries-container" id="entries-${this.id}">
                        <!-- Adjusting entries will be generated -->
                    </div>
                </div>
                
                <div class="learning-check">
                    <h4>Understanding Check</h4>
                    <div class="check-question">
                        <p>Based on this scenario, which method provides a more accurate picture of Sarah's business performance and why?</p>
                        <textarea class="reflection-input" placeholder="Enter your analysis..."></textarea>
                        <button class="check-btn" onclick="checkRevenueUnderstanding('${this.id}')">Submit Analysis</button>
                    </div>
                </div>
            </div>
        `;
        
        this.addStyles();
    }
    
    setupEventListeners() {
        const container = this.container;
        
        // Scenario selection
        const scenarioSelect = container.querySelector(`#scenario-select-${this.id}`);
        scenarioSelect.addEventListener('change', (e) => {
            this.changeScenario(e.target.value);
        });
        
        // Method tabs
        const methodTabs = container.querySelectorAll('.method-tab');
        methodTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchMethod(e.target.dataset.method);
            });
        });
        
        // Timeline controls
        const timelineControls = container.querySelectorAll('.timeline-btn');
        timelineControls.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleTimelineAction(e.target.dataset.action);
            });
        });
    }
    
    generateRevenueEvents() {
        const scenario = this.currentScenario;
        this.revenueEvents = [];
        
        // Generate events based on scenario type
        switch(this.scenario) {
            case 'subscription_revenue':
                this.generateSubscriptionEvents();
                break;
            case 'contract_revenue':
                this.generateContractEvents();
                break;
            case 'service_revenue':
                this.generateServiceEvents();
                break;
        }
    }
    
    generateSubscriptionEvents() {
        const monthlyAmount = this.currentScenario.contractValue / this.currentScenario.timeline;
        
        for (let month = 0; month < this.currentScenario.timeline; month++) {
            // Cash received (advance payment)
            this.revenueEvents.push({
                month: month,
                type: 'cash_received',
                amount: monthlyAmount,
                description: `Monthly subscription payment received`,
                cashBasisRevenue: monthlyAmount,
                accrualBasisRevenue: 0 // Not earned yet
            });
            
            // Revenue earned (as service is provided)
            this.revenueEvents.push({
                month: month,
                type: 'revenue_earned',
                amount: monthlyAmount,
                description: `Marketing automation service provided`,
                cashBasisRevenue: 0, // Already recorded when cash received
                accrualBasisRevenue: monthlyAmount
            });
        }
    }
    
    generateContractEvents() {
        const totalValue = this.currentScenario.contractValue;
        const milestones = [
            { month: 0, percentage: 0.3, description: "Project initiation and design" },
            { month: 2, percentage: 0.4, description: "Development and testing" },
            { month: 4, percentage: 0.3, description: "Launch and training" }
        ];
        
        milestones.forEach(milestone => {
            const amount = totalValue * milestone.percentage;
            
            // Cash received
            this.revenueEvents.push({
                month: milestone.month,
                type: 'cash_received',
                amount: amount,
                description: `Milestone payment: ${milestone.description}`,
                cashBasisRevenue: amount,
                accrualBasisRevenue: 0
            });
            
            // Revenue earned (spread over milestone period)
            for (let i = 0; i < 2; i++) {
                this.revenueEvents.push({
                    month: milestone.month + i,
                    type: 'revenue_earned',
                    amount: amount / 2,
                    description: `Work completed: ${milestone.description}`,
                    cashBasisRevenue: 0,
                    accrualBasisRevenue: amount / 2
                });
            }
        });
    }
    
    generateServiceEvents() {
        const monthlyAmount = this.currentScenario.contractValue / this.currentScenario.timeline;
        
        for (let month = 0; month < this.currentScenario.timeline; month++) {
            // Service provided first
            this.revenueEvents.push({
                month: month,
                type: 'service_provided',
                amount: monthlyAmount,
                description: `Marketing consulting provided`,
                cashBasisRevenue: 0, // Not yet paid
                accrualBasisRevenue: monthlyAmount
            });
            
            // Payment received next month
            if (month < this.currentScenario.timeline - 1) {
                this.revenueEvents.push({
                    month: month + 1,
                    type: 'payment_received',
                    amount: monthlyAmount,
                    description: `Payment for previous month's consulting`,
                    cashBasisRevenue: monthlyAmount,
                    accrualBasisRevenue: 0 // Already recorded when earned
                });
            }
        }
    }
    
    switchMethod(method) {
        this.currentMethod = method;
        
        // Update tab appearance
        const tabs = this.container.querySelectorAll('.method-tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.method === method) {
                tab.classList.add('active');
            }
        });
        
        this.updateDisplay();
    }
    
    updateDisplay() {
        this.renderTimeline();
        this.renderResults();
        this.generateAdjustingEntries();
    }
    
    renderTimeline() {
        const timelineContainer = this.container.querySelector(`#timeline-${this.id}`);
        const months = Math.max(...this.revenueEvents.map(e => e.month)) + 1;
        
        let html = '<div class="timeline-months">';
        
        for (let month = 0; month < months; month++) {
            const monthEvents = this.revenueEvents.filter(e => e.month === month);
            const monthRevenue = this.calculateMonthRevenue(month);
            
            html += `
                <div class="timeline-month" data-month="${month}">
                    <div class="month-header">Month ${month + 1}</div>
                    <div class="month-events">
                        ${monthEvents.map(event => `
                            <div class="timeline-event ${event.type}">
                                <div class="event-amount">$${event.amount.toLocaleString()}</div>
                                <div class="event-description">${event.description}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="month-revenue">
                        <div class="revenue-amount">$${monthRevenue.toLocaleString()}</div>
                        <div class="revenue-label">Revenue</div>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        timelineContainer.innerHTML = html;
    }
    
    calculateMonthRevenue(month) {
        const monthEvents = this.revenueEvents.filter(e => e.month === month);
        
        switch(this.currentMethod) {
            case 'cash_basis':
                return monthEvents.reduce((sum, event) => sum + event.cashBasisRevenue, 0);
            case 'accrual_basis':
                return monthEvents.reduce((sum, event) => sum + event.accrualBasisRevenue, 0);
            default:
                return 0;
        }
    }
    
    renderResults() {
        const resultsContainer = this.container.querySelector(`#method-display-${this.id}`);
        
        if (this.currentMethod === 'comparison') {
            this.renderComparison(resultsContainer);
        } else {
            this.renderSingleMethod(resultsContainer);
        }
    }
    
    renderSingleMethod(container) {
        const methodName = this.currentMethod === 'cash_basis' ? 'Cash Basis' : 'Accrual Basis';
        const totalRevenue = this.calculateTotalRevenue(this.currentMethod);
        
        container.innerHTML = `
            <div class="method-results">
                <h4>${methodName} Accounting</h4>
                <div class="total-revenue">
                    <span class="revenue-label">Total Revenue:</span>
                    <span class="revenue-amount">$${totalRevenue.toLocaleString()}</span>
                </div>
                <div class="method-explanation">
                    ${this.getMethodExplanation(this.currentMethod)}
                </div>
            </div>
        `;
    }
    
    renderComparison(container) {
        const cashTotal = this.calculateTotalRevenue('cash_basis');
        const accrualTotal = this.calculateTotalRevenue('accrual_basis');
        
        container.innerHTML = `
            <div class="comparison-results">
                <div class="comparison-method">
                    <h4>Cash Basis</h4>
                    <div class="revenue-amount">$${cashTotal.toLocaleString()}</div>
                    <div class="method-description">Revenue recorded when cash is received</div>
                </div>
                <div class="comparison-vs">VS</div>
                <div class="comparison-method">
                    <h4>Accrual Basis</h4>
                    <div class="revenue-amount">$${accrualTotal.toLocaleString()}</div>
                    <div class="method-description">Revenue recorded when earned</div>
                </div>
            </div>
            <div class="comparison-analysis">
                <h5>Key Differences:</h5>
                <ul>
                    <li><strong>Timing:</strong> ${this.getTimingDifference()}</li>
                    <li><strong>Total Amount:</strong> ${Math.abs(cashTotal - accrualTotal) === 0 ? 'Same over full contract period' : `Difference of $${Math.abs(cashTotal - accrualTotal).toLocaleString()}`}</li>
                    <li><strong>Business Insight:</strong> ${this.getBusinessInsight()}</li>
                </ul>
            </div>
        `;
    }
    
    calculateTotalRevenue(method) {
        const field = method === 'cash_basis' ? 'cashBasisRevenue' : 'accrualBasisRevenue';
        return this.revenueEvents.reduce((sum, event) => sum + event[field], 0);
    }
    
    getMethodExplanation(method) {
        const explanations = {
            cash_basis: "Revenue is recorded when cash is actually received from the customer. This method focuses on cash flow timing.",
            accrual_basis: "Revenue is recorded when it is earned, regardless of when cash is received. This method matches revenue with the period when services are provided."
        };
        return explanations[method];
    }
    
    getTimingDifference() {
        switch(this.scenario) {
            case 'subscription_revenue':
                return "Cash basis recognizes revenue immediately upon payment, while accrual spreads it over the service period";
            case 'contract_revenue':
                return "Revenue timing differs based on milestone payments vs. work completion";
            case 'service_revenue':
                return "Accrual recognizes revenue when service is provided, cash basis when payment is received";
            default:
                return "Timing varies based on contract terms and payment schedule";
        }
    }
    
    getBusinessInsight() {
        return "Accrual basis provides a more accurate picture of business performance by matching revenue with the period when value is delivered to customers.";
    }
    
    generateAdjustingEntries() {
        const entriesContainer = this.container.querySelector(`#entries-${this.id}`);
        const entries = this.calculateAdjustingEntries();
        
        if (entries.length === 0) {
            entriesContainer.innerHTML = '<p>No adjusting entries needed for cash basis accounting.</p>';
            return;
        }
        
        let html = '<div class="adjusting-entries-list">';
        entries.forEach((entry, index) => {
            html += `
                <div class="adjusting-entry">
                    <div class="entry-header">Entry ${index + 1}: ${entry.description}</div>
                    <div class="journal-entry">
                        <div class="entry-line debit">
                            <span class="account">${entry.debitAccount}</span>
                            <span class="amount">$${entry.amount.toLocaleString()}</span>
                        </div>
                        <div class="entry-line credit">
                            <span class="account">${entry.creditAccount}</span>
                            <span class="amount">$${entry.amount.toLocaleString()}</span>
                        </div>
                    </div>
                    <div class="entry-explanation">${entry.explanation}</div>
                </div>
            `;
        });
        html += '</div>';
        
        entriesContainer.innerHTML = html;
    }
    
    calculateAdjustingEntries() {
        if (this.currentMethod === 'cash_basis') {
            return []; // No adjusting entries for cash basis
        }
        
        const entries = [];
        
        // Generate adjusting entries based on scenario
        switch(this.scenario) {
            case 'subscription_revenue':
                // Deferred revenue entries
                const monthlyAmount = this.currentScenario.contractValue / this.currentScenario.timeline;
                entries.push({
                    description: "Recognize earned subscription revenue",
                    debitAccount: "Deferred Revenue",
                    creditAccount: "Subscription Revenue",
                    amount: monthlyAmount,
                    explanation: "Move revenue from liability to income as service is provided each month"
                });
                break;
                
            case 'contract_revenue':
                // Accrued revenue entries
                entries.push({
                    description: "Recognize accrued contract revenue",
                    debitAccount: "Accounts Receivable",
                    creditAccount: "Contract Revenue",
                    amount: this.currentScenario.contractValue * 0.3,
                    explanation: "Record revenue for work completed but not yet billed"
                });
                break;
                
            case 'service_revenue':
                // Accrued revenue for services provided
                const monthlyService = this.currentScenario.contractValue / this.currentScenario.timeline;
                entries.push({
                    description: "Recognize accrued service revenue",
                    debitAccount: "Accounts Receivable",
                    creditAccount: "Consulting Revenue",
                    amount: monthlyService,
                    explanation: "Record revenue for consulting services provided but not yet collected"
                });
                break;
        }
        
        return entries;
    }
    
    changeScenario(newScenario) {
        this.scenario = newScenario;
        this.currentScenario = this.scenarios[newScenario];
        
        // Update scenario details
        const detailsContainer = this.container.querySelector('.scenario-details');
        detailsContainer.innerHTML = `
            <h4>${this.currentScenario.title}</h4>
            <p>${this.currentScenario.description}</p>
            <div class="scenario-metrics">
                <span><strong>Contract Value:</strong> $${this.currentScenario.contractValue.toLocaleString()}</span>
                <span><strong>Timeline:</strong> ${this.currentScenario.timeline} months</span>
                <span><strong>Payment:</strong> ${this.formatPaymentSchedule(this.currentScenario.paymentSchedule)}</span>
            </div>
        `;
        
        this.generateRevenueEvents();
        this.updateDisplay();
    }
    
    formatPaymentSchedule(schedule) {
        const scheduleNames = {
            monthly_advance: "Monthly in advance",
            milestone_based: "Milestone-based",
            monthly_arrears: "Monthly in arrears"
        };
        return scheduleNames[schedule] || schedule;
    }
    
    handleTimelineAction(action) {
        switch(action) {
            case 'play':
                this.playTimeline();
                break;
            case 'reset':
                this.resetTimeline();
                break;
            case 'step':
                this.stepTimeline();
                break;
        }
    }
    
    playTimeline() {
        // Animate through timeline events
        console.log('Playing timeline animation...');
        // Implementation for timeline animation
    }
    
    resetTimeline() {
        // Reset timeline to beginning
        this.updateDisplay();
    }
    
    stepTimeline() {
        // Step through timeline one event at a time
        console.log('Stepping through timeline...');
        // Implementation for step-by-step progression
    }
    
    addStyles() {
        if (document.getElementById('revenue-recognition-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'revenue-recognition-styles';
        styles.textContent = `
            .revenue-recognition-simulator {
                max-width: 1000px;
                margin: 20px auto;
                padding: 20px;
                border: 2px solid #007bff;
                border-radius: 10px;
                background: #f8f9fa;
            }
            
            .simulator-header {
                text-align: center;
                margin-bottom: 20px;
            }
            
            .simulator-header h3 {
                color: #007bff;
                margin: 0;
            }
            
            .scenario-selection {
                margin: 20px 0;
                text-align: center;
            }
            
            .scenario-select {
                padding: 8px 12px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin-left: 10px;
            }
            
            .scenario-details {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #28a745;
            }
            
            .scenario-metrics {
                display: flex;
                gap: 20px;
                margin-top: 10px;
                flex-wrap: wrap;
            }
            
            .scenario-metrics span {
                background: #e9ecef;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 14px;
            }
            
            .method-tabs {
                display: flex;
                gap: 10px;
                margin: 20px 0;
                justify-content: center;
            }
            
            .method-tab {
                padding: 10px 20px;
                border: 2px solid #007bff;
                background: white;
                color: #007bff;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .method-tab.active,
            .method-tab:hover {
                background: #007bff;
                color: white;
            }
            
            .timeline-container {
                margin: 20px 0;
                background: white;
                border-radius: 8px;
                padding: 15px;
            }
            
            .timeline-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
            }
            
            .timeline-controls {
                display: flex;
                gap: 10px;
            }
            
            .timeline-btn {
                padding: 5px 10px;
                border: 1px solid #ccc;
                background: white;
                border-radius: 4px;
                cursor: pointer;
            }
            
            .timeline-btn:hover {
                background: #f0f0f0;
            }
            
            .timeline-months {
                display: flex;
                gap: 10px;
                overflow-x: auto;
                padding: 10px 0;
            }
            
            .timeline-month {
                min-width: 150px;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 10px;
                background: #f8f9fa;
            }
            
            .month-header {
                font-weight: bold;
                text-align: center;
                margin-bottom: 10px;
                color: #007bff;
            }
            
            .timeline-event {
                margin: 5px 0;
                padding: 8px;
                border-radius: 4px;
                font-size: 12px;
            }
            
            .timeline-event.cash_received,
            .timeline-event.payment_received {
                background: #d4edda;
                border-left: 3px solid #28a745;
            }
            
            .timeline-event.revenue_earned,
            .timeline-event.service_provided {
                background: #d1ecf1;
                border-left: 3px solid #17a2b8;
            }
            
            .event-amount {
                font-weight: bold;
                color: #495057;
            }
            
            .event-description {
                font-size: 10px;
                color: #6c757d;
                margin-top: 2px;
            }
            
            .month-revenue {
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid #ddd;
                text-align: center;
            }
            
            .revenue-amount {
                font-weight: bold;
                font-size: 16px;
                color: #007bff;
            }
            
            .revenue-label {
                font-size: 12px;
                color: #6c757d;
            }
            
            .recognition-results {
                margin: 20px 0;
                background: white;
                border-radius: 8px;
                padding: 15px;
            }
            
            .method-results {
                text-align: center;
            }
            
            .total-revenue {
                margin: 20px 0;
                padding: 20px;
                background: #e9ecef;
                border-radius: 8px;
            }
            
            .total-revenue .revenue-amount {
                font-size: 24px;
                font-weight: bold;
                color: #28a745;
            }
            
            .method-explanation {
                text-align: left;
                color: #495057;
                line-height: 1.5;
            }
            
            .comparison-results {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin: 20px 0;
            }
            
            .comparison-method {
                text-align: center;
                padding: 20px;
                border-radius: 8px;
                flex: 1;
                margin: 0 10px;
            }
            
            .comparison-method:first-child {
                background: #fff3cd;
                border: 2px solid #ffc107;
            }
            
            .comparison-method:last-child {
                background: #d1ecf1;
                border: 2px solid #17a2b8;
            }
            
            .comparison-vs {
                font-weight: bold;
                font-size: 18px;
                color: #dc3545;
            }
            
            .comparison-analysis {
                margin-top: 20px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
            }
            
            .adjusting-entries {
                margin: 20px 0;
                background: white;
                border-radius: 8px;
                padding: 15px;
            }
            
            .adjusting-entry {
                margin: 15px 0;
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: #f8f9fa;
            }
            
            .entry-header {
                font-weight: bold;
                color: #007bff;
                margin-bottom: 10px;
            }
            
            .journal-entry {
                margin: 10px 0;
                font-family: monospace;
                background: white;
                padding: 10px;
                border-radius: 4px;
            }
            
            .entry-line {
                display: flex;
                justify-content: space-between;
                margin: 5px 0;
            }
            
            .entry-line.debit {
                margin-left: 0;
            }
            
            .entry-line.credit {
                margin-left: 20px;
            }
            
            .entry-explanation {
                font-style: italic;
                color: #6c757d;
                margin-top: 10px;
            }
            
            .learning-check {
                margin: 20px 0;
                background: white;
                border-radius: 8px;
                padding: 15px;
                border-left: 4px solid #007bff;
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
            
            .check-btn {
                background: #007bff;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
            }
            
            .check-btn:hover {
                background: #0056b3;
            }
            
            @media (max-width: 768px) {
                .timeline-months {
                    flex-direction: column;
                }
                
                .comparison-results {
                    flex-direction: column;
                }
                
                .comparison-method {
                    margin: 10px 0;
                }
                
                .scenario-metrics {
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

function createRevenueRecognitionSimulator(container, id, scenario) {
    const simulator = new RevenueRecognitionSimulator(container, id, scenario);
    revenueSimulatorInstances[id] = simulator;
    return simulator;
}

function checkRevenueUnderstanding(simulatorId) {
    const simulator = revenueSimulatorInstances[simulatorId];
    const container = simulator.container;
    const reflection = container.querySelector('.reflection-input').value;
    
    if (reflection.trim().length < 50) {
        alert('Please provide a more detailed analysis (at least 50 characters).');
        return;
    }
    
    // Award points for thoughtful analysis
    if (window.awardPoints) {
        window.awardPoints(25, 'Revenue recognition analysis completed');
    }
    
    // Provide feedback
    const feedback = `
        <div class="feedback-container">
            <h5>Great Analysis!</h5>
            <p>You've demonstrated understanding of the key differences between cash and accrual accounting.</p>
            <div class="key-points">
                <h6>Key Learning Points:</h6>
                <ul>
                    <li><strong>Timing Matters:</strong> The timing of revenue recognition affects financial statement presentation</li>
                    <li><strong>Business Insight:</strong> Accrual accounting provides better matching of revenues and expenses</li>
                    <li><strong>Decision Making:</strong> Accrual basis gives stakeholders a clearer picture of business performance</li>
                </ul>
            </div>
            <p><strong>For Sarah's Business:</strong> Accrual accounting will be essential as TechStart grows and seeks investment, as it provides a more accurate picture of business performance for potential investors.</p>
        </div>
    `;
    
    const checkContainer = container.querySelector('.learning-check');
    checkContainer.innerHTML += feedback;
    
    // Scroll to feedback
    checkContainer.scrollIntoView({ behavior: 'smooth' });
}

// ===================================
// Integration with Existing Systems
// ===================================

// Integration with gamification system
document.addEventListener('revenueSimulatorComplete', function(event) {
    const { simulatorId, scenario, method, analysis } = event.detail;
    
    // Award points based on completion and quality
    let points = 30; // Base points
    
    if (analysis && analysis.length > 100) {
        points += 15; // Bonus for detailed analysis
    }
    
    if (method === 'comparison') {
        points += 10; // Bonus for comparing methods
    }
    
    if (window.awardPoints) {
        window.awardPoints(points, `Revenue recognition simulation: ${scenario}`);
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RevenueRecognitionSimulator, createRevenueRecognitionSimulator };
}