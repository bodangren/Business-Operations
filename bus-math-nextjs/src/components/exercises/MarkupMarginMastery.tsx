'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, RefreshCw, HelpCircle, ArrowRight, Target, Calculator } from 'lucide-react'

interface ProblemSet {
  id: string
  cost: number
  sellingPrice: number
  requiresMarkup: boolean // true = calculate markup, false = calculate margin
}

function generateProblem(): ProblemSet {
  const requiresMarkup = Math.random() > 0.5
  const cost = Math.floor(Math.random() * 90) + 10 // 10-99
  const markupPct = [20, 25, 30, 40, 50, 60, 75, 100][Math.floor(Math.random() * 8)]
  const marginPct = [15, 20, 25, 30, 33, 40, 50, 60][Math.floor(Math.random() * 8)]
  
  let sellingPrice: number
  if (requiresMarkup) {
    sellingPrice = Math.round(cost * (1 + markupPct / 100))
  } else {
    sellingPrice = Math.round(cost / (1 - marginPct / 100))
  }
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    cost,
    sellingPrice,
    requiresMarkup
  }
}

function calculateMarkup(cost: number, price: number): number {
  return ((price - cost) / cost) * 100
}

function calculateMargin(cost: number, price: number): number {
  return ((price - cost) / price) * 100
}

