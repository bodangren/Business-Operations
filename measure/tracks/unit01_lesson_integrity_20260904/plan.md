# Implementation Plan: Unit 1 Lesson Logic and Workbook Integrity

## Phase 1: Contract and Schema Definition

- [x] Task: Define Unit 1 activity and workbook contracts (`a0bdbf2`)
  - [x] Define stable transaction and journal-entry contracts.
  - [x] Define the four-sheet workbook contract.
  - [x] Record all audit findings for Lessons 4–10.
- [ ] Task: Measure - User Manual Verification 'Contract and Schema Definition' (Protocol in workflow.md)

## Phase 2: Test

- [x] Task: Add Lesson 2 and Lesson 3 regression tests (`a0bdbf2`)
  - [x] Test transaction pattern matching.
  - [x] Test journal-entry generation and validation.
- [x] Task: Add Unit 1 resource contract tests (`a0bdbf2`)
  - [x] Test project structure data and canonical evidence values.
  - [x] Add workbook integrity verification for generated resources.
- [ ] Task: Measure - User Manual Verification 'Test' (Protocol in workflow.md)

## Phase 3: Implement

- [x] Task: Correct Lessons 1–3 (`a0bdbf2`)
  - [x] Correct accounting language and sequence.
  - [x] Correct Lesson 2 activity data.
  - [x] Correct Lesson 3 generation, validation, and hydration.
- [x] Task: Correct Lessons 4–7 (`a0bdbf2`)
  - [x] Align page instructions and tutorials.
  - [x] Rebuild workbook resources to the common contract.
  - [x] Correct evidence values and resource paths.
- [x] Task: Correct Lessons 8–10 (`a0bdbf2`)
  - [x] Align group scenarios, datasets, and workbooks.
  - [x] Correct base-path links and stale phase routes.
  - [x] Align timing and final deliverables.
- [ ] Task: Measure - User Manual Verification 'Implement' (Protocol in workflow.md)

## Phase 4: Generate Docs and Doctor

- [~] Task: Run Measure generation and architecture checks
  - [ ] Run `measure/generate.sh`. The script is not present in this repository.
  - [ ] Run `measure/doctor.sh`. The script is not present in this repository.
  - [x] Run the approved npm checks: typecheck, lint, and tests.
- [ ] Task: Measure - User Manual Verification 'Generate Docs and Doctor' (Protocol in workflow.md)
