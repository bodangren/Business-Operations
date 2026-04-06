# Implementation Plan: Practice-test page LessonPhase migration

## Phase 1: Migrate imports

### Task 1.1: Update unit01 practice-test page
- [x] Change `import { PhaseHeader, type LessonPhase } from "@/components/student/PhaseHeader"` to two separate imports:
  - `import { PhaseHeader } from "@/components/student/PhaseHeader"`
  - `import type { LessonPhase } from "@/types/lesson"`

### Task 1.2: Update unit02 practice-test page
- [x] Same import change as Task 1.1

### Task 1.3: Update unit03 practice-test page
- [x] Same import change as Task 1.1

### Task 1.4: Update unit04 practice-test page
- [x] Same import change as Task 1.1

### Task 1.5: Update unit05 practice-test page
- [x] Same import change as Task 1.1

### Task 1.6: Update unit06 practice-test page
- [x] Same import change as Task 1.1

### Task 1.7: Update unit07 practice-test page
- [x] Same import change as Task 1.1

### Task 1.8: Update unit08 practice-test page
- [x] Same import change as Task 1.1

### Task 1.9: Verify no remaining backward-compat imports
- [x] Run `grep -r "LessonPhase.*PhaseHeader" src/` — 0 results
- [x] Run `npm run lint` — 0 errors, 0 warnings
- [x] Run `npm test` — 221 passed (15 suites)
- [x] Run `npm run build` — compiled successfully
