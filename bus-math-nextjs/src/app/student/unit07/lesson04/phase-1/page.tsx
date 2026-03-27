"use client"

import { useState } from "react"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Store, Car, Gem, Computer, Package, CheckCircle2, XCircle, HelpCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[0]

// Business scenarios for the sorting activity
const businessScenarios = [
  {
    id: "jewelry",
    name: "Luxe Jewelry Boutique",
    icon: Gem,
    description: "A high-end jewelry store selling one-of-a-kind diamond necklaces, engagement rings, and designer watches. Each piece is unique with its own appraisal certificate and serial number.",
    inventoryType: "Unique, expensive items with individual certificates",
    correctMethod: "Specific Identification",
    whyCorrect: "Each piece is distinct and can be tracked individually. When a $15,000 necklace sells, you know exactly which one it was.",
    whyOthersWrong: "FIFO/LIFO don't make sense when each item is unique. Weighted average would hide the true cost of each expensive piece."
  },
  {
    id: "car-dealership",
    name: "Premier Auto Sales",
    icon: Car,
    description: "A car dealership selling new and certified pre-owned vehicles. Each car has a unique VIN number, mileage, and purchase cost. Inventory ranges from $25,000 economy cars to $85,000 luxury models.",
    inventoryType: "Unique vehicles with VIN numbers and individual costs",
    correctMethod: "Specific Identification",
    whyCorrect: "Each vehicle is tracked by VIN. When selling a specific Toyota Camry with VIN #JM1AA..., you match it to its exact cost.",
    whyOthersWrong: "You can't average the cost of a $25,000 Honda with a $85,000 BMW. Each sale needs its own cost match."
  },
  {
    id: "computer-builder",
    name: "CustomTech Solutions",
    icon: Computer,
    description: "A custom computer builder who assembles each machine individually for clients. Some builds use premium components while others use standard parts. Each computer is a unique project with tracked costs.",
    inventoryType: "Custom-built systems with varying component costs",
    correctMethod: "Specific Identification",
    whyCorrect: "Each custom build is unique. Client A's gaming PC with RTX 4090 has different costs than Client B's office workstation.",
    whyOthersWrong: "You can't pool costs when each system is built to order with different components."
  },
  {
    id: "grocery",
    name: "Valley Bulk Foods",
    icon: Package,
    description: "A wholesale grocery supplier selling rice, flour, sugar, and cooking oil in bulk. They receive multiple shipments per month at different prices, but the products are physically identical.",
    inventoryType: "Identical bulk products that can't be distinguished by shelf",
    correctMethod: "Weighted Average",
    whyCorrect: "When all 10,000 pounds of rice look the same, there's no way to say 'this scoop came from Monday's shipment vs Tuesday's.' Weighted average blends all costs into one price.",
    whyOthersWrong: "FIFO/LIFO work, but create unnecessary complexity when items are identical. Specific ID is impossible - you can't track individual grains of rice."
  }
]

const methodOptions = ["Specific Identification", "Weighted Average", "FIFO", "LIFO"]

