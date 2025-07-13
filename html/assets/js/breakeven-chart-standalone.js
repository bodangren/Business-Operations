// ===================================
// Standalone Break-Even Chart Component
// Clean rewrite focused on test environment
// ===================================

class BreakEvenChart {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            fixedCosts: options.fixedCosts || 10000,
            variableCostRate: options.variableCostRate || 0.6,
            sellingPrice: options.sellingPrice || 25,
            ...options
        };
        this.chartInstance = null;
        this.chartId = `breakeven-${Math.random().toString(36).substr(2, 9)}`;
        
        this.init();
    }
    
    init() {
        console.log('BreakEvenChart: Initializing...');
        this.createHTML();
        this.setupEventListeners();
        this.createChart();
    }
    
    createHTML() {
        const { fixedCosts, variableCostRate, sellingPrice } = this.options;
        
        this.container.innerHTML = `
            <div class="standalone-breakeven">
                <div class="breakeven-header">
                    <h3>Break-Even Analysis</h3>
                    <p>Interactive visualization of break-even point calculation</p>
                </div>
                
                <div class="breakeven-controls">
                    <div class="control-group">
                        <label>Fixed Costs ($)</label>
                        <input type="number" 
                               class="fixed-costs-input" 
                               value="${fixedCosts}" 
                               min="0" 
                               step="100">
                    </div>
                    <div class="control-group">
                        <label>Variable Cost Rate</label>
                        <input type="number" 
                               class="variable-rate-input" 
                               value="${variableCostRate}" 
                               min="0" 
                               max="1" 
                               step="0.01">
                    </div>
                    <div class="control-group">
                        <label>Selling Price ($)</label>
                        <input type="number" 
                               class="selling-price-input" 
                               value="${sellingPrice}" 
                               min="0" 
                               step="1">
                    </div>
                    <button class="update-chart-btn">Update Chart</button>
                </div>
                
                <div class="chart-area">
                    <canvas id="${this.chartId}" width="600" height="400"></canvas>
                </div>
                
                <div class="breakeven-results">
                    <div class="result-item">
                        <span class="label">Break-Even Units:</span>
                        <span class="value units-value">0</span>
                    </div>
                    <div class="result-item">
                        <span class="label">Break-Even Revenue:</span>
                        <span class="value revenue-value">$0</span>
                    </div>
                    <div class="result-item">
                        <span class="label">Contribution Margin:</span>
                        <span class="value margin-value">$0</span>
                    </div>
                </div>
            </div>
        `;
        
        console.log('BreakEvenChart: HTML created, canvas ID:', this.chartId);
    }
    
    setupEventListeners() {
        const updateBtn = this.container.querySelector('.update-chart-btn');
        const inputs = this.container.querySelectorAll('input');
        
        updateBtn.addEventListener('click', () => this.updateChart());
        
        inputs.forEach(input => {
            input.addEventListener('change', () => this.updateChart());
        });
    }
    
    getInputValues() {
        const fixedCosts = parseFloat(this.container.querySelector('.fixed-costs-input').value) || 0;
        const variableCostRate = parseFloat(this.container.querySelector('.variable-rate-input').value) || 0;
        const sellingPrice = parseFloat(this.container.querySelector('.selling-price-input').value) || 0;
        
        return { fixedCosts, variableCostRate, sellingPrice };
    }
    
    calculateBreakEven(fixedCosts, variableCostRate, sellingPrice) {
        const contributionMargin = sellingPrice * (1 - variableCostRate);
        const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0;
        const breakEvenRevenue = breakEvenUnits * sellingPrice;
        
        return {
            breakEvenUnits,
            breakEvenRevenue,
            contributionMargin: sellingPrice - (sellingPrice * variableCostRate),
            contributionMarginPerUnit: contributionMargin
        };
    }
    
    generateChartData(fixedCosts, variableCostRate, sellingPrice) {
        const { breakEvenUnits } = this.calculateBreakEven(fixedCosts, variableCostRate, sellingPrice);
        const maxUnits = Math.max(breakEvenUnits * 1.5, 100);
        const step = Math.ceil(maxUnits / 20);
        
        const data = {
            labels: [],
            revenue: [],
            totalCosts: []
        };
        
        for (let units = 0; units <= maxUnits; units += step) {
            data.labels.push(units);
            data.revenue.push(units * sellingPrice);
            data.totalCosts.push(fixedCosts + (units * sellingPrice * variableCostRate));
        }
        
        return data;
    }
    
    updateResults(fixedCosts, variableCostRate, sellingPrice) {
        const results = this.calculateBreakEven(fixedCosts, variableCostRate, sellingPrice);
        
        this.container.querySelector('.units-value').textContent = results.breakEvenUnits.toLocaleString();
        this.container.querySelector('.revenue-value').textContent = `$${results.breakEvenRevenue.toLocaleString()}`;
        this.container.querySelector('.margin-value').textContent = `$${results.contributionMargin.toFixed(2)}`;
    }
    
    createChart() {
        if (!window.Chart) {
            console.error('BreakEvenChart: Chart.js not available');
            return;
        }
        
        const canvas = document.getElementById(this.chartId);
        if (!canvas) {
            console.error('BreakEvenChart: Canvas not found with ID:', this.chartId);
            return;
        }
        
        const { fixedCosts, variableCostRate, sellingPrice } = this.getInputValues();
        const chartData = this.generateChartData(fixedCosts, variableCostRate, sellingPrice);
        
        const ctx = canvas.getContext('2d');
        
        try {
            this.chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: chartData.labels,
                    datasets: [
                        {
                            label: 'Revenue',
                            data: chartData.revenue,
                            borderColor: '#10B981',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            borderWidth: 3,
                            fill: false,
                            tension: 0
                        },
                        {
                            label: 'Total Costs',
                            data: chartData.totalCosts,
                            borderColor: '#EF4444',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            borderWidth: 3,
                            fill: false,
                            tension: 0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Break-Even Analysis'
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                label: function(context) {
                                    return `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Units Sold'
                            },
                            grid: {
                                display: true
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Amount ($)'
                            },
                            grid: {
                                display: true
                            },
                            ticks: {
                                callback: function(value) {
                                    return '$' + value.toLocaleString();
                                }
                            }
                        }
                    },
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                    }
                }
            });
            
            console.log('BreakEvenChart: Chart created successfully');
            this.updateResults(fixedCosts, variableCostRate, sellingPrice);
            
        } catch (error) {
            console.error('BreakEvenChart: Error creating chart:', error);
        }
    }
    
    updateChart() {
        if (!this.chartInstance) {
            console.warn('BreakEvenChart: No chart instance to update');
            return;
        }
        
        const { fixedCosts, variableCostRate, sellingPrice } = this.getInputValues();
        const chartData = this.generateChartData(fixedCosts, variableCostRate, sellingPrice);
        
        // Update chart data
        this.chartInstance.data.labels = chartData.labels;
        this.chartInstance.data.datasets[0].data = chartData.revenue;
        this.chartInstance.data.datasets[1].data = chartData.totalCosts;
        
        // Update the chart
        this.chartInstance.update();
        
        // Update results display
        this.updateResults(fixedCosts, variableCostRate, sellingPrice);
        
        console.log('BreakEvenChart: Chart updated');
    }
    
    destroy() {
        if (this.chartInstance) {
            this.chartInstance.destroy();
            this.chartInstance = null;
        }
    }
    
    // Public methods for testing
    getChartInstance() {
        return this.chartInstance;
    }
    
    getChartId() {
        return this.chartId;
    }
}

// Global export for testing
window.BreakEvenChart = BreakEvenChart;

// CSS Styles
const breakEvenStyles = `
.standalone-breakeven {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1rem 0;
}

.breakeven-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.breakeven-header h3 {
    margin: 0 0 0.5rem 0;
    color: #1f2937;
}

.breakeven-header p {
    margin: 0;
    color: #6b7280;
}

.breakeven-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 6px;
}

.control-group {
    display: flex;
    flex-direction: column;
    min-width: 120px;
}

.control-group label {
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
}

.control-group input {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.875rem;
}

.control-group input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.update-chart-btn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    height: fit-content;
}

.update-chart-btn:hover {
    background: #2563eb;
}

.chart-area {
    margin: 1.5rem 0;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 1rem;
    background: #fafafa;
}

.chart-area canvas {
    max-width: 100%;
    height: 400px;
}

.breakeven-results {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    background: #f0f9ff;
    border-radius: 6px;
}

.result-item {
    text-align: center;
}

.result-item .label {
    display: block;
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.25rem;
}

.result-item .value {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
}

@media (max-width: 768px) {
    .breakeven-controls {
        flex-direction: column;
        align-items: stretch;
    }
    
    .control-group {
        min-width: auto;
    }
    
    .breakeven-results {
        flex-direction: column;
        text-align: center;
    }
}
`;

// Add styles to page
if (!document.getElementById('breakeven-standalone-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'breakeven-standalone-styles';
    styleSheet.textContent = breakEvenStyles;
    document.head.appendChild(styleSheet);
}