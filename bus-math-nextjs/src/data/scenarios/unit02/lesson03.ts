import { LessonScenario } from "@/types/lesson-scenarios"

export const unit02Lesson03Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrhkhm79v8qau43696",
    unitTitle: "Unit 2: Month-End Wizard",
    lessonId: "mds5v4u1inmd8zoj1fi",
    lessonNumber: 3,
    title: "Guided Practice: Four Scenarios into Ledger",
    drivingQuestion: "What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?",
    durationMinutes: 45,
    focus: "Apply adjusting entry fundamentals inside guided and independent journal practice to prepare for the Month-End Wizard build.",
    slug: "unit02-lesson03"
  },
  teacherGuidance: {
    overview: "Bridge theory to execution by mapping Sarah's four scenarios in the journal builder, running an independent transaction challenge, and checking mastery before automation work begins.",
    pacingHighlights: [
      "Hook narrative + comprehension check (6 minutes)",
      "GAAP principle refresh with vocabulary practice (9 minutes)",
      "Guided journal entry builder and peer coaching (12 minutes)",
      "Independent transaction journal challenge (10 minutes)",
      "Question bank mastery check (5 minutes)",
      "Reflection + automation preview (3 minutes)"
    ],
    assessments: [
      "Phase 5 comprehension check filtered to Lesson 03",
      "Transaction journal accuracy metrics during independent practice",
      "Reflection journal prompts on courage, adaptability, and persistence"
    ]
  },
  phases: [
    {
      id: "unit02-lesson03-phase1",
      name: "Hook",
      title: "Four Scenarios, One Pressure Cooker",
      sequence: 1,
      summary: "Students revisit Sarah's month-end crisis, identify the four adjusting entry scenarios, and ground the lesson in investor expectations.",
      objectives: [
        "Describe the four month-end scenarios that create adjusting entries for TechStart",
        "Connect each situation to the risk of inaccurate financial statements",
        "Reinforce why GAAP timing rules matter before automation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "TechStart is thriving, but the first month-end close exposed cracks. Sarah now faces four scenarios that her simple ledger cannot handle without professional adjustments." 
        },
        {
          type: "callout",
          intent: "story",
          title: "The Four Flashpoints",
          body: "Accrued revenue, deferred revenue, depreciation, and closing entries all hit during the same weekend, stretching Sarah past the breaking point.",
          bullets: [
            "Work completed on March 29th, invoice delayed until April",
            "Retainer cash received upfront but still unearned",
            "Computer equipment losing value month by month",
            "Revenue and expense accounts that must reset for April"
          ]
        },
        {
          type: "paragraph",
          text: "Investors reading TechStart's statements expect these adjustments to be perfect. Missing them hides the truth about profitability and cash flow." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Professional Stakes",
          body: "GAAP-compliant adjusting entries prove Sarah can run a business, not just write code. Mastering them is the ticket to investor trust, bank loans, and smooth audits." 
        },
        {
          type: "paragraph",
          text: "Today's work turns those stories into clean journal entries—the same logic the Month-End Wizard will automate." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Understanding Sarah's Challenge",
            description: "Confirm why each scenario demands an adjusting entry.",
            questions: [
              {
                id: "unit02-lesson03-hook-q1",
                prompt: "Why should Sarah record revenue before sending an invoice?",
                correctAnswer: "To match revenue with the period when the work was completed",
                distractors: [
                  "To inflate profits before tax season",
                  "To avoid paying sales tax on the revenue",
                  "To reduce the number of invoices she needs to send"
                ],
                explanation: "Accrual accounting recognizes revenue when the work is performed, not when cash arrives." 
              },
              {
                id: "unit02-lesson03-hook-q2",
                prompt: "What challenge appears when clients prepay for six months of service?",
                correctAnswer: "Sarah must treat the cash as a liability until the work is delivered",
                distractors: [
                  "She has to return the money immediately",
                  "She should treat it as pure profit on day one",
                  "She must move the cash to a personal savings account"
                ],
                explanation: "Deferred revenue tracks work owed. Revenue is recognized gradually as TechStart delivers." 
              },
              {
                id: "unit02-lesson03-hook-q3",
                prompt: "Why doesn't Sarah expense the full $3,000 equipment cost in March?",
                correctAnswer: "The asset will help earn revenue for multiple years, so the cost is spread over time",
                distractors: [
                  "She received a discount that delays expensing",
                  "Computers are never considered legitimate business expenses",
                  "She plans to sell the computer next month"
                ],
                explanation: "Straight-line depreciation matches the asset's benefit to each accounting period." 
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Anchor each scenario to the matching principle and revenue recognition rules",
          "Link the hook directly to the Month-End Wizard vision so students see continuity"
        ],
        facilitationTips: [
          "Have students underline the risk in each scenario before answering the questions",
          "Use a quick show-of-hands poll to surface which scenario feels most confusing"
        ],
        timingMinutes: 6,
        presenterNotes: "Keep the tone urgent—students should feel the investor pressure Sarah is under." 
      }
    },
    {
      id: "unit02-lesson03-phase2",
      name: "Introduction",
      title: "GAAP Rules in Action",
      sequence: 2,
      summary: "Students revisit GAAP principles, reinforce key vocabulary, and ensure conceptual clarity before guided practice.",
      objectives: [
        "Define core GAAP concepts related to adjusting entries",
        "Differentiate accrued versus deferred revenue scenarios",
        "Calculate straight-line depreciation using TechStart data"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Marcus reminds Sarah that moving from cash-basis habits to professional GAAP thinking is what convinces investors she has a real company." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Matching Principle",
          body: "Expenses belong in the same period as the revenue they generate. That's why rent, salaries, and depreciation appear in March—even if cash moves later.",
          bullets: [
            "Accrued revenue recognizes work performed",
            "Deferred revenue holds unearned cash",
            "Depreciation spreads asset cost across useful life"
          ]
        },
        {
          type: "callout",
          intent: "story",
          title: "Revenue Recognition",
          body: "When Sarah delivers part of a six-month retainer, part of the liability disappears and becomes revenue."
        },
        {
          type: "callout",
          intent: "tip",
          title: "Straight-Line Quick Math",
          body: "Annual depreciation = (Cost – Salvage) ÷ Useful life. Monthly depreciation = annual ÷ 12.",
          bullets: [
            "($3,000 – $300) ÷ 3 years = $900 per year",
            "$900 ÷ 12 = $75 per month"
          ]
        },
        {
          type: "paragraph",
          text: "These rules are the backbone of the automation you will design. If you can explain them in plain language, you can teach a computer to do the same." 
        }
      ],
      components: [
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "GAAP Vocabulary Check",
            items: [
              {
                id: "unit02-lesson03-intro-fib-1",
                text: "The {blank} principle matches expenses with the revenues they generate.",
                answer: "matching",
                hint: "It keeps profit accurate."
              },
              {
                id: "unit02-lesson03-intro-fib-2",
                text: "Under {blank} accounting, transactions are recorded when they occur, not when cash changes hands.",
                answer: "accrual",
                hint: "Opposite of cash-basis accounting."
              },
              {
                id: "unit02-lesson03-intro-fib-3",
                text: "Money collected before work is done sits in {blank} revenue until earned.",
                answer: "deferred",
                hint: "Also called unearned revenue."
              },
              {
                id: "unit02-lesson03-intro-fib-4",
                text: "Depreciation spreads asset cost using the {blank} method when we divide evenly across time.",
                answer: "straight-line",
                hint: "The most common classroom method."
              },
              {
                id: "unit02-lesson03-intro-fib-5",
                text: "{blank} entries reset revenues and expenses to prepare for the next period.",
                answer: "Closing",
                hint: "They transfer net income to equity."
              }
            ]
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Concept Verification",
            description: "Test your understanding of GAAP timing rules before building the ledger entries.",
            questions: [
              {
                id: "unit02-lesson03-intro-q1",
                prompt: "Why does GAAP require the matching principle?",
                correctAnswer: "It delivers an accurate picture of performance by pairing revenues with related expenses",
                distractors: [
                  "It simplifies taxes for the government",
                  "It reduces paperwork for small businesses",
                  "It guarantees companies always show a profit"
                ],
                explanation: "Matching helps decision-makers trust reported profits for each month." 
              },
              {
                id: "unit02-lesson03-intro-q2",
                prompt: "How does accrued revenue differ from deferred revenue?",
                correctAnswer: "Accrued revenue is earned but not yet billed; deferred revenue is cash received but not yet earned",
                distractors: [
                  "Accrued revenue uses cash, deferred revenue does not",
                  "Accrued revenue is an expense; deferred revenue is profit",
                  "They are the same entry"
                ],
                explanation: "Accrued revenue records a receivable; deferred revenue records a liability."
              },
              {
                id: "unit02-lesson03-intro-q3",
                prompt: "Sarah's $3,000 computer (3-year life, $300 salvage) produces what monthly depreciation?",
                correctAnswer: "$75",
                distractors: [
                  "$100",
                  "$125",
                  "$250"
                ],
                explanation: "($3,000 – $300) ÷ 3 years = $900 per year; $900 ÷ 12 months = $75." 
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Require students to say the GAAP rule out loud using Sarah's examples",
          "Connect each vocabulary term to how it appears in the journal entry builder"
        ],
        facilitationTips: [
          "Ask learners to annotate the depreciation formula in their notes",
          "Use quick whiteboard checks for accrued vs. deferred calls"
        ],
        timingMinutes: 9,
        presenterNotes: "Make sure every student can explain the 'why' behind each entry before moving to guided practice." 
      }
    },
    {
      id: "unit02-lesson03-phase3",
      name: "Guided Practice",
      title: "Build the Adjusting Entry Blueprint",
      sequence: 3,
      summary: "Students use the Journal Entry Building tool to create balanced adjusting entries for Sarah's four scenarios and discuss reasoning with peers.",
      objectives: [
        "Construct balanced journal entries for each adjusting entry scenario",
        "Explain account choices and debit/credit directions using GAAP language",
        "Collaborate with peers to surface logic gaps before automation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Blueprint time. Students now turn narrative scenarios into structured debits and credits, the same way Sarah will later teach the computer." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Entry Building Steps",
          body: "Identify the event, name the accounts, label their types, then apply debit/credit behavior. The builder enforces balance—you supply the logic.",
          bullets: [
            "Translate the story into plain language",
            "Decide which account increases or decreases",
            "Apply debit/credit rules for that account type",
            "Confirm total debits equal total credits"
          ]
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Blueprint = Automation Requirements",
          body: "Every accurate entry here becomes a rule in the Month-End Wizard. Automation fails when the human blueprint is fuzzy." 
        },
        {
          type: "paragraph",
          text: "Pairs talk through each scenario, catching errors before they harden into automation logic." 
        }
      ],
      components: [
        {
          type: "journalEntry",
          component: "JournalEntryBuilding",
          data: {
            title: "Adjusting Entry Blueprint Practice",
            description: "Build the journal entries that keep TechStart's books GAAP-ready.",
            availableAccounts: [
              "Accounts Receivable",
              "Service Revenue",
              "Deferred Revenue",
              "Cash",
              "Depreciation Expense",
              "Accumulated Depreciation",
              "Operating Expenses",
              "Retained Earnings"
            ],
            scenarios: [
              {
                id: "unit02-lesson03-jeb-1",
                description: "March 29: Sarah finishes $500 of SEO work and will invoice on April 5.",
                correctEntry: [
                  { account: "Accounts Receivable", debit: 500, credit: 0 },
                  { account: "Service Revenue", debit: 0, credit: 500 }
                ],
                explanation: "Work is complete, so TechStart records a receivable and earned revenue." 
              },
              {
                id: "unit02-lesson03-jeb-2",
                description: "Retainer client prepays $1,200 on March 15. By month-end Sarah has earned $100.",
                correctEntry: [
                  { account: "Deferred Revenue", debit: 100, credit: 0 },
                  { account: "Service Revenue", debit: 0, credit: 100 }
                ],
                explanation: "Earned work reduces the liability and increases revenue." 
              },
              {
                id: "unit02-lesson03-jeb-3",
                description: "Record straight-line depreciation on the $3,000 computer (3-year life, $300 salvage).",
                correctEntry: [
                  { account: "Depreciation Expense", debit: 75, credit: 0 },
                  { account: "Accumulated Depreciation", debit: 0, credit: 75 }
                ],
                explanation: "Depreciation expense recognizes wear; the contra-asset tracks reduced book value." 
              },
              {
                id: "unit02-lesson03-jeb-4",
                description: "Close $4,000 of Service Revenue to Retained Earnings at month-end.",
                correctEntry: [
                  { account: "Service Revenue", debit: 4000, credit: 0 },
                  { account: "Retained Earnings", debit: 0, credit: 4000 }
                ],
                explanation: "Closing revenue transfers the balance to equity so April starts at zero." 
              },
              {
                id: "unit02-lesson03-jeb-5",
                description: "Close $1,500 of total expenses to Retained Earnings (use Operating Expenses as a summary account).",
                correctEntry: [
                  { account: "Retained Earnings", debit: 1500, credit: 0 },
                  { account: "Operating Expenses", debit: 0, credit: 1500 }
                ],
                explanation: "Closing expenses debits Retained Earnings and credits the expense summary so temporary accounts reset to zero." 
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Peer Reasoning Review",
            duration: "5 minutes",
            description: "Discuss each adjusting entry with a partner before locking it in.",
            prompts: [
              "Which account types moved and why?",
              "How do we know this entry protects the accounting equation?",
              "Where might automation trip up if our wording is unclear?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Insist on verbal reasoning—students should justify every debit and credit",
          "Collect common errors to reference during the gallery walk in Lesson 02"
        ],
        facilitationTips: [
          "Model the first entry on the projector and label account types",
          "Pause students if totals do not balance and require them to diagnose the issue"
        ],
        timingMinutes: 12,
        presenterNotes: "Listen for vocabulary accuracy; correct phrases like 'increase equity with a credit' reinforce readiness for automation." 
      }
    },
    {
      id: "unit02-lesson03-phase4",
      name: "Independent Practice",
      title: "Month-End Adjusting Entry Journal",
      sequence: 4,
      summary: "Students independently create adjusting entries in the transaction journal, explore advanced scenarios, and self-assess mastery.",
      objectives: [
        "Apply adjusting entry rules to new business scenarios without instructor prompts",
        "Analyze advanced accrual and deferral cases from multiple industries",
        "Evaluate personal mastery using a professional checklist"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Now it's your turn to run the ledger solo. The transaction journal tracks accuracy in real time—treat it like the month-end control room." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Advanced Scenarios to Try",
          body: "Stretch beyond TechStart by testing complex accruals and deferrals.",
          bullets: [
            "Multi-month consulting projects with uneven work",
            "Utilities or interest expenses incurred but not yet billed",
            "Annual subscriptions or prepaid insurance that require deferral",
            "Gift card redemptions that convert liabilities into revenue"
          ]
        },
        {
          type: "callout",
          intent: "tip",
          title: "Independent Practice Goals",
          body: "Aim for 80%+ accuracy and at least six completed adjusting entries. Use analytics to see which account types still cause trouble."
        },
        {
          type: "paragraph",
          text: "Close the phase with a self-assessment—do you trust your blueprint enough to hand it to a developer?" 
        }
      ],
      components: [
        {
          type: "transactionJournal",
          component: "TransactionJournal",
          data: {
            title: "Month-End Adjusting Entries Practice",
            clientTypes: [
              "TechStart Solutions",
              "Marketing Agency",
              "Consulting Firm",
              "E-commerce Business",
              "Software Development",
              "Design Studio",
              "Financial Planning",
              "Real Estate Services"
            ],
            maxTransactions: 8,
            showAnalytics: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to document assumptions for each entry",
          "Use the analytics panel to identify students who need reteach on specific entry types"
        ],
        facilitationTips: [
          "Offer optional challenge cards with industry-specific scenarios",
          "Prompt learners to screenshot their analytics for later reflection"
        ],
        timingMinutes: 10,
        presenterNotes: "Treat this like a mini lab—circulate, ask probing questions, and capture exemplar entries for future reference." 
      }
    },
    {
      id: "unit02-lesson03-phase5",
      name: "Assessment",
      title: "Adjusting Entry Expertise Check",
      sequence: 5,
      summary: "Students demonstrate mastery through a lesson-specific question bank pull and connect results to professional expectations.",
      objectives: [
        "Select correct journal entries for accrual, deferral, and depreciation scenarios",
        "Explain closing entry impacts on equity and temporary accounts",
        "Interpret assessment performance to plan next steps"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This checkpoint mirrors the decisions Sarah must automate. Treat each question like a client email asking for immediate guidance." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Mastery Target",
          body: "Score 80% or higher. Anything less signals the class should revisit logic before writing automation." 
        },
        {
          type: "paragraph",
          text: "Use your notes, but prioritize reasoning. Every answer should tie back to GAAP principles you can explain out loud." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Unit 02 Lesson 03 Mastery Assessment",
            description: "Prove you can handle the ledger adjustments that anchor the Month-End Wizard.",
            questionBankRef: {
              bankId: "unit02-phase5",
              filter: {
                lessonIds: ["lesson03"],
                count: 5
              }
            },
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to justify answers with a quick written note",
          "Use results to group students for targeted automation support in Lesson 4"
        ],
        facilitationTips: [
          "Provide scratch paper for journal entry sketches",
          "Have a parking lot chart for lingering questions that need follow-up"
        ],
        timingMinutes: 5,
        presenterNotes: "Collect data on which scenario type still trips students up before moving to automation." 
      }
    },
    {
      id: "unit02-lesson03-phase6",
      name: "Closing",
      title: "From Manual Mastery to Automation",
      sequence: 6,
      summary: "Students reflect on their growth, connect GAAP mastery to automation goals, and map next steps for the Month-End Wizard build.",
      objectives: [
        "Articulate how adjusting entries support professional credibility",
        "Link journal mastery to future automation tasks",
        "Set personal goals for Lesson 4 and beyond"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Congratulations—Sarah's month-end nightmare is now a guided system. You can build every entry manually, which means you can automate it with confidence." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Your Skill Stack",
          body: "GAAP vocabulary, blueprint logic, transaction journal practice, and feedback cycles now sit in your toolkit—exactly what accounting interns need on day one.",
          bullets: [
            "Explain adjusting entries in plain language",
            "Balance complex journal entries without templates",
            "Diagnose bottlenecks before they reach investors"
          ]
        },
        {
          type: "callout",
          intent: "tip",
          title: "Preview Lesson 4",
          body: "Next step: convert these manual entries into automated ledger logic. Bring your best blueprint draft and any lingering questions." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Lesson 03 Reflection",
            unitTitle: "Unit 2: Month-End Wizard",
            journalingFocus: "Connect GAAP mastery to the courage, adaptability, and persistence needed for automation.",
            entries: [
              {
                id: "unit02-lesson03-reflect-courage",
                category: "courage",
                prompt: "Which adjusting entry concept challenged you most, and how did pushing through build confidence for automation?",
                placeholder: "Describe the point where GAAP logic felt intimidating and what helped you move forward..."
              },
              {
                id: "unit02-lesson03-reflect-adapt",
                category: "adaptability",
                prompt: "How can you adapt Sarah's four-scenario blueprint for different industries or clients?",
                placeholder: "Identify patterns that stay consistent and where you would tweak the rules..."
              },
              {
                id: "unit02-lesson03-reflect-persist",
                category: "persistence",
                prompt: "Describe a moment when complexity made you want to stop. What strategy helped you persist, and how will you apply it to coding the wizard?",
                placeholder: "Explain the support, mindset, or resource that kept you going..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Invite quick share-outs highlighting courage, adaptability, and persistence",
          "Remind students to bring updated blueprints to the next lesson's automation sprint"
        ],
        facilitationTips: [
          "Provide sentence starters for students who get stuck",
          "Close with a rapid round of 'one insight, one question' to prime the next session"
        ],
        timingMinutes: 3,
        presenterNotes: "End on momentum—students should leave eager to begin converting logic into code." 
      }
    }
  ]
}
