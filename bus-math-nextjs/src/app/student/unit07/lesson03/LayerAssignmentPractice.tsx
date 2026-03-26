"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, ChevronRight, ChevronLeft, Calculator } from "lucide-react"

// Scenario data - different from Phase 2
const SCENARIO = {
  name: "Sarah's Office Supply Kits",
  layers: [
    { units: 15, cost: 30, label: "Purchase 1 (Oldest)" },
    { units: 20, cost: 35, label: "Purchase 2" },
    { units: 10, cost: 40, label: "Purchase 3 (Newest)" },
  ],
  totalPurchased: 45,
  unitsSold: 28,
  sellingPrice: 60,
}

const TOTAL_VALUE = SCENARIO.layers.reduce((sum, l) => sum + l.units * l.cost, 0)
const REVENUE = SCENARIO.unitsSold * SCENARIO.sellingPrice
const ENDING_UNITS = SCENARIO.totalPurchased - SCENARIO.unitsSold // 17 units

type Step = 1 | 2 | 3 | 4 | 5

// FIFO: Oldest first -> all 15@30 + 13 of the 20@35
// LIFO: Newest first -> all 10@40 + all 20@35... wait, need only 28
// LIFO: 10@40 + 18@35 = 28 units... hmm let me recalculate
// Actually: 10 + 20 = 30, but we only need 28
// LIFO: 10@40 + 18@35 = 28 units for COGS

// FIFO COGS = 15*30 + 13*35 = 450 + 455 = 905
// FIFO Ending = 7*35 + 10*40 = 245 + 400 = 645
// Check: 905 + 645 = 1550 = TOTAL_VALUE ✓

// LIFO COGS = 10*40 + 18*35 = 400 + 630 = 1030
// LIFO Ending = 15*30 + 2*35 = 450 + 70 = 520
// Check: 1030 + 520 = 1550 = TOTAL_VALUE ✓

