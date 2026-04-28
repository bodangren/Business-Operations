# Code Review: Audit of 3 Recent Tracks

**Date:** 2026-04-07
**Reviewer:** Automated code-review consultant
**Tracks Audited:**
1. `consolidate_phase_names_20260407` — consolidate LessonPhaseName unions
2. `phase_icons_fallback_20260407` — tighten PHASE_ICONS types + fallback helpers
3. `use_unit_mastery_tests_20260407` — hook test coverage

---

## Verification Baseline

- Tests: 270 passed (21 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, compiled successfully

---

## Issues Found

### M1 — StudentLessonOverview mutates props array via `.sort()` [FIXED]

- **File:** `src/components/student/StudentLessonOverview.tsx:43`
- **Problem:** `phases.sort((a, b) => ...)` mutates the `phases` prop in-place. Both `PhaseHeader` and `PhaseFooter` correctly use `[...phases].sort()` — this component was the outlier.
- **Risk:** If a parent component holds a reference to the same array, order changes leak upward. No current caller is affected, but it violates React immutability contract.
- **Fix:** Changed to `[...phases].sort(...)`, matching the pattern in PhaseHeader/PhaseFooter.

### M2 — Misleading hook test: name and comments don't match assertion [FIXED]

- **File:** `src/contexts/__tests__/useUnitMastery.hook.test.ts:55–74`
- **Problem:** Test named "returns null while loading" contained dead-code comments explaining why it *can't* test loading state, then asserted `result.current` is NOT null — the exact opposite of what the name says.
- **Fix:** Renamed to "returns result after synchronous load completes" and removed misleading comments. Assertion now matches the description.

---

## Observations (no action needed)

- `phase-config.ts` helper functions use `Record<string, ...>` casts inside their bodies — this is a necessary workaround since `Record<LessonPhaseName, ...>` doesn't allow string-keyed indexing. The pattern is correct and contained.
- `lesson-registry.ts` has 80 `as UnitId` casts — unavoidable given TypeScript's string-literal inference limits with 80 entries. No real issue.
- `"finance"` TopicTag has no production glossary entries — already tracked in tech-debt.md L18.
- 5 lesson-data files still import `LessonProgressPhaseName` from context — already tracked in tech-debt.md L19.

---

## Tech-Debt Updates

- Closed: none new
- Added: none new (both M-level issues were fixed in this review)
