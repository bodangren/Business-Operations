"use client"

import { useState, useCallback, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, Lightbulb, AlertTriangle, Package, Calculator, TrendingUp, BookOpen } from "lucide-react"

// Pre-defined scenarios that produce clean averages
const SCENARIOS = [
  { 
    product: "Flour", 
    beg: { units: 300, price: 0.50 }, 
    p1: { units: 400, price: 0.55 }, 
    p2: { units: 300, price: 0.60 } 
  },
  { 
    product: "Sugar", 
    beg: { units: 200, price: 0.40 }, 
    p1: { units: 500, price: 0.44 }, 
    p2: { units: 300, price: 0.48 } 
  },
  { 
    product: "Rice", 
    beg: { units: 400, price: 0.25 }, 
    p1: { units: 400, price: 0.30 }, 
    p2: { units: 200, price: 0.35 } 
  },
  { 
    product: "Oats", 
    beg: { units: 250, price: 0.80 }, 
    p1: { units: 350, price: 0.88 }, 
    p2: { units: 400, price: 0.92 } 
  },
  { 
    product: "Cornmeal", 
    beg: { units: 150, price: 1.20 }, 
    p1: { units: 300, price: 1.28 }, 
    p2: { units: 250, price: 1.32 } 
  },
  { 
    product: "Barley", 
    beg: { units: 500, price: 0.30 }, 
    p1: { units: 300, price: 0.36 }, 
    p2: { units: 200, price: 0.42 } 
  },
]

interface Layer {
  name: string
  units: number
  price: number
  total: number
  revealed: boolean
}

interface ScenarioState {
  product: string
  layers: Layer[]
  totalUnits: number
  totalCost: number
  avgCost: number
  unitsSold: number
  unitsRemaining: number
  cogs: number
  endingInventory: number
}

const generateScenario = (): ScenarioState => {
  const idx = Math.floor(Math.random() * SCENARIOS.length)
  const s = SCENARIOS[idx]
  
  const begTotal = s.beg.units * s.beg.price
  const p1Total = s.p1.units * s.p1.price
  const p2Total = s.p2.units * s.p2.price
  
  const totalUnits = s.beg.units + s.p1.units + s.p2.units
  const totalCost = begTotal + p1Total + p2Total
  const rawAvg = totalCost / totalUnits
  const avgCost = Math.round(rawAvg * 100) / 100
  
  // Sell 50-70% of available units, rounded to nearest 10
  const minSold = Math.ceil(totalUnits * 0.50)
  const maxSold = Math.floor(totalUnits * 0.70)
  const unitsSold = Math.round(((minSold + maxSold) / 2) / 10) * 10
  
  const unitsRemaining = totalUnits - unitsSold
  const cogs = unitsSold * avgCost
  const endingInventory = unitsRemaining * avgCost
  
  return {
    product: s.product,
    layers: [
      { name: "Beginning Inventory", units: s.beg.units, price: s.beg.price, total: begTotal, revealed: false },
      { name: "Purchase 1", units: s.p1.units, price: s.p1.price, total: p1Total, revealed: false },
      { name: "Purchase 2", units: s.p2.units, price: s.p2.price, total: p2Total, revealed: false },
    ],
    totalUnits,
    totalCost,
    avgCost,
    unitsSold,
    unitsRemaining,
    cogs,
    endingInventory,
  }
}

