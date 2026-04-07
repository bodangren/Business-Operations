# AGENTS.md

## Core Rules
- Work only in `bus-math-nextjs/` unless explicitly told otherwise
- Do NOT run npm commands or mutate `.next` without explicit user approval
- Keep student pages in the six-phase structure with gradient backgrounds, `PhaseHeader`/`PhaseFooter`, and `Badge` styling

## Conductor Is The Source Of Truth

All active planning now lives in Conductor. Do not use the retired `Unitxx-Improvement-Plan.md` files or the old master improvement tracker.

Use these files instead:
- `conductor/index.md`
- `conductor/tracks.md`
- `conductor/tracks/<track_id>/spec.md`
- `conductor/tracks/<track_id>/plan.md`
- `conductor/tracks/<track_id>/metadata.json`

Use these commands when you need project status or track operations:
- `/conductor:status`
- `/conductor:newTrack`
- `/conductor:implement`
- `/conductor:review`
- `/conductor:revert`

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
2. Review `TODO.md` and the current Conductor track
3. Branch as `<type>/<issue>-<slug>`
4. Write tests first, then implement
5. Run `npm run typecheck` and `npm run lint` before commit
6. Commit with Conventional Commits
7. Open a PR, review, and squash merge

## Key References

- **Track Plans**: `conductor/tracks.md` and the individual track directories are the only planning source of truth
- **Component imports**: Use default exports for interactive components (`ComprehensionCheck`, `ReflectionJournal`), named exports for UI (`PhaseHeader`, `Card`)
- **MCP Knowledge Base**: Use `mcp__curriculum-mcp__list_components` to discover available components
- **Testing**: Use Chrome MCP tools for browser validation
