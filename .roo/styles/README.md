# Styles

This directory contains styling files for PDF and HTML outputs.

## Directory Structure

- `pdf/`: Styling for PDF output
- `html/`: Styling for HTML output

## PDF Styling

The PDF styling should include:

- `main.tex`: Main LaTeX style definitions
- `code-highlighting.tex`: Code highlighting for Excel formulas
- `exercise-styles.tex`: Styling for exercises and solutions

Example of `main.tex` content:

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

## HTML Styling

The HTML styling should include:

- `main.css`: Main CSS styles
- `code-highlighting.css`: Code highlighting for Excel formulas
- `exercise-styles.css`: Styling for exercises and solutions

Example of `main.css` content:

```css
/* Main CSS styles */
:root {
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--dark);
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

h1 {
  font-size: 2.5em;
  border-bottom: 2px solid var(--primary);
  padding-bottom: 0.2em;
}

h2 {
  font-size: 2em;
  border-bottom: 1px solid var(--secondary);
  padding-bottom: 0.1em;
}

/* Key concept box */
.key-concept {
  background-color: rgba(23, 162, 184, 0.1);
  border-left: 5px solid var(--info);
  padding: 15px;
  margin: 20px 0;
  border-radius: 3px;
}

.key-concept::before {
  content: "Key Concept";
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--info);
}

/* Exercise box */
.exercise {
  background-color: rgba(0, 123, 255, 0.1);
  border-left: 5px solid var(--primary);
  padding: 15px;
  margin: 20px 0;
  border-radius: 3px;
}

.exercise::before {
  content: "Exercise";
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--primary);
}

/* Solution box */
.solution {
  background-color: rgba(40, 167, 69, 0.1);
  border-left: 5px solid var(--success);
  padding: 15px;
  margin: 20px 0;
  border-radius: 3px;
}

.solution::before {
  content: "Solution";
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--success);
}