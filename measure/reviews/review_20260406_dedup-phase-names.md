# Code Review: Unit Data Dedup + Phase Names Extension

**Date:** 2026-04-06
**Tracks audited:** `unit_data_dedup_20260406`, `phase_names_20260406`
**Commits:** `699db87..36628e9`

## Summary

Audited the 2 most recently completed tracks (since last review `review_20260406_two-tracks.md`). Both tracks completed their stated objectives correctly with no regressions. Found 0 high/critical issues, 1 medium-severity issue (fixed), and 3 low-severity issues recorded.

## Issues Found & Fixed

### M-1 (Fixed) — StudentLessonOverview hardcoded unit href pattern
- **File:** `src/components/student/StudentLessonOverview.tsx` (Line 189)
- **Context:** Phase "Start Phase" button used `unit0${unit.sequence}` instead of `unit.sequence.toString().padStart(2, '0')`. Works for units 1–8 but breaks for unit 10+. Inconsistent with the same component's lines 86, 224, and 231 which correctly use `padStart(2, '0')`.
- **Fix:** Replaced with `unit${unit.sequence.toString().padStart(2, '0')}` to match all other URL patterns in the same component.

## Issues Recorded (Not Fixed — Low Severity)

### L-1 — `phaseIcons` map duplicated across 3 component files
- `PhaseHeader.tsx`, `PhaseFooter.tsx`, and `StudentLessonOverview.tsx` each maintain an identical `phaseIcons: Record<string, ...>` map
- Adding a new phase requires updating all 3 files independently
- Should extract to a shared constant (e.g., `src/components/student/phase-maps.ts`)
- Added to tech-debt.md

### L-2 — Two parallel phase name type unions must be manually synced
- `LessonPhaseName` in `src/types/lesson.ts` and `LessonProgressPhaseName` in `src/contexts/LessonProgressContext.tsx` are independent string unions
- Both were correctly updated in this track, but there's no compile-time guarantee they stay in sync
- Future risk: one gets extended without the other
- Added to tech-debt.md

### L-3 — 13 pre-existing TypeScript errors in test files
- `record-session.test.ts`: 6 errors — `readonly` array assigned to mutable `TopicTag[]`
- `index-records.test.ts`: 1 error — template literal not assignable to `UnitId`
- `export-builders.test.ts`: 1 error — `"finance"` not a valid `TopicTag`
- `export.test.ts`: 5 errors — type mismatches in export schema fields
- All pre-existing (not introduced by reviewed tracks); low severity since they're in test files only
- Added to tech-debt.md

## Clean Findings (No Issues)

- **UNIT_REFS / UNIT_REF_MAP**: Correctly derived from canonical `unitXXData` imports; tests cover all 8 units
- **80 lesson-data files**: All migrated to `UNIT_REF_MAP[n]` pattern; no remaining inline `unitXXData = { ... }` definitions
- **8 practice-test-data files**: All import from `@/data/unit-registry`; no remaining `../lesson01/lesson-data` imports
- **LessonPhaseName extension**: 3 project phases added to both unions; all 9 values tested
- **Icon/color maps**: All 3 components have entries for all 9 phase names (including 3 new project phases)
- **`as LessonPhase` casts**: Zero remaining across the entire `src/` directory
- **LessonProgressContext**: Correctly updated with matching phase names
- **phaseDescriptions map**: StudentLessonOverview has descriptions for all 9 phases

## Verification

- Tests: 241 passed (18 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 errors, 0 warnings
- TypeScript: 13 pre-existing errors in test files (not from reviewed tracks)
