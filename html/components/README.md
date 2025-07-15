# Component Library

This directory contains modular HTML templates, layouts, and widgets for the Math for Business Operations interactive textbook.

## Directory Structure

```
components/
├── templates/          # Section-specific HTML templates
│   ├── intro.html      # Introduction section template
│   ├── concepts.html   # Concepts section template
│   ├── excel-model.html # Excel modeling section template
│   ├── examples.html   # Examples section template
│   ├── exercises.html  # Exercises section template
│   └── summary.html    # Summary section template
├── layouts/            # Page layout templates
│   ├── unit-index.html # Unit index page layout
│   ├── section.html    # Individual section layout
│   └── print.html      # Print-friendly layout
└── widgets/            # Reusable interactive widgets
    ├── callout-boxes/  # Alert, tip, warning, example widgets
    ├── navigation/     # Breadcrumb, next/prev widgets
    ├── progress/       # Progress tracking widgets
    └── gamification/   # Achievement, points widgets
```

## Template Variables

All templates use placeholder variables that can be automatically replaced during content generation:

- `{{UNIT_NUMBER}}` - Unit number (01, 02, etc.)
- `{{UNIT_TITLE}}` - Unit title
- `{{SECTION_TITLE}}` - Section title
- `{{CONTENT}}` - Main content area
- `{{SARAH_CONTEXT}}` - Sarah's business context for the unit
- `{{LEARNING_OBJECTIVES}}` - Unit learning objectives
- `{{INTERACTIVE_COMPONENTS}}` - Component integration code
- `{{GAMIFICATION_DATA}}` - Gamification settings
- `{{PRINT_VERSION}}` - Print-friendly alternatives

## Usage

Templates are designed for automated content generation using the .claude/commands/ system. Each template includes:

1. Semantic HTML structure
2. Responsive CSS classes
3. Interactive component placeholders
4. Accessibility attributes
5. Print-friendly alternatives
6. SEO meta tags

## Integration

Components automatically integrate with:
- Gamification system (points, achievements)
- Progress tracking
- Responsive design
- Print generation
- Accessibility features
- Sarah's narrative continuity