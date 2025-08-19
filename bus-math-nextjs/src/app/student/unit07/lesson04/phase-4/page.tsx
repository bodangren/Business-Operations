import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter" 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Download, ClipboardCheck } from "lucide-react"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[3]

export default function Unit07Lesson04Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🚀 Phase 4: Independent Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced FIFO/LIFO Mastery Challenges</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download the dataset, then complete the scenarios below. Your model must update correctly as you add rows and fix
              issues.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Download className="h-5 w-5" /> Practice Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900">
              <p>
                Use this dataset for your workbook. It includes realistic purchases and sales with edge cases and common data mistakes.
              </p>
              <a href="/resources/unit07-inventory-valuation-practice.csv" download className="underline text-blue-700">
                Download unit07-inventory-valuation-practice.csv
              </a>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Rocket className="h-5 w-5" /> Scenarios (Escalating Difficulty)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-green-900">
              <ol className="list-decimal list-inside space-y-1">
                <li>Compute COGS and Ending Inventory using <strong>FIFO</strong> for the full month.</li>
                <li>Switch to <strong>LIFO</strong>. Compare total COGS and profit impact.</li>
                <li>Add two new purchase rows (same item, different costs). Verify your totals adjust immediately.</li>
                <li>Fix any negative cost or missing ID entries. Confirm validation flags disappear after corrections.</li>
                <li>Create a one‑page Summary sheet showing method choice, total COGS, and visual comparison.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" /> Self‑Assessment Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-amber-900">
              <ul className="list-disc list-inside">
                <li>Tables expand and calculations never miss new rows</li>
                <li>COGS reconciles with quantities sold; ending inventory reconciles with on‑hand</li>
                <li>All validation checks are green (no flags)</li>
                <li>Summary clearly communicates business impact for investors</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}

