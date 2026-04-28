# Implementation Handoff: Practice Hub → Local Study & Export

**From Track:** practice_hub_wireframes_20260403
**To Track:** local_study_export_20260403
**Date:** 2026-04-04

---

## Routes

| Route | Source | MVP? |
|-------|--------|------|
| `/student/practice-hub` | WF2 — Hub home | Yes |
| `/student/practice-hub/flashcards` | WF3a — Flashcard study | Yes |
| `/student/practice-hub/matching` | WF3b — Matching game | Yes |
| `/student/practice-hub/speed-round` | WF3c — Speed round | Yes |
| `/student/practice-hub/export` | WF4 — Export flow | Yes |
| `/student/practice-hub/progress` | WF5 — Progress dashboard | Yes |
| `/student/practice-hub/team-activity` | WF3d — Team/class activity | Stretch |

## Components to Build

### MVP Components

| Component | Wireframe | Reuses | Notes |
|-----------|-----------|--------|-------|
| `PracticeHubHome` | WF2 | Existing `Card` | Hub landing, unit filter, mode selector grid |
| `DueReviewPanel` | WF2 | — | Stats row: due today, due week, total studied |
| `StudyModeSelector` | WF2 | — | Grid of 4 mode cards with links |
| `RecentPracticeList` | WF2 | — | Last 5 sessions from localStorage |
| `WeakTopicsList` | WF2 | — | Terms sorted by lowest mastery |
| `ExportHistoryList` | WF2/WF4 | — | Recent exports from localStorage |
| `FlashcardSession` | WF3a | `GlossaryCard` data | Card flip, bilingual, review/got-it |
| `MatchingSession` | WF3b | `DragAndDrop` patterns | Click-to-select, 6 pairs, timer |
| `SpeedRoundSession` | WF3c | `ComprehensionCheck` scoring | 90s timer, 4-option MC, lives |
| `ExportFlow` | WF4 | — | 3-step: select → preview → download |
| `ExportPreview` | WF4 | — | Summary table from localStorage |
| `ProgressDashboard` | WF5 | — | Per-unit mastery bars, stats |
| `MasteryBar` | WF5 | — | Color-tiered bar (green/amber/red) |
| `StudyCTA` | WF1 | — | "Study This Unit's Terms" card for unit overview |

### Stretch Components

| Component | Wireframe | Notes |
|-----------|-----------|-------|
| `TeamActivityPrint` | WF3d | Static printable cards for class play |
| `SessionDetailView` | — | Read-only session recap |
| `FullSessionHistory` | WF5 | Paginated "Load more" list |

## Shared Components & Data

| Existing Asset | Used By | Purpose |
|----------------|---------|---------|
| `src/data/glossary.ts` (109 entries) | All WF3 modes | Master vocabulary data |
| `src/lib/glossary/index.ts` | All WF3 modes | Filtering (keyword, unit, topic) |
| `GlossaryFilters` / `GlossaryCard` | WF3a | Vocabulary display pattern |
| `UnitVocabulary` | WF1 | Vocab list on unit overview |
| `DragAndDrop` / `DragAndDropExercises` | WF3b | Matching interaction pattern |
| `ComprehensionCheck` | WF3c | Quiz scoring pattern |
| `FillInTheBlank` | WF3b | Vocabulary practice pattern |

## Storage Surfaces

| localStorage Key | Type | Written By | Read By |
|------------------|------|------------|---------|
| `practice_terms_{termId}` | `{ masteryScore, lastReviewed, attempts, bestStreak }` | WF3a, WF3b, WF3c | WF2, WF5 |
| `practice_sessions[]` | `[{ id, mode, unitId, termCount, score, date }]` | WF3a, WF3b, WF3c | WF2, WF5, WF4 |
| `practice_due_terms` | `[{ termId, unitId, nextReviewDate, masteryScore }]` | WF3a (review algo) | WF2 |
| `practice_exports[]` | `[{ id, type, filename, date, sizeBytes }]` | WF4 | WF2, WF4 |
| `practice_speedround_best_{unitId}` | `{ score, accuracy, streak, date }` | WF3c | WF5 |
| `student_profile.name` | `string` | WF4 (prompt once) | WF4 |

## Navigation Updates Required

| Surface | Change |
|---------|--------|
| `Header` | Add "Practice Hub" link |
| `Footer` | Add "Practice Hub" link |
| `StudentHub` (`/student`) | Add "Practice & Review" card |
| `StudentUnitOverview` | Add "Study This Unit's Terms" CTA |
| Mobile bottom tab bar | Add "Practice" tab |

## MVP vs Stretch

### MVP
- WF1: Study CTA on unit overview
- WF2: Hub home with all sections (due review, modes, recent, weak, export history)
- WF3a: Flashcard session with bilingual cards
- WF3b: Matching game (click-to-select, 6 pairs)
- WF3c: Speed round (90s, 4-option MC, 3 lives)
- WF4: Export flow (3-step, .xlsx only)
- WF5: Progress dashboard (mastery bars, stats)
- WF6: Responsive mobile layouts (all surfaces)
- Header/Footer nav updates
- localStorage persistence for all data

### Stretch
- Team Activity printable mode (WF3d)
- .csv export format
- Session state persistence across refresh
- Dashboard time-series charts
- Configurable matching pair count (4/6/8)
- Raw session history in export
- Mastery dots on unit overview vocab list
