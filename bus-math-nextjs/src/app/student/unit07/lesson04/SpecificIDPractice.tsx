"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tag, ShoppingCart, Package, Calculator, CheckCircle2, RotateCcw, ChevronRight, ChevronLeft, Lightbulb, Sparkles, Eye, MousePointer, CheckCircle } from "lucide-react"

// Small inventory of unique items for demonstration
const initialInventory = [
  { id: "LAPTOP-001", name: "Gaming Laptop", cost: 1450, serial: "GL-2024-001" },
  { id: "LAPTOP-002", name: "Gaming Laptop", cost: 1480, serial: "GL-2024-002" },
  { id: "LAPTOP-003", name: "Gaming Laptop", cost: 1525, serial: "GL-2024-003" },
  { id: "LAPTOP-004", name: "Gaming Laptop", cost: 1510, serial: "GL-2024-004" },
  { id: "LAPTOP-005", name: "Gaming Laptop", cost: 1460, serial: "GL-2024-005" },
]

// Sales that happened during the month
const salesRecords = [
  { id: "sale-1", customer: "Alex Rivera", date: "March 8", serial: "GL-2024-001", soldAt: 2100 },
  { id: "sale-2", customer: "Jordan Kim", date: "March 15", serial: "GL-2024-004", soldAt: 2100 },
  { id: "sale-3", customer: "Morgan Chen", date: "March 22", serial: "GL-2024-003", soldAt: 2150 },
]

// Prediction questions for step 0
const predictionQuestions = [
  {
    question: "CustomTech sells unique gaming laptops, each with its own serial number. Which inventory method fits BEST?",
    options: [
      { id: "a", text: "FIFO — Oldest units sell first", correct: false },
      { id: "b", text: "LIFO — Newest units sell first", correct: false },
      { id: "c", text: "Specific Identification — Track each exact item", correct: true },
      { id: "d", text: "Weighted Average — Blend all costs together", correct: false },
    ],
    explanation: "Since each laptop has a unique serial number and different cost, Specific Identification lets you track exactly which one sold — no guessing needed!"
  }
]

