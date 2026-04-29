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
