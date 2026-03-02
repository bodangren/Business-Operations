"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSpreadsheet, Rocket, Download, CheckCircle, Calculator, ClipboardList, Star, Table } from "lucide-react";
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import type { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[3]; // Independent Practice phase

// ── read-only cells ──────────────────────────────────────────────────
function h(value: string): { value: string; readOnly: true } { return { value, readOnly: true }; }
function r(value: string | number): { value: string | number; readOnly: true } { return { value, readOnly: true }; }
const E: { value: string; readOnly: true } = { value: "", readOnly: true };

const sheet1: SpreadsheetData = [
  [h("Price Sensitivity — 1-Variable Data Table"), E, E, E],
  [E, E, E, E],
  [h("Corner Formula Link:"), r("=TotalProfit"), E, E],
  [h("Price (Column Input)"), h("Profit Output"), E, E],
  [r("$1,000"), r("−$11,100"), E, E],
  [r("$1,100"), r("−$2,820"), E, E],
  [r("$1,200"), r("$5,460"), E, E],
  [r("$1,300"), r("$13,740"), E, E],
  [r("$1,400"), r("$22,020"), E, E],
  [r("$1,500"), r("$30,300"), E, E],
  [E, E, E, E],
  [h("Visual Rule:"), h("Use Conditional Formatting (Red < 0, Green > 0)"), E, E],
];

const sheet2: SpreadsheetData = [
  [h("Profit Matrix — 2-Variable Data Table"), E, E, E, E, E],
  [E, E, E, E, E, E],
  [h("=TotalProfit"), h("10 Units"), h("15 Units"), h("20 Units"), h("25 Units"), h("30 Units")],
  [r("$1,000"), r("−$6,900"), r("−$6,300"), r("−$5,700"), r("−$5,100"), r("−$4,500")],
  [r("$1,200"), r("−$4,900"), r("−$3,300"), r("−$1,700"), r("−$100"), r("$1,500")],
  [r("$1,400"), r("−$2,900"), r("−$300"), r("$2,300"), r("$4,900"), r("$7,500")],
  [r("$1,600"), r("−$900"), r("$2,700"), r("$6,300"), r("$9,900"), r("$13,500")],
  [r("$1,800"), r("$1,100"), r("$5,700"), r("$10,300"), r("$14,900"), r("$19,500")],
];

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
            <div className="max-w-5xl mx-auto space-y-8 text-left">

              {/* Workbook Continuity */}
              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-cyan-900 flex items-center gap-2 text-xl">
                    <Download className="w-5 h-5" />
                    Load Your Goal Seek Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-cyan-900">
                  <p>
                    Start from the exact Goal Seek model you completed in Lesson 04. The Data Tables you build today
                    rely on that same Total Profit formula, so don&apos;t rebuild from scratch.
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Open the workbook, rename a copy to <em>PriceLab_DataTables.xlsx</em>, and keep both sheets in the same folder.</li>
                    <li>Verify the price and volume input cells still drive the profit cell you linked yesterday.</li>
                    <li>After each table calculates, paste the key ranges back into your notes tab—you&apos;ll cite them during Phase 5.</li>
                  </ol>
                </CardContent>
              </Card>
              
              {/* Introduction */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Build Sprint: The Pricing Engine
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    It&apos;s time to build the "Mathematical Heart" of your PriceLab workbook. 
                    You will create two automated Data Tables that map Sarah&apos;s sensitivity to market 
                    changes. This is the core deliverable that will drive Lesson 6&apos;s dashboard.
                  </p>
                </CardHeader>
              </Card>

              {/* Reference Spreadsheet */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-xl">
                    <FileSpreadsheet className="w-6 h-6" />
                    Reference Models — Completed Data Tables
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-blue-900 flex items-center gap-2">
                      <Table className="w-4 h-4" />
                      1. Price Sensitivity (1-Variable)
                    </h4>
                    <div className="overflow-x-auto bg-white p-4 rounded border border-blue-200">
                      <SpreadsheetWrapper
                        initialData={sheet1}
                        columnLabels={["A", "B", "C", "D"]}
                        readOnly={true}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-blue-900 flex items-center gap-2">
                      <Table className="w-4 h-4" />
                      2. Profit Matrix (2-Variable)
                    </h4>
                    <div className="overflow-x-auto bg-white p-4 rounded border border-blue-200">
                      <SpreadsheetWrapper
                        initialData={sheet2}
                        columnLabels={["A", "B", "C", "D", "E", "F"]}
                        readOnly={true}
                      />
                    </div>
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
                      title: "1. The 1-Variable Sensitivity Table",
                      steps: [
                        "Create a column of prices from $1,000 to $1,800 (increments of $100).",
                        "In the cell one row above and one column right (B3 in the reference), link to your Profit formula: =TotalProfit.",
                        "Highlight the range, go to Data > What-If Analysis > Data Table.",
                        "Select your Price input cell in the Column Input Cell box.",
                        "Apply Conditional Formatting: Red for negative profit, Green for positive.",
                      ],
                    },
                    {
                      title: "2. The 2-Variable Profit Matrix",
                      steps: [
                        "Create a grid: Prices ($1,000–$1,800) in the first column, Volume (10–30 units) in the first row.",
                        "In the top-left corner (A3 in the reference), link to your Profit formula: =TotalProfit.",
                        "Highlight the entire grid, open the Data Table dialog.",
                        "Row Input: Your Volume cell. Column Input: Your Price cell.",
                        "Note: If results look identical across rows, check that your Corner Link is correct.",
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

              {/* Rubric */}
              <Card className="border-violet-200 bg-violet-50">
                <CardHeader>
                  <CardTitle className="text-violet-800 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Workbook Build Rubric
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto text-xs">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-violet-100 text-violet-900">
                          <th className="text-left p-2 border border-violet-200">Category</th>
                          <th className="p-2 border border-violet-200">Emerging</th>
                          <th className="p-2 border border-violet-200">Proficient</th>
                          <th className="p-2 border border-violet-200">Advanced</th>
                        </tr>
                      </thead>
                      <tbody className="text-violet-800">
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Data Table Setup</td>
                          <td className="p-2 border border-violet-200">Tables show #VALUE or errors.</td>
                          <td className="p-2 border border-violet-200">Both 1V and 2V tables calculate correctly.</td>
                          <td className="p-2 border border-violet-200">Includes professional labeling and range anchors.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Visual Polish</td>
                          <td className="p-2 border border-violet-200">No formatting applied.</td>
                          <td className="p-2 border border-violet-200">Conditional formatting used on one table.</td>
                          <td className="p-2 border border-violet-200">Heat map (Green/Red) applied consistently to both.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Analysis</td>
                          <td className="p-2 border border-violet-200">Table exists but values aren't explained.</td>
                          <td className="p-2 border border-violet-200">Student can identify the break-even zone.</td>
                          <td className="p-2 border border-violet-200">Identifies the 'safest' pricing range for market shocks.</td>
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
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}
