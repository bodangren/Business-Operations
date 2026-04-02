import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Rocket, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[4]; // Assessment phase

const assessmentQuestions = [
  {
    id: "assess-1",
    question: "Sarah wants to create a Data Table that shows profit at prices $1,000, $1,100, $1,200, $1,300, $1,400. Where should she place these price values relative to the profit formula?",
    answers: [
      "In a row ABOVE the profit formula cell",
      "In a column BELOW the profit formula cell",
      "In any empty cell in the workbook",
      "In a separate sheet"
    ],
    explanation: "For a one-variable Data Table with column input, the input values must be placed in a row BELOW or column to the RIGHT of the formula cell, with the formula directly above or to the left."
  },
  {
    id: "assess-2",
    question: "When setting up a two-variable Data Table, the 'Row Input Cell' should reference:",
    answers: [
      "The input in your CVP model that corresponds to the values across the top row",
      "The cell containing the profit formula",
      "Any empty cell in the worksheet",
      "The first result cell in the Data Table"
    ],
    explanation: "The Row Input Cell is the input in your CVP model (like Volume) that corresponds to the values placed across the top row of the Data Table."
  },
  {
    id: "assess-3",
    question: "After creating a Data Table, Sarah tries to delete just one cell in the results. What happens?",
    answers: [
      "Excel shows an error—you cannot edit individual cells in a Data Table",
      "Excel deletes that one cell",
      "Excel deletes the entire Data Table",
      "Nothing happens"
    ],
    explanation: "Data Tables are array formulas. You cannot edit, delete, or change individual cells in the result range. To modify, you must clear the entire Data Table."
  },
  {
    id: "assess-4",
    question: "Looking at the two-variable matrix, Sarah notices some cells are negative (losses) and others are positive (profits). This helps her communicate:",
    answers: [
      "Pricing risk and the break-even boundary to investors",
      "That Excel has a calculation error",
      "That she should delete the negative scenarios",
      "That the investors don't need to see this data"
    ],
    explanation: "The matrix clearly shows which price/volume combinations result in profit vs. loss, allowing Sarah to communicate risk boundaries to investors."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Introduction */}
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    The Sensitivity Audit
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Testing Your "What-If" Analysis
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6 text-center">
                    <p className="text-lg leading-relaxed text-yellow-900 mb-4">
                      Your Sensitivity Matrix is a powerful tool, but is it <strong>trustworthy</strong>? 
                      In this assessment, we'll verify your Data Table setup and test your ability to 
                      interpret sensitivity results for business decisions.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Rocket className="w-5 h-5" />
                      Assessment Metrics
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Technical (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
                          <li>Correct column input cell reference (Price)</li>
                          <li>Correct row input cell reference (Volume)</li>
                          <li>One-variable table calculates correctly</li>
                          <li>Two-variable matrix calculates correctly</li>
                          <li>No #VALUE! errors</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Interpretation (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
                          <li>Identifies best-case scenario</li>
                          <li>Identifies break-even zone</li>
                          <li>Explains pricing risk to investors</li>
                          <li>Connects results to CVP logic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehensive Assessment */}
              <ComprehensionCheck
                title="Data Table Mastery Assessment"
                description="Prove you can build and interpret sensitivity analysis."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={false}
              />

              {/* Debrief Task */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    90-Second Investor Pitch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-amber-900">
                  <p>
                    With your Data Table open, pretend an investor asks: "What's the range of outcomes I should expect?"
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Reference your two-variable matrix to identify the profit range (lowest to highest).</li>
                    <li>Name the price/volume combination that maximizes profit and state the amount.</li>
                    <li>Identify the break-even boundary: at 20 units, what is the minimum price to avoid a loss?</li>
                  </ol>
                  <p className="text-xs text-amber-800">
                    Write these points in a brief script or voice memo. This connects the technical work to persuasive communication.
                  </p>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Next: Building the Dashboard</h3>
                  <p className="text-gray-700">
                    In Lesson 7 (Project Rehearsal), you'll integrate all your CVP work into a polished workbook.
                    The Data Tables you built today will feed directly into the dashboard you'll create in Lesson 6.
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
