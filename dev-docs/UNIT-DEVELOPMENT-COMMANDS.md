# Unit Development Custom Commands

Based on our experience creating Unit 1 sections, these custom commands will generate consistent, framework-compliant section templates with all required interactive components and best practices built-in.

## Command: `/intro`

**Purpose**: Generate a complete Introduction section with entry event, driving question, learning objectives, and team setup.

**Usage**: `/intro [unit-number] [unit-name] [sarah-scenario-description]`

**Generates**:
- Complete HTML structure with navigation and breadcrumbs
- Entry event video integration (Heygen AI avatar ready)
- Driving question prominently displayed
- Learning objectives (content + Excel skills)
- Key vocabulary with interactive definitions
- Team role assignments (Financial Modeler, Documentation Lead, Quality Auditor)
- Journey preview with visual roadmap
- Comprehension check (3 questions)
- Complete gamification integration (75+ points possible)
- Mobile-responsive design with accessibility features

**Interactive Components**:
- Video placeholder with play functionality
- Role selection cards
- Progress tracking sidebar
- Achievement integration

**JavaScript Functions**:
- `playEntryVideo()` - Video integration
- `checkAnswers()` - Comprehension validation
- Gamification point awards

---

## Command: `/concepts`

**Purpose**: Generate a Concepts section with interactive theory exploration and hands-on learning.

**Usage**: `/concepts [unit-number] [unit-name] [main-concept-focus]`

**Generates**:
- Structured content sections with progressive complexity
- Interactive concept explorers (equation builders, categorization tools)
- Multiple callout boxes (Important, Tip, Example, Definition, Warning)
- Visual concept demonstrations
- Comprehensive theory with real-world applications
- Comprehension check (3-4 questions)
- Complete styling and responsive design

**Interactive Components**:
- Concept exploration widgets (sliders, builders, categorizers)
- Interactive examples with immediate feedback
- Progress tracking and skill building indicators

**JavaScript Functions**:
- `initializeConceptExplorer()` - Main interactive element
- `updateConceptDisplay()` - Real-time feedback
- `checkAnswers()` - Knowledge verification

---

## Command: `/excel-model`

**Purpose**: Generate an Excel Model section with hands-on spreadsheet building using proper component integration.

**Usage**: `/excel-model [unit-number] [unit-name] [spreadsheet-focus] [preset-type]`

**Generates**:
- Step-by-step model construction (5 progressive steps)
- Multiple spreadsheet simulators with proper API integration
- Interactive building controls with error handling
- Professional formatting demonstrations
- Real data testing scenarios
- Formula explanations and best practices
- Final investor readiness testing
- Comprehensive styling and mobile responsiveness

**Interactive Components**:
- 5+ Spreadsheet simulators using proper `data-preset` attributes
- Financial calculators integration
- Data visualization charts
- Interactive formula builders

**JavaScript Functions**:
- Proper simulator API usage (`setData()`, `getData()`)
- Error handling and loading states
- Progressive skill building tracking
- Real-world scenario testing

---

## Command: `/examples`

**Purpose**: Generate an Examples section with 4 worked examples and interactive practice.

**Usage**: `/examples [unit-number] [unit-name] [business-context]`

**Generates**:
- 4 complete worked examples with increasing complexity
- Interactive transaction walkthroughs
- Error detection demonstrations
- Report generation scenarios
- Student practice section with progress tracking
- Investor perspective integration
- Key takeaways summary
- Professional styling and animations

**Interactive Components**:
- Multiple spreadsheet simulators for each example
- Financial calculators for analysis
- Data visualization for reporting
- Interactive practice with hint system
- Progress tracking and validation

**JavaScript Functions**:
- Example demonstration controls
- Interactive practice management
- Progress tracking and validation
- Real-time feedback systems

---

## Command: `/exercises`

**Purpose**: Generate an Exercises section with drag-and-drop activities, business simulations, and varied practice.

**Usage**: `/exercises [unit-number] [unit-name] [simulation-type]`

**Generates**:
- Drag-and-drop exercises for kinesthetic learning
- Business simulation mini-game
- Varied difficulty levels (basic, intermediate, advanced)
- Peer collaboration opportunities
- Self-assessment tools
- Portfolio preparation activities
- Achievement and badge integration

**Interactive Components**:
- Drag-and-drop exercise containers with proper data attributes
- Business simulation with unit-specific scenario
- Interactive assessment tools
- Multi-modal learning activities

**JavaScript Functions**:
- Exercise validation and scoring
- Simulation game mechanics
- Progress tracking and achievements
- Collaborative features

---

## Command: `/summary`

**Purpose**: Generate a Summary section with consolidation, reflection, and portfolio preparation.

**Usage**: `/summary [unit-number] [unit-name] [next-unit-preview]`

