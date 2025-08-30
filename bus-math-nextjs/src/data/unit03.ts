import { UnitData } from "@/types/unit"

export const unit03Data: UnitData = {
  id: "Unit 3",
  title: "Three-Statement Storyboard",
  duration: "2 weeks",
  difficulty: "Advanced",
  description: "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?",
  
  drivingQuestion: {
    question: "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?",
    context: "Students will dissect real company financial statements and map narrative threads to specific line items, creating a comprehensive financial story for investors.",
    scenario: "Teams will use Unit 1 journal entries and trial balance data to construct complete financial statements and present to a mock investor panel."
  },
  
  objectives: {
    content: [
      "Construct an Income Statement from journal-entry data",
      "Link and reconcile Balance Sheet accounts, including Retained Earnings",
      "Prepare an Indirect Cash Flow Statement",
      "Interpret key ratios (Current Ratio, Return on Assets)",
      "Create integrated financial statement narratives"
    ],
    skills: [
      "Cross-sheet linking with INDEX/MATCH and named ranges",
      "Building dynamic dashboards with charts and sparklines",
      "Creating interactive KPI dashboard slices",
      "Advanced conditional formatting techniques",
      "Professional financial presentation design"
    ],
    deliverables: [
      "Complete three-statement model (Income, Balance, Cash Flow)",
      "Interactive KPI dashboard with relevant metrics",
      "Investor one-pager with financial narrative",
      "Mock investor presentation and Q&A",
      "Reconciled trial balance integration"
    ]
  },
  
  assessment: {
    performanceTask: {
      title: "Mock Investor Demo Day",
      description: "Present investor one-pager and interactive Excel workbook to mock investor panel as if seeking funding for your startup.",
      context: "This mirrors real investor pitches where integrated financial statements and KPI dashboards are essential for due diligence and investment decisions.",
      requirements: [
        "Complete three-statement model with accurate cross-references",
        "Interactive dashboard showing key financial metrics and ratios",
        "Professional one-pager summarizing financial narrative",
        "Live demonstration of Excel functionality and insights",
        "Q&A response addressing investor concerns about financial health"
      ]
    },
    milestones: [
      {
        id: "milestone1",
        day: 3,
        title: "Income Statement Built with Correct Formulas",
        description: "Complete income statement constructed from Unit 1 trial balance data",
        criteria: [
          "All revenue and expense accounts properly categorized",
          "Formulas correctly reference trial balance source data",
          "Net income calculation matches underlying journal entries",
          "Professional formatting with clear section headers"
        ]
      },
      {
        id: "milestone_automation",
        day: 5,
        title: "Advanced Automation: Three‑Statement Link Engine",
        description: "Implement robust three‑statement links with scenario control and validation checks",
        criteria: [
          "Use structured references (Tables) throughout with XLOOKUP/SUMIFS rollups",
          "Scenario switch (e.g., SWITCH/CHOOSE) correctly updates drivers and KPIs",
          "Validation flags surface issues (A=L+E, NI → RE, cash reconciliation, missing IDs)",
          "Model updates correctly with added rows and new accounts using the advanced dataset"
        ]
      },
      {
        id: "milestone2",
        day: 6,
        title: "Balance Sheet Linked and Retained Earnings Reconciled",
        description: "Integrated balance sheet with proper account linking and equity reconciliation",
        criteria: [
          "Assets, liabilities, and equity properly categorized and linked",
          "Retained earnings reconciles with income statement net income",
          "Balance sheet equation maintains perfect balance",
          "Cross-sheet references work correctly"
        ]
      },
      {
        id: "milestone3",
        day: 7,
        title: "Cash Flow Statement Built Correctly",
        description: "Indirect method cash flow statement with proper reconciliation",
        criteria: [
          "Operating activities properly adjust net income for non-cash items",
          "Investing and financing activities correctly categorized",
          "Cash flow statement reconciles with balance sheet cash changes",
          "Formulas properly link to income statement and balance sheet"
        ]
      }
    ],
    rubric: [
      {
        name: "Financial Accuracy",
        weight: "50%",
        exemplary: "All three statements mathematically accurate; perfect cross-references; reconciliation formulas work flawlessly",
        proficient: "Minor calculation errors (1-2); most cross-references correct; reconciliation mostly accurate",
        developing: "Multiple calculation errors; broken cross-references; statements don't reconcile"
      },
      {
        name: "Dashboard Insight",
        weight: "20%",
        exemplary: "KPIs clearly convey financial story; charts enhance understanding; metrics relevant to industry",
        proficient: "Basic KPIs present; some visual elements helpful; generally appropriate metrics",
        developing: "Limited or irrelevant KPIs; poor visual design; metrics don't support narrative"
      },
      {
        name: "Storytelling & Pitch Clarity",
        weight: "15%",
        exemplary: "Compelling narrative flow; visuals perfectly support key points; confident delivery",
        proficient: "Clear story structure; visuals generally support points; adequate delivery",
        developing: "Unclear narrative; visuals don't support story; hesitant delivery"
      },
      {
        name: "Responsiveness to Feedback",
        weight: "15%",
        exemplary: "Thoroughly incorporates all feedback; demonstrates learning and improvement",
        proficient: "Incorporates most feedback; shows some improvement from critiques",
        developing: "Limited incorporation of feedback; minimal improvement shown"
      }
    ]
  },
  
  learningSequence: {
    weeks: [
      {
        weekNumber: 5,
        title: "Statement Foundations",
        description: "Build foundational financial statements and establish cross-sheet linking",
        days: [
          {
            day: 1,
            focus: "Launch & Explore: Financial Statement Detective Work",
            activities: [
              "Entry event: examine a real 10-Q excerpt and map narrative to Income Statement/Balance Sheet/Cash Flow lines",
              "Connect TechStart Unit 1 journal entries and trial balance to the three‑statement ‘storyboard’"
            ],
            resources: [
              "10-Q excerpt",
              "Unit 1 workbook"
            ]
          },
          {
            day: 2,
            focus: "Skill Introduction: Income Statement Construction",
            activities: [
              "Direct instruction: build an Income Statement from trial balance data",
              "INDEX/MATCH and named ranges for dynamic cross‑sheet links"
            ],
            resources: [
              "Income Statement template",
              "Screencast link"
            ]
          },
          {
            day: 3,
            focus: "Application Practice: Income Statement Independent Build",
            activities: [
              "Independent build of the Income Statement using Unit 1 data",
              "Peer debugging and formula verification"
            ],
            resources: [
              "Unit 1 dataset",
              "Peer checklist"
            ],
            milestone: "Income Statement built with 100% correct formulas"
          },
          {
            day: 4,
            focus: "Excel Mastery: INDEX/MATCH & Named Ranges",
            activities: [
              "Hands‑on practice with INDEX/MATCH and named ranges for dynamic links",
              "Convert models to use structured references and improve maintainability"
            ],
            resources: [
              "INDEX/MATCH tutorial",
              "Named ranges quick guide"
            ]
          },
          {
            day: 5,
            focus: "Advanced Automation: Three‑Statement Link Engine",
            activities: [
              "Implement scenario switch, mapping, and SUMIFS rollups",
              "Add validation checks (A=L+E, NI → RE, cash reconciliation, missing IDs) and test with edge cases"
            ],
            resources: [
              "/resources/unit03-three-statement-advanced-practice.csv",
              "Automation checklist"
            ],
            milestone: "Advanced Automation: Three‑Statement Link Engine"
          }
        ]
      },
      {
        weekNumber: 6,
        title: "Linking & Visualizing",
        description: "Complete integrated statements and create investor-ready dashboards",
        days: [
          {
            day: 6,
            focus: "New Skill Focus",
            activities: [
              "Teach Balance Sheet linking & Retained Earnings reconciliation",
              "Hands-on practice with equity section calculations"
            ],
            resources: [
              "Balance Sheet template"
            ],
            milestone: "Balance Sheet linked and Retained Earnings reconciled"
          },
          {
            day: 7,
            focus: "Model Completion",
            activities: [
              "Build Indirect Cash Flow Statement with proper reconciliation",
              "Peer review of cash flow statement logic and formulas"
            ],
            resources: [
              "Cash Flow template",
              "Peer review form"
            ],
            milestone: "Cash Flow Statement built correctly"
          },
          {
            day: 8,
            focus: "Presentation Prep",
            activities: [
              "Design KPI dashboard: ROI, Current Ratio, cash-runway sparklines",
              "Create storyboard layout for investor presentation"
            ],
            resources: [
              "Dashboard guide",
              "Storyboard worksheet"
            ]
          },
          {
            day: 9,
            focus: "Mock Panel & Revisions",
            activities: [
              "Expert critique from local CPA on workbook & one-pager",
              "Revise metrics & visuals based on professional feedback"
            ],
            resources: [
              "CPA feedback form"
            ]
          },
          {
            day: 10,
            focus: "Public Presentation",
            activities: [
              "Demo Day: pitch one-pager & interactive workbook to mock investors",
              "Collect investor feedback for portfolio reflection"
            ],
            resources: [
              "Investor one-pager template"
            ],
            milestone: "Final deliverable"
          }
        ]
      }
    ]
  },
  
  studentChoices: {
    ventures: [
      "E-commerce platform",
      "Food truck business",
      "Tutoring service",
      "Technology startup",
      "Retail store concept"
    ],
    roles: [
      "Financial Analyst",
      "Dashboard Designer",
      "Presentation Lead",
      "Data Validator"
    ],
    presentationFormats: [
      "PDF one-pager with executive summary",
      "Interactive Excel dashboard with slicers",
      "Web-embedded dashboard presentation"
    ]
  },
  
  prerequisites: {
    knowledge: [
      "Understanding of basic accounting equation and journal entries",
      "Familiarity with trial balance preparation",
      "Knowledge of financial statement purposes and audiences",
      "Basic understanding of business performance metrics"
    ],
    technology: [
      "Advanced Excel skills including SUMIF and conditional formatting",
      "Experience with Excel Tables and structured references",
      "Understanding of INDEX/MATCH functions",
      "Basic charting and visualization capabilities"
    ],
    resources: [
      {
        title: "Unit 3 Financial Statement Templates",
        url: "/resources/unit03-templates.xlsx",
        type: "download"
      },
      {
        title: "Sample 10-Q Financial Statement Excerpt",
        url: "/resources/sample-10q.pdf",
        type: "download"
      },
      {
        title: "KPI Dashboard Examples",
        url: "/resources/kpi-examples.xlsx",
        type: "download"
      },
      {
        title: "Financial Ratio Quick Reference",
        url: "/resources/financial-ratios.pdf",
        type: "download"
      },
      {
        title: "Investor One-Pager Template",
        url: "/resources/investor-template.pptx",
        type: "download"
      },
      {
        title: "Unit 3 Advanced Practice Dataset",
        url: "/resources/unit03-three-statement-advanced-practice.csv",
        type: "download"
      }
    ]
  },
  
  differentiation: {
    struggling: [
      "Step-by-step formula guides for each financial statement section",
      "Video mini-tutorials for complex Excel functions like INDEX/MATCH",
      "Office hours for individual assistance with reconciliation challenges",
      "Simplified dashboard templates with pre-built chart structures"
    ],
    advanced: [
      "Advanced ratio analysis including DuPont framework and trend analysis",
      "Custom KPI formulas for industry-specific metrics",
      "VBA snippets to automate dashboard updates and data refresh",
      "Mentor role helping teammates with complex formula troubleshooting"
    ],
    ell: [
      "Financial terminology glossary with visual definitions",
      "Key accounting concepts explained in home language when possible",
      "Mixed-ability team pairings for peer support and explanation",
      "Visual aids and diagrams to support complex financial relationships"
    ]
  }
}
