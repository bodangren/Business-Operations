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

## MCP Knowledge Base Management

### Core Philosophy
**CRITICAL**: The MCP knowledge base serves as the project's living memory and decision-making foundation. Every development action must maintain this knowledge base to ensure continuity, discoverability, and informed next-step planning.

### Mandatory Documentation Requirements

#### When Creating New Components
**IMMEDIATELY** after creating any React component:
1. Use `mcp__components-mcp__create_component` with:
   - **name**: Component name (exact match to file/export name)
   - **description**: Clear educational purpose, key features, learning objectives
   - **filePath**: Absolute path from project root
   - **usageExample**: Basic implementation example with props

#### When Updating Components
**IMMEDIATELY** after modifying existing components:
1. Use `mcp__components-mcp__update_component` to reflect:
   - Changed functionality or props
   - New educational features
   - Updated file locations

#### When Creating APIs/Endpoints
For any REST endpoints, API routes, or external integrations:
1. Use `mcp__components-mcp__create_api` documenting:
   - Endpoint paths and HTTP methods
   - Request/response structures
   - Authentication requirements
   - Educational data flow

#### Knowledge Base Before Planning
**ALWAYS** query the MCP knowledge base before:
- Starting new features (check existing components for reuse)
- Planning architectural changes (understand current patterns)
- Debugging issues (identify related components)
- Making next-step decisions (leverage documented capabilities)

### Integration with Development Workflow

#### Pre-Development Phase
1. Query `mcp__components-mcp__get_components` to understand available building blocks
2. Check related categories (APIs, hooks, conventions) for relevant patterns
3. Plan new work based on documented capabilities and gaps

#### Post-Development Phase  
1. Document new components/APIs immediately after creation
2. Update existing documentation for any modifications
3. Verify knowledge base accuracy before task completion

### Educational Project Specificity
Document components with emphasis on:
- **Learning Objectives**: Which Grade 12 curriculum goals the component serves
- **Pedagogical Approach**: How it supports Project-Based Learning methodology
- **Excel Integration**: Advanced Excel functionality demonstrated
- **Assessment Integration**: How it connects to formative/summative evaluation

### Knowledge Base Categories
The MCP system tracks:
- **Components**: All React components with educational purpose and technical details
- **APIs**: Backend endpoints and external service integrations
- **Environment Variables**: Configuration and deployment settings
- **Style Guide**: Design system patterns and Tailwind conventions
- **State Management**: Global state patterns and context usage
- **Custom Hooks**: Reusable React hooks for educational interactions  
- **Coding Conventions**: Project-specific standards and patterns

## Chrome MCP Browser Testing Integration

### Core Philosophy
**CRITICAL**: Chrome MCP server provides comprehensive browser automation and testing capabilities that are essential for validating component functionality, user interactions, and educational workflows in real browser environments.

### Browser Testing Capabilities

#### Essential Testing Features
- **Tab Management**: Navigate between pages, open/close tabs, manage multiple windows
- **Content Extraction**: Get text content, HTML structure, and page metadata for validation
- **Interactive Element Detection**: Identify clickable elements, forms, and interactive components with precise coordinates
- **Form Testing**: Fill inputs, select options, and simulate user form interactions
- **Console Monitoring**: Capture browser console messages, errors, and debugging information
- **Network Analysis**: Monitor HTTP requests, API calls, and resource loading
- **User Simulation**: Send keyboard shortcuts, mouse clicks, and complex user interactions
- **History Analysis**: Access browser history for testing navigation flows

#### When to Use Chrome MCP Tools

**Component Testing (MANDATORY)**:
- `mcp__chrome-mcp-stdio__chrome_get_web_content`: Verify component rendering and content
- `mcp__chrome-mcp-stdio__chrome_get_interactive_elements`: Validate interactive elements and accessibility
- `mcp__chrome-mcp-stdio__chrome_click_element`: Test button clicks, navigation, and user interactions
- `mcp__chrome-mcp-stdio__chrome_fill_or_select`: Test form inputs, search functionality, and data entry

**Educational Workflow Testing**:
- `mcp__chrome-mcp-stdio__chrome_navigate`: Test unit navigation and deep-linking functionality
- `mcp__chrome-mcp-stdio__chrome_console`: Monitor React errors, Excel formula evaluation errors, and educational component warnings
- `mcp__chrome-mcp-stdio__chrome_network_capture_start/stop`: Validate API calls for progress tracking and assessment data

**Development Debugging**:
- `mcp__chrome-mcp-stdio__chrome_screenshot`: Visual verification of component layouts (note: large responses)
- `mcp__chrome-mcp-stdio__chrome_keyboard`: Test keyboard shortcuts for accessibility and power-user features
- `mcp__chrome-mcp-stdio__chrome_history`: Verify navigation patterns and user journey flows

### Integration with Development Workflow

#### Pre-Component Development
1. Test existing similar components to understand interaction patterns
2. Validate current page state before implementing new features
3. Document expected user workflows and interaction sequences

#### Post-Component Development (MANDATORY)
1. **Immediate Testing**: Test new component functionality with chrome MCP tools
2. **User Interaction Validation**: Verify all interactive elements work correctly
3. **Educational Flow Testing**: Ensure component supports learning objectives and PBL methodology
4. **Accessibility Verification**: Test keyboard navigation and screen reader compatibility
5. **Error Handling**: Monitor console for React errors and educational content warnings

#### Continuous Integration
- Use chrome MCP for automated component testing during development
- Validate educational workflows across different browser states
- Monitor network requests for assessment and progress tracking APIs
- Test responsive design and mobile compatibility

### Educational Project Specificity

**Excel Integration Testing**:
- Test spreadsheet component interactions and formula evaluation
- Validate Excel-like functionality (sorting, filtering, calculations)
- Monitor console for SafeFormulaEvaluator warnings and errors

**Assessment Workflow Testing**:
- Test progress tracking and milestone completion flows
- Validate form submissions for peer reviews and reflection journals
- Test interactive exercises and drag-drop functionality

**Performance Monitoring**:
- Monitor network requests for large educational datasets
- Test component rendering performance with complex financial models
- Validate static export compatibility for GitHub Pages deployment

### Security and Safety
- Never use chrome MCP tools to access external sites without permission
- Monitor console for security warnings and potential vulnerabilities
- Test input validation and sanitization in educational forms
- Verify SafeFormulaEvaluator prevents code injection in Excel-like components

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

## Current Development Status
- **Active TODO List**: See `TODO.md` for current project status, completed tasks, and next steps
- **Latest Work**: Unit introduction pages with UnitIntroduction component and modular data structure
- **Section Architecture**: 6 sections per unit (intro, concepts, excel-model, examples, exercises, summary)