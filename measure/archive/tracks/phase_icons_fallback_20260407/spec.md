# Spec: PHASE_ICONS Fallback — Tighten Types & Add Defensive Helpers

## Problem

`PHASE_ICONS`, `PHASE_COLORS`, and `PHASE_DESCRIPTIONS` in `phase-config.ts` are typed as `Record<string, ...>`. This means:

- TypeScript cannot catch invalid phase-name keys at compile time.
- Consumer components (`PhaseHeader`, `PhaseFooter`, `StudentLessonOverview`) index these maps with `phase.phaseName` (a `string`). If the key is missing, the icon resolves to `undefined`, and React crashes at render time.
- Adding a new phase to `LessonPhaseName` does not force the maps to include it.

## Goal

1. Type all three maps as `Record<LessonPhaseName, ...>` so missing entries are compile errors.
2. Export helper functions (`getPhaseIcon`, `getPhaseColor`, `getPhaseDescription`) that accept `string` and return a sensible fallback when the key is missing.
3. Consumer components switch to the helpers, eliminating the crash risk.

## Scope

### In Scope
- `phase-config.ts`: change map types, import `LessonPhaseName`, add 3 helper functions with `HelpCircle` / default string fallbacks.
- `PhaseHeader.tsx`, `PhaseFooter.tsx`, `StudentLessonOverview.tsx`: replace direct bracket access with helper calls.
- `phase-config.test.ts`: add tests for fallback behavior and type completeness.
- Update `tech-debt.md` — close L22 item.

### Out of Scope
- Changing `LessonPhaseName` union members.
- Refactoring other consumers of these maps (there are none outside the 3 listed).
- Visual/UX changes.

## Acceptance Criteria

- [ ] `PHASE_ICONS` is `Record<LessonPhaseName, React.ComponentType<{ className?: string }>>`
- [ ] `PHASE_COLORS` is `Record<LessonPhaseName, string>`
- [ ] `PHASE_DESCRIPTIONS` is `Record<LessonPhaseName, string>`
- [ ] `getPhaseIcon(name: string)` returns the matching component or `HelpCircle`
- [ ] `getPhaseColor(name: string)` returns the matching string or a neutral default
- [ ] `getPhaseDescription(name: string)` returns the matching string or `"Phase"`
- [ ] All 3 consumer components use the helpers
- [ ] Tests pass for all 9 known phases + unknown phase fallback
- [ ] `tsc` emits 0 errors
- [ ] `npm run build` succeeds
