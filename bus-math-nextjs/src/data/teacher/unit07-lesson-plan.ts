import { UnitLessonPlan } from "@/types/lesson-plan"

export const unit07LessonPlan: UnitLessonPlan = {
  unitNumber: 7,
  unitTitle: "Asset & Inventory Tracker",
  description: "Complete 10-day lesson plan focusing on depreciation and inventory valuation methods",
  essentialQuestion: "Which depreciation and inventory methods best align with our cash‑flow and tax strategy?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math",
    course: "Math for Business Operations"
  },

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Asset and inventory valuation methods directly impact cash flow, tax obligations, and business decision-making",
      "Different depreciation methods (SLN vs. DDB) serve different strategic purposes for businesses",
      "Inventory valuation methods (FIFO vs. LIFO) affect both reported profits and tax liabilities",
      "Accurate asset tracking and inventory management are essential for business sustainability and investor confidence"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "Straight-Line (SLN) and Double-Declining Balance (DDB) depreciation methods and applications",
          "FIFO and LIFO inventory valuation principles and calculations",
          "Inventory Turnover Ratio calculation and business implications",
          "Impact of depreciation and inventory methods on cash flow and tax planning",
          "Asset lifecycle management and salvage value considerations"
        ]
      },
      {
        category: "technical",
        items: [
          "Excel SLN and DDB functions syntax and implementation",
          "Array formulas for FIFO and LIFO layer calculations",
          "Dynamic ratio calculations and automated updates",
          "INDEX/MATCH logic for method selection dropdowns",
          "Chart creation for inventory turnover and COGS visualization"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Calculate depreciation schedules using multiple methods",
          "Compute Cost of Goods Sold using FIFO and LIFO methods",
          "Analyze inventory turnover ratios for operational insights",
          "Evaluate method selection based on business strategy",
          "Present financial recommendations to business decision-makers"
        ]
      },
      {
        category: "technical",
        items: [
          "Build automated depreciation schedules with Excel functions",
          "Implement complex inventory layer calculations using array formulas",
          "Create dynamic dashboards with method selection capabilities",
          "Design professional charts for financial data visualization",
          "Develop user-friendly interfaces for non-technical stakeholders"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Board Advisory Brief + Pitch Presentation (Day 10)",
      description: "5-minute pitch to Board of Directors panel recommending optimal depreciation and inventory methods",
      scenario: "Teams present their analysis and recommendations to a panel of local business leaders, accountants, and auditors acting as a company's Board of Directors. The presentation must justify method selection based on cash flow and tax strategy.",
      requirements: [
        "Written advisory brief (2-3 pages) with clear method recommendations",
        "5-minute live pitch presentation with supporting visuals",
        "Live Excel demonstration of dynamic method selection features",
        "Q&A response addressing Board questions about strategic rationale",
        "Professional business communication appropriate for executive audience"
      ],
      context: "This mirrors real corporate governance where Boards must approve significant accounting policy changes that affect financial reporting and tax obligations."
    },
    milestones: [
      {
        day: 2,
        title: "Basic Depreciation Schedule",
        description: "Functional depreciation calculations using Excel SLN and DDB functions",
        criteria: [
          "Accurate SLN depreciation schedule for 5-year asset lifecycle",
          "Correct DDB depreciation with proper declining balance calculations",
          "Excel formulas using built-in SLN and DDB functions",
          "Professional formatting with clear year-by-year breakdown"
        ]
      },
      {
        day: 6,
        title: "Dynamic Selection Feature",
        description: "Advanced Excel modeling with dropdown-driven method selection",
        criteria: [
          "Dropdown menus for depreciation method selection (SLN/DDB)",
          "INDEX/MATCH formulas enabling dynamic method switching",
          "FIFO/LIFO inventory calculations with array formulas",
          "Automated updates when method selection changes"
        ]
      },
      {
        day: 8,
        title: "Advisory Brief Draft",
        description: "Strategic analysis document with method recommendations",
        criteria: [
          "Clear rationale for depreciation method selection",
          "FIFO vs. LIFO analysis with cash flow implications",
          "Inventory turnover ratio calculations and interpretation",
          "Professional business writing appropriate for Board audience"
        ]
      }
    ],
    rubric: [
      {
        name: "Technical Accuracy",
        weight: "50%",
        exemplary: "All depreciation schedules and inventory valuations calculated correctly; formulas handle edge cases; no computational errors",
        proficient: "Minor calculation errors (1-2); most formulas work correctly; handles standard scenarios",
        developing: "Multiple calculation errors; some formulas broken; limited functionality"
      },
      {
        name: "Strategic Rationale",
        weight: "20%",
        exemplary: "Method selection clearly aligned with stated cash-flow and tax objectives; sophisticated understanding of business implications",
        proficient: "Basic rationale connects methods to business goals; demonstrates understanding of key concepts",
        developing: "Limited connection between method selection and business strategy; superficial analysis"
      },
      {
        name: "Pitch Delivery",
        weight: "15%",
        exemplary: "Professional presentation engaging Board audience; confident delivery; clear visual aids; excellent time management",
        proficient: "Clear presentation with adequate visual support; good delivery; minor timing issues",
        developing: "Basic presentation skills; unclear visuals; poor time management or delivery"
      },
      {
        name: "Responsiveness to Critique",
        weight: "15%",
        exemplary: "Incorporates all peer and Board feedback effectively; demonstrates growth mindset; enhances final product significantly",
        proficient: "Addresses most feedback; shows willingness to revise; some improvement evident",
        developing: "Limited response to feedback; minimal revision; defensive attitude"
      }
    ]
  },

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Launch: Auditor Case Study",
          description: "Real-world context through auditor's inventory misvaluation case",
          days: "Day 1"
        },
        {
          title: "Model Construction: Depreciation & Inventory",
          description: "Build Excel models for SLN, DDB, FIFO, and LIFO calculations",
          days: "Days 2-5"
        },
        {
          title: "Advanced Features: Dynamic Selection",
          description: "Create user-friendly interfaces with dropdown method selection",
          days: "Days 6-7"
        },
        {
          title: "Strategic Analysis: Advisory Brief",
          description: "Develop business recommendations based on quantitative analysis",
          days: "Days 8-9"
        },
        {
          title: "Public Presentation: Board Pitch",
          description: "Present findings and recommendations to external business panel",
          days: "Day 10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Launch & Data Exploration",
        focus: "Entry event with auditor case study and team formation",
        duration: "45 minutes",
        activities: [
          {
            name: "Auditor Case Study Entry Event",
            duration: "15 minutes",
            description: "Local auditor presents real case of inventory misvaluation consequences",
            details: [
              "Guest auditor shares anonymized case of company fined for inventory errors",
              "Discussion of financial impact: penalties, investor confidence loss, audit costs",
              "Introduction of provided asset and inventory dataset for analysis",
              "Connection to essential question: How do method choices affect business outcomes?"
            ],
            callout: {
              type: "important",
              title: "Real-World Context",
              content: "Inventory misvaluation can result in significant financial and legal consequences",
              items: [
                "SEC fines can range from $100,000 to millions for public companies",
                "Investor confidence loss affects stock price and future funding",
                "Audit costs increase when controls are deemed ineffective",
                "Tax implications can compound errors across multiple years"
              ]
            }
          },
          {
            name: "Team Formation & Data Review",
            duration: "15 minutes",
            description: "Form strategic teams and explore provided dataset",
            details: [
              "Teams of 2-3 students formed based on complementary skills",
              "Initial exploration of provided asset and inventory CSV data",
              "Identification of different asset types and inventory categories",
              "Discussion of which depreciation and inventory methods might apply"
            ]
          },
          {
            name: "Industry Context Selection",
            duration: "10 minutes",
            description: "Teams choose business context focus",
            details: [
              "Student voice and choice: Select retail, manufacturing, or technology focus",
              "Each context emphasizes different asset types and inventory challenges",
              "Teams commit to their chosen industry for consistency throughout unit",
              "Preview of how context will affect method selection rationale"
            ]
          },
          {
            name: "Challenge Framing & Preview",
            duration: "5 minutes",
            description: "Set expectations and preview learning journey",
            details: [
              "Review unit timeline and major milestones",
              "Preview final presentation to Board of Directors panel",
              "Establish learning objectives and success criteria",
              "Address student questions about expectations and assessments"
            ]
          }
        ],
        materials: [
          "Guest auditor presentation materials and case study handout",
          "Anonymized asset and inventory dataset (CSV format)",
          "Industry context description sheets (retail, manufacturing, technology)",
          "Team formation materials and role assignment sheets",
          "Unit overview and milestone timeline"
        ]
      },
      {
        day: 2,
        title: "Depreciation Techniques",
        focus: "Direct instruction on SLN and DDB methods with Excel implementation",
        duration: "45 minutes",
        activities: [
          {
            name: "Depreciation Concepts Foundation",
            duration: "15 minutes",
            description: "Why businesses depreciate assets and method selection rationale",
            details: [
              "Connect to auditor case: How do depreciation errors compound over time?",
              "Business rationale: matching principle and expense recognition",
              "Strategic considerations: cash flow vs. tax implications",
              "Introduction to Straight-Line vs. Double-Declining Balance approaches"
            ],
            callout: {
              type: "definition",
              title: "Depreciation Method Strategic Implications",
              content: "Method selection affects both financial reporting and tax obligations",
              items: [
                "Straight-Line (SLN): Even expense recognition, predictable cash flow impact",
                "Double-Declining Balance (DDB): Accelerated depreciation, higher early tax deductions",
                "Conservative vs. Aggressive: Impact on investor perception and loan covenants",
                "Tax Strategy: Timing of deductions affects cash flow optimization"
              ]
            }
          },
          {
            name: "Excel SLN Function Workshop",
            duration: "12 minutes",
            description: "Hands-on practice with Excel's built-in SLN function",
            details: [
              "Demonstration: =SLN(cost, salvage, life) syntax and parameters",
              "Guided practice: Calculate depreciation for sample manufacturing equipment",
              "Build complete 5-year depreciation schedule with cumulative calculations",
              "Verify calculations manually to ensure understanding"
            ]
          },
          {
            name: "Excel DDB Function Workshop",
            duration: "12 minutes",
            description: "Implementation of Double-Declining Balance using Excel DDB function",
            details: [
              "Demonstration: =DDB(cost, salvage, life, period) function syntax",
              "Show declining balance logic: each year uses book value, not original cost",
              "Practice: Build DDB schedule for same equipment to compare with SLN",
              "Analyze differences: early vs. late depreciation patterns"
            ]
          },
          {
            name: "Method Comparison & Checkpoint",
            duration: "6 minutes",
            description: "Compare SLN vs. DDB results and check understanding",
            details: [
              "Side-by-side comparison: SLN vs. DDB schedules for same asset",
              "Discuss business implications: cash flow, taxes, financial reporting",
              "Checkpoint quiz: Students calculate basic depreciation independently",
              "Preview Day 3: How do inventory methods create similar strategic choices?"
            ]
          }
        ],
        materials: [
          "Excel template with SLN and DDB function examples",
          "Sample asset data for practice calculations",
          "Depreciation schedule templates",
          "Method comparison worksheet",
          "SLN/DDB function reference guide"
        ]
      },
      {
        day: 3,
        title: "Inventory Methods Introduction",
        focus: "FIFO vs. LIFO logic and business implications",
        duration: "45 minutes",
        activities: [
          {
            name: "Inventory Valuation Challenge",
            duration: "10 minutes",
            description: "Why inventory method selection matters for business strategy",
            details: [
              "Connect to auditor case: How inventory errors affect financial statements",
              "Scenario: Rising vs. falling prices and impact on Cost of Goods Sold",
              "Strategic question: How do FIFO and LIFO serve different business objectives?",
              "Preview: Excel techniques for tracking inventory layers"
            ]
          },
          {
            name: "FIFO Logic & Calculations",
            duration: "15 minutes",
            description: "First-In, First-Out method with step-by-step examples",
            details: [
              "Visual demonstration: Physical inventory flow in retail/manufacturing",
              "FIFO assumption: Oldest costs assigned to Cost of Goods Sold first",
              "Practice calculation: Given purchases and sales, calculate COGS and ending inventory",
              "Business implications: Impact on gross profit during price inflation"
            ],
            callout: {
              type: "example",
              title: "FIFO in Rising Price Environment",
              content: "When prices increase, FIFO reports lower COGS and higher profits",
              items: [
                "Example: Buy inventory at $10 (Jan), $12 (Feb), $15 (Mar)",
                "Sell 100 units in March: FIFO uses January cost ($10) first",
                "Result: Lower COGS, higher gross profit, higher taxes",
                "Strategic consideration: Better for investor relations, higher tax burden"
              ]
            }
          },
          {
            name: "LIFO Logic & Calculations",
            duration: "15 minutes",
            description: "Last-In, First-Out method with comparative examples",
            details: [
              "LIFO assumption: Most recent costs assigned to Cost of Goods Sold first",
              "Same data as FIFO practice: contrast the results",
              "LIFO calculation: Use March costs ($15) for Cost of Goods Sold",
              "Business implications: Higher COGS, lower profits, reduced taxes in inflation"
            ]
          },
          {
            name: "Method Selection Strategy Discussion",
            duration: "5 minutes",
            description: "Connect inventory methods to business strategy",
            details: [
              "Discussion: When would a business prefer FIFO vs. LIFO?",
              "Tax considerations: LIFO reduces taxable income during inflation",
              "Investor relations: FIFO shows higher profits for better financial appearance",
              "Preview Day 4: How do we implement these calculations in Excel?"
            ]
          }
        ],
        materials: [
          "FIFO/LIFO calculation examples and templates",
          "Visual aids showing inventory flow assumptions",
          "Practice datasets with varying price scenarios",
          "Business strategy decision matrix",
          "Inventory method comparison charts"
        ]
      },
      {
        day: 4,
        title: "Technical Application",
        focus: "Build Excel array formulas for FIFO and LIFO layer calculations",
        duration: "45 minutes",
        activities: [
          {
            name: "Excel Array Formula Introduction",
            duration: "10 minutes",
            description: "Why inventory tracking requires advanced Excel techniques",
            details: [
              "Challenge: Inventory purchases and sales happen at different times and prices",
              "Excel limitation: Standard formulas can't easily track multiple cost layers",
              "Solution: Array formulas to handle complex layer calculations",
              "Preview: Building formulas that automatically calculate FIFO and LIFO"
            ]
          },
          {
            name: "FIFO Array Formula Workshop",
            duration: "15 minutes",
            description: "Build formulas to calculate FIFO Cost of Goods Sold automatically",
            details: [
              "Demonstrate array formula structure for FIFO calculations",
              "Show how to rank purchases by date and apply oldest costs first",
              "Guided practice: Students build FIFO formula for sample inventory data",
              "Test formula with different sales quantities to verify accuracy"
            ],
            callout: {
              type: "tip",
              title: "Array Formula Best Practices",
              content: "Complex inventory calculations require careful formula design",
              items: [
                "Start simple: Test with small datasets before scaling up",
                "Use named ranges: Makes formulas more readable and maintainable",
                "Add error checking: Handle cases where sales exceed available inventory",
                "Document logic: Comments help others understand your approach"
              ]
            }
          },
          {
            name: "LIFO Array Formula Workshop",
            duration: "15 minutes",
            description: "Build parallel formulas for LIFO calculations",
            details: [
              "Modify FIFO logic: Use most recent purchases instead of oldest",
              "Demonstrate array formula adjustments for LIFO methodology",
              "Practice: Students build LIFO formula using same inventory dataset",
              "Compare results: FIFO vs. LIFO COGS for identical transactions"
            ]
          },
          {
            name: "Peer Accuracy Check",
            duration: "5 minutes",
            description: "Structured peer review of formula accuracy",
            details: [
              "Teams exchange Excel files and verify each other's calculations",
              "Use provided answer key to check FIFO and LIFO results",
              "Identify and correct common formula errors",
              "Preview Day 5: Organizing these calculations into professional models"
            ]
          }
        ],
        materials: [
          "Array formula templates and examples",
          "Sample inventory dataset with purchases and sales",
          "Formula troubleshooting guide",
          "Peer review checklist and answer keys",
          "Excel named ranges tutorial"
        ]
      },
      {
        day: 5,
        title: "Checkpoint & Reflection",
        focus: "Sprint retrospective and concept mastery assessment",
        duration: "45 minutes",
        activities: [
          {
            name: "Sprint Retrospective",
            duration: "15 minutes",
            description: "Team reflection on learning progress and challenges",
            details: [
              "What went well: Celebrate mastery of depreciation and inventory concepts",
              "What was challenging: Identify areas needing additional support",
              "What we learned: Connect technical skills to business strategy understanding",
              "Next steps: Prepare for advanced Excel modeling in Week 2"
            ]
          },
          {
            name: "Concept Mastery Quiz",
            duration: "20 minutes",
            description: "Individual assessment of depreciation and inventory method differences",
            details: [
              "Multiple choice: Identify appropriate method selection scenarios",
              "Calculation problems: Compute basic SLN, DDB, FIFO, and LIFO",
              "Strategic analysis: Explain when businesses would choose each method",
              "Excel application: Identify correct function syntax and parameters"
            ],
            callout: {
              type: "important",
              title: "Mastery Check Focus Areas",
              content: "Assessment covers both technical skills and strategic understanding",
              items: [
                "Depreciation: SLN vs. DDB calculation accuracy and business rationale",
                "Inventory: FIFO vs. LIFO logic and strategic implications",
                "Excel: Function syntax and array formula concepts",
                "Strategy: Method selection based on cash flow and tax objectives"
              ]
            }
          },
          {
            name: "Team Planning for Week 2",
            duration: "8 minutes",
            description: "Prepare for advanced modeling and presentation development",
            details: [
              "Review Week 2 goals: Dynamic selection features and advisory brief",
              "Identify team strengths for collaborative work ahead",
              "Plan approach for integrating depreciation and inventory models",
              "Set team expectations for quality and professional presentation standards"
            ]
          },
          {
            name: "Individual Reflection",
            duration: "2 minutes",
            description: "Personal learning analysis and goal setting",
            details: [
              "Self-assessment: Rate confidence with each method and Excel skill",
              "Growth identification: What do I need to practice over the weekend?",
              "Goal setting: What do I want to achieve in the presentation next week?",
              "Connection: How do these skills apply beyond this unit?"
            ]
          }
        ],
        materials: [
          "Sprint retrospective worksheet",
          "Concept mastery quiz with answer key",
          "Team planning templates",
          "Individual reflection prompts",
          "Week 2 preview materials"
        ]
      },
      {
        day: 6,
        title: "Advanced Modeling",
        focus: "Create dynamic method selection with INDEX/MATCH dropdowns",
        duration: "45 minutes",
        activities: [
          {
            name: "Professional Model Requirements",
            duration: "8 minutes",
            description: "What makes an Excel model suitable for business decision-making?",
            details: [
              "User-friendly interface: Non-technical users can change assumptions easily",
              "Dynamic updates: Results recalculate automatically when inputs change",
              "Professional appearance: Clean formatting appropriate for executive presentation",
              "Error handling: Model behaves predictably with invalid inputs"
            ]
          },
          {
            name: "Dropdown Method Selection Setup",
            duration: "15 minutes",
            description: "Create user-friendly dropdowns for depreciation and inventory method selection",
            details: [
              "Data validation setup: Create dropdown lists for SLN/DDB and FIFO/LIFO",
              "Named ranges: Organize method options for easy maintenance",
              "Cell formatting: Professional appearance with clear labels",
              "User instructions: Brief guidance for non-technical users"
            ]
          },
          {
            name: "INDEX/MATCH Logic Implementation",
            duration: "17 minutes",
            description: "Build formulas that respond dynamically to dropdown selections",
            details: [
              "INDEX/MATCH introduction: More flexible alternative to VLOOKUP",
              "Depreciation logic: Formula selects SLN or DDB based on dropdown choice",
              "Inventory logic: Formula applies FIFO or LIFO based on user selection",
              "Testing: Verify calculations update correctly when methods change"
            ],
            callout: {
              type: "tip",
              title: "INDEX/MATCH for Dynamic Models",
              content: "Professional Excel models use INDEX/MATCH for flexible lookups",
              items: [
                "INDEX returns value from specified position in array",
                "MATCH finds position of lookup value in array",
                "Combined: INDEX(MATCH()) creates powerful lookup formulas",
                "Advantage: Works with horizontal and vertical data arrangements"
              ]
            }
          },
          {
            name: "Model Integration & Testing",
            duration: "5 minutes",
            description: "Ensure all components work together seamlessly",
            details: [
              "Integration test: Change dropdown selections and verify all calculations update",
              "Error checking: Test with edge cases and invalid inputs",
              "Performance check: Ensure model calculates quickly with realistic data sizes",
              "Milestone 2 checkpoint: Review criteria and assess completion"
            ]
          }
        ],
        materials: [
          "Dynamic model template with dropdown examples",
          "INDEX/MATCH function tutorial and reference",
          "Data validation setup guide",
          "Professional formatting standards checklist",
          "Model testing scenarios and edge cases"
        ]
      },
      {
        day: 7,
        title: "Ratio & Visualization",
        focus: "Calculate inventory turnover ratio and create impact visualizations",
        duration: "45 minutes",
        activities: [
          {
            name: "Inventory Turnover Ratio Foundation",
            duration: "12 minutes",
            description: "Why inventory turnover matters for business performance",
            details: [
              "Business context: How quickly does inventory convert to sales?",
              "Formula: Cost of Goods Sold ÷ Average Inventory",
              "Industry benchmarks: Retail vs. manufacturing vs. technology expectations",
              "Strategic implications: Cash flow, storage costs, obsolescence risk"
            ],
            callout: {
              type: "definition",
              title: "Inventory Turnover Strategic Importance",
              content: "Turnover ratio reveals operational efficiency and cash management",
              items: [
                "High turnover: Efficient inventory management, good cash flow",
                "Low turnover: Excess inventory, tied-up cash, higher carrying costs",
                "Industry variation: Grocery (50x/year) vs. Jewelry (2-3x/year)",
                "Method impact: FIFO vs. LIFO affects both COGS and average inventory"
              ]
            }
          },
          {
            name: "Turnover Calculation Workshop",
            duration: "15 minutes",
            description: "Build Excel formulas for automated turnover ratio calculations",
            details: [
              "Calculate turnover ratio for both FIFO and LIFO methods",
              "Show how method selection affects ratio results",
              "Build dynamic formulas that update with dropdown method changes",
              "Compare ratios: Analyze difference between FIFO and LIFO turnover rates"
            ]
          },
          {
            name: "COGS Impact Visualization",
            duration: "15 minutes",
            description: "Create charts showing method impact on Cost of Goods Sold",
            details: [
              "Chart creation: Column chart comparing FIFO vs. LIFO COGS by period",
              "Visualization options: Student choice of chart style (column, line, waterfall)",
              "Professional formatting: Clean titles, axis labels, legend placement",
              "Business storytelling: Charts that communicate impact clearly to executives"
            ]
          },
          {
            name: "Dashboard Integration",
            duration: "3 minutes",
            description: "Combine calculations and charts into professional dashboard",
            details: [
              "Layout design: Organize dropdowns, calculations, and charts logically",
              "Visual hierarchy: Use formatting to guide user attention effectively",
              "Quality check: Ensure all components work together seamlessly",
              "Preview Day 8: How do we translate analysis into strategic recommendations?"
            ]
          }
        ],
        materials: [
          "Inventory turnover calculation templates",
          "Industry benchmark data for comparison",
          "Chart creation step-by-step guide",
          "Dashboard layout examples",
          "Professional Excel formatting standards"
        ]
      },
      {
        day: 8,
        title: "Advisory Brief Draft",
        focus: "Develop strategic recommendations based on quantitative analysis",
        duration: "45 minutes",
        activities: [
          {
            name: "Advisory Brief Structure Workshop",
            duration: "12 minutes",
            description: "Learn professional business advisory format and expectations",
            details: [
              "Executive summary: Key recommendations in 2-3 sentences",
              "Analysis section: Quantitative support for recommendations",
              "Strategic rationale: Connect method choice to business objectives",
              "Implementation considerations: Practical steps and timeline"
            ],
            callout: {
              type: "important",
              title: "Business Advisory Writing Standards",
              content: "Board-level communication requires clarity, brevity, and data support",
              items: [
                "Executive focus: Busy executives need key points quickly",
                "Data-driven: Quantitative analysis should support all recommendations",
                "Action-oriented: Clear next steps and implementation guidance",
                "Professional tone: Confident but not presumptuous language"
              ]
            }
          },
          {
            name: "Method Selection Rationale Development",
            duration: "20 minutes",
            description: "Teams develop strategic rationale for their method recommendations",
            details: [
              "Analysis of cash flow impact: How do method choices affect cash timing?",
              "Tax strategy evaluation: Which methods optimize tax obligations?",
              "Industry context consideration: How does business type affect method selection?",
              "Risk assessment: What are the trade-offs of each approach?"
            ]
          },
          {
            name: "Peer Critique Protocol",
            duration: "10 minutes",
            description: "Structured feedback on draft advisory briefs",
            details: [
              "Teams exchange draft briefs with structured critique form",
              "Feedback focus: Clarity of recommendations, strength of rationale, professional tone",
              "Constructive suggestions: Specific improvements for final version",
              "Quality standards: Ensure briefs meet Board presentation expectations"
            ]
          },
          {
            name: "Revision Planning",
            duration: "3 minutes",
            description: "Incorporate feedback and plan final brief completion",
            details: [
              "Review feedback received and prioritize revisions",
              "Plan brief completion timeline for Day 9 presentation prep",
              "Identify any additional analysis needed to strengthen recommendations",
              "Milestone 3 checkpoint: Assess progress toward final deliverable"
            ]
          }
        ],
        materials: [
          "Advisory brief template and examples",
          "Business writing style guide",
          "Peer critique protocol forms",
          "Strategic analysis framework",
          "Professional document formatting guidelines"
        ]
      },
      {
        day: 9,
        title: "Mock Board Presentation",
        focus: "Presentation rehearsal with peer feedback and refinement",
        duration: "45 minutes",
        activities: [
          {
            name: "Presentation Structure Review",
            duration: "8 minutes",
            description: "Review effective Board presentation techniques and expectations",
            details: [
              "Board presentation format: Problem, Analysis, Recommendation, Implementation",
              "Professional delivery: Appropriate tone, pace, and body language for executives",
              "Visual aids: Effective use of Excel models and charts during presentation",
              "Q&A preparation: Anticipate Board questions and prepare confident responses"
            ]
          },
          {
            name: "Team Presentation Rehearsals",
            duration: "25 minutes",
            description: "Teams practice 5-minute presentations with live Excel demonstrations",
            details: [
              "Full presentation run-through: Teams present to 2-3 other teams",
              "Live Excel demo: Practice smooth transitions between analysis and recommendations",
              "Timing practice: Ensure presentations stay within 5-minute limit",
              "Q&A simulation: Other teams ask challenging questions as Board members would"
            ],
            callout: {
              type: "tip",
              title: "Effective Board Presentation Techniques",
              content: "Executive presentations require confidence, clarity, and compelling rationale",
              items: [
                "Start strong: Lead with clear recommendation, then support with analysis",
                "Show, don't just tell: Use Excel model to demonstrate impact visually",
                "Anticipate questions: Prepare for challenges to your methodology",
                "End with action: Clear next steps and implementation timeline"
              ]
            }
          },
          {
            name: "Peer Feedback Integration",
            duration: "10 minutes",
            description: "Incorporate feedback and finalize presentation approach",
            details: [
              "Structured feedback collection: Specific suggestions from peer audiences",
              "Presentation refinement: Adjust based on feedback about clarity and impact",
              "Final practice: Quick run-through of revised presentation",
              "Confidence building: Address any remaining concerns or questions"
            ]
          },
          {
            name: "Final Preparation",
            duration: "2 minutes",
            description: "Last-minute preparation for tomorrow's Board presentation",
            details: [
              "Technical check: Ensure Excel models work perfectly on presentation computer",
              "Team coordination: Confirm roles and transitions between team members",
              "Professional readiness: Review dress code and presentation etiquette",
              "Mental preparation: Build confidence for authentic Board presentation experience"
            ]
          }
        ],
        materials: [
          "Board presentation guidelines and rubric",
          "Peer feedback forms for presentation evaluation",
          "Technical setup checklist for Excel demonstrations",
          "Professional presentation etiquette guide",
          "Q&A preparation worksheet"
        ]
      },
      {
        day: 10,
        title: "Public Presentation",
        focus: "Final Board presentation and unit reflection",
        duration: "45 minutes",
        activities: [
          {
            name: "Board of Directors Panel Presentations",
            duration: "30 minutes",
            description: "Teams present advisory briefs and recommendations to external business panel",
            details: [
              "Professional setup: Board panel of local business leaders, accountants, auditors",
              "5-minute presentations: Teams deliver advisory brief with live Excel demonstration",
              "Strategic Q&A: Board members ask challenging questions about method selection rationale",
              "Real-world feedback: Panel provides authentic business perspective on recommendations"
            ],
            callout: {
              type: "important",
              title: "Authentic Assessment: Board Presentation",
              content: "Final assessment mirrors real corporate governance decision-making",
              items: [
                "Technical mastery: All Excel calculations must be accurate and professional",
                "Strategic thinking: Recommendations must align with stated business objectives",
                "Communication skills: Clear, confident presentation appropriate for executive audience",
                "Professional behavior: Appropriate responses to challenging questions and feedback"
              ]
            }
          },
          {
            name: "Board Feedback Collection",
            duration: "8 minutes",
            description: "Panel provides structured feedback on presentations and strategic thinking",
            details: [
              "Individual team feedback: Board members provide specific comments on each presentation",
              "Common themes: Panel identifies strengths and areas for improvement across all teams",
              "Industry insights: Board shares real-world perspective on method selection practices",
              "Recognition: Acknowledge exceptional presentations and strategic insights"
            ]
          },
          {
            name: "Unit Reflection & Learning Analysis",
            duration: "5 minutes",
            description: "Students reflect on learning journey and connect to future applications",
            details: [
              "Learning reflection: How did this unit change your understanding of business decision-making?",
              "Skill transfer: Which technical skills will be most valuable in other contexts?",
              "Strategic thinking: How do quantitative analysis and business strategy connect?",
              "Future application: How might these skills help in Unit 8 integrated modeling?"
            ]
          },
          {
            name: "Portfolio Documentation & Closure",
            duration: "2 minutes",
            description: "Document achievements and transition to next unit",
            details: [
              "Portfolio addition: Archive completed Excel models and advisory brief with reflection",
              "Achievement celebration: Recognize growth in both technical and strategic capabilities",
              "Unit 8 connection: Preview how asset and inventory models integrate into startup financial model",
              "Professional development: Acknowledge progress toward business communication competency"
            ]
          }
        ],
        materials: [
          "Board panel evaluation forms and feedback sheets",
          "Professional presentation setup (projector, laptop, business setting)",
          "Unit reflection prompts and portfolio guidelines",
          "Achievement certificates or recognition materials",
          "Unit 8 preview and connection materials"
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
        "Daily Excel checkpoint: Quick verification of formula accuracy and functionality",
        "Peer formula review: Teams validate each other's depreciation and inventory calculations",
        "Method selection justification: Brief written rationale for strategic choices",
        "Progress conferences: 5-minute teacher check-ins with each team on Days 3, 6, and 8",
        "Strategic thinking exit tickets: Quick assessment of business rationale understanding"
      ]
    },
    {
      category: "feedback",
      title: "Feedback Strategies",
      strategies: [
        "Technical feedback: Specific corrections for Excel formula errors with guided practice",
        "Strategic feedback: Questions to deepen business rationale and method selection logic",
        "Presentation feedback: Actionable suggestions for professional communication improvement",
        "Peer feedback: Structured protocols for constructive critique of analysis and presentation",
        "Board feedback: Authentic business perspective on strategic recommendations and professional readiness"
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students",
      strategies: [
        "Formula templates: Pre-built Excel structures with guided parameter entry",
        "Step-by-step calculation guides: Visual walkthroughs for depreciation and inventory methods",
        "Simplified datasets: Reduced complexity while maintaining authentic business context",
        "Peer tutoring: Pairing with students strong in Excel or business concepts",
        "Alternative assessment: Oral presentation option with reduced Excel complexity requirements"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Advanced Excel features: Explore MACRS depreciation and sensitivity analysis capabilities",
        "Complex scenarios: Multiple asset classes and inventory categories in single model",
        "Leadership roles: Facilitate team strategic discussions and mentor struggling peers",
        "Extension analysis: Research industry-specific practices and regulatory requirements",
        "Presentation enhancement: Develop sophisticated visual aids and executive summary documents"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Business vocabulary support: Glossary of depreciation and inventory terms with visual aids",
        "Calculation emphasis: Focus on quantitative skills while building language gradually",
        "Collaborative support: Mixed-language team structures with peer translation assistance",
        "Visual learning aids: Charts, diagrams, and flowcharts to support conceptual understanding",
        "Presentation alternatives: Option to focus on Excel demonstration with reduced verbal component"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: 1:1 laptops with Excel 365 or 2019+ including Analysis ToolPak" },
        { name: "Software: Microsoft Excel with array formula capabilities and advanced charting" },
        { name: "Internet: For guest auditor presentation and resource access" },
        { name: "Presentation: Projector/smart board for Board presentation setup" },
        { name: "Audio/Video: Recording capability for presentation portfolio documentation" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials",
      items: [
        { name: "Asset and Inventory Dataset", link: "../datasets/unit07-asset-inventory-data.xlsx" },
        { name: "SLN/DDB Function Guide", link: "../excel-instruction/depreciation-functions-guide.pdf" },
        { name: "Array Formula Tutorial", link: "../excel-instruction/inventory-array-formulas.pdf" },
        { name: "Advisory Brief Template", link: "../templates/board-advisory-brief-template.docx" },
        { name: "Board Presentation Rubric", link: "../assessment-rubrics/board-presentation-rubric.html" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Guest Auditor: Local CPA firm partner to present entry event case study" },
        { name: "Board Panel: Business leaders, accountants, and executives for final presentations" },
        { name: "Industry Examples: Real asset and inventory data from local manufacturing or retail businesses" },
        { name: "Professional Networks: Chamber of Commerce members and SCORE mentors for authentic feedback" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students demonstrate mastery of both depreciation and inventory calculation methods?",
      "How effectively did the Board presentation format assess strategic business thinking?",
      "Were students able to connect quantitative analysis to strategic business recommendations?",
      "What differentiation strategies were most effective for diverse learners?",
      "How well did the auditor entry event establish authentic context and engagement?",
      "Did the dynamic Excel models demonstrate appropriate technical complexity for Grade 12 students?"
    ],
    dataCollection: [
      "Technical Accuracy: Analysis of Excel model functionality and calculation correctness",
      "Strategic Thinking: Evaluation of advisory brief quality and business rationale strength",
      "Presentation Skills: Board panel feedback on professional communication and confidence",
      "Student Feedback: Exit survey on engagement, learning, and unit effectiveness",
      "Peer Assessment: Analysis of peer feedback quality and collaborative learning effectiveness"
    ],
    nextUnitPrep: [
      "Archive exemplary Excel models and advisory briefs for future reference",
      "Document common technical errors for targeted instruction improvement",
      "Collect Board panel suggestions for industry context and presentation format refinement",
      "Prepare integration materials connecting asset/inventory models to Unit 8 startup financial model",
      "Identify students ready for advanced financial modeling challenges in capstone project"
    ]
  }
}