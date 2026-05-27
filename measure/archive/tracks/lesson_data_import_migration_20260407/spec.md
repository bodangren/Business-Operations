# Spec: Lesson-data Import Migration

## Overview

5 lesson-data files import `LessonProgressPhaseName` from `@/contexts/LessonProgressContext`, a React context module. These are pure data modules that should not depend on a `"use client"` context. The canonical type `LessonPhaseName` lives in `@/types/lesson` and is already the single source of truth — the context re-exports it as an alias.

## Functional Requirements

- Replace `import { LessonProgressPhaseName } from "@/contexts/LessonProgressContext"` with `import type { LessonPhaseName } from "@/types/lesson"` in all 5 files.
- Replace all usages of `LessonProgressPhaseName` with `LessonPhaseName` in each file.
- No runtime behavior change — the types are identical.

## Non-Functional Requirements

- Removes data→context coupling (pure data modules no longer depend on React context).
- Aligns with the type consolidation work done in `consolidate_phase_names_20260407`.

## Acceptance Criteria

- All 5 files import from `@/types/lesson` instead of `@/contexts/LessonProgressContext`.
- `tsc` passes with 0 errors.
- `eslint .` passes with 0 warnings/errors.
- Full test suite passes.
- Build succeeds.

## Affected Files

1. `src/app/student/unit03/lesson07/lesson-data.ts`
2. `src/app/student/unit04/lesson07/lesson-data.ts`
3. `src/app/student/unit04/lesson08/lesson-data.ts`
4. `src/app/student/unit04/lesson09/lesson-data.ts`
5. `src/app/student/unit04/lesson10/lesson-data.ts`
