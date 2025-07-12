// ===================================
// Data Visualization System with Chart.js
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeDataVisualization();
});

let chartInstances = {};

// ===================================
// Chart System Initialization
// ===================================

function initializeDataVisualization() {
    // Load Chart.js from CDN and initialize charts
    loadChartJS().then(() => {
        setupChartContainers();
        createSampleCharts();
        addVisualizationStyles();
    }).catch(error => {
        console.warn('Chart.js could not be loaded, using fallback visualizations', error);
        createFallbackCharts();
    });
}

function loadChartJS() {
    return new Promise((resolve, reject) => {
        if (window.Chart) {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function setupChartContainers() {
    const chartContainers = document.querySelectorAll('.chart-container');
    
    chartContainers.forEach(container => {
        const chartType = container.dataset.chartType || 'line';
        const chartId = container.dataset.chartId || generateChartId();
        
        createChart(container, chartType, chartId);
    });
}

// ===================================
// Chart Creation Functions
// ===================================

function createChart(container, type, id) {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = `chart-${id}`;
    canvas.width = 400;
    canvas.height = 200;
    
    // Create chart wrapper with controls
    const chartWrapper = document.createElement('div');
    chartWrapper.className = 'chart-wrapper';
    chartWrapper.innerHTML = `
        <div class="chart-header">
            <h4 class="chart-title">${container.dataset.title || 'Financial Chart'}</h4>
            <div class="chart-controls">
                <button class="chart-btn" onclick="toggleChartData('${id}')">Toggle Data</button>
                <button class="chart-btn" onclick="exportChart('${id}')">Export</button>
                <select class="chart-type-selector" onchange="changeChartType('${id}', this.value)">
                    <option value="line" ${type === 'line' ? 'selected' : ''}>Line</option>
                    <option value="bar" ${type === 'bar' ? 'selected' : ''}>Bar</option>
                    <option value="pie" ${type === 'pie' ? 'selected' : ''}>Pie</option>
                    <option value="doughnut" ${type === 'doughnut' ? 'selected' : ''}>Doughnut</option>
                </select>
            </div>
        </div>
        <div class="chart-canvas-container">
            ${canvas.outerHTML}
        </div>
        <div class="chart-data-input">
            <h5>Chart Data</h5>
            <div class="data-input-grid">
                <div class="data-input-section">
                    <label>Labels (comma-separated):</label>
                    <input type="text" class="chart-labels-input" placeholder="Jan, Feb, Mar, Apr, May">
                </div>
                <div class="data-input-section">
                    <label>Values (comma-separated):</label>
                    <input type="text" class="chart-values-input" placeholder="1000, 1500, 1200, 1800, 2100">
                </div>
                <button class="chart-btn update-chart-btn" onclick="updateChartData('${id}')">Update Chart</button>
            </div>
        </div>
    `;
    
    container.appendChild(chartWrapper);
    
    // Initialize the actual chart
    const ctx = document.getElementById(`chart-${id}`).getContext('2d');
    const chartData = generateSampleData(type);
    
    const chartConfig = {
        type: type,
        data: chartData,
        options: getChartOptions(type)
    };
    
    chartInstances[id] = new Chart(ctx, chartConfig);
    
    // Store chart reference in container
    container.chartId = id;
}

function generateSampleData(type) {
    const sampleData = {
        financial: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            revenue: [15000, 18000, 16500, 22000, 19500, 25000],
            expenses: [12000, 14500, 13200, 17000, 15800, 18500]
        },
        accounts: {
            labels: ['Cash', 'Accounts Receivable', 'Equipment', 'Accounts Payable', 'Equity'],
            values: [8500, 3200, 15000, 2800, 23900]
        },
        profitLoss: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            revenue: [45000, 52000, 48000, 65000],
            netIncome: [8500, 12500, 9800, 16200]
        }
    };
    
    if (type === 'pie' || type === 'doughnut') {
        return {
            labels: sampleData.accounts.labels,
            datasets: [{
                label: 'Account Balances',
                data: sampleData.accounts.values,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF9F40',
                    '#4BC0C0'
                ],
                borderWidth: 1
            }]
        };
    } else {
        return {
            labels: sampleData.financial.labels,
            datasets: [
                {
                    label: 'Revenue',
                    data: sampleData.financial.revenue,
                    borderColor: '#36A2EB',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    fill: type === 'line'
                },
                {
                    label: 'Expenses',
                    data: sampleData.financial.expenses,
                    borderColor: '#FF6384',
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    fill: type === 'line'
                }
            ]
        };
    }
}

function getChartOptions(type) {
    const baseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(context) {
                        const label = context.dataset.label || '';
                        const value = typeof context.parsed === 'number' ? 
                            context.parsed : context.parsed.y;
                        return `${label}: $${value.toLocaleString()}`;
                    }
                }
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        }
    };
    
    if (type === 'line' || type === 'bar') {
        baseOptions.scales = {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time Period'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Amount ($)'
                },
                ticks: {
                    callback: function(value) {
                        return '$' + value.toLocaleString();
                    }
                }
            }
        };
        
        if (type === 'line') {
            baseOptions.interaction = {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            };
            baseOptions.elements = {
                point: {
                    radius: 6,
                    hoverRadius: 8
                },
                line: {
                    borderWidth: 3
                }
            };
        }
    }
    
    return baseOptions;
}

