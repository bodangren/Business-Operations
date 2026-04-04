"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, HelpCircle, RotateCcw } from "lucide-react"

interface PracticeScenario {
  id: string
  name: string
  beginningUnits: number
  beginningCostPerUnit: number
  purchases: Array<{ units: number; costPerUnit: number }>
  unitsSold: number
}

// Input data only - all correct answers are calculated
const scenarios: PracticeScenario[] = [
  {
    id: "scenario-1",
    name: "Sarah's Client Kits",
    beginningUnits: 12,
    beginningCostPerUnit: 18,
    purchases: [
      { units: 15, costPerUnit: 20 },
      { units: 10, costPerUnit: 22 }
    ],
    unitsSold: 20
  },
  {
    id: "scenario-2",
    name: "Wholesale Office Supplies",
    beginningUnits: 50,
    beginningCostPerUnit: 8,
    purchases: [
      { units: 100, costPerUnit: 9 },
      { units: 75, costPerUnit: 10 }
    ],
    unitsSold: 120
  },
  {
    id: "scenario-3",
    name: "Electronics Inventory",
    beginningUnits: 8,
    beginningCostPerUnit: 150,
    purchases: [
      { units: 20, costPerUnit: 165 },
      { units: 15, costPerUnit: 180 }
    ],
    unitsSold: 25
  }
]

// Helper function to calculate all correct answers from scenario data
function calculateAnswers(scenario: PracticeScenario) {
  // Calculate GAFS
  const beginningValue = scenario.beginningUnits * scenario.beginningCostPerUnit
  const purchaseUnits = scenario.purchases.reduce((sum, p) => sum + p.units, 0)
  const purchaseValue = scenario.purchases.reduce((sum, p) => sum + (p.units * p.costPerUnit), 0)
  
  const gafsUnits = scenario.beginningUnits + purchaseUnits
  const gafsValue = beginningValue + purchaseValue
  
  // Find min and max cost per unit across all layers
  const allCosts = [scenario.beginningCostPerUnit, ...scenario.purchases.map(p => p.costPerUnit)]
  const minCostPerUnit = Math.min(...allCosts)
  const maxCostPerUnit = Math.max(...allCosts)
  
  // COGS range: units sold × min cost to units sold × max cost
  const cogsMin = scenario.unitsSold * minCostPerUnit
  const cogsMax = scenario.unitsSold * maxCostPerUnit
  
  // Ending Inventory range: GAFS - COGS max to GAFS - COGS min
  // (higher COGS = lower ending inventory)
  const endingInventoryMin = gafsValue - cogsMax
  const endingInventoryMax = gafsValue - cogsMin
  
  return {
    gafsUnits,
    gafsValue,
    cogsRange: { min: cogsMin, max: cogsMax },
    endingInventoryRange: { min: endingInventoryMin, max: endingInventoryMax }
  }
}

