# Custom Slash Commands for Unit Development

## Component-First Development Commands

### `/test-component` Command

Automates comprehensive component testing before lesson creation to prevent component amnesia.

**Syntax**: `/test-component [component-type] [configuration]`

**Example**: `/test-component spreadsheet ledger` or `/test-component all`

**Purpose**: 
- Enforces component-first development workflow
- Validates component functionality in debug environment
- Generates integration documentation templates
- Prevents creation of new components when existing ones suffice

**Generated Output**:
- Comprehensive test report with pass/fail status
- Performance metrics and benchmarks
- Integration plan template for lesson development
- Component readiness certification

---

### `/integrate-gamification` Command

Systematically integrates gamification elements according to comprehensive strategy.

**Syntax**: `/integrate-gamification [activity-type] [learning-objective] [component-list]`

**Example**: `/integrate-gamification skill-building "Create professional income statement" spreadsheet,dragdrop`

**Purpose**:
- Ensures educational (not decorative) gamification
- Calculates appropriate point structures
- Identifies relevant achievements and progress tracking
- Generates complete JavaScript integration code

**Generated Output**:
- Point structure design with bonuses and multipliers
- Achievement integration code
- Progress tracking setup
- Complete gamification implementation code

---

### `/validate-activity` Command

Comprehensive validation of complete activities before student deployment.

**Syntax**: `/validate-activity [activity-path] [validation-level]`

**Example**: `/validate-activity html/units/unit01-smart-ledger/concepts.html comprehensive`

**Purpose**:
- Final quality gate before student access
- Educational effectiveness validation
- Technical performance verification
- Cross-browser and device compatibility testing

**Generated Output**:
- Detailed validation report with scoring
- Issue identification and resolution recommendations
- Performance benchmarks and compliance verification
- Deployment approval or blocking recommendations

---

## Unit Development Commands

### `/intro` Command

Creates a complete Introduction section with all required components.

**Syntax**: `/intro [unit_number] [unit_name] [sarah_scenario]`

**Example**: `/intro 02 Month-End Wizard Sarah's first month is ending and she needs to close the books properly for investor reporting`

**Generated Structure**:
- Entry event video integration
- Driving question display 
- Learning objectives (3-5 content + 3-5 Excel)
- Key vocabulary (4-6 terms)
- Team role assignments
- Journey preview
- Comprehension check (3 questions)
- Gamification integration (75+ points)

**File Generated**: `intro.html`

---

## `/concepts` Command

Creates a Concepts section with interactive theory exploration.

**Syntax**: `/concepts [unit_number] [unit_name] [main_concept]`

**Example**: `/concepts 02 Month-End Wizard accrual accounting and adjusting entries`

**Generated Structure**:
- Progressive concept building (4-6 sections)
- Interactive concept explorer
- Multiple callout boxes
- Real-world examples
- Visual demonstrations
- Comprehension check (3-4 questions)
- Complete responsive styling

**File Generated**: `concepts.html`

---

## `/excel-model` Command

Creates an Excel Model section with hands-on spreadsheet building.

**Syntax**: `/excel-model [unit_number] [unit_name] [model_focus] [preset_type]`

**Example**: `/excel-model 02 Month-End Wizard adjusting entries calculator`

**Generated Structure**:
- 5 progressive building steps
- Multiple spreadsheet simulators
- Interactive building controls
- Professional formatting demo
- Real data testing
- Investor readiness test
- Error handling throughout

**File Generated**: `excel-model.html`

---

## `/examples` Command

Creates an Examples section with 4 worked examples and practice.

**Syntax**: `/examples [unit_number] [unit_name] [business_context]`

**Example**: `/examples 02 Month-End Wizard TechStart's first month-end closing process`

**Generated Structure**:
- 4 worked examples (increasing complexity)
- Interactive transaction walkthroughs
- Error detection demonstrations  
- Report generation scenarios
- Student practice with progress tracking
- Key takeaways summary

**File Generated**: `examples.html`

---

## `/exercises` Command

Creates an Exercises section with varied interactive practice.

**Syntax**: `/exercises [unit_number] [unit_name] [simulation_type]`

**Example**: `/exercises 02 Month-End Wizard month-end-simulation`

**Generated Structure**:
- Drag-and-drop exercises
- Business simulation mini-game
- Difficulty progression (basic → advanced)
- Peer collaboration tools
- Self-assessment features
- Portfolio preparation

**File Generated**: `exercises.html`

---

## `/summary` Command

Creates a Summary section with consolidation and reflection.

**Syntax**: `/summary [unit_number] [unit_name] [next_unit_preview]`

**Example**: `/summary 02 Month-End Wizard financial statement preparation and analysis`

**Generated Structure**:
- Key takeaways visualization
- Skills checklist with self-assessment
- Unit connections (previous/next)
- Reflection prompts
- Portfolio guidance
- Achievement summary

**File Generated**: `summary.html`

---

## Command Implementation Templates

