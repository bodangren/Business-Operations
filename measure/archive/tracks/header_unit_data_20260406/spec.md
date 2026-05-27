# Specification: Header Unit Data From Canonical Sources

## Overview

`header.tsx` hardcodes `studentUnits` and `teacherUnits` arrays with unit titles and descriptions. The same data is duplicated in `index-records.ts` (`unitPages` array). The canonical source of truth is the individual `src/data/unitXX.ts` files (each exporting a `UnitData` object with `title` and `description`).

Adding or renaming a unit currently requires editing 3+ files. This track creates a shared unit-metadata registry derived from the canonical `unitXX.ts` data.

## Functional Requirements

1. **Unit Registry Module** — `src/data/unit-registry.ts` exports a `UNITS` array built by importing all 8 `unitXXData` objects. Each entry contains:
   - `unitId: UnitId` (e.g. `"unit01"`)
   - `number: number` (1–8)
   - `title: string` (from `UnitData.title`)
   - `description: string` (from `UnitData.description`)
   - `studentHref: string` (e.g. `"/student/unit01"`)
   - `teacherHref: string` (e.g. `"/teacher/unit01"`)
   - `label: string` (e.g. `"Unit 1: Smart Ledger Launch"`)

2. **Header** — `header.tsx` imports from the registry instead of hardcoding unit lists. The `studentUnits` and `teacherUnits` arrays are derived via `UNITS.map(...)`.

3. **Index Records** — `index-records.ts` `unitPages` array is replaced with a derivation from the registry.

## Non-Functional Requirements

- No runtime performance regression (registry is module-level constant, same as current arrays).
- No visual or behavioral change to the header or index pages.

## Acceptance Criteria

- [ ] `UNITS` array contains exactly 8 entries with correct metadata
- [ ] `header.tsx` renders identical nav menus (student + teacher) with same titles and descriptions
- [ ] `index-records.ts` `unitPages` are derived from registry
- [ ] All existing tests pass
- [ ] Build succeeds
- [ ] Lint passes with 0 errors/warnings

## Out of Scope

- Changing unit titles or descriptions
- Adding new units
- Refactoring `unit-project-frameworks.ts` or teacher lesson plan files (separate future track)
