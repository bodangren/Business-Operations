# Pandoc Configuration

This directory contains configuration files for Pandoc to generate PDF and HTML outputs from the Markdown content.

## Files

- `pdf-config.yaml`: Configuration for PDF output
- `html-config.yaml`: Configuration for HTML output
- `metadata.yaml`: Shared metadata for all outputs

## PDF Configuration

The PDF configuration should include:

```yaml
from: markdown
to: pdf
template: .roo/pandoc/templates/pdf-template.tex
filters:
  - .roo/pandoc/filters/number-exercises.lua
  - .roo/pandoc/filters/excel-syntax.lua
pdf-engine: xelatex
variables:
  documentclass: book
  classoption: oneside
  fontsize: 11pt
  mainfont: "DejaVu Serif"
  sansfont: "DejaVu Sans"
  monofont: "DejaVu Sans Mono"
  geometry:
    - margin=1in
toc: true
toc-depth: 3
number-sections: true
highlight-style: tango
include-in-header: .roo/styles/pdf/main.tex
```

## HTML Configuration

The HTML configuration should include:

```yaml
from: markdown
to: html5
template: .roo/pandoc/templates/html-template.html
filters:
  - .roo/pandoc/filters/number-exercises.lua
  - .roo/pandoc/filters/collapsible-solutions.lua
  - .roo/pandoc/filters/excel-syntax.lua
standalone: true
self-contained: true
toc: true
toc-depth: 3
number-sections: true
highlight-style: tango
css:
  - .roo/styles/html/main.css
  - .roo/styles/html/code-highlighting.css
  - .roo/styles/html/exercise-styles.css
```

## Filters

The following Lua filters should be created:

- `number-exercises.lua`: Numbers exercises sequentially
- `collapsible-solutions.lua`: Makes solutions collapsible in HTML output
- `excel-syntax.lua`: Provides syntax highlighting for Excel formulas

## Templates

The following templates should be created:

- `pdf-template.tex`: LaTeX template for PDF output
- `html-template.html`: HTML template for HTML output