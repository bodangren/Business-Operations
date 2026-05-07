'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Download, CheckCircle2 } from "lucide-react";
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[3];

const methodComparisonData: SpreadsheetData = [
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
    { value: "Months", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "SL Yr1 Dep", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "DDB Yr1 Dep", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Difference", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "SL End BV", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "DDB End BV", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "BV Difference", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Check", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "3", readOnly: true, className: "bg-slate-50" },
    { value: "Delivery Van", readOnly: true },
    { value: 9, readOnly: true },
    { value: 3750, readOnly: true },
    { value: 9000, readOnly: true },
    { value: 5250, readOnly: true },
    { value: 26250, readOnly: true },
    { value: 21000, readOnly: true },
    { value: -5250, readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-50 text-green-700 font-semibold" },
  ],
  [
    { value: "4", readOnly: true, className: "bg-slate-50" },
    { value: "Laptop Set", readOnly: true },
    { value: 6, readOnly: true },
    { value: 1250, readOnly: true },
    { value: 3000, readOnly: true },
    { value: 1750, readOnly: true },
    { value: 10750, readOnly: true },
    { value: 9000, readOnly: true },
    { value: -1750, readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-50 text-green-700 font-semibold" },
  ],
];

const incomeStatementData: SpreadsheetData = [
  [
    { value: "", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "A", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "B", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "C", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "D", readOnly: true, className: "bg-slate-100 font-bold" },
  ],
  [
    { value: "Mini Income Statement", readOnly: true, className: "bg-emerald-100 font-bold text-emerald-900" },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
  ],
  [
    { value: "Row", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Line Item", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Straight-Line", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "DDB", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Difference", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "3", readOnly: true, className: "bg-slate-50" },
    { value: "Revenue", readOnly: true },
    { value: 85000, readOnly: true },
    { value: 85000, readOnly: true },
    { value: 0, readOnly: true },
  ],
  [
    { value: "4", readOnly: true, className: "bg-slate-50" },
    { value: "Other Operating Expenses", readOnly: true },
    { value: 45000, readOnly: true },
    { value: 45000, readOnly: true },
    { value: 0, readOnly: true },
  ],
  [
    { value: "5", readOnly: true, className: "bg-slate-50" },
    { value: "Depreciation Expense", readOnly: true },
    { value: 5600, readOnly: true },
    { value: 13333, readOnly: true },
    { value: -7733, readOnly: true },
  ],
  [
    { value: "6", readOnly: true, className: "bg-slate-50" },
    { value: "Operating Income", readOnly: true },
    { value: 34400, readOnly: true },
    { value: 26667, readOnly: true },
    { value: -7733, readOnly: true },
  ],
];

const balanceSheetData: SpreadsheetData = [
  [
    { value: "", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "A", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "B", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "C", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "D", readOnly: true, className: "bg-slate-100 font-bold" },
  ],
  [
    { value: "Mini Balance Sheet", readOnly: true, className: "bg-cyan-100 font-bold text-cyan-900" },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
  ],
  [
    { value: "Row", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Line Item", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Straight-Line", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "DDB", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Difference", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "3", readOnly: true, className: "bg-slate-50" },
    { value: "Fixed Asset Cost", readOnly: true },
    { value: 50000, readOnly: true },
    { value: 50000, readOnly: true },
    { value: 0, readOnly: true },
  ],
  [
    { value: "4", readOnly: true, className: "bg-slate-50" },
    { value: "Less: Accumulated Depreciation", readOnly: true },
    { value: -5600, readOnly: true },
    { value: -13333, readOnly: true },
    { value: -7733, readOnly: true },
  ],
  [
    { value: "5", readOnly: true, className: "bg-slate-50" },
    { value: "Net Book Value", readOnly: true },
    { value: 44400, readOnly: true },
    { value: 36667, readOnly: true },
    { value: -7733, readOnly: true },
  ],
];

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase 4: Workbook Sprint
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-800 flex items-center gap-2">
                    <Target className="h-6 w-6" /> Build the Partial-Year Statement Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800">
                    Open the Lesson 06 starter workbook. This is a fresh workbook, not a continuation of Lesson 05. You will complete the asset register, calculate partial-year depreciation with <strong>SLN()</strong> and <strong>DDB()</strong>, compare the methods, and connect the results to mini financial statements.
                  </p>
                  <div className="my-4">
                    <a className="inline-flex items-center gap-2 text-blue-700 underline" href="/resources/unit08-lesson06-student.xlsx" download>
                      <Download className="h-4 w-4" /> unit08-lesson06-student.xlsx
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Use your assigned group template if your teacher provides group-specific files.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-lg">Build Block 1: Partial-Year Depreciation</CardTitle>
                  <CardDescription>One row per asset. Use built-in Excel functions, then prorate by months in service.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-left">
                    <h4 className="font-semibold text-blue-900 mb-2">Formula Guide</h4>
                    <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                      <li><strong>SL partial-year expense:</strong> <code>=SLN(Cost, Salvage, Life) * Months / 12</code></li>
                      <li><strong>DDB partial-year expense:</strong> <code>=DDB(Cost, Salvage, Life, 1) * Months / 12</code></li>
                      <li><strong>Ending book value:</strong> <code>=Cost - Year1Depreciation</code></li>
                      <li><strong>Check:</strong> <code>=IF(EndingBV = Cost - Depreciation, "OK", "ERROR")</code></li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200 text-sm text-left">
                    <strong className="text-green-900 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Verification Checkpoint 1:</strong>
                    <span className="text-green-800"> Every row uses months in service. No asset receives a full year of depreciation unless it was in service for 12 months.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-indigo-900 text-lg">Build Block 2: Method Comparison</CardTitle>
                  <CardDescription>Compare Year 1 expense and ending book value under SL and DDB.</CardDescription>
                </CardHeader>
                <CardContent>
                  <SpreadsheetWrapper
                    initialData={methodComparisonData}
                    readOnly={true}
                    columnLabels={["", "A", "B", "C", "D", "E", "F", "G", "H", "I"]}
                  />
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-lg">Build Block 3: Mini Income Statement</CardTitle>
                  <CardDescription>Show how depreciation method choice changes operating income.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SpreadsheetWrapper
                    initialData={incomeStatementData}
                    readOnly={true}
                    columnLabels={["", "A", "B", "C", "D"]}
                  />
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 text-left">
                    <p className="text-emerald-800 text-sm">
                      Operating income equals revenue minus other operating expenses minus depreciation expense. Higher Year 1 DDB expense lowers Year 1 operating income.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-cyan-900 text-lg">Build Block 4: Mini Balance Sheet</CardTitle>
                  <CardDescription>Show how accumulated depreciation changes net book value.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SpreadsheetWrapper
                    initialData={balanceSheetData}
                    readOnly={true}
                    columnLabels={["", "A", "B", "C", "D"]}
                  />
                  <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 text-left">
                    <p className="text-cyan-800 text-sm">
                      Net book value equals fixed asset cost minus accumulated depreciation. In Year 1, accumulated depreciation equals Year 1 depreciation for this mini statement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-50">
                <CardHeader>
                  <CardTitle className="text-slate-900 text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" /> Definition of Done
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-800 mb-3">Your workbook is complete when all of the following are true:</p>
                  <ul className="list-disc list-inside text-slate-800 space-y-1 text-left">
                    <li>Asset register includes purchase date and months in service</li>
                    <li>Partial-year depreciation uses <code>SLN()</code> and <code>DDB()</code></li>
                    <li>Year 1 depreciation is prorated by <code>Months / 12</code></li>
                    <li>Method Comparison sheet shows SL vs DDB Year 1 expense and ending book value</li>
                    <li>Mini Income Statement links depreciation expense to operating income</li>
                    <li>Mini Balance Sheet links accumulated depreciation to net book value</li>
                    <li>Recommendation evidence cites at least two workbook numbers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  );
}
