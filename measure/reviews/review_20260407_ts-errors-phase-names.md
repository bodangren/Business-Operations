# Review Report: fix_ts_test_errors + consolidate_phase_names

**Date:** 2026-04-07
**Scope:** 2 tracks — `fix_ts_test_errors_20260406`, `consolidate_phase_names_20260407`
**Commits:** `b6d95a8`..`84b4ee8`

## Summary

Both tracks implemented correctly with clean type fixes. One M-level issue found and fixed during review (unnecessary `as unknown as` cast defeating the compile-time alias check). No critical or high-severity issues.

## Verification Checks

- [x] Plan Compliance: Yes — both tracks match spec and plan
- [x] Style Compliance: Pass — follows existing patterns
- [x] New Tests: Yes — 1 new bidirectional assignability test (consolidate track)
- [x] Test Coverage: Yes — alias test now enforces compile-time equivalence at call site
- [x] Test Results: Passed — 256/256 tests, 20/20 suites
- [x] ESLint: 0 warnings, 0 errors
- [x] tsc: 0 errors
- [x] Build: 603 pages generated successfully

## Findings

### [Medium — Fixed] Bidirectional alias test bypassed its own compile-time check
- **File:** `LessonProgressPhaseName.test.ts:66`
- **Context:** The test called `assertAliasEquivalence(sample, sample as unknown as LessonProgressPhaseName)`. Since `LessonProgressPhaseName = LessonPhaseName` (type alias), the `as unknown as` was unnecessary and defeated the purpose — if the types ever diverged, the cast would still compile, making the test a false positive.
- **Fix applied:** Removed the cast. Call is now `assertAliasEquivalence(sample, sample)` which will fail at compile time if the types diverge.

### [Low] `"finance"` TopicTag has no production usage
- **File:** `glossary.ts:30`, `GlossaryFilters.tsx:27`
- **Context:** `"finance"` was added to the `TopicTag` union to resolve a test error in `export-builders.test.ts:276`. No actual glossary entries use this tag. The `TOPIC_LABELS` record must include it (compile-time `Record<TopicTag, string>` constraint), so "Finance" appears in the glossary topic filter dropdown even though selecting it returns zero results.
- **Risk:** Low — cosmetic only, no runtime impact.
- **Suggestion:** Either add glossary entries tagged `"finance"` or change the test mock to use an existing tag like `"accounting"`.

### [Low] 5 lesson-data files still import from React context
- **Files:** `unit03/lesson07/lesson-data.ts`, `unit04/lesson{07,08,09,10}/lesson-data.ts`
- **Context:** These data files import `LessonProgressPhaseName` from `LessonProgressContext.tsx` (a `"use client"` React context). The import works because TypeScript erases types, but it creates a conceptual coupling between pure data modules and a React context. Per spec this was intentional (backward compat).
- **Suggestion:** Follow-up track to migrate these 5 imports to `@/types/lesson` directly.

## Decision

1 issue fixed (M-level alias test cast). 2 low-severity items noted for future consideration.
