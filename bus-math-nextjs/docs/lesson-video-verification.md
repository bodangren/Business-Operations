# Lesson video verification

All 80 lesson page components match the reviewed decisions. The comparison found zero unexplained differences.

The content audit covers all eight units. It lists actual lesson topics, selected segments, partial coverage, rejected candidates, earlier review links, and source evidence. The audit was prepared before the production map changed. The eight existing launch interviews have a separate baseline check.

The correction removes false matches and repeated embeds. Each selected segment appears once. Later applications link to the teaching lesson. Excel review stays optional and collapsed. Accounting reviews also start collapsed. Standard lessons keep Start, Learn, Do, and Check. Project pages keep their single milestone section.

## Findings and correction by unit

| Unit | Correction | Pages with embeds | Pages with earlier links | Pages without a new resource |
|---|---|---:|---:|---:|
| 1 | Add T-account support. Replace the automated-journal clip that did not teach the required audit checks. Use a Table creation segment from the requested seminar. | 4 | 5 | 1 |
| 2 | Add the full close sequence. Bound closing to the four-step Income Summary method. Correct the depreciation-entry start. Limit the named-cell and validation clips to the steps they show. | 5 | 7 | 0 |
| 3 | Add the three-statement overview. Replace the Excel SUMIFS mismatch with the net-income/retained-earnings explanation. State the cross-sheet and cash-flow limits. | 6 | 5 | 0 |
| 4 | Remove the TEXTSPLIT clip that was described as Text to Columns. Bound the regression clip. State the gaps for center/spread, Z-scores, and cleaning. | 1 | 5 | 4 |
| 5 | Remove the annual marginal-tax clip from the employer/payroll lesson. Add a bounded wage-cap example with its old-limit warning. Keep gross/net and SUMIFS support specific. | 3 | 8 | 1 |
| 6 | State the margin/markup gap. Bound CVP before the nearest-unit rounding step. Keep Goal Seek and Data Table instruction in the class tutorial. | 2 | 7 | 1 |
| 7 | State the Specific Identification gap. Keep weighted-average precision. Limit Excel support to its actual method. Use one selector review and separate ratio segments. | 5 | 6 | 1 |
| 8 | Use earlier schedule and entry reviews instead of repeated embeds. Separate capitalization from the journal entry. State the DDB salvage-floor and partial-year Excel gaps. | 3 | 8 | 0 |

## Evidence

- [All 80 topic lists and video decisions](lesson-video-map.md).
- [Frozen review data and inspection notes](lesson-video-audit.json).
- [All 80 source-page comparison results](lesson-video-source-verification.json).
- [CSV map](lesson-video-map.csv).

## Verification

The source check rendered the real page component for each lesson. It compared the output with the frozen review file. It checked video IDs, start/end times, source titles, descriptions, accounting/Excel roles, direct watch links, section placement, earlier links, and the existing interviews. It also checked each lesson source hash. The page files and their tasks did not change.

Result: 80 pages passed; 0 failed. The comparison used review-file SHA-256 `76c6d8c0ed909f53305715a3332e4abb2f2cb243f13d469ae49a53b864cbdd3b`.

The old implementation failed 73 of the 80 decision comparisons before the correction. This count includes missing reviews and links. It is not a count of incorrect teaching lessons.

104 targeted tests passed. Fault checks changed rendered content across all eight units. Missing clips, extra clips, valid-format wrong IDs, false focus text, wrong ranges, wrong roles, duplicate titles, wrong sections, and missing/wrong review links all produced failures. These checks prove conformance to the reviewed decisions. They do not decide instructional fit. The transcript notes provide that evidence.

TypeScript passed. ESLint reported 0 errors and 4 existing warnings outside the changed files. Local checks used the installed binaries. They did not run npm or change `.next`.

Reproduce the source comparison from `bus-math-nextjs/` with the installed Node runtime:

```sh
node scripts/audit/verify-lesson-videos.mjs --output=output/video-audit/source-verification.json
```

After publication, check all deployed routes with:

```sh
node scripts/audit/verify-lesson-videos.mjs --live --output=output/video-audit/published-verification.json
```

## Inspection limits

Selected segments were checked through timestamped YouTube transcripts and primary player metadata. Full playback and current desktop Excel execution are not claimed. The notes identify old Excel versions, old example limits, different accounting procedures, rounding differences, and uncovered tasks. The review does not certify unrelated pre-existing lesson calculations.
