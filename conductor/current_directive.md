# Current Directive

**Updated:** 2026-04-05
**Status:** Lesson-level index entries track complete — all phases done

## Active Track

None — all tracks complete.

## What Was Just Completed

- Lesson-level index entries track: populated `lessonPages` array with all 80 lesson entries (8 units × 10 lessons)
- Added 6 integration tests verifying lesson record count, href pattern, unitId coverage, and slug uniqueness
- 216 tests pass (14 suites), build clean, lint clean

## What Was Just Completed

- Study data context provider track: extracted shared `loadStudyData()` into `StudyDataProvider` context
- Refactored 4 consumers (`StudyDueBadge`, `PracticeHubHome`, `ProgressDashboard`, `ExportPage`) to use context
- Provider wired into root layout; 210 tests pass, build clean, lint clean

## Verification

- Tests: 216 passed (14 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 errors (warnings are pre-existing)

## Next Priorities

1. **ESLint warning cleanup pass** — ~150+ unused-import and `any` type warnings across lesson files; batch cleanup would reduce noise
2. **Next.js lint migration** — `next lint` is deprecated; migrate to ESLint CLI before Next.js 16
3. **Mastery progress bars on unit cards** — separate track to show per-unit mastery % alongside due counts

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
- Lint warnings in lesson files (pre-existing, low priority)
