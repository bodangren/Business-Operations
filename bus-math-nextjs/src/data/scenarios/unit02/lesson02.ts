import { LessonScenario } from "@/types/lesson-scenarios"

export const unit02Lesson02Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrhkhm79v8qau43696",
    unitTitle: "Unit 2: Month-End Wizard",
    lessonId: "mds5v4txafu1bzizb5q",
    lessonNumber: 2,
    title: "Skill Introduction: Accruals, Deferrals & SLN Depreciation",
    drivingQuestion: "How do we translate GAAP timing rules into automation-ready journal entries?",
    durationMinutes: 45,
    focus: "Build the accounting logic that Sarah needs before she can automate her Month-End Wizard.",
    slug: "unit02-lesson02"
  },
  teacherGuidance: {
    overview:
      "Students study the four core month-end scenarios (accrued revenue, deferred revenue, depreciation, closing entries), practice calculating entries, and prepare their blueprints for peer review and automation.",
    pacingHighlights: [
      "Hook: revisit Sarah's weekend crisis and connect it to GAAP timing (5 minutes)",
      "Direct instruction: adjusting entries + vocabulary practice (12 minutes)",
      "Guided mapping of the four scenarios with peer reasoning (12 minutes)",
      "Independent gallery-walk prep and feedback training (8 minutes)",
      "Assessment: Unit 02 lesson 02 question bank + application prompts (5 minutes)",
      "Closing reflection + preview of automation work (3 minutes)"
    ],
    assessments: [
      "Phase 2 comprehension check on adjusting entry concepts",
      "Phase 4 gallery-walk preparation check",
      "Phase 5 Unit 02 question bank mastery assessment"
    ]
  },
  phases: [
    {
      id: "unit02-lesson02-phase1",
      name: "Hook",
      title: "Why Timing Rules Make or Break Automation",
      sequence: 1,
      summary:
        "Students revisit Sarah's month-end nightmare, connect the pain to GAAP timing mistakes, and set the stage for mastering adjusting entries.",
      objectives: [
        "Describe the manual bottlenecks that forced Sarah to automate",
        "Explain why investors expect GAAP-compliant timing",
        "Adopt the unit driving question as a personal challenge"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah's first month-end close felt like quicksand. Her client work was finished, but the financial facts refused to cooperate." 
        },
        {
          type: "paragraph",
          text: "She spent her entire weekend cross-checking notebooks, bank statements, and sticky notes. Every typo or missed subscription fee meant starting over." 
        },
        {
          type: "paragraph",
          text: "Mentor Marcus Rodriguez didn't let the frustration slide. He reminded her that time is the most valuable resource in a startup. If she wastes weekends on bookkeeping, she cannot pursue bigger opportunities." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Investor Reality",
          body: "Growing companies live or die by GAAP timing. Earnings need to land in the right month, expenses must match the revenue they create, and depreciation has to track equipment value.",
          bullets: [
            "Manual processes magnify each tiny mistake",
            "Late adjustments ruin investor confidence",
            "Automation only works when the logic is perfect"
          ]
        },
        {
          type: "paragraph",
          text: "Sarah reframed her challenge. The new goal: cut month-end closing from two days to two hours without losing a single ounce of accuracy." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Understanding the Pressure",
            description: "Confirm what triggered Sarah's next leap toward automation.",
            questions: [
              {
                id: "u02l02-hook-q1",
                prompt: "Why did Sarah's first month-end close collapse into a weekend-long task?",
                correctAnswer: "Manual notebooks forced her to chase tiny errors across every statement",
                distractors: [
                  "Her clients stopped paying on time",
                  "She refused to use any digital tools",
                  "Her bank wouldn't give her transaction data"
                ],
                explanation:
                  "Sarah recorded everything by hand. One typo or missed subscription threw off the entire reconciliation process."
              },
              {
                id: "u02l02-hook-q2",
                prompt: "What did Marcus call Sarah's most valuable business asset?",
                correctAnswer: "Her time—because automation protects the hours she needs to grow",
                distractors: [
                  "Her laptop—because the software is expensive",
                  "Her clients—because they provide referrals",
                  "Her logo—because branding builds trust"
                ],
                explanation:
                  "Marcus reminded Sarah that founders win when they spend time on high-value work, not weekend bookkeeping."
              },
              {
                id: "u02l02-hook-q3",
                prompt: "What question now drives Sarah's automation work?",
                correctAnswer: "How to cut month-end from two days to two hours without losing GAAP accuracy",
                distractors: [
                  "How to replace her accountant with software",
                  "How to eliminate every manual task forever",
                  "How to make daily closing part of the routine"
                ],
                explanation:
                  "Sarah set a concrete goal: compress the same high-quality close into a fraction of the time."
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Turn and Talk: Timing Troubles",
            duration: "3 minutes",
            description: "Relate Sarah's weekend to a real moment when a process in your life fell apart.",
            prompts: [
              "What task dragged on because the system wasn't ready?",
              "How did timing mistakes ripple into bigger issues?",
              "Where would automation or better tools have saved you?",
              "How does that connect to Sarah's month-end pressure?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Students should articulate why GAAP timing matters to investors",
          "Ground the driving question in a real business crisis",
          "Capture student language about 'chaos' for later reflection"
        ],
        facilitationTips: [
          "Pause the hook narrative and ask students to predict where errors pile up",
          "Encourage students to share personal timing mishaps before automation ideas"
        ],
        timingMinutes: 7,
        presenterNotes: "Set an urgent tone—automation is not optional when timing rules slip."
      }
    },
    {
      id: "unit02-lesson02-phase2",
      name: "Introduction",
      title: "Adjusting Entries: The Language of Automation",
      sequence: 2,
      summary:
        "Students break down GAAP timing rules for accruals, deferrals, and straight-line depreciation, and lock in essential vocabulary.",
      objectives: [
        "Explain the purpose of adjusting entries in accrual accounting",
        "Differentiate accrued revenue, deferred revenue, and depreciation",
        "Calculate a monthly straight-line depreciation amount"
      ],
      narrative: [
        {
          type: "heading",
          level: 3,
          text: "Why Adjusting Entries Exist"
        },
        {
          type: "paragraph",
          text: "Accrual accounting promises investors that revenue and expenses land in the right period—even when cash shows up later." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Sarah's Two Key Examples",
          body:
            "The fitness studio paid in advance (deferred revenue) and the SEO audit finished before invoicing (accrued revenue). Both demand adjustments before the month closes."
        },
        {
          type: "heading",
          level: 3,
          text: "Depreciation Joins the Story"
        },
        {
          type: "paragraph",
          text: "Sarah's computer system will support TechStart for years. Straight-line depreciation spreads that cost evenly so each month shows the true profit." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Formula Reminder",
          body: "Annual Depreciation = (Cost - Salvage Value) ÷ Useful Life"
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Adjusting Entry Concepts",
            questions: [
              {
                id: "u02l02-intro-q1",
                prompt: "Why does GAAP require adjusting entries at month-end?",
                correctAnswer: "To match revenue and expenses to the period where they truly happened",
                distractors: [
                  "To record every cash deposit immediately",
                  "To keep the checkbook balanced",
                  "To avoid paying business taxes"
                ],
                explanation:
                  "Accrual accounting recognizes performance, not just cash movement. Adjustments keep statements honest."
              },
              {
                id: "u02l02-intro-q2",
                prompt: "Sarah finished a project but won't invoice until next week. What adjustment does she make today?",
                correctAnswer: "Debit Accounts Receivable and credit Service Revenue",
                distractors: [
                  "Debit Cash and credit Service Revenue",
                  "Do nothing until cash arrives",
                  "Debit Deferred Revenue and credit Cash"
                ],
                explanation:
                  "Work is complete, so revenue is earned. Accounts receivable captures the promise of payment."
              },
              {
                id: "u02l02-intro-q3",
                prompt: "Straight-line depreciation helps Sarah with what goal?",
                  correctAnswer: "Spreading the equipment cost across the months it actually supports",
                distractors: [
                  "Reducing her tax bill to zero",
                  "Reporting the current market value of the laptop",
                  "Avoiding repair expenses on the equipment"
                ],
                explanation:
                  "Matching principle: the asset's cost should show up gradually as Sarah earns revenue with it."
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Key Vocabulary Check",
            items: [
              {
                id: "u02l02-fib-1",
                text: "When Sarah collects cash before doing the work, she records {blank} to show she owes future service.",
                answer: "deferred revenue",
                hint: "It becomes revenue only when the work is complete."
              },
              {
                id: "u02l02-fib-2",
                text: "Monthly depreciation on a $3,000 computer with $300 salvage over 3 years equals {blank} per month.",
                answer: "$75",
                hint: "Subtract salvage first, then divide by years and months."
              },
              {
                id: "u02l02-fib-3",
                text: "The {blank} account keeps original asset cost visible while tracking value used up.",
                answer: "Accumulated Depreciation",
                hint: "It is a contra-asset linked to the equipment account."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Students should connect each scenario to the matching principle",
          "Highlight the straight-line formula with numbers from Sarah's business",
          "Clarify the difference between accrued and deferred revenue"
        ],
        facilitationTips: [
          "Work one example on the board before the comprehension check",
          "Invite students to rewrite the depreciation formula in their own words"
        ],
        timingMinutes: 12,
        presenterNotes: "Keep the tone concrete—students must see the business story behind each entry."
      }
    },
    {
      id: "unit02-lesson02-phase3",
      name: "Guided Practice",
      title: "Mapping the Four Automation Scenarios",
      sequence: 3,
      summary:
        "Students build a month-end blueprint by pairing business situations with their debit-and-credit solutions and validating logic with peers.",
      objectives: [
        "Match each adjusting scenario with the correct journal entry",
        "Explain how the accounting equation stays balanced",
        "Prepare automation-ready rules for accrued, deferred, depreciation, and closing entries"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Automation only works when the manual logic is flawless. Sarah captured that logic in a blueprint: four core scenarios, four reliable journal entries." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Blueprint Rule",
          body: "If the manual entry is wrong, the macro will repeat the mistake at lightning speed."
        },
        {
          type: "paragraph",
          text: "Your team will build the same blueprint. Use precise language, and double-check every debit and credit." 
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          description: "Match each month-end scenario with the correct debit/credit structure.",
          data: {
            title: "Adjusting Entry Blueprint",
            description: "Connect Sarah's month-end scenarios to the journal entries her automation must perform.",
            leftColumnTitle: "Scenario Details",
            rightColumnTitle: "Journal Entry",
            showHints: true,
            shuffleItems: true,
            items: [
              {
                id: "acc-rev-scenario",
                content: "Finished $500 SEO audit; invoice goes out next month",
                matchId: "acc-rev-entry",
                hint: "Revenue is earned even if cash hasn't arrived."
              },
              {
                id: "acc-rev-entry",
                content: "Debit Accounts Receivable $500 / Credit Service Revenue $500",
                matchId: "acc-rev-scenario"
              },
              {
                id: "def-rev-scenario",
                content: "Received $1,200 prepayment for six months of service",
                matchId: "def-rev-entry",
                hint: "Recognize only the portion earned this month."
              },
              {
                id: "def-rev-entry",
                content: "Debit Deferred Revenue $100 / Credit Service Revenue $100",
                matchId: "def-rev-scenario"
              },
              {
                id: "depr-scenario",
                content: "Computer depreciation totals $75 this month",
                matchId: "depr-entry",
                hint: "Expense the amount while tracking the asset's remaining value."
              },
              {
                id: "depr-entry",
                content: "Debit Depreciation Expense $75 / Credit Accumulated Depreciation $75",
                matchId: "depr-scenario"
              },
              {
                id: "closing-scenario",
                content: "Reset temporary accounts: $4,000 revenue, $1,500 expenses",
                matchId: "closing-entry",
                hint: "Move net income into retained earnings."
              },
              {
                id: "closing-entry",
                content: "Debit Service Revenue $4,000, credit Retained Earnings $4,000; debit Retained Earnings $1,500, credit Expenses $1,500",
                matchId: "closing-scenario"
              }
            ]
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Blueprint Logic Check",
            questions: [
              {
                id: "u02l02-guided-q1",
                prompt: "Why does accrued revenue increase both assets and equity?",
                correctAnswer: "Because the business earned income, creating a receivable and increasing retained earnings",
                distractors: [
                  "Because cash increases right away",
                  "Because liabilities decrease",
                  "Because expenses also rise"
                ],
                explanation:
                  "Accrued revenue adds to accounts receivable (asset) and to service revenue (equity through net income)."
              },
              {
                id: "u02l02-guided-q2",
                prompt: "Which entry reduces a liability while recognizing revenue already earned?",
                correctAnswer: "Debit Deferred Revenue, credit Service Revenue",
                distractors: [
                  "Debit Service Revenue, credit Cash",
                  "Debit Accounts Receivable, credit Deferred Revenue",
                  "Debit Depreciation Expense, credit Accumulated Depreciation"
                ],
                explanation:
                  "Deferred revenue measures work owed. When Sarah performs the service, the liability decreases and revenue increases."
              },
              {
                id: "u02l02-guided-q3",
                prompt: "Why must closing entries zero out revenue and expense accounts?",
                correctAnswer: "So the next period starts at zero while net income moves into equity",
                distractors: [
                  "Because GAAP requires expenses to stay on the balance sheet",
                  "Because cash balances must reset",
                  "Because investors dislike comparing year-over-year data"
                ],
                explanation:
                  "Closing entries reset temporary accounts, transferring the net result to retained earnings."
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Peer Blueprint Review",
            duration: "5 minutes",
            description: "Swap entries with a partner and defend the logic behind each debit and credit.",
            prompts: [
              "How does this entry protect the accounting equation?",
              "What error would appear if the debit and credit flipped?",
              "Where will the automation code reference this rule?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Students need to verbalize why each debit/credit pair makes sense",
          "Encourage use of accounting equation language",
          "Emphasize that automation scripts mirror these exact rules"
        ],
        facilitationTips: [
          "Display a model entry and ask the class to identify asset/liability/equity impacts",
          "Listen for misconceptions about deferred versus accrued scenarios"
        ],
        timingMinutes: 12,
        presenterNotes: "Collect sample blueprints for quick feedback before the gallery walk."
      }
    },
    {
      id: "unit02-lesson02-phase4",
      name: "Independent Practice",
      title: "Gallery Walk: Feedback That Saves Hours",
      sequence: 4,
      summary:
        "Students prepare for a gallery walk, practice the Stars and Steps feedback method, and reinforce financial statement fluency.",
      objectives: [
        "Give actionable feedback using the Stars and Steps framework",
        "Identify common blueprint strengths and gaps",
        "Reinforce financial statement knowledge before automation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Shipping a flawed blueprint wastes automation time. Peer feedback catches issues before code is written." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Stars and Steps",
          body: "Stars celebrate specific strengths. Steps recommend specific improvements. Both must be clear and kind."
        },
        {
          type: "paragraph",
          text: "Use the gallery walk to collect insight, ask clarifying questions, and sharpen your logic." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Gallery Walk Preparation",
            questions: [
              {
                id: "u02l02-indep-q1",
                prompt: "Which feedback style protects teammates' time the most?",
                correctAnswer: "Specific, actionable, and kind Stars and Steps notes",
                distractors: [
                  "Listing as many problems as possible without solutions",
                  "Giving only compliments so nobody feels bad",
                  "Waiting to give feedback until automation is finished"
                ],
                explanation:
                  "Actionable feedback prevents teams from building on weak logic or missing ideas."
              },
              {
                id: "u02l02-indep-q2",
                prompt: "Why give feedback before writing macros?",
                correctAnswer: "Fixing logic now prevents wasting hours automating the wrong steps",
                distractors: [
                  "Because GAAP requires a gallery walk",
                  "Because automation can only run after teacher approval",
                  "Because feedback replaces the need for testing"
                ],
                explanation:
                  "Catching errors early keeps the automation project on schedule."
              },
              {
                id: "u02l02-indep-q3",
                prompt: "What do Stars focus on during the gallery walk?",
                correctAnswer: "Specific strengths that teams should keep doing",
                distractors: [
                  "A rating out of five stars", "Only the neatest handwriting", "The number of scenarios covered"
                ],
                explanation:
                  "Stars highlight what is working so teams know which habits to continue."
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        },
        {
          type: "dragAndDrop",
          component: "FinancialStatementMatching",
          description: "Independent refresher: match line items to the correct financial statement.",
          data: {}
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Feedback Quality Statements",
            items: [
              {
                id: "u02l02-feedback-1",
                text: "Stars should highlight {blank} strengths that the team can repeat.",
                answer: "specific",
                hint: "Avoid empty praise like 'looks good'."
              },
              {
                id: "u02l02-feedback-2",
                text: "Steps should offer {blank} improvements that move the blueprint forward.",
                answer: "actionable",
                hint: "Give teammates a concrete next move."
              },
              {
                id: "u02l02-feedback-3",
                text: "Early feedback saves precious {blank} and prevents automating flawed logic.",
                answer: "time",
                hint: "Remember what Marcus said about Sarah's greatest asset."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Students must practice respectful, specific feedback",
          "Remind teams to photograph or capture feedback notes",
          "Financial statement fluency supports upcoming automation"
        ],
        facilitationTips: [
          "Model a sample Star and Step using a student blueprint",
          "Assign roles (recorder, timekeeper) during the gallery walk"
        ],
        timingMinutes: 8,
        presenterNotes: "Set timers for rotations to keep energy high."
      }
    },
    {
      id: "unit02-lesson02-phase5",
      name: "Assessment",
      title: "Adjusting Entry Mastery Check",
      sequence: 5,
      summary:
        "Students demonstrate mastery of Unit 02 Lesson 02 objectives with the shared question bank and targeted fill-in-the-blank practice.",
      objectives: [
        "Answer question-bank items tied to accruals, deferrals, and depreciation",
        "Apply timing rules to fresh business scenarios",
        "Self-assess readiness to automate the Month-End Wizard"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah cannot automate until she proves the logic is solid. You face the same checkpoint: can you recognize, calculate, and record every scenario correctly?" 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Assessment Strategy",
          body: "Read each prompt slowly. Identify the timing issue first, then decide which accounts react." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Adjusting Entries Mastery",
            description: "Pulled from the Unit 02 lesson 02 bank.",
            questionBankRef: {
              bankId: "unit02-phase5",
              filter: {
                lessonIds: ["lesson02"]
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
                id: "u02l02-assess-1",
                text: "Earned $800 of work but invoice goes out next month: debit {blank}, credit {blank}.",
                answer: "Accounts Receivable, Service Revenue",
                hint: "Think about what the client now owes Sarah."
              },
              {
                id: "u02l02-assess-2",
                text: "Straight-line formula reminder: Annual Depreciation = (Cost - {blank}) ÷ {blank}.",
                answer: "Salvage Value, Useful Life",
                hint: "Two blanks, both appear in the formula."
              },
              {
                id: "u02l02-assess-3",
                text: "Recording monthly depreciation requires debiting {blank} and crediting {blank}.",
                answer: "Depreciation Expense, Accumulated Depreciation",
                hint: "One is an expense, the other is a contra-asset."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Monitor question-bank analytics for patterns",
          "Encourage students to note which prompts felt shaky",
          "Capture follow-up topics for small group support"
        ],
        facilitationTips: [
          "Give students quiet time before discussing answers",
          "Invite volunteers to explain their reasoning aloud"
        ],
        timingMinutes: 5,
        presenterNotes: "Celebrate growth—students now own the logic behind automation."
      }
    },
    {
      id: "unit02-lesson02-phase6",
      name: "Closing",
      title: "Reflection: From Logic to Automation",
      sequence: 6,
      summary:
        "Students reflect on the logic mastered, connect it to future automation, and preview the technical work ahead.",
      objectives: [
        "Summarize key takeaways about adjusting entries",
        "Connect accounting logic to upcoming automation tasks",
        "Identify personal growth in courage, adaptability, and persistence"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "The blueprint is ready. Sarah knows the four scenarios cold, and so do you. Next, the logic becomes code." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Logic Today, Automation Tomorrow",
          body: "Every 'if-then' you write in Excel will mirror the adjusting entries you mapped by hand."
        },
        {
          type: "paragraph",
          text: "Lesson 3 brings macros, VBA, and automation. Bring your blueprint and your confidence." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Lesson Reflection: Building Blocks Mastered",
            unitTitle: "Automation Analysis & Business Process Improvement",
            journalingFocus: "Connect adjusting entries to future automation work and personal growth.",
            entries: [
              {
                id: "u02l02-reflection-1",
                category: "courage",
                prompt: "How does understanding adjusting entries give you the courage to automate confidently? What happens if someone skips this step?",
                placeholder: "Explain why mastering the logic matters before writing code..."
              },
              {
                id: "u02l02-reflection-2",
                category: "adaptability",
                prompt: "How could you adapt Sarah's four-scenario blueprint to a different business model? Which patterns would stay the same?",
                placeholder: "Consider how accruals, deferrals, and depreciation show up in other industries..."
              },
              {
                id: "u02l02-reflection-3",
                category: "persistence",
                prompt: "What concept pushed you the most today and how did you push back?",
                placeholder: "Capture the moment you kept going even when the math or logic felt tough..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to link today’s logic to the upcoming automation",
          "Prompt students to note any lingering questions",
          "Preview Lesson 3’s focus on macros and automation scripts"
        ],
        facilitationTips: [
          "Invite a few volunteers to share one insight",
          "Collect anonymous questions to address at the start of Lesson 3"
        ],
        timingMinutes: 3,
        presenterNotes: "Celebrate the milestone—students now think like controllers preparing to automate."
      }
    }
  ]
}
