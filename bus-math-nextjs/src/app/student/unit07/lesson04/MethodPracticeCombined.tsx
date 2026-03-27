"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, XCircle, RotateCcw, Tag, Calculator, Package, Building } from "lucide-react"

// Specific Identification scenario
const SPEC_ID_SCENARIO = {
  business: "Premier Auto Sales",
  product: "Vehicles",
  inventory: [
    { id: "VIN-001", name: "2024 Sedan", cost: 28500 },
    { id: "VIN-002", name: "2024 SUV", cost: 35200 },
    { id: "VIN-003", name: "2023 Truck", cost: 31800 },
    { id: "VIN-004", name: "2024 Sedan", cost: 29100 },
    { id: "VIN-005", name: "2023 SUV", cost: 33900 },
  ],
  sales: [
    { customer: "Alex Rivera", vin: "VIN-001", soldAt: 32500 },
    { customer: "Jordan Kim", vin: "VIN-003", soldAt: 36000 },
    { customer: "Morgan Chen", vin: "VIN-005", soldAt: 38500 },
  ]
}

// Weighted Average scenarios (randomized)
const WEIGHTED_AVG_SCENARIOS = [
  { product: "Cooking Oil", unit: "gallons", beg: { units: 200, price: 3.20 }, p1: { units: 300, price: 3.35 }, p2: { units: 250, price: 3.50 } },
  { product: "Wheat Flour", unit: "pounds", beg: { units: 500, price: 0.45 }, p1: { units: 400, price: 0.52 }, p2: { units: 300, price: 0.58 } },
  { product: "Coffee Beans", unit: "pounds", beg: { units: 150, price: 8.00 }, p1: { units: 200, price: 8.50 }, p2: { units: 180, price: 9.00 } },
  { product: "Bulk Nails", unit: "boxes", beg: { units: 100, price: 4.50 }, p1: { units: 150, price: 4.80 }, p2: { units: 120, price: 5.10 } },
]

