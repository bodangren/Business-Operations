import { LessonScenario } from "@/types/lesson-scenarios"

export const unit02Lesson01Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrhkhm79v8qau43696",
    unitTitle: "Unit 2: Month-End Wizard",
    lessonId: "mds5v4twc0o3z3l8ecg",
    lessonNumber: 1,
    title: "Launch & Explore: CFO's Month-End Challenge",
    drivingQuestion: "How can we cut month-end closing from two days to two hours without losing GAAP accuracy?",
    durationMinutes: 45,
    focus: "Help students experience Sarah's automation breakthrough and analyze why GAAP-compliant month-end systems matter.",
    slug: "unit02-lesson01"
  },
  sharedResources: [
    {
      id: "month-end-nightmare-video",
      kind: "video",
      title: "The Automation Breakthrough: Conquering the Month-End Nightmare",
      description: "Sarah explains how a failed weekend reconciliation pushed her to automate TechStart's month-end close.",
      url: "https://www.youtube.com/watch?v=1O_YHSGpZDo"
    }
  ],
  teacherGuidance: {
    overview:
      "Introduce Sarah's next operational hurdle, connect automation to GAAP expectations, and coach students through process analysis activities that set up later technical lessons.",
    pacingHighlights: [
      "Hook video + empathy discussion (5 minutes)",
      "Narrative unpack + comprehension + fill-in-the-blank review (12 minutes)",
      "Guided Shoebox Receipt analysis with drag-and-drop diagnostics (12 minutes)",
      "Independent practice with restaurant and e-commerce scenarios (8 minutes)",
      "Formative assessment + applied automation decision check (5 minutes)",
      "Reflection and lesson preview (3 minutes)"
    ],
    assessments: [
      "Phase 2 comprehension check and vocabulary fill-in",
      "Phase 4 automation analysis comprehension check",
      "Phase 5 question bank pull (Unit 02 Lesson 01)"
    ]
  },
  phases: [
    {
      id: "unit02-lesson01-phase1",
      name: "Hook",
      title: "Weekend Nightmare: The Automation Wake-Up Call",
      sequence: 1,
      summary:
        "Students watch Sarah describe her first month-end close, analyze the pain points, and surface why automation becomes a survival tool.",
      objectives: [
        "Understand how Sarah's first retainer client created new administrative strain",
        "Identify the hidden costs of manual reconciliations and error hunts",
        "Connect mentor feedback to the unit's driving automation question"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah Chen felt unstoppable after launching TechStart Solutions. A monthly retainer with a local fitness studio proved her services had real market value and predictable revenue." 
        },
        {
          type: "paragraph",
          text: "That win exposed a new weakness. When the month ended, Sarah spent her entire weekend reconciling bank transactions against her 'smart' but still manual ledger. Typos, missed subscriptions, and copy-paste errors kept derailing her totals." 
        },
        {
          type: "paragraph",
          text: "Mentor Marcus Rodriguez was blunt: the business could not scale if Sarah's time disappeared into clerical work. He pushed her to stop thinking about record-keeping and start building automation that checks the math for her." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Why This Matters",
          body: "Sarah's 'weekend nightmare' is common in real companies. When leaders burn time on preventable manual tasks, growth freezes and GAAP compliance suffers.",
          bullets: [
            "Manual reconciliations magnify every typo or missing receipt",
            "Investor-ready businesses prove accuracy and timing with systems, not heroics",
            "Time reclaimed from automation becomes fuel for client work and innovation"
          ]
        },
        {
          type: "paragraph",
          text: "The experience reshaped Sarah's driving question: How can she shrink month-end closing from two days to two hours without sacrificing precision? That question now belongs to every student in this unit." 
        },
        {
          type: "callout",
          intent: "question",
          title: "Turn and Talk",
          body: "Compare Sarah's weekend to a moment when a task in your life became unmanageable because the system failed to keep up.",
          bullets: [
            "What made the task overwhelming?",
            "Where did small mistakes create bigger problems?",
            "How could automation or better tools have helped?",
            "How does your example connect to Sarah's month-end pressure?"
          ]
        }
      ],
      components: [
        {
          type: "video",
          component: "VideoPlayer",
          data: {
            id: "month-end-nightmare-video",
            title: "The Automation Breakthrough: Conquering the Month-End Nightmare",
            youtubeId: "1O_YHSGpZDo",
            duration: "2:55",
            description:
              "Sarah recounts the month-end crisis that forced her to automate TechStart's books and protect her time.",
            transcript:
              "(Sarah appears on camera in the TechStart studio.)\n\nSo, I had my smart ledger, and I was feeling pretty good. The business was growing. I even landed my first monthly retainer client, a local fitness studio. That was a big deal—it meant consistent revenue every month. But it also meant more transactions, more data entry, more things to keep track of.\n\nAnd that's when I hit the next wall. It happened at the end of the month. I sat down to do my first real 'month-end closing,' you know, reconcile my books with my bank account. It turned into a complete nightmare. I spent my entire weekend on it. My 'smart' ledger was still manual, and I found so many little errors—a typo here, a missed transaction there—and they threw all my numbers off. It was incredibly frustrating. I thought I had solved my bookkeeping problem, but I had just created a new one: a process that took way too much of my time.\n\nI was talking about it with my mentor, Marcus Rodriguez. I was just venting, really, about how I wasted a whole weekend. He was pretty direct. He told me my time was the most valuable asset in my business, and I was wasting it on tasks that a machine could do better. He pointed out that those little errors I found weren't so little; they could have serious tax consequences down the road. He was the one who pushed me to stop thinking about just recording my finances and start thinking about automating them.\n\nThat's where the idea of the 'Month-End Wizard' came from. The driving question for me became, how can I cut this process from two days down to two hours without sacrificing accuracy? I dove into learning how to use things like macros and advanced formulas right there in my spreadsheet. The goal was to build a system that could do the heavy lifting for me—the routine checks, the calculations, the reconciliations. It's all about making the system work for you, not the other way around.\n\nAnd it worked. That weekend-long nightmare literally became a two-hour task. The feeling was just... empowering. All that time I got back, I could now spend on what actually grows the business—finding bigger clients and improving my services. But this new efficiency created a new kind of ambition. I started going after bigger projects, but I quickly found out that serious people—like banks and investors—don't just want to hear that your books are accurate. They want to see them presented in a very specific way. They want professional financial statements. And learning how to create those... well, that was the next major hurdle."
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Understanding Sarah's New Challenge",
            description: "Confirm what triggered Sarah's automation journey and how she reframed the problem.",
            questions: [
              {
                id: "u02l01-hook-q1",
                prompt: "What milestone created the new month-end workload for Sarah?",
                correctAnswer: "Landing her first monthly retainer client with a fitness studio",
                distractors: [
                  "Hiring her first employee",
                  "Opening a dedicated business bank account",
                  "Securing a $10,000 website project"
                ],
                explanation:
                  "The retainer brought stable revenue but also introduced recurring transactions that demanded professional reconciliation."
              },
              {
                id: "u02l01-hook-q2",
                prompt: "Why did Sarah's first month-end close become a 'weekend nightmare'?",
                correctAnswer: "Her manual ledger made error hunts and reconciliations take the entire weekend",
                distractors: [
                  "Her bank account stopped syncing with her ledger",
                  "Her clients delivered all payments late",
                  "Her internet connection failed during reconciliation"
                ],
                explanation:
                  "Manual data entry meant every typo or missing subscription required detective work to fix, stretching the process across two days."
              },
              {
                id: "u02l01-hook-q3",
                prompt: "According to Marcus Rodriguez, what was Sarah wasting during the manual close?",
                correctAnswer: "Her most valuable business asset—time that automation could protect",
                distractors: [
                  "Her credibility with clients",
                  "Her ability to qualify for bank loans",
                  "Her professional network of mentors"
                ],
                explanation:
                  "Marcus reminded Sarah that entrepreneurs must guard their time. Machines can perform repetitive checks faster and with fewer mistakes."
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
            title: "Turn and Talk: Lessons from the Weekend",
            duration: "3 minutes",
            description: "Share a real moment when a task outgrew its system and compare it to Sarah's month-end crisis.",
            prompts: [
              "What repetitive task drained the most time?",
              "How did manual steps increase the risk of mistakes?",
              "What tool, formula, or automation could have rescued the situation?",
              "Where do you see the strongest connection to Sarah's story?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Anchor the unit's driving question in Sarah's lived experience",
          "Emphasize that time, accuracy, and credibility move together",
          "Capture student language about 'chaos' for later reflection"
        ],
        facilitationTips: [
          "Pause the video after the second paragraph to let students predict what went wrong",
          "Encourage students to connect automation to their own routines"
        ],
        timingMinutes: 7,
        presenterNotes: "Set the tone for an operational challenge that demands both empathy and systems thinking."
      }
    },
    {
      id: "unit02-lesson01-phase2",
      name: "Introduction",
      title: "Mapping the Month-End Pressure Cooker",
      sequence: 2,
      summary:
        "Students unpack Sarah's new workflow, explore why GAAP expectations raise the stakes, and define the automation challenge in plain language.",
      objectives: [
        "Describe the steps that made Sarah's manual month-end close unsustainable",
        "Explain why GAAP compliance demands reliable automation",
        "Build vocabulary for the Shoebox Receipt Challenge and automation goals"
      ],
      narrative: [
        {
          type: "heading",
          level: 3,
          text: "The Weekend Nightmare"
        },
        {
          type: "paragraph",
          text: "Month-end closing means verifying that every transaction, subscription, invoice, and cash movement matches the bank. Sarah tried to do it manually and discovered how fragile her process was." 
        },
        {
          type: "paragraph",
          text: "Tiny issues—like a software fee entered on the wrong date—forced her to restart long checklists. Each correction meant more time away from clients and less time designing the automation she dreamed about." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Marcus's Advice",
          body: "Marcus pushed Sarah to focus on opportunity cost. If she could reclaim the lost weekend, she could pitch bigger clients, nurture investors, and ship more value." 
        },
        {
          type: "heading",
          level: 3,
          text: "The Shoebox Receipt Challenge"
        },
        {
          type: "paragraph",
          text: "To feel the same pressure, you will sort a pile of mock receipts, reconcile them, and surface every mismatch. The challenge shows why automation beats even the most organized paper system." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Key Mindset",
          body: "Focus on finding friction. When a step takes too long or introduces risk, highlight it. That friction becomes your automation target." 
        },
        {
          type: "paragraph",
          text: "Sarah's driving goal—two days to two hours—mirrors the same improvements you will design. Precision matters because GAAP requires consistent timing for accruals, deferrals, and adjusting entries." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Quick Check: Why Automation?",
            description: "Confirm the core reasons Sarah can't stay manual.",
            questions: [
              {
                id: "u02l01-intro-q1",
                prompt: "Which specific milestone created month-end complexity for Sarah?",
                correctAnswer: "A monthly retainer that added recurring transactions and reconciliations",
                distractors: [
                  "Hiring a full-time bookkeeper",
                  "Switching banks mid-month",
                  "Losing access to past invoices"
                ],
                explanation:
                  "Recurring revenue brings recurring bookkeeping tasks that must line up with GAAP timing rules."
              },
              {
                id: "u02l01-intro-q2",
                prompt: "What was the core problem with Sarah's 'smart' ledger during month-end?",
                correctAnswer: "It stayed manual, so every mismatch demanded tedious troubleshooting",
                distractors: [
                  "It refused to open on her laptop",
                  "It lacked any formulas for math checks",
                  "It could not export data to investors"
                ],
                explanation:
                  "Manual copy-paste created endless error hunts, making the process slow and stressful."
              },
              {
                id: "u02l01-intro-q3",
                prompt: "According to Marcus, why were Sarah's small mistakes a big deal?",
                correctAnswer: "They could create serious tax and compliance issues later",
                distractors: [
                  "They would cause her to lose every client",
                  "They meant she needed to raise her prices",
                  "They proved she needed to switch industries"
                ],
                explanation:
                  "Uncorrected errors compound over time, threatening financial reporting and investor trust."
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
            title: "Language of the Month-End Wizard",
            items: [
              {
                id: "u02l01-fib-1",
                text: "Sarah's driving question became: 'What automation can cut our month-end closing time from {blank} to two hours without sacrificing GAAP accuracy?'",
                answer: "two days",
                hint: "Think about the length of her weekend struggle."
              },
              {
                id: "u02l01-fib-2",
                text: "The {blank} Challenge lets you experience the same messy bottlenecks Sarah faced when everything was on paper.",
                answer: "Shoebox Receipt",
                hint: "Name of the hands-on simulation."
              },
              {
                id: "u02l01-fib-3",
                text: "Marcus reminded Sarah that the real danger was the long-term {blank} of small errors.",
                answer: "consequences",
                hint: "Another word for serious results that show up later."
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Discussion: Process Pain Points",
            duration: "6 minutes",
            description: "Analyze which parts of Sarah's process broke down and how automation could rescue them.",
            prompts: [
              "Which manual step sounded most exhausting?",
              "Where do you predict the first automation win lives?",
              "How does GAAP raise the stakes for accurate timing?",
              "What evidence would convince an investor that Sarah solved the problem?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Students should be able to restate Sarah's automation goal",
          "Highlight vocabulary that will appear in later technical lessons",
          "Connect the Shoebox challenge to authentic accounting routines"
        ],
        facilitationTips: [
          "Use think-aloud modeling for one Shoebox receipt so expectations are clear",
          "Invite students to storyboard the automation steps they anticipate"
        ],
        timingMinutes: 12,
        presenterNotes: "Keep the tone investigative—students are building the case for automation." 
      }
    },
    {
      id: "unit02-lesson01-phase3",
      name: "Guided Practice",
      title: "Diagnosing Manual Bottlenecks",
      sequence: 3,
      summary:
        "Teams break down the Shoebox Receipt workflow, match steps with risks, and prioritize automation opportunities before the independent challenge.",
      objectives: [
        "Identify specific pain points within manual month-end tasks",
        "Match process steps to the frustration or risk they create",
        "Evaluate which technologies best resolve each pain point"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Manual closing is more than typing numbers. It is a maze of gathering receipts, double-checking dates, and reconciling accounts to the penny." 
        },
        {
          type: "paragraph",
          text: "Every time Sarah repeated a step, she risked duplicating the same human mistake. Your guided practice mirrors that stress so you can spot the exact step automation must take over." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Manual Process Breakdown",
          body: "Expect to see six key steps: data collection, manual entry, cross-referencing, error detection, corrections, and reconciliation. Each one steals time when it stays manual." 
        },
        {
          type: "paragraph",
          text: "Once you diagnose the pain, imagine tools that solve it. Bank feeds eliminate typing. Conditional formatting flags mistakes. Reconciliation assistants connect matches instantly." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Guided Practice Strategy",
          body: "Document the minutes spent on each manual step. That data becomes proof when you argue for automation later in the unit." 
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          data: {
            title: "Manual Process Analysis",
            description: "Match each month-end process step with the frustration it creates",
            leftColumnTitle: "Manual Process Steps",
            rightColumnTitle: "Primary Challenges",
            items: [
              { id: "mp-1", content: "Manual data entry from receipts", matchId: "mp-5", hint: "Time-consuming and error-prone" },
              { id: "mp-2", content: "Cross-referencing bank statements", matchId: "mp-6", hint: "Requires careful matching" },
              { id: "mp-3", content: "Hunting for error sources", matchId: "mp-7", hint: "Takes hours to find small mistakes" },
              { id: "mp-4", content: "Reconciling account balances", matchId: "mp-8", hint: "Must balance to the penny" },
              { id: "mp-5", content: "High Error Risk", matchId: "mp-1" },
              { id: "mp-6", content: "Tedious Matching", matchId: "mp-2" },
              { id: "mp-7", content: "Frustrating Debugging", matchId: "mp-3" },
              { id: "mp-8", content: "Precise Calculations", matchId: "mp-4" }
            ],
            showHints: true,
            shuffleItems: true
          }
        },
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          data: {
            title: "Automation Solution Matching",
            description: "Pair each automation idea with the benefit it delivers",
            leftColumnTitle: "Automation Technologies",
            rightColumnTitle: "Primary Benefits",
            items: [
              { id: "auto-1", content: "Automatic bank transaction import", matchId: "auto-5", hint: "Direct data connection" },
              { id: "auto-2", content: "Formula-based error checking", matchId: "auto-6", hint: "Real-time validation" },
              { id: "auto-3", content: "Conditional formatting alerts", matchId: "auto-7", hint: "Visual error detection" },
              { id: "auto-4", content: "One-click reconciliation", matchId: "auto-8", hint: "Automated matching" },
              { id: "auto-5", content: "Eliminates Manual Entry", matchId: "auto-1" },
              { id: "auto-6", content: "Prevents Human Error", matchId: "auto-2" },
              { id: "auto-7", content: "Immediate Feedback", matchId: "auto-3" },
              { id: "auto-8", content: "Saves Hours of Work", matchId: "auto-4" }
            ],
            showHints: true,
            shuffleItems: true
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Think-Pair-Share: Automation Priorities",
            duration: "7 minutes",
            description: "Use Shoebox timing notes to decide where automation must launch first.",
            prompts: [
              "Which manual step burned the most minutes?",
              "Where did your team make the most corrections?",
              "What automation would remove that friction immediately?",
              "How will you justify that priority to a CFO?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Students should link each manual step to a measurable pain point",
          "Encourage evidence-based automation pitches (time saved, errors prevented)",
          "Collect lingering vocabulary gaps for Lesson 2 support"
        ],
        facilitationTips: [
          "Display a shared timer so teams log how long each manual step takes",
          "Prompt students to use process-mapping language (input, action, output)"
        ],
        timingMinutes: 12,
        presenterNotes: "Guide students toward data-driven reasoning they will reuse in the independent practice." 
      }
    },
    {
      id: "unit02-lesson01-phase4",
      name: "Independent Practice",
      title: "Transferring Analysis to New Businesses",
      sequence: 4,
      summary:
        "Students apply the automation analysis lens to restaurant and e-commerce scenarios, then classify tasks by automation readiness.",
      objectives: [
        "Diagnose process bottlenecks in unfamiliar industries",
        "Match manual bottlenecks with strategic automation categories",
        "Evaluate which activities should stay under human control"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Automation skills transfer across industries. A restaurant, an online shop, and a service firm all wrestle with repetitive tasks that drain time." 
        },
        {
          type: "paragraph",
          text: "Your job is to read business cases and decide where automation pays off first. Document your reasoning so you can defend the recommendation to stakeholders." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Independent Practice Strategy",
          body: "Treat each scenario like a client briefing. Identify the bottleneck, match it with an impact label, and propose an automation priority." 
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          data: {
            title: "Restaurant Process Bottleneck Analysis",
            description: "Match Mario's Bistro manual processes with their bottleneck category",
            leftColumnTitle: "Mario's Manual Processes",
            rightColumnTitle: "Bottleneck Categories",
            items: [
              { id: "rest-1", content: "Manually counting daily cash register receipts", matchId: "rest-5", hint: "Daily revenue reconciliation bottleneck" },
              { id: "rest-2", content: "Calculating employee tip distributions by hand", matchId: "rest-6", hint: "Payroll processing delay" },
              { id: "rest-3", content: "Tracking inventory usage with paper forms", matchId: "rest-7", hint: "Stock management inefficiency" },
              { id: "rest-4", content: "Entering vendor invoices one by one", matchId: "rest-8", hint: "Accounts payable bottleneck" },
              { id: "rest-5", content: "Revenue Processing Bottleneck", matchId: "rest-1" },
              { id: "rest-6", content: "Payroll Distribution Delay", matchId: "rest-2" },
              { id: "rest-7", content: "Inventory Tracking Gap", matchId: "rest-3" },
              { id: "rest-8", content: "Invoice Processing Backlog", matchId: "rest-4" }
            ],
            showHints: true,
            shuffleItems: true
          }
        },
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          data: {
            title: "E-commerce Scaling Analysis",
            description: "Connect TechGear Online's growth challenges with their business impact",
            leftColumnTitle: "TechGear's Challenges",
            rightColumnTitle: "Business Impact Types",
            items: [
              { id: "ecom-1", content: "Processing 500+ orders daily takes 6 hours", matchId: "ecom-5", hint: "Order volume creates time pressure" },
              { id: "ecom-2", content: "Manually updating inventory across 3 platforms", matchId: "ecom-6", hint: "Multi-channel complexity" },
              { id: "ecom-3", content: "Customer service team overwhelmed with order status calls", matchId: "ecom-7", hint: "Communication inefficiency" },
              { id: "ecom-4", content: "Monthly financial reports take a full week to complete", matchId: "ecom-8", hint: "Reporting delay impact" },
              { id: "ecom-5", content: "Volume Scalability Crisis", matchId: "ecom-1" },
              { id: "ecom-6", content: "Multi-Platform Sync Problem", matchId: "ecom-2" },
              { id: "ecom-7", content: "Customer Communication Gap", matchId: "ecom-3" },
              { id: "ecom-8", content: "Decision-Making Delay", matchId: "ecom-4" }
            ],
            showHints: true,
            shuffleItems: true
          }
        },
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          data: {
            title: "Automation Priority Decision Making",
            description: "Determine which business processes should be automated versus kept under human control",
            leftColumnTitle: "Business Process Types",
            rightColumnTitle: "Automation Strategy",
            items: [
              { id: "auto-priority-1", content: "High-volume repetitive data entry", matchId: "auto-priority-5", hint: "Tasks done the same way many times" },
              { id: "auto-priority-2", content: "Error-prone manual calculations", matchId: "auto-priority-6", hint: "Math with high mistake risk" },
              { id: "auto-priority-3", content: "Time-sensitive reporting deadlines", matchId: "auto-priority-7", hint: "Regular deadlines create pressure" },
              { id: "auto-priority-4", content: "Complex decision-making with judgment calls", matchId: "auto-priority-8", hint: "Needs human expertise" },
              { id: "auto-priority-5", content: "High Automation Priority", matchId: "auto-priority-1" },
              { id: "auto-priority-6", content: "High Automation Priority", matchId: "auto-priority-2" },
              { id: "auto-priority-7", content: "High Automation Priority", matchId: "auto-priority-3" },
              { id: "auto-priority-8", content: "Keep Human Control", matchId: "auto-priority-4" }
            ],
            showHints: true,
            shuffleItems: true
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Independent Automation Analysis Assessment",
            description: "Test your ability to identify high-value automation opportunities",
            questions: [
              {
                id: "u02l01-indep-q1",
                prompt: "Which automation upgrade delivers the highest value for Sarah right now?",
                correctAnswer: "Connecting bank feeds to eliminate manual data entry and categorization",
                distractors: [
                  "Buying a more powerful laptop for faster calculations",
                  "Hiring an assistant to double-check every receipt",
                  "Working longer hours to finish the close without automation"
                ],
                explanation:
                  "Direct data imports remove the root cause of errors and reclaim the most time."
              },
              {
                id: "u02l01-indep-q2",
                prompt: "What risk comes from keeping month-end processes manual while TechStart grows?",
                correctAnswer: "The workload and error rate will scale faster than revenue, blocking growth",
                distractors: [
                  "Sarah will run out of file cabinet space",
                  "Clients will refuse to pay without digital invoices",
                  "The spreadsheet will crash from too many formulas"
                ],
                explanation:
                  "Manual systems break under volume. Doubling transactions more than doubles the time needed."
              },
              {
                id: "u02l01-indep-q3",
                prompt: "How does automation create competitive advantage beyond saving hours?",
                correctAnswer: "It produces real-time reporting, faster decisions, and professional credibility",
                distractors: [
                  "It guarantees higher prices from clients",
                  "It removes the need for skilled employees",
                  "It eliminates all accounting costs forever"
                ],
                explanation:
                  "Automated systems support better decision-making and investor trust, not just efficiency."
              }
            ],
            showExplanations: true,
            allowRetry: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to cite evidence from the scenarios in their matches",
          "Push for clear reasoning about why certain tasks should stay human-led",
          "Monitor misconceptions about automation replacing judgment entirely"
        ],
        facilitationTips: [
          "Ask students to draft a one-sentence automation recommendation for each scenario",
          "Encourage peer feedback on the quality of their automation arguments"
        ],
        timingMinutes: 8,
        presenterNotes: "Students should leave with portable analysis skills they can apply to capstone ideas." 
      }
    },
    {
      id: "unit02-lesson01-phase5",
      name: "Assessment",
      title: "Automation Analysis Mastery Check",
      sequence: 5,
      summary:
        "Students demonstrate comprehension through the question bank and apply automation criteria to professional service scenarios.",
      objectives: [
        "Show mastery of Unit 02 Lesson 01 concepts through the question bank",
        "Evaluate professional services for automation opportunities",
        "Self-assess progress toward the lesson learning objectives"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This assessment verifies that you can articulate why automation matters, identify high-value opportunities, and defend your recommendation with evidence." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Assessment Focus",
          body: "Look for questions about process bottlenecks, GAAP accuracy, time savings, and investor expectations."
        },
        {
          type: "paragraph",
          text: "After the question bank, you will apply the same logic to new professional service scenarios to keep practicing strategic decision-making." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Automation Analysis Mastery Assessment",
            description: "Show what you know about automation, GAAP expectations, and competitive advantage",
            questionBankRef: {
              bankId: "unit02-phase5",
              filter: {
                lessonIds: ["lesson01"]
              }
            },
            allowRetry: false,
            showExplanations: true
          }
        },
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          data: {
            title: "Applied Professional Service Analysis",
            description: "Decide which professional tasks demand automation and which require human expertise",
            leftColumnTitle: "Professional Scenarios",
            rightColumnTitle: "Automation Decision",
            items: [
              { id: "pro-1", content: "Dental practice manually scheduling 200+ appointments weekly", matchId: "pro-5", hint: "High-volume administrative task" },
              { id: "pro-2", content: "Lawyer negotiating settlement terms with opposing counsel", matchId: "pro-6", hint: "Requires professional judgment" },
              { id: "pro-3", content: "Bakery calculating daily ingredient inventory needs", matchId: "pro-7", hint: "Formula-driven planning" },
              { id: "pro-4", content: "Therapist conducting patient counseling sessions", matchId: "pro-8", hint: "Human empathy essential" },
              { id: "pro-5", content: "High Automation Priority", matchId: "pro-1" },
              { id: "pro-6", content: "Keep Human Control", matchId: "pro-2" },
              { id: "pro-7", content: "High Automation Priority", matchId: "pro-3" },
              { id: "pro-8", content: "Keep Human Control", matchId: "pro-4" }
            ],
            showHints: true,
            shuffleItems: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to reference their independent practice when justifying answers",
          "Monitor comprehension check results for targeted re-teach opportunities",
          "Capture reflections on how automation ties to investor readiness"
        ],
        facilitationTips: [
          "Have students jot down one automation win they will pursue in Lesson 02",
          "Use a quick fist-to-five self-rating on each learning objective"
        ],
        timingMinutes: 5,
        presenterNotes: "Keep momentum—students should transition quickly into reflection." 
      }
    },
    {
      id: "unit02-lesson01-phase6",
      name: "Closing",
      title: "Reflection: Owning the Automation Mindset",
      sequence: 6,
      summary:
        "Students synthesize key insights, capture reflections in the journal, and preview next-lesson skills.",
      objectives: [
        "Summarize why automation protects time, accuracy, and credibility",
        "Reflect on how automation connects to personal career goals",
        "Preview the technical learning path in Lesson 02"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "You now understand why Sarah fought so hard to automate: time is an asset, GAAP requires discipline, and investors trust systems more than promises." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Four Key Insights",
          body: "Problems become opportunities when you document friction, automation frees leaders to grow the business, scalable systems impress investors, and innovation starts with honest reflection." 
        },
        {
          type: "paragraph",
          text: "Lesson 2 dives into the technical mechanics behind adjusting entries, accruals, and the formulas that power the Month-End Wizard." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Automation Analysis Reflection Journal",
            unitTitle: "Automation Analysis & Business Process Improvement",
            journalingFocus: "Capture personal connections to automation, competitive advantage, and entrepreneurial mindset.",
            entries: [
              {
                id: "automation-understanding",
                category: "courage",
                prompt: "Reflect on Sarah's 'weekend nightmare.' What does it teach you about the hidden costs of manual processes? Share a personal connection.",
                placeholder: "Describe the moment when Sarah realized her system failed and connect it to your own experience."
              },
              {
                id: "competitive-advantage",
                category: "adaptability",
                prompt: "Explain how automation creates competitive advantage beyond saving time. Use examples from the lesson activities.",
                placeholder: "Connect automation to decision speed, investor credibility, or client experience."
              },
              {
                id: "personal-application",
                category: "persistence",
                prompt: "Identify manual processes in your future career that could benefit from automation. How would you evaluate and prioritize them?",
                placeholder: "List tasks, possible tools, and the data you would gather before investing in automation."
              },
              {
                id: "entrepreneurial-mindset",
                category: "courage",
                prompt: "Sarah turned frustration into innovation. What does that reveal about the entrepreneurial mindset?",
                placeholder: "Explain how seeing problems as data fuels new solutions."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Students should articulate at least one actionable automation insight",
          "Encourage authentic connections to future careers and CAP competencies",
          "Preview that Lesson 2 builds the technical toolkit"
        ],
        facilitationTips: [
          "Invite a few volunteers to share reflections before dismissing",
          "Collect anonymous sticky notes on where they still feel unsure"
        ],
        timingMinutes: 3,
        presenterNotes: "End with optimism—students are ready to prototype their Month-End Wizard." 
      }
    }
  ]
}
