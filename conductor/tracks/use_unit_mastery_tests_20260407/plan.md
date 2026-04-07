# Implementation Plan: useUnitMastery Hook Test Coverage

## Phase 1: Install dependency and write tests

### Tasks

- [x] **1.1** Install `@testing-library/react` as dev dependency
- [x] **1.2** Write hook tests
  - [x] Test: returns mastery info when data is loaded
  - [x] Test: returns null-like result for empty data
  - [x] Test: counts only terms belonging to specified unit
  - [x] Test: throws when used outside provider
  - [x] Test: updates reactively when unitId changes
- [x] **1.3** Verify all tests pass (GREEN phase) — 270 tests pass
- [x] **1.4** Verify no regressions: full test suite passes
- [x] **1.5** Verify `tsc` compiles cleanly (0 errors)
- [x] **1.6** Verify build succeeds (603 pages)
- [x] **1.7** Commit: `test(context): add useUnitMastery hook test coverage`

## Phase Completion Verification

- [x] All tests pass
- [x] tsc: 0 errors
- [x] ESLint: 0 warnings
- [x] No production code changes
