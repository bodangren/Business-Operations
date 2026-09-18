import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import InventoryPredictionLab from "../InventoryPredictionLab"


export default function Phase3Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-emerald-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">Phase 3: Guided Practice</Badge>
            <h2 className="text-3xl font-bold text-slate-900">Predict Before You Reveal</h2>
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
      </div>

    </div>
  )
}
