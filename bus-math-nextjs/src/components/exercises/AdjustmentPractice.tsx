'use client'

import { useState, useCallback, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  CheckCircle,
  XCircle,
  RefreshCw,
  Target,
  ChevronDown,
  HelpCircle,
  Trophy
} from 'lucide-react'

// --- Data schemas ---

interface AdjustmentScenario {
  id: string
  description: string
  type: 'accrued-revenue' | 'accrued-expense' | 'deferred-revenue' | 'deferred-expense'
  debitAccount: string
  creditAccount: string
  amount: number
  explanation: string
  hint: string
}

interface MisconceptionFeedback {
  pattern: string
  message: string
  reteach: string
}

const MISCONCEPTION_MAP: MisconceptionFeedback[] = [
  {
    pattern: 'wrong-type',
    message: 'That is not the correct adjustment type for this scenario.',
    reteach: 'Ask: Did cash move before or after the work? Cash after work = accrued. Cash before work = deferred.'
  },
  {
    pattern: 'wrong-accounts',
    message: 'The accounts you selected do not match the correct entry for this type.',
    reteach: 'Accrued revenue always uses A/R and Revenue. Accrued expense uses an Expense and A/P. Deferred revenue uses Deferred Revenue and Revenue. Deferred expense uses an Expense and a Prepaid asset.'
  },
  {
    pattern: 'wrong-amount',
    message: 'The amount is not correct for this period.',
    reteach: 'For deferred items, divide the total by the number of periods to find the per-period amount. Only adjust for the current period.'
  }
]

// --- Scenario generators ---

function generateAccruedRevenue(id: number): AdjustmentScenario {
  const clients = ['Fitness Studio', 'Local Bakery', 'Tech Startup', 'Law Firm', 'Dental Office']
  const services = ['social media campaign', 'website redesign', 'SEO audit', 'branding package', 'email newsletter']
  const client = clients[id % clients.length]
  const service = services[id % services.length]
  const amount = 300 + (id * 127) % 700
  const day = 25 + (id % 5)

  return {
    id: `ar-${id}`,
    description: `On March ${day}, Sarah completed a ${service} for ${client} worth $${amount}. She will not invoice until April 5. What is the March 31 adjusting entry?`,
    type: 'accrued-revenue',
    debitAccount: 'Accounts Receivable',
    creditAccount: 'Service Revenue',
    amount,
    explanation: `Sarah earned $${amount} in March but has not billed or been paid. Debit Accounts Receivable $${amount} and credit Service Revenue $${amount} to recognize the revenue in the correct period.`,
    hint: 'Work done but no cash yet. Which asset represents money owed to Sarah?'
  }
}

function generateAccruedExpense(id: number): AdjustmentScenario {
  const vendors = ['freelance designer', 'cleaning service', 'IT consultant', 'copywriter', 'photographer']
  const costs = [200 + (id * 89) % 500, 150 + (id * 67) % 350, 300 + (id * 113) % 400]
  const cost = costs[id % costs.length]
  const expenseNames = ['Design Expense', 'Maintenance Expense', 'Consulting Expense', 'Marketing Expense', 'Photography Expense']
  const expense = expenseNames[id % expenseNames.length]

  return {
    id: `ae-${id}`,
    description: `Sarah's ${vendors[id % vendors.length]} completed work in the last week of March worth $${cost}. The vendor will invoice in April and Sarah will pay then. What is the March 31 adjusting entry?`,
    type: 'accrued-expense',
    debitAccount: expense,
    creditAccount: 'Accounts Payable',
    amount: cost,
    explanation: `The cost was incurred in March but no bill has arrived. Debit ${expense} $${cost} and credit Accounts Payable $${cost} to record the expense in the period it was incurred.`,
    hint: 'Cost incurred but not yet billed. Which liability account records amounts owed?'
  }
}

function generateDeferredRevenue(id: number): AdjustmentScenario {
  const totals = [1200, 2400, 3600, 1800, 600]
  const months = [6, 12, 6, 9, 3]
  const total = totals[id % totals.length]
  const period = months[id % months.length]
  const monthly = total / period

  return {
    id: `dr-${id}`,
    description: `A client paid Sarah $${total} on March 1 for ${period} months of service. By March 31, one month of service has been delivered. What is the March 31 adjusting entry?`,
    type: 'deferred-revenue',
    debitAccount: 'Deferred Revenue',
    creditAccount: 'Service Revenue',
    amount: monthly,
    explanation: `Cash was received before the work was done. Monthly revenue = $${total} ÷ ${period} = $${monthly}. Debit Deferred Revenue $${monthly} and credit Service Revenue $${monthly} to recognize one month of earned revenue.`,
    hint: `Cash came first. Divide $${total} by ${period} months to find the monthly amount.`
  }
}

