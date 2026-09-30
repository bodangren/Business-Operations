"use client"

import { useState, useCallback } from "react"
import { generateUnit02AdjustmentScenario } from "@/lib/accounting/unit02-practice"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, RotateCcw, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface MonthEndClosePracticeProps {
  masteryTarget?: number
}

function getStepOrder(entryType: string): string {
  switch (entryType) {
    case "accrued-revenue":
    case "accrued-expense":
      return "Accrual"
    case "deferred-revenue":
    case "deferred-expense":
      return "Deferral"
    case "depreciation":
      return "Depreciation"
    default:
      return "Adjustment"
  }
}

/**
 * Render repeatable month-end journal-entry practice.
 * @param props - The required number of consecutive correct adjustments.
 * @returns The adjustment task and feedback.
 */
export default function MonthEndClosePractice({ masteryTarget = 3 }: MonthEndClosePracticeProps) {
  const [round, setRound] = useState(0)
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [masteryReached, setMasteryReached] = useState(false)
  const [showWorkedExample, setShowWorkedExample] = useState(false)

  const scenario = generateUnit02AdjustmentScenario(round)

  const [selectedDebit, setSelectedDebit] = useState("")
  const [selectedCredit, setSelectedCredit] = useState("")
  const [amountInput, setAmountInput] = useState("")
  const [selectedType, setSelectedType] = useState("")

  const allDebitAccounts = [
    "Supplies Expense", "Insurance Expense", "Depreciation Expense",
    "Wages Expense", "Interest Expense", "Rent Expense",
    "Accounts Receivable", "Unearned Revenue"
  ]

  const allCreditAccounts = [
    "Supplies", "Prepaid Insurance", "Accumulated Depreciation",
    "Wages Payable", "Interest Payable", "Prepaid Rent",
    "Service Revenue", "Unearned Revenue"
  ]

  const resetInputs = useCallback(() => {
    setSelectedDebit("")
    setSelectedCredit("")
    setAmountInput("")
    setSelectedType("")
    setSubmitted(false)
    setIsCorrect(false)
    setShowWorkedExample(false)
  }, [])

  const handleNewScenario = () => {
    setRound(r => r + 1)
    setMasteryReached(false)
    resetInputs()
  }

  const handleSubmit = () => {
    const debitCorrect = selectedDebit === scenario.debitAccount
    const creditCorrect = selectedCredit === scenario.creditAccount
    const amountCorrect = Number.isFinite(Number(amountInput)) && Math.abs(Number(amountInput) - scenario.amount) < 0.005
    const typeCorrect = selectedType === getStepOrder(scenario.entryType)

    const correct = debitCorrect && creditCorrect && amountCorrect && typeCorrect

    setSubmitted(true)
    setIsCorrect(correct)
    setTotalAttempts(t => t + 1)

    if (correct) {
      const newStreak = consecutiveCorrect + 1
      setConsecutiveCorrect(newStreak)
      if (newStreak >= masteryTarget) {
        setMasteryReached(true)
      }
    } else {
      setConsecutiveCorrect(0)
    }
  }

  if (masteryReached) {
    return (
      <Card className="border-green-200 bg-green-50 max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <Trophy className="h-6 w-6" />
            Mastery Achieved!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-green-800">
            You correctly identified {masteryTarget} consecutive month-end adjustments. You can walk through the adjustment identification process reliably.
          </p>
          <div className="bg-green-100 p-4 rounded border border-green-300">
            <p className="text-sm text-green-700">
              <strong>Total attempts:</strong> {totalAttempts} | <strong>Final streak:</strong> {consecutiveCorrect}
            </p>
          </div>
          <Button onClick={handleNewScenario} variant="outline" className="border-green-300 text-green-800">
            <RotateCcw className="h-4 w-4 mr-2" />
            Continue Practicing
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center justify-between">
            <span>Month-End Adjustment Practice</span>
            <Badge variant={consecutiveCorrect > 0 ? "default" : "outline"}>
              {consecutiveCorrect} / {masteryTarget} consecutive
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-blue-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(consecutiveCorrect / masteryTarget) * 100}%` }}
            />
          </div>
          <p className="text-sm text-blue-700">
            Round each amount to the nearest cent. Get <strong>{masteryTarget} consecutive correct</strong> answers to demonstrate mastery. Feedback is given after submission.
          </p>
        </CardContent>
      </Card>

      <Card className="border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-gray-900">
            Round {round + 1}: Identify the Adjustment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-amber-50 p-4 rounded border border-amber-200">
            <p className="font-semibold text-amber-900 mb-2">{scenario.description}</p>
            {scenario.unadjustedBalance > 0 && (
              <p className="text-sm text-amber-800">Unadjusted balance: ${scenario.unadjustedBalance.toLocaleString()}</p>
            )}
            <p className="text-sm text-amber-800">{scenario.additionalInfo}</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adjustment Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                disabled={submitted}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="">Select type...</option>
                <option value="Accrual">Accrual (revenue or expense earned/incurred but not yet recorded)</option>
                <option value="Deferral">Deferral (cash already exchanged, now adjusting)</option>
                <option value="Depreciation">Depreciation (allocating asset cost)</option>
              </select>
              {submitted && selectedType !== getStepOrder(scenario.entryType) && (
                <p className="text-red-600 text-xs mt-1">Incorrect type</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Debit Account:</label>
                <select
                  value={selectedDebit}
                  onChange={(e) => setSelectedDebit(e.target.value)}
                  disabled={submitted}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Select account...</option>
                  {allDebitAccounts.map(acc => (
                    <option key={acc} value={acc}>{acc}</option>
                  ))}
                </select>
                {submitted && selectedDebit !== scenario.debitAccount && (
                  <p className="text-red-600 text-xs mt-1">Incorrect</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Credit Account:</label>
                <select
                  value={selectedCredit}
                  onChange={(e) => setSelectedCredit(e.target.value)}
                  disabled={submitted}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Select account...</option>
                  {allCreditAccounts.map(acc => (
                    <option key={acc} value={acc}>{acc}</option>
                  ))}
                </select>
                {submitted && selectedCredit !== scenario.creditAccount && (
                  <p className="text-red-600 text-xs mt-1">Incorrect</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adjustment Amount ($):</label>
              <input
                type="number"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                disabled={submitted}
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
              {submitted && parseFloat(amountInput) !== scenario.amount && (
                <p className="text-red-600 text-xs mt-1">Incorrect. The correct amount is ${scenario.amount.toLocaleString()}.</p>
              )}
            </div>
          </div>

          {!submitted ? (
            <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
              Check Answer
            </Button>
          ) : (
            <div className="space-y-4">
              {isCorrect ? (
                <div className="bg-green-50 p-4 rounded border border-green-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800">Correct!</p>
                    <p className="text-sm text-green-700 mt-1">{scenario.explanation}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded border border-red-200 flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800">Not quite. Review the correct answer below.</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded border border-amber-200">
                    <p className="font-semibold text-amber-900 mb-2">Correct Entry:</p>
                    <p className="text-sm font-mono text-amber-800">
                      Debit {scenario.debitAccount} ........ ${scenario.amount.toLocaleString()}
                    </p>
                    <p className="text-sm font-mono text-amber-800">
                      Credit {scenario.creditAccount} ......... ${scenario.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-amber-700 mt-2">{scenario.explanation}</p>
                  </div>
                  <Button
                    onClick={() => setShowWorkedExample(!showWorkedExample)}
                    variant="outline"
                    size="sm"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {showWorkedExample ? "Hide" : "Show"} reasoning steps
                  </Button>
                  {showWorkedExample && (
                    <div className="bg-blue-50 p-4 rounded border border-blue-200 text-sm text-blue-800">
                      <p className="font-semibold mb-2">How to think about this:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>What economic event happened? (Something was used, earned, or incurred)</li>
                        <li>Which account increased? (An expense or asset)</li>
                        <li>Which account decreased or created a liability? (An asset, liability, or revenue)</li>
                        <li>What is the dollar amount of the change?</li>
                      </ol>
                    </div>
                  )}
                </div>
              )}
              <Button onClick={handleNewScenario} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Next Scenario
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
