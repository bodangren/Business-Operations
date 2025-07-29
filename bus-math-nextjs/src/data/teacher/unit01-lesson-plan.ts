import { UnitLessonPlan } from "@/types/lesson-plan"

/**
 * UNIT 01 COMPONENT USAGE SCHEDULE
 * 
 * Components scheduled for use in Unit 1: Smart Ledger Launch
 * 
 * DAY 1 - Introduction Page (/units/unit01/intro):
 * - ComprehensionCheck.tsx ✅ - Sarah's business model quiz (5 questions)
 * - BusinessTransactionCategorization.tsx ✅ - Match clients to projects
 * - StartupJourney.tsx ✅ - Interactive TechStart Solutions story
 * 
 * DAY 2-3 - Concepts Page (/units/unit01/concepts):
 * - TAccountsVisualization.tsx (to be created) - Visual T-accounts for Assets = Liabilities + Equity
 * - AccountCategorization.tsx ✅ - Drag-drop sorting of Sarah's transactions
 * - JournalEntryBuilding.tsx (to be created) - Build journal entries for actual transactions
 * 
 * DAY 4-5 - Excel Model Page (/units/unit01/excel-model):
 * - SpreadsheetSimulator.tsx (to be created) - Practice Excel Tables with transaction data
 * - ErrorCheckingSystem.tsx (to be created) - Build conditional formatting rules
 * - TrialBalanceGenerator.tsx (to be created) - Create auto-check formula
 * 
 * DAY 6 - Examples Page (/units/unit01/examples):
 * - FinancialStatementMatching.tsx ✅ - Match transactions to statements
 * - IncomeStatementSimple.tsx ✅ - Display Month 3 P&L results
 * 
 * DAY 7 - Exercises Page (/units/unit01/exercises):
 * - TrialBalanceSorting.tsx ✅ - Independent ledger system practice
 * - TransactionJournal.tsx (to be created) - Record transactions for chosen client
 * 
 * DAY 8-10 - Summary Page (/units/unit01/summary):
 * - PitchPresentationBuilder.tsx (to be created) - 4-minute investor pitch tool
 * - ReflectionJournal.tsx ✅ - Document learning journey
 * 
 * TOTAL: 12 components (4 already implemented ✅, 8 to be created)
 */

