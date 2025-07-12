# Interactive Components Documentation

This document provides comprehensive documentation for all interactive components available in the Math for Business Operations textbook. Use this as a reference when creating new units to ensure consistent implementation and functionality.

## Table of Contents

1. [Spreadsheet Simulator](#spreadsheet-simulator)
2. [Financial Calculators](#financial-calculators)
3. [Data Visualization](#data-visualization)
4. [Drag & Drop Exercises](#drag--drop-exercises)
5. [Business Simulations](#business-simulations)
6. [Gamification System](#gamification-system)
7. [Exercise System](#exercise-system)
8. [Integration Guidelines](#integration-guidelines)

---

## Spreadsheet Simulator

### Overview
The Spreadsheet Simulator provides Excel-like functionality with formula evaluation, cell selection, copy/paste, and professional spreadsheet features.

### Implementation

#### Basic Usage
```html
<div class="spreadsheet-simulator-container" data-preset="basic"></div>
```

#### Available Presets
- `basic` - Standard 15x8 spreadsheet for general use
- `ledger` - Accounting ledger with Date, Description, Account, Debit, Credit, Balance columns
- `trialBalance` - Trial balance format with Account Name, Type, Debit, Credit columns
- `calculator` - 10x4 grid optimized for calculations

#### JavaScript Integration
```javascript
// Access spreadsheet instance
const container = document.querySelector('.spreadsheet-simulator-container');
const simulator = container.spreadsheetSimulator;

// Set data programmatically
simulator.setData({
    'A1': 'Revenue',
    'B1': '=SUM(B2:B5)',
    'A2': 'January',
    'B2': 15000
});

// Get current data
const data = simulator.getData();

// Set formulas
simulator.setFormula('C1', '=B1*0.1');
```

#### Supported Features
- **Formulas**: Basic math (+, -, *, /), SUM(), AVERAGE()
- **Cell Selection**: Click, arrow keys, shift-click for ranges
- **Copy/Paste**: Ctrl+C, Ctrl+V with formula adjustment
- **Undo/Redo**: 50-level history with Ctrl+Z, Ctrl+Y
- **Keyboard Navigation**: Full Excel-like keyboard support

#### Custom Configuration
```html
<div class="spreadsheet-simulator-container" 
     data-rows="25" 
     data-cols="12" 
     data-allow-edit="true">
</div>
```

### Best Practices
- Use appropriate presets for specific use cases
- Initialize with relevant data for the learning context
- Provide clear instructions for students on what to accomplish
- Include validation or expected outcomes where appropriate

---

## Financial Calculators

### Overview
Professional-grade financial calculators with real-time calculations, detailed explanations, and educational content.

### Available Calculators

#### NPV Calculator
```html
<div class="npv-calculator-container"></div>
```

**Features:**
- Dynamic cash flow inputs (add/remove years)
- Real-time NPV calculation with decision guidance
- Detailed breakdown showing present value calculations
- Investment decision recommendations

#### Loan Payment Calculator
```html
<div class="loan-calculator-container"></div>
```

**Features:**
- Monthly payment calculation
- Total interest and total amount display
- Principal vs. interest visualization
- Real-time updates as parameters change

#### Break-Even Calculator
```html
<div class="breakeven-calculator-container"></div>
```

**Features:**
- Break-even units and revenue calculation
- Contribution margin analysis
- "What-if" scenario modeling
- Profit/loss analysis for target units

### JavaScript API
```javascript
// Access calculator instances through their containers
const npvContainer = document.querySelector('.npv-calculator-container');
// Calculators auto-initialize when containers are present

// Trigger calculations programmatically (if needed for exercises)
// Most interaction is through the UI
```

### Educational Integration
- Each calculator includes explanatory text
- Results show both numbers and business interpretation
- Built-in examples with realistic business scenarios
- Progressive complexity from basic to advanced scenarios

---

## Data Visualization

### Overview
Interactive charts and graphs using Chart.js with customizable data input and multiple visualization types.

### Basic Chart Implementation
```html
<div class="chart-container" 
     data-chart-type="line" 
     data-chart-id="revenue-trend" 
     data-title="Monthly Revenue Trend">
</div>
```

### Chart Types
- `line` - Time series and trend analysis
- `bar` - Comparative data and categories
- `pie` - Composition and percentages
- `doughnut` - Alternative composition view

### Financial Dashboard
```html
<!-- Creates a complete financial dashboard with multiple charts -->
<div class="sample-charts"></div>
```

### Break-Even Visualization
```html
<div id="breakeven-container"></div>
<script>
// Initialize break-even chart
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('breakeven-container');
    if (container && window.DataVisualization) {
        window.DataVisualization.createBreakEvenChart(
            container, 
            10000, // Fixed costs
            0.6,   // Variable cost rate
            25     // Selling price
        );
    }
});
</script>
```

### JavaScript API
```javascript
// Create custom charts
window.DataVisualization.createChart(container, 'bar', 'my-chart-id');

// Update chart data
window.DataVisualization.updateChartData('chart-id');

// Change chart type
window.DataVisualization.changeChartType('chart-id', 'pie');

// Export charts
window.DataVisualization.exportChart('chart-id');
```

### Integration with Other Components
Charts can be automatically populated with data from spreadsheets or calculators:

```javascript
// Example: Link spreadsheet data to chart
const spreadsheetData = simulator.getData();
const chartData = processDataForChart(spreadsheetData);
// Update chart with processed data
```

---

## Drag & Drop Exercises

### Overview
Interactive drag-and-drop exercises for kinesthetic learning of accounting concepts.

### Exercise Types

#### Account Categorization
```html
<div class="drag-drop-exercise" 
     data-type="categorize-accounts" 
     data-id="unique-id">
</div>
```

**Purpose:** Learn the accounting equation by categorizing accounts into Assets, Liabilities, Equity, Revenue, and Expenses.

#### Journal Entry Builder
```html
<div class="drag-drop-exercise" 
     data-type="journal-entry-builder" 
     data-id="unique-id">
</div>
```

**Purpose:** Practice creating journal entries by dragging accounts and entering amounts.

#### Trial Balance Sort
```html
<div class="drag-drop-exercise" 
     data-type="trial-balance-sort" 
     data-id="unique-id">
</div>
```

**Purpose:** Organize accounts by normal balance side and verify mathematical accuracy.

### JavaScript API
```javascript
// Check exercise completion
window.checkAccountCategorization('exercise-id');
window.checkJournalEntry('exercise-id');
window.checkTrialBalance('exercise-id');

// Reset exercises
window.resetAccountCategorization('exercise-id');
window.resetJournalEntry('exercise-id');
window.resetTrialBalance('exercise-id');

// Show hints
window.showAccountHints('exercise-id');
```

### Scoring and Feedback
- Real-time validation with immediate feedback
- Scoring based on accuracy and attempts
- Hints available with contextual help
- Integration with gamification system for points

### Best Practices
- Use unique IDs for each exercise instance
- Provide clear instructions before the exercise
- Include expected learning outcomes
- Follow up with explanation of correct answers

---

## Business Simulations

### Overview
Interactive business simulation games that apply accounting and business concepts in realistic scenarios.

### Available Simulations

#### Lemonade Stand Tycoon
```html
<div class="business-simulation" 
     data-type="lemonade-stand" 
     data-id="unique-id">
</div>
```

**Learning Objectives:**
- Revenue and expense management
- Pricing strategy
- Inventory management
- Profit calculation
- Customer satisfaction impact

#### Startup Journey
```html
<div class="business-simulation" 
     data-type="startup-journey" 
     data-id="unique-id">
</div>
```

**Learning Objectives:**
- Strategic decision making
- Funding options and implications
- Growth vs. sustainability trade-offs
- Business stage progression

#### Cash Flow Challenge
```html
<div class="business-simulation" 
     data-type="cash-flow-challenge" 
     data-id="unique-id">
</div>
```

**Learning Objectives:**
- Cash flow management
- Timing of receipts and payments
- Working capital management
- Financial planning

### JavaScript API
```javascript
// Reset simulations
window.resetGame('simulation-id');

// Access game state
const gameState = window.BusinessSimulations.gameState['simulation-id'];

// Trigger events programmatically (for guided exercises)
window.buySupply('lemonade-id', 'lemons', 10, 3);
window.startDay('lemonade-id');
```

### Educational Integration
- Real-world business scenarios
- Progressive difficulty
- Multiple attempts encouraged
- Connection to financial statements and accounting concepts

---

## Gamification System

### Overview
Comprehensive gamification system with points, levels, achievements, badges, and progress tracking.

### Automatic Integration
The gamification system automatically tracks:
- Exercise completions
- Perfect scores
- Time spent learning
- Hint usage
- Simulation completions

### Manual Integration
Award points for specific activities:

```javascript
// Award points for any learning activity
window.Gamification.awardPoints(25, 'Completed reading section');

// Track exercise completion
window.Gamification.onExerciseComplete(85, true, 'journal-entry');

// Track hint usage
window.Gamification.onHintUsed();

// Track simulation success
window.Gamification.onSimulationComplete(150); // profit amount
```

### Achievement System
Achievements are automatically unlocked based on:
- First exercise completion
- Perfect scores
- Streak achievements
- Time-based milestones
- Learning consistency

### UI Components
The system automatically adds:
- Floating progress widget (top-right corner)
- Gamification dashboard (accessible via widget)
- Achievement notifications
- Level-up celebrations
- Daily goals tracking

### Customization
```javascript
// Access user progress
const progress = window.Gamification.gamificationData;

// Check specific achievements
const hasAchievement = progress.achievements.includes('achievement-id');
```

---

## Exercise System

### Overview
Unified exercise system that powers comprehension checks, practice problems, and assessments.

### Comprehension Checks
```html
<div class="comprehension-check">
    <h3>Check Your Understanding</h3>
    <div class="question">
        <h4>Question 1: What is the accounting equation?</h4>
        <ul class="question-options">
            <li>
                <label>
                    <input type="radio" name="q1" value="a">
                    Assets = Liabilities - Equity
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="q1" value="b">
                    Assets = Liabilities + Equity
                </label>
            </li>
        </ul>
        <div class="feedback" id="feedback-q1"></div>
    </div>
    <button onclick="checkAnswers()" class="btn btn-primary">Check Answers</button>
</div>
```

### Dynamic Exercises
```html
<div class="dynamic-exercise" data-type="journal-entry" data-difficulty="beginner">
    <!-- Exercise content generated automatically -->
</div>
```

### JavaScript Integration
```javascript
// Generate new exercises
window.generateNewExercise('container-id');

// Check exercise answers
window.checkExerciseAnswer(buttonElement);

// Show solutions
window.showExerciseSolution(buttonElement);
```

### Exercise Types
- **journal-entry** - Create journal entries from scenarios
- **trial-balance** - Complete trial balance exercises
- **fill-blank** - Fill in missing terms or concepts
- **drag-drop** - Interactive drag and drop activities

---

## Integration Guidelines

### Required JavaScript Files
Include these files in order for full functionality:

```html
<!-- Core Systems -->
<script src="../../assets/js/gamification.js"></script>
<script src="../../assets/js/exercises.js"></script>

<!-- Interactive Components -->
<script src="../../assets/js/spreadsheet-simulator.js"></script>
<script src="../../assets/js/financial-calculators.js"></script>
<script src="../../assets/js/data-visualization.js"></script>
<script src="../../assets/js/drag-drop-exercises.js"></script>
<script src="../../assets/js/business-simulations.js"></script>

<!-- Supporting Systems -->
<script src="../../assets/js/financial-data-generator.js"></script>
```

### CSS Requirements
All components are self-styling, but ensure these base styles are included:

```html
<link rel="stylesheet" href="../../assets/css/main.css">
<link rel="stylesheet" href="../../assets/css/textbook.css">
<link rel="stylesheet" href="../../assets/css/callouts.css">
```

### Performance Considerations
- Components lazy-load when their containers are present
- Chart.js loads from CDN with fallback visualizations
- Local storage used for persistence (no server required)
- Mobile-responsive design for all components

### Accessibility
All components include:
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color schemes
- Focus management

### Browser Compatibility
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- JavaScript ES6+ features used
- Graceful degradation for older browsers
- Progressive enhancement approach

---

## Example Unit Structure

Here's a complete example of how to structure a unit with all interactive components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unit Title | Math for Business Operations</title>
    
    <!-- CSS -->
    <link rel="stylesheet" href="../../assets/css/main.css">
    <link rel="stylesheet" href="../../assets/css/textbook.css">
    <link rel="stylesheet" href="../../assets/css/callouts.css">
</head>
<body>
    <main id="main-content" class="main-content">
        <div class="container">
            <div class="content-wrapper">
                <div class="main-content-area reading-width">
                    
                    <!-- Content with interactive components -->
                    <section id="spreadsheet-practice">
                        <h2>Practice with Spreadsheets</h2>
                        <div class="spreadsheet-simulator-container" data-preset="ledger"></div>
                    </section>
                    
                    <section id="calculations">
                        <h2>Financial Calculations</h2>
                        <div class="npv-calculator-container"></div>
                    </section>
                    
                    <section id="visualization">
                        <h2>Data Visualization</h2>
                        <div class="chart-container" data-chart-type="bar" data-chart-id="unit-chart"></div>
                    </section>
                    
                    <section id="practice">
                        <h2>Interactive Practice</h2>
                        <div class="drag-drop-exercise" data-type="categorize-accounts" data-id="unit-practice"></div>
                    </section>
                    
                    <section id="simulation">
                        <h2>Business Simulation</h2>
                        <div class="business-simulation" data-type="lemonade-stand" data-id="unit-sim"></div>
                    </section>
                    
                    <!-- Comprehension Check -->
                    <div class="comprehension-check">
                        <!-- Questions here -->
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
    
    <!-- JavaScript -->
    <script src="../../assets/js/gamification.js"></script>
    <script src="../../assets/js/spreadsheet-simulator.js"></script>
    <script src="../../assets/js/financial-calculators.js"></script>
    <script src="../../assets/js/data-visualization.js"></script>
    <script src="../../assets/js/drag-drop-exercises.js"></script>
    <script src="../../assets/js/business-simulations.js"></script>
    <script src="../../assets/js/exercises.js"></script>
</body>
</html>
```

This structure ensures all interactive components work together seamlessly while maintaining consistent functionality across all units.