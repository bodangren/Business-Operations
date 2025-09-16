import { UnitLessonPlan } from "@/types/lesson-plan"

// Component Usage Schedule (Unit 06, Lessons 01–05)
// Day 1 (Lesson01): VideoPlayer, ComprehensionCheck, SpreadsheetWrapper
// Day 2 (Lesson02): ComprehensionCheck, FillInTheBlank, BreakEvenComponents, BreakEvenAnalysisCalculator, ReflectionJournal
// Day 3 (Lesson03): ComprehensionCheck, BreakEvenChart, BreakEvenComponents, SpreadsheetWrapper, ReflectionJournal
// Day 4 (Lesson04): ComprehensionCheck, FillInTheBlank, BreakEvenAnalysisCalculator, ReflectionJournal
// Day 5 (Lesson05): ComprehensionCheck, FillInTheBlank, BreakEvenAnalysisCalculator, ErrorCheckingSystem, ComprehensionCheck

export const unit06LessonPlan: UnitLessonPlan = {
  unitNumber: 6,
  unitTitle: "PriceLab Challenge",
  description: "Complete 10-day lesson plan using backward design principles for Cost-Volume-Profit analysis and competitive pricing strategies",
  essentialQuestion: "What pricing strategy hits our profit target while staying competitive in the local market?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math",
    course: "Math for Business Operations"
  },

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Pricing decisions require balancing profitability with market competitiveness",
      "Cost-Volume-Profit relationships govern business viability and strategic planning",
      "Data-driven analysis provides objective foundation for subjective business decisions",
      "Sensitivity analysis reveals business vulnerabilities and opportunities"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "Difference between markup and margin calculations",
          "Fixed vs. variable cost behavior and break-even analysis",
          "Cost-Volume-Profit (CVP) model components and interpretation",
          "Sensitivity analysis principles and applications",
          "Competitive pricing strategies and market positioning"
        ]
      },
      {
        category: "technical",
        items: [
          "Power Query for data import and transformation",
          "Goal Seek function for target profit scenarios",
          "Data Tables (one- and two-variable) for what-if analysis",
          "Advanced charting tools for CVP visualization",
          "Statistical analysis of competitor pricing data"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Calculate markup vs. margin and determine break-even points",
          "Construct and interpret Cost-Volume-Profit (CVP) graphs",
          "Perform sensitivity analysis using multiple Excel tools",
          "Analyze competitor pricing data for strategic insights",
          "Develop pricing recommendations based on quantitative analysis"
        ]
      },
      {
        category: "technical",
        items: [
          "Import and clean external data using Power Query",
          "Use Goal Seek to solve for target profit scenarios",
          "Create one- and two-variable data tables for scenario analysis",
          "Build dynamic CVP charts with professional formatting",
          "Present quantitative analysis to business decision-makers"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Pricing Strategy Presentation & Town Hall Debate (Day 10)",
      description: "Present pricing recommendation to economics teacher, PTA representatives, and local entrepreneurs in town-hall format",
      scenario: "Students present their data-driven pricing strategy to a panel simulating a town hall pricing debate, defending their recommendations against competing approaches and responding to stakeholder questions.",
      requirements: [
        "Data-driven pricing recommendation memo or slide deck",
        "Live demonstration of CVP model and sensitivity analysis",
        "Defense of pricing strategy in town-hall debate format",
        "Professional response to panel questions and competing viewpoints"
      ],
      context: "This mirrors real business environments where pricing decisions must be defended to multiple stakeholders with different priorities and perspectives."
    },
    milestones: [
      {
        day: 1,
        title: "Competitor Benchmark Analysis & Margin Calculation",
        description: "Complete analysis of competitor pricing data with accurate margin calculations",
        criteria: [
          "Power Query import of competitor price dataset completed successfully",
          "Accurate calculation of current markup vs. margin for all product categories",
          "Professional data visualization of competitive landscape",
          "Clear identification of market positioning opportunities"
        ]
      },
      {
        day: 5,
        title: "Advanced CVP Automation: Scenario Runner & Data Tables",
        description: "Build professional scenario runner with Data Tables, Goal Seek, and validation",
        criteria: [
          "Accurate CVP model with correct fixed/variable cost identification",
          "One- and two-variable Data Tables for pricing sensitivity",
          "Goal Seek scenarios for target profit and break-even",
          "Validation rules for out-of-range values and stale data (e.g., negative costs, missing IDs)"
        ]
      },
      {
        day: 9,
        title: "Pricing Recommendation Memo Draft",
        description: "Complete draft of pricing strategy recommendation",
        criteria: [
          "Clear pricing recommendation with quantitative justification",
          "Professional memo or slide deck format appropriate for business audience",
          "Integration of competitor analysis, CVP modeling, and sensitivity insights",
          "Anticipation of stakeholder concerns and counterarguments"
        ]
      }
    ],
    rubric: [
      {
        name: "Financial Logic",
        weight: "45%",
        exemplary: "All margin, CVP, and sensitivity calculations are accurate; model handles edge cases; demonstrates deep understanding of cost behavior",
        proficient: "Most calculations correct; basic CVP model functions properly; shows adequate understanding of pricing concepts",
        developing: "Some calculation errors; incomplete CVP model; limited understanding of cost-volume relationships"
      },
      {
        name: "Persuasiveness",
        weight: "25%",
        exemplary: "Compelling recommendation with clear rationale; excellent supporting visuals; addresses stakeholder concerns proactively",
        proficient: "Clear recommendation with adequate justification; basic supporting materials; acknowledges some stakeholder perspectives",
        developing: "Weak recommendation with limited justification; poor visual support; fails to consider stakeholder viewpoints"
      },
      {
        name: "Debate Engagement",
        weight: "15%",
        exemplary: "Excellent arguments and counterarguments; confident responses to all questions; demonstrates mastery under pressure",
        proficient: "Good arguments with adequate responses; handles most questions competently; shows solid understanding",
        developing: "Weak arguments; difficulty responding to questions; limited demonstration of understanding"
      },
      {
        name: "Revision Quality",
        weight: "15%",
        exemplary: "Significant improvements based on feedback; demonstrates learning and adaptation; enhanced final product",
        proficient: "Some improvements incorporated; shows responsiveness to feedback; adequate refinement",
        developing: "Minimal changes despite feedback; limited evidence of learning from critique"
      }
    ]
  },

  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Launch & Competitive Data Import",
          description: "Power Query import and competitor benchmark analysis",
          days: "Day 1"
        },
        {
          title: "Markup/Margin & CVP Modeling",
          description: "Foundations of pricing math and CVP model construction",
          days: "Days 2-3"
        },
        {
          title: "Goal Seek & Advanced Automation",
          description: "Target profit analysis and scenario runner with Data Tables",
          days: "Days 4-5"
        },
        {
          title: "Recommendation & Debate",
          description: "Synthesize insights and defend pricing strategy",
          days: "Days 6-10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Launch & Competitor Data Import",
        focus: "Entry event demonstration and Power Query data import skills",
        duration: "45 minutes",
        activities: [
          {
            name: "Entry Event: Live Competitor Price Scrape",
            duration: "10 minutes",
            description: "Instructor demonstrates Power Query import of live competitor pricing data",
            details: [
              "Watch instructor perform live web scraping of competitor prices using Power Query",
              "Observe data transformation and cleaning process in real-time",
              "See how raw web data becomes structured business intelligence",
              "Understand the power of automated data collection for pricing decisions"
            ],
            callout: {
              type: "important",
              title: "Real-World Data Connection",
              content: "This demonstrates how businesses actually gather competitive intelligence",
              items: [
                "Power Query can automate competitor price monitoring",
                "Fresh data provides competitive advantage over static analysis",
                "Data transformation skills are critical for business analysis",
                "Real-time pricing intelligence enables agile business decisions"
              ]
            }
          },
          {
            name: "Power Query Fundamentals",
            duration: "20 minutes",
            description: "Hands-on learning of data import and transformation techniques",
            details: [
              "Connect to external data sources using Power Query",
              "Learn data cleaning and transformation techniques",
              "Practice with provided competitor pricing dataset",
              "Understand data refresh and update capabilities"
            ]
          },
          {
            name: "Dataset Exploration",
            duration: "10 minutes",
            description: "Analyze the structure and insights available in competitor data",
            details: [
              "Examine data columns and understand pricing variables",
              "Identify patterns in competitor pricing strategies",
              "Note data quality issues and cleaning requirements",
              "Discuss implications for pricing strategy development"
            ]
          },
          {
            name: "Challenge Setup & Team Formation",
            duration: "5 minutes",
            description: "Introduce the unit challenge and organize collaborative teams",
            details: [
              "Present the essential question about competitive pricing strategy",
              "Form teams of 2-3 students for collaborative analysis",
              "Assign focus areas: budget, mid-market, or premium segments",
              "Establish timeline and milestone expectations"
            ]
          }
        ],
        materials: [
          "Live competitor pricing dataset",
          "Power Query tutorial guide",
          "Data exploration worksheets",
          "Team formation materials"
        ]
      },
      {
        day: 2,
        title: "Markup vs. Margin Concepts",
        focus: "Direct instruction on foundational pricing calculations and profit metrics",
        duration: "45 minutes",
        activities: [
          {
            name: "The Markup vs. Margin Confusion",
            duration: "5 minutes",
            description: "Hook students with common business calculation mistake",
            details: [
              "Present scenario: Business owner confused about 50% markup vs. 50% margin",
              "Show how this confusion can lead to significant profit miscalculations",
              "Connect to essential question: How do we ensure our pricing calculations are correct?"
            ]
          },
          {
            name: "Markup vs. Margin Mathematics",
            duration: "20 minutes",
            description: "Direct instruction on calculation methods and business applications",
            details: [
              "Define markup: (Selling Price - Cost) / Cost × 100%",
              "Define margin: (Selling Price - Cost) / Selling Price × 100%",
              "Demonstrate calculations using competitor pricing data",
              "Show conversion formulas between markup and margin"
            ],
            callout: {
              type: "definition",
              title: "Critical Business Calculations",
              content: "Understanding the difference prevents costly pricing mistakes",
              items: [
                "Markup: Percentage above cost (cost-based perspective)",
                "Margin: Percentage of selling price (revenue-based perspective)",
                "Same dollar profit, different percentages",
                "Financial statements typically use margin calculations"
              ]
            }
          },
          {
            name: "Guided Practice with Competitor Data",
            duration: "15 minutes",
            description: "Apply markup and margin calculations to real competitor pricing",
            details: [
              "Calculate markup percentages for competitor products",
              "Convert markups to margin percentages for comparison",
              "Identify which competitors use cost-plus vs. market-based pricing",
              "Analyze implications for competitive positioning"
            ]
          },
          {
            name: "Understanding Check",
            duration: "5 minutes",
            description: "Quick assessment of calculation comprehension",
            details: [
              "Exit ticket: Calculate markup and margin for given price and cost",
              "Self-check: Can you explain the difference to a business owner?",
              "Preview Day 3: How do we use these calculations in CVP analysis?"
            ]
          }
        ],
        materials: [
          "Markup vs. margin calculation worksheets",
          "Competitor pricing analysis templates",
          "Business scenario examples",
          "Formula reference guides"
        ]
      },
      {
        day: 3,
        title: "CVP Model Construction",
        focus: "Build comprehensive Cost-Volume-Profit models using Excel",
        duration: "45 minutes",
        activities: [
          {
            name: "The CVP Challenge Introduction",
            duration: "5 minutes",
            description: "Connect CVP analysis to competitive pricing decisions",
            details: [
              "Question: How do we know if our competitive price will actually be profitable?",
              "Problem: Price matching competitors might not cover our costs",
              "Solution: CVP analysis reveals the profit implications of pricing decisions"
            ]
          },
          {
            name: "CVP Model Components",
            duration: "20 minutes",
            description: "Direct instruction on building CVP models in Excel",
            details: [
              "Identify fixed costs (rent, salaries, insurance) vs. variable costs (materials, commissions)",
              "Create CVP formula: Profit = (Price × Volume) - (Variable Cost × Volume) - Fixed Costs",
              "Build Excel model with separate sections for inputs, calculations, and outputs",
              "Demonstrate break-even calculation: Fixed Costs / (Price - Variable Cost)"
            ],
            callout: {
              type: "important",
              title: "CVP Model Structure",
              content: "Organized model enables scenario analysis and decision-making",
              items: [
                "Input section: Costs, prices, and volume assumptions",
                "Calculation section: CVP formulas and break-even analysis",
                "Output section: Profit projections and visualizations",
                "Professional formatting for stakeholder presentations"
              ]
            }
          },
          {
            name: "CVP Chart Creation",
            duration: "15 minutes",
            description: "Build visual representation of cost-volume-profit relationships",
            details: [
              "Create data table for chart with volume levels from 0 to maximum capacity",
              "Calculate total costs, total revenue, and profit for each volume level",
              "Build line chart showing cost line, revenue line, and break-even point",
              "Format chart professionally with clear labels and break-even highlighting"
            ]
          },
          {
            name: "Model Validation",
            duration: "5 minutes",
            description: "Test CVP model accuracy and functionality",
            details: [
              "Verify break-even calculation matches chart intersection",
              "Test model with different price scenarios",
              "Confirm profit calculations are mathematically correct",
              "Preview Day 4: How do we analyze multiple scenarios efficiently?"
            ]
          }
        ],
        materials: [
          "CVP model template with clear structure",
          "Cost classification worksheets",
          "Chart formatting guides",
          "Break-even validation exercises"
        ]
      },
      {
        day: 4,
        title: "Goal Seek for Target Profit Scenarios",
        focus: "Master Goal Seek functionality for reverse engineering pricing decisions",
        duration: "45 minutes",
        activities: [
          {
            name: "Goal Seek Introduction",
            duration: "10 minutes",
            description: "Demonstrate Set Cell / To Value / By Changing Cell using the CVP model",
            details: [
              "Find required price for $50,000 profit",
              "Find required units to break even at competitor price",
              "Discuss verification and business-sense checks"
            ]
          },
          {
            name: "Guided Practice",
            duration: "25 minutes",
            description: "Students run multiple target-profit and break-even scenarios",
            details: [
              "Conservative, base, and stretch targets",
              "Document assumptions and results for later presentation",
              "Troubleshoot common Goal Seek pitfalls"
            ]
          },
          {
            name: "Reflection",
            duration: "10 minutes",
            description: "Capture key takeaways and how Goal Seek integrates with CVP model",
            details: [
              "Write 2–3 takeaways from Goal Seek practice",
              "Note one common pitfall and how to avoid it",
              "Identify how Goal Seek outputs feed back into the CVP model"
            ]
          }
        ],
        materials: [
          "/resources/unit06-goal-seek-practice.csv",
          "/resources/unit06-goal-seek-template.csv",
          "Goal Seek step-by-step guide"
        ]
      },
      {
        day: 5,
        title: "Advanced CVP Automation: Scenario Runner & Data Tables",
        focus: "Build one- and two-variable Data Tables and add robust validation",
        duration: "45 minutes",
        activities: [
          {
            name: "Scenario Runner Build",
            duration: "20 minutes",
            description: "Create inputs/outputs and construct one- and two-variable Data Tables",
            details: [
              "Define a single input area (Price, Units, Variable Cost, Fixed Costs)",
              "Create Profit output cell with IFERROR safeguard",
              "Build one-variable Data Table varying Price; label units clearly",
              "Build two-variable Data Table (Price × Units) with profit cell reference"
            ]
          },
          {
            name: "Validation & Error Handling",
            duration: "15 minutes",
            description: "Add rules for negative costs, missing IDs, and stale dates; document assumptions",
            details: [
              "Create data validation to prevent negative costs and blank IDs",
              "Flag stale dates with conditional formatting",
              "Document assumptions and validation rules on a Notes sheet"
            ]
          },
          {
            name: "Independent Mastery",
            duration: "10 minutes",
            description: "Run edge-case scenarios and complete investor-ready checklist",
            details: [
              "Use advanced dataset to stress‑test the model",
              "Complete investor‑ready checklist and fix any issues found",
              "Export summary of insights for tomorrow’s peer critique"
            ]
          }
        ],
        materials: [
          "/resources/unit06-cvp-advanced-practice.csv",
          "Investor-ready checklist",
          "Data Table reference guide"
        ]
      },
      {
        day: 6,
        title: "Peer Critique & Model Refinement",
        focus: "Structured peer feedback on CVP automation and collaborative improvement",
        duration: "45 minutes",
        activities: [
          {
            name: "Gallery Walk",
            duration: "25 minutes",
            description: "Teams review scenario runners and CVP models using an evaluation checklist",
            details: [
              "Rotate to 3–4 teams and review their models",
              "Use checklist to evaluate automation, clarity, and validation",
              "Leave one specific praise and one actionable suggestion per team"
            ]
          },
          {
            name: "Revision Sprint",
            duration: "15 minutes",
            description: "Teams implement high-impact fixes based on peer feedback",
            details: [
              "Prioritize top two issues identified in feedback",
              "Implement fixes and re‑test Goal Seek and Data Tables",
              "Update documentation and checklist items"
            ]
          },
          {
            name: "Reflection",
            duration: "5 minutes",
            description: "Record key improvements and open questions for instructor feedback",
            details: [
              "Note one improvement made today and its impact",
              "List any remaining blockers to discuss with instructor"
            ]
          }
        ],
        materials: [
          "Peer critique forms with evaluation criteria",
          "Investor-ready checklist",
          "Revision planning template"
        ]
      },
      {
        day: 7,
        title: "Data Tables for Sensitivity Analysis",
        focus: "Build comprehensive what-if analysis using one- and two-variable data tables",
        duration: "45 minutes",
        activities: [
          {
            name: "The Sensitivity Analysis Need",
            duration: "5 minutes",
            description: "Why businesses need to understand multiple scenario outcomes",
            details: [
              "Problem: Business conditions change - costs, volumes, competitive prices",
              "Risk: Single-point estimates don't show vulnerability to changes",
              "Solution: Data tables show profit sensitivity to multiple variable changes"
            ]
          },
          {
            name: "One-Variable Data Table Construction",
            duration: "20 minutes",
            description: "Build data tables showing profit sensitivity to single variables",
            details: [
              "Create data table showing profit at different price levels",
              "Build data table showing profit at different volume levels",
              "Construct data table showing profit at different variable cost levels",
              "Format tables professionally with conditional formatting for visual insights"
            ],
            callout: {
              type: "important",
              title: "Data Table Setup Requirements",
              content: "Proper structure is critical for data table functionality",
              items: [
                "Input values: List possible values for variable being tested",
                "Formula reference: Single cell reference to profit calculation",
                "Table command: Data > What-If Analysis > Data Table",
                "Variable reference: Must match input cell in original model"
              ]
            }
          },
          {
            name: "Two-Variable Data Table Analysis",
            duration: "15 minutes",
            description: "Advanced sensitivity analysis with two variables simultaneously",
            details: [
              "Build data table with price on rows and volume on columns",
              "Create data table with variable cost on rows and price on columns",
              "Use conditional formatting to highlight profitable scenarios",
              "Interpret results to identify optimal pricing sweet spots"
            ]
          },
          {
            name: "Sensitivity Insights & Documentation",
            duration: "5 minutes",
            description: "Extract business insights from sensitivity analysis",
            details: [
              "Identify price ranges that maintain profitability under various conditions",
              "Document which variables have greatest impact on profit sensitivity",
              "Note scenarios where competitive pricing might be unprofitable",
              "Preview Day 8: Integrating analysis into pricing recommendation"
            ]
          }
        ],
        materials: [
          "Data table construction guides",
          "Sensitivity analysis templates",
          "Conditional formatting examples",
          "Business insight documentation forms"
        ]
      },
      {
        day: 8,
        title: "Pricing Recommendation Development",
        focus: "Synthesize all analysis into comprehensive pricing strategy recommendation",
        duration: "45 minutes",
        activities: [
          {
            name: "Recommendation Framework",
            duration: "10 minutes",
            description: "Structure for effective business recommendations",
            details: [
              "Executive summary: Key recommendation and supporting rationale",
              "Analysis summary: Competitor benchmarking, CVP modeling, sensitivity insights",
              "Implementation details: Specific pricing levels and monitoring requirements",
              "Risk mitigation: Scenarios where recommendation might need adjustment"
            ]
          },
          {
            name: "Memo vs. Slide Deck Choice",
            duration: "5 minutes",
            description: "Teams select presentation format based on audience and content",
            details: [
              "Memo format: Detailed written analysis with embedded charts and tables",
              "Slide deck format: Visual presentation with key insights and recommendations",
              "Consider town hall debate format and panel audience preferences",
              "Choose format that best showcases team's analytical strengths"
            ]
          },
          {
            name: "Content Development Time",
            duration: "25 minutes",
            description: "Teams create their pricing recommendation documents",
            details: [
              "Draft executive summary with clear pricing recommendation",
              "Integrate competitor analysis, CVP modeling, and sensitivity insights",
              "Create professional charts and tables supporting the recommendation",
              "Anticipate potential stakeholder questions and prepare responses"
            ],
            callout: {
              type: "important",
              title: "Milestone 2 Requirements",
              content: "Complete CVP model with comprehensive sensitivity analysis",
              items: [
                "Working CVP model: Accurate break-even and profit calculations",
                "Professional visualization: Clear CVP chart with break-even highlighting",
                "Sensitivity analysis: Both one- and two-variable data tables",
                "Goal Seek scenarios: Multiple target profit calculations"
              ]
            }
          },
          {
            name: "Milestone 2 Checkpoint",
            duration: "5 minutes",
            description: "Verify readiness for town hall debate preparation",
            details: [
              "Teams confirm all technical components are working correctly",
              "Review draft recommendation for completeness and clarity",
              "Identify areas needing refinement before tomorrow's debate preparation",
              "Preview Day 9: Town hall debate preparation and rehearsal"
            ]
          }
        ],
        materials: [
          "Business recommendation templates",
          "Memo and slide deck format examples",
          "Professional writing guides",
          "Milestone 2 assessment criteria"
        ]
      },
      {
        day: 9,
        title: "Town Hall Debate Preparation",
        focus: "Prepare for and rehearse pricing strategy defense in debate format",
        duration: "45 minutes",
        activities: [
          {
            name: "Town Hall Format Overview",
            duration: "10 minutes",
            description: "Understand debate structure and stakeholder perspectives",
            details: [
              "Panel composition: Economics teacher, PTA representatives, local entrepreneurs",
              "Debate format: Initial presentation, cross-examination, rebuttal period",
              "Stakeholder perspectives: Consumer advocate, business owner, economic analyst",
              "Success criteria: Persuasive arguments, data integration, professional demeanor"
            ]
          },
          {
            name: "Argumentation Strategy Workshop",
            duration: "15 minutes",
            description: "Develop compelling arguments and anticipate counterarguments",
            details: [
              "Identify strongest elements of pricing analysis and recommendation",
              "Anticipate likely challenges: too high, too low, insufficient data, unrealistic assumptions",
              "Prepare data-driven responses using CVP model and sensitivity analysis",
              "Practice transitioning between technical analysis and business communication"
            ],
            callout: {
              type: "tip",
              title: "Effective Debate Strategies",
              content: "Balance technical accuracy with persuasive communication",
              items: [
                "Lead with business benefit, support with technical analysis",
                "Use specific numbers and scenarios to illustrate points",
                "Acknowledge limitations while defending core recommendation",
                "Connect to stakeholder concerns (profitability, competitiveness, market share)"
              ]
            }
          },
          {
            name: "Team Rehearsal & Refinement",
            duration: "15 minutes",
            description: "Practice presentations and refine based on peer feedback",
            details: [
              "Teams practice their initial presentation within time limits",
              "Rehearse responses to anticipated panel questions",
              "Refine data visualizations and talking points for maximum impact",
              "Assign roles for debate: lead presenter, technical expert, rebuttal specialist",
              "Use PeerCritiqueForm rubric categories to structure peer feedback"
            ]
          },
          {
            name: "Final Preparation & Logistics",
            duration: "5 minutes",
            description: "Confirm readiness and review tomorrow's procedures",
            details: [
              "Verify all technical materials are ready and accessible",
              "Review presentation order and time limits",
              "Confirm understanding of debate rules and panel expectations",
              "Final team confidence check and encouragement"
            ]
          }
        ],
        materials: [
          "Town hall debate format guide",
          "Stakeholder perspective summaries",
          "Presentation rehearsal feedback forms (PeerCritiqueForm rubric)",
          "Technical setup checklists"
        ]
      },
      {
        day: 10,
        title: "Town Hall Pricing Debate & Reflection",
        focus: "Final presentations in town hall format with comprehensive unit reflection",
        duration: "45 minutes",
        activities: [
          {
            name: "Town Hall Pricing Debate",
            duration: "30 minutes",
            description: "Teams present pricing strategies to panel in debate format",
            details: [
              "Each team presents 4-minute pricing recommendation with live Excel demonstration",
              "Panel asks probing questions about methodology, assumptions, and market feasibility",
              "Teams defend their strategies against competing approaches and stakeholder concerns",
              "Panel provides feedback on analytical rigor and business communication effectiveness",
              "Audience completes PeerCritiqueForm by rubric category"
            ],
            callout: {
              type: "important",
              title: "Final Assessment: Town Hall Performance",
              content: "Authentic assessment of analytical and communication skills",
              items: [
                "Technical mastery: CVP model accuracy and sophisticated sensitivity analysis",
                "Business insight: Clear understanding of competitive dynamics and profit drivers",
                "Communication: Professional presentation appropriate for diverse stakeholder audience",
                "Critical thinking: Thoughtful responses to challenging questions and counterarguments"
              ]
            }
          },
          {
            name: "Unit Reflection & Learning Analysis",
            duration: "10 minutes",
            description: "Comprehensive reflection on CVP analysis and pricing strategy learning",
            details: [
              "Individual reflection: How did building CVP models change your understanding of pricing decisions?",
              "Team discussion: Which aspects of sensitivity analysis were most valuable for business insight?",
              "Class sharing: What surprised you about the relationship between competition and profitability?",
              "Future application: How might these analytical skills apply to other business decisions?"
            ]
          },
          {
            name: "Portfolio Addition & Unit Closure",
            duration: "5 minutes",
            description: "Document achievements and prepare for next unit transition",
            details: [
              "Add final pricing recommendation and CVP model to digital portfolio with reflection notes",
              "Celebrate team achievements in analytical thinking and professional presentation",
              "Connect learning to upcoming Asset & Inventory Tracker unit",
              "Preview how pricing analysis integrates with inventory and asset management decisions"
            ]
          }
        ],
        materials: [
          "Town hall debate evaluation forms",
          "Unit reflection prompts",
          "Portfolio submission guidelines",
          "Next unit preview materials"
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
        "Excel Model Check-ins: Daily verification of technical skill development",
        "Peer Critique Sessions: Structured feedback using business evaluation criteria",
        "Sensitivity Analysis Reviews: Individual conferences on analytical interpretation",
        "Draft Recommendation Feedback: Written feedback on business communication",
        "Self-Assessment Reflection: Students evaluate their own analytical growth"
      ]
    },
    {
      category: "feedback",
      title: "Feedback Strategies",
      strategies: [
        "Technical Precision: \"Verify break-even formula uses correct fixed cost total\"",
        "Business Application: \"Explain how this sensitivity insight affects pricing strategy\"",
        "Communication Clarity: \"Revise executive summary for non-technical stakeholders\"",
        "Analytical Depth: \"Consider additional scenarios where this pricing might fail\""
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students",
      strategies: [
        "CVP Templates: Pre-built model structures with guided formula entry",
        "Visual Calculators: Step-by-step markup vs. margin calculation guides",
        "Peer Partnerships: Pair with students strong in Excel or business analysis",
        "Alternative Assessment: Focus presentation on business insights rather than technical details"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Advanced Modeling: Incorporate seasonality and demand elasticity into CVP models",
        "Leadership Roles: Facilitate peer critique sessions and support struggling teams",
        "Extended Analysis: Research actual competitor financial statements for deeper insights",
        "Presentation Enhancement: Create interactive Excel dashboards for town hall debate"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Business Vocabulary: Glossary of CVP and pricing terms with visual definitions",
        "Formula Explanations: Mathematical concepts explained with universal symbols",
        "Cultural Context: Discussion of pricing practices in different economic systems",
        "Collaborative Support: Mixed-language teams with peer translation assistance"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: 1:1 laptops with Excel and internet access for Power Query" },
        { name: "Software: Microsoft Excel (365 or 2019+) with Power Query and Analysis ToolPak" },
        { name: "Data Sources: Live competitor pricing websites or provided datasets" },
        { name: "Presentation: Projector/smart board for town hall debate setup" },
        { name: "Recording: Audio/video capability for presentation documentation" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials",
      items: [
        { name: "Power Query Tutorial Guide", link: "../excel-instruction/power-query-guide.pdf" },
        { name: "CVP Model Template", link: "../excel-templates/cvp-model-template.xlsx" },
        { name: "Data Table Construction Guide", link: "../excel-instruction/data-tables-guide.pdf" },
        { name: "Town Hall Debate Rubric", link: "../assessment-rubrics/debate-rubric.html" },
        { name: "Business Memo Writing Guide", link: "../writing-resources/business-memo-guide.pdf" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Guest Panel: Economics teacher, PTA reps with business backgrounds, local entrepreneurs" },
        { name: "Competitor Data: Local business websites with pricing information" },
        { name: "Industry Examples: Real CVP analysis case studies from business publications" },
        { name: "Community Partners: Chamber of Commerce, SCORE mentors for authentic context" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students demonstrate mastery of CVP relationships and break-even analysis?",
      "Were Power Query and data analysis skills successfully integrated with business applications?",
      "How effectively did the town hall debate format assess both technical and communication skills?",
      "Which differentiation strategies were most effective for diverse learners?",
      "How can we strengthen the connection between this unit and subsequent asset management topics?"
    ],
    dataCollection: [
      "Student Performance: Analysis of CVP model accuracy and analytical sophistication",
      "Engagement Data: Observation of debate participation and peer collaboration quality",
      "Panel Feedback: External evaluator comments on student presentation effectiveness",
      "Self-Assessment: Student reflection surveys on confidence and skill development",
      "Technical Skills: Documentation of Excel proficiency growth through unit activities"
    ],
    nextUnitPrep: [
      "Archive exemplary CVP models and pricing recommendations for future reference",
      "Document common Excel errors and successful troubleshooting strategies",
      "Identify students needing additional support with quantitative analysis",
      "Prepare transition materials connecting pricing analysis to inventory valuation methods",
      "Collect panel feedback for improving town hall debate format and stakeholder engagement"
    ]
  }
}
