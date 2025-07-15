// ===================================
// Asset Management Tools
// For Unit 7: Asset Inventory Tracker
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeAssetManagement();
});

let assetInstances = {};

// ===================================
// System Initialization
// ===================================

function initializeAssetManagement() {
    const containers = document.querySelectorAll('.asset-management');
    
    containers.forEach((container, index) => {
        const managerId = container.dataset.id || `asset-${index}`;
        const managerType = container.dataset.type || 'comprehensive';
        
        createAssetManager(container, managerId, managerType);
    });
}

class AssetManagementSystem {
    constructor(container, id, type = 'comprehensive') {
        this.container = container;
        this.id = id;
        this.type = type;
        
        // Asset categories for TechStart Solutions
        this.assetCategories = {
            current_assets: {
                name: "Current Assets",
                description: "Assets convertible to cash within one year",
                color: "#28a745"
            },
            fixed_assets: {
                name: "Fixed Assets",
                description: "Long-term assets used in business operations",
                color: "#007bff"
            },
            intangible_assets: {
                name: "Intangible Assets",
                description: "Non-physical assets with economic value",
                color: "#6f42c1"
            },
            investments: {
                name: "Investments",
                description: "Financial investments and securities",
                color: "#fd7e14"
            }
        };
        
        // Sample asset portfolio for TechStart Solutions
        this.assetPortfolio = {
            cash_checking: {
                id: "CASH-001",
                name: "Business Checking Account",
                category: "current_assets",
                subCategory: "cash",
                currentValue: 45000,
                acquisitionCost: 45000,
                acquisitionDate: "2024-01-01",
                description: "Primary business operating account",
                liquidity: "immediate",
                risk: "none"
            },
            inventory_software: {
                id: "INV-001",
                name: "Software Inventory",
                category: "current_assets",
                subCategory: "inventory",
                currentValue: 25000,
                acquisitionCost: 30000,
                acquisitionDate: "2024-02-15",
                description: "Software licenses ready for resale",
                liquidity: "30-60 days",
                risk: "low"
            },
            accounts_receivable: {
                id: "AR-001",
                name: "Accounts Receivable",
                category: "current_assets",
                subCategory: "receivables",
                currentValue: 18500,
                acquisitionCost: 18500,
                acquisitionDate: "2024-03-01",
                description: "Outstanding customer invoices",
                liquidity: "30-90 days",
                risk: "medium"
            },
            office_equipment: {
                id: "EQUIP-001",
                name: "Computer Equipment",
                category: "fixed_assets",
                subCategory: "equipment",
                currentValue: 15000,
                acquisitionCost: 25000,
                acquisitionDate: "2023-06-01",
                usefulLife: 5,
                depreciationMethod: "straight_line",
                description: "Laptops, servers, networking equipment",
                liquidity: "6-12 months",
                risk: "low"
            },
            office_furniture: {
                id: "EQUIP-002",
                name: "Office Furniture",
                category: "fixed_assets",
                subCategory: "furniture",
                currentValue: 8000,
                acquisitionCost: 12000,
                acquisitionDate: "2023-08-15",
                usefulLife: 7,
                depreciationMethod: "straight_line",
                description: "Desks, chairs, conference table",
                liquidity: "3-6 months",
                risk: "low"
            },
            software_license: {
                id: "SOFT-001",
                name: "Development Software Licenses",
                category: "intangible_assets",
                subCategory: "software",
                currentValue: 12000,
                acquisitionCost: 15000,
                acquisitionDate: "2023-09-01",
                usefulLife: 3,
                depreciationMethod: "straight_line",
                description: "IDE, design software, productivity tools",
                liquidity: "difficult",
                risk: "medium"
            },
            trademark: {
                id: "IP-001",
                name: "TechStart Trademark",
                category: "intangible_assets",
                subCategory: "intellectual_property",
                currentValue: 20000,
                acquisitionCost: 5000,
                acquisitionDate: "2023-12-01",
                usefulLife: 10,
                depreciationMethod: "none",
                description: "Registered business trademark",
                liquidity: "very difficult",
                risk: "low"
            },
            investment_bonds: {
                id: "INV-001",
                name: "Government Bonds",
                category: "investments",
                subCategory: "securities",
                currentValue: 10000,
                acquisitionCost: 9800,
                acquisitionDate: "2024-01-15",
                maturityDate: "2026-01-15",
                description: "2-year Treasury bonds",
                liquidity: "immediate",
                risk: "very low"
            }
        };
        
        // Depreciation methods
        this.depreciationMethods = {
            straight_line: {
                name: "Straight Line",
                description: "Equal depreciation each year",
                formula: "(Cost - Salvage Value) / Useful Life"
            },
            declining_balance: {
                name: "Declining Balance",
                description: "Higher depreciation in early years",
                formula: "Book Value × Depreciation Rate"
            },
            units_of_production: {
                name: "Units of Production",
                description: "Based on usage or production",
                formula: "(Cost - Salvage Value) × (Units Used / Total Units)"
            },
            sum_of_years: {
                name: "Sum of Years' Digits",
                description: "Accelerated depreciation method",
                formula: "Remaining Life / Sum of Years × Depreciable Base"
            }
        };
        
        this.currentView = 'portfolio';
        this.selectedAsset = null;
        this.analysisResults = {};
        
        this.init();
    }
    
