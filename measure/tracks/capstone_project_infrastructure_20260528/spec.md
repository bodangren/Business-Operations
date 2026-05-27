# Specification: Capstone Project Infrastructure

## Overview
Scaffold the 13-week Capstone Project shell with milestone tracking, portfolio templates, rubric components, and investor pitch presentation tools. Students progress through ideation → market research → financial modeling → pitch deck → investor presentation. Include a Capstone dashboard showing milestone progress, deliverable checklists, and peer review workflows.

## Product Direction
- The Capstone spans 13 weeks and runs parallel to the 8 instructional units
- Students build a real or simulated business from concept to pitch
- All progress tracked client-side with localStorage export/import
- Teacher-facing rubrics align with Grade 12 Business Operations outcomes
- Static-export compatible: no backend required

## Functional Requirements

### FR1: Capstone Dashboard
- Create `/capstone` route with overview dashboard
- Display 5-phase progression: Ideation → Market Research → Financial Modeling → Pitch Deck → Investor Presentation
- Show milestone progress bars per phase
- List deliverable checklists with completion tracking
- Include timeline view with week markers (Week 1–13)

### FR2: Milestone Tracking
- Define milestones for each of the 5 phases
- Store progress in localStorage with existing study data patterns
- Allow students to mark milestones complete/in-progress
- Show phase-level and overall completion percentages
- Generate progress summary for teacher export

### FR3: Portfolio Templates
- Create reusable portfolio section templates
- Include: Executive Summary, Business Model Canvas, Market Analysis, Financial Projections, Operations Plan
- Templates provide structured prompts and Excel-compatible tables
- Support student input with rich text and numeric fields
- Auto-save drafts to localStorage

### FR4: Rubric Components
- Build teacher-facing rubric display components
- Define rubric criteria mapped to each Capstone phase
- Support multi-level scoring (e.g., Emerging / Developing / Proficient / Advanced)
- Allow teachers to view rubrics per student (via exported data)
- Include self-assessment rubric for student reflection

### FR5: Investor Pitch Tools
- Create pitch deck slide template components
- Support export to print-friendly format (integrates with printable lessons track)
- Include slide types: Problem, Solution, Market, Business Model, Financials, Team, Ask
- Provide presentation timer and speaker notes area
- Add investor Q&A rehearsal tool with sample questions

### FR6: Peer Review Workflows
- Enable students to share anonymized Capstone summaries for peer feedback
- Create structured peer review form with scoring rubric
- Support 2–4 peer reviews per submission
- Aggregate peer feedback into summary view for the student
- Maintain privacy: no direct identification in review data

## Non-Functional Requirements
- Static-export compatible (must work with `next export`)
- No backend dependencies
- Reuses existing design system (Tailwind CSS v4, shadcn/ui)
- Maintain current TypeScript safety and linting standards
- >80% test coverage for new Capstone components
- Accessibility: WCAG 2.1 AA compliance
- Responsive design: works on tablet and desktop

## Technical Constraints
- All data persisted via localStorage with export/import pattern
- Components must work within existing app layout and navigation
- Reuse existing `localStudyStorage` and export utilities where applicable
- Print integration should align with printable lessons core track patterns
- Must not break existing unit lesson routes or study data

## Acceptance Criteria
- [ ] `/capstone` route accessible from main navigation
- [ ] 5-phase progression visible with milestone progress bars
- [ ] Deliverable checklists trackable per phase
- [ ] Portfolio templates created for all 5 core sections
- [ ] Rubric components display multi-level scoring criteria
- [ ] Pitch deck templates support all 7 slide types
- [ ] Peer review workflow supports structured feedback forms
- [ ] All progress persists across sessions via localStorage
- [ ] Export/import works for Capstone data
- [ ] All existing tests pass
- [ ] Build succeeds with static export

## Out of Scope
- Real-time collaboration or multi-user editing
- Cloud sync or backend storage
- Automatic grading or AI-generated feedback
- Video recording for pitch presentations
- Integration with external presentation tools (Google Slides, PowerPoint)
- Teacher assignment distribution system
