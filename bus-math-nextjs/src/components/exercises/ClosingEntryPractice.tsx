'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  buildClosingEntries, checkClosingEntries, generateUnit02ClosingScenario,
  type ClosingLine,
} from '@/lib/accounting/unit02-practice'

const STEP_NAMES = ['Close revenue', 'Close expenses', 'Close Income Summary', 'Close dividends']

/**
 * Render closing-entry practice with account, direction, amount, and posting checks.
 * @param props - The required number of consecutive correct cases.
 * @returns The practice journal and feedback.
 */
export default function ClosingEntryPractice({ masteryTarget = 3 }: { masteryTarget?: number }) {
  const [round, setRound] = useState(0)
  const [streak, setStreak] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [showExample, setShowExample] = useState(false)
  const scenario = generateUnit02ClosingScenario(round)
  const expected = buildClosingEntries(scenario)
  const empty = () => expected.map(line => ({ step: line.step, account: '', side: '' as ClosingLine['side'], amount: NaN }))
  const [lines, setLines] = useState<ClosingLine[]>(empty)
  const [result, setResult] = useState<ReturnType<typeof checkClosingEntries> | null>(null)
  const accounts = [...scenario.revenues.map(account => account.name), ...scenario.expenses.map(account => account.name), 'Income Summary', 'Retained Earnings', 'Dividends', 'Cash', 'Common Stock']
  const update = (index: number, patch: Partial<ClosingLine>) => setLines(previous => previous.map((line, i) => i === index ? { ...line, ...patch } : line))
  const ready = lines.every(line => line.account && line.side && Number.isFinite(line.amount) && line.amount >= 0)

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold">Closing Entry Practice</h3>
      <p>Record every closing entry. Select the account and its debit or credit side. Use nonnegative journal amounts. For a net loss, reverse the Income Summary entry. If dividends are zero, no dividend entry is needed.</p>
      <p className="text-sm">Round {round + 1}. {streak}/{masteryTarget} consecutive correct cases. The cases include profit, loss, and dividends.</p>
      <div className="rounded border p-4 space-y-2">
        <h4 className="font-semibold">Adjusted temporary balances ($)</h4>
        {scenario.revenues.map(account => <p key={account.name}>{account.name}: {account.balance} Credit</p>)}
        {scenario.expenses.map(account => <p key={account.name}>{account.name}: {account.balance} Debit</p>)}
        <p>Dividends: {scenario.dividends} Debit. Beginning Retained Earnings: {scenario.beginningRE} Credit.</p>
      </div>
      {STEP_NAMES.map((name, step) => (
        <fieldset key={name} className="space-y-3 border-t pt-3" disabled={submitted}>
          <legend className="font-semibold">Step {step + 1}: {name}</legend>
          {step === 3 && scenario.dividends === 0 ? <p>No dividends were paid. Skip this entry.</p> : null}
          {lines.map((line, index) => line.step === step + 1 ? (
            <div key={index} className="grid gap-2 sm:grid-cols-3">
              <label className="text-sm">Account, line {index + 1}
                <select aria-label={'Account, line ' + (index + 1)} value={line.account} onChange={event => update(index, { account: event.target.value })} className="mt-1 w-full rounded border p-2">
                  <option value="">Select account</option>
                  {accounts.map(account => <option key={account}>{account}</option>)}
                </select>
              </label>
              <label className="text-sm">Side, line {index + 1}
                <select aria-label={'Side, line ' + (index + 1)} value={line.side} onChange={event => update(index, { side: event.target.value as ClosingLine['side'] })} className="mt-1 w-full rounded border p-2">
                  <option value="">Select side</option><option>Debit</option><option>Credit</option>
                </select>
              </label>
              <label className="text-sm">Amount ($), line {index + 1}
                <input aria-label={'Amount ($), line ' + (index + 1)} type="number" min="0" step="0.01" value={Number.isNaN(line.amount) ? '' : line.amount} onChange={event => update(index, { amount: event.target.value === '' ? NaN : Number(event.target.value) })} className="mt-1 w-full rounded border p-2" />
              </label>
            </div>
          ) : null)}
        </fieldset>
      ))}
      {!submitted ? <Button disabled={!ready} onClick={() => {
        const checked = checkClosingEntries(scenario, lines)
        setResult(checked); setSubmitted(true); setStreak(previous => checked.correct ? previous + 1 : 0)
      }}>Check closing entries</Button> : null}
      {result ? <div role="status" className="rounded border p-4 space-y-2">
        <p>{result.correct ? 'Correct. All temporary accounts are zero.' : 'Review the accounts, sides, and amounts. Each entry must balance. Every temporary account must end at zero.'}</p>
        {Object.entries(result.temporary).map(([account, balance]) => <p key={account}>{account}: {balance.toFixed(2)}</p>)}
        <p>Posted Retained Earnings: {result.endingRE.toFixed(2)}</p>
        {result.correct && streak >= masteryTarget ? <p>Mastery achieved. You prepared and posted {masteryTarget} correct sets of closing entries.</p> : null}
        {!result.correct ? <Button variant="outline" onClick={() => setShowExample(true)}>Show worked example</Button> : null}
      </div> : null}
      {showExample ? <div className="space-y-1 rounded bg-muted p-4">
        {expected.map((line, index) => <p key={index}>Step {line.step}: {line.side} {line.account} {line.amount.toFixed(2)}</p>)}
        <p>Revenue and expenses close to Income Summary. Profit credits Retained Earnings. Loss debits Retained Earnings. Dividends close directly to Retained Earnings.</p>
      </div> : null}
      {submitted ? <Button variant="outline" onClick={() => {
        const next = round + 1
        setRound(next); setLines(buildClosingEntries(generateUnit02ClosingScenario(next)).map(line => ({ step: line.step, account: '', side: '' as ClosingLine['side'], amount: NaN })))
        setSubmitted(false); setResult(null); setShowExample(false)
      }}>New Numbers</Button> : null}
    </div>
  )
}
