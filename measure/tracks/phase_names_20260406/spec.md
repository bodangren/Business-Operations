# Spec: Non-Standard Phase Names — Extend Type Union & Remove Unsafe Casts

## Overview

Five lesson-data files use `as LessonPhase` to bypass TypeScript's `LessonPhaseName` union. Three of those files cast genuinely non-standard phase names ("Project Launch", "Project Milestone", "Project Presentation") that are missing from the canonical type. The other two files cast valid phase names unnecessarily. This track extends the type union and removes all unsafe casts.

## Functional Requirements

1. `LessonPhaseName` (in `src/types/lesson.ts`) and `LessonProgressPhaseName` (in `src/contexts/LessonProgressContext.tsx`) must include all phase names used across the codebase.
2. No lesson-data file should use `as LessonPhase` or `as LessonProgressPhaseName` to cast a string literal.
3. The three project-phase names must be added to both type unions: `"Project Launch"`, `"Project Milestone"`, `"Project Presentation"`.

## Non-Functional Requirements

- No runtime behavior changes.
- All existing tests must continue to pass.
- Build must complete successfully.

## Acceptance Criteria

- `LessonPhaseName` union contains 9 values (6 original + 3 project phases).
- `LessonProgressPhaseName` union mirrors the same 9 values.
- Zero `as LessonPhase` or `as LessonProgressPhaseName` casts in lesson-data files.
- `npx tsc --noEmit` passes with no new errors.
- All 235+ tests pass.

## Out of Scope

- Refactoring lesson-data files that don't use `as` casts.
- Changing how phases render in the UI.
- Adding new components for project phases.
