# Current Directive

**Updated:** 2026-04-06
**Status:** Code review complete — 2 tracks audited, no critical issues

## Active Track

None — ready for next track.

## What Was Just Completed

- **Code review** of 2 tracks: `extract_phase_icons_20260406` and `lesson_pages_derive_20260406`
  - Verified plan compliance, style, test coverage, build, lint
  - 255/255 tests pass, 603 pages build, 0 eslint warnings
  - 2 low-severity findings recorded (PHASE_ICONS fallback, `as UnitId` verbosity)
  - No fixes applied — all findings are informational

## Verification

- Tests: 255 passed (20 suites)
- Build: compiled successfully (603 pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Fix 13 pre-existing TS errors in test files** — `readonly`/mutable mismatches, invalid `TopicTag` literals, export schema drift (tech-debt.md L3)
2. **Consolidate phase name unions** — `LessonPhaseName` and `LessonProgressPhaseName` should share a single canonical definition (tech-debt.md L2)
3. **Add PHASE_ICONS fallback** — type the config as `Record<LessionPhaseName, ...>` or add defensive fallback in consumers (from review L)
4. **`useUnitMastery` hook test coverage** — only pure helper is tested, hook itself has no coverage (tech-debt.md L2)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
