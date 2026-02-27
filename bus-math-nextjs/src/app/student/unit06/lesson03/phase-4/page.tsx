"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator, ClipboardList, FileSpreadsheet, Star, Target } from "lucide-react";
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import type { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[3]; // Independent Practice

// ── read-only header cell ──────────────────────────────────────────────────
function h(value: string): { value: string; readOnly: true } {
  return { value, readOnly: true };
}
// ── editable cell with a value ─────────────────────────────────────────────
function r(value: string | number): { value: string | number; readOnly: true } {
  return { value, readOnly: true };
}
// ── empty read-only cell ───────────────────────────────────────────────────
const E: { value: string; readOnly: true } = { value: "", readOnly: true };

// ─────────────────────────────────────────────────────────────────────────────
// Sheet 1 — Contribution Margin Sprint
// ─────────────────────────────────────────────────────────────────────────────
const sheet1: SpreadsheetData = [
  [h("TechStart Solutions"), E, E, E, E, E],
  [h("Sheet 1: Contribution Margin Sprint"), E, E, E, E, E],
  [E, E, E, E, E, E],
  [h("Fixed Costs / Month"), r("$8,100"), E, h("Variable Cost / Project"), r("$880"), E],
  [h("Monthly Capacity"), r("24 projects"), E, E, E, E],
  [E, E, E, E, E, E],
  [h("Option"), h("Price"), h("Variable Cost"), h("CM ($)  [=B-C]"), h("CM Ratio  [=D/B]"), h("Profit @ 24 proj  [=(D×24)−8100]")],
  [r("Value Launch"),  r("$1,200"), r("$880"), r("$320"),  r("26.7%"), r("$560")],
  [r("Balanced Core"), r("$1,350"), r("$880"), r("$470"),  r("34.8%"), r("$3,180")],
  [r("Premium Plus"),  r("$1,500"), r("$880"), r("$620"),  r("41.3%"), r("$6,780")],
  [E, E, E, E, E, E],
  [h("Key insight:"), r("Higher price →"), r("larger CM →"), r("more profit →"), r("per project"), r("delivered.")],
];

// ─────────────────────────────────────────────────────────────────────────────
// Sheet 2 — Break-Even Ladder
// ─────────────────────────────────────────────────────────────────────────────
const sheet2: SpreadsheetData = [
  [h("TechStart Solutions"), E, E, E, E],
  [h("Sheet 2: Break-Even Ladder"), E, E, E, E],
  [E, E, E, E, E],
  [h("Formula:"), h("Break-Even ="), h("⌈Fixed Costs ÷ CM⌉"), h("(always round UP)"), E],
  [E, E, E, E, E],
  [h("Option"), h("Fixed Costs"), h("CM ($)"), h("Break-Even (projects)  [=⌈B/C⌉]"), h("Rank (1 = easiest)")],
  [r("Premium Plus"),  r("$8,100"), r("$620"), r("14"), r("1st — Easiest")],
  [r("Balanced Core"), r("$8,100"), r("$470"), r("18"), r("2nd")],
  [r("Value Launch"),  r("$8,100"), r("$320"), r("26"), r("3rd — Hardest")],
  [E, E, E, E, E],
  [h("Key insight:"), r("Higher CM →"), r("fewer projects"), r("to break even →"), r("less business risk.")],
];

// ─────────────────────────────────────────────────────────────────────────────
// Sheet 3 — Capacity Reality Check
// ─────────────────────────────────────────────────────────────────────────────
const sheet3: SpreadsheetData = [
  [h("TechStart Solutions"), E, E, E, E, E],
  [h("Sheet 3:"), h("Capacity"), h("Reality Check"), E, E, E],
  [E, E, E, E, E, E],
  [h("Monthly capacity ceiling:"), r("24 projects"), E, E, E, E],
  [E, E, E, E, E, E],
  [h("Option"), h("Break-Even"), h("Capacity"), h("Feasible?"), h("Cushion"), h("Profit @ Capacity")],
  [E, E, E, h("[=IF(B≤C,\"Yes\",\"No\")]"), h("[=C−B]"), h("[=(CM×24)−8100]")],
  [r("Value Launch"),  r("26"), r("24"), r("No"),  r("−2 projects"), r("−$1,700  (loss)")],
  [r("Balanced Core"), r("18"), r("24"), r("Yes"), r("+6 projects"),  r("$3,180")],
  [r("Premium Plus"),  r("14"), r("24"), r("Yes"), r("+10 projects"), r("$6,780")],
  [E, E, E, E, E, E],
  [h("Decision:"), r("Eliminate $1,200 —"), r("cannot break even"), r("at current capacity."), E, E],
  [h("Recommendation:"), r("$1,500 offers"), r("the largest cushion"), r("and highest profit"), r("at capacity."), E],
];

// ─────────────────────────────────────────────────────────────────────────────
// Sheet 4 — Target-Profit Reverse Solve
// ─────────────────────────────────────────────────────────────────────────────
const sheet4: SpreadsheetData = [
  [h("TechStart Solutions"), E, E],
  [h("Sheet 4:"), h("Target-Profit Reverse Solve"), E],
  [E, E, E],
  [h("Given Values"), h("Amount"), h("Notes")],
  [r("Target monthly profit"), r("$12,000"), r("investor milestone")],
  [r("Fixed costs / month"),   r("$8,100"),  r("unchanged")],
  [r("Variable cost / project"), r("$880"), r("unchanged")],
  [r("Monthly capacity"),       r("24"),     r("max projects Alex can deliver")],
  [E, E, E],
  [h("Solve A —"), h("Required Units at $1,500"), h("(Premium Plus, CM = $620)")],
  [r("Formula"), r(" = ⌈(Fixed Costs + Target Profit) ÷ CM⌉"), E],
  [r("Calculation"), r(" = ⌈($8,100 + $12,000) ÷ $620⌉"), E],
  [r(" = ⌈$20,100 ÷ $620⌉"), r(" = ⌈32.4⌉"), E],
  [r("Required units"), r("33 projects"), r("Exceeds 24-project capacity → adjust target or capacity")],
  [E, E, E],
  [h("Solve B —"), h("Required Price at 24 Projects"), h("(to hit $12,000 profit)")],
  [r("Formula"), r(" = Variable Cost + (Fixed Costs + Target Profit) ÷ Units"), E],
  [r("Calculation"), r(" = $880 + ($20,100 ÷ 24)"), E],
  [r(" = $880 + $837.50"), r(" = $1,717.50"), E],
  [r("Required price"), r("$1,718 / project"), r("≈ round up to next dollar")],
  [E, E, E],
  [h("Lesson 4 connection:"), r("Goal Seek automates both solves."), r("Set the profit cell, change price or volume.")],
];

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-5xl mx-auto space-y-8">

          {/* ── Context ────────────────────────────────────────────────────── */}
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Independent Practice: Build Sarah&apos;s Decision Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-purple-700 leading-relaxed">
                In Guided Practice you calculated contribution margin and break-even yourself.
                Now you&apos;ll replicate the same four steps in Excel — one sheet per step.
                Below is a read-only reference showing exactly what your finished workbook should
                look like. Use it to check your formulas and layout as you build.
              </p>
              <div className="bg-white rounded border border-purple-200 p-4 text-sm text-purple-900 grid grid-cols-1 md:grid-cols-3 gap-4">
                <p><strong>Fixed Costs:</strong> $8,100 / month</p>
                <p><strong>Variable Cost:</strong> $880 / project</p>
                <p><strong>Capacity:</strong> 24 projects / month</p>
              </div>
            </CardContent>
          </Card>

          {/* ── Reference Spreadsheet ──────────────────────────────────────── */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2 text-xl">
                <FileSpreadsheet className="w-6 h-6" />
                Reference Model — Completed Excel Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-700 text-sm">
                This is a read-only preview. Each tab matches one sheet in your Excel workbook.
                Compare your formulas and values to this model as you build yours in Excel.
              </p>

              <Tabs defaultValue="sheet1" className="w-full">
                <TabsList className="grid w-full grid-cols-4 text-xs">
                  <TabsTrigger value="sheet1">Sheet 1 — CM Sprint</TabsTrigger>
                  <TabsTrigger value="sheet2">Sheet 2 — BE Ladder</TabsTrigger>
                  <TabsTrigger value="sheet3">Sheet 3 — Capacity</TabsTrigger>
                  <TabsTrigger value="sheet4">Sheet 4 — Reverse Solve</TabsTrigger>
                </TabsList>

                <TabsContent value="sheet1" className="mt-4 overflow-x-auto">
                  <p className="text-xs text-blue-600 mb-2">
                    Column headers in brackets show the Excel formula pattern (e.g., [=B−C] means the
                    value in that column is computed from columns B and C).
                  </p>
                  <SpreadsheetWrapper
                    initialData={sheet1}
                    columnLabels={["A", "B", "C", "D", "E", "F"]}
                    readOnly={true}
                  />
                </TabsContent>

                <TabsContent value="sheet2" className="mt-4 overflow-x-auto">
                  <SpreadsheetWrapper
                    initialData={sheet2}
                    columnLabels={["A", "B", "C", "D", "E"]}
                    readOnly={true}
                  />
                </TabsContent>

                <TabsContent value="sheet3" className="mt-4 overflow-x-auto">
                  <SpreadsheetWrapper
                    initialData={sheet3}
                    columnLabels={["A", "B", "C", "D", "E", "F"]}
                    readOnly={true}
                  />
                </TabsContent>

                <TabsContent value="sheet4" className="mt-4 overflow-x-auto">
                  <SpreadsheetWrapper
                    initialData={sheet4}
                    columnLabels={["A", "B", "C"]}
                    readOnly={true}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* ── Build Sequence ─────────────────────────────────────────────── */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2 text-xl">
                <FileSpreadsheet className="w-6 h-6" />
                Build Sequence — What to Do in Excel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  sheet: "Sheet 1: Contribution Margin Sprint",
                  steps: [
                    "Set up three rows: $1,200, $1,350, and $1,500 price options.",
                    "Use =B2-C2 style formulas to compute CM ($) and CM ratio for each.",
                    "Highlight the option with the highest CM ratio using conditional formatting.",
                  ],
                },
                {
                  sheet: "Sheet 2: Break-Even Ladder",
                  steps: [
                    "Reference your fixed cost ($8,100) from a named cell or constant.",
                    "Use =CEILING(FixedCosts/CM, 1) to compute break-even for each option.",
                    "Sort or manually rank options from easiest to hardest break-even.",
                  ],
                },
                {
                  sheet: "Sheet 3: Capacity Reality Check",
                  steps: [
                    "Compare each break-even result to the 24-project capacity ceiling.",
                    'Use =IF(BreakEven<=24,"Yes","No") to label feasibility automatically.',
                    "Add projected monthly profit at full capacity: =(CM*24)-8100.",
                  ],
                },
                {
                  sheet: "Sheet 4: Target-Profit Reverse Solve",
                  steps: [
                    "Set target monthly profit to $12,000 in an input cell.",
                    "Solve A: =CEILING((FC+Target)/CM, 1) to find required units.",
                    "Solve B: =VC+(FC+Target)/Units to find required price at 24 projects.",
                    "Note which results are feasible at the 24-project ceiling.",
                  ],
                },
              ].map(({ sheet, steps }) => (
                <div key={sheet} className="bg-white p-4 rounded border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">{sheet}</h3>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                    {steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* ── Checkpoint Answers ─────────────────────────────────────────── */}
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Checkpoint Answers (Self-Verify)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {[
                  { label: "$1,200 Option", cm: "$320", be: "26 units", feasible: "No" },
                  { label: "$1,350 Option", cm: "$470", be: "18 units", feasible: "Yes" },
                  { label: "$1,500 Option", cm: "$620", be: "14 units", feasible: "Yes" },
                ].map(opt => (
                  <div key={opt.label} className="bg-white p-4 rounded border border-emerald-200">
                    <p className="font-semibold text-emerald-900 mb-1">{opt.label}</p>
                    <p className="text-emerald-800">CM = {opt.cm}</p>
                    <p className="text-emerald-800">Break-even = {opt.be}</p>
                    <p className="text-emerald-800">Feasible at 24? {opt.feasible}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ── Memo Deliverable + Rubric ──────────────────────────────────── */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <ClipboardList className="w-5 h-5" />
                Deliverable: 1-Page Recommendation Memo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-amber-900 text-sm">
              <p>Write a one-page memo to a potential investor. Include these four sections:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Recommended price option and one-sentence rationale.</li>
                <li>Break-even units and capacity feasibility evidence.</li>
                <li>Target-profit reverse-solve result (required units or price).</li>
                <li>Investor-facing risk note: what could still go wrong?</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-violet-200 bg-violet-50">
            <CardHeader>
              <CardTitle className="text-violet-800 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Memo Rubric
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-violet-100 text-violet-900">
                      <th className="text-left p-3 border border-violet-200">Section</th>
                      <th className="p-3 border border-violet-200">Emerging</th>
                      <th className="p-3 border border-violet-200">Proficient</th>
                      <th className="p-3 border border-violet-200">Advanced</th>
                    </tr>
                  </thead>
                  <tbody className="text-violet-800">
                    {[
                      {
                        section: "Price Recommendation",
                        emerging: "States a price with no reasoning.",
                        proficient: "Ties recommendation to CM or break-even evidence.",
                        advanced: "Compares all three options and defends one using both margin and feasibility.",
                      },
                      {
                        section: "Break-Even Evidence",
                        emerging: "Lists break-even numbers only.",
                        proficient: "States which options are feasible vs. not and why.",
                        advanced: "Quantifies the safety cushion (capacity minus break-even) for the chosen option.",
                      },
                      {
                        section: "Reverse-Solve Result",
                        emerging: "Shows a number without interpretation.",
                        proficient: "Explains whether the required units/price is realistic.",
                        advanced: "Connects the reverse-solve result to a specific business action Sarah could take.",
                      },
                      {
                        section: "Risk Note",
                        emerging: "Identifies a generic risk.",
                        proficient: "Links the risk to a specific CVP variable (price, volume, or cost).",
                        advanced: "Proposes a measurable mitigation tied to the chosen strategy.",
                      },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-violet-50/50" : ""}>
                        <td className="p-3 border border-violet-200 font-medium">{row.section}</td>
                        <td className="p-3 border border-violet-200">{row.emerging}</td>
                        <td className="p-3 border border-violet-200">{row.proficient}</td>
                        <td className="p-3 border border-violet-200">{row.advanced}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* ── Preview ────────────────────────────────────────────────────── */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Coming Up: Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Phase 5 checks whether you can defend pricing decisions using contribution margin,
                break-even rankings, feasibility constraints, and reverse-solving logic — the same
                questions an investor would ask.
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
