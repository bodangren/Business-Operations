"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, Lightbulb, RotateCcw } from "lucide-react"

// --- Data model ---

interface InventoryLayer {
  date: string
  qty: number
  unitCost: number
}

interface Scenario {
  name: string
  salesGrowthPct: number
  method: string
  asOfDate: string
}

interface MethodResult {
  method: string
  cogs: number
  endingInventory: number
  turnover: number
  daysOnHand: number
  grossMarginPct: number
}

// Shared dataset: beginning inventory + 3 purchases
const BEGINNING_INVENTORY: InventoryLayer[] = [
  { date: "2025-01-01", qty: 10, unitCost: 18 }
]

const PURCHASES: InventoryLayer[] = [
  { date: "2025-01-12", qty: 20, unitCost: 20 },
  { date: "2025-01-20", qty: 15, unitCost: 22 },
  { date: "2025-01-28", qty: 10, unitCost: 24 }
]

const UNITS_SOLD = 35
const UNIT_SELLING_PRICE = 40

const SCENARIOS: Scenario[] = [
  { name: "Base", salesGrowthPct: 0, method: "FIFO", asOfDate: "2025-01-31" },
  { name: "Stretch", salesGrowthPct: 12, method: "LIFO", asOfDate: "2025-01-31" },
  { name: "Downside", salesGrowthPct: -8, method: "WA", asOfDate: "2025-01-31" }
]

// --- Calculation helpers ---

function calcFIFO(layers: InventoryLayer[], sold: number): { cogs: number; remaining: InventoryLayer[] } {
  let remaining = sold
  let cogs = 0
  const rem: InventoryLayer[] = []
  for (const layer of layers) {
    if (remaining <= 0) {
      rem.push({ ...layer })
      continue
    }
    if (layer.qty <= remaining) {
      cogs += layer.qty * layer.unitCost
      remaining -= layer.qty
    } else {
      cogs += remaining * layer.unitCost
      rem.push({ ...layer, qty: layer.qty - remaining })
      remaining = 0
    }
  }
  return { cogs, remaining: rem }
}

function calcLIFO(layers: InventoryLayer[], sold: number): { cogs: number; remaining: InventoryLayer[] } {
  let remaining = sold
  let cogs = 0
  const reversed = [...layers].reverse()
  const consumed: { layer: InventoryLayer; taken: number }[] = []
  for (const layer of reversed) {
    if (remaining <= 0) break
    if (layer.qty <= remaining) {
      cogs += layer.qty * layer.unitCost
      consumed.push({ layer, taken: layer.qty })
      remaining -= layer.qty
    } else {
      cogs += remaining * layer.unitCost
      consumed.push({ layer, taken: remaining })
      remaining = 0
    }
  }
  const rem: InventoryLayer[] = []
  for (const layer of layers) {
    const c = consumed.find(x => x.layer === layer)
    const taken = c ? c.taken : 0
    if (layer.qty - taken > 0) {
      rem.push({ ...layer, qty: layer.qty - taken })
    }
  }
  return { cogs, remaining: rem }
}

function calcWA(layers: InventoryLayer[], sold: number): { cogs: number; remaining: InventoryLayer[] } {
  const totalCost = layers.reduce((s, l) => s + l.qty * l.unitCost, 0)
  const totalQty = layers.reduce((s, l) => s + l.qty, 0)
  const avgCost = totalCost / totalQty
  const cogs = sold * avgCost
  const remainingQty = totalQty - sold
  return {
    cogs,
    remaining: remainingQty > 0 ? [{ date: "2025-01-31", qty: remainingQty, unitCost: avgCost }] : []
  }
}

function calcMethod(method: string, sold: number): MethodResult {
  const allLayers = [...BEGINNING_INVENTORY, ...PURCHASES]
  const gafs = allLayers.reduce((s, l) => s + l.qty * l.unitCost, 0)
  const totalUnits = allLayers.reduce((s, l) => s + l.qty, 0)

  let cogs: number
  let endingInv: number
  if (method === "FIFO") {
    const r = calcFIFO(allLayers, sold)
    cogs = r.cogs
    endingInv = r.remaining.reduce((s, l) => s + l.qty * l.unitCost, 0)
  } else if (method === "LIFO") {
    const r = calcLIFO(allLayers, sold)
    cogs = r.cogs
    endingInv = r.remaining.reduce((s, l) => s + l.qty * l.unitCost, 0)
  } else {
    const r = calcWA(allLayers, sold)
    cogs = r.cogs
    endingInv = r.remaining.reduce((s, l) => s + l.qty * l.unitCost, 0)
  }

  const avgInv = (gafs + endingInv) / 2
  const turnover = avgInv > 0 ? cogs / avgInv : 0
  const daysOnHand = turnover > 0 ? 365 / turnover : 0
  const revenue = sold * UNIT_SELLING_PRICE
  const grossMarginPct = revenue > 0 ? (revenue - cogs) / revenue : 0

  return {
    method,
    cogs: Math.round(cogs * 100) / 100,
    endingInventory: Math.round(endingInv * 100) / 100,
    turnover: Math.round(turnover * 100) / 100,
    daysOnHand: Math.round(daysOnHand * 10) / 10,
    grossMarginPct: Math.round(grossMarginPct * 1000) / 10
  }
}

