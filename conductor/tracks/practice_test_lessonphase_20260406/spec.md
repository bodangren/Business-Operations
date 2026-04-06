# Specification: Practice-test page LessonPhase migration

## Overview

8 practice-test pages import `LessonPhase` from `@/components/student/PhaseHeader`, which re-exports it from `@/types/lesson`. This creates an unnecessary dependency chain and obscures the canonical type source. Each page should import `LessonPhase` directly from `@/types/lesson`.

## Functional Requirements

- All 8 practice-test pages (`unit01` through `unit08`) import `LessonPhase` from `@/types/lesson` instead of `@/components/student/PhaseHeader`.
- `PhaseHeader` component import is retained (it's still used for rendering).
- No runtime behavior changes — this is a purely mechanical import path change.

## Non-Functional Requirements

- Type safety preserved: `LessonPhase` interface remains identical.
- No new circular dependencies introduced.

## Acceptance Criteria

- [ ] `grep -r "LessonPhase.*PhaseHeader" src/` returns zero results.
- [ ] All 8 practice-test pages compile without errors.
- [ ] `npm run lint` passes with 0 errors/warnings.
- [ ] All existing tests pass.

## Out of Scope

- Removing the re-export from `PhaseHeader.tsx` (other consumers may still use it).
- Any changes to the `LessonPhase` type definition itself.
