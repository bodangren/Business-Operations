# Implementation Plan: useUnitMastery Hook Test Coverage

## Phase 1: Install dependency and write tests

### Tasks

- [ ] **1.1** Install `@testing-library/react` as dev dependency
- [ ] **1.2** Write failing tests (RED phase)
  - [ ] Test: returns null while loading
  - [ ] Test: returns null when data is null
  - [ ] Test: returns mastery info when data is loaded
  - [ ] Test: throws when used outside provider
  - [ ] Test: updates reactively when data changes
- [ ] **1.3** Verify all tests pass (GREEN phase) — tests use existing hook, no implementation changes needed
- [ ] **1.4** Verify no regressions: `npm run test` full suite
- [ ] **1.5** Verify `tsc` compiles cleanly
- [ ] **1.6** Commit: `test(context): add useUnitMastery hook test coverage`

## Phase Completion Verification

- [ ] All tests pass
- [ ] tsc: 0 errors
- [ ] ESLint: 0 warnings
- [ ] No production code changes
