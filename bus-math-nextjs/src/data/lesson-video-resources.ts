import type { UnitId } from "@/types/glossary"

export interface LessonVideo {
  videoId: string
  title: string
  channel: string
  focus: string
  startSeconds?: number
  endSeconds?: number
}

export interface LessonVideoSelection {
  accounting: readonly LessonVideo[]
  excel: readonly LessonVideo[]
}

const accountingVideos = {
  equation: ["56xscQ4viWE", "The ACCOUNTING EQUATION For BEGINNERS"],
  debits: ["VhwZ9t2b3Zk", "ACCOUNTING BASICS: Debits and Credits Explained"],
  journals: ["Y-_Q3rANyxU", "How JOURNAL ENTRIES Work (in Accounting)"],
  trial: ["3_PfoTzSCQE", "The TRIAL BALANCE Explained (Full Example!)"],
  adjustments: ["H0N7tvXuJlU", "Prepayments and Accruals | Adjusting Entries"],
  cashaccrual: ["CRcHPo-gP1M", "CASH VS ACCRUAL ACCOUNTING: Explained in (Almost) 2 Minutes!"],
  closing: ["e1z2lpdQyGQ", "CLOSING ENTRIES: Everything You Need To Know"],
  income: ["0--AvwZabIQ", "The INCOME STATEMENT for BEGINNERS"],
  balance: ["CMv1zlZhb4Q", "The BALANCE SHEET for BEGINNERS (Full Example)"],
  indirect: ["8CH-6wdfz0Y", "Prepare A Cash Flow Statement | Indirect Method"],
  relationships: ["_F6a0ddbjtI", "The KEY to Understanding Financial Statements"],
  ratios: ["3W_LwpeG8c8", "FINANCIAL RATIOS: How to Analyze Financial Statements"],
  grossmargin: ["jS7jbz1UWuA", "GROSS PROFIT MARGIN: a Simple Explanation"],
  taxbrackets: ["FeANJVZNfTA", "TAX BRACKETS: a Simple Guide for Beginners"],
  inventory: ["OB6RDzqvNbk", "INVENTORY & COST OF GOODS SOLD"],
  fifo: ["Hvul1enbwjk", "First In First Out (FIFO) | Inventory Cost Flows"],
  lifo: ["dAEm17g0T6E", "Last In First Out (LIFO) | Inventory Cost Flows"],
  weighted: ["vGPn_Oo7UBQ", "The Essential Guide to Inventory in Accounting — Average Cost"],
  depreciation: ["_pas1ETbrj8", "DEPRECIATION BASICS! With Journal Entries"],
  straight: ["iruD9KTNnNc", "STRAIGHT LINE Method of Depreciation in 3 Steps!"],
  ddb: ["M-VzJ51zZoM", "DOUBLE DECLINING BALANCE Method of Depreciation"],
} as const

function accounting(
  key: keyof typeof accountingVideos,
  focus: string,
  startSeconds?: number,
  endSeconds?: number,
): LessonVideo {
  const [videoId, title] = accountingVideos[key]
  return { videoId, title, channel: "Accounting Stuff", focus, startSeconds, endSeconds }
}

