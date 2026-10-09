# Lesson video verification

All 80 lesson page components match the reviewed decisions. The comparison found zero unexplained differences.

The saved published report covers the previous content release. It found zero content differences on all 80 pages. It predates the visibility correction. Run the published check after each deployment to verify the current layout.

The content audit covers all eight units. It lists actual lesson topics, selected segments, partial coverage, rejected candidates, earlier review links, and source evidence. The audit was prepared before the production map changed. The eight existing launch interviews have a separate baseline check.

The correction removes false matches and repeated embeds. Each selected segment appears once. Later applications link to the teaching lesson. The main video now appears at the top of Learn, before the lesson instruction. Players and review links are visible by default. Excel review stays optional. Standard lessons keep Start, Learn, Do, and Check. Project pages keep their single milestone section.

## Findings and correction by unit

| Unit | Correction | Pages with embeds | Pages with earlier links | Pages without a new resource |
|---|---|---:|---:|---:|
| 1 | Add T-account support. Replace the automated-journal clip that did not teach the required audit checks. Use a Table creation segment from the requested seminar. | 4 | 5 | 1 |
| 2 | Add the full close sequence. Bound closing to the four-step Income Summary method. Correct the depreciation-entry start. Limit the named-cell and validation clips to the steps they show. | 5 | 7 | 0 |
| 3 | Add the three-statement overview. Replace the Excel SUMIFS mismatch with the net-income/retained-earnings explanation. State the cross-sheet and cash-flow limits. | 6 | 5 | 0 |
| 4 | Replace the TEXTSPLIT mismatch with the direct Text to Columns procedure. Bound the regression clip. State the gaps for center/spread, Z-scores, and other cleaning steps. | 2 | 5 | 3 |
| 5 | Remove the annual marginal-tax clip from the employer/payroll lesson. Add a bounded wage-cap example with its old-limit warning. Keep gross/net and SUMIFS support specific. | 3 | 8 | 1 |
| 6 | State the margin/markup gap. Bound CVP before the nearest-unit rounding step. Keep Goal Seek and Data Table instruction in the class tutorial. | 2 | 7 | 1 |
| 7 | State the Specific Identification gap. Keep weighted-average precision. Limit Excel support to its actual method. Use one selector review and separate ratio segments. | 5 | 6 | 1 |
| 8 | Use earlier schedule and entry reviews instead of repeated embeds. Separate capitalization from the journal entry. State the DDB salvage-floor and partial-year Excel gaps. | 3 | 8 | 0 |

The final playlist check found a direct Text to Columns tutorial. Its transcript was reviewed before installation. The updated course map contains 37 segments from 33 videos on 30 pages. Earlier-lesson links appear on 51 pages.

## Evidence

- [All 80 topic lists and video decisions](lesson-video-map.md).
- [Frozen review data and inspection notes](lesson-video-audit.json).
- [All 80 source-page comparison results](lesson-video-source-verification.json).
- [Previous content release: all 80 published-page comparison results](lesson-video-published-verification.json).
- [CSV map](lesson-video-map.csv).

## Verification

The source check rendered the real page component for each lesson. It compared the output with the frozen review file and its explicit visibility amendment. It checked video IDs, start/end times, source titles, descriptions, accounting/Excel roles, direct watch links, section placement, earlier links, and the existing interviews. It also checked each lesson source hash. The page files and their tasks did not change. The resource block precedes the lesson instruction. No player or review link starts inside a closed disclosure.

Result: 80 pages passed; 0 failed. The comparison used review-file SHA-256 `0fa6922733af6a2b65f7342bdb28c9b9505fc4e746fbbb1040e079287d92be57`.

The old implementation failed 73 of the 80 decision comparisons before the correction. This count includes missing reviews and links. It is not a count of incorrect teaching lessons.

106 targeted tests passed. Fault checks changed rendered content across all eight units. Missing clips, extra clips, valid-format wrong IDs, false focus text, wrong ranges, wrong roles, duplicate titles, wrong sections, and missing/wrong review links all produced failures. Hiding a video or moving it below the Learn instruction also produced failures in all eight units. Hidden milestone review links failed. These checks prove conformance to the reviewed decisions. They do not decide instructional fit. The transcript notes provide that evidence.

The published comparison checks the lesson routes after GitHub Pages adds the site base path and a trailing slash. It removes these two URL format differences. It keeps the unit, lesson, and fragment unchanged. A test confirms that a wrong lesson or fragment still fails. The published result records deployment commit `c06169603c121e8a43e408b6b0c2f2cd5043288d` and its successful deployment run.

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
