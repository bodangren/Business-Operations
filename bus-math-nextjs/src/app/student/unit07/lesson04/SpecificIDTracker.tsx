"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tag, ShoppingCart, Package, Calculator, CheckCircle2, RotateCcw, ChevronRight, Lightbulb } from "lucide-react"

// Small inventory of unique items for demonstration
const initialInventory = [
  { id: "LAPTOP-001", name: "Gaming Laptop", cost: 1450, serial: "GL-2024-001", customer: null },
  { id: "LAPTOP-002", name: "Gaming Laptop", cost: 1480, serial: "GL-2024-002", customer: null },
  { id: "LAPTOP-003", name: "Gaming Laptop", cost: 1525, serial: "GL-2024-003", customer: null },
  { id: "LAPTOP-004", name: "Gaming Laptop", cost: 1510, serial: "GL-2024-004", customer: null },
  { id: "LAPTOP-005", name: "Gaming Laptop", cost: 1460, serial: "GL-2024-005", customer: null },
]

// Sales that happened during the month
const salesRecords = [
  { customer: "Alex Rivera", date: "March 8", item: "LAPTOP-001", soldAt: 2100 },
  { customer: "Jordan Kim", date: "March 15", item: "LAPTOP-004", soldAt: 2100 },
  { customer: "Morgan Chen", date: "March 22", item: "LAPTOP-003", soldAt: 2150 },
]

