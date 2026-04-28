# Review Report: Unit Study CTAs + Debug Route Gating

**Date:** 2026-04-05
**Reviewer:** Automated code-review audit
**Scope:** `unit_study_ctas_20260404` (all phases) + `gate_debug_routes_20260405` (phase 1)
**Commits:** `5f83094..9afcc4b`

---

## Summary

Two tracks reviewed: the unit-level study CTA badge system (4 phases) and the debug route middleware gate (1 phase). Both tracks are well-implemented with solid test coverage (10 derived tests + 7 middleware tests). No CRITICAL bugs found. One HIGH-severity performance issue was identified and fixed — `getDueCountForUnit` called `getDueCountByUnit` internally, causing O(all_units × all_terms) work for a single-unit query. On the hub page with 8 unit cards, each `StudyDueBadge` instance independently loads study data from localStorage (8 redundant reads), though this is acceptable for current data sizes.

## Verification Checks

- [x] Plan Compliance: Yes — all tasks completed in both tracks
- [x] Style Compliance: Pass — follows existing component patterns (default exports for interactive, named for UI)
- [x] New Tests: Yes — 10 derived + 7 middleware tests
- [x] Test Coverage: Pass — all new utility paths tested
- [x] Test Results: 203/203 passed (12 suites)
- [x] Build: compiled successfully, 603+ static pages
- [x] Lint: 0 errors (warnings are pre-existing)

## Issues Found and Fixed

### HIGH — H-1: `getDueCountForUnit` iterates all units for single-unit query (FIXED)

- **File:** `src/lib/study/derived.ts:129-136`
- **Context:** `getDueCountForUnit` delegated to `getDueCountByUnit`, which builds a full `Record<UnitId, number>` for all 8 units every time. On the hub page with 8 `StudyDueBadge` instances, this meant 8 × 8 = 64 unit-count iterations instead of 8.
- **Fix:** Replaced with direct `getDueTerms` → filter by unit membership. Single pass, no intermediate record.

### MEDIUM — M-1: Middleware matcher may not intercept bare `/debug` path (FIXED)

- **File:** `src/middleware.ts:25-27`
- **Context:** `matcher: "/debug/:path*"` relies on Next.js interpreting `:path*` as zero-or-more segments. While documented to match `/debug`, explicit is better than implicit for security-related routing.
- **Fix:** Changed to `matcher: ["/debug", "/debug/:path*"]` for explicit coverage of both the bare path and sub-paths.

### LOW — L-1: StudyDueBadge instances load study data independently

- **File:** `src/components/student/StudyDueBadge.tsx:28-34`
- **Context:** Each `StudyDueBadge` calls `loadStudyData()` in its own `useEffect`. On the hub page, 8 instances = 8 `localStorage.getItem` + `JSON.parse` calls for the same data.
- **Status:** Deferred — acceptable for current data sizes (~50 terms, ~5KB JSON). Could be optimized with a context provider if data grows significantly.

### LOW — L-2: Middleware returns bare 404 with no body

- **File:** `src/middleware.ts:20`
- **Context:** `new NextResponse(null, { status: 404 })` returns an empty response body. Users who reach `/debug` in production see a blank page.
- **Status:** Deferred — acceptable for debug pages. Users should never reach them in production.

## Outstanding Issues (Not Fixed — Deferred)

| ID | Severity | File | Issue |
|----|----------|------|-------|
| L-1 | LOW | `StudyDueBadge.tsx:28-34` | N redundant localStorage reads on hub page — consider context provider |
| L-2 | LOW | `middleware.ts:20` | Bare 404 response — could redirect to custom not-found page |
| I-1 | INFO | `StudyDueBadge.tsx:18` | `SLUG_UNITS` built from `glossaryData` at module scope — fine, computed once |
| I-2 | INFO | `derived.ts:102-103` | JSDoc comments on `getDueCountByUnit` and `getDueCountForUnit` explain the slug→units mapping well |

## Lessons

1. **Single-unit query should not compute all units**: When adding convenience wrappers, check that the implementation doesn't do unnecessary work. `getDueCountForUnit("unit01", ...)` should scan only once, not build a full 8-unit record.
2. **Security matchers should be explicit**: For route guarding, enumerate all patterns rather than relying on wildcard interpretation. `["/debug", "/debug/:path*"]` is clearer than `"/debug/:path*"`.
3. **Per-instance data loading scales linearly**: Component-per-instance patterns (each badge loads its own data) work at small N but become a smell at scale. A shared context or parent-loaded prop would be better for 8+ instances.
