# Product Guidelines

## Prose Style
- Educational content written at 8th grade reading level
- Use Sarah Chen's TechStart Solutions as the primary business narrative
- Connect all concepts to real-world business impact
- Include "Why This Matters" callouts throughout content

## Branding
- Professional yet accessible educational aesthetic
- Restrained gradient backgrounds that support orientation
- Clear visual hierarchy with badges and headers
- Consistent use of shadcn/ui components
- Prefer flat sections and dividers over repeated decorative cards

## UX Principles
- Textbook-first approach: teach concepts thoroughly before practice
- Make the current lesson the first student action
- Let students reach any lesson in no more than two navigation actions
- Separate student navigation from teacher and reference navigation
- Use one primary action in each page region
- Progressive skill building from basic to advanced
- Mobile-responsive design for homework access
- Accessibility-first: keyboard navigation, screen reader support

## Content Structure
- Keep six teaching phases in teacher plans and lesson metadata: Hook, Introduction, Guided Practice, Independent Practice, Assessment, and Closing.
- Present standard student lessons on one route with four visible sections: Start, Learn, Do, and Check.
- Map Hook to Start. Map Introduction to Learn. Map Guided Practice and Independent Practice to Do. Map Assessment and Closing to Check.
- Give each section one clear purpose and one primary activity.
- Use anchors for direct links to lesson sections. Do not create a separate student destination for each teaching phase.
- Use a compact lesson header. Do not repeat a large phase card and a full phase map around the lesson content.
- Remove routine reflection journals from student lessons. Use a concise summary and next-lesson handoff in Check.
- Use one short MCQ exit ticket with three to five questions per standard lesson.
- Do not place MCQ sets in Start, Learn, or Do. Use discussion, worked examples, simulators, workbook checks, and authentic practice instead.
- Present Lessons 8-10 as single milestone pages unless a track specification requires another project format.

## Student Navigation
- Use Today, Units, Practice, and Resources as the primary student navigation choices.
- Put the current lesson above the fold on the student hub.
- Put the lesson list directly after the unit title on each unit page.
- Move the unit challenge, goals, vocabulary, study tools, and final presentation into a secondary About This Unit section.
- Keep teacher resources out of the primary student navigation.
- Preserve old lesson and phase links during migrations.

## Unit Review Structure
- Treat a practice test or unit review as a study tool, not as a six-phase lesson.
- Use three interface states: Start, Questions, and Results.
- Start the default mixed review with one action.
- Put question count and lesson filters inside an optional Customize Review disclosure.
- Use simple question-count presets instead of a numeric input.
- Show one question at a time with clear progress.
- Show actual correct and incorrect performance by lesson or topic.
- Provide two result actions: Retry Missed Questions and Return to Unit.
- Do not include phase navigation, warm-up content, a narrative wrapper, mastery claims without evidence, or a reflection journal.
- Use one shared data-driven review component for all units.

## Component Patterns
- Default exports for interactive components
- Named exports for UI primitives such as Badge and Card
- TypeScript interfaces from `src/types/unit.ts`
- Tailwind CSS v4 with custom design tokens

## Accessibility
- Multilingual support toggle
- Reading level adjuster
- Accessibility toolbar
- High contrast mode support
