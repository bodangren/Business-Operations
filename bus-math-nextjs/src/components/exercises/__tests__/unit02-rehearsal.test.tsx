// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import Unit02WorkbookRehearsal from '../Unit02WorkbookRehearsal'

afterEach(cleanup)
it('checks linked numeric outputs before revealing a result', () => {
  render(<Unit02WorkbookRehearsal mode="formulas" />)
  expect(screen.queryByText(/Revealed result/)).toBeNull()
  fireEvent.change(screen.getByLabelText('Your result'), { target: { value: 'input values' } })
  fireEvent.click(screen.getByRole('button', { name: 'Check result' }))
  expect(screen.getByRole('status').textContent).toContain('Review')
  fireEvent.change(screen.getByLabelText('Your result'), { target: { value: '1234' } })
  fireEvent.click(screen.getByRole('button', { name: 'Check result' }))
  expect(screen.getByRole('status').textContent).toContain('Correct')
})
it('rejects a keyword inside a contradictory answer', () => {
  render(<Unit02WorkbookRehearsal mode="validation" />)
  fireEvent.change(screen.getByLabelText('Your result'), { target: { value: 'Do not Review this valid input' } })
  fireEvent.click(screen.getByRole('button', { name: 'Check result' }))
  expect(screen.getByRole('status').textContent).not.toContain('Correct')
  fireEvent.change(screen.getByLabelText('Your result'), { target: { value: 'Review' } })
  fireEvent.click(screen.getByRole('button', { name: 'Check result' }))
  expect(screen.getByRole('status').textContent).toContain('Correct')
})
