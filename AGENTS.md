# AGENTS.md CLAUDE.md GEMINI.md (duplicates)

This file provides guidance to coding agents (Claude Code, OpenAI Codex CLI, etc.) working with this repository. It supplements existing docs with agent‑specific workflow rules and the Excel‑focused lesson implementation patterns actively used in this project.

## Agent Operating Rules (Read First)
- Work only in `bus-math-nextjs/` unless explicitly told otherwise.
- Do NOT run `npm` commands (including `npm run build`, `npm run dev`, `npm start`, installs) or mutate `.next` without explicit user approval.
- Prefer fast, read‑only introspection: use `rg` (ripgrep) to search, and read files in chunks ≤250 lines.
- Verify component exports before import: check for `export default` vs named exports in actual files.
- Follow six‑phase page structure and the established styling wrapper from lesson03 (gradient background, `PhaseHeader`/`PhaseFooter`, `Badge`, max width containers).
- Create realistic practice datasets in `public/resources/` and link with `<a href="/resources/file.csv" download>`.
- Use existing interactive components; avoid inventing new APIs. If you add/modify components, immediately document them in the MCP knowledge base.
- For testing and validation, prefer Chrome MCP tools and page navigation checks; avoid local build commands unless approved.

## Excel‑Focused Lesson Patterns (Active Work)
The course uses a “textbook‑first” approach with interactive formative assessment. Two recurring Excel lessons per unit are common:

- Lesson04: Excel‑Focused Skills Introduction
  - Purpose: introduce the first major Excel automation skill for the unit and bridge concepts to practice.
  - Deliverables: all 6 student phase pages, realistic practice CSV in `public/resources/`, business‑authentic content at 8th‑grade reading level.
  - Components: ComprehensionCheck, FillInTheBlank, ErrorCheckingSystem (as relevant), ReflectionJournal, and unit‑relevant business exercises.

  Styling requirements (MANDATORY):
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[PHASE_COLOR]-50">
    <PhaseHeader unit={unitData} lesson={lessonData} phase={currentPhase} phases={lessonPhases} />
    <main className="container mx-auto px-4 py-8 space-y-8">
      <section className="space-y-6">
        <div className="text-center space-y-4">
          <Badge className="bg-[PHASE_COLOR]-100 text-[PHASE_COLOR]-800 text-lg px-4 py-2">
            [PHASE_ICON] Phase [N]: [PHASE_NAME]
          </Badge>
          {/* Content sections wrapped in max-w-4xl mx-auto */}
        </div>
      </section>
    </main>
    <PhaseFooter unit={unitData} lesson={lessonData} phase={currentPhase} phases={lessonPhases} />
  </div>

- Lesson05: Advanced Excel Automation (Second Excel Lesson)
  - Purpose: deepen the Excel skill introduced in Lesson04 with advanced automation (e.g., dynamic method switching, what‑if tools, enhanced validation, dashboards), preparing students for later synthesis.
  - Deliverables: all 6 phases, advanced practice data (`public/resources/unit[x]-[skill]-advanced-practice.csv`), stronger professional standards and investor‑readiness.

Both lessons must follow the Component Documentation Protocol (MCP) and Testing & Validation requirements defined below.

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
- `/student/unit01/lesson01/phase-1/` - Static student lesson phase pages (6 phases per lesson, 10 lessons per unit)
- `/teacher/[unit]/[lessonNumber]/` - Dynamic teacher lesson plans and resources  
- `/debug/` - Development testing pages for component categories
- Unit text content stored in `unit[X]-text.md` files for comprehensive explanations

## Component Discovery & Usage Guidelines

### Finding the Right Interactive Component
Before creating new components, search existing ones using these methods:

1. **MCP Curriculum Server** (RECOMMENDED):
   ```bash
   # List all available components with descriptions
   mcp__curriculum-mcp__list_components
   
   # Get detailed component info including usage examples
   mcp__curriculum-mcp__get_components
   
   # Search for components by educational purpose
   mcp__curriculum-mcp__get_components --id="component-id"
   ```

