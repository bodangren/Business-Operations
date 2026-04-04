# Current Directive

**Updated:** 2026-04-05
**Status:** Code review complete — all 8 tracks done, no active track

## Active Track

None — all tracks complete.

## What Was Just Completed

- Code review audit of `unit_study_ctas_20260404` + `gate_debug_routes_20260405`
- Fixed H-1: `getDueCountForUnit` now does single-pass instead of full-unit-record scan
- Fixed M-1: Middleware matcher explicitly covers both `/debug` and `/debug/:path*`
- 203 tests pass, build clean, lint clean

## Verification

- Tests: 203 passed (12 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 errors (warnings are pre-existing)

## Next Priorities

1. **Study data context provider** — extract shared study-data loading into a React context so `StudyDueBadge` instances on the hub page share a single `loadStudyData()` call instead of 8 independent reads (L-1 tech debt)
2. **Lesson-level index entries** — `index-records.ts` has empty `lessonPages` array; populate it to complete the subject index
3. **ESLint warning cleanup pass** — ~150+ unused-import and `any` type warnings across lesson files; batch cleanup would reduce noise
4. **Next.js lint migration** — `next lint` is deprecated; migrate to ESLint CLI before Next.js 16
5. **Mastery progress bars on unit cards** — separate track to show per-unit mastery % alongside due counts

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
- Lint warnings in lesson files (pre-existing, low priority)