// ===================================
// Interactive Chart Functions
// ===================================

function changeChartType(chartId, newType) {
    const chart = chartInstances[chartId];
    if (!chart) return;
    
    // Destroy existing chart
    chart.destroy();
    
    // Create new chart with same data but different type
    const canvas = document.getElementById(`chart-${chartId}`);
    const ctx = canvas.getContext('2d');
    
    const newData = generateSampleData(newType);
    const newConfig = {
        type: newType,
        data: newData,
        options: getChartOptions(newType)
    };
    
    chartInstances[chartId] = new Chart(ctx, newConfig);
}

function updateChartData(chartId) {
    const chart = chartInstances[chartId];
    if (!chart) return;
    
    const container = document.querySelector(`[data-chart-id="${chartId}"]`) || 
                     document.querySelector(`canvas[id="chart-${chartId}"]`).closest('.chart-container');
    
    const labelsInput = container.querySelector('.chart-labels-input');
    const valuesInput = container.querySelector('.chart-values-input');
    
    const labels = labelsInput.value.split(',').map(s => s.trim()).filter(s => s);
    const values = valuesInput.value.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    
    if (labels.length === 0 || values.length === 0) {
        alert('Please enter valid labels and values');
        return;
    }
    
    if (labels.length !== values.length) {
        alert('Number of labels must match number of values');
        return;
    }
    
    // Update chart data
    if (chart.config.type === 'pie' || chart.config.type === 'doughnut') {
        chart.data.labels = labels;
        chart.data.datasets[0].data = values;
    } else {
        chart.data.labels = labels;
        chart.data.datasets[0].data = values;
        // Keep expenses dataset but update with proportional values
        chart.data.datasets[1].data = values.map(v => v * 0.8);
    }
    
    chart.update();
}

function toggleChartData(chartId) {
    const container = document.querySelector(`[data-chart-id="${chartId}"]`) || 
                     document.querySelector(`canvas[id="chart-${chartId}"]`).closest('.chart-container');
    
    const dataInput = container.querySelector('.chart-data-input');
    const isVisible = dataInput.style.display !== 'none';
    
    dataInput.style.display = isVisible ? 'none' : 'block';
}

function exportChart(chartId) {
    const chart = chartInstances[chartId];
    if (!chart) return;
    
    // Create download link
    const link = document.createElement('a');
    link.download = `chart-${chartId}.png`;
    link.href = chart.toBase64Image();
    link.click();
}

// ===================================
// Specialized Financial Charts
// ===================================

