# Business Simulations Remediation Plan

**Priority:** High  
**Files Affected:** 17  
**Issues Found:** 2  
**Estimated Effort:** 2-3 hours  

---

## Overview

Business simulations are core interactive learning experiences. 15 of 17 components (88%) already follow the standard visual pattern. Only 2 components need restructuring to match the established pattern.

---

## Compliant Pattern (15/17 Components)

The standard business simulation pattern includes:

```tsx
// Standard Business Simulation Layout
<Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-white">
  <CardHeader>
    <div className="flex justify-between items-center">
      <div>
        <CardTitle>Simulation Title</CardTitle>
        <CardDescription>Simulation description</CardDescription>
      </div>
      <Button variant="ghost" onClick={() => setShowInstructions(!showInstructions)}>
        {showInstructions ? <ChevronUp /> : <ChevronDown />}
      </Button>
    </div>
  </CardHeader>
  {showInstructions && (
    <CardContent className="space-y-4">
      <p className="text-sm text-muted-foreground">Instructions...</p>
    </CardContent>
  )}
</Card>

// 4-Column Metric Grid
<div className="grid grid-cols-4 gap-4 mb-6">
  {metrics.map((metric) => (
    <Card key={metric.label}>
      <CardContent className="pt-6">
        <metric.icon className="h-5 w-5 text-purple-500 mb-2" />
        <p className="text-sm text-muted-foreground">{metric.label}</p>
        <p className="text-2xl font-bold">{formatCurrency(metric.value)}</p>
      </CardContent>
    </Card>
  ))}
</div>

// Fixed-Position Notification Toasts
<div className="fixed bottom-4 right-4 space-y-2 z-50">
  {notifications.map((notification) => (
    <Card className={`border-l-4 ${notification.color}`}>
      <CardContent className="p-3">
        <p className="text-sm">{notification.message}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

### Compliant Components (No Changes Needed):

- InventoryManager.tsx
- LemonadeStand.tsx
- PitchPresentationBuilder.tsx
- ErrorCheckingSystem.tsx
- CashFlowChallenge.tsx
- DepreciationMethodComparisonSimulator.tsx
- AssetRegisterSimulator.tsx
- BudgetBalancer.tsx
- StartupJourney.tsx
- ChartLinkingSimulator.tsx
- ScenarioSwitchShowTell.tsx
- DynamicMethodSelector.tsx
- MethodComparisonSimulator.tsx
- InventoryAlgorithmShowTell.tsx
- PriceLabCommandCenter.tsx

---

## Issues Breakdown

### Issue 1: RestaurantStaffingSimulator.tsx

**Location:** bus-math-nextjs/components/business-simulations/RestaurantStaffingSimulator.tsx  
**Problem:** Uses completely different visual architecture - single wrapper Card, no gradient header, no metric grid, no instruction panel  

**Current Pattern:**
```tsx
// Current - non-compliant
<Card>
  <CardHeader>
    <CardTitle>Restaurant Staffing</CardTitle>
  </CardHeader>
  <CardContent>
    {/* All content in single Card */}
    <div className="space-y-4">
      {/* Staff controls */}
      {/* Demand display */}
      {/* Results */}
    </div>
  </CardContent>
