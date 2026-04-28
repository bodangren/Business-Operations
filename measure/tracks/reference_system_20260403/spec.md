# Specification: Reference System

## Overview
Replace the current fake search pattern with a static reference system built around one canonical bilingual glossary dataset.

This track creates:
- a bilingual glossary page,
- a filterable subject index,
- vocabulary lists on unit overview pages,
- reusable glossary utilities and data contracts that later practice tracks can consume.

The glossary is the source of truth. The index is the search replacement.

## Product Direction
- Keep the site static.
- Keep content student-facing and readable at the existing 8th-grade target.
- Support bilingual study without forcing one display mode.
- Make later vocabulary flashcards, games, and spaced review derive from the same term records instead of duplicated lesson-specific arrays.

## Canonical Glossary Data Contract

Every glossary entry must include these required fields:
- `id`
- `slug`
- `term_en`
- `term_zh`
- `def_en`
- `def_zh`

Every glossary entry should also support these metadata fields:
- `units` - array of unit IDs like `unit01`
- `lessons` - optional array of lesson IDs or lesson paths
- `topics` - array of topic tags such as `inventory`, `depreciation`, `payroll`
- `synonyms` - optional array of alternate spellings or student-friendly aliases
- `related` - optional array of glossary entry slugs
- `examples` - optional short examples for future study modes

The four user-visible content fields are the study surface:
- `term_en`
- `term_zh`
- `def_en`
- `def_zh`

Students must later be able to choose which two of these fields appear as prompt and answer. This track must preserve that flexibility in the data model and glossary UI.

## Functional Requirements

### FR1: Canonical Glossary Dataset
- Create one canonical glossary dataset inside the app repo.
- The dataset must cover Units 01-08 and core capstone vocabulary where relevant.
- The dataset must deduplicate repeated terms across units instead of copying them per lesson.
- Each term must have both English and Chinese definitions, not just translated terms.
- Definitions must be student-readable and instructionally aligned with the unit wording already used in student pages.

### FR2: Bilingual Glossary Page
- Create `/backmatter/glossary`.
- The page must render glossary entries from the canonical dataset.
- The page must support:
  - keyword filtering,
  - unit filtering,
  - topic filtering,
  - alphabetical browsing,
  - a user control to choose which glossary fields are visible.
- At minimum, the display control must support choosing a primary field and a secondary field from:
  - `term_en`
  - `term_zh`
  - `def_en`
  - `def_zh`
- The default view should be pedagogically sensible for the general site audience, such as `term_en + def_en`.

### FR3: Subject Index as Search Replacement
- Create `/backmatter/index`.
- The index must be static and filterable client-side.
- The index must pull from multiple sources:
  - glossary terms,
  - unit titles,
  - lesson titles,
  - practice test pages,
  - capstone pages,
  - other major frontmatter/backmatter pages that students need to locate quickly.
- The index must include a keyword filter so users can effectively "search" without a separate search feature.
- The index must return direct links to the relevant route or glossary anchor.

### FR4: Unit Vocabulary Lists
- Add a vocabulary section to each student unit overview.
- Each unit overview must show its curated glossary subset derived from glossary term tags, not hardcoded duplicate prose.
- Each vocabulary list entry must link back to the glossary entry.
- Each vocabulary section must expose a future-facing entry point such as "Study these terms" or "Open glossary" without implementing the full practice hub in this track.

### FR5: Reusable Glossary Utilities
- Add reusable helpers for:
  - filtering glossary terms,
  - grouping alphabetically,
  - grouping by unit,
  - resolving related terms,
  - generating index records from glossary entries and page metadata.
- These helpers must be structured so later tracks can reuse them for flashcards, matching games, and spaced review.

### FR6: Content Quality and Coverage Rules
- Every unit must have a minimum curated vocabulary list with enough terms to support study and review later.
- Core recurring business/accounting terms should appear once in the glossary and then be tagged to multiple units as needed.
- Chinese definitions must be actual definitions, not term-only mirrors or placeholders.
- No placeholder text such as "TBD", "Translate later", or machine-only notes may ship.

## Non-Functional Requirements
- Static-export compatible.
- No backend or network dependency.
- Client-side filtering must feel immediate on the full glossary dataset.
- Keep implementation maintainable for junior developers:
  - one canonical dataset,
  - one small set of utilities,
  - simple route structure.

## Acceptance Criteria
- `/backmatter/glossary` exists and is linked from the site shell.
- `/backmatter/index` exists and functions as the site’s search replacement.
- The glossary dataset contains bilingual term and definition fields for every shipped unit.
- Each unit overview shows a vocabulary section sourced from glossary metadata.
- Users can filter the glossary and the index without leaving the static site.
- The glossary UI preserves the four-field display model needed for later flashcards and games.

## Out of Scope
- Spaced repetition logic.
- Flashcards or games.
- Local storage tracking.
- Export/import.
- Teacher analytics or automated scoring.
