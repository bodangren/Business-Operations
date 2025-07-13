// ===================================
// Safe Formula Evaluator
// Secure replacement for Function() constructor usage
// ===================================

class SafeFormulaEvaluator {
    constructor() {
        this.allowedFunctions = ['SUM', 'AVERAGE', 'COUNT', 'MAX', 'MIN', 'IF'];
        this.allowedOperators = ['+', '-', '*', '/', '(', ')', '.', ' '];
        this.maxFormulaLength = 1000;
        this.spreadsheetContext = null;
    }
    
    setSpreadsheetContext(context) {
        this.spreadsheetContext = context;
    }
    
    evaluate(formula) {
        if (!formula || typeof formula !== 'string') {
            throw new Error('Invalid formula');
        }
        
        if (formula.length > this.maxFormulaLength) {
            throw new Error('Formula too long');
        }
        
        // Remove = prefix if present
        const cleanFormula = formula.startsWith('=') ? formula.substring(1) : formula;
        
        // Validate formula safety
        if (!this.isFormulaSafe(cleanFormula)) {
            throw new Error('Unsafe formula detected');
        }
        
        // Parse and evaluate safely
        return this.safeEvaluate(cleanFormula);
    }
    
    isFormulaSafe(formula) {
        // Check for dangerous patterns
        const dangerousPatterns = [
            'eval', 'function', 'constructor', 'prototype', '__proto__',
            'window', 'document', 'global', 'process', 'require',
            'import', 'export', 'alert', 'confirm', 'prompt',
            'script', 'iframe', 'object', 'embed', 'link',
            'meta', 'style', 'javascript:', 'data:', 'vbscript:',
            'this', 'self', 'top', 'parent', 'frames'
        ];
        
        const lowerFormula = formula.toLowerCase();
        return !dangerousPatterns.some(pattern => lowerFormula.includes(pattern));
    }
    
    safeEvaluate(formula) {
        try {
            // Handle Excel functions first (this must happen before safety validation)
            let processedFormula = this.processExcelFunctions(formula);
            
            // Handle cell references
            processedFormula = this.processCellReferences(processedFormula);
            
            // Validate only safe characters remain AFTER function processing
            const safePattern = /^[0-9+\-*/().\s]+$/;
            if (!safePattern.test(processedFormula)) {
                throw new Error(`Invalid characters in formula after processing: "${processedFormula}"`);
            }
            
            // Use safe math parser instead of Function constructor
            return this.parseArithmetic(processedFormula);
            
        } catch (error) {
            console.warn('Formula evaluation error:', error.message);
            return '#ERROR!';
        }
    }
    
    processExcelFunctions(formula) {
        // Process SUM function
        formula = formula.replace(/SUM\(([A-Z]+\d+):([A-Z]+\d+)\)/gi, (match, start, end) => {
            const sum = this.calculateRangeSum(start, end);
            return sum.toString();
        });
        
        // Process AVERAGE function
        formula = formula.replace(/AVERAGE\(([A-Z]+\d+):([A-Z]+\d+)\)/gi, (match, start, end) => {
            const avg = this.calculateRangeAverage(start, end);
            return avg.toString();
        });
        
        // Process COUNT function
        formula = formula.replace(/COUNT\(([A-Z]+\d+):([A-Z]+\d+)\)/gi, (match, start, end) => {
            const count = this.calculateRangeCount(start, end);
            return count.toString();
        });
        
        // Process MAX function
        formula = formula.replace(/MAX\(([A-Z]+\d+):([A-Z]+\d+)\)/gi, (match, start, end) => {
            const max = this.calculateRangeMax(start, end);
            return max.toString();
        });
        
        // Process MIN function
        formula = formula.replace(/MIN\(([A-Z]+\d+):([A-Z]+\d+)\)/gi, (match, start, end) => {
            const min = this.calculateRangeMin(start, end);
            return min.toString();
        });
        
        return formula;
    }
    
    processCellReferences(formula) {
        // Replace individual cell references like A1, B5, etc.
        return formula.replace(/([A-Z]+\d+)/g, (match) => {
            const value = this.getCellValue(match);
            return value !== null ? value.toString() : '0';
        });
    }
    
