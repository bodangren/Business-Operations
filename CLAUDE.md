# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Math for Business Operations" is an interactive textbook for Grade 12 business mathematics that has evolved from a LaTeX-based project to a modern HTML/CSS/JavaScript platform. The textbook integrates accounting principles, spreadsheet modeling, and entrepreneurship through comprehensive interactive components.

**Current Status**: The project has been fully migrated from LaTeX to HTML with advanced interactive features including spreadsheet simulators, financial calculators, data visualizations, drag-and-drop exercises, business simulations, and a complete gamification system. **Link integrity management system implemented** with automated dead link detection and todo integration.

## Development Commands

### Serving the Textbook
```bash
# Simple HTTP server for development
cd html/
python -m http.server 8000
# or
npx serve .
```

### File Structure
```bash
html/                          # Main HTML textbook content
├── index.html                 # Landing page
├── assets/
│   ├── css/                   # Stylesheets
│   ├── js/                    # Interactive JavaScript components
│   └── images/                # Images and media
├── debug/                     # 🧪 COMPONENT TEST SUITE (USE FIRST!)
│   ├── spreadsheet-test.html  # Spreadsheet simulator testing
│   ├── calculator-test.html   # Financial calculator testing
│   ├── visualization-test.html # Chart.js and visualization testing
│   ├── dragdrop-test.html     # Drag & drop exercise testing
│   ├── simulations-test.html  # Business simulation testing
│   └── gamification-test.html # Gamification system testing
├── units/                     # Individual unit content
│   ├── unit01-smart-ledger/   # Unit 1 content
│   ├── unit02-month-end-wizard/
│   └── ...
├── frontmatter/               # Preface, introduction
├── backmatter/                # Glossary, references
└── capstone/                  # Final project content
```

### Testing Interactive Components
```bash
# Use comprehensive debug test suite for all component testing
cd html/debug/
python -m http.server 8000

# Available test pages:
# - spreadsheet-test.html     (All spreadsheet presets and formulas)
# - calculator-test.html      (NPV, loan payment, break-even calculators)
# - visualization-test.html   (Chart.js integration, all chart types)
# - dragdrop-test.html       (Drag & drop exercises, validation)
# - simulations-test.html    (Business simulations, game state)
# - gamification-test.html   (Points, levels, achievements)

# REQUIRED: Test components here BEFORE creating lessons
```

### Link Integrity Management
```bash
# Check for broken links across entire website
python3 check-links.py --html-root html --format summary

# Generate JSON report for programmatic processing
python3 check-links.py --html-root html --format json --broken-only

# Use custom commands for ongoing maintenance
# /check-links - Run dead link analysis
# /update-link-todos - Convert findings to actionable tasks
```

## Architecture and Structure

### Interactive Platform Overview
The textbook is built as a modern web application with:
- **HTML**: Semantic content structure with responsive design
- **CSS**: Component-based styling with mobile-first approach
- **JavaScript**: Interactive components with educational functionality
- **Progressive Enhancement**: Works without JavaScript but enhanced with it

### Unit Structure Pattern
Each unit follows a standardized 6-part structure:
1. `intro.html` - Introduction and driving questions
2. `concepts.html` - Core concepts and theory  
3. `excel-model.html` - Interactive spreadsheet modeling
4. `examples.html` - Worked examples with interactivity
5. `exercises.html` - Student exercises and activities
6. `summary.html` - Unit summary and key takeaways

### Interactive Components System
The platform includes comprehensive interactive elements:

#### Core Components
- **Spreadsheet Simulator**: Full Excel-like functionality
- **Financial Calculators**: NPV, loan payments, break-even analysis
- **Data Visualization**: Interactive charts with Chart.js
- **Drag & Drop Exercises**: Kinesthetic learning activities
- **Business Simulations**: Game-based learning scenarios
- **Gamification System**: Points, levels, achievements, badges

#### Educational Features
- **Callout Boxes**: Important, Tip, Warning, Example, Definition, Trivia
- **Comprehension Checks**: Interactive quizzes with immediate feedback
- **Progress Tracking**: Student progress across all activities
- **Adaptive Difficulty**: Exercises adjust based on performance
- **Multi-modal Learning**: Visual, kinesthetic, and analytical approaches

#### Technical Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Offline Capability**: All functionality works without internet
- **Local Storage**: Progress and data persisted locally
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## File Organization

