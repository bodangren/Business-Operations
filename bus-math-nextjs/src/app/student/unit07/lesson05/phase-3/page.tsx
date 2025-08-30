import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, ShieldCheck } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

export default function Unit07Lesson05Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🔧 Phase 3: Guided Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Building Sarah’s Method Switch + Validation</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Implement a reliable method selector and safeguards. Then verify behavior using the interactive validation tool.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Wrench className="h-5 w-5" /> Hands‑On Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <ol className="list-decimal list-inside space-y-1">
                <li>Create a <strong>Method</strong> dropdown with Data Validation: FIFO, LIFO, Weighted Avg.</li>
                <li>Use Tables for Purchases and Sales; reference with <code>Table[Column]</code> only.</li>
                <li>Build helper columns for layer math (FIFO/LIFO) and running averages.</li>
                <li>Wrap lookups with <code>IFNA</code> to protect dashboards from #N/A.</li>
                <li>Add checks: missing SKU, negative or zero UnitCost, stale dates, negative on‑hand.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-white">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Validation Practice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-indigo-900">
              <p>Use the tool below to rehearse validation patterns you will build into Excel.</p>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

