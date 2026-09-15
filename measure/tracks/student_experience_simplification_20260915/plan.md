# Student Experience Simplification Implementation Plan

## Phase 1: Contract & Schema Definition

- [ ] Task: Define the student lesson presentation contract
  - [ ] Add canonical Start, Learn, Do, and Check section identifiers
  - [ ] Define the mapping from the six teacher phases to the four student sections
  - [ ] Define stable anchor names and next-section behavior
- [ ] Task: Define the student navigation contract
  - [ ] Define the deployment-wide current-lesson configuration
  - [ ] Define the local Continue record and safe fallback behavior
  - [ ] Derive unit and lesson links from canonical registries
- [ ] Task: Define the shared unit-review contract
  - [ ] Define Start, Questions, and Results states
  - [ ] Define unit-review configuration and question-bank adapters
  - [ ] Define response records that support correct and incorrect topic results
  - [ ] Define Retry Missed Questions behavior
- [ ] Task: Define the legacy-route compatibility contract
  - [ ] Map phase 1 to Start and phase 2 to Learn
  - [ ] Map phases 3 and 4 to Do
  - [ ] Map phases 5 and 6 to Check
  - [ ] Define a static-export redirect and accessible fallback contract
- [ ] Task: Measure - User Manual Verification 'Contract & Schema Definition' (Protocol in workflow.md)

## Phase 2: Test

- [ ] Task: Write failing tests for student navigation
  - [ ] Test the Today, Units, Practice, and Resources links
  - [ ] Test separation of student and teacher primary navigation
  - [ ] Test current-lesson and Continue fallback behavior
- [ ] Task: Write failing tests for simplified unit pages
  - [ ] Test that the lesson list precedes secondary unit content
  - [ ] Test direct lesson links and current-lesson marking
  - [ ] Test the compact unit-review action
- [ ] Task: Write failing tests for the one-route lesson shell
  - [ ] Test Start, Learn, Do, and Check order and anchors
  - [ ] Test compact progress and next-lesson navigation
  - [ ] Test one primary action per section
- [ ] Task: Write failing assessment-policy tests
  - [ ] Test that standard lessons contain one exit ticket
  - [ ] Test that Start, Learn, and Do do not render MCQ sets
  - [ ] Test that student lessons and unit reviews do not render `ReflectionJournal`
- [ ] Task: Write failing unit-review logic tests
  - [ ] Test the default mixed 10-question draw
  - [ ] Test 5, 10, and 15 question presets and bank limits
  - [ ] Test optional lesson filters
  - [ ] Test one-question-at-a-time progress
  - [ ] Test actual correct and incorrect totals by lesson or topic
  - [ ] Test Retry Missed Questions
- [ ] Task: Write failing route-compatibility tests
  - [ ] Test every legacy phase-to-anchor mapping
  - [ ] Test the no-JavaScript fallback link
  - [ ] Test production base-path handling
- [ ] Task: Measure - User Manual Verification 'Test' (Protocol in workflow.md)

## Phase 3: Implement

- [ ] Task: Implement the simplified global and student navigation
  - [ ] Add the direct student and teacher entry choices
  - [ ] Add Today, Units, Practice, and Resources to the student context
  - [ ] Remove teacher resources from primary student navigation
- [ ] Task: Implement the current-lesson and Continue surfaces
  - [ ] Add the static current-lesson configuration
  - [ ] Add local recent-lesson progress with safe hydration
  - [ ] Put the current lesson above the fold on `/student`
- [ ] Task: Simplify the shared unit overview
  - [ ] Move the lesson list directly below the unit title
  - [ ] Add current-lesson highlighting
  - [ ] Combine secondary content into About This Unit
  - [ ] Replace the promotional practice-test card with one compact row
- [ ] Task: Implement the shared four-section lesson shell
  - [ ] Add the compact lesson header and section progress
  - [ ] Add stable anchors and direct-link focus handling
  - [ ] Add concise Check summary and next-lesson action
  - [ ] Keep gradients and badges limited to orientation
- [ ] Task: Migrate Unit 1 as the pilot
  - [ ] Wait for or reconcile the active Unit 1 lesson-integrity track
  - [ ] Migrate launch, accounting, Excel, and rehearsal lessons by lesson-type skill
  - [ ] Normalize Unit 1 project milestone lessons
  - [ ] Remove routine reflection and surplus MCQ sets
- [ ] Task: Run the Unit 1 classroom pilot gate
  - [ ] Verify student navigation with representative students
  - [ ] Verify teacher pacing and direct section links
  - [ ] Record changes required before broad migration
- [ ] Task: Migrate standard lessons in Units 2-4
  - [ ] Preserve concept order, interactives, and workbook links
  - [ ] Remove routine reflection and surplus MCQ sets
  - [ ] Verify one representative lesson of each lesson type before each unit
- [ ] Task: Migrate standard lessons in Units 5-8
  - [ ] Preserve concept order, interactives, and workbook links
  - [ ] Remove routine reflection and surplus MCQ sets
  - [ ] Verify one representative lesson of each lesson type before each unit
- [ ] Task: Normalize rehearsal and project milestone pages
  - [ ] Make every Lesson 7 rehearsal use one student route
  - [ ] Make every Lesson 8-10 project lesson use one milestone page
  - [ ] Remove zero-phase, one-phase, and six-phase route inconsistencies
- [ ] Task: Implement and migrate the shared unit-review experience
  - [ ] Build one data-driven unit-review component
  - [ ] Adapt all eight question banks to the shared contract
  - [ ] Remove the six-phase wrapper, narrative, warm-up, and reflection
  - [ ] Show real performance by lesson or topic
  - [ ] Replace all eight duplicated practice-test page implementations
- [ ] Task: Measure - User Manual Verification 'Implement' (Protocol in workflow.md)

## Phase 4: Generate Docs & Doctor

- [ ] Task: Implement static-safe legacy route handling
  - [ ] Add compatibility pages or route adapters without duplicate lesson content
  - [ ] Verify old shared links at the production base path
- [ ] Task: Refresh generated architecture facts
  - [ ] Update `graph.db` for changed TypeScript and TSX files
  - [ ] Run `measure/generate.sh`
  - [ ] Review generated route and architecture changes
- [ ] Task: Run Measure Doctor
  - [ ] Run `measure/doctor.sh`
  - [ ] Resolve architecture, documentation, and route findings in track scope
- [ ] Task: Run project quality gates
  - [ ] Get explicit user approval before running npm commands
  - [ ] Run `npm run typecheck`
  - [ ] Run `npm run lint`
  - [ ] Run relevant unit and component tests
  - [ ] Run the production build
- [ ] Task: Complete browser and content verification
  - [ ] Serve the static export under `/Business-Operations`
  - [ ] Validate one route before batch capture
  - [ ] Check representative student routes at desktop and 430-pixel widths
  - [ ] Check keyboard navigation, focus, anchors, and horizontal overflow
  - [ ] Confirm workbook and resource links remain valid
- [ ] Task: Measure - User Manual Verification 'Generate Docs & Doctor' (Protocol in workflow.md)
