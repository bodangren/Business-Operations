import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Lightbulb, TrendingUp } from "lucide-react"
import TransactionJournal from "@/components/accounting/TransactionJournal"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[3] // Phase 4

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit02Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-6xl mx-auto space-y-8">

          {/* Independent Practice Challenge */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Independent Challenge: Build Your Adjusting Entry Expertise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-purple-900">
                <p>
                  Now it's your turn to demonstrate mastery of adjusting entries. You'll work independently to create 
                  journal entries for complex business scenarios, just like Sarah faces at the end of each month. 
                  This is your chance to build confidence in handling real-world month-end adjustments.
                </p>

                <p>
                  Each scenario you create should represent one of the four types of adjusting entries you've learned. 
                  The system will provide real-time feedback on your entries, helping you identify and correct any 
                  errors as you work.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 not-prose">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-200 text-green-800">Success Target</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Accuracy Goal</h4>
                    <p className="text-sm text-green-800">
                      Aim for 80% or higher accuracy on your adjusting entries. Each entry should be properly 
                      balanced and use the correct accounts for the business situation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <Badge className="bg-blue-200 text-blue-800">Time Management</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-blue-900 mb-2">Work Efficiently</h4>
                    <p className="text-sm text-blue-800">
                      Take your time to analyze each scenario carefully, but practice working at a reasonable pace. 
                      Professional month-end closing requires both accuracy and efficiency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                      <Badge className="bg-amber-200 text-amber-800">Self-Evaluation</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-amber-900 mb-2">Learn from Feedback</h4>
                    <p className="text-sm text-amber-800">
                      Use the system's immediate feedback to understand where you need improvement. 
                      Don't just fix errors—understand why they occurred.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Scenario Planning Guide */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Advanced Scenario Planning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-blue-900">
                <p>
                  As you create your own adjusting entries, think beyond Sarah's basic situations. Consider these 
                  more complex scenarios that growing businesses frequently encounter:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Advanced Accrual Scenarios</h4>
                  <div className="space-y-3">
                    <Card className="border-blue-300 bg-blue-100 p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Multi-month projects:</strong> A 3-month consulting project where you bill monthly 
                        but work is completed unevenly across the period.
                      </p>
                    </Card>
                    <Card className="border-blue-300 bg-blue-100 p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Accrued expenses:</strong> Utilities used in March but the bill doesn't arrive until April. 
                        How do you estimate and record the expense?
                      </p>
                    </Card>
                    <Card className="border-blue-300 bg-blue-100 p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Interest income:</strong> Money in a business savings account earns interest monthly, 
                        but it's only deposited quarterly.
                      </p>
                    </Card>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Complex Deferral Situations</h4>
                  <div className="space-y-3">
                    <Card className="border-blue-300 bg-blue-100 p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Subscription services:</strong> A client pays for 12 months of service upfront. 
                        How do you recognize revenue each month?
                      </p>
                    </Card>
                    <Card className="border-blue-300 bg-blue-100 p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Prepaid expenses:</strong> You pay 6 months of rent in advance. How do you spread 
                        this expense across the correct periods?
                      </p>
                    </Card>
                    <Card className="border-blue-300 bg-blue-100 p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Gift cards sold:</strong> When customers buy gift cards, you receive cash but owe 
                        products or services. How do you handle redemptions?
                      </p>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Professional Practice Tip</h4>
                <p className="text-blue-800">
                  Real businesses often have multiple adjusting entries of the same type in a single month. 
                  For example, a consulting firm might have 5-10 different accrued revenue entries for various 
                  projects at different stages of completion. Practice thinking about how you would systematize 
                  and streamline this process—that's exactly what Sarah's Month-End Wizard needs to accomplish.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Transaction Journal Component */}
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Independent Practice Journal</h2>
              <p className="text-gray-600">
                Create and validate your own adjusting entries using professional journal entry formats.
              </p>
            </div>
            
            <TransactionJournal
              title="Month-End Adjusting Entries Practice"
              clientTypes={[
                "TechStart Solutions",
                "Marketing Agency",
                "Consulting Firm", 
                "E-commerce Business",
                "Software Development",
                "Design Studio",
                "Financial Planning",
                "Real Estate Services"
              ]}
              maxTransactions={8}
              showAnalytics={true}
            />
          </div>

          {/* Self-Assessment Checklist */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Self-Assessment: Month-End Mastery Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-green-900">
                  Use this checklist to evaluate your progress. Check off each item as you demonstrate competency:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">Technical Skills</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I can identify when accrued revenue adjustments are needed</span>
                      </label>
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I can calculate the correct portion of deferred revenue to recognize</span>
                      </label>
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I can compute monthly depreciation using the straight-line method</span>
                      </label>
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I can prepare proper closing entries to transfer net income</span>
                      </label>
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">All my journal entries balance (debits = credits)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">Professional Understanding</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I understand why GAAP requires these adjusting entries</span>
                      </label>
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I can explain how adjusting entries improve financial statement accuracy</span>
                      </label>
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I recognize the business impact of proper revenue timing</span>
                      </label>
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I can identify adjusting entry needs in new business scenarios</span>
                      </label>
                      <label className="flex items-center gap-2 text-green-800">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">I understand how this prepares for building automation tools</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200 mt-4">
                  <p className="text-green-800 text-sm">
                    <strong>Goal:</strong> Complete at least 6 different adjusting entries with 80%+ accuracy before 
                    moving to the assessment phase. Quality understanding is more important than speed at this stage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  )
}