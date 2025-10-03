import { LessonScenario } from "@/types/lesson-scenarios"

export const unit02Lesson01Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrhkhm79v8qau43696",
    unitTitle: "Unit 2: Month-End Wizard",
    lessonId: "mds5v4twc0o3z3l8ecg",
    lessonNumber: 1,
    title: "Launch & Explore: CFO's Month-End Challenge",
    drivingQuestion: "What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?",
    durationMinutes: 45,
    focus: "Experience Sarah's weekend month-end crisis and analyze why automation becomes a business necessity.",
    slug: "unit02-lesson01"
  },
  sharedResources: [
    {
      id: "unit02-lesson01-intro-video",
      kind: "video",
      title: "The Automation Breakthrough: Conquering the Month-End Nightmare",
      description: "Sarah explains how a two-day reconciliation crisis pushed her to automate TechStart's month-end close.",
      url: "https://www.youtube.com/watch?v=1O_YHSGpZDo"
    }
  ],
  teacherGuidance: {
    overview: "Introduce the Month-End Wizard narrative, run the shoebox receipt simulation, and guide students in articulating automation-worthy bottlenecks.",
    pacingHighlights: [
      "Hook video, comprehension check, and Turn & Talk (8 minutes)",
      "Narrative analysis with guided reading (12 minutes)",
      "Shoebox receipt challenge setup and debrief (10 minutes)",
      "Automation opportunity analysis rotations (8 minutes)",
      "Formative quiz + automation priority drag-and-drop (5 minutes)",
      "Reflection journal and next-lesson preview (2 minutes)"
    ],
    assessments: [
      "Phase 5 comprehension check drawing from Unit 02 question bank",
      "Automation priority drag-and-drop applied to new service scenarios",
      "Reflection journal prompts focused on courage, adaptability, and persistence"
    ]
  },
  phases: [
    {
      id: "unit02-lesson01-phase1",
      name: "Hook",
      title: "Meet Sarah's Weekend Nightmare",
      sequence: 1,
      summary: "Students watch Sarah describe a two-day reconciliation crisis, identify why manual processes fail, and connect the story to their own automation goals.",
      objectives: [
        "Understand why Sarah's manual ledger could not keep pace with business growth",
        "Surface the emotional and financial cost of slow month-end closing",
        "Connect Sarah's automation goal to the unit driving question"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah Chen thought the Smart Ledger she built in Unit 1 would carry TechStart Solutions for a while. That confidence evaporated the first time she tried to close her books at month-end." 
        },
        {
          type: "paragraph",
          text: "Her business had just landed a fitness studio on monthly retainer. Revenue was finally predictable—but transactions multiplied. Sarah spent an entire weekend cross-checking notebooks, invoices, and bank statements, chasing errors that kept resetting her totals." 
        },
        {
          type: "paragraph",
          text: "The crisis was more than frustration. It exposed how quickly a promising startup can crumble without systems. Every typo, every missed subscription fee created risk she could not absorb." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Why This Matters",
          body: "Entrepreneurs survive by protecting their scarcest resource: time. If the founder is stuck reconciling numbers for forty-eight hours, growth stops and credibility fades.",
          bullets: [
            "Manual processes invite compounding errors and sleepless weekends",
            "Investors inspect systems before they invest in ideas",
            "Automation frees leaders to focus on clients, strategy, and sales"
          ]
        },
        {
          type: "paragraph",
          text: "Sarah's mentor, Marcus Rodriguez, delivered the truth: machines should handle the repetition. Her new driving question became the backbone of this unit—how do we slash month-end closing from two days to two hours without sacrificing GAAP accuracy?" 
        },
        {
          type: "callout",
          intent: "story",
          title: "Shoebox Receipt Challenge",
          body: "Students replicate Sarah's chaos: a box of unorganized receipts, timer running, and a demand for GAAP-ready totals. Feeling the friction makes automation meaningful before a single formula is written.",
          bullets: [
            "Sort and categorize transactions manually",
            "Track how long each task actually takes",
            "Identify the steps that deserve automation first"
          ]
        }
      ],
      components: [
        {
          type: "video",
          component: "VideoPlayer",
          data: {
            id: "unit02-lesson01-intro-video",
            title: "The Automation Breakthrough: Conquering the Month-End Nightmare",
            youtubeId: "1O_YHSGpZDo",
            duration: "2:55",
            description: "Sarah recounts how a full weekend lost to reconciliation convinced her to automate TechStart's month-end close.",
            transcript: `So, I had my smart ledger, and I was feeling pretty good. The business was growing. I even landed my first monthly retainer client, a local fitness studio. That was a big deal—it meant consistent revenue every month. But it also meant more transactions, more data entry, more things to keep track of.

And that's when I hit the next wall. It happened at the end of the month. I sat down to do my first real 'month-end closing,' you know, reconcile my books with my bank account. It turned into a complete nightmare. I spent my entire weekend on it. My 'smart' ledger was still manual, and I found so many little errors—a typo here, a missed transaction there—and they threw all my numbers off. It was incredibly frustrating. I thought I had solved my bookkeeping problem, but I had just created a new one: a process that took way too much of my time.

I was talking about it with my mentor, Marcus Rodriguez. I was just venting, really, about how I wasted a whole weekend. He was pretty direct. He told me my time was the most valuable asset in my business, and I was wasting it on tasks that a machine could do better. He pointed out that those little errors I found weren't so little; they could have serious tax consequences down the road. He was the one who pushed me to stop thinking about just *recording* my finances and start thinking about *automating* them.

That's where the idea of the 'Month-End Wizard' came from. The driving question for me became, how can I cut this process from two days down to two hours without sacrificing accuracy?. I dove into learning how to use things like macros and advanced formulas right there in my spreadsheet. The goal was to build a system that could do the heavy lifting for me—the routine checks, the calculations, the reconciliations. It's all about making the system work for you, not the other way around.

And it worked. That weekend-long nightmare literally became a two-hour task. The feeling was just... empowering. All that time I got back, I could now spend on what actually grows the business—finding bigger clients and improving my services. But this new efficiency created a new kind of ambition. I started going after bigger projects, but I quickly found out that serious people—like banks and investors—don't just want to hear that your books are accurate. They want to see them presented in a very specific way. They want professional financial statements. And learning how to create those... well, that was the next major hurdle.`
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Understanding Sarah's Challenge",
            description: "Check your grasp of the stakes behind TechStart's month-end automation journey.",
            questions: [
              {
                id: "unit02-lesson01-hook-q1",
                prompt: "What milestone achievement created the new complexity Sarah faced in Unit 2?",
                correctAnswer: "Landing her first monthly retainer client (a fitness studio)",
                distractors: [
                  "Hiring her first employee",
                  "Securing a $10,000 project",
                  "Opening a business bank account"
                ],
                explanation: "Consistent retainer work multiplied transactions and exposed weaknesses in Sarah's manual system."
              },
              {
                id: "unit02-lesson01-hook-q2",
                prompt: "Why did Sarah's 'smart' ledger collapse during her first month-end close?",
                correctAnswer: "It was still completely manual, forcing her to hunt for every tiny error",
                distractors: [
                  "It could not connect to her bank",
                  "It was too expensive to maintain",
                  "It did not support multiple clients"
                ],
                explanation: "Manual reconciliation consumed an entire weekend and made every typo a major setback."
              },
              {
                id: "unit02-lesson01-hook-q3",
                prompt: "What driving question launched the Month-End Wizard?",
                correctAnswer: "How can I cut this process from two days down to two hours without sacrificing accuracy?",
                distractors: [
                  "How can I avoid doing month-end closing altogether?",
                  "How can I hire someone to do my bookkeeping?",
                  "How can I convince clients to pay faster?"
                ],
                explanation: "Marcus pushed Sarah to pursue automation that preserved GAAP compliance while reclaiming her time."
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
            title: "Turn and Talk: Manual vs. Automated Work",
            duration: "3 minutes",
            description: "Discuss how Sarah's crisis mirrors real bottlenecks you've seen or experienced.",
            prompts: [
              "What specific problems do you notice with Sarah's manual month-end process?",
              "How could these delays impact client trust or investor confidence?",
              "Where have you seen technology save time in a similar situation?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Use the video to humanize the pain of manual month-end procedures",
          "Prompt honest reflections before revealing the shoebox receipt challenge"
        ],
        facilitationTips: [
          "Pause the video after the second paragraph to ask students what errors they expect Sarah to uncover",
          "Model how to time and document tasks during the shoebox simulation"
        ],
        timingMinutes: 8,
        presenterNotes: "Keep energy high, emphasize the emotional toll, and frame automation as a leadership skill."
      }
    },
    {
      id: "unit02-lesson01-phase2",
      name: "Introduction",
      title: "Why Automation Matters Now",
      sequence: 2,
      summary: "Students unpack the cost of manual processes, document Sarah's priorities, and prepare for the shoebox simulation.",
      objectives: [
        "Describe the specific pain points inside Sarah's month-end workflow",
        "Explain Marcus Rodriguez's advice about protecting founder time",
        "Connect the shoebox challenge to automation opportunity scouting"
      ],
      narrative: [
        {
          type: "heading",
          level: 3,
          text: "The Weekend Nightmare"
        },
        {
          type: "paragraph",
          text: "Sarah's first month-end close exposed a dangerous truth: a fast-growing service business cannot rely on notebooks and memory. Every missed subscription fee or mistyped amount reset hours of work and shattered her confidence." 
        },
        {
          type: "paragraph",
          text: "Manual reconciliation chained her to a laptop for forty-eight hours. The work still needed to be done, but the way she approached it guaranteed burnout." 
        },
        {
          type: "heading",
          level: 3,
          text: "Marcus's Wake-Up Call"
        },
        {
          type: "paragraph",
          text: "Marcus Rodriguez reminded Sarah that founders must guard their time like cash. Machines can execute repetitive checks with zero fatigue. Humans should design the system, not live inside it." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "CFO Lens",
          body: "Reliable automation delivers faster closes, cleaner audits, and investor-ready confidence. When time-to-close shrinks, the business can redirect energy into sales, product, and client retention."
        },
        {
          type: "heading",
          level: 3,
          text: "Shoebox Receipt Challenge"
        },
        {
          type: "paragraph",
          text: "Teams will recreate Sarah's chaos: a box of receipts, handwritten notes, subscription renewals, and mystery transactions. You'll sort, code, and total everything by hand, tracking exactly how long it takes." 
        },
        {
          type: "callout",
          intent: "question",
          title: "Focus While You Work",
          body: "Capture the steps that hurt most. Those bottlenecks become your first automation candidates.",
          bullets: [
            "Where do errors multiply?",
            "Which steps depend on one person's memory?",
            "What information is missing when you need it?"
          ]
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "From Manual Chaos to Structured Automation",
            questions: [
              {
                id: "unit02-lesson01-intro-q1",
                prompt: "What milestone pushed Sarah's month-end process past its limits?",
                correctAnswer: "Her first monthly retainer client created consistent but complex transaction volume",
                distractors: [
                  "She opened a second office",
                  "She lost access to her business bank account",
                  "She hired her first employee"
                ],
                explanation: "Long-term retainers increase recurring transactions and reconciliation demands."
              },
              {
                id: "unit02-lesson01-intro-q2",
                prompt: "What was the root problem with Sarah's ‘smart’ ledger?",
                correctAnswer: "It depended on manual entry, forcing her to hunt every typo and missing charge",
                distractors: [
                  "It could not export reports",
                  "It required expensive add-ons",
                  "It miscalculated sales tax"
                ],
                explanation: "Manual reconciliation created a fragile system that collapsed under growth."
              },
              {
                id: "unit02-lesson01-intro-q3",
                prompt: "What did Marcus insist is Sarah's most valuable asset?",
                correctAnswer: "Her time—because founders must invest energy in high-leverage work",
                distractors: [
                  "Her computer equipment",
                  "Her marketing budget",
                  "Her office space"
                ],
                explanation: "Automation is not just about technology—it is about reclaiming leadership time."
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
            title: "Lock in the Lesson",
            items: [
              {
                id: "unit02-lesson01-fib-1",
                text: "Sarah's driving question became: \"What automation can cut our month-end closing time from {blank} to two hours without sacrificing GAAP accuracy?\"",
                answer: "two days",
                hint: "Her weekend-long struggle set the baseline."
              },
              {
                id: "unit02-lesson01-fib-2",
                text: "The {blank} Challenge helps you experience the same bottlenecks Sarah faced before automating.",
                answer: "Shoebox Receipt",
                hint: "It is the hands-on simulation you complete in class."
              },
              {
                id: "unit02-lesson01-fib-3",
                text: "Marcus reminded Sarah that small errors carry serious {blank} down the road.",
                answer: "consequences",
                hint: "Think tax filings, investor trust, and missed decisions."
              }
            ]
          }
        },
        {
          type: "turnAndTalk",
          component: "TurnAndTalk",
          data: {
            title: "Business Process Reflection",
            duration: "6 minutes",
            description: "Use the shoebox experience to surface automation priorities before coding begins.",
            prompts: [
              "Which manual step frustrated you most during the simulation?",
              "Where did your team make the most errors or lose track of information?",
              "What would automation need to do so that you trust it more than the manual approach?"
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Frame the shoebox activity as discovery, not drudgery—students are gathering requirements for real automation",
          "Push students to quantify time spent on each step so ROI calculations feel concrete"
        ],
        facilitationTips: [
          "Assign roles (timekeeper, recorder, sorter) so every student contributes",
          "Capture common bottlenecks on the board to revisit during later automation lessons"
        ],
        timingMinutes: 12,
        presenterNotes: "Use storytelling to keep the energy up and emphasize that frustration is valuable data."
      }
    },
    {
      id: "unit02-lesson01-phase3",
      name: "Guided Practice",
      title: "Dissect the Manual Workflow",
      sequence: 3,
      summary: "Students analyze each step of Sarah's manual month-end process, match challenges to automation wins, and draft team focus areas.",
      objectives: [
        "Break the manual month-end close into discrete, observable steps",
        "Identify where human error, delays, and stress accumulate",
        "Map automation technologies to the problems they solve"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Every chaotic weekend can be dissected. By naming the steps, TechStart can design automation that eliminates guesswork." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Manual Process Breakdown",
          body: "Data collection, manual entry, cross-referencing, error hunting, corrections, reconciliation—each stage stacks hours on the clock and compounds stress."
        },
        {
          type: "paragraph",
          text: "Sarah's frustration is predictable: manual data entry produces typos, cross-referencing takes forever, and the final tie-out is fragile. Automation targets the exact points where humans burn time without adding value." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Team Strategy",
          body: "Track the minutes each step consumes during the shoebox challenge. Those numbers justify automation investments when you present to investors or mentors."
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          description: "Match manual process steps to the pain they create.",
          data: {
            title: "Manual Process Analysis",
            description: "Match each manual process step with its primary challenge",
            leftColumnTitle: "Manual Process Steps",
            rightColumnTitle: "Primary Challenges",
            showHints: true,
            shuffleItems: true,
            items: [
              { id: "manual-1", content: "Manual data entry from receipts", matchId: "manual-5", hint: "Time-consuming and error-prone" },
              { id: "manual-2", content: "Cross-referencing bank statements", matchId: "manual-6", hint: "Requires careful matching" },
              { id: "manual-3", content: "Hunting for error sources", matchId: "manual-7", hint: "Takes hours to find small mistakes" },
              { id: "manual-4", content: "Reconciling account balances", matchId: "manual-8", hint: "Must balance to the penny" },
              { id: "manual-5", content: "High Error Risk", matchId: "manual-1" },
              { id: "manual-6", content: "Tedious Matching", matchId: "manual-2" },
              { id: "manual-7", content: "Frustrating Debugging", matchId: "manual-3" },
              { id: "manual-8", content: "Precise Calculations", matchId: "manual-4" }
            ]
          }
        },
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          description: "Connect automation tools to their outcomes.",
          data: {
            title: "Automation Solution Matching",
            description: "Connect each automation technology with its primary benefit",
            leftColumnTitle: "Automation Technologies",
            rightColumnTitle: "Primary Benefits",
            showHints: true,
            shuffleItems: true,
            items: [
              { id: "auto-1", content: "Automatic bank transaction import", matchId: "auto-5", hint: "Direct data connection" },
              { id: "auto-2", content: "Formula-based error checking", matchId: "auto-6", hint: "Real-time validation" },
              { id: "auto-3", content: "Conditional formatting alerts", matchId: "auto-7", hint: "Visual error detection" },
              { id: "auto-4", content: "One-click reconciliation", matchId: "auto-8", hint: "Automated matching" },
              { id: "auto-5", content: "Eliminates Manual Entry", matchId: "auto-1" },
              { id: "auto-6", content: "Prevents Human Error", matchId: "auto-2" },
              { id: "auto-7", content: "Immediate Feedback", matchId: "auto-3" },
              { id: "auto-8", content: "Saves Hours of Work", matchId: "auto-4" }
            ]
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Journal Entry Logic Check",
            description: "Confirm your understanding of the four month-end scenarios you will automate later in the unit.",
            questions: [
              {
                id: "unit02-lesson01-gp-q1",
                prompt: "For accrued revenue of $500 (work completed but not yet invoiced), what is the correct adjusting entry?",
                correctAnswer: "Debit Accounts Receivable $500, Credit Service Revenue $500",
                distractors: [
                  "Debit Service Revenue $500, Credit Accounts Receivable $500",
                  "Debit Cash $500, Credit Service Revenue $500",
                  "Wait until the invoice is sent to record anything"
                ]
              },
              {
                id: "unit02-lesson01-gp-q2",
                prompt: "Recording $75 monthly depreciation on equipment requires which entry?",
                correctAnswer: "Debit Depreciation Expense $75, Credit Accumulated Depreciation $75",
                distractors: [
                  "Debit Equipment $75, Credit Depreciation Expense $75",
                  "Debit Accumulated Depreciation $75, Credit Equipment $75",
                  "Debit Depreciation Expense $75, Credit Equipment $75"
                ]
              },
              {
                id: "unit02-lesson01-gp-q3",
                prompt: "When Sarah earns $100 of prepaid revenue, how does she adjust her books?",
                correctAnswer: "Debit Deferred Revenue $100, Credit Service Revenue $100",
                distractors: [
                  "Debit Service Revenue $100, Credit Deferred Revenue $100",
                  "Debit Cash $100, Credit Service Revenue $100",
                  "Debit Service Revenue $100, Credit Cash $100"
                ]
              }
            ],
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Emphasize that automation succeeds only when the current workflow is clearly mapped",
          "Collect student timing data to build a class-wide automation business case"
        ],
        facilitationTips: [
          "Pair teams strategically so every student can articulate process pain points",
          "Stop midway to spotlight strong reasoning and common misconceptions"
        ],
        timingMinutes: 12,
        presenterNotes: "Guide students from frustration to analysis—naming problems turns feelings into design requirements."
      }
    },
    {
      id: "unit02-lesson01-phase4",
      name: "Independent Practice",
      title: "Benchmark Automation Opportunities",
      sequence: 4,
      summary: "Students apply process analysis skills to new business scenarios, prioritize automation targets, and gauge readiness for assessment.",
      objectives: [
        "Diagnose automation bottlenecks in unfamiliar industries",
        "Prioritize tasks that should be automated versus tasks that need human judgment",
        "Evaluate personal mastery before the assessment phase"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Automation is only valuable when deployed where it matters most. Students now test their analysis skills on fresh case studies drawn from restaurants, e-commerce, and service businesses." 
        },
        {
          type: "callout",
          intent: "story",
          title: "Mario's Bistro",
          body: "Manual cash counts, tip calculations, paper inventory logs, and invoice entry form a maze that delays close-of-day reporting."
        },
        {
          type: "callout",
          intent: "story",
          title: "TechGear Online",
          body: "Order surges, multi-platform inventory updates, and customer status calls choke capacity and bury growth opportunities."
        },
        {
          type: "callout",
          intent: "tip",
          title: "Automation Priorities",
          body: "High-volume repetition and strict deadlines signal prime automation targets. Complex, judgment-heavy work should remain under human control—for now."
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Self-Assessment",
          body: "Students evaluate their process analysis, cost-benefit thinking, and strategic prioritization before moving into assessment.",
          bullets: [
            "Can you spot bottlenecks quickly?",
            "Do you see the hidden costs of manual work?",
            "Are you confident prioritizing automation investments?"
          ]
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          description: "Diagnose the bottlenecks inside a restaurant's month-end routine.",
          data: {
            title: "Restaurant Process Bottleneck Analysis",
            description: "Match each manual process at Mario's Bistro with its primary bottleneck category",
            leftColumnTitle: "Mario's Manual Processes",
            rightColumnTitle: "Bottleneck Categories",
            showHints: true,
            shuffleItems: true,
            items: [
              { id: "rest-1", content: "Manually counting daily cash register receipts", matchId: "rest-5", hint: "Daily revenue reconciliation bottleneck" },
              { id: "rest-2", content: "Calculating employee tip distributions by hand", matchId: "rest-6", hint: "Payroll processing delay" },
              { id: "rest-3", content: "Tracking inventory usage with paper forms", matchId: "rest-7", hint: "Stock management inefficiency" },
              { id: "rest-4", content: "Entering vendor invoices one by one", matchId: "rest-8", hint: "Accounts payable bottleneck" },
              { id: "rest-5", content: "Revenue Processing Bottleneck", matchId: "rest-1" },
              { id: "rest-6", content: "Payroll Distribution Delay", matchId: "rest-2" },
              { id: "rest-7", content: "Inventory Tracking Gap", matchId: "rest-3" },
              { id: "rest-8", content: "Invoice Processing Backlog", matchId: "rest-4" }
            ]
          }
        },
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          description: "Connect e-commerce pain points to the business costs they create.",
          data: {
            title: "E-commerce Scaling Analysis",
            description: "Match TechGear Online's operational challenges with their business impact types",
            leftColumnTitle: "TechGear's Challenges",
            rightColumnTitle: "Business Impact Types",
            showHints: true,
            shuffleItems: true,
            items: [
              { id: "ecom-1", content: "Processing 500+ orders daily takes 6 hours", matchId: "ecom-5", hint: "Order volume creates time pressure" },
              { id: "ecom-2", content: "Manually updating inventory across 3 platforms", matchId: "ecom-6", hint: "Multi-channel complexity" },
              { id: "ecom-3", content: "Customer service team overwhelmed with order status calls", matchId: "ecom-7", hint: "Communication inefficiency" },
              { id: "ecom-4", content: "Monthly financial reports take a full week to complete", matchId: "ecom-8", hint: "Reporting delay impact" },
              { id: "ecom-5", content: "Volume Scalability Crisis", matchId: "ecom-1" },
              { id: "ecom-6", content: "Multi-Platform Sync Problem", matchId: "ecom-2" },
              { id: "ecom-7", content: "Customer Communication Gap", matchId: "ecom-3" },
              { id: "ecom-8", content: "Decision-Making Delay", matchId: "ecom-4" }
            ]
          }
        },
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          description: "Decide which tasks demand automation and which require human judgment.",
          data: {
            title: "Automation Priority Decision Making",
            description: "Determine which business processes should be automated vs. kept under human control",
            leftColumnTitle: "Business Process Types",
            rightColumnTitle: "Automation Strategy",
            showHints: true,
            shuffleItems: true,
            items: [
              { id: "priority-1", content: "High-volume repetitive data entry", matchId: "priority-5", hint: "Tasks done the same way many times" },
              { id: "priority-2", content: "Error-prone manual calculations", matchId: "priority-6", hint: "Mathematical operations with mistake risk" },
              { id: "priority-3", content: "Time-sensitive reporting deadlines", matchId: "priority-7", hint: "Regular deadlines that create pressure" },
              { id: "priority-4", content: "Complex decision-making with judgment calls", matchId: "priority-8", hint: "Requires human expertise and experience" },
              { id: "priority-5", content: "High Automation Priority", matchId: "priority-1" },
              { id: "priority-6", content: "High Automation Priority", matchId: "priority-2" },
              { id: "priority-7", content: "High Automation Priority", matchId: "priority-3" },
              { id: "priority-8", content: "Keep Human Control", matchId: "priority-4" }
            ]
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Independent Automation Analysis Assessment",
            description: "Apply your analytical skills to evaluate automation opportunities and business impact.",
            allowRetry: true,
            showExplanations: true,
            questions: [
              {
                id: "unit02-lesson01-ip-q1",
                prompt: "Which automation opportunity delivers the highest value for TechStart right now?",
                correctAnswer: "Eliminating manual data entry through direct bank feeds and automated transaction categorization",
                distractors: [
                  "Buying more powerful hardware",
                  "Hiring an assistant to help manually",
                  "Working longer hours"
                ],
                explanation: "Removing manual entry attacks the root cause of errors and wasted time."
              },
              {
                id: "unit02-lesson01-ip-q2",
                prompt: "What is the primary business risk of continuing with manual month-end processes?",
                correctAnswer: "Time and errors grow faster than revenue, creating an unsustainable bottleneck",
                distractors: [
                  "Need for extra file cabinets",
                  "Loss of computer storage",
                  "Customers preferring digital invoices"
                ],
                explanation: "Manual work does not scale; complexity increases exponentially."
              },
              {
                id: "unit02-lesson01-ip-q3",
                prompt: "Beyond time savings, how does automation create competitive advantage?",
                correctAnswer: "It enables real-time reporting, faster decisions, and professional credibility",
                distractors: [
                  "It makes the business look modern",
                  "It reduces office space needs",
                  "It allows working remotely"
                ],
                explanation: "Automation builds trust with stakeholders and supports strategic moves."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Remind students that high-impact automation targets free humans for judgment-heavy work",
          "Celebrate teams that support recommendations with time data from the shoebox challenge"
        ],
        facilitationTips: [
          "Encourage students to narrate their reasoning aloud while dragging items",
          "Use the self-assessment prompts as exit ticket talking points"
        ],
        timingMinutes: 8,
        presenterNotes: "This phase should feel like consulting practice—students diagnose, prioritize, and defend their choices."
      }
    },
    {
      id: "unit02-lesson01-phase5",
      name: "Assessment",
      title: "Automation Analysis Mastery",
      sequence: 5,
      summary: "Students verify mastery through a comprehension check and apply automation priorities to professional service scenarios.",
      objectives: [
        "Demonstrate understanding of automation strategy and GAAP-aligned decision making",
        "Differentiate tasks suited for automation from those requiring human expertise",
        "Self-assess progress toward lesson learning objectives"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This assessment confirms that students can articulate the business case for automation and recognize the patterns that guided Sarah's Month-End Wizard build." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Assessment Focus",
          body: "Conceptual mastery (Sarah's story), analytical reasoning (bottlenecks and costs), and strategic application (automation priorities)."
        },
        {
          type: "callout",
          intent: "tip",
          title: "Self-Evaluation",
          body: "Students rate their confidence in understanding automation benefits, competitive advantage, and user interface design—setting goals for Lesson 2."
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Automation Analysis Mastery Assessment",
            description: "Demonstrate your understanding of automation principles and business process analysis.",
            questionBankRef: {
              bankId: "unit02-phase5",
              filter: {
                lessonIds: ["lesson01"],
                count: 5
              }
            },
            showExplanations: true,
            allowRetry: false
          }
        },
        {
          type: "dragAndDrop",
          component: "DragAndDrop",
          description: "Decide which service tasks should be automated versus kept human-led.",
          data: {
            title: "Professional Service Automation Decisions",
            description: "Match professional service tasks with the best approach",
            leftColumnTitle: "Scenario",
            rightColumnTitle: "Approach",
            showHints: true,
            shuffleItems: true,
            items: [
              { id: "pro-1", content: "A dental practice manually scheduling 200+ appointments weekly", matchId: "pro-5", hint: "High-volume admin work" },
              { id: "pro-2", content: "A lawyer negotiating settlement terms with opposing counsel", matchId: "pro-6", hint: "Requires expertise and judgment" },
              { id: "pro-3", content: "A bakery calculating daily ingredient inventory needs", matchId: "pro-7", hint: "Repeatable calculations" },
              { id: "pro-4", content: "A therapist conducting patient counseling sessions", matchId: "pro-8", hint: "Relies on human empathy" },
              { id: "pro-5", content: "High Automation Priority", matchId: "pro-1" },
              { id: "pro-6", content: "Keep Human Control", matchId: "pro-2" },
              { id: "pro-7", content: "High Automation Priority", matchId: "pro-3" },
              { id: "pro-8", content: "Keep Human Control", matchId: "pro-4" }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Remind students that automation choices must align with GAAP accuracy and business strategy",
          "Use self-evaluation conversations to identify students who need extra support in Lesson 2"
        ],
        facilitationTips: [
          "Provide scratch paper so students can outline automation ROI before answering",
          "Encourage evidence-based reasoning when discussing drag-and-drop matches"
        ],
        timingMinutes: 5,
        presenterNotes: "Stay available for quick clarifications but let students work independently to simulate authentic checkpoints."
      }
    },
    {
      id: "unit02-lesson01-phase6",
      name: "Closing",
      title: "From Crisis to Clarity",
      sequence: 6,
      summary: "Students synthesize key insights, complete a reflection journal, and preview the technical skills introduced in Lesson 2.",
      objectives: [
        "Articulate how automation transforms business credibility",
        "Connect Sarah's experience to personal career goals",
        "Set intention for the technical learning ahead"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah's weekend nightmare became the spark for a scalable system. Entrepreneurs transform pain into opportunity when they document the lesson and plan the next experiment." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Key Takeaways",
          body: "Problems reveal systems gaps. Time is a founder's scarce resource. Automation unlocks growth, investor trust, and professional polish.",
          bullets: [
            "Problems are invitations to innovate",
            "Automation protects focus on revenue-driving work",
            "Professional systems win stakeholder confidence"
          ]
        },
        {
          type: "paragraph",
          text: "Lesson 2 launches the technical build: accruals, deferrals, depreciation, and the automation logic that powers the Month-End Wizard." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Automation Reflection Journal",
            unitTitle: "Automation Analysis & Business Process Improvement",
            journalingFocus: "Connect Sarah's story to your own leadership and career goals.",
            entries: [
              {
                id: "automation-understanding",
                category: "courage",
                prompt: "Sarah spent a weekend in manual chaos. What did the experience teach you about the hidden costs of inefficient processes? Where do you need courage to fix similar issues?",
                placeholder: "Describe the moment Sarah realized notebooks would hold her back..."
              },
              {
                id: "competitive-advantage",
                category: "adaptability",
                prompt: "Marcus said automation creates competitive advantage beyond time savings. Explain how accurate, automated systems help a business win.",
                placeholder: "Connect automation to trust, faster decisions, and investor confidence..."
              },
              {
                id: "personal-application",
                category: "persistence",
                prompt: "Think about a career you care about. Which repetitive tasks could be automated, and how would you prioritize where to start?",
                placeholder: "List tasks you would automate first and why..."
              },
              {
                id: "entrepreneurial-mindset",
                category: "courage",
                prompt: "Sarah transformed a problem into an opportunity. What does that teach you about the entrepreneurial mindset?",
                placeholder: "Explain how turning frustration into solutions builds resilience..."
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to tie reflections to concrete automation ideas they will pursue",
          "Preview that Lesson 2 delivers the accounting fundamentals required for automation"
        ],
        facilitationTips: [
          "Offer sentence starters for students who struggle to begin writing",
          "Highlight examples of how reflection informs project planning"
        ],
        timingMinutes: 5,
        presenterNotes: "End on optimism—students now understand the problem and are ready to build solutions."
      }
    }
  ]

}
