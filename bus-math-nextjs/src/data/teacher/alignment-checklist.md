# Unit Alignment Checklist

When updating any unit's curriculum, follow this checklist to keep student and teacher surfaces in sync.

## Required Updates for Every Unit Revision

- [ ] **Student lesson data** — `src/data/unitXX.ts` and `src/app/student/unitXX/lessonXX/lesson-data.ts`
  - Unit title, driving question, description, objectives, milestones
- [ ] **Teacher lesson plan** — `src/data/teacher/unitXX-lesson-plan.ts`
  - Must match student unit title, essential question, objectives, milestones, and deliverables
  - Must NOT reference retired content from other units
- [ ] **Shared shell labels** — Update everywhere the unit name appears:
  - `src/components/header.tsx` (studentUnits + teacherUnits arrays)
  - `src/app/student/page.tsx` (units array)
  - `src/app/page.tsx` (units array, homepage cards)
  - `src/app/teacher/layout.tsx` (sidebar navigation)
  - `src/app/teacher/page.tsx` (course structure overview)
  - `src/data/index-records.ts` (unitPages array)
  - `src/app/student/unitXX/page.tsx` (unit07Data title)
  - `src/app/frontmatter/preface/page.tsx` (unit list)
- [ ] **Intro video metadata** — `src/data/teacher/intro-videos.json`
  - Title, description, and transcript must match the current unit scope
  - Unit 07 = inventory accounting only (no depreciation references)
  - Unit 08 = fixed assets and depreciation only (no VC pitch / integrated model references)
- [ ] **Project frameworks** — `src/data/unit-project-frameworks.ts`
  - Unit title and project framing must match current curriculum
- [ ] **Glossary entries** — `src/data/glossary.ts`
  - Terms must reference correct unit IDs

## Verification Steps

1. Run `npm run build` — must pass
2. Compare teacher unit title vs student unit title — must match exactly
3. Compare teacher essential question vs student driving question — must align in intent
4. Scan for retired framing: "Asset & Inventory Tracker", "Year-1 Startup Model", "Inventory Tracker & Valuation"
5. Verify intro video transcript matches the current unit scope (not another unit's content)

## Conductor Track Reference

This checklist was created as part of the `teacher_student_alignment_20260403` Conductor track.
See `conductor/tracks/teacher_student_alignment_20260403/` for the full specification and plan.
