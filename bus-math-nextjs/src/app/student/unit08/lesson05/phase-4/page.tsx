import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Download, CheckSquare } from "lucide-react";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[3];

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit08Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-orange-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Advanced Sensitivity Mastery Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800 mb-4">
                    Download the advanced dataset, then complete the escalating challenges. Your model should update instantly when rows or inputs change.
                  </p>
                  <div className="bg-gray-50 border rounded p-4 mb-4">
                    <a href="/resources/unit08-sensitivity-analysis-advanced-practice.csv" download className="inline-flex items-center gap-2 text-blue-700 hover:underline">
                      <Download className="w-4 h-4" />
                      Download: unit08-sensitivity-analysis-advanced-practice.csv
                    </a>
                  </div>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Build a two‑variable Data Table (Growth vs GM%) reading Net Income. Use named ranges for inputs.</li>
                    <li>Add a second grid reading Ending Cash. Explain why Net Income and Cash can diverge.</li>
                    <li>Switch driver sets by typing scenario names. Use XLOOKUP with IFNA to avoid #N/A.</li>
                    <li>Add validation for stale AsOfDate (&gt; 90 days), negative growth, and GM% &gt; 100%.</li>
                    <li>Create a short executive summary: “What keeps us cash‑positive under downside conditions?”</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <CheckSquare className="h-5 w-5" />
                    Self‑Assessment: Investor‑Ready Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="text-left space-y-2 text-blue-900">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Scenario switching works by name with IFNA fallback
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Data Tables recalc correctly; ranges expand with new rows
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Validation flags negative growth, &gt;100% GM, stale dates
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      No hard‑coded values inside formulas; clear labels and units
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Executive summary clearly states risks and decisions
                    </label>
                  </form>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}
