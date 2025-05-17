# Math for Business Operations

A comprehensive textbook for the Business Math & Finance curriculum for Grade 12, designed as a year-long course that integrates accounting principles, spreadsheet modeling, and entrepreneurship.

## Project Structure

This project is organized according to the plan outlined in [textbook-project-plan.md](textbook-project-plan.md).

## Getting Started

1. Review the project plan in [textbook-project-plan.md](textbook-project-plan.md)
2. Explore the folder structure to understand the organization
3. Use the templates in `.roo/templates/` to create new content
4. Build the textbook using the Makefile commands

## Building the Textbook

To build the textbook, use the following commands:

```bash
# Build both PDF and HTML versions
make all

# Build only the PDF version
make pdf

# Build only the HTML version
make html

# Clean the build directory
make clean
```

## Content Organization

- **Semester 1**: Contains 8 units focused on mini-projects
- **Semester 2**: Contains 13 weeks of content for the capstone project
- **Appendices**: Contains supplementary material
- **Instructor**: Contains resources for instructors

## Configuration

The `.roo/` directory contains configuration files for:

- Templates for different content types
- Pandoc configuration for PDF and HTML output
- Linting rules for consistent formatting
- Styles for PDF and HTML output
- Build scripts for automation
