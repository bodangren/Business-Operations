# Implementation Plan: Capstone Project Infrastructure

## Overview
Scaffold the 13-week Capstone Project shell with milestone tracking, portfolio templates, rubric components, and investor pitch presentation tools. All work follows TDD: tests are written before implementation for every phase.

## Phases

### Phase 1: Data Model & Types
- [ ] Write tests for Capstone milestone data structures (`src/lib/capstone/__tests__/milestones.test.ts`)
- [ ] Write tests for phase progression logic and completion calculations
- [ ] Define `CapstonePhase`, `Milestone`, `Deliverable`, and `PortfolioSection` TypeScript types
- [ ] Implement milestone data model with week-to-phase mapping
- [ ] Implement completion percentage utilities
- [ ] Verify all tests pass

### Phase 2: localStorage Persistence Layer
- [ ] Write tests for Capstone storage adapter (`src/lib/capstone/__tests__/storage.test.ts`)
- [ ] Write tests for export/import serialization including Capstone data
- [ ] Implement `CapstoneStorage` module with CRUD operations
- [ ] Integrate Capstone data into existing export/import flow
- [ ] Add migration logic for future schema changes
- [ ] Verify all tests pass

### Phase 3: Capstone Dashboard Shell
- [ ] Write tests for dashboard layout and navigation (`src/app/capstone/__tests__/page.test.tsx`)
- [ ] Write tests for phase progress bar components
- [ ] Create `/capstone` page with dashboard layout
- [ ] Build `CapstonePhaseCard` component with progress visualization
- [ ] Add dashboard to main navigation
- [ ] Implement responsive grid layout for phases
- [ ] Verify all tests pass

### Phase 4: Milestone Tracking Components
- [ ] Write tests for `MilestoneList` component interactions
- [ ] Write tests for checklist item toggle and persistence
- [ ] Build `MilestoneList` with expandable checklist items
- [ ] Build `DeliverableChecklist` with completion tracking
- [ ] Connect components to `CapstoneStorage`
- [ ] Implement week-marker timeline visualization
- [ ] Verify all tests pass

### Phase 5: Portfolio Templates
- [ ] Write tests for portfolio section rendering and input handling
- [ ] Write tests for auto-save draft behavior
- [ ] Create `PortfolioSection` template component
- [ ] Build 5 portfolio sections: Executive Summary, Business Model Canvas, Market Analysis, Financial Projections, Operations Plan
- [ ] Implement structured prompt system per section
- [ ] Add Excel-compatible table components for numeric data
- [ ] Implement auto-save to localStorage with debounce
- [ ] Verify all tests pass

### Phase 6: Rubric Components
- [ ] Write tests for rubric display and scoring interactions
- [ ] Write tests for self-assessment form submission
- [ ] Define rubric criteria data for all 5 phases
- [ ] Build `RubricDisplay` component with multi-level scoring
- [ ] Build `SelfAssessmentForm` for student reflection
- [ ] Create teacher-facing rubric summary view
- [ ] Verify all tests pass

### Phase 7: Investor Pitch Tools
- [ ] Write tests for pitch deck slide rendering and navigation
- [ ] Write tests for presentation timer logic
- [ ] Build `PitchDeckSlide` component with 7 slide type variants
- [ ] Create `PitchDeckBuilder` for slide ordering and preview
- [ ] Implement presentation timer with speaker notes
- [ ] Add investor Q&A rehearsal tool with sample question bank
- [ ] Ensure print-friendly formatting (reuses print.css patterns)
- [ ] Verify all tests pass

### Phase 8: Peer Review Workflows
- [ ] Write tests for peer review form validation and submission
- [ ] Write tests for feedback aggregation logic
- [ ] Build `PeerReviewForm` with structured scoring rubric
- [ ] Create anonymized Capstone summary share view
- [ ] Implement feedback aggregation into summary view
- [ ] Add review count limits (2–4 per submission)
- [ ] Verify all tests pass

### Phase 9: Integration & Export
- [ ] Write tests for full Capstone export/import round-trip
- [ ] Write tests for navigation integration with existing app shell
- [ ] Integrate Capstone dashboard with existing app layout
- [ ] Wire export/import to include Capstone data alongside study data
- [ ] Add Capstone link to student and teacher navigation
- [ ] Verify all tests pass

### Phase 10: QA & Polish
- [ ] Write accessibility tests for all new components
- [ ] Run full test suite and fix regressions
- [ ] Verify static export build succeeds
- [ ] Audit responsive behavior on tablet and desktop
- [ ] Check WCAG 2.1 AA compliance for new components
- [ ] Performance audit: initial dashboard load <2 seconds
- [ ] Final code review and cleanup

## Quality Gates

### Phase Completion Criteria
1. **Phase 1**: All milestone types defined, completion calculations tested and passing
2. **Phase 2**: Storage module tested, export/import round-trip verified
3. **Phase 3**: Dashboard renders, navigation works, progress bars display correctly
4. **Phase 4**: Checklist toggles persist, timeline shows correct week markers
5. **Phase 5**: All 5 portfolio templates render, auto-save works, inputs validate
6. **Phase 6**: Rubrics display criteria, self-assessment form submits correctly
7. **Phase 7**: Pitch deck slides navigate, timer works, print formatting correct
8. **Phase 8**: Peer review forms validate, feedback aggregates accurately
9. **Phase 9**: Full integration tested, export includes Capstone data
10. **Phase 10**: All tests pass, build succeeds, accessibility audit passed

### Testing Requirements
- Unit tests for all data utilities and storage functions
- Component tests for every new UI component
- Integration tests for export/import with Capstone data
- Accessibility tests for keyboard navigation and screen readers
- Responsive layout tests for tablet and desktop viewports

## Risks & Mitigations

### Risks
1. **Large scope**: 5 phases + rubrics + pitch tools + peer review may exceed timeline
2. **localStorage size limits**: Capstone data plus study data may approach quota
3. **Print integration complexity**: Pitch deck print formatting depends on printable lessons track
4. **Scope creep**: Peer review and pitch tools have many potential enhancements

### Mitigations
1. **Prioritize ruthlessly**: If timeline slips, cut peer review to a simpler feedback form
2. **Data budgeting**: Implement size warnings and compression; split export files if needed
3. **Defensive print styling**: Create standalone pitch print styles independent of paged.js
4. **Lock boundaries**: Strict adherence to Out of Scope list; enhancements go to new tracks

## Success Metrics
1. All 5 Capstone phases visible and trackable in dashboard
2. Portfolio templates cover all required sections with structured prompts
3. Pitch deck supports all 7 slide types with print-friendly output
4. Peer review workflow supports 2–4 reviews with aggregated feedback
5. All progress persists and exports correctly
6. >80% test coverage for new Capstone code
7. Build succeeds with static export
8. Lighthouse accessibility score ≥90 on `/capstone`
