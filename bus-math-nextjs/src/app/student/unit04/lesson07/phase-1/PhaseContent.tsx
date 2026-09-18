'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Target } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎬 Phase 1: Rehearsal Purpose</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center gap-2"><Play className="w-5 h-5" /> Why This Rehearsal?</CardTitle>
                </CardHeader>
                <CardContent className="text-red-900 space-y-4">
                  <p className="text-lg">
                    Before you tackle your own café analysis project in Lessons 8-10, we're pausing for one 
                    guided rehearsal with <span className="font-semibold">shared teacher data</span>.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Same data, today</p>
                        <p>Every group works with the exact same café weekend dataset. This isn't accidental — it's so you can compare your reasoning and evidence quality directly with classmates.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Guided practice for your project</p>
                        <p>Today reveals exactly what a complete project workbook must contain — the evidence chain, the Definition of Done, and how to trace a recommendation back to data.</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold">Next lesson:</span> Each team gets its own café scenario and dataset. 
                    The structure you learn today is what you'll carry forward into the real project.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}