// ===================================
// Integrated Model Builder
// For Unit 8: Integrated Model Sprint
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeModelBuilders();
});

let modelBuilderInstances = {};

// ===================================
// System Initialization
// ===================================

function initializeModelBuilders() {
    const containers = document.querySelectorAll('.integrated-model-builder');
    
    containers.forEach((container, index) => {
        const builderId = container.dataset.id || `model-${index}`;
        const builderType = container.dataset.type || 'comprehensive';
        
        createModelBuilder(container, builderId, builderType);
    });
}

class IntegratedModelBuilder {
    constructor(container, id, type = 'comprehensive') {
        this.container = container;
        this.id = id;
        this.type = type;
        
        // Model components from all previous units
        this.modelComponents = {
            accounting: {
                name: "Accounting System (Unit 1)",
                description: "Smart ledger and financial recording",
                status: "available",
                inputs: ["transactions", "journal_entries", "chart_of_accounts"],
                outputs: ["trial_balance", "financial_statements", "cash_flow"],
                dependencies: []
            },
            automation: {
                name: "Process Automation (Unit 2)",
                description: "Month-end wizard and workflow automation",
                status: "available",
                inputs: ["manual_processes", "reconciliation_data", "adjustment_entries"],
                outputs: ["automated_workflows", "efficiency_metrics", "error_reduction"],
                dependencies: ["accounting"]
            },
            financial_modeling: {
                name: "Financial Modeling (Unit 3)",
                description: "Three-statement integration and projections",
                status: "available",
                inputs: ["historical_data", "assumptions", "market_conditions"],
                outputs: ["financial_projections", "scenario_analysis", "valuation"],
                dependencies: ["accounting", "automation"]
            },
            analytics: {
                name: "Data Analytics (Unit 4)",
                description: "Statistical analysis and business intelligence",
                status: "available",
                inputs: ["operational_data", "sales_data", "customer_data"],
                outputs: ["insights", "trends", "forecasts"],
                dependencies: ["financial_modeling"]
            },
            payroll: {
                name: "Payroll Management (Unit 5)",
                description: "Comprehensive payroll and benefits system",
                status: "available",
                inputs: ["employee_data", "time_tracking", "benefit_elections"],
                outputs: ["payroll_processing", "tax_compliance", "benefit_costs"],
                dependencies: ["accounting"]
            },
            pricing: {
                name: "Pricing Strategy (Unit 6)",
                description: "Dynamic pricing and optimization",
                status: "available",
                inputs: ["cost_data", "market_research", "competitor_analysis"],
                outputs: ["optimal_pricing", "revenue_projections", "margin_analysis"],
                dependencies: ["analytics", "financial_modeling"]
            },
            asset_management: {
                name: "Asset Management (Unit 7)",
                description: "Asset tracking and optimization",
                status: "available",
                inputs: ["asset_data", "depreciation_schedules", "utilization_metrics"],
                outputs: ["asset_optimization", "replacement_planning", "roi_analysis"],
                dependencies: ["accounting", "financial_modeling"]
            }
        };
        
        // Predefined business model templates
        this.businessModelTemplates = {
            saas_startup: {
                name: "SaaS Startup Model",
                description: "Technology startup with subscription revenue",
                components: ["accounting", "automation", "financial_modeling", "analytics", "pricing"],
                primaryMetrics: ["mrr", "churn_rate", "cac", "ltv", "burn_rate"],
                keyDrivers: ["user_acquisition", "pricing_strategy", "product_development"]
            },
            consulting_firm: {
                name: "Consulting Firm Model",
                description: "Professional services business model",
                components: ["accounting", "payroll", "pricing", "asset_management"],
                primaryMetrics: ["utilization_rate", "billing_rate", "profit_margin", "client_retention"],
                keyDrivers: ["consultant_productivity", "client_satisfaction", "pricing_power"]
            },
            ecommerce: {
                name: "E-commerce Business Model",
                description: "Online retail and fulfillment business",
                components: ["accounting", "analytics", "pricing", "asset_management", "automation"],
                primaryMetrics: ["conversion_rate", "average_order_value", "inventory_turnover", "customer_acquisition_cost"],
                keyDrivers: ["traffic_generation", "conversion_optimization", "inventory_management"]
            },
            manufacturing: {
                name: "Manufacturing Business Model",
                description: "Production and distribution business",
                components: ["accounting", "payroll", "asset_management", "pricing", "analytics"],
                primaryMetrics: ["production_efficiency", "cost_per_unit", "quality_metrics", "capacity_utilization"],
                keyDrivers: ["operational_efficiency", "supply_chain", "quality_control"]
            },
            hybrid_techstart: {
                name: "TechStart Solutions (Hybrid)",
                description: "Sarah's integrated business model",
                components: ["accounting", "automation", "financial_modeling", "analytics", "payroll", "pricing", "asset_management"],
                primaryMetrics: ["revenue_growth", "profit_margin", "cash_flow", "customer_satisfaction", "employee_productivity"],
                keyDrivers: ["market_expansion", "product_innovation", "operational_excellence"]
            }
        };
        
        // Integration framework
        this.integrationRules = {
            dataFlow: {
                "accounting -> financial_modeling": "financial_statements",
                "payroll -> accounting": "payroll_expenses",
                "pricing -> financial_modeling": "revenue_projections",
                "asset_management -> accounting": "depreciation_expense",
                "analytics -> pricing": "demand_insights",
                "automation -> analytics": "efficiency_metrics"
            },
            validationRules: {
                "cash_flow_consistency": "Cash flow from all sources must balance",
                "revenue_recognition": "Revenue must be recognized consistently across modules",
                "cost_allocation": "All costs must be properly allocated and not double-counted",
                "tax_compliance": "All calculations must comply with tax regulations"
            }
        };
        
        this.currentTemplate = 'hybrid_techstart';
        this.selectedComponents = [];
        this.modelConfiguration = {};
        this.modelResults = {};
        this.validationStatus = {};
        
        this.init();
    }
    