### Template Variables
```
{{UNIT_NUMBER}} - Two-digit unit number (01, 02, etc.)
{{UNIT_NAME}} - Descriptive unit name
{{UNIT_SLUG}} - URL-friendly unit name (smart-ledger, month-end-wizard)
{{SECTION_NAME}} - Section name (Introduction, Concepts, etc.)
{{SECTION_NUMBER}} - Section number (1-6)
{{SARAH_SCENARIO}} - Sarah's business challenge description
{{MAIN_CONCEPT}} - Primary learning concept
{{MODEL_FOCUS}} - Excel model building focus
{{PRESET_TYPE}} - Spreadsheet simulator preset
{{SIMULATION_TYPE}} - Business simulation type
{{BUSINESS_CONTEXT}} - Real-world scenario context
{{NEXT_UNIT_PREVIEW}} - Preview of next unit
{{DRIVING_QUESTION}} - Unit's central question
{{ESTIMATED_TIME}} - Section completion time
```

### Standard Section Header Template
```html
<header class="section-header">
    <div class="section-meta">
        <span class="section-number">Section {{SECTION_NUMBER}}</span>
        <span class="estimated-time">⏱️ {{ESTIMATED_TIME}} minutes</span>
    </div>
    <h1>{{SECTION_TITLE}}</h1>
    <p class="lead">
        {{SECTION_DESCRIPTION}}
    </p>
</header>
```

### Standard Interactive Component Integration
```html
<!-- Spreadsheet Simulator -->
<div class="spreadsheet-simulator-container" 
     data-preset="{{PRESET_TYPE}}" 
     data-rows="{{ROW_COUNT}}" 
     data-cols="{{COL_COUNT}}">
</div>

<!-- Financial Calculator -->
<div class="{{CALCULATOR_TYPE}}-calculator-container"></div>

<!-- Data Visualization -->
<div class="chart-container" 
     data-chart-type="{{CHART_TYPE}}" 
     data-chart-id="{{CHART_ID}}">
</div>

<!-- Drag-Drop Exercise -->
<div class="drag-drop-exercise" 
     data-type="{{EXERCISE_TYPE}}" 
     data-id="{{EXERCISE_ID}}">
</div>

<!-- Business Simulation -->
<div class="business-simulation" 
     data-type="{{SIMULATION_TYPE}}" 
     data-id="{{SIMULATION_ID}}">
</div>
```

### Standard JavaScript Template
```javascript
// Store simulator references
let simulators = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Award section start points
    if (window.Gamification) {
        setTimeout(() => {
            window.Gamification.awardPoints(25, 'Started {{SECTION_NAME}}');
        }, 1000);
    }
    
    // Get simulator references
    setTimeout(() => {
        const containers = document.querySelectorAll('.spreadsheet-simulator-container');
        containers.forEach((container, index) => {
            if (container.spreadsheetSimulator) {
                simulators[index] = container.spreadsheetSimulator;
            }
        });
    }, 2000);
    
    console.log('Unit {{UNIT_NUMBER}} {{SECTION_NAME}} loaded successfully');
});

// Section-specific functions will be generated based on section type

// Standard comprehension check
function checkAnswers() {
    const answers = {{ANSWERS_OBJECT}};
    const explanations = {{EXPLANATIONS_OBJECT}};
    
    let allCorrect = true;
    
    Object.keys(answers).forEach(questionId => {
        const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
        const feedback = document.getElementById(`feedback-${questionId}`);
        
        if (selectedOption) {
            const isCorrect = selectedOption.value === answers[questionId];
            if (!isCorrect) allCorrect = false;
            
            feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
            feedback.textContent = isCorrect ? 
                explanations[questionId].correct : 
                explanations[questionId].incorrect;
        } else {
            allCorrect = false;
            feedback.className = 'feedback show incorrect';
            feedback.textContent = 'Please select an answer.';
        }
    });
    
    // Award points
    if (window.Gamification) {
        const points = allCorrect ? 50 : 25;
        const reason = allCorrect ? 'Perfect score on {{SECTION_NAME}} quiz!' : 'Completed {{SECTION_NAME}} quiz';
        window.Gamification.awardPoints(points, reason);
    }
}
```

## Usage Examples

### Create Unit 2 Introduction
```
/intro 02 "Month-End Wizard" "Sarah needs to close her first month properly for investor reporting, but TechStart's transactions are getting complex with accruals, deferrals, and adjusting entries"
```

### Create Unit 3 Excel Model  
```
/excel-model 03 "Three-Statement Storyboard" "integrated financial statements" "basic"
```

### Create Unit 4 Examples
```
/examples 04 "Data-Driven Cafe" "TechStart opens a coffee shop to test their point-of-sale analytics software"
```

## Implementation Strategy

1. **Create template processor** that replaces variables with actual values
2. **Build section-specific generators** for different interactive components
3. **Validate against framework** requirements automatically
4. **Generate complete file structure** with proper navigation
5. **Include all required dependencies** and styling
6. **Test interactive components** for proper integration
7. **Generate teacher materials** and documentation

## Benefits

- **95% time reduction** in section creation
- **100% consistency** across all units
- **Zero framework violations** - all requirements automatically included
- **Complete interactive integration** - all components properly configured
- **Immediate development readiness** - fully functional sections generated
- **Scalable for all 8 units** - same commands work for every unit

