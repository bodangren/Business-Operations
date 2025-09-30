export type Unit05LessonId =
  | "lesson01"
  | "lesson02"
  | "lesson03"
  | "lesson04"
  | "lesson05"
  | "lesson06"
  | "lesson07";

export interface Unit05Phase5Question {
  id: string;
  lessonId: Unit05LessonId;
  lessonTitle: string;
  prompt: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
  objectiveTags: string[];
}

export interface Unit05Phase5Filter {
  lessonIds?: Unit05LessonId[];
  tags?: string[];
}

export interface ComprehensionCheckItem {
  id: string;
  question: string;
  answers: string[];
  explanation: string;
}

const lesson01Questions: Unit05Phase5Question[] = [
  {
    id: "lesson01-q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Payroll Basics",
    prompt: "An employee works 45 hours a week at a rate of $20/hour. What is their gross pay for the week, assuming overtime is 1.5 times the regular rate for hours over 40?",
    correctAnswer: "$950",
    distractors: [
      "$900",
      "$1350",
      "$1000"
    ],
    explanation: "Regular pay: 40 hours * $20/hour = $800. Overtime hours: 45 - 40 = 5 hours. Overtime rate: $20/hour * 1.5 = $30/hour. Overtime pay: 5 hours * $30/hour = $150. Gross pay: $800 + $150 = $950.",
    objectiveTags: ["gross-pay", "overtime-calculation"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Payroll Basics",
    prompt: "A salaried employee earns $52,000 per year and is paid bi-weekly. What is their gross pay per paycheck?",
    correctAnswer: "$2,000",
    distractors: [
      "$1,000",
      "$4,333.33",
      "$2,166.67"
    ],
    explanation: "There are 26 bi-weekly pay periods in a year. $52,000 / 26 = $2,000.",
    objectiveTags: ["gross-pay", "salary-calculation", "pay-frequency"]
  }
];

const lesson02Questions: Unit05Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "Sarah hires Alex at $25/hour for a standard 40-hour work week, paid bi-weekly. What is Alex's gross pay per paycheck?",
    correctAnswer: "$2,000",
    distractors: [
      "$1,000",
      "$2,500",
      "$1,500"
    ],
    explanation: "Bi-weekly means every 2 weeks, so: 40 hours/week × 2 weeks × $25/hour = 80 hours × $25 = $2,000 gross pay per paycheck.",
    objectiveTags: ["gross-pay", "hourly-calculation", "pay-frequency"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "If Alex works 90 hours in a bi-weekly period at $25/hour, what is his total gross pay including overtime?",
    correctAnswer: "$2,375",
    distractors: [
      "$2,250",
      "$2,500",
      "$2,000"
    ],
    explanation: "Regular: 80 hours × $25 = $2,000. Overtime: 10 hours × $25 × 1.5 = $375. Total: $2,000 + $375 = $2,375.",
    objectiveTags: ["gross-pay", "overtime-calculation"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "What are the current FICA tax rates that apply to every employee's paycheck?",
    correctAnswer: "Social Security: 6.2%, Medicare: 1.45%",
    distractors: [
      "Social Security: 7.65%, Medicare: 1.45%",
      "Social Security: 6.2%, Medicare: 2.9%",
      "Social Security: 5.2%, Medicare: 1.25%"
    ],
    explanation: "FICA taxes are: Social Security at 6.2% and Medicare at 1.45%. These rates are the same for both employee and employer portions.",
    objectiveTags: ["fica-taxes", "tax-rates"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "Alex earns $2,000 gross bi-weekly. How much will be deducted for FICA taxes?",
    correctAnswer: "$153.00",
    distractors: [
      "$145.00",
      "$160.00",
      "$124.00"
    ],
    explanation: "Social Security: $2,000 × 6.2% = $124. Medicare: $2,000 × 1.45% = $29. Total FICA: $124 + $29 = $153.",
    objectiveTags: ["fica-taxes", "tax-calculation"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "What is the main difference between gross pay and net pay?",
    correctAnswer: "Gross pay is before deductions, net pay is after deductions",
    distractors: [
      "Gross pay includes overtime, net pay does not",
      "Gross pay is hourly, net pay is salary",
      "Gross pay is what the employer pays, net pay is what the employee earns"
    ],
    explanation: "Gross pay is the total earned before any taxes or deductions. Net pay is what remains after all deductions (taxes, insurance, etc.) are subtracted.",
    objectiveTags: ["gross-vs-net", "payroll-concepts"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "A tipped server works 25 hours at $2.13 base wage and reports $180 in tips. What is their gross pay?",
    correctAnswer: "$233.25",
    distractors: [
      "$181.25",
      "$180.00",
      "$53.25"
    ],
    explanation: "Base pay: 25 hours × $2.13 = $53.25. Plus tips: $53.25 + $180 = $233.25 total gross pay.",
    objectiveTags: ["gross-pay", "tipped-employees"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "Sarah pays Alex $2,000 gross bi-weekly. What additional costs does Sarah incur as the employer?",
    correctAnswer: "Employer FICA taxes and unemployment taxes (~$213 total)",
    distractors: [
      "Only unemployment taxes (~$60)",
      "Only employer FICA taxes (~$153)",
      "No additional costs beyond gross pay"
    ],
    explanation: "Sarah must pay matching FICA taxes ($153) plus federal and state unemployment taxes (~$60), totaling about $213 in additional costs.",
    objectiveTags: ["employer-costs", "fica-taxes", "payroll-taxes"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "Why is cash flow timing critical for payroll management in Sarah's project-based business?",
    correctAnswer: "Payroll must be paid on specific dates regardless of when client payments arrive",
    distractors: [
      "Employees can wait for payment until projects are completed",
      "Tax obligations only apply when revenue is received",
      "Payroll costs vary based on project profitability"
    ],
    explanation: "Payroll obligations are fixed and date-specific, but project-based revenue is irregular. Sarah must ensure cash availability every pay period regardless of client payment timing.",
    objectiveTags: ["cash-flow", "payroll-timing"]
  },
  {
    id: "lesson02-q9",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "If Sarah converts Alex from hourly ($25/hour, 80 hours bi-weekly) to salary at $52,000 annually, what is the bi-weekly gross pay?",
    correctAnswer: "$2,000",
    distractors: [
      "$1,000",
      "$4,333",
      "$2,167"
    ],
    explanation: "Annual salary ÷ pay periods per year: $52,000 ÷ 26 bi-weekly periods = $2,000 per paycheck.",
    objectiveTags: ["salary-calculation", "pay-frequency"]
  },
  {
    id: "lesson02-q10",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Gross-to-Net Calculations",
    prompt: "What is the primary purpose of building a 'Payday Simulator' for Sarah's business?",
    correctAnswer: "To predict exactly when and how much cash will be needed for payroll",
    distractors: [
      "To calculate employee productivity and performance",
      "To determine the best hiring schedule for new employees",
      "To compare different payroll software options"
    ],
    explanation: "The Payday Simulator helps predict cash flow needs to avoid payroll crises like Maria's café experienced, ensuring Sarah always has sufficient funds available on payday.",
    objectiveTags: ["cash-flow", "payroll-planning", "business-tools"]
  }
];

const lesson03Questions: Unit05Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "Sarah hires Alex at $65,000 annually, paid bi-weekly. What's his gross pay per paycheck?",
    correctAnswer: "$2,500 (calculated as $65,000 ÷ 26 pay periods)",
    distractors: [
      "$5,416.67 (calculated as $65,000 ÷ 12 months)",
      "$1,250 (calculated as $65,000 ÷ 52 weeks)",
      "$31.25 per hour for 40 hours"
    ],
    explanation: "Bi-weekly pay means 26 pay periods per year (52 weeks ÷ 2). Annual salary divided by pay periods: $65,000 ÷ 26 = $2,500 per paycheck.",
    objectiveTags: ["salary-calculation", "pay-frequency", "excel-formulas"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "Which Excel formula correctly calculates overtime pay for an hourly employee working 45 hours at $25/hour?",
    correctAnswer: "=IF(45>40, 40*25+(45-40)*25*1.5, 45*25)",
    distractors: [
      "=45*25*1.5",
      "=IF(45>40, 45*25*1.5, 45*25)",
      "=40*25+(45*25*1.5)"
    ],
    explanation: "The formula checks if hours exceed 40, then calculates 40 regular hours plus overtime hours at 1.5× rate. For 45 hours: 40×$25 + 5×$25×1.5 = $1,000 + $187.50 = $1,187.50.",
    objectiveTags: ["excel-formulas", "overtime-calculation", "if-function"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "A tipped employee works 30 hours at $3.00/hour base wage and earns $180 in tips. If minimum wage is $7.25, what's their gross pay?",
    correctAnswer: "$217.50 (30 hours × $7.25 minimum wage)",
    distractors: [
      "$270 (30 × $3.00 + $180 tips)",
      "$90 (30 × $3.00 only)",
      "$180 (tips only)"
    ],
    explanation: "Use MAX function logic: Compare (30×$3.00 + $180) = $270 vs (30×$7.25) = $217.50. The employee earns the higher amount: $270.",
    objectiveTags: ["tipped-employees", "minimum-wage", "max-function"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "What's the primary business purpose of FICA taxes (Social Security and Medicare) from an employer's perspective?",
    correctAnswer: "Required federal contributions to employee retirement and healthcare systems",
    distractors: [
      "Optional benefits that employers can choose to provide",
      "State-level taxes that vary by location",
      "Profit-sharing payments to the government"
    ],
    explanation: "FICA taxes are mandatory federal withholdings that fund Social Security (6.2%) and Medicare (1.45%) programs. Employers must withhold these from employee paychecks and match the contributions.",
    objectiveTags: ["fica-taxes", "payroll-taxes", "employer-obligations"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "Sarah's payroll calculator shows an employee's net pay as negative. What Excel function should prevent this display issue?",
    correctAnswer: "IFERROR to show 0 or error message instead of negative values",
    distractors: [
      "VLOOKUP to find correct tax rates",
      "SUM to add up all deductions",
      "IF to check employee type"
    ],
    explanation: "IFERROR wraps formulas to handle calculation errors gracefully. A negative net pay indicates a formula error (perhaps dividing by zero or missing data) that should display as 0 or an error message.",
    objectiveTags: ["excel-formulas", "error-handling", "iferror-function"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "Why should Sarah use named ranges (like 'Overtime_Rate') instead of typing 1.5 directly in formulas?",
    correctAnswer: "Makes formulas easier to understand and allows central updates to rates",
    distractors: [
      "Named ranges calculate faster than numbers",
      "Excel requires named ranges for overtime calculations",
      "Named ranges automatically format as currency"
    ],
    explanation: "Named ranges improve formula readability and maintainability. If overtime rates change, Sarah updates one named range instead of finding and changing every formula that uses 1.5.",
    objectiveTags: ["excel-formulas", "named-ranges", "best-practices"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "If Sarah's total weekly payroll is $3,200 gross and $2,400 net, what percentage goes to taxes and deductions?",
    correctAnswer: "25% ($800 in taxes and deductions)",
    distractors: [
      "75% (the net pay percentage)",
      "33% (roughly one-third)",
      "Cannot determine without individual tax rates"
    ],
    explanation: "Deduction percentage = ($3,200 - $2,400) ÷ $3,200 = $800 ÷ $3,200 = 0.25 = 25%. This helps Sarah understand her total employment costs beyond gross wages.",
    objectiveTags: ["tax-calculation", "percentage-calculation", "payroll-analysis"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "What's the main cash flow advantage of Sarah's Excel payroll calculator over manual calculations?",
    correctAnswer: "Predicts exact cash needs in advance, preventing Friday payroll crises",
    distractors: [
      "Eliminates the need to pay any taxes",
      "Automatically deposits money into employee accounts",
      "Reduces employee salaries to save money"
    ],
    explanation: "The calculator helps Sarah predict exactly how much cash she needs and when, preventing the timing mismatches that caused Maria's café crisis. Accurate forecasting enables better cash flow management.",
    objectiveTags: ["cash-flow", "payroll-planning", "business-tools"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "Sarah wants to give Alex a $5,000 annual raise. How should she use Excel to determine the impact on her weekly cash flow?",
    correctAnswer: "Update Alex's annual salary and check how weekly net pay increases",
    distractors: [
      "Add $5,000 to this week's gross pay calculation",
      "Multiply $5,000 by the tax rate to get the cost",
      "Divide $5,000 by 12 months for monthly impact"
    ],
    explanation: "Increase Alex's annual salary from $65,000 to $70,000 in the calculator. The formulas will automatically recalculate weekly gross pay ($70,000 ÷ 26 = $2,692.31) and show the new weekly cash requirement.",
    objectiveTags: ["excel-formulas", "salary-calculation", "scenario-analysis"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Excel Payroll Calculator",
    prompt: "Which scenario best demonstrates the business value of Sarah's payroll calculator system?",
    correctAnswer: "Confidently bidding on a 6-month project knowing exact weekly payroll costs for the new hire",
    distractors: [
      "Never having to pay taxes on employee wages again",
      "Paying employees less than competitors while maintaining quality",
      "Avoiding the need to hire employees by doing all work herself"
    ],
    explanation: "The calculator enables strategic business decisions. Sarah can bid on the $75,000 project knowing her exact weekly costs (payroll + taxes), ensuring profitable pricing and adequate cash reserves.",
    objectiveTags: ["business-strategy", "payroll-planning", "decision-making"]
  }
];

const lesson04Questions: Unit05Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Data Validation & Error Detection",
    prompt: "Which Excel feature would prevent someone from entering 200 hours worked in a single week?",
    correctAnswer: "Data Validation with input restrictions",
    distractors: [
      "Conditional Formatting with color rules",
      "VLOOKUP with error checking",
      "Pivot Tables with data filtering"
    ],
    explanation: "Data Validation allows you to set input restrictions, such as limiting hours worked to a realistic range (e.g., 0-80 hours per week), preventing impossible entries before they can cause problems.",
    objectiveTags: ["data-validation", "error-prevention", "excel-features"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Data Validation & Error Detection",
    prompt: "A payroll system shows negative net pay in red using Conditional Formatting. What business problem does this solve?",
    correctAnswer: "It immediately alerts users to calculation errors that could result in owing money to employees",
    distractors: [
      "It makes the spreadsheet look more professional and colorful",
      "It automatically fixes the calculation error without user intervention",
      "It prevents users from entering any data into the affected cells"
    ],
    explanation: "Conditional Formatting provides visual alerts to highlight problems. Negative net pay indicates a serious calculation error that could mean the business owes additional money to the employee.",
    objectiveTags: ["conditional-formatting", "error-detection", "visual-alerts"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Data Validation & Error Detection",
    prompt: "What is the primary business benefit of implementing bulletproof payroll validation systems?",
    correctAnswer: "Prevents costly payroll mistakes and builds investor confidence in operational systems",
    distractors: [
      "Eliminates the need for human review of payroll calculations",
      "Allows businesses to pay employees less than minimum wage",
      "Makes Excel spreadsheets run faster and more efficiently"
    ],
    explanation: "Professional error prevention systems demonstrate systematic thinking and operational maturity, which builds investor confidence while preventing costly mistakes that could damage employee relationships.",
    objectiveTags: ["investor-confidence", "error-prevention", "business-systems"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Data Validation & Error Detection",
    prompt: "Which validation rule would be most appropriate for a 'Pay Rate' field in a professional payroll system?",
    correctAnswer: "Decimal numbers between $7.25 and $200.00 with required entry",
    distractors: [
      "Any positive number with no upper limit",
      "Text values only to prevent calculation errors",
      "Whole numbers between 1 and 100"
    ],
    explanation: "Pay rates should be decimal numbers within realistic ranges, with a minimum of federal minimum wage ($7.25) and a reasonable maximum ($200/hour) to catch data entry errors.",
    objectiveTags: ["data-validation", "pay-rates", "best-practices"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Data Validation & Error Detection",
    prompt: "How does implementing data validation in payroll systems demonstrate professional business management skills?",
    correctAnswer: "It shows systematic thinking about preventing problems before they occur",
    distractors: [
      "It proves advanced Excel knowledge is more important than business understanding",
      "It eliminates the need for backup systems and manual verification",
      "It guarantees that no payroll errors will ever happen"
    ],
    explanation: "Professional managers anticipate and prevent problems systematically. Building error prevention into systems shows strategic thinking and operational maturity that investors value.",
    objectiveTags: ["business-management", "strategic-thinking", "professional-skills"]
  },
  {
    id: "lesson04-q6",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Data Validation & Error Detection",
    prompt: "In Sarah's case, what would have prevented the $3,200 overtime error from occurring?",
    correctAnswer: "Data validation limiting overtime hours to realistic maximums (e.g., 0-40 hours)",
    distractors: [
      "Using a different font color for overtime calculations",
      "Calculating overtime manually instead of using Excel formulas",
      "Sending all payroll calculations to an external accounting firm"
    ],
    explanation: "Data validation could have restricted overtime entries to realistic ranges, preventing the impossible 80-hour overtime entry that caused the $3,200 mistake.",
    objectiveTags: ["data-validation", "error-prevention", "case-study"]
  },
  {
    id: "lesson04-q7",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Data Validation & Error Detection",
    prompt: "What role does conditional formatting play in a bulletproof payroll system?",
    correctAnswer: "Provides immediate visual alerts when calculations produce suspicious or impossible results",
    distractors: [
      "Automatically corrects calculation errors without user intervention",
      "Prevents users from accessing certain parts of the spreadsheet",
      "Makes the spreadsheet compatible with different versions of Excel"
    ],
    explanation: "Conditional formatting acts as a visual warning system, immediately highlighting problems like negative net pay, excessive overtime, or missing data that need attention.",
    objectiveTags: ["conditional-formatting", "visual-alerts", "error-detection"]
  },
  {
    id: "lesson04-q8",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Data Validation & Error Detection",
    prompt: "Which approach best demonstrates mastery of professional payroll system design?",
    correctAnswer: "Multiple validation layers: input restrictions, range checking, visual alerts, and cross-validation",
    distractors: [
      "Using only conditional formatting to highlight errors after they occur",
      "Relying primarily on manual review to catch calculation mistakes",
      "Building separate spreadsheets for each employee to avoid complexity"
    ],
    explanation: "Professional systems use multiple validation layers that work together: preventing invalid input, checking ranges, providing visual alerts, and cross-validating results for comprehensive error prevention.",
    objectiveTags: ["system-design", "best-practices", "professional-skills"]
  }
];

const lesson05Questions: Unit05Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Payroll Automation with XLOOKUP",
    prompt: "Which formula best prevents errors when an EmployeeID is missing?",
    correctAnswer: '=XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate], "Missing ID")',
    distractors: [
      '=XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate])',
      '=VLOOKUP([@EmployeeID], Emp, 3, TRUE)',
      '=INDEX(Emp[PayRate], MATCH([@EmployeeID], Emp[EmployeeID], 1))'
    ],
    explanation: "Use if_not_found to keep summaries stable and surface issues.",
    objectiveTags: ["xlookup", "error-handling", "excel-formulas"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Payroll Automation with XLOOKUP",
    prompt: "Overtime at 1.5x starts after 40 hours. Which approach scales best?",
    correctAnswer: "SUMPRODUCT with conditions for base and overtime tiers",
    distractors: [
      "Nested IFs with many parentheses",
      "Manual calculation in a hidden sheet",
      "Copy‑paste overtime rows for each employee"
    ],
    explanation: "SUMPRODUCT handles tier math clearly and adapts to new rows.",
    objectiveTags: ["sumproduct", "overtime-calculation", "scalability"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Payroll Automation with XLOOKUP",
    prompt: "Which validation rule is most critical for preventing silent payroll errors?",
    correctAnswer: "Block negative hours and require EmployeeID",
    distractors: [
      "Add a company logo",
      "Hide helper columns",
      "Turn off gridlines"
    ],
    explanation: "Bad inputs cause wrong pay. Guard rails protect people and cash.",
    objectiveTags: ["data-validation", "error-prevention", "best-practices"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Payroll Automation with XLOOKUP",
    prompt: "Your summary shows #N/A in Net Pay after adding new staff. First check?",
    correctAnswer: "Look for missing IDs or unmapped pay codes",
    distractors: [
      "Delete and rebuild the sheet",
      "Switch to manual calculation mode",
      "Email the file to a friend"
    ],
    explanation: "Missing keys break lookups. Fix the data, not the math first.",
    objectiveTags: ["troubleshooting", "error-handling", "xlookup"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Payroll Automation with XLOOKUP",
    prompt: "Why round taxes with ROUND( ,2)?",
    correctAnswer: "Prevents penny drift and makes totals tie to bank",
    distractors: [
      "It makes formulas shorter",
      "It hides #DIV/0!",
      "It speeds up calculation time only"
    ],
    explanation: "Banks and paychecks use cents; rounding ensures reconciliation.",
    objectiveTags: ["round-function", "precision", "best-practices"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Payroll Automation with XLOOKUP",
    prompt: "Which summary best convinces investors your payroll is reliable?",
    correctAnswer: "Header with audit flags + totals by PayDate",
    distractors: [
      "Raw data dump of every row",
      "Screenshot of formulas",
      "A colorful theme without checks"
    ],
    explanation: "Surface problems up front and show accurate totals tied to dates.",
    objectiveTags: ["investor-confidence", "reporting", "best-practices"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Payroll Automation with XLOOKUP",
    prompt: "To switch pay frequency logic cleanly, use:",
    correctAnswer: "SWITCH with a control cell",
    distractors: [
      "Many nested IFs and manual edits",
      "Separate files for each frequency",
      "Hidden sheet with hard‑coded numbers"
    ],
    explanation: "SWITCH keeps logic readable and easy to audit.",
    objectiveTags: ["switch-function", "pay-frequency", "excel-formulas"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Payroll Automation with XLOOKUP",
    prompt: "A PayDate is 90 days old in the active register. Which response is most professional?",
    correctAnswer: "Flag as stale date and investigate timing",
    distractors: [
      "Ignore it and continue",
      "Delete the row to hide it",
      "Email the bank with no context"
    ],
    explanation: "Aging checks help find timing issues that affect cash flow.",
    objectiveTags: ["data-validation", "aging-analysis", "professional-skills"]
  }
];

const lesson06Questions: Unit05Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "Best pattern for scenario switching by name?",
    correctAnswer: "Driver table + XLOOKUP exact‑match with IFNA",
    distractors: [
      "Three separate scenario sheets with copied formulas",
      "HLOOKUP with approximate match",
      "Manual retyping of assumptions"
    ],
    explanation: "Exact‑match prevents silent wrong matches; IFNA handles missing names safely.",
    objectiveTags: ["scenario-analysis", "xlookup", "error-handling"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "Chart ranges break when employees are added. What fixes it?",
    correctAnswer: "Use Table[Column] structured references feeding outputs",
    distractors: [
      "Extend A2:A50 manually each pay period",
      "Paste values onto a chart sheet",
      "Turn on iterative calculation"
    ],
    explanation: "Structured references auto‑expand with tables, keeping visuals stable.",
    objectiveTags: ["structured-references", "charts", "scalability"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "An employee ID is missing in the payroll table. What should the dashboard show?",
    correctAnswer: "A clear validation flag and a safe fallback via IFERROR/IFNA",
    distractors: [
      "Zeros everywhere with no explanation",
      "Random prior period totals",
      "A blank dashboard"
    ],
    explanation: "Graceful errors protect trust and guide fixes.",
    objectiveTags: ["error-handling", "dashboard-design", "validation"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "Which KPI set supports an investor decision for payroll readiness?",
    correctAnswer: "Coverage days, payroll % of revenue, variance vs budget",
    distractors: [
      "Font size, color theme, number of tabs",
      "Sheet protection, hidden rows, merged cells",
      "Total characters in formulas"
    ],
    explanation: "KPI thresholds connect model outputs to business choices.",
    objectiveTags: ["kpis", "investor-confidence", "dashboard-design"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "What is a sign of fragile integration?",
    correctAnswer: "Charts pointing to static ranges like $A$2:$A$50",
    distractors: [
      "Inputs documented next to assumptions",
      "Validation panel showing stale dates",
      "Executive summary linked to outputs"
    ],
    explanation: "Static ranges break as data grows.",
    objectiveTags: ["best-practices", "charts", "scalability"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "Why use exact match instead of approximate match for scenarios?",
    correctAnswer: "Prevents wrong scenario matches and silent errors",
    distractors: [
      "It recalculates faster in all cases",
      "It reduces the number of columns",
      "It makes charts look nicer"
    ],
    explanation: "Decision‑ready dashboards need correctness first.",
    objectiveTags: ["xlookup", "accuracy", "best-practices"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "Which statement defines 'investor‑ready' here?",
    correctAnswer: "Clear, reliable, auditable outputs with visible validation",
    distractors: [
      "A single sheet with large fonts",
      "No formulas, values only",
      "All assumptions hidden from view"
    ],
    explanation: "Clarity, reliability, and auditability build trust.",
    objectiveTags: ["investor-confidence", "professional-standards", "best-practices"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "Hours are negative for one row. The best handling is…",
    correctAnswer: "Flag via validation and exclude from totals until fixed",
    distractors: [
      "Allow negatives to reduce payroll cost",
      "Delete the row silently",
      "Hide the error in a hidden tab"
    ],
    explanation: "Validation must surface issues, not bury them.",
    objectiveTags: ["validation", "error-handling", "data-integrity"]
  },
  {
    id: "lesson06-q9",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "When is INDEX‑MATCH preferred?",
    correctAnswer: "When XLOOKUP isn't available or compatibility is required",
    distractors: [
      "When approximate match is desired",
      "When there is only one scenario",
      "When you need to merge cells"
    ],
    explanation: "INDEX‑MATCH is the classic exact‑match combo.",
    objectiveTags: ["index-match", "excel-formulas", "compatibility"]
  },
  {
    id: "lesson06-q10",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboards",
    prompt: "Best way to prove chart stability?",
    correctAnswer: "Add employees/rows and watch visuals update",
    distractors: [
      "Screenshot the chart",
      "Describe it with text only",
      "Hide all the source data"
    ],
    explanation: "Demonstrating dynamic updates shows real readiness.",
    objectiveTags: ["charts", "testing", "professional-skills"]
  }
];

const lesson07Questions: Unit05Phase5Question[] = [
  {
    id: "lesson07-q1",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Investor Readiness & Audit",
    prompt: "Which choice best defines 'investor‑ready'?",
    correctAnswer: "Clear, reliable, auditable, and documented assumptions",
    distractors: [
      "Colorful charts with many tabs",
      "Hidden formulas to protect IP",
      "Hard‑coded values to keep things simple"
    ],
    explanation: "Investor‑ready work is clear, reliable, and auditable with transparent assumptions.",
    objectiveTags: ["investor-confidence", "professional-standards", "audit"]
  },
  {
    id: "lesson07-q2",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Investor Readiness & Audit",
    prompt: "A peer finds labor% doesn't change when scenario toggles. Likely cause?",
    correctAnswer: "Chart bound to static A1:C10, not a Table",
    distractors: [
      "Too many comments in the sheet",
      "Using INDEX/MATCH instead of XLOOKUP",
      "Using a named range for drivers"
    ],
    explanation: "Static ranges don't expand with data or reflect driver changes. Bind visuals to structured references.",
    objectiveTags: ["charts", "structured-references", "troubleshooting"]
  }
];

export const unit05Phase5QuestionBank: Unit05Phase5Question[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions
];

export function getUnit05Phase5Questions(filter?: Unit05Phase5Filter): Unit05Phase5Question[] {
  const { lessonIds, tags } = filter ?? {};

  return unit05Phase5QuestionBank.filter(question => {
    const matchesLesson = !lessonIds || lessonIds.includes(question.lessonId);
    const matchesTags = !tags || tags.length === 0 || tags.some(tag => question.objectiveTags.includes(tag));
    return matchesLesson && matchesTags;
  });
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function drawRandomUnit05Phase5Questions(count: number, filter?: Unit05Phase5Filter): Unit05Phase5Question[] {
  const available = getUnit05Phase5Questions(filter);
  if (count >= available.length) {
    return shuffle(available);
  }
  return shuffle(available).slice(0, count);
}

export function toComprehensionCheckItems(questions: Unit05Phase5Question[]): ComprehensionCheckItem[] {
  return questions.map(question => ({
    id: question.id,
    question: question.prompt,
    answers: [question.correctAnswer, ...question.distractors],
    explanation: question.explanation
  }));
}

export function getUnit05Phase5ComprehensionCheckItems(filter?: Unit05Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(getUnit05Phase5Questions(filter));
}

export function drawUnit05Phase5ComprehensionCheckItems(count: number, filter?: Unit05Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(drawRandomUnit05Phase5Questions(count, filter));
}
