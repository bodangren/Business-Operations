# Specification: Gate Debug Routes Behind Dev-Only Flag

## Overview

The `/debug/*` route pages (10 pages covering exercises, charts, components, accounting, etc.) are accessible in production builds. These pages expose internal component testing UIs that should never be seen by end users. This track gates them behind a dev-only check using Next.js middleware.

## Functional Requirements

### FR-1: Middleware Route Guard
- Create `src/middleware.ts` (Next.js Edge Middleware).
- Intercept requests to `/debug` and `/debug/*`.
- In production (`NODE_ENV === "production"`), return 404 Not Found.
- In development, pass through normally.

### FR-2: No Debug Page Changes
- Leave all existing debug page files untouched — the middleware handles gating at the routing layer.
- No changes to debug page imports, layouts, or content.

### FR-3: Build Configuration
- Ensure `npm run build` still compiles debug routes (Next.js statically generates them).
- Debug pages should still be accessible via `npm run dev` in all environments.

## Non-Functional Requirements

- Middleware must use Edge-compatible APIs only (no Node.js `fs` or `process` beyond `NODE_ENV`).
- No new dependencies.
- Unit tests for the middleware logic (extracted into a testable helper).
- `npm run lint` and `npm run build` must pass.

## Acceptance Criteria

- [ ] `/debug` returns 404 in production build
- [ ] `/debug/exercises` returns 404 in production build
- [ ] `/debug` is accessible in development mode
- [ ] Middleware tests pass
- [ ] All existing tests still pass
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes

## Out of Scope

- Removing debug pages entirely (they are useful for development).
- Auth-based access control for debug routes.
- Environment-variable-based toggle beyond `NODE_ENV`.
