// ===================================
// Pricing Strategy Simulator
// For Unit 6: PriceLab Challenge
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializePricingSimulators();
});

let pricingInstances = {};

// ===================================
// System Initialization
// ===================================

function initializePricingSimulators() {
    const containers = document.querySelectorAll('.pricing-simulator');
    
    containers.forEach((container, index) => {
        const simulatorId = container.dataset.id || `pricing-${index}`;
        const simulatorType = container.dataset.type || 'comprehensive';
        
        createPricingSimulator(container, simulatorId, simulatorType);
    });
}

class PricingStrategySimulator {
    constructor(container, id, type = 'comprehensive') {
        this.container = container;
        this.id = id;
        this.type = type;
        
        // Product scenarios for TechStart Solutions
        this.products = {
            software_license: {
                name: "TechStart Pro License",
                category: "Software",
                variableCostPerUnit: 5,
                fixedCosts: 50000,
                developmentCost: 200000,
                marketSize: 10000,
                priceElasticity: -1.8,
                competitorPrices: [299, 349, 399, 450, 499],
                description: "Professional software licensing for small businesses"
            },
            consulting_service: {
                name: "Business Consulting Service",
                category: "Service",
                variableCostPerUnit: 75, // Cost per hour
                fixedCosts: 25000,
                developmentCost: 0,
                marketSize: 500,
                priceElasticity: -1.2,
                competitorPrices: [125, 150, 175, 200, 225],
                description: "Strategic business consulting for technology implementation"
            },
            mobile_app: {
                name: "TechStart Mobile App",
                category: "Digital Product",
                variableCostPerUnit: 2,
                fixedCosts: 30000,
                developmentCost: 150000,
                marketSize: 25000,
                priceElasticity: -2.1,
                competitorPrices: [4.99, 7.99, 9.99, 12.99, 14.99],
                description: "Mobile productivity app for entrepreneurs"
            },
            training_program: {
                name: "Entrepreneur Training Program",
                category: "Education",
                variableCostPerUnit: 20,
                fixedCosts: 15000,
                developmentCost: 75000,
                marketSize: 2000,
                priceElasticity: -1.5,
                competitorPrices: [199, 249, 299, 349, 399],
                description: "Comprehensive training program for new entrepreneurs"
            }
        };
        
        // Pricing strategies
        this.pricingStrategies = {
            cost_plus: {
                name: "Cost-Plus Pricing",
                description: "Add fixed markup percentage to total costs",
                formula: "Price = (Variable Cost + Fixed Cost Allocation) × (1 + Markup%)"
            },
            value_based: {
                name: "Value-Based Pricing",
                description: "Price based on perceived customer value",
                formula: "Price = Customer Value Perception × Value Capture %"
            },
            competitive: {
                name: "Competitive Pricing",
                description: "Price relative to competitor prices",
                formula: "Price = Competitor Average × Positioning Factor"
            },
            penetration: {
                name: "Penetration Pricing",
                description: "Low initial price to gain market share",
                formula: "Price = Cost + Minimal Margin (temporary)"
            },
            skimming: {
                name: "Price Skimming",
                description: "High initial price, decrease over time",
                formula: "Price = Maximum Acceptable Price × Market Segment"
            },
            psychological: {
                name: "Psychological Pricing",
                description: "Price points that influence customer perception",
                formula: "Price = Economic Price adjusted for psychological impact"
            }
        };
        
        this.currentProduct = 'software_license';
        this.currentStrategy = 'cost_plus';
        this.simulationResults = {};
        
        this.init();
    }
    
