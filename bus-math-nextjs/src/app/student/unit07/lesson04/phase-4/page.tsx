import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, BookOpen, Users, CheckCircle2 } from "lucide-react"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"
import MethodPracticeCombined from "../MethodPracticeCombined"
import MethodComparisonMatrix from "../MethodComparisonMatrix"

const currentPhase = lesson04Phases[3] // You Do phase

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 4: You Do — Independent Practice</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Apply What You've Learned</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              You've learned <strong>all four inventory methods</strong> across Lessons 2, 3, and today. 
              Now practice both <strong>Specific Identification</strong> and <strong>Weighted Average</strong> independently, 
              then decide which method fits each business.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {/* Review: What You've Learned */}
          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-slate-800 text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                What You've Learned So Far
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Lesson 3: FIFO & LIFO</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>FIFO:</strong> Oldest costs to COGS first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>LIFO:</strong> Newest costs to COGS first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Both assume layer order without tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Lesson 4: Today</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Specific ID:</strong> Track exact items by serial/VIN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Weighted Avg:</strong> Pool costs, one average rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Each fits different inventory types</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-900 text-sm">
                  <strong>Key distinction:</strong> FIFO/LIFO make assumptions about cost flow. 
                  Specific ID tracks exact items. Weighted Average pools everything together.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Practice Task 1: Both Methods */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Practice Task: Complete Both Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-950">
              <p className="mb-4">
                Work through both tabs below. For <strong>Specific Identification</strong>, track each 
                item by its unique identifier. For <strong>Weighted Average</strong>, pool all costs 
                and calculate one average rate.
              </p>
              <p className="text-sm text-orange-700">
                Click "New Numbers" to try again with different data.
              </p>
            </CardContent>
          </Card>

          <MethodPracticeCombined />

          {/* Practice Task 2: Method Comparison */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Practice Task: Choose the Right Method
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-950">
              <p className="mb-4">
                Now that you've practiced both calculations, decide which method best fits each business. 
                Consider what the business sells, whether items are trackable, and any special needs.
              </p>
            </CardContent>
          </Card>

          <MethodComparisonMatrix />

          {/* Turn and Talk */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (5 minutes):
              </p>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>
                  Which method felt most intuitive to you? Which felt hardest?
                </li>
                <li>
                  Why would a car dealership never use Weighted Average?
                </li>
                <li>
                  What business did you choose FIFO for? Why not LIFO for the same business?
                </li>
                <li>
                  If gas prices keep rising every month, what happens to a gas station's 
                  profit under Weighted Average vs FIFO?
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Key Insights Summary */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">Key Insights from Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-900 mb-2">Specific Identification</h4>
                  <ul className="text-sm text-emerald-800 space-y-1">
                    <li>✓ Track each unique item by serial/VIN/certificate</li>
                    <li>✓ No assumptions — you know exactly what sold</li>
                    <li>✓ Best for: cars, jewelry, custom equipment</li>
                    <li>✗ Can't use for identical bulk items</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Weighted Average</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>✓ Pool all costs, divide by total units</li>
                    <li>✓ Same rate for COGS and Ending Inventory</li>
                    <li>✓ Best for: grain, fuel, bulk commodities</li>
                    <li>✗ Don't average the prices — divide total cost</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-slate-800">
                  <strong>Coming in Lesson 5:</strong> You'll move from hand calculation to 
                  <strong> Excel workbook construction</strong>. You'll build a model that compares 
                  all four methods and helps you recommend the right one for each business.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}