export default function LayerAssignmentPractice() {
  const [step, setStep] = useState<Step>(1)
  
  // FIFO inputs - pre-filled with "0" for clarity
  const [fifoCogs1, setFifoCogs1] = useState("0")
  const [fifoCogs2, setFifoCogs2] = useState("0")
  const [fifoCogs3, setFifoCogs3] = useState("0")
  const [fifoEnding1, setFifoEnding1] = useState("0")
  const [fifoEnding2, setFifoEnding2] = useState("0")
  const [fifoEnding3, setFifoEnding3] = useState("0")
  
  // LIFO inputs - pre-filled with "0" for clarity
  const [lifoCogs1, setLifoCogs1] = useState("0")
  const [lifoCogs2, setLifoCogs2] = useState("0")
  const [lifoCogs3, setLifoCogs3] = useState("0")
  const [lifoEnding1, setLifoEnding1] = useState("0")
  const [lifoEnding2, setLifoEnding2] = useState("0")
  const [lifoEnding3, setLifoEnding3] = useState("0")
  
  // Validation states
  const [fifoCogsChecked, setFifoCogsChecked] = useState(false)
  const [fifoEndingChecked, setFifoEndingChecked] = useState(false)
  const [lifoCogsChecked, setLifoCogsChecked] = useState(false)
  const [lifoEndingChecked, setLifoEndingChecked] = useState(false)
  
  // Calculate FIFO results
  const fifoCogsUnits = (parseInt(fifoCogs1) || 0) + (parseInt(fifoCogs2) || 0) + (parseInt(fifoCogs3) || 0)
  const fifoCogsValue = (parseInt(fifoCogs1) || 0) * 30 + (parseInt(fifoCogs2) || 0) * 35 + (parseInt(fifoCogs3) || 0) * 40
  const fifoEndingUnits = (parseInt(fifoEnding1) || 0) + (parseInt(fifoEnding2) || 0) + (parseInt(fifoEnding3) || 0)
  const fifoEndingValue = (parseInt(fifoEnding1) || 0) * 30 + (parseInt(fifoEnding2) || 0) * 35 + (parseInt(fifoEnding3) || 0) * 40
  const fifoGrossProfit = REVENUE - fifoCogsValue
  
  // Calculate LIFO results
  const lifoCogsUnits = (parseInt(lifoCogs1) || 0) + (parseInt(lifoCogs2) || 0) + (parseInt(lifoCogs3) || 0)
  const lifoCogsValue = (parseInt(lifoCogs1) || 0) * 30 + (parseInt(lifoCogs2) || 0) * 35 + (parseInt(lifoCogs3) || 0) * 40
  const lifoEndingUnits = (parseInt(lifoEnding1) || 0) + (parseInt(lifoEnding2) || 0) + (parseInt(lifoEnding3) || 0)
  const lifoEndingValue = (parseInt(lifoEnding1) || 0) * 30 + (parseInt(lifoEnding2) || 0) * 35 + (parseInt(lifoEnding3) || 0) * 40
  const lifoGrossProfit = REVENUE - lifoCogsValue
  
  // Helper to safely parse input (treat empty as 0)
  const parseInput = (val: string) => parseInt(val) || 0
  
  // Validation functions
  const validateFifoCogs = () => {
    const correct = parseInput(fifoCogs1) === 15 && parseInput(fifoCogs2) === 13 && parseInput(fifoCogs3) === 0
    setFifoCogsChecked(true)
    return correct
  }
  
  const validateFifoEnding = () => {
    const correct = parseInput(fifoEnding1) === 0 && parseInput(fifoEnding2) === 7 && parseInput(fifoEnding3) === 10
    setFifoEndingChecked(true)
    return correct
  }
  
  const validateLifoCogs = () => {
    const correct = parseInput(lifoCogs1) === 0 && parseInput(lifoCogs2) === 18 && parseInput(lifoCogs3) === 10
    setLifoCogsChecked(true)
    return correct
  }
  
  const validateLifoEnding = () => {
    const correct = parseInput(lifoEnding1) === 15 && parseInput(lifoEnding2) === 2 && parseInput(lifoEnding3) === 0
    setLifoEndingChecked(true)
    return correct
  }
  
  const resetAll = () => {
    setStep(1)
    setFifoCogs1("0"); setFifoCogs2("0"); setFifoCogs3("0")
    setFifoEnding1("0"); setFifoEnding2("0"); setFifoEnding3("0")
    setLifoCogs1("0"); setLifoCogs2("0"); setLifoCogs3("0")
    setLifoEnding1("0"); setLifoEnding2("0"); setLifoEnding3("0")
    setFifoCogsChecked(false); setFifoEndingChecked(false)
    setLifoCogsChecked(false); setLifoEndingChecked(false)
  }

  // === STEP 1: Introduction ===
  if (step === 1) {
    return (
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 1: The Scenario</CardTitle>
            <Badge className="bg-blue-100 text-blue-800">Step 1 of 5</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">{SCENARIO.name}</h3>
            <p className="text-blue-800">
              Sarah purchased office supply kits over three months as costs increased. She sold <strong>{SCENARIO.unitsSold} units</strong> this quarter at <strong>${SCENARIO.sellingPrice} each</strong>. Your task: calculate Cost of Goods Sold and Ending Inventory under both FIFO and LIFO.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Inventory Layers (Purchases)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3">Layer</th>
                    <th className="text-right py-2 px-3">Units</th>
                    <th className="text-right py-2 px-3">Cost/Unit</th>
                    <th className="text-right py-2 px-3">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {SCENARIO.layers.map((layer, idx) => (
                    <tr key={idx} className="border-b border-slate-100">
                      <td className="py-2 px-3">{layer.label}</td>
                      <td className="text-right py-2 px-3">{layer.units}</td>
                      <td className="text-right py-2 px-3">${layer.cost}</td>
                      <td className="text-right py-2 px-3">${layer.units * layer.cost}</td>
                    </tr>
                  ))}
                  <tr className="font-semibold bg-slate-50">
                    <td className="py-2 px-3">Total Available</td>
                    <td className="text-right py-2 px-3">{SCENARIO.totalPurchased}</td>
                    <td className="text-right py-2 px-3">—</td>
                    <td className="text-right py-2 px-3">${TOTAL_VALUE}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Key Numbers to Remember</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-amber-900">{SCENARIO.unitsSold}</p>
                <p className="text-sm text-amber-700">Units Sold</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-900">{ENDING_UNITS}</p>
                <p className="text-sm text-amber-700">Units Remaining</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-900">${REVENUE}</p>
                <p className="text-sm text-amber-700">Revenue</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={() => setStep(2)} className="gap-2">
              Start FIFO Calculation
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // === STEP 2: FIFO COGS Assignment ===
  if (step === 2) {
    return (
      <Card className="border-green-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 2: FIFO — Cost of Goods Sold</CardTitle>
            <Badge className="bg-green-100 text-green-800">Step 2 of 5</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">FIFO Rule: First-In, First-Out</h4>
            <p className="text-green-800">
              Under FIFO, assign the <strong>oldest costs first</strong> to COGS. Start with Purchase 1, then Purchase 2, then Purchase 3 — until you've assigned all {SCENARIO.unitsSold} units.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Fill in: How many units from each layer go to COGS?</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3">Layer</th>
                    <th className="text-right py-2 px-3">Available</th>
                    <th className="text-right py-2 px-3">Cost/Unit</th>
                    <th className="text-right py-2 px-3">Units to COGS</th>
                    <th className="text-right py-2 px-3">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 1 (Oldest)</td>
                    <td className="text-right py-2 px-3">15</td>
                    <td className="text-right py-2 px-3">$30</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={fifoCogs1}
                        onChange={(e) => setFifoCogs1(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">${(parseInt(fifoCogs1) || 0) * 30}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 2</td>
                    <td className="text-right py-2 px-3">20</td>
                    <td className="text-right py-2 px-3">$35</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={fifoCogs2}
                        onChange={(e) => setFifoCogs2(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">${(parseInt(fifoCogs2) || 0) * 35}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 3 (Newest)</td>
                    <td className="text-right py-2 px-3">10</td>
                    <td className="text-right py-2 px-3">$40</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={fifoCogs3}
                        onChange={(e) => setFifoCogs3(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">${(parseInt(fifoCogs3) || 0) * 40}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600">Total Units to COGS</p>
                <p className={`text-2xl font-bold ${fifoCogsUnits === 28 ? "text-green-600" : "text-slate-900"}`}>
                  {fifoCogsUnits} / {SCENARIO.unitsSold}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Total COGS Value</p>
                <p className="text-2xl font-bold text-slate-900">${fifoCogsValue}</p>
              </div>
            </div>
          </div>
          
          {fifoCogsChecked && parseInput(fifoCogs1) === 15 && parseInput(fifoCogs2) === 13 && parseInput(fifoCogs3) === 0 && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800">
                <CheckCircle2 className="h-5 w-5 inline mr-2" />
                Correct! FIFO takes all 15 from the oldest layer, then 13 from the middle layer.
              </p>
            </div>
          )}
          
          {fifoCogsChecked && !(parseInput(fifoCogs1) === 15 && parseInput(fifoCogs2) === 13 && parseInput(fifoCogs3) === 0) && (
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800">
                Not quite. Remember: FIFO assigns oldest costs first. Start with Purchase 1, take what you need, then move to Purchase 2.
              </p>
            </div>
          )}
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={validateFifoCogs}>
                Check Answer
              </Button>
              {fifoCogsChecked && fifoCogsUnits === 28 && parseInt(fifoCogs1) === 15 && parseInt(fifoCogs2) === 13 && parseInt(fifoCogs3) === 0 && (
                <Button onClick={() => setStep(3)} className="gap-2">
                  Next: FIFO Ending Inventory
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // === STEP 3: FIFO Ending Inventory ===
  if (step === 3) {
    return (
      <Card className="border-green-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 3: FIFO — Ending Inventory</CardTitle>
            <Badge className="bg-green-100 text-green-800">Step 3 of 5</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">What Remains?</h4>
            <p className="text-green-800">
              Under FIFO, you assigned 15 + 13 = 28 units to COGS. The remaining units stay in Ending Inventory.
            </p>
            <p className="text-green-800 mt-2">
              <strong>Hint:</strong> Which layers have units left over? Fill in those amounts below.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Fill in: Remaining units in each layer</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3">Layer</th>
                    <th className="text-right py-2 px-3">Original</th>
                    <th className="text-right py-2 px-3">To COGS</th>
                    <th className="text-right py-2 px-3">Remaining</th>
                    <th className="text-right py-2 px-3">Cost/Unit</th>
                    <th className="text-right py-2 px-3">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 1 (Oldest)</td>
                    <td className="text-right py-2 px-3">15</td>
                    <td className="text-right py-2 px-3">{fifoCogs1}</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={fifoEnding1}
                        onChange={(e) => setFifoEnding1(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">$30</td>
                    <td className="text-right py-2 px-3">${(parseInt(fifoEnding1) || 0) * 30}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 2</td>
                    <td className="text-right py-2 px-3">20</td>
                    <td className="text-right py-2 px-3">{fifoCogs2}</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={fifoEnding2}
                        onChange={(e) => setFifoEnding2(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">$35</td>
                    <td className="text-right py-2 px-3">${(parseInt(fifoEnding2) || 0) * 35}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 3 (Newest)</td>
                    <td className="text-right py-2 px-3">10</td>
                    <td className="text-right py-2 px-3">{fifoCogs3}</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={fifoEnding3}
                        onChange={(e) => setFifoEnding3(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">$40</td>
                    <td className="text-right py-2 px-3">${(parseInt(fifoEnding3) || 0) * 40}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-slate-600">Total Ending Units</p>
                <p className={`text-2xl font-bold ${fifoEndingUnits === 17 ? "text-green-600" : "text-slate-900"}`}>
                  {fifoEndingUnits} / {ENDING_UNITS}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Ending Inventory Value</p>
                <p className="text-2xl font-bold text-slate-900">${fifoEndingValue}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">FIFO Gross Profit</p>
                <p className="text-2xl font-bold text-slate-900">${fifoGrossProfit}</p>
              </div>
            </div>
          </div>
          
          {fifoEndingChecked && parseInput(fifoEnding1) === 0 && parseInput(fifoEnding2) === 7 && parseInput(fifoEnding3) === 10 && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800">
                <CheckCircle2 className="h-5 w-5 inline mr-2" />
                Perfect! The remaining 7 units from Purchase 2 and all 10 units from Purchase 3 make up Ending Inventory.
              </p>
            </div>
          )}
          
          {fifoEndingChecked && !(parseInput(fifoEnding1) === 0 && parseInput(fifoEnding2) === 7 && parseInput(fifoEnding3) === 10) && (
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800">
                Check your math. If you assigned 15 + 13 = 28 units to COGS, which units are left in each layer?
              </p>
            </div>
          )}
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={validateFifoEnding}>
                Check Answer
              </Button>
              {fifoEndingChecked && parseInput(fifoEnding2) === 7 && parseInput(fifoEnding3) === 10 && (
                <Button onClick={() => setStep(4)} className="gap-2">
                  Next: LIFO Calculation
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // === STEP 4: LIFO COGS Assignment ===
  if (step === 4) {
    return (
      <Card className="border-red-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 4: LIFO — Cost of Goods Sold</CardTitle>
            <Badge className="bg-red-100 text-red-800">Step 4 of 5</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">LIFO Rule: Last-In, First-Out</h4>
            <p className="text-red-800">
              Under LIFO, assign the <strong>newest costs first</strong> to COGS. Start with Purchase 3, then Purchase 2, then Purchase 1 — until you've assigned all {SCENARIO.unitsSold} units.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Fill in: How many units from each layer go to COGS?</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3">Layer</th>
                    <th className="text-right py-2 px-3">Available</th>
                    <th className="text-right py-2 px-3">Cost/Unit</th>
                    <th className="text-right py-2 px-3">Units to COGS</th>
                    <th className="text-right py-2 px-3">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 1 (Oldest)</td>
                    <td className="text-right py-2 px-3">15</td>
                    <td className="text-right py-2 px-3">$30</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={lifoCogs1}
                        onChange={(e) => setLifoCogs1(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">${(parseInt(lifoCogs1) || 0) * 30}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 2</td>
                    <td className="text-right py-2 px-3">20</td>
                    <td className="text-right py-2 px-3">$35</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={lifoCogs2}
                        onChange={(e) => setLifoCogs2(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">${(parseInt(lifoCogs2) || 0) * 35}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 3 (Newest)</td>
                    <td className="text-right py-2 px-3">10</td>
                    <td className="text-right py-2 px-3">$40</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={lifoCogs3}
                        onChange={(e) => setLifoCogs3(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">${(parseInt(lifoCogs3) || 0) * 40}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600">Total Units to COGS</p>
                <p className={`text-2xl font-bold ${lifoCogsUnits === 28 ? "text-green-600" : "text-slate-900"}`}>
                  {lifoCogsUnits} / {SCENARIO.unitsSold}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Total COGS Value</p>
                <p className="text-2xl font-bold text-slate-900">${lifoCogsValue}</p>
              </div>
            </div>
          </div>
          
          {lifoCogsChecked && parseInput(lifoCogs3) === 10 && parseInput(lifoCogs2) === 18 && parseInput(lifoCogs1) === 0 && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800">
                <CheckCircle2 className="h-5 w-5 inline mr-2" />
                Correct! LIFO takes all 10 from the newest layer, then 18 from the middle layer.
              </p>
            </div>
          )}
          
          {lifoCogsChecked && !(parseInput(lifoCogs3) === 10 && parseInput(lifoCogs2) === 18 && parseInput(lifoCogs1) === 0) && (
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800">
                Not quite. Remember: LIFO assigns newest costs first. Start with Purchase 3, take all 10 units, then take 18 from Purchase 2 to reach 28 total.
              </p>
            </div>
          )}
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(3)}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={validateLifoCogs}>
                Check Answer
              </Button>
              {lifoCogsChecked && parseInput(lifoCogs3) === 10 && parseInput(lifoCogs2) === 18 && (
                <Button onClick={() => setStep(5)} className="gap-2">
                  Next: LIFO Ending Inventory
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // === STEP 5: LIFO Ending Inventory & Comparison ===
  if (step === 5) {
    return (
      <Card className="border-red-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 5: LIFO Ending Inventory & Compare</CardTitle>
            <Badge className="bg-red-100 text-red-800">Step 5 of 5</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">What Remains Under LIFO?</h4>
            <p className="text-red-800">
              Under LIFO, you assigned 10 + 18 = 28 units to COGS. The remaining units stay in Ending Inventory.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Fill in: Remaining units in each layer</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3">Layer</th>
                    <th className="text-right py-2 px-3">Original</th>
                    <th className="text-right py-2 px-3">To COGS</th>
                    <th className="text-right py-2 px-3">Remaining</th>
                    <th className="text-right py-2 px-3">Cost/Unit</th>
                    <th className="text-right py-2 px-3">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 1 (Oldest)</td>
                    <td className="text-right py-2 px-3">15</td>
                    <td className="text-right py-2 px-3">{lifoCogs1}</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={lifoEnding1}
                        onChange={(e) => setLifoEnding1(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">$30</td>
                    <td className="text-right py-2 px-3">${(parseInt(lifoEnding1) || 0) * 30}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 2</td>
                    <td className="text-right py-2 px-3">20</td>
                    <td className="text-right py-2 px-3">{lifoCogs2}</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={lifoEnding2}
                        onChange={(e) => setLifoEnding2(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">$35</td>
                    <td className="text-right py-2 px-3">${(parseInt(lifoEnding2) || 0) * 35}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 px-3">Purchase 3 (Newest)</td>
                    <td className="text-right py-2 px-3">10</td>
                    <td className="text-right py-2 px-3">{lifoCogs3}</td>
                    <td className="text-right py-2 px-2">
                      <Input
                        type="number"
                        value={lifoEnding3}
                        onChange={(e) => setLifoEnding3(e.target.value)}
                        className="w-20 text-right"
                      />
                    </td>
                    <td className="text-right py-2 px-3">$40</td>
                    <td className="text-right py-2 px-3">${(parseInt(lifoEnding3) || 0) * 40}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-slate-600">Total Ending Units</p>
                <p className={`text-2xl font-bold ${lifoEndingUnits === 17 ? "text-green-600" : "text-slate-900"}`}>
                  {lifoEndingUnits} / {ENDING_UNITS}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Ending Inventory Value</p>
                <p className="text-2xl font-bold text-slate-900">${lifoEndingValue}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">LIFO Gross Profit</p>
                <p className="text-2xl font-bold text-slate-900">${lifoGrossProfit}</p>
              </div>
            </div>
          </div>
          
          {lifoEndingChecked && parseInput(lifoEnding1) === 15 && parseInput(lifoEnding2) === 2 && parseInput(lifoEnding3) === 0 && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800">
                <CheckCircle2 className="h-5 w-5 inline mr-2" />
                Correct! All 15 units from Purchase 1 and 2 units from Purchase 2 remain in Ending Inventory.
              </p>
            </div>
          )}
          
          {lifoEndingChecked && !(parseInput(lifoEnding1) === 15 && parseInput(lifoEnding2) === 2 && parseInput(lifoEnding3) === 0) && (
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800">
                Check your math. If LIFO assigned 10 + 18 = 28 units to COGS, which units remain?
              </p>
            </div>
          )}
          
          {/* Comparison - Only show when LIFO is correct */}
          {lifoEndingChecked && parseInput(lifoEnding1) === 15 && parseInput(lifoEnding2) === 2 && parseInput(lifoEnding3) === 0 && (
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h4 className="font-bold text-purple-900 text-lg mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                FIFO vs. LIFO Comparison
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h5 className="font-semibold text-green-900 mb-3">FIFO Results</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">COGS:</span>
                      <span className="font-bold">${fifoCogsValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Ending Inventory:</span>
                      <span className="font-bold">${fifoEndingValue}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-slate-600">Gross Profit:</span>
                      <span className="font-bold text-green-700">${fifoGrossProfit}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-3">LIFO Results</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">COGS:</span>
                      <span className="font-bold">${lifoCogsValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Ending Inventory:</span>
                      <span className="font-bold">${lifoEndingValue}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-slate-600">Gross Profit:</span>
                      <span className="font-bold text-red-700">${lifoGrossProfit}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-100 rounded border border-blue-300">
                <p className="text-blue-900 text-sm">
                  <strong>Key Insight:</strong> In a rising-cost environment (${SCENARIO.layers[0].cost} → ${SCENARIO.layers[1].cost} → ${SCENARIO.layers[2].cost}), 
                  FIFO shows <strong>higher gross profit (${fifoGrossProfit})</strong> and <strong>higher ending inventory (${fifoEndingValue})</strong>, 
                  while LIFO shows <strong>lower gross profit (${lifoGrossProfit})</strong> and <strong>lower ending inventory (${lifoEndingValue})</strong>.
                </p>
              </div>
            </div>
          )}
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(4)}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex gap-2">
              {(!lifoEndingChecked || lifoEndingUnits !== 17) && (
                <Button variant="outline" onClick={validateLifoEnding}>
                  Check Answer
                </Button>
              )}
              {lifoEndingChecked && parseInput(lifoEnding1) === 15 && parseInput(lifoEnding2) === 2 && parseInput(lifoEnding3) === 0 && (
                <Button onClick={resetAll} className="gap-2">
                  <Calculator className="h-4 w-4 mr-2" />
                  Practice Again
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return null
}