const excelVideos = {
  tableNames: {
    videoId: "RcXVitTsHLE",
    title: "Naming Excel Tables Became Easy. Excel Magic Trick 1927",
    channel: "excelisfun",
    focus: "Review table names after you create your ledger table. Use the table names in the class tutorial.",
  },
  journalChecks: {
    videoId: "_dVB1gPIKx4",
    title: "Journal Entries without Balance errors in Excel 365",
    channel: "Ahmed Nasser STT",
    focus: "Review debit and credit checks in an Excel journal. Use the formulas and layout in the class tutorial.",
  },
  names: {
    videoId: "lZq3tR0Y9Ow",
    title: "Names and Circular References with important tricks",
    channel: "Ahmed Nasser STT",
    focus: "Review named ranges and circular references. Use named inputs in your month-end control panel.",
  },
  controls: {
    videoId: "SDfb-cdDDb4",
    title: "SUMIFS, Dynamic Data Validation List and Conditional Formatting",
    channel: "excelisfun",
    focus: "Review a dropdown list, SUMIFS, and a visible check. Use the sheet names and checks in the class tutorial.",
  },
  income: {
    videoId: "hvrba_TKqqo",
    title: "Yearly Income Statement Using SUMIFS",
    channel: "excelisfun",
    focus: "Review how SUMIFS builds an income statement. Keep the statement links and checks from this lesson.",
  },
  selector: {
    videoId: "5IkGnB1ZTaY",
    title: "Searchable Data Validation Drop-down and XLOOKUP",
    channel: "excelisfun",
    focus: "Review a dropdown selector and XLOOKUP. Use the input list and exact-match formula from the class tutorial.",
  },
  regression: {
    videoId: "h1Sx8d8cUyo",
    title: "Mixed Cost Accounting Linear Regression",
    channel: "excelisfun",
    focus: "Review slope, intercept, and R-squared in a cost example. Apply the same fit checks to the café data.",
  },
  splitText: {
    videoId: "W6JMFsVAzJI",
    title: "Text To Columns or Split to Rows?",
    channel: "excelisfun",
    focus: "Review the Text-to-Columns procedure. Follow the class tutorial for TRIM, PROPER, duplicate checks, and outlier checks.",
  },
  sumifs: {
    videoId: "6c9fIZys7ng",
    title: "Learn SUMIFS and COUNTIFS",
    channel: "excelisfun",
    focus: "Review sums and counts with more than one condition. Use SUMIFS to total each employee's scheduled hours.",
  },
  breakEven: {
    videoId: "Y58nnb-BWfE",
    title: "Highline Excel 2013 Class 49: Break-Even Analysis with Formulas and Chart",
    channel: "excelisfun",
    focus: "Review break-even formulas and the cost and revenue chart. The video uses Excel 2013. Use the class tutorial for current menu steps.",
  },
  inventory: {
    videoId: "-tX25Ceh56A",
    title: "Ending Inventory, Cost of Goods Sold and Gross Profit: FIFO, LIFO and Weighted Average",
    channel: "Ahmed Nasser STT",
    focus: "Review three inventory methods in Excel. Follow the class tutorial for Specific Identification and the four-method workbook.",
  },
} satisfies Record<string, LessonVideo>

