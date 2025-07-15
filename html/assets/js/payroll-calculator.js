// ===================================
// Payroll Calculator Suite (Main Module)
// For Unit 5: Payday Simulator
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializePayrollCalculators();
});

let payrollInstances = {};

// ===================================
// System Initialization
// ===================================

function initializePayrollCalculators() {
    const containers = document.querySelectorAll('.payroll-calculator');
    
    containers.forEach((container, index) => {
        const calculatorId = container.dataset.id || `payroll-${index}`;
        const calculatorType = container.dataset.type || 'comprehensive';
        
        createPayrollCalculator(container, calculatorId, calculatorType);
    });
}

class PayrollCalculator {
    constructor(container, id, type = 'comprehensive') {
        this.container = container;
        this.id = id;
        this.type = type;
        
        // Initialize modular components
        this.taxCalculator = new PayrollTaxCalculator();
        this.benefitsManager = new PayrollBenefitsManager();
        this.stubGenerator = new PayrollStubGenerator(this.taxCalculator, this.benefitsManager);
        
        // Payroll frequencies
        this.frequencies = {
            weekly: 52,
            biweekly: 26,
            semimonthly: 24,
            monthly: 12
        };
        
        // Employee database for testing
        this.employees = {
            sarah: {
                id: 'EMP001',
                name: "Sarah Chen",
                position: "CEO/Founder",
                department: "Executive",
                annualSalary: 75000,
                exemptions: 2,
                maritalStatus: "single",
                state: "CA",
                age: 32,
                yearsOfService: 3,
                benefits: {
                    health: { coverage: 'employee_only', preTax: true },
                    dental: { coverage: 'employee_only', preTax: true },
                    retirement401k: { percentage: 6 },
                    hsa: { contribution: 3000, isFamily: false }
                }
            },
            alex: {
                id: 'EMP002',
                name: "Alex Rodriguez",
                position: "Marketing Manager",
                department: "Marketing",
                annualSalary: 55000,
                exemptions: 1,
                maritalStatus: "single",
                state: "CA",
                age: 28,
                yearsOfService: 2,
                benefits: {
                    health: { coverage: 'employee_only', preTax: true },
                    dental: { coverage: 'employee_only', preTax: true },
                    retirement401k: { percentage: 4 }
                }
            },
            jennifer: {
                id: 'EMP003',
                name: "Jennifer Kim",
                position: "Accountant (Consultant)",
                department: "Finance",
                hourlyRate: 45,
                hoursWorked: 20,
                exemptions: 3,
                maritalStatus: "married",
                state: "CA",
                age: 35,
                yearsOfService: 1,
                benefits: {
                    health: { coverage: 'employee_only', preTax: false },
                    retirement401k: { percentage: 0 }
                }
            }
        };
        
        this.currentEmployee = 'sarah';
        this.payrollResults = {};
        
        this.init();
    }
    
    init() {
        this.createHTML();
        this.setupEventListeners();
        this.calculatePayroll();
        this.updateDisplay();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="payroll-calculator" id="${this.id}">
                <div class="calculator-header">
                    <h3>💰 Payroll Calculator Suite</h3>
                    <p>Complete payroll processing for TechStart Solutions</p>
                </div>
                
                <div class="employee-selector">
                    <label for="employee-select-${this.id}">Select Employee:</label>
                    <select id="employee-select-${this.id}" class="employee-select">
                        ${Object.entries(this.employees).map(([key, employee]) => 
                            `<option value="${key}" ${key === this.currentEmployee ? 'selected' : ''}>${employee.name} - ${employee.position}</option>`
                        ).join('')}
                    </select>
                    <button class="add-employee-btn" onclick="addNewEmployee('${this.id}')">➕ Add Employee</button>
                </div>
                
                <div class="payroll-tabs">
                    <div class="tab-buttons">
                        <button class="tab-btn active" data-tab="calculator">💳 Pay Calculator</button>
                        <button class="tab-btn" data-tab="paystub">📄 Pay Stub</button>
                        <button class="tab-btn" data-tab="ytd">📊 YTD Summary</button>
                        <button class="tab-btn" data-tab="taxes">🏛️ Tax Details</button>
                        <button class="tab-btn" data-tab="benefits">🏥 Benefits</button>
                        <button class="tab-btn" data-tab="reports">📈 Reports</button>
                    </div>
                </div>
                
                <div class="payroll-content">
                    <div class="tab-content calculator active" id="calculator-${this.id}">
                        <!-- Payroll calculator content -->
                    </div>
                    
                    <div class="tab-content paystub" id="paystub-${this.id}">
                        <!-- Pay stub content -->
                    </div>
                    
                    <div class="tab-content ytd" id="ytd-${this.id}">
                        <!-- YTD summary content -->
                    </div>
                    
                    <div class="tab-content taxes" id="taxes-${this.id}">
                        <!-- Tax details content -->
                    </div>
                    
                    <div class="tab-content benefits" id="benefits-${this.id}">
                        <!-- Benefits content -->
                    </div>
                    
                    <div class="tab-content reports" id="reports-${this.id}">
                        <!-- Reports content -->
                    </div>
                </div>
                
                <div class="payroll-summary">
                    <h4>💼 Current Pay Period Summary</h4>
                    <div class="summary-grid" id="summary-${this.id}">
                        <!-- Summary will be populated dynamically -->
                    </div>
                </div>
                
                <div class="business-scenario">
                    <h4>🏢 Business Scenario</h4>
                    <div class="scenario-content">
                        <p><strong>TechStart Solutions Payroll Challenge:</strong></p>
                        <p>Sarah needs to process payroll for her growing team. As the business owner, she must understand:</p>
                        <ul>
                            <li>Gross-to-net pay calculations</li>
                            <li>Federal and state tax withholdings</li>
                            <li>Benefits deductions and employer contributions</li>
                            <li>Payroll tax liabilities for the business</li>
                            <li>Year-to-date tracking for tax reporting</li>
                        </ul>
                    </div>
                </div>
                
                <div class="learning-activity">
                    <h4>🎯 Payroll Analysis Challenge</h4>
                    <div class="activity-question">
                        <p>After calculating payroll for all employees, what recommendations would you make to Sarah about payroll management and cost optimization?</p>
                        <textarea class="payroll-analysis-input" placeholder="Consider total payroll costs, tax efficiency, benefits optimization, and cash flow impact..."></textarea>
                        <button class="submit-payroll-analysis-btn" onclick="submitPayrollAnalysis('${this.id}')">Submit Analysis</button>
                    </div>
                </div>
            </div>
        `;
        
        // Populate tab content
        this.populateCalculatorTab();
        this.populateTabContent();
    }
    
    populateCalculatorTab() {
        const calculatorTab = this.container.querySelector(`#calculator-${this.id}`);
        const employee = this.employees[this.currentEmployee];
        
        calculatorTab.innerHTML = `
            <div class="pay-calculator-form">
                <div class="form-section">
                    <h5>📋 Pay Period Information</h5>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Pay Frequency:</label>
                            <select class="pay-frequency">
                                <option value="biweekly" selected>Bi-Weekly (26 pays/year)</option>
                                <option value="weekly">Weekly (52 pays/year)</option>
                                <option value="semimonthly">Semi-Monthly (24 pays/year)</option>
                                <option value="monthly">Monthly (12 pays/year)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Current Pay Period:</label>
                            <input type="number" class="current-pay-period" value="1" min="1" max="26">
                        </div>
                    </div>
                </div>
                
                <div class="form-section">
                    <h5>💰 Earnings Information</h5>
                    <div class="form-row">
                        ${employee.hourlyRate ? `
                            <div class="form-group">
                                <label>Hourly Rate:</label>
                                <input type="number" class="hourly-rate" value="${employee.hourlyRate}" step="0.01" min="0">
                            </div>
                            <div class="form-group">
                                <label>Hours Worked:</label>
                                <input type="number" class="hours-worked" value="${employee.hoursWorked || 40}" step="0.5" min="0">
                            </div>
                        ` : `
                            <div class="form-group">
                                <label>Annual Salary:</label>
                                <input type="number" class="annual-salary" value="${employee.annualSalary}" step="1000" min="0">
                            </div>
                        `}
                    </div>
                </div>
                
                <div class="form-section">
                    <h5>🏛️ Tax Information</h5>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Filing Status:</label>
                            <select class="filing-status">
                                <option value="single" ${employee.maritalStatus === 'single' ? 'selected' : ''}>Single</option>
                                <option value="married" ${employee.maritalStatus === 'married' ? 'selected' : ''}>Married</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Exemptions:</label>
                            <input type="number" class="exemptions" value="${employee.exemptions}" min="0" max="10">
                        </div>
                    </div>
                </div>
                
                <div class="calculate-section">
                    <button class="calculate-payroll-btn primary-btn" onclick="calculatePayroll('${this.id}')">
                        🧮 Calculate Payroll
                    </button>
                    <button class="reset-btn secondary-btn" onclick="resetPayrollForm('${this.id}')">
                        🔄 Reset
                    </button>
                </div>
            </div>
        `;
    }
    
    populateTabContent() {
        // Initialize other tabs with placeholder content
        this.container.querySelector(`#paystub-${this.id}`).innerHTML = '<p>Generate a pay stub using the calculator first.</p>';
        this.container.querySelector(`#ytd-${this.id}`).innerHTML = '<p>Year-to-date information will appear here.</p>';
        this.container.querySelector(`#taxes-${this.id}`).innerHTML = '<p>Detailed tax breakdown will appear here.</p>';
        this.container.querySelector(`#benefits-${this.id}`).innerHTML = '<p>Benefits summary will appear here.</p>';
        this.container.querySelector(`#reports-${this.id}`).innerHTML = '<p>Payroll reports will appear here.</p>';
    }
    
