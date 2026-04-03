import { UnitLessonPlan } from "@/types/lesson-plan"

/*
  Component Usage Schedule (unit07, lessons 01–04 implemented)
  - VideoPlayer
  - ComprehensionCheck
  - FillInTheBlank
  - DragAndDrop
  - InventoryFlowDiagram
  - InventoryManager
  - ReflectionJournal
*/

export const unit07LessonPlan: UnitLessonPlan = {
  unitNumber: 7,
  unitTitle: "Inventory Accounting",
  description: "Complete 10-day lesson plan focusing on inventory valuation methods (FIFO, LIFO, Weighted Average, Specific Identification) and strategic method selection for business decision-making.",
  essentialQuestion: "Which inventory valuation method best reflects our business reality and supports sound decision-making?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math",
    course: "Math for Business Operations"
  },

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Inventory valuation methods directly impact reported profits, tax obligations, and business decision-making",
      "FIFO, LIFO, Weighted Average, and Specific Identification produce different COGS and ending inventory values",
      "Accurate inventory tracking is essential for business sustainability and investor confidence",
      "The inventory equation (Beginning Inventory + Purchases − COGS = Ending Inventory) must always reconcile"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "FIFO, LIFO, Weighted Average, and Specific Identification inventory valuation principles",
          "Cost of Goods Sold (COGS) calculation and its impact on financial statements",
          "Inventory Turnover Ratio calculation and business implications for cash management",
          "Impact of inventory methods on cash flow, tax planning, and financial reporting",
          "Physical inventory counts and shrinkage adjustments"
        ]
      },
      {
        category: "technical",
        items: [
          "Build inventory valuation schedules in Excel with method comparison",
          "Implement FIFO and LIFO layer calculations with structured references",
          "Create dynamic ratio calculations and visualizations (e.g., turnover ratio chart)",
          "Use INDEX/MATCH for dynamic method selection dropdowns",
          "Design professional COGS impact analysis charts"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Compute Cost of Goods Sold using all four inventory valuation methods",
          "Calculate ending inventory values under FIFO, LIFO, Weighted Average, and Specific ID",
          "Analyze inventory turnover ratios for operational insights",
          "Evaluate method selection based on business strategy and industry context",
          "Present financial recommendations to business decision-makers"
        ]
      },
      {
        category: "technical",
        items: [
          "Build automated inventory valuation schedules in Excel",
          "Implement complex inventory layer calculations using structured formulas",
          "Create dynamic dashboards with method selection capabilities",
          "Design professional charts for COGS and inventory turnover visualization",
          "Develop user-friendly interfaces for non-technical stakeholders"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Advisory Brief + Executive Presentation",
      description: "Deliver strategic recommendations on inventory valuation methods to an executive audience.",
      scenario: "Teams present their analysis and recommendations to a panel of local business leaders, accountants, and auditors acting as an executive panel. The presentation must justify inventory method selection based on business strategy, COGS impact, and financial reporting implications.",
      requirements: [
        "2-3 page written advisory brief with strategic rationale for method recommendation",
        "5-minute live pitch presentation to executive panel",
        "Dynamic Excel model demonstrating all four inventory valuation methods",
        "Professional visualization showing COGS impact under different methods",
        "Q&A response addressing questions about cash flow and reporting implications"
      ],
      context: "This mirrors real corporate decision-making where finance teams present inventory method choices to leadership for approval."
    },
    milestones: [
      {
        day: 2,
        title: "Basic Inventory Schedule",
        description: "Complete functional inventory schedules showing beginning inventory, purchases, and goods available for sale",
        criteria: [
          "Accurate beginning inventory and purchases data entry",
          "Correct goods available for sale calculations",
          "Professional formatting and clear documentation",
          "Peer accuracy verification completed"
        ]
      },
      {
        day: 6,
        title: "Dynamic Method Selection Feature",
        description: "Automated method selection system with dropdowns and INDEX/MATCH logic",
        criteria: [
          "Working dropdown menus for method selection (FIFO/LIFO/Weighted Average/Specific ID)",
          "INDEX/MATCH formulas functioning correctly for dynamic switching",
          "Dynamic updates when methods are changed",
          "Error-free calculations across all scenarios"
        ]
      },
      {
        day: 8,
        title: "Advisory Brief Draft",
        description: "Strategic analysis document with inventory method recommendations",
        criteria: [
          "Clear rationale for inventory method selection tied to business objectives",
          "COGS and ending inventory analysis across all four methods",
          "Inventory turnover ratio calculations and interpretation",
          "Professional business writing appropriate for executive audience"
        ]
      }
    ],
    rubric: [
      {
        name: "Technical Accuracy",
        weight: "50%",
        exemplary: "All inventory valuations are mathematically correct; formulas handle edge cases flawlessly; COGS and ending inventory reconcile perfectly",
        proficient: "Most calculations correct with minor errors; formulas work for standard cases",
        developing: "Multiple calculation errors; formulas have significant issues"
      },
      {
        name: "Strategic Rationale",
        weight: "20%",
        exemplary: "Justification clearly aligns with business objectives; demonstrates deep understanding of method implications for cash flow and taxes",
        proficient: "Basic justification provided; shows understanding of key concepts",
        developing: "Limited or unclear rationale; missing connection to business strategy"
      },
      {
        name: "Pitch Delivery",
        weight: "15%",
        exemplary: "Clear, professional presentation with confident delivery and strong audience engagement",
        proficient: "Adequate presentation skills with clear communication",
        developing: "Unclear delivery or unprofessional presentation style"
      },
      {
        name: "Responsiveness to Critique",
        weight: "15%",
        exemplary: "Thoughtful integration of all peer and executive feedback into final deliverables",
        proficient: "Good incorporation of most feedback",
        developing: "Limited responsiveness to feedback or superficial changes"
      }
    ]
  },

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Launch: Sarah's Inventory Problem",
          description: "Entry event with Sarah Chen sharing her inventory tracking challenge",
          days: "Day 1"
        },
        {
          title: "Model Construction: FIFO, LIFO, Weighted Average, Specific ID",
          description: "Build Excel models for all four inventory valuation methods",
          days: "Days 2-5"
        },
        {
          title: "Advanced Features: Dynamic Method Selection",
          description: "Create user-friendly interfaces with dropdown method selection and INDEX/MATCH",
          days: "Days 6-7"
        },
        {
          title: "Strategic Analysis: Advisory Brief",
          description: "Develop business recommendations based on quantitative COGS and turnover analysis",
          days: "Days 8-9"
        },
        {
          title: "Public Presentation: Executive Pitch",
          description: "Present findings and recommendations to external business panel",
          days: "Day 10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Launch & Data Exploration",
        focus: "Entry event with Sarah's inventory challenge and team formation",
        duration: "45 minutes",
        activities: [
          {
            name: "Sarah's Inventory Challenge Entry Event",
            duration: "15 minutes",
            description: "Sarah Chen shares her growing business's inventory tracking problem",
            details: [
              "Video or case brief: Sarah explains her TechStart Solutions inventory challenge",
              "Discussion: Why does inventory valuation matter for business decisions?",
              "Introduction of provided inventory dataset for analysis",
              "Connection to essential question: Which method best reflects our business reality?"
            ],
            callout: {
              type: "important",
              title: "Real-World Context",
              content: "Inventory valuation affects reported profits, taxes, and investor confidence",
              items: [
                "Different methods produce different COGS and ending inventory values",
                "Method choice impacts tax obligations and cash flow",
                "Investors scrutinize inventory policies during due diligence",
                "Consistency in method application is required for reliable financial reporting"
              ]
            }
          },
          {
            name: "Team Formation & Data Review",
            duration: "15 minutes",
            description: "Form strategic teams and explore provided inventory dataset",
            details: [
              "Teams of 2-3 students formed based on complementary skills",
              "Initial exploration of provided inventory CSV data",
              "Identification of purchase layers, sales transactions, and inventory categories",
              "Discussion of which valuation methods might apply to different inventory types"
            ]
          },
          {
            name: "Industry Context Selection",
            duration: "10 minutes",
            description: "Teams choose business context focus",
            details: [
              "Student voice and choice: Select retail, manufacturing, technology, or propose own",
              "Each context emphasizes different inventory characteristics and valuation challenges",
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
              "Preview final advisory brief and executive pitch",
              "Establish learning objectives and success criteria",
              "Address student questions about expectations and assessments"
            ]
          }
        ],
        materials: [
          "Sarah's case brief and inventory dataset",
          "Inventory CSV files for team exploration",
          "Industry context description sheets",
          "Team formation materials and role assignment sheets",
          "Unit overview and milestone timeline"
        ]
      },
      {
        day: 2,
        title: "Inventory Cost Flow Foundations",
        focus: "Inventory flow concepts, beginning inventory, purchases, and COGS",
        duration: "45 minutes",
        activities: [
          {
            name: "Inventory Flow Concepts",
            duration: "15 minutes",
            description: "Why businesses track inventory costs and the inventory equation",
            details: [
              "Connect to Sarah's case: How does inventory flow through a business?",
              "Business rationale: matching principle and cost of goods sold recognition",
              "The inventory equation: Beginning Inventory + Purchases − COGS = Ending Inventory",
              "Introduction to the four inventory valuation methods"
            ],
            callout: {
              type: "definition",
              title: "The Inventory Equation",
              content: "Beginning Inventory + Purchases − COGS = Ending Inventory",
              items: [
                "Beginning Inventory: Value of inventory at start of period",
                "Purchases: Additional inventory acquired during period",
                "COGS: Cost of inventory items sold during period",
                "Ending Inventory: Value of inventory remaining at period end"
              ]
            }
          },
          {
            name: "Inventory Schedule Setup Demo",
            duration: "15 minutes",
            description: "Demonstrate inventory schedule setup in Excel",
            details: [
              "Build a basic inventory schedule with date, quantity, unit cost, and total cost columns",
              "Enter beginning inventory and purchase transactions",
              "Calculate goods available for sale",
              "Guided practice with sample inventory data"
            ]
          },
          {
            name: "Guided Practice",
            duration: "10 minutes",
            description: "Students practice building inventory schedules",
            details: [
              "Students create their own inventory schedule from provided data",
              "Verify goods available for sale calculations",
              "Peer review for accuracy",
              "Preview Day 3: FIFO vs. LIFO logic"
            ]
          },
          {
            name: "Checkpoint & Preview",
            duration: "5 minutes",
            description: "Check understanding and preview next lesson",
            details: [
              "Quick check: Can students calculate goods available for sale?",
              "Preview: How do we decide which costs go to COGS vs. ending inventory?",
              "Preview Day 3: FIFO vs. LIFO — two ways to value the same inventory"
            ]
          }
        ],
        materials: [
          "Inventory flow guide",
          "Sample workbook template",
          "Practice inventory dataset",
          "Inventory schedule template"
        ]
      },
      {
        day: 3,
        title: "FIFO and LIFO: Two Ways to Value the Same Inventory",
        focus: "FIFO vs. LIFO logic and business implications",
        duration: "45 minutes",
        activities: [
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
            name: "Method Comparison & Peer Verification",
            duration: "10 minutes",
            description: "Compare FIFO vs. LIFO results and verify accuracy",
            details: [
              "Side-by-side comparison: FIFO vs. LIFO schedules for same inventory",
              "Discuss business implications: cash flow, taxes, financial reporting",
              "Peer accuracy verification using provided rubric",
              "Preview Day 4: Specific Identification and Weighted Average"
            ]
          },
          {
            name: "Checkpoint",
            duration: "5 minutes",
            description: "Quick understanding check",
            details: [
              "Students calculate basic FIFO and LIFO values independently",
              "Review answers and address common errors",
              "Milestone 1 checkpoint: Basic inventory schedule completed"
            ]
          }
        ],
        materials: [
          "FIFO/LIFO examples and templates",
          "Visual aids showing inventory flow assumptions",
          "Practice datasets with varying price scenarios",
          "Peer accuracy verification rubric"
        ]
      },
      {
        day: 4,
        title: "Specific Identification and Weighted Average in Simple Excel",
        focus: "Build Excel Tables and formulas for Specific ID and Weighted Average",
        duration: "45 minutes",
        activities: [
          {
            name: "Specific Identification Method",
            duration: "12 minutes",
            description: "Track actual cost of each individual item sold",
            details: [
              "When to use: High-value or unique products (jewelry, cars, custom orders)",
              "Demonstration: Track individual item costs from purchase to sale",
              "Practice: Calculate COGS and ending inventory using Specific ID",
              "Compare with FIFO/LIFO results"
            ]
          },
          {
            name: "Weighted Average Cost Method",
            duration: "12 minutes",
            description: "Assign same average cost to every unit",
            details: [
              "Formula: Total Cost of Goods Available ÷ Total Units Available",
              "Demonstration: Calculate weighted average cost per unit",
              "Practice: Apply average cost to COGS and ending inventory",
              "Compare all four methods side by side"
            ],
            callout: {
              type: "tip",
              title: "Weighted Average Best Practices",
              content: "Weighted average smooths cost fluctuations across all purchases",
              items: [
                "Recalculate average cost after each new purchase (perpetual system)",
                "Or calculate once at period end (periodic system)",
                "Best for homogeneous inventory items (fuel, grain, chemicals)",
                "Produces results between FIFO and LIFO in inflationary periods"
              ]
            }
          },
          {
            name: "Excel Table Implementation",
            duration: "15 minutes",
            description: "Build Excel Tables with structured references for all four methods",
            details: [
              "Convert inventory schedules to Excel Tables",
              "Implement structured references for automated COGS and Ending Inventory",
              "Add error checks and edge case handling",
              "Validate calculations across all four methods"
            ]
          },
          {
            name: "Peer Accuracy Check",
            duration: "6 minutes",
            description: "Teams exchange files and verify calculations",
            details: [
              "Use provided answer key to check all four method results",
              "Identify and correct common formula errors",
              "Preview Day 5: Method comparison workbook sprint"
            ]
          }
        ],
        materials: [
          "Advanced template with all four methods",
          "Peer rubric for validation",
          "/resources/unit07-inventory-valuation-practice.csv",
          "Excel Table setup guide"
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
              "What went well: Celebrate mastery of inventory valuation concepts",
              "What was challenging: Identify areas needing additional support",
              "What we learned: Connect technical skills to business strategy understanding",
              "Next steps: Prepare for advanced Excel modeling in Week 2"
            ]
          },
          {
            name: "Concept Mastery Quiz",
            duration: "20 minutes",
            description: "Individual assessment of inventory method differences",
            details: [
              "Multiple choice: Identify appropriate method selection scenarios",
              "Calculation problems: Compute COGS and ending inventory using all four methods",
              "Strategic analysis: Explain when businesses would choose each method",
              "Excel application: Identify correct formula structure for inventory tracking"
            ],
            callout: {
              type: "important",
              title: "Mastery Check Focus Areas",
              content: "Assessment covers both technical skills and strategic understanding",
              items: [
                "FIFO, LIFO, Weighted Average, and Specific ID calculations",
                "Impact of method choice on COGS and ending inventory",
                "Business rationale for method selection",
                "Excel formulas for inventory layer tracking"
              ]
            }
          },
          {
            name: "Team Planning for Week 2",
            duration: "8 minutes",
            description: "Prepare for advanced modeling and advisory brief development",
            details: [
              "Review Week 2 goals: Dynamic method selection and advisory brief",
              "Identify team strengths for collaborative work ahead",
              "Plan approach for method comparison workbook",
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
        title: "Advanced Modeling: Dynamic Method Selection",
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
            description: "Create user-friendly dropdowns for inventory method selection",
            details: [
              "Data validation setup: Create dropdown lists for FIFO/LIFO/Weighted Average/Specific ID",
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
              "Inventory logic: Formula applies selected method based on user choice",
              "Build dynamic COGS and ending inventory calculations",
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
              "Milestone 2 checkpoint: Dynamic selection feature implemented"
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
        title: "Ratio & Visualization: Inventory Turnover and COGS Impact",
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
              "Calculate turnover ratio for all four inventory methods",
              "Show how method selection affects ratio results",
              "Build dynamic formulas that update with dropdown method changes",
              "Compare ratios: Analyze difference between method turnover rates"
            ]
          },
          {
            name: "COGS Impact Visualization",
            duration: "15 minutes",
            description: "Create charts showing method impact on Cost of Goods Sold",
            details: [
              "Chart creation: Column chart comparing COGS by method",
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
        title: "Dress Rehearsal: One Shared Inventory Dataset, One Shared Workbook",
        focus: "Calculate inventory turnover ratio, chart COGS impact, create visualizations",
        duration: "45 minutes",
        activities: [
          {
            name: "Shared Dataset Practice",
            duration: "15 minutes",
            description: "Work with a common inventory dataset to ensure all teams can produce consistent results",
            details: [
              "All teams use the same teacher-provided inventory dataset",
              "Calculate COGS and ending inventory using all four methods",
              "Verify results match expected answers",
              "Build inventory turnover ratio calculation"
            ]
          },
          {
            name: "COGS Impact Charting",
            duration: "15 minutes",
            description: "Create professional visualizations comparing method impacts",
            details: [
              "Chart COGS under each method side by side",
              "Chart ending inventory under each method side by side",
              "Add professional formatting and clear labels",
              "Interpret what the charts reveal about method selection"
            ],
            callout: {
              type: "important",
              title: "Visualization Best Practices",
              content: "Executive audiences need clear, actionable visuals",
              items: [
                "Use consistent color coding across all charts",
                "Include clear titles and axis labels",
                "Add data labels for key values",
                "Highlight the method recommendation visually"
              ]
            }
          },
          {
            name: "Workbook Polish",
            duration: "10 minutes",
            description: "Finalize the shared workbook for professional presentation",
            details: [
              "Check all formulas for accuracy",
              "Ensure consistent formatting across all sheets",
              "Add navigation notes for non-technical users",
              "Test dynamic method selection one final time"
            ]
          },
          {
            name: "Preview Day 9",
            duration: "5 minutes",
            description: "Set expectations for group project kickoff",
            details: [
              "Tomorrow: New business, new inventory data, same workbook logic",
              "Teams will apply everything learned to a fresh dataset",
              "Begin thinking about strategic rationale for method selection"
            ]
          }
        ],
        materials: [
          "Shared rehearsal inventory dataset",
          "Chart creation guide",
          "Sample visualization templates",
          "Workbook verification checklist"
        ]
      },
      {
        day: 9,
        title: "Group Project Kickoff: New Business, New Inventory Data, Same Workbook Logic",
        focus: "Outline strategic rationale, draft written brief, peer critique",
        duration: "45 minutes",
        activities: [
          {
            name: "New Dataset Introduction",
            duration: "10 minutes",
            description: "Each group receives a unique inventory dataset for a new business",
            details: [
              "Distribute group-specific inventory datasets",
              "Teams review new data and identify inventory characteristics",
              "Confirm workbook structure matches rehearsal format",
              "Set expectations for final deliverables"
            ]
          },
          {
            name: "Strategic Rationale Development",
            duration: "15 minutes",
            description: "Develop the business case for inventory method selection",
            details: [
              "Analyze new dataset: What type of inventory? What industry?",
              "Evaluate which method best fits this business context",
              "Consider tax implications, cash flow, and reporting objectives",
              "Draft written brief with supporting analysis"
            ],
            callout: {
              type: "tip",
              title: "Building a Strong Recommendation",
              content: "Executive recommendations need evidence, not just opinion",
              items: [
                "Start with a clear claim: 'We recommend [method] because...'",
                "Support with COGS and ending inventory calculations",
                "Include inventory turnover ratio analysis",
                "Address potential risks or limitations of the chosen method"
              ]
            }
          },
          {
            name: "Peer Critique Session",
            duration: "15 minutes",
            description: "Exchange draft briefs and provide structured feedback",
            details: [
              "Teams swap advisory brief drafts",
              "Use peer critique form to evaluate clarity, evidence, and professionalism",
              "Provide specific, actionable feedback",
              "Identify top 2 improvements to apply before Day 10"
            ]
          },
          {
            name: "Revision Planning",
            duration: "5 minutes",
            description: "Plan final revisions based on peer feedback",
            details: [
              "Review peer feedback and prioritize changes",
              "Assign revision tasks to team members",
              "Set timeline for completing final deliverables",
              "Preview Day 10: Final presentation to executive panel"
            ]
          }
        ],
        materials: [
          "Group-specific inventory datasets",
          "Brief outline template",
          "Peer critique form",
          "Recommendation structure guide"
        ]
      },
      {
        day: 10,
        title: "Final Presentation: Defend Ending Inventory, Method Choice, and Business Recommendation",
        focus: "Deliver advisory brief + pitch to executive panel",
        duration: "45 minutes",
        activities: [
          {
            name: "Presentation Flow",
            duration: "35 minutes",
            description: "Teams deliver 5-minute pitches to executive panel",
            details: [
              "Presenter order and timeboxing posted",
              "Each team: 4-5 minute presentation + brief Q&A",
              "Audience completes rubric-aligned peer critique",
              "Panel asks questions about strategic rationale and method choice"
            ],
            callout: {
              type: "important",
              title: "Standard Rubric Weights",
              content: "Use these categories for feedback and scoring",
              items: [
                "Technical Accuracy — 50%",
                "Strategic Rationale — 20%",
                "Pitch Delivery — 15%",
                "Responsiveness to Critique — 15%"
              ]
            }
          },
          {
            name: "Post-Presentation Reflection",
            duration: "10 minutes",
            description: "Individual reflection and file submission",
            details: [
              "Submit final advisory brief, Excel model, and peer reviews",
              "Reflect on strengths, improvements, and next steps",
              "Record two actions to improve professional readiness",
              "Confirm portfolio artifacts are complete"
            ]
          }
        ],
        materials: [
          "Peer critique forms (rubric categories)",
          "Presentation timing sheet and order list",
          "Submission checklist",
          "Portfolio reflection prompts",
          "Executive feedback sheet"
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
        "Daily Excel checkpoint: Quick verification of inventory calculation accuracy",
        "Peer formula review: Teams validate each other's COGS and ending inventory calculations",
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
        "Executive panel feedback: Authentic business perspective on strategic recommendations"
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
        "Step-by-step calculation guides: Visual walkthroughs for all four inventory methods",
        "Simplified datasets: Reduced complexity while maintaining authentic business context",
        "Peer tutoring: Pairing with students strong in Excel or business concepts",
        "Alternative assessment: Oral presentation option with reduced Excel complexity requirements"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Advanced Excel features: Explore LIFO reserve and tax implications as extension activity",
        "Complex scenarios: Multiple inventory categories and sensitivity analysis on purchase timing",
        "Leadership roles: Facilitate team strategic discussions and mentor struggling peers",
        "Extension analysis: Research industry-specific inventory practices and regulatory requirements",
        "Presentation enhancement: Develop sophisticated visual aids and executive summary documents"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Business vocabulary support: Glossary of inventory terms with visual aids and translations",
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
        { name: "Hardware: 1:1 laptops with Excel 365 or 2019+" },
        { name: "Software: Microsoft Excel with advanced function capabilities and charting" },
        { name: "Internet: For resource access and research" },
        { name: "Presentation: Projector/smart board for executive presentation setup" },
        { name: "Audio/Video: Recording capability for presentation portfolio documentation" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials",
      items: [
        { name: "Inventory Dataset", link: "/resources/unit07-inventory-valuation-practice.csv" },
        { name: "Unit 7 Excel Template with Inventory Functions", link: "/resources/unit07-template.xlsx" },
        { name: "FIFO/LIFO Calculation Worksheets", link: "/resources/inventory-worksheets.pdf" },
        { name: "Advisory Brief Outline Template", link: "/resources/advisory-brief-template.docx" },
        { name: "Peer Critique Rubric", link: "/resources/peer-critique-rubric.pdf" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Executive Panel: Business leaders, accountants, and executives for final presentations" },
        { name: "Industry Examples: Real inventory data from local retail or manufacturing businesses" },
        { name: "Professional Networks: Chamber of Commerce members for authentic feedback" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students demonstrate mastery of all four inventory valuation methods?",
      "How effectively did the executive presentation format assess strategic business thinking?",
      "Were students able to connect quantitative COGS analysis to strategic business recommendations?",
      "What differentiation strategies were most effective for diverse learners?",
      "How well did Sarah's entry event establish authentic context and engagement?",
      "Did the dynamic Excel models demonstrate appropriate technical complexity for Grade 12 students?"
    ],
    dataCollection: [
      "Technical Accuracy: Analysis of Excel model functionality and calculation correctness",
      "Strategic Thinking: Evaluation of advisory brief quality and business rationale strength",
      "Presentation Skills: Executive panel feedback on professional communication and confidence",
      "Student Feedback: Exit survey on engagement, learning, and unit effectiveness",
      "Peer Assessment: Analysis of peer feedback quality and collaborative learning effectiveness"
    ],
    nextUnitPrep: [
      "Archive exemplary Excel models and advisory briefs for future reference",
      "Document common technical errors for targeted instruction improvement",
      "Collect executive panel suggestions for industry context and presentation format refinement",
      "Prepare materials connecting inventory accounting to Unit 8 fixed assets and depreciation",
      "Identify students ready for advanced financial modeling challenges in capstone project"
    ]
  }
}