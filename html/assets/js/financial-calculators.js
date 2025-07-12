// ===================================
// Financial Calculators
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeFinancialCalculators();
});

// ===================================
// Calculator Classes
// ===================================

class NPVCalculator {
    constructor(container) {
        this.container = container;
        this.createHTML();
        this.setupEventListeners();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="financial-calculator npv-calculator">
                <div class="calculator-header">
                    <h3>Net Present Value (NPV) Calculator</h3>
                    <p>Calculate the present value of future cash flows</p>
                </div>
                
                <div class="calculator-content">
                    <div class="input-section">
                        <div class="input-group">
                            <label for="initial-investment">Initial Investment ($)</label>
                            <input type="number" id="initial-investment" placeholder="10000" min="0" step="0.01">
                        </div>
                        
                        <div class="input-group">
                            <label for="discount-rate">Discount Rate (%)</label>
                            <input type="number" id="discount-rate" placeholder="8" min="0" max="100" step="0.1">
                        </div>
                        
                        <div class="cash-flows-section">
                            <label>Annual Cash Flows</label>
                            <div class="cash-flows-container">
                                <div class="cash-flow-input">
                                    <span>Year 1:</span>
                                    <input type="number" class="cash-flow" data-year="1" placeholder="3000" step="0.01">
                                </div>
                                <div class="cash-flow-input">
                                    <span>Year 2:</span>
                                    <input type="number" class="cash-flow" data-year="2" placeholder="4000" step="0.01">
                                </div>
                                <div class="cash-flow-input">
                                    <span>Year 3:</span>
                                    <input type="number" class="cash-flow" data-year="3" placeholder="5000" step="0.01">
                                </div>
                            </div>
                            <button class="add-year-btn">+ Add Year</button>
                        </div>
                    </div>
                    
                    <div class="results-section">
                        <h4>Results</h4>
                        <div class="result-item">
                            <span class="result-label">NPV:</span>
                            <span class="result-value npv-result">$0.00</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Decision:</span>
                            <span class="result-value decision-result">-</span>
                        </div>
                        
                        <div class="calculation-breakdown">
                            <h5>Calculation Breakdown</h5>
                            <div class="breakdown-content">
                                <div class="breakdown-step">
                                    <span>Initial Investment:</span>
                                    <span class="initial-inv-display">$0.00</span>
                                </div>
                                <div class="present-values"></div>
                                <div class="breakdown-step total">
                                    <span>Total Present Value:</span>
                                    <span class="total-pv-display">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="calculator-explanation">
                    <h4>How NPV Works</h4>
                    <p>NPV calculates whether an investment will add value by comparing the present value of cash inflows to the initial investment.</p>
                    <ul>
                        <li><strong>NPV > 0:</strong> Investment adds value (Accept)</li>
                        <li><strong>NPV = 0:</strong> Investment breaks even</li>
                        <li><strong>NPV < 0:</strong> Investment loses value (Reject)</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    setupEventListeners() {
        const inputs = this.container.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.calculate());
        });
        
        const addYearBtn = this.container.querySelector('.add-year-btn');
        addYearBtn.addEventListener('click', () => this.addCashFlowYear());
        
        // Initialize with example values
        this.setExampleValues();
    }
    
    setExampleValues() {
        this.container.querySelector('#initial-investment').value = '10000';
        this.container.querySelector('#discount-rate').value = '8';
        const cashFlows = this.container.querySelectorAll('.cash-flow');
        const exampleFlows = [3000, 4000, 5000];
        cashFlows.forEach((input, index) => {
            input.value = exampleFlows[index] || '';
        });
        this.calculate();
    }
    
    addCashFlowYear() {
        const container = this.container.querySelector('.cash-flows-container');
        const currentYear = container.children.length + 1;
        
        const newInput = document.createElement('div');
        newInput.className = 'cash-flow-input';
        newInput.innerHTML = `
            <span>Year ${currentYear}:</span>
            <input type="number" class="cash-flow" data-year="${currentYear}" placeholder="0" step="0.01">
            <button class="remove-year" onclick="this.parentElement.remove()">×</button>
        `;
        
        container.appendChild(newInput);
        
        newInput.querySelector('.cash-flow').addEventListener('input', () => this.calculate());
    }
    
    calculate() {
        const initialInvestment = parseFloat(this.container.querySelector('#initial-investment').value) || 0;
        const discountRate = parseFloat(this.container.querySelector('#discount-rate').value) || 0;
        const cashFlowInputs = this.container.querySelectorAll('.cash-flow');
        
        const cashFlows = [];
        cashFlowInputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            if (value !== 0) {
                cashFlows.push(value);
            }
        });
        
        if (cashFlows.length === 0) {
            this.displayResults(0, 0, []);
            return;
        }
        
        // Calculate present values
        const presentValues = [];
        let totalPV = 0;
        
        cashFlows.forEach((cashFlow, index) => {
            const year = index + 1;
            const pv = cashFlow / Math.pow(1 + discountRate / 100, year);
            presentValues.push({
                year: year,
                cashFlow: cashFlow,
                presentValue: pv
            });
            totalPV += pv;
        });
        
        const npv = totalPV - initialInvestment;
        
        this.displayResults(npv, totalPV, presentValues, initialInvestment);
    }
    
    displayResults(npv, totalPV, presentValues, initialInvestment = 0) {
        const npvResult = this.container.querySelector('.npv-result');
        const decisionResult = this.container.querySelector('.decision-result');
        const initialInvDisplay = this.container.querySelector('.initial-inv-display');
        const totalPVDisplay = this.container.querySelector('.total-pv-display');
        const presentValuesContainer = this.container.querySelector('.present-values');
        
        // Display NPV
        npvResult.textContent = this.formatCurrency(npv);
        npvResult.className = `result-value npv-result ${npv > 0 ? 'positive' : npv < 0 ? 'negative' : 'neutral'}`;
        
        // Display decision
        let decision = 'Break even';
        if (npv > 0) decision = '✅ Accept (Adds value)';
        else if (npv < 0) decision = '❌ Reject (Loses value)';
        
        decisionResult.textContent = decision;
        
        // Display breakdown
        initialInvDisplay.textContent = this.formatCurrency(-initialInvestment);
        totalPVDisplay.textContent = this.formatCurrency(totalPV);
        
        // Display present values
        presentValuesContainer.innerHTML = '';
        presentValues.forEach(pv => {
            const step = document.createElement('div');
            step.className = 'breakdown-step';
            step.innerHTML = `
                <span>Year ${pv.year} PV:</span>
                <span>${this.formatCurrency(pv.presentValue)}</span>
            `;
            presentValuesContainer.appendChild(step);
        });
    }
    
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
}

