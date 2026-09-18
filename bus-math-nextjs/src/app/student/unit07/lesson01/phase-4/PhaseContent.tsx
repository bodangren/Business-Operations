import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import InventoryStrategyStudio from "../InventoryStrategyStudio"


export default function Phase4Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 4: Independent Practice</Badge>
            <h2 className="text-3xl font-bold text-slate-900">Run Sarah&apos;s Pricing Studio</h2>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              This phase now plays like a founder pricing game. Across ten steps, you will set prices, choose small restocks,
              and watch a mini income statement and balance sheet update in real time.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-900">Lesson 1 target</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800">
              The goal is to push gross profit as high as you can without letting Sarah's cash cushion or ending inventory fall into a risky place.
            </CardContent>
          </Card>

          <InventoryStrategyStudio />
        </section>
      </div>

    </div>
  )
}
