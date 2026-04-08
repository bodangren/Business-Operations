# Implementation Plan: Glossary ID from Slug

## Phases

### Phase 1: Update Glossary Data
- [ ] Task: Verify all slugs are unique
- [ ] Task: Replace each entry's `id` with its `slug` in `glossaryData`
- [ ] Task: Run typecheck, lint, tests to validate

### Phase 2: Update References (if any)
- [ ] Task: Search for any references to old `"g-XXX"` IDs
- [ ] Task: Update any found references (if needed)

### Phase 3: Verify and Finalize
- [ ] Task: Run full test suite
- [ ] Task: Run production build
- [ ] Task: Commit changes
