"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, FileSpreadsheet, ArrowRight, RefreshCw } from "lucide-react"

// Generate random scenario with ending units between 20-50
function generateScenario() {
  // Random ending units between 20-50
  const endingUnits = Math.floor(Math.random() * 31) + 20// 20-50
  
  // Random number of purchases (3-4 layers)
  const numPurchases = Math.floor(Math.random() * 2) + 3// 3 or 4
  
  // We want total units = ending + sold, where sold >= 20
  const unitsSold = Math.floor(Math.random() * 31) + 25// 25-55 units sold
  const totalUnits = endingUnits + unitsSold
  
  // Distribute units across purchases
  const purchases: { date: string; units: number; costPerUnit: number }[] = []
  let unitsAssigned = 0
  let baseCost = Math.floor(Math.random() * 20) + 30// Base cost $30-50
  
  for (let i = 0; i < numPurchases; i++) {
    const isLast = i === numPurchases - 1
    const unitsForThis = isLast 
      ? totalUnits - unitsAssigned 
      : Math.floor(Math.random() * Math.min(30, totalUnits - unitsAssigned - (numPurchases - i - 1) * 5)) + 10
    
    const day = (i * 8) + 3// Days 3, 11, 19, 27
    purchases.push({
      date: `Jan ${day}`,
      units: unitsForThis,
      costPerUnit: baseCost + (i * Math.floor(Math.random() * 5) + 3)// Rising costs
    })
    
    unitsAssigned += unitsForThis
    baseCost += Math.floor(Math.random() * 4) + 2// Costs rise by $2-5 each purchase
  }
  
  // Random selling price (1.5x to 2x the highest cost)
  const highestCost = Math.max(...purchases.map(p => p.costPerUnit))
  const sellingPrice = Math.ceil(highestCost * (1.6 + Math.random() * 0.4))
  
  return {
    product: "Software Training Kits",
    context: "Sarah's software installation and training packages for her premium clients",
    purchases,
    unitsSold,
    sellingPrice,
    endingUnits,
    totalUnits
  }
}

// Calculate FIFO COGS
function calculateFifoCogs(purchases: { units: number; costPerUnit: number }[], unitsSold: number): number {
  let remaining = unitsSold
  let cogs = 0
  
  for (const purchase of purchases) {
    if (remaining <= 0) break
    const take = Math.min(remaining, purchase.units)
    cogs += take * purchase.costPerUnit
    remaining -= take
  }
  
  return cogs
}

// Calculate LIFO COGS
function calculateLifoCogs(purchases: { units: number; costPerUnit: number }[], unitsSold: number): number {
  let remaining = unitsSold
  let cogs = 0
  
  for (let i = purchases.length - 1; i >= 0; i--) {
    if (remaining <= 0) break
    const take = Math.min(remaining, purchases[i].units)
    cogs += take * purchases[i].costPerUnit
    remaining -= take
  }
  
  return cogs
}

// Calculate gross margin percentage
function calculateGrossMargin(grossProfit: number, revenue: number): number {
  return revenue > 0 ? (grossProfit / revenue) * 100 : 0
}

// Calculate markup percentage
function calculateMarkup(grossProfit: number, cogs: number): number {
  return cogs > 0 ? (grossProfit / cogs) * 100 : 0
}