    setupEventListeners() {
        // Tab navigation
        const tabButtons = this.container.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
        
        // Employee selection
        const employeeSelect = this.container.querySelector('.employee-select');
        employeeSelect.addEventListener('change', (e) => {
            this.currentEmployee = e.target.value;
            this.populateCalculatorTab();
            this.calculatePayroll();
        });
        
        // Real-time calculation updates
        const inputs = this.container.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                this.calculatePayroll();
            });
        });
    }
    
    switchTab(tabName) {
        // Update tab buttons
        this.container.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.container.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Update tab content
        this.container.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        this.container.querySelector(`#${tabName}-${this.id}`).classList.add('active');
    }
    
    calculatePayroll() {
        const employee = this.employees[this.currentEmployee];
        const payFrequency = this.container.querySelector('.pay-frequency')?.value || 'biweekly';
        const currentPayPeriod = parseInt(this.container.querySelector('.current-pay-period')?.value || '1');
        
        // Generate pay stub
        const payStub = this.stubGenerator.generatePayStub(employee, payFrequency, currentPayPeriod);
        this.payrollResults = payStub;
        
        this.updateSummary();
        this.updateTabContent();
    }
    
    updateSummary() {
        const summaryContainer = this.container.querySelector(`#summary-${this.id}`);
        const summary = this.payrollResults.summary;
        
        summaryContainer.innerHTML = `
            <div class="summary-item">
                <span class="label">Gross Pay:</span>
                <span class="value">${this.formatCurrency(summary.grossPay)}</span>
            </div>
            <div class="summary-item">
                <span class="label">Total Deductions:</span>
                <span class="value">${this.formatCurrency(summary.totalDeductions)}</span>
            </div>
            <div class="summary-item highlight">
                <span class="label">Net Pay:</span>
                <span class="value">${this.formatCurrency(summary.netPay)}</span>
            </div>
            <div class="summary-item">
                <span class="label">Effective Rate:</span>
                <span class="value">${summary.effectiveRate.toFixed(2)}%</span>
            </div>
        `;
    }
    
    updateTabContent() {
        // Update pay stub tab
        this.container.querySelector(`#paystub-${this.id}`).innerHTML = 
            this.stubGenerator.renderPayStubHTML(this.payrollResults);
        
        // Update other tabs with detailed information
        this.updateTaxTab();
        this.updateBenefitsTab();
        this.updateYTDTab();
        this.updateReportsTab();
    }
    
    updateTaxTab() {
        const taxTab = this.container.querySelector(`#taxes-${this.id}`);
        const taxes = this.payrollResults.taxes;
        
        taxTab.innerHTML = `
            <div class="tax-breakdown">
                <h5>Employee Tax Withholdings</h5>
                <table class="tax-table">
                    <tr><td>Federal Income Tax</td><td>${this.formatCurrency(taxes.federal.amount)}</td></tr>
                    <tr><td>Social Security</td><td>${this.formatCurrency(taxes.socialSecurity.amount)}</td></tr>
                    <tr><td>Medicare</td><td>${this.formatCurrency(taxes.medicare.amount)}</td></tr>
                    <tr><td>State Income Tax</td><td>${this.formatCurrency(taxes.state.amount)}</td></tr>
                    <tr><td>State Disability</td><td>${this.formatCurrency(taxes.stateDisability.amount)}</td></tr>
                    <tr class="total"><td><strong>Total Employee Taxes</strong></td><td><strong>${this.formatCurrency(taxes.totalTaxes)}</strong></td></tr>
                </table>
            </div>
        `;
    }
    
    updateBenefitsTab() {
        const benefitsTab = this.container.querySelector(`#benefits-${this.id}`);
        const benefits = this.payrollResults.benefits;
        
        let benefitsHTML = '<div class="benefits-breakdown"><h5>Benefit Deductions</h5>';
        
        if (benefits.items.length > 0) {
            benefitsHTML += '<table class="benefits-table">';
            benefits.items.forEach(item => {
                benefitsHTML += `<tr><td>${item.description}</td><td>${this.formatCurrency(item.amount)}</td><td>${item.isPreTax ? 'Pre-Tax' : 'Post-Tax'}</td></tr>`;
            });
            benefitsHTML += `<tr class="total"><td><strong>Total Benefits</strong></td><td><strong>${this.formatCurrency(benefits.totalBenefits)}</strong></td><td></td></tr>`;
            benefitsHTML += '</table>';
        } else {
            benefitsHTML += '<p>No benefit deductions for this employee.</p>';
        }
        
        benefitsHTML += '</div>';
        benefitsTab.innerHTML = benefitsHTML;
    }
    
    updateYTDTab() {
        const ytdTab = this.container.querySelector(`#ytd-${this.id}`);
        const ytd = this.payrollResults.ytd;
        
        ytdTab.innerHTML = `
            <div class="ytd-summary">
                <h5>Year-to-Date Summary</h5>
                <div class="ytd-grid">
                    <div class="ytd-item">
                        <span class="ytd-label">YTD Gross:</span>
                        <span class="ytd-value">${this.formatCurrency(ytd.gross)}</span>
                    </div>
                    <div class="ytd-item">
                        <span class="ytd-label">YTD Taxes:</span>
                        <span class="ytd-value">${this.formatCurrency(ytd.taxes)}</span>
                    </div>
                    <div class="ytd-item">
                        <span class="ytd-label">YTD Benefits:</span>
                        <span class="ytd-value">${this.formatCurrency(ytd.benefits)}</span>
                    </div>
                    <div class="ytd-item highlight">
                        <span class="ytd-label">YTD Net:</span>
                        <span class="ytd-value">${this.formatCurrency(ytd.net)}</span>
                    </div>
                </div>
                <p>Pay periods completed: ${ytd.payPeriodsCompleted}</p>
            </div>
        `;
    }
    
    updateReportsTab() {
        const reportsTab = this.container.querySelector(`#reports-${this.id}`);
        
        reportsTab.innerHTML = `
            <div class="payroll-reports">
                <h5>Payroll Reports</h5>
                <div class="report-options">
                    <button class="report-btn" onclick="generatePayrollReport('${this.id}', 'summary')">📊 Payroll Summary</button>
                    <button class="report-btn" onclick="generatePayrollReport('${this.id}', 'tax')">🏛️ Tax Liability Report</button>
                    <button class="report-btn" onclick="generatePayrollReport('${this.id}', 'benefits')">🏥 Benefits Report</button>
                </div>
                <div class="report-output" id="report-output-${this.id}">
                    <p>Select a report type to generate detailed payroll reports.</p>
                </div>
            </div>
        `;
    }
    
    updateDisplay() {
        // Award gamification points
        if (window.awardPoints) {
            window.awardPoints(10, 'Using Payroll Calculator');
        }
    }
    
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(amount);
    }
}

// Global functions for calculator interaction
function createPayrollCalculator(container, id, type) {
    const calculator = new PayrollCalculator(container, id, type);
    payrollInstances[id] = calculator;
    return calculator;
}

function calculatePayroll(calculatorId) {
    if (payrollInstances[calculatorId]) {
        payrollInstances[calculatorId].calculatePayroll();
    }
}

