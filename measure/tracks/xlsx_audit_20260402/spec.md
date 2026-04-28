# Specification: Unit-by-unit XLSX Link and Workbook Integrity Audit

## Overview
Create a repeatable audit workflow that scans student lesson pages for `.xlsx` links and verifies each linked workbook for:
1. file existence,
2. expected workbook contents and sheet structure,
3. alignment with page examples/reference layouts when present.

The audit should run unit-by-unit, with one unit handled per phase, and produce a clear report plus remediation backlog.

## Required Skill

This track **must** use the spreadsheet skill before and during implementation:
- `~/Desktop/Business-Operations/.agents/skills/spreadsheet/SKILL.md`

All workbook inspection and validation logic in this track should follow that skill's formula-aware and structure-preserving guidance.

## Functional Requirements

### FR1: Discover XLSX Links from Student Pages
- Parse student page files in `bus-math-nextjs/src/app/student/`.
- Extract `.xlsx` links from lesson and phase pages.
- Capture context for each link:
  - unit,
  - lesson,
  - phase/page path,
  - linked file path.

### FR2: Existence Validation
- For every discovered `.xlsx` link, verify the target file exists in `bus-math-nextjs/public/resources/` (or linked location).
- Mark missing files as critical findings.

### FR3: Workbook Content Validation
- Open each linked workbook and validate baseline integrity:
  - workbook opens,
  - workbook has at least one sheet,
  - expected tab names exist when named in page/tutorial text,
  - expected student/teacher pairing exists when both are referenced.
- Record formula- or data-structure mismatches when explicit requirements are present in page/tutorial instructions.

### FR4: Page Example Alignment Check
- When a phase page contains a reference layout/example (e.g., sheet preview or named tab sequence), compare workbook structure against that example.
- Flag misalignment such as:
  - missing or extra tabs that break instruction flow,
  - tab names that differ from page instructions,
  - workbook sequence that materially conflicts with build blocks/checkpoints.

### FR5: Unit-by-unit Execution
- Run the audit with one unit per phase in plan order.
- Generate per-unit findings and a cumulative report.

### FR6: Reporting
- Produce:
  - one report per unit,
  - one consolidated summary across all units,
  - prioritized remediation list (critical/high/medium).
- Include direct references to source page paths and workbook filenames for each finding.

## Non-Functional Requirements

- Default audit mode is read-only (no workbook mutation).
- Audit output should be deterministic and rerunnable.
- Implementation should rely on local repository files only (no network dependency).
- Runtime should be practical for CI/local use on the full student lesson set.
- Spreadsheet processing must follow the required spreadsheet skill workflow and constraints.

## Acceptance Criteria

- All student units are audited one unit per phase.
- Every discovered `.xlsx` link is classified as:
  - valid and aligned,
  - valid but misaligned,
  - missing or unreadable.
- Reports provide enough detail for direct fixes without additional discovery.
- At least one known mismatch scenario is correctly detected during verification.
- Final consolidated report clearly states total links scanned, pass/fail counts, and top remediation priorities.

## Out of Scope

- Auto-fixing workbook content in this track.
- Redesigning lesson pedagogy unrelated to workbook-link integrity.
- Auditing non-`.xlsx` resources except where needed for workbook alignment context.
