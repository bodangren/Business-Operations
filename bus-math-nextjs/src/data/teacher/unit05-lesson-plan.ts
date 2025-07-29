import { UnitLessonPlan } from "@/types/lesson-plan"

export const unit05LessonPlan: UnitLessonPlan = {
  unitNumber: 5,
  unitTitle: "PayDay Simulator",
  description: "Complete 10-day lesson plan for payroll processing and cash flow management",
  essentialQuestion: "How can a small business owner predict payroll cash-outs and still make rent on time?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math",
    course: "Math for Business Operations"
  },

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Accurate payroll calculations protect both employees and business owners from legal and financial risks",
      "Cash flow timing is critical - payroll commitments must align with revenue cycles",
      "Systematic reconciliation processes prevent costly errors and maintain compliance",
      "Professional payroll systems build employee trust and business credibility"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "Gross and net pay calculations including all standard withholdings",
          "Federal and state tax table interpretation and application",
          "Employer tax contributions and liability calculations",
          "Payroll register reconciliation with bank transactions",
          "Cash flow timing analysis for payroll obligations"
        ]
      },
      {
        category: "technical",
        items: [
          "XLOOKUP function for employee data and tax table retrieval",
          "IF logic for conditional deductions and calculations",
          "SUMIFS functions for multi-criteria payroll analysis",
          "Data validation for bilingual pay stub formatting",
          "Conditional formatting for reconciliation alerts"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Calculate accurate gross-to-net pay for hourly, salaried, and tipped employees",
          "Apply federal and state tax tables to determine withholdings",
          "Reconcile payroll registers against bank statements to identify timing issues",
          "Analyze cash flow patterns to predict payroll funding needs",
          "Create professional bilingual pay stubs for diverse workforces"
        ]
      },
      {
        category: "technical",
        items: [
          "Use XLOOKUP to retrieve employee rates and tax information dynamically",
          "Build complex IF statements for conditional payroll logic",
          "Apply SUMIFS for sophisticated payroll reporting and analysis",
          "Implement data validation for error-free payroll entry",
          "Create visual alerts for reconciliation discrepancies"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Payroll Tutorial Screencast + Live Q&A (Day 10)",
      description: "Students create and present a comprehensive tutorial explaining their payroll system",
      scenario: "Students publish a professional tutorial on the school's YouTube channel for local youth entrepreneurs, followed by a live Q&A session with real small business owners about payroll challenges.",
      requirements: [
        "5-minute screencast demonstrating complete payroll process from data entry to reconciliation",
        "Clear explanation of gross-to-net calculations and tax logic in business-friendly language",
        "Live demonstration of error-checking and reconciliation features",
        "Q&A response to real business owner questions about practical implementation"
      ],
      context: "This mirrors real business mentorship where experienced entrepreneurs share knowledge with newcomers, building the professional communication skills essential for business success."
    },
    milestones: [
      {
        day: 3,
        title: "Prototype Calculator",
        description: "Single-employee payroll calculator with accurate gross-to-net computation",
        criteria: [
          "Correct calculation of gross pay from hours/rate or salary",
          "Accurate application of federal and state tax withholdings",
          "Proper calculation of FICA taxes and other standard deductions",
          "Clear display of net pay with all deduction details"
        ]
      },
      {
        day: 6,
        title: "Register + Stubs",
        description: "Complete payroll register with professional pay stub generation",
        criteria: [
          "XLOOKUP integration for employee data retrieval",
          "Bilingual pay stub formatting with data validation",
          "Professional appearance suitable for employee distribution",
          "Error-checking for missing or invalid employee data"
        ]
      },
      {
        day: 7,
        title: "Reconciliation Report",
        description: "Bank reconciliation system identifying timing mismatches",
        criteria: [
          "SUMIFS formulas comparing payroll register to bank transactions",
          "Visual identification of timing discrepancies and errors",
          "Cash flow analysis predicting future payroll funding needs",
          "Professional reconciliation report format"
        ]
      }
    ],
    rubric: [
      {
        name: "Calculation Accuracy",
        weight: "50%",
        exemplary: "All gross/net formulas and tax tables compute perfect results for hourly, salaried, and tipped employees; handles edge cases flawlessly",
        proficient: "Minor calculation errors (1-2) but core logic is sound; correctly handles standard employee types",
        developing: "Multiple calculation errors; tax logic incomplete; results unreliable for business use"
      },
      {
        name: "Reconciliation Success", 
        weight: "15%",
        exemplary: "Bank/payroll matching is perfect with all discrepancies identified and clearly explained with business impact",
        proficient: "Most transactions reconcile correctly; major discrepancies identified with basic explanations",
        developing: "Limited reconciliation success; discrepancies identified but not explained"
      },
      {
        name: "Tutorial Clarity",
        weight: "20%",
        exemplary: "Screencast demonstrates crystal-clear steps with professional labeling and comprehensive summary of business value",
        proficient: "Clear demonstration of main features with adequate explanation of business benefits",
        developing: "Basic demonstration but unclear explanation; limited business context"
      },
      {
        name: "Iteration & Feedback",
        weight: "15%",
        exemplary: "Significant improvements clearly documented in final version; responds expertly to all feedback",
        proficient: "Some improvements visible based on feedback; addresses most suggestions adequately",
        developing: "Limited response to feedback; few improvements evident"
      }
    ]
  },

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Launch & Explore: The Payroll Crisis",
          description: "Analyze realistic payroll cash flow scenarios and identify business risks",
          days: "Day 1"
        },
        {
          title: "Core Concepts: Payroll Mathematics",
          description: "Master gross-to-net calculations and tax table applications",
          days: "Days 2-3"
        },
        {
          title: "Excel Model: Automated Payroll System",
          description: "Build sophisticated payroll calculator with XLOOKUP and conditional logic",
          days: "Days 4-6"
        },
        {
          title: "Examples & Exercises: Reconciliation Mastery",
          description: "Analyze professional reconciliation examples and build complete systems",
          days: "Day 7"
        },
        {
          title: "Summary & Presentation: Tutorial Creation",
          description: "Create professional tutorials and present to authentic business audience",
          days: "Days 8-10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Launch & Explore: The Payroll Cash Crunch",
        focus: "Analyze realistic payroll timing crisis through interactive scenario",
        duration: "45 minutes",
        activities: [
          {
            name: "Café Owner Crisis Skit",
            duration: "8 minutes",
            description: "Watch dramatic scenario of small business payroll emergency",
            details: [
              "Students watch 3-minute skit showing café owner Maria discovering overdraft after payroll",
              "Scenario reveals timing mismatch: payroll processed Friday, but weekend receipts not deposited",
              "Maria faces choice: bounce payroll checks or emergency loan with high fees"
            ],
            video: {
              title: "Maria's Friday Crisis: When Payroll Goes Wrong",
              duration: "3 minutes",
              description: "Follow café owner Maria through a realistic payroll crisis where timing mismatches create cash flow emergencies. See the real business impact of poor payroll planning."
            },
            callout: {
              type: "important",
              title: "Real Business Impact",
              content: "43% of small businesses struggle with payroll cash flow timing",
              items: [
                "Overdraft fees: $35-50 per bounced payroll check",
                "Employee trust: Lost when paychecks bounce or are delayed",
                "Legal liability: Penalties for late payroll can reach $5,000+",
                "Emergency loans: Interest rates of 15-30% for payroll advances"
              ]
            }
          },
          {
            name: "Bank Statement Analysis",
            duration: "15 minutes",
            description: "Students analyze Maria's actual bank statement and payroll register",
            details: [
              "Review Maria's bank statement showing transaction timing patterns",
              "Compare payroll register entries with actual bank debits",
              "Identify the timing gaps that caused the overdraft situation",
              "Calculate the true cost of Maria's payroll timing mistake"
            ],
            interactiveActivities: [
              {
                type: "drag-drop",
                title: "Transaction Timeline Matching",
                description: "Match payroll entries with bank statement timing to identify gaps",
                duration: "8 minutes"
              },
              {
                type: "multiple-choice",
                title: "Crisis Prevention Quiz",
                description: "Identify which timing changes would have prevented Maria's crisis",
                duration: "7 minutes"
              }
            ]
          },
          {
            name: "Payroll Challenge Brainstorm",
            duration: "12 minutes",
            description: "Teams identify payroll risks and brainstorm solutions",
            details: [
              "Think-Pair-Share: What payroll mistakes could destroy a small business?",
              "Team discussion: How can Excel help business owners avoid Maria's mistakes?",
              "Class sharing: What features would make a 'smart' payroll system?"
            ],
            interactiveActivities: [
              {
                type: "think-pair-share", 
                title: "Payroll Risk Analysis",
                description: "Individual thinking (3 min) → Partner discussion (5 min) → Class sharing (4 min)",
                duration: "12 minutes"
              }
            ]
          },
          {
            name: "Project Introduction & Team Formation",
            duration: "10 minutes",
            description: "Introduce PayDay Simulator challenge and form teams",
            details: [
              "Present essential question: How can we predict payroll cash-outs and avoid Maria's crisis?",
              "Form teams of 2-3 students to build comprehensive payroll system",
              "Teams choose employee scenario focus: hourly workers, tipped employees, or salaried staff",
              "Initial planning: What does our chosen business type need most?"
            ]
          }
        ],
        materials: [
          "Maria's Crisis video and discussion guide",
          "Sample bank statement and payroll register (realistic data)",
          "Interactive timeline matching activity",
          "Team formation materials and scenario selection cards"
        ]
      },
      {
        day: 2,
        title: "Skill Introduction: Gross to Net Calculations", 
        focus: "Master fundamental payroll mathematics with realistic scenarios",
        duration: "45 minutes",
        activities: [
          {
            name: "Maria's Employee Challenge",
            duration: "5 minutes",
            description: "Connect to real business need for accurate payroll calculations",
            details: [
              "Review: Maria's crisis was about timing, but what if her calculations were also wrong?",
              "Preview: Today we master the math that keeps employees happy and businesses legal",
              "Connect to essential question: How do we calculate exactly what employees earn and owe?"
            ]
          },
          {
            name: "Gross Pay Foundation",
            duration: "15 minutes", 
            description: "Direct instruction on base pay calculations for different employee types",
            details: [
              "Hourly employees: Hours × Rate + Overtime (1.5× rate after 40 hours)",
              "Salaried employees: Annual salary ÷ pay periods, handling partial periods",
              "Tipped employees: Base wage + reported tips, meeting minimum wage requirements",
              "Practice with Maria's café staff across all three categories"
            ],
            callout: {
              type: "definition",
              title: "Gross Pay Calculation Rules",
              content: "Different employee types require different calculation approaches",
              items: [
                "Hourly: Regular hours + overtime (time-and-a-half after 40 hrs/week)",
                "Salaried: Fixed amount per pay period, regardless of hours worked",
                "Tipped: Minimum wage guarantee ($7.25) vs. base wage ($2.13) + tips",
                "Special cases: Holiday pay, commission, bonuses require separate handling"
              ]
            }
          },
          {
            name: "Tax Withholding Introduction",
            duration: "18 minutes",
            description: "Guided instruction on federal and state tax calculations",
            details: [
              "Federal income tax: Using W-4 information and tax tables",
              "FICA taxes: Social Security (6.2%) and Medicare (1.45%) on all wages",
              "State income tax: Varies by state, using appropriate tax tables",
              "Other deductions: Health insurance, retirement contributions (pre/post-tax)"
            ],
            callout: {
              type: "important",
              title: "Tax Withholding Accuracy is Critical",
              content: "Mistakes in tax calculations create legal and financial problems",
              items: [
                "Under-withholding: Employees owe money at tax time, blame employer",
                "Over-withholding: Employees lose use of their money, damage morale",
                "Employer penalties: IRS fines for incorrect withholding can be severe",
                "Record keeping: All calculations must be documented and auditable"
              ]
            }
          },
          {
            name: "Net Pay Practice",
            duration: "7 minutes",
            description: "Hands-on calculation practice with Maria's employees",
            details: [
              "Calculate net pay for Maria's hourly barista (32 hours at $15/hour)",
              "Determine take-home for Maria's salaried manager ($45,000 annually, biweekly pay)",
              "Practice with tipped server scenario ($2.13/hour + $180 tips for 25 hours)",
              "Check work: Verify all calculations and discuss common errors"
            ]
          }
        ],
        materials: [
          "Federal and state tax tables (current year)",
          "W-4 form examples and interpretation guide", 
          "Payroll calculation worksheets",
          "Maria's café employee scenarios with realistic wage data"
        ]
      },
      {
        day: 3,
        title: "Application Practice: Building the Prototype Calculator",
        focus: "Students build single-employee payroll calculator with guided support",
        duration: "45 minutes",
        activities: [
          {
            name: "Excel Setup & Structure",
            duration: "10 minutes",
            description: "Create professional payroll calculator foundation",
            details: [
              "Set up Excel worksheet with clear sections: Employee Info, Gross Pay, Deductions, Net Pay",
              "Use professional formatting with appropriate headers and cell protection",
              "Create input area for employee data: name, pay rate, hours, tax status",
              "Design output area for final pay stub information"
            ]
          },
          {
            name: "Gross Pay Formulas",
            duration: "12 minutes",
            description: "Build formulas for different employee types",
            details: [
              "IF statement for overtime: =IF(Hours>40, 40*Rate + (Hours-40)*Rate*1.5, Hours*Rate)",
              "Salary calculation: =Annual_Salary/Pay_Periods with partial period handling",
              "Tipped employee logic: =MAX(Hours*Min_Wage, Hours*Base_Rate + Tips)",
              "Test formulas with Maria's employee scenarios to verify accuracy"
            ],
            callout: {
              type: "tip",
              title: "Formula Best Practices for Payroll",
              content: "Payroll formulas must be bulletproof and auditable", 
              items: [
                "Use named ranges: 'Overtime_Rate' instead of '1.5' for clarity",
                "Add comments: Explain complex IF logic for future reference",
                "Error checking: Use IFERROR to handle division by zero",
                "Consistent formatting: Round to 2 decimal places for currency"
              ]
            }
          },
          {
            name: "Tax Calculation Implementation",
            duration: "15 minutes",
            description: "Build tax withholding formulas using tax tables",
            details: [
              "Federal income tax: Use VLOOKUP or XLOOKUP with tax table data",
              "FICA calculations: Social Security and Medicare as percentage of gross",
              "State tax implementation: Research and apply local tax rules",
              "Pre-tax deductions: Health insurance, 401k contributions reduce taxable income"
            ]
          },
          {
            name: "Milestone 1 Assessment",
            duration: "8 minutes", 
            description: "Test calculator with realistic scenarios and peer review",
            details: [
              "Students test calculator with provided employee scenarios",
              "Peer review: Exchange calculators and verify each other's formulas",
              "Check against provided answer key for accuracy",
              "Document any issues found and plan corrections for tomorrow"
            ],
            callout: {
              type: "important",
              title: "Milestone 1: Prototype Calculator Success Criteria",
              content: "Calculator must handle all basic payroll scenarios accurately",
              items: [
                "Gross pay: Correct for hourly (with overtime), salaried, and tipped employees",
                "Tax calculations: Federal income, FICA taxes calculated properly",
                "Net pay: Final amount matches hand calculations within $0.01",
                "Professional format: Clear layout suitable for business use"
              ]
            }
          }
        ],
        materials: [
          "Excel payroll template starter file",
          "Current federal and state tax tables",
          "Employee scenario test cases with answer keys",
          "Peer review checklist for calculator accuracy"
        ]
      },
      {
        day: 4,
        title: "Feedback & Iteration: Calculator Refinement",
        focus: "Refine calculators based on testing and add error-checking features",
        duration: "45 minutes",
        activities: [
          {
            name: "Bug Analysis & Fixes",
            duration: "15 minutes",
            description: "Systematic review and correction of calculator issues",
            details: [
              "Review common issues found in peer testing: formula errors, rounding problems, edge cases",
              "Fix overtime calculation bugs: ensure proper time-and-a-half implementation",
              "Correct tax table lookup errors: verify VLOOKUP/XLOOKUP ranges and results",
              "Test fixes with challenging scenarios: zero hours, maximum wage employees"
            ]
          },
          {
            name: "Error-Checking Features",
            duration: "20 minutes",
            description: "Add professional error detection and validation",
            details: [
              "Data validation: Restrict hours to 0-80, wages to reasonable ranges",
              "Conditional formatting: Highlight unusual values (negative pay, extreme hours)",
              "Formula auditing: Add check formulas to verify calculation accuracy",
              "Warning messages: Use IF statements to flag potential data entry errors"
            ],
            callout: {
              type: "tip",
              title: "Professional Payroll Error Prevention",
              content: "Real payroll systems must prevent costly mistakes before they happen",
              items: [
                "Input validation: Prevent impossible data entry (negative hours, blank names)",
                "Range checking: Flag unusually high or low values for review",
                "Cross-validation: Verify calculated results against expected ranges",
                "Audit trails: Document all inputs and calculations for compliance"
              ]
            }
          },
          {
            name: "User Interface Polish",
            duration: "7 minutes",
            description: "Improve calculator appearance and usability",
            details: [
              "Professional formatting: Consistent fonts, colors, and number formats",
              "Clear labeling: Add descriptive headers and instructions",
              "Print optimization: Ensure calculator prints cleanly on one page",
              "User-friendly design: Logical flow from inputs to outputs"
            ]
          },
          {
            name: "Final Testing & Documentation",
            duration: "3 minutes",
            description: "Comprehensive validation and preparation for scaling",
            details: [
              "Test refined calculator with instructor's validation dataset",
              "Document any remaining limitations or assumptions",
              "Preview Day 5: How do we scale this for multiple employees?"
            ]
          }
        ],
        materials: [
          "Bug tracking worksheet for systematic fixes",
          "Data validation templates and examples",
          "Professional formatting style guide",
          "Instructor validation dataset for final testing"
        ]
      },
      {
        day: 5,
        title: "Reflection/Checkpoint: System Planning",
        focus: "Reflect on learning and plan multi-employee system expansion",
        duration: "45 minutes",
        activities: [
          {
            name: "Learning Reflection Journal",
            duration: "12 minutes",
            description: "Document learning journey and identify growth areas",
            details: [
              "Reflection prompt: What was most challenging about payroll calculations?",
              "Technical analysis: Which Excel skills were new vs. building on prior knowledge?",
              "Business insight: How does accurate payroll connect to business success?",
              "Error analysis: What mistakes taught you the most about payroll systems?"
            ]
          },
          {
            name: "Cash Flow Visibility Discussion",
            duration: "18 minutes",
            description: "Connect payroll accuracy to business cash flow management",
            details: [
              "Small group discussion: How does payroll timing affect business cash flow?",
              "Case study analysis: Review Maria's crisis from a cash flow prediction perspective",
              "Solution brainstorming: What Excel features could help predict payroll cash needs?",
              "Class synthesis: Combine insights into comprehensive cash flow management approach"
            ],
            callout: {
              type: "important",
              title: "Payroll and Cash Flow Management Connection",
              content: "Accurate payroll calculation is only half the battle",
              items: [
                "Timing prediction: Know exactly when payroll cash will be needed",
                "Revenue alignment: Ensure sufficient deposits before payroll dates",
                "Emergency planning: Have backup funding for unexpected timing gaps",
                "Growth planning: Scale payroll systems as business adds employees"
              ]
            }
          },
          {
            name: "Multi-Employee System Planning",
            duration: "12 minutes",
            description: "Plan approach for scaling to full payroll register",
            details: [
              "Architecture discussion: How do we handle 10+ employees efficiently?",
              "Excel tool preview: Introduction to XLOOKUP for employee data management", 
              "Template planning: Design structure for consistent multi-employee processing",
              "Role specialization: Teams plan focus areas (hourly, salaried, tipped scenarios)"
            ]
          },
          {
            name: "Week 2 Goal Setting",
            duration: "3 minutes",
            description: "Set specific objectives for completing the payroll system",
            details: [
              "Teams set SMART goals for their multi-employee payroll register",
              "Identify specific Excel skills needed for Week 2 success",
              "Preview Day 6: Introduction to XLOOKUP and payroll register construction"
            ]
          }
        ],
        materials: [
          "Reflection journal prompts and templates",
          "Cash flow case study materials", 
          "Multi-employee system planning worksheets",
          "Week 2 goal setting templates"
        ]
      },
      {
        day: 6,
        title: "New Skill Focus: XLOOKUP & Multi-Employee Systems",
        focus: "Master XLOOKUP for employee data management and payroll register creation",
        duration: "45 minutes",
        activities: [
          {
            name: "XLOOKUP Introduction & Payroll Applications",
            duration: "15 minutes",
            description: "Learn XLOOKUP syntax and advantages for payroll systems",
            details: [
              "XLOOKUP vs VLOOKUP: Why XLOOKUP is superior for payroll data management",
              "Basic syntax: =XLOOKUP(lookup_value, lookup_array, return_array)",
              "Payroll examples: Looking up employee rates, tax status, and deduction amounts",
              "Error handling: Using XLOOKUP with if_not_found parameter for missing employees"
            ],
            callout: {
              type: "tip",
              title: "Why XLOOKUP Revolutionizes Payroll Systems",
              content: "XLOOKUP makes complex payroll data management simple and reliable",
              items: [
                "Bidirectional lookup: Can search left or right, unlike VLOOKUP",
                "Exact match default: Reduces errors from approximate matches",
                "Multiple criteria: Can combine with other functions for complex lookups",
                "Dynamic arrays: Returns multiple values when needed"
              ]
            }
          },
          {
            name: "Employee Database Construction",
            duration: "12 minutes",
            description: "Build comprehensive employee master data table",
            details: [
              "Create employee master table: ID, Name, Rate, Tax_Status, Deductions, Department",
              "Professional formatting: Excel Tables with structured references",
              "Data validation: Ensure consistent data entry for reliable lookups",
              "Test data: Populate with realistic employee scenarios for practice"
            ]
          },
          {
            name: "Payroll Register Development",
            duration: "15 minutes",
            description: "Build multi-employee payroll processing system",
            details: [
              "Register structure: Employee_ID, Hours, Gross_Pay, Taxes, Deductions, Net_Pay",
              "XLOOKUP integration: Pull employee rates and tax information automatically",
              "Batch processing: Handle multiple employees efficiently with consistent formulas",
              "Summary calculations: Total payroll costs and tax liabilities"
            ]
          },
          {
            name: "Bilingual Pay Stub Templates",
            duration: "3 minutes",
            description: "Create professional pay stubs with language options",
            details: [
              "Template design: Professional layout with bilingual field labels",
              "Data validation: Dropdown for English/Spanish language selection",
              "Dynamic formatting: Conditional display of appropriate language text",
              "Preview Day 7: Integration with reconciliation systems"
            ]
          }
        ],
        materials: [
          "XLOOKUP tutorial and practice exercises",
          "Employee database template with sample data",  
          "Payroll register template structure",
          "Bilingual pay stub templates (English/Spanish)"
        ]
      },
      {
        day: 7,
        title: "Model Completion: 10-Employee System & Reconciliation",
        focus: "Complete full payroll system with bank reconciliation capabilities",
        duration: "45 minutes",
        activities: [
          {
            name: "System Integration Testing",
            duration: "10 minutes",
            description: "Verify all components work together seamlessly",
            details: [
              "End-to-end test: Process complete payroll for 10 employees",
              "Verification: Check that XLOOKUP pulls correct data for all employees",
              "Error testing: Intentionally input bad data to test error handling",
              "Performance check: Ensure system runs efficiently with full dataset"
            ]
          },
          {
            name: "Bank Reconciliation System",
            duration: "20 minutes",
            description: "Build reconciliation system to match payroll register with bank transactions",
            details: [
              "SUMIFS for reconciliation: Match payroll totals with bank statement debits",
              "Timing analysis: Identify when payroll hits bank vs. when processed",
              "Discrepancy detection: Highlight differences between register and bank records",
              "Cash flow prediction: Project future payroll cash needs based on patterns"
            ],
            callout: {
              type: "important",
              title: "Milestone 3: Reconciliation Report Success Criteria",
              content: "Reconciliation system must identify all timing and amount discrepancies",
              items: [
                "Perfect matching: SUMIFS accurately totals payroll by date and amount",
                "Visual alerts: Conditional formatting highlights discrepancies immediately", 
                "Timing analysis: Clear identification of processing vs. bank timing gaps",
                "Professional format: Report suitable for management and auditor review"
              ]
            }
          },
          {
            name: "Extreme Scenario Testing",
            duration: "10 minutes",
            description: "Test system with challenging payroll scenarios", 
            details: [
              "Scenario cards: Overtime, bonuses, unpaid leave, tax status changes",
              "Edge case testing: Maximum wage employees, zero-hour periods, retroactive changes",
              "Error recovery: Verify system handles and reports calculation problems",
              "Documentation: Record how system performs under stress conditions"
            ]
          },
          {
            name: "Milestone 3 Assessment",
            duration: "5 minutes",
            description: "Final validation of complete payroll system",
            details: [
              "Instructor review: Verify all milestone criteria are met",
              "Self-assessment: Teams evaluate their system against success criteria",
              "Preview Day 8: Preparation for tutorial creation and presentation"
            ]
          }
        ],
        materials: [
          "10-employee test dataset with diverse scenarios",
          "Bank statement data for reconciliation practice",
          "Extreme scenario challenge cards",
          "Milestone assessment rubric and checklist"
        ]
      },
      {
        day: 8,
        title: "Presentation Prep: Tutorial Planning",
        focus: "Plan comprehensive tutorial explaining payroll system for business audience",
        duration: "45 minutes", 
        activities: [
          {
            name: "Audience Analysis & Tutorial Structure",
            duration: "12 minutes",
            description: "Design tutorial for youth entrepreneur audience",
            details: [
              "Audience needs: What do young entrepreneurs need to know about payroll?",
              "Tutorial structure: Problem → Solution → Demonstration → Implementation tips",
              "Business language: Translate technical Excel features into business benefits",
              "Common questions: Anticipate practical concerns from real business owners"
            ],
            callout: {
              type: "tip",
              title: "Effective Business Tutorial Design",
              content: "Great tutorials focus on business value, not just technical features",
              items: [
                "Start with pain: Show the real business problem payroll mistakes cause",
                "Demonstrate value: Prove how the system saves time and prevents errors",
                "Make it actionable: Provide specific steps viewers can implement",
                "Address concerns: Anticipate and answer common implementation questions"
              ]
            }
          },
          {
            name: "Screencast Storyboard Creation",
            duration: "18 minutes",
            description: "Plan detailed tutorial flow and visual demonstrations",
            details: [
              "Opening hook: Dramatic payroll crisis scenario to grab attention",
              "System overview: High-level view of complete payroll solution",
              "Feature demonstration: Step-by-step walkthrough of key Excel functions",
              "Business impact: Quantify time savings and error reduction benefits",
              "Implementation guide: Practical steps for viewers to adapt the system"
            ]
          },
          {
            name: "Technical Demonstration Practice",
            duration: "12 minutes",
            description: "Rehearse smooth Excel demonstrations for screencast",
            details: [
              "Screen recording setup: Optimize Excel view for clear video capture",
              "Smooth narration: Practice explaining while demonstrating Excel features",
              "Error handling: Plan how to address technical issues during recording",
              "Timing practice: Ensure demonstration fits within 5-minute target"
            ]
          },
          {
            name: "Q&A Preparation",
            duration: "3 minutes",
            description: "Prepare for live questions from business owner audience",
            details: [
              "Anticipate questions: What will real business owners want to know?",
              "Prepare examples: Have concrete scenarios ready for explanations",
              "Preview Day 9: Mock panel feedback and final tutorial refinement"
            ]
          }
        ],
        materials: [
          "Tutorial storyboard templates",
          "Screen recording software and setup guide",
          "Business audience persona profiles",
          "Q&A preparation worksheet with common questions"
        ]
      },
      {
        day: 9,
        title: "Mock Panel & Revisions: Tutorial Refinement",
        focus: "Receive feedback and refine tutorials for maximum impact",
        duration: "45 minutes",
        activities: [
          {
            name: "Mock Screencast Presentations",
            duration: "25 minutes",
            description: "Teams present draft tutorials to peer audience for feedback",
            details: [
              "3-minute tutorial previews: Each team shows key segments of their screencast",
              "Clarity assessment: Does the explanation make sense to non-experts?",
              "Technical review: Are Excel demonstrations smooth and professional?",
              "Business value check: Is the practical impact clearly communicated?"
            ]
          },
          {
            name: "Structured Peer Feedback",
            duration: "12 minutes",
            description: "Systematic feedback using professional review criteria",
            details: [
              "Screencast rubric review: Evaluate tutorials against final assessment criteria",
              "Specific suggestions: Provide actionable feedback for improvement",
              "Technical accuracy check: Verify all Excel formulas and explanations are correct",
              "Audience appropriateness: Ensure language and pace suit target audience"
            ],
            callout: {
              type: "important",
              title: "Peer Feedback Focus Areas",
              content: "Effective feedback helps tutorials reach professional standards",
              items: [
                "Clarity: Can non-experts follow the explanation and demonstration?",
                "Accuracy: Are all calculations and Excel features explained correctly?",
                "Business value: Is the practical impact clearly communicated?",
                "Professional polish: Does the tutorial reflect well on the school/students?"
              ]
            }
          },
          {
            name: "Revision Planning & Implementation",
            duration: "8 minutes",
            description: "Plan and begin implementing improvements based on feedback",
            details: [
              "Priority setting: Identify most critical improvements for tutorial success",
              "Resource allocation: Divide revision tasks among team members efficiently",
              "Timeline planning: Schedule final recording and editing for tomorrow",
              "Quality standards: Commit to professional standards for published tutorial"
            ]
          }
        ],
        materials: [
          "Screencast evaluation rubric",
          "Peer feedback forms with specific criteria",
          "Revision planning templates",
          "Technical troubleshooting guide for recording issues"
        ]
      },
      {
        day: 10,
        title: "Public Presentation: YouTube Publication & Business Q&A",
        focus: "Publish professional tutorials and engage with authentic business audience",
        duration: "45 minutes",
        activities: [
          {
            name: "Final Tutorial Upload & Publication",
            duration: "10 minutes",
            description: "Publish completed tutorials to school YouTube channel",
            details: [
              "Upload process: Submit final screencasts to school YouTube channel",
              "Metadata optimization: Add descriptions, tags, and thumbnails for discovery",
              "Quality check: Verify video and audio quality meets publication standards",
              "Link sharing: Prepare links for live audience engagement"
            ]
          },
          {
            name: "Live Business Owner Q&A Session",
            duration: "25 minutes",
            description: "Present tutorials to real small business owners and answer questions",
            details: [
              "Tutorial presentation: 3-minute live overview of each team's payroll system",
              "Practical questions: Business owners ask about real-world implementation challenges",
              "Expert responses: Students demonstrate deep understanding through detailed answers",
              "Business networking: Professional interaction with local entrepreneur community"
            ],
            callout: {
              type: "important",
              title: "Final Assessment: Business Professional Interaction",
              content: "Authentic assessment through real business community engagement",
              items: [
                "Professional communication: Business-appropriate language and demeanor",
                "Technical mastery: Confident explanation of Excel features and benefits",
                "Practical application: Realistic advice for actual business implementation", 
                "Problem-solving: Thoughtful responses to unexpected questions and challenges"
              ]
            }
          },
          {
            name: "Unit Reflection & Portfolio Addition",
            duration: "8 minutes",
            description: "Reflect on learning journey and document achievements",
            details: [
              "Learning reflection: How did building payroll systems change your business understanding?",
              "Skill transfer: Which Excel and business skills apply to other contexts?",
              "Community impact: How does sharing knowledge benefit the local business community?",
              "Portfolio documentation: Add tutorial links and reflection to digital portfolio"
            ]
          },
          {
            name: "Unit 6 Connection & Closure",
            duration: "2 minutes",
            description: "Connect payroll insights to upcoming pricing analysis unit",
            details: [
              "Cash flow connection: How does payroll timing affect pricing decisions?",
              "Preview Unit 6: Using payroll cost data for competitive pricing strategies",
              "Celebration: Acknowledge teams' professional tutorial creation and business engagement"
            ]
          }
        ],
        materials: [
          "YouTube upload guide and school channel access",
          "Business owner contact list and introduction materials",
          "Reflection prompts connecting to portfolio development",
          "Unit 6 preview materials showing payroll cost connections"
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
        "Daily Calculation Checks: Quick verification of payroll math accuracy",
        "Peer Formula Review: Students check each other's Excel logic",
        "Error Analysis: Systematic review of common payroll mistakes",
        "Progress Conferences: Brief team check-ins on system development",
        "Self-Assessment Checklists: Students evaluate against milestone criteria"
      ]
    },
    {
      category: "feedback",
      title: "Feedback Strategies", 
      strategies: [
        "Immediate Correction: Real-time feedback during Excel demonstrations",
        "Business Context: Connect technical skills to real-world applications",
        "Peer Learning: Students explain concepts to reinforce understanding",
        "Professional Standards: Compare work to actual business payroll systems"
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students",
      strategies: [
        "Pre-filled Calculator Templates: Provide partial Excel structures to reduce complexity",
        "Step-by-Step Formula Guides: Visual walkthroughs for complex calculations",
        "Simplified Scenarios: Focus on hourly employees before adding salaried/tipped",
        "Extra Practice Time: Additional support sessions for Excel skill building"
      ]
    },
    {
      audience: "advanced", 
      title: "For Advanced Students",
      strategies: [
        "Multi-Jurisdiction Payroll: Handle employees in different states with varying tax rules",
        "Advanced Excel Features: Explore Power Query for large payroll data processing",
        "Leadership Roles: Mentor struggling students and facilitate team discussions",
        "Business Extension: Research actual payroll service costs vs. internal processing"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Bilingual Resources: Payroll terms glossary in home language",
        "Visual Calculation Guides: Infographics showing payroll process flow",
        "Cultural Context: Examples relevant to diverse cultural backgrounds",
        "Translation Support: Peer translators for complex business concepts"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: 1:1 computers with Excel 365 or 2019+" },
        { name: "Software: Screen recording software for tutorial creation" },
        { name: "Internet: For YouTube upload and research access" },
        { name: "Presentation: Projector for demonstrations and Q&A session" },
        { name: "Audio/Video: Quality microphone for screencast narration" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials", 
      items: [
        { name: "Current Federal Tax Tables", link: "../tax-resources/federal-withholding-tables.pdf" },
        { name: "XLOOKUP Tutorial Guide", link: "../excel-instruction/xlookup-guide.pdf" },
        { name: "Payroll Scenario Cards", link: "../scenarios/payroll-challenge-cards.pdf" },
        { name: "Bilingual Pay Stub Templates", link: "../templates/bilingual-paystub-template.xlsx" },
        { name: "Reconciliation Checklist", link: "../assessment-rubrics/reconciliation-checklist.pdf" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Local Business Owners: Small business panel for Q&A session" },
        { name: "Youth Entrepreneurs Club: Tutorial audience and feedback providers" },
        { name: "CPA Professional: Guest expert for complex tax questions" },
        { name: "HR Professional: Real-world payroll process insights" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students demonstrate mastery of complex payroll calculations across different employee types?",
      "How effectively did XLOOKUP integration improve system efficiency and accuracy?",
      "Were students able to communicate technical concepts clearly to business audiences?",
      "What differentiation strategies were most effective for diverse learners?",
      "How well did the public tutorial format motivate high-quality work?"
    ],
    dataCollection: [
      "Calculation Accuracy: Analysis of milestone assessment results",  
      "Tutorial Quality: Business owner feedback on student presentations",
      "Engagement Data: Student participation in Q&A and peer feedback",
      "Technical Mastery: Evaluation of Excel skill progression",
      "Time Management: Comparison of planned vs. actual lesson durations"
    ],
    nextUnitPrep: [
      "Archive exemplary payroll systems for future reference",
      "Document common XLOOKUP errors for targeted instruction",
      "Collect business owner feedback for improving authentic assessments",
      "Prepare connection materials linking payroll costs to Unit 6 pricing analysis"
    ]
  }
}