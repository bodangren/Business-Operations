'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, RefreshCw, HelpCircle, Target } from 'lucide-react'

interface DepreciationProblem {
  id: string
  assetName: string
  cost: number
  salvageValue: number
  usefulLife: number
  yearToCalculate: number
  correctAnnualExpense: number
  correctAccumulated: number
  correctBookValue: number
}

const assetPool = [
  { name: 'delivery van', costRange: [28000, 45000], lifeRange: [5, 8], salvageRange: [3000, 8000] },
  { name: 'commercial oven', costRange: [12000, 25000], lifeRange: [7, 12], salvageRange: [1000, 3000] },
  { name: 'warehouse shelving system', costRange: [8000, 18000], lifeRange: [10, 15], salvageRange: [500, 1500] },
  { name: 'office building', costRange: [300000, 600000], lifeRange: [25, 40], salvageRange: [30000, 80000] },
  { name: 'CNC machining center', costRange: [50000, 100000], lifeRange: [10, 15], salvageRange: [5000, 15000] },
  { name: 'fleet of laptops', costRange: [5000, 12000], lifeRange: [3, 5], salvageRange: [500, 1500] },
  { name: 'commercial refrigerator', costRange: [6000, 14000], lifeRange: [8, 12], salvageRange: [500, 1000] },
  { name: 'packaging machine', costRange: [20000, 40000], lifeRange: [8, 12], salvageRange: [2000, 5000] }
]

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function roundToNearestDollar(value: number): number {
  return Math.round(value)
}

function generateProblem(): DepreciationProblem {
  const asset = assetPool[Math.floor(Math.random() * assetPool.length)]
  const cost = randInt(asset.costRange[0], asset.costRange[1])
  const usefulLife = randInt(asset.lifeRange[0], asset.lifeRange[1])
  const salvageValue = randInt(asset.salvageRange[0], asset.salvageRange[1])
  const yearToCalculate = randInt(1, usefulLife)

  const depreciableBase = cost - salvageValue
  const annualExpense = roundToNearestDollar(depreciableBase / usefulLife)
  const accumulated = annualExpense * yearToCalculate
  const bookValue = cost - accumulated

  return {
    id: Math.random().toString(36).slice(2, 11),
    assetName: asset.name,
    cost,
    salvageValue,
    usefulLife,
    yearToCalculate,
    correctAnnualExpense: annualExpense,
    correctAccumulated: accumulated,
    correctBookValue: bookValue
  }
}

function parseMoney(value: string) {
  return Number.parseFloat(value.replace(/,/g, '').trim())
}

