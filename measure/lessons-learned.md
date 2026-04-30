# Lessons Learned


## 2026-04-29 — Teacher/Student Data Alignment Audit

- **Audit script must use `process.cwd()` for REPO_ROOT**: `path.resolve(__dirname, '../../../../bus-math-nextjs')` fails when tsx resolves `__dirname` to `/Users/daniel.bodanske/Desktop/bus-math-nextjs` instead of the script directory. Hard-coding or using `process.cwd()` avoids this.
- **Title drift is acceptable**: Teacher lesson titles describe operational/instructional focus; student titles describe learning objectives. These serve different audiences and intentionally differ — no fix needed.
- **Duration field comparison is informational only**: Teacher `duration` stores per-activity time blocks; student `durationEstimateMinutes` is the full lesson duration. This data model difference produces false positive mismatches — ignore in audit.
- **Audit seeded successfully on all 8 units**: 3 blockers found (Unit 6 milestone day, Unit 7 milestone count); Units 1-5 and 8 pass with acceptable content drift.

## 2026-04-29 — Phase 2 Blocker Fixes

- **Plan vs audit discrepancy**: Plan was written before audit. Phase 2 originally targeted Unit 08, but audit found Unit 08 passes and actual blockers are in Units 06 and 07. Always re-verify plan against audit results.
- **Unit 06 milestone 3 day mismatch**: Teacher plan had milestone 3 at day 9 (draft recommendation) but student Lesson 10 is final presentation. Fixed by aligning to day 10.
- **Unit 07 milestone count mismatch**: Teacher plan had 3 milestones but unit07.ts only had 2. Added milestone 3 at day 10 (final presentation) to align with teacher plan and student lesson 10 data.
- **Lesson vs day numbering**: In Unit 07, student Lesson 08 = day 8 in sequence, Lesson 09 = day 9, Lesson 10 = day 10. Teacher milestone 3 was at day 8 (should be day 10).

## 2026-04-29 — Phase 3-5 Completion

- **Re-run audit after every fix**: Initial full-audit-results.md showed Unit 02 with 1 blocker; re-running the audit returned 0 blockers. Old summaries go stale as fixes land — always re-verify.
- **Fix what the audit says, not what you remember**: The canonical source order (student lesson data → unit data → teacher plan) resolves ambiguity. For Unit 06, the audit said `unit06.ts` needed fixing, not the teacher plan.
- **Milestone day = lesson number**: Project lessons 8-10 map to milestone days 1-10. A milestone at the wrong day means the assessment trigger doesn't align with the student lesson.
- **0 blockers across all 8 units**: Content drift (title differences) and informational (duration differences) are acceptable by design. Teacher and student surfaces serve different audiences.

## 2026-04-07 — Subagent Queue Management

- **Keep a live active-ID ledger**: Spawned agents do not stay visible unless we track their IDs explicitly in-thread.
- **Poll before you replace**: Only call `wait_agent` on IDs that are known to be active.
- **Close finished lanes right away**: Completed agents still occupy capacity until explicitly closed.
- **Do not guess at agent state across turns**: Rebuild the ledger from the latest notifications before spawning or closing anything else.

## 2026-04-07 — Static Export Screenshot Audits

- **Capture from the exported site, but mount the real base path**: This repo exports with base path `/Business-Operations`.
- **Validate one real screenshot before batching hundreds**: Confirm one route end-to-end first.
- **Keep the human audit report in the track folder**: Store findings in `measure/tracks/<track_id>/audit-report.md`.

## 2026-04-07 — PHASE_ICONS Fallback Helpers

- **Widen-at-boundary pattern**: Type shared maps as `Record<LessonPhaseName, ...>` but provide helper functions that accept `string`.
- **Sensible defaults prevent runtime crashes**: `HelpCircle` icon, neutral color string, and `"Phase"` fallback text.

## 2026-04-06 — Unit Data Deduplication

- **Bulk regex replacement with Node**: For 80 files, a Node.js `glob` + regex script was faster and more reliable than shell `sed`.
- **Registry pattern for duplicated metadata**: When the same data is repeated in 3+ files, create a single registry module.

## 2026-04-05 — ESLint Warning Cleanup

- **`_` prefix can break runtime**: When ESLint flags an unused variable, prefixing with `_` is safe for truly dead code but dangerous when the variable is referenced on subsequent lines.
- **Auto-fix tools are safer than manual edits**: Prefer automated tools where possible.

## 2026-04-07 — Subagent Queue Management

- **Keep a live active-ID ledger**: Spawned agents do not stay visible unless we track their IDs explicitly in-thread. Treat the active set as state, not memory.
- **Poll before you replace**: Only call `wait_agent` on IDs that are known to be active, then close or recycle the slot immediately after a confirmed completion.
- **Close finished lanes right away**: Completed agents still occupy capacity until they are explicitly closed. If the queue is full, stale finished lanes will block new work.
- **Do not guess at agent state across turns**: If a turn is interrupted or the thread history gets noisy, rebuild the ledger from the latest notifications before spawning or closing anything else.

## 2026-04-07 — Static Export Screenshot Audits

- **Capture from the exported site, but mount the real base path**: This repo exports with base path `/Business-Operations`, so screenshot audits against `bus-math-nextjs/out/` must be served under `/Business-Operations/...`, not at `/...`. Otherwise pages may 404 or render without CSS/JS.
- **Validate one real screenshot before batching hundreds**: Confirm one route end-to-end first: correct URL shape (`/Business-Operations/student/...`), styled page, and expected content in the image. Do not trust a batch run until one screenshot has been visually checked.
- **Use screenshots as audit evidence, not automation summaries**: The JSON/log output is useful for indexing, but the actual UI audit must be driven by reviewing the captured images themselves. Store screenshots in `screenshots/<track-name-date>/<desktop|mobile>/<unitXX>/...` so the next session can continue route by route.
- **Keep the human audit report in the track folder**: Store the actual findings in `measure/tracks/<track_id>/audit-report.md`. Any `screenshots/.../audit-report.json` file is only a capture artifact and must not become the source of truth.

## 2026-04-07 — Unused File Cleanup in `bus-math-nextjs/`

- **Route-local notes linger after content migrations**: `README.md` and `README.txt` files nested beside App Router `page.tsx` files are easy to forget because they never affect runtime. A targeted `find src/app -name 'README*'` sweep is a cheap cleanup check after major lesson migrations.
- **Legacy markdown payloads should move or die**: Unit-level `unitXX-text.md` content survived after the app switched to canonical `lesson-data.ts` sources. When a migration changes the rendering source of truth, immediately search for the retired file pattern and either relocate it to docs or delete it.
- **Regenerate derived debug artifacts after deleting components**: If a checked-in debug asset like `public/components-report.json` mirrors the source tree, any safe component deletion should be followed by regenerating that artifact so the debug surface stays honest.

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

