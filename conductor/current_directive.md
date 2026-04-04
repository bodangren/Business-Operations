# Current Directive

**Updated:** 2026-04-05
**Status:** ESLint CLI migration complete — `next lint` replaced with `eslint .`

## Active Track

None — all tracks complete. Ready for next track.

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
