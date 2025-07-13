Generate an Exercises section using comprehensive context and multi-modal interactive practice patterns.

Usage: /exercises unit[XX]

Example: /exercises unit02

Context Loading Process:
1. **REQUIRED**: Read these files before generating content:
   - `CLAUDE.md` - Project overview and development guidelines
   - `UNIT-DEVELOPMENT-FRAMEWORK.md` - Development standards and difficulty progression
   - `INTERACTIVE-COMPONENTS.md` - Drag-drop and simulation specifications
   - `UNIT-DEVELOPMENT-CHECKLIST.md` - Quality assurance requirements
   - Reference existing exercises sections for proven patterns

2. **Unit Content**: Extract from matching content file:
   - Specific exercise types and learning activities
   - Assessment criteria and rubric requirements
   - Student voice and choice options
   - Differentiation needs and accessibility considerations

3. **Multi-Modal Exercise Structure**:
   - **Drag-and-Drop Exercises** (2+ different types for kinesthetic learning)
   - **Business Simulation** (applied practice in realistic scenarios)
   - **Interactive Practice** (hands-on skill application with scaffolding)
   - **Collaborative Activities** (peer learning and review opportunities)
   - **Self-Assessment Tools** (reflection and mastery checking)

4. **Drag-and-Drop Exercise Integration**:
   - Use appropriate exercise types per unit focus:
     * `"categorize-accounts"` for accounting equation practice
     * `"journal-entry-builder"` for transaction recording
     * `"trial-balance-sort"` for account organization
     * Custom types as needed for unit-specific concepts
   - Proper data-type and data-id attributes for unique instances
   - Progressive difficulty with hints and validation

5. **Business Simulation Integration**:
   - Select appropriate simulation per unit focus:
     * `"lemonade-stand"` for basic business operations
     * `"startup-journey"` for strategic decisions
     * `"cash-flow-challenge"` for financial management
   - Connect simulation outcomes to unit learning objectives
   - Use TechStart business context throughout

6. **Framework Compliance**:
   - 90-120 minute estimated duration
   - Varied difficulty levels (basic, intermediate, advanced)
   - Multiple attempt encouragement with learning from mistakes
   - Peer collaboration structured activities
   - Portfolio artifact creation and collection

7. **Interactive Component Integration**:
   - Proper JavaScript API usage for validation and scoring
   - Real-time feedback and progressive hint systems
   - Gamification integration (20-30 points per exercise)
   - Achievement unlocks and milestone celebrations
   - Progress tracking across all activities

8. **Quality Assurance**:
   - Test all drag-and-drop functionality and validation
   - Verify business simulation mechanics and scoring
   - Ensure hint systems provide meaningful guidance
   - Validate peer collaboration features
   - Test accessibility features and keyboard navigation

9. **JavaScript Implementation**:
   - Exercise validation and scoring (checkAccountCategorization, checkJournalEntry)
   - Simulation game mechanics (resetGame, buySupply, startDay)
   - Progress tracking and achievement systems
   - Hint systems and collaborative features
   - Error handling and loading states

10. **Assessment Integration**:
    - Formative assessment with immediate feedback
    - Self-assessment tools and reflection prompts
    - Portfolio preparation and artifact collection
    - Peer review and collaboration opportunities

11. Generate file: `html/units/unit[XX]-[slug]/exercises.html`

This command creates comprehensive practice activities that engage multiple learning modalities while maintaining TechStart business context and proper component integration.