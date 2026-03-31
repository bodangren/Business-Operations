"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, RotateCcw, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface AdjustmentItem {
  description: string
  unadjustedBalance: number
  additionalInfo: string
  entryType: "accrued-revenue" | "accrued-expense" | "deferred-revenue" | "deferred-expense" | "depreciation"
  debitAccount: string
  creditAccount: string
  amount: number
  explanation: string
}

interface MonthEndClosePracticeProps {
  masteryTarget?: number
}

function generateScenario(seed: number): AdjustmentItem {
  const scenarios: AdjustmentItem[] = [
    {
      description: "Supplies on hand at month-end",
      unadjustedBalance: 3000 + (seed % 5) * 1000,
      additionalInfo: `Physical count shows $${1000 + (seed % 3) * 500} remaining`,
      entryType: "deferred-expense",
      debitAccount: "Supplies Expense",
      creditAccount: "Supplies",
      amount: 2000 + (seed % 4) * 500,
      explanation: "Supplies used = unadjusted balance minus physical count. Debit Supplies Expense to record the cost used; credit Supplies to reduce the asset."
    },
    {
      description: "Prepaid insurance expired",
      unadjustedBalance: 2400 + (seed % 3) * 1200,
      additionalInfo: `${12 - (seed % 6)} months remaining on the policy`,
      entryType: "deferred-expense",
      debitAccount: "Insurance Expense",
      creditAccount: "Prepaid Insurance",
      amount: 200 + (seed % 4) * 100,
      explanation: "One month of prepaid insurance has expired. Debit Insurance Expense; credit Prepaid Insurance to reduce the asset."
    },
    {
      description: "Monthly depreciation on equipment",
      unadjustedBalance: 30000 + (seed % 4) * 10000,
      additionalInfo: `Useful life: ${3 + (seed % 5)} years. Salvage value: $0. Straight-line method.`,
      entryType: "depreciation",
      debitAccount: "Depreciation Expense",
      creditAccount: "Accumulated Depreciation",
      amount: 500 + (seed % 5) * 100,
      explanation: "Monthly depreciation = (Cost - Salvage) / Useful life in months. Debit Depreciation Expense; credit Accumulated Depreciation (a contra-asset)."
    },
    {
      description: "Wages earned by employees but not yet paid",
      unadjustedBalance: 0,
      additionalInfo: `Employees worked the last ${2 + (seed % 3)} days of the month. Daily payroll: $${400 + (seed % 3) * 200}.`,
      entryType: "accrued-expense",
      debitAccount: "Wages Expense",
      creditAccount: "Wages Payable",
      amount: 800 + (seed % 4) * 400,
      explanation: "Wages have been incurred but not yet paid. Debit Wages Expense to record the cost; credit Wages Payable to record the liability."
    },
    {
      description: "Unearned revenue now earned",
      unadjustedBalance: 3000 + (seed % 3) * 1000,
      additionalInfo: `Cash was received in advance for a ${2 + (seed % 2)}-month project. One month of work is complete.`,
      entryType: "deferred-revenue",
      debitAccount: "Unearned Revenue",
      creditAccount: "Service Revenue",
      amount: 1000 + (seed % 3) * 500,
      explanation: "Part of the advance payment has been earned. Debit Unearned Revenue to reduce the liability; credit Service Revenue to recognize earned revenue."
    },
    {
      description: "Services performed but not yet billed",
      unadjustedBalance: 0,
      additionalInfo: `Work completed for a client worth $${600 + (seed % 5) * 200}. Invoice will be sent next month.`,
      entryType: "accrued-revenue",
      debitAccount: "Accounts Receivable",
      creditAccount: "Service Revenue",
      amount: 600 + (seed % 5) * 200,
      explanation: "Revenue has been earned but not yet recorded. Debit Accounts Receivable to record the amount owed; credit Service Revenue to recognize the revenue."
    },
    {
      description: "Interest on a note payable has accrued",
      unadjustedBalance: 0,
      additionalInfo: `Note payable: $${10000 + (seed % 5) * 5000}. Annual interest rate: ${6 + (seed % 4)}%. One month of interest has accrued.`,
      entryType: "accrued-expense",
      debitAccount: "Interest Expense",
      creditAccount: "Interest Payable",
      amount: 50 + (seed % 5) * 25,
      explanation: "Interest expense has been incurred but not yet paid. Debit Interest Expense; credit Interest Payable to record the liability."
    },
    {
      description: "Rent paid in advance now partially used",
      unadjustedBalance: 6000 + (seed % 3) * 3000,
      additionalInfo: `Prepaid rent covers ${3 + (seed % 3)} months. One month has passed.`,
      entryType: "deferred-expense",
      debitAccount: "Rent Expense",
      creditAccount: "Prepaid Rent",
      amount: 1500 + (seed % 3) * 500,
      explanation: "One month of prepaid rent has been used. Debit Rent Expense; credit Prepaid Rent to reduce the asset."
    }
  ]

  return scenarios[seed % scenarios.length]
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

export default function MonthEndClosePractice({ masteryTarget = 3 }: MonthEndClosePracticeProps) {
  const [round, setRound] = useState(0)
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [masteryReached, setMasteryReached] = useState(false)
  const [showWorkedExample, setShowWorkedExample] = useState(false)

  const scenario = generateScenario(round)

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
    resetInputs()
  }

  const handleSubmit = () => {
    const debitCorrect = selectedDebit === scenario.debitAccount
    const creditCorrect = selectedCredit === scenario.creditAccount
    const amountCorrect = parseFloat(amountInput) === scenario.amount
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
            Get <strong>{masteryTarget} consecutive correct</strong> answers to demonstrate mastery. Feedback is given after submission.
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
