# Book Configuration

This file describes the configuration for the Business Math & Finance textbook. In a real implementation, this would be a YAML file named `book.yaml`, but since we're limited to creating Markdown files in architect mode, this file serves as documentation for what the YAML file should contain.

## Book Configuration (book.yaml)

```yaml
# Book Configuration for Business Math & Finance Textbook

# Book Metadata
title: "Business Math & Finance: Applied Accounting with Excel"
subtitle: "A Project-Based Approach for Grade 12"
author: "Your Name"
date: "2025"
language: "en-US"
publisher: "Your Publisher"
isbn: "XXX-X-XXXX-XXXX-X"
version: "1.0.0"

# Build Configuration
output_formats:
  - pdf
  - html
build_directory: "build"
assets_directory: "assets"

# Content Structure
frontmatter:
  - "frontmatter/title.md"
  - "frontmatter/copyright.md"
  - "frontmatter/preface.md"
  - "frontmatter/acknowledgments.md"
  - "frontmatter/toc.md"
  - "frontmatter/introduction.md"

semester1:
  - unit: "unit1-smart-ledger"
    title: "Smart Ledger Launch"
    files:
      - "semester1/unit1-smart-ledger/index.md"
      - "semester1/unit1-smart-ledger/objectives.md"
      - "semester1/unit1-smart-ledger/key-concepts.md"
      - "semester1/unit1-smart-ledger/examples/*.md"
      - "semester1/unit1-smart-ledger/exercises/*.md"
  - unit: "unit2-month-end-wizard"
    title: "Month-End Wizard"
    files:
      - "semester1/unit2-month-end-wizard/index.md"
      - "semester1/unit2-month-end-wizard/objectives.md"
      - "semester1/unit2-month-end-wizard/key-concepts.md"
      - "semester1/unit2-month-end-wizard/examples/*.md"
      - "semester1/unit2-month-end-wizard/exercises/*.md"
  # Additional units would be listed here...

semester2:
  - week: "week01-concept-proposal"
    title: "Concept Proposal & Team Roles"
    files:
      - "semester2/week01-concept-proposal/index.md"
      - "semester2/week01-concept-proposal/objectives.md"
      - "semester2/week01-concept-proposal/key-concepts.md"
      - "semester2/week01-concept-proposal/examples/*.md"
      - "semester2/week01-concept-proposal/exercises/*.md"
  - week: "week02-market-research"
    title: "Market Research"
    files:
      - "semester2/week02-market-research/index.md"
      - "semester2/week02-market-research/objectives.md"
      - "semester2/week02-market-research/key-concepts.md"
      - "semester2/week02-market-research/examples/*.md"
      - "semester2/week02-market-research/exercises/*.md"
  # Additional weeks would be listed here...

appendices:
  - appendix: "excel-reference"
    title: "Excel Function Reference"
    files:
      - "appendices/excel-reference/*.md"
  - appendix: "accounting-principles"
    title: "Accounting Principles"
    files:
      - "appendices/accounting-principles/*.md"
  - appendix: "solutions"
    title: "Exercise Solutions"
    files:
      - "appendices/solutions/*.md"
  - appendix: "glossary"
    title: "Glossary"
    files:
      - "appendices/glossary/*.md"

# Styling Configuration
pdf_styling:
  font_size: 11pt
  paper_size: letter
  margin: 1in
  header: true
  footer: true
  toc: true
  toc_depth: 3
  numbering: true
  links: true
  code_highlighting: true

html_styling:
  theme: "default"
  toc: true
  toc_depth: 3
  numbering: true
  links: true
  code_highlighting: true
  responsive: true
  self_contained: true

# Pandoc Configuration
pandoc:
  pdf_config: ".roo/pandoc/pdf-config.yaml"
  html_config: ".roo/pandoc/html-config.yaml"
  metadata: ".roo/pandoc/metadata.yaml"
  filters:
    - ".roo/pandoc/filters/number-exercises.lua"
    - ".roo/pandoc/filters/collapsible-solutions.lua"
    - ".roo/pandoc/filters/excel-syntax.lua"
```

## Usage

In a real implementation, this YAML file would be used by the build process to:

1. Determine the structure of the book
2. Specify which files to include in the build
3. Configure the styling for PDF and HTML outputs
4. Set up Pandoc configuration options

The build script would read this file and use it to generate the appropriate Pandoc commands and configuration files.