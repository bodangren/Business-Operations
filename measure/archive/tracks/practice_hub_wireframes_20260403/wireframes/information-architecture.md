# Practice Hub — Information Architecture

## Track ID: practice_hub_wireframes_20260403
## Phase 1: Requirements and Information Architecture

---

## 1. Required Study and Export Surfaces

### Surface Inventory

| # | Surface | Spec Ref | Current Status | Route Target |
|---|---------|----------|----------------|--------------|
| WF1 | Unit Overview + Vocabulary Entry | WF1 | **Exists** — `StudentUnitOverview` with `UnitVocabulary` | `/student/unitXX` |
| WF2 | Practice Hub Home | WF2 | **New** — no existing centralized hub | `/student/practice-hub` |
| WF3a | Flashcard Study | WF3 | **New** — no flashcard component exists | `/student/practice-hub/flashcards` |
| WF3b | Matching / Sort Game | WF3 | **Partial** — `DragAndDrop` and `DragAndDropExercises` exist, no standalone study mode | `/student/practice-hub/matching` |
| WF3c | Speed Round / Race Mode | WF3 | **New** — no timed challenge exists | `/student/practice-hub/speed-round` |
| WF3d | Team / Class Activity | WF3 | **New** — static-safe multi-team mode | `/student/practice-hub/team-activity` |
| WF4 | Lesson / Unit Export Flow | WF4 | **Partial** — .xlsx/.csv downloads exist but no structured export preview | `/student/practice-hub/export` |
| WF5a | Progress Dashboard | WF5 | **New** — progress is scattered per-unit in localStorage | `/student/practice-hub/progress` |
| WF5b | Due-Review Queue | WF5 | **New** — no spaced-repetition scheduler | `/student/practice-hub/review` |
| WF6 | Mobile Behavior Notes | WF6 | **Docs-only** — annotations per wireframe | N/A |

### Existing Components That Support These Surfaces

| Component | Reuse Target |
|-----------|-------------|
| `GlossaryFilters` / `GlossaryCard` | Vocabulary data source for WF3a–WF3c |
| `UnitVocabulary` | Entry point from WF1 into WF2 |
| `FillInTheBlank` | Vocabulary practice pattern for WF3b |
| `DragAndDrop` / `DragAndDropExercises` | Matching game pattern for WF3b |
| `ComprehensionCheck` | Quiz scoring pattern for WF3c |
| `UnitVocabulary` → glossary link pattern | Entry from WF1 into WF2 |
| `StudentUnitOverview` | Container for WF1 integration |
| `src/data/glossary.ts` (109 entries) | Master vocabulary data for all study modes |
| `src/lib/glossary/index.ts` | Filtering utilities (keyword, unit, topic) |

### Existing Navigation Surfaces That Must Be Updated

| Surface | Current | Needed Change |
|---------|---------|--------------|
| `Header` | Glossary + Index links | Add Practice Hub link |
| `Footer` | Glossary + Index links | Add Practice Hub link |
| `StudentHub` (`/student`) | "Capstone & Reference" section | Add "Practice & Review" card linking to hub |
| `StudentUnitOverview` | Vocabulary section links to glossary | Add "Study This Unit's Terms" CTA → hub pre-filtered |
| `Home` (`/`) | Features card for Progress Tracking | Update to reflect Practice Hub |

---

## 2. Information Architecture

### 2.1 Entry Points

```
Entry Points into Practice Hub
├── Primary
│   ├── Header nav → "Practice Hub"  [all pages]
│   ├── /student hub page → "Practice & Review" card
│   └── /student/unitXX → "Study Terms" CTA (pre-filters to unit)
│
└── Secondary
    ├── Footer link
    ├── /backmatter/glossary → "Study Mode" link (pre-filters to term)
    └── Post-quiz "Practice More" link from ComprehensionCheck
```

### 2.2 Hub Sections

