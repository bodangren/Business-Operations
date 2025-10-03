import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson07Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mds5t7qyamtivn9oq6",
    lessonNumber: 7,
    title: "Production Studio: Complete • QA • Present",
    drivingQuestion:
      "How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?",
    durationMinutes: 45,
    focus: "Finish Smart Ledger production with QA routines, reconciliation, and investor-ready communication.",
    slug: "unit01-lesson07"
  },
  sharedResources: [
    {
      id: "unit01-ledger-lesson07-practice",
      kind: "dataset",
      title: "Unit 01 Ledger QA Practice",
      description: "CSV mixture of clean entries and intentional errors for building Definition of Done checks.",
      path: "/resources/unit01-ledger-lesson07-practice.csv"
    }
  ],
  teacherGuidance: {
    overview:
      "Kick off production with investor stakes, review the QA ladder, guide students through Tier 1-3 checks, supervise independent stress tests, facilitate peer audits, and capture CAP reflections before the final polish lesson.",
    pacingHighlights: [
      "Hook story + standards diagnostic (7 minutes)",
      "Introduction to QA ladder and vocabulary (10 minutes)",
      "Guided QA lab with templates and simulations (12 minutes)",
      "Independent stress test + audit note drafting (10 minutes)",
      "Assessment with question bank + peer audit (4 minutes)",
      "Closing reflection + Lesson 08 preview (2 minutes)"
    ],
    assessments: [
      "Hook comprehension diagnostic",
      "Vocabulary fill-in for QA terminology",
      "Guided QA checklist artifacts",
      "Independent self-check questions",
      "Peer audit form submission",
      "CAP reflection journal"
    ]
  },
  phases: [
    {
      id: "unit01-lesson07-phase1",
      name: "Hook",
      title: "Production Kickoff: Investor-Ready by Today",
      sequence: 1,
      summary:
        "Students feel the urgency of delivering an audit-ready model and contrast failure cases with investor-ready examples.",
      objectives: [
        "Identify standards that make ledgers trustworthy under investor pressure",
        "Recognize fragile spreadsheet habits that erode confidence",
        "Commit to QA routines needed for today's production sprint"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah receives a 3 PM investor review request. She needs an audit-ready ledger and a one-screen summary. The stakes are real—exact references, reconciliation, and plain-language warnings matter." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Failure Case",
          body: "Hard-coded numbers overwrite formulas, approximate lookup matches return wrong clients, charts point to A1:C10, and no tie-out proves totals match."
        },
        {
          type: "callout",
          intent: "tip",
          title: "Ready Example",
          body: "XLOOKUP with exact match and IFNA messages, structured references and named ranges, charts bound to tables, and reconciliation notes that explain next steps."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Production Standards Check",
            description: "Confirm understanding of exact lookups, structured references, and reconciliation.",
            showExplanations: true,
            questions: [
              {
                id: "u01l07-hook-1",
                prompt: "In an investor-ready model, which lookup approach is correct?",
                correctAnswer: "Use XLOOKUP (or INDEX/MATCH) with exact match and wrap with IFNA",
                distractors: [
                  "Use VLOOKUP with approximate match for speed",
                  "Type values by hand to avoid formula errors",
                  "Use OFFSET with volatile recalculation"
                ],
                explanation: "Exact-match lookups plus IFNA protect accuracy and surface typos quickly."
              },
              {
                id: "u01l07-hook-2",
                prompt: "Charts should reference which kind of ranges?",
                correctAnswer: "Tables/structured references so visuals auto-expand",
                distractors: [
                  "Static ranges (A1:C10) for stability",
                  "Hidden sheets with copied numbers",
                  "Manual values entered into the chart"
                ],
                explanation: "Structured references keep charts aligned with new data." 
              },
              {
                id: "u01l07-hook-3",
                prompt: "Which is the best definition of reconciliation?",
                correctAnswer: "Tie-outs that prove totals match across sources (e.g., bank vs ledger)",
                distractors: [
                  "A colorful status page",
                  "Deleting rows until the totals agree",
                  "Hiding formulas to make the model cleaner"
                ],
                explanation: "Reconciliation builds trust by proving totals agree and errors are surfaced, not hidden." 
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Model Trust Under Pressure",
            duration: "3 minutes",
            description: "Discuss what investors expect from a ledger before reviewing a model meeting.",
            prompts: [
              "Which standards give investors confidence most quickly?",
              "Where does your current model still feel fragile?",
              "What would you check first before sending the file?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Name the investor stakes so students feel urgency for QA",
          "Contrast fragile habits with professional practices to set expectations"
        ],
        facilitationTips: [
          "Capture student commitments to revisit later in the lesson",
          "Invite quick pair shares about recent spreadsheet failures they've seen"
        ],
        timingMinutes: 7,
        presenterNotes: "Log common fragility concerns to target during Tier 2 and Tier 3 coaching." 
      }
    },
    {
      id: "unit01-lesson07-phase2",
      name: "Introduction",
      title: "QA Ladder and Learning Targets",
      sequence: 2,
      summary:
        "Students climb a quality assurance ladder from core safety checks to analyst-level stretch goals and reinforce vocabulary for investor-ready QA.",
      objectives: [
        "Describe Tier 1, Tier 2, and Tier 3 QA expectations",
        "Use exact-match vocabulary for lookup and reconciliation tasks",
        "Connect QA routines to investor trust"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Lesson 07 operates like a QA lab. Students climb a ladder: start with trial balance safety checks, then add professional enhancements, and finally tackle analyst-level stretch goals." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Tier 1 — Core Safety Checks",
          body: "Import Transactions as a table, compute trial balance difference with SUM(Debit) – SUM(Credit), and highlight obvious errors such as negative liabilities or zero-amount rows."
        },
        {
          type: "callout",
          intent: "story",
          title: "Tier 2 — Pro Moves",
          body: "Wrap lookups in IFNA/IFERROR for friendly messages, flag stale dates beyond 90 days, and round totals so reports show clean cents." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Tier 3 — Analyst Stretch",
          body: "Build a mini QA dashboard, replace static ranges with structured references, and write a concise audit note that states findings plus next steps."
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Why the Ladder Matters",
          body: "Investors expect models that expose issues quickly and explain actions. Each tier adds a layer of trust." 
        }
      ],
      components: [
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Key Terms for Investor-Ready Models",
            items: [
              {
                id: "u01l07-fill-1",
                text: "Use {blank} to catch lookup errors and show friendly messages.",
                answer: "IFNA",
                hint: "IFERROR also works when non-NA errors are possible."
              },
              {
                id: "u01l07-fill-2",
                text: "Excel Tables use {blank} references like Table1[Amount] that auto-expand.",
                answer: "structured",
                hint: "Structured references replace A1:C10."
              },
              {
                id: "u01l07-fill-3",
                text: "Switching from approximate matches to exact matches means setting match mode to {blank}.",
                answer: "0",
                hint: "Use 0 (exact) in MATCH or 'exact' in XLOOKUP."
              },
              {
                id: "u01l07-fill-4",
                text: "A {blank} range gives a readable name to a cell or region.",
                answer: "named",
                hint: "Named ranges keep assumptions clear."
              },
              {
                id: "u01l07-fill-5",
                text: "A good {blank} proves totals agree across sources and flags mismatches.",
                answer: "reconciliation",
                hint: "Tie-out notes connect ledger to bank statements."
              },
              {
                id: "u01l07-fill-6",
                text: "Scenario behavior should update KPIs and the {blank} summary automatically.",
                answer: "executive",
                hint: "Executive summary stays in sync with KPI changes."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Frame the ladder as a climb—students choose the next rung when ready",
          "Keep vocabulary visible so students use professional language"
        ],
        facilitationTips: [
          "Ask students which tier they will focus on during independent practice",
          "Collect sample audit notes to use as mentor feedback later"
        ],
        timingMinutes: 10,
        presenterNotes: "Record which groups aim for Tier 3 to tailor coaching." 
      }
    },
    {
      id: "unit01-lesson07-phase3",
      name: "Guided Practice",
      title: "QA Lab: Trial Balance First",
      sequence: 3,
      summary:
        "Students walk through Tier 1 safety checks, scaffold Tier 2 enhancements, and connect error simulations to their ledger build.",
      objectives: [
        "Import and balance the Transactions table using structured references",
        "Apply Tier 2 enhancements such as lookup error handling and stale date flags",
        "Use simulations to understand how professional tools surface data issues"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Follow the guided steps to stabilize the ledger. Pause after each action and verify that the numbers react as expected." 
        },
        {
          type: "list",
          style: "ordered",
          items: [
            "Import unit01-ledger-lesson07-practice.csv as a Transactions table.",
            "Add a Status column with IF([@Debit]=0, \"Review\", \"\") so zero-amount rows stand out.",
            "Calculate trial balance variance: SUM(Transactions[Debit]) - SUM(Transactions[Credit]).",
            "Display a message: IF(variance=0, \"Balanced\", \"Out of Balance — investigate\").",
            "Filter to locate invalid accounts or negative liabilities and document fixes."
          ]
        },
        {
          type: "callout",
          intent: "question",
          title: "Partner Check",
          body: "Share your balance result with a partner. If both are balanced, swap filters and hunt for a new error you missed." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Tier 2 Enhancements",
          body: "Wrap XLOOKUP with IFNA for friendly prompts, flag stale dates older than 90 days, and round totals so reports show clean cents."
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "SpreadsheetWrapper",
          description: "Trial balance scratch pad for practicing Tier 2 formulas before editing the live file.",
          data: {
            templateId: "trial-balance-template",
            includedFeatures: [
              "Debit/Credit variance scratch pad",
              "Cells for IFNA lookup practice",
              "Rows for stale date logic"
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Balance Buddy Check",
            duration: "2 minutes",
            description: "Partners validate each other's balance status and identify next errors to chase.",
            prompts: [
              "Share your balance variance and the message formula you used.",
              "Exchange filters to spot errors you might have missed.",
              "Plan one Tier 2 enhancement to add together."
            ]
          }
        },
        {
          type: "dragAndDrop",
          component: "ErrorCheckingSystem",
          description: "Interactive simulation showing how professional dashboards flag risky data.",
          data: {
            scenarioId: "ledger-qa-alerts",
            focus: "Invalid accounts, stale dates, negative liabilities",
            guidance: "Match each alert to a fix in your workbook and clear at least one warning before moving on."
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Ensure every student records the trial balance variance before advancing",
          "Model how to narrate IFNA logic to a partner to reinforce understanding"
        ],
        facilitationTips: [
          "Circulate with a checklist tracking which groups have cleared Tier 1",
          "Encourage students to screenshot simulation alerts for documentation"
        ],
        timingMinutes: 12,
        presenterNotes: "Capture common errors discovered to inform the independent practice instructions." 
      }
    },
    {
      id: "unit01-lesson07-phase4",
      name: "Independent Practice",
      title: "QA Stress Test",
      sequence: 4,
      summary:
        "Students work through the QA ladder with the practice dataset, layering trial balance checks, validation flags, and investor-ready audit notes.",
      objectives: [
        "Complete Tier 1-3 QA tasks using the production dataset",
        "Document issues with plain-language ErrorNote messages",
        "Draft concise audit notes that guide investor decisions"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Use independent work time to prove the ledger spots its own problems. Start with trial balance basics, then layer pro checks and stretch goals as you gain confidence." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Practice Dataset",
          body: "Import unit01-ledger-lesson07-practice.csv as a Transactions table. The mix of clean entries and messy edge cases prepares you for real investor work." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Tier 1 — Foundation",
          body: "Ensure SUM(Transactions[Debit]) equals SUM(Transactions[Credit]). Create an ErrorNote column for invalid accounts or negative liabilities and document at least two issues." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Tier 2 — Pro",
          body: "Wrap lookups with IFNA, add a Stale? column using IF(TODAY()-[@Date]>90, \"Stale\", \"OK\"), and use ROUND to present clean currency." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Tier 3 — Analyst Stretch",
          body: "Build a mini QA dashboard with error counts and status icons, replace static ranges with structured references, and write a one-sentence audit note summarizing findings." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Audit Note Examples",
          body: "Balanced with flags: ‘Ledger balances but flagged {count} invalid accounts; update vendor list before publishing.’ Out of balance: ‘Debits trail credits by ${variance}; review invoices dated before {date} for typos.’ Clean pass: ‘All transactions reconcile and no validation flags triggered; ready for investor packet.’"
        },
        {
          type: "callout",
          intent: "tip",
          title: "Pro Tip",
          body: "Duplicate your sheet before stress testing edge cases. Compare ‘Before QA’ and ‘After QA’ to measure how much cleaner your ledger becomes." 
        }
      ],
      datasets: [
        {
          id: "unit01-ledger-lesson07-practice",
          kind: "dataset",
          title: "Ledger QA Practice CSV",
          path: "/resources/unit01-ledger-lesson07-practice.csv",
          description: "Intentional mix of clean and flawed entries for QA drills."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "QA Self-Check",
            description: "Verify you understand the purpose of each QA flag and audit note.",
            showExplanations: true,
            questions: [
              {
                id: "u01l07-independent-1",
                prompt: "What does it mean if SUM(Debit) - SUM(Credit) returns a non-zero number after import?",
                correctAnswer: "Your ledger is out of balance and you should investigate which rows caused the difference.",
                distractors: [
                  "Excel miscalculated, so close and reopen the workbook.",
                  "It proves the ledger is clean and ready to publish.",
                  "Delete all rows that contain negative numbers."
                ],
                explanation: "Non-zero variance signals imbalance; trace the rows to diagnose the issue." 
              },
              {
                id: "u01l07-independent-2",
                prompt: "How should the Stale? column respond when TODAY() - Date > 90?",
                correctAnswer: "Show a warning like 'Stale' so Sarah knows to follow up on old invoices.",
                distractors: [
                  "Display a dash because age never matters.",
                  "Automatically delete the row to rebalance.",
                  "Convert the date to text so it cannot change."
                ],
                explanation: "Flagging stale transactions prompts timely follow-up without deleting history." 
              },
              {
                id: "u01l07-independent-3",
                prompt: "Which detail makes an audit note investor-ready?",
                correctAnswer: "Stating the number of errors found and the next corrective action.",
                distractors: [
                  "Listing every formula alphabetically.",
                  "Sharing how many minutes the build required.",
                  "Thanking the reader for their patience."
                ],
                explanation: "Investors need signal: quantify issues and propose a next move." 
              }
            ]
          }
        },
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "QA Production Reflection",
            unitTitle: "Unit 1 — Smart Ledger Launch",
            entries: [
              {
                id: "u01l07-reflection-courage",
                category: "courage",
                prompt: "Where did you push outside your comfort zone while chasing a ledger error today?",
                placeholder: "Describe the error, the Excel feature you tried, and how it felt to keep digging..."
              },
              {
                id: "u01l07-reflection-adaptability",
                category: "adaptability",
                prompt: "What QA flag could you reuse on the next project, and how would you adapt it?",
                placeholder: "Explain which rule worked here and what you would tweak for a different dataset..."
              },
              {
                id: "u01l07-reflection-persistence",
                category: "persistence",
                prompt: "How did you refine your audit sentence until it was clear and data-driven?",
                placeholder: "Share the edits you made and what finally made the sentence investor-ready..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Check that each student documents at least one issue and recommended action",
          "Encourage ambitious students to tackle Tier 3 mini dashboards"
        ],
        facilitationTips: [
          "Run quick desk checks for trial balance variance before approving stretch work",
          "Collect sample audit notes to share during the peer review"
        ],
        timingMinutes: 10,
        presenterNotes: "Note which students are ready to lead peer audits in Phase 5." 
      }
    },
    {
      id: "unit01-lesson07-phase5",
      name: "Assessment",
      title: "Audit Decisions & Peer Review",
      sequence: 5,
      summary:
        "Students complete a mastery check on audit decisions and conduct a peer review using the Definition of Done checklist.",
      objectives: [
        "Demonstrate understanding of investor-ready QA standards",
        "Evaluate a peer's ledger for exact lookups, reconciliation, and documentation",
        "Provide actionable feedback tied to Definition of Done criteria"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Investor-ready models deliver clarity, reliability, and a visible audit trail. This assessment confirms those habits." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Investor-Ready Standards",
          body: "Clarity, reliability, audit trail, and documented assumptions. If a number changes, every linked output must update without manual edits." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Audit Decisions & Tradeoffs",
            description: "Answer questions that tie QA choices to investor trust.",
            showExplanations: true,
            questionBankRef: {
              bankId: "unit01-phase5",
              filter: {
                lessonIds: ["lesson07"]
              }
            }
          }
        },
        {
          type: "peerReview",
          component: "PeerCritiqueForm",
          data: {
            projectTitle: "Smart Ledger – Investor Readiness",
            defaultPeerName: "Partner",
            instructions: "Use the Definition of Done checklist to confirm exact lookups, structured references, reconciliation, chart bindings, and error handling. Capture one strength and one concrete improvement."
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Ensure peer reviewers reference Definition of Done criteria while giving feedback",
          "Collect comprehension scores to identify students needing more QA practice"
        ],
        facilitationTips: [
          "Encourage partners to verify audit notes together",
          "Share exemplar feedback highlighting specificity and next steps"
        ],
        timingMinutes: 4,
        presenterNotes: "Log peer review highlights to inform stakeholder prep in Lesson 08." 
      }
    },
    {
      id: "unit01-lesson07-phase6",
      name: "Closing",
      title: "Readiness & Handoff",
      sequence: 6,
      summary:
        "Students celebrate moving from 'it calculates' to 'it convinces', record CAP reflections, and preview Lesson 08 polish work.",
      objectives: [
        "Summarize how QA routines built investor trust",
        "Document CAP growth during production",
        "Preview next steps for stakeholder review"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Today you moved from 'it calculates' to 'it convinces.' Exact references, validation, reconciliation, and audit notes now support your model." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Preview",
          body: "Lesson 08 focuses on final polish: refine visuals, tighten the executive summary, and rehearse live scenario switching for stakeholder Q&A." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "CAP Reflection: Production Studio",
            unitTitle: "Unit 1 — Smart Ledger Launch",
            entries: [
              {
                id: "u01l07-closing-courage",
                category: "courage",
                prompt: "Where did you show courage—speaking up about an error or presenting a tough finding?",
                placeholder: "Describe the moment and why it mattered to the model’s credibility."
              },
              {
                id: "u01l07-closing-adaptability",
                category: "adaptability",
                prompt: "What formula or reference did you change to make the model more reliable?",
                placeholder: "Explain what was fragile before and how you improved it."
              },
              {
                id: "u01l07-closing-persistence",
                category: "persistence",
                prompt: "What bug took the longest to fix? How did you finally solve it?",
                placeholder: "Note the steps you tried and what you learned from the process."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Celebrate specific QA wins students documented",
          "Connect reflections directly to the upcoming stakeholder rehearsal"
        ],
        facilitationTips: [
          "Invite quick shares of audit sentences students are proud of",
          "Preview Lesson 08 deliverables so students know what to polish"
        ],
        timingMinutes: 2,
        presenterNotes: "Use reflections to assign roles for Lesson 08 peer review stations." 
      }
    }
  ]
}