    init() {
        this.createHTML();
        this.setupEventListeners();
        this.runSimulation();
        this.updateDisplay();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="pricing-simulator" id="${this.id}">
                <div class="simulator-header">
                    <h3>💰 Pricing Strategy Simulator</h3>
                    <p>Optimize pricing for TechStart Solutions products</p>
                </div>
                
                <div class="product-selector">
                    <label for="product-select-${this.id}">Choose Product:</label>
                    <select id="product-select-${this.id}" class="product-select">
                        ${Object.entries(this.products).map(([key, product]) => 
                            `<option value="${key}" ${key === this.currentProduct ? 'selected' : ''}>${product.name}</option>`
                        ).join('')}
                    </select>
                </div>
                
                <div class="strategy-selector">
                    <label for="strategy-select-${this.id}">Pricing Strategy:</label>
                    <select id="strategy-select-${this.id}" class="strategy-select">
                        ${Object.entries(this.pricingStrategies).map(([key, strategy]) => 
                            `<option value="${key}" ${key === this.currentStrategy ? 'selected' : ''}>${strategy.name}</option>`
                        ).join('')}
                    </select>
                </div>
                
                <div class="pricing-tabs">
                    <div class="tab-buttons">
                        <button class="tab-btn active" data-tab="strategy">🎯 Strategy</button>
                        <button class="tab-btn" data-tab="analysis">📊 Analysis</button>
                        <button class="tab-btn" data-tab="scenarios">🔬 Scenarios</button>
                        <button class="tab-btn" data-tab="competitors">🏆 Competition</button>
                        <button class="tab-btn" data-tab="optimization">⚡ Optimization</button>
                    </div>
                </div>
                
                <div class="pricing-content">
                    <div class="tab-content strategy active" id="strategy-${this.id}">
                        <!-- Strategy content -->
                    </div>
                    
                    <div class="tab-content analysis" id="analysis-${this.id}">
                        <!-- Analysis content -->
                    </div>
                    
                    <div class="tab-content scenarios" id="scenarios-${this.id}">
                        <!-- Scenarios content -->
                    </div>
                    
                    <div class="tab-content competitors" id="competitors-${this.id}">
                        <!-- Competitors content -->
                    </div>
                    
                    <div class="tab-content optimization" id="optimization-${this.id}">
                        <!-- Optimization content -->
                    </div>
                </div>
                
                <div class="pricing-results">
                    <h4>🎯 Pricing Recommendation</h4>
                    <div class="results-grid" id="results-${this.id}">
                        <!-- Results will be populated dynamically -->
                    </div>
                </div>
                
                <div class="business-scenario">
                    <h4>🏢 Sarah's Pricing Challenge</h4>
                    <div class="scenario-content">
                        <p><strong>TechStart Solutions Pricing Dilemma:</strong></p>
                        <p>Sarah must determine optimal pricing for her product portfolio. Key considerations:</p>
                        <ul>
                            <li>Cost recovery and profit margin requirements</li>
                            <li>Competitive positioning in the market</li>
                            <li>Customer value perception and willingness to pay</li>
                            <li>Market penetration vs. profit maximization goals</li>
                            <li>Long-term pricing sustainability and flexibility</li>
                        </ul>
                    </div>
                </div>
                
                <div class="learning-activity">
                    <h4>🎯 Pricing Strategy Analysis</h4>
                    <div class="activity-question">
                        <p>Based on your pricing simulation results, what pricing strategy would you recommend for Sarah and why?</p>
                        <textarea class="pricing-analysis-input" placeholder="Consider profit margins, market position, competition, and long-term sustainability..."></textarea>
                        <button class="submit-pricing-analysis-btn" onclick="submitPricingAnalysis('${this.id}')">Submit Analysis</button>
                    </div>
                </div>
            </div>
        `;
        
        this.populateTabContent();
    }
    
    populateTabContent() {
        this.populateStrategyTab();
        this.populateAnalysisTab();
        this.populateScenariosTab();
        this.populateCompetitorsTab();
        this.populateOptimizationTab();
    }
    
    populateStrategyTab() {
        const strategyTab = this.container.querySelector(`#strategy-${this.id}`);
        const strategy = this.pricingStrategies[this.currentStrategy];
        const product = this.products[this.currentProduct];
        
        strategyTab.innerHTML = `
            <div class="strategy-details">
                <div class="strategy-info">
                    <h5>📋 ${strategy.name}</h5>
                    <p>${strategy.description}</p>
                    <div class="formula-box">
                        <strong>Formula:</strong> ${strategy.formula}
                    </div>
                </div>
                
                <div class="product-info">
                    <h5>📦 Product Information</h5>
                    <div class="product-details">
                        <p><strong>Product:</strong> ${product.name}</p>
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>Description:</strong> ${product.description}</p>
                    </div>
                </div>
                
                <div class="cost-structure">
                    <h5>💵 Cost Structure</h5>
                    <div class="cost-inputs">
                        <div class="input-group">
                            <label>Variable Cost per Unit:</label>
                            <input type="number" class="variable-cost" value="${product.variableCostPerUnit}" step="0.01" min="0">
                        </div>
                        <div class="input-group">
                            <label>Fixed Costs (Annual):</label>
                            <input type="number" class="fixed-costs" value="${product.fixedCosts}" step="1000" min="0">
                        </div>
                        <div class="input-group">
                            <label>Development Costs:</label>
                            <input type="number" class="development-costs" value="${product.developmentCost}" step="1000" min="0">
                        </div>
                        <div class="input-group">
                            <label>Expected Volume (Annual):</label>
                            <input type="number" class="expected-volume" value="${Math.floor(product.marketSize * 0.1)}" step="100" min="1">
                        </div>
                    </div>
                </div>
                
                <div class="strategy-parameters">
                    <h5>⚙️ Strategy Parameters</h5>
                    <div class="parameter-inputs" id="parameters-${this.id}">
                        <!-- Strategy-specific parameters will be populated here -->
                    </div>
                </div>
                
                <div class="calculate-section">
                    <button class="calculate-price-btn primary-btn" onclick="calculatePrice('${this.id}')">
                        🧮 Calculate Optimal Price
                    </button>
                    <button class="reset-btn secondary-btn" onclick="resetPricingForm('${this.id}')">
                        🔄 Reset
                    </button>
                </div>
            </div>
        `;
        
        this.populateStrategyParameters();
    }
    