    init() {
        this.createHTML();
        this.setupEventListeners();
        this.calculateAssetMetrics();
        this.updateDisplay();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="asset-management" id="${this.id}">
                <div class="management-header">
                    <h3>📊 Asset Management System</h3>
                    <p>Comprehensive asset tracking and optimization for TechStart Solutions</p>
                </div>
                
                <div class="asset-tabs">
                    <div class="tab-buttons">
                        <button class="tab-btn active" data-tab="portfolio">💼 Portfolio</button>
                        <button class="tab-btn" data-tab="depreciation">📉 Depreciation</button>
                        <button class="tab-btn" data-tab="analysis">📊 Analysis</button>
                        <button class="tab-btn" data-tab="optimization">⚡ Optimization</button>
                        <button class="tab-btn" data-tab="reporting">📈 Reporting</button>
                    </div>
                </div>
                
                <div class="asset-content">
                    <div class="tab-content portfolio active" id="portfolio-${this.id}">
                        <!-- Portfolio content -->
                    </div>
                    
                    <div class="tab-content depreciation" id="depreciation-${this.id}">
                        <!-- Depreciation content -->
                    </div>
                    
                    <div class="tab-content analysis" id="analysis-${this.id}">
                        <!-- Analysis content -->
                    </div>
                    
                    <div class="tab-content optimization" id="optimization-${this.id}">
                        <!-- Optimization content -->
                    </div>
                    
                    <div class="tab-content reporting" id="reporting-${this.id}">
                        <!-- Reporting content -->
                    </div>
                </div>
                
                <div class="asset-summary">
                    <h4>💎 Asset Portfolio Summary</h4>
                    <div class="summary-grid" id="summary-${this.id}">
                        <!-- Summary will be populated dynamically -->
                    </div>
                </div>
                
                <div class="business-scenario">
                    <h4>🏢 Sarah's Asset Management Challenge</h4>
                    <div class="scenario-content">
                        <p><strong>TechStart Solutions Asset Portfolio:</strong></p>
                        <p>Sarah must effectively manage her company's growing asset base. Key considerations:</p>
                        <ul>
                            <li>Optimal asset allocation and utilization</li>
                            <li>Depreciation strategies for tax efficiency</li>
                            <li>Asset replacement and upgrade planning</li>
                            <li>Risk management and insurance coverage</li>
                            <li>Liquidity management for operational needs</li>
                        </ul>
                    </div>
                </div>
                
                <div class="learning-activity">
                    <h4>🎯 Asset Management Strategy</h4>
                    <div class="activity-question">
                        <p>Based on your asset analysis, what recommendations would you make to Sarah for optimizing her asset portfolio?</p>
                        <textarea class="asset-analysis-input" placeholder="Consider asset allocation, depreciation strategies, replacement planning, and risk management..."></textarea>
                        <button class="submit-asset-analysis-btn" onclick="submitAssetAnalysis('${this.id}')">Submit Analysis</button>
                    </div>
                </div>
            </div>
        `;
        
        this.populateTabContent();
    }
    
    populateTabContent() {
        this.populatePortfolioTab();
        this.populateDepreciationTab();
        this.populateAnalysisTab();
        this.populateOptimizationTab();
        this.populateReportingTab();
    }
    
    populatePortfolioTab() {
        const portfolioTab = this.container.querySelector(`#portfolio-${this.id}`);
        
        portfolioTab.innerHTML = `
            <div class="portfolio-dashboard">
                <div class="asset-filters">
                    <div class="filter-group">
                        <label>Category Filter:</label>
                        <select class="category-filter">
                            <option value="all">All Categories</option>
                            ${Object.entries(this.assetCategories).map(([key, category]) => 
                                `<option value="${key}">${category.name}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Sort By:</label>
                        <select class="sort-filter">
                            <option value="value_desc">Value (High to Low)</option>
                            <option value="value_asc">Value (Low to High)</option>
                            <option value="date_desc">Acquisition Date (Newest)</option>
                            <option value="date_asc">Acquisition Date (Oldest)</option>
                            <option value="risk">Risk Level</option>
                        </select>
                    </div>
                    <button class="add-asset-btn" onclick="addNewAsset('${this.id}')">➕ Add Asset</button>
                </div>
                
                <div class="portfolio-visualization">
                    <div class="chart-container">
                        <h5>📊 Asset Allocation</h5>
                        <canvas id="allocation-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                    <div class="metrics-container">
                        <h5>📈 Portfolio Metrics</h5>
                        <div class="portfolio-metrics" id="portfolio-metrics-${this.id}">
                            <!-- Metrics will be populated -->
                        </div>
                    </div>
                </div>
                
                <div class="asset-list">
                    <h5>📋 Asset Inventory</h5>
                    <div class="asset-grid" id="asset-grid-${this.id}">
                        <!-- Asset cards will be populated -->
                    </div>
                </div>
            </div>
        `;
        
        this.populateAssetGrid();
        this.updatePortfolioMetrics();
    }
    
    populateAssetGrid() {
        const assetGrid = this.container.querySelector(`#asset-grid-${this.id}`);
        
        const assetCards = Object.entries(this.assetPortfolio).map(([key, asset]) => {
            const category = this.assetCategories[asset.category];
            const ageInYears = this.calculateAssetAge(asset.acquisitionDate);
            const depreciation = this.calculateDepreciation(asset);
            
            return `
                <div class="asset-card" data-asset="${key}" onclick="selectAsset('${this.id}', '${key}')">
                    <div class="asset-header">
                        <h6>${asset.name}</h6>
                        <span class="asset-id">${asset.id}</span>
                    </div>
                    <div class="asset-details">
                        <div class="asset-category" style="color: ${category.color}">
                            ${category.name}
                        </div>
                        <div class="asset-value">
                            <span class="label">Current Value:</span>
                            <span class="value">${this.formatCurrency(asset.currentValue)}</span>
                        </div>
                        <div class="asset-info">
                            <span class="acquisition-cost">Cost: ${this.formatCurrency(asset.acquisitionCost)}</span>
                            <span class="acquisition-date">Acquired: ${this.formatDate(asset.acquisitionDate)}</span>
                        </div>
                        ${depreciation ? `
                            <div class="depreciation-info">
                                <span class="depreciation">Annual Depreciation: ${this.formatCurrency(depreciation.annual)}</span>
                                <span class="book-value">Book Value: ${this.formatCurrency(depreciation.bookValue)}</span>
                            </div>
                        ` : ''}
                        <div class="asset-meta">
                            <span class="liquidity">Liquidity: ${asset.liquidity}</span>
                            <span class="risk">Risk: ${asset.risk}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        assetGrid.innerHTML = assetCards;
    }
    
    populateDepreciationTab() {
        const depreciationTab = this.container.querySelector(`#depreciation-${this.id}`);
        
        depreciationTab.innerHTML = `
            <div class="depreciation-calculator">
                <div class="depreciation-controls">
                    <div class="asset-selector">
                        <label>Select Asset:</label>
                        <select class="depreciation-asset-select">
                            ${Object.entries(this.assetPortfolio)
                                .filter(([key, asset]) => asset.category === 'fixed_assets' || asset.category === 'intangible_assets')
                                .map(([key, asset]) => `<option value="${key}">${asset.name}</option>`)
                                .join('')}
                        </select>
                    </div>
                    
                    <div class="method-selector">
                        <label>Depreciation Method:</label>
                        <select class="depreciation-method">
                            ${Object.entries(this.depreciationMethods).map(([key, method]) => 
                                `<option value="${key}">${method.name}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <div class="parameter-inputs">
                        <div class="input-group">
                            <label>Useful Life (years):</label>
                            <input type="number" class="useful-life" value="5" min="1" max="50">
                        </div>
                        <div class="input-group">
                            <label>Salvage Value:</label>
                            <input type="number" class="salvage-value" value="0" min="0" step="100">
                        </div>
                        <div class="input-group">
                            <label>Depreciation Rate (%):</label>
                            <input type="number" class="depreciation-rate" value="20" min="1" max="100" step="1">
                        </div>
                    </div>
                    
                    <button class="calculate-depreciation-btn" onclick="calculateDepreciationSchedule('${this.id}')">
                        📊 Calculate Schedule
                    </button>
                </div>
                
                <div class="depreciation-results">
                    <div class="method-explanation">
                        <h5>📖 Method Explanation</h5>
                        <div class="method-details" id="method-details-${this.id}">
                            <!-- Method details will be populated -->
                        </div>
                    </div>
                    
                    <div class="depreciation-schedule">
                        <h5>📅 Depreciation Schedule</h5>
                        <div class="schedule-table" id="schedule-table-${this.id}">
                            <!-- Schedule table will be populated -->
                        </div>
                    </div>
                    
                    <div class="depreciation-chart">
                        <h5>📈 Depreciation Visualization</h5>
                        <canvas id="depreciation-chart-${this.id}" width="600" height="300"></canvas>
                    </div>
                </div>
            </div>
        `;
    }
    
    populateAnalysisTab() {
        const analysisTab = this.container.querySelector(`#analysis-${this.id}`);
        
        analysisTab.innerHTML = `
            <div class="asset-analysis">
                <div class="analysis-dashboard">
                    <div class="analysis-charts">
                        <div class="chart-container">
                            <h5>📊 Asset Performance</h5>
                            <canvas id="performance-chart-${this.id}" width="400" height="300"></canvas>
                        </div>
                        <div class="chart-container">
                            <h5>⏱️ Asset Age Distribution</h5>
                            <canvas id="age-chart-${this.id}" width="400" height="300"></canvas>
                        </div>
                    </div>
                    
                    <div class="analysis-metrics">
                        <h5>📈 Key Performance Indicators</h5>
                        <div class="kpi-grid" id="kpi-grid-${this.id}">
                            <!-- KPIs will be populated -->
                        </div>
                    </div>
                </div>
                
                <div class="risk-assessment">
                    <h5>⚠️ Risk Assessment</h5>
                    <div class="risk-matrix" id="risk-matrix-${this.id}">
                        <!-- Risk matrix will be populated -->
                    </div>
                </div>
                
                <div class="liquidity-analysis">
                    <h5>💧 Liquidity Analysis</h5>
                    <div class="liquidity-breakdown" id="liquidity-breakdown-${this.id}">
                        <!-- Liquidity analysis will be populated -->
                    </div>
                </div>
                
                <div class="trend-analysis">
                    <h5>📈 Trend Analysis</h5>
                    <canvas id="trend-chart-${this.id}" width="600" height="300"></canvas>
                </div>
            </div>
        `;
    }
    
    populateOptimizationTab() {
        const optimizationTab = this.container.querySelector(`#optimization-${this.id}`);
        
        optimizationTab.innerHTML = `
            <div class="asset-optimization">
                <div class="optimization-goals">
                    <h5>🎯 Optimization Objectives</h5>
                    <div class="goal-selection">
                        <div class="goal-option">
                            <input type="radio" name="optimization-goal-${this.id}" value="maximize_roi" id="roi-${this.id}" checked>
                            <label for="roi-${this.id}">📈 Maximize ROI</label>
                        </div>
                        <div class="goal-option">
                            <input type="radio" name="optimization-goal-${this.id}" value="minimize_risk" id="risk-${this.id}">
                            <label for="risk-${this.id}">🛡️ Minimize Risk</label>
                        </div>
                        <div class="goal-option">
                            <input type="radio" name="optimization-goal-${this.id}" value="improve_liquidity" id="liquidity-${this.id}">
                            <label for="liquidity-${this.id}">💧 Improve Liquidity</label>
                        </div>
                        <div class="goal-option">
                            <input type="radio" name="optimization-goal-${this.id}" value="tax_efficiency" id="tax-${this.id}">
                            <label for="tax-${this.id}">💰 Tax Efficiency</label>
                        </div>
                    </div>
                </div>
                
                <div class="optimization-constraints">
                    <h5>⚙️ Constraints</h5>
                    <div class="constraint-inputs">
                        <div class="input-group">
                            <label>Minimum Cash Reserve:</label>
                            <input type="number" class="min-cash" value="20000" step="1000" min="0">
                        </div>
                        <div class="input-group">
                            <label>Maximum Risk Level:</label>
                            <select class="max-risk">
                                <option value="low">Low</option>
                                <option value="medium" selected>Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label>Target Liquidity Ratio:</label>
                            <input type="number" class="target-liquidity" value="0.3" step="0.1" min="0.1" max="1.0">
                        </div>
                    </div>
                </div>
                
                <div class="optimization-scenarios">
                    <h5>🔬 Scenario Testing</h5>
                    <div class="scenario-buttons">
                        <button class="scenario-btn" onclick="runOptimizationScenario('${this.id}', 'growth')">📈 Growth Scenario</button>
                        <button class="scenario-btn" onclick="runOptimizationScenario('${this.id}', 'recession')">📉 Recession Scenario</button>
                        <button class="scenario-btn" onclick="runOptimizationScenario('${this.id}', 'stable')">➡️ Stable Scenario</button>
                        <button class="scenario-btn" onclick="runOptimizationScenario('${this.id}', 'expansion')">🚀 Expansion Scenario</button>
                    </div>
                </div>
                
                <div class="optimization-results" id="optimization-results-${this.id}">
                    <h5>💡 Optimization Recommendations</h5>
                    <p>Select optimization goals and constraints, then run a scenario to see recommendations.</p>
                </div>
                
                <div class="rebalancing-suggestions">
                    <h5>⚖️ Portfolio Rebalancing</h5>
                    <div class="rebalancing-chart">
                        <canvas id="rebalancing-chart-${this.id}" width="600" height="300"></canvas>
                    </div>
                </div>
            </div>
        `;
    }
    
    populateReportingTab() {
        const reportingTab = this.container.querySelector(`#reporting-${this.id}`);
        
        reportingTab.innerHTML = `
            <div class="asset-reporting">
                <div class="report-generator">
                    <h5>📊 Report Generator</h5>
                    <div class="report-options">
                        <div class="report-type">
                            <label>Report Type:</label>
                            <select class="report-type-select">
                                <option value="portfolio_summary">Portfolio Summary</option>
                                <option value="depreciation_schedule">Depreciation Schedule</option>
                                <option value="asset_register">Asset Register</option>
                                <option value="tax_report">Tax Report</option>
                                <option value="insurance_valuation">Insurance Valuation</option>
                                <option value="performance_analysis">Performance Analysis</option>
                            </select>
                        </div>
                        <div class="report-period">
                            <label>Report Period:</label>
                            <select class="report-period-select">
                                <option value="current">Current Period</option>
                                <option value="ytd">Year to Date</option>
                                <option value="annual">Annual</option>
                                <option value="custom">Custom Range</option>
                            </select>
                        </div>
                        <div class="report-format">
                            <label>Format:</label>
                            <select class="report-format-select">
                                <option value="html">HTML</option>
                                <option value="pdf">PDF</option>
                                <option value="excel">Excel</option>
                                <option value="csv">CSV</option>
                            </select>
                        </div>
                        <button class="generate-report-btn" onclick="generateAssetReport('${this.id}')">
                            📄 Generate Report
                        </button>
                    </div>
                </div>
                
                <div class="compliance-checklist">
                    <h5>✅ Compliance Checklist</h5>
                    <div class="checklist-items" id="compliance-checklist-${this.id}">
                        <!-- Compliance items will be populated -->
                    </div>
                </div>
                
                <div class="report-preview">
                    <h5>👁️ Report Preview</h5>
                    <div class="preview-container" id="report-preview-${this.id}">
                        <p>Generate a report to see preview here.</p>
                    </div>
                </div>
                
                <div class="audit-trail">
                    <h5>📋 Audit Trail</h5>
                    <div class="audit-log" id="audit-log-${this.id}">
                        <!-- Audit trail will be populated -->
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
        
        // Asset selection and filtering
        const categoryFilter = this.container.querySelector('.category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => {
                this.filterAssets();
            });
        }
        
        const sortFilter = this.container.querySelector('.sort-filter');
        if (sortFilter) {
            sortFilter.addEventListener('change', () => {
                this.sortAssets();
            });
        }
        
        // Real-time updates
        const inputs = this.container.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                this.updateCalculations();
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
        
        this.currentView = tabName;
        
        // Initialize charts for the active tab
        setTimeout(() => {
            this.initializeCharts(tabName);
        }, 100);
    }
    
    calculateAssetMetrics() {
        let totalValue = 0;
        let totalCost = 0;
        let totalAnnualDepreciation = 0;
        
        const categoryBreakdown = {};
        const liquidityBreakdown = {
            immediate: 0,
            short_term: 0,
            medium_term: 0,
            long_term: 0
        };
        
        Object.entries(this.assetPortfolio).forEach(([key, asset]) => {
            totalValue += asset.currentValue;
            totalCost += asset.acquisitionCost;
            
            // Category breakdown
            if (!categoryBreakdown[asset.category]) {
                categoryBreakdown[asset.category] = 0;
            }
            categoryBreakdown[asset.category] += asset.currentValue;
            
            // Liquidity breakdown
            const liquidityCategory = this.mapLiquidityToCategory(asset.liquidity);
            liquidityBreakdown[liquidityCategory] += asset.currentValue;
            
            // Calculate depreciation
            const depreciation = this.calculateDepreciation(asset);
            if (depreciation) {
                totalAnnualDepreciation += depreciation.annual;
            }
        });
        
        this.analysisResults = {
            totalValue,
            totalCost,
            totalGainLoss: totalValue - totalCost,
            totalAnnualDepreciation,
            categoryBreakdown,
            liquidityBreakdown,
            assetCount: Object.keys(this.assetPortfolio).length,
            averageAge: this.calculateAverageAge(),
            riskDistribution: this.calculateRiskDistribution()
        };
    }
    
    calculateDepreciation(asset) {
        if (!asset.usefulLife || asset.category === 'current_assets') {
            return null;
        }
        
        const ageInYears = this.calculateAssetAge(asset.acquisitionDate);
        const method = asset.depreciationMethod || 'straight_line';
        const salvageValue = asset.salvageValue || 0;
        const depreciableBase = asset.acquisitionCost - salvageValue;
        
        let annualDepreciation = 0;
        let accumulatedDepreciation = 0;
        let bookValue = asset.acquisitionCost;
        
        switch(method) {
            case 'straight_line':
                annualDepreciation = depreciableBase / asset.usefulLife;
                accumulatedDepreciation = Math.min(annualDepreciation * ageInYears, depreciableBase);
                bookValue = asset.acquisitionCost - accumulatedDepreciation;
                break;
                
            case 'declining_balance':
                const rate = 2 / asset.usefulLife; // Double declining balance
                let remainingValue = asset.acquisitionCost;
                for (let year = 1; year <= ageInYears; year++) {
                    const yearlyDepreciation = Math.min(remainingValue * rate, remainingValue - salvageValue);
                    accumulatedDepreciation += yearlyDepreciation;
                    remainingValue -= yearlyDepreciation;
                }
                annualDepreciation = Math.min(remainingValue * rate, remainingValue - salvageValue);
                bookValue = asset.acquisitionCost - accumulatedDepreciation;
                break;
                
            default:
                // Default to straight line
                annualDepreciation = depreciableBase / asset.usefulLife;
                accumulatedDepreciation = Math.min(annualDepreciation * ageInYears, depreciableBase);
                bookValue = asset.acquisitionCost - accumulatedDepreciation;
        }
        
        return {
            annual: annualDepreciation,
            accumulated: accumulatedDepreciation,
            bookValue: Math.max(bookValue, salvageValue),
            remainingLife: Math.max(0, asset.usefulLife - ageInYears)
        };
    }
    
    calculateAssetAge(acquisitionDate) {
        const now = new Date();
        const acquired = new Date(acquisitionDate);
        const ageInMs = now - acquired;
        return ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    }
    
    calculateAverageAge() {
        const ages = Object.values(this.assetPortfolio).map(asset => 
            this.calculateAssetAge(asset.acquisitionDate)
        );
        return ages.reduce((sum, age) => sum + age, 0) / ages.length;
    }
    
    calculateRiskDistribution() {
        const riskCounts = { none: 0, 'very low': 0, low: 0, medium: 0, high: 0, 'very high': 0 };
        
        Object.values(this.assetPortfolio).forEach(asset => {
            riskCounts[asset.risk] = (riskCounts[asset.risk] || 0) + 1;
        });
        
        return riskCounts;
    }
    
    mapLiquidityToCategory(liquidity) {
        switch(liquidity) {
            case 'immediate':
                return 'immediate';
            case '30-60 days':
            case '30-90 days':
                return 'short_term';
            case '3-6 months':
            case '6-12 months':
                return 'medium_term';
            default:
                return 'long_term';
        }
    }
    
    updatePortfolioMetrics() {
        const metricsContainer = this.container.querySelector(`#portfolio-metrics-${this.id}`);
        if (!metricsContainer) return;
        
        const metrics = this.analysisResults;
        
        metricsContainer.innerHTML = `
            <div class="metric-card">
                <h6>Total Value</h6>
                <span class="metric-value">${this.formatCurrency(metrics.totalValue)}</span>
            </div>
            <div class="metric-card">
                <h6>Total Cost</h6>
                <span class="metric-value">${this.formatCurrency(metrics.totalCost)}</span>
            </div>
            <div class="metric-card">
                <h6>Gain/Loss</h6>
                <span class="metric-value ${metrics.totalGainLoss >= 0 ? 'positive' : 'negative'}">
                    ${this.formatCurrency(metrics.totalGainLoss)}
                </span>
            </div>
            <div class="metric-card">
                <h6>Asset Count</h6>
                <span class="metric-value">${metrics.assetCount}</span>
            </div>
            <div class="metric-card">
                <h6>Average Age</h6>
                <span class="metric-value">${metrics.averageAge.toFixed(1)} years</span>
            </div>
            <div class="metric-card">
                <h6>Annual Depreciation</h6>
                <span class="metric-value">${this.formatCurrency(metrics.totalAnnualDepreciation)}</span>
            </div>
        `;
    }
    
    updateSummary() {
        const summaryContainer = this.container.querySelector(`#summary-${this.id}`);
        const metrics = this.analysisResults;
        
        summaryContainer.innerHTML = `
            <div class="summary-item highlight">
                <span class="label">Total Portfolio Value:</span>
                <span class="value">${this.formatCurrency(metrics.totalValue)}</span>
            </div>
            <div class="summary-item">
                <span class="label">Total Gain/Loss:</span>
                <span class="value ${metrics.totalGainLoss >= 0 ? 'positive' : 'negative'}">
                    ${this.formatCurrency(metrics.totalGainLoss)}
                </span>
            </div>
            <div class="summary-item">
                <span class="label">Annual Depreciation:</span>
                <span class="value">${this.formatCurrency(metrics.totalAnnualDepreciation)}</span>
            </div>
            <div class="summary-item">
                <span class="label">Portfolio ROI:</span>
                <span class="value">${((metrics.totalGainLoss / metrics.totalCost) * 100).toFixed(1)}%</span>
            </div>
        `;
    }
    
    initializeCharts(tabName) {
        if (tabName === 'portfolio') {
            this.createAllocationChart();
        } else if (tabName === 'analysis') {
            this.createPerformanceChart();
            this.createAgeChart();
            this.createTrendChart();
        } else if (tabName === 'depreciation') {
            this.createDepreciationChart();
        } else if (tabName === 'optimization') {
            this.createRebalancingChart();
        }
    }
    
    createAllocationChart() {
        const ctx = this.container.querySelector(`#allocation-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const metrics = this.analysisResults;
        const labels = Object.keys(metrics.categoryBreakdown).map(key => 
            this.assetCategories[key]?.name || key
        );
        const data = Object.values(metrics.categoryBreakdown);
        const colors = Object.keys(metrics.categoryBreakdown).map(key => 
            this.assetCategories[key]?.color || '#6c757d'
        );
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.raw / total) * 100).toFixed(1);
                                return `${context.label}: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.raw)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    createPerformanceChart() {
        const ctx = this.container.querySelector(`#performance-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const assets = Object.values(this.assetPortfolio);
        const labels = assets.map(asset => asset.name);
        const currentValues = assets.map(asset => asset.currentValue);
        const acquisitionCosts = assets.map(asset => asset.acquisitionCost);
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Current Value',
                    data: currentValues,
                    backgroundColor: '#28a745'
                }, {
                    label: 'Acquisition Cost',
                    data: acquisitionCosts,
                    backgroundColor: '#007bff'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Value ($)'
                        }
                    }
                }
            }
        });
    }
    
    createAgeChart() {
        const ctx = this.container.querySelector(`#age-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const ageRanges = ['0-1 years', '1-2 years', '2-5 years', '5+ years'];
        const ageCounts = [0, 0, 0, 0];
        
        Object.values(this.assetPortfolio).forEach(asset => {
            const age = this.calculateAssetAge(asset.acquisitionDate);
            if (age < 1) ageCounts[0]++;
            else if (age < 2) ageCounts[1]++;
            else if (age < 5) ageCounts[2]++;
            else ageCounts[3]++;
        });
        
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ageRanges,
                datasets: [{
                    data: ageCounts,
                    backgroundColor: ['#28a745', '#ffc107', '#fd7e14', '#dc3545']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    createTrendChart() {
        const ctx = this.container.querySelector(`#trend-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        // Generate trend data (simulated)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const portfolioValues = [145000, 148000, 152000, 149000, 153000, 158000];
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Portfolio Value',
                    data: portfolioValues,
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Portfolio Value ($)'
                        }
                    }
                }
            }
        });
    }
    
    createDepreciationChart() {
        const ctx = this.container.querySelector(`#depreciation-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        // This will be populated when depreciation is calculated
        const years = Array.from({length: 5}, (_, i) => `Year ${i + 1}`);
        const bookValues = [20000, 16000, 12000, 8000, 4000];
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Book Value',
                    data: bookValues,
                    borderColor: '#dc3545',
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Book Value ($)'
                        }
                    }
                }
            }
        });
    }
    
    createRebalancingChart() {
        const ctx = this.container.querySelector(`#rebalancing-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const categories = ['Current Assets', 'Fixed Assets', 'Intangible Assets', 'Investments'];
        const currentAllocation = [42, 35, 15, 8];
        const recommendedAllocation = [35, 40, 15, 10];
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: categories,
                datasets: [{
                    label: 'Current Allocation (%)',
                    data: currentAllocation,
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.2)'
                }, {
                    label: 'Recommended Allocation (%)',
                    data: recommendedAllocation,
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.2)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 50
                    }
                }
            }
        });
    }
    
    filterAssets() {
        // Implementation for filtering assets by category
        const categoryFilter = this.container.querySelector('.category-filter').value;
        const assetCards = this.container.querySelectorAll('.asset-card');
        
        assetCards.forEach(card => {
            const assetKey = card.dataset.asset;
            const asset = this.assetPortfolio[assetKey];
            
            if (categoryFilter === 'all' || asset.category === categoryFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    sortAssets() {
        // Implementation for sorting assets
        const sortFilter = this.container.querySelector('.sort-filter').value;
        // Re-populate the grid with sorted data
        this.populateAssetGrid();
    }
    
    updateCalculations() {
        this.calculateAssetMetrics();
        this.updateSummary();
        this.updatePortfolioMetrics();
    }
    
    updateDisplay() {
        this.updateSummary();
        
        // Award gamification points
        if (window.awardPoints) {
            window.awardPoints(10, 'Using Asset Management System');
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
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
}

// Global functions for asset management interaction
function createAssetManager(container, id, type) {
    const manager = new AssetManagementSystem(container, id, type);
    assetInstances[id] = manager;
    return manager;
}

function selectAsset(managerId, assetKey) {
    const manager = assetInstances[managerId];
    if (manager) {
        manager.selectedAsset = assetKey;
        // Highlight selected asset
        const assetCards = manager.container.querySelectorAll('.asset-card');
        assetCards.forEach(card => {
            card.classList.remove('selected');
        });
        const selectedCard = manager.container.querySelector(`[data-asset="${assetKey}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }
        
        if (window.awardPoints) {
            window.awardPoints(3, 'Selected asset for analysis');
        }
    }
}

function addNewAsset(managerId) {
    // Implementation for adding new assets
    const manager = assetInstances[managerId];
    if (manager && window.awardPoints) {
        window.awardPoints(5, 'Initiated new asset addition');
    }
    
    alert('New asset addition feature would open a form to add assets to the portfolio.');
}

function calculateDepreciationSchedule(managerId) {
    const manager = assetInstances[managerId];
    if (!manager) return;
    
    const container = manager.container;
    const assetSelect = container.querySelector('.depreciation-asset-select');
    const methodSelect = container.querySelector('.depreciation-method');
    const usefulLife = parseFloat(container.querySelector('.useful-life').value);
    const salvageValue = parseFloat(container.querySelector('.salvage-value').value);
    
    const assetKey = assetSelect.value;
    const asset = manager.assetPortfolio[assetKey];
    const method = methodSelect.value;
    
    // Calculate depreciation schedule
    const schedule = [];
    const depreciableBase = asset.acquisitionCost - salvageValue;
    let bookValue = asset.acquisitionCost;
    
    for (let year = 1; year <= usefulLife; year++) {
        let yearlyDepreciation = 0;
        
        switch(method) {
            case 'straight_line':
                yearlyDepreciation = depreciableBase / usefulLife;
                break;
            case 'declining_balance':
                const rate = 2 / usefulLife;
                yearlyDepreciation = Math.min(bookValue * rate, bookValue - salvageValue);
                break;
            case 'sum_of_years':
                const sumOfYears = (usefulLife * (usefulLife + 1)) / 2;
                const remainingLife = usefulLife - year + 1;
                yearlyDepreciation = (remainingLife / sumOfYears) * depreciableBase;
                break;
        }
        
        const accumulatedDepreciation = year === 1 ? yearlyDepreciation :
            schedule[year - 2].accumulatedDepreciation + yearlyDepreciation;
        bookValue = asset.acquisitionCost - accumulatedDepreciation;
        
        schedule.push({
            year,
            beginningBookValue: year === 1 ? asset.acquisitionCost : schedule[year - 2].endingBookValue,
            depreciation: yearlyDepreciation,
            accumulatedDepreciation,
            endingBookValue: Math.max(bookValue, salvageValue)
        });
    }
    
    // Display schedule
    const scheduleTable = container.querySelector(`#schedule-table-${manager.id}`);
    scheduleTable.innerHTML = `
        <table class="depreciation-table">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Beginning Book Value</th>
                    <th>Depreciation</th>
                    <th>Accumulated Depreciation</th>
                    <th>Ending Book Value</th>
                </tr>
            </thead>
            <tbody>
                ${schedule.map(row => `
                    <tr>
                        <td>${row.year}</td>
                        <td>${manager.formatCurrency(row.beginningBookValue)}</td>
                        <td>${manager.formatCurrency(row.depreciation)}</td>
                        <td>${manager.formatCurrency(row.accumulatedDepreciation)}</td>
                        <td>${manager.formatCurrency(row.endingBookValue)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    // Update method explanation
    const methodDetails = container.querySelector(`#method-details-${manager.id}`);
    const methodInfo = manager.depreciationMethods[method];
    methodDetails.innerHTML = `
        <h6>${methodInfo.name}</h6>
        <p>${methodInfo.description}</p>
        <div class="formula">
            <strong>Formula:</strong> ${methodInfo.formula}
        </div>
    `;
    
    if (window.awardPoints) {
        window.awardPoints(8, 'Calculated depreciation schedule');
    }
}

function runOptimizationScenario(managerId, scenario) {
    const manager = assetInstances[managerId];
    if (!manager) return;
    
    const resultsContainer = manager.container.querySelector(`#optimization-results-${manager.id}`);
    
    let recommendations = '';
    
    switch(scenario) {
        case 'growth':
            recommendations = `
                <h6>📈 Growth Scenario Recommendations</h6>
                <ul>
                    <li>Increase allocation to growth assets (intangible assets)</li>
                    <li>Consider reinvesting cash into productive assets</li>
                    <li>Expand technology infrastructure</li>
                    <li>Maintain liquidity ratio at 25-30%</li>
                </ul>
            `;
            break;
        case 'recession':
            recommendations = `
                <h6>📉 Recession Scenario Recommendations</h6>
                <ul>
                    <li>Increase cash reserves to 40-50% of portfolio</li>
                    <li>Reduce exposure to volatile assets</li>
                    <li>Focus on asset preservation over growth</li>
                    <li>Consider asset disposal to improve liquidity</li>
                </ul>
            `;
            break;
        case 'stable':
            recommendations = `
                <h6>➡️ Stable Scenario Recommendations</h6>
                <ul>
                    <li>Maintain current allocation with minor adjustments</li>
                    <li>Focus on operational efficiency improvements</li>
                    <li>Regular asset maintenance and upgrades</li>
                    <li>Balanced approach to risk and return</li>
                </ul>
            `;
            break;
        case 'expansion':
            recommendations = `
                <h6>🚀 Expansion Scenario Recommendations</h6>
                <ul>
                    <li>Increase fixed asset allocation for infrastructure</li>
                    <li>Strategic investments in technology and IP</li>
                    <li>Maintain adequate working capital</li>
                    <li>Consider debt financing for asset acquisition</li>
                </ul>
            `;
            break;
    }
    
    resultsContainer.innerHTML = recommendations;
    
    if (window.awardPoints) {
        window.awardPoints(10, `Analyzed ${scenario} scenario`);
    }
}

function generateAssetReport(managerId) {
    const manager = assetInstances[managerId];
    if (!manager) return;
    
    const container = manager.container;
    const reportType = container.querySelector('.report-type-select').value;
    const reportPeriod = container.querySelector('.report-period-select').value;
    const reportFormat = container.querySelector('.report-format-select').value;
    
    const previewContainer = container.querySelector(`#report-preview-${manager.id}`);
    
    let reportContent = '';
    
    switch(reportType) {
        case 'portfolio_summary':
            reportContent = `
                <div class="report-header">
                    <h4>Asset Portfolio Summary Report</h4>
                    <p>Period: ${reportPeriod} | Generated: ${new Date().toLocaleDateString()}</p>
                </div>
                <div class="report-content">
                    <h5>Portfolio Overview</h5>
                    <p>Total Portfolio Value: ${manager.formatCurrency(manager.analysisResults.totalValue)}</p>
                    <p>Total Assets: ${manager.analysisResults.assetCount}</p>
                    <p>Portfolio ROI: ${((manager.analysisResults.totalGainLoss / manager.analysisResults.totalCost) * 100).toFixed(1)}%</p>
                    
                    <h5>Asset Breakdown by Category</h5>
                    ${Object.entries(manager.analysisResults.categoryBreakdown).map(([category, value]) => 
                        `<p>${manager.assetCategories[category]?.name || category}: ${manager.formatCurrency(value)}</p>`
                    ).join('')}
                </div>
            `;
            break;
        case 'depreciation_schedule':
            reportContent = `
                <div class="report-header">
                    <h4>Depreciation Schedule Report</h4>
                    <p>Period: ${reportPeriod} | Generated: ${new Date().toLocaleDateString()}</p>
                </div>
                <div class="report-content">
                    <h5>Annual Depreciation Summary</h5>
                    <p>Total Annual Depreciation: ${manager.formatCurrency(manager.analysisResults.totalAnnualDepreciation)}</p>
                    <p>This report would include detailed depreciation schedules for all depreciable assets.</p>
                </div>
            `;
            break;
        default:
            reportContent = `
                <div class="report-header">
                    <h4>${reportType.replace('_', ' ').toUpperCase()} Report</h4>
                    <p>Period: ${reportPeriod} | Generated: ${new Date().toLocaleDateString()}</p>
                </div>
                <div class="report-content">
                    <p>This report type would contain detailed information specific to ${reportType}.</p>
                </div>
            `;
    }
    
    previewContainer.innerHTML = reportContent;
    
    if (window.awardPoints) {
        window.awardPoints(12, `Generated ${reportType} report`);
    }
}

function submitAssetAnalysis(managerId) {
    const container = document.getElementById(managerId);
    const analysisInput = container.querySelector('.asset-analysis-input');
    const analysis = analysisInput.value.trim();
    
    if (analysis.length < 50) {
        alert('Please provide a more detailed analysis (at least 50 characters).');
        return;
    }
    
    if (window.awardPoints) {
        window.awardPoints(15, 'Submitted asset management analysis');
    }
    
    analysisInput.style.border = '2px solid #28a745';
    setTimeout(() => {
        analysisInput.style.border = '';
    }, 2000);
}