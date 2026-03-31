import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🛠️ Phase 3: Guided Practice — Safe Rehearsal</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Method-Switching Simulator</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Before you touch Excel, practice the logic here. Pick a scenario, switch the method, and watch COGS, ending inventory, turnover, and days-on-hand change. This simulator mirrors the exact workbook structure you will build in Phase 4.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-white">
            <CardHeader>
              <CardTitle className="text-purple-900">What This Simulator Proves</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-3">
              <p>
                The same 55 units of inventory (10 beginning + 45 purchased) produces <strong>different COGS and ending inventory</strong> depending on which method you choose. The simulator below lets you:
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Switch between Base, Stretch, and Downside scenarios</li>
                <li>Toggle FIFO, LIFO, and Weighted Average manually</li>
                <li>See COGS, ending inventory, gross margin, turnover, and days-on-hand update instantly</li>
                <li>Verify that COGS + Ending Inventory always equals GAFS (the checksum)</li>
                <li>Answer method-judgment challenges with instant feedback</li>
              </ol>
              <p className="text-sm text-purple-800 bg-purple-50 p-3 rounded border border-purple-200">
                <strong>Bridge to Phase 4:</strong> The numbers you see here are the same numbers your Excel workbook must produce. In Phase 4 you will wire these calculations to a driver table so one dropdown controls everything.
              </p>
            </CardContent>
          </Card>

          <DynamicMethodSelector />

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Common Errors to Watch For</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Wrong layer order:</strong> LIFO must pull from the newest purchase first, not the oldest.</li>
                <li><strong>Simple average instead of weighted average:</strong> Do not average the three unit costs. Divide total cost by total units.</li>
                <li><strong>Turnover formula mix-up:</strong> Turnover = COGS ÷ Average Inventory, not COGS ÷ Ending Inventory.</li>
                <li><strong>Missing GAFS check:</strong> If COGS + Ending Inventory does not equal GAFS, your method logic has a bug.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}