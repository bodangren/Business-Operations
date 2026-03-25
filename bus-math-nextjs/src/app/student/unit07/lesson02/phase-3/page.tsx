import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Layers, Users, Calendar } from "lucide-react"
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data"
import InventoryTimelineLab from "../InventoryTimelineLab"

const currentPhase = lesson02Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">Phase 3: Guided Practice</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Track Inventory Through Time</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Now let's walk through Sarah's month day by day and see how inventory changes at each step.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {/* REVIEW: Quick recap from Phase 2 */}
          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-slate-800 text-lg">Review: What You Learned</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <div className="grid gap-3 md:grid-cols-3">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-sm"><strong>Physical flow</strong> tracks boxes on the shelf</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-sm"><strong>Cost flow</strong> tracks dollars into COGS or inventory</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-sm"><strong>Layers</strong> form when purchases happen at different costs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TEACH DEEPER: Layer tracking */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Going Deeper: Tracking Layers Over Time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-950">
              <p className="leading-relaxed">
                In Phase 2, you saw layers at a single point. Now let's think about what happens as time passes:
              </p>

              <div className="bg-white p-4 rounded-lg border border-amber-300 space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-600 text-white mt-0.5">1</Badge>
                  <p className="text-amber-900">
                    <strong>Month starts</strong> with Layer 1 already on the shelf (Beginning Inventory)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 text-white mt-0.5">2</Badge>
                  <p className="text-amber-900">
                    <strong>Day 3</strong> adds Layer 2 when Sarah buys more kits at a new price
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white mt-0.5">3</Badge>
                  <p className="text-amber-900">
                    <strong>Day 15</strong> adds Layer 3 when supplier prices rise again
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 text-white mt-0.5">4</Badge>
                  <p className="text-amber-900">
                    <strong>Each sale</strong> pulls from one or more layers, changing what remains
                  </p>
                </div>
              </div>

              <p className="text-amber-800">
                The key skill is tracking both <strong>quantity</strong> and <strong>value</strong> at each step. 
                In this activity, you'll walk through Sarah's month event by event. At each step, 
                calculate what happens to <strong>units on hand</strong> and <strong>inventory value</strong>.
              </p>
            </CardContent>
          </Card>

          {/* ACTIVITY: Timeline Lab */}
          <Card className="border-emerald-200 bg-white">
            <CardHeader>
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Activity: Walk Through Sarah's Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Now it's your turn. Walk through each day of Sarah's month. Calculate what happens to 
                units on hand and inventory value at each step, then check your answer.
              </p>
              <InventoryTimelineLab />
            </CardContent>
          </Card>

          {/* Turn and Talk */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-950 space-y-3">
              <p className="font-medium">Discussion prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-2">
                <li>At which event in the timeline did inventory value change the most? Why?</li>
                <li>Why does a sale affect both units AND inventory value at the same time?</li>
                <li>What would happen if Sarah forgot to record one of the purchases?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Key Insight */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">Key Insight from This Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-800">
              <p>
                By the end of Sarah's month, you can see exactly where every unit went and how much 
                value remains. But notice something: we had to make <strong>assumptions</strong> about 
                which layer costs went to COGS on each sale.
              </p>
              <p className="font-medium text-slate-900">
                That's what Lesson 3 is about: learning the formal rules (FIFO, LIFO) that tell you 
                exactly how to assign costs, so you don't have to guess.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
