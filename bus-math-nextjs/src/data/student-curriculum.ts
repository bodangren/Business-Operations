import { StudentUnit, StudentLesson, StudentLessonPhase, LessonPhaseContent } from '@/types/student-curriculum'

// Unit 1: Smart Ledger Launch - Complete student-facing curriculum data
export const STUDENT_UNITS: StudentUnit[] = [
  {
    id: "unit01",
    unitNumber: 1,
    title: "Smart Ledger Launch",
    description: "How can we design a self‑auditing ledger that would convince a potential angel investor we keep \"clean books\" from day 1?",
    difficulty: "Beginner",
    duration: "2-3 weeks",
    status: "available",
    
    drivingQuestion: {
      question: "How can we design a self‑auditing ledger that would convince a potential angel investor we keep \"clean books\" from day 1?",
      context: "Throughout this unit, you'll work with real startup scenarios to build their complete accounting system from the ground up."
    },
    
    objectives: {
      content: [
        "Apply the accounting equation (Assets = Liabilities + Equity)",
        "Record debits and credits for common transactions",
        "Generate and interpret a trial balance",
        "Understand double-entry bookkeeping principles",
        "Create professional financial documentation"
      ],
      skills: [
        "Create Excel Tables and structured references",
        "Use SUMIF to aggregate debits/credits",
        "Build conditional‑format rules (\"red flags\")",
        "Implement basic error‑check formulas",
        "Professional spreadsheet formatting"
      ],
      deliverables: [
        "Complete Smart Ledger Excel workbook",
        "4-minute investor pitch + live demo",
        "Self-auditing error detection system",
        "Professional documentation and user guide",
        "Trial balance with automated validation"
      ]
    },
    
    performanceTask: {
      title: "Investor Pitch + Live Demo",
      description: "Present your self-auditing ledger to a panel of local finance professionals as if seeking angel investment.",
      requirements: [
        "4-minute pitch explaining the ledger's features and investor benefits",
        "Live Excel demonstration showing error-checking features in action",
        "Q&A response addressing panel questions about accuracy and reliability",
        "Professional presentation using business-appropriate language and visuals"
      ]
    },
    
    milestones: [
      {
        id: "milestone1",
        day: 3,
        title: "Prototype Ledger with 10 Transactions",
        description: "Complete functional ledger with basic transaction recording",
        criteria: [
          "All transactions correctly posted using debit/credit rules",
          "Excel Table format with proper headers and structure",
          "Basic SUMIF formulas calculating account totals",
          "Trial balance showing mathematical accuracy"
        ],
        status: "available"
      },
      {
        id: "milestone2",
        day: 6,
        title: "Integrated \"Red Flag\" Rules",
        description: "Add visual error detection and automated alerts",
        criteria: [
          "Conditional formatting highlighting negative balances",
          "Visual indicators for missing or incomplete entries",
          "Automated alerts for debit/credit imbalances",
          "Professional color scheme and formatting"
        ],
        status: "locked"
      },
      {
        id: "milestone3",
        day: 7,
        title: "Trial Balance Auto-Check",
        description: "Complete error validation and correction system",
        criteria: [
          "Formula validation: ABS(sum_debits - sum_credits) = 0",
          "Green/red indicator for balance status",
          "Error identification and correction guidance",
          "100% accuracy on provided test dataset"
        ],
        status: "locked"
      }
    ],
    
    ventures: [
      "Food truck startup",
      "E-commerce business", 
      "Tutoring service",
      "Propose your own venture"
    ],
    
    roles: [
      "Financial Modeler",
      "UX/Documentation Lead", 
      "Data Auditor"
    ],
    
    presentationFormats: [
      "Slide deck presentation",
      "Live Excel demo",
      "Screencast format"
    ],
    
    prerequisites: {
      knowledge: [
        "Basic Excel knowledge (creating formulas, formatting cells)",
        "Understanding of basic math operations",
        "Familiarity with business concepts"
      ],
      technology: [
        "Microsoft Excel or similar spreadsheet software",
        "Calculator (physical or digital)",
        "Computer with internet access"
      ]
    },
    
    lessons: [
      {
        id: "lesson01",
        unitId: "unit01",
        lessonNumber: 1,
        title: "Introduction: Sarah's Challenge",
        duration: 45,
        status: "available",
        learningObjectives: [
          "Identify the key components of Sarah's business model and services at TechStart Solutions",
          "Recognize the challenges of manual record-keeping for small business financial tracking",
          "Explain why accurate financial records are essential for investor confidence and business credibility",
          "Connect business transaction categorization to the broader challenge of ledger organization"
        ],
        keyConcepts: [
          "TechStart Solutions business model and client services",
          "Manual vs. digital record-keeping challenges",
          "Business transaction categorization",
          "Financial credibility and investor expectations"
        ],
        phases: [
          {
            id: "lesson01-hook",
            lessonId: "lesson01",
            phaseName: "Hook",
            phaseNumber: 1,
            title: "Sarah's Story",
            description: "Watch introduction video about Sarah's digital marketing consultancy and current challenge",
            estimatedDuration: 5,
            status: "available",
            content: {
              type: "video",
              video: {
                // All video data will be loaded dynamically from intro-videos.json based on unitNumber
              },
              instructions: [
                "Watch the video carefully and take notes about Sarah's business",
                "Pay attention to the types of clients she serves",
                "Think about what challenges she might face without proper records"
              ]
            }
          },
          {
            id: "lesson01-introduction",
            lessonId: "lesson01",
            phaseName: "Introduction",
            phaseNumber: 2,
            title: "Comprehension Check",
            description: "Interactive activities to check understanding of Sarah's business situation",
            estimatedDuration: 15,
            status: "locked",
            content: {
              type: "interactive",
              interactiveComponents: [
                {
                  componentName: "ComprehensionCheck",
                  props: {
                    title: "Sarah's Business Model Check",
                    questions: [
                      {
                        id: "q1",
                        question: "What type of business does Sarah run?",
                        answers: ["Digital marketing consultancy", "Web development", "Accounting services", "Business coaching"],
                        explanation: "Sarah runs TechStart Solutions, a digital marketing consultancy that helps small businesses with websites, social media, and SEO."
                      },
                      {
                        id: "q2", 
                        question: "How many clients does TechStart Solutions currently serve?",
                        answers: ["3", "2", "4", "5"],
                        explanation: "Sarah mentions three current clients: a bakery, pet grooming service, and dental office."
                      },
                      {
                        id: "q3",
                        question: "What is Sarah's main challenge?",
                        answers: ["Record-keeping and tracking", "Finding new clients", "Marketing her services", "Hiring employees"],
                        explanation: "Sarah's biggest problem is keeping track of finances and transactions, which she's currently doing manually in notebooks."
                      }
                    ]
                  },
                  required: true
                },
                {
                  componentName: "BusinessTransactionCategorization",
                  props: {
                    title: "Practice: TechStart Transaction Types",
                    transactions: [
                      { id: 1, description: "Website design for bakery ($2,200)", amount: 2200, correctCategory: "revenue" },
                      { id: 2, description: "Software subscription fees ($89/month)", amount: 89, correctCategory: "expense" },
                      { id: 3, description: "Client payment received", amount: 1100, correctCategory: "revenue" },
                      { id: 4, description: "Office supplies purchase", amount: 45, correctCategory: "expense" },
                      { id: 5, description: "Social media setup for pet groomer", amount: 650, correctCategory: "revenue" }
                    ],
                    categories: ["revenue", "expense", "asset", "liability"]
                  },
                  required: true
                }
              ],
              instructions: [
                "Complete the comprehension check about Sarah's business model",
                "Practice categorizing different types of business transactions",
                "Make sure you understand the basics before moving forward"
              ]
            }
          },
          {
            id: "lesson01-guided-practice",
            lessonId: "lesson01",
            phaseName: "Guided Practice",
            phaseNumber: 3,
            title: "Think-Pair-Share",
            description: "Students discuss Sarah's situation and predict what she needs to succeed",
            estimatedDuration: 12,
            status: "locked",
            content: {
              type: "discussion",
              discussionPrompts: [
                {
                  question: "What problems might Sarah face if she doesn't fix her record-keeping system?",
                  type: "individual",
                  duration: 3
                },
                {
                  question: "What would convince investors that Sarah keeps 'clean books'?",
                  type: "pair",
                  duration: 5
                },
                {
                  question: "Share your team's best ideas for solving Sarah's challenge",
                  type: "class",
                  duration: 4
                }
              ],
              instructions: [
                "Think individually about the first question for 3 minutes",
                "Discuss with your partner for 5 minutes",
                "Be ready to share your best ideas with the class"
              ]
            }
          },
          {
            id: "lesson01-independent-practice",
            lessonId: "lesson01",
            phaseName: "Independent Practice",
            phaseNumber: 4,
            title: "Team Formation",
            description: "Form teams and select a TechStart client to focus on for the unit project",
            estimatedDuration: 8,
            status: "locked",
            content: {
              type: "practice",
              practiceActivities: [
                {
                  title: "Form Your Team",
                  description: "Create teams of 2-3 students to help Sarah solve her challenge",
                  instructions: [
                    "Form teams of 2-3 students",
                    "Choose a team name related to your mission",
                    "Select roles: Financial Modeler, UX/Documentation Lead, Data Auditor"
                  ],
                  duration: 4
                },
                {
                  title: "Choose Your Client Focus",
                  description: "Select which TechStart client to build a ledger system for",
                  instructions: [
                    "Review the three client options: bakery, pet grooming, dental practice",
                    "Discuss which client would be most interesting to work with",
                    "Make your team's selection and register it"
                  ],
                  duration: 4
                }
              ]
            }
          },
          {
            id: "lesson01-assessment",
            lessonId: "lesson01",
            phaseName: "Assessment",
            phaseNumber: 5,
            title: "Understanding Check",
            description: "Formative assessment through comprehension activities and team readiness",
            estimatedDuration: 3,
            status: "locked",
            content: {
              type: "assessment",
              assessmentItems: [
                {
                  type: "formative",
                  title: "Comprehension Check",
                  description: "Verify understanding of Sarah's business model and challenges",
                  criteria: [
                    "Correctly identifies TechStart's business model",
                    "Explains record-keeping challenges",
                    "Connects transactions to broader ledger needs"
                  ]
                },
                {
                  type: "formative",
                  title: "Team Readiness",
                  description: "Confirm team formation and project focus selection",
                  criteria: [
                    "Team formed with clear roles",
                    "Client focus area selected",
                    "Ready to begin unit project"
                  ]
                }
              ]
            }
          },
          {
            id: "lesson01-closing",
            lessonId: "lesson01",
            phaseName: "Closing",
            phaseNumber: 6,
            title: "Challenge Preview",
            description: "Present essential question and preview next lesson",
            estimatedDuration: 2,
            status: "locked",
            content: {
              type: "presentation",
              instructions: [
                "Review the essential question: 'How can we design a self-auditing ledger for Sarah?'",
                "Confirm your team's chosen focus area",
                "Preview tomorrow's work on accounting foundations"
              ],
              callouts: [
                {
                  type: "important",
                  title: "Tomorrow's Focus",
                  content: "We'll dive into the accounting equation and learn how business transactions affect the fundamental structure of financial records."
                }
              ]
            }
          }
        ],
        completedPhases: []
      },
      {
        id: "lesson02",
        unitId: "unit01",
        lessonNumber: 2,
        title: "Core Concepts: The Accounting Equation",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Apply the accounting equation (Assets = Liabilities + Equity) to analyze TechStart Solutions transactions",
          "Identify how business transactions affect each component of the accounting equation",
          "Explain the universal nature of the accounting equation across all business types",
          "Connect the accounting equation to Sarah's specific business context and transaction examples"
        ],
        keyConcepts: [
          "The accounting equation (Assets = Liabilities + Equity)",
          "Transaction analysis using TechStart examples",
          "Asset, liability, and equity identification",
          "Mathematical balance verification"
        ],
        phases: [
          {
            id: "lesson02-hook",
            lessonId: "lesson02",
            phaseName: "Hook",
            phaseNumber: 1,
            title: "The Foundation Game",
            description: "Interactive activity to demonstrate why the accounting equation must always balance",
            estimatedDuration: 8,
            status: "locked",
            content: {
              type: "interactive",
              interactiveComponents: [
                {
                  componentName: "TAccountsVisualization",
                  props: {
                    title: "The Accounting Equation in Action",
                    showEquation: true,
                    interactiveMode: true
                  },
                  required: true
                }
              ],
              instructions: [
                "Explore how changes to assets, liabilities, or equity affect the accounting equation",
                "Try different scenarios to see the equation stay balanced",
                "Notice how every business transaction has at least two effects"
              ]
            }
          },
          {
            id: "lesson02-introduction",
            lessonId: "lesson02",
            phaseName: "Introduction",
            phaseNumber: 2,
            title: "Accounting Equation Deep Dive",
            description: "Learn the fundamental accounting equation and its components",
            estimatedDuration: 12,
            status: "locked",
            content: {
              type: "practice",
              practiceActivities: [
                {
                  title: "Build the Equation",
                  description: "Use TechStart examples to understand each component",
                  instructions: [
                    "Identify TechStart's assets (cash, equipment, accounts receivable)",
                    "Determine TechStart's liabilities (accounts payable, loans)",
                    "Calculate Sarah's equity in the business",
                    "Verify that Assets = Liabilities + Equity"
                  ],
                  duration: 12
                }
              ]
            }
          }
        ],
        completedPhases: []
      },
      {
        id: "lesson03",
        unitId: "unit01",
        lessonNumber: 3,
        title: "Core Concepts: Debit & Credit Rules",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Master debit and credit rules for assets, liabilities, equity, revenue, and expense accounts",
          "Record TechStart business transactions using proper debit/credit mechanics",
          "Verify that debits equal credits for each journal entry",
          "Create T-accounts to visualize the impact of business transactions"
        ],
        keyConcepts: [
          "Debit and credit rules by account type",
          "T-account structure and usage",
          "Journal entry construction",
          "Transaction recording verification",
          "TechStart chart of accounts"
        ],
        phases: [],
        completedPhases: []
      },
      {
        id: "lesson04",
        unitId: "unit01",
        lessonNumber: 4,
        title: "Excel Model: Tables & SUMIF Functions",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Create Excel Tables with proper headers and structured references for TechStart transaction data",
          "Build SUMIF functions to calculate account totals automatically from transaction records",
          "Demonstrate how Excel Tables provide professional structure needed for investor presentations",
          "Test and validate that SUMIF formulas update automatically when new transactions are added"
        ],
        keyConcepts: [
          "Excel Table creation and formatting",
          "Structured references vs. cell references",
          "SUMIF function syntax and applications",
          "Dynamic formula expansion",
          "Professional ledger structure"
        ],
        phases: [],
        completedPhases: []
      },
      {
        id: "lesson05",
        unitId: "unit01",
        lessonNumber: 5,
        title: "Excel Model: Conditional Formatting & Error Checking",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Create conditional formatting rules to highlight potential ledger errors visually",
          "Build trial balance auto-check formula using ABS(SUM(Debits) - SUM(Credits)) logic",
          "Implement visual error detection system with red/yellow/green color coding",
          "Test self-auditing features by introducing intentional errors and verifying detection"
        ],
        keyConcepts: [
          "Conditional formatting rule creation",
          "Trial balance validation formulas",
          "Visual error detection systems",
          "Self-auditing ledger principles",
          "Color-coded feedback systems"
        ],
        phases: [],
        completedPhases: []
      },
      {
        id: "lesson06",
        unitId: "unit01",
        lessonNumber: 6,
        title: "Examples: Professional Ledger Applications",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Analyze professional ledger standards that build investor confidence",
          "Evaluate how self-auditing features prevent common startup financial mistakes",
          "Compare manual vs. automated accounting systems for time savings and accuracy",
          "Identify specific features that make a ledger presentation-ready for investors"
        ],
        keyConcepts: [
          "Professional accounting standards",
          "Investor-ready financial controls",
          "Self-auditing system benefits",
          "Manual vs. automated comparison",
          "Business presentation standards"
        ],
        phases: [],
        completedPhases: []
      },
      {
        id: "lesson07",
        unitId: "unit01",
        lessonNumber: 7,
        title: "Exercises: Independent Ledger Construction",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Independently construct a complete self-auditing ledger system for a chosen TechStart client",
          "Integrate Excel Tables, SUMIF functions, and error-checking features into one functional system",
          "Demonstrate mastery by successfully processing a full transaction dataset",
          "Provide constructive peer feedback using professional assessment criteria"
        ],
        keyConcepts: [
          "Independent application of all learned skills",
          "Complete system integration",
          "Peer review and feedback",
          "Professional assessment criteria application"
        ],
        phases: [],
        completedPhases: []
      },
      {
        id: "lesson08",
        unitId: "unit01",
        lessonNumber: 8,
        title: "Summary: Integration & System Refinement",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Integrate all ledger components (Tables, SUMIF, error-checking) into one seamless system",
          "Apply professional business formatting standards for investor-ready presentation",
          "Create clear documentation and user instructions for the self-auditing system",
          "Plan and outline a compelling 4-minute investor pitch presentation"
        ],
        keyConcepts: [
          "System integration and testing",
          "Professional business formatting",
          "User documentation creation",
          "Investor pitch planning",
          "Presentation preparation"
        ],
        phases: [],
        completedPhases: []
      },
      {
        id: "lesson09",
        unitId: "unit01",
        lessonNumber: 9,
        title: "Project Work: Presentation Preparation & Rehearsal",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Structure an effective investor pitch using Problem-Solution-Demonstration-Benefits format",
          "Practice explaining technical Excel features using business-appropriate language",
          "Demonstrate live Excel functionality within a 4-minute presentation timeframe",
          "Provide and receive constructive feedback on presentation effectiveness"
        ],
        keyConcepts: [
          "Investor pitch structure and format",
          "Business communication techniques",
          "Technical demonstration skills",
          "Presentation timing and pacing",
          "Constructive feedback protocols"
        ],
        phases: [],
        completedPhases: []
      },
      {
        id: "lesson10",
        unitId: "unit01",
        lessonNumber: 10,
        title: "Presentations: Investor Showcase & Reflection",
        duration: 45,
        status: "locked",
        learningObjectives: [
          "Deliver a professional 4-minute investor pitch to authentic business audience",
          "Demonstrate live Excel self-auditing features and explain their investor benefits",
          "Respond confidently to panel questions about system accuracy and reliability",
          "Reflect on learning journey and connect acquired skills to future business applications"
        ],
        keyConcepts: [
          "Professional presentation delivery",
          "Authentic audience engagement",
          "Technical demonstration mastery",
          "Learning reflection and analysis",
          "Future skill application"
        ],
        phases: [],
        completedPhases: []
      }
    ]
  }
]

