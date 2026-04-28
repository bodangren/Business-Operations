# Spec: Consolidate Phase Name Unions

## Problem
`LessonPhaseName` (src/types/lesson.ts) and `LessonProgressPhaseName` (src/contexts/LessonProgressContext.tsx) define identical string unions with no compile-time guarantee of sync. Adding a phase to one but not the other silently breaks the type contract.

## Goal
Single canonical `LessonPhaseName` in `@/types/lesson`. `LessonProgressPhaseName` becomes a re-export alias for backward compatibility.

## Scope
- Re-export `LessonPhaseName` as `LessonProgressPhaseName` from `LessonProgressContext.tsx`
- Update test to verify alias equivalence
- No changes needed to lesson-data files (they import `LessonProgressPhaseName` which remains a valid re-export)

## Out of Scope
- Renaming all consumers to use `LessonPhaseName` directly (follow-up)
- Adding new phase names
