import { UnitData } from "@/types/unit"

export const unit08Data: UnitData = {
  id: "Unit 8",
  title: "Fixed Assets and Depreciation",
  duration: "2-3 weeks",
  difficulty: "Intermediate",
  description: "TechStart Solutions is growing and buying long-term assets. How do we track them professionally and choose the right depreciation method?",
  
  drivingQuestion: {
    question: "How do we track long-term assets professionally and choose the right depreciation method?",
    context: "Sarah Chen's company is expanding and purchasing equipment, vehicles, and technology. Investors expect clean asset tracking and defensible depreciation policies.",
    scenario: "Students build a complete asset register and depreciation schedule, compare methods, and recommend a depreciation policy backed by workbook evidence."
  },
  
  objectives: {
    content: [
      "Distinguish capital expenditures from everyday expenses",
      "Calculate depreciation using straight-line and double-declining balance methods",
      "Build an asset register and depreciation schedule in Excel"
    ],
    skills: [
      "Capitalization vs. expense classification",
      "Manual depreciation calculations (SL and DDB)",
      "Excel asset register with linked depreciation schedule"
    ],
    deliverables: [
      "Complete asset register workbook",
      "Depreciation schedule showing method comparison",
      "Written depreciation policy recommendation with evidence",
      "Group presentation defending method choice"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "Depreciation Policy Recommendation",
      description: "Present a depreciation policy recommendation to management, backed by a complete asset register and method comparison analysis.",
      context: "This mirrors real-world accounting decisions where companies must choose and justify depreciation methods for financial reporting.",
      requirements: [
        "Complete asset register with all required fields",
        "Depreciation schedule comparing at least two methods",
        "Written recommendation with claim, evidence, and risk analysis",
        "Clear explanation of method choice and statement impact"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 3,
        title: "Asset Register Complete",
        description: "All assets entered with cost, useful life, salvage value, and method",
        criteria: [
          "All assets listed with complete information",
          "Depreciable base calculated correctly for each asset",
          "Method assigned and justified for each asset class",
          "Book value calculations verify against cost minus accumulated depreciation"
        ]
      },
      {
        id: "milestone2",
        day: 5,
        title: "Depreciation Schedule and Method Comparison",
        description: "Full depreciation schedule with method comparison and statement impact",
        criteria: [
          "Annual depreciation calculated for each asset",
          "Accumulated depreciation and book value tracked over time",
          "At least two methods compared side by side",
          "Income statement and balance sheet impact explained"
        ]
      },
      {
        id: "milestone3",
        day: 7,
        title: "Final Recommendation and Presentation",
        description: "Written recommendation and presentation defending depreciation policy",
        criteria: [
          "Clear recommendation statement with method choice",
          "Evidence cited from asset register and schedule",
          "Risk and limitation analysis included",
          "Professional presentation with workbook backup"
        ]
      }
    ],
    rubric: [
      {
        name: "Asset Register Accuracy",
        weight: "30%",
        exemplary: "All assets complete; formulas correct; book value verifies; no errors",
        proficient: "Most assets complete; minor formula issues; book value mostly correct",
        developing: "Missing asset data; formula errors; book value does not verify"
      },
      {
        name: "Depreciation Method Application",
        weight: "25%",
        exemplary: "Methods calculated correctly; comparison clear; statement impact explained",
        proficient: "Methods mostly correct; comparison present; basic statement impact",
        developing: "Calculation errors; weak comparison; unclear statement impact"
      },
      {
        name: "Recommendation Quality",
        weight: "25%",
        exemplary: "Clear claim; strong evidence from workbook; thorough risk analysis",
        proficient: "Reasonable claim; adequate evidence; basic risk discussion",
        developing: "Vague claim; weak evidence; minimal risk analysis"
      },
      {
        name: "Professional Communication",
        weight: "20%",
        exemplary: "Clear writing; professional formatting; confident presentation",
        proficient: "Adequate writing; readable formatting; acceptable presentation",
        developing: "Unclear writing; poor formatting; hesitant presentation"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 15,
        title: "Depreciation Foundations",
        description: "Learn why long-term assets are tracked differently and master depreciation methods",
        days: [
          {
            day: 1,
            focus: "Introduction: Sarah's Fixed-Asset Problem",
            activities: [
              "Watch Sarah's interview about equipment purchases",
              "Discuss why investors expect professional asset tracking",
              "Introduce the scoreboard: Cost, Accumulated Depreciation, Book Value"
            ],
            resources: [
              "Sarah interview video",
              "Fixed-asset scenario cards",
              "Scoreboard reference sheet"
            ]
          },
          {
            day: 2,
            focus: "Capitalization vs. Expense",
            activities: [
              "Classify real purchase receipts as assets or expenses",
              "Learn capitalization rules, useful life, and salvage value",
              "Practice with mixed classification scenarios"
            ],
            resources: [
              "Receipt classification worksheet",
              "Capitalization rule reference",
              "Asset purchase examples"
            ]
          },
          {
            day: 3,
            focus: "Straight-Line Depreciation",
            activities: [
              "Calculate straight-line depreciation by hand",
              "Build a full depreciation schedule",
              "Connect to income statement and balance sheet impact"
            ],
            resources: [
              "Straight-line formula card",
              "Depreciation schedule template",
              "Statement impact diagram"
            ],
            milestone: "Straight-line schedule complete"
          },
          {
            day: 4,
            focus: "Double-Declining Balance and Method Comparison",
            activities: [
              "Calculate DDB depreciation by hand",
              "Compare DDB with straight-line side by side",
              "Discuss when accelerated depreciation makes sense"
            ],
            resources: [
              "DDB formula card",
              "Method comparison table",
              "Business case scenarios"
            ]
          },
          {
            day: 5,
            focus: "Build Asset Register and Depreciation Schedule in Excel",
            activities: [
              "Learn asset register workbook anatomy",
              "Build asset register with linked depreciation schedule",
              "Verify calculations and add workbook checks"
            ],
            resources: [
              "Asset register starter workbook",
              "Depreciation schedule template",
              "Build verification checklist"
            ],
            milestone: "Asset register and schedule complete"
          }
        ]
      },
      {
        weekNumber: 16,
        title: "Method Comparison and Project",
        description: "Compare depreciation methods and complete the group project",
        days: [
          {
            day: 6,
            focus: "Partial-Year Depreciation and Statement Impact",
            activities: [
              "Build a fresh partial-year depreciation workbook",
              "Use SLN and DDB with months-in-service proration",
              "Connect depreciation to mini income statements and balance sheets",
              "Write a short defense of recommended depreciation method"
            ],
            resources: [
              "Partial-year depreciation template",
              "Mini statement checklist",
              "Recommendation template"
            ]
          },
          {
            day: 7,
            focus: "Project Rehearsal with Shared Data",
            activities: [
              "Practice with shared teacher dataset",
              "Trace the logic chain from asset register to recommendation",
              "Peer audit against Definition of Done"
            ],
            resources: [
              "Shared rehearsal workbook",
              "Peer audit checklist",
              "Definition of Done"
            ]
          },
          {
            day: 8,
            focus: "Project Kickoff with Group Datasets",
            activities: [
              "Receive group-specific fixed-asset dataset",
              "Set up workbook with correct naming and structure",
              "Begin asset register and schedule"
            ],
            resources: [
              "Group dataset packets",
              "Workbook setup guide",
              "Milestone 1 acceptance criteria"
            ],
            milestone: "Project workbook opened and named"
          },
          {
            day: 9,
            focus: "Complete Workbook and Recommendation",
            activities: [
              "Finish remaining sheets and evidence blocks",
              "Write recommendation with claim, evidence, and risk",
              "Peer critique and revision"
            ],
            resources: [
              "Recommendation structure guide",
              "Peer critique form",
              "Milestone 2 acceptance criteria"
            ],
            milestone: "Complete workbook and recommendation draft"
          },
          {
            day: 10,
            focus: "Final Presentation and Reflection",
            activities: [
              "Final polish of workbook and presentation notes",
              "Present depreciation policy recommendation",
              "Reflect on asset tracking and method choice"
            ],
            resources: [
              "Presentation checklist",
              "Submission confirmation form",
              "Reflection prompts"
            ],
            milestone: "Final deliverables submitted"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "TechStart Solutions (default scenario)",
      "Manufacturing expansion case",
      "Transportation fleet case",
      "Restaurant equipment case",
      "Healthcare equipment case"
    ],
    roles: [
      "Asset Accountant (register accuracy focus)",
      "Financial Analyst (method comparison focus)",
      "Controller (recommendation and communication focus)"
    ],
    presentationFormats: [
      "Written recommendation memo",
      "Workbook walkthrough presentation",
      "Method comparison briefing",
      "Investor Q&A simulation"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Completion of Units 1-7 accounting sequence",
      "Understanding of income statement and balance sheet",
      "Experience with basic Excel formulas and cell references",
      "Familiarity with capitalization vs. expense concepts"
    ],
    technology: [
      "Microsoft Excel or compatible spreadsheet software",
      "Calculator for manual depreciation calculations",
      "Access to lesson workbooks and datasets"
    ],
    resources: [
      {
        title: "Asset Register Starter Workbook",
        url: "/resources/unit08-asset-register-starter.xlsx",
        type: "download"
      },
      {
        title: "Depreciation Schedule Template",
        url: "/resources/unit08-depreciation-schedule-template.xlsx",
        type: "download"
      },
      {
        title: "Method Comparison Reference Guide",
        url: "/resources/unit08-method-comparison-guide.pdf",
        type: "download"
      },
      {
        title: "Peer Audit Checklist",
        url: "/resources/unit08-peer-audit-checklist.pdf",
        type: "download"
      },
      {
        title: "Recommendation Structure Template",
        url: "/resources/unit08-recommendation-template.pdf",
        type: "download"
      },
      {
        title: "Definition of Done",
        url: "/resources/unit08-definition-of-done.pdf",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Scaffolded asset register with pre-filled asset descriptions",
      "Formula templates for depreciation calculations",
      "Step-by-step build guide with screenshots",
      "Peer mentoring partnerships with advanced students"
    ],
    advanced: [
      "Extension challenge: Add partial-year depreciation logic",
      "Compare three or more depreciation methods",
      "Leadership roles: Mentor teammates and facilitate peer critique",
      "Deep dive: Tax vs. book depreciation differences"
    ],
    ell: [
      "Depreciation terminology glossary with visual aids",
      "Key formulas explained in plain language with examples",
      "Recommendation templates with language scaffolding",
      "Visual depreciation schedule examples"
    ]
  }
}
