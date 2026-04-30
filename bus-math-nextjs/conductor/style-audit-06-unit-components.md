# Unit Components Remediation Plan

**Priority:** High  
**Files Affected:** 10  
**Issues Found:** 21  
**Estimated Effort:** 3-4 hours  

---

## Overview

Unit components are core curriculum structure files used across all units. The main issues are inconsistent Card border styling, inconsistent Badge usage, inconsistent color schemes, and missing Card structure in some components.

---

## Issues Breakdown

### Issue 1: Inconsistent Card Border Styling

**Affected Files:** 7  
**Severity:** Medium - visual inconsistency  

#### Problem:
Unit components use three different Card border approaches:
1. Colored left borders: `border-l-4 border-l-blue-500` (UnitIntroduction)
2. Full border colors: `border-purple-200`, `border-indigo-200`, `border-green-200`, `border-blue-200`
3. Default borders: No custom border styling (Prerequisites, UnitOverview)

**Current Examples:**
```tsx
// UnitIntroduction.tsx - colored left borders
<Card className="border-l-4 border-l-blue-500">
<Card className="border-l-4 border-l-green-500">
<Card className="border-l-4 border-l-purple-500">

// LearningSequence.tsx - full border colors
<Card className="border-purple-200">

// StudentChoices.tsx - full border colors
<Card className="border-indigo-200">

// Prerequisites.tsx - default borders
<Card>  // No custom border
```

**Fix:** Standardize on full border colors with semantic meaning
```tsx
// Standard pattern
<Card className="border-blue-200">    {/* Information/primary */}
<Card className="border-green-200">   {/* Success/complete */}
<Card className="border-purple-200">  {/* Learning/practice */}
<Card className="border-amber-200">   {/* Warning/attention */}
```

**Files to Fix:**
- [ ] UnitIntroduction.tsx: Replace colored left borders with full border colors
- [ ] LearningSequence.tsx: Keep `border-purple-200` (already compliant)
- [ ] StudentChoices.tsx: Keep `border-indigo-200` (already compliant)
- [ ] AssessmentOverview.tsx: Keep `border-green-200` and `border-blue-200`
- [ ] DrivingQuestion.tsx: Remove gradient, use standard border
- [ ] Prerequisites.tsx: Add appropriate border colors
- [ ] UnitOverview.tsx: Add appropriate border colors

---

### Issue 2: Inconsistent Section Headers

**Affected Files:** 3  
**Severity:** Medium - visual hierarchy  

#### Problem:
Different section header patterns used:
- Most use `text-2xl font-semibold` with icons
- UnitVocabulary uses `text-lg font-semibold` (smaller)
- UnitIntroduction uses `text-4xl font-bold` for main title (larger)

**Current Code:**
```tsx
// Most components (correct pattern)
<h2 className="text-2xl font-semibold flex items-center gap-2">
  <Icon className="h-6 w-6 text-blue-600" />
  Section Title
</h2>

// UnitVocabulary.tsx (incorrect - too small)
<h3 className="text-lg font-semibold">Vocabulary</h3>

// UnitIntroduction.tsx (incorrect - too large)
<h1 className="text-4xl font-bold">Unit Introduction</h1>
```

**Fix:** Standardize to `text-2xl font-semibold`
```tsx
// Standard pattern
<h2 className="text-2xl font-semibold flex items-center gap-2">
  <Icon className="h-6 w-6 text-blue-600" />
  Section Title
</h2>
```

**Files to Fix:**
- [ ] UnitVocabulary.tsx: Line 36 - Change `text-lg` to `text-2xl`
- [ ] UnitIntroduction.tsx: Line 27 - Change `text-4xl font-bold` to `text-2xl font-semibold`
- [ ] UnitOverview.tsx: Add icon to section header

---

### Issue 3: Inconsistent Badge Usage

**Affected Files:** 5  
**Severity:** Medium - maintainability  

#### Problem:
Many components use custom Badge background classes instead of standard variants.