</Card>
```

**Fix:** Restructure to standard pattern
```tsx
// Fixed - compliant pattern
<div className="space-y-6">
  {/* Gradient Header Card */}
  <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-white">
    <CardHeader>
      <div className="flex justify-between items-center">
        <div>
          <CardTitle>Restaurant Staffing</CardTitle>
          <CardDescription>Manage staff levels to meet changing demand</CardDescription>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setShowInstructions(!showInstructions)}
        >
          {showInstructions ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
    </CardHeader>
    {showInstructions && (
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Balance your staff levels with customer demand throughout the day.
        </p>
        <ul className="space-y-2 text-sm">
          <li>• <strong>Green</strong>: Efficient - right-sized staff</li>
          <li>• <strong>Yellow</strong>: Warning - slightly over/under staffed</li>
          <li>• <strong>Red</strong>: Critical - significantly over/under staffed</li>
        </ul>
      </CardContent>
    )}
  </Card>

  {/* 4-Column Metric Grid */}
  <div className="grid grid-cols-4 gap-4">
    <Card className="border-blue-200">
      <CardContent className="pt-6">
        <Users className="h-5 w-5 text-blue-600 mb-2" />
        <p className="text-sm text-muted-foreground">Current Staff</p>
        <p className="text-2xl font-bold">{staffCount}</p>
      </CardContent>
    </Card>
    <Card className="border-green-200">
      <CardContent className="pt-6">
        <TrendingUp className="h-5 w-5 text-green-600 mb-2" />
        <p className="text-sm text-muted-foreground">Demand Level</p>
        <p className="text-2xl font-bold">{demandLevel}%</p>
      </CardContent>
    </Card>
    <Card className="border-purple-200">
      <CardContent className="pt-6">
        <DollarSign className="h-5 w-5 text-purple-600 mb-2" />
        <p className="text-sm text-muted-foreground">Revenue</p>
        <p className="text-2xl font-bold">${revenue}</p>
      </CardContent>
    </Card>
    <Card className="border-amber-200">
      <CardContent className="pt-6">
        <AlertCircle className="h-5 w-5 text-amber-600 mb-2" />
        <p className="text-sm text-muted-foreground">Efficiency</p>
        <p className="text-2xl font-bold">{efficiency}%</p>
      </CardContent>
    </Card>
  </div>

  {/* Main Simulation Card */}
  <Card className="border-gray-200">
    <CardHeader>
      <CardTitle>Staffing Controls</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {/* Staff controls */}
      {/* Demand display */}
      {/* Results */}
    </CardContent>
  </Card>

  {/* Fixed Notification Toasts */}
  <div className="fixed bottom-4 right-4 space-y-2 z-50">
    {notifications.map((notification, index) => (
      <Card 
        key={index}
        className={`border-l-4 ${
          notification.type === 'success' ? 'border-l-green-500 bg-green-50' :
          notification.type === 'warning' ? 'border-l-yellow-500 bg-yellow-50' :
          'border-l-red-500 bg-red-50'
        }`}
      >
        <CardContent className="p-3">
          <p className="text-sm">{notification.message}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
```

**Files to Fix:**
- [ ] RestaurantStaffingSimulator.tsx: Restructure to standard pattern (2-3 hours)
  - [ ] Add gradient header Card with show/hide instructions
  - [ ] Create 4-column metric grid
  - [ ] Move controls to separate Card
  - [ ] Add notification toast system
  - [ ] Apply semantic color scheme (blue, green, purple, amber)

---

### Issue 2: CrossSheetLinkSimulator.tsx

**Location:** bus-math-nextjs/components/business-simulations/CrossSheetLinkSimulator.tsx  
**Problem:** Simplified layout without standard visual hierarchy  

**Current Pattern:**
```tsx
// Current - non-compliant
<Card>
  <CardHeader>
    <CardTitle>Cross-Sheet Linking</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Custom layout */}
    <div className="grid grid-cols-2 gap-4">
      {/* Source sheet */}
      {/* Target sheet */}
    </div>
  </CardContent>
</Card>
```

**Fix:** Restructure to standard pattern
```tsx
// Fixed - compliant pattern
<div className="space-y-6">
  {/* Gradient Header Card */}
  <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-white">
    <CardHeader>
      <div className="flex justify-between items-center">
        <div>
          <CardTitle>Cross-Sheet Linking</CardTitle>
          <CardDescription>Connect data between sheets</CardDescription>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setShowInstructions(!showInstructions)}
        >
          {showInstructions ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
    </CardHeader>
    {showInstructions && (
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Learn how to create dynamic links between different sheets in your workbook.
        </p>
        <ul className="space-y-2 text-sm">
          <li>• Select a source cell to link from</li>
          <li>• Choose a target cell to link to</li>
          <li>• See how changes propagate automatically</li>
        </ul>
      </CardContent>
    )}
  </Card>

  {/* 4-Column Metric Grid */}
  <div className="grid grid-cols-4 gap-4">
    <Card className="border-blue-200">
      <CardContent className="pt-6">
        <FileSpreadsheet className="h-5 w-5 text-blue-600 mb-2" />
        <p className="text-sm text-muted-foreground">Source Sheet</p>
        <p className="text-2xl font-bold">{sourceSheet}</p>
      </CardContent>
    </Card>
    <Card className="border-green-200">
      <CardContent className="pt-6">
        <FileSpreadsheet className="h-5 w-5 text-green-600 mb-2" />
        <p className="text-sm text-muted-foreground">Target Sheet</p>
        <p className="text-2xl font-bold">{targetSheet}</p>
      </CardContent>
    </Card>
    <Card className="border-purple-200">
      <CardContent className="pt-6">
        <Link className="h-5 w-5 text-purple-600 mb-2" />
        <p className="text-sm text-muted-foreground">Active Links</p>
        <p className="text-2xl font-bold">{activeLinks}</p>
      </CardContent>
    </Card>
    <Card className="border-amber-200">
      <CardContent className="pt-6">
        <RefreshCw className="h-5 w-5 text-amber-600 mb-2" />
        <p className="text-sm text-muted-foreground">Updates</p>
        <p className="text-2xl font-bold">{updateCount}</p>
      </CardContent>
    </Card>
  </div>

  {/* Main Simulator Card */}
  <Card className="border-gray-200">
    <CardHeader>
      <CardTitle>Link Builder</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-6">
        {/* Source sheet */}
        {/* Target sheet */}
      </div>
    </CardContent>
  </Card>

  {/* Fixed Notification Toasts */}
  <div className="fixed bottom-4 right-4 space-y-2 z-50">
    {notifications.map((notification, index) => (
      <Card 
        key={index}
        className={`border-l-4 ${
          notification.type === 'success' ? 'border-l-green-500 bg-green-50' :
          notification.type === 'info' ? 'border-l-blue-500 bg-blue-50' :
          'border-l-red-500 bg-red-50'
        }`}
      >
        <CardContent className="p-3">
          <p className="text-sm">{notification.message}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
```

**Files to Fix:**
- [ ] CrossSheetLinkSimulator.tsx: Restructure to standard pattern (1-2 hours)
  - [ ] Add gradient header Card with show/hide instructions
  - [ ] Create 4-column metric grid
  - [ ] Reorganize layout into separate Cards
  - [ ] Add notification toast system
  - [ ] Apply semantic color scheme

---

## Implementation Checklist

### Phase 1: RestaurantStaffingSimulator (2 hours)
- [ ] Add gradient header Card
- [ ] Add instruction panel with show/hide
- [ ] Create 4-column metric grid
- [ ] Add notification toast system
- [ ] Apply semantic color scheme
- [ ] Test functionality preserved

### Phase 2: CrossSheetLinkSimulator (1 hour)
- [ ] Add gradient header Card
- [ ] Add instruction panel with show/hide
- [ ] Create 4-column metric grid
- [ ] Add notification toast system
- [ ] Apply semantic color scheme
- [ ] Test functionality preserved

### Phase 3: Testing (30 min)
- [ ] Run `npm run lint`
- [ ] Run `npm run typecheck`
- [ ] Manual test: Load both simulations
- [ ] Functional test: Ensure all interactions work
- [ ] Visual test: Compare with compliant components

---

## Testing Commands

```bash
# Lint check
cd bus-math-nextjs
npm run lint

# Type check
npm run typecheck

# Manual testing - load these simulations
# Find pages that use RestaurantStaffingSimulator
# Find pages that use CrossSheetLinkSimulator
```

---

## Notes

- **88% already compliant** - quick wins for visual consistency
- Both components need significant restructure, not just styling tweaks
- Preserve all existing functionality - only change visual layout
- Reference compliant components (LemonadeStand.tsx, BudgetBalancer.tsx) for exact patterns
- Consider creating a shared simulation wrapper component to enforce consistency
- Semantic colors: blue (info), green (success), purple (primary), yellow/amber (warning), red (error)
