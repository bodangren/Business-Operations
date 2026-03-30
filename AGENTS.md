# AGENTS.md

## Core Rules
- Work only in `bus-math-nextjs/` unless explicitly told otherwise
- Do NOT run npm commands or mutate `.next` without explicit user approval
- Follow six-phase page structure with gradient background, PhaseHeader/PhaseFooter, Badge styling

## Lesson Implementation (USE SKILLS)

When implementing lessons, **always load the appropriate skill first**:

| Lesson | Skill to Load |
|--------|---------------|
| Lesson 01 | `launch-lesson` |
| Lessons 02-03 | `accounting-principles` |
| Lesson 04 | `accounting-principles` OR `excel-lessons` (decide based on unit plan) |
| Lessons 05-06 | `excel-lessons` |
| Lesson 07 | `project-rehearsal` |
| Lessons 08-10 | `group-project` |

**How to use**: Run `/skill <skill-name>` or use the skill tool to load the skill before implementing a lesson.

See `agents/skills/` for skill files: `launch-lesson`, `accounting-principles`, `excel-lessons`, `project-rehearsal`, `group-project`.

## Development Workflow

1. Start from clean `main` branch
2. Review `TODO.md` and current sprint story
3. Branch: `<type>/<issue>-<slug>`
4. TDD: Write tests first, then implement
5. Run `npm run lint` before commit
6. Commit with Conventional Commits
7. PR, review, squash merge

## Key References

- **Unit Improvement Plans**: `bus-math-nextjs/Unit01-Improvement_Plan.md` through `Unit08-Improvement_Plan.md` - source of truth for lesson-by-lesson skill selection
- **Component imports**: Use default exports for interactive components (ComprehensionCheck, ReflectionJournal), named exports for UI (PhaseHeader, Card)
- **MCP Knowledge Base**: Use `mcp__curriculum-mcp__list_components` to discover available components
- **Testing**: Use Chrome MCP tools for browser validation

## Conductor Framework

This project uses Conductor for spec-driven development. See `conductor/` directory:
- `conductor/index.md` - Project context
- `conductor/tracks.md` - Tracks registry
- Run `/conductor:status` to see project progress
