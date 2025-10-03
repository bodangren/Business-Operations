import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson03Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mds5t7qrc36pdfr61an",
    lessonNumber: 3,
    title: "Core Concepts: Debit & Credit Rules",
    drivingQuestion:
      "How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?",
    durationMinutes: 45,
    focus: "Build fluency with debit and credit rules so TechStart transactions always balance",
    slug: "unit01-lesson03"
  },
  sharedResources: [
    {
      id: "dea-ler-cheatsheet",
      kind: "document",
      title: "DEA LER Memory Guide",
      description: "Mini poster summarizing which accounts increase with debits versus credits",
      path: "/assets/reference/unit01/dea-ler-cheatsheet.pdf"
    }
  ],
  teacherGuidance: {
    overview:
      "Move students from curiosity about Dr./Cr. shorthand to confident execution of double-entry bookkeeping, using TechStart scenarios to keep relevance high.",
    pacingHighlights: [
      "Hook story + T-account visualization (8 minutes)",
      "Rule direct instruction with fill-in practice (10 minutes)",
      "Guided journal entry building (12 minutes)",
      "Independent complex transactions + trial balance (10 minutes)",
      "Assessment pull + verification (3 minutes)",
      "Reflection + Excel preview (2 minutes)"
    ],
    assessments: [
      "Formative checks in guided practice",
      "Interactive journal entry submissions",
      "Phase 5 question bank assessment",
      "CAP-aligned reflection journal"
    ]
  },
  phases: [
    {
      id: "unit01-lesson03-phase1",
      name: "Hook",
      title: "The Logic Behind Left and Right",
      sequence: 1,
      summary:
        "Students step into Sarah's shoes as she decodes debit (Dr.) and credit (Cr.) notation, discovering why every T-account entry has two sides.",
      objectives: [
        "Define debits and credits as left and right sides of a T-account",
        "Explain why total debits must equal total credits",
        "Connect the system to investor-ready bookkeeping"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah Chen stares at her accounting workbook, noticing the mysterious abbreviations Dr. and Cr. scattered across every ledger example. She already trusts the accounting equation, but now she wants to know the logic that keeps entries balanced." 
        },
        {
          type: "paragraph",
          text: "She learns that debits simply mean the left side of a T-account and credits mean the right side. The power comes from how account types respond when you use each side." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Investor Connection",
          body:
            "When Sarah can explain why every transaction has equal debits and credits, she proves to investors that TechStart tracks money with professional discipline."
        }
      ],
      components: [
        {
          type: "tAccount",
          component: "TAccountSimple",
          data: {
            accountName: "Cash",
            accountType: "asset",
            title: "Cash Account Snapshot",
            debits: [
              {
                id: "cash-debit-1",
                date: "Jan 5",
                description: "Service Revenue - Bakery website",
                amount: 2200,
                reference: "Invoice #001"
              }
            ],
            credits: [
              {
                id: "cash-credit-1",
                date: "Jan 8",
                description: "Rent Expense",
                amount: 800,
                reference: "Check #101"
              }
            ],
            showBalance: true,
            showFormulas: true
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Hook Engagement Check",
            description: "Test your initial understanding of debit and credit concepts",
            allowRetry: true,
            showExplanations: true,
            questions: [
              {
                id: "u01l03-hook-1",
                prompt:
                  "Sarah is reading about ledger examples and sees 'Dr.' and 'Cr.' next to entries. What do these abbreviations stand for?",
                correctAnswer: "Debit and Credit",
                distractors: ["Doctor and Creditor", "Drive and Create", "Decrease and Reduce"],
                explanation:
                  "Dr. comes from the Latin 'debere' meaning 'to owe' and represents debits; Cr. comes from 'credere' meaning 'to trust' and represents credits."
              },
              {
                id: "u01l03-hook-2",
                prompt: "Why do accountants use a 'T-account' to visualize transactions?",
                correctAnswer: "The T-shape clearly separates debits (left side) from credits (right side)",
                distractors: ["It looks like a table", "The T stands for 'Transaction'", "It's the most colorful layout"],
                explanation:
                  "The T-account format makes it obvious which entries are debits and which are credits, reinforcing balance."
              },
              {
                id: "u01l03-hook-3",
                prompt: "In Sarah's accounting system, what must ALWAYS be true for every transaction she records?",
                correctAnswer: "Total debits must equal total credits",
                distractors: ["She must have more assets than liabilities", "Every entry needs five accounts", "All amounts must be positive"],
                explanation:
                  "Perfect balance between debits and credits is the foundation of double-entry bookkeeping."
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Think-Pair-Share",
            duration: "3 minutes",
            description: "Discuss how debits and credits keep TechStart's ledger trustworthy.",
            prompts: [
              "Why is the $2,200 bakery payment placed on the left side of the Cash T-account?",
              "Why does the $800 rent payment appear on the right side?",
              "How does this left/right system help Sarah catch errors before investors do?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Reinforce that debit/credit terminology is positional, not positive/negative",
          "Connect perfect balance back to the accounting equation"
        ],
        facilitationTips: [
          "Ask students to narrate what happens to assets and equity when cash increases",
          "Use color-coded magnets on a whiteboard T-account for kinesthetic learners"
        ],
        timingMinutes: 8,
        presenterNotes: "Capture student definitions on the board so you can revisit them in Phase 3." 
      }
    },
    {
      id: "unit01-lesson03-phase2",
      name: "Introduction",
      title: "Systematic Debit & Credit Rules",
      sequence: 2,
      summary:
        "Students learn the DEA LER framework that governs how each account category reacts to debits and credits, anchoring terminology with TechStart examples.",
      objectives: [
        "Memorize the DEA LER acronym",
        "Classify account types by their normal balance side",
        "Apply rules to TechStart transactions"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Professional accountants remember debit and credit behavior using the DEA LER system: Dividends, Expenses, and Assets (DEA) increase with debits; Liabilities, Equity, and Revenue (LER) increase with credits." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Memory Hook",
          body: "DEAlers stay on the left, LERners stay on the right."
        },
        {
          type: "paragraph",
          text: "Sarah maps her TechStart accounts to this framework so she knows instantly which side of a T-account to use when money moves." 
        }
      ],
      components: [
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Debit & Credit Vocabulary",
            items: [
              {
                id: "u01l03-debit-definition",
                text: "A {blank} simply means an entry made on the LEFT side of a T-account.",
                answer: "Debit",
                hint: "Abbreviated Dr., from Latin 'to owe'"
              },
              {
                id: "u01l03-credit-definition",
                text: "A {blank} simply means an entry made on the RIGHT side of a T-account.",
                answer: "Credit",
                hint: "Abbreviated Cr., from Latin 'to trust'"
              },
              {
                id: "u01l03-dea",
                text: "The {blank} part of the DEA LER acronym represents Dividends, Expenses, and Assets.",
                answer: "DEA",
                hint: "These accounts increase with debits"
              },
              {
                id: "u01l03-ler",
                text: "The {blank} part of the DEA LER acronym represents Liabilities, Equity, and Revenue.",
                answer: "LER",
                hint: "These accounts increase with credits"
              },
              {
                id: "u01l03-asset-increase",
                text: "When Sarah's Cash account increases, she records a {blank} entry.",
                answer: "debit",
                hint: "Cash is an asset"
              },
              {
                id: "u01l03-revenue-increase",
                text: "When Sarah earns service revenue, she records a {blank} entry to her Revenue account.",
                answer: "credit",
                hint: "Revenue follows the LER pattern"
              },
              {
                id: "u01l03-balance-rule",
                text: "In every journal entry, total {blank} must equal total credits.",
                answer: "debits",
                hint: "This is the double-entry guarantee"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Repeat DEA LER often—students should be able to chant it back",
          "Tie each rule to Sarah's actual accounts to keep relevance"
        ],
        facilitationTips: [
          "Use hand motions for left (debit) and right (credit) to build muscle memory",
          "Have students create a two-column T-chart in notebooks with DEA on left, LER on right"
        ],
        timingMinutes: 10,
        presenterNotes: "Transition by highlighting that the next phase puts the rules to work." 
      }
    },
    {
      id: "unit01-lesson03-phase3",
      name: "Guided Practice",
      title: "Recording TechStart Transactions",
      sequence: 3,
      summary:
        "Students apply DEA LER rules to TechStart transactions, updating T-accounts and building journal entries with structured feedback.",
      objectives: [
        "Record TechStart transactions in T-account format",
        "Build balanced journal entries for typical service scenarios",
        "Explain debit/credit choices using professional vocabulary"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah analyzes each transaction by asking which accounts change and whether they increase or decrease. The DEA LER rules tell her which side—debit or credit—to use." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Process Steps",
          body: "1) Identify affected accounts, 2) Decide increase/decrease, 3) Apply DEA LER, 4) Verify debits = credits"
        }
      ],
      components: [
        {
          type: "tAccount",
          component: "TAccountSimple",
          data: {
            accountName: "Cash",
            accountType: "asset",
            title: "Cash Account (Guided)",
            debits: [
              {
                id: "cash-guided-debit-1",
                date: "Jan 5",
                description: "Service Revenue - Bakery website",
                amount: 2200,
                reference: "Invoice #001"
              },
              {
                id: "cash-guided-debit-2",
                date: "Jan 12",
                description: "Service Revenue - Dental office SEO",
                amount: 1100,
                reference: "Payment #002"
              }
            ],
            credits: [
              {
                id: "cash-guided-credit-1",
                date: "Jan 8",
                description: "Rent Expense",
                amount: 800,
                reference: "Check #101"
              }
            ],
            showBalance: true
          }
        },
        {
          type: "tAccount",
          component: "TAccountSimple",
          data: {
            accountName: "Service Revenue",
            accountType: "revenue",
            title: "Service Revenue Account",
            debits: [],
            credits: [
              {
                id: "srv-credit-1",
                date: "Jan 5",
                description: "Bakery website project",
                amount: 2200,
                reference: "Invoice #001"
              },
              {
                id: "srv-credit-2",
                date: "Jan 12",
                description: "Dental office SEO work",
                amount: 1100,
                reference: "Payment #002"
              }
            ],
            showBalance: true
          }
        },
        {
          type: "journalEntry",
          component: "JournalEntryBuilding",
          data: {
            title: "Journal Entry Practice: TechStart",
            description: "Build balanced entries for Sarah's transactions.",
            availableAccounts: [
              "Cash",
              "Accounts Receivable",
              "Accounts Payable",
              "Service Revenue",
              "Sales Revenue",
              "Rent Expense",
              "Salary Expense",
              "Unearned Revenue",
              "Supplies",
              "Equipment"
            ],
            scenarios: [
              {
                id: "techstart-1",
                description: "Sarah receives $1,100 cash for completing SEO work for the dental office.",
                correctEntry: [
                  { account: "Cash", debit: 1100, credit: 0 },
                  { account: "Service Revenue", debit: 0, credit: 1100 }
                ],
                explanation:
                  "Cash (asset) increases with a debit; Service Revenue increases with a credit."
              },
              {
                id: "techstart-2",
                description: "Sarah pays $800 cash for office rent.",
                correctEntry: [
                  { account: "Rent Expense", debit: 800, credit: 0 },
                  { account: "Cash", debit: 0, credit: 800 }
                ],
                explanation:
                  "Expenses increase with debits while cash decreases with a credit."
              },
              {
                id: "techstart-3",
                description: "A new client pays $600 cash in advance for services next month.",
                correctEntry: [
                  { account: "Cash", debit: 600, credit: 0 },
                  { account: "Unearned Revenue", debit: 0, credit: 600 }
                ],
                explanation:
                  "Cash increases with a debit; Unearned Revenue (liability) increases with a credit."
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Discussion: Patterns and Errors",
            duration: "4 minutes",
            description: "Share insights from the journal entry exercise.",
            prompts: [
              "What patterns do you notice about how different account types behave?",
              "How does 'debits = credits' prevent errors before they reach investors?",
              "Which parts of the process could we automate in Excel and which require judgment?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Model the four-step process aloud before students try the builder",
          "Celebrate balanced entries and unpack mistakes immediately"
        ],
        facilitationTips: [
          "Circulate to listen for vocabulary—prompt students to say 'debit Cash' instead of 'add money'",
          "Encourage students to annotate why each account was debited or credited"
        ],
        timingMinutes: 12,
        presenterNotes: "Collect one exemplar student explanation to share in Phase 4." 
      }
    },
    {
      id: "unit01-lesson03-phase4",
      name: "Independent Practice",
      title: "Complex Transactions & Balance Verification",
      sequence: 4,
      summary:
        "Students tackle multi-account transactions independently and verify accuracy using an interactive transaction journal and trial balance sorter.",
      objectives: [
        "Record complex transactions involving multiple accounts",
        "Maintain balanced journal entries without scaffolds",
        "Use a trial balance to verify ledger accuracy"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah now faces transactions that involve several accounts at once—partial payments, credit purchases, and owner investments. The same rules apply, but discipline matters even more." 
        },
        {
          type: "paragraph",
          text: "Students prove their understanding by building transactions inside a journal tool and then verifying totals with a trial balance challenge." 
        }
      ],
      components: [
        {
          type: "transactionJournal",
          component: "TransactionJournal",
          data: {
            title: "Independent Transaction Journal",
            clientTypes: ["Tech Startup", "Service Provider", "Creative Agency"],
            maxTransactions: 12,
            showAnalytics: true,
            initialTransactions: [
              {
                id: "u01l03-journal-1",
                entryNumber: "JE001",
                date: "2025-01-10",
                description: "Design software purchase: $500 (paid $200 cash, $300 on account)",
                clientFocus: "Tech Startup",
                lines: [
                  { id: "u01l03-j1", account: "Software", accountType: "asset", debit: 500, credit: 0 },
                  { id: "u01l03-j2", account: "Cash", accountType: "asset", debit: 0, credit: 200 },
                  {
                    id: "u01l03-j3",
                    account: "Accounts Payable",
                    accountType: "liability",
                    debit: 0,
                    credit: 300
                  }
                ],
                isBalanced: true
              },
              {
                id: "u01l03-journal-2",
                entryNumber: "JE002",
                date: "2025-01-12",
                description: "Website project completed: $2,000 (received $1,200 cash, $800 on account)",
                clientFocus: "Tech Startup",
                lines: [
                  { id: "u01l03-j4", account: "Cash", accountType: "asset", debit: 1200, credit: 0 },
                  {
                    id: "u01l03-j5",
                    account: "Accounts Receivable",
                    accountType: "asset",
                    debit: 800,
                    credit: 0
                  },
                  {
                    id: "u01l03-j6",
                    account: "Service Revenue",
                    accountType: "revenue",
                    debit: 0,
                    credit: 2000
                  }
                ],
                isBalanced: true
              }
            ]
          }
        },
        {
          type: "trialBalance",
          component: "TrialBalanceSorting",
          data: {
            title: "Trial Balance: Complex Categorization",
            description: "Sort TechStart accounts and confirm debits = credits.",
            initialShuffle: true,
            accounts: [
              { name: "Cash", balance: 1200, correctSide: "debit", category: "Assets" },
              { name: "Accounts Receivable", balance: 900, correctSide: "debit", category: "Assets" },
              { name: "Prepaid Insurance", balance: 400, correctSide: "debit", category: "Assets" },
              { name: "Utilities Expense", balance: 250, correctSide: "debit", category: "Expenses" },
              { name: "Advertising Expense", balance: 250, correctSide: "debit", category: "Expenses" },
              { name: "Accounts Payable", balance: 700, correctSide: "credit", category: "Liabilities" },
              { name: "Unearned Revenue", balance: 800, correctSide: "credit", category: "Liabilities" },
              { name: "Service Revenue", balance: 1500, correctSide: "credit", category: "Revenue" }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Monitor for balanced entries and encourage students to interpret analytics",
          "Model how to use the trial balance as a self-check tool"
        ],
        facilitationTips: [
          "Ask students who finish early to create their own scenario for peers",
          "Highlight how independent verification builds investor trust"
        ],
        timingMinutes: 10,
        presenterNotes: "Collect common error patterns to address before the assessment." 
      }
    },
    {
      id: "unit01-lesson03-phase5",
      name: "Assessment",
      title: "Debit & Credit Mastery Check",
      sequence: 5,
      summary:
        "Students demonstrate mastery through a question-bank assessment and a trial balance verification aligned to investor expectations.",
      objectives: [
        "Score 80% or higher on debit/credit comprehension",
        "Sort accounts into correct normal balance categories",
        "Reflect on readiness for Excel automation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This mastery check confirms that you can apply debit and credit rules under pressure—just like a bookkeeper supporting investors and auditors." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Assessment Focus",
          body: "Review DEA LER, balanced entries, and trial balance logic before starting."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Debit & Credit Rules Assessment",
            description: "Demonstrate mastery of debit and credit logic across scenarios.",
            questionBankRef: {
              bankId: "unit01-phase5",
              filter: {
                lessonIds: ["lesson03"]
              }
            },
            allowRetry: true,
            showExplanations: true
          }
        },
        {
          type: "trialBalance",
          component: "TrialBalanceSorting",
          data: {
            title: "Trial Balance: Assessment Set",
            initialShuffle: true,
            accounts: [
              { name: "Cash", balance: 1000, correctSide: "debit", category: "Assets" },
              { name: "Inventory", balance: 1400, correctSide: "debit", category: "Assets" },
              { name: "Equipment", balance: 1600, correctSide: "debit", category: "Assets" },
              { name: "Rent Expense", balance: 500, correctSide: "debit", category: "Expenses" },
              { name: "Wages Expense", balance: 500, correctSide: "debit", category: "Expenses" },
              { name: "Accounts Payable", balance: 1000, correctSide: "credit", category: "Liabilities" },
              { name: "Notes Payable", balance: 1500, correctSide: "credit", category: "Liabilities" },
              { name: "Sales Revenue", balance: 1500, correctSide: "credit", category: "Revenue" },
              { name: "Owner's Equity", balance: 1000, correctSide: "credit", category: "Equity" }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to screenshot or note any questions they miss",
          "Reinforce that assessment data will later feed analytics dashboards"
        ],
        facilitationTips: [
          "Provide immediate feedback using question bank explanations",
          "Use the trial balance activity to debrief common mistakes"
        ],
        timingMinutes: 3,
        presenterNotes: "Celebrate growth—this is a big milestone toward investor-ready systems." 
      }
    },
    {
      id: "unit01-lesson03-phase6",
      name: "Closing",
      title: "Reflect & Preview Excel Automation",
      sequence: 6,
      summary:
        "Students capture CAP reflections on mastering debit/credit logic and preview how the rules convert into Excel automation for Lesson 4.",
      objectives: [
        "Articulate personal growth tied to courage, adaptability, and persistence",
        "Connect manual mastery to future Excel formulas",
        "Preview conditional formatting and SUMIF as automation tools"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "The double-entry system now feels natural. Students realize that the same logic can be embedded into Excel to create self-auditing ledgers." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Looking Ahead",
          body: "Next lesson transforms DEA LER rules into Excel tables, SUMIF formulas, and conditional formatting that enforce balance automatically."
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "CAP Reflection: Mastering Debit & Credit",
            unitTitle: "Unit 1: Smart Ledger Launch",
            journalingFocus: "Capture how systematic thinking builds investor trust.",
            entries: [
              {
                id: "u01l03-reflection-courage",
                category: "courage",
                prompt:
                  "What was the most challenging part of learning debit and credit rules, and how did you push through initial confusion or frustration?",
                placeholder: "Think about the first time DEA LER finally clicked..."
              },
              {
                id: "u01l03-reflection-adaptability",
                category: "adaptability",
                prompt:
                  "How did you adjust your learning approach when T-accounts or journal entries didn't make sense at first?",
                placeholder: "Consider note-taking changes, visual cues, or peer tips..."
              },
              {
                id: "u01l03-reflection-persistence",
                category: "persistence",
                prompt:
                  "Describe a moment when you wanted to give up on balancing entries. What motivated you to keep practicing until it made sense?",
                placeholder: "Recall the breakthrough that showed you the system works..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Celebrate mindset growth alongside technical mastery",
          "Preview Excel features students will automate next lesson"
        ],
        facilitationTips: [
          "Invite students to share one strategy that helped them memorize DEA LER",
          "Connect reflections to CAP competencies explicitly"
        ],
        timingMinutes: 2,
        presenterNotes: "Encourage students to bring their best reflections into the investor pitch later in the unit." 
      }
    }
  ]
}
