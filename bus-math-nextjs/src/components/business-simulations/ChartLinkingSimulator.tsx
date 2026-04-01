'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  AlertTriangle, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  Lightbulb
} from 'lucide-react'

interface ChartChallenge {
  id: string
  description: string
  dataRange: string
  chartType: 'line' | 'bar' | 'pie'
  correctFormula: string
  options: { formula: string; label: string }[]
  explanation: string
}

interface RecommendationChallenge {
  id: string
  scenario: string
  kpiValues: { name: string; value: number; threshold: number }
  correctRecommendation: 'expand' | 'hold' | 'reduce'
  reasoning: string
  options: { value: 'expand' | 'hold' | 'reduce'; label: string }[]
}

const chartChallenges: ChartChallenge[] = [
  {
    id: 'chart-1',
    description: 'Link Revenue chart to the Sales Table using structured references.',
    dataRange: 'SalesTable[Revenue]',
    chartType: 'bar',
    correctFormula: '=SalesTable[Revenue]',
    options: [
      { formula: '=SalesTable[Revenue]', label: 'Structured reference to Table column' },
      { formula: '=B2:B50', label: 'Fixed range B2:B50' },
      { formula: '=SUM(Sales!B2:B50)', label: 'Cross-sheet sum' },
      { formula: '=Revenue', label: 'Named range' }
    ],
    explanation: 'Structured references (Table[Column]) auto-expand when new rows are added. Fixed ranges break when data grows.'
  },
  {
    id: 'chart-2',
    description: 'Link Profit Margin trend line to the model outputs.',
    dataRange: 'ModelOutputs[ProfitMargin]',
    chartType: 'line',
    correctFormula: '=ModelOutputs[ProfitMargin]',
    options: [
      { formula: '=ModelOutputs[ProfitMargin]', label: 'Structured reference to output column' },
      { formula: '=Sheet1!C10', label: 'Single cell reference' },
      { formula: '=C10:C20', label: 'Fixed range' },
      { formula: '=AVERAGE(Profit)', label: 'Calculated value' }
    ],
    explanation: 'Charts should read from model output columns that are already calculated. Structured references keep charts stable.'
  },
  {
    id: 'chart-3',
    description: 'Link KPI tile to the Cash Runway value.',
    dataRange: 'KPIs[RunwayWeeks]',
    chartType: 'bar',
    correctFormula: '=KPIs[RunwayWeeks]',
    options: [
      { formula: '=KPIs[RunwayWeeks]', label: 'Structured reference' },
      { formula: '=D5', label: 'Direct cell reference' },
      { formula: '=VLOOKUP("Runway", KPIs, 2, FALSE)', label: 'VLOOKUP formula' },
      { formula: '=14', label: 'Hard-coded value' }
    ],
    explanation: 'KPI tiles should pull from calculated KPI table columns. Hard-coded values become stale.'
  },
  {
    id: 'chart-4',
    description: 'Link Scenario comparison chart to the driver outputs.',
    dataRange: 'ScenarioOutputs[AllScenarios]',
    chartType: 'bar',
    correctFormula: '=ScenarioOutputs[AllScenarios]',
    options: [
      { formula: '=ScenarioOutputs[AllScenarios]', label: 'Multi-column structured reference' },
      { formula: '=E2:G10', label: 'Fixed multi-cell range' },
      { formula: '=Base!B2,Stretch!B2,Downside!B2', label: 'Comma-separated refs' },
      { formula: '=CONCAT(Base, Stretch, Downside)', label: 'Text concatenation' }
    ],
    explanation: 'Scenario charts read from a consolidated output range that pulls all scenarios together.'
  }
]

