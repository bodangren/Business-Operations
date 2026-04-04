# Implementation Plan: Wire Up Unit-Level Study CTAs

## Phase 1: Per-Unit Due Count Utilities + Tests

### Tasks

- [x] 1.1 — Write tests for `getDueCountByUnit()` in `src/lib/study/__tests__/derived.test.ts`
  - Test: returns zero counts for empty study data
  - Test: returns correct count for a unit with due terms
  - Test: returns zero for unit with no due terms
  - Test: counts only terms where `scheduled_for <= now`
  - Test: handles terms belonging to multiple units
- [x] 1.2 — Write tests for `getDueCountForUnit()` in same file
  - Test: returns count for specific unit
  - Test: returns 0 for unit with no data
- [x] 1.3 — Implement `getDueCountByUnit()` in `src/lib/study/derived.ts`
  - Import `glossaryData` and `filterByUnit` (or pass term-unit map as parameter for testability)
  - Build slug→units map from glossary data
  - Filter due entries by unit membership
  - Return `Record<UnitId, number>`
- [x] 1.4 — Implement `getDueCountForUnit(unitId, dueEntries, glossaryMap)` as thin wrapper
- [x] 1.5 — Run tests, verify all pass
- [x] 1.6 — Commit: `feat(study): add per-unit due count utilities with tests`

## Phase 2: StudyDueBadge Component + UnitOverview Integration

### Tasks

- [x] 2.2 — Create `src/components/student/StudyDueBadge.tsx`
  - `"use client"` directive
  - Accept `unitId: UnitId` prop
  - `useEffect` → `loadStudyData()` → compute due count → `setState`
  - Render `Badge` with appropriate text and variant
- [x] 2.3 — Update `src/components/student/StudentUnitOverview.tsx`
  - Import `StudyDueBadge`
  - Insert `<StudyDueBadge unitId={unit.unitId} />` inside the "Study This Unit's Terms" card title
  - Server component can render client component — no `"use client"` needed
- [x] 2.4 — Run tests, verify all pass

## Phase 3: StudentHub Unit Cards with Due Badges

### Tasks

- [x] 3.2 — Create `src/components/student/HubUnitCard.tsx`
  - `"use client"` directive
  - Accept unit data props (number, title, description, href, unitId)
  - Renders existing card structure + `StudyDueBadge`
- [x] 3.3 — Update `src/app/student/page.tsx`
  - Import `HubUnitCard`
  - Replace inline `<Link> + <Card>` markup with `<HubUnitCard>` for each unit
  - Add `unitId` field to unit data array
- [x] 3.4 — Run tests, verify all pass

## Phase 4: Verification & Polish

### Tasks

- [x] 4.1 — Run full test suite: `npx vitest run` — 196 passed (11 suites)
- [x] 4.2 — Run lint: `npm run lint` — 0 errors (pre-existing warnings only)
- [x] 4.3 — Run build: `npm run build` — compiled successfully
- [x] 4.4 — Verify all static pages compile
- [x] 4.5 — Commit and push