export default function MarkupMarginMastery() {
  const [problem, setProblem] = useState<ProblemSet>(generateProblem())
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const [streak, setStreak] = useState(0)
  const [masteryProgress, setMasteryProgress] = useState(0)
  const [showWorkedExample, setShowWorkedExample] = useState(false)
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)

  const expectedAnswer = problem.requiresMarkup
    ? calculateMarkup(problem.cost, problem.sellingPrice)
    : calculateMargin(problem.cost, problem.sellingPrice)

  const handleSubmit = useCallback(() => {
    const userNum = parseFloat(userAnswer)
    const isCorrect = !isNaN(userNum) && Math.abs(userNum - expectedAnswer) < 0.5
    
    setCorrect(isCorrect)
    setSubmitted(true)
    
    if (isCorrect) {
      const newConsecutive = consecutiveCorrect + 1
      setConsecutiveCorrect(newConsecutive)
      setStreak(streak + 1)
      setMasteryProgress(Math.min(100, masteryProgress + 10))
    } else {
      setConsecutiveCorrect(0)
    }
  }, [userAnswer, expectedAnswer, streak, consecutiveCorrect, masteryProgress])

  const handleNewProblem = useCallback(() => {
    setProblem(generateProblem())
    setUserAnswer('')
    setSubmitted(false)
    setCorrect(null)
    setShowWorkedExample(false)
  }, [])

  const handleShowExample = useCallback(() => {
    setShowWorkedExample(true)
    setSubmitted(true)
    setCorrect(false)
  }, [])

  const getFeedbackMessage = () => {
    if (!submitted || correct === null) return ''
    
    if (correct) {
      return `Correct! ${problem.requiresMarkup ? 'Markup' : 'Margin'} = ${expectedAnswer.toFixed(1)}%`
    }
    
    const actualAnswer = problem.requiresMarkup
      ? calculateMarkup(problem.cost, problem.sellingPrice)
      : calculateMargin(problem.cost, problem.sellingPrice)
    
    return `Not quite. The correct ${problem.requiresMarkup ? 'markup' : 'margin'} is ${actualAnswer.toFixed(1)}%. Remember: ${problem.requiresMarkup ? 'profit ÷ cost × 100' : 'profit ÷ selling price × 100'}`
  }

  const getReteachGuidance = () => {
    if (correct !== false || !submitted) return null
    
    const profit = problem.sellingPrice - problem.cost
    
    if (problem.requiresMarkup) {
      return {
        title: 'Markup Formula Reminder',
        steps: [
          `Profit = Selling Price - Cost = $${problem.sellingPrice} - $${problem.cost} = $${profit}`,
          `Markup = (Profit ÷ Cost) × 100%`,
          `Markup = ($${profit} ÷ $${problem.cost}) × 100% = ${expectedAnswer.toFixed(1)}%`,
          'Markup always uses COST as the denominator'
        ]
      }
    } else {
      return {
        title: 'Margin Formula Reminder',
        steps: [
          `Profit = Selling Price - Cost = $${problem.sellingPrice} - $${problem.cost} = $${profit}`,
          `Margin = (Profit ÷ Selling Price) × 100%`,
          `Margin = ($${profit} ÷ $${problem.sellingPrice}) × 100% = ${expectedAnswer.toFixed(1)}%`,
          'Margin always uses SELLING PRICE as the denominator'
        ]
      }
    }
  }

  const masteryTarget = 5 // consecutive correct needed
  const progressToMastery = (consecutiveCorrect / masteryTarget) * 100

  return (
    <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
      <CardHeader>
        <CardTitle className="text-xl text-indigo-800 flex items-center gap-2">
          <Target className="h-5 w-5" />
          Markup vs. Margin Mastery Practice
        </CardTitle>
        <CardDescription className="text-indigo-600">
          Calculate the correct percentage. Target: {masteryTarget} consecutive correct answers.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress tracker */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Current streak: <strong>{streak}</strong></span>
            <span className="text-gray-600">Mastery progress: <strong>{masteryProgress}%</strong></span>
          </div>
          <Progress value={progressToMastery} className="h-2" />
          {consecutiveCorrect >= masteryTarget && (
            <div className="flex items-center gap-2 text-green-700 bg-green-50 p-2 rounded">
              <CheckCircle className="h-4 w-4" />
              <span className="font-medium">Mastery achieved! You've answered {masteryTarget} correctly in a row.</span>
            </div>
          )}
        </div>

        {/* Problem display */}
        <div className="bg-white p-6 rounded-lg border border-indigo-200">
          <div className="text-center space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-xs text-gray-500 uppercase">Cost</p>
                <p className="text-xl font-bold text-gray-800">${problem.cost}</p>
              </div>
              <div className="bg-indigo-100 rounded-lg p-3">
                <p className="text-xs text-indigo-600 uppercase">Selling Price</p>
                <p className="text-xl font-bold text-indigo-800">${problem.sellingPrice}</p>
              </div>
              <div className="bg-green-100 rounded-lg p-3">
                <p className="text-xs text-green-600 uppercase">Profit</p>
                <p className="text-xl font-bold text-green-800">${problem.sellingPrice - problem.cost}</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg text-gray-700 mb-4">
                Calculate the <span className="font-bold text-indigo-700">{problem.requiresMarkup ? 'MARKUP' : 'MARGIN'}</span> percentage:
              </p>
              <p className="text-sm text-gray-500 italic">
                (Round to the nearest whole number)
              </p>
            </div>

            {/* Input area */}
            <div className="flex items-center justify-center gap-2">
              <Input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
                className="max-w-32 text-center text-lg"
                disabled={submitted}
                onKeyDown={(e) => e.key === 'Enter' && !submitted && handleSubmit()}
              />
              <span className="text-xl font-bold text-gray-400">%</span>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 justify-center">
              {!submitted ? (
                <>
                  <Button 
                    onClick={handleSubmit}
                    disabled={!userAnswer}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Check Answer
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleShowExample}
                    className="border-indigo-300 text-indigo-700"
                  >
                    <HelpCircle className="h-4 w-4 mr-1" />
                    Show Example
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    onClick={handleNewProblem}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    New Numbers
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      handleNewProblem()
                      setStreak(0)
                      setMasteryProgress(0)
                      setConsecutiveCorrect(0)
                    }}
                    className="border-gray-300"
                  >
                    Reset Progress
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Feedback area */}
        {submitted && (
          <div className={`p-4 rounded-lg border-2 ${
            correct ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'
          }`}>
            <div className="flex items-start gap-3">
              {correct ? (
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              ) : (
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className={`font-semibold ${correct ? 'text-green-800' : 'text-red-800'}`}>
                  {getFeedbackMessage()}
                </p>
                
                {/* Reteach guidance for incorrect answers */}
                {!correct && (
                  <div className="mt-3 bg-white p-3 rounded border border-red-200">
                    <p className="font-medium text-red-800 flex items-center gap-1">
                      <Calculator className="h-4 w-4" />
                      {getReteachGuidance()?.title}
                    </p>
                    <ol className="mt-2 text-sm text-red-700 space-y-1 list-decimal list-inside">
                      {getReteachGuidance()?.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Worked example */}
        {showWorkedExample && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Step-by-Step Solution</h4>
            <div className="text-sm text-blue-700 space-y-2">
              {problem.requiresMarkup ? (
                <>
                  <p><strong>Step 1:</strong> Find the profit: ${problem.sellingPrice} - ${problem.cost} = ${problem.sellingPrice - problem.cost}</p>
                  <p><strong>Step 2:</strong> Use the markup formula: (Profit ÷ Cost) × 100%</p>
                  <p><strong>Step 3:</strong> Calculate: (${problem.sellingPrice - problem.cost} ÷ ${problem.cost}) × 100% = <strong>{expectedAnswer.toFixed(1)}%</strong></p>
                  <p className="pt-2 font-medium text-blue-800">Key: Markup uses COST ($<strong>{problem.cost}</strong>) as the denominator.</p>
                </>
              ) : (
                <>
                  <p><strong>Step 1:</strong> Find the profit: ${problem.sellingPrice} - ${problem.cost} = ${problem.sellingPrice - problem.cost}</p>
                  <p><strong>Step 2:</strong> Use the margin formula: (Profit ÷ Selling Price) × 100%</p>
                  <p><strong>Step 3:</strong> Calculate: (${problem.sellingPrice - problem.cost} ÷ ${problem.sellingPrice}) × 100% = <strong>{expectedAnswer.toFixed(1)}%</strong></p>
                  <p className="pt-2 font-medium text-blue-800">Key: Margin uses SELLING PRICE ($<strong>{problem.sellingPrice}</strong>) as the denominator.</p>
                </>
              )}
            </div>
          </div>
        )}

        {/* Formula reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 p-3 rounded border border-emerald-200">
            <h4 className="font-semibold text-emerald-800 mb-1">Markup Formula</h4>
            <p className="text-sm text-emerald-700 font-mono">(Price - Cost) ÷ Cost × 100%</p>
            <p className="text-xs text-emerald-600 mt-1">Profit as % of what you paid</p>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h4 className="font-semibold text-green-800 mb-1">Margin Formula</h4>
            <p className="text-sm text-green-700 font-mono">(Price - Cost) ÷ Price × 100%</p>
            <p className="text-xs text-green-600 mt-1">Profit as % of what customer pays</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
