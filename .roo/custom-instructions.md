---
title: "Custom Instructions for Business Math & Finance Textbook"
type: "instructions"
---

# Custom Instructions for Business Math & Finance Textbook

This document provides instructions for using the configuration files and templates in the `.roo/` directory to maintain consistent formatting and styling across the Business Math & Finance textbook.

## Directory Structure

The `.roo/` directory contains the following subdirectories:

- `templates/`: Content templates for different types of files
- `styles/`: CSS and LaTeX styling for PDF and HTML outputs
- `scripts/`: Build scripts for automation
- `lint/`: Linting rules for consistent formatting
- `pandoc/`: Pandoc configuration for PDF and HTML outputs

## Using Templates

The `templates/` directory contains templates for different types of content. Use these templates as a starting point for creating new content files.

### Unit Template

Use the `unit-template.md` file as a template for creating new unit content files. The template includes:

- YAML frontmatter with metadata
- Section structure with headings
- Placeholders for content

To create a new unit file:

1. Copy the `unit-template.md` file to the appropriate unit directory
2. Rename the file to `index.md`
3. Update the YAML frontmatter with the correct metadata
4. Replace the placeholder content with your actual content

### Exercise Template

Use the `exercise-template.md` file as a template for creating new exercise files. The template includes:

- YAML frontmatter with metadata
- Section structure with headings
- Placeholders for instructions, scenarios, tasks, etc.

To create a new exercise file:

1. Copy the `exercise-template.md` file to the appropriate unit's `exercises/` directory
2. Rename the file to `exerciseN.md` (where N is the exercise number)
3. Update the YAML frontmatter with the correct metadata
4. Replace the placeholder content with your actual content

## Markdown Styling Conventions

Follow these conventions to ensure consistent formatting across the textbook:

### Headings

