// ===================================
// Excel-Style Interactive Tables
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeExcelTables();
    initializeFormulaHighlighting();
});

// ===================================
// Excel Table Initialization
// ===================================

function initializeExcelTables() {
    const excelContainers = document.querySelectorAll('.excel-container');
    
    excelContainers.forEach(container => {
        const table = container.querySelector('.excel-table');
        if (table) {
            setupExcelTable(table);
        }
    });
}

function setupExcelTable(table) {
    const cells = table.querySelectorAll('.cell');
    const colHeaders = table.querySelectorAll('.col-header');
    const rowHeaders = table.querySelectorAll('.row-header');
    
    let selectedCell = null;
    let selectedRange = [];
    let isSelecting = false;
    
    // Cell selection and editing
    cells.forEach((cell, index) => {
        cell.addEventListener('click', function(e) {
            selectCell(this);
            updateFormulaBar(this);
        });
        
        cell.addEventListener('dblclick', function(e) {
            if (this.classList.contains('editable')) {
                startCellEdit(this);
            }
        });
        
        cell.addEventListener('mousedown', function(e) {
            if (e.shiftKey && selectedCell) {
                selectRange(selectedCell, this);
            } else {
                isSelecting = true;
                selectedRange = [this];
            }
        });
        
        cell.addEventListener('mouseenter', function(e) {
            if (isSelecting && e.buttons === 1) {
                extendSelection(this);
            }
        });
    });
    
    // Column header selection
    colHeaders.forEach(header => {
        header.addEventListener('click', function() {
            selectColumn(this);
        });
    });
    
    // Row header selection
    rowHeaders.forEach(header => {
        header.addEventListener('click', function() {
            selectRow(this);
        });
    });
    
    // Stop selection on mouse up
    document.addEventListener('mouseup', function() {
        isSelecting = false;
    });
    
    // Keyboard navigation
    table.addEventListener('keydown', function(e) {
        if (selectedCell) {
            handleKeyboardNavigation(e, selectedCell);
        }
    });
    
    function selectCell(cell) {
        // Clear previous selection
        clearSelection();
        
        // Select new cell
        cell.classList.add('selected');
        selectedCell = cell;
        cell.focus();
        
        // Update cell reference in formula bar
        const cellRef = getCellReference(cell);
        updateCellReference(cellRef);
    }
    
    function selectRange(startCell, endCell) {
        clearSelection();
        
        const startCoords = getCellCoordinates(startCell);
        const endCoords = getCellCoordinates(endCell);
        
        const minRow = Math.min(startCoords.row, endCoords.row);
        const maxRow = Math.max(startCoords.row, endCoords.row);
        const minCol = Math.min(startCoords.col, endCoords.col);
        const maxCol = Math.max(startCoords.col, endCoords.col);
        
        selectedRange = [];
        
        for (let row = minRow; row <= maxRow; row++) {
            for (let col = minCol; col <= maxCol; col++) {
                const cell = getCellByCoordinates(row, col);
                if (cell) {
                    cell.classList.add('in-range');
                    selectedRange.push(cell);
                    
                    // Add border classes for range edges
                    if (row === minRow) cell.classList.add('range-top');
                    if (row === maxRow) cell.classList.add('range-bottom');
                    if (col === minCol) cell.classList.add('range-left');
                    if (col === maxCol) cell.classList.add('range-right');
                }
            }
        }
        
        // Update formula bar with range reference
        const rangeRef = `${getCellReference(startCell)}:${getCellReference(endCell)}`;
        updateCellReference(rangeRef);
    }
    
    function selectColumn(header) {
        clearSelection();
        const colIndex = Array.from(header.parentNode.children).indexOf(header);
        const cells = table.querySelectorAll(`tr td:nth-child(${colIndex + 1})`);
        
        cells.forEach(cell => {
            if (cell.classList.contains('cell')) {
                cell.classList.add('in-range');
                selectedRange.push(cell);
            }
        });
        
        header.classList.add('selected');
    }
    
    function selectRow(header) {
        clearSelection();
        const row = header.parentNode;
        const cells = row.querySelectorAll('.cell');
        
        cells.forEach(cell => {
            cell.classList.add('in-range');
            selectedRange.push(cell);
        });
        
        header.classList.add('selected');
    }
    
    function clearSelection() {
        table.querySelectorAll('.selected, .in-range, .range-top, .range-bottom, .range-left, .range-right')
             .forEach(cell => {
                 cell.classList.remove('selected', 'in-range', 'range-top', 'range-bottom', 'range-left', 'range-right');
             });
        selectedRange = [];
    }
    
    function extendSelection(cell) {
        if (selectedRange.length > 0) {
            const startCell = selectedRange[0];
            selectRange(startCell, cell);
        }
    }
    
    function startCellEdit(cell) {
        const currentValue = cell.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;
        input.className = 'cell-editor';
        input.style.cssText = `
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background: white;
            font-family: inherit;
            font-size: inherit;
            padding: 0.4rem 0.6rem;
        `;
        
        cell.innerHTML = '';
        cell.appendChild(input);
        input.focus();
        input.select();
        
        function finishEdit() {
            const newValue = input.value;
            cell.innerHTML = newValue;
            
            // Apply cell formatting based on content
            updateCellType(cell, newValue);
            
            // Trigger recalculation if needed
            if (newValue.startsWith('=')) {
                calculateFormula(cell, newValue);
            }
        }
        
        input.addEventListener('blur', finishEdit);
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                finishEdit();
                // Move to next cell down
                const nextCell = getAdjacentCell(cell, 'down');
                if (nextCell) selectCell(nextCell);
            } else if (e.key === 'Escape') {
                cell.innerHTML = currentValue;
            }
        });
    }
    
    function handleKeyboardNavigation(e, cell) {
        let nextCell = null;
        
        switch(e.key) {
            case 'ArrowUp':
                nextCell = getAdjacentCell(cell, 'up');
                break;
            case 'ArrowDown':
                nextCell = getAdjacentCell(cell, 'down');
                break;
            case 'ArrowLeft':
                nextCell = getAdjacentCell(cell, 'left');
                break;
            case 'ArrowRight':
                nextCell = getAdjacentCell(cell, 'right');
                break;
            case 'Enter':
                if (cell.classList.contains('editable')) {
                    startCellEdit(cell);
                }
                break;
            case 'Delete':
            case 'Backspace':
                if (cell.classList.contains('editable')) {
                    cell.textContent = '';
                    updateCellType(cell, '');
                }
                break;
        }
        
        if (nextCell) {
            e.preventDefault();
            selectCell(nextCell);
        }
    }
    
    // Helper functions
    function getCellReference(cell) {
        const coords = getCellCoordinates(cell);
        const colLetter = String.fromCharCode(65 + coords.col); // A, B, C...
        return `${colLetter}${coords.row + 1}`;
    }
    
    function getCellCoordinates(cell) {
        const row = cell.parentNode;
        const rowIndex = Array.from(row.parentNode.children).indexOf(row);
        const colIndex = Array.from(row.children).indexOf(cell);
        return { row: rowIndex, col: colIndex };
    }
    
    function getCellByCoordinates(row, col) {
        const rows = table.querySelectorAll('tr');
        if (rows[row] && rows[row].children[col]) {
            return rows[row].children[col];
        }
        return null;
    }
    
    function getAdjacentCell(cell, direction) {
        const coords = getCellCoordinates(cell);
        let newRow = coords.row;
        let newCol = coords.col;
        
        switch(direction) {
            case 'up': newRow--; break;
            case 'down': newRow++; break;
            case 'left': newCol--; break;
            case 'right': newCol++; break;
        }
        
        return getCellByCoordinates(newRow, newCol);
    }
    
    function updateCellType(cell, value) {
        // Remove existing type classes
        cell.classList.remove('formula', 'number', 'text', 'date', 'currency', 'error');
        
        if (value.startsWith('=')) {
            cell.classList.add('formula');
        } else if (!isNaN(value) && value !== '') {
            cell.classList.add('number');
        } else if (value.match(/^\$[\d,]+\.?\d*$/)) {
            cell.classList.add('currency');
        } else if (value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
            cell.classList.add('date');
        } else if (value.startsWith('#')) {
            cell.classList.add('error');
        } else {
            cell.classList.add('text');
        }
    }
    
    function updateFormulaBar(cell) {
        const formulaInput = document.querySelector('.formula-input');
        if (formulaInput) {
            formulaInput.value = cell.textContent;
        }
    }
    
    function updateCellReference(ref) {
        const cellRefElement = document.querySelector('.cell-ref');
        if (cellRefElement) {
            cellRefElement.textContent = ref;
        }
    }
}

