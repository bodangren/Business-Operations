import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle2, FileText } from "lucide-react"
import { lesson07Data, unit07Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[3]

export default function Unit07Lesson07Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🔧 Phase 4: Polish and Transfer Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Complete Weak Spots and Write Your Recommendation</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Use the audit results from Phase 3 to finish your workbook. Focus on the gaps you identified, write a complete recommendation with evidence, and name the structures you must carry into the real project.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Polish Sequence (complete in order)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-6">
              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Step 1: Fix Your Two Weakest Areas</h3>
                <p className="text-sm mt-1">
                  From your Phase 3 audit, pick the two most important gaps. Common areas:
                </p>
                <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                  <li>Missing or incomplete method calculations on the Valuation sheet</li>
                  <li>MethodCompare sheet not showing all four methods side by side</li>
                  <li>Checks section missing validation flags</li>
                  <li>Dashboard KPIs not updating when method changes</li>
                  <li>Recommendation sheet blank or incomplete</li>
                </ul>
                <div className="mt-2 bg-green-50 border border-green-200 p-2 rounded text-sm text-green-900">
                  <CheckCircle2 className="h-4 w-4 inline mr-1" />
                  <strong>Checkpoint:</strong> After fixing, re-run the GAFS check for all methods. All should pass.
                </div>
              </div>

              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Step 2: Write Your Recommendation Statement</h3>
                <p className="text-sm mt-1">
                  On the Recommendation sheet (or in your notes), write a complete recommendation using this structure:
                </p>
                <div className="bg-gray-50 p-3 rounded border text-sm space-y-2 mt-2">
                  <p><strong>Claim:</strong> "For this business, I recommend [METHOD] because..."</p>
                  <p><strong>Evidence:</strong> "Under [METHOD], COGS is $[X] and ending inventory is $[Y]. Turnover is [Z]x with [N] days on hand. Compared to [ALTERNATIVE METHOD], this produces [specific difference]."</p>
                  <p><strong>Risk:</strong> "One limitation of this recommendation is [specific risk]. This matters because [explanation]."</p>
                </div>
                <div className="mt-2 bg-green-50 border border-green-200 p-2 rounded text-sm text-green-900">
                  <CheckCircle2 className="h-4 w-4 inline mr-1" />
                  <strong>Checkpoint:</strong> Your recommendation cites at least two specific workbook numbers and names one real risk (not a generic "every method has pros and cons").
                </div>
              </div>

              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Step 3: Write Your Risk/Limitation Statement</h3>
                <p className="text-sm mt-1">
                  Every inventory method has tradeoffs. Name one limitation of your recommendation and explain why it matters for this specific business:
                </p>
                <div className="bg-gray-50 p-3 rounded border text-sm space-y-2 mt-2">
                  <p><strong>Example risk statements:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>"LIFO reduces reported profit, which may concern investors reviewing growth metrics."</li>
                    <li>"FIFO shows higher profit but increases taxable income, reducing cash available for reinvestment."</li>
                    <li>"Weighted Average smooths cost fluctuations but may not reflect the actual physical flow of goods."</li>
                    <li>"Specific ID is accurate but impractical if the business handles hundreds of identical low-cost items."</li>
                  </ul>
                </div>
                <div className="mt-2 bg-green-50 border border-green-200 p-2 rounded text-sm text-green-900">
                  <CheckCircle2 className="h-4 w-4 inline mr-1" />
                  <strong>Checkpoint:</strong> Your risk statement is specific to this business scenario, not a generic textbook answer.
                </div>
              </div>

              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Step 4: Name Transfer Features</h3>
                <p className="text-sm mt-1">
                  Before moving on, list the exact structures and habits from today that you must recreate independently in the real project:
                </p>
                <div className="bg-orange-50 p-3 rounded border text-sm mt-2">
                  <p className="font-medium mb-1">My Transfer Checklist:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Workbook structure: [list the sheets you must recreate]</li>
                    <li>Method calculation: [how will you ensure COGS + EI = GAFS?]</li>
                    <li>Validation: [what checks will you build into your project workbook?]</li>
                    <li>Recommendation format: [claim + evidence + risk structure]</li>
                    <li>Quality habits: [what standards will you hold your team to?]</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                What Changes in the Real Project?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-3">
              <p className="font-medium">Today you practiced with a teacher-provided dataset. In the project (Lessons 08-10):</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-bold text-sm text-indigo-800 mb-1">Stays the Same</h4>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>Workbook sheet structure</li>
                    <li>Method calculation logic</li>
                    <li>GAFS checksum requirement</li>
                    <li>Recommendation format (claim + evidence + risk)</li>
                    <li>Validation and quality standards</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h4 className="font-bold text-sm text-indigo-800 mb-1">Changes</h4>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>Your group's unique dataset</li>
                    <li>Your team makes all structure decisions</li>
                    <li>No step-by-step teacher model</li>
                    <li>Your recommendation must stand alone</li>
                    <li>Peer critique evaluates final quality</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