    populateStrategyParameters() {
        const parametersContainer = this.container.querySelector(`#parameters-${this.id}`);
        const strategy = this.currentStrategy;
        
        let parametersHTML = '';
        
        switch(strategy) {
            case 'cost_plus':
                parametersHTML = `
                    <div class="input-group">
                        <label>Markup Percentage (%):</label>
                        <input type="number" class="markup-percentage" value="50" step="5" min="0" max="200">
                    </div>
                `;
                break;
                
            case 'value_based':
                parametersHTML = `
                    <div class="input-group">
                        <label>Customer Value Perception ($):</label>
                        <input type="number" class="customer-value" value="500" step="10" min="0">
                    </div>
                    <div class="input-group">
                        <label>Value Capture Percentage (%):</label>
                        <input type="number" class="value-capture" value="60" step="5" min="10" max="90">
                    </div>
                `;
                break;
                
            case 'competitive':
                parametersHTML = `
                    <div class="input-group">
                        <label>Positioning Factor:</label>
                        <select class="positioning-factor">
                            <option value="0.85">Premium (-15%)</option>
                            <option value="0.95">Slight Premium (-5%)</option>
                            <option value="1.00" selected>Match Competition (0%)</option>
                            <option value="1.05">Slight Premium (+5%)</option>
                            <option value="1.15">Premium (+15%)</option>
                        </select>
                    </div>
                `;
                break;
                
            case 'penetration':
                parametersHTML = `
                    <div class="input-group">
                        <label>Target Market Share (%):</label>
                        <input type="number" class="target-market-share" value="20" step="5" min="5" max="50">
                    </div>
                    <div class="input-group">
                        <label>Time Period (months):</label>
                        <input type="number" class="penetration-period" value="12" step="3" min="3" max="36">
                    </div>
                `;
                break;
                
            case 'skimming':
                parametersHTML = `
                    <div class="input-group">
                        <label>Initial Premium (%):</label>
                        <input type="number" class="initial-premium" value="100" step="10" min="25" max="200">
                    </div>
                    <div class="input-group">
                        <label>Price Reduction Timeline (months):</label>
                        <input type="number" class="reduction-timeline" value="6" step="1" min="3" max="18">
                    </div>
                `;
                break;
                
            case 'psychological':
                parametersHTML = `
                    <div class="input-group">
                        <label>Psychological Factor:</label>
                        <select class="psychological-factor">
                            <option value="0.99">Charm Pricing (.99)</option>
                            <option value="0.95">Prestige Pricing (.95)</option>
                            <option value="1.00" selected>Round Number</option>
                            <option value="bundle">Bundle Pricing</option>
                        </select>
                    </div>
                `;
                break;
        }
        
        parametersContainer.innerHTML = parametersHTML;
    }
    
    populateAnalysisTab() {
        const analysisTab = this.container.querySelector(`#analysis-${this.id}`);
        
        analysisTab.innerHTML = `
            <div class="analysis-dashboard">
                <div class="analysis-charts">
                    <div class="chart-container">
                        <h5>📈 Demand Curve Analysis</h5>
                        <canvas id="demand-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                    <div class="chart-container">
                        <h5>💰 Profit Optimization</h5>
                        <canvas id="profit-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                </div>
                
                <div class="analysis-metrics">
                    <h5>📊 Key Metrics</h5>
                    <div class="metrics-grid" id="metrics-${this.id}">
                        <!-- Metrics will be populated dynamically -->
                    </div>
                </div>
                
                <div class="break-even-analysis">
                    <h5>⚖️ Break-Even Analysis</h5>
                    <div class="break-even-results" id="breakeven-${this.id}">
                        <!-- Break-even results will be populated -->
                    </div>
                </div>
            </div>
        `;
    }
    
    populateScenariosTab() {
        const scenariosTab = this.container.querySelector(`#scenarios-${this.id}`);
        
        scenariosTab.innerHTML = `
            <div class="scenario-testing">
                <h5>🔬 Scenario Testing</h5>
                <div class="scenario-controls">
                    <div class="scenario-inputs">
                        <div class="input-group">
                            <label>Market Condition:</label>
                            <select class="market-condition">
                                <option value="normal" selected>Normal Market</option>
                                <option value="recession">Economic Recession</option>
                                <option value="boom">Economic Boom</option>
                                <option value="disruption">Market Disruption</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label>Competition Level:</label>
                            <select class="competition-level">
                                <option value="low">Low Competition</option>
                                <option value="moderate" selected>Moderate Competition</option>
                                <option value="high">High Competition</option>
                                <option value="monopoly">Near Monopoly</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label>Customer Segment:</label>
                            <select class="customer-segment">
                                <option value="price_sensitive">Price Sensitive</option>
                                <option value="value_focused" selected>Value Focused</option>
                                <option value="premium">Premium Segment</option>
                                <option value="enterprise">Enterprise</option>
                            </select>
                        </div>
                    </div>
                    <button class="run-scenario-btn" onclick="runScenarioAnalysis('${this.id}')">🚀 Run Scenario</button>
                </div>
                
                <div class="scenario-results" id="scenario-results-${this.id}">
                    <p>Configure scenario parameters and click "Run Scenario" to see results.</p>
                </div>
                
                <div class="scenario-comparison">
                    <h5>📊 Scenario Comparison</h5>
                    <div class="comparison-table" id="comparison-${this.id}">
                        <!-- Comparison table will be populated -->
                    </div>
                </div>
            </div>
        `;
    }
    