export const unit01LessonPlan: UnitLessonPlan = {
  unitNumber: 1,
  unitTitle: "Smart Ledger Launch",
  description: "Complete 10-day lesson plan using backward design principles",
  essentialQuestion: "How can we design a self-auditing ledger that would convince a potential angel investor we keep \"clean books\" from day 1?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math",
    course: "Math for Business Operations"
  },

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Accurate financial records are the foundation of business credibility and investor confidence",
      "The accounting equation (Assets = Liabilities + Equity) governs all business transactions",
      "Self-auditing systems prevent errors and build stakeholder trust through automation",
      "Professional presentation of financial data communicates business competence"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "The accounting equation and its application to transactions",
          "Debit and credit rules for different account types",
          "Trial balance purpose and construction",
          "Common business transaction types and recording methods",
          "Error detection and correction techniques"
        ]
      },
      {
        category: "technical",
        items: [
          "Excel Tables structure and benefits",
          "SUMIF function syntax and applications",
          "Conditional formatting rules and visual indicators",
          "Error-checking formula construction",
          "Professional spreadsheet formatting standards"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Apply the accounting equation to analyze business transactions",
          "Record debits and credits accurately for common business activities",
          "Generate and interpret a trial balance for error detection",
          "Identify and correct common recording errors",
          "Explain accounting processes to non-expert audiences"
        ]
      },
      {
        category: "technical",
        items: [
          "Create Excel Tables with structured references for dynamic data",
          "Use SUMIF functions to aggregate financial data by category",
          "Implement conditional formatting for visual error detection",
          "Build error-checking formulas for data validation",
          "Present data professionally for business audiences"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Investor Pitch + Live Demo (Day 10)",
      description: "4-minute pitch explaining the ledger's features and investor benefits",
      scenario: "Students present their self-auditing ledger to a panel of local finance professionals (PTA members with finance backgrounds, local CPAs, business owners) as if seeking angel investment.",
      requirements: [
        "4-minute pitch explaining the ledger's features and investor benefits",
        "Live Excel demonstration showing error-checking features in action",
        "Q&A response addressing panel questions about accuracy and reliability",
        "Professional presentation using business-appropriate language and visuals"
      ],
      context: "This mirrors real investor due diligence where financial systems and controls are scrutinized before investment decisions."
    },
    milestones: [
      {
        day: 3,
        title: "Prototype Ledger with 10 Transactions",
        description: "Basic ledger functionality with correct transaction recording",
        criteria: [
          "All transactions correctly posted using debit/credit rules",
          "Excel Table format with proper headers and structure",
          "Basic SUMIF formulas calculating account totals",
          "Trial balance showing mathematical accuracy"
        ]
      },
      {
        day: 6,
        title: "Integrated \"Red Flag\" Rules",
        description: "Visual error detection through conditional formatting",
        criteria: [
          "Conditional formatting highlighting negative balances",
          "Visual indicators for missing or incomplete entries",
          "Automated alerts for debit/credit imbalances",
          "Professional color scheme and formatting"
        ]
      },
      {
        day: 7,
        title: "Trial Balance Auto-Check",
        description: "Automated validation of ledger accuracy",
        criteria: [
          "Formula validation: ABS(sum_debits - sum_credits) = 0",
          "Green/red indicator for balance status",
          "Error identification and correction guidance",
          "100% accuracy on provided test dataset"
        ]
      }
    ],
    rubric: [
      {
        name: "Accuracy",
        weight: "45%",
        exemplary: "All transactions correctly posted; trial balance reconciles perfectly; error-checking catches all planted errors",
        proficient: "Minor errors (1-2); trial balance reconciles with guidance; error-checking catches most issues",
        developing: "Multiple errors; trial balance doesn't reconcile; limited error detection"
      },
      {
        name: "Functionality",
        weight: "25%",
        exemplary: "All SUMIF formulas work perfectly; conditional formatting comprehensive; system handles edge cases",
        proficient: "SUMIF formulas mostly correct; basic conditional formatting working; handles normal cases",
        developing: "Some formulas broken; limited formatting; system fragile"
      },
      {
        name: "Documentation",
        weight: "15%",
        exemplary: "Clear instructions enable independent use; comprehensive comments; professional appearance",
        proficient: "Basic instructions present; some explanatory comments; neat appearance",
        developing: "Minimal documentation; unclear instructions; poor presentation"
      },
      {
        name: "Investor Pitch",
        weight: "15%",
        exemplary: "Compelling narrative addresses real investor concerns; confident delivery; handles Q&A expertly",
        proficient: "Clear explanation of benefits; adequate delivery; answers most questions",
        developing: "Basic explanation; hesitant delivery; difficulty with questions"
      }
    ]
  },

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Introduction: Sarah's Challenge",
          description: "Meet Sarah Chen and understand TechStart Solutions' record-keeping needs",
          days: "Day 1"
        },
        {
          title: "Core Concepts: Accounting Foundation",
          description: "Master accounting equation and debit/credit rules using TechStart examples",
          days: "Days 2-3"
        },
        {
          title: "Excel Model: Digital Ledger System",
          description: "Build self-auditing ledger with Excel Tables, SUMIF, and error detection",
          days: "Days 4-5"
        },
        {
          title: "Examples & Exercises: Application",
          description: "Analyze professional examples and build complete systems independently",
          days: "Days 6-7"
        },
        {
          title: "Summary & Project Work",
          description: "Integrate, refine, and present investor-ready ledger systems",
          days: "Days 8-10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Introduction: Meet Sarah & TechStart Solutions",
        focus: "Introduction to Sarah's business challenge through video and comprehension activities",
        duration: "45 minutes",
        activities: [
          {
            name: "Meet Sarah Chen & TechStart Solutions",
            duration: "10 minutes",
            description: "Watch introduction video about Sarah's digital marketing consultancy and current challenge",
            details: [
              "Students watch 3-minute video introducing Sarah Chen and TechStart Solutions",
              "Video covers: Sarah's background, business services, current clients, record-keeping challenge",
              "Students take notes on key business details and challenges mentioned"
            ],
            video: {
              title: "Sarah's Story: The Record-Keeping Challenge",
              duration: "3 minutes",
              description: "Meet Sarah Chen, founder of TechStart Solutions, as she explains her growing digital marketing business and the chaos of tracking everything in notebooks. Learn about her three current clients and why she needs a better system before tax season."
            },
            callout: {
              type: "important",
              title: "TechStart Solutions Context",
              content: "Sarah is 2 months into running her digital marketing consultancy",
              items: [
                "Current clients: Local bakery website ($2,200), Pet grooming social media ($650), Dental office SEO ($1,100)",
                "Monthly revenue: $1,300-$1,950 (irregular project-based income)",
                "Challenge: Manual notebook tracking is unsustainable for tax preparation"
              ]
            }
          },
          {
            name: "Comprehension Activities",
            duration: "15 minutes",
            description: "Interactive activities to check understanding of Sarah's business situation",
            details: [
              "Multiple choice questions about Sarah's business model and services",
              "Drag and drop activity matching Sarah's clients to their project types",
              "Quick quiz on TechStart Solutions' revenue and expense patterns"
            ],
            // COMPONENTS: ComprehensionCheck.tsx ✅, BusinessTransactionCategorization.tsx ✅, StartupJourney.tsx
            interactiveActivities: [
              {
                type: "multiple-choice",
                title: "Sarah's Business Model Quiz",
                description: "5 questions about TechStart Solutions' services and target market",
                duration: "5 minutes"
                // COMPONENT: ComprehensionCheck.tsx - Sarah's business model quiz (5 questions)
              },
              {
                type: "drag-drop",
                title: "Client-Project Matching",
                description: "Match Sarah's three current clients to their specific projects and fees",
                duration: "5 minutes"
                // COMPONENT: BusinessTransactionCategorization.tsx - Match clients to projects
              },
              {
                type: "multiple-choice",
                title: "Financial Situation Check",
                description: "Questions about Sarah's revenue patterns and business expenses",
                duration: "5 minutes"
                // COMPONENT: ComprehensionCheck.tsx - Additional comprehension check
              }
            ]
          },
          {
            name: "Turn and Talk: Business Challenge Analysis",
            duration: "12 minutes",
            description: "Students discuss Sarah's situation and predict what she needs to succeed",
            details: [
              "Think-Pair-Share: What problems do you see with Sarah's current record-keeping?",
              "Partner discussion: What could happen if Sarah doesn't fix her tracking system?",
              "Class sharing: What would convince an investor that Sarah has 'clean books'?"
            ],
            interactiveActivities: [
              {
                type: "think-pair-share",
                title: "Record-Keeping Problems",
                description: "Individual thinking (2 min) → Partner discussion (4 min) → Class sharing (6 min)",
                duration: "12 minutes"
              }
            ]
          },
          {
            name: "Challenge Introduction & Team Formation",
            duration: "8 minutes",
            description: "Introduce the unit project and form collaborative teams",
            details: [
              "Present the essential question: How can we design a self-auditing ledger for Sarah?",
              "Form teams of 2-3 students to help Sarah solve her record-keeping challenge",
              "Teams choose specific TechStart client to focus on for their ledger prototype",
              "Quick team planning: What does Sarah need most urgently?"
            ]
          }
        ],
        materials: [
          "Sarah's TechStart Solutions introduction video (3 minutes)",
          "Interactive comprehension activities (digital or printable)",
          "TechStart client data sheets (bakery, pet grooming, dental office)",
          "Think-Pair-Share discussion prompts",
          "Team formation materials and project overview"
        ]
      },
      {
        day: 2,
        title: "Core Concepts: The Accounting Equation",
        focus: "Direct instruction on foundational accounting principles using TechStart examples",
        duration: "45 minutes",
        activities: [
          {
            name: "Sarah's Transaction Challenge",
            duration: "5 minutes",
            description: "Connect to Day 1 with Sarah's specific record-keeping problem",
            details: [
              "Review: Sarah has transactions but no system to organize them",
              "Preview: Today we learn the foundation that makes all ledgers work",
              "Connect to essential question: What makes a ledger trustworthy?"
            ]
          },
          {
            name: "The Accounting Equation Foundation",
            duration: "20 minutes",
            description: "Direct instruction on Assets = Liabilities + Equity using TechStart examples",
            details: [
              "Introduce the accounting equation with Sarah's TechStart business",
              "Show how Sarah's laptop (asset) was purchased with personal funds (equity)",
              "Demonstrate how client payments increase both assets (cash) and equity (retained earnings)",
              "Use TechStart client projects to show equation in action"
            ],
            callout: {
              type: "definition",
              title: "The Universal Business Language",
              content: "Assets = Liabilities + Equity governs ALL business transactions",
              items: [
                "Assets: What Sarah's business owns (cash, equipment, client payments owed)",
                "Liabilities: What Sarah's business owes (software subscriptions, contractor payments)",
                "Equity: Sarah's ownership stake in the business (initial investment + profits)"
              ]
            }
          },
          {
            name: "TechStart Transaction Analysis",
            duration: "15 minutes",
            description: "Guided practice using Sarah's actual business transactions",
            details: [
              "Analyze the bakery website project: How does the $2,200 payment affect the equation?",
              "Break down the dental office SEO project into its accounting equation impact",
              "Show how Sarah's business expense (software subscription) affects the equation",
              "Partner check: Students verify equation balance after each transaction"
            ]
          },
          {
            name: "Check for Understanding",
            duration: "5 minutes",
            description: "Quick assessment of equation comprehension",
            details: [
              "Exit ticket: Given a TechStart transaction, identify the equation impact",
              "Students predict how Sarah's next client payment will affect her business equation",
              "Preview Day 3: How do we track these equation changes systematically?"
            ]
          }
        ],
        materials: [
          "TechStart business transaction examples",
          "Accounting equation visual aids",
          "Sarah's client project details (from narrative context)",
          "Interactive equation balance worksheets"
        ]
      },
      {
        day: 3,
        title: "Core Concepts: Debit & Credit Rules",
        focus: "Direct instruction on debit/credit mechanics using Sarah's TechStart transactions",
        duration: "45 minutes",
        activities: [
          {
            name: "The Debit/Credit Mystery",
            duration: "5 minutes",
            description: "Hook students with the fundamental business recording system",
            details: [
              "Why does every business transaction need exactly two entries?",
              "Connect to Sarah's challenge: She tracks money coming in, but what about the complete picture?",
              "Today's goal: Master the universal business recording language"
            ]
          },
          {
            name: "T-Account Foundation & Rules",
            duration: "20 minutes",
            description: "Direct instruction on debit/credit rules using TechStart account types",
            details: [
              "Introduce T-accounts using Sarah's TechStart chart of accounts",
              "Demonstrate: Assets increase with debits (Sarah's cash account grows on the left)",
              "Show: Equity increases with credits (Sarah's ownership grows on the right)",
              "Practice: Revenue from client projects increases equity (credit revenue accounts)"
            ],
            // COMPONENTS: TAccountsVisualization.tsx (to be created), AccountCategorization.tsx ✅
            callout: {
              type: "definition",
              title: "The Debit/Credit Rules for TechStart",
              content: "Every transaction has equal debits and credits",
              items: [
                "Assets (Cash, Equipment): Increase with DEBITS, decrease with credits",
                "Liabilities (Software subscriptions, bills owed): Increase with CREDITS, decrease with debits",
                "Equity & Revenue (Sarah's ownership, client payments): Increase with CREDITS, decrease with debits",
                "Expenses (Software costs, supplies): Increase with DEBITS (they reduce equity)"
              ]
            }
          },
          {
            name: "TechStart Transaction Recording",
            duration: "15 minutes",
            description: "Guided practice recording Sarah's actual business transactions",
            details: [
              "Model: Record the bakery website project ($2,200 cash received)",
              "Guided practice: Students record the pet grooming social media project ($650)",
              "Partner work: Record Sarah's Adobe Creative Suite subscription expense ($52.99/month)",
              "Check work: Verify debits equal credits for each transaction"
            ]
            // COMPONENT: JournalEntryBuilding.tsx (to be created) - Build journal entries for actual transactions
          },
          {
            name: "Journal Entry Mastery Check",
            duration: "5 minutes",
            description: "Quick assessment of debit/credit understanding",
            details: [
              "Exit ticket: Record one TechStart transaction independently",
              "Self-check: Do my debits equal my credits?",
              "Preview Day 4: How do we build these entries into an Excel system for Sarah?"
            ]
          }
        ],
        materials: [
          "TechStart Chart of Accounts template",
          "T-account practice worksheets",
          "Sarah's actual transaction data (from narrative context)",
          "Debit/Credit rules reference guide"
        ]
      },
      {
        day: 4,
        title: "Excel Model: Tables & SUMIF Functions",
        focus: "Build Sarah's ledger foundation using Excel Tables and aggregation formulas",
        duration: "45 minutes",
        activities: [
          {
            name: "Sarah's Excel Challenge",
            duration: "5 minutes",
            description: "Connect manual recording to digital ledger system",
            details: [
              "Review: Sarah knows how to record transactions, but needs a digital system",
              "Challenge: How can Excel help Sarah track hundreds of transactions efficiently?",
              "Goal: Build the foundation of Sarah's self-auditing ledger"
            ]
          },
          {
            name: "Excel Tables for TechStart Ledger",
            duration: "20 minutes",
            description: "Hands-on creation of structured ledger using Excel Tables",
            details: [
              "Demonstrate: Convert Sarah's transaction list to Excel Table format",
              "Show structured references: How Table columns become formula names",
              "Practice: Students create their own TechStart ledger table",
              "Benefits: Dynamic expansion as Sarah's business grows"
            ],
            // COMPONENT: SpreadsheetSimulator.tsx (to be created) - Practice Excel Tables with transaction data
            callout: {
              type: "tip",
              title: "Why Excel Tables for Business Ledgers?",
              content: "Excel Tables provide the professional structure Sarah needs",
              items: [
                "Structured references: Formulas use column names instead of cell references",
                "Dynamic expansion: New transactions automatically included in calculations",
                "Professional formatting: Consistent appearance for investor presentations",
                "Error reduction: Built-in data validation and formatting rules"
              ]
            }
          },
          {
            name: "SUMIF Functions for Account Totals",
            duration: "15 minutes",
            description: "Build automatic account balance calculations using SUMIF",
            details: [
              "Demonstrate: SUMIF to total all cash transactions for Sarah's business",
              "Guided practice: Students build SUMIF for TechStart revenue accounts",
              "Partner work: Create SUMIF formulas for expense account totals",
              "Test: Verify formulas work correctly with new transaction entries"
            ]
          },
          {
            name: "Excel Model Checkpoint",
            duration: "5 minutes",
            description: "Verify working ledger foundation",
            details: [
              "Students test their Excel Table with sample TechStart transactions",
              "Check: Do SUMIF formulas update automatically when new data is added?",
              "Preview Day 5: How do we add error-checking to catch Sarah's mistakes?"
            ]
          }
        ],
        materials: [
          "TechStart transaction dataset (Excel format)",
          "Excel Tables step-by-step guide",
          "SUMIF formula templates",
          "Ledger structure template"
        ]
      },
      {
        day: 5,
        title: "Excel Model: Conditional Formatting & Error Checking",
        focus: "Add visual error detection and automated validation to Sarah's ledger",
        duration: "45 minutes",
        activities: [
          {
            name: "The Self-Auditing Challenge",
            duration: "5 minutes",
            description: "Why Sarah needs automated error detection",
            details: [
              "Problem: Sarah makes data entry mistakes when she's tired or rushed",
              "Impact: Errors in records could cause tax problems or lose investor confidence",
              "Solution: Build Excel features that catch mistakes automatically"
            ]
          },
          {
            name: "Conditional Formatting Rules",
            duration: "20 minutes",
            description: "Create visual indicators for common ledger errors",
            details: [
              "Red flag rule 1: Highlight negative account balances that shouldn't be negative",
              "Red flag rule 2: Flag transactions without proper account codes",
              "Red flag rule 3: Identify unusually large amounts that need verification",
              "Green flag rule: Show properly balanced entries with positive formatting"
            ],
            // COMPONENT: ErrorCheckingSystem.tsx (to be created) - Build conditional formatting rules
            callout: {
              type: "important",
              title: "Sarah's Error-Catching System",
              content: "Visual cues help Sarah spot problems before they become disasters",
              items: [
                "Red highlighting: Immediate attention needed",
                "Yellow highlighting: Double-check this entry",
                "Green highlighting: Entry looks correct",
                "Color coding saves time and prevents mistakes"
              ]
            }
          },
          {
            name: "Trial Balance Auto-Check Formula",
            duration: "15 minutes",
            description: "Build formula to verify debits equal credits automatically",
            details: [
              "Create formula: =ABS(SUM(Debits) - SUM(Credits)) to check balance",
              "Add conditional formatting: Green when balanced (=0), red when unbalanced",
              "Test with Sarah's data: Introduce intentional error to see formula catch it",
              "Students build their own trial balance validation system"
            ]
            // COMPONENT: TrialBalanceGenerator.tsx (to be created) - Create auto-check formula
          },
          {
            name: "Complete Excel Model Test",
            duration: "5 minutes",
            description: "Full system validation with TechStart data",
            details: [
              "Students input all of Sarah's current transactions into their completed model",
              "Check: Do all visual indicators work correctly?",
              "Verify: Does the trial balance auto-check show green (balanced)?",
              "Preview Day 6: How do professional accountants use these systems?"
            ]
          }
        ],
        materials: [
          "Conditional formatting rule examples",
          "Trial balance formula templates",
          "Error detection checklist",
          "Complete TechStart transaction dataset for testing"
        ]
      },
      {
        day: 6,
        title: "Examples: Professional Ledger Applications",
        focus: "Analyze worked examples of self-auditing ledgers in real business contexts",
        duration: "45 minutes",
        activities: [
          {
            name: "Professional Standards Review",
            duration: "10 minutes",
            description: "What makes a ledger investor-ready?",
            details: [
              "Compare Sarah's finished ledger to professional accounting standards",
              "Identify features that build investor confidence in financial controls",
              "Review how self-auditing features prevent common startup mistakes"
            ]
          },
          {
            name: "Worked Example: TechStart Month 3",
            duration: "20 minutes",
            description: "Step-by-step analysis of Sarah's complete monthly ledger",
            details: [
              "Walk through Sarah's Month 3 transactions using the completed Excel model",
              "Demonstrate how error-checking features caught two potential mistakes",
              "Show how SUMIF functions automatically updated account totals",
              "Analyze the trial balance and what it tells Sarah about her business"
            ],
            // COMPONENTS: FinancialStatementMatching.tsx ✅, IncomeStatementSimple.tsx ✅
            callout: {
              type: "example",
              title: "Sarah's Month 3 Success Story",
              content: "The self-auditing ledger catches errors and saves time",
              items: [
                "Error caught: Duplicate entry for dental office payment would have overstated revenue",
                "Time saved: Automatic calculations reduced month-end work from 6 hours to 45 minutes",
                "Confidence gained: Clean trial balance ready for investor presentation",
                "Professional appearance: Formatted ledger impresses Sarah's CPA advisor"
              ]
            }
          },
          {
            name: "Compare: Before and After Systems",
            duration: "10 minutes",
            description: "Side-by-side comparison of manual vs. automated approaches",
            details: [
              "Show Sarah's original notebook system vs. Excel ledger",
              "Calculate time savings and error reduction quantitatively",
              "Discuss how professional systems enable business growth",
              "Connect to essential question: What convinces investors of clean books?"
            ]
          },
          {
            name: "Application Planning",
            duration: "5 minutes",
            description: "Prepare for independent practice tomorrow",
            details: [
              "Teams review their chosen TechStart client focus area",
              "Plan which transactions they'll use for tomorrow's independent work",
              "Preview Day 7: Students build their own complete self-auditing system"
            ]
          }
        ],
        materials: [
          "Sarah's complete Month 3 ledger (example)",
          "Before/after comparison worksheets",
          "Professional ledger standards checklist",
          "TechStart business context review materials"
        ]
      },
      {
        day: 7,
        title: "Exercises: Independent Ledger Construction",
        focus: "Students independently build complete self-auditing ledger for their TechStart focus area",
        duration: "45 minutes",
        activities: [
          {
            name: "Independent Challenge Setup",
            duration: "5 minutes",
            description: "Clear expectations for today's independent work",
            details: [
              "Review success criteria: Working Excel Table, SUMIF functions, error-checking, trial balance",
              "Teams choose their specific TechStart client scenario (bakery, pet grooming, or dental)",
              "Access provided transaction data for their chosen client type"
            ]
          },
          {
            name: "Independent Ledger Construction",
            duration: "30 minutes",
            description: "Students apply all learned skills to build complete system",
            details: [
              "Create Excel Table structure appropriate for their chosen client type",
              "Build SUMIF functions for relevant account categories",
              "Implement conditional formatting rules for error detection",
              "Create trial balance auto-check formula",
              "Test system with provided transaction dataset"
            ],
            // COMPONENTS: TrialBalanceSorting.tsx ✅, TransactionJournal.tsx (to be created)
            callout: {
              type: "important",
              title: "Milestone 1 Assessment Criteria",
              content: "Students must demonstrate mastery of all core skills",
              items: [
                "Excel Table: Proper structure with appropriate headers and formatting",
                "SUMIF Functions: Accurate account total calculations that update automatically",
                "Error Detection: Conditional formatting catches common mistakes",
                "Trial Balance: Auto-check formula correctly identifies balanced/unbalanced entries",
                "Professional Appearance: Formatted for business presentation"
              ]
            }
          },
          {
            name: "Peer Review & Feedback",
            duration: "8 minutes",
            description: "Structured peer feedback using assessment criteria",
            details: [
              "Teams exchange completed ledgers with another team",
              "Use rubric checklist to provide specific feedback",
              "Test each other's systems with additional transactions",
              "Provide constructive suggestions for improvement"
            ]
          },
          {
            name: "Reflection & Preview",
            duration: "2 minutes",
            description: "Self-assessment and preparation for summary phase",
            details: [
              "Students self-assess their ledger against success criteria",
              "Identify areas needing refinement before final presentation",
              "Preview Days 8-10: Integration, refinement, and investor presentation preparation"
            ]
          }
        ],
        materials: [
          "Client-specific transaction datasets (bakery, pet grooming, dental)",
          "Assessment rubric checklist",
          "Peer review feedback forms",
          "Excel troubleshooting guide"
        ]
      },
      {
        day: 8,
        title: "Summary: Integration & System Refinement",
        focus: "Integrate all components and refine ledger systems for professional presentation",
        duration: "45 minutes",
        activities: [
          {
            name: "System Integration Review",
            duration: "10 minutes",
            description: "Ensure all ledger components work together seamlessly",
            details: [
              "Test complete system with full TechStart dataset",
              "Verify Excel Tables, SUMIF functions, and error-checking work together",
              "Identify and fix any integration issues"
            ]
          },
          {
            name: "Professional Formatting & Documentation",
            duration: "20 minutes",
            description: "Prepare ledger for investor presentation standards",
            details: [
              "Apply professional business formatting standards",
              "Add clear documentation explaining how to use the self-auditing features",
              "Create user instructions for non-expert users",
              "Ensure visual appeal appropriate for business presentation"
            ]
          },
          {
            name: "Presentation Planning",
            duration: "10 minutes",
            description: "Plan approach for investor pitch presentation",
            details: [
              "Outline key points: Why self-auditing matters, how system works, benefits to Sarah",
              "Practice explaining technical features in business-friendly language",
              "Prepare to demonstrate error-catching capabilities live"
            ]
            // COMPONENT: PitchPresentationBuilder.tsx (to be created) - 4-minute investor pitch tool
          },
          {
            name: "Final System Validation",
            duration: "5 minutes",
            description: "Complete quality check before presentations",
            details: [
              "Run final test with instructor-provided validation dataset",
              "Confirm system meets all Milestone 3 requirements",
              "Teams sign off that their system is presentation-ready"
            ]
          }
        ],
        materials: [
          "Professional formatting standards guide",
          "User documentation templates",
          "Presentation planning worksheet",
          "Final validation dataset"
        ]
      },
      {
        day: 9,
        title: "Project Work: Presentation Preparation & Rehearsal",
        focus: "Prepare and practice investor pitch presentations with peer feedback",
        duration: "45 minutes",
        activities: [
          {
            name: "Presentation Structure Workshop",
            duration: "15 minutes",
            description: "Learn effective business presentation techniques",
            details: [
              "Review successful investor pitch structure: Problem, Solution, Demonstration, Benefits",
              "Connect to Sarah's story: Why does she need this system?",
              "Practice explaining technical features using business language"
            ]
          },
          {
            name: "Team Rehearsal Time",
            duration: "20 minutes",
            description: "Teams practice their 4-minute investor presentations",
            details: [
              "Teams rehearse complete presentation with live Excel demonstration",
              "Practice timing to ensure 4-minute limit",
              "Prepare for likely investor questions about accuracy and reliability",
              "Refine presentation flow and technical demonstration"
            ]
          },
          {
            name: "Peer Feedback Rounds",
            duration: "10 minutes",
            description: "Structured feedback from other teams",
            details: [
              "Teams present to other teams using presentation feedback protocol",
              "Focus feedback on: clarity of explanation, demonstration effectiveness, business benefits",
              "Provide specific suggestions for improvement before tomorrow's final presentations"
            ]
          }
        ],
        materials: [
          "Investor pitch structure guide",
          "Presentation timing tools",
          "Peer feedback protocol sheets",
          "Technical demonstration checklist"
        ]
      },
      {
        day: 10,
        title: "Presentations: Investor Showcase & Reflection",
        focus: "Final presentations to investor panel and unit reflection",
        duration: "45 minutes",
        activities: [
          {
            name: "Investor Panel Presentations",
            duration: "30 minutes",
            description: "Teams present self-auditing ledgers to finance professional panel",
            details: [
              "Each team delivers 4-minute investor pitch with live Excel demonstration",
              "Panel asks questions about system accuracy, reliability, and business value",
              "Teams demonstrate error-catching features and explain investor benefits",
              "Panel provides feedback on presentation quality and system effectiveness"
            ],
            // COMPONENT: PitchPresentationBuilder.tsx (to be created) - Final presentations
            callout: {
              type: "important",
              title: "Final Assessment: Investor Presentation",
              content: "Authentic assessment mirroring real investor due diligence",
              items: [
                "Technical accuracy: All Excel functions work correctly",
                "Business communication: Clear explanation of system benefits",
                "Professional presentation: Appropriate for investor audience",
                "Q&A handling: Confident responses to panel questions"
              ]
            }
          },
          {
            name: "Unit Reflection & Learning Analysis",
            duration: "10 minutes",
            description: "Students reflect on learning journey and connect to future applications",
            details: [
              "Reflection writing: How did building Sarah's ledger change your understanding of business systems?",
              "Learning analysis: Which skills (accounting concepts vs. Excel techniques) were most challenging?",
              "Future application: How might these skills help in other business contexts?",
              "Connection to Unit 2: What business challenge might Sarah face next as TechStart grows?"
            ]
            // COMPONENT: ReflectionJournal.tsx ✅ - Document learning journey
          },
          {
            name: "Portfolio Addition & Closure",
            duration: "5 minutes",
            description: "Document learning achievements and prepare for next unit",
            details: [
              "Add completed ledger system to digital portfolio with reflection notes",
              "Celebrate team achievements and acknowledge growth in business thinking",
              "Preview Unit 2: Sarah's next challenge with month-end processes and automation"
            ]
          }
        ],
        materials: [
          "Investor panel evaluation forms",
          "Reflection writing prompts",
          "Portfolio submission guidelines",
          "Unit 2 preview materials"
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
        "Exit Tickets: Daily 2-3 question checks on key concepts",
        "Peer Review: Structured feedback using specific checklists",
        "Teacher Conferences: 5-minute check-ins with each team",
        "Self-Assessment: Students rate their confidence and progress",
        "Digital Portfolio: Students document learning journey"
      ]
    },
    {
      category: "feedback",
      title: "Feedback Strategies",
      strategies: [
        "Specific & Actionable: \"Add SUMIF formula to cell C15 to total debits\"",
        "Growth-Oriented: Focus on progress and next steps",
        "Timely: Feedback within 24 hours of milestone submission",
        "Multiple Sources: Teacher, peer, and self-feedback"
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students",
      strategies: [
        "Scaffolded Formulas: Provide partial SUMIF syntax templates",
        "Step-by-Step Guides: Visual walkthroughs for each Excel skill",
        "Peer Tutoring: Pair with students strong in Excel",
        "Alternative Assessment: Oral explanation option for presentations"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Extension Challenges: Dynamic dropdowns for account selection",
        "Peer Teaching: Support struggling classmates",
        "Advanced Features: Explore pivot tables or basic VBA",
        "Leadership Roles: Facilitate team discussions and planning"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Vocabulary Support: Business terms glossary with visuals",
        "Translation Tools: Key concepts in home language",
        "Visual Aids: Infographics and flowcharts for processes",
        "Collaborative Support: Mixed-language team structures"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: 1:1 laptops or computers with Excel access" },
        { name: "Software: Microsoft Excel (365 or 2019+) with Analysis ToolPak" },
        { name: "Internet: For founder interview and resource access" },
        { name: "Presentation: Projector/smart board for demos" },
        { name: "Audio/Video: For recording final presentations" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials",
      items: [
        { name: "SUMIF Formula Cheat Sheet", link: "../excel-instruction/sumif-cheat-sheet.pdf" },
        { name: "Conditional Formatting Guide", link: "../excel-instruction/conditional-formatting-guide.pdf" },
        { name: "Project Assessment Rubric", link: "../assessment-rubrics/project-rubric.html" },
        { name: "Sample Transaction Datasets", link: "../mini-project/transaction-datasets.xlsx" },
        { name: "Peer Review Checklist", link: "../assessment-rubrics/peer-review-checklist.pdf" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Guest Speakers: Local startup founders, CPAs, business owners" },
        { name: "Industry Examples: Real business transaction data (anonymized)" },
        { name: "Professional Networks: PTA members with finance backgrounds" },
        { name: "Community Partners: Local chambers of commerce, SCORE mentors" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students demonstrate deep understanding of the accounting equation?",
      "Were Excel skills transferred successfully to authentic business contexts?",
      "How effectively did the investor panel format assess real-world application?",
      "What differentiation strategies were most effective?",
      "How can we improve the connection between this unit and Unit 2?"
    ],
    dataCollection: [
      "Student Feedback: Exit survey on engagement and learning",
      "Performance Data: Analysis of milestone and final assessment results",
      "Peer Observations: Colleague feedback on lesson effectiveness",
      "Panel Feedback: Investor panel comments on student presentations",
      "Time Tracking: Actual vs. planned lesson durations"
    ],
    nextUnitPrep: [
      "Archive exemplary student ledgers for future reference",
      "Document common Excel errors for targeted instruction",
      "Identify students needing additional accounting foundation support",
      "Prepare handoff materials connecting to month-end automation challenges"
    ]
  }
}