// ===================================
// Formula Highlighting
// ===================================

function initializeFormulaHighlighting() {
    const formulaElements = document.querySelectorAll('.formula-bar, .excel-formula, .cell.formula');
    
    formulaElements.forEach(element => {
        highlightFormula(element);
    });
    
    // Real-time highlighting for formula inputs
    const formulaInputs = document.querySelectorAll('.formula-input');
    formulaInputs.forEach(input => {
        input.addEventListener('input', function() {
            highlightFormulaInput(this);
        });
    });
}

function highlightFormula(element) {
    const text = element.textContent || element.value;
    const highlighted = highlightExcelFormula(text);
    
    if (element.tagName === 'INPUT') {
        // For input elements, we'd need a more complex approach
        // This is a simplified version
        return;
    } else {
        element.innerHTML = highlighted;
    }
}

function highlightExcelFormula(formula) {
    if (!formula.startsWith('=')) {
        return formula;
    }
    
    return formula
        // Functions (SUM, AVERAGE, etc.)
        .replace(/\b([A-Z][A-Z0-9]*)\(/g, '<span class="excel-function">$1</span>(')
        // Cell references (A1, B2, etc.)
        .replace(/\b([A-Z]+[0-9]+)\b/g, '<span class="excel-reference">$1</span>')
        // Range references (A1:B5)
        .replace(/\b([A-Z]+[0-9]+):([A-Z]+[0-9]+)\b/g, '<span class="excel-reference">$1:$2</span>')
        // Operators
        .replace(/([+\-*/=<>])/g, '<span class="excel-operator">$1</span>')
        // Strings in quotes
        .replace(/"([^"]*)"/g, '<span class="excel-string">"$1"</span>')
        // Numbers
        .replace(/\b(\d+\.?\d*)\b/g, '<span class="excel-number">$1</span>');
}

