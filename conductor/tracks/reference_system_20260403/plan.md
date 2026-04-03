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
- [ ] 2.1 Build the glossary records for Units 01-04
  - Draft English definitions
  - Draft Chinese definitions
  - Add unit/topic tags
  - Deduplicate repeated accounting/statistics vocabulary
- [ ] 2.2 Build the glossary records for Units 05-08
  - Draft English definitions
  - Draft Chinese definitions
  - Add unit/topic tags
  - Deduplicate repeated Excel/business operations vocabulary
- [ ] 2.3 Add cross-unit and capstone-relevant terms
  - Include common workbook, audit, recommendation, and business communication terms where needed
- [ ] 2.4 Review bilingual quality and terminology consistency
  - Verify Chinese definitions are definitions, not just translated labels
  - Verify English definitions match student-facing lesson language

### Phase 3: Glossary and Index Routes
- [ ] 3.1 Create `/backmatter/glossary`
  - Add alphabetical navigation
  - Add keyword filter
  - Add unit filter
  - Add topic filter
- [ ] 3.2 Add glossary display controls for the four study fields
  - Let the user choose visible primary and secondary fields from `term_en`, `term_zh`, `def_en`, `def_zh`
  - Choose a sensible default view
- [ ] 3.3 Create `/backmatter/index`
  - Build a static record list from glossary terms and page metadata
  - Add a client-side keyword filter
  - Add category or source-type labels where useful
- [ ] 3.4 Add reusable glossary and index UI helpers
  - Keep the components small and static-friendly
  - Avoid coupling them to future practice-hub logic

### Phase 4: Unit Overview Integration
- [ ] 4.1 Add vocabulary sections to student unit overview pages
  - Show unit-curated glossary subsets
  - Link each term to the glossary entry
- [ ] 4.2 Add a future-facing study entry point
  - Example: "Study these terms" link or button stub
  - Do not implement local practice logic yet
- [ ] 4.3 Ensure unit overview copy remains aligned with the new glossary terms
  - Avoid duplicate hardcoded vocabulary blurbs when glossary-derived lists are available

### Phase 5: Verification and Cleanup
- [ ] 5.1 Run tests for glossary and index utilities
- [ ] 5.2 Verify glossary and index routes are linked correctly from the shell
- [ ] 5.3 Verify every unit overview renders a vocabulary list without broken links
- [ ] 5.4 Run `npm run lint`
- [ ] 5.5 Document any glossary data maintenance rules for later tracks
