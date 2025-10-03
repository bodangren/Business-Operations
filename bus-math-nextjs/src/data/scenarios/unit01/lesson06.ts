import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson06Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mds5t7qxp0v3d9i52ti",
    lessonNumber: 6,
    title: "Integration & Dashboards: Decision-Ready Ledger",
    drivingQuestion:
      "How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?",
    durationMinutes: 45,
    focus: "Integrate driver tables, dashboards, and validation so TechStart delivers fast decision-ready updates to investors.",
    slug: "unit01-lesson06"
  },
  sharedResources: [
    {
      id: "unit01-ledger-integration-practice",
      kind: "dataset",
      title: "Unit 01 Scenario Integration Dataset",
      description: "CSV with Base, Stretch, Downside, and stress-test scenarios for wiring the dashboard switchboard.",
      path: "/resources/unit01-ledger-integration-practice.csv"
    }
  ],
  teacherGuidance: {
    overview:
      "Demonstrate Sarah's live dashboard, teach exact-match switching with validation, guide students through building KPIs and visual feedback, then release them to integrate the dataset, check mastery, and capture CAP reflections.",
    pacingHighlights: [
      "Hook dashboard demo + scenario pitfalls (7 minutes)",
      "Direct instruction on driver tables and syntax (12 minutes)",
      "Guided integration with validation + simulation (10 minutes)",
      "Independent build with dataset, checklist, and stretch goals (10 minutes)",
      "Assessment + reflection pairing (4 minutes)",
      "Closing synthesis + Lesson 07 preview (2 minutes)"
    ],
    assessments: [
      "Hook comprehension diagnostic",
      "Fill-in vocabulary check",
      "Guided practice comprehension check",
      "Independent phase self-check",
      "Reflection journal entries for CAP",
      "Optional ErrorCheckingSystem validation artifacts"
    ]
  },
  phases: [
    {
      id: "unit01-lesson06-phase1",
      name: "Hook",
      title: "Sarah's Live Dashboard Demo",
      sequence: 1,
      summary:
        "Students compare Sarah's hard-coded workbook to a decision-ready dashboard with scenario toggles, exact lookups, and expanding charts.",
      objectives: [
        "Contrast fragile dashboards with integrated driver tables",
        "Explain why exact-match lookups and IFNA/IFERROR protect decision speed",
        "Identify the KPIs investors need within the first minute of review"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "A client asks Sarah for one clean dashboard showing Base, Stretch, and Downside forecasts on demand. Her old workbook relies on separate tabs and static ranges, so every change breaks something." 
        },
        {
          type: "paragraph",
          text: "The upgraded version uses a named driver table, exact-match lookups with IFNA/IFERROR, and charts bound to structured references. Scenario toggles become instant, and investors get the KPIs they care about in seconds." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Before: Fragile Build",
          body: "Hard-coded ranges miss new rows, charts fall out of sync, and manual tab switching slows communication."
        },
        {
          type: "callout",
          intent: "tip",
          title: "After: Decision-Ready",
          body: "Driver tables feed exact lookups, charts expand automatically, and KPIs tell investors exactly what action to take."
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "FinancialDashboard",
          description: "Preview of the TechStart scenario dashboard used to hook students and anchor expectations.",
          data: {
            title: "TechStart Scenario Dashboard (Quick Preview)",
            mode: "read-only",
            highlights: [
              "Scenario dropdown drives every chart",
              "KPIs surface margin, cash days, and runway",
              "Color-coded tiles reflect validation thresholds"
            ]
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Integration Pitfalls and Dashboard Best Practices",
            description: "Predict stable build choices that make dashboards decision-ready.",
            allowRetry: true,
            showExplanations: true,
            questions: [
              {
                id: "u01l06-hook-1",
                prompt: "Sarah needs a dashboard that switches Base/Stretch/Downside by name. What lookup setting keeps it safe?",
                correctAnswer: "Exact match (0/FALSE) with IFNA/IFERROR",
                distractors: [
                  "Approximate match (1/TRUE) for faster speed",
                  "Wildcard match so any spelling works",
                  "No lookup—hard-code each chart to a tab"
                ],
                explanation: "Exact-match lookups plus error handling prevent silent failures and keep dashboards reliable."
              },
              {
                id: "u01l06-hook-2",
                prompt: "A chart stops updating when Sarah adds new rows. What likely caused it?",
                correctAnswer: "Chart points to a static A2:A20 range, not a Table column",
                distractors: [
                  "Excel can only show 20 rows in a chart",
                  "The dataset must be sorted A→Z to refresh",
                  "The sheet tab name changed and breaks all charts"
                ],
                explanation: "Binding visuals to structured references keeps them synced as data grows."
              },
              {
                id: "u01l06-hook-3",
                prompt: "An investor asks, ‘What should we do if margin drops below 20%?’ What belongs on Sarah’s dashboard?",
                correctAnswer: "A clear KPI card and an executive summary note tied to the threshold",
                distractors: [
                  "Hidden calculations so the dashboard stays simple",
                  "Ten tabs of supporting math for later reading",
                  "A one-time screenshot pasted into a slide deck"
                ],
                explanation: "Decision-ready dashboards pair KPIs with plain-language guidance at key thresholds."
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Clarity Under Pressure",
            duration: "3 minutes",
            description: "Discuss how to summarize a downside result in under two minutes for an investor.",
            prompts: [
              "Which KPIs should Sarah show first, and why?",
              "How do scenario names help decision-makers compare quickly?",
              "What one sentence should appear in the executive summary?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Highlight the contrast between broken and integrated dashboards",
          "Name the investor-facing KPIs students must surface later"
        ],
        facilitationTips: [
          "Prompt students to predict what would fail without exact matches",
          "Ask volunteers to narrate the dashboard as if pitching to a mentor"
        ],
        timingMinutes: 7,
        presenterNotes: "Capture student misconceptions about charts to address during guided practice." 
      }
    },
    {
      id: "unit01-lesson06-phase2",
      name: "Introduction",
      title: "From Model to Decision",
      sequence: 2,
      summary:
        "Students study driver tables, structured references, and validation syntax that keep dashboards investor-ready.",
      objectives: [
        "Configure driver tables with exact-match lookups and IFNA/IFERROR",
        "Bind charts and KPIs to structured references for automatic updates",
        "Define the KPIs and validation rules that power decision-ready summaries"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "One driver table controls the entire workbook. Scenario names flow through XLOOKUP with exact match, charts read Table columns, and KPIs stay linked to investor thresholds." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Exact Syntax Patterns",
          body: "Driver pull: =IFNA(XLOOKUP(Settings[@Scenario], Drivers[Scenario], Drivers[Price], \"Missing Scenario\"), \"Missing Scenario\"). INDEX/MATCH alternative: IFNA(INDEX(Drivers[Price], MATCH(Settings[@Scenario], Drivers[Scenario], 0)), \"Missing Scenario\"). Stale date flag: IF(Settings[@AsOfDate] < TODAY()-7, \"Stale AsOfDate\", \"Fresh\")."
        },
        {
          type: "callout",
          intent: "tip",
          title: "Professional Standards",
          body: "Single source of truth, exact-match lookups with friendly error messages, charts bound to table columns, validation on risky inputs, and documentation beside each control keep stakeholders aligned.",
          bullets: [
            "Reference Drivers[Scenario] for dropdowns and lookups",
            "Wrap every lookup with IFNA or IFERROR",
            "Document each validation rule with purpose and expected action"
          ]
        }
      ],
      components: [
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Vocabulary: Integration & Dashboards",
            items: [
              {
                id: "u01l06-fill-1",
                text: "Use a {blank} to store Base/Stretch/Downside drivers",
                answer: "driver table",
                hint: "A named table that feeds the model"
              },
              {
                id: "u01l06-fill-2",
                text: "Bind charts to {blank} so ranges expand with new rows",
                answer: "structured references",
                hint: "Table[Column] instead of A2:A999"
              },
              {
                id: "u01l06-fill-3",
                text: "Switch scenarios by name with XLOOKUP set to {blank} match",
                answer: "exact",
                hint: "MATCH 0 or FALSE"
              },
              {
                id: "u01l06-fill-4",
                text: "Wrap lookups with {blank} or IFNA to avoid silent errors",
                answer: "IFERROR",
                hint: "Provide friendly messages"
              },
              {
                id: "u01l06-fill-5",
                text: "Protect decision speed with clear {blank} like margin, runway, and cash days",
                answer: "KPIs",
                hint: "Key performance indicators"
              },
              {
                id: "u01l06-fill-6",
                text: "Flag outdated reports: compare AsOfDate to {blank}()",
                answer: "TODAY",
                hint: "Stale dates reduce trust"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Model the relationship between the driver table and the Settings dropdown",
          "Narrate why each validation rule supports investor confidence"
        ],
        facilitationTips: [
          "Have students highlight structured references in their formulas",
          "Invite quick shares of real dashboards students admire and why"
        ],
        timingMinutes: 12,
        presenterNotes: "Encourage notes on syntax patterns so students can reference them during the build." 
      }
    },
    {
      id: "unit01-lesson06-phase3",
      name: "Guided Practice",
      title: "Build the Scenario Switchboard",
      sequence: 3,
      summary:
        "Students coach Sarah through wiring the driver table, KPI engine, and validation feedback that power the dashboard.",
      objectives: [
        "Wire the Settings dropdown to control every lookup",
        "Calculate KPIs (revenue, margin, cash days, runway) with structured references",
        "Layer validation flags, executive summaries, and chart bindings for investor communication"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Guide Sarah through three build phases: wire the driver table controls, calculate KPIs, and add live feedback that keeps investors informed." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Step 1 — Wire Scenario Controls",
          body: "Import unit01-ledger-integration-practice.csv as a Drivers table. Create a Selected_Scenario dropdown on the Settings sheet pointing to Drivers[Scenario], then use XLOOKUP + IFNA to pull every driver into the Model sheet."
        },
        {
          type: "callout",
          intent: "story",
          title: "Step 2 — Build the Calculation Engine",
          body: "Translate drivers into KPIs. Revenue = Price × Volume. Gross Margin % compares profit to sales. Runway = (Revenue × Margin %) / Overhead. Cash Days = AR Days – AP Days."
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Step 3 — Layer Live Feedback",
          body: "Add validation for stale AsOfDate, negative costs, and AR above 90 days. Color KPI tiles based on thresholds and write an IF-based executive summary that names the KPI, compares to the target, and recommends an action." 
        },
        {
          type: "callout",
          intent: "question",
          title: "Think-Pair-Share",
          body: "Partner A tests the dropdown and reads the executive summary aloud. Partner B checks validation flags. Swap roles and identify one improvement before investors see the file." 
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "ErrorCheckingSystem",
          description: "Practice triggering validation alerts for risky inputs before investors catch them.",
          data: {
            scenarioId: "scenario-dashboard-validation",
            focus: "Stale dates, negative costs, missing scenarios, and KPI thresholds",
            guidance: "Use the simulation to rehearse plain-language warnings and follow-up actions."
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Partner QA Relay",
            duration: "3 minutes",
            description: "Students trade roles testing the dropdown, validation flags, and executive summary before investors review the file.",
            prompts: [
              "Partner A: Switch scenarios and read the summary aloud.",
              "Partner B: Verify every validation flag behaves as expected.",
              "Swap roles and name one improvement to make before the presentation."
            ]
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Check Your Guided Practice",
            description: "Confirm you can explain the heart of Sarah’s scenario switchboard before moving on.",
            showExplanations: true,
            questions: [
              {
                id: "u01l06-guided-1",
                prompt: "Why do we wrap the XLOOKUP formula in IFNA when pulling the driver values?",
                correctAnswer: "It shows a friendly message if the scenario name is mistyped or missing.",
                distractors: [
                  "It makes the lookup run faster than normal.",
                  "It allows approximate matches for new scenarios.",
                  "It turns the result into a chart automatically."
                ],
                explanation: "IFNA surfaces human-readable warnings so analysts fix naming issues before presenting."
              },
              {
                id: "u01l06-guided-2",
                prompt: "Sarah wants charts to stay linked when she adds a new scenario row. What should she do?",
                correctAnswer: "Use structured references like Drivers[Volume] so Excel expands ranges automatically.",
                distractors: [
                  "Copy the current cell references and lock them with dollar signs.",
                  "Convert the table back to a normal range before charting.",
                  "Type the numbers by hand into the chart setup."
                ],
                explanation: "Structured references keep visuals synced as the dataset grows."
              },
              {
                id: "u01l06-guided-3",
                prompt: "If AR Days are 32 and AP Days are 24, what should the Cash Days formula return, and what does it signal?",
                correctAnswer: "8 cash days, meaning money waits 8 days longer to arrive than it takes to leave.",
                distractors: [
                  "56 cash days, because you add the two numbers.",
                  "0 cash days, because the numbers cancel out.",
                  "-8 cash days, showing Sarah collects cash 8 days faster."
                ],
                explanation: "Cash Days = AR – AP. A positive value warns Sarah to tighten collections or stretch vendor terms."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Ensure students create the Settings dropdown before wiring formulas",
          "Model how executive summaries translate KPIs into investor actions"
        ],
        facilitationTips: [
          "Rotate to groups triggering validation flags to celebrate catches",
          "Ask students to justify color thresholds aloud to reinforce reasoning"
        ],
        timingMinutes: 10,
        presenterNotes: "Capture screenshots of successful dashboards for use in teacher slides and MCP documentation." 
      }
    },
    {
      id: "unit01-lesson06-phase4",
      name: "Independent Practice",
      title: "Integration Mastery Challenges",
      sequence: 4,
      summary:
        "Students lead the build: import the integration dataset, wire dropdowns, KPIs, visuals, validation, and executive summaries that respond instantly.",
      objectives: [
        "Import and structure the Drivers dataset for scenario switching",
        "Complete KPI calculations, visuals, and validation flags independently",
        "Craft concise executive summaries tied to KPI targets"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Now students own the build. They combine the Drivers table, scenario dropdown, calculations, charts, and validation into one investor-ready workbook." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Integration Dataset",
          body: "Download unit01-ledger-integration-practice.csv, import as a Drivers table, and keep stress-test rows like MissingScenario and Typo-Case to challenge validation logic." 
        },
        {
          type: "list",
          style: "ordered",
          items: [
            "Create Selected_Scenario with Data Validation referencing Drivers[Scenario] and note that names are case-sensitive.",
            "Use XLOOKUP + IFNA to pull driver values into a clean input block on the Model sheet.",
            "Calculate Revenue, Margin %, Cash Days, and Runway with structured references.",
            "Bind charts and KPI cards to table columns so visuals refresh instantly.",
            "Build validation flags for stale AsOfDate, negative costs, and AR Days above 90.",
            "Write an IF-based executive sentence naming the KPI, target, and recommended action."
          ]
        },
        {
          type: "callout",
          intent: "tip",
          title: "Investor-Ready Checklist",
          body: "Scenario switching works, visuals refresh, validation flags surface risks, KPIs compare to targets, formulas use tables or names, and the summary stays under 25 words.",
          bullets: [
            "Dropdown drives every lookup and shows friendly errors",
            "Charts/KPI tiles update with each scenario change",
            "Warnings highlight stale dates, negative costs, or long AR Days",
            "Margin % and Cash Days compare to clear targets",
            "Executive sentence states KPI, target, and action"
          ]
        },
        {
          type: "callout",
          intent: "question",
          title: "Executive Summary Inspiration",
          body: "Use sentence stems like ‘Stretch scenario holds {Margin%} above {Target}, so keep marketing spend steady,’ or ‘Downside cash gap is {CashDays} days (goal {Target}). Delay vendor payments 5 days.’ Challenge: stay under 25 words." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Stretch Yourself",
          body: "Add a waterfall chart that shows revenue dropping to margin, or create a slicer that filters scenarios by AsOfDate while staying linked to the same dropdown." 
        }
      ],
      datasets: [
        {
          id: "unit01-ledger-integration-practice",
          kind: "dataset",
          title: "Scenario Integration CSV",
          path: "/resources/unit01-ledger-integration-practice.csv",
          description: "Base, Stretch, Downside, plus stress-test scenarios for validation practice."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Quick Self-Check",
            description: "Confirm the must-have features before calling the model complete.",
            showExplanations: true,
            questions: [
              {
                id: "u01l06-independent-1",
                prompt: "After importing the CSV, what should you build first so everything responds to the same choice?",
                correctAnswer: "Create the Selected_Scenario dropdown that reads Drivers[Scenario].",
                distractors: [
                  "Insert the revenue chart because visuals motivate the team.",
                  "Write the executive summary sentence first to set the tone.",
                  "Format the Drivers table with colors before doing formulas."
                ],
                explanation: "The dropdown is the control center for every lookup and visualization." 
              },
              {
                id: "u01l06-independent-2",
                prompt: "Sarah tests an edge case with a negative UnitCost. What must a finished model do?",
                correctAnswer: "Show a validation flag so she knows the data is unsafe to present.",
                distractors: [
                  "Ignore the row and keep yesterday's numbers.",
                  "Close Excel automatically because the input is not real.",
                  "Do nothing—negatives are impossible to prevent."
                ],
                explanation: "Professional models surface risky inputs immediately, not silently ignore them." 
              },
              {
                id: "u01l06-independent-3",
                prompt: "Which detail belongs in Sarah’s one-sentence investor summary?",
                correctAnswer: "A clear callout of the key KPI compared to its target.",
                distractors: [
                  "A list of every formula in the workbook.",
                  "Step-by-step directions for adding chart titles.",
                  "Personal feelings about how fun the assignment was."
                ],
                explanation: "Investors want the KPI, the target, and the next action in one tight sentence." 
              }
            ]
          }
        },
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Scenario Switchboard Reflection",
            unitTitle: "Unit 1 — Smart Ledger Launch",
            entries: [
              {
                id: "u01l06-reflection-courage",
                category: "courage",
                prompt: "Where did you take a risk or try a new Excel skill while wiring the switchboard?",
                placeholder: "Describe the exact step that felt bold (for example, writing IFNA around XLOOKUP)..."
              },
              {
                id: "u01l06-reflection-adaptability",
                category: "adaptability",
                prompt: "What validation warning surprised you, and how did you adjust the model?",
                placeholder: "Explain how the flag helped you catch an issue and the change you made..."
              },
              {
                id: "u01l06-reflection-persistence",
                category: "persistence",
                prompt: "When your executive sentence read awkwardly, how did you revise it until it worked?",
                placeholder: "Share the edits you tried and how you kept the message data-driven..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Monitor how students describe their validation flags and executive summaries",
          "Encourage teams to test against every stress scenario before claiming completion"
        ],
        facilitationTips: [
          "Spotlight student sentences that nail KPI, target, and action",
          "Keep a progress board tracking which safeguards each team has verified"
        ],
        timingMinutes: 10,
        presenterNotes: "Use tracker notes to plan conferences for students needing extra validation support." 
      }
    },
    {
      id: "unit01-lesson06-phase5",
      name: "Assessment",
      title: "Integration & Dashboard Mastery",
      sequence: 5,
      summary:
        "Students verify their ability to switch scenarios, maintain chart linkage, and communicate decisions clearly to stakeholders.",
      objectives: [
        "Demonstrate exact-match switching with resilient visuals",
        "Explain validation and KPI feedback in investor terms",
        "Identify recommended actions when dashboards reveal risks"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This mastery check blends technical accuracy with decision framing. Show that your dashboard stays in sync and guides investors in one glance." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Performance Standards",
          body: "Investor-ready dashboards offer one place to decide: scenario toggle by name, live visuals, clear thresholds, and complete safeguards." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Career Connection",
          body: "Analysts and consultants build scenario dashboards that turn data into decisions. Your build maps directly to client deliverables." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Integration & Dashboard Mastery Check",
            description: "Focus on clarity, reliability, and auditability across every response.",
            questionBankRef: {
              bankId: "unit01-phase5",
              filter: {
                lessonIds: ["lesson06"]
              }
            },
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Remind students to connect every answer to investor needs",
          "Log which safeguards each student wants to revisit before Lesson 07"
        ],
        facilitationTips: [
          "Debrief missed questions by linking back to the dashboard build",
          "Celebrate concise explanations that tie KPI data to recommended actions"
        ],
        timingMinutes: 4,
        presenterNotes: "Collect mastery data to inform Lesson 07 production sprint groups." 
      }
    },
    {
      id: "unit01-lesson06-phase6",
      name: "Closing",
      title: "Present with Confidence",
      sequence: 6,
      summary:
        "Students capture CAP reflections, rehearse a one-minute investor script, and preview Lesson 07 production work.",
      objectives: [
        "Summarize how integration improved speed and clarity",
        "Prepare to present dashboards to stakeholders",
        "Identify next steps for Lesson 07 production sprint"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "You now have a decision-ready dashboard: faster switching, stable charts, clear KPIs, and validation that guards investor trust." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Synthesis & Preview",
          body: "Lesson 07 focuses on production: refine examples, run peer QA, and deliver polished executive summaries backed by your dashboard." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "CAP Reflection — Integration & Dashboards",
            unitTitle: "Unit 1 — Smart Ledger Launch",
            journalingFocus: "Draft the one-minute story you would tell an investor about your dashboard.",
            entries: [
              {
                id: "u01l06-closing-courage",
                category: "courage",
                prompt: "Which part of presenting your dashboard still feels risky, and how will you step into that moment?",
                placeholder: "Name the situation, the investor question you expect, and how you'll respond..."
              },
              {
                id: "u01l06-closing-adaptability",
                category: "adaptability",
                prompt: "When the dataset shifts next week, how will you adjust the dashboard without losing stability?",
                placeholder: "Describe the controls or checks you will revisit first..."
              },
              {
                id: "u01l06-closing-persistence",
                category: "persistence",
                prompt: "Which automation took the most iterations, and what convinced you to keep refining it?",
                placeholder: "Share the stuck moment and how you pushed through to a reliable result..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Invite students to rehearse their one-minute investor summary aloud",
          "Connect reflections to the production sprint expectations in Lesson 07"
        ],
        facilitationTips: [
          "Capture a few student summaries as exemplars for tomorrow",
          "Preview peer QA roles so students arrive ready to support one another"
        ],
        timingMinutes: 2,
        presenterNotes: "Use reflections to group students for Lesson 07 peer audit teams." 
      }
    }
  ]
}
