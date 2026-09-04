"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle, Target } from 'lucide-react'
import {
  generatePostingScenario,
  getInitialPostingScenario,
  upsertJournalLine,
  validateJournalEntry,
  type JournalLine,
} from "@/lib/accounting/unit01-practice"

export interface DeliberatePracticeProps {
  title?: string
  description?: string
  masteryTarget?: number
  showIntro?: boolean
}

/** Render deliberate journal-entry practice for Unit 1. */
export default function PostingPracticeLoop({ 
  title = "Posting & Balance Check Practice",
  description = "Practice posting transactions until you can reliably identify correct debit/credit entries and verify balance.",
  masteryTarget = 3,
  showIntro = true
}: DeliberatePracticeProps) {
  const [scenario, setScenario] = useState(getInitialPostingScenario)
  const [userEntry, setUserEntry] = useState<JournalLine[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [correctStreak, setCorrectStreak] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [showSolution, setShowSolution] = useState(false)

  const correctEntry = scenario.correctEntry

  const totalDebits = correctEntry.reduce((sum, line) => sum + line.debit, 0)
  const totalCredits = correctEntry.reduce((sum, line) => sum + line.credit, 0)

  const handleNewScenario = () => {
    setScenario(generatePostingScenario())
    setUserEntry([])
    setIsSubmitted(false)
    setIsCorrect(null)
    setShowSolution(false)
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTotalAttempts(prev => prev + 1)

    if (validateJournalEntry(userEntry, correctEntry)) {
      setIsCorrect(true)
      setCorrectStreak(prev => prev + 1)
    } else {
      setIsCorrect(false)
      setCorrectStreak(0)
    }
  }

  const handleAccountChange = (lineId: string, field: 'account' | 'debit' | 'credit', value: string | number) => {
    setUserEntry((previous) => upsertJournalLine(previous, lineId, field, value))
  }

  const getFeedback = () => {
    if (!isSubmitted) return null

    if (isCorrect) {
      return {
        type: 'success',
        title: 'Correct!',
        message: 'You correctly identified the accounts and their debit/credit amounts. The entry balances perfectly.'
      }
    }

    const userDebits = userEntry.reduce((sum, line) => sum + line.debit, 0)
    const userCredits = userEntry.reduce((sum, line) => sum + line.credit, 0)
    const balanceMatch = userDebits === userCredits

    return {
      type: 'error',
      title: balanceMatch ? 'Accounts Incorrect' : 'Entry Does Not Balance',
      message: balanceMatch 
        ? 'Your entry balances, but you need to check which accounts should be debited or credited.'
        : 'Remember: total debits must equal total credits. Review DEA LER rules.'
    }
  }

  const feedback = getFeedback()

  return (
    <div className="space-y-6">
      {showIntro && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Target className="h-6 w-6" />
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-800">{description}</p>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded border border-blue-200">
                <p className="font-semibold text-blue-900 mb-1">Current Streak</p>
                <p className="text-2xl font-bold text-blue-800">{correctStreak} / {masteryTarget}</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <p className="font-semibold text-blue-900 mb-1">Total Attempts</p>
                <p className="text-2xl font-bold text-blue-800">{totalAttempts}</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <p className="font-semibold text-blue-900 mb-1">Mastery Goal</p>
                <p className="text-blue-800">{masteryTarget} consecutive correct entries</p>
              </div>
            </div>

            {correctStreak >= masteryTarget && (
              <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-700" />
                  <p className="font-bold text-green-900 text-lg">Mastery Achieved!</p>
                </div>
                <p className="text-green-800 mt-2">
                  You've demonstrated reliable posting and balance-check skills. You're ready for more complex accounting work.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Practice Scenario */}
      <Card className="border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-gray-900">
            Scenario {totalAttempts + 1}: Post Transaction
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="font-semibold text-yellow-900 mb-1">Transaction Description:</p>
            <p className="text-yellow-800 text-lg">{scenario.description}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Your Journal Entry:</h4>
            <div className="space-y-3">
              {[1, 2, 3].map(lineNum => {
                const existingLine = userEntry.find(l => l.id === lineNum.toString())
                return (
                  <div key={lineNum} className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-1 text-gray-600 font-mono">{lineNum}</div>
                    <div className="col-span-6">
                      <Input
                        type="text"
                        placeholder="Account Name"
                        value={existingLine?.account || ''}
                        onChange={(e) => handleAccountChange(lineNum.toString(), 'account', e.target.value)}
                        disabled={isSubmitted}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        type="number"
                        placeholder="Debit"
                        value={existingLine?.debit || ''}
                        onChange={(e) => handleAccountChange(lineNum.toString(), 'debit', e.target.value)}
                        disabled={isSubmitted}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        type="number"
                        placeholder="Credit"
                        value={existingLine?.credit || ''}
                        onChange={(e) => handleAccountChange(lineNum.toString(), 'credit', e.target.value)}
                        disabled={isSubmitted}
                      />
                    </div>
                    <div className="col-span-1">
                      <button
                        type="button"
                        onClick={() => setUserEntry(prev => prev.filter(l => l.id !== lineNum.toString()))}
                        disabled={isSubmitted}
                        className="text-red-600 hover:text-red-800 disabled:opacity-30"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )
              })}
              <button
                type="button"
                onClick={() => {
                  const nextId = String(
                    Math.max(3, ...userEntry.map(({ id }) => Number(id) || 0)) + 1,
                  )
                  setUserEntry(prev => [...prev, {
                    id: nextId,
                    account: '',
                    debit: 0,
                    credit: 0
                  }])
                }}
                disabled={isSubmitted}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                + Add Line
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-x-2">
              {!isSubmitted && (
                <>
                  <Button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Check Entry
                  </Button>
                  <Button
                    onClick={handleNewScenario}
                    variant="outline"
                  >
                    Skip
                  </Button>
                </>
              )}
              {isSubmitted && (
                <>
                  <Button
                    onClick={handleNewScenario}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Next Scenario
                  </Button>
                  {!isCorrect && (
                    <Button
                      onClick={() => setShowSolution(!showSolution)}
                      variant="outline"
                      className="border-yellow-400 text-yellow-700 hover:bg-yellow-50"
                    >
                      {showSolution ? 'Hide' : 'Show'} Solution
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>

          {feedback && (
            <div className={`p-4 rounded-lg border-2 ${
              feedback.type === 'success' 
                ? 'bg-green-50 border-green-300' 
                : 'bg-red-50 border-red-300'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {feedback.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 text-green-700" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-700" />
                )}
                <p className={`font-bold ${feedback.type === 'success' ? 'text-green-900' : 'text-red-900'}`}>
                  {feedback.title}
                </p>
              </div>
              <p className={feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                {feedback.message}
              </p>
            </div>
          )}

          {showSolution && !isCorrect && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-900 mb-3">Correct Entry:</h4>
              <div className="space-y-2">
                {correctEntry.map((line, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-3 text-sm font-mono">
                    <div className="col-span-1 text-gray-600">{idx + 1}</div>
                    <div className="col-span-6 text-gray-900">{line.account}</div>
                    <div className="col-span-2 text-green-700">${line.debit.toLocaleString()}</div>
                    <div className="col-span-2 text-red-700">${line.credit.toLocaleString()}</div>
                    <div className="col-span-1"></div>
                  </div>
                ))}
                <div className="border-t border-gray-300 pt-2 mt-2">
                  <div className="font-semibold text-gray-900">
                    Totals: Debits ${totalDebits.toLocaleString()} = Credits ${totalCredits.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isSubmitted && userEntry.length > 0 && (
            <div className="text-sm text-gray-600">
              <p><strong>Remember DEA LER:</strong></p>
              <p>• <strong>DEA</strong> (Dividends, Expenses, Assets) increase with DEBITS</p>
              <p>• <strong>LER</strong> (Liabilities, Equity, Revenue) increase with CREDITS</p>
              <p className="mt-2"><strong>Balance Check:</strong> Total debits must equal total credits</p>
            </div>
          )}
        </CardContent>
      </Card>

      {correctStreak >= masteryTarget && (
        <div className="text-center py-4">
          <Badge className="bg-green-100 text-green-800 text-lg px-6 py-3">
            🎉 Practice Complete: Mastery Achieved!
          </Badge>
        </div>
      )}
    </div>
  )
}
