# Implementation Plan: Reference System

## Track ID: reference_system_20260403

### Phase 1: Audit and Data Model
- [x] 1.1 Audit existing vocabulary sources across student pages, lesson data, question banks, and teacher references
  - No structured vocabulary data exists in the codebase
  - `vocabularyTerms` field in `LessonContent` type is unused across all 79 lesson-data files
  - Header already links to `/backmatter/glossary` and `/search` but no pages exist
  - Unit overview pages have no vocabulary sections
  - No Chinese definitions exist anywhere
- [x] 1.2 Choose the canonical glossary file location and export shape
  - Types: `src/types/glossary.ts` (GlossaryEntry, IndexRecord, UnitId, TopicTag, GlossaryField)
  - Utilities: `src/lib/glossary/index.ts` (filter, group, resolve, generate helpers)
  - Dataset: will be `src/data/glossary.ts` in Phase 2
  - Tests: `src/lib/glossary/__tests__/glossary.test.ts`
- [x] 1.3 Define unit-tagging and topic-tagging rules
  - UnitId union type: unit01-unit08
  - TopicTag union type: 18 topic tags covering accounting, bookkeeping, depreciation, financial-statements, inventory, payroll, pricing, statistics, excel, automation, cash-flow, tax, audit, ratio-analysis, regression, data-cleaning, cvp-analysis, presentation
  - Cross-unit terms tagged to multiple UnitIds
  - Optional lessons array for per-lesson granularity
- [x] 1.4 Write tests first for glossary filtering and grouping utilities
  - 31 tests covering filterByKeyword, filterByUnit, filterByTopic, groupAlphabetical, groupByUnit, resolveRelated, generateIndexRecords
  - All passing

### Phase 2: Canonical Glossary Dataset
- [x] 2.1 Build the glossary records for Units 01-04
  - Draft English definitions
  - Draft Chinese definitions
  - Add unit/topic tags
  - Deduplicate repeated accounting/statistics vocabulary
- [x] 2.2 Build the glossary records for Units 05-08
  - Draft English definitions
  - Draft Chinese definitions
  - Add unit/topic tags
  - Deduplicate repeated Excel/business operations vocabulary
- [x] 2.3 Add cross-unit and capstone-relevant terms
  - Include common workbook, audit, recommendation, and business communication terms where needed
- [x] 2.4 Review bilingual quality and terminology consistency
  - Verify Chinese definitions are definitions, not just translated labels
  - Verify English definitions match student-facing lesson language

### Phase 3: Glossary and Index Routes
- [x] 3.1 Create `/backmatter/glossary`
  - Alphabetical letter navigation with active letter filtering
  - Keyword search across term_en, term_zh, def_en, def_zh, and synonyms
  - Unit filter dropdown (All units + unit01-unit08)
  - Topic filter dropdown (All topics + 18 topic tags)
- [x] 3.2 Add glossary display controls for the four study fields
  - Primary and secondary field selectors from term_en, term_zh, def_en, def_zh
  - Default view: term_en (primary) + def_en (secondary)
  - Swapping logic prevents duplicate field selection
- [x] 3.3 Create `/backmatter/index`
  - Static record list generated from glossary terms, unit pages, lesson pages, and extra pages
  - Client-side keyword filter across label and description
  - Category filter with color-coded badges (glossary, unit, lesson, practice-test, capstone, frontmatter, backmatter)
- [x] 3.4 Add reusable glossary and index UI helpers
  - GlossaryCard: displays entry with configurable primary/secondary fields, unit badges, topic badges
  - GlossaryFilters: combines search, unit/topic filters, alphabetical nav, display controls, and entry grid
  - IndexFilter: combines search, category filter, and clickable result list
  - index-records.ts: generates IndexRecord[] from glossaryData and page metadata

### Phase 4: Unit Overview Integration
- [x] 4.1 Add vocabulary sections to student unit overview pages
  - UnitVocabulary component filters glossaryData by unitId
  - Each term card shows English term, English definition (truncated), Chinese term, and topic badges
  - Each term links to the glossary entry anchor
  - All 8 unit overview pages updated with unitId field
- [x] 4.2 Add a future-facing study entry point
  - "Study these terms" callout with links to bilingual glossary and subject index
  - Term count displayed per unit
- [x] 4.3 Ensure unit overview copy remains aligned with the new glossary terms
  - Vocabulary section derives from canonical glossary dataset, not hardcoded prose
  - No duplicate vocabulary blurbs — single source of truth

### Phase 5: Verification and Cleanup
- [ ] 5.1 Run tests for glossary and index utilities
- [ ] 5.2 Verify glossary and index routes are linked correctly from the shell
- [ ] 5.3 Verify every unit overview renders a vocabulary list without broken links
- [ ] 5.4 Run `npm run lint`
- [ ] 5.5 Document any glossary data maintenance rules for later tracks
