export interface JournalLine {
  id: string
  account: string
  debit: number
  credit: number
}

export interface EquationTransaction {
  id: string
  description: string
  assetsChange: number
  liabilitiesChange: number
  equityChange: number
  pattern: EquationPattern
}

export interface EquationResponse {
  assetsChange: number
  liabilitiesChange: number
  equityChange: number
  pattern: string
}

export interface PostingScenario {
  id: string
  description: string
  amount: number
  correctEntry: JournalLine[]
}

export interface LedgerRow {
  transactionId: string
  account: string
  debit: number
  credit: number
}

export interface AccountTotals {
  debits: number
  credits: number
  debitBalance: number
  creditBalance: number
}

export interface LedgerControls {
  totalDebits: number
  totalCredits: number
  difference: number
  unbalancedTransactionCount: number
  blankAccountCount: number
}

export type EquationPattern = (typeof UNIT01_EQUATION_PATTERNS)[number]

export const UNIT01_EQUATION_PATTERNS = [
  "Asset-to-Asset Exchange",
  "Assets and Equity Both Increase",
  "Assets and Liabilities Both Increase",
  "Assets and Liabilities Both Decrease",
  "Assets and Equity Both Decrease",
] as const

export const UNIT01_EQUATION_TRANSACTIONS: EquationTransaction[] = [
  {
    id: "t1",
    description: "Received $2,500 cash for completed client work",
    assetsChange: 2_500,
    liabilitiesChange: 0,
    equityChange: 2_500,
    pattern: "Assets and Equity Both Increase",
  },
  {
    id: "t2",
    description: "Bought $800 of equipment with cash",
    assetsChange: 0,
    liabilitiesChange: 0,
    equityChange: 0,
    pattern: "Asset-to-Asset Exchange",
  },
  {
    id: "t3",
    description: "Purchased $1,200 of supplies on credit",
    assetsChange: 1_200,
    liabilitiesChange: 1_200,
    equityChange: 0,
    pattern: "Assets and Liabilities Both Increase",
  },
  {
    id: "t4",
    description: "Paid $900 of accounts payable",
    assetsChange: -900,
    liabilitiesChange: -900,
    equityChange: 0,
    pattern: "Assets and Liabilities Both Decrease",
  },
  {
    id: "t5",
    description: "Owner invested $3,000 of cash in the business",
    assetsChange: 3_000,
    liabilitiesChange: 0,
    equityChange: 3_000,
    pattern: "Assets and Equity Both Increase",
  },
  {
    id: "t6",
    description: "Paid $400 of monthly rent with cash",
    assetsChange: -400,
    liabilitiesChange: 0,
    equityChange: -400,
    pattern: "Assets and Equity Both Decrease",
  },
  {
    id: "t7",
    description: "Billed a client $1,800 for completed work",
    assetsChange: 1_800,
    liabilitiesChange: 0,
    equityChange: 1_800,
    pattern: "Assets and Equity Both Increase",
  },
  {
    id: "t8",
    description: "Received a $2,500 bank loan in cash",
    assetsChange: 2_500,
    liabilitiesChange: 2_500,
    equityChange: 0,
    pattern: "Assets and Liabilities Both Increase",
  },
]

interface PostingTemplate {
  baseAmount: number
  build: (amount: number) => Omit<PostingScenario, "id" | "amount">
}

const line = (id: number, account: string, debit = 0, credit = 0): JournalLine => ({
  id: String(id),
  account,
  debit,
  credit,
})

const money = (amount: number) => `$${amount.toLocaleString("en-US")}`