class LoanCalculator {
    constructor(container) {
        this.container = container;
        this.createHTML();
        this.setupEventListeners();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="financial-calculator loan-calculator">
                <div class="calculator-header">
                    <h3>Loan Payment Calculator</h3>
                    <p>Calculate monthly payments and total interest</p>
                </div>
                
                <div class="calculator-content">
                    <div class="input-section">
                        <div class="input-group">
                            <label for="loan-amount">Loan Amount ($)</label>
                            <input type="number" id="loan-amount" placeholder="100000" min="0" step="0.01">
                        </div>
                        
                        <div class="input-group">
                            <label for="interest-rate">Annual Interest Rate (%)</label>
                            <input type="number" id="interest-rate" placeholder="6.5" min="0" max="100" step="0.01">
                        </div>
                        
                        <div class="input-group">
                            <label for="loan-term">Loan Term (years)</label>
                            <input type="number" id="loan-term" placeholder="30" min="1" max="50" step="1">
                        </div>
                    </div>
                    
                    <div class="results-section">
                        <h4>Results</h4>
                        <div class="result-item major">
                            <span class="result-label">Monthly Payment:</span>
                            <span class="result-value payment-result">$0.00</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Total Interest:</span>
                            <span class="result-value interest-result">$0.00</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Total Amount:</span>
                            <span class="result-value total-result">$0.00</span>
                        </div>
                    </div>
                </div>
                
                <div class="amortization-section">
                    <h4>Payment Breakdown</h4>
                    <div class="payment-chart">
                        <div class="chart-item">
                            <div class="chart-bar principal-bar">
                                <span class="chart-label">Principal</span>
                                <span class="chart-value principal-amount">$0</span>
                            </div>
                        </div>
                        <div class="chart-item">
                            <div class="chart-bar interest-bar">
                                <span class="chart-label">Interest</span>
                                <span class="chart-value interest-amount">$0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    setupEventListeners() {
        const inputs = this.container.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.calculate());
        });
        
        this.setExampleValues();
    }
    
    setExampleValues() {
        this.container.querySelector('#loan-amount').value = '200000';
        this.container.querySelector('#interest-rate').value = '6.5';
        this.container.querySelector('#loan-term').value = '30';
        this.calculate();
    }
    
    calculate() {
        const principal = parseFloat(this.container.querySelector('#loan-amount').value) || 0;
        const annualRate = parseFloat(this.container.querySelector('#interest-rate').value) || 0;
        const years = parseInt(this.container.querySelector('#loan-term').value) || 0;
        
        if (principal === 0 || annualRate === 0 || years === 0) {
            this.displayResults(0, 0, 0);
            return;
        }
        
        const monthlyRate = annualRate / 100 / 12;
        const numberOfPayments = years * 12;
        
        // Calculate monthly payment using formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
        const monthlyPayment = principal * 
            (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        
        const totalAmount = monthlyPayment * numberOfPayments;
        const totalInterest = totalAmount - principal;
        
        this.displayResults(monthlyPayment, totalInterest, totalAmount);
        this.updateChart(principal, totalInterest);
    }
    
    displayResults(monthlyPayment, totalInterest, totalAmount) {
        this.container.querySelector('.payment-result').textContent = this.formatCurrency(monthlyPayment);
        this.container.querySelector('.interest-result').textContent = this.formatCurrency(totalInterest);
        this.container.querySelector('.total-result').textContent = this.formatCurrency(totalAmount);
    }
    
    updateChart(principal, totalInterest) {
        const principalBar = this.container.querySelector('.principal-bar');
        const interestBar = this.container.querySelector('.interest-bar');
        const principalAmount = this.container.querySelector('.principal-amount');
        const interestAmount = this.container.querySelector('.interest-amount');
        
        const total = principal + totalInterest;
        const principalPercent = (principal / total) * 100;
        const interestPercent = (totalInterest / total) * 100;
        
        principalBar.style.width = `${principalPercent}%`;
        interestBar.style.width = `${interestPercent}%`;
        
        principalAmount.textContent = this.formatCurrency(principal);
        interestAmount.textContent = this.formatCurrency(totalInterest);
    }
    
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
}

