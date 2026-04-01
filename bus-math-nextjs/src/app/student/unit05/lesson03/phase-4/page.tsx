"use client"

import { useState } from "react"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, RotateCcw, Target, Trophy } from "lucide-react"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[3]

interface Problem {
  id: number
  grossPay: number
  filingStatus: "single" | "married"
  has401k: boolean
  k401Percent: number
  stateTax: number
}

const generateProblem = (id: number): Problem => {
  const grossOptions = [1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000]
  const gross = grossOptions[Math.floor(Math.random() * grossOptions.length)]
  const filingStatus = Math.random() > 0.5 ? "single" : "married"
  const has401k = Math.random() > 0.6
  const stateTaxOptions = [0, 0, 0, 3, 4, 5, 6]
  
  return {
    id,
    grossPay: gross,
    filingStatus: filingStatus,
    has401k,
    k401Percent: has401k ? [3, 4, 5, 6][Math.floor(Math.random() * 4)] : 0,
    stateTax: stateTaxOptions[Math.floor(Math.random() * stateTaxOptions.length)]
  }
}

const calculateAnswer = (problem: Problem): number => {
  const { grossPay, filingStatus, has401k, k401Percent: percent401, stateTax } = problem
  
  let taxableIncome = grossPay
  if (has401k) {
    taxableIncome -= grossPay * (percent401 / 100)
  }
  
  const singleBrackets = [
    { max: 500, tax: 0 },
    { max: 1000, tax: 10 + (taxableIncome - 500) * 0.1 },
    { max: 2000, tax: 60 + (taxableIncome - 1000) * 0.12 },
    { max: 4000, tax: 180 + (taxableIncome - 2000) * 0.22 },
    { max: 999999, tax: 620 + (taxableIncome - 4000) * 0.24 }
  ]
  
  const marriedBrackets = [
    { max: 1000, tax: 0 },
    { max: 2000, tax: 20 + (taxableIncome - 1000) * 0.1 },
    { max: 4000, tax: 120 + (taxableIncome - 2000) * 0.12 },
    { max: 8000, tax: 360 + (taxableIncome - 4000) * 0.22 },
    { max: 999999, tax: 1240 + (taxableIncome - 8000) * 0.24 }
  ]
  
  const brackets = filingStatus === "single" ? singleBrackets : marriedBrackets
  let federalTax = 0
  for (const bracket of brackets) {
    if (taxableIncome <= bracket.max) {
      federalTax = bracket.tax
      break
    }
  }
  
  const socialSecurity = grossPay * 0.062
  const medicare = grossPay * 0.0145
  const stateTaxAmount = grossPay * (stateTax / 100)
  
  const netPay = grossPay - federalTax - socialSecurity - medicare - stateTaxAmount
  
  return Math.round(netPay * 100) / 100
}

const calculateEmployerCost = (grossPay: number): number => {
  const employerSS = grossPay * 0.062
  const employerMed = grossPay * 0.0145
  return grossPay + employerSS + employerMed
}

