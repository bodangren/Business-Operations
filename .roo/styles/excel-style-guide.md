---
title: "Excel Style Guide"
type: "style-guide"
---

# Excel Style Guide

This document provides guidance on creating styles that mimic the Excel interface for both HTML and PDF outputs. These styles allow you to display Excel-like tables and formulas in the textbook without taking screenshots.

## HTML Excel Style

Create a file named `excel.css` in the `.roo/styles/html/` directory with the following content:

```css
/* Excel-like table styling for HTML output */

.excel-table {
  font-family: 'Calibri', sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

/* Header row styling */
.excel-table thead tr {
  background-color: #f0f0f0;
  border-bottom: 2px solid #d0d0d0;
}

.excel-table th {
  padding: 8px;
  text-align: center;
  font-weight: bold;
  color: #444;
  border: 1px solid #d0d0d0;
}

/* Column headers (A, B, C, etc.) */
.excel-table th.col-header {
  background-color: #e8e8e8;
  min-width: 80px;
}

/* Row headers (1, 2, 3, etc.) */
.excel-table th.row-header {
  background-color: #e8e8e8;
  text-align: center;
  width: 40px;
}

/* Cell styling */
.excel-table td {
  padding: 6px 8px;
  border: 1px solid #d0d0d0;
  height: 24px;
}

/* Number cells (right-aligned) */
.excel-table td.number {
  text-align: right;
}

/* Text cells (left-aligned) */
.excel-table td.text {
  text-align: left;
}

/* Formula cells (for displaying formulas) */
.excel-table td.formula {
  font-family: 'Consolas', monospace;
  background-color: #f8f8f8;
  color: #0070c0;
}

/* Result cells (for displaying formula results) */
.excel-table td.result {
  background-color: #f9f9f9;
  color: #444;
}

/* Error cells */
.excel-table td.error {
  background-color: #fff0f0;
  color: #ff0000;
}

/* Selected cell */
.excel-table td.selected {
  outline: 2px solid #1a73e8;
  outline-offset: -2px;
  background-color: #e8f0fe;
}

/* Formula bar */
.excel-formula-bar {
  font-family: 'Consolas', monospace;
  padding: 8px;
  margin-bottom: 5px;
  background-color: #f5f5f5;
  border: 1px solid #d0d0d0;
  color: #0070c0;
}

/* Excel sheet tabs */
.excel-tabs {
  display: flex;
  margin-top: 5px;
}

.excel-tab {
  padding: 5px 15px;
  background-color: #e8e8e8;
  border: 1px solid #d0d0d0;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  margin-right: 2px;
  font-size: 0.9em;
}

.excel-tab.active {
  background-color: #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: -1px;
  position: relative;
  z-index: 1;
}

/* Conditional formatting */
.excel-table td.conditional-red {
  background-color: #ffc7ce;
  color: #9c0006;
}

.excel-table td.conditional-green {
  background-color: #c6efce;
  color: #006100;
}

.excel-table td.conditional-yellow {
  background-color: #ffeb9c;
  color: #9c6500;
}
```

## LaTeX Excel Style

Create a file named `excel.tex` in the `.roo/styles/pdf/` directory with the following content:

```latex
% Excel-like table styling for PDF output

\usepackage{array}
\usepackage{colortbl}
\usepackage{xcolor}
\usepackage{tcolorbox}
\usepackage{fontspec}
\usepackage{booktabs}

% Define Excel-like colors
\definecolor{excelHeaderBg}{RGB}{232, 232, 232}
\definecolor{excelBorder}{RGB}{208, 208, 208}
\definecolor{excelFormula}{RGB}{0, 112, 192}
\definecolor{excelSelected}{RGB}{232, 240, 254}
\definecolor{excelError}{RGB}{255, 0, 0}
\definecolor{excelCondRed}{RGB}{255, 199, 206}
\definecolor{excelCondGreen}{RGB}{198, 239, 206}
\definecolor{excelCondYellow}{RGB}{255, 235, 156}

% Excel-like table environment
\newenvironment{exceltable}[1][]{%
  \begin{center}
  \setlength{\arrayrulewidth}{0.5pt}
  \arrayrulecolor{excelBorder}
  \begin{tabular}{#1}
}{%
  \end{tabular}
  \end{center}
}

% Excel column header (A, B, C, etc.)
\newcommand{\excelcolhead}[1]{%
  \cellcolor{excelHeaderBg}\textbf{#1}%
}

% Excel row header (1, 2, 3, etc.)
\newcommand{\excelrowhead}[1]{%
  \cellcolor{excelHeaderBg}\textbf{#1}%
}

% Excel formula cell
\newcommand{\excelformula}[1]{%
  \texttt{\textcolor{excelFormula}{#1}}%
}

% Excel selected cell
\newcommand{\excelselected}[1]{%
  \cellcolor{excelSelected}#1%
}

% Excel error cell
\newcommand{\excelerror}[1]{%
  \textcolor{excelError}{#1}%
}

% Excel conditional formatting cells
\newcommand{\excelcondred}[1]{%
  \cellcolor{excelCondRed}\textcolor{RGB}{156, 0, 6}{#1}%
}

\newcommand{\excelcondgreen}[1]{%
  \cellcolor{excelCondGreen}\textcolor{RGB}{0, 97, 0}{#1}%
}

\newcommand{\excelcondyellow}[1]{%
  \cellcolor{excelCondYellow}\textcolor{RGB}{156, 101, 0}{#1}%
}

% Excel formula bar
\newcommand{\excelformulabar}[1]{%
  \begin{tcolorbox}[
    colback=gray!10,
    colframe=excelBorder,
    arc=0pt,
    boxrule=0.5pt
  ]
  \texttt{\textcolor{excelFormula}{#1}}
  \end{tcolorbox}
}
```

