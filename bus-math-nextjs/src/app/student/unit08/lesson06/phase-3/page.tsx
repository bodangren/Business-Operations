import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Shield, Wrench } from "lucide-react";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[2];

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-800 flex items-center gap-2">
                    <Wrench className="h-6 w-6" /> Rehearse the Partial-Year Logic
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800">
                    Before you open Excel, rehearse the sequence with one asset. The workbook formulas follow the same order: calculate full-year depreciation with Excel&apos;s built-in function, multiply by months in service, then send the result to the mini statements.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3 not-prose mt-4">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase text-slate-500">Delivery Van</p>
                      <p className="text-sm font-semibold text-slate-900">Cost $30,000</p>
                      <p className="text-sm text-slate-700">Salvage $5,000, Life 5 years</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase text-slate-500">Purchase Date</p>
                      <p className="text-sm font-semibold text-slate-900">April 1</p>
                      <p className="text-sm text-slate-700">9 months in service</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase text-slate-500">Partial-Year Factor</p>
                      <p className="text-sm font-semibold text-slate-900">9 / 12 = 75%</p>
                      <p className="text-sm text-slate-700">Apply after SLN or DDB</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-indigo-900 text-lg flex items-center gap-2">
                    <Calculator className="h-5 w-5" /> Guided Calculation Path
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-800">
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Full-year SL:</strong> <code>SLN(30000, 5000, 5) = 5000</code></li>
                    <li><strong>Partial-year SL:</strong> <code>5000 * 9 / 12 = 3750</code></li>
                    <li><strong>Full-year DDB Year 1:</strong> <code>DDB(30000, 5000, 5, 1) = 12000</code></li>
                    <li><strong>Partial-year DDB:</strong> <code>12000 * 9 / 12 = 9000</code></li>
                    <li><strong>Book value impact:</strong> SL ends Year 1 at <code>30000 - 3750</code>; DDB ends at <code>30000 - 9000</code>.</li>
                  </ol>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-yellow-900 text-sm">
                      The DDB function handles the depreciation method. Your job in this lesson is to apply the partial-year factor and connect the output to statements.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 text-base flex items-center gap-2">
                    <Shield className="h-5 w-5" /> Bridge to Phase 4: What You Will Build in Excel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-800">
                  <p>
                    In Phase 4, you will build a fresh workbook with linked sheets. Here is the expected flow:
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li><strong>Asset Register:</strong> includes cost, salvage, life, purchase date, and months in service</li>
                    <li><strong>Partial-Year Depreciation:</strong> uses <code>SLN()</code>, <code>DDB()</code>, and months / 12</li>
                    <li><strong>Method Comparison:</strong> shows Year 1 expense and ending book value under both methods</li>
                    <li><strong>Mini Income Statement:</strong> links depreciation expense to operating income</li>
                    <li><strong>Mini Balance Sheet:</strong> links accumulated depreciation to net book value</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  );
}
