import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, ShieldCheck, ListChecks } from "lucide-react";
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[2];

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit08Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Build steps */}
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="w-8 h-8 text-purple-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Building Sarah’s Automation System
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Scenario Runner • Sensitivity Grid • Validation
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <ol className="list-decimal list-inside space-y-2 text-slate-800">
                    <li>Create a Drivers table with Scenario, Growth_Rate, GM%, CAC, and Churn. Name the table DriversTbl.</li>
                    <li>Build a scenario selector cell (Scenario_Name). Use <strong>XLOOKUP(Scenario_Name, DriversTbl[Scenario], DriversTbl[@Growth_Rate], 0)</strong> and similar for other drivers, wrapped in <strong>IFNA</strong>.</li>
                    <li>Link the three‑statement model to these driver cells. Use structured references (Table[Column]) instead of fixed ranges.</li>
                    <li>Set up a two‑variable <strong>Data Table</strong> with Growth_Rate on rows and GM% on columns. The top‑left corner references the result cell (e.g., Net Income).</li>
                    <li>Add <strong>validation</strong>: flag negative growth, GM% &gt; 100%, stale AsOfDate older than 90 days, and missing customer IDs.</li>
                    <li>Document assumptions briefly next to inputs so reviewers can audit quickly.</li>
                  </ol>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
                    <p className="text-yellow-900"><strong>Tip:</strong> Data Tables recalc with F9. Keep volatile functions minimal and avoid circular references.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Validation practice component */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    Practice: Validation Logic That Protects Credibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-800 mb-3">
                    Use the builder below to think like a reviewer. Which rules catch the most dangerous errors for an investor demo?
                  </p>
                  <ErrorCheckingSystem />
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <ListChecks className="h-5 w-5" />
                    Safeguards You Should See in the Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-blue-900 space-y-1">
                    <li>Inputs on one sheet, outputs on another, no hard‑coded numbers in formulas</li>
                    <li>Scenario switching by name, not by row number</li>
                    <li>IFNA/IFERROR around external lookups to prevent breaks</li>
                    <li>All driver cells labeled with units and last updated date</li>
                  </ul>
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
