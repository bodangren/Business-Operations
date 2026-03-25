"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight, RotateCcw, Eye, EyeOff, HelpCircle } from "lucide-react"

interface TimelineEvent {
  id: string
  day: number
  type: "start" | "purchase" | "sale"
  description: string
  unitsIn: number
  unitsOut: number
  costPerUnit: number | null
  // Expected answers
  expectedUnitsOnHand: number
  expectedPurchasesValue: number
  expectedCOGS: number
  expectedInventoryValue: number
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "event-1",
    day: 1,
    type: "start",
    description: "Month begins. Sarah counts what's already on the shelf.",
    unitsIn: 10,
    unitsOut: 0,
    costPerUnit: 18,
    expectedUnitsOnHand: 10,
    expectedPurchasesValue: 0,
    expectedCOGS: 0,
    expectedInventoryValue: 180
  },
  {
    id: "event-2",
    day: 3,
    type: "purchase",
    description: "Sarah orders more kits from her supplier.",
    unitsIn: 20,
    unitsOut: 0,
    costPerUnit: 20,
    expectedUnitsOnHand: 30,
    expectedPurchasesValue: 400,
    expectedCOGS: 0,
    expectedInventoryValue: 580
  },
  {
    id: "event-3",
    day: 8,
    type: "sale",
    description: "TechStart sells 8 kits to a client.",
    unitsIn: 0,
    unitsOut: 8,
    costPerUnit: null,
    expectedUnitsOnHand: 22,
    expectedPurchasesValue: 400,
    expectedCOGS: 144, // We'll say these came from Layer 1 (8 × $18)
    expectedInventoryValue: 436
  },
  {
    id: "event-4",
    day: 15,
    type: "purchase",
    description: "Supplier prices rise. Sarah buys more kits at the new price.",
    unitsIn: 10,
    unitsOut: 0,
    costPerUnit: 22,
    expectedUnitsOnHand: 32,
    expectedPurchasesValue: 620,
    expectedCOGS: 144,
    expectedInventoryValue: 656
  },
  {
    id: "event-5",
    day: 22,
    type: "sale",
    description: "A bigger client order. Sarah sells 12 kits.",
    unitsIn: 0,
    unitsOut: 12,
    costPerUnit: null,
    expectedUnitsOnHand: 20,
    expectedPurchasesValue: 620,
    expectedCOGS: 236, // 2 remaining from L1 ($36) + 10 from L2 ($200)
    expectedInventoryValue: 420
  },
  {
    id: "event-6",
    day: 28,
    type: "sale",
    description: "End-of-month rush. Sarah sells 5 more kits.",
    unitsIn: 0,
    unitsOut: 5,
    costPerUnit: null,
    expectedUnitsOnHand: 15,
    expectedPurchasesValue: 620,
    expectedCOGS: 340, // 5 from L2 ($100)
    expectedInventoryValue: 280
  }
]

