import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table2, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[1]; // Introduction phase

const anatomyQuestions = [
  {
    id: "dt-1",
    question: "In a one-variable Data Table, the formula cell must be located:",
    answers: [
      "Above the column of input values, at the top of the table",
      "Below the column of input values",
      "Anywhere in the workbook",
      "In a separate sheet"
    ],
    explanation: "Data Table needs the formula positioned above the input column (for column input) or to the left of the input row (for row input). This tells Excel where to find the calculation base."
  },
  {
    id: "dt-2",
    question: "When setting up a two-variable Data Table, which cell is the 'Row Input Cell'?",
    answers: [
      "The cell that changes along the horizontal axis of the matrix",
      "The cell that contains the original profit formula",
      "The cell that displays the results",
      "Any empty cell in the worksheet"
    ],
    explanation: "The Row Input Cell is the input in your CVP model that corresponds to the values across the top row. The Column Input Cell corresponds to the values down the first column."
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Core Concept */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Table2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-blue-800 mb-2">
                    Data Table Mechanics
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    The "What-If" Engine
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-slate-800">
                    A <strong>Data Table</strong> is Excel's way of automating sensitivity analysis. 
                    It takes your existing formula (like the CVP profit calculation from Lesson 5) and 
                    recalculates it for as many input values as you want—all at once.
                  </p>

                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3">One-Variable Data Table</h3>
                    <p className="text-blue-800 text-sm mb-3">
                      Use when you want to test ONE input (like price) against many values:
                    </p>
                    <div className="bg-white p-4 rounded border border-blue-200 text-xs font-mono">
                      <div className="grid grid-cols-3 gap-1 mb-2 font-bold text-blue-600">
                        <div>A</div><div>B</div><div>C</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="border p-1">Formula (Profit)</div>
                        <div className="border p-1 bg-blue-50">$1,200</div>
                        <div className="border p-1 bg-blue-50">$1,300</div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="border p-1 bg-blue-50">$1,400</div>
                        <div className="border p-1 bg-blue-50">$1,500</div>
                        <div className="border p-1 bg-blue-50">$1,600</div>
                      </div>
                    </div>
                    <p className="text-blue-800 text-xs mt-2 italic">
                      Location: Data → What-If Analysis → Data Table → Column Input Cell = Price cell
                    </p>
                  </div>

                  <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-3">Two-Variable Data Table</h3>
                    <p className="text-purple-800 text-sm mb-3">
                      Use when you want to test TWO inputs (like price AND volume) at once:
                    </p>
                    <div className="bg-white p-4 rounded border border-purple-200 text-xs font-mono">
                      <div className="grid grid-cols-5 gap-1 mb-2 font-bold text-purple-600">
                        <div></div><div>$1,200</div><div>$1,350</div><div>$1,500</div><div>$1,600</div>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        <div className="border p-1 bg-purple-50">20 units</div>
                        <div className="border p-1">$2,400</div>
                        <div className="border p-1">$5,400</div>
                        <div className="border p-1">$8,400</div>
                        <div className="border p-1">$11,400</div>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        <div className="border p-1 bg-purple-50">30 units</div>
                        <div className="border p-1">$4,800</div>
                        <div className="border p-1">$9,800</div>
                        <div className="border p-1">$14,800</div>
                        <div className="border p-1">$19,800</div>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        <div className="border p-1 bg-purple-50">40 units</div>
                        <div className="border p-1">$7,200</div>
                        <div className="border p-1">$14,200</div>
                        <div className="border p-1">$21,200</div>
                        <div className="border p-1">$28,200</div>
                      </div>
                    </div>
                    <p className="text-purple-800 text-xs mt-2 italic">
                      Row Input Cell = Volume | Column Input Cell = Price
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Common Failure Modes */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Common Data Table Errors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded border border-amber-200">
                    <h4 className="font-bold text-amber-900 text-sm mb-2">Error #1: Formula Not in the Right Spot</h4>
                    <p className="text-amber-800 text-xs">
                      The formula must be positioned above the column values (for column input) or to the left of the row values (for row input). If it's not adjacent, Excel can't find the calculation base.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-amber-200">
                    <h4 className="font-bold text-amber-900 text-sm mb-2">Error #2: Wrong Input Cell Reference</h4>
                    <p className="text-amber-800 text-xs">
                      When you select the Data Table dialog, you must point to the <strong>original input cell</strong> in your CVP model (not a new cell). If you reference the wrong cell, the table calculates nothing or wrong values.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-amber-200">
                    <h4 className="font-bold text-amber-900 text-sm mb-2">Error #3: Array Formula Confusion</h4>
                    <p className="text-amber-800 text-xs">
                      Data Tables create array results. You cannot edit or delete individual cells in a Data Table result range. To clear, select the entire table and delete.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Mastery Check */}
              <ComprehensionCheck
                title="Data Table Anatomy"
                description="Can you identify the setup components?"
                questions={anatomyQuestions}
                showExplanations={true}
              />

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready to Practice?</h3>
                  <p className="text-gray-700">
                    In Guided Practice, you'll use our simulator to build a Data Table step-by-step 
                    before touching the real Excel workbook.
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