export default function StraightLineMastery() {
  const [problem, setProblem] = useState<DepreciationProblem>(generateProblem)
  const [annualAnswer, setAnnualAnswer] = useState('')
  const [accumulatedAnswer, setAccumulatedAnswer] = useState('')
  const [bookValueAnswer, setBookValueAnswer] = useState('')
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
    const annualCorrect = Math.abs(parseMoney(annualAnswer) - problem.correctAnnualExpense) < 0.01
    const accumulatedCorrect = Math.abs(parseMoney(accumulatedAnswer) - problem.correctAccumulated) < 0.01
    const bookValueCorrect = Math.abs(parseMoney(bookValueAnswer) - problem.correctBookValue) < 0.01
    const allCorrect = annualCorrect && accumulatedCorrect && bookValueCorrect

    if (allCorrect) {
      setFeedbackTitle('Correct. You completed the full straight-line schedule step accurately.')
      setFeedbackBody('You found the annual expense, built accumulated depreciation to the target year, and updated book value correctly.')
      setReteach('')
    } else if (!annualCorrect) {
      setFeedbackTitle('The annual depreciation expense is off.')
      setFeedbackBody('Start with depreciable base: cost minus salvage value. Then divide by useful life.')
      setReteach('Most errors here come from forgetting to subtract salvage value or dividing by the wrong life.')
    } else if (!accumulatedCorrect) {
      setFeedbackTitle('The accumulated depreciation is off.')
      setFeedbackBody('Accumulated depreciation is the annual expense multiplied by the number of years recorded so far.')
      setReteach('Do not recompute a new annual amount for the target year. Straight-line keeps the same annual expense every year.')
    } else {
      setFeedbackTitle('The book value is off.')
      setFeedbackBody('Book value equals original cost minus accumulated depreciation, not minus one year of expense.')
      setReteach('If your book value is wrong, trace back to accumulated depreciation first.')
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
    setAnnualAnswer('')
    setAccumulatedAnswer('')
    setBookValueAnswer('')
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
  const depreciableBase = problem.cost - problem.salvageValue

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
          <Target className="h-5 w-5" />
          Straight-Line Depreciation — Schedule Practice
        </CardTitle>
        <CardDescription className="text-blue-600">
          Enter the annual expense, accumulated depreciation, and book value for the target year. Target: {masteryTarget} consecutive correct rounds.
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

        <div className="bg-white p-6 rounded-lg border border-blue-200 space-y-4">
          <p className="text-lg text-gray-800 font-medium">
            TechStart purchased a {problem.assetName} for ${problem.cost.toLocaleString()}.
          </p>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-xs text-gray-500 uppercase">Cost</p>
              <p className="text-lg font-bold text-gray-800">${problem.cost.toLocaleString()}</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-3">
              <p className="text-xs text-blue-600 uppercase">Useful Life</p>
              <p className="text-lg font-bold text-blue-800">{problem.usefulLife} yrs</p>
            </div>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-xs text-green-600 uppercase">Salvage Value</p>
              <p className="text-lg font-bold text-green-800">${problem.salvageValue.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-3 rounded">
            <p className="text-sm text-amber-800 font-medium">
              Calculate straight-line depreciation for Year {problem.yearToCalculate}.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Annual expense</label>
              <Input
                inputMode="decimal"
                placeholder="Enter dollars"
                value={annualAnswer}
                disabled={submitted}
                onChange={(event) => setAnnualAnswer(event.target.value)}
                className="mt-2 bg-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Accumulated depreciation</label>
              <Input
                inputMode="decimal"
                placeholder="Enter dollars"
                value={accumulatedAnswer}
                disabled={submitted}
                onChange={(event) => setAccumulatedAnswer(event.target.value)}
                className="mt-2 bg-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Book value</label>
              <Input
                inputMode="decimal"
                placeholder="Enter dollars"
                value={bookValueAnswer}
                disabled={submitted}
                onChange={(event) => setBookValueAnswer(event.target.value)}
                className="mt-2 bg-white"
              />
            </div>
          </div>

          <div className="flex gap-2 justify-center pt-2">
            {!submitted ? (
              <>
                <Button
                  onClick={handleSubmit}
                  disabled={!annualAnswer || !accumulatedAnswer || !bookValueAnswer}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Check Answer
                </Button>
                <Button
                  variant="outline"
                  onClick={handleShowExample}
                  className="border-blue-300 text-blue-700"
                >
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Show Example
                </Button>
              </>
            ) : (
              <Button
                onClick={handleNewProblem}
                className="bg-green-600 hover:bg-green-700"
              >
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
                    <strong>Depreciable base:</strong> ${problem.cost.toLocaleString()} − ${problem.salvageValue.toLocaleString()} = ${depreciableBase.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Annual expense:</strong> ${depreciableBase.toLocaleString()} ÷ {problem.usefulLife} = ${problem.correctAnnualExpense.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Accumulated in Year {problem.yearToCalculate}:</strong> ${problem.correctAnnualExpense.toLocaleString()} × {problem.yearToCalculate} = ${problem.correctAccumulated.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Book value:</strong> ${problem.cost.toLocaleString()} − ${problem.correctAccumulated.toLocaleString()} = ${problem.correctBookValue.toLocaleString()}
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
            <h4 className="font-semibold text-blue-800 mb-2">Straight-Line Formula</h4>
            <div className="text-sm text-blue-700 space-y-2">
              <p><strong>Step 1:</strong> Find depreciable base = Cost − Salvage Value</p>
              <p><strong>Step 2:</strong> Divide by useful life = Annual Depreciation Expense</p>
              <p><strong>Step 3:</strong> Multiply by the year number = Accumulated Depreciation</p>
              <p><strong>Step 4:</strong> Subtract accumulated from cost = Book Value</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h4 className="font-semibold text-green-800 mb-1">Key Reminders</h4>
            <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
              <li>Always subtract salvage value before dividing.</li>
              <li>Annual expense stays the same every year under straight-line.</li>
              <li>Accumulated depreciation grows as equal annual amounts stack up.</li>
              <li>Book value shrinks by the accumulated amount recorded so far.</li>
            </ul>
          </div>
          <div className="bg-red-50 p-3 rounded border border-red-200">
            <h4 className="font-semibold text-red-800 mb-1">Common Mistakes</h4>
            <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
              <li>Forgetting to subtract salvage value.</li>
              <li>Changing annual expense from year to year.</li>
              <li>Confusing accumulated depreciation with one year of expense.</li>
              <li>Subtracting annual expense instead of accumulated depreciation to find book value.</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