function highlightFormulaInput(input) {
    // For real-time highlighting in inputs, we'd need to overlay
    // a div with the same styling and positioning
    // This is a placeholder for that functionality
    console.log('Highlighting formula:', input.value);
}

// ===================================
// Formula Calculation (Basic)
// ===================================

function calculateFormula(cell, formula) {
    try {
        // Remove the = sign
        const expression = formula.substring(1);
        
        // Basic formula evaluation (this would need to be much more robust)
        if (expression.startsWith('SUM(')) {
            const rangeMatch = expression.match(/SUM\(([A-Z]+[0-9]+):([A-Z]+[0-9]+)\)/);
            if (rangeMatch) {
                const result = calculateSumRange(rangeMatch[1], rangeMatch[2]);
                cell.textContent = result;
                cell.classList.add('number');
                return;
            }
        }
        
        // SECURE: Use safe formula evaluator instead of Function constructor
        if (!window.SafeFormulaEvaluator) {
            console.error('SafeFormulaEvaluator not loaded');
            cell.textContent = '#ERROR!';
            cell.classList.add('error');
            return;
        }
        
        const evaluator = new SafeFormulaEvaluator();
        const result = evaluator.evaluate(expression);
        
        if (result === '#ERROR!') {
            cell.textContent = result;
            cell.classList.add('error');
        } else {
            cell.textContent = result;
            cell.classList.add('number');
        }
        
    } catch (error) {
        cell.textContent = '#ERROR!';
        cell.classList.add('error');
    }
}

function calculateSumRange(startRef, endRef) {
    // This would need to actually parse the range and sum the values
    // Placeholder implementation
    return 42; // Placeholder result
}

// ===================================
// Interactive Excel Features
// ===================================

function addExcelInteractivity() {
    // Sheet tab switching
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('excel-sheet-tab')) {
            switchSheet(e.target);
        }
    });
    
    // Excel button interactions
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('excel-button')) {
            handleExcelButton(e.target);
        }
    });
}

function switchSheet(tab) {
    // Remove active class from all tabs
    const tabs = tab.parentNode.querySelectorAll('.excel-sheet-tab');
    tabs.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked tab
    tab.classList.add('active');
    
    // Show corresponding sheet content
    const sheetName = tab.textContent;
    console.log('Switching to sheet:', sheetName);
}

function handleExcelButton(button) {
    const action = button.dataset.action;
    
    switch(action) {
        case 'sort':
            console.log('Sorting data...');
            break;
        case 'filter':
            console.log('Filtering data...');
            break;
        case 'chart':
            console.log('Creating chart...');
            break;
        default:
            console.log('Button action:', action);
    }
}

// ===================================
// Data Bar Visualization
// ===================================

function addDataBars(column, maxValue = null) {
    const cells = document.querySelectorAll(column);
    const values = Array.from(cells).map(cell => parseFloat(cell.textContent) || 0);
    const max = maxValue || Math.max(...values);
    
    cells.forEach((cell, index) => {
        const value = values[index];
        const percentage = (value / max) * 100;
        
        cell.classList.add('data-bar');
        cell.style.setProperty('--bar-width', `${percentage}%`);
    });
}

// ===================================
// Export Functions
// ===================================

window.ExcelInteractive = {
    initializeExcelTables,
    highlightFormula,
    calculateFormula,
    addDataBars,
    addExcelInteractivity
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', addExcelInteractivity);