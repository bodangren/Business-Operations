"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, RotateCcw, HelpCircle } from "lucide-react"

const methods = ["FIFO", "LIFO", "Specific Identification", "Weighted Average"]

const businessScenarios = [
  {
    id: "jewelry",
    name: "Luxe Jewelry Boutique",
    description: "High-end rings, necklaces, and watches. Each piece has a unique appraisal certificate.",
    correct: "Specific Identification",
    icon: "💎"
  },
  {
    id: "gas-station",
    name: "Metro Gas Station",
    description: "Regular and premium fuel in underground tanks. Deliveries mix together in storage.",
    correct: "Weighted Average",
    icon: "⛽"
  },
  {
    id: "grocery",
    name: "FreshMart Grocery",
    description: "Fresh produce, dairy, and packaged foods. Items need to sell before they expire.",
    correct: "FIFO",
    icon: "🥬"
  },
  {
    id: "electronics",
    name: "SoundWave Electronics",
    description: "Smartphones and laptops. Costs have been rising steadily. Manager wants lower taxable income.",
    correct: "LIFO",
    icon: "📱"
  },
  {
    id: "car-dealer",
    name: "Premier Auto Sales",
    description: "New and used vehicles. Each car has a unique VIN and individual cost.",
    correct: "Specific Identification",
    icon: "🚗"
  },
  {
    id: "coffee",
    name: "BeanWholesale Coffee",
    description: "Bulk coffee beans in silos. Different deliveries mix together in storage.",
    correct: "Weighted Average",
    icon: "☕"
  },
]

const methodDetails: Record<string, { worksWell: string[]; worksPoorly: string[] }> = {
  "FIFO": {
    worksWell: [
      "Perishable goods (food, flowers)",
      "Items with expiration dates",
      "Rising cost environments (shows higher profit)"
    ],
    worksPoorly: [
      "When you need current costs in COGS",
      "High inflation scenarios (higher taxes)"
    ]
  },
  "LIFO": {
    worksWell: [
      "Rising cost environments (lower taxable income)",
      "Matching current costs to current revenue",
      "Tax planning purposes (US tax code)"
    ],
    worksPoorly: [
      "International companies (not IFRS-compliant)",
      "When you need ending inventory at current costs"
    ]
  },
  "Specific Identification": {
    worksWell: [
      "Unique, expensive items",
      "Custom orders and projects",
      "Items with serial numbers or certificates"
    ],
    worksPoorly: [
      "Identical commodities in bulk",
      "High-volume, low-value items",
      "Items that can't be individually tracked"
    ]
  },
  "Weighted Average": {
    worksWell: [
      "Identical items that mix together",
      "Bulk commodities (grain, fuel, oil)",
      "High-volume similar products"
    ],
    worksPoorly: [
      "Unique items with different costs",
      "When you need layer-by-layer tracking"
    ]
  }
}

export default function MethodComparisonMatrix() {
  const [selections, setSelections] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (scenarioId: string, method: string) => {
    setSelections(prev => ({ ...prev, [scenarioId]: method }))
    setShowResults(false)
  }

  const checkAll = () => {
    let correct = 0
    businessScenarios.forEach(scenario => {
      if (selections[scenario.id] === scenario.correct) {
        correct++
      }
    })
    setScore(correct)
    setShowResults(true)
  }

  const reset = () => {
    setSelections({})
    setShowResults(false)
    setScore(0)
  }

  const allSelected = businessScenarios.every(s => selections[s.id])

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="pt-4">
          <p className="text-blue-900">
            <strong>Your task:</strong> For each business, select the inventory method that <strong>best fits</strong>. 
            Think about whether items are unique/trackable or identical/pooled, and any special business needs.
          </p>
        </CardContent>
      </Card>

      {/* Scenarios */}
      <div className="space-y-4">
        {businessScenarios.map((scenario) => {
          const selectedMethod = selections[scenario.id]
          const isCorrect = showResults && selectedMethod === scenario.correct
          const isIncorrect = showResults && selectedMethod && selectedMethod !== scenario.correct

          return (
            <div
              key={scenario.id}
              className={`p-4 rounded-lg border-2 transition-colors ${
                isCorrect ? "border-green-400 bg-green-50" :
                isIncorrect ? "border-red-400 bg-red-50" :
                "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{scenario.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{scenario.name}</h4>
                  <p className="text-slate-600 text-sm mb-3">{scenario.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {methods.map((method) => (
                      <Button
                        key={method}
                        size="sm"
                        variant={selectedMethod === method ? "default" : "outline"}
                        onClick={() => handleSelect(scenario.id, method)}
                        disabled={showResults}
                        className={`${
                          showResults && method === scenario.correct
                            ? "bg-green-600 hover:bg-green-600 text-white"
                            : ""
                        }`}
                      >
                        {method}
                      </Button>
                    ))}
                  </div>

                  {showResults && (
                    <div className="mt-3 p-3 rounded border border-slate-200 bg-white">
                      {isCorrect ? (
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-green-800">Correct!</p>
                            <p className="text-green-700 text-sm">
                              {methodDetails[scenario.correct].worksWell[0]}
                            </p>
                          </div>
                        </div>
                      ) : isIncorrect ? (
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-red-800">
                              Best fit: <strong>{scenario.correct}</strong>
                            </p>
                            <p className="text-red-700 text-sm">
                              {methodDetails[scenario.correct].worksWell[0]}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Check Button */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button onClick={checkAll} disabled={!allSelected || showResults} className="bg-blue-600 hover:bg-blue-700">
            Check My Answers
          </Button>
          {showResults && (
            <Button variant="outline" onClick={reset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          )}
        </div>
        {showResults && (
          <div className="text-lg">
            <span className="text-slate-600">Score:</span>{" "}
            <span className={`font-bold ${score === businessScenarios.length ? "text-green-600" : score >= 4 ? "text-amber-600" : "text-red-600"}`}>
              {score} / {businessScenarios.length}
            </span>
          </div>
        )}
      </div>

      {/* Method Summary */}
      {showResults && (
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 text-lg">Method Comparison Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {methods.map((method) => (
                <div key={method} className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">{method}</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium text-green-700">Works Well:</p>
                      <ul className="text-sm text-green-600 space-y-0.5">
                        {methodDetails[method].worksWell.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-700">Works Poorly:</p>
                      <ul className="text-sm text-red-600 space-y-0.5">
                        {methodDetails[method].worksPoorly.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Takeaway */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <p className="font-medium text-amber-900">Key Takeaway:</p>
              <p className="text-amber-800 text-sm mt-1">
                The "best" method depends on <strong>what you're tracking</strong> and 
                <strong> why it matters</strong>. No method is universally better — each has 
                a proper business context where it makes the most sense.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}