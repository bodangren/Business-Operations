# Plan: Consolidate Phase Name Unions

## Phase 1: Consolidate type definition

- [x] Task 1: Write failing test — verify `LessonProgressPhaseName` is assignable to `LessonPhaseName`
- [x] Task 2: Make `LessonProgressContext.tsx` import `LessonPhaseName` from `@/types/lesson` and re-export as `LessonProgressPhaseName`
- [x] Task 3: Update existing `LessonProgressPhaseName` test to verify alias equivalence
- [x] Task 4: Run full test suite — all tests pass (256/256)
- [x] Task 5: Run `npm run build` — compiled successfully (603 pages)
- [x] Task 6: Update track plan, commit with note, push
