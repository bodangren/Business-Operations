# Plan: Mastery Progress Bars on Unit Cards

## Phase 1: Hook + Component (TDD)

### Task 1.1: Write tests for `useUnitMastery` hook
- [ ] Create `src/contexts/__tests__/useUnitMastery.test.ts`
- [ ] Test: returns null when loading
- [ ] Test: returns correct termsStudied/termsTotal/avgMastery for a unit with partial study
- [ ] Test: returns 0 studied / N total when no study history
- [ ] Test: handles cross-unit terms correctly

### Task 1.2: Implement `useUnitMastery` hook
- [ ] Add `unitTermCounts` module-level map in `StudyDataContext.tsx` (from `glossaryData`)
- [ ] Add `getUnitMasteryInfo(unitId, data)` pure helper (exported for testing)
- [ ] Add `useUnitMastery(unitId)` hook returning `{ termsStudied, termsTotal, avgMastery } | null`
- [ ] Tests pass

### Task 1.3: Write tests for `UnitMasteryProgressBar`
- [ ] Create `src/components/student/__tests__/UnitMasteryProgressBar.test.tsx`
- [ ] Test: renders nothing when `termsStudied === 0`
- [ ] Test: renders bar with correct percentage and color
- [ ] Test: renders correct label text

### Task 1.4: Implement `UnitMasteryProgressBar`
- [ ] Create `src/components/student/UnitMasteryProgressBar.tsx`
- [ ] Accepts `unitId: UnitId`
- [ ] Uses `useUnitMastery` hook
- [ ] Renders `<Progress>` with `masteryColor` and text label
- [ ] Hides when no study data
- [ ] Tests pass

### Task 1.5: Unit tests + lint
- [ ] Run full test suite
- [ ] Run `npm run lint` — 0 warnings

## Phase 2: Hub Integration

### Task 2.1: Add `UnitMasteryProgressBar` to `HubUnitCard`
- [ ] Import and render `<UnitMasteryProgressBar unitId={unitId} />` in `HubUnitCard.tsx`
- [ ] Place below description, above "Open unit" link
- [ ] Visual check: bar fits within card layout

### Task 2.2: Add to `StudentUnitOverview`
- [ ] Import and render `<UnitMasteryProgressBar unitId={unit.unitId} />` in the "Study This Unit's Terms" card
- [ ] Place next to or below `StudyDueBadge`

### Task 2.3: Integration verification
- [ ] Run full test suite
- [ ] Run `npm run lint` — 0 warnings
- [ ] Run `npm run build` — compiles successfully

## Phase 3: Polish + Finalize

- [ ] Verify no visual regressions on hub page and unit overview pages
- [ ] Update `conductor/tech-debt.md` if needed
- [ ] Update `conductor/lessons-learned.md` (keep ≤50 lines)
- [ ] Commit with conventional commit message
- [ ] Push to remote
