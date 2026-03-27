# Autonomous Lesson Rewrite Prompt

You are working in:

`/Users/daniel.bodanske/Desktop/Business-Operations`

Your job is to complete exactly **one** lesson rewrite per run, using the correct project-local lesson skill and the unit-specific improvement plan.

For this workflow, an unchecked lesson in `Improvement_plan.md` is **not complete yet**, even if files already exist for that lesson. Do not treat the presence of existing pages, a passing build, or your own judgment that the lesson "looks done" as permission to mark it complete.

## Required files to read first

1. `/Users/daniel.bodanske/Desktop/Business-Operations/AGENTS.md`
2. `/Users/daniel.bodanske/Desktop/Business-Operations/Improvement_plan.md`

Then identify the next unfinished lesson and read:

3. `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/UnitXX-Improvement-Plan.md`
4. The required skill file named in that unit plan:
   - `/Users/daniel.bodanske/Desktop/Business-Operations/agents/skills/launch-lesson/SKILL.md`
   - `/Users/daniel.bodanske/Desktop/Business-Operations/agents/skills/accounting-principles/SKILL.md`
   - `/Users/daniel.bodanske/Desktop/Business-Operations/agents/skills/excel-lessons/SKILL.md`
   - `/Users/daniel.bodanske/Desktop/Business-Operations/agents/skills/project-rehearsal/SKILL.md`
   - `/Users/daniel.bodanske/Desktop/Business-Operations/agents/skills/group-project/SKILL.md`

## Lesson selection rule

- Open `Improvement_plan.md`.
- Work from the lowest-numbered unit that still has an unchecked lesson.
- Within that unit, work on the lowest-numbered unchecked lesson.
- Complete exactly one lesson and stop.
- Treat the unchecked box as authoritative. Do not skip an unchecked lesson because the current implementation looks strong.

At the start of the run, print which unit and lesson you selected.

## Student lesson file locations

Use these paths as the source of truth:

- Unit data: `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/data/unitXX.ts`
- Student lesson folder: `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/`
- Lesson metadata: `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/lesson-data.ts`
- Standard six-phase pages:
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/phase-1/page.tsx`
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/phase-2/page.tsx`
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/phase-3/page.tsx`
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/phase-4/page.tsx`
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/phase-5/page.tsx`
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/phase-6/page.tsx`
- Milestone-style project lesson page when it exists:
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/app/student/unitXX/lessonXX/page.tsx`
- Related components:
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/src/components/`
- Related resources and datasets:
  - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs/public/resources/`

## Structure rule

- Follow `AGENTS.md`, then the unit improvement plan, then the lesson skill.
- The lesson objective is the north star for every text and activity.
- For `launch-lesson`, `accounting-principles`, `excel-lessons`, and `project-rehearsal`, keep or build the full six-phase lesson structure unless the unit plan says otherwise.
- For `group-project`, default to the existing milestone-style structure. If the lesson folder already contains both `page.tsx` and phase pages, preserve the existing project structure instead of inventing a new one.

## Definition of done for one lesson

For the selected lesson, complete all required student-facing work for that lesson, including:

- `lesson-data.ts`
- the relevant page files for that lesson structure
- any lesson-specific components you need to add or update
- any matching resource files in `public/resources/` if required by the lesson
- any necessary import and navigation updates tied directly to that lesson

The lesson should be complete enough that a junior developer would not need to reinterpret the pedagogy on that lesson.

## Non-Negotiable Completion Rule

You may mark the selected lesson complete in `Improvement_plan.md` only if all of the following are true:

- you made **substantive student-facing changes** for that specific lesson during this run
- you wrote or refactored at least one of the components to more align with the lesson objective
- no activity components (outside of comprehension check component) repeat across phases. Variations increasing in difficulty are acceptable, but exact repitition isn't
- the git diff includes changes inside the selected lesson's folder or directly related lesson resource files
- the selected lesson is now more aligned with `AGENTS.md`, the unit improvement plan, and the lesson skill than it was before this run
- `npm run build` passes after your changes

Substantive changes mean pedagogy, content, structure, UX, components, resources, or lesson metadata improvements. Formatting-only edits, import reordering, whitespace cleanup, or merely confirming that the lesson already exists do **not** count.

If you inspect the selected lesson and believe it is already complete, treat that as a tracker inconsistency:

- do **not** check the lesson box
- do **not** commit a "mark complete" change
- print a blocker saying the tracker and current code disagree
- stop the run

## Required workflow

1. Read the required files.
2. Inspect the current lesson files before changing anything.
3. Use the lesson skill as the writing and structure standard.
4. Identify the specific gaps between the current lesson and the improvement-plan requirements.
5. Make the lesson-specific edits.
6. Confirm that the selected lesson now has a substantive diff.
7. Run `npm run build` in:
   - `/Users/daniel.bodanske/Desktop/Business-Operations/bus-math-nextjs`
8. If the build fails, fix the errors and run `npm run build` again.
9. Do not stop until the build passes, or until you hit a real blocker that cannot be safely resolved in the selected lesson.

The user has explicitly authorized `npm run build` for this autonomous workflow.

## Git requirements

Before editing:

- Check `git status --short`.
- If the worktree is already dirty with unrelated changes, stop and report the blocker instead of mixing work.

After the lesson is complete and the build passes:

1. Update `/Users/daniel.bodanske/Desktop/Business-Operations/Improvement_plan.md`
   - check the completed lesson box
   - update the unit status if needed
   - if all 10 lessons for a unit are now complete, mark that unit `finished`
   - update `Next target`
   - update `Units finished` if needed
2. Stage only the files relevant to this run.
3. Commit with a conventional commit message in this format:
   - `feat: improve unitXX lessonXX`
4. Push to remote:
   - `git push origin HEAD`

Before updating `Improvement_plan.md`, run a diff check and verify that the selected lesson has real content changes in this run. If there is no substantive diff for the selected lesson, stop without updating the tracker.

## Stop conditions

Stop without committing only if:

- the worktree is dirty before you begin
- you cannot determine the next lesson from `Improvement_plan.md`
- the selected lesson appears already complete and there is no substantive lesson diff to make in this run
- the build fails for a clearly unrelated reason you cannot safely fix
- the lesson would require a broad unit rewrite rather than one-lesson scope

If you stop, print a short blocker summary and do not update `Improvement_plan.md`.

## Final run summary

At the end of a successful run, print:

- selected lesson
- files changed
- build result
- commit hash
- push result
- next target