function submitPayrollAnalysis(calculatorId) {
    const container = document.getElementById(calculatorId);
    const analysisInput = container.querySelector('.payroll-analysis-input');
    const analysis = analysisInput.value.trim();
    
    if (analysis.length < 50) {
        alert('Please provide a more detailed analysis (at least 50 characters).');
        return;
    }
    
    if (window.awardPoints) {
        window.awardPoints(15, 'Submitted payroll analysis');
    }
    
    analysisInput.style.border = '2px solid #28a745';
    setTimeout(() => {
        analysisInput.style.border = '';
    }, 2000);
}
            </div>
        `;
        
        this.addStyles();
    }
    
    setupEventListeners() {
        const container = this.container;
        
        // Employee selection
        const employeeSelect = container.querySelector(`#employee-select-${this.id}`);
        employeeSelect.addEventListener('change', (e) => {
            this.changeEmployee(e.target.value);
        });
        
        // Tab switching
        const tabButtons = container.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
        
        // Real-time calculation updates
        container.addEventListener('input', (e) => {
            if (e.target.matches('.payroll-input')) {
                this.calculatePayroll();
                this.updateDisplay();
            }
        });
    }
    
    calculatePayroll() {
        const employee = this.employees[this.currentEmployee];
        const results = {};
        
        // Determine gross pay
        if (employee.annualSalary) {
            // Salaried employee
            results.grossPay = employee.annualSalary / this.frequencies.biweekly; // Bi-weekly default
            results.payType = 'salary';
            results.hoursWorked = 40;
            results.hourlyRate = results.grossPay / 40;
        } else {
            // Hourly employee
            results.grossPay = (employee.hourlyRate || 0) * (employee.hoursWorked || 0);
            results.payType = 'hourly';
            results.hoursWorked = employee.hoursWorked || 0;
            results.hourlyRate = employee.hourlyRate || 0;
        }
        
        // Calculate pre-tax deductions
        results.preTaxDeductions = {
            health: employee.benefits.health || 0,
            dental: employee.benefits.dental || 0,
            retirement401k: results.grossPay * (employee.benefits.retirement401k || 0)
        };
        
        results.totalPreTaxDeductions = Object.values(results.preTaxDeductions)
            .reduce((sum, amount) => sum + amount, 0);
        
        // Taxable income
        results.taxableIncome = results.grossPay - results.totalPreTaxDeductions;
        
        // Calculate taxes
        results.taxes = this.calculateTaxes(results.taxableIncome, employee);
        
        // Calculate after-tax deductions
        results.afterTaxDeductions = {
            // Add any after-tax deductions here
        };
        
        results.totalAfterTaxDeductions = Object.values(results.afterTaxDeductions)
            .reduce((sum, amount) => sum + amount, 0);
        
        // Net pay calculation
        results.netPay = results.taxableIncome - results.taxes.total - results.totalAfterTaxDeductions;
        
        // Employer costs
        results.employerCosts = this.calculateEmployerCosts(results.grossPay, employee);
        
        // Total cost to employer
        results.totalEmployerCost = results.grossPay + results.employerCosts.total;
        
        this.payrollResults = results;
        return results;
    }
    
    calculateTaxes(taxableIncome, employee) {
        const taxes = {};
        
        // Federal income tax (simplified progressive calculation)
        taxes.federal = this.calculateFederalTax(taxableIncome * this.frequencies.biweekly, employee) / this.frequencies.biweekly;
        
        // Social Security tax (6.2% up to wage base)
        const ssWageBase = 160200; // 2024 wage base
        const annualTaxableIncome = taxableIncome * this.frequencies.biweekly;
        taxes.socialSecurity = Math.min(taxableIncome * this.taxRates.socialSecurity, 
                                       (ssWageBase / this.frequencies.biweekly) * this.taxRates.socialSecurity);
        
        // Medicare tax (1.45%)
        taxes.medicare = taxableIncome * this.taxRates.medicare;
        
        // Additional Medicare tax (0.9% on income over $200,000)
        if (annualTaxableIncome > 200000) {
            taxes.additionalMedicare = Math.max(0, taxableIncome - (200000 / this.frequencies.biweekly)) * 0.009;
        } else {
            taxes.additionalMedicare = 0;
        }
        
        // State income tax (simplified)
        taxes.state = taxableIncome * this.taxRates.state;
        
        // State disability insurance (CA example)
        taxes.sdi = taxableIncome * 0.009; // 0.9% in CA
        
        taxes.total = taxes.federal + taxes.socialSecurity + taxes.medicare + 
                     taxes.additionalMedicare + taxes.state + taxes.sdi;
        
        return taxes;
    }
    
    calculateFederalTax(annualIncome, employee) {
        // Simplified federal tax calculation
        const standardDeduction = employee.maritalStatus === 'married' ? 27700 : 13850; // 2024 rates
        const taxableIncome = Math.max(0, annualIncome - standardDeduction);
        
        let tax = 0;
        let remainingIncome = taxableIncome;
        
        for (const bracket of this.taxRates.federal[2024]) {
            if (remainingIncome <= 0) break;
            
            const taxableAtThisBracket = Math.min(remainingIncome, bracket.max - bracket.min);
            tax += taxableAtThisBracket * bracket.rate;
            remainingIncome -= taxableAtThisBracket;
        }
        
        return tax;
    }
    
    calculateEmployerCosts(grossPay, employee) {
        const costs = {};
        
        // Employer Social Security match
        costs.socialSecurityMatch = grossPay * this.taxRates.socialSecurity;
        
        // Employer Medicare match
        costs.medicareMatch = grossPay * this.taxRates.medicare;
        
        // Federal unemployment tax (FUTA)
        costs.futa = Math.min(grossPay, 7000 / this.frequencies.biweekly) * this.taxRates.unemployment;
        
        // State unemployment tax (SUTA) - simplified
        costs.suta = grossPay * 0.034; // 3.4% example rate
        
        // Workers' compensation insurance
        costs.workersComp = grossPay * 0.005; // 0.5% example rate
        
        // Health insurance employer contribution
        costs.healthContribution = (employee.benefits.health || 0) * 0.7; // Employer pays 70%
        
        // Dental insurance employer contribution  
        costs.dentalContribution = (employee.benefits.dental || 0) * 0.8; // Employer pays 80%
        
        // 401k employer match
        costs.retirement401kMatch = grossPay * Math.min(employee.benefits.retirement401k || 0, 0.06) * 0.5; // 50% match up to 6%
        
        costs.total = Object.values(costs).reduce((sum, amount) => sum + amount, 0);
        
        return costs;
    }
    
    updateDisplay() {
        this.updateCalculatorTab();
        this.updatePayStubTab();
        this.updateYTDTab();
        this.updateTaxesTab();
        this.updateBenefitsTab();
        this.updateReportsTab();
        this.updateSummary();
    }
    
    updateCalculatorTab() {
        const tab = this.container.querySelector(`#calculator-${this.id}`);
        const employee = this.employees[this.currentEmployee];
        const results = this.payrollResults;
        
        tab.innerHTML = `
            <div class="payroll-calculator-content">
                <div class="employee-info">
                    <h5>👤 Employee Information</h5>
                    <div class="employee-details">
                        <div class="detail-group">
                            <label>Employee:</label>
                            <span>${employee.name}</span>
                        </div>
                        <div class="detail-group">
                            <label>Position:</label>
                            <span>${employee.position}</span>
                        </div>
                        <div class="detail-group">
                            <label>Pay Type:</label>
                            <span>${results.payType === 'salary' ? 'Salaried' : 'Hourly'}</span>
                        </div>
                        <div class="detail-group">
                            <label>Marital Status:</label>
                            <span>${employee.maritalStatus}</span>
                        </div>
                        <div class="detail-group">
                            <label>Exemptions:</label>
                            <span>${employee.exemptions}</span>
                        </div>
                    </div>
                </div>
                
                <div class="pay-inputs">
                    <h5>💳 Pay Period Information</h5>
                    <div class="input-grid">
                        ${results.payType === 'salary' ? `
                            <div class="input-group">
                                <label>Annual Salary:</label>
                                <input type="number" class="payroll-input" value="${employee.annualSalary}" 
                                       data-field="annualSalary" step="1000" min="0">
                            </div>
                            <div class="input-group">
                                <label>Pay Frequency:</label>
                                <select class="payroll-input" data-field="frequency">
                                    <option value="weekly">Weekly (52 pays)</option>
                                    <option value="biweekly" selected>Bi-weekly (26 pays)</option>
                                    <option value="semimonthly">Semi-monthly (24 pays)</option>
                                    <option value="monthly">Monthly (12 pays)</option>
                                </select>
                            </div>
                        ` : `
                            <div class="input-group">
                                <label>Hourly Rate:</label>
                                <input type="number" class="payroll-input" value="${employee.hourlyRate}" 
                                       data-field="hourlyRate" step="0.50" min="0">
                            </div>
                            <div class="input-group">
                                <label>Hours Worked:</label>
                                <input type="number" class="payroll-input" value="${employee.hoursWorked}" 
                                       data-field="hoursWorked" step="0.25" min="0" max="80">
                            </div>
                        `}
                    </div>
                </div>
                
                <div class="pay-calculation">
                    <h5>🧮 Pay Calculation</h5>
                    <div class="calculation-flow">
                        <div class="calc-step">
                            <div class="step-label">Gross Pay</div>
                            <div class="step-amount">$${results.grossPay.toFixed(2)}</div>
                            <div class="step-details">
                                ${results.payType === 'salary' ? 
                                    `$${employee.annualSalary.toLocaleString()} ÷ ${this.frequencies.biweekly} pays` :
                                    `$${results.hourlyRate.toFixed(2)} × ${results.hoursWorked} hours`
                                }
                            </div>
                        </div>
                        
                        <div class="calc-operator">−</div>
                        
                        <div class="calc-step">
                            <div class="step-label">Pre-Tax Deductions</div>
                            <div class="step-amount">$${results.totalPreTaxDeductions.toFixed(2)}</div>
                            <div class="step-details">
                                Health: $${results.preTaxDeductions.health.toFixed(2)}<br>
                                Dental: $${results.preTaxDeductions.dental.toFixed(2)}<br>
                                401(k): $${results.preTaxDeductions.retirement401k.toFixed(2)}
                            </div>
                        </div>
                        
                        <div class="calc-operator">=</div>
                        
                        <div class="calc-step">
                            <div class="step-label">Taxable Income</div>
                            <div class="step-amount">$${results.taxableIncome.toFixed(2)}</div>
                            <div class="step-details">Subject to taxes</div>
                        </div>
                        
                        <div class="calc-operator">−</div>
                        
                        <div class="calc-step">
                            <div class="step-label">Total Taxes</div>
                            <div class="step-amount">$${results.taxes.total.toFixed(2)}</div>
                            <div class="step-details">
                                Federal: $${results.taxes.federal.toFixed(2)}<br>
                                Social Security: $${results.taxes.socialSecurity.toFixed(2)}<br>
                                Medicare: $${results.taxes.medicare.toFixed(2)}<br>
                                State: $${results.taxes.state.toFixed(2)}
                            </div>
                        </div>
                        
                        <div class="calc-operator">=</div>
                        
                        <div class="calc-step net-pay">
                            <div class="step-label">NET PAY</div>
                            <div class="step-amount">$${results.netPay.toFixed(2)}</div>
                            <div class="step-details">Take-home pay</div>
                        </div>
                    </div>
                </div>
                
                <div class="employer-costs">
                    <h5>🏢 Employer Costs</h5>
                    <div class="cost-breakdown">
                        <div class="cost-item">
                            <span class="cost-label">Employee Gross Pay:</span>
                            <span class="cost-amount">$${results.grossPay.toFixed(2)}</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Employer Tax Contributions:</span>
                            <span class="cost-amount">$${(results.employerCosts.socialSecurityMatch + results.employerCosts.medicareMatch).toFixed(2)}</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Unemployment Taxes:</span>
                            <span class="cost-amount">$${(results.employerCosts.futa + results.employerCosts.suta).toFixed(2)}</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Benefits Contributions:</span>
                            <span class="cost-amount">$${(results.employerCosts.healthContribution + results.employerCosts.dentalContribution + results.employerCosts.retirement401kMatch).toFixed(2)}</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Workers' Comp Insurance:</span>
                            <span class="cost-amount">$${results.employerCosts.workersComp.toFixed(2)}</span>
                        </div>
                        <div class="cost-item total">
                            <span class="cost-label"><strong>TOTAL EMPLOYER COST:</strong></span>
                            <span class="cost-amount"><strong>$${results.totalEmployerCost.toFixed(2)}</strong></span>
                        </div>
                    </div>
                    
                    <div class="cost-analysis">
                        <div class="analysis-metric">
                            <span class="metric-label">Cost per Dollar of Net Pay:</span>
                            <span class="metric-value">$${(results.totalEmployerCost / results.netPay).toFixed(2)}</span>
                        </div>
                        <div class="analysis-metric">
                            <span class="metric-label">Tax Burden (Employee + Employer):</span>
                            <span class="metric-value">${((results.taxes.total + results.employerCosts.socialSecurityMatch + results.employerCosts.medicareMatch) / results.grossPay * 100).toFixed(1)}%</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    updatePayStubTab() {
        const tab = this.container.querySelector(`#paystub-${this.id}`);
        const employee = this.employees[this.currentEmployee];
        const results = this.payrollResults;
        const payDate = new Date();
        const payPeriodEnd = new Date(payDate.getTime() - 1 * 24 * 60 * 60 * 1000);
        const payPeriodStart = new Date(payPeriodEnd.getTime() - 13 * 24 * 60 * 60 * 1000);
        
        tab.innerHTML = `
            <div class="pay-stub">
                <div class="paystub-header">
                    <div class="company-info">
                        <h4>TechStart Solutions</h4>
                        <div class="company-address">
                            123 Innovation Drive<br>
                            Tech City, CA 94000<br>
                            EIN: 12-3456789
                        </div>
                    </div>
                    <div class="paystub-title">
                        <h3>PAYROLL STATEMENT</h3>
                        <div class="pay-date">Pay Date: ${payDate.toLocaleDateString()}</div>
                    </div>
                </div>
                
                <div class="employee-paystub-info">
                    <div class="employee-details">
                        <div><strong>Employee:</strong> ${employee.name}</div>
                        <div><strong>Position:</strong> ${employee.position}</div>
                        <div><strong>Employee ID:</strong> TS${this.currentEmployee.toUpperCase()}001</div>
                        <div><strong>Department:</strong> ${this.getEmployeeDepartment(employee.position)}</div>
                    </div>
                    <div class="pay-period-info">
                        <div><strong>Pay Period:</strong> ${payPeriodStart.toLocaleDateString()} - ${payPeriodEnd.toLocaleDateString()}</div>
                        <div><strong>Pay Frequency:</strong> Bi-weekly</div>
                        <div><strong>Hours Worked:</strong> ${results.hoursWorked}</div>
                        <div><strong>Rate:</strong> $${results.hourlyRate.toFixed(2)}/hour</div>
                    </div>
                </div>
                
                <div class="paystub-earnings">
                    <h5>EARNINGS</h5>
                    <table class="paystub-table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Rate</th>
                                <th>Hours</th>
                                <th>Current</th>
                                <th>YTD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${results.payType === 'salary' ? 'Salary' : 'Regular Pay'}</td>
                                <td>$${results.hourlyRate.toFixed(2)}</td>
                                <td>${results.hoursWorked}</td>
                                <td>$${results.grossPay.toFixed(2)}</td>
                                <td>$${(results.grossPay * 12).toFixed(2)}</td>
                            </tr>
                            <tr class="total-row">
                                <td colspan="3"><strong>GROSS PAY</strong></td>
                                <td><strong>$${results.grossPay.toFixed(2)}</strong></td>
                                <td><strong>$${(results.grossPay * 12).toFixed(2)}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="paystub-deductions">
                    <div class="deductions-section">
                        <h5>PRE-TAX DEDUCTIONS</h5>
                        <table class="paystub-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Current</th>
                                    <th>YTD</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${results.preTaxDeductions.health > 0 ? `
                                    <tr>
                                        <td>Health Insurance</td>
                                        <td>$${results.preTaxDeductions.health.toFixed(2)}</td>
                                        <td>$${(results.preTaxDeductions.health * 12).toFixed(2)}</td>
                                    </tr>
                                ` : ''}
                                ${results.preTaxDeductions.dental > 0 ? `
                                    <tr>
                                        <td>Dental Insurance</td>
                                        <td>$${results.preTaxDeductions.dental.toFixed(2)}</td>
                                        <td>$${(results.preTaxDeductions.dental * 12).toFixed(2)}</td>
                                    </tr>
                                ` : ''}
                                ${results.preTaxDeductions.retirement401k > 0 ? `
                                    <tr>
                                        <td>401(k) Contribution</td>
                                        <td>$${results.preTaxDeductions.retirement401k.toFixed(2)}</td>
                                        <td>$${(results.preTaxDeductions.retirement401k * 12).toFixed(2)}</td>
                                    </tr>
                                ` : ''}
                                <tr class="total-row">
                                    <td><strong>TOTAL PRE-TAX</strong></td>
                                    <td><strong>$${results.totalPreTaxDeductions.toFixed(2)}</strong></td>
                                    <td><strong>$${(results.totalPreTaxDeductions * 12).toFixed(2)}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="taxes-section">
                        <h5>TAXES</h5>
                        <table class="paystub-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Current</th>
                                    <th>YTD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Federal Income Tax</td>
                                    <td>$${results.taxes.federal.toFixed(2)}</td>
                                    <td>$${(results.taxes.federal * 12).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Social Security Tax</td>
                                    <td>$${results.taxes.socialSecurity.toFixed(2)}</td>
                                    <td>$${(results.taxes.socialSecurity * 12).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Medicare Tax</td>
                                    <td>$${results.taxes.medicare.toFixed(2)}</td>
                                    <td>$${(results.taxes.medicare * 12).toFixed(2)}</td>
                                </tr>
                                ${results.taxes.additionalMedicare > 0 ? `
                                    <tr>
                                        <td>Additional Medicare Tax</td>
                                        <td>$${results.taxes.additionalMedicare.toFixed(2)}</td>
                                        <td>$${(results.taxes.additionalMedicare * 12).toFixed(2)}</td>
                                    </tr>
                                ` : ''}
                                <tr>
                                    <td>State Income Tax</td>
                                    <td>$${results.taxes.state.toFixed(2)}</td>
                                    <td>$${(results.taxes.state * 12).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>State Disability Insurance</td>
                                    <td>$${results.taxes.sdi.toFixed(2)}</td>
                                    <td>$${(results.taxes.sdi * 12).toFixed(2)}</td>
                                </tr>
                                <tr class="total-row">
                                    <td><strong>TOTAL TAXES</strong></td>
                                    <td><strong>$${results.taxes.total.toFixed(2)}</strong></td>
                                    <td><strong>$${(results.taxes.total * 12).toFixed(2)}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="paystub-summary">
                    <table class="paystub-table summary-table">
                        <tbody>
                            <tr>
                                <td><strong>Gross Pay</strong></td>
                                <td><strong>$${results.grossPay.toFixed(2)}</strong></td>
                                <td><strong>$${(results.grossPay * 12).toFixed(2)}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Total Deductions</strong></td>
                                <td><strong>$${(results.totalPreTaxDeductions + results.taxes.total).toFixed(2)}</strong></td>
                                <td><strong>$${((results.totalPreTaxDeductions + results.taxes.total) * 12).toFixed(2)}</strong></td>
                            </tr>
                            <tr class="net-pay-row">
                                <td><strong>NET PAY</strong></td>
                                <td><strong>$${results.netPay.toFixed(2)}</strong></td>
                                <td><strong>$${(results.netPay * 12).toFixed(2)}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="paystub-footer">
                    <div class="payment-method">
                        <strong>Payment Method:</strong> Direct Deposit<br>
                        <strong>Account:</strong> ****1234 (Checking)
                    </div>
                    <div class="important-notices">
                        <strong>IMPORTANT:</strong> Please retain this statement for your records. 
                        Contact HR with any questions.
                    </div>
                </div>
                
                <div class="paystub-actions">
                    <button class="action-btn print-btn" onclick="printPayStub('${this.id}')">🖨️ Print Pay Stub</button>
                    <button class="action-btn email-btn" onclick="emailPayStub('${this.id}')">📧 Email Pay Stub</button>
                    <button class="action-btn pdf-btn" onclick="generatePayStubPDF('${this.id}')">📄 Save as PDF</button>
                </div>
            </div>
        `;
    }
    
    updateYTDTab() {
        const tab = this.container.querySelector(`#ytd-${this.id}`);
        const employee = this.employees[this.currentEmployee];
        const results = this.payrollResults;
        
        // Calculate YTD figures (assuming 12 pay periods so far)
        const payPeriodsYTD = 12;
        
        tab.innerHTML = `
            <div class="ytd-summary">
                <div class="ytd-header">
                    <h5>📊 Year-to-Date Summary</h5>
                    <div class="ytd-period">January 1, 2024 - Current Pay Period (${payPeriodsYTD} pay periods)</div>
                </div>
                
                <div class="ytd-metrics">
                    <div class="ytd-metric-card">
                        <div class="metric-title">Gross Earnings</div>
                        <div class="metric-amount">$${(results.grossPay * payPeriodsYTD).toLocaleString()}</div>
                        <div class="metric-detail">Current Period: $${results.grossPay.toFixed(2)}</div>
                    </div>
                    
                    <div class="ytd-metric-card">
                        <div class="metric-title">Net Pay</div>
                        <div class="metric-amount">$${(results.netPay * payPeriodsYTD).toLocaleString()}</div>
                        <div class="metric-detail">Current Period: $${results.netPay.toFixed(2)}</div>
                    </div>
                    
                    <div class="ytd-metric-card">
                        <div class="metric-title">Total Taxes</div>
                        <div class="metric-amount">$${(results.taxes.total * payPeriodsYTD).toLocaleString()}</div>
                        <div class="metric-detail">Current Period: $${results.taxes.total.toFixed(2)}</div>
                    </div>
                    
                    <div class="ytd-metric-card">
                        <div class="metric-title">401(k) Contributions</div>
                        <div class="metric-amount">$${(results.preTaxDeductions.retirement401k * payPeriodsYTD).toLocaleString()}</div>
                        <div class="metric-detail">Current Period: $${results.preTaxDeductions.retirement401k.toFixed(2)}</div>
                    </div>
                </div>
                
                <div class="ytd-breakdown">
                    <div class="breakdown-section">
                        <h6>Tax Breakdown (YTD)</h6>
                        <table class="ytd-table">
                            <thead>
                                <tr>
                                    <th>Tax Type</th>
                                    <th>Current Period</th>
                                    <th>YTD Amount</th>
                                    <th>YTD Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Federal Income Tax</td>
                                    <td>$${results.taxes.federal.toFixed(2)}</td>
                                    <td>$${(results.taxes.federal * payPeriodsYTD).toFixed(2)}</td>
                                    <td>${((results.taxes.federal * payPeriodsYTD) / (results.grossPay * payPeriodsYTD) * 100).toFixed(1)}%</td>
                                </tr>
                                <tr>
                                    <td>Social Security Tax</td>
                                    <td>$${results.taxes.socialSecurity.toFixed(2)}</td>
                                    <td>$${(results.taxes.socialSecurity * payPeriodsYTD).toFixed(2)}</td>
                                    <td>6.2%</td>
                                </tr>
                                <tr>
                                    <td>Medicare Tax</td>
                                    <td>$${results.taxes.medicare.toFixed(2)}</td>
                                    <td>$${(results.taxes.medicare * payPeriodsYTD).toFixed(2)}</td>
                                    <td>1.45%</td>
                                </tr>
                                <tr>
                                    <td>State Income Tax</td>
                                    <td>$${results.taxes.state.toFixed(2)}</td>
                                    <td>$${(results.taxes.state * payPeriodsYTD).toFixed(2)}</td>
                                    <td>5.0%</td>
                                </tr>
                                <tr>
                                    <td>State Disability</td>
                                    <td>$${results.taxes.sdi.toFixed(2)}</td>
                                    <td>$${(results.taxes.sdi * payPeriodsYTD).toFixed(2)}</td>
                                    <td>0.9%</td>
                                </tr>
                                <tr class="total-row">
                                    <td><strong>Total Taxes</strong></td>
                                    <td><strong>$${results.taxes.total.toFixed(2)}</strong></td>
                                    <td><strong>$${(results.taxes.total * payPeriodsYTD).toFixed(2)}</strong></td>
                                    <td><strong>${((results.taxes.total * payPeriodsYTD) / (results.grossPay * payPeriodsYTD) * 100).toFixed(1)}%</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="breakdown-section">
                        <h6>Benefits & Deductions (YTD)</h6>
                        <table class="ytd-table">
                            <thead>
                                <tr>
                                    <th>Benefit Type</th>
                                    <th>Employee Contribution</th>
                                    <th>Employer Contribution</th>
                                    <th>Total Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Health Insurance</td>
                                    <td>$${(results.preTaxDeductions.health * payPeriodsYTD).toFixed(2)}</td>
                                    <td>$${(results.employerCosts.healthContribution * payPeriodsYTD).toFixed(2)}</td>
                                    <td>$${((results.preTaxDeductions.health + results.employerCosts.healthContribution) * payPeriodsYTD).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Dental Insurance</td>
                                    <td>$${(results.preTaxDeductions.dental * payPeriodsYTD).toFixed(2)}</td>
                                    <td>$${(results.employerCosts.dentalContribution * payPeriodsYTD).toFixed(2)}</td>
                                    <td>$${((results.preTaxDeductions.dental + results.employerCosts.dentalContribution) * payPeriodsYTD).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>401(k) Retirement</td>
                                    <td>$${(results.preTaxDeductions.retirement401k * payPeriodsYTD).toFixed(2)}</td>
                                    <td>$${(results.employerCosts.retirement401kMatch * payPeriodsYTD).toFixed(2)}</td>
                                    <td>$${((results.preTaxDeductions.retirement401k + results.employerCosts.retirement401kMatch) * payPeriodsYTD).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="ytd-projections">
                    <h6>📈 Year-End Projections</h6>
                    <div class="projections-grid">
                        <div class="projection-item">
                            <div class="projection-label">Projected Annual Gross:</div>
                            <div class="projection-value">$${(results.grossPay * 26).toLocaleString()}</div>
                        </div>
                        <div class="projection-item">
                            <div class="projection-label">Projected Annual Net:</div>
                            <div class="projection-value">$${(results.netPay * 26).toLocaleString()}</div>
                        </div>
                        <div class="projection-item">
                            <div class="projection-label">Projected Annual Taxes:</div>
                            <div class="projection-value">$${(results.taxes.total * 26).toLocaleString()}</div>
                        </div>
                        <div class="projection-item">
                            <div class="projection-label">Effective Tax Rate:</div>
                            <div class="projection-value">${((results.taxes.total / results.grossPay) * 100).toFixed(1)}%</div>
                        </div>
                    </div>
                </div>
                
                <div class="ytd-actions">
                    <button class="action-btn" onclick="generateW2Preview('${this.id}')">📋 W-2 Preview</button>
                    <button class="action-btn" onclick="generate1099Preview('${this.id}')">📋 1099 Preview</button>
                    <button class="action-btn" onclick="exportYTDData('${this.id}')">📊 Export Data</button>
                </div>
            </div>
        `;
    }
    
    updateTaxesTab() {
        const tab = this.container.querySelector(`#taxes-${this.id}`);
        const results = this.payrollResults;
        
        tab.innerHTML = `
            <div class="tax-details">
                <div class="tax-overview">
                    <h5>🏛️ Tax Calculation Details</h5>
                    <p>Understanding payroll taxes and their calculation methods</p>
                </div>
                
                <div class="tax-sections">
                    <div class="tax-section">
                        <h6>Federal Income Tax</h6>
                        <div class="tax-explanation">
                            <p>Calculated using progressive tax brackets based on taxable income and filing status.</p>
                            <div class="tax-calc-details">
                                <div class="calc-step">
                                    <span class="calc-label">Taxable Income (Annual):</span>
                                    <span class="calc-value">$${(results.taxableIncome * 26).toLocaleString()}</span>
                                </div>
                                <div class="calc-step">
                                    <span class="calc-label">Tax per Pay Period:</span>
                                    <span class="calc-value">$${results.taxes.federal.toFixed(2)}</span>
                                </div>
                                <div class="calc-step">
                                    <span class="calc-label">Effective Rate:</span>
                                    <span class="calc-value">${((results.taxes.federal / results.taxableIncome) * 100).toFixed(2)}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tax-section">
                        <h6>Social Security Tax (FICA)</h6>
                        <div class="tax-explanation">
                            <p>6.2% on wages up to $160,200 annual wage base (2024).</p>
                            <div class="tax-calc-details">
                                <div class="calc-step">
                                    <span class="calc-label">Tax Rate:</span>
                                    <span class="calc-value">6.2%</span>
                                </div>
                                <div class="calc-step">
                                    <span class="calc-label">Wage Base Remaining:</span>
                                    <span class="calc-value">$${Math.max(0, 160200 - (results.taxableIncome * 26)).toLocaleString()}</span>
                                </div>
                                <div class="calc-step">
                                    <span class="calc-label">Tax per Pay Period:</span>
                                    <span class="calc-value">$${results.taxes.socialSecurity.toFixed(2)}</span>
                                </div>
                                <div class="calc-step">
                                    <span class="calc-label">Employer Match:</span>
                                    <span class="calc-value">$${results.employerCosts.socialSecurityMatch.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tax-section">
                        <h6>Medicare Tax (FICA)</h6>
                        <div class="tax-explanation">
                            <p>1.45% on all wages, plus 0.9% additional Medicare tax on high earners.</p>
                            <div class="tax-calc-details">
                                <div class="calc-step">
                                    <span class="calc-label">Base Tax Rate:</span>
                                    <span class="calc-value">1.45%</span>
                                </div>
                                <div class="calc-step">
                                    <span class="calc-label">Base Tax:</span>
                                    <span class="calc-value">$${results.taxes.medicare.toFixed(2)}</span>
                                </div>
                                ${results.taxes.additionalMedicare > 0 ? `
                                    <div class="calc-step">
                                        <span class="calc-label">Additional Medicare (0.9%):</span>
                                        <span class="calc-value">$${results.taxes.additionalMedicare.toFixed(2)}</span>
                                    </div>
                                ` : ''}
                                <div class="calc-step">
                                    <span class="calc-label">Employer Match:</span>
                                    <span class="calc-value">$${results.employerCosts.medicareMatch.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tax-section">
                        <h6>State Taxes</h6>
                        <div class="tax-explanation">
                            <p>California state income tax and disability insurance.</p>
                            <div class="tax-calc-details">
                                <div class="calc-step">
                                    <span class="calc-label">State Income Tax (5%):</span>
                                    <span class="calc-value">$${results.taxes.state.toFixed(2)}</span>
                                </div>
                                <div class="calc-step">
                                    <span class="calc-label">State Disability (0.9%):</span>
                                    <span class="calc-value">$${results.taxes.sdi.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="employer-tax-obligations">
                    <h6>🏢 Employer Tax Obligations</h6>
                    <div class="employer-taxes">
                        <div class="emp-tax-item">
                            <span class="emp-tax-label">Social Security Match:</span>
                            <span class="emp-tax-value">$${results.employerCosts.socialSecurityMatch.toFixed(2)}</span>
                        </div>
                        <div class="emp-tax-item">
                            <span class="emp-tax-label">Medicare Match:</span>
                            <span class="emp-tax-value">$${results.employerCosts.medicareMatch.toFixed(2)}</span>
                        </div>
                        <div class="emp-tax-item">
                            <span class="emp-tax-label">Federal Unemployment (FUTA):</span>
                            <span class="emp-tax-value">$${results.employerCosts.futa.toFixed(2)}</span>
                        </div>
                        <div class="emp-tax-item">
                            <span class="emp-tax-label">State Unemployment (SUTA):</span>
                            <span class="emp-tax-value">$${results.employerCosts.suta.toFixed(2)}</span>
                        </div>
                        <div class="emp-tax-item">
                            <span class="emp-tax-label">Workers' Compensation:</span>
                            <span class="emp-tax-value">$${results.employerCosts.workersComp.toFixed(2)}</span>
                        </div>
                        <div class="emp-tax-item total">
                            <span class="emp-tax-label"><strong>Total Employer Taxes:</strong></span>
                            <span class="emp-tax-value"><strong>$${(results.employerCosts.socialSecurityMatch + results.employerCosts.medicareMatch + results.employerCosts.futa + results.employerCosts.suta + results.employerCosts.workersComp).toFixed(2)}</strong></span>
                        </div>
                    </div>
                </div>
                
                <div class="tax-optimization">
                    <h6>💡 Tax Optimization Opportunities</h6>
                    <div class="optimization-tips">
                        <div class="tip-item">
                            <h7>Increase 401(k) Contributions</h7>
                            <p>Current contribution: ${((results.preTaxDeductions.retirement401k / results.grossPay) * 100).toFixed(1)}% | 
                            Max potential savings: $${((results.grossPay * 0.23) - results.preTaxDeductions.retirement401k).toFixed(2)} per pay period</p>
                        </div>
                        <div class="tip-item">
                            <h7>Health Savings Account (HSA)</h7>
                            <p>If eligible for high-deductible health plan, HSA contributions reduce taxable income</p>
                        </div>
                        <div class="tip-item">
                            <h7>Dependent Care FSA</h7>
                            <p>Up to $5,000 annually for childcare expenses (pre-tax)</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    updateBenefitsTab() {
        const tab = this.container.querySelector(`#benefits-${this.id}`);
        const employee = this.employees[this.currentEmployee];
        const results = this.payrollResults;
        
        tab.innerHTML = `
            <div class="benefits-overview">
                <h5>🏥 Employee Benefits Package</h5>
                <p>Comprehensive benefits analysis for ${employee.name}</p>
                
                <div class="benefits-summary">
                    <div class="benefit-metric">
                        <div class="metric-title">Total Benefits Value</div>
                        <div class="metric-amount">$${((results.preTaxDeductions.health + results.preTaxDeductions.dental + results.preTaxDeductions.retirement401k + results.employerCosts.healthContribution + results.employerCosts.dentalContribution + results.employerCosts.retirement401kMatch) * 26).toLocaleString()}</div>
                        <div class="metric-subtitle">Annual value</div>
                    </div>
                    
                    <div class="benefit-metric">
                        <div class="metric-title">Employee Contributions</div>
                        <div class="metric-amount">$${(results.totalPreTaxDeductions * 26).toLocaleString()}</div>
                        <div class="metric-subtitle">Annual cost to employee</div>
                    </div>
                    
                    <div class="benefit-metric">
                        <div class="metric-title">Employer Contributions</div>
                        <div class="metric-amount">$${((results.employerCosts.healthContribution + results.employerCosts.dentalContribution + results.employerCosts.retirement401kMatch) * 26).toLocaleString()}</div>
                        <div class="metric-subtitle">Annual cost to employer</div>
                    </div>
                </div>
                
                <div class="benefits-breakdown">
                    <div class="benefit-section">
                        <h6>🏥 Health Insurance</h6>
                        <div class="benefit-details">
                            <div class="benefit-row">
                                <span class="benefit-label">Plan Type:</span>
                                <span class="benefit-value">PPO Health Plan</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Monthly Premium:</span>
                                <span class="benefit-value">$${(results.preTaxDeductions.health + results.employerCosts.healthContribution).toFixed(2)}</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Employee Share:</span>
                                <span class="benefit-value">$${results.preTaxDeductions.health.toFixed(2)} (${((results.preTaxDeductions.health / (results.preTaxDeductions.health + results.employerCosts.healthContribution)) * 100).toFixed(0)}%)</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Employer Share:</span>
                                <span class="benefit-value">$${results.employerCosts.healthContribution.toFixed(2)} (${((results.employerCosts.healthContribution / (results.preTaxDeductions.health + results.employerCosts.healthContribution)) * 100).toFixed(0)}%)</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Annual Deductible:</span>
                                <span class="benefit-value">$2,500 individual / $5,000 family</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Out-of-Pocket Max:</span>
                                <span class="benefit-value">$8,000 individual / $16,000 family</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="benefit-section">
                        <h6>🦷 Dental Insurance</h6>
                        <div class="benefit-details">
                            <div class="benefit-row">
                                <span class="benefit-label">Plan Type:</span>
                                <span class="benefit-value">DPPO Dental Plan</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Monthly Premium:</span>
                                <span class="benefit-value">$${(results.preTaxDeductions.dental + results.employerCosts.dentalContribution).toFixed(2)}</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Employee Share:</span>
                                <span class="benefit-value">$${results.preTaxDeductions.dental.toFixed(2)} (${((results.preTaxDeductions.dental / (results.preTaxDeductions.dental + results.employerCosts.dentalContribution)) * 100).toFixed(0)}%)</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Annual Maximum:</span>
                                <span class="benefit-value">$2,000 per person</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Preventive Care:</span>
                                <span class="benefit-value">100% covered</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="benefit-section">
                        <h6>💰 401(k) Retirement Plan</h6>
                        <div class="benefit-details">
                            <div class="benefit-row">
                                <span class="benefit-label">Employee Contribution:</span>
                                <span class="benefit-value">${((results.preTaxDeductions.retirement401k / results.grossPay) * 100).toFixed(1)}% of gross pay</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Annual Employee Contribution:</span>
                                <span class="benefit-value">$${(results.preTaxDeductions.retirement401k * 26).toLocaleString()}</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Employer Match:</span>
                                <span class="benefit-value">50% up to 6% of salary</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Annual Employer Match:</span>
                                <span class="benefit-value">$${(results.employerCosts.retirement401kMatch * 26).toLocaleString()}</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Vesting Schedule:</span>
                                <span class="benefit-value">100% immediate vesting</span>
                            </div>
                            <div class="benefit-row">
                                <span class="benefit-label">Annual Contribution Limit:</span>
                                <span class="benefit-value">$23,000 (2024)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="benefits-optimization">
                    <h6>💡 Benefits Optimization Recommendations</h6>
                    <div class="optimization-recommendations">
                        ${this.generateBenefitsRecommendations(employee, results)}
                    </div>
                </div>
                
                <div class="benefits-calculator">
                    <h6>🧮 Benefits Calculator</h6>
                    <div class="calculator-section">
                        <div class="calc-input-group">
                            <label>Adjust 401(k) Contribution Percentage:</label>
                            <input type="range" min="0" max="23" step="0.5" value="${((results.preTaxDeductions.retirement401k / results.grossPay) * 100).toFixed(1)}" 
                                   class="benefits-slider" id="retirement-slider-${this.id}">
                            <span class="slider-value" id="retirement-value-${this.id}">${((results.preTaxDeductions.retirement401k / results.grossPay) * 100).toFixed(1)}%</span>
                        </div>
                        
                        <div class="calc-results" id="calc-results-${this.id}">
                            <!-- Results will be updated dynamically -->
                        </div>
                    </div>
                </div>
                
                <div class="benefits-comparison">
                    <h6>📊 Market Comparison</h6>
                    <p>TechStart Solutions benefits package compared to industry standards:</p>
                    <div class="comparison-chart">
                        <div class="comparison-item">
                            <span class="comparison-label">Health Insurance Coverage</span>
                            <div class="comparison-bar">
                                <div class="comparison-fill" style="width: 85%"></div>
                            </div>
                            <span class="comparison-value">85% (Above Average)</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-label">401(k) Match</span>
                            <div class="comparison-bar">
                                <div class="comparison-fill" style="width: 70%"></div>
                            </div>
                            <span class="comparison-value">70% (Average)</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-label">Dental Coverage</span>
                            <div class="comparison-bar">
                                <div class="comparison-fill" style="width: 90%"></div>
                            </div>
                            <span class="comparison-value">90% (Excellent)</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listener for benefits calculator
        const slider = this.container.querySelector(`#retirement-slider-${this.id}`);
        const valueDisplay = this.container.querySelector(`#retirement-value-${this.id}`);
        const calcResults = this.container.querySelector(`#calc-results-${this.id}`);
        
        if (slider) {
            slider.addEventListener('input', (e) => {
                const percentage = parseFloat(e.target.value);
                valueDisplay.textContent = percentage.toFixed(1) + '%';
                
                // Calculate impact
                const newContribution = results.grossPay * (percentage / 100);
                const newTaxableIncome = results.grossPay - newContribution - (results.totalPreTaxDeductions - results.preTaxDeductions.retirement401k);
                const newTaxes = this.calculateTaxes(newTaxableIncome, employee);
                const newNetPay = newTaxableIncome - newTaxes.total;
                const employerMatch = newContribution * 0.5; // 50% match
                
                calcResults.innerHTML = `
                    <div class="calc-impact">
                        <h7>Impact of ${percentage.toFixed(1)}% Contribution:</h7>
                        <div class="impact-item">
                            <span class="impact-label">Annual 401(k) Contribution:</span>
                            <span class="impact-value">$${(newContribution * 26).toLocaleString()}</span>
                        </div>
                        <div class="impact-item">
                            <span class="impact-label">Annual Employer Match:</span>
                            <span class="impact-value">$${(employerMatch * 26).toLocaleString()}</span>
                        </div>
                        <div class="impact-item">
                            <span class="impact-label">Change in Net Pay:</span>
                            <span class="impact-value">${newNetPay > results.netPay ? '+' : ''}$${((newNetPay - results.netPay) * 26).toFixed(0)}/year</span>
                        </div>
                        <div class="impact-item">
                            <span class="impact-label">Tax Savings:</span>
                            <span class="impact-value">$${((results.taxes.total - newTaxes.total) * 26).toFixed(0)}/year</span>
                        </div>
                    </div>
                `;
            });
        }
    }
    
    updateReportsTab() {
        const tab = this.container.querySelector(`#reports-${this.id}`);
        
        tab.innerHTML = `
            <div class="payroll-reports">
                <h5>📈 Payroll Reports & Analytics</h5>
                
                <div class="reports-grid">
                    <div class="report-section">
                        <h6>🏢 Company Payroll Summary</h6>
                        <div class="company-summary">
                            ${this.generateCompanyPayrollSummary()}
                        </div>
                    </div>
                    
                    <div class="report-section">
                        <h6>📊 Department Breakdown</h6>
                        <div class="department-analysis">
                            ${this.generateDepartmentAnalysis()}
                        </div>
                    </div>
                    
                    <div class="report-section">
                        <h6>📈 Payroll Trends</h6>
                        <div class="trends-analysis">
                            ${this.generateTrendsAnalysis()}
                        </div>
                    </div>
                    
                    <div class="report-section">
                        <h6>💰 Cost Analysis</h6>
                        <div class="cost-analysis">
                            ${this.generateCostAnalysis()}
                        </div>
                    </div>
                </div>
                
                <div class="compliance-reports">
                    <h6>🏛️ Compliance Reports</h6>
                    <div class="compliance-grid">
                        <button class="report-btn" onclick="generateQuarterlyReport('${this.id}')">📋 Quarterly 941 Report</button>
                        <button class="report-btn" onclick="generateW2Report('${this.id}')">📄 W-2 Summary</button>
                        <button class="report-btn" onclick="generatePayrollRegister('${this.id}')">📊 Payroll Register</button>
                        <button class="report-btn" onclick="generateLaborDistribution('${this.id}')">💼 Labor Distribution</button>
                    </div>
                </div>
                
                <div class="export-options">
                    <h6>📤 Export Options</h6>
                    <div class="export-grid">
                        <button class="export-btn" onclick="exportToExcel('${this.id}')">📈 Excel</button>
                        <button class="export-btn" onclick="exportToPDF('${this.id}')">📄 PDF</button>
                        <button class="export-btn" onclick="exportToCSV('${this.id}')">📝 CSV</button>
                        <button class="export-btn" onclick="exportToQuickBooks('${this.id}')">💰 QuickBooks</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    updateSummary() {
        const summary = this.container.querySelector(`#summary-${this.id}`);
        const employee = this.employees[this.currentEmployee];
        const results = this.payrollResults;
        
        summary.innerHTML = `
            <div class="summary-employee">
                <div class="summary-item">
                    <span class="summary-label">Employee:</span>
                    <span class="summary-value">${employee.name}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Position:</span>
                    <span class="summary-value">${employee.position}</span>
                </div>
            </div>
            
            <div class="summary-pay">
                <div class="summary-item">
                    <span class="summary-label">Gross Pay:</span>
                    <span class="summary-value">$${results.grossPay.toFixed(2)}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Total Deductions:</span>
                    <span class="summary-value">$${(results.totalPreTaxDeductions + results.taxes.total).toFixed(2)}</span>
                </div>
                <div class="summary-item highlight">
                    <span class="summary-label">NET PAY:</span>
                    <span class="summary-value">$${results.netPay.toFixed(2)}</span>
                </div>
            </div>
            
            <div class="summary-employer">
                <div class="summary-item">
                    <span class="summary-label">Total Employer Cost:</span>
                    <span class="summary-value">$${results.totalEmployerCost.toFixed(2)}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Labor Burden:</span>
                    <span class="summary-value">${((results.totalEmployerCost / results.grossPay - 1) * 100).toFixed(1)}%</span>
                </div>
            </div>
        `;
    }
    
    // Utility and helper methods
    switchTab(tabName) {
        // Update tab buttons
        const tabButtons = this.container.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            }
        });
        
        // Update tab content
        const tabContents = this.container.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.classList.contains(tabName)) {
                content.classList.add('active');
            }
        });
    }
    
    changeEmployee(employeeKey) {
        this.currentEmployee = employeeKey;
        this.calculatePayroll();
        this.updateDisplay();
        
        // Award points for exploring different employee scenarios
        if (window.awardPoints) {
            window.awardPoints(5, `Analyzed payroll for ${this.employees[employeeKey].name}`);
        }
    }
    
    getEmployeeDepartment(position) {
        const departments = {
            'CEO/Founder': 'Executive',
            'Marketing Manager': 'Marketing',
            'Accountant (Consultant)': 'Finance'
        };
        return departments[position] || 'General';
    }
    
    generateBenefitsRecommendations(employee, results) {
        const recommendations = [];
        
        // 401k optimization
        const currentContributionRate = (results.preTaxDeductions.retirement401k / results.grossPay) * 100;
        if (currentContributionRate < 6) {
            recommendations.push(`<li><strong>Maximize 401(k) Match:</strong> Increase contribution to 6% to receive full employer match (currently at ${currentContributionRate.toFixed(1)}%)</li>`);
        }
        
        // HSA eligibility
        if (results.preTaxDeductions.health > 200) {
            recommendations.push(`<li><strong>Consider High-Deductible Health Plan + HSA:</strong> Potential tax savings with HSA-eligible plan</li>`);
        }
        
        // Benefits utilization
        if (results.preTaxDeductions.health + results.preTaxDeductions.dental < 300) {
            recommendations.push(`<li><strong>Excellent Benefits Value:</strong> Current benefits cost is well below market average</li>`);
        }
        
        return recommendations.map(rec => rec).join('');
    }
    
    generateCompanyPayrollSummary() {
        const employees = Object.values(this.employees);
        let totalGross = 0;
        let totalEmployerCost = 0;
        
        employees.forEach(emp => {
            const tempResults = this.calculateEmployeePayroll(emp);
            totalGross += tempResults.grossPay;
            totalEmployerCost += tempResults.totalEmployerCost;
        });
        
        return `
            <div class="company-metrics">
                <div class="metric-item">
                    <span class="metric-label">Total Employees:</span>
                    <span class="metric-value">${employees.length}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Total Bi-Weekly Gross:</span>
                    <span class="metric-value">$${totalGross.toLocaleString()}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Total Bi-Weekly Employer Cost:</span>
                    <span class="metric-value">$${totalEmployerCost.toLocaleString()}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Annual Payroll Cost:</span>
                    <span class="metric-value">$${(totalEmployerCost * 26).toLocaleString()}</span>
                </div>
            </div>
        `;
    }
    
    generateDepartmentAnalysis() {
        return `
            <div class="department-breakdown">
                <div class="dept-item">
                    <span class="dept-label">Executive:</span>
                    <span class="dept-value">$${(this.employees.sarah.annualSalary || 0).toLocaleString()}/year</span>
                </div>
                <div class="dept-item">
                    <span class="dept-label">Marketing:</span>
                    <span class="dept-value">$${(this.employees.alex.annualSalary || 0).toLocaleString()}/year</span>
                </div>
                <div class="dept-item">
                    <span class="dept-label">Finance (Contractor):</span>
                    <span class="dept-value">$${((this.employees.jennifer.hourlyRate || 0) * (this.employees.jennifer.hoursWorked || 0) * 26).toLocaleString()}/year</span>
                </div>
            </div>
        `;
    }
    
    generateTrendsAnalysis() {
        return `
            <div class="trends-info">
                <div class="trend-item">
                    <span class="trend-label">Payroll Growth Rate:</span>
                    <span class="trend-value">+12% YoY</span>
                </div>
                <div class="trend-item">
                    <span class="trend-label">Benefits Utilization:</span>
                    <span class="trend-value">85% enrollment</span>
                </div>
                <div class="trend-item">
                    <span class="trend-label">Avg. Tax Rate:</span>
                    <span class="trend-value">22.5%</span>
                </div>
            </div>
        `;
    }
    
    generateCostAnalysis() {
        const results = this.payrollResults;
        return `
            <div class="cost-breakdown">
                <div class="cost-item">
                    <span class="cost-label">Labor Cost Ratio:</span>
                    <span class="cost-value">${((results.totalEmployerCost / results.grossPay) * 100).toFixed(1)}%</span>
                </div>
                <div class="cost-item">
                    <span class="cost-label">Benefits as % of Gross:</span>
                    <span class="cost-value">${((results.totalPreTaxDeductions / results.grossPay) * 100).toFixed(1)}%</span>
                </div>
                <div class="cost-item">
                    <span class="cost-label">Tax Burden (Total):</span>
                    <span class="cost-value">${(((results.taxes.total + results.employerCosts.socialSecurityMatch + results.employerCosts.medicareMatch) / results.grossPay) * 100).toFixed(1)}%</span>
                </div>
            </div>
        `;
    }
    
    calculateEmployeePayroll(employee) {
        // Simplified calculation for summary purposes
        const grossPay = employee.annualSalary ? 
            employee.annualSalary / 26 : 
            (employee.hourlyRate || 0) * (employee.hoursWorked || 0);
        
        const preTaxDeductions = (employee.benefits.health || 0) + 
                                (employee.benefits.dental || 0) + 
                                (grossPay * (employee.benefits.retirement401k || 0));
        
        const taxableIncome = grossPay - preTaxDeductions;
        const taxes = this.calculateTaxes(taxableIncome, employee);
        const employerCosts = this.calculateEmployerCosts(grossPay, employee);
        
        return {
            grossPay: grossPay,
            totalEmployerCost: grossPay + employerCosts.total,
            netPay: taxableIncome - taxes.total
        };
    }
    
    addStyles() {
        if (document.getElementById('payroll-calculator-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'payroll-calculator-styles';
        styles.textContent = `
            .payroll-calculator {
                max-width: 1200px;
                margin: 20px auto;
                padding: 20px;
                border: 2px solid #28a745;
                border-radius: 10px;
                background: #f8f9fa;
            }
            
            .calculator-header {
                text-align: center;
                margin-bottom: 20px;
            }
            
            .calculator-header h3 {
                color: #28a745;
                margin: 0;
            }
            
            .employee-selector {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
                display: flex;
                align-items: center;
                gap: 15px;
                flex-wrap: wrap;
            }
            
            .employee-select {
                padding: 8px 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                flex: 1;
                min-width: 200px;
            }
            
            .add-employee-btn {
                background: #28a745;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
            }
            
            .payroll-tabs {
                background: white;
                border-radius: 8px;
                margin: 20px 0;
            }
            
            .tab-buttons {
                display: flex;
                border-bottom: 1px solid #e9ecef;
                overflow-x: auto;
            }
            
            .tab-btn {
                flex: 1;
                min-width: 120px;
                padding: 15px 10px;
                border: none;
                background: none;
                cursor: pointer;
                font-weight: bold;
                color: #6c757d;
                transition: all 0.3s ease;
                white-space: nowrap;
            }
            
            .tab-btn.active {
                color: #28a745;
                border-bottom: 3px solid #28a745;
                background: #f8f9fa;
            }
            
            .payroll-content {
                background: white;
                padding: 20px;
                border-radius: 0 0 8px 8px;
                min-height: 500px;
            }
            
            .tab-content {
                display: none;
            }
            
            .tab-content.active {
                display: block;
            }
            
            .employee-info {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                margin: 20px 0;
            }
            
            .employee-details {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 10px;
            }
            
            .detail-group {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
            }
            
            .detail-group label {
                font-weight: 500;
                color: #495057;
            }
            
            .pay-inputs {
                margin: 20px 0;
                padding: 15px;
                background: #e8f5e8;
                border-radius: 6px;
            }
            
            .input-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 15px;
                margin-top: 15px;
            }
            
            .input-group {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            
            .input-group label {
                font-weight: 500;
                color: #495057;
            }
            
            .payroll-input {
                padding: 8px 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
            }
            
            .pay-calculation {
                margin: 30px 0;
            }
            
            .calculation-flow {
                display: flex;
                align-items: center;
                gap: 15px;
                overflow-x: auto;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 8px;
            }
            
            .calc-step {
                min-width: 150px;
                text-align: center;
                padding: 15px;
                background: white;
                border-radius: 6px;
                border: 1px solid #e9ecef;
            }
            
            .calc-step.net-pay {
                background: #d4edda;
                border-color: #28a745;
            }
            
            .step-label {
                font-weight: bold;
                color: #495057;
                font-size: 14px;
                margin-bottom: 8px;
            }
            
            .step-amount {
                font-size: 18px;
                font-weight: bold;
                color: #28a745;
                margin-bottom: 8px;
            }
            
            .calc-step.net-pay .step-amount {
                font-size: 22px;
                color: #155724;
            }
            
            .step-details {
                font-size: 12px;
                color: #6c757d;
                line-height: 1.3;
            }
            
            .calc-operator {
                font-size: 24px;
                font-weight: bold;
                color: #495057;
                margin: 0 10px;
            }
            
            .employer-costs {
                margin: 30px 0;
                padding: 20px;
                background: #fff3cd;
                border-radius: 8px;
                border-left: 4px solid #ffc107;
            }
            
            .cost-breakdown {
                margin-top: 15px;
            }
            
            .cost-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0;
                border-bottom: 1px solid #e9ecef;
            }
            
            .cost-item.total {
                border-top: 2px solid #495057;
                border-bottom: none;
                font-size: 18px;
                margin-top: 10px;
                padding-top: 15px;
            }
            
            .cost-label {
                color: #495057;
            }
            
            .cost-amount {
                font-weight: bold;
                color: #28a745;
            }
            
            .cost-analysis {
                margin-top: 20px;
                padding: 15px;
                background: white;
                border-radius: 6px;
            }
            
            .analysis-metric {
                display: flex;
                justify-content: space-between;
                margin: 10px 0;
            }
            
            .metric-label {
                font-weight: 500;
                color: #495057;
            }
            
            .metric-value {
                font-weight: bold;
                color: #17a2b8;
            }
            
            .payroll-summary {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border: 1px solid #e9ecef;
            }
            
            .summary-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin-top: 15px;
            }
            
            .summary-employee,
            .summary-pay,
            .summary-employer {
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .summary-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 8px 0;
            }
            
            .summary-item.highlight {
                font-size: 18px;
                font-weight: bold;
                color: #28a745;
                border-top: 1px solid #e9ecef;
                padding-top: 10px;
                margin-top: 15px;
            }
            
            .summary-label {
                color: #495057;
            }
            
            .summary-value {
                font-weight: bold;
                color: #28a745;
            }
            
            .business-scenario {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #007bff;
            }
            
            .scenario-content ul {
                margin: 10px 0;
                padding-left: 20px;
            }
            
            .learning-activity {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #ffc107;
            }
            
            .payroll-analysis-input {
                width: 100%;
                height: 120px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin: 10px 0;
                resize: vertical;
            }
            
            .submit-payroll-analysis-btn {
                background: #ffc107;
                color: #212529;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
            }
            
            /* Pay Stub Styles */
            .pay-stub {
                background: white;
                font-family: 'Courier New', monospace;
                max-width: 800px;
                margin: 0 auto;
                border: 1px solid #ddd;
            }
            
            .paystub-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                padding: 20px;
                border-bottom: 2px solid #333;
                background: #f8f9fa;
            }
            
            .company-info h4 {
                margin: 0;
                color: #333;
            }
            
            .company-address {
                margin-top: 10px;
                font-size: 12px;
                color: #666;
            }
            
            .paystub-title {
                text-align: right;
            }
            
            .paystub-title h3 {
                margin: 0;
                color: #333;
            }
            
            .pay-date {
                margin-top: 5px;
                font-size: 14px;
                color: #666;
            }
            
            .employee-paystub-info {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                padding: 15px 20px;
                background: #f9f9f9;
                border-bottom: 1px solid #ddd;
            }
            
            .employee-details div,
            .pay-period-info div {
                margin: 5px 0;
                font-size: 12px;
            }
            
            .paystub-table {
                width: 100%;
                border-collapse: collapse;
                margin: 10px 0;
            }
            
            .paystub-table th,
            .paystub-table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
                font-size: 12px;
            }
            
            .paystub-table th {
                background: #f8f9fa;
                font-weight: bold;
            }
            
            .paystub-table td:nth-child(n+2) {
                text-align: right;
            }
            
            .total-row {
                background: #e9ecef;
                border-top: 2px solid #333;
            }
            
            .net-pay-row {
                background: #d4edda;
                border: 2px solid #28a745;
                font-size: 14px;
            }
            
            .paystub-earnings,
            .paystub-deductions {
                padding: 15px 20px;
            }
            
            .deductions-section,
            .taxes-section {
                margin-bottom: 20px;
            }
            
            .paystub-summary {
                padding: 15px 20px;
                background: #f8f9fa;
                border-top: 2px solid #333;
            }
            
            .summary-table {
                font-size: 14px;
                font-weight: bold;
            }
            
            .paystub-footer {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                padding: 15px 20px;
                background: #f9f9f9;
                border-top: 1px solid #ddd;
                font-size: 11px;
            }
            
            .paystub-actions {
                display: flex;
                gap: 10px;
                justify-content: center;
                padding: 20px;
                background: #f8f9fa;
                border-top: 1px solid #ddd;
            }
            
            .action-btn {
                padding: 8px 16px;
                border: 1px solid #28a745;
                background: white;
                color: #28a745;
                border-radius: 4px;
                cursor: pointer;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
            }
            
            .action-btn:hover {
                background: #28a745;
                color: white;
            }
            
            /* YTD Tab Styles */
            .ytd-header {
                text-align: center;
                margin-bottom: 30px;
                padding: 20px;
                background: #e8f5e8;
                border-radius: 8px;
            }
            
            .ytd-period {
                color: #6c757d;
                margin-top: 10px;
            }
            
            .ytd-metrics {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            .ytd-metric-card {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
                text-align: center;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            .metric-title {
                font-weight: bold;
                color: #495057;
                margin-bottom: 10px;
            }
            
            .metric-amount {
                font-size: 24px;
                font-weight: bold;
                color: #28a745;
                margin-bottom: 5px;
            }
            
            .metric-detail {
                font-size: 12px;
                color: #6c757d;
            }
            
            .ytd-breakdown {
                margin: 30px 0;
            }
            
            .breakdown-section {
                margin-bottom: 40px;
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
            }
            
            .ytd-table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }
            
            .ytd-table th,
            .ytd-table td {
                border: 1px solid #dee2e6;
                padding: 10px;
                text-align: left;
            }
            
            .ytd-table th {
                background: #f8f9fa;
                font-weight: bold;
            }
            
            .ytd-table td:nth-child(n+2) {
                text-align: right;
            }
            
            .ytd-projections {
                background: #e8f4f8;
                padding: 20px;
                border-radius: 8px;
                margin: 30px 0;
                border-left: 4px solid #17a2b8;
            }
            
            .projections-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 15px;
            }
            
            .projection-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                background: white;
                border-radius: 4px;
            }
            
            .projection-label {
                font-weight: 500;
                color: #495057;
            }
            
            .projection-value {
                font-weight: bold;
                color: #17a2b8;
            }
            
            .ytd-actions {
                display: flex;
                gap: 10px;
                justify-content: center;
                margin-top: 30px;
                flex-wrap: wrap;
            }
            
            /* Benefits Tab Styles */
            .benefits-summary {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            .benefit-metric {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
                text-align: center;
            }
            
            .benefits-breakdown {
                margin: 30px 0;
            }
            
            .benefit-section {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
                margin-bottom: 20px;
            }
            
            .benefit-details {
                margin-top: 15px;
            }
            
            .benefit-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0;
                border-bottom: 1px solid #f8f9fa;
            }
            
            .benefit-label {
                font-weight: 500;
                color: #495057;
            }
            
            .benefit-value {
                font-weight: bold;
                color: #28a745;
            }
            
            .benefits-optimization {
                background: #e8f5e8;
                padding: 20px;
                border-radius: 8px;
                margin: 30px 0;
                border-left: 4px solid #28a745;
            }
            
            .optimization-recommendations {
                margin-top: 15px;
            }
            
            .optimization-recommendations li {
                margin: 10px 0;
                padding: 10px;
                background: white;
                border-radius: 4px;
            }
            
            .benefits-calculator {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
                margin: 30px 0;
            }
            
            .calc-input-group {
                display: flex;
                align-items: center;
                gap: 15px;
                margin: 15px 0;
                flex-wrap: wrap;
            }
            
            .benefits-slider {
                flex: 1;
                min-width: 200px;
            }
            
            .slider-value {
                font-weight: bold;
                color: #28a745;
                min-width: 60px;
            }
            
            .calc-results {
                margin-top: 20px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .calc-impact {
                margin-top: 10px;
            }
            
            .impact-item {
                display: flex;
                justify-content: space-between;
                margin: 8px 0;
            }
            
            .impact-label {
                color: #495057;
            }
            
            .impact-value {
                font-weight: bold;
                color: #17a2b8;
            }
            
            .benefits-comparison {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
                margin: 30px 0;
            }
            
            .comparison-chart {
                margin-top: 20px;
            }
            
            .comparison-item {
                display: flex;
                align-items: center;
                gap: 15px;
                margin: 15px 0;
            }
            
            .comparison-label {
                min-width: 150px;
                font-weight: 500;
                color: #495057;
            }
            
            .comparison-bar {
                flex: 1;
                height: 20px;
                background: #e9ecef;
                border-radius: 10px;
                overflow: hidden;
            }
            
            .comparison-fill {
                height: 100%;
                background: linear-gradient(90deg, #28a745, #20c997);
                transition: width 0.3s ease;
            }
            
            .comparison-value {
                min-width: 120px;
                font-weight: bold;
                color: #28a745;
                text-align: right;
            }
            
            /* Reports Tab Styles */
            .reports-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            .report-section {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
            }
            
            .compliance-reports {
                margin: 30px 0;
                background: #fff3cd;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #ffc107;
            }
            
            .compliance-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 15px;
            }
            
            .report-btn {
                padding: 12px 16px;
                border: 1px solid #ffc107;
                background: white;
                color: #856404;
                border-radius: 4px;
                cursor: pointer;
                text-align: center;
                transition: all 0.3s ease;
            }
            
            .report-btn:hover {
                background: #ffc107;
                color: white;
            }
            
            .export-options {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
                margin: 30px 0;
            }
            
            .export-grid {
                display: flex;
                gap: 15px;
                justify-content: center;
                margin-top: 15px;
                flex-wrap: wrap;
            }
            
            .export-btn {
                padding: 10px 20px;
                border: 1px solid #007bff;
                background: white;
                color: #007bff;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .export-btn:hover {
                background: #007bff;
                color: white;
            }
            
            /* Tax Details Styles */
            .tax-sections {
                margin: 30px 0;
            }
            
            .tax-section {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
                margin-bottom: 20px;
            }
            
            .tax-explanation {
                margin-top: 10px;
            }
            
            .tax-calc-details {
                margin-top: 15px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .calc-step {
                display: flex;
                justify-content: space-between;
                margin: 8px 0;
            }
            
            .calc-label {
                color: #495057;
            }
            
            .calc-value {
                font-weight: bold;
                color: #17a2b8;
            }
            
            .employer-tax-obligations {
                background: #e8f4f8;
                padding: 20px;
                border-radius: 8px;
                margin: 30px 0;
                border-left: 4px solid #17a2b8;
            }
            
            .employer-taxes {
                margin-top: 15px;
            }
            
            .emp-tax-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0;
                border-bottom: 1px solid #e9ecef;
            }
            
            .emp-tax-item.total {
                border-top: 2px solid #495057;
                border-bottom: none;
                margin-top: 10px;
                padding-top: 15px;
                font-size: 16px;
            }
            
            .emp-tax-label {
                color: #495057;
            }
            
            .emp-tax-value {
                font-weight: bold;
                color: #17a2b8;
            }
            
            .tax-optimization {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e9ecef;
                margin: 30px 0;
            }
            
            .optimization-tips {
                margin-top: 15px;
            }
            
            .tip-item {
                margin: 15px 0;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
                border-left: 3px solid #28a745;
            }
            
            .tip-item h7 {
                font-weight: bold;
                color: #495057;
                display: block;
                margin-bottom: 8px;
            }
            
            @media (max-width: 768px) {
                .calculation-flow {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .calc-operator {
                    transform: rotate(90deg);
                }
                
                .employee-paystub-info {
                    grid-template-columns: 1fr;
                }
                
                .paystub-footer {
                    grid-template-columns: 1fr;
                }
                
                .tab-buttons {
                    flex-wrap: wrap;
                }
                
                .tab-btn {
                    min-width: 100px;
                    font-size: 12px;
                    padding: 10px 5px;
                }
                
                .summary-grid,
                .ytd-metrics,
                .benefits-summary {
                    grid-template-columns: 1fr;
                }
                
                .export-grid,
                .compliance-grid {
                    grid-template-columns: 1fr;
                }
                
                .comparison-item {
                    flex-direction: column;
                    gap: 10px;
                    align-items: stretch;
                }
                
                .comparison-label,
                .comparison-value {
                    min-width: auto;
                    text-align: center;
                }
                
                .calc-input-group {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .paystub-actions {
                    flex-direction: column;
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
}

// ===================================
// Utility Functions
// ===================================

function createPayrollCalculator(container, id, type) {
    const calculator = new PayrollCalculator(container, id, type);
    payrollInstances[id] = calculator;
    return calculator;
}

// ===================================
// Global Functions for Button Clicks
// ===================================

window.addNewEmployee = function(calculatorId) {
    // Simplified employee addition for demo
    alert('Employee addition feature would integrate with HR system. For this demo, use the existing employee selector.');
};

window.printPayStub = function(calculatorId) {
    const calculator = payrollInstances[calculatorId];
    if (calculator) {
        window.print();
        
        if (window.awardPoints) {
            window.awardPoints(5, 'Generated pay stub');
        }
    }
};

window.emailPayStub = function(calculatorId) {
    alert('Pay stub would be emailed to employee. Email integration not available in demo.');
    
    if (window.awardPoints) {
        window.awardPoints(5, 'Emailed pay stub');
    }
};

window.generatePayStubPDF = function(calculatorId) {
    alert('PDF generation would create downloadable pay stub. PDF library not included in demo.');
    
    if (window.awardPoints) {
        window.awardPoints(5, 'Generated PDF pay stub');
    }
};

window.generateW2Preview = function(calculatorId) {
    alert('W-2 preview would show year-end tax document. Full implementation requires tax year data.');
    
    if (window.awardPoints) {
        window.awardPoints(10, 'Generated W-2 preview');
    }
};

window.generate1099Preview = function(calculatorId) {
    alert('1099 preview for contractor payments. Would integrate with contractor payment system.');
    
    if (window.awardPoints) {
        window.awardPoints(10, 'Generated 1099 preview');
    }
};

window.exportYTDData = function(calculatorId) {
    alert('YTD data export would generate Excel/CSV file with year-to-date payroll information.');
    
    if (window.awardPoints) {
        window.awardPoints(10, 'Exported YTD payroll data');
    }
};

window.generateQuarterlyReport = function(calculatorId) {
    alert('Quarterly 941 report for federal tax reporting. Would integrate with tax preparation software.');
    
    if (window.awardPoints) {
        window.awardPoints(15, 'Generated quarterly tax report');
    }
};

window.generateW2Report = function(calculatorId) {
    alert('W-2 summary report for all employees. Full implementation for year-end processing.');
    
    if (window.awardPoints) {
        window.awardPoints(15, 'Generated W-2 summary report');
    }
};

window.generatePayrollRegister = function(calculatorId) {
    alert('Payroll register showing detailed payroll information for all employees by pay period.');
    
    if (window.awardPoints) {
        window.awardPoints(10, 'Generated payroll register');
    }
};

window.generateLaborDistribution = function(calculatorId) {
    alert('Labor distribution report showing payroll costs by department/project.');
    
    if (window.awardPoints) {
        window.awardPoints(10, 'Generated labor distribution report');
    }
};

window.exportToExcel = function(calculatorId) {
    alert('Excel export would generate comprehensive payroll workbook.');
    
    if (window.awardPoints) {
        window.awardPoints(10, 'Exported payroll data to Excel');
    }
};

window.exportToPDF = function(calculatorId) {
    alert('PDF export would generate professional payroll reports.');
    
    if (window.awardPoints) {
        window.awardPoints(10, 'Exported payroll reports to PDF');
    }
};

window.exportToCSV = function(calculatorId) {
    alert('CSV export for data analysis and integration with other systems.');
    
    if (window.awardPoints) {
        window.awardPoints(5, 'Exported payroll data to CSV');
    }
};

window.exportToQuickBooks = function(calculatorId) {
    alert('QuickBooks integration would sync payroll data with accounting system.');
    
    if (window.awardPoints) {
        window.awardPoints(15, 'Exported payroll data to QuickBooks');
    }
};

window.submitPayrollAnalysis = function(calculatorId) {
    const calculator = payrollInstances[calculatorId];
    if (!calculator) return;
    
    const textarea = calculator.container.querySelector('.payroll-analysis-input');
    const analysisText = textarea.value.trim();
    
    if (analysisText.length < 100) {
        alert('Please provide a more comprehensive analysis (at least 100 characters) covering payroll costs, tax efficiency, and recommendations.');
        return;
    }
    
    // Award points for thorough analysis
    if (window.awardPoints) {
        window.awardPoints(30, 'Completed comprehensive payroll analysis');
    }
    
    // Provide feedback
    const feedback = `
        <div class="payroll-feedback">
            <h5>💰 Excellent Payroll Analysis!</h5>
            <p>You've demonstrated strong understanding of payroll complexities and business cost management.</p>
            
            <div class="payroll-insights">
                <h6>Key Payroll Management Skills Demonstrated:</h6>
                <ul>
                    <li><strong>Cost Analysis:</strong> Understanding total cost of employment beyond salary</li>
                    <li><strong>Tax Compliance:</strong> Proper calculation of federal, state, and local taxes</li>
                    <li><strong>Benefits Management:</strong> Optimizing employee benefits for retention and cost control</li>
                    <li><strong>Cash Flow Planning:</strong> Managing payroll timing and cash requirements</li>
                    <li><strong>Compliance Management:</strong> Understanding legal requirements and reporting obligations</li>
                </ul>
            </div>
            
            <div class="sarah-application">
                <h6>💼 Application to Sarah's Business:</h6>
                <p>Your payroll analysis helps Sarah understand the true cost of hiring and maintaining employees:</p>
                <ul>
                    <li><strong>Labor Burden:</strong> Total employment cost is ~30% higher than base salary</li>
                    <li><strong>Cash Flow:</strong> Bi-weekly payroll requires careful cash management</li>
                    <li><strong>Growth Planning:</strong> Understanding payroll costs for scaling decisions</li>
                    <li><strong>Benefits Strategy:</strong> Competitive benefits package for talent retention</li>
                    <li><strong>Tax Strategy:</strong> Optimizing pre-tax benefits for employee and employer savings</li>
                </ul>
            </div>
            
            <div class="next-steps">
                <h6>🚀 Next Steps for TechStart Solutions:</h6>
                <ul>
                    <li>Implement automated payroll system to reduce processing time and errors</li>
                    <li>Review benefits package quarterly for competitiveness and cost optimization</li>
                    <li>Establish payroll reserves for smooth cash flow management</li>
                    <li>Consider professional payroll service as team grows beyond 10 employees</li>
                    <li>Implement time tracking system for accurate hourly employee management</li>
                </ul>
            </div>
        </div>
    `;
    
    const activityContainer = calculator.container.querySelector('.learning-activity');
    activityContainer.innerHTML += feedback;
    
    // Scroll to feedback
    activityContainer.scrollIntoView({ behavior: 'smooth' });
};

// ===================================
// Integration with Existing Systems
// ===================================

// Integration with gamification system
document.addEventListener('payrollCalculationComplete', function(event) {
    const { calculatorId, employee, grossPay, netPay, totalCost } = event.detail;
    
    // Award points based on calculation complexity
    let points = 35; // Base points for payroll calculation
    
    if (totalCost > 5000) points += 10; // Bonus for complex calculations
    if (employee.includes('multiple')) points += 15; // Bonus for multiple employees
    
    if (window.awardPoints) {
        window.awardPoints(points, `Payroll calculation mastery: ${employee}`);
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PayrollCalculator, createPayrollCalculator };
}