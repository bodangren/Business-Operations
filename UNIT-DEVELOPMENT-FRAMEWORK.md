# Unit Development Framework
**Math for Business Operations: Applied Accounting with Excel**

*Version 1.0 - Comprehensive Guide for Consistent Unit Development*

---

## Table of Contents
1. [Unit Structure Standards](#unit-structure-standards)
2. [Content Development Guidelines](#content-development-guidelines)
3. [Interactive Component Integration](#interactive-component-integration)
4. [Assessment Framework](#assessment-framework)
5. [File Organization Standards](#file-organization-standards)
6. [Quality Assurance Checklist](#quality-assurance-checklist)
7. [Teacher Materials Requirements](#teacher-materials-requirements)
8. [Technical Specifications](#technical-specifications)

---

## Unit Structure Standards

Each unit is written to eighth grade reading level, suitable for English language learners.

### Required Unit Components (6 Sections)
Each unit MUST include exactly these 6 sections in this order:

#### 1. Introduction (intro.html)
- **Purpose**: Hook students with real-world scenario, introduce driving question
- **Duration**: 45-60 minutes
- **Components**:
  - Compelling entry event/scenario
  - Clear driving question
  - Learning objectives (3-5 content + 3-5 Excel skills)
  - Key vocabulary definitions
  - "What's coming next" preview
  - Comprehension check (2-3 questions)

#### 2. Concepts (concepts.html)
- **Purpose**: Build theoretical foundation through guided instruction
- **Duration**: 60-90 minutes
- **Components**:
  - Core accounting/business concepts
  - Mathematical relationships and formulas
  - Step-by-step concept development
  - Real-world examples and applications
  - Interactive demonstrations
  - Comprehension check (3-4 questions)

#### 3. Excel Model (excel-model.html)
- **Purpose**: Hands-on building of Excel solution
- **Duration**: 90-120 minutes
- **Components**:
  - Interactive spreadsheet simulator
  - Step-by-step model construction
  - Formula explanations and best practices
  - Error-checking and validation
  - Professional formatting guidelines
  - Save/export functionality

#### 4. Examples (examples.html)
- **Purpose**: Worked examples showing application
- **Duration**: 60-75 minutes
- **Components**:
  - 3-4 worked examples of increasing complexity
  - Financial calculators for key computations
  - Data visualization of results
  - Analysis and interpretation guidance
  - "Try it yourself" interactive practice

#### 5. Exercises (exercises.html)
- **Purpose**: Independent practice and skill application
- **Duration**: 90-120 minutes
- **Components**:
  - Drag-and-drop exercises for concept reinforcement
  - Business simulation for applied practice
  - Varied difficulty levels (basic, intermediate, advanced)
  - Peer collaboration opportunities
  - Self-assessment tools

#### 6. Summary (summary.html)
- **Purpose**: Consolidate learning and prepare for next unit
- **Duration**: 30-45 minutes
- **Components**:
  - Key takeaways summary
  - Skills checklist/self-assessment
  - Connections to previous and future units
  - Reflection prompts
  - Portfolio preparation guidance

---

## Content Development Guidelines

### Writing Standards

#### Tone and Voice
- **Conversational but professional** - accessible to Grade 12 applied math students
- **Encouraging and supportive** - acknowledges challenges while building confidence
- **Practical focus** - emphasize real-world applications over theory
- **Clear and concise** - avoid unnecessary jargon

#### Content Organization
- **Chunked information** - break content into digestible sections
- **Visual hierarchy** - use headings, callouts, and formatting consistently
- **Progressive complexity** - build from simple to complex concepts
- **Explicit connections** - link new learning to prior knowledge

#### Mathematical Content
- **Applied focus** - practical problem-solving over abstract theory
- **Scaffold algebra** - provide support for students weak in algebra
- **Multiple representations** - visual, numeric, and symbolic
- **Error anticipation** - address common misconceptions

### Callout Box Standards
Use these specific callout types consistently:

- **Important** (red): Critical concepts, warnings, must-know information
- **Tip** (blue): Helpful shortcuts, best practices, efficiency tips
- **Example** (green): Worked examples, sample scenarios
- **Definition** (purple): Key vocabulary, technical terms
- **Warning** (orange): Common mistakes, pitfalls to avoid
- **Trivia** (yellow): Interesting facts, historical context

### Real-World Scenarios
Every unit must include:
- **Authentic business context** - real companies, actual problems
- **Relatable characters** - diverse, age-appropriate protagonists
- **Current data** - recent examples, relevant industries
- **Local connections** - when possible, use regional examples

---

## Interactive Component Integration

### Required Interactive Elements Per Section

#### 1. Introduction
- **Gamification**: Award 25 points for section completion
- **Interactive**: Entry event video or simulation
- **Assessment**: Comprehension check with immediate feedback

#### 2. Concepts
- **Spreadsheet Simulator**: Basic demonstrations
- **Callout Boxes**: Definitions and examples
- **Interactive**: Concept exploration activities
- **Assessment**: Knowledge check questions

#### 3. Excel Model
- **Spreadsheet Simulator**: Full model construction (preset based on unit type)
- **Financial Calculators**: Relevant calculation tools
- **Data Visualization**: Charts showing model outputs
- **Gamification**: 50 points for model completion

#### 4. Examples
- **Financial Calculators**: All relevant calculators for the unit
- **Data Visualization**: Interactive charts with example data
- **Spreadsheet Simulator**: Example workbooks

#### 5. Exercises
- **Drag-and-Drop Exercises**: At least 2 different exercise types
- **Business Simulations**: Unit-specific simulation
- **Interactive Assessment**: Multiple exercise formats
- **Gamification**: Points for each exercise completion

#### 6. Summary
- **Progress Tracking**: Visual completion indicators
- **Portfolio Tools**: Export/save functionality
- **Reflection**: Interactive journaling tools

### Interactive Component Specifications

#### Spreadsheet Simulator Presets by Unit Type
- **Unit 1 (Ledger)**: `ledger` preset - accounting columns
- **Unit 2 (Automation)**: `basic` preset - flexible grid
- **Unit 3 (Statements)**: `calculator` preset - statement building
- **Unit 4 (Data Analysis)**: `basic` preset with data import
- **Unit 5 (Payroll)**: Custom preset with payroll columns
- **Unit 6 (Pricing)**: `calculator` preset for CVP analysis
- **Unit 7 (Assets)**: `basic` preset for depreciation schedules
- **Unit 8 (Integration)**: `basic` preset for comprehensive model

#### Gamification Integration
- **Section completion**: 25-50 points based on complexity
- **Perfect exercise scores**: Bonus 25 points
- **Time milestones**: Daily goal contributions
- **Achievement unlocks**: Unit-specific badges
- **Progress tracking**: Visual indicators throughout

---

## Assessment Framework

### Formative Assessment Standards

#### Comprehension Checks
- **Frequency**: Every section (minimum 2-4 questions per section)
- **Format**: Multiple choice with detailed feedback
- **Content**: Mix of concept knowledge and application
- **Scoring**: Immediate feedback, retake allowed

#### Interactive Exercise Assessment
- **Immediate feedback**: All exercises provide instant results
- **Hint systems**: Progressive hints available
- **Multiple attempts**: Encourage learning from mistakes
- **Mastery tracking**: Show improvement over time

### Summative Assessment Components

#### Unit Portfolio Requirements
Each unit produces these portfolio artifacts:
1. **Completed Excel model** - fully functional with documentation
2. **Reflection document** - 250-300 words on learning and challenges
3. **Peer review contribution** - feedback on classmate's work
4. **Public product** - presentation, poster, or demonstration

#### Assessment Rubric Standards
All rubrics must include these dimensions:
- **Technical Accuracy** (40%): Correct formulas, calculations, processes
- **Application Quality** (30%): Appropriate use of tools and concepts
- **Communication** (20%): Clear explanations, professional presentation
- **Growth & Reflection** (10%): Evidence of learning and improvement

---

## File Organization Standards

### Directory Structure
```
units/
├── unit##_descriptive_name/
│   ├── html/
│   │   ├── intro.html
│   │   ├── concepts.html
│   │   ├── excel-model.html
│   │   ├── examples.html
│   │   ├── exercises.html
│   │   └── summary.html
│   ├── assets/
│   │   ├── data/
│   │   ├── templates/
│   │   └── images/
│   ├── teacher/
│   │   ├── lesson-plans/
│   │   ├── answer-keys/
│   │   └── rubrics/
│   └── README.md
```

### File Naming Conventions
- **HTML files**: lowercase, descriptive (e.g., `excel-model.html`)
- **Data files**: `unit##_dataset_description.xlsx`
- **Template files**: `unit##_template_description.xlsx`
- **Image files**: `unit##_image_description.png`

### Required Metadata
Each unit folder must include a `README.md` with:
- Unit title and driving question
- Learning objectives (content and Excel skills)
- Duration and pacing guide
- Prerequisites and connections
- Assessment criteria
- Required materials and resources

---

## Quality Assurance Checklist

### Content Quality Standards
- [ ] **Driving question** clearly stated and compelling
- [ ] **Learning objectives** specific, measurable, and appropriate
- [ ] **Mathematical content** appropriate for Grade 12 applied math level
- [ ] **Real-world scenarios** authentic and current
- [ ] **Vocabulary** clearly defined with examples
- [ ] **Instructions** clear and step-by-step
- [ ] **Examples** worked completely with explanations

### Interactive Component Checklist
- [ ] **All required components** included per section requirements
- [ ] **Gamification integration** functional and motivating
- [ ] **Accessibility features** implemented (ARIA labels, keyboard navigation)
- [ ] **Mobile responsiveness** tested on devices
- [ ] **Error handling** graceful and informative
- [ ] **Performance** optimized for school networks

### Assessment Quality Checklist
- [ ] **Formative assessments** provide immediate, helpful feedback
- [ ] **Summative assessments** align with learning objectives
- [ ] **Rubrics** clear and specific
- [ ] **Multiple demonstration opportunities** available
- [ ] **Differentiation options** included
- [ ] **Peer assessment** structured and meaningful

### Technical Standards Checklist
- [ ] **All links** functional and properly formatted
- [ ] **Images** optimized and include alt text
- [ ] **Code validation** HTML validates without errors
- [ ] **Cross-browser compatibility** tested
- [ ] **File organization** follows naming conventions
- [ ] **Documentation** complete and accurate

---

## Teacher Materials Requirements

### Required Teacher Components Per Unit

#### Lesson Plans
- **Daily objectives** aligned with unit goals
- **Pacing guide** with time allocations
- **Differentiation strategies** for various learner needs
- **Technology requirements** and setup instructions
- **Common misconceptions** and how to address them

#### Assessment Support
- **Rubrics** with exemplars at each performance level
- **Answer keys** for all exercises and assessments
- **Peer review guides** and training materials
- **Portfolio conference protocols**

#### Professional Development Notes
- **Key teaching points** for each section
- **Excel skill requirements** for teachers
- **Troubleshooting guides** for common technical issues
- **Extension activities** for advanced learners
- **Support strategies** for struggling students

---

## Technical Specifications

### Required JavaScript Libraries
Include these files in order:
```html
<!-- Core Systems -->
<script src="../../assets/js/gamification.js"></script>
<script src="../../assets/js/exercises.js"></script>

<!-- Interactive Components -->
<script src="../../assets/js/spreadsheet-simulator.js"></script>
<script src="../../assets/js/financial-calculators.js"></script>
<script src="../../assets/js/data-visualization.js"></script>
<script src="../../assets/js/drag-drop-exercises.js"></script>
<script src="../../assets/js/business-simulations.js"></script>

<!-- Supporting Systems -->
<script src="../../assets/js/financial-data-generator.js"></script>
```

### CSS Requirements
```html
<link rel="stylesheet" href="../../assets/css/main.css">
<link rel="stylesheet" href="../../assets/css/textbook.css">
<link rel="stylesheet" href="../../assets/css/callouts.css">
```

### Performance Standards
- **Page load time**: Under 3 seconds on school networks
- **Interactive response**: Under 500ms for user interactions
- **Mobile performance**: Functional on tablets and phones
- **Offline capability**: Core content available without internet

### Browser Compatibility
- **Minimum support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Graceful degradation**: Basic functionality in older browsers
- **Progressive enhancement**: Advanced features when supported

---

## Development Workflow

### Pre-Development Phase
1. **Review unit content outline** from existing `.md` files
2. **Identify interactive component needs** based on learning objectives
3. **Plan assessment integration** and portfolio requirements
4. **Gather real-world examples** and current data
5. **Create development timeline** with milestones

### Development Phase
1. **Create file structure** following naming conventions
2. **Develop content** section by section in order
3. **Integrate interactive components** per specifications
4. **Test all functionality** across browsers and devices
5. **Review against quality checklist**

### Review Phase
1. **Content review** for accuracy and appropriateness
2. **Technical testing** of all interactive elements
3. **Accessibility audit** using automated tools
4. **Peer review** from other developers
5. **Final quality assurance** check

### Deployment Phase
1. **Final testing** in production environment
2. **Documentation completion** including teacher materials
3. **Integration testing** with overall platform
4. **Performance optimization** if needed
5. **Release preparation** and version control

---

## Version Control and Documentation

### Required Documentation
- **Development log** tracking changes and decisions
- **Known issues** and their workarounds
- **Feature roadmap** for future enhancements
- **Testing log** with results and fixes
- **Accessibility notes** and compliance status

### Version Numbering
- **Major versions** (1.0, 2.0): Significant content or structure changes
- **Minor versions** (1.1, 1.2): New features or substantial improvements
- **Patch versions** (1.1.1, 1.1.2): Bug fixes and minor updates

---

## Reference Materials

### Key Files to Reference
- `INTERACTIVE-COMPONENTS.md` - Complete component documentation
- `CLAUDE.md` - Project overview and development guidelines
- `capstone/01_guidelines.tex` - Semester 2 capstone requirements
- Existing unit content files in `units/unit##_*/unit##_content.md`

### External Resources
- Excel function reference for appropriate skill level
- Current business examples and case studies
- Accessibility guidelines (WCAG 2.1 AA)
- Grade 12 applied math curriculum standards

### Contact Information
- Project lead: [Contact information]
- Technical support: [Technical contact]
- Content review: [Content specialist contact]

---

*This framework should be referenced at the start of each unit development session to ensure consistency and quality across all units.*