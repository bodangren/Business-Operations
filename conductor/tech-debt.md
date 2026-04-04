# Tech Debt

## Active

- [ ] `next lint` deprecated — migrate to ESLint CLI before Next.js 16
- [ ] Multiple lockfile warning — set `outputFileTracingRoot` or clean up root lockfile
- [ ] ~290 eslint warnings (227 `any` types, ~50 unused vars, ~10 hooks rules) — was 571, unused imports auto-fixed (Phase 1 done 2026-04-05)
- [ ] Header unit data hardcoded in `header.tsx` instead of derived from canonical sources — any unit rename requires 4+ file edits (L3 from audit)
- [ ] Unit 7 `unit07Data` object duplicated in every `lesson-data.ts` file — should be a shared import (L4 from audit)
- [x] `/debug/` route pages gated behind dev-only middleware — returns 404 in production (L1 from audit, fixed 2026-04-05)
- [ ] Glossary IDs manually assigned (`g-001` through `g-103+`) — collision risk as terms grow (L2 from audit)
- [ ] `index-records.ts` has empty `lessonPages` array — no lesson-level index entries exist yet (M4 from audit)
- [x] `StudyDueBadge` loads study data per-instance — 8 hub cards = 8 redundant localStorage reads (L1 from CTAs review, fixed 2026-04-05)

## Resolved

- [x] Duplicate Key Vocabulary card in StudentUnitOverview — rendering every unit overview with two identical cards (C1, fixed 2026-04-04)
- [x] Stale "Asset & Inventory Tracker" references in 14 locations across components, debug pages, and text — aligned to "Inventory Accounting" (H1, fixed 2026-04-04)
- [x] DepreciationMethodBuilder.tsx incorrectly tagged as Unit 7 content — moved to Unit 8 (H1, fixed 2026-04-04)
- [x] unit-project-frameworks.ts Unit 7 title was "Inventory Tracker & Valuation" — aligned to "Inventory Accounting" and removed depreciation-only deliverables/requirements (H3, fixed 2026-04-04)
- [x] unit07/page.tsx had incomplete data mapping for lessons 5-10 — expanded overviewBuildGoals from 4 to 10 entries (H4, fixed 2026-04-04)
- [x] lesson04 phase had duplicate "Introduction" phaseName — first phase renamed to "Hook" (M3, fixed 2026-04-04)
- [x] Practice test tips hardcoded "Complete Lesson 07" for all 8 units — changed to "Lesson 10" (M5, fixed 2026-04-04)
- [x] Footer "Teacher Resources" section had duplicate Subject Index link — replaced with Teacher Dashboard link (M2, fixed 2026-04-04)
- [x] Unit 07 unit07-text.md still had old framing mentioning depreciation — rewritten to inventory-only scope (H1, fixed 2026-04-04)
- [x] Unit 8 debug exercises page referenced "Year-1 Startup Model" — updated to "Fixed Assets and Depreciation" (H2, fixed 2026-04-04)
