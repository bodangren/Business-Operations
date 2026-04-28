# Plan: Non-Standard Phase Names Fix

## Phase 1: Extend type union & remove casts

### Task 1.1: Write tests for phase name types
- [x] Write a test that verifies `LessonPhaseName` includes the 3 project phase names
- [x] Write a test that verifies `LessonProgressPhaseName` includes the 3 project phase names
- [x] Run tests — confirm RED (expected failure)

### Task 1.2: Extend type unions
- [x] Add `"Project Launch" | "Project Milestone" | "Project Presentation"` to `LessonPhaseName` in `src/types/lesson.ts`
- [x] Add same values to `LessonProgressPhaseName` in `src/contexts/LessonProgressContext.tsx`
- [x] Run tests — confirm GREEN

### Task 1.3: Remove unsafe casts from 5 lesson-data files
- [x] `unit04/lesson07/lesson-data.ts` — remove `as LessonPhase` (valid phases, cast unnecessary)
- [x] `unit03/lesson07/lesson-data.ts` — remove `as LessonPhase` (valid phases, cast unnecessary)
- [x] `unit04/lesson08/lesson-data.ts` — remove `as LessonPhase` ("Project Launch" now valid)
- [x] `unit04/lesson09/lesson-data.ts` — remove `as LessonPhase` ("Project Milestone" now valid)
- [x] `unit04/lesson10/lesson-data.ts` — remove `as LessonPhase` ("Project Presentation" now valid)
- [x] Run `npx tsc --noEmit` — confirm no type errors
- [x] Run full test suite — confirm all pass

### Task 1.4: Phase completion verification
- [x] Run lint: `npx eslint .`
- [x] Run build: `npm run build`
- [x] Verify no new warnings or errors
