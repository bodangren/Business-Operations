# Plan: Migrate audit.ts to TypeScript Compiler API

## Context
The current `audit.ts` uses fragile regex patterns to parse `.ts` data files. The TypeScript Compiler API (already in the project as `typescript@^5`) can parse these files into AST nodes, providing a robust, future-proof approach.

## Approach
Replace the three regex-based loader functions with AST-walking equivalents using `ts.createSourceFile` and `ts.forEachChild`.

## Files to Modify
- `measure/tracks/teacher_student_data_alignment_20260429/audit.ts`

## Implementation Steps

### Step 1: Add TS Compiler API helpers
Create a small set of helper functions:
- `parseSourceFile(filePath: string): ts.SourceFile` — reads file and creates AST
- `findExportedConst(sourceFile, namePattern): ts.VariableDeclaration | undefined` — finds `export const lessonXXData = ...`
- `extractObjectLiteral(node): Record<string, unknown>` — recursively extracts values from object literal nodes
- `extractArrayLiteral(node): unknown[]` — recursively extracts values from array literal nodes
- `extractString(node): string` — handles string literals and `as const` casts
- `extractNumber(node): number` — handles numeric literals

### Step 2: Rewrite `loadStudentLessonData`
- Use `ts.createSourceFile` to parse each `lesson-data.ts`
- Find `lessonXXData` export → extract object literal → read `id`, `title`, `sequence`, `unitId`, `durationEstimateMinutes`
- Find `lessonXXPhases` export → extract array of objects → read `phaseName`, `sequence`

### Step 3: Rewrite `loadUnitData`
- Parse `unitXX.ts`
- Navigate to `unitXXData.assessment.milestones` array
- Extract each milestone's `id`, `day`, `title`, `description`, `criteria`
- Navigate to `unitXXData.assessment.rubric` array
- Extract each rubric entry's `name`, `weight`, `exemplary`, `proficient`, `developing`

### Step 4: Rewrite `loadTeacherLessonPlan`
- Parse `unitXX-lesson-plan.ts`
- Navigate to `.learningPlan.dailyLessons` array → extract `day`, `title`, `focus`, `duration`
- Navigate to `.assessment.milestones` array → extract `day`, `title`, `description`, `criteria`
- Navigate to `.assessment.rubric` array → extract `name`, `weight`, etc.

### Step 5: Remove regex imports and old functions
- Delete all regex-based parsing code
- Keep `auditUnit`, `parseDurationMinutes`, types, and CLI entrypoint unchanged

### Step 6: Verify
- Run `npx tsx measure/tracks/teacher_student_data_alignment_20260429/audit.ts 6`
- Run `npx tsx measure/tracks/teacher_student_data_alignment_20260429/audit.ts 7`
- Run `npx tsx measure/tracks/teacher_student_data_alignment_20260429/audit.ts 8`
- Confirm output matches current regex-based results (0 blockers for all units)
- Run `npm run typecheck` from `bus-math-nextjs/`

## Key Design Decisions
- Use `typescript` directly (no `ts-morph` dependency)
- Parse files individually (no program creation) — faster and simpler
- Use `ts.isPropertyAssignment`, `ts.isStringLiteral`, `ts.isNumericLiteral` type guards
- Handle `as const` assertions by checking `ts.isAsExpression` and extracting the operand
- Use `process.cwd()` for REPO_ROOT (existing lesson learned)

## Out of Scope
- Changing the audit logic/comparison functions
- Adding new audit fields
- Modifying data files
