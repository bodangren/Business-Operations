'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  CheckCircle,
  XCircle,
  RefreshCw,
  Target,
  Trophy,
  HelpCircle
} from 'lucide-react'

// --- Data schemas ---

interface ClosingScenario {
  id: number
  revenues: { name: string; balance: number }[]
  expenses: { name: string; balance: number }[]
  dividends: number
  beginningRE: number
}

interface FeedbackTier {
  level: 'correct' | 'close' | 'wrong'
  message: string
  reteach: string
}

// --- Scenario generator ---

const REVENUE_ACCOUNTS = [
  'Service Revenue', 'Consulting Revenue', 'Interest Revenue',
  'Sales Revenue', 'Fee Revenue', 'Commission Revenue'
]
const EXPENSE_ACCOUNTS = [
  'Rent Expense', 'Salaries Expense', 'Utilities Expense',
  'Supplies Expense', 'Depreciation Expense', 'Insurance Expense',
  'Advertising Expense', 'Repairs Expense'
]

function generateScenario(id: number): ClosingScenario {
  const seed = id * 7 + 13
  const numRevenues = (seed % 2) + 1  // 1 or 2 revenue accounts
  const numExpenses = (seed % 3) + 3  // 3 to 5 expense accounts

  const revenues: { name: string; balance: number }[] = []
  for (let i = 0; i < numRevenues; i++) {
    const name = REVENUE_ACCOUNTS[(seed + i * 3) % REVENUE_ACCOUNTS.length]
    const balance = ((seed * (i + 1) * 137) % 9000) + 1000
    revenues.push({ name, balance })
  }

  const expenses: { name: string; balance: number }[] = []
  for (let i = 0; i < numExpenses; i++) {
    const name = EXPENSE_ACCOUNTS[(seed + i * 5) % EXPENSE_ACCOUNTS.length]
    const balance = ((seed * (i + 1) * 97) % 3000) + 200
    expenses.push({ name, balance })
  }

  const dividends = (seed % 3 === 0) ? ((seed * 31) % 1500) + 200 : 0
  const beginningRE = ((seed * 53) % 10000) + 5000

  return { id, revenues, expenses, dividends, beginningRE }
}

function getTotalRevenues(scenario: ClosingScenario): number {
  return scenario.revenues.reduce((sum, r) => sum + r.balance, 0)
}

function getTotalExpenses(scenario: ClosingScenario): number {
  return scenario.expenses.reduce((sum, e) => sum + e.balance, 0)
}

function getNetIncome(scenario: ClosingScenario): number {
  return getTotalRevenues(scenario) - getTotalExpenses(scenario)
}

function getEndingRE(scenario: ClosingScenario): number {
  return scenario.beginningRE + getNetIncome(scenario) - scenario.dividends
}

// --- Feedback ---

function getFeedback(userStep1: number, userStep2: number, userStep3: number, userStep4: number, scenario: ClosingScenario): { correct: boolean; feedback: FeedbackTier } {
  const expected1 = getTotalRevenues(scenario)
  const expected2 = getTotalExpenses(scenario)
  const expected3 = getNetIncome(scenario)
  const expected4 = scenario.dividends

  if (userStep1 === expected1 && userStep2 === expected2 && userStep3 === expected3 && userStep4 === expected4) {
    return {
      correct: true,
      feedback: {
        level: 'correct',
        message: 'All four steps are correct!',
        reteach: ''
      }
    }
  }

  let errors = 0
  if (userStep1 !== expected1) errors++
  if (userStep2 !== expected2) errors++
  if (userStep3 !== expected3) errors++
  if (userStep4 !== expected4) errors++

  if (errors <= 1) {
    let hint = ''
    if (userStep1 !== expected1) hint += `Step 1 should be $${expected1.toLocaleString()} (sum of all revenues). `
    if (userStep2 !== expected2) hint += `Step 2 should be $${expected2.toLocaleString()} (sum of all expenses). `
    if (userStep3 !== expected3) hint += `Step 3 should be $${expected3.toLocaleString()} (revenues − expenses). `
    if (userStep4 !== expected4) hint += `Step 4 should be $${expected4.toLocaleString()} (dividends amount). `
    return {
      correct: false,
      feedback: {
        level: 'close',
        message: 'Almost there — one value is off.',
        reteach: hint
      }
    }
  }

  return {
    correct: false,
    feedback: {
      level: 'wrong',
      message: 'Multiple steps need review.',
      reteach: `Remember: Step 1 = total revenues ($${expected1.toLocaleString()}), Step 2 = total expenses ($${expected2.toLocaleString()}), Step 3 = net income ($${expected3.toLocaleString()}), Step 4 = dividends ($${expected4.toLocaleString()}).`
    }
  }
}

