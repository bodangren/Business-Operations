import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson02Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mds5t7qqo8d6q2al4v",
    lessonNumber: 2,
    title: "Core Concepts: The Accounting Equation",
    drivingQuestion:
      "How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?",
    durationMinutes: 45,
    focus: "Build complete understanding of the accounting equation and apply it to TechStart Solutions transactions",
    slug: "unit01-lesson02"
  },
  sharedResources: [
    {
      id: "techstart-equation-slide",
      kind: "slide",
      title: "Accounting Equation Visual Anchor",
      description: "Class slide illustrating Assets = Liabilities + Equity with TechStart examples",
      path: "/assets/slides/unit01/accounting-equation.png"
    }
  ],
  teacherGuidance: {
    overview:
      "Guide students from conceptual understanding of the accounting equation to independent analysis of TechStart transactions, reinforcing investor-facing language throughout.",
    pacingHighlights: [
      "Hook scenario + quick comprehension check (7 minutes)",
      "Direct instruction with vocabulary practice (12 minutes)",
      "Guided categorization + partner discussion (10 minutes)",
      "Independent application with trial balance sorting (10 minutes)",
      "Formative assessment pull from question bank (4 minutes)",
      "Closing reflection + next-lesson preview (2 minutes)"
    ],
    assessments: [
      "Guided comprehension checks in phases 1-4",
      "Trial Balance Sorting mastery check",
      "Phase 5 question bank assessment",
      "Reflection journal prompts tied to CAP competencies"
    ]
  },
  phases: [
    {
      id: "unit01-lesson02-phase1",
      name: "Hook",
      title: "The Challenge of Perfect Balance",
      sequence: 1,
      summary:
        "Students examine Sarah's early TechStart numbers and confront the need for a universal rule that keeps every business transaction balanced.",
      objectives: [
        "Connect Sarah's TechStart revenue and expenses to the idea of balance",
        "Predict what information investors need to confirm business health",
        "Prime students for the accounting equation as the solution"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Imagine Sarah looking at her first three successful projects: $2,200 from the bakery website, $650 from the pet grooming social media setup, and $1,100 from the dental office SEO package. That's $3,950 in total revenue, and she's proud of the momentum." 
        },
        {
          type: "paragraph",
          text: "But success brings obligations. She spends $500 each month on software, invested $1,200 in a new computer, and still owes $300 on a printer. The notebook pages she relied on last week can no longer keep up with these moving pieces." 
        },
        {
          type: "paragraph",
          text: "Sarah keeps hearing investors use one phrase over and over: clean books. She wonders how to prove that every dollar she earns, spends, or owes fits into a system that balances every time." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Why Investors Care",
          body: "Investors trust entrepreneurs who can show precise balance between what the business owns, owes, and is worth. They want evidence that every transaction keeps the company on solid ground.",
          bullets: [
            "Balance reveals if TechStart is gaining or burning value",
            "Accurate records prevent bookkeeping emergencies at tax time",
            "Investor confidence depends on transparent, organized ledgers"
          ]
        },
        {
          type: "callout",
          intent: "question",
          title: "Think About It",
          body: "What would convince you that a growing business like TechStart is managing money responsibly?",
          bullets: [
            "What information would you need beyond total income?",
            "How would missing details affect your trust?",
            "Why might notebooks break down as a tracking method?"
          ]
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Engagement Check: Understanding Business Balance",
            questions: [
              {
                id: "u01l02-hook-q1",
                prompt:
                  "Sarah's TechStart Solutions earned $3,950 from three clients. If she spent $500 on software subscriptions, what would you need to know to determine if her business is financially healthy?",
                correctAnswer: "Her income, expenses, debts, and what she owns",
                distractors: ["Only her total income", "Just her expenses", "Only what she owes to others"],
                explanation:
                  "Financial health requires the complete picture: what the business owns (assets), owes (liabilities), and the owner's stake (equity)."
              },
              {
                id: "u01l02-hook-q2",
                prompt:
                  "When Sarah receives a $2,200 payment from the bakery client, her business becomes more valuable. Where does this increased value show up?",
                correctAnswer: "In both her cash and her ownership stake",
                distractors: ["Only in her cash", "Only in her debts", "It doesn't affect business value"],
                explanation:
                  "Cash (assets) increases and Sarah's ownership stake (equity) increases by the same amount, keeping the system balanced."
              },
              {
                id: "u01l02-hook-q3",
                prompt: "What does Sarah mean by 'clean books' and why is it important?",
                correctAnswer: "A trustworthy, organized financial system for decision-making and investor confidence",
                distractors: ["Books that are physically clean and organized", "Books about cleaning", "Financial records that only show profits"],
                explanation:
                  "Clean books are organized, accurate financial records that build confidence with investors, accountants, and Sarah herself."
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Lead students to articulate the missing information beyond revenue totals",
          "Use student responses to foreshadow assets, liabilities, and equity",
          "Capture phrases that connect balance to investor trust"
        ],
        facilitationTips: [
          "Ask follow-up questions when students mention cash or expenses to surface the need for the full equation",
          "Prompt students to consider how notebook tracking might fail during tax season"
        ],
        timingMinutes: 7,
        presenterNotes: "Keep the tone urgent but optimistic—Sarah is ready for a professional system." 
      }
    },
    {
      id: "unit01-lesson02-phase2",
      name: "Introduction",
      title: "Discovering the Universal Accounting Equation",
      sequence: 2,
      summary:
        "Students learn the vocabulary and structure of Assets = Liabilities + Equity and connect each category to TechStart Solutions examples.",
      objectives: [
        "Define assets, liabilities, and equity at an 8th-grade reading level",
        "Explain why the accounting equation must stay balanced",
        "Apply the equation to TechStart's real numbers"
      ],
      narrative: [
        {
          type: "heading",
          level: 3,
          text: "The Universal Rule"
        },
        {
          type: "paragraph",
          text: "Every business—from a neighborhood food truck to a statewide accounting firm—operates under one unbreakable rule. It's a rule of perfect balance, and it is the foundation of every ledger, report, and investor presentation." 
        },
        {
          type: "paragraph",
          text: "That rule is the accounting equation: Assets = Liabilities + Equity. Think of it like a scale that must always balance. Every transaction in a business will move at least two sides of the scale, but the totals will remain equal." 
        },
        {
          type: "heading",
          level: 3,
          text: "Breaking Down Each Side"
        },
        {
          type: "paragraph",
          text: "Assets are the valuable things the business owns—cash, computers, and amounts clients still owe. Liabilities are the debts and promises to pay others—loans, unpaid bills, or subscriptions. Equity is the owner's stake in the business—the value left after paying debts." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "TechStart Examples",
          body: "Tie each definition back to Sarah's business so the language stays concrete.",
          bullets: [
            "Assets: $4,500 in cash, the $2,000 computer, $800 owed by clients",
            "Liabilities: $300 printer payment due, $1,000 bank loan",
            "Equity: Sarah's ownership stake after balancing the equation"
          ]
        },
        {
          type: "paragraph",
          text: "Every time Sarah earns revenue or pays a bill, the equation still balances. When the bakery pays $2,200, assets go up and so does equity. When she pays the $300 printer bill, cash goes down and liabilities drop together."
        },
        {
          type: "callout",
          intent: "story",
          title: "Real Transaction Walkthrough",
          body:
            "When the bakery client pays $2,200, Cash (assets) increases and Owner's Equity increases. The left side of the equation rises by $2,200 and so does the right. When Sarah pays $300 on the printer, Cash decreases and the Printer Payable liability disappears—both sides drop together, keeping balance."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Understanding the Accounting Equation",
            questions: [
              {
                id: "u01l02-intro-q1",
                prompt:
                  "According to the accounting equation, if TechStart Solutions has $5,000 in assets and $1,500 in liabilities, what is Sarah's equity?",
                correctAnswer: "$3,500",
                distractors: ["$6,500", "$5,000", "$1,500"],
                explanation: "Equity = Assets - Liabilities → $5,000 - $1,500 = $3,500."
              },
              {
                id: "u01l02-intro-q2",
                prompt: "What happens to the accounting equation when Sarah receives $2,200 cash from the bakery client?",
                correctAnswer: "Both assets and equity increase by $2,200",
                distractors: ["Only assets increase", "Assets increase, liabilities decrease", "The equation goes out of balance"],
                explanation:
                  "Revenue raises assets (cash) and equity by the same amount, keeping balance."
              },
              {
                id: "u01l02-intro-q3",
                prompt: "Which statement best describes why the accounting equation is universal?",
                correctAnswer: "Every business, regardless of size, must maintain this mathematical balance",
                distractors: ["It only applies to technology startups", "It's only required for public companies", "It's optional for small businesses"],
                explanation:
                  "The equation is the foundation of double-entry bookkeeping for every business structure."
              }
            ],
            showExplanations: true
          }
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Vocabulary Practice",
            items: [
              {
                id: "u01l02-vocab1",
                text: "Sarah's computer and cash in the bank are examples of business {blank} because the company owns them.",
                answer: "assets",
                hint: "These are valuable resources that belong to TechStart"
              },
              {
                id: "u01l02-vocab2",
                text: "The $300 Sarah owes on her printer is a {blank} because it represents money the business must pay to others.",
                answer: "liability",
                hint: "Debts and obligations fall into this category"
              },
              {
                id: "u01l02-vocab3",
                text: "Sarah's ownership stake in TechStart Solutions is called her {blank} in the business.",
                answer: "equity",
                hint: "Assets minus liabilities leaves this value for the owner"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Use visuals to anchor the equation in student memory",
          "Call on students to restate definitions in their own words",
          "Reinforce that every transaction touches at least two parts of the equation"
        ],
        facilitationTips: [
          "Display a class anchor chart that stays up for future lessons",
          "Invite volunteers to connect each TechStart example to the equation"
        ],
        timingMinutes: 12,
        presenterNotes: "Encourage students to narrate the movement of values aloud—left side, right side." 
      }
    },
    {
      id: "unit01-lesson02-phase3",
      name: "Guided Practice",
      title: "Sorting TechStart Transactions Into the Equation",
      sequence: 3,
      summary:
        "Students apply the accounting equation by categorizing TechStart accounts, collaborating on scenario discussions, and checking their thinking with guided questions.",
      objectives: [
        "Sort TechStart accounts into assets, liabilities, and equity",
        "Explain how common transactions affect both sides of the equation",
        "Practice communicating accounting logic with peers"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Now that the class understands the definition of each component, it's time to practice. Sarah's ledger contains accounts that must live on the correct side of the equation."
        },
        {
          type: "paragraph",
          text: "Students drag and drop TechStart accounts into the correct categories and discuss why each placement keeps the business balanced." 
        },
        {
          type: "callout",
          intent: "question",
          title: "Turn and Talk Prompts",
          body: "Invite quick partner conversations that force students to defend their reasoning.",
          bullets: [
            "When Sarah receives $1,100 from the dental office, what changes and why?",
            "If she buys $200 of design software on credit, what happens to liabilities and equity?",
            "How would you explain the idea of perfect balance to someone new to accounting?"
          ]
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Key Insight",
          body:
            "Every transaction affects at least two components of the equation, but the totals remain equal. This double-entry structure is how accountants maintain trust and accuracy."
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "AccountCategorization",
          data: {
            preset: "techstart-equation-practice"
          },
          description: "Students drag TechStart accounts into the correct equation category to build muscle memory."
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Guided Practice Check",
            questions: [
              {
                id: "u01l02-guided-q1",
                prompt: "Sarah buys a $1,200 computer and pays cash. How does this transaction affect the accounting equation?",
                correctAnswer: "One asset decreases by $1,200, another asset increases by $1,200",
                distractors: [
                  "Assets increase by $1,200, equation goes out of balance",
                  "Liabilities increase by $1,200",
                  "Equity decreases by $1,200"
                ],
                explanation:
                  "Cash (asset) goes down, Equipment (asset) goes up. Total assets stay the same, so the equation stays balanced."
              },
              {
                id: "u01l02-guided-q2",
                prompt: "If Sarah takes out a $5,000 business loan and deposits it into her business account, what happens?",
                correctAnswer: "Assets increase by $5,000 and liabilities increase by $5,000",
                distractors: ["Only assets increase", "Equity increases by $5,000", "The equation becomes unbalanced"],
                explanation: "Cash (assets) increases by $5,000, and Bank Loan Payable (liabilities) increases by $5,000."
              }
            ],
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Listen for student language that shows understanding of increases/decreases",
          "Encourage precise vocabulary: 'Assets increase' instead of 'Cash goes up'",
          "Normalize mistakes as opportunities to revisit definitions"
        ],
        facilitationTips: [
          "During the drag-and-drop activity, pause to spotlight strong reasoning",
          "Use colored magnets or sticky notes on the board for a physical version if needed"
        ],
        timingMinutes: 10,
        presenterNotes:
          "Ask groups to articulate why every transaction touches at least two accounts—this sets up debit/credit language for Lesson 3." 
      }
    },
    {
      id: "unit01-lesson02-phase4",
      name: "Independent Practice",
      title: "Applying the Equation to Complex Scenarios",
      sequence: 4,
      summary:
        "Students analyze TechStart's month-end position, manipulate a trial balance sorting activity, and solve multi-step equation problems on their own.",
      objectives: [
        "Calculate missing components of the accounting equation independently",
        "Use a trial balance sorting tool to verify balance",
        "Explain reasoning for each calculation in student-friendly language"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Put your understanding to the test. You'll analyze TechStart's current financial position, sort accounts into a trial balance, and prove the equation holds in every scenario." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Sarah's Month-End Snapshot",
          body:
            "Assets: $4,500 cash, $2,000 computer, $800 accounts receivable. Liabilities: $1,000 bank loan, $300 printer debt. Equity fills in the balance at $6,000."
        },
        {
          type: "paragraph",
          text: "After reviewing the snapshot, students tackle independent questions that mirror investor-style analysis." 
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "TrialBalanceSorting",
          data: {
            title: "Trial Balance: Intro Practice",
            accounts: [
              { name: "Cash", balance: 3000, correctSide: "debit", category: "Assets" },
              { name: "Accounts Receivable", balance: 1000, correctSide: "debit", category: "Assets" },
              { name: "Supplies", balance: 500, correctSide: "debit", category: "Assets" },
              { name: "Rent Expense", balance: 800, correctSide: "debit", category: "Expenses" },
              { name: "Salary Expense", balance: 700, correctSide: "debit", category: "Expenses" },
              { name: "Accounts Payable", balance: 1500, correctSide: "credit", category: "Liabilities" },
              { name: "Notes Payable", balance: 1000, correctSide: "credit", category: "Liabilities" },
              { name: "Owner's Equity", balance: 2000, correctSide: "credit", category: "Equity" },
              { name: "Service Revenue", balance: 1500, correctSide: "credit", category: "Revenue" }
            ],
            initialShuffle: true
          },
          description: "Students prove debit and credit totals match by sorting TechStart accounts into the correct columns."
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Independent Practice Problems",
            questions: [
              {
                id: "u01l02-independent-q1",
                prompt:
                  "Sarah starts TechStart with $3,000 cash, a $2,000 computer, and a $1,000 loan. Using the accounting equation, what is her initial equity?",
                correctAnswer: "$4,000",
                distractors: ["$6,000", "$3,000", "$2,000"],
                explanation: "$5,000 in assets minus $1,000 in liabilities leaves $4,000 in equity."
              },
              {
                id: "u01l02-independent-q2",
                prompt:
                  "After completing three projects, Sarah's business has $4,500 cash, $2,000 computer, $800 receivables, $300 printer debt, and $1,000 loan. What is her current equity?",
                correctAnswer: "$6,000",
                distractors: ["$7,300", "$5,000", "$4,200"],
                explanation: "Assets total $7,300, liabilities total $1,300, so equity equals $6,000."
              },
              {
                id: "u01l02-independent-q3",
                prompt: "Sarah pays off the $300 printer debt with cash. What happens to the accounting equation?",
                correctAnswer: "Assets decrease $300, Liabilities decrease $300, Equity unchanged",
                distractors: [
                  "Only liabilities decrease by $300",
                  "Assets decrease $300, Equity increases $300",
                  "The equation goes out of balance"
                ],
                explanation:
                  "Cash drops by $300, liability drops by $300, keeping the balance intact without changing equity."
              }
            ],
            showExplanations: true
          }
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Complex Scenario Analysis",
            items: [
              {
                id: "u01l02-scenario1",
                text: "When Sarah borrows $5,000 from the bank, her {blank} increase because she has more cash.",
                answer: "assets",
                hint: "Cash is something the business owns"
              },
              {
                id: "u01l02-scenario2",
                text: "When Sarah takes out a loan, her {blank} increase because she now owes money to the bank.",
                answer: "liabilities",
                hint: "Loans create obligations to pay later"
              },
              {
                id: "u01l02-scenario3",
                text: "If Sarah's total assets are $8,000 and her total liabilities are $2,500, then her equity must be {blank} to keep the accounting equation balanced.",
                answer: "$5,500",
                hint: "Use Equity = Assets - Liabilities"
              },
              {
                id: "u01l02-scenario4",
                text: "The accounting equation shows that equity equals assets {blank} liabilities.",
                answer: "minus",
                hint: "Rearrange Assets = Liabilities + Equity"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Monitor students as they manipulate the trial balance tool",
          "Require students to justify each independent answer with equation logic",
          "Celebrate students who notice patterns in increases/decreases"
        ],
        facilitationTips: [
          "Circle the room to spot-check student calculations",
          "Encourage students who finish early to create their own scenarios to swap with peers"
        ],
        timingMinutes: 10,
        presenterNotes: "Frame the activity as investor prep—students should be ready to answer 'How do you know?'" 
      }
    },
    {
      id: "unit01-lesson02-phase5",
      name: "Assessment",
      title: "Accounting Equation Mastery Check",
      sequence: 5,
      summary:
        "Students complete a question-bank-driven assessment focused on equation application, reinforcing the investor-ready language developed throughout the lesson.",
      objectives: [
        "Demonstrate mastery of the accounting equation across multiple scenarios",
        "Explain reasoning for equation-based calculations",
        "Connect mathematical balance to investor expectations"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This mastery check measures how confidently you can apply the accounting equation. Take your time and show your reasoning." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Assessment Focus",
          body: "Focus students on strategic thinking rather than speed.",
          bullets: [
            "Understanding and applying the formula Assets = Liabilities + Equity",
            "Identifying categories correctly in context",
            "Calculating missing values with accuracy",
            "Explaining how each transaction keeps balance",
            "Describing why investors demand clean equations"
          ]
        },
        {
          type: "paragraph",
          text: "After scoring, reflect on how these skills support Sarah's mission to impress investors." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Accounting Equation Mastery Assessment",
            questionBankRef: {
              bankId: "unit01-phase5",
              filter: {
                lessonIds: ["lesson02"]
              }
            },
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Emphasize careful reading of each scenario",
          "Invite students to share one insight with the class post-assessment"
        ],
        facilitationTips: [
          "Use the auto-generated explanations for quick re-teach moments",
          "Log common misconceptions in teacher notes for future reference"
        ],
        timingMinutes: 4,
        presenterNotes: "Remind students this bank feeds analytics—encourage their best effort." 
      }
    },
    {
      id: "unit01-lesson02-phase6",
      name: "Closing",
      title: "Reflecting on the Universal Rule",
      sequence: 6,
      summary:
        "Students synthesize their learning, document reflections tied to CAP competencies, and preview how debit/credit language builds on the equation.",
      objectives: [
        "Articulate the accounting equation in student-friendly language",
        "Connect mastery of balance to investor confidence",
        "Preview how debit and credit rules extend the equation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Congratulations—you now own the universal rule that keeps every business honest. The accounting equation is the grammar of financial storytelling." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Key Achievement",
          body:
            "Students can analyze any business transaction and prove that Assets = Liabilities + Equity holds true, no matter how complex."
        },
        {
          type: "paragraph",
          text: "Take a moment to reflect on what you learned, how it helps Sarah, and where you see this equation in your own life." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Coming Next",
          body: "Lesson 3 introduces debit and credit rules—the language accountants use to record the two-sided nature of every transaction."
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Lesson Reflection: The Universal Rule",
            unitTitle: "Unit 1: Smart Ledger Launch",
            journalingFocus: "Connect accounting balance to investor trust",
            entries: [
              {
                id: "u01l02-reflection-understanding",
                category: "courage",
                prompt: "Explain the accounting equation in your own words. Why does it have to stay balanced?",
                placeholder: "Consider how assets, liabilities, and equity interact..."
              },
              {
                id: "u01l02-reflection-connection",
                category: "adaptability",
                prompt: "How does understanding this equation help Sarah give investors confidence in TechStart?",
                placeholder: "Investors want proof that systems are organized and reliable..."
              },
              {
                id: "u01l02-reflection-application",
                category: "persistence",
                prompt: "Describe a situation in your own life where you can see this equation at work.",
                placeholder: "Think about what you own, what you owe, and what remains..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to celebrate mastering a professional standard",
          "Preview Lesson 3 to maintain narrative momentum"
        ],
        facilitationTips: [
          "Invite 1-2 volunteers to share reflections that highlight investor language",
          "Prompt students to identify where they might use this equation outside class"
        ],
        timingMinutes: 2,
        presenterNotes: "Tie the reflection back to CAP competencies: courage to speak the language of investors, adaptability to new systems, persistence in balancing every transaction." 
      }
    }
  ]
}