    init() {
        this.createHTML();
        this.setupEventListeners();
        this.loadTemplate();
        this.runIntegratedModel();
        this.updateDisplay();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="integrated-model-builder" id="${this.id}">
                <div class="builder-header">
                    <h3>🏗️ Integrated Business Model Builder</h3>
                    <p>Comprehensive business modeling for TechStart Solutions</p>
                </div>
                
                <div class="template-selector">
                    <label for="template-select-${this.id}">Business Model Template:</label>
                    <select id="template-select-${this.id}" class="template-select">
                        ${Object.entries(this.businessModelTemplates).map(([key, template]) => 
                            `<option value="${key}" ${key === this.currentTemplate ? 'selected' : ''}>${template.name}</option>`
                        ).join('')}
                    </select>
                    <button class="custom-model-btn" onclick="createCustomModel('${this.id}')">🎨 Custom Model</button>
                </div>
                
                <div class="model-tabs">
                    <div class="tab-buttons">
                        <button class="tab-btn active" data-tab="components">🧩 Components</button>
                        <button class="tab-btn" data-tab="integration">🔗 Integration</button>
                        <button class="tab-btn" data-tab="dashboard">📊 Dashboard</button>
                        <button class="tab-btn" data-tab="scenarios">🔬 Scenarios</button>
                        <button class="tab-btn" data-tab="validation">✅ Validation</button>
                        <button class="tab-btn" data-tab="export">📤 Export</button>
                    </div>
                </div>
                
                <div class="model-content">
                    <div class="tab-content components active" id="components-${this.id}">
                        <!-- Components content -->
                    </div>
                    
                    <div class="tab-content integration" id="integration-${this.id}">
                        <!-- Integration content -->
                    </div>
                    
                    <div class="tab-content dashboard" id="dashboard-${this.id}">
                        <!-- Dashboard content -->
                    </div>
                    
                    <div class="tab-content scenarios" id="scenarios-${this.id}">
                        <!-- Scenarios content -->
                    </div>
                    
                    <div class="tab-content validation" id="validation-${this.id}">
                        <!-- Validation content -->
                    </div>
                    
                    <div class="tab-content export" id="export-${this.id}">
                        <!-- Export content -->
                    </div>
                </div>
                
                <div class="model-summary">
                    <h4>📈 Integrated Model Results</h4>
                    <div class="results-grid" id="results-${this.id}">
                        <!-- Results will be populated dynamically -->
                    </div>
                </div>
                
                <div class="business-scenario">
                    <h4>🏢 Sarah's Integration Challenge</h4>
                    <div class="scenario-content">
                        <p><strong>TechStart Solutions Integration Sprint:</strong></p>
                        <p>Sarah needs to create a comprehensive business model that integrates all operational systems:</p>
                        <ul>
                            <li>Unified data flow across all business functions</li>
                            <li>Consistent financial reporting and analytics</li>
                            <li>Automated decision-making processes</li>
                            <li>Scalable operational framework</li>
                            <li>Risk management and compliance validation</li>
                        </ul>
                    </div>
                </div>
                
                <div class="learning-activity">
                    <h4>🎯 Business Model Integration Analysis</h4>
                    <div class="activity-question">
                        <p>Based on your integrated model results, what strategic recommendations would you make to Sarah for optimizing her business operations?</p>
                        <textarea class="integration-analysis-input" placeholder="Consider data integration, process optimization, decision automation, and scalability factors..."></textarea>
                        <button class="submit-integration-analysis-btn" onclick="submitIntegrationAnalysis('${this.id}')">Submit Analysis</button>
                    </div>
                </div>
            </div>
        `;
        
        this.populateTabContent();
    }
    
    populateTabContent() {
        this.populateComponentsTab();
        this.populateIntegrationTab();
        this.populateDashboardTab();
        this.populateScenariosTab();
        this.populateValidationTab();
        this.populateExportTab();
    }
    
    populateComponentsTab() {
        const componentsTab = this.container.querySelector(`#components-${this.id}`);
        const template = this.businessModelTemplates[this.currentTemplate];
        
        componentsTab.innerHTML = `
            <div class="components-configuration">
                <div class="template-overview">
                    <h5>📋 ${template.name}</h5>
                    <p>${template.description}</p>
                    <div class="template-details">
                        <div class="detail-item">
                            <strong>Primary Metrics:</strong>
                            <span>${template.primaryMetrics.join(', ')}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Key Drivers:</strong>
                            <span>${template.keyDrivers.join(', ')}</span>
                        </div>
                    </div>
                </div>
                
                <div class="component-selection">
                    <h5>🧩 Available Components</h5>
                    <div class="components-grid">
                        ${Object.entries(this.modelComponents).map(([key, component]) => {
                            const isSelected = template.components.includes(key);
                            return `
                                <div class="component-card ${isSelected ? 'selected' : ''}" data-component="${key}">
                                    <div class="component-header">
                                        <h6>${component.name}</h6>
                                        <input type="checkbox" class="component-checkbox" 
                                               ${isSelected ? 'checked' : ''} 
                                               onchange="toggleComponent('${this.id}', '${key}')">
                                    </div>
                                    <p>${component.description}</p>
                                    <div class="component-details">
                                        <div class="inputs">
                                            <strong>Inputs:</strong>
                                            <span>${component.inputs.slice(0, 2).join(', ')}${component.inputs.length > 2 ? '...' : ''}</span>
                                        </div>
                                        <div class="outputs">
                                            <strong>Outputs:</strong>
                                            <span>${component.outputs.slice(0, 2).join(', ')}${component.outputs.length > 2 ? '...' : ''}</span>
                                        </div>
                                        ${component.dependencies.length > 0 ? `
                                            <div class="dependencies">
                                                <strong>Dependencies:</strong>
                                                <span>${component.dependencies.join(', ')}</span>
                                            </div>
                                        ` : ''}
                                    </div>
                                    <div class="component-status ${component.status}">
                                        ${component.status === 'available' ? '✅' : '⚠️'} ${component.status}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="component-configuration">
                    <h5>⚙️ Component Configuration</h5>
                    <div class="config-panels" id="config-panels-${this.id}">
                        <!-- Configuration panels will be populated based on selected components -->
                    </div>
                </div>
                
                <div class="model-actions">
                    <button class="build-model-btn primary-btn" onclick="buildIntegratedModel('${this.id}')">
                        🏗️ Build Integrated Model
                    </button>
                    <button class="validate-model-btn secondary-btn" onclick="validateModel('${this.id}')">
                        ✅ Validate Model
                    </button>
                    <button class="reset-model-btn secondary-btn" onclick="resetModel('${this.id}')">
                        🔄 Reset
                    </button>
                </div>
            </div>
        `;
        
        this.updateComponentConfiguration();
    }
    
    populateIntegrationTab() {
        const integrationTab = this.container.querySelector(`#integration-${this.id}`);
        
        integrationTab.innerHTML = `
            <div class="integration-designer">
                <div class="data-flow-diagram">
                    <h5>🔄 Data Flow Diagram</h5>
                    <div class="flow-canvas" id="flow-canvas-${this.id}">
                        <svg width="800" height="600" id="flow-svg-${this.id}">
                            <!-- Data flow diagram will be drawn here -->
                        </svg>
                    </div>
                </div>
                
                <div class="integration-rules">
                    <h5>📏 Integration Rules</h5>
                    <div class="rules-list">
                        ${Object.entries(this.integrationRules.dataFlow).map(([flow, data]) => `
                            <div class="rule-item">
                                <span class="flow">${flow.replace('_', ' ').replace('->', '→')}</span>
                                <span class="data">${data.replace('_', ' ')}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="integration-mapping">
                    <h5>🗺️ Data Mapping</h5>
                    <div class="mapping-table" id="mapping-table-${this.id}">
                        <!-- Data mapping table will be populated -->
                    </div>
                </div>
                
                <div class="integration-testing">
                    <h5>🧪 Integration Testing</h5>
                    <div class="test-controls">
                        <button class="test-btn" onclick="testIntegration('${this.id}', 'dataflow')">Test Data Flow</button>
                        <button class="test-btn" onclick="testIntegration('${this.id}', 'validation')">Test Validation Rules</button>
                        <button class="test-btn" onclick="testIntegration('${this.id}', 'performance')">Test Performance</button>
                    </div>
                    <div class="test-results" id="test-results-${this.id}">
                        <!-- Test results will be displayed here -->
                    </div>
                </div>
            </div>
        `;
    }
    
    populateDashboardTab() {
        const dashboardTab = this.container.querySelector(`#dashboard-${this.id}`);
        
        dashboardTab.innerHTML = `
            <div class="integrated-dashboard">
                <div class="dashboard-controls">
                    <div class="time-period">
                        <label>Time Period:</label>
                        <select class="period-select">
                            <option value="current">Current Period</option>
                            <option value="ytd">Year to Date</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annual">Annual</option>
                        </select>
                    </div>
                    <div class="view-mode">
                        <label>View Mode:</label>
                        <select class="view-select">
                            <option value="executive">Executive Summary</option>
                            <option value="operational">Operational Details</option>
                            <option value="financial">Financial Focus</option>
                            <option value="analytics">Analytics View</option>
                        </select>
                    </div>
                    <button class="refresh-dashboard-btn" onclick="refreshDashboard('${this.id}')">🔄 Refresh</button>
                </div>
                
                <div class="dashboard-kpis">
                    <h5>📊 Key Performance Indicators</h5>
                    <div class="kpi-grid" id="kpi-grid-${this.id}">
                        <!-- KPIs will be populated -->
                    </div>
                </div>
                
                <div class="dashboard-charts">
                    <div class="chart-container">
                        <h5>📈 Revenue & Profitability</h5>
                        <canvas id="revenue-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                    <div class="chart-container">
                        <h5>💰 Cash Flow Analysis</h5>
                        <canvas id="cashflow-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                    <div class="chart-container">
                        <h5>👥 Operational Metrics</h5>
                        <canvas id="operational-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                    <div class="chart-container">
                        <h5>📊 Business Health Score</h5>
                        <canvas id="health-chart-${this.id}" width="400" height="300"></canvas>
                    </div>
                </div>
                
                <div class="alerts-notifications">
                    <h5>🚨 Alerts & Notifications</h5>
                    <div class="alerts-list" id="alerts-${this.id}">
                        <!-- Alerts will be populated -->
                    </div>
                </div>
            </div>
        `;
    }
    
