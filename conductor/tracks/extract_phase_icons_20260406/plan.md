# Plan: Extract Shared phaseIcons Constant

## Phase 1: Create shared module and refactor consumers

- [x] Write tests for `phase-config.ts` exports (maps contain all 9 phase names, correct icon/color/description types)
- [x] Create `src/components/student/phase-config.ts` with `PHASE_ICONS`, `PHASE_COLORS`, `PHASE_DESCRIPTIONS`
- [x] Refactor `PhaseHeader.tsx` — import from `phase-config`, remove local maps and unused icon imports
- [x] Refactor `PhaseFooter.tsx` — import from `phase-config`, remove local maps and unused icon imports
- [x] Refactor `StudentLessonOverview.tsx` — import from `phase-config`, remove local maps and unused icon imports
- [x] Run tests — verify all pass
- [x] Run build — verify success
- [x] Commit checkpoint
