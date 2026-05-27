# Track capstone_project_infrastructure_20260528 Context

## Overview
Scaffold the 13-week Capstone Project shell with milestone tracking, portfolio templates, rubric components, and investor pitch presentation tools. Students progress through ideation → market research → financial modeling → pitch deck → investor presentation.

## Key Documents
- [Specification](./spec.md)
- [Implementation Plan](./plan.md)
- [Metadata](./metadata.json)

## Core Features
1. **Capstone Dashboard**: Overview of 5-phase progression with milestone progress bars
2. **Milestone Tracking**: Deliverable checklists and week-by-week timeline
3. **Portfolio Templates**: Executive Summary, Business Model Canvas, Market Analysis, Financial Projections, Operations Plan
4. **Rubric Components**: Multi-level scoring for teacher assessment and student self-reflection
5. **Investor Pitch Tools**: Pitch deck templates, presentation timer, and Q&A rehearsal
6. **Peer Review Workflows**: Structured feedback forms with aggregated summaries

## Technical Stack
- Next.js 15 + React 19 (static export)
- Tailwind CSS v4 + shadcn/ui
- localStorage persistence (existing patterns)
- Reuses print.css patterns from printable lessons core track

## Implementation Status
- **Status**: Pending
- **Type**: Feature
- **Priority**: High
- **Estimated Effort**: 3-4 weeks

## User Workflows
1. **Student**: Navigate to Capstone → View phase progress → Complete milestones → Fill portfolio sections → Build pitch deck → Submit for peer review
2. **Teacher**: View rubric criteria → Assess student progress via exported data → Review pitch presentations
3. **Peer Reviewer**: Receive anonymized summary → Complete structured review form → Submit feedback
