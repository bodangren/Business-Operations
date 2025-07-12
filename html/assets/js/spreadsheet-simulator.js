// ===================================
// Interactive Spreadsheet Simulator
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeSpreadsheetSimulators();
});

class SpreadsheetSimulator {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            rows: options.rows || 20,
            cols: options.cols || 10,
            showFormulas: options.showFormulas || false,
            allowEdit: options.allowEdit !== false,
            showGridLines: options.showGridLines !== false,
            ...options
        };
        
        this.data = {};
        this.formulas = {};
        this.selectedCell = null;
        this.selectedRange = [];
        this.clipboard = null;
        this.undoStack = [];
        this.redoStack = [];
        
        this.init();
    }
    
    init() {
        this.createSpreadsheetHTML();
        this.setupEventListeners();
        this.loadInitialData();
    }
    
    createSpreadsheetHTML() {
        this.container.innerHTML = `
            <div class="spreadsheet-simulator">
                <div class="spreadsheet-toolbar">
                    <div class="toolbar-group">
                        <button class="toolbar-btn" data-action="undo" title="Undo">↶</button>
                        <button class="toolbar-btn" data-action="redo" title="Redo">↷</button>
                    </div>
                    <div class="toolbar-group">
                        <button class="toolbar-btn" data-action="copy" title="Copy">📋</button>
                        <button class="toolbar-btn" data-action="paste" title="Paste">📄</button>
                    </div>
                    <div class="toolbar-group">
                        <select class="format-select" data-action="format">
                            <option value="general">General</option>
                            <option value="currency">Currency</option>
                            <option value="percentage">Percentage</option>
                            <option value="number">Number</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                    <div class="toolbar-group">
                        <button class="toolbar-btn" data-action="sum" title="AutoSum">Σ</button>
                        <button class="toolbar-btn" data-action="average" title="Average">AVG</button>
                        <button class="toolbar-btn" data-action="count" title="Count">CNT</button>
                    </div>
                </div>
                
                <div class="formula-bar-container">
                    <div class="cell-reference" id="cell-ref">A1</div>
                    <div class="formula-input-container">
                        <input type="text" class="formula-input" id="formula-input" placeholder="Enter formula or value">
                    </div>
                </div>
                
                <div class="spreadsheet-container">
                    <div class="spreadsheet-grid" id="spreadsheet-grid">
                        ${this.generateGridHTML()}
                    </div>
                </div>
                
                <div class="spreadsheet-status">
                    <span class="status-info">Ready</span>
                    <span class="calculation-mode">Automatic</span>
                </div>
            </div>
        `;
        
        this.addSpreadsheetStyles();
    }
    
    generateGridHTML() {
        let html = '<table class="spreadsheet-table">';
        
        // Header row with column letters
        html += '<tr class="header-row">';
        html += '<th class="corner-header"></th>';
        for (let col = 0; col < this.options.cols; col++) {
            const colLetter = this.numberToLetter(col);
            html += `<th class="col-header" data-col="${col}">${colLetter}</th>`;
        }
        html += '</tr>';
        
        // Data rows
        for (let row = 0; row < this.options.rows; row++) {
            html += `<tr class="data-row" data-row="${row}">`;
            html += `<th class="row-header" data-row="${row}">${row + 1}</th>`;
            
            for (let col = 0; col < this.options.cols; col++) {
                const cellId = this.getCellId(row, col);
                html += `<td class="spreadsheet-cell" 
                            data-row="${row}" 
                            data-col="${col}" 
                            data-cell="${cellId}" 
                            tabindex="0"></td>`;
            }
            html += '</tr>';
        }
        
        html += '</table>';
        return html;
    }
    
    addSpreadsheetStyles() {
        if (document.getElementById('spreadsheet-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'spreadsheet-styles';
        styles.textContent = `
            .spreadsheet-simulator {
                border: 1px solid #d0d7de;
                border-radius: 6px;
                background: white;
                font-family: 'Segoe UI', system-ui, sans-serif;
                margin: 1rem 0;
            }
            
            .spreadsheet-toolbar {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 0.5rem 1rem;
                background: #f6f8fa;
                border-bottom: 1px solid #d0d7de;
            }
            
            .toolbar-group {
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }
            
            .toolbar-btn {
                background: none;
                border: 1px solid transparent;
                padding: 0.25rem 0.5rem;
                border-radius: 3px;
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.2s ease;
            }
            
            .toolbar-btn:hover {
                background: #f3f4f6;
                border-color: #d0d7de;
            }
            
            .toolbar-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .format-select {
                padding: 0.25rem 0.5rem;
                border: 1px solid #d0d7de;
                border-radius: 3px;
                font-size: 0.85rem;
                background: white;
            }
            
            .formula-bar-container {
                display: flex;
                align-items: center;
                padding: 0.5rem;
                background: #fafbfc;
                border-bottom: 1px solid #d0d7de;
                gap: 0.5rem;
            }
            
            .cell-reference {
                background: #f6f8fa;
                border: 1px solid #d0d7de;
                padding: 0.4rem 0.6rem;
                border-radius: 3px;
                min-width: 60px;
                text-align: center;
                font-family: monospace;
                font-weight: 600;
            }
            
            .formula-input-container {
                flex: 1;
            }
            
            .formula-input {
                width: 100%;
                padding: 0.4rem 0.6rem;
                border: 1px solid #d0d7de;
                border-radius: 3px;
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
                background: white;
            }
            
            .formula-input:focus {
                outline: none;
                border-color: #0969da;
                box-shadow: 0 0 0 2px rgba(9, 105, 218, 0.3);
            }
            
            .spreadsheet-container {
                overflow: auto;
                max-height: 500px;
                border-bottom: 1px solid #d0d7de;
            }
            
            .spreadsheet-table {
                border-collapse: separate;
                border-spacing: 0;
                width: 100%;
                font-size: 0.85rem;
            }
            
            .header-row th {
                position: sticky;
                top: 0;
                z-index: 10;
            }
            
            .col-header, .row-header, .corner-header {
                background: #f6f8fa;
                border: 1px solid #d0d7de;
                border-right: none;
                border-bottom: none;
                padding: 0.4rem 0.6rem;
                text-align: center;
                font-weight: 600;
                color: #656d76;
                font-size: 0.8rem;
                user-select: none;
                cursor: pointer;
                min-width: 60px;
            }
            
            .row-header {
                position: sticky;
                left: 0;
                z-index: 5;
                min-width: 40px;
            }
            
            .corner-header {
                position: sticky;
                left: 0;
                z-index: 15;
                width: 40px;
            }
            
            .col-header:hover, .row-header:hover {
                background: #e1e4e8;
            }
            
            .col-header.selected, .row-header.selected {
                background: #0969da;
                color: white;
            }
            
            .spreadsheet-cell {
                border: 1px solid #d0d7de;
                border-right: none;
                border-bottom: none;
                padding: 0.4rem 0.6rem;
                min-width: 80px;
                max-width: 200px;
                height: 24px;
                line-height: 1.2;
                background: white;
                cursor: cell;
                position: relative;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
            .spreadsheet-cell:focus {
                outline: 2px solid #0969da;
                outline-offset: -2px;
                z-index: 3;
            }
            
            .spreadsheet-cell.selected {
                background: #dbeafe !important;
                border: 2px solid #0969da !important;
                z-index: 3;
            }
            
            .spreadsheet-cell.in-range {
                background: #e0f2fe !important;
            }
            
            .spreadsheet-cell.editing {
                padding: 0;
            }
            
            .spreadsheet-cell.editing input {
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                padding: 0.4rem 0.6rem;
                font-family: inherit;
                font-size: inherit;
                background: white;
            }
            
            .spreadsheet-cell.formula {
                color: #0969da;
                font-family: 'Courier New', monospace;
            }
            
            .spreadsheet-cell.number {
                text-align: right;
                font-variant-numeric: tabular-nums;
            }
            
            .spreadsheet-cell.currency {
                text-align: right;
                font-variant-numeric: tabular-nums;
                color: #047857;
            }
            
            .spreadsheet-cell.percentage {
                text-align: right;
                font-variant-numeric: tabular-nums;
                color: #7c2d12;
            }
            
            .spreadsheet-cell.error {
                background: #fef2f2 !important;
                color: #dc2626;
                font-weight: 600;
            }
            
            .spreadsheet-status {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem 1rem;
                background: #f6f8fa;
                border-top: 1px solid #d0d7de;
                font-size: 0.8rem;
                color: #656d76;
            }
            
            @media (max-width: 768px) {
                .spreadsheet-toolbar {
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                .toolbar-group {
                    gap: 0.125rem;
                }
                
                .toolbar-btn {
                    padding: 0.25rem;
                    font-size: 0.8rem;
                }
                
                .spreadsheet-table {
                    font-size: 0.75rem;
                }
                
                .spreadsheet-cell {
                    min-width: 60px;
                    padding: 0.3rem 0.4rem;
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
    
    setupEventListeners() {
        const grid = this.container.querySelector('#spreadsheet-grid');
        const formulaInput = this.container.querySelector('#formula-input');
        
        // Cell selection and editing
        grid.addEventListener('click', (e) => this.handleCellClick(e));
        grid.addEventListener('dblclick', (e) => this.handleCellDoubleClick(e));
        grid.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Formula bar
        formulaInput.addEventListener('keydown', (e) => this.handleFormulaInput(e));
        formulaInput.addEventListener('blur', () => this.commitEdit());
        
        // Toolbar actions
        this.container.addEventListener('click', (e) => {
            if (e.target.matches('[data-action]')) {
                this.handleToolbarAction(e.target.dataset.action);
            }
        });
        
        // Column/row selection
        grid.addEventListener('click', (e) => {
            if (e.target.matches('.col-header')) {
                this.selectColumn(parseInt(e.target.dataset.col));
            } else if (e.target.matches('.row-header')) {
                this.selectRow(parseInt(e.target.dataset.row));
            }
        });
    }
    
    handleCellClick(e) {
        if (!e.target.matches('.spreadsheet-cell')) return;
        
        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        
        if (e.shiftKey && this.selectedCell) {
            this.selectRange(this.selectedCell.row, this.selectedCell.col, row, col);
        } else {
            this.selectCell(row, col);
        }
    }
    
    handleCellDoubleClick(e) {
        if (!e.target.matches('.spreadsheet-cell')) return;
        
        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        
        this.startEdit(row, col);
    }
    
    handleKeydown(e) {
        if (!this.selectedCell) return;
        
        const { row, col } = this.selectedCell;
        
        switch (e.key) {
            case 'ArrowUp':
                e.preventDefault();
                this.selectCell(Math.max(0, row - 1), col);
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.selectCell(Math.min(this.options.rows - 1, row + 1), col);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.selectCell(row, Math.max(0, col - 1));
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.selectCell(row, Math.min(this.options.cols - 1, col + 1));
                break;
            case 'Enter':
                e.preventDefault();
                this.startEdit(row, col);
                break;
            case 'Delete':
            case 'Backspace':
                e.preventDefault();
                this.clearCell(row, col);
                break;
            case 'F2':
                e.preventDefault();
                this.startEdit(row, col);
                break;
            default:
                if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
                    this.startEdit(row, col, e.key);
                }
        }
    }
    
    handleFormulaInput(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.commitEdit();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            this.cancelEdit();
        }
    }
    
    selectCell(row, col) {
        // Clear previous selection
        this.clearSelection();
        
        // Set new selection
        this.selectedCell = { row, col };
        this.selectedRange = [];
        
        // Update UI
        const cell = this.getCell(row, col);
        if (cell) {
            cell.classList.add('selected');
            cell.focus();
        }
        
        // Update cell reference
        this.updateCellReference(row, col);
        
        // Update formula bar
        this.updateFormulaBar(row, col);
    }
    
    selectRange(startRow, startCol, endRow, endCol) {
        this.clearSelection();
        
        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);
        const minCol = Math.min(startCol, endCol);
        const maxCol = Math.max(startCol, endCol);
        
        this.selectedRange = [];
        
        for (let r = minRow; r <= maxRow; r++) {
            for (let c = minCol; c <= maxCol; c++) {
                const cell = this.getCell(r, c);
                if (cell) {
                    cell.classList.add('in-range');
                    this.selectedRange.push({ row: r, col: c });
                }
            }
        }
        
        // Primary selection is the start cell
        this.selectedCell = { row: startRow, col: startCol };
        const primaryCell = this.getCell(startRow, startCol);
        if (primaryCell) {
            primaryCell.classList.add('selected');
        }
        
        this.updateCellReference(startRow, startCol);
    }
    
    clearSelection() {
        this.container.querySelectorAll('.spreadsheet-cell.selected, .spreadsheet-cell.in-range')
            .forEach(cell => {
                cell.classList.remove('selected', 'in-range');
            });
    }
    
    startEdit(row, col, initialValue = '') {
        const cell = this.getCell(row, col);
        if (!cell || !this.options.allowEdit) return;
        
        this.selectCell(row, col);
        
        // Create input element
        const input = document.createElement('input');
        input.type = 'text';
        input.value = initialValue || this.getCellDisplayValue(row, col) || '';
        
        // Replace cell content
        cell.classList.add('editing');
        cell.innerHTML = '';
        cell.appendChild(input);
        
        // Focus and select
        input.focus();
        if (!initialValue) {
            input.select();
        }
        
        // Handle input events
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.commitEdit();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                this.cancelEdit();
            }
        });
        
        input.addEventListener('blur', () => {
            this.commitEdit();
        });
    }
    
    commitEdit() {
        const editingCell = this.container.querySelector('.spreadsheet-cell.editing');
        if (!editingCell) return;
        
        const input = editingCell.querySelector('input');
        const value = input.value;
        const row = parseInt(editingCell.dataset.row);
        const col = parseInt(editingCell.dataset.col);
        
        // Save to undo stack
        this.saveToUndoStack();
        
        // Set cell value
        this.setCellValue(row, col, value);
        
        // Restore cell display
        this.updateCellDisplay(row, col);
        editingCell.classList.remove('editing');
        
        // Update formula bar
        this.updateFormulaBar(row, col);
        
        // Recalculate dependent cells
        this.recalculate();
    }
    
    cancelEdit() {
        const editingCell = this.container.querySelector('.spreadsheet-cell.editing');
        if (!editingCell) return;
        
        const row = parseInt(editingCell.dataset.row);
        const col = parseInt(editingCell.dataset.col);
        
        this.updateCellDisplay(row, col);
        editingCell.classList.remove('editing');
    }
    
    setCellValue(row, col, value) {
        const cellId = this.getCellId(row, col);
        
        if (value.startsWith('=')) {
            // It's a formula
            this.formulas[cellId] = value;
            this.data[cellId] = this.evaluateFormula(value.substring(1), row, col);
        } else {
            // It's a value
            delete this.formulas[cellId];
            this.data[cellId] = this.parseValue(value);
        }
    }
    
    getCellValue(row, col) {
        const cellId = this.getCellId(row, col);
        return this.data[cellId] || '';
    }
    
    getCellDisplayValue(row, col) {
        const cellId = this.getCellId(row, col);
        
        if (this.formulas[cellId]) {
            return this.options.showFormulas ? this.formulas[cellId] : this.formatValue(this.data[cellId]);
        }
        
        return this.formatValue(this.data[cellId]);
    }
    
    parseValue(value) {
        if (value === '') return '';
        
        // Try to parse as number
        const num = parseFloat(value);
        if (!isNaN(num) && isFinite(num)) {
            return num;
        }
        
        // Return as string
        return value;
    }
    
    formatValue(value, format = 'general') {
        if (value === '' || value === null || value === undefined) return '';
        
        if (typeof value === 'number') {
            switch (format) {
                case 'currency':
                    return new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(value);
                case 'percentage':
                    return new Intl.NumberFormat('en-US', {
                        style: 'percent',
                        minimumFractionDigits: 1
                    }).format(value / 100);
                case 'number':
                    return new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(value);
                default:
                    return value.toString();
            }
        }
        
        return value.toString();
    }
    
    evaluateFormula(formula, currentRow, currentCol) {
        try {
            // Simple formula evaluation
            // Replace cell references with values
            const processedFormula = formula.replace(/([A-Z]+)(\d+)/g, (match, col, row) => {
                const colIndex = this.letterToNumber(col);
                const rowIndex = parseInt(row) - 1;
                const value = this.getCellValue(rowIndex, colIndex);
                return typeof value === 'number' ? value : 0;
            });
            
            // Handle functions
            let result = processedFormula;
            
            // SUM function
            result = result.replace(/SUM\(([A-Z]+\d+):([A-Z]+\d+)\)/g, (match, start, end) => {
                const sum = this.calculateRangeSum(start, end);
                return sum;
            });
            
            // AVERAGE function
            result = result.replace(/AVERAGE\(([A-Z]+\d+):([A-Z]+\d+)\)/g, (match, start, end) => {
                const avg = this.calculateRangeAverage(start, end);
                return avg;
            });
            
            // Evaluate the expression (unsafe in production!)
            return Function(`"use strict"; return (${result})`)();
            
        } catch (error) {
            return '#ERROR!';
        }
    }
    
    calculateRangeSum(startRef, endRef) {
        const startCoords = this.parseReference(startRef);
        const endCoords = this.parseReference(endRef);
        
        let sum = 0;
        for (let row = startCoords.row; row <= endCoords.row; row++) {
            for (let col = startCoords.col; col <= endCoords.col; col++) {
                const value = this.getCellValue(row, col);
                if (typeof value === 'number') {
                    sum += value;
                }
            }
        }
        
        return sum;
    }
    
    calculateRangeAverage(startRef, endRef) {
        const startCoords = this.parseReference(startRef);
        const endCoords = this.parseReference(endRef);
        
        let sum = 0;
        let count = 0;
        
        for (let row = startCoords.row; row <= endCoords.row; row++) {
            for (let col = startCoords.col; col <= endCoords.col; col++) {
                const value = this.getCellValue(row, col);
                if (typeof value === 'number') {
                    sum += value;
                    count++;
                }
            }
        }
        
        return count > 0 ? sum / count : 0;
    }
    
    parseReference(ref) {
        const match = ref.match(/([A-Z]+)(\d+)/);
        if (match) {
            return {
                col: this.letterToNumber(match[1]),
                row: parseInt(match[2]) - 1
            };
        }
        return { row: 0, col: 0 };
    }
    
    recalculate() {
        // Recalculate all formulas
        Object.keys(this.formulas).forEach(cellId => {
            const coords = this.parseCellId(cellId);
            const formula = this.formulas[cellId];
            this.data[cellId] = this.evaluateFormula(formula.substring(1), coords.row, coords.col);
            this.updateCellDisplay(coords.row, coords.col);
        });
    }
    
    updateCellDisplay(row, col) {
        const cell = this.getCell(row, col);
        if (!cell) return;
        
        const value = this.getCellDisplayValue(row, col);
        cell.textContent = value;
        
        // Apply formatting classes
        cell.classList.remove('formula', 'number', 'currency', 'percentage', 'error');
        
        const cellId = this.getCellId(row, col);
        if (this.formulas[cellId]) {
            cell.classList.add('formula');
        } else if (typeof this.data[cellId] === 'number') {
            cell.classList.add('number');
        }
        
        if (value === '#ERROR!') {
            cell.classList.add('error');
        }
    }
    
    updateCellReference(row, col) {
        const cellRef = this.container.querySelector('#cell-ref');
        if (cellRef) {
            cellRef.textContent = this.getCellId(row, col);
        }
    }
    
    updateFormulaBar(row, col) {
        const formulaInput = this.container.querySelector('#formula-input');
        if (formulaInput) {
            const cellId = this.getCellId(row, col);
            formulaInput.value = this.formulas[cellId] || this.data[cellId] || '';
        }
    }
    
    // Utility methods
    getCellId(row, col) {
        return this.numberToLetter(col) + (row + 1);
    }
    
    parseCellId(cellId) {
        const match = cellId.match(/([A-Z]+)(\d+)/);
        if (match) {
            return {
                col: this.letterToNumber(match[1]),
                row: parseInt(match[2]) - 1
            };
        }
        return { row: 0, col: 0 };
    }
    
    numberToLetter(num) {
        let result = '';
        while (num >= 0) {
            result = String.fromCharCode(65 + (num % 26)) + result;
            num = Math.floor(num / 26) - 1;
        }
        return result;
    }
    
    letterToNumber(letters) {
        let result = 0;
        for (let i = 0; i < letters.length; i++) {
            result = result * 26 + (letters.charCodeAt(i) - 64);
        }
        return result - 1;
    }
    
    getCell(row, col) {
        return this.container.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    }
    
    clearCell(row, col) {
        this.saveToUndoStack();
        const cellId = this.getCellId(row, col);
        delete this.data[cellId];
        delete this.formulas[cellId];
        this.updateCellDisplay(row, col);
        this.recalculate();
    }
    
    saveToUndoStack() {
        this.undoStack.push({
            data: { ...this.data },
            formulas: { ...this.formulas }
        });
        
        if (this.undoStack.length > 50) {
            this.undoStack.shift();
        }
        
        this.redoStack = [];
    }
    
    undo() {
        if (this.undoStack.length === 0) return;
        
        const currentState = {
            data: { ...this.data },
            formulas: { ...this.formulas }
        };
        this.redoStack.push(currentState);
        
        const previousState = this.undoStack.pop();
        this.data = previousState.data;
        this.formulas = previousState.formulas;
        
        this.refreshDisplay();
    }
    
    redo() {
        if (this.redoStack.length === 0) return;
        
        this.saveToUndoStack();
        
        const nextState = this.redoStack.pop();
        this.data = nextState.data;
        this.formulas = nextState.formulas;
        
        this.refreshDisplay();
    }
    
    refreshDisplay() {
        for (let row = 0; row < this.options.rows; row++) {
            for (let col = 0; col < this.options.cols; col++) {
                this.updateCellDisplay(row, col);
            }
        }
    }
    
    handleToolbarAction(action) {
        switch (action) {
            case 'undo':
                this.undo();
                break;
            case 'redo':
                this.redo();
                break;
            case 'copy':
                this.copy();
                break;
            case 'paste':
                this.paste();
                break;
            case 'sum':
                this.insertFunction('SUM');
                break;
            case 'average':
                this.insertFunction('AVERAGE');
                break;
            case 'count':
                this.insertFunction('COUNT');
                break;
        }
    }
    
    insertFunction(funcName) {
        if (!this.selectedCell) return;
        
        const { row, col } = this.selectedCell;
        let range = 'A1:A1';
        
        if (this.selectedRange.length > 1) {
            const firstCell = this.selectedRange[0];
            const lastCell = this.selectedRange[this.selectedRange.length - 1];
            range = `${this.getCellId(firstCell.row, firstCell.col)}:${this.getCellId(lastCell.row, lastCell.col)}`;
        }
        
        const formula = `=${funcName}(${range})`;
        this.startEdit(row, col, formula);
    }
    
    copy() {
        if (!this.selectedCell) return;
        
        const { row, col } = this.selectedCell;
        const cellId = this.getCellId(row, col);
        
        this.clipboard = {
            formula: this.formulas[cellId],
            value: this.data[cellId]
        };
    }
    
    paste() {
        if (!this.selectedCell || !this.clipboard) return;
        
        const { row, col } = this.selectedCell;
        this.saveToUndoStack();
        
        if (this.clipboard.formula) {
            this.setCellValue(row, col, this.clipboard.formula);
        } else {
            this.setCellValue(row, col, this.clipboard.value);
        }
        
        this.updateCellDisplay(row, col);
        this.recalculate();
    }
    
    loadInitialData() {
        // Override this method to load specific data for exercises
        // Default: empty spreadsheet
    }
    
    // Public API methods
    setData(data) {
        this.data = { ...data };
        this.refreshDisplay();
    }
    
    getData() {
        return { ...this.data };
    }
    
    setFormula(cellRef, formula) {
        const coords = this.parseReference(cellRef);
        this.setCellValue(coords.row, coords.col, formula);
        this.updateCellDisplay(coords.row, coords.col);
        this.recalculate();
    }
    
    getFormula(cellRef) {
        const coords = this.parseReference(cellRef);
        const cellId = this.getCellId(coords.row, coords.col);
        return this.formulas[cellId];
    }
}

// ===================================
// Initialization and Presets
// ===================================

function initializeSpreadsheetSimulators() {
    const simulators = document.querySelectorAll('.spreadsheet-simulator-container');
    
    simulators.forEach(container => {
        const preset = container.dataset.preset || 'basic';
        const simulator = createSpreadsheetSimulator(container, preset);
        
        // Store reference for external access
        container.spreadsheetSimulator = simulator;
    });
}

function createSpreadsheetSimulator(container, preset) {
    const presets = {
        basic: {
            rows: 15,
            cols: 8,
            allowEdit: true
        },
        
        ledger: {
            rows: 20,
            cols: 6,
            allowEdit: true,
            initialData: {
                'A1': 'Date',
                'B1': 'Description', 
                'C1': 'Account',
                'D1': 'Debit',
                'E1': 'Credit',
                'F1': 'Balance'
            }
        },
        
        trialBalance: {
            rows: 15,
            cols: 4,
            allowEdit: true,
            initialData: {
                'A1': 'Account Name',
                'B1': 'Account Type',
                'C1': 'Debit',
                'D1': 'Credit'
            }
        },
        
        calculator: {
            rows: 10,
            cols: 4,
            allowEdit: true,
            initialData: {
                'A1': 'Input',
                'B1': 'Formula',
                'C1': 'Result',
                'A2': '1000',
                'B2': '=A2*0.05',
                'C2': '=B2'
            }
        }
    };
    
    const options = presets[preset] || presets.basic;
    const simulator = new SpreadsheetSimulator(container, options);
    
    // Load initial data if provided
    if (options.initialData) {
        Object.entries(options.initialData).forEach(([cellRef, value]) => {
            const coords = simulator.parseReference(cellRef);
            simulator.setCellValue(coords.row, coords.col, value);
            simulator.updateCellDisplay(coords.row, coords.col);
        });
        simulator.recalculate();
    }
    
    return simulator;
}

// ===================================
// Export Functions
// ===================================

window.SpreadsheetSimulator = SpreadsheetSimulator;
window.createSpreadsheetSimulator = createSpreadsheetSimulator;