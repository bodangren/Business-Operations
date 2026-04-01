'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, ArrowRight, AlertTriangle, RefreshCw } from 'lucide-react'

interface LinkChallenge {
  id: string
  description: string
  sourceSheet: string
  sourceCell: string
  sourceValue: number
  targetSheet: string
  targetCell: string
  targetLabel: string
  options: string[]
  correctIndex: number
  explanation: string
}

const challenges: LinkChallenge[] = [
  {
    id: 'link-1',
    description: 'Link Net Income from the Income Statement into Retained Earnings on the Balance Sheet.',
    sourceSheet: 'Income Statement',
    sourceCell: 'B12',
    sourceValue: 10800,
    targetSheet: 'Balance Sheet',
    targetCell: 'B18',
    targetLabel: 'Net Income (added to RE)',
    options: [
      "='Income Statement'!B12",
      "=B12",
      "=10800",
      "='Balance Sheet'!B12"
    ],
    correctIndex: 0,
    explanation: "='Income Statement'!B12 correctly pulls Net Income from the Income Statement tab into the Balance Sheet. Hard-coding 10800 or using =B12 would not create a live link."
  },
  {
    id: 'link-2',
    description: 'Link Ending Cash from the Cash Flow Statement to the Balance Sheet Cash line.',
    sourceSheet: 'Cash Flow',
    sourceCell: 'B20',
    sourceValue: 22300,
    targetSheet: 'Balance Sheet',
    targetCell: 'B4',
    targetLabel: 'Cash (current asset)',
    options: [
      "=22300",
      "='Cash Flow'!B20",
      "=CashFlow!B20",
      "=B20"
    ],
    correctIndex: 1,
    explanation: "='Cash Flow'!B20 links the ending cash from the Cash Flow tab. Note the sheet name needs single quotes because it contains a space. =CashFlow!B20 would fail if the tab is named 'Cash Flow'."
  },
  {
    id: 'link-3',
    description: 'Build an integrity check that flags when the Balance Sheet does not balance.',
    sourceSheet: 'Balance Sheet',
    sourceCell: 'B22',
    sourceValue: 0,
    targetSheet: 'Balance Sheet',
    targetCell: 'B25',
    targetLabel: 'Balance Check',
    options: [
      '=TotalAssets - TotalLiab - TotalEquity',
      '=IF(ABS(TotalAssets - (TotalLiab + TotalEquity)) < 0.01, "OK", "CHECK")',
      '=SUM(B4:B16)',
      '=IF(TotalAssets > TotalLiab, "OK", "CHECK")'
    ],
    correctIndex: 1,
    explanation: "The IF/ABS pattern checks whether Assets minus (Liabilities + Equity) is within a tiny tolerance. It returns 'OK' when balanced and 'CHECK' when there is a mismatch. A simple subtraction formula would show a number but not a clear pass/fail."
  },
  {
    id: 'link-4',
    description: 'Link Beginning Cash on the Cash Flow Statement from the prior period Balance Sheet.',
    sourceSheet: 'Balance Sheet',
    sourceCell: 'B4',
    sourceValue: 19500,
    targetSheet: 'Cash Flow',
    targetCell: 'B2',
    targetLabel: 'Beginning Cash',
    options: [
      "=19500",
      "='Balance Sheet'!B4",
      "=B4",
      "='Cash Flow'!B4"
    ],
    correctIndex: 1,
    explanation: "='Balance Sheet'!B4 pulls the cash balance from the Balance Sheet. Beginning cash on the Cash Flow Statement must match the prior period's ending cash on the Balance Sheet."
  },
  {
    id: 'link-5',
    description: 'Sarah changes Revenue from $16,500 to $18,000. Which formula ensures Retained Earnings updates?',
    sourceSheet: 'Income Statement',
    sourceCell: 'B2',
    sourceValue: 18000,
    targetSheet: 'Balance Sheet',
    targetCell: 'B18',
    targetLabel: 'Retained Earnings update',
    options: [
      "=10800 + 1500",
      "='Income Statement'!B12",
      "=B12 + BeginningRE",
      "='Balance Sheet'!B12"
    ],
    correctIndex: 1,
    explanation: "='Income Statement'!B12 links directly to Net Income. When Revenue changes, Net Income recalculates, and the linked Retained Earnings cell updates automatically. Hard-coded sums break this chain."
  }
]

