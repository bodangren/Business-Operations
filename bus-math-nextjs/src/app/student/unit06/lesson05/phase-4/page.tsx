import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, ListChecks, Download } from "lucide-react";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[3]; // Independent Practice

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit06Data} 
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
                    <Rocket className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Advanced CVP Mastery Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    Download the advanced practice dataset with edge cases. Build a scenario runner with 
                    one‑ and two‑variable Data Tables, then verify your model with the checklist.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-800">
                      <Download className="w-5 h-5" />
                      <a href="/resources/unit06-cvp-advanced-practice.csv" download className="underline">
                        Download unit06-cvp-advanced-practice.csv
                      </a>
                    </div>
                    <span className="text-xs text-blue-700">Includes negative costs, stale dates, and extreme volumes</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Challenges</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Build a one‑variable Data Table for price and chart profit vs. price.</li>
                    <li>Create a two‑variable Data Table for price and units; highlight profit ≥ 0.</li>
                    <li>Implement method switching to hit $50,000 profit by changing price, then units.</li>
                    <li>Add validation to flag negative costs and blank product IDs.</li>
                    <li>Explain to investors how rising fixed costs shift break‑even and risk.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <ListChecks className="h-5 w-5" />
                    Self‑Assessment: Investor‑Ready Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-green-900 space-y-1">
                    <li>Inputs and outputs are clearly labeled with units.</li>
                    <li>Data Tables are documented (changing cell and formula cell noted).</li>
                    <li>Formulas use IFERROR and structured references where appropriate.</li>
                    <li>Validation flags negative costs, blank IDs, and stale dates.</li>
                    <li>Executive summary explains risk, break‑even, and pricing recommendation.</li>
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}