const recommendationChallenges: RecommendationChallenge[] = [
  {
    id: 'rec-1',
    scenario: 'Base Case',
    kpiValues: { name: 'Profit Margin', value: 12, threshold: 10 },
    correctRecommendation: 'expand',
    reasoning: 'Margin exceeds 10% threshold → recommend expansion',
    options: [
      { value: 'expand', label: 'Expand operations' },
      { value: 'hold', label: 'Hold current position' },
      { value: 'reduce', label: 'Reduce exposure' }
    ]
  },
  {
    id: 'rec-2',
    scenario: 'Stretch Case',
    kpiValues: { name: 'Cash Runway', value: 8, threshold: 12 },
    correctRecommendation: 'hold',
    reasoning: 'Runway below 12-week threshold despite high revenue → recommend caution',
    options: [
      { value: 'expand', label: 'Expand operations' },
      { value: 'hold', label: 'Hold current position' },
      { value: 'reduce', label: 'Reduce exposure' }
    ]
  },
  {
    id: 'rec-3',
    scenario: 'Downside Case',
    kpiValues: { name: 'Contribution Margin', value: 22, threshold: 20 },
    correctRecommendation: 'hold',
    reasoning: 'CM above threshold but declining → recommend monitoring',
    options: [
      { value: 'expand', label: 'Expand operations' },
      { value: 'hold', label: 'Hold current position' },
      { value: 'reduce', label: 'Reduce exposure' }
    ]
  },
  {
    id: 'rec-4',
    scenario: 'Stress Test',
    kpiValues: { name: 'Break-even Gap', value: -5, threshold: 0 },
    correctRecommendation: 'reduce',
    reasoning: 'Negative gap means loss → recommend reducing exposure',
    options: [
      { value: 'expand', label: 'Expand operations' },
      { value: 'hold', label: 'Hold current position' },
      { value: 'reduce', label: 'Reduce exposure' }
    ]
  }
]

