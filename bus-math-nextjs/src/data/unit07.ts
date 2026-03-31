import { UnitData } from "@/types/unit"

export const unit07Data: UnitData = {
  id: "Unit 7",
  title: "Inventory Accounting",
  duration: "2 weeks",
  difficulty: "Intermediate",
  description: "Which inventory valuation method best reflects our business reality and supports sound decision-making?",
  
  drivingQuestion: {
    question: "Which inventory valuation method best reflects our business reality and supports sound decision-making?",
    context: "Sarah Chen runs TechStart Solutions and needs help choosing the right inventory valuation method for her growing business.",
    scenario: "Teams will analyze real inventory data to develop strategic recommendations for inventory valuation methods."
  },
  
  objectives: {
    content: [
      "Explain and apply FIFO, LIFO, Specific Identification, and Weighted Average inventory methods",
      "Compute Cost of Goods Sold and ending inventory using all four inventory valuation methods",
      "Calculate the Inventory Turnover Ratio and analyze implications for cash management"
    ],
    skills: [
      "Build inventory valuation schedules in Excel with method comparison",
      "Implement FIFO and LIFO layer calculations with structured references",
      "Create dynamic ratio calculations and visualizations (e.g., turnover ratio chart)"
    ],
    deliverables: [
      "Written advisory brief (2–3 pages) with method recommendation",
      "5‑minute live pitch to executive audience",
      "Dynamic Excel model with method selection features",
      "Professional visualization of COGS impact analysis"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "Advisory Brief + Executive Presentation",
      description: "Deliver strategic recommendations on inventory valuation methods to an executive audience.",
      context: "This mirrors real corporate decision-making where finance teams present inventory method choices to leadership for approval.",
      requirements: [
        "2-3 page written advisory brief with strategic rationale",
        "5-minute live pitch presentation to executive panel",
        "Dynamic Excel model demonstrating all four inventory methods",
        "Professional visualization showing COGS impact under different methods",
        "Q&A response addressing questions about cash flow and reporting implications"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 2,
        title: "Basic Inventory Schedule",
        description: "Complete functional inventory schedules showing beginning inventory, purchases, and goods available for sale",
        criteria: [
          "Accurate beginning inventory and purchases data entry",
          "Correct goods available for sale calculations",
          "Professional formatting and clear documentation",
          "Peer accuracy verification completed"
        ]
      },
      {
        id: "milestone2",
        day: 6,
        title: "Dynamic Method Selection Feature",
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
        exemplary: "All inventory valuations are mathematically correct; formulas handle edge cases flawlessly",
        proficient: "Most calculations correct with minor errors; formulas work for standard cases",
        developing: "Multiple calculation errors; formulas have significant issues"
      },
      {
        name: "Strategic Rationale",
        weight: "20%",
        exemplary: "Justification clearly aligns with business objectives; demonstrates deep understanding of method implications",
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
        exemplary: "Thoughtful integration of all peer and executive feedback into final deliverables",
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
        description: "Build foundational inventory models with peer verification",
        days: [
          {
            day: 1,
            focus: "Unit Launch: Sarah's Inventory Problem",
            activities: [
              "Entry Event with Sarah sharing her inventory tracking challenge",
              "Team formation and role assignment",
              "Review raw inventory dataset"
            ],
            resources: [
              "Sarah's case brief",
              "Inventory CSV files"
            ]
          },
          {
            day: 2,
            focus: "Inventory Cost Flow Foundations: Beginning Inventory, Purchases, and COGS",
            activities: [
              "Teach inventory flow concepts and the ending inventory formula",
              "Demo inventory schedule setup in Excel",
              "Guided practice with sample inventory data"
            ],
            resources: [
              "Inventory flow guide",
              "Sample workbook template"
            ]
          },
          {
            day: 3,
            focus: "FIFO and LIFO: Two Ways to Value the Same Inventory",
            activities: [
              "Explain FIFO vs. LIFO logic and business implications",
              "Guided practice with sample transactions",
              "Peer accuracy verification"
            ],
            resources: [
              "FIFO/LIFO examples",
              "Inventory template"
            ],
            milestone: "Basic inventory schedule completed"
          },
          {
            day: 4,
            focus: "Specific Identification and Weighted Average in Simple Excel",
            activities: [
              "Build Excel Tables and formulas for Specific ID and Weighted Average",
              "Implement structured references with automated COGS and Ending Inventory",
              "Validate with error checks and edge cases"
            ],
            resources: [
              "Advanced template",
              "Peer rubric for validation",
              "/resources/unit07-inventory-valuation-practice.csv"
            ]
          },
          {
            day: 5,
            focus: "Medium-Complexity Excel: Build a Method Comparison Workbook",
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
            focus: "Highest-Complexity Excel: Inventory Decision Dashboard and Method Recommendation",
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
            focus: "Dress Rehearsal: One Shared Inventory Dataset, One Shared Workbook",
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
            focus: "Group Project Kickoff: New Business, New Inventory Data, Same Workbook Logic",
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
            focus: "Group Project Build: Complete the Workbook and Rehearse the Recommendation",
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
            focus: "Final Presentation: Defend Ending Inventory, Method Choice, and Business Recommendation",
            activities: [
              "Deliver advisory brief + pitch to executive panel",
              "Professional Q&A session",
              "Collect feedback for portfolio reflection"
            ],
            resources: [
              "Executive feedback sheet",
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
      "Technology products focus",
      "Propose your own industry context"
    ],
    roles: [
      "Financial Analyst",
      "Inventory Strategy Specialist", 
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
      "Knowledge of inventory management principles"
    ],
    technology: [
      "Microsoft Excel with advanced function capabilities",
      "Presentation software (PowerPoint or similar)",
      "Calculator for verification",
      "Computer with internet access for research"
    ],
    resources: [
      {
        title: "Unit 7 Excel Template with Inventory Functions",
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
        title: "Sample Inventory Dataset",
        url: "/resources/sample-inventory-data.csv",
        type: "download"
      },
      {
        title: "Unit 7 Inventory Valuation Practice Data",
        url: "/resources/unit07-inventory-valuation-practice.csv",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Step‑by‑step tutorials for inventory calculations with visual examples",
      "Guided formula examples with completed sections for reference",
      "Scaffolded templates with partial formulas already implemented",
      "Peer tutoring partnerships with stronger Excel users"
    ],
    advanced: [
      "Explore LIFO reserve and tax implications as extension activity",
      "Perform sensitivity analysis on purchase timing and volume variations",
      "Create automated dashboard with multiple scenario comparisons",
      "Mentor struggling teammates and lead technical troubleshooting"
    ],
    ell: [
      "Financial terminology glossary with visual aids and translations",
      "Key inventory concepts available in home language",
      "Partner with fluent English speakers for presentation preparation",
      "Visual workflow diagrams for complex calculation processes"
    ]
  }
}