```
/student/practice-hub                (WF2: Practice Hub Home)
│
├── Section: Due Review              (WF5b)
│   ├── "N terms due today"
│   ├── "N terms due this week"
│   └── [Start Review Session] → /student/practice-hub/review
│
├── Section: Vocabulary Study        (WF3)
│   ├── Mode selector cards:
│   │   ├── Flashcards               → /student/practice-hub/flashcards
│   │   ├── Matching Game            → /student/practice-hub/matching
│   │   ├── Speed Round              → /student/practice-hub/speed-round
│   │   └── Team Activity            → /student/practice-hub/team-activity
│   └── Unit filter dropdown (all units / specific unit)
│
├── Section: Recent Practice         (WF5 partial)
│   ├── Last 3 practice sessions
│   └── Session cards: mode, unit, score, date
│
├── Section: Weak Topics             (WF5 partial)
│   ├── Terms with lowest mastery scores
│   └── Topics with most errors
│
└── Section: Export & History         (WF4)
    ├── "Export Progress" button     → /student/practice-hub/export
    └── Recent exports list (date, type, download link)
```

### 2.3 Export Locations

```
Export Surface (WF4)
├── Entry points:
│   ├── /student/practice-hub → Export section
│   ├── /student/practice-hub/progress → Export button
│   └── /student/unitXX → "Export Unit Progress" (if applicable)
│
├── Export flow:
│   1. Select export type:
│   │   ├── "Full Progress Report"
│   │   ├── "Unit Progress (single unit)"
│   │   └── "Vocabulary Mastery Summary"
│   │
│   2. Preview (summary modal / page):
│   │   ├── Student name
│   │   ├── Date range
│   │   ├── Units covered
│   │   ├── Mastery stats (per unit)
│   │   ├── Practice history summary
│   │   └── Export format preview (what LMS will see)
│   │
│   3. Generate:
│   │   ├── .xlsx (structured workbook with sheets)
│   │   ├── .pdf (readable report)
│   │   └── .csv (raw data for LMS import)
│   │
│   4. Download + record in Export History
│
└── Data captured in export:
    ├── Per-unit vocabulary mastery (term, attempts, best streak, last reviewed)
    ├── Practice test scores (unit, date, score %)
    ├── Study mode sessions (mode, unit, date, duration)
    ├── Mastery component completions (component, unit, date, streak achieved)
    └── Fill-in-the-blank completions (if tracked)
```

### 2.4 Return Paths

```
Return Paths (from any study surface back into the curriculum)

Practice Hub ──→
├── "Back to Unit" link         → /student/unitXX (from unit-filtered study)
├── "View in Glossary" link     → /backmatter/glossary#term-slug (from flashcard)
├── "Take Practice Test" CTA    → /student/unitXX/practice-test (after study session)
├── "Continue Lesson" CTA       → /student/unitXX/lesson-YY/phase-Z (from in-lesson context)
└── "Export My Progress" CTA    → /student/practice-hub/export
```

---

## 3. Flow Diagram

### 3.1 Surface Connection Map

