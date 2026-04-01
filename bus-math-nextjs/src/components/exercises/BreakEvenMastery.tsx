'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, RefreshCw, HelpCircle, Target, Calculator } from 'lucide-react'

interface ProblemSet {
  id: string
  fixedCosts: number
  variableCost: number
  sellingPrice: number
  targetProfit?: number
}

function generateProblem(): ProblemSet {
  const scenarios = [
    { fixedCosts: 8100, variableCost: 880, sellingPrice: 1350 },
    { fixedCosts: 4800, variableCost: 320, sellingPrice: 720 },
    { fixedCosts: 6000, variableCost: 400, sellingPrice: 800 },
    { fixedCosts: 5000, variableCost: 250, sellingPrice: 550 },
    { fixedCosts: 9000, variableCost: 600, sellingPrice: 1200 },
    { fixedCosts: 7200, variableCost: 480, sellingPrice: 960 },
    { fixedCosts: 8400, variableCost: 700, sellingPrice: 1400 },
    { fixedCosts: 3000, variableCost: 150, sellingPrice: 450 },
  ]
  
  const scenario = scenarios[Math.floor(Math.random() * scenarios.length)]
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    fixedCosts: scenario.fixedCosts,
    variableCost: scenario.variableCost,
    sellingPrice: scenario.sellingPrice,
  }
}

function calculateContributionMargin(sellingPrice: number, variableCost: number): number {
  return sellingPrice - variableCost
}

function calculateContributionMarginRatio(sellingPrice: number, variableCost: number): number {
  return ((sellingPrice - variableCost) / sellingPrice) * 100
}

function calculateBreakEven(fixedCosts: number, contributionMargin: number): number {
  return Math.ceil(fixedCosts / contributionMargin)
}

function calculateBreakEvenDollar(fixedCosts: number, cmRatio: number): number {
  return Math.ceil(fixedCosts / (cmRatio / 100))
}

type ProblemType = 'cm' | 'cm-ratio' | 'break-even-units' | 'break-even-dollars'

