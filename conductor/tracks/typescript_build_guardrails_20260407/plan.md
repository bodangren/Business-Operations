# Plan: TypeScript Build Guardrails

## Phase 1: Establish the guardrail surface

- [x] Confirm the current baseline with `./node_modules/.bin/tsc --noEmit`
- [x] Add a dedicated `typecheck` script to `package.json`
- [x] Update developer-facing docs/workflow references to use the explicit typecheck command

## Phase 2: Wire TypeScript verification into track completion

- [ ] Update Conductor workflow or adjacent project docs so future tracks explicitly verify TypeScript cleanliness
- [ ] Ensure the preferred verification path distinguishes between non-mutating typecheck and full build verification
- [ ] If implementation reveals any current TypeScript regressions, fix them before closing the track

## Phase 3: Final verification

- [ ] Verify `./node_modules/.bin/tsc --noEmit` exits 0
- [ ] Verify `npm run lint` exits 0
- [ ] Verify `npm run build` succeeds when approval to run it is available, or record the approved fallback verification path
- [ ] Update any relevant tech-debt or workflow notes if the verification standard changed
