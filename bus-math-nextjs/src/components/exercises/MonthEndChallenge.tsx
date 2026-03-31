"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, Eye, EyeOff } from "lucide-react"

interface JournalEntryLine {
  id: string
  label: string
  debitAccount: string
  creditAccount: string
  amount: number
  explanation: string
  hint: string
}

interface MonthEndChallengeProps {
  entries: JournalEntryLine[]
  trialBalanceTotal: { debits: number; credits: number }
}

export default function MonthEndChallenge({ entries, trialBalanceTotal }: MonthEndChallengeProps) {
  const [userAnswers, setUserAnswers] = useState<Record<string, { debitAccount: string; creditAccount: string; amount: string }>>(
    Object.fromEntries(entries.map(e => [e.id, { debitAccount: "", creditAccount: "", amount: "" }]))
  )
  const [submitted, setSubmitted] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)

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

  const handleInputChange = (entryId: string, field: "debitAccount" | "creditAccount" | "amount", value: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [entryId]: { ...prev[entryId], [field]: value }
    }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const handleReset = () => {
    setUserAnswers(Object.fromEntries(entries.map(e => [e.id, { debitAccount: "", creditAccount: "", amount: "" }])))
    setSubmitted(false)
    setShowAnswers(false)
  }

  const checkEntry = (entry: JournalEntryLine) => {
    const answer = userAnswers[entry.id]
    if (!answer) return { debitCorrect: false, creditCorrect: false, amountCorrect: false }
    return {
      debitCorrect: answer.debitAccount === entry.debitAccount,
      creditCorrect: answer.creditAccount === entry.creditAccount,
      amountCorrect: parseFloat(answer.amount) === entry.amount
    }
  }

  const allCorrect = entries.every(e => {
    const check = checkEntry(e)
    return check.debitCorrect && check.creditCorrect && check.amountCorrect
  })

  const isUnbalanced = trialBalanceTotal.debits !== trialBalanceTotal.credits

  return (
    <div className="space-y-6">
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="text-orange-800">
            Record All Adjusting Entries
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-orange-800">
            For each adjustment below, select the correct debit and credit accounts and enter the dollar amount. Use the additional information to calculate each amount. You will check your work after completing all entries.
          </p>
          {isUnbalanced && (
            <div className="bg-red-100 p-3 rounded border border-red-300">
              <p className="text-sm text-red-800 font-semibold">
                Note: The unadjusted trial balance above shows debits of ${trialBalanceTotal.debits.toLocaleString()} and credits of ${trialBalanceTotal.credits.toLocaleString()}. This difference will be resolved once all adjustments are recorded correctly.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="space-y-4">
        {entries.map((entry, index) => {
          const answer = userAnswers[entry.id]
          const check = submitted ? checkEntry(entry) : null
          const entryCorrect = check ? check.debitCorrect && check.creditCorrect && check.amountCorrect : false

          return (
            <Card key={entry.id} className={`border-gray-200 bg-white ${submitted && !entryCorrect ? "border-red-200" : ""} ${submitted && entryCorrect ? "border-green-200" : ""}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-900 text-lg">
                  Adjustment {String.fromCharCode(65 + index)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 p-3 rounded border border-amber-200">
                  <p className="text-sm text-amber-800">{entry.hint}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Debit Account:</label>
                    <select
                      value={answer?.debitAccount || ""}
                      onChange={(e) => handleInputChange(entry.id, "debitAccount", e.target.value)}
                      disabled={submitted}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    >
                      <option value="">Select account...</option>
                      {allDebitAccounts.map(acc => (
                        <option key={acc} value={acc}>{acc}</option>
                      ))}
                    </select>
                    {submitted && check && !check.debitCorrect && (
                      <p className="text-red-600 text-xs mt-1">Incorrect</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Credit Account:</label>
                    <select
                      value={answer?.creditAccount || ""}
                      onChange={(e) => handleInputChange(entry.id, "creditAccount", e.target.value)}
                      disabled={submitted}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    >
                      <option value="">Select account...</option>
                      {allCreditAccounts.map(acc => (
                        <option key={acc} value={acc}>{acc}</option>
                      ))}
                    </select>
                    {submitted && check && !check.creditCorrect && (
                      <p className="text-red-600 text-xs mt-1">Incorrect</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($):</label>
                  <input
                    type="number"
                    value={answer?.amount || ""}
                    onChange={(e) => handleInputChange(entry.id, "amount", e.target.value)}
                    disabled={submitted}
                    placeholder="Enter amount"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                  {submitted && check && !check.amountCorrect && (
                    <p className="text-red-600 text-xs mt-1">Incorrect</p>
                  )}
                </div>

                {submitted && (
                  <div className={`p-3 rounded border ${entryCorrect ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
                    {entryCorrect ? (
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-800 text-sm">Correct!</p>
                          <p className="text-xs text-green-700 mt-1">{entry.explanation}</p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <p className="font-semibold text-red-800 text-sm">Review the correct entry:</p>
                        </div>
                        <p className="text-sm font-mono text-amber-800 ml-6">
                          Debit {entry.debitAccount} ........ ${entry.amount.toLocaleString()}
                        </p>
                        <p className="text-sm font-mono text-amber-800 ml-6">
                          Credit {entry.creditAccount} ......... ${entry.amount.toLocaleString()}
                        </p>
                        <p className="text-xs text-amber-700 mt-2 ml-6">{entry.explanation}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {!submitted ? (
        <Button onClick={handleSubmit} className="bg-orange-600 hover:bg-orange-700">
          Check All Entries
        </Button>
      ) : (
        <div className="space-y-4">
          {allCorrect ? (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800 text-lg">All entries correct!</p>
                    <p className="text-sm text-green-700 mt-1">You identified every adjustment, selected the correct accounts, and calculated the right amounts. The books are ready for the adjusted trial balance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="pt-6">
                <p className="text-sm text-amber-800">
                  Some entries need correction. Review the feedback above for each adjustment, then try again.
                </p>
              </CardContent>
            </Card>
          )}
          <div className="flex gap-3">
            <Button onClick={handleReset} variant="outline">
              Try Again
            </Button>
            <Button onClick={() => setShowAnswers(!showAnswers)} variant="outline">
              {showAnswers ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {showAnswers ? "Hide" : "Show"} All Answers
            </Button>
          </div>
          {showAnswers && (
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-base">Complete Adjusting Journal Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm font-mono text-blue-800">
                  {entries.map((entry, index) => (
                    <div key={entry.id}>
                      <p className="font-semibold text-blue-900">Adjustment {String.fromCharCode(65 + index)}:</p>
                      <p className="ml-4">Debit {entry.debitAccount} ........ ${entry.amount.toLocaleString()}</p>
                      <p className="ml-4">Credit {entry.creditAccount} ......... ${entry.amount.toLocaleString()}</p>
                      <p className="ml-4 text-xs text-blue-600 italic">{entry.explanation}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
