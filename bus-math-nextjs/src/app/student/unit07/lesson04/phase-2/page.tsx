import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Target, Eye } from "lucide-react"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"
import SpecificIDTracker from "../SpecificIDTracker"
import SpecificIDPractice from "../SpecificIDPractice"

const currentPhase = lesson04Phases[1] // I Do phase

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">Phase 2: I Do — Teacher Models</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Specific Identification: Exact-Item Tracking</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Watch how Specific Identification works step by step. You'll see that 
              <strong> this method doesn't assume</strong> — it tracks the exact cost of each item sold.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {/* What You Already Know */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Review: What Makes Specific Identification Different
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-950">
              <p className="text-lg leading-relaxed">
                In Lessons 2-3, you learned <strong>FIFO and LIFO</strong> — methods that 
                <em>assume</em> costs flow in a certain order. But what if you don't need to assume?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-900 mb-2">FIFO / LIFO</h4>
                  <p className="text-blue-800 text-sm">
                    <em>Assume</em> costs flow in a pattern. You don't know which 
                    specific units sold — you apply a rule.
                  </p>
                  <p className="text-blue-600 text-xs mt-2">
                    Used when items are identical and can't be individually tracked.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-900 mb-2">Specific Identification</h4>
                  <p className="text-blue-800 text-sm">
                    <em>Track</em> each item's cost exactly. You <strong>know</strong> which 
                    unit sold because it has a serial number, tag, or certificate.
                  </p>
                  <p className="text-blue-600 text-xs mt-2">
                    Used when items are unique, expensive, or individually traceable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Key Insight */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                The Key Insight
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-950">
              <p className="text-lg leading-relaxed">
                <strong>Specific Identification is not a "flow assumption."</strong> It doesn't ask 
                "which layer sold first?" because you <em>already know</em> — you recorded it when the sale happened.
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border border-amber-200">
                <p className="text-amber-800">
                  <Eye className="h-4 w-4 inline mr-2" />
                  <strong>Watch the demonstration below.</strong> You'll see a small inventory of laptops, 
                  each with a serial number and recorded cost. When a customer buys one, you'll track 
                  <em>exactly</em> which laptop it was.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Demo */}
          <SpecificIDTracker />

          {/* After-Demo Summary */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">What You Just Observed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-950">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">✓ No Averaging</h4>
                  <p className="text-purple-800 text-sm">
                    Each laptop had a different cost: $1,450, $1,480, $1,525, $1,510, $1,460. 
                    You didn't blend them — you tracked each one.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">✓ No Assumptions</h4>
                  <p className="text-purple-800 text-sm">
                    You didn't ask "which layer?" You recorded the serial number. 
                    When Alex bought, you knew it was GL-2024-001.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">✓ Direct Calculation</h4>
                  <p className="text-purple-800 text-sm">
                    COGS was simply the sum of the three laptops sold. Subtract from 
                    Goods Available, and you get Ending Inventory.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">✓ Exact Tracking</h4>
                  <p className="text-purple-800 text-sm">
                    The two laptops still on shelf have specific costs. Their combined 
                    value is your ending inventory — no estimation needed.
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-100 p-4 rounded-lg border border-purple-200">
                <p className="text-purple-900">
                  <strong>When to use:</strong> Cars, jewelry, custom-built computers, real estate, 
                  high-value equipment — any inventory where items are unique and individually traceable.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Discussion */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (2 minutes):
              </p>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>
                  If Sarah sold hundreds of identical $2 gift cards instead of custom laptops, 
                  would Specific Identification still make sense? Why or why not?
                </li>
                <li>
                  What would happen to Sarah's COGS if Alex had bought the $1,525 gaming laptop 
                  instead of the $1,450 one? How would that change her profit?
                </li>
                <li>
                  Why is Specific Identification sometimes called the "most accurate" method?
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Interactive Practice */}
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Now You Try: Build Your Own Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="text-emerald-950">
              <p className="mb-4">
                You've watched how Specific Identification works. Now practice it yourself! 
                Work through each step to build your inventory, record sales, calculate COGS, 
                and verify your work.
              </p>
              <p className="text-emerald-800 text-sm">
                <strong>Tip:</strong> Take your time with each step. The "Next" button will unlock 
                once you complete the current task.
              </p>
            </CardContent>
          </Card>

          <SpecificIDPractice />

          {/* Preview */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">Coming Up: Phase 3 (We Do)</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-lg leading-relaxed">
                You've seen Specific Identification in action. Next, you'll work through 
                <strong> Weighted Average</strong> together — a completely different approach 
                for when items <em>can't</em> be individually tracked.
              </p>
              <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-purple-800 text-sm">
                  <strong>Preview:</strong> Weighted Average blends all purchase costs together 
                  into a single average price. It's perfect for bulk goods, commodities, 
                  and similar items — like the grocery supplier from Phase 1.
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