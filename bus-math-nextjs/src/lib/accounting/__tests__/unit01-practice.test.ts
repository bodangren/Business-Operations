import { describe, expect, it } from "vitest"

import {
  calculateAccountTotals,
  createPostingScenario,
  evaluateLedgerControls,
  getInitialPostingScenario,
  isValidExcelTableName,
  UNIT01_EQUATION_TRANSACTIONS,
  upsertJournalLine,
  validateEquationResponse,
  validateJournalEntry,
} from "../unit01-practice"

describe("Unit 1 equation practice", () => {
  it("accepts the supplies-on-credit pattern shown to the student", () => {
    const transaction = UNIT01_EQUATION_TRANSACTIONS.find(({ id }) => id === "t3")

    expect(transaction).toBeDefined()
    expect(
      validateEquationResponse(transaction!, {
        assetsChange: 1_200,
        liabilitiesChange: 1_200,
        equityChange: 0,
        pattern: "Assets and Liabilities Both Increase",
      }),
    ).toBe(true)
  })

  it("rejects a response with the wrong equation amount", () => {
    const transaction = UNIT01_EQUATION_TRANSACTIONS[0]

    expect(
      validateEquationResponse(transaction, {
        assetsChange: 2_500,
        liabilitiesChange: 0,
        equityChange: 0,
        pattern: transaction.pattern,
      }),
    ).toBe(false)
  })
})

describe("Unit 1 journal-entry practice", () => {
  it("uses a stable initial scenario for server and client rendering", () => {
    expect(getInitialPostingScenario()).toEqual(getInitialPostingScenario())
  })

  it("formats comma amounts without appending a second number", () => {
    const scenario = createPostingScenario(3, 1.5)

    expect(scenario.description).toContain("$3,750")
    expect(scenario.description).not.toContain("$3,750,500")
  })

  it("describes the same cash split used by the equipment entry", () => {
    const scenario = createPostingScenario(6, 1)
    const cashCredit = scenario.correctEntry.find(({ account }) => account === "Cash")?.credit

    expect(scenario.description).toContain(`$${cashCredit?.toLocaleString("en-US")}`)
    expect(scenario.correctEntry.reduce((sum, line) => sum + line.debit, 0)).toBe(
      scenario.correctEntry.reduce((sum, line) => sum + line.credit, 0),
    )
  })

  it("debits a liability when the business pays a bank loan", () => {
    const scenario = createPostingScenario(9, 1)

    expect(scenario.correctEntry).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ account: "Notes Payable", debit: 2_200, credit: 0 }),
        expect.objectContaining({ account: "Cash", debit: 0, credit: 2_200 }),
      ]),
    )
  })

  it("accepts a correct entry in either line order and ignores account case", () => {
    const scenario = createPostingScenario(0, 1)
    const reversed = [...scenario.correctEntry]
      .reverse()
      .map((line, index) => ({ ...line, id: String(index + 1), account: line.account.toLowerCase() }))

    expect(validateJournalEntry(reversed, scenario.correctEntry)).toBe(true)
  })

  it("rejects a balanced entry with the wrong amount on an account", () => {
    const scenario = createPostingScenario(6, 1)
    const incorrect = scenario.correctEntry.map((line) => ({ ...line }))
    incorrect[1].credit += 100
    incorrect[2].credit -= 100

    expect(validateJournalEntry(incorrect, scenario.correctEntry)).toBe(false)
  })

  it("creates a line when the student enters an amount before an account", () => {
    const result = upsertJournalLine([], "1", "debit", "650")

    expect(result).toEqual([{ id: "1", account: "", debit: 650, credit: 0 }])
  })
})

describe("Unit 1 ledger formula practice", () => {
  const rows = [
    { transactionId: "T001", account: "Cash", debit: 2_200, credit: 0 },
    { transactionId: "T001", account: "Service Revenue", debit: 0, credit: 2_200 },
    { transactionId: "T002", account: "Software Expense", debit: 52.99, credit: 0 },
    { transactionId: "T002", account: "Cash", debit: 0, credit: 52.99 },
  ]

  it("calculates SUMIF-style totals for one account", () => {
    expect(calculateAccountTotals(rows, "cash")).toEqual({
      debits: 2_200,
      credits: 52.99,
      debitBalance: 2_147.01,
      creditBalance: 0,
    })
  })

  it("checks ledger totals and transaction-level balance", () => {
    expect(evaluateLedgerControls(rows)).toEqual({
      totalDebits: 2_252.99,
      totalCredits: 2_252.99,
      difference: 0,
      unbalancedTransactionCount: 0,
      blankAccountCount: 0,
    })
  })

  it("finds an equal-total failure inside one transaction", () => {
    const rowsWithOffsettingErrors = [
      ...rows,
      { transactionId: "T003", account: "Cash", debit: 100, credit: 0 },
      { transactionId: "T004", account: "Cash", debit: 0, credit: 100 },
    ]

    expect(evaluateLedgerControls(rowsWithOffsettingErrors)).toMatchObject({
      difference: 0,
      unbalancedTransactionCount: 2,
    })
  })
})

describe("Unit 1 Excel table naming", () => {
  it("accepts the required descriptive table name", () => {
    expect(isValidExcelTableName("LedgerTable")).toBe(true)
  })

  it("rejects spaces and names that start with a number", () => {
    expect(isValidExcelTableName("Ledger Table")).toBe(false)
    expect(isValidExcelTableName("1LedgerTable")).toBe(false)
  })
})
