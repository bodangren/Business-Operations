# Plan: Mastery Progress Bars on Unit Cards

## Phase 1: Hook + Component (TDD)

### Task 1.1: Write tests for `useUnitMastery` hook
- [x] Create `src/contexts/__tests__/useUnitMastery.test.ts`
- [x] Test: returns null when loading
- [x] Test: returns correct termsStudied/termsTotal/avgMastery for a unit with partial study
- [x] Test: returns 0 studied / N total when no study history
- [x] Test: handles cross-unit terms correctly

### Task 1.2: Implement `useUnitMastery` hook
- [x] Add `unitTermCounts` module-level map in `StudyDataContext.tsx` (from `glossaryData`)
- [x] Add `getUnitMasteryInfo(unitId, data)` pure helper (exported for testing)
- [x] Add `useUnitMastery(unitId)` hook returning `{ termsStudied, termsTotal, avgMastery } | null`
- [x] Tests pass

### Task 1.3: Write tests for `UnitMasteryProgressBar`
- [x] Skipped — project has no React component testing setup (vitest node env, no @testing-library/react)

### Task 1.4: Implement `UnitMasteryProgressBar`
- [x] Create `src/components/student/UnitMasteryProgressBar.tsx`
- [x] Accepts `unitId: UnitId`
- [x] Uses `useUnitMastery` hook
- [x] Renders colored bar with text label
- [x] Hides when no study data
- [x] Lint clean

### Task 1.5: Unit tests + lint
- [x] Run full test suite — 221 passed
- [x] Run `npm run lint` — 0 warnings

## Phase 2: Hub Integration

### Task 2.1: Add `UnitMasteryProgressBar` to `HubUnitCard`
- [x] Import and render `<UnitMasteryProgressBar unitId={unitId} />` in `HubUnitCard.tsx`
- [x] Place below description, above "Open unit" link

### Task 2.2: Add to `StudentUnitOverview`
- [x] Import and render `<UnitMasteryProgressBar unitId={unit.unitId} />` in the "Study This Unit's Terms" card
- [x] Place inside description text area, before button

### Task 2.3: Integration verification
- [x] Run full test suite — 221 passed
- [x] Run `npm run lint` — 0 warnings
- [x] Run `npm run build` — compiled successfully

## Phase 3: Polish + Finalize

- [x] Verify no visual regressions on hub page and unit overview pages — build passes, component is conditional
- [x] Update `conductor/tech-debt.md` if needed — no changes needed
- [x] Update `conductor/lessons-learned.md` (keep ≤50 lines) — 46 lines
- [ ] Commit with conventional commit message
- [ ] Push to remote
