import { UnitData } from "@/types/unit"

export const unit04Data: UnitData = {
  id: "Unit 4",
  title: "Data-Driven Café",
  duration: "2 weeks",
  difficulty: "Intermediate",
  description: "Given two years of POS data, what inventory and staffing plan will maximize weekend profits without raising waste above 3%?",
  
  drivingQuestion: {
    question: "Given two years of POS data, what inventory and staffing plan will maximize weekend profits without raising waste above 3%?",
    context: "Work with real café POS data to create data-driven recommendations for weekend operations optimization.",
    scenario: "Café manager presents two years of anonymized weekend POS data and challenges with overstock and understaffing."
  },
  
  objectives: {
    content: [
      "Compute and interpret descriptive statistics (mean, median, standard deviation, z-scores)",
      "Identify and handle outliers in raw data",
      "Build and evaluate a simple linear regression forecast model"
    ],
    skills: [
      "Excel Analysis ToolPak: Histograms, Descriptive Statistics, Regression",
      "Data cleaning: Text-to-Columns, TRIM, Duplicate Removal, Filters",
      "Data visualization: Histograms, Box-Plots, Scatterplots"
    ],
    deliverables: [
      "Clean dataset with outliers identified and handled",
      "Statistical analysis using descriptive statistics",
      "Linear regression forecast model",
      "Infographic poster with recommendations",
      "90-second elevator pitch to café management"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "Café Operations Optimization Plan",
      description: "Create a comprehensive plan using statistical analysis to optimize weekend café operations for maximum profit while maintaining waste below 3%.",
      context: "Present your data-driven recommendations to café management with supporting statistical evidence.",
      requirements: [
        "Statistical analysis of POS data with proper outlier treatment",
        "Linear regression model for demand forecasting",
        "Professional infographic summarizing recommendations",
        "90-second elevator pitch demonstrating business impact",
        "Feasible inventory and staffing recommendations"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 3,
        title: "Clean Data & Flag Outliers",
        description: "Complete data cleaning process and identify statistical outliers",
        criteria: [
          "Raw CSV data properly cleaned using Excel tools",
          "Outliers identified using z-score analysis",
          "Descriptive statistics computed using Analysis ToolPak",
          "Data quality issues documented and resolved"
        ]
      },
      {
        id: "milestone2",
        day: 7,
        title: "Complete Forecast Model & Visuals",
        description: "Build functional regression model with supporting visualizations",
        criteria: [
          "Linear regression model using FORECAST.LINEAR or Analysis ToolPak",
          "Model accuracy evaluated and documented",
          "Cost-benefit analysis across multiple scenarios",
          "Professional charts and graphs supporting findings"
        ]
      },
      {
        id: "milestone3",
        day: 10,
        title: "Deliver Plan & Simulate Next Weekend",
        description: "Present final recommendations and validate with real-world simulation",
        criteria: [
          "90-second pitch delivered to café management panel",
          "Infographic poster clearly communicates key findings",
          "Recommendations tested against weekend simulation data",
          "Business impact quantified and presented professionally"
        ]
      }
    ],
    rubric: [
      {
        name: "Analytical Depth",
        weight: "45%",
        exemplary: "Accurate statistics, correct outlier treatment, sound forecast model with clear methodology",
        proficient: "Generally accurate analysis with minor statistical errors, adequate forecasting approach",
        developing: "Multiple statistical errors, unclear methodology, weak forecasting approach"
      },
      {
        name: "Realism of Plan",
        weight: "25%",
        exemplary: "Feasible order/staffing recommendations, waste ≤ 3%, clear implementation strategy",
        proficient: "Generally feasible recommendations, waste slightly above 3%, basic implementation plan",
        developing: "Unrealistic recommendations, high waste projections, unclear implementation"
      },
      {
        name: "Infographic Quality",
        weight: "15%",
        exemplary: "Clear visuals, effective storytelling, professional design coherence, compelling narrative",
        proficient: "Good visual design, clear communication, adequate professional appearance",
        developing: "Poor visual design, unclear communication, unprofessional appearance"
      },
      {
        name: "Reflection & Revision",
        weight: "15%",
        exemplary: "Thoughtful analysis of prediction vs. reality, actionable revisions, clear learning insights",
        proficient: "Basic comparison of predictions to results, some revision based on feedback",
        developing: "Minimal reflection, limited revision, unclear learning outcomes"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 1,
        title: "Data Cleaning & Exploration",
        description: "Master data cleaning techniques and exploratory statistical analysis",
        days: [
          {
            day: 1,
            focus: "Launch & Explore",
            activities: [
              "Entry Event & team formation",
              "Virtual field trip to campus café",
              "Scenario brief and dataset walkthrough"
            ],
            resources: [
              "Raw POS CSV",
              "Café case brief"
            ]
          },
          {
            day: 2,
            focus: "Skill Introduction",
            activities: [
              "Demo: cleaning CSV (Text-to-Columns, TRIM, remove duplicates)",
              "Guided practice with sample data"
            ],
            resources: [
              "Cleaning cheat sheet"
            ]
          },
          {
            day: 3,
            focus: "Application Practice",
            activities: [
              "Identify outliers using z-scores",
              "Compute mean, median, σ with Analysis ToolPak"
            ],
            resources: [
              "Analysis ToolPak quick guide"
            ],
            milestone: "Clean data & flag outliers"
          },
          {
            day: 4,
            focus: "Feedback & Iteration",
            activities: [
              "Gallery walk of cleaned datasets",
              "Peer critique using rubric",
              "Revise work based on feedback"
            ],
            resources: [
              "Peer critique form"
            ]
          },
          {
            day: 5,
            focus: "Reflection/Checkpoint",
            activities: [
              "Students create histogram & box-plot",
              "Oral check-in on statistical findings"
            ],
            resources: [
              "Histogram template"
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "Forecasting & Recommendations",
        description: "Build predictive models and develop business recommendations",
        days: [
          {
            day: 6,
            focus: "New Skill Focus",
            activities: [
              "Teach regression forecasting (FORECAST.LINEAR / Analysis ToolPak)",
              "Modeling demo with sample data"
            ],
            resources: [
              "Regression guide"
            ]
          },
          {
            day: 7,
            focus: "Model Completion",
            activities: [
              "Build demand forecast model",
              "Simulate cost savings across scenarios"
            ],
            resources: [
              "Forecast template"
            ],
            milestone: "Complete forecast model & visuals"
          },
          {
            day: 8,
            focus: "Presentation Prep",
            activities: [
              "Design infographic poster",
              "Storyboard 90-sec elevator pitch"
            ],
            resources: [
              "Infographic template",
              "Storyboard template"
            ]
          },
          {
            day: 9,
            focus: "Mock Panel & Revision",
            activities: [
              "Practice pitch to peers",
              "Collect feedback via rubric",
              "Final edits to poster & pitch"
            ],
            resources: [
              "Peer feedback rubric"
            ]
          },
          {
            day: 10,
            focus: "Public Presentation",
            activities: [
              "Deliver 90-sec pitch to café management",
              "Gather real-world feedback",
              "Simulate next weekend performance"
            ],
            resources: [
              "Pitch rubric"
            ],
            milestone: "Deliver plan & simulate next weekend"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "Beverage mix optimization",
      "Pastry inventory management", 
      "Staffing optimization"
    ],
    roles: [
      "Data Analyst",
      "Visualization Designer",
      "Operations Strategist"
    ],
    presentationFormats: [
      "Infographic poster",
      "90-second elevator pitch",
      "Interactive dashboard"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Basic Excel formulas and functions",
      "Understanding of mean, median, and basic statistics",
      "Familiarity with business operations concepts"
    ],
    technology: [
      "Microsoft Excel with Analysis ToolPak enabled",
      "Access to CSV data files",
      "Presentation software (PowerPoint, Canva, etc.)"
    ],
    resources: [
      {
        title: "POS Data Cleaning Excel Template",
        url: "/resources/unit04-cleaning-template.xlsx",
        type: "download"
      },
      {
        title: "Analysis ToolPak Quick-Start Guide",
        url: "/resources/toolpak-guide.pdf",
        type: "download"
      },
      {
        title: "Histogram & Box-Plot Worksheet",
        url: "/resources/histogram-worksheet.xlsx",
        type: "download"
      },
      {
        title: "Regression Forecasting Template",
        url: "/resources/regression-template.xlsx",
        type: "download"
      },
      {
        title: "Infographic Poster Template",
        url: "/resources/infographic-template.pptx",
        type: "download"
      },
      {
        title: "Peer Critique & Pitch Rubrics",
        url: "/resources/unit04-rubrics.pdf",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Step-by-step screencasts for data cleaning procedures",
      "Structured checklist for data preparation workflow",
      "Peer tutoring pairs for Excel skill development",
      "Template worksheets with guided formulas"
    ],
    advanced: [
      "Introduce seasonal trendline analysis for advanced modeling",
      "Explore multivariable regression techniques",
      "Challenge students to create interactive dashboards",
      "Mentor struggling teammates in statistical concepts"
    ],
    ell: [
      "Statistical terms glossary with visual definitions",
      "Key Excel functions available in multiple languages",
      "Partner with fluent English speakers for peer support",
      "Visual step-by-step guides for technical procedures"
    ]
  }
}