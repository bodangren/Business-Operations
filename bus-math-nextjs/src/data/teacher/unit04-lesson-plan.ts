import { UnitLessonPlan } from "@/types/lesson-plan"

// Component Usage Schedule (Unit 04, Lessons 01–05)
// - ComprehensionCheck (default export)
// - ReflectionJournal (default export)
// - FillInTheBlank (default export)
// - BudgetCategorySort (default export)
// - DataCleaningExercise (default export)
// - SpreadsheetWrapper (Spreadsheet/Excel-like grid)
// - Charts: BarChart, LineChart, PieChart, FinancialDashboard (named exports vary by file)
// - PhaseHeader / PhaseFooter (named exports)

export const unit04LessonPlan: UnitLessonPlan = {
  unitNumber: 4,
  unitTitle: "Data-Driven Café",
  description: "Complete 10-day lesson plan using statistical analysis and forecasting to optimize café operations",
  essentialQuestion: "Given two years of POS data, what inventory and staffing plan will maximize weekend profits without raising waste above 3%?",
  
  meta: {
    duration: "10 class periods (2 weeks)",
    gradeLevel: "12th Grade Applied Math", 
    course: "Math for Business Operations"
  },

  // Stage 1: Desired Results
  objectives: {
    enduring: [
      "Data-driven decisions provide competitive advantages in business operations",
      "Statistical analysis reveals patterns that guide inventory and staffing optimization",
      "Forecasting models enable proactive business planning and risk management",
      "Outlier identification prevents skewed analysis and faulty business conclusions"
    ],
    knowledge: [
      {
        category: "content",
        items: [
          "Descriptive statistics: mean, median, standard deviation, and z-scores",
          "Outlier identification and handling techniques in business data",
          "Linear regression principles and business forecasting applications",
          "Cost-benefit analysis for inventory and staffing decisions",
          "Statistical significance and confidence in business predictions"
        ]
      },
      {
        category: "technical", 
        items: [
          "Excel Analysis ToolPak: Descriptive Statistics, Regression, Histograms",
          "Data cleaning: Text-to-Columns, TRIM, duplicate removal, advanced filters",
          "Data visualization: Histograms, box plots, scatterplots with trendlines",
          "FORECAST.LINEAR function and regression analysis in Excel",
          "Professional infographic design principles for business communication"
        ]
      }
    ],
    skills: [
      {
        category: "content",
        items: [
          "Compute and interpret descriptive statistics for business decision-making",
          "Identify outliers using z-score analysis and business context",
          "Build and evaluate linear regression models for demand forecasting",
          "Develop inventory and staffing recommendations based on statistical analysis",
          "Communicate data insights through compelling visual storytelling"
        ]
      },
      {
        category: "technical",
        items: [
          "Clean and prepare raw POS data for statistical analysis",
          "Use Analysis ToolPak to generate comprehensive statistical reports",
          "Create professional data visualizations with appropriate chart types",
          "Build forecasting models using Excel's regression capabilities",
          "Design infographic presentations for business stakeholder audiences"
        ]
      }
    ]
  },

  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: {
      title: "Café Management Presentation (Day 10)",
      description: "90-second elevator pitch with supporting infographic poster",
      scenario: "Students present their data-driven recommendations to the campus café manager and student staff, with the best plans being tested during the following weekend operations.",
      requirements: [
        "90-second elevator pitch explaining statistical findings and recommendations",
        "Professional infographic poster displaying key data insights and proposed changes",
        "Specific inventory and staffing plan that reduces waste to ≤3% while maximizing profits",
        "Q&A responses demonstrating deep understanding of statistical analysis and business implications"
      ],
      context: "This mirrors real business consulting where data analysts present actionable recommendations to management teams who must implement changes with limited time and resources."
    },
    milestones: [
      {
        day: 3,
        title: "Clean Data & Flag Outliers", 
        description: "Successfully prepared dataset with outlier identification",
        criteria: [
          "Raw POS data cleaned using Text-to-Columns, TRIM, and duplicate removal",
          "Outliers identified using z-score analysis (|z| > 2 or 3 standard deviations)",
          "Outliers appropriately flagged or removed with business justification",
          "Descriptive statistics computed using Analysis ToolPak for key variables"
        ]
      },
      {
        day: 5,
        title: "Forecast Automation & Validation (Advanced)",
        description: "Scenario toggles, structured references, and audit checks in place",
        criteria: [
          "Forecast uses Excel Tables (structured references) with FORECAST.LINEAR",
          "Scenario toggle implemented (Baseline vs PromoAdjusted) with dynamic recalculation",
          "Audit panel flags addressed: stale dates, missing keys, negative units, invalid prices",
          "Error handling (IFERROR/XLOOKUP defaults) and assumptions documented"
        ]
      },
      {
        day: 10,
        title: "Deliver Plan & Simulate Next Weekend",
        description: "Complete presentation with implementation roadmap",
        criteria: [
          "90-second pitch delivered professionally within time limit",
          "Infographic poster effectively communicates key insights and recommendations",
          "Specific, actionable plan addresses inventory, staffing, and waste reduction",
          "Simulation shows projected impact on next weekend's operations"
        ]
      }
    ],
    rubric: [
      {
        name: "Analytical Depth",
        weight: "45%",
        exemplary: "Accurate statistical calculations; thoughtful outlier treatment with business justification; sound forecasting model with validated assumptions",
        proficient: "Mostly correct statistics; appropriate outlier handling; reasonable forecast model with minor issues",
        developing: "Some statistical errors; limited outlier analysis; weak or inaccurate forecasting approach"
      },
      {
        name: "Realism of Plan", 
        weight: "25%",
        exemplary: "Highly feasible recommendations; specific order quantities and staff schedules; waste reduction to ≤3% with profit optimization",
        proficient: "Generally realistic plan; clear recommendations; achieves waste target with reasonable profit impact",
        developing: "Vague or unrealistic recommendations; unclear implementation; doesn't meet waste reduction target"
      },
      {
        name: "Infographic Quality",
        weight: "15%", 
        exemplary: "Compelling visual story; excellent chart design; clear data communication; professional business appearance",
        proficient: "Good visual appeal; appropriate charts; mostly clear communication; neat professional look",
        developing: "Basic visuals; unclear charts; poor visual communication; unprofessional appearance"
      },
      {
        name: "Reflection & Revision",
        weight: "15%",
        exemplary: "Insightful analysis of prediction accuracy; identifies model limitations; actionable improvements for future forecasting",
        proficient: "Basic reflection on results; recognizes some limitations; suggests general improvements",
        developing: "Limited reflection; doesn't recognize limitations; vague or unrealistic improvement suggestions"
      }
    ]
  },

  // Stage 3: Learning Plan  
  learningPlan: {
    overview: {
      phases: [
        {
          title: "Introduction: Café Operations Challenge",
          description: "Virtual field trip and problem introduction with authentic business context",
          days: "Day 1"
        },
        {
          title: "Core Concepts: Data Cleaning & Descriptive Stats", 
          description: "Master data preparation, descriptive statistics, and outlier identification",
          days: "Days 2-3"
        },
        {
          title: "Excel Visualization & Forecast Automation",
          description: "Create professional charts and implement advanced forecast automation",
          days: "Days 4-5" 
        },
        {
          title: "Examples & Exercises: Professional Analysis",
          description: "Study worked examples and complete independent statistical analysis",
          days: "Days 6-7"
        },
        {
          title: "Summary & Project Work",
          description: "Integrate findings, create presentation materials, and deliver to stakeholders",
          days: "Days 8-10"
        }
      ]
    },
    dailyLessons: [
      {
        day: 1,
        title: "Launch & Explore: Campus Café Challenge",
        focus: "Entry event with virtual field trip and dataset introduction", 
        duration: "45 minutes",
        activities: [
          {
            name: "Virtual Field Trip to Campus Café",
            duration: "15 minutes",
            description: "Immersive exploration of café operations and challenges",
            // Components: ComprehensionCheck.tsx (virtual tour quiz)
            details: [
              "Watch virtual tour of campus café during busy weekend rush", 
              "Observe real operational challenges: overstock waste, understaffing issues",
              "Meet café manager who shares two years of anonymized weekend POS data",
              "Students take notes on observed inefficiencies and potential improvements"
            ],
            video: {
              title: "Weekend Rush: Inside Campus Café Operations",
              duration: "8 minutes", 
              description: "Tour the campus café during peak weekend hours. Observe customer flow patterns, inventory challenges, and staffing decisions. The café manager explains how data could help optimize operations."
            },
            callout: {
              type: "important",
              title: "Real Business Context",
              content: "This café serves 800+ students on weekends with complex operational challenges",
              items: [
                "Peak hours: 8-10am (breakfast rush) and 1-3pm (lunch rush)",
                "Current waste rate: 8-12% on weekends (target: ≤3%)",
                "Staffing costs: $2,400/weekend (opportunity for optimization)",
                "Key challenge: Balancing customer satisfaction with operational efficiency"
              ]
            }
          },
          {
            name: "Dataset Exploration & Team Formation",
            duration: "20 minutes", 
            description: "Examine POS data structure and form analysis teams",
            // Components: FocusAreaSelector.tsx, TeamRoleAssigner.tsx
            details: [
              "Teams receive two years of weekend POS data (anonymized)",
              "Initial data exploration: What information is available?",
              "Identify data quality issues and cleaning needs",
              "Teams choose focus area: beverage mix, pastry inventory, or staffing optimization"
            ],
            callout: {
              type: "tip", 
              title: "POS Data Overview",
              content: "Real transactional data provides authentic analytical experience",
              items: [
                "104 weekend days of transaction data (2 years)",
                "15,000+ individual transactions with timestamps",
                "50+ menu items across beverages, pastries, and meals", 
                "Weather data and special events noted for context"
              ]
            }
          },
          {
            name: "Challenge Framing & Success Criteria",
            duration: "10 minutes",
            description: "Establish clear objectives and constraints for analysis",
            details: [
              "Present essential question: How to maximize profits while reducing waste to ≤3%?",
              "Discuss business constraints: limited staff, fixed equipment, student preferences",
              "Preview success criteria: statistical accuracy, feasible recommendations, professional presentation",
              "Teams set specific goals for their chosen focus area"
            ]
          }
        ],
        materials: [
          "Campus café virtual tour video (8 minutes)",
          "Two years of weekend POS data (anonymized Excel file)",
          "Data exploration worksheets", 
          "Team formation materials and role definitions",
          "Business context briefing documents"
        ]
      },
      {
        day: 2,
        title: "Skill Introduction: Data Cleaning Fundamentals",
        focus: "Master essential data preparation techniques using café POS data",
        duration: "45 minutes",
        activities: [
          {
            name: "The Messy Data Reality", 
            duration: "5 minutes",
            description: "Connect to real-world data challenges in business",
            details: [
              "Review yesterday's data exploration: What problems did teams identify?",
              "Explain why real business data is always messy and needs cleaning",
              "Preview today's goal: Transform messy POS data into analysis-ready format"
            ]
          },
          {
            name: "Data Cleaning Demonstration",
            duration: "25 minutes", 
            description: "Live demonstration of essential Excel data cleaning techniques",
            // Components: POSDataCleaner.tsx (interactive data cleaning tool)
            details: [
              "Text-to-Columns: Separate combined datetime fields into usable components",
              "TRIM function: Remove extra spaces from menu item names and categories", 
              "Remove Duplicates: Identify and eliminate duplicate transaction records",
              "Advanced Filters: Isolate weekend data and remove incomplete entries"
            ],
            callout: {
              type: "important",
              title: "Professional Data Cleaning Standards",
              content: "Clean data is the foundation of reliable business analysis",
              items: [
                "Document all cleaning steps for reproducibility and audit trails",
                "Preserve original data in separate worksheet for reference",
                "Validate cleaning results by checking totals and counts",
                "Create cleaning checklist to ensure consistency across analysis teams"
              ]
            }
          },
          {
            name: "Guided Practice: Café Data Cleaning",
            duration: "12 minutes",
            description: "Students apply cleaning techniques to their POS dataset",
            // Components: POSDataCleaner.tsx, BudgetCategorySort.tsx (organize expenses into categories)
            details: [
              "Teams work through data cleaning checklist step-by-step",
              "Apply Text-to-Columns to separate transaction timestamps",
              "Use TRIM function to clean menu item descriptions", 
              "Remove duplicate transactions and verify data integrity"
            ]
          },
          {
            name: "Quality Check & Preview",
            duration: "3 minutes",
            description: "Verify cleaning success and prepare for statistical analysis",
            details: [
              "Teams compare before/after data quality metrics",
              "Quick validation: Do row counts and totals make sense?",
              "Preview Day 3: Using cleaned data to identify outliers and compute statistics"
            ]
          }
        ],
        materials: [
          "Data cleaning cheat sheet with step-by-step instructions",
          "Excel cleaning function reference guide",
          "Data quality validation checklist",
          "Sample cleaned dataset for comparison"
        ]
      },
      {
        day: 3, 
        title: "Application Practice: Outliers & Descriptive Statistics",
        focus: "Identify outliers and compute key statistics using Analysis ToolPak",
        duration: "45 minutes",
        activities: [
          {
            name: "The Outlier Detective Challenge",
            duration: "8 minutes",
            description: "Frame outlier identification as business detective work",
            details: [
              "Present scenario: Some weekend transactions seem unusually high or low",
              "Question: Are these data errors or legitimate business insights?",
              "Introduce z-score analysis as the statistical detective tool",
              "Teams predict what outliers they might find in café data"
            ]
          },
          {
            name: "Z-Score Analysis Instruction",
            duration: "17 minutes", 
            description: "Learn to identify outliers using statistical methods",
            // Components: OutlierDetector.tsx (z-score calculator), DescriptiveStatsCalculator.tsx
            details: [
              "Calculate z-scores for transaction amounts: z = (x - μ) / σ",
              "Apply rule: |z| > 2 suggests potential outlier requiring investigation",
              "Use Analysis ToolPak to compute descriptive statistics efficiently",
              "Interpret results: mean, median, standard deviation in business context"
            ],
            callout: {
              type: "definition",
              title: "Z-Score Business Interpretation",
              content: "Z-scores reveal how unusual specific transactions are",
              items: [
                "Z > +2: Transaction is unusually high (large orders, special events)",
                "Z < -2: Transaction is unusually low (refunds, errors, small orders)",
                "|Z| < 2: Normal transaction within expected business range",
                "Business context matters: Holiday rushes create legitimate outliers"
              ]
            }
          },
          {
            name: "Analysis ToolPak Practice",
            duration: "15 minutes",
            description: "Hands-on statistical analysis of café transaction data",
            // Components: DescriptiveStatsCalculator.tsx, OutlierDetector.tsx, ReflectionAnalyzer.tsx
            details: [
              "Teams use Analysis ToolPak Descriptive Statistics on their cleaned data",
              "Calculate z-scores for transaction amounts and identify potential outliers",
              "Investigate outliers: Are they errors or valid business events?",
              "Document decisions about outlier treatment with business justification"
            ]
          },
          {
            name: "Milestone 1 Assessment",
            duration: "5 minutes", 
            description: "Verify completion of data cleaning and outlier analysis",
            details: [
              "Teams demonstrate clean dataset with documented outlier analysis",
              "Quick peer review using milestone criteria checklist",
              "Preview Day 4: Building visualizations to reveal data patterns"
            ]
          }
        ],
        materials: [
          "Analysis ToolPak quick-start guide",
          "Z-score calculation templates and examples",
          "Outlier investigation worksheet",
          "Milestone 1 assessment checklist"
        ]
      },
      {
        day: 4,
        title: "Excel Charts & Data Visualization: Transforming Data into Business Insights",
        focus: "Create professional Excel charts and interpret visual business patterns",
        duration: "45 minutes", 
        activities: [
          {
            name: "The Power of Visual Data Stories",
            duration: "7 minutes",
            description: "Understand why visualization matters in business communication",
            details: [
              "Compare numerical tables vs. visual charts for pattern recognition",
              "Show examples: How histograms reveal customer behavior patterns",
              "Explain box plots for comparing different time periods or menu categories",
              "Connect to café challenge: What patterns might help optimize operations?"
            ]
          },
          {
            name: "Chart Creation Workshop",
            duration: "25 minutes",
            description: "Build professional business charts using café data",
            // Components: HistogramBuilder.tsx, BoxPlotVisualization.tsx, ScatterPlotBuilder.tsx
            details: [
              "Histogram creation: Show distribution of transaction amounts and timing",
              "Box plot construction: Compare weekend patterns across seasons or menu categories",
              "Scatterplot basics: Explore relationships between variables (time vs sales)",
              "Professional formatting: Business-appropriate colors, titles, and labels"
            ],
            callout: {
              type: "tip",
              title: "Chart Selection for Business Analysis", 
              content: "Different chart types reveal different business insights",
              items: [
                "Histograms: Show frequency distributions (busy times, popular price points)",
                "Box plots: Compare groups (Saturday vs Sunday, seasonal differences)",
                "Scatterplots: Explore relationships (weather vs sales, time vs volume)",
                "Professional formatting builds credibility with business stakeholders"
              ]
            }
          },
          {
            name: "Pattern Analysis Practice",
            duration: "10 minutes",
            description: "Teams create charts and identify business-relevant patterns",
            details: [
              "Teams create histogram of transaction amounts for their focus area",
              "Build box plot comparing different time periods or product categories",
              "Identify patterns: When are peak sales? What drives high-value transactions?",
              "Discuss implications: How do patterns inform inventory and staffing decisions?"
            ]
          },
          {
            name: "Chart Review & Refinement",
            duration: "3 minutes",
            description: "Improve charts based on business communication standards",
            details: [
              "Peer feedback on chart clarity and professional appearance",
              "Refine titles, labels, and formatting for business presentation quality",
              "Preview Day 5: Using patterns to build forecasting models"
            ]
          }
        ],
        materials: [
          "Chart creation step-by-step guides",
          "Professional formatting templates",
          "Pattern analysis worksheet",
          "Business chart examples and standards guide"
        ]
      },
      {
        day: 5,
        title: "Advanced Forecast Automation (Regression)",
        focus: "Deepen Lesson04 with automation, scenario toggles, and validation",
        duration: "45 minutes",
        activities: [
          {
            name: "From Patterns to Predictions",
            duration: "5 minutes", 
            description: "Connect yesterday's pattern recognition to forecasting needs",
            details: [
              "Review patterns discovered: peak times, seasonal trends, popular items",
              "Business question: How can we use these patterns to predict future demand?",
              "Introduce regression as the tool for turning patterns into predictions",
              "Goal: Build model to forecast next weekend's demand for better planning"
            ]
          },
          {
            name: "Linear Regression Instruction", 
            duration: "20 minutes",
            description: "Learn regression analysis using Excel tools",
            // Components: RegressionForecaster.tsx (FORECAST.LINEAR tool)
            details: [
              "FORECAST.LINEAR function: Simple forecasting using historical trends",
              "Analysis ToolPak Regression: Comprehensive analysis with R-squared and confidence intervals",
              "Interpretation: What does R-squared tell us about model reliability?",
              "Business application: Using regression to predict demand by time period and menu category"
            ],
            callout: {
              type: "important",
              title: "Regression Model Validation for Business",
              content: "Model accuracy determines business decision confidence",
              items: [
                "R-squared > 0.7: Strong predictive model suitable for business planning",
                "R-squared 0.4-0.7: Moderate model, use with caution and additional data",
                "R-squared < 0.4: Weak model, seek additional variables or different approach",
                "Always validate predictions against business knowledge and constraints"
              ]
            }
          },
          {
            name: "Forecast Model Building",
            duration: "15 minutes",
            description: "Teams build regression models for their focus area",
            // Components: RegressionForecaster.tsx, DemandForecastModel.tsx
            details: [
              "Use FORECAST.LINEAR to predict demand based on historical patterns",
              "Apply Analysis ToolPak Regression for comprehensive model analysis",
              "Evaluate model strength using R-squared and residual patterns",
              "Generate specific predictions for next weekend's operations"
            ]
          },
          {
            name: "Model Testing & Validation",
            duration: "5 minutes",
            description: "Verify model accuracy and business reasonableness",
            // Components: PredictionValidator.tsx
            details: [
              "Test predictions against business logic: Do forecasts make sense?",
              "Compare model results with manager's experience and intuition",
              "Preview Day 6-7: Using forecasts to develop specific operational recommendations"
            ]
          }
        ],
        materials: [
          "FORECAST.LINEAR function guide with examples",
          "Analysis ToolPak Regression tutorial",
          "Model validation checklist",
          "Forecast template worksheets",
          "/resources/unit04-forecasting-advanced-practice.csv"
        ]
      },
      {
        day: 6,
        title: "Examples: Professional Statistical Analysis",
        focus: "Study worked examples of complete statistical analysis projects",
        duration: "45 minutes",
        activities: [
          {
            name: "Professional Analysis Walkthrough",
            duration: "20 minutes",
            description: "Examine complete statistical analysis from data cleaning to recommendations",
            details: [
              "Case study: Restaurant chain's weekend optimization project",
              "Follow complete process: data cleaning → outlier analysis → visualization → forecasting → recommendations",
              "Analyze decision-making at each step: Why were specific statistical techniques chosen?",
              "Evaluate final recommendations: How did statistical findings translate to business actions?"
            ],
            callout: {
              type: "example", 
              title: "Real-World Success Story",
              content: "Regional coffee chain reduced weekend waste from 11% to 2.8% using similar analysis",
              items: [
                "Data-driven staffing adjustments saved $18,000 annually per location",
                "Inventory optimization reduced waste while maintaining 99.2% customer satisfaction",
                "Forecasting models improved accuracy from 68% to 91% for weekend planning",
                "Statistical confidence enabled management buy-in for operational changes"
              ]
            }
          },
          {
            name: "Analysis Quality Standards",
            duration: "15 minutes",
            description: "Learn criteria for professional-grade statistical analysis",
            details: [
              "Documentation standards: Clear methodology, assumptions, and limitations",
              "Statistical rigor: Appropriate techniques, validated assumptions, honest uncertainty",
              "Business relevance: Actionable insights tied to specific operational decisions",
              "Communication clarity: Technical findings translated for business stakeholders"
            ]
          },
          {
            name: "Self-Assessment & Improvement Planning",
            duration: "10 minutes",
            description: "Teams evaluate their analysis against professional standards",
            // Components: ReflectionJournal.tsx, PercentageCalculationSorting.tsx (business scenarios)
            details: [
              "Compare team's work to professional example using quality criteria",
              "Identify strengths and areas for improvement in statistical methodology",
              "Plan refinements for final analysis: What needs strengthening?",
              "Set goals for Day 7 independent work session"
            ]
          }
        ],
        materials: [
          "Professional case study with complete analysis documentation",
          "Statistical analysis quality rubric",
          "Self-assessment worksheets",
          "Industry examples and success stories"
        ]
      },
      {
        day: 7,
        title: "Exercises: Independent Analysis Completion",
        focus: "Complete comprehensive statistical analysis and develop business recommendations",
        duration: "45 minutes",
        activities: [
          {
            name: "Independent Work Session Setup",
            duration: "5 minutes",
            description: "Clear expectations and success criteria for completion",
            details: [
              "Review Milestone 2 requirements: forecast model, visualizations, analysis documentation",
              "Time management guidance: prioritize model accuracy and business relevance",
              "Support available: peer consultation and targeted instructor assistance"
            ]
          },
          {
            name: "Complete Statistical Analysis",
            duration: "30 minutes",
            description: "Teams finalize all analytical components independently",
            // Components: CostSavingsSimulator.tsx (cost-benefit analysis), RegressionForecaster.tsx, HistogramBuilder.tsx, BoxPlotVisualization.tsx, ScatterPlotBuilder.tsx
            details: [
              "Refine forecast models based on yesterday's feedback and quality standards",
              "Complete visualization suite: histograms, box plots, scatterplots with professional formatting",
              "Conduct cost-benefit analysis: quantify impact of proposed operational changes",
              "Document methodology and validate assumptions for stakeholder presentation"
            ],
            callout: {
              type: "important",
              title: "Milestone 2 Success Criteria", 
              content: "Complete analysis package ready for business presentation",
              items: [
                "Accurate forecasting model with R-squared ≥ 0.6 and business validation",
                "Professional visualization suite communicating key insights clearly",
                "Quantified recommendations with specific operational changes and expected outcomes",
                "Documentation enabling replication and stakeholder understanding"
              ]
            }
          },
          {
            name: "Peer Review & Quality Check",
            duration: "8 minutes",
            description: "Structured feedback using professional standards",
            // Components: PeerCritiqueForm.tsx
            details: [
              "Teams exchange analysis packages for peer review",
              "Use quality checklist to provide specific, actionable feedback",
              "Focus on statistical accuracy, business relevance, and presentation clarity",
              "Provide suggestions for strengthening weak areas before final presentation"
            ]
          },
          {
            name: "Milestone 2 Completion",
            duration: "2 minutes", 
            description: "Verify readiness for presentation preparation phase",
            details: [
              "Teams confirm completion of all analytical requirements",
              "Preview Days 8-10: Translating analysis into compelling business presentation",
              "Transition focus from analysis to persuasive communication"
            ]
          }
        ],
        materials: [
          "Milestone 2 assessment checklist",
          "Peer review protocol and feedback forms",
          "Statistical analysis troubleshooting guide",
          "Professional documentation templates"
        ]
      },
      {
        day: 8,
        title: "PBL Milestone 1: Project Definition",
        focus: "Define problem, scope, metrics, risks; set up Excel workbook skeleton",
        duration: "45–60 minutes",
        activities: [
          {
            name: "Project Framing",
            duration: "10 minutes",
            description: "Clarify business goals and constraints with authentic context",
            details: [
              "Write problem statement tied to ≤3% weekend waste target",
              "Identify stakeholders and success metrics",
              "Confirm scope and timelines for prototype and presentation"
            ]
          },
          {
            name: "Data Inventory & Plan",
            duration: "12 minutes",
            description: "Plan data sources and file conventions",
            details: [
              "List dataset columns and cleaning steps (TRIM, Remove Duplicates)",
              "Establish file naming convention and folder structure",
              "Assign roles for data import and cleaning"
            ]
          },
          {
            name: "Excel Workbook Skeleton",
            duration: "18 minutes",
            description: "Create tabs and validations for future automation",
            details: [
              "Tabs: Data, Clean, Charts, Forecast, Dashboard, Audit",
              "Add basic validations and error checks placeholders",
              "Document assumptions and risks in an Audit/Notes area"
            ]
          },
          {
            name: "Milestone 1 Check & Submit",
            duration: "5 minutes",
            description: "Quick readiness review and brief submission",
            details: [
              "Confirm acceptance criteria met (brief + skeleton started)",
              "Peer check‑in for clarity and feasibility",
              "Upload brief and workbook draft"
            ]
          }
        ],
        materials: [
          "Milestone 1 acceptance checklist",
          "Data inventory template",
          "Workbook skeleton guide",
          "Group dataset links (g1–g6)"
        ]
      },
      {
        day: 9,
        title: "PBL Milestone 2: Prototype + Rehearsal",
        focus: "Build working prototype, validate, rehearse; collect structured peer feedback",
        duration: "60 minutes (+20 min rehearsal & feedback)",
        activities: [
          {
            name: "Prototype Build & Test",
            duration: "25 minutes",
            description: "Implement forecast, validations, and test scenarios",
            details: [
              "Implement FORECAST.LINEAR or use Regression output",
              "Add validations, IFERROR defaults, and audit flags",
              "Run test scenarios; record results and change notes"
            ]
          },
          {
            name: "Rehearsal Round 1",
            duration: "20 minutes",
            description: "Deliver timed practice; collect peer feedback",
            details: [
              "4–5 min timed delivery per team",
              "Use PeerCritiqueForm categories aligned to rubric",
              "Identify clarity gaps and data/visual issues"
            ]
          },
          {
            name: "Incorporate Feedback",
            duration: "12 minutes",
            description: "Refine model and narrative based on critique",
            details: [
              "Address validation flags and confusing visuals",
              "Tighten storyline and transitions",
              "Update test summary and change log"
            ]
          },
          {
            name: "Quick Check",
            duration: "3 minutes",
            description: "Confirm readiness for final presentations",
            details: [
              "All rubric areas addressed",
              "Timing within 4–5 min window",
              "Files named and organized for submission"
            ]
          }
        ],
        materials: [
          "PeerCritiqueForm and rubric reference",
          "Test scenario worksheet",
          "Audit panel checklist",
          "Timing tools"
        ]
      },
      {
        day: 10,
        title: "PBL Milestone 3: Presentations + Peer Review",
        focus: "Deliver final model and story; collect rubric‑aligned peer feedback; reflect",
        duration: "45 minutes",
        activities: [
          {
            name: "Presentation Block",
            duration: "40 minutes",
            description: "5 min setup; 6 groups × ~5 min; 5 min wrap",
            details: [
              "Presentations target 4–5 minutes plus brief Q&A",
              "Audience uses PeerCritiqueForm aligned to standard rubric",
              "Emphasis on accuracy, clarity, and decision impact"
            ]
          },
          {
            name: "Reflection & Submit",
            duration: "5 minutes",
            description: "Submit files and reflect on learning",
            details: [
              "Submit final workbook, slides, and collected peer reviews",
              "Write short reflection focusing on CAP and next improvements"
            ]
          }
        ],
        materials: [
          "Rubric reference and PeerCritiqueForm",
          "Submission checklist",
          "Reflection prompts"
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
        "Daily Progress Checks: Quick validation of data cleaning and analysis steps",
        "Peer Review Sessions: Structured feedback using quality checklists",
        "Statistical Accuracy Checks: Verification of calculations and model assumptions",
        "Business Logic Validation: Ensure statistical findings align with operational realities",
        "Presentation Rehearsals: Practice sessions with targeted feedback for improvement"
      ]
    },
    {
      category: "feedback", 
      title: "Feedback Strategies",
      strategies: [
        "Specific & Technical: \"Your R-squared of 0.45 suggests moderate predictive power - consider additional variables\"",
        "Business-Focused: \"Recommendations must address the 3% waste reduction target while maintaining profitability\"",
        "Timely & Actionable: Feedback within 24 hours with clear improvement steps",
        "Multi-Source: Statistical accuracy feedback from instructor, business relevance from peers and stakeholders"
      ]
    }
  ],

  // Differentiation
  differentiation: [
    {
      audience: "struggling",
      title: "For Struggling Students", 
      strategies: [
        "Guided Analysis Templates: Step-by-step worksheets for statistical calculations",
        "Simplified Datasets: Smaller, cleaner data samples for initial practice",
        "Visual Learning Supports: Screencasts demonstrating Analysis ToolPak procedures",
        "Peer Mentoring: Partner with students strong in statistical analysis",
        "Alternative Presentations: Poster session format instead of elevator pitch"
      ]
    },
    {
      audience: "advanced",
      title: "For Advanced Students",
      strategies: [
        "Multiple Regression Models: Explore relationships between multiple variables",
        "Seasonal Trend Analysis: Investigate more complex time-based patterns",
        "Statistical Significance Testing: Apply t-tests and confidence intervals",
        "Advanced Visualization: Create interactive dashboards or animated charts",
        "Consulting Role: Support other teams while completing their own analysis"
      ]
    },
    {
      audience: "ell",
      title: "For English Language Learners",
      strategies: [
        "Statistical Vocabulary Support: Bilingual glossary of key terms with examples",
        "Visual Communication Emphasis: Focus on charts and infographics over verbal presentations",
        "Collaborative Team Roles: Pair with native speakers for presentation support",
        "Template-Based Writing: Structured formats for analysis documentation and reflection"
      ]
    }
  ],

  // Resources
  resources: [
    {
      category: "technology",
      title: "Technology Requirements",
      items: [
        { name: "Hardware: 1:1 computers with Excel 365 or 2019+ including Analysis ToolPak" },
        { name: "Software: Data visualization tools (Excel charts, optional: Canva for infographics)" },
        { name: "Data Access: Two years of anonymized weekend POS data from campus café" },
        { name: "Presentation: Projector/screen for stakeholder presentations" },
        { name: "Documentation: Digital portfolio platform for analysis archiving" }
      ]
    },
    {
      category: "instructional",
      title: "Instructional Materials", 
      items: [
        { name: "Analysis ToolPak Quick Reference Guide", link: "../excel-instruction/analysis-toolpak-guide.pdf" },
        { name: "Data Cleaning Cheat Sheet", link: "../excel-instruction/data-cleaning-checklist.pdf" },
        { name: "Statistical Analysis Rubric", link: "../assessment-rubrics/statistical-analysis-rubric.html" },
        { name: "Professional Infographic Templates", link: "../design-resources/infographic-templates.zip" },
        { name: "Stakeholder Presentation Guidelines", link: "../presentation-resources/business-presentation-standards.pdf" }
      ]
    },
    {
      category: "external",
      title: "External Resources",
      items: [
        { name: "Campus Café Partnership: Manager and student staff as authentic stakeholders" },
        { name: "Business Mentors: Local restaurant managers and data analysts" },
        { name: "Industry Examples: Anonymized case studies from regional food service chains" },
        { name: "Professional Development: Local SCORE mentors with statistical analysis experience" }
      ]
    }
  ],

  // Reflection
  reflection: {
    questions: [
      "Did students demonstrate mastery of descriptive statistics and outlier analysis techniques?",
      "Were forecasting models accurate enough to support realistic business recommendations?",
      "How effectively did infographic presentations communicate statistical insights to stakeholders?",
      "Which differentiation strategies were most effective for supporting diverse learners?",
      "How can we strengthen the connection between statistical analysis and business decision-making?"
    ],
    dataCollection: [
      "Student Performance: Analysis of milestone assessments and final presentation quality",
      "Stakeholder Feedback: Café manager and staff evaluation of presentation effectiveness",
      "Learning Reflection: Student self-assessment of statistical skill development",
      "Engagement Metrics: Participation levels and peer collaboration effectiveness",
      "Implementation Results: Actual outcomes from weekend trial of student recommendations"
    ],
    nextUnitPrep: [
      "Archive exemplary statistical analyses and infographics for future reference",
      "Document common Analysis ToolPak errors and create targeted remediation resources",
      "Identify students needing additional statistical foundation support for future units",
      "Prepare transition materials connecting café operations analysis to payroll system challenges in Unit 5"
    ]
  }
}
