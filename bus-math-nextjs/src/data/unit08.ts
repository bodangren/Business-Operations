import { UnitData } from "@/types/unit"

export const unit08Data: UnitData = {
  id: "Unit 8",
  title: "Year‑1 Startup Model",
  duration: "2-3 weeks",
  difficulty: "Advanced",
  description: "Can we convince a micro‑VC that our first‑year financial model is robust enough to merit funding?",
  
  drivingQuestion: {
    question: "Can we convince a micro‑VC that our first‑year financial model is robust enough to merit funding?",
    context: "A venture capitalist guest outlines common red flags in rookie startup models and challenges students to avoid them. Students review anonymized pitch decks and model failures.",
    scenario: "Teams will create a comprehensive 3-statement financial model with scenario testing and present to a real VC mentor panel."
  },
  
  objectives: {
    content: [
      "Link three financial statements with formula integrity",
      "Apply scenario and sensitivity analysis to model startup risk",
      "Audit peer models to identify formula errors and risky assumptions"
    ],
    skills: [
      "Cross-sheet linking for income, balance sheet, and cash flow",
      "Scenario Manager; sensitivity tables; data validation",
      "Formula auditing tools (trace precedents, circular reference warnings)"
    ],
    deliverables: [
      "Fully linked 3-statement forecast model",
      "Model with 3 scenario testing capabilities",
      "8-slide VC-style pitch presentation",
      "Live Q&A demonstration to VC panel",
      "Peer audit documentation with improvements"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "VC Pitch + Live Demo",
      description: "Present your startup's financial model to a real VC mentor panel, demonstrating scenario analysis and defending your assumptions in a live Q&A session.",
      context: "This mirrors actual VC due diligence where financial models are rigorously tested for accuracy, realism, and risk assessment.",
      requirements: [
        "8-slide pitch deck with clear narrative and professional visuals",
        "Live Excel model demonstration showing scenario testing",
        "Q&A defense of key assumptions and model integrity",
        "Incorporation of feedback from peer audit process"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 3,
        title: "Fully Linked 3-Statement Forecast",
        description: "Complete integration of income statement, balance sheet, and cash flow",
        criteria: [
          "All sheets linked with proper formulas",
          "No hard-coded numbers in projections",
          "Error-checks pass for all connections",
          "Data flows correctly between statements"
        ]
      },
      {
        id: "milestone2",
        day: 5,
        title: "Milestone 1: Sensitivity Analysis Complete",
        description: "Sensitivity tables and analysis implemented for key drivers",
        criteria: [
          "One-variable data table correctly evaluates a key input",
          "Two-variable sensitivity table built for two key drivers",
          "Tornado chart or equivalent visual compares driver impact",
          "Top 3 sensitivity drivers identified with brief rationale"
        ]
      },
      {
        id: "milestone3",
        day: 6,
        title: "Milestone 2: Model Runs 3 Scenarios",
        description: "Scenario Manager implemented with sensitivity analysis",
        criteria: [
          "Best case, worst case, and base case scenarios defined",
          "Revenue shock and cost spike variables working",
          "Sensitivity table analyzing top 3 drivers",
          "Visual dashboard showing scenario impacts"
        ]
      }
    ],
    rubric: [
      {
        name: "Model Integrity",
        weight: "40%",
        exemplary: "All sheets linked; no hard-coded numbers; error-checks pass; handles edge cases flawlessly",
        proficient: "Sheets properly linked; minimal hard-coding; most error-checks pass; handles normal scenarios",
        developing: "Some linking issues; hard-coded values present; limited error-checking; fragile model"
      },
      {
        name: "Scenario Insight",
        weight: "20%",
        exemplary: "Clear logic behind scenarios; comprehensive risk analysis; insightful visuals and interpretation",
        proficient: "Reasonable scenario logic; basic risk explained; adequate visual representation",
        developing: "Weak scenario rationale; limited risk analysis; poor visual communication"
      },
      {
        name: "Pitch Effectiveness",
        weight: "15%",
        exemplary: "Compelling narrative; professional slides; confident delivery; expert Q&A handling",
        proficient: "Clear structure; decent visuals; adequate delivery; handles most questions",
        developing: "Basic presentation; weak visuals; hesitant delivery; struggles with questions"
      },
      {
        name: "Audit Responsiveness",
        weight: "15%",
        exemplary: "All flagged issues addressed; comprehensive documentation; improvements enhance model significantly",
        proficient: "Most issues addressed; adequate documentation; meaningful improvements made",
        developing: "Limited issue resolution; poor documentation; minimal improvements"
      },
      {
        name: "Reflection Quality",
        weight: "10%",
        exemplary: "Deep insights on CAP growth; specific examples; clear connections to learning objectives",
        proficient: "Good reflection on growth; some examples; basic connections made",
        developing: "Superficial reflection; limited examples; weak connections to learning"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 15,
        title: "Model Assembly",
        description: "Build the foundational 3-statement integrated financial model",
        days: [
          {
            day: 1,
            focus: "Introduction: VC Red Flags & Entry Event",
            activities: [
              "Entry Event: VC guest speaker on common pitch deck failures",
              "Review anonymized pitch failures and red flags",
              "Team formation and startup selection"
            ],
            resources: [
              "VC red flag presentation deck",
              "Failure case studies",
              "Team formation guidelines"
            ]
          },
          {
            day: 2,
            focus: "Core Concepts: Review & Link Integration",
            activities: [
              "Review linking from prior unit files",
              "Income Statement refresher and best practices",
              "Introduction to 3-statement modeling"
            ],
            resources: [
              "Unit 3 outputs for reference",
              "Cross-sheet linking demonstration",
              "3-statement integration guide"
            ]
          },
          {
            day: 3,
            focus: "Core Concepts: Balance Sheet & Cash Flow Integration",
            activities: [
              "Balance Sheet + Cash Flow integration workshop",
              "Build connections between all three statements",
              "Test formula integrity and error-checking"
            ],
            resources: [
              "Linking template and examples",
              "Formula integrity checklist"
            ],
            milestone: "Fully linked 3-statement forecast"
          },
          {
            day: 4,
            focus: "Excel Model: Scenario Manager & Advanced Financial Modeling",
            activities: [
              "Scenario Manager tutorial and setup",
              "Define optimistic, pessimistic, and realistic scenarios",
              "Implement variable switching and verify outputs"
            ],
            resources: [
              "Scenario Manager guide",
              "/resources/unit08-scenario-manager-practice.csv",
              "/resources/unit08-financial-model-template.csv"
            ]
          },
          {
            day: 5,
            focus: "Excel Model: Sensitivity Analysis & Milestone 1",
            activities: [
              "Build one- and two-variable data tables",
              "Create tornado chart and interpret results",
              "Submit Milestone 1: Sensitivity Analysis"
            ],
            resources: [
              "Sensitivity analysis tutorial",
              "/resources/unit08-sensitivity-analysis-data.csv"
            ]
          }
        ]
      },
      {
        weekNumber: 16,
        title: "Scenario Testing",
        description: "Implement scenario analysis and prepare for VC presentation",
        days: [
          {
            day: 6,
            focus: "Excel Model: Advanced Scenario Testing & Milestone 2",
            activities: [
              "Scenario Manager tutorial and setup",
              "Add revenue shock and cost spike variables to model",
              "Build scenario switching mechanisms"
            ],
            resources: [
              "Scenario Manager guide",
              "Variable setup templates"
            ],
            milestone: "Model runs 3 scenarios"
          },
          {
            day: 7,
            focus: "Examples: Professional Model Standards",
            activities: [
              "Build sensitivity table for key drivers",
              "Create tornado chart analysis",
              "Analyze top 3 drivers of financial change"
            ],
            resources: [
              "Sensitivity analysis examples",
              "Tornado chart sample templates"
            ]
          },
          {
            day: 8,
            focus: "Examples: Presentation Prep & Mock Panel",
            activities: [
              "Start 8-slide pitch deck development",
              "Assign presentation topics per team member",
              "Draft key messaging and storyline"
            ],
            resources: [
              "VC pitch deck starter template",
              "Presentation planning worksheet"
            ]
          },
          {
            day: 9,
            focus: "Mock Panel & Revisions",
            activities: [
              "Trial pitch with peer VC panel simulation",
              "Collect feedback on model and presentation",
              "Revise model and slides based on input"
            ],
            resources: [
              "Mock panel feedback forms",
              "Q&A preparation guide"
            ]
          },
          {
            day: 10,
            focus: "Public Presentation",
            activities: [
              "Demo Day: Present to real VC mentor panel",
              "Live Q&A defense of model assumptions",
              "Collect professional feedback for portfolio"
            ],
            resources: [
              "Demo Day setup guide",
              "Professional Q&A rubrics"
            ],
            milestone: "Final deliverable - VC presentation"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "Continue with previous unit startup",
      "Pivot to new business model",
      "Tech startup concept",
      "Service-based business",
      "Product-focused venture"
    ],
    roles: [
      "CFO (model integrity focus)",
      "COO (assumptions and realism)",
      "CMO (pitch visuals and presentation)"
    ],
    presentationFormats: [
      "Traditional slide deck presentation",
      "Interactive Excel demonstration",
      "Hybrid presentation with live modeling",
      "Video pitch with live Q&A follow-up"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Completion of Units 1-7 financial modeling sequence",
      "Understanding of financial statement relationships",
      "Experience with Excel linking and formulas",
      "Basic knowledge of startup business models"
    ],
    technology: [
      "Microsoft Excel with Scenario Manager capability",
      "Presentation software (PowerPoint, Google Slides)",
      "Screen sharing capability for demonstrations",
      "Calculator and financial calculator functions"
    ],
    resources: [
      {
        title: "Capstone Model Shell Workbook",
        url: "/resources/unit08-model-shell.xlsx",
        type: "download"
      },
      {
        title: "Scenario Builder Reference Sheet",
        url: "/resources/scenario-builder-guide.pdf",
        type: "download"
      },
      {
        title: "Peer Audit Checklist",
        url: "/resources/peer-audit-checklist.pdf",
        type: "download"
      },
      {
        title: "8-Slide Pitch Deck Template",
        url: "/resources/vc-pitch-template.pptx",
        type: "download"
      },
      {
        title: "VC Q&A Preparation Guide",
        url: "/resources/qa-preparation.pdf",
        type: "download"
      },
      {
        title: "Scenario Manager Practice CSV",
        url: "/resources/unit08-scenario-manager-practice.csv",
        type: "download"
      },
      {
        title: "Financial Model Template CSV",
        url: "/resources/unit08-financial-model-template.csv",
        type: "download"
      },
      {
        title: "Sensitivity Analysis Dataset CSV",
        url: "/resources/unit08-sensitivity-analysis-data.csv",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Scaffolded linking: Pre-built formula templates for complex connections",
      "Troubleshooting guide: Visual flowchart for diagnosing \"link breaks\"",
      "Scenario variables pre-built for students who need additional support",
      "Peer mentoring partnerships with advanced students"
    ],
    advanced: [
      "Extension challenge: Add KPI dashboard with dynamic visualizations",
      "Advanced Excel features: Auto-refresh macros and dynamic scenario toggles",
      "Leadership roles: Mentor struggling teammates and facilitate team discussions",
      "Deep dive: Monte Carlo simulation for advanced risk modeling"
    ],
    ell: [
      "Financial modeling terminology glossary with visual aids",
      "Key Excel functions explained in home language where possible",
      "Presentation templates with language scaffolding",
      "Cultural context for VC presentation norms and expectations"
    ]
  }
}
