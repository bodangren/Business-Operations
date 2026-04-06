# Code Review: ESLint CLI Migration + Mastery Progress Bars + Type Consolidation

**Date:** 2026-04-06
**Tracks audited:** `eslint_cli_migration_20260405`, `mastery_progress_bars_20260406`, `type_consolidation_20260406`
**Commits:** `3d29154..449dda6`

## Summary

Audited the 3 most recently completed tracks. Found 5 medium-severity issues and 5 low-severity. All 5 medium issues fixed in this review pass. No high/critical issues found.

## Issues Found & Fixed

### M-1 (Fixed) — eslint-config-next version mismatch
- `eslint-config-next` pinned at `15.4.4` while `next` is `^15.5.2`
- **Fix:** Aligned to `^15.5.2` in package.json, ran npm install

### M-2 (Fixed) — Progress bar missing ARIA attributes
- `UnitMasteryProgressBar.tsx` inner bar `<div>` had no `role`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- **Fix:** Added `role="progressbar"` and ARIA value attributes to the track div

### M-3 (Fixed) — UNIT_TERM_COUNTS computed independently in 3 files
- `StudyDataContext.tsx`, `PracticeHubHome.tsx`, `ProgressDashboard.tsx` each built the same map
- **Fix:** Exported `UNIT_TERM_COUNTS` from `StudyDataContext.tsx`, removed duplicate computation in the other 2 files

### M-4 (Fixed) — Duplicate LessonPhase interfaces in 2 files
- `StudentLessonOverview.tsx` had an identical copy of `LessonPhase`
- `TeacherLessonPlan.tsx` had a divergent copy (required description, extra developerNotes)
- **Fix:** Replaced with imports from `@/types/lesson`; `TeacherLessonPlan` now extends the canonical type as `TeacherLessonPhase`

### M-5 (Fixed) — LessonProgressContext LessonPhase naming collision
- `LessonProgressContext.tsx` exported `type LessonPhase` (string union) with same name as the canonical `interface LessonPhase` in `@/types/lesson`
- **Fix:** Renamed to `LessonProgressPhaseName`; updated 5 lesson-data imports with alias

## Issues Recorded (Not Fixed — Low Severity)

### L-1 — 8 practice-test pages import LessonPhase via backward-compat re-export
- Works fine via `PhaseHeader.tsx` re-export, but migration to `@/types/lesson` is incomplete
- Added to tech-debt.md

### L-2 — useUnitMastery hook has no test coverage
- Only the pure helper `getUnitMasteryInfo` is tested; the hook wrapper (loading state → null path) is untested
- No `@testing-library/react` in project; noted in tech-debt.md

### L-3 — masteryColor thresholds don't align with proficiency_band thresholds
- `masteryColor`: ≥75 green, ≥50 amber, <50 red (0-100 scale)
- `proficiency_band`: ≥0.85 strong, ≥0.6 proficient, ≥0.3 developing, <0.3 new (0-1 scale)
- Intentional but should be documented; noted in tech-debt.md

### L-4 — UnitMasteryProgressBar returns null for zero-study users
- Design choice to avoid "0/X terms · 0%" which is discouraging
- No fix needed; noted as UX decision

### L-5 — 5 lesson-data files cast non-standard phase names with `as LessonPhase`
- "Project Presentation", "Project Milestone", "Project Launch" aren't in the canonical union
- Type system can't validate these; noted in tech-debt.md

## Verification

- Tests: 221 passed (15 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 errors, 0 warnings
