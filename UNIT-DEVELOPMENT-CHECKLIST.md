# Unit Development Quick Reference Checklist

**Use this checklist for each unit development session**

## Pre-Development Setup
- [ ] Review existing unit content in `units/unit##_*/unit##_content.md`
- [ ] Reference `INTERACTIVE-COMPONENTS.md` for component specifications
- [ ] Check `UNIT-DEVELOPMENT-FRAMEWORK.md` for detailed guidelines
- [ ] Identify which interactive components are needed for this unit

## Required Unit Structure (6 sections in order)
- [ ] **1. Introduction** (intro.html) - Entry event, driving question, objectives
- [ ] **2. Concepts** (concepts.html) - Theoretical foundation, guided instruction  
- [ ] **3. Excel Model** (excel-model.html) - Hands-on spreadsheet building
- [ ] **4. Examples** (examples.html) - Worked examples, increasing complexity
- [ ] **5. Exercises** (exercises.html) - Independent practice, varied difficulty
- [ ] **6. Summary** (summary.html) - Consolidation, reflection, next steps

## Required Interactive Components Per Section
### Introduction
- [ ] Gamification points (25 for completion)
- [ ] Entry event (video/simulation)
- [ ] Comprehension check (2-3 questions)

### Concepts  
- [ ] Spreadsheet simulator demonstrations
- [ ] Callout boxes (definitions, examples)
- [ ] Knowledge check questions

### Excel Model
- [ ] Spreadsheet simulator (appropriate preset)
- [ ] Financial calculators (if relevant)
- [ ] Data visualization (if relevant)
- [ ] Gamification points (50 for completion)

### Examples
- [ ] Financial calculators (all relevant for unit)
- [ ] Data visualization with example data
- [ ] Interactive practice opportunities

### Exercises
- [ ] Drag-and-drop exercises (at least 2 types)
- [ ] Business simulation (unit-specific)
- [ ] Multiple exercise formats
- [ ] Gamification points for completion

### Summary
- [ ] Progress tracking visuals
- [ ] Portfolio export/save functionality
- [ ] Reflection tools

## Required Files
- [ ] All 6 HTML section files created
- [ ] README.md with unit metadata
- [ ] Required CSS includes: main.css, textbook.css, callouts.css
- [ ] Required JS includes: gamification.js, exercises.js, component files

## Quality Check
- [ ] All links functional
- [ ] Images optimized with alt text
- [ ] Mobile responsive design
- [ ] Accessibility features (ARIA labels, keyboard navigation)
- [ ] Cross-browser testing completed
- [ ] Performance under 3 seconds load time

## Content Standards
- [ ] Driving question clear and compelling
- [ ] Learning objectives specific and measurable
- [ ] Math content appropriate for Grade 12 applied level
- [ ] Real-world scenarios authentic and current
- [ ] Vocabulary clearly defined
- [ ] Instructions step-by-step and clear

## Assessment Integration
- [ ] Formative assessments with immediate feedback
- [ ] Summative portfolio components identified
- [ ] Rubrics align with learning objectives
- [ ] Multiple demonstration opportunities available
- [ ] Differentiation options included

## Final Deliverables
- [ ] Complete unit with all 6 sections functional
- [ ] Teacher materials (lesson plans, rubrics, answer keys)
- [ ] Quality assurance checklist completed
- [ ] Documentation updated
- [ ] Integration testing with overall platform

---

**Key Reference Files:**
- `UNIT-DEVELOPMENT-FRAMEWORK.md` - Complete development guide
- `INTERACTIVE-COMPONENTS.md` - Component specifications  
- `CLAUDE.md` - Project overview
- `capstone/01_guidelines.tex` - Semester 2 requirements