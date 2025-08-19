import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, CheckSquare, TrendingUp } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice — Advanced Mastery Challenges
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Stress Test Your Automation with Real Edge Cases
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Download the dataset and implement your controls. Prove your ledger catches
              issues and updates dynamically when rows change.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Advanced Practice Data
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <p className="mb-3">
                Use this realistic CSV with mistakes and edge cases. Import into Excel and
                build your <em>Transactions</em> and <em>Accounts</em> tables.
              </p>
              <a href="/resources/unit01-ledger-advanced-practice.csv" download className="underline text-blue-700">
                Download: unit01-ledger-advanced-practice.csv
              </a>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckSquare className="h-5 w-5" />
                Self-Assessment Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>Tables use structured references; totals auto-update with new rows</li>
                <li>Missing AccountIDs show clear warnings (no silent failures)</li>
                <li>Trial balance shows Balanced/Out of Balance accurately</li>
                <li>Cash vs Accrual method switch works across calculations</li>
                <li>Data Validation blocks negative amounts and stale dates</li>
                <li>Short documentation notes explain each control’s purpose</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Business Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm">
              Tie your findings to cash flow and investor updates. If the model flags issues,
              what actions should Sarah take before sending reports to a mentor or investor?
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