Use ATX-style headings (# Heading 1) with consistent levels:

- # for unit titles (H1)
- ## for major sections (H2)
- ### for subsections (H3)
- #### for sub-subsections (H4)

Example:

```markdown
# Unit Title

## Major Section

### Subsection

#### Sub-subsection
```

### Excel Formulas

Use code blocks with Excel syntax highlighting for Excel formulas:

```markdown
```excel
=SUMIF(A2:A10,"Expenses",B2:B10)
```
```
# Context: Business Math & Finance Curriculum **and Textbook** Development for Grade 12

---

## 0 ▪ Mission

Design and continuously refine **Math for Business Operations: Applied Accounting with Excel**—a year-long, project-based Grade 12 course **and** its accompanying LaTeX textbook.
The assistant must:

1. **Support curriculum design** (units, lessons, assessments, rubrics).
2. **Author compile-ready LaTeX** files that fit an opinionated repository and styling system.
3. **Automate where possible** (Excel templates, peer-review forms, macros, etc.).

All responses should be teacher-time-savers: clear structure, reusable assets, error-free code.

---

## 1 ▪ Instructional Scope

### Semester 1 Mini-Projects (2 weeks each)

| # | Unit Title                     | Driving Question                                                                   | Core Excel Skills                                 |
| - | ------------------------------ | ---------------------------------------------------------------------------------- | ------------------------------------------------- |
| 1 | **Smart Ledger Launch**        | How can we design a self-auditing ledger that proves our books are investor-ready? | `SUMIF`, conditional formatting, running balances |
| 2 | **Month-End Wizard**           | How can we automate month-end closing and cut accounting time from days to hours?  | `SLN`, VBA macros, button triggers                |
| 3 | **Three-Statement Storyboard** | How do journal entries tell a story of financial health?                           | cross-sheet links, `INDEX/MATCH`, dashboards      |
| 4 | **Data-Driven Café**           | How do we use data to reduce waste and maximize weekend profits?                   | Analysis ToolPak, histograms, regression          |
| 5 | **PayDay Simulator**           | How do small businesses manage payroll legally and predict cash needs?             | `XLOOKUP`, payroll registers                      |
| 6 | **PriceLab Challenge**         | What price/volume combo hits our targets without losing the market?                | Goal Seek, Data Tables, CVP                       |
| 7 | **Asset & Inventory Tracker**  | Which methods best align with our cash-flow and tax strategy?                      | `SLN`, `DDB`, FIFO/LIFO                           |
| 8 | **Integrated Model Sprint**    | Can we model a full year and stress-test key assumptions?                          | Scenario Manager, 12-month forecast               |

### Semester 2 Capstone (13 weeks)

Weekly flow (W1-W13): concept proposal → market research → revenue model → start-up budget → funding strategy → pricing & forecast → payroll → inventory → depreciation → integrated model → sensitivity & risk → pitch deck → demo day.

Deliverables:

* Written **business plan** (MLA-sourced, AI-attribution noted)
* Annotated **Excel workbook** with automated logic
* 10-minute **pitch** for live/recorded audience

---

## 2 ▪ Textbook Repository & File-System Map

```plaintext
/your-book-project/
│
├── style.tex                  % global styles & macros (DO NOT edit unless user approves)
├── book_main.tex              % master file – keep \include lines COMMENTED by default
│
├── frontmatter/ …             % titlepage, toc, etc.
├── units/
│   ├── unit01_smart_ledger_launch/
│   │   ├── 01_intro.tex
│   │   ├── 02_concepts.tex
│   │   ├── 03_excel_model.tex
│   │   ├── 04_examples.tex
│   │   ├── 05_exercises.tex
│   │   └── 06_summary.tex
│   └── … (unit02 … unit08)
│
├── capstone/ (01_guidelines.tex … 05_reflection_prompts.tex)
├── backmatter/ (glossary.tex, bibliography.tex, index.tex, colophon.tex)
├── images/ (cover.png, unitXX/figs)
└── tables/  (stand-alone .tex if needed)
```

**Naming Rules**

* Always follow `NN_sectionname.tex` numbering inside each unit.
* Never overwrite; append new chunks with a `% ---NEW BLOCK` comment tag.
* End every file with `\clearpage`.

**Master Build**

* Leave `\include{…}` lines **commented** in `book_main.tex` until the user unmasks them.

---

## 3 ▪ LaTeX Style Enforcement (all macros defined in *style.tex*)

| Feature              | How to Use                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Callouts**         | `\begin{callout}[important] … \end{callout}`  <br>Types: `important`, `tip`, `trivia`, `warning` – icons auto-load. |
| **Excel Tables**     | `\begin{exceltable}[<col width spec>] … \end{exceltable}` <br>Bold headers, ≤ 6 columns; split if wider.            |
| **Skill Boxes**      | `\begin{skillbox}{Skill Name} … \end{skillbox}` for formulas/macros.                                                |
| **Unit Entry Event** | Place at top of `01_intro.tex`: `\unitEntryEvent{...}`                                                              |
| **Images**           | Store under `images/unitXX/`; include with `\img{filename}{Caption}` macro.                                         |
| **Index & Glossary** | First occurrence → `\index{term}` and/or `\gls{term}`.                                                              |

*Do **not** change the global preamble. New packages go into *style.tex* only after explicit user approval.*

---

## 4 ▪ Production Guardrails

1. **Overflow**: Resolve any `Overfull \hbox` > 10 pt (adjust column widths or line breaks).
2. **Graphics**: Use `\graphicspath{{images/}}` already set in *style.tex*; no absolute paths.
3. **Logs**: If LaTeX error surfaces in compile feedback, fix before returning code.
4. **Code Blocks**: Deliver all file content in \`\`\`latex fenced blocks.

---

## 5 ▪ Workflow & Tool Hooks

| Need                    | Instruction                                                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Canvas vs. Chat**     | Use `canmore.create_textdoc` when the user explicitly wants a persistent file. Otherwise return inline LaTeX.   |
| **Revision Checklist**  | After inserting new section, add `%TODO:` comments listing equations, figures, or practice sets still required. |
| **Commit-style Header** | Top of every code snippet: `% Update: <one-line summary>`                                                       |
| **Automation Offers**   | Proactively suggest Edpuzzle sets, Excel templates, peer rubrics, etc., when they save teacher time.            |

---

## 6 ▪ Assistant Response Pattern

1. **Structured first**: tables, bullet lists, rubrics before narrative.
2. **Clarity > brevity**: concise but never cryptic.
3. **Evidence-aware**: cite research (Hattie, Marzano, PBLWorks) where helpful.
4. **AI usage guidance**: remind students to attribute AI research but not outsource raw computations.
5. **Bilingual option**: offer Chinese translation for outward-facing docs when appropriate.

---

## 7 ▪ Peer-Review & Reflection

*Embed peer-critique checkpoints, structured revision forms, and reflection prompts in each unit and capstone milestone.*
Generate rubrics aligned to **PBLWorks Gold-Standard**: authenticity, sustained inquiry, public product, critique & revision, student voice & choice.

---

*By following this playbook, the assistant simultaneously advances curriculum design **and** produces a ready-to-compile textbook that matches the repository layout and the friendly “Excel-for-Dummies” styling system defined in **style.tex**.*

### Exercises

Use a consistent format with the `:::` syntax for exercises:

```markdown
::: exercise #1
Calculate the accounting equation for the following scenario...
:::
```

### Solutions

Use a consistent format with the `:::` syntax for solutions:

```markdown
::: solution #1
Assets = Liabilities + Equity
$100,000 = $60,000 + $40,000
:::
```

### Key Concepts

Use a consistent format with the `:::` syntax for key concepts:

```markdown
::: key-concept
The accounting equation (Assets = Liabilities + Equity) is the foundation of double-entry bookkeeping.
:::
```

## YAML Frontmatter

Each Markdown file should include YAML frontmatter to provide metadata. The frontmatter should be placed at the beginning of the file, enclosed by `---` lines.

### Required Fields

- `title`: The title of the document
- `type`: The type of document (unit, exercise, solution, key-concepts, etc.)

### Optional Fields

- `unit`: The unit number (for semester 1)
- `semester`: The semester number (1 or 2)
- `week`: The week number (for semester 2)
- `learning_objectives`: A list of learning objectives
- `excel_skills`: A list of Excel skills
- `prerequisites`: A list of prerequisites
- `related_units`: A list of related units
- `difficulty`: The difficulty level for exercises (easy, medium, hard)
- `estimated_time`: The estimated time to complete an exercise

Example:

```yaml
---
title: "Smart Ledger Launch"
unit: 1
semester: 1
week: null
type: "unit"
learning_objectives:
  - "Design a self-auditing ledger"
  - "Apply the accounting equation"
  - "Create journal entries"
excel_skills:
  - "SUMIF"
  - "Conditional formatting"
  - "Running balances"
prerequisites:
  - "Basic Excel familiarity"
related_units:
  - "unit2-month-end-wizard"
---
```

## Building the Textbook

The textbook can be built using the Makefile in the root directory. The Makefile provides commands for building PDF and HTML versions of the textbook.

### Build Commands

- `make all`: Build both PDF and HTML versions
- `make pdf`: Build only the PDF version
- `make html`: Build only the HTML version
- `make clean`: Clean the build directory

### Build Process

The build process:

1. Validates all Markdown files against linting rules
2. Processes images and other assets
3. Generates the table of contents
4. Runs Pandoc to create PDF and HTML outputs
5. Organizes the outputs in the build directory

## Linting Rules

The linting rules in the `.roo/lint/` directory ensure consistent formatting across the textbook. The rules check for:

- Consistent heading structure
- Proper formatting of exercises and solutions
- Valid YAML frontmatter
- Consistent Markdown formatting

To lint the Markdown files, run:

```bash
make lint
```

## Pandoc Configuration

The Pandoc configuration files in the `.roo/pandoc/` directory control how Pandoc converts the Markdown files to PDF and HTML. The configuration includes:

- Templates for PDF and HTML outputs
- Filters for processing exercises, solutions, and Excel formulas
- Metadata for the textbook
- Styling options for PDF and HTML outputs

## Adding New Content

When adding new content to the textbook, follow these steps:

1. Determine the appropriate location for the content (semester, unit, etc.)
2. Use the appropriate template from the `.roo/templates/` directory
3. Follow the Markdown styling conventions
4. Include proper YAML frontmatter
5. Build the textbook to verify the formatting

## Troubleshooting

If you encounter issues with the build process:

1. Check the linting output for formatting errors
2. Verify that your YAML frontmatter is valid
3. Ensure that your Markdown follows the styling conventions
4. Check the Pandoc error output for conversion issues
5. Verify that all required files are in the correct locations

## Getting Help

If you need additional help:

1. Refer to the documentation in the `.roo/` directory
2. Check the Pandoc documentation for conversion issues
3. Review the Markdown styling guide for formatting questions
4. Contact the textbook maintainer for assistance