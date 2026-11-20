"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSpreadsheet, Rocket, CheckCircle, Star } from "lucide-react";
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import type { SpreadsheetData, SpreadsheetCell } from "@/components/spreadsheet/SpreadsheetWrapper";


const baseCell = (value: string | number, className?: string): SpreadsheetCell => ({
  value,
  readOnly: true,
  className,
});

const headerCell = (value: string) =>
  baseCell(value, "bg-slate-100 text-slate-700 font-semibold text-center border border-slate-200");

const labelCell = (value: string) =>
  baseCell(value, "bg-slate-50 text-slate-600 font-semibold border border-slate-200");

const inputCell = (value: string | number) =>
  baseCell(value, "bg-white text-blue-800 font-mono border border-blue-200");

const formulaCell = (value: string) =>
  baseCell(` ${value}`, "bg-amber-50 text-amber-800 font-mono border border-amber-200");

const E = baseCell("");

const sheet1: SpreadsheetData = [
  [headerCell("Sarah's CVP Model - Target Profit Analysis"), E, E, E],
  [E, E, E, E],
  [labelCell("INPUTS"), E, E, E],
  [labelCell("Price per Project:"), inputCell(1350), E, E],
  [labelCell("Projects (Volume):"), inputCell(25), E, E],
  [labelCell("Fixed Costs:"), inputCell(12000), E, E],
  [labelCell("Variable Cost/Project:"), inputCell(880), E, E],
  [E, E, E, E],
  [labelCell("CALCULATIONS"), headerCell("Value ($)"), headerCell("Formula to enter in column B"), E],
  [labelCell("Contribution Margin:"), baseCell(470), formulaCell("=B4-B7"), E],
  [labelCell("Total Revenue:"), baseCell(33750), formulaCell("=B4*B5"), E],
  [labelCell("Total Variable Cost:"), baseCell(22000), formulaCell("=B7*B5"), E],
  [labelCell("Total Profit:"), baseCell(-250), formulaCell("=B11-B12-B6"), E],
  [E, E, E, E],
  [labelCell("GOAL SEEK RESULT"), E, E, E],
  [labelCell("Target Profit:"), inputCell(15000), E, E],
  [labelCell("Required Price:"), baseCell(1960), formulaCell("=B7+(B6+B16)/B5"), E],
];

/**
 * Present a Goal Seek workbook model with verified formulas and outputs.
 * @returns The model preview and workbook build instructions.
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

              {/* Introduction */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Build Sprint: CVP Workbook with Goal Seek
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    It's time to build the CVP model from scratch and use Goal Seek to answer 
                    the investor's question. By the end of this sprint, you'll have a workbook 
                    that can find any target price in seconds.
                  </p>
                </CardHeader>
              </Card>

              {/* Reference Model */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-xl">
                    <FileSpreadsheet className="w-6 h-6" />
                    Reference Model — Sarah's Completed CVP Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-blue-800">
                    Use column B for values and working formulas. Column C shows the formula text to enter. The preview shows the starting price of $1,350 and profit of −$250.
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
                <CardContent className="space-y-6">
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">Step 1: Set Up the CVP Model</h4>
                    <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                      <li>Open a new Excel workbook. Rename Sheet1 to "CVP Model". Save the file as PriceLab_GOALSEEK.xlsx.</li>
                      <li>Create the INPUTS section with labels and input cells for Price, Volume, Fixed Costs, Variable Cost</li>
                      <li>Create the CALCULATIONS section with formulas for Contribution Margin, Revenue, Variable Costs, and Total Profit</li>
                      <li>Verify the Profit formula works: it should calculate correctly when you change Price or Volume</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">Step 2: Run Goal Seek</h4>
                    <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                      <li>With the workbook open, go to <strong>Data → What-If Analysis → Goal Seek</strong></li>
                      <li><strong>Set Cell:</strong> Click your Total Profit cell (the formula cell, not the label)</li>
                      <li><strong>To Value:</strong> Type <code className="bg-slate-100 px-1">15000</code></li>
                      <li><strong>By Changing Cell:</strong> Click your Price input cell</li>
                      <li>Click OK and watch Excel find the answer</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">Step 3: Test Different Scenarios</h4>
                    <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                      <li>Run Goal Seek again to find the price needed for different target profits: $10,000, $20,000</li>
                      <li>Try changing the approach: keep Price at $1,350, find the volume needed for $15,000 profit</li>
                      <li>Document each scenario in your notes with the target, the result, and the business meaning</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Verification Checkpoints */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Verification Checkpoints
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-green-800">
                  <p className="font-medium">Before you move on, verify each of these:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Changing the Price input updates the Profit formula automatically</li>
                    <li>Goal Seek successfully changes the Price to $1,960 for the $15,000 profit target</li>
                    <li>The resulting price makes mathematical sense (higher than variable cost + proportional to target)</li>
                    <li>You can run Goal Seek again with a different target and get a new answer</li>
                  </ul>
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
                          <td className="p-2 border border-violet-200 font-medium">CVP Model Setup</td>
                          <td className="p-2 border border-violet-200">Formulas don't calculate correctly.</td>
                          <td className="p-2 border border-violet-200">All formulas work, Profit updates with inputs.</td>
                          <td className="p-2 border border-violet-200">Clear labeling, organized sections, easy to read.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Goal Seek Execution</td>
                          <td className="p-2 border border-violet-200">Can't find the tool or wrong cells selected.</td>
                          <td className="p-2 border border-violet-200">Goal Seek runs and finds correct price.</td>
                          <td className="p-2 border border-violet-200">Tests multiple scenarios and documents results.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-violet-200 font-medium">Business Interpretation</td>
                          <td className="p-2 border border-violet-200">Can't explain what the result means.</td>
                          <td className="p-2 border border-violet-200">Explains the price in business context.</td>
                          <td className="p-2 border border-violet-200">Connects results to investor scenario and pricing strategy.</td>
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
