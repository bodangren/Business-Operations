import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Users, TrendingUp } from "lucide-react"
import InterestCalculationBuilder from "@/components/financial-calculations/InterestCalculationBuilder"

const currentPhase = lesson02Phases[2] // Phase 3: Guided Practice

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="max-w-4xl mx-auto px-6 pb-8 space-y-8">
        {/* Guided Practice Content */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              <Calculator className="h-4 w-4" />
              Guided Practice
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Building Sarah's Payroll Calculator
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Let's practice the mathematics behind payroll calculations using real scenarios 
              that Sarah will face when hiring Alex for TechStart Solutions.
            </p>
          </div>

          {/* Practice Context */}
          <Card className="border-2 border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 text-2xl">Sarah's Hiring Scenario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-indigo-800">
              <p className="text-lg leading-relaxed">
                Sarah is ready to hire Alex as a developer for TechStart Solutions. Here's what she's considering:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-300">
                  <h3 className="font-bold mb-2">Position Details</h3>
                  <ul className="space-y-1">
                    <li><strong>Role:</strong> Junior Developer</li>
                    <li><strong>Rate:</strong> $25 per hour</li>
                    <li><strong>Schedule:</strong> 40 hours per week</li>
                    <li><strong>Pay Period:</strong> Bi-weekly (every 2 weeks)</li>
                  </ul>
                </div>
                <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-300">
                  <h3 className="font-bold mb-2">Sarah's Concerns</h3>
                  <ul className="space-y-1">
                    <li>• Cash flow timing for payroll</li>
                    <li>• True cost including employer taxes</li>
                    <li>• Setting Alex's expectations correctly</li>
                    <li>• Planning for busy periods with overtime</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-Step Calculation Guide */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-2xl">Step-by-Step Calculation Walkthrough</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-green-800">
              <div className="grid gap-6">
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Step 1: Calculate Gross Pay</h3>
                  <div className="space-y-2">
                    <p><strong>Regular Time:</strong> 80 hours × $25/hour = $2,000</p>
                    <p><strong>With Overtime (90 hours):</strong> (80 × $25) + (10 × $25 × 1.5) = $2,000 + $375 = $2,375</p>
                    <div className="bg-green-200 p-2 rounded text-sm">
                      <p><strong>Excel Formula:</strong> =IF(Hours&gt;80, 80*Rate + (Hours-80)*Rate*1.5, Hours*Rate)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Step 2: Calculate FICA Taxes</h3>
                  <div className="space-y-2">
                    <p><strong>Social Security:</strong> $2,000 × 6.2% = $124.00</p>
                    <p><strong>Medicare:</strong> $2,000 × 1.45% = $29.00</p>
                    <p><strong>Total FICA:</strong> $124.00 + $29.00 = $153.00</p>
                    <div className="bg-green-200 p-2 rounded text-sm">
                      <p><strong>Excel Formula:</strong> =GrossPay*0.062 + GrossPay*0.0145</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Step 3: Estimate Federal Income Tax</h3>
                  <div className="space-y-2">
                    <p><strong>Approximate Rate:</strong> 12% for this income level</p>
                    <p><strong>Federal Tax:</strong> $2,000 × 12% = $240.00</p>
                    <div className="bg-green-200 p-2 rounded text-sm">
                      <p><strong>Note:</strong> Actual amount depends on Alex's W-4 form and tax tables</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Step 4: Calculate Net Pay</h3>
                  <div className="space-y-2">
                    <p><strong>Gross Pay:</strong> $2,000.00</p>
                    <p><strong>Less FICA:</strong> -$153.00</p>
                    <p><strong>Less Federal Tax:</strong> -$240.00</p>
                    <p><strong>Less State Tax (5%):</strong> -$100.00</p>
                    <p className="text-xl font-bold text-green-900 border-t pt-2"><strong>Net Pay:</strong> $1,507.00</p>
                    <div className="bg-green-200 p-2 rounded text-sm">
                      <p><strong>Take-Home Rate:</strong> About 75% of gross pay</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sarah's True Cost */}
          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-900 text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Sarah's True Payroll Cost
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-yellow-800">
              <p className="text-lg leading-relaxed">
                But wait—Sarah's cost is more than just Alex's gross pay! She also pays employer taxes:
              </p>
              <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2 text-yellow-900">Alex Receives</h3>
                    <p className="text-2xl font-bold">$1,507</p>
                    <p className="text-sm">Net pay in his bank account</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-yellow-900">Sarah Pays</h3>
                    <p className="text-2xl font-bold">$2,153</p>
                    <p className="text-sm">Gross + employer FICA + unemployment taxes</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-200 rounded">
                  <h4 className="font-bold text-yellow-900 mb-2">Sarah's Total Cost Breakdown:</h4>
                  <div className="space-y-1 text-sm">
                    <p>Alex's Gross Pay: $2,000</p>
                    <p>Employer FICA: $153 (Sarah matches Alex's FICA taxes)</p>
                    <p>Federal & State Unemployment: ~$60</p>
                    <p><strong>Total Cost to Sarah: $2,213</strong></p>
                  </div>
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
                Look at the calculation walkthrough above. Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>What surprised you most about the difference between gross pay, net pay, and Sarah's total cost?</li>
                <li>Why is it important for Sarah to understand her true payroll costs, not just the gross wage?</li>
                <li>How might this calculation change if Alex works overtime during busy project periods?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Interactive Calculator */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl">Practice with Sarah's Scenarios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-purple-800 mb-4">
                Use this interactive calculator to explore different payroll scenarios that Sarah might encounter. 
                Try calculating payroll costs for various situations Alex might face at TechStart Solutions.
              </p>
              <InterestCalculationBuilder />
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