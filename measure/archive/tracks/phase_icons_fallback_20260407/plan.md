# Plan: PHASE_ICONS Fallback

## Phase 1 — Tighten types, add helpers, update consumers (TDD)

### Tasks

1. **Write tests (Red)**
   - Add test cases in `phase-config.test.ts`:
     - `getPhaseIcon` returns a component for every `LessonPhaseName`
     - `getPhaseIcon("Unknown Phase")` returns `HelpCircle` (fallback)
     - `getPhaseColor` returns non-empty string for every phase, fallback for unknown
     - `getPhaseDescription` returns non-empty string for every phase, fallback for unknown
     - PHASE_ICONS/COLORS/DESCRIPTIONS have exactly 9 keys matching `LessonPhaseName`
   - Run tests → expect failures (helpers don't exist yet)

2. **Implement (Green)**
   - In `phase-config.ts`:
     - Import `LessonPhaseName` from `@/types/lesson`
     - Import `HelpCircle` from `lucide-react`
     - Change map types from `Record<string, ...>` to `Record<LessonPhaseName, ...>`
     - Export `getPhaseIcon(name: string): React.ComponentType`
     - Export `getPhaseColor(name: string): string`
     - Export `getPhaseDescription(name: string): string`
   - In `PhaseHeader.tsx`: replace `PHASE_ICONS[phase.phaseName]` → `getPhaseIcon(phase.phaseName)`, same for colors
   - In `PhaseFooter.tsx`: replace `PHASE_ICONS[p.phaseName]` → `getPhaseIcon(p.phaseName)`
   - In `StudentLessonOverview.tsx`: replace icon + description access with helpers
   - Run tests → expect pass

3. **Refactor (optional)** — no refactoring expected beyond the above

4. **Phase completion verification**
   - `npm run test` — all pass
   - `npm run lint` — 0 warnings
   - `tsc --noEmit` — 0 errors
   - `npm run build` — succeeds
   - Commit + checkpoint
