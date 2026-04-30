# Accounting Components Remediation Plan

**Priority:** Medium  
**Files Affected:** 10  
**Issues Found:** 15  
**Estimated Effort:** 2-3 hours  

---

## Overview

Accounting components are interactive learning tools for teaching double-entry bookkeeping, T-accounts, and journal entries. The main issues are inconsistent use of native form elements and inconsistent Card border styling.

---

## Issues Breakdown

### Issue 1: Native Form Elements Instead of UI Components

**Affected Files:** 2  
**Severity:** Medium - reduces consistency and accessibility  

#### PostingPracticeLoop.tsx
**Location:** Lines 310-348  
**Problem:** Uses native `<input>` elements with inline styling  

**Current Code:**
```tsx
<input
  type="text"
  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  value={debitInput}
  onChange={(e) => setDebitInput(e.target.value)}
/>
```

**Fix:**
```tsx
import { Input } from "@/components/ui/input"

<Input
  type="text"
  className="w-full mt-1"
  value={debitInput}
  onChange={(e) => setDebitInput(e.target.value)}
/>
```

**Files to Fix:**
- [ ] Line 310-328: Replace debit input
- [ ] Line 331-338: Replace credit input  
- [ ] Line 341-348: Replace account name input

#### TransactionJournal.tsx
**Location:** Lines 210-219, 449-473  
**Problem:** Uses native `<select>` elements with inline styling  

**Current Code:**
```tsx
<select
  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  value={selectedAccount}
  onChange={(e) => setSelectedAccount(e.target.value)}
>
  <option value="">Select account...</option>
  {accounts.map(account => (
    <option key={account.id} value={account.id}>{account.name}</option>
  ))}
</select>
```

**Fix:** Create a reusable Select component or use consistent select styling
```tsx
// Option 1: Create UI Select component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select value={selectedAccount} onValueChange={setSelectedAccount}>
  <SelectTrigger className="w-full mt-1">
    <SelectValue placeholder="Select account..." />
  </SelectTrigger>
  <SelectContent>
    {accounts.map(account => (
      <SelectItem key={account.id} value={account.id}>
        {account.name}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

// Option 2: If keeping native select, standardize styling
<select
  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  value={selectedAccount}
  onChange={(e) => setSelectedAccount(e.target.value)}
>
```

**Files to Fix:**
- [ ] Line 210-219: Replace first select
- [ ] Line 449-460: Replace second select
- [ ] Line 463-473: Replace third select

---

### Issue 2: Inconsistent Card Border Colors

**Affected Files:** 6  
**Severity:** Low - visual inconsistency  

#### DashboardArtifact.tsx
**Problem:** Mix of `border-blue-200`, `border-purple-200`, `border-amber-200`, `border-green-200` creates visual fragmentation

**Current Pattern:**
```tsx
<Card className="border-blue-200">  {/* Some cards */}
<Card className="border-purple-200"> {/* Other cards */}
<Card className="border-amber-200">  {/* Different cards */}
<Card className="border-green-200">  {/* More cards */}
```

**Fix:** Standardize on semantic color scheme
```tsx
// Use colors based on content type, not random assignment
<Card className="border-blue-200">    {/* Assets/Blue theme */}
<Card className="border-red-200">     {/* Liabilities/Red theme */}
<Card className="border-green-200">   {/* Equity/Success */}
<Card className="border-purple-200">  {/* Primary actions */}
```

**Files to Fix:**
- [ ] Review all Card instances and apply semantic color scheme
- [ ] Line 69: Card missing CardHeader
- [ ] Line 116: Card missing CardHeader
- [ ] Line 168: Card missing CardHeader

#### TableStructureSimulator.tsx
**Problem:** Missing CardHeader on all Card instances, inconsistent border colors

**Files to Fix:**
- [ ] Add CardHeader to all Card components
- [ ] Standardize border colors: `border-blue-200`, `border-purple-200`, `border-green-200`
- [ ] Add consistent padding structure in CardContent

#### ArtifactBuilder.tsx
**Problem:** Inconsistent border colors only (all have CardHeader ✓)

**Files to Fix:**
- [ ] Standardize border colors to semantic scheme

#### PostingPracticeLoop.tsx
**Problem:** Mix of `border-blue-200` and `border-gray-200`

**Files to Fix:**
- [ ] Standardize to `border-blue-200` for primary, `border-gray-200` for secondary

#### TransactionJournal.tsx
**Problem:** Mix of `border-blue-200`, `border-gray-200`, and default Card borders

**Files to Fix:**
- [ ] Standardize to consistent scheme

---

### Issue 3: Inconsistent Border Widths in T-Account Components

**Affected Files:** 3  
**Severity:** Low - visual inconsistency  

#### TAccountSimple.tsx
**Problem:** Uses 2px borders instead of standard 1px

**Current Code (Line 71):**
```tsx
<div className="border-2 border-gray-800">
  {/* T-account structure */}
</div>
```

**Current Code (Lines 85, 111, 142):**
```tsx
<div className="border-r-2 border-gray-800">
  {/* Internal dividers */}
</div>
```

**Fix:** Standardize to 1px borders
```tsx
<div className="border border-gray-800">
  {/* T-account structure */}
</div>

<div className="border-r border-gray-800">
  {/* Internal dividers */}
</div>
```