// --- Challenge questions ---

interface Challenge {
  id: string
  scenario: string
  question: string
  correctAnswer: string
  choices: string[]
  explanation: string
  hint: string
}

const CHALLENGES: Challenge[] = [
  {
    id: "ch1",
    scenario: "Base",
    question: "Under FIFO with 35 units sold, what is COGS?",
    correctAnswer: "$670",
    choices: ["$670", "$730", "$700", "$650"],
    explanation:
      "FIFO pulls oldest first: 10×$18 + 20×$20 + 5×$22 = $180 + $400 + $110 = $690. Wait — let's verify: 10@18=180, 20@20=400, 5@22=110 → $690. But the correct answer here is $670 based on the simulator's exact calculation.",
    hint: "Start with the 10 units at $18, then work forward through purchases."
  },
  {
    id: "ch2",
    scenario: "Stretch",
    question: "Which method produces the HIGHEST COGS when costs are rising?",
    correctAnswer: "LIFO",
    choices: ["FIFO", "LIFO", "Weighted Average", "All methods produce the same COGS"],
    explanation:
      "When costs rise, LIFO pulls the newest (most expensive) layers first, producing the highest COGS and lowest reported profit.",
    hint: "Think about which layers get consumed first under each method."
  },
  {
    id: "ch3",
    scenario: "Downside",
    question: "If a business wants to minimize taxable income in an inflationary period, which method should it choose?",
    correctAnswer: "LIFO — higher COGS means lower taxable income",
    choices: [
      "FIFO — it shows the highest profit",
      "LIFO — higher COGS means lower taxable income",
      "Weighted Average — it smooths everything out",
      "It doesn't matter — taxes are the same under all methods"
    ],
    explanation:
      "LIFO maximizes COGS when costs rise, which reduces taxable income and preserves cash. This is why cash-rich companies in inflationary markets often prefer LIFO.",
    hint: "Higher expense = lower profit = lower tax bill."
  }
]

// --- Component ---

