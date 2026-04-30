# Teacher Pages Remediation Plan

**Priority:** Low  
**Files Affected:** 17  
**Issues Found:** 5  
**Estimated Effort:** 1-2 hours  

---

## Overview

Teacher pages are internal dashboard pages for instructors. The main issues are inconsistent Badge usage, excessive manual color classes, and layout container variations. Since these are internal-facing, priority is lower than student pages.

---

## Issues Breakdown

### Issue 1: Inconsistent Badge Component Usage

**Affected Files:** 1  
**Severity:** Low - visual inconsistency  

#### teacher/course-overview/pbl-methodology/page.tsx

**Problem:** Mixes standard Badge variants with custom background classes

**Current Code (Line 168, 237):**
```tsx
<Badge variant="secondary">Standard Badge</Badge>
```

**Current Code (Line 509, 524, 556):**
```tsx
<Badge className="bg-green-100 text-green-800">Custom Badge</Badge>
<Badge className="bg-blue-100 text-blue-800">Custom Badge</Badge>
```

**Fix:** Use standard Badge variants consistently
```tsx
// For status/labels
<Badge variant="secondary">Label</Badge>
<Badge variant="outline">Outline</Badge>

// If custom colors needed, use semantic color scheme
<Badge className="bg-success/10 text-success">Success</Badge>
<Badge className="bg-info/10 text-info">Info</Badge>
```

**Files to Fix:**
- [ ] Line 509: Replace custom green Badge with variant
- [ ] Line 524: Replace custom green Badge with variant
- [ ] Line 556: Replace custom blue Badge with variant

---

### Issue 2: Excessive Manual Color Classes

**Affected Files:** 2  
**Severity:** Low - maintainability concern  

#### teacher/course-overview/pbl-methodology/page.tsx

**Problem:** Uses 6+ different color themes with manual classes

**Current Code:**
```tsx
// Red theme
<div className="bg-red-50 dark:bg-red-950/10 text-red-700">

// Blue theme
<div className="bg-blue-50 dark:bg-blue-950/10 text-blue-700">

// Purple theme
<div className="bg-purple-50 dark:bg-purple-950/10 text-purple-700">

// Green theme
<div className="bg-green-50 dark:bg-green-950/10 text-green-700">

// Orange theme
<div className="bg-orange-50 dark:bg-orange-950/10 text-orange-700">

// Amber theme
<div className="bg-amber-50 dark:bg-amber-950/10 text-amber-700">
```

**Fix:** Standardize on 3-4 semantic colors
```tsx
// Primary (blue) - main concepts
<div className="bg-primary/5 text-primary">

// Success (green) - positive outcomes
<div className="bg-success/5 text-success">

// Warning (amber) - important notes
<div className="bg-warning/5 text-warning">

// Muted (gray) - neutral information
<div className="bg-muted/50 text-muted-foreground">
```

**Files to Fix:**
- [ ] Review all accent boxes (lines 26-82, 103-428, 536-554, 561-579, 642-656, 668-684)
- [ ] Standardize to 3-4 semantic colors
- [ ] Reduce from 6 colors to 3-4 colors

#### teacher/course-overview/backward-design/page.tsx

**Problem:** Same issue as PBL methodology - extensive manual color classes

**Files to Fix:**
- [ ] Review all accent boxes (lines 26-82, 103-428, 536-554, 561-579, 642-656, 668-684)
- [ ] Standardize to match PBL methodology page

---

### Issue 3: Inconsistent Information Box Styling

**Affected Files:** 1  
**Severity:** Low - visual inconsistency  

#### teacher/classroom-routines/page.tsx

**Problem:** Two different styles for similar content types

**Current Code (Line 46):**
```tsx
<div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
  {/* Information */}
</div>
```

**Current Code (Line 101):**
```tsx
<div className="bg-gray-50 p-6 rounded-lg">
  {/* Information - no border */}
</div>
```

