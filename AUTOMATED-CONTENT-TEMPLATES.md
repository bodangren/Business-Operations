# Automated Content Templates
**Math for Business Operations: Master Templates for LLM Content Generation**

*Version 1.0 - Comprehensive templates with placeholders for automated content generation*

---

## Table of Contents

1. [Template System Overview](#template-system-overview)
2. [Master Page Template Structure](#master-page-template-structure)
3. [Section-Specific Templates](#section-specific-templates)
4. [Component Integration Templates](#component-integration-templates)
5. [Content Placeholder System](#content-placeholder-system)
6. [Variable Substitution Rules](#variable-substitution-rules)

---

## Template System Overview

### Template Hierarchy
The template system follows a hierarchical structure:

1. **Master Page Template** - Base HTML structure for all pages
2. **Section-Specific Templates** - Customized layouts for each section type
3. **Component Templates** - Reusable interactive component blocks
4. **Content Blocks** - Modular content pieces with placeholders

### Placeholder Conventions
- `{{VARIABLE_NAME}}` - Single value substitution
- `{{#SECTION}}...{{/SECTION}}` - Conditional content blocks
- `{{>TEMPLATE_NAME}}` - Template inclusion
- `<!-- CONTENT_BLOCK: Name -->` - Content insertion points

---

## Master Page Template Structure

### Base HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{SECTION_TITLE}} | {{UNIT_TITLE}} | Math for Business Operations</title>
    
    <!-- CSS Imports -->
    <link rel="stylesheet" href="../../assets/css/main.css">
    <link rel="stylesheet" href="../../assets/css/textbook.css">
    <link rel="stylesheet" href="../../assets/css/callouts.css">
    {{#PRINT_VERSION}}
    <link rel="stylesheet" href="../../assets/css/print.css">
    {{/PRINT_VERSION}}
    
    <!-- Meta Description -->
    <meta name="description" content="{{META_DESCRIPTION}}">
    
    <!-- Educational Context -->
    <meta name="unit-number" content="{{UNIT_NUMBER}}">
    <meta name="section-type" content="{{SECTION_TYPE}}">
    <meta name="estimated-time" content="{{ESTIMATED_TIME}}">
</head>
<body>
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    {{>HEADER_COMPONENT}}
    
    {{>BREADCRUMB_COMPONENT}}
    
    <!-- Main content -->
    <main id="main-content" class="main-content">
        <div class="container">
            <div class="content-wrapper">
                <!-- Main content area -->
                <div class="main-content-area reading-width">
                    
                    {{>SECTION_HEADER_COMPONENT}}
                    
                    <!-- CONTENT_BLOCK: Main Section Content -->
                    {{MAIN_CONTENT}}
                    <!-- END_CONTENT_BLOCK -->
                    
                    {{>NAVIGATION_COMPONENT}}
                    
                    {{#PRINT_VERSION_TOGGLE}}
                    {{>PRINT_BUTTON_COMPONENT}}
                    {{/PRINT_VERSION_TOGGLE}}
                    
                </div>
                
                {{>SIDEBAR_COMPONENT}}
                
            </div>
        </div>
    </main>
    
    {{>FOOTER_COMPONENT}}
    
    <!-- JavaScript Loading -->
    {{>CORE_SCRIPTS_COMPONENT}}
    
    {{#SECTION_SCRIPTS}}
    {{>SECTION_SPECIFIC_SCRIPTS}}
    {{/SECTION_SCRIPTS}}
    
    <!-- Print Version Generation Script -->
    {{#PRINT_VERSION_AVAILABLE}}
    <script src="../../assets/js/print-generator.js"></script>
    {{/PRINT_VERSION_AVAILABLE}}
    
</body>
</html>
```

---

## Section-Specific Templates

### Introduction Template (intro.html)

```html
<!-- TEMPLATE: Unit Introduction Section -->

<!-- Section header -->
<header class="section-header">
    <div class="section-meta">
        <span class="section-number">Section 1</span>
        <span class="estimated-time">⏱️ {{ESTIMATED_TIME}} minutes</span>
    </div>
    <h1>{{SECTION_TITLE}}</h1>
    <p class="lead">{{SECTION_LEAD_DESCRIPTION}}</p>
</header>

<!-- Sarah's Challenge Introduction -->
<section id="sarahs-challenge">
    <h2>🚀 Sarah's New Challenge</h2>
    
    <div class="story-container">
        <div class="story-image">
            <img src="{{SARAH_CHALLENGE_IMAGE}}" 
                 alt="{{SARAH_CHALLENGE_IMAGE_ALT}}"
                 class="story-illustration">
        </div>
        
        <div class="story-content">
            <h3>{{SARAH_BUSINESS_CONTEXT_TITLE}}</h3>
            
            <!-- CONTENT_BLOCK: Sarah's Current Situation -->
            <div class="business-context">
                <div class="context-item">
                    <strong>Timeline:</strong> {{SARAH_TIMELINE}}
                </div>
                <div class="context-item">
                    <strong>Business Stage:</strong> {{SARAH_BUSINESS_STAGE}}
                </div>
                <div class="context-item">
                    <strong>Current Challenge:</strong> {{SARAH_CURRENT_CHALLENGE}}
                </div>
                <div class="context-item">
                    <strong>Financial Context:</strong> {{SARAH_FINANCIAL_CONTEXT}}
                </div>
            </div>
            <!-- END_CONTENT_BLOCK -->
            
            <div class="callout callout-important">
                <h4>Why This Matters</h4>
                <p>{{LEARNING_CATALYST_EXPLANATION}}</p>
            </div>
        </div>
    </div>
</section>

<!-- Driving Question -->
<section id="driving-question">
    <h2>🎯 The Driving Question</h2>
    
    <div class="driving-question-container">
        <blockquote class="driving-question">
            {{DRIVING_QUESTION}}
        </blockquote>
        
        <div class="question-context">
            <p>{{DRIVING_QUESTION_CONTEXT}}</p>
        </div>
    </div>
</section>

<!-- Entry Event -->
<section id="entry-event">
    <h2>🎬 Entry Event</h2>
    
    <div class="entry-event-container">
        <!-- CONTENT_BLOCK: Entry Event Media -->
        {{#VIDEO_CONTENT}}
        <div class="video-container">
            <div class="video-placeholder" data-video-url="{{VIDEO_URL}}">
                <img src="{{VIDEO_THUMBNAIL}}" alt="{{VIDEO_ALT_TEXT}}">
                <div class="play-button">▶️ {{VIDEO_TITLE}}</div>
            </div>
        </div>
        {{/VIDEO_CONTENT}}
        
        {{#INTERACTIVE_ACTIVITY}}
        <div class="entry-activity-container" data-activity-type="{{ACTIVITY_TYPE}}">
            {{ACTIVITY_CONTENT}}
        </div>
        {{/INTERACTIVE_ACTIVITY}}
        <!-- END_CONTENT_BLOCK -->
        
        <div class="entry-event-description">
            {{ENTRY_EVENT_DESCRIPTION}}
        </div>
    </div>
</section>

<!-- Learning Objectives -->
<section id="learning-objectives">
    <h2>📚 What You'll Learn</h2>
    
    <div class="objectives-container">
        <div class="objectives-section">
            <h3>Business & Accounting Concepts</h3>
            <ul class="objectives-list">
                {{#CONTENT_OBJECTIVES}}
                <li>{{.}}</li>
                {{/CONTENT_OBJECTIVES}}
            </ul>
        </div>
        
        <div class="objectives-section">
            <h3>Excel & Technical Skills</h3>
            <ul class="objectives-list">
                {{#EXCEL_OBJECTIVES}}
                <li>{{.}}</li>
                {{/EXCEL_OBJECTIVES}}
            </ul>
        </div>
    </div>
</section>

<!-- Key Vocabulary -->
<section id="key-vocabulary">
    <h2>📖 Key Vocabulary</h2>
    
    <div class="vocabulary-grid">
        {{#VOCABULARY_TERMS}}
        <div class="vocabulary-card">
            <h4>{{TERM}}</h4>
            <p>{{DEFINITION}}</p>
            {{#BUSINESS_CONTEXT}}
            <div class="business-context">
                <strong>In Sarah's Business:</strong> {{.}}
            </div>
            {{/BUSINESS_CONTEXT}}
        </div>
        {{/VOCABULARY_TERMS}}
    </div>
</section>

<!-- Unit Preview -->
<section id="unit-preview">
    <h2>🗺️ Journey Ahead</h2>
    
    <div class="journey-container">
        <div class="journey-intro">
            <p>{{UNIT_PREVIEW_INTRO}}</p>
        </div>
        
        <div class="journey-steps">
            {{#SECTION_PREVIEWS}}
            <div class="journey-step">
                <div class="step-number">{{STEP_NUMBER}}</div>
                <div class="step-content">
                    <h4>{{STEP_TITLE}}</h4>
                    <p>{{STEP_DESCRIPTION}}</p>
                </div>
            </div>
            {{/SECTION_PREVIEWS}}
        </div>
    </div>
</section>

<!-- Comprehension Check -->
<section id="comprehension-check">
    <h2>🎯 Check Your Understanding</h2>
    
    <!-- CONTENT_BLOCK: Comprehension Questions -->
    <div class="comprehension-check">
        {{#COMPREHENSION_QUESTIONS}}
        <div class="question" data-points="{{POINTS}}">
            <h4>Question {{QUESTION_NUMBER}}: {{QUESTION_TEXT}}</h4>
            
            {{#MULTIPLE_CHOICE}}
            <ul class="question-options">
                {{#OPTIONS}}
                <li>
                    <label>
                        <input type="radio" name="q{{QUESTION_NUMBER}}" value="{{OPTION_VALUE}}">
                        {{OPTION_TEXT}}
                    </label>
                </li>
                {{/OPTIONS}}
            </ul>
            {{/MULTIPLE_CHOICE}}
            
            {{#SHORT_ANSWER}}
            <textarea name="q{{QUESTION_NUMBER}}" placeholder="{{PLACEHOLDER_TEXT}}"></textarea>
            {{/SHORT_ANSWER}}
            
            <div class="feedback" id="feedback-q{{QUESTION_NUMBER}}"></div>
        </div>
        {{/COMPREHENSION_QUESTIONS}}
        
        <button onclick="{{CHECK_ANSWERS_FUNCTION}}" class="btn btn-primary">
            Check Answers
        </button>
    </div>
    <!-- END_CONTENT_BLOCK -->
</section>

<!-- Points Tracking -->
<div class="section-points" data-section="intro" data-total-points="{{TOTAL_SECTION_POINTS}}">
    <span class="points-available">{{TOTAL_SECTION_POINTS}} points available</span>
</div>
```

### Concepts Template (concepts.html)

```html
<!-- TEMPLATE: Unit Concepts Section -->

<!-- Section header -->
<header class="section-header">
    <div class="section-meta">
        <span class="section-number">Section 2</span>
        <span class="estimated-time">⏱️ {{ESTIMATED_TIME}} minutes</span>
    </div>
    <h1>{{SECTION_TITLE}}</h1>
    <p class="lead">{{SECTION_LEAD_DESCRIPTION}}</p>
</header>

<!-- Quick Recap -->
<section id="recap">
    <h2>🔄 Where We Left Off</h2>
    
    <div class="recap-container">
        <div class="recap-image">
            <img src="{{RECAP_IMAGE}}" 
                 alt="{{RECAP_IMAGE_ALT}}"
                 class="recap-illustration">
        </div>
        
        <div class="recap-text">
            <h3>{{RECAP_TITLE}}</h3>
            <ul>
                {{#RECAP_POINTS}}
                <li>{{.}}</li>
                {{/RECAP_POINTS}}
            </ul>
            
            <div class="callout callout-tip">
                <h4>Today's Goal</h4>
                <p>{{TODAYS_GOAL}}</p>
            </div>
        </div>
    </div>
</section>

<!-- Core Concepts Development -->
{{#CONCEPT_SECTIONS}}
<section id="concept-{{CONCEPT_ID}}">
    <h2>{{CONCEPT_ICON}} {{CONCEPT_TITLE}}</h2>
    
    <!-- Theory Introduction -->
    <div class="concept-introduction">
        {{CONCEPT_INTRODUCTION}}
    </div>
    
    <!-- Interactive Theory Explorer -->
    {{#INTERACTIVE_COMPONENT}}
    <div class="theory-explorer-container" 
         data-component-type="{{COMPONENT_TYPE}}"
         data-concept-id="{{CONCEPT_ID}}">
        <!-- CONTENT_BLOCK: Interactive Component -->
        {{COMPONENT_HTML}}
        <!-- END_CONTENT_BLOCK -->
    </div>
    {{/INTERACTIVE_COMPONENT}}
    
    <!-- Business Application -->
    <div class="business-application">
        <h3>📊 In Sarah's Business</h3>
        <div class="business-example">
            {{BUSINESS_APPLICATION_CONTENT}}
        </div>
        
        {{#FINANCIAL_EXAMPLE}}
        <div class="financial-example">
            <h4>Real Numbers Example</h4>
            {{FINANCIAL_EXAMPLE_CONTENT}}
        </div>
        {{/FINANCIAL_EXAMPLE}}
    </div>
    
    <!-- Mathematical Relationships -->
    {{#MATHEMATICAL_CONCEPTS}}
    <div class="mathematical-relationships">
        <h3>🧮 The Math Behind It</h3>
        
        <div class="formula-container">
            <div class="formula-block">
                <div class="formula">{{FORMULA}}</div>
                <div class="formula-explanation">{{FORMULA_EXPLANATION}}</div>
            </div>
            
            {{#WORKED_EXAMPLE}}
            <div class="worked-example">
                <h4>Worked Example</h4>
                {{WORKED_EXAMPLE_CONTENT}}
            </div>
            {{/WORKED_EXAMPLE}}
        </div>
    </div>
    {{/MATHEMATICAL_CONCEPTS}}
    
    <!-- Step-by-Step Process -->
    {{#PROCESS_STEPS}}
    <div class="process-steps">
        <h3>📝 Step-by-Step Process</h3>
        
        <div class="steps-container">
            {{#STEPS}}
            <div class="step">
                <div class="step-number">{{STEP_NUMBER}}</div>
                <div class="step-content">
                    <h4>{{STEP_TITLE}}</h4>
                    <p>{{STEP_DESCRIPTION}}</p>
                    
                    {{#STEP_EXAMPLE}}
                    <div class="step-example">
                        <strong>Example:</strong> {{.}}
                    </div>
                    {{/STEP_EXAMPLE}}
                </div>
            </div>
            {{/STEPS}}
        </div>
    </div>
    {{/PROCESS_STEPS}}
    
    <!-- Common Mistakes -->
    {{#COMMON_MISTAKES}}
    <div class="callout callout-warning">
        <h4>⚠️ Common Mistakes to Avoid</h4>
        <ul>
            {{#MISTAKES}}
            <li><strong>{{MISTAKE}}:</strong> {{EXPLANATION}}</li>
            {{/MISTAKES}}
        </ul>
    </div>
    {{/COMMON_MISTAKES}}
    
    <!-- Knowledge Check -->
    <div class="knowledge-check" data-concept="{{CONCEPT_ID}}">
        <h3>🎯 Quick Check</h3>
        
        <!-- CONTENT_BLOCK: Concept Check Questions -->
        <div class="mini-quiz">
            {{#CHECK_QUESTIONS}}
            <div class="check-question" data-points="{{POINTS}}">
                <p>{{QUESTION_TEXT}}</p>
                
                {{#QUESTION_TYPE_MULTIPLE_CHOICE}}
                <ul class="check-options">
                    {{#OPTIONS}}
                    <li>
                        <label>
                            <input type="radio" name="check_{{CONCEPT_ID}}_{{QUESTION_ID}}" value="{{VALUE}}">
                            {{TEXT}}
                        </label>
                    </li>
                    {{/OPTIONS}}
                </ul>
                {{/QUESTION_TYPE_MULTIPLE_CHOICE}}
                
                {{#QUESTION_TYPE_DRAG_DROP}}
                <div class="drag-drop-check" data-check-id="{{QUESTION_ID}}">
                    {{DRAG_DROP_HTML}}
                </div>
                {{/QUESTION_TYPE_DRAG_DROP}}
                
                <div class="check-feedback" id="feedback_{{CONCEPT_ID}}_{{QUESTION_ID}}"></div>
            </div>
            {{/CHECK_QUESTIONS}}
            
            <button onclick="checkConceptUnderstanding('{{CONCEPT_ID}}')" class="btn btn-primary">
                Check My Understanding
            </button>
        </div>
        <!-- END_CONTENT_BLOCK -->
    </div>
</section>
{{/CONCEPT_SECTIONS}}

<!-- Concept Integration -->
<section id="concept-integration">
    <h2>🔗 Putting It All Together</h2>
    
    <div class="integration-container">
        <div class="integration-intro">
            <p>{{INTEGRATION_INTRODUCTION}}</p>
        </div>
        
        <!-- Concept Relationships Diagram -->
        {{#CONCEPT_RELATIONSHIPS}}
        <div class="concept-map">
            <h3>How These Concepts Connect</h3>
            
            <!-- CONTENT_BLOCK: Interactive Concept Map -->
            <div class="concept-relationship-diagram" data-diagram-type="{{DIAGRAM_TYPE}}">
                {{CONCEPT_MAP_HTML}}
            </div>
            <!-- END_CONTENT_BLOCK -->
        </div>
        {{/CONCEPT_RELATIONSHIPS}}
        
        <!-- Real-World Application -->
        <div class="real-world-application">
            <h3>🌍 Real-World Application</h3>
            
            <div class="application-scenario">
                {{REAL_WORLD_SCENARIO}}
            </div>
            
            {{#APPLICATION_QUESTIONS}}
            <div class="application-questions">
                <h4>Think About It</h4>
                <ul>
                    {{#QUESTIONS}}
                    <li>{{.}}</li>
                    {{/QUESTIONS}}
                </ul>
            </div>
            {{/APPLICATION_QUESTIONS}}
        </div>
    </div>
</section>

<!-- Section Summary -->
<section id="concept-summary">
    <h2>📝 Key Takeaways</h2>
    
    <div class="takeaways-container">
        <div class="takeaway-cards">
            {{#KEY_TAKEAWAYS}}
            <div class="takeaway-card">
                <div class="takeaway-icon">{{ICON}}</div>
                <div class="takeaway-content">
                    <h4>{{TITLE}}</h4>
                    <p>{{DESCRIPTION}}</p>
                </div>
            </div>
            {{/KEY_TAKEAWAYS}}
        </div>
        
        <div class="next-steps">
            <h3>🚀 Ready for Action</h3>
            <p>{{NEXT_STEPS_DESCRIPTION}}</p>
            
            <div class="callout callout-success">
                <h4>Coming Up Next</h4>
                <p>{{NEXT_SECTION_PREVIEW}}</p>
            </div>
        </div>
    </div>
</section>

<!-- Points Tracking -->
<div class="section-points" data-section="concepts" data-total-points="{{TOTAL_SECTION_POINTS}}">
    <span class="points-available">{{TOTAL_SECTION_POINTS}} points available</span>
</div>
```

### Excel Model Template (excel-model.html)

```html
<!-- TEMPLATE: Excel Model Building Section -->

<!-- Section header -->
<header class="section-header">
    <div class="section-meta">
        <span class="section-number">Section 3</span>
        <span class="estimated-time">⏱️ {{ESTIMATED_TIME}} minutes</span>
    </div>
    <h1>{{SECTION_TITLE}}</h1>
    <p class="lead">{{SECTION_LEAD_DESCRIPTION}}</p>
</header>

<!-- Model Overview -->
<section id="model-overview">
    <h2>🏗️ What We're Building</h2>
    
    <div class="model-overview-container">
        <div class="model-description">
            <h3>{{MODEL_TITLE}}</h3>
            <p>{{MODEL_DESCRIPTION}}</p>
            
            <div class="model-goals">
                <h4>🎯 Model Goals</h4>
                <ul>
                    {{#MODEL_GOALS}}
                    <li>{{.}}</li>
                    {{/MODEL_GOALS}}
                </ul>
            </div>
        </div>
        
        <div class="model-preview">
            <img src="{{MODEL_PREVIEW_IMAGE}}" 
                 alt="{{MODEL_PREVIEW_ALT}}"
                 class="model-preview-image">
        </div>
    </div>
    
    <!-- Sarah's Business Context -->
    <div class="business-context">
        <h3>📊 Sarah's Current Situation</h3>
        <div class="context-details">
            {{SARAH_BUSINESS_CONTEXT}}
        </div>
        
        <div class="callout callout-important">
            <h4>Why This Model Matters</h4>
            <p>{{MODEL_BUSINESS_JUSTIFICATION}}</p>
        </div>
    </div>
</section>

<!-- Setup and Preparation -->
<section id="model-setup">
    <h2>⚙️ Setup and Preparation</h2>
    
    <div class="setup-container">
        <!-- Data Requirements -->
        <div class="data-requirements">
            <h3>📋 Data We'll Need</h3>
            
            <div class="data-sources">
                {{#DATA_SOURCES}}
                <div class="data-source">
                    <h4>{{SOURCE_NAME}}</h4>
                    <p>{{SOURCE_DESCRIPTION}}</p>
                    
                    {{#SAMPLE_DATA}}
                    <div class="sample-data">
                        <h5>Sample Data:</h5>
                        <div class="data-preview">
                            {{SAMPLE_DATA_DISPLAY}}
                        </div>
                    </div>
                    {{/SAMPLE_DATA}}
                </div>
                {{/DATA_SOURCES}}
            </div>
        </div>
        
        <!-- Excel Skills Review -->
        <div class="skills-review">
            <h3>🔧 Excel Skills We'll Use</h3>
            
            <div class="skills-grid">
                {{#EXCEL_SKILLS}}
                <div class="skill-card">
                    <div class="skill-icon">{{ICON}}</div>
                    <div class="skill-content">
                        <h4>{{SKILL_NAME}}</h4>
                        <p>{{SKILL_DESCRIPTION}}</p>
                        
                        {{#SKILL_REMINDER}}
                        <div class="skill-reminder">
                            <strong>Quick Reminder:</strong> {{.}}
                        </div>
                        {{/SKILL_REMINDER}}
                    </div>
                </div>
                {{/EXCEL_SKILLS}}
            </div>
        </div>
    </div>
</section>

<!-- Step-by-Step Construction -->
{{#CONSTRUCTION_PHASES}}
<section id="phase-{{PHASE_ID}}">
    <h2>{{PHASE_ICON}} Phase {{PHASE_NUMBER}}: {{PHASE_TITLE}}</h2>
    
    <div class="phase-introduction">
        {{PHASE_DESCRIPTION}}
    </div>
    
    <!-- Interactive Spreadsheet Builder -->
    <div class="spreadsheet-builder-container">
        <!-- CONTENT_BLOCK: Spreadsheet Simulator -->
        <div class="spreadsheet-simulator-container" 
             data-preset="{{SPREADSHEET_PRESET}}"
             data-phase="{{PHASE_ID}}"
             data-points="{{PHASE_POINTS}}">
            
            {{#GUIDED_SETUP}}
            <div class="guided-setup">
                <h4>🎯 Your Task</h4>
                <p>{{TASK_DESCRIPTION}}</p>
                
                <div class="task-steps">
                    {{#SETUP_STEPS}}
                    <div class="setup-step">
                        <div class="step-number">{{STEP_NUMBER}}</div>
                        <div class="step-instruction">{{STEP_INSTRUCTION}}</div>
                        
                        {{#STEP_HINT}}
                        <div class="step-hint">
                            <strong>💡 Hint:</strong> {{.}}
                        </div>
                        {{/STEP_HINT}}
                    </div>
                    {{/SETUP_STEPS}}
                </div>
            </div>
            {{/GUIDED_SETUP}}
            
            <!-- Actual spreadsheet simulator component -->
            <div class="spreadsheet-simulator" data-config="{{SIMULATOR_CONFIG}}">
                <!-- This will be populated by the spreadsheet simulator component -->
            </div>
            
            {{#SUCCESS_CRITERIA}}
            <div class="success-criteria">
                <h4>✅ Success Criteria</h4>
                <ul class="criteria-list">
                    {{#CRITERIA}}
                    <li data-criteria-id="{{ID}}">{{DESCRIPTION}}</li>
                    {{/CRITERIA}}
                </ul>
            </div>
            {{/SUCCESS_CRITERIA}}
        </div>
        <!-- END_CONTENT_BLOCK -->
    </div>
    
    <!-- Formula Deep Dive -->
    {{#FORMULA_EXPLANATIONS}}
    <div class="formula-deep-dive">
        <h3>🧮 Formula Deep Dive</h3>
        
        <div class="formula-sections">
            {{#FORMULAS}}
            <div class="formula-section">
                <h4>{{FORMULA_NAME}}</h4>
                
                <div class="formula-display">
                    <code>{{FORMULA_SYNTAX}}</code>
                </div>
                
                <div class="formula-explanation">
                    <p>{{FORMULA_EXPLANATION}}</p>
                    
                    {{#FORMULA_BREAKDOWN}}
                    <div class="formula-breakdown">
                        <h5>Breaking It Down:</h5>
                        <ul>
                            {{#BREAKDOWN_PARTS}}
                            <li><code>{{PART}}</code> - {{EXPLANATION}}</li>
                            {{/BREAKDOWN_PARTS}}
                        </ul>
                    </div>
                    {{/FORMULA_BREAKDOWN}}
                </div>
                
                {{#BUSINESS_CONTEXT}}
                <div class="formula-business-context">
                    <h5>📊 Business Context</h5>
                    <p>{{.}}</p>
                </div>
                {{/BUSINESS_CONTEXT}}
            </div>
            {{/FORMULAS}}
        </div>
    </div>
    {{/FORMULA_EXPLANATIONS}}
    
    <!-- Validation and Testing -->
    {{#VALIDATION_STEPS}}
    <div class="validation-section">
        <h3>🔍 Testing Your Work</h3>
        
        <div class="validation-steps">
            {{#VALIDATION_TESTS}}
            <div class="validation-test">
                <h4>Test {{TEST_NUMBER}}: {{TEST_NAME}}</h4>
                <p>{{TEST_DESCRIPTION}}</p>
                
                <div class="test-steps">
                    {{#TEST_STEPS}}
                    <div class="test-step">
                        <span class="step-number">{{STEP_NUMBER}}</span>
                        <span class="step-instruction">{{STEP_INSTRUCTION}}</span>
                        
                        {{#EXPECTED_RESULT}}
                        <div class="expected-result">
                            <strong>Expected Result:</strong> {{.}}
                        </div>
                        {{/EXPECTED_RESULT}}
                    </div>
                    {{/TEST_STEPS}}
                </div>
            </div>
            {{/VALIDATION_TESTS}}
        </div>
    </div>
    {{/VALIDATION_STEPS}}
    
    <!-- Troubleshooting Guide -->
    {{#TROUBLESHOOTING}}
    <div class="troubleshooting-guide">
        <h3>🔧 Troubleshooting Common Issues</h3>
        
        <div class="troubleshooting-items">
            {{#COMMON_ISSUES}}
            <div class="troubleshooting-item">
                <div class="issue-symptom">
                    <h4>❌ {{SYMPTOM}}</h4>
                </div>
                <div class="issue-solution">
                    <h5>✅ Solution:</h5>
                    <p>{{SOLUTION}}</p>
                    
                    {{#PREVENTION_TIP}}
                    <div class="prevention-tip">
                        <strong>💡 Prevention:</strong> {{.}}
                    </div>
                    {{/PREVENTION_TIP}}
                </div>
            </div>
            {{/COMMON_ISSUES}}
        </div>
    </div>
    {{/TROUBLESHOOTING}}
</section>
{{/CONSTRUCTION_PHASES}}

<!-- Model Integration -->
<section id="model-integration">
    <h2>🔗 Bringing It All Together</h2>
    
    <div class="integration-container">
        <div class="integration-overview">
            <h3>📊 Complete Model Overview</h3>
            <p>{{INTEGRATION_DESCRIPTION}}</p>
        </div>
        
        <!-- Final Model Demo -->
        <div class="final-model-demo">
            <!-- CONTENT_BLOCK: Complete Model Demonstration -->
            <div class="complete-model-container" 
                 data-model-type="{{COMPLETE_MODEL_TYPE}}"
                 data-points="{{INTEGRATION_POINTS}}">
                
                <h4>🎯 Your Complete Model</h4>
                
                <!-- Complete spreadsheet simulator with all features -->
                <div class="complete-spreadsheet-simulator" 
                     data-preset="{{COMPLETE_MODEL_PRESET}}"
                     data-readonly="false">
                    <!-- Populated by spreadsheet simulator component -->
                </div>
                
                <div class="model-features">
                    <h5>✨ Model Features</h5>
                    <ul>
                        {{#MODEL_FEATURES}}
                        <li>{{.}}</li>
                        {{/MODEL_FEATURES}}
                    </ul>
                </div>
            </div>
            <!-- END_CONTENT_BLOCK -->
        </div>
        
        <!-- Business Impact Analysis -->
        <div class="business-impact">
            <h3>💼 Business Impact for Sarah</h3>
            
            <div class="impact-analysis">
                {{BUSINESS_IMPACT_DESCRIPTION}}
                
                {{#QUANTIFIED_BENEFITS}}
                <div class="quantified-benefits">
                    <h4>📈 Measurable Benefits</h4>
                    <div class="benefits-grid">
                        {{#BENEFITS}}
                        <div class="benefit-item">
                            <div class="benefit-metric">{{METRIC}}</div>
                            <div class="benefit-description">{{DESCRIPTION}}</div>
                        </div>
                        {{/BENEFITS}}
                    </div>
                </div>
                {{/QUANTIFIED_BENEFITS}}
            </div>
        </div>
    </div>
</section>

<!-- Next Steps -->
<section id="next-steps">
    <h2>🚀 Ready to Practice</h2>
    
    <div class="next-steps-container">
        <div class="achievement-summary">
            <h3>🏆 What You've Accomplished</h3>
            <ul>
                {{#ACCOMPLISHMENTS}}
                <li>{{.}}</li>
                {{/ACCOMPLISHMENTS}}
            </ul>
        </div>
        
        <div class="practice-preview">
            <h3>🎯 Coming Up Next</h3>
            <p>{{PRACTICE_PREVIEW}}</p>
            
            <div class="callout callout-success">
                <h4>Get Ready For</h4>
                <p>{{NEXT_SECTION_PREVIEW}}</p>
            </div>
        </div>
    </div>
</section>

<!-- Points Tracking -->
<div class="section-points" data-section="excel-model" data-total-points="{{TOTAL_SECTION_POINTS}}">
    <span class="points-available">{{TOTAL_SECTION_POINTS}} points available</span>
</div>
```

---

## Component Integration Templates

### Interactive Component Template

```html
<!-- TEMPLATE: Generic Interactive Component Integration -->

<div class="interactive-component-container" 
     data-component-type="{{COMPONENT_TYPE}}"
     data-component-id="{{COMPONENT_ID}}"
     data-points="{{COMPONENT_POINTS}}"
     data-required="{{REQUIRED_FOR_COMPLETION}}">
    
    <!-- Component Header -->
    <div class="component-header">
        <h3>{{COMPONENT_TITLE}}</h3>
        
        {{#COMPONENT_DESCRIPTION}}
        <p class="component-description">{{.}}</p>
        {{/COMPONENT_DESCRIPTION}}
        
        <div class="component-meta">
            {{#ESTIMATED_TIME}}
            <span class="component-time">⏱️ {{.}} minutes</span>
            {{/ESTIMATED_TIME}}
            
            {{#COMPONENT_POINTS}}
            <span class="component-points">🏆 {{.}} points</span>
            {{/COMPONENT_POINTS}}
            
            {{#DIFFICULTY_LEVEL}}
            <span class="component-difficulty difficulty-{{.}}">{{.}}</span>
            {{/DIFFICULTY_LEVEL}}
        </div>
    </div>
    
    <!-- Component Instructions -->
    {{#COMPONENT_INSTRUCTIONS}}
    <div class="component-instructions">
        <h4>📋 Instructions</h4>
        
        {{#INSTRUCTION_STEPS}}
        <div class="instruction-steps">
            {{#STEPS}}
            <div class="instruction-step">
                <span class="step-number">{{STEP_NUMBER}}</span>
                <span class="step-text">{{STEP_TEXT}}</span>
            </div>
            {{/STEPS}}
        </div>
        {{/INSTRUCTION_STEPS}}
        
        {{#INSTRUCTION_TEXT}}
        <div class="instruction-text">
            {{.}}
        </div>
        {{/INSTRUCTION_TEXT}}
    </div>
    {{/COMPONENT_INSTRUCTIONS}}
    
    <!-- Component Content Area -->
    <div class="component-content" id="component-{{COMPONENT_ID}}">
        {{COMPONENT_HTML_CONTENT}}
    </div>
    
    <!-- Component Success Criteria -->
    {{#SUCCESS_CRITERIA}}
    <div class="component-success-criteria">
        <h4>✅ Success Criteria</h4>
        <ul class="success-criteria-list">
            {{#CRITERIA}}
            <li data-criteria-id="{{CRITERIA_ID}}" class="criteria-item">
                <span class="criteria-icon">⭕</span>
                <span class="criteria-text">{{CRITERIA_TEXT}}</span>
            </li>
            {{/CRITERIA}}
        </ul>
    </div>
    {{/SUCCESS_CRITERIA}}
    
    <!-- Component Help and Hints -->
    {{#HELP_AVAILABLE}}
    <div class="component-help">
        <button class="help-toggle" onclick="toggleComponentHelp('{{COMPONENT_ID}}')">
            💡 Need Help?
        </button>
        
        <div class="help-content" id="help-{{COMPONENT_ID}}" style="display: none;">
            {{#HELP_SECTIONS}}
            <div class="help-section">
                <h5>{{HELP_TITLE}}</h5>
                <p>{{HELP_CONTENT}}</p>
                
                {{#HELP_EXAMPLE}}
                <div class="help-example">
                    <strong>Example:</strong> {{.}}
                </div>
                {{/HELP_EXAMPLE}}
            </div>
            {{/HELP_SECTIONS}}
        </div>
    </div>
    {{/HELP_AVAILABLE}}
    
    <!-- Component Feedback Area -->
    <div class="component-feedback" id="feedback-{{COMPONENT_ID}}">
        <!-- Feedback will be populated by JavaScript -->
    </div>
    
    <!-- Component Progress Indicator -->
    <div class="component-progress">
        <div class="progress-bar">
            <div class="progress-fill" id="progress-{{COMPONENT_ID}}" style="width: 0%"></div>
        </div>
        <span class="progress-text" id="progress-text-{{COMPONENT_ID}}">Ready to start</span>
    </div>
</div>

<!-- Component-Specific Scripts -->
{{#COMPONENT_SCRIPTS}}
<script>
    // Component initialization and event handlers
    {{COMPONENT_JAVASCRIPT}}
</script>
{{/COMPONENT_SCRIPTS}}
```

---

## Content Placeholder System

### Variable Categories

#### Unit-Level Variables
- `{{UNIT_NUMBER}}` - Unit number (01-08)
- `{{UNIT_TITLE}}` - Full unit title with subtitle
- `{{UNIT_SLUG}}` - URL-friendly unit identifier
- `{{UNIT_DESCRIPTION}}` - Brief unit description for meta tags
- `{{DRIVING_QUESTION}}` - Main driving question for the unit
- `{{ESTIMATED_TOTAL_TIME}}` - Total time for entire unit

#### Section-Level Variables
- `{{SECTION_TYPE}}` - Section type (intro, concepts, excel-model, examples, exercises, summary)
- `{{SECTION_TITLE}}` - Human-readable section title
- `{{SECTION_NUMBER}}` - Section number within unit
- `{{ESTIMATED_TIME}}` - Estimated time for this section
- `{{TOTAL_SECTION_POINTS}}` - Total gamification points available

#### Sarah/Business Context Variables
- `{{SARAH_TIMELINE}}` - Current business timeline (Month X-Y)
- `{{SARAH_BUSINESS_STAGE}}` - Current stage of business development
- `{{SARAH_CURRENT_CHALLENGE}}` - Specific challenge driving this unit
- `{{SARAH_FINANCIAL_CONTEXT}}` - Revenue, expenses, growth metrics
- `{{LEARNING_CATALYST}}` - Why Sarah needs these skills now

#### Content Structure Variables
- `{{META_DESCRIPTION}}` - SEO-optimized page description
- `{{BREADCRUMB_PATH}}` - Navigation breadcrumb structure
- `{{PREV_SECTION_URL}}` - Previous section navigation
- `{{NEXT_SECTION_URL}}` - Next section navigation

#### Component Integration Variables
- `{{REQUIRED_SCRIPTS}}` - JavaScript files needed for this page
- `{{REQUIRED_STYLES}}` - Additional CSS files needed
- `{{COMPONENT_CONFIG}}` - Configuration for interactive components
- `{{GAMIFICATION_CONFIG}}` - Points and achievement settings

### Conditional Content Blocks

#### Feature Flags
```html
{{#PRINT_VERSION}}
<!-- Print-specific content -->
{{/PRINT_VERSION}}

{{#INTERACTIVE_VERSION}}
<!-- Interactive-specific content -->
{{/INTERACTIVE_VERSION}}

{{#DEBUG_MODE}}
<!-- Development and testing content -->
{{/DEBUG_MODE}}

{{#MOBILE_LAYOUT}}
<!-- Mobile-optimized content -->
{{/MOBILE_LAYOUT}}
```

#### Content Type Conditionals
```html
{{#HAS_VIDEO_CONTENT}}
<div class="video-container">
    {{VIDEO_CONTENT}}
</div>
{{/HAS_VIDEO_CONTENT}}

{{#HAS_INTERACTIVE_COMPONENT}}
<div class="interactive-component">
    {{INTERACTIVE_COMPONENT}}
</div>
{{/HAS_INTERACTIVE_COMPONENT}}

{{#HAS_ASSESSMENT}}
<div class="assessment-container">
    {{ASSESSMENT_CONTENT}}
</div>
{{/HAS_ASSESSMENT}}
```

#### Difficulty Level Conditionals
```html
{{#BEGINNER_LEVEL}}
<!-- Additional scaffolding and support -->
{{/BEGINNER_LEVEL}}

{{#ADVANCED_LEVEL}}
<!-- Extension activities and challenges -->
{{/ADVANCED_LEVEL}}

{{#DIFFERENTIATION_SUPPORT}}
<!-- Alternative approaches and accommodations -->
{{/DIFFERENTIATION_SUPPORT}}
```

---

## Variable Substitution Rules

### Substitution Hierarchy
1. **Unit-specific data** from unit content files
2. **Sarah narrative context** from Sarah context file
3. **Default fallback values** for missing variables
4. **Calculated values** derived from other variables

### Content Generation Process
1. **Load unit content data** from `dev-docs/unit0X_content.md`
2. **Extract Sarah context** for appropriate timeline
3. **Apply template substitutions** in order of hierarchy
4. **Validate required variables** are present
5. **Generate component configurations** based on learning objectives
6. **Output final HTML** with all placeholders resolved

### Error Handling
- **Missing Required Variables**: Generate placeholder content with clear indicators
- **Invalid Component References**: Fall back to basic HTML content
- **Broken Template Includes**: Use default template structure
- **Validation Failures**: Mark content for manual review

---

*These comprehensive templates provide the foundation for fully automated content generation while maintaining educational quality, narrative consistency, and technical functionality across all units and sections.*