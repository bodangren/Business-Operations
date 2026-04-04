"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, RotateCcw, ArrowRight, TrendingUp } from "lucide-react"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"
import { useState, useCallback } from "react"

interface TransactionType {
  id: string
  description: string
  assetsChange: number
  liabilitiesChange: number
  equityChange: number
  pattern: string
  correctClassifications: string[]
}

const TRANSACTIONS: TransactionType[] = [
  {
    id: "t1",
    description: "Received $2,500 customer payment for completed work",
    assetsChange: 2500,
    liabilitiesChange: 0,
    equityChange: 2500,
    pattern: "Assets and Equity Both Increase",
    correctClassifications: ["cash", "revenue", "both increase"]
  },
  {
    id: "t2",
    description: "Bought $800 equipment with cash",
    assetsChange: 0,
    liabilitiesChange: 0,
    equityChange: 0,
    pattern: "Asset-to-Asset Exchange",
    correctClassifications: ["equipment", "cash", "exchange", "no change"]
  },
  {
    id: "t3",
    description: "Purchased $1,200 supplies on credit (pay later)",
    assetsChange: 1200,
    liabilitiesChange: 1200,
    equityChange: 0,
    pattern: "Assets and Liabilities Both Both Increase",
    correctClassifications: ["supplies", "payable", "credit", "both increase"]
  },
  {
    id: "t4",
    description: "Paid off $900 accounts payable debt",
    assetsChange: -900,
    liabilitiesChange: -900,
    equityChange: 0,
    pattern: "Assets and Liabilities Both Decrease",
    correctClassifications: ["cash", "payable", "decrease", "debt"]
  },
  {
    id: "t5",
    description: "Owner invested $3,000 personal cash into business",
    assetsChange: 3000,
    liabilitiesChange: 0,
    equityChange: 3000,
    pattern: "Assets and Equity Both Increase",
    correctClassifications: ["cash", "equity", "investment", "both increase"]
  },
  {
    id: "t6",
    description: "Paid $400 monthly rent expense with cash",
    assetsChange: -400,
    liabilitiesChange: 0,
    equityChange: -400,
    pattern: "Assets and Equity Both Decrease",
    correctClassifications: ["cash", "expense", "decrease", "equity"]
  },
  {
    id: "t7",
    description: "Billed client $1,800 for ongoing project (not yet paid)",
    assetsChange: 1800,
    liabilitiesChange: 0,
    equityChange: 1800,
    pattern: "Assets and Equity Both Increase",
    correctClassifications: ["receivable", "revenue", "both increase"]
  },
  {
    id: "t8",
    description: "Took out $2,500 bank loan and deposited cash",
    assetsChange: 2500,
    liabilitiesChange: 2500,
    equityChange: 0,
    pattern: "Assets and Liabilities Both Increase",
    correctClassifications: ["cash", "loan", "both increase"]
  }
]

interface PracticeProblem {
  transaction: TransactionType
  currentAssets: number
  currentLiabilities: number
  currentEquity: number
}

