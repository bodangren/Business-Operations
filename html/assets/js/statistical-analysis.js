// ===================================
// Statistical Analysis Tools
// For Unit 4: Data-Driven Cafe
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeStatisticalAnalysis();
});

let statisticalInstances = {};

// ===================================
// System Initialization
// ===================================

function initializeStatisticalAnalysis() {
    const containers = document.querySelectorAll('.statistical-analysis');
    
    containers.forEach((container, index) => {
        const analysisId = container.dataset.id || `stats-${index}`;
        const dataSource = container.dataset.source || 'cafe_sales';
        
        createStatisticalAnalysis(container, analysisId, dataSource);
    });
}

class StatisticalAnalysis {
    constructor(container, id, dataSource = 'cafe_sales') {
        this.container = container;
        this.id = id;
        this.dataSource = dataSource;
        
        // Sample datasets for different scenarios
        this.datasets = {
            cafe_sales: {
                title: "Sarah's Cafe - Daily Sales Data",
                description: "30 days of sales data from TechStart Cafe",
                data: [
                    245, 312, 189, 267, 334, 298, 201, 156, 389, 445,
                    367, 298, 234, 445, 512, 398, 267, 198, 334, 289,
                    456, 378, 312, 267, 198, 345, 423, 389, 298, 267
                ],
                units: "dollars",
                timeframe: "daily",
                outlierThreshold: 2.5
            },
            customer_satisfaction: {
                title: "Customer Satisfaction Scores",
                description: "Survey responses on 1-10 scale",
                data: [
                    8.5, 9.2, 7.8, 8.9, 9.1, 8.7, 7.9, 8.8, 9.0, 8.4,
                    8.6, 9.3, 8.2, 8.9, 9.0, 8.5, 8.7, 9.1, 8.8, 8.3,
                    8.9, 9.2, 8.6, 8.4, 8.8, 9.0, 8.7, 8.5, 8.9, 9.1,
                    8.2, 8.6, 9.0, 8.8, 8.4, 8.7, 9.2, 8.5, 8.9, 8.6
                ],
                units: "score",
                timeframe: "survey",
                outlierThreshold: 2.0
            },
            inventory_turnover: {
                title: "Inventory Turnover Rates",
                description: "Monthly turnover by product category",
                data: [
                    4.2, 3.8, 5.1, 4.7, 3.9, 4.5, 5.3, 4.1, 3.7, 4.8,
                    5.0, 4.3, 3.6, 4.9, 5.2, 4.4, 3.8, 4.6, 5.1, 4.0,
                    4.7, 5.4, 4.2, 3.9, 4.8, 5.0, 4.5, 4.1, 4.9, 5.3
                ],
                units: "times per month",
                timeframe: "monthly",
                outlierThreshold: 2.0
            }
        };
        
        this.currentDataset = this.datasets[dataSource];
        this.statistics = {};
        this.outliers = [];
        this.regressionData = null;
        
        this.init();
    }
    