2. **By Educational Function** (File System):
   ```bash
   # Search for comprehension/assessment components
   find src/components -name "*Check*" -o -name "*Quiz*" -o -name "*Assessment*"
   
   # Search for drag-drop learning activities  
   find src/components/drag-drop-exercises -name "*.tsx"
   ```

3. **By Content Area** (Use Grep tool):
   - Accounting concepts: `grep -r "debit\|credit\|journal\|ledger" src/components/`
   - Excel/spreadsheet: `grep -r "SUMIF\|Excel\|spreadsheet" src/components/`  
   - Business scenarios: `grep -r "TechStart\|Sarah\|business.*scenario" src/components/`

### Component Import Syntax (CRITICAL)
Most interactive components use **default exports**. Use correct import syntax to avoid common errors:

```tsx
// ✅ CORRECT - Default import (no curly braces)
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import AccountCategorization from "@/components/drag-drop-exercises/AccountCategorization"

// ❌ INCORRECT - Named import will cause errors
import { ComprehensionCheck } from "@/components/exercises/ComprehensionCheck"  // ERROR
import { ReflectionJournal } from "@/components/exercises/ReflectionJournal"    // ERROR

// ✅ CORRECT - UI components use named exports  
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { VideoPlayer } from "@/components/ui/video-player"
import { Card, CardContent } from "@/components/ui/card"
```

### Component-to-Learning-Objective Mapping
- **Conceptual Understanding**: ComprehensionCheck.tsx, FillInTheBlank.tsx
- **Skill Practice**: DragAndDrop.tsx, AccountCategorization.tsx, TrialBalanceSorting.tsx
- **Application**: BusinessTransactionCategorization.tsx, StartupJourney.tsx
- **Reflection**: ReflectionJournal.tsx, PeerCritiqueForm.tsx
- **Assessment**: All exercise components support formative assessment

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
1. Use `mcp__curriculum-mcp__create_component` with:
   - **name**: Component name (exact match to file/export name)
   - **description**: Clear educational purpose, key features, learning objectives
   - **filePath**: Absolute path from project root
   - **usageExample**: Basic implementation example with props

#### When Updating Components
**IMMEDIATELY** after modifying existing components:
1. Use `mcp__curriculum-mcp__update_component` to reflect:
   - Changed functionality or props
   - New educational features
   - Updated file locations

#### When Creating APIs/Endpoints
For any REST endpoints, API routes, or external integrations:
1. Use `mcp__curriculum-mcp__create_api` documenting:
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
1. Query `mcp__curriculum-mcp__list_components` or `mcp__curriculum-mcp__get_components` to understand available building blocks
2. Check related categories using `mcp__curriculum-mcp__list_apis`, `mcp__curriculum-mcp__get_hooks`, `mcp__curriculum-mcp__get_conventions` for relevant patterns
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
The curriculum-mcp system tracks:
- **Units**: Curriculum units with learning objectives and structure
- **Lessons**: Individual lessons within units with phases and activities
- **Lesson Phases**: Structured lesson components (Hook, Introduction, Guided Practice, etc.)
- **Assessments**: Formative and summative assessments linked to units/lessons
- **Components**: All React components with educational purpose and technical details
- **APIs**: Backend endpoints and external service integrations
- **App Connections**: Links between lesson phases and UI components/pages
- **Tasks**: Development and curriculum tasks with status tracking
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

## Static Phase Page Development (CRITICAL)

### Online Textbook Requirements
This application serves as an **online textbook** for Grade 12 Business Operations. Each lesson phase page must include:

#### Required Structure for Each Phase Page:
1. **Substantial Explanatory Content** (Primary Requirement)
   - Complete educational explanations written directly in JSX at 8th grade reading level
   - Comprehensive coverage of key concepts, vocabulary, and real-world applications
   - Business context connecting to authentic scenarios (TechStart Solutions, etc.)
   - "Why this matters" explanations linking concepts to student goals

