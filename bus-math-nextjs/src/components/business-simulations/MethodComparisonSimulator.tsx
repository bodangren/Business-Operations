'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RefreshCw, CheckCircle, XCircle, Lightbulb } from 'lucide-react'

interface PurchaseLot {
  date: string
  sku: string
  qty: number
  unitCost: number
}

interface Scenario {
  id: string
  title: string
  description: string
  purchases: PurchaseLot[]
  unitsSold: number
  correctFIFO: { cogs: number; endingInventory: number }
  correctLIFO: { cogs: number; endingInventory: number }
  correctWeightedAvg: { cogs: number; endingInventory: number }
  hint: string
}

const scenarios: Scenario[] = [
  {
    id: 'scenario-1',
    title: 'Sarah\'s Launch Kits - March',
    description: 'Sarah bought launch kits at three different prices. She sold 15 units. Calculate COGS and Ending Inventory for each method.',
    purchases: [
      { date: 'Mar 1', sku: 'LK-001', qty: 10, unitCost: 18 },
      { date: 'Mar 8', sku: 'LK-001', qty: 20, unitCost: 20 },
      { date: 'Mar 15', sku: 'LK-001', qty: 10, unitCost: 22 },
    ],
    unitsSold: 15,
    correctFIFO: { cogs: 280, endingInventory: 500 },
    correctLIFO: { cogs: 320, endingInventory: 460 },
    correctWeightedAvg: { cogs: 300, endingInventory: 480 },
    hint: 'FIFO: oldest first (10@$18 + 5@$20). LIFO: newest first (10@$22 + 5@$20). Weighted Avg: total cost $800 / 40 units = $20/unit.'
  },
  {
    id: 'scenario-2',
    title: 'TechStart USB Drives - April',
    description: 'TechStart received four shipments of USB drives. They sold 35 units. Calculate COGS and Ending Inventory.',
    purchases: [
      { date: 'Apr 2', sku: 'USB-16', qty: 15, unitCost: 8 },
      { date: 'Apr 9', sku: 'USB-16', qty: 20, unitCost: 10 },
      { date: 'Apr 16', sku: 'USB-16', qty: 10, unitCost: 12 },
      { date: 'Apr 23', sku: 'USB-16', qty: 5, unitCost: 14 },
    ],
    unitsSold: 35,
    correctFIFO: { cogs: 330, endingInventory: 170 },
    correctLIFO: { cogs: 400, endingInventory: 100 },
    correctWeightedAvg: { cogs: 370, endingInventory: 130 },
    hint: 'Total units: 50. Total cost: $500. Weighted avg rate: $10/unit. FIFO: 15@$8 + 20@$10. LIFO: 5@$14 + 10@$12 + 20@$10.'
  },
  {
    id: 'scenario-3',
    title: 'Cafe Supply Co. - Coffee Beans',
    description: 'A cafe bought coffee beans at rising prices. They used 60 kg this month. Calculate COGS and Ending Inventory.',
    purchases: [
      { date: 'May 1', sku: 'CB-1KG', qty: 30, unitCost: 12 },
      { date: 'May 10', sku: 'CB-1KG', qty: 40, unitCost: 14 },
      { date: 'May 20', sku: 'CB-1KG', qty: 20, unitCost: 16 },
    ],
    unitsSold: 60,
    correctFIFO: { cogs: 760, endingInventory: 440 },
    correctLIFO: { cogs: 880, endingInventory: 320 },
    correctWeightedAvg: { cogs: 825, endingInventory: 375 },
    hint: 'Total units: 90. Total cost: $1,240. Weighted avg rate: $1,240/90 = $13.78/unit. FIFO: 30@$12 + 30@$14. LIFO: 20@$16 + 40@$14.'
  }
]

