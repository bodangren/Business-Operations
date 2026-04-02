'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Download, CheckCircle2, AlertTriangle } from "lucide-react";
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[3];

// Reference layout: Comparison sheet
const comparisonSheetData: SpreadsheetData = [
  [
    { value: "", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "A", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "B", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "C", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "D", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "E", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "F", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "G", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "H", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "I", readOnly: true, className: "bg-slate-100 font-bold" },
  ],
  [
    { value: "Method Comparison", readOnly: true, className: "bg-blue-100 font-bold text-blue-900" },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
  ],
  [
    { value: "Row", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Asset", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Cost", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Life", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Salvage", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "SL Yr1 Exp", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "DDB Yr1 Exp", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "SL End BV", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "DDB End BV", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Check", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "3", readOnly: true, className: "bg-slate-50" },
    { value: "Delivery Van", readOnly: true },
    { value: 30000, readOnly: true },
    { value: 5, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 12000, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 5000, readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-50 text-green-700 font-semibold" },
  ],
  [
    { value: "4", readOnly: true, className: "bg-slate-50" },
    { value: "3D Printer", readOnly: true },
    { value: 15000, readOnly: true },
    { value: 4, readOnly: true },
    { value: 1500, readOnly: true },
    { value: 3375, readOnly: true },
    { value: 7500, readOnly: true },
    { value: 1500, readOnly: true },
    { value: 1500, readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-50 text-green-700 font-semibold" },
  ],
  [
    { value: "5", readOnly: true, className: "bg-slate-50" },
    { value: "Server Rack", readOnly: true },
    { value: 8000, readOnly: true },
    { value: 3, readOnly: true },
    { value: 800, readOnly: true },
    { value: 2400, readOnly: true },
    { value: 5333, readOnly: true },
    { value: 800, readOnly: true },
    { value: 800, readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-50 text-green-700 font-semibold" },
  ],
];

// Reference layout: Statement Impact Summary
const statementImpactData: SpreadsheetData = [
  [
    { value: "", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "A", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "B", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "C", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "D", readOnly: true, className: "bg-slate-100 font-bold" },
  ],
  [
    { value: "Statement Impact Summary", readOnly: true, className: "bg-emerald-100 font-bold text-emerald-900" },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
  ],
  [
    { value: "Row", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Metric", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Straight-Line", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Double-Declining", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Difference", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "3", readOnly: true, className: "bg-slate-50" },
    { value: "Year 1 Depreciation Expense", readOnly: true },
    { value: 10775, readOnly: true },
    { value: 24833, readOnly: true },
    { value: 14058, readOnly: true },
  ],
  [
    { value: "4", readOnly: true, className: "bg-slate-50" },
    { value: "Year 1 Net Income Impact", readOnly: true },
    { value: -10775, readOnly: true },
    { value: -24833, readOnly: true },
    { value: -14058, readOnly: true },
  ],
  [
    { value: "5", readOnly: true, className: "bg-slate-50" },
    { value: "Year 1 Book Value (Total)", readOnly: true },
    { value: 40425, readOnly: true },
    { value: 26342, readOnly: true },
    { value: -14083, readOnly: true },
  ],
  [
    { value: "6", readOnly: true, className: "bg-slate-50" },
    { value: "Total Depreciation (All Years)", readOnly: true },
    { value: 40200, readOnly: true },
    { value: 40200, readOnly: true },
    { value: 0, readOnly: true },
  ],
];

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🔨 Phase 4: Workbook Sprint
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-800 flex items-center gap-2">
                    <Target className="h-6 w-6" /> Build the Method Comparison Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800">
                    Open your Lesson 05 asset register workbook. Today you will add a <strong>Method Comparison</strong> sheet 
                    and a <strong>Statement Impact</strong> summary. By the end of class, your workbook should show SL and DDB 
                    side by side with verification checks.
                  </p>
                  <div className="my-4">
                    <a className="inline-flex items-center gap-2 text-blue-700 underline" href="/resources/unit08-lesson06-student.xlsx" download>
                      <Download className="h-4 w-4" /> unit08-lesson06-student.xlsx
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      If you do not have your Lesson 05 workbook, use this starter file which includes the asset register.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Build Block 1: Comparison Sheet */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-lg">Build Block 1: Method Comparison Sheet</CardTitle>
                  <CardDescription>Add a new sheet called &quot;Method Comparison&quot; with one row per asset from your register.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SpreadsheetWrapper
                    initialData={comparisonSheetData}
                    readOnly={true}
                    columnLabels={["", "A", "B", "C", "D", "E", "F", "G", "H", "I"]}
                  />
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Formula Guide</h4>
                    <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                      <li><strong>SL Yr1 Exp:</strong> <code>=(Cost − Salvage) / Life</code> — link from register columns</li>
                      <li><strong>DDB Yr1 Exp:</strong> <code>=Cost × (2 / Life)</code> — DDB uses full cost, not depreciable base</li>
                      <li><strong>SL End BV:</strong> Should equal <code>Salvage</code> — both methods end at the same value</li>
                      <li><strong>DDB End BV:</strong> Should equal <code>Salvage</code> — verify with your full DDB schedule</li>
                      <li><strong>Check:</strong> <code>=IF(DDB_End_BV = Salvage, &quot;OK&quot;, &quot;ERROR&quot;)</code></li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200 text-sm">
                    <strong className="text-green-900 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Verification Checkpoint 1:</strong>
                    <span className="text-green-800"> All three assets show &quot;OK&quot; in the Check column. Both methods end at the same salvage value.</span>
                  </div>
                </CardContent>
              </Card>

              {/* Build Block 2: DDB Full Schedule */}
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-indigo-900 text-lg">Build Block 2: DDB Full Schedule with Salvage Floor</CardTitle>
                  <CardDescription>Below the comparison table, build the full DDB schedule for one asset to verify the salvage floor works.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-900 mb-2">DDB Schedule Formula Pattern</h4>
                    <ul className="list-disc list-inside text-indigo-800 text-sm space-y-1">
                      <li><strong>Year 1 Expense:</strong> <code>=Cost × (2 / Life)</code></li>
                      <li><strong>Year 2+ Expense:</strong> <code>=MIN(Prior_BookValue × (2 / Life), Prior_BookValue − Salvage)</code></li>
                      <li><strong>Accumulated Depreciation:</strong> <code>=Prior_AccumDep + Current_Expense</code></li>
                      <li><strong>Book Value:</strong> <code>=Cost − AccumDep</code></li>
                      <li><strong>Check:</strong> <code>=IF(BookValue = Cost − AccumDep, &quot;OK&quot;, &quot;ERROR&quot;)</code></li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-3 rounded border border-amber-200 text-sm">
                    <strong className="text-amber-900 flex items-center gap-1"><AlertTriangle className="h-4 w-4" /> Critical:</strong>
                    <span className="text-amber-800"> The MIN formula enforces the salvage value floor. Without it, DDB can drive book value below salvage.</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200 text-sm">
                    <strong className="text-green-900 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Verification Checkpoint 2:</strong>
                    <span className="text-green-800"> The final year&apos;s book value equals the salvage value exactly. The check column reads &quot;OK&quot;.</span>
                  </div>
                </CardContent>
              </Card>

              {/* Build Block 3: Statement Impact Summary */}
              <Card className="border-emerald-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-lg">Build Block 3: Statement Impact Summary</CardTitle>
                  <CardDescription>Add a summary section that shows how method choice affects financial statements.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SpreadsheetWrapper
                    initialData={statementImpactData}
                    readOnly={true}
                    columnLabels={["", "A", "B", "C", "D"]}
                  />
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-900 mb-2">What This Shows</h4>
                    <ul className="list-disc list-inside text-emerald-800 text-sm space-y-1">
                      <li><strong>Year 1 expense difference:</strong> DDB expenses $14,058 more than SL in Year 1</li>
                      <li><strong>Net income impact:</strong> Higher DDB expense means lower reported profit in Year 1</li>
                      <li><strong>Book value difference:</strong> DDB shows lower asset values on the balance sheet early on</li>
                      <li><strong>Total depreciation:</strong> $0 difference — both methods depreciate the same total amount</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200 text-sm">
                    <strong className="text-green-900 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Verification Checkpoint 3:</strong>
                    <span className="text-green-800"> Total depreciation is the same for both methods. The Difference column reads 0 for the total row.</span>
                  </div>
                </CardContent>
              </Card>

              {/* Definition of Done */}
              <Card className="border-slate-200 bg-slate-50">
                <CardHeader>
                  <CardTitle className="text-slate-900 text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" /> Definition of Done
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-800 mb-3">Your workbook is complete when all of the following are true:</p>
                  <ul className="list-disc list-inside text-slate-800 space-y-1">
                    <li>Method Comparison sheet has one row per asset from the register</li>
                    <li>SL and DDB Year 1 expense are calculated correctly for each asset</li>
                    <li>DDB full schedule uses the salvage value floor (MIN formula)</li>
                    <li>Both methods end at the same salvage value for every asset</li>
                    <li>Check column verifies Book Value = Cost − Accumulated Depreciation</li>
                    <li>Statement Impact summary shows expense timing, net income, and book value differences</li>
                    <li>Total depreciation is the same for both methods</li>
                    <li>All formulas link to the register — no hard-coded numbers in the comparison sheet</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  );
}
