export type Unit02LessonId =
  | "lesson01"
  | "lesson02"
  | "lesson03"
  | "lesson04"
  | "lesson05"
  | "lesson06"
  | "lesson07";

export interface Unit02Phase5Question {
  id: string;
  lessonId: Unit02LessonId;
  lessonTitle: string;
  prompt: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
  objectiveTags: string[];
}

export interface Unit02Phase5Filter {
  lessonIds?: Unit02LessonId[];
  tags?: string[];
}

export interface ComprehensionCheckItem {
  id: string;
  question: string;
  answers: string[];
  explanation: string;
}

const lesson01Questions: Unit02Phase5Question[] = [
  {
    id: "lesson01-q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Month-End Wizard Vision",
    prompt: "Based on Sarah's experience, what is the primary business risk of scaling a company with manual month-end processes?",
    correctAnswer: "Administrative time grows exponentially with complexity, limiting growth and increasing errors",
    distractors: [
      "Computers will run out of storage space for transaction data over time",
      "Manual processes require hiring employees, increasing labor costs significantly",
      "Clients prefer businesses using the latest technology for competitive advantages"
    ],
    explanation: "Manual processes don't scale linearly - as Sarah discovered, more transactions create exponentially more complexity, errors, and time requirements. This becomes a growth bottleneck that can prevent business expansion.",
    objectiveTags: ["automation-analysis", "business-risk"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Month-End Wizard Vision",
    prompt: "What makes Sarah's automation goal ('two days to two hours') a well-designed business objective?",
    correctAnswer: "It is specific, measurable, achievable, and directly addresses the core problem",
    distractors: [
      "It focuses on using the latest technology to impress potential investors",
      "It eliminates all human involvement in the month-end closing process",
      "It guarantees Sarah will never have accounting errors in the future"
    ],
    explanation: "Sarah's goal follows SMART criteria: Specific (month-end closing), Measurable (2 days to 2 hours), Achievable (through automation), Relevant (addresses her core problem), and Time-bound (for each month-end).",
    objectiveTags: ["goal-setting", "smart-objectives"]
  },
  {
    id: "lesson01-q3",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Month-End Wizard Vision",
    prompt: "According to Marcus Rodriguez's advice, what is the most important factor to consider when evaluating automation opportunities?",
    correctAnswer: "The opportunity cost of time spent on tasks that machines do better",
    distractors: [
      "The upfront cost of purchasing new software and technology systems",
      "The risk that automation might eliminate jobs and reduce employment",
      "The complexity of learning new technology and training employees to use"
    ],
    explanation: "Marcus emphasized that time is Sarah's most valuable asset. The key insight is recognizing when human time is being wasted on tasks that machines can perform more accurately and efficiently.",
    objectiveTags: ["opportunity-cost", "automation-strategy"]
  },
  {
    id: "lesson01-q4",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Month-End Wizard Vision",
    prompt: "Which of the following best explains why Sarah's 'weekend nightmare' was actually valuable for her business development?",
    correctAnswer: "It provided firsthand experience, making the business case for automation compelling",
    distractors: [
      "It taught her that manual processes are always better for accuracy",
      "It showed her that working longer hours is the best way to handle growth",
      "It demonstrated that month-end closing should be avoided in small businesses"
    ],
    explanation: "Experiencing the pain of manual processes gave Sarah specific insights into where automation would provide the highest value. This firsthand knowledge is crucial for designing effective solutions.",
    objectiveTags: ["problem-identification", "business-development"]
  },
  {
    id: "lesson01-q5",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Month-End Wizard Vision",
    prompt: "What is the most important lesson from this unit for future entrepreneurs?",
    correctAnswer: "Identify and solve process bottlenecks early, before they limit growth",
    distractors: [
      "Always choose the most expensive automation technology to ensure results",
      "Avoid using any manual processes in business operations from the start",
      "Focus only on revenue-generating activities and outsource administrative work"
    ],
    explanation: "The key entrepreneurial lesson is proactive problem-solving: identify inefficiencies while they're manageable and implement scalable solutions before they become major constraints on growth.",
    objectiveTags: ["entrepreneurship", "proactive-planning"]
  }
];

const lesson02Questions: Unit02Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accruals and Deferrals",
    prompt: "A business receives $3,000 cash for a 12-month service contract. The correct initial entry is:",
    correctAnswer: "Debit Cash $3,000, Credit Deferred Revenue $3,000",
    distractors: [
      "Debit Cash $3,000, Credit Service Revenue $3,000",
      "Debit Accounts Receivable $3,000, Credit Service Revenue $3,000",
      "Debit Service Revenue $3,000, Credit Cash $3,000"
    ],
    explanation: "When cash is received before services are performed, the business has a liability (Deferred Revenue) to perform those services. Revenue is recognized as the service is delivered over the 12 months.",
    objectiveTags: ["deferred-revenue", "accrual-accounting"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accruals and Deferrals",
    prompt: "After one month of the above contract, the adjusting entry should be:",
    correctAnswer: "Debit Deferred Revenue $250, Credit Service Revenue $250",
    distractors: [
      "Debit Service Revenue $250, Credit Deferred Revenue $250",
      "Debit Cash $250, Credit Service Revenue $250",
      "Debit Deferred Revenue $3,000, Credit Service Revenue $3,000"
    ],
    explanation: "Each month, 1/12 of the contract ($3,000 ÷ 12 = $250) is earned. The liability (Deferred Revenue) decreases and revenue is recognized.",
    objectiveTags: ["adjusting-entries", "revenue-recognition"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accruals and Deferrals",
    prompt: "Sarah completed $800 of work in March but will not invoice until April. The March 31 adjusting entry is:",
    correctAnswer: "Debit Accounts Receivable $800, Credit Service Revenue $800",
    distractors: [
      "Debit Cash $800, Credit Service Revenue $800",
      "Debit Service Revenue $800, Credit Accounts Receivable $800",
      "No entry is needed until the invoice is sent"
    ],
    explanation: "Under accrual accounting, revenue is recorded when earned, not when billed. Sarah earned this revenue in March by completing the work, creating a receivable (asset) and revenue.",
    objectiveTags: ["accrued-revenue", "revenue-recognition"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accruals and Deferrals",
    prompt: "A company paid $600 on March 1 for a 3-month insurance policy. The March 31 adjusting entry should include:",
    correctAnswer: "Debit Insurance Expense $200, Credit Prepaid Insurance $200",
    distractors: [
      "Debit Prepaid Insurance $600, Credit Cash $600",
      "Debit Insurance Expense $600, Credit Cash $600",
      "Debit Insurance Expense $200, Credit Cash $200"
    ],
    explanation: "The cash payment was already recorded as Prepaid Insurance (asset). Each month, 1/3 of the cost ($600 ÷ 3 = $200) is expensed. Debit Insurance Expense and credit Prepaid Insurance to reduce the asset.",
    objectiveTags: ["deferred-expense", "prepaid-items"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accruals and Deferrals",
    prompt: "If a company forgets to record $500 of accrued revenue, what happens to net income?",
    correctAnswer: "Net income is understated by $500",
    distractors: [
      "Net income is overstated by $500",
      "Net income is not affected because no cash moved",
      "Only the balance sheet is affected, not net income"
    ],
    explanation: "Missing accrued revenue means revenue is $500 too low. Since revenue increases net income, net income is also understated by $500.",
    objectiveTags: ["accrued-revenue", "financial-statement-impact"]
  }
];

const lesson03Questions: Unit02Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "Which of the following is a temporary account that must be closed at the end of the period?",
    correctAnswer: "Service Revenue",
    distractors: [
      "Cash",
      "Accounts Payable",
      "Retained Earnings"
    ],
    explanation: "Service Revenue is a temporary account — it tracks revenue for one period and resets to zero. Cash, Accounts Payable, and Retained Earnings are permanent accounts that carry forward.",
    objectiveTags: ["temporary-accounts", "account-classification"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "A company has Service Revenue of $15,000, Rent Expense of $4,000, and Salaries Expense of $6,000. After completing Steps 1 and 2 of the closing process, what is the balance in Income Summary?",
    correctAnswer: "$5,000 credit balance",
    distractors: [
      "$5,000 debit balance",
      "$25,000 credit balance",
      "$0 — it has already been closed"
    ],
    explanation: "Step 1 credits Income Summary $15,000 (revenues). Step 2 debits Income Summary $10,000 ($4,000 + $6,000 expenses). The balance is $15,000 − $10,000 = $5,000 credit, which represents net income.",
    objectiveTags: ["income-summary", "closing-calculation"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "Why does the closing process use an Income Summary account instead of closing revenue and expenses directly to Retained Earnings?",
    correctAnswer: "It creates a clear audit trail showing how net income was calculated during the closing process",
    distractors: [
      "It is required by the IRS for tax reporting purposes",
      "It prevents errors in the revenue and expense accounts",
      "It allows the company to defer taxes on net income"
    ],
    explanation: "Income Summary provides a visible, auditable record of the net income calculation within the closing entries themselves, making it easy for auditors and managers to verify the closing process.",
    objectiveTags: ["income-summary", "audit-trail"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "After all closing entries are posted, which of the following accounts should have a zero balance?",
    correctAnswer: "Depreciation Expense",
    distractors: [
      "Accumulated Depreciation",
      "Retained Earnings",
      "Accounts Payable"
    ],
    explanation: "Depreciation Expense is a temporary account and is closed to zero. Accumulated Depreciation is a permanent contra-asset account and carries forward. Retained Earnings and Accounts Payable are also permanent.",
    objectiveTags: ["temporary-accounts", "post-closing"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "Sarah's business has beginning Retained Earnings of $8,000, net income of $3,500, and dividends of $1,000. What is the ending Retained Earnings after closing?",
    correctAnswer: "$10,500",
    distractors: [
      "$11,500",
      "$12,500",
      "$8,000"
    ],
    explanation: "Ending RE = Beginning RE + Net Income − Dividends = $8,000 + $3,500 − $1,000 = $10,500.",
    objectiveTags: ["retained-earnings", "closing-calculation"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "What is the correct first step in the closing process?",
    correctAnswer: "Debit all revenue accounts and credit Income Summary for the total",
    distractors: [
      "Credit all expense accounts and debit Income Summary for the total",
      "Debit Retained Earnings and credit Dividends",
      "Debit Income Summary and credit Retained Earnings"
    ],
    explanation: "Step 1 closes revenue accounts. Since revenues have credit balances, they are debited to zero them out, and Income Summary is credited for the total.",
    objectiveTags: ["closing-sequence", "journal-entries"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "Dividends of $800 are closed by which entry?",
    correctAnswer: "Debit Retained Earnings $800, Credit Dividends $800",
    distractors: [
      "Debit Dividends $800, Credit Retained Earnings $800",
      "Debit Income Summary $800, Credit Dividends $800",
      "Debit Dividends $800, Credit Income Summary $800"
    ],
    explanation: "Dividends have a debit balance. To close, credit Dividends to zero it out and debit Retained Earnings to reduce equity.",
    objectiveTags: ["dividends", "closing-entries"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "What is the primary purpose of closing entries at the end of an accounting period?",
    correctAnswer: "Reset temporary accounts to zero and transfer net income to permanent equity",
    distractors: [
      "Correct errors made during the accounting period",
      "Calculate the depreciation expense for assets",
      "Record all cash transactions that occurred during the period"
    ],
    explanation: "Closing entries transfer the balances from temporary accounts (revenues and expenses) to permanent equity accounts and reset the temporary accounts to zero for the next period.",
    objectiveTags: ["closing-purpose", "accounting-cycle"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "Which account types are permanent and do NOT get closed?",
    correctAnswer: "Assets, liabilities, and equity accounts",
    distractors: [
      "Revenue and expense accounts",
      "Dividends and retained earnings",
      "Income Summary and revenue accounts"
    ],
    explanation: "Assets, liabilities, and equity (including Retained Earnings) are permanent accounts that carry their balances forward. Revenue, expenses, and dividends are temporary and must be closed.",
    objectiveTags: ["permanent-accounts", "account-classification"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Closing Entries: Resetting Temporary Accounts",
    prompt: "After closing, Income Summary should have what balance?",
    correctAnswer: "$0 — it is a temporary account used only during closing",
    distractors: [
      "The net income amount for the period",
      "The total revenue amount",
      "The same balance as Retained Earnings"
    ],
    explanation: "Income Summary exists only during the closing process. After Step 3 (closing Income Summary to Retained Earnings), it should have a zero balance.",
    objectiveTags: ["income-summary", "post-closing"]
  }
];

const lesson04Questions: Unit02Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "What is the correct order of the month-end close workflow?",
    correctAnswer: "Unadjusted TB → Adjusting entries → Adjusted TB → Financial statements → Closing entries → Post-closing TB",
    distractors: [
      "Adjusting entries → Closing entries → Unadjusted TB → Financial statements → Post-closing TB",
      "Unadjusted TB → Financial statements → Adjusting entries → Closing entries → Post-closing TB",
      "Closing entries → Adjusting entries → Unadjusted TB → Adjusted TB → Financial statements"
    ],
    explanation: "The month-end close follows a strict sequence: start with the unadjusted trial balance, record all adjustments, prepare the adjusted trial balance, create financial statements, close temporary accounts, and finish with the post-closing trial balance.",
    objectiveTags: ["close-sequence", "accounting-cycle"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "Why must adjusting entries be recorded before closing entries?",
    correctAnswer: "Because closing entries zero out temporary accounts, and any missed adjustment would permanently misstate net income",
    distractors: [
      "Because the bank requires adjustments before accepting deposits",
      "Because Excel formulas will break if the order is wrong",
      "Because the IRS requires a specific order for tax filings"
    ],
    explanation: "Closing entries zero out all revenue and expense accounts. If an adjustment is missed, the temporary accounts are already at zero and the error flows into Retained Earnings. Adjustments must be complete before closing begins.",
    objectiveTags: ["adjusting-entries", "close-sequence"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "Which of the following is NOT a recurring month-end adjustment?",
    correctAnswer: "Owner's initial investment of cash into the business",
    distractors: [
      "Depreciation on equipment",
      "Accrued wages for the last week of the month",
      "Supplies used during the month"
    ],
    explanation: "An owner's investment is a regular transaction recorded when it occurs, not a month-end adjustment. Depreciation, accrued wages, and supplies used are all recurring adjustments that must be caught during the close.",
    objectiveTags: ["adjustment-identification", "recurring-items"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "Sarah's unadjusted trial balance shows Supplies of $8,000. A physical count shows $2,500 remaining. What is the adjusting entry?",
    correctAnswer: "Debit Supplies Expense $5,500; Credit Supplies $5,500",
    distractors: [
      "Debit Supplies $5,500; Credit Supplies Expense $5,500",
      "Debit Supplies Expense $2,500; Credit Supplies $2,500",
      "No entry needed—Supplies is an asset account"
    ],
    explanation: "Supplies used = $8,000 - $2,500 = $5,500. Debit Supplies Expense to record the cost of supplies consumed; credit Supplies to reduce the asset to its actual remaining balance.",
    objectiveTags: ["adjusting-entries", "supplies"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "Equipment costs $24,000 with a 5-year life and no salvage value. What is the monthly depreciation entry?",
    correctAnswer: "Debit Depreciation Expense $400; Credit Accumulated Depreciation $400",
    distractors: [
      "Debit Equipment $400; Credit Cash $400",
      "Debit Depreciation Expense $4,800; Credit Equipment $4,800",
      "Debit Accumulated Depreciation $400; Credit Depreciation Expense $400"
    ],
    explanation: "Monthly depreciation = ($24,000 - $0) / 60 months = $400. Debit Depreciation Expense to record the cost; credit Accumulated Depreciation (a contra-asset) to track cumulative depreciation.",
    objectiveTags: ["depreciation", "adjusting-entries"]
  },
  {
    id: "lesson04-q6",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "Which accounts appear on the post-closing trial balance?",
    correctAnswer: "Only permanent accounts: assets, liabilities, and equity",
    distractors: [
      "All accounts including revenue, expenses, and dividends",
      "Only revenue and expense accounts",
      "Only cash and bank accounts"
    ],
    explanation: "After closing, all temporary accounts (revenue, expenses, dividends) have zero balances. Only permanent accounts—assets, liabilities, and equity—remain with balances on the post-closing trial balance.",
    objectiveTags: ["post-closing", "permanent-accounts"]
  },
  {
    id: "lesson04-q7",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "If Sarah forgot to record $1,800 of accrued wages, what is the effect on net income?",
    correctAnswer: "Net income is overstated by $1,800",
    distractors: [
      "Net income is understated by $1,800",
      "Net income is not affected because no cash was paid",
      "Only the balance sheet is affected"
    ],
    explanation: "Without the accrued wages entry, Wages Expense is $1,800 too low. Since expenses are understated, net income is overstated by $1,800. The balance sheet is also affected—Wages Payable is understated.",
    objectiveTags: ["financial-statement-impact", "accrued-expenses"]
  },
  {
    id: "lesson04-q8",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "What is the purpose of the adjusted trial balance?",
    correctAnswer: "To verify debits equal credits after adjustments and serve as the source for financial statements",
    distractors: [
      "To close the temporary accounts to Retained Earnings",
      "To record the adjusting entries for the first time",
      "To prepare the bank reconciliation"
    ],
    explanation: "The adjusted trial balance confirms the accounting equation is still in balance after all adjusting entries. It also provides the account balances used to prepare the income statement, statement of retained earnings, and balance sheet.",
    objectiveTags: ["adjusted-trial-balance", "close-sequence"]
  },
  {
    id: "lesson04-q9",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "TechStart received $2,400 in advance for a 2-month project. By month-end, one month is complete. What is the adjusting entry?",
    correctAnswer: "Debit Unearned Revenue $1,200; Credit Service Revenue $1,200",
    distractors: [
      "Debit Service Revenue $1,200; Credit Unearned Revenue $1,200",
      "Debit Cash $1,200; Credit Service Revenue $1,200",
      "No entry needed—cash was already recorded"
    ],
    explanation: "Half of the advance ($2,400 / 2 = $1,200) has been earned. Debit Unearned Revenue to reduce the liability; credit Service Revenue to recognize the earned portion.",
    objectiveTags: ["deferred-revenue", "adjusting-entries"]
  },
  {
    id: "lesson04-q10",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Complete Manual Month-End Flow",
    prompt: "After the adjusted trial balance shows debits of $142,300 and credits of $141,900, what should Sarah do?",
    correctAnswer: "Find and correct the error before preparing financial statements",
    distractors: [
      "Proceed to financial statements—the $400 difference is small enough",
      "Close the temporary accounts immediately",
      "Record a $400 adjusting entry to force the balance"
    ],
    explanation: "The adjusted trial balance must balance exactly. A $400 difference means there is an error. Sarah must find and fix it before proceeding—financial statements from an unbalanced trial balance will be wrong.",
    objectiveTags: ["trial-balance", "error-detection"]
  }
];

const lesson05Questions: Unit02Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "Why are named ranges safer than hard-coded cell references like A2:A50 in an automation workbook?",
    correctAnswer: "Named ranges follow the data when rows are inserted or deleted, so formulas do not break",
    distractors: [
      "Named ranges make the workbook file smaller",
      "Named ranges prevent users from seeing the formulas",
      "Named ranges automatically fix calculation errors"
    ],
    explanation: "When you insert or delete rows, hard-coded ranges like A2:A50 point to the wrong cells. Named ranges adjust automatically, keeping formulas connected to the correct data.",
    objectiveTags: ["named-ranges", "workbook-design"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "What is the most important reason to separate input areas from calculation blocks?",
    correctAnswer: "So users cannot accidentally overwrite formulas when entering data",
    distractors: [
      "Because Excel requires inputs and formulas on different sheets",
      "So the workbook prints more cleanly",
      "Because named ranges only work on separate sheets"
    ],
    explanation: "If users type data into cells that contain formulas, the automation breaks. Physically separating and color-coding input areas prevents this common error.",
    objectiveTags: ["input-areas", "workbook-design"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "What should the verification checkpoint cell check before the close flow completes?",
    correctAnswer: "That total adjusting debits equal total adjusting credits",
    distractors: [
      "That the workbook is saved as .xlsm format",
      "That all cells are formatted with the same font",
      "That the button is visible on the sheet"
    ],
    explanation: "The fundamental accounting rule is that debits must equal credits. A verification checkpoint that confirms this proves the automation produced valid results.",
    objectiveTags: ["verification", "accounting-integrity"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "What file format must the workbook be saved in to support macro buttons?",
    correctAnswer: ".xlsm (Excel Macro-Enabled Workbook)",
    distractors: [
      ".xlsx (standard Excel workbook)",
      ".csv (comma-separated values)",
      ".pdf (portable document format)"
    ],
    explanation: "Standard .xlsx files cannot store macros. The workbook must be saved as .xlsm to preserve the button-triggered automation.",
    objectiveTags: ["macro-basics", "file-formats"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "Which manual step does the button-triggered flow replace?",
    correctAnswer: "Running the six-step close checklist in order by hand every month",
    distractors: [
      "Deciding which accounting principle to apply",
      "Reading the financial statements",
      "Choosing the fiscal year-end date"
    ],
    explanation: "The button automates the repetitive sequence of the close checklist. It does not replace accounting judgment—only the mechanical execution of known steps.",
    objectiveTags: ["automation-purpose", "manual-vs-automated"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "The CloseStatus cell shows 'Error—check flagged items.' What should the user do first?",
    correctAnswer: "Check the verification checkpoint to see which step failed the debits-equal-credits test",
    distractors: [
      "Delete the workbook and start over",
      "Ignore the error and present the numbers anyway",
      "Change the button color to make it more visible"
    ],
    explanation: "The CloseStatus is a signal that the verification checkpoint found a problem. The user should trace back to find which adjusting entry or calculation caused the mismatch.",
    objectiveTags: ["error-handling", "troubleshooting"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "What is the most common failure mode for a button-triggered macro flow?",
    correctAnswer: "The macro references cells that moved or were renamed, causing it to run on the wrong data",
    distractors: [
      "The button is the wrong color and users cannot find it",
      "Excel does not support buttons in workbooks",
      "Macros always delete the original data when they run"
    ],
    explanation: "Hard-coded cell references break when someone inserts a row or renames a sheet. Named ranges reduce this risk because they follow the data even when cells move.",
    objectiveTags: ["common-errors", "macro-basics"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "Which named range naming convention is best for a month-end automation workbook?",
    correctAnswer: "Supplies, PrepaidInsurance, AdjustingEntries—meaningful names that describe the data",
    distractors: [
      "Data1, Data2, Data3—short names that save typing",
      "Sheet1!A1, Sheet1!A2—exact cell addresses",
      "TempRange1, TempRange2—temporary names for testing"
    ],
    explanation: "Meaningful names make the workbook self-documenting. Anyone can understand what each block does without reading the formulas. Generic names provide no context.",
    objectiveTags: ["named-ranges", "workbook-design"]
  },
  {
    id: "lesson05-q9",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "Why should each calculation block be testable independently?",
    correctAnswer: "So you can isolate errors without running the entire flow",
    distractors: [
      "Because Excel requires independent blocks to save the file",
      "So each block can be on a different sheet",
      "Because named ranges only work with independent blocks"
    ],
    explanation: "If Block 2 fails but Block 1 works, you should be able to test Block 1 alone to confirm it is correct. Independent testability makes debugging much faster.",
    objectiveTags: ["calculation-blocks", "testing"]
  },
  {
    id: "lesson05-q10",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Build First Automation Layer",
    prompt: "Which statement best explains the value of the automation you built to someone who did not build it?",
    correctAnswer: "The button runs the same six-step close checklist every month, checks its own work, and tells you immediately if something is wrong",
    distractors: [
      "The workbook has colorful cells and a button that looks professional",
      "The automation replaces all accounting judgment so you never need to think",
      "The file is saved in .xlsm format which is required by the IRS"
    ],
    explanation: "The value is not in appearance or format—it is in reliability. The automation executes a known sequence, verifies its results, and flags problems. That is what makes it trustworthy.",
    objectiveTags: ["communication", "automation-purpose"]
  }
];

const lesson06Questions: Unit02Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Scenario Switching & Dashboards",
    prompt: "Best method to switch scenarios by name without breaking references?",
    correctAnswer: "Driver table + XLOOKUP exact-match with IFNA",
    distractors: [
      "Approximate VLOOKUP on sorted list",
      "Three separate tabs with manual links",
      "A dropdown that only changes colors"
    ],
    explanation: "Exact-match XLOOKUP with a driver table is reliable and transparent; IFNA handles missing names.",
    objectiveTags: ["scenario-switching", "xlookup"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Scenario Switching & Dashboards",
    prompt: "Charts break when data grows. What fixes this?",
    correctAnswer: "Structured references and tables feeding chart series",
    distractors: [
      "Static ranges that are updated monthly",
      "Copying values to a 'Chart Data' tab",
      "Volatile OFFSET formulas everywhere"
    ],
    explanation: "Tables with structured references auto-expand, keeping visuals current.",
    objectiveTags: ["charts", "dynamic-data"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Scenario Switching & Dashboards",
    prompt: "Which validation should appear near the top of the dashboard?",
    correctAnswer: "Missing scenario, stale AsOfDate, negative or >100% rates",
    distractors: [
      "Sheet color theme and font size",
      "User initials for style points",
      "Hidden named ranges and helper cells"
    ],
    explanation: "Visible validation flags catch critical issues early and build trust.",
    objectiveTags: ["dashboard-validation", "data-quality"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Scenario Switching & Dashboards",
    prompt: "You need a fallback when lookup has no match. Which formula addition helps?",
    correctAnswer: "IFNA or IFERROR around XLOOKUP",
    distractors: [
      "Nesting more IFs inside SWITCH",
      "Turning calculation to Manual",
      "Approximate VLOOKUP"
    ],
    explanation: "IFNA/IFERROR returns a readable message instead of #N/A.",
    objectiveTags: ["error-handling", "graceful-failure"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Scenario Switching & Dashboards",
    prompt: "Professional KPI selection for month-end dashboard should prioritize…",
    correctAnswer: "Runway, profit margin, cash coverage days",
    distractors: [
      "Tab count, chart colors, animation speed",
      "Random ratios from textbooks",
      "All available metrics at once"
    ],
    explanation: "Investor-relevant KPIs connect the model to decisions.",
    objectiveTags: ["kpi-selection", "investor-focus"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Scenario Switching & Dashboards",
    prompt: "A student wires a chart directly to raw data that doesn't filter by scenario. Risk?",
    correctAnswer: "Chart won't reflect scenario changes and misleads viewers",
    distractors: [
      "Chart loads faster with fewer formulas",
      "No impact—charts ignore source differences",
      "It auto-detects the SelectedScenario"
    ],
    explanation: "Charts must reference outputs that respond to scenario switching.",
    objectiveTags: ["chart-linkage", "data-integrity"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Scenario Switching & Dashboards",
    prompt: "Which statement fits an investor-ready executive summary?",
    correctAnswer: "Downside margin 18% (target 20%). Cut spend 10%; raise price $2.",
    distractors: [
      "Our team worked very hard this month on Excel.",
      "We have many tabs and colorful charts.",
      "Revenue is good; expenses are okay; we will try our best."
    ],
    explanation: "Be specific, tie to targets, and offer actions.",
    objectiveTags: ["executive-summary", "communication"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Scenario Switching & Dashboards",
    prompt: "INDEX/MATCH vs XLOOKUP for switching—what's a safe pattern?",
    correctAnswer: "INDEX(Map[Value], MATCH(Key, Map[Key], 0)) with exact match",
    distractors: [
      "MATCH without 0 for approximate match",
      "INDEX with a hard-coded row number",
      "MATCH on a formatted text column only"
    ],
    explanation: "Exact-match lookup avoids silent mis-matches. XLOOKUP is simpler, but INDEX/MATCH is fine when used correctly.",
    objectiveTags: ["lookup-functions", "best-practices"]
  }
];

const lesson07Questions: Unit02Phase5Question[] = [
  {
    id: "lesson07-q1",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Audit & QA Readiness",
    prompt: "Which definition best fits 'investor-ready'?",
    correctAnswer: "Clear, reliable, auditable with documented assumptions and concise summary",
    distractors: [
      "Lots of hidden logic with perfect formatting",
      "Only visuals, no formulas",
      "Manual inputs with no checks"
    ],
    explanation: "Investor-ready means trustworthy numbers, transparent logic, and clear communication.",
    objectiveTags: ["investor-readiness", "audit-quality"]
  },
  {
    id: "lesson07-q2",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Audit & QA Readiness",
    prompt: "What is the purpose of reconciliation tie-outs?",
    correctAnswer: "Prove totals match across sources and catch integrity issues",
    distractors: [
      "Make the sheet look nice",
      "Add complexity for advanced users",
      "Speed up volatile functions"
    ],
    explanation: "Tie-outs confirm correctness across systems and prevent hidden errors.",
    objectiveTags: ["reconciliation", "data-integrity"]
  }
];

// Combine all questions
export const allUnit02Phase5Questions: Unit02Phase5Question[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions
];

/**
 * Convert Unit02Phase5Question to ComprehensionCheck format
 */
export function toComprehensionCheckFormat(
  questions: Unit02Phase5Question[]
): ComprehensionCheckItem[] {
  return questions.map(q => ({
    id: q.id,
    question: q.prompt,
    answers: shuffleArray([q.correctAnswer, ...q.distractors]),
    explanation: q.explanation
  }));
}

/**
 * Get questions for a specific lesson
 */
export function getQuestionsForLesson(
  lessonId: Unit02LessonId
): Unit02Phase5Question[] {
  return allUnit02Phase5Questions.filter(q => q.lessonId === lessonId);
}

/**
 * Get questions filtered by tags
 */
export function getQuestionsByTags(tags: string[]): Unit02Phase5Question[] {
  return allUnit02Phase5Questions.filter(q =>
    tags.some(tag => q.objectiveTags.includes(tag))
  );
}

/**
 * Get a random sample of questions
 */
export function getRandomQuestions(
  count: number,
  filter?: Unit02Phase5Filter
): Unit02Phase5Question[] {
  let questions = allUnit02Phase5Questions;

  // Apply filters
  if (filter?.lessonIds) {
    questions = questions.filter(q => filter.lessonIds!.includes(q.lessonId));
  }
  if (filter?.tags) {
    questions = questions.filter(q =>
      filter.tags!.some(tag => q.objectiveTags.includes(tag))
    );
  }

  // Shuffle and take count
  const shuffled = shuffleArray([...questions]);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get lesson metadata
 */
export function getLessonMetadata(lessonId: Unit02LessonId) {
  const questions = getQuestionsForLesson(lessonId);
  const uniqueTags = [...new Set(questions.flatMap(q => q.objectiveTags))];

  return {
    lessonId,
    lessonTitle: questions[0]?.lessonTitle || "",
    questionCount: questions.length,
    objectiveTags: uniqueTags
  };
}

/**
 * Get all lessons metadata
 */
export function getAllLessonsMetadata() {
  const lessonIds: Unit02LessonId[] = [
    "lesson01",
    "lesson02",
    "lesson03",
    "lesson04",
    "lesson05",
    "lesson06",
    "lesson07"
  ];

  return lessonIds.map(id => getLessonMetadata(id));
}