export default function MethodComparisonSimulator() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [fifoCogs, setFifoCogs] = useState('')
  const [fifoEI, setFifoEI] = useState('')
  const [lifoCogs, setLifoCogs] = useState('')
  const [lifoEI, setLifoEI] = useState('')
  const [waCogs, setWaCogs] = useState('')
  const [waEI, setWaEI] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const scenario = scenarios[currentScenarioIndex]

  const checkAnswer = useCallback((userAnswer: string, correctAnswer: number): 'correct' | 'close' | 'wrong' => {
    const num = parseFloat(userAnswer)
    if (isNaN(num)) return 'wrong'
    if (Math.abs(num - correctAnswer) < 1) return 'correct'
    if (Math.abs(num - correctAnswer) < 10) return 'close'
    return 'wrong'
  }, [])

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const handleNext = () => {
    setCurrentScenarioIndex((prev) => (prev + 1) % scenarios.length)
    setFifoCogs('')
    setFifoEI('')
    setLifoCogs('')
    setLifoEI('')
    setWaCogs('')
    setWaEI('')
    setSubmitted(false)
    setShowHint(false)
  }

  const handleReset = () => {
    setFifoCogs('')
    setFifoEI('')
    setLifoCogs('')
    setLifoEI('')
    setWaCogs('')
    setWaEI('')
    setSubmitted(false)
    setShowHint(false)
  }

  const getResultBadge = (userAnswer: string, correctAnswer: number) => {
    if (!submitted) return null
    const result = checkAnswer(userAnswer, correctAnswer)
    if (result === 'correct') {
      return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" /> Correct</Badge>
    }
    if (result === 'close') {
      return <Badge className="bg-yellow-100 text-yellow-800">Close (answer: {correctAnswer})</Badge>
    }
    return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" /> Answer: {correctAnswer}</Badge>
  }

  const totalUnits = scenario.purchases.reduce((sum, p) => sum + p.qty, 0)
  const totalCost = scenario.purchases.reduce((sum, p) => sum + p.qty * p.unitCost, 0)
  const unitsRemaining = totalUnits - scenario.unitsSold

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-purple-200 bg-white">
        <CardHeader>
          <CardTitle className="text-purple-800">{scenario.title}</CardTitle>
          <p className="text-sm text-purple-700">{scenario.description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Purchase Data</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="text-left py-1 px-2">Date</th>
                  <th className="text-left py-1 px-2">SKU</th>
                  <th className="text-right py-1 px-2">Qty</th>
                  <th className="text-right py-1 px-2">Unit Cost</th>
                  <th className="text-right py-1 px-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {scenario.purchases.map((p, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-1 px-2">{p.date}</td>
                    <td className="py-1 px-2">{p.sku}</td>
                    <td className="text-right py-1 px-2">{p.qty}</td>
                    <td className="text-right py-1 px-2">${p.unitCost}</td>
                    <td className="text-right py-1 px-2">${p.qty * p.unitCost}</td>
                  </tr>
                ))}
                <tr className="font-semibold bg-slate-100">
                  <td className="py-1 px-2" colSpan={2}>Totals</td>
                  <td className="text-right py-1 px-2">{totalUnits}</td>
                  <td className="text-right py-1 px-2"></td>
                  <td className="text-right py-1 px-2">${totalCost}</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-slate-600 mt-2">
              Units sold: <strong>{scenario.unitsSold}</strong> | Units remaining: <strong>{unitsRemaining}</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-800">FIFO</h4>
              <div>
                <label className="text-sm text-slate-700">COGS ($)</label>
                <input
                  type="number"
                  value={fifoCogs}
                  onChange={(e) => setFifoCogs(e.target.value)}
                  disabled={submitted}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                  placeholder="Enter COGS"
                />
                {submitted && <div className="mt-1">{getResultBadge(fifoCogs, scenario.correctFIFO.cogs)}</div>}
              </div>
              <div>
                <label className="text-sm text-slate-700">Ending Inventory ($)</label>
                <input
                  type="number"
                  value={fifoEI}
                  onChange={(e) => setFifoEI(e.target.value)}
                  disabled={submitted}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                  placeholder="Enter EI"
                />
                {submitted && <div className="mt-1">{getResultBadge(fifoEI, scenario.correctFIFO.endingInventory)}</div>}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-red-800">LIFO</h4>
              <div>
                <label className="text-sm text-slate-700">COGS ($)</label>
                <input
                  type="number"
                  value={lifoCogs}
                  onChange={(e) => setLifoCogs(e.target.value)}
                  disabled={submitted}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                  placeholder="Enter COGS"
                />
                {submitted && <div className="mt-1">{getResultBadge(lifoCogs, scenario.correctLIFO.cogs)}</div>}
              </div>
              <div>
                <label className="text-sm text-slate-700">Ending Inventory ($)</label>
                <input
                  type="number"
                  value={lifoEI}
                  onChange={(e) => setLifoEI(e.target.value)}
                  disabled={submitted}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                  placeholder="Enter EI"
                />
                {submitted && <div className="mt-1">{getResultBadge(lifoEI, scenario.correctLIFO.endingInventory)}</div>}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-green-800">Weighted Average</h4>
              <div>
                <label className="text-sm text-slate-700">COGS ($)</label>
                <input
                  type="number"
                  value={waCogs}
                  onChange={(e) => setWaCogs(e.target.value)}
                  disabled={submitted}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                  placeholder="Enter COGS"
                />
                {submitted && <div className="mt-1">{getResultBadge(waCogs, scenario.correctWeightedAvg.cogs)}</div>}
              </div>
              <div>
                <label className="text-sm text-slate-700">Ending Inventory ($)</label>
                <input
                  type="number"
                  value={waEI}
                  onChange={(e) => setWaEI(e.target.value)}
                  disabled={submitted}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                  placeholder="Enter EI"
                />
                {submitted && <div className="mt-1">{getResultBadge(waEI, scenario.correctWeightedAvg.endingInventory)}</div>}
              </div>
            </div>
          </div>

          {showHint && (
            <div className="bg-amber-50 p-3 rounded border border-amber-200 text-sm text-amber-900 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{scenario.hint}</span>
            </div>
          )}

          <div className="flex gap-2 flex-wrap">
            {!submitted ? (
              <>
                <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
                  Submit Answers
                </Button>
                <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                  {showHint ? 'Hide' : 'Show'} Hint
                </Button>
              </>
            ) : (
              <>
                <Button onClick={handleNext} variant="outline" className="flex items-center gap-2">
                  Next Scenario <RefreshCw className="w-4 h-4" />
                </Button>
                <Button onClick={handleReset} variant="outline">
                  Retry This Scenario
                </Button>
              </>
            )}
          </div>

          <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm text-blue-900">
            <strong>Bridge to Phase 4:</strong> In the real workbook, you will not type these numbers by hand.
            Instead, you will build formulas that compute COGS and Ending Inventory automatically for each method.
            The logic you just practiced is the same logic your formulas will execute.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
