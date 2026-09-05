# Implementation Plan: Excel for the Web Without VBA

## Phase 1: Contract and Schema Definition

- [x] Task: Define the Excel for the web content contract
  - [x] Define prohibited VBA and macro terms.
  - [x] Define approved web-compatible replacement patterns.
  - [x] Record the OneDrive workbooks as read-only reference material.
- [ ] Task: Measure - User Manual Verification 'Contract and Schema Definition' (Protocol in workflow.md)

## Phase 2: Test

- [x] Task: Add a regression audit for course text
  - [x] Detect VBA, recorded-macro, macro-button, and `.xlsm` requirements.
  - [x] Allow unrelated words such as macroeconomic.
- [x] Task: Add a workbook package audit
  - [x] Detect VBA projects, ActiveX controls, and macro assignments.
  - [x] Distinguish printer settings from executable binary content.
- [ ] Task: Measure - User Manual Verification 'Test' (Protocol in workflow.md)

## Phase 3: Implement

- [x] Task: Replace the Unit 2 macro workflow
  - [x] Revise Lessons 5 and 6 for visible formula controls.
  - [x] Align the Unit 2 tutorial and workbook instructions.
  - [x] Preserve the month-end close business objective.
- [x] Task: Remove remaining VBA and macro references
  - [x] Revise student, teacher, overview, assessment, and capstone content.
  - [x] Remove obsolete glossary terms and resource references.
- [x] Task: Verify workbook and lesson parity
  - [x] Compare repository resources with the OneDrive references.
  - [x] Confirm that all required steps use Excel for the web features.
- [ ] Task: Measure - User Manual Verification 'Implement' (Protocol in workflow.md)

## Phase 4: Generate Docs and Doctor

- [x] Task: Run project verification
  - [x] Run typecheck, lint, tests, build, and the workbook audit.
  - [x] Refresh the code graph for changed TypeScript files.
  - [x] Confirm that this project has no Measure generation or doctor scripts.
- [ ] Task: Measure - User Manual Verification 'Generate Docs and Doctor' (Protocol in workflow.md)
