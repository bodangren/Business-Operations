# Lessons Learned

## 2026-04-04 — Phase 2: Low-Fi Wireframes

- Wireframes as self-contained HTML files work well: no build tooling, openable directly in browser, easy to diff in git.
- Inline styles keep each file independent but make them verbose — acceptable for static mocks.
- The `wireframes/` directory in the track folder is the right home — co-located with spec/plan.
- Annotations embedded in each wireframe (yellow boxes) serve as the Phase 3 handoff reference.
- No test script exists (`npm run test` fails) — project relies on vitest config but no `test` alias in package.json scripts.
