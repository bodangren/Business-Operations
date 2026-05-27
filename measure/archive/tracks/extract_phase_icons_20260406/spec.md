# Spec: Extract Shared phaseIcons Constant

## Overview

`phaseIcons` (9-entry icon map) is copy-pasted identically in `PhaseHeader.tsx`, `PhaseFooter.tsx`, and `StudentLessonOverview.tsx`. `phaseColors` (9-entry color map) exists only in `PhaseHeader.tsx` but is also duplicated conceptually. `phaseDescriptions` (9-entry description map) exists only in `StudentLessonOverview.tsx`. Adding a new phase requires editing all three files.

## Functional Requirements

1. Create `src/components/student/phase-config.ts` exporting:
   - `PHASE_ICONS: Record<string, React.ComponentType<{ className?: string }>>`
   - `PHASE_COLORS: Record<string, string>`
   - `PHASE_DESCRIPTIONS: Record<string, string>`
2. Replace local `phaseIcons` in all three files with import from `phase-config`
3. Replace local `phaseColors` in `PhaseHeader.tsx` with import
4. Replace local `phaseDescriptions` in `StudentLessonOverview.tsx` with import
5. Remove now-unused lucide-react icon imports from each consumer file (keep icons used for non-phase purposes)

## Non-Functional Requirements

- No runtime behavior change
- No visual regression
- All existing tests pass
- Build succeeds

## Acceptance Criteria

- `phase-config.ts` exists with all three maps
- Zero duplicate `const phaseIcons` definitions in the codebase
- Zero duplicate `const phaseColors` definitions outside `phase-config.ts`
- Zero duplicate `const phaseDescriptions` definitions outside `phase-config.ts`
- All 241 tests pass
- `npm run build` succeeds

## Out of Scope

- Consolidating `LessonPhaseName` and `LessonProgressPhaseName` unions (separate track)
