"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, RotateCcw, CheckCircle2, Lightbulb } from "lucide-react"

interface InventoryLayer {
  id: string
  label: string
  units: number
  costPerUnit: number
}

type Method = "FIFO" | "LIFO" | null
type Step = "intro" | "select" | "assign" | "complete"

const INITIAL_LAYERS: InventoryLayer[] = [
  { id: "oldest", label: "Day 1 (Oldest)", units: 8, costPerUnit: 45 },
  { id: "middle", label: "Day 5", units: 12, costPerUnit: 48 },
  { id: "newest", label: "Day 12 (Newest)", units: 10, costPerUnit: 52 },
]

const TOTAL_SOLD = 20
const SELLING_PRICE = 75
const TOTAL_INVENTORY_VALUE = INITIAL_LAYERS.reduce((sum, l) => sum + l.units * l.costPerUnit, 0)

export default function FIFOLIFOVisualizer() {
  // Core state
  const [step, setStep] = useState<Step>("intro")
  const [method, setMethod] = useState<Method>(null)
  
  // Inventory state - tracks remaining units in each layer
  const [oldestUnits, setOldestUnits] = useState(8)
  const [middleUnits, setMiddleUnits] = useState(12)
  const [newestUnits, setNewestUnits] = useState(10)
  
  // Assignment state - what went to COGS and Ending Inventory
  const [cogsAssignments, setCogsAssignments] = useState<Array<{units: number, cost: number}>>([])
  const [endingAssignments, setEndingAssignments] = useState<Array<{units: number, cost: number}>>([])
  
  // Helper to get remaining units for a layer
  const getRemainingUnits = (layerId: string): number => {
    if (layerId === "oldest") return oldestUnits
    if (layerId === "middle") return middleUnits
    if (layerId === "newest") return newestUnits
    return 0
  }
  
  // Calculations
  const cogsUnits = cogsAssignments.reduce((sum, a) => sum + a.units, 0)
  const endingUnits = endingAssignments.reduce((sum, a) => sum + a.units, 0)
  const cogsValue = cogsAssignments.reduce((sum, a) => sum + a.units * a.cost, 0)
  const endingValue = endingAssignments.reduce((sum, a) => sum + a.units * a.cost, 0)
  const grossProfit = (TOTAL_SOLD * SELLING_PRICE) - cogsValue
  const totalRemaining = oldestUnits + middleUnits + newestUnits
  
  // Check if all units are assigned
  const cogsComplete = cogsUnits === TOTAL_SOLD
  const endingComplete = endingUnits === 10
  const allComplete = cogsComplete && endingComplete
  
  // Color for layer
  const getLayerColor = (cost: number): string => {
    if (cost === 45) return "bg-blue-800"
    if (cost === 48) return "bg-blue-500"
    return "bg-blue-300"
  }
  
  const getLayerBorderColor = (cost: number): string => {
    if (cost === 45) return "border-blue-300 bg-blue-50"
    if (cost === 48) return "border-blue-400 bg-blue-100"
    return "border-blue-500 bg-blue-200"
  }
  
  // Move unit to COGS
  const moveToCOGS = (layerId: string) => {
    if (cogsComplete) return // Already have 20 units
    
    const cost = layerId === "oldest" ? 45 : layerId === "middle" ? 48 : 52
    if (getRemainingUnits(layerId) === 0) return
    
    // Decrease inventory
    if (layerId === "oldest") setOldestUnits(u => u - 1)
    if (layerId === "middle") setMiddleUnits(u => u - 1)
    if (layerId === "newest") setNewestUnits(u => u - 1)
    
    // Add to COGS
    setCogsAssignments(prev => {
      const existing = prev.find(a => a.cost === cost)
      if (existing) {
        return prev.map(a => a.cost === cost ? { ...a, units: a.units + 1 } : a)
      }
      return [...prev, { units: 1, cost: cost }].sort((a, b) => a.cost - b.cost)
    })
  }
  
  // Move unit to Ending Inventory
  const moveToEnding = (layerId: string) => {
    if (endingUnits >= 10) return // Already have 10 units
    
    const cost = layerId === "oldest" ? 45 : layerId === "middle" ? 48 : 52
    if (getRemainingUnits(layerId) === 0) return
    
    // Decrease inventory
    if (layerId === "oldest") setOldestUnits(u => u - 1)
    if (layerId === "middle") setMiddleUnits(u => u - 1)
    if (layerId === "newest") setNewestUnits(u => u - 1)
    
    // Add to Ending Inventory
    setEndingAssignments(prev => {
      const existing = prev.find(a => a.cost === cost)
      if (existing) {
        return prev.map(a => a.cost === cost ? { ...a, units: a.units + 1 } : a)
      }
      return [...prev, { units: 1, cost: cost }].sort((a, b) => a.cost - b.cost)
    })
  }
  
  // Return unit fromCOGS back to inventory
  const returnFromCOGS = (cost: number) => {
    const assignment = cogsAssignments.find(a => a.cost === cost)
    if (!assignment || assignment.units === 0) return
    
    // Return toinventory
    if (cost === 45) setOldestUnits(u => u + 1)
    if (cost === 48) setMiddleUnits(u => u + 1)
    if (cost === 52) setNewestUnits(u => u + 1)
    
    // Remove from COGS
    setCogsAssignments(prev => {
      const updated = prev.map(a => a.cost === cost ? { ...a, units: a.units - 1 } : a)
      return updated.filter(a => a.units > 0)
    })
  }
  
  // Return unit from Ending back to inventory
  const returnFromEnding = (cost: number) => {
    const assignment = endingAssignments.find(a => a.cost === cost)
    if (!assignment || assignment.units === 0) return
    
    // Return to inventory
    if (cost === 45) setOldestUnits(u => u + 1)
    if (cost === 48) setMiddleUnits(u => u + 1)
    if (cost ===52) setNewestUnits(u => u + 1)
    
    // Remove from Ending
    setEndingAssignments(prev => {
      const updated = prev.map(a => a.cost === cost ? { ...a, units: a.units - 1 } : a)
      return updated.filter(a => a.units > 0)
    })
  }
  
  // Reset everything
  const handleReset = () => {
    setOldestUnits(8)
    setMiddleUnits(12)
    setNewestUnits(10)
    setCogsAssignments([])
    setEndingAssignments([])
  }
  
  // Start over completely
  const handleStartOver = () => {
    handleReset()
    setMethod(null)
    setStep("select")
  }
  
  // Get hint for next action
  const getHint = (): string => {
    if (!method) return ""
    
    if (!cogsComplete) {
      const remaining = TOTAL_SOLD - cogsUnits
      if (method === "FIFO") {
        if (oldestUnits > 0) return `FIFO: Assign from Oldest layer ($45). Need ${remaining} more for COGS.`
        if (middleUnits > 0) return `FIFO: Now assign from Day 5 layer ($48). Need ${remaining} more.`
        return `FIFO: Finally assign from Newest layer ($52). Need ${remaining} more.`
      } else {
        if (newestUnits > 0) return `LIFO: Assign from Newest layer ($52). Need ${remaining} more for COGS.`
        if (middleUnits > 0) return `LIFO: Now assign from Day 5 layer ($48). Need ${remaining} more.`
        return `LIFO: Finally assign from Oldest layer ($45). Need ${remaining} more.`
      }
    }
    
    if (!endingComplete) {
      const remaining = 10 - endingUnits
      return `All sold! Now move ${remaining} remaining units to Ending Inventory.`
    }
    
    return "Great! Click 'See Results' to compare."
  }
  
  // === Render Steps ===
  
  // Intro Screen
  if (step === "intro") {
    return (
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900">
            Sarah's Premium Client Kits: Cost Assignment Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">The Scenario</h3>
            <p className="text-blue-800">
              Sarah's business has <strong>30 Premium Client Kits</strong> in inventory from three purchases 
              at different costs. This month, she <strong>sold 20 units for $75 each</strong>.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-3">
            <h4 className="font-semibold text-slate-900">Inventory Layers (Stacked like boxes)</h4>
            <div className="space-y-2">
              {INITIAL_LAYERS.slice().reverse().map((layer) => (
                <div key={layer.id} className={`p-3 rounded text-white ${getLayerColor(layer.costPerUnit)}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{layer.label}</span>
                    <span className="font-mono">{layer.units} units @ ${layer.costPerUnit}</span>
                  </div>
                  <div className="text-right text-sm opacity-90">
                    = ${layer.units * layer.costPerUnit}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-slate-100 rounded font-semibold text-slate-900">
              Total: 30 units = $1,456
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Your Task</h4>
            <p className="text-amber-800">
              You'll choose a method (FIFO or LIFO), then <strong>manually assign costs</strong> to 
              Cost of Goods Sold and Ending Inventory to see how each method creates different financial results.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={() => setStep("select")}
              className="gap-2"
            >
              Continue to Method Selection
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  // Method Selection
  if (step === "select") {
    return (
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900">Choose Your Cost Assignment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-600">
            When you sell products, <strong>which costs should go to COGS?</strong> The method you choose determines the answer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* FIFO Option */}
            <button
              type="button"
              onClick={() => {setMethod("FIFO"); setStep("assign"); }}
              className="p-6 rounded-lg border-2 border-green-400 bg-green-50 hover:bg-green-100 transition-colors text-left cursor-pointer"
            >
              <Badge className="bg-green-600 mb-2">FIFO</Badge>
              <h3 className="font-bold text-green-900 text-lg">First-In, First-Out</h3>
              <p className="text-sm text-green-700 mb-3">
                The <strong>oldest, cheapest</strong> costs go to COGS first.
              </p>
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="text-xs text-green-800">
                  Imagine taking from the <strong>bottom of the stack</strong>.
                  In rising costs, this shows higher profit.
                </p>
              </div>
            </button>
            
            {/* LIFO Option */}
            <button
              type="button"
              onClick={() => { setMethod("LIFO"); setStep("assign"); }}
              className="p-6 rounded-lg border-2 border-red-400 bg-red-50 hover:bg-red-100 transition-colors text-left cursor-pointer"
            >
              <Badge className="bg-red-600 mb-2">LIFO</Badge>
              <h3 className="font-bold text-red-900 text-lg">Last-In, First-Out</h3>
              <p className="text-sm text-red-700 mb-3">
                The <strong>newest, most expensive</strong> costs go to COGS first.
              </p>
              <div className="bg-white p-3 rounded border border-red-200">
                <p className="text-xs text-red-800">
                  Imagine taking from the <strong>top of the stack</strong>.
                  In rising costs, this shows lower profit.
                </p>
              </div>
            </button>
          </div>
          
          <div className="text-center">
            <Button variant="outline" onClick={() => setStep("intro")}>
              ← Back to Instructions
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  // Assignment Activity
  if (step === "assign") {
    return (
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-xl text-slate-900">
                Assigning Costs: {method} Method
              </CardTitle>
              <p className="text-sm text-slate-600 mt-1">
                Move units from the Inventory Stack to COGS and Ending Inventory
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={method === "FIFO" ? "bg-green-600" : "bg-red-600"}>
                {method}
              </Badge>
              <Button variant="outline" size="sm" onClick={handleStartOver}>
                Change Method
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Hint Banner */}
          {!allComplete && (
            <div className={`p-4 rounded-lg ${method === "FIFO" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
              <div className="flex items-start gap-2">
                <Lightbulb className={`h-5 w-5 mt-0.5 flex-shrink-0 ${method === "FIFO" ? "text-green-600" : "text-red-600"}`} />
                <p className={`font-medium ${method === "FIFO" ? "text-green-900" : "text-red-900"}`}>
                  {getHint()}
                </p>
              </div>
            </div>
          )}
          
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* COGS Column */}
            <div className="space-y-2">
              <div className="text-center">
                <h3 className="font-bold text-slate-900">COGS</h3>
                <p className="text-xs text-slate-500">Cost of Goods Sold</p>
                <p className={`text-sm font-medium ${cogsComplete ? "text-green-700" : "text-orange-700"}`}>
                  {cogsUnits} / {TOTAL_SOLD} units
                </p>
              </div>
              
              <div className={`p-3 rounded-lg min-h-[200px] ${cogsAssignments.length > 0 ? "bg-orange-50 border-2 border-orange-300" : "bg-slate-50 border border-slate-200"}`}>
                {cogsAssignments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm">
                    <p>Click arrows from</p>
                    <p>Inventory Stack to</p>
                    <p>assign units here</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {cogsAssignments.map((a) => (
                      <div key={a.cost} className={`p-2 rounded border ${getLayerBorderColor(a.cost)}`}>
                        <div className="flex justify-between items-center">
                          <button
                            type="button"
                            onClick={() => returnFromCOGS(a.cost)}
                            className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-white"
                            title="Return to inventory"
                          >
                            ←
                          </button>
                          <div className="text-center">
                            <p className="font-bold text-slate-900">{a.units} @ ${a.cost}</p>
                            <p className="text-xs text-slate-600">= ${a.units * a.cost}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-2 bg-orange-100 rounded text-center">
                <p className="text-xs text-orange-700">Total COGS</p>
                <p className="text-2xl font-bold text-orange-900">${cogsValue}</p>
              </div>
            </div>
            
            {/* Inventory Stack Column */}
            <div className="space-y-2">
              <div className="text-center">
                <h3 className="font-bold text-slate-900">Inventory Stack</h3>
                <p className="text-xs text-slate-500">Remaining Units</p>
                <p className={`text-sm font-medium ${totalRemaining === 10 ? "text-green-700" : "text-blue-700"}`}>
                  {totalRemaining} units left
                </p>
              </div>
              
              <div className="p-2 bg-slate-50 rounded-lg min-h-[200px] flex flex-col justify-end">
                {/* Show layers from top (newest) to bottom (oldest) */}
                <div className="space-y-1">
                  {/* Newest layer */}
                  <div className={`p-3 rounded ${getLayerColor(52)} text-white ${newestUnits === 0 ? "opacity-30" : ""}`}>
                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => moveToCOGS("newest")}
                        disabled={newestUnits === 0 || cogsComplete}
                        className="bg-white/20 hover:bg-white/30 rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ← COGS
                      </button>
                      <div className="text-center">
                        <p className="font-bold">{newestUnits} units</p>
                        <p className="text-xs opacity-90">@ $52 = ${newestUnits * 52}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => moveToEnding("newest")}
                        disabled={newestUnits === 0 || endingComplete}
                        className="bg-white/20 hover:bg-white/30 rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        END →
                      </button>
                    </div>
                    <p className="text-xs text-center mt-1 opacity-75">Newest</p>
                  </div>
                  
                  {/* Middle layer */}
                  <div className={`p-3 rounded ${getLayerColor(48)} text-white ${middleUnits === 0 ? "opacity-30" : ""}`}>
                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => moveToCOGS("middle")}
                        disabled={middleUnits === 0 || cogsComplete}
                        className="bg-white/20 hover:bg-white/30 rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ← COGS
                      </button>
                      <div className="text-center">
                        <p className="font-bold">{middleUnits} units</p>
                        <p className="text-xs opacity-90">@ $48 = ${middleUnits * 48}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => moveToEnding("middle")}
                        disabled={middleUnits === 0 || endingComplete}
                        className="bg-white/20 hover:bg-white/30 rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        END →
                      </button>
                    </div>
                    <p className="text-xs text-center mt-1 opacity-75">Day 5</p>
                  </div>
                  
                  {/* Oldest layer */}
                  <div className={`p-3 rounded ${getLayerColor(45)} text-white ${oldestUnits === 0 ? "opacity-30" : ""}`}>
                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => moveToCOGS("oldest")}
                        disabled={oldestUnits === 0 || cogsComplete}
                        className="bg-white/20 hover:bg-white/30 rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ← COGS
                      </button>
                      <div className="text-center">
                        <p className="font-bold">{oldestUnits} units</p>
                        <p className="text-xs opacity-90">@ $45 = ${oldestUnits * 45}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => moveToEnding("oldest")}
                        disabled={oldestUnits === 0 || endingComplete}
                        className="bg-white/20 hover:bg-white/30 rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        END →
                      </button>
                    </div>
                    <p className="text-xs text-center mt-1 opacity-75">Oldest</p>
                  </div>
                </div>
              </div>
              
              <div className="p-2 bg-blue-100 rounded text-center">
                <p className="text-xs text-blue-700">Stack Value</p>
                <p className="text-2xl font-bold text-blue-900">
                  ${oldestUnits * 45+ middleUnits * 48 + newestUnits * 52}
                </p>
              </div>
            </div>
            
            {/* Ending Inventory Column */}
            <div className="space-y-2">
              <div className="text-center">
                <h3 className="font-bold text-slate-900">Ending Inventory</h3>
                <p className="text-xs text-slate-500">Units Remaining</p>
                <p className={`text-sm font-medium ${endingComplete ? "text-green-700" : "text-purple-700"}`}>
                  {endingUnits} / 10 units
                </p>
              </div>
              
              <div className={`p-3 rounded-lg min-h-[200px] ${endingAssignments.length > 0 ? "bg-purple-50 border-2 border-purple-300" : "bg-slate-50 border border-slate-200"}`}>
                {endingAssignments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm">
                    <p>Click arrows from</p>
                    <p>Inventory Stack to</p>
                    <p>keep units here</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {endingAssignments.map((a) => (
                      <div key={a.cost} className={`p-2 rounded border ${getLayerBorderColor(a.cost)}`}>
                        <div className="flex justify-between items-center">
                          <button
                            type="button"
                            onClick={() => returnFromEnding(a.cost)}
                            className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-white"
                            title="Return to inventory"
                          >
                            ←
                          </button>
                          <div className="text-center">
                            <p className="font-bold text-slate-900">{a.units} @ ${a.cost}</p>
                            <p className="text-xs text-slate-600">= ${a.units * a.cost}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-2 bg-purple-100 rounded text-center">
                <p className="text-xs text-purple-700">Total Ending</p>
                <p className="text-2xl font-bold text-purple-900">${endingValue}</p>
              </div>
            </div>
          </div>
          
          {/* Progress & Verification */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-500">COGS Units</p>
                <p className={`text-xl font-bold ${cogsComplete ? "text-green-600" : "text-slate-900"}`}>
                  {cogsUnits} / {TOTAL_SOLD}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Ending Units</p>
                <p className={`text-xl font-bold ${endingComplete ? "text-green-600" : "text-slate-900"}`}>
                  {endingUnits} / 10
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Revenue</p>
                <p className="text-xl font-bold text-slate-900">${TOTAL_SOLD * SELLING_PRICE}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Gross Profit</p>
                <p className="text-xl font-bold text-slate-900">${grossProfit}</p>
              </div>
            </div>
            
            <div className="mt-3 p-2 rounded bg-amber-50 border border-amber-200 text-center">
              <p className="text-sm text-amber-800">
                <strong>Check:</strong> COGS (${cogsValue}) + Ending (${endingValue}) = ${cogsValue + endingValue}
                {cogsValue + endingValue === TOTAL_INVENTORY_VALUE ? (
                  <span className="text-green-700 ml-2">✓ Matches $1,456</span>
                ) : (
                  <span className="text-red-700 ml-2">✗ Should be $1,456</span>
                )}
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Assignment
            </Button>
            
            {allComplete && (
              <Button onClick={() => setStep("complete")} className="gap-2">
                <CheckCircle2 className="h-4 w-4" />
                See Results
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
  
  // Completion Screen
  return (
    <Card className="border-slate-200 bg-white">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">
          {method} Assignment Complete
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className={`p-6 rounded-lg ${method === "FIFO" ? "bg-green-50 border-2 border-green-300" : "bg-red-50 border-2 border-red-300"}`}>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm text-slate-600">Cost of Goods Sold</p>
              <p className="text-4xl font-bold text-slate-900">${cogsValue}</p>
              <p className="text-xs text-slate-500">{TOTAL_SOLD} units @ various costs</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Ending Inventory</p>
              <p className="text-4xl font-bold text-slate-900">${endingValue}</p>
              <p className="text-xs text-slate-500">10 units remaining</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Gross Profit</p>
              <p className="text-4xl font-bold text-slate-900">${grossProfit}</p>
              <p className="text-xs text-slate-500">{TOTAL_SOLD} × $75 minus COGS</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">What This Means</h4>
          <p className="text-blue-800">
            {method === "FIFO" ? (
              <>
                You assigned the <strong>oldest, cheapest costs</strong> to COGS first. 
                Since costs were rising ($45 → $48 → $52), FIFO shows <strong>lower COGS</strong>, 
                <strong>higher gross profit (${grossProfit})</strong>, and higher ending inventory value.
                This looks better on investor reports but may result in higher taxes.
              </>
            ) : (
              <>
                You assigned the <strong>newest, most expensive costs</strong> to COGS first. 
                Since costs were rising ($52 ← $48 ← $45), LIFO shows <strong>higher COGS</strong>, 
                <strong>lower gross profit (${grossProfit})</strong>, and lower ending inventory value.
                This reduces taxable income and is often used for tax planning.
              </>
            )}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button variant="outline" onClick={handleStartOver}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Try the Other Method
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}