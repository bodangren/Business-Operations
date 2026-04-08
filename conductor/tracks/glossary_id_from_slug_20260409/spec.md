# Specification: Glossary ID from Slug

## Overview
Replace manually assigned glossary entry IDs (`"g-001"`, `"g-002"`, etc.) with the entry's unique slug to eliminate the risk of ID collisions as the glossary grows.

## Functional Requirements
1. **Use slug as ID**: Every `GlossaryEntry` must use its `slug` field as the `id` field
2. **Maintain uniqueness**: Ensure all slugs are unique (already true, but verify)
3. **Backward compatibility**: No breaking changes to API or data contracts (since `id` remains a `string`)

## Non-Functional Requirements
1. **No runtime changes**: The application behavior must remain identical
2. **Full test coverage**: All existing tests must continue to pass
3. **Type safety**: No TypeScript errors

## Acceptance Criteria
1. All entries in `glossaryData` have `id === slug`
2. No duplicates in `glossaryData` slugs
3. All TypeScript checks pass (`npm run typecheck`)
4. All ESLint checks pass (`npm run lint`)
5. All tests pass (`npm test`)
6. Production build succeeds (`npm run build`)

## Out of Scope
- Changing the `GlossaryEntry` type definition (keep `id: string`)
- Modifying any UI or API behavior