    populateScenariosTab() {
        const scenariosTab = this.container.querySelector(`#scenarios-${this.id}`);
        
        scenariosTab.innerHTML = `
            <div class="scenario-modeling">
                <div class="scenario-builder">
                    <h5>🔬 Scenario Builder</h5>
                    <div class="scenario-controls">
                        <div class="scenario-type">
                            <label>Scenario Type:</label>
                            <select class="scenario-type-select">
                                <option value="growth">Growth Scenario</option>
                                <option value="recession">Recession Scenario</option>
                                <option value="expansion">Market Expansion</option>
                                <option value="disruption">Industry Disruption</option>
                                <option value="custom">Custom Scenario</option>
                            </select>
                        </div>
                        
                        <div class="scenario-parameters">
                            <h6>📊 Key Variables</h6>
                            <div class="parameter-inputs">
                                <div class="input-group">
                                    <label>Revenue Growth (%):</label>
                                    <input type="number" class="revenue-growth" value="15" step="5" min="-50" max="100">
                                </div>
                                <div class="input-group">
                                    <label>Market Conditions:</label>
                                    <select class="market-conditions">
                                        <option value="favorable">Favorable</option>
                                        <option value="neutral" selected>Neutral</option>
                                        <option value="challenging">Challenging</option>
                                    </select>
                                </div>
                                <div class="input-group">
                                    <label>Competition Level:</label>
                                    <select class="competition-level">
                                        <option value="low">Low</option>
                                        <option value="moderate" selected>Moderate</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <div class="input-group">
                                    <label>Cost Inflation (%):</label>
                                    <input type="number" class="cost-inflation" value="3" step="1" min="0" max="20">
                                </div>
                                <div class="input-group">
                                    <label>Technology Impact:</label>
                                    <select class="tech-impact">
                                        <option value="disruptive">Disruptive</option>
                                        <option value="enabling" selected>Enabling</option>
                                        <option value="neutral">Neutral</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <button class="run-scenario-btn" onclick="runIntegratedScenario('${this.id}')">🚀 Run Scenario</button>
                    </div>
                </div>
                
                <div class="scenario-results">
                    <h5>📈 Scenario Results</h5>
                    <div class="scenario-comparison" id="scenario-comparison-${this.id}">
                        <!-- Scenario comparison will be displayed -->
                    </div>
                </div>
                
                <div class="monte-carlo">
                    <h5>🎲 Monte Carlo Simulation</h5>
                    <div class="monte-carlo-controls">
                        <div class="input-group">
                            <label>Iterations:</label>
                            <input type="number" class="monte-carlo-iterations" value="1000" step="100" min="100" max="10000">
                        </div>
                        <div class="input-group">
                            <label>Confidence Level:</label>
                            <select class="confidence-level">
                                <option value="0.9">90%</option>
                                <option value="0.95" selected>95%</option>
                                <option value="0.99">99%</option>
                            </select>
                        </div>
                        <button class="run-monte-carlo-btn" onclick="runMonteCarlo('${this.id}')">🎯 Run Simulation</button>
                    </div>
                    <div class="monte-carlo-results" id="monte-carlo-${this.id}">
                        <!-- Monte Carlo results will be displayed -->
                    </div>
                </div>
                
                <div class="sensitivity-analysis">
                    <h5>📊 Sensitivity Analysis</h5>
                    <canvas id="sensitivity-chart-${this.id}" width="600" height="400"></canvas>
                </div>
            </div>
        `;
    }
    