export default function MethodRecommendationStudio() {
  const [scenario, setScenario] = useState<ReturnType<typeof generateScenario> | null>(null)
  
  // Student inputs
  const [fifoCogs, setFifoCogs] = useState("")
  const [fifoEnding, setFifoEnding] = useState("")
  const [fifoGrossProfit, setFifoGrossProfit] = useState("")
  const [fifoMargin, setFifoMargin] = useState("")
  const [fifoMarkup, setFifoMarkup] = useState("")
  
  const [lifoCogs, setLifoCogs] = useState("")
  const [lifoEnding, setLifoEnding] = useState("")
  const [lifoGrossProfit, setLifoGrossProfit] = useState("")
  const [lifoMargin, setLifoMargin] = useState("")
  const [lifoMarkup, setLifoMarkup] = useState("")
  
  // Check states
  const [fifoCogsChecked, setFifoCogsChecked] = useState(false)
  const [fifoEndingChecked, setFifoEndingChecked] = useState(false)
  const [fifoGrossProfitChecked, setFifoGrossProfitChecked] = useState(false)
  const [fifoMarginChecked, setFifoMarginChecked] = useState(false)
  const [fifoMarkupChecked, setFifoMarkupChecked] = useState(false)
  
  const [lifoCogsChecked, setLifoCogsChecked] = useState(false)
  const [lifoEndingChecked, setLifoEndingChecked] = useState(false)
  const [lifoGrossProfitChecked, setLifoGrossProfitChecked] = useState(false)
  const [lifoMarginChecked, setLifoMarginChecked] = useState(false)
  const [lifoMarkupChecked, setLifoMarkupChecked] = useState(false)
  
  // Recommendation
  const [recommendation, setRecommendation] = useState<"fifo" | "lifo" | "">("")
  const [reasoning, setReasoning] = useState("")
  const [submitted, setSubmitted] = useState(false)
  
  // Generate scenario on mount
  useEffect(() => {
    setScenario(generateScenario())
  }, [])
  
  // Calculate correct answers using arithmetic
  const correctAnswers = useMemo(() => {
    if (!scenario) return null
    
    const revenue = scenario.unitsSold * scenario.sellingPrice
    const totalCost = scenario.purchases.reduce((sum, p) => sum + p.units * p.costPerUnit, 0)
    
    const fifoCogsVal = calculateFifoCogs(scenario.purchases, scenario.unitsSold)
    const lifoCogsVal = calculateLifoCogs(scenario.purchases, scenario.unitsSold)
    
    const fifoEndingVal = totalCost - fifoCogsVal
    const lifoEndingVal = totalCost - lifoCogsVal
    
    const fifoGrossProfitVal = revenue - fifoCogsVal
    const lifoGrossProfitVal = revenue - lifoCogsVal
    
    const fifoMarginVal = calculateGrossMargin(fifoGrossProfitVal, revenue)
    const lifoMarginVal = calculateGrossMargin(lifoGrossProfitVal, revenue)
    
    // Markup % = Gross Profit / COGS × 100
    const fifoMarkupVal = calculateMarkup(fifoGrossProfitVal, fifoCogsVal)
    const lifoMarkupVal = calculateMarkup(lifoGrossProfitVal, lifoCogsVal)
    
    return {
      revenue,
      totalCost,
      fifoCogs: fifoCogsVal,
      lifoCogs: lifoCogsVal,
      fifoEnding: fifoEndingVal,
      lifoEnding: lifoEndingVal,
      fifoGrossProfit: fifoGrossProfitVal,
      lifoGrossProfit: lifoGrossProfitVal,
      fifoMargin: fifoMarginVal,
      lifoMargin: lifoMarginVal,
      fifoMarkup: fifoMarkupVal,
      lifoMarkup: lifoMarkupVal
    }
  }, [scenario])
  
  const parseNum = (val: string) => parseInt(val) || 0
  const parseFloatVal = (val: string) => parseFloat(val) || 0
  
  // Validation functions using arithmetic
  const fifoCogsCorrect = correctAnswers ? parseNum(fifoCogs) === correctAnswers.fifoCogs : false
  const fifoEndingCorrect = correctAnswers ? parseNum(fifoEnding) === correctAnswers.fifoEnding : false
  const fifoGrossProfitCorrect = correctAnswers ? parseNum(fifoGrossProfit) === correctAnswers.fifoGrossProfit : false
  const fifoMarginCorrect = correctAnswers ? Math.abs(parseFloatVal(fifoMargin) - correctAnswers.fifoMargin) < 0.5 : false
  const fifoMarkupCorrect = correctAnswers ? Math.abs(parseFloatVal(fifoMarkup) - correctAnswers.fifoMarkup) < 0.5 : false
  
  const lifoCogsCorrect = correctAnswers ? parseNum(lifoCogs) === correctAnswers.lifoCogs : false
  const lifoEndingCorrect = correctAnswers ? parseNum(lifoEnding) === correctAnswers.lifoEnding : false
  const lifoGrossProfitCorrect = correctAnswers ? parseNum(lifoGrossProfit) === correctAnswers.lifoGrossProfit : false
  const lifoMarginCorrect = correctAnswers ? Math.abs(parseFloatVal(lifoMargin) - correctAnswers.lifoMargin) < 0.5 : false
  const lifoMarkupCorrect = correctAnswers ? Math.abs(parseFloatVal(lifoMarkup) - correctAnswers.lifoMarkup) < 0.5 : false
  
  const allCalcsCorrect = fifoCogsCorrect && fifoEndingCorrect && fifoGrossProfitCorrect && fifoMarginCorrect && fifoMarkupCorrect &&
    lifoCogsCorrect && lifoEndingCorrect && lifoGrossProfitCorrect && lifoMarginCorrect && lifoMarkupCorrect
  
  const resetAll = () => {
    const newScenario = generateScenario()
    setScenario(newScenario)
    
    setFifoCogs(""); setFifoEnding(""); setFifoGrossProfit(""); setFifoMargin(""); setFifoMarkup("")
    setLifoCogs(""); setLifoEnding(""); setLifoGrossProfit(""); setLifoMargin(""); setLifoMarkup("")
    
    setFifoCogsChecked(false); setFifoEndingChecked(false); setFifoGrossProfitChecked(false); setFifoMarginChecked(false); setFifoMarkupChecked(false)
    setLifoCogsChecked(false); setLifoEndingChecked(false); setLifoGrossProfitChecked(false); setLifoMarginChecked(false); setLifoMarkupChecked(false)
    
    setRecommendation("")
    setReasoning("")
    setSubmitted(false)
  }
  
  if (!scenario || !correctAnswers) return null
  
  return (
    <div className="space-y-6">
      {/* Header- Accounting Document Style */}
      <div className="border-b-2 border-slate-800 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Inventory Valuation Worksheet</h2>
            <p className="text-sm text-slate-600 mt-1">{scenario.product} — {scenario.context}</p>
          </div>
          <div className="text-right text-sm text-slate-500">
            <p>Period: January</p>
            <p>Units Sold: {scenario.unitsSold} @ ${scenario.sellingPrice}/unit</p>
            <p>Ending Units: {scenario.endingUnits}</p>
          </div>
        </div>
      </div>

      {/* Source Data Section */}
      <div className="border border-slate-300 rounded">
        <div className="bg-slate-100 px-4 py-2 border-b border-slate-300 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">Purchase Record</h3>
          <Button variant="outline" size="sm" onClick={resetAll} className="gap-1 text-xs">
            <RefreshCw className="h-3 w-3" />
            New Scenario
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left py-2 px-4 font-medium text-slate-600">Date</th>
                <th className="text-right py-2 px-4 font-medium text-slate-600">Units</th>
                <th className="text-right py-2 px-4 font-medium text-slate-600">Cost/Unit</th>
                <th className="text-right py-2 px-4 font-medium text-slate-600 border-l border-slate-200">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {scenario.purchases.map((p, idx) => (
                <tr key={idx} className="border-b border-slate-100">
                  <td className="py-2 px-4">{p.date}</td>
                  <td className="text-right py-2 px-4">{p.units}</td>
                  <td className="text-right py-2 px-4">${p.costPerUnit}</td>
                  <td className="text-right py-2 px-4 border-l border-slate-200">${p.units * p.costPerUnit}</td>
                </tr>
              ))}
              <tr className="bg-slate-50 font-semibold">
                <td className="py-2 px-4">Total</td>
                <td className="text-right py-2 px-4">{scenario.totalUnits}</td>
                <td className="text-right py-2 px-4">—</td>
                <td className="text-right py-2 px-4 border-l border-slate-200">${correctAnswers.totalCost}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Figures Box */}
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="border border-slate-300 p-3">
          <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">Total Revenue</div>
          <div className="text-lg font-bold text-slate-900">${correctAnswers.revenue}</div>
          <div className="text-xs text-slate-500">{scenario.unitsSold} units × ${scenario.sellingPrice}</div>
        </div>
        <div className="border border-slate-300 p-3">
          <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">Units Available</div>
          <div className="text-lg font-bold text-slate-900">{scenario.totalUnits}</div>
          <div className="text-xs text-slate-500">Beginning + Purchases</div>
        </div>
        <div className="border border-slate-300 p-3">
          <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">Ending Units</div>
          <div className="text-lg font-bold text-slate-900">{scenario.endingUnits}</div>
          <div className="text-xs text-slate-500">{scenario.totalUnits} − {scenario.unitsSold} sold</div>
        </div>
      </div>

      {/* FIFO Calculation */}
      <div className="border-2 border-slate-400">
        <div className="bg-slate-800 text-white px-4 py-2">
          <h3 className="font-semibold">FIFO (First-In, First-Out)</h3>
        </div>
        <div className="p-4 space-y-4">
          <div className="text-sm text-slate-600">
            <strong>Method:</strong> Assign oldest costs to COGS first. Work from earliest purchase to latest until you reach {scenario.unitsSold} units.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">COGS</span>
                {fifoCogsChecked && !fifoCogsCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {fifoCogsChecked && fifoCogsCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500 text-sm">$</span>
                <Input
                  type="number"
                  value={fifoCogs}
                  onChange={(e) => setFifoCogs(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <Button variant="outline" size="sm" onClick={() => setFifoCogsChecked(true)}>✓</Button>
              </div>
            </div>
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Ending Inv.</span>
                {fifoEndingChecked && !fifoEndingCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {fifoEndingChecked && fifoEndingCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500 text-sm">$</span>
                <Input
                  type="number"
                  value={fifoEnding}
                  onChange={(e) => setFifoEnding(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <Button variant="outline" size="sm" onClick={() => setFifoEndingChecked(true)}>✓</Button>
              </div>
            </div>
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Gross Profit</span>
                {fifoGrossProfitChecked && !fifoGrossProfitCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {fifoGrossProfitChecked && fifoGrossProfitCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500 text-sm">$</span>
                <Input
                  type="number"
                  value={fifoGrossProfit}
                  onChange={(e) => setFifoGrossProfit(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <Button variant="outline" size="sm" onClick={() => setFifoGrossProfitChecked(true)}>✓</Button>
              </div>
              <p className="text-xs text-slate-500 mt-1">Rev − COGS</p>
            </div>
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Margin %</span>
                {fifoMarginChecked && !fifoMarginCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {fifoMarginChecked && fifoMarginCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  step="0.1"
                  value={fifoMargin}
                  onChange={(e) => setFifoMargin(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <span className="text-slate-500 text-sm">%</span>
                <Button variant="outline" size="sm" onClick={() => setFifoMarginChecked(true)}>✓</Button>
              </div>
              <p className="text-xs text-slate-500 mt-1">GP ÷ Rev × 100</p>
            </div>
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Markup %</span>
                {fifoMarkupChecked && !fifoMarkupCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {fifoMarkupChecked && fifoMarkupCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  step="0.1"
                  value={fifoMarkup}
                  onChange={(e) => setFifoMarkup(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <span className="text-slate-500 text-sm">%</span>
                <Button variant="outline" size="sm" onClick={() => setFifoMarkupChecked(true)}>✓</Button>
              </div>
              <p className="text-xs text-slate-500 mt-1">GP ÷ COGS × 100</p>
            </div>
          </div>
        </div>
      </div>

      {/* LIFO Calculation */}
      <div className="border-2 border-slate-400">
        <div className="bg-slate-800 text-white px-4 py-2">
          <h3 className="font-semibold">LIFO (Last-In, First-Out)</h3>
        </div>
        <div className="p-4 space-y-4">
          <div className="text-sm text-slate-600">
            <strong>Method:</strong> Assign newest costs to COGS first. Work from latest purchase to earliest until you reach {scenario.unitsSold} units.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">COGS</span>
                {lifoCogsChecked && !lifoCogsCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {lifoCogsChecked && lifoCogsCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500 text-sm">$</span>
                <Input
                  type="number"
                  value={lifoCogs}
                  onChange={(e) => setLifoCogs(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <Button variant="outline" size="sm" onClick={() => setLifoCogsChecked(true)}>✓</Button>
              </div>
            </div>
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Ending Inv.</span>
                {lifoEndingChecked && !lifoEndingCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {lifoEndingChecked && lifoEndingCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500 text-sm">$</span>
                <Input
                  type="number"
                  value={lifoEnding}
                  onChange={(e) => setLifoEnding(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <Button variant="outline" size="sm" onClick={() => setLifoEndingChecked(true)}>✓</Button>
              </div>
            </div>
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Gross Profit</span>
                {lifoGrossProfitChecked && !lifoGrossProfitCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {lifoGrossProfitChecked && lifoGrossProfitCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500 text-sm">$</span>
                <Input
                  type="number"
                  value={lifoGrossProfit}
                  onChange={(e) => setLifoGrossProfit(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <Button variant="outline" size="sm" onClick={() => setLifoGrossProfitChecked(true)}>✓</Button>
              </div>
              <p className="text-xs text-slate-500 mt-1">Rev − COGS</p>
            </div>
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Margin %</span>
                {lifoMarginChecked && !lifoMarginCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {lifoMarginChecked && lifoMarginCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  step="0.1"
                  value={lifoMargin}
                  onChange={(e) => setLifoMargin(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <span className="text-slate-500 text-sm">%</span>
                <Button variant="outline" size="sm" onClick={() => setLifoMarginChecked(true)}>✓</Button>
              </div>
              <p className="text-xs text-slate-500 mt-1">GP ÷ Rev × 100</p>
            </div>
            <div className="border border-slate-200 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Markup %</span>
                {lifoMarkupChecked && !lifoMarkupCorrect && (
                  <span className="text-xs text-red-600 font-medium">✗</span>
                )}
                {lifoMarkupChecked && lifoMarkupCorrect && (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />✓
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  step="0.1"
                  value={lifoMarkup}
                  onChange={(e) => setLifoMarkup(e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <span className="text-slate-500 text-sm">%</span>
                <Button variant="outline" size="sm" onClick={() => setLifoMarkupChecked(true)}>✓</Button>
              </div>
              <p className="text-xs text-slate-500 mt-1">GP ÷ COGS × 100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Summary - Only show when all calculations are correct */}
      {allCalcsCorrect && (
        <div className="border-2 border-slate-400">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-300">
            <h3 className="font-semibold text-slate-800">Method Comparison Summary</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 px-4 font-medium text-slate-600">Measure</th>
                  <th className="text-right py-2 px-4 font-medium text-slate-600">FIFO</th>
                  <th className="text-right py-2 px-4 font-medium text-slate-600">LIFO</th>
                  <th className="text-right py-2 px-4 font-medium text-slate-600 border-l border-slate-200">Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-4">Cost of Goods Sold</td>
                  <td className="text-right py-2 px-4">${correctAnswers.fifoCogs}</td>
                  <td className="text-right py-2 px-4">${correctAnswers.lifoCogs}</td>
                  <td className="text-right py-2 px-4 border-l border-slate-200">${correctAnswers.lifoCogs - correctAnswers.fifoCogs}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-4">Ending Inventory</td>
                  <td className="text-right py-2 px-4">${correctAnswers.fifoEnding}</td>
                  <td className="text-right py-2 px-4">${correctAnswers.lifoEnding}</td>
                  <td className="text-right py-2 px-4 border-l border-slate-200">${correctAnswers.fifoEnding - correctAnswers.lifoEnding}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-4">Gross Profit</td>
                  <td className="text-right py-2 px-4 font-semibold">${correctAnswers.fifoGrossProfit}</td>
                  <td className="text-right py-2 px-4 font-semibold">${correctAnswers.lifoGrossProfit}</td>
                  <td className="text-right py-2 px-4 border-l border-slate-200 font-semibold">${correctAnswers.fifoGrossProfit - correctAnswers.lifoGrossProfit}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-4">Gross Margin %</td>
                  <td className="text-right py-2 px-4">{correctAnswers.fifoMargin.toFixed(1)}%</td>
                  <td className="text-right py-2 px-4">{correctAnswers.lifoMargin.toFixed(1)}%</td>
                  <td className="text-right py-2 px-4 border-l border-slate-200">{(correctAnswers.fifoMargin - correctAnswers.lifoMargin).toFixed(1)}%</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="py-2 px-4 font-medium">Markup %</td>
                  <td className="text-right py-2 px-4 font-semibold">{correctAnswers.fifoMarkup.toFixed(1)}%</td>
                  <td className="text-right py-2 px-4 font-semibold">{correctAnswers.lifoMarkup.toFixed(1)}%</td>
                  <td className="text-right py-2 px-4 border-l border-slate-200 font-semibold">{(correctAnswers.fifoMarkup - correctAnswers.lifoMarkup).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 px-4 py-3 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              <strong>Key Insight:</strong> In a rising-cost environment, FIFO shows <strong>higher gross profit</strong>, <strong>higher margin %</strong>, and <strong>higher markup %</strong>, making the business appear more profitable. LIFO shows <strong>lower values</strong> for all three metrics, which reduces taxable income.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              <strong>Margin %</strong> = Gross Profit ÷ Revenue | <strong>Markup %</strong> = Gross Profit ÷ COGS
            </p>
          </div>
        </div>
      )}

      {/* Recommendation Section */}
      {allCalcsCorrect && !submitted && (
        <div className="border-2 border-slate-400">
          <div className="bg-slate-800 text-white px-4 py-2">
            <h3 className="font-semibold flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4" />
              Business Recommendation
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="text-sm text-slate-700">
              <p className="mb-2">
                <strong>Scenario:</strong> Sarah is preparing her financial statements for a potential investor presentation. 
                The investor wants to see strong profitability and healthy inventory values to assess the business's growth potential.
              </p>
              <p className="text-slate-600">
                Which inventory method would you recommend Sarah use for this investor presentation? Explain your reasoning.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="font-medium text-slate-700 text-sm">Select Method:</div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="method"
                    value="fifo"
                    checked={recommendation === "fifo"}
                    onChange={(e) => setRecommendation(e.target.value as "fifo")}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">FIFO</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="method"
                    value="lifo"
                    checked={recommendation === "lifo"}
                    onChange={(e) => setRecommendation(e.target.value as "lifo")}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">LIFO</span>
                </label>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-medium text-slate-700 text-sm">Explain your reasoning:</label>
              <textarea
                value={reasoning}
                onChange={(e) => setReasoning(e.target.value)}
                placeholder="Write your explanation here..."
                className="w-full min-h-[100px] p-3 border border-slate-300 rounded text-sm"
                rows={4}
              />
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={() => setSubmitted(true)}
                disabled={!recommendation || reasoning.length < 20}
                className="gap-2"
              >
                Submit Recommendation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={resetAll}>
                Reset Worksheet
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Submitted Confirmation */}
      {submitted && (
        <div className="border-2 border-green-300 bg-green-50 p-4 rounded">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900">Worksheet Complete</h4>
              <p className="text-sm text-green-800 mt-1">
                You recommended <strong>{recommendation.toUpperCase()}</strong> for Sarah's investor presentation.
              </p>
              <p className="text-sm text-green-700 mt-2">
                {recommendation === "fifo" && `FIFO shows higher gross profit ($${correctAnswers.fifoGrossProfit}) and higher gross margin (${correctAnswers.fifoMargin.toFixed(1)}%), making the business appear more valuable to investors.`}

                {recommendation === "lifo" && `LIFO shows lower gross profit ($${correctAnswers.lifoGrossProfit}) and lower gross margin (${correctAnswers.lifoMargin.toFixed(1)}%), which reduces taxable income and better matches current costs with current revenues.`}
              </p>
              <div className="mt-3">
                <Button variant="outline" size="sm" onClick={resetAll}>
                  New Scenario
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}