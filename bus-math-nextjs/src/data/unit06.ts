import { UnitData } from "@/types/unit"

export const unit06Data: UnitData = {
  id: "Unit 6",
  title: "PriceLab Challenge",
  duration: "2 weeks",
  difficulty: "Intermediate",
  description: "What pricing strategy hits our profit target while staying competitive in the local market?",
  
  drivingQuestion: {
    question: "What pricing strategy hits our profit target while staying competitive in the local market?",
    context: "Using live competitor price data and advanced Excel tools, teams will develop data-driven pricing recommendations through CVP analysis and sensitivity modeling.",
    scenario: "Teams import real competitor pricing data via Power Query and build comprehensive pricing models to make strategic recommendations."
  },
  
  objectives: {
    content: [
      "Calculate markup vs. margin and determine break-even points",
      "Construct and interpret Cost‑Volume‑Profit (CVP) graphs",
      "Perform sensitivity analysis using Goal Seek and one-/two‑variable data tables",
      "Analyze competitor pricing data and market positioning",
      "Develop strategic pricing recommendations based on financial modeling"
    ],
    skills: [
      "Power Query for data import and transformation",
      "Charting tools to build CVP graphs",
      "Goal Seek for target profit scenarios",
      "Data Tables (one- and two‑variable) for \"what‑if\" analysis",
      "Advanced Excel modeling and sensitivity analysis"
    ],
    deliverables: [
      "Competitor pricing benchmark analysis",
      "Complete CVP model with sensitivity analysis",
      "Pricing recommendation memo or slide deck",
      "\"What‑if\" scenario data tables",
      "Professional presentation to debate panel"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "Pricing Strategy Debate & Recommendation",
      description: "Present your pricing recommendation to a town‑hall style debate panel including economics teachers, PTA representatives, and local entrepreneurs.",
      context: "This mirrors real business pricing decisions where multiple stakeholders evaluate strategies based on financial analysis and market positioning.",
      requirements: [
        "Data-driven pricing recommendation based on CVP analysis",
        "Clear explanation of markup vs. margin calculations",
        "Demonstration of sensitivity analysis using data tables",
        "Professional memo or slide deck presentation",
        "Effective participation in town‑hall debate format"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 1,
        title: "Benchmark Competitor Pricing",
        description: "Import and analyze competitor price data using Power Query",
        criteria: [
          "Successfully import live competitor data via Power Query",
          "Calculate current margin using markup vs. margin formulas",
          "Create benchmark analysis comparing competitive position",
          "Document data transformation and cleaning process"
        ]
      },
      {
        id: "milestone2",
        day: 5,
        title: "Advanced CVP Automation: Scenario Runner & Data Tables",
        description: "Implement professional \"what‑if\" automation with validation for investor‑readiness",
        criteria: [
          "Functional CVP model with clear input/output structure",
          "One‑ and two‑variable Data Tables for sensitivity analysis",
          "Goal Seek scenarios to hit target profit levels",
          "Validation rules for out‑of‑range values and stale data (e.g., negative costs, missing IDs)",
          "Concise executive summary communicating pricing insights"
        ]
      },
      {
        id: "milestone3",
        day: 10,
        title: "Draft Pricing Recommendation",
        description: "Complete pricing recommendation memo or presentation",
        criteria: [
          "Clear pricing strategy recommendation with rationale",
          "Supporting CVP analysis and sensitivity scenarios",
          "Professional formatting and business language",
          "Ready for debate panel presentation"
        ]
      }
    ],
    rubric: [
      {
        name: "Financial Logic",
        weight: "45%",
        exemplary: "All calculations accurate; CVP model robust; sensitivity analysis comprehensive and insightful",
        proficient: "Minor calculation errors; CVP model functional; basic sensitivity analysis complete",
        developing: "Multiple errors; CVP model incomplete; limited sensitivity analysis"
      },
      {
        name: "Persuasiveness",
        weight: "25%",
        exemplary: "Compelling recommendation with clear rationale; excellent supporting visuals; addresses counterarguments",
        proficient: "Clear recommendation with adequate support; good visuals; some consideration of alternatives",
        developing: "Basic recommendation; limited support; poor visual presentation"
      },
      {
        name: "Debate Engagement",
        weight: "15%",
        exemplary: "Strong arguments; responds effectively to questions; demonstrates deep understanding",
        proficient: "Adequate arguments; handles most questions; shows good understanding",
        developing: "Weak arguments; struggles with questions; limited understanding evident"
      },
      {
        name: "Revision Quality",
        weight: "15%",
        exemplary: "Substantial improvements based on feedback; addresses all major concerns; enhanced analysis",
        proficient: "Good improvements based on feedback; addresses most concerns; some enhanced analysis",
        developing: "Minimal improvements; ignores feedback; little enhancement of original work"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 11,
        title: "Analyze & Model Pricing",
        description: "Import competitor data, learn pricing concepts, and build initial CVP models",
        days: [
          {
            day: 1,
            focus: "Launch & Competitor Data Import",
            activities: [
              "Entry Event demo: Import live competitor price data via Power Query",
              "Students explore the raw dataset and identify patterns"
            ],
            resources: [
              "Competitor price dataset",
              "Power Query import guide"
            ]
          },
          {
            day: 2,
            focus: "Markup vs. Margin Concepts",
            activities: [
              "Teach markup vs. margin with concrete examples",
              "Interactive practice calculating markup and margin"
            ],
            resources: [
              "Markup vs. margin worksheet",
              "Calculator practice problems"
            ]
          },
          {
            day: 3,
            focus: "CVP Model Construction",
            activities: [
              "Build CVP model with fixed/variable cost inputs",
              "Create professional CVP graph with proper formatting"
            ],
            resources: [
              "CVP model template",
              "Charting tutorial"
            ],
            milestone: "Benchmark competitor pricing and calculate current margin"
          },
          {
            day: 4,
            focus: "Goal Seek for Target Profit Scenarios",
            activities: [
              "Introduce Goal Seek and demonstrate Set Cell / To Value / By Changing Cell",
              "Apply Goal Seek to target profit and break‑even scenarios using CVP model"
            ],
            resources: [
              "/resources/unit06-goal-seek-practice.csv",
              "/resources/unit06-goal-seek-template.csv"
            ]
          },
          {
            day: 5,
            focus: "Advanced CVP Automation: Scenario Runner & Data Tables",
            activities: [
              "Build one‑ and two‑variable Data Tables for sensitivity analysis",
              "Implement validation rules and run advanced edge‑case scenarios"
            ],
            resources: [
              "/resources/unit06-cvp-advanced-practice.csv",
              "Investor‑ready checklist"
            ]
          }
        ]
      },
      {
        weekNumber: 12,
        title: "Sensitivity & Recommendation",
        description: "Perform advanced analysis and create final pricing recommendations",
        days: [
          {
            day: 6,
            focus: "Peer Critique & Model Refinement",
            activities: [
              "Gallery walk of CVP models and scenario runners",
              "Revise models based on structured peer feedback"
            ],
            resources: [
              "Peer critique form",
              "Revision planning template"
            ]
          },
          {
            day: 7,
            focus: "Data Table Analysis",
            activities: [
              "Create one- and two-variable data tables",
              "Interpret sensitivity outcomes and implications"
            ],
            resources: [
              "Data Table guide",
              "Sensitivity analysis examples"
            ],
            milestone: "Build \"what‑if\" CVP model and run sensitivity table"
          },
          {
            day: 8,
            focus: "Recommendation Prep",
            activities: [
              "Draft pricing recommendation memo or slide deck",
              "Review business writing and presentation standards"
            ],
            resources: [
              "Memo template",
              "Slide deck template",
              "Business writing guide"
            ]
          },
          {
            day: 9,
            focus: "Pricing Debate",
            activities: [
              "Town‑hall style debate judged by panel",
              "Collect Q&A feedback for final revisions"
            ],
            resources: [
              "Debate rubric",
              "Panel evaluation forms"
            ]
          },
          {
            day: 10,
            focus: "Final Revision & Submit",
            activities: [
              "Incorporate debate feedback into final version",
              "Finalize and submit memo or deck"
            ],
            resources: [
              "Submission portal",
              "Final checklist"
            ],
            milestone: "Draft pricing recommendation memo"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "Budget segment focus",
      "Mid‑market segment focus", 
      "Premium segment focus"
    ],
    presentationFormats: [
      "Written memo format",
      "Slide deck presentation",
      "Hybrid memo with visual appendix"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Basic understanding of profit calculations",
      "Familiarity with Excel formulas and functions",
      "Understanding of business cost concepts",
      "Experience with data analysis and interpretation"
    ],
    technology: [
      "Microsoft Excel with Power Query capability",
      "Internet access for live data import",
      "Calculator for verification",
      "Presentation software (PowerPoint or similar)"
    ],
    resources: [
      {
        title: "Unit 6 CVP Template",
        url: "/resources/unit06-cvp-template.xlsx",
        type: "download"
      },
      {
        title: "Competitor Price Dataset",
        url: "/resources/competitor-prices.csv",
        type: "download"
      },
      {
        title: "Power Query Tutorial",
        url: "/resources/power-query-guide.pdf",
        type: "download"
      },
      {
        title: "Memo Writing Guide",
        url: "/resources/business-memo-template.docx",
        type: "download"
      },
      {
        title: "Goal Seek Practice Scenarios",
        url: "/resources/unit06-goal-seek-practice.csv",
        type: "download"
      },
      {
        title: "Excel CVP Template (Goal Seek Ready)",
        url: "/resources/unit06-goal-seek-template.csv",
        type: "download"
      },
      {
        title: "Advanced CVP Practice Dataset",
        url: "/resources/unit06-cvp-advanced-practice.csv",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Provide pre-built CVP model template with guided formulas",
      "Pair with Excel-proficient teammates for Power Query support",
      "Simplified competitor segment (focus on 3-5 competitors vs. full dataset)",
      "Step-by-step Goal Seek tutorial with screenshots"
    ],
    advanced: [
      "Challenge to build automated competitor price tracking dashboard",
      "Explore advanced sensitivity analysis with Monte Carlo simulation",
      "Lead team discussions and mentor struggling teammates",
      "Research and present on dynamic pricing strategies"
    ],
    ell: [
      "Business pricing terminology glossary with visual examples",
      "Key CVP concepts explained with diagrams and native language support",
      "Partner with fluent speakers for debate preparation and Q&A practice"
    ]
  }
}
