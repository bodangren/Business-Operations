import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, ArrowRight } from "lucide-react"
import MethodComparisonSimulator from "@/components/business-simulations/MethodComparisonSimulator"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

export default function Unit07Lesson05Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">Phase 3: Safe Rehearsal</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Practice the Method Logic Before Building the Workbook</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Before you open Excel, practice the method-comparison logic in this simulator. Each scenario gives you
              purchase data and units sold. Calculate COGS and Ending Inventory for FIFO, LIFO, and Weighted Average.
              This is the same logic your formulas will execute in Phase 4.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Wrench className="h-5 w-5" /> How to Use This Simulator
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <ol className="list-decimal list-inside space-y-1">
                <li>Read the purchase data and note the units sold.</li>
                <li>Calculate COGS and Ending Inventory for each method by hand or with a calculator.</li>
                <li>Enter your answers and submit to check.</li>
                <li>Use the hint if you are stuck, then try again.</li>
                <li>Move to the next scenario to build speed.</li>
              </ol>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <ArrowRight className="w-4 h-4" />
                <span>When you can get all three methods right consistently, you are ready for the real workbook build.</span>
              </div>
            </CardContent>
          </Card>

          <MethodComparisonSimulator />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
