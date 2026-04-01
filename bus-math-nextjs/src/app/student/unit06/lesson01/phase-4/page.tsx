"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle, TrendingUp, TrendingDown, DollarSign, Users, CheckCircle, XCircle } from "lucide-react"
import { useState } from "react"
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data"

type Scenario = {
  name: string
  pricePerHour: number
  clientsPerMonth: number
  hoursPerClient: number
  monthlyFixedCosts: number
  alexSalary: number
  sarahTargetPay: number
}

const initialScenario: Scenario = {
  name: "TechStart Standard",
  pricePerHour: 75,
  clientsPerMonth: 8,
  hoursPerClient: 20,
  monthlyFixedCosts: 3200,
  alexSalary: 4000,
  sarahTargetPay: 3000
}

function calculateResults(scenario: Scenario) {
  const revenue = scenario.pricePerHour * scenario.clientsPerMonth * scenario.hoursPerClient
  const totalCosts = scenario.monthlyFixedCosts + scenario.alexSalary
  const profit = revenue - totalCosts
  const coversSarah = profit >= scenario.sarahTargetPay
  
  return { revenue, totalCosts, profit, coversSarah }
}

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!
  const [scenario, setScenario] = useState<Scenario>(initialScenario)
  const results = calculateResults(scenario)

  const updateScenario = (field: keyof Scenario, value: number) => {
    setScenario(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        <Card className="border-pink-200 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-900">Your Turn: Set Sarah's Price</CardTitle>
            <CardDescription>Make pricing decisions and see the consequences</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Now it's your turn to make pricing decisions for TechStart. You have some flexibility—choose a price per hour and a target number of clients.
            </p>
            <p className="text-gray-600">
              <strong>Your goal:</strong> Hit Sarah's target pay of $3,000/month while keeping the business sustainable.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Your Pricing Decision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Price per hour: ${scenario.pricePerHour}
                </label>
                <input 
                  type="range" 
                  min="40" 
                  max="150" 
                  step="5"
                  value={scenario.pricePerHour}
                  onChange={(e) => updateScenario('pricePerHour', Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$40 (budget)</span>
                  <span>$95 (mid)</span>
                  <span>$150 (premium)</span>
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Clients per month: {scenario.clientsPerMonth}
                </label>
                <input 
                  type="range" 
                  min="4" 
                  max="16" 
                  step="1"
                  value={scenario.clientsPerMonth}
                  onChange={(e) => updateScenario('clientsPerMonth', Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>4</span>
                  <span>10</span>
                  <span>16</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Fixed costs: ${scenario.monthlyFixedCosts.toLocaleString()}/month
                </p>
                <p className="text-sm text-gray-600">
                  Alex's salary: ${scenario.alexSalary.toLocaleString()}/month
                </p>
                <p className="text-sm text-gray-600">
                  Sarah's target pay: ${scenario.sarahTargetPay.toLocaleString()}/month
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={results.coversSarah ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"}>
            <CardHeader>
              <CardTitle className={results.coversSarah ? "text-green-800" : "text-red-800"}>
                Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Monthly Revenue</span>
                <span className="font-semibold">${results.revenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Costs</span>
                <span className="font-semibold">${results.totalCosts.toLocaleString()}</span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">Profit</span>
                  <span className={`text-xl font-bold ${results.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${results.profit.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className={`flex items-center gap-2 p-3 rounded-lg ${results.coversSarah ? 'bg-green-100' : 'bg-red-100'}`}>
                {results.coversSarah ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Covers Sarah's pay!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="text-red-800 font-medium">Doesn't cover Sarah's pay</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200 bg-blue-50/80">
          <CardHeader>
            <CardTitle className="text-blue-900">Scoreboard Check</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-white">
                <DollarSign className={`h-8 w-8 mx-auto mb-2 ${results.profit >= 3000 ? 'text-green-500' : 'text-gray-300'}`} />
                <p className="font-medium">Profitable</p>
                <p className="text-sm text-gray-500">{results.profit >= 3000 ? '✓ Makes money' : '✗ Losing money'}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white">
                <TrendingUp className={`h-8 w-8 mx-auto mb-2 ${scenario.pricePerHour >= 60 && scenario.pricePerHour <= 120 ? 'text-green-500' : 'text-gray-300'}`} />
                <p className="font-medium">Competitive</p>
                <p className="text-sm text-gray-500">{scenario.pricePerHour >= 60 && scenario.pricePerHour <= 120 ? '✓ Market range' : '? Unusual'}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white">
                <CheckCircle className={`h-8 w-8 mx-auto mb-2 ${results.coversSarah ? 'text-green-500' : 'text-gray-300'}`} />
                <p className="font-medium">Defensible</p>
                <p className="text-sm text-gray-500">{results.coversSarah ? '✓ Can explain' : '✗ Hard to defend'}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What You Just Did</h2>
          <p className="text-gray-700">
            You just made a real pricing decision and saw the immediate consequences. This is the core of strategic pricing—you're not just picking a number, you're choosing a business outcome.
          </p>
          <p className="text-gray-700">
            Notice that there isn't just one "right" answer. Different prices can work if the whole system adds up. That's why we need formulas—to calculate precisely whether a price will actually work.
          </p>
          <p className="text-gray-700 font-medium">
            In the next lessons, you'll learn the exact formulas to calculate markup, margin, and break-even points. These tools will let you test any pricing scenario instantly.
          </p>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
