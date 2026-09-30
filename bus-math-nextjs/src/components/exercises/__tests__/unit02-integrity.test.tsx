// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ComprehensionCheck from '../ComprehensionCheck'
import Prediction from '@/app/student/unit02/lesson01/phase-3/PhaseContent'
import { allUnit02Phase5Questions, toComprehensionCheckFormat } from '@/data/question-banks/unit02-phase5'

afterEach(() => { cleanup(); vi.restoreAllMocks() })

describe('Unit 2 assessment integrity', () => {
  it('keeps the key for every question under different random orders', () => {
    for (const random of [0, 0.2, 0.8, 0.99]) {
      vi.spyOn(Math, 'random').mockReturnValue(random)
      const converted = toComprehensionCheckFormat(allUnit02Phase5Questions)
      converted.forEach((question, index) => {
        expect(question.answers[0]).toBe(allUnit02Phase5Questions[index].correctAnswer)
      })
      vi.restoreAllMocks()
    }
  })

  it('scores a correct answer when its display position changes', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.01)
    const complete = vi.fn()
    const source = allUnit02Phase5Questions.find(q => q.lessonId === 'lesson02')!
    render(<ComprehensionCheck questions={toComprehensionCheckFormat([source])} onComplete={complete} />)
    fireEvent.click(screen.getByRole('button', { name: new RegExp(source.correctAnswer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) }))
    fireEvent.click(screen.getByRole('button', { name: 'SUBMIT FOR AUDIT' }))
    expect(complete).toHaveBeenCalledWith(1, 1)
  })

  it('retains each delay prediction and gives matching feedback', () => {
    render(<Prediction />)
    fireEvent.click(screen.getByRole('radio', { name: 'She waits 4 days for accurate profitability data' }))
    fireEvent.click(screen.getByRole('radio', { name: 'She misses the weekend investor meeting' }))
    const radios = screen.getAllByRole('radio')
    fireEvent.click(radios[9])
    expect((radios[1] as HTMLInputElement).checked).toBe(true)
    expect((radios[4] as HTMLInputElement).checked).toBe(true)
    fireEvent.click(screen.getByRole('button', { name: /Reveal/i }))
    expect(screen.queryByText(/Different prediction/)).toBeNull()
  })
})
