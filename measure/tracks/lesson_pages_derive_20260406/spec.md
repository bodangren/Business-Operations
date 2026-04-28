# Specification: Derive lessonPages from Lesson-Data Files

## Problem

`index-records.ts` contains a hand-maintained `lessonPages` array of 80 entries (8 units × 10 lessons). Each entry duplicates the lesson title and unit ID already present in the corresponding `lesson-data.ts` file. Adding, renaming, or reordering a lesson requires updating both the lesson-data file AND this hardcoded array — a single-source-of-truth violation.

## Goal

Replace the hardcoded `lessonPages` array with a derived array that imports `lessonYYData.title` from each of the 80 lesson-data files and constructs `href`/`unitId` from the known unit/lesson numbers.

## Approach

Create a new `src/data/lesson-registry.ts` module that:
1. Imports the `lessonYYData` export from every `src/app/student/unitXX/lessonYY/lesson-data.ts` file (80 imports).
2. Maps each import to `{ title: lessonData.title, href: "/student/unitXX/lessonYY", unitId: "unitXX" }`.
3. Exports the derived `LESSON_PAGES` array with the same type as the current hardcoded one.

Then update `index-records.ts` to import `LESSON_PAGES` from the registry instead of maintaining the inline array.

## Constraints

- No dynamic `require()` / `import()` — all imports are static (Next.js compatible).
- Export name must remain `lessonPages` (lowercase) where `index-records.ts` uses it, or callers must update.
- The existing `generateIndexRecords()` function signature accepts `Array<{ title: string; href: string; unitId?: UnitId }>` — the registry must match this shape.
- Existing tests in `index-records.test.ts` validate 80 entries, correct href pattern, unitId presence, 10 lessons per unit — all must continue to pass.

## Acceptance Criteria

- [ ] `lesson-registry.ts` exists with 80 static imports and exports `LESSON_PAGES`.
- [ ] `index-records.ts` imports from `lesson-registry.ts` instead of inline array.
- [ ] No hardcoded lesson titles remain in `index-records.ts`.
- [ ] All existing `index-records.test.ts` tests pass (80 entries, href pattern, unitId, 10 per unit, unique slugs).
- [ ] `npm run build` succeeds with no new errors.
- [ ] `eslint .` passes with no new warnings.

## Out of Scope

- Extracting a shared `getLessonHref()` utility (URL construction is already duplicated in PhaseHeader/PhaseFooter/StudentLessonOverview; a separate track).
- Fixing the `unitId` inconsistency in older lesson-data files (some use opaque IDs like `"mdrha5ziiupuou6dqt"` — the registry will use `"unitXX"` derived from the path, not from lessonData.unitId).
