# Lessons Learned

## 2026-04-07 — Testing React Hooks Without @testing-library/react

- **Install testing-library/react once, reuse everywhere**: The project had vitest and jsdom but no `@testing-library/react`. Installing it as a dev dependency unlocks `renderHook` for any future hook tests.
- **Mock at module boundary**: For hooks that depend on React context providers (like `useStudyData`), mock the leaf modules the provider imports (e.g., `loadStudyData`) rather than the provider itself. This keeps context wiring real while controlling the data source.
- **Per-file environment override**: When the global test environment is `node`, add `@vitest-environment jsdom` as a docblock comment at the top of individual test files that need DOM APIs. This avoids changing the global config for the 90% of tests that don't need it.

## 2026-04-07 — PHASE_ICONS Fallback Helpers

- **Widen-at-boundary pattern**: Type shared maps as `Record<LessonPhaseName, ...>` for compile-time completeness checks, but provide helper functions that accept `string` and cast internally. Consumers call the helpers (wide input, narrow internals) instead of indexing the typed map directly.
- **Sensible defaults prevent runtime crashes**: `HelpCircle` icon, neutral color string, and `"Phase"` fallback text mean unknown keys degrade gracefully instead of throwing `undefined` at render.

## 2026-04-06 — Extract Shared phaseIcons Constant

- **Separate direct-use icons from map icons**: When extracting icon maps to a shared module, each consumer file may still use some of those icons directly for section headers or UI elements. Keep direct-use icons in the consumer's import and only remove imports for icons exclusively used in the shared map.
- **Consolidate related maps together**: `phaseColors` and `phaseDescriptions` were also duplicated but only in 1-2 files. Bundling them into the same `phase-config.ts` alongside `PHASE_ICONS` ensures future phase additions only touch one file.

## 2026-04-06 — Unit Data Deduplication (80 Lesson-Data Files)

- **Bulk regex replacement with Node**: For 80 files, a Node.js `glob` + regex script was faster and more reliable than shell `sed`. The script found all matches, replaced inline blocks, and reported failures in one pass.
- **Registry pattern for duplicated metadata**: When the same data is repeated in 3+ files, create a single registry module that imports from canonical sources and exports a derived array.

## 2026-04-06 — Type Consolidation (PhaseHeader/PhaseFooter)

- **Re-exports preserve backward compat**: When moving a shared type to a canonical location, `export type { X } from './new-source'` from the old file avoids touching hundreds of import sites while still achieving single-source-of-truth.
- **Index signatures hide shape gaps**: `[key: string]: unknown` makes TypeScript accept any property silently. Replacing with explicit interfaces catches misspellings at compile time.

## 2026-04-06 — Mastery Progress Bars on Unit Cards

- **Existing derived data goes unused**: When adding features, audit existing utilities before writing new logic — the helper functions (`masteryColor`, `UnitMastery` interface) were already there.
- **Module-level maps for unit term counts**: Building `UNIT_TERM_COUNTS` from `glossaryData` at module load avoids recomputing per-render and keeps hooks pure.

## 2026-04-05 — Study Data Context Provider

- **Extract pure logic for testability**: When creating React contexts, extract pure helper functions and accept optional dependency parameters so tests can inject mocks without needing a real DOM environment.
- **Context wrapping is low-risk**: Adding providers to the root layout is safe when existing code already guards for SSR. The provider degrades gracefully to empty data during server rendering.

## 2026-04-05 — ESLint Warning Cleanup

- **`_` prefix can break runtime**: When ESLint flags an unused variable, prefixing with `_` is safe for truly dead code but dangerous when the variable is referenced on subsequent lines. Always verify the variable isn't referenced elsewhere before prefixing.
- **Auto-fix tools are safer than manual edits**: Prefer automated tools where possible; for manual fixes, validate each change against the full file context, not just the flagged line.
