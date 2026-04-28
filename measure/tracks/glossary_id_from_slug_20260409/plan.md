# Implementation Plan: Glossary ID from Slug

## Phases

### Phase 1: Update Glossary Data
- [x] Task: Verify all slugs are unique
- [x] Task: Replace each entry's `id` with its `slug` in `glossaryData`
- [x] Task: Run typecheck, lint, tests to validate

### Phase 2: Update References (if any)
- [x] Task: Search for any references to old `"g-XXX"` IDs
- [x] Task: Update any found references (if needed)

### Phase 3: Verify and Finalize
- [x] Task: Run full test suite
- [x] Task: Run production build
- [x] Task: Commit changes
