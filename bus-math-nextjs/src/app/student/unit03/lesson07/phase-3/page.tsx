'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Wrench } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"

const currentPhase = lesson07Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🛠️ Phase 3: Guided Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><Wrench className="w-5 h-5" /> Production Sprint I: Build Core</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-purple-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Finish core links across the three statements; remove any hard‑coded outputs</li>
                    <li>Switch all lookups to exact match (XLOOKUP or INDEX/MATCH) with IFNA/IFERROR</li>
                    <li>Convert key ranges to Tables and use structured references in formulas</li>
                    <li>Explain each formula choice and safeguard in short cell comments</li>
                  </ul>
                  <div className="bg-purple-50 border border-purple-200 rounded-md p-4 mt-4">
                    <strong>Why this matters:</strong> Investors ask “Where does this number come from?” Exact lookups,
                    structured refs, and visible checks make the answer fast and credible.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> ErrorCheckingSystem: Initial Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-indigo-900">
                    Use the scenarios below to think like a validator. As you change inputs, watch
                    how warnings appear and clear. Then mirror these controls in your spreadsheet
                    with data validation, conditional formatting, and summary flags.
                  </p>
                  <ErrorCheckingSystem />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