    populateCompetitorsTab() {
        const competitorsTab = this.container.querySelector(`#competitors-${this.id}`);
        const product = this.products[this.currentProduct];
        
        competitorsTab.innerHTML = `
            <div class="competitor-analysis">
                <h5>🏆 Competitive Landscape</h5>
                <div class="competitor-pricing">
                    <div class="competitor-chart">
                        <canvas id="competitor-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                    <div class="competitor-table">
                        <table class="pricing-table">
                            <thead>
                                <tr>
                                    <th>Competitor</th>
                                    <th>Price</th>
                                    <th>Market Position</th>
                                    <th>Relative Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${product.competitorPrices.map((price, index) => `
                                    <tr>
                                        <td>Competitor ${index + 1}</td>
                                        <td>$${price}</td>
                                        <td>${this.getMarketPosition(index)}</td>
                                        <td>${this.getRelativePosition(price, product.competitorPrices)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="competitive-positioning">
                    <h5>📍 Positioning Strategy</h5>
                    <div class="positioning-options">
                        <div class="position-option">
                            <input type="radio" name="positioning-${this.id}" value="cost_leader" id="cost-leader-${this.id}">
                            <label for="cost-leader-${this.id}">💰 Cost Leader</label>
                            <p>Compete on price, target price-sensitive customers</p>
                        </div>
                        <div class="position-option">
                            <input type="radio" name="positioning-${this.id}" value="differentiator" id="differentiator-${this.id}" checked>
                            <label for="differentiator-${this.id}">⭐ Differentiator</label>
                            <p>Compete on unique features and value proposition</p>
                        </div>
                        <div class="position-option">
                            <input type="radio" name="positioning-${this.id}" value="focus" id="focus-${this.id}">
                            <label for="focus-${this.id}">🎯 Focused</label>
                            <p>Target specific niche market segment</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    populateOptimizationTab() {
        const optimizationTab = this.container.querySelector(`#optimization-${this.id}`);
        
        optimizationTab.innerHTML = `
            <div class="price-optimization">
                <h5>⚡ Price Optimization Engine</h5>
                <div class="optimization-controls">
                    <div class="objective-selection">
                        <label>Optimization Objective:</label>
                        <select class="optimization-objective">
                            <option value="profit" selected>Maximize Profit</option>
                            <option value="revenue">Maximize Revenue</option>
                            <option value="market_share">Maximize Market Share</option>
                            <option value="roi">Maximize ROI</option>
                        </select>
                    </div>
                    <div class="constraint-inputs">
                        <div class="input-group">
                            <label>Minimum Margin (%):</label>
                            <input type="number" class="min-margin" value="20" step="5" min="5" max="50">
                        </div>
                        <div class="input-group">
                            <label>Maximum Price ($):</label>
                            <input type="number" class="max-price" value="1000" step="50" min="100">
                        </div>
                        <div class="input-group">
                            <label>Target Volume:</label>
                            <input type="number" class="target-volume" value="1000" step="100" min="100">
                        </div>
                    </div>
                    <button class="optimize-btn" onclick="runOptimization('${this.id}')">🚀 Optimize Price</button>
                </div>
                
                <div class="optimization-results" id="optimization-results-${this.id}">
                    <p>Set optimization parameters and click "Optimize Price" to find the optimal pricing strategy.</p>
                </div>
                
                <div class="sensitivity-analysis">
                    <h5>📊 Sensitivity Analysis</h5>
                    <div class="sensitivity-chart">
                        <canvas id="sensitivity-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                </div>
            </div>
        `;
    }
    
    setupEventListeners() {
        // Tab navigation
        const tabButtons = this.container.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
        
        // Product and strategy selection
        const productSelect = this.container.querySelector('.product-select');
        productSelect.addEventListener('change', (e) => {
            this.currentProduct = e.target.value;
            this.populateTabContent();
            this.runSimulation();
        });
        
        const strategySelect = this.container.querySelector('.strategy-select');
        strategySelect.addEventListener('change', (e) => {
            this.currentStrategy = e.target.value;
            this.populateStrategyTab();
            this.runSimulation();
        });
        
        // Real-time calculation updates
        const inputs = this.container.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                this.runSimulation();
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
        
        // Initialize charts for the active tab
        setTimeout(() => {
            this.initializeCharts(tabName);
        }, 100);
    }
    
    runSimulation() {
        const product = this.products[this.currentProduct];
        const strategy = this.currentStrategy;
        
        // Get current form values
        const variableCost = parseFloat(this.container.querySelector('.variable-cost')?.value || product.variableCostPerUnit);
        const fixedCosts = parseFloat(this.container.querySelector('.fixed-costs')?.value || product.fixedCosts);
        const expectedVolume = parseFloat(this.container.querySelector('.expected-volume')?.value || Math.floor(product.marketSize * 0.1));
        
        // Calculate price based on strategy
        const calculatedPrice = this.calculatePriceByStrategy(strategy, {
            variableCost,
            fixedCosts,
            expectedVolume,
            product
        });
        
        // Calculate key metrics
        const metrics = this.calculateMetrics(calculatedPrice, variableCost, fixedCosts, expectedVolume, product);
        
        this.simulationResults = {
            price: calculatedPrice,
            metrics,
            product,
            strategy
        };
        
        this.updateResults();
    }
    
    calculatePriceByStrategy(strategy, params) {
        const { variableCost, fixedCosts, expectedVolume, product } = params;
        const fixedCostPerUnit = fixedCosts / expectedVolume;
        const totalCostPerUnit = variableCost + fixedCostPerUnit;
        
        switch(strategy) {
            case 'cost_plus':
                const markup = parseFloat(this.container.querySelector('.markup-percentage')?.value || 50) / 100;
                return totalCostPerUnit * (1 + markup);
                
            case 'value_based':
                const customerValue = parseFloat(this.container.querySelector('.customer-value')?.value || 500);
                const valueCapture = parseFloat(this.container.querySelector('.value-capture')?.value || 60) / 100;
                return customerValue * valueCapture;
                
            case 'competitive':
                const avgCompetitorPrice = product.competitorPrices.reduce((a, b) => a + b, 0) / product.competitorPrices.length;
                const positioningFactor = parseFloat(this.container.querySelector('.positioning-factor')?.value || 1.0);
                return avgCompetitorPrice * positioningFactor;
                
            case 'penetration':
                const targetMarketShare = parseFloat(this.container.querySelector('.target-market-share')?.value || 20) / 100;
                return totalCostPerUnit * (1 + (0.5 - targetMarketShare)); // Lower margin for higher market share
                
            case 'skimming':
                const initialPremium = parseFloat(this.container.querySelector('.initial-premium')?.value || 100) / 100;
                return totalCostPerUnit * (1 + 0.5 + initialPremium); // High initial margin
                
            case 'psychological':
                const basePriceEstimate = totalCostPerUnit * 1.5;
                const psychFactor = this.container.querySelector('.psychological-factor')?.value;
                if (psychFactor === 'bundle') {
                    return Math.ceil(basePriceEstimate / 10) * 10 - 1; // Bundle pricing
                } else {
                    const factor = parseFloat(psychFactor);
                    return Math.floor(basePriceEstimate) + factor;
                }
                
            default:
                return totalCostPerUnit * 1.5; // Default 50% markup
        }
    }
    
    calculateMetrics(price, variableCost, fixedCosts, expectedVolume, product) {
        const revenue = price * expectedVolume;
        const totalVariableCosts = variableCost * expectedVolume;
        const totalCosts = totalVariableCosts + fixedCosts;
        const profit = revenue - totalCosts;
        const marginPerUnit = price - variableCost;
        const marginPercentage = (marginPerUnit / price) * 100;
        const breakEvenUnits = fixedCosts / marginPerUnit;
        const roi = (profit / totalCosts) * 100;
        
        // Calculate demand based on price elasticity
        const basePrice = product.competitorPrices.reduce((a, b) => a + b, 0) / product.competitorPrices.length;
        const priceChange = (price - basePrice) / basePrice;
        const demandChange = priceChange * product.priceElasticity;
        const adjustedDemand = expectedVolume * (1 + demandChange);
        
        return {
            price,
            revenue,
            totalCosts,
            profit,
            marginPerUnit,
            marginPercentage,
            breakEvenUnits,
            roi,
            adjustedDemand,
            adjustedRevenue: price * adjustedDemand,
            adjustedProfit: (price * adjustedDemand) - totalCosts
        };
    }
    
    updateResults() {
        const resultsContainer = this.container.querySelector(`#results-${this.id}`);
        const metrics = this.simulationResults.metrics;
        
        resultsContainer.innerHTML = `
            <div class="result-item highlight">
                <span class="label">Recommended Price:</span>
                <span class="value">${this.formatCurrency(metrics.price)}</span>
            </div>
            <div class="result-item">
                <span class="label">Profit Margin:</span>
                <span class="value">${metrics.marginPercentage.toFixed(1)}%</span>
            </div>
            <div class="result-item">
                <span class="label">Expected Profit:</span>
                <span class="value">${this.formatCurrency(metrics.adjustedProfit)}</span>
            </div>
            <div class="result-item">
                <span class="label">Break-Even Units:</span>
                <span class="value">${Math.ceil(metrics.breakEvenUnits)}</span>
            </div>
            <div class="result-item">
                <span class="label">ROI:</span>
                <span class="value">${metrics.roi.toFixed(1)}%</span>
            </div>
            <div class="result-item">
                <span class="label">Projected Demand:</span>
                <span class="value">${Math.floor(metrics.adjustedDemand)} units</span>
            </div>
        `;
        
        // Update analysis metrics if tab is visible
        this.updateAnalysisMetrics();
    }
    
    updateAnalysisMetrics() {
        const metricsContainer = this.container.querySelector(`#metrics-${this.id}`);
        if (!metricsContainer) return;
        
        const metrics = this.simulationResults.metrics;
        
        metricsContainer.innerHTML = `
            <div class="metric-card">
                <h6>Revenue</h6>
                <span class="metric-value">${this.formatCurrency(metrics.adjustedRevenue)}</span>
            </div>
            <div class="metric-card">
                <h6>Total Costs</h6>
                <span class="metric-value">${this.formatCurrency(metrics.totalCosts)}</span>
            </div>
            <div class="metric-card">
                <h6>Profit</h6>
                <span class="metric-value">${this.formatCurrency(metrics.adjustedProfit)}</span>
            </div>
            <div class="metric-card">
                <h6>Margin %</h6>
                <span class="metric-value">${metrics.marginPercentage.toFixed(1)}%</span>
            </div>
        `;
        
        // Update break-even analysis
        const breakEvenContainer = this.container.querySelector(`#breakeven-${this.id}`);
        if (breakEvenContainer) {
            breakEvenContainer.innerHTML = `
                <div class="break-even-details">
                    <p><strong>Break-Even Point:</strong> ${Math.ceil(metrics.breakEvenUnits)} units</p>
                    <p><strong>Break-Even Revenue:</strong> ${this.formatCurrency(metrics.breakEvenUnits * metrics.price)}</p>
                    <p><strong>Safety Margin:</strong> ${((metrics.adjustedDemand - metrics.breakEvenUnits) / metrics.adjustedDemand * 100).toFixed(1)}%</p>
                </div>
            `;
        }
    }
    
    initializeCharts(tabName) {
        if (tabName === 'analysis') {
            this.createDemandChart();
            this.createProfitChart();
        } else if (tabName === 'competitors') {
            this.createCompetitorChart();
        } else if (tabName === 'optimization') {
            this.createSensitivityChart();
        }
    }
    
    createDemandChart() {
        const ctx = this.container.querySelector(`#demand-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const product = this.products[this.currentProduct];
        const priceRange = [];
        const demandData = [];
        
        for (let i = 0; i <= 20; i++) {
            const price = (i * 50) + 50; // Price range from $50 to $1050
            const basePrice = product.competitorPrices.reduce((a, b) => a + b, 0) / product.competitorPrices.length;
            const priceChange = (price - basePrice) / basePrice;
            const demandChange = priceChange * product.priceElasticity;
            const demand = Math.max(0, product.marketSize * 0.1 * (1 + demandChange));
            
            priceRange.push(price);
            demandData.push(demand);
        }
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: priceRange,
                datasets: [{
                    label: 'Demand',
                    data: demandData,
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Price ($)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Demand (Units)'
                        }
                    }
                }
            }
        });
    }
    
    createProfitChart() {
        const ctx = this.container.querySelector(`#profit-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const product = this.products[this.currentProduct];
        const priceRange = [];
        const profitData = [];
        const revenueData = [];
        
        for (let i = 0; i <= 20; i++) {
            const price = (i * 50) + 50;
            const basePrice = product.competitorPrices.reduce((a, b) => a + b, 0) / product.competitorPrices.length;
            const priceChange = (price - basePrice) / basePrice;
            const demandChange = priceChange * product.priceElasticity;
            const demand = Math.max(0, product.marketSize * 0.1 * (1 + demandChange));
            
            const revenue = price * demand;
            const totalCosts = (product.variableCostPerUnit * demand) + product.fixedCosts;
            const profit = revenue - totalCosts;
            
            priceRange.push(price);
            profitData.push(profit);
            revenueData.push(revenue);
        }
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: priceRange,
                datasets: [{
                    label: 'Profit',
                    data: profitData,
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    fill: false
                }, {
                    label: 'Revenue',
                    data: revenueData,
                    borderColor: '#ffc107',
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Price ($)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Amount ($)'
                        }
                    }
                }
            }
        });
    }
    
    createCompetitorChart() {
        const ctx = this.container.querySelector(`#competitor-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const product = this.products[this.currentProduct];
        const currentPrice = this.simulationResults?.metrics?.price || 0;
        
        const labels = product.competitorPrices.map((_, i) => `Competitor ${i + 1}`);
        labels.push('TechStart');
        
        const data = [...product.competitorPrices, currentPrice];
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Price',
                    data: data,
                    backgroundColor: [
                        ...product.competitorPrices.map(() => '#6c757d'),
                        '#007bff'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Price ($)'
                        }
                    }
                }
            }
        });
    }
    
    createSensitivityChart() {
        const ctx = this.container.querySelector(`#sensitivity-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        // Sensitivity analysis for key variables
        const baseMetrics = this.simulationResults.metrics;
        const variables = ['Variable Cost', 'Fixed Costs', 'Volume', 'Competition'];
        const profitChanges = [];
        
        // Calculate profit sensitivity to ±20% changes in each variable
        for (let variable of variables) {
            let changePlus = 0;
            let changeMinus = 0;
            
            switch(variable) {
                case 'Variable Cost':
                    changePlus = this.calculateProfitChange('variableCost', 1.2);
                    changeMinus = this.calculateProfitChange('variableCost', 0.8);
                    break;
                case 'Fixed Costs':
                    changePlus = this.calculateProfitChange('fixedCosts', 1.2);
                    changeMinus = this.calculateProfitChange('fixedCosts', 0.8);
                    break;
                case 'Volume':
                    changePlus = this.calculateProfitChange('volume', 1.2);
                    changeMinus = this.calculateProfitChange('volume', 0.8);
                    break;
                case 'Competition':
                    changePlus = this.calculateProfitChange('competition', 1.2);
                    changeMinus = this.calculateProfitChange('competition', 0.8);
                    break;
            }
            
            profitChanges.push((changePlus + changeMinus) / 2);
        }
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: variables,
                datasets: [{
                    label: 'Profit Sensitivity (%)',
                    data: profitChanges,
                    backgroundColor: '#dc3545'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Profit Change (%)'
                        }
                    }
                }
            }
        });
    }
    
    calculateProfitChange(variable, factor) {
        // Simplified sensitivity calculation
        const baseProfit = this.simulationResults.metrics.adjustedProfit;
        let adjustedProfit = baseProfit;
        
        switch(variable) {
            case 'variableCost':
                adjustedProfit = baseProfit - (baseProfit * 0.3 * (factor - 1));
                break;
            case 'fixedCosts':
                adjustedProfit = baseProfit - (baseProfit * 0.2 * (factor - 1));
                break;
            case 'volume':
                adjustedProfit = baseProfit * factor;
                break;
            case 'competition':
                adjustedProfit = baseProfit * (2 - factor);
                break;
        }
        
        return ((adjustedProfit - baseProfit) / baseProfit) * 100;
    }
    
    getMarketPosition(index) {
        const positions = ['Budget', 'Value', 'Standard', 'Premium', 'Luxury'];
        return positions[index] || 'Unknown';
    }
    
    getRelativePosition(price, allPrices) {
        const sorted = [...allPrices].sort((a, b) => a - b);
        const position = sorted.indexOf(price);
        const percentile = (position / (sorted.length - 1)) * 100;
        
        if (percentile <= 25) return 'Low';
        if (percentile <= 50) return 'Below Average';
        if (percentile <= 75) return 'Above Average';
        return 'High';
    }
    
    updateDisplay() {
        // Award gamification points
        if (window.awardPoints) {
            window.awardPoints(10, 'Using Pricing Strategy Simulator');
        }
    }
    
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }
}

