// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import Unit02PeerFeedback from '../Unit02PeerFeedback'

beforeEach(() => localStorage.clear())
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); vi.useRealTimers() })
it('saves an incomplete draft and restores it on the same lesson', async () => {
  const view = render(<Unit02PeerFeedback projectTitle="Rehearsal audit" />)
  fireEvent.change(screen.getByLabelText('Specific strength'), { target: { value: 'The trial balance links to the source accounts.' } })
  fireEvent.click(screen.getByRole('button', { name: 'Save draft' }))
  expect(screen.getByRole('status').textContent).toContain('Saved')
  view.unmount()
  render(<Unit02PeerFeedback projectTitle="Rehearsal audit" />)
  await waitFor(() => expect((screen.getByLabelText('Specific strength') as HTMLTextAreaElement).value).toContain('trial balance'))
  expect(screen.getByRole('button', { name: 'Export feedback' })).toBeDefined()
})
it('keeps rehearsal and final presentation drafts separate', () => {
  const view = render(<Unit02PeerFeedback projectTitle="Rehearsal audit" />)
  fireEvent.change(screen.getByLabelText('Specific strength'), { target: { value: 'Rehearsal evidence' } })
  fireEvent.click(screen.getByRole('button', { name: 'Save draft' }))
  view.unmount()
  render(<Unit02PeerFeedback projectTitle="Final presentation" />)
  expect((screen.getByLabelText('Specific strength') as HTMLTextAreaElement).value).toBe('')
})

it('exports a draft as a downloadable text file without sending feedback', () => {
  vi.useFakeTimers()
  const createObjectURL = vi.fn().mockReturnValue('blob:feedback')
  const revokeObjectURL = vi.fn()
  vi.stubGlobal('URL', { createObjectURL, revokeObjectURL })
  const clicked: { href?: string; download?: string } = {}
  vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
    clicked.href = this.href
    clicked.download = this.download
  })
  render(<Unit02PeerFeedback projectTitle="Rehearsal audit" />)
  fireEvent.change(screen.getByLabelText('Workbook evidence'), { target: { value: 'Report!B6 gives monthly net income.' } })
  fireEvent.click(screen.getByRole('button', { name: 'Export feedback' }))
  expect(clicked).toEqual({ href: 'blob:feedback', download: 'unit02-peer-feedback.txt' })
  expect(createObjectURL.mock.calls[0][0].type).toBe('text/plain;charset=utf-8')
  expect(screen.getByRole('status').textContent).toContain('Feedback exported')
  vi.advanceTimersByTime(1000)
  expect(revokeObjectURL).toHaveBeenCalledWith('blob:feedback')
})