export default function Phase4Page() {
  const [currentProblem, setCurrentProblem] = useState<Problem>(generateProblem(1))
  const [userNetPay, setUserNetPay] = useState("")
  const [userEmployerCost, setUserEmployerCost] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [masteryReached, setMasteryReached] = useState(false)

  const correctNetPay = calculateAnswer(currentProblem)
  const correctEmployerCost = calculateEmployerCost(currentProblem.grossPay)

  const handleSubmit = () => {
    const userNet = parseFloat(userNetPay)
    const userEmployer = parseFloat(userEmployerCost)
    
    const netCorrect = Math.abs(userNet - correctNetPay) < 5
    const employerCorrect = Math.abs(userEmployer - correctEmployerCost) < 5
    
    setCorrect(netCorrect && employerCorrect)
    setSubmitted(true)
    
    if (netCorrect && employerCorrect) {
      const newConsecutive = consecutiveCorrect + 1
      setConsecutiveCorrect(newConsecutive)
      if (newConsecutive >= 5) {
        setMasteryReached(true)
      }
    } else {
      setConsecutiveCorrect(0)
    }
  }

  const handleNewProblem = () => {
    setCurrentProblem(generateProblem(currentProblem.id + 1))
    setUserNetPay("")
    setUserEmployerCost("")
    setSubmitted(false)
    setCorrect(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900">Independent Practice: Net Pay Calculation</h2>
          <p>
            Calculate both the employee's net pay AND the employer's total cost. Round to the nearest dollar.
          </p>
        </div>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Mastery Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-900">
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-white rounded-full h-4 border">
                <div 
                  className="bg-green-500 h-full rounded-full transition-all"
                  style={{ width: `${(consecutiveCorrect / 5) * 100}%` }}
                />
              </div>
              <span className="font-semibold">{consecutiveCorrect}/5 correct in a row</span>
              {masteryReached && (
                <Trophy className="h-6 w-6 text-amber-500" />
              )}
            </div>
            <p className="text-sm mt-2">Get 5 correct in a row to reach mastery.</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">
              Problem #{currentProblem.id}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 p-4 rounded border">
              <h4 className="font-semibold mb-2">Employee Data</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><strong>Gross Pay:</strong> ${currentProblem.grossPay.toLocaleString()}</div>
                <div><strong>Filing Status:</strong> {currentProblem.filingStatus === "single" ? "Single" : "Married"}</div>
                {currentProblem.has401k && (
                  <div><strong>401(k) Contribution:</strong> {currentProblem.k401Percent}%</div>
                )}
                <div><strong>State Tax Rate:</strong> {currentProblem.stateTax}%</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="netPay">Employee Net Pay (take-home)</Label>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">$</span>
                  <Input
                    id="netPay"
                    type="number"
                    placeholder="0"
                    value={userNetPay}
                    onChange={(e) => setUserNetPay(e.target.value)}
                    disabled={submitted}
                    className="font-mono"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="employerCost">Employer Total Cost</Label>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">$</span>
                  <Input
                    id="employerCost"
                    type="number"
                    placeholder="0"
                    value={userEmployerCost}
                    onChange={(e) => setUserEmployerCost(e.target.value)}
                    disabled={submitted}
                    className="font-mono"
                  />
                </div>
              </div>
            </div>

            {submitted && (
              <div className={`p-4 rounded border ${correct ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <div className="flex items-center gap-2 mb-2">
                  {correct ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-semibold ${correct ? "text-green-800" : "text-red-800"}`}>
                    {correct ? "Correct!" : "Not quite right"}
                  </span>
                </div>
                {!correct && (
                  <div className="text-sm text-red-700 space-y-1">
                    <p>Correct answers:</p>
                    <p><strong>Net Pay:</strong> ${correctNetPay.toLocaleString()}</p>
                    <p><strong>Employer Cost:</strong> ${correctEmployerCost.toLocaleString()}</p>
                    <p className="mt-2">
                      Hint: Gross - Federal Tax - SS - Medicare - State = Net Pay. 
                      Employer pays Gross + Employer SS + Employer Medicare.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2">
              {!submitted ? (
                <Button onClick={handleSubmit} disabled={!userNetPay || !userEmployerCost}>
                  Check Answer
                </Button>
              ) : (
                <Button onClick={handleNewProblem}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  New Problem
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Quick Reference</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Employee Deductions</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Federal Income Tax (progressive brackets)</li>
                  <li>Social Security: 6.2% (capped)</li>
                  <li>Medicare: 1.45% (no cap)</li>
                  <li>State Tax (if applicable)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Employer Expenses</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Gross Pay</li>
                  <li>Social Security: 6.2% (matches employee)</li>
                  <li>Medicare: 1.45% (matches employee)</li>
                  <li>Total ≈ Gross × 1.0765</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}