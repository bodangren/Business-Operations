# Charts and Financial Reports Remediation Plan

**Priority:** Medium  
**Files Affected:** 13  
**Issues Found:** 14  
**Estimated Effort:** 2-3 hours  

---

## Overview

Charts and financial reports components show good overall consistency (12 compliant components) but have inconsistencies in title sizing, axis styling, grid patterns, and column counts. These are primarily data visualization components used across multiple units.

---

## Issues Breakdown

### Issue 1: Inconsistent Chart Title Sizing

**Affected Files:** 5  
**Severity:** Low - visual inconsistency  

#### Problem:
Different chart components use different title sizes:
- ScatterChart.tsx uses `text-lg`
- BarChart.tsx uses `text-xl`
- PieChart.tsx uses `text-xl`
- FinancialDashboard.tsx uses `text-2xl`, `text-xl`, and `text-lg` inconsistently

**Current Code:**
```tsx
// ScatterChart.tsx (Line 48-49)
<CardTitle className="text-lg">Scatter Chart</CardTitle>

// BarChart.tsx (Line 254)
<CardTitle className="text-xl">Bar Chart</CardTitle>

// FinancialDashboard.tsx (Line 297, 301)
<CardTitle className="text-2xl text-blue-800">Financial Dashboard</CardTitle>
<CardTitle className="text-lg">Revenue</CardTitle>
```

**Fix:** Standardize to `text-xl` for all chart titles
```tsx
// Standard pattern
<CardTitle className="text-xl">Chart Title</CardTitle>

// For main dashboard titles
<CardTitle className="text-2xl">Dashboard Title</CardTitle>
```

**Files to Fix:**
- [ ] ScatterChart.tsx: Line 48-49 - Change `text-lg` to `text-xl`
- [ ] FinancialDashboard.tsx: Line 301 - Change `text-2xl text-blue-800` to `text-2xl`
- [ ] FinancialDashboard.tsx: Line 369, 420, 453, 496 - Change `text-lg` to `text-xl`

---

### Issue 2: Inconsistent Axis Styling

**Affected Files:** 4  
**Severity:** Low - visual inconsistency  

#### Problem:
Different components show/hide axis lines inconsistently:
- ScatterChart.tsx: `axisLine={false}`, `tickLine={false}`
- LineChart.tsx: `axisLine={true}` (default), `tickLine={false}`
- FinancialDashboard.tsx: `axisLine={true}`, `tickLine={true}`

**Current Code:**
```tsx
// ScatterChart.tsx (Line 98)
<XAxis axisLine={false} tickLine={false} />
<YAxis axisLine={false} tickLine={false} />

// LineChart.tsx (Line 88)
<XAxis axisLine={true} tickLine={false} />

// FinancialDashboard.tsx (Lines 378-380, 462-464)
<XAxis axisLine={true} tickLine={true} />
<YAxis axisLine={true} tickLine={true} />
```

**Fix:** Standardize to hide axis lines
```tsx
// Standard pattern - clean, minimal axis styling
<XAxis 
  dataKey="x" 
  axisLine={false} 
  tickLine={false}
  className="text-xs"
  tickMargin={8}
/>
<YAxis 
  axisLine={false} 
  tickLine={false}
  className="text-xs"
  tickMargin={8}
  tickFormatter={(value) => formatCurrency(value)}
/>
```

**Files to Fix:**
- [ ] LineChart.tsx: Line 88 - Add `axisLine={false}`
- [ ] FinancialDashboard.tsx: Lines 378-380, 462-464 - Change to `axisLine={false}`, `tickLine={false}`

---

### Issue 3: Inconsistent Grid Styling

**Affected Files:** 2  
**Severity:** Low - visual inconsistency  

#### Problem:
BarChart.tsx doesn't explicitly set `vertical={false}` while LineChart.tsx does

**Current Code:**
```tsx
// LineChart.tsx
<CartesianGrid vertical={false} stroke="var(--color-border)" />

// BarChart.tsx (Line 172)
<CartesianGrid stroke="var(--color-muted)" />
```

**Fix:** Standardize grid pattern
```tsx
// Standard pattern
<CartesianGrid 
  vertical={false} 
  stroke="var(--color-border)"
  strokeDasharray="5 5"
/>
```

**Files to Fix:**
- [ ] BarChart.tsx: Line 172 - Add `vertical={false}`, change stroke to `var(--color-border)`

---

### Issue 4: Inconsistent Column Grids in Financial Reports

**Affected Files:** 6  
**Severity:** Low - layout inconsistency  

#### Problem:
Financial report components use different column counts for stats/ratios:
- IncomeStatementSimple: 3-column grid
- IncomeStatementDetailed: 4-column grid
- BalanceSheetSimple: 4-column grid
- BalanceSheetDetailed: 6-column grid
- CashFlowStatementSimple: 3-column grid (implied)
- CashFlowStatementDetailed: 4-column grid

**Current Code:**
```tsx
// IncomeStatementSimple.tsx (Line 155)
<div className="grid grid-cols-3 gap-4">

// IncomeStatementDetailed.tsx (Line 309)
<div className="grid grid-cols-4 gap-4">

// BalanceSheetDetailed.tsx (Line 625)
<div className="grid grid-cols-6 gap-4">
```

**Fix:** Standardize to 4-column grid
```tsx
// Standard pattern
<div className="grid grid-cols-4 gap-4">
  {stats.map((stat) => (
    <div key={stat.label}>
      <p className="text-sm text-muted-foreground">{stat.label}</p>
      <p className="text-2xl font-bold">{stat.value}</p>
    </div>
  ))}
</div>

// For detailed reports with many ratios, use 2 rows of 4
<div className="grid grid-cols-4 gap-4">
  {/* First 4 ratios */}
</div>
<div className="grid grid-cols-4 gap-4 mt-4">
  {/* Next 4 ratios */}
</div>
```

