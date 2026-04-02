import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Wrench } from "lucide-react";
import DepreciationMethodComparisonSimulator from "@/components/business-simulations/DepreciationMethodComparisonSimulator";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[2];

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🧰 Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-800 flex items-center gap-2">
                    <Wrench className="h-6 w-6" /> Rehearse Method Comparison Before You Build
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800">
                    Before you open Excel, practice the comparison logic here. Pick an asset, predict Year 1 expense for both methods, 
                    then see the full side-by-side schedule. This mirrors exactly what your Excel comparison sheet will produce.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                    <p className="text-yellow-900 text-sm">
                      <strong>Key insight:</strong> Both methods depreciate the same total amount (Cost − Salvage). The only difference is timing. 
                      DDB expenses more early, SL expenses evenly. Your Excel workbook should show this clearly.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Simulator */}
              <DepreciationMethodComparisonSimulator />

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 text-base flex items-center gap-2">
                    <Shield className="h-5 w-5" /> Bridge to Phase 4: What You Will Build in Excel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-800">
                  <p>
                    In Phase 4, you will extend your Lesson 05 asset register workbook by adding a <strong>Method Comparison</strong> sheet. 
                    Here is what you will build:
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li><strong>Comparison sheet:</strong> One row per asset showing SL and DDB Year 1 expense, final book value, and total depreciation</li>
                    <li><strong>DDB full schedule:</strong> A separate block showing the full DDB schedule with the salvage value floor built in</li>
                    <li><strong>Check column:</strong> Verifies Book Value = Cost − Accumulated Depreciation for both methods</li>
                    <li><strong>Statement impact summary:</strong> Shows how method choice changes Year 1 net income and book value</li>
                  </ol>
                  <p className="font-medium text-emerald-800 mt-3">
                    The simulator above produces the same numbers your Excel formulas should. If they do not match, check your formulas.
                  </p>
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
