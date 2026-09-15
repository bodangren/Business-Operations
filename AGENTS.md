# AGENTS.md

## Measure Workflow

Load the `measure` skill and read `measure/index.md` before starting work.

## Documentation Standards

Use JSDoc for all exported functions. Describe params and returns without repeating TypeScript types.

## Codebase Graph

This project uses `build-graph`. Load the `build-graph` skill for commands.

## Core Rules
- Work only in `bus-math-nextjs/` unless explicitly told otherwise
- Do NOT run npm commands or mutate `.next` without explicit user approval
- Keep the six teaching phases in teacher plans and lesson metadata.
- Present standard student lessons on one route with four visible sections: Start, Learn, Do, and Check.
- Use restrained gradient backgrounds and badges. Do not wrap each lesson section in a large decorative card.
- Treat `PhaseHeader` and `PhaseFooter` as legacy migration components. Do not add new uses.
- Do not add routine reflection journals to student lessons or practice tests.
- Use one short MCQ exit ticket per standard lesson. Do not place MCQ sets in Start, Learn, or Do.

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
- **Component imports**: Use default exports for interactive components and named exports for UI primitives such as `Card` and `Badge`
- **MCP Knowledge Base**: Use `mcp__curriculum-mcp__list_components` to discover available components
- **Testing**: Use Chrome MCP tools for browser validation

## Automation Supervisor

Do NOT modify measure/automation-supervisor.py. This file is centrally managed and hardlinked across all projects.