    parseArithmetic(expression) {
        // Safe arithmetic parser without eval or Function
        const tokens = this.tokenize(expression);
        const result = this.evaluateTokens(tokens);
        
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid calculation result');
        }
        
        return result;
    }
    
    tokenize(expression) {
        const tokens = [];
        let currentToken = '';
        
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            
            if (char === ' ') {
                continue; // Skip whitespace
            }
            
            if ('+-*/()'.includes(char)) {
                if (currentToken) {
                    tokens.push(currentToken);
                    currentToken = '';
                }
                tokens.push(char);
            } else {
                currentToken += char;
            }
        }
        
        if (currentToken) {
            tokens.push(currentToken);
        }
        
        return tokens;
    }
    
    evaluateTokens(tokens) {
        // Implement shunting-yard algorithm for safe arithmetic evaluation
        const outputQueue = [];
        const operatorStack = [];
        const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
        
        for (const token of tokens) {
            if (!isNaN(parseFloat(token))) {
                outputQueue.push(parseFloat(token));
            } else if (token in precedence) {
                while (
                    operatorStack.length > 0 &&
                    operatorStack[operatorStack.length - 1] !== '(' &&
                    precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
                ) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (
                    operatorStack.length > 0 &&
                    operatorStack[operatorStack.length - 1] !== '('
                ) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.pop(); // Remove the '('
            }
        }
        
        while (operatorStack.length > 0) {
            outputQueue.push(operatorStack.pop());
        }
        
        // Evaluate RPN expression
        const stack = [];
        for (const token of outputQueue) {
            if (typeof token === 'number') {
                stack.push(token);
            } else {
                if (stack.length < 2) {
                    throw new Error('Invalid expression structure');
                }
                
                const b = stack.pop();
                const a = stack.pop();
                
                switch (token) {
                    case '+': stack.push(a + b); break;
                    case '-': stack.push(a - b); break;
                    case '*': stack.push(a * b); break;
                    case '/': 
                        if (b === 0) throw new Error('Division by zero');
                        stack.push(a / b); 
                        break;
                    default: throw new Error('Unknown operator: ' + token);
                }
            }
        }
        
        if (stack.length !== 1) {
            throw new Error('Invalid expression');
        }
        
        return stack[0];
    }
    
    // Range calculation methods that access spreadsheet data safely
    calculateRangeSum(startRef, endRef) {
        if (!this.spreadsheetContext) {
            console.warn('No spreadsheet context available for range calculation');
            return 0;
        }
        
        try {
            return this.spreadsheetContext.calculateRangeSum(startRef, endRef);
        } catch (error) {
            console.warn('Error calculating range sum:', error.message);
            return 0;
        }
    }
    
    calculateRangeAverage(startRef, endRef) {
        if (!this.spreadsheetContext) {
            console.warn('No spreadsheet context available for range calculation');
            return 0;
        }
        
        try {
            return this.spreadsheetContext.calculateRangeAverage(startRef, endRef);
        } catch (error) {
            console.warn('Error calculating range average:', error.message);
            return 0;
        }
    }
    
    calculateRangeCount(startRef, endRef) {
        if (!this.spreadsheetContext) {
            console.warn('No spreadsheet context available for range calculation');
            return 0;
        }
        
        try {
            return this.spreadsheetContext.calculateRangeCount(startRef, endRef);
        } catch (error) {
            console.warn('Error calculating range count:', error.message);
            return 0;
        }
    }
    
    calculateRangeMax(startRef, endRef) {
        if (!this.spreadsheetContext) {
            console.warn('No spreadsheet context available for range calculation');
            return 0;
        }
        
        try {
            const values = this.getRangeValues(startRef, endRef);
            const numbers = values.filter(v => typeof v === 'number' && !isNaN(v));
            return numbers.length > 0 ? Math.max(...numbers) : 0;
        } catch (error) {
            console.warn('Error calculating range max:', error.message);
            return 0;
        }
    }
    
    calculateRangeMin(startRef, endRef) {
        if (!this.spreadsheetContext) {
            console.warn('No spreadsheet context available for range calculation');
            return 0;
        }
        
        try {
            const values = this.getRangeValues(startRef, endRef);
            const numbers = values.filter(v => typeof v === 'number' && !isNaN(v));
            return numbers.length > 0 ? Math.min(...numbers) : 0;
        } catch (error) {
            console.warn('Error calculating range min:', error.message);
            return 0;
        }
    }
    
    getRangeValues(startRef, endRef) {
        if (!this.spreadsheetContext) {
            return [];
        }
        
        try {
            const startCoords = this.spreadsheetContext.parseReference(startRef);
            const endCoords = this.spreadsheetContext.parseReference(endRef);
            const values = [];
            
            for (let row = startCoords.row; row <= endCoords.row; row++) {
                for (let col = startCoords.col; col <= endCoords.col; col++) {
                    const cellRef = this.spreadsheetContext.getCellReference(row, col);
                    const value = this.getCellValue(cellRef);
                    if (value !== null) {
                        values.push(value);
                    }
                }
            }
            
            return values;
        } catch (error) {
            console.warn('Error getting range values:', error.message);
            return [];
        }
    }
    
    getCellValue(cellRef) {
        if (!this.spreadsheetContext) {
            return null;
        }
        
        try {
            const value = this.spreadsheetContext.data[cellRef];
            if (value === undefined || value === null) {
                return null;
            }
            
            // Convert to number if possible
            const numValue = parseFloat(value);
            return isNaN(numValue) ? value : numValue;
        } catch (error) {
            console.warn('Error getting cell value:', error.message);
            return null;
        }
    }
}

