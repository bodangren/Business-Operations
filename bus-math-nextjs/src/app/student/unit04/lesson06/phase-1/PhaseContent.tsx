import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, ShieldCheck } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Hook — Live Demo</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Sarah’s Café Dashboard: One Screen, Three Scenarios</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              An investor walks into Sarah's office. She has <strong>10 seconds</strong> to show three scenarios and make a 
              recommendation. If her charts break or her numbers don't add up, she loses funding. Her integrated model 
              must switch instantly, show clear KPIs, and prove it's investor-ready.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Before: Fragile Switching
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-red-900">
              <div className="bg-red-100 p-3 rounded font-mono">
{`=IF(B2="Base", Base!C10, IF(B2="Stretch", Stretch!C10, Downside!C10))
=SUM(C2:C50) // breaks when rows grow`}
              </div>
              <ul className="list-disc list-inside">
                <li>Multiple tabs drift out of sync</li>
                <li>Fixed ranges miss new rows</li>
                <li>Charts point to static ranges</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                After: Integrated Scenario Driver
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-green-900">
              <div className="bg-green-100 p-3 rounded font-mono">
{`=XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[FoodCostPct], "Missing")
=IFNA(XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[LaborRatePct]), 0)
=SUM(SalesTable[Units]) // structured reference`}
              </div>
              <ul className="list-disc list-inside">
                <li>Switch by name with exact match</li>
                <li>Validation shows missing or out‑of‑range inputs</li>
                <li>Charts/tiles read from model outputs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <p className="font-medium mb-2">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>What signals help an investor decide in 10 seconds?</li>
                <li>Where should validation live so problems are impossible to miss?</li>
                <li>How do you prove your dashboard won’t break during Q&amp;A?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}

