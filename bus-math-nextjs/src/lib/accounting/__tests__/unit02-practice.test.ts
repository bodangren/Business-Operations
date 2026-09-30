import { describe, expect, it } from 'vitest'
import { generateUnit02AdjustmentScenario, buildClosingEntries, checkClosingEntries } from '../unit02-practice'

describe('month-end amounts follow the displayed source facts', () => {
  it('calculates monthly depreciation, accrued wages, earned revenue, interest, and rent', () => {
    expect(generateUnit02AdjustmentScenario(2).amount).toBe(833.33)
    expect(generateUnit02AdjustmentScenario(3).amount).toBe(800)
    expect(generateUnit02AdjustmentScenario(4).amount).toBe(2000)
    expect(generateUnit02AdjustmentScenario(6).amount).toBe(100)
    expect(generateUnit02AdjustmentScenario(7).amount).toBe(2250)
  })
  it('keeps supply use and insurance periods consistent across varied rounds', () => {
    for (let round = 0; round < 80; round += 8) {
      const supplies = generateUnit02AdjustmentScenario(round)
      const remaining = Number(supplies.additionalInfo.match(/\$(\d+)/)![1])
      expect(supplies.amount).toBe(supplies.unadjustedBalance - remaining)
      const insurance = generateUnit02AdjustmentScenario(round + 1)
      const months = Number(insurance.additionalInfo.match(/(\d+) months/)![1])
      expect(insurance.amount).toBe(Math.round(insurance.unadjustedBalance / months * 100) / 100)
    }
  })
})

describe('closing entries assess accounts, sides, amounts, and resulting balances', () => {
  const loss = { id: 1, revenues: [{ name: 'Service Revenue', balance: 1000 }], expenses: [{ name: 'Rent Expense', balance: 1200 }], dividends: 50, beginningRE: 500 }
  it('reverses the Income Summary entry for a loss and closes dividends separately', () => {
    const entries = buildClosingEntries(loss)
    expect(entries.filter(line => line.step === 3)).toEqual([
      { step: 3, account: 'Retained Earnings', side: 'Debit', amount: 200 },
      { step: 3, account: 'Income Summary', side: 'Credit', amount: 200 },
    ])
    expect(checkClosingEntries(loss, entries)).toMatchObject({ correct: true, endingRE: 250 })
  })
  it('rejects balanced entries with the wrong accounts or direction', () => {
    const entries = buildClosingEntries(loss)
    const wrong = entries.map(line => line.step === 3 ? { ...line, side: line.side === 'Debit' ? 'Credit' as const : 'Debit' as const } : line)
    expect(checkClosingEntries(loss, wrong).correct).toBe(false)
  })
})
