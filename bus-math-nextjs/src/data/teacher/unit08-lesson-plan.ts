import { UnitLessonPlan } from "@/types/lesson-plan"

export const unit08LessonPlan: UnitLessonPlan = {
  unitNumber: 8,
  unitTitle: "Fixed Assets and Depreciation",
  description: "Complete 10-day lesson plan using backward design principles, focusing on fixed asset tracking, depreciation methods (straight-line and double-declining balance), and depreciation policy recommendation.",
  essentialQuestion: "How do we track long-term assets professionally and choose the right depreciation method for our business?",
  
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
      "Long-term assets are tracked differently from everyday expenses because they provide value over multiple periods",
      "Depreciation method choice affects reported profits, tax obligations, and asset book values over time",
      "Professional asset tracking requires organized registers with cost, useful life, salvage value, and method documentation",
      "The depreciation decision has real consequences for financial statement presentation and business decision-making"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "Capital expenditure vs. everyday expense classification rules",
          "Straight-line depreciation: (Cost − Salvage Value) ÷ Useful Life",
          "Double-declining balance: accelerated depreciation at twice the straight-line rate",
          "Asset register components: cost, acquisition date, useful life, salvage value, method, book value",
          "Depreciation schedule: annual expense, accumulated depreciation, and book value over time",
          "Income statement and balance sheet impact of depreciation choices"
        ]
      },
      {
        category: "technical",
        items: [
          "Build an asset register workbook in Excel with all required fields",
          "Calculate straight-line and DDB depreciation using Excel functions (SLN, DDB)",
          "Create a linked depreciation schedule that updates from asset register data",
          "Compare depreciation methods side by side in a single workbook",
          "Design professional visualizations showing method impact on book value over time"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Classify purchases as capital expenditures or expenses with justification",
          "Calculate depreciation by hand using straight-line and double-declining balance methods",
          "Build a complete asset register and depreciation schedule",
          "Compare depreciation methods and analyze statement impact",
          "Write a depreciation policy recommendation with evidence from workbook analysis"
        ]
      },
      {
        category: "technical",
        items: [
          "Create Excel asset register with proper data validation and formatting",
          "Use SLN and DDB functions to automate depreciation calculations",
          "Build linked depreciation schedule with accumulated depreciation and book value tracking",
          "Create charts comparing method impact on annual expense and book value",
          "Implement workbook checks for accumulated depreciation limits and book value accuracy"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Depreciation Policy Recommendation",
      description: "Present a depreciation policy recommendation to management, backed by a complete asset register and method comparison analysis.",
      scenario: "Students present their depreciation policy recommendation to a panel acting as company management. The presentation must justify depreciation method choices based on business strategy, financial statement impact, and investor expectations.",
      requirements: [
        "Complete asset register with all required fields (cost, useful life, salvage value, method)",
        "Depreciation schedule comparing at least two methods side by side",
        "Written recommendation with claim, evidence from workbook, and risk analysis",
        "Clear explanation of method choice and its impact on income statement and balance sheet"
      ],
      context: "This mirrors real-world accounting decisions where companies must choose and justify depreciation methods for financial reporting and tax purposes."
    },
    milestones: [
      {
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

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Introduction: Sarah's Fixed-Asset Problem",
          description: "Entry event with Sarah's interview about equipment purchases and investor expectations",
          days: "Day 1"
        },
        {
          title: "Core Concepts: Capitalization and Straight-Line Depreciation",
          description: "Learn capitalization rules, useful life, salvage value, and calculate straight-line depreciation",
          days: "Days 2-3"
        },
        {
          title: "Excel Model: Asset Register and Depreciation Schedule",
          description: "Build asset register workbook with linked depreciation schedule using SLN and DDB functions",
          days: "Days 4-5"
        },
        {
          title: "Method Comparison and Recommendation",
          description: "Compare depreciation methods side by side and write policy recommendation",
          days: "Days 6-7"
        },
        {
          title: "Summary & Presentations: Policy Defense",
          description: "Final presentations defending depreciation policy recommendation",
          days: "Days 8-10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Introduction: Sarah's Fixed-Asset Problem",
        focus: "Launch with Sarah's interview about equipment purchases and investor expectations",
        duration: "45 minutes",
        activities: [
          {
            name: "Sarah's Interview: Equipment Purchase Challenge",
            duration: "15 minutes",
            description: "Watch Sarah's interview about TechStart Solutions buying long-term assets",
            details: [
              "Sarah explains her company is growing and purchasing equipment, vehicles, and technology",
              "Investors expect clean asset tracking and defensible depreciation policies",
              "Discussion: Why do long-term assets need different tracking than everyday expenses?",
              "Introduction of the scoreboard: Cost, Accumulated Depreciation, Book Value"
            ],
            callout: {
              type: "important",
              title: "Why Fixed Assets Are Different",
              content: "Long-term assets provide value over many years, so their cost is spread out",
              items: [
                "A $50,000 vehicle isn't expensed all at once — it's depreciated over its useful life",
                "Depreciation matches the asset's cost to the periods it helps generate revenue",
                "Investors scrutinize depreciation policies for consistency and reasonableness",
                "Method choice affects reported profits and tax obligations every year"
              ]
            }
          },
          {
            name: "Fixed-Asset Scenario Cards",
            duration: "15 minutes",
            description: "Teams analyze real-world purchase scenarios and classify as assets or expenses",
            details: [
              "Review scenario cards with various purchases (laptop, printer paper, delivery van, office rent)",
              "Teams classify each as capital expenditure or everyday expense with justification",
              "Discuss borderline cases and the reasoning behind classification decisions",
              "Connect to essential question: How do we track these professionally?"
            ]
          },
          {
            name: "Scoreboard Introduction",
            duration: "10 minutes",
            description: "Introduce the three key numbers for every fixed asset",
            details: [
              "Cost: What we paid to acquire the asset",
              "Accumulated Depreciation: Total depreciation recorded so far",
              "Book Value: Cost minus Accumulated Depreciation",
              "Practice: Calculate book value for sample assets"
            ]
          },
          {
            name: "Challenge Framing & Preview",
            duration: "5 minutes",
            description: "Set expectations and preview learning journey",
            details: [
              "Review unit timeline and major milestones",
              "Preview final deliverable: depreciation policy recommendation",
              "Establish learning objectives and success criteria",
              "Address student questions about expectations and assessments"
            ]
          }
        ],
        materials: [
          "Sarah interview video or case brief",
          "Fixed-asset scenario cards",
          "Scoreboard reference sheet",
          "Unit overview and milestone timeline"
        ]
      },
      {
        day: 2,
        title: "Capitalization vs. Expense",
        focus: "Classify real purchase receipts as assets or expenses and learn capitalization rules",
        duration: "45 minutes",
        activities: [
          {
            name: "Capitalization Rules Instruction",
            duration: "15 minutes",
            description: "Learn the rules for when a purchase becomes a fixed asset vs. an expense",
            details: [
              "Three criteria for capitalization: useful life > 1 year, significant cost, used in operations",
              "Examples of capital expenditures: buildings, vehicles, equipment, technology",
              "Examples of expenses: supplies, utilities, routine maintenance, rent",
              "Borderline cases: when does a repair become an improvement?"
            ],
            callout: {
              type: "definition",
              title: "Capital Expenditure vs. Expense",
              content: "The classification determines how the cost appears on financial statements",
              items: [
                "Capital expenditure: Recorded as asset on balance sheet, depreciated over time",
                "Expense: Recorded immediately on income statement, reduces profit now",
                "Wrong classification distorts both current profit and future asset values",
                "Consistency in classification is required for reliable financial reporting"
              ]
            }
          },
          {
            name: "Receipt Classification Workshop",
            duration: "20 minutes",
            description: "Practice classifying real purchase receipts with justification",
            details: [
              "Teams receive mixed receipt sets with various purchases",
              "Classify each as capital expenditure or expense with written justification",
              "Compare classifications across teams and discuss disagreements",
              "Review answer key and address common misconceptions"
            ]
          },
          {
            name: "Useful Life and Salvage Value Introduction",
            duration: "10 minutes",
            description: "Learn how to estimate useful life and salvage value for assets",
            details: [
              "Useful life: How long will the asset be productive? (IRS guidelines, industry standards)",
              "Salvage value: What can we sell it for at the end? (Estimate based on market)",
              "Depreciable base: Cost − Salvage Value = total amount to depreciate",
              "Practice: Estimate useful life and salvage value for sample assets"
            ]
          }
        ],
        materials: [
          "Receipt classification worksheet",
          "Capitalization rule reference",
          "Asset purchase examples",
          "Useful life and salvage value estimation guide"
        ]
      },
      {
        day: 3,
        title: "Straight-Line Depreciation",
        focus: "Calculate straight-line depreciation by hand and build a full depreciation schedule",
        duration: "45 minutes",
        activities: [
          {
            name: "Straight-Line Formula Introduction",
            duration: "10 minutes",
            description: "Learn the straight-line depreciation formula and its logic",
            details: [
              "Formula: Annual Depreciation = (Cost − Salvage Value) ÷ Useful Life",
              "Logic: Equal expense each year — simple, predictable, widely used",
              "Example: $10,000 equipment, $2,000 salvage, 4-year life = $2,000/year",
              "Practice: Calculate straight-line depreciation for 3 sample assets"
            ],
            callout: {
              type: "definition",
              title: "Straight-Line Depreciation",
              content: "The simplest and most commonly used depreciation method",
              items: [
                "Same expense amount every year of the asset's useful life",
                "Easy to calculate and explain to non-accountants",
                "Appropriate when asset usage is consistent over time",
                "Book value decreases in a straight, predictable line"
              ]
            }
          },
          {
            name: "Depreciation Schedule Build",
            duration: "20 minutes",
            description: "Build a complete straight-line depreciation schedule by hand",
            details: [
              "Columns: Year, Beginning Book Value, Depreciation Expense, Accumulated Depreciation, Ending Book Value",
              "Fill in schedule year by year for sample asset",
              "Verify: Final book value equals salvage value",
              "Verify: Total accumulated depreciation equals depreciable base"
            ]
          },
          {
            name: "Statement Impact Connection",
            duration: "10 minutes",
            description: "Connect depreciation to income statement and balance sheet",
            details: [
              "Income statement: Depreciation expense reduces net income each year",
              "Balance sheet: Accumulated depreciation reduces asset book value",
              "Cash flow: Depreciation is a non-cash expense (added back in operating activities)",
              "Diagram: Show how one depreciation entry flows through both statements"
            ]
          },
          {
            name: "Milestone Check",
            duration: "5 minutes",
            description: "Verify straight-line schedule completion",
            details: [
              "Check: All calculations correct?",
              "Check: Final book value = salvage value?",
              "Check: Can students explain the statement impact?",
              "Preview Day 4: Double-declining balance — an accelerated method"
            ]
          }
        ],
        materials: [
          "Straight-line formula card",
          "Depreciation schedule template",
          "Statement impact diagram",
          "Sample asset data for practice"
        ]
      },
      {
        day: 4,
        title: "Double-Declining Balance and Method Comparison",
        focus: "Calculate DDB depreciation by hand and compare with straight-line",
        duration: "45 minutes",
        activities: [
          {
            name: "DDB Formula Introduction",
            duration: "12 minutes",
            description: "Learn the double-declining balance method and its logic",
            details: [
              "DDB rate = 2 × (1 ÷ Useful Life)",
              "Annual Depreciation = DDB rate × Beginning Book Value (not depreciable base)",
              "Salvage value is a floor — depreciation stops when book value reaches salvage",
              "Example: $10,000 asset, 4-year life → DDB rate = 50% → Year 1: $5,000 depreciation"
            ],
            callout: {
              type: "definition",
              title: "Double-Declining Balance",
              content: "An accelerated depreciation method that records more expense in early years",
              items: [
                "Higher depreciation expense in early years, lower in later years",
                "Appropriate when assets lose value quickly (technology, vehicles)",
                "Reduces taxable income more in early years (tax advantage)",
                "Book value never drops below salvage value"
              ]
            }
          },
          {
            name: "DDB Schedule Build",
            duration: "15 minutes",
            description: "Build a complete DDB depreciation schedule by hand",
            details: [
              "Same asset as straight-line practice for direct comparison",
              "Calculate year-by-year depreciation using DDB formula",
              "Watch for the salvage value floor in final years",
              "Verify: Final book value = salvage value"
            ]
          },
          {
            name: "Side-by-Side Method Comparison",
            duration: "13 minutes",
            description: "Compare straight-line and DDB results for the same asset",
            details: [
              "Compare annual depreciation expense: SL is flat, DDB declines",
              "Compare accumulated depreciation: DDB is higher in early years",
              "Compare book value over time: DDB drops faster initially",
              "Discuss: When would a business choose DDB over straight-line?"
            ]
          },
          {
            name: "Preview Day 5",
            duration: "5 minutes",
            description: "Set expectations for Excel asset register build",
            details: [
              "Tomorrow: Build asset register and depreciation schedule in Excel",
              "We'll use SLN and DDB functions to automate calculations",
              "Bring your hand-calculated schedules for verification"
            ]
          }
        ],
        materials: [
          "DDB formula card",
          "Method comparison table",
          "Business case scenarios",
          "Sample asset data (same as Day 3)"
        ]
      },
      {
        day: 5,
        title: "Build Asset Register and Depreciation Schedule in Excel",
        focus: "Learn asset register workbook anatomy and build with linked depreciation schedule",
        duration: "45 minutes",
        activities: [
          {
            name: "Asset Register Workbook Anatomy",
            duration: "10 minutes",
            description: "Understand the structure of a professional asset register",
            details: [
              "Asset Register sheet: Asset ID, description, cost, acquisition date, useful life, salvage value, method",
              "Depreciation Schedule sheet: Year-by-year expense, accumulated depreciation, book value for each asset",
              "Summary sheet: Totals by method, annual depreciation expense summary",
              "Checks sheet: Validation formulas for book value accuracy and accumulated depreciation limits"
            ]
          },
          {
            name: "Excel Build: Asset Register",
            duration: "15 minutes",
            description: "Build the asset register with proper formatting and data validation",
            details: [
              "Set up Excel Table with asset register columns",
              "Add data validation for method dropdown (SLN, DDB)",
              "Enter sample asset data from provided dataset",
              "Calculate depreciable base for each asset"
            ],
            callout: {
              type: "tip",
              title: "Excel Functions for Depreciation",
              content: "Excel has built-in functions for common depreciation methods",
              items: [
                "SLN(cost, salvage, life): Straight-line depreciation per period",
                "DDB(cost, salvage, life, period, [factor]): Declining balance depreciation",
                "DB(cost, salvage, life, period, [month]): Fixed-declining balance",
                "SYD(cost, salvage, life, period): Sum-of-years'-digits depreciation"
              ]
            }
          },
          {
            name: "Excel Build: Depreciation Schedule",
            duration: "15 minutes",
            description: "Build linked depreciation schedule using SLN and DDB functions",
            details: [
              "Use SLN function for straight-line assets",
              "Use DDB function for double-declining balance assets",
              "Link accumulated depreciation and book value columns",
              "Verify calculations match hand-calculated schedules from Days 3-4"
            ]
          },
          {
            name: "Build Verification",
            duration: "5 minutes",
            description: "Run verification checks on the completed workbook",
            details: [
              "Check: All assets have complete information?",
              "Check: Depreciation calculations match hand calculations?",
              "Check: Book value = Cost − Accumulated Depreciation for every row?",
              "Milestone: Asset register and schedule complete"
            ]
          }
        ],
        materials: [
          "Asset register starter workbook",
          "Depreciation schedule template",
          "Build verification checklist",
          "Sample asset dataset"
        ]
      },
      {
        day: 6,
        title: "Partial-Year Depreciation and Statement Impact",
        focus: "Build a fresh partial-year workbook and connect depreciation to mini statements",
        duration: "45 minutes",
        activities: [
          {
            name: "Partial-Year Depreciation in Excel",
            duration: "15 minutes",
            description: "Build a fresh workbook using purchase dates and months in service",
            details: [
              "Create an asset register with cost, salvage, life, purchase date, and months in service",
              "Use SLN(cost, salvage, life) for full-year straight-line depreciation",
              "Use DDB(cost, salvage, life, 1) for full-year Year 1 DDB depreciation",
              "Prorate both methods by months in service divided by 12"
            ]
          },
          {
            name: "Mini Financial Statements",
            duration: "15 minutes",
            description: "Link depreciation outputs to statement impact",
            details: [
              "Build a mini income statement with revenue, other operating expenses, depreciation expense, and operating income",
              "Build a mini balance sheet with fixed asset cost, accumulated depreciation, and net book value",
              "Compare straight-line and DDB columns side by side",
              "Flag how method choice changes reported profit and asset value"
            ],
            callout: {
              type: "important",
              title: "Statement Impact Checks",
              content: "Professional depreciation recommendations connect formulas to financial statements",
              items: [
                "Year 1 depreciation = full-year function result × months in service ÷ 12",
                "Operating Income = Revenue − Other Operating Expenses − Depreciation Expense",
                "Net Book Value = Fixed Asset Cost − Accumulated Depreciation",
                "Recommendation evidence should cite both income statement and balance sheet numbers"
              ]
            }
          },
          {
            name: "Recommendation Draft",
            duration: "10 minutes",
            description: "Begin drafting the depreciation policy recommendation",
            details: [
              "Structure: Claim → Evidence → Risk Analysis",
              "Claim: Which method do we recommend and why?",
              "Evidence: Cite specific numbers from mini income statement and mini balance sheet",
              "Risk: What are the limitations or risks of the chosen method?"
            ]
          },
          {
            name: "Preview Day 7",
            duration: "5 minutes",
            description: "Set expectations for project rehearsal",
            details: [
              "Tomorrow: Practice with shared teacher dataset",
              "Trace the logic chain from asset register to recommendation",
              "Peer audit against Definition of Done"
            ]
          }
        ],
        materials: [
          "Partial-year depreciation template",
          "Mini statement checklist",
          "Recommendation template",
          "Chart creation guide"
        ]
      },
      {
        day: 7,
        title: "Project Rehearsal with Shared Data",
        focus: "Practice with shared teacher dataset, trace logic chain, peer audit",
        duration: "45 minutes",
        activities: [
          {
            name: "Shared Dataset Practice",
            duration: "15 minutes",
            description: "All teams work with the same teacher-provided asset dataset",
            details: [
              "Distribute shared rehearsal asset dataset",
              "Build asset register and depreciation schedule",
              "Verify results match expected answers",
              "Ensure all teams can produce consistent, accurate results"
            ]
          },
          {
            name: "Logic Chain Trace",
            duration: "15 minutes",
            description: "Trace the complete logic from asset register to recommendation",
            details: [
              "Asset register inputs → Depreciation calculations → Method comparison",
              "Method comparison → Business rationale → Policy recommendation",
              "Identify any weak links in the chain",
              "Strengthen evidence connections between workbook and recommendation"
            ]
          },
          {
            name: "Peer Audit Against Definition of Done",
            duration: "10 minutes",
            description: "Teams exchange workbooks and audit against quality standards",
            details: [
              "Use peer audit checklist to evaluate completeness and accuracy",
              "Check: All assets entered? All calculations correct? Method justified?",
              "Check: Recommendation supported by workbook evidence?",
              "Provide specific, actionable feedback"
            ]
          },
          {
            name: "Final Polish Planning",
            duration: "5 minutes",
            description: "Plan final revisions based on peer audit feedback",
            details: [
              "Review audit feedback and prioritize changes",
              "Assign revision tasks for Day 8",
              "Preview: Day 8 is project kickoff with group-specific datasets"
            ]
          }
        ],
        materials: [
          "Shared rehearsal workbook",
          "Peer audit checklist",
          "Definition of Done",
          "Shared rehearsal asset dataset"
        ]
      },
      {
        day: 8,
        title: "Project Kickoff with Group Datasets",
        focus: "Receive group-specific fixed-asset dataset, set up workbook, begin build",
        duration: "45 minutes",
        activities: [
          {
            name: "Group Dataset Distribution",
            duration: "10 minutes",
            description: "Each group receives a unique fixed-asset dataset",
            details: [
              "Distribute group-specific asset dataset packets",
              "Teams review their dataset and identify asset types",
              "Confirm workbook structure matches rehearsal format",
              "Set expectations for final deliverables"
            ]
          },
          {
            name: "Workbook Setup",
            duration: "15 minutes",
            description: "Set up workbook with correct naming and structure",
            details: [
              "Create workbook with proper naming convention",
              "Set up asset register sheet with data validation",
              "Enter all assets from group dataset",
              "Verify depreciable base calculations"
            ]
          },
          {
            name: "Depreciation Schedule Build",
            duration: "15 minutes",
            description: "Build depreciation schedule for group dataset",
            details: [
              "Calculate depreciation using assigned methods",
              "Build accumulated depreciation and book value tracking",
              "Add workbook checks and validation",
              "Verify calculations against manual spot checks"
            ]
          },
          {
            name: "Milestone Check",
            duration: "5 minutes",
            description: "Verify project workbook is opened, named, and functional",
            details: [
              "Check: Workbook opened and named correctly?",
              "Check: All assets entered with complete information?",
              "Check: Depreciation calculations started?",
              "Milestone: Project workbook opened and named"
            ]
          }
        ],
        materials: [
          "Group dataset packets",
          "Workbook setup guide",
          "Milestone 1 acceptance criteria",
          "Asset register starter template"
        ]
      },
      {
        day: 9,
        title: "Complete Workbook and Recommendation",
        focus: "Finish remaining sheets, write recommendation with claim/evidence/risk, peer critique",
        duration: "45 minutes",
        activities: [
          {
            name: "Workbook Completion",
            duration: "15 minutes",
            description: "Finish remaining sheets and evidence blocks",
            details: [
              "Complete method comparison analysis",
              "Finalize all depreciation calculations",
              "Add professional formatting and charts",
              "Run all validation checks"
            ]
          },
          {
            name: "Recommendation Writing",
            duration: "15 minutes",
            description: "Write depreciation policy recommendation with claim, evidence, and risk",
            details: [
              "Claim: Clear statement of recommended depreciation method",
              "Evidence: Specific numbers from asset register and schedule supporting the claim",
              "Risk analysis: Limitations and potential issues with the chosen method",
              "Professional formatting appropriate for management audience"
            ],
            callout: {
              type: "tip",
              title: "Writing a Strong Recommendation",
              content: "Management needs clear, evidence-based recommendations",
              items: [
                "Start with a direct claim: 'We recommend [method] because...'",
                "Support with specific numbers: 'DDB reduces Year 1 expense by $X vs. SLN'",
                "Address the statement impact: 'This affects net income by $Y and book value by $Z'",
                "Acknowledge risks: 'The trade-off is lower reported profits in early years'"
              ]
            }
          },
          {
            name: "Peer Critique and Revision",
            duration: "10 minutes",
            description: "Exchange recommendations and provide structured feedback",
            details: [
              "Teams swap recommendation drafts",
              "Use peer critique form to evaluate clarity, evidence, and professionalism",
              "Provide specific, actionable feedback",
              "Apply revisions based on feedback"
            ]
          },
          {
            name: "Final Polish",
            duration: "5 minutes",
            description: "Final review and preparation for Day 10 presentation",
            details: [
              "Review all deliverables against rubric",
              "Confirm workbook and recommendation are complete",
              "Prepare presentation notes",
              "Preview Day 10: Final presentation and reflection"
            ]
          }
        ],
        materials: [
          "Recommendation structure guide",
          "Peer critique form",
          "Milestone 2 acceptance criteria",
          "Presentation checklist"
        ]
      },
      {
        day: 10,
        title: "Final Presentation and Reflection",
        focus: "Present depreciation policy recommendation and reflect on learning",
        duration: "45 minutes",
        activities: [
          {
            name: "Presentation Flow",
            duration: "30 minutes",
            description: "Teams present depreciation policy recommendations to management panel",
            details: [
              "Presenter order and timeboxing posted",
              "Each team: 4-5 minute presentation + brief Q&A",
              "Audience completes rubric-aligned peer critique",
              "Panel asks questions about method choice and statement impact"
            ],
            callout: {
              type: "important",
              title: "Standard Rubric Weights",
              content: "Use these categories for feedback and scoring",
              items: [
                "Asset Register Accuracy — 30%",
                "Depreciation Method Application — 25%",
                "Recommendation Quality — 25%",
                "Professional Communication — 20%"
              ]
            }
          },
          {
            name: "Post-Presentation Reflection",
            duration: "10 minutes",
            description: "Individual reflection on asset tracking and method choice",
            details: [
              "Submit final workbook, recommendation, and peer reviews",
              "Reflect: What did I learn about depreciation and asset tracking?",
              "Reflect: How would I approach this differently next time?",
              "Confirm portfolio artifacts are complete"
            ]
          },
          {
            name: "Unit Wrap-Up",
            duration: "5 minutes",
            description: "Final course reflection and transition",
            details: [
              "Review key concepts: capitalization, SLN, DDB, asset register, depreciation schedule",
              "Connect to real world: How do companies actually choose depreciation methods?",
              "Preview what comes next in the course",
              "Celebrate completion of the fixed assets and depreciation unit"
            ]
          }
        ],
        materials: [
          "Presentation checklist",
          "Submission confirmation form",
          "Reflection prompts",
          "Peer critique forms"
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
        "Daily Excel checkpoint: Quick verification of depreciation calculation accuracy",
        "Peer workbook audit: Teams validate each other's asset register and schedule",
        "Method selection justification: Brief written rationale for depreciation method choices",
        "Progress conferences: 5-minute teacher check-ins with each team on Days 3, 5, and 7",
        "Strategic thinking exit tickets: Quick assessment of business rationale understanding"
      ]
    },
    {
      category: "feedback",
      title: "Feedback Strategies",
      strategies: [
        "Technical feedback: Specific corrections for Excel formula errors with guided practice",
        "Strategic feedback: Questions to deepen business rationale and method selection logic",
        "Presentation feedback: Actionable suggestions for professional communication improvement",
        "Peer feedback: Structured protocols for constructive critique of workbook and recommendation",
        "Management panel feedback: Authentic business perspective on depreciation policy recommendations"
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students",
      strategies: [
        "Scaffolded asset register with pre-filled asset descriptions",
        "Formula templates for depreciation calculations",
        "Step-by-step build guide with screenshots",
        "Peer mentoring partnerships with advanced students",
        "Reduced asset count while maintaining authentic business context"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Extension challenge: Add partial-year depreciation logic",
        "Compare three or more depreciation methods",
        "Leadership roles: Mentor teammates and facilitate peer critique",
        "Deep dive: Tax vs. book depreciation differences",
        "Research MACRS depreciation and its real-world application"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Depreciation terminology glossary with visual aids",
        "Key formulas explained in plain language with examples",
        "Recommendation templates with language scaffolding",
        "Visual depreciation schedule examples",
        "Partner with fluent English speakers for presentation preparation"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: 1:1 laptops with Excel 365 or 2019+" },
        { name: "Software: Microsoft Excel with SLN, DDB, and charting capabilities" },
        { name: "Internet: For resource access and research" },
        { name: "Presentation: Projector/smart board for management presentation setup" },
        { name: "Audio/Video: Recording capability for presentation portfolio documentation" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials",
      items: [
        { name: "Asset Register Starter Workbook", link: "/resources/unit08-asset-register-starter.xlsx" },
        { name: "Depreciation Schedule Template", link: "/resources/unit08-depreciation-schedule-template.xlsx" },
        { name: "Method Comparison Reference Guide", link: "/resources/unit08-method-comparison-guide.pdf" },
        { name: "Peer Audit Checklist", link: "/resources/unit08-peer-audit-checklist.pdf" },
        { name: "Recommendation Structure Template", link: "/resources/unit08-recommendation-template.pdf" },
        { name: "Definition of Done", link: "/resources/unit08-definition-of-done.pdf" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Management Panel: Business leaders and accountants for final presentations" },
        { name: "Industry Examples: Real asset data from local businesses" },
        { name: "Professional Networks: Chamber of Commerce members for authentic feedback" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students demonstrate mastery of both straight-line and double-declining balance depreciation methods?",
      "How effectively did the management presentation format assess strategic business thinking?",
      "Were students able to connect depreciation calculations to financial statement impact?",
      "What differentiation strategies were most effective for diverse learners?",
      "How well did Sarah's entry event establish authentic context and engagement?",
      "Did the asset register workbooks demonstrate appropriate technical complexity for Grade 12 students?"
    ],
    dataCollection: [
      "Technical Accuracy: Analysis of Excel asset register and depreciation schedule functionality",
      "Strategic Thinking: Evaluation of recommendation quality and business rationale strength",
      "Presentation Skills: Management panel feedback on professional communication",
      "Student Feedback: Exit survey on engagement, learning, and unit effectiveness",
      "Peer Assessment: Analysis of peer feedback quality and collaborative learning effectiveness"
    ],
    nextUnitPrep: [
      "Archive exemplary asset register workbooks and recommendations for future reference",
      "Document common technical errors for targeted instruction improvement",
      "Collect management panel suggestions for industry context and presentation format refinement",
      "Prepare materials connecting fixed assets to broader financial statement analysis",
      "Identify students ready for advanced financial modeling challenges in capstone project"
    ]
  }
}