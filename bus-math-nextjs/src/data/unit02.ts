import { UnitData } from "@/types/unit"

export const unit02Data: UnitData = {
  id: "Unit 2",
  title: "Month-End Wizard",
  duration: "2-3 weeks",
  difficulty: "Intermediate",
  description: "What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?",
  
  drivingQuestion: {
    question: "What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?",
    context: "Students will experience the real cost of slow month-end closes and learn to build automated solutions that maintain accounting accuracy while dramatically improving efficiency.",
    scenario: "Teams will create an interactive Excel \"Month-End Wizard\" that automates adjusting entries, closing entries, and month-end procedures for presentation at the Innovation Fair."
  },
  
  objectives: {
    content: [
      "Explain and record accruals and deferrals in accordance with GAAP",
      "Compute straight-line (SLN) depreciation for fixed assets", 
      "Prepare closing entries to zero out temporary accounts",
      "Understand the month-end closing process and its business impact"
    ],
    skills: [
      "Define and use named ranges for dynamic ledgers",
      "Record and edit macros with the macro recorder",
      "Write simple VBA procedures to insert adjusting entries (Optional)",
      "Create user-friendly button or form control to trigger macros",
      "Design intuitive user interfaces for financial automation"
    ],
    deliverables: [
      "Interactive Excel \"Month-End Wizard\" with UI button and macro",
      "Live demo presentation at Innovation Fair", 
      "Automated system that reduces close time to under 2 hours",
      "User-friendly interface with error-checking routines",
      "Documentation showing before/after efficiency improvements"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "Innovation Fair Demo: Month-End Wizard v1.0",
      description: "Present your automated month-end closing system to Innovation Fair visitors, demonstrating how it reduces closing time from days to hours while maintaining GAAP compliance.",
      context: "This mirrors real-world business scenarios where CFOs seek automation solutions to improve efficiency and reduce the risk of manual errors in critical financial processes.",
      requirements: [
        "Live Excel demonstration showing macro automation in action",
        "Clear explanation of time savings achieved (target: under 2 hours)", 
        "Professional presentation to diverse audience (teachers, parents, entrepreneurs)",
        "User-testing feedback collection and analysis",
        "Documentation of GAAP compliance maintained throughout automation"
      ]
    },
    milestones: [
      {
        id: "milestone1", 
        day: 3,
        title: "Four Scenarios Mapped",
        description: "Successfully map four adjusting-entry scenarios into ledger format",
        criteria: [
          "All four adjusting-entry scenarios correctly identified and categorized",
          "Proper debit/credit mappings following GAAP principles",
          "Clear documentation of accruals, deferrals, and depreciation entries",
          "Peer review validation using provided rubric"
        ]
      },
      {
        id: "milestone2",
        day: 5,
        title: "Scenario Engine + Validation Installed",
        description: "Advanced month-end automation built with XLOOKUP mapping, SWITCH/IFS routing, and robust validation",
        criteria: [
          "XLOOKUP maps AccountID to Method with if_not_found handling",
          "SWITCH/IFS logic selects correct method and computes adjusted values",
          "Validation flags missing/invalid mappings and out-of-range amounts",
          "Aggregations (SUMIF/SUMPRODUCT) accurately summarize by criteria"
        ]
      },
      {
        id: "milestone3",
        day: 8,
        title: "Time < 2 Hours & UI Button",
        description: "Complete system achieving target efficiency with professional interface",
        criteria: [
          "Month-end close simulation completed in under 2 hours",
          "User-friendly button interface for macro execution",
          "Professional formatting and error-flag system implemented", 
          "System handles edge cases and provides clear user feedback"
        ]
      }
    ],
    rubric: [
      {
        name: "Correctness of Entries",
        weight: "40%",
        exemplary: "All adjusting & closing entries comply with GAAP and balance perfectly; no errors in automation logic",
        proficient: "Most entries correct with minor issues; automation works for standard cases",  
        developing: "Multiple errors in entries; automation unreliable or produces incorrect results"
      },
      {
        name: "Automation Efficiency", 
        weight: "25%",
        exemplary: "Macro/VBA reduces close time to under 2 hours consistently; handles complex scenarios",
        proficient: "Achieves time target with minor manual intervention; works for basic scenarios",
        developing: "Fails to meet time target; requires significant manual work or frequent debugging"
      },
      {
        name: "UX Design & Usability",
        weight: "10%", 
        exemplary: "Interface is intuitive and professional; comprehensive documentation; named ranges well-organized",
        proficient: "Basic usability with clear instructions; adequate documentation and organization",
        developing: "Confusing interface; poor documentation; difficult for others to understand or use"
      },
      {
        name: "Demo Clarity & Engagement",
        weight: "15%",
        exemplary: "Compelling presentation clearly explains business value; engages diverse audience effectively",
        proficient: "Clear explanation of features and benefits; adequate audience engagement", 
        developing: "Unclear presentation; fails to communicate business value or engage audience"
      },
      {
        name: "Post-Fair Improvements",
        weight: "10%",
        exemplary: "Implements meaningful improvements based on user feedback; shows iterative design thinking",
        proficient: "Makes basic improvements based on feedback; shows responsiveness to user needs",
        developing: "Limited or no improvements; fails to incorporate feedback or show learning"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 3,
        title: "Launch & Automate Basics", 
        description: "Experience the month-end challenge and begin building automation solutions",
        days: [
          {
            day: 1,
            focus: "Launch & Explore: CFO's Month-End Challenge",
            activities: [
              "Entry Event: CFO vlog clip on the real cost of slow closes",
              "In-class \"shoebox receipt\" challenge: manually sort receipts and time yourselves",
              "Form teams & choose automation focus area"
            ],
            resources: [
              "CFO vlog link",
              "Receipt data packet",
              "Team formation guidelines"
            ]
          },
          {
            day: 2, 
            focus: "Skill Introduction: Accruals, Deferrals & SLN Depreciation",
            activities: [
              "Mini-lesson: Accruals/deferrals & SLN depreciation principles",
              "Demo: Named ranges and macro recorder basics",
              "Hands-on practice with sample ledger workbook"
            ],
            resources: [
              "GAAP slide deck",
              "Sample ledger workbook", 
              "Named ranges tutorial"
            ]
          },
          {
            day: 3,
            focus: "Guided Practice: Four Scenarios into Ledger", 
            activities: [
              "Students map four adjusting-entry scenarios into ledger format",
              "Instructor support and troubleshooting", 
              "Peer collaboration on complex scenarios"
            ],
            resources: [
              "Adjusting-entry scenario sheet",
              "Mapping template workbook"
            ],
            milestone: "Four scenarios mapped"
          },
          {
            day: 4,
            focus: "Excel Tables & SUMIF: Building the Month-End Wizard Foundation",
            activities: [
              "Create Excel Tables with structured references for transactions",
              "Build SUMIF formulas for revenue, expenses, and adjusting categories",
              "Introduce named ranges and link summaries to dashboard cells"
            ],
            resources: [
              "Sample transaction dataset",
              "SUMIF reference sheet"
            ]
          },
          {
            day: 5,
            focus: "Advanced Month-End Automation: Scenario Engine & Validation",
            activities: [
              "Map AccountID to Method using XLOOKUP with fallback",
              "Route logic with SWITCH/IFS to compute adjusted values",
              "Implement validation rules and audit flags for reliability"
            ],
            resources: [
              "Advanced practice CSV: /resources/unit02-month-end-advanced-practice.csv",
              "Validation checklist"
            ]
          }
        ]
      },
      {
        weekNumber: 4,
        title: "Build, Test & Demo",
        description: "Complete the automation system and prepare for public presentation",
        days: [
          {
            day: 6,
            focus: "Advanced Automation",
            activities: [
              "Mini-lesson: Closing entries & VBA basics",
              "Students choose VBA vs. no-code macro recorder approach", 
              "Begin building automated closing entry system"
            ],
            resources: [
              "VBA cheat-sheet",
              "Macro recorder tutorial",
              "Closing entries examples"
            ],
            milestone: "Macro inserts closing entries"
          },
          {
            day: 7,
            focus: "Time-to-Close Simulation", 
            activities: [
              "Class-wide simulation: run month-end close with macros",
              "Record and analyze \"time to close\" metrics",
              "Debug and optimize automation performance"
            ],
            resources: [
              "Simulation dataset",
              "Performance tracking sheet"
            ]
          },
          {
            day: 8,
            focus: "UX & Button Design",
            activities: [
              "Design professional UI button style and placement",
              "Integrate named range checks & error-flag formatting", 
              "Final testing and quality assurance"
            ],
            resources: [
              "UI template workbook",
              "Error-checking examples"
            ],
            milestone: "Time < 2 hrs & UI button"
          },
          {
            day: 9,
            focus: "Mock Demo & Feedback",
            activities: [
              "Teams demo Month-End Wizard to peers & teacher",
              "Collect user-testing surveys and feedback",
              "Final revisions based on mock demo results"
            ],
            resources: [
              "Demo script template", 
              "User survey form"
            ]
          },
          {
            day: 10,
            focus: "Public Presentation",
            activities: [
              "Innovation Fair booth setup with professional signage", 
              "Live demo to visitors (teachers, parents, entrepreneurs)",
              "Collect visitor feedback and document learning outcomes"
            ],
            resources: [
              "Fair signage templates",
              "Visitor feedback log"
            ],
            milestone: "Final deliverable: Month-End Wizard v1.0"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "Accrual-focused automation (revenue/expense recognition)",
      "Deferral-focused automation (prepaid/unearned items)", 
      "Depreciation automation (fixed asset schedules)",
      "Closing entry automation (temporary account zeroing)",
      "Comprehensive solution (all adjusting entry types)"
    ],
    roles: [
      "Automation Developer (macro/VBA specialist)",
      "UX Designer (interface and user experience)", 
      "Quality Assurance (testing and validation)",
      "Business Analyst (efficiency measurement)"
    ],
    presentationFormats: [
      "Live Excel demonstration with narration",
      "Interactive booth with hands-on visitor experience", 
      "Video screencast with voice-over explanation",
      "Split demo: before/after efficiency comparison"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Basic understanding of debits and credits from Unit 1",
      "Excel formulas and functions (SUMIF, basic conditionals)",
      "Understanding of the accounting cycle",
      "Familiarity with Excel Tables and named ranges"
    ],
    technology: [
      "Microsoft Excel with macro capabilities enabled",
      "Access to sample business transaction datasets", 
      "Computer with sufficient processing power for automation",
      "Presentation equipment for Innovation Fair demo"
    ],
    resources: [
      {
        title: "Month-End Wizard Starter Workbook",
        url: "/resources/unit02-template.xlsx",
        type: "download"
      },
      {
        title: "Unit 2 Advanced Practice CSV",
        url: "/resources/unit02-month-end-advanced-practice.csv",
        type: "download"
      },
      {
        title: "Adjusting-Entry Scenarios PDF", 
        url: "/resources/adjusting-scenarios.pdf",
        type: "download"
      },
      {
        title: "Macro Recorder Guide",
        url: "/resources/macro-guide.pdf", 
        type: "download"
      },
      {
        title: "VBA Cheat-Sheet",
        url: "/resources/vba-reference.pdf",
        type: "download"
      },
      {
        title: "User-Testing Survey Form",
        url: "/resources/user-survey-form",
        type: "external"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Provide step-by-step macro-recorder walkthrough with visual guides",
      "Scaffolded formula reference sheet for complex calculations", 
      "Pair with advanced students for peer coaching support",
      "Focus on no-code solutions using macro recorder vs. VBA programming"
    ],
    advanced: [
      "Challenge to write custom VBA functions beyond basic recording",
      "Add sophisticated error-checking routines and data validation", 
      "Mentor struggling teammates and lead technical discussions",
      "Explore advanced Excel features like pivot tables for reporting"
    ],
    ell: [
      "Business and technical terminology glossary with visual aids", 
      "Key automation concepts explained in home language when possible",
      "Partner with fluent English speakers for presentation practice",
      "Focus on visual demonstrations that transcend language barriers"
    ]
  }
}
