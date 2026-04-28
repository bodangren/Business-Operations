# Specification: Lesson-Level Index Entries

## Overview

The Subject Index (`/backmatter/index`) currently shows glossary terms, unit pages, and extra pages but no lesson-level entries. The `lessonPages` array in `index-records.ts` is empty. This track populates it with all 80 lesson pages (8 units × 10 lessons each).

## Functional Requirements

1. Each lesson must appear as an index record with `category: "lesson"`
2. Lesson titles must match the titles defined in each lesson's `lesson-data.ts`
3. Each entry must have the correct `href` path (`/student/unitXX/lessonYY`)
4. Each entry must reference its parent `unitId`
5. Existing tests for `generateIndexRecords` must continue to pass
6. A new integration-level test verifies the full `indexRecords` export contains lesson entries

## Non-Functional Requirements

- No new dependencies
- ESLint passes with 0 new errors
- Build succeeds

## Acceptance Criteria

- [ ] `lessonPages` array contains exactly 80 entries
- [ ] Each entry has `title`, `href`, and `unitId` fields
- [ ] All 8 units represented (10 lessons each)
- [ ] Subject index page renders lesson entries
- [ ] Tests pass

## Out of Scope

- Changing the IndexFilter UI or component behavior
- Adding keyword/tag metadata to lesson index records
- Auto-generating entries from filesystem (manual data entry for now)
