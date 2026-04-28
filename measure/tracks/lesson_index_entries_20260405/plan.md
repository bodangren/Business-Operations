# Implementation Plan: Lesson-Level Index Entries

## Phase 1: Data Entry and Tests

### Task 1.1: Write Tests [x]
- Add test verifying `indexRecords` contains exactly 80 lesson-category records
- Add test verifying all lesson hrefs follow `/student/unitXX/lessonYY` pattern
- Add test verifying each lesson record has a unitId

### Task 1.2: Populate lessonPages Array [x]
- Extract titles from all 80 `lesson-data.ts` files
- Build `lessonPages` array with `{ title, href, unitId }` entries
- Verify data integrity: 8 units × 10 lessons

### Task 1.3: Verify and Commit [x]
- Run `npm run lint` — must pass
- Run test suite — must pass
- Run `npm run build` — must succeed
- Commit and attach git note