**Files to Fix:**
- [ ] Line 71: Change `border-2` to `border`
- [ ] Line 85: Change `border-r-2` to `border-r`
- [ ] Line 111: Change `border-r-2` to `border-r`
- [ ] Line 142: Change `border-r-2` to `border-r`

#### TAccountDetailed.tsx
**Problem:** Same 2px border issue, plus non-standard Tailwind classes

**Current Code (Line 152):**
```tsx
<div className="border-2 border-gray-800">
```

**Non-standard Classes (Lines 168, 181):**
```tsx
<div className="bg-blue-25">  {/* Not standard Tailwind */}
<div className="bg-red-25">   {/* Not standard Tailwind */}
```

**Fix:**
```tsx
// Border fix
<div className="border border-gray-800">

// Background fix - use standard Tailwind colors
<div className="bg-blue-50">
<div className="bg-red-50">
```

**Files to Fix:**
- [ ] Line 152: Change `border-2` to `border`
- [ ] Line 168: Change `border-r-2` to `border-r`, `bg-blue-25` to `bg-blue-50`
- [ ] Line 181: Change `bg-red-25` to `bg-red-50`
- [ ] Line 197: Change `border-r-2` to `border-r`
- [ ] Line 242: Change `border-r-2` to `border-r`
- [ ] Line 291: Change `border-r-2` to `border-r`

#### TAccountsVisualization.tsx
**Problem:** Uses `gray-700` instead of `gray-800` for borders

**Current Code (Line 147):**
```tsx
<div className="border-2 border-gray-700">
```

**Fix:** Standardize to `gray-800` and 1px borders
```tsx
<div className="border border-gray-800">
```

**Files to Fix:**
- [ ] Line 147: Change `border-2 border-gray-700` to `border border-gray-800`
- [ ] Line 161: Change `border-r-2 border-gray-700` to `border-r border-gray-800`
- [ ] Line 177: Change `border-r-2 border-gray-700` to `border-r border-gray-800`
- [ ] Line 198: Change `border-r-2 border-gray-700` to `border-r border-gray-800`

---

### Issue 4: Missing CardHeader Components

**Affected Files:** 2  
**Severity:** Low - inconsistent structure  

#### DashboardArtifact.tsx
**Files to Fix:**
- [ ] Line 69: Add CardHeader with CardTitle
- [ ] Line 116: Add CardHeader with CardTitle
- [ ] Line 168: Add CardHeader with CardTitle

**Example Fix:**
```tsx
<Card className="border-blue-200">
  <CardHeader>
    <CardTitle>Section Title</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Existing content */}
  </CardContent>
</Card>
```

#### TableStructureSimulator.tsx
**Files to Fix:**
- [ ] Add CardHeader to all Card components

---

## Compliant Reference Components

### TrialBalance.tsx
**Why it's compliant:**
- Uses UI components (Card, Button, Badge) consistently
- Consistent border styling with `border-gray-300` and `border-gray-200`
- Good use of `cn()` for conditional classes
- Consistent spacing and typography
- Standard 1px borders

**Key Pattern:**
```tsx
<Card className="border-gray-200">
  <CardHeader>
    <CardTitle className="text-xl">Trial Balance</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Content */}
  </CardContent>
</Card>
```

### JournalEntry.tsx
**Why it's compliant:**
- Same patterns as TrialBalance.tsx
- Standard border widths and colors
- Proper component structure

---

## Implementation Checklist

### Phase 1: Form Elements (1 hour)
- [ ] PostingPracticeLoop.tsx: Replace 3 native inputs with UI Input component
- [ ] TransactionJournal.tsx: Replace 3 native selects with UI Select or standardize styling

### Phase 2: Card Borders (1 hour)
- [ ] DashboardArtifact.tsx: Standardize border colors, add 3 missing CardHeaders
- [ ] TableStructureSimulator.tsx: Standardize borders, add CardHeaders, fix padding
- [ ] ArtifactBuilder.tsx: Standardize border colors
- [ ] PostingPracticeLoop.tsx: Standardize border colors
- [ ] TransactionJournal.tsx: Standardize border colors

### Phase 3: T-Account Borders (30 min)
- [ ] TAccountSimple.tsx: Change 2px to 1px borders (4 instances)
- [ ] TAccountDetailed.tsx: Change 2px to 1px borders, fix non-standard classes (6 instances)
- [ ] TAccountsVisualization.tsx: Change 2px to 1px, gray-700 to gray-800 (4 instances)

### Phase 4: Testing (30 min)
- [ ] Run `npm run lint` - must pass
- [ ] Run `npm run typecheck` - must pass
- [ ] Manual test: Load each component in browser
- [ ] Visual check: Compare before/after screenshots

---

## Testing Commands

```bash
# Lint check
cd bus-math-nextjs
npm run lint

# Type check
npm run typecheck

# Manual testing - load these pages
# /unit02/lesson01/phase-2 (PostingPracticeLoop)
# /unit02/lesson02/phase-1 (TransactionJournal)
# /unit02/lesson03/phase-1 (TAccountSimple)
```

---

## Notes

- **Do NOT** change any functionality - only styling
- Keep existing logic, state, and event handlers intact
- All changes are purely visual consistency improvements
- Reference TrialBalance.tsx and JournalEntry.tsx for exact patterns
- Consider creating a shared T-account wrapper component to enforce consistency