2. **Interactive Components for Formative Assessment** (Secondary Requirement)
   - ComprehensionCheck.tsx for knowledge checks and quizzes
   - DragAndDrop.tsx and specialized drag-drop exercises for skill practice
   - BusinessTransactionCategorization.tsx for real-world application
   - FillInTheBlank.tsx for vocabulary and concept reinforcement
   - ReflectionJournal.tsx for metacognitive learning
   - Think-Pair-Share discussion frameworks (structured prompts, not components)

3. **Complete Self-Contained Pages**
   - Each `phase1/page.tsx` through `phase6/page.tsx` contains ALL content for that phase
   - No generic prop-passing systems - write actual educational content directly
   - Import PhaseHeader and PhaseFooter for navigation only
   - Import and use educational components with real data, not placeholder content

#### Phase Page Content Formula:
**Educational Theory + Real-World Context + Interactive Practice = Complete Learning Experience**

### Content Style Guide & Writing Patterns

#### Sarah's Narrative Voice (TechStart Solutions Context)
Use Sarah Chen's authentic business story throughout content. Examples:

```tsx
// ✅ GOOD - Authentic business context
<p className="text-lg leading-relaxed">
  When Sarah first launched TechStart Solutions, she landed three projects back-to-back: 
  a website for a local bakery ($2,200), social media setup for pet grooming ($650), 
  and SEO work for a dental office ($1,100). But behind the success was chaos—tracking 
  everything in notebooks was overwhelming and unsustainable.
</p>

// ❌ AVOID - Generic, abstract explanations  
<p>Business owners need to track their transactions systematically.</p>
```

#### 8th Grade Reading Level Patterns
- **Sentence Length**: 15-20 words average, vary for rhythm
- **Vocabulary**: Introduce business terms with context clues
- **Explanations**: Use concrete examples before abstract concepts

```tsx
// ✅ GOOD - 8th grade level with business vocabulary
<p>
  All business, from the smallest startup to the largest corporation, operates under 
  one unbreakable rule. It's a rule of perfect balance, and it's the foundation of 
  all financial tracking. This is the <strong>Accounting Equation</strong>.
</p>

// ❌ AVOID - Too complex or too simple
<p>The fundamental principle of double-entry bookkeeping necessitates...</p>
<p>Businesses need to balance their books.</p>
```

#### "Why This Matters" Integration Patterns
Always connect concepts to student goals and real-world impact:

```tsx
// ✅ GOOD - Clear relevance and impact
<div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
  <h3 className="font-semibold text-blue-900 mb-2">Why This Matters</h3>
  <p className="text-blue-800">
    Understanding debits and credits isn't just about following rules—it's about 
    building the foundation for investor confidence. When Sarah shows potential 
    investors her self-auditing ledger, they can immediately see that she 
    understands how money flows through her business.
  </p>
</div>
```

#### Think-Pair-Share Discussion Framework Templates
Structure collaborative learning with specific prompts:

```tsx
// ✅ GOOD - Structured collaborative learning
<Card className="border-blue-200 bg-blue-50">
  <CardHeader>
    <CardTitle className="text-blue-800 flex items-center gap-2">
      <Users className="h-5 w-5" />
      Turn and Talk
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="font-medium text-blue-900 mb-2">
      Discussion Prompt (3 minutes):
    </p>
    <p className="text-blue-800 mb-2">
      Think about Sarah's experience with tracking client payments in notebooks. 
      Share with a partner:
    </p>
    <ul className="list-disc list-inside space-y-1 text-blue-800">
      <li>What specific problems do you see with her current system?</li>
      <li>How might these problems affect her relationship with clients?</li>
      <li>What would convince you that Sarah's business is trustworthy?</li>
    </ul>
  </CardContent>
</Card>
```

