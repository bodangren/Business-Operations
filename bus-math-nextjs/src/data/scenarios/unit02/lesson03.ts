import { LessonScenario } from "@/types/lesson-scenarios"

export const unit02Lesson03Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrhkhm79v8qau43696",
    unitTitle: "Unit 2: Month-End Wizard",
    lessonId: "mds5v4u1inmd8zoj1fi",
    lessonNumber: 3,
    title: "Guided Practice: Four Scenarios into Ledger",
    drivingQuestion: "How do we turn GAAP timing rules into consistent journal entries Sarah can automate?",
    durationMinutes: 45,
    focus:
      "Coach students through recording TechStart's four core month-end adjustments so the logic is ready for automation.",
    slug: "unit02-lesson03"
  },
  sharedResources: [
    {
      id: "unit02-lesson03-adjusting-dataset",
      kind: "dataset",
      title: "TechStart Month-End Adjusting Entries",
      description:
        "CSV of March transactions flagged for accrual, deferral, depreciation, and closing review during guided and independent practice.",
      path: "/resources/unit02-month-end-advanced-practice.csv"
    }
  ],
  teacherGuidance: {
    overview:
      "Students apply adjusting-entry theory to TechStart's March close, practice building balanced journal entries, and prepare to translate their logic into automation for the Month-End Wizard.",
    pacingHighlights: [
      "Hook scenario board + comprehension check (6 minutes)",
      "GAAP principle review with fill-in + debrief (10 minutes)",
      "Guided journal entry construction for all four adjustments (14 minutes)",
      "Independent adjusting journal lab + peer coaching (8 minutes)",
      "Question bank mastery pull (5 minutes)",
      "Reflection + automation preview (2 minutes)"
    ],
    assessments: [
      "Phase 1 comprehension check diagnostics",
      "Phase 3 journal entry builds for four adjustment types",
      "Phase 5 Unit 02 lesson 03 question bank quiz"
    ]
  },
  phases: [
    {
      id: "unit02-lesson03-phase1",
      name: "Hook",
      title: "Four Adjustments That Changed Sarah's Close",
      sequence: 1,
      summary:
        "Students revisit TechStart's March chaos, identify which transactions demand adjusting entries, and connect the stakes to investor-ready reporting.",
      objectives: [
        "Spot the four adjustment triggers inside Sarah's March ledger",
        "Explain why timing rules matter more than cash timing",
        "Adopt the mindset of an automation designer who needs perfect journal logic"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "March looked like a breakthrough for TechStart Solutions. Sarah celebrated a steady retainer, three new project wins, and a shiny Dell workstation. Then March 31st arrived and the celebration turned into a spreadsheet triage." 
        },
        {
          type: "paragraph",
          text: "Four transactions refused to behave. Revenue was earned before invoices went out. Cash arrived long before work was done. The new computer would power projects for years, not just March. And every revenue and expense account still carried a balance when April began." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Investor Reality",
          body: "Sarah's mentors and future lenders demand statements that follow GAAP timing. Adjusting entries protect credibility, pricing power, and the trust that fuels growth.",
          bullets: [
            "Accruals prove Sarah knows when revenue is truly earned",
            "Deferrals signal she will deliver services she already collected cash for",
            "Depreciation shows she understands the long-term value of her tools",
            "Closing entries reset the scoreboard so April performance stands on its own"
          ]
        },
        {
          type: "paragraph",
          text: "Today's mission is simple: translate each scenario into the exact journal entry an automated Month-End Wizard would need to post without errors." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Identify the Adjustment Triggers",
            description: "Confirm you can match TechStart's March events to the correct adjustment type.",
            allowRetry: true,
            showExplanations: true,
            questions: [
              {
                id: "u02l03-hook-q1",
                prompt: "Why must Sarah record revenue on March 31 even if the invoice goes out on April 2?",
                correctAnswer: "GAAP requires revenue recognition when work is performed, not when the invoice is sent",
                distractors: [
                  "Invoices create revenue only after payment clears",
                  "Recording revenue early reduces taxable income",
                  "April statements cannot reference March activity"
                ],
                explanation:
                  "Accrual accounting matches revenue to the period the work was completed. The receivable documents the promise to collect cash later."
              },
              {
                id: "u02l03-hook-q2",
                prompt: "How should Sarah treat the $2,400 retainer collected on March 10 for eight months of social media support?",
                correctAnswer: "Record deferred revenue and recognize it as service is delivered each month",
                distractors: [
                  "Recognize the full $2,400 as March revenue",
                  "Record it as an expense until the client approves",
                  "Ignore the cash until the contract ends"
                ],
                explanation:
                  "Deferred revenue tracks services owed to the client. Each month Sarah will reduce the liability and recognize earned revenue."
              },
              {
                id: "u02l03-hook-q3",
                prompt: "Why can't Sarah expense the entire $3,000 workstation in March?",
                correctAnswer: "The computer provides value for several years, so depreciation spreads the cost over its useful life",
                distractors: [
                  "Equipment cannot be expensed under GAAP",
                  "She financed the computer instead of paying cash",
                  "Depreciation only applies to manufacturing equipment"
                ],
                explanation:
                  "Straight-line depreciation matches a portion of the asset's cost to each month the business benefits from it."
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Turn and Talk: Map the Four Challenges",
            duration: "3 minutes",
            description:
              "Use the scenario board to connect each ledger problem to the adjustment type Sarah needs to automate.",
            prompts: [
              "Which scenario feels most urgent to fix and why?",
              "Where could a manual mistake destroy investor trust?",
              "How would you explain this adjustment to a teammate who only tracks cash?",
              "What data would a computer need to detect this situation automatically?"
            ]
          }
        }
      ],
      datasets: [
        {
          id: "unit02-lesson03-adjusting-dataset",
          kind: "dataset",
          title: "TechStart Month-End Adjusting Entries",
          path: "/resources/unit02-month-end-advanced-practice.csv"
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Keep the four scenarios visible—students should reference them during later phases",
          "Emphasize investor expectations and automation goals together"
        ],
        facilitationTips: [
          "Ask students to label each scenario with the adjustment type before starting the check",
          "Collect common misconceptions to revisit during guided practice"
        ],
        timingMinutes: 7,
        presenterNotes: "Set an urgent tone: the same logic students build today must power Sarah's automation tomorrow."
      }
    },
    {
      id: "unit02-lesson03-phase2",
      name: "Introduction",
      title: "Translate GAAP Rules Into Adjusting Logic",
      sequence: 2,
      summary:
        "Students review matching, accrual, deferral, depreciation, and closing concepts, ensuring vocabulary and formulas are locked in before guided practice.",
      objectives: [
        "Reinforce GAAP principles governing month-end adjustments",
        "Explain the meaning behind each adjustment type in plain language",
        "Calculate straight-line depreciation using TechStart's data"
      ],
      narrative: [
        {
          type: "heading",
          level: 3,
          text: "GAAP Gives Automation Its Rules"
        },
        {
          type: "paragraph",
          text: "Marcus reminded Sarah that automation only works when the human logic is perfect. GAAP principles are those rules. They tell software when to recognize revenue, how to match expenses, and how to reset the books for a new month." 
        },
        {
          type: "paragraph",
          text: "Students now translate the language of accountants into checklists that any system can follow. The more precise the wording, the easier it will be to automate later." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Formula Spotlight",
          body: "Straight-Line Depreciation = (Cost − Salvage Value) ÷ Useful Life. Monthly Depreciation = Annual Depreciation ÷ 12."
        },
        {
          type: "callout",
          intent: "story",
          title: "Sarah's Mentor Advice",
          body: "\"Every adjusting entry has a story,\" Marcus says. \"If you can tell the story in normal words, you can teach a computer to make the entry for you.\""
        }
      ],
      components: [
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Vocabulary: Say the Rule Clearly",
            items: [
              {
                id: "u02l03-fitb-1",
                text: "The {blank} principle matches revenues with the expenses that helped create them.",
                answer: "matching",
                hint: "Without it, profits jump around based on cash timing."
              },
              {
                id: "u02l03-fitb-2",
                text: "Under {blank} accounting, transactions are recorded when they happen, not when cash moves.",
                answer: "accrual",
                hint: "TechStart adopted this method to satisfy investors."
              },
              {
                id: "u02l03-fitb-3",
                text: "Revenue earned but not yet invoiced is called {blank} revenue.",
                answer: "accrued",
                hint: "Think: work is done, invoice still pending."
              },
              {
                id: "u02l03-fitb-4",
                text: "Cash collected before work is delivered becomes {blank} revenue, a liability.",
                answer: "deferred",
                hint: "You owe services back to the client.",
                alternativeAnswers: ["unearned"]
              },
              {
                id: "u02l03-fitb-5",
                text: "The {blank} method spreads the cost of a long-term asset evenly across its life.",
                answer: "straight-line",
                hint: "TechStart uses it for the new workstation."
              },
              {
                id: "u02l03-fitb-6",
                text: "Closing entries reset {blank} accounts so the next month starts at zero.",
                answer: "temporary",
                hint: "Temporary accounts track revenue and expenses for a single period.",
                alternativeAnswers: ["nominal"]
              }
            ]
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Concept Check: Explain the Why",
            allowRetry: true,
            showExplanations: true,
            questions: [
              {
                id: "u02l03-intro-q1",
                prompt: "What is the main reason GAAP enforces the matching principle?",
                correctAnswer: "It shows a fair picture of profitability by pairing revenues with the expenses that produced them",
                distractors: [
                  "It guarantees every business earns a profit",
                  "It delays expense recognition until cash is paid",
                  "It simplifies tax preparation for startups"
                ],
                explanation:
                  "Matching ensures investors can compare performance across time without cash timing distorting the results."
              },
              {
                id: "u02l03-intro-q2",
                prompt: "How does deferred revenue protect TechStart's reputation?",
                correctAnswer: "It proves Sarah owes future work and keeps her from overstating revenue",
                distractors: [
                  "It increases cash flow immediately",
                  "It converts liabilities into assets automatically",
                  "It hides unearned income from investors"
                ],
                explanation:
                  "Deferred revenue keeps promises honest. Investors see that Sarah won't count income before delivering value."
              },
              {
                id: "u02l03-intro-q3",
                prompt: "TechStart bought a $3,000 computer with $300 salvage value and 3-year life. What is March depreciation?",
                correctAnswer: "$75",
                distractors: ["$83.33", "$90", "$250"],
                explanation:
                  "Annual depreciation is ($3,000 − $300) ÷ 3 = $900. Monthly depreciation equals $900 ÷ 12 = $75."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Push students to restate each rule in plain language",
          "Highlight how formula precision feeds automation logic"
        ],
        facilitationTips: [
          "Collect alternate phrasing from students for future system prompts",
          "Have students underline clues in each fill-in sentence before revealing answers"
        ],
        timingMinutes: 12
      }
    },
    {
      id: "unit02-lesson03-phase3",
      name: "Guided Practice",
      title: "Build the Four Adjusting Entries Together",
      sequence: 3,
      summary:
        "Students work with the teacher to construct each adjusting entry, verifying debits equal credits and capturing the narrative behind every line.",
      objectives: [
        "Draft balanced journal entries for accrued revenue, deferred revenue, depreciation, and closing",
        "Explain the reasoning for each debit and credit chosen",
        "Document the logic steps needed for later automation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Students now open TechStart's March ledger and tackle each adjustment with structured steps: identify the story, label the accounts, choose debit or credit, record the amount, and justify the logic." 
        },
        {
          type: "paragraph",
          text: "The class narrates aloud. By the end, everyone has four clean journal entries and the blueprint a Month-End Wizard will follow." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Guided Routine",
          body: "1) What happened? 2) Which accounts are impacted? 3) Does each account increase or decrease? 4) Which side records that change? 5) Does the entry balance?"
        }
      ],
      components: [
        {
          type: "journalEntry",
          component: "JournalEntryBuilding",
          data: {
            title: "Guided Adjusting Entries",
            description: "Follow the prompts to balance each March adjustment for TechStart.",
            availableAccounts: [
              "Cash",
              "Accounts Receivable",
              "Deferred Revenue",
              "Service Revenue",
              "Depreciation Expense",
              "Accumulated Depreciation - Equipment",
              "Rent Expense",
              "Software Expense",
              "Wages Expense",
              "Income Summary",
              "Owner's Capital"
            ],
            scenarios: [
              {
                id: "u02l03-je-1",
                description:
                  "March 28: Sarah completed $800 of website design work. The invoice will be sent on April 2. Record the accrual on March 31.",
                correctEntry: [
                  { account: "Accounts Receivable", debit: 800, credit: 0 },
                  { account: "Service Revenue", debit: 0, credit: 800 }
                ],
                explanation:
                  "Revenue was earned in March. Accrue the receivable to document the client's unpaid balance and recognize revenue now."
              },
              {
                id: "u02l03-je-2",
                description:
                  "March 10: TechStart collected $2,400 cash for eight months of social media management. Recognize the portion earned by March 31 (three weeks of service).",
                correctEntry: [
                  { account: "Deferred Revenue", debit: 200, credit: 0 },
                  { account: "Service Revenue", debit: 0, credit: 200 }
                ],
                explanation:
                  "$2,400 ÷ 8 months = $300 per month. Three weeks of work is roughly two-thirds of a month, so Sarah earned $200 in March and still owes the rest."
              },
              {
                id: "u02l03-je-3",
                description:
                  "March 15: Sarah purchased a $3,000 workstation with $300 salvage value and 3-year life. Record one month of straight-line depreciation.",
                correctEntry: [
                  { account: "Depreciation Expense", debit: 75, credit: 0 },
                  { account: "Accumulated Depreciation - Equipment", debit: 0, credit: 75 }
                ],
                explanation:
                  "Annual depreciation: ($3,000 − $300) ÷ 3 = $900. Monthly depreciation equals $75."
              },
              {
                id: "u02l03-je-4",
                description:
                  "March 31: Close TechStart's revenue and expense accounts. Service Revenue shows $5,400 credit. Expenses: Rent $1,200, Software $450, Wages $2,100. Prepare the closing entries to transfer balances into Income Summary.",
                correctEntry: [
                  { account: "Service Revenue", debit: 5400, credit: 0 },
                  { account: "Income Summary", debit: 0, credit: 5400 },
                  { account: "Income Summary", debit: 3750, credit: 0 },
                  { account: "Rent Expense", debit: 0, credit: 1200 },
                  { account: "Software Expense", debit: 0, credit: 450 },
                  { account: "Wages Expense", debit: 0, credit: 2100 }
                ],
                explanation:
                  "First entry closes revenue into Income Summary. Second entry transfers expenses into Income Summary. A follow-up entry will move net income ($1,650) to Owner's Capital."
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Debrief: Teach the Logic Back",
            duration: "4 minutes",
            description: "Explain one adjusting entry to a partner as if you were programming it into Excel.",
            prompts: [
              "What conditions trigger this adjustment?",
              "Which accounts do you check first?",
              "How do you confirm the amount is correct?",
              "Where could a formula catch mistakes before they post?"
            ]
          }
        }
      ],
      datasets: [
        {
          id: "unit02-lesson03-adjusting-dataset",
          kind: "dataset",
          title: "TechStart Month-End Adjusting Entries",
          path: "/resources/unit02-month-end-advanced-practice.csv"
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Narrate the five-step adjusting routine before students click anything",
          "Have students justify each debit/credit verbally before submitting"
        ],
        facilitationTips: [
          "Model how to document logic for future automation scripts",
          "Encourage students who finish early to peer-review partner entries"
        ],
        timingMinutes: 14
      }
    },
    {
      id: "unit02-lesson03-phase4",
      name: "Independent Practice",
      title: "Own the Adjustments in Your Journal",
      sequence: 4,
      summary:
        "Students log into the transaction journal tool, craft their own adjusting entries, and use analytics to confirm every entry balances.",
      objectives: [
        "Create adjusting entries independently without teacher prompts",
        "Use journal analytics to verify balancing and account impacts",
        "Transfer guided logic to new business scenarios"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Now the class moves from guided practice to solo application. Students pull fresh scenarios from Sarah's dataset, write adjusting entries, and double-check totals using the analytics panel." 
        },
        {
          type: "paragraph",
          text: "They log decision notes inside the journal so a future automation tool understands their thinking." 
        },
        {
          type: "callout",
          intent: "question",
          title: "Self-Check Prompts",
          body: "Before saving an entry ask: Did I pick the right accounts? Did I label the adjustment type? Does my entry balance? Can I explain the amount in one sentence?"
        }
      ],
      components: [
        {
          type: "transactionJournal",
          component: "TransactionJournal",
          data: {
            title: "Independent Adjusting Journal",
            clientTypes: [
              "TechStart Solutions",
              "Marketing Agency",
              "Consulting Firm",
              "E-commerce Team",
              "Design Studio",
              "Financial Planning",
              "Subscription Platform"
            ],
            maxTransactions: 8,
            showAnalytics: true,
            initialTransactions: [
              {
                id: "u02l03-tj-1",
                entryNumber: "ADJ-201",
                date: "2025-03-31",
                description: "Client paid $1,800 for a six-month maintenance plan on March 20. Recognize March revenue.",
                clientFocus: "Marketing Agency",
                lines: [
                  { id: "u02l03-tj-1a", account: "Deferred Revenue", accountType: "liability", debit: 300, credit: 0 },
                  { id: "u02l03-tj-1b", account: "Service Revenue", accountType: "revenue", debit: 0, credit: 300 }
                ],
                isBalanced: true
              },
              {
                id: "u02l03-tj-2",
                entryNumber: "ADJ-202",
                date: "2025-03-31",
                description: "Consulting sprint delivered March 30 worth $950; invoice scheduled for April 4.",
                clientFocus: "Consulting Firm",
                lines: [
                  { id: "u02l03-tj-2a", account: "Accounts Receivable", accountType: "asset", debit: 950, credit: 0 },
                  { id: "u02l03-tj-2b", account: "Service Revenue", accountType: "revenue", debit: 0, credit: 950 }
                ],
                isBalanced: true
              }
            ]
          }
        }
      ],
      datasets: [
        {
          id: "unit02-lesson03-adjusting-dataset",
          kind: "dataset",
          title: "TechStart Month-End Adjusting Entries",
          path: "/resources/unit02-month-end-advanced-practice.csv"
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Require evidence: students should note adjustment type in their entry descriptions",
          "Monitor analytics dashboard to spot balancing issues quickly"
        ],
        facilitationTips: [
          "Encourage peer feedback using the self-check questions",
          "Challenge early finishers to create stretch scenarios for classmates"
        ],
        misconceptions: [
          "Students may forget to reverse the liability when recognizing deferred revenue",
          "Some will try to expense equipment purchases immediately"
        ],
        timingMinutes: 8
      }
    },
    {
      id: "unit02-lesson03-phase5",
      name: "Assessment",
      title: "Verify Mastery: Adjusting Entry Accuracy",
      sequence: 5,
      summary:
        "Students demonstrate mastery through targeted question bank items focused on Month-End Wizard logic.",
      objectives: [
        "Select the correct adjusting entry for varied business scenarios",
        "Explain the logic behind timing adjustments in plain language",
        "Confirm readiness to translate adjustments into automation rules"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "With the practice complete, students lock in their understanding through a quick mastery check pulled from the Unit 02 question bank." 
        },
        {
          type: "paragraph",
          text: "Each item maps directly to the automation logic they will code in upcoming lessons." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Unit 02 Lesson 03 Mastery Check",
            description: "From the Unit 02 Phase 5 bank: confirm you can pick the correct adjusting entry every time.",
            allowRetry: true,
            showExplanations: true,
            questionBankRef: {
              bankId: "unit02-phase5",
              filter: { lessonIds: ["lesson03"] }
            }
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Clarify that mastery questions mirror the automation rules they'll encode",
          "Use results to group students for next lesson's team builds"
        ],
        timingMinutes: 5
      }
    },
    {
      id: "unit02-lesson03-phase6",
      name: "Closing",
      title: "From Manual Mastery to Automation Blueprint",
      sequence: 6,
      summary:
        "Students reflect on how mastering adjusting entries prepares them to automate Sarah's month-end close.",
      objectives: [
        "Connect today's learning to the upcoming automation sprint",
        "Identify which adjustment types feel solid and which need reinforcement",
        "Set goals for documenting logic inside the Month-End Wizard"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah's month-end close no longer feels like quicksand. Students now hold the exact journal entries a computer needs to post on her behalf." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Next Step: Automation",
          body: "Tomorrow's work converts these journal stories into decision rules, formulas, and error checks. Investors will see a founder who controls her numbers and her systems."
        },
        {
          type: "paragraph",
          text: "The reflection locks in the mindset shift: from keeping up with paperwork to engineering reliable, repeatable month-end routines." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Unit 2 Lesson 3 Reflection",
            unitTitle: "Unit 2: Month-End Wizard",
            journalingFocus: "Document the logic that future automation will follow.",
            entries: [
              {
                id: "u02l03-ref-1",
                category: "courage",
                prompt: "Which adjusting entry felt risky at first, and how did walking through the logic lower that risk?",
                placeholder: "Describe the scenario, the accounts you chose, and what gave you confidence in the entry."
              },
              {
                id: "u02l03-ref-2",
                category: "adaptability",
                prompt: "How will you adapt these entries if TechStart scales to multiple clients with different timelines?",
                placeholder: "List the data points you would capture and how formulas or decision trees could adjust automatically."
              },
              {
                id: "u02l03-ref-3",
                category: "persistence",
                prompt: "What will you do if the Month-End Wizard flags an adjusting entry you already posted?",
                placeholder: "Outline your investigation steps and how you'll prevent the mistake next time."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Celebrate the shift from manual bookkeeping to system design",
          "Encourage students to note any logic gaps before automation work begins"
        ],
        facilitationTips: [
          "Invite a few students to share their automation blueprints with the class",
          "Collect reflection trends to inform next lesson's mini-lessons"
        ],
        timingMinutes: 3
      }
    }
  ]
}
