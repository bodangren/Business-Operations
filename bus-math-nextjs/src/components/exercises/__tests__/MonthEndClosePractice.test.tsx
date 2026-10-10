/** @vitest-environment jsdom */
import { afterEach, describe, expect, it } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MonthEndClosePractice from "../MonthEndClosePractice"

afterEach(cleanup)

const scenarioAccounts = [
  ["Deferral", "Supplies Expense", "Supplies"],
  ["Deferral", "Insurance Expense", "Prepaid Insurance"],
  ["Depreciation", "Depreciation Expense", "Accumulated Depreciation"],
  ["Accrual", "Wages Expense", "Wages Payable"],
  ["Deferral", "Unearned Revenue", "Service Revenue"],
  ["Accrual", "Accounts Receivable", "Service Revenue"],
  ["Accrual", "Interest Expense", "Interest Payable"],
  ["Deferral", "Rent Expense", "Prepaid Rent"],
] as const

function submitAnswer(round: number, amount: number) {
  const selects = screen.getAllByRole("combobox")
  scenarioAccounts[round % 8].forEach((value, index) => {
    fireEvent.change(selects[index], { target: { value } })
  })
  fireEvent.change(screen.getByRole("spinbutton"), { target: { value: String(amount) } })
  fireEvent.click(screen.getByRole("button", { name: "Check Answer" }))
}

function openRound(round: number) {
  render(<MonthEndClosePractice masteryTarget={1000} />)
  for (let index = 0; index < round; index += 1) {
    fireEvent.click(screen.getByRole("button", { name: "Check Answer" }))
    fireEvent.click(screen.getByRole("button", { name: "Next Scenario" }))
  }
}

function visibleNumber(text: string, pattern: RegExp): number {
  const match = text.match(pattern)
  if (!match) throw new Error(`Missing scenario input: ${pattern}`)
  return Number(match[1].replaceAll(",", ""))
}

function calculateVisibleAmount(round: number): number {
  const prompt = screen.getByText(/Unadjusted balance:|Work completed for a client|Note payable:|Employees worked/).parentElement!
  const text = prompt.textContent!
  const balance = () => visibleNumber(text, /Unadjusted balance: \$([\d,]+)/)
  let amount: number

  switch (round % 8) {
    case 0:
      amount = balance() - visibleNumber(text, /Physical count shows \$([\d,]+)/)
      break
    case 1:
      amount = balance() / visibleNumber(text, /(\d+) months/)
      break
    case 2:
      amount = (balance() - visibleNumber(text, /Salvage value: \$([\d,]+)/)) /
        (visibleNumber(text, /Useful life: (\d+) years/) * 12)
      break
    case 3:
      amount = visibleNumber(text, /last (\d+) days/) * visibleNumber(text, /Daily payroll: \$([\d,]+)/)
      break
    case 4:
      amount = balance() / visibleNumber(text, /(\d+)-month project/)
      break
    case 5:
      amount = visibleNumber(text, /worth \$([\d,]+)/)
      break
    case 6:
      amount = visibleNumber(text, /Note payable: \$([\d,]+)/) *
        visibleNumber(text, /Annual interest rate: (\d+)%/) / 100 / 12
      break
    default:
      amount = balance() / visibleNumber(text, /covers (\d+) months/)
  }

  return Number(amount.toFixed(2))
}

describe("MonthEndClosePractice arithmetic", () => {
  it.each([
    [0, "supplies", 2000],
    [1, "prepaid insurance", 327.27],
    [2, "straight-line depreciation", 833.33],
    [3, "accrued wages", 800],
    [4, "earned revenue", 2000],
    [5, "accrued service revenue", 600],
    [6, "accrued interest", 100],
    [7, "prepaid rent", 2250],
  ])("accepts the correct amount in round %i (%s)", (round, _description, amount) => {
    openRound(round)
    submitAnswer(round, amount)
    expect(screen.getByText("Correct!")).toBeInTheDocument()
  })

  it("accepts amounts calculated from the displayed inputs for the full 120-round cycle", () => {
    openRound(0)
    // The scenario selector and all input variations repeat after 120 rounds.
    for (let round = 0; round < 120; round += 1) {
      const amount = calculateVisibleAmount(round)
      submitAnswer(round, amount)
      expect(screen.queryByText("Correct!"), `Round ${round + 1}: $${amount}`).toBeInTheDocument()
      fireEvent.click(screen.getByRole("button", { name: "Next Scenario" }))
    }
  }, 30000)

  it("rejects the old interest answer and shows the correct entry", () => {
    openRound(6)
    submitAnswer(6, 75)
    expect(screen.queryByText("Correct!")).not.toBeInTheDocument()
    expect(screen.getByText(/^Debit Interest Expense \.{2,}/)).toHaveTextContent("$100.00")
    expect(screen.getByText(/^Credit Interest Payable \.{2,}/)).toHaveTextContent("$100.00")
  })

  it("states the rounding rule and accepts cent increments", () => {
    openRound(0)
    expect(screen.getByText(/Round the final amount to the nearest cent/)).toBeInTheDocument()
    expect(screen.getByRole("spinbutton")).toHaveAttribute("step", "0.01")
  })

  it("starts a new practice streak after mastery", () => {
    render(<MonthEndClosePractice />)
    for (const [round, amount] of [2000, 327.27, 833.33].entries()) {
      submitAnswer(round, amount)
      if (round < 2) fireEvent.click(screen.getByRole("button", { name: "Next Scenario" }))
    }
    expect(screen.getByText("Mastery Achieved!")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: "Continue Practicing" }))
    expect(screen.getByText("Round 4: Identify the Adjustment")).toBeInTheDocument()
    expect(screen.queryByText("Mastery Achieved!")).not.toBeInTheDocument()
    submitAnswer(3, 800)
    expect(screen.getByText("Correct!")).toBeInTheDocument()
  })
})
