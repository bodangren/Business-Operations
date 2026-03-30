"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, PlayCircle } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"
import { useState } from "react"

const currentPhase = lesson05Phases[2]

export default function Phase3Page() {
  const [currentStep, setCurrentStep] = useState(0)
  const [debits, setDebits] = useState<number[]>([0, 0, 0])
  const [credits, setCredits] = useState<number[]>([0, 0, 0])
  const [showResult, setShowResult] = useState(false)

  const totalDebits = debits.reduce((a, b) => a + b, 0)
  const totalCredits = credits.reduce((a, b) => a + b, 0)
  const isBalanced = totalDebits === totalCredits

  const transactions = [
    { id: 1, account: "Cash", description: "Client payment received" },
    { id: 2, account: "Accounts Receivable", description: "Invoice sent to client" },
    { id: 3, account: "Office Supplies", description: "Supplies purchased" }
  ]

  const steps = [
    { title: "Enter Debits", description: "Record debit amounts for each transaction" },
    { title: "Enter Credits", description: "Record credit amounts for each transaction" },
    { title: "Check Balance", description: "Verify debits equal credits" }
  ]

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setDebits([0, 0, 0])
    setCredits([0, 0, 0])
    setShowResult(false)
  }

  const handleCheckBalance = () => {
    setShowResult(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              Phase 3: Safe Rehearsal — Practice Formula Logic
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Test SUMIF and Balance Check Logic Before Building in Excel
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              This simulator mirrors the formulas you'll build in Excel. Practice entering 
              transactions and checking that your ledger balances before you work in the real workbook.
            </p>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`text-center ${index <= currentStep ? 'text-purple-900' : 'text-gray-400'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2
                        ${index <= currentStep ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                        {index + 1}
                      </div>
                      <div className="text-xs font-medium max-w-24">{step.title}</div>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className={`h-5 w-5 mx-3 ${index < currentStep ? 'text-purple-600' : 'text-gray-300'}`} />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {currentStep === 0 && (
          <section className="max-w-4xl mx-auto space-y-4">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Step 1: Enter Debit Amounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-blue-800">
                  Enter the <strong>debit</strong> amount for each transaction. Think about what accounts 
                  Sarah is debiting in each case.
                </p>
                
                {transactions.map((t, index) => (
                  <div key={t.id} className="flex items-center gap-4 bg-blue-50 p-3 rounded">
                    <div className="flex-1">
                      <div className="font-semibold text-blue-900">{t.description}</div>
                      <div className="text-xs text-blue-700">Account: {t.account}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-blue-800">Debit:</label>
                      <input
                        type="number"
                        value={debits[index] || ''}
                        onChange={(e) => {
                          const newDebits = [...debits]
                          newDebits[index] = parseFloat(e.target.value) || 0
                          setDebits(newDebits)
                        }}
                        className="w-24 px-3 py-2 border border-blue-300 rounded text-right"
                        placeholder="0"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button onClick={handleNextStep} className="bg-purple-600 hover:bg-purple-700">
                Continue to Credits <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>
        )}

        {currentStep === 1 && (
          <section className="max-w-4xl mx-auto space-y-4">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">Step 2: Enter Credit Amounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-green-800">
                  Now enter the <strong>credit</strong> amount for each transaction. Remember: 
                  in double-entry bookkeeping, every transaction has equal debits and credits.
                </p>
                
                {transactions.map((t, index) => (
                  <div key={t.id} className="flex items-center gap-4 bg-green-50 p-3 rounded">
                    <div className="flex-1">
                      <div className="font-semibold text-green-900">{t.description}</div>
                      <div className="text-xs text-green-700">Account: {t.account}</div>
                      <div className="text-xs text-green-600">Debit: ${debits[index].toFixed(2)}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-green-800">Credit:</label>
                      <input
                        type="number"
                        value={credits[index] || ''}
                        onChange={(e) => {
                          const newCredits = [...credits]
                          newCredits[index] = parseFloat(e.target.value) || 0
                          setCredits(newCredits)
                        }}
                        className="w-24 px-3 py-2 border border-green-300 rounded text-right"
                        placeholder="0"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button onClick={handleNextStep} className="bg-purple-600 hover:bg-purple-700">
                Check Balance <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>
        )}

        {currentStep === 2 && (
          <section className="max-w-4xl mx-auto space-y-4">
            <Card className={`${isBalanced ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
              <CardHeader>
                <CardTitle className={`${isBalanced ? 'text-green-900' : 'text-red-900'}`}>
                  Step 3: Trial Balance Check
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  This simulates the Excel formula: <code>=IF(SUM(debits)=SUM(credits), "Balanced", "Out of Balance")</code>
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg border ${isBalanced ? 'border-green-300 bg-white' : 'border-red-300 bg-white'}`}>
                    <div className="text-sm font-medium text-gray-700 mb-1">Total Debits</div>
                    <div className="text-2xl font-bold text-gray-900">${totalDebits.toFixed(2)}</div>
                  </div>
                  <div className={`p-4 rounded-lg border ${isBalanced ? 'border-green-300 bg-white' : 'border-red-300 bg-white'}`}>
                    <div className="text-sm font-medium text-gray-700 mb-1">Total Credits</div>
                    <div className="text-2xl font-bold text-gray-900">${totalCredits.toFixed(2)}</div>
                  </div>
                </div>

                {!showResult ? (
                  <div className="text-center">
                    <Button onClick={handleCheckBalance} className="bg-blue-600 hover:bg-blue-700">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Check if Balanced
                    </Button>
                  </div>
                ) : (
                  <div className={`p-6 rounded-lg ${isBalanced ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'}`}>
                    <div className="flex items-center gap-3">
                      {isBalanced ? (
                        <>
                          <CheckCircle2 className="h-8 w-8 text-green-600" />
                          <div>
                            <div className="text-lg font-bold text-green-900">Balanced!</div>
                            <div className="text-sm text-green-800">
                              Debits equal credits. Your trial balance is correct, just like it would be in Excel.
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-8 w-8 text-red-600" />
                          <div>
                            <div className="text-lg font-bold text-red-900">Out of Balance</div>
                            <div className="text-sm text-red-800">
                              Difference: ${(totalDebits - totalCredits).toFixed(2)}. Find and fix the error before your ledger is reliable.
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button onClick={handleReset} variant="outline">
                Try Again
              </Button>
              {isBalanced && showResult && (
                <div className="text-sm text-purple-800 bg-purple-50 px-4 py-2 rounded">
                  Great! This logic is exactly what you'll build in Excel during Phase 4.
                </div>
              )}
            </div>
          </section>
        )}

        {/* Bridge to Phase 4 */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Bridge to Phase 4: Build Real Formulas in Excel</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 text-sm">
              <p className="mb-2">
                You just practiced the logic that SUMIF formulas and trial balance checks use. 
                In Phase 4, you'll:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Open your Lesson 04 workbook (the table you built)</li>
                <li>Write <code>=SUMIF()</code> formulas using table column references</li>
                <li>Create trial balance checks with <code>=IF()</code> formulas</li>
                <li>Add conditional formatting to create red flags for errors</li>
                           </ul>
              <p className="mt-2">
                The Excel formulas will work exactly like this simulator—totaling amounts and 
                checking if your ledger balances.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
