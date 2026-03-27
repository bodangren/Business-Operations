"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Calculator, TrendingUp, DollarSign, CheckCircle2, RotateCcw, ChevronRight, Lightbulb, AlertTriangle } from "lucide-react"

// Scenario data for demonstration
const scenarioData = {
  business: "Valley Bulk Foods",
  product: "Rice",
  beginning: { units: 400, price: 0.40, total: 160 },
  purchase1: { units: 600, price: 0.45, total: 270 },
  purchase2: { units: 500, price: 0.52, total: 260 },
  unitsSold: 900,
}

// Calculated values
const totalUnits = scenarioData.beginning.units + scenarioData.purchase1.units + scenarioData.purchase2.units
const totalCost = scenarioData.beginning.total + scenarioData.purchase1.total + scenarioData.purchase2.total
const avgCost = totalCost / totalUnits // 0.46 exactly
const cogs = scenarioData.unitsSold * avgCost
const unitsRemaining = totalUnits - scenarioData.unitsSold
const endingInventory = unitsRemaining * avgCost

export default function WeightedAvgDemo() {
  const [step, setStep] = useState(0)

  const steps = [
    {
      title: "Business Context",
      description: "Why Weighted Average fits this business.",
      content: "context"
    },
    {
      title: "Pool All Purchases",
      description: "Combine all purchases into one total.",
      content: "pool"
    },
    {
      title: "Calculate Average Cost",
      description: "Divide total cost by total units.",
      content: "average"
    },
    {
      title: "Calculate COGS",
      description: "Units sold × Average cost.",
      content: "cogs"
    },
    {
      title: "Calculate Ending Inventory",
      description: "Units remaining × Average cost.",
      content: "ending"
    },
    {
      title: "Verify Your Work",
      description: "All costs must balance.",
      content: "verify"
    }
  ]

  const currentStepData = steps[step]

  const resetDemo = () => setStep(0)
  const nextStep = () => step < steps.length - 1 && setStep(step + 1)
  const prevStep = () => step > 0 && setStep(step - 1)

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
            <Button variant="outline" size="sm" onClick={resetDemo}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Restart
            </Button>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{currentStepData.title}</h3>
          <p className="text-slate-600">{currentStepData.description}</p>
        </CardContent>
      </Card>

      {/* Step Content */}
      {step === 0 && (
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-900 text-lg">Why Weighted Average?</h4>
                <p className="text-purple-800">
                  <strong>{scenarioData.business}</strong> sells {scenarioData.product.toLowerCase()} in bulk. When deliveries 
                  arrive, they all go into the same storage container. Once mixed together, there's no way 
                  to tell which scoop came from which delivery.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="font-medium text-purple-900 mb-2">❌ Can't Use These Methods:</p>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• <strong>Specific ID:</strong> No serial numbers for individual grains</li>
                      <li>• <strong>FIFO/LIFO:</strong> Would require keeping layers separate</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="font-medium text-purple-900 mb-2">✓ Use Weighted Average:</p>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• All grain costs blend together</li>
                      <li>• Calculate ONE average price per unit</li>
                      <li>• Use that price for both COGS and inventory</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                  <p className="text-purple-900">
                    <Lightbulb className="h-4 w-4 inline mr-2" />
                    <strong>Key insight:</strong> When items are physically identical and mixed together, 
                    Weighted Average is often the most practical choice. You don't track layers — you pool everything.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 1 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-slate-600" />
              Pool All Purchases Together
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              The first step in Weighted Average is to combine <strong>all</strong> your purchases into 
              one pool. Don't worry about which delivery came first — just add everything up.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left">Layer</th>
                    <th className="border border-slate-300 px-4 py-2 text-right">Units</th>
                    <th className="border border-slate-300 px-4 py-2 text-right">Price/lb</th>
                    <th className="border border-slate-300 px-4 py-2 text-right">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-50">
                    <td className="border border-slate-300 px-4 py-2 font-medium">Beginning Inventory</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">{scenarioData.beginning.units.toLocaleString()} lbs</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">${scenarioData.beginning.price.toFixed(2)}</td>
                    <td className="border border-slate-300 px-4 py-2 text-right font-semibold">${scenarioData.beginning.total.toLocaleString()}</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="border border-slate-300 px-4 py-2 font-medium">Purchase 1 (Day 5)</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">{scenarioData.purchase1.units.toLocaleString()} lbs</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">${scenarioData.purchase1.price.toFixed(2)}</td>
                    <td className="border border-slate-300 px-4 py-2 text-right font-semibold">${scenarioData.purchase1.total.toLocaleString()}</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-slate-300 px-4 py-2 font-medium">Purchase 2 (Day 15)</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">{scenarioData.purchase2.units.toLocaleString()} lbs</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">${scenarioData.purchase2.price.toFixed(2)}</td>
                    <td className="border border-slate-300 px-4 py-2 text-right font-semibold">${scenarioData.purchase2.total.toLocaleString()}</td>
                  </tr>
                  <tr className="bg-purple-100 font-bold">
                    <td className="border border-slate-300 px-4 py-2">Goods Available for Sale</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">{totalUnits.toLocaleString()} lbs</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">—</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">${totalCost.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-900">
                <strong>Step 1 complete:</strong> You now know the total units available 
                (<strong>{totalUnits.toLocaleString()} lbs</strong>) and total cost available 
                (<strong>${totalCost.toLocaleString()}</strong>).
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <p className="text-amber-900">
                <strong>Visual:</strong> Imagine all {totalUnits.toLocaleString()} lbs of rice in one big silo. 
                The grain from different deliveries is mixed together — you can't separate it back out.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-slate-600" />
              Calculate the Weighted Average Cost
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Divide the <strong>total cost</strong> by the <strong>total units</strong> to find 
              the single average cost per pound.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="text-center space-y-2">
                <div className="text-slate-600 text-sm">Weighted Average Cost per Unit:</div>
                <div className="text-3xl font-bold text-slate-900">
                  <span className="text-purple-600">${totalCost.toLocaleString()}</span>
                  <span className="text-slate-400 mx-2">÷</span>
                  <span className="text-purple-600">{totalUnits.toLocaleString()} lbs</span>
                  <span className="text-slate-400 mx-2">=</span>
                  <span className="text-green-600">${avgCost.toFixed(2)}/lb</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-900">⚠️ COMMON MISTAKE #1: Don't Average the Prices!</p>
                  <div className="mt-2 text-red-800 text-sm">
                    <p className="line-through">❌ WRONG: ($0.40 + $0.45 + $0.52) ÷ 3 = $0.457 per lb</p>
                    <p className="font-medium">✓ RIGHT: $690 ÷ 1,500 = $0.46 per lb</p>
                  </div>
                  <p className="text-red-700 text-sm mt-2">
                    <strong>Why?</strong> Each layer had different quantities. The 600-lb purchase 
                    at $0.45/lb should count more than the 400-lb beginning inventory at $0.40/lb. 
                    That's why we divide total cost by total units.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-900">
                <strong>In this case:</strong> The math is clean — ${totalCost} ÷ {totalUnits} = ${avgCost.toFixed(2)} exactly.
                No rounding needed. But in real scenarios, you'll often need to round to 2 decimal places.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-900">
                <strong>Key insight:</strong> This single rate ({avgCost.toFixed(2)}/lb) will be used for 
                <strong>both</strong> COGS and Ending Inventory. That's the simplicity of Weighted Average.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-slate-600" />
              Calculate Cost of Goods Sold (COGS)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              {scenarioData.business} sold <strong>{scenarioData.unitsSold.toLocaleString()} lbs</strong> of 
              {scenarioData.product.toLowerCase()} this month. With Weighted Average, you don't track 
              which layer sold — <strong>all units have the same cost</strong>.
            </p>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <div className="text-center space-y-3">
                <div className="text-slate-600">COGS Calculation:</div>
                <div className="text-2xl font-bold text-slate-900">
                  <span className="text-purple-600">{scenarioData.unitsSold.toLocaleString()} lbs</span>
                  <span className="text-slate-400 mx-2">×</span>
                  <span className="text-purple-600">${avgCost.toFixed(2)}/lb</span>
                  <span className="text-slate-400 mx-2">=</span>
                  <span className="text-red-600">${cogs.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-slate-700">
                <strong>Units sold:</strong> {scenarioData.unitsSold.toLocaleString()} lbs<br />
                <strong>Average cost:</strong> ${avgCost.toFixed(2)}/lb<br />
                <strong>COGS:</strong> ${(scenarioData.unitsSold * avgCost).toFixed(2)}
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-900">
                <strong>Compare to FIFO/LIFO:</strong>
              </p>
              <ul className="text-purple-800 text-sm mt-2 space-y-1">
                <li>• FIFO would pull from oldest (cheapest) layers first → lower COGS, higher profit</li>
                <li>• LIFO would pull from newest (most expensive) layers first → higher COGS, lower profit</li>
                <li>• <strong>Weighted Average</strong> treats all units the same → middle COGS</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-slate-600" />
              Calculate Ending Inventory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              What's left on the shelf? Use the <strong>same average cost</strong> for the remaining units.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
              <p className="text-blue-900">
                <strong>Units remaining:</strong> {totalUnits.toLocaleString()} - {scenarioData.unitsSold.toLocaleString()} = 
                <strong> {unitsRemaining.toLocaleString()} lbs</strong>
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="text-center space-y-3">
                <div className="text-slate-600">Ending Inventory Calculation:</div>
                <div className="text-2xl font-bold text-slate-900">
                  <span className="text-purple-600">{unitsRemaining.toLocaleString()} lbs</span>
                  <span className="text-slate-400 mx-2">×</span>
                  <span className="text-purple-600">${avgCost.toFixed(2)}/lb</span>
                  <span className="text-slate-400 mx-2">=</span>
                  <span className="text-purple-600">${endingInventory.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-900">
                <strong>The beauty of Weighted Average:</strong> You use the <strong>same rate</strong> ({avgCost.toFixed(2)}/lb) 
                for both COGS and Ending Inventory. No layer tracking, no complex calculations.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <p className="text-amber-900">
                <strong>What sits on the shelf?</strong> {unitsRemaining.toLocaleString()} lbs of rice, 
                valued at ${endingInventory.toFixed(2)}. Each pound is worth ${avgCost.toFixed(2)}, 
                regardless of which delivery it came from.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 5 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-slate-600" />
              Verify: Does Everything Balance?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              The accounting equation must balance: COGS + Ending Inventory = Goods Available for Sale
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-center">
                <p className="text-sm text-amber-700 mb-1">Goods Available for Sale</p>
                <p className="text-3xl font-bold text-amber-900">${totalCost.toLocaleString()}</p>
                <p className="text-xs text-amber-600 mt-1">{totalUnits.toLocaleString()} lbs @ various prices</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
                <p className="text-sm text-red-700 mb-1">Cost of Goods Sold</p>
                <p className="text-3xl font-bold text-red-900">${cogs.toFixed(2)}</p>
                <p className="text-xs text-red-600 mt-1">{scenarioData.unitsSold.toLocaleString()} lbs @ ${avgCost.toFixed(2)}/lb</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
                <p className="text-sm text-purple-700 mb-1">Ending Inventory</p>
                <p className="text-3xl font-bold text-purple-900">${endingInventory.toFixed(2)}</p>
                <p className="text-xs text-purple-600 mt-1">{unitsRemaining.toLocaleString()} lbs @ ${avgCost.toFixed(2)}/lb</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">Verification:</p>
                  <p className="text-green-800 font-mono">
                    ${cogs.toFixed(2)} + ${endingInventory.toFixed(2)} = ${(cogs + endingInventory).toFixed(2)}
                  </p>
                  <p className="text-green-700 mt-1">
                    ✓ The equation balances. All inventory costs are accounted for.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-900 font-semibold mb-2">Summary of Weighted Average:</p>
              <ol className="text-blue-800 text-sm space-y-2">
                <li><strong>1.</strong> Pool all purchases → Total units + Total cost</li>
                <li><strong>2.</strong> Divide total cost by total units → Weighted average cost</li>
                <li><strong>3.</strong> Units sold × Average cost → COGS</li>
                <li><strong>4.</strong> Units remaining × Average cost → Ending Inventory</li>
                <li><strong>5.</strong> Verify: COGS + Ending Inventory = Goods Available</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={nextStep} disabled={step === steps.length - 1}>
          {step === steps.length - 1 ? "Complete" : "Next"}
          {step < steps.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
        </Button>
      </div>
    </div>
  )
}