const POSTING_TEMPLATES: PostingTemplate[] = [
  {
    baseAmount: 650,
    build: (amount) => ({
      description: `Received ${money(amount)} cash for a completed social-media project`,
      correctEntry: [line(1, "Cash", amount), line(2, "Service Revenue", 0, amount)],
    }),
  },
  {
    baseAmount: 800,
    build: (amount) => ({
      description: `Paid ${money(amount)} of monthly office rent`,
      correctEntry: [line(1, "Rent Expense", amount), line(2, "Cash", 0, amount)],
    }),
  },
  {
    baseAmount: 450,
    build: (amount) => ({
      description: `Purchased ${money(amount)} of supplies on account`,
      correctEntry: [line(1, "Supplies", amount), line(2, "Accounts Payable", 0, amount)],
    }),
  },
  {
    baseAmount: 2_500,
    build: (amount) => ({
      description: `Owner invested ${money(amount)} of additional cash in the business`,
      correctEntry: [line(1, "Cash", amount), line(2, "Owner's Capital", 0, amount)],
    }),
  },
  {
    baseAmount: 1_200,
    build: (amount) => ({
      description: `Billed a client ${money(amount)} for completed SEO work`,
      correctEntry: [line(1, "Accounts Receivable", amount), line(2, "Service Revenue", 0, amount)],
    }),
  },
  {
    baseAmount: 350,
    build: (amount) => ({
      description: `Paid ${money(amount)} for utilities`,
      correctEntry: [line(1, "Utilities Expense", amount), line(2, "Cash", 0, amount)],
    }),
  },
  {
    baseAmount: 1_800,
    build: (amount) => {
      const cashPaid = Math.round((amount * 0.3) / 50) * 50
      const noteAmount = amount - cashPaid
      return {
        description: `Purchased ${money(amount)} of equipment, paid ${money(cashPaid)} cash, and signed a ${money(noteAmount)} note`,
        correctEntry: [
          line(1, "Equipment", amount),
          line(2, "Cash", 0, cashPaid),
          line(3, "Notes Payable", 0, noteAmount),
        ],
      }
    },
  },
  {
    baseAmount: 600,
    build: (amount) => ({
      description: `Received a ${money(amount)} deposit for work due next month`,
      correctEntry: [line(1, "Cash", amount), line(2, "Unearned Revenue", 0, amount)],
    }),
  },
  {
    baseAmount: 700,
    build: (amount) => ({
      description: `Owner withdrew ${money(amount)} of cash for personal use`,
      correctEntry: [line(1, "Owner's Draw", amount), line(2, "Cash", 0, amount)],
    }),
  },
  {
    baseAmount: 2_200,
    build: (amount) => ({
      description: `Paid ${money(amount)} toward the principal of a bank loan`,
      correctEntry: [line(1, "Notes Payable", amount), line(2, "Cash", 0, amount)],
    }),
  },
]

/** Check a student's accounting-equation response against one transaction. */
export function validateEquationResponse(
  transaction: EquationTransaction,
  response: EquationResponse,
): boolean {
  return (
    response.assetsChange === transaction.assetsChange &&
    response.liabilitiesChange === transaction.liabilitiesChange &&
    response.equityChange === transaction.equityChange &&
    response.pattern === transaction.pattern
  )
}

/** Create one posting scenario from a template and amount multiplier. */
export function createPostingScenario(templateIndex: number, multiplier: number): PostingScenario {
  const safeIndex = Math.abs(Math.trunc(templateIndex)) % POSTING_TEMPLATES.length
  const template = POSTING_TEMPLATES[safeIndex]
  const amount = Math.max(50, Math.round((template.baseAmount * multiplier) / 50) * 50)
  const built = template.build(amount)

  return {
    id: `scenario-${safeIndex}-${amount}`,
    amount,
    ...built,
  }
}

/** Return the stable first scenario used during server and client rendering. */
export function getInitialPostingScenario(): PostingScenario {
  return createPostingScenario(0, 1)
}

/** Generate a posting scenario with an injectable random source. */
export function generatePostingScenario(random: () => number = Math.random): PostingScenario {
  const templateIndex = Math.floor(random() * POSTING_TEMPLATES.length)
  const multiplier = 0.5 + random()
  return createPostingScenario(templateIndex, multiplier)
}

