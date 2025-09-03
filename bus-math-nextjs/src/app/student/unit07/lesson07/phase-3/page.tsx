'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson07Data, unit07Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">🧩 Phase 3: Guided Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900">Production Sprint I: Build the Core</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-green-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Switch all lookups to <strong>exact match</strong> (XLOOKUP match_mode 0 or INDEX/MATCH exact).</li>
                    <li>Convert inputs and data to <strong>Tables</strong>; update formulas to <strong>structured references</strong>.</li>
                    <li>Eliminate hard‑coded outputs; compute values and wrap with <strong>IFNA/IFERROR</strong> for clarity.</li>
                    <li>Document: add an <strong>Assumptions</strong> sheet with date/version and scenario drivers.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">ErrorCheckingSystem: Initial Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-900 mb-4">Use the validator below as a mental model for your spreadsheet rules: invalid scenario names, stale AsOfDate, negative or &gt;100% rates, and broken chart links.</p>
                  <ErrorCheckingSystem />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

