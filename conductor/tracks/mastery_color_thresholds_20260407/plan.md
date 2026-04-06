# Plan: masteryColor Thresholds Alignment

## Phase 1 — Write Tests

- [ ] Create `src/lib/study/__tests__/derived.test.ts` with test cases for `masteryColor`:
  - score >= 85 → green
  - score >= 60 (but < 85) → amber
  - score >= 30 (but < 60) → orange
  - score < 30 → red
  - Boundary values: 29, 30, 59, 60, 84, 85, 100

## Phase 2 — Implement

- [ ] Update `masteryColor` in `src/lib/study/derived.ts` to use 85/60/30 thresholds with 4 color tiers
- [ ] Run tests to verify
- [ ] Run `npm run build`

## Phase 3 — Finalize

- [ ] Mark tech-debt item #21 as resolved
- [ ] Update `current_directive.md` with completion status
- [ ] Commit and push
