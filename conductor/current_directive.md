# Current Directive

**Updated:** 2026-04-06
**Status:** Unit data dedup track complete — 80 files migrated, 235 tests pass

## Active Track

None — ready for next track.

## What Was Just Completed

- **Unit data deduplication in lesson-data files** (track: `unit_data_dedup_20260406`)
  - Added `UNIT_REFS` and `UNIT_REF_MAP` exports to `src/data/unit-registry.ts`
  - Replaced inline `unitXXData` objects in all 80 lesson-data files with `UNIT_REF_MAP[n]` lookups
  - Updated 8 `practice-test-data.ts` files to import from registry instead of `../lesson01/lesson-data`
  - Normalized unit `id` values to `"unit01"`–`"unit08"` format and titles to canonical values
  - Tests: 235 passed (16 suites), 8 new unit-registry tests
  - Lint: 0 errors, 0 warnings
  - Build: compiled successfully (603+ pages)

## Verification

- Tests: 235 passed (16 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Non-standard phase names** — 5 lesson-data files cast non-standard names (`as LessonPhase`); should extend the union or use a project-specific type
2. **Multiple lockfile warning** — set `outputFileTracingRoot` or clean up root lockfile
3. **Lesson-level index entries still hardcoded** — `index-records.ts` `lessonPages` array has 80 manually maintained entries; derive from lesson-data files for single-source-of-truth

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
