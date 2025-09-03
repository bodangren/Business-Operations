'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"

const currentPhase = lesson07Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🧰 Phase 3: Guided Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><Wrench className="w-5 h-5" /> Production Sprint I (Build Core)</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900 space-y-3 prose prose-lg max-w-none">
                  <p>
                    Finish core links and remove any hard‑coded outputs. Convert ranges to Tables and
                    use structured references in every formula.
                  </p>
                  <p className="font-medium">Exact‑match lookup pattern with a clear message:</p>
                  <pre className="bg-slate-50 p-3 rounded border text-sm overflow-x-auto">{`=IFNA(XLOOKUP([@Scenario], Scenarios[Name], Scenarios[AdjFactor], 0), "Scenario not found — check name")`}</pre>
                  <p className="font-medium">Bind everything to tables (examples):</p>
                  <pre className="bg-slate-50 p-3 rounded border text-sm overflow-x-auto">{`=FORECAST.LINEAR([@Week], Sales[Units], Sales[Week])
=SUMIFS(Sales[Units], Sales[Type], "Drink", Sales[Week], [@Week])`}</pre>
                  <p>
                    Tip: keep an Assumptions area near inputs. Add a date/version note so reviewers
                    know freshness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-rose-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-rose-900">Error Checking System (Initial Rules)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ErrorCheckingSystem />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