const normalizedLineKey = (journalLine: JournalLine) => {
  const account = journalLine.account.trim().replace(/\s+/g, " ").toLocaleLowerCase("en-US")
  const debit = Math.round(journalLine.debit * 100)
  const credit = Math.round(journalLine.credit * 100)
  return `${account}|${debit}|${credit}`
}

/** Check exact account amounts while allowing line order and account-letter case to vary. */
export function validateJournalEntry(userEntry: JournalLine[], correctEntry: JournalLine[]): boolean {
  const usedLines = userEntry.filter(
    ({ account, debit, credit }) => account.trim() !== "" || debit !== 0 || credit !== 0,
  )
  if (usedLines.length !== correctEntry.length) return false

  const userDebits = usedLines.reduce((sum, journalLine) => sum + journalLine.debit, 0)
  const userCredits = usedLines.reduce((sum, journalLine) => sum + journalLine.credit, 0)
  if (Math.round(userDebits * 100) !== Math.round(userCredits * 100)) return false

  const actual = usedLines.map(normalizedLineKey).sort()
  const expected = correctEntry.map(normalizedLineKey).sort()
  return actual.every((key, index) => key === expected[index])
}

/** Add or update one journal line, including amount-first input. */
export function upsertJournalLine(
  entry: JournalLine[],
  lineId: string,
  field: "account" | "debit" | "credit",
  value: string | number,
): JournalLine[] {
  const existing = entry.find(({ id }) => id === lineId)
  const nextLine: JournalLine = existing
    ? { ...existing }
    : { id: lineId, account: "", debit: 0, credit: 0 }

  if (field === "account") {
    nextLine.account = String(value)
  } else {
    nextLine[field] = Number(value) || 0
  }

  return existing
    ? entry.map((journalLine) => (journalLine.id === lineId ? nextLine : journalLine))
    : [...entry, nextLine]
}

const roundedMoney = (amount: number) => Math.round(amount * 100) / 100

/** Calculate account totals with the same criteria logic as two SUMIF formulas. */
export function calculateAccountTotals(rows: LedgerRow[], account: string): AccountTotals {
  const normalizedAccount = account.trim().toLocaleLowerCase("en-US")
  const matchingRows = rows.filter(
    (row) => row.account.trim().toLocaleLowerCase("en-US") === normalizedAccount,
  )
  const debits = roundedMoney(matchingRows.reduce((sum, row) => sum + row.debit, 0))
  const credits = roundedMoney(matchingRows.reduce((sum, row) => sum + row.credit, 0))

  return {
    debits,
    credits,
    debitBalance: roundedMoney(Math.max(debits - credits, 0)),
    creditBalance: roundedMoney(Math.max(credits - debits, 0)),
  }
}

/** Calculate ledger-wide and transaction-level error-control results. */
export function evaluateLedgerControls(rows: LedgerRow[]): LedgerControls {
  const totalDebits = roundedMoney(rows.reduce((sum, row) => sum + row.debit, 0))
  const totalCredits = roundedMoney(rows.reduce((sum, row) => sum + row.credit, 0))
  const transactionTotals = new Map<string, { debits: number; credits: number }>()

  for (const row of rows) {
    const current = transactionTotals.get(row.transactionId) ?? { debits: 0, credits: 0 }
    current.debits += row.debit
    current.credits += row.credit
    transactionTotals.set(row.transactionId, current)
  }

  const unbalancedTransactionCount = [...transactionTotals.values()].filter(
    ({ debits, credits }) => roundedMoney(debits - credits) !== 0,
  ).length

  return {
    totalDebits,
    totalCredits,
    difference: roundedMoney(totalDebits - totalCredits),
    unbalancedTransactionCount,
    blankAccountCount: rows.filter(({ account }) => account.trim() === "").length,
  }
}

/** Check the lesson's Excel table-name rules. */
export function isValidExcelTableName(name: string): boolean {
  return /^(?=.*ledger)[A-Za-z_][A-Za-z0-9_.]*$/i.test(name.trim())
}
