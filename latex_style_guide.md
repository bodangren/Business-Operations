# LaTeX Custom Style Guide for "Math for Business Operations"

This guide documents the custom LaTeX commands and environments defined in `style.tex` for use in the textbook.

## 1. General Usage Notes
- When applicable, prefer using semantic environments (e.g., `\begin{Important}`) for callouts rather than manual formatting to ensure consistency.
- Refer to `style.tex` for the specific color definitions and `tcolorbox` settings if deeper customization is needed for a unique case (though modifying `style.tex` directly is preferred for global changes).

## 2. Callout Boxes and Themed Environments

These environments are created using `tcolorbox` and provide consistent styling for different types of informational blocks. All are designed to be `breakable` across pages.

### 2.1. `Important` Environment
- **Purpose:** For critical information that the reader must not miss.
- **Icon:** Information Circle (`\faInfoCircle`)
- **Usage:**
  ```latex
  \begin{Important}
    Always save a backup copy of your spreadsheet before making bulk changes.
  \end{Important}
  ```

### 2.2. `Tip` Environment
- **Purpose:** For helpful hints, shortcuts, or best practices.
- **Icon:** Lightbulb (`\faLightbulbO`)
- **Usage:**
  ```latex
  \begin{Tip}
    Press \texttt{Ctrl+;} in Excel to enter today’s date into a cell.
  \end{Tip}
  ```

### 2.3. `Trivia` Environment
- **Purpose:** For interesting, but not critical, side notes or fun facts.
- **Icon:** Question Circle (`\faQuestionCircleO`)
- **Usage:**
  ```latex
  \begin{Trivia}
    Excel was first released in 1985 for the Macintosh.
  \end{Trivia}
  ```

### 2.4. `Warning` Environment
- **Purpose:** For cautionary advice, potential pitfalls, or things to avoid.
- **Icon:** Exclamation Triangle (`\faExclamationTriangle`)
- **Usage:**
  ```latex
  \begin{Warning}
    Avoid circular references unless you explicitly enable iterative calculation.
  \end{Warning}
  ```

### 2.5. `Example` Environment
- **Purpose:** To showcase concrete examples of concepts or calculations.
- **Icon:** Check Circle (`\faCheckCircleO`)
- **Usage:**
  ```latex
  \begin{Example}
    To sum cells B2 through B10, enter \excelformula{=SUM(B2:B10)} in the formula bar.
  \end{Example}
  ```

### 2.6. `Definition` Environment
- **Purpose:** For formally defining key terms or concepts.
- **Icon:** Book (`\faBook`)
- **Usage:**
  ```latex
  \begin{Definition}
    A \KeyTerm{Balance Sheet} is a financial statement showing assets, liabilities, and equity at a point in time.
  \end{Definition}
  ```

### 2.7. `skillbox` Environment
- **Purpose:** A titled box designed to highlight "Key Knowledge & Skills" or similar distinct blocks of information. It features a light yellow background and a darker yellow frame/title bar.
- **Arguments:** Takes one optional argument for the title, enclosed in square brackets.
- **Usage:**
  ```latex
  \begin{skillbox}[Key Formulas]
    Content of the skill box, perhaps listing important formulas.
  \end{skillbox}

  % Or without a specific title (the title bar will still appear but be empty by default)
  \begin{skillbox}
    General skills discussed here.
  \end{skillbox}
  ```

### 2.8. `Replace` Environment
- **Purpose:** Used for "Alerts" or notes about content that might be replaced or needs special attention. It has a reddish background. (This environment is also used internally by the `\unitEntryEvent` command).
- **Icon:** Information Circle (`\faInfoCircle`)
- **Usage:**
  ```latex
  \begin{Replace}
    This section is a placeholder and will be updated with Q3 financial data.
  \end{Replace}
  ```

### 2.9. `FormulaBar` Environment
- **Purpose:** A simple box with a light gray background and monospaced blue font, designed for displaying Excel-like formulas. (This environment is also used internally by the `\excelformulabar` command).
- **Usage:**
  ```latex
  \begin{FormulaBar}
    =SUM(A1:A10)
  \end{FormulaBar}
  ```