**Fix:** Standardize on one pattern
```tsx
// Standard information box
<Card className="border-blue-200 bg-blue-50/50">
  <CardContent className="p-4">
    {/* Information */}
  </CardContent>
</Card>

// Or use consistent div styling
<div className="bg-muted/50 p-4 rounded-lg border border-border">
  {/* Information */}
</div>
```

**Files to Fix:**
- [ ] Line 46: Decide on Card vs div pattern
- [ ] Line 101: Match line 46 pattern
- [ ] Standardize padding (p-4 vs p-6)
- [ ] Add border to line 101 box

---

### Issue 4: Inconsistent Layout Containers

**Affected Files:** Multiple  
**Severity:** Low - layout inconsistency  

**Problem:** Three different container patterns used across teacher pages

**Pattern 1:** Course overview pages
```tsx
<div className="max-w-4xl mx-auto p-8">
  {/* Content */}
</div>
```

**Pattern 2:** Unit and lesson pages
```tsx
<div className="max-w-6xl mx-auto py-8 px-4">
  {/* Content */}
</div>
```

**Pattern 3:** Classroom routines
```tsx
<div className="container mx-auto px-4 py-8">
  {/* Content */}
</div>
```

**Fix:** Standardize on one pattern

**Recommended Pattern:**
```tsx
<div className="container max-w-6xl mx-auto py-8 px-4">
  {/* Content */}
</div>
```

**Files to Fix:**
- [ ] teacher/course-overview/pbl-methodology/page.tsx: Change max-w-4xl to max-w-6xl, p-8 to py-8 px-4
- [ ] teacher/course-overview/backward-design/page.tsx: Same as above
- [ ] teacher/classroom-routines/page.tsx: Add max-w-6xl to container

---

## Compliant Reference Pages

### teacher/page.tsx
**Why it's compliant:**
- Consistent Card, Badge, Button usage with standard variants
- Good layout pattern

**Key Pattern:**
```tsx
<div className="container max-w-6xl mx-auto py-8 px-4">
  <div className="grid gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary">Status</Badge>
      </CardContent>
    </Card>
  </div>
</div>
```

### teacher/layout.tsx
**Why it's compliant:**
- Consistent sidebar layout
- Standard Button variants
- Proper spacing

### teacher/[unit]/page.tsx
**Why it's compliant:**
- Standard Card components
- Consistent layout pattern

### teacher/[unit]/[lessonNumber]/page.tsx
**Why it's compliant:**
- Minimal wrapper
- Consistent layout

### All classroom-routines subpages
**Why they're compliant:**
- Consistent with each other
- Standard component usage

---

## Implementation Checklist

### Phase 1: Badge Standardization (30 min)
- [ ] pbl-methodology/page.tsx: Fix 3 custom Badge instances (lines 509, 524, 556)

### Phase 2: Color Scheme Reduction (45 min)
- [ ] pbl-methodology/page.tsx: Reduce from 6 to 3-4 semantic colors
- [ ] backward-design/page.tsx: Match PBL methodology color scheme

### Phase 3: Information Box Consistency (15 min)
- [ ] classroom-routines/page.tsx: Standardize information box styling

### Phase 4: Layout Container Standardization (30 min)
- [ ] pbl-methodology/page.tsx: Standardize container
- [ ] backward-design/page.tsx: Standardize container
- [ ] classroom-routines/page.tsx: Add max-width to container

### Phase 5: Testing (15 min)
- [ ] Run `npm run lint`
- [ ] Run `npm run typecheck`
- [ ] Manual test: Load each modified page in browser
- [ ] Visual check: Ensure no visual regressions

---

## Testing Commands

```bash
# Lint check
cd bus-math-nextjs
npm run lint

# Type check
npm run typecheck

# Manual testing - load these pages
# /teacher/course-overview/pbl-methodology
# /teacher/course-overview/backward-design
# /teacher/classroom-routines
```

---

## Notes

- **Priority is LOW** - these are internal teacher pages
- Focus on maintainability improvements
- Consider creating shared components for common patterns:
  - `<InfoBox variant="blue">` for information boxes
  - `<ContentSection>` for layout containers
- Standardization will make future updates easier
- Teacher pages correctly do NOT use student six-phase structure
