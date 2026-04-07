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
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-purple-100 text-purple-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 3: Safe Rehearsal</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Rehearse the Excel Algorithms Before Workbook Build</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              This is a guided walkthrough, not a multiple-choice test. Decode the table references, practice explaining
              each formula, and follow the same sheet order you will use in Phase 4.
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
                <li>Work one sheet at a time (FIFO, LIFO, Specific ID, Weighted Average, Outputs).</li>
                <li>For each sheet, read what each formula reference means in plain English.</li>
                <li>Write a short explanation in your own words, then compare with the model response.</li>
                <li>Use the trap + audit checks so you know what to verify during the real build.</li>
              </ol>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <ArrowRight className="w-4 h-4" />
                <span>When you can explain each sheet&apos;s formulas clearly, you are ready for the workbook sprint.</span>
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
