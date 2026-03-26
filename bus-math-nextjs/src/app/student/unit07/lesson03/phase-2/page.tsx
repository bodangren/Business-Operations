import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, BookOpen, Target } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"
import FIFOLIFOVisualizer from "../FIFOLIFOVisualizer"

const currentPhase = lesson03Phases[1] // Introduction phase

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <PhaseHeader unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-teal-100 text-teal-800 text-lg px-4 py-2">Phase 2: Introduction</Badge>
            <h1 className="text-3xl font-bold text-slate-900">How FIFO and LIFO Assign Costs</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Now you'll see exactly how each method works — step by step, layer by layer. 
              Watch how the same inventory produces different results depending on the method you choose.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto space-y-8">
          {/* Review from Lesson 2 */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Quick Review: What You Already Know
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-950">
              <p className="text-lg leading-relaxed">
                From Lesson 2, you understand these key concepts:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <p className="font-semibold text-blue-900">Physical Flow</p>
                  <p className="text-sm text-blue-700">How units move on and off the shelf</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <p className="font-semibold text-blue-900">Cost Flow</p>
                  <p className="text-sm text-blue-700">Which dollar amounts move from inventory to COGS</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <p className="font-semibold text-blue-900">Inventory Layers</p>
                  <p className="text-sm text-blue-700">Groups of units purchased at the same cost</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800">
                  <strong>The Lesson 2 question:</strong> When you have multiple layers at different costs, 
                  which layer's costs should move to COGS when you sell products?
                </p>
                <p className="text-blue-800 mt-2">
                  <strong>The Lesson 3 answer:</strong> FIFO and LIFO are two standardized ways to make that decision.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Core Concept */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                The Core Concept You're About to Learn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-950">
              <p className="text-lg leading-relaxed">
                Both FIFO and LIFO start with the same inventory layers, the same purchases, and the same sales. 
                <strong>The only difference is the direction costs flow when calculating COGS.</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                  <p className="font-bold text-green-900 text-lg mb-2">FIFO: Bottom-Up</p>
                  <p className="text-green-800 text-sm">
                    Imagine reaching into the bottom of your inventory stack. You pull out 
                    the oldest units first. Their costs go to COGS. The newer units stay in inventory.
                  </p>
                  <div className="bg-green-100 p-2 rounded mt-2 text-sm text-green-900">
                    <strong>In rising costs:</strong> Older = Cheaper → Lower COGS → Higher profit
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                  <p className="font-bold text-red-900 text-lg mb-2">LIFO: Top-Down</p>
                  <p className="text-red-800 text-sm">
                    Imagine reaching into the top of your inventory stack. You pull out 
                    the newest units first. Their costs go to COGS. The older units stay in inventory.
                  </p>
                  <div className="bg-red-100 p-2 rounded mt-2 text-sm text-red-900">
                    <strong>In rising costs:</strong> Newer = Expensive → Higher COGS → Lower profit
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Interactive Visualizer */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 text-center">
              Interactive FIFO vs. LIFO Demonstration
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
              Work through the visualization below. Click <strong>Next</strong> to progress through each step. 
              You'll see how inventory layers work, then watch FIFO and LIFO calculate different results 
              from the same transactions.
            </p>
          </div>

          <FIFOLIFOVisualizer />

          {/* Summary After Interactive */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Key Takeaways from the Visualizer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-950">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Mechanics You Learned</h4>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>FIFO assigns oldest (cheapest in rising costs) to COGS first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>LIFO assigns newest (most expensive in rising costs) to COGS first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>Both methods use the same inventory layers and same sales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>The difference is purely about cost assignment, not physical units</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Business Consequences You Saw</h4>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>In rising-cost environments, FIFO shows higher profit and higher taxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>In rising-cost environments, LIFO shows lower profit and lower taxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>Investor presentations might favor FIFO for stronger numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>Tax planning might favor LIFO for cash conservation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                <p className="text-purple-900">
                  <strong>Important:</strong> The method you choose doesn't change what actually happened 
                  in Sarah's business. It only changes how she reports it. The physical units sold are the same — 
                  the difference is purely in the accounting presentation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Preview of Practice */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">Coming Up in Guided Practice</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-lg leading-relaxed">
                Now that you've seen how FIFO and LIFO work visually, you'll practice building the calculations 
                yourself. In Guided Practice, you'll work through layer assignments step by step, 
                then compare your results to see which method fits different business situations.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}