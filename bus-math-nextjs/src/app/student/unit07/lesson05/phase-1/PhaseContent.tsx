import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle, Shield } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-red-100 text-red-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 1: Tool Pressure</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Sarah Needs to Compare Methods Under Pressure</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Sarah is meeting with a potential investor. The investor wants to see how COGS and ending inventory change
              under FIFO, LIFO, Specific ID, and Weighted Average. Sarah opens her workbook, toggles the method, and a formula breaks.
              The investor frowns. Today, your goal is to build a single model that can answer method-comparison questions
              quickly and defensibly with one source dataset.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-white">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> Investor Meeting Agenda
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4 text-slate-800">
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <p className="font-semibold mb-2">Question 1: Method Impact</p>
                <p className="text-sm">
                  Show how COGS and ending inventory change when switching FIFO, LIFO, Specific ID, and Weighted Average.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded border border-amber-200">
                <p className="font-semibold mb-2">Question 2: Why Different?</p>
                <p className="text-sm">
                  Explain why the same sales quantity can produce different COGS across methods.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="font-semibold mb-2">Question 3: Recommendation</p>
                <p className="text-sm">
                  Defend which method gives the clearest story for this business and this price environment.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" /> Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900">
              <p className="font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Which method differences would an investor ask you to justify first?</li>
                <li>Why does an investor care whether Sarah can switch methods in one file?</li>
                <li>What outputs matter most to someone deciding whether to fund this business?</li>
              </ul>
              <div className="mt-2 flex items-center gap-2 text-slate-700">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Professional standard: explain method logic and recommendation from one consistent workbook.</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