export default function InventoryTimelineLab() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, { unitsOnHand: string; inventoryValue: string }>>({})
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const [showAllRevealed, setShowAllRevealed] = useState(false)

  const currentEvent = timelineEvents[currentStep]
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === timelineEvents.length - 1

  // Running totals based on correct answers up to current step
  const getRunningTotals = (stepIndex: number) => {
    let unitsOnHand = 0
    let purchasesValue = 0
    let cogs = 0
    let inventoryValue = 0

    for (let i = 0; i <= stepIndex; i++) {
      const event = timelineEvents[i]
      unitsOnHand = event.expectedUnitsOnHand
      purchasesValue = event.expectedPurchasesValue
      cogs = event.expectedCOGS
      inventoryValue = event.expectedInventoryValue
    }

    return { unitsOnHand, purchasesValue, cogs, inventoryValue }
  }

  const totals = getRunningTotals(currentStep)

  const handleAnswerChange = (eventId: string, field: "unitsOnHand" | "inventoryValue", value: string) => {
    setAnswers(prev => ({
      ...prev,
      [eventId]: {
        ...prev[eventId],
        [field]: value
      }
    }))
  }

  const handleReveal = (eventId: string) => {
    setRevealed(prev => ({ ...prev, [eventId]: true }))
  }

  const goToNext = () => {
    if (!isLastStep) {
      handleReveal(currentEvent.id)
      setCurrentStep(prev => prev + 1)
    }
  }

  const goToPrev = () => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const resetLab = () => {
    setCurrentStep(0)
    setAnswers({})
    setRevealed({})
    setShowAllRevealed(false)
  }

  const revealAll = () => {
    const allRevealed: Record<string, boolean> = {}
    timelineEvents.forEach(e => allRevealed[e.id] = true)
    setRevealed(allRevealed)
    setShowAllRevealed(true)
  }

  const isRevealed = revealed[currentEvent.id] || showAllRevealed

  // Check if answer is correct
  const checkAnswer = (eventId: string, field: "unitsOnHand" | "inventoryValue", expected: number) => {
    const answer = answers[eventId]?.[field]
    if (!answer) return null
    return parseInt(answer) === expected
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <Card className="border-emerald-200 bg-emerald-50">
        <CardContent className="pt-4">
          <p className="text-emerald-900 font-semibold mb-2">📝 How to Complete This Activity:</p>
          <ol className="text-emerald-800 space-y-1 list-decimal list-inside">
            <li>Read the <strong>Transaction Details</strong> to see what happened (purchase or sale)</li>
            <li>Check the <strong>Starting Point</strong> to see where you're beginning from</li>
            <li>Calculate the new <strong>units on hand</strong> and <strong>inventory value</strong></li>
            <li>Click <strong>"Check My Answer"</strong> to see if you're correct</li>
            <li>Click <strong>"Next Event"</strong> to continue through the month</li>
          </ol>
        </CardContent>
      </Card>

      {/* Timeline Progress */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="flex items-center">
              <button
                onClick={() => {
                  if (index <= currentStep || showAllRevealed) {
                    setCurrentStep(index)
                  }
                }}
                disabled={index > currentStep && !showAllRevealed}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  index === currentStep
                    ? "bg-emerald-600 text-white ring-2 ring-emerald-300"
                    : index < currentStep || showAllRevealed
                    ? "bg-emerald-200 text-emerald-800 hover:bg-emerald-300"
                    : "bg-slate-200 text-slate-400"
                }`}
              >
                {event.day}
              </button>
              {index < timelineEvents.length - 1 && (
                <ChevronRight className="h-4 w-4 text-slate-300 mx-1" />
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={revealAll} className="text-slate-600">
            <Eye className="h-4 w-4 mr-1" />
            Reveal All
          </Button>
          <Button variant="ghost" size="sm" onClick={resetLab} className="text-slate-600">
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      {/* Current Event Card */}
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-slate-900">
              Day {currentEvent.day}: {currentEvent.type === "start" ? "Month Start" : currentEvent.type === "purchase" ? "Purchase" : "Sale"}
            </CardTitle>
            <Badge className={
              currentEvent.type === "start" ? "bg-blue-100 text-blue-800" :
              currentEvent.type === "purchase" ? "bg-amber-100 text-amber-800" :
              "bg-green-100 text-green-800"
            }>
              {currentEvent.type === "start" ? "Beginning" : 
               currentEvent.type === "purchase" ? `+${currentEvent.unitsIn} units in` : 
               `-${currentEvent.unitsOut} units out`}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Event Description */}
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-slate-800 font-medium">{currentEvent.description}</p>
          </div>

          {/* Running Totals at DAY START - Always visible (state before this event) */}
          {currentStep === 0 ? (
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-800 font-semibold mb-1">📊 Running Totals at Day {currentEvent.day} Start:</p>
              <p className="text-amber-700 text-sm">This is the first event of the month. No prior activity.</p>
            </div>
          ) : (
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-800 font-semibold mb-3">📊 Running Totals at Day {currentEvent.day} Start:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div className="p-2 bg-white rounded border border-amber-200">
                  <p className="text-xs text-blue-600">Beginning + Purchases</p>
                  <p className="text-lg font-bold text-blue-900">
                    ${180 + timelineEvents[currentStep - 1].expectedPurchasesValue}
                  </p>
                </div>
                <div className="p-2 bg-white rounded border border-amber-200">
                  <p className="text-xs text-red-600">COGS</p>
                  <p className="text-lg font-bold text-red-900">
                    ${timelineEvents[currentStep - 1].expectedCOGS}
                  </p>
                </div>
                <div className="p-2 bg-white rounded border border-amber-200">
                  <p className="text-xs text-green-600">Ending Inventory</p>
                  <p className="text-lg font-bold text-green-900">
                    ${timelineEvents[currentStep - 1].expectedInventoryValue}
                  </p>
                </div>
                <div className="p-2 bg-white rounded border border-amber-200">
                  <p className="text-xs text-purple-600">Units on Hand</p>
                  <p className="text-lg font-bold text-purple-900">
                    {timelineEvents[currentStep - 1].expectedUnitsOnHand}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Transaction Details - What the student knows */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-semibold mb-3">📋 Transaction Details (What You Know):</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {currentEvent.type === "start" && (
                <>
                  <div className="text-blue-700">
                    <strong>Beginning inventory:</strong> {currentEvent.unitsIn} units
                  </div>
                  <div className="text-blue-700">
                    <strong>Cost per unit:</strong> ${currentEvent.costPerUnit}
                  </div>
                </>
              )}
              {currentEvent.type === "purchase" && (
                <>
                  <div className="text-blue-700">
                    <strong>Units purchased:</strong> {currentEvent.unitsIn} units
                  </div>
                  <div className="text-blue-700">
                    <strong>Cost per unit:</strong> ${currentEvent.costPerUnit}
                  </div>
                  <div className="text-blue-700 sm:col-span-2">
                    <strong>Total cost of this purchase:</strong> ${currentEvent.unitsIn * (currentEvent.costPerUnit || 0)}
                  </div>
                </>
              )}
              {currentEvent.type === "sale" && (
                <>
                  <div className="text-blue-700">
                    <strong>Units sold:</strong> {currentEvent.unitsOut} units
                  </div>
                  <div className="text-blue-700 sm:col-span-2">
                    <strong>Note:</strong> You'll need to figure out the cost based on which layer(s) these came from.
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Layer Context for Sales - What layers exist */}
          {currentEvent.type === "sale" && currentStep > 0 && (
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-purple-800 font-semibold mb-2">📊 Current Inventory Layers:</p>
              <p className="text-purple-700 text-sm mb-2">
                For this practice, assume sales come from the <strong>oldest layer first</strong> (like selling the boxes at the front of the shelf).
              </p>
              <div className="text-purple-700 text-sm">
                {currentStep >= 1 && (
                  <div>• <strong>Layer 1:</strong> Started with 10 units @ $18 each</div>
                )}
                {currentStep >= 2 && (
                  <div>• <strong>Layer 2:</strong> Purchased 20 units @ $20 each on Day 3</div>
                )}
                {currentStep >= 4 && (
                  <div>• <strong>Layer 3:</strong> Purchased 10 units @ $22 each on Day 15</div>
                )}
              </div>
            </div>
          )}

          {/* Student Input */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Units on hand after this event:
              </label>
              <input
                type="number"
                value={answers[currentEvent.id]?.unitsOnHand || ""}
                onChange={(e) => handleAnswerChange(currentEvent.id, "unitsOnHand", e.target.value)}
                placeholder="?"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                disabled={isRevealed}
              />
              {isRevealed && (
                <div className={`flex items-center gap-2 text-sm ${
                  checkAnswer(currentEvent.id, "unitsOnHand", currentEvent.expectedUnitsOnHand) 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {checkAnswer(currentEvent.id, "unitsOnHand", currentEvent.expectedUnitsOnHand) ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <HelpCircle className="h-4 w-4" />
                  )}
                  Correct answer: <strong>{currentEvent.expectedUnitsOnHand} units</strong>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Inventory value after this event:
              </label>
              <input
                type="number"
                value={answers[currentEvent.id]?.inventoryValue || ""}
                onChange={(e) => handleAnswerChange(currentEvent.id, "inventoryValue", e.target.value)}
                placeholder="?"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                disabled={isRevealed}
              />
              {isRevealed && (
                <div className={`flex items-center gap-2 text-sm ${
                  checkAnswer(currentEvent.id, "inventoryValue", currentEvent.expectedInventoryValue) 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {checkAnswer(currentEvent.id, "inventoryValue", currentEvent.expectedInventoryValue) ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <HelpCircle className="h-4 w-4" />
                  )}
                  Correct answer: <strong>${currentEvent.expectedInventoryValue}</strong>
                </div>
              )}
            </div>
          </div>

          {/* Reveal Button */}
          {!isRevealed && (
            <Button onClick={() => handleReveal(currentEvent.id)} className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Eye className="h-4 w-4 mr-2" />
              Check My Answer
            </Button>
          )}

          {/* Explanation when revealed */}
          {isRevealed && (
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 space-y-2">
              <p className="text-emerald-800 font-medium">What happened:</p>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Units on hand: {currentEvent.expectedUnitsOnHand} units</li>
                <li>• Total purchases value: ${currentEvent.expectedPurchasesValue}</li>
                <li>• Total COGS so far: ${currentEvent.expectedCOGS}</li>
                <li>• Inventory value: ${currentEvent.expectedInventoryValue}</li>
              </ul>
              {currentEvent.type === "sale" && (
                <p className="text-emerald-600 text-sm mt-2 italic">
                  Note: For sales, we assumed costs came from the oldest layer first (FIFO-style). 
                  You'll learn the formal rules in Lesson 3.
                </p>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-4 border-t border-slate-200">
            <Button variant="outline" onClick={goToPrev} disabled={isFirstStep}>
              Previous
            </Button>
            <Button onClick={goToNext} disabled={isLastStep} className="bg-emerald-600 hover:bg-emerald-700">
              Next Event
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Running Totals at DAY FINISH - Hidden until student checks answer */}
      <Card className="border-emerald-200 bg-emerald-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-emerald-900 text-lg">📊 Running Totals at Day {currentEvent.day} Finish</CardTitle>
        </CardHeader>
        <CardContent>
          {!isRevealed ? (
            <div className="text-center py-4">
              <p className="text-emerald-700 italic">
                🔒 Calculate your answers above, then click "Check My Answer" to see the running totals after this event.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-white rounded-lg border border-emerald-200">
                <p className="text-sm text-blue-600">Beginning + Purchases</p>
                <p className="text-xl font-bold text-blue-900">${180 + totals.purchasesValue}</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-emerald-200">
                <p className="text-sm text-red-600">COGS</p>
                <p className="text-xl font-bold text-red-900">${totals.cogs}</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-emerald-200">
                <p className="text-sm text-green-600">Ending Inventory</p>
                <p className="text-xl font-bold text-green-900">${totals.inventoryValue}</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-emerald-200">
                <p className="text-sm text-purple-600">Units on Hand</p>
                <p className="text-xl font-bold text-purple-900">{totals.unitsOnHand}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