export default function WeightedAvgPractice() {
  const [scenario, setScenario] = useState<ScenarioState | null>(null)
  const [step, setStep] = useState(0)
  const [layers, setLayers] = useState<Layer[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  // Initialize scenario on mount
  useEffect(() => {
    const newScenario = generateScenario()
    setScenario(newScenario)
    setLayers(newScenario.layers)
    setStep(0)
    setAnswers({})
    setChecked({})
  }, [])

  const resetWithNewNumbers = useCallback(() => {
    const newScenario = generateScenario()
    setScenario(newScenario)
    setLayers(newScenario.layers.map(l => ({ ...l, revealed: false })))
    setStep(0)
    setAnswers({})
    setChecked({})
  }, [])

  const revealLayer = (index: number) => {
    if (!scenario) return
    const newLayers = [...layers]
    newLayers[index].revealed = true
    setLayers(newLayers)
  }

  const allLayersRevealed = layers.every(l => l.revealed)
  const revealedCount = layers.filter(l => l.revealed).length

  const checkAnswer = (key: string, expected: number) => {
    const userAnswer = parseFloat(answers[key] || "")
    if (isNaN(userAnswer)) return false
    // Allow small rounding differences
    return Math.abs(userAnswer - expected) < 0.5
  }

  if (!scenario) return null

  const steps = [
    { title: "Prediction", description: "Which method fits pooled inventory?" },
    { title: "Build the Pool", description: "Reveal each purchase layer" },
    { title: "Average Cost", description: "Calculate weighted average" },
    { title: "Calculate COGS", description: "Units sold × Average cost" },
    { title: "Ending Inventory", description: "Units remaining × Average cost" },
    { title: "Verify", description: "Check the balance" },
  ]

  return (
    <div className="space-y-6">
      {/* Step Navigation */}
      <Card className="border-slate-200 bg-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    i === step ? "bg-purple-600 text-white ring-2 ring-purple-300" :
                    i < step ? "bg-green-500 text-white" :
                    "bg-slate-200 text-slate-600"
                  }`}>
                    {i < step ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-8 h-1 ${i < step ? "bg-green-500" : "bg-slate-200"}`} />
                  )}
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={resetWithNewNumbers}>
              <RotateCcw className="h-4 w-4 mr-2" />
              New Numbers
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{steps[step].title}</h3>
              <p className="text-slate-600">{steps[step].description}</p>
            </div>
            <Badge className="bg-purple-100 text-purple-800">
              {scenario.product}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Step 0: Prediction */}
      {step === 0 && (
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <div className="space-y-4 flex-1">
                <h4 className="font-semibold text-purple-900 text-lg">Before We Start...</h4>
                <p className="text-purple-800">
                  When inventory items are <strong>identical and get mixed together</strong>, you can't 
                  tell which unit came from which purchase. Think about grain in a silo, gasoline in a tank, 
                  or nails in a bin.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="text-purple-900 font-medium mb-3">
                    Which inventory method works best when items are physically identical 
                    and can't be tracked individually?
                  </p>
                  <div className="space-y-2">
                    {["Specific Identification", "FIFO", "LIFO", "Weighted Average"].map((method) => (
                      <Button
                        key={method}
                        variant={answers.prediction === method ? "default" : "outline"}
                        className={`w-full justify-start ${
                          answers.prediction === method 
                            ? method === "Weighted Average" 
                              ? "bg-green-600 hover:bg-green-700" 
                              : "bg-red-500 hover:bg-red-600"
                            : ""
                        }`}
                        onClick={() => setAnswers(prev => ({ ...prev, prediction: method }))}
                      >
                        {method}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {answers.prediction === "Weighted Average" && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900">Correct!</p>
                        <p className="text-green-700 text-sm mt-1">
                          When items like grain, flour, or gasoline get mixed together in storage, 
                          you can't track which unit came from which purchase. Weighted Average 
                          blends all costs into one average price per unit.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {answers.prediction && answers.prediction !== "Weighted Average" && (
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-900">Not quite.</p>
                        <p className="text-red-700 text-sm mt-1">
                          The correct answer is <strong>Weighted Average</strong>. When items are 
                          identical and mixed, you can't track individual units or separate layers. 
                          All costs pool together into one average.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 1: Build the Pool */}
      {step === 1 && (
        <div className="space-y-6">
          {/* Introduction */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-900 text-lg">The Weighted Average Approach</h4>
                  <p className="text-blue-800">
                    Unlike FIFO and LIFO (which assume layer order) or Specific Identification (which 
                    tracks exact items), <strong>Weighted Average pools all purchases together</strong>.
                  </p>
                  <p className="text-blue-800">
                    You don't track which units came from which delivery. Instead, you calculate 
                    <strong> ONE average cost per unit</strong> and use that same rate for everything.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-900 font-medium mb-2">The Process:</p>
                    <ol className="text-blue-800 text-sm space-y-1">
                      <li><strong>Step 1:</strong> Pool all purchases — add up total units and total cost</li>
                      <li><strong>Step 2:</strong> Divide total cost by total units — this is your average cost</li>
                      <li><strong>Step 3:</strong> Use that same average for COGS and Ending Inventory</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Click to Reveal */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-slate-600" />
                Click Each Layer to Add It to the Pool
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                The wholesale supplier has made three purchases of {scenario.product.toLowerCase()} at 
                different prices. Click each layer to reveal the details and add it to your pool.
              </p>
              
              {/* Layer Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {layers.map((layer, index) => (
                  <div
                    key={index}
                    onClick={() => !layer.revealed && revealLayer(index)}
                    className={`p-5 rounded-lg border-2 transition-all cursor-pointer ${
                      layer.revealed 
                        ? "bg-white border-purple-400 shadow-sm" 
                        : "bg-slate-100 border-slate-300 hover:border-purple-400 hover:shadow-md"
                    }`}
                  >
                    {layer.revealed ? (
                      <>
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-purple-100 text-purple-800">
                            {layer.name}
                          </Badge>
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Units:</span>
                            <span className="font-medium text-slate-900">{layer.units.toLocaleString()} {scenario.product.toLowerCase()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Price:</span>
                            <span className="font-medium text-slate-900">${layer.price.toFixed(2)}/unit</span>
                          </div>
                          <div className="pt-2 border-t border-slate-200">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Total:</span>
                              <span className="font-bold text-purple-600 text-lg">${layer.total.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Badge className="bg-slate-200 text-slate-600 mb-3">
                          Click to Reveal
                        </Badge>
                        <p className="text-slate-700 font-medium">{layer.name}</p>
                        <p className="text-slate-400 text-sm mt-1">?? units × $??/unit</p>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Running Pool Summary */}
              <Card className="border-slate-200 bg-slate-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Your Pool So Far</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-slate-600 border-b">
                          <th className="text-left py-2">Layer</th>
                          <th className="text-right py-2">Units</th>
                          <th className="text-right py-2">Price</th>
                          <th className="text-right py-2">Total Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {layers.map((layer, index) => (
                          <tr key={index} className={`border-b ${layer.revealed ? "" : "text-slate-400"}`}>
                            <td className="py-2">{layer.name}</td>
                            <td className="text-right py-2 font-mono">
                              {layer.revealed ? `${layer.units.toLocaleString()} ${scenario.product.toLowerCase()}` : "???"}
                            </td>
                            <td className="text-right py-2 font-mono">
                              {layer.revealed ? `$${layer.price.toFixed(2)}` : "$??"}
                            </td>
                            <td className="text-right py-2 font-mono font-medium">
                              {layer.revealed ? `$${layer.total.toLocaleString()}` : "$??"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      {allLayersRevealed && (
                        <tfoot>
                          <tr className="font-bold text-purple-900">
                            <td className="py-2">Goods Available for Sale</td>
                            <td className="text-right py-2 font-mono">{scenario.totalUnits.toLocaleString()} {scenario.product.toLowerCase()}</td>
                            <td className="text-right py-2 font-mono">—</td>
                            <td className="text-right py-2 font-mono">${scenario.totalCost.toLocaleString()}</td>
                          </tr>
                        </tfoot>
                      )}
                    </table>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                      <div 
                        className="bg-purple-600 h-3 rounded-full transition-all"
                        style={{ width: `${(revealedCount / 3) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-slate-600">{revealedCount} of 3 layers revealed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Swift Check */}
              {allLayersRevealed && (
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-blue-900">Swift Check: Verify Your Totals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 mb-4">
                      Before moving on, make sure you calculated the totals correctly. Add up the units and costs 
                      from all three layers.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-blue-700">Total Units Available:</label>
                        <div className="flex gap-2 mt-2">
                          <Input
                            type="number"
                            value={answers.totalUnits || ""}
                            onChange={(e) => setAnswers(prev => ({ ...prev, totalUnits: e.target.value }))}
                            placeholder="?"
                            className={`flex-1 ${checked.totalUnits !== undefined ? (checked.totalUnits ? "border-green-500 bg-green-50" : "border-red-500") : ""}`}
                          />
                          <span className="flex items-center text-blue-800 font-medium">{scenario.product.toLowerCase()}</span>
                        </div>
                        {checked.totalUnits !== undefined && (
                          checked.totalUnits 
                            ? <p className="text-green-600 text-sm mt-1 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Correct!</p>
                            : <p className="text-red-600 text-sm mt-1 flex items-center gap-1"><XCircle className="h-4 w-4" /> Try {scenario.totalUnits.toLocaleString()}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-blue-700">Total Cost Available:</label>
                        <div className="flex gap-2 mt-2">
                          <span className="flex items-center text-blue-800 font-medium">$</span>
                          <Input
                            type="number"
                            value={answers.totalCost || ""}
                            onChange={(e) => setAnswers(prev => ({ ...prev, totalCost: e.target.value }))}
                            placeholder="?"
                            className={`flex-1 ${checked.totalCost !== undefined ? (checked.totalCost ? "border-green-500 bg-green-50" : "border-red-500") : ""}`}
                          />
                        </div>
                        {checked.totalCost !== undefined && (
                          checked.totalCost 
                            ? <p className="text-green-600 text-sm mt-1 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Correct!</p>
                            : <p className="text-red-600 text-sm mt-1 flex items-center gap-1"><XCircle className="h-4 w-4" /> Try ${scenario.totalCost.toLocaleString()}</p>
                        )}
                      </div>
                    </div>
                    <Button 
                      onClick={() => {
                        setChecked(prev => ({
                          ...prev,
                          totalUnits: checkAnswer("totalUnits", scenario.totalUnits),
                          totalCost: checkAnswer("totalCost", scenario.totalCost)
                        }))
                      }}
                      className="mt-4 bg-blue-600 hover:bg-blue-700"
                    >
                      Check My Answers
                    </Button>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 2: Calculate Average */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Introduction */}
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Calculator className="h-6 w-6 text-amber-600" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-amber-900 text-lg">Step 2: Find the Average Cost</h4>
                  <p className="text-amber-800">
                    Now that you have the <strong>total units</strong> and <strong>total cost</strong>, 
                    divide to find the single average cost per unit.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-amber-200">
                    <p className="text-amber-900 font-medium mb-2">The Weighted Average Formula:</p>
                    <div className="bg-amber-50 p-3 rounded font-mono text-center text-lg">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-purple-600">Total Cost</span>
                        <span className="text-amber-500">÷</span>
                        <span className="text-purple-600">Total Units</span>
                        <span className="text-amber-500">=</span>
                        <span className="text-green-600">Average Cost per Unit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calculation */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle>Calculate the Average Cost</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Using your totals from the previous step, divide the total cost by the total units. 
                Round to <strong>2 decimal places</strong> if needed.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-slate-900">
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-purple-600">${scenario.totalCost.toLocaleString()}</div>
                      <span className="text-slate-400">÷</span>
                      <div className="text-purple-600">{scenario.totalUnits.toLocaleString()} {scenario.product.toLowerCase()}</div>
                    </div>
                    <div className="text-slate-400 my-2">=</div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-slate-600">$</span>
                      <Input
                        type="number"
                        step="0.01"
                        value={answers.avgCost || ""}
                        onChange={(e) => setAnswers(prev => ({ ...prev, avgCost: e.target.value }))}
                        placeholder="0.00"
                        className={`w-32 text-center text-2xl ${checked.avgCost !== undefined ? (checked.avgCost ? "border-green-500 bg-green-50" : "border-red-500") : ""}`}
                      />
                      <span className="text-slate-600">/ {scenario.product.toLowerCase().slice(0, -1)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {checked.avgCost !== undefined && (
                <div className={`p-4 rounded-lg border ${checked.avgCost ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                  {checked.avgCost ? (
                    <div className="space-y-2">
                      <p className="text-green-900 font-medium">
                        <CheckCircle2 className="h-5 w-5 inline mr-2" />
                        Correct! ${scenario.totalCost.toLocaleString()} ÷ {scenario.totalUnits.toLocaleString()} = 
                        <strong> ${scenario.avgCost.toFixed(2)}/{scenario.product.toLowerCase().slice(0, -1)}</strong>
                      </p>
                      <p className="text-green-700 text-sm">
                        This single rate will be used for <strong>both</strong> COGS and Ending Inventory.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-red-900 font-medium">
                        <XCircle className="h-5 w-5 inline mr-2" />
                        Not quite. Let's work through it:
                      </p>
                      <p className="text-red-700 text-sm">
                        ${scenario.totalCost.toLocaleString()} ÷ {scenario.totalUnits.toLocaleString()} = ${scenario.avgCost.toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <Button onClick={() => setChecked(prev => ({ ...prev, avgCost: checkAnswer("avgCost", scenario.avgCost) }))} className="bg-purple-600 hover:bg-purple-700">
                Check Answer
              </Button>

              {/* Common Mistake */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-900">⚠️ Common Mistake: Don't Average the Prices!</p>
                      <div className="mt-2 text-red-800 text-sm space-y-2">
                        <p className="line-through">
                          ❌ WRONG: ({layers[0].price.toFixed(2)} + {layers[1].price.toFixed(2)} + {layers[2].price.toFixed(2)}) ÷ 3 
                          = {((layers[0].price + layers[1].price + layers[2].price) / 3).toFixed(3)}
                        </p>
                        <p className="font-medium">
                          ✓ RIGHT: Total Cost ÷ Total Units = ${scenario.totalCost.toLocaleString()} ÷ {scenario.totalUnits.toLocaleString()} 
                          = ${scenario.avgCost.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-red-700 text-sm mt-2">
                        <strong>Why?</strong> Each layer had different quantities. The {layers[1].units}-unit purchase 
                        should count more than the {layers[0].units}-unit beginning inventory. That's why we 
                        divide by <em>total cost</em>, not by the number of prices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 3: Calculate COGS */}
      {step === 3 && (
        <div className="space-y-6">
          {/* Introduction */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-900 text-lg">Step 3: Calculate Cost of Goods Sold</h4>
                  <p className="text-blue-800">
                    The business sold <strong>{scenario.unitsSold.toLocaleString()} {scenario.product.toLowerCase()}</strong> this period.
                    With Weighted Average, you use the <strong>same rate</strong> for all units sold — no layer tracking needed.
                  </p>
                  <p className="text-blue-800">
                    This is the key difference from FIFO and LIFO. You don't ask "which layer sold first?" 
                    You just multiply units sold by the average cost.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calculation */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle>COGS Calculation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="text-center space-y-3">
                  <div className="text-slate-600">Units Sold × Average Cost = COGS</div>
                  <div className="text-2xl font-bold text-slate-900">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-purple-600">{scenario.unitsSold.toLocaleString()} {scenario.product.toLowerCase()}</span>
                      <span className="text-slate-400">×</span>
                      <span className="text-purple-600">${scenario.avgCost.toFixed(2)}/{scenario.product.toLowerCase().slice(0, -1)}</span>
                      <span className="text-slate-400">=</span>
                      <span className="text-slate-600">$</span>
                      <Input
                        type="number"
                        value={answers.cogs || ""}
                        onChange={(e) => setAnswers(prev => ({ ...prev, cogs: e.target.value }))}
                        placeholder="?"
                        className={`w-28 text-center ${checked.cogs !== undefined ? (checked.cogs ? "border-green-500 bg-green-50" : "border-red-500") : ""}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {checked.cogs !== undefined && (
                <div className={`p-4 rounded-lg border ${checked.cogs ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                  {checked.cogs ? (
                    <p className="text-green-900">
                      <CheckCircle2 className="h-5 w-5 inline mr-2" />
                      Correct! {scenario.unitsSold.toLocaleString()} × ${scenario.avgCost.toFixed(2)} = 
                      <strong> ${scenario.cogs.toFixed(2)}</strong>
                    </p>
                  ) : (
                    <div>
                      <p className="text-red-900">
                        <XCircle className="h-5 w-5 inline mr-2" />
                        Not quite. COGS = ${scenario.cogs.toFixed(2)}
                      </p>
                      <p className="text-red-700 text-sm mt-1">
                        {scenario.unitsSold.toLocaleString()} × ${scenario.avgCost.toFixed(2)} = ${scenario.cogs.toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <Button onClick={() => setChecked(prev => ({ ...prev, cogs: checkAnswer("cogs", scenario.cogs) }))} className="bg-purple-600 hover:bg-purple-700">
                Check Answer
              </Button>

              {/* Compare to FIFO/LIFO */}
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <p className="font-medium text-purple-900 mb-2">Compare to FIFO and LIFO:</p>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• <strong>FIFO</strong> would pull from oldest (cheapest) layers first → lower COGS, higher profit</li>
                    <li>• <strong>LIFO</strong> would pull from newest (most expensive) layers first → higher COGS, lower profit</li>
                    <li>• <strong>Weighted Average</strong> treats all units the same → middle COGS, middle profit</li>
                  </ul>
                  <p className="text-purple-700 text-sm mt-2">
                    That's why Weighted Average is often called the "middle ground" — it doesn't favor 
                    either extreme of the cost spectrum.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 4: Ending Inventory */}
      {step === 4 && (
        <div className="space-y-6">
          {/* Introduction */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-900 text-lg">Step 4: Calculate Ending Inventory</h4>
                  <p className="text-blue-800">
                    What's left on the shelf? Use the <strong>same average cost</strong> for the remaining units.
                  </p>
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <p className="text-blue-800 text-sm">
                      <strong>Hint:</strong> Goods Available for Sale ({scenario.totalUnits.toLocaleString()} {scenario.product.toLowerCase()}) 
                      minus Units Sold ({scenario.unitsSold.toLocaleString()} {scenario.product.toLowerCase()}) = Units Remaining
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calculation */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle>Two Answers Needed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Units Remaining:</label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={answers.unitsRemaining || ""}
                      onChange={(e) => setAnswers(prev => ({ ...prev, unitsRemaining: e.target.value }))}
                      placeholder="?"
                      className={`flex-1 ${checked.unitsRemaining !== undefined ? (checked.unitsRemaining ? "border-green-500 bg-green-50" : "border-red-500") : ""}`}
                    />
                    <span className="flex items-center text-slate-600 font-medium">{scenario.product.toLowerCase()}</span>
                  </div>
                  {checked.unitsRemaining !== undefined && (
                    checked.unitsRemaining 
                      ? <p className="text-green-600 text-sm mt-1 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Correct</p>
                      : <p className="text-red-600 text-sm mt-1 flex items-center gap-1"><XCircle className="h-4 w-4" /> Try {scenario.unitsRemaining.toLocaleString()}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Ending Inventory Value:</label>
                  <div className="flex gap-2">
                    <span className="flex items-center text-slate-600 font-medium">$</span>
                    <Input
                      type="number"
                      value={answers.endingInventory || ""}
                      onChange={(e) => setAnswers(prev => ({ ...prev, endingInventory: e.target.value }))}
                      placeholder="?"
                      className={`flex-1 ${checked.endingInventory !== undefined ? (checked.endingInventory ? "border-green-500 bg-green-50" : "border-red-500") : ""}`}
                    />
                  </div>
                  {checked.endingInventory !== undefined && (
                    checked.endingInventory 
                      ? <p className="text-green-600 text-sm mt-1 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Correct</p>
                      : <p className="text-red-600 text-sm mt-1 flex items-center gap-1"><XCircle className="h-4 w-4" /> Try ${scenario.endingInventory.toFixed(2)}</p>
                  )}
                </div>
              </div>

              <Button 
                onClick={() => {
                  setChecked(prev => ({
                    ...prev,
                    unitsRemaining: parseInt(answers.unitsRemaining || "0") === scenario.unitsRemaining,
                    endingInventory: Math.abs(parseFloat(answers.endingInventory || "0") - scenario.endingInventory) < 1
                  }))
                }}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Check Both Answers
              </Button>

              {checked.unitsRemaining && checked.endingInventory && (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-4">
                    <p className="font-medium text-green-900 mb-2">
                      <CheckCircle2 className="h-5 w-5 inline mr-2" />
                      Weighted Average Complete!
                    </p>
                    <p className="text-green-700 text-sm mb-3">
                      Same rate (${scenario.avgCost.toFixed(2)}) for both COGS and Ending Inventory. No layer tracking needed!
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white p-3 rounded-lg border border-green-200">
                        <p className="text-green-600 text-sm">Goods Available</p>
                        <p className="font-bold text-green-900 text-lg">${scenario.totalCost.toLocaleString()}</p>
                        <p className="text-xs text-green-700">{scenario.totalUnits.toLocaleString()} {scenario.product.toLowerCase()}</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-200">
                        <p className="text-green-600 text-sm">COGS</p>
                        <p className="font-bold text-green-900 text-lg">${scenario.cogs.toFixed(2)}</p>
                        <p className="text-xs text-green-700">{scenario.unitsSold.toLocaleString()} {scenario.product.toLowerCase()} sold</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-200">
                        <p className="text-green-600 text-sm">Ending Inventory</p>
                        <p className="font-bold text-green-900 text-lg">${scenario.endingInventory.toFixed(2)}</p>
                        <p className="text-xs text-green-700">{scenario.unitsRemaining.toLocaleString()} {scenario.product.toLowerCase()} remaining</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 5: Verify */}
      {step === 5 && (
        <div className="space-y-6">
          {/* Introduction */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-900 text-lg">Step 5: Verify the Balance</h4>
                  <p className="text-blue-800">
                    The accounting equation must balance: <strong>COGS + Ending Inventory = Goods Available for Sale</strong>.
                    If your numbers don't match, something is off.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle>Check Your Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Add your COGS and Ending Inventory. The sum should equal Goods Available for Sale.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="flex items-center justify-center gap-4 text-lg text-slate-700">
                  <div className="text-red-600 font-medium">${scenario.cogs.toFixed(2)}</div>
                  <span className="text-slate-400">+</span>
                  <div className="text-purple-600 font-medium">${scenario.endingInventory.toFixed(2)}</div>
                  <span className="text-slate-400">=</span>
                  <span className="font-bold">$</span>
                  <Input
                    type="number"
                    value={answers.verification || ""}
                    onChange={(e) => setAnswers(prev => ({ ...prev, verification: e.target.value }))}
                    placeholder="?"
                    className={`w-28 ${checked.verification !== undefined ? (checked.verification ? "border-green-500 bg-green-50" : "border-red-500") : ""}`}
                  />
                </div>
              </div>

              {checked.verification !== undefined && (
                <div className={`p-4 rounded-lg border ${checked.verification ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                  {checked.verification ? (
                    <div className="space-y-3">
                      <p className="text-green-900 font-medium">
                        <CheckCircle2 className="h-5 w-5 inline mr-2" />
                        Perfect! The equation balances.
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                          <p className="text-xs text-green-600">Goods Available</p>
                          <p className="font-bold text-green-900">${scenario.totalCost.toLocaleString()}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                          <p className="text-xs text-green-600">COGS</p>
                          <p className="font-bold text-green-900">${scenario.cogs.toFixed(2)}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                          <p className="text-xs text-green-600">Ending Inventory</p>
                          <p className="font-bold text-green-900">${scenario.endingInventory.toFixed(2)}</p>
                        </div>
                      </div>
                      <p className="text-green-700 text-sm">
                        ${(scenario.cogs + scenario.endingInventory).toFixed(2)} = ${scenario.totalCost.toLocaleString()} ✓
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-red-900">
                        <XCircle className="h-5 w-5 inline mr-2" />
                        Check your math.
                      </p>
                      <p className="text-red-700 text-sm mt-1">
                        ${scenario.cogs.toFixed(2)} + ${scenario.endingInventory.toFixed(2)} = ${(scenario.cogs + scenario.endingInventory).toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <Button 
                onClick={() => setChecked(prev => ({ ...prev, verification: checkAnswer("verification", scenario.cogs + scenario.endingInventory) }))} 
                className="bg-purple-600 hover:bg-purple-700"
              >
                Check
              </Button>

              {/* Summary */}
              {checked.verification && (
                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="pt-4">
                    <p className="font-medium text-purple-900 mb-3">Weighted Average Summary</p>
                    <ol className="text-purple-800 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-purple-200 text-purple-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                        <span>Pool all purchases → Total units + Total cost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-purple-200 text-purple-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                        <span>Divide total cost by total units → Weighted average cost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-purple-200 text-purple-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                        <span>Units sold × Average cost → COGS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-purple-200 text-purple-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                        <span>Units remaining × Average cost → Ending Inventory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-purple-200 text-purple-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                        <span>Verify: COGS + Ending Inventory = Goods Available</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0}>
          Previous
        </Button>
        <div className="flex gap-2">
          {step === steps.length - 1 && checked.verification && (
            <Button variant="outline" onClick={resetWithNewNumbers}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Try New Numbers
            </Button>
          )}
          <Button 
            onClick={() => step < steps.length - 1 && setStep(step + 1)}
            disabled={step === steps.length - 1}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {step < steps.length - 1 && <ChevronRight className="h-4 w-4 mr-2" />}
            {step === steps.length - 1 ? "Complete" : "Next Step"}
          </Button>
        </div>
      </div>
    </div>
  )
}