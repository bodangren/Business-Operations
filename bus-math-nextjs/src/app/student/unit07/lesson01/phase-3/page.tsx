import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"
import InventoryPredictionLab from "../InventoryPredictionLab"

const currentPhase = lesson01Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader unit={unit07Data} lesson={lesson01Data} phase={currentPhase} phases={lesson01Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">Phase 3: Guided Practice</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Predict Before You Reveal</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              This is the key student move in Lesson 1: look at an event, make a prediction, then compare it to what actually moved.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          <Card className="border-emerald-200 bg-white">
            <CardHeader>
              <CardTitle className="text-emerald-900">How to use the lab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-800">
              <p>1. Read the event.</p>
              <p>2. Predict what changes.</p>
              <p>3. Reveal the result.</p>
              <p>4. Notice the difference between inventory on the shelf and profit from a sale.</p>
            </CardContent>
          </Card>

          <InventoryPredictionLab />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson01Data} phase={currentPhase} phases={lesson01Phases} />
    </div>
  )
}
