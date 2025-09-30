export type Unit03LessonId =
  | "lesson01"
  | "lesson02"
  | "lesson03"
  | "lesson04"
  | "lesson05"
  | "lesson06"
  | "lesson07";

export interface Unit03Phase5Question {
  id: string;
  lessonId: Unit03LessonId;
  lessonTitle: string;
  prompt: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
  objectiveTags: string[];
}

export interface Unit03Phase5Filter {
  lessonIds?: Unit03LessonId[];
  tags?: string[];
}

export interface ComprehensionCheckItem {
  id: string;
  question: string;
  answers: string[];
  explanation: string;
}

const lesson01Questions: Unit03Phase5Question[] = [
  {
    id: "lesson01-q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Three-Statement Storyboard Vision",
    prompt: "What are the three components of the financial statement 'storyboard' that Jennifer Kim described to Sarah?",
    correctAnswer: "Income Statement (plot), Balance Sheet (setting), Statement of Cash Flows (action)",
    distractors: [
      "Revenue, Expenses, and Net Income components",
      "Assets, Liabilities, and Equity components",
      "Operating, Investing, and Financing activities"
    ],
    explanation: "The three-statement storyboard consists of: Income Statement showing the plot (profitability), Balance Sheet showing the setting (financial position), and Statement of Cash Flows showing the action (cash movement). Together they tell one integrated business story.",
    objectiveTags: ["financial-statements", "integration", "investor-communication"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Three-Statement Storyboard Vision",
    prompt: "Why weren't Sarah's detailed internal spreadsheets sufficient for the bank loan officer and potential investor?",
    correctAnswer: "External stakeholders need standardized financial statements that follow GAAP formatting",
    distractors: [
      "The spreadsheets contained too many mathematical errors to be reliable",
      "Internal records are always less accurate than official financial statements",
      "Banks prefer handwritten documents over digital spreadsheet formats"
    ],
    explanation: "Internal records are perfect for management use, but banks and investors require standardized financial statements that follow Generally Accepted Accounting Principles (GAAP). This ensures consistency and comparability across different businesses and time periods.",
    objectiveTags: ["GAAP", "stakeholder-reporting", "professional-standards"]
  },
  {
    id: "lesson01-q3",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Three-Statement Storyboard Vision",
    prompt: "A business shows $60,000 revenue, $45,000 expenses, $20,000 cash, $35,000 total assets, and $12,000 liabilities. What is the owner's equity?",
    correctAnswer: "$23,000 (Assets $35,000 - Liabilities $12,000)",
    distractors: [
      "$15,000 (Revenue $60,000 - Expenses $45,000)",
      "$20,000 (the total cash amount on hand)",
      "$8,000 (Cash $20,000 - Liabilities $12,000)"
    ],
    explanation: "Owner's equity is calculated using the accounting equation: Assets = Liabilities + Equity, therefore Equity = Assets - Liabilities = $35,000 - $12,000 = $23,000. This represents the owner's financial interest in the business.",
    objectiveTags: ["accounting-equation", "balance-sheet", "calculation"]
  },
  {
    id: "lesson01-q4",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Three-Statement Storyboard Vision",
    prompt: "Which scenario best demonstrates the importance of integrated financial statement analysis?",
    correctAnswer: "A company with high profits but negative cash flow needs all three statements to understand the complete picture",
    distractors: [
      "A company that only prepares an Income Statement because it's the most important financial report",
      "A company that shows identical numbers on all three financial statements for consistency",
      "A company that only shares financial information with internal managers and executives"
    ],
    explanation: "When profit and cash flow don't align, it demonstrates why all three statements are essential. The Income Statement might show profitability, but the Cash Flow Statement reveals timing issues with collections or payments, while the Balance Sheet shows the resulting accounts receivable buildup.",
    objectiveTags: ["integration", "cash-vs-accrual", "analysis"]
  },
  {
    id: "lesson01-q5",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Three-Statement Storyboard Vision",
    prompt: "What is the central business challenge that drives the entire Unit 3 learning experience?",
    correctAnswer: "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?",
    distractors: [
      "How can Sarah reduce her monthly operating expenses to maximize near-term profitability?",
      "How should Sarah organize her office space and supplies for maximum operational efficiency?",
      "How can Sarah hire more full-time employees to grow her business faster than competitors?"
    ],
    explanation: "This driving question captures the essence of Unit 3: transforming raw accounting data into professional financial statements that communicate business performance and health to external stakeholders like banks and investors.",
    objectiveTags: ["driving-question", "integration", "professional-standards"]
  },
  {
    id: "lesson01-q6",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Three-Statement Storyboard Vision",
    prompt: "TechFlow Solutions has the following information: Revenue $75,000, Expenses $62,000, Cash $18,000, Equipment $45,000, Accounts Payable $15,000, Bank Loan $28,000. What story does this integrated data tell?",
    correctAnswer: "Profitable business ($13,000 net income) with strong asset base ($63,000 total assets) and manageable debt structure",
    distractors: [
      "Unprofitable business that should close immediately due to negative performance indicators",
      "Business with too much equipment and insufficient cash reserves for operations",
      "Business that owes too much money to creditors to be viable long-term"
    ],
    explanation: "The integrated analysis shows: Income Statement reveals $13,000 profit ($75,000 - $62,000), Balance Sheet shows $63,000 total assets ($18,000 + $45,000) with $43,000 total liabilities ($15,000 + $28,000), resulting in $20,000 equity. This tells a story of a profitable, well-positioned business.",
    objectiveTags: ["integration", "analysis", "business-health"]
  },
  {
    id: "lesson01-q7",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Three-Statement Storyboard Vision",
    prompt: "Two businesses both show $40,000 net income. Company A has $5,000 operating cash flow while Company B has $38,000 operating cash flow. What does this difference suggest about their business models?",
    correctAnswer: "Company A likely has collection issues or high accounts receivable, while Company B effectively converts profit to cash",
    distractors: [
      "Company A is more profitable because it shows higher growth investment opportunities",
      "Company B has accounting errors because cash flow should always match net income exactly",
      "The difference is completely normal and doesn't indicate any specific business concerns"
    ],
    explanation: "This significant difference between net income and operating cash flow for Company A suggests timing issues - perhaps slow customer payments, inventory buildup, or other working capital challenges. Company B's alignment between profit and cash flow indicates healthier operations.",
    objectiveTags: ["cash-flow", "working-capital", "analysis"]
  },
  {
    id: "lesson01-q8",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Three-Statement Storyboard Vision",
    prompt: "If you were Jennifer Kim advising Sarah about presenting to investors, what would be the most important message about financial statements?",
    correctAnswer: "The three statements work together to tell one credible story about business performance, position, and cash management",
    distractors: [
      "Only the Income Statement matters because it shows profitability which is what investors care about",
      "Financial statements are just formalities required by strict accounting rules and regulations",
      "Investors prefer simple spreadsheets over formal financial statements for easier reading"
    ],
    explanation: "The key insight is integration - investors need to see how profitability (Income Statement), financial position (Balance Sheet), and cash management (Cash Flow Statement) work together to demonstrate business health and growth potential.",
    objectiveTags: ["investor-communication", "integration", "professional-standards"]
  }
];

const lesson02Questions: Unit03Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Income Statement Construction",
    prompt: "Sarah needs to show her bank that TechStart Solutions is profitable. Which financial statement tells this part of her business story?",
    correctAnswer: "Income Statement - it shows whether revenues exceed expenses over a time period",
    distractors: [
      "Balance Sheet - it shows what she owns versus what she owes",
      "Statement of Cash Flows - it shows how cash moves through the business",
      "Trial Balance - it shows all account balances at a point in time"
    ],
    explanation: "The Income Statement is the financial statement that reveals profitability by comparing revenues to expenses, making it the 'plot' of the business story.",
    objectiveTags: ["income-statement", "profitability", "financial-statements"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Income Statement Construction",
    prompt: "Why does Jennifer Kim recommend using INDEX/MATCH instead of copying and pasting numbers into the Income Statement?",
    correctAnswer: "INDEX/MATCH creates dynamic formulas that automatically update when new transactions are added to the ledger",
    distractors: [
      "INDEX/MATCH is faster to type than copying and pasting values manually",
      "Banks require the use of complex formulas for all loan approval decisions",
      "INDEX/MATCH prevents all calculation errors from occurring in spreadsheets"
    ],
    explanation: "Dynamic formulas like INDEX/MATCH create live links between the trial balance and financial statements, ensuring automatic updates and maintaining data integrity.",
    objectiveTags: ["excel-automation", "INDEX-MATCH", "dynamic-formulas"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Income Statement Construction",
    prompt: "If Sarah's Service Revenue account shows $8,500 and her total Operating Expenses are $4,200, what is her Net Income and what does this tell investors?",
    correctAnswer: "Net Income is $4,300, showing the business is profitable and generating positive returns",
    distractors: [
      "Net Income is $12,700, calculated by adding revenue and expenses together",
      "Net Income cannot be determined without more detailed financial information",
      "Net Income is negative, indicating the business is losing money each month"
    ],
    explanation: "Net Income = Revenues - Expenses = $8,500 - $4,200 = $4,300. Positive Net Income demonstrates profitability, which is a key indicator investors look for.",
    objectiveTags: ["net-income", "calculation", "profitability"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Income Statement Construction",
    prompt: "In the accounting equation (Assets = Liabilities + Equity), which accounts from the trial balance flow into the Income Statement?",
    correctAnswer: "Revenue and Expense accounts flow into the Income Statement to calculate Net Income",
    distractors: [
      "Asset and Liability accounts are used to build the Income Statement structure",
      "Only Equity accounts appear on the Income Statement for ownership reporting",
      "All trial balance accounts are included in the Income Statement without exception"
    ],
    explanation: "Only Revenue and Expense accounts from the trial balance flow into the Income Statement. Assets, Liabilities, and Equity accounts appear on the Balance Sheet.",
    objectiveTags: ["accounting-equation", "account-classification", "trial-balance"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Income Statement Construction",
    prompt: "What happens to Sarah's Income Statement if she adds a new client project worth $3,000 to her trial balance and her statements are built with INDEX/MATCH formulas?",
    correctAnswer: "The Income Statement automatically updates to include the new revenue and recalculates Net Income",
    distractors: [
      "She must manually add the $3,000 to her Income Statement line by line",
      "The Income Statement shows an error until she rebuilds it completely from scratch",
      "Nothing changes until she updates her Excel formulas to reference the new data"
    ],
    explanation: "Dynamic INDEX/MATCH formulas create live links, so when new transactions are added to the trial balance, the Income Statement automatically reflects these changes.",
    objectiveTags: ["dynamic-formulas", "INDEX-MATCH", "automation"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Income Statement Construction",
    prompt: "Why is it crucial for Sarah to categorize her Rent Expense correctly in the trial balance when building her Income Statement?",
    correctAnswer: "Incorrect categorization could misstate her business expenses and mislead investors about her true profitability",
    distractors: [
      "Rent is the largest expense so it matters most for total calculations",
      "The bank specifically looks at rent expenses when making all loan decisions",
      "Excel formulas won't work properly if expense categories are labeled wrong"
    ],
    explanation: "Proper categorization ensures accurate financial reporting. Misclassifying expenses could make the business appear more or less profitable than it actually is, misleading investors and lenders.",
    objectiveTags: ["categorization", "accuracy", "data-integrity"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Income Statement Construction",
    prompt: "Jennifer Kim describes the three financial statements as a 'storyboard.' In this analogy, what specific story does the Income Statement tell?",
    correctAnswer: "The plot: whether the business made or lost money during a specific period",
    distractors: [
      "The setting: what the business owns and what it owes at a moment in time",
      "The action: how cash actually moved in and out of the business operations",
      "The ending: predictions about future business performance and growth potential"
    ],
    explanation: "The Income Statement tells the 'plot' by revealing whether the business was profitable over a specific time period, answering the fundamental question: did the business make money?",
    objectiveTags: ["financial-storytelling", "income-statement", "concepts"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Income Statement Construction",
    prompt: "A potential investor asks Sarah, 'How do I know your business can consistently generate profit?' Which aspect of Income Statement construction best addresses this question?",
    correctAnswer: "Dynamic formulas that automatically update monthly Income Statements showing consistent profitability trends",
    distractors: [
      "A single Income Statement showing one profitable month of operations",
      "The total amount of revenue without considering any business expenses",
      "A detailed list of all business assets owned by the company"
    ],
    explanation: "Consistent profitability over time is best demonstrated through a series of Income Statements that automatically update with dynamic formulas, showing sustainable profit generation rather than a one-time result.",
    objectiveTags: ["investor-communication", "profitability-trends", "automation"]
  }
];

const lesson03Questions: Unit03Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "In the INDEX/MATCH formula =INDEX('Trial Balance'[Amount], MATCH(\"Software Subscriptions\", 'Trial Balance'[Account Name], 0)), what happens if the account name \"Software Subscriptions\" doesn't exist in the trial balance?",
    correctAnswer: "The MATCH function returns #N/A error, which causes INDEX to also return #N/A, alerting you to the missing data",
    distractors: [
      "The formula returns zero automatically as a default value for missing accounts",
      "Excel crashes because it cannot find the matching value in the lookup range",
      "The formula skips to the next closest account name alphabetically in the list"
    ],
    explanation: "When MATCH cannot find an exact match (with match_type 0), it returns #N/A error. This is actually helpful because it alerts you to data issues, allowing you to correct missing or misspelled account names.",
    objectiveTags: ["INDEX-MATCH", "error-handling", "debugging"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "Sarah's Q2 Income Statement shows revenues of $16,500 and expenses of $5,700. If she wants to achieve a 25% profit margin next quarter, what revenue target should she set (assuming expenses stay constant)?",
    correctAnswer: "$7,600 in revenue (expenses of $5,700 ÷ 0.75 = $7,600 to achieve 25% margin)",
    distractors: [
      "$14,250 in revenue ($5,700 × 2.5 = $14,250 for target calculation)",
      "$20,000 in revenue (current revenue plus 25% growth over last quarter)",
      "$11,400 in revenue (current expenses × 2 = $11,400 for breakeven plus margin)"
    ],
    explanation: "For a 25% profit margin, Net Income must be 25% of Revenue. This means Expenses are 75% of Revenue. So: Revenue = Expenses ÷ 0.75 = $5,700 ÷ 0.75 = $7,600.",
    objectiveTags: ["profit-margin", "calculation", "financial-planning"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "Why is it critical that Sarah's Income Statement automatically updates when she adds new transactions to her trial balance?",
    correctAnswer: "Dynamic updating ensures investors always see current financial performance, building trust and credibility",
    distractors: [
      "Automatic updates prevent Sarah from having to learn more advanced Excel functions",
      "Dynamic formulas make the spreadsheet file size smaller and run faster on computers",
      "Investors prefer to see only historical data, not current performance snapshots"
    ],
    explanation: "Investors need current, accurate information to make funding decisions. Dynamic formulas ensure the Income Statement always reflects the true financial position, building credibility and trust.",
    objectiveTags: ["automation", "investor-communication", "data-integrity"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "When building professional financial models, why do experts use named table references like 'TrialBalance[Amount]' instead of cell ranges like 'A2:A20'?",
    correctAnswer: "Named references are more readable, less prone to breaking when data moves, and make formulas self-documenting",
    distractors: [
      "Named references are required by Generally Accepted Accounting Principles (GAAP) standards",
      "Named references make Excel calculate formulas faster than traditional cell references",
      "Named references automatically format numbers as currency in all financial reports"
    ],
    explanation: "Named references improve model robustness (don't break when columns move), readability (self-explanatory), and maintainability (easier to understand and modify).",
    objectiveTags: ["named-ranges", "best-practices", "maintainability"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "Sarah's largest expense is Contractor Payments at $2,800. From a business analysis perspective, what does this suggest about her business model?",
    correctAnswer: "TechStart Solutions uses a scalable model where she can increase capacity by hiring contractors rather than full-time employees",
    distractors: [
      "Sarah is overspending on contractors and should hire full-time employees instead immediately",
      "The business is failing because contractors are too expensive compared to alternatives",
      "Sarah needs to reduce contractor costs to improve profitability in the near term"
    ],
    explanation: "High contractor costs often indicate a flexible, scalable business model. Sarah can adjust capacity based on demand without the fixed costs and commitments of full-time employees.",
    objectiveTags: ["business-model", "cost-analysis", "strategy"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "If Sarah's trial balance contained both \"Website Development Revenue\" and \"Web Development Revenue\" (note the difference), how would her INDEX/MATCH formula behave?",
    correctAnswer: "The formula would return the first exact match it finds, but this highlights the importance of consistent naming conventions",
    distractors: [
      "INDEX/MATCH would automatically combine both revenue streams into one total amount",
      "Excel would display a dialog asking which account to use for the lookup",
      "The formula would return an average of both amounts automatically"
    ],
    explanation: "INDEX/MATCH returns the first exact match found. Inconsistent naming could cause formulas to miss legitimate accounts, emphasizing the need for standardized chart of accounts.",
    objectiveTags: ["data-consistency", "naming-conventions", "error-prevention"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "Sarah's Net Income of $10,800 flows into which section of her Balance Sheet, and why is this connection important for investors?",
    correctAnswer: "Retained Earnings in the Equity section - this connection proves the financial statements are integrated and tell one coherent story",
    distractors: [
      "Cash in the Assets section - because Net Income always equals cash generated",
      "Accounts Payable in the Liabilities section - because profits increase what the company owes",
      "Revenue in a separate Revenue section - to keep income statement data separate"
    ],
    explanation: "Net Income flows to Retained Earnings on the Balance Sheet, demonstrating the integration between statements. This connection shows investors the financial model is comprehensive and professional.",
    objectiveTags: ["integration", "retained-earnings", "investor-communication"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "What business insight can Sarah gain by comparing her 75% expense ratio (expenses ÷ revenues = $5,700 ÷ $16,500) to industry benchmarks?",
    correctAnswer: "If industry average is 80%, Sarah's 75% ratio indicates efficient cost management and competitive advantage",
    distractors: [
      "A 75% expense ratio is always too high regardless of the specific industry",
      "Expense ratios are meaningless for service businesses like TechStart Solutions",
      "The ratio only matters for tax purposes, not business management decisions"
    ],
    explanation: "Comparing expense ratios to industry benchmarks helps assess operational efficiency. A lower ratio often indicates better cost control and higher profitability than competitors.",
    objectiveTags: ["financial-ratios", "benchmarking", "competitive-analysis"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "When presenting her Income Statement to potential investors, what makes Sarah's INDEX/MATCH approach more credible than manually entered numbers?",
    correctAnswer: "Investors can trace every number back to source data, see the formulas, and trust the model's accuracy and methodology",
    distractors: [
      "INDEX/MATCH formulas are required by SEC regulations for all financial presentations",
      "Manual numbers are illegal to use in investor presentations under accounting rules",
      "INDEX/MATCH automatically adjusts numbers to make the business look more profitable"
    ],
    explanation: "Transparency and traceability build investor confidence. When every number can be traced to source data through clear formulas, investors trust the model's accuracy and the entrepreneur's competence.",
    objectiveTags: ["investor-communication", "transparency", "credibility"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Dynamic Income Statement with INDEX/MATCH",
    prompt: "Based on Sarah's Q2 performance (revenues $16,500, expenses $5,700, net income $10,800), what strategic question should she be asking for Q3 planning?",
    correctAnswer: "How can I scale revenue while maintaining expense control to achieve even higher profitability?",
    distractors: [
      "Should I immediately hire 10 full-time employees since the business is currently profitable?",
      "How can I spend all the profit so I don't have to pay taxes on it?",
      "Should I lower prices to attract more customers even if it reduces overall profitability?"
    ],
    explanation: "With strong profitability (65% margin), Sarah should focus on sustainable scaling strategies that maintain her cost discipline while growing revenue through strategic investments.",
    objectiveTags: ["strategic-planning", "growth", "profitability"]
  }
];

const lesson04Questions: Unit03Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Advanced INDEX/MATCH & Named Ranges",
    prompt: "Which INDEX/MATCH formula correctly uses named ranges to create a professional, maintainable lookup for 'Marketing Expense' in Sarah's trial balance?",
    correctAnswer: "=INDEX(TrialBalance_Amounts,MATCH(\"Marketing Expense\",TrialBalance_Accounts,0))",
    distractors: [
      "=INDEX(B2:B50,MATCH(\"Marketing Expense\",A2:A50,0))",
      "=VLOOKUP(\"Marketing Expense\",TrialBalance_Data,2,0)",
      "=LOOKUP(\"Marketing Expense\",TrialBalance_Accounts,TrialBalance_Amounts)"
    ],
    explanation: "Professional financial models use named ranges like 'TrialBalance_Amounts' and 'TrialBalance_Accounts' instead of cell references. This makes formulas self-documenting, maintainable, and audit-ready for investors.",
    objectiveTags: ["named-ranges", "INDEX-MATCH", "professional-standards"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Advanced INDEX/MATCH & Named Ranges",
    prompt: "Why do professional financial analysts prefer INDEX/MATCH over VLOOKUP for building investor-ready financial models?",
    correctAnswer: "INDEX/MATCH is more robust, flexible, and won't break when columns are inserted or moved, which is essential for models that evolve over time",
    distractors: [
      "INDEX/MATCH is always faster than VLOOKUP in every situation and performance scenario",
      "INDEX/MATCH automatically formats cells with professional colors and borders for reports",
      "INDEX/MATCH is required by GAAP accounting standards for all financial statements"
    ],
    explanation: "INDEX/MATCH is preferred because it's robust against structural changes, can look in any direction, doesn't use hard-coded column numbers, and is the industry standard for maintainable financial models.",
    objectiveTags: ["INDEX-MATCH", "best-practices", "maintainability"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Advanced INDEX/MATCH & Named Ranges",
    prompt: "What advanced technique would Sarah use to automatically sum all accounts containing 'Marketing' in their name, regardless of the specific account titles?",
    correctAnswer: "=SUMPRODUCT((ISNUMBER(SEARCH(\"*Marketing*\",TrialBalance_Accounts)))*(TrialBalance_Amounts))",
    distractors: [
      "=INDEX(TrialBalance_Amounts,MATCH(\"*Marketing*\",TrialBalance_Accounts,0))",
      "=SUMIF(TrialBalance_Accounts,\"Marketing\",TrialBalance_Amounts)",
      "=VLOOKUP(\"Marketing\",TrialBalance_Data,2,0)"
    ],
    explanation: "SUMPRODUCT with SEARCH function allows wildcard pattern matching to automatically group similar accounts. This technique enables dynamic categorization that updates as new marketing-related accounts are added.",
    objectiveTags: ["advanced-formulas", "SUMPRODUCT", "dynamic-categorization"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Advanced INDEX/MATCH & Named Ranges",
    prompt: "How should Sarah handle potential errors when an account might not exist in her trial balance, to maintain professional presentation standards?",
    correctAnswer: "=IFERROR(INDEX(TrialBalance_Amounts,MATCH(\"Account Name\",TrialBalance_Accounts,0)),0)",
    distractors: [
      "=INDEX(TrialBalance_Amounts,MATCH(\"Account Name\",TrialBalance_Accounts,0),0)",
      "=IF(INDEX(TrialBalance_Amounts,MATCH(\"Account Name\",TrialBalance_Accounts,0)))",
      "=TRY(INDEX(TrialBalance_Amounts,MATCH(\"Account Name\",TrialBalance_Accounts,0)))"
    ],
    explanation: "IFERROR wrapping prevents #N/A errors from displaying when accounts don't exist. Professional models never show error values to investors - they either return 0 or a meaningful message.",
    objectiveTags: ["error-handling", "IFERROR", "professional-standards"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Advanced INDEX/MATCH & Named Ranges",
    prompt: "What makes a financial model 'dynamic' and why is this crucial for growing businesses like TechStart Solutions?",
    correctAnswer: "Dynamic models automatically update all calculations when new data is added, ensuring reports always reflect current business reality without manual formula updates",
    distractors: [
      "Dynamic models change colors automatically based on profit levels and performance metrics",
      "Dynamic models can email stakeholders when key financial metrics change significantly",
      "Dynamic models automatically backup data to the cloud every time they're modified"
    ],
    explanation: "Dynamic models maintain live connections between data sources and calculations. When Sarah adds new transactions to her trial balance, her Income Statement updates automatically, ensuring accuracy and saving hours of manual work.",
    objectiveTags: ["dynamic-formulas", "automation", "efficiency"]
  },
  {
    id: "lesson04-q6",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Advanced INDEX/MATCH & Named Ranges",
    prompt: "In a professional financial model, which naming convention for ranges demonstrates the highest level of Excel sophistication?",
    correctAnswer: "TrialBalance_Accounts, IncomeStatement_Revenue, BalanceSheet_Assets with consistent, descriptive naming that clearly indicates content and purpose",
    distractors: [
      "TB_Accts, IS_Rev, BS_Assets with abbreviated names for faster typing",
      "Data1, Data2, Data3 with simple sequential numbering for easy reference",
      "A2:A50, B2:B50, C2:C50 using cell references instead of named ranges"
    ],
    explanation: "Professional naming conventions use full, descriptive names that make formulas self-documenting. Names like 'TrialBalance_Accounts' immediately tell any reader what data the range contains, which is essential for auditing and maintenance.",
    objectiveTags: ["naming-conventions", "documentation", "maintainability"]
  },
  {
    id: "lesson04-q7",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Advanced INDEX/MATCH & Named Ranges",
    prompt: "How would Sarah create a formula that automatically pulls revenue data from the correct quarter based on today's date?",
    correctAnswer: "=INDEX(TrialBalance_Amounts,MATCH(\"Q\"&QUARTER(TODAY())&\"_Revenue\",TrialBalance_Accounts,0))",
    distractors: [
      "=INDEX(TrialBalance_Amounts,MATCH(\"Q1_Revenue\",TrialBalance_Accounts,0))",
      "=VLOOKUP(\"Current Quarter Revenue\",TrialBalance_Data,2,0)",
      "=SUM(INDEX(TrialBalance_Amounts,MATCH(\"Revenue\",TrialBalance_Accounts,0)))"
    ],
    explanation: "Using QUARTER(TODAY()) dynamically determines the current quarter (1-4) and builds the account name accordingly. This formula automatically updates as quarters change, requiring no manual intervention.",
    objectiveTags: ["dynamic-formulas", "date-functions", "automation"]
  },
  {
    id: "lesson04-q8",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Advanced INDEX/MATCH & Named Ranges",
    prompt: "What business advantage does Sarah gain by mastering these advanced INDEX/MATCH techniques beyond just having working formulas?",
    correctAnswer: "Professional-grade Excel skills signal attention to detail and technical competence, building investor confidence in her overall business management capabilities",
    distractors: [
      "Advanced Excel functions make her computer run faster and more efficiently",
      "INDEX/MATCH formulas automatically comply with tax regulations and GAAP standards",
      "These techniques allow her to eliminate the need for accounting software entirely"
    ],
    explanation: "Technical excellence in financial modeling demonstrates professional competence and attention to detail. Investors judge business owners partly by the quality of their financial systems - sophisticated models suggest sophisticated business management.",
    objectiveTags: ["investor-communication", "credibility", "professionalism"]
  }
];

const lesson05Questions: Unit03Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Three-Statement Automation",
    prompt: "Best practice for mapping AccountID to StatementLine?",
    correctAnswer: "XLOOKUP with if_not_found using Map Table columns",
    distractors: [
      "VLOOKUP with approximate match and fixed ranges",
      "INDEX only with hard-coded row numbers",
      "Manual copy/paste into a summary sheet"
    ],
    explanation: "XLOOKUP with the if_not_found argument prevents #N/A and keeps logic readable with tables.",
    objectiveTags: ["XLOOKUP", "automation", "error-handling"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Three-Statement Automation",
    prompt: "Which validation proves the cash flow statement ties to the balance sheet?",
    correctAnswer: "EndingCash = BeginningCash + NetCashFlow (within tolerance)",
    distractors: [
      "Revenue − Expenses = Net Income",
      "Assets = Liabilities + Equity",
      "Gross Margin % = Revenue / COGS"
    ],
    explanation: "Cash reconciliation confirms the cash bridge is accurate.",
    objectiveTags: ["validation", "cash-flow", "integration"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Three-Statement Automation",
    prompt: "What breaks first when using fixed ranges like C2:C200?",
    correctAnswer: "New rows are excluded from totals",
    distractors: [
      "Formulas calculate twice as fast",
      "XLOOKUP stops working",
      "Tables cannot be created"
    ],
    explanation: "Fixed ranges don't auto-expand; tables do.",
    objectiveTags: ["tables", "dynamic-ranges", "best-practices"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Three-Statement Automation",
    prompt: "Cleanest way to route logic for Base/Stretch/Conservative?",
    correctAnswer: "SWITCH(Scenario, \"Base\",1,\"Stretch\",1.1,\"Conservative\",0.9)",
    distractors: [
      "Nested IF(Scenario=\"Base\",1, IF(Scenario=\"Stretch\",1.1,0.9))",
      "Multiple copies of each formula on different sheets",
      "Manual overrides for each month"
    ],
    explanation: "SWITCH is more readable and maintainable than nested IFs for discrete modes.",
    objectiveTags: ["SWITCH", "scenario-analysis", "readability"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Three-Statement Automation",
    prompt: "Where should audit flags live for investor confidence?",
    correctAnswer: "Visible near the summary with clear labels",
    distractors: [
      "Hidden on a helper tab",
      "Embedded in long formulas only",
      "Left for manual checks later"
    ],
    explanation: "Flags should be obvious and close to the story you're telling.",
    objectiveTags: ["validation", "transparency", "investor-communication"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Three-Statement Automation",
    prompt: "Which rollup pattern is correct for COGS?",
    correctAnswer: "SUMIFS(TransactionTable[Amount], TransactionTable[StatementLine], \"COGS\")",
    distractors: [
      "SUMIF(C:C, \"COGS\", TransactionTable[Amount])",
      "SUM(TransactionTable[Amount]=\"COGS\")",
      "AVERAGEIFS(TransactionTable[Amount], TransactionTable[StatementLine], \"COGS\")"
    ],
    explanation: "SUMIFS with table columns and exact criteria is the standard.",
    objectiveTags: ["SUMIFS", "aggregation", "structured-references"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Three-Statement Automation",
    prompt: "If Assets − (Liabilities + Equity) = 1.25, what should your model do?",
    correctAnswer: "Surface a red validation flag with guidance",
    distractors: [
      "Hide the error until month-end",
      "Round to 0 and move on",
      "Delete the outlier row"
    ],
    explanation: "Professional models never hide tie breaks; they guide fixes.",
    objectiveTags: ["validation", "error-handling", "professional-standards"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Three-Statement Automation",
    prompt: "Best way to document assumptions for investors?",
    correctAnswer: "A short, labeled block near KPIs with scenario notes",
    distractors: [
      "A long email chain",
      "Hidden comments on random cells",
      "No documentation to keep it clean"
    ],
    explanation: "Concise, visible documentation builds trust and speeds review.",
    objectiveTags: ["documentation", "transparency", "investor-communication"]
  }
];

const lesson06Questions: Unit03Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard Development",
    prompt: "Best practice for switching Base/Stretch/Downside safely:",
    correctAnswer: "XLOOKUP([@Scenario], Driver[Name], Driver[Value], \"Missing\") with IFNA",
    distractors: [
      "VLOOKUP([@Scenario], Driver, 2, TRUE) for flexibility",
      "INDEX(Driver[Value], MATCH([@Scenario], Driver[Name], 1))",
      "Manual copy/paste driver values into each sheet"
    ],
    explanation: "Exact-match with an if_not_found fallback avoids wrong matches and #N/A during demos.",
    objectiveTags: ["XLOOKUP", "scenario-analysis", "error-handling"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard Development",
    prompt: "To keep charts stable as data grows, link them to:",
    correctAnswer: "Excel Tables and structured references",
    distractors: [
      "Fixed ranges ($B$2:$B$50)",
      "Hidden named ranges with fixed rows",
      "A separate workbook with pasted values"
    ],
    explanation: "Tables auto-expand and keep visuals accurate under new rows.",
    objectiveTags: ["charts", "tables", "dynamic-ranges"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard Development",
    prompt: "Which validation is most important for investor trust?",
    correctAnswer: "A=L+E tie, NI→RE rollforward, and cash reconciliation flags",
    distractors: [
      "Conditional coloring of headings only",
      "A long formula note on a hidden tab",
      "Emailing the workbook for review later"
    ],
    explanation: "Visible, automatic checks prove the model ties and updates correctly.",
    objectiveTags: ["validation", "integration", "investor-communication"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard Development",
    prompt: "When scenario name is misspelled, your model should:",
    correctAnswer: "Show a friendly message using IFNA/IFERROR and keep charts stable",
    distractors: [
      "Return #N/A throughout the dashboard",
      "Silently switch to Base assumptions",
      "Freeze calculation until corrected"
    ],
    explanation: "Graceful handling prevents confusion and preserves trust during live demos.",
    objectiveTags: ["error-handling", "user-experience", "robustness"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard Development",
    prompt: "KPI choices for decision-readiness should emphasize:",
    correctAnswer: "Runway, margin, current ratio, cash coverage",
    distractors: [
      "All ratios available in textbooks",
      "Only profit, because it looks good",
      "Advanced volatility metrics unrelated to the business"
    ],
    explanation: "Choose indicators that directly influence go/no-go decisions.",
    objectiveTags: ["KPIs", "metrics", "decision-making"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard Development",
    prompt: "Which is a common integration mistake?",
    correctAnswer: "Charts referencing static ranges",
    distractors: [
      "Using named ranges for clarity",
      "Showing validation badges on the dashboard",
      "Using exact-match lookups"
    ],
    explanation: "Static ranges go stale and break visuals.",
    objectiveTags: ["common-errors", "charts", "best-practices"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard Development",
    prompt: "To improve auditability, you should:",
    correctAnswer: "Name critical inputs/outputs and keep formulas readable",
    distractors: [
      "Hide all intermediate calculations",
      "Use one mega-formula for the whole model",
      "Delete comments and headers"
    ],
    explanation: "Named ranges and clear structure help others review quickly.",
    objectiveTags: ["auditability", "documentation", "maintainability"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard Development",
    prompt: "A dashboard that is investor-ready shows:",
    correctAnswer: "Clarity, reliability, and auditability in one page",
    distractors: [
      "A separate sheet for each metric",
      "Hidden macros that run behind the scenes",
      "Only a single big number without context"
    ],
    explanation: "One page that updates live and proves correctness earns trust.",
    objectiveTags: ["dashboards", "investor-communication", "professional-standards"]
  }
];

const lesson07Questions: Unit03Phase5Question[] = [
  {
    id: "lesson07-q1",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Audit, Review, & Investor Presentation",
    prompt: "A chart stops updating when new rows are added. Most likely cause?",
    correctAnswer: "The chart references a static range instead of a Table",
    distractors: [
      "Too many colors in the chart",
      "The sheet is protected",
      "The file name changed"
    ],
    explanation: "Charts must bind to structured references (Tables) to auto-expand.",
    objectiveTags: ["charts", "troubleshooting", "tables"]
  },
  {
    id: "lesson07-q2",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Audit, Review, & Investor Presentation",
    prompt: "Which message is clearer for users when a lookup fails?",
    correctAnswer: "IFNA returns 'Scenario not found — check name'",
    distractors: [
      "Leave #N/A visible so users can guess",
      "Replace with zero silently",
      "Hide the entire row"
    ],
    explanation: "Clear, specific error messages help users fix issues and trust the model.",
    objectiveTags: ["error-handling", "user-experience", "clarity"]
  }
];

export const unit03Phase5QuestionBank: Unit03Phase5Question[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions
];

export function getUnit03Phase5Questions(filter?: Unit03Phase5Filter): Unit03Phase5Question[] {
  const { lessonIds, tags } = filter ?? {};

  return unit03Phase5QuestionBank.filter(question => {
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

export function drawRandomUnit03Phase5Questions(count: number, filter?: Unit03Phase5Filter): Unit03Phase5Question[] {
  const available = getUnit03Phase5Questions(filter);
  if (count >= available.length) {
    return shuffle(available);
  }
  return shuffle(available).slice(0, count);
}

export function toComprehensionCheckItems(questions: Unit03Phase5Question[]): ComprehensionCheckItem[] {
  return questions.map(question => ({
    id: question.id,
    question: question.prompt,
    answers: [question.correctAnswer, ...question.distractors],
    explanation: question.explanation
  }));
}

export function getUnit03Phase5ComprehensionCheckItems(filter?: Unit03Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(getUnit03Phase5Questions(filter));
}

export function drawUnit03Phase5ComprehensionCheckItems(count: number, filter?: Unit03Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(drawRandomUnit03Phase5Questions(count, filter));
}
