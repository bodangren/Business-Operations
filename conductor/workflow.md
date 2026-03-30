# Project Workflow

## Guiding Principles

1. **The Plan is the Source of Truth:** All work must be tracked in `plan.md`
2. **The Tech Stack is Deliberate:** Changes to the tech stack must be documented in `tech-stack.md` *before* implementation
3. **Test-Driven Development:** Write unit tests before implementing functionality
4. **High Code Coverage:** Aim for >80% code coverage for all modules
5. **User Experience First:** Every decision should prioritize student learning outcomes
6. **Non-Interactive & CI-Aware:** Prefer non-interactive commands

## Task Workflow

All tasks follow a strict lifecycle:

### Standard Task Workflow

1. **Select Task:** Choose the next available task from `plan.md` in sequential order

2. **Mark In Progress:** Before beginning work, edit `plan.md` and change the task from `[ ]` to `[~]`

3. **Write Failing Tests (Red Phase):**
   - Create a new test file for the feature or bug fix.
   - Write one or more unit tests that clearly define the expected behavior and acceptance criteria for the task.
   - **CRITICAL:** Run the tests and confirm that they fail as expected.

4. **Implement to Pass Tests (Green Phase):**
   - Write the minimum amount of application code necessary to make the failing tests pass.
   - Run the test suite again and confirm that all tests now pass.

5. **Refactor (Optional but Recommended):**
   - With the safety of passing tests, refactor the implementation code and the test code to improve clarity.
   - Rerun tests to ensure they still pass after refactoring.

6. **Verify Coverage:** Run coverage reports using the project's chosen tools.

7. **Document Deviations:** If implementation differs from tech stack:
   - **STOP** implementation
   - Update `tech-stack.md` with new design
   - Add dated note explaining the change
   - Resume implementation

8. **Commit Code Changes:**
   - Stage all code changes related to the task.
   - Commit with a clear message following conventional commits.

9. **Attach Task Summary with Git Notes:**
   - Get the commit hash
   - Draft a detailed summary
   - Attach using `git notes add -m "<note>" <commit_hash>`

10. **Get and Record Task Commit SHA:**
    - Update `plan.md` from `[~]` to `[x]` with the commit SHA

11. **Commit Plan Update:**
    - Stage and commit the updated `plan.md`

### Phase Completion Verification

1. Announce phase completion
2. Verify test coverage for phase changes
3. Run automated tests (`npm run lint`)
4. Propose manual verification steps
5. Await user confirmation
6. Create checkpoint commit
7. Attach verification report as git note

## Development Commands

### Setup
```bash
cd bus-math-nextjs/
npm install
```

### Daily Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
npm run build        # Production build
```

### Before Committing
```bash
npm run lint         # Check for linting errors
```

## Quality Gates

Before marking any task complete, verify:
- [ ] All code follows project conventions
- [ ] ESLint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Components properly documented in MCP
- [ ] No security issues introduced

## Commit Guidelines

### Message Format
```
<type>(<scope>): <description>
```

### Types
- `feat`: New feature, component, or lesson content
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, styling changes
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat(unit01): Add Phase 2 content for T-account exercises"
git commit -m "fix(journal): Correct debit/credit balance calculation"
git commit -m "docs(readme): Update component documentation"
```

## Definition of Done

A task is complete when:
1. All code implemented to specification
2. ESLint passes with no errors
3. Build succeeds without errors
4. Components documented in MCP knowledge base
5. Changes committed with proper message
6. Git note with task summary attached
