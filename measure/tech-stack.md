# Tech Stack

## Framework & Runtime
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Node.js** (latest LTS)

## Styling
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **shadcn/ui** components (Radix UI primitives)
- **Lucide React** icons

## Key Dependencies
- `@hello-pangea/dnd` - Drag-and-drop functionality
- `recharts` - Data visualization charts
- `react-spreadsheet` - Excel-like spreadsheet components
- `class-variance-authority` - Component variants

## Development Tools
- **ESLint** with eslint-config-next
- **TypeScript** for type safety
- **Turbopack** for faster dev builds

## Build & Deployment
- Static export (`output: 'export'`) for GitHub Pages
- Base path: `/Business-Operations`
- Trailing slashes enabled

## Project Structure
```
src/
├── app/              # Next.js App Router pages
├── components/       # React components (organized by category)
│   ├── accounting/   # T-accounts, journal entries
│   ├── drag-drop/    # Interactive learning activities
│   ├── charts/       # Recharts visualizations
│   ├── exercises/    # Assessment components
│   ├── financial-calculations/
│   ├── payroll/
│   ├── student/      # Student-facing components
│   ├── teacher/      # Teacher-facing components
│   └── ui/           # shadcn/ui primitives
├── data/             # Unit data, lesson plans, question banks
├── contexts/         # React contexts (LessonProgress)
├── hooks/            # Custom hooks
├── lib/              # Utilities
└── types/            # TypeScript interfaces
```

## Code Style Guides
- [TypeScript](./code_styleguides/typescript.md)
- [General](./code_styleguides/general.md)

## Notable Conventions
- Default exports for interactive components
- Named exports for UI primitives
- Unit data in `src/data/unit0X.ts`
- Component documentation in MCP knowledge base
