# Implementation Plan: Derive lessonPages from Lesson-Data Files

## Phase 1: Write Tests for lesson-registry.ts

- [x] Create `src/data/__tests__/lesson-registry.test.ts`
- [x] Write test: exports exactly 80 lesson page records
- [x] Write test: each record has title (non-empty string), href, unitId
- [x] Write test: hrefs match `/student/unitXX/lessonYY` pattern
- [x] Write test: covers all 8 units with 10 lessons each
- [x] Write test: titles match the source lesson-data files (spot-check 3-4)
- [x] Run tests → expect RED (module doesn't exist yet)

## Phase 2: Create lesson-registry.ts

- [x] Create `src/data/lesson-registry.ts`
- [x] Add 80 static imports: `import { lesson01Data } from "@/app/student/unit01/lesson01/lesson-data"` etc.
- [x] Build `LESSON_PAGES` array: map each import to `{ title: data.title, href: "/student/unitXX/lessonYY", unitId: "unitXX" as UnitId }`
- [x] Export `LESSON_PAGES`
- [x] Run tests → expect GREEN

## Phase 3: Wire into index-records.ts

- [x] Remove hardcoded `lessonPages` array from `index-records.ts`
- [x] Import `LESSON_PAGES` from `@/data/lesson-registry`
- [x] Pass `LESSON_PAGES` to `generateIndexRecords()`
- [x] Run `index-records.test.ts` → all pass
- [x] Run full test suite → no regressions

## Phase 4: Verify and Clean Up

- [x] Run `eslint .` — no new warnings
- [x] Run `npm run build` — no new errors
- [x] Verify `lesson-registry.ts` ≤ 100 lines (readable)
- [x] Commit checkpoint
