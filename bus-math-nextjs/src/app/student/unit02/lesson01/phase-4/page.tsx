"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Target, CheckCircle, AlertTriangle, TrendingDown, TrendingUp } from "lucide-react"

type Choice = 'cash-ledger' | 'add-accruals' | 'full-adjusting'

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!
  const [choice, setChoice] = useState<Choice | null>(null)

  const scenarios = {
    'cash-ledger': {
      title: "Keep Using Cash Ledger Only",
      description: "Continue recording transactions as money changes hands. Make month-end decisions based on cash balances.",
      timing: "2 hours (fast)",
      accuracy: "Low - misses earned but unbilled revenue",
      compliance: "Poor - no accruals or deferrals",
      decisionQuality: "Low - based on incomplete data",
      stakeholderConfidence: "Low - financials don't match reality",
      scoreboard: {
        timing: 95,
        accuracy: 30,
        compliance: 20
      }
    },
    'add-accruals': {
      title: "Add Manual Accruals Only",
      description: "Continue using cash ledger but manually calculate and add accruals at month-end.",
      timing: "1-2 days (slow)",
      accuracy: "Medium - better but error-prone",
      compliance: "Partial - has accruals but may miss deferrals",
      decisionQuality: "Medium - better data but delayed",
      stakeholderConfidence: "Medium - accurate but late",
      scoreboard: {
        timing: 40,
        accuracy: 70,
        compliance: 60
      }
    },
    'full-adjusting': {
      title: "Build Month-End Close Workflow",
      description: "Implement complete month-end closing: accruals, deferrals, adjusting entries, and closing entries.",
      timing: "&lt; 4 hours (target)",
      accuracy: "High - complete and accurate",
      compliance: "Excellent - all GAAP adjustments",
      decisionQuality: "High - complete, timely, reliable data",
      stakeholderConfidence: "High - professional, current financials",
      scoreboard: {
        timing: 90,
        accuracy: 95,
        compliance: 100
      }
    }
  }

  const handleSelectChoice = (selectedChoice: Choice) => {
    setChoice(selectedChoice)
  }

  const selectedScenario = choice ? scenarios[choice] : null

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        {/* Independent Practice: Closing Approach Decision */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="h-6 w-6" />
              Independent Practice: Choose Your Month-End Closing Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                Sarah is deciding how to handle month-end closing as TechStart grows. You'll help her evaluate three different approaches. Each choice has consequences for timing, accuracy, compliance, and business confidence. Choose one approach to see its impacts.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Your Decision Impact</h3>
                <p className="text-blue-700 leading-relaxed">
                  The approach you choose will directly affect Sarah's ability to make decisions, report to stakeholders, and grow confidently. Pay attention to how each option performs on the month-end close workflow scoreboard.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Choice Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(scenarios).map(([key, scenario]) => (
            <Card
              key={key}
              className={`cursor-pointer transition-all hover:shadow-xl ${
                choice === key 
                  ? 'ring-4 ring-green-500 border-green-500' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
              onClick={() => handleSelectChoice(key as Choice)}
            >
              <CardHeader className={`p-4 ${
                choice === key 
                  ? 'bg-green-100' 
                  : 'bg-gray-50'
              }`}>
                <CardTitle className="text-base font-semibold text-gray-900">
                  {scenario.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  {scenario.description}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Timing:</span>
                    <span className={`font-medium ${
                      scenario.scoreboard.timing >= 80 ? 'text-green-700' : 
                      scenario.scoreboard.timing >= 50 ? 'text-yellow-700' : 
                      'text-red-700'
                    }`}>
                      {scenario.timing}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Accuracy:</span>
                    <span className={`font-medium ${
                      scenario.scoreboard.accuracy >= 80 ? 'text-green-700' : 
                      scenario.scoreboard.accuracy >= 50 ? 'text-yellow-700' : 
                      'text-red-700'
                    }`}>
                      {scenario.accuracy}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Compliance:</span>
                    <span className={`font-medium ${
                      scenario.scoreboard.compliance >= 80 ? 'text-green-700' : 
                      scenario.scoreboard.compliance >= 50 ? 'text-yellow-700' : 
                      'text-red-700'
                    }`}>
                      {scenario.compliance}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Consequences Display */}
        {selectedScenario && (
          <>
            <Card className="border-blue-200 bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Consequences of Your Choice</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Business Benefits
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800 font-medium text-sm mb-1">Decision Quality</p>
                        <p className="text-green-700 text-xs">{selectedScenario.decisionQuality}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800 font-medium text-sm mb-1">Stakeholder Confidence</p>
                        <p className="text-green-700 text-xs">{selectedScenario.stakeholderConfidence}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                      Business Risks
                    </h4>
                    <div className="space-y-3">
                      {choice === 'cash-ledger' && (
                        <>
                          <div className="bg-red-50 p-4 rounded-lg">
                            <AlertTriangle className="h-4 w-4 text-red-600 mb-1" />
                            <p className="text-red-700 text-xs">Financials don't show true profitability. Lenders may reject loan applications due to incomplete accounting.</p>
                          </div>
                          <div className="bg-red-50 p-4 rounded-lg">
                            <AlertTriangle className="h-4 w-4 text-red-600 mb-1" />
                            <p className="text-red-700 text-xs">Missing accruals means understated revenue and expenses. Can't make informed pricing decisions.</p>
                          </div>
                        </>
                      )}
                      {choice === 'add-accruals' && (
                        <>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <AlertTriangle className="h-4 w-4 text-yellow-600 mb-1" />
                            <p className="text-yellow-700 text-xs">Manual accrual calculations are error-prone. One mistake invalidates entire month's financials.</p>
                          </div>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <AlertTriangle className="h-4 w-4 text-yellow-600 mb-1" />
                            <p className="text-yellow-700 text-xs">2-day closing delay means missing time-sensitive opportunities and stakeholder impatience.</p>
                          </div>
                        </>
                      )}
                      {choice === 'full-adjusting' && (
                        <div className="bg-green-50 p-4 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-600 mb-1" />
                          <p className="text-green-700 text-xs">With proper automation (which you'll build in later lessons), this approach delivers speed, accuracy, and compliance.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scoreboard Comparison */}
            <Card className="border-purple-200 bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <CardTitle className="text-2xl">Month-End Close Workflow Scoreboard</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Your Choice Performance</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Timing (target: &lt; 2 days)</span>
                          <span className={`font-semibold ${
                            selectedScenario.scoreboard.timing >= 80 ? 'text-green-700' : 
                            selectedScenario.scoreboard.timing >= 50 ? 'text-yellow-700' : 
                            'text-red-700'
                          }`}>
                            {selectedScenario.scoreboard.timing}%
                          </span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              selectedScenario.scoreboard.timing >= 80 ? 'bg-green-600' : 
                              selectedScenario.scoreboard.timing >= 50 ? 'bg-yellow-600' : 
                              'bg-red-600'
                            }`}
                            style={{ width: `${selectedScenario.scoreboard.timing}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Accuracy (target: zero errors)</span>
                          <span className={`font-semibold ${
                            selectedScenario.scoreboard.accuracy >= 80 ? 'text-green-700' : 
                            selectedScenario.scoreboard.accuracy >= 50 ? 'text-yellow-700' : 
                            'text-red-700'
                          }`}>
                            {selectedScenario.scoreboard.accuracy}%
                          </span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              selectedScenario.scoreboard.accuracy >= 80 ? 'bg-green-600' : 
                              selectedScenario.scoreboard.accuracy >= 50 ? 'bg-yellow-600' : 
                              'bg-red-600'
                            }`}
                            style={{ width: `${selectedScenario.scoreboard.accuracy}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Compliance (target: all GAAP adjustments)</span>
                          <span className={`font-semibold ${
                            selectedScenario.scoreboard.compliance >= 80 ? 'text-green-700' : 
                            selectedScenario.scoreboard.compliance >= 50 ? 'text-yellow-700' : 
                            'text-red-700'
                          }`}>
                            {selectedScenario.scoreboard.compliance}%
                          </span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              selectedScenario.scoreboard.compliance >= 80 ? 'bg-green-600' : 
                              selectedScenario.scoreboard.compliance >= 50 ? 'bg-yellow-600' : 
                              'bg-red-600'
                            }`}
                            style={{ width: `${selectedScenario.scoreboard.compliance}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Key Insight</h4>
                    <p className="text-amber-700 text-sm">
                      {choice === 'cash-ledger' && "Fast timing doesn't matter if accuracy and compliance are low. Sarah needs to move beyond cash-only recording as TechStart grows."}
                      {choice === 'add-accruals' && "Adding accruals improves accuracy but kills timing. The manual process creates a new bottleneck—now accuracy is high, but business decisions are still delayed."}
                      {choice === 'full-adjusting' && "This is the right direction. The challenge is making this complete workflow fast enough to meet business needs—which is where automation comes in."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Surface vs. Deep Problem */}
            <Card className="border-gray-200 bg-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800">Surface Activity vs. Deeper Accounting Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-700 mb-3">Surface Activity (What Sarah Did)</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Sarah spent her entire weekend trying to make her cash ledger work for month-end closing. She found errors, fixed them, cross-referenced transactions, and tried to match everything to the bank.
                    </p>
                    <p className="text-gray-500 text-xs italic">
                      This is a surface-level fix to the wrong problem.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-700 mb-3">Deeper Accounting Problem (Root Cause)</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      The real problem is that a cash ledger cannot support accrual accounting. Month-end closing requires accruals, deferrals, adjusting entries, and closing entries to show true business performance. No amount of cash ledger cleanup can solve this fundamental gap.
                    </p>
                    <p className="text-gray-500 text-xs italic">
                      This requires a different approach, not harder work on the same approach.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm font-medium">
                    <strong>Lesson Takeaway:</strong> Month-end closing is an accounting workflow problem, not a data-entry problem. Sarah needs to learn accrual and deferral principles (which you'll do in Lessons 2-4) and then automate this workflow (which you'll do in Lessons 5-6).
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        )}
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