    populateValidationTab() {
        const validationTab = this.container.querySelector(`#validation-${this.id}`);
        
        validationTab.innerHTML = `
            <div class="model-validation">
                <div class="validation-overview">
                    <h5>✅ Validation Overview</h5>
                    <div class="validation-status" id="validation-status-${this.id}">
                        <!-- Validation status will be populated -->
                    </div>
                </div>
                
                <div class="validation-checks">
                    <h5>🔍 Validation Checks</h5>
                    <div class="checks-list">
                        ${Object.entries(this.integrationRules.validationRules).map(([rule, description]) => `
                            <div class="validation-check" data-rule="${rule}">
                                <div class="check-header">
                                    <span class="check-name">${rule.replace('_', ' ').toUpperCase()}</span>
                                    <span class="check-status" id="status-${rule}-${this.id}">⏳ Pending</span>
                                </div>
                                <p class="check-description">${description}</p>
                                <div class="check-details" id="details-${rule}-${this.id}">
                                    <!-- Detailed validation results will be shown here -->
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="data-quality">
                    <h5>📊 Data Quality Assessment</h5>
                    <div class="quality-metrics" id="quality-metrics-${this.id}">
                        <!-- Data quality metrics will be populated -->
                    </div>
                </div>
                
                <div class="compliance-check">
                    <h5>📋 Compliance Verification</h5>
                    <div class="compliance-items">
                        <div class="compliance-item">
                            <span class="item-name">GAAP Compliance</span>
                            <span class="compliance-status">✅ Compliant</span>
                        </div>
                        <div class="compliance-item">
                            <span class="item-name">Tax Regulations</span>
                            <span class="compliance-status">✅ Compliant</span>
                        </div>
                        <div class="compliance-item">
                            <span class="item-name">Internal Controls</span>
                            <span class="compliance-status">⚠️ Review Required</span>
                        </div>
                        <div class="compliance-item">
                            <span class="item-name">Data Privacy</span>
                            <span class="compliance-status">✅ Compliant</span>
                        </div>
                    </div>
                </div>
                
                <div class="validation-actions">
                    <button class="validate-all-btn primary-btn" onclick="validateAllRules('${this.id}')">
                        🔍 Validate All Rules
                    </button>
                    <button class="fix-issues-btn secondary-btn" onclick="autoFixIssues('${this.id}')">
                        🔧 Auto-Fix Issues
                    </button>
                    <button class="generate-report-btn secondary-btn" onclick="generateValidationReport('${this.id}')">
                        📄 Generate Report
                    </button>
                </div>
            </div>
        `;
    }
    
    populateExportTab() {
        const exportTab = this.container.querySelector(`#export-${this.id}`);
        
        exportTab.innerHTML = `
            <div class="model-export">
                <div class="export-options">
                    <h5>📤 Export Options</h5>
                    <div class="export-formats">
                        <div class="format-option">
                            <input type="checkbox" id="excel-export-${this.id}" checked>
                            <label for="excel-export-${this.id}">📊 Excel Workbook</label>
                            <p>Complete model with all calculations and charts</p>
                        </div>
                        <div class="format-option">
                            <input type="checkbox" id="pdf-export-${this.id}" checked>
                            <label for="pdf-export-${this.id}">📄 PDF Report</label>
                            <p>Executive summary and key findings</p>
                        </div>
                        <div class="format-option">
                            <input type="checkbox" id="json-export-${this.id}">
                            <label for="json-export-${this.id}">🔧 JSON Data</label>
                            <p>Raw data for further analysis or integration</p>
                        </div>
                        <div class="format-option">
                            <input type="checkbox" id="powerbi-export-${this.id}">
                            <label for="powerbi-export-${this.id}">📈 Power BI Template</label>
                            <p>Interactive dashboard template</p>
                        </div>
                    </div>
                </div>
                
                <div class="export-customization">
                    <h5>⚙️ Export Customization</h5>
                    <div class="customization-options">
                        <div class="option-group">
                            <label>Report Period:</label>
                            <select class="export-period">
                                <option value="current">Current Period</option>
                                <option value="ytd">Year to Date</option>
                                <option value="annual">Annual</option>
                                <option value="historical">Historical (3 years)</option>
                            </select>
                        </div>
                        <div class="option-group">
                            <label>Detail Level:</label>
                            <select class="export-detail">
                                <option value="summary">Summary</option>
                                <option value="detailed" selected>Detailed</option>
                                <option value="comprehensive">Comprehensive</option>
                            </select>
                        </div>
                        <div class="option-group">
                            <label>Include Scenarios:</label>
                            <input type="checkbox" class="include-scenarios" checked>
                        </div>
                        <div class="option-group">
                            <label>Include Validation:</label>
                            <input type="checkbox" class="include-validation" checked>
                        </div>
                    </div>
                </div>
                
                <div class="automated-reporting">
                    <h5>🤖 Automated Reporting</h5>
                    <div class="automation-setup">
                        <div class="schedule-options">
                            <div class="option-group">
                                <label>Report Frequency:</label>
                                <select class="report-frequency">
                                    <option value="manual">Manual Only</option>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly" selected>Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                </select>
                            </div>
                            <div class="option-group">
                                <label>Delivery Method:</label>
                                <select class="delivery-method">
                                    <option value="email">Email</option>
                                    <option value="dashboard">Dashboard</option>
                                    <option value="shared_folder">Shared Folder</option>
                                    <option value="api">API Integration</option>
                                </select>
                            </div>
                        </div>
                        <button class="setup-automation-btn" onclick="setupAutomation('${this.id}')">
                            ⚙️ Setup Automation
                        </button>
                    </div>
                </div>
                
                <div class="export-preview">
                    <h5>👁️ Export Preview</h5>
                    <div class="preview-container" id="export-preview-${this.id}">
                        <p>Select export options and click "Generate Preview" to see the output.</p>
                    </div>
                </div>
                
                <div class="export-actions">
                    <button class="preview-btn secondary-btn" onclick="generateExportPreview('${this.id}')">
                        👁️ Generate Preview
                    </button>
                    <button class="export-btn primary-btn" onclick="exportIntegratedModel('${this.id}')">
                        📤 Export Model
                    </button>
                    <button class="share-btn secondary-btn" onclick="shareModel('${this.id}')">
                        🔗 Share Model
                    </button>
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
        
        // Template selection
        const templateSelect = this.container.querySelector('.template-select');
        templateSelect.addEventListener('change', (e) => {
            this.currentTemplate = e.target.value;
            this.loadTemplate();
            this.populateComponentsTab();
        });
        
        // Real-time updates
        const inputs = this.container.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                this.updateModelCalculations();
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
        
        // Initialize charts and content for the active tab
        setTimeout(() => {
            this.initializeTabContent(tabName);
        }, 100);
    }
    
    loadTemplate() {
        const template = this.businessModelTemplates[this.currentTemplate];
        this.selectedComponents = [...template.components];
        this.modelConfiguration = {
            template: this.currentTemplate,
            components: this.selectedComponents,
            metrics: template.primaryMetrics,
            drivers: template.keyDrivers
        };
    }
    
    runIntegratedModel() {
        // Simulate integrated model calculations
        const template = this.businessModelTemplates[this.currentTemplate];
        
        // Base financial metrics for TechStart Solutions
        const baseMetrics = {
            revenue: 485000,
            cogs: 145500,
            gross_profit: 339500,
            operating_expenses: 267000,
            ebitda: 72500,
            net_income: 58000,
            cash_flow: 65000,
            total_assets: 158000,
            total_liabilities: 45000,
            equity: 113000
        };
        
        // Calculate derived metrics based on selected components
        let integratedMetrics = { ...baseMetrics };
        
        if (this.selectedComponents.includes('analytics')) {
            integratedMetrics.customer_acquisition_cost = 125;
            integratedMetrics.customer_lifetime_value = 2500;
            integratedMetrics.churn_rate = 0.05;
        }
        
        if (this.selectedComponents.includes('pricing')) {
            integratedMetrics.pricing_optimization = 0.12; // 12% improvement
            integratedMetrics.revenue *= (1 + integratedMetrics.pricing_optimization);
        }
        
        if (this.selectedComponents.includes('automation')) {
            integratedMetrics.efficiency_gain = 0.18; // 18% efficiency improvement
            integratedMetrics.operating_expenses *= (1 - integratedMetrics.efficiency_gain);
        }
        
        if (this.selectedComponents.includes('asset_management')) {
            integratedMetrics.asset_utilization = 0.85;
            integratedMetrics.asset_roi = (integratedMetrics.net_income / integratedMetrics.total_assets) * 100;
        }
        
        // Recalculate dependent metrics
        integratedMetrics.gross_profit = integratedMetrics.revenue - integratedMetrics.cogs;
        integratedMetrics.ebitda = integratedMetrics.gross_profit - integratedMetrics.operating_expenses;
        integratedMetrics.net_income = integratedMetrics.ebitda * 0.8; // Simplified tax calculation
        integratedMetrics.gross_margin = (integratedMetrics.gross_profit / integratedMetrics.revenue) * 100;
        integratedMetrics.net_margin = (integratedMetrics.net_income / integratedMetrics.revenue) * 100;
        integratedMetrics.roa = (integratedMetrics.net_income / integratedMetrics.total_assets) * 100;
        integratedMetrics.roe = (integratedMetrics.net_income / integratedMetrics.equity) * 100;
        
        this.modelResults = integratedMetrics;
    }
    
    updateComponentConfiguration() {
        const configContainer = this.container.querySelector(`#config-panels-${this.id}`);
        if (!configContainer) return;
        
        let configHTML = '';
        
        this.selectedComponents.forEach(componentKey => {
            const component = this.modelComponents[componentKey];
            configHTML += `
                <div class="config-panel" data-component="${componentKey}">
                    <h6>⚙️ ${component.name} Configuration</h6>
                    <div class="config-options">
                        <!-- Component-specific configuration options would go here -->
                        <p>Configuration options for ${component.name} would be displayed here.</p>
                    </div>
                </div>
            `;
        });
        
        configContainer.innerHTML = configHTML;
    }
    
