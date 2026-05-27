# Specification: Resolve Debug Routes Static Export Issue

## Overview
The debug routes (`/debug/*`) are currently gated behind a dev-only middleware that checks `process.env.NODE_ENV === 'development'`. However, with `output: 'export'` (static site generation for GitHub Pages), middleware does not run at all. This means all debug pages are included in the static export and served publicly.

## Functional Requirements
1. **Decision**: Choose one approach:
   - **Option A**: Exclude debug routes from static export entirely
   - **Option B**: Document as known limitation and leave debug pages public in static export
2. **Implementation**: Execute the chosen option

## Non-Functional Requirements
1. **Backward compatibility**: If excluding, ensure debug routes still work in dev mode
2. **Minimal changes**: Touch only necessary files

## Acceptance Criteria
- If Option A is chosen:
  - [ ] Debug routes are not present in `out/` directory after static build
  - [ ] Debug routes still work in `npm run dev`
- If Option B is chosen:
  - [ ] Documentation updated to note the limitation

## Out of Scope
- Adding authentication to debug routes
- Changing debug route functionality
