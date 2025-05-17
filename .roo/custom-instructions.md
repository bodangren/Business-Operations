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