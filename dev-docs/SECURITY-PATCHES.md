# Security Patches for JavaScript Components
**Math for Business Operations: Critical Security Fixes**

*Version 1.0 - Addressing unsafe Function() constructor usage*

---

## Security Issues Identified

### Critical Issue: Unsafe Function() Constructor Usage
The following files contain dangerous `Function()` constructor usage that could allow code injection:

1. **spreadsheet-simulator.js:726** - Formula evaluation using `Function()` constructor
2. **excel-interactive.js:417** - Arithmetic evaluation using `Function()` constructor

### Risk Assessment
- **Severity**: High
- **Impact**: Code injection, XSS attacks, arbitrary code execution
- **Affected Components**: Spreadsheet simulator, Excel interactive elements
- **Mitigation Priority**: Immediate

---

## Safe Formula Evaluator Implementation

The unsafe `Function()` constructor usage will be replaced with a secure formula parser that only allows specific mathematical operations and Excel functions.

### SafeFormulaEvaluator Class
```javascript
class SafeFormulaEvaluator {
    constructor() {
        this.allowedFunctions = ['SUM', 'AVERAGE', 'COUNT', 'MAX', 'MIN', 'IF'];
        this.allowedOperators = ['+', '-', '*', '/', '(', ')', '.', ' '];
        this.maxFormulaLength = 1000;
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
            'meta', 'style', 'javascript:', 'data:', 'vbscript:'
        ];
        
        const lowerFormula = formula.toLowerCase();
        return !dangerousPatterns.some(pattern => lowerFormula.includes(pattern));
    }
    
    safeEvaluate(formula) {
        try {
            // Handle Excel functions first
            let processedFormula = this.processExcelFunctions(formula);
            
            // Validate only safe characters remain
            const safePattern = /^[0-9+\-*/().\s]+$/;
            if (!safePattern.test(processedFormula)) {
                throw new Error('Invalid characters in formula');
            }
            
            // Use math parser instead of Function constructor
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
        
        return formula;
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
    
    // These methods need to be implemented to access spreadsheet data
    calculateRangeSum(startRef, endRef) {
        // Will be implemented with proper spreadsheet data access
        console.warn('Range sum calculation not implemented');
        return 0;
    }
    
    calculateRangeAverage(startRef, endRef) {
        // Will be implemented with proper spreadsheet data access
        console.warn('Range average calculation not implemented');
        return 0;
    }
    
    calculateRangeCount(startRef, endRef) {
        // Will be implemented with proper spreadsheet data access
        console.warn('Range count calculation not implemented');
        return 0;
    }
}
```

---

## Implementation Plan

### Phase 1: Create Safe Evaluator (Immediate)
1. Create new file: `safe-formula-evaluator.js` with the SafeFormulaEvaluator class
2. Add proper range calculation methods that access spreadsheet data safely
3. Include comprehensive input validation and sanitization

### Phase 2: Replace Unsafe Code (Critical)
1. Update `spreadsheet-simulator.js` to use SafeFormulaEvaluator
2. Update `excel-interactive.js` to use SafeFormulaEvaluator  
3. Remove all `Function()` constructor usage
4. Add proper error handling and user feedback

### Phase 3: Testing and Validation (Required)
1. Test all existing formulas continue to work correctly
2. Verify security by testing with malicious inputs
3. Performance testing to ensure no significant slowdown
4. Update unit tests to cover security scenarios

---

## Patches to Apply Immediately

### 1. spreadsheet-simulator.js Security Fix
Replace the unsafe evaluation method (lines 725-726) with:

```javascript
// SECURE: Replace Function constructor with safe evaluator
const evaluator = new SafeFormulaEvaluator();
evaluator.setSpreadsheetContext(this); // Pass reference for range calculations
return evaluator.evaluate(result);
```

### 2. excel-interactive.js Security Fix  
Replace the unsafe evaluation method (lines 415-417) with:

```javascript
// SECURE: Replace Function constructor with safe evaluator
const evaluator = new SafeFormulaEvaluator();
const result = evaluator.evaluate(expression);
cell.textContent = result;
```

### 3. Add Content Security Policy
Add to all HTML files:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data:;
               connect-src 'self';">
```

---

## Testing Security Fixes

### Malicious Input Test Cases
Test the following inputs to ensure they're safely rejected:

```javascript
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

// All should return '#ERROR!' or safe fallback
maliciousInputs.forEach(input => {
    const result = evaluator.evaluate(input);
    console.assert(result === '#ERROR!', `Failed to block: ${input}`);
});
```

### Legitimate Formula Test Cases
Ensure these continue to work:

```javascript
const legitimateFormulas = [
    '=2+3*4',
    '=(10+5)/3',
    '=SUM(A1:A5)',
    '=AVERAGE(B1:B10)',
    '=COUNT(C1:C20)',
    '=IF(A1>10,100,50)', // If implemented
    '=5.5*2.2+1.1'
];

legitimateFormulas.forEach(formula => {
    const result = evaluator.evaluate(formula);
    console.assert(typeof result === 'number' && !isNaN(result), 
                  `Failed legitimate formula: ${formula}`);
});
```

---

## Priority Implementation Order

### Immediate (Within 24 hours)
1. ✅ Create SafeFormulaEvaluator class
2. ⚠️ Replace Function() usage in spreadsheet-simulator.js
3. ⚠️ Replace Function() usage in excel-interactive.js
4. ⚠️ Add Content Security Policy headers

### Short Term (Within 1 week)  
1. Comprehensive security testing
2. Performance optimization of safe evaluator
3. Enhanced error messages and user feedback
4. Documentation updates

### Long Term (Within 1 month)
1. Advanced Excel function support (IF, VLOOKUP, etc.)
2. Formula debugging and validation tools
3. Security audit of all interactive components
4. Penetration testing by security specialists

---

## Monitoring and Maintenance

### Security Monitoring
- Log and monitor for formula evaluation errors
- Track patterns in blocked malicious inputs
- Regular security scans of all JavaScript code
- Automated testing with security-focused test cases

### Code Review Requirements
- All formula-related code changes require security review
- No direct string evaluation or code generation allowed
- Input validation must be explicit and comprehensive
- Regular dependency security audits

---

*These security patches address critical vulnerabilities while maintaining educational functionality. Implementation should be completed immediately to protect students and school systems from potential security threats.*