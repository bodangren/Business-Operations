# Specification: Unit Data Deduplication in Lesson-Data Files

## Overview

All 80 lesson-data files (`src/app/student/unitXX/lessonYY/lesson-data.ts`) define inline copies of unit data objects (`unitXXData`). These 80 copies are the only source of `UnitRef` data consumed by `PhaseHeader`, `PhaseFooter`, and other layout components. The objects are inconsistent (varying `id` values, title mismatches) and violate the single-source-of-truth principle already established by `unit-registry.ts`.

## Functional Requirements

1. `unit-registry.ts` shall export a `UNIT_REFS` map providing the canonical `UnitRef` for each unit number (1–8).
2. All 80 lesson-data files shall import their unit data from `UNIT_REFS` instead of defining inline objects.
3. All 8 `practice-test-data.ts` files shall import from `UNIT_REFS` instead of re-exporting from `../lesson01/lesson-data`.
4. Canonical `id` values shall use the registry's `unitId` format (`"unit01"` through `"unit08"`).
5. Canonical `title` values shall match `unit-registry.ts` `UNITS[].title` (no "Unit N:" prefix).

## Non-Functional Requirements

- Zero behavioral change to rendered output (title labels already constructed from `sequence` + `title`).
- Existing tests must pass without modification.
- Build must compile all 603+ pages.

## Acceptance Criteria

- [ ] `UNIT_REFS` map exists in `unit-registry.ts` with entries for units 1–8
- [ ] Unit-registry tests cover `UNIT_REFS` shape and values
- [ ] No lesson-data file contains an inline `unitXXData` object definition
- [ ] No practice-test-data file re-exports unit data from lesson01
- [ ] `npm run lint` passes with 0 errors, 0 warnings
- [ ] `npm run test` passes all suites
- [ ] `npm run build` compiles successfully

## Out of Scope

- Changing the `UnitRef` interface shape
- Modifying how `PhaseHeader`/`PhaseFooter` consume `UnitRef`
- Refactoring `UnitData` canonical files
