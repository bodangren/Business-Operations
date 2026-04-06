# Current Directive

**Updated:** 2026-04-06
**Status:** Fix TS test errors complete — 13 errors resolved, 0 remaining

## Active Track

None — ready for next track.

## What Was Just Completed

- **Fix 13 pre-existing TS errors** in test files (`fix_ts_test_errors_20260406`)
  - Added `"finance"` to `TopicTag` union + `TOPIC_LABELS` map
  - Cast `UnitId` template literals in index-records and lesson-registry tests
  - Fixed `readonly` → mutable `TopicTag[]` in record-session test
  - Used explicit `as unknown as ExportSession[]/SessionRecord[]` casts
  - Widened `Set<string>` for optional CSV column overlap check

## Verification

- Tests: 255 passed (20 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: compiled successfully (603 pages)

## Next Priorities

1. **Consolidate phase name unions** — `LessonPhaseName` and `LessonProgressPhaseName` should share a single canonical definition (tech-debt.md L2)
2. **Add PHASE_ICONS fallback** — type the config as `Record<LessionPhaseName, ...>` or add defensive fallback in consumers (from review L)
3. **`useUnitMastery` hook test coverage** — only pure helper is tested, hook itself has no coverage (tech-debt.md L2)
4. **`masteryColor` thresholds alignment** — 75/50 don't align with `proficiency_band` thresholds (85/60/30) (tech-debt.md L2)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
