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
        day: 3,
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
        day: 7,
        title: "Build \"What‑If\" CVP Model",
        description: "Create comprehensive CVP model with sensitivity analysis",
        criteria: [
          "Functional CVP model with fixed/variable cost inputs",
          "Professional CVP graph with proper labeling",
          "One- and two-variable data tables for sensitivity analysis",
          "Goal Seek scenarios for target profit analysis"
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
            focus: "Launch & Data Prep",
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
            focus: "Concept Introduction",
            activities: [
              "Teach markup vs. margin concepts with examples",
              "Guided practice problems calculating both metrics"
            ],
            resources: [
              "Markup vs. margin worksheet",
              "Calculator practice problems"
            ]
          },
          {
            day: 3,
            focus: "CVP Modeling",
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
            focus: "Peer Critique",
            activities: [
              "Gallery walk of initial CVP models",
              "Collect structured peer feedback using forms"
            ],
            resources: [
              "Peer critique form",
              "Gallery walk protocol"
            ]
          },
          {
            day: 5,
            focus: "Sprint Retrospective",
            activities: [
              "Reflect on model logic vs. peer feedback",
              "Plan revisions for next week's work"
            ],
            resources: [
              "Reflection prompt",
              "Revision planning template"
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
            focus: "Goal Seek Practice",
            activities: [
              "Introduce Goal Seek feature with demonstration",
              "Apply to set prices for target profit scenarios"
            ],
            resources: [
              "Goal Seek tutorial",
              "Practice scenarios worksheet"
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