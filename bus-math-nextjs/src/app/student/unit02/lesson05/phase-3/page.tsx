"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

interface CloseStep {
  id: number
  name: string
  description: string
  input: string
  output: string
}

const closeSteps: CloseStep[] = [
  {
    id: 1,
    name: "Read Input Data",
    description: "Load the unadjusted trial balance amounts from the input area",
    input: "Unadjusted TB values",
    output: "Values loaded into named ranges"
  },
  {
    id: 2,
    name: "Calculate Adjusting Entries",
    description: "Apply adjustment rules to each account that needs updating",
    input: "Named ranges: Supplies, PrepaidInsurance, Equipment, WagesPayable, UnearnedRevenue",
    output: "Adjusting entry amounts computed"
  },
  {
    id: 3,
    name: "Verify Debits = Credits",
    description: "Check that total adjusting debits equal total adjusting credits",
    input: "Adjusting entry amounts",
    output: "Verification pass or fail flag"
  },
  {
    id: 4,
    name: "Produce Adjusted Trial Balance",
    description: "Add adjustments to unadjusted balances to get adjusted balances",
    input: "Unadjusted balances + adjusting entries",
    output: "Adjusted Trial Balance with all accounts"
  },
  {
    id: 5,
    name: "Report Close Status",
    description: "Display 'Complete' if all checks pass, or 'Error' with flagged items",
    input: "Verification results",
    output: "CloseStatus cell shows result"
  }
]

export default function Phase3Page() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [completed, setCompleted] = useState(false)

  const step = closeSteps[currentStep]

  const checkAnswers: Record<number, string[]> = {
    0: ["supplies", "prepaid insurance", "equipment", "wages payable", "unearned revenue"],
    1: ["5500", "300", "400", "1800", "1200"],
    2: ["9200"],
    3: ["adjusted trial balance", "adjusted tb"],
    4: ["complete"]
  }

  const handleCheck = () => {
    const validAnswers = checkAnswers[currentStep] || []
    const isCorrect = validAnswers.some(ans => 
      userAnswer.toLowerCase().includes(ans.toLowerCase())
    )
    
    if (isCorrect) {
      setFeedback({ type: "success", message: `Correct! ${step.output}` })
      if (currentStep < closeSteps.length - 1) {
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
        message: `Not quite. Think about what this step produces. Hint: ${step.description}` 
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
        lesson={lesson05Data} 
        phase={currentPhase}
        phases={lesson05Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              Phase 3: Safe Rehearsal
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Simulate the Close Flow
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Walk through each step of the automated close before touching the real workbook.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Month-End Close Flow Simulator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-purple-800">
                This simulator mirrors the exact logic your workbook automation will follow. At each step, identify what the automation needs to do. Get all five steps correct to complete the rehearsal.
              </p>

              <div className="bg-purple-100 p-4 rounded border border-purple-300">
                <p className="text-sm text-purple-700">
                  <strong>Progress:</strong> Step {currentStep + 1} of {closeSteps.length}
                  {completed && (
                    <span className="ml-2 text-green-700 font-semibold">
                      ✓ Rehearsal Complete!
                    </span>
                  )}
                </p>
                <div className="flex gap-1 mt-2">
                  {closeSteps.map((s, i) => (
                    <div
                      key={s.id}
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
                        {step.id}
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-900">{step.name}</h4>
                        <p className="text-sm text-purple-700">{step.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 text-sm mb-4">
                      <div className="bg-purple-50 p-3 rounded border border-purple-200">
                        <span className="font-semibold">Input:</span> {step.input}
                      </div>
                      <div className="bg-purple-50 p-3 rounded border border-purple-200">
                        <span className="font-semibold">Expected Output:</span> {step.output}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-purple-900">
                        What does this step produce or verify?
                      </label>
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                        className="w-full px-3 py-2 border border-purple-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Type your answer..."
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
                          ✓ {closeSteps[currentStep - 1].name}
                        </span>
                      )}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-semibold">
                      → {currentStep < closeSteps.length - 1 ? closeSteps[currentStep + 1].name : "CloseStatus"}
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
                    You walked through all five steps of the automated close flow. The same sequence will run when you click the button in Phase 4.
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
              <CardTitle className="text-blue-800">
                Bridge to Phase 4: The Real Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-blue-800">
                The simulator you just completed mirrors exactly what your workbook automation will do. In Phase 4, you will:
              </p>
              <ol className="text-sm text-blue-800 space-y-1 ml-4 list-decimal">
                <li>Download the starter workbook <code>unit02-lesson05-student.xlsx</code></li>
                <li>Define named ranges for each input area</li>
                <li>Build calculation blocks for adjusting entries</li>
                <li>Add a verification checkpoint (debits = credits)</li>
                <li>Insert a button that runs the full close flow</li>
              </ol>
              <div className="bg-blue-100 p-4 rounded border border-blue-300 mt-4">
                <p className="text-sm text-blue-700">
                  <strong>Key difference:</strong> The simulator checked your understanding with text answers. The real workbook will compute actual numbers and prove the automation works with real data.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