// Helper function to get a specific unit by ID
export const getStudentUnit = (unitId: string): StudentUnit | undefined => {
  return STUDENT_UNITS.find(unit => unit.id === unitId)
}

// Helper function to get a specific lesson by unit and lesson ID
export const getStudentLesson = (unitId: string, lessonId: string): StudentLesson | undefined => {
  const unit = getStudentUnit(unitId)
  return unit?.lessons.find(lesson => lesson.id === lessonId)
}

// Helper function to get a specific phase by lesson and phase ID
export const getStudentLessonPhase = (unitId: string, lessonId: string, phaseId: string): StudentLessonPhase | undefined => {
  const lesson = getStudentLesson(unitId, lessonId)
  return lesson?.phases.find(phase => phase.id === phaseId)
}

// Helper function to get next available phase
export const getNextPhase = (unitId: string, lessonId: string, currentPhaseId: string) => {
  const lesson = getStudentLesson(unitId, lessonId)
  if (!lesson) return null
  
  const currentPhaseIndex = lesson.phases.findIndex(phase => phase.id === currentPhaseId)
  if (currentPhaseIndex === -1) return null
  
  // Check if there's a next phase in current lesson
  if (currentPhaseIndex < lesson.phases.length - 1) {
    return {
      unitId,
      lessonId,
      phaseId: lesson.phases[currentPhaseIndex + 1].id
    }
  }
  
  // Check if there's a next lesson in current unit
  const unit = getStudentUnit(unitId)
  if (!unit) return null
  
  const currentLessonIndex = unit.lessons.findIndex(lesson => lesson.id === lessonId)
  if (currentLessonIndex === -1) return null
  
  if (currentLessonIndex < unit.lessons.length - 1) {
    const nextLesson = unit.lessons[currentLessonIndex + 1]
    return {
      unitId,
      lessonId: nextLesson.id,
      phaseId: nextLesson.phases[0]?.id
    }
  }
  
  return null
}