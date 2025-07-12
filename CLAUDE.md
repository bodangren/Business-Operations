# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Math for Business Operations" is an interactive textbook for Grade 12 business mathematics that has evolved from a LaTeX-based project to a modern HTML/CSS/JavaScript platform. The textbook integrates accounting principles, spreadsheet modeling, and entrepreneurship through comprehensive interactive components.

**Current Status**: The project has been fully migrated from LaTeX to HTML with advanced interactive features including spreadsheet simulators, financial calculators, data visualizations, drag-and-drop exercises, business simulations, and a complete gamification system.

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
# Open any HTML file in browser to test
# All components are self-contained and work offline
# No build process required - direct HTML/CSS/JS
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
│   │   └── financial-data-generator.js  # Realistic test data
│   └── images/                # Graphics and illustrations
├── units/
│   ├── unit01-smart-ledger/   # Complete unit with all 6 sections
│   ├── unit02-month-end-wizard/
│   ├── unit03-three-statement-storyboard/
│   ├── unit04-data-driven-cafe/
│   ├── unit05-payday-simulator/
│   ├── unit06-pricelab-challenge/
│   ├── unit07-asset-inventory-tracker/
│   └── unit08-integrated-model-sprint/
├── frontmatter/               # Preface, getting started
├── backmatter/                # Glossary, references
└── capstone/                  # Final semester project

INTERACTIVE-COMPONENTS.md      # Comprehensive component documentation
CLAUDE.md                      # This file - development guidance
```

## Content Development Guidelines

### Using Interactive Components
- **Always reference INTERACTIVE-COMPONENTS.md** for implementation details
- Include appropriate JavaScript files in correct order
- Use semantic HTML with proper data attributes
- Follow established naming conventions for consistency

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