import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, AlertCircle, Eye } from "lucide-react"
import { lesson07Data, unit07Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[2]

export default function Unit07Lesson07Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🔍 Phase 3: Guided Audit</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Trace the Recommendation Back to Evidence</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Open your shared workbook. We are going to audit it together — not to fix formulas, but to answer one question: <strong>does the recommendation follow logically from the evidence?</strong> Everyone is using the same data, so we can compare reasoning quality directly.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-white">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Eye className="h-5 w-5" />
                The Logic Chain
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-4">
              <p>
                A strong inventory workbook tells a story from raw data to recommendation. Follow this chain and check each link:
              </p>
              <div className="bg-gray-50 p-4 rounded border space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 font-bold text-sm px-2 py-1 rounded min-w-[24px] text-center">1</div>
                  <div>
                    <p className="font-medium text-sm">Inputs → GAFS</p>
                    <p className="text-xs text-gray-600">Beginning inventory + purchases = Goods Available for Sale. Check: do your input totals match?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 font-bold text-sm px-2 py-1 rounded min-w-[24px] text-center">2</div>
                  <div>
                    <p className="font-medium text-sm">GAFS → COGS + Ending Inventory (by method)</p>
                    <p className="text-xs text-gray-600">Each method assigns costs differently. Check: does COGS + Ending Inventory = GAFS for every method? If not, the method logic has a bug.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 font-bold text-sm px-2 py-1 rounded min-w-[24px] text-center">3</div>
                  <div>
                    <p className="font-medium text-sm">COGS → Turnover + Days-on-Hand</p>
                    <p className="text-xs text-gray-600">Turnover = COGS ÷ Average Inventory. Days-on-Hand = 365 ÷ Turnover. Check: do your KPIs update when you change the method?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 font-bold text-sm px-2 py-1 rounded min-w-[24px] text-center">4</div>
                  <div>
                    <p className="font-medium text-sm">MethodCompare → Recommendation</p>
                    <p className="text-xs text-gray-600">The recommendation should cite specific numbers from the comparison. Check: does the recommendation name the method, cite at least two numbers, and acknowledge one risk?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Audit Routine: Inspect Together
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 space-y-4">
              <p className="font-medium">Follow these steps with your workbook open:</p>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <strong>Check the Inputs sheet.</strong> How many beginning inventory layers? How many purchases? How many units sold? Write these numbers down — they are your foundation.
                </li>
                <li>
                  <strong>Check the Valuation sheet.</strong> Pick one method (start with FIFO). Trace one layer from Inputs through the COGS calculation. Does the math match what you would do by hand?
                </li>
                <li>
                  <strong>Run the GAFS check.</strong> For each method, add COGS + Ending Inventory. Does it equal GAFS? If any method fails, flag it.
                </li>
                <li>
                  <strong>Check the MethodCompare sheet.</strong> Which method has the highest COGS? Which has the highest ending inventory? Do these results make sense given rising costs?
                </li>
                <li>
                  <strong>Check the Dashboard.</strong> Do the KPI tiles show different values for different methods? If they all show the same number, the dashboard is not linked correctly.
                </li>
                <li>
                  <strong>Read the Recommendation.</strong> Does it cite specific numbers? Does it name a risk? If the recommendation says "FIFO is best" but gives no numbers, it is weak.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                What Makes a Workbook Weak?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-900 space-y-3">
              <p className="font-medium">As you audit, watch for these red flags:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>No evidence chain:</strong> The recommendation appears but no sheet shows how the numbers were derived</li>
                <li><strong>Hard-coded outputs:</strong> COGS or turnover values typed in directly instead of calculated from inputs</li>
                <li><strong>Missing GAFS check:</strong> No verification that COGS + Ending Inventory = GAFS</li>
                <li><strong>Invisible errors:</strong> #N/A or #DIV/0! hidden by white font instead of fixed</li>
                <li><strong>Generic recommendation:</strong> "FIFO is usually best" without citing any workbook-specific numbers</li>
                <li><strong>No risk statement:</strong> Every method has tradeoffs. A recommendation without a risk acknowledgment is incomplete</li>
                <li><strong>Static charts:</strong> Charts that point to fixed ranges instead of Table references</li>
              </ul>
              <p className="text-sm mt-2">
                <strong>Your task:</strong> Identify at least two weak spots in your current workbook (or in the areas you have not completed yet). Write them down — you will address them in Phase 4.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
