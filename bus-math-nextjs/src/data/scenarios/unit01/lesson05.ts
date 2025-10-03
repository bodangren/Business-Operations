import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson05Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mds5t7qth7rdjsqegg",
    lessonNumber: 5,
    title: "Advanced Ledger Automation: Dynamic Trial Balance & Posting Validator",
    drivingQuestion:
      "How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?",
    durationMinutes: 45,
    focus: "Build a self-auditing ledger with posting validators, dynamic method switching, and professional safeguards that impress investors.",
    slug: "unit01-lesson05"
  },
  sharedResources: [
    {
      id: "unit01-ledger-advanced-practice",
      kind: "dataset",
      title: "Unit 01 Advanced Ledger Practice",
      description: "CSV dataset filled with missing IDs, stale dates, and edge cases for stress-testing automation controls.",
      path: "/resources/unit01-ledger-advanced-practice.csv"
    }
  ],
  teacherGuidance: {
    overview:
      "Contrast fragile spreadsheets with robust automation, coach students through building posting validators and trial balance controls, then release them to stress-test with realistic edge cases before assessing mastery and reflecting on CAP growth.",
    pacingHighlights: [
      "Hook comparison + diagnostic check (7 minutes)",
      "Direct instruction on advanced formulas (12 minutes)",
      "Guided build with ErrorCheckingSystem practice (10 minutes)",
      "Independent stress test using advanced dataset (10 minutes)",
      "Phase 5 mastery pull from question bank (4 minutes)",
      "Reflection + Lesson 06 preview (2 minutes)"
    ],
    assessments: [
      "Hook comprehension diagnostic",
      "Fill-in vocabulary check",
      "ErrorCheckingSystem guided practice",
      "Advanced dataset self-assessment checklist",
      "Phase 5 question bank assessment",
      "CAP-focused reflection journal"
    ]
  },
  phases: [
    {
      id: "unit01-lesson05-phase1",
      name: "Hook",
      title: "Fragile vs. Robust Ledger Automation",
      sequence: 1,
      summary:
        "Students experience how Sarah's ledger breaks under growth pressure and identify the automation safeguards required for investor trust.",
      objectives: [
        "Compare fragile spreadsheet habits with robust automation patterns",
        "Predict which controls prevent silent errors as TechStart scales",
        "Explain why investors demand visible safeguards and documentation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah's TechStart Solutions is landing back-to-back projects—new invoices, partial payments, and refunds hit her books every week. The manual formulas she copied from Lesson 04 are beginning to crack under the pressure." 
        },
        {
          type: "paragraph",
          text: "To keep investor confidence, she needs a ledger that adapts instantly, flags mistakes, and makes cash versus accrual decisions clear. Today's lesson stresses the difference between fragile builds and professional, self-auditing systems." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Fragile Build (Before)",
          body: "Hard-coded totals, missing AccountID flags, manual method switching, and hidden out-of-balance errors leave investors guessing and Sarah scrambling.",
          bullets: [
            "Totals ignore new rows because of fixed ranges",
            "Missing AccountIDs pass silently with blank cells",
            "Cash versus accrual requires manual copy-paste",
            "Trial balance issues go unnoticed for weeks"
          ]
        },
        {
          type: "callout",
          intent: "tip",
          title: "Robust Build (After)",
          body: "Structured references, XLOOKUP with IFERROR, dynamic method toggles, and trial balance warnings create a ledger Sarah can defend to any mentor or investor.",
          bullets: [
            "Tables expand automatically and drive all totals",
            "Lookup safeguards expose missing IDs instantly",
            "Method switch is controlled by a single Settings cell",
            "Trial balance control declares Balanced or Out of Balance in plain language"
          ]
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Why This Matters",
          body: "A self-auditing ledger protects cash flow, prevents tax mistakes, and frees Sarah to focus on client work while investors see professional controls in action."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Diagnostic: Advanced Automation Readiness",
            description: "Predict how a professional ledger should behave under stress.",
            allowRetry: true,
            showExplanations: true,
            questions: [
              {
                id: "u01l05-hook-1",
                prompt: "A client payment is posted with a missing AccountID. What should a robust model do?",
                correctAnswer: "Flag the missing ID and prevent totals from updating silently",
                distractors: [
                  "Ignore the row and keep totals unchanged",
                  "Guess the account based on description text",
                  "Hide the error to keep the sheet clean"
                ],
                explanation: "Investor-ready ledgers surface problems immediately and never hide data issues."
              },
              {
                id: "u01l05-hook-2",
                prompt: "Sarah switches from cash to accrual view. What should change?",
                correctAnswer: "Recognition timing updates dynamically without breaking formulas",
                distractors: [
                  "Only chart colors change",
                  "Nothing changes—method doesn't affect totals",
                  "The workbook requires manual copy-paste updates"
                ],
                explanation: "Dynamic method switching is a hallmark of professional automation."
              },
              {
                id: "u01l05-hook-3",
                prompt: "Debit and credit totals disagree by $125. The right behavior is to:",
                correctAnswer: "Show a visible Out-of-Balance warning and isolate the issue",
                distractors: [
                  "Round totals to make them match",
                  "Delete the last row to reset the error",
                  "Export to PDF to lock the numbers"
                ],
                explanation: "Self-auditing systems highlight imbalances and help teams trace the cause quickly."
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Risk and Investor Trust",
            duration: "3 minutes",
            description: "Discuss how automation safeguards protect TechStart during rapid growth.",
            prompts: [
              "What business risks appear when totals drift silently?",
              "Which safeguard would you build first to earn investor confidence?",
              "How would you explain Sarah's reliability upgrade in one sentence?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Dramatize the pain of silent ledger failures before introducing safeguards",
          "Use investor language—controls, audit trail, reliability—throughout the discussion"
        ],
        facilitationTips: [
          "Invite students to share personal spreadsheet frustrations to build relevance",
          "Capture class predictions about automation challenges to revisit in later phases"
        ],
        timingMinutes: 7,
        presenterNotes: "Keep energy high—students should feel the urgency to harden their models." 
      }
    },
    {
      id: "unit01-lesson05-phase2",
      name: "Introduction",
      title: "Professional-Grade Automation Patterns",
      sequence: 2,
      summary:
        "Students study exact syntax for XLOOKUP, SUMIFS, structured references, and method toggles that keep Sarah's ledger reliable.",
      objectives: [
        "Write lookups that surface missing AccountIDs with IFERROR",
        "Use SUMIFS and structured references to automate posting checks",
        "Document safeguards that communicate reliability to stakeholders"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Professional automation begins with precise formulas. Sarah builds Tables so ranges expand, wraps every lookup with IFERROR, and documents each safeguard so mentors understand her logic." 
        },
        {
          type: "paragraph",
          text: "SUMIFS compares debits and credits per account, while a global trial balance check keeps totals aligned. A single Settings cell flips cash to accrual without rewriting formulas." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Exact Syntax References",
          body: "Account mapping: =IFERROR(XLOOKUP([@AccountID], Accounts[AccountID], Accounts[AccountName], \"Missing ID\"), \"Missing ID\"). Trial balance difference: SUMIFS debits minus SUMIFS credits. Method switch: IF(Settings[@Method]=\"Cash\", ReceivedDate, EarnedDate)."
        },
        {
          type: "callout",
          intent: "tip",
          title: "Professional Standards",
          body: "Structure tables with readable names, add documentation notes beside every control, block invalid inputs with Data Validation, and test edge cases before trusting results.",
          bullets: [
            "Use structured references for every formula",
            "Explain each control's purpose in plain language",
            "Design warnings that stay visible at all times"
          ]
        }
      ],
      components: [
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Advanced Vocabulary Check",
            items: [
              {
                id: "u01l05-fill-1",
                text: "Use {blank}(lookup_value, lookup_array, return_array, [if_not_found]) with IFERROR to handle missing AccountIDs",
                answer: "XLOOKUP",
                hint: "Modern lookup replacement for VLOOKUP/INDEX-MATCH"
              },
              {
                id: "u01l05-fill-2",
                text: "SUM totals by account using {blank}(sum_range, criteria_range1, criteria1, ...)",
                answer: "SUMIFS",
                hint: "Multi-criteria summation for posting checks"
              },
              {
                id: "u01l05-fill-3",
                text: "Avoid broken ranges by using {blank}[Column] instead of A2:A999",
                answer: "Structured References",
                hint: "Excel Tables keep formulas dynamic"
              },
              {
                id: "u01l05-fill-4",
                text: "Wrap lookups with {blank}(value, value_if_error) to prevent silent failures",
                answer: "IFERROR",
                hint: "Surface issues without crashing formulas"
              },
              {
                id: "u01l05-fill-5",
                text: "Create dropdowns and block invalid entries using Data {blank}",
                answer: "Validation",
                hint: "Lists, numbers, dates with rules"
              },
              {
                id: "u01l05-fill-6",
                text: "Switch recognition timing with a single cell toggle (Cash vs {blank})",
                answer: "Accrual",
                hint: "Method switching controlled by logic"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Model IFERROR wrapping every lookup before students practice independently",
          "Emphasize documentation beside controls to reinforce investor communication"
        ],
        facilitationTips: [
          "Project exact formulas and annotate why each argument matters",
          "Invite students to share real-world errors they've fixed with data validation"
        ],
        timingMinutes: 12,
        presenterNotes: "Encourage screenshots of finished formulas for portfolios and reflections." 
      }
    },
    {
      id: "unit01-lesson05-phase3",
      name: "Guided Practice",
      title: "Posting Validator and Dynamic Trial Balance",
      sequence: 3,
      summary:
        "Students follow a sequenced build to create posting validation, method switching, and trial balance controls that surface issues immediately.",
      objectives: [
        "Construct Tables and structured references that feed every control",
        "Implement posting validation and global trial balance alerts",
        "Test safeguards using the ErrorCheckingSystem simulation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Work alongside Sarah to convert fragile formulas into a guided control system. Every step reinforces visible safeguards and investor-ready documentation." 
        },
        {
          type: "list",
          style: "ordered",
          items: [
            "Create Transactions and Accounts tables with all required columns (Date, DocNo, AccountID, Debit, Credit, EarnedDate, ReceivedDate).",
            "Map accounts with IFERROR + XLOOKUP so missing IDs show \"Missing ID\" instead of blank cells.",
            "Calculate per-account posting differences using SUMIFS on structured references.",
            "Compare total debits and credits for a global trial balance status message.",
            "Add a Settings table to toggle Cash versus Accrual recognition across formulas.",
            "Apply Data Validation to block negative amounts and enforce AccountID patterns.",
            "Write short documentation notes beside each safeguard to explain purpose and expected behavior."
          ]
        },
        {
          type: "callout",
          intent: "tip",
          title: "Safeguards and Gotchas",
          body: "Always rely on Table columns, wrap lookups with error handling, and test with missing IDs, stale dates, and duplicates. Warnings should stay visible—not hidden in white text or filtered rows."
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "ErrorCheckingSystem",
          description: "Interactive simulation for designing validation rules that catch ledger issues before investors do.",
          data: {
            scenarioId: "ledger-error-checks",
            focus: "Posting validation, trial balance monitoring, and data quality rules",
            guidance: "Use the simulation to rehearse how each safeguard behaves with realistic business data."
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Check that students rename tables consistently before building formulas",
          "Model how documentation notes translate safeguard logic into investor language"
        ],
        facilitationTips: [
          "Project the spreadsheet and narrate each formula change",
          "Encourage pairs to predict the warning message before testing"
        ],
        timingMinutes: 10,
        presenterNotes: "Collect screenshots of balanced trial balance indicators for student portfolios." 
      }
    },
    {
      id: "unit01-lesson05-phase4",
      name: "Independent Practice",
      title: "Stress Test with Advanced Edge Cases",
      sequence: 4,
      summary:
        "Students download a realistic dataset filled with missing IDs, stale dates, and negative amounts to prove their automation handles growth.",
      objectives: [
        "Import realistic data and maintain structured references",
        "Apply safeguards that flag input issues immediately",
        "Connect automation results to investor communication"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah imports a messy CSV with duplicates, missing IDs, and partial payments. She relies on structured references and validation rules to keep automation trustworthy." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Advanced Practice Data",
          body: "Download unit01-ledger-advanced-practice.csv. Build Transactions and Accounts tables, then watch how your controls respond when you add or fix rows." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Self-Assessment Checklist",
          body: "Confirm tables auto-update, missing IDs trigger alerts, trial balance status flips correctly, method switches cascade, and documentation explains each safeguard.",
          bullets: [
            "Structured references drive every formula",
            "Warnings appear for missing IDs and stale dates",
            "Trial balance shows Balanced or Out of Balance with plain language",
            "Cash versus Accrual toggle updates downstream outputs",
            "Data validation blocks negative amounts and invalid dates",
            "Notes describe each control's role"
          ]
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Business Focus",
          body: "Link flagged issues to cash flow and investor updates. Explain next steps before sharing deliverables with mentors." 
        }
      ],
      datasets: [
        {
          id: "unit01-ledger-advanced-practice",
          kind: "dataset",
          title: "Advanced Ledger Practice CSV",
          path: "/resources/unit01-ledger-advanced-practice.csv",
          description: "Edge cases include missing AccountIDs, partial payments, stale AsOfDate values, and negative amounts."
        }
      ],
      components: [],
      teacherNotes: {
        keyPoints: [
          "Monitor how students describe their safeguards in documentation notes",
          "Encourage linking each flagged issue to a real business decision"
        ],
        facilitationTips: [
          "Prompt students to narrate what changes when they fix a data error",
          "Collect sample explanations to share during the assessment phase"
        ],
        timingMinutes: 10,
        presenterNotes: "Capture quick student check-ins to log readiness for the mastery assessment." 
      }
    },
    {
      id: "unit01-lesson05-phase5",
      name: "Assessment",
      title: "Investor-Ready Ledger Mastery",
      sequence: 5,
      summary:
        "Students demonstrate advanced automation, articulate business judgment, and validate their model against professional standards.",
      objectives: [
        "Verify technical mastery of automation safeguards",
        "Explain how controls support investor confidence",
        "Identify next steps when the model surfaces issues"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This mastery check mirrors interview prompts for analysts and consultants. Answer every question with technical precision and business reasoning." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Proficiency Standards",
          body: "Investor-ready models update dynamically, surface errors in plain language, and include documentation so reviewers understand decisions without guessing."
        },
        {
          type: "callout",
          intent: "story",
          title: "Career Connection",
          body: "Automation habits from this assessment map directly to roles in finance, consulting, and operations where dashboards and controls are daily expectations." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Investor-Ready Ledger Assessment",
            description: "Focus on reliability, clarity, and auditability across every response.",
            questionBankRef: {
              bankId: "unit01-phase5",
              filter: {
                lessonIds: ["lesson05"]
              }
            },
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Remind students that question explanations reinforce why controls matter to investors",
          "Encourage students to annotate which safeguards they will improve next"
        ],
        facilitationTips: [
          "Offer mini-conferences for students scoring below mastery thresholds",
          "Collect exemplar responses to highlight strong business reasoning"
        ],
        timingMinutes: 4,
        presenterNotes: "Log assessment completion in gradebook notes to track readiness for Unit 01 showcase." 
      }
    },
    {
      id: "unit01-lesson05-phase6",
      name: "Closing",
      title: "Automation Wins and CAP Reflection",
      sequence: 6,
      summary:
        "Students synthesize reliability upgrades, capture CAP reflections, and preview how dashboards extend these controls in Lesson 06.",
      objectives: [
        "Document growth in courage, adaptability, and persistence",
        "Explain how automation safeguards protect investor trust",
        "Set intentions for connecting controls to dashboards next lesson"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah now runs a self-auditing ledger that handles growth without panic. Posting validators, missing-ID warnings, and trial balance alerts give investors confidence." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Synthesis",
          body: "You automated validation, handled missing IDs, kept totals balanced, and blocked bad inputs. These foundations carry directly into Lesson 06 dashboard integration." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Advanced Ledger Automation Reflection",
            unitTitle: "Unit 1 — Smart Ledger Launch",
            journalingFocus: "Highlight the control that most improved investor confidence today.",
            entries: [
              {
                id: "u01l05-reflection-courage",
                category: "courage",
                prompt: "Describe a moment when your formulas failed. How did you face the uncertainty and keep going?",
                placeholder: "Explain what broke, how you felt, and your first step forward..."
              },
              {
                id: "u01l05-reflection-adaptability",
                category: "adaptability",
                prompt: "What change did you make after testing edge cases like missing IDs, stale dates, or negatives?",
                placeholder: "Write about the specific adjustment and why it improved reliability..."
              },
              {
                id: "u01l05-reflection-persistence",
                category: "persistence",
                prompt: "Which safeguard took the longest to get right? What kept you working until it was reliable?",
                placeholder: "Share the toughest step and your strategy to finish it..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Celebrate specific control wins students documented in their models",
          "Connect reflections to CAP competencies to reinforce program language"
        ],
        facilitationTips: [
          "Invite a few students to share a reflection highlight with the class",
          "Preview how dashboards will showcase these safeguards for mentors"
        ],
        timingMinutes: 2,
        presenterNotes: "Collect exit-ticket highlights to inform coaching during Lesson 06 integration." 
      }
    }
  ]
}