class BreakEvenCalculator {
    constructor(container) {
        this.container = container;
        this.createHTML();
        this.setupEventListeners();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="financial-calculator breakeven-calculator">
                <div class="calculator-header">
                    <h3>Break-Even Analysis Calculator</h3>
                    <p>Determine how many units you need to sell to break even</p>
                </div>
                
                <div class="calculator-content">
                    <div class="input-section">
                        <div class="input-group">
                            <label for="fixed-costs">Fixed Costs ($)</label>
                            <input type="number" id="fixed-costs" placeholder="10000" min="0" step="0.01">
                            <small>Rent, salaries, insurance, etc.</small>
                        </div>
                        
                        <div class="input-group">
                            <label for="selling-price">Selling Price per Unit ($)</label>
                            <input type="number" id="selling-price" placeholder="25" min="0" step="0.01">
                        </div>
                        
                        <div class="input-group">
                            <label for="variable-cost">Variable Cost per Unit ($)</label>
                            <input type="number" id="variable-cost" placeholder="15" min="0" step="0.01">
                            <small>Materials, labor, shipping per unit</small>
                        </div>
                    </div>
                    
                    <div class="results-section">
                        <h4>Results</h4>
                        <div class="result-item major">
                            <span class="result-label">Break-Even Units:</span>
                            <span class="result-value breakeven-units">0</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Break-Even Revenue:</span>
                            <span class="result-value breakeven-revenue">$0.00</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Contribution Margin:</span>
                            <span class="result-value contribution-margin">$0.00</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Margin Ratio:</span>
                            <span class="result-value margin-ratio">0%</span>
                        </div>
                    </div>
                </div>
                
                <div class="scenario-analysis">
                    <h4>What If Analysis</h4>
                    <div class="scenario-inputs">
                        <label for="target-units">Target Units to Sell:</label>
                        <input type="number" id="target-units" placeholder="1000" min="0">
                        <button class="analyze-btn">Analyze</button>
                    </div>
                    <div class="scenario-results">
                        <div class="scenario-result">
                            <span>Revenue:</span>
                            <span class="scenario-revenue">$0</span>
                        </div>
                        <div class="scenario-result">
                            <span>Total Costs:</span>
                            <span class="scenario-costs">$0</span>
                        </div>
                        <div class="scenario-result">
                            <span>Profit/Loss:</span>
                            <span class="scenario-profit">$0</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    setupEventListeners() {
        const inputs = this.container.querySelectorAll('input[id^="fixed-costs"], input[id^="selling-price"], input[id^="variable-cost"]');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.calculate());
        });
        
        const analyzeBtn = this.container.querySelector('.analyze-btn');
        analyzeBtn.addEventListener('click', () => this.analyzeScenario());
        
        this.setExampleValues();
    }
    
    setExampleValues() {
        this.container.querySelector('#fixed-costs').value = '10000';
        this.container.querySelector('#selling-price').value = '25';
        this.container.querySelector('#variable-cost').value = '15';
        this.container.querySelector('#target-units').value = '1500';
        this.calculate();
    }
    
    calculate() {
        const fixedCosts = parseFloat(this.container.querySelector('#fixed-costs').value) || 0;
        const sellingPrice = parseFloat(this.container.querySelector('#selling-price').value) || 0;
        const variableCost = parseFloat(this.container.querySelector('#variable-cost').value) || 0;
        
        const contributionMargin = sellingPrice - variableCost;
        const marginRatio = sellingPrice > 0 ? (contributionMargin / sellingPrice) * 100 : 0;
        
        let breakEvenUnits = 0;
        let breakEvenRevenue = 0;
        
        if (contributionMargin > 0) {
            breakEvenUnits = Math.ceil(fixedCosts / contributionMargin);
            breakEvenRevenue = breakEvenUnits * sellingPrice;
        }
        
        this.displayResults(breakEvenUnits, breakEvenRevenue, contributionMargin, marginRatio);
    }
    
    displayResults(units, revenue, margin, ratio) {
        this.container.querySelector('.breakeven-units').textContent = units.toLocaleString();
        this.container.querySelector('.breakeven-revenue').textContent = this.formatCurrency(revenue);
        this.container.querySelector('.contribution-margin').textContent = this.formatCurrency(margin);
        this.container.querySelector('.margin-ratio').textContent = `${ratio.toFixed(1)}%`;
    }
    
    analyzeScenario() {
        const fixedCosts = parseFloat(this.container.querySelector('#fixed-costs').value) || 0;
        const sellingPrice = parseFloat(this.container.querySelector('#selling-price').value) || 0;
        const variableCost = parseFloat(this.container.querySelector('#variable-cost').value) || 0;
        const targetUnits = parseFloat(this.container.querySelector('#target-units').value) || 0;
        
        const revenue = targetUnits * sellingPrice;
        const totalVariableCosts = targetUnits * variableCost;
        const totalCosts = fixedCosts + totalVariableCosts;
        const profit = revenue - totalCosts;
        
        this.container.querySelector('.scenario-revenue').textContent = this.formatCurrency(revenue);
        this.container.querySelector('.scenario-costs').textContent = this.formatCurrency(totalCosts);
        
        const profitElement = this.container.querySelector('.scenario-profit');
        profitElement.textContent = this.formatCurrency(profit);
        profitElement.className = `scenario-profit ${profit >= 0 ? 'positive' : 'negative'}`;
    }
    
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
}

