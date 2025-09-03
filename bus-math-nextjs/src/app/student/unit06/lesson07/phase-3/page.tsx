'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cog, CheckCircle, ShieldAlert } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"

const currentPhase = lesson07Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🛠️ Phase 3: Guided Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><Cog className="w-5 h-5" /> Production Sprint I: Build Core</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg text-purple-900">
                    Finish core links and formulas. Convert ranges to Tables and switch all lookups to exact‑match 
                    with IFNA/IFERROR. Replace any hard‑coded outputs with formulas or named drivers. Add short notes 
                    explaining how each formula choice prevents errors during live scenario switching.
                  </p>
                  <ul className="list-disc list-inside text-purple-900">
                    <li>Enforce exact‑match lookups for scenario selection</li>
                    <li>Use structured references in all outputs and charts</li>
                    <li>Document assumptions (date/version and units)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><ShieldAlert className="w-5 h-5" /> Error Checking (Initial Rules)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-900 mb-3 text-sm">
                    Use automated checks to catch invalid inputs and broken links while you build.
                  </p>
                  <ErrorCheckingSystem />
                  <div className="mt-4 text-sm text-orange-900">
                    <CheckCircle className="inline w-4 h-4 mr-1 text-green-700" /> Aim for zero flagged errors before moving on.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

