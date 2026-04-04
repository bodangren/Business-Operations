# Lessons Learned

## 2026-04-04 — Code Review Audit: Navigation Shell, Teacher-Student Alignment, Practice Hub Wireframes

- **Scope drift in unit-project-frameworks.ts**: The Unit 7 framework still contained depreciation deliverables, milestones, and rubric language from before the U7/U8 scope split. When units are re-scoped, all downstream files (frameworks, project plans, rubrics, choices, resources, validation) must be audited, not just titles and descriptions.
- **Duplicate rendering bug**: The duplicate Key Vocabulary card in StudentUnitOverview was invisible in plan.md checklists because it's a visual/layout issue. Manual visual QA or screenshot comparison would catch this.
- **Hardcoded lesson references in tips**: Practice test tips referenced "Lesson 07" generically for all 8 units. When content is copy-pasted across units, always parameterize or derive from data.
- **Stale references in components**: When renaming units, component-level comments and business-context strings are easy to miss. Grep for old names across the entire src/ directory.
- **Footer link duplication**: Multiple nav sections pointing to the same route is a UX anti-pattern — each section should have unique links.
- **Phase naming consistency**: Phase IDs and phase names can drift apart. Use canonical phase name mapping to avoid duplicates like two phases both named "Introduction".

## 2026-04-04 — Phase 2: Low-Fi Wireframes

- Wireframes as self-contained HTML files work well: no build tooling, openable directly in browser, easy to diff in git.
- Inline styles keep each file independent but make them verbose — acceptable for static mocks.
- The `wireframes/` directory in the track folder is the right home — co-located with spec/plan.
- Annotations embedded in each wireframe (yellow boxes) serve as the Phase 3 handoff reference.
- No test script exists (`npm run test` fails) — project relies on vitest config but no `test` alias in package.json scripts.

## 2026-04-04 — Phase 3: Vocabulary Study Modes

- Wireframe annotations (blue boxes with "Actions, Data & Behavior") served as an excellent Phase 3 handoff spec — each mode's data requirements, localStorage keys, and export payload were pre-defined.
- TDD worked well for engine logic: 50 mode tests + 8 recording tests, all independent of React/rendering.
- Flashcard re-queue logic needed care: shuffling means card indices are unpredictable; tests should reference actual slugs not hardcoded positions.
- `isSessionComplete` for flashcards can't rely on `currentIndex` staying in-bounds; must check that all original cards have been reviewed.

## 2026-04-04 — Phase 6: Verification & Study Mode Pages

- **Missing route pages were the #1 blocker**: PracticeHubHome linked to `/flashcards`, `/matching`, `/speed-round` but no route pages existed. Building them was essential to complete the track.
- **SessionMode type mismatch**: Engine code used `mode: "study"` but `SessionMode` only accepts `"solo" | "pass-and-play" | "team-single-device"`. Always check the schema type before passing literal strings.
- **Export re-exports from index.ts caused alias collision**: `isSessionComplete` from flashcards and `isSessionComplete as isMatchingComplete` from matching both exist in `modes/index.ts`. Import the aliased name directly to avoid calling the wrong variant.
- **Wireframes as implementation spec worked well**: Each wireframe's annotation block (Phase 3 — Actions, Data & Behavior) had all the UI behaviors, keyboard shortcuts, and data requirements pre-defined. The component implementation followed the annotations almost 1:1.
