# Future Work: Populate Teacher Guidance Fields

## Overview
This document outlines the scope and requirements for a future track to populate the 5 teacher guidance fields across all 80 daily lessons.

## Fields to Populate
The `DailyLesson` type in `@/types/lesson-plan` defines these optional fields:
1. **preparation** (string[]): Steps teachers should take before the lesson
2. **facilitationGuidance** (string[]): Tips for facilitating the lesson activities
3. **checksForUnderstanding** (string[]): Strategies to assess student comprehension
4. **watchFors** (string[]): Common student mistakes or misconceptions to watch for
5. **nextSteps** (string[]): Suggestions for follow-up or extension activities

## Scope
- **Total lessons**: 8 units × 10 lessons = 80 daily lessons
- **Source files**: 8 unit lesson plan files in `src/data/teacher/`
- **Target fields**: All 5 fields listed above for each daily lesson

## Requirements for Future Track
1. Define content standards for each field (length, tone, specificity)
2. Create a content template or guidelines document
3. Populate each field for all 80 lessons
4. Update `TeacherLessonPlan` component to display these fields (if not already implemented)
5. Test the teacher lesson pages to ensure the new content renders correctly
6. Run full build and test suite to verify no regressions

## Priority
Low - Deferred until after higher-priority items (debug routes on static export, etc.) are completed.
