import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, BookOpen } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"
import LayerAssignmentPractice from "../LayerAssignmentPractice"

const currentPhase = lesson03Phases[2] // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Phase 3: Guided Practice</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Calculating FIFO and LIFO by Hand</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Now you'll work through a complete FIFO and LIFO calculation step by step. 
              You'll fill in tables showing exactly which costs go to COGS and which stay in Ending Inventory.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Review of Key Concepts */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Quick Review: What You Already Know
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">FIFO (First-In, First-Out)</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>•Oldest costs go to COGS first</li>
                    <li>•In rising costs: lower COGS, higher profit</li>
                    <li>•Think: "bottom of the stack"</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">LIFO (Last-In, First-Out)</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Newest costs go to COGS first</li>
                    <li>• In rising costs: higher COGS, lower profit</li>
                    <li>• Think: "top of the stack"</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Practice */}
          <LayerAssignmentPractice />

          {/* After-Activity Summary */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                What You Learned
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-950">
              <p className="text-lg">
                By completing this guided practice, you've seen how the same inventory produces 
                <strong> different financial results</strong> under FIFO versus LIFO. 
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">The Process You Followed</h4>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>Identified all inventory layers with their costs</li>
                  <li>Assigned costs to COGS following FIFO (oldest first) or LIFO (newest first)</li>
                  <li>Calculated the remaining units for Ending Inventory</li>
                  <li>Verified that COGS + Ending Inventory = Goods Available for Sale</li>
                  <li>Compared gross profit under each method</li>
                </ol>
              </div>
              <p className="text-purple-800">
                <strong>Coming up in Independent Practice:</strong> You'll solve a new scenario on your own 
                and make a recommendation about which method a business should use.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}