// Global functions for simulator interaction
function createPricingSimulator(container, id, type) {
    const simulator = new PricingStrategySimulator(container, id, type);
    pricingInstances[id] = simulator;
    return simulator;
}

function calculatePrice(simulatorId) {
    if (pricingInstances[simulatorId]) {
        pricingInstances[simulatorId].runSimulation();
    }
}

function runScenarioAnalysis(simulatorId) {
    const simulator = pricingInstances[simulatorId];
    if (!simulator) return;
    
    const container = simulator.container;
    const marketCondition = container.querySelector('.market-condition').value;
    const competitionLevel = container.querySelector('.competition-level').value;
    const customerSegment = container.querySelector('.customer-segment').value;
    
    // Adjust base parameters based on scenario
    const adjustments = {
        priceElasticity: 1,
        marketSize: 1,
        competitorIntensity: 1
    };
    
    // Market condition adjustments
    switch(marketCondition) {
        case 'recession':
            adjustments.priceElasticity = 1.3; // More price sensitive
            adjustments.marketSize = 0.8; // Smaller market
            break;
        case 'boom':
            adjustments.priceElasticity = 0.7; // Less price sensitive
            adjustments.marketSize = 1.2; // Larger market
            break;
        case 'disruption':
            adjustments.priceElasticity = 1.5; // Very price sensitive
            adjustments.marketSize = 0.6; // Much smaller market
            break;
    }
    
    // Competition level adjustments
    switch(competitionLevel) {
        case 'low':
            adjustments.competitorIntensity = 0.8;
            break;
        case 'high':
            adjustments.competitorIntensity = 1.3;
            break;
        case 'monopoly':
            adjustments.competitorIntensity = 0.5;
            break;
    }
    
    // Customer segment adjustments
    switch(customerSegment) {
        case 'price_sensitive':
            adjustments.priceElasticity *= 1.4;
            break;
        case 'premium':
            adjustments.priceElasticity *= 0.6;
            break;
        case 'enterprise':
            adjustments.priceElasticity *= 0.8;
            adjustments.marketSize *= 0.7;
            break;
    }
    
    // Run adjusted simulation
    const baseResults = simulator.simulationResults;
    const adjustedPrice = baseResults.metrics.price * adjustments.competitorIntensity;
    const adjustedDemand = baseResults.metrics.adjustedDemand * adjustments.marketSize * Math.pow(adjustments.priceElasticity, -0.5);
    const adjustedRevenue = adjustedPrice * adjustedDemand;
    const adjustedProfit = adjustedRevenue - baseResults.metrics.totalCosts;
    
    // Display scenario results
    const resultsContainer = container.querySelector(`#scenario-results-${simulator.id}`);
    resultsContainer.innerHTML = `
        <div class="scenario-summary">
            <h6>Scenario Results</h6>
            <div class="scenario-metrics">
                <div class="scenario-metric">
                    <span class="label">Adjusted Price:</span>
                    <span class="value">${simulator.formatCurrency(adjustedPrice)}</span>
                </div>
                <div class="scenario-metric">
                    <span class="label">Projected Demand:</span>
                    <span class="value">${Math.floor(adjustedDemand)} units</span>
                </div>
                <div class="scenario-metric">
                    <span class="label">Expected Revenue:</span>
                    <span class="value">${simulator.formatCurrency(adjustedRevenue)}</span>
                </div>
                <div class="scenario-metric">
                    <span class="label">Expected Profit:</span>
                    <span class="value">${simulator.formatCurrency(adjustedProfit)}</span>
                </div>
            </div>
            <div class="scenario-recommendation">
                <h6>Recommendation</h6>
                <p>${getScenarioRecommendation(marketCondition, competitionLevel, customerSegment, adjustedProfit, baseResults.metrics.adjustedProfit)}</p>
            </div>
        </div>
    `;
    
    if (window.awardPoints) {
        window.awardPoints(8, 'Completed scenario analysis');
    }
}

