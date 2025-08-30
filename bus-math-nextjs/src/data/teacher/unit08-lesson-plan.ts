import { UnitLessonPlan } from "@/types/lesson-plan"

export const unit08LessonPlan: UnitLessonPlan = {
  unitNumber: 8,
  unitTitle: "Year-1 Startup Model",
  description: "Complete 10-day lesson plan using backward design principles",
  essentialQuestion: "Can we convince a micro-VC that our first-year financial model is robust enough to merit funding?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math",
    course: "Math for Business Operations"
  },

  /*
   * Component Usage Schedule (from implemented student pages)
   * - ComprehensionCheck (default export) — frequent knowledge checks
   * - FillInTheBlank (named export) — vocabulary/concept reinforcement
   * - FinancialStatementMatching (named export) — statement structure practice
   * - BusinessTransactionCategorization (named export) — cash flow categorization
   * - DragAndDrop (named export) — matching exercises
   * - ReflectionJournal (default export) — phase 6 reflection activities
   * - ErrorCheckingSystem (default export) — validation logic practice (lesson04)
   * - VideoPlayer (named export) — unit intro video (lesson01)
   * Note: PhaseHeader/PhaseFooter and shadcn/ui components are used for layout/styling.
   */

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Integrated financial statements provide a complete picture of business performance and health",
      "Scenario analysis reveals critical risk factors that investors evaluate before funding decisions",
      "Formula integrity and cross-sheet linking ensure model accuracy and professional credibility",
      "Sensitivity analysis identifies the key drivers that determine startup success or failure"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "Three-statement integration principles and interdependencies",
          "Scenario and sensitivity analysis methodologies for business modeling",
          "Formula auditing techniques and circular reference identification",
          "Risk assessment frameworks used by venture capital investors",
          "Professional presentation standards for financial models"
        ]
      },
      {
        category: "technical",
        items: [
          "Cross-sheet linking formulas and reference management",
          "Excel Scenario Manager functionality and setup",
          "Sensitivity table construction and tornado chart analysis",
          "Data validation rules and error-checking systems",
          "Formula auditing tools (trace precedents, dependents, error checking)"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Link income statement, balance sheet, and cash flow with formula integrity",
          "Create multiple scenarios to model different business conditions",
          "Identify and analyze key sensitivity drivers in startup models",
          "Audit peer models to detect formula errors and risky assumptions",
          "Present financial models professionally to investor audiences"
        ]
      },
      {
        category: "technical",
        items: [
          "Build dynamic cross-sheet references that maintain integrity",
          "Use Scenario Manager to model best/worst/realistic cases",
          "Create sensitivity tables to analyze variable impact",
          "Implement comprehensive data validation and error-checking",
          "Generate professional charts and dashboards for presentations"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "VC Pitch + Live Model Demo (Day 10)",
      description: "8-slide VC-style pitch with live Q&A presentation to external mentor panel",
      scenario: "Students present their integrated financial model to a panel of venture capital mentors, entrepreneurs, and finance professionals as if seeking seed funding. The presentation must demonstrate model integrity, realistic assumptions, and thorough risk analysis.",
      requirements: [
        "8-slide pitch deck following VC presentation standards",
        "Live Excel demonstration showing scenario switching and sensitivity analysis",
        "Professional Q&A handling addressing investor concerns about assumptions and risks",
        "Clear explanation of model logic, key drivers, and competitive advantages"
      ],
      context: "This mirrors authentic VC due diligence where financial models are rigorously tested for accuracy, realism, and completeness before investment decisions."
    },
    milestones: [
      {
        day: 5,
        title: "Milestone 1: Sensitivity Analysis Complete",
        description: "Sensitivity tables and analysis implemented for key drivers",
        criteria: [
          "One-variable data table correctly evaluates a key input",
          "Two-variable sensitivity table built for two key drivers",
          "Tornado chart or equivalent visual compares driver impact",
          "Top 3 sensitivity drivers identified with rationale"
        ]
      },
      {
        day: 6,
        title: "Milestone 2: Model Runs 3 Scenarios",
        description: "Scenario Manager implementation with best/worst/realistic cases",
        criteria: [
          "Three distinct scenarios: optimistic, pessimistic, realistic",
          "Scenario Manager properly switches all variable inputs",
          "Outputs update consistently across all three statements",
          "Scenario summary clearly contrasts results across cases"
        ]
      }
    ],
    rubric: [
      {
        name: "Model Integrity",
        weight: "40%",
        exemplary: "All sheets linked; no hard-coded numbers; error-checks pass; handles edge cases gracefully",
        proficient: "Sheets mostly linked correctly; minimal hard-coding; basic error-checking works",
        developing: "Some linking errors; contains hard-coded values; limited error detection"
      },
      {
        name: "Scenario Insight",
        weight: "20%",
        exemplary: "Clear logic behind scenarios; risk explained with compelling visuals; sensitivity analysis comprehensive",
        proficient: "Reasonable scenario assumptions; basic risk analysis; adequate visual support",
        developing: "Unclear scenario rationale; limited risk consideration; poor visual presentation"
      },
      {
        name: "Pitch Effectiveness",
        weight: "15%",
        exemplary: "Slides expertly structured; visually compelling; perfect timing; engaging delivery",
        proficient: "Well-organized slides; clear visuals; good timing; confident presentation",
        developing: "Basic slide structure; adequate visuals; timing issues; hesitant delivery"
      },
      {
        name: "Audit Responsiveness",
        weight: "15%",
        exemplary: "All flagged issues addressed; improvements documented; proactive error prevention",
        proficient: "Most issues resolved; basic improvement documentation; reactive error fixing",
        developing: "Some issues unresolved; limited documentation; minimal error addressing"
      },
      {
        name: "Reflection Quality",
        weight: "10%",
        exemplary: "Insightful takeaways tied to Courage, Adaptability, Persistence (CAP); deep learning analysis",
        proficient: "Clear connections to CAP development; good learning reflection",
        developing: "Basic CAP connections; superficial reflection on learning"
      }
    ]
  },

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Introduction: VC Red Flags & Model Failures",
          description: "Entry event with venture capitalist analyzing common startup model mistakes",
          days: "Day 1"
        },
        {
          title: "Core Concepts: Review & Integration",
          description: "Review prior outputs; link three statements with formula integrity and cross-sheet references",
          days: "Days 2-3"
        },
        {
          title: "Excel Model: Scenario Manager, Sensitivity, Advanced Testing",
          description: "Build Scenario Manager; implement sensitivity analysis; test advanced scenarios",
          days: "Days 4-6"
        },
        {
          title: "Examples & Prep: Professional Standards + Mock Panel",
          description: "Apply professional standards; peer audits; prepare and rehearse for mock panel",
          days: "Days 7-8"
        },
        {
          title: "Summary & Presentations: VC Demo Day",
          description: "Final presentations to venture capital mentor panel with Q&A",
          days: "Days 9-10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Introduction: VC Red Flags & Entry Event",
        focus: "Launch with venture capitalist guest analyzing startup model failures",
        duration: "45 minutes",
        activities: [
          {
            name: "VC Guest Speaker: Model Red Flags",
            duration: "15 minutes",
            description: "Venture capitalist presents common red flags in rookie startup financial models",
            details: [
              "Guest VC outlines top 5 model failures that kill funding opportunities",
              "Real examples of circular references, hard-coded assumptions, unrealistic growth",
              "Discussion of what makes models credible vs. concerning to investors"
            ],
            callout: {
              type: "important",
              title: "VC Red Flags in Startup Models",
              content: "Critical errors that immediately disqualify funding applications",
              items: [
                "Hard-coded numbers instead of formulas (shows lack of sophistication)",
                "Circular references that break model integrity",
                "Unrealistic hockey-stick growth assumptions without market justification",
                "Missing scenario analysis (no consideration of downside risks)",
                "Poor presentation quality that suggests operational weaknesses"
              ]
            }
          },
          {
            name: "Model Failure Case Study Analysis",
            duration: "20 minutes",
            description: "Teams analyze anonymized pitch decks and identify specific model problems",
            details: [
              "Review 3 failed startup models (anonymized real examples)",
              "Teams identify specific technical and assumption errors",
              "Compare failed models to successful funding examples",
              "Discuss how model quality reflects operational competence"
            ]
          },
          {
            name: "Challenge Introduction & Team Formation",
            duration: "10 minutes",
            description: "Present capstone challenge and form development teams",
            details: [
              "Introduce essential question: Can we build a VC-worthy financial model?",
              "Form teams of 2-3 students to develop integrated startup model",
              "Teams select startup concept area (SaaS, e-commerce, service business)",
              "Initial planning: What makes our model investor-ready?"
            ]
          }
        ],
        materials: [
          "VC guest speaker presentation on model red flags",
          "Anonymized failed pitch deck examples",
          "Successful model comparison cases",
          "Team formation and startup concept selection materials"
        ]
      },
      {
        day: 2,
        title: "Core Concepts: Review & Link Integration",
        focus: "Review prior unit outputs and demonstrate cross-sheet linking principles",
        duration: "45 minutes",
        activities: [
          {
            name: "Prior Unit Review: Three-Statement Foundation",
            duration: "15 minutes",
            description: "Connect to Units 3, 6, and 7 outputs for integrated model foundation",
            details: [
              "Review Unit 3: Three-statement integration principles",
              "Connect Unit 6: Cost-volume-profit analysis for revenue modeling",
              "Link Unit 7: Asset and inventory tracking for balance sheet items",
              "Identify how previous work becomes integrated model components"
            ]
          },
          {
            name: "Cross-Sheet Linking Demonstration",
            duration: "20 minutes",
            description: "Technical instruction on Excel cross-sheet reference best practices",
            details: [
              "Demonstrate proper cross-sheet formula syntax and naming conventions",
              "Show how to create dynamic references that update automatically",
              "Practice linking sample income statement to balance sheet items",
              "Error prevention: Avoiding broken links and circular references"
            ],
            callout: {
              type: "tip",
              title: "Cross-Sheet Linking Best Practices",
              content: "Professional standards for model integrity and maintainability",
              items: [
                "Use named ranges for key variables (Revenue_Growth_Rate)",
                "Consistent sheet naming and organization (Assumptions, P&L, Balance_Sheet)",
                "Absolute vs. relative references for different linking scenarios",
                "Documentation of all cross-sheet dependencies for model users"
              ]
            }
          },
          {
            name: "Income Statement Integration Practice",
            duration: "10 minutes",
            description: "Hands-on practice linking income statement to other statements",
            details: [
              "Students practice linking revenue to balance sheet (accounts receivable)",
              "Connect expenses to balance sheet (accounts payable, accruals)",
              "Link net income to retained earnings on balance sheet",
              "Verify formulas update correctly when assumptions change"
            ]
          }
        ],
        materials: [
          "Unit 3, 6, 7 output files for integration foundation",
          "Cross-sheet linking template and best practices guide",
          "Sample three-statement model for demonstration",
          "Linking practice worksheet with validation checks"
        ]
      },
      {
        day: 3,
        title: "Core Concepts: Balance Sheet & Cash Flow Integration",
        focus: "Complete three-statement integration with balance sheet and cash flow linking",
        duration: "45 minutes",
        activities: [
          {
            name: "Balance Sheet Linking Challenge",
            duration: "20 minutes",
            description: "Build complete balance sheet integration with income statement and assumptions",
            details: [
              "Link current assets: Cash, accounts receivable, inventory to operating assumptions",
              "Connect fixed assets: Equipment, depreciation schedules from prior units",
              "Integrate liabilities: Accounts payable, accrued expenses from income statement",
              "Complete equity section: Retained earnings accumulation from net income"
            ]
          },
          {
            name: "Cash Flow Statement Construction",
            duration: "20 minutes",
            description: "Build cash flow statement that ties to balance sheet changes",
            details: [
              "Operating activities: Start with net income, adjust for non-cash items",
              "Working capital changes: Link to balance sheet account movements",
              "Investing activities: Capital expenditures and asset purchases",
              "Financing activities: Debt/equity transactions and dividend payments"
            ],
            callout: {
              type: "important",
              title: "Cash Flow Statement Validation",
              content: "Critical checkpoints that prove model integrity",
              items: [
                "Net change in cash = Ending cash - Beginning cash",
                "Operating cash flow adjustments match balance sheet changes",
                "All three statements must mathematically reconcile",
                "Cash balance never goes negative (unless planned credit facilities)"
              ]
            }
          },
          {
            name: "Three-Statement Validation",
            duration: "5 minutes",
            description: "Test complete integration and verify mathematical accuracy",
            details: [
              "Check: Balance sheet balances (Assets = Liabilities + Equity)",
              "Verify: Cash flow statement ties to cash balance changes",
              "Test: Change assumptions and confirm all statements update correctly",
              "Document: Any formula errors or broken links for tomorrow's work"
            ]
          }
        ],
        materials: [
          "Balance sheet integration template",
          "Cash flow statement construction guide",
          "Three-statement validation checklist",
          "Sample startup financial data for linking practice"
        ]
      },
      {
        day: 4,
        title: "Excel Model: Scenario Manager & Advanced Financial Modeling",
        focus: "Learn Scenario Manager functionality and build multiple business scenarios",
        duration: "45 minutes",
        activities: [
          {
            name: "Scenario Manager Tutorial",
            duration: "15 minutes",
            description: "Technical instruction on Excel Scenario Manager setup and usage",
            details: [
              "Demonstrate Scenario Manager interface and variable selection",
              "Show how to define input variables and create scenario sets",
              "Practice switching between scenarios and viewing results",
              "Explain scenario summary table generation and interpretation"
            ]
          },
          {
            name: "Business Scenario Development",
            duration: "25 minutes",
            description: "Teams create three distinct scenarios for their startup model",
            details: [
              "Optimistic scenario: Strong market adoption, efficient operations",
              "Pessimistic scenario: Market challenges, higher costs, slower growth",
              "Realistic scenario: Moderate growth with typical startup challenges",
              "Define specific variable changes for each scenario (growth rates, costs, timing)"
            ],
            callout: {
              type: "example",
              title: "SaaS Startup Scenario Variables",
              content: "Key variables that drive different outcomes",
              items: [
                "Monthly recurring revenue growth rate (10%-50% range)",
                "Customer acquisition cost ($50-$300 per customer)",
                "Churn rate (2%-15% monthly depending on market conditions)",
                "Operating expense growth (correlation with revenue scaling)"
              ]
            }
          },
          {
            name: "Scenario Implementation Practice",
            duration: "5 minutes",
            description: "Students implement Scenario Manager with their startup variables",
            details: [
              "Set up Scenario Manager with identified variables",
              "Create all three scenarios with appropriate value ranges",
              "Test scenario switching and verify output changes",
              "Generate scenario summary table for tomorrow's analysis"
            ]
          }
        ],
        materials: [
          "Scenario Manager step-by-step tutorial",
          "Business scenario development worksheet",
          "Startup variable identification guide",
          "Scenario summary interpretation examples",
          "/resources/unit08-scenario-manager-practice.csv",
          "/resources/unit08-financial-model-template.csv"
        ]
      },
      {
        day: 5,
        title: "Excel Model: Sensitivity Analysis & Milestone 1",
        focus: "Build sensitivity tables and complete Milestone 1 assessment",
        duration: "45 minutes",
        activities: [
          {
            name: "Sensitivity Table Construction",
            duration: "20 minutes",
            description: "Learn to build data tables for sensitivity analysis",
            details: [
              "Demonstrate Excel data table setup for one-variable sensitivity",
              "Build two-variable sensitivity table for key driver combinations",
              "Create tornado chart to visualize impact magnitude",
              "Identify the top 3 drivers that most affect business outcomes"
            ]
          },
          {
            name: "Milestone 1: Sensitivity Analysis Assessment",
            duration: "20 minutes",
            description: "Complete assessment of sensitivity tables and analysis",
            details: [
              "Students submit one-variable and two-variable data tables",
              "Assessment criteria: Tables compute correctly and reference proper cells",
              "Visualization: Tornado chart (or equivalent) compares driver impact",
              "Analysis: Top 3 sensitivity drivers identified with rationale"
            ],
            callout: {
              type: "important",
              title: "Milestone 1 Success Criteria",
              content: "Professional standards for sensitivity analysis",
              items: [
                "Accurate one- and two-variable data table construction",
                "Clear labeling and documentation of inputs and outputs",
                "Appropriate visual summarizing impacts across drivers",
                "Written interpretation connects sensitivity to business risk"
              ]
            }
          },
          {
            name: "Model Troubleshooting & Refinement",
            duration: "5 minutes",
            description: "Address common linking errors and prepare for scenario testing",
            details: [
              "Common error diagnosis: Circular references, broken links, formula errors",
              "Quick fixes for typical integration problems",
              "Prepare models for tomorrow's scenario and sensitivity testing",
              "Preview: How scenarios will stress-test our model integrity"
            ]
          }
        ],
        materials: [
          "Sensitivity analysis tutorial and templates",
          "Milestone 1 assessment rubric and checklist",
          "Model validation tools and error checking guides",
          "Tornado chart creation examples",
          "/resources/unit08-sensitivity-analysis-data.csv"
        ]
      },
      {
        day: 6,
        title: "Excel Model: Advanced Scenario Testing & Milestone 2",
        focus: "Complete scenario implementation and achieve Milestone 2 requirements",
        duration: "45 minutes",
        activities: [
          {
            name: "Advanced Scenario Variables",
            duration: "15 minutes",
            description: "Add revenue shocks and cost spikes to scenario modeling",
            details: [
              "Model revenue disruption scenarios (market downturn, competition)",
              "Include cost spike variables (supply chain, labor, regulatory)",
              "Add timing variables (delayed product launch, seasonal impacts)",
              "Stress-test model with extreme but realistic variable combinations"
            ]
          },
          {
            name: "Milestone 2: Model Runs 3 Scenarios Assessment",
            duration: "25 minutes",
            description: "Complete assessment of scenario functionality and analysis",
            details: [
              "Students demonstrate working Scenario Manager with three complete scenarios",
              "Assessment: Scenarios produce meaningfully different outcomes",
              "Validation: Sensitivity table identifies key business drivers",
              "Analysis: Teams explain business logic behind scenario assumptions"
            ],
            callout: {
              type: "important",
              title: "Milestone 2 Success Criteria",
              content: "Professional scenario analysis demonstrates model sophistication",
              items: [
                "Three distinct scenarios with clear business rationale",
                "Scenario Manager switches all variables simultaneously",
                "Sensitivity analysis identifies top 3 performance drivers",
                "Output differences are significant and realistic"
              ]
            }
          },
          {
            name: "Risk Analysis & Documentation",
            duration: "5 minutes",
            description: "Document scenario insights and risk factors for investor presentation",
            details: [
              "Summarize key insights from scenario analysis",
              "Identify primary risk factors and mitigation strategies",
              "Document assumptions for investor transparency",
              "Prepare talking points for model demonstration"
            ]
          }
        ],
        materials: [
          "Advanced scenario variable templates",
          "Milestone 2 assessment criteria and rubric",
          "Risk analysis documentation worksheet",
          "Investor presentation preparation guide"
        ]
      },
      {
        day: 7,
        title: "Examples: Professional Model Standards",
        focus: "Analyze professional-grade financial models and apply industry standards",
        duration: "45 minutes",
        activities: [
          {
            name: "Professional Model Analysis",
            duration: "20 minutes",
            description: "Examine industry-standard financial models from successful startups",
            details: [
              "Review anonymized models from successful funding rounds",
              "Identify professional formatting, documentation, and structure standards",
              "Compare student models to professional benchmarks",
              "Note sophisticated features: data validation, error checking, user interface"
            ]
          },
          {
            name: "Peer Audit Process",
            duration: "20 minutes",
            description: "Systematic peer review using professional audit checklist",
            details: [
              "Teams exchange models and conduct thorough audit reviews",
              "Use structured checklist covering formula integrity, assumption reasonableness",
              "Identify potential red flags that would concern investors",
              "Provide specific, actionable feedback for model improvement"
            ],
            callout: {
              type: "tip",
              title: "Professional Model Audit Checklist",
              content: "Industry standards for model quality and investor readiness",
              items: [
                "Formula integrity: No hard-coding, proper linking, error handling",
                "Assumption reasonableness: Market-based, justified, documented",
                "Presentation quality: Clean formatting, clear navigation, professional appearance",
                "Scenario comprehensiveness: Realistic range, meaningful differences, proper documentation"
              ]
            }
          },
          {
            name: "Model Enhancement Planning",
            duration: "5 minutes",
            description: "Plan improvements based on professional standards and peer feedback",
            details: [
              "Prioritize improvements based on audit feedback",
              "Plan presentation enhancements for investor demo",
              "Identify advanced features to add for competitive advantage",
              "Prepare action plan for final model refinement"
            ]
          }
        ],
        materials: [
          "Professional model examples (anonymized)",
          "Industry standard audit checklist",
          "Peer review feedback forms",
          "Model enhancement planning template"
        ]
      },
      {
        day: 8,
        title: "Examples: Presentation Prep & Mock Panel",
        focus: "Prepare pitch presentations and conduct trial investor presentations",
        duration: "45 minutes",
        activities: [
          {
            name: "Pitch Deck Development",
            duration: "20 minutes",
            description: "Create 8-slide VC-style presentation with model integration",
            details: [
              "Slide structure: Problem, solution, market, model demonstration, scenarios, ask",
              "Integrate model outputs: Key metrics, scenario comparisons, sensitivity insights",
              "Design professional visuals that support financial story",
              "Practice timing: 6 minutes presentation + 2 minutes Q&A preparation"
            ]
          },
          {
            name: "Mock VC Panel Presentations",
            duration: "20 minutes",
            description: "Trial presentations with peer VC panel feedback",
            details: [
              "Teams present to other teams acting as VC panel",
              "Focus on model demonstration and scenario explanation",
              "Practice Q&A responses about assumptions, risks, competitive advantages",
              "Receive structured feedback using VC evaluation criteria"
            ],
            callout: {
              type: "important",
              title: "VC Presentation Success Factors",
              content: "Critical elements that determine investor engagement",
              items: [
                "Clear problem definition and large market opportunity",
                "Credible financial model with realistic assumptions",
                "Compelling scenario analysis showing risk awareness",
                "Confident Q&A handling that builds investor trust"
              ]
            }
          },
          {
            name: "Presentation Refinement",
            duration: "5 minutes",
            description: "Incorporate feedback and finalize presentation approach",
            details: [
              "Address key feedback points from mock presentations",
              "Refine model demonstration timing and flow",
              "Prepare responses to anticipated investor questions",
              "Final technical check: Ensure model works flawlessly for live demo"
            ]
          }
        ],
        materials: [
          "8-slide pitch deck template with VC standards",
          "Mock VC panel feedback forms",
          "Q&A preparation worksheet",
          "Technical demonstration checklist"
        ]
      },
      {
        day: 9,
        title: "Project Work: Final Model Refinement",
        focus: "Complete model enhancements and finalize investor presentation materials",
        duration: "45 minutes",
        activities: [
          {
            name: "Final Model Polish",
            duration: "25 minutes",
            description: "Implement professional formatting and advanced features",
            details: [
              "Apply professional formatting standards throughout model",
              "Add data validation and error-checking for user protection",
              "Create executive summary dashboard with key metrics",
              "Test all functionality: scenarios, sensitivity analysis, linking integrity"
            ]
          },
          {
            name: "Presentation Rehearsal",
            duration: "15 minutes",
            description: "Final practice with completed models and refined presentations",
            details: [
              "Full presentation rehearsal with live model demonstration",
              "Practice seamless switching between scenarios during presentation",
              "Rehearse responses to challenging investor questions",
              "Time final presentation to ensure 8-minute total duration"
            ]
          },
          {
            name: "Final Quality Check",
            duration: "5 minutes",
            description: "Last verification of model integrity and presentation readiness",
            details: [
              "Complete model functionality test with instructor validation dataset",
              "Verify all presentation technology works correctly",
              "Confirm teams are prepared for tomorrow's investor panel",
              "Final preparation: Professional attire, materials organization"
            ]
          }
        ],
        materials: [
          "Professional formatting standards guide",
          "Executive dashboard templates",
          "Final validation test dataset",
          "Presentation technology setup guide"
        ]
      },
      {
        day: 10,
        title: "Presentations: VC Demo Day & Reflection",
        focus: "Final presentations to external VC panel and comprehensive unit reflection",
        duration: "45 minutes",
        activities: [
          {
            name: "VC Panel Presentations",
            duration: "30 minutes",
            description: "Professional presentations to external venture capital mentor panel",
            details: [
              "Each team delivers complete 8-slide pitch with live Excel demonstration",
              "External panel includes: VC mentors, successful entrepreneurs, finance professionals",
              "Live Q&A handling: Teams respond to investor questions about model and assumptions",
              "Panel evaluation: Professional feedback on presentation quality and model sophistication"
            ],
            callout: {
              type: "important",
              title: "Final Assessment: Authentic VC Evaluation",
              content: "Real-world assessment matching actual investor due diligence",
              items: [
                "Model integrity: Technical accuracy and professional construction",
                "Business acumen: Realistic assumptions and market understanding",
                "Communication skills: Clear explanation of complex financial concepts",
                "Investor readiness: Confidence and competence in Q&A responses"
              ]
            }
          },
          {
            name: "Unit Reflection & CAP Analysis",
            duration: "10 minutes",
            description: "Comprehensive reflection on learning journey and CAP development",
            details: [
              "Reflection writing: How did building an integrated model change your understanding of business complexity?",
              "CAP analysis: Specific examples of Courage, Adaptability, and Persistence demonstrated",
              "Skill transfer: How might integrated modeling skills apply to other business contexts?",
              "Semester synthesis: Connection to all prior units and preparation for capstone project"
            ]
          },
          {
            name: "Portfolio Documentation & Course Transition",
            duration: "5 minutes",
            description: "Document achievements and prepare for semester 2 capstone",
            details: [
              "Add completed model and presentation to digital portfolio",
              "Document key learning outcomes and technical skill achievements",
              "Celebrate team accomplishments and acknowledge professional growth",
              "Preview semester 2: Advanced capstone project with real startup development"
            ]
          }
        ],
        materials: [
          "External VC panel evaluation forms",
          "Reflection writing prompts with CAP analysis framework",
          "Portfolio submission guidelines and templates",
          "Semester 2 capstone preview materials"
        ]
      }
    ]
  },

  // Assessment Strategies
  assessmentStrategies: [
    {
      category: "formative",
      title: "Formative Assessment Strategies",
      strategies: [
        "Daily Model Checks: Technical validation of linking and formula integrity",
        "Peer Model Audits: Structured reviews using professional audit checklists",
        "Scenario Testing: Verification that models respond appropriately to assumption changes",
        "Progress Conferences: 10-minute team check-ins on model development and challenges",
        "Reflection Journals: Daily entries connecting technical work to business understanding"
      ]
    },
    {
      category: "feedback",
      title: "Feedback Strategies",
      strategies: [
        "Technical Precision: \"Fix circular reference in cell B15 by changing formula structure\"",
        "Business Relevance: \"Justify 40% growth assumption with market research or reduce to realistic level\"",
        "Professional Standards: \"Add data validation to prevent user input errors\"",
        "Investor Perspective: \"How would you explain this assumption to a skeptical VC?\""
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students",
      strategies: [
        "Template Models: Provide partially completed models with clear next steps",
        "Formula Libraries: Pre-built formula examples for common linking scenarios",
        "Video Support: Screen-recorded walkthroughs of complex Excel techniques",
        "Simplified Scenarios: Reduce variable complexity while maintaining learning objectives"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Advanced Features: Monte Carlo simulation, dynamic dashboard creation",
        "Mentoring Roles: Support struggling teams while extending their own learning",
        "Industry Connections: Direct interaction with actual VCs during development process",
        "Portfolio Extension: Develop multiple business models for comparison analysis"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Financial Glossary: Comprehensive business and technical term definitions",
        "Visual Models: Flowcharts and diagrams showing model structure and relationships",
        "Peer Translation: Native speaker partners for complex concept explanation",
        "Presentation Support: Outline templates with key phrase suggestions"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: High-performance laptops for complex model calculations" },
        { name: "Software: Excel 365 with Analysis ToolPak and Power Query" },
        { name: "Presentation: Professional projection system for investor presentations" },
        { name: "Video Recording: Documentation of final presentations for portfolio" },
        { name: "Backup Systems: Cloud storage for model version control and collaboration" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials",
      items: [
        { name: "Capstone Model Shell Excel Template", link: "../excel-templates/capstone-model-shell.xlsx" },
        { name: "Scenario Builder Reference Guide", link: "../excel-instruction/scenario-builder-guide.pdf" },
        { name: "Peer Audit Checklist for Financial Models", link: "../assessment-rubrics/model-audit-checklist.pdf" },
        { name: "8-Slide VC Pitch Template", link: "../presentation-templates/vc-pitch-template.pptx" },
        { name: "Professional Model Standards Guide", link: "../standards/professional-model-standards.pdf" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "VC Mentor Panel: Local venture capital professionals and successful entrepreneurs" },
        { name: "Industry Models: Anonymized examples from successful funding rounds" },
        { name: "Professional Networks: Connections to startup accelerators and incubators" },
        { name: "Alumni Connections: Former students now working in finance and startup sectors" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students demonstrate mastery of integrated financial modeling at a professional level?",
      "How effectively did the VC panel format provide authentic assessment of investor readiness?",
      "Were students able to explain complex technical concepts in business-appropriate language?",
      "What evidence shows growth in Courage, Adaptability, and Persistence throughout the unit?",
      "How well does this capstone unit synthesize learning from all previous units?"
    ],
    dataCollection: [
      "VC Panel Feedback: Professional evaluation of presentation quality and model sophistication",
      "Model Analysis: Technical review of formula integrity, linking accuracy, scenario functionality",
      "Student Reflection: CAP development analysis and semester learning synthesis",
      "Peer Evaluation: Team collaboration and model audit feedback quality",
      "Portfolio Documentation: Evidence of professional growth and technical skill mastery"
    ],
    nextUnitPrep: [
      "Archive exemplary models as templates for future cohorts",
      "Document common technical challenges for targeted instruction improvement",
      "Collect VC panel feedback for curriculum refinement and industry alignment",
      "Prepare transition materials for semester 2 capstone project selection and development"
    ]
  }
}
