"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table2, CheckCircle, ClipboardList, Star, Download, AlertTriangle } from "lucide-react";
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import type { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";

 // Independent Practice phase

// Read-only cells
function h(value: string): { value: string; readOnly: true } { return { value, readOnly: true }; }
function r(value: string | number): { value: string | number; readOnly: true } { return { value, readOnly: true }; }
const E: { value: string; readOnly: true } = { value: "", readOnly: true };

// Match the CVP Model sheet built in Lesson 5. Formula strings are display text.
const cvpSheet: SpreadsheetData = [
  [h("PriceLab CVP Model"), E, E, E],
  [E, E, E, E],
  [h("INPUTS"), E, E, E],
  [h("Price per Project"), r(1350), h("$/project"), E],
  [h("Projects (Volume)"), r(25), h("projects"), E],
  [h("Fixed Costs"), r(12000), h("$/period"), E],
  [h("Variable Cost/Project"), r(880), h("$/project"), E],
  [E, E, E, E],
  [h("CALCULATIONS"), h("Value ($)"), h("Formula to enter in column B"), E],
  [h("Contribution Margin"), r(470), r(" =B4-B7"), E],
  [h("Total Revenue"), r(33750), r(" =B4*B5"), E],
  [h("Total Variable Cost"), r(22000), r(" =B7*B5"), E],
  [h("Total Profit"), r(-250), r(" =B11-B12-B6"), E],
];

// Profit at 25 projects, with price down the first column.
const dataTableSheet: SpreadsheetData = [
  [h("One-Variable Data Table: Price Sensitivity"), E],
  [E, E],
  [h("Price ($/project)"), h("Profit ($) at 25 projects")],
  ...[1000, 1100, 1200, 1300, 1400, 1500, 1600].map(price => [r(price), r((price - 880) * 25 - 12000)]),
];

// Prices go down the first column. Volumes go across the top row.
const twoVarSheet: SpreadsheetData = [
  [h("Two-Variable Data Table: Price × Volume"), E, E, E, E, E],
  [E, E, E, E, E, E],
  [h("Price ↓ / Volume →"), E, E, E, E, E],
  [r(" =B13"), r(15), r(25), r(35), r(45), r(55)],
  ...[1000, 1200, 1400, 1600].map(price => [r(price), ...[15, 25, 35, 45, 55].map(volume => r((price - 880) * volume - 12000))]),
];

/**
 * Present Data Table previews that match the Lesson 5 profit model.
 * @returns Verified model outputs and Data Table build instructions.
 */
export default function Phase4Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      
      <div className="space-y-8">
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
                    Open Your CVP Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-cyan-900">
                  <p>
                    The Data Table builds on your Lesson 5 CVP model. That model calculates profit based on price, volume, 
                    fixed costs, and variable cost. We'll now use Data Tables to test many price/volume combinations at once.
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Open your <strong>PriceLab_GOALSEEK.xlsx</strong> workbook from Lesson 5.</li>
                    <li>Verify your CVP model is working (Profit should calculate correctly when you change Price or Volume).</li>
                    <li><strong>Save As</strong> to create <em>PriceLab_DataTables.xlsx</em> so your Lesson 5 work stays intact.</li>
                  </ol>
                </CardContent>
              </Card>
              
              {/* Introduction */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Table2 className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Build Sprint: Sensitivity Analysis
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    You have the CVP engine. Now you'll build the <strong>Sensitivity Matrix</strong>—a tool that shows 
                    Sarah (and her investors) every possible profit outcome across a range of prices and volumes.
                  </p>
                </CardHeader>
              </Card>

              {/* Reference: CVP Model */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-xl">
                    Reference Model — Your CVP Engine
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-700 text-sm">
                    Your existing CVP model should look something like this. Verify these cells exist and calculate correctly:
                  </p>
                  <div className="overflow-x-auto bg-white p-4 rounded border border-blue-200">
                    <SpreadsheetWrapper
                      initialData={cvpSheet}
                      columnLabels={["A", "B", "C", "D"]}
                      readOnly={true}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* One-Variable Data Table */}
              <Card className="border-blue-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-800 text-xl flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Build Step 1: One-Variable Data Table (Price Sensitivity)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    This table shows profit at different prices while holding volume constant.
                  </p>
                  <div className="bg-white p-4 rounded border border-blue-200 text-xs font-mono overflow-x-auto">
                    <SpreadsheetWrapper
                      initialData={dataTableSheet}
                      columnLabels={["A", "B"]}
                      readOnly={true}
                    />
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-blue-900 text-sm mb-2">Excel Instructions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-blue-800 text-xs">
                      <li>Enter prices from $1,000 to $1,600 down A19:A25 in $100 steps</li>
                      <li>In B18, enter <strong>=B13</strong> to link to Total Profit. Leave A18 blank</li>
                      <li>Select A18:B25, including the formula link, prices, and blank result cells</li>
                      <li>Go to <strong>Data → What-If Analysis → Data Table</strong></li>
                      <li>For <strong>Column Input Cell</strong>, select your Price input cell (e.g., B4)</li>
                      <li>Click OK—Excel fills in all profit values</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Two-Variable Data Table */}
              <Card className="border-purple-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-purple-800 text-xl flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Build Step 2: Two-Variable Data Table (Price × Volume Matrix)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 text-sm">
                    This matrix shows profit for every combination of price AND volume.
                  </p>
                  <div className="bg-white p-4 rounded border border-purple-200 text-xs font-mono overflow-x-auto">
                    <SpreadsheetWrapper
                      initialData={twoVarSheet}
                      columnLabels={["A", "B", "C", "D", "E", "F"]}
                      readOnly={true}
                    />
                  </div>
                  <div className="bg-purple-50 p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-900 text-sm mb-2">Excel Instructions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-purple-800 text-xs">
                      <li>In the top row, enter volumes across the columns</li>
                      <li>In the first column, enter prices down the rows</li>
                      <li>In the top-left corner cell, enter =B13 to link to Total Profit</li>
                      <li>Select the entire range including the corner formula</li>
                      <li>Go to <strong>Data → What-If Analysis → Data Table</strong></li>
                      <li>For <strong>Row Input Cell</strong>, select your Volume input cell (e.g., B5)</li>
                      <li>For <strong>Column Input Cell</strong>, select your Price input cell (e.g., B4)</li>
                      <li>Click OK—Excel fills the entire matrix</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Warning */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Important: Data Table Behavior
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-amber-800 text-sm">
                    <li><strong>Do not try to edit individual cells</strong> in the results table—it's an array formula!</li>
                    <li>To delete a Data Table, select the entire range and press Delete.</li>
                    <li>If results show <strong>#VALUE!</strong>, check that your input cell references are correct.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Deliverable */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5" />
                    Deliverable: Pricing Risk Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-amber-900 text-sm leading-relaxed">
                  <p>In a text box next to your Data Table, write a brief analysis:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Best Case:</strong> At what price and volume do you maximize profit? What is that profit?</li>
                    <li><strong>Break-Even Zone:</strong> What price range keeps profit above $0?</li>
                    <li><strong>Risk Signal:</strong> If volume drops to 15 units, what is the minimum price needed to avoid a loss?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Rubric */}
              <Card className="border-violet-200 bg-violet-50">
                <CardHeader>
                  <CardTitle className="text-violet-800 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Data Table Build Rubric
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
                          <td className="p-2 border border-violet-200 font-medium">One-Variable Table</td>
                          <td className="p-2 border border-violet-200">Price range produces correct profit values</td>
                          <td className="p-2 border border-violet-200">Table is clearly labeled with units and formatted professionally</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Two-Variable Matrix</td>
                          <td className="p-2 border border-violet-200">Price × Volume matrix calculates all combinations correctly</td>
                          <td className="p-2 border border-violet-200">Matrix uses conditional formatting to highlight profit/loss zones</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Analysis</td>
                          <td className="p-2 border border-violet-200">Identifies best case and break-even zone</td>
                          <td className="p-2 border border-violet-200">Provides specific pricing recommendations with risk caveats</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}
