import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calculator, Eye, Shield, Users } from "lucide-react"

export default function Phase3Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-purple-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice — Build Summary Skills
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Practice Status Formulas and Visual Cues
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Before building the live summary sheet, let's practice the key skills in a safe environment.
              You'll write status formulas, apply conditional formatting, and craft plain-language
              explanations.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Practice 1 — Status Formulas
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-4 leading-relaxed">
              <p className="font-semibold">Turn technical results into readable status messages</p>
              <p>
                Imagine these values from your workbook:
              </p>
              <div className="bg-white border border-blue-200 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Debits Total:</span>
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded">$12,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Credits Total:</span>
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded">$12,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Difference:</span>
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded">$0</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-blue-200">
                  <span className="font-semibold">Balance Status:</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">Write formula →</span>
                </div>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-2">Write an IF formula:</p>
                <div className="space-y-3">
                  <div className="flex gap-2 items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <code>=IF(Difference=0, "Balanced", "Review Needed")</code>
                  </div>
                  <div className="flex gap-2 items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <code>=IF(COUNTIF('Error Checks'!C2:C5,"Review")=0, "All Controls Pass", "Review Controls")</code>
                  </div>
                </div>
                <div className="bg-blue-100 border border-blue-300 rounded p-3 mt-3">
                  <p className="font-semibold text-blue-800">Why this works:</p>
                  <p className="text-sm text-blue-900 mt-1">
                    The IF formula checks the condition and returns two possible messages.
                    The IF formula returns a clear status. The Error Checks sheet shows which control needs attention.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Practice 2 — Conditional Formatting
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 space-y-4 leading-relaxed">
              <p className="font-semibold">Make status visible at a glance</p>
              <p>
                Apply conditional formatting rules to your status cells:
              </p>
              <div className="space-y-3">
                <div className="bg-white border border-green-300 rounded-lg p-4">
                  <p className="font-semibold text-green-800 mb-2">Rule 1: Balanced (Green)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Condition: <strong>Cell Value = 0</strong></li>
                    <li>Format: Green background, bold text</li>
                    <li>Apply to: Difference cell, Balance Status cell</li>
                  </ul>
                </div>
                <div className="bg-white border border-red-300 rounded-lg p-4">
                  <p className="font-semibold text-red-800 mb-2">Rule 2: Not Balanced (Red)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                     <li>Condition: <strong>Cell Value &gt; 0 OR Cell Value &lt; 0</strong></li>
                    <li>Format: Red background, bold text</li>
                    <li>Apply to: Difference cell, Balance Status cell</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white border border-amber-200 rounded-lg p-4">
                <p className="font-semibold text-amber-800 mb-2">Practice scenario:</p>
                <p className="text-sm text-amber-900">
                  When Difference shows -$50, the cell turns red immediately. This visual cue
                  tells Sarah there's a problem before she reads any numbers. She knows to
                  investigate without checking every value manually.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Practice 3 — Plain Language Explanations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-4 leading-relaxed">
              <p className="font-semibold">Write for your audience, not yourself</p>
              <div className="space-y-3">
                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <p className="font-semibold text-green-800 mb-2">Technical vs. Plain</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-red-700 mb-1">Technical (Don't show investors):</p>
                      <p className="text-sm text-gray-700">
                        "SUMIF(TotalDebits) equals $12,500 and SUMIF(TotalCredits) equals $12,500,
                        so the difference is exactly zero."
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 mb-1">Plain Language (Show investors):</p>
                      <p className="text-sm text-gray-700">
                        "Ledger is balanced: $12,500 in debits matches $12,500 in credits.
                        No errors detected—ready for audit."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <p className="font-semibold text-green-800 mb-2">Practice scenarios:</p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs whitespace-nowrap">Perfect:</span>
                      <span className="text-sm text-gray-700">
                        "All accounts balance with zero errors—ledger is investor-ready."
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-red-200 text-red-800 px-2 py-0.5 rounded text-xs whitespace-nowrap">Has Issues:</span>
                      <span className="text-sm text-gray-700">
                        "3 accounts show imbalances. Review Cash, Revenue, and Expenses before presenting."
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Think-Pair-Share
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 space-y-3 leading-relaxed">
              <p className="font-semibold">Apply skills to a new situation:</p>
              <div className="bg-white border border-purple-200 rounded-lg p-4 space-y-3">
                <p className="text-sm">
                  Sarah shows her summary to two different investors. They have different questions.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2 items-start">
                    <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap mt-0.5">Investor A:</span>
                    <span className="text-sm text-gray-700">
                      "What do these colors mean?"
                    </span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap mt-0.5">Investor B:</span>
                    <span className="text-sm text-gray-700">
                      "Should I trust these numbers?"
                    </span>
                  </div>
                </div>
                <div className="bg-purple-100 border border-purple-300 rounded p-3 mt-3">
                  <p className="font-semibold text-purple-800">Partner Task:</p>
                  <p className="text-sm text-purple-900 mt-1">
                    Write a one-sentence response for each investor that uses the
                    status formulas and visual cues you practiced. Be ready to share.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </section>
      </div>

    </div>
  )
}
