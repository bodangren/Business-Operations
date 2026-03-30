# Product Guidelines

## Prose Style
- Educational content written at 8th grade reading level
- Use Sarah Chen's TechStart Solutions as the primary business narrative
- Connect all concepts to real-world business impact
- Include "Why This Matters" callouts throughout content

## Branding
- Professional yet accessible educational aesthetic
- Gradient backgrounds with phase-specific colors
- Clear visual hierarchy with badges and headers
- Consistent use of shadcn/ui components

## UX Principles
- Textbook-first approach: teach concepts thoroughly before practice
- Multiple formative assessment touchpoints per phase
- Progressive skill building from basic to advanced
- Mobile-responsive design for homework access
- Accessibility-first: keyboard navigation, screen reader support

## Content Structure
- 6 phases per lesson: Hook, Introduction, Guided Practice, Independent Practice, Assessment, Closing
- Each phase includes substantial explanatory content + interactive components
- Complete self-contained pages (no generic prop-passing systems)

## Component Patterns
- Default exports for interactive components
- Named exports for UI primitives (PhaseHeader, PhaseFooter, Badge, Card)
- TypeScript interfaces from `src/types/unit.ts`
- Tailwind CSS v4 with custom design tokens

## Accessibility
- Multilingual support toggle
- Reading level adjuster
- Accessibility toolbar
- High contrast mode support
