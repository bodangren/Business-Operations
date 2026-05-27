# Implementation Plan: Teacher and Student Alignment

## Track ID: teacher_student_alignment_20260403

### Phase 1: Mismatch Audit
- [x] 1.1 Compare current student unit names and unit scopes against teacher-facing labels
  - Student unit pages
  - Student lesson-data files
  - Teacher layout/navigation
  - Teacher unit lesson plans
- [x] 1.2 Build a mismatch checklist
  - Wrong unit title
  - Wrong essential question
  - Wrong narrative/video framing
  - Wrong workbook or project expectation
- [x] 1.3 Identify which mismatches are global and which are unit-specific

### Phase 2: Canonical Alignment for Units 07 and 08
- [x] 2.1 Rewrite Unit 07 teacher-facing framing to inventory-only
  - Unit title
  - Essential question
  - Objectives and deliverables
  - Milestones and workbook references
- [x] 2.2 Rewrite Unit 08 teacher-facing framing to fixed assets and depreciation
  - Unit title
  - Essential question
  - Objectives and deliverables
  - Milestones and workbook references
- [x] 2.3 Update shared intro-video metadata or references so the video/narrative assignments are correct

### Phase 3: Teacher Shell and Overview Pages
- [x] 3.1 Update teacher navigation labels
- [x] 3.2 Update teacher overview/course-map copy
- [x] 3.3 Verify teacher routes render the aligned unit metadata and lesson-plan content

### Phase 4: Alignment Rules for Future Revisions
- [x] 4.1 Add a simple maintenance checklist or note for future curriculum revisions
  - Student lesson data updated
  - Teacher lesson plan updated
  - Shared shell labels updated
  - Intro video metadata updated if needed
- [x] 4.2 Add direct references to the current Measure track files where helpful

### Phase 5: Verification
- [x] 5.1 Manually compare teacher and student surfaces for Units 07 and 08
- [x] 5.2 Spot-check Units 01-06 for collateral naming drift introduced by shell changes
- [x] 5.3 Run `npm run lint`
- [x] 5.4 Record any remaining curriculum mismatches outside this track’s scope
