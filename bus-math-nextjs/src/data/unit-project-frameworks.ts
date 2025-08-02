/**
 * PHASE 1 COMPLETE: SUMMATIVE ASSESSMENT DESIGN - UNIT PROJECT FRAMEWORKS
 * 
 * Authentic capstone projects for all 8 units with detailed rubrics, milestone checkpoints,
 * and self-contained assessment criteria. Each unit project is completable with classroom
 * resources only and provides authentic professional presentation opportunities.
 */

import { 
  UnitProjectFramework, 
  STANDARD_RUBRIC_CATEGORIES, 
  STANDARD_MILESTONE_TIMING, 
  AUTHENTIC_AUDIENCES 
} from "@/types/unit-project-framework"

// ========================================
// UNIT 1: SMART LEDGER LAUNCH
// ========================================
export const unit01ProjectFramework: UnitProjectFramework = {
  unitId: "unit01",
  unitTitle: "Smart Ledger Launch",
  
  performanceTask: {
    title: "Investor Pitch + Live Demo",
    scenario: "Present your self-auditing ledger to a panel of local finance professionals as if seeking angel investment for Sarah's TechStart Solutions.",
    audience: AUTHENTIC_AUDIENCES.INVESTORS,
    context: "This mirrors real investor due diligence where financial systems and controls are scrutinized before investment decisions. Demonstrates startup readiness and financial credibility.",
    deliverables: [
      "Complete self-auditing Excel ledger with error-checking system",
      "4-minute investor pitch with business-focused narrative",
      "Live Excel demonstration showing automated features",
      "Professional user documentation and system guide",
      "Q&A responses addressing accuracy and reliability concerns"
    ],
    requirements: [
      "All transactions correctly posted using debit/credit rules",
      "SUMIF formulas automatically calculate account totals", 
      "Conditional formatting catches and highlights errors",
      "Trial balance auto-check validates ledger accuracy",
      "Professional presentation appropriate for investor audience"
    ],
    duration: "4-minute pitch + 3-minute demo + Q&A"
  },
  
  milestones: [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: "Prototype Ledger with 10 Transactions",
      description: "Basic functional ledger demonstrating core accounting principles",
      focus: "Technical foundation and accounting accuracy",
      criteria: [
        "All transactions correctly posted using debit/credit rules",
        "Excel Table format with proper headers and structure", 
        "Basic SUMIF formulas calculating account totals",
        "Trial balance showing mathematical accuracy"
      ],
      deliverables: ["Functional Excel ledger", "Transaction dataset processed", "Basic SUMIF calculations"]
    },
    {
      id: "integration", 
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day,
      title: "Integrated \"Red Flag\" Rules",
      description: "Advanced error detection and visual warning system",
      focus: "Automated error-checking and professional formatting",
      criteria: [
        "Conditional formatting highlighting negative balances",
        "Visual indicators for missing or incomplete entries",
        "Automated alerts for debit/credit imbalances", 
        "Professional color scheme and formatting"
      ],
      deliverables: ["Error-detection system", "Visual formatting rules", "Professional appearance"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,
      title: "Trial Balance Auto-Check",
      description: "Complete validation system with automated accuracy verification", 
      focus: "Business-ready system with comprehensive validation",
      criteria: [
        "Formula validation: ABS(sum_debits - sum_credits) = 0",
        "Green/red indicator for balance status",
        "Error identification and correction guidance",
        "100% accuracy on provided test dataset"
      ],
      deliverables: ["Auto-validation system", "Error correction guide", "Tested system accuracy"]
    }
  ],
  
  rubric: [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: "45%",
      focus: "Accounting principles and Excel formula accuracy",
      exemplary: "All transactions correctly posted; trial balance reconciles perfectly; error-checking catches all planted errors",
      proficient: "Minor errors (1-2); trial balance reconciles with guidance; error-checking catches most issues", 
      developing: "Multiple errors; trial balance doesn't reconcile; limited error detection",
      businessStandard: "Professional accountants expect 100% accuracy in ledger systems"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: "25%", 
      focus: "System reliability and automated feature performance",
      exemplary: "All SUMIF formulas work perfectly; conditional formatting comprehensive; system handles edge cases",
      proficient: "SUMIF formulas mostly correct; basic conditional formatting working; handles normal cases",
      developing: "Some formulas broken; limited formatting; system fragile",
      businessStandard: "Business systems must be reliable and handle unexpected scenarios"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: "15%",
      focus: "Professional communication and user guidance",
      exemplary: "Clear instructions enable independent use; comprehensive comments; professional appearance",
      proficient: "Basic instructions present; some explanatory comments; neat appearance", 
      developing: "Minimal documentation; unclear instructions; poor presentation",
      businessStandard: "Professional systems require clear documentation for stakeholder confidence"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: "15%",
      focus: "Investor communication and business impact demonstration",
      exemplary: "Compelling narrative addresses real investor concerns; confident delivery; handles Q&A expertly",
      proficient: "Clear explanation of benefits; adequate delivery; answers most questions",
      developing: "Basic explanation; hesitant delivery; difficulty with questions", 
      businessStandard: "Entrepreneurs must communicate technical capabilities to non-technical investors"
    }
  ],
  
  studentChoices: {
    scenarios: [
      "TechStart Solutions (digital marketing consultancy)",
      "Local bakery website project", 
      "Pet grooming social media campaign",
      "Dental office SEO optimization"
    ],
    roles: [
      "Lead Financial Modeler (Excel expert)",
      "UX/Documentation Lead (user experience focus)",
      "Business Presenter (pitch and communication)",
      "Quality Auditor (testing and validation)"
    ],
    presentationFormats: [
      "Live pitch with Excel demonstration",
      "Recorded screencast with voice-over",
      "Interactive workshop format"
    ],
    extensions: [
      "Dynamic dropdown menus for account selection",
      "Basic VBA automation for repetitive tasks",
      "Integration with accounting software APIs"
    ]
  },
  
  resources: {
    templates: [
      {
        title: "Smart Ledger Excel Template",
        description: "Starter template with basic structure and sample data",
        type: "excel-template",
        required: true,
        classroomOnly: true
      },
      {
        title: "Investor Pitch Deck Template", 
        description: "Professional slide template for business presentations",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ],
    datasets: [
      {
        title: "TechStart Solutions Transaction Data",
        description: "Real-world transaction dataset for Sarah's business",
        type: "dataset", 
        required: true,
        classroomOnly: true
      },
      {
        title: "Error Testing Dataset",
        description: "Transactions with planted errors for system validation",
        type: "dataset",
        required: true,
        classroomOnly: true
      }
    ],
    guides: [
      {
        title: "SUMIF Formula Quick Reference",
        description: "Step-by-step guide for Excel aggregation functions",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "Conditional Formatting Business Rules",
        description: "Professional formatting standards for financial systems",
        type: "guide", 
        required: true,
        classroomOnly: true
      }
    ],
    external: [
      {
        title: "Local Angel Investor Panel",
        description: "PTA members with finance backgrounds serve as authentic audience",
        type: "external",
        required: false,
        classroomOnly: false
      }
    ]
  },
  
  validation: {
    peerReviewCriteria: [
      "Test the error-checking system with provided invalid data",
      "Verify all SUMIF formulas update when new transactions are added",
      "Check that trial balance calculation is mathematically correct",
      "Evaluate professional appearance and user-friendly design"
    ],
    selfAssessmentQuestions: [
      "Does my ledger catch all the planted errors in the test dataset?",
      "Would a non-expert user be able to operate my system independently?", 
      "Can I explain the business value of each automated feature?",
      "Am I prepared to answer investor questions about system reliability?"
    ],
    teacherCheckpoints: [
      "Verify accounting equation understanding through transaction analysis",
      "Test Excel formulas with edge cases and invalid data",
      "Review presentation content for business-appropriate language",
      "Confirm system meets professional accounting standards"
    ]
  }
}