### Lesson Phase Structure (6 Phases per Lesson):
1. **Hook** (5 min): Engaging introduction with video/scenario + comprehension check
2. **Introduction** (15 min): Core concept explanation + multiple interactive assessments  
3. **Guided Practice** (12 min): Structured learning activities + think-pair-share discussions
4. **Independent Practice** (8 min): Student application + advanced interactive exercises
5. **Assessment** (5 min): Formative assessment + knowledge verification
6. **Closing** (5 min): Synthesis and preview + reflection activities

### Assessment-Component Integration Patterns

#### Formative Assessment Flow
Each phase should include multiple assessment touchpoints using appropriate components:

```tsx
// Phase progression: Content → Check → Practice → Apply → Reflect
export default function Phase2Page() {
  return (
    <div>
      {/* 1. Educational Content */}
      <div className="prose prose-lg max-w-none">
        <p>Sarah's business operates under the accounting equation: Assets = Liabilities + Equity...</p>
      </div>
      
      {/* 2. Comprehension Check */}
      <ComprehensionCheck
        questions={accountingEquationQuestions}
        title="Understanding the Accounting Equation"
        showExplanations={true}
      />
      
      {/* 3. Skill Practice */}
      <AccountCategorization
        items={sarahsTransactions}
        title="Categorize Sarah's Business Transactions"
      />
    </div>
  )
}
```

#### Component-to-Learning-Objective Alignment
Match components to specific lesson objectives from teacher lesson plans:

- **Knowledge Retention**: ComprehensionCheck.tsx with `showExplanations={true}`
- **Skill Development**: DragAndDrop.tsx, AccountCategorization.tsx  
- **Application**: BusinessTransactionCategorization.tsx, StartupJourney.tsx
- **Analysis**: FinancialStatementMatching.tsx, TrialBalanceSorting.tsx
- **Reflection**: ReflectionJournal.tsx, PeerCritiqueForm.tsx

### Development Methodology:
1. **Read Current Lesson Data** (CRITICAL - Filesystem is source of truth):
   ```bash
   # Read current lesson plans from filesystem
   Read teacher/unit01/lesson-01/page.tsx  # Teacher objectives and context
   Read student/unit01/lesson01/lesson-data.ts  # Current lesson structure
   Read student/unit01/unit01-text.md  # Comprehensive content reference
   ```

2. **Cross-Reference with MCP Server**:
   ```bash
   # Check MCP server for component availability
   mcp__curriculum-mcp__list_components
   mcp__curriculum-mcp__get_lessons --unitId="unit01"
   
   # Update MCP if discrepancies found
   mcp__curriculum-mcp__update_lesson --id="lesson-id" --newData
   ```

3. **Component Discovery Priority**:
   - **Primary**: Use MCP server for component descriptions and usage examples
   - **Secondary**: File system search for component patterns and implementations
   - **Always**: Verify imports and syntax in actual component files

4. **Write Educational Content**: 8th grade reading level with Sarah's TechStart context
5. **Document Updates**: Record new component usage in MCP server for future reference

## Important Notes
- The project includes both modern Next.js components and legacy HTML files
- Interactive elements rely heavily on React state and drag-drop libraries
- Educational content follows a specific pedagogical structure defined in the unit types
- All interactive components should maintain progress state for educational continuity
- Security is critical: use SafeFormulaEvaluator for any formula evaluation, never Function() constructor or eval()
- Components should support the project-based learning methodology with clear milestone tracking
- **TEXTBOOK FIRST**: Every phase page must teach concepts thoroughly before providing practice activities

## Current Development Status
- **Active TODO List**: See `TODO.md` for current project status, completed tasks, and next steps
- **Latest Work**: Unit introduction pages with UnitIntroduction component and modular data structure
- **Section Architecture**: 6 sections per unit (intro, concepts, excel-model, examples, exercises, summary)
