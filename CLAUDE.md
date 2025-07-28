# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Math for Business Operations: Applied Accounting with Excel" - a comprehensive Grade 12 educational application built with Next.js. The project contains both a Next.js web application (`bus-math-nextjs/`) and traditional HTML/CSS resources (`html/`), along with development documentation (`dev-docs/`).

## Development Commands

All development work should be done in the `bus-math-nextjs/` directory:

```bash
cd bus-math-nextjs/
```

### Core Commands
- **Development**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build` (creates static export for GitHub Pages)  
- **Lint**: `npm run lint`
- **Start production**: `npm start`

### Testing
The project doesn't have explicit test scripts in package.json. Check for any test files in the src/ directory or ask for clarification on testing approach.

## Architecture

### Next.js Application Structure
- **App Router**: Uses Next.js 15 App Router with TypeScript
- **Static Export**: Configured for GitHub Pages deployment with `output: 'export'`
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **State Management**: React hooks and context (no external state library)

### Key Directories
- `src/app/`: Next.js app router pages and layouts
- `src/components/`: Reusable React components organized by category
  - `accounting/`: T-accounts, journal entries, trial balance
  - `business-simulations/`: Interactive business scenarios
  - `charts/`: Data visualization components using Recharts  
  - `drag-drop-exercises/`: Interactive learning activities
  - `financial-reports/`: Income statement, balance sheet, cash flow
  - `ui/`: shadcn/ui components (button, card, input, etc.)
- `src/data/`: Unit data definitions (unit01.ts through unit08.ts)
- `src/types/`: TypeScript type definitions, especially `unit.ts`

### Component Architecture
- Uses shadcn/ui design system with Radix UI primitives
- Drag-and-drop functionality via `@hello-pangea/dnd`
- Chart components built with Recharts
- Interactive exercises with state management for progress tracking

### Unit System
The application is structured around 8 educational units, each with:
- Driving questions and learning objectives
- Performance tasks and milestones
- Weekly learning sequences
- Assessment rubrics
- Student choice options

### Routing Structure
- `/units/[unit]/` - Dynamic routing for 8 units (unit01-smart-ledger through unit08-integrated-model-sprint)
- `/debug/` - Development testing pages for component categories
- Each unit has consistent sub-pages based on the UnitData interface

## Development Guidelines

### Component Development
- Follow existing component patterns in each category directory
- Use TypeScript interfaces from `src/types/unit.ts`
- Implement responsive design with Tailwind CSS
- Include proper accessibility attributes
- Use shadcn/ui components as building blocks

### Data Management
- Unit data stored in separate files (`src/data/unit0X.ts`)
- Follow the `UnitData` interface structure strictly
- Include all required fields: objectives, assessment, learningSequence, etc.

### Styling Conventions
- Tailwind CSS with custom design tokens
- Use existing UI component variants
- Follow responsive design patterns from existing components
- Maintain consistent spacing and typography scales

### GitHub Pages Deployment
- Static export configuration handles asset paths automatically
- Production builds use `/Business-Operations` base path
- Images are unoptimized for static hosting
- Trailing slashes enabled for better routing

## Educational Context & Pedagogy

### Curriculum Structure
This is a Grade 12 "Math for Business Operations" course using Project-Based Learning (PBL):
- **8 Core Units** (2 weeks each) + **13-week Capstone Project**
- **Authentic Audiences**: Students present to real investors, entrepreneurs, and business professionals
- **Progressive Skill Building**: From basic Excel tables to advanced financial modeling with VBA/macros
- **CAP Development**: Focus on Courage, Adaptability, and Persistence through reflection and iteration

### Unit Themes & Driving Questions
1. **Smart Ledger Launch**: Self-auditing bookkeeping for angel investors
2. **Month-End Wizard**: Excel automation to reduce closing time from days to hours
3. **Three-Statement Storyboard**: Integrated financial statements with KPI dashboards
4. **Data-Driven Café**: Statistical analysis and forecasting for operations optimization
5. **PayDay Simulator**: Payroll systems with tax calculations and cash flow management
6. **PriceLab Challenge**: Cost-Volume-Profit analysis and competitive pricing strategies
7. **Asset & Inventory Tracker**: Depreciation methods and inventory valuation (FIFO/LIFO)
8. **Year-1 Startup Model**: Integrated financial model with scenario analysis for VC presentations

### Assessment Philosophy
- **60% Formative**: Weekly milestones, peer reviews, reflection journals
- **40% Summative**: Public presentations, technical Excel models, capstone project
- **Industry-Standard Rubrics**: Focus on model integrity, analytical insight, and professional communication

## Content Development Guidelines

### Excel Integration Priority
- All components should demonstrate advanced Excel functionality (VBA, Power Query, Analysis ToolPak)
- Formula accuracy and cross-sheet linking are critical for authentic business modeling
- Include error-checking, data validation, and automated features where possible

### Community Partnerships
- Design components assuming real community partnerships (local CPAs, entrepreneurs, VC mentors)
- Public presentation formats should be professional and industry-appropriate
- Include authentic business scenarios and data whenever possible

## Important Notes
- The project includes both modern Next.js components and legacy HTML files
- Interactive elements rely heavily on React state and drag-drop libraries
- Educational content follows a specific pedagogical structure defined in the unit types
- All interactive components should maintain progress state for educational continuity
- Security is critical: use SafeFormulaEvaluator for any formula evaluation, never Function() constructor or eval()
- Components should support the project-based learning methodology with clear milestone tracking