export default function CostAssignmentPractice() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [step, setStep] = useState<'intro' | 'gafs' | 'cogs' | 'check'>('intro')
  
  // User answers
  const [gafsUnitsAnswer, setGafsUnitsAnswer] = useState('')
  const [gafsValueAnswer, setGafsValueAnswer] = useState('')
  const [cogsAnswer, setCogsAnswer] = useState('')
  const [endingInventoryAnswer, setEndingInventoryAnswer] = useState('')
  
  // Results
  const [gafsResult, setGafsResult] = useState<'correct' | 'incorrect' | null>(null)
  const [cogsResult, setCogsResult] = useState<'correct' | 'incorrect' | null>(null)
  const [finalResult, setFinalResult] = useState<'correct' | 'incorrect' | null>(null)

  const currentScenario = scenarios[currentScenarioIndex]
  const correctAnswers = calculateAnswers(currentScenario)

  const resetScenario = () => {
    setStep('intro')
    setGafsUnitsAnswer('')
    setGafsValueAnswer('')
    setCogsAnswer('')
    setEndingInventoryAnswer('')
    setGafsResult(null)
    setCogsResult(null)
    setFinalResult(null)
  }

  const checkGAFS = () => {
    const unitsCorrect = parseInt(gafsUnitsAnswer) === correctAnswers.gafsUnits
    const valueCorrect = parseInt(gafsValueAnswer) === correctAnswers.gafsValue
    setGafsResult(unitsCorrect && valueCorrect ? 'correct' : 'incorrect')
  }

  const checkCOGS = () => {
    const cogsNum = parseInt(cogsAnswer)
    const isInRange = cogsNum >= correctAnswers.cogsRange.min && 
                       cogsNum <= correctAnswers.cogsRange.max
    setCogsResult(isInRange ? 'correct' : 'incorrect')
  }

  const checkFinal = () => {
    const eiNum = parseInt(endingInventoryAnswer)
    const isInRange = eiNum >= correctAnswers.endingInventoryRange.min && 
                       eiNum <= correctAnswers.endingInventoryRange.max
    setFinalResult(isInRange ? 'correct' : 'incorrect')
  }

  const nextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1)
      resetScenario()
    }
  }

  const _prevScenario = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(prev => prev - 1)
      resetScenario()
    }
  }

  return (
    <div className="space-y-6">
      {/* Scenario Selector */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {scenarios.map((s, i) => (
            <Button
              key={s.id}
              variant={i === currentScenarioIndex ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setCurrentScenarioIndex(i)
                resetScenario()
              }}
              className={i === currentScenarioIndex ? "bg-orange-600 hover:bg-orange-700" : ""}
            >
              {s.name}
            </Button>
          ))}
        </div>
        <span className="text-sm text-slate-500">
          Scenario {currentScenarioIndex + 1} of {scenarios.length}
        </span>
      </div>

      {/* Scenario Data */}
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-slate-900">{currentScenario.name} - Inventory Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-600 font-medium">Beginning Inventory</p>
              <p className="text-lg font-bold text-blue-900">
                {currentScenario.beginningUnits} units @ ${currentScenario.beginningCostPerUnit}
              </p>
              <p className="text-sm text-blue-700">
                = ${currentScenario.beginningUnits * currentScenario.beginningCostPerUnit}
              </p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-600 font-medium">Purchases</p>
              {currentScenario.purchases.map((p, i) => (
                <p key={i} className="text-amber-900">
                  {p.units} units @ ${p.costPerUnit} = ${p.units * p.costPerUnit}
                </p>
              ))}
            </div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-600 font-medium">Units Sold</p>
            <p className="text-lg font-bold text-green-900">{currentScenario.unitsSold} units</p>
          </div>
        </CardContent>
      </Card>

      {/* Step-based Practice */}
      {step === 'intro' && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900">Step 1: Calculate Goods Available for Sale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-orange-800">
              Before you can figure out COGS or Ending Inventory, you need to know the total amount 
              of inventory that was available to sell.
            </p>
            <div className="bg-white p-4 rounded-lg border border-orange-300">
              <p className="font-medium text-orange-900 mb-3">Calculate:</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Total Units Available for Sale:
                  </label>
                  <input
                    type="number"
                    value={gafsUnitsAnswer}
                    onChange={(e) => setGafsUnitsAnswer(e.target.value)}
                    placeholder="?"
                    className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Total Value Available for Sale ($):
                  </label>
                  <input
                    type="number"
                    value={gafsValueAnswer}
                    onChange={(e) => setGafsValueAnswer(e.target.value)}
                    placeholder="?"
                    className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button onClick={checkGAFS} className="bg-orange-600 hover:bg-orange-700">
                Check Answer
              </Button>
              {gafsResult && (
                <div className={`flex items-center gap-2 ${gafsResult === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                  {gafsResult === 'correct' ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Correct!</span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="h-5 w-5" />
                      <span>Not quite. Check your math.</span>
                    </>
                  )}
                </div>
              )}
            </div>
            {gafsResult === 'correct' && (
              <Button onClick={() => setStep('cogs')} className="w-full bg-emerald-600 hover:bg-emerald-700">
                Continue to COGS
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {step === 'cogs' && (
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900">Step 2: Estimate COGS Range</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-800">
              Now you know there were <strong>{correctAnswers.gafsUnits} units</strong> worth 
              <strong>${correctAnswers.gafsValue}</strong> available for sale, and 
              <strong>{currentScenario.unitsSold} units</strong> were sold.
            </p>
            <p className="text-purple-800">
              But here's the puzzle: the units sold could have come from different cost layers. 
              What's the <strong>range of possible COGS values</strong>?
            </p>
            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p className="font-medium text-purple-900 mb-3">Enter your COGS estimate:</p>
              <div className="flex items-center gap-2">
                <span className="text-purple-700">COGS = $</span>
                <input
                  type="number"
                  value={cogsAnswer}
                  onChange={(e) => setCogsAnswer(e.target.value)}
                  placeholder="?"
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>
              <p className="text-sm text-purple-600 mt-2">
                Hint: Think about the lowest and highest possible costs per unit.
              </p>
            </div>
            <div className="flex gap-3">
              <Button onClick={checkCOGS} className="bg-purple-600 hover:bg-purple-700">
                Check Answer
              </Button>
              {cogsResult && (
                <div className={`flex items-center gap-2 ${cogsResult === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                  {cogsResult === 'correct' ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Correct! Any value between ${correctAnswers.cogsRange.min} and ${correctAnswers.cogsRange.max} works.</span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="h-5 w-5" />
                      <span>Not in range. Think about min/max cost per unit.</span>
                    </>
                  )}
                </div>
              )}
            </div>
            {cogsResult === 'correct' && (
              <Button onClick={() => setStep('check')} className="w-full bg-emerald-600 hover:bg-emerald-700">
                Continue to Final Check
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {step === 'check' && (
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-900">Step 3: Calculate Ending Inventory</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-emerald-800">
              Using the formula: <strong>Ending Inventory = Goods Available for Sale - COGS</strong>
            </p>
            <p className="text-emerald-800">
              With GAFS = ${correctAnswers.gafsValue} and your COGS estimate, 
              what's the corresponding Ending Inventory?
            </p>
            <div className="bg-white p-4 rounded-lg border border-emerald-300">
              <p className="font-medium text-emerald-900 mb-3">Calculate Ending Inventory:</p>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700">Ending Inventory = $</span>
                <input
                  type="number"
                  value={endingInventoryAnswer}
                  onChange={(e) => setEndingInventoryAnswer(e.target.value)}
                  placeholder="?"
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button onClick={checkFinal} className="bg-emerald-600 hover:bg-emerald-700">
                Check Answer
              </Button>
              {finalResult && (
                <div className={`flex items-center gap-2 ${finalResult === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                  {finalResult === 'correct' ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Correct! Any value between ${correctAnswers.endingInventoryRange.min} and ${correctAnswers.endingInventoryRange.max} works.</span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="h-5 w-5" />
                      <span>Not in range. Check your calculation.</span>
                    </>
                  )}
                </div>
              )}
            </div>
            {finalResult === 'correct' && (
              <div className="space-y-3">
                <div className="p-4 bg-blue-100 rounded-lg border border-blue-300">
                  <p className="font-medium text-blue-900">Key Insight:</p>
                  <p className="text-blue-800">
                    The same {currentScenario.unitsSold} units sold could produce COGS anywhere from 
                    ${correctAnswers.cogsRange.min} to ${correctAnswers.cogsRange.max}. 
                    That's a difference of ${correctAnswers.cogsRange.max - correctAnswers.cogsRange.min}!
                  </p>
                  <p className="text-blue-700 mt-2">
                    This is why businesses need a consistent method (FIFO, LIFO, etc.) - so they don't 
                    have to guess which costs to assign.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={resetScenario}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                  {currentScenarioIndex < scenarios.length - 1 && (
                    <Button onClick={nextScenario} className="bg-orange-600 hover:bg-orange-700">
                      Next Scenario
                    </Button>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Formula Reminder */}
      <Card className="border-slate-200 bg-slate-50">
        <CardContent className="pt-4">
          <div className="text-center">
            <p className="text-sm text-slate-600 mb-2">Remember the formula:</p>
            <p className="font-mono text-lg text-slate-900">
              Ending Inventory = Beginning Inventory + Purchases - COGS
            </p>
            <p className="text-sm text-slate-600 mt-2">
              or: Ending Inventory = Goods Available for Sale - COGS
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