// --- Component ---

interface ClosingEntryPracticeProps {
  masteryTarget?: number
}

export default function ClosingEntryPractice({ masteryTarget = 3 }: ClosingEntryPracticeProps) {
  const [round, setRound] = useState(0)
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [scenario, setScenario] = useState<ClosingScenario>(() => generateScenario(0))
  const [step1, setStep1] = useState('')
  const [step2, setStep2] = useState('')
  const [step3, setStep3] = useState('')
  const [step4, setStep4] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<{ correct: boolean; feedback: FeedbackTier } | null>(null)
  const [showWorkedExample, setShowWorkedExample] = useState(false)

  const handleSubmit = useCallback(() => {
    const s1 = parseInt(step1.replace(/[^0-9-]/g, ''), 10) || 0
    const s2 = parseInt(step2.replace(/[^0-9-]/g, ''), 10) || 0
    const s3 = parseInt(step3.replace(/[^0-9-]/g, ''), 10) || 0
    const s4 = parseInt(step4.replace(/[^0-9-]/g, ''), 10) || 0

    const res = getFeedback(s1, s2, s3, s4, scenario)
    setResult(res)
    setSubmitted(true)
    setTotalAttempts(prev => prev + 1)

    if (res.correct) {
      setConsecutiveCorrect(prev => prev + 1)
    } else {
      setConsecutiveCorrect(0)
    }
  }, [step1, step2, step3, step4, scenario])

  const handleNewRound = useCallback(() => {
    const nextRound = round + 1
    setRound(nextRound)
    setScenario(generateScenario(nextRound))
    setStep1('')
    setStep2('')
    setStep3('')
    setStep4('')
    setSubmitted(false)
    setResult(null)
    setShowWorkedExample(false)
  }, [round])

  const masteryAchieved = consecutiveCorrect >= masteryTarget
  const totalRevenues = getTotalRevenues(scenario)
  const totalExpenses = getTotalExpenses(scenario)
  const netIncome = getNetIncome(scenario)

  return (
    <div className="space-y-6">
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Closing Entry Practice
          </CardTitle>
          <CardDescription className="text-purple-700">
            For each scenario, enter the dollar amount for each of the four closing steps.
            Get {masteryTarget} consecutive correct to reach mastery.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline" className="text-sm">
              Round {round + 1}
            </Badge>
            <Badge className={consecutiveCorrect >= masteryTarget ? 'bg-green-500' : 'bg-blue-500'}>
              <Trophy className="h-3 w-3 mr-1" />
              {consecutiveCorrect}/{masteryTarget} consecutive
            </Badge>
            <Badge variant="outline" className="text-sm">
              Total attempts: {totalAttempts}
            </Badge>
          </div>

          {masteryAchieved && (
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-4 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="font-semibold text-green-800">Mastery Achieved!</p>
              <p className="text-sm text-green-700">You've closed {masteryTarget} sets of accounts correctly in a row.</p>
            </div>
          )}

          <div className="bg-white rounded-lg border border-purple-200 p-4 mb-4">
            <h4 className="font-semibold text-purple-900 mb-3">
              TechStart Solutions — Adjusted Balances (Period {scenario.id + 1})
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-purple-700 mb-1">Revenue Accounts (Credit balances)</p>
                {scenario.revenues.map((r, i) => (
                  <div key={i} className="text-sm font-mono text-purple-900">
                    {r.name}: ${r.balance.toLocaleString()}
                  </div>
                ))}
                <div className="text-sm font-mono font-bold text-purple-900 border-t border-purple-200 mt-1 pt-1">
                  Total Revenues: ${totalRevenues.toLocaleString()}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-purple-700 mb-1">Expense Accounts (Debit balances)</p>
                {scenario.expenses.map((e, i) => (
                  <div key={i} className="text-sm font-mono text-purple-900">
                    {e.name}: ${e.balance.toLocaleString()}
                  </div>
                ))}
                <div className="text-sm font-mono font-bold text-purple-900 border-t border-purple-200 mt-1 pt-1">
                  Total Expenses: ${totalExpenses.toLocaleString()}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="text-sm font-mono text-purple-900">
                Dividends: ${scenario.dividends.toLocaleString()}
              </div>
              <div className="text-sm font-mono text-purple-900">
                Beginning Retained Earnings: ${scenario.beginningRE.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded border border-purple-200 p-3">
              <label className="text-sm font-semibold text-purple-900 block mb-1">
                Step 1: Total amount closed from Revenue accounts to Income Summary
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-purple-700">$</span>
                <Input
                  type="text"
                  value={step1}
                  onChange={(e) => setStep1(e.target.value)}
                  disabled={submitted}
                  placeholder="Enter total revenue amount"
                  className="max-w-xs"
                />
              </div>
            </div>

            <div className="bg-white rounded border border-purple-200 p-3">
              <label className="text-sm font-semibold text-purple-900 block mb-1">
                Step 2: Total amount closed from Expense accounts to Income Summary
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-purple-700">$</span>
                <Input
                  type="text"
                  value={step2}
                  onChange={(e) => setStep2(e.target.value)}
                  disabled={submitted}
                  placeholder="Enter total expense amount"
                  className="max-w-xs"
                />
              </div>
            </div>

            <div className="bg-white rounded border border-purple-200 p-3">
              <label className="text-sm font-semibold text-purple-900 block mb-1">
                Step 3: Net income (or net loss) transferred to Retained Earnings
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-purple-700">$</span>
                <Input
                  type="text"
                  value={step3}
                  onChange={(e) => setStep3(e.target.value)}
                  disabled={submitted}
                  placeholder="Enter net income amount"
                  className="max-w-xs"
                />
              </div>
            </div>

            <div className="bg-white rounded border border-purple-200 p-3">
              <label className="text-sm font-semibold text-purple-900 block mb-1">
                Step 4: Dividends amount closed to Retained Earnings
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-purple-700">$</span>
                <Input
                  type="text"
                  value={step4}
                  onChange={(e) => setStep4(e.target.value)}
                  disabled={submitted}
                  placeholder="Enter dividends amount"
                  className="max-w-xs"
                />
              </div>
            </div>
          </div>

          {!submitted ? (
            <Button onClick={handleSubmit} className="mt-4 bg-purple-600 hover:bg-purple-700">
              Submit Answers
            </Button>
          ) : (
            <div className="mt-4 space-y-3">
              {result && (
                <div className={`rounded-lg p-4 ${result.correct ? 'bg-green-50 border border-green-300' : 'bg-amber-50 border border-amber-300'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {result.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-amber-600" />
                    )}
                    <span className="font-semibold text-sm">
                      {result.feedback.message}
                    </span>
                  </div>
                  {result.feedback.reteach && (
                    <p className="text-sm text-amber-800">{result.feedback.reteach}</p>
                  )}
                  {!result.correct && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowWorkedExample(!showWorkedExample)}
                      className="mt-2 text-amber-700"
                    >
                      <HelpCircle className="h-4 w-4 mr-1" />
                      Show worked example
                    </Button>
                  )}
                </div>
              )}

              {showWorkedExample && (
                <div className="bg-white rounded border border-purple-200 p-3 text-sm">
                  <p className="font-mono text-purple-900">Step 1: ${totalRevenues.toLocaleString()} (sum of all revenues)</p>
                  <p className="font-mono text-purple-900">Step 2: ${totalExpenses.toLocaleString()} (sum of all expenses)</p>
                  <p className="font-mono text-purple-900">Step 3: ${netIncome.toLocaleString()} (revenues − expenses)</p>
                  <p className="font-mono text-purple-900">Step 4: ${scenario.dividends.toLocaleString()} (dividends)</p>
                  <p className="mt-2 text-purple-700">Ending Retained Earnings: ${scenario.beginningRE.toLocaleString()} + ${netIncome.toLocaleString()} − ${scenario.dividends.toLocaleString()} = ${getEndingRE(scenario).toLocaleString()}</p>
                </div>
              )}

              <Button onClick={handleNewRound} className="bg-purple-600 hover:bg-purple-700">
                <RefreshCw className="h-4 w-4 mr-1" />
                New Numbers
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}