import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Download, ClipboardCheck } from "lucide-react";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[3]; // Independent Practice

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🎯 Phase 4: Independent Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Practice Data */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Download className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Integration Dataset: Scenario Lines + KPI Targets
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Download the practice data and connect it to your driver table. Build scenario toggles by
                    name and make the dashboard update live. Your executive summary should switch with scenarios
                    and show thresholds (runway, margin, break-even, cash coverage).
                  </p>
                  <p className="text-lg">
                    <a href="/resources/unit06-cvp-integration-practice.csv" download className="text-orange-700 underline">
                      Download unit06-cvp-integration-practice.csv
                    </a>
                  </p>
                </CardContent>
              </Card>

              {/* Self Assessment Checklist */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <ClipboardCheck className="h-5 w-5" />
                    Investor-Ready Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-amber-900 text-left">
                    <li>Scenario toggles by name (Base/Stretch/Downside) switch all linked outputs.</li>
                    <li>Charts and KPI cards update live and reference expanding tables.</li>
                    <li>Validation catches missing scenario names, stale AsOfDate, and out-of-range rates.</li>
                    <li>Executive summary text changes with thresholds (runway, margin, break-even, cash).</li>
                    <li>All inputs/outputs are labeled, documented, and easy to trace.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />
    </div>
  );
}