function getScenarioRecommendation(market, competition, segment, adjustedProfit, baseProfit) {
    const profitChange = ((adjustedProfit - baseProfit) / baseProfit) * 100;
    
    if (profitChange > 10) {
        return `This scenario shows strong profit potential (+${profitChange.toFixed(1)}%). Consider aggressive market entry with the current pricing strategy.`;
    } else if (profitChange > 0) {
        return `Moderate profit improvement expected (+${profitChange.toFixed(1)}%). Proceed with caution and monitor market conditions closely.`;
    } else if (profitChange > -10) {
        return `Slight profit decline expected (${profitChange.toFixed(1)}%). Consider adjusting pricing strategy or improving operational efficiency.`;
    } else {
        return `Significant profit risk (${profitChange.toFixed(1)}%). Major strategy revision recommended - consider different market positioning or cost structure optimization.`;
    }
}

function runOptimization(simulatorId) {
    const simulator = pricingInstances[simulatorId];
    if (!simulator) return;
    
    const container = simulator.container;
    const objective = container.querySelector('.optimization-objective').value;
    const minMargin = parseFloat(container.querySelector('.min-margin').value) / 100;
    const maxPrice = parseFloat(container.querySelector('.max-price').value);
    const targetVolume = parseFloat(container.querySelector('.target-volume').value);
    
    // Simple optimization algorithm
    let bestPrice = 0;
    let bestValue = -Infinity;
    
    for (let price = 50; price <= maxPrice; price += 10) {
        const metrics = simulator.calculateMetrics(
            price,
            simulator.products[simulator.currentProduct].variableCostPerUnit,
            simulator.products[simulator.currentProduct].fixedCosts,
            targetVolume,
            simulator.products[simulator.currentProduct]
        );
        
        // Check constraints
        if (metrics.marginPercentage / 100 < minMargin) continue;
        
        let objectiveValue = 0;
        switch(objective) {
            case 'profit':
                objectiveValue = metrics.adjustedProfit;
                break;
            case 'revenue':
                objectiveValue = metrics.adjustedRevenue;
                break;
            case 'market_share':
                objectiveValue = metrics.adjustedDemand;
                break;
            case 'roi':
                objectiveValue = metrics.roi;
                break;
        }
        
        if (objectiveValue > bestValue) {
            bestValue = objectiveValue;
            bestPrice = price;
        }
    }
    
    // Display optimization results
    const resultsContainer = container.querySelector(`#optimization-results-${simulator.id}`);
    resultsContainer.innerHTML = `
        <div class="optimization-summary">
            <h6>Optimization Results</h6>
            <div class="optimal-price">
                <span class="label">Optimal Price:</span>
                <span class="value highlight">${simulator.formatCurrency(bestPrice)}</span>
            </div>
            <div class="optimal-objective">
                <span class="label">Optimized ${objective.replace('_', ' ')}:</span>
                <span class="value">${formatOptimizationValue(objective, bestValue)}</span>
            </div>
            <p class="optimization-note">
                This optimization considers your constraints and maximizes the selected objective.
                Real-world implementation should consider additional factors like brand positioning and competitive response.
            </p>
        </div>
    `;
    
    if (window.awardPoints) {
        window.awardPoints(12, 'Completed price optimization');
    }
}

function formatOptimizationValue(objective, value) {
    switch(objective) {
        case 'profit':
        case 'revenue':
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        case 'market_share':
            return Math.floor(value) + ' units';
        case 'roi':
            return value.toFixed(1) + '%';
        default:
            return value.toFixed(2);
    }
}

function submitPricingAnalysis(simulatorId) {
    const container = document.getElementById(simulatorId);
    const analysisInput = container.querySelector('.pricing-analysis-input');
    const analysis = analysisInput.value.trim();
    
    if (analysis.length < 50) {
        alert('Please provide a more detailed analysis (at least 50 characters).');
        return;
    }
    
    if (window.awardPoints) {
        window.awardPoints(15, 'Submitted pricing strategy analysis');
    }
    
    analysisInput.style.border = '2px solid #28a745';
    setTimeout(() => {
        analysisInput.style.border = '';
    }, 2000);
}