## Using Excel Styles in Markdown

### HTML Example

To create an Excel-like table in your Markdown files for HTML output:

```html
<div class="excel-formula-bar">=SUMIF(B2:B10,"Expenses",C2:C10)</div>

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
      <td class="text">Date</td>
      <td class="text">Category</td>
      <td class="text">Amount</td>
    </tr>
    <tr>
      <th class="row-header">2</th>
      <td class="text">1/1/2025</td>
      <td class="text">Income</td>
      <td class="number">1000.00</td>
    </tr>
    <tr>
      <th class="row-header">3</th>
      <td class="text">1/5/2025</td>
      <td class="text">Expenses</td>
      <td class="number selected">250.00</td>
    </tr>
    <tr>
      <th class="row-header">4</th>
      <td class="text">1/10/2025</td>
      <td class="text">Expenses</td>
      <td class="number conditional-red">500.00</td>
    </tr>
    <tr>
      <th class="row-header">5</th>
      <td class="formula">=TODAY()</td>
      <td class="text">Total</td>
      <td class="formula">=SUM(C2:C4)</td>
    </tr>
  </tbody>
</table>

<div class="excel-tabs">
  <div class="excel-tab active">Sheet1</div>
  <div class="excel-tab">Sheet2</div>
  <div class="excel-tab">Sheet3</div>
</div>
```

### LaTeX Example

To create an Excel-like table in your Markdown files for PDF output:

```latex
\excelformulabar{=SUMIF(B2:B10,"Expenses",C2:C10)}

\begin{exceltable}{|c|c|c|c|}
\hline
& \excelcolhead{A} & \excelcolhead{B} & \excelcolhead{C} \\
\hline
\excelrowhead{1} & Date & Category & Amount \\
\hline
\excelrowhead{2} & 1/1/2025 & Income & 1000.00 \\
\hline
\excelrowhead{3} & 1/5/2025 & Expenses & \excelselected{250.00} \\
\hline
\excelrowhead{4} & 1/10/2025 & Expenses & \excelcondred{500.00} \\
\hline
\excelrowhead{5} & \excelformula{=TODAY()} & Total & \excelformula{=SUM(C2:C4)} \\
\hline
\end{exceltable}
```

## Pandoc Integration

To use these styles with Pandoc, you need to:

1. Include the CSS file in your HTML output:
   ```yaml
   # In .roo/pandoc/html-config.yaml
   css:
     - .roo/styles/html/excel.css
   ```

2. Include the LaTeX file in your PDF output:
   ```yaml
   # In .roo/pandoc/pdf-config.yaml
   include-in-header:
     - .roo/styles/pdf/excel.tex
   ```

## Custom Pandoc Filter for Excel Tables

For more advanced Excel table rendering, you can create a custom Pandoc filter that converts a special Markdown syntax to the appropriate HTML or LaTeX output.

Create a file named `excel-tables.lua` in the `.roo/pandoc/filters/` directory:

```lua
-- excel-tables.lua: A Pandoc filter for Excel-like tables

function CodeBlock(block)
  -- Check if the code block is an Excel table
  if block.classes[1] == "excel" then
    -- Parse the Excel table definition
    local content = block.text
    
    if FORMAT:match "html" then
      -- Convert to HTML Excel table
      return pandoc.RawBlock("html", convertToHtmlExcel(content))
    elseif FORMAT:match "latex" then
      -- Convert to LaTeX Excel table
      return pandoc.RawBlock("latex", convertToLatexExcel(content))
    else
      -- For other formats, keep as is
      return block
    end
  end
  
  return block
end

-- Function to convert Excel table definition to HTML
function convertToHtmlExcel(content)
  -- Implementation details omitted for brevity
  -- This would parse the content and generate the HTML table
  
  -- Placeholder implementation
  local html = "<div class='excel-table-container'>\n"
  -- Process content and generate HTML
  html = html .. "</div>"
  
  return html
end

-- Function to convert Excel table definition to LaTeX
function convertToLatexExcel(content)
  -- Implementation details omitted for brevity
  -- This would parse the content and generate the LaTeX table
  
  -- Placeholder implementation
  local latex = "\\begin{exceltable}\n"
  -- Process content and generate LaTeX
  latex = latex .. "\\end{exceltable}"
  
  return latex
end

return {
  { CodeBlock = CodeBlock }
}
```

Then, you would use this filter in your Pandoc configuration:

```yaml
# In .roo/pandoc/html-config.yaml and pdf-config.yaml
filters:
  - .roo/pandoc/filters/excel-tables.lua
```

And in your Markdown files, you would use:

````markdown
```excel
A1:Date B1:Category C1:Amount
A2:1/1/2025 B2:Income C2:1000.00
A3:1/5/2025 B3:Expenses C3:250.00
A4:1/10/2025 B4:Expenses C4:500.00
A5:=TODAY() B5:Total C5:=SUM(C2:C4)
```
````

## Testing the Build Process

To test the build process with these Excel styles:

1. Create a test Markdown file with Excel tables
2. Set up the CSS and LaTeX files as described above
3. Configure Pandoc to use these styles
4. Run the build process to generate PDF and HTML outputs
5. Verify that the Excel tables are rendered correctly

This approach allows you to display Excel-like tables and formulas in your textbook without taking screenshots, providing a more interactive and editable experience for both you and your readers.