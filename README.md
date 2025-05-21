# Math for Business Operations

A comprehensive textbook for the Math for Business Operations curriculum for Grade 12, designed as a year-long course that integrates accounting principles, spreadsheet modeling, and entrepreneurship.

## Project Structure

This project is organized according to the plan outlined in [textbook-project-plan.md](textbook-project-plan.md).

## Getting Started

1. Review the project plan in [textbook-project-plan.md](textbook-project-plan.md)
2. Explore the folder structure to understand the organization
3. Review project-specific guidelines in the .roo/ directory as needed.
4. Build the textbook PDF using the latexmk book_main.tex command (see "Building the Textbook" section below).

## Building the Textbook

To build the PDF version of the textbook, ensure you have a LaTeX distribution (like TeX Live, MiKTeX, or MacTeX) installed, which includes the `latexmk` utility. Navigate to the project's root directory in your terminal and run:

```bash
latexmk book_main.tex
```

This command will compile [`book_main.tex`](book_main.tex:1) and all its included files, handling cross-references and bibliography generation. The output will be `book_main.pdf` in the root directory.

To clean up auxiliary files generated during compilation (e.g., `.aux`, `.log`, `.toc`), you can use:

```bash
latexmk -c
```
Or for a more thorough cleaning (including the PDF):
```bash
latexmk -C
```

## Content Organization

- **Semester 1**: Contains 8 units focused on mini-projects
- **Semester 2**: Contains 13 weeks of content for the capstone project
- **Appendices**: Contains supplementary material
- **Instructor**: Contains resources for instructors

## Configuration

The primary configuration for the textbook's appearance and structure is managed through LaTeX:

- **Global Styles & Macros:** Defined in [`style.tex`](style.tex:1).
- **Main Document Structure:** Orchestrated by [`book_main.tex`](book_main.tex:1), which inputs content from the `frontmatter/`, `units/`, `capstone/`, and `backmatter/` directories.
- **Auxiliary Style Files:** [`Examplestyles.tex`](Examplestyles.tex:0) and [`ExcelStyle.tex`](ExcelStyle.tex:0) are present for testing style modifications but are not part of the main build.

The `.roo/` directory currently contains project-related documents:
- [`Capstone_Project_Guidelines.md`](.roo/Capstone_Project_Guidelines.md:0): Guidelines for the capstone project.
- [`custom-instructions.md`](.roo/custom-instructions.md:0): Custom instructions for AI assistant interactions with this project.