**Files to Fix:**
- [ ] IncomeStatementSimple.tsx: Line 155 - Change `grid-cols-3` to `grid-cols-4`
- [ ] BalanceSheetDetailed.tsx: Line 625 - Change `grid-cols-6` to two rows of `grid-cols-4`
- [ ] CashFlowStatementSimple.tsx: Verify and standardize to 4 columns
- [ ] CashFlowStatementDetailed.tsx: Line 456 - Verify 4-column usage

---

### Issue 5: FinancialDashboard Custom Styling

**Affected Files:** 1  
**Severity:** Medium - deviates from standard patterns  

#### Problem:
FinancialDashboard.tsx uses custom styling that differs from standard patterns

**Issues:**
- Custom gradient background: `bg-gradient-to-r from-blue-50 to-indigo-50`
- Custom border colors: `border-blue-200`
- Custom CardTitle color: `text-blue-800`
- Custom Button styling: `border-blue-300 text-blue-700`
- Custom line stroke widths: `strokeWidth={3}` (others use `2`)
- Custom dot sizes: `r: 4, r: 6` (others use `r: 4`)

**Current Code:**
```tsx
// FinancialDashboard.tsx (Lines 297, 301)
<Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
  <CardTitle className="text-2xl text-blue-800">Financial Dashboard</CardTitle>
  
  <Button className="border-blue-300 text-blue-700">Export</Button>
  
  <Line strokeWidth={3} dot={{ r: 6 }} />
</Card>
```

**Fix:** Use standard component patterns
```tsx
// Standard pattern
<Card className="border-gray-200">
  <CardHeader>
    <CardTitle className="text-2xl">Financial Dashboard</CardTitle>
  </CardHeader>
  <CardContent>
    <Button variant="outline">Export</Button>
    
    <Line strokeWidth={2} dot={{ r: 4 }} />
  </CardContent>
</Card>
```

**Files to Fix:**
- [ ] FinancialDashboard.tsx: Line 297 - Remove custom gradient, use standard border
- [ ] FinancialDashboard.tsx: Line 301 - Remove custom text color
- [ ] FinancialDashboard.tsx: Line 313, 324 - Use standard Button variants
- [ ] FinancialDashboard.tsx: Lines 393-410 - Standardize stroke widths and dot sizes

---

### Issue 6: ScatterChart Currency Formatter

**Affected Files:** 1  
**Severity:** Low - inconsistency with other charts  

#### Problem:
ScatterChart.tsx uses hardcoded formatter while other charts use `formatCurrency` function

**Current Code:**
```tsx
// ScatterChart.tsx (Line 98)
<YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
```

**Fix:** Use standard formatCurrency function
```tsx
// Standard pattern
<YAxis tickFormatter={(value) => formatCurrency(value)} />
```

**Files to Fix:**
- [ ] ScatterChart.tsx: Line 98 - Replace with formatCurrency function

---

## Compliant Reference Components

### LineChart.tsx
**Why it's mostly compliant:**
- Good use of ChartContainer
- Consistent axis styling (except axisLine)
- Proper color variable usage with `var(--color-{key})`

### PieChart.tsx
**Why it's compliant:**
- Good use of ChartContainer
- Consistent legend positioning
- Proper Cell styling with stroke

### BreakEvenChart.tsx
**Why it's compliant:**
- Good Card wrapping
- Consistent use of ChartContainer
- Proper interactive controls

### IncomeStatementSimple.tsx, BalanceSheetSimple.tsx
**Why they're compliant:**
- Good use of Badge for status indicators
- Consistent LineItem component
- Proper color coding (green/blue/purple for margins)

---

## Implementation Checklist

### Phase 1: Chart Titles (30 min)
- [ ] ScatterChart.tsx: Change title to `text-xl`
- [ ] FinancialDashboard.tsx: Standardize title sizes

### Phase 2: Axis Styling (30 min)
- [ ] LineChart.tsx: Add `axisLine={false}`
- [ ] FinancialDashboard.tsx: Standardize axis styling

### Phase 3: Grid Styling (15 min)
- [ ] BarChart.tsx: Add `vertical={false}`

### Phase 4: Column Grids (45 min)
- [ ] IncomeStatementSimple.tsx: Change to 4-column grid
- [ ] BalanceSheetDetailed.tsx: Split 6-column into two 4-column rows
- [ ] CashFlowStatementSimple.tsx: Verify and standardize

### Phase 5: FinancialDashboard (45 min)
- [ ] Remove custom gradient background
- [ ] Standardize border colors
- [ ] Use standard Button variants
- [ ] Standardize stroke widths and dot sizes

### Phase 6: Testing (30 min)
- [ ] Run `npm run lint`
- [ ] Run `npm run typecheck`
- [ ] Manual test: Load each chart component
- [ ] Visual test: Compare before/after screenshots

---

## Testing Commands

```bash
# Lint check
cd bus-math-nextjs
npm run lint

# Type check
npm run typecheck

# Manual testing - load these pages
# /debug/charts (all chart types)
# /debug/financial-reports (all financial reports)
# /unit02/lesson03/phase-3 (financial statements)
```

---

## Notes

- **12 of 13 components** already have good patterns - mostly minor adjustments
- Changes are primarily visual consistency, not functional
- Preserve all existing data visualization logic
- Consider creating shared constants for:
  - Chart axis styling
  - Grid styling
  - Title sizing
  - Stroke widths and dot sizes
- Standardization will make future chart components easier to build
