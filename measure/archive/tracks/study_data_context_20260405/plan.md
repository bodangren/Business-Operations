# Implementation Plan: Study Data Context Provider

## Phase 1: Core context and hooks (with tests)

- [x] Create `src/contexts/StudyDataContext.tsx`:
  - `StudyDataProvider` component with `createContext`
  - `useStudyData()` hook
  - `useStudyDueCount(unitId)` derived hook
  - `refresh()` function that re-reads localStorage
  - `mutate(data)` function that updates context + localStorage
- [x] Create `src/contexts/__tests__/StudyDataContext.test.ts`:
  - Test: `hasAnyStudyHistory` returns false for empty data
  - Test: `hasAnyStudyHistory` returns true when terms seen
  - Test: `hasAnyStudyHistory` returns false when times_seen is 0
  - Test: `getDueInfoForUnit` returns zero for empty data
  - Test: `getDueInfoForUnit` counts due terms for unit
  - Test: `getDueInfoForUnit` returns hasStudied true
  - Test: `getDueInfoForUnit` does not count wrong-unit terms

## Phase 2: Refactor existing consumers

- [x] Refactor `StudyDueBadge` to use `useStudyDueCount`
- [x] Refactor `PracticeHubHome` to use `useStudyData`
- [x] Refactor `ProgressDashboard` to use `useStudyData`
- [x] Refactor `ExportPage` to use `useStudyData`
- [x] Remove dead `loadStudyData` imports from refactored files

## Phase 3: Wire provider into app layout

- [x] Add `StudyDataProvider` to root layout (inside `LessonProgressProvider`)
- [x] Verify provider wraps all pages that use study data
- [x] Ensure no SSR issues (provider guards for browser-only localStorage)

## Phase 4: Verification

- [x] Run full test suite — 210/210 pass
- [x] Run `next lint` — 0 new errors (warnings are pre-existing)
- [x] Run `next build` — compiled successfully, 603+ pages