export default function Phase1Page() {
  const [selections, setSelections] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const handleSelect = (businessId: string, method: string) => {
    setSelections(prev => ({ ...prev, [businessId]: method }))
    setShowResults(false)
  }

  const checkAnswers = () => {
    let correct = 0
    businessScenarios.forEach(business => {
      if (selections[business.id] === business.correctMethod) {
        correct++
      }
    })
    setCorrectCount(correct)
    setShowResults(true)
  }

  const resetActivity = () => {
    setSelections({})
    setShowResults(false)
    setCorrectCount(0)
  }

  const isComplete = Object.keys(selections).length === businessScenarios.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">Phase 1: Introduction</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Not Every Method Fits Every Business</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              You've learned FIFO and LIFO. Now you'll discover two more methods — but first, an important question:
              When should you use each one?
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {/* Connection to Lessons 2-3 */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">What You Already Know</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-950">
              <p className="text-lg leading-relaxed">
                In Lessons 2 and 3, you learned <strong>FIFO</strong> and <strong>LIFO</strong> — 
                two methods that assume inventory flows in a certain order, even if that's not 
                physically what happened.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-900 mb-2">FIFO (First-In, First-Out)</h4>
                  <p className="text-blue-800 text-sm">
                    <em>Assumes</em> the oldest items sell first. Works well when 
                    physical flow matches this pattern (perishable goods, organized shelving).
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-900 mb-2">LIFO (Last-In, First-Out)</h4>
                  <p className="text-blue-800 text-sm">
                    <em>Assumes</em> the newest items sell first. Often used for 
                    tax planning when costs are rising (U.S. only, not IFRS-compliant).
                  </p>
                </div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-900">
                  <strong>Key insight:</strong> FIFO and LIFO are <em>assumptions</em>. 
                  They don't require tracking individual items — they assume a flow pattern 
                  and calculate costs accordingly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The New Problem */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                But What If...
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-950">
              <p className="text-lg leading-relaxed">
                What if you <strong>can</strong> track individual items? What if you 
                <strong> can't</strong> tell items apart at all?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-300">
                  <h4 className="font-bold text-emerald-900 text-lg mb-2">
                    You CAN track each item
                  </h4>
                  <p className="text-emerald-800 text-sm mb-3">
                    Cars have VINs. Jewelry has certificates. Custom computers have serial numbers.
                  </p>
                  <p className="text-emerald-700 text-sm">
                    <strong>Use: <em>Specific Identification</em></strong><br />
                    Track the exact cost of each individual item.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                  <h4 className="font-bold text-purple-900 text-lg mb-2">
                    You CAN'T tell items apart
                  </h4>
                  <p className="text-purple-800 text-sm mb-3">
                    Grain in a silo. Gas in a tank. Nails in a bin. 
                    All units look identical.
                  </p>
                  <p className="text-purple-700 text-sm">
                    <strong>Use: <em>Weighted Average</em></strong><br />
                    Blend all costs into one average price per unit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Method-Fit Sorting Activity */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <Store className="h-5 w-5" />
                Which Method Fits Each Business?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700">
                For each business below, select the inventory method that <strong>best fits</strong>. 
                Think about whether items are unique/trackable or identical/pooled.
              </p>

              <div className="space-y-6">
                {businessScenarios.map((business) => {
                  const IconComponent = business.icon
                  const isSelected = selections[business.id]
                  const isCorrect = showResults && selections[business.id] === business.correctMethod
                  const isIncorrect = showResults && selections[business.id] && selections[business.id] !== business.correctMethod

                  return (
                    <div key={business.id} className={`p-4 rounded-lg border-2 transition-colors ${
                      isCorrect ? "border-green-400 bg-green-50" :
                      isIncorrect ? "border-red-400 bg-red-50" :
                      "border-slate-200 bg-slate-50"
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          isCorrect ? "bg-green-100" :
                          isIncorrect ? "bg-red-100" :
                          "bg-slate-200"
                        }`}>
                          <IconComponent className={`h-6 w-6 ${
                            isCorrect ? "text-green-600" :
                            isIncorrect ? "text-red-600" :
                            "text-slate-600"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1">{business.name}</h4>
                          <p className="text-slate-700 text-sm mb-2">{business.description}</p>
                          <p className="text-slate-600 text-xs mb-3">
                            <strong>Inventory type:</strong> {business.inventoryType}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {methodOptions.map((method) => (
                              <Button
                                key={method}
                                size="sm"
                                variant={selections[business.id] === method ? "default" : "outline"}
                                onClick={() => handleSelect(business.id, method)}
                                disabled={showResults}
                                className={showResults && method === business.correctMethod ? "bg-green-600 hover:bg-green-600" : ""}
                              >
                                {method}
                                {showResults && method === business.correctMethod && (
                                  <CheckCircle2 className="ml-2 h-4 w-4" />
                                )}
                              </Button>
                            ))}
                          </div>

                          {showResults && (
                            <div className="mt-4 p-3 rounded border border-slate-200 bg-white">
                              {isCorrect ? (
                                <div className="flex items-start gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-semibold text-green-800">Correct!</p>
                                    <p className="text-green-700 text-sm">{business.whyCorrect}</p>
                                  </div>
                                </div>
                              ) : isIncorrect ? (
                                <div className="flex items-start gap-2">
                                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-semibold text-red-800">
                                      The best fit is <strong>{business.correctMethod}</strong>
                                    </p>
                                    <p className="text-red-700 text-sm mb-2">{business.whyCorrect}</p>
                                    <p className="text-slate-600 text-sm">{business.whyOthersWrong}</p>
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

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                {!showResults && (
                  <Button 
                    onClick={checkAnswers}
                    disabled={!isComplete}
                    className="px-6 py-2"
                  >
                    Check My Answers
                  </Button>
                )}
                {showResults && (
                  <>
                    <div className="text-center">
                      <p className="text-lg font-medium text-slate-700">
                        You got <span className={`font-bold ${
                          correctCount === 4 ? "text-green-600" :
                          correctCount >= 2 ? "text-amber-600" :
                          "text-red-600"
                        }`}>{correctCount} of 4</span> correct
                      </p>
                    </div>
                    <Button variant="outline" onClick={resetActivity}>
                      Try Again
                    </Button>
                  </>
                )}
              </div>

              {/* Key Distinction Summary */}
              {showResults && (
                <Card className="border-emerald-200 bg-emerald-50 mt-6">
                  <CardHeader>
                    <CardTitle className="text-emerald-900 text-lg">Key Distinction</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-emerald-300">
                        <h4 className="font-bold text-emerald-900 mb-2">Specific Identification</h4>
                        <p className="text-emerald-800 text-sm mb-2">
                          <strong>Use when:</strong> Each item is unique and can be individually tracked.
                        </p>
                        <ul className="text-emerald-700 text-sm space-y-1">
                          <li>✓ Cars (VIN numbers)</li>
                          <li>✓ Jewelry (certificates)</li>
                          <li>✓ Custom equipment (serial numbers)</li>
                          <li>✓ Real estate (unique properties)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-purple-300">
                        <h4 className="font-bold text-purple-900 mb-2">Weighted Average</h4>
                        <p className="text-purple-800 text-sm mb-2">
                          <strong>Use when:</strong> Items are identical and pooled together.
                        </p>
                        <ul className="text-purple-700 text-sm space-y-1">
                          <li>✓ Bulk grain, flour, sugar</li>
                          <li>✓ Gasoline, oil</li>
                          <li>✓ Nails, screws, fasteners</li>
                          <li>✓ Commodity items</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          {/* Discussion */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>
                  Why wouldn't a jewelry store use weighted average for their inventory?
                </li>
                <li>
                  Why wouldn't a bulk grain supplier use specific identification?
                </li>
                <li>
                  What would happen if you tried to apply FIFO to custom-built computers 
                  where each one has different components?
                </li>
              </ul>
              <div className="bg-white p-3 rounded border border-blue-200 mt-3">
                <p className="text-sm text-blue-700">
                  <strong>Key insight:</strong> The "best" method depends on the physical nature 
                  of your inventory and whether you can track individual items. No method is 
                  universally better — each has a proper use case.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <ComprehensionCheck
            questions={[
              {
                id: "q1",
                question: "A car dealership sells vehicles with unique VIN numbers. Which inventory method is most appropriate?",
                answers: [
                  "Specific Identification — each car can be tracked individually",
                  "Weighted Average — blend all car costs together",
                  "FIFO — assume oldest cars sell first",
                  "LIFO — assume newest cars sell first"
                ],
                explanation: "Each car has a unique VIN and purchase cost. When a specific car sells, you match it to its exact cost. Weighted average doesn't work because cars aren't identical."
              },
              {
                id: "q2",
                question: "A gas station receives multiple fuel deliveries at different prices each month. The fuel all goes into the same tank and can't be distinguished. Which method makes the most sense?",
                answers: [
                  "Weighted Average — all fuel is physically mixed together",
                  "Specific Identification — track each gallon individually",
                  "FIFO — the old fuel must sell first",
                  "LIFO — the new fuel must sell first"
                ],
                explanation: "When fuel deliveries mix in a tank, you can't identify which gallon came from which delivery. Weighted average blends all costs into one average price."
              },
              {
                id: "q3",
                question: "Why does specific identification NOT work for bulk commodities like wheat or rice?",
                answers: [
                  "You cannot tell which grain came from which purchase — the items are physically identical",
                  "Wheat and rice are too expensive to track individually",
                  "FIFO is required by law for all agricultural products",
                  "Specific identification only works for retail stores"
                ],
                explanation: "Specific identification requires each item to be individually trackable. When thousands of pounds of identical grain are mixed in a silo, there's no way to say 'this scoop came from Monday's delivery vs Tuesday's.'"
              },
              {
                id: "q4",
                question: "Sarah from TechStart offers custom website packages. Each client project has different requirements and costs. Which method fits best?",
                answers: [
                  "Specific Identification — each project is unique with tracked costs",
                  "Weighted Average — blend all project costs together",
                  "FIFO — first client signed gets the oldest costs",
                  "LIFO — most recent client gets the newest costs"
                ],
                explanation: "Custom service projects are like custom-built products — each one is unique. Sarah can track the exact hours, materials, and subcontractor costs for Client A's project separately from Client B's."
              }
            ]}
            title="Check Your Understanding"
            description="Make sure you understand the key difference between Specific Identification and Weighted Average."
            showExplanations={true}
            allowRetry={true}
          />

          {/* What's Coming */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">What's Coming Next</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p className="text-lg">
                You've just learned <strong>when</strong> to use each method. 
                In the next phases, you'll learn <strong>how</strong> to calculate them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-900 mb-2">Phase 2: I Do</h4>
                  <p className="text-emerald-800 text-sm">
                    Watch a step-by-step example of Specific Identification with a small 
                    inventory of tagged, unique items.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Phase 3: We Do</h4>
                  <p className="text-purple-800 text-sm">
                    Work through a Weighted Average calculation together with 
                    visible running totals and explicit rounding rules.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-slate-800 text-sm">
                  <strong>Remember:</strong> Today is about understanding the methods. 
                  Excel workbook construction comes in Lesson 5.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}