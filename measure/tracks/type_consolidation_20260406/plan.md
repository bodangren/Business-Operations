# Implementation Plan: Type Consolidation

## Phase 1: Shared types + component refactor

- [x] Create `src/types/lesson.ts` with `LessonRef`, `UnitRef`, `LessonPhase`, `LessonPhaseName`
- [x] Update `src/components/student/PhaseHeader.tsx`:
  - Remove inline `LessonPhase` definition
  - Import from `@/types/lesson`
  - Replace index signature props with `LessonRef` / `UnitRef`
  - Re-export `LessonPhase` for backward compat
- [x] Update `src/components/student/PhaseFooter.tsx`:
  - Remove inline `LessonPhase` definition
  - Import from `@/types/lesson`
  - Replace index signature props with `LessonRef` / `UnitRef`
  - Re-export `LessonPhase` for backward compat
- [x] Update `src/components/student/Lesson01Phase1.tsx`:
  - Replace inline props with `LessonRef` / `UnitRef`
- [x] Practice-test pages: backward compat via re-export (no changes needed)
- [x] Run `npm run lint`
- [x] Run `npm run build`
- [x] Tests: 221 passed (15 suites)
- [x] Commit: `refactor(types): consolidate PhaseHeader/PhaseFooter into shared LessonRef/UnitRef interfaces`
