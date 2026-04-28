# Implementation Plan: Header Unit Data From Canonical Sources

## Phase 1: Unit Registry Module + Tests

- [x] **Task 1.1:** Write tests for `unit-registry.ts`
  - Test: `UNITS` has length 8
  - Test: each entry has correct `unitId`, `number`, `title`, `studentHref`, `teacherHref`, `label`
  - Test: `label` format is `"Unit N: <title>"`
  - Test: entries are ordered unit01→unit08

- [x] **Task 1.2:** Create `src/data/unit-registry.ts`
  - Import all 8 `unitXXData` objects
  - Build and export `UNITS` array

- [x] **Task 1.3:** Run tests, verify RED→GREEN

## Phase 2: Header + Index Records Migration

- [x] **Task 2.1:** Write integration tests / verify header renders same output
- [x] **Task 2.2:** Refactor `header.tsx` to import from registry
- [x] **Task 2.3:** Refactor `index-records.ts` `unitPages` to derive from registry
- [x] **Task 2.4:** Run full test suite, lint, and build
- [x] **Task 2.5:** Phase checkpoint commit
