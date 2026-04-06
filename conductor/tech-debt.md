# Tech Debt

## Active

- [x] ~`next lint` deprecated — migrated to ESLint CLI (`eslint .`) (fixed 2026-04-05)~
- [ ] Multiple lockfile warning — set `outputFileTracingRoot` or clean up root lockfile
- [x] ~7 eslint warnings (react-hooks: 2 rules-of-hooks, 4 exhaustive-deps, 1 useMemo dep) — was 571, Phase 1 auto-fix removed unused imports (2026-04-05), Phase 2 prefixed unused vars (2026-04-05), review audit fixed 1 critical runtime bug + 5 interface regressions (2026-04-05), Phase 3 replaced all 227 no-explicit-any with proper types (2026-04-05), Phase 4 resolved all react-hooks warnings: 0 remaining (2026-04-05)
- [x] ~Dead code with `_` prefix in ~13 components — all 30 instances removed across 26 files (2026-04-05)~
- [x] ~Header unit data hardcoded in `header.tsx` instead of derived from canonical sources — any unit rename requires 4+ file edits (L3 from audit)~ (fixed 2026-04-06)
- [x] ~Unit data objects duplicated in every lesson-data file — all 8 units repeat `unitXXData` across 10 lesson-data files each (80 total copies); should derive from `unit-registry.ts` or canonical `src/data/unitXX.ts` (was L4 from audit, broadened 2026-04-06)~ (fixed 2026-04-06)
- [x] ~Unit 01 lesson-data title `"Unit 1: Smart Ledger Launch"` differs from canonical `unit01.ts` title `"Smart Ledger Launch"` — resolve as part of unit-data dedup track (found in review, 2026-04-06)~ (fixed 2026-04-06)
- [x] ~`index-records.ts` `lessonPages` array is 80 manually maintained entries — should derive from lesson-data files for single-source-of-truth (found in review, 2026-04-06)~ (fixed 2026-04-06)
- [x] `/debug/` route pages gated behind dev-only middleware — returns 404 in production (L1 from audit, fixed 2026-04-05)
- [ ] Glossary IDs manually assigned (`g-001` through `g-103+`) — collision risk as terms grow (L2 from audit)
- [x] `index-records.ts` has empty `lessonPages` array — populated with all 80 lesson entries (M4 from audit, fixed 2026-04-05)
- [x] `StudyDueBadge` loads study data per-instance — 8 hub cards = 8 redundant localStorage reads (L1 from CTAs review, fixed 2026-04-05)
- [ ] `eslint-config-next` version should stay in sync with `next` — now aligned to `^15.5.2` (2026-04-06)
- [x] ~`"finance"` TopicTag has no production glossary entries — added for test mock in `export-builders.test.ts:276`; "Finance" appears in glossary filter dropdown with zero results (L2 from review, 2026-04-07)~ (fixed 2026-04-07)
- [x] ~5 lesson-data files (`unit03/lesson07`, `unit04/lesson{07-10}`) import `LessonProgressPhaseName` from React context — should migrate to `@/types/lesson` directly to remove data→context coupling (L3 from review, 2026-04-07)~ (fixed 2026-04-07)
- [x] ~8 practice-test pages still import `LessonPhase` from `@/components/student/PhaseHeader` via backward-compat re-export — should migrate to `@/types/lesson` (L5 from review, 2026-04-06)~ (fixed 2026-04-06)
- [x] ~`masteryColor` thresholds (75/50) don't align with `proficiency_band` thresholds (85/60/30) — document or unify (L3 from review, 2026-04-06)~ (fixed 2026-04-07)
- [x] ~`useUnitMastery` hook has no test coverage — only pure helper `getUnitMasteryInfo` is tested (L2 from review, 2026-04-06)~ (fixed 2026-04-07)
- [x] ~5 lesson-data files use `as LessonPhase` to cast non-standard phase names ("Project Presentation", "Project Milestone", "Project Launch") — type system can't catch invalid phases (from review, 2026-04-06)~ (fixed 2026-04-06)
- [x] ~`phaseIcons` map duplicated across 3 component files (PhaseHeader, PhaseFooter, StudentLessonOverview) — adding a phase requires updating all 3; extract to shared constant (L1 from review, 2026-04-06)~ (fixed 2026-04-06)
- [x] ~`LessonPhaseName` (lesson.ts) and `LessonProgressPhaseName` (LessonProgressContext.tsx) are independent unions — no compile-time guarantee they stay in sync (L2 from review, 2026-04-06)~ (fixed 2026-04-07)
- [x] ~13 pre-existing TS errors in 4 test files — `readonly` array → mutable, `UnitId` template literal, `TopicTag` literal, export schema mismatches (L3 from review, 2026-04-06)~ (fixed 2026-04-06)

## Resolved

- [x] ~PHASE_ICONS/COLORS/DESCRIPTIONS typed as `Record<string, ...>` — no compile error when phase is missing; no fallback causes React crash on unknown key (from lessons-learned 2026-04-06, fixed 2026-04-07)~
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
- [x] `UnitMasteryProgressBar` missing `role="progressbar"` + ARIA value attributes — added (M2 from review, fixed 2026-04-06)
- [x] `LessonPhase` naming collision between `LessonProgressContext` (string union) and `@/types/lesson` (interface) — renamed to `LessonProgressPhaseName` (M5 from review, fixed 2026-04-06)
- [x] `UNIT_TERM_COUNTS` computed independently in 3 files — consolidated into shared export from `StudyDataContext.tsx` (M3 from review, fixed 2026-04-06)
- [x] Duplicate `interface LessonPhase` in `StudentLessonOverview.tsx` and `TeacherLessonPlan.tsx` — replaced with canonical imports/extensions (M4 from review, fixed 2026-04-06)
- [x] `eslint-config-next@15.4.4` vs `next@^15.5.2` version mismatch — aligned to `^15.5.2` (M1 from review, fixed 2026-04-06)
