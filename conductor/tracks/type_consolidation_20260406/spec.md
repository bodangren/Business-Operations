# Specification: Type Consolidation — PhaseHeader/PhaseFooter

## Overview

Replace `[key: string]: unknown` index signatures in PhaseHeader, PhaseFooter, and Lesson01Phase1 with proper shared interfaces. Consolidate the duplicate `LessonPhase` interface into a single source of truth in `src/types/lesson.ts`.

## Problem

- `PhaseHeader.tsx` and `PhaseFooter.tsx` both define identical `LessonPhase` interfaces inline
- Both use `{ id: string; title: string; sequence: number; unitId: string; [key: string]: unknown }` for lesson props and `{ id: string; title: string; sequence: number; [key: string]: unknown }` for unit props
- `Lesson01Phase1.tsx` repeats the same index-signature types for its props
- The `LessonPhase` union type in `LessonProgressContext.tsx` duplicates the phaseName values
- 8 practice-test pages import `LessonPhase` from PhaseHeader, creating a fragile coupling

## Requirements

1. Create `src/types/lesson.ts` exporting:
   - `LessonRef` — minimal lesson shape: `{ id, title, sequence, unitId }`
   - `UnitRef` — minimal unit shape: `{ id, title, sequence }`
   - `LessonPhase` — canonical interface with `{ id, phaseName, sequence, description? }`
   - `LessonPhaseName` — union type for phase names

2. Update `PhaseHeader.tsx`:
   - Remove inline `LessonPhase` interface
   - Import from `@/types/lesson`
   - Use `LessonRef` and `UnitRef` in props (replacing index signatures)

3. Update `PhaseFooter.tsx`:
   - Same changes as PhaseHeader

4. Update `Lesson01Phase1.tsx`:
   - Replace inline props types with `LessonRef` and `UnitRef`

5. Update practice-test pages:
   - Change `import { type LessonPhase } from "@/components/student/PhaseHeader"` to `import { type LessonPhase } from "@/types/lesson"`

6. Re-export `LessonPhase` from PhaseHeader for backward compatibility (not break external consumers)

## Out of Scope

- `StudentLessonOverview.tsx` and `TeacherLessonPlan.tsx` LessonPhase interfaces (internal, unused externally)
- `LessonProgressContext.tsx` union type (different type: `type LessonPhase = 'Hook' | ...` not an interface)

## Acceptance Criteria

- Zero `[key: string]: unknown` index signatures in PhaseHeader, PhaseFooter, Lesson01Phase1
- Single canonical `LessonPhase` definition
- All existing tests pass
- `npm run lint` clean
- `npm run build` succeeds
