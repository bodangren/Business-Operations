import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, SlidersHorizontal, Shield, CheckCircle2 } from "lucide-react";
import FinancialDashboard from "@/components/charts/FinancialDashboard";
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[2]; // Guided Practice

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🛠️ Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Build Steps */}
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <SlidersHorizontal className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Build Sarah’s Integration Dashboard
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Driver Table → Lookups → Outputs → Charts
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <ol className="list-decimal list-inside space-y-2 text-slate-800">
                    <li>Create a named <strong>Driver Table</strong> with scenario names and inputs (price, units, fixed, variable).</li>
                    <li>Use <strong>XLOOKUP</strong> (exact-match) to pull the active scenario into your model inputs.</li>
                    <li>Bind <strong>charts and KPI cards</strong> to structured references (Table[Column]).</li>
                    <li>Add <strong>validation</strong>: IFNA/IFERROR for missing names; flag out-of-range rates; stale AsOfDate warnings.</li>
                    <li>Test Base/Stretch/Downside toggles—watch the dashboard update instantly.</li>
                  </ol>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
                    <p className="text-green-800">
                      Professional reliability means no hard-coded values, stable references, and clear safeguards.
                      If something fails, the dashboard should explain why—not hide errors.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Visual Dashboard Demo */}
              <FinancialDashboard title="PriceLab Scenario Dashboard (Demo)" className="max-w-4xl mx-auto" />

              {/* Validation System Demo */}
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Add Guardrails with Validation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-900 mb-3">
                    Use a simple rule block to catch issues before they reach your charts:
                    missing scenario names, negative or &gt;100% rates, or stale dates.
                  </p>
                  <ErrorCheckingSystem />
                  <p className="text-slate-700 text-sm mt-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Tip: Keep the validation panel near the driver table so errors are easy to fix.
                  </p>
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

