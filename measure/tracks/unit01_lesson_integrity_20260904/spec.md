# Unit 1 Lesson Logic and Workbook Integrity

## Overview

Correct student-facing logic defects in Unit 1. Audit Lessons 4–10. Align lesson pages, tutorials, and workbook resources.

## Functional Requirements

- Correct the Lesson 2 transaction pattern that rejects a correct answer.
- Use accurate accounting language in Lessons 1–3.
- Keep Lesson 1 focused on the clean-books problem.
- Keep Lesson 2 focused on transaction classification and equation effects.
- Keep Lesson 3 focused on debit and credit rules and journal entries.
- Generate stable Lesson 3 scenarios with correct amounts and debit or credit directions.
- Accept valid journal entries without requiring one account order or letter case.
- Reject journal entries with incorrect line amounts.
- Align Lessons 4–7 page instructions, tutorials, and workbook files.
- Use a four-sheet project workbook structure: `Transactions`, `Trial Balance`, `Error Checks`, and `Executive Summary`.
- Give each project group a workbook that uses its assigned dataset.
- Correct broken resource links under the GitHub Pages base path.
- Remove stale Lesson 9 and Lesson 10 phase content drift.

## Non-Functional Requirements

- Preserve the required lesson structure and visual styling.
- Keep exported function documentation in JSDoc.
- Keep formulas simple and compatible with desktop Excel.
- Do not use dynamic-array formulas.

## Acceptance Criteria

- Correct Lesson 2 answers receive correct feedback.
- Lesson 3 descriptions show one valid amount per accounting event.
- Lesson 3 debit and credit directions match the event.
- Equivalent valid journal-entry order and account case are accepted.
- Incorrect line allocations are rejected.
- Lesson 4–7 workbook sheet names and formulas match the lesson text.
- The shared rehearsal workbook has all four required sheets.
- Each group workbook has the same four-sheet structure and its assigned data.
- Workbook formulas contain no circular references or known invalid references.
- Lesson 7 evidence values match the shared workbook.
- Lessons 8–10 use working resource paths and one consistent project standard.

## Out of Scope

- New lesson features outside Unit 1.
- A redesign of the global lesson shell.
- Changes to the application build system.
