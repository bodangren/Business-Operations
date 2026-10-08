import type { UnitId } from "@/types/glossary"

export interface LessonVideo {
  resourceId: string
  videoId: string
  title: string
  channel: string
  topic: string
  focus: string
  startSeconds: number
  endSeconds: number
}

export interface LessonVideoReviewLink {
  unitId: UnitId
  lessonNumber: number
  topic: string
  note: string
}

export interface LessonVideoSelection {
  accounting: readonly LessonVideo[]
  excel: readonly LessonVideo[]
  relatedLessons: readonly LessonVideoReviewLink[]
  note: string
}

// Content decisions and inspected segments are recorded in docs/lesson-video-audit.json.
// Keep the audit independent. Do not regenerate its expectations from this map.
const videos = {
  "equation": {
    "resourceId": "equation",
    "videoId": "56xscQ4viWE",
    "title": "The ACCOUNTING EQUATION For BEGINNERS",
    "channel": "Accounting Stuff",
    "topic": "Assets, liabilities, and equity",
    "focus": "Review the accounting equation and transaction effects. Apply the rule to the examples on this page.",
    "startSeconds": 30,
    "endSeconds": 242,
    "kind": "accounting"
  },
  "debits": {
    "resourceId": "debits",
    "videoId": "VhwZ9t2b3Zk",
    "title": "ACCOUNTING BASICS: Debits and Credits Explained",
    "channel": "Accounting Stuff",
    "topic": "Debit and credit rules",
    "focus": "Review the six DEALER groups. Debits increase Dividends, Expenses, and Assets. Credits increase Liabilities, Equity, and Revenue.",
    "startSeconds": 40,
    "endSeconds": 312,
    "kind": "accounting"
  },
  "journals": {
    "resourceId": "journals",
    "videoId": "Y-_Q3rANyxU",
    "title": "How JOURNAL ENTRIES Work (in Accounting)",
    "channel": "Accounting Stuff",
    "topic": "Journal format and a worked entry",
    "focus": "Review journal number, date, accounts, amounts, and description. Check the cash payment example.",
    "startSeconds": 136,
    "endSeconds": 346,
    "kind": "accounting"
  },
  "taccounts": {
    "resourceId": "taccounts",
    "videoId": "kA9snSvCgW8",
    "title": "T Accounts Explained SIMPLY (With 5 Examples)",
    "channel": "Accounting Stuff",
    "topic": "Post transactions to T-accounts",
    "focus": "Review debit and credit sides. Trace the worked transactions into the affected accounts.",
    "startSeconds": 63,
    "endSeconds": 599,
    "kind": "accounting"
  },
  "tables": {
    "resourceId": "tables",
    "videoId": "2xE6FUp7guQ",
    "title": "Excel for Accountants: PivotTables, Power Query, IF, SUMIFS, VLOOKUP, Flash Fill, Charts…CWU Seminar",
    "channel": "excelisfun",
    "topic": "Create and name an Excel Table",
    "focus": "Review Ctrl+T, headers, table names, and expansion. The video uses an older Excel ribbon. Use the class tutorial for structured references and formatting.",
    "startSeconds": 5442,
    "endSeconds": 5514,
    "kind": "excel"
  },
  "trial": {
    "resourceId": "trial",
    "videoId": "3_PfoTzSCQE",
    "title": "The TRIAL BALANCE Explained (Full Example!)",
    "channel": "Accounting Stuff",
    "topic": "Trial balance and its error limits",
    "focus": "Review account balances and equal debit and credit totals. A balanced trial balance can still contain missing, duplicate, or wrong-account entries. Use the class tutorial for SUMIF and audit flags.",
    "startSeconds": 41,
    "endSeconds": 427,
    "kind": "accounting"
  },
  "adjustments": {
    "resourceId": "adjustments",
    "videoId": "H0N7tvXuJlU",
    "title": "Prepayments and Accruals | Adjusting Entries",
    "channel": "Accounting Stuff",
    "topic": "Accruals and the four adjustment types",
    "focus": "Review timing and the four adjustment types. The video starts prepayments as expense or revenue. This lesson starts them as assets or liabilities. Use the lesson entries for the worked calculations.",
    "startSeconds": 104,
    "endSeconds": 563,
    "kind": "accounting"
  },
  "closing": {
    "resourceId": "closing",
    "videoId": "e1z2lpdQyGQ",
    "title": "CLOSING ENTRIES: Everything You Need To Know",
    "channel": "Accounting Stuff",
    "topic": "Four closing entries with Income Summary",
    "focus": "Review temporary and permanent accounts. Follow the four-step Income Summary method. The clip stops before the direct-to-Retained-Earnings shortcut.",
    "startSeconds": 20,
    "endSeconds": 696,
    "kind": "accounting"
  },
  "cycle": {
    "resourceId": "cycle",
    "videoId": "yYX4bvQSqbo",
    "title": "ACCOUNTING BASICS: a Guide to (Almost) Everything",
    "channel": "Accounting Stuff",
    "topic": "From trial balance to post-closing trial balance",
    "focus": "Trace the unadjusted trial balance, adjustments, adjusted trial balance, statements, and closing. The video closes directly to Retained Earnings. Use the four Income Summary entries from Lesson 3.",
    "startSeconds": 378,
    "endSeconds": 800,
    "kind": "accounting"
  },
  "dep-entry": {
    "resourceId": "dep-entry",
    "videoId": "_pas1ETbrj8",
    "title": "DEPRECIATION BASICS! With Journal Entries",
    "channel": "Accounting Stuff",
    "topic": "Depreciation entry and statement effects",
    "focus": "Review the debit to Depreciation Expense and credit to Accumulated Depreciation. Trace the effect on book value. This example uses full years and no salvage value.",
    "startSeconds": 388,
    "endSeconds": 617,
    "kind": "accounting"
  },
  "names": {
    "resourceId": "names",
    "videoId": "lZq3tR0Y9Ow",
    "title": "Names and Circular References with important tricks - Excel",
    "channel": "Ahmed Nasser STT",
    "topic": "Name a cell and use it in a formula",
    "focus": "Select a cell and enter its name in the Name Box. Use the name in a formula. This clip stops before the circular-reference example. Use the class tutorial for the control panel.",
    "startSeconds": 161,
    "endSeconds": 211,
    "kind": "excel"
  },
  "validation": {
    "resourceId": "validation",
    "videoId": "SDfb-cdDDb4",
    "title": "SUMIFS with Dynamic Data Validation List & Conditional Formatting for Row. Excel Magic Trick 1739",
    "channel": "excelisfun",
    "topic": "Create a dynamic validation list",
    "focus": "Review SORT, UNIQUE, and a validation list in Microsoft 365. This clip does not test amounts, dates, or audit status. Use the class tutorial for those controls.",
    "startSeconds": 50,
    "endSeconds": 143,
    "kind": "excel"
  },
  "statements": {
    "resourceId": "statements",
    "videoId": "Fi1wkUczuyk",
    "title": "FINANCIAL STATEMENTS: all the basics in 8 MINS!",
    "channel": "Accounting Stuff",
    "topic": "What each financial statement shows",
    "focus": "Review the balance sheet, income statement, and cash flow statement. This is an overview. Use Lesson 4 for the indirect cash flow calculation.",
    "startSeconds": 22,
    "endSeconds": 528,
    "kind": "accounting"
  },
  "income": {
    "resourceId": "income",
    "videoId": "0--AvwZabIQ",
    "title": "The INCOME STATEMENT for BEGINNERS",
    "channel": "Accounting Stuff",
    "topic": "Build an income statement from a trial balance",
    "focus": "Review revenue, expense groups, and net income. Trace the adjusted trial balance into a basic and detailed income statement.",
    "startSeconds": 32,
    "endSeconds": 294,
    "kind": "accounting"
  },
  "balance": {
    "resourceId": "balance",
    "videoId": "CMv1zlZhb4Q",
    "title": "The BALANCE SHEET for BEGINNERS (Full Example)",
    "channel": "Accounting Stuff",
    "topic": "Classify accounts and include retained earnings",
    "focus": "Review current and non-current accounts. Include net income and dividends in retained earnings before you check the balance sheet.",
    "startSeconds": 17,
    "endSeconds": 406,
    "kind": "accounting"
  },
  "indirect": {
    "resourceId": "indirect",
    "videoId": "8CH-6wdfz0Y",
    "title": "Prepare A Cash Flow Statement | Indirect Method",
    "channel": "Accounting Stuff",
    "topic": "Indirect cash flow from operating activities",
    "focus": "Start with net income. Add back depreciation and adjust for working capital. This clip covers operating cash flow. Use the lesson for investing, financing, and the final cash check.",
    "startSeconds": 126,
    "endSeconds": 555,
    "kind": "accounting"
  },
  "roa": {
    "resourceId": "roa",
    "videoId": "3W_LwpeG8c8",
    "title": "FINANCIAL RATIOS: How to Analyze Financial Statements",
    "channel": "Accounting Stuff",
    "topic": "Return on assets",
    "focus": "Review net income divided by assets. Use average assets when the workbook supplies opening and closing balances.",
    "startSeconds": 309,
    "endSeconds": 382,
    "kind": "accounting"
  },
  "current": {
    "resourceId": "current",
    "videoId": "3W_LwpeG8c8",
    "title": "FINANCIAL RATIOS: How to Analyze Financial Statements",
    "channel": "Accounting Stuff",
    "topic": "Current ratio",
    "focus": "Review current assets divided by current liabilities. Use this ratio to assess short-term coverage.",
    "startSeconds": 609,
    "endSeconds": 629,
    "kind": "accounting"
  },
  "links": {
    "resourceId": "links",
    "videoId": "_F6a0ddbjtI",
    "title": "The KEY to Understanding Financial Statements",
    "channel": "Accounting Stuff",
    "topic": "Net income links to retained earnings",
    "focus": "Trace net income and dividends into retained earnings. This clip explains the accounting link. Use the class tutorial for Excel cross-sheet formulas and cash checks.",
    "startSeconds": 136,
    "endSeconds": 357,
    "kind": "accounting"
  },
  "selector": {
    "resourceId": "selector",
    "videoId": "5IkGnB1ZTaY",
    "title": "Searchable Data Validation Dropdown List & XLOOKUP function – M365 Excel Magic Trick 1773",
    "channel": "excelisfun",
    "topic": "Dropdown selection with exact-match XLOOKUP",
    "focus": "Create a validation list and return a value with XLOOKUP. XLOOKUP uses exact match by default. Use the class tutorial for scenario tables, charts, and model checks.",
    "startSeconds": 15,
    "endSeconds": 78,
    "kind": "excel"
  },
  "regression": {
    "resourceId": "regression",
    "videoId": "h1Sx8d8cUyo",
    "title": "Excel Magic Trick # 265: Mixed Cost Accounting Linear Regression - Ron's Class",
    "channel": "excelisfun",
    "topic": "SLOPE, INTERCEPT, and RSQ",
    "focus": "Review SLOPE, INTERCEPT, and RSQ in a cost example. The video uses Excel 2007. Use the class tutorial for current menus, café forecasts, and extrapolation checks.",
    "startSeconds": 623,
    "endSeconds": 834,
    "kind": "excel"
  },
  "gross-net": {
    "resourceId": "gross-net",
    "videoId": "B-rGJ35ndOQ",
    "title": "Gross vs Net",
    "channel": "The Finance Storyteller",
    "topic": "Gross pay, net pay, and deductions",
    "focus": "Review gross pay, take-home pay, and deduction types. The example amounts are illustrative. Use the class table and worked examples for payroll calculations.",
    "startSeconds": 15,
    "endSeconds": 83,
    "kind": "accounting"
  },
  "payroll-cap": {
    "resourceId": "payroll-cap",
    "videoId": "sI9Qx3Tk030",
    "title": "Excel Busn Math 41: Payroll Deductions With Ceilings (FICA)",
    "channel": "excelisfun",
    "topic": "Taxable wages when a paycheck crosses a cap",
    "focus": "Review the capped wage calculation. The video uses an old wage limit. Use the class table. This clip does not cover FIT withholding or total employer cash needs.",
    "startSeconds": 285,
    "endSeconds": 592,
    "kind": "excel"
  },
  "sumifs": {
    "resourceId": "sumifs",
    "videoId": "6c9fIZys7ng",
    "title": "Learn how to use SUMIFS & COUNTIFS function. SUM or COUNT only certain items! EMT1708.",
    "channel": "excelisfun",
    "topic": "SUMIFS with one or two conditions",
    "focus": "Review the sum range and paired criteria ranges. Apply the pattern to employee hours. A text mismatch can return zero. Use the class tutorial for overtime and payroll formulas.",
    "startSeconds": 68,
    "endSeconds": 251,
    "kind": "excel"
  },
  "margin": {
    "resourceId": "margin",
    "videoId": "jS7jbz1UWuA",
    "title": "GROSS PROFIT MARGIN: a Simple Explanation",
    "channel": "Accounting Stuff",
    "topic": "Gross margin uses revenue as the denominator",
    "focus": "Review gross profit divided by revenue. This clip covers margin. Use the lesson for markup, contribution margin, and break-even calculations.",
    "startSeconds": 192,
    "endSeconds": 322,
    "kind": "accounting"
  },
  "cvp": {
    "resourceId": "cvp",
    "videoId": "Y58nnb-BWfE",
    "title": "Highline Excel 2013 Class Video 49: Break Even Analysis Formulas & Chart, Plotting Break Even Point",
    "channel": "excelisfun",
    "topic": "CVP formulas and the break-even model",
    "focus": "Review sales, variable cost, contribution margin, profit, and break-even. The video uses Excel 2013. Use the lesson for capacity and target profit. Round required whole units up.",
    "startSeconds": 65,
    "endSeconds": 507,
    "kind": "excel"
  },
  "inventory": {
    "resourceId": "inventory",
    "videoId": "OB6RDzqvNbk",
    "title": "INVENTORY & COST OF GOODS SOLD",
    "channel": "Accounting Stuff",
    "topic": "Inventory purchases, sales, and COGS",
    "focus": "Review inventory as an asset. Trace a purchase and a sale into Inventory, Revenue, and Cost of Goods Sold. Use the lesson for the inventory reconciliation equation.",
    "startSeconds": 96,
    "endSeconds": 521,
    "kind": "accounting"
  },
  "fifo": {
    "resourceId": "fifo",
    "videoId": "Hvul1enbwjk",
    "title": "First In First Out (FIFO) | Inventory Cost Flows",
    "channel": "Accounting Stuff",
    "topic": "FIFO cost layers and ending inventory",
    "focus": "Assign the oldest costs to sales. Trace the remaining layers into ending inventory and compare the profit effect when costs rise.",
    "startSeconds": 161,
    "endSeconds": 620,
    "kind": "accounting"
  },
  "lifo": {
    "resourceId": "lifo",
    "videoId": "dAEm17g0T6E",
    "title": "Last In First Out (LIFO) | Inventory Cost Flows",
    "channel": "Accounting Stuff",
    "topic": "LIFO cost layers and the profit effect",
    "focus": "Assign the newest costs to sales. Compare COGS, ending inventory, and gross profit with FIFO.",
    "startSeconds": 107,
    "endSeconds": 491,
    "kind": "accounting"
  },
  "weighted": {
    "resourceId": "weighted",
    "videoId": "vGPn_Oo7UBQ",
    "title": "The Essential Guide to Inventory in Accounting",
    "channel": "Accounting Stuff",
    "topic": "Periodic weighted average",
    "focus": "Divide total available cost by total available units. Use the average for COGS and ending inventory. The video rounds the rate early. Keep full precision until the final money amounts. Use this page for Specific Identification.",
    "startSeconds": 2320,
    "endSeconds": 2772,
    "kind": "accounting"
  },
  "excel-weighted": {
    "resourceId": "excel-weighted",
    "videoId": "-tX25Ceh56A",
    "title": "How to Use Excel to Calculate Ending Inventory, COGS, and Gross Profit with FIFO, LIFO, and WA?",
    "channel": "Ahmed Nasser STT",
    "topic": "Calculate weighted-average inventory in Excel",
    "focus": "Review totals and the weighted-average rate in Excel. The example uses spilled arrays and prior setup sheets. Use the class tutorial for the four-method workbook and its layer formulas.",
    "startSeconds": 1069,
    "endSeconds": 1223,
    "kind": "excel"
  },
  "turnover": {
    "resourceId": "turnover",
    "videoId": "3W_LwpeG8c8",
    "title": "FINANCIAL RATIOS: How to Analyze Financial Statements",
    "channel": "Accounting Stuff",
    "topic": "Inventory turnover",
    "focus": "Review COGS divided by inventory. Use the average inventory value from the class workbook.",
    "startSeconds": 661,
    "endSeconds": 686,
    "kind": "accounting"
  },
  "days": {
    "resourceId": "days",
    "videoId": "3W_LwpeG8c8",
    "title": "FINANCIAL RATIOS: How to Analyze Financial Statements",
    "channel": "Accounting Stuff",
    "topic": "Days of inventory",
    "focus": "Review inventory divided by COGS, multiplied by 365. Use average inventory. Match the COGS period to the days measure in your workbook.",
    "startSeconds": 788,
    "endSeconds": 824,
    "kind": "accounting"
  },
  "capitalization": {
    "resourceId": "capitalization",
    "videoId": "_pas1ETbrj8",
    "title": "DEPRECIATION BASICS! With Journal Entries",
    "channel": "Accounting Stuff",
    "topic": "Record an asset cost instead of an expense",
    "focus": "Review capitalization in the balance sheet. Use the lesson rules for significant cost, useful life, salvage value, and depreciable base.",
    "startSeconds": 122,
    "endSeconds": 162,
    "kind": "accounting"
  },
  "straight": {
    "resourceId": "straight",
    "videoId": "iruD9KTNnNc",
    "title": "STRAIGHT LINE Method of Depreciation in 3 Steps!",
    "channel": "Accounting Stuff",
    "topic": "Straight-line formula and full-year schedule",
    "focus": "Review cost, salvage value, useful life, annual expense, accumulated depreciation, and book value. Use the lesson for partial-year calculations.",
    "startSeconds": 35,
    "endSeconds": 380,
    "kind": "accounting"
  },
  "ddb": {
    "resourceId": "ddb",
    "videoId": "M-VzJ51zZoM",
    "title": "DOUBLE DECLINING BALANCE Method of Depreciation",
    "channel": "Accounting Stuff",
    "topic": "DDB rate and the first two years",
    "focus": "Review twice the straight-line rate applied to beginning book value. This example shows the first two years. Use the lesson to enforce the salvage floor and compare complete schedules.",
    "startSeconds": 145,
    "endSeconds": 277,
    "kind": "accounting"
  },
  "text-columns": {
    "resourceId": "text-columns",
    "videoId": "TKQ--deRcUM",
    "title": "Excel Text To Columns Feature to Split a Column of Text Values. Excel Magic Trick 1905",
    "channel": "excelisfun",
    "topic": "Split a text column with Text to Columns",
    "focus": "Select the source column. Use Data > Text to Columns, choose the delimiter, and set an empty destination range. Keep the original data. Use the class tutorial for TRIM, PROPER, CLEAN, and duplicate checks.",
    "startSeconds": 52,
    "endSeconds": 131,
    "kind": "excel"
  }
} as const