function createFinancialDashboard(container) {
    container.innerHTML = `
        <div class="financial-dashboard">
            <div class="dashboard-header">
                <h3>Financial Dashboard</h3>
                <div class="dashboard-controls">
                    <button onclick="refreshDashboard()" class="btn btn-primary">Refresh Data</button>
                    <button onclick="exportDashboard()" class="btn btn-secondary">Export</button>
                </div>
            </div>
            
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <h4>Revenue vs Expenses</h4>
                    <div class="chart-container" data-chart-type="line" data-chart-id="revenue-expenses">
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <h4>Account Balances</h4>
                    <div class="chart-container" data-chart-type="doughnut" data-chart-id="account-balances">
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <h4>Cash Flow Trend</h4>
                    <div class="chart-container" data-chart-type="bar" data-chart-id="cash-flow">
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <h4>Profit Margin Analysis</h4>
                    <div class="chart-container" data-chart-type="line" data-chart-id="profit-margin">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize all dashboard charts
    setTimeout(() => {
        const dashboardCharts = container.querySelectorAll('.chart-container');
        dashboardCharts.forEach(chartContainer => {
            const chartType = chartContainer.dataset.chartType;
            const chartId = chartContainer.dataset.chartId;
            createChart(chartContainer, chartType, chartId);
        });
    }, 100);
}

function createBreakEvenChart(container, fixedCosts = 10000, variableCostRate = 0.6, sellingPrice = 25) {
    const canvas = document.createElement('canvas');
    canvas.id = 'breakeven-chart';
    canvas.width = 400;
    canvas.height = 300;
    
    container.innerHTML = `
        <div class="breakeven-analysis">
            <h4>Break-Even Analysis Visualization</h4>
            <div class="breakeven-inputs">
                <label>Fixed Costs: $<input type="number" id="fixed-costs" value="${fixedCosts}" onchange="updateBreakEvenChart()"></label>
                <label>Variable Cost Rate: <input type="number" id="variable-rate" value="${variableCostRate}" step="0.01" onchange="updateBreakEvenChart()"></label>
                <label>Selling Price: $<input type="number" id="selling-price" value="${sellingPrice}" onchange="updateBreakEvenChart()"></label>
            </div>
            <div class="breakeven-chart-container">
                ${canvas.outerHTML}
            </div>
            <div class="breakeven-results">
                <div class="result-item">
                    <span>Break-Even Point:</span>
                    <span id="breakeven-point">0 units</span>
                </div>
                <div class="result-item">
                    <span>Break-Even Revenue:</span>
                    <span id="breakeven-revenue">$0</span>
                </div>
            </div>
        </div>
    `;
    
    updateBreakEvenChart();
}

function updateBreakEvenChart() {
    const fixedCosts = parseFloat(document.getElementById('fixed-costs').value) || 10000;
    const variableCostRate = parseFloat(document.getElementById('variable-rate').value) || 0.6;
    const sellingPrice = parseFloat(document.getElementById('selling-price').value) || 25;
    
    const breakEvenUnits = Math.ceil(fixedCosts / (sellingPrice * (1 - variableCostRate)));
    const breakEvenRevenue = breakEvenUnits * sellingPrice;
    
    // Update results display
    document.getElementById('breakeven-point').textContent = `${breakEvenUnits.toLocaleString()} units`;
    document.getElementById('breakeven-revenue').textContent = `$${breakEvenRevenue.toLocaleString()}`;
    
    // Generate chart data
    const maxUnits = breakEvenUnits * 2;
    const units = [];
    const revenue = [];
    const totalCosts = [];
    
    for (let i = 0; i <= maxUnits; i += Math.ceil(maxUnits / 20)) {
        units.push(i);
        revenue.push(i * sellingPrice);
        totalCosts.push(fixedCosts + (i * sellingPrice * variableCostRate));
    }
    
    // Destroy existing chart if it exists
    if (chartInstances['breakeven']) {
        chartInstances['breakeven'].destroy();
    }
    
    const ctx = document.getElementById('breakeven-chart').getContext('2d');
    chartInstances['breakeven'] = new Chart(ctx, {
        type: 'line',
        data: {
            labels: units,
            datasets: [
                {
                    label: 'Revenue',
                    data: revenue,
                    borderColor: '#36A2EB',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    fill: false
                },
                {
                    label: 'Total Costs',
                    data: totalCosts,
                    borderColor: '#FF6384',
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
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
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount ($)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            annotation: {
                annotations: {
                    breakEvenLine: {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x',
                        value: breakEvenUnits,
                        borderColor: 'red',
                        borderWidth: 2,
                        label: {
                            content: 'Break-Even Point',
                            enabled: true
                        }
                    }
                }
            }
        }
    });
}

// ===================================
// Fallback Visualizations
// ===================================

function createFallbackCharts() {
    // Create simple HTML/CSS charts when Chart.js is not available
    const chartContainers = document.querySelectorAll('.chart-container');
    
    chartContainers.forEach(container => {
        const chartType = container.dataset.chartType || 'bar';
        createFallbackChart(container, chartType);
    });
}

function createFallbackChart(container, type) {
    const sampleData = [
        { label: 'Jan', value: 15000 },
        { label: 'Feb', value: 18000 },
        { label: 'Mar', value: 16500 },
        { label: 'Apr', value: 22000 },
        { label: 'May', value: 19500 }
    ];
    
    const maxValue = Math.max(...sampleData.map(d => d.value));
    
    let chartHTML = `
        <div class="fallback-chart ${type}-chart">
            <h4>${container.dataset.title || 'Financial Chart'}</h4>
            <div class="fallback-chart-area">
    `;
    
    if (type === 'bar') {
        chartHTML += '<div class="bar-chart-container">';
        sampleData.forEach(data => {
            const height = (data.value / maxValue) * 100;
            chartHTML += `
                <div class="bar-item">
                    <div class="bar" style="height: ${height}%" title="$${data.value.toLocaleString()}"></div>
                    <span class="bar-label">${data.label}</span>
                </div>
            `;
        });
        chartHTML += '</div>';
    } else {
        chartHTML += '<div class="simple-data-table">';
        sampleData.forEach(data => {
            chartHTML += `
                <div class="data-row">
                    <span class="data-label">${data.label}</span>
                    <span class="data-value">$${data.value.toLocaleString()}</span>
                </div>
            `;
        });
        chartHTML += '</div>';
    }
    
    chartHTML += `
            </div>
            <p class="fallback-note">Interactive charts require JavaScript to be enabled.</p>
        </div>
    `;
    
    container.innerHTML = chartHTML;
}

// ===================================
// Utility Functions
// ===================================

function generateChartId() {
    return 'chart-' + Math.random().toString(36).substr(2, 9);
}

function addVisualizationStyles() {
    if (document.getElementById('visualization-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'visualization-styles';
    styles.textContent = `
        .chart-wrapper {
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            margin: 2rem 0;
            overflow: hidden;
        }
        
        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            background: #f8f9fa;
            border-bottom: 1px solid #e1e5e9;
        }
        
        .chart-title {
            margin: 0;
            color: #2d3748;
            font-size: 1.25rem;
        }
        
        .chart-controls {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        
        .chart-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 0.375rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .chart-btn:hover {
            background: #5a67d8;
        }
        
        .chart-type-selector {
            padding: 0.375rem 0.75rem;
            border: 1px solid #d2d6dc;
            border-radius: 4px;
            font-size: 0.875rem;
        }
        
        .chart-canvas-container {
            position: relative;
            height: 400px;
            padding: 1rem;
        }
        
        .chart-data-input {
            padding: 1rem 1.5rem;
            background: #f8f9fa;
            border-top: 1px solid #e1e5e9;
            display: none;
        }
        
        .data-input-grid {
            display: grid;
            grid-template-columns: 1fr 1fr auto;
            gap: 1rem;
            align-items: end;
        }
        
        .data-input-section label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #4a5568;
        }
        
        .data-input-section input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #d2d6dc;
            border-radius: 4px;
        }
        
        .update-chart-btn {
            background: #48bb78;
        }
        
        .update-chart-btn:hover {
            background: #38a169;
        }
        
        .financial-dashboard {
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            margin: 2rem 0;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .dashboard-header h3 {
            margin: 0;
        }
        
        .dashboard-controls {
            display: flex;
            gap: 0.5rem;
        }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 1rem;
            padding: 1.5rem;
        }
        
        .dashboard-card {
            background: #f8f9fa;
            border: 1px solid #e1e5e9;
            border-radius: 6px;
            padding: 1rem;
        }
        
        .dashboard-card h4 {
            margin: 0 0 1rem 0;
            color: #2d3748;
            text-align: center;
        }
        
        .dashboard-card .chart-container {
            height: 250px;
            margin: 0;
        }
        
        .breakeven-analysis {
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            margin: 2rem 0;
            padding: 1.5rem;
        }
        
        .breakeven-inputs {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
        }
        
        .breakeven-inputs label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
        }
        
        .breakeven-inputs input {
            width: 100px;
            padding: 0.375rem;
            border: 1px solid #d2d6dc;
            border-radius: 4px;
        }
        
        .breakeven-chart-container {
            height: 300px;
            margin-bottom: 1rem;
        }
        
        .breakeven-results {
            display: flex;
            gap: 2rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 6px;
        }
        
        .result-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
        }
        
        .result-item span:first-child {
            font-weight: 600;
            color: #4a5568;
        }
        
        .result-item span:last-child {
            font-size: 1.25rem;
            font-weight: bold;
            color: #2d3748;
        }
        
        /* Fallback chart styles */
        .fallback-chart {
            background: white;
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 2rem 0;
        }
        
        .bar-chart-container {
            display: flex;
            align-items: end;
            gap: 1rem;
            height: 200px;
            padding: 1rem 0;
        }
        
        .bar-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            height: 100%;
        }
        
        .bar {
            background: linear-gradient(to top, #667eea, #764ba2);
            width: 100%;
            max-width: 60px;
            min-height: 10px;
            border-radius: 4px 4px 0 0;
            transition: all 0.3s ease;
            margin-bottom: 0.5rem;
        }
        
        .bar:hover {
            opacity: 0.8;
            transform: scale(1.05);
        }
        
        .bar-label {
            font-size: 0.875rem;
            font-weight: 600;
            color: #4a5568;
        }
        
        .simple-data-table {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .data-row {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 4px;
        }
        
        .data-label {
            font-weight: 600;
            color: #4a5568;
        }
        
        .data-value {
            font-weight: bold;
            color: #2d3748;
        }
        
        .fallback-note {
            margin-top: 1rem;
            font-style: italic;
            color: #718096;
            text-align: center;
        }
        
        @media (max-width: 768px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
                padding: 1rem;
            }
            
            .chart-header {
                flex-direction: column;
                gap: 1rem;
                align-items: stretch;
            }
            
            .chart-controls {
                justify-content: center;
            }
            
            .data-input-grid {
                grid-template-columns: 1fr;
            }
            
            .breakeven-inputs {
                flex-direction: column;
                align-items: stretch;
            }
            
            .breakeven-results {
                flex-direction: column;
                text-align: center;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

function createSampleCharts() {
    // Initialize sample charts for demonstration
    const sampleContainer = document.querySelector('.sample-charts');
    if (sampleContainer) {
        createFinancialDashboard(sampleContainer);
    }
}

// ===================================
// Global Functions
// ===================================

window.refreshDashboard = function() {
    Object.keys(chartInstances).forEach(chartId => {
        const chart = chartInstances[chartId];
        if (chart) {
            // Generate new random data
            const newData = generateSampleData(chart.config.type);
            chart.data = newData;
            chart.update();
        }
    });
};

window.exportDashboard = function() {
    // Create a combined export of all charts
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `financial-dashboard-${timestamp}.png`;
    
    // This would typically combine multiple charts into one image
    alert('Dashboard export functionality would be implemented here');
};

// ===================================
// Export Functions
// ===================================

window.DataVisualization = {
    createChart,
    createFinancialDashboard,
    createBreakEvenChart,
    updateBreakEvenChart,
    changeChartType,
    updateChartData,
    toggleChartData,
    exportChart,
    chartInstances
};