import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Download } from "lucide-react";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[3];

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🧪 Phase 4: Independent Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-800 flex items-center gap-2">
                    <Target className="h-6 w-6" /> Integration Mastery Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800">
                    Download the practice data and implement scenario toggles, KPI thresholds, and a live‑updating dashboard.
                    Include an executive summary text box that updates when thresholds are crossed.
                  </p>
                  <div className="my-4">
                    <a className="inline-flex items-center gap-2 text-blue-700 underline" href="/resources/unit08-financial-model-integration-practice.csv" download>
                      <Download className="h-4 w-4" /> unit08-financial-model-integration-practice.csv
                    </a>
                  </div>
                  <h3 className="font-semibold">Scenarios</h3>
                  <ul className="list-disc list-inside text-slate-800">
                    <li>Switch by name: Base • Stretch • Downside</li>
                    <li>Charts update when you add new months</li>
                    <li>KPI summary shows runway, gross margin, cash coverage</li>
                    <li>Executive summary: one sentence that changes with results</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 text-base">Self‑Assessment Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-amber-900">
                    <li>Scenario selector switches drivers with no #N/A errors</li>
                    <li>All outputs use links; no hard‑coded numbers in reports</li>
                    <li>Validation flags: stale AsOfDate, negative margin, &gt; 100% rates</li>
                    <li>Charts reference Tables and expand correctly</li>
                    <li>Executive summary matches KPI thresholds</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  );
}

