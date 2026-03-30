"use client"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRight, Clock, CheckCircle, AlertTriangle } from "lucide-react"

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!
  const [step, setStep] = useState<'predict' | 'reveal'>('predict')
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const simulationData = {
    scenario: "TechStart Fitness Studio Retainer Client",
    cashBalance: 24500,
    retainerFee: 1200,
    earnedButUnbilled: 800,
    prepaidSoftwareExpense: 300,
    usedThisMonth: 150
  }

  const businessImpacts = {
    delayed: {
      decisionSpeed: "CEO waits 4 days for accurate profitability data",
      decisionQuality: "Make pricing decision with incomplete information",
      stakeholderConfidence: "Banker receives outdated financials after 2-day delay",
      opportunityCost: "Miss weekend window to present to potential investor"
    },
    timely: {
      decisionSpeed: "CEO has accurate profitability data in 4 hours",
      decisionQuality: "Make pricing decision with complete, reliable information",
      stakeholderConfidence: "Banker receives current financials immediately upon request",
      opportunityCost: "Ready for investor meeting with confidence in numbers"
    }
  }

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleReveal = () => {
    setStep('reveal')
  }

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
        {/* Guided Practice: Timing Simulation */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Guided Practice: The Business Impact of Closing Timing
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                Now you'll experience exactly how month-end closing timing affects business decisions. In this simulation, you'll predict business consequences of slow vs. fast closing, then see the real impacts.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Scenario Setup */}
        <Card className="border-blue-200 bg-blue-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-800">Shared Simulation: TechStart's Retainer Timing Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-700 leading-relaxed">
                Sarah has a new retainer client: TechStart Fitness Studio pays <strong>${simulationData.retainerFee}/month</strong> in advance for consulting services. By the end of the month, Sarah has completed <strong>${simulationData.earnedButUnbilled}</strong> of work that she hasn't billed yet. She also has <strong>${simulationData.prepaidSoftwareExpense}</strong> in prepaid software expenses, of which <strong>${simulationData.usedThisMonth}</strong> has been used this month.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">The Timing Dilemma</h4>
                <p className="text-blue-700 text-sm mb-4">
                  Sarah needs to make an important pricing decision for a new client proposal. She also needs to send current financial statements to a banker considering a loan. The question is: <strong>How does month-end closing timing affect her ability to make these decisions confidently?</strong>
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="text-blue-800 font-bold text-sm mb-1">Cash-Based Ledger (Current)</p>
                    <p className="text-blue-600 text-xs">Shows: Cash received ${simulationData.retainerFee}</p>
                    <p className="text-blue-600 text-xs">Doesn't show: Earned but unbilled ${simulationData.earnedButUnbilled}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="text-blue-800 font-bold text-sm mb-1">Accrual-Based Closing (Needed)</p>
                    <p className="text-blue-600 text-xs">Will show: Total revenue ${simulationData.retainerFee + simulationData.earnedButUnbilled}</p>
                    <p className="text-blue-600 text-xs">Plus: Proper expense recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Predict Step */}
        {step === 'predict' && (
          <Card className="border-purple-200 bg-purple-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800">🎯 Predict: What Happens If Closing Takes 4 Days?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-purple-700 leading-relaxed">
                  Imagine Sarah's month-end closing takes <strong>4 days instead of 4 hours</strong> (her target). What business consequences will this delay create? Make your prediction before we reveal the actual impacts.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="text-purple-800 font-medium mb-3">1. Decision Speed: How quickly can Sarah make her pricing decision?</p>
                    <div className="space-y-2">
                      {[
                        "She can make it immediately with current cash data",
                        "She waits 4 days for accurate profitability data",
                        "She makes the decision without financial data",
                        "She delays the decision until next month"
                      ].map((answer, idx) => (
                        <label key={idx} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-purple-100 rounded">
                          <input
                            type="radio"
                            name="q1"
                            value={answer}
                            checked={selectedAnswer === `q1-${idx}`}
                            onChange={() => handleAnswer(`q1-${idx}`)}
                            className="text-purple-600"
                          />
                          <span className="text-purple-700 text-sm">{answer}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="text-purple-800 font-medium mb-3">2. Opportunity Cost: What business opportunity might she miss?</p>
                    <div className="space-y-2">
                      {[
                        "She misses the weekend investor meeting",
                        "She loses the fitness studio client",
                        "She can't pay her software subscription",
                        "She has to delay her next project"
                      ].map((answer, idx) => (
                        <label key={idx} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-purple-100 rounded">
                          <input
                            type="radio"
                            name="q2"
                            value={answer}
                            checked={selectedAnswer === `q2-${idx}`}
                            onChange={() => handleAnswer(`q2-${idx}`)}
                            className="text-purple-600"
                          />
                          <span className="text-purple-700 text-sm">{answer}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="text-purple-800 font-medium mb-3">3. Stakeholder Confidence: What does the banker experience?</p>
                    <div className="space-y-2">
                      {[
                        "Receives current financials immediately",
                        "Receives outdated financials after 2-day delay",
                        "Receives no financial statements at all",
                        "Gets worried about the business viability"
                      ].map((answer, idx) => (
                        <label key={idx} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-purple-100 rounded">
                          <input
                            type="radio"
                            name="q3"
                            value={answer}
                            checked={selectedAnswer === `q3-${idx}`}
                            onChange={() => handleAnswer(`q3-${idx}`)}
                            className="text-purple-600"
                          />
                          <span className="text-purple-700 text-sm">{answer}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Button
                    onClick={handleReveal}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                  >
                    Reveal the Real Impacts
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reveal Step */}
        {step === 'reveal' && (
          <>
            <Card className="border-red-200 bg-red-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Reality: 4-Day Closing Delay Creates Real Problems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-red-700 leading-relaxed">
                    When month-end closing takes days instead of hours, it's not just an annoyance—it creates real business consequences. Here's what Sarah experienced:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-800 mb-2">Decision Speed: Delayed by 4 Days</h4>
                          <p className="text-red-700 text-sm mb-2"><strong>Before Reveal (Your Prediction):</strong> {selectedAnswer?.startsWith('q1-1') ? '✓ Correct!' : '✗ Different prediction'}</p>
                          <p className="text-red-600 text-sm"><strong>Reality:</strong> CEO waits 4 days for accurate profitability data, making the pricing decision under time pressure with incomplete information.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-800 mb-2">Opportunity Cost: Missed Investor Meeting</h4>
                          <p className="text-red-700 text-sm mb-2"><strong>Before Reveal (Your Prediction):</strong> {selectedAnswer?.startsWith('q2-0') ? '✓ Correct!' : '✗ Different prediction'}</p>
                          <p className="text-red-600 text-sm"><strong>Reality:</strong> Missed the weekend window to present to a potential investor because financial statements weren't ready to support the pitch.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-800 mb-2">Stakeholder Confidence: Banker Receives Delayed Financials</h4>
                          <p className="text-red-700 text-sm mb-2"><strong>Before Reveal (Your Prediction):</strong> {selectedAnswer?.startsWith('q3-1') ? '✓ Correct!' : '✗ Different prediction'}</p>
                          <p className="text-red-600 text-sm"><strong>Reality:</strong> Banker receives outdated financials after a 2-day delay, creating uncertainty about whether the business has its financial house in order.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card className="border-green-200 bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="text-2xl">Before & After: The Business Impact</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="p-3 text-left font-semibold text-green-800">Business Dimension</th>
                        <th className="p-3 text-left font-semibold text-red-800">4-Day Closing Delay</th>
                        <th className="p-3 text-left font-semibold text-green-800">4-Hour Target Closing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Decision Speed</td>
                        <td className="p-3 text-red-700">{businessImpacts.delayed.decisionSpeed}</td>
                        <td className="p-3 text-green-700">{businessImpacts.timely.decisionSpeed}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Decision Quality</td>
                        <td className="p-3 text-red-700">{businessImpacts.delayed.decisionQuality}</td>
                        <td className="p-3 text-green-700">{businessImpacts.timely.decisionQuality}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Stakeholder Confidence</td>
                        <td className="p-3 text-red-700">{businessImpacts.delayed.stakeholderConfidence}</td>
                        <td className="p-3 text-green-700">{businessImpacts.timely.stakeholderConfidence}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Opportunity Cost</td>
                        <td className="p-3 text-red-700">{businessImpacts.delayed.opportunityCost}</td>
                        <td className="p-3 text-green-700">{businessImpacts.timely.opportunityCost}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Key Insight */}
            <Card className="border-amber-200 bg-amber-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-800 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Key Insight: Month-End Closing is Business Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-amber-700 leading-relaxed">
                    This simulation shows that month-end closing isn't just an accounting exercise—it's a business control system. When closing is slow, decisions are delayed, confidence erodes, and opportunities are missed. When closing is fast and accurate, the business operates with real-time insight and professional credibility.
                  </p>

                  <div className="bg-white p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-3">What This Means for Your Month-End Wizard Project</h4>
                    <ul className="space-y-2 text-amber-700 text-sm">
                      <li>• Your automation must ensure <strong>accuracy</strong>—no errors or incomplete adjustments</li>
                      <li>• Your automation must deliver <strong>speed</strong>—closing in hours, not days</li>
                      <li>• Your automation must maintain <strong>compliance</strong>—all GAAP adjustments complete</li>
                      <li>• Success means business leaders can make decisions confidently, not accountants can work faster</li>
                    </ul>
                  </div>
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
