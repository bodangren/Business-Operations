import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter" 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, ShieldCheck } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[2]

export default function Unit07Lesson04Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🔧 Phase 3: Guided Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Building Sarah's FIFO/LIFO System</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Practice the essential validation patterns that keep FIFO/LIFO models reliable in the real world. Then apply
              the same checks to your own workbook.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Wrench className="h-5 w-5" /> Hands-On: Data Validation for Inventory
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-900">
              <p>
                Use the interactive tool to explore common validation rules (low stock, zero stock, invalid costs, stale dates).
                These are the same patterns you’ll add to your Excel model.
              </p>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Professional Standards Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-indigo-900">
              <ul className="list-disc list-inside space-y-1">
                <li>Tables used for Purchases and Sales (no fixed ranges)</li>
                <li>Clear method label and notes (FIFO or LIFO)</li>
                <li>Error checks for missing IDs, negative costs, and stale dates</li>
                <li>COGS recalculates correctly when rows are added</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}

