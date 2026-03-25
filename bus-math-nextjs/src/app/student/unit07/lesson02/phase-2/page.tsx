import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { Layers, AlertTriangle } from "lucide-react"
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data"
import InventoryFlowExplorer from "../InventoryFlowExplorer"

const currentPhase = lesson02Phases[1]

const vocabularySentences = [
  {
    id: "vocab-1",
    text: "Beginning Inventory + Purchases = {blank} Available for Sale",
    answer: "Goods",
    hint: "The total amount of product you could potentially sell",
    category: "Core Formula"
  },
  {
    id: "vocab-2",
    text: "{blank} flow tracks how units move on and off the shelf.",
    answer: "Physical",
    hint: "This is about counting boxes, not dollars",
    category: "Flow Types"
  },
  {
    id: "vocab-3",
    text: "{blank} flow tracks which dollar amounts move from inventory to COGS.",
    answer: "Cost",
    hint: "This is about assigning value to what was sold",
    category: "Flow Types"
  },
  {
    id: "vocab-4",
    text: "An inventory {blank} is a group of units purchased at the same cost.",
    answer: "layer",
    hint: "Think of stacking purchases on top of each other",
    category: "Inventory Structure"
  },
  {
    id: "vocab-5",
    text: "When prices change between purchases, different {blank} have different values.",
    answer: "layers",
    hint: "The same product bought at different times can have different costs",
    category: "Inventory Structure"
  },
  {
    id: "vocab-6",
    text: "{blank} is the account that receives the cost of inventory that was sold.",
    answer: "COGS",
    hint: "Cost of Goods Sold - the expense side of the equation",
    category: "Core Formula"
  },
  {
    id: "vocab-7",
    text: "Cost {blank} is the process of deciding which layer costs go to COGS and which stay in inventory.",
    answer: "assignment",
    hint: "You're assigning specific dollar amounts to specific outcomes",
    category: "Process"
  },
  {
    id: "vocab-8",
    text: "Ending Inventory value depends on which costs remain {blank} the business.",
    answer: "in",
    hint: "Costs that stay vs. costs that leave",
    category: "Core Formula"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <PhaseHeader unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-sky-100 text-sky-800 text-lg px-4 py-2">Phase 2: Introduction</Badge>
            <h1 className="text-3xl font-bold text-slate-900">How Inventory Moves Through the Formula</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Before you can compare FIFO, LIFO, or other methods, you need to understand the basic mechanics 
              of inventory movement. Let's learn the concepts, then explore them hands-on.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto space-y-8">
          {/* Quick setup context */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Sarah's Month at a Glance</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-950">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <p className="text-sm text-blue-700 font-medium">Beginning Inventory</p>
                  <p className="text-xl font-bold text-blue-900">10 kits @ $18</p>
                  <p className="text-sm text-blue-600">= $180</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <p className="text-sm text-blue-700 font-medium">Purchases</p>
                  <p className="text-xl font-bold text-blue-900">20 kits @ $20</p>
                  <p className="text-sm text-blue-600">= $400</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <p className="text-sm text-blue-700 font-medium">Sales to Make</p>
                  <p className="text-xl font-bold text-blue-900">15 kits</p>
                  <p className="text-sm text-blue-600">selling @ $38 each</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Physical Flow vs Cost Flow - CONCEPT FIRST */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Physical Flow vs. Cost Flow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-950">
              <p className="text-lg leading-relaxed">
                This is the key concept of Lesson 2. <strong>Physical flow</strong> and <strong>cost flow</strong> 
                are two different things, and understanding the difference is essential.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    Physical Flow
                  </h4>
                  <p className="text-purple-800 text-sm mb-3">
                    How actual units move on and off the shelf.
                  </p>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Kits arrive from the supplier</li>
                    <li>• Kits sit on the shelf</li>
                    <li>• Kits get packed and shipped to customers</li>
                  </ul>
                  <p className="text-purple-600 text-sm mt-3 italic">
                    This is about counting boxes.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-300">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">$</span>
                    Cost Flow
                  </h4>
                  <p className="text-purple-800 text-sm mb-3">
                    How dollar values move between accounts.
                  </p>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Purchase costs go into Inventory</li>
                    <li>• When a sale happens, costs move from Inventory to COGS</li>
                    <li>• Remaining costs stay in Ending Inventory</li>
                  </ul>
                  <p className="text-purple-600 text-sm mt-3 italic">
                    This is about assigning value.
                  </p>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg border border-purple-300 mt-4">
                <p className="text-purple-800">
                  <strong>Why they're different:</strong> When Sarah sells a kit, she physically hands one box 
                  to the customer. But for accounting purposes, she has to decide: did that box come from 
                  the $18 layer or the $20 layer? The physical box is the same either way, but the 
                  <em> cost assignment</em> changes her numbers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Inventory Layers explanation */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Layers className="h-5 w-5" />
                What Is an Inventory Layer?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-950">
              <p className="text-lg leading-relaxed">
                An <strong>inventory layer</strong> is a group of units purchased at the same cost. 
                Each time Sarah buys kits at a new price, she creates a new layer.
              </p>

              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-900 mb-3">Sarah's Inventory Layers This Month:</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-amber-100 rounded">
                    <span className="font-medium text-amber-900">Layer 1 (Beginning)</span>
                    <span className="text-amber-800">10 kits @ $18 = $180</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-200 rounded">
                    <span className="font-medium text-amber-900">Layer 2 (Purchased)</span>
                    <span className="text-amber-800">20 kits @ $20 = $400</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-300 rounded border-t-2 border-amber-400">
                    <span className="font-medium text-amber-900">Total Available</span>
                    <span className="text-amber-800 font-semibold">30 kits = $580</span>
                  </div>
                </div>
              </div>

              <p className="text-amber-800">
                When Sarah sells 15 kits, she has to "pull" cost from these layers. But which layer 
                does she pull from first? That's where <strong>cost assignment</strong> comes in—and 
                that's what you'll learn in Lesson 3 (FIFO and LIFO).
              </p>
            </CardContent>
          </Card>

          {/* Interactive Explorer - THE MAIN ACTIVITY */}
          <Card className="border-sky-200 bg-white">
            <CardHeader>
              <CardTitle className="text-sky-900 flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Now Try It: Explore Inventory Cost Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Now that you understand physical flow, cost flow, and inventory layers, it's time to 
                see how cost assignment works in practice. Make 15 sales and watch how your choices 
                affect COGS and Ending Inventory.
              </p>
              <InventoryFlowExplorer />
            </CardContent>
          </Card>

          {/* Where Mistakes Happen */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Where Mistakes Usually Happen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-red-950">
              <p className="text-lg leading-relaxed">
                Inventory tracking goes wrong in predictable places. Here are the most common errors:
              </p>

              <div className="grid gap-3">
                <div className="bg-white p-3 rounded-lg border border-red-300">
                  <p className="font-medium text-red-900">1. Mixing up units and dollars</p>
                  <p className="text-red-700 text-sm">
                    Counting 15 kits on the shelf doesn't automatically tell you their dollar value.
                    You have to trace which layer they came from.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-red-300">
                  <p className="font-medium text-red-900">2. Forgetting that Goods Available = Beginning + Purchases</p>
                  <p className="text-red-700 text-sm">
                    If you skip beginning inventory or miss a purchase, your entire calculation is off.
                    Always verify that BI + P = GAFS before assigning costs.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-red-300">
                  <p className="font-medium text-red-900">3. Not realizing COGS and Ending Inventory share the same pool</p>
                  <p className="text-red-700 text-sm">
                    Every dollar of cost has to go somewhere—either COGS or Ending Inventory. 
                    If one is wrong, the other is automatically wrong too.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-red-300">
                  <p className="font-medium text-red-900">4. Choosing a method without understanding why</p>
                  <p className="text-red-700 text-sm">
                    Different methods give different results. Picking FIFO just because it "looks better" 
                    without understanding the tradeoffs can create problems with investors, lenders, and taxes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fill in the Blank */}
          <FillInTheBlank
            sentences={vocabularySentences}
            title="Inventory Movement Vocabulary"
            description="Complete these sentences to show you understand how inventory moves through the formula."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          {/* Summary */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-800">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Goods Available for Sale</strong> = Beginning Inventory + Purchases (both units and dollars)
                </li>
                <li>
                  <strong>Physical flow</strong> tracks units; <strong>cost flow</strong> tracks dollars
                </li>
                <li>
                  <strong>Inventory layers</strong> form when you buy the same product at different prices
                </li>
                <li>
                  <strong>Cost assignment</strong> is the process of deciding which layer costs go to COGS 
                  and which stay in Ending Inventory
                </li>
                <li>
                  The same physical inventory can have different dollar values depending on how costs are assigned
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