export default function SpecificIDPractice() {
  const [step, setStep] = useState(0)
  
  // Step 0: Prediction state
  const [predictionAnswered, setPredictionAnswered] = useState(false)
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  
  // Step 1: Click-to-reveal inventory
  const [revealedLaptops, setRevealedLaptops] = useState<string[]>([])
  const [gafsAnswer, setGafsAnswer] = useState<string>("")
  const [gafsChecked, setGafsChecked] = useState(false)
  const [gafsCorrect, setGafsCorrect] = useState(false)
  
  // Step 2: Click-to-record sales
  const [recordedSales, setRecordedSales] = useState<string[]>([])
  
  // Step 3: Build COGS table
  const [cogsItems, setCogsItems] = useState<string[]>([])
  const [cogsCalculated, setCogsCalculated] = useState(false)
  
  // Step 4: Build ending inventory
  const [endingItems, setEndingItems] = useState<string[]>([])
  
  // Step 5: Verify equation
  const [verifyAnswer, setVerifyAnswer] = useState<string>("")
  const [verifyChecked, setVerifyChecked] = useState(false)
  const [verifyCorrect, setVerifyCorrect] = useState(false)

  // Calculate values
  const totalInventoryValue = initialInventory.reduce((sum, item) => sum + item.cost, 0)
  const soldSerials = salesRecords.map(s => s.serial)
  const soldItems = initialInventory.filter(item => soldSerials.includes(item.serial))
  const cogs = soldItems.reduce((sum, item) => sum + item.cost, 0)
  const remainingItems = initialInventory.filter(item => !soldSerials.includes(item.serial))
  const endingInventory = remainingItems.reduce((sum, item) => sum + item.cost, 0)

  // Steps for the practice
  const steps = [
    { title: "Predict", description: "Which method fits this business?" },
    { title: "Inventory", description: "Click to add laptops to your shelf" },
    { title: "Record Sales", description: "Match each customer to their laptop" },
    { title: "Build COGS", description: "Add sold items to calculate COGS" },
    { title: "Ending Inventory", description: "Find what's still on the shelf" },
    { title: "Verify", description: "Check if your numbers balance" },
  ]

  const currentStepData = steps[step]

  const resetDemo = () => {
    setStep(0)
    setPredictionAnswered(false)
    setSelectedPrediction(null)
    setShowExplanation(false)
    setRevealedLaptops([])
    setGafsAnswer("")
    setGafsChecked(false)
    setGafsCorrect(false)
    setRecordedSales([])
    setCogsItems([])
    setCogsCalculated(false)
    setEndingItems([])
    setVerifyAnswer("")
    setVerifyChecked(false)
    setVerifyCorrect(false)
  }

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  // Check if current step is complete
  const isStepComplete = () => {
    switch (step) {
      case 0: return predictionAnswered && showExplanation
      case 1: return revealedLaptops.length === 5 && gafsCorrect
      case 2: return recordedSales.length === 3
      case 3: return cogsCalculated
      case 4: return endingItems.length === 2
      case 5: return verifyCorrect
      default: return false
    }
  }

  return (
    <div className="space-y-6">
      {/* Step Navigation */}
      <Card className="border-slate-200 bg-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    i === step ? "bg-blue-600 text-white scale-110" :
                    i < step ? "bg-green-500 text-white" :
                    "bg-slate-200 text-slate-600"
                  }`}>
                    {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-6 h-1 transition-all ${i < step ? "bg-green-500" : "bg-slate-200"}`} />
                  )}
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={resetDemo}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Restart
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-slate-900">Step {step + 1}: {currentStepData.title}</h3>
            {isStepComplete() && (
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Complete
              </Badge>
            )}
          </div>
          <p className="text-slate-600">{currentStepData.description}</p>
        </CardContent>
      </Card>

      {/* Step 0: Prediction */}
      {step === 0 && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Before We Start: Make a Prediction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-950">
              CustomTech Solutions sells <strong>custom gaming laptops</strong>. Each laptop is built to order with 
              different components, has a <strong>unique serial number</strong>, and costs a <strong>different amount</strong>.
            </p>
            <p className="text-blue-800 font-medium">
              {predictionQuestions[0].question}
            </p>
            <div className="grid grid-cols-1 gap-3">
              {predictionQuestions[0].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    if (!predictionAnswered) {
                      setSelectedPrediction(option.id)
                      setPredictionAnswered(true)
                      if (option.correct) {
                        setShowExplanation(true)
                      }
                    }
                  }}
                  disabled={predictionAnswered}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    predictionAnswered
                      ? option.correct
                        ? "bg-green-100 border-green-500"
                        : selectedPrediction === option.id
                        ? "bg-red-100 border-red-500"
                        : "bg-slate-100 border-slate-300"
                      : selectedPrediction === option.id
                      ? "bg-blue-100 border-blue-500"
                      : "bg-white border-slate-300 hover:border-blue-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-700">{option.id.toUpperCase()}.</span>
                    <span className="text-slate-900">{option.text}</span>
                    {predictionAnswered && option.correct && (
                      <CheckCircle2 className="h-5 w-5 text-green-600 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            {predictionAnswered && !showExplanation && (
              <div className="p-4 bg-amber-100 rounded-lg border border-amber-300">
                <p className="text-amber-900">
                  <strong>Not quite!</strong> Think about it: if each laptop has a unique serial number and different cost, 
                  you can track <em>exactly</em> which one sold. Try again!
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => {
                    setPredictionAnswered(false)
                    setSelectedPrediction(null)
                  }}
                >
                  Try Again
                </Button>
              </div>
            )}
            
            {showExplanation && (
              <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                <p className="text-green-900">
                  <CheckCircle2 className="h-5 w-5 inline mr-2" />
                  {predictionQuestions[0].explanation}
                </p>
              </div>
            )}
            
            {predictionAnswered && showExplanation && (
              <div className="p-4 bg-blue-100 rounded-lg border border-blue-200">
                <p className="text-blue-900">
                  <Eye className="h-4 w-4 inline mr-2" />
                  <strong>Now let's see how it works.</strong> Click through the next steps to track each laptop individually.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 1: Click-to-reveal Inventory */}
      {step === 1 && (
        <div className="space-y-4">
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-slate-600" />
                Build Your Shelf: Add Each Laptop
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Your inventory arrives! <strong>Click each laptop</strong> below to add it to your shelf. 
                Watch the total grow as you add each one.
              </p>
              
              {/* Laptops to add */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {initialInventory.map((item) => {
                  const isRevealed = revealedLaptops.includes(item.id)
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (!isRevealed) {
                          setRevealedLaptops([...revealedLaptops, item.id])
                        }
                      }}
                      disabled={isRevealed}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        isRevealed
                          ? "bg-green-50 border-green-300"
                          : "bg-slate-50 border-slate-300 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                    >
                      {isRevealed ? (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono bg-green-200 px-2 py-1 rounded text-green-800">
                              {item.serial}
                            </span>
                            <Badge className="bg-green-600 text-white">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Added
                            </Badge>
                          </div>
                          <p className="font-medium text-slate-900">{item.name}</p>
                          <p className="text-sm text-slate-600">Cost: <strong>${item.cost.toLocaleString()}</strong></p>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <Package className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-500 text-sm">Click to reveal</p>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Running Total */}
              <Card className={`border-2 ${revealedLaptops.length === 5 ? "border-green-500 bg-green-50" : "border-slate-200 bg-slate-50"}`}>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Goods Available for Sale (GAFS)</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {revealedLaptops.length === 0 
                          ? "$___" 
                          : `$${initialInventory
                              .filter(i => revealedLaptops.includes(i.id))
                              .reduce((sum, i) => sum + i.cost, 0)
                              .toLocaleString()}`
                        }
                      </p>
                      <p className="text-xs text-slate-500">
                        {revealedLaptops.length} of 5 laptops added
                      </p>
                    </div>
                    {revealedLaptops.length === 5 && (
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Swift Check: GAFS Calculation */}
              {revealedLaptops.length === 5 && !gafsCorrect && (
                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader>
                    <CardTitle className="text-amber-900 flex items-center gap-2">
                      <MousePointer className="h-5 w-5" />
                      Swift Check: What's the Total?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-amber-800">
                      Add up all five laptop costs: $1,450 + $1,480 + $1,525 + $1,510 + $1,460 = ?
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={gafsAnswer}
                        onChange={(e) => setGafsAnswer(e.target.value)}
                        placeholder="Enter total (e.g., 7425)"
                        className="flex-1 p-2 border-2 border-amber-300 rounded-lg focus:border-amber-500 outline-none"
                      />
                      <Button 
                        onClick={() => {
                          setGafsChecked(true)
                          const correct = gafsAnswer.replace(/[$,]/g, "") === "7425" || gafsAnswer === "$7,425"
                          setGafsCorrect(correct)
                        }}
                        className="bg-amber-600 hover:bg-amber-700"
                      >
                        Check
                      </Button>
                    </div>
                    {gafsChecked && !gafsCorrect && (
                      <p className="text-red-600">
                        Try again! Add: 1,450 + 1,480 + 1,525 + 1,510 + 1,460
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {gafsCorrect && (
                <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                  <p className="text-green-900">
                    <CheckCircle2 className="h-5 w-5 inline mr-2" />
                    Correct! Your starting inventory is <strong>$7,425</strong>. These 5 laptops are your Goods Available for Sale.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 2: Record Sales */}
      {step === 2 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-slate-600" />
              Record Each Sale: Match Customer to Serial
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Three customers bought laptops. <strong>For each customer, click the serial number they purchased.</strong>
              The serial was recorded at checkout — you're just entering it into the system.
            </p>
            
            {/* Customer Cards */}
            <div className="space-y-4">
              {salesRecords.map((sale, index) => {
                const isRecorded = recordedSales.includes(sale.id)
                const isCurrentSale = !isRecorded && recordedSales.length === index
                
                return (
                  <div key={sale.id} className={`p-4 rounded-lg border-2 transition-all ${
                    isRecorded ? "bg-green-50 border-green-300" :
                    isCurrentSale ? "bg-blue-50 border-blue-300" :
                    "bg-slate-50 border-slate-200"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900">{sale.customer}</span>
                      <span className="text-sm text-slate-600">{sale.date}</span>
                    </div>
                    
                    {isRecorded ? (
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-green-600" />
                        <span className="font-mono text-green-800">{sale.serial}</span>
                        <Badge className="bg-green-600 text-white ml-auto">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Recorded
                        </Badge>
                      </div>
                    ) : isCurrentSale ? (
                      <div className="mt-2">
                        <p className="text-sm text-blue-700 mb-2">
                          Click the serial number this customer received:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {initialInventory
                            .filter(item => {
                              // Show all serials, but highlight correct one
                              return true
                            })
                            .map(item => {
                              const isCorrectSerial = item.serial === sale.serial
                              const alreadyUsedElsewhere = recordedSales.some(rs => {
                                const otherSale = salesRecords.find(s => s.id === rs)
                                return otherSale && otherSale.serial === item.serial
                              })
                              return (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    if (isCorrectSerial) {
                                      setRecordedSales([...recordedSales, sale.id])
                                    }
                                  }}
                                  disabled={alreadyUsedElsewhere}
                                  className={`px-3 py-1.5 rounded border-2 font-mono text-sm transition-all ${
                                    alreadyUsedElsewhere
                                      ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                                      : isCorrectSerial
                                      ? "bg-white border-blue-300 hover:border-green-500 hover:bg-green-50"
                                      : "bg-white border-slate-200 hover:border-red-400"
                                  }`}
                                >
                                  {item.serial}
                                </button>
                              )
                            })}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-400">Waiting to record...</p>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Progress indicator */}
            {recordedSales.length < 3 && (
              <p className="text-sm text-slate-500">
                {recordedSales.length} of 3 sales recorded
              </p>
            )}

            {recordedSales.length === 3 && (
              <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                <p className="text-green-900">
                  <CheckCircle2 className="h-5 w-5 inline mr-2" />
                  All sales recorded! You tracked <em>exactly</em> which laptop each customer received.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 3: Build COGS Table */}
      {step === 3 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-slate-600" />
              Build Your COGS: Add Each Sold Laptop
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Now calculate Cost of Goods Sold. <strong>Click each sold laptop to add it to the COGS table.</strong>
            </p>
            
            {/* Sold laptops to add */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {soldItems.map((item) => {
                const isAdded = cogsItems.includes(item.serial)
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (!isAdded) {
                        setCogsItems([...cogsItems, item.serial])
                      }
                    }}
                    disabled={isAdded}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      isAdded
                        ? "bg-red-50 border-red-300"
                        : "bg-white border-slate-300 hover:border-red-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono bg-slate-200 px-2 py-0.5 rounded">
                        {item.serial}
                      </span>
                      {isAdded && (
                        <Badge className="bg-red-600 text-white text-xs">
                          In COGS
                        </Badge>
                      )}
                    </div>
                    <p className="font-medium text-slate-900">Cost: ${item.cost.toLocaleString()}</p>
                  </button>
                )
              })}
            </div>

            {/* COGS Table */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-4">
                <p className="text-sm text-red-700 mb-2">Cost of Goods Sold (COGS)</p>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-red-300">
                      <th className="text-left py-1 text-red-900">Serial</th>
                      <th className="text-right py-1 text-red-900">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cogsItems.map((serial) => {
                      const item = soldItems.find(i => i.serial === serial)
                      return (
                        <tr key={serial} className="border-b border-red-200">
                          <td className="py-1 font-mono text-sm">{serial}</td>
                          <td className="py-1 text-right font-medium">${item?.cost.toLocaleString()}</td>
                        </tr>
                      )
                    })}
                    {cogsItems.length === 0 && (
                      <tr>
                        <td colSpan={2} className="py-4 text-center text-red-400">
                          Click laptops above to add them
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Calculate button */}
            {cogsItems.length === 3 && !cogsCalculated && (
              <Button 
                onClick={() => setCogsCalculated(true)}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Calculate Total COGS
              </Button>
            )}

            {cogsCalculated && (
              <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                <p className="text-green-900">
                  <strong>COGS = $1,450 + $1,510 + $1,525 = ${cogs.toLocaleString()}</strong>
                </p>
                <p className="text-green-700 text-sm mt-1">
                  You added the exact cost of each laptop that was sold. No averaging — just the sum of actual costs.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 4: Build Ending Inventory */}
      {step === 4 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-slate-600" />
              Find Ending Inventory: What's Left on the Shelf?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Two laptops are still on the shelf. <strong>Click each one to add it to ending inventory.</strong>
            </p>
            
            {/* Remaining laptops */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {remainingItems.map((item) => {
                const isAdded = endingItems.includes(item.serial)
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (!isAdded) {
                        setEndingItems([...endingItems, item.serial])
                      }
                    }}
                    disabled={isAdded}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      isAdded
                        ? "bg-purple-50 border-purple-300"
                        : "bg-white border-slate-300 hover:border-purple-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono bg-slate-200 px-2 py-1 rounded">
                        {item.serial}
                      </span>
                      {isAdded && (
                        <Badge className="bg-purple-600 text-white">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Ending Inv.
                        </Badge>
                      )}
                    </div>
                    <p className="font-medium text-slate-900">Cost: ${item.cost.toLocaleString()}</p>
                  </button>
                )
              })}
            </div>

            {/* Ending Inventory Calculation */}
            {endingItems.length > 0 && (
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <p className="text-sm text-purple-700 mb-2">Ending Inventory</p>
                  <div className="space-y-1">
                    {endingItems.map((serial) => {
                      const item = remainingItems.find(i => i.serial === serial)
                      return (
                        <div key={serial} className="flex justify-between">
                          <span className="font-mono text-sm">{serial}</span>
                          <span className="font-medium">${item?.cost.toLocaleString()}</span>
                        </div>
                      )
                    })}
                    {endingItems.length === 2 && (
                      <div className="border-t border-purple-300 pt-2 mt-2">
                        <div className="flex justify-between font-bold text-purple-900">
                          <span>Total Ending Inventory</span>
                          <span>${endingInventory.toLocaleString()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {endingItems.length === 2 && (
              <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                <p className="text-green-900">
                  <CheckCircle2 className="h-5 w-5 inline mr-2" />
                  Ending Inventory = ${remainingItems.map(i => i.cost).join(' + $')} = <strong>${endingInventory.toLocaleString()}</strong>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 5: Verify */}
      {step === 5 && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-slate-600" />
              Final Check: Does Everything Balance?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              The inventory equation must balance: <strong>COGS + Ending Inventory = Goods Available for Sale</strong>
            </p>
            
            {/* Visual equation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
                <p className="text-sm text-red-700 mb-1">Cost of Goods Sold</p>
                <p className="text-3xl font-bold text-red-900">${cogs.toLocaleString()}</p>
                <p className="text-xs text-red-600 mt-1">3 laptops sold</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
                <p className="text-sm text-purple-700 mb-1">Ending Inventory</p>
                <p className="text-3xl font-bold text-purple-900">${endingInventory.toLocaleString()}</p>
                <p className="text-xs text-purple-600 mt-1">2 laptops remaining</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-center">
                <p className="text-sm text-amber-700 mb-1">Goods Available for Sale</p>
                <p className="text-3xl font-bold text-amber-900">${totalInventoryValue.toLocaleString()}</p>
                <p className="text-xs text-amber-600 mt-1">5 laptops total</p>
              </div>
            </div>

            {/* Verification input */}
            {!verifyCorrect && (
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <p className="text-amber-900 font-medium mb-2">
                    Type the sum to verify: ${cogs.toLocaleString()} + ${endingInventory.toLocaleString()} = ?
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={verifyAnswer}
                      onChange={(e) => setVerifyAnswer(e.target.value)}
                      placeholder="Enter the total (e.g., 7425)"
                      className="flex-1 p-2 border-2 border-amber-300 rounded-lg focus:border-amber-500 outline-none"
                    />
                    <Button 
                      onClick={() => {
                        setVerifyChecked(true)
                        const correct = verifyAnswer.replace(/[$,]/g, "") === "7425" || verifyAnswer === "$7,425"
                        setVerifyCorrect(correct)
                      }}
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      Check
                    </Button>
                  </div>
                  {verifyChecked && !verifyCorrect && (
                    <p className="text-red-600 mt-2">
                      Try again! Add ${cogs.toLocaleString()} + ${endingInventory.toLocaleString()}
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {verifyCorrect && (
              <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                <p className="text-green-900">
                  <CheckCircle2 className="h-5 w-5 inline mr-2" />
                  <strong>Perfect!</strong> ${cogs.toLocaleString()} + ${endingInventory.toLocaleString()} = ${(cogs + endingInventory).toLocaleString()}
                </p>
                <p className="text-green-700 text-sm mt-2">
                  Your inventory equation balances. All costs are accounted for!
                </p>
              </div>
            )}

            {/* Key takeaway */}
            {verifyCorrect && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-4">
                  <p className="text-blue-900 font-medium mb-2">
                    <Lightbulb className="h-4 w-4 inline mr-2" />
                    Key Takeaway for Specific Identification:
                  </p>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>You tracked <strong>exactly</strong> which laptop sold (by serial number)</li>
                    <li>COGS is the <strong>sum of actual costs</strong> for items sold</li>
                    <li>No averaging, no assumptions about "oldest first" or "newest first"</li>
                    <li>Best for: cars, jewelry, custom equipment, real estate, unique items</li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={step === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button
          onClick={nextStep}
          disabled={!isStepComplete() || step === steps.length - 1}
          className={isStepComplete() && step < steps.length - 1 ? "bg-blue-600 hover:bg-blue-700" : ""}
        >
          {step === steps.length - 1 ? "Complete" : "Next"}
          {step < steps.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
        </Button>
      </div>
    </div>
  )
}