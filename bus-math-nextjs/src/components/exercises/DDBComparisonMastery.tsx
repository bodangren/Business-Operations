'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, RefreshCw, HelpCircle, Target } from 'lucide-react'

interface DDBProblem {
  id: string
  assetName: string
  cost: number
  salvageValue: number
  usefulLife: number
  yearToCalculate: number
  ddbRate: number
  correctDDBExpense: number
  correctSLExpense: number
  correctBookValue: number
  correctDifference: number
  floorTriggered: boolean
}

const assetPool = [
  { name: 'delivery van', costRange: [28000, 45000], lifeRange: [5, 8], salvageRange: [3000, 8000] },
  { name: 'CNC machining center', costRange: [50000, 100000], lifeRange: [10, 15], salvageRange: [5000, 15000] },
  { name: 'commercial oven', costRange: [12000, 25000], lifeRange: [7, 12], salvageRange: [1000, 3000] },
  { name: 'packaging machine', costRange: [20000, 40000], lifeRange: [8, 12], salvageRange: [2000, 5000] },
  { name: 'fleet of laptops', costRange: [5000, 12000], lifeRange: [3, 5], salvageRange: [500, 1500] }
]

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function computeDDBSchedule(cost: number, salvage: number, life: number) {
  const ddbRate = 2 / life
  const schedule: { year: number; beginBookValue: number; expense: number; accumulated: number; bookValue: number; floorTriggered: boolean }[] = []
  let bookValue = cost
  let accumulated = 0

  for (let year = 1; year <= life; year++) {
    const beginBookValue = bookValue
    const rawExpense = Math.round(beginBookValue * ddbRate)
    const floorTriggered = beginBookValue - rawExpense < salvage
    const expense = floorTriggered ? Math.max(0, Math.round(beginBookValue - salvage)) : rawExpense
    accumulated += expense
    bookValue -= expense
    schedule.push({ year, beginBookValue, expense, accumulated, bookValue, floorTriggered })
  }

  return schedule
}

function computeSLSchedule(cost: number, salvage: number, life: number) {
  const annualExpense = Math.round((cost - salvage) / life)
  return Array.from({ length: life }, (_, index) => ({
    year: index + 1,
    expense: annualExpense,
    accumulated: annualExpense * (index + 1),
    bookValue: cost - annualExpense * (index + 1)
  }))
}

function generateProblem(): DDBProblem {
  const asset = assetPool[Math.floor(Math.random() * assetPool.length)]
  const cost = randInt(asset.costRange[0], asset.costRange[1])
  const usefulLife = randInt(asset.lifeRange[0], asset.lifeRange[1])
  const salvageValue = randInt(asset.salvageRange[0], asset.salvageRange[1])

  const ddbSchedule = computeDDBSchedule(cost, salvageValue, usefulLife)
  const candidateYears = ddbSchedule.filter((row) => row.year > 1)
  const selectedRow = candidateYears[Math.floor(Math.random() * candidateYears.length)]
  const yearToCalculate = selectedRow.year
  const slSchedule = computeSLSchedule(cost, salvageValue, usefulLife)
  const slRow = slSchedule[yearToCalculate - 1]

  return {
    id: Math.random().toString(36).slice(2, 11),
    assetName: asset.name,
    cost,
    salvageValue,
    usefulLife,
    yearToCalculate,
    ddbRate: 2 / usefulLife,
    correctDDBExpense: selectedRow.expense,
    correctSLExpense: slRow.expense,
    correctBookValue: selectedRow.bookValue,
    correctDifference: selectedRow.expense - slRow.expense,
    floorTriggered: selectedRow.floorTriggered
  }
}

function parseMoney(value: string) {
  return Number.parseFloat(value.replace(/,/g, '').trim())
}

