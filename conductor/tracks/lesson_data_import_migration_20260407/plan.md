# Plan: Lesson-data Import Migration

## Phase 1: Migrate imports and verify

- [x] Write tests — existing tests cover lesson-data indirectly via `lesson-registry.test.ts`; no new tests needed for type-only import change
- [x] Migrate `unit03/lesson07/lesson-data.ts`
- [x] Migrate `unit04/lesson07/lesson-data.ts`
- [x] Migrate `unit04/lesson08/lesson-data.ts`
- [x] Migrate `unit04/lesson09/lesson-data.ts`
- [x] Migrate `unit04/lesson10/lesson-data.ts`
- [x] Run `tsc` — 0 errors
- [x] Run `eslint .` — 0 warnings, 0 errors
- [x] Run test suite — all pass
- [x] Run `npm run build` — succeeds
- [x] Verify no remaining imports of `LessonProgressPhaseName` from context in lesson-data files
