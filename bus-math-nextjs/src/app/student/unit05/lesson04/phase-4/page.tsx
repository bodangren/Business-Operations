"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle, RotateCcw } from "lucide-react"
import { useState } from "react"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[3]

interface TimingProblem {
  id: number
  grossPay: number
  employeeDeductions: number
  employerTaxRate: number
  daysUntilClear: number
  bankBalance: number
}

const generateProblem = (seed: number): TimingProblem => {
  const multiplier = seed % 5 + 1
  return {
    id: seed,
    grossPay: 5000 + (seed * 1000) % 8000,
    employeeDeductions: 1200 + (seed * 100) % 800,
    employerTaxRate: 0.0765,
    daysUntilClear: 2 + (seed % 4),
    bankBalance: 15000 + (seed * 2000) % 10000
  }
}

const checkAnswer = (problem: TimingProblem, netPayAnswer: number, liabilityAnswer: number, floatAnswer: number) => {
  const netPay = problem.grossPay - problem.employeeDeductions
  const employerTax = Math.round(problem.grossPay * problem.employerTaxRate)
  const totalLiability = problem.employeeDeductions + employerTax
  const expectedFloat = problem.bankBalance - netPay
  
  const netCorrect = Math.abs(netPayAnswer - netPay) < 1
  const liabCorrect = Math.abs(liabilityAnswer - totalLiability) < 1
  const floatCorrect = Math.abs(floatAnswer - expectedFloat) < 1
  
  return { netPay, employerTax, totalLiability, expectedFloat, netCorrect, liabCorrect, floatCorrect }
}

export default function Phase4Page() {
  const [problemNumber, setProblemNumber] = useState(1)
  const [problem] = useState(() => generateProblem(1))
  const [netPayInput, setNetPayInput] = useState("")
  const [liabilityInput, setLiabilityInput] = useState("")
  const [floatInput, setFloatInput] = useState("")
  const [result, setResult] = useState<ReturnType<typeof checkAnswer> | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [masteryCount, setMasteryCount] = useState(0)

  const handleCheck = () => {
    const net = parseFloat(netPayInput) || 0
    const liab = parseFloat(liabilityInput) || 0
    const float = parseFloat(floatInput) || 0
    const res = checkAnswer(problem, net, liab, float)
    setResult(res)
    setShowFeedback(true)
    if (res.netCorrect && res.liabCorrect && res.floatCorrect) {
      setMasteryCount(masteryCount + 1)
    }
  }

  const handleNewProblem = () => {
    const newNum = problemNumber + 1
    setProblemNumber(newNum)
    const newProblem = generateProblem(newNum)
    setNetPayInput("")
    setLiabilityInput("")
    setFloatInput("")
    setResult(null)
    setShowFeedback(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 4: Mastery Practice</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">Payroll Timing Calculator</h2>
                <p className="text-lg leading-relaxed">
                  Calculate the three key numbers for each payroll timing scenario. Get 3 correct in a row to demonstrate mastery.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-4">
                <p className="font-semibold text-orange-900">
                  Mastery Progress: {masteryCount} / 3 consecutive correct
                </p>
              </div>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Problem #{problemNumber}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 text-sm space-y-4">
                  <div className="bg-white p-4 rounded border border-orange-200">
                    <p className="font-semibold mb-2">Given information:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Gross wages: ${problem.grossPay.toLocaleString()}</li>
                      <li>Employee deductions: ${problem.employeeDeductions.toLocaleString()}</li>
                      <li>Employer tax rate: {problem.employerTaxRate * 100}%</li>
                      <li>Direct deposit clears in: {problem.daysUntilClear} days</li>
                      <li>Bank balance on payday: ${problem.bankBalance.toLocaleString()}</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block font-medium mb-1">
                        1. Net pay to employees (what actually leaves the bank):
                      </label>
                      <input
                        type="number"
                        value={netPayInput}
                        onChange={(e) => setNetPayInput(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter dollar amount"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">
                        2. Total payroll liability on the books (deductions + employer tax):
                      </label>
                      <input
                        type="number"
                        value={liabilityInput}
                        onChange={(e) => setLiabilityInput(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter dollar amount"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">
                        3. Available cash float after payroll clears (bank balance - net pay):
                      </label>
                      <input
                        type="number"
                        value={floatInput}
                        onChange={(e) => setFloatInput(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter dollar amount"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleCheck}
                    className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
                  >
                    Check Answers
                  </button>

                  {showFeedback && result && (
                    <div className={`mt-4 p-4 rounded ${result.netCorrect && result.liabCorrect && result.floatCorrect ? "bg-green-100" : "bg-red-100"}`}>
                      <p className="font-semibold mb-2">
                        {result.netCorrect && result.liabCorrect && result.floatCorrect ? "All correct!" : "Some answers need correction"}
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li className={result.netCorrect ? "text-green-700" : "text-red-700"}>
                          Net pay: {result.netPay.toLocaleString()} {result.netCorrect ? "✓" : `(your answer: ${netPayInput})`}
                        </li>
                        <li className={result.liabCorrect ? "text-green-700" : "text-red-700"}>
                          Total liability: {result.totalLiability.toLocaleString()} {result.liabCorrect ? "✓" : `(your answer: ${liabilityInput})`}
                        </li>
                        <li className={result.floatCorrect ? "text-green-700" : "text-red-700"}>
                          Cash float: {result.expectedFloat.toLocaleString()} {result.floatCorrect ? "✓" : `(your answer: ${floatInput})`}
                        </li>
                      </ul>
                      <button
                        onClick={handleNewProblem}
                        className="mt-3 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 flex items-center gap-2"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Try Another Problem
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800">Formula Reference</CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 text-sm space-y-2">
                  <p><strong>Net Pay</strong> = Gross Pay - Employee Deductions</p>
                  <p><strong>Employer Tax</strong> = Gross Pay × 7.65% (0.0765)</p>
                  <p><strong>Total Liability</strong> = Employee Deductions + Employer Tax</p>
                  <p><strong>Cash Float</strong> = Bank Balance - Net Pay</p>
                </CardContent>
              </Card>

              {masteryCount >= 3 && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>Mastery achieved!</strong> You can now calculate payroll timing, liabilities, and cash float. This skill directly supports the Excel automation coming in Lessons 05-06.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}