import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Wrench } from "lucide-react";
import FinancialDashboard from "@/components/charts/FinancialDashboard";
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem";
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
                    <Wrench className="h-6 w-6" /> Build Sarah’s Integrated Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <ol className="list-decimal list-inside text-slate-800 space-y-2">
                    <li>Create a <strong>Scenario</strong> driver table: columns for Name, Growth, Margin, Churn, Price, OpEx Growth.</li>
                    <li>Name each scenario row (Base, Stretch, Downside). Create <strong>named ranges</strong> for each column.</li>
                    <li>Build a selector cell (scenario name) and use <strong>XLOOKUP with IFNA</strong> to pull driver values.</li>
                    <li>Link outputs (Revenue, COGS, Profit, Cash Flow) to the driver cells—no hard‑coding.</li>
                    <li>Point charts at an Excel <strong>Table</strong> so they expand as months are added.</li>
                    <li>Add validation: stale AsOfDate, margin &lt 0, rates &gt 100%, missing scenario name.</li>
                  </ol>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                    <p className="text-yellow-900 text-sm">
                      Tip: Use comments to explain key formulas. Good documentation increases auditability and trust.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Visual dashboard scaffold */}
              <FinancialDashboard title="Demo: Integrated KPI View" />

              {/* Validation practice */}
              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 text-base flex items-center gap-2">
                    <Shield className="h-5 w-5" /> Validation Builder: Business Rule Checks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-800 mb-3">
                    Practice designing the validation rules your dashboard needs. Then translate each rule into Excel checks
                    (data validation, helper flags, or conditional formatting) in your model.
                  </p>
                  <ErrorCheckingSystem />
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

