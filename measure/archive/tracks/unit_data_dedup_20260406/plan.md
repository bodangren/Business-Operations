# Implementation Plan: Unit Data Deduplication

## Phase 1: Add UnitRef exports to unit-registry.ts with tests

- [x] Add `UNIT_REF_MAP` to `unit-registry.ts` exporting `{ [unitNumber]: UnitRef }` with canonical `id`, `title`, `sequence`
- [x] Add `UNIT_REFS` array export (ordered list of UnitRef objects)
- [x] Write unit-registry tests for `UNIT_REF_MAP` and `UNIT_REFS` (shape, values, coverage of all 8 units)
- [x] Run tests — verify RED → GREEN

## Phase 2: Replace inline unit data in all 80 lesson-data files

- [x] For each unit (01–08), update all 10 lesson-data files to import from `@/data/unit-registry` instead of defining inline `unitXXData`
- [x] Remove the inline `export const unitXXData = { ... }` block from each file
- [x] Replace with `import { UNIT_REF_MAP } from "@/data/unit-registry"` + `export const unitXXData = UNIT_REF_MAP[n]`
- [x] Fix import ordering (move to top of file)
- [x] Run tests — verify all pass

## Phase 3: Update practice-test-data.ts files

- [x] For each unit (01–08), update `practice-test-data.ts` to import unit data from `@/data/unit-registry` instead of `../lesson01/lesson-data`
- [x] Run tests — verify all pass

## Phase 4: Verification and cleanup

- [x] Run `npm run lint` — 0 errors, 0 warnings
- [x] Run `npm run test` — 235 tests pass (16 suites)
- [x] Run `npm run build` — compiled successfully
- [x] Update `tech-debt.md` — mark unit data duplication as resolved
- [x] Update `current_directive.md` — record completion
- [x] Update `lessons-learned.md` — add new entry (kept ≤50 lines)
- [x] Commit with git note, push