function generateDeferredExpense(id: number): AdjustmentScenario {
  const items = [
    { name: 'insurance policy', total: 600, periods: 3, expense: 'Insurance Expense', asset: 'Prepaid Insurance' },
    { name: 'software subscription', total: 1200, periods: 12, expense: 'Software Expense', asset: 'Prepaid Software' },
    { name: 'rent deposit', total: 2400, periods: 4, expense: 'Rent Expense', asset: 'Prepaid Rent' },
    { name: 'advertising package', total: 900, periods: 3, expense: 'Advertising Expense', asset: 'Prepaid Advertising' },
    { name: 'office supplies order', total: 450, periods: 3, expense: 'Supplies Expense', asset: 'Prepaid Supplies' }
  ]
  const item = items[id % items.length]
  const monthly = item.total / item.periods

  return {
    id: `de-${id}`,
    description: `Sarah paid $${item.total} on March 1 for a ${item.periods}-month ${item.name}. By March 31, one month of benefit has been used. What is the March 31 adjusting entry?`,
    type: 'deferred-expense',
    debitAccount: item.expense,
    creditAccount: item.asset,
    amount: monthly,
    explanation: `Cash was paid before the cost was incurred. Monthly expense = $${item.total} ÷ ${item.periods} = $${monthly}. Debit ${item.expense} $${monthly} and credit ${item.asset} $${monthly} to record one month of expense.`,
    hint: `Cash went first. Divide $${item.total} by ${item.periods} months to find the monthly expense.`
  }
}

const GENERATORS = [generateAccruedRevenue, generateAccruedExpense, generateDeferredRevenue, generateDeferredExpense]
const TYPE_LABELS: Record<string, string> = {
  'accrued-revenue': 'Accrued Revenue',
  'accrued-expense': 'Accrued Expense',
  'deferred-revenue': 'Deferred Revenue',
  'deferred-expense': 'Deferred Expense'
}

// --- Component ---

interface AdjustmentPracticeProps {
  masteryTarget?: number
}