```
┌─────────────────────────────────────────────────────────────────────┐
│                         SITE NAVIGATION                             │
│  Header: [Home] [Student Hub] [Glossary] [Index] [Practice Hub]    │
│  Footer: [Glossary] [Index] [Practice Hub]                         │
└──────────────────┬──────────────────────────────────────────────────┘
                   │
     ┌─────────────┼──────────────────────────────────────┐
     │             │                                      │
     ▼             ▼                                      ▼
┌─────────┐  ┌──────────┐                          ┌──────────────┐
│  HOME   │  │ STUDENT  │                          │ BACKMATTER   │
│   /     │  │   HUB    │                          │ /glossary    │
│         │  │ /student  │                          │ /index       │
└────┬────┘  └────┬─────┘                          └──────┬───────┘
     │            │                                       │
     │     ┌──────┴──────┐                         "Study Mode"
     │     │             │                          link (new)
     │     ▼             ▼                                │
     │  ┌───────┐  ┌──────────────┐                      │
     │  │UNITS  │  │ PRACTICE HUB │◄─────────────────────┘
     │  │01–08  │  │ (NEW)        │
     │  │       │  │ /practice-   │
     │  │       │  │   hub        │
     │  └───┬───┘  └──┬───┬───┬──┬┘
     │      │         │   │   │  │
     │      │    ┌────┘   │   │  └──────────────────────┐
     │      │    │    ┌───┘   └───────┐                  │
     │      │    │    │               │                  │
     │      ▼    ▼    ▼               ▼                  ▼
     │  ┌──────┐┌───────┐┌─────────┐┌───────┐  ┌─────────────┐
     │  │Vocab ││Flash- ││Matching ││Speed  │  │ Export      │
     │  │Entry ││cards  ││Game     ││Round  │  │ Flow        │
     │  │(WF1) ││(WF3a) ││(WF3b)  ││(WF3c) │  │ (WF4)       │
     │  └──────┘└───┬───┘└────┬────┘└───┬───┘  └──────┬──────┘
     │              │         │         │              │
     │         "View in"  "View in"  "View in"    ┌────▼─────┐
     │         Glossary   Glossary   Glossary     │ Preview  │
     │              │         │         │         │ & Export  │
     │              ▼         ▼         ▼         │ .xlsx/.pdf│
     │         /backmatter/glossary#term          │ /.csv    │
     │                                            └────┬─────┘
     │                                                 │
     │         ┌───────────────────────────────────────┘
     │         │
     │         ▼
     │  ┌──────────────┐     ┌────────────────┐
     │  │ Progress     │────►│ Due Review     │
     │  │ Dashboard    │     │ Queue          │
     │  │ (WF5a)       │     │ (WF5b)         │
     │  └──────┬───────┘     └────────┬───────┘
     │         │                      │
     │    "Take Practice          "Start Review"
     │     Test" CTA              CTA
     │         │                      │
     │         ▼                      ▼
     │  /student/unitXX         Flashcards/
     │  /practice-test          Matching/Speed
     │                          (pre-filtered)
     │
     └──────── Return Path: "Back to Unit" / "Continue Lesson"
```

### 3.2 User Journey: Student Wants to Study Unit 03 Vocabulary

```
START: Student at /student/unit03
  │
  ├── Clicks "Study Terms" CTA
  │     │
  │     ▼
  │   /student/practice-hub?unit=03   (hub pre-filtered to unit 03)
  │     │
  │     ├── Sees: 12 terms due this week
  │     ├── Selects: "Flashcards" mode
  │     │
  │     ▼
  │   /student/practice-hub/flashcards?unit=03
  │     │
  │     ├── Studies 12 flashcards
  │     ├── Marks each: [Got it] [Review Again]
  │     │
  │     ▼
  │   Session complete
  │     │
  │     ├── Option A: "Take Practice Test" → /student/unit03/practice-test
  │     ├── Option B: "Try Matching Game" → /student/practice-hub/matching?unit=03
  │     ├── Option C: "View in Glossary" → /backmatter/glossary#accounting-equation
  │     └── Option D: "Back to Unit" → /student/unit03
  │
END
```

### 3.3 User Journey: Teacher Wants to See Student Progress

```
START: Teacher asks student to export progress
  │
  ├── Student navigates to /student/practice-hub/progress
  │     │
  │     ├── Sees: per-unit mastery bars, practice history, weak topics
  │     ├── Clicks "Export Progress"
  │     │
  │     ▼
  │   /student/practice-hub/export
  │     │
  │     ├── Selects: "Full Progress Report" + .xlsx format
  │     ├── Previews report summary
  │     │
  │     ▼
  │   Download: TechStart_Progress_[student]_[date].xlsx
  │     │
  │     └── Export recorded in history
  │
END
```

---

## 4. Open Product Decisions

| # | Decision | Options | Recommended |
|---|----------|---------|-------------|
| D1 | Where does practice data live? | localStorage only / localStorage + exported backup | localStorage only for MVP |
| D2 | Spaced repetition algorithm | Simple interval / Leitner box / SM-2 | Simple interval (3 days, 7 days, 14 days) for MVP |
| D3 | Team activity scope | Static printable cards / Web-based pair mode | Static printable cards for MVP |
| D4 | Export format priority | .xlsx only / .xlsx + .pdf / .xlsx + .csv | .xlsx first, .csv as stretch |
| D5 | Scope of mastery tracking | Per-term only / Per-term + per-topic | Per-term for MVP |

---

*Document generated from `spec.md` requirements and codebase analysis.*
