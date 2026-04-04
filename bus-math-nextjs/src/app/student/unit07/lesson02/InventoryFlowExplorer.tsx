"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Layers, RotateCcw, CheckCircle2, Lightbulb } from "lucide-react"

interface LayerState {
  units: number
  costPerUnit: number
  totalValue: number
}

interface SaleRecord {
  saleNumber: number
  layerChosen: 1 | 2
  costAssigned: number
}

const INITIAL_LAYER_1: LayerState = { units: 10, costPerUnit: 18, totalValue: 180 }
const INITIAL_LAYER_2: LayerState = { units: 20, costPerUnit: 20, totalValue: 400 }
const TOTAL_SALES_TO_MAKE = 15

export default function InventoryFlowExplorer() {
  const [layer1, setLayer1] = useState<LayerState>({ ...INITIAL_LAYER_1 })
  const [layer2, setLayer2] = useState<LayerState>({ ...INITIAL_LAYER_2 })
  const [salesMade, setSalesMade] = useState(0)
  const [totalCOGS, setTotalCOGS] = useState(0)
  const [saleHistory, setSaleHistory] = useState<SaleRecord[]>([])
  const [showDiscovery, setShowDiscovery] = useState(false)

  const goodsAvailableUnits = INITIAL_LAYER_1.units + INITIAL_LAYER_2.units
  const goodsAvailableValue = INITIAL_LAYER_1.totalValue + INITIAL_LAYER_2.totalValue
  const endingInventoryUnits = layer1.units + layer2.units
  const endingInventoryValue = layer1.totalValue + layer2.totalValue

  const canSellFromLayer1 = layer1.units > 0
  const canSellFromLayer2 = layer2.units > 0
  const isComplete = salesMade >= TOTAL_SALES_TO_MAKE

  const sellFromLayer = useCallback((layerNum: 1 | 2) => {
    if (salesMade >= TOTAL_SALES_TO_MAKE) return

    if (layerNum === 1 && canSellFromLayer1) {
      setLayer1(prev => ({
        ...prev,
        units: prev.units - 1,
        totalValue: (prev.units - 1) * prev.costPerUnit
      }))
      setTotalCOGS(prev => prev + layer1.costPerUnit)
      setSaleHistory(prev => [...prev, {
        saleNumber: salesMade + 1,
        layerChosen: 1,
        costAssigned: layer1.costPerUnit
      }])
      setSalesMade(prev => prev + 1)
    } else if (layerNum === 2 && canSellFromLayer2) {
      setLayer2(prev => ({
        ...prev,
        units: prev.units - 1,
        totalValue: (prev.units - 1) * prev.costPerUnit
      }))
      setTotalCOGS(prev => prev + layer2.costPerUnit)
      setSaleHistory(prev => [...prev, {
        saleNumber: salesMade + 1,
        layerChosen: 2,
        costAssigned: layer2.costPerUnit
      }])
      setSalesMade(prev => prev + 1)
    }
  }, [salesMade, canSellFromLayer1, canSellFromLayer2, layer1.costPerUnit, layer2.costPerUnit])

  const resetSimulation = useCallback(() => {
    setLayer1({ ...INITIAL_LAYER_1 })
    setLayer2({ ...INITIAL_LAYER_2 })
    setSalesMade(0)
    setTotalCOGS(0)
    setSaleHistory([])
    setShowDiscovery(false)
  }, [])

  // Calculate min/max possible COGS for the discovery section
  const minPossibleCOGS = TOTAL_SALES_TO_MAKE * INITIAL_LAYER_1.costPerUnit // All from layer 1
  const maxPossibleCOGS = TOTAL_SALES_TO_MAKE * INITIAL_LAYER_2.costPerUnit // All from layer 2

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <Card className="border-sky-200 bg-sky-50">
        <CardContent className="pt-4">
          <p className="text-sky-900">
            <strong>Your task:</strong> Sarah needs to sell <strong>15 kits</strong>. For each sale, 
            decide which inventory layer the cost should come from. Watch how your choices affect 
            COGS and Ending Inventory.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left side: Inventory layers visualization */}
        <div className="space-y-4">
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Inventory Layers (Your Shelf)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Layer 2 (top, newer) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-amber-800">Layer 2 (Purchased @ $20)</span>
                  <span className="text-amber-700">{layer2.units} kits × $20 = ${layer2.totalValue}</span>
                </div>
                <div className="h-16 bg-amber-100 rounded-lg border-2 border-amber-300 flex items-center justify-center overflow-hidden">
                  <div className="flex gap-1 flex-wrap justify-center px-2">
                    {Array.from({ length: layer2.units }).map((_, i) => (
                      <div key={i} className="w-6 h-10 bg-amber-400 rounded border border-amber-500 flex items-center justify-center text-xs font-bold text-amber-900">
                        $20
                      </div>
                    ))}
                    {layer2.units === 0 && (
                      <span className="text-amber-400 italic">Empty</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Layer 1 (bottom, older) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-blue-800">Layer 1 (Beginning @ $18)</span>
                  <span className="text-blue-700">{layer1.units} kits × $18 = ${layer1.totalValue}</span>
                </div>
                <div className="h-16 bg-blue-100 rounded-lg border-2 border-blue-300 flex items-center justify-center overflow-hidden">
                  <div className="flex gap-1 flex-wrap justify-center px-2">
                    {Array.from({ length: layer1.units }).map((_, i) => (
                      <div key={i} className="w-6 h-10 bg-blue-400 rounded border border-blue-500 flex items-center justify-center text-xs font-bold text-blue-900">
                        $18
                      </div>
                    ))}
                    {layer1.units === 0 && (
                      <span className="text-blue-400 italic">Empty</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="pt-2 border-t border-slate-200">
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Goods Available for Sale:</span>
                  <span>{goodsAvailableUnits} kits = ${goodsAvailableValue}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sell buttons */}
          <Card className="border-slate-200 bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-900 text-lg">
                Make a Sale (Sold: {salesMade}/{TOTAL_SALES_TO_MAKE})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => sellFromLayer(1)}
                  disabled={!canSellFromLayer1 || isComplete}
                  variant="outline"
                  className={`h-auto py-4 flex-col ${canSellFromLayer1 && !isComplete ? 'border-blue-400 hover:bg-blue-50' : 'opacity-50'}`}
                >
                  <span className="text-sm font-medium">Sell from Layer 1</span>
                  <span className="text-lg font-bold text-blue-600">$18 COGS</span>
                  {!canSellFromLayer1 && <span className="text-xs text-slate-400">(Empty)</span>}
                </Button>
                <Button
                  onClick={() => sellFromLayer(2)}
                  disabled={!canSellFromLayer2 || isComplete}
                  variant="outline"
                  className={`h-auto py-4 flex-col ${canSellFromLayer2 && !isComplete ? 'border-amber-400 hover:bg-amber-50' : 'opacity-50'}`}
                >
                  <span className="text-sm font-medium">Sell from Layer 2</span>
                  <span className="text-lg font-bold text-amber-600">$20 COGS</span>
                  {!canSellFromLayer2 && <span className="text-xs text-slate-400">(Empty)</span>}
                </Button>
              </div>

              {isComplete && (
                <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">All 15 sales complete! Check your results below.</span>
                </div>
              )}

              <Button
                onClick={resetSimulation}
                variant="ghost"
                className="w-full text-slate-600"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset and Try Again
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right side: Results and formula */}
        <div className="space-y-4">
          {/* The Formula in Action */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">The Formula Updates Live</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between items-center p-2 bg-slate-100 rounded">
                  <span>Beginning Inventory</span>
                  <span className="font-semibold">${INITIAL_LAYER_1.totalValue}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-100 rounded">
                  <span>+ Purchases</span>
                  <span className="font-semibold">${INITIAL_LAYER_2.totalValue}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-100 rounded border border-green-300">
                  <span>= Goods Available for Sale</span>
                  <span className="font-bold text-green-800">${goodsAvailableValue}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-100 rounded border border-red-300">
                  <span>- COGS (your choices)</span>
                  <span className="font-bold text-red-800">${totalCOGS}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-100 rounded border-2 border-blue-400">
                  <span>= Ending Inventory</span>
                  <span className="font-bold text-blue-800">${endingInventoryValue}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Ending units on shelf:</span>
                  <span className="font-semibold">{endingInventoryUnits} kits</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sale History */}
          {saleHistory.length > 0 && (
            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-900 text-lg">Your Cost Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {saleHistory.map((sale) => (
                    <Badge
                      key={sale.saleNumber}
                      variant="outline"
                      className={sale.layerChosen === 1 ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-amber-100 text-amber-800 border-amber-300'}
                    >
                      #{sale.saleNumber}: ${sale.costAssigned}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Discovery when complete */}
          {isComplete && (
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  What Did You Discover?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-purple-950">
                <p>
                  Your choices created:
                </p>
                <div className="bg-white p-3 rounded-lg border border-purple-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-purple-600">Your COGS</p>
                      <p className="text-2xl font-bold text-purple-900">${totalCOGS}</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-600">Your Ending Inventory</p>
                      <p className="text-2xl font-bold text-purple-900">${endingInventoryValue}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-100 p-3 rounded-lg border border-purple-300">
                  <p className="text-sm font-medium text-purple-800 mb-2">The range of possibilities:</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-blue-50 p-2 rounded border border-blue-200">
                      <p className="font-semibold text-blue-800">All from Layer 1</p>
                      <p className="text-blue-600">COGS: ${minPossibleCOGS}, EI: ${goodsAvailableValue - minPossibleCOGS}</p>
                    </div>
                    <div className="bg-amber-50 p-2 rounded border border-amber-200">
                      <p className="font-semibold text-amber-800">All from Layer 2</p>
                      <p className="text-amber-600">COGS: ${maxPossibleCOGS}, EI: ${goodsAvailableValue - maxPossibleCOGS}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-purple-800">
                  <strong>Key insight:</strong> The same 15 physical sales can produce different COGS 
                  and Ending Inventory values. That's why businesses need a consistent rule for 
                  cost assignment—which you'll learn in Lesson 3.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
