'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Download, CheckSquare, FileSpreadsheet } from "lucide-react";
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const phase4 = lesson05Phases.find(p => p.sequence === 4)!;

// Build verification checkpoint preview
const checkpointData: SpreadsheetData = [
  [
    { value: "Verification Checkpoint", readOnly: true, className: "bg-amber-100 font-bold text-amber-900" },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
  ],
  [
    { value: "Check", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Formula", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Expected Result", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Status", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "Book Value Check", readOnly: true },
    { value: " =Cost - AccumDep", readOnly: true },
    { value: "Matches register cost", readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-100 text-green-800" },
  ],
  [
    { value: "Final BV = Salvage", readOnly: true },
    { value: "Last year BV", readOnly: true },
    { value: "Equals salvage value", readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-100 text-green-800" },
  ],
  [
    { value: "AccumDep Sum", readOnly: true },
    { value: "Sum of annual expenses", readOnly: true },
    { value: "Equals final accum dep", readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-100 text-green-800" },
  ],
  [
    { value: "Total Depreciation", readOnly: true },
    { value: "Sum all assets", readOnly: true },
    { value: "Matches income statement", readOnly: true },
    { value: "OK", readOnly: true, className: "bg-green-100 text-green-800" },
  ],
];

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson05Data} unit={unit08Data} phase={phase4} phases={lesson05Phases} />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <Card className="border-orange-200 bg-white shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-orange-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                  Workbook Sprint: Build the Asset Register
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  Two Sheets, Linked by Formula
                </Badge>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  This is where you build the real artifact. Open the starter workbook and complete both sheets. 
                  Your finished workbook should auto-calculate depreciation for every asset and verify that 
                  book value is correct.
                </p>

                <div className="bg-gray-50 border rounded p-4 mb-4 not-prose">
                  <a href="/resources/unit08-asset-register-starter.xlsx" download className="inline-flex items-center gap-2 text-blue-700 hover:underline font-medium">
                    <Download className="w-4 h-4" />
                    Download: unit08-asset-register-starter.xlsx
                  </a>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mt-6">Build Sequence</h3>
                <ol className="list-decimal list-inside space-y-3 text-slate-700">
                  <li>
                    <strong>Open the starter workbook.</strong> It has two blank sheets named &ldquo;Asset Register&rdquo; and &ldquo;Depreciation Schedule.&rdquo;
                  </li>
                  <li>
                    <strong>Build the Asset Register sheet.</strong> Enter the column headers: Asset ID, Description, Cost, Useful Life, Salvage Value, Method, Purchase Date. Enter at least 3 assets (use the data from Phase 2 or your own).
                  </li>
                  <li>
                    <strong>Build the Depreciation Schedule for Asset A-001.</strong> Create rows for each year of the asset&apos;s life. Calculate annual expense using the straight-line formula: <code className="bg-slate-100 px-1 rounded">=(Cost - SalvageValue) / UsefulLife</code>. Reference the register cells by formula, not by typing numbers.
                  </li>
                  <li>
                    <strong>Calculate accumulated depreciation and book value.</strong> Year 1 accumulated = Year 1 expense. Year 2 accumulated = Year 1 accumulated + Year 2 expense. Book value = Cost − Accumulated Depreciation.
                  </li>
                  <li>
                    <strong>Add a verification check column.</strong> Use an IF formula: <code className="bg-slate-100 px-1 rounded">=IF(BookValue = Cost - AccumDep, &quot;OK&quot;, &quot;ERROR&quot;)</code>. Every row should show &ldquo;OK.&rdquo;
                  </li>
                  <li>
                    <strong>Verify the final year.</strong> The last year&apos;s book value should equal the salvage value. If not, check your formulas.
                  </li>
                </ol>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 not-prose mt-4">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5" />
                    Definition of Done
                  </h3>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                    <li>Asset Register sheet has at least 3 assets with all 7 required fields</li>
                    <li>Depreciation Schedule calculates annual expense by formula (not hard-coded)</li>
                    <li>Accumulated depreciation is a running total</li>
                    <li>Book value = Cost − Accumulated Depreciation for every row</li>
                    <li>Check column shows &ldquo;OK&rdquo; for every row</li>
                    <li>Final year book value equals salvage value</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Verification Checkpoint Preview */}
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-slate-900 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Verification Checkpoints
                </CardTitle>
                <CardDescription>After each build step, verify your workbook against these checks.</CardDescription>
              </CardHeader>
              <CardContent>
                <SpreadsheetWrapper
                  initialData={checkpointData}
                  readOnly={true}
                  columnLabels={["", "A", "B", "C", "D"]}
                />
              </CardContent>
            </Card>

            {/* Self-Assessment Checklist */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Self-Assessment: Workbook Complete?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="text-left space-y-2 text-blue-900 not-prose">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Asset Register has all 7 columns filled for every asset
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Depreciation Schedule annual expense uses a formula referencing the register
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Accumulated depreciation is a running total (not just current year)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Book value formula is Cost minus Accumulated Depreciation
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Check column shows &ldquo;OK&rdquo; for every row
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Final year book value equals the asset&apos;s salvage value
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    No hard-coded numbers in formula cells
                  </label>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <PhaseFooter lesson={lesson05Data} unit={unit08Data} phase={phase4} phases={lesson05Phases} />
      </div>
    </div>
  );
}