**Generates**:
- Key takeaways with visual summary
- Skills checklist with self-assessment
- Connections to previous and future units
- Reflection prompts and journaling tools
- Portfolio preparation guidance
- Next steps and preview
- Complete progress visualization

**Interactive Components**:
- Progress tracking visualizations
- Portfolio export tools
- Reflection and journaling interfaces
- Achievement summary displays

**JavaScript Functions**:
- Progress calculation and display
- Portfolio management tools
- Reflection prompt systems
- Achievement summaries

---

## Command: `/unit-complete`

**Purpose**: Generate a complete unit with all 6 sections using consistent patterns.

**Usage**: `/unit-complete [unit-number] [unit-name] [driving-question] [sarah-scenario] [simulation-type]`

**Generates**:
- All 6 sections with proper navigation
- Consistent Sarah narrative throughout
- Progressive skill building across sections
- Integrated gamification system
- Complete assessment framework
- Teacher materials and documentation
- Quality assurance checklist

---

## Common Patterns Across All Commands

### Required HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Section] | Unit [#]: [Name]</title>
    
    <!-- CSS Imports -->
    <link rel="stylesheet" href="../../assets/css/main.css">
    <link rel="stylesheet" href="../../assets/css/textbook.css">
    <link rel="stylesheet" href="../../assets/css/callouts.css">
    <link rel="stylesheet" href="../../assets/css/excel.css">
</head>
<body>
    <!-- Standard header, navigation, breadcrumbs -->
    <!-- Main content with reading-width class -->
    <!-- Sidebar with navigation and progress -->
    <!-- Footer -->
    
    <!-- Required JavaScript -->
    <script src="../../assets/js/gamification.js"></script>
    <script src="../../assets/js/exercises.js"></script>
    <script src="../../assets/js/spreadsheet-simulator.js"></script>
    <script src="../../assets/js/financial-calculators.js"></script>
    <script src="../../assets/js/data-visualization.js"></script>
    <script src="../../assets/js/drag-drop-exercises.js"></script>
    <script src="../../assets/js/business-simulations.js"></script>
    <script src="../../assets/js/financial-data-generator.js"></script>
</body>
</html>
```

### Required Interactive Component Integration
- Proper `data-preset` attributes for spreadsheet simulators
- Correct container classes for auto-initialization
- Error handling for loading states
- Gamification integration with appropriate point awards
- Mobile-responsive design patterns
- Accessibility features (ARIA labels, keyboard navigation)

### Required Gamification Integration
```javascript
// Standard gamification patterns
document.addEventListener('DOMContentLoaded', function() {
    if (window.Gamification) {
        setTimeout(() => {
            window.Gamification.awardPoints(25, 'Started [section-name]');
        }, 1000);
    }
});

// Activity completion awards
if (window.Gamification) {
    window.Gamification.awardPoints([points], '[achievement-description]');
}
```

### Required Comprehension Check Pattern
```html
<div class="comprehension-check">
    <h3>🧠 Check Your Understanding</h3>
    <p>Test your understanding of key concepts:</p>
    
    <div class="question">
        <h4>Question 1: [Question text]</h4>
        <ul class="question-options">
            <li><label><input type="radio" name="q1" value="a">[Option A]</label></li>
            <li><label><input type="radio" name="q1" value="b">[Option B]</label></li>
            <li><label><input type="radio" name="q1" value="c">[Option C]</label></li>
            <li><label><input type="radio" name="q1" value="d">[Option D]</label></li>
        </ul>
        <div class="feedback" id="feedback-q1"></div>
    </div>
    
    <button type="button" onclick="checkAnswers()" class="btn btn-primary">Check My Answers</button>
</div>
```

### Required Progressive Navigation
```html
<nav class="page-nav" aria-label="Page navigation">
    <a href="[previous-section].html" class="page-nav-item prev">
        ← [Previous Section]
    </a>
    
    <span class="page-nav-center">Section [#] of 6</span>
    
    <a href="[next-section].html" class="page-nav-item next">
        [Next Section] →
    </a>
</nav>
```

### Required Sarah Narrative Integration
- Each section continues the TechStart Solutions story
- Business scenarios use realistic startup challenges
- Consistent character development and business growth
- Authentic financial data and decisions
- Investor-focused outcomes and motivations

### Required Responsive Design Patterns
```css
/* Standard responsive breakpoints */
@media (max-width: 768px) {
    .grid-layouts {
        grid-template-columns: 1fr;
    }
    
    .demo-controls,
    .action-buttons {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
    }
}
```

## Implementation Strategy

1. **Create base templates** for each section type with all common elements
2. **Parameterize key variables** (unit number, names, scenarios, etc.)
3. **Include all interactive components** with proper integration
4. **Ensure consistent styling** and responsive behavior
5. **Integrate gamification** with appropriate point structures
6. **Include comprehensive documentation** and teacher notes
7. **Validate against framework requirements** automatically

These commands will dramatically reduce development time while ensuring every section meets our established quality and consistency standards.