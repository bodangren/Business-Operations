---
title: "Build Testing Guide"
type: "guide"
---

# Build Testing Guide

This guide provides step-by-step instructions for testing the build process for the Business Math & Finance textbook. Testing the build process is essential before you start developing the textbook content to ensure that Pandoc correctly converts your Markdown files to PDF and HTML outputs.

## Prerequisites

Before testing the build process, ensure you have the following installed:

1. **Pandoc**: Version 2.11 or later (https://pandoc.org/installing.html)
2. **LaTeX**: A full LaTeX distribution like TeX Live or MiKTeX
3. **Make**: For running the Makefile commands
4. **Required Fonts**: DejaVu Serif, DejaVu Sans, DejaVu Sans Mono (or configure alternatives)
5. **Required LaTeX Packages**: xcolor, tcolorbox, fontspec, booktabs, etc.

## Step 1: Create a Test Markdown File

Create a file named `test.md` in the root directory with the following content:

```markdown
---
title: "Build Test"
author: "Your Name"
date: "2025"
---

# Build Test

This is a test file to verify that the build process is working correctly.

## Text Formatting

This is **bold text**, and this is *italic text*. This is `inline code`.

## Lists

Unordered list:

- Item 1
- Item 2
- Item 3

Ordered list:

1. First item
2. Second item
3. Third item

## Code Blocks

```python
def hello_world():
    print("Hello, world!")
```

## Tables

| Name | Value | Description |
|------|-------|-------------|
| Item 1 | 100 | Description of item 1 |
| Item 2 | 200 | Description of item 2 |
| Item 3 | 300 | Description of item 3 |

## Math Equations

Inline equation: $E = mc^2$

Display equation:

$$
\frac{d}{dx}e^x = e^x
$$

## Excel Table

<div class="excel-formula-bar">=SUM(C2:C4)</div>

<table class="excel-table">
  <thead>
    <tr>
      <th></th>
      <th class="col-header">A</th>
      <th class="col-header">B</th>
      <th class="col-header">C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="row-header">1</th>
      <td class="text">Item</td>
      <td class="text">Quantity</td>
      <td class="text">Price</td>
    </tr>
    <tr>
      <th class="row-header">2</th>
      <td class="text">Widget</td>
      <td class="number">5</td>
      <td class="number">10.00</td>
    </tr>
    <tr>
      <th class="row-header">3</th>
      <td class="text">Gadget</td>
      <td class="number">3</td>
      <td class="number">15.00</td>
    </tr>
    <tr>
      <th class="row-header">4</th>
      <td class="text">Doohickey</td>
      <td class="number">2</td>
      <td class="number">20.00</td>
    </tr>
    <tr>
      <th class="row-header">5</th>
      <td class="text">Total</td>
      <td class="formula">=SUM(B2:B4)</td>
      <td class="formula">=SUM(C2:C4)</td>
    </tr>
  </tbody>
</table>

## Special Elements

::: key-concept
This is a key concept box.
:::

::: exercise #1
This is an exercise.
:::

::: solution #1
This is a solution.
:::
```

## Step 2: Create Test Configuration Files

### HTML Configuration

Create a file named `test-html-config.yaml` in the root directory:

```yaml
from: markdown
to: html5
standalone: true
self-contained: true
toc: true
toc-depth: 3
number-sections: true
highlight-style: tango
css:
  - .roo/styles/html/main.css
  - .roo/styles/html/code-highlighting.css
  - .roo/styles/html/excel.css
```

### PDF Configuration

Create a file named `test-pdf-config.yaml` in the root directory:

```yaml
from: markdown
to: pdf
pdf-engine: xelatex
variables:
  documentclass: article
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
include-in-header:
  - .roo/styles/pdf/main.tex
  - .roo/styles/pdf/excel.tex
```

## Step 3: Create Minimal Style Files

### HTML Styles

Create a file named `main.css` in the `.roo/styles/html/` directory:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3, h4, h5, h6 {
  color: #333;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

h1 {
  font-size: 2.5em;
  border-bottom: 2px solid #007bff;
  padding-bottom: 0.2em;
}

h2 {
  font-size: 2em;
  border-bottom: 1px solid #6c757d;
  padding-bottom: 0.1em;
}

/* Key concept box */
.key-concept {
  background-color: rgba(23, 162, 184, 0.1);
  border-left: 5px solid #17a2b8;
  padding: 15px;
  margin: 20px 0;
  border-radius: 3px;
}

.key-concept::before {
  content: "Key Concept";
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: #17a2b8;
}

/* Exercise box */
.exercise {
  background-color: rgba(0, 123, 255, 0.1);
  border-left: 5px solid #007bff;
  padding: 15px;
  margin: 20px 0;
  border-radius: 3px;
}

.exercise::before {
  content: "Exercise";
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: #007bff;
}

/* Solution box */
.solution {
  background-color: rgba(40, 167, 69, 0.1);
  border-left: 5px solid #28a745;
  padding: 15px;
  margin: 20px 0;
  border-radius: 3px;
}

.solution::before {
  content: "Solution";
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: #28a745;
}
```

Create a file named `code-highlighting.css` in the `.roo/styles/html/` directory:

```css
pre {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px;
  overflow-x: auto;
}

code {
  font-family: 'Consolas', 'Monaco', 'Andale Mono', monospace;
  font-size: 0.9em;
}

.sourceCode {
  background-color: #f8f8f8;
}
```

Create a file named `excel.css` in the `.roo/styles/html/` directory with the content from the Excel Style Guide.

### PDF Styles

Create a file named `main.tex` in the `.roo/styles/pdf/` directory:

```latex
% Main LaTeX style definitions
\usepackage{xcolor}
\usepackage{tcolorbox}
\usepackage{fontspec}
\usepackage{titlesec}

% Define colors
\definecolor{primary}{RGB}{0, 123, 255}
\definecolor{secondary}{RGB}{108, 117, 125}
\definecolor{success}{RGB}{40, 167, 69}
\definecolor{info}{RGB}{23, 162, 184}
\definecolor{warning}{RGB}{255, 193, 7}
\definecolor{danger}{RGB}{220, 53, 69}

% Define key concept box
\newtcolorbox{keyconcept}{
  colback=info!10,
  colframe=info,
  fonttitle=\bfseries,
  title=Key Concept
}

% Define exercise box
\newtcolorbox{exercise}{
  colback=primary!10,
  colframe=primary,
  fonttitle=\bfseries,
  title=Exercise
}

% Define solution box
\newtcolorbox{solution}{
  colback=success!10,
  colframe=success,
  fonttitle=\bfseries,
  title=Solution
}
```

Create a file named `excel.tex` in the `.roo/styles/pdf/` directory with the content from the Excel Style Guide.

## Step 4: Create Pandoc Filters

Create a directory named `filters` in the `.roo/pandoc/` directory.

Create a file named `special-blocks.lua` in the `.roo/pandoc/filters/` directory:

```lua
-- special-blocks.lua: A Pandoc filter for special blocks

function Div(div)
  -- Process key concept blocks
  if div.classes[1] == "key-concept" then
    if FORMAT:match "html" then
      -- Keep as is for HTML
      return div
    elseif FORMAT:match "latex" then
      -- Convert to LaTeX environment
      local content = pandoc.utils.stringify(div.content)
      return pandoc.RawBlock("latex", "\\begin{keyconcept}\n" .. content .. "\n\\end{keyconcept}")
    else
      -- For other formats, keep as is
      return div
    end
  end
  
  -- Process exercise blocks
  if div.classes[1] == "exercise" then
    if FORMAT:match "html" then
      -- Keep as is for HTML
      return div
    elseif FORMAT:match "latex" then
      -- Convert to LaTeX environment
      local content = pandoc.utils.stringify(div.content)
      return pandoc.RawBlock("latex", "\\begin{exercise}\n" .. content .. "\n\\end{exercise}")
    else
      -- For other formats, keep as is
      return div
    end
  end
  
  -- Process solution blocks
  if div.classes[1] == "solution" then
    if FORMAT:match "html" then
      -- Keep as is for HTML
      return div
    elseif FORMAT:match "latex" then
      -- Convert to LaTeX environment
      local content = pandoc.utils.stringify(div.content)
      return pandoc.RawBlock("latex", "\\begin{solution}\n" .. content .. "\n\\end{solution}")
    else
      -- For other formats, keep as is
      return div
    end
  end
  
  return div
end

return {
  { Div = Div }
}
```

Update the configuration files to include the filter:

```yaml
# In test-html-config.yaml and test-pdf-config.yaml
filters:
  - .roo/pandoc/filters/special-blocks.lua
```

## Step 5: Run the Test Build

Run the following commands to test the build process:

```bash
# Create build directories
mkdir -p build/pdf build/html

# Build HTML version
pandoc --defaults=test-html-config.yaml --output=build/html/test.html test.md

# Build PDF version
pandoc --defaults=test-pdf-config.yaml --output=build/pdf/test.pdf test.md
```

## Step 6: Verify the Output

1. Open `build/html/test.html` in a web browser
2. Open `build/pdf/test.pdf` in a PDF viewer

Check that:
- The table of contents is generated correctly
- Text formatting (bold, italic, code) is displayed correctly
- Lists (ordered and unordered) are formatted correctly
- Code blocks have syntax highlighting
- Tables are displayed correctly
- Math equations are rendered correctly
- Excel tables are styled to look like Excel
- Special elements (key concept, exercise, solution) are formatted correctly

## Step 7: Troubleshooting

If you encounter issues with the build process:

### HTML Output Issues

- Check that the CSS files are correctly referenced in the HTML configuration
- Verify that the HTML output includes the CSS styles
- Check for any errors in the CSS files
- Ensure that the special blocks are correctly formatted in the HTML output

### PDF Output Issues

- Check that the LaTeX files are correctly referenced in the PDF configuration
- Verify that the LaTeX packages are installed
- Check for any errors in the LaTeX files
- Ensure that the special blocks are correctly converted to LaTeX environments

### Pandoc Filter Issues

- Check that the Lua filter is correctly referenced in the configuration files
- Verify that the Lua filter is correctly processing the special blocks
- Check for any errors in the Lua filter

## Step 8: Create a Test Makefile

Create a file named `test-makefile` in the root directory:

```makefile
# Test Makefile for the Business Math & Finance textbook

# Variables
PROJECT_ROOT := $(shell pwd)
BUILD_DIR := $(PROJECT_ROOT)/build
PDF_DIR := $(BUILD_DIR)/pdf
HTML_DIR := $(BUILD_DIR)/html

# Phony targets
.PHONY: all test-html test-pdf clean

# Default target
all: test-html test-pdf

# Build HTML test
test-html:
	@echo "Building HTML test..."
	@mkdir -p $(HTML_DIR)
	@pandoc --defaults=test-html-config.yaml \
		--output=$(HTML_DIR)/test.html \
		test.md

# Build PDF test
test-pdf:
	@echo "Building PDF test..."
	@mkdir -p $(PDF_DIR)
	@pandoc --defaults=test-pdf-config.yaml \
		--output=$(PDF_DIR)/test.pdf \
		test.md

# Clean build directory
clean:
	@echo "Cleaning build directory..."
	@rm -rf $(BUILD_DIR)
```

Run the test Makefile:

```bash
make -f test-makefile all
```

## Conclusion

Once you have successfully tested the build process and verified that the output meets your requirements, you can proceed with developing the textbook content. The test files and configuration can serve as a reference for the full implementation.

Remember to update the actual configuration files in the `.roo/pandoc/` directory based on your test results before building the complete textbook.