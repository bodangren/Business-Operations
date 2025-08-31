import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, CheckSquare, FileText } from "lucide-react"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice — Integration Mastery
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Scenario Toggles, Live‑Updating Visuals, and Executive Summary</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Download the integration dataset. Switch scenarios by name, wire charts to model outputs, and write a short summary that updates at KPI thresholds.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Integration Dataset
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm space-y-2">
              <p>
                Import this CSV to build your <em>Drivers</em> and <em>Settings</em> tables. Test Base, Stretch, and Downside and confirm visuals update live.
              </p>
              <a href="/resources/unit02-month-end-integration-practice.csv" download className="underline text-blue-700">
                Download: unit02-month-end-integration-practice.csv
              </a>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckSquare className="h-5 w-5" />
                Self‑Assessment Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>Scenario switching works by exact name; missing names show a clear message (IFNA/IFERROR).</li>
                <li>Charts and KPI tiles update automatically when switching or adding rows.</li>
                <li>Validation coverage: missing scenario, stale <code>AsOfDate</code>, negative or &gt;100% rates.</li>
                <li>No hard‑coded ranges; all formulas use structured references.</li>
                <li>Executive summary text changes at thresholds (margin, runway, cash coverage).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Communication Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm">
              Write 1–2 sentences an investor can read in 5 seconds. Example: “Downside margin is 18% (below 20% target). Cut ad spend 10% and raise price $2 to protect runway.”
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}