export default function MethodPracticeCombined() {
  const [activeTab, setActiveTab] = useState<"specid" | "weighted">("specid")
  
  // Specific ID state
  const [specIdStep, setSpecIdStep] = useState(0)
  const [specIdAnswers, setSpecIdAnswers] = useState<Record<string, string>>({})
  const [specIdChecked, setSpecIdChecked] = useState<Record<string, boolean>>({})
  
  // Weighted Average state
  const [waScenario, setWaScenario] = useState(() => {
    const idx = Math.floor(Math.random() * WEIGHTED_AVG_SCENARIOS.length)
    return WEIGHTED_AVG_SCENARIOS[idx]
  })
  const [waStep, setWaStep] = useState(0)
  const [waAnswers, setWaAnswers] = useState<Record<string, string>>({})
  const [waChecked, setWaChecked] = useState<Record<string, boolean>>({})
  const [waLayerRevealed, setWaLayerRevealed] = useState<Record<number, boolean>>({})

  // Calculate Specific ID values
  const totalInventoryValue = SPEC_ID_SCENARIO.inventory.reduce((sum, item) => sum + item.cost, 0)
  const soldVins = SPEC_ID_SCENARIO.sales.map(s => s.vin)
  const soldItems = SPEC_ID_SCENARIO.inventory.filter(item => soldVins.includes(item.id))
  const cogsSpecId = soldItems.reduce((sum, item) => sum + item.cost, 0)
  const remainingItems = SPEC_ID_SCENARIO.inventory.filter(item => !soldVins.includes(item.id))
  const endingInventorySpecId = remainingItems.reduce((sum, item) => sum + item.cost, 0)

  // Calculate Weighted Average values
  const waTotalUnits = waScenario.beg.units + waScenario.p1.units + waScenario.p2.units
  const waTotalCost = (waScenario.beg.units * waScenario.beg.price) + (waScenario.p1.units * waScenario.p1.price) + (waScenario.p2.units * waScenario.p2.price)
  const waAvgCost = Math.round((waTotalCost / waTotalUnits) * 100) / 100
  const waUnitsSold = Math.round(waTotalUnits * 0.65 / 10) * 10 // 65% rounded
  const waCogs = waUnitsSold * waAvgCost
  const waRemaining = waTotalUnits - waUnitsSold
  const waEndingInv = waRemaining * waAvgCost

  const resetSpecId = () => {
    setSpecIdStep(0)
    setSpecIdAnswers({})
    setSpecIdChecked({})
  }

  const resetWeightedAvg = () => {
    const idx = Math.floor(Math.random() * WEIGHTED_AVG_SCENARIOS.length)
    setWaScenario(WEIGHTED_AVG_SCENARIOS[idx])
    setWaStep(0)
    setWaAnswers({})
    setWaChecked({})
    setWaLayerRevealed({})
  }

  const checkAnswer = (key: string, expected: number, setter: typeof setSpecIdChecked) => {
    const userValue = parseFloat(specIdAnswers[key] || "0")
    const isCorrect = Math.abs(userValue - expected) < 0.5
    setter(prev => ({ ...prev, [key]: isCorrect }))
    return isCorrect
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "specid" | "weighted")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="specid" className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Specific Identification
          </TabsTrigger>
          <TabsTrigger value="weighted" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Weighted Average
          </TabsTrigger>
        </TabsList>

        {/* SPECIFIC IDENTIFICATION TAB */}
        <TabsContent value="specid" className="space-y-6">
          <Card className="border-slate-200 bg-white">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-slate-900">{SPEC_ID_SCENARIO.business}</h3>
                    <p className="text-sm text-slate-600">Used Car Dealership — Tracking vehicles by VIN</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={resetSpecId}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Step 0: Inventory */}
              {specIdStep === 0 && (
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Premier Auto has <strong>5 vehicles</strong> in inventory. Each has a unique VIN and tracked cost.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SPEC_ID_SCENARIO.inventory.map((item) => (
                      <div key={item.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono bg-slate-200 px-2 py-0.5 rounded text-slate-600">
                            {item.id}
                          </span>
                          <Badge className="bg-blue-100 text-blue-800">In Stock</Badge>
                        </div>
                        <p className="font-medium text-slate-900">{item.name}</p>
                        <p className="text-slate-600 text-sm">Cost: ${item.cost.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <p className="text-amber-900">
                      <strong>Goods Available for Sale:</strong> {SPEC_ID_SCENARIO.inventory.length} vehicles × tracked costs = 
                      <strong> ${totalInventoryValue.toLocaleString()}</strong>
                    </p>
                  </div>

                  <Button onClick={() => setSpecIdStep(1)} className="bg-blue-600 hover:bg-blue-700">
                    Next: Record Sales →
                  </Button>
                </div>
              )}

              {/* Step 1: Sales */}
              {specIdStep === 1 && (
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Three vehicles were sold this month. <strong>Record the exact cost</strong> for each sale.
                  </p>

                  <div className="space-y-3">
                    {SPEC_ID_SCENARIO.sales.map((sale, idx) => {
                      const item = SPEC_ID_SCENARIO.inventory.find(i => i.id === sale.vin)!
                      return (
                        <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-green-900">{sale.customer}</span>
                            <span className="text-sm text-green-600">Sold for ${sale.soldAt.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-green-800">
                            <Tag className="h-4 w-4" />
                            <span className="font-mono">{sale.vin}</span>
                            <span className="text-slate-600">—</span>
                            <span>{item.name}</span>
                          </div>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-sm text-green-700">Recorded cost:</span>
                            <span className="font-bold text-green-900">${item.cost.toLocaleString()}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="font-medium text-slate-900 mb-2">Calculate COGS:</p>
                    <p className="text-slate-700">
                      Add the exact costs: ${soldItems.map(i => i.cost.toLocaleString()).join(' + $')} = ?
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-slate-700">COGS = $</span>
                      <Input
                        type="number"
                        value={specIdAnswers.cogs || ""}
                        onChange={(e) => setSpecIdAnswers(prev => ({ ...prev, cogs: e.target.value }))}
                        placeholder="?"
                        className={`w-32 ${specIdChecked.cogs !== undefined ? (specIdChecked.cogs ? "border-green-500" : "border-red-500") : ""}`}
                      />
                    </div>
                    {specIdChecked.cogs !== undefined && (
                      specIdChecked.cogs 
                        ? <p className="text-green-600 mt-2"><CheckCircle2 className="h-4 w-4 inline mr-1" />Correct! COGS = ${cogsSpecId.toLocaleString()}</p>
                        : <p className="text-red-600 mt-2"><XCircle className="h-4 w-4 inline mr-1" />Try again. The sum is ${cogsSpecId.toLocaleString()}</p>
                    )}
                    <Button 
                      onClick={() => checkAnswer("cogs", cogsSpecId, setSpecIdChecked)}
                      className="mt-2 bg-blue-600 hover:bg-blue-700"
                    >
                      Check
                    </Button>
                  </div>

                  {specIdChecked.cogs && (
                    <Button onClick={() => setSpecIdStep(2)} className="bg-blue-600 hover:bg-blue-700">
                      Next: Ending Inventory →
                    </Button>
                  )}
                </div>
              )}

              {/* Step 2: Ending Inventory */}
              {specIdStep === 2 && (
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Find the remaining vehicles and calculate ending inventory.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {remainingItems.map((item) => (
                      <div key={item.id} className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono bg-purple-200 px-2 py-0.5 rounded text-purple-700">
                            {item.id}
                          </span>
                          <Badge className="bg-purple-100 text-purple-800">Remaining</Badge>
                        </div>
                        <p className="font-medium text-purple-900">{item.name}</p>
                        <p className="text-purple-700 text-sm">Cost: ${item.cost.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
                    <div>
                      <p className="font-medium text-slate-900 mb-1">How many vehicles remain?</p>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={specIdAnswers.remainingCount || ""}
                          onChange={(e) => setSpecIdAnswers(prev => ({ ...prev, remainingCount: e.target.value }))}
                          placeholder="?"
                          className={`w-20 ${specIdChecked.remainingCount !== undefined ? (specIdChecked.remainingCount ? "border-green-500" : "border-red-500") : ""}`}
                        />
                        <span className="text-slate-600">vehicles</span>
                      </div>
                      {specIdChecked.remainingCount !== undefined && (
                        specIdChecked.remainingCount 
                          ? <p className="text-green-600 text-sm"><CheckCircle2 className="h-4 w-4 inline mr-1" />Correct: {remainingItems.length} vehicles</p>
                          : <p className="text-red-600 text-sm"><XCircle className="h-4 w-4 inline mr-1" />Try again: {remainingItems.length} vehicles</p>
                      )}
                    </div>

                    <div>
                      <p className="font-medium text-slate-900 mb-1">Ending Inventory value:</p>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600">$</span>
                        <Input
                          type="number"
                          value={specIdAnswers.endingInv || ""}
                          onChange={(e) => setSpecIdAnswers(prev => ({ ...prev, endingInv: e.target.value }))}
                          placeholder="?"
                          className={`w-32 ${specIdChecked.endingInv !== undefined ? (specIdChecked.endingInv ? "border-green-500" : "border-red-500") : ""}`}
                        />
                      </div>
                      {specIdChecked.endingInv !== undefined && (
                        specIdChecked.endingInv 
                          ? <p className="text-green-600 text-sm"><CheckCircle2 className="h-4 w-4 inline mr-1" />Correct: ${endingInventorySpecId.toLocaleString()}</p>
                          : <p className="text-red-600 text-sm"><XCircle className="h-4 w-4 inline mr-1" />Try again: ${endingInventorySpecId.toLocaleString()}</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={() => {
                          const correctCount = remainingItems.length === parseInt(specIdAnswers.remainingCount || "0")
                          const correctInv = Math.abs(parseFloat(specIdAnswers.endingInv || "0") - endingInventorySpecId) < 0.5
                          setSpecIdChecked(prev => ({
                            ...prev,
                            remainingCount: correctCount,
                            endingInv: correctInv
                          }))
                        }}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Check Both
                      </Button>
                    </div>
                  </div>

                  {specIdChecked.remainingCount && specIdChecked.endingInv && (
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-medium text-green-900 mb-2">✓ Specific Identification Complete</p>
                      <p className="text-green-700 text-sm">
                        You tracked each vehicle individually by VIN and calculated exact costs.
                      </p>
                      <div className="mt-2 grid grid-cols-3 gap-2 text-center text-sm">
                        <div className="bg-white p-2 rounded border border-green-300">
                          <p className="text-green-600">GAFS</p>
                          <p className="font-bold text-green-900">${totalInventoryValue.toLocaleString()}</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-green-300">
                          <p className="text-green-600">COGS</p>
                          <p className="font-bold text-green-900">${cogsSpecId.toLocaleString()}</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-green-300">
                          <p className="text-green-600">End. Inv.</p>
                          <p className="font-bold text-green-900">${endingInventorySpecId.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* WEIGHTED AVERAGE TAB */}
        <TabsContent value="weighted" className="space-y-6">
          <Card className="border-slate-200 bg-white">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-bold text-slate-900">Bulk {waScenario.product}</h3>
                    <p className="text-sm text-slate-600">Wholesale supplier — Pooling identical units</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={resetWeightedAvg}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  New Numbers
                </Button>
              </div>

              {/* Step 0: Build the Pool */}
              {waStep === 0 && (
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Click each layer to add it to your pool.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[waScenario.beg, waScenario.p1, waScenario.p2].map((layer, idx) => {
                      const labels = ["Beginning", "Purchase 1", "Purchase 2"]
                      const revealed = waLayerRevealed[idx]
                      const total = layer.units * layer.price

                      return (
                        <div
                          key={idx}
                          onClick={() => !revealed && setWaLayerRevealed(prev => ({ ...prev, [idx]: true }))}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            revealed 
                              ? "bg-white border-purple-300" 
                              : "bg-slate-100 border-slate-300 hover:border-purple-400"
                          }`}
                        >
                          {revealed ? (
                            <>
                              <Badge className="bg-purple-100 text-purple-800 mb-2">{labels[idx]}</Badge>
                              <p className="text-slate-900 font-semibold">
                                {layer.units.toLocaleString()} {waScenario.unit} × ${layer.price.toFixed(2)}
                              </p>
                              <p className="text-purple-600 font-bold">
                                = ${total.toLocaleString()}
                              </p>
                            </>
                          ) : (
                            <>
                              <Badge className="bg-slate-200 text-slate-600 mb-2">Click to Reveal</Badge>
                              <p className="text-slate-500">{labels[idx]}</p>
                              <p className="text-slate-400 text-sm">?? {waScenario.unit} × $??</p>
                            </>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {Object.values(waLayerRevealed).every(Boolean) && (
                    <>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="font-medium text-slate-900 mb-2">Your Pool:</p>
                        <table className="w-full text-sm">
                          <tbody>
                            {["Beginning", "Purchase 1", "Purchase 2"].map((label, idx) => {
                              const layer = [waScenario.beg, waScenario.p1, waScenario.p2][idx]
                              return (
                                <tr key={idx}>
                                  <td className="py-1">{label}</td>
                                  <td className="text-right">{layer.units.toLocaleString()} {waScenario.unit}</td>
                                  <td className="text-right">${layer.price.toFixed(2)}</td>
                                  <td className="text-right font-medium">${(layer.units * layer.price).toLocaleString()}</td>
                                </tr>
                              )
                            })}
                            <tr className="font-bold border-t">
                              <td className="py-1">GAFS</td>
                              <td className="text-right">{waTotalUnits.toLocaleString()} {waScenario.unit}</td>
                              <td className="text-right">—</td>
                              <td className="text-right">${waTotalCost.toLocaleString()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-slate-700">Total Units:</label>
                          <div className="flex gap-2 mt-1">
                            <Input
                              type="number"
                              value={waAnswers.totalUnits || ""}
                              onChange={(e) => setWaAnswers(prev => ({ ...prev, totalUnits: e.target.value }))}
                              placeholder="?"
                              className={waChecked.totalUnits ? "border-green-500" : ""}
                            />
                            <span className="flex items-center text-slate-600">{waScenario.unit}</span>
                          </div>
                          {waChecked.totalUnits && <p className="text-green-600 text-sm">✓ Correct</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700">Total Cost:</label>
                          <div className="flex gap-2 mt-1">
                            <span className="flex items-center text-slate-600">$</span>
                            <Input
                              type="number"
                              value={waAnswers.totalCost || ""}
                              onChange={(e) => setWaAnswers(prev => ({ ...prev, totalCost: e.target.value }))}
                              placeholder="?"
                              className={waChecked.totalCost ? "border-green-500" : ""}
                            />
                          </div>
                          {waChecked.totalCost && <p className="text-green-600 text-sm">✓ Correct</p>}
                        </div>
                      </div>

                      <Button 
                        onClick={() => {
                          setWaChecked(prev => ({
                            ...prev,
                            totalUnits: parseInt(waAnswers.totalUnits || "0") === waTotalUnits,
                            totalCost: Math.abs(parseFloat(waAnswers.totalCost || "0") - waTotalCost) < 1
                          }))
                        }}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        Check
                      </Button>

                      {waChecked.totalUnits && waChecked.totalCost && (
                        <Button onClick={() => setWaStep(1)} className="bg-purple-600 hover:bg-purple-700">
                          Next: Calculate Average →
                        </Button>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Step 1: Average Cost */}
              {waStep === 1 && (
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Calculate the weighted average cost per {waScenario.unit.slice(0, -1) || "unit"}.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                    <div className="text-2xl font-bold">
                      <span className="text-purple-600">${waTotalCost.toLocaleString()}</span>
                      <span className="text-slate-400 mx-2">÷</span>
                      <span className="text-purple-600">{waTotalUnits.toLocaleString()} {waScenario.unit}</span>
                      <span className="text-slate-400 mx-2">=</span>
                      <span className="text-slate-600">$</span>
                      <Input
                        type="number"
                        step="0.01"
                        value={waAnswers.avgCost || ""}
                        onChange={(e) => setWaAnswers(prev => ({ ...prev, avgCost: e.target.value }))}
                        placeholder="0.00"
                        className={`w-28 text-center ${waChecked.avgCost ? "border-green-500" : ""}`}
                      />
                      <span className="text-slate-600">/{waScenario.unit.slice(0, -1) || "unit"}</span>
                    </div>
                  </div>

                  {waChecked.avgCost && (
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="text-green-900">
                        <CheckCircle2 className="h-5 w-5 inline mr-2" />
                        Correct! Weighted average = ${waAvgCost.toFixed(2)}
                      </p>
                    </div>
                  )}

                  <Button 
                    onClick={() => setWaChecked(prev => ({ ...prev, avgCost: Math.abs(parseFloat(waAnswers.avgCost || "0") - waAvgCost) < 0.01 }))}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Check
                  </Button>

                  {waChecked.avgCost && (
                    <Button onClick={() => setWaStep(2)} className="bg-purple-600 hover:bg-purple-700">
                      Next: Calculate COGS →
                    </Button>
                  )}
                </div>
              )}

              {/* Step 2: COGS */}
              {waStep === 2 && (
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Sold <strong>{waUnitsSold.toLocaleString()} {waScenario.unit}</strong> this period.
                  </p>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="text-sm text-red-700 mb-2">COGS Calculation:</p>
                    <div className="text-xl font-bold">
                      {waUnitsSold.toLocaleString()} {waScenario.unit} × ${waAvgCost.toFixed(2)} = $<Input
                        type="number"
                        value={waAnswers.cogs || ""}
                        onChange={(e) => setWaAnswers(prev => ({ ...prev, cogs: e.target.value }))}
                        placeholder="?"
                        className={`w-28 ${waChecked.cogs ? "border-green-500" : ""}`}
                      />
                    </div>
                  </div>

                  {waChecked.cogs && (
                    <p className="text-green-600"><CheckCircle2 className="h-4 w-4 inline mr-1" />Correct: COGS = ${waCogs.toFixed(2)}</p>
                  )}

                  <Button 
                    onClick={() => setWaChecked(prev => ({ ...prev, cogs: Math.abs(parseFloat(waAnswers.cogs || "0") - waCogs) < 1 }))}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Check
                  </Button>

                  {waChecked.cogs && (
                    <Button onClick={() => setWaStep(3)} className="bg-purple-600 hover:bg-purple-700">
                      Next: Ending Inventory →
                    </Button>
                  )}
                </div>
              )}

              {/* Step 3: Ending Inventory */}
              {waStep === 3 && (
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Calculate ending inventory (two values needed).
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Units Remaining:</label>
                      <div className="flex gap-2 mt-1">
                        <Input
                          type="number"
                          value={waAnswers.remaining || ""}
                          onChange={(e) => setWaAnswers(prev => ({ ...prev, remaining: e.target.value }))}
                          placeholder="?"
                          className={waChecked.remaining ? "border-green-500" : ""}
                        />
                        <span className="flex items-center text-slate-600">{waScenario.unit}</span>
                      </div>
                      {waChecked.remaining && <p className="text-green-600 text-sm">✓ Correct</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Ending Inventory Value:</label>
                      <div className="flex gap-2 mt-1">
                        <span className="flex items-center text-slate-600">$</span>
                        <Input
                          type="number"
                          value={waAnswers.endingInv || ""}
                          onChange={(e) => setWaAnswers(prev => ({ ...prev, endingInv: e.target.value }))}
                          placeholder="?"
                          className={waChecked.endingInv ? "border-green-500" : ""}
                        />
                      </div>
                      {waChecked.endingInv && <p className="text-green-600 text-sm">✓ Correct</p>}
                    </div>
                  </div>

                  <Button 
                    onClick={() => setWaChecked(prev => ({
                      ...prev,
                      remaining: parseInt(waAnswers.remaining || "0") === waRemaining,
                      endingInv: Math.abs(parseFloat(waAnswers.endingInv || "0") - waEndingInv) < 1
                    }))}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Check Both
                  </Button>

                  {waChecked.remaining && waChecked.endingInv && (
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-medium text-green-900 mb-2">✓ Weighted Average Complete</p>
                      <p className="text-green-700 text-sm">
                        Same rate (${waAvgCost.toFixed(2)}) for both COGS and Ending Inventory.
                      </p>
                      <div className="mt-2 grid grid-cols-3 gap-2 text-center text-sm">
                        <div className="bg-white p-2 rounded border border-green-300">
                          <p className="text-green-600">GAFS</p>
                          <p className="font-bold text-green-900">${waTotalCost.toLocaleString()}</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-green-300">
                          <p className="text-green-600">COGS</p>
                          <p className="font-bold text-green-900">${waCogs.toFixed(2)}</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-green-300">
                          <p className="text-green-600">End. Inv.</p>
                          <p className="font-bold text-green-900">${waEndingInv.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}