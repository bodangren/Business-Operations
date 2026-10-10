/** @vitest-environment jsdom */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import GoalSeekSimulator from '@/app/student/unit06/lesson05/GoalSeekSimulator'
import DataTableSimulator from '@/app/student/unit06/lesson06/DataTableSimulator'
import TimingPractice from '@/app/student/unit05/lesson04/phase-4/PhaseContent'
import MedianPractice from '@/app/student/unit04/lesson02/phase-4/PhaseContent'
import MonthEndGuided from '@/app/student/unit02/lesson04/phase-3/PhaseContent'
import MonthEndChallenge from '../MonthEndChallenge'
import IncomeGuided from '@/app/student/unit03/lesson02/phase-3/PhaseContent'
import StatisticsGuided from '@/app/student/unit04/lesson02/phase-3/PhaseContent'
import OutliersGuided from '@/app/student/unit04/lesson03/phase-3/PhaseContent'
import { CashFlowPractice } from '../CashFlowPractice'
import CostAssignmentPractice from '@/app/student/unit07/lesson02/CostAssignmentPractice'
import WeightedAvgPractice from '@/app/student/unit07/lesson04/WeightedAvgPractice'
import StraightLineMastery from '../StraightLineMastery'
import { FinancialDashboard } from '@/components/charts/FinancialDashboard'

vi.mock('recharts', async importOriginal => ({
  ...await importOriginal<typeof import('recharts')>(),
  ResponsiveContainer: () => null,
}))

afterEach(() => { cleanup(); vi.restoreAllMocks() })

function fillNumbers(values: number[]) {
  screen.getAllByRole('spinbutton').forEach((input, index) => {
    fireEvent.change(input, { target: { value: String(values[index]) } })
  })
}

