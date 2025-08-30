import { UnitData } from "@/types/unit"

export const unit05Data: UnitData = {
  id: "Unit 5",
  title: "PayDay Simulator",
  duration: "2 weeks",
  difficulty: "Intermediate",
  description: "How can a small business owner predict payroll cash-outs and still make rent on time?",
  
  drivingQuestion: {
    question: "How can a small business owner predict payroll cash-outs and still make rent on time?",
    context: "Small business owners often struggle with cash flow timing, especially when payroll obligations coincide with other major expenses like rent. Through this unit, you'll build a comprehensive payroll system that helps predict and manage these cash flow challenges.",
    scenario: "You'll analyze a café owner's situation where payroll triggered an overdraft, then build tools to prevent similar cash flow crises."
  },
  
  objectives: {
    content: [
      "Calculate gross and net pay, including withholdings and employer tax contributions",
      "Use tax tables to compute accurate deductions and liabilities",
      "Reconcile payroll registers against bank transactions to detect timing mismatches",
      "Understand the relationship between payroll timing and cash flow management"
    ],
    skills: [
      "XLOOKUP for employee data, wage bands, and tax tables",
      "IF logic for deductions and conditional output",
      "SUMIFS and conditional formatting for reconciliation",
      "Data validation for stub formatting (English/Chinese)",
      "Advanced Excel formulas for payroll calculations"
    ],
    deliverables: [
      "Complete 10-employee payroll calculator",
      "Bilingual pay stub generator",
      "Bank reconciliation report with mismatch detection",
      "Screencast tutorial demonstrating the system",
      "Cash flow prediction model"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "PayDay Simulator Tutorial",
      description: "Create and present a comprehensive screencast tutorial showing how to use your payroll system to prevent cash flow crises.",
      context: "Local youth entrepreneurs need practical tools for managing payroll and cash flow. Your tutorial will be published on the school's YouTube channel to help the broader community.",
      requirements: [
        "Complete payroll calculator handling multiple employee types (hourly, tipped, salaried)",
        "Clear screencast demonstrating all system features and edge cases",
        "Professional presentation suitable for public YouTube publication",
        "Documentation showing how the system prevents cash flow problems"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 3,
        title: "Prototype Calculator",
        description: "Single-employee payroll calculator with basic gross-to-net computation",
        criteria: [
          "Accurate gross pay calculation for different employee types",
          "Correct withholding calculations using tax tables",
          "IF formulas for conditional deductions",
          "Clean, professional formatting"
        ]
      },
      {
        id: "milestone2",
        day: 4,
        title: "Validation & Error Detection",
        description: "Bulletproof the prototype with data validation and visual error checks",
        criteria: [
          "Input validation prevents missing/invalid entries (IDs, hours, dates)",
          "Conditional formatting highlights errors and warnings",
          "Clear user guidance and labels for correction",
          "Error-checking system documents and flags edge cases"
        ]
      },
      {
        id: "milestone3",
        day: 5,
        title: "Advanced Automation Engine",
        description: "Scaled payroll engine with robust mapping and overtime logic",
        criteria: [
          "Structured references and named ranges for reliability",
          "XLOOKUP maps employee data and tax tables with safe defaults",
          "Overtime/tiered logic implemented (e.g., SUMPRODUCT or equivalent)",
          "Automation passes advanced dataset with documented audit checks"
        ]
      }
    ],
    rubric: [
      {
        name: "Calculation Accuracy",
        weight: "50%",
        exemplary: "Gross/net formulas and tax tables compute correct results for all employee types; handles edge cases flawlessly",
        proficient: "Calculations mostly accurate; minor errors in complex scenarios; handles standard cases well",
        developing: "Multiple calculation errors; limited employee type support; fragile formulas"
      },
      {
        name: "Reconciliation Success",
        weight: "15%",
        exemplary: "Bank/payroll matching perfect; all mismatches identified and explained with business impact analysis",
        proficient: "Most transactions reconcile correctly; basic mismatch identification; some analysis present",
        developing: "Limited reconciliation capability; mismatches not clearly identified; minimal analysis"
      },
      {
        name: "Tutorial Clarity",
        weight: "20%",
        exemplary: "Screencast demonstrates clear steps, comprehensive labeling, and thorough explanation of model logic",
        proficient: "Tutorial covers main features adequately; decent explanation; mostly clear presentation",
        developing: "Tutorial unclear or incomplete; limited explanation; difficult to follow"
      },
      {
        name: "Iteration & Feedback",
        weight: "15%",
        exemplary: "Multiple improvement cycles documented; peer feedback incorporated; clear evolution of solution",
        proficient: "Some improvements visible; basic feedback incorporation; decent documentation",
        developing: "Minimal iteration; limited feedback integration; poor documentation of changes"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 9,
        title: "Payroll Logic & Prototype",
        description: "Build foundational understanding of payroll calculations and create single-employee prototype",
        days: [
          {
            day: 1,
            focus: "Launch & Explore: The Payroll Cash Crunch",
            activities: [
              "Watch kickoff video: Sarah’s Payroll Cash Crunch",
              "Discuss timing risk and cash-out vs deposits",
              "Comprehension check on unit context and goals"
            ],
            resources: [
              "Unit intro video",
              "Lesson text and comprehension prompts"
            ]
          },
          {
            day: 2,
            focus: "Skill Introduction: Gross to Net Calculations",
            activities: [
              "Teach gross→net process across employee types",
              "Guided practice with tax table logic",
              "Fill-in-the-blank and scenario checks"
            ],
            resources: [
              "Tax table handout",
              "Formula reference guide"
            ]
          },
          {
            day: 3,
            focus: "Application Practice: Building the Prototype Calculator",
            activities: [
              "Build single-employee payroll calculator",
              "Test with hourly, salaried, tipped scenarios",
              "Peer review for calculation accuracy"
            ],
            resources: [
              "Starter workbook template"
            ],
            milestone: "Prototype calculator"
          },
          {
            day: 4,
            focus: "Making It Bulletproof: Validation & Error Detection",
            activities: [
              "Implement data validation rules (IDs, hours, dates)",
              "Add conditional formatting error alerts",
              "Use error-checking system to test edge cases"
            ],
            resources: [
              "Validation practice dataset (/resources/unit05-validation-practice.csv)",
              "Bug tracking worksheet"
            ]
          },
          {
            day: 5,
            focus: "Advanced Automation: Payroll Tax & Overtime Engine",
            activities: [
              "Engineer mapping with XLOOKUP and safe defaults",
              "Implement overtime/tiered logic on advanced dataset",
              "Run mastery check with error/audit flags"
            ],
            resources: [
              "Advanced practice dataset (/resources/unit05-payroll-automation-advanced-practice.csv)",
              "Automation checklist"
            ]
          }
        ]
      },
      {
        weekNumber: 10,
        title: "Scaling & Screencast",
        description: "Scale to multi-employee system and create professional tutorial presentation",
        days: [
          {
            day: 6,
            focus: "New Skill Focus",
            activities: [
              "Introduce XLOOKUP for employee data management",
              "Build bilingual pay stub formatting system",
              "Test with multiple employee types"
            ],
            resources: [
              "Bilingual template examples",
              "XLOOKUP tutorial materials"
            ],
            milestone: "Register + stubs"
          },
          {
            day: 7,
            focus: "Model Completion",
            activities: [
              "Build 10-employee payroll file",
              "Test extreme scenarios and edge cases",
              "Complete bank reconciliation features"
            ],
            resources: [
              "Payroll scenario cards",
              "Edge case test dataset"
            ],
            milestone: "Reconciliation report"
          },
          {
            day: 8,
            focus: "Presentation Prep",
            activities: [
              "Plan comprehensive how-to screencast tutorial",
              "Create script and storyboard",
              "Practice tutorial delivery"
            ],
            resources: [
              "Script planner template",
              "Screencast planning guide"
            ]
          },
          {
            day: 9,
            focus: "Mock Panel & Revisions",
            activities: [
              "Peer review of screencast drafts",
              "Adjust based on clarity and accuracy feedback",
              "Final testing and bug fixes"
            ],
            resources: [
              "Screencast rubric",
              "Peer feedback forms"
            ]
          },
          {
            day: 10,
            focus: "Public Presentation",
            activities: [
              "Publish final screencast on school YouTube",
              "Share with local youth entrepreneurs",
              "Collect community feedback"
            ],
            resources: [
              "Upload checklist",
              "Community sharing guidelines"
            ],
            milestone: "Final deliverable"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "Hourly wage employees (retail, food service)",
      "Tipped employees (restaurant, service industry)",
      "Salaried employees (office, professional services)",
      "Mixed workforce scenario"
    ],
    roles: [
      "Tax Analyst - Focus on withholding calculations and compliance",
      "UX Designer - Create intuitive interfaces and user experience",
      "QA Tester - Identify edge cases and ensure accuracy"
    ],
    presentationFormats: [
      "Live demonstration with Q&A",
      "Professional screencast tutorial",
      "Illustrated step-by-step PDF guide"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Basic understanding of gross vs. net pay concepts",
      "Familiarity with percentage calculations",
      "Understanding of basic business cash flow concepts",
      "Knowledge of Excel formulas from previous units"
    ],
    technology: [
      "Microsoft Excel with XLOOKUP function support",
      "Screen recording software for screencast creation",
      "Access to sample payroll and banking data",
      "Calculator for verification"
    ],
    resources: [
      {
        title: "PayDay Simulator Template",
        url: "/resources/unit05-payday-template.xlsx",
        type: "download"
      },
      {
        title: "Tax Tables Reference",
        url: "/resources/tax-tables-2024.pdf",
        type: "download"
      },
      {
        title: "Sample Bank Statements",
        url: "/resources/sample-bank-statements.pdf",
        type: "download"
      },
      {
        title: "Bilingual Pay Stub Templates",
        url: "/resources/bilingual-paystubs.xlsx",
        type: "download"
      },
      {
        title: "Screencast Planning Guide",
        url: "/resources/screencast-guide.pdf",
        type: "download"
      },
      {
        title: "Validation Practice Dataset",
        url: "/resources/unit05-validation-practice.csv",
        type: "download"
      },
      {
        title: "Advanced Automation Practice Dataset",
        url: "/resources/unit05-payroll-automation-advanced-practice.csv",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Pre-filled starter calculator with formula scaffolding",
      "Step-by-step calculation worksheets with visual guides",
      "Simplified tax table with highlighted key sections",
      "Peer pairing with students strong in Excel formulas"
    ],
    advanced: [
      "Challenge version with overtime calculations and bonus structures",
      "Multi-jurisdiction tax scenarios (state/federal variations)",
      "Integration with accounting software or APIs",
      "Mentor role helping other students debug complex formulas"
    ],
    ell: [
      "Bilingual terminology glossary for payroll and tax terms",
      "Visual flowcharts showing calculation processes",
      "Native language support for pay stub generation",
      "Partner with bilingual students for translation assistance"
    ]
  }
}