export default function AdjustmentPractice({ masteryTarget = 3 }: AdjustmentPracticeProps) {
  const [round, setRound] = useState(0)
  const [scenario, setScenario] = useState<AdjustmentScenario>(() => GENERATORS[0](0))
  const [selectedType, setSelectedType] = useState<string>('')
  const [debitAnswer, setDebitAnswer] = useState('')
  const [creditAnswer, setCreditAnswer] = useState('')
  const [amountAnswer, setAmountAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [reteach, setReteach] = useState('')
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [masteryReached, setMasteryReached] = useState(false)

  const generateNewScenario = useCallback((seed: number) => {
    const genIndex = seed % GENERATORS.length
    const newScenario = GENERATORS[genIndex](seed)
    setScenario(newScenario)
    setSelectedType('')
    setDebitAnswer('')
    setCreditAnswer('')
    setAmountAnswer('')
    setSubmitted(false)
    setIsCorrect(false)
    setFeedback('')
    setReteach('')
    setShowHint(false)
  }, [])

  const handleNewNumbers = useCallback(() => {
    const newRound = round + 1
    setRound(newRound)
    generateNewScenario(newRound)
  }, [round, generateNewScenario])

  const checkAnswer = useCallback(() => {
    const numAmount = parseFloat(amountAnswer) || 0
    const typeCorrect = selectedType === scenario.type
    const debitCorrect = debitAnswer.trim().toLowerCase() === scenario.debitAccount.toLowerCase()
    const creditCorrect = creditAnswer.trim().toLowerCase() === scenario.creditAccount.toLowerCase()
    const amountCorrect = Math.abs(numAmount - scenario.amount) < 0.01

    const allCorrect = typeCorrect && debitCorrect && creditCorrect && amountCorrect

    if (!typeCorrect) {
      setFeedback(MISCONCEPTION_MAP[0].message)
      setReteach(MISCONCEPTION_MAP[0].reteach)
    } else if (!debitCorrect || !creditCorrect) {
      setFeedback(MISCONCEPTION_MAP[1].message)
      setReteach(MISCONCEPTION_MAP[1].reteach)
    } else if (!amountCorrect) {
      setFeedback(MISCONCEPTION_MAP[2].message)
      setReteach(MISCONCEPTION_MAP[2].reteach)
    } else {
      setFeedback(scenario.explanation)
      setReteach('')
    }

    setIsCorrect(allCorrect)
    setSubmitted(true)
    setTotalAttempts(prev => prev + 1)

    if (allCorrect) {
      setConsecutiveCorrect(prev => {
        const next = prev + 1
        if (next >= masteryTarget) {
          setMasteryReached(true)
        }
        return next
      })
    } else {
      setConsecutiveCorrect(0)
    }
  }, [selectedType, debitAnswer, creditAnswer, amountAnswer, scenario, masteryTarget])

  const masteryProgress = useMemo(() => {
    return Math.min(consecutiveCorrect, masteryTarget)
  }, [consecutiveCorrect, masteryTarget])

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Adjustment Practice Loop
          </CardTitle>
          <CardDescription className="text-base">
            Identify the adjustment type, select accounts, and calculate the amount.
            Get {masteryTarget} consecutive correct to reach mastery.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Mastery Progress */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-800">Mastery Progress</span>
            <Badge variant={masteryReached ? 'default' : 'outline'} className={masteryReached ? 'bg-green-600' : ''}>
              {masteryReached ? (
                <><Trophy className="w-3 h-3 mr-1" /> Mastery Reached!</>
              ) : (
                `${masteryProgress} / ${masteryTarget} consecutive`
              )}
            </Badge>
          </div>
          <div className="w-full bg-green-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(masteryProgress / masteryTarget) * 100}%` }}
            />
          </div>
          <p className="text-xs text-green-700 mt-1">
            Total attempts: {totalAttempts} | Round: {round + 1}
          </p>
        </CardContent>
      </Card>

      {/* Scenario */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800">Scenario</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-800 text-base">{scenario.description}</p>
        </CardContent>
      </Card>

      {/* Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Step 1: What type of adjustment is this?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(TYPE_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => !submitted && setSelectedType(key)}
                disabled={submitted}
                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                  selectedType === key
                    ? submitted
                      ? key === scenario.type
                        ? 'bg-green-100 border-green-400 text-green-800'
                        : 'bg-red-100 border-red-400 text-red-800'
                      : 'bg-blue-100 border-blue-400 text-blue-800'
                    : submitted && key === scenario.type
                    ? 'bg-green-50 border-green-300 text-green-700'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Step 2: Which accounts are affected?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Debit Account</label>
              <Input
                type="text"
                placeholder="e.g., Accounts Receivable"
                value={debitAnswer}
                onChange={(e) => !submitted && setDebitAnswer(e.target.value)}
                disabled={submitted}
                className={`text-sm ${
                  submitted
                    ? debitAnswer.trim().toLowerCase() === scenario.debitAccount.toLowerCase()
                      ? 'border-green-400 bg-green-50'
                      : 'border-red-400 bg-red-50'
                    : ''
                }`}
              />
              {submitted && (
                <p className="text-xs mt-1 text-gray-600">
                  Correct: <span className="font-medium">{scenario.debitAccount}</span>
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Credit Account</label>
              <Input
                type="text"
                placeholder="e.g., Service Revenue"
                value={creditAnswer}
                onChange={(e) => !submitted && setCreditAnswer(e.target.value)}
                disabled={submitted}
                className={`text-sm ${
                  submitted
                    ? creditAnswer.trim().toLowerCase() === scenario.creditAccount.toLowerCase()
                      ? 'border-green-400 bg-green-50'
                      : 'border-red-400 bg-red-50'
                    : ''
                }`}
              />
              {submitted && (
                <p className="text-xs mt-1 text-gray-600">
                  Correct: <span className="font-medium">{scenario.creditAccount}</span>
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Amount */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Step 3: What is the adjustment amount for this period?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <span className="text-lg font-medium text-gray-700">$</span>
            <Input
              type="number"
              step="0.01"
              placeholder="0.00"
              value={amountAnswer}
              onChange={(e) => !submitted && setAmountAnswer(e.target.value)}
              disabled={submitted}
              className={`w-40 text-sm ${
                submitted
                  ? Math.abs(parseFloat(amountAnswer) - scenario.amount) < 0.01
                    ? 'border-green-400 bg-green-50'
                    : 'border-red-400 bg-red-50'
                  : ''
              }`}
            />
            {submitted && (
              <p className="text-xs text-gray-600">
                Correct: <span className="font-medium">${scenario.amount.toFixed(2)}</span>
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Hint */}
      {!submitted && (
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowHint(!showHint)}
            className="text-amber-700"
          >
            <HelpCircle className="w-4 h-4 mr-1" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </Button>
          {showHint && (
            <div className="mt-2 p-3 bg-amber-50 rounded border border-amber-200 text-sm text-amber-800">
              {scenario.hint}
            </div>
          )}
        </div>
      )}

      {/* Submit / New Numbers */}
      <div className="flex justify-center gap-4">
        {!submitted ? (
          <Button
            onClick={checkAnswer}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            disabled={!selectedType || !debitAnswer || !creditAnswer || !amountAnswer}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Check Answer
          </Button>
        ) : (
          <>
            <Button
              onClick={handleNewNumbers}
              size="lg"
              className={masteryReached ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              {masteryReached ? 'Continue Practicing' : 'New Numbers'}
            </Button>
          </>
        )}
      </div>

      {/* Feedback */}
      {submitted && (
        <Card className={`border-2 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              {isCorrect ? 'Correct!' : 'Not Quite'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'} mb-3`}>
              {feedback}
            </p>
            {!isCorrect && reteach && (
              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <div className="flex items-center gap-2 mb-1">
                  <ChevronDown className="w-4 h-4 text-amber-700" />
                  <p className="text-sm font-medium text-amber-800">Quick Reteach</p>
                </div>
                <p className="text-xs text-amber-700">{reteach}</p>
              </div>
            )}
            {isCorrect && (
              <div className="mt-2 p-3 bg-green-100 rounded border border-green-300">
                <p className="text-xs text-green-800 font-medium">
                  Full entry: Debit {scenario.debitAccount} ${scenario.amount.toFixed(2)},
                  Credit {scenario.creditAccount} ${scenario.amount.toFixed(2)}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
