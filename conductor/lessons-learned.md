# Lessons Learned

## 2026-04-06 — Mastery Progress Bars on Unit Cards

- **Existing derived data goes unused**: `deriveStats()` computed `unitMastery` with `termsStudied`, `termsTotal`, `avgMastery` but nothing consumed it. When adding features, audit existing utilities before writing new logic — the helper functions (`masteryColor`, `UnitMastery` interface) were already there.
- **Module-level maps for unit term counts**: Building `UNIT_TERM_COUNTS` from `glossaryData` at module load (like `SLUG_UNITS`) avoids recomputing per-render and keeps hooks pure.
- **Custom bar vs. Progress component**: The existing `<Progress>` primitive hardcodes `bg-primary` on the indicator with no override prop. For color-coded bars (green/amber/red), a thin custom `<div>` bar is cleaner than extending the radix wrapper.

## 2026-04-06 — Header Unit Data From Canonical Sources

- **Registry pattern for duplicated metadata**: When the same data (unit titles, descriptions, hrefs) is repeated in 3+ files, create a single registry module that imports from canonical sources and exports a derived array. Consumers map over the registry instead of maintaining parallel hardcoded lists.
- **TDD catches title mismatches early**: The RED phase caught a `Data-Driven Café` vs `Data-Driven Cafe` accent mismatch between the test expectation and the canonical unit04.ts data. Without the test, this would have silently regressed the nav display.

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

- **Test-first for data integrity**: Writing tests before populating the `lessonPages` array ensured the data met exact specifications (80 entries, correct href pattern, unitId coverage). The RED-GREEN cycle was clean: 3 failures → all pass after data entry.

## 2026-04-05 — ESLint Warning Cleanup Phases 1-2 (Review Audit)

- **`_` prefix can break runtime**: When ESLint flags an unused variable, prefixing with `_` is safe for truly dead code but **dangerous** when the variable is referenced on subsequent lines. In `StraightLineMastery.tsx`, renaming `selectedOption` → `_selectedOption` inside `handleSubmit` caused all downstream references to hit a `ReferenceError`. Always verify the variable isn't referenced elsewhere in the same scope before prefixing.
- **Interface callback parameter names are API documentation**: Prefixing callback parameter names in TypeScript interfaces with `_` (e.g., `onComplete?: (_score: number) => void`) harms readability for API consumers. The linter fires because the parameter value isn't used in the component implementation, but that's expected for callback props. Keep meaningful names in public interfaces.
- **Auto-fix tools are safer than manual edits**: Phase 1 (`eslint-plugin-unused-imports` auto-fix) had zero issues. Phase 2 (manual `_` prefix) introduced the runtime bug. Prefer automated tools where possible; for manual fixes, validate each change against the full file context, not just the flagged line.

## 2026-04-06 — Type Consolidation (PhaseHeader/PhaseFooter)

- **Re-exports preserve backward compat**: When moving a shared type to a canonical location, `export type { X } from './new-source'` from the old file avoids touching hundreds of import sites while still achieving single-source-of-truth. The 8 practice-test pages needed zero changes.
- **Index signatures hide shape gaps**: `[key: string]: unknown` makes TypeScript accept any property silently. Replacing with explicit `LessonRef`/`UnitRef` interfaces catches accidental misspellings or wrong field names at compile time instead of runtime.

## 2026-04-06 — Unit Data Deduplication (80 Lesson-Data Files)

- **UnitRef vs UnitData mismatch**: The canonical `UnitData` type (300+ lines) doesn't include `sequence`. Lesson-data consumers need `UnitRef` shape `{ id, title, sequence }`. Exporting `UNIT_REF_MAP` from the registry lets each lesson-data file derive its `UnitRef` with a single lookup rather than re-exporting the heavy `UnitData` object.
- **Bulk regex replacement with Node**: For 80 files, a Node.js `glob` + regex script was faster and more reliable than shell `sed`. The script found all matches, replaced inline blocks, and reported failures in one pass.
- **Import ordering matters for build**: Placing `import` statements after `export const` (mid-file) compiled fine but violated style conventions. A second pass moved all imports to the top of each file.

## 2026-04-06 — Extract Shared phaseIcons Constant

- **Separate direct-use icons from map icons**: When extracting icon maps to a shared module, each consumer file may still use some of those icons directly for section headers or UI elements (e.g., `Target`, `BookOpen` in `StudentLessonOverview`). Keep direct-use icons in the consumer's import and only remove imports for icons that are exclusively used in the shared map.
- **TDD catches type mismatches early**: Lucide-react icons are `forwardRef` objects, not plain functions. The RED phase caught a `typeof` assertion error — the test was checking for `"function"` but lucide icons return `"object"`. Adjusting the test to verify truthiness and non-string type was cleaner than fighting the framework's export shape.
- **Consolidate related maps together**: `phaseColors` and `phaseDescriptions` were also duplicated but only in 1-2 files. Bundling them into the same `phase-config.ts` alongside `PHASE_ICONS` ensures future phase additions only touch one file for all three concerns.

- **Exhaustive icon/color maps break when types widen**: Adding values to a union type propagates to every `Record<PhaseName, ...>` map. The build caught missing `phaseIcons`/`phaseColors` entries in PhaseFooter, PhaseHeader, and StudentLessonOverview — use `Record<string, ...>` for icon maps when new phase categories may be added.