export default function Unit01Lesson02Phase4() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 4)!
  
  const [currentProblem, setCurrentProblem] = useState<PracticeProblem | null>(null)
  const [userAssetsChange, setUserAssetsChange] = useState<string>('')
  const [userLiabilitiesChange, setUserLiabilitiesChange] = useState<string>('')
  const [userEquityChange, setUserEquityChange] = useState<string>('')
  const [selectedPattern, setSelectedPattern] = useState<string>('')
  const [attempts, setAttempts] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  
  const PATTERNS = [
    "Asset-to-Asset Exchange",
    "Assets and Equity Both Increase",
    "Assets and Liabilities Both Increase",
    "Assets and Liabilities Both Decrease",
    "Assets and Equity Both Decrease"
  ]

  const startNewProblem = useCallback(() => {
    const randomTransaction = TRANSACTIONS[Math.floor(Math.random() * TRANSACTIONS.length)]
    const baseAssets = 10000 + Math.floor(Math.random() * 5000)
    const baseLiabilities = 2000 + Math.floor(Math.random() * 3000)
    const baseEquity = baseAssets - baseLiabilities
    
    setCurrentProblem({
      transaction: randomTransaction,
      currentAssets: baseAssets,
      currentLiabilities: baseLiabilities,
      currentEquity: baseEquity
    })
    
    setUserAssetsChange('')
    setUserLiabilitiesChange('')
    setUserEquityChange('')
    setSelectedPattern('')
    setShowFeedback(false)
  }, [])

  const checkAnswer = useCallback(() => {
    if (!currentProblem) return
    
    const assetsChange = parseInt(userAssetsChange) || 0
    const liabilitiesChange = parseInt(userLiabilitiesChange) || 0
    const equityChange = parseInt(userEquityChange) || 0
    
    const assetsCorrect = assetsChange === currentProblem.transaction.assetsChange
    const liabilitiesCorrect = liabilitiesChange === currentProblem.transaction.liabilitiesChange
    const equityCorrect = equityChange === currentProblem.transaction.equityChange
    const patternCorrect = selectedPattern === currentProblem.transaction.pattern
    
    const allCorrect = assetsCorrect && liabilitiesCorrect && equityCorrect && patternCorrect
    
    setIsCorrect(allCorrect)
    setShowFeedback(true)
    setAttempts(prev => prev + 1)
    
    if (allCorrect) {
      setCorrectAnswers(prev => prev + 1)
      setConsecutiveCorrect(prev => prev + 1)
    } else {
      setConsecutiveCorrect(0)
    }
  }, [currentProblem, userAssetsChange, userLiabilitiesChange, userEquityChange, selectedPattern])

  const resetPractice = useCallback(() => {
    setCurrentProblem(null)
    setUserAssetsChange('')
    setUserLiabilitiesChange('')
    setUserEquityChange('')
    setSelectedPattern('')
    setShowFeedback(false)
    setIsCorrect(false)
    setAttempts(0)
    setCorrectAnswers(0)
    setConsecutiveCorrect(0)
  }, [])

  if (!currentProblem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
        
        <main className="container mx-auto px-4 py-8 space-y-8">
          <section className="space-y-6">
            <div className="text-center space-y-4">
              <div className="inline-block bg-indigo-100 text-indigo-800 text-lg px-4 py-2 rounded-lg font-semibold">
                Phase 4: Algorithmic Deliberate Practice
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">⚡ Build Your Fluency</h2>
                
                <p className="text-lg leading-relaxed text-indigo-800 mb-4">
                  Now it's time to practice transaction classification until you can do it automatically. 
                  You'll see random business events and need to identify how they affect the accounting equation.
                </p>

                <div className="bg-white p-4 rounded border-l-4 border-indigo-400 mb-4">
                  <p className="font-semibold text-indigo-900 mb-2">Practice Goals:</p>
                  <ul className="space-y-2 text-indigo-800">
                    <li>• Classify transactions into assets, liabilities, and equity changes</li>
                    <li>• Identify the transaction pattern (exchange, increase, decrease)</li>
                    <li>• Verify equation stays balanced after every transaction</li>
                    <li>• Achieve mastery with consecutive correct answers</li>
                  </ul>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Ready to Build Mastery?</h3>
                  
                  <p className="text-lg text-blue-800 mb-6">
                    You'll practice classifying transactions with immediate feedback. The system will track 
                    your accuracy and help you identify areas where you need more practice.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <div className="text-sm text-blue-600 mb-1">Accuracy Goal</div>
                      <div className="text-3xl font-bold text-blue-900">80%+</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <div className="text-sm text-purple-600 mb-1">Mastery Target</div>
                      <div className="text-3xl font-bold text-purple-900">3 in a row</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                      <div className="text-sm text-indigo-600 mb-1">Problems</div>
                      <div className="text-3xl font-bold text-indigo-900">Unlimited</div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={startNewProblem}
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Start Practice
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">💡 Tips for Success</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• <strong>Start with the business event:</strong> What actually happened?</li>
                  <li>• <strong>Ask what was received:</strong> Cash? Equipment? Service?</li>
                  <li>• <strong>Ask what was given:</strong> Cash? Promise to pay later?</li>
                  <li>• <strong>Check both sides:</strong> Did equation stay balanced?</li>
                  <li>• <strong>Use the patterns:</strong> Reference the four patterns from Phase 3 if needed</li>
                </ul>
              </div>

            </div>
          </section>
        </main>
        
        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    )
  }

  const score = attempts > 0 ? Math.round((correctAnswers / attempts) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-indigo-200">
              <div className="flex gap-4">
                <Badge variant="outline" className="text-blue-600">
                  Attempts: {attempts}
                </Badge>
                <Badge variant="outline" className="text-green-600">
                  Correct: {correctAnswers}
                </Badge>
                <Badge variant="outline" className={score >= 80 ? "bg-green-100 text-green-800" : "text-gray-600"}>
                  Accuracy: {score}%
                </Badge>
                <Badge variant="outline" className="text-purple-600">
                  Streak: {consecutiveCorrect}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button onClick={resetPractice} variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>

            {consecutiveCorrect >= 3 && (
              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-400 text-center">
                <div className="text-5xl mb-3">🎉</div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Mastery Achieved!</h3>
                <p className="text-green-800 mb-4">
                  You've gotten 3 consecutive answers correct. You've built fluency in 
                  transaction classification!
                </p>
                <Button onClick={resetPractice} className="bg-green-600 hover:bg-green-700">
                  Complete Practice
                </Button>
              </div>
            )}

            <div className="bg-white p-6 rounded-lg border-2 border-blue-300 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                Transaction Analysis
              </h3>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-lg font-semibold text-blue-900 mb-2">
                  Business Event:
                </p>
                <p className="text-xl text-blue-800">
                  {currentProblem.transaction.description}
                </p>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-3 text-center">
                  Current Position (Before Transaction)
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-600">Assets</div>
                    <div className="text-2xl font-bold text-green-700">
                      ${currentProblem.currentAssets.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Liabilities</div>
                    <div className="text-2xl font-bold text-red-700">
                      ${currentProblem.currentLiabilities.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Equity</div>
                    <div className="text-2xl font-bold text-purple-700">
                      ${currentProblem.currentEquity.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-gray-900 mb-4 text-center">
                  What changes? (Enter positive or negative amounts)
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">
                      Assets Change
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={userAssetsChange}
                        onChange={(e) => setUserAssetsChange(e.target.value)}
                        className="w-full p-3 border-2 border-green-300 rounded-lg text-center text-lg font-bold"
                        placeholder="0"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-2">
                      Liabilities Change
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={userLiabilitiesChange}
                        onChange={(e) => setUserLiabilitiesChange(e.target.value)}
                        className="w-full p-3 border-2 border-red-300 rounded-lg text-center text-lg font-bold"
                        placeholder="0"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      Equity Change
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={userEquityChange}
                        onChange={(e) => setUserEquityChange(e.target.value)}
                        className="w-full p-3 border-2 border-purple-300 rounded-lg text-center text-lg font-bold"
                        placeholder="0"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2 text-center">
                  Which transaction pattern?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {PATTERNS.map((pattern) => (
                    <button
                      key={pattern}
                      onClick={() => setSelectedPattern(pattern)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        selectedPattern === pattern
                          ? 'bg-blue-100 border-blue-500 text-blue-900'
                          : 'bg-white border-gray-300 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      {pattern}
                    </button>
                  ))}
                </div>
              </div>

              {showFeedback && (
                <div className={`p-4 rounded-lg mb-6 ${
                  isCorrect ? 'bg-green-100 border-2 border-green-400' : 'bg-red-100 border-2 border-red-400'
                }`}>
                  {isCorrect ? (
                    <div className="text-center">
                      <div className="text-3xl mb-2">✅</div>
                      <h4 className="text-xl font-bold text-green-900 mb-2">Correct!</h4>
                      <p className="text-green-800 mb-4">
                        You correctly identified how this transaction affects the accounting equation.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl mb-2">❌</div>
                      <h4 className="text-xl font-bold text-red-900 mb-2">Let's Review</h4>
                      <div className="space-y-3">
                        <div className="text-red-800">
                          <strong>Assets:</strong> Should be {currentProblem.transaction.assetsChange > 0 ? '+' : ''}{currentProblem.transaction.assetsChange}
                          (Your answer: {userAssetsChange || '0'})
                        </div>
                        <div className="text-red-800">
                          <strong>Liabilities:</strong> Should be {currentProblem.transaction.liabilitiesChange > 0 ? '+' : ''}{currentProblem.transaction.liabilitiesChange}
                          (Your answer: {userLiabilitiesChange || '0'})
                        </div>
                        <div className="text-red-800">
                          <strong>Equity:</strong> Should be {currentProblem.transaction.equityChange > 0 ? '+' : ''}{currentProblem.transaction.equityChange}
                          (Your answer: {userEquityChange || '0'})
                        </div>
                        <div className="text-red-800">
                          <strong>Pattern:</strong> {currentProblem.transaction.pattern}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-center gap-4">
                {!showFeedback ? (
                  <Button
                    onClick={checkAnswer}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Check Answer
                  </Button>
                ) : isCorrect ? (
                  <Button
                    onClick={startNewProblem}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Next Problem
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setShowFeedback(false)
                      setSelectedPattern('')
                    }}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Try Again
                  </Button>
                )}
              </div>

            </div>

          </div>
        </section>
      </main>
      
      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