    init() {
        this.createHTML();
        this.setupEventListeners();
        this.calculateStatistics();
        this.updateDisplay();
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="statistical-analysis" id="${this.id}">
                <div class="analysis-header">
                    <h3>📊 Statistical Analysis Tools</h3>
                    <p>Comprehensive data analysis for business decision making</p>
                </div>
                
                <div class="dataset-selector">
                    <label for="dataset-select-${this.id}">Choose Dataset:</label>
                    <select id="dataset-select-${this.id}" class="dataset-select">
                        ${Object.entries(this.datasets).map(([key, dataset]) => 
                            `<option value="${key}" ${key === this.dataSource ? 'selected' : ''}>${dataset.title}</option>`
                        ).join('')}
                    </select>
                </div>
                
                <div class="dataset-info">
                    <h4>${this.currentDataset.title}</h4>
                    <p>${this.currentDataset.description}</p>
                    <div class="data-metrics">
                        <span><strong>Sample Size:</strong> ${this.currentDataset.data.length}</span>
                        <span><strong>Units:</strong> ${this.currentDataset.units}</span>
                        <span><strong>Period:</strong> ${this.currentDataset.timeframe}</span>
                    </div>
                </div>
                
                <div class="analysis-tabs">
                    <div class="tab-buttons">
                        <button class="tab-btn active" data-tab="descriptive">Descriptive Stats</button>
                        <button class="tab-btn" data-tab="outliers">Outlier Detection</button>
                        <button class="tab-btn" data-tab="distribution">Distribution</button>
                        <button class="tab-btn" data-tab="regression">Regression</button>
                        <button class="tab-btn" data-tab="forecasting">Forecasting</button>
                    </div>
                </div>
                
                <div class="analysis-content">
                    <div class="tab-content descriptive active" id="descriptive-${this.id}">
                        <!-- Descriptive statistics content -->
                    </div>
                    
                    <div class="tab-content outliers" id="outliers-${this.id}">
                        <!-- Outlier detection content -->
                    </div>
                    
                    <div class="tab-content distribution" id="distribution-${this.id}">
                        <!-- Distribution analysis content -->
                    </div>
                    
                    <div class="tab-content regression" id="regression-${this.id}">
                        <!-- Regression analysis content -->
                    </div>
                    
                    <div class="tab-content forecasting" id="forecasting-${this.id}">
                        <!-- Forecasting content -->
                    </div>
                </div>
                
                <div class="data-visualization">
                    <h4>Data Visualization</h4>
                    <div class="chart-container">
                        <canvas id="stats-chart-${this.id}" width="400" height="200"></canvas>
                    </div>
                    <div class="chart-controls">
                        <button class="chart-btn" data-chart="line">📈 Line Chart</button>
                        <button class="chart-btn" data-chart="histogram">📊 Histogram</button>
                        <button class="chart-btn" data-chart="boxplot">📦 Box Plot</button>
                        <button class="chart-btn" data-chart="scatter">🔵 Scatter Plot</button>
                    </div>
                </div>
                
                <div class="business-insights">
                    <h4>💡 Business Insights</h4>
                    <div class="insights-content" id="insights-${this.id}">
                        <!-- Auto-generated insights will appear here -->
                    </div>
                </div>
                
                <div class="learning-activity">
                    <h4>🎯 Learning Activity</h4>
                    <div class="activity-question">
                        <p>Based on the statistical analysis, what recommendations would you make to Sarah for improving her cafe's performance?</p>
                        <textarea class="analysis-input" placeholder="Enter your analysis and recommendations..."></textarea>
                        <button class="submit-analysis-btn" onclick="submitStatisticalAnalysis('${this.id}')">Submit Analysis</button>
                    </div>
                </div>
            </div>
        `;
        
        this.addStyles();
    }
    
    setupEventListeners() {
        const container = this.container;
        
        // Dataset selection
        const datasetSelect = container.querySelector(`#dataset-select-${this.id}`);
        datasetSelect.addEventListener('change', (e) => {
            this.changeDataset(e.target.value);
        });
        
        // Tab switching
        const tabButtons = container.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
        
        // Chart controls
        const chartButtons = container.querySelectorAll('.chart-btn');
        chartButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.updateChart(e.target.dataset.chart);
            });
        });
    }
    
    calculateStatistics() {
        const data = this.currentDataset.data;
        
        // Descriptive statistics
        this.statistics = {
            count: data.length,
            sum: data.reduce((a, b) => a + b, 0),
            mean: 0,
            median: 0,
            mode: 0,
            range: 0,
            variance: 0,
            standardDeviation: 0,
            min: Math.min(...data),
            max: Math.max(...data),
            q1: 0,
            q3: 0,
            iqr: 0,
            skewness: 0,
            kurtosis: 0
        };
        
        // Calculate mean
        this.statistics.mean = this.statistics.sum / this.statistics.count;
        
        // Calculate median
        const sortedData = [...data].sort((a, b) => a - b);
        const mid = Math.floor(sortedData.length / 2);
        this.statistics.median = sortedData.length % 2 === 0 
            ? (sortedData[mid - 1] + sortedData[mid]) / 2 
            : sortedData[mid];
        
        // Calculate mode
        const frequency = {};
        data.forEach(value => {
            frequency[value] = (frequency[value] || 0) + 1;
        });
        const maxFreq = Math.max(...Object.values(frequency));
        this.statistics.mode = Object.keys(frequency).find(key => frequency[key] === maxFreq);
        
        // Calculate range
        this.statistics.range = this.statistics.max - this.statistics.min;
        
        // Calculate variance and standard deviation
        const variance = data.reduce((sum, value) => {
            return sum + Math.pow(value - this.statistics.mean, 2);
        }, 0) / (data.length - 1);
        this.statistics.variance = variance;
        this.statistics.standardDeviation = Math.sqrt(variance);
        
        // Calculate quartiles
        this.statistics.q1 = this.calculatePercentile(sortedData, 25);
        this.statistics.q3 = this.calculatePercentile(sortedData, 75);
        this.statistics.iqr = this.statistics.q3 - this.statistics.q1;
        
        // Calculate skewness and kurtosis
        this.statistics.skewness = this.calculateSkewness(data);
        this.statistics.kurtosis = this.calculateKurtosis(data);
        
        // Detect outliers using Z-score method
        this.detectOutliers();
    }
    
    calculatePercentile(sortedData, percentile) {
        const index = (percentile / 100) * (sortedData.length - 1);
        const lower = Math.floor(index);
        const upper = Math.ceil(index);
        const weight = index % 1;
        
        if (upper >= sortedData.length) return sortedData[sortedData.length - 1];
        return sortedData[lower] * (1 - weight) + sortedData[upper] * weight;
    }
    
    calculateSkewness(data) {
        const mean = this.statistics.mean;
        const std = this.statistics.standardDeviation;
        const n = data.length;
        
        const skewness = data.reduce((sum, value) => {
            return sum + Math.pow((value - mean) / std, 3);
        }, 0) / n;
        
        return skewness;
    }
    
    calculateKurtosis(data) {
        const mean = this.statistics.mean;
        const std = this.statistics.standardDeviation;
        const n = data.length;
        
        const kurtosis = data.reduce((sum, value) => {
            return sum + Math.pow((value - mean) / std, 4);
        }, 0) / n - 3; // Subtract 3 for excess kurtosis
        
        return kurtosis;
    }
    
    detectOutliers() {
        const data = this.currentDataset.data;
        const mean = this.statistics.mean;
        const std = this.statistics.standardDeviation;
        const threshold = this.currentDataset.outlierThreshold;
        
        this.outliers = [];
        
        data.forEach((value, index) => {
            const zScore = Math.abs((value - mean) / std);
            if (zScore > threshold) {
                this.outliers.push({
                    index: index,
                    value: value,
                    zScore: zScore,
                    type: value > mean ? 'high' : 'low'
                });
            }
        });
    }
    
    updateDisplay() {
        this.updateDescriptiveTab();
        this.updateOutliersTab();
        this.updateDistributionTab();
        this.updateRegressionTab();
        this.updateForecastingTab();
        this.updateChart('line');
        this.generateBusinessInsights();
    }
    
    updateDescriptiveTab() {
        const tab = this.container.querySelector(`#descriptive-${this.id}`);
        
        tab.innerHTML = `
            <div class="descriptive-stats">
                <h5>📊 Descriptive Statistics</h5>
                <div class="stats-grid">
                    <div class="stat-group">
                        <h6>Central Tendency</h6>
                        <div class="stat-item">
                            <span class="stat-label">Mean:</span>
                            <span class="stat-value">${this.statistics.mean.toFixed(2)} ${this.currentDataset.units}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Median:</span>
                            <span class="stat-value">${this.statistics.median.toFixed(2)} ${this.currentDataset.units}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Mode:</span>
                            <span class="stat-value">${this.statistics.mode} ${this.currentDataset.units}</span>
                        </div>
                    </div>
                    
                    <div class="stat-group">
                        <h6>Variability</h6>
                        <div class="stat-item">
                            <span class="stat-label">Standard Deviation:</span>
                            <span class="stat-value">${this.statistics.standardDeviation.toFixed(2)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Variance:</span>
                            <span class="stat-value">${this.statistics.variance.toFixed(2)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Range:</span>
                            <span class="stat-value">${this.statistics.range.toFixed(2)}</span>
                        </div>
                    </div>
                    
                    <div class="stat-group">
                        <h6>Distribution Shape</h6>
                        <div class="stat-item">
                            <span class="stat-label">Skewness:</span>
                            <span class="stat-value">${this.statistics.skewness.toFixed(3)}</span>
                            <span class="stat-interpretation">${this.interpretSkewness()}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Kurtosis:</span>
                            <span class="stat-value">${this.statistics.kurtosis.toFixed(3)}</span>
                            <span class="stat-interpretation">${this.interpretKurtosis()}</span>
                        </div>
                    </div>
                    
                    <div class="stat-group">
                        <h6>Five Number Summary</h6>
                        <div class="stat-item">
                            <span class="stat-label">Minimum:</span>
                            <span class="stat-value">${this.statistics.min}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Q1 (25th percentile):</span>
                            <span class="stat-value">${this.statistics.q1.toFixed(2)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Q3 (75th percentile):</span>
                            <span class="stat-value">${this.statistics.q3.toFixed(2)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Maximum:</span>
                            <span class="stat-value">${this.statistics.max}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">IQR:</span>
                            <span class="stat-value">${this.statistics.iqr.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                
                <div class="confidence-intervals">
                    <h6>📈 Confidence Intervals</h6>
                    <div class="confidence-item">
                        <span class="confidence-label">95% CI for Mean:</span>
                        <span class="confidence-value">${this.calculateConfidenceInterval(0.95)}</span>
                    </div>
                    <div class="confidence-item">
                        <span class="confidence-label">99% CI for Mean:</span>
                        <span class="confidence-value">${this.calculateConfidenceInterval(0.99)}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    updateOutliersTab() {
        const tab = this.container.querySelector(`#outliers-${this.id}`);
        
        tab.innerHTML = `
            <div class="outlier-analysis">
                <h5>🎯 Outlier Detection</h5>
                <div class="outlier-summary">
                    <div class="outlier-count">
                        <strong>Outliers Found:</strong> ${this.outliers.length} out of ${this.statistics.count} data points
                        (${((this.outliers.length / this.statistics.count) * 100).toFixed(1)}%)
                    </div>
                    <div class="detection-method">
                        <strong>Method:</strong> Z-Score (threshold: ±${this.currentDataset.outlierThreshold})
                    </div>
                </div>
                
                ${this.outliers.length > 0 ? `
                    <div class="outliers-table">
                        <h6>Detected Outliers</h6>
                        <table class="outlier-list">
                            <tr>
                                <th>Position</th>
                                <th>Value</th>
                                <th>Z-Score</th>
                                <th>Type</th>
                                <th>Interpretation</th>
                            </tr>
                            ${this.outliers.map(outlier => `
                                <tr class="outlier-row ${outlier.type}">
                                    <td>${outlier.index + 1}</td>
                                    <td>${outlier.value} ${this.currentDataset.units}</td>
                                    <td>${outlier.zScore.toFixed(2)}</td>
                                    <td>${outlier.type === 'high' ? 'Above Mean' : 'Below Mean'}</td>
                                    <td>${this.interpretOutlier(outlier)}</td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>
                    
                    <div class="outlier-recommendations">
                        <h6>💡 Recommendations</h6>
                        <ul>
                            ${this.generateOutlierRecommendations()}
                        </ul>
                    </div>
                ` : `
                    <div class="no-outliers">
                        <p>✅ <strong>Good news!</strong> No outliers detected in this dataset using the Z-Score method.</p>
                        <p>This suggests your data is relatively consistent and follows expected patterns.</p>
                    </div>
                `}
                
                <div class="outlier-impact">
                    <h6>📊 Impact Analysis</h6>
                    <div class="impact-stats">
                        <div class="impact-item">
                            <span class="impact-label">Mean with outliers:</span>
                            <span class="impact-value">${this.statistics.mean.toFixed(2)}</span>
                        </div>
                        <div class="impact-item">
                            <span class="impact-label">Mean without outliers:</span>
                            <span class="impact-value">${this.calculateMeanWithoutOutliers().toFixed(2)}</span>
                        </div>
                        <div class="impact-item">
                            <span class="impact-label">Impact on mean:</span>
                            <span class="impact-value">${this.calculateOutlierImpact().toFixed(2)}%</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    updateDistributionTab() {
        const tab = this.container.querySelector(`#distribution-${this.id}`);
        
        tab.innerHTML = `
            <div class="distribution-analysis">
                <h5>📊 Distribution Analysis</h5>
                
                <div class="distribution-tests">
                    <h6>📈 Normality Assessment</h6>
                    <div class="normality-indicators">
                        <div class="indicator-item">
                            <span class="indicator-label">Skewness Test:</span>
                            <span class="indicator-value ${Math.abs(this.statistics.skewness) < 0.5 ? 'good' : 'warning'}">
                                ${Math.abs(this.statistics.skewness) < 0.5 ? '✅ Normal' : '⚠️ Skewed'}
                            </span>
                        </div>
                        <div class="indicator-item">
                            <span class="indicator-label">Kurtosis Test:</span>
                            <span class="indicator-value ${Math.abs(this.statistics.kurtosis) < 2 ? 'good' : 'warning'}">
                                ${Math.abs(this.statistics.kurtosis) < 2 ? '✅ Normal' : '⚠️ Non-Normal'}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="frequency-distribution">
                    <h6>📊 Frequency Distribution</h6>
                    <div class="histogram-data">
                        ${this.generateHistogramData()}
                    </div>
                </div>
                
                <div class="distribution-insights">
                    <h6>💡 Distribution Insights</h6>
                    <ul>
                        ${this.generateDistributionInsights()}
                    </ul>
                </div>
            </div>
        `;
    }
    
    updateRegressionTab() {
        const tab = this.container.querySelector(`#regression-${this.id}`);
        
        // Create time series for regression analysis
        const timeData = this.currentDataset.data.map((value, index) => ({ x: index + 1, y: value }));
        const regression = this.calculateLinearRegression(timeData);
        
        tab.innerHTML = `
            <div class="regression-analysis">
                <h5>📈 Regression Analysis</h5>
                
                <div class="regression-results">
                    <h6>Linear Trend Analysis</h6>
                    <div class="regression-equation">
                        <strong>Equation:</strong> y = ${regression.slope.toFixed(4)}x + ${regression.intercept.toFixed(2)}
                    </div>
                    <div class="regression-stats">
                        <div class="reg-stat">
                            <span class="reg-label">R-squared:</span>
                            <span class="reg-value">${regression.rSquared.toFixed(4)}</span>
                            <span class="reg-interpretation">${this.interpretRSquared(regression.rSquared)}</span>
                        </div>
                        <div class="reg-stat">
                            <span class="reg-label">Correlation:</span>
                            <span class="reg-value">${regression.correlation.toFixed(4)}</span>
                            <span class="reg-interpretation">${this.interpretCorrelation(regression.correlation)}</span>
                        </div>
                        <div class="reg-stat">
                            <span class="reg-label">Slope:</span>
                            <span class="reg-value">${regression.slope.toFixed(4)}</span>
                            <span class="reg-interpretation">${regression.slope > 0 ? 'Increasing trend' : 'Decreasing trend'}</span>
                        </div>
                    </div>
                </div>
                
                <div class="prediction-tool">
                    <h6>🔮 Prediction Tool</h6>
                    <div class="prediction-inputs">
                        <label for="predict-x-${this.id}">Predict value for period:</label>
                        <input type="number" id="predict-x-${this.id}" min="1" max="100" value="${this.currentDataset.data.length + 1}">
                        <button class="predict-btn" onclick="makePrediction('${this.id}')">Predict</button>
                    </div>
                    <div class="prediction-result" id="prediction-result-${this.id}">
                        <!-- Prediction result will appear here -->
                    </div>
                </div>
                
                <div class="residual-analysis">
                    <h6>📊 Residual Analysis</h6>
                    <div class="residual-stats">
                        <div class="residual-stat">
                            <span class="residual-label">Mean Residual:</span>
                            <span class="residual-value">${regression.meanResidual.toFixed(4)}</span>
                        </div>
                        <div class="residual-stat">
                            <span class="residual-label">Standard Error:</span>
                            <span class="residual-value">${regression.standardError.toFixed(4)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.regressionData = regression;
    }
    
    updateForecastingTab() {
        const tab = this.container.querySelector(`#forecasting-${this.id}`);
        
        const forecast = this.generateForecast(5); // 5-period forecast
        
        tab.innerHTML = `
            <div class="forecasting-analysis">
                <h5>🔮 Forecasting & Prediction</h5>
                
                <div class="forecast-methods">
                    <h6>📊 Forecasting Methods</h6>
                    <div class="method-comparison">
                        <div class="method-item">
                            <h7>Simple Moving Average (3-period)</h7>
                            <div class="method-forecast">
                                Next period prediction: <strong>${forecast.movingAverage.toFixed(2)} ${this.currentDataset.units}</strong>
                            </div>
                        </div>
                        <div class="method-item">
                            <h7>Linear Trend Extrapolation</h7>
                            <div class="method-forecast">
                                Next period prediction: <strong>${forecast.linearTrend.toFixed(2)} ${this.currentDataset.units}</strong>
                            </div>
                        </div>
                        <div class="method-item">
                            <h7>Exponential Smoothing</h7>
                            <div class="method-forecast">
                                Next period prediction: <strong>${forecast.exponentialSmoothing.toFixed(2)} ${this.currentDataset.units}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="forecast-table">
                    <h6>📅 5-Period Forecast</h6>
                    <table class="forecast-results">
                        <tr>
                            <th>Period</th>
                            <th>Moving Average</th>
                            <th>Linear Trend</th>
                            <th>Exponential Smoothing</th>
                            <th>Confidence</th>
                        </tr>
                        ${forecast.periods.map((period, index) => `
                            <tr>
                                <td>${this.currentDataset.data.length + index + 1}</td>
                                <td>${period.movingAverage.toFixed(2)}</td>
                                <td>${period.linearTrend.toFixed(2)}</td>
                                <td>${period.exponentialSmoothing.toFixed(2)}</td>
                                <td>${period.confidence}</td>
                            </tr>
                        `).join('')}
                    </table>
                </div>
                
                <div class="forecast-insights">
                    <h6>💡 Forecasting Insights</h6>
                    <ul>
                        ${this.generateForecastInsights(forecast)}
                    </ul>
                </div>
                
                <div class="seasonality-analysis">
                    <h6>🔄 Seasonality Detection</h6>
                    <div class="seasonality-results">
                        ${this.analyzeSeasonality()}
                    </div>
                </div>
            </div>
        `;
    }
    
    // Mathematical calculation methods
    calculateConfidenceInterval(confidence) {
        const mean = this.statistics.mean;
        const std = this.statistics.standardDeviation;
        const n = this.statistics.count;
        const tValue = this.getTValue(confidence, n - 1);
        const margin = tValue * (std / Math.sqrt(n));
        
        const lower = mean - margin;
        const upper = mean + margin;
        
        return `[${lower.toFixed(2)}, ${upper.toFixed(2)}]`;
    }
    
    getTValue(confidence, df) {
        // Simplified t-value lookup for common confidence levels
        const tTable = {
            0.95: 1.96, // approximation for large samples
            0.99: 2.58
        };
        return tTable[confidence] || 1.96;
    }
    
    calculateLinearRegression(data) {
        const n = data.length;
        const sumX = data.reduce((sum, point) => sum + point.x, 0);
        const sumY = data.reduce((sum, point) => sum + point.y, 0);
        const sumXY = data.reduce((sum, point) => sum + point.x * point.y, 0);
        const sumXX = data.reduce((sum, point) => sum + point.x * point.x, 0);
        const sumYY = data.reduce((sum, point) => sum + point.y * point.y, 0);
        
        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;
        
        // Calculate R-squared
        const meanY = sumY / n;
        const ssTotal = data.reduce((sum, point) => sum + Math.pow(point.y - meanY, 2), 0);
        const ssResidual = data.reduce((sum, point) => {
            const predicted = slope * point.x + intercept;
            return sum + Math.pow(point.y - predicted, 2);
        }, 0);
        
        const rSquared = 1 - (ssResidual / ssTotal);
        const correlation = Math.sqrt(rSquared) * (slope > 0 ? 1 : -1);
        
        // Calculate residuals
        const residuals = data.map(point => {
            const predicted = slope * point.x + intercept;
            return point.y - predicted;
        });
        
        const meanResidual = residuals.reduce((sum, r) => sum + r, 0) / n;
        const standardError = Math.sqrt(residuals.reduce((sum, r) => sum + Math.pow(r - meanResidual, 2), 0) / (n - 2));
        
        return {
            slope,
            intercept,
            rSquared,
            correlation,
            residuals,
            meanResidual,
            standardError
        };
    }
    
    generateForecast(periods) {
        const data = this.currentDataset.data;
        const n = data.length;
        
        // Moving Average (3-period)
        const lastThree = data.slice(-3);
        const movingAverage = lastThree.reduce((sum, val) => sum + val, 0) / 3;
        
        // Linear Trend
        const timeData = data.map((value, index) => ({ x: index + 1, y: value }));
        const regression = this.calculateLinearRegression(timeData);
        const linearTrend = regression.slope * (n + 1) + regression.intercept;
        
        // Exponential Smoothing (alpha = 0.3)
        const alpha = 0.3;
        let smoothedValue = data[0];
        for (let i = 1; i < data.length; i++) {
            smoothedValue = alpha * data[i] + (1 - alpha) * smoothedValue;
        }
        const exponentialSmoothing = smoothedValue;
        
        // Generate multi-period forecasts
        const forecastPeriods = [];
        for (let i = 1; i <= periods; i++) {
            const maForecast = movingAverage; // Simple MA doesn't change
            const ltForecast = regression.slope * (n + i) + regression.intercept;
            const esForecast = exponentialSmoothing; // Constant for simple ES
            
            const confidence = i <= 2 ? 'High' : i <= 4 ? 'Medium' : 'Low';
            
            forecastPeriods.push({
                movingAverage: maForecast,
                linearTrend: ltForecast,
                exponentialSmoothing: esForecast,
                confidence: confidence
            });
        }
        
        return {
            movingAverage,
            linearTrend,
            exponentialSmoothing,
            periods: forecastPeriods
        };
    }
    
    // Utility and interpretation methods
    interpretSkewness() {
        const skew = this.statistics.skewness;
        if (Math.abs(skew) < 0.5) return '(Approximately symmetric)';
        if (skew > 0.5) return '(Right-skewed)';
        return '(Left-skewed)';
    }
    
    interpretKurtosis() {
        const kurt = this.statistics.kurtosis;
        if (Math.abs(kurt) < 0.5) return '(Normal distribution)';
        if (kurt > 0.5) return '(Heavy-tailed)';
        return '(Light-tailed)';
    }
    
    interpretOutlier(outlier) {
        if (outlier.type === 'high') {
            return 'Unusually high value - investigate for special causes';
        } else {
            return 'Unusually low value - may indicate problems or opportunities';
        }
    }
    
    interpretRSquared(rSquared) {
        if (rSquared > 0.8) return '(Strong relationship)';
        if (rSquared > 0.5) return '(Moderate relationship)';
        if (rSquared > 0.2) return '(Weak relationship)';
        return '(Very weak relationship)';
    }
    
    interpretCorrelation(correlation) {
        const abs = Math.abs(correlation);
        if (abs > 0.8) return '(Strong correlation)';
        if (abs > 0.5) return '(Moderate correlation)';
        if (abs > 0.2) return '(Weak correlation)';
        return '(Very weak correlation)';
    }
    
    // Business insight generation
    generateBusinessInsights() {
        const insights = this.container.querySelector(`#insights-${this.id}`);
        const insightsList = [];
        
        // Performance insights
        if (this.statistics.mean > this.statistics.median) {
            insightsList.push(`📈 Your ${this.currentDataset.title.toLowerCase()} shows some high-value periods pulling the average up. This suggests potential for growth if you can identify what caused those peaks.`);
        }
        
        // Variability insights
        const coefficientOfVariation = (this.statistics.standardDeviation / this.statistics.mean) * 100;
        if (coefficientOfVariation > 30) {
            insightsList.push(`⚠️ High variability detected (${coefficientOfVariation.toFixed(1)}% coefficient of variation). Consider investigating factors causing this inconsistency.`);
        } else if (coefficientOfVariation < 15) {
            insightsList.push(`✅ Low variability (${coefficientOfVariation.toFixed(1)}% coefficient of variation) indicates consistent performance - this is a strength to maintain.`);
        }
        
        // Outlier insights
        if (this.outliers.length > 0) {
            const highOutliers = this.outliers.filter(o => o.type === 'high').length;
            const lowOutliers = this.outliers.filter(o => o.type === 'low').length;
            
            if (highOutliers > 0) {
                insightsList.push(`🚀 ${highOutliers} unusually high period(s) detected. Analyze what drove these exceptional results to replicate success.`);
            }
            
            if (lowOutliers > 0) {
                insightsList.push(`🔍 ${lowOutliers} unusually low period(s) detected. Investigate root causes and implement preventive measures.`);
            }
        }
        
        // Trend insights
        if (this.regressionData && Math.abs(this.regressionData.slope) > 0.1) {
            if (this.regressionData.slope > 0) {
                insightsList.push(`📈 Positive trend detected (+${this.regressionData.slope.toFixed(2)} per period). Your business is showing healthy growth patterns.`);
            } else {
                insightsList.push(`📉 Negative trend detected (${this.regressionData.slope.toFixed(2)} per period). Consider strategies to reverse this decline.`);
            }
        }
        
        // Seasonality insights
        const seasonalityPattern = this.detectSeasonalPattern();
        if (seasonalityPattern) {
            insightsList.push(`🔄 ${seasonalityPattern} - Consider seasonal adjustments to your business strategy.`);
        }
        
        insights.innerHTML = `
            <ul class="insights-list">
                ${insightsList.map(insight => `<li>${insight}</li>`).join('')}
            </ul>
        `;
    }
    
    detectSeasonalPattern() {
        // Simple pattern detection for demonstration
        const data = this.currentDataset.data;
        if (data.length < 12) return null;
        
        // Check for weekly pattern (every 7 periods)
        let weeklyPattern = true;
        for (let i = 7; i < Math.min(data.length, 21); i++) {
            if (Math.abs(data[i] - data[i - 7]) > this.statistics.standardDeviation) {
                weeklyPattern = false;
                break;
            }
        }
        
        if (weeklyPattern) return "Weekly pattern detected";
        
        return null;
    }
    
    // Additional helper methods continue in next section...
    calculateMeanWithoutOutliers() {
        const data = this.currentDataset.data;
        const outlierIndices = new Set(this.outliers.map(o => o.index));
        const cleanData = data.filter((_, index) => !outlierIndices.has(index));
        
        return cleanData.reduce((sum, val) => sum + val, 0) / cleanData.length;
    }
    
    calculateOutlierImpact() {
        const meanWithOutliers = this.statistics.mean;
        const meanWithoutOutliers = this.calculateMeanWithoutOutliers();
        
        return ((meanWithOutliers - meanWithoutOutliers) / meanWithoutOutliers) * 100;
    }
    
    generateOutlierRecommendations() {
        const recommendations = [];
        
        if (this.outliers.length > 0) {
            recommendations.push(`Investigate the ${this.outliers.length} outlier(s) to understand underlying causes`);
            recommendations.push(`Consider whether outliers represent opportunities (highs) or problems (lows)`);
            recommendations.push(`Determine if outliers should be included in future forecasting models`);
            
            const highOutliers = this.outliers.filter(o => o.type === 'high');
            if (highOutliers.length > 0) {
                recommendations.push(`Study high-performing periods to identify replicable success factors`);
            }
            
            const lowOutliers = this.outliers.filter(o => o.type === 'low');
            if (lowOutliers.length > 0) {
                recommendations.push(`Implement controls to prevent recurrence of low-performing periods`);
            }
        }
        
        return recommendations.map(rec => `<li>${rec}</li>`).join('');
    }
    
    generateHistogramData() {
        const data = this.currentDataset.data;
        const min = Math.min(...data);
        const max = Math.max(...data);
        const binCount = Math.ceil(Math.sqrt(data.length)); // Sturges' rule
        const binWidth = (max - min) / binCount;
        
        const bins = Array(binCount).fill(0);
        const binLabels = [];
        
        for (let i = 0; i < binCount; i++) {
            const binStart = min + i * binWidth;
            const binEnd = min + (i + 1) * binWidth;
            binLabels.push(`${binStart.toFixed(1)}-${binEnd.toFixed(1)}`);
        }
        
        data.forEach(value => {
            const binIndex = Math.min(Math.floor((value - min) / binWidth), binCount - 1);
            bins[binIndex]++;
        });
        
        return `
            <div class="histogram-chart">
                ${bins.map((count, index) => `
                    <div class="histogram-bin">
                        <div class="bin-bar" style="height: ${(count / Math.max(...bins)) * 100}px;"></div>
                        <div class="bin-label">${binLabels[index]}</div>
                        <div class="bin-count">${count}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    generateDistributionInsights() {
        const insights = [];
        
        if (Math.abs(this.statistics.skewness) < 0.5) {
            insights.push(`<li>✅ Data is approximately normally distributed - suitable for many statistical analyses</li>`);
        } else {
            insights.push(`<li>⚠️ Data shows significant skewness - consider data transformation for some analyses</li>`);
        }
        
        if (this.statistics.kurtosis > 2) {
            insights.push(`<li>📊 Distribution has heavy tails - more extreme values than normal distribution</li>`);
        } else if (this.statistics.kurtosis < -2) {
            insights.push(`<li>📊 Distribution has light tails - fewer extreme values than normal distribution</li>`);
        }
        
        const range = this.statistics.max - this.statistics.min;
        const iqrRatio = this.statistics.iqr / range;
        if (iqrRatio < 0.4) {
            insights.push(`<li>🎯 Data is tightly clustered around the median - predictable performance</li>`);
        } else if (iqrRatio > 0.7) {
            insights.push(`<li>📈 Data shows wide spread - high variability in performance</li>`);
        }
        
        return insights.join('');
    }
    
    generateForecastInsights(forecast) {
        const insights = [];
        
        // Compare forecasting methods
        const methods = [forecast.movingAverage, forecast.linearTrend, forecast.exponentialSmoothing];
        const methodNames = ['Moving Average', 'Linear Trend', 'Exponential Smoothing'];
        const maxIndex = methods.indexOf(Math.max(...methods));
        const minIndex = methods.indexOf(Math.min(...methods));
        
        insights.push(`<li>📈 Highest prediction: ${methodNames[maxIndex]} (${methods[maxIndex].toFixed(2)})</li>`);
        insights.push(`<li>📉 Lowest prediction: ${methodNames[minIndex]} (${methods[minIndex].toFixed(2)})</li>`);
        
        // Forecast reliability
        const variance = this.calculateVariance(methods);
        if (variance < 100) {
            insights.push(`<li>✅ Methods show good agreement - forecasts are likely reliable</li>`);
        } else {
            insights.push(`<li>⚠️ Methods show significant disagreement - use forecasts with caution</li>`);
        }
        
        // Trend-based insights
        if (this.regressionData && this.regressionData.slope > 0) {
            insights.push(`<li>🚀 Positive trend suggests continued growth - linear trend may be most reliable</li>`);
        } else if (this.regressionData && this.regressionData.slope < 0) {
            insights.push(`<li>📉 Negative trend suggests decline - consider intervention strategies</li>`);
        } else {
            insights.push(`<li>➡️ Stable trend - moving average may provide good baseline forecast</li>`);
        }
        
        return insights.join('');
    }
    
    calculateVariance(values) {
        const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
        return values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    }
    
    analyzeSeasonality() {
        const data = this.currentDataset.data;
        
        if (data.length < 12) {
            return `<p>⏱️ Insufficient data for seasonality analysis (need at least 12 periods).</p>`;
        }
        
        // Simple seasonality detection
        const quarterlyAverages = [];
        const monthlyPattern = [];
        
        // Calculate quarterly averages if we have enough data
        if (data.length >= 12) {
            for (let quarter = 0; quarter < 4; quarter++) {
                const quarterData = [];
                for (let i = quarter; i < data.length; i += 4) {
                    quarterData.push(data[i]);
                }
                quarterlyAverages.push(quarterData.reduce((sum, val) => sum + val, 0) / quarterData.length);
            }
        }
        
        // Check for day-of-week pattern (if data represents daily values)
        if (data.length >= 14) {
            for (let day = 0; day < 7; day++) {
                const dayData = [];
                for (let i = day; i < Math.min(data.length, 21); i += 7) {
                    dayData.push(data[i]);
                }
                if (dayData.length > 0) {
                    monthlyPattern.push(dayData.reduce((sum, val) => sum + val, 0) / dayData.length);
                }
            }
        }
        
        return `
            <div class="seasonality-results">
                ${quarterlyAverages.length > 0 ? `
                    <div class="quarterly-pattern">
                        <h7>Quarterly Pattern:</h7>
                        <div class="quarter-averages">
                            ${quarterlyAverages.map((avg, index) => `
                                <div class="quarter-item">
                                    <span class="quarter-label">Q${index + 1}:</span>
                                    <span class="quarter-value">${avg.toFixed(2)}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${monthlyPattern.length > 0 ? `
                    <div class="weekly-pattern">
                        <h7>Weekly Pattern Detected:</h7>
                        <p>Use this information for workforce and inventory planning.</p>
                    </div>
                ` : `
                    <div class="no-seasonality">
                        <p>✅ No clear seasonal patterns detected in current dataset.</p>
                    </div>
                `}
            </div>
        `;
    }
    
    // Chart and visualization methods
    updateChart(chartType) {
        const canvas = this.container.querySelector(`#stats-chart-${this.id}`);
        const ctx = canvas.getContext('2d');
        
        // Clear existing chart
        if (this.currentChart) {
            this.currentChart.destroy();
        }
        
        const data = this.currentDataset.data;
        const labels = data.map((_, index) => `Period ${index + 1}`);
        
        let chartConfig;
        
        switch (chartType) {
            case 'line':
                chartConfig = {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: this.currentDataset.title,
                            data: data,
                            borderColor: '#007bff',
                            backgroundColor: 'rgba(0, 123, 255, 0.1)',
                            tension: 0.1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: `${this.currentDataset.title} - Time Series`
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: false,
                                title: {
                                    display: true,
                                    text: this.currentDataset.units
                                }
                            }
                        }
                    }
                };
                break;
                
            case 'histogram':
                const bins = this.generateHistogramBins();
                chartConfig = {
                    type: 'bar',
                    data: {
                        labels: bins.labels,
                        datasets: [{
                            label: 'Frequency',
                            data: bins.counts,
                            backgroundColor: 'rgba(0, 123, 255, 0.7)',
                            borderColor: '#007bff',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: `${this.currentDataset.title} - Distribution`
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Frequency'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: this.currentDataset.units
                                }
                            }
                        }
                    }
                };
                break;
                
            case 'boxplot':
                // Simplified box plot as bar chart showing quartiles
                chartConfig = {
                    type: 'bar',
                    data: {
                        labels: ['Min', 'Q1', 'Median', 'Q3', 'Max'],
                        datasets: [{
                            label: 'Five Number Summary',
                            data: [
                                this.statistics.min,
                                this.statistics.q1,
                                this.statistics.median,
                                this.statistics.q3,
                                this.statistics.max
                            ],
                            backgroundColor: [
                                'rgba(220, 53, 69, 0.7)',
                                'rgba(255, 193, 7, 0.7)',
                                'rgba(40, 167, 69, 0.7)',
                                'rgba(255, 193, 7, 0.7)',
                                'rgba(220, 53, 69, 0.7)'
                            ]
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: `${this.currentDataset.title} - Box Plot Summary`
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: false,
                                title: {
                                    display: true,
                                    text: this.currentDataset.units
                                }
                            }
                        }
                    }
                };
                break;
                
            case 'scatter':
                const timeData = data.map((value, index) => ({ x: index + 1, y: value }));
                chartConfig = {
                    type: 'scatter',
                    data: {
                        datasets: [{
                            label: 'Data Points',
                            data: timeData,
                            backgroundColor: 'rgba(0, 123, 255, 0.7)',
                            borderColor: '#007bff'
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: `${this.currentDataset.title} - Scatter Plot`
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Time Period'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: this.currentDataset.units
                                }
                            }
                        }
                    }
                };
                break;
        }
        
        if (typeof Chart !== 'undefined' && chartConfig) {
            this.currentChart = new Chart(ctx, chartConfig);
        }
    }
    
    generateHistogramBins() {
        const data = this.currentDataset.data;
        const min = Math.min(...data);
        const max = Math.max(...data);
        const binCount = Math.ceil(Math.sqrt(data.length));
        const binWidth = (max - min) / binCount;
        
        const bins = Array(binCount).fill(0);
        const labels = [];
        
        for (let i = 0; i < binCount; i++) {
            const binStart = min + i * binWidth;
            const binEnd = min + (i + 1) * binWidth;
            labels.push(`${binStart.toFixed(1)}-${binEnd.toFixed(1)}`);
        }
        
        data.forEach(value => {
            const binIndex = Math.min(Math.floor((value - min) / binWidth), binCount - 1);
            bins[binIndex]++;
        });
        
        return { labels, counts: bins };
    }
    
    // UI interaction methods
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
    
    changeDataset(newDataSource) {
        this.dataSource = newDataSource;
        this.currentDataset = this.datasets[newDataSource];
        
        // Recalculate everything
        this.calculateStatistics();
        this.updateDisplay();
        
        // Award points for exploring different datasets
        if (window.awardPoints) {
            window.awardPoints(5, `Analyzed ${this.currentDataset.title}`);
        }
    }
    
    addStyles() {
        if (document.getElementById('statistical-analysis-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'statistical-analysis-styles';
        styles.textContent = `
            .statistical-analysis {
                max-width: 1200px;
                margin: 20px auto;
                padding: 20px;
                border: 2px solid #17a2b8;
                border-radius: 10px;
                background: #f8f9fa;
            }
            
            .analysis-header {
                text-align: center;
                margin-bottom: 20px;
            }
            
            .analysis-header h3 {
                color: #17a2b8;
                margin: 0;
            }
            
            .dataset-selector {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
                display: flex;
                align-items: center;
                gap: 15px;
            }
            
            .dataset-select {
                padding: 8px 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                flex: 1;
                max-width: 400px;
            }
            
            .dataset-info {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #20c997;
            }
            
            .data-metrics {
                display: flex;
                gap: 20px;
                margin-top: 10px;
                flex-wrap: wrap;
            }
            
            .data-metrics span {
                background: #e9ecef;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 14px;
            }
            
            .analysis-tabs {
                background: white;
                border-radius: 8px;
                margin: 20px 0;
            }
            
            .tab-buttons {
                display: flex;
                border-bottom: 1px solid #e9ecef;
            }
            
            .tab-btn {
                flex: 1;
                padding: 15px 10px;
                border: none;
                background: none;
                cursor: pointer;
                font-weight: bold;
                color: #6c757d;
                transition: all 0.3s ease;
            }
            
            .tab-btn.active {
                color: #17a2b8;
                border-bottom: 3px solid #17a2b8;
                background: #f8f9fa;
            }
            
            .tab-btn:hover {
                background: #f8f9fa;
            }
            
            .analysis-content {
                background: white;
                padding: 20px;
                border-radius: 0 0 8px 8px;
            }
            
            .tab-content {
                display: none;
            }
            
            .tab-content.active {
                display: block;
            }
            
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 20px 0;
            }
            
            .stat-group {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                border: 1px solid #e9ecef;
            }
            
            .stat-group h6 {
                color: #495057;
                margin: 0 0 10px 0;
                font-weight: bold;
                border-bottom: 1px solid #dee2e6;
                padding-bottom: 5px;
            }
            
            .stat-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 8px 0;
                padding: 5px 0;
            }
            
            .stat-label {
                font-weight: 500;
                color: #495057;
            }
            
            .stat-value {
                font-weight: bold;
                color: #17a2b8;
            }
            
            .stat-interpretation {
                font-size: 12px;
                color: #6c757d;
                font-style: italic;
                margin-left: 5px;
            }
            
            .confidence-intervals {
                margin-top: 20px;
                padding: 15px;
                background: #e8f4f8;
                border-radius: 6px;
                border-left: 4px solid #17a2b8;
            }
            
            .confidence-item {
                display: flex;
                justify-content: space-between;
                margin: 8px 0;
            }
            
            .confidence-label {
                font-weight: 500;
            }
            
            .confidence-value {
                font-weight: bold;
                color: #17a2b8;
            }
            
            .outlier-summary {
                background: #fff3cd;
                padding: 15px;
                border-radius: 6px;
                margin: 15px 0;
                border-left: 4px solid #ffc107;
            }
            
            .outlier-count,
            .detection-method {
                margin: 5px 0;
            }
            
            .outliers-table {
                margin: 20px 0;
            }
            
            .outlier-list {
                width: 100%;
                border-collapse: collapse;
                margin: 10px 0;
            }
            
            .outlier-list th,
            .outlier-list td {
                border: 1px solid #dee2e6;
                padding: 8px 12px;
                text-align: left;
            }
            
            .outlier-list th {
                background: #f8f9fa;
                font-weight: bold;
            }
            
            .outlier-row.high {
                background: #ffe6e6;
            }
            
            .outlier-row.low {
                background: #e6f3ff;
            }
            
            .no-outliers {
                text-align: center;
                padding: 30px;
                background: #d4edda;
                border-radius: 6px;
                border: 1px solid #c3e6cb;
            }
            
            .outlier-recommendations {
                margin: 20px 0;
                padding: 15px;
                background: #e8f4f8;
                border-radius: 6px;
            }
            
            .outlier-impact {
                margin: 20px 0;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .impact-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 10px;
            }
            
            .impact-item {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
            }
            
            .impact-label {
                font-weight: 500;
                color: #495057;
            }
            
            .impact-value {
                font-weight: bold;
                color: #dc3545;
            }
            
            .distribution-tests {
                margin: 20px 0;
            }
            
            .normality-indicators {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 15px;
                margin: 15px 0;
            }
            
            .indicator-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                background: #f8f9fa;
                border-radius: 4px;
            }
            
            .indicator-label {
                font-weight: 500;
            }
            
            .indicator-value.good {
                color: #28a745;
                font-weight: bold;
            }
            
            .indicator-value.warning {
                color: #ffc107;
                font-weight: bold;
            }
            
            .histogram-chart {
                display: flex;
                align-items: flex-end;
                gap: 2px;
                margin: 20px 0;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 6px;
                justify-content: center;
            }
            
            .histogram-bin {
                text-align: center;
                min-width: 40px;
            }
            
            .bin-bar {
                background: #17a2b8;
                margin-bottom: 5px;
                border-radius: 2px 2px 0 0;
                min-height: 5px;
            }
            
            .bin-label {
                font-size: 10px;
                color: #6c757d;
                margin: 2px 0;
            }
            
            .bin-count {
                font-size: 12px;
                font-weight: bold;
                color: #495057;
            }
            
            .regression-equation {
                font-family: monospace;
                font-size: 18px;
                text-align: center;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
                margin: 15px 0;
                border: 1px solid #e9ecef;
            }
            
            .regression-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 15px;
                margin: 20px 0;
            }
            
            .reg-stat {
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
                border: 1px solid #e9ecef;
            }
            
            .reg-label {
                font-weight: 500;
                color: #495057;
                display: block;
                margin-bottom: 5px;
            }
            
            .reg-value {
                font-size: 20px;
                font-weight: bold;
                color: #17a2b8;
                display: block;
            }
            
            .reg-interpretation {
                font-size: 12px;
                color: #6c757d;
                font-style: italic;
                margin-top: 5px;
            }
            
            .prediction-tool {
                margin: 20px 0;
                padding: 20px;
                background: #e8f4f8;
                border-radius: 6px;
                border-left: 4px solid #17a2b8;
            }
            
            .prediction-inputs {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 15px;
                flex-wrap: wrap;
            }
            
            .prediction-inputs input {
                padding: 8px 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                width: 100px;
            }
            
            .predict-btn {
                background: #17a2b8;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
            }
            
            .predict-btn:hover {
                background: #138496;
            }
            
            .prediction-result {
                padding: 15px;
                background: white;
                border-radius: 4px;
                border: 1px solid #17a2b8;
                margin-top: 10px;
                display: none;
            }
            
            .residual-analysis {
                margin: 20px 0;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .residual-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 10px;
            }
            
            .residual-stat {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                background: white;
                border-radius: 4px;
            }
            
            .residual-label {
                font-weight: 500;
                color: #495057;
            }
            
            .residual-value {
                font-weight: bold;
                color: #17a2b8;
            }
            
            .method-comparison {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 15px;
                margin: 20px 0;
            }
            
            .method-item {
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
                border: 1px solid #e9ecef;
            }
            
            .method-item h7 {
                font-weight: bold;
                color: #495057;
                display: block;
                margin-bottom: 10px;
            }
            
            .method-forecast {
                font-size: 16px;
                color: #17a2b8;
            }
            
            .forecast-results {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }
            
            .forecast-results th,
            .forecast-results td {
                border: 1px solid #dee2e6;
                padding: 8px 12px;
                text-align: center;
            }
            
            .forecast-results th {
                background: #f8f9fa;
                font-weight: bold;
            }
            
            .data-visualization {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border: 1px solid #e9ecef;
            }
            
            .chart-container {
                margin: 20px 0;
                height: 400px;
                position: relative;
            }
            
            .chart-controls {
                display: flex;
                gap: 10px;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .chart-btn {
                padding: 8px 16px;
                border: 1px solid #17a2b8;
                background: white;
                color: #17a2b8;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .chart-btn:hover {
                background: #17a2b8;
                color: white;
            }
            
            .business-insights {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #28a745;
            }
            
            .insights-list {
                list-style: none;
                padding: 0;
            }
            
            .insights-list li {
                margin: 15px 0;
                padding: 10px;
                background: #f8f9fa;
                border-radius: 4px;
                border-left: 3px solid #28a745;
            }
            
            .learning-activity {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #ffc107;
            }
            
            .analysis-input {
                width: 100%;
                height: 100px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin: 10px 0;
                resize: vertical;
            }
            
            .submit-analysis-btn {
                background: #ffc107;
                color: #212529;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
            }
            
            .submit-analysis-btn:hover {
                background: #e0a800;
            }
            
            .seasonality-results {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                margin: 15px 0;
            }
            
            .quarterly-pattern,
            .weekly-pattern {
                margin: 15px 0;
            }
            
            .quarter-averages {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
                margin-top: 10px;
            }
            
            .quarter-item {
                text-align: center;
                padding: 10px;
                background: white;
                border-radius: 4px;
                border: 1px solid #e9ecef;
            }
            
            .quarter-label {
                font-weight: bold;
                color: #495057;
                display: block;
            }
            
            .quarter-value {
                font-size: 18px;
                font-weight: bold;
                color: #17a2b8;
                display: block;
                margin-top: 5px;
            }
            
            @media (max-width: 768px) {
                .stats-grid,
                .method-comparison,
                .regression-stats {
                    grid-template-columns: 1fr;
                }
                
                .tab-buttons {
                    flex-direction: column;
                }
                
                .chart-controls {
                    flex-direction: column;
                }
                
                .data-metrics,
                .prediction-inputs {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .quarter-averages {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
}

// ===================================
// Utility Functions
// ===================================

function createStatisticalAnalysis(container, id, dataSource) {
    const analysis = new StatisticalAnalysis(container, id, dataSource);
    statisticalInstances[id] = analysis;
    return analysis;
}

// ===================================
// Global Functions for Button Clicks
// ===================================

window.makePrediction = function(analysisId) {
    const analysis = statisticalInstances[analysisId];
    if (!analysis || !analysis.regressionData) return;
    
    const inputElement = analysis.container.querySelector(`#predict-x-${analysisId}`);
    const resultElement = analysis.container.querySelector(`#prediction-result-${analysisId}`);
    
    const xValue = parseFloat(inputElement.value);
    if (isNaN(xValue) || xValue <= 0) {
        alert('Please enter a valid period number (greater than 0)');
        return;
    }
    
    const regression = analysis.regressionData;
    const prediction = regression.slope * xValue + regression.intercept;
    const confidenceInterval = 1.96 * regression.standardError; // 95% CI approximation
    
    resultElement.innerHTML = `
        <div class="prediction-output">
            <h7>📊 Prediction Results</h7>
            <div class="prediction-details">
                <div class="prediction-value">
                    <strong>Predicted Value:</strong> ${prediction.toFixed(2)} ${analysis.currentDataset.units}
                </div>
                <div class="prediction-confidence">
                    <strong>95% Confidence Interval:</strong> 
                    [${(prediction - confidenceInterval).toFixed(2)}, ${(prediction + confidenceInterval).toFixed(2)}]
                </div>
                <div class="prediction-note">
                    <em>Note: This prediction is based on linear trend analysis. Actual results may vary due to external factors.</em>
                </div>
            </div>
        </div>
    `;
    
    resultElement.style.display = 'block';
    
    // Award points for using prediction tool
    if (window.awardPoints) {
        window.awardPoints(10, 'Used statistical prediction tool');
    }
};

window.submitStatisticalAnalysis = function(analysisId) {
    const analysis = statisticalInstances[analysisId];
    if (!analysis) return;
    
    const textarea = analysis.container.querySelector('.analysis-input');
    const analysisText = textarea.value.trim();
    
    if (analysisText.length < 50) {
        alert('Please provide a more detailed analysis (at least 50 characters).');
        return;
    }
    
    // Award points for thoughtful analysis
    if (window.awardPoints) {
        window.awardPoints(25, 'Completed statistical analysis reflection');
    }
    
    // Provide feedback
    const feedback = `
        <div class="analysis-feedback">
            <h5>📊 Excellent Statistical Analysis!</h5>
            <p>You've demonstrated strong analytical thinking by connecting statistical findings to business recommendations.</p>
            
            <div class="feedback-insights">
                <h6>Key Statistical Skills Demonstrated:</h6>
                <ul>
                    <li><strong>Descriptive Analysis:</strong> Understanding central tendency and variability</li>
                    <li><strong>Outlier Recognition:</strong> Identifying unusual patterns requiring investigation</li>
                    <li><strong>Trend Analysis:</strong> Using regression to identify business directions</li>
                    <li><strong>Forecasting:</strong> Making data-driven predictions for planning</li>
                    <li><strong>Business Application:</strong> Translating statistics into actionable insights</li>
                </ul>
            </div>
            
            <div class="sarah-context">
                <h6>💼 For Sarah's Business:</h6>
                <p>Your analysis helps Sarah make data-driven decisions for TechStart Cafe. Statistical analysis enables her to:</p>
                <ul>
                    <li>Optimize inventory based on sales patterns</li>
                    <li>Identify peak performance periods to replicate</li>
                    <li>Detect problems early through outlier analysis</li>
                    <li>Plan for future growth using forecasting models</li>
                    <li>Make evidence-based strategic decisions</li>
                </ul>
            </div>
        </div>
    `;
    
    const activityContainer = analysis.container.querySelector('.learning-activity');
    activityContainer.innerHTML += feedback;
    
    // Scroll to feedback
    activityContainer.scrollIntoView({ behavior: 'smooth' });
};

// ===================================
// Integration with Existing Systems
// ===================================

// Integration with gamification system
document.addEventListener('statisticalAnalysisComplete', function(event) {
    const { analysisId, dataset, insights, charts } = event.detail;
    
    // Award points based on analysis depth
    let points = 40; // Base points
    
    if (insights && insights.length > 3) points += 15; // Bonus for thorough insights
    if (charts && charts.length > 2) points += 10; // Bonus for using multiple chart types
    
    if (window.awardPoints) {
        window.awardPoints(points, `Statistical analysis mastery: ${dataset}`);
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StatisticalAnalysis, createStatisticalAnalysis };
}