```
html/                           # Main web application
├── index.html                  # Landing page and navigation
├── assets/
│   ├── css/
│   │   ├── main.css           # Core styles and layout
│   │   ├── textbook.css       # Educational content styling
│   │   ├── callouts.css       # Callout boxes and alerts
│   │   └── excel.css          # Excel-style table formatting
│   ├── js/
│   │   ├── gamification.js    # Points, levels, achievements
│   │   ├── spreadsheet-simulator.js  # Excel-like functionality
│   │   ├── financial-calculators.js  # NPV, loan, break-even
│   │   ├── data-visualization.js     # Charts and graphs
│   │   ├── drag-drop-exercises.js    # Interactive exercises
│   │   ├── business-simulations.js   # Educational games
│   │   ├── exercises.js       # Exercise system and validation
│   │   ├── financial-data-generator.js  # Realistic test data
│   │   └── safe-formula-evaluator.js  # Security fixes for formula evaluation
│   ├── images/
│   │   ├── favicon.png        # Site favicon (icons8-accounting-50.png)
│   │   └── cover.png          # Course cover image
│   └── icons8-accounting-*.png # Additional favicon sizes
├── units/
│   ├── unit01-smart-ledger/   # Complete unit with all 6 sections
│   ├── unit02-month-end-wizard/     # [MISSING - needs creation]
│   ├── unit03-three-statement-storyboard/  # [MISSING - needs creation]
│   ├── unit04-data-driven-cafe/     # [MISSING - needs creation]
│   ├── unit05-payday-simulator/     # [MISSING - needs creation]
│   ├── unit06-pricelab-challenge/   # [MISSING - needs creation]
│   ├── unit07-asset-inventory-tracker/  # [MISSING - needs creation]
│   └── unit08-integrated-model-sprint/  # [MISSING - needs creation]
├── frontmatter/
│   ├── preface.html           # Complete preface introducing course philosophy
│   └── acknowledgments.html   # [MISSING - needs creation]
├── backmatter/                # [MISSING - needs creation]
├── capstone/                  # [MISSING - needs creation]
└── teacher/                   # Complete teacher materials
    ├── index.html             # Teacher dashboard
    ├── course-overview/       # PBL methodology and backward design
    └── semester1/unit01-smart-ledger/  # Complete Unit 1 teacher resources

# Development Tools & Documentation
check-links.py                 # Dead link detection system
.claude/commands/              # Custom commands for link management
├── check-links.md            # /check-links command
└── update-link-todos.md      # /update-link-todos command
INTERACTIVE-COMPONENTS.md     # Comprehensive component documentation
CLAUDE.md                     # This file - development guidance
dev-docs/                     # Unit content planning documents
```

## Content Development Guidelines

### Using Interactive Components
- **Always reference INTERACTIVE-COMPONENTS.md** for implementation details
- Include appropriate JavaScript files in correct order
- Use semantic HTML with proper data attributes
- Follow established naming conventions for consistency

### Component-First Development Workflow
**CRITICAL: All interactive components must be tested before lesson creation**

#### Pre-Development Testing Requirements
1. **Test Existing Components First**: Before creating any new interactive activity, check if existing tested components can meet the learning objective
2. **Use Debug Test Pages**: All components have comprehensive test pages in `html/debug/` that must be used for validation
3. **Component Selection Priority**:
   - ✅ **First Choice**: Use existing tested components (spreadsheet, calculator, drag-drop, simulation, gamification)
   - ⚠️ **Second Choice**: Modify existing component with new presets or configurations
   - ❌ **Last Resort**: Create entirely new component type (requires full testing suite addition)

#### New Component Type Protocol
When creating a completely new component type:
1. **Add to appropriate debug test page** (or create new test page if needed)
2. **Run comprehensive testing** using the debug interface
3. **Document in INTERACTIVE-COMPONENTS.md** with usage examples
4. **Update UNIT-VALIDATION-CHECKLIST.md** with new component requirements
5. **Only then create lessons** using the thoroughly tested component

#### Quality Gates
- 🔒 **Gate 1**: Component functionality verified in debug environment
- 🔒 **Gate 2**: Integration with gamification system confirmed
- 🔒 **Gate 3**: Mobile responsiveness and accessibility validated
- 🔒 **Gate 4**: Performance metrics meet standards (<3s load, <500ms interaction)
- ✅ **Gate 5**: Ready for lesson integration

**Remember: Component testing is not optional. The debug test suite exists to prevent bugs in student-facing content.**

### Unit Development Pattern
1. **Start with concepts.html** - Establish theoretical foundation
2. **Add interactive spreadsheet** - Practice with realistic scenarios  
3. **Include financial calculators** - Apply calculations to real problems
4. **Implement drag-drop exercises** - Reinforce through kinesthetic learning
5. **Add business simulation** - Synthesize knowledge in realistic context
6. **Create comprehensive assessment** - Validate learning objectives

### Content Standards
- All interactive components automatically integrate with gamification
- Use established callout box types for consistency
- Include comprehension checks after major concepts
- Provide multiple learning modalities for different learning styles
- Ensure mobile responsiveness for all content

### Integration with Existing Content
- Migrate LaTeX content by converting environments to HTML/CSS equivalents
- Replace static Excel tables with interactive spreadsheet simulators
- Convert mathematical examples to interactive calculators
- Transform exercises into drag-and-drop or simulation activities

## Link Integrity & Quality Assurance

### Dead Link Detection System
A comprehensive system for maintaining link integrity across the website:

**Tools:**
- `check-links.py` - Python script that scans all HTML files for broken internal links
- Custom commands: `/check-links` and `/update-link-todos` for ongoing maintenance
- Automated todo integration for systematic link fixing

**Usage Pattern:**
1. Run `python3 check-links.py --html-root html --format summary` before major commits
2. Use `/update-link-todos` to convert broken link findings into actionable TodoWrite tasks
3. Prioritize fixes: Navigation links (high) → Content links (medium) → Resources (low)

