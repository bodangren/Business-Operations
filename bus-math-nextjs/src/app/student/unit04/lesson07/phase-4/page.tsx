'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, CheckSquare, ArrowLeftRight, Lightbulb } from "lucide-react"

const currentPhase = lesson07Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🛠️ Phase 4: Polish and Transfer Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><Wrench className="w-5 h-5" /> Guided Practice: Complete Weak Spots</CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 space-y-4">
                  <p className="text-lg">
                    With the evidence chain fresh in mind, complete the following in the shared workbook. 
                    This is guided practice — we're still using the same teacher data.
                  </p>

                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg space-y-3">
                    <p className="font-semibold">Task 1: Complete the Recommendation</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Add one specific number from the Dashboard or Forecasting sheet to your claim</li>
                      <li>Add one risk or limitation (e.g., "This forecast assumes no major competitor opens nearby")</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg space-y-3">
                    <p className="font-semibold">Task 2: Check the Evidence Trace</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Pick one number from your Recommendation sheet</li>
                      <li>Trace it back through Dashboard → Forecasting → Analysis → Data</li>
                      <li>Write down the path: "The 15% growth claim comes from the 22% forecast in Forecasting![F5], which uses the trend line from Analysis!C12, which summarizes Data!A5:D20"</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg space-y-3">
                    <p className="font-semibold">Task 3: Polish One Visual</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Choose one chart on the Dashboard sheet</li>
                      <li>Ensure it binds to a table (not a static range like A1:C10)</li>
                      <li>Add a clear title that tells the data story</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-emerald-900 flex items-center gap-2"><CheckSquare className="w-5 h-5" /> Self-Assessment: Definition of Done</CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-900">
                  <p className="mb-4">Check each item. A complete project must have:</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-2 rounded hover:bg-emerald-50 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Data sheet with clean, analysis-ready data</span>
                    </label>
                    <label className="flex items-center gap-3 p-2 rounded hover:bg-emerald-50 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Analysis sheet with descriptive stats (average, median, spread)</span>
                    </label>
                    <label className="flex items-center gap-3 p-2 rounded hover:bg-emerald-50 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Forecasting sheet with trend/regression and stated limits</span>
                    </label>
                    <label className="flex items-center gap-3 p-2 rounded hover:bg-emerald-50 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Dashboard with at least two decision-ready visuals</span>
                    </label>
                    <label className="flex items-center gap-3 p-2 rounded hover:bg-emerald-50 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Recommendation with claim + evidence + risk</span>
                    </label>
                    <label className="flex items-center gap-3 p-2 rounded hover:bg-emerald-50 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Evidence trace: every recommendation number can go back to raw data</span>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2"><ArrowLeftRight className="w-5 h-5" /> Transfer Check: What Must Carry Forward?</CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900 space-y-4">
                  <p className="text-lg">
                    In your real project (Lessons 8-10), your team will have its own café scenario and data. 
                    What from today's rehearsal must you recreate?
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="font-semibold mb-2">List at least 5 things you'll carry into your project:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="border-b border-amber-300 flex-1 py-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="border-b border-amber-300 flex-1 py-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="border-b border-amber-300 flex-1 py-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="border-b border-amber-300 flex-1 py-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="border-b border-amber-300 flex-1 py-1" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="font-semibold mb-2">What will change in the real project?</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Different café scenario (different products, locations, or customer base)</li>
                      <li>Different raw data (your team's own dataset)</li>
                      <li>Different numbers in the recommendation</li>
                      <li>Same structure: Data → Analysis → Forecasting → Dashboard → Recommendation</li>
                    </ul>
                  </div>
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