    updateModelCalculations() {
        this.runIntegratedModel();
        this.updateResults();
        this.updateDashboard();
    }
    
    updateResults() {
        const resultsContainer = this.container.querySelector(`#results-${this.id}`);
        const metrics = this.modelResults;
        
        resultsContainer.innerHTML = `
            <div class="result-item highlight">
                <span class="label">Total Revenue:</span>
                <span class="value">${this.formatCurrency(metrics.revenue)}</span>
            </div>
            <div class="result-item">
                <span class="label">Gross Profit:</span>
                <span class="value">${this.formatCurrency(metrics.gross_profit)}</span>
            </div>
            <div class="result-item">
                <span class="label">EBITDA:</span>
                <span class="value">${this.formatCurrency(metrics.ebitda)}</span>
            </div>
            <div class="result-item">
                <span class="label">Net Income:</span>
                <span class="value">${this.formatCurrency(metrics.net_income)}</span>
            </div>
            <div class="result-item">
                <span class="label">Gross Margin:</span>
                <span class="value">${metrics.gross_margin.toFixed(1)}%</span>
            </div>
            <div class="result-item">
                <span class="label">Net Margin:</span>
                <span class="value">${metrics.net_margin.toFixed(1)}%</span>
            </div>
            <div class="result-item">
                <span class="label">ROA:</span>
                <span class="value">${metrics.roa.toFixed(1)}%</span>
            </div>
            <div class="result-item">
                <span class="label">ROE:</span>
                <span class="value">${metrics.roe.toFixed(1)}%</span>
            </div>
        `;
    }
    