## 3. Text Styling and Utility Commands

### 3.1. `\KeyTerm{term}`
- **Purpose:** To highlight a key term. It styles the term as bold sans-serif text and automatically adds it to the book's index via `\index{term}`.
- **Argument:** `{term}` - The term to be highlighted and indexed.
- **Usage:**
  ```latex
  An important concept in finance is \KeyTerm{Net Present Value}.
  ```

### 3.2. `\unitEntryEvent{text}`
- **Purpose:** Creates an "Alert" box (using the `Replace` environment styling) containing the provided text, prefixed with "Alert ".
- **Argument:** `{text}` - The text content of the alert.
- **Usage:**
  ```latex
  \unitEntryEvent{This unit assumes prior knowledge of basic algebra and spreadsheet functions.}
  ```

## 4. Excel-Style Table and Cell Formatting

These commands and environment are designed to mimic the appearance of Excel spreadsheets.

### 4.1. `exceltable` Environment
- **Purpose:** Wraps a standard LaTeX `tabular` environment. It centers the table and applies Excel-like border styles (`0.5pt` gray lines).
- **Usage:**
  ```latex
  \begin{exceltable}
    \begin{tabular}{|l|c|r|} % Your standard tabular column definition
      \hline
      \excelcolhead{Item} & \excelcolhead{Quantity} & \excelcolhead{Unit Price} \\
      \hline
      \excelrowhead{1} & Pens & \excelselected{50} & \$0.50 \\
      \excelrowhead{2} & Notebooks & 20 & \excelformula{=C2*1.5} \\
      \hline
    \end{tabular}
  \end{exceltable}
  ```

### 4.2. Cell Formatting Commands
These commands are intended for use *inside* a `tabular` environment (preferably one wrapped in `exceltable`).

- **`\excelcolhead{text}`:**
  - **Purpose:** Styles text for an Excel column header (gray background, bold text).
  - **Argument:** `{text}` - The header text.
  - **Usage:** `\excelcolhead{Sales Q1}`

- **`\excelrowhead{text}`:**
  - **Purpose:** Styles text for an Excel row header (gray background, bold text).
  - **Argument:** `{text}` - The header text.
  - **Usage:** `\excelrowhead{Product A}`

- **`\excelformula{formula_text}`:**
  - **Purpose:** Styles text as a blue, monospaced Excel formula.
  - **Argument:** `{formula_text}` - The formula string.
  - **Usage:** `\excelformula{=SUM(B2:B10)}`

- **`\excelselected{text}`:**
  - **Purpose:** Highlights text with a light blue background, simulating a selected Excel cell.
  - **Argument:** `{text}` - The cell content.
  - **Usage:** `\excelselected{1,234.56}`

- **`\excelerror{error_text}`:**
  - **Purpose:** Styles text in red, typically for representing Excel error messages.
  - **Argument:** `{error_text}` - The error message.
  - **Usage:** `\excelerror{#DIV/0!}`

- **`\excelcondred{text}`:**
  - **Purpose:** Applies a light red background to the cell content, for conditional formatting.
  - **Argument:** `{text}` - The cell content.
  - **Usage:** `\excelcondred{-100.00}`

- **`\excelcondgreen{text}`:**
  - **Purpose:** Applies a light green background to the cell content, for conditional formatting.
  - **Argument:** `{text}` - The cell content.
  - **Usage:** `\excelcondgreen{500.00}`

- **`\excelcondyellow{text}`:**
  - **Purpose:** Applies a light yellow background to the cell content, for conditional formatting.
  - **Argument:** `{text}` - The cell content.
  - **Usage:** `\excelcondyellow{50.00}`

### 4.3. `\excelformulabar{formula_text}`
- **Purpose:** Displays the given text within a `FormulaBar` environment, styled to look like an Excel formula bar input area.
- **Argument:** `{formula_text}` - The formula text to display.
- **Usage:**
  ```latex
  \excelformulabar{=IF(A1>10, "High", "Low")}