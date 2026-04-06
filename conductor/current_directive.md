# Current Directive

**Updated:** 2026-04-06
**Status:** Mastery progress bars track complete

## Active Track

None — ready for next track.

## What Was Just Completed

- **Type consolidation — PhaseHeader/PhaseFooter index signatures** (track: `type_consolidation_20260406`)
  - Created `src/types/lesson.ts` with `LessonRef`, `UnitRef`, `LessonPhase`, `LessonPhaseName`
  - Updated PhaseHeader, PhaseFooter, Lesson01Phase1 to use shared types (removed all `[key: string]: unknown`)
  - Consolidated duplicate `LessonPhase` interface into single canonical definition
  - Backward-compatible re-exports preserve existing import paths
  - Tests: 221 passed (15 suites)
  - Lint: 0 errors, 0 warnings
  - Build: compiled successfully

## What Was Just Completed

- **Mastery progress bars on unit cards** (track: `mastery_progress_bars_20260406`)
  - Added `useUnitMastery` hook + `getUnitMasteryInfo` pure helper to `StudyDataContext.tsx`
  - Created `UnitMasteryProgressBar` component (color-coded bar: green/amber/red)
  - Integrated into `HubUnitCard` and `StudentUnitOverview`
  - Tests: 221 passed (15 suites)
  - Lint: 0 errors, 0 warnings
  - Build: compiled successfully

## What Was Just Completed

- **ESLint CLI migration** (track: `eslint_cli_migration_20260405`)
  - `lint` script changed from `next lint` to `eslint .`
  - Added `lint:fix` script
  - Added global ignores: `.next/`, `node_modules/`, `scripts/`, `coverage/`, `out/`, `next-env.d.ts`
  - Lint: 0 errors, 0 warnings
  - Tests: 216 passed (14 suites)
  - Build: compiled successfully (603+ pages)

## Verification

- Tests: 216 passed (14 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Mastery progress bars on unit cards** — separate track to show per-unit mastery % alongside due counts
2. **Type consolidation** — PhaseHeader/PhaseFooter index signatures (`[key: string]: unknown`) should be replaced with proper `LessonData` interfaces
3. **Header unit data hardcoded** — any unit rename requires 4+ file edits
4. **Unit 7 `unit07Data` duplication** — should be a shared import

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
