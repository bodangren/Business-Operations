import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, ArrowRight } from "lucide-react"
import DynamicMethodSelector from "@/components/business-simulations/DynamicMethodSelector"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

export default function Unit07Lesson06Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-purple-100 text-purple-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 3: Safe Rehearsal</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Rehearse the Selector Workflow Before Workbook Build</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              This is a guided walkthrough, not a multiple-choice test. Practice the selector chain, decode references,
              and explain each sheet&apos;s formulas in plain language before opening Excel.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Wrench className="h-5 w-5" /> How to Use This Rehearsal
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <ol className="list-decimal list-inside space-y-1">
                <li>Change scenario and method controls and observe output changes.</li>
                <li>Move sheet-by-sheet: Inputs, Outputs, KPI, Checks.</li>
                <li>Decode each table reference before writing your explanation.</li>
                <li>Use the trap and audit notes as your Phase 4 debugging checklist.</li>
              </ol>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <ArrowRight className="w-4 h-4" />
                <span>When you can explain each sheet&apos;s formula chain, you are ready for the workbook sprint.</span>
              </div>
            </CardContent>
          </Card>

          <DynamicMethodSelector />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