    updateDashboard() {
        const kpiContainer = this.container.querySelector(`#kpi-grid-${this.id}`);
        if (!kpiContainer) return;
        
        const metrics = this.modelResults;
        
        kpiContainer.innerHTML = `
            <div class="kpi-card revenue">
                <h6>💰 Revenue</h6>
                <span class="kpi-value">${this.formatCurrency(metrics.revenue)}</span>
                <span class="kpi-change positive">+12.5%</span>
            </div>
            <div class="kpi-card profit">
                <h6>📈 Net Profit</h6>
                <span class="kpi-value">${this.formatCurrency(metrics.net_income)}</span>
                <span class="kpi-change positive">+18.3%</span>
            </div>
            <div class="kpi-card margin">
                <h6>📊 Gross Margin</h6>
                <span class="kpi-value">${metrics.gross_margin.toFixed(1)}%</span>
                <span class="kpi-change positive">+2.1pp</span>
            </div>
            <div class="kpi-card cashflow">
                <h6>💧 Cash Flow</h6>
                <span class="kpi-value">${this.formatCurrency(metrics.cash_flow)}</span>
                <span class="kpi-change positive">+15.7%</span>
            </div>
        `;
        
        // Update alerts
        const alertsContainer = this.container.querySelector(`#alerts-${this.id}`);
        if (alertsContainer) {
            alertsContainer.innerHTML = `
                <div class="alert success">
                    <span class="alert-icon">✅</span>
                    <span class="alert-message">Model integration completed successfully</span>
                </div>
                <div class="alert info">
                    <span class="alert-icon">ℹ️</span>
                    <span class="alert-message">Pricing optimization increased revenue by 12%</span>
                </div>
                <div class="alert warning">
                    <span class="alert-icon">⚠️</span>
                    <span class="alert-message">Asset utilization below optimal levels</span>
                </div>
            `;
        }
    }
    
    initializeTabContent(tabName) {
        if (tabName === 'dashboard') {
            this.createDashboardCharts();
        } else if (tabName === 'integration') {
            this.createDataFlowDiagram();
        } else if (tabName === 'scenarios') {
            this.createSensitivityChart();
        }
    }
    
    createDashboardCharts() {
        this.createRevenueChart();
        this.createCashFlowChart();
        this.createOperationalChart();
        this.createHealthChart();
    }
    
