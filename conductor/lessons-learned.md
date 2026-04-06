# Lessons Learned

## 2026-04-06 — Mastery Progress Bars on Unit Cards

- **Existing derived data goes unused**: `deriveStats()` computed `unitMastery` with `termsStudied`, `termsTotal`, `avgMastery` but nothing consumed it. When adding features, audit existing utilities before writing new logic — the helper functions (`masteryColor`, `UnitMastery` interface) were already there.
- **Module-level maps for unit term counts**: Building `UNIT_TERM_COUNTS` from `glossaryData` at module load (like `SLUG_UNITS`) avoids recomputing per-render and keeps hooks pure.
- **Custom bar vs. Progress component**: The existing `<Progress>` primitive hardcodes `bg-primary` on the indicator with no override prop. For color-coded bars (green/amber/red), a thin custom `<div>` bar is cleaner than extending the radix wrapper.

## 2026-04-04 — Code Review Audit

- **Scope drift in unit-project-frameworks.ts**: The Unit 7 framework still contained depreciation deliverables, milestones, and rubric language from before the U7/U8 scope split. When units are re-scoped, all downstream files (frameworks, project plans, rubrics, choices, resources, validation) must be audited, not just titles and descriptions.
- **Duplicate rendering bug**: The duplicate Key Vocabulary card in StudentUnitOverview was invisible in plan.md checklists because it's a visual/layout issue. Manual visual QA or screenshot comparison would catch this.
- **Hardcoded lesson references in tips**: Practice test tips referenced "Lesson 07" generically for all 8 units. When content is copy-pasted across units, always parameterize or derive from data.
- **Stale references in components**: When renaming units, component-level comments and business-context strings are easy to miss. Grep for old names across the entire src/ directory.
- **Footer link duplication**: Multiple nav sections pointing to the same route is a UX anti-pattern — each section should have unique links.
- **Phase naming consistency**: Phase IDs and phase names can drift apart. Use canonical phase name mapping to avoid duplicates like two phases both named "Introduction".

## 2026-04-05 — Study Data Context Provider

- **Extract pure logic for testability**: When creating React contexts, extract pure helper functions (like `getDueInfoForUnit`) and accept optional dependency parameters (like `slugUnits` map) so tests can inject mocks without needing a real glossary or DOM environment.
- **Vitest node env limits React testing**: The project's vitest config uses `node` environment with only `*.test.ts` include patterns. Context/hooks can't be tested with `renderHook` without `@testing-library/react` and `jsdom`. Extract logic into pure functions and test those separately.
- **Context wrapping is low-risk**: Adding `StudyDataProvider` to the root layout was safe because `loadStudyData()` already guards for SSR (`isBrowser()` check). The provider degrades gracefully to empty data during server rendering.
- **Consumer refactor pattern**: Replace `useState` + `useEffect` + `loadStudyData()` with `useStudyData()` hook. For export/import handlers that modify localStorage, use `refresh()` from context to re-sync state.

## 2026-04-05 — Lesson-Level Index Entries

- **Shell extraction for data tasks**: Bash `grep` + `sed` pipelines efficiently extracted 80 lesson titles from `lesson-data.ts` files without needing to read each file individually. The `for unit in ... for lesson in ...` loop pattern scales well for filesystem-based data extraction.
- **Test-first for data integrity**: Writing tests before populating the `lessonPages` array ensured the data met exact specifications (80 entries, correct href pattern, unitId coverage). The RED-GREEN cycle was clean: 3 failures → all pass after data entry.
- **Manual data entry vs. auto-generation**: The lesson titles were manually transcribed into `index-records.ts`. For future additions (e.g., Unit 9+), consider a build-time script that reads `lesson-data.ts` titles and generates the array automatically.

## 2026-04-05 — ESLint Warning Cleanup Phases 1-2 (Review Audit)

- **`_` prefix can break runtime**: When ESLint flags an unused variable, prefixing with `_` is safe for truly dead code but **dangerous** when the variable is referenced on subsequent lines. In `StraightLineMastery.tsx`, renaming `selectedOption` → `_selectedOption` inside `handleSubmit` caused all downstream references to hit a `ReferenceError`. Always verify the variable isn't referenced elsewhere in the same scope before prefixing.
- **Interface callback parameter names are API documentation**: Prefixing callback parameter names in TypeScript interfaces with `_` (e.g., `onComplete?: (_score: number) => void`) harms readability for API consumers. The linter fires because the parameter value isn't used in the component implementation, but that's expected for callback props. Keep meaningful names in public interfaces.
- **Auto-fix tools are safer than manual edits**: Phase 1 (`eslint-plugin-unused-imports` auto-fix) had zero issues. Phase 2 (manual `_` prefix) introduced the runtime bug. Prefer automated tools where possible; for manual fixes, validate each change against the full file context, not just the flagged line.
- **Dead code patterns are pervasive**: Multiple components contain functions and state variables that are defined but never called (`_processFlows`, `_calculateProfit`, `_handleNextAsset`, `_getHealthProgress`, etc.). These should be removed in a dedicated dead-code cleanup pass rather than accumulated with `_` prefixes.

## 2026-04-05 — ESLint Phase 4: React Hooks Rules

- **`useCallback` named `use*` triggers false positive**: A `useCallback` named `useCredit` caused ESLint to flag it as a hook call inside onClick handlers. Rename event-handler callbacks with `handle*` prefix to avoid the `use*` pattern that ESLint associates with React Hooks.
- **Move `useMemo` objects inside the callback**: When an object (`new Set(...)`) is created outside `useMemo` and passed as a dep, it's a new reference every render. Moving construction inside the memo and using primitive deps (`activeEvent.metricMoves`) fixes both the warning and the re-render waste.
- **Function definition order matters for exhaustive-deps**: When `simulateSales` calls `completeSales` and both are `useCallback`, moving `completeSales` before `simulateSales` avoids a "used before declaration" build error while allowing it to be safely listed as a dependency.

## 2026-04-05 — Dead Code Removal Pass

- **Dead code cascading**: Removing a dead variable (`_correctVolume`) exposed a newly-dead constant (`CURRENT_PRICE`). Always re-lint after dead-code removal to catch cascading unused declarations.

## 2026-04-06 — Type Consolidation (PhaseHeader/PhaseFooter)

- **Re-exports preserve backward compat**: When moving a shared type to a canonical location, `export type { X } from './new-source'` from the old file avoids touching hundreds of import sites while still achieving single-source-of-truth. The 8 practice-test pages needed zero changes.
- **Index signatures hide shape gaps**: `[key: string]: unknown` makes TypeScript accept any property silently. Replacing with explicit `LessonRef`/`UnitRef` interfaces catches accidental misspellings or wrong field names at compile time instead of runtime.
