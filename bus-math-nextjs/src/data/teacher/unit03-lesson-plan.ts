import { UnitLessonPlan } from "@/types/lesson-plan"

/*
Component Usage Schedule (unit03 lessons 01–05)
- ComprehensionCheck (default)
- FillInTheBlank (default and named import variants in pages)
- AccountCategorization (default)
- TrialBalanceSorting (default)
- BusinessTransactionCategorization (named)
- SpreadsheetWrapper (named)
- SpreadsheetTemplates.incomeStatementTemplate (named)
- PeerCritiqueForm (default)
- ReflectionJournal (default)
- DragAndDrop (default)
- ErrorCheckingSystem (default)
- Lesson01Phase1 (default, custom student component)
*/

export const unit03LessonPlan: UnitLessonPlan = {
  unitNumber: 3,
  unitTitle: "Three-Statement Storyboard",
  description: "Complete 10-day lesson plan using backward design principles",
  essentialQuestion: "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math",
    course: "Math for Business Operations"
  },

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Financial statements tell the complete story of business performance and position",
      "Integrated financial statements reveal connections between profit, balance sheet strength, and cash flow",
      "Dynamic dashboards transform raw financial data into actionable business insights",
      "Professional financial communication builds investor confidence and trust"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "Income Statement construction from journal entry data",
          "Balance Sheet account linking and Retained Earnings reconciliation",
          "Indirect Cash Flow Statement preparation and interpretation",
          "Key financial ratios (Current Ratio, Return on Assets) and their meaning",
          "Integration between the three primary financial statements"
        ]
      },
      {
        category: "technical",
        items: [
          "Cross-sheet linking with INDEX/MATCH and named ranges",
          "Dynamic dashboard creation with charts and sparklines",
          "Interactive KPI dashboard design and implementation",
          "Conditional formatting for financial data visualization",
          "Professional business presentation formatting"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Construct accurate Income Statement from trial balance data",
          "Link Balance Sheet accounts with proper Retained Earnings reconciliation",
          "Prepare Indirect Cash Flow Statement showing operating, investing, and financing activities",
          "Calculate and interpret key financial ratios for business analysis",
          "Create compelling financial narratives for investor presentations"
        ]
      },
      {
        category: "technical",
        items: [
          "Use INDEX/MATCH functions for dynamic cross-sheet data retrieval",
          "Build interactive dashboards with charts, sparklines, and conditional formatting",
          "Create named ranges for improved formula readability and maintenance",
          "Design professional KPI displays with visual indicators",
          "Present financial data effectively for business audiences"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Investor Demo Day Presentation (Day 10)",
      description: "Interactive Excel workbook demonstration with investor one-pager pitch",
      scenario: "Students present their integrated three-statement model to a mock investor panel (local CPAs, PTA members with finance backgrounds, entrepreneurs) as if seeking funding for their business expansion.",
      requirements: [
        "Interactive Excel workbook with all three financial statements linked and reconciled",
        "Professional investor one-pager summarizing key financial metrics and business story",
        "4-minute pitch explaining the financial narrative and business prospects", 
        "Live demonstration of KPI dashboard and interactive features",
        "Q&A response addressing panel questions about financial performance and projections"
      ],
      context: "This mirrors real investor presentations where integrated financial models demonstrate business understanding and financial competence."
    },
    milestones: [
      {
        day: 3,
        title: "Income Statement Built with 100% Correct Formulas",
        description: "Complete Income Statement construction from Unit 1 trial balance data",
        criteria: [
          "All revenue accounts correctly aggregated with proper formulas",
          "All expense accounts properly categorized and totaled",
          "Net Income calculation accurate and cross-references to other statements",
          "Professional formatting with clear section headers and alignment",
          "Formula structure allows for dynamic updates when source data changes"
        ]
      },
      {
        day: 5,
        title: "Advanced Automation: Three‑Statement Link Engine",
        description: "Implement robust links, scenario control, and validation checks using the advanced dataset",
        criteria: [
          "Structured references (Tables) and XLOOKUP/SUMIFS drive statement rollups",
          "Scenario switch (e.g., SWITCH/CHOOSE) updates drivers and KPIs without errors",
          "Validation flags surface A=L+E tie, NI → RE roll‑forward, cash reconciliation, and missing IDs",
          "Model updates correctly when adding rows or new accounts from the advanced practice CSV"
        ]
      },
      {
        day: 6,
        title: "Balance Sheet Linked and Retained Earnings Reconciled",
        description: "Integrated Balance Sheet with proper account linking and equity reconciliation",
        criteria: [
          "Assets section properly categorized (current vs. non-current) with correct totals",
          "Liabilities section accurately reflects current and long-term obligations",
          "Retained Earnings properly reconciled with Income Statement Net Income",
          "Balance Sheet equation (Assets = Liabilities + Equity) validates to zero",
          "Cross-sheet links function correctly and update automatically"
        ]
      },
      {
        day: 7,
        title: "Cash Flow Statement Built Correctly",
        description: "Indirect method Cash Flow Statement with proper operating, investing, and financing sections",
        criteria: [
          "Operating activities section starts with Net Income and adjusts for non-cash items",
          "Investing activities properly reflect capital expenditures and asset transactions",
          "Financing activities accurately show debt and equity transactions",
          "Cash flow reconciliation matches Balance Sheet cash account changes",
          "All formulas reference appropriate source data from other statements"
        ]
      }
    ],
    rubric: [
      {
        name: "Financial Accuracy",
        weight: "50%",
        exemplary: "All three statements perfectly integrated; formulas correct; reconciliation validates completely; handles complex transactions",
        proficient: "Statements mostly accurate with minor errors; reconciliation works with minimal issues; basic transactions handled well",
        developing: "Multiple formula errors; reconciliation doesn't balance; statements show disconnected data"
      },
      {
        name: "Dashboard Insight",
        weight: "20%",
        exemplary: "KPIs clearly communicate business story; charts enhance understanding; interactive features add value; professional design",
        proficient: "Relevant KPIs selected; basic charts support narrative; adequate interactivity; clean appearance",
        developing: "KPIs unclear or irrelevant; charts confuse rather than clarify; limited interactivity; poor design"
      },
      {
        name: "Storytelling & Pitch Clarity",
        weight: "15%",
        exemplary: "Compelling financial narrative; logical flow from data to insights; confident delivery; engages audience effectively",
        proficient: "Clear financial story; adequate flow; competent delivery; maintains audience attention",
        developing: "Unclear narrative; disjointed presentation; hesitant delivery; loses audience interest"
      },
      {
        name: "Responsiveness to Feedback",
        weight: "15%",
        exemplary: "Actively incorporates all feedback; demonstrates learning through revisions; exceeds initial requirements",
        proficient: "Incorporates most feedback; shows improvement through iterations; meets requirements",
        developing: "Limited incorporation of feedback; minimal improvement shown; below requirements"
      }
    ]
  },

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Launch & Explore: Financial Statement Detective Work",
          description: "Dissect real 10-Q filing and connect narrative to specific line items",
          days: "Day 1"
        },
        {
          title: "Income Statement Build",
          description: "Direct instruction and independent build with peer debugging",
          days: "Days 2-3"
        },
        {
          title: "Excel Mastery: INDEX/MATCH & Named Ranges",
          description: "Hands-on INDEX/MATCH and named ranges for dynamic links",
          days: "Day 4"
        },
        {
          title: "Advanced Automation: Link Engine",
          description: "Scenario switch, mapping, SUMIFS rollups, and validation checks",
          days: "Day 5"
        },
        {
          title: "Linking & Integration: Balance Sheet and Cash Flow",
          description: "Create integrated Balance Sheet and Cash Flow Statement with cross-sheet linking",
          days: "Days 6-7"
        },
        {
          title: "Dashboard & Visualization: KPI Development",
          description: "Design interactive dashboards with charts, sparklines, and financial ratios",
          days: "Days 8-9"
        },
        {
          title: "Investor Presentation: Demo Day Preparation",
          description: "Prepare and deliver investor presentations with live Excel demonstrations",
          days: "Day 10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Launch & Explore: Financial Statement Detective Work",
        focus: "Entry event using real 10-Q filing to understand integrated financial statements",
        duration: "45 minutes",
        activities: [
          {
            name: "Tesla 10-Q Dissection",
            duration: "15 minutes",
            description: "Teams analyze Tesla's (or local firm's) latest 10-Q filing to identify narrative threads",
            details: [
              "Each team receives 2-3 pages from Tesla's latest quarterly report",
              "Students map specific narrative statements to corresponding line items in financial statements",
              "Identify how Income Statement performance connects to Balance Sheet changes",
              "Trace cash flow implications from both operational and strategic decisions"
            ],
            callout: {
              type: "important",
              title: "Real-World Financial Storytelling",
              content: "Professional investors read between the lines of financial statements",
              items: [
                "Income Statement: Shows profitability and operational efficiency trends",
                "Balance Sheet: Reveals financial strength, liquidity, and capital structure",
                "Cash Flow: Demonstrates actual cash generation and usage patterns",
                "Integration: How these three statements tell one coherent business story"
              ]
            }
          },
          {
            name: "Unit 1 Data Connection",
            duration: "10 minutes", 
            description: "Connect to familiar TechStart data as foundation for statement construction",
            details: [
              "Review Unit 1 trial balance and journal entries from TechStart Solutions",
              "Teams identify which accounts will appear on each financial statement",
              "Preview the challenge: Transform journal entries into investor-ready statements",
              "Assign team roles for the three-statement construction project"
            ]
          },
          {
            name: "Statement Relationship Mapping",
            duration: "15 minutes",
            description: "Visual mapping exercise showing how the three statements interconnect",
            details: [
              "Teams create visual map showing data flows between statements",
              "Identify key connection points: Net Income, Retained Earnings, Cash accounts",
              "Discuss why investors need all three statements for complete business picture",
              "Establish success criteria: integrated statements that tell coherent story"
            ]
          },
          {
            name: "Challenge Setup & Planning",
            duration: "5 minutes",
            description: "Introduce essential question and establish project timeline",
            details: [
              "Present essential question: How do journal entries flow into trustworthy narrative?",
              "Overview of 10-day journey from raw data to investor presentation",
              "Teams select their industry focus (maintaining TechStart context)",
              "Quick planning: What story does Sarah's business data need to tell?"
            ]
          }
        ],
        materials: [
          "Tesla 10-Q excerpt (or local business annual report)",
          "Unit 1 TechStart trial balance and journal entries",
          "Statement relationship mapping worksheets",
          "Project timeline and success criteria overview"
        ]
      },
      {
        day: 2,
        title: "Skill Introduction: Income Statement Construction",
        focus: "Direct instruction on building Income Statement from trial balance data",
        duration: "45 minutes",
        activities: [
          {
            name: "Income Statement Architecture",
            duration: "10 minutes",
            description: "Understanding the structure and purpose of the Income Statement",
            details: [
              "Review Income Statement sections: Revenue, Cost of Goods Sold, Operating Expenses, Other Income/Expenses",
              "Connect to TechStart context: How Sarah's service revenue and business expenses are categorized",
              "Explain why proper categorization matters for investor analysis",
              "Preview Excel techniques for dynamic statement construction"
            ]
          },
          {
            name: "INDEX/MATCH Formula Introduction",
            duration: "20 minutes",
            description: "Hands-on instruction for dynamic cross-sheet data retrieval",
            details: [
              "Demonstrate INDEX/MATCH syntax for retrieving trial balance data",
              "Show advantages over VLOOKUP for professional financial models",
              "Practice with TechStart data: pulling revenue accounts into Income Statement",
              "Build error-handling with IFERROR to manage missing data gracefully"
            ],
            callout: {
              type: "tip",
              title: "INDEX/MATCH for Professional Models",
              content: "INDEX/MATCH creates flexible, maintainable financial models",
              items: [
                "INDEX/MATCH: More flexible than VLOOKUP, works left or right",
                "Named Ranges: Use descriptive names like 'TrialBalance' for clarity",
                "Error Handling: IFERROR prevents #N/A errors in presentations", 
                "Dynamic Updates: Formulas automatically adjust when source data changes"
              ]
            }
          },
          {
            name: "TechStart Income Statement Build",
            duration: "12 minutes",
            description: "Guided practice constructing Income Statement from Unit 1 data",
            details: [
              "Students follow along building Revenue section using INDEX/MATCH",
              "Add Operating Expenses section with proper account categorization",
              "Calculate Gross Profit and Operating Income with clear formulas",
              "Verify Net Income calculation and format for professional presentation"
            ]
          },
          {
            name: "Quality Check & Preview",
            duration: "3 minutes",
            description: "Validate constructed Income Statement and preview next steps",
            details: [
              "Students verify their Income Statement totals match expected results",
              "Quick check: Do formulas update when trial balance data changes?",
              "Preview Day 3: Independent construction with peer review process"
            ]
          }
        ],
        materials: [
          "Income Statement template with formula examples",
          "INDEX/MATCH tutorial screencast links",
          "TechStart trial balance dataset (Excel format)",
          "Professional formatting standards guide"
        ]
      },
      {
        day: 3,
        title: "Application Practice: Income Statement Independent Build",
        focus: "Students independently build Income Statement with peer debugging support",
        duration: "45 minutes",
        activities: [
          {
            name: "Independent Construction Challenge",
            duration: "25 minutes",
            description: "Students build complete Income Statement from TechStart Unit 1 data",
            details: [
              "Teams use provided trial balance to construct Income Statement independently",
              "Apply INDEX/MATCH techniques learned yesterday with proper error handling",
              "Focus on professional formatting and clear section organization",
              "Include all relevant accounts: Service Revenue, Operating Expenses, Other Income/Expenses"
            ],
            callout: {
              type: "important",
              title: "Milestone 1 Assessment Focus",
              content: "Students must demonstrate technical mastery and professional presentation",
              items: [
                "Formula Accuracy: All INDEX/MATCH formulas pull correct data",
                "Complete Coverage: All revenue and expense accounts properly included",
                "Professional Format: Clear headers, appropriate alignment, consistent styling",
                "Dynamic Function: Formulas update correctly when source data changes"
              ]
            }
          },
          {
            name: "Peer Debugging Session",
            duration: "15 minutes",
            description: "Structured peer review focusing on formula accuracy and formatting",
            details: [
              "Teams exchange workbooks with another team for technical review",
              "Use checklist to verify: formula syntax, account coverage, formatting standards",
              "Test each other's models by making small changes to source data",
              "Provide specific, actionable feedback for formula improvements"
            ]
          },
          {
            name: "Milestone 1 Validation",
            duration: "5 minutes",
            description: "Final check against success criteria before moving to Balance Sheet",
            details: [
              "Students self-assess their Income Statement against Milestone 1 criteria",
              "Quick instructor check: Do formulas work correctly? Is formatting professional?",
              "Mark Milestone 1 as achieved for students meeting all criteria",
              "Preview Days 4-5: Balance Sheet construction and Retained Earnings reconciliation"
            ]
          }
        ],
        materials: [
          "Complete TechStart Unit 1 trial balance dataset",
          "Peer debugging checklist with specific formula requirements",
          "Milestone 1 assessment criteria rubric",
          "Professional Income Statement examples for reference"
        ]
      },
      {
        day: 4,
        title: "Excel Mastery: INDEX/MATCH & Named Ranges",
        focus: "Hands-on INDEX/MATCH and named ranges to create dynamic links",
        duration: "45 minutes",
        activities: [
          {
            name: "INDEX/MATCH Deep Dive",
            duration: "18 minutes",
            description: "Teach professional INDEX/MATCH patterns for statement mapping",
            details: [
              "Compare INDEX/MATCH vs. VLOOKUP for flexibility and maintainability",
              "Create named ranges and use structured references in formulas",
              "Refactor Income Statement links to rely on INDEX/MATCH and names",
              "Add IFERROR guards for missing accounts"
            ]
          },
          {
            name: "Guided Refactor",
            duration: "20 minutes",
            description: "Convert existing student models to named ranges + structured references",
            details: [
              "Turn data into Tables to enable auto‑expansion",
              "Replace positional references with Table[Column] notation",
              "Validate dynamic updates by inserting rows into source data",
              "Document key ranges and assumptions"
            ]
          },
          {
            name: "Quick Check",
            duration: "7 minutes",
            description: "Short comprehension check on INDEX/MATCH and naming conventions",
            details: [
              "Multiple‑choice concept check (ComprehensionCheck)",
              "Vocabulary reinforcement (FillInTheBlank)"
            ]
          }
        ],
        materials: [
          "INDEX/MATCH tutorial screencast",
          "Named ranges quick guide",
          "Income Statement refactor worksheet"
        ]
      },
      {
        day: 5,
        title: "Advanced Automation: Three‑Statement Link Engine",
        focus: "Implement scenario switch, mapping, SUMIFS rollups, and validation checks",
        duration: "45 minutes",
        activities: [
          {
            name: "Link Engine Build",
            duration: "22 minutes",
            description: "Step‑by‑step build of mapping, rollups, and scenario control",
            details: [
              "Map AccountID → StatementLine with XLOOKUP including if_not_found",
              "Create SUMIFS rollups for statement sections using structured references",
              "Add Scenario control (SWITCH/CHOOSE) to drive planning inputs",
              "Document assumptions and named cells"
            ]
          },
          {
            name: "Validation Systems",
            duration: "13 minutes",
            description: "Add professional validation checks and surface errors visibly",
            details: [
              "A=L+E tie, NI → RE roll‑forward, cash reconciliation",
              "Highlight unmapped IDs as \"Unknown\" with conditional formatting",
              "Use ErrorCheckingSystem to reinforce validation thinking"
            ]
          },
          {
            name: "Advanced Dataset Challenge",
            duration: "10 minutes",
            description: "Apply automation to edge‑case dataset and verify updates without manual fixes",
            details: [
              "Download and use /resources/unit03-three-statement-advanced-practice.csv",
              "Add rows and new accounts; confirm model self‑updates",
              "Run scenario switch and review KPI summary for correctness"
            ]
          }
        ],
        materials: [
          "/resources/unit03-three-statement-advanced-practice.csv",
          "Automation checklist and validation rubric",
          "Scenario control quick reference"
        ]
      },
      {
        day: 6,
        title: "New Skill Focus: Balance Sheet Linking & Retained Earnings",
        focus: "Direct instruction on Balance Sheet construction with cross-sheet linking",
        duration: "45 minutes",
        activities: [
          {
            name: "Balance Sheet Architecture Review",
            duration: "8 minutes",
            description: "Understanding Balance Sheet structure and its connection to other statements",
            details: [
              "Review Balance Sheet equation: Assets = Liabilities + Equity",
              "Connect to TechStart context: How Sarah's business assets and liabilities are organized",
              "Explain current vs. non-current classifications and why they matter to investors",
              "Preview the critical link: Retained Earnings connection to Income Statement"
            ]
          },
          {
            name: "Cross-Sheet Linking with Named Ranges",
            duration: "15 minutes",
            description: "Hands-on instruction for linking Balance Sheet to trial balance and Income Statement",
            details: [
              "Demonstrate creating named ranges for trial balance accounts",
              "Show INDEX/MATCH formulas for pulling asset and liability balances",
              "Build links from Balance Sheet to Income Statement Net Income",
              "Practice with TechStart data: linking cash, accounts receivable, equipment accounts"
            ],
            callout: {
              type: "technical",
              title: "Professional Cross-Sheet Linking",
              content: "Named ranges and proper linking create maintainable financial models",
              items: [
                "Named Ranges: Use descriptive names like 'TB_Cash' for trial balance cash account",
                "Consistent References: All Balance Sheet links should reference same source data",
                "Error Prevention: Use IFERROR to handle missing accounts gracefully",
                "Documentation: Comment formulas to explain linking logic for future users"
              ]
            }
          },
          {
            name: "Retained Earnings Reconciliation",
            duration: "15 minutes",
            description: "Critical instruction on linking Retained Earnings to Income Statement Net Income",
            details: [
              "Explain Retained Earnings as cumulative business profits reinvested",
              "Demonstrate formula: Beginning Retained Earnings + Net Income - Dividends",
              "Show link from Income Statement Net Income to Balance Sheet Retained Earnings",
              "Verify Balance Sheet equation balances with proper Retained Earnings calculation"
            ]
          },
          {
            name: "TechStart Balance Sheet Construction",
            duration: "5 minutes",
            description: "Begin guided construction of TechStart Balance Sheet",
            details: [
              "Students begin building Balance Sheet using techniques demonstrated",
              "Focus on proper account categorization and professional formatting",
              "Preview Day 7: Complete Balance Sheet construction and validation"
            ]
          },
          {
            name: "Milestone 2 Preview",
            duration: "2 minutes",
            description: "Preview Milestone 2 success criteria for Balance Sheet completion",
            details: [
              "Review Milestone 2 criteria: linked accounts, reconciled Retained Earnings, balanced equation",
              "Set expectation for Day 7: completed Balance Sheet ready for integration with Cash Flow"
            ]
          }
        ],
        materials: [
          "Balance Sheet template with linking formulas",
          "Named ranges creation tutorial",
          "Retained Earnings reconciliation examples",
          "TechStart trial balance with Balance Sheet accounts highlighted"
        ]
      },
      {
        day: 7,
        title: "Model Completion: Cash Flow Statement Construction",
        focus: "Build Indirect Cash Flow Statement and complete three-statement integration",
        duration: "45 minutes",
        activities: [
          {
            name: "Balance Sheet Completion Check",
            duration: "10 minutes",
            description: "Verify Balance Sheet construction and Retained Earnings reconciliation",
            details: [
              "Teams complete their Balance Sheet construction from Day 6",
              "Verify all cross-sheet links function correctly",
              "Check Balance Sheet equation: Assets = Liabilities + Equity validates to zero",
              "Confirm Retained Earnings properly reconciles with Income Statement Net Income"
            ],
            callout: {
              type: "checkpoint",
              title: "Milestone 2 Validation",
              content: "Balance Sheet must be complete and accurate before proceeding to Cash Flow",
              items: [
                "All Asset accounts properly categorized and linked to trial balance",
                "All Liability accounts correctly classified and totaled",
                "Retained Earnings links to Income Statement and reconciles properly",
                "Balance Sheet equation validates (difference equals zero)"
              ]
            }
          },
          {
            name: "Indirect Cash Flow Method Introduction",
            duration: "15 minutes",
            description: "Direct instruction on Indirect Cash Flow Statement construction",
            details: [
              "Explain indirect method: starts with Net Income, adjusts for non-cash items",
              "Demonstrate Operating Activities: Net Income + Depreciation - Changes in Working Capital",
              "Show Investing Activities: Capital expenditures, asset purchases/sales",
              "Cover Financing Activities: Debt changes, equity contributions, dividends paid"
            ]
          },
          {
            name: "TechStart Cash Flow Construction",
            duration: "15 minutes",
            description: "Guided practice building Cash Flow Statement for TechStart business",
            details: [
              "Students build Operating Activities section starting with Net Income from Income Statement",
              "Add adjustments for non-cash expenses (depreciation, etc.)",
              "Include changes in working capital accounts (Accounts Receivable, Accounts Payable)",
              "Build Investing and Financing sections based on Balance Sheet account changes"
            ]
          },
          {
            name: "Three-Statement Integration Check",
            duration: "5 minutes",
            description: "Verify all three statements properly integrate and reconcile",
            details: [
              "Check: Net Income flows from Income Statement to Balance Sheet Retained Earnings",
              "Verify: Cash Flow Statement ending cash balance matches Balance Sheet cash account",
              "Validate: All cross-sheet links function correctly",
              "Mark Milestone 3 complete for teams with fully integrated statements"
            ]
          }
        ],
        materials: [
          "Indirect Cash Flow Statement template",
          "Three-statement integration checklist",
          "Working capital change calculation guide",
          "Milestone 3 assessment criteria"
        ]
      },
      {
        day: 8,
        title: "Presentation Prep: KPI Dashboard Design",
        focus: "Design interactive KPI dashboard with charts, sparklines, and financial ratios",
        duration: "45 minutes",
        activities: [
          {
            name: "KPI Selection Strategy",
            duration: "10 minutes",
            description: "Choose 3-4 key performance indicators most relevant to business story",
            details: [
              "Review common financial ratios: Current Ratio, Return on Assets, Debt-to-Equity",
              "Connect to TechStart context: Which ratios best tell Sarah's business story?",
              "Consider investor perspective: What metrics demonstrate business health and growth potential?",
              "Teams select their 3-4 KPIs based on their chosen industry focus"
            ],
            callout: {
              type: "strategy",
              title: "Investor-Focused KPI Selection",
              content: "Choose KPIs that tell compelling story about business performance and potential",
              items: [
                "Profitability: Gross Margin, Net Margin, Return on Assets",
                "Liquidity: Current Ratio, Quick Ratio, Cash Runway (months)",
                "Efficiency: Asset Turnover, Receivables Days, Inventory Turnover", 
                "Growth: Revenue Growth Rate, Customer Acquisition trends"
              ]
            }
          },
          {
            name: "Dashboard Design & Charts",
            duration: "20 minutes",
            description: "Create visual dashboard with charts and sparklines for selected KPIs",
            details: [
              "Build charts showing KPI trends over time using Excel charting tools",
              "Create sparklines for compact visualization of performance trends",
              "Implement conditional formatting for KPI status indicators (red/yellow/green)",
              "Design professional layout with clear headings and intuitive organization"
            ]
          },
          {
            name: "Interactive Features Implementation",
            duration: "12 minutes",
            description: "Add interactive elements like dropdown menus and scenario analysis",
            details: [
              "Create dropdown menus for scenario selection (best case, worst case, most likely)",
              "Build data validation lists for interactive filtering",
              "Add dynamic chart titles that update based on user selections",
              "Test all interactive features to ensure smooth user experience"
            ]
          },
          {
            name: "Dashboard Usability Review",
            duration: "3 minutes",
            description: "Test dashboard functionality and prepare for storyboard layout",
            details: [
              "Teams test all dashboard features with sample data changes",
              "Verify charts update correctly when underlying data changes",
              "Check professional appearance and investor-appropriate formatting",
              "Preview Day 9: Storyboard layout and investor presentation preparation"
            ]
          }
        ],
        materials: [
          "KPI dashboard design guide with chart examples",
          "Excel charting and sparkline tutorials",
          "Interactive features implementation guide",
          "Professional dashboard design examples"
        ]
      },
      {
        day: 9,
        title: "Mock Panel & Revisions: Expert Critique Session",
        focus: "Expert critique from local CPA on workbook and presentation with revision time",
        duration: "45 minutes",
        activities: [
          {
            name: "Investor One-Pager Creation",
            duration: "15 minutes",
            description: "Design professional one-page summary for investor presentation",
            details: [
              "Create compelling executive summary highlighting key financial performance",
              "Include visual elements: key charts, KPI summary, growth projections",
              "Write investor-focused narrative connecting financial data to business opportunity",
              "Design professional layout appropriate for investor presentation materials"
            ]
          },
          {
            name: "Expert CPA Review Session",
            duration: "20 minutes",
            description: "Local CPA provides professional feedback on technical accuracy and presentation",
            details: [
              "Each team presents 3-minute overview of their integrated model to visiting CPA",
              "CPA evaluates: technical accuracy, professional presentation, investor appeal",
              "Focus feedback on: formula accuracy, statement integration, narrative clarity",
              "CPA provides specific suggestions for improvement before final presentations"
            ],
            callout: {
              type: "professional",
              title: "Real-World Expert Feedback",
              content: "Professional perspective on technical accuracy and investor readiness",
              items: [
                "Technical Review: Are formulas accurate and professionally constructed?",
                "Integration Check: Do statements properly connect and reconcile?",
                "Presentation Quality: Is the work ready for investor presentation?",
                "Narrative Clarity: Does the financial story make business sense?"
              ]
            }
          },
          {
            name: "Revision and Enhancement Time",
            duration: "10 minutes",
            description: "Teams incorporate CPA feedback to refine models and presentations",
            details: [
              "Teams prioritize CPA feedback and implement highest-impact improvements",
              "Focus on technical fixes first, then presentation enhancements",
              "Refine investor one-pager based on professional feedback",
              "Practice revised presentation pitch with timing and flow adjustments"
            ]
          }
        ],
        materials: [
          "Investor one-pager template and design guide",
          "CPA feedback forms with evaluation criteria",
          "Professional presentation standards checklist",
          "Revision priority worksheet"
        ]
      },
      {
        day: 10,
        title: "Presentations + Peer Review (Single‑Phase PBL)",
        focus: "Final presentations to mock investor panel with interactive workbook demonstrations",
        duration: "40 minutes",
        activities: [
          {
            name: "Setup",
            duration: "5 minutes",
            description: "Teams stage laptops and materials; rubric review",
            details: [
              "Check that all Excel links and dashboards work",
              "Review rubric weights: 50/20/15/10/5",
              "Confirm presenter order (six groups)"
            ]
          },
          {
            name: "Six Groups × ~5 min",
            duration: "30 minutes",
            description: "4–5 minute pitch + brief Q&A per group",
            details: [
              "Live demo: linked three‑statement model + KPI dashboard",
              "Story: decision, drivers, risks, and assumptions",
              "Audience submits PeerCritiqueForm feedback by rubric category"
            ],
            callout: {
              type: "assessment",
              title: "Authentic Investor Presentation Assessment",
              content: "Mirrors real investor due diligence",
              items: [
                "Technical Mastery: Formulas, links, and validations",
                "Business Narrative: Clear, relevant insights",
                "Professional Delivery: Audience‑appropriate visuals",
                "Q&A: Confident, concise responses"
              ]
            }
          },
          {
            name: "Wrap",
            duration: "5 minutes",
            description: "Panel feedback and student reflection",
            details: [
              "Panel highlights strengths and next steps",
              "Students complete quick reflection and archive final files"
            ]
          }
        ],
        materials: [
          "Investor panel evaluation forms and criteria",
          "Demo Day presentation setup materials",
          "Exit reflection prompts and portfolio submission guidelines",
          "Unit 4 preview materials and transition activities"
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
        "Technical Check-ins: Daily formula accuracy and integration verification",
        "Peer Review: Structured feedback on statement construction and dashboard design",
        "Progress Milestones: Clear checkpoints for Income Statement, Balance Sheet, and Cash Flow completion",
        "Expert Feedback: Professional CPA review of technical accuracy and presentation quality",
        "Self-Assessment: Students evaluate their own progress against success criteria"
      ]
    },
    {
      category: "feedback",
      title: "Feedback Strategies",
      strategies: [
        "Immediate Technical Feedback: Formula corrections and integration fixes provided in real-time",
        "Professional Standards Focus: Feedback emphasizes investor-ready quality and business presentation",
        "Revision Opportunities: Multiple chances to incorporate feedback and improve work quality",
        "Peer Learning: Teams learn from each other's successful approaches and creative solutions"
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students",
      strategies: [
        "Formula Templates: Provide INDEX/MATCH syntax with specific cell references pre-filled",
        "Step-by-Step Guides: Visual walkthroughs for each statement construction process",
        "Simplified KPIs: Focus on 2-3 basic ratios rather than complex dashboard features",
        "Peer Support: Pair with students strong in Excel for collaborative construction"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Advanced Features: Implement dropdown menus, scenario analysis, and dynamic charting",
        "Industry Customization: Research industry-specific KPIs and benchmarking data",
        "Teaching Roles: Support struggling classmates with formula construction and troubleshooting",
        "Extension Projects: Create automated reporting features or basic VBA functionality"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Financial Vocabulary Support: Glossary with visual definitions of key accounting terms",
        "Template Scaffolding: Pre-structured templates with clear headings and organization",
        "Visual Learning Aids: Flowcharts showing statement relationships and data flow",
        "Collaborative Support: Mixed-language team structures for peer translation and explanation"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: 1:1 laptops with Excel 365 or Excel 2019+" },
        { name: "Software: Microsoft Excel with charting and analysis features enabled" },
        { name: "Internet: For accessing real financial statement examples (10-Q filings)" },
        { name: "Presentation: Projector/smart board for live Excel demonstrations" },
        { name: "Audio/Video: Recording equipment for portfolio documentation" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials",
      items: [
        { name: "Financial Statement Templates", link: "../excel-templates/three-statement-template.xlsx" },
        { name: "INDEX/MATCH Formula Guide", link: "../excel-instruction/index-match-guide.pdf" },
        { name: "KPI Dashboard Examples", link: "../visualization/kpi-dashboard-examples.xlsx" },
        { name: "Investor One-Pager Template", link: "../presentation-materials/investor-onepager-template.docx" },
        { name: "Assessment Rubrics", link: "../assessment-rubrics/three-statement-rubric.html" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Guest Expert: Local CPA for technical review and professional feedback" },
        { name: "Investor Panel: PTA members with finance backgrounds, local entrepreneurs" },
        { name: "Real Data: Tesla 10-Q or local business financial statements for analysis" },
        { name: "Industry Examples: Public company financial statements for benchmarking" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students successfully demonstrate mastery of three-statement integration?",
      "Were INDEX/MATCH formulas implemented correctly for professional-quality linking?",
      "How effectively did the KPI dashboard enhance the financial narrative?",
      "Did the investor presentation format provide authentic assessment of business communication skills?",
      "What technical challenges were most common and how can instruction be improved?"
    ],
    dataCollection: [
      "Technical Assessment: Analysis of formula accuracy and statement integration",
      "Presentation Quality: Investor panel feedback on communication and professional presentation",
      "Student Reflection: Exit surveys on learning achievements and technical confidence",
      "Peer Feedback: Analysis of collaborative learning and peer support effectiveness",
      "Time Management: Comparison of planned vs. actual lesson durations and pacing"
    ],
    nextUnitPrep: [
      "Archive exemplary three-statement models for future reference and instruction",
      "Document common Excel formula errors for targeted remediation",
      "Collect investor panel feedback for presentation coaching improvements",
      "Identify students ready for advanced statistical analysis in Unit 4",
      "Prepare transition materials connecting financial statements to operational forecasting"
    ]
  }
}
