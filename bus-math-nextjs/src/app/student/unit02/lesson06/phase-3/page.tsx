"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, ArrowRight, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

interface ValidationRule {
  id: number
  name: string
  input: string
  rule: string
  expectedBehavior: string
  correctAnswer: string
}

const validationRules: ValidationRule[] = [
  {
    id: 1,
    name: "Supplies Amount Check",
    input: "Supplies used amount",
    rule: "Must be between 0 and the unadjusted Supplies balance",
    expectedBehavior: "Flag negative amounts or amounts greater than the total",
    correctAnswer: "flag"
  },
  {
    id: 2,
    name: "Period Date Check",
    input: "Close period date",
    rule: "Must be the last day of a month",
    expectedBehavior: "Flag dates that are not month-end dates",
    correctAnswer: "flag"
  },
  {
    id: 3,
    name: "Debits Equal Credits",
    input: "Total adjusting debits and credits",
    rule: "Total debits must equal total credits exactly",
    expectedBehavior: "Show ERROR if they differ, OK if they match",
    correctAnswer: "error"
  },
  {
    id: 4,
    name: "AccountID Validation",
    input: "Account ID in the adjustment entry",
    rule: "Must match an account in the chart of accounts",
    expectedBehavior: "Flag unknown account IDs before the close runs",
    correctAnswer: "flag"
  },
  {
    id: 5,
    name: "CloseStatus Update",
    input: "All validation checks passed",
    rule: "If all checks pass, CloseStatus shows 'Complete'",
    expectedBehavior: "Update CloseStatus to 'Complete' after successful run",
    correctAnswer: "complete"
  }
]

export default function Phase3Page() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [completed, setCompleted] = useState(false)

  const rule = validationRules[currentStep]

  const handleCheck = () => {
    const isCorrect = userAnswer.toLowerCase().includes(rule.correctAnswer.toLowerCase())
    
    if (isCorrect) {
      setFeedback({ type: "success", message: `Correct! The automation should ${rule.expectedBehavior}.` })
      if (currentStep < validationRules.length - 1) {
        setTimeout(() => {
          setCurrentStep(prev => prev + 1)
          setUserAnswer("")
          setFeedback(null)
        }, 1500)
      } else {
        setCompleted(true)
      }
    } else {
      setFeedback({ 
        type: "error", 
        message: `Not quite. Think about what should happen when this rule is triggered. Hint: ${rule.expectedBehavior}` 
      })
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setUserAnswer("")
    setFeedback(null)
    setCompleted(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson06Data} 
        phase={currentPhase}
        phases={lesson06Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              Phase 3: Safe Rehearsal
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Validation Logic Simulator
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Practice identifying what each validation rule should do before adding them to the real workbook.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Validation Rule Trainer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-purple-800">
                Each rule below is one validation check you will add to your workbook in Phase 4. Identify what the automation should do when the rule is triggered.
              </p>

              <div className="bg-purple-100 p-4 rounded border border-purple-300">
                <p className="text-sm text-purple-700">
                  <strong>Progress:</strong> Rule {currentStep + 1} of {validationRules.length}
                  {completed && (
                    <span className="ml-2 text-green-700 font-semibold">
                      ✓ Rehearsal Complete!
                    </span>
                  )}
                </p>
                <div className="flex gap-1 mt-2">
                  {validationRules.map((r, i) => (
                    <div
                      key={r.id}
                      className={`h-2 flex-1 rounded ${
                        i < currentStep
                          ? "bg-green-500"
                          : i === currentStep
                          ? "bg-purple-500"
                          : "bg-purple-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {!completed ? (
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        {rule.id}
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-900">{rule.name}</h4>
                        <p className="text-sm text-purple-700">{rule.rule}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 text-sm mb-4">
                      <div className="bg-purple-50 p-3 rounded border border-purple-200">
                        <span className="font-semibold">Input:</span> {rule.input}
                      </div>
                      <div className="bg-purple-50 p-3 rounded border border-purple-200">
                        <span className="font-semibold">Expected Behavior:</span> {rule.expectedBehavior}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-purple-900">
                        What should the automation do when this rule is triggered?
                      </label>
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                        className="w-full px-3 py-2 border border-purple-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Type your answer (e.g., flag the row, show error, update status)..."
                      />
                      <button
                        onClick={handleCheck}
                        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                      >
                        Check Answer
                      </button>
                    </div>

                    {feedback && (
                      <div className={`mt-3 p-3 rounded flex items-start gap-2 ${
                        feedback.type === "success"
                          ? "bg-green-50 border border-green-300 text-green-800"
                          : "bg-red-50 border border-red-300 text-red-800"
                      }`}>
                        {feedback.type === "success" ? (
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="text-sm">{feedback.message}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-purple-700">
                    <span>
                      {currentStep > 0 && (
                        <span className="text-green-700">
                          ✓ {validationRules[currentStep - 1].name}
                        </span>
                      )}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-semibold">
                      → {currentStep < validationRules.length - 1 ? validationRules[currentStep + 1].name : "Audit Panel"}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 p-6 rounded-lg border border-green-300 text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                  <h4 className="text-xl font-semibold text-green-900">
                    Rehearsal Complete!
                  </h4>
                  <p className="text-green-800">
                    You identified the correct behavior for all five validation rules. In Phase 4, you will add these exact checks to your workbook.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Run Again
                  </button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Bridge to Phase 4: The Real Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-blue-800">
                The validation rules you just practiced will be added to your Lesson 5 workbook. In Phase 4, you will:
              </p>
              <ol className="text-sm text-blue-800 space-y-1 ml-4 list-decimal">
                <li>Open your Lesson 5 workbook (or download the starter)</li>
                <li>Add validation rules for each input field</li>
                <li>Build user-facing controls (dropdown or toggle cell)</li>
                <li>Create an audit panel showing inputs, outputs, and verification</li>
                <li>Update the button flow to check validation before running</li>
              </ol>
              <div className="bg-blue-100 p-4 rounded border border-blue-300 mt-4">
                <p className="text-sm text-blue-700">
                  <strong>Key difference:</strong> The simulator asked you to identify correct behaviors. The real workbook will enforce those behaviors with actual formulas and conditional formatting.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
