# Implementation Plan: Gate Debug Routes Behind Dev-Only Flag

## Phase 1: Middleware + Tests

### Tasks

- [ ] 1.1 — Write tests for `isDebugRouteBlocked()` helper in `src/__tests__/middleware.test.ts`
  - Test: returns false for non-debug paths
  - Test: returns true for `/debug` in production
  - Test: returns true for `/debug/exercises` in production
  - Test: returns false for `/debug` in development
  - Test: returns false for paths starting with `/debug-something` (exact prefix match)
- [ ] 1.2 — Implement `isDebugRouteBlocked(pathname, nodeEnv)` helper in `src/middleware.ts`
- [ ] 1.3 — Implement Next.js middleware export using the helper
- [ ] 1.4 — Run tests, verify all pass
- [ ] 1.5 — Run `npm run lint` — 0 errors
- [ ] 1.6 — Run `npm run build` — compiled successfully
- [ ] 1.7 — Commit: `chore(security): gate debug routes behind dev-only middleware`