describe('practice audit feedback and progression', () => {
  it.each(['15000', '$15,000', '15000.00'])('accepts the stated Goal Seek target %s', target => {
    render(<GoalSeekSimulator />)
    const inputs = screen.getAllByRole('textbox')
    ;['Profit', target, 'Price'].forEach((value, index) => fireEvent.change(inputs[index], { target: { value } }))
    fireEvent.click(screen.getByRole('button', { name: 'Check Setup' }))
    expect(screen.getByText(/set up Goal Seek to find/)).toBeInTheDocument()
  })

  it.each(['15000000', '15000junk', '', '-15000'])('rejects an invalid Goal Seek target %s', target => {
    render(<GoalSeekSimulator />)
    const inputs = screen.getAllByRole('textbox')
    ;['Profit', target, 'Price'].forEach((value, index) => fireEvent.change(inputs[index], { target: { value } }))
    fireEvent.click(screen.getByRole('button', { name: 'Check Setup' }))
    expect(screen.queryByText(/set up Goal Seek to find/)).not.toBeInTheDocument()
  })

  it('shows a price that reaches the profit target', () => {
    render(<GoalSeekSimulator />)
    fireEvent.click(screen.getByRole('button', { name: 'Show Answer' }))
    expect(screen.getByText('$1960.00')).toBeInTheDocument()
    expect(screen.queryByText('$1,388')).not.toBeInTheDocument()
  })

  it.each([['B4', 'B5'], ['$B$4', '$B$5'], ['price', 'volume']])('accepts matching Data Table inputs %s and %s', (column, row) => {
    render(<DataTableSimulator />)
    screen.getAllByRole('textbox').forEach((input, index) => fireEvent.change(input, { target: { value: [column, row][index] } }))
    screen.getAllByRole('button', { name: 'Check' }).forEach(button => fireEvent.click(button))
    expect(screen.getAllByText('Correct!')).toHaveLength(2)
    expect(screen.getByText(/volumes go across the top row/i)).toBeInTheDocument()
  })

  it.each([['B5', 'B6'], ['B40', 'B50'], ['wrong Price', 'wrong Volume'], ['', '']])('rejects wrong Data Table inputs %s and %s', (column, row) => {
    render(<DataTableSimulator />)
    screen.getAllByRole('textbox').forEach((input, index) => fireEvent.change(input, { target: { value: [column, row][index] } }))
    screen.getAllByRole('button', { name: 'Check' }).forEach(button => fireEvent.click(button))
    expect(screen.queryByText('Correct!')).not.toBeInTheDocument()
  })

  it('generates a new payroll problem and counts one submission per round', () => {
    render(<TimingPractice />)
    fillNumbers([4700, 1759, 12300])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answers' }))
    expect(screen.getByText(/Mastery Progress: 1/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Check Answers' }))
    expect(screen.getByText(/Mastery Progress: 1/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Try Another Problem' }))
    expect(screen.getByText('Gross wages: $7,000')).toBeInTheDocument()
    fillNumbers([0, 0, 0])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answers' }))
    expect(screen.getByText(/Mastery Progress: 0/)).toBeInTheDocument()
  })

  it('accepts the exact median and rejects the old answer', () => {
    render(<MedianPractice />)
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '128' } })
    fireEvent.click(screen.getByRole('button', { name: /Check/ }))
    fireEvent.click(screen.getByRole('button', { name: /Next/ }))
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '86.5' } })
    fireEvent.click(screen.getByRole('button', { name: /Check/ }))
    expect(screen.queryByText(/Not quite/)).not.toBeInTheDocument()
    expect(screen.getByText(/Streak:/).parentElement).toHaveTextContent('2')
  })

  it('never awards cash-flow mastery for incorrect answers', () => {
    vi.spyOn(Math, 'random').mockReturnValue(.5)
    render(<CashFlowPractice />)
    for (let round = 0; round < 3; round++) {
      fillNumbers([0, -3000, 2750, 5675])
      fireEvent.click(screen.getByRole('button', { name: 'Submit Answer' }))
      expect(screen.getByText('Not quite right')).toBeInTheDocument()
      expect(screen.queryByText('Mastery Achieved!')).not.toBeInTheDocument()
      fireEvent.click(screen.getByRole('button', { name: 'New Problem' }))
    }
  })

  it('requires the inventory pair to match goods available and permits correction', () => {
    render(<CostAssignmentPractice />)
    fillNumbers([37, 736])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answer' }))
    fireEvent.click(screen.getByRole('button', { name: /Continue to/ }))
    fillNumbers([360])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answer' }))
    expect(screen.getByText(/Outside the cost limits/)).toBeInTheDocument()
    fillNumbers([376])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answer' }))
    fireEvent.click(screen.getByRole('button', { name: 'Continue to Final Check' }))
    fillNumbers([316])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answer' }))
    expect(screen.getByText(/COGS plus ending inventory must equal/)).toBeInTheDocument()
    fillNumbers([360])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answer' }))
    expect(screen.getByText(/Correct! COGS of \$376 plus ending inventory of \$360 equals \$736/)).toBeInTheDocument()
  })

  it('checks the full Sugar allocation and rejects the old rounded-unit-cost answer', () => {
    vi.spyOn(Math, 'random').mockReturnValue(.25)
    render(<WeightedAvgPractice />)
    fireEvent.click(screen.getByRole('button', { name: 'Next Step' }))
    screen.getAllByText('Click to Reveal').forEach(element => fireEvent.click(element))
    fillNumbers([1000, 444])
    fireEvent.click(screen.getByRole('button', { name: 'Check My Answers' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next Step' }))
    fillNumbers([.444])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answer' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next Step' }))
    fillNumbers([264])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answer' }))
    expect(screen.getByText(/Not quite/)).toBeInTheDocument()
    fillNumbers([266.40])
    fireEvent.click(screen.getByRole('button', { name: 'Check Answer' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next Step' }))
    fillNumbers([400, 177.60])
    fireEvent.click(screen.getByRole('button', { name: 'Check Both Answers' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next Step' }))
    fillNumbers([444])
    fireEvent.click(screen.getByRole('button', { name: 'Check' }))
    expect(screen.getByText('$444.00 = $444 ✓')).toBeInTheDocument()
  })

  it.each([
    [.375, 4165],
    [.6, 3574],
  ])('accepts the final-year depreciation adjustment at life draw %s', (lifeDraw, expense) => {
    const draws = [0, 0, lifeDraw, 0, .99, .1]
    vi.spyOn(Math, 'random').mockImplementation(() => draws.shift() ?? .1)
    render(<StraightLineMastery />)
    screen.getAllByRole('textbox').forEach((input, index) => fireEvent.change(input, { target: { value: String([expense, 25000, 3000][index]) } }))
    fireEvent.click(screen.getByRole('button', { name: /Check|Submit/ }))
    expect(screen.getByText(/Correct\. You completed the full straight-line/)).toBeInTheDocument()
  })
})

describe('practice audit displayed calculations', () => {
  it('starts the March close with equal trial-balance totals', () => {
    render(<MonthEndGuided />)
    const rows = within(screen.getByRole('table')).getAllByRole('row').slice(1, -1)
    const total = (index: number) => rows.reduce((sum, row) => sum + Number(within(row).getAllByRole('cell')[index].textContent!.replace(/[$,]/g, '')), 0)
    expect(total(1)).toBe(total(2))
    expect(screen.getByText(/Accum\. Depr\.:/)).toHaveTextContent('$400 + $400 = $800')
  })

  it('explains that balanced adjustments preserve an existing difference', () => {
    render(<MonthEndChallenge entries={[]} trialBalanceTotal={{ debits: 100, credits: 80 }} />)
    expect(screen.getByText(/Equal debit and credit adjustments cannot remove this difference/)).toBeInTheDocument()
  })

  it('separates operating income and interest income', () => {
    render(<IncomeGuided />)
    expect(screen.getByText('Operating Income').parentElement).toHaveTextContent('$4,850')
    expect(screen.getAllByText('Interest Income').at(-1)!.parentElement).toHaveTextContent('$120')
    expect(screen.getByText('Net Income').parentElement).toHaveTextContent('$4,890')
  })

  it('shows means calculated from the displayed data', () => {
    render(<StatisticsGuided />)
    expect(screen.getByText('Mean = $699.38')).toBeInTheDocument()
    expect(screen.getByText('Sum = 970')).toBeInTheDocument()
    expect(screen.getByText('Rounded: 139 customers/day')).toBeInTheDocument()
  })

  it('shows sample deviations and corresponding z-scores', () => {
    render(<OutliersGuided />)
    expect(screen.getByText('38.85')).toBeInTheDocument()
    expect(screen.getByText('2.83')).toBeInTheDocument()
    expect(screen.getByText('-0.45')).toBeInTheDocument()
    expect(screen.getByText(/Std Dev = \$3.89/)).toBeInTheDocument()
  })

  it('sums the displayed monthly cash flow for its KPI', () => {
    render(<FinancialDashboard />)
    expect(screen.getByText('$23,300')).toBeInTheDocument()
    expect(screen.queryByText('$23,100')).not.toBeInTheDocument()
  })
})
