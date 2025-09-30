export type Unit08LessonId =
  | "lesson01"
  | "lesson02"
  | "lesson03"
  | "lesson04"
  | "lesson05"
  | "lesson06"
  | "lesson07";

export interface Unit08Phase5Question {
  id: string;
  lessonId: Unit08LessonId;
  lessonTitle: string;
  prompt: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
  objectiveTags: string[];
}

export interface Unit08Phase5Filter {
  lessonIds?: Unit08LessonId[];
  tags?: string[];
}

export interface ComprehensionCheckItem {
  id: string;
  question: string;
  answers: string[];
  explanation: string;
}

const lesson01Questions: Unit08Phase5Question[] = [
  {
    id: "lesson01-q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Introduction: VC Red Flags & Entry Event",
    prompt:
      "Sarah's model shows users growing 15% each month while revenue grows only 5%. What will a venture capitalist question first?",
    correctAnswer:
      "They will ask why revenue lags user growth and whether the monetization plan truly works.",
    distractors: [
      "They will worry that user growth is too slow and insist on a brand new marketing push.",
      "They will ignore the revenue trend because headline user charts always impress investors.",
      "They will assume the workbook is broken and demand that Sarah rebuild it before the meeting."
    ],
    explanation:
      "Investors compare growth in customers with growth in cash. A big gap signals weak monetization, so they want proof that users convert into revenue.",
    objectiveTags: ["vc-evaluation", "monetization-insight", "phase5-vc-eval"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Introduction: VC Red Flags & Entry Event",
    prompt:
      "Sarah's cash flow statement shows $100,000 from operations while her income statement shows a $50,000 loss. How should an investor interpret that?",
    correctAnswer:
      "Working capital changes and non-cash expenses can create positive cash flow even when net income is negative.",
    distractors: [
      "It proves the model is broken because net income and operating cash must always match.",
      "It means Sarah understated tax expenses and needs to recalculate the entire model.",
      "It shows cash flow statements should never be used for growth stage businesses."
    ],
    explanation:
      "Accrual accounting separates profit recognition from cash timing. Receivables, payables, and depreciation often create gaps between net income and operating cash flow.",
    objectiveTags: ["vc-evaluation", "cash-flow-analysis", "phase5-vc-eval"]
  },
  {
    id: "lesson01-q3",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Introduction: VC Red Flags & Entry Event",
    prompt: "A scenario analysis shows best, base, and worst cases. The worst case still ends in success. What will an investment committee say?",
    correctAnswer:
      "They will ask for a tougher downside because real risk analysis should expose meaningful challenges.",
    distractors: [
      "They will congratulate Sarah because optimistic and pessimistic results match so closely.",
      "They will focus only on the upside case to speed through the decision process.",
      "They will reject scenario analysis entirely and ask for a single point forecast."
    ],
    explanation:
      "Investors expect the worst case to highlight real threats. If every scenario works, they assume the model is unrealistic or the risks are hidden.",
    objectiveTags: ["vc-evaluation", "risk-analysis", "phase5-vc-eval"]
  },
  {
    id: "lesson01-q4",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Introduction: VC Red Flags & Entry Event",
    prompt:
      "Sarah reports a customer lifetime value of $150 and a customer acquisition cost of $50. Which conclusion will a VC draw?",
    correctAnswer:
      "A 3:1 LTV to CAC ratio signals healthy unit economics but still invites questions about payback timing.",
    distractors: [
      "The ratio is unacceptable because sustainable models must stay below 2:1.",
      "Unit economics are unclear until the ratio hits 6:1 or higher in every scenario.",
      "The ratio is meaningless because investors only look at revenue growth charts."
    ],
    explanation:
      "A 3:1 ratio is strong, yet investors still want to know how quickly cash returns and whether assumptions hold under pressure.",
    objectiveTags: ["unit-economics", "vc-evaluation", "phase5-vc-eval"]
  },
  {
    id: "lesson01-q5",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Introduction: VC Red Flags & Entry Event",
    prompt: "Which spreadsheet failure would most damage Sarah's credibility in a VC pitch?",
    correctAnswer:
      "Circular references that stop the workbook from calculating without manual overrides.",
    distractors: [
      "Formatting inconsistencies like mismatched fonts on different worksheets.",
      "Rounded totals that differ by a few dollars between reports.",
      "Tabs that contain helper columns hidden from the dashboard view."
    ],
    explanation:
      "Circular references suggest the model cannot run on its own. Investors expect a clean calculation engine more than perfect formatting.",
    objectiveTags: ["model-integrity", "vc-evaluation", "phase5-vc-eval"]
  },
  {
    id: "lesson01-q6",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Introduction: VC Red Flags & Entry Event",
    prompt:
      "Sarah's plan reaches break-even in month 24 after raising $2 million. What follow-up question shows true investor thinking?",
    correctAnswer:
      "What happens to cash needs if break-even slips and customers take longer to convert?",
    distractors: [
      "Can you change the color palette so the charts look more exciting to the partners?",
      "Could we delete the downside case to keep the model optimistic for the team?",
      "Would you rebuild the workbook with fewer tabs before our next meeting?"
    ],
    explanation:
      "Investors test resilience. They want to know how sensitive the model is to slower ramp-ups and what extra capital might be required.",
    objectiveTags: ["risk-analysis", "cash-planning", "phase5-capstone"]
  },
  {
    id: "lesson01-q7",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Introduction: VC Red Flags & Entry Event",
    prompt: "What impresses a venture capital panel more than any single Excel trick?",
    correctAnswer:
      "Clear command of the business model plus honest risk analysis tied to the numbers.",
    distractors: [
      "Listing every advanced function used in the workbook during the presentation.",
      "Showing optimistic projections that double revenue every quarter without fail.",
      "Including more worksheets than any other team to prove extra effort."
    ],
    explanation:
      "Investors back founders who understand the business drivers and risk profile. Technical skills support that story but do not replace it.",
    objectiveTags: ["investor-readiness", "vc-evaluation", "phase5-capstone"]
  }
];
const lesson02Questions: Unit08Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "When Sarah tests new growth assumptions, why must Assets = Liabilities + Equity still hold in her integrated model?",
    correctAnswer:
      "It proves every assumption still balances resources with funding, showing the model remains sound.",
    distractors: [
      "It keeps the layout identical to investor slide templates that prefer matching totals.",
      "It happens automatically in Excel, so she only needs to check the inputs look neat.",
      "It lets her skip the income statement entirely and focus only on balance sheet math."
    ],
    explanation:
      "The accounting equation is the foundation of integration. Balanced statements confirm that transactions are captured correctly after each assumption change.",
    objectiveTags: ["integration-principles", "accounting-equation"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Sarah increases revenue by 25%, yet operating cash flow falls. What integration principle explains this?",
    correctAnswer:
      "Higher credit sales raise accounts receivable, so cash lags even while profits improve.",
    distractors: [
      "The workbook must contain an error because revenue should always boost cash immediately.",
      "Taxes jump so quickly that they erase all cash benefits from the extra sales.",
      "Inventory always doubles any time revenue increases, so cash disappears first."
    ],
    explanation:
      "Integrated models capture timing differences. Selling on credit boosts revenue now but delays cash until customers pay their invoices.",
    objectiveTags: ["working-capital", "integration-principles"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Which formula shows professional cross-sheet linking for pulling net income into retained earnings?",
    correctAnswer:
      "=Previous_Retained_Earnings + Income_Statement!$B$25, using absolute references to the net income cell.",
    distractors: [
      "=Previous_Retained_Earnings + 15000, plugging the profit directly into the formula.",
      "=Previous_Retained_Earnings + B25, leaving a relative reference without the sheet name.",
      "=Retained_Earnings + Net_Income, using named ranges without pointing to the source sheet."
    ],
    explanation:
      "Professional links specify the sheet and lock the cell so the formula stays accurate when copied across periods.",
    objectiveTags: ["cross-sheet-linking", "formula-integrity"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Why does an investor check that ending cash on the cash flow statement equals the cash balance on the balance sheet?",
    correctAnswer:
      "Matching values show every cash movement is captured, proving the three statements truly connect.",
    distractors: [
      "It confirms that Sarah memorized the correct Excel shortcut keys for cash reconciliation.",
      "It proves cash flow is always positive before the model can be used with investors.",
      "It guarantees the company has enough cash in the bank for the next twelve months."
    ],
    explanation:
      "Cash reconciliation is the final integration check. If the numbers differ, the links between statements are incomplete.",
    objectiveTags: ["integration-principles", "audit-readiness"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Sarah extends customer payment terms from 30 to 45 days. How should her integrated model respond?",
    correctAnswer:
      "Income stays the same, accounts receivable rise, and operating cash drops because cash arrives later.",
    distractors: [
      "All statements should drop in sync because slower payments crush revenue immediately.",
      "Only the cash flow statement changes because payment timing never touches the balance sheet.",
      "Revenue must fall on the income statement in every month the terms extend past 30 days."
    ],
    explanation:
      "Accrual accounting records revenue when earned. Longer payment terms delay cash collection, raising receivables and squeezing cash flow.",
    objectiveTags: ["working-capital", "cash-flow-analysis"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Why do professional modelers prefer named ranges like Growth_Rate instead of cell references like B5 in cross-sheet formulas?",
    correctAnswer:
      "Named ranges explain the logic inside the formula and stay stable when layouts change.",
    distractors: [
      "Named ranges calculate faster than normal references, reducing Excel load time.",
      "Excel requires named ranges when a workbook has more than three worksheets.",
      "Named ranges automatically fix any formula errors without additional checks."
    ],
    explanation:
      "Readable formulas build trust. Named ranges turn opaque coordinates into business language that reviewers quickly understand.",
    objectiveTags: ["documentation", "formula-integrity"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Sarah buys $20,000 of equipment using cash. Which statement impacts describe the integrated effect?",
    correctAnswer:
      "Balance sheet: equipment up and cash down; cash flow: investing outflow; income statement: depreciation later on.",
    distractors: [
      "Income statement: $20,000 expense now; balance sheet: no change; cash flow: operating outflow.",
      "Each statement shows a $20,000 expense in the purchase month with no other adjustments.",
      "Only the cash flow statement changes because equipment transactions stay off the balance sheet."
    ],
    explanation:
      "Capital spending shifts assets and cash today and creates depreciation expense in future periods.",
    objectiveTags: ["capital-planning", "integration-principles"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Why is Sarah's integrated workbook stronger than a competitor's model that keeps the statements in separate files?",
    correctAnswer:
      "Integrated links let her test scenarios instantly while keeping profit, cash, and balance sheet in sync.",
    distractors: [
      "Integrated workbooks always forecast higher profits than separated statements.",
      "Investors prefer the appearance of a single file, even if nothing links together.",
      "Separate models load faster, so integration only matters for design purposes."
    ],
    explanation:
      "Scenario thinking relies on linked statements. When assumptions change, every outcome updates together, giving investors the insights they need.",
    objectiveTags: ["scenario-planning", "integration-principles"]
  },
  {
    id: "lesson02-q9",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Which insight appears only when Sarah views all three statements as one system?",
    correctAnswer:
      "Operational choices ripple through profit, working capital, and cash, revealing trade-offs she must manage.",
    distractors: [
      "She can finally see which sheet uses the most colors or conditional formatting.",
      "The cash balance becomes obvious without checking any supporting schedules.",
      "Monthly profits replace the need to review the cash flow statement at all."
    ],
    explanation:
      "Integration reveals cause and effect. A single change affects profit, balance sheet accounts, and cash timing, helping leaders guide the business.",
    objectiveTags: ["systems-thinking", "decision-support"]
  },
  {
    id: "lesson02-q10",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Core Concepts: Review & Link Integration",
    prompt:
      "Sarah proves she can maintain formula integrity across three linked statements. What does that signal to investors?",
    correctAnswer:
      "She thinks in systems, sweats the details, and can scale operational processes responsibly.",
    distractors: [
      "She is good with Excel but may lack the strategic thinking needed to run a business.",
      "She can handle bookkeeping for a small shop but cannot lead a startup team.",
      "She followed instructions yet still needs outside consultants to manage growth."
    ],
    explanation:
      "Integrated modeling demonstrates leadership traits investors value: discipline, foresight, and ability to manage complex operations.",
    objectiveTags: ["investor-readiness", "systems-thinking"]
  }
];
const lesson03Questions: Unit08Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt:
      "In a three-statement model, which balance sheet account receives net income from the income statement?",
    correctAnswer: "Retained earnings increases because profit belongs to the owners' equity section.",
    distractors: [
      "Cash increases automatically by the same amount in the assets section.",
      "Total assets receives net income before any other calculations occur.",
      "Owner capital accounts always absorb net income regardless of structure."
    ],
    explanation:
      "Net income flows through retained earnings, strengthening equity and keeping the accounting equation balanced.",
    objectiveTags: ["balance-sheet", "integration-principles"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt:
      "If the cash flow statement shows a $15,000 decrease in cash, what has to appear on the balance sheet?",
    correctAnswer: "The cash account must drop by $15,000 so the statements reconcile.",
    distractors: [
      "Total assets must rise $15,000 to offset the cash flow change.",
      "Liabilities must increase $15,000 even if no debt was raised.",
      "Retained earnings must fall $15,000 regardless of profitability."
    ],
    explanation:
      "Reconciliation checks tie statements together. The change in cash on the cash flow statement equals the change on the balance sheet.",
    objectiveTags: ["cash-flow-analysis", "integration-principles"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt: "Sarah buys a $10,000 delivery van with cash. Which statements does the purchase touch immediately?",
    correctAnswer:
      "Balance sheet (equipment up, cash down) and cash flow statement (investing outflow).",
    distractors: [
      "Only the income statement records a $10,000 expense this month.",
      "Only the balance sheet changes; cash flow ignores capital purchases.",
      "All three statements post a $10,000 expense at the time of purchase."
    ],
    explanation:
      "Capital spending shifts assets and uses cash now; the income statement captures depreciation over time instead of the full purchase.",
    objectiveTags: ["capital-planning", "integration-principles"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt: "Where should an interest payment on a business loan appear on the cash flow statement?",
    correctAnswer: "Operating activities because it is part of day-to-day business costs.",
    distractors: [
      "Investing activities because the loan helped pay for long-term assets.",
      "Financing activities because the payment relates to a financing transaction.",
      "Outside the cash flow statement since interest is handled by the bank."
    ],
    explanation:
      "Interest expenses show up in operating cash flow even though the principal of the loan is a financing item.",
    objectiveTags: ["cash-flow-categorization", "integration-principles"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt:
      "Why do venture capitalists demand integrated financial statements instead of separate tabs that never connect?",
    correctAnswer:
      "Integrated models prove the numbers stay consistent and reveal how decisions affect profit, cash, and financial position.",
    distractors: [
      "Integrated models look better on screen even if the numbers stay the same.",
      "Investors prefer fewer spreadsheets, so combining them makes the file shorter.",
      "Separate statements make tax planning harder, which investors always avoid."
    ],
    explanation:
      "Investors need to test strategy quickly. Only integrated models show cause and effect across the business.",
    objectiveTags: ["investor-readiness", "systems-thinking"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt:
      "What is the main advantage of using named ranges like Revenue_Growth instead of coordinates like B5?",
    correctAnswer:
      "Named ranges make formulas readable and easier to audit when reviewers trace logic.",
    distractors: [
      "Named ranges force Excel to calculate faster than normal references.",
      "They let the model ignore data validation rules that would otherwise break.",
      "They remove the need for documentation because the workbook explains itself."
    ],
    explanation:
      "Readable formulas build trust. Named ranges show meaning without hunting for coordinates.",
    objectiveTags: ["documentation", "formula-integrity"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt:
      "Sarah reports $25,000 profit while cash keeps falling. Which explanation fits an integrated analysis?",
    correctAnswer:
      "Cash is tied up in receivables or inventory even though income shows a profit.",
    distractors: [
      "The model must contain a math error because profit and cash always match.",
      "The business is failing and should shut down before losses get worse.",
      "She should raise prices immediately to force cash and profit to match."
    ],
    explanation:
      "Profit follows accrual timing; cash reflects collection and investment. Working capital swings often explain the gap.",
    objectiveTags: ["working-capital", "cash-flow-analysis"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt: "What accounting equation must stay true on every balance sheet Sarah prepares?",
    correctAnswer: "Assets = Liabilities + Equity keeps the business in balance.",
    distractors: [
      "Revenue - Expenses = Net Income describes the balance sheet layout.",
      "Cash Inflows - Cash Outflows = Net Cash Flow replaces the balance sheet equation.",
      "Assets = Revenue + Equity summarizes growth planning needs."
    ],
    explanation:
      "The accounting equation grounds every model. Assets are financed by liabilities and equity, so the totals must match.",
    objectiveTags: ["accounting-equation", "integration-principles"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt:
      "Which item belongs in the financing section of the cash flow statement?",
    correctAnswer: "Borrowing $50,000 from a bank to support operations.",
    distractors: [
      "Buying $5,000 of equipment for the new office.",
      "Paying $2,000 in monthly rent for the workspace.",
      "Collecting $8,000 from customers who paid invoices."
    ],
    explanation:
      "Financing activities involve raising or repaying capital. Loans change the capital structure, so they sit in financing cash flows.",
    objectiveTags: ["cash-flow-categorization", "financing"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Core Concepts: Balance Sheet & Cash Flow Integration",
    prompt:
      "In a professional model, what should happen when Sarah changes the sales growth assumption?",
    correctAnswer:
      "Every linked formula updates automatically across income, balance sheet, and cash flow tabs.",
    distractors: [
      "She edits each sheet manually to keep the math in sync with the new assumption.",
      "Only the worksheet that stores the assumption should update to maintain control.",
      "The model should block changes so the scenario stays frozen for reporting."
    ],
    explanation:
      "Integrated models respond immediately to new inputs, letting Sarah test scenarios and show investors reliable results.",
    objectiveTags: ["automation", "integration-principles"]
  }
];
const lesson04Questions: Unit08Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Model: Scenario Manager & Advanced Financial Modeling",
    prompt:
      "Sarah stores optimistic, base, and downside cases in Scenario Manager. Which Excel feature delivers a side-by-side comparison instantly?",
    correctAnswer: "Scenario Summary Report generated directly from the Scenario Manager dialog.",
    distractors: [
      "PivotTable summaries that must be rebuilt for each new scenario.",
      "Chart wizard overlays using multiple data series for every assumption.",
      "Data validation lists that swap values without producing a report."
    ],
    explanation:
      "Scenario Summary creates a formatted table comparing changing cells and result cells across every scenario with one click.",
    objectiveTags: ["scenario-manager", "reporting"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Model: Scenario Manager & Advanced Financial Modeling",
    prompt:
      "Sarah wants =Monthly_Revenue * Growth_Rate to keep working when Scenario Manager switches cases. How should Growth_Rate be referenced?",
    correctAnswer: "Use an absolute reference like $B$5 so the formula always points to the assumption cell.",
    distractors: [
      "Leave the reference relative so Excel can adjust it when scenarios change.",
      "Wrap the reference in INDIRECT so Scenario Manager can rewrite the text value.",
      "Hard-code the growth rate number in the formula to avoid broken links."
    ],
    explanation:
      "Absolute references lock the formula to the driver cell, ensuring scenario switches feed the correct values.",
    objectiveTags: ["scenario-manager", "formula-integrity"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Model: Scenario Manager & Advanced Financial Modeling",
    prompt:
      "During a VC meeting, Sarah flips to the pessimistic scenario and shows revenue of $847,000 in month 12. What does that demonstrate?",
    correctAnswer: "She can answer investor what-if questions in real time with a dynamic model.",
    distractors: [
      "She memorized every number in her workbook and can recite them without using Excel.",
      "Pessimistic scenarios must always show lower revenue than base cases by definition.",
      "Excel automatically recalculates compound growth even without any scenario planning."
    ],
    explanation:
      "Instant switching proves the model is live and investor-ready, giving decision makers confidence in her analysis.",
    objectiveTags: ["scenario-manager", "investor-readiness"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Model: Scenario Manager & Advanced Financial Modeling",
    prompt:
      "Sarah builds a two-variable data table to show how NPV changes when churn and CAC move together. What analysis is she running?",
    correctAnswer: "Sensitivity analysis that maps how key inputs shift vital outputs.",
    distractors: [
      "Scenario analysis that compares optimistic and pessimistic narratives.",
      "Budget variance analysis that tracks actual results versus plan.",
      "Financial forecasting that extends revenue trends into future years."
    ],
    explanation:
      "Data tables quantify how sensitive outcomes are to input swings, helping founders prioritize the drivers that matter most.",
    objectiveTags: ["sensitivity-analysis", "scenario-planning"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Model: Scenario Manager & Advanced Financial Modeling",
    prompt:
      "A VC asks, 'What if a recession doubles your churn from 5% to 10%?' How should Sarah prepare to answer fast?",
    correctAnswer:
      "Store a recession scenario with higher churn so she can switch and display the new results immediately.",
    distractors: [
      "Open a second workbook dedicated to recession math and copy numbers by hand.",
      "Explain that a calculator will be used after the meeting to recompute the figures.",
      "Show a general slide about recessions without tying it to the financial model."
    ],
    explanation:
      "Professional founders anticipate tough questions and build scenarios that surface the impact on revenue, cash, and funding needs.",
    objectiveTags: ["scenario-manager", "risk-analysis"]
  }
];
const lesson05Questions: Unit08Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt: "What belongs in the top-left cell of a two-variable data table?",
    correctAnswer: "A reference to the single output the table will recalc for each input pair.",
    distractors: [
      "The first row input value so Excel has a starting point.",
      "The first column input value to anchor the grid.",
      "Any placeholder number because Excel ignores that corner cell."
    ],
    explanation:
      "The corner cell tells Excel which formula to recompute. Without that link, the table cannot return results.",
    objectiveTags: ["data-tables", "sensitivity-analysis"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt:
      "Which formula switches scenarios by name and avoids #N/A errors when a scenario is missing?",
    correctAnswer: "IFNA(XLOOKUP(ScenarioName, ScenarioTbl[Name], ScenarioTbl[Growth_Rate]), 0)",
    distractors: [
      "VLOOKUP(ScenarioName, ScenarioTbl, 2) without specifying match type.",
      "INDEX(ScenarioTbl[Growth_Rate], 2) with a hard-coded row number.",
      "MATCH(ScenarioName, ScenarioTbl[Name], 1) that returns only the row index."
    ],
    explanation:
      "Exact match XLOOKUP delivers the correct driver, while IFNA provides a safe fallback for missing entries.",
    objectiveTags: ["scenario-automation", "formula-integrity"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt: "Why do investors insist on structured references like Table[Revenue] in live models?",
    correctAnswer: "They expand automatically with new rows and reduce broken ranges during updates.",
    distractors: [
      "They calculate faster than normal references in every Excel version.",
      "They apply custom number formats without extra effort from the analyst.",
      "They hide helper tabs from reviewers to keep the workbook tidy."
    ],
    explanation:
      "Structured references follow the data, so formulas stay intact as the business grows and more records are added.",
    objectiveTags: ["structured-references", "model-integrity"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt:
      "A sensitivity grid shows profit rising while cash falls. What is the most likely explanation?",
    correctAnswer: "Timing differences such as receivables or inventory consume cash while profit is recorded.",
    distractors: [
      "Excel data tables randomly reverse signs whenever inputs increase.",
      "Profit formulas must be wrong because cash and profit should match exactly.",
      "Cash and profit always move together unless taxes are turned off."
    ],
    explanation:
      "Working capital swings can use cash even when earnings improve, so grids often reveal funding gaps despite strong profit.",
    objectiveTags: ["sensitivity-analysis", "working-capital"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt: "Which validation matters most before sharing a model with investors?",
    correctAnswer: "Flag stale AsOf dates and out-of-range drivers so issues surface immediately.",
    distractors: [
      "Double-check that every header uses the same fill color across tabs.",
      "Merge the heading cells to keep the dashboard looking polished.",
      "Rename each sheet with capital letters to show consistency."
    ],
    explanation:
      "Validation protects credibility. Highlighting stale or out-of-bound inputs proves the team monitors data quality.",
    objectiveTags: ["validation", "investor-readiness"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt: "Where do you assign the row and column input cells for a data table?",
    correctAnswer: "In the Data Table dialog under What-If Analysis for the selected range.",
    distractors: [
      "Inside the output formula so the references travel with the calculation.",
      "Inside Name Manager so the row and column link to named ranges automatically.",
      "Anywhere on the worksheet because Excel detects the inputs without setup."
    ],
    explanation:
      "The Data Table dialog tells Excel which cells hold the row inputs and column inputs so the engine can substitute values correctly.",
    objectiveTags: ["data-tables", "scenario-automation"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt: "Which change most improves auditability in Sarah's automation workbook?",
    correctAnswer: "Add named ranges for critical drivers and label the units right on the sheet.",
    distractors: [
      "Hide every helper column so the dashboard stands alone.",
      "Randomly color-code cells to show where major formulas live.",
      "Replace all formulas with values once the first scenario passes review."
    ],
    explanation:
      "Documentation and clear labels help reviewers trace logic quickly, especially when investors audit the workbook.",
    objectiveTags: ["documentation", "audit-readiness"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt:
      "A new driver row is added to DriversTbl and formulas break. What likely caused the issue?",
    correctAnswer: "Hard-coded cell ranges were used instead of structured references that expand with the table.",
    distractors: [
      "Named ranges create conflicts whenever rows are inserted into a table.",
      "Using IFNA in the formulas slows Excel until results become unreliable.",
      "Using EXACT in comparisons prevents the table from accepting extra rows."
    ],
    explanation:
      "Structured references grow with the data. Fixed ranges miss new rows, leading to errors in sensitivity outputs.",
    objectiveTags: ["structured-references", "model-integrity"]
  },
  {
    id: "lesson05-q9",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt: "What belongs in an executive summary that follows a sensitivity analysis?",
    correctAnswer: "Highlight key drivers, tipping points, and the recommended actions for leadership.",
    distractors: [
      "List every formula used so reviewers can rebuild the workbook later on.",
      "Paste the full ledger export to show where every data point originated.",
      "Document every keyboard shortcut discovered during the project."
    ],
    explanation:
      "Executives need direction. Summaries explain risk, thresholds, and decisions rather than raw calculations.",
    objectiveTags: ["communication", "sensitivity-analysis"]
  },
  {
    id: "lesson05-q10",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Sensitivity & Scenario Automation",
    prompt: "Which habit reduces fragile links in a multi-scenario workbook?",
    correctAnswer: "Collect inputs on a dedicated sheet and reference them consistently throughout the model.",
    distractors: [
      "Scatter inputs across many sheets to keep each section self-contained.",
      "Hide constants inside formulas so nobody can change them accidentally.",
      "Replace XLOOKUP with manual typing after each scenario switch."
    ],
    explanation:
      "Centralizing inputs keeps assumptions controllable and prevents the hidden overrides that break automation.",
    objectiveTags: ["model-governance", "scenario-automation"]
  }
];
const lesson06Questions: Unit08Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "What is the most reliable way to switch driver sets by scenario name?",
    correctAnswer: "Use XLOOKUP with IFNA so missing scenarios return a safe default instead of an error.",
    distractors: [
      "Use VLOOKUP with approximate match so near names still return values.",
      "Use INDEX with a hard-coded row number that points to the base case.",
      "Copy and paste the driver block each time a scenario changes."
    ],
    explanation:
      "Exact-match lookups with error handling keep dashboards responsive even when scenarios are renamed or removed.",
    objectiveTags: ["scenario-automation", "formula-integrity"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "A chart stops updating when Sarah adds new months. What is the likely root cause?",
    correctAnswer: "The chart references a static range instead of a table that expands with new data.",
    distractors: [
      "Too many colors are used, overwhelming Excel's chart engine.",
      "The chosen chart type cannot display more than twelve data points.",
      "Axis font sizes are too small for Excel to render additional labels."
    ],
    explanation:
      "Structured tables feed new rows to charts automatically. Static ranges leave visuals stuck on the original data set.",
    objectiveTags: ["structured-references", "dashboard-integrity"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "Which validation step does the most to preserve investor trust?",
    correctAnswer: "Surface stale AsOf dates and out-of-range drivers right on the dashboard.",
    distractors: [
      "Hide all error messages so the dashboard always looks clean.",
      "Turn off automatic calculation before sharing the workbook.",
      "Lock every worksheet so reviewers cannot inspect supporting logic."
    ],
    explanation:
      "Transparent validation shows the team monitors data quality and resolves issues before investors spot them.",
    objectiveTags: ["validation", "investor-readiness"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "When should Sarah rely on a driver table instead of Scenario Manager?",
    correctAnswer: "When charts and outputs must stay live while scenarios switch by name.",
    distractors: [
      "When no switching is required and all drivers stay constant.",
      "When she plans to print the workbook instead of using it on screen.",
      "When company policy forbids the use of macros or add-ins."
    ],
    explanation:
      "Driver tables with lookups keep formulas transparent and update charts instantly, which is ideal for investor dashboards.",
    objectiveTags: ["scenario-automation", "dashboard-design"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "Which lookup formula keeps scenario names tied to margin percentages without breaking?",
    correctAnswer: "=IFNA(XLOOKUP($B$2, ScenarioTbl[Name], ScenarioTbl[Margin]), 0)",
    distractors: [
      "=VLOOKUP($B$2, A:E, 3) without specifying exact match.",
      "=INDEX(C:C, 2) that always returns the second row regardless of selection.",
      "=MATCH($B$2, A:A, 0) which delivers only the row index."
    ],
    explanation:
      "Exact-match XLOOKUP plus IFNA returns clean results and guards the dashboard from #N/A errors.",
    objectiveTags: ["formula-integrity", "scenario-automation"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "What makes an executive summary useful on an investor dashboard?",
    correctAnswer: "It updates when KPIs hit thresholds and tells leaders what action to consider next.",
    distractors: [
      "It stays fixed so the wording never has to change between meetings.",
      "It relies on emoji icons in place of text to keep attention high.",
      "It hides behind a button so the dashboard stays uncluttered."
    ],
    explanation:
      "Dynamic, plain-language summaries connect the numbers to decisions, which is exactly what investors need.",
    objectiveTags: ["communication", "dashboard-design"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "Which symptom screams that a model has been hard-coded?",
    correctAnswer: "Scenario outputs do not change when Sarah switches driver names.",
    distractors: [
      "Worksheet headers appear in bold type across the dashboard.",
      "Color palettes shift between tabs depending on the scenario.",
      "A company logo shows up in the corner of every worksheet."
    ],
    explanation:
      "If outputs stay frozen, someone likely pasted values over formulas. Investors reject models that behave that way.",
    objectiveTags: ["model-integrity", "scenario-automation"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "When is INDEX/MATCH acceptable in this dashboard project?",
    correctAnswer: "When it uses 0 for exact match and is clearly documented for reviewers.",
    distractors: [
      "When it uses 1 for approximate match to keep formulas shorter.",
      "When the row number is typed manually because the list never changes.",
      "When the data is unsorted and approximate matches feel close enough."
    ],
    explanation:
      "INDEX/MATCH is reliable with exact match and documentation. Approximate links risk wrong outputs and erode trust.",
    objectiveTags: ["formula-integrity", "documentation"]
  },
  {
    id: "lesson06-q9",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "Which practice keeps the dashboard responsive during investor demos?",
    correctAnswer: "Limit volatile functions and avoid duplicate calculations across worksheets.",
    distractors: [
      "Use TODAY() in every metric so the workbook feels real-time.",
      "Apply array formulas to entire columns to guarantee accuracy.",
      "Create ten identical charts per sheet to showcase every scenario outcome."
    ],
    explanation:
      "Performance matters. Reducing volatility and repeated work keeps recalculation fast on investor laptops.",
    objectiveTags: ["performance", "dashboard-design"]
  },
  {
    id: "lesson06-q10",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Dashboard: Investor-Ready Model",
    prompt: "What makes a dashboard truly investor-ready?",
    correctAnswer: "It stays clear, reliable, and easy to audit even under rapid-fire questions.",
    distractors: [
      "It uses flashy gradients and hides supporting schedules from the audience.",
      "It relies on hidden values so only the creator understands the calculations.",
      "It depends entirely on macros that only run on the creator's computer."
    ],
    explanation:
      "Investors want transparency and control. A trustworthy dashboard answers questions without hidden tricks or fragile code.",
    objectiveTags: ["investor-readiness", "dashboard-design"]
  }
];
const lesson07Questions: Unit08Phase5Question[] = [
  {
    id: "lesson07-q1",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Investor Readiness",
    prompt: "A chart references A1:C10 and ignores new rows. What is the professional fix?",
    correctAnswer: "Bind the chart to a table and use structured references that grow with the data.",
    distractors: [
      "Expand the range manually each week before sharing the workbook.",
      "Convert the numbers to text so the chart keeps the original values.",
      "Hide the extra rows so the range and chart stay the same size."
    ],
    explanation:
      "Tables expand automatically. Structured references keep visuals in sync during audits and investor reviews.",
    objectiveTags: ["audit-readiness", "structured-references"]
  },
  {
    id: "lesson07-q2",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Investor Readiness",
    prompt: "What does investor-ready really mean in a final audit?",
    correctAnswer: "The model is clear, reliable, documented, and every assumption has traceable logic.",
    distractors: [
      "The workbook uses bold colors, animated charts, and dozens of tabs.",
      "Outputs contain only typed numbers so investors cannot change anything.",
      "Everything lives on a single giant sheet without sections or navigation."
    ],
    explanation:
      "Investor-ready models combine transparency, controls, and documentation so reviewers can trust the results.",
    objectiveTags: ["investor-readiness", "audit-readiness"]
  }
];

export const unit08Phase5QuestionBank: Unit08Phase5Question[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions
];

export function getUnit08Phase5Questions(filter?: Unit08Phase5Filter): Unit08Phase5Question[] {
  const { lessonIds, tags } = filter ?? {};

  return unit08Phase5QuestionBank.filter(question => {
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

export function drawRandomUnit08Phase5Questions(count: number, filter?: Unit08Phase5Filter): Unit08Phase5Question[] {
  const available = getUnit08Phase5Questions(filter);
  if (count >= available.length) {
    return shuffle(available);
  }
  return shuffle(available).slice(0, count);
}

export function toComprehensionCheckItems(questions: Unit08Phase5Question[]): ComprehensionCheckItem[] {
  return questions.map(question => ({
    id: question.id,
    question: question.prompt,
    answers: [question.correctAnswer, ...question.distractors],
    explanation: question.explanation
  }));
}

export function getUnit08Phase5ComprehensionCheckItems(filter?: Unit08Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(getUnit08Phase5Questions(filter));
}

export function drawUnit08Phase5ComprehensionCheckItems(count: number, filter?: Unit08Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(drawRandomUnit08Phase5Questions(count, filter));
}
