import { UnitData } from "@/types/unit"

export const unit01Data: UnitData = {
  id: "Unit 1",
  title: "Smart Ledger Launch",
  duration: "2-3 weeks",
  difficulty: "Beginner",
  description: "How can we design a self‑auditing ledger that would convince a potential angel investor we keep \"clean books\" from day 1?",
  
  drivingQuestion: {
    question: "How can we design a self‑auditing ledger that would convince a potential angel investor we keep \"clean books\" from day 1?",
    context: "Throughout this unit, you'll work with real startup scenarios to build their complete accounting system from the ground up.",
    scenario: "Teams will select a startup venture and build an investor-ready financial control system."
  },
  
  objectives: {
    content: [
      "Apply the accounting equation (Assets = Liabilities + Equity)",
      "Record debits and credits for common transactions",
      "Generate and interpret a trial balance",
      "Understand double-entry bookkeeping principles",
      "Create professional financial documentation"
    ],
    skills: [
      "Create Excel Tables and structured references",
      "Use SUMIF to aggregate debits/credits",
      "Build conditional‑format rules (\"red flags\")",
      "Implement basic error‑check formulas",
      "Professional spreadsheet formatting"
    ],
    deliverables: [
      "Complete Smart Ledger Excel workbook",
      "4-minute investor pitch + live demo",
      "Self-auditing error detection system",
      "Professional documentation and user guide",
      "Trial balance with automated validation"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "Investor Pitch + Live Demo",
      description: "Present your self-auditing ledger to a panel of local finance professionals as if seeking angel investment.",
      context: "This mirrors real investor due diligence where financial systems and controls are scrutinized before investment decisions.",
      requirements: [
        "4-minute pitch explaining the ledger's features and investor benefits",
        "Live Excel demonstration showing error-checking features in action",
        "Q&A response addressing panel questions about accuracy and reliability",
        "Professional presentation using business-appropriate language and visuals"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 3,
        title: "Prototype Ledger with 10 Transactions",
        description: "Complete functional ledger with basic transaction recording",
        criteria: [
          "All transactions correctly posted using debit/credit rules",
          "Excel Table format with proper headers and structure",
          "Basic SUMIF formulas calculating account totals",
          "Trial balance showing mathematical accuracy"
        ]
      },
      {
        id: "milestone2",
        day: 6,
        title: "Integrated \"Red Flag\" Rules",
        description: "Add visual error detection and automated alerts",
        criteria: [
          "Conditional formatting highlighting negative balances",
          "Visual indicators for missing or incomplete entries",
          "Automated alerts for debit/credit imbalances",
          "Professional color scheme and formatting"
        ]
      },
      {
        id: "milestone3",
        day: 7,
        title: "Trial Balance Auto-Check",
        description: "Complete error validation and correction system",
        criteria: [
          "Formula validation: ABS(sum_debits - sum_credits) = 0",
          "Green/red indicator for balance status",
          "Error identification and correction guidance",
          "100% accuracy on provided test dataset"
        ]
      }
    ],
    rubric: [
      {
        name: "Accuracy",
        weight: "45%",
        exemplary: "All transactions correctly posted; trial balance reconciles perfectly; error-checking catches all planted errors",
        proficient: "Minor errors (1-2); trial balance reconciles with guidance; error-checking catches most issues",
        developing: "Multiple errors; trial balance doesn't reconcile; limited error detection"
      },
      {
        name: "Functionality",
        weight: "25%",
        exemplary: "All SUMIF formulas work perfectly; conditional formatting comprehensive; system handles edge cases",
        proficient: "SUMIF formulas mostly correct; basic conditional formatting working; handles normal cases",
        developing: "Some formulas broken; limited formatting; system fragile"
      },
      {
        name: "Documentation",
        weight: "15%",
        exemplary: "Clear instructions enable independent use; comprehensive comments; professional appearance",
        proficient: "Basic instructions present; some explanatory comments; neat appearance",
        developing: "Minimal documentation; unclear instructions; poor presentation"
      },
      {
        name: "Investor Pitch",
        weight: "15%",
        exemplary: "Compelling narrative addresses real investor concerns; confident delivery; handles Q&A expertly",
        proficient: "Clear explanation of benefits; adequate delivery; answers most questions",
        developing: "Basic explanation; hesitant delivery; difficulty with questions"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 1,
        title: "Building the Prototype Ledger",
        description: "Establish foundational accounting knowledge and create the basic ledger structure",
        days: [
          {
            day: 1,
            focus: "Launch & Explore",
            activities: [
              "Entry Event: Founder's talk & dataset reveal",
              "Form teams; select a start‑up (food truck, e‑commerce, tutoring) or pitch your own"
            ],
            resources: [
              "Transaction CSVs",
              "\"Choosing Your Venture\" handout"
            ]
          },
          {
            day: 2,
            focus: "Accounting Equation & Excel Tables",
            activities: [
              "Mini‑lesson: Accounting equation & T‑accounts",
              "Demo: Convert raw CSV to Excel Table",
              "Hands‑on: Format table, add headers"
            ],
            resources: [
              "Sample ledger template (Excel)"
            ]
          },
          {
            day: 3,
            focus: "Journal Entries Practice",
            activities: [
              "Guided practice: Record 10 sample transactions",
              "Peer‑quiz: Exchange ledgers & identify errors"
            ],
            resources: [
              "Journal‑entry worksheet"
            ],
            milestone: "Prototype ledger with 10 transactions"
          },
          {
            day: 4,
            focus: "SUMIF & Auto‑Totals",
            activities: [
              "Teach: SUMIF to total debits/credits by account",
              "Lab: Implement SUMIF in your ledger; test on sample data"
            ],
            resources: [
              "SUMIF formula cheat‑sheet"
            ]
          },
          {
            day: 5,
            focus: "Sprint Retrospective",
            activities: [
              "Team reflection: What worked? What blocked you?",
              "Teacher & peer feedback on prototype"
            ],
            resources: [
              "Retrospective protocol sheet"
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "Adding Self‑Audit & Pitch Prep",
        description: "Implement error detection systems and prepare for investor presentations",
        days: [
          {
            day: 6,
            focus: "Conditional‑Format \"Red Flags\"",
            activities: [
              "Demo: Highlight negative balances, missing entries",
              "Lab: Build three \"red‑flag\" rules (e.g., debit ≠ credit)"
            ],
            resources: [
              "Conditional formatting guide"
            ],
            milestone: "Integrated \"red‑flag\" rules"
          },
          {
            day: 7,
            focus: "Trial‑Balance Auto‑Check",
            activities: [
              "Teach: Trial balance logic; write check formula (`ABS(sum_debits–sum_credits)=0`)",
              "Lab & test on full dataset"
            ],
            resources: [
              "Trial‑balance formula snippet"
            ],
            milestone: "Trial balance auto‑check passes 100%"
          },
          {
            day: 8,
            focus: "Pitch Workshop",
            activities: [
              "Structure: 4‑min pitch + live demo",
              "Students storyboard key points; rehearse in teams"
            ],
            resources: [
              "Pitch storyboard template"
            ]
          },
          {
            day: 9,
            focus: "Panel Rehearsal & Revision",
            activities: [
              "Mock panel (peers + teacher) Q&A",
              "Revise workbook & slide deck based on feedback"
            ],
            resources: [
              "Peer‑feedback form"
            ]
          },
          {
            day: 10,
            focus: "Public Presentation",
            activities: [
              "4‑min pitch video + live demo to PTA panel",
              "Collect panel feedback for final reflection"
            ],
            resources: [
              "Recording setup guide"
            ],
            milestone: "Final deliverable"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "Food truck startup",
      "E-commerce business", 
      "Tutoring service",
      "Propose your own venture"
    ],
    roles: [
      "Financial Modeler",
      "UX/Documentation Lead", 
      "Data Auditor"
    ],
    presentationFormats: [
      "Slide deck presentation",
      "Live Excel demo",
      "Screencast format"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Basic Excel knowledge (creating formulas, formatting cells)",
      "Understanding of basic math operations",
      "Familiarity with business concepts"
    ],
    technology: [
      "Microsoft Excel or similar spreadsheet software",
      "Calculator (physical or digital)",
      "Computer with internet access"
    ],
    resources: [
      {
        title: "Unit 1 Excel Template",
        url: "/resources/unit01-template.xlsx",
        type: "download"
      },
      {
        title: "Sample Transaction Data",
        url: "/resources/sample-transactions.pdf",
        type: "download"
      },
      {
        title: "Standard Chart of Accounts",
        url: "/resources/chart-of-accounts.pdf",
        type: "download"
      },
      {
        title: "Excel Functions Quick Reference",
        url: "/resources/quick-reference.pdf",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Scaffolded formulas: Provide partial SUMIF syntax for students needing support",
      "Peer Tutoring: Pair students strong in Excel with those needing extra help",
      "Step-by-step visual guides for each Excel operation"
    ],
    advanced: [
      "Extension: Challenge advanced students to build dynamic dropdowns for account selection",
      "Explore advanced Excel features like pivot tables",
      "Mentor struggling teammates and lead team discussions"
    ],
    ell: [
      "Business terms glossary with visual aids",
      "Key concepts available in home language",
      "Partner with fluent English speakers for support"
    ]
  }
}