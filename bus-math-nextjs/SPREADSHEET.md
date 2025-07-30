# Spreadsheet Simulator Implementation Guide

## Overview
This document provides detailed instructions for implementing an Excel-like spreadsheet simulator for the Business Operations math curriculum using the `react-spreadsheet` library.

## Installation

Install the required dependencies:

```bash
npm install react react-dom scheduler react-spreadsheet
```

## Requirements

### Core Functionality
The spreadsheet simulator must provide:

1. **Excel-like Grid Interface**
   - Rows labeled 1, 2, 3, etc.
   - Columns labeled A, B, C, etc.
   - Cell selection and navigation
   - Built-in formula evaluation

2. **Formula Support**
   - Basic arithmetic: `+`, `-`, `*`, `/`, `()`
   - Cell references: `A1`, `B2`, `C10`, etc.
   - Range references: `A1:A10`, `B2:D5`
   - Common Excel functions via Fast Formula Parser:
     - `SUM(range)` - Add values
     - `AVERAGE(range)` - Calculate mean
     - `MIN(range)` - Find minimum
     - `MAX(range)` - Find maximum
     - `COUNT(range)` - Count numeric values
     - `IF(condition, true_value, false_value)` - Conditional logic
     - `ROUND(number, digits)` - Round to decimal places

3. **Educational Features**
   - Read-only cells for pre-filled data
   - Controlled component for state management
   - Custom column and row labels
   - Formula validation capabilities

4. **Security Features**
   - Safe formula evaluation through Fast Formula Parser
   - No direct `eval()` usage
   - Protected against code injection

## Implementation Approach

### Using react-spreadsheet Library
The `react-spreadsheet` library provides:
- Excel-like grid interface out of the box
- Built-in formula evaluation via Fast Formula Parser
- TypeScript support
- Customizable cell properties
- Controlled component pattern

**Pros:**
- Mature, well-tested library
- Built-in formula parsing and evaluation
- Excel-accurate behavior
- TypeScript support
- Active maintenance

**Cons:**
- Less customization than custom implementation
- Dependency on external library
- Learning curve for library-specific patterns

## Implementation Steps

### Phase 1: Basic Setup
1. Install `react-spreadsheet` and dependencies
2. Create basic `SpreadsheetWrapper.tsx` component
3. Implement simple data structure with cell values
4. Test basic grid functionality

### Phase 2: Data Integration
1. Set up controlled component with `onChange` handler
2. Implement proper TypeScript types (`Matrix<CellBase>`)
3. Add custom column and row labels
4. Test state management

### Phase 3: Educational Features
1. Add read-only cells using `readOnly: true` property
2. Create preset data templates for curriculum units
3. Implement formula validation helpers
4. Add export/import functionality

### Phase 4: Custom Formula Parser (Optional)
1. Create custom formula parser if needed
2. Override specific Excel functions
3. Add curriculum-specific functions
4. Test formula evaluation security

### Phase 5: Curriculum Integration
1. Create preset spreadsheet templates for each unit
2. Unit-specific configurations
3. Integration with existing component system

## Curriculum-Specific Requirements

### Unit 1 (Smart Ledger Launch)
- T-account layouts
- Basic arithmetic for debits/credits
- Account balance calculations

### Unit 2 (Month-End Wizard)
- Adjusting entry calculations
- Trial balance automation
- Error checking formulas

### Unit 3 (Three-Statement Storyboard)
- Financial statement linking
- Ratio calculations
- Percentage formulas

### Unit 4 (Data-Driven Café)
- Statistical functions (AVERAGE, MIN, MAX)
- FORECAST.LINEAR for projections
- Data cleaning functions

### Unit 5 (PayDay Simulator)
- Payroll calculations with tax tables
- XLOOKUP/VLOOKUP for tax brackets
- Time-based calculations

### Unit 6 (PriceLab Challenge)
- Break-even analysis formulas
- Cost-Volume-Profit modeling
- Goal Seek simulation

### Unit 7 (Asset & Inventory Tracker)
- Depreciation calculations (SLN, DDB)
- FIFO/LIFO inventory costing
- Array formulas for layer costing

### Unit 8 (Year-1 Startup Model)
- Complex financial modeling
- Scenario analysis with data tables
- Cross-sheet formula linking

## Basic Usage Examples

### Simple Spreadsheet
```typescript
import { useState } from "react";
import Spreadsheet from "react-spreadsheet";
import type { Matrix, CellBase } from "react-spreadsheet";

const SimpleSpreadsheet = () => {
  const [data, setData] = useState<Matrix<CellBase>>([
    [{ value: "Product" }, { value: "Price" }, { value: "Quantity" }],
    [{ value: "Widget A" }, { value: 10.50 }, { value: 5 }],
    [{ value: "Widget B" }, { value: 15.25 }, { value: 3 }],
  ]);

  return <Spreadsheet data={data} onChange={setData} />;
};
```