// Checked against the creator pages and the user-supplied playlists on 2026-10-08.
// Select clips only where they support the current lesson. Project milestones use
// the earlier lesson resources. No new video task is added to those milestones.
const lessonVideos: Partial<Record<UnitId, Record<number, LessonVideoSelection>>> = {
  unit01: {
    2: { accounting: [accounting("equation", "Review assets, liabilities, and equity. Check how a transaction keeps the equation balanced.")], excel: [] },
    3: { accounting: [
      accounting("debits", "Review the debit and credit rules for the five account groups."),
      accounting("journals", "Review the journal format and a worked entry.", 146),
    ], excel: [] },
    4: { accounting: [], excel: [excelVideos.tableNames] },
    5: { accounting: [accounting("trial", "Review debit and credit totals in a trial balance. Then check your ledger totals in Excel.")], excel: [excelVideos.journalChecks] },
  },
  unit02: {
    2: { accounting: [
      accounting("adjustments", "Review accruals, prepayments, and the adjusting entries that place amounts in the correct period."),
      accounting("cashaccrual", "Compare payment timing with revenue and expense recognition."),
    ], excel: [] },
    3: { accounting: [accounting("closing", "Review temporary accounts and closing entries. Follow this lesson's Income Summary steps.")], excel: [] },
    4: { accounting: [accounting("depreciation", "Review the depreciation journal entries used in the month-end close.", 283)], excel: [] },
    5: { accounting: [], excel: [excelVideos.names] },
    6: { accounting: [], excel: [excelVideos.controls] },
  },
  unit03: {
    2: { accounting: [accounting("income", "Review revenue, expenses, and net income in the basic and detailed income statements.", 112)], excel: [] },
    3: { accounting: [
      accounting("balance", "Review the balance sheet groups and the accounting equation check.", 138),
      accounting("relationships", "Trace net income into equity and see how the statements connect."),
    ], excel: [] },
    4: { accounting: [
      accounting("indirect", "Review net income, non-cash adjustments, and working capital in the indirect cash flow statement."),
      accounting("ratios", "Review return on assets.", 346, 409),
      accounting("ratios", "Review liquidity ratios. Use the current ratio for this lesson.", 491, 629),
    ], excel: [] },
    5: { accounting: [accounting("relationships", "Review the statement relationships before you test the cross-sheet links.")], excel: [excelVideos.income] },
    6: { accounting: [], excel: [excelVideos.selector] },
  },
  unit04: {
    4: { accounting: [], excel: [excelVideos.regression] },
    5: { accounting: [], excel: [excelVideos.splitText] },
    6: { accounting: [], excel: [excelVideos.selector] },
  },
  unit05: {
    2: { accounting: [{
      videoId: "B-rGJ35ndOQ", title: "Gross vs Net", channel: "The Finance Storyteller",
      focus: "Review the meaning of gross and net. Use this lesson's payroll tables to calculate each deduction and net pay.",
    }], excel: [] },
    3: { accounting: [accounting("taxbrackets", "Review how a marginal tax rate works. Use the withholding tables supplied for this lesson.")], excel: [] },
    5: { accounting: [], excel: [excelVideos.sumifs, excelVideos.selector] },
    6: { accounting: [], excel: [
      { ...excelVideos.selector, focus: "Review the Employee ID selector and XLOOKUP. Use the payroll formulas and withholding tables from the class tutorial." },
    ] },
  },
  unit06: {
    2: { accounting: [accounting("grossmargin", "Review gross profit margin. Use the worked examples on this page to compare margin with markup.", 193)], excel: [] },
    3: { accounting: [], excel: [excelVideos.breakEven] },
  },
  unit07: {
    2: { accounting: [accounting("inventory", "Review beginning inventory, purchases, cost of goods sold, and ending inventory.")], excel: [] },
    3: { accounting: [
      accounting("fifo", "Review FIFO cost layers and the worked valuation.", 161),
      accounting("lifo", "Review LIFO cost layers. Compare the results with FIFO.", 110),
    ], excel: [] },
    4: { accounting: [accounting("weighted", "Start at 38:24 for Weighted Average. Use the worked example on this page for Specific Identification.", 2304)], excel: [] },
    5: { accounting: [], excel: [excelVideos.inventory] },
    6: { accounting: [
      accounting("ratios", "Review inventory turnover.", 664, 686),
      accounting("ratios", "Review days sales of inventory. Compare this measure with days on hand in your workbook.", 789, 823),
    ], excel: [excelVideos.selector] },
  },
  unit08: {
    2: { accounting: [accounting("depreciation", "Review capitalization, asset cost, accumulated depreciation, and book value.", 141)], excel: [] },
    3: { accounting: [accounting("straight", "Review the straight-line formula and depreciation schedule.", 35)], excel: [] },
    4: { accounting: [accounting("ddb", "Review double-declining balance. Use the comparison on this page to check the salvage floor.", 34)], excel: [] },
    5: { accounting: [
      accounting("straight", "Review the schedule columns for expense, accumulated depreciation, and book value.", 106),
      accounting("ddb", "Review the DDB schedule before you test your workbook formulas.", 95),
    ], excel: [] },
    6: { accounting: [accounting("depreciation", "Review the journal entries and statement effects. Follow the class tutorial for partial-year calculations and Excel functions.", 283)], excel: [] },
  },
}

/**
 * Get the selected review videos for a lesson.
 * @param unitId - The course unit to look up.
 * @param lessonNumber - The lesson number within the unit.
 * @returns The accounting and optional Excel selections, or no selection.
 */
export function getLessonVideoResources(unitId: UnitId, lessonNumber: number): LessonVideoSelection | undefined {
  return lessonVideos[unitId]?.[lessonNumber]
}