These commands will transform our development workflow from hours per section to minutes per section while maintaining the high quality and consistency we've established.

---

## Component-First Development Workflow

### Complete Development Sequence

The following workflow prevents component amnesia and ensures systematic quality:

#### Phase 1: Component Validation (MANDATORY)
```bash
# Test all components before any lesson creation
/test-component all

# Test specific components if creating targeted activities
/test-component spreadsheet ledger
/test-component calculator npv
/test-component dragdrop account-categorization
```

#### Phase 2: Gamification Design
```bash
# Design appropriate gamification for the planned activity
/integrate-gamification concept-practice "Calculate NPV for investment decisions" calculator,visualization
/integrate-gamification skill-building "Create professional income statement" spreadsheet,dragdrop
/integrate-gamification simulation "Optimize business profitability" simulation,spreadsheet
```

#### Phase 3: Lesson Content Creation
```bash
# Create lesson sections using tested components
/intro 02 "Month-End Wizard" "Sarah needs to close her first month properly..."
/concepts 02 "Month-End Wizard" "accrual accounting and adjusting entries"
/excel-model 02 "Month-End Wizard" "adjusting entries" "calculator"
/examples 02 "Month-End Wizard" "TechStart's first month-end closing"
/exercises 02 "Month-End Wizard" "month-end-simulation"  
/summary 02 "Month-End Wizard" "financial statement preparation"
```

#### Phase 4: Final Validation (MANDATORY)
```bash
# Validate each section before student deployment
/validate-activity html/units/unit02-month-end-wizard/intro.html comprehensive
/validate-activity html/units/unit02-month-end-wizard/concepts.html comprehensive
/validate-activity html/units/unit02-month-end-wizard/excel-model.html comprehensive
/validate-activity html/units/unit02-month-end-wizard/examples.html comprehensive
/validate-activity html/units/unit02-month-end-wizard/exercises.html comprehensive
/validate-activity html/units/unit02-month-end-wizard/summary.html comprehensive

# Or validate entire unit at once
/validate-activity html/units/unit02-month-end-wizard/ production-ready
```

### Quality Gates and Checkpoints

#### Gate 1: Component Readiness ✅
- All components pass debug test suite
- Performance meets standards (<3s load, <500ms response)
- Gamification integration functional
- **BLOCKER**: Cannot proceed to lesson creation without passing

#### Gate 2: Integration Design ✅  
- Gamification design supports learning objectives
- Point structures educationally meaningful
- Achievement patterns appropriate for activity type
- **BLOCKER**: Cannot implement without approved integration plan

#### Gate 3: Content Quality ✅
- Lesson content uses only tested components
- Educational objectives clearly supported
- Interactive elements properly configured
- **BLOCKER**: Cannot deploy without content validation

#### Gate 4: Deployment Readiness ✅
- Complete validation passes all quality checks
- Cross-browser compatibility verified
- Performance benchmarks met
- **BLOCKER**: Student access blocked until validation approval

### Emergency Procedures

#### Component Failure in Production
```bash
# Immediate assessment
/test-component [failed-component] 
/validate-activity [affected-lesson] basic

# Root cause analysis and fix validation
/test-component [fixed-component]
/validate-activity [affected-lesson] comprehensive
```

#### New Component Requirements
```bash
# Verify existing components cannot meet need
/test-component all
# Review COMPONENT-INTEGRATION-WORKFLOW.md decision tree
# Document justification for new component creation
# Follow new component creation protocol in workflow document
```

### Success Metrics

#### Component Amnesia Prevention
- **95%+ activities use existing tested components**
- **Zero component-related bugs in student lessons**
- **100% compliance with component-first workflow**
- **Sub-3-second load times for all interactive elements**

#### Gamification Integration Quality
- **100% of activities have educational (not decorative) gamification**
- **Consistent point structures across similar activity types**
- **Achievement unlock rates between 60-80% (meaningful but achievable)**
- **Student engagement increases 25% vs non-gamified content**

#### Development Efficiency
- **Time to create new activities reduced 75%**
- **Bug reports decreased 90% through systematic testing**
- **Developer onboarding time reduced 60% through clear workflow**
- **Maintenance overhead reduced 50% through component standardization**

---

## Command Dependencies and Integration

### Required Files and Systems
- **Debug Test Suite**: `html/debug/` directory with all test pages
- **Gamification System**: `html/assets/js/gamification.js` and related files
- **Component Library**: All interactive components in `html/assets/js/`
- **Documentation**: COMPONENT-INTEGRATION-WORKFLOW.md, GAMIFICATION-INTEGRATION-STRATEGY.md

### Cross-Command Data Flow
1. `/test-component` → Validates readiness → Enables `/integrate-gamification`
2. `/integrate-gamification` → Designs system → Enables unit creation commands
3. Unit creation commands → Generate content → Requires `/validate-activity`
4. `/validate-activity` → Approves deployment → Enables student access

### Continuous Improvement Loop
- Student engagement data feeds back to gamification design refinement
- Performance monitoring identifies component optimization opportunities
- Bug reports trigger component testing improvements
- Educational effectiveness data drives component enhancement priorities