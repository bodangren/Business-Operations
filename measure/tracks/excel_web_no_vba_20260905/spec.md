# Specification: Excel for the Web Without VBA

## Overview

Students use Excel for the web. The course must not require VBA, recorded macros, macro buttons, or macro-enabled workbook files. The course must use formulas, named ranges, tables, data validation, conditional formatting, and visible control cells instead.

The OneDrive unit workbooks are reference material. This track does not change those source files.

## Functional Requirements

1. Remove VBA and recorded-macro instructions from student lessons.
2. Remove VBA and recorded-macro requirements from teacher plans, unit plans, assessments, course overviews, and capstone materials.
3. Replace the Unit 2 button-driven close with a formula-driven close control panel that works in Excel for the web.
4. Keep the Unit 2 business goal. Students must still reduce close time and make errors visible.
5. Update tutorials so the page, workbook, and tutorial describe the same web-compatible process.
6. Confirm that repository `.xlsx` files contain no VBA projects, ActiveX controls, or macro assignments.
7. Add an automated regression check for prohibited VBA and macro teaching references.

## Non-Functional Requirements

- Use short, direct student instructions.
- Preserve the six-phase lesson structure.
- Keep existing file names when possible.
- Do not require desktop Excel features.
- Do not change the OneDrive reference files.

## Acceptance Criteria

- No active course text requires or recommends VBA, recorded macros, macro buttons, or `.xlsm` files.
- Unit 2 Lessons 5 and 6 teach visible formula controls that work in Excel for the web.
- Unit 2 page instructions and tutorial steps match the supplied `.xlsx` workbooks.
- The automated content audit passes.
- The workbook package audit finds no VBA project or ActiveX content.
- TypeScript, lint, and test checks pass.

## Out of Scope

- Fixing the other Unit 2–8 defects from the September 4 review.
- Editing the OneDrive source workbooks.
- Adding Office Scripts, Power Automate, add-ins, or desktop-only controls.