export default function CrossSheetLinkSimulator() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const challenge = challenges[currentIndex]

  const handleSubmit = useCallback(() => {
    if (selectedIndex === null) return
    setIsSubmitted(true)
    if (selectedIndex === challenge.correctIndex) {
      setScore(prev => prev + 1)
    }
  }, [selectedIndex, challenge.correctIndex])

  const handleNext = useCallback(() => {
    if (currentIndex < challenges.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedIndex(null)
      setIsSubmitted(false)
    } else {
      setCompleted(true)
    }
  }, [currentIndex])

  const handleReset = useCallback(() => {
    setCurrentIndex(0)
    setSelectedIndex(null)
    setIsSubmitted(false)
    setScore(0)
    setCompleted(false)
  }, [])

  if (completed) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Rehearsal Complete
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-green-900">
            You scored <strong>{score}</strong> out of <strong>{challenges.length}</strong> correct.
          </p>
          {score === challenges.length ? (
            <p className="text-green-800">
              Perfect score. You are ready to build cross-sheet links in the real workbook.
            </p>
          ) : score >= 3 ? (
            <p className="text-green-800">
              Strong performance. Review any missed items below, then proceed to the workbook sprint.
            </p>
          ) : (
            <p className="text-amber-800">
              Review the explanations below and try again before building in the live workbook.
            </p>
          )}
          <Button onClick={handleReset} variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Badge variant="outline" className="text-sm">
          Challenge {currentIndex + 1} of {challenges.length}
        </Badge>
        <Badge className="bg-green-100 text-green-800">
          Score: {score}/{currentIndex + (isSubmitted ? 1 : 0)}
        </Badge>
      </div>

      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-800">{challenge.description}</CardTitle>
          <CardDescription className="text-purple-700">
            Source: <span className="font-mono">{challenge.sourceSheet}!{challenge.sourceCell}</span>
            {' '}→ Target: <span className="font-mono">{challenge.targetSheet}!{challenge.targetCell}</span> ({challenge.targetLabel})
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded border">
              <p className="text-xs font-semibold text-gray-600 mb-1">SOURCE</p>
              <p className="font-mono text-sm">{challenge.sourceSheet}!{challenge.sourceCell}</p>
              <p className="text-lg font-bold text-gray-900">${challenge.sourceValue.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-white rounded border flex items-center justify-center">
              <div className="text-center">
                <ArrowRight className="h-6 w-6 mx-auto text-purple-600 mb-1" />
                <p className="text-xs text-gray-500">Link to</p>
                <p className="font-mono text-sm">{challenge.targetSheet}!{challenge.targetCell}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {challenge.options.map((option, idx) => {
              let optionStyle = 'border-gray-200 bg-white hover:border-purple-300'
              let icon = null

              if (isSubmitted) {
                if (idx === challenge.correctIndex) {
                  optionStyle = 'border-green-400 bg-green-50'
                  icon = <CheckCircle className="h-4 w-4 text-green-600" />
                } else if (idx === selectedIndex && idx !== challenge.correctIndex) {
                  optionStyle = 'border-red-400 bg-red-50'
                  icon = <XCircle className="h-4 w-4 text-red-600" />
                }
              } else if (idx === selectedIndex) {
                optionStyle = 'border-purple-400 bg-purple-50'
              }

              return (
                <button
                  key={idx}
                  onClick={() => !isSubmitted && setSelectedIndex(idx)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-3 rounded border transition-all flex items-center justify-between ${optionStyle} ${!isSubmitted ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <span className="font-mono text-sm">{option}</span>
                  {icon}
                </button>
              )
            })}
          </div>

          {!isSubmitted ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedIndex === null}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Submit Answer
            </Button>
          ) : (
            <div className="space-y-3">
              <div className={`p-3 rounded ${selectedIndex === challenge.correctIndex ? 'bg-green-100 text-green-900' : 'bg-amber-100 text-amber-900'}`}>
                <div className="flex items-center gap-2 mb-1">
                  {selectedIndex === challenge.correctIndex ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertTriangle className="h-4 w-4" />
                  )}
                  <span className="font-semibold">
                    {selectedIndex === challenge.correctIndex ? 'Correct' : 'Not quite'}
                  </span>
                </div>
                <p className="text-sm">{challenge.explanation}</p>
              </div>
              <Button
                onClick={handleNext}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {currentIndex < challenges.length - 1 ? 'Next Challenge' : 'See Results'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
