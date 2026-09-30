function roundMoney(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

export interface AdjustmentItem {
  description: string
  unadjustedBalance: number
  additionalInfo: string
  entryType: "accrued-revenue" | "accrued-expense" | "deferred-revenue" | "deferred-expense" | "depreciation"
  debitAccount: string
  creditAccount: string
  amount: number
  explanation: string
}

/**
 * Create an adjustment from the same facts shown to the student.
 * @param seed - Round number used to vary the source facts.
 * @returns The displayed facts, journal accounts, and rounded amount.
 */
export function generateUnit02AdjustmentScenario(seed: number): AdjustmentItem {
  const scenarios: AdjustmentItem[] = [
    {
      description: "Supplies on hand at month-end",
      unadjustedBalance: 3000 + (seed % 5) * 1000,
      additionalInfo: `Physical count shows $${1000 + (seed % 3) * 500} remaining`,
      entryType: "deferred-expense",
      debitAccount: "Supplies Expense",
      creditAccount: "Supplies",
      amount: (3000 + (seed % 5) * 1000) - (1000 + (seed % 3) * 500),
      explanation: "Supplies used = unadjusted balance minus physical count. Debit Supplies Expense to record the cost used; credit Supplies to reduce the asset."
    },
    {
      description: "Prepaid insurance expired",
      unadjustedBalance: 2400 + (seed % 3) * 1200,
      additionalInfo: `${12 - (seed % 6)} months of coverage remain BEFORE this month. One month has now expired`,
      entryType: "deferred-expense",
      debitAccount: "Insurance Expense",
      creditAccount: "Prepaid Insurance",
      amount: roundMoney((2400 + (seed % 3) * 1200) / (12 - (seed % 6))),
      explanation: "One month of prepaid insurance has expired. Debit Insurance Expense; credit Prepaid Insurance to reduce the asset."
    },
    {
      description: "Monthly depreciation on equipment",
      unadjustedBalance: 30000 + (seed % 4) * 10000,
      additionalInfo: `Useful life: ${3 + (seed % 5)} years. Salvage value: $0. Straight-line method.`,
      entryType: "depreciation",
      debitAccount: "Depreciation Expense",
      creditAccount: "Accumulated Depreciation",
      amount: roundMoney((30000 + (seed % 4) * 10000) / ((3 + (seed % 5)) * 12)),
      explanation: "Monthly depreciation = (Cost - Salvage) / Useful life in months. Debit Depreciation Expense; credit Accumulated Depreciation (a contra-asset)."
    },
    {
      description: "Wages earned by employees but not yet paid",
      unadjustedBalance: 0,
      additionalInfo: `Employees worked the last ${2 + (seed % 3)} days of the month. Daily payroll: $${400 + (seed % 3) * 200}.`,
      entryType: "accrued-expense",
      debitAccount: "Wages Expense",
      creditAccount: "Wages Payable",
      amount: (2 + (seed % 3)) * (400 + (seed % 3) * 200),
      explanation: "Wages have been incurred but not yet paid. Debit Wages Expense to record the cost; credit Wages Payable to record the liability."
    },
    {
      description: "Unearned revenue now earned",
      unadjustedBalance: 3000 + (seed % 3) * 1000,
      additionalInfo: `Cash was received in advance for a ${2 + (seed % 2)}-month project. One month of work is complete.`,
      entryType: "deferred-revenue",
      debitAccount: "Unearned Revenue",
      creditAccount: "Service Revenue",
      amount: roundMoney((3000 + (seed % 3) * 1000) / (2 + (seed % 2))),
      explanation: "Part of the advance payment has been earned. Debit Unearned Revenue to reduce the liability; credit Service Revenue to recognize earned revenue."
    },
    {
      description: "Services performed but not yet billed",
      unadjustedBalance: 0,
      additionalInfo: `Work completed for a client worth $${600 + (seed % 5) * 200}. Invoice will be sent next month.`,
      entryType: "accrued-revenue",
      debitAccount: "Accounts Receivable",
      creditAccount: "Service Revenue",
      amount: 600 + (seed % 5) * 200,
      explanation: "Revenue has been earned but not yet recorded. Debit Accounts Receivable to record the amount owed; credit Service Revenue to recognize the revenue."
    },
    {
      description: "Interest on a note payable has accrued",
      unadjustedBalance: 0,
      additionalInfo: `Note payable: $${10000 + (seed % 5) * 5000}. Annual interest rate: ${6 + (seed % 4)}%. One month of interest has accrued.`,
      entryType: "accrued-expense",
      debitAccount: "Interest Expense",
      creditAccount: "Interest Payable",
      amount: roundMoney((10000 + (seed % 5) * 5000) * (6 + (seed % 4)) / 100 / 12),
      explanation: "Interest expense has been incurred but not yet paid. Debit Interest Expense; credit Interest Payable to record the liability."
    },
    {
      description: "Rent paid in advance now partially used",
      unadjustedBalance: 6000 + (seed % 3) * 3000,
      additionalInfo: `Prepaid rent covers ${3 + (seed % 3)} months. One month has passed.`,
      entryType: "deferred-expense",
      debitAccount: "Rent Expense",
      creditAccount: "Prepaid Rent",
      amount: roundMoney((6000 + (seed % 3) * 3000) / (3 + (seed % 3))),
      explanation: "One month of prepaid rent has been used. Debit Rent Expense; credit Prepaid Rent to reduce the asset."
    }
  ]

  return scenarios[seed % scenarios.length]
}

export interface ClosingScenario {
  id: number
  revenues: { name: string; balance: number }[]
  expenses: { name: string; balance: number }[]
  dividends: number
  beginningRE: number
}

export interface ClosingLine {
  step: number
  account: string
  side: 'Debit' | 'Credit'
  amount: number
}

/**
 * Create profit and loss cases with complete adjusted temporary balances.
 * @param round - Practice round used to vary amounts.
 * @returns A closing case with a profit or loss and stated dividends.
 */
export function generateUnit02ClosingScenario(round: number): ClosingScenario {
  const revenue = 5000 + (round % 7) * 350
  const loss = round % 3 === 1
  return {
    id: round,
    revenues: [{ name: 'Service Revenue', balance: revenue }, { name: 'Interest Revenue', balance: 100 }],
    expenses: [{ name: 'Rent Expense', balance: 2000 }, { name: 'Wages Expense', balance: loss ? revenue - 1600 : 1200 + (round % 4) * 100 }],
    dividends: round % 3 === 1 ? 0 : 500,
    beginningRE: 8000,
  }
}

/**
 * Build the four closing entries using Income Summary.
 * @param scenario - Adjusted balances and beginning retained earnings.
 * @returns Journal lines with nonnegative amounts and explicit debit or credit sides.
 */
export function buildClosingEntries(scenario: ClosingScenario): ClosingLine[] {
  const revenue = scenario.revenues.reduce((sum, account) => sum + account.balance, 0)
  const expense = scenario.expenses.reduce((sum, account) => sum + account.balance, 0)
  const net = revenue - expense
  return [
    ...scenario.revenues.map(account => ({ step: 1, account: account.name, side: 'Debit' as const, amount: account.balance })),
    { step: 1, account: 'Income Summary', side: 'Credit', amount: revenue },
    { step: 2, account: 'Income Summary', side: 'Debit', amount: expense },
    ...scenario.expenses.map(account => ({ step: 2, account: account.name, side: 'Credit' as const, amount: account.balance })),
    { step: 3, account: net >= 0 ? 'Income Summary' : 'Retained Earnings', side: 'Debit', amount: Math.abs(net) },
    { step: 3, account: net >= 0 ? 'Retained Earnings' : 'Income Summary', side: 'Credit', amount: Math.abs(net) },
    ...(scenario.dividends === 0 ? [] : [
      { step: 4, account: 'Retained Earnings', side: 'Debit' as const, amount: scenario.dividends },
      { step: 4, account: 'Dividends', side: 'Credit' as const, amount: scenario.dividends },
    ]),
  ]
}

/**
 * Check the accounts, directions, amounts, and posted temporary balances.
 * @param scenario - The balances to close.
 * @param entries - Journal lines entered by the student.
 * @returns Correctness, remaining temporary balances, and ending retained earnings.
 */
export function checkClosingEntries(scenario: ClosingScenario, entries: ClosingLine[]) {
  const expected = buildClosingEntries(scenario)
  const matched = expected.every(line => entries.some(candidate =>
    candidate.step === line.step && candidate.account === line.account && candidate.side === line.side &&
    Number.isFinite(candidate.amount) && Math.abs(candidate.amount - line.amount) < 0.005))
  const balances: Record<string, number> = { 'Income Summary': 0, Dividends: scenario.dividends, 'Retained Earnings': -scenario.beginningRE }
  scenario.revenues.forEach(account => { balances[account.name] = -account.balance })
  scenario.expenses.forEach(account => { balances[account.name] = account.balance })
  entries.forEach(line => { balances[line.account] = (balances[line.account] ?? 0) + (line.side === 'Debit' ? line.amount : -line.amount) })
  const temporary = Object.fromEntries(Object.entries(balances).filter(([account]) => account !== 'Retained Earnings'))
  const allZero = Object.values(temporary).every(balance => Math.abs(balance) < 0.005)
  return { correct: matched && entries.length === expected.length && allZero, temporary, endingRE: -balances['Retained Earnings'] }
}
