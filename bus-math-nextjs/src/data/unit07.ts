import { UnitData } from "@/types/unit"

export const unit07Data: UnitData = {
  id: "Unit 7",
  title: "Asset & Inventory Tracker",
  duration: "2 weeks",
  difficulty: "Intermediate",
  description: "Which depreciation and inventory methods best align with our cash‑flow and tax strategy?",
  
  drivingQuestion: {
    question: "Which depreciation and inventory methods best align with our cash‑flow and tax strategy?",
    context: "Local auditor shares a real case of a company fined for inventory misvaluation and provides anonymized asset and inventory data.",
    scenario: "Teams will analyze real asset and inventory data to develop strategic recommendations for depreciation and inventory valuation methods."
  },
  
  objectives: {
    content: [
      "Explain and apply Straight‑Line (SLN) and Double‑Declining Balance (DDB) depreciation methods",
      "Compute Cost of Goods Sold and ending inventory using FIFO and LIFO inventory valuation",
      "Calculate the Inventory Turnover Ratio and analyze implications for cash management and tax planning"
    ],
    skills: [
      "Build depreciation schedules using Excel's SLN and DDB functions",
      "Implement FIFO and LIFO layer calculations with array formulas",
      "Create dynamic ratio calculations and visualizations (e.g., turnover ratio chart)"
    ],
    deliverables: [
      "Written advisory brief (2–3 pages)",
      "5‑minute live pitch to Board of Directors panel",
      "Dynamic Excel model with method selection features",
      "Professional visualization of COGS impact analysis"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "Advisory Brief + Board Presentation",
      description: "Deliver strategic recommendations on depreciation and inventory methods to a Board of Directors panel.",
      context: "This mirrors real corporate decision-making where CFOs present strategic financial method choices to board members for approval.",
      requirements: [
        "2-3 page written advisory brief with strategic rationale",
        "5-minute live pitch presentation to Board panel",
        "Dynamic Excel model demonstrating both depreciation methods",
        "Professional visualization showing COGS impact under different methods",
        "Q&A response addressing board questions about cash flow and tax implications"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 3,
        title: "Basic Depreciation Schedule",
        description: "Complete functional depreciation schedules for both SLN and DDB methods",
        criteria: [
          "Accurate SLN depreciation calculations using Excel formulas",
          "Correct DDB depreciation schedule implementation",
          "Professional formatting and clear documentation",
          "Peer accuracy verification completed"
        ]
      },
      {
        id: "milestone2",
        day: 6,
        title: "Dynamic Selection Feature",
        description: "Automated method selection system with dropdowns and INDEX/MATCH logic",
        criteria: [
          "Working dropdown menus for method selection",
          "INDEX/MATCH formulas functioning correctly",
          "Dynamic updates when methods are changed",
          "Error-free calculations across all scenarios"
        ]
      }
    ],
    rubric: [
      {
        name: "Technical Accuracy",
        weight: "50%",
        exemplary: "All depreciation schedules and inventory valuations are mathematically correct; formulas handle edge cases flawlessly",
        proficient: "Most calculations correct with minor errors; formulas work for standard cases",
        developing: "Multiple calculation errors; formulas have significant issues"
      },
      {
        name: "Strategic Rationale",
        weight: "20%",
        exemplary: "Justification clearly aligns with cash‑flow and tax objectives; demonstrates deep understanding of business implications",
        proficient: "Basic justification provided; shows understanding of key concepts",
        developing: "Limited or unclear rationale; missing connection to business strategy"
      },
      {
        name: "Pitch Delivery",
        weight: "15%",
        exemplary: "Clear, professional presentation with confident delivery and strong audience engagement",
        proficient: "Adequate presentation skills with clear communication",
        developing: "Unclear delivery or unprofessional presentation style"
      },
      {
        name: "Responsiveness to Critique",
        weight: "15%",
        exemplary: "Thoughtful integration of all peer and Board feedback into final deliverables",
        proficient: "Good incorporation of most feedback",
        developing: "Limited responsiveness to feedback or superficial changes"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 13,
        title: "Model Construction & Analysis",
        description: "Build foundational depreciation and inventory models with peer verification",
        days: [
          {
            day: 1,
            focus: "Launch & Data Exploration",
            activities: [
              "Entry Event with auditor sharing real case study",
              "Team formation and role assignment",
              "Review raw asset and inventory dataset"
            ],
            resources: [
              "Auditor case brief",
              "Asset/inventory CSV files"
            ]
          },
          {
            day: 2,
            focus: "Depreciation Techniques",
            activities: [
              "Teach SLN & DDB formulas and business applications",
              "Demo depreciation schedule setup in Excel",
              "Guided practice with sample asset data"
            ],
            resources: [
              "SLN/DDB function guide",
              "Sample workbook template"
            ]
          },
          {
            day: 3,
            focus: "Inventory Methods Introduction",
            activities: [
              "Explain FIFO vs. LIFO logic and business implications",
              "Guided practice with sample transactions",
              "Peer accuracy verification"
            ],
            resources: [
              "FIFO/LIFO examples",
              "Inventory template"
            ],
            milestone: "Basic depreciation schedule completed"
          },
          {
            day: 4,
            focus: "Technical Application",
            activities: [
              "Build array formulas for layer costing",
              "Implement complex inventory calculations",
              "Peer accuracy check and validation"
            ],
            resources: [
              "Advanced template",
              "Peer rubric for validation"
            ]
          },
          {
            day: 5,
            focus: "Checkpoint & Reflection",
            activities: [
              "Sprint retrospective on technical progress",
              "Concept quiz on method differences",
              "Team reflection and planning"
            ],
            resources: [
              "Quiz assessment sheet",
              "Retrospective protocol"
            ]
          }
        ]
      },
      {
        weekNumber: 14,
        title: "Synthesis & Presentation",
        description: "Advanced modeling features and strategic presentation preparation",
        days: [
          {
            day: 6,
            focus: "Advanced Modeling",
            activities: [
              "Automate method selection with dropdowns",
              "Implement INDEX/MATCH logic for dynamic switching",
              "Test all scenarios and edge cases"
            ],
            resources: [
              "Advanced workbook template",
              "Dropdown setup guide"
            ],
            milestone: "Dynamic selection feature implemented"
          },
          {
            day: 7,
            focus: "Ratio & Visualization",
            activities: [
              "Calculate inventory turnover ratio",
              "Chart COGS impact under each method",
              "Create professional visualizations"
            ],
            resources: [
              "Chart creation guide",
              "Sample visualization templates"
            ]
          },
          {
            day: 8,
            focus: "Advisory Brief Draft",
            activities: [
              "Outline strategic rationale for method selection",
              "Draft written brief with supporting analysis",
              "Peer critique and feedback session"
            ],
            resources: [
              "Brief outline template",
              "Peer critique form"
            ]
          },
          {
            day: 9,
            focus: "Mock Board Presentation",
            activities: [
              "5‑minute pitch rehearsal to classmates",
              "Practice Q&A with difficult questions",
              "Incorporate peer feedback into final presentation"
            ],
            resources: [
              "Pitch rubric",
              "Sample slide deck template"
            ]
          },
          {
            day: 10,
            focus: "Public Presentation",
            activities: [
              "Deliver advisory brief + pitch to Board of Directors panel",
              "Professional Q&A session",
              "Collect feedback for portfolio reflection"
            ],
            resources: [
              "Board feedback sheet",
              "Recording setup for portfolio"
            ],
            milestone: "Final deliverable presentation"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "Retail industry context",
      "Manufacturing business scenario", 
      "Technology assets focus",
      "Propose your own industry context"
    ],
    roles: [
      "Financial Analyst",
      "Tax Strategy Specialist", 
      "Presentation Coordinator"
    ],
    presentationFormats: [
      "Waterfall chart visualization",
      "Line graph comparison",
      "Interactive dashboard format",
      "Sensitivity analysis presentation"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Understanding of basic accounting principles and the accounting equation",
      "Familiarity with Excel formulas and functions",
      "Basic understanding of business operations and cash flow concepts",
      "Knowledge of inventory and asset management principles"
    ],
    technology: [
      "Microsoft Excel with advanced function capabilities",
      "Presentation software (PowerPoint or similar)",
      "Calculator for verification",
      "Computer with internet access for research"
    ],
    resources: [
      {
        title: "Unit 7 Excel Template with SLN/DDB Functions",
        url: "/resources/unit07-template.xlsx",
        type: "download"
      },
      {
        title: "FIFO/LIFO Calculation Worksheets",
        url: "/resources/inventory-worksheets.pdf",
        type: "download"
      },
      {
        title: "Advisory Brief Outline Template",
        url: "/resources/advisory-brief-template.docx",
        type: "download"
      },
      {
        title: "Peer Critique Rubric",
        url: "/resources/peer-critique-rubric.pdf",
        type: "download"
      },
      {
        title: "Sample Asset and Inventory Dataset",
        url: "/resources/sample-asset-inventory-data.csv",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Step‑by‑step tutorials for depreciation calculations with visual examples",
      "Guided formula examples with completed sections for reference",
      "Scaffolded templates with partial formulas already implemented",
      "Peer tutoring partnerships with stronger Excel users"
    ],
    advanced: [
      "Explore MACRS depreciation method as extension activity",
      "Perform sensitivity analysis on salvage values and useful life variations",
      "Create automated dashboard with multiple scenario comparisons",
      "Mentor struggling teammates and lead technical troubleshooting"
    ],
    ell: [
      "Financial terminology glossary with visual aids and translations",
      "Key depreciation and inventory concepts available in home language",
      "Partner with fluent English speakers for presentation preparation",
      "Visual workflow diagrams for complex calculation processes"
    ]
  }
}