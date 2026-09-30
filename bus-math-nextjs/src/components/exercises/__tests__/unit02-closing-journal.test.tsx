// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import ClosingEntryPractice from '../ClosingEntryPractice'
import { buildClosingEntries, generateUnit02ClosingScenario } from '@/lib/accounting/unit02-practice'

afterEach(cleanup)

it('requires accounts and sides, then posts profit, loss, and dividend cases', () => {
  render(<ClosingEntryPractice />)
  const first = screen.getByRole('button', { name: 'Check closing entries' }) as HTMLButtonElement
  expect(first.disabled).toBe(true)
  expect(screen.queryByText(/Mastery achieved/)).toBeNull()
  for (let round = 0; round < 3; round++) {
    const entries = buildClosingEntries(generateUnit02ClosingScenario(round))
    entries.forEach((entry, index) => {
      fireEvent.change(screen.getByLabelText('Account, line ' + (index + 1)), { target: { value: entry.account } })
      fireEvent.change(screen.getByLabelText('Side, line ' + (index + 1)), { target: { value: entry.side } })
      fireEvent.change(screen.getByLabelText('Amount ($), line ' + (index + 1)), { target: { value: String(entry.amount) } })
    })
    fireEvent.click(screen.getByRole('button', { name: 'Check closing entries' }))
    expect(screen.getByRole('status').textContent).toContain('Correct. All temporary accounts are zero.')
    if (round < 2) {
      expect(screen.queryByText(/Mastery achieved/)).toBeNull()
      fireEvent.click(screen.getByRole('button', { name: 'New Numbers' }))
    }
  }
  expect(screen.getByText(/Mastery achieved/)).toBeDefined()
})
