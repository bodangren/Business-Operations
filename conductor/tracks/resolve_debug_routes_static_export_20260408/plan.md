# Implementation Plan: Resolve Debug Routes Static Export Issue

## Phases

### Phase 1: Refactor debug routes to dynamic catch-all with generateStaticParams
- [ ] Task 1: Create src/components/debug-pages/ directory and move all debug page components there
- [ ] Task 2: Create src/app/debug/[...slug]/page.tsx with slug-to-component mapping
- [ ] Task 3: Add generateStaticParams that returns all slugs in dev, empty array in production
- [ ] Task 4: Update debug landing page to work with new structure
- [ ] Task 5: Remove old static debug route directories

### Phase 2: Verify and test
- [ ] Task 1: Run npm run dev and verify all debug routes work
- [ ] Task 2: Run npm run build and verify debug routes are not in out/ directory
- [ ] Task 3: Update tech-debt.md to mark item as resolved

## Status
- [ ] Phase 1: Refactor debug routes to dynamic catch-all with generateStaticParams
- [ ] Phase 2: Verify and test