**Current Code:**
```tsx
// LearningSequence.tsx
<Badge className="bg-purple-100 text-purple-800">Purple Badge</Badge>

// StudentChoices.tsx
<Badge className="bg-indigo-100 text-indigo-800">Indigo Badge</Badge>

// UnitHeader.tsx
<Badge className="bg-green-100 text-green-800">Green Badge</Badge>
<Badge className="bg-yellow-100 text-yellow-800">Yellow Badge</Badge>
<Badge className="bg-red-100 text-red-800">Red Badge</Badge>

// AssessmentOverview.tsx - mixed usage
<Badge variant="outline">Outline Badge</Badge>
<Badge variant="secondary">Secondary Badge</Badge>
```

**Fix:** Use standard Badge variants
```tsx
// Standard variants
<Badge variant="outline">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>

// If custom colors needed, use semantic tokens
<Badge className="bg-success/10 text-success">Success</Badge>
<Badge className="bg-warning/10 text-warning">Warning</Badge>
```

**Files to Fix:**
- [ ] LearningSequence.tsx: Line 25, 42 - Replace custom Badge classes
- [ ] StudentChoices.tsx: Line 30 - Replace custom Badge classes
- [ ] UnitHeader.tsx: Lines 13-15 - Replace custom Badge classes, replace emoji with Lucide icons
- [ ] AssessmentOverview.tsx: Standardize Badge variants
- [ ] UnitIntroduction.tsx: Line 24 - Standardize Badge usage

---

### Issue 4: Inconsistent Color Schemes

**Affected Files:** 9  
**Severity:** Medium - visual coherence  

#### Problem:
Each unit component uses different color themes:
- LearningSequence: Purple
- UnitVocabulary: No clear theme
- UnitIntroduction: Blue, green, purple mixed
- Prerequisites: Blue, green, yellow mixed
- StudentChoices: Indigo
- AssessmentOverview: Green, blue mixed
- DrivingQuestion: Blue
- UnitOverview: Blue, orange, green mixed
- UnitHeader: Green, yellow, red mixed

**Fix:** Establish unit-level color scheme or use semantic tokens
```tsx
// Option 1: Unit-specific themes
// Unit 01-02: Blue theme
// Unit 03-04: Purple theme
// Unit 05-06: Green theme
// Unit 07-08: Orange theme

// Option 2: Semantic colors (recommended)
const COLORS = {
  primary: 'blue',      // Main content
  success: 'green',     // Completed/success
  learning: 'purple',   // Learning activities
  warning: 'amber',     // Important notes
  info: 'cyan'          // Information
}
```

**Files to Fix:**
- [ ] All 9 unit components: Apply consistent color scheme
- [ ] Establish color theme mapping in documentation
- [ ] Update all icon colors to match scheme
- [ ] Update all text colors to match scheme

---

### Issue 5: Missing Card Structure

**Affected Files:** 3  
**Severity:** Medium - inconsistent structure  

#### Problem:
Some components don't use proper Card structure.

**Files:**

**UnitVocabulary.tsx:**
- Does NOT use Card component at all
- Uses custom div with `border bg-card shadow-sm hover:bg-accent`

**Fix:**
```tsx
// Current (incorrect)
<div className="border bg-card shadow-sm hover:bg-accent">
  <h3 className="text-lg font-semibold">Vocabulary</h3>
  {/* Content */}
</div>

// Fixed (compliant)
<Card className="border-blue-200">
  <CardHeader>
    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
      <BookOpen className="h-6 w-6 text-blue-600" />
      Vocabulary
    </CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**DrivingQuestion.tsx:**
- Uses Card without CardHeader
- Only has CardContent

**Fix:**
```tsx
// Current (incomplete structure)
<Card className="border-l-4 border-l-primary bg-gradient-to-r from-blue-50/50 to-transparent">
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>

// Fixed (complete structure)
<Card className="border-blue-200">
  <CardHeader>
    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
      <HelpCircle className="h-6 w-6 text-blue-600" />
      Driving Question
    </CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**UnitHeader.tsx:**
- No Card wrapper, uses header directly

**Fix:**
```tsx
// Current (no Card wrapper)
<header className="mb-8">
  <h1>Unit {unitNumber}</h1>
  {/* Content */}
</header>

// Fixed (with Card wrapper)
<Card className="border-blue-200 mb-8">
  <CardContent className="pt-6">
    <h1 className="text-3xl font-bold mb-2">Unit {unitNumber}</h1>
    {/* Content */}
  </CardContent>
</Card>
```

