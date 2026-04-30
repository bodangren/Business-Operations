# AGENTS.md

## Measure Workflow

All development runs through the **Measure** spec-driven development framework exclusively. At the start of every session:

1. Load the `measure` skill
2. Read `measure/index.md` to understand the project context
3. Follow the workflow defined in `measure/workflow.md`

Key reference files:
- `measure/tracks.md` — Active work registry
- `measure/tracks/<track_id>/plan.md` — Task checklist
- `measure/product.md` — Product vision
- `measure/tech-stack.md` — Technology choices
- `measure/lessons-learned.md` — Project memory
- `measure/tech-debt.md` — Known shortcuts

Never start significant work without an active track. Always update `measure/tracks.md` and the current track's `plan.md` before and after work.


## Core Rules
- Work only in `bus-math-nextjs/` unless explicitly told otherwise
- Do NOT run npm commands or mutate `.next` without explicit user approval
- Keep student pages in the six-phase structure with gradient backgrounds, `PhaseHeader`/`PhaseFooter`, and `Badge` styling


## Lesson Implementation

When implementing lessons, load the appropriate skill first:

| Lesson | Skill to Load |
|--------|---------------|
| Lesson 01 | `launch-lesson` |
| Lessons 02-03 | `accounting-principles` |
| Lesson 04 | `accounting-principles` or `excel-lessons` based on the track plan |
| Lessons 05-06 | `excel-lessons` |
| Lesson 07 | `project-rehearsal` |
| Lessons 08-10 | `group-project` |

Load skills with `/skill <skill-name>` or the skill tool before editing lesson files.

## Development Workflow

1. Start from clean `main`
2. Review `TODO.md` and the current Measure track
3. Branch as `<type>/<issue>-<slug>`
4. Write tests first, then implement
5. Run `npm run typecheck` and `npm run lint` before commit
6. Commit with Conventional Commits
7. Open a PR, review, and squash merge

## Key References

- **Track Plans**: `measure/tracks.md` and the individual track directories are the only planning source of truth
- **Component imports**: Use default exports for interactive components (`ComprehensionCheck`, `ReflectionJournal`), named exports for UI (`PhaseHeader`, `Card`)
- **MCP Knowledge Base**: Use `mcp__curriculum-mcp__list_components` to discover available components
- **Testing**: Use Chrome MCP tools for browser validation