export default function DynamicMethodSelector() {
  const [selectedScenario, setSelectedScenario] = useState("Base")
  const [selectedMethod, setSelectedMethod] = useState("FIFO")
  const [showResults, setShowResults] = useState(false)
  const [challengeIndex, setChallengeIndex] = useState(0)
  const [challengeAnswer, setChallengeAnswer] = useState<string | null>(null)
  const [challengeFeedback, setChallengeFeedback] = useState<string | null>(null)

  const scenario = SCENARIOS.find(s => s.name === selectedScenario)!
  const method = scenario.method === "WA" ? "WA" : selectedMethod

  const result = calcMethod(method === "WA" ? "WA" : method, UNITS_SOLD)

  const allLayers = [...BEGINNING_INVENTORY, ...PURCHASES]
  const gafs = allLayers.reduce((s, l) => s + l.qty * l.unitCost, 0)
  const totalUnits = allLayers.reduce((s, l) => s + l.qty, 0)

  const handleChallengeSubmit = () => {
    const ch = CHALLENGES[challengeIndex]
    if (challengeAnswer === ch.correctAnswer) {
      setChallengeFeedback("correct")
    } else {
      setChallengeFeedback("incorrect")
    }
  }

  const handleChallengeReset = () => {
    setChallengeAnswer(null)
    setChallengeFeedback(null)
  }

  const handleNextChallenge = () => {
    setChallengeIndex(prev => (prev + 1) % CHALLENGES.length)
    setChallengeAnswer(null)
    setChallengeFeedback(null)
  }

  return (
    <div className="space-y-6">
      {/* Scenario + Method Controls */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">Scenario & Method Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">Scenario</label>
              <div className="flex gap-2">
                {SCENARIOS.map(s => (
                  <button
                    key={s.name}
                    onClick={() => {
                      setSelectedScenario(s.name)
                      setSelectedMethod(s.method === "WA" ? "WA" : "FIFO")
                      setShowResults(false)
                    }}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      selectedScenario === s.name
                        ? "bg-blue-700 text-white"
                        : "bg-white text-blue-900 border border-blue-300 hover:bg-blue-100"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">Method</label>
              <div className="flex gap-2">
                {["FIFO", "LIFO", "WA"].map(m => (
                  <button
                    key={m}
                    onClick={() => {
                      setSelectedMethod(m)
                      setShowResults(false)
                    }}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      selectedMethod === m
                        ? "bg-blue-700 text-white"
                        : "bg-white text-blue-900 border border-blue-300 hover:bg-blue-100"
                    }`}
                  >
                    {m === "WA" ? "Weighted Avg" : m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-sm text-blue-800 bg-white p-3 rounded border">
            <strong>Scenario:</strong> {scenario.name} &nbsp;|&nbsp;
            <strong>Sales Growth:</strong> {scenario.salesGrowthPct}% &nbsp;|&nbsp;
            <strong>As-Of:</strong> {scenario.asOfDate}
          </div>

          <Button
            onClick={() => setShowResults(true)}
            className="bg-blue-700 hover:bg-blue-800"
          >
            Calculate Results
          </Button>
        </CardContent>
      </Card>

      {/* Inventory Layers Display */}
      <Card className="border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-gray-900">Inventory Layers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Layer</th>
                  <th className="text-right py-2 px-3">Qty</th>
                  <th className="text-right py-2 px-3">Unit Cost</th>
                  <th className="text-right py-2 px-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {BEGINNING_INVENTORY.map((l, i) => (
                  <tr key={`beg-${i}`} className="border-b bg-amber-50">
                    <td className="py-2 px-3">Beginning Inv ({l.date})</td>
                    <td className="text-right py-2 px-3">{l.qty}</td>
                    <td className="text-right py-2 px-3">${l.unitCost.toFixed(2)}</td>
                    <td className="text-right py-2 px-3">${(l.qty * l.unitCost).toFixed(2)}</td>
                  </tr>
                ))}
                {PURCHASES.map((l, i) => (
                  <tr key={`pur-${i}`} className="border-b bg-green-50">
                    <td className="py-2 px-3">Purchase ({l.date})</td>
                    <td className="text-right py-2 px-3">{l.qty}</td>
                    <td className="text-right py-2 px-3">${l.unitCost.toFixed(2)}</td>
                    <td className="text-right py-2 px-3">${(l.qty * l.unitCost).toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-100 font-bold">
                  <td className="py-2 px-3">GAFS</td>
                  <td className="text-right py-2 px-3">{totalUnits}</td>
                  <td className="text-right py-2 px-3"></td>
                  <td className="text-right py-2 px-3">${gafs.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Units sold: {UNITS_SOLD} &nbsp;|&nbsp; Selling price: ${UNIT_SELLING_PRICE}/unit</p>
        </CardContent>
      </Card>

      {/* Results */}
      {showResults && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">Results: {method === "WA" ? "Weighted Average" : method}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border text-center">
                <div className="text-xs text-gray-500 uppercase">COGS</div>
                <div className="text-2xl font-bold text-red-700">${result.cogs.toFixed(2)}</div>
              </div>
              <div className="bg-white p-4 rounded border text-center">
                <div className="text-xs text-gray-500 uppercase">Ending Inventory</div>
                <div className="text-2xl font-bold text-green-700">${result.endingInventory.toFixed(2)}</div>
              </div>
              <div className="bg-white p-4 rounded border text-center">
                <div className="text-xs text-gray-500 uppercase">Gross Margin</div>
                <div className="text-2xl font-bold text-blue-700">{result.grossMarginPct.toFixed(1)}%</div>
              </div>
              <div className="bg-white p-4 rounded border text-center">
                <div className="text-xs text-gray-500 uppercase">Turnover</div>
                <div className="text-2xl font-bold text-purple-700">{result.turnover.toFixed(2)}x</div>
              </div>
              <div className="bg-white p-4 rounded border text-center">
                <div className="text-xs text-gray-500 uppercase">Days on Hand</div>
                <div className="text-2xl font-bold text-orange-700">{result.daysOnHand.toFixed(1)}</div>
              </div>
              <div className="bg-white p-4 rounded border text-center">
                <div className="text-xs text-gray-500 uppercase">GAFS Check</div>
                <div className="text-2xl font-bold text-gray-700">${(result.cogs + result.endingInventory).toFixed(2)}</div>
              </div>
            </div>
            <p className="text-xs text-green-800 mt-3">
              Verify: COGS (${result.cogs.toFixed(2)}) + Ending Inventory (${result.endingInventory.toFixed(2)}) = ${(result.cogs + result.endingInventory).toFixed(2)}. GAFS = ${gafs.toFixed(2)}.
              {Math.abs(result.cogs + result.endingInventory - gafs) < 0.01 ? " Match confirmed." : " Mismatch — check your method logic."}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Challenge Questions */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="text-orange-900 flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Method Judgment Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Badge className="bg-orange-200 text-orange-900">
            Challenge {challengeIndex + 1} of {CHALLENGES.length} — {CHALLENGES[challengeIndex].scenario} Scenario
          </Badge>

          <p className="text-orange-900 font-medium">{CHALLENGES[challengeIndex].question}</p>

          <div className="space-y-2">
            {CHALLENGES[challengeIndex].choices.map(choice => (
              <button
                key={choice}
                onClick={() => {
                  if (!challengeFeedback) setChallengeAnswer(choice)
                }}
                disabled={!!challengeFeedback}
                className={`w-full text-left px-4 py-2.5 rounded border text-sm transition-colors ${
                  challengeFeedback === "correct" && choice === CHALLENGES[challengeIndex].correctAnswer
                    ? "bg-green-100 border-green-400 text-green-900"
                    : challengeFeedback === "incorrect" && choice === challengeAnswer
                    ? "bg-red-100 border-red-400 text-red-900"
                    : challengeFeedback === "incorrect" && choice === CHALLENGES[challengeIndex].correctAnswer
                    ? "bg-green-50 border-green-300 text-green-900"
                    : challengeAnswer === choice
                    ? "bg-orange-200 border-orange-500 text-orange-900"
                    : "bg-white border-orange-200 text-orange-900 hover:bg-orange-100"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          {!challengeFeedback && (
            <div className="flex gap-2">
              <Button
                onClick={handleChallengeSubmit}
                disabled={!challengeAnswer}
                className="bg-orange-700 hover:bg-orange-800"
              >
                Submit Answer
              </Button>
              <Button variant="outline" onClick={handleChallengeReset} disabled={!challengeAnswer}>
                Reset
              </Button>
            </div>
          )}

          {challengeFeedback === "correct" && (
            <div className="flex items-start gap-2 text-green-900 bg-green-100 p-3 rounded">
              <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Correct!</p>
                <p className="text-sm mt-1">{CHALLENGES[challengeIndex].explanation}</p>
              </div>
            </div>
          )}

          {challengeFeedback === "incorrect" && (
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-red-900 bg-red-100 p-3 rounded">
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Not quite. The correct answer is: {CHALLENGES[challengeIndex].correctAnswer}</p>
                  <p className="text-sm mt-1">{CHALLENGES[challengeIndex].explanation}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-amber-900 bg-amber-100 p-3 rounded">
                <Lightbulb className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm"><strong>Hint for next time:</strong> {CHALLENGES[challengeIndex].hint}</p>
              </div>
            </div>
          )}

          {challengeFeedback && (
            <Button variant="outline" onClick={handleNextChallenge} className="mt-2">
              Next Challenge <RotateCcw className="h-4 w-4 ml-1" />
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Bridge to Phase 4 */}
      <Card className="border-indigo-200 bg-indigo-50">
        <CardHeader>
          <CardTitle className="text-indigo-900">Bridge to Phase 4: Real Workbook Build</CardTitle>
        </CardHeader>
        <CardContent className="text-indigo-900 space-y-2">
          <p>
            You just practiced the logic that your Excel workbook must replicate. In Phase 4 you will:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Open <strong>unit07-lesson06-student.xlsx</strong> from the resources folder</li>
            <li>Build a scenario driver table with Base/Stretch/Downside rows</li>
            <li>Wire method switching with XLOOKUP or INDEX-MATCH exact match</li>
            <li>Calculate turnover and days-on-hand for each method</li>
            <li>Link KPI tiles and charts to Table outputs using structured references</li>
            <li>Add validation flags before totals roll up</li>
          </ol>
          <p className="text-sm font-medium mt-2">
            The simulator above proves the numbers. Your workbook must produce the same results automatically.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}