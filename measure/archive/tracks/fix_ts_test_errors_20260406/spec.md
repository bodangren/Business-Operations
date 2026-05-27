# Specification: Fix 13 Pre-existing TS Errors in Test Files

## Overview
`tsc --noEmit` reports 13 errors across 4 test files. These are type-safety gaps that prevent strict CI and mask real bugs. All errors are in test code, not production code.

## Error Categories

1. **`UnitId` template literal mismatch** (2 errors)
   - `index-records.test.ts:28`, `lesson-registry.test.ts:33`
   - `\`unit${string}\`` is not assignable to `UnitId`

2. **Invalid `TopicTag` literal** (1 error)
   - `export-builders.test.ts:276`
   - `"finance"` is not in the `TopicTag` union

3. **`readonly` → mutable `TopicTag[]`** (7 errors)
   - `record-session.test.ts:120,130,139,148,162,173,185,195`
   - `as const` produces `readonly ["accounting"]` but `RecordSessionOptions.topic_tags` expects `TopicTag[]`

4. **Partial session objects cast to full types** (2 errors)
   - `export.test.ts:208`, `storage.test.ts:153`
   - `{ session_id: "s1" } as unknown as ExportSession[]` — missing required properties

5. **CSV optional column type mismatch** (1 error)
   - `export.test.ts:234`
   - Optional column names not assignable to required-column union type

## Acceptance Criteria
- `npx tsc --noEmit` exits 0
- All existing tests still pass
- No changes to production source files (test files only, except adding "finance" to TopicTag union)