export default function ChartLinkingSimulator() {
  const [currentChartIndex, setCurrentChartIndex] = useState(0)
  const [currentRecIndex, setCurrentRecIndex] = useState(0)
  const [chartSelected, setChartSelected] = useState<string | null>(null)
  const [chartSubmitted, setChartSubmitted] = useState(false)
  const [recSelected, setRecSelected] = useState<'expand' | 'hold' | 'reduce' | null>(null)
  const [recSubmitted, setRecSubmitted] = useState(false)
  const [chartScore, setChartScore] = useState(0)
  const [recScore, setRecScore] = useState(0)

  const currentChart = chartChallenges[currentChartIndex]
  const currentRec = recommendationChallenges[currentRecIndex]

  const handleChartSelect = (formula: string) => {
    setChartSelected(formula)
    setChartSubmitted(false)
  }

  const handleChartSubmit = () => {
    if (!chartSelected) return
    setChartSubmitted(true)
    if (chartSelected === currentChart.correctFormula) {
      setChartScore(prev => prev + 1)
    }
  }

  const handleChartNext = () => {
    setChartSelected(null)
    setChartSubmitted(false)
    if (currentChartIndex < chartChallenges.length - 1) {
      setCurrentChartIndex(prev => prev + 1)
    } else {
      setCurrentChartIndex(0)
    }
  }

  const handleRecSelect = (value: 'expand' | 'hold' | 'reduce') => {
    setRecSelected(value)
    setRecSubmitted(false)
  }

  const handleRecSubmit = () => {
    if (!recSelected) return
    setRecSubmitted(true)
    if (recSelected === currentRec.correctRecommendation) {
      setRecScore(prev => prev + 1)
    }
  }

  const handleRecNext = () => {
    setRecSelected(null)
    setRecSubmitted(false)
    if (currentRecIndex < recommendationChallenges.length - 1) {
      setCurrentRecIndex(prev => prev + 1)
    } else {
      setCurrentRecIndex(0)
    }
  }

  const chartProgress = ((chartScore) / chartChallenges.length) * 100
  const recProgress = ((recScore) / recommendationChallenges.length) * 100

  return (
    <div className="space-y-8">
      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Chart Linking Practice
          </CardTitle>
          <CardDescription>
            Select the correct formula to link charts to data using structured references
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress: {chartScore}/{chartChallenges.length}</span>
            <span>{Math.round(chartProgress)}%</span>
          </div>
          <Progress value={chartProgress} className="h-2" />
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-blue-900 mb-2">{currentChart.description}</p>
            <p className="text-sm text-blue-700">Data range: <code className="bg-white px-2 py-1 rounded">{currentChart.dataRange}</code></p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {currentChart.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleChartSelect(option.formula)}
                disabled={chartSubmitted}
                className={`p-3 text-left rounded-lg border transition-colors ${
                  chartSubmitted && option.formula === currentChart.correctFormula
                    ? 'bg-green-100 border-green-300'
                    : chartSubmitted && chartSelected === option.formula && option.formula !== currentChart.correctFormula
                    ? 'bg-red-100 border-red-300'
                    : chartSelected === option.formula
                    ? 'bg-blue-100 border-blue-400'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <code className="text-sm">{option.formula}</code>
                <span className="block text-xs text-gray-500 mt-1">{option.label}</span>
              </button>
            ))}
          </div>

          {chartSubmitted && (
            <div className={`p-4 rounded-lg ${
              chartSelected === currentChart.correctFormula ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {chartSelected === currentChart.correctFormula ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <span className={`font-medium ${
                  chartSelected === currentChart.correctFormula ? 'text-green-800' : 'text-red-800'
                }`}>
                  {chartSelected === currentChart.correctFormula ? 'Correct!' : 'Not quite right'}
                </span>
              </div>
              <p className="text-sm text-gray-700">{currentChart.explanation}</p>
            </div>
          )}

          <div className="flex gap-2">
            {!chartSubmitted ? (
              <Button 
                onClick={handleChartSubmit} 
                disabled={!chartSelected}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleChartNext} className="bg-blue-600 hover:bg-blue-700">
                Next Challenge <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Recommendation Builder
          </CardTitle>
          <CardDescription>
            Choose the right business action based on KPI thresholds
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress: {recScore}/{recommendationChallenges.length}</span>
            <span>{Math.round(recProgress)}%</span>
          </div>
          <Progress value={recProgress} className="h-2" />

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{currentRec.scenario}</Badge>
            </div>
            <p className="text-sm text-green-800 mb-2">
              <strong>{currentRec.kpiValues.name}:</strong> {currentRec.kpiValues.value}%
              <span className="text-gray-500"> (threshold: {currentRec.kpiValues.threshold}%)</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {currentRec.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleRecSelect(option.value)}
                disabled={recSubmitted}
                className={`p-3 rounded-lg border transition-colors ${
                  recSubmitted && option.value === currentRec.correctRecommendation
                    ? 'bg-green-100 border-green-300'
                    : recSubmitted && recSelected === option.value && option.value !== currentRec.correctRecommendation
                    ? 'bg-red-100 border-red-300'
                    : recSelected === option.value
                    ? 'bg-green-100 border-green-400'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {option.value === 'expand' && <TrendingUp className="h-4 w-4 text-green-600" />}
                  {option.value === 'hold' && <Target className="h-4 w-4 text-yellow-600" />}
                  {option.value === 'reduce' && <TrendingDown className="h-4 w-4 text-red-600" />}
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          {recSubmitted && (
            <div className={`p-4 rounded-lg ${
              recSelected === currentRec.correctRecommendation ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {recSelected === currentRec.correctRecommendation ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <span className={`font-medium ${
                  recSelected === currentRec.correctRecommendation ? 'text-green-800' : 'text-red-800'
                }`}>
                  {recSelected === currentRec.correctRecommendation ? 'Correct!' : 'Not quite right'}
                </span>
              </div>
              <p className="text-sm text-gray-700">{currentRec.reasoning}</p>
            </div>
          )}

          <div className="flex gap-2">
            {!recSubmitted ? (
              <Button 
                onClick={handleRecSubmit} 
                disabled={!recSelected}
                className="bg-green-600 hover:bg-green-700"
              >
                Submit Recommendation
              </Button>
            ) : (
              <Button onClick={handleRecNext} className="bg-green-600 hover:bg-green-700">
                Next Scenario <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-900">
            <Lightbulb className="h-5 w-5" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent className="text-purple-800 text-sm space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Use <code className="bg-white px-1 rounded">Table[Column]</code> structured references for stable charts</li>
            <li>Charts break when they point to fixed ranges—structured refs auto-expand</li>
            <li>Recommendations must cite specific KPIs and thresholds</li>
            <li>Never make recommendations from hard-coded values—use model outputs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}