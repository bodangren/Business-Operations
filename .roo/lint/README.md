# Linting Rules

This directory contains linting rules to enforce consistent formatting across the textbook content.

## Files

- `markdownlint.json`: Markdown linting rules
- `heading-rules.js`: Rules for heading structure
- `exercise-rules.js`: Rules for exercise formatting
- `yaml-schema.json`: Schema for YAML frontmatter

## Markdown Linting Rules

The `markdownlint.json` file should include rules for consistent Markdown formatting:

```json
{
  "default": true,
  "MD001": true,                  // Heading levels should only increment by one level at a time
  "MD003": { "style": "atx" },    // Heading style should be ATX
  "MD004": { "style": "dash" },   // Unordered list style should be dash
  "MD007": { "indent": 2 },       // Unordered list indentation should be 2 spaces
  "MD012": false,                 // Allow multiple consecutive blank lines
  "MD013": false,                 // Line length
  "MD022": true,                  // Headings should be surrounded by blank lines
  "MD024": false,                 // Allow multiple headings with the same content
  "MD025": true,                  // Single title/h1 per file
  "MD026": { "punctuation": ".,;:!" }, // Trailing punctuation in heading
  "MD029": { "style": "ordered" }, // Ordered list item prefix
  "MD031": true,                  // Blank line around fenced code blocks
  "MD032": true,                  // Blank line around lists
  "MD033": false,                 // Allow inline HTML
  "MD034": true,                  // No bare URLs
  "MD035": { "style": "---" },    // Horizontal rule style
  "MD036": false,                 // Emphasis used instead of heading
  "MD037": true,                  // Spaces inside emphasis markers
  "MD038": true,                  // Spaces inside code span elements
  "MD039": true,                  // Spaces inside link text
  "MD040": true,                  // Fenced code blocks should have a language specified
  "MD041": false,                 // First line in file should be a top level heading
  "MD042": true,                  // No empty links
  "MD043": false,                 // Required heading structure
  "MD044": false,                 // Proper names should have the correct capitalization
  "MD045": true,                  // Images should have alternate text
  "MD046": { "style": "fenced" }, // Code block style
  "MD047": true,                  // Files should end with a single newline character
  "MD048": { "style": "backtick" } // Code fence style
}
```

## Heading Rules

The `heading-rules.js` file should enforce consistent heading structure:

- Each file should have a single H1 heading
- Heading levels should only increment by one level at a time
- Headings should follow the structure defined in the templates

## Exercise Rules

The `exercise-rules.js` file should enforce consistent exercise formatting:

- Exercises should use the `:::` syntax
- Exercises should be numbered sequentially
- Exercises should include instructions and requirements

## YAML Schema

The `yaml-schema.json` file should define the schema for YAML frontmatter:

```json
{
  "type": "object",
  "required": ["title", "type"],
  "properties": {
    "title": {
      "type": "string",
      "description": "The title of the document"
    },
    "unit": {
      "type": "integer",
      "description": "The unit number"
    },
    "semester": {
      "type": "integer",
      "description": "The semester number"
    },
    "week": {
      "type": ["integer", "null"],
      "description": "The week number (for semester 2)"
    },
    "type": {
      "type": "string",
      "enum": ["unit", "exercise", "solution", "case-study", "walkthrough"],
      "description": "The type of document"
    },
    "learning_objectives": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Learning objectives for the document"
    },
    "excel_skills": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Excel skills covered in the document"
    },
    "prerequisites": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Prerequisites for the document"
    },
    "related_units": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Related units"
    },
    "difficulty": {
      "type": "string",
      "enum": ["easy", "medium", "hard"],
      "description": "Difficulty level for exercises"
    },
    "estimated_time": {
      "type": "string",
      "description": "Estimated time to complete"
    }
  }
}