// Security testing function for development
function testSafeFormulaEvaluator() {
    if (window.location.hostname !== 'localhost') {
        return; // Only run tests in development
    }
    
    const evaluator = new SafeFormulaEvaluator();
    
    // Test malicious inputs
    const maliciousInputs = [
        '=alert("XSS")',
        '=window.location="http://evil.com"',
        '=document.cookie',
        '=eval("alert(1)")',
        '=Function("alert(1)")()',
        '=constructor.constructor("alert(1)")()',
        '=(function(){alert("XSS")})()',
        '=this.constructor.constructor("alert(1)")()',
        '=[].constructor.constructor("alert(1)")()',
        '=import("data:text/javascript,alert(1)")',
        '=require("child_process").exec("calc")',
        '=process.mainModule.require("child_process").exec("calc")'
    ];
    
    console.log('Testing malicious inputs...');
    maliciousInputs.forEach(input => {
        try {
            const result = evaluator.evaluate(input);
            if (result === '#ERROR!') {
                console.log(`✅ Blocked: ${input}`);
            } else {
                console.error(`❌ Failed to block: ${input} -> ${result}`);
            }
        } catch (error) {
            console.log(`✅ Blocked: ${input} (threw error: ${error.message})`);
        }
    });
    
    // Test legitimate formulas
    const legitimateFormulas = [
        '=2+3*4',        // Should be 14
        '=(10+5)/3',     // Should be 5
        '=5.5*2.2+1.1',  // Should be 13.2
        '=100-25*2',     // Should be 50
        '=(8+2)*(5-3)'   // Should be 20
    ];
    
    console.log('Testing legitimate formulas...');
    legitimateFormulas.forEach(formula => {
        try {
            const result = evaluator.evaluate(formula);
            if (typeof result === 'number' && !isNaN(result)) {
                console.log(`✅ Calculated: ${formula} = ${result}`);
            } else {
                console.error(`❌ Failed legitimate formula: ${formula} -> ${result}`);
            }
        } catch (error) {
            console.error(`❌ Error in legitimate formula: ${formula} -> ${error.message}`);
        }
    });
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SafeFormulaEvaluator;
}

// Global assignment for browser usage
if (typeof window !== 'undefined') {
    window.SafeFormulaEvaluator = SafeFormulaEvaluator;
    
    // Run security tests in development
    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.hostname === 'localhost') {
            setTimeout(testSafeFormulaEvaluator, 1000);
        }
    });
}