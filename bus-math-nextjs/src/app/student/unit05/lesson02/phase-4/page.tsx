import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, TrendingUp, Users, AlertCircle } from "lucide-react"
import { CashFlowChallenge } from "@/components/business-simulations/CashFlowChallenge"

const currentPhase = lesson02Phases[3] // Phase 4: Independent Practice

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="max-w-4xl mx-auto px-6 pb-8 space-y-8">
        {/* Independent Practice Content */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              <Target className="h-4 w-4" />
              Independent Practice
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              The Payroll Timing Challenge
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Now that you understand payroll calculations, it's time to face the real challenge: 
              managing the cash flow timing that keeps business owners awake at night.
            </p>
          </div>

          {/* Challenge Context */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 text-2xl flex items-center gap-2">
                <AlertCircle className="h-6 w-6" />
                Sarah's Cash Flow Reality
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-red-800">
              <p className="text-lg leading-relaxed">
                Sarah has mastered the payroll calculations. She knows exactly how much Alex will cost her: 
                $2,213 every two weeks. But knowing the amount is only half the battle.
              </p>
              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <h3 className="font-bold mb-2 text-red-900">The Real Challenge</h3>
                <p className="mb-2">
                  Sarah's revenue is project-based and irregular. Some weeks she invoices $15,000, 
                  other weeks $3,000, and sometimes clients are late with payments. 
                  But Alex's paycheck needs to be consistent—every two weeks, without fail.
                </p>
                <p className="font-semibold">
                  How can Sarah ensure she has $2,213 in her account every payday, 
                  regardless of when her project payments arrive?
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Complex Payroll Scenarios */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-2xl">Advanced Payroll Scenarios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-blue-800">
              <p className="text-lg leading-relaxed">
                Let's work through some complex payroll situations Sarah might encounter:
              </p>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold text-lg mb-3 text-blue-900">Scenario 1: Holiday Overtime Rush</h3>
                  <div className="space-y-2">
                    <p><strong>Situation:</strong> A client needs urgent work completed before New Year's. Alex works 95 hours in the two-week pay period.</p>
                    <div className="bg-blue-200 p-3 rounded">
                      <p><strong>Calculate:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Regular pay: 80 hours × $25 = $2,000</li>
                        <li>Overtime: 15 hours × $25 × 1.5 = $562.50</li>
                        <li>Gross pay: $2,562.50</li>
                        <li>Sarah's total cost: ~$2,840 (including employer taxes)</li>
                      </ul>
                    </div>
                    <p className="font-semibold text-blue-900">
                      Cash Impact: Sarah needs an extra $627 this pay period!
                    </p>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold text-lg mb-3 text-blue-900">Scenario 2: Multi-Employee Planning</h3>
                  <div className="space-y-2">
                    <p><strong>Situation:</strong> Sarah wants to hire a second person, Maria, as a part-time designer at $20/hour for 20 hours per week.</p>
                    <div className="bg-blue-200 p-3 rounded">
                      <p><strong>Calculate Total Bi-Weekly Payroll:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Alex: 80 hours × $25 = $2,000 gross</li>
                        <li>Maria: 40 hours × $20 = $800 gross</li>
                        <li>Combined gross: $2,800</li>
                        <li>Sarah's total cost: ~$3,100 (including all employer taxes)</li>
                      </ul>
                    </div>
                    <p className="font-semibold text-blue-900">
                      Cash Impact: Sarah needs $3,100 every two weeks like clockwork!
                    </p>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold text-lg mb-3 text-blue-900">Scenario 3: Salary vs. Hourly Comparison</h3>
                  <div className="space-y-2">
                    <p><strong>Situation:</strong> Alex asks to switch from hourly to salary: $52,000 per year.</p>
                    <div className="bg-blue-200 p-3 rounded">
                      <p><strong>Calculate and Compare:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Salary per paycheck: $52,000 ÷ 26 = $2,000 bi-weekly</li>
                        <li>Same as current 80 hours × $25</li>
                        <li>But no overtime pay for extra hours</li>
                        <li>Sarah's cost stays consistent: ~$2,213 every pay period</li>
                      </ul>
                    </div>
                    <p className="font-semibold text-blue-900">
                      Strategic Decision: More predictable costs, but different incentives for Alex
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Excel Planning */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Building Sarah's Payroll Predictor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-800">
              <p className="text-lg leading-relaxed">
                Sarah needs an Excel system that can handle all these scenarios and predict her cash needs. 
                Here's what her professional payroll calculator should include:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold mb-2 text-green-900">Input Variables</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Employee type (hourly vs. salaried)</li>
                    <li>• Regular hours per pay period</li>
                    <li>• Overtime hours (if any)</li>
                    <li>• Base pay rate</li>
                    <li>• State tax rates</li>
                    <li>• Benefits deductions</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold mb-2 text-green-900">Calculated Outputs</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Gross pay (regular + overtime)</li>
                    <li>• All employee tax deductions</li>
                    <li>• Net pay (what employee receives)</li>
                    <li>• Employer tax costs</li>
                    <li>• Total cost to Sarah</li>
                    <li>• Annual payroll projections</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-200 p-4 rounded-lg border border-green-400">
                <h3 className="font-bold mb-2 text-green-900">Key Excel Formulas Sarah Needs</h3>
                <div className="space-y-1 text-sm font-mono">
                  <p>Overtime Pay: =IF(Hours&gt;80, (Hours-80)*Rate*1.5, 0)</p>
                  <p>FICA Taxes: =GrossPay*0.062 + GrossPay*0.0145</p>
                  <p>Total Cost: =GrossPay + EmployerFICA + UnemploymentTax</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Think-Pair-Share Discussion */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-blue-800 mb-2">
                Consider the complex payroll scenarios above. Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Which scenario would be most challenging for Sarah's cash flow management and why?</li>
                <li>What strategies could Sarah use to ensure she always has enough cash for payroll?</li>
                <li>How might understanding these calculations give Sarah confidence to grow her business?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cash Flow Simulation */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl">Master the Timing Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-purple-800 mb-4">
                Experience the cash flow timing challenge that Sarah faces. This simulation shows how payroll obligations 
                interact with irregular business income. Can you manage the cash flow successfully?
              </p>
              <CashFlowChallenge />
            </CardContent>
          </Card>
        </div>
      </main>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}