export default function SpecificIDTracker() {
  const [step, setStep] = useState(0)
  const [showCalculation, setShowCalculation] = useState(false)

  // Calculate values based on pre-defined sales records (for I Do demonstration)
  const totalInventoryValue = initialInventory.reduce((sum, item) => sum + item.cost, 0)
  const soldItemIds = salesRecords.map(sale => sale.item)
  const soldItemsData = initialInventory.filter(item => soldItemIds.includes(item.id))
  const cogs = soldItemsData.reduce((sum, item) => sum + item.cost, 0)
  const remainingItems = initialInventory.filter(item => !soldItemIds.includes(item.id))
  const endingInventory = remainingItems.reduce((sum, item) => sum + item.cost, 0)

  // Steps for the demo
  const steps = [
    {
      title: "Understand the Business",
      description: "CustomTech Solutions sells custom gaming laptops. Each laptop is unique with its own serial number and tracked cost.",
      content: null
    },
    {
      title: "Meet Your Inventory",
      description: "You have 5 laptops in stock, each with a different cost based on components and build time.",
      content: "inventory"
    },
    {
      title: "Track Each Sale",
      description: "When a customer buys a laptop, you record EXACTLY which one they received using the serial number.",
      content: "sales"
    },
    {
      title: "Calculate COGS",
      description: "For Specific Identification, COGS is simply the sum of the exact costs of items sold.",
      content: "cogs"
    },
    {
      title: "Calculate Ending Inventory",
      description: "Ending inventory is the sum of costs for items still on the shelf.",
      content: "ending"
    },
    {
      title: "Verify Your Work",
      description: "Check: COGS + Ending Inventory must equal Goods Available for Sale.",
      content: "verify"
    }
  ]

  const currentStepData = steps[step]

  const resetDemo = () => {
    setStep(0)
    setShowCalculation(false)
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

  return (
    <div className="space-y-6">
      {/* Step Navigation */}
      <Card className="border-slate-200 bg-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    i === step ? "bg-blue-600 text-white" :
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
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Tag className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Why Specific Identification?</h4>
                <p className="text-blue-800">
                  Unlike FIFO and LIFO, <strong>Specific Identification</strong> doesn't make assumptions 
                  about which items sold. Instead, you track <em>exactly</em> which item went to which customer.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
                  <p className="text-blue-900 text-sm">
                    <strong>Key Point:</strong> Each item in your inventory has a <strong>serial number</strong> or 
                    <strong>unique identifier</strong>. When Alex buys a laptop, you don't guess which one — 
                    you <em>know</em> because you recorded the serial number.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 1 && currentStepData.content === "inventory" && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-slate-600" />
              Your Starting Inventory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              CustomTech has <strong>5 custom gaming laptops</strong> in stock. Each one was built 
              with different components, so each has a <strong>different cost</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {initialInventory.map((item) => (
                <div key={item.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono bg-slate-200 px-2 py-1 rounded text-slate-600">
                      {item.serial}
                    </span>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      In Stock
                    </Badge>
                  </div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">Cost: <strong>${item.cost.toLocaleString()}</strong></p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-900">
                <strong>Goods Available for Sale:</strong> 5 laptops × ($1,450 + $1,480 + $1,525 + $1,510 + $1,460) 
                = <strong>${totalInventoryValue.toLocaleString()}</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && currentStepData.content === "sales" && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-slate-600" />
              March Sales — Track Each One
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Three customers bought gaming laptops this month. <strong>You recorded the serial number for each sale.</strong>
            </p>
            <div className="space-y-3">
              {salesRecords.map((sale, index) => (
                <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-green-900">{sale.customer}</span>
                    <span className="text-sm text-green-600">{sale.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-green-600" />
                    <span className="font-mono text-green-800">
                      {initialInventory.find(i => i.id === sale.item)?.serial}
                    </span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    Sold for ${sale.soldAt.toLocaleString()} • 
                    <span className="ml-2">
                      Recorded cost: <strong>${initialInventory.find(i => i.id === sale.item)?.cost.toLocaleString()}</strong>
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-900">
                <Lightbulb className="h-4 w-4 inline mr-2" />
                No assumptions needed! You <em>know</em> which laptop each customer received because 
                you tracked the serial numbers.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && currentStepData.content === "cogs" && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-slate-600" />
              Calculate Cost of Goods Sold
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              For Specific Identification, COGS is straightforward: add up the <strong>exact costs</strong> of 
              the items that were sold.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left">Customer</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Serial Number</th>
                    <th className="border border-slate-300 px-4 py-2 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {salesRecords.map((sale, index) => {
                    const item = initialInventory.find(i => i.id === sale.item)
                    return (
                      <tr key={index} className="bg-white">
                        <td className="border border-slate-300 px-4 py-2">{sale.customer}</td>
                        <td className="border border-slate-300 px-4 py-2 font-mono text-sm">{item?.serial}</td>
                        <td className="border border-slate-300 px-4 py-2 text-right font-semibold">
                          ${item?.cost.toLocaleString()}
                        </td>
                      </tr>
                    )
                  })}
                  <tr className="bg-slate-100 font-bold">
                    <td className="border border-slate-300 px-4 py-2" colSpan={2}>Total COGS</td>
                    <td className="border border-slate-300 px-4 py-2 text-right">
                      ${cogs.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="text-emerald-900">
                <strong>Calculation:</strong> $1,450 + $1,510 + $1,525 = <strong>${cogs.toLocaleString()}</strong>
              </p>
              <p className="text-emerald-700 text-sm mt-2">
                No averaging. No assumptions about "oldest first" or "newest first." 
                You tracked <em>exactly</em> which items sold.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && currentStepData.content === "ending" && (
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-slate-600" />
              Calculate Ending Inventory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              The laptops <strong>still on the shelf</strong> make up your ending inventory. 
              Add their exact costs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {remainingItems.map((item) => (
                <div key={item.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono bg-slate-200 px-2 py-1 rounded text-slate-600">
                      {item.serial}
                    </span>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Remaining
                    </Badge>
                  </div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">Cost: <strong>${item.cost.toLocaleString()}</strong></p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-purple-900">
                <strong>Ending Inventory:</strong> {remainingItems.length} laptops<br />
                <strong>Cost:</strong> ${remainingItems.map(i => i.cost).join(' + $')} = <strong>${endingInventory.toLocaleString()}</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 5 && currentStepData.content === "verify" && (
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
                <p className="text-3xl font-bold text-amber-900">${totalInventoryValue.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
                <p className="text-sm text-red-700 mb-1">Cost of Goods Sold</p>
                <p className="text-3xl font-bold text-red-900">${cogs.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
                <p className="text-sm text-purple-700 mb-1">Ending Inventory</p>
                <p className="text-3xl font-bold text-purple-900">${endingInventory.toLocaleString()}</p>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-900">
                <CheckCircle2 className="h-5 w-5 inline mr-2" />
                <strong>Check:</strong> ${cogs.toLocaleString()} + ${endingInventory.toLocaleString()} = ${(cogs + endingInventory).toLocaleString()}
              </p>
              <p className="text-green-700 text-sm mt-1">
                ✓ The equation balances. All inventory costs are accounted for.
              </p>
            </div>
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
          Previous
        </Button>
        <Button
          onClick={nextStep}
          disabled={step === steps.length - 1}
        >
          {step === steps.length - 1 ? "Complete" : "Next"}
          {step < steps.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
        </Button>
      </div>
    </div>
  )
}