// ========================================
// UNIT 2: MONTH-END WIZARD
// ========================================
export const unit02ProjectFramework: UnitProjectFramework = {
  unitId: "unit02", 
  unitTitle: "Month-End Wizard",
  
  performanceTask: {
    title: "Innovation Fair Demo: Month-End Wizard v1.0",
    scenario: "Present your automated month-end closing system to Innovation Fair visitors, demonstrating how it reduces closing time from days to hours while maintaining GAAP compliance.",
    audience: AUTHENTIC_AUDIENCES.INNOVATORS,
    context: "This mirrors real-world business scenarios where CFOs seek automation solutions to improve efficiency and reduce the risk of manual errors in critical financial processes.",
    deliverables: [
      "Interactive Excel Month-End Wizard with macro automation",
      "Live demonstration showing time savings achieved (target: under 2 hours)",
      "Professional presentation to diverse audience explaining business impact",
      "User-testing feedback collection and analysis",
      "Documentation proving GAAP compliance maintained throughout automation"
    ],
    requirements: [
      "Macro system automatically processes adjusting and closing entries",
      "User-friendly button interface for non-expert operation",
      "Error-checking routines prevent invalid entries", 
      "Professional formatting with clear visual feedback",
      "System reduces month-end close time to under 2 hours"
    ],
    duration: "Live demo + visitor Q&A rotation"
  },
  
  milestones: [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: "Four Scenarios Mapped",
      description: "Core adjusting entry scenarios correctly identified and automated",
      focus: "GAAP compliance and accounting accuracy",
      criteria: [
        "All four adjusting-entry scenarios correctly identified and categorized",
        "Proper debit/credit mappings following GAAP principles", 
        "Clear documentation of accruals, deferrals, and depreciation entries",
        "Peer review validation using provided rubric"
      ],
      deliverables: ["Adjusting entry templates", "GAAP compliance documentation", "Scenario mapping"]
    },
    {
      id: "integration",
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day,
      title: "Macro Inserts Closing Entries", 
      description: "Functional automation system with macro-driven processing",
      focus: "Technical automation and system reliability",
      criteria: [
        "Macro successfully records closing entries for revenue and expense accounts",
        "Automated transfer to retained earnings account",
        "Error-checking routines prevent invalid entries",
        "Named ranges properly configured for dynamic updates"
      ],
      deliverables: ["Working macro system", "Automated closing process", "Error prevention system"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,
      title: "Time < 2 Hours & UI Button",
      description: "Complete professional system achieving efficiency targets",
      focus: "User experience and business impact demonstration", 
      criteria: [
        "Month-end close simulation completed in under 2 hours",
        "User-friendly button interface for macro execution",
        "Professional formatting and error-flag system implemented",
        "System handles edge cases and provides clear user feedback"
      ],
      deliverables: ["Professional user interface", "Efficiency documentation", "Complete system testing"]
    }
  ],
  
  rubric: [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: "40%",
      focus: "GAAP compliance and automated entry accuracy",
      exemplary: "All adjusting & closing entries comply with GAAP and balance perfectly; no errors in automation logic",
      proficient: "Most entries correct with minor issues; automation works for standard cases",
      developing: "Multiple errors in entries; automation unreliable or produces incorrect results",
      businessStandard: "Month-end processes must maintain perfect accuracy for auditing and compliance"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: "25%",
      focus: "Automation efficiency and time savings achieved",
      exemplary: "Automation reduces close time to under 2 hours; system handles all edge cases; professional UI",
      proficient: "Automation works reliably; achieves target time savings; basic user interface",
      developing: "Limited automation; doesn't achieve time targets; difficult to use interface",
      businessStandard: "CFOs expect automation to deliver measurable efficiency gains"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: "20%",
      focus: "User guidance and system explanation",
      exemplary: "Comprehensive user guide enables independent operation; clear macro documentation",
      proficient: "Basic instructions provided; most users can operate system with guidance",
      developing: "Minimal documentation; system difficult for others to use",
      businessStandard: "Business systems require clear documentation for knowledge transfer"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: "15%",
      focus: "Innovation communication and business impact",
      exemplary: "Compelling demonstration shows clear business value; engages diverse audience effectively",
      proficient: "Clear explanation of automation benefits; adequate audience engagement",
      developing: "Basic system demonstration; limited audience engagement",
      businessStandard: "Innovation presentations must clearly communicate ROI and business impact"
    }
  ],
  
  studentChoices: {
    scenarios: [
      "Small business month-end automation (retail/service)",
      "Startup financial close process optimization", 
      "Non-profit organization accounting automation",
      "Family business efficiency improvement"
    ],
    roles: [
      "Automation Developer (macro and VBA focus)",
      "Process Analyst (efficiency and workflow optimization)",
      "User Experience Designer (interface and usability)",
      "Quality Assurance Tester (validation and edge cases)"
    ],
    presentationFormats: [
      "Live Innovation Fair demonstration booth",
      "Interactive tutorial and visitor engagement",
      "Before/after comparison showcase"
    ],
    extensions: [
      "Advanced VBA programming with error handling",
      "Integration with external data sources",
      "Custom user forms for data input",
      "Advanced dashboard and reporting features"
    ]
  },
  
  resources: {
    templates: [
      {
        title: "Month-End Wizard Starter Workbook",
        description: "Excel template with basic structure and macro framework",
        type: "excel-template",
        required: true,
        classroomOnly: true
      },
      {
        title: "Innovation Fair Presentation Template",
        description: "Display materials and demonstration guide",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ],
    datasets: [
      {
        title: "Multi-Month Business Transaction Data",
        description: "Complete dataset for testing month-end automation",
        type: "dataset",
        required: true,
        classroomOnly: true
      },
      {
        title: "Adjusting Entry Scenarios Collection",
        description: "Common business situations requiring month-end adjustments",
        type: "dataset",
        required: true,
        classroomOnly: true
      }
    ],
    guides: [
      {
        title: "Excel Macro Recording Guide",
        description: "Step-by-step instructions for creating and editing macros",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "VBA Basics for Business Automation",
        description: "Introduction to Visual Basic for Excel automation",
        type: "guide",
        required: false,
        classroomOnly: true
      },
      {
        title: "User Interface Design Best Practices",
        description: "Creating user-friendly business applications",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ]
  },
  
  validation: {
    peerReviewCriteria: [
      "Test macro system with different data scenarios",
      "Verify time savings through timed close simulation",
      "Check user interface for ease of operation",
      "Validate GAAP compliance of all automated entries"
    ],
    selfAssessmentQuestions: [
      "Does my system consistently achieve the 2-hour target?",
      "Can users operate the system without my assistance?",
      "Do all automated entries comply with GAAP standards?",
      "Is my presentation clear to non-accounting audiences?"
    ],
    teacherCheckpoints: [
      "Review macro code for accounting accuracy",
      "Test system performance with various datasets",
      "Verify user interface meets usability standards",
      "Confirm presentation effectively communicates business value"
    ]
  }
}

// ========================================
// UNIT 3: THREE-STATEMENT STORYBOARD  
// ========================================
export const unit03ProjectFramework: UnitProjectFramework = {
  unitId: "unit03",
  unitTitle: "Three-Statement Storyboard",
  
  performanceTask: {
    title: "Mock Investor Demo Day",
    scenario: "Present integrated financial statements and KPI dashboard to mock investor panel as if seeking funding for your startup.",
    audience: AUTHENTIC_AUDIENCES.INVESTORS,
    context: "This mirrors real investor pitches where integrated financial statements and KPI dashboards are essential for due diligence and investment decisions.",
    deliverables: [
      "Complete three-statement model (Income, Balance Sheet, Cash Flow)",
      "Interactive KPI dashboard with key financial metrics and ratios",
      "Professional investor one-pager summarizing financial narrative",
      "Live Excel demonstration showing integrated functionality",
      "Q&A responses addressing investor concerns about financial health"
    ],
    requirements: [
      "All three statements properly linked with cross-references",
      "KPI dashboard automatically updates from statement data",
      "Financial ratios calculated and interpreted correctly",
      "Professional presentation appropriate for investor audience",
      "Clear narrative connecting operational activities to financial results"
    ],
    duration: "8-minute presentation + 4-minute Q&A"
  },
  
  milestones: [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: "Income Statement Built with Correct Formulas",
      description: "Complete income statement with accurate trial balance integration",
      focus: "Technical accuracy and formula correctness",
      criteria: [
        "All revenue and expense accounts properly categorized",
        "Formulas correctly reference trial balance source data", 
        "Net income calculation matches underlying journal entries",
        "Professional formatting with clear section headers"
      ],
      deliverables: ["Functional income statement", "Trial balance integration", "Formula accuracy verification"]
    },
    {
      id: "integration", 
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day,
      title: "Balance Sheet Linked and Retained Earnings Reconciled",
      description: "Integrated balance sheet with proper cross-statement linking",
      focus: "Integration accuracy and accounting equation balance",
      criteria: [
        "Assets, liabilities, and equity properly categorized and linked",
        "Retained earnings reconciles with income statement net income", 
        "Balance sheet equation maintains perfect balance",
        "Cross-sheet references work correctly"
      ],
      deliverables: ["Integrated balance sheet", "Cross-reference system", "Equation validation"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,  
      title: "Cash Flow Statement and KPI Dashboard Complete",
      description: "Complete three-statement integration with interactive dashboard",
      focus: "Professional presentation and business insight generation",
      criteria: [
        "Cash flow statement correctly shows operating, investing, financing activities",
        "KPI dashboard calculates and displays key financial ratios",
        "All statements integrate seamlessly with dynamic updates",
        "Professional formatting suitable for investor presentation"
      ],
      deliverables: ["Complete three-statement model", "KPI dashboard", "Professional formatting"]
    }
  ],
  
  rubric: [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: "40%",
      focus: "Financial statement accuracy and integration correctness",
      exemplary: "All statements mathematically perfect; cross-references work flawlessly; ratios calculated correctly",
      proficient: "Statements mostly accurate; minor integration issues; ratios generally correct",
      developing: "Multiple errors in statements; integration problems; ratio calculation errors",
      businessStandard: "Investors expect complete accuracy in financial statement presentation"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: "30%",
      focus: "Integration sophistication and dashboard functionality", 
      exemplary: "Seamless three-statement integration; dynamic KPI dashboard; sophisticated Excel features",
      proficient: "Good integration between statements; functional dashboard; appropriate Excel skills",
      developing: "Limited integration; basic dashboard; minimal Excel sophistication",
      businessStandard: "Professional financial models require sophisticated integration and analysis"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: "15%",
      focus: "Investor communication and financial narrative",
      exemplary: "Compelling investor one-pager; clear financial story; professional presentation materials",
      proficient: "Adequate investor materials; basic financial narrative; neat presentation",
      developing: "Minimal investor materials; unclear narrative; poor presentation quality",
      businessStandard: "Investors require clear, compelling financial narratives with supporting materials"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: "15%",
      focus: "Investor pitch effectiveness and financial insight communication",
      exemplary: "Compelling investment case; insightful financial analysis; expertly handles investor questions",
      proficient: "Clear investment presentation; adequate financial analysis; answers most questions", 
      developing: "Basic presentation; limited financial insight; difficulty with investor questions",
      businessStandard: "Successful fundraising requires compelling presentation of financial opportunity"
    }
  ],
  
  studentChoices: {
    scenarios: [
      "Tech startup seeking Series A funding",
      "Local restaurant chain expansion",
      "E-commerce business growth capital", 
      "Social impact venture funding"
    ],
    roles: [
      "Financial Analyst (statement integration and ratio analysis)",
      "Dashboard Designer (KPI visualization and user experience)",
      "Investment Presenter (pitch development and delivery)",
      "Due Diligence Specialist (accuracy verification and validation)"
    ],
    presentationFormats: [
      "Traditional investor pitch with slides and Excel demo",
      "Interactive dashboard presentation",
      "Financial story-telling format"
    ],
    extensions: [
      "Advanced financial ratio analysis and benchmarking",
      "Scenario modeling and sensitivity analysis",
      "Professional dashboard design with advanced charts",
      "Industry-specific KPI development"
    ]
  },
  
  resources: {
    templates: [
      {
        title: "Three-Statement Integration Template",
        description: "Excel workbook with structured framework for statement linking",
        type: "excel-template",
        required: true,
        classroomOnly: true
      },
      {
        title: "KPI Dashboard Template",
        description: "Professional dashboard layout with ratio calculations",
        type: "excel-template", 
        required: true,
        classroomOnly: true
      },
      {
        title: "Investor One-Pager Template",
        description: "Professional single-page financial summary format",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ],
    datasets: [
      {
        title: "Multi-Period Financial Data",
        description: "Complete trial balance and transaction data for multiple periods",
        type: "dataset",
        required: true,
        classroomOnly: true
      },
      {
        title: "Industry Benchmark Data",
        description: "Comparative financial ratios for context and analysis",
        type: "dataset",
        required: false,
        classroomOnly: true
      }
    ],
    guides: [
      {
        title: "INDEX/MATCH Advanced Reference Guide",
        description: "Sophisticated Excel lookup functions for statement integration",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "Financial Ratio Analysis Guide",
        description: "Business interpretation of key financial ratios",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "Investor Presentation Best Practices",
        description: "How to present financial information to investors effectively",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ]
  },
  
  validation: {
    peerReviewCriteria: [
      "Verify mathematical accuracy of all statement integrations",
      "Test dynamic updating when source data changes",
      "Check KPI calculations against manual computations",
      "Evaluate investor materials for clarity and professionalism"
    ],
    selfAssessmentQuestions: [
      "Do all my financial statements balance and integrate correctly?",
      "Can I explain the business story my financial data tells?",
      "Would an investor find my presentation compelling and trustworthy?",
      "Do my KPIs provide meaningful insights into business performance?"
    ],
    teacherCheckpoints: [
      "Verify technical accuracy of all statement integrations",
      "Review financial ratio calculations and interpretations",
      "Assess presentation content for investment readiness",
      "Confirm professional standards in documentation and delivery"
    ]
  }
}

// ========================================
// UNIT 4: DATA-DRIVEN CAFÉ
// ========================================
export const unit04ProjectFramework: UnitProjectFramework = {
  unitId: "unit04",
  unitTitle: "Data-Driven Café",
  
  performanceTask: {
    title: "Café Operations Optimization Plan Presentation",
    scenario: "Present data-driven recommendations to café stakeholders (owner, manager, investors) showing how statistical analysis can optimize weekend operations and increase profitability.",
    audience: AUTHENTIC_AUDIENCES.STAKEHOLDERS,
    context: "This mirrors real business analytics consulting where data scientists present actionable insights to improve operational efficiency and financial performance.",
    deliverables: [
      "Statistical analysis of POS data identifying patterns and outliers",
      "Forecasting model predicting weekend demand and optimal staffing",
      "Professional infographic poster summarizing key insights and recommendations",
      "Live demonstration of Excel Analysis ToolPak statistical functions",
      "Business recommendation memo with specific action items and ROI projections"
    ],
    requirements: [
      "Clean dataset with outliers properly identified and flagged",
      "Statistical analysis using histogram, regression, and forecasting tools",
      "Professional visualization of data patterns and trends",
      "Business-focused recommendations with quantified impact",
      "Presentation appropriate for non-technical business audience"
    ],
    duration: "10-minute presentation + 5-minute Q&A"
  },
  
  milestones: [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: "Clean Data & Flag Outliers",
      description: "Complete data cleaning with statistical outlier identification",
      focus: "Data quality and statistical foundation",
      criteria: [
        "POS dataset cleaned and validated for analysis",
        "Outliers identified using statistical methods (IQR, z-score)",
        "Data visualization showing patterns and anomalies",
        "Documentation of cleaning decisions and rationale"
      ],
      deliverables: ["Cleaned dataset", "Outlier analysis", "Data quality report"]
    },
    {
      id: "integration",
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day,
      title: "Complete Forecast Model & Visuals",
      description: "Statistical forecasting model with professional visualization",
      focus: "Statistical analysis and business insight generation",
      criteria: [
        "Regression model predicting weekend demand patterns",
        "Histogram and statistical analysis of key variables",
        "Professional charts and graphs showing business insights",
        "Model validation and accuracy assessment"
      ],
      deliverables: ["Forecasting model", "Statistical analysis", "Professional visualizations"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,
      title: "Deliver Plan & Simulate Next Weekend", 
      description: "Complete business recommendations with implementation simulation",
      focus: "Business impact and actionable recommendations",
      criteria: [
        "Professional business memo with specific recommendations",
        "Infographic poster suitable for stakeholder presentation",
        "Simulation showing impact of recommended changes",
        "ROI analysis and implementation timeline"
      ],
      deliverables: ["Business recommendation plan", "Infographic poster", "ROI simulation"]
    }
  ],
  
  rubric: [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: "35%",
      focus: "Statistical analysis accuracy and methodology",
      exemplary: "All statistical analysis mathematically correct; appropriate methods chosen; outliers properly handled",
      proficient: "Statistical analysis mostly correct; reasonable method choices; minor technical issues",
      developing: "Multiple statistical errors; inappropriate methods; poor outlier handling",
      businessStandard: "Data analysis decisions must be statistically sound to support business strategy"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: "25%",
      focus: "Excel Analysis ToolPak proficiency and forecasting effectiveness",
      exemplary: "Sophisticated use of Analysis ToolPak; accurate forecasting model; advanced Excel features",
      proficient: "Competent use of statistical tools; functional forecasting; appropriate Excel skills",
      developing: "Limited statistical tool usage; weak forecasting; basic Excel functionality",
      businessStandard: "Professional analysts must leverage advanced tools for competitive advantage"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: "20%",
      focus: "Business communication and professional presentation materials",
      exemplary: "Compelling infographic and memo; clear business language; professional design standards",
      proficient: "Good business communication; adequate visual design; appropriate language",
      developing: "Poor business communication; weak visual design; inappropriate language",
      businessStandard: "Stakeholders require clear, actionable insights in professional formats"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: "20%",
      focus: "Stakeholder communication and business impact demonstration",
      exemplary: "Compelling business case; actionable recommendations; expertly handles stakeholder questions",
      proficient: "Clear business presentation; reasonable recommendations; answers most questions",
      developing: "Weak business case; vague recommendations; difficulty with stakeholder questions",
      businessStandard: "Successful consulting requires clear communication of data-driven business value"
    }
  ],
  
  studentChoices: {
    scenarios: [
      "Coffee shop weekend optimization",
      "Restaurant lunch rush analysis",
      "Retail store seasonal planning",
      "Food truck location and timing optimization"
    ],
    roles: [
      "Data Analyst (statistical analysis and modeling)",
      "Business Consultant (recommendations and strategy)",
      "Visualization Designer (infographics and presentation materials)",
      "Operations Specialist (implementation and process improvement)"
    ],
    presentationFormats: [
      "Executive briefing presentation",
      "Infographic poster session",
      "Interactive dashboard demonstration"
    ],
    extensions: [
      "Advanced regression analysis and multiple variables",
      "Time series forecasting with seasonal adjustments",
      "Customer segmentation analysis",
      "A/B testing design and analysis"
    ]
  },
  
  resources: {
    templates: [
      {
        title: "Statistical Analysis Excel Template",
        description: "Pre-configured workbook with Analysis ToolPak setup",
        type: "excel-template",
        required: true,
        classroomOnly: true
      },
      {
        title: "Business Infographic Template",
        description: "Professional poster template for data visualization",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ],
    datasets: [
      {
        title: "Café POS Transaction Data",
        description: "Real-world point-of-sale data with patterns and outliers",
        type: "dataset",
        required: true,
        classroomOnly: true
      },
      {
        title: "Industry Benchmark Data",
        description: "Comparative performance metrics for context",
        type: "dataset",
        required: false,
        classroomOnly: true
      }
    ],
    guides: [
      {
        title: "Excel Analysis ToolPak Guide",
        description: "Comprehensive guide to statistical functions and tools",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "Business Statistics Interpretation",
        description: "How to translate statistical results into business insights",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ]
  },
  
  validation: {
    peerReviewCriteria: [
      "Verify statistical calculations using alternative methods",
      "Test forecasting model accuracy with holdout data",
      "Evaluate business recommendations for feasibility",
      "Check infographic clarity and professional appearance"
    ],
    selfAssessmentQuestions: [
      "Are my statistical methods appropriate for the business question?",
      "Do my recommendations have clear, quantifiable business impact?",
      "Would a café owner find my analysis actionable and valuable?",
      "Is my presentation accessible to non-technical stakeholders?"
    ],
    teacherCheckpoints: [
      "Review statistical methodology and calculation accuracy",
      "Assess business insight quality and actionability",
      "Verify professional presentation standards",
      "Confirm appropriate use of Analysis ToolPak functions"
    ]
  }
}

// ========================================
// UNIT 5: PAYDAY SIMULATOR
// ========================================
export const unit05ProjectFramework: UnitProjectFramework = {
  unitId: "unit05",
  unitTitle: "PayDay Simulator",
  
  performanceTask: {
    title: "PayDay Simulator Tutorial Presentation",
    scenario: "Create and present an interactive PayDay Simulator tutorial for local small business owners, demonstrating automated payroll processing with tax calculations and cash flow impact analysis.",
    audience: AUTHENTIC_AUDIENCES.STAKEHOLDERS,
    context: "This mirrors real-world scenarios where small businesses need reliable, accurate payroll systems to manage employee compensation while maintaining cash flow and tax compliance.",
    deliverables: [
      "Complete PayDay Simulator with automated tax calculations",
      "Interactive tutorial suitable for business owner training",
      "Cash flow impact analysis showing business implications", 
      "Multi-language pay stub generation for diverse workforce",
      "Bank reconciliation system integrating payroll with business accounts"
    ],
    requirements: [
      "Accurate federal and state tax calculations using current tax tables",
      "Automated generation of professional pay stubs",
      "Cash flow analysis showing business impact of payroll decisions",
      "User-friendly interface suitable for non-expert business owners",
      "System handles multiple pay periods and employee scenarios"
    ],
    duration: "Tutorial presentation + hands-on workshop"
  },
  
  milestones: [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: "Prototype Calculator",
      description: "Basic payroll calculator with core tax calculations",
      focus: "Tax calculation accuracy and payroll fundamentals",
      criteria: [
        "Federal income tax withholding calculated correctly",
        "FICA taxes (Social Security and Medicare) computed accurately",
        "State tax calculations implemented properly",
        "Net pay calculations verified against manual computations"
      ],
      deliverables: ["Payroll calculator prototype", "Tax calculation verification", "Formula accuracy testing"]
    },
    {
      id: "integration",
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day,
      title: "Register + Stubs",
      description: "Payroll register system with professional pay stub generation",
      focus: "Professional documentation and multi-employee processing",
      criteria: [
        "Payroll register tracks multiple employees and pay periods",
        "Professional pay stubs generated automatically",
        "Year-to-date calculations maintained accurately",
        "Multi-language support for pay stub generation"
      ],
      deliverables: ["Payroll register system", "Automated pay stub generation", "Multi-language capability"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,
      title: "Reconciliation Report",
      description: "Complete system with bank reconciliation and cash flow analysis",
      focus: "Business integration and cash flow management",
      criteria: [
        "Bank reconciliation system integrates payroll with business accounts",
        "Cash flow analysis shows business impact of payroll decisions",
        "System generates reports suitable for business management",
        "User interface designed for small business owner operation"
      ],
      deliverables: ["Bank reconciliation system", "Cash flow analysis", "Business management reports"]
    }
  ],
  
  rubric: [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: "45%",
      focus: "Tax calculation accuracy and payroll compliance",
      exemplary: "All tax calculations perfectly accurate; complies with current tax law; handles edge cases correctly",
      proficient: "Tax calculations mostly accurate; minor compliance issues; handles standard cases well",
      developing: "Multiple tax calculation errors; compliance problems; limited functionality",
      businessStandard: "Payroll errors can result in penalties and legal issues for businesses"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: "25%",
      focus: "System integration and automation effectiveness",
      exemplary: "Seamless integration between payroll, banking, and reporting; sophisticated automation",
      proficient: "Good system integration; functional automation; appropriate feature set",
      developing: "Limited integration; basic automation; minimal feature functionality",
      businessStandard: "Payroll systems must integrate with overall business financial management"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: "15%",
      focus: "Tutorial quality and business owner usability",
      exemplary: "Excellent tutorial enables independent operation; comprehensive user guidance",
      proficient: "Good tutorial with adequate guidance; most users can operate system",
      developing: "Poor tutorial; system difficult for business owners to use independently",
      businessStandard: "Small business tools must be usable without extensive technical support"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: "15%",
      focus: "Training delivery and business impact communication",
      exemplary: "Compelling training presentation; clear business value; expertly handles owner questions",
      proficient: "Clear training delivery; adequate business value explanation; answers most questions",
      developing: "Weak training presentation; unclear business value; difficulty with owner questions",
      businessStandard: "Successful business tools require effective training and support"
    }
  ],
  
  studentChoices: {
    scenarios: [
      "Restaurant chain payroll management",
      "Construction company with hourly and salary workers",
      "Retail business with seasonal staff variations",
      "Service business with commission-based compensation"
    ],
    roles: [
      "Payroll Systems Developer (calculations and automation)",
      "Compliance Specialist (tax law and regulatory requirements)",
      "User Experience Designer (business owner interface)",
      "Training Specialist (tutorial development and delivery)"
    ],
    presentationFormats: [
      "Interactive workshop with live system demonstration",
      "Video tutorial with screencast and voice-over",
      "Step-by-step training manual with guided practice"
    ],
    extensions: [
      "Advanced tax scenarios (contractors, benefits, bonuses)",
      "Integration with time-tracking systems",
      "Automated tax filing and reporting features",
      "Multi-state tax calculations for distributed workforce"
    ]
  },
  
  resources: {
    templates: [
      {
        title: "PayDay Simulator Excel Template",
        description: "Comprehensive payroll system framework with tax tables",
        type: "excel-template",
        required: true,
        classroomOnly: true
      },
      {
        title: "Multi-Language Pay Stub Templates",
        description: "Professional pay stub formats in multiple languages",
        type: "excel-template",
        required: true,
        classroomOnly: true
      }
    ],
    datasets: [
      {
        title: "Current Tax Tables and Rates",
        description: "Federal and state tax withholding tables for calculations",
        type: "dataset",
        required: true,
        classroomOnly: true
      },
      {
        title: "Sample Employee Data",
        description: "Diverse employee scenarios for testing system functionality",
        type: "dataset",
        required: true,
        classroomOnly: true
      }
    ],
    guides: [
      {
        title: "Payroll Tax Calculation Guide",
        description: "Comprehensive guide to federal and state payroll tax requirements",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "Small Business Payroll Best Practices",
        description: "How to manage payroll effectively in small business contexts",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ]
  },
  
  validation: {
    peerReviewCriteria: [
      "Verify tax calculations against current tax tables",
      "Test system with various employee scenarios",
      "Evaluate tutorial effectiveness with non-expert users",
      "Check pay stub accuracy and professional appearance"
    ],
    selfAssessmentQuestions: [
      "Do my tax calculations comply with current federal and state requirements?",
      "Can a small business owner operate my system independently?",
      "Does my system provide clear business value and cost savings?",
      "Is my tutorial clear and comprehensive for business owner training?"
    ],
    teacherCheckpoints: [
      "Verify payroll tax calculation accuracy and compliance",
      "Test system functionality with complex payroll scenarios",
      "Review tutorial quality and business owner usability",
      "Confirm professional standards in system design and documentation"
    ]
  }
}

// ========================================
// UNIT 6: PRICELAB CHALLENGE
// ========================================
export const unit06ProjectFramework: UnitProjectFramework = {
  unitId: "unit06",
  unitTitle: "PriceLab Challenge",
  
  performanceTask: {
    title: "Pricing Strategy Debate & Recommendation Presentation",
    scenario: "Present data-driven pricing strategy recommendations to company executives in a competitive debate format, defending your CVP analysis and pricing decisions against alternative strategies.",
    audience: AUTHENTIC_AUDIENCES.EXECUTIVES,
    context: "This mirrors real-world executive decision-making where pricing strategies must be defended with rigorous analysis, considering competitive positioning and financial impact.",
    deliverables: [
      "Comprehensive CVP model with scenario analysis and sensitivity testing",
      "Competitive pricing analysis with market positioning strategy",
      "Executive memo with specific pricing recommendations and rationale",
      "Live debate defending pricing strategy against alternatives",
      "What-if analysis demonstrating pricing decision impact on profitability"
    ],
    requirements: [
      "CVP model accurately calculates break-even and profit scenarios",
      "Competitive analysis based on comprehensive market research",
      "Pricing recommendations supported by quantitative analysis",
      "Executive presentation appropriate for C-suite audience",
      "Successful defense of strategy in competitive debate format"
    ],
    duration: "15-minute presentation + 10-minute debate defense"
  },
  
  milestones: [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: "Benchmark Competitor Pricing",
      description: "Comprehensive competitive analysis with market positioning",
      focus: "Market research and competitive intelligence",
      criteria: [
        "Competitor pricing data collected and analyzed systematically",
        "Market positioning strategy developed based on competitive analysis",
        "Value proposition clearly differentiated from competitors",
        "Pricing range established based on competitive landscape"
      ],
      deliverables: ["Competitive analysis report", "Market positioning strategy", "Pricing range recommendations"]
    },
    {
      id: "integration",
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day,
      title: "Build \"What-If\" CVP Model",
      description: "Dynamic CVP model with scenario analysis capabilities",
      focus: "Financial modeling and scenario analysis",
      criteria: [
        "CVP model accurately calculates break-even points and profit scenarios",
        "What-if analysis shows impact of different pricing strategies",
        "Sensitivity analysis identifies key variables affecting profitability",
        "Model handles multiple product lines and pricing scenarios"
      ],
      deliverables: ["Dynamic CVP model", "Scenario analysis system", "Sensitivity testing"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,
      title: "Draft Pricing Recommendation",
      description: "Executive-ready pricing strategy with comprehensive justification",
      focus: "Strategic recommendation and executive communication",
      criteria: [
        "Executive memo clearly articulates pricing strategy and rationale",
        "Recommendations supported by both competitive and financial analysis",
        "Implementation plan addresses practical business considerations",
        "Presentation materials appropriate for executive audience"
      ],
      deliverables: ["Executive pricing memo", "Implementation plan", "Executive presentation materials"]
    }
  ],
  
  rubric: [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: "35%",
      focus: "CVP analysis accuracy and financial modeling correctness",
      exemplary: "CVP calculations perfectly accurate; sophisticated financial modeling; comprehensive scenario analysis",
      proficient: "CVP analysis mostly correct; functional financial modeling; adequate scenario coverage",
      developing: "CVP calculation errors; limited financial modeling; insufficient scenario analysis",
      businessStandard: "Pricing strategies must be based on rigorous financial analysis to ensure profitability"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: "25%",
      focus: "Market analysis quality and strategic thinking",
      exemplary: "Comprehensive competitive analysis; sophisticated strategic thinking; innovative pricing approach",
      proficient: "Good competitive analysis; sound strategic reasoning; appropriate pricing approach",
      developing: "Limited competitive analysis; weak strategic thinking; simplistic pricing approach",
      businessStandard: "Successful pricing requires deep market understanding and strategic sophistication"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: "20%",
      focus: "Executive communication and recommendation quality",
      exemplary: "Compelling executive memo; clear strategic rationale; professional presentation materials",
      proficient: "Good executive communication; adequate strategic reasoning; appropriate materials",
      developing: "Poor executive communication; weak strategic rationale; unprofessional materials",
      businessStandard: "Executive decisions require clear, compelling strategic recommendations"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: "20%",
      focus: "Debate performance and strategic defense",
      exemplary: "Compelling debate performance; expertly defends strategy; handles challenges effectively",
      proficient: "Good debate presentation; adequately defends strategy; answers most challenges",
      developing: "Weak debate performance; poor strategy defense; difficulty with challenges",
      businessStandard: "Strategic recommendations must withstand rigorous executive scrutiny and debate"
    }
  ],
  
  studentChoices: {
    scenarios: [
      "Tech startup SaaS pricing strategy",
      "Restaurant menu pricing optimization",
      "Retail product line pricing strategy",
      "Service business competitive positioning"
    ],
    roles: [
      "Financial Analyst (CVP modeling and scenario analysis)",
      "Market Research Specialist (competitive analysis and positioning)",
      "Strategy Consultant (recommendation development and presentation)",
      "Debate Team Leader (strategy defense and executive communication)"
    ],
    presentationFormats: [
      "Executive briefing with Q&A defense",
      "Competitive debate tournament format",
      "Shark Tank-style pitch and challenge session"
    ],
    extensions: [
      "Advanced pricing models (psychological pricing, bundle pricing)",
      "Dynamic pricing strategies and algorithms",
      "International pricing and currency considerations",
      "Pricing optimization using advanced analytics"
    ]
  },
  
  resources: {
    templates: [
      {
        title: "CVP Analysis Excel Template",
        description: "Comprehensive cost-volume-profit modeling framework",
        type: "excel-template",
        required: true,
        classroomOnly: true
      },
      {
        title: "Executive Memo Template",
        description: "Professional format for strategic recommendations",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ],
    datasets: [
      {
        title: "Industry Pricing Benchmark Data",
        description: "Competitive pricing information across industries",
        type: "dataset",
        required: true,
        classroomOnly: true
      },
      {
        title: "Cost Structure Templates",
        description: "Fixed and variable cost frameworks for analysis",
        type: "dataset",
        required: true,
        classroomOnly: true
      }
    ],
    guides: [
      {
        title: "CVP Analysis Business Applications",
        description: "How to apply cost-volume-profit analysis in real business contexts",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "Competitive Analysis Methodology",
        description: "Systematic approach to market research and competitive intelligence",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ]
  },
  
  validation: {
    peerReviewCriteria: [
      "Verify CVP calculations and scenario analysis accuracy",
      "Evaluate competitive analysis comprehensiveness and accuracy",
      "Test pricing recommendations against different market scenarios",
      "Assess executive memo clarity and strategic reasoning"
    ],
    selfAssessmentQuestions: [
      "Do my pricing recommendations maximize profitability while remaining competitive?",
      "Can I defend my strategy against alternative pricing approaches?",
      "Is my analysis rigorous enough to support executive decision-making?",
      "Have I considered all relevant market and financial factors?"
    ],
    teacherCheckpoints: [
      "Review CVP model accuracy and scenario comprehensiveness",
      "Assess competitive analysis quality and market understanding",
      "Evaluate strategic reasoning and recommendation soundness",
      "Confirm executive presentation standards and debate readiness"
    ]
  }
}

// ========================================
// UNIT 7: ASSET & INVENTORY TRACKER
// ========================================
export const unit07ProjectFramework: UnitProjectFramework = {
  unitId: "unit07",
  unitTitle: "Asset & Inventory Tracker",
  
  performanceTask: {
    title: "Advisory Brief + Board Presentation",
    scenario: "Present comprehensive asset and inventory management recommendations to company board of directors, demonstrating advanced Excel modeling for depreciation methods and inventory valuation systems.",
    audience: AUTHENTIC_AUDIENCES.EXECUTIVES,
    context: "This mirrors real-world board presentations where financial advisors present complex asset management strategies requiring sophisticated modeling and clear business impact communication.",
    deliverables: [
      "Dynamic asset tracker with multiple depreciation method options",
      "Inventory valuation system comparing FIFO, LIFO, and weighted average methods",
      "Advisory brief analyzing financial statement impact of different methods",
      "Board presentation with clear recommendations and business rationale",
      "Excel model demonstrating advanced features (dynamic selections, scenario analysis)"
    ],
    requirements: [
      "Accurate implementation of SLN, DDB, and other depreciation methods",
      "Inventory system correctly calculates FIFO, LIFO, and weighted average costs",
      "Dynamic selection features allow users to compare methods easily",
      "Financial statement impact clearly analyzed and presented",
      "Professional board-level presentation with strategic recommendations"
    ],
    duration: "Board presentation + advisory brief discussion"
  },
  
  milestones: [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: "Basic Depreciation Schedule",
      description: "Core depreciation calculations for multiple methods",
      focus: "Technical accuracy in depreciation calculations",
      criteria: [
        "Straight-line depreciation calculated correctly for multiple assets",
        "Double-declining balance method implemented accurately",
        "Asset tracking system maintains proper records and schedules",
        "Depreciation formulas handle various asset types and useful lives"
      ],
      deliverables: ["Depreciation calculation system", "Asset tracking framework", "Method accuracy verification"]
    },
    {
      id: "integration",
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day,
      title: "Dynamic Selection Feature",
      description: "Advanced Excel features enabling method comparison",
      focus: "User interface sophistication and system integration",
      criteria: [
        "Dynamic dropdown selections allow easy method switching",
        "FIFO and LIFO inventory calculations implemented correctly",
        "Weighted average cost method calculated accurately",
        "System enables side-by-side comparison of different methods"
      ],
      deliverables: ["Dynamic selection interface", "Inventory valuation system", "Method comparison capability"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,
      title: "Model Construction & Analysis",
      description: "Complete advisory analysis with board-ready recommendations",
      focus: "Strategic analysis and board-level communication",
      criteria: [
        "Advisory brief analyzes financial statement impact of method choices",
        "Board presentation materials professional and strategically focused",
        "Recommendations supported by quantitative analysis and business rationale",
        "Excel model demonstrates sophisticated features appropriate for executive use"
      ],
      deliverables: ["Advisory brief", "Board presentation", "Executive-level Excel model"]
    }
  ],
  
  rubric: [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: "40%",
      focus: "Depreciation and inventory calculation accuracy",
      exemplary: "All depreciation and inventory calculations perfectly accurate; sophisticated method implementation",
      proficient: "Calculations mostly accurate; functional method implementation; minor technical issues",
      developing: "Multiple calculation errors; limited method implementation; significant technical problems",
      businessStandard: "Asset and inventory calculations must be precise for accurate financial reporting"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: "30%",
      focus: "Advanced Excel features and system sophistication",
      exemplary: "Sophisticated Excel model with advanced features; seamless dynamic selections; professional interface",
      proficient: "Good Excel functionality; functional dynamic features; appropriate interface design",
      developing: "Limited Excel sophistication; basic dynamic features; poor interface design",
      businessStandard: "Executive tools must demonstrate technical sophistication and ease of use"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: "15%",
      focus: "Advisory brief quality and strategic analysis",
      exemplary: "Comprehensive advisory brief with sophisticated strategic analysis; clear business implications",
      proficient: "Good advisory brief with adequate strategic analysis; clear business reasoning",
      developing: "Limited advisory brief with weak strategic analysis; unclear business implications",
      businessStandard: "Board advisors must provide clear, sophisticated strategic guidance"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: "15%",
      focus: "Board presentation effectiveness and executive communication",
      exemplary: "Compelling board presentation; expertly communicates complex concepts; handles board questions",
      proficient: "Good board presentation; adequately communicates concepts; answers most questions",
      developing: "Weak board presentation; poor concept communication; difficulty with board questions",
      businessStandard: "Board presentations must clearly communicate complex financial concepts to executives"
    }
  ],
  
  studentChoices: {
    scenarios: [
      "Manufacturing company asset optimization",
      "Retail chain inventory management strategy",
      "Technology company equipment depreciation planning",
      "Construction business asset and inventory tracking"
    ],
    roles: [
      "Financial Analyst (depreciation and inventory calculations)",
      "Systems Designer (Excel model development and interface)",
      "Strategic Advisor (business impact analysis and recommendations)",
      "Board Presenter (executive communication and presentation)"
    ],
    presentationFormats: [
      "Formal board presentation with Q&A",
      "Advisory briefing with interactive model demonstration",
      "Strategic planning session format"
    ],
    extensions: [
      "Advanced depreciation methods (MACRS, units of production)",
      "Inventory optimization and demand forecasting",
      "Asset lifecycle management and replacement analysis",
      "Integration with enterprise resource planning concepts"
    ]
  },
  
  resources: {
    templates: [
      {
        title: "Asset & Inventory Tracker Excel Template",
        description: "Comprehensive framework with depreciation and inventory calculations",
        type: "excel-template",
        required: true,
        classroomOnly: true
      },
      {
        title: "Advisory Brief Template",
        description: "Professional format for board-level strategic recommendations",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ],
    datasets: [
      {
        title: "Multi-Company Asset and Inventory Data",
        description: "Comprehensive datasets for testing various business scenarios",
        type: "dataset",
        required: true,
        classroomOnly: true
      },
      {
        title: "Industry Depreciation and Inventory Benchmarks",
        description: "Comparative data for strategic analysis and recommendations",
        type: "dataset",
        required: false,
        classroomOnly: true
      }
    ],
    guides: [
      {
        title: "Advanced Depreciation Methods Guide",
        description: "Comprehensive coverage of depreciation calculations and business applications",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "Inventory Valuation Business Impact Analysis",
        description: "How different inventory methods affect financial statements and business decisions",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ]
  },
  
  validation: {
    peerReviewCriteria: [
      "Verify accuracy of all depreciation method calculations",
      "Test inventory valuation calculations against manual computations",
      "Evaluate dynamic selection functionality and user experience",
      "Assess advisory brief strategic reasoning and board presentation quality"
    ],
    selfAssessmentQuestions: [
      "Do my depreciation and inventory calculations comply with accounting standards?",
      "Would a board of directors find my analysis and recommendations compelling?",
      "Does my Excel model demonstrate appropriate sophistication for executive use?",
      "Can I clearly explain the business impact of different method choices?"
    ],
    teacherCheckpoints: [
      "Review calculation accuracy for all depreciation and inventory methods",
      "Assess Excel model sophistication and dynamic functionality",
      "Evaluate strategic analysis quality and business reasoning",
      "Confirm board presentation standards and executive communication effectiveness"
    ]
  }
}

// ========================================
// UNIT 8: YEAR-1 STARTUP MODEL
// ========================================
export const unit08ProjectFramework: UnitProjectFramework = {
  unitId: "unit08",
  unitTitle: "Year-1 Startup Model",
  
  performanceTask: {
    title: "VC Pitch + Live Demo",
    scenario: "Present integrated financial model to venture capital panel, demonstrating comprehensive Year-1 startup projections with scenario analysis for investment decision-making.",
    audience: AUTHENTIC_AUDIENCES.INVESTORS,
    context: "This mirrors real VC pitches where entrepreneurs must present sophisticated financial models demonstrating business viability, growth potential, and risk management through scenario analysis.",
    deliverables: [
      "Complete integrated 3-statement financial forecast (Income, Balance Sheet, Cash Flow)",
      "Dynamic scenario analysis model (Conservative, Realistic, Optimistic)",
      "VC pitch presentation with compelling investment narrative",
      "Live Excel demonstration showing model sophistication and scenario flexibility",
      "Investment proposal with specific funding request and use of funds analysis"
    ],
    requirements: [
      "All financial statements properly integrated with dynamic cross-references",
      "Scenario analysis demonstrates realistic range of business outcomes",
      "Model handles complex startup financials (pre-revenue, growth scaling, burn rate)",
      "VC presentation appropriate for institutional investor audience",
      "Investment proposal supported by rigorous financial modeling and market analysis"
    ],
    duration: "12-minute VC pitch + 8-minute live demo + Q&A"
  },
  
  milestones: [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: "Fully Linked 3-Statement Forecast",
      description: "Integrated financial statements with proper cross-references",
      focus: "Technical integration and financial modeling accuracy",
      criteria: [
        "Income statement projects realistic revenue and expense scenarios",
        "Balance sheet maintains perfect balance with proper asset/liability/equity tracking",
        "Cash flow statement accurately reflects operating, investing, and financing activities",
        "All statements properly linked with dynamic cross-references that update automatically"
      ],
      deliverables: ["Integrated 3-statement model", "Cross-reference system", "Financial accuracy verification"]
    },
    {
      id: "integration",
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day,
      title: "Model Runs 3 Scenarios",
      description: "Dynamic scenario analysis with realistic business projections",
      focus: "Scenario modeling and business insight generation",
      criteria: [
        "Conservative scenario reflects realistic downside risks and challenges",
        "Realistic scenario represents most likely business outcomes based on market analysis",
        "Optimistic scenario shows growth potential while remaining credible",
        "Scenario switching functionality works seamlessly across all statements"
      ],
      deliverables: ["3-scenario modeling system", "Business assumption framework", "Scenario comparison analysis"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,
      title: "VC-Ready Presentation Model",
      description: "Investment-grade presentation with sophisticated financial modeling",  
      focus: "Investment presentation and VC communication",
      criteria: [
        "VC pitch presentation compelling and appropriate for institutional investors",
        "Financial model demonstrates sophistication expected by venture capitalists",
        "Investment proposal clearly articulates funding needs and growth strategy",
        "Live demonstration showcases model flexibility and analytical depth"
      ],
      deliverables: ["VC pitch presentation", "Investment proposal", "Demo-ready financial model"]
    }
  ],
  
  rubric: [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: "35%",
      focus: "Financial model accuracy and integration sophistication",
      exemplary: "Perfect financial integration; sophisticated modeling; handles complex startup scenarios flawlessly",
      proficient: "Good financial integration; functional modeling; handles most startup scenarios correctly",
      developing: "Limited financial integration; basic modeling; struggles with startup scenario complexity",
      businessStandard: "VC-grade models must demonstrate technical sophistication and complete accuracy"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: "30%", 
      focus: "Scenario analysis sophistication and business insight quality",
      exemplary: "Sophisticated scenario analysis; realistic business assumptions; provides meaningful insights",
      proficient: "Functional scenario analysis; reasonable assumptions; provides useful insights",
      developing: "Limited scenario analysis; unrealistic assumptions; provides minimal insights",
      businessStandard: "VCs require sophisticated scenario analysis to assess investment risk and opportunity"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: "15%",
      focus: "Investment proposal quality and financial communication",
      exemplary: "Compelling investment proposal; sophisticated financial narrative; professional documentation",
      proficient: "Good investment proposal; clear financial narrative; adequate documentation",
      developing: "Weak investment proposal; unclear financial narrative; poor documentation",
      businessStandard: "Investment proposals must clearly communicate opportunity and financial projections"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: "20%",
      focus: "VC pitch effectiveness and investor communication",
      exemplary: "Compelling VC pitch; expertly handles investor questions; demonstrates investment readiness",
      proficient: "Good VC pitch; adequately handles questions; shows reasonable investment potential",
      developing: "Weak VC pitch; struggles with investor questions; limited investment appeal",
      businessStandard: "Successful fundraising requires compelling presentation of investment opportunity"
    }
  ],
  
  studentChoices: {
    scenarios: [
      "Technology startup seeking Series A funding",
      "Consumer product launch requiring growth capital",
      "Social impact venture with hybrid revenue model",
      "B2B SaaS platform scaling to enterprise customers"
    ],
    roles: [
      "Financial Modeler (3-statement integration and scenario development)",
      "Market Analyst (assumptions development and competitive analysis)",
      "Investment Strategist (pitch development and investor relations)",
      "Technical Demo Specialist (model presentation and Q&A handling)"
    ],
    presentationFormats: [
      "Traditional VC pitch with slide deck and Excel demo",
      "Interactive model presentation with real-time scenario adjustment",
      "Shark Tank style pitch with live negotiation elements"
    ],
    extensions: [
      "Advanced valuation models (DCF, comparable analysis)",
      "Detailed cap table modeling and equity scenarios",
      "Unit economics modeling with cohort analysis",
      "Monte Carlo simulation for risk analysis"
    ]
  },
  
  resources: {
    templates: [
      {
        title: "Startup Financial Model Template",
        description: "Comprehensive 3-statement integration framework for startups",
        type: "excel-template",
        required: true,
        classroomOnly: true
      },
      {
        title: "VC Pitch Deck Template",
        description: "Professional presentation format for venture capital pitches",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ],
    datasets: [
      {
        title: "Startup Financial Benchmarks",
        description: "Industry data for realistic assumption development",
        type: "dataset",
        required: true,
        classroomOnly: true
      },
      {
        title: "VC Investment Criteria Database",
        description: "Information about VC decision-making factors and evaluation criteria",
        type: "dataset",
        required: false,
        classroomOnly: true
      }
    ],
    guides: [
      {
        title: "Startup Financial Modeling Guide",
        description: "Comprehensive guide to modeling early-stage company financials",
        type: "guide",
        required: true,
        classroomOnly: true
      },
      {
        title: "VC Pitch Best Practices",
        description: "How to present effectively to venture capital investors",
        type: "guide",
        required: true,
        classroomOnly: true
      }
    ]
  },
  
  validation: {
    peerReviewCriteria: [
      "Verify 3-statement integration accuracy and dynamic updating",
      "Test scenario analysis functionality and assumption reasonableness",
      "Evaluate VC pitch compelling nature and investment appeal",
      "Check financial model sophistication appropriate for VC audience"
    ],
    selfAssessmentQuestions: [
      "Would a venture capitalist find my financial model credible and sophisticated?",
      "Do my scenarios reflect realistic range of business outcomes?",
      "Is my investment proposal compelling and clearly articulated?",
      "Can I confidently handle challenging investor questions about my model?"
    ],
    teacherCheckpoints: [
      "Review financial model integration accuracy and sophistication",
      "Assess scenario analysis realism and business insight quality",
      "Evaluate VC pitch effectiveness and investment readiness",
      "Confirm model meets institutional investor standards and expectations"
    ]
  }
}

// ========================================
// FRAMEWORK COLLECTION
// ========================================
export const allUnitProjectFrameworks = [
  unit01ProjectFramework,
  unit02ProjectFramework,
  unit03ProjectFramework,
  unit04ProjectFramework,
  unit05ProjectFramework,
  unit06ProjectFramework,
  unit07ProjectFramework,
  unit08ProjectFramework
] as const

export function getProjectFrameworkByUnitId(unitId: string): UnitProjectFramework | undefined {
  return allUnitProjectFrameworks.find(framework => framework.unitId === unitId)
}