'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface RehearsalStep { title: string; facts: string; formula: string; result: number | string; explanation: string }
const FORMULA_STEPS: RehearsalStep[] = [
  { title: 'Link an input', facts: 'Inputs!B5 is named SuppliesUsed. It changes from 1,200 to 1,234.', formula: '=SuppliesUsed', result: 1234, explanation: 'Both sides of the supplies adjustment link to the same input. Each becomes 1,234.' },
  { title: 'Total the journal', facts: 'The five debit amounts are 1,234, 300, 400, 1,800, and 1,200.', formula: '=SUM(B4:B13)', result: 4934, explanation: 'Add the five debit amounts. The unused debit cells contain zero.' },
  { title: 'Adjust the asset', facts: 'Unadjusted Supplies is 5,500. Supplies used is 1,234. There is no supplies debit adjustment.', formula: '=MAX(UnadjustedDebit+AdjustmentDebit-UnadjustedCredit-AdjustmentCredit,0)', result: 4266, explanation: 'Supplies decreases by 1,234. The adjusted debit balance is 4,266.' },
  { title: 'Test balance', facts: 'The total journal debits and credits are each 4,934. Enter the difference.', formula: '=TotalDebits-TotalCredits', result: 0, explanation: 'The difference is zero. This proves equality. It does not prove that 1,234 matches the physical count.' },
  { title: 'Read the status', facts: 'All required journal and adjusted-balance cells contain numbers. Journal and trial-balance differences are zero. No validation checks fail. Enter the exact status text.', formula: '=IF(OR(COUNT(\'Close Model\'!B4:C13)<>20,COUNT(\'Close Model\'!F19:G33)<>30),"Not finished",IF(AND(B6=0,B7=0,B8=0),"Complete","Review flagged items"))', result: 'Complete', explanation: 'Complete means that these formula checks pass. Check source schedules separately before you approve the close.' },
]
const VALIDATION_STEPS: RehearsalStep[] = [
  { title: 'Test a negative input', facts: 'Supplies used is −25. The allowed range is 0 to 5,500. Enter OK or Review.', formula: '=IF(AND(B5>=0,B5<=C5),"OK","Review")', result: 'Review', explanation: 'A negative adjustment fails the range check even if its journal is balanced.' },
  { title: 'Test an upper limit', facts: 'Insurance expired is 1,300. Prepaid Insurance is 1,200. Enter OK or Review.', formula: '=IF(AND(B6>=0,B6<=C6),"OK","Review")', result: 'Review', explanation: 'The expense cannot exceed the available prepaid balance in this model.' },
  { title: 'Change the scenario', facts: 'April has supplies 1,450, insurance 300, depreciation 400, wages 2,100, and earned revenue 900. What supplies amount appears when SelectedPeriod becomes April?', formula: '=INDEX(Scenarios!$B$5:$F$7,MATCH(SelectedPeriod,Scenarios!$A$5:$A$7,0),ROW()-4)', result: 1450, explanation: 'MATCH locates April. INDEX returns the first amount in that scenario row.' },
  { title: 'Count failed checks', facts: 'The five checks show Review, Review, OK, OK, OK. Enter the number of failed checks.', formula: '=COUNTIF(Inputs!D5:D9,"Review")', result: 2, explanation: 'Two inputs need review. A zero balance difference does not clear them.' },
  { title: 'Combine the controls', facts: 'All required numeric cells and five validation results are filled. Journal and trial-balance differences are zero. Two validation checks fail. Enter the exact status text.', formula: '=IF(OR(COUNT(\'Close Model\'!B4:C13)<>20,COUNT(\'Close Model\'!F19:G33)<>30,COUNTA(Inputs!D5:D9)<>5),"Not finished",IF(AND(B6=0,B7=0,B8=0),"Complete","Review flagged items"))', result: 'Review flagged items', explanation: 'All conditions must pass. The failed checks prevent Complete.' },
]

/**
 * Rehearse the numeric and status outputs used by the Unit 2 workbooks.
 * @param props - The formula or validation rehearsal mode.
 * @returns An input, calculation, feedback, and explanation sequence.
 */
export default function Unit02WorkbookRehearsal({ mode }: { mode: 'formulas' | 'validation' }) {
  const steps = mode === 'formulas' ? FORMULA_STEPS : VALIDATION_STEPS
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [checked, setChecked] = useState<boolean | null>(null)
  const [explanation, setExplanation] = useState('')
  const [complete, setComplete] = useState(false)
  const step = steps[index]
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{mode === 'formulas' ? 'Rehearse linked formulas' : 'Rehearse workbook controls'}</h3>
      <p>Predict each result before you reveal it. Use the same logic in the workbook sprint.</p>
      {!complete ? <>
        <p className="text-sm">Step {index + 1} of {steps.length}: {step.title}</p>
        <p>{step.facts}</p>
        <code className="block overflow-x-auto rounded bg-muted p-3 text-sm">{step.formula}</code>
        <label className="block space-y-1">Your result
          <input aria-label="Your result" value={answer} onChange={event => { setAnswer(event.target.value); setChecked(null) }} className="block w-full rounded border p-2" />
        </label>
        <Button disabled={!answer.trim()} onClick={() => setChecked(typeof step.result === 'number' ? Number.isFinite(Number(answer)) && Math.abs(Number(answer) - step.result) < 0.005 : answer.trim().toLowerCase() === step.result.toLowerCase())}>Check result</Button>
        {checked !== null ? <div role="status" className="space-y-2 rounded border p-3">
          <p>{checked ? 'Correct.' : 'Review your result.'} Revealed result: {step.result}</p>
          <p>{step.explanation}</p>
        </div> : null}
        {checked ? <>
          <label className="block">Explain why the formula gives this result.
            <textarea aria-label="Explain the formula" value={explanation} onChange={event => setExplanation(event.target.value)} className="mt-1 block w-full rounded border p-2" />
          </label>
          <p className="text-sm text-muted-foreground">Compare your explanation with the model above. Your teacher or partner checks the reasoning. This text is not automatically graded.</p>
          <Button disabled={!explanation.trim()} onClick={() => {
            if (index === steps.length - 1) setComplete(true)
            else { setIndex(index + 1); setAnswer(''); setChecked(null); setExplanation('') }
          }}>Next step</Button>
        </> : null}
      </> : <p role="status">Rehearsal complete. Open the starter workbook and reproduce these checks with its data.</p>}
    </div>
  )
}