    createRevenueChart() {
        const ctx = this.container.querySelector(`#revenue-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const revenue = [38000, 42000, 45000, 48000, 51000, 54000];
        const profit = [8500, 10200, 11800, 13500, 15200, 16800];
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Revenue',
                    data: revenue,
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    fill: false
                }, {
                    label: 'Profit',
                    data: profit,
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount ($)'
                        }
                    }
                }
            }
        });
    }
    
    createCashFlowChart() {
        const ctx = this.container.querySelector(`#cashflow-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const categories = ['Operating', 'Investing', 'Financing'];
        const cashFlows = [65000, -12000, 8000];
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: categories,
                datasets: [{
                    data: cashFlows,
                    backgroundColor: ['#28a745', '#dc3545', '#ffc107']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Cash Flow ($)'
                        }
                    }
                }
            }
        });
    }
    
    createOperationalChart() {
        const ctx = this.container.querySelector(`#operational-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const metrics = ['Efficiency', 'Quality', 'Customer Sat.', 'Employee Prod.'];
        const scores = [85, 92, 88, 91];
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: metrics,
                datasets: [{
                    label: 'Current Performance',
                    data: scores,
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.2)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
    
    createHealthChart() {
        const ctx = this.container.querySelector(`#health-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const healthScore = 87; // Overall business health score
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [healthScore, 100 - healthScore],
                    backgroundColor: ['#28a745', '#e9ecef'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
        
        // Add center text
        const chartContainer = ctx.parentElement;
        const centerText = document.createElement('div');
        centerText.className = 'chart-center-text';
        centerText.innerHTML = `<span class="score">${healthScore}%</span><br><span class="label">Health Score</span>`;
        centerText.style.position = 'absolute';
        centerText.style.top = '50%';
        centerText.style.left = '50%';
        centerText.style.transform = 'translate(-50%, -50%)';
        centerText.style.textAlign = 'center';
        centerText.style.pointerEvents = 'none';
        chartContainer.style.position = 'relative';
        chartContainer.appendChild(centerText);
    }
    
    createDataFlowDiagram() {
        const svg = this.container.querySelector(`#flow-svg-${this.id}`);
        if (!svg) return;
        
        // Simple data flow visualization
        svg.innerHTML = `
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                </marker>
            </defs>
            <!-- Component boxes -->
            <rect x="50" y="50" width="120" height="60" fill="#e3f2fd" stroke="#1976d2" rx="5"/>
            <text x="110" y="85" text-anchor="middle" font-size="12">Accounting</text>
            
            <rect x="250" y="50" width="120" height="60" fill="#f3e5f5" stroke="#7b1fa2" rx="5"/>
            <text x="310" y="85" text-anchor="middle" font-size="12">Analytics</text>
            
            <rect x="450" y="50" width="120" height="60" fill="#e8f5e8" stroke="#388e3c" rx="5"/>
            <text x="510" y="85" text-anchor="middle" font-size="12">Pricing</text>
            
            <rect x="150" y="200" width="120" height="60" fill="#fff3e0" stroke="#f57c00" rx="5"/>
            <text x="210" y="235" text-anchor="middle" font-size="12">Financial Model</text>
            
            <rect x="350" y="200" width="120" height="60" fill="#fce4ec" stroke="#c2185b" rx="5"/>
            <text x="410" y="235" text-anchor="middle" font-size="12">Dashboard</text>
            
            <!-- Flow arrows -->
            <line x1="170" y1="80" x2="250" y2="80" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
            <line x1="370" y1="80" x2="450" y2="80" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
            <line x1="150" y1="110" x2="190" y2="180" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
            <line x1="320" y1="110" x2="280" y2="180" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
            <line x1="310" y1="200" x2="350" y2="220" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
        `;
    }
    
    createSensitivityChart() {
        const ctx = this.container.querySelector(`#sensitivity-chart-${this.id}`);
        if (!ctx || !window.Chart) return;
        
        const variables = ['Revenue Growth', 'Cost Inflation', 'Market Share', 'Pricing Power', 'Efficiency'];
        const sensitivity = [15.2, -8.7, 12.4, 18.9, 11.3];
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: variables,
                datasets: [{
                    label: 'Impact on Net Income (%)',
                    data: sensitivity,
                    backgroundColor: sensitivity.map(value => value > 0 ? '#28a745' : '#dc3545')
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Impact on Net Income (%)'
                        }
                    }
                }
            }
        });
    }
    
    updateDisplay() {
        this.updateResults();
        
        // Award gamification points
        if (window.awardPoints) {
            window.awardPoints(15, 'Using Integrated Model Builder');
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

// Global functions for model builder interaction
function createModelBuilder(container, id, type) {
    const builder = new IntegratedModelBuilder(container, id, type);
    modelBuilderInstances[id] = builder;
    return builder;
}

function toggleComponent(builderId, componentKey) {
    const builder = modelBuilderInstances[builderId];
    if (!builder) return;
    
    const index = builder.selectedComponents.indexOf(componentKey);
    if (index > -1) {
        builder.selectedComponents.splice(index, 1);
    } else {
        builder.selectedComponents.push(componentKey);
    }
    
    builder.updateComponentConfiguration();
    builder.runIntegratedModel();
    builder.updateResults();
    
    if (window.awardPoints) {
        window.awardPoints(3, `Toggled ${componentKey} component`);
    }
}

function buildIntegratedModel(builderId) {
    const builder = modelBuilderInstances[builderId];
    if (!builder) return;
    
    builder.runIntegratedModel();
    builder.updateResults();
    builder.updateDashboard();
    
    if (window.awardPoints) {
        window.awardPoints(20, 'Built integrated business model');
    }
    
    alert('Integrated model built successfully! Check the Dashboard tab for comprehensive results.');
}

function validateModel(builderId) {
    const builder = modelBuilderInstances[builderId];
    if (!builder) return;
    
    // Simulate validation process
    const validationResults = {
        cash_flow_consistency: { status: 'pass', message: 'Cash flow balances across all modules' },
        revenue_recognition: { status: 'pass', message: 'Revenue recognition is consistent' },
        cost_allocation: { status: 'warning', message: 'Some costs may be double-counted in analytics module' },
        tax_compliance: { status: 'pass', message: 'Tax calculations comply with regulations' }
    };
    
    builder.validationStatus = validationResults;
    
    if (window.awardPoints) {
        window.awardPoints(10, 'Validated integrated model');
    }
    
    // Switch to validation tab to show results
    builder.switchTab('validation');
    
    // Update validation display
    Object.entries(validationResults).forEach(([rule, result]) => {
        const statusElement = builder.container.querySelector(`#status-${rule}-${builder.id}`);
        const detailsElement = builder.container.querySelector(`#details-${rule}-${builder.id}`);
        
        if (statusElement) {
            statusElement.textContent = result.status === 'pass' ? '✅ Passed' : '⚠️ Warning';
            statusElement.className = `check-status ${result.status}`;
        }
        
        if (detailsElement) {
            detailsElement.innerHTML = `<p>${result.message}</p>`;
        }
    });
}

function runIntegratedScenario(builderId) {
    const builder = modelBuilderInstances[builderId];
    if (!builder) return;
    
    const container = builder.container;
    const scenarioType = container.querySelector('.scenario-type-select').value;
    const revenueGrowth = parseFloat(container.querySelector('.revenue-growth').value) / 100;
    const marketConditions = container.querySelector('.market-conditions').value;
    const competitionLevel = container.querySelector('.competition-level').value;
    const costInflation = parseFloat(container.querySelector('.cost-inflation').value) / 100;
    const techImpact = container.querySelector('.tech-impact').value;
    
    // Adjust base metrics based on scenario parameters
    const baseMetrics = builder.modelResults;
    const scenarioMetrics = { ...baseMetrics };
    
    // Apply revenue growth
    scenarioMetrics.revenue *= (1 + revenueGrowth);
    
    // Apply cost inflation
    scenarioMetrics.cogs *= (1 + costInflation);
    scenarioMetrics.operating_expenses *= (1 + costInflation);
    
    // Apply market condition adjustments
    switch(marketConditions) {
        case 'favorable':
            scenarioMetrics.revenue *= 1.1;
            break;
        case 'challenging':
            scenarioMetrics.revenue *= 0.9;
            scenarioMetrics.operating_expenses *= 1.05;
            break;
    }
    
    // Apply competition level adjustments
    switch(competitionLevel) {
        case 'high':
            scenarioMetrics.revenue *= 0.95;
            scenarioMetrics.operating_expenses *= 1.03; // Higher marketing costs
            break;
        case 'low':
            scenarioMetrics.revenue *= 1.05;
            break;
    }
    
    // Recalculate derived metrics
    scenarioMetrics.gross_profit = scenarioMetrics.revenue - scenarioMetrics.cogs;
    scenarioMetrics.ebitda = scenarioMetrics.gross_profit - scenarioMetrics.operating_expenses;
    scenarioMetrics.net_income = scenarioMetrics.ebitda * 0.8;
    
    // Display comparison
    const comparisonContainer = container.querySelector(`#scenario-comparison-${builder.id}`);
    comparisonContainer.innerHTML = `
        <div class="scenario-comparison-table">
            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Current</th>
                        <th>${scenarioType.charAt(0).toUpperCase() + scenarioType.slice(1)} Scenario</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Revenue</td>
                        <td>${builder.formatCurrency(baseMetrics.revenue)}</td>
                        <td>${builder.formatCurrency(scenarioMetrics.revenue)}</td>
                        <td class="${scenarioMetrics.revenue > baseMetrics.revenue ? 'positive' : 'negative'}">
                            ${((scenarioMetrics.revenue - baseMetrics.revenue) / baseMetrics.revenue * 100).toFixed(1)}%
                        </td>
                    </tr>
                    <tr>
                        <td>Gross Profit</td>
                        <td>${builder.formatCurrency(baseMetrics.gross_profit)}</td>
                        <td>${builder.formatCurrency(scenarioMetrics.gross_profit)}</td>
                        <td class="${scenarioMetrics.gross_profit > baseMetrics.gross_profit ? 'positive' : 'negative'}">
                            ${((scenarioMetrics.gross_profit - baseMetrics.gross_profit) / baseMetrics.gross_profit * 100).toFixed(1)}%
                        </td>
                    </tr>
                    <tr>
                        <td>EBITDA</td>
                        <td>${builder.formatCurrency(baseMetrics.ebitda)}</td>
                        <td>${builder.formatCurrency(scenarioMetrics.ebitda)}</td>
                        <td class="${scenarioMetrics.ebitda > baseMetrics.ebitda ? 'positive' : 'negative'}">
                            ${((scenarioMetrics.ebitda - baseMetrics.ebitda) / baseMetrics.ebitda * 100).toFixed(1)}%
                        </td>
                    </tr>
                    <tr>
                        <td>Net Income</td>
                        <td>${builder.formatCurrency(baseMetrics.net_income)}</td>
                        <td>${builder.formatCurrency(scenarioMetrics.net_income)}</td>
                        <td class="${scenarioMetrics.net_income > baseMetrics.net_income ? 'positive' : 'negative'}">
                            ${((scenarioMetrics.net_income - baseMetrics.net_income) / baseMetrics.net_income * 100).toFixed(1)}%
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    if (window.awardPoints) {
        window.awardPoints(12, `Ran ${scenarioType} scenario analysis`);
    }
}

function exportIntegratedModel(builderId) {
    const builder = modelBuilderInstances[builderId];
    if (!builder) return;
    
    const container = builder.container;
    const exportFormats = [];
    
    if (container.querySelector(`#excel-export-${builderId}`).checked) exportFormats.push('Excel');
    if (container.querySelector(`#pdf-export-${builderId}`).checked) exportFormats.push('PDF');
    if (container.querySelector(`#json-export-${builderId}`).checked) exportFormats.push('JSON');
    if (container.querySelector(`#powerbi-export-${builderId}`).checked) exportFormats.push('Power BI');
    
    if (window.awardPoints) {
        window.awardPoints(15, `Exported model in ${exportFormats.length} formats`);
    }
    
    alert(`Model exported successfully in the following formats: ${exportFormats.join(', ')}`);
}

function submitIntegrationAnalysis(builderId) {
    const container = document.getElementById(builderId);
    const analysisInput = container.querySelector('.integration-analysis-input');
    const analysis = analysisInput.value.trim();
    
    if (analysis.length < 100) {
        alert('Please provide a more comprehensive analysis (at least 100 characters).');
        return;
    }
    
    if (window.awardPoints) {
        window.awardPoints(25, 'Submitted comprehensive integration analysis');
    }
    
    analysisInput.style.border = '2px solid #28a745';
    setTimeout(() => {
        analysisInput.style.border = '';
    }, 2000);
    
    // Show completion message
    const completionMessage = document.createElement('div');
    completionMessage.className = 'completion-message';
    completionMessage.innerHTML = `
        <div style="background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <strong>🎉 Congratulations!</strong> You have successfully completed the Integrated Model Sprint. 
            Your comprehensive analysis demonstrates mastery of all eight units in the Math for Business Operations curriculum.
        </div>
    `;
    
    analysisInput.parentNode.appendChild(completionMessage);
}