// ===================================
// Calculator Initialization
// ===================================

function initializeFinancialCalculators() {
    // NPV Calculators
    const npvContainers = document.querySelectorAll('.npv-calculator-container');
    npvContainers.forEach(container => {
        new NPVCalculator(container);
    });
    
    // Loan Calculators
    const loanContainers = document.querySelectorAll('.loan-calculator-container');
    loanContainers.forEach(container => {
        new LoanCalculator(container);
    });
    
    // Break-Even Calculators
    const breakEvenContainers = document.querySelectorAll('.breakeven-calculator-container');
    breakEvenContainers.forEach(container => {
        new BreakEvenCalculator(container);
    });
    
    // Add calculator styles
    addCalculatorStyles();
}

function addCalculatorStyles() {
    if (document.getElementById('calculator-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'calculator-styles';
    styles.textContent = `
        .financial-calculator {
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            margin: 2rem 0;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .calculator-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            text-align: center;
        }
        
        .calculator-header h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.5rem;
        }
        
        .calculator-header p {
            margin: 0;
            opacity: 0.9;
        }
        
        .calculator-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 2rem;
        }
        
        .input-section h4,
        .results-section h4 {
            margin: 0 0 1.5rem 0;
            color: #2d3748;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 0.5rem;
        }
        
        .input-group {
            margin-bottom: 1.5rem;
        }
        
        .input-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #4a5568;
        }
        
        .input-group input {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #e2e8f0;
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        
        .input-group input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .input-group small {
            display: block;
            margin-top: 0.25rem;
            color: #718096;
            font-size: 0.85rem;
        }
        
        .cash-flows-section {
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 1rem;
            background: #f7fafc;
        }
        
        .cash-flows-section label {
            margin-bottom: 1rem;
        }
        
        .cash-flow-input {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
        }
        
        .cash-flow-input span {
            min-width: 60px;
            font-weight: 500;
        }
        
        .cash-flow-input input {
            flex: 1;
            margin: 0;
        }
        
        .add-year-btn, .remove-year {
            background: #48bb78;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: background 0.3s ease;
        }
        
        .add-year-btn:hover {
            background: #38a169;
        }
        
        .remove-year {
            background: #f56565;
            padding: 0.25rem 0.5rem;
            min-width: auto;
        }
        
        .remove-year:hover {
            background: #e53e3e;
        }
        
        .result-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 0;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .result-item:last-child {
            border-bottom: none;
        }
        
        .result-item.major {
            background: #f0fff4;
            padding: 1rem;
            border-radius: 6px;
            border: 2px solid #48bb78;
            margin-bottom: 1rem;
        }
        
        .result-item.major .result-value {
            font-size: 1.5rem;
            font-weight: bold;
            color: #22543d;
        }
        
        .result-label {
            font-weight: 600;
            color: #4a5568;
        }
        
        .result-value {
            font-weight: 600;
        }
        
        .result-value.positive {
            color: #22543d;
        }
        
        .result-value.negative {
            color: #c53030;
        }
        
        .result-value.neutral {
            color: #718096;
        }
        
        .calculation-breakdown,
        .amortization-section,
        .scenario-analysis {
            grid-column: 1 / -1;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 2px solid #e2e8f0;
        }
        
        .breakdown-content {
            background: #f7fafc;
            border-radius: 6px;
            padding: 1rem;
        }
        
        .breakdown-step {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .breakdown-step:last-child {
            border-bottom: none;
        }
        
        .breakdown-step.total {
            font-weight: bold;
            background: #edf2f7;
            margin: 0.5rem -1rem -1rem;
            padding: 0.75rem 1rem;
            border-radius: 0 0 6px 6px;
        }
        
        .payment-chart {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .chart-item {
            flex: 1;
        }
        
        .chart-bar {
            background: #e2e8f0;
            border-radius: 6px;
            padding: 1rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .principal-bar {
            background: linear-gradient(135deg, #48bb78, #38a169);
            color: white;
        }
        
        .interest-bar {
            background: linear-gradient(135deg, #ed8936, #dd6b20);
            color: white;
        }
        
        .chart-label {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .chart-value {
            display: block;
            font-size: 1.25rem;
            font-weight: bold;
        }
        
        .scenario-inputs {
            display: flex;
            gap: 1rem;
            align-items: end;
            margin-bottom: 1rem;
        }
        
        .scenario-inputs label {
            font-weight: 600;
            color: #4a5568;
        }
        
        .scenario-inputs input {
            padding: 0.5rem;
            border: 2px solid #e2e8f0;
            border-radius: 4px;
        }
        
        .analyze-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s ease;
        }
        
        .analyze-btn:hover {
            background: #5a67d8;
        }
        
        .scenario-results {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .scenario-result {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            background: #f7fafc;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
        }
        
        .scenario-profit.positive {
            color: #22543d;
            font-weight: bold;
        }
        
        .scenario-profit.negative {
            color: #c53030;
            font-weight: bold;
        }
        
        .calculator-explanation {
            background: #f0fff4;
            border: 1px solid #9ae6b4;
            border-radius: 6px;
            padding: 1.5rem;
            margin: 1.5rem 2rem 2rem;
        }
        
        .calculator-explanation h4 {
            margin: 0 0 1rem 0;
            color: #22543d;
        }
        
        .calculator-explanation ul {
            margin: 1rem 0 0 0;
        }
        
        .calculator-explanation li {
            margin-bottom: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .calculator-content {
                grid-template-columns: 1fr;
                gap: 1rem;
                padding: 1rem;
            }
            
            .scenario-inputs {
                flex-direction: column;
                align-items: stretch;
            }
            
            .payment-chart {
                flex-direction: column;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// ===================================
// Export Functions
// ===================================

window.FinancialCalculators = {
    NPVCalculator,
    LoanCalculator,
    BreakEvenCalculator,
    initializeFinancialCalculators
};