function resources(
  keys: readonly (keyof typeof videos)[],
  relatedLessons: readonly LessonVideoReviewLink[] = [],
  note = "",
): LessonVideoSelection {
  const selected = keys.map((key) => videos[key])
  const publicFields = ({ kind: _kind, ...video }: (typeof selected)[number]): LessonVideo => video
  return {
    accounting: selected.filter((video) => video.kind === "accounting").map(publicFields),
    excel: selected.filter((video) => video.kind === "excel").map(publicFields),
    relatedLessons,
    note,
  }
}

function review(unitId: UnitId, lessonNumber: number, topic: string): LessonVideoReviewLink {
  return { unitId, lessonNumber, topic, note: "Review this skill before you check the current workbook." }
}

const lessonVideos: Partial<Record<UnitId, Record<number, LessonVideoSelection>>> = {
  unit01: {
    2: resources(["equation"]),
    3: resources(["debits", "journals", "taccounts"]),
    4: resources(["tables"]),
    5: resources(["trial"]),
    6: resources([], [review("unit01", 5, "Trial balance and error limits")]),
    7: resources([], [review("unit01", 3, "Journal entries and T-accounts"), review("unit01", 4, "Create and name a Table"), review("unit01", 5, "Trial balance and error limits")]),
    8: resources([], [review("unit01", 3, "Journal entries and T-accounts"), review("unit01", 4, "Create and name a Table")]),
    9: resources([], [review("unit01", 5, "Trial balance and error limits")]),
    10: resources([], [review("unit01", 5, "Trial balance and error limits")]),
  },
  unit02: {
    1: resources([], [review("unit01", 5, "Trial balance and error limits")]),
    2: resources(["adjustments"]),
    3: resources(["closing"]),
    4: resources(["cycle", "dep-entry"]),
    5: resources(["names"], [review("unit02", 4, "Close workflow and depreciation entries")]),
    6: resources(["validation"], [review("unit02", 4, "Close workflow and depreciation entries")]),
    7: resources([], [review("unit02", 2, "Accrual and adjustment timing"), review("unit02", 3, "Four closing entries"), review("unit02", 4, "Close workflow and depreciation entries")]),
    8: resources([], [review("unit02", 2, "Accrual and adjustment timing")]),
    9: resources([], [review("unit02", 3, "Four closing entries"), review("unit02", 4, "Close workflow and depreciation entries")]),
    10: resources([], [review("unit02", 4, "Close workflow and depreciation entries")]),
  },
  unit03: {
    1: resources(["statements"]),
    2: resources(["income"]),
    3: resources(["balance"]),
    4: resources(["indirect", "roa", "current"]),
    5: resources(["links"]),
    6: resources(["selector"], [review("unit03", 4, "Operating cash flow and ratios")]),
    7: resources([], [review("unit03", 2, "Income statement"), review("unit03", 3, "Balance sheet and retained earnings"), review("unit03", 4, "Operating cash flow and ratios"), review("unit03", 5, "Net income to retained earnings")]),
    8: resources([], [review("unit03", 2, "Income statement"), review("unit03", 3, "Balance sheet and retained earnings")]),
    9: resources([], [review("unit03", 4, "Operating cash flow and ratios"), review("unit03", 5, "Net income to retained earnings"), review("unit03", 6, "Dropdown and exact-match XLOOKUP")]),
    10: resources([], [review("unit03", 5, "Net income to retained earnings")]),
  },
  unit04: {
    4: resources(["regression"]),
    5: resources(["text-columns"]),
    6: resources([], [review("unit03", 6, "Dropdown and exact-match XLOOKUP")], "Use the earlier review for the selector. Use the class tutorial for this forecast model."),
    7: resources([], [review("unit04", 4, "Slope and model fit"), review("unit03", 6, "Dropdown and exact-match XLOOKUP")]),
    8: resources([], [review("unit04", 4, "Slope and model fit")]),
    9: resources([], [review("unit04", 4, "Slope and model fit"), review("unit03", 6, "Dropdown and exact-match XLOOKUP")]),
    10: resources([], [review("unit04", 4, "Slope and model fit")]),
  },
  unit05: {
    2: resources(["gross-net"]),
    3: resources(["payroll-cap"], [review("unit05", 2, "Gross pay and net pay")]),
    4: resources([], [review("unit02", 2, "Accrual and adjustment timing")], "Review accrual timing. Use this lesson for payroll liabilities and cash reconciliation."),
    5: resources(["sumifs"], [review("unit03", 6, "Dropdown and exact-match XLOOKUP")]),
    6: resources([], [review("unit05", 3, "Capped wage calculation"), review("unit05", 5, "SUMIFS for employee hours"), review("unit03", 6, "Dropdown and exact-match XLOOKUP")]),
    7: resources([], [review("unit05", 2, "Gross pay and net pay"), review("unit05", 3, "Capped wage calculation"), review("unit05", 5, "SUMIFS for employee hours")]),
    8: resources([], [review("unit05", 2, "Gross pay and net pay"), review("unit05", 3, "Capped wage calculation")]),
    9: resources([], [review("unit05", 3, "Capped wage calculation"), review("unit05", 5, "SUMIFS for employee hours"), review("unit03", 6, "Dropdown and exact-match XLOOKUP")]),
    10: resources([], [review("unit05", 2, "Gross pay and net pay"), review("unit05", 3, "Capped wage calculation")]),
  },
  unit06: {
    2: resources(["margin"]),
    3: resources(["cvp"]),
    4: resources([], [review("unit06", 3, "CVP and break-even model")]),
    5: resources([], [review("unit06", 3, "CVP and break-even model")], "The earlier review covers the profit model. Use the class tutorial for Goal Seek."),
    6: resources([], [review("unit06", 3, "CVP and break-even model")], "The earlier review covers the profit model. Use the class tutorial for Data Tables."),
    7: resources([], [review("unit06", 2, "Gross margin"), review("unit06", 3, "CVP and break-even model")]),
    8: resources([], [review("unit06", 2, "Gross margin"), review("unit06", 3, "CVP and break-even model")]),
    9: resources([], [review("unit06", 3, "CVP and break-even model")]),
    10: resources([], [review("unit06", 3, "CVP and break-even model")]),
  },
  unit07: {
    2: resources(["inventory"]),
    3: resources(["fifo", "lifo"]),
    4: resources(["weighted"]),
    5: resources(["excel-weighted"], [review("unit07", 3, "FIFO and LIFO"), review("unit07", 4, "Periodic weighted average"), review("unit03", 6, "Dropdown and exact-match XLOOKUP")]),
    6: resources(["turnover", "days"], [review("unit03", 6, "Dropdown and exact-match XLOOKUP"), review("unit06", 2, "Gross margin")]),
    7: resources([], [review("unit07", 3, "FIFO and LIFO"), review("unit07", 4, "Periodic weighted average"), review("unit07", 5, "Weighted average in Excel"), review("unit07", 6, "Inventory turnover and days")]),
    8: resources([], [review("unit07", 2, "Inventory and COGS")]),
    9: resources([], [review("unit07", 3, "FIFO and LIFO"), review("unit07", 4, "Periodic weighted average"), review("unit07", 6, "Inventory turnover and days")]),
    10: resources([], [review("unit07", 3, "FIFO and LIFO"), review("unit07", 4, "Periodic weighted average"), review("unit07", 6, "Inventory turnover and days")]),
  },
  unit08: {
    1: resources([], [review("unit02", 4, "Close workflow and depreciation entries")]),
    2: resources(["capitalization"], [review("unit02", 4, "Close workflow and depreciation entries")]),
    3: resources(["straight"]),
    4: resources(["ddb"]),
    5: resources([], [review("unit08", 3, "Straight-line schedule"), review("unit08", 4, "DDB rate and first two years")]),
    6: resources([], [review("unit08", 3, "Straight-line schedule"), review("unit08", 4, "DDB rate and first two years"), review("unit02", 4, "Close workflow and depreciation entries")], "Review the earlier methods and statement effects. Use the class tutorial for SLN, DDB, and months in service."),
    7: resources([], [review("unit08", 2, "Capitalization"), review("unit08", 3, "Straight-line schedule"), review("unit08", 4, "DDB rate and first two years")]),
    8: resources([], [review("unit08", 2, "Capitalization"), review("unit08", 3, "Straight-line schedule"), review("unit08", 4, "DDB rate and first two years")]),
    9: resources([], [review("unit08", 3, "Straight-line schedule"), review("unit08", 4, "DDB rate and first two years")]),
    10: resources([], [review("unit08", 3, "Straight-line schedule"), review("unit08", 4, "DDB rate and first two years")]),
  },
}

/**
 * Get the inspected segments and earlier reviews for a lesson.
 * @param unitId - The unit that contains the lesson.
 * @param lessonNumber - The lesson number within the unit.
 * @returns The reviewed selection, or no selection when no resource fits.
 */
export function getLessonVideoResources(unitId: UnitId, lessonNumber: number): LessonVideoSelection | undefined {
  return lessonVideos[unitId]?.[lessonNumber]
}
