"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSpreadsheet, Compass, CheckCircle, ClipboardList, Star, Download } from "lucide-react";
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import type { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[3]; // Independent Practice phase

// ── read-only cells ──────────────────────────────────────────────────
function h(value: string): { value: string; readOnly: true } { return { value, readOnly: true }; }
function r(value: string | number): { value: string | number; readOnly: true } { return { value, readOnly: true }; }
const E: { value: string; readOnly: true } = { value: "", readOnly: true };

const sheet1: SpreadsheetData = [
  [h("PriceLab Integration Dashboard"), E, E, E, E],
  [E, E, E, E, E],
  [h("1. Scenario Control"), E, E, h("2. Live KPI Summary"), E],
  [h("Select Scenario:"), r("Base Case"), h("← DROPDOWN"), h("Monthly Profit:"), r("$3,180")],
  [E, E, E, h("Selling Price:"), r("$1,350")],
  [E, E, E, h("Monthly Volume:"), r("24 units")],
  [E, E, E, h("Break-Even Units:"), r("18 units")],
  [E, E, E, E, E],
  [h("3. Scenario Summary Table (Hidden or Below)"), E, E, E, E],
  [h("Name"), h("Price"), h("Volume"), h("Profit"), h("Break-Even")],
  [h("Base Case"), r("$1,350"), r("24"), r("$3,180"), r("18")],
  [h("Price Hike"), r("$1,600"), r("24"), r("$9,180"), r("15")],
  [h("High Volume"), r("$1,350"), r("35"), r("$8,350"), r("18")],
  [h("Downside"), r("$1,200"), r("20"), r("-$1,700"), r("23")],
  [E, E, E, E, E],
  [h("4. XLOOKUP Engine"), E, E, E, E],
  [h("Field"), h("Formula"), E, E, E],
  [h("Profit"), r("=XLOOKUP($B$4,$A$11:$A$14,$D$11:$D$14)"), E, E, E],
  [h("Price"), r("=XLOOKUP($B$4,$A$11:$A$14,$B$11:$B$14)"), E, E, E],
  [h("Volume"), r("=XLOOKUP($B$4,$A$11:$A$14,$C$11:$C$14)"), E, E, E],
  [h("Break-Even"), r("=XLOOKUP($B$4,$A$11:$A$14,$E$11:$E$14)"), E, E, E],
];

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
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
                    Open Your Scenario Runner Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-cyan-900">
                  <p>
                    The dashboard only works if it reads a short scenario summary table built from the work you already
                    completed in Lessons 04 and 05. Keep that workbook open and pull the final numbers into one clean
                    four-row table before you write any XLOOKUP formulas.
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Use <strong>Save As</strong> to create <em>PriceLab_Dashboard.xlsx</em> so your Lesson 05 tabs stay intact.</li>
                    <li>Create a <strong>Scenario Summary</strong> block with four rows: Base Case, Price Hike, High Volume, and Downside.</li>
                    <li>Use the price, volume, profit, and break-even results from your earlier sheets to fill that block.</li>
                    <li>Lock the dropdown cell reference ($B$4) before wiring XLOOKUP so the link persists when you build charts.</li>
                  </ol>
                </CardContent>
              </Card>
              
              {/* Introduction */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Compass className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Build Sprint: The Strategic Dashboard
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    You have the engine (Data Tables) and you have the logic (XLOOKUP). Now, you 
                    will build the final <strong>PriceLab Dashboard</strong>. This single page 
                    will allow Sarah to present her pricing strategy to any investor with total confidence.
                  </p>
                </CardHeader>
              </Card>

              {/* Reference Spreadsheet */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-xl">
                    <FileSpreadsheet className="w-6 h-6" />
                    Reference Model — Integration Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-700 text-sm">
                    This is your layout guide. Focus on the <strong>cleanliness</strong> of the dashboard. 
                    The investor should only see the control and the KPIs. The Scenario Summary and the XLOOKUP
                    engine can sit lower on the sheet or on a helper tab.
                  </p>

                  <div className="overflow-x-auto bg-white p-4 rounded border border-blue-200">
                    <SpreadsheetWrapper
                      initialData={sheet1}
                      columnLabels={["A", "B", "C", "D", "E"]}
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
                      title: "1. Build the Scenario Summary Table",
                      steps: [
                        "Create four scenario labels: Base Case, Price Hike, High Volume, and Downside.",
                        "Use your Lesson 4 and Lesson 5 sheets to fill in Price, Volume, Profit, and Break-Even for each row.",
                        "Check that every scenario row tells one complete story before you move on.",
                      ],
                    },
                    {
                      title: "2. Create the Scenario Toggle",
                      steps: [
                        "Select cell B4. Go to Data > Data Validation.",
                        "Allow: List. Source: Highlight your four scenario names from the summary table.",
                        "Verify that a dropdown menu appears in B4.",
                      ],
                    },
                    {
                      title: "3. Wire the XLOOKUPs",
                      steps: [
                        "In your KPI Summary area, write XLOOKUP formulas for Profit, Price, Volume, and Break-Even.",
                        "Lookup Value: $B$4 (Absolute reference so you can copy the formula).",
                        "Lookup Array: The Name column in your Scenario Summary table.",
                        "Return Array: The matching column for the result you want.",
                      ],
                    },
                    {
                      title: "4. Link the Interactive Chart",
                      steps: [
                        "Insert a Clustered Column chart.",
                        "Data Source: Your new KPI Summary area (NOT the raw data tables).",
                        "Test it: Change the dropdown in B4. Does the chart move?",
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
                    Deliverable: Investor Presentation Brief
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-amber-900 text-sm leading-relaxed">
                  <p>In a text box on your dashboard, write a 3-sentence summary for an investor:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>The Strategy:</strong> Which scenario (Base, Price Hike, etc.) do you recommend and why?</li>
                    <li><strong>The Risk:</strong> What happens to profit in your 'Downside' scenario?</li>
                    <li><strong>The Defense:</strong> How does this dashboard prove you can explain the numbers quickly and accurately?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Rubric */}
              <Card className="border-violet-200 bg-violet-50">
                <CardHeader>
                  <CardTitle className="text-violet-800 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Dashboard Build Rubric
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto text-xs">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-violet-100 text-violet-900">
                          <th className="text-left p-2 border border-violet-200">Category</th>
                          <th className="p-2 border border-violet-200">Proficient</th>
                          <th className="p-2 border border-violet-200">Advanced</th>
                        </tr>
                      </thead>
                      <tbody className="text-violet-800">
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Integration</td>
                          <td className="p-2 border border-violet-200">Dropdown works and updates 3+ KPIs.</td>
                          <td className="p-2 border border-violet-200">Includes error handling (IFNA) for the lookup.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Visualization</td>
                          <td className="p-2 border border-violet-200">Chart is linked to the XLOOKUP summary.</td>
                          <td className="p-2 border border-violet-200">Chart has professional titles, labels, and clean axes.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">UX Design</td>
                          <td className="p-2 border border-violet-200">Dashboard is on its own clearly labeled sheet.</td>
                          <td className="p-2 border border-violet-200">Layout follows the 'Z-pattern' (most important info top-left).</td>
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
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />
    </div>
  );
}
