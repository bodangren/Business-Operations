# Implementation Plan: Excel for the Web Without VBA

## Phase 1: Contract and Schema Definition

- [~] Task: Define the Excel for the web content contract
  - [x] Define prohibited VBA and macro terms.
  - [x] Define approved web-compatible replacement patterns.
  - [x] Record the OneDrive workbooks as read-only reference material.
- [ ] Task: Measure - User Manual Verification 'Contract and Schema Definition' (Protocol in workflow.md)

## Phase 2: Test

- [ ] Task: Add a regression audit for course text
  - [ ] Detect VBA, recorded-macro, macro-button, and `.xlsm` requirements.
  - [ ] Allow unrelated words such as macroeconomic.
- [ ] Task: Add a workbook package audit
  - [ ] Detect VBA projects, ActiveX controls, and macro assignments.
  - [ ] Distinguish printer settings from executable binary content.
- [ ] Task: Measure - User Manual Verification 'Test' (Protocol in workflow.md)

## Phase 3: Implement

- [ ] Task: Replace the Unit 2 macro workflow
  - [ ] Revise Lessons 5 and 6 for visible formula controls.
  - [ ] Align the Unit 2 tutorial and workbook instructions.
  - [ ] Preserve the month-end close business objective.
- [ ] Task: Remove remaining VBA and macro references
  - [ ] Revise student, teacher, overview, assessment, and capstone content.
  - [ ] Remove obsolete glossary terms and resource references.
- [ ] Task: Verify workbook and lesson parity
  - [ ] Compare repository resources with the OneDrive references.
  - [ ] Confirm that all required steps work in Excel for the web.
- [ ] Task: Measure - User Manual Verification 'Implement' (Protocol in workflow.md)

## Phase 4: Generate Docs and Doctor

- [ ] Task: Run project verification
  - [ ] Run typecheck, lint, tests, and the workbook audit.
  - [ ] Refresh the code graph for changed TypeScript files.
  - [ ] Run Measure generation and doctor scripts if present.
- [ ] Task: Measure - User Manual Verification 'Generate Docs and Doctor' (Protocol in workflow.md)