### With Custom Labels and Read-Only Cells
```typescript
import { useState } from "react";
import Spreadsheet from "react-spreadsheet";
import type { Matrix, CellBase } from "react-spreadsheet";

const EducationalSpreadsheet = () => {
  const columnLabels = ["Item", "Cost", "Qty", "Total"];
  const rowLabels = ["Header", "Product 1", "Product 2", "Totals"];
  
  const [data, setData] = useState<Matrix<CellBase>>([
    [
      { value: "Item", readOnly: true },
      { value: "Cost", readOnly: true },
      { value: "Qty", readOnly: true },
      { value: "Total", readOnly: true }
    ],
    [
      { value: "Widget A", readOnly: true },
      { value: 10.50 },
      { value: 5 },
      { value: "=B2*C2" } // Formula cell
    ],
    [
      { value: "Widget B", readOnly: true },
      { value: 15.25 },
      { value: 3 },
      { value: "=B3*C3" } // Formula cell
    ],
    [
      { value: "TOTAL", readOnly: true },
      { value: "=SUM(B2:B3)" },
      { value: "=SUM(C2:C3)" },
      { value: "=SUM(D2:D3)" }
    ]
  ]);

  return (
    <Spreadsheet
      data={data}
      onChange={setData}
      columnLabels={columnLabels}
      rowLabels={rowLabels}
    />
  );
};
```

### Custom Formula Parser (if needed)
```typescript
import Spreadsheet, { createFormulaParser } from "react-spreadsheet";
import type { Matrix, CellBase } from "react-spreadsheet";

// Custom parser to disable certain functions or add new ones
const customCreateFormulaParser = (data: Matrix<CellBase>) =>
  createFormulaParser(data, {
    // Override or disable functions
    SUM: undefined, // Disable SUM function
    // Add custom functions here if needed
  });

const CustomSpreadsheet = () => {
  const [data, setData] = useState<Matrix<CellBase>>([]);
  
  return (
    <Spreadsheet
      data={data}
      onChange={setData}
      createFormulaParser={customCreateFormulaParser}
    />
  );
};
```

## File Structure
```
src/components/spreadsheet/
├── SpreadsheetWrapper.tsx       # Main wrapper component
├── SpreadsheetTemplates.tsx     # Pre-built templates for units
├── SpreadsheetHelpers.ts        # Utility functions
└── index.ts                     # Exports

src/app/debug/spreadsheet/
└── page.tsx                     # Debug/testing page
```

## Key Design Decisions

### Data Structure
Uses react-spreadsheet's built-in types:
```typescript
import type { Matrix, CellBase } from "react-spreadsheet";

interface CellBase {
  value: string | number;
  readOnly?: boolean;
  className?: string;
  // Other react-spreadsheet properties
}

type SpreadsheetData = Matrix<CellBase>;
```

### Formula Evaluation
- React-spreadsheet handles formula evaluation automatically
- Uses Fast Formula Parser for Excel-compatible functions
- Formulas are evaluated when cell is committed
- Results are displayed in cells, formulas shown in formula bar (if implemented)

### Error Handling
- Invalid formulas: Handled by Fast Formula Parser
- Shows appropriate error messages in cells
- Built-in protection against code injection

## Testing Requirements

### Component Tests
- Basic spreadsheet rendering and interaction
- State management with onChange handler
- Read-only cell behavior
- Custom labels functionality

### Formula Tests
- Built-in Excel functions (SUM, AVERAGE, etc.)
- Cell reference resolution
- Error handling for invalid formulas
- Custom formula parser overrides (if implemented)

### Educational Tests
- Each curriculum unit's specific requirements
- Formula validation accuracy
- Student workflow simulation
- Template initialization

## Security Features
- ✅ Uses Fast Formula Parser (no direct `eval()`)
- ✅ Built-in protection against code injection
- ✅ Safe formula evaluation through library
- ✅ Input validation handled by react-spreadsheet
- ✅ No dynamic code execution in user formulas

## Performance Considerations
- React-spreadsheet handles virtualization internally
- Built-in optimization for large datasets
- Efficient formula recalculation
- Minimal re-rendering with proper state management

## Accessibility Requirements
- Built-in keyboard navigation support
- Screen reader compatibility
- Focus management handled by library
- ARIA attributes for grid structure

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness for tablet use
- Touch interaction support built-in

## Next Steps for Implementation

### Immediate Tasks
1. Install dependencies: `npm install react react-dom scheduler react-spreadsheet`
2. Create basic wrapper component
3. Set up TypeScript types
4. Test basic functionality

### Integration Tasks
1. Create curriculum-specific templates
2. Add formula validation helpers
3. Integrate with existing UI system
4. Create debug/testing pages

### Advanced Features
1. Custom formula parser (if needed)
2. Export/import functionality
3. Formula validation system
4. Integration with unit-specific data

---

## Migration Benefits

### Why react-spreadsheet is the Right Choice
1. **Mature Library**: Well-tested and maintained
2. **Excel Compatibility**: Uses Fast Formula Parser for accurate Excel behavior
3. **TypeScript Support**: Full type safety out of the box
4. **Security**: Built-in protection against code injection
5. **Performance**: Optimized for large datasets
6. **Flexibility**: Can customize through props and custom parsers

### Reduced Development Time
- No need to build grid infrastructure from scratch
- Formula evaluation already implemented
- Error handling built-in
- Accessibility features included

---

## Getting Started Checklist

1. [ ] Install react-spreadsheet dependencies
2. [ ] Create basic SpreadsheetWrapper component
3. [ ] Test simple data rendering
4. [ ] Add controlled state management
5. [ ] Implement read-only cells
6. [ ] Create curriculum templates
7. [ ] Add formula validation
8. [ ] Integration testing with existing components
9. [ ] Create debug page for testing
10. [ ] Document usage patterns for other developers