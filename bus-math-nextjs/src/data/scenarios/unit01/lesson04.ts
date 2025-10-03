import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson04Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mds5t7qs1o7y0k5y45z",
    lessonNumber: 4,
    title: "Excel Model: Tables & SUMIF Functions",
    drivingQuestion:
      "How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?",
    durationMinutes: 45,
    focus: "Automate TechStart's ledger with Excel Tables and SUMIF so reports stay investor-ready",
    slug: "unit01-lesson04"
  },
  sharedResources: [
    {
      id: "unit01-ledger-basic-practice",
      kind: "dataset",
      title: "Unit 01 Ledger Practice Workbook",
      description: "Starter Excel workbook for building tables and SUMIF automation",
      path: "/resources/unit01-ledger-basic-practice.xlsx"
    }
  ],
  teacherGuidance: {
    overview:
      "Demonstrate the before/after impact of Excel automation, guide students through table + SUMIF construction, then release them to independent mastery challenges.",
    pacingHighlights: [
      "Hook demonstration + discussion (7 minutes)",
      "Direct instruction on tables + SUMIF (12 minutes)",
      "Guided build with transaction journal (10 minutes)",
      "Independent mastery + dataset challenges (10 minutes)",
      "Assessment + performance reflection (4 minutes)",
      "CAP reflection + preview of conditional formatting (2 minutes)"
    ],
    assessments: [
      "Inline comprehension checks",
      "Guided ledger build submissions",
      "Phase 5 mastery assessment (question bank)",
      "Reflection journal capturing CAP"
    ]
  },
  phases: [
    {
      id: "unit01-lesson04-phase1",
      name: "Hook",
      title: "Manual vs. Automated Ledger",
      sequence: 1,
      summary:
        "Students compare Sarah's time-consuming manual calculations with the speed and accuracy of Excel Tables plus SUMIF automation.",
      objectives: [
        "Explain why manual ledger math breaks at scale",
        "Identify how Excel automation supports investor confidence",
        "Predict which Excel feature will be most challenging"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah spends 20 minutes adding cash totals by hand, only to get different answers each time. She needs a system that updates instantly and never miscalculates." 
        },
        {
          type: "paragraph",
          text: "Excel Tables give structure, and SUMIF functions deliver automation. Together they transform TechStart's chaotic notebook into a professional ledger." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Automation Mindset Check",
            allowRetry: true,
            showExplanations: true,
            questions: [
              {
                id: "u01l04-hook-1",
                prompt: "What Excel feature will likely challenge Sarah the most?",
                correctAnswer: "Writing SUMIF formulas correctly",
                distractors: [
                  "Creating basic Excel Tables",
                  "Setting up automated calculations",
                  "Organizing transaction data professionally"
                ],
                explanation: "SUMIF syntax requires precision—most students struggle here first."
              },
              {
                id: "u01l04-hook-2",
                prompt: "Based on the manual vs. automated comparison, what is the biggest benefit of Excel automation?",
                correctAnswer: "Both eliminates errors and saves time",
                distractors: [
                  "Makes spreadsheets more colorful",
                  "Eliminates human calculation errors",
                  "Reduces time on repetitive tasks"
                ],
                explanation: "Automation delivers accuracy and efficiency simultaneously."
              },
              {
                id: "u01l04-hook-3",
                prompt: "Why would investors care about Sarah's Excel skills?",
                correctAnswer: "It demonstrates systematic financial controls",
                distractors: [
                  "It shows she knows how to use computers",
                  "It proves she can make colorful spreadsheets",
                  "It indicates she doesn't need an accountant"
                ],
                explanation: "Investors back founders who can show disciplined financial systems."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Model the time difference between manual and automated totals",
          "Use investor language: controls, audit trail, credibility"
        ],
        facilitationTips: [
          "Invite students to share tech frustrations from their own lives",
          "Capture predictions about Excel challenges to revisit later"
        ],
        timingMinutes: 7,
        presenterNotes: "Keep energy high—this lesson promises tangible relief from busywork." 
      }
    },
    {
      id: "unit01-lesson04-phase2",
      name: "Introduction",
      title: "Excel Tables and SUMIF Fundamentals",
      sequence: 2,
      summary:
        "Students learn why Excel Tables create professional structure and how SUMIF delivers instant calculations tied to TechStart's accounts.",
      objectives: [
        "Create an Excel Table with structured references",
        "Write SUMIF formulas using TechStart data",
        "Explain how automation scales with business growth"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Excel Tables treat Sarah's ledger as one intelligent object—columns expand automatically and formulas stay readable." 
        },
        {
          type: "paragraph",
          text: "SUMIF functions filter and total data instantly, replacing manual math with investor-quality automation." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Excel Table + SUMIF Concepts",
            questions: [
              {
                id: "u01l04-intro-1",
                prompt: "What is the main advantage of using an Excel Table instead of a normal range?",
                correctAnswer: "Excel Tables expand automatically and use structured references",
                distractors: [
                  "Excel Tables look prettier",
                  "Excel Tables use less memory",
                  "Excel Tables only work for financial data"
                ],
                explanation:
                  "Structured references and auto-expansion keep formulas accurate as data grows."
              },
              {
                id: "u01l04-intro-2",
                prompt: "Which formula totals revenue in TechStart's ledger?",
                correctAnswer: "=SUMIF(Table1[Account], \"Revenue\", Table1[Credit])",
                distractors: [
                  "=SUMIF(Table1[Account], \"Revenue\", Table1[Debit])",
                  "=SUMIF(Table1[Debit], \"Revenue\", Table1[Credit])",
                  "=SUMIF(Table1[Credit], \"Revenue\", Table1[Account])"
                ],
                explanation:
                  "Revenue lives in the credit column, so SUMIF targets credits."
              },
              {
                id: "u01l04-intro-3",
                prompt: "What happens to SUMIF formulas when a new transaction is added to the table?",
                correctAnswer: "The formulas automatically include the new data",
                distractors: [
                  "You must update each SUMIF manually",
                  "The formulas show errors",
                  "You must recreate the table"
                ],
                explanation: "Structured references grow with the table; no manual edits required."
              },
              {
                id: "u01l04-intro-4",
                prompt: "Why do professional models prefer SUMIF over manual addition?",
                correctAnswer: "Both saves time and updates automatically",
                distractors: [
                  "SUMIF is required by accounting standards",
                  "Manual addition is faster",
                  "SUMIF works even without data"
                ],
                explanation:
                  "Automation drives both efficiency and reliability—critical for investors."
              }
            ],
            showExplanations: true
          }
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Excel Automation Vocabulary",
            items: [
              {
                id: "u01l04-fill-1",
                text: "An Excel {blank} treats ledger data as a structured, expandable unit.",
                answer: "Table",
                hint: "This feature creates structured references"
              },
              {
                id: "u01l04-fill-2",
                text: "The {blank} function adds numbers that meet a specific condition.",
                answer: "SUMIF",
                hint: "Think range, criteria, sum_range"
              },
              {
                id: "u01l04-fill-3",
                text: "Structured references replace A1:A50 with {blank} references like Table1[Account].",
                answer: "structured",
                hint: "This word signals readable formulas"
              },
              {
                id: "u01l04-fill-4",
                text: "In =SUMIF(Table1[Account], \"Cash\", Table1[Debit]), the word \"Cash\" is the {blank}.",
                answer: "criteria",
                hint: "It tells Excel what to match"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Demonstrate table creation live, highlighting structured references",
          "Model SUMIF step-by-step using TechStart account names"
        ],
        facilitationTips: [
          "Encourage students to narrate the range, criteria, sum_range pieces",
          "Use a color-coded anchor chart for structured reference syntax"
        ],
        timingMinutes: 12,
        presenterNotes: "Keep language investor-focused: automation, controls, scalability." 
      }
    },
    {
      id: "unit01-lesson04-phase3",
      name: "Guided Practice",
      title: "Building the Smart Ledger",
      sequence: 3,
      summary:
        "Students follow a guided sequence to construct the ledger table, enter TechStart transactions, and test SUMIF formulas using an interactive journal tool.",
      objectives: [
        "Convert TechStart transactions into an Excel Table",
        "Author SUMIF formulas for cash and revenue balances",
        "Explain how the automation updates in real time"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Working side-by-side with Sarah, students build the LedgerTable, enter real client payments, and watch SUMIF totals update instantly." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Guided Steps",
          body: "1) Create table, 2) Enter TechStart data, 3) Write SUMIF totals, 4) Validate balance"
        }
      ],
      components: [
        {
          type: "transactionJournal",
          component: "TransactionJournal",
          data: {
            title: "Smart Ledger Practice Journal",
            clientTypes: ["TechStart Solutions", "E-commerce Business", "Creative Agency"],
            maxTransactions: 15,
            showAnalytics: true,
            initialTransactions: [
              {
                id: "u01l04-journal-1",
                entryNumber: "JE001",
                date: "2025-02-02",
                description: "Bakery website billed $2,200 on credit",
                clientFocus: "TechStart Solutions",
                lines: [
                  { id: "u01l04-j1", account: "Accounts Receivable", accountType: "asset", debit: 2200, credit: 0 },
                  { id: "u01l04-j2", account: "Service Revenue", accountType: "revenue", debit: 0, credit: 2200 }
                ],
                isBalanced: true
              },
              {
                id: "u01l04-journal-2",
                entryNumber: "JE002",
                date: "2025-02-04",
                description: "Software subscription paid $150 cash",
                clientFocus: "TechStart Solutions",
                lines: [
                  { id: "u01l04-j3", account: "Supplies Expense", accountType: "expense", debit: 150, credit: 0 },
                  { id: "u01l04-j4", account: "Cash", accountType: "asset", debit: 0, credit: 150 }
                ],
                isBalanced: true
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Discuss Automation Wins",
            duration: "5 minutes",
            description: "Analyze how automation improves TechStart's workflow.",
            prompts: [
              "Which SUMIF formula felt most powerful once it worked?",
              "How does the table structure reduce investor risk?",
              "What could go wrong if Sarah stuck with manual math?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Check that students rename their table consistently",
          "Encourage constant testing after every few entries"
        ],
        facilitationTips: [
          "Project Excel while verbalizing every click",
          "Celebrate students who spot formula typos quickly"
        ],
        timingMinutes: 10,
        presenterNotes: "Collect screenshots for portfolio evidence if time permits." 
      }
    },
    {
      id: "unit01-lesson04-phase4",
      name: "Independent Practice",
      title: "Advanced Excel Mastery Challenges",
      sequence: 4,
      summary:
        "Students download the ledger practice workbook, tackle advanced SUMIF/SUMIFS scenarios, and build error-detection features that scale with TechStart's growth.",
      objectives: [
        "Implement multi-criteria SUMIFS formulas",
        "Design error-checking systems with conditional logic",
        "Document professional workflows for investor review"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah now needs investor-ready automation: multi-client revenue dashboards, duplicate detection, and automatic trial balance checks." 
        }
      ],
      datasets: [
        {
          id: "unit01-ledger-basic-practice",
          kind: "dataset",
          title: "Ledger Practice Workbook",
          path: "/resources/unit01-ledger-basic-practice.xlsx",
          description: "Download and convert this file into an Excel Table named LedgerTable."
        }
      ],
      components: [
        {
          type: "journalEntry",
          component: "JournalEntryBuilding",
          data: {
            title: "Advanced Entry Practice",
            description: "Handle billing, purchases on account, and paydowns with balanced entries.",
            availableAccounts: [
              "Cash",
              "Accounts Receivable",
              "Accounts Payable",
              "Notes Payable",
              "Service Revenue",
              "Sales Revenue",
              "Rent Expense",
              "Supplies Expense",
              "Utilities Expense",
              "Inventory",
              "Equipment",
              "Unearned Revenue",
              "Owner's Equity"
            ],
            scenarios: [
              {
                id: "u01l04-advanced-1",
                description: "Record a $2,200 website project billed to the bakery; client will pay next week.",
                correctEntry: [
                  { account: "Accounts Receivable", debit: 2200, credit: 0 },
                  { account: "Service Revenue", debit: 0, credit: 2200 }
                ],
                explanation: "Accounts Receivable (asset) increases with a debit; Service Revenue increases with a credit."
              },
              {
                id: "u01l04-advanced-2",
                description: "Purchase $1,500 equipment on account (to be paid later).",
                correctEntry: [
                  { account: "Equipment", debit: 1500, credit: 0 },
                  { account: "Accounts Payable", debit: 0, credit: 1500 }
                ],
                explanation: "Equipment (asset) increases with a debit; Accounts Payable (liability) increases with a credit."
              },
              {
                id: "u01l04-advanced-3",
                description: "Pay $600 toward outstanding Accounts Payable.",
                correctEntry: [
                  { account: "Accounts Payable", debit: 600, credit: 0 },
                  { account: "Cash", debit: 0, credit: 600 }
                ],
                explanation: "Liabilities decrease with debits; cash decreases with credits."
              }
            ]
          }
        },
        {
          type: "tAccountsVisualization",
          component: "TAccountsVisualization",
          data: {
            title: "Accounting Equation Dashboard",
            showAccountingEquation: true,
            showBalances: true,
            interactive: false
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Confirm students download and store the workbook in their project folders",
          "Encourage documentation of formulas using cell comments"
        ],
        facilitationTips: [
          "Set checkpoints for each challenge (multi-client SUMIFS, error flags, dashboard)",
          "Encourage peer review of automation logic"
        ],
        timingMinutes: 10,
        presenterNotes: "Collect standout solutions for future exemplars and investor showcase." 
      }
    },
    {
      id: "unit01-lesson04-phase5",
      name: "Assessment",
      title: "Excel Tables & SUMIF Mastery Assessment",
      sequence: 5,
      summary:
        "Students complete a question-bank-driven assessment tying technical knowledge to investor-ready business reasoning.",
      objectives: [
        "Score 80% or higher on Excel automation knowledge",
        "Connect technical skills to professional applications",
        "Identify next steps for mastery"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This mastery check mirrors the interview questions asked of financial analysts and operations specialists—precision matters." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Excel Tables & SUMIF Mastery",
            description: "Ten questions covering technical ability and business application.",
            questionBankRef: {
              bankId: "unit01-phase5",
              filter: {
                lessonIds: ["lesson04"]
              }
            },
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Remind students this data feeds analytics and investor readiness dashboards",
          "Provide immediate feedback using auto-generated explanations"
        ],
        facilitationTips: [
          "Encourage students scoring below 80% to revisit guided samples",
          "Collect reflections on questions that felt most 'real world'"
        ],
        timingMinutes: 4,
        presenterNotes: "Celebrate students who articulate both Excel logic and business context." 
      }
    },
    {
      id: "unit01-lesson04-phase6",
      name: "Closing",
      title: "Excel Mastery Reflection & Preview",
      sequence: 6,
      summary:
        "Students reflect on CAP competencies, connect automation to investor trust, and preview conditional formatting for the next lesson.",
      objectives: [
        "Document growth in courage, adaptability, and persistence",
        "Explain how automation powers self-auditing ledgers",
        "Preview conditional formatting as the next control layer"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah now has a living ledger that updates itself. Investors will see a founder who understands systems, not just spreadsheets." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Next Up",
          body: "Conditional formatting and error checks transform the ledger into a true self-auditing system." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Lesson 4 Reflection: Excel Tables & SUMIF",
            unitTitle: "Unit 1: Smart Ledger Launch",
            journalingFocus: "Capture breakthroughs in automation thinking.",
            entries: [
              {
                id: "u01l04-reflection-courage",
                category: "courage",
                prompt:
                  "What Excel concept pushed you out of your comfort zone, and how did you push through the confusion?",
                placeholder: "Recall the moment SUMIF or structured references finally clicked..."
              },
              {
                id: "u01l04-reflection-adaptability",
                category: "adaptability",
                prompt:
                  "How did you adjust when your first Excel Table or SUMIF attempt failed?",
                placeholder: "Think about revising syntax, seeking feedback, or changing strategy..."
              },
              {
                id: "u01l04-reflection-persistence",
                category: "persistence",
                prompt:
                  "Describe a moment when you wanted to quit the Excel challenges but kept going. What was the breakthrough?",
                placeholder: "Capture the moment automation finally worked the way you imagined..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Connect reflections to investor storytelling for the unit pitch",
          "Preview conditional formatting and error checks for Lesson 5"
        ],
        facilitationTips: [
          "Invite volunteer shares focusing on CAP competencies",
          "Encourage students to save screenshots of their completed ledger"
        ],
        timingMinutes: 2,
        presenterNotes: "Remind students they now have portfolio-ready evidence of Excel automation mastery." 
      }
    }
  ]
}
