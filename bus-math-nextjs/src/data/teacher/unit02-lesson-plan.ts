import { UnitLessonPlan } from "@/types/lesson-plan"

export const unit02LessonPlan: UnitLessonPlan = {
  unitNumber: 2,
  unitTitle: "Month-End Wizard",
  description: "Complete 10-day lesson plan using backward design principles for month-end automation",
  essentialQuestion: "What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math",
    course: "Math for Business Operations"
  },

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Automation reduces human error and increases efficiency in financial processes",
      "GAAP compliance requires systematic tracking of accruals, deferrals, and adjusting entries",
      "User interface design determines the usability and adoption of financial tools",
      "Time savings through automation creates competitive advantage for businesses"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "Accrual accounting principles and their application to month-end procedures",
          "Straight-line depreciation calculation and recording methods",
          "Closing entries purpose and proper execution",
          "GAAP requirements for adjusting entries and timing differences",
          "Month-end closing process workflow and best practices"
        ]
      },
      {
        category: "technical",
        items: [
          "Named ranges creation and management in Excel",
          "Macro recorder functionality and basic VBA procedures",
          "Form controls and button integration for user interfaces",
          "Dynamic formula references using named ranges",
          "Error-checking routines and data validation techniques"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Record accruals and deferrals in accordance with GAAP standards",
          "Calculate and post straight-line depreciation entries",
          "Execute proper closing entries to zero temporary accounts",
          "Identify timing differences requiring adjusting entries",
          "Design efficient month-end closing workflows"
        ]
      },
      {
        category: "technical",
        items: [
          "Create and utilize named ranges for dynamic ledger systems",
          "Record and edit macros using Excel's macro recorder",
          "Write basic VBA procedures for repetitive accounting tasks",
          "Design user-friendly interfaces with form controls",
          "Implement error-checking and validation in automated systems"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Innovation Fair Demo: Month-End Wizard v1.0 (Day 10)",
      description: "Live demonstration of automated month-end closing system to Innovation Fair visitors",
      scenario: "Teams present their Month-End Wizard to Innovation Fair visitors (teachers, parents, local entrepreneurs) demonstrating how automation can transform a 2-day manual process into a 2-hour automated workflow while maintaining GAAP accuracy.",
      requirements: [
        "Live demonstration of complete month-end close process",
        "UI button interface that non-experts can operate",
        "Time simulation showing sub-2-hour completion",
        "GAAP-compliant adjusting and closing entries",
        "User feedback collection and analysis"
      ],
      context: "This mirrors real business automation projects where technical solutions must be demonstrated to non-technical stakeholders and end users."
    },
    milestones: [
      {
        day: 3,
        title: "Four Adjusting Entry Scenarios Mapped",
        description: "Correct identification and recording of accruals, deferrals, depreciation, and closing entries",
        criteria: [
          "All four scenario types correctly identified (accrual, deferral, depreciation, closing)",
          "Proper debit/credit application following GAAP principles",
          "Mathematical accuracy in all calculations",
          "Clear documentation of entry rationale"
        ]
      },
      {
        day: 6,
        title: "Macro Inserts Closing Entries",
        description: "Functional automation that properly executes closing entry procedures",
        criteria: [
          "Macro successfully zeros all temporary accounts",
          "Revenue and expense accounts properly closed to retained earnings",
          "Dividend accounts closed to retained earnings if applicable",
          "Post-closing trial balance shows only permanent accounts"
        ]
      },
      {
        day: 8,
        title: "Complete System: Time < 2 Hours & UI Button",
        description: "Fully functional Month-End Wizard with professional user interface",
        criteria: [
          "Complete month-end simulation completed in under 2 hours",
          "User-friendly button interface for macro execution",
          "Named ranges properly configured for dynamic updates",
          "Error-checking and validation routines functional"
        ]
      }
    ],
    rubric: [
      {
        name: "Correctness of Entries",
        weight: "40%",
        exemplary: "All adjusting and closing entries comply with GAAP and balance perfectly; complex transactions handled accurately",
        proficient: "Most entries correct with minor errors; basic GAAP compliance demonstrated",
        developing: "Multiple errors present; limited understanding of GAAP requirements"
      },
      {
        name: "Automation Efficiency",
        weight: "25%",
        exemplary: "Macro/VBA reduces close time well below 2 hours; handles edge cases and errors gracefully",
        proficient: "System meets 2-hour requirement with basic functionality working correctly",
        developing: "Automation incomplete or unreliable; time savings minimal"
      },
      {
        name: "UX Design & Usability",
        weight: "10%",
        exemplary: "Interface is intuitive for non-experts; comprehensive documentation and help features",
        proficient: "Basic UI functional; adequate documentation for user guidance",
        developing: "Interface confusing or incomplete; minimal user guidance provided"
      },
      {
        name: "Demo Clarity & Engagement",
        weight: "15%",
        exemplary: "Compelling presentation clearly communicates business value; audience fully engaged",
        proficient: "Clear explanation of functionality; adequate audience engagement",
        developing: "Presentation unclear or confusing; limited audience understanding"
      },
      {
        name: "Post-Fair Improvements",
        weight: "10%",
        exemplary: "Meaningful revisions implemented based on user feedback; system significantly enhanced",
        proficient: "Basic improvements made; some user feedback incorporated",
        developing: "Minimal or no improvements; limited response to feedback"
      }
    ]
  },

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Launch & Explore: The Two-Day Problem",
          description: "Understand the business impact of slow month-end closes through CFO perspective",
          days: "Day 1"
        },
        {
          title: "Core Concepts: Adjusting Entries & Automation",
          description: "Master GAAP-compliant adjusting entries and introduce Excel automation tools",
          days: "Days 2-3"
        },
        {
          title: "Excel Model: Named Ranges & Macros",
          description: "Build automated systems using named ranges, macro recorder, and basic VBA",
          days: "Days 4-5"
        },
        {
          title: "Examples & Testing: Simulation & UX Design",
          description: "Test automation through time simulation and develop user-friendly interfaces",
          days: "Days 6-8"
        },
        {
          title: "Summary & Demo: Public Presentation",
          description: "Prepare and deliver Innovation Fair demonstrations with feedback collection",
          days: "Days 9-10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Launch & Explore: CFO's Month-End Challenge",
        focus: "Introduction to month-end closing problems through authentic business perspective",
        duration: "45 minutes",
        activities: [
          {
            name: "CFO Vlog: The Real Cost of Slow Closes",
            duration: "8 minutes",
            description: "Watch CFO video explaining how slow month-end processes impact business operations",
            // Component: CFOVlogPlayer.tsx - 5-minute CFO video about month-end closing challenges and business impact
            details: [
              "Students watch 5-minute CFO vlog about month-end closing challenges",
              "Video covers: time costs, accuracy issues, staff burnout, investor relations impact",
              "Students identify specific problems mentioned and their business consequences"
            ],
            video: {
              title: "CFO Confessions: Why Our Month-End Takes Forever",
              duration: "5 minutes",
              description: "A real CFO explains how their 2-day month-end close process creates bottlenecks, delays financial reporting, and frustrates the entire finance team. Learn about the hidden costs of manual processes."
            },
            callout: {
              type: "important",
              title: "The Business Case for Automation",
              content: "Month-end delays have cascading business impacts",
              items: [
                "Delayed financial reporting affects investor confidence",
                "Staff overtime costs increase operational expenses",
                "Late closes delay strategic decision-making",
                "Manual processes introduce human error risks"
              ]
            }
          },
          {
            name: "Shoebox Receipt Challenge",
            duration: "15 minutes",
            description: "Hands-on simulation of manual receipt sorting and processing",
            // Component: ReceiptSortingChallenge.tsx - Hands-on simulation: sort 50+ mock receipts, time the manual process
            details: [
              "Teams receive pile of mock receipts (50+ items) to sort and categorize",
              "Time themselves completing manual sorting and data entry",
              "Calculate accuracy rate and identify pain points in manual process",
              "Discuss how this scales with business growth and monthly volume"
            ],
            interactiveActivities: [
              {
                type: "turn-talk",
                title: "Manual Process Analysis",
                description: "Teams discuss bottlenecks and error sources they experienced",
                duration: "5 minutes"
              }
            ]
          },
          {
            name: "Team Formation & Automation Focus Selection",
            duration: "12 minutes",
            description: "Form collaborative teams and choose specific automation challenge",
            // Component: AutomationPathSelector.tsx - Teams choose specialization (accrual, deferral, depreciation, or closing)
            details: [
              "Present the essential question and unit challenge",
              "Form teams of 2-3 students for collaborative problem-solving",
              "Teams choose which adjusting entry type to automate first (accrual, deferral, depreciation, or closing)",
              "Initial brainstorming: What would 2-hour close time require?"
            ],
            callout: {
              type: "tip",
              title: "Student Choice Pathways",
              content: "Teams select their automation focus area",
              items: [
                "Accrual Specialists: Focus on revenue/expense accruals",
                "Deferral Experts: Automate prepaid and deferred revenue",
                "Depreciation Team: Streamline fixed asset calculations",
                "Closing Masters: Perfect the closing entry process"
              ]
            }
          },
          {
            name: "Sprint Planning & Success Criteria",
            duration: "10 minutes",
            description: "Establish team goals and success metrics for the unit",
            details: [
              "Teams define what success looks like for their chosen automation area",
              "Establish time benchmarks: current manual time vs. 2-hour target",
              "Identify potential roadblocks and resources needed",
              "Preview the Innovation Fair demonstration format"
            ]
          }
        ],
        materials: [
          "CFO vlog video (5 minutes) with viewing guide",
          "Mock receipt packets (50+ receipts per team)",
          "Stopwatches for timing manual processes",
          "Team formation materials and choice cards",
          "Sprint planning templates"
        ]
      },
      {
        day: 2,
        title: "Skill Introduction: Accruals, Deferrals & SLN Depreciation",
        focus: "Direct instruction on GAAP-compliant adjusting entries and depreciation calculations",
        duration: "45 minutes",
        activities: [
          {
            name: "Connect to Month-End Reality",
            duration: "5 minutes",
            description: "Link yesterday's timing challenge to today's technical skills",
            details: [
              "Review: Manual processes are slow and error-prone",
              "Bridge: What specific accounting knowledge enables automation?",
              "Preview: Master the technical foundation before building Excel solutions"
            ]
          },
          {
            name: "Accruals & Deferrals: The Timing Challenge",
            duration: "20 minutes",
            description: "Direct instruction on matching principle and timing adjustments",
            // Component: AdjustingEntryMapper.tsx - Interactive mapping of accruals, deferrals, depreciation to GAAP principles
            details: [
              "Explain the matching principle: expenses matched to revenues in same period",
              "Accruals: Revenue earned but not yet received, expenses incurred but not yet paid",
              "Deferrals: Cash received/paid but revenue/expense recognition delayed",
              "Work through specific business examples showing GAAP compliance"
            ],
            callout: {
              type: "definition",
              title: "GAAP Timing Requirements",
              content: "Revenue and expenses must be recorded in the correct accounting period",
              items: [
                "Accrued Revenue: Services performed but payment not yet received",
                "Accrued Expenses: Costs incurred but bills not yet received",
                "Deferred Revenue: Payment received but services not yet performed",
                "Prepaid Expenses: Payment made but benefits not yet consumed"
              ]
            }
          },
          {
            name: "Straight-Line Depreciation Calculation",
            duration: "15 minutes",
            description: "Mathematical foundation for automated depreciation entries",
            // Component: PercentageCalculationSorting.tsx - Straight-line depreciation calculations with (Cost-Salvage)/Life formula
            details: [
              "Formula: (Cost - Salvage Value) ÷ Useful Life = Annual Depreciation",
              "Monthly depreciation calculation for month-end entries",
              "Practice calculations with office equipment and technology examples",
              "Connect to Excel formula construction for automation"
            ],
            callout: {
              type: "example",
              title: "Office Equipment Depreciation Example",
              content: "Computer system: $3,000 cost, $300 salvage, 3-year life",
              items: [
                "Annual depreciation: ($3,000 - $300) ÷ 3 = $900",
                "Monthly depreciation: $900 ÷ 12 = $75",
                "Entry: Debit Depreciation Expense $75, Credit Accumulated Depreciation $75"
              ]
            }
          },
          {
            name: "Guided Practice & Team Application",
            duration: "5 minutes",
            description: "Teams apply concepts to their chosen automation focus",
            details: [
              "Teams work through scenarios relevant to their chosen specialization",
              "Quick check: Can each team calculate and record their focus area entries?",
              "Preview Day 3: Map these concepts into systematic ledger processes"
            ]
          }
        ],
        materials: [
          "GAAP timing rules slide deck",
          "Accrual/deferral scenario worksheets",
          "Depreciation calculation templates",
          "Sample ledger with adjusting entry examples"
        ]
      },
      {
        day: 3,
        title: "Guided Practice: Four Scenarios into Ledger",
        focus: "Application of adjusting entry knowledge to systematic ledger recording",
        duration: "45 minutes",
        activities: [
          {
            name: "Scenario Mapping Challenge Setup",
            duration: "5 minutes",
            description: "Clear instructions for Milestone 1 assessment activity",
            details: [
              "Review four adjusting entry types: accrual, deferral, depreciation, closing",
              "Explain mapping requirement: identify, calculate, and record each type",
              "Teams focus on their specialization but must handle all four types"
            ]
          },
          {
            name: "Scenario Analysis & Recording",
            duration: "30 minutes",
            description: "Independent team work with instructor support on four required scenarios",
            // Component: JournalEntryBuilding.tsx - Build adjusting entries for team's chosen specialization area
            details: [
              "Scenario 1: Accrued revenue (consulting work completed, invoice pending)",
              "Scenario 2: Deferred revenue (annual software license received in advance)",
              "Scenario 3: Depreciation (office equipment monthly depreciation)",
              "Scenario 4: Closing entries (revenue and expense accounts to retained earnings)",
              "Teams must correctly identify, calculate, and record all four types"
            ],
            callout: {
              type: "important",
              title: "Milestone 1 Assessment Criteria",
              content: "All scenarios must demonstrate GAAP compliance and mathematical accuracy",
              items: [
                "Correct identification of each adjusting entry type",
                "Accurate calculations showing work and formulas",
                "Proper debit/credit application following accounting rules",
                "Clear documentation explaining the business rationale"
              ]
            }
          },
          {
            name: "Instructor Support & Verification",
            duration: "8 minutes",
            description: "Individual team conferences to verify understanding and accuracy",
            details: [
              "Instructor visits each team to check progress and provide guidance",
              "Focus on common errors: wrong account types, calculation mistakes, GAAP violations",
              "Provide specific feedback for improvement before peer review",
              "Ensure teams are ready for Day 4 gallery walk"
            ]
          },
          {
            name: "Self-Assessment & Preview",
            duration: "2 minutes",
            description: "Teams evaluate their work and prepare for peer feedback",
            details: [
              "Teams self-assess against Milestone 1 criteria",
              "Identify areas where they need additional practice or clarification",
              "Preview Day 4: Peer critique using structured feedback protocol"
            ]
          }
        ],
        materials: [
          "Four adjusting entry scenario packets",
          "Ledger templates for recording entries",
          "Calculation worksheets and reference materials",
          "Milestone 1 assessment rubric"
        ]
      },
      {
        day: 4,
        title: "Peer Critique & Revision: Gallery Walk Feedback",
        focus: "Structured peer review and revision of adjusting entry work",
        duration: "45 minutes",
        activities: [
          {
            name: "Gallery Walk Setup & Protocol",
            duration: "5 minutes",
            description: "Establish peer feedback protocol and rotation schedule",
            details: [
              "Post team work at stations around the classroom",
              "Explain feedback protocol: specific, actionable, kind",
              "Distribute peer review forms with assessment criteria",
              "Set rotation timing: 8 minutes per station"
            ]
          },
          {
            name: "Gallery Walk: Peer Review Rounds",
            duration: "25 minutes",
            description: "Structured feedback collection using assessment rubric",
            // Component: PeerFeedbackForm.tsx - Gallery walk structured feedback on four adjusting entry scenarios
            details: [
              "Teams rotate through stations reviewing other teams' scenario work",
              "Provide written feedback using structured rubric form",
              "Focus on: accuracy of calculations, GAAP compliance, clarity of documentation",
              "Identify exemplary work and suggest specific improvements"
            ],
            callout: {
              type: "tip",
              title: "Effective Peer Feedback Framework",
              content: "Structure feedback for maximum learning impact",
              items: [
                "Stars: What this team did really well",
                "Steps: Specific suggestions for improvement",
                "Questions: What you'd like to know more about",
                "Connections: How this relates to your own work"
              ]
            }
          },
          {
            name: "Feedback Analysis & Revision Planning",
            duration: "10 minutes",
            description: "Teams analyze feedback and plan revisions",
            details: [
              "Teams read and categorize feedback received",
              "Identify common themes and priority areas for improvement",
              "Plan specific revisions to address feedback",
              "Set individual goals for technical skill development"
            ]
          },
          {
            name: "Reflection & Sprint Planning",
            duration: "5 minutes",
            description: "Learning reflection and preparation for automation phase",
            // Component: ReflectionJournal.tsx - Individual and team reflection on learning progress and challenges
            details: [
              "Individual reflection: What was most challenging about the adjusting entries?",
              "Team discussion: How will this foundation help with Excel automation?",
              "Preview Days 5-6: Building automated systems using Excel tools"
            ]
          }
        ],
        materials: [
          "Gallery walk station setup materials",
          "Peer review feedback forms",
          "Assessment rubric checklists",
          "Revision planning templates"
        ]
      },
      {
        day: 5,
        title: "Reflection Checkpoint: Sprint Retrospective",
        focus: "Learning analysis and strategic planning for automation phase",
        duration: "45 minutes",
        activities: [
          {
            name: "Individual Learning Reflection",
            duration: "10 minutes",
            description: "Personal analysis of learning progress and challenges",
            details: [
              "Reflection writing: What worked well in your learning this week?",
              "Challenge identification: What slowed you down or caused confusion?",
              "Skill assessment: Rate confidence in each adjusting entry type",
              "Goal setting: What do you want to improve in the automation phase?"
            ]
          },
          {
            name: "Team Sprint Retrospective",
            duration: "20 minutes",
            description: "Collaborative analysis of team process and technical progress",
            // Component: SprintRetrospectiveTool.tsx - Team retrospective: what worked, what didn't, technical readiness
            details: [
              "What worked: Identify successful collaboration strategies and learning approaches",
              "What didn't work: Honest discussion of obstacles and ineffective methods",
              "Team dynamics: How well did specialization choices and role distribution work?",
              "Technical readiness: Are we prepared to tackle Excel automation?"
            ],
            callout: {
              type: "important",
              title: "Retrospective Protocol: Continuous Improvement",
              content: "Structured reflection drives better learning outcomes",
              items: [
                "Start-Stop-Continue framework for process improvement",
                "Focus on specific, actionable changes for next sprint",
                "Celebrate learning achievements and progress made",
                "Identify resource needs for successful automation phase"
              ]
            }
          },
          {
            name: "Technical Skill Assessment & Planning",
            duration: "10 minutes",
            description: "Evaluate technical readiness and plan skill development",
            details: [
              "Self-assessment: Excel comfort level and experience with advanced features",
              "Team assessment: Who will lead macro development, UI design, testing?",
              "Skill gaps: What Excel techniques do we need to learn for our automation goal?",
              "Resource planning: What help and materials will we need next week?"
            ]
          },
          {
            name: "Week 2 Preview & Commitment",
            duration: "5 minutes",
            description: "Set expectations and commitments for automation sprint",
            details: [
              "Preview Week 2 goals: functional macro, UI button, time simulation",
              "Team commitments: specific responsibilities and deadlines",
              "Success visualization: What will our Innovation Fair demo look like?",
              "Transition to Day 6: Introduction to named ranges and macro recorder"
            ]
          }
        ],
        materials: [
          "Individual reflection prompt sheets",
          "Team retrospective protocol guide",
          "Technical skill self-assessment forms",
          "Week 2 preview and planning materials"
        ]
      },
      {
        day: 6,
        title: "Advanced Automation: Closing Entries & VBA Basics",
        focus: "Introduction to Excel automation tools and closing entry procedures",
        duration: "45 minutes",
        activities: [
          {
            name: "Closing Entries: The Final Step",
            duration: "15 minutes",
            description: "Direct instruction on closing entry purpose and execution",
            details: [
              "Purpose: Zero out temporary accounts (revenue, expenses) at period end",
              "Process: Close revenues to retained earnings, close expenses to retained earnings",
              "Post-closing trial balance: Only permanent accounts (assets, liabilities, equity) remain",
              "Connection to automation: Perfect candidate for macro automation"
            ],
            callout: {
              type: "definition",
              title: "Closing Entry Sequence",
              content: "Systematic process to reset temporary accounts",
              items: [
                "Step 1: Close revenue accounts (debit revenues, credit retained earnings)",
                "Step 2: Close expense accounts (debit retained earnings, credit expenses)",
                "Step 3: Close dividend account if applicable (debit retained earnings, credit dividends)",
                "Result: Income statement accounts reset to zero for new period"
              ]
            }
          },
          {
            name: "Excel Automation Options: Macro Recorder vs. VBA",
            duration: "15 minutes",
            description: "Introduction to Excel automation tools and student choice pathways",
            // Component: ToolingChoiceSelector.tsx - Choose automation approach: Macro Recorder vs Basic VBA
            details: [
              "Macro recorder: Point-and-click recording of manual actions",
              "Basic VBA: Simple code procedures for repetitive tasks",
              "Student choice: Teams decide between no-code recorder or basic coding approach",
              "Demonstrate both approaches using simple closing entry example"
            ],
            callout: {
              type: "tip",
              title: "Automation Pathway Choice",
              content: "Choose the approach that matches your team's technical comfort",
              items: [
                "Macro Recorder: No coding required, records your manual actions",
                "Basic VBA: Simple IF statements and loops for more flexibility",
                "Hybrid Approach: Start with recorder, edit code for improvements",
                "Focus on functionality over complexity"
              ]
            }
          },
          {
            name: "Hands-On Automation Practice",
            duration: "10 minutes",
            description: "Teams begin building their chosen automation solution",
            // Component: MonthEndWizard.tsx - Build automated closing entry system with macro recorder or basic VBA
            details: [
              "Macro recorder teams: Record closing entry sequence for their focus area",
              "VBA teams: Write basic procedure using provided templates",
              "Test automation with sample data to verify functionality",
              "Troubleshoot common issues with instructor support"
            ]
          },
          {
            name: "Milestone 2 Assessment & Preview",
            duration: "5 minutes",
            description: "Check progress toward macro functionality goal",
            details: [
              "Teams demonstrate their automation progress",
              "Verify: Does macro successfully insert closing entries for their focus area?",
              "Preview Day 7: Time-to-close simulation and full system testing"
            ]
          }
        ],
        materials: [
          "Closing entry procedure guide",
          "Macro recorder step-by-step tutorial",
          "Basic VBA templates and cheat sheet",
          "Sample datasets for automation testing"
        ]
      },
      {
        day: 7,
        title: "Time-to-Close Simulation: Testing Automation",
        focus: "Full system testing and time measurement against 2-hour target",
        duration: "45 minutes",
        activities: [
          {
            name: "Simulation Setup & Guidelines",
            duration: "5 minutes",
            description: "Establish testing protocol and timing procedures",
            details: [
              "Simulation dataset: Complete month of transactions requiring adjusting/closing entries",
              "Timing protocol: Start when data received, stop when post-closing trial balance complete",
              "Quality standards: All entries must be GAAP-compliant and mathematically accurate",
              "Teams compete against 2-hour target, not against each other"
            ]
          },
          {
            name: "Full Month-End Close Simulation",
            duration: "30 minutes",
            description: "Real-time testing of automated systems with comprehensive dataset",
            // Component: MonthEndCloseSimulator.tsx - Full time simulation: complete month-end close under 2 hours
            details: [
              "Teams receive simulation dataset: 50+ transactions requiring various adjusting entries",
              "Execute complete month-end close using their automated systems",
              "Record time for each phase: data input, adjusting entries, closing entries, trial balance",
              "Document any errors or system failures for improvement planning"
            ],
            callout: {
              type: "important",
              title: "Simulation Success Criteria",
              content: "Systems must deliver both speed and accuracy",
              items: [
                "Time target: Complete close in under 2 hours",
                "Accuracy target: 100% mathematical accuracy in trial balance",
                "GAAP compliance: All entries follow proper accounting principles",
                "Functionality: Automation features work reliably without manual intervention"
              ]
            }
          },
          {
            name: "Results Analysis & Improvement Planning",
            duration: "8 minutes",
            description: "Evaluate performance and identify optimization opportunities",
            details: [
              "Time analysis: Which phases took longest? Where can we optimize?",
              "Error analysis: What mistakes occurred? How can automation prevent them?",
              "System reliability: Did automation work consistently throughout the process?",
              "Plan improvements for Day 8 UI and integration work"
            ]
          },
          {
            name: "Peer Learning & Best Practices",
            duration: "2 minutes",
            description: "Share successful strategies across teams",
            details: [
              "Teams briefly share their most effective automation techniques",
              "Identify common time-savers and error-prevention strategies",
              "Preview Day 8: UI design and final system integration"
            ]
          }
        ],
        materials: [
          "Comprehensive simulation dataset (50+ transactions)",
          "Timing sheets and stopwatches",
          "Error tracking forms",
          "Results analysis templates"
        ]
      },
      {
        day: 8,
        title: "UX & Button Design: Professional Interface Development",
        focus: "User interface design and system integration for non-expert users",
        duration: "45 minutes",
        activities: [
          {
            name: "User Experience Design Principles",
            duration: "10 minutes",
            description: "Introduction to business software usability standards",
            details: [
              "User-centered design: Interface must work for non-experts",
              "Error prevention: Visual cues and validation to prevent mistakes",
              "Clarity: Labels and instructions must be immediately understandable",
              "Professional appearance: Interface reflects business credibility"
            ]
          },
          {
            name: "Button and Form Control Implementation",
            duration: "20 minutes",
            description: "Hands-on development of user interface elements",
            // Component: UIDesigner.tsx - Create professional button interface with form controls and named ranges
            details: [
              "Insert form control buttons for macro execution",
              "Design clear labels and instructions for each automation feature",
              "Implement named range checks to validate data before automation runs",
              "Add error-flag formatting to highlight issues requiring attention"
            ],
            callout: {
              type: "example",
              title: "Professional UI Template",
              content: "Design interface that non-accountants can operate confidently",
              items: [
                "\"Run Month-End Close\" button with clear progress indicators",
                "Data validation checks with red/green status indicators",
                "Help text explaining what each automation step accomplishes",
                "Error reporting that guides users to correct problems"
              ]
            }
          },
          {
            name: "Integration Testing & Named Range Configuration",
            duration: "10 minutes",
            description: "Verify all system components work together seamlessly",
            details: [
              "Test UI buttons with complete automation sequences",
              "Verify named ranges update correctly when new data added",
              "Check error-checking routines trigger appropriately",
              "Ensure system handles edge cases and data validation failures"
            ]
          },
          {
            name: "Milestone 3 Validation & Demo Prep",
            duration: "5 minutes",
            description: "Final verification against assessment criteria",
            details: [
              "Complete system test: time simulation under 2 hours with UI button operation",
              "Verify all Milestone 3 criteria met: functionality, time target, professional interface",
              "Preview Days 9-10: Mock demo, feedback collection, and Innovation Fair presentation"
            ]
          }
        ],
        materials: [
          "UI design templates and standards guide",
          "Form control tutorial and examples",
          "Named range configuration worksheets",
          "Integration testing checklists"
        ]
      },
      {
        day: 9,
        title: "Mock Demo & Feedback: User Testing Preparation",
        focus: "Presentation practice and user feedback collection for system improvement",
        duration: "45 minutes",
        activities: [
          {
            name: "Demo Script Development",
            duration: "10 minutes",
            description: "Structure presentations for Innovation Fair audience",
            details: [
              "Opening: Explain the business problem (2-day vs. 2-hour close time)",
              "Demonstration: Live system operation showing automation in action",
              "Benefits: Quantify time savings and error reduction for business value",
              "Interaction: Allow visitors to try the system with guidance"
            ]
          },
          {
            name: "Peer Demo Practice & Feedback",
            duration: "25 minutes",
            description: "Teams present to classmates acting as Innovation Fair visitors",
            // Component: UserTestingSurvey.tsx - Mock demo practice with peer feedback on presentation clarity
            details: [
              "Each team delivers 5-minute demo to peer audience",
              "Peers provide feedback using visitor survey form",
              "Focus on: clarity of explanation, demonstration effectiveness, business value communication",
              "Identify common questions and prepare responses for actual fair"
            ],
            callout: {
              type: "tip",
              title: "Effective Demo Structure",
              content: "Engage visitors with clear business value and hands-on interaction",
              items: [
                "Hook: Start with the time/money cost of manual processes",
                "Show: Demonstrate actual system operation with real data",
                "Quantify: Specific time savings and error reduction numbers",
                "Interact: Let visitors try the system to experience the benefits"
              ]
            }
          },
          {
            name: "User Feedback Analysis & System Refinement",
            duration: "8 minutes",
            description: "Analyze feedback and implement improvements",
            details: [
              "Review survey feedback for common usability issues and suggestions",
              "Prioritize improvements that can be implemented before Innovation Fair",
              "Make quick fixes to interface clarity and demonstration flow",
              "Plan how to collect and respond to Innovation Fair visitor feedback"
            ]
          },
          {
            name: "Final Preparation & Logistics",
            duration: "2 minutes",
            description: "Innovation Fair setup planning and final system checks",
            details: [
              "Plan booth setup: laptop positioning, materials display, visitor flow",
              "Final system reliability check with backup plans for technical issues",
              "Preview Day 10: Innovation Fair presentation and feedback collection"
            ]
          }
        ],
        materials: [
          "Demo script templates and timing guides",
          "User testing survey forms",
          "Feedback analysis worksheets",
          "Innovation Fair setup guidelines"
        ]
      },
      {
        day: 10,
        title: "Public Presentation: Innovation Fair & Reflection",
        focus: "Final presentations to Innovation Fair visitors and unit learning reflection",
        duration: "45 minutes",
        activities: [
          {
            name: "Innovation Fair Booth Setup",
            duration: "10 minutes",
            description: "Prepare professional presentation stations",
            details: [
              "Set up demonstration stations with working systems",
              "Arrange signage explaining the business problem and solution",
              "Prepare feedback collection materials and visitor interaction space",
              "Final system checks and backup plan preparation"
            ]
          },
          {
            name: "Live Demonstrations to Visitors",
            duration: "25 minutes",
            description: "Present Month-End Wizard systems to Innovation Fair audience",
            // Component: UserTestingSurvey.tsx - Collect visitor feedback on system usability and business value
            details: [
              "Deliver structured demos to visitors (teachers, parents, entrepreneurs)",
              "Allow visitors to interact with systems and experience automation benefits",
              "Collect feedback using structured survey forms",
              "Answer questions about technical implementation and business value"
            ],
            callout: {
              type: "important",
              title: "Final Assessment: Public Demonstration",
              content: "Authentic assessment through real-world presentation",
              items: [
                "Technical demonstration: System works reliably during live presentation",
                "Business communication: Clear explanation of value proposition",
                "User interaction: Visitors can successfully operate the system",
                "Professional presentation: Appropriate for business audience"
              ]
            }
          },
          {
            name: "Feedback Collection & Analysis",
            duration: "5 minutes",
            description: "Gather visitor input for system improvement and learning reflection",
            details: [
              "Compile visitor feedback forms and suggestions",
              "Identify patterns in user comments and improvement suggestions",
              "Note successful demonstration elements and visitor engagement levels",
              "Plan post-fair improvements for v2.0 system development"
            ]
          },
          {
            name: "Unit Reflection & Portfolio Addition",
            duration: "5 minutes",
            description: "Learning synthesis and documentation for course portfolio",
            details: [
              "Reflection writing: How did building automation change your understanding of business processes?",
              "Skill analysis: Which technical skills (Excel vs. accounting) were most challenging?",
              "Future application: How might automation apply to other business challenges?",
              "Add completed Month-End Wizard to course portfolio with reflection documentation"
            ]
          }
        ],
        materials: [
          "Innovation Fair booth setup materials",
          "Visitor feedback survey forms and clipboards",
          "Demo scripts and backup system preparations",
          "Unit reflection prompts and portfolio guidelines"
        ]
      }
    ]
  },

  // Assessment Strategies
  assessmentStrategies: [
    {
      category: "formative",
      title: "Formative Assessment Strategies",
      strategies: [
        "Sprint Retrospectives: Weekly team reflection on process and learning",
        "Milestone Check-ins: Structured progress assessment at Days 3, 6, and 8",
        "Peer Feedback: Gallery walk protocol with specific improvement suggestions",
        "System Testing: Real-time performance measurement against time and accuracy targets",
        "User Feedback: Innovation Fair visitor surveys on system usability and effectiveness"
      ]
    },
    {
      category: "feedback",
      title: "Feedback Strategies",
      strategies: [
        "Technical Accuracy: Specific corrections to Excel formulas and VBA code",
        "Process Efficiency: Time measurement feedback with optimization suggestions",
        "User Experience: Usability testing results with interface improvement recommendations",
        "Business Value: Assessment of how well systems address real-world business problems"
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students",
      strategies: [
        "Step-by-Step Macro Guides: Visual walkthroughs for macro recorder usage",
        "Pre-built Templates: Partial VBA code with clear modification instructions",
        "Simplified Scenarios: Focus on one adjusting entry type before expanding",
        "Peer Support: Pair with students strong in Excel automation skills"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Advanced VBA Functions: Error handling routines and user input validation",
        "Cross-Sheet Integration: Link multiple workbooks for comprehensive systems",
        "Custom Functions: Write UDF (User Defined Functions) for complex calculations",
        "Mentoring Role: Support other teams with technical troubleshooting"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Visual Interface Design: Use icons and graphics to supplement text instructions",
        "Technical Vocabulary Support: Accounting and Excel terms with visual definitions",
        "Collaborative Documentation: Partner with native speakers for user instruction writing",
        "Multiple Demonstration Formats: Video tutorials with visual emphasis over verbal explanation"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: 1:1 computers with Microsoft Excel (365 or 2019+)" },
        { name: "Excel Features: Macro recording enabled, VBA development environment access" },
        { name: "Presentation: Innovation Fair booth space with tables and power access" },
        { name: "Timing: Stopwatches or timing apps for simulation measurement" },
        { name: "Backup: USB drives or cloud storage for system reliability during demonstrations" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials",
      items: [
        { name: "Macro Recorder Tutorial", link: "../excel-instruction/macro-recorder-guide.pdf" },
        { name: "Basic VBA Cheat Sheet", link: "../excel-instruction/vba-basics.pdf" },
        { name: "GAAP Adjusting Entries Reference", link: "../accounting-concepts/adjusting-entries-guide.pdf" },
        { name: "Month-End Simulation Dataset", link: "../simulations/month-end-dataset.xlsx" },
        { name: "UI Design Standards Guide", link: "../excel-instruction/professional-ui-standards.pdf" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Innovation Fair: School-wide showcase event with community visitors" },
        { name: "Business Professionals: Local entrepreneurs and business owners as fair visitors" },
        { name: "CFO Interview: Video testimonial about real month-end closing challenges" },
        { name: "Professional Examples: Anonymized month-end closing procedures from local businesses" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students successfully bridge accounting concepts with Excel automation skills?",
      "How effective was the sprint-based project structure for maintaining engagement?",
      "What level of VBA complexity is appropriate for 12th grade students?",
      "How well did the Innovation Fair format assess real-world application skills?",
      "Which automation techniques proved most transferable to other business contexts?"
    ],
    dataCollection: [
      "Time Simulation Results: Quantitative measurement of automation effectiveness",
      "Innovation Fair Feedback: Visitor surveys on system usability and student presentation quality",
      "Technical Assessment: Analysis of macro and VBA code functionality and reliability",
      "Student Reflection: Written analysis of learning challenges and breakthrough moments",
      "Peer Feedback Quality: Assessment of constructive critique skills development"
    ],
    nextUnitPrep: [
      "Archive successful automation templates for future student reference",
      "Document common VBA errors and debugging strategies for instruction improvement",
      "Identify students ready for advanced Excel features in Unit 3",
      "Prepare connection materials linking automation concepts to integrated financial modeling",
      "Collect Innovation Fair feedback for continuous curriculum improvement"
    ]
  }
}