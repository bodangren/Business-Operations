import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Shield, CheckCircle } from "lucide-react";
import BreakEvenAnalysisCalculator from "@/components/financial-calculations/BreakEvenAnalysisCalculator";
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[2]; // Guided Practice

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit06Data} 
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
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Building Sarah’s Scenario Runner
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    One- and Two-Variable Data Tables + Validation
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <ol className="list-decimal list-inside space-y-2 text-slate-800">
                    <li><strong>Inputs:</strong> Set Price, Units, Variable Cost, and Fixed Cost in one place.</li>
                    <li><strong>Output:</strong> Create a Profit cell with <code>IFERROR</code> to prevent #DIV/0! during setup.</li>
                    <li><strong>One‑Variable Data Table:</strong> Vary Price; read Profit; label units and currency clearly.</li>
                    <li><strong>Two‑Variable Data Table:</strong> Vary Price and Units; format profit cells to highlight positive vs negative.</li>
                    <li><strong>Method Switching:</strong> Use Goal Seek to solve for Price, Units, Fixed, or Variable to hit target profit.</li>
                    <li><strong>Validation:</strong> Add rules for negative costs, missing IDs, and stale dates to protect credibility.</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Interactive CVP Tool */}
              <BreakEvenAnalysisCalculator />

              {/* Validation Builder (focused practice) */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Validation Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800 mb-3">
                    Professional models guard against bad inputs. Use this tool to practice writing rules 
                    that catch out‑of‑range values, negative costs, and missing IDs.
                  </p>
                  <ErrorCheckingSystem />
                  <div className="mt-3 flex items-center gap-2 text-green-900">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Standard: If inputs are invalid, the model explains the issue instead of failing silently.</span>
                  </div>
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