export default function DDBComparisonMastery() {
  const [problem, setProblem] = useState<DDBProblem>(generateProblem)
  const [ddbExpenseAnswer, setDdbExpenseAnswer] = useState('')
  const [bookValueAnswer, setBookValueAnswer] = useState('')
  const [differenceAnswer, setDifferenceAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [feedbackTitle, setFeedbackTitle] = useState('')
  const [feedbackBody, setFeedbackBody] = useState('')
  const [reteach, setReteach] = useState('')
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [showWorkedExample, setShowWorkedExample] = useState(false)

  const masteryTarget = 5

  const handleSubmit = () => {
    const ddbExpenseCorrect = Math.abs(parseMoney(ddbExpenseAnswer) - problem.correctDDBExpense) < 0.01
    const bookValueCorrect = Math.abs(parseMoney(bookValueAnswer) - problem.correctBookValue) < 0.01
    const differenceCorrect = Math.abs(parseMoney(differenceAnswer) - problem.correctDifference) < 0.01
    const allCorrect = ddbExpenseCorrect && bookValueCorrect && differenceCorrect

    if (allCorrect) {
      setFeedbackTitle('Correct. You handled both the DDB calculation and the straight-line comparison.')
      setFeedbackBody('You found the target-year DDB expense, updated book value correctly, and quantified how much higher or lower DDB is than straight-line in that year.')
      setReteach('')
    } else if (!ddbExpenseCorrect) {
      setFeedbackTitle('The DDB expense is off.')
      setFeedbackBody('Use double the straight-line rate and apply it to the beginning book value for the target year.')
      setReteach(problem.floorTriggered
        ? 'This year also triggers the salvage floor, so the raw DDB amount must be capped before it goes below salvage.'
        : 'Do not subtract salvage value before applying the DDB rate.')
    } else if (!bookValueCorrect) {
      setFeedbackTitle('The book value is off.')
      setFeedbackBody('Book value after the target year equals beginning book value minus the adjusted DDB expense for that year.')
      setReteach('If the salvage floor is triggered, the ending book value should stop exactly at salvage value, not below it.')
    } else {
      setFeedbackTitle('The comparison to straight-line is off.')
      setFeedbackBody('Compute the difference as DDB expense minus straight-line expense for the same year.')
      setReteach('In early years this difference is usually positive, but later years it can shrink or reverse.')
    }

    setSubmitted(true)
    setCorrect(allCorrect)
    setTotalAttempts((current) => current + 1)

    if (allCorrect) {
      setConsecutiveCorrect((current) => current + 1)
    } else {
      setConsecutiveCorrect(0)
    }
  }

  const handleNewProblem = () => {
    setProblem(generateProblem())
    setDdbExpenseAnswer('')
    setBookValueAnswer('')
    setDifferenceAnswer('')
    setSubmitted(false)
    setCorrect(false)
    setFeedbackTitle('')
    setFeedbackBody('')
    setReteach('')
    setShowWorkedExample(false)
  }

  const handleShowExample = () => {
    setShowWorkedExample(true)
  }

  const progressToMastery = (consecutiveCorrect / masteryTarget) * 100
  const ddbSchedule = computeDDBSchedule(problem.cost, problem.salvageValue, problem.usefulLife)
  const slSchedule = computeSLSchedule(problem.cost, problem.salvageValue, problem.usefulLife)

  return (
    <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-orange-50">
      <CardHeader>
        <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
          <Target className="h-5 w-5" />
          DDB vs Straight-Line — Method Comparison Practice
        </CardTitle>
        <CardDescription className="text-purple-600">
          Enter the DDB expense, ending book value, and the difference from straight-line for the target year. Target: {masteryTarget} consecutive correct rounds.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Consecutive correct: <strong>{consecutiveCorrect}</strong> / {masteryTarget}</span>
            <span className="text-gray-600">Total attempts: <strong>{totalAttempts}</strong></span>
          </div>
          <Progress value={progressToMastery} className="h-2" />
          {consecutiveCorrect >= masteryTarget && (
            <div className="flex items-center gap-2 text-green-700 bg-green-50 p-2 rounded">
              <CheckCircle className="h-4 w-4" />
              <span className="font-medium">Mastery achieved! {masteryTarget} correct in a row.</span>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg border border-purple-200 space-y-4">
          <p className="text-lg text-gray-800 font-medium">
            TechStart purchased a {problem.assetName} for ${problem.cost.toLocaleString()} with a {problem.usefulLife}-year life and ${problem.salvageValue.toLocaleString()} salvage value.
          </p>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-xs text-gray-500 uppercase">Cost</p>
              <p className="text-lg font-bold text-gray-800">${problem.cost.toLocaleString()}</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-3">
              <p className="text-xs text-purple-600 uppercase">Useful Life</p>
              <p className="text-lg font-bold text-purple-800">{problem.usefulLife} yrs</p>
            </div>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-xs text-green-600 uppercase">Salvage Value</p>
              <p className="text-lg font-bold text-green-800">${problem.salvageValue.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-3 rounded">
            <p className="text-sm text-amber-800 font-medium">
              Work on Year {problem.yearToCalculate}. DDB rate = {(problem.ddbRate * 100).toFixed(1)}%.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-gray-700">DDB expense</label>
              <Input
                inputMode="decimal"
                placeholder="Enter dollars"
                value={ddbExpenseAnswer}
                disabled={submitted}
                onChange={(event) => setDdbExpenseAnswer(event.target.value)}
                className="mt-2 bg-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Ending book value</label>
              <Input
                inputMode="decimal"
                placeholder="Enter dollars"
                value={bookValueAnswer}
                disabled={submitted}
                onChange={(event) => setBookValueAnswer(event.target.value)}
                className="mt-2 bg-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">DDB minus straight-line expense</label>
              <Input
                inputMode="decimal"
                placeholder="Enter dollars"
                value={differenceAnswer}
                disabled={submitted}
                onChange={(event) => setDifferenceAnswer(event.target.value)}
                className="mt-2 bg-white"
              />
            </div>
          </div>

          <div className="flex gap-2 justify-center pt-2">
            {!submitted ? (
              <>
                <Button
                  onClick={handleSubmit}
                  disabled={!ddbExpenseAnswer || !bookValueAnswer || !differenceAnswer}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Check Answer
                </Button>
                <Button
                  variant="outline"
                  onClick={handleShowExample}
                  className="border-purple-300 text-purple-700"
                >
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Show Schedule
                </Button>
              </>
            ) : (
              <Button onClick={handleNewProblem} className="bg-green-600 hover:bg-green-700">
                <RefreshCw className="h-4 w-4 mr-1" />
                New Numbers
              </Button>
            )}
          </div>
        </div>

        {submitted && (
          <div className={`p-4 rounded-lg border-2 ${correct ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'}`}>
            <div className="flex items-start gap-3">
              {correct ? (
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              ) : (
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className={`font-semibold ${correct ? 'text-green-800' : 'text-red-800'}`}>{feedbackTitle}</p>
                <p className={`mt-2 text-sm ${correct ? 'text-green-700' : 'text-red-700'}`}>{feedbackBody}</p>
                <div className="mt-2 bg-white p-3 rounded border space-y-1">
                  <p className="text-sm text-slate-700">
                    <strong>DDB Year {problem.yearToCalculate} expense:</strong> ${problem.correctDDBExpense.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Ending book value:</strong> ${problem.correctBookValue.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Straight-line expense for the same year:</strong> ${problem.correctSLExpense.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>DDB minus straight-line:</strong> ${problem.correctDifference.toLocaleString()}
                  </p>
                </div>
                {!correct && (
                  <div className="mt-3 bg-white p-3 rounded border border-red-200">
                    <p className="text-sm text-red-700">{reteach}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {showWorkedExample && !submitted && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3">Full Schedule Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Year</th>
                    <th className="border border-gray-300 p-2">DDB Expense</th>
                    <th className="border border-gray-300 p-2">DDB Book Value</th>
                    <th className="border border-gray-300 p-2">SL Expense</th>
                    <th className="border border-gray-300 p-2">SL Book Value</th>
                  </tr>
                </thead>
                <tbody>
                  {ddbSchedule.map((row, index) => (
                    <tr key={row.year} className={row.year === problem.yearToCalculate ? 'bg-purple-100' : ''}>
                      <td className="border border-gray-300 p-2 font-medium">Year {row.year}</td>
                      <td className="border border-gray-300 p-2 text-right">${row.expense.toLocaleString()}</td>
                      <td className="border border-gray-300 p-2 text-right">${row.bookValue.toLocaleString()}</td>
                      <td className="border border-gray-300 p-2 text-right">${slSchedule[index].expense.toLocaleString()}</td>
                      <td className="border border-gray-300 p-2 text-right">${slSchedule[index].bookValue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-sm text-blue-700 space-y-1">
              <p><strong>Target-year DDB expense:</strong> begin book value × DDB rate, capped at salvage if needed.</p>
              <p><strong>Target-year book value:</strong> beginning book value − adjusted DDB expense.</p>
              <p><strong>Comparison:</strong> DDB expense − straight-line expense for the same year.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-3 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-1">DDB Key Rules</h4>
            <ul className="text-sm text-purple-700 space-y-1 list-disc list-inside">
              <li>Rate = 2 × (1 ÷ useful life).</li>
              <li>Apply the rate to beginning book value, not depreciable base.</li>
              <li>Do not subtract salvage value before the DDB calculation.</li>
              <li>Book value can never fall below salvage value.</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-3 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-1">Common Mistakes</h4>
            <ul className="text-sm text-orange-700 space-y-1 list-disc list-inside">
              <li>Using straight-line rate instead of the doubled rate.</li>
              <li>Subtracting salvage value before applying the DDB rate.</li>
              <li>Ignoring the salvage-value floor in later years.</li>
              <li>Comparing the wrong year when judging DDB versus straight-line.</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
