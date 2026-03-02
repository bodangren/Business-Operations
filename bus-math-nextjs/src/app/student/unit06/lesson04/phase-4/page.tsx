"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSpreadsheet, Target, Download, CheckCircle, Calculator, ClipboardList, Star } from "lucide-react";
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import type { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[3]; // Independent Practice phase

// ── read-only header cell ──────────────────────────────────────────────────
function h(value: string): { value: string; readOnly: true } {
  return { value, readOnly: true };
}
// ── read-only value cell ─────────────────────────────────────────────
function r(value: string | number): { value: string | number; readOnly: true } {
  return { value, readOnly: true };
}
// ── empty read-only cell ───────────────────────────────────────────────────
const E: { value: string; readOnly: true } = { value: "", readOnly: true };

const sheet1: SpreadsheetData = [
  [h("TechStart Solutions — Goal Seek Decision Model"), E, E, E],
  [E, E, E, E],
  [h("Step 1: Base CVP Model"), E, E, E],
  [h("Fixed Costs"), r("$8,100"), E, E],
  [h("Variable Cost / Project"), r("$880"), E, E],
  [h("Selling Price / Project"), r("$1,350"), h("← CHANGING CELL"), E],
  [h("Volume (Projects)"), r("24"), h("← CHANGING CELL"), E],
  [E, E, E, E],
  [h("Revenue"), r("=B6*B7"), E, E],
  [h("Total Variable Costs"), r("=B5*B7"), E, E],
  [h("Total Fixed Costs"), r("=B4"), E, E],
  [h("Total Profit"), r("=B9-B10-B11"), h("← SET CELL"), E],
  [E, E, E, E],
  [h("Step 2: Goal Seek Scenarios"), E, E, E],
  [h("Scenario"), h("Target Profit"), h("Variable to Change"), h("Goal Seek Result")],
  [r("Investor Milestone"), r("$12,000"), r("Price"), r("$1,718")],
  [r("Growth Target"), r("$10,000"), r("Volume"), r("39 projects")],
  [r("Cost Squeeze"), r("$5,000"), r("Fixed Costs"), r("$3,180 (FC reduction)")],
];

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice
            </Badge>
            <div className="max-w-5xl mx-auto space-y-8 text-left">
              
              {/* Introduction */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Building the Goal Seek Engine
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    Now it&apos;s your turn to build Sarah&apos;s decision-making engine in Excel. 
                    You&apos;ll create a dynamic CVP model and use the <strong>Goal Seek tool</strong> 
                    to solve three critical investor scenarios.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
                    <Calculator className="w-5 h-5 text-blue-600 mt-1" />
                    <p className="text-sm text-blue-800">
                      <strong>Your Goal:</strong> Create a model where the "Total Profit" cell 
                      responds instantly to changes in Price and Volume, then use Goal Seek 
                      to find the exact numbers Sarah needs to hit her milestones.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Reference Spreadsheet */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-xl">
                    <FileSpreadsheet className="w-6 h-6" />
                    Reference Model — Goal Seek Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-700 text-sm">
                    This is your layout guide. Build your Excel sheet to match this structure. 
                    The values in Step 2 are what Goal Seek will fill in automatically for you.
                  </p>

                  <div className="overflow-x-auto bg-white p-4 rounded border border-blue-200">
                    <SpreadsheetWrapper
                      initialData={sheet1}
                      columnLabels={["A", "B", "C", "D"]}
                      readOnly={true}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Build Sequence */}
              <Card className="border-slate-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-slate-800 text-xl flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Build Sequence — Excel Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "1. Build the Base Model",
                      steps: [
                        "Enter fixed costs ($8,100), variable costs ($880), price ($1,350), and volume (24).",
                        "Write formulas for Revenue, Total Variable Costs, and Total Profit.",
                        "Verify that your profit shows $3,180 at current inputs.",
                      ],
                    },
                    {
                      title: "2. Run Goal Seek: Scenario A (Investor Milestone)",
                      steps: [
                        "Go to Data > What-If Analysis > Goal Seek.",
                        "Set Cell: B12 (Total Profit).",
                        "To Value: 12000.",
                        "By Changing Cell: B6 (Price).",
                        "Note the result: TechStart needs a $1,718 price to hit this target at current capacity.",
                      ],
                    },
                    {
                      title: "3. Run Goal Seek: Scenario B (Growth Target)",
                      steps: [
                        "Reset price to $1,350.",
                        "Run Goal Seek for $10,000 profit by changing Volume (B7).",
                        "Note the result: 39 projects. (Is this realistic given her 24-project capacity?)",
                      ],
                    },
                  ].map((task, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-2">{task.title}</h4>
                      <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                        {task.steps.map((step, si) => <li key={si}>{step}</li>)}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Deliverable Section */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5" />
                    Deliverable: Investor Analysis Memo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-amber-900 text-sm leading-relaxed">
                  <p>Based on your Goal Seek results, write a brief memo to Sarah&apos;s investor, Michael Chen:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Finding:</strong> State the exact price required to hit the $12,000 profit milestone.</li>
                    <li><strong>Feasibility:</strong> Explain why the "Volume" strategy (Level B) is currently impossible without more hiring.</li>
                    <li><strong>Strategic Recommendation:</strong> Should Sarah raise prices or increase capacity? Defend your choice.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Rubric */}
              <Card className="border-violet-200 bg-violet-50">
                <CardHeader>
                  <CardTitle className="text-violet-800 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Submission Rubric
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-violet-100 text-violet-900">
                          <th className="text-left p-2 border border-violet-200">Criteria</th>
                          <th className="p-2 border border-violet-200">Proficient</th>
                          <th className="p-2 border border-violet-200">Advanced</th>
                        </tr>
                      </thead>
                      <tbody className="text-violet-800">
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Model Accuracy</td>
                          <td className="p-2 border border-violet-200">Profit formula is correct ($3,180 base).</td>
                          <td className="p-2 border border-violet-200">Includes professional labeling and cell formatting.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Goal Seek Usage</td>
                          <td className="p-2 border border-violet-200">Correctly identifies required price for target.</td>
                          <td className="p-2 border border-violet-200">Can explain the Set/To/By parameters clearly.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Strategic Analysis</td>
                          <td className="p-2 border border-violet-200">Identifies that 39 projects exceeds capacity.</td>
                          <td className="p-2 border border-violet-200">Recommends a realistic path forward based on market constraints.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}