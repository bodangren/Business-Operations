export type Unit01LessonId =
  | "lesson01"
  | "lesson02"
  | "lesson03"
  | "lesson04"
  | "lesson05"
  | "lesson06"
  | "lesson07";

export interface Unit01Phase5Question {
  id: string;
  lessonId: Unit01LessonId;
  lessonTitle: string;
  prompt: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
  objectiveTags: string[];
}

export interface Unit01Phase5Filter {
  lessonIds?: Unit01LessonId[];
  tags?: string[];
}

export interface ComprehensionCheckItem {
  id: string;
  question: string;
  answers: string[];
  explanation: string;
}

const lesson01Questions: Unit01Phase5Question[] = [
  {
    id: "lesson01-q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Smart Ledger Vision",
    prompt: "Why does Sarah's notebook system make investors nervous during due diligence?",
    correctAnswer: "They cannot quickly confirm accuracy, completeness, or math checks from pages of handwriting.",
    distractors: [
      "Handwritten notes use casual language that investors might find too friendly.",
      "Notebooks take up shelf space, which makes the business look disorganized to visitors.",
      "Investors assume any paper ledger proves that Sarah avoids using modern software."
    ],
    explanation:
      "Investors want evidence that records are complete, accurate, and mathematically sound. A handwritten notebook cannot provide instant verification or automated error checks.",
    objectiveTags: ["investor-confidence", "ledger-foundations"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Smart Ledger Vision",
    prompt: "What is the biggest risk of continuing with the current notebook approach as TechStart grows?",
    correctAnswer: "Lack of organized data blocks smart decisions and erodes investor trust as operations scale.",
    distractors: [
      "The handwriting might fade, making older pages hard to read after a few months.",
      "Buying extra notebooks becomes expensive compared with using a free spreadsheet.",
      "Clients could assume Sarah prefers paper invoices instead of online tools."
    ],
    explanation:
      "Without structured records Sarah cannot prove performance, spot trends, or satisfy outside reviewers. That directly blocks growth and funding opportunities.",
    objectiveTags: ["investor-confidence", "decision-readiness"]
  },
  {
    id: "lesson01-q3",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Smart Ledger Vision",
    prompt: "How does a self-auditing ledger directly solve Sarah's main pain points?",
    correctAnswer: "It organizes entries, checks the math, and produces instant dashboards that prove reliability.",
    distractors: [
      "It stores everything in the cloud so Sarah never needs to carry supplies.",
      "It replaces every paper document with an automatic email to investors.",
      "It locks the workbook so no one else can open or review transactions."
    ],
    explanation:
      "A self-auditing system keeps transactions structured, highlights math errors, and surfaces insights immediately. Those features give investors confidence.",
    objectiveTags: ["ledger-foundations", "automation-benefits"]
  },
  {
    id: "lesson01-q4",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Smart Ledger Vision",
    prompt: "Which evidence would most convince an angel investor that Sarah keeps clean books?",
    correctAnswer: "Automated reports with error checks that show every transaction and stay available on demand.",
    distractors: [
      "Neatly written ledger pages organized with colored tabs for each month.",
      "A gallery of receipt photos stored in labeled folders by project name.",
      "A summary spreadsheet that lists dates and amounts without supporting details."
    ],
    explanation:
      "Clean books give instant access, automation, and complete transaction history. Professional investors expect all three items together.",
    objectiveTags: ["investor-confidence", "reporting-clarity"]
  },
  {
    id: "lesson01-q5",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Smart Ledger Vision",
    prompt: "Which understanding is essential before building any professional ledger?",
    correctAnswer: "Every transaction must be categorized consistently so analysis stays accurate and useful.",
    distractors: [
      "Revenue entries belong in one notebook while expenses belong in a second notebook.",
      "Cash transactions matter the most, so other account types can wait until tax season.",
      "Entries should be written in chronological order even if categories are missing."
    ],
    explanation:
      "Professional ledgers rely on precise categories for every transaction. That structure enables correct reporting, insights, and compliance.",
    objectiveTags: ["ledger-foundations", "data-integrity"]
  }
];

const lesson02Questions: Unit01Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accounting Equation",
    prompt: "What equation must always stay true for every business ledger?",
    correctAnswer: "Assets = Liabilities + Equity, the balance all ledgers must follow every day.",
    distractors: [
      "Revenue = Expenses + Profit, the shortcut many small businesses prefer using.",
      "Cash = Income - Expenses, the quick formula Sarah used in her first notebook.",
      "Equity = Assets + Liabilities, the layout found in a personal budget tracker."
    ],
    explanation:
      "The accounting equation Assets = Liabilities + Equity is universal because it keeps every transaction in balance and connects what a company owns, owes, and is worth.",
    objectiveTags: ["accounting-equation", "concept-foundation"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accounting Equation",
    prompt: "Within that equation, what do assets represent for TechStart Solutions?",
    correctAnswer: "They include everything of value the business owns or controls that will bring future benefit.",
    distractors: [
      "They track the personal wealth Sarah keeps outside her business accounts.",
      "They list the monthly bills that TechStart must pay to stay open each week.",
      "They summarize the investor presentations Sarah uses to pitch her services."
    ],
    explanation:
      "Assets cover cash, equipment, inventory, and anything else the company owns that has value or will generate future value.",
    objectiveTags: ["accounting-equation", "assets"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accounting Equation",
    prompt: "TechStart lists $6,000 in assets and $2,000 in liabilities. What is the equity?",
    correctAnswer: "$4,000, because $6,000 in assets minus $2,000 in liabilities leaves $4,000 of ownership value.",
    distractors: [
      "$8,000, because assets and liabilities should be added together for equity.",
      "$6,000, because equity always matches the total assets shown on the balance sheet.",
      "$2,000, because liabilities and equity always mirror each other in every example."
    ],
    explanation:
      "Using Assets = Liabilities + Equity, rearrange to Equity = Assets - Liabilities. With $6,000 in assets and $2,000 in liabilities, equity equals $4,000.",
    objectiveTags: ["accounting-equation", "calculation"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accounting Equation",
    prompt: "Sarah receives $1,500 cash for completed work. What happens inside the equation?",
    correctAnswer: "Cash goes up $1,500 and equity rises $1,500, keeping both sides of the equation balanced.",
    distractors: [
      "Only the cash account changes while liabilities and equity sit still for now.",
      "Liabilities pick up $1,500 because the business now owes extra taxes to the city.",
      "The equation breaks because assets increased even though the work was already finished."
    ],
    explanation:
      "Earning revenue increases assets (cash) and equity by the same amount. The business is more valuable after completing work and receiving payment.",
    objectiveTags: ["accounting-equation", "transactions"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accounting Equation",
    prompt: "Sarah buys $300 of supplies using cash. How does the equation stay balanced?",
    correctAnswer: "One asset category falls by $300 while another asset category rises $300, keeping totals even.",
    distractors: [
      "Total assets climb $300 because supplies add value even when cash drops.",
      "Liabilities increase $300 because Sarah now owes herself for the supplies.",
      "Equity falls $300 because owners absorb every purchase as a loss right away."
    ],
    explanation:
      "The purchase is an asset-to-asset exchange: cash decreases while supplies increase equally, so the equation remains balanced.",
    objectiveTags: ["accounting-equation", "transactions"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accounting Equation",
    prompt: "Why is the accounting equation described as universal across industries?",
    correctAnswer: "Every business must keep the balance between what it owns, owes, and the owner's stake aligned.",
    distractors: [
      "Only technology companies rely on the equation because they scale quickly.",
      "Small businesses can treat the equation as optional until they file taxes.",
      "Public corporations are the only organizations that publish the equation in reports."
    ],
    explanation:
      "No matter the size or industry, double-entry accounting keeps every ledger tied to the same balance relationship.",
    objectiveTags: ["accounting-equation", "concept-foundation"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accounting Equation",
    prompt: "A business reports $10,000 in assets and $3,000 in equity. How much are liabilities?",
    correctAnswer: "$7,000, because liabilities must fill the gap between total assets and total equity.",
    distractors: [
      "$13,000, because assets and equity stack together with liabilities on top.",
      "$10,000, because liabilities should always mirror the value of the assets column.",
      "$3,000, because equity and liabilities remain equal in every transaction set."
    ],
    explanation:
      "Using Assets = Liabilities + Equity, rearrange to Liabilities = Assets - Equity. Plug in the values: $10,000 - $3,000 = $7,000.",
    objectiveTags: ["accounting-equation", "calculation"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Accounting Equation",
    prompt: "Sarah signs a $2,500 business loan that is deposited into the company account. What changes?",
    correctAnswer: "Cash increases $2,500 and liabilities increase $2,500, so the equation stays balanced.",
    distractors: [
      "Only cash changes because a loan adds money without altering other accounts.",
      "Cash rises $2,500 and equity increases $2,500 because investors like the growth plan.",
      "Liabilities fall $2,500 because the bank expects to be repaid over time with interest."
    ],
    explanation:
      "Borrowing money raises assets (cash) and liabilities by the same amount. The company now owes the bank, so equity does not change.",
    objectiveTags: ["accounting-equation", "transactions"]
  }
];

const lesson03Questions: Unit01Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Within the DEA LER memory device, which accounts grow when you record a debit?",
    correctAnswer: "Cash, Equipment, and Rent Expense all increase with a debit under the DEA rule.",
    distractors: [
      "Service Revenue, Accounts Payable, and Owner's Capital each expand through debits.",
      "Accounts Payable, Service Revenue, and Cash depend on debit entries to rise.",
      "Owner's Capital, Equipment, and Service Revenue all rely on debit postings to grow."
    ],
    explanation:
      "DEA stands for Dividends, Expenses, and Assets. Those account types increase with debits, while Liabilities, Equity, and Revenue increase with credits.",
    objectiveTags: ["debits-credits", "dea-ler"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Sarah pays $300 for office supplies using cash. What journal entry keeps the accounts accurate?",
    correctAnswer: "Debit Supplies $300 and credit Cash $300 to show the asset exchange clearly.",
    distractors: [
      "Debit Cash $300 and credit Supplies $300 so both accounts increase together.",
      "Debit Supplies Expense $300 and credit Supplies $300 to record the materials cost.",
      "Credit Supplies $300 and debit Accounts Payable $300 to mirror the cash purchase."
    ],
    explanation:
      "Buying supplies with cash increases the Supplies asset and decreases the Cash asset. Record the increase with a debit to Supplies and the decrease with a credit to Cash.",
    objectiveTags: ["journal-entries", "debits-credits"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Which description captures the core structure of a T-account?",
    correctAnswer: "Debits appear on the left side and credits appear on the right side in every T-account.",
    distractors: [
      "Assets always live on the right side while liabilities live on the left side of a T-account.",
      "Credits increase every account type, so the right side shows only growth.",
      "The debit side lists what the business owes while the credit side lists what it owns."
    ],
    explanation:
      "Regardless of the account, the left column records debits and the right column records credits. That layout never changes.",
    objectiveTags: ["debits-credits", "t-accounts"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Sarah receives $1,500 from a client but will not start the work until next month. What is the proper entry?",
    correctAnswer: "Debit Cash $1,500 to record the money and credit Deferred Revenue $1,500 to show the obligation.",
    distractors: [
      "Debit Cash $1,500 and credit Service Revenue $1,500 because the cash already arrived.",
      "Debit Accounts Receivable $1,500 and credit Service Revenue $1,500 for future work.",
      "Debit Deferred Revenue $1,500 and credit Cash $1,500 to keep liabilities active."
    ],
    explanation:
      "Cash increases immediately, but revenue is not earned until the service is delivered. Record the liability Deferred Revenue until the work is performed.",
    objectiveTags: ["journal-entries", "liabilities"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "In a trial balance, if total debits equal $25,000, what must total credits equal?",
    correctAnswer: "$25,000, because every debit must be matched by an equal credit in double-entry accounting.",
    distractors: [
      "More than $25,000, so the business can show a positive surplus at month end.",
      "Less than $25,000, because credit balances are usually smaller than debit balances.",
      "Any amount, because totals vary based on the mix of assets and liabilities." 
    ],
    explanation:
      "A trial balance checks that total debits equal total credits. Any mismatch signals an error in the journal entries.",
    objectiveTags: ["trial-balance", "debits-credits"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Which group is most likely to appear in the credit column of a trial balance?",
    correctAnswer: "Accounts Payable, Service Revenue, and Owner's Capital typically carry credit balances.",
    distractors: [
      "Cash, Accounts Receivable, and Equipment usually hold credit balances at month end.",
      "Rent Expense, Supplies, and Advertising Expense all post as credits in the ledger.",
      "Cash, Service Revenue, and Accounts Payable each show debits in the trial balance."
    ],
    explanation:
      "Liabilities, equity, and revenue accounts have normal credit balances, so they appear in the credit column.",
    objectiveTags: ["trial-balance", "debits-credits"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Sarah buys $2,000 of equipment, paying $800 cash and signing a note for the rest. How many accounts change?",
    correctAnswer: "Three accounts change: Equipment debits $2,000, Cash credits $800, Notes Payable credits $1,200.",
    distractors: [
      "Two accounts change: Equipment debits $2,000 and Cash credits $2,000 for the purchase.",
      "Two accounts change: Equipment debits $2,000 and Notes Payable credits $2,000 total.",
      "Four accounts change: Equipment, Cash, Notes Payable, and Accounts Payable all move together."
    ],
    explanation:
      "The equipment asset increases, cash decreases for the amount paid, and a liability is created for the remainder owed to the lender.",
    objectiveTags: ["journal-entries", "analysis"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Why is the rule 'debits must equal credits' essential for Sarah's self-auditing ledger?",
    correctAnswer: "Balanced totals keep the accounting equation aligned and spotlight errors as soon as they appear.",
    distractors: [
      "It matches a GAAP requirement that only applies when a company goes public.",
      "It keeps the ledger looking neat and tidy when investors read the report.",
      "It reduces the volume of paperwork Sarah needs to store in the office."
    ],
    explanation:
      "If debits and credits match, the accounting equation stays balanced. Any difference alerts Sarah to missing or incorrect entries immediately.",
    objectiveTags: ["ledger-foundations", "trial-balance"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Which scenario correctly applies debit and credit rules?",
    correctAnswer: "Paying rent decreases Cash with a credit and increases Rent Expense with a debit.",
    distractors: [
      "Earning revenue increases Cash with a credit and increases Service Revenue with a debit.",
      "Buying supplies increases Supplies with a credit and decreases Cash with a debit.",
      "Taking a loan increases Cash with a debit and decreases Notes Payable with a credit."
    ],
    explanation:
      "Expenses increase with debits and assets decrease with credits. Paying rent follows that exact pattern.",
    objectiveTags: ["debits-credits", "transactions"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Debit and Credit Rules",
    prompt: "Why is Sarah's T-account system stronger than the handwritten notebooks she used before?",
    correctAnswer: "It organizes data, enforces balanced totals, and proves professional skill to outside reviewers.",
    distractors: [
      "It takes less time to maintain, even if the math checks happen after each month closes.",
      "It uses fewer worksheet pages, which saves on printing and storage costs.",
      "It removes the need for transaction descriptions because numbers stand on their own."
    ],
    explanation:
      "T-accounts combine structure with automatic balance checks, showcasing professional accounting discipline to lenders and investors.",
    objectiveTags: ["investor-confidence", "ledger-foundations"]
  }
];

const lesson04Questions: Unit01Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "Why do structured references such as Table[Account] build more investor trust than A1:A500 ranges?",
    correctAnswer: "They expand automatically, read like plain language, and make audits far easier to complete.",
    distractors: [
      "They force every workbook to load faster by reducing the amount of stored data.",
      "They meet a legal requirement that blocks anyone else from editing the workbook.",
      "They hide the rows from outside reviewers so formulas cannot be changed accidentally."
    ],
    explanation:
      "Structured references scale with new rows, show intent in clear text, and support transparent auditing-key signals of a trustworthy model.",
    objectiveTags: ["excel-automation", "investor-confidence"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt:
      `An investor asks for revenue from clients whose names include the word "Tech." Which formula responds instantly?`,
    correctAnswer:
      `=SUMIF(LedgerTable[Description], "*Tech*", LedgerTable[Credit]) sums the matching credit entries.`,
    distractors: [
      `=SUMIF(LedgerTable[Account], "*Tech*", LedgerTable[Debit]) adds every debit with the word Tech.`,
      `=COUNTIF(LedgerTable[Description], "Tech") counts rows instead of summarizing the amounts.`,
      `=VLOOKUP("Tech", LedgerTable, 3, FALSE) returns only the first exact match in the sheet.`
    ],
    explanation:
      "SUMIF with wildcards filters description text for partial matches and adds the associated credit amounts that represent revenue.",
    objectiveTags: ["excel-automation", "revenue-analysis"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "What major business risk do Excel Tables plus SUMIF formulas remove for startups like TechStart?",
    correctAnswer: "They eliminate manual math mistakes that can damage decisions and credibility with investors.",
    distractors: [
      "They guarantee every tax form is filed perfectly without reviewing the results.",
      "They create colorful dashboards that help the team feel excited about the data.",
      "They allow anyone to access the file from any laptop without sending invitations."
    ],
    explanation:
      "Automation ensures calculations stay accurate as data grows, protecting decision quality and outside trust.",
    objectiveTags: ["excel-automation", "risk-management"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "A CFO uses SUMIFs to subtract credits from debits for Accounts Receivable. What insight appears?",
    correctAnswer: "It shows how much customers currently owe the company and whether follow-up is needed soon.",
    distractors: [
      "It reveals what the company owes to suppliers for the upcoming quarter.",
      "It calculates the company's total revenue for the current reporting period.",
      "It reports the exact cash balance available in the operating bank account."
    ],
    explanation:
      "Accounts Receivable increases with debits and decreases with credits. Netting them displays the outstanding customer balance.",
    objectiveTags: ["excel-automation", "accounts-receivable"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "In an interview, how should you defend SUMIF formulas over manual calculators?",
    correctAnswer: "They deliver consistent math, scale with more data, and leave a visible logic trail reviewers can trust.",
    distractors: [
      "They add formulas to the sheet, which looks more professional than blank cells.",
      "They take less time to type than entering numbers on a handheld calculator.",
      "They remove the need to explain how results connect to each source of data."
    ],
    explanation:
      "Professionals value accuracy, scalability, and transparency. SUMIF formulas deliver all three benefits.",
    objectiveTags: ["excel-automation", "career-readiness"]
  },
  {
    id: "lesson04-q6",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "A $5,000 expense was entered as revenue. What does a trial balance built on Tables and SUMIFs show?",
    correctAnswer: "The totals will not balance, signaling the error so Sarah can correct the wrong posting.",
    distractors: [
      "The trial balance will still balance because every error cancels itself eventually.",
      "The formulas rewrite the transaction automatically so no one notices the mistake.",
      "Nothing changes because Excel ignores data entry errors if the numbers look reasonable."
    ],
    explanation:
      "Recording an expense as revenue reverses the debit/credit pattern. The imbalance appears immediately in a well-built trial balance.",
    objectiveTags: ["excel-automation", "error-detection"]
  },
  {
    id: "lesson04-q7",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "Which situation proves Excel Tables are essential for scaling beyond the startup stage?",
    correctAnswer: "Adding hundreds of transactions and watching every linked SUMIF update without touching formulas.",
    distractors: [
      "Locking the workbook so competitors cannot view the company's private data tools.",
      "Changing color palettes quickly when preparing slides for a new investor pitch.",
      "Reducing file size so the spreadsheet loads instantly on older classroom laptops."
    ],
    explanation:
      "Tables and structured references expand automatically, preventing missed rows and keeping automation reliable during rapid growth.",
    objectiveTags: ["excel-automation", "scalability"]
  },
  {
    id: "lesson04-q8",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "An angel investor says the ledger proves Sarah understands financial controls. What features signal that?",
    correctAnswer: "Excel Tables paired with SUMIF formulas that automate checks and surface clean summaries.",
    distractors: [
      "A wide mix of colors, fonts, and icons that make the workbook feel energetic to readers.",
      "Dozens of worksheets separated by topic to keep different data points out of sight.",
      "A front-page logo in the header of every sheet to highlight brand consistency."
    ],
    explanation:
      "Controls rely on automation and error detection. Tables plus SUMIFs demonstrate structured processes that investors respect.",
    objectiveTags: ["investor-confidence", "excel-automation"]
  },
  {
    id: "lesson04-q9",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "Which career path depends most on mastering Excel Tables and SUMIF skills?",
    correctAnswer: "Financial analyst roles that review portfolios and build decision-ready models for clients.",
    distractors: [
      "Graphic design positions focused on social media layouts and branding colors.",
      "Software developer jobs that spend each day writing mobile application code.",
      "Server positions in restaurants that center on taking orders and delivering food."
    ],
    explanation:
      "Financial analysts rely on automated spreadsheets to analyze data and brief decision makers quickly.",
    objectiveTags: ["career-readiness", "excel-automation"]
  },
  {
    id: "lesson04-q10",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Tables and SUMIF",
    prompt: "The Accounts Payable balance shows -$500. What does that reveal about Sarah's payments?",
    correctAnswer: "She overpaid suppliers, so they now owe her $500 and the balance flipped negative.",
    distractors: [
      "She owes suppliers an extra $500 because the system tagged expenses twice in error.",
      "Her cash account must be negative too because every balance moves together inside the ledger.",
      "A SUMIF formula broke, so the workbook is randomly showing a negative number for the month."
    ],
    explanation:
      "Accounts Payable is a liability with a normal credit balance. A negative (debit) balance means suppliers were overpaid and now have to refund Sarah.",
    objectiveTags: ["liability-management", "excel-automation"]
  }
];

const lesson05Questions: Unit01Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "Which formula maps AccountID to AccountName while giving a clear message if the ID is missing?",
    correctAnswer:
      `IFERROR(XLOOKUP([@AccountID], Accounts[AccountID], Accounts[AccountName], "Missing ID"), "Missing ID")`,
    distractors: [
      "VLOOKUP([@AccountID], Accounts, 2, FALSE) because it stops at the exact match and shows #N/A.",
      "INDEX(Accounts[AccountName], MATCH([@AccountID], Accounts[AccountID], 0)) without any error handling.",
      `IFNA(VLOOKUP([@AccountID], Accounts, 2, FALSE), "") so blank cells hide every lookup problem.`
    ],
    explanation:
      "XLOOKUP returns the AccountName with readable structured references. Wrapping it in IFERROR keeps the workbook friendly when an ID is missing.",
    objectiveTags: ["excel-automation", "controls"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "How do you test whether the trial balance is still in balance after a batch of postings?",
    correctAnswer: "Compare SUM(Transactions[Debit]) with SUM(Transactions[Credit]) and confirm they match exactly.",
    distractors: [
      "Compare COUNT(Transactions[Debit]) with COUNT(Transactions[Credit]) to see if volumes match.",
      "Use MAX(Debit) versus MAX(Credit) to make sure the largest entry appears in both columns.",
      "Use AVERAGE(Debit) and AVERAGE(Credit) to verify the typical amount in each column."
    ],
    explanation:
      "Double-entry accounting requires total debits to equal total credits. Summing both columns is the fastest automated check.",
    objectiveTags: ["controls", "trial-balance"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "Why do professionals place every data range inside an Excel Table with structured references?",
    correctAnswer: "Formulas grow with new rows automatically, which prevents silent breaks as the ledger expands.",
    distractors: [
      "Tables calculate faster than any traditional formula, even when the range stays the same.",
      "Tables remove the need for validation tools, so the workbook becomes easier to manage.",
      "Tables hide errors more easily because column names replace all cell references in reports."
    ],
    explanation:
      "Structured references keep formulas dynamic and readable, reducing maintenance risk as the dataset grows.",
    objectiveTags: ["excel-automation", "scalability"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "What data validation rule protects amount fields in a double-entry ledger?",
    correctAnswer: "Allow whole numbers or decimals greater than or equal to zero and flag anything outside that band.",
    distractors: [
      "Allow any number, because the debit or credit column will signal if something looks strange.",
      "Block all numbers above 1,000 so the ledger cannot contain obviously large mistakes.",
      "Allow negative numbers to capture refunds, even though debits and credits already handle direction."
    ],
    explanation:
      "Amounts should be non-negative because the debit/credit column controls direction. Validation keeps data entry tight and trustworthy.",
    objectiveTags: ["controls", "data-validation"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "How do you let reviewers switch between cash and accrual views without breaking formulas?",
    correctAnswer: "Use a single Settings[Method] cell with IF logic so every formula references the same driver.",
    distractors: [
      "Duplicate every worksheet-one for cash, one for accrual-and maintain both by hand.",
      "Use find and replace across all sheets whenever you need to change the reporting method.",
      "Skip the toggle entirely because cash and accrual almost always match by year end."
    ],
    explanation:
      "Central settings prevent inconsistent edits and keep the workbook transparent for reviewers and investors.",
    objectiveTags: ["controls", "reporting-clarity"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "A transaction is missing an AccountID. What should the control system do next?",
    correctAnswer: "Raise a visible warning and exclude the row from final totals until the issue is fixed.",
    distractors: [
      "Ignore it until month end so the team can post the missing value later on.",
      "Insert a guessed value temporarily so the totals keep updating smoothly.",
      "Hide the row by changing the font color to white so investors do not see the problem."
    ],
    explanation:
      "Hiding errors delays decisions. Surfacing the issue and removing it from totals protects integrity.",
    objectiveTags: ["controls", "data-integrity"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "Which SUMIFS structure checks whether every account balances after posting?",
    correctAnswer: "SUMIFS(Transactions[Debit], Transactions[AccountID], [@AccountID]) minus the matching credit SUMIFS.",
    distractors: [
      "SUMIF(Transactions[Debit], [@AccountID]) because a single condition is enough for most ledgers.",
      "COUNTIF(Transactions[AccountID], [@AccountID]) so the system knows how many entries exist per account.",
      "SUMPRODUCT(Transactions[Debit]) to compare the debit column with a manually typed credit total."
    ],
    explanation:
      "Comparing the debit and credit totals for each account should always produce zero. SUMIFS lets you automate that comparison.",
    objectiveTags: ["controls", "excel-automation"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "Which statement captures what investors expect from a control environment?",
    correctAnswer: "Controls are documented, tested with edge cases, and visible so reviewers can follow the logic.",
    distractors: [
      "Formulas stay hidden so other teams cannot copy the company's hard work.",
      "Totals are updated manually each week, even if a formula could do the math." ,
      "Errors are suppressed to keep dashboards clean and avoid distracting questions."
    ],
    explanation:
      "Investors look for clear documentation and evidence that the team tests and understands its controls.",
    objectiveTags: ["investor-confidence", "controls"]
  },
  {
    id: "lesson05-q9",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "How should a model flag stale posting dates that have not been refreshed recently?",
    correctAnswer: "Combine conditional formatting with a TODAY() comparison so old dates stand out immediately.",
    distractors: [
      "Hide the date column so no one worries about how recent the data might be.",
      "Scan the spreadsheet manually each Friday and rewrite any date that looks old.",
      "Round every date to the current month so the workbook always appears up to date."
    ],
    explanation:
      "Automated visual cues prevent stale data from slipping into investor briefings or executive decisions.",
    objectiveTags: ["controls", "data-integrity"]
  },
  {
    id: "lesson05-q10",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Controls and Automation",
    prompt: "What belongs in the audit notes column beside each major control?",
    correctAnswer: "A short statement of purpose, the logic reference, and the expected result reviewers should see.",
    distractors: [
      "Only the color name used in the formatting so the theme stays consistent.",
      "Just the initial of the team member who built the control during the sprint.",
      "A motivational quote to keep the audit team positive during review sessions."
    ],
    explanation:
      "Audit notes document why a control exists and how it works, helping future reviewers verify performance quickly.",
    objectiveTags: ["controls", "documentation"]
  }
];

const lesson06Questions: Unit01Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards",
    prompt: "What is the best practice for switching scenarios by name inside a dashboard model?",
    correctAnswer: "Use exact-match lookups like XLOOKUP wrapped in IFNA or IFERROR to catch missing names.",
    distractors: [
      "Use approximate matches so similar scenario names can return any nearby result quickly.",
      "Change the ranges manually each time the scenario changes to keep control over references.",
      "Duplicate every scenario tab and paste screenshots into the dashboard for each review."
    ],
    explanation:
      "Exact matches paired with friendly error handling prevent bad selections from breaking the model and give users clear feedback.",
    objectiveTags: ["dashboard-design", "controls"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards",
    prompt: "Charts stop expanding when new rows are added. What usually caused the problem?",
    correctAnswer: "Static ranges like A1:A20 were used instead of Table[Column] references tied to the data source.",
    distractors: [
      "Too many colors were used in the chart, which blocked Excel from adding more bars.",
      "The wrong font family was selected for labels, so the chart froze in place.",
      "Sheet protection was turned on, preventing the workbook from inserting new rows."
    ],
    explanation:
      "Charts should point to structured references so they expand with the table. Fixed ranges miss new rows and create stale visuals.",
    objectiveTags: ["excel-automation", "dashboard-design"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards",
    prompt: "Which stale-date check best protects decision makers from using outdated numbers?",
    correctAnswer:
      `IF(Settings[@AsOfDate] < TODAY()-7, "Stale AsOfDate", "Fresh") paired with a clear visual cue.`,
    distractors: [
      "Reading the date manually each week and hoping to notice when it looks too old.",
      "Hiding the date field so no one worries about timing during busy meetings.",
      "Rounding the date to the current month so the workbook always appears current."
    ],
    explanation:
      "Automated checks surface problems instantly and support faster, safer decision making.",
    objectiveTags: ["controls", "dashboard-design"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards",
    prompt: "How should a model prevent invalid input for rate fields such as discount percentages?",
    correctAnswer: "Use data validation to allow values between 0 and 1 (0% to 100%) with clear warnings for anything else.",
    distractors: [
      "Allow any number so the model stays flexible and errors can be reviewed later on.",
      "Convert rate fields to text so the sheet never rejects inputs typed by stakeholders.",
      "Hide rate inputs from users to keep them from entering something that might break the logic."
    ],
    explanation:
      "Validation keeps inputs realistic and ensures charts, KPIs, and projections remain trustworthy.",
    objectiveTags: ["controls", "data-validation"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards",
    prompt: "If a scenario name is missing, how should the dashboard behave?",
    correctAnswer: "Show a friendly status message and hold the last good state until someone corrects the issue.",
    distractors: [
      "Display zeros everywhere to keep the visuals clean even though the context is missing.",
      "Crash the workbook loudly so everyone knows there is a problem to fix immediately.",
      "Silently switch back to the base scenario so the user never sees the missing value warning."
    ],
    explanation:
      "Good dashboards surface the problem without wiping context or hiding the issue from decision makers.",
    objectiveTags: ["dashboard-design", "controls"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards",
    prompt: "Which KPI set gives leaders the clearest picture of business health?",
    correctAnswer: "Margin percentage, cash days on hand, and runway months tied to current burn.",
    distractors: [
      "Row count, column width, and font size because they describe how large the dataset feels.",
      "File size, zoom level, and sheet order because navigation drives the overall experience.",
      "Chart color, border style, and icon set because design choices influence audience moods."
    ],
    explanation:
      "Decision-ready KPIs connect to cash, profitability, and sustainability- metrics investors watch closely.",
    objectiveTags: ["dashboard-design", "kpi-selection"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards",
    prompt: "What makes an executive summary stable and useful inside a live dashboard?",
    correctAnswer: "Short text that updates at thresholds and explains what action the team should consider next.",
    distractors: [
      "Replacing the summary with emojis so the audience reads the guidance faster.",
      "Using a static text box so the message never changes from week to week.",
      "Explaining every formula in detail even if the reader only needs the punchline."
    ],
    explanation:
      "Decision makers want clear guidance tied to metrics. Dynamic, plain-language summaries provide that direction.",
    objectiveTags: ["dashboard-design", "communication"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards",
    prompt:
      `What does "investor-ready" mean for a scenario dashboard?`,
    correctAnswer: "It stays clear, reliable, and auditable even when stakeholders ask rapid-fire questions.",
    distractors: [
      "It hides any error messages so the visuals always look polished in presentations.",
      "It relies on many hidden tabs and manual steps that only the builder understands.",
      "It exports screenshots instead of live models, because investors dislike interactive files."
    ],
    explanation:
      "Investor-ready tools keep controls visible, data accurate, and switching effortless so decisions can be made quickly.",
    objectiveTags: ["investor-confidence", "dashboard-design"]
  }
];

const lesson07Questions: Unit01Phase5Question[] = [
  {
    id: "lesson07-q1",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Investor Readiness and Audit",
    prompt: "A peer audit finds a chart linked to A1:C10 while the table holds 200 rows. What is the best fix?",
    correctAnswer: "Rebind the chart series to the Table[Column] reference so visuals expand with new data.",
    distractors: [
      "Leave the link alone to avoid breaking the chart right before investor meetings.",
      "Paste static values into the chart source so the picture never changes again.",
      "Hide the extra rows so the original range still lines up with the visible data."
    ],
    explanation:
      "Charts must follow the table to stay trustworthy. Structured references keep visuals current as records grow.",
    objectiveTags: ["audit-readiness", "excel-automation"]
  },
  {
    id: "lesson07-q2",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Investor Readiness and Audit",
    prompt: "Why do investor-ready models wrap XLOOKUP in IFNA or IFERROR?",
    correctAnswer: "They provide a clear message when a lookup fails so reviewers know what went wrong instantly.",
    distractors: [
      "They make the workbook calculate faster than a normal XLOOKUP without the wrapper.",
      "They hide every error so investors never ask questions about missing account records.",
      "They replace the need for structured references because the wrapper keeps outputs stable."
    ],
    explanation:
      "Friendly error handling guides reviewers, keeps the audit trail clean, and prevents mystery #N/A values in reports.",
    objectiveTags: ["audit-readiness", "controls"]
  }
];

export const unit01Phase5QuestionBank: Unit01Phase5Question[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions
];

export function getUnit01Phase5Questions(filter?: Unit01Phase5Filter): Unit01Phase5Question[] {
  const { lessonIds, tags } = filter ?? {};

  return unit01Phase5QuestionBank.filter(question => {
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

export function drawRandomUnit01Phase5Questions(count: number, filter?: Unit01Phase5Filter): Unit01Phase5Question[] {
  const available = getUnit01Phase5Questions(filter);
  if (count >= available.length) {
    return shuffle(available);
  }
  return shuffle(available).slice(0, count);
}

export function toComprehensionCheckItems(questions: Unit01Phase5Question[]): ComprehensionCheckItem[] {
  return questions.map(question => ({
    id: question.id,
    question: question.prompt,
    answers: [question.correctAnswer, ...question.distractors],
    explanation: question.explanation
  }));
}

export function getUnit01Phase5ComprehensionCheckItems(filter?: Unit01Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(getUnit01Phase5Questions(filter));
}

export function drawUnit01Phase5ComprehensionCheckItems(count: number, filter?: Unit01Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(drawRandomUnit01Phase5Questions(count, filter));
}
