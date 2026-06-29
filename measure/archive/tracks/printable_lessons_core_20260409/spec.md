# Specification: Printable Lessons Core

## Overview
Add printable lesson and worksheet generation to the Business Operations platform using paged.js for professional print formatting. Teachers can generate printable worksheets, quizzes, and answer keys from any lesson content.

## Product Direction
- Static-first: All generation happens client-side
- Professional print formatting with proper page breaks
- Customizable worksheets based on lesson content
- Answer key generation for teacher use
- Maintain accessibility in print format

## Functional Requirements

### FR1: paged.js Integration
- Install `@pagedjs/pagedjs` package
- Implement print-specific CSS generation
- Handle page breaks at logical content boundaries
- Support headers/footers with lesson metadata
- Generate both student and teacher versions

### FR2: Printable Components
- Create `PrintableLessonWrapper` component
- Build `PrintPreviewModal` for interactive preview
- Implement `WorksheetGenerator` for custom exercises
- Create `AnswerKeyGenerator` with auto-grading logic
- Add `PrintButton` component for one-click printing

### FR3: Worksheet Customization
- Allow teachers to select which exercises to include
- Support multiple question types: multiple choice, short answer, matching
- Generate exercises from glossary terms and lesson content
- Include space for student answers and teacher notes
- Support bilingual worksheets (English/Chinese terms)

### FR4: Answer Key System
- Auto-generate answer keys for all worksheet content
- Include grading rubrics for subjective questions
- Provide explanatory notes for complex answers
- Support teacher customization of answer keys
- Export answer keys separate from student worksheets

### FR5: Export & Print Options
- Generate high-quality PDF for printing
- Create HTML print preview with live formatting
- Support bulk export for multiple lessons
- Add print-friendly navigation and instructions
- Ensure cross-browser print compatibility

## Non-Functional Requirements
- Client-side only: No backend generation required
- Professional print quality: Proper margins, spacing, fonts
- Performance: Worksheet generation <3 seconds for typical lessons
- Accessibility: Print formats meet WCAG 2.1 AA standards
- Browser compatibility: Chrome, Firefox, Safari, Edge
- Mobile printing support for teacher convenience

## Technical Constraints
- Use `@pagedjs/pagedjs` for print CSS generation
- All generation must work in browser without server
- Maintain current lesson data structures
- Support both student and teacher print views
- Handle variable content length gracefully

## Acceptance Criteria
- [ ] `@pagedjs/pagedjs` integrated and working
- [ ] Printable button on all lesson pages
- [ ] Interactive print preview with page break indicators
- [ ] Customizable worksheet generation
- [ ] Auto-generated answer keys
- [ ] High-quality PDF export
- [ ] Accessible print formatting
- [ ] Performance: generation <3 seconds
- [ ] Cross-browser print compatibility
- [ ] All existing tests pass

## Out of Scope
- Real-time collaboration on worksheets
- Advanced editing of generated worksheets (basic customization only)
- Teacher assignment management system
- Student submission and grading workflow
- Complex page layout design tools