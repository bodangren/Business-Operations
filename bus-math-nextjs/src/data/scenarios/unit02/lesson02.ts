import { LessonScenario } from "@/types/lesson-scenarios"

export const unit02Lesson02Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrhkhm79v8qau43696",
    unitTitle: "Unit 2: Month-End Wizard",
    lessonId: "mds5v4txafu1bzizb5q",
    lessonNumber: 2,
    title: "Skill Introduction: Accruals, Deferrals & SLN Depreciation",
    drivingQuestion: "What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?",
    durationMinutes: 45,
    focus: "Build the GAAP foundation—accruals, deferrals, depreciation, and closing entries—that powers the Month-End Wizard logic.",
    slug: "unit02-lesson02"
  },
  sharedResources: [
    {
      id: "unit02-lesson02-slide-deck",
      kind: "document",
      title: "Adjusting Entries Mini-Lecture",
      description: "Slides outlining accrual vs. deferral logic, straight-line depreciation, and closing entry flowcharts.",
      path: "/resources/unit02-lesson02-adjusting-entries.pdf"
    }
  ],
  teacherGuidance: {
    overview: "Transition from Sarah's story to the technical accounting needed for automation: teach accrual concepts, model journal entries, and run a peer feedback gallery walk.",
    pacingHighlights: [
      "Hook scenario with market consequences (5 minutes)",
      "Mini-lesson on GAAP principles with guided notes (10 minutes)",
      "Journal entry mapping practice + comprehension check (12 minutes)",
      "Gallery walk feedback on four-scenario mapping (10 minutes)",
      "Assessment quiz pulled from Unit 02 bank (5 minutes)",
      "Reflection journal & next-step preview (3 minutes)"
    ],
    assessments: [
      "Phase 5 comprehension check via Unit 02 question bank",
      "Financial statement matching drag-and-drop for independent practice",
      "Reflection journal prompts on automation readiness"
    ]
  },
  phases: [
    {
      id: "unit02-lesson02-phase1",
      name: "Hook",
      title: "When Slow Closes Sink Companies",
      sequence: 1,
      summary: "Students analyze how poor accrual practices damage earnings reports and connect the crisis to Sarah's automation goal.",
      objectives: [
        "Explain why inaccurate month-end closes trigger investor backlash",
        "Connect Sarah's weekend nightmare to GAAP adjusting entries",
        "Prepare for the shoebox simulation by identifying manual bottlenecks"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Large companies miss earnings targets when they mishandle accruals. Sarah saw the same warning signs in her startup—manual notebooks simply could not keep pace." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "The Cost of Slow Closes",
          body: "Late adjustments, missing invoices, and unrecorded expenses can sink a quarterly report and destroy investor trust."
        },
        {
          type: "paragraph",
          text: "Marcus challenged Sarah to automate the steps that wasted her weekend. This lesson introduces the GAAP rules that make that automation reliable." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Shoebox Receipt Challenge",
          body: "Before touching formulas, teams will feel the pain of manual classification—timing every step and highlighting the worst bottlenecks."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Why Adjusting Entries Matter",
            questions: [
              {
                id: "unit02-lesson02-hook-q1",
                prompt: "What is the main purpose of adjusting entries in accrual accounting?",
                correctAnswer: "To match revenues to expenses in the correct accounting period",
                distractors: [
                  "To record all cash transactions immediately",
                  "To calculate tax obligations",
                  "To update bank account balances"
                ]
              },
              {
                id: "unit02-lesson02-hook-q2",
                prompt: "When Sarah completes work but won't invoice until next month, she should record:",
                correctAnswer: "Accrued revenue (debit Accounts Receivable, credit Service Revenue)",
                distractors: [
                  "Deferred revenue",
                  "Nothing until the invoice is sent",
                  "Cash receipt"
                ]
              },
              {
                id: "unit02-lesson02-hook-q3",
                prompt: "Why does Sarah use straight-line depreciation on her computer system?",
                correctAnswer: "To spread the asset's cost across the months it helps earn revenue",
                distractors: [
                  "To reduce her taxes",
                  "To calculate the market value",
                  "To prepare for replacing the computer"
                ]
              }
            ],
            showExplanations: true,
            allowRetry: true
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Process Bottleneck Spotting",
            duration: "4 minutes",
            description: "Discuss how Sarah's manual close mirrors the shoebox challenge you'll tackle.",
            prompts: [
              "Which month-end tasks create the most chaos when done manually?",
              "How would investors react if those errors hit the financial statements?",
              "What data do you need to capture during the shoebox challenge to justify automation?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Connect real-world earnings misses to classroom practice",
          "Prime students to collect time-on-task data during the shoebox challenge"
        ],
        facilitationTips: [
          "Show a quick headline about an earnings surprise caused by weak accruals",
          "Have students jot one manual task they already want to automate"
        ],
        timingMinutes: 5,
        presenterNotes: "Keep urgency high—students should feel why accuracy and timing matter before the technical lesson."
      }
    }
    ,
    {
      id: "unit02-lesson02-phase2",
      name: "Introduction",
      title: "Accruals, Deferrals, and Depreciation Essentials",
      sequence: 2,
      summary: "Students learn why GAAP requires adjusting entries and practice vocabulary tied to automation-ready journal entries.",
      objectives: [
        "Define accrual, deferral, and straight-line depreciation concepts",
        "Apply the matching principle to common TechStart scenarios",
        "Calculate monthly depreciation using the SLN formula"
      ],
      narrative: [
        {
          type: "heading",
          level: 3,
          text: "Accrual Accounting Creates Trust"
        },
        {
          type: "paragraph",
          text: "Adjusting entries ensure financial statements reflect what actually happened during the month, even when cash timing differs from work delivered." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Sarah's Accrued Revenue Case",
          body: "She finished an SEO audit on the 30th but invoiced on the 5th. Accruals record the revenue in the month the work occurred."
        },
        {
          type: "callout",
          intent: "story",
          title: "Deferred Revenue Reality",
          body: "When a client prepays $1,200, Sarah owes future work. Deferred revenue recognizes income only after she delivers."
        },
        {
          type: "callout",
          intent: "tip",
          title: "Straight-Line Depreciation",
          body: "Spread the cost of equipment across the months it supports TechStart: (Cost – Salvage value) ÷ Useful life.",
          bullets: [
            "Sarah's computer: ($3,000 - $300) ÷ 3 years ÷ 12 = $75/month",
            "Debit Depreciation Expense, credit Accumulated Depreciation"
          ]
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Core Concept Check",
            questions: [
              {
                id: "unit02-lesson02-intro-q1",
                prompt: "What is the main purpose of adjusting entries in accrual accounting?",
                correctAnswer: "To match revenues to expenses in the correct accounting period",
                distractors: [
                  "To record all cash transactions immediately",
                  "To calculate tax obligations",
                  "To update bank balances"
                ]
              },
              {
                id: "unit02-lesson02-intro-q2",
                prompt: "When Sarah completes work but hasn't invoiced, which entry does she record?",
                correctAnswer: "Debit Accounts Receivable, credit Service Revenue",
                distractors: [
                  "Debit Cash, credit Unearned Revenue",
                  "Debit Service Revenue, credit Cash",
                  "No entry until invoicing"
                ]
              },
              {
                id: "unit02-lesson02-intro-q3",
                prompt: "Straight-line depreciation spreads asset cost over time to:",
                correctAnswer: "Match the asset's cost to the periods it helps earn revenue",
                distractors: [
                  "Reduce tax liability",
                  "Estimate market value",
                  "Plan for replacement"
                ]
              }
            ],
            showExplanations: true,
            allowRetry: true
          }
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Vocabulary Lock-In",
            items: [
              {
                id: "unit02-lesson02-fib-1",
                text: "When a client prepays for future work, Sarah records {blank} because she owes services.",
                answer: "deferred revenue",
                hint: "A liability for work owed"
              },
              {
                id: "unit02-lesson02-fib-2",
                text: "Sarah's $3,000 computer with $300 salvage value depreciates {blank} per month using straight-line.",
                answer: "$75",
                hint: "($3,000 - $300) ÷ 3 years ÷ 12"
              },
              {
                id: "unit02-lesson02-fib-3",
                text: "The {blank} account reduces an asset's book value while keeping original cost visible.",
                answer: "Accumulated Depreciation",
                hint: "Contra-asset that pairs with depreciation expense"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Stress the matching principle with concrete TechStart examples",
          "Preview how these entries translate into automation logic in later lessons"
        ],
        facilitationTips: [
          "Have students annotate the SLN formula with Sarah's numbers",
          "Use mini whiteboards for quick accrual vs. deferral checks"
        ],
        timingMinutes: 10,
        presenterNotes: "Keep tone direct and practical—students should know these entries power the wizard's accuracy."
      }
    },
    {
      id: "unit02-lesson02-phase3",
      name: "Guided Practice",
      title: "Map the Four Adjusting Scenarios",
      sequence: 3,
      summary: "Students translate Sarah's four March situations into debit/credit blueprints and rehearse the logic that will power their automation.",
      objectives: [
        "Document debits and credits for accrued, deferred, depreciation, and closing entries",
        "Explain how each blueprint keeps the accounting equation in balance",
        "Use peer dialogue to surface misconceptions before the gallery walk"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah refuses to write a single macro until her month-end blueprint is flawless. Every adjusting entry must be mapped by hand so the automation never guesses." 
        },
        {
          type: "callout",
          intent: "story",
          title: "The Four Cases You Must Master",
          body: "Accrued revenue, deferred revenue, monthly depreciation, and the closing sweep move money through TechStart's books. Each story reveals what truly happened in March.",
          bullets: [
            "Work finished on March 29th triggers Accounts Receivable",
            "Prepaid retainers become revenue only when earned",
            "Straight-line depreciation turns equipment cost into monthly expense",
            "Closing entries reset revenue and expense accounts for April"
          ]
        },
        {
          type: "paragraph",
          text: "Every debit and credit still has to honor Assets = Liabilities + Equity. If the blueprint breaks the equation, the automation will export bad data to investors." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Blueprint Procedure",
          body: "Analyze the business event, decide which accounts move, label the account types, then apply debit/credit rules before you even think about Excel.",
          bullets: [
            "Name the trigger in plain language",
            "Identify which account increases or decreases",
            "Match each change to debit or credit behavior",
            "Verify total debits equal total credits"
          ]
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Blueprint Before Automation",
          body: "Macros only follow orders. If the manual logic is sloppy, the Month-End Wizard will post the wrong entries at machine speed."
        },
        {
          type: "paragraph",
          text: "Students work in pairs, narrating each choice. The goal is to hear the logic aloud so teammates can catch gaps before the gallery walk." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Adjusting Entry Blueprint Check",
            questions: [
              {
                id: "unit02-lesson02-gp-q1",
                prompt: "Which entry captures accrued revenue of $500 completed on March 29th?",
                correctAnswer: "Debit Accounts Receivable $500, Credit Service Revenue $500",
                distractors: [
                  "Debit Service Revenue $500, Credit Accounts Receivable $500",
                  "Debit Cash $500, Credit Service Revenue $500",
                  "No entry until the invoice is sent"
                ],
                explanation: "Work is finished, so TechStart earns revenue and records the client promise as Accounts Receivable."
              },
              {
                id: "unit02-lesson02-gp-q2",
                prompt: "Monthly depreciation of $75 uses which account pair?",
                correctAnswer: "Debit Depreciation Expense $75, Credit Accumulated Depreciation $75",
                distractors: [
                  "Debit Equipment $75, Credit Cash $75",
                  "Debit Equipment $75, Credit Depreciation Expense $75",
                  "Debit Cash $75, Credit Depreciation Expense $75"
                ],
                explanation: "Straight-line depreciation records expense while keeping the asset's historical cost intact via the contra-asset account."
              },
              {
                id: "unit02-lesson02-gp-q3",
                prompt: "A client prepays $1,200 for six months. After half a month of work, which adjusting entry is correct?",
                correctAnswer: "Debit Deferred Revenue $100, Credit Service Revenue $100",
                distractors: [
                  "Debit Cash $100, Credit Service Revenue $100",
                  "Debit Service Revenue $100, Credit Deferred Revenue $100",
                  "Debit Accounts Receivable $100, Credit Service Revenue $100"
                ],
                explanation: "Only the earned portion leaves the liability account and becomes revenue." 
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        },
        {
          type: "dragAndDrop",
          component: "BusinessTransactionCategorization",
          description: "Reinforce how different cash flows connect to the adjusting entries you just mapped.",
          data: {
            preset: "unit02-lesson02-blueprint"
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Blueprint Peer Check",
            duration: "5 minutes",
            description: "Talk through each scenario with a partner before locking the blueprint for automation.",
            prompts: [
              "What actually happened in the business, and which accounts move?",
              "How does this entry protect the accounting equation?",
              "What confusion should we flag for the gallery walk feedback board?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Listen for students naming account types, not just account titles",
          "Capture common blueprint errors to showcase during the gallery walk"
        ],
        facilitationTips: [
          "Model one scenario aloud, then have pairs echo the reasoning back",
          "Pause midway so classmates can share one blueprint tip with the whole room"
        ],
        timingMinutes: 12,
        presenterNotes: "Circulate with a clipboard—note which teams need targeted feedback slips in the next phase."
      }
    },
    {
      id: "unit02-lesson02-phase4",
      name: "Independent Practice",
      title: "Gallery Walk Logic Check",
      sequence: 4,
      summary: "Students trade feedback using the Stars and Steps protocol, apply insights to their blueprints, and extend practice with statement matching.",
      objectives: [
        "Deliver specific, actionable Stars and Steps feedback on adjusting entry maps",
        "Refine personal blueprints based on peer insights before automation begins",
        "Strengthen statement classification by matching line items to the correct report"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Even expert accountants seek a second opinion. Before Sarah codes the wizard, she wants classmates to stress-test her logic." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Feedback Saves Time",
          body: "Finding blueprint errors now prevents hours of debugging VBA later. Professional teams always review requirements together before writing code."
        },
        {
          type: "paragraph",
          text: "Teams post their four scenarios around the room. Partners rotate, leave Stars (strengths) and Steps (improvements), then regroup to process the notes." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Stars and Steps Playbook",
          body: "Focused feedback moves the work forward—celebrate what is working, then give a next step that the team can implement immediately.",
          bullets: [
            "Star: Precision in the debit/credit explanation",
            "Star: Visual layout that highlights the account types",
            "Step: Clarify the math behind earned revenue",
            "Step: Label which account is an asset, liability, or equity"
          ]
        },
        {
          type: "callout",
          intent: "question",
          title: "After the Walk",
          body: "What feedback changed your mind? Which suggestion will you implement before assessment?"
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Gallery Walk Prep",
            questions: [
              {
                id: "unit02-lesson02-iprep-q1",
                prompt: "What makes Stars and Steps feedback valuable?",
                correctAnswer: "It names specific strengths and gives actionable next steps",
                distractors: [
                  "It focuses on handwriting and neatness",
                  "It lists every error without solutions",
                  "It only praises the team's effort"
                ],
                explanation: "Actionable praise and concrete improvement ideas guide teams toward stronger blueprints."
              },
              {
                id: "unit02-lesson02-iprep-q2",
                prompt: "Why invite critique before building automation?",
                correctAnswer: "Fixing logic now prevents building macros on a flawed foundation",
                distractors: [
                  "Feedback replaces the need for automation",
                  "It allows teams to work faster during coding",
                  "Peers will complete the automation for you"
                ],
                explanation: "A clean blueprint means VBA can run without rework—this is real-world quality assurance."
              },
              {
                id: "unit02-lesson02-iprep-q3",
                prompt: "During the gallery walk, what should you avoid?",
                correctAnswer: "Leaving vague comments like 'looks good' with no substance",
                distractors: [
                  "Offering a suggestion that includes a resource",
                  "Pointing out a mislabeled account",
                  "Highlighting a clever layout choice"
                ],
                explanation: "Vague notes waste time. Teams need insights they can implement immediately."
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        },
        {
          type: "dragAndDrop",
          component: "FinancialStatementMatching",
          description: "Match line items to the proper financial statement while reflecting on feedback themes.",
          data: {
            preset: "unit02-adjusting-entry-review"
          }
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Feedback Quality Checklist",
            items: [
              {
                id: "unit02-lesson02-feedback-1",
                text: "Effective Stars highlight {blank} strengths that deserve to continue.",
                answer: "specific",
                hint: "Avoid generic praise."
              },
              {
                id: "unit02-lesson02-feedback-2",
                text: "Helpful Steps describe {blank} actions the team can take next.",
                answer: "actionable",
                hint: "Focus on doable improvements."
              },
              {
                id: "unit02-lesson02-feedback-3",
                text: "Early feedback protects Sarah's most limited resource: {blank}.",
                answer: "time",
                hint: "Think about the two-day crisis."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Model one Star and one Step so students hear the tone you expect",
          "Remind teams to capture the feedback they receive before leaving the station"
        ],
        facilitationTips: [
          "Set timers for rotations and announce when to switch",
          "Leave blank sticky notes at each station for quick annotations"
        ],
        timingMinutes: 10,
        presenterNotes: "End the phase by asking each team to name the single change they will implement."
      }
    },
    {
      id: "unit02-lesson02-phase5",
      name: "Assessment",
      title: "Adjusting Entry Mastery",
      sequence: 5,
      summary: "Students demonstrate mastery of adjusting entry logic through a question bank pull and a journal entry application challenge.",
      objectives: [
        "Select correct adjusting entries for accrued and deferred revenue situations",
        "Calculate straight-line depreciation and closing entry impacts",
        "Self-assess readiness to automate the Month-End Wizard"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah's blueprint is only valuable if it stands up under pressure. This assessment mirrors the decisions she will automate inside Excel." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Mastery Threshold",
          body: "Aim for 80% or higher. Investors assume you already know these fundamentals before trusting your automation." 
        },
        {
          type: "paragraph",
          text: "Use data from the question bank to prove you can handle accrual timing, depreciation math, and closing entries without hesitation." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Assessment Strategy",
          body: "Read the business action first, identify the account types, then apply debit/credit logic."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Unit 02 Lesson 02 Assessment",
            description: "Demonstrate mastery of adjusting entry fundamentals.",
            questionBankRef: {
              bankId: "unit02-phase5",
              filter: {
                lessonIds: ["lesson02"],
                count: 5
              }
            },
            allowRetry: false,
            showExplanations: true
          }
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Journal Entry Application",
            items: [
              {
                id: "unit02-lesson02-assess-fib-1",
                text: "Completing $800 of work but billing next month requires debiting {blank} and crediting {blank}.",
                answer: "Accounts Receivable, Service Revenue",
                hint: "Record what is earned and what is owed."
              },
              {
                id: "unit02-lesson02-assess-fib-2",
                text: "Straight-line depreciation uses the formula (Cost - {blank}) ÷ {blank} to find the annual amount.",
                answer: "Salvage Value, Useful Life",
                hint: "Think about the equipment timeline."
              },
              {
                id: "unit02-lesson02-assess-fib-3",
                text: "Monthly depreciation is recorded as a debit to {blank} and a credit to {blank}.",
                answer: "Depreciation Expense, Accumulated Depreciation",
                hint: "One records cost, the other tracks reduction in book value."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Remind learners that accuracy matters more than speed during this check",
          "Encourage students to show their work on scratch paper for each calculation"
        ],
        facilitationTips: [
          "Have optional challenge questions ready for early finishers",
          "Offer a quick huddle with any student scoring below threshold to plan reteach"
        ],
        timingMinutes: 5,
        presenterNotes: "Collect qualitative data on which objective needs reinforcement before Lesson 03."
      }
    },
    {
      id: "unit02-lesson02-phase6",
      name: "Closing",
      title: "Foundation Secured, Automation Ahead",
      sequence: 6,
      summary: "Students synthesize what they mastered, reflect on career connections, and set intentions for the upcoming automation build.",
      objectives: [
        "Summarize how adjusting entries power trustworthy financial statements",
        "Connect GAAP mastery to future automation and career goals",
        "Set personal next steps for Lesson 3's ledger build"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah now owns the logic behind every month-end scenario. The shoebox chaos is replaced with clear rules she can teach to a computer." 
        },
        {
          type: "callout",
          intent: "story",
          title: "What You Mastered",
          body: "Accrual vs. deferral timing, depreciation math, and the closing process now live in your toolkit—the same skills junior accountants demonstrate on the job.",
          bullets: [
            "Match principle in action",
            "Contra-asset mechanics",
            "Earned vs. unearned revenue logic",
            "Resetting temporary accounts"
          ]
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Bridge to Automation",
          body: "Every VBA condition you write in Lesson 3 will mirror the logic you documented today. Clean inputs lead to investor-ready outputs."
        },
        {
          type: "paragraph",
          text: "Students capture how courage, adaptability, and persistence showed up while wrestling with GAAP, then outline how they will apply those traits to automation work." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Preview What's Next",
          body: "Lesson 3 turns these blueprints into executable journal entries inside the Month-End Wizard. Come ready to code the logic you just validated." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Lesson Reflection: Adjusting Entry Foundations",
            unitTitle: "Unit 2: Month-End Wizard",
            journalingFocus: "Connect GAAP mastery to automation confidence and career goals.",
            entries: [
              {
                id: "unit02-lesson02-reflection-courage",
                category: "courage",
                prompt: "Which adjusting entry concept forced you to step outside your comfort zone, and how did facing it build confidence for automation?",
                placeholder: "Describe the moment GAAP rules felt confusing and how you pushed through..."
              },
              {
                id: "unit02-lesson02-reflection-adapt",
                category: "adaptability",
                prompt: "How will you adapt Sarah's four-scenario blueprint for other industries or clients you might support?",
                placeholder: "Explain the patterns that stay the same when business models change..."
              },
              {
                id: "unit02-lesson02-reflection-persist",
                category: "persistence",
                prompt: "Describe a point where you wanted to give up on the math or logic. What helped you persist and what will you carry into Lesson 3?",
                placeholder: "Share the strategy, partner, or mindset shift that kept you working..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Invite two students to share reflections that highlight courage and adaptability",
          "Connect student takeaways directly to the automation workflow in Lesson 3"
        ],
        facilitationTips: [
          "Offer sentence starters for learners who struggle to begin writing",
          "Close with a quick whip-around: one insight, one question for the next lesson"
        ],
        timingMinutes: 3,
        presenterNotes: "Leave students excited—tomorrow they turn this logic into live Excel scripts."
      }
    }
  ]
}