**Files to Fix:**
- [ ] UnitVocabulary.tsx: Wrap in Card component with CardHeader
- [ ] DrivingQuestion.tsx: Add CardHeader, remove gradient
- [ ] UnitHeader.tsx: Wrap in Card component

---

### Issue 6: Inconsistent Custom Backgrounds

**Affected Files:** 4  
**Severity:** Low - maintainability  

#### Problem:
Various custom background classes used without standardization.

**Current Examples:**
```tsx
// UnitIntroduction.tsx
<div className="bg-blue-50">
<div className="bg-yellow-50">

// DrivingQuestion.tsx
<div className="bg-gradient-to-r from-blue-50/50 to-transparent">
<div className="bg-muted/50">

// UnitVocabulary.tsx
<div className="bg-muted/30">
```

**Fix:** Standardize on semantic backgrounds
```tsx
// Information boxes
<div className="bg-blue-50/50 border border-blue-200 rounded-lg p-4">

// Warning boxes
<div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4">

// Muted boxes
<div className="bg-muted/50 border border-border rounded-lg p-4">
```

**Files to Fix:**
- [ ] UnitIntroduction.tsx: Lines 47, 79 - Standardize backgrounds
- [ ] DrivingQuestion.tsx: Line 20, 31 - Remove gradient, use standard background
- [ ] UnitVocabulary.tsx: Line 77 - Use standard background
- [ ] AssessmentOverview.tsx: Line 43 - Standardize background

---

## Compliant Reference Component

### UnitTemplate.tsx
**Why it's compliant:**
- Layout wrapper only (no visual issues)
- Properly composes other unit components
- Consistent spacing (`space-y-12`)

---

## Implementation Checklist

### Phase 1: Card Structure (1.5 hours)
- [ ] UnitVocabulary.tsx: Add Card wrapper with CardHeader
- [ ] DrivingQuestion.tsx: Add CardHeader, remove gradient
- [ ] UnitHeader.tsx: Add Card wrapper
- [ ] UnitIntroduction.tsx: Add CardHeader where missing

### Phase 2: Border Styling (45 min)
- [ ] UnitIntroduction.tsx: Replace left borders with full borders
- [ ] DrivingQuestion.tsx: Remove gradient, add standard border
- [ ] Prerequisites.tsx: Add border colors
- [ ] UnitOverview.tsx: Add border colors

### Phase 3: Section Headers (30 min)
- [ ] UnitVocabulary.tsx: Change header size to `text-2xl`
- [ ] UnitIntroduction.tsx: Change header size to `text-2xl`
- [ ] UnitOverview.tsx: Add icon to header

### Phase 4: Badge Usage (45 min)
- [ ] LearningSequence.tsx: Standardize Badge variants
- [ ] StudentChoices.tsx: Standardize Badge variants
- [ ] UnitHeader.tsx: Standardize Badge variants, replace emoji with Lucide icons
- [ ] AssessmentOverview.tsx: Standardize Badge variants
- [ ] UnitIntroduction.tsx: Standardize Badge usage

### Phase 5: Color Scheme (30 min)
- [ ] Document unit color theme mapping
- [ ] Apply consistent colors across all components
- [ ] Update icon colors
- [ ] Update text colors

### Phase 6: Testing (30 min)
- [ ] Run `npm run lint`
- [ ] Run `npm run typecheck`
- [ ] Manual test: Load each unit component
- [ ] Visual test: Compare before/after screenshots

---

## Testing Commands

```bash
# Lint check
cd bus-math-nextjs
npm run lint

# Type check
npm run typecheck

# Manual testing - load unit overview pages
# /unit/01 (uses multiple unit components)
# /unit/02
# /unit/03
```

---

## Notes

- **1 of 10 components compliant** (UnitTemplate is just a wrapper)
- **21 specific issues** across 9 components
- Changes are primarily structural and styling
- Preserve all existing functionality
- Consider creating shared components for:
  - Section header pattern
  - Badge wrapper
  - Info box component
- Color scheme decision: Semantic colors (recommended) vs unit-specific themes
- Standardization will improve maintainability across all units