export default function BreakEvenMastery() {
  const [problem, setProblem] = useState<ProblemSet>(generateProblem())
  const [problemType, setProblemType] = useState<ProblemType>('cm')
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [showWorkedExample, setShowWorkedExample] = useState(false)
  const [streak, setStreak] = useState(0)

  const expectedAnswer = (() => {
    const cm = calculateContributionMargin(problem.sellingPrice, problem.variableCost)
    const cmRatio = calculateContributionMarginRatio(problem.sellingPrice, problem.variableCost)
    
    switch (problemType) {
      case 'cm':
        return cm
      case 'cm-ratio':
        return cmRatio
      case 'break-even-units':
        return calculateBreakEven(problem.fixedCosts, cm)
      case 'break-even-dollars':
        return calculateBreakEvenDollar(problem.fixedCosts, cmRatio)
    }
  })()

  const problemLabels: Record<ProblemType, string> = {
    'cm': 'Contribution Margin ($)',
    'cm-ratio': 'Contribution Margin Ratio (%)',
    'break-even-units': 'Break-Even (Units)',
    'break-even-dollars': 'Break-Even (Dollars)',
  }

  const handleSubmit = useCallback(() => {
    const userNum = parseFloat(userAnswer.replace(/[$,%]/g, '').trim())
    const isCorrect = !isNaN(userNum) && Math.abs(userNum - expectedAnswer) < 0.5
    
    setCorrect(isCorrect)
    setSubmitted(true)
    
    if (isCorrect) {
      setConsecutiveCorrect(prev => prev + 1)
      setStreak(prev => prev + 1)
    } else {
      setConsecutiveCorrect(0)
    }
  }, [userAnswer, expectedAnswer])

  const handleNewProblem = useCallback(() => {
    setProblem(generateProblem())
    const types: ProblemType[] = ['cm', 'cm-ratio', 'break-even-units', 'break-even-dollars']
    setProblemType(types[Math.floor(Math.random() * types.length)])
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
    
    const cm = calculateContributionMargin(problem.sellingPrice, problem.variableCost)
    const cmRatio = calculateContributionMarginRatio(problem.sellingPrice, problem.variableCost)
    const beUnits = calculateBreakEven(problem.fixedCosts, cm)
    const beDollars = calculateBreakEvenDollar(problem.fixedCosts, cmRatio)
    
    if (correct) {
      return `Correct! ${problemLabels[problemType]} = ${expectedAnswer}`
    }
    
    switch (problemType) {
      case 'cm':
        return `Not quite. CM = Price − Variable Cost = $${problem.sellingPrice} − $${problem.variableCost} = $${cm}`
      case 'cm-ratio':
        return `Not quite. CM% = CM ÷ Price × 100 = $${cm} ÷ $${problem.sellingPrice} × 100 = ${cmRatio.toFixed(1)}%`
      case 'break-even-units':
        return `Not quite. BE = ⌈Fixed Costs ÷ CM⌉ = ⌈$${problem.fixedCosts} ÷ $${cm}⌉ = ${beUnits} units (always round UP)`
      case 'break-even-dollars':
        return `Not quite. BE$ = ⌈Fixed Costs ÷ CM%⌉ = ⌈$${problem.fixedCosts} ÷ ${cmRatio.toFixed(1)}%⌉ = $${beDollars}`
    }
  }

  const getReteachGuidance = () => {
    if (correct !== false || !submitted) return null
    
    const cm = calculateContributionMargin(problem.sellingPrice, problem.variableCost)
    const cmRatio = calculateContributionMarginRatio(problem.sellingPrice, problem.variableCost)
    
    if (problemType === 'cm') {
      return {
        title: 'Contribution Margin Formula',
        steps: [
          `Step 1: Identify the selling price and variable cost per unit`,
          `Step 2: CM = Price − Variable Cost`,
          `Step 3: CM = $${problem.sellingPrice} − $${problem.variableCost} = $${cm}`,
          'This is how much each sale contributes to covering fixed costs'
        ]
      }
    } else if (problemType === 'cm-ratio') {
      return {
        title: 'Contribution Margin Ratio Formula',
        steps: [
          'Step 1: First calculate CM in dollars (Price − VC)',
          `Step 2: CM Ratio = (CM ÷ Price) × 100%`,
          `Step 3: ($${cm} ÷ $${problem.sellingPrice}) × 100 = ${cmRatio.toFixed(1)}%`,
          'This tells you what percentage of each sales dollar is available for fixed costs'
        ]
      }
    } else if (problemType === 'break-even-units') {
      return {
        title: 'Break-Even Units Formula',
        steps: [
          'Step 1: First calculate CM = Price − VC',
          `CM = $${cm}`,
          'Step 2: BE Units = ⌈Fixed Costs ÷ CM⌉',
          `Step 3: ⌈$${problem.fixedCosts} ÷ $${cm}⌉ = ${calculateBreakEven(problem.fixedCosts, cm)} units`,
          'IMPORTANT: Always round UP to the next whole number'
        ]
      }
    } else {
      return {
        title: 'Break-Even Dollars Formula',
        steps: [
          'Step 1: First calculate CM Ratio = (CM ÷ Price) × 100%',
          `CM Ratio = ${cmRatio.toFixed(1)}%`,
          'Step 2: BE Dollars = ⌈Fixed Costs ÷ CM Ratio⌉',
          `Step 3: ⌈$${problem.fixedCosts} ÷ ${cmRatio.toFixed(1)}%⌉ = $${calculateBreakEvenDollar(problem.fixedCosts, cmRatio)}`,
          'This gives you the revenue needed to break even'
        ]
      }
    }
  }

  const masteryTarget = 5
  const progressToMastery = (consecutiveCorrect / masteryTarget) * 100

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
          <Target className="h-5 w-5" />
          Break-Even & Contribution Margin Mastery
        </CardTitle>
        <CardDescription className="text-blue-600">
          Practice calculating CM, CM ratio, and break-even. Target: {masteryTarget} consecutive correct.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Current streak: <strong>{streak}</strong></span>
            <span className="text-gray-600">Mastery progress: <strong>{Math.round(progressToMastery)}%</strong></span>
          </div>
          <Progress value={progressToMastery} className="h-2" />
          {consecutiveCorrect >= masteryTarget && (
            <div className="flex items-center gap-2 text-green-700 bg-green-50 p-2 rounded">
              <CheckCircle className="h-4 w-4" />
              <span className="font-medium">Mastery achieved! You've answered {masteryTarget} correctly in a row.</span>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg border border-blue-200">
          <div className="text-center space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-xs text-gray-500 uppercase">Fixed Costs</p>
                <p className="text-xl font-bold text-gray-800">${problem.fixedCosts}</p>
              </div>
              <div className="bg-red-100 rounded-lg p-3">
                <p className="text-xs text-red-600 uppercase">Variable Cost</p>
                <p className="text-xl font-bold text-red-800">${problem.variableCost}</p>
              </div>
              <div className="bg-green-100 rounded-lg p-3">
                <p className="text-xs text-green-600 uppercase">Selling Price</p>
                <p className="text-xl font-bold text-green-800">${problem.sellingPrice}</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg text-gray-700 mb-4">
                Calculate: <span className="font-bold text-blue-700">{problemLabels[problemType]}</span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
                className="max-w-40 text-center text-lg"
                disabled={submitted}
                onKeyDown={(e) => e.key === 'Enter' && !submitted && handleSubmit()}
              />
              {problemType.includes('ratio') && <span className="text-xl font-bold text-gray-400">%</span>}
              {problemType.includes('dollar') && <span className="text-xl font-bold text-gray-400">$</span>}
              {problemType === 'break-even-units' && <span className="text-sm text-gray-500">units</span>}
            </div>

            <div className="flex gap-2 justify-center">
              {!submitted ? (
                <>
                  <Button 
                    onClick={handleSubmit}
                    disabled={!userAnswer}
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

        {showWorkedExample && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Step-by-Step Solution</h4>
            <div className="text-sm text-blue-700 space-y-2">
              {problemType === 'cm' && (
                <>
                  <p><strong>Step 1:</strong> Identify profit per unit: ${problem.sellingPrice} - ${problem.variableCost} = ${problem.sellingPrice - problem.variableCost}</p>
                  <p><strong>Step 2:</strong> CM = Price - VC = ${problem.sellingPrice} - ${problem.variableCost} = <strong>${expectedAnswer}</strong></p>
                  <p className="pt-2 font-medium text-blue-800">Key: Contribution Margin is what each unit contributes to covering fixed costs.</p>
                </>
              )}
              {problemType === 'cm-ratio' && (
                <>
                  <p><strong>Step 1:</strong> Calculate CM in dollars: $${problem.sellingPrice} - ${problem.variableCost} = ${calculateContributionMargin(problem.sellingPrice, problem.variableCost)}</p>
                  <p><strong>Step 2:</strong> CM Ratio = (CM ÷ Price) × 100%</p>
                  <p><strong>Step 3:</strong> (${calculateContributionMargin(problem.sellingPrice, problem.variableCost)} ÷ ${problem.sellingPrice}) × 100 = <strong>{expectedAnswer.toFixed(1)}%</strong></p>
                  <p className="pt-2 font-medium text-blue-800">Key: CM Ratio tells you what % of each sales dollar covers fixed costs.</p>
                </>
              )}
              {problemType === 'break-even-units' && (
                <>
                  <p><strong>Step 1:</strong> Calculate CM: $${problem.sellingPrice} - ${problem.variableCost} = ${calculateContributionMargin(problem.sellingPrice, problem.variableCost)}</p>
                  <p><strong>Step 2:</strong> BE = ⌈Fixed Costs ÷ CM⌉</p>
                  <p><strong>Step 3:</strong> ⌈${problem.fixedCosts} ÷ ${calculateContributionMargin(problem.sellingPrice, problem.variableCost)}⌉ = <strong>{expectedAnswer} units</strong></p>
                  <p className="pt-2 font-medium text-blue-800">Key: ALWAYS round UP to the next whole number (you can't sell partial units).</p>
                </>
              )}
              {problemType === 'break-even-dollars' && (
                <>
                  <p><strong>Step 1:</strong> Calculate CM Ratio first: ${calculateContributionMargin(problem.sellingPrice, problem.variableCost)} ÷ ${problem.sellingPrice} = {calculateContributionMarginRatio(problem.sellingPrice, problem.variableCost).toFixed(1)}%</p>
                  <p><strong>Step 2:</strong> BE$ = ⌈Fixed Costs ÷ CM Ratio⌉</p>
                  <p><strong>Step 3:</strong> ⌈${problem.fixedCosts} ÷ {calculateContributionMarginRatio(problem.sellingPrice, problem.variableCost).toFixed(1)}%⌉ = <strong>${expectedAnswer}</strong></p>
                  <p className="pt-2 font-medium text-blue-800">Key: This is the revenue amount needed to break even.</p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 p-3 rounded border border-emerald-200">
            <h4 className="font-semibold text-emerald-800 mb-1">Contribution Margin ($)</h4>
            <p className="text-sm text-emerald-700 font-mono">Price - Variable Cost</p>
            <p className="text-xs text-emerald-600 mt-1">Dollar amount per unit available for fixed costs</p>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h4 className="font-semibold text-green-800 mb-1">Contribution Margin Ratio (%)</h4>
            <p className="text-sm text-green-700 font-mono">(CM ÷ Price) × 100%</p>
            <p className="text-xs text-green-600 mt-1">Percentage of each sales dollar</p>
          </div>
          <div className="bg-amber-50 p-3 rounded border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-1">Break-Even Units</h4>
            <p className="text-sm text-amber-700 font-mono">⌈Fixed Costs ÷ CM⌉</p>
            <p className="text-xs text-amber-600 mt-1">Units needed to cover all costs (round UP)</p>
          </div>
          <div className="bg-orange-50 p-3 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-1">Break-Even Dollars</h4>
            <p className="text-sm text-orange-700 font-mono">⌈Fixed Costs ÷ CM Ratio⌉</p>
            <p className="text-xs text-orange-600 mt-1">Revenue needed to break even</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