**Current Status (as of last session):**
- **326 total links** across 14 HTML files
- **120 broken internal links** (60.9% success rate)
- **Recently fixed**: favicon.png, frontmatter/preface.html (6 links fixed)

### Priority Missing Content
Based on link analysis, these files are most critical to create:

**High Priority (Navigation):**
- Unit index files: `units/unit0[2-8]-*/index.html` (7 files)
- `frontmatter/acknowledgments.html`
- `capstone/index.html`
- `backmatter/glossary.html`
- `search.html`

**Medium Priority (Content):**
- Unit 1 completion: `exercises.html`, `summary.html`
- Teacher overview files: `pbl-methodology.html`, `semester-overview.html`, `assessment-philosophy.html`

## Author & Course Context

**Author**: Daniel Bodanske
- 25 years teaching experience
- Founded 3 companies including Reading Advantage (AI-focused ed tech)
- Reading Advantage: Extensive reading apps for secondary students in Asia
- Current projects: Primary Advantage, Tutor Advantage, future STEM apps
- Course motivation: Dissatisfaction with existing Business Math textbooks after 3 years teaching

**Course Philosophy**: Project-Based Learning with authentic assessment
- Semester 1: 8 foundational units building business analysis skills
- Semester 2: Independent capstone project with investor presentation
- Sarah narrative: TechStart Solutions journey connecting all units
- Real business professional evaluation of student work

**Backward Design Methodology**: All units follow Understanding by Design
- Stage 1: Identify desired results (essential questions, enduring understandings)
- Stage 2: Determine acceptable evidence (authentic performance tasks)
- Stage 3: Plan learning experiences (knowledge building → skill development → application)

---

## Development Session Notes & Context

### Most Recent Session Summary (Strategic Documentation Overhaul)

**Key Problem Solved**: Component amnesia prevention and systematic gamification integration

**Strategic Documents Created/Updated:**
1. **COMPONENT-INTEGRATION-WORKFLOW.md** - Comprehensive workflow preventing component amnesia with decision trees, testing requirements, and quality gates
2. **GAMIFICATION-INTEGRATION-STRATEGY.md** - Complete point system design, achievement framework, level progression (local platform only - no server dependencies)
3. **UNIT-VALIDATION-CHECKLIST.md** - Added "Component-First Validation Protocol" requiring mandatory pre-unit component testing
4. **TESTING-DEBUGGING-GUIDE.md** - Added "Development Workflow Integration" section
5. **dev-docs/SLASH-COMMANDS.md** - Added component-first development commands and complete workflow

**Custom Commands Available:**
```
.claude/commands/check-links.md          # Link integrity management
.claude/commands/concepts.md             # Concept section generation
.claude/commands/examples.md             # Examples section generation
.claude/commands/excel-model.md          # Excel model section generation
.claude/commands/exercises.md            # Exercise section generation
.claude/commands/integrate-gamification.md  # Systematic gamification design
.claude/commands/intro.md                # Introduction section generation
.claude/commands/prime.md                # [Purpose unknown - needs review]
.claude/commands/summary.md              # Summary section generation
.claude/commands/test-component.md       # Component testing automation
.claude/commands/unit-complete.md        # Complete unit workflow
.claude/commands/update-link-todos.md    # Convert broken links to todos
.claude/commands/validate-activity.md    # Final validation before deployment
```

**Mandatory Development Workflow Established:**
1. `/test-component all` - Verify all components work in debug environment
2. `/integrate-gamification [type] [objective] [components]` - Design educational gamification
3. Create sections: `/intro`, `/concepts`, `/excel-model`, `/examples`, `/exercises`, `/summary`
4. `/validate-activity [path]` - Final quality validation before student access
5. `/unit-complete` - Finalize unit development

**Key Implementation Constraints:**
- **Local Platform Only**: All features designed for HTML/CSS/JavaScript with localStorage persistence
- **No Server Dependencies**: No teacher dashboards, databases, or online analytics
- **Component Reuse Mandate**: 95%+ of activities must use existing tested components
- **Debug Test Suite**: Located in `html/debug/` directory - mandatory testing before lesson creation

**Quality Gates & Success Metrics:**
- Component functionality: 100% pass rate in debug environment
- Performance standards: <3s load time, <500ms response time
- Gamification integration: Educational value (not decorative)
- Bug prevention: Zero component-related issues in student lessons

**Current Project Status:**
- Strategic documentation framework: ✅ Complete
- Component-first workflow: ✅ Documented and enforced
- Gamification strategy: ✅ Designed for local platform
- Custom command suite: ✅ Available and documented

**Ready for Next Development Phase:**
- Implement component-first workflow on actual unit development
- Test custom commands with real content creation
- Create missing unit content using systematic approach
- Focus on Units 2-8 development with established quality standards

**Critical Success Factors:**
- Always test components in debug environment before lesson creation
- Never create new components without justification and comprehensive testing
- Ensure gamification enhances learning objectives (not just engagement)
- Maintain component reuse rate above 95% to prevent technical debt