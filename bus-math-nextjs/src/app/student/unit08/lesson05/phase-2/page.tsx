'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, AlertCircle } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const phase2 = lesson05Phases.find(p => p.sequence === 2)!;

const vocabSentences = [
  {
    id: "v1",
    text: "The {blank} is the single source of truth for every asset: ID, description, cost, useful life, salvage value, method, and purchase date.",
    answer: "asset register",
    hint: "This sheet lists every long-term asset the company owns.",
  },
  {
    id: "v2",
    text: "The {blank} calculates annual depreciation expense, accumulated depreciation, and book value year by year.",
    answer: "depreciation schedule",
    hint: "This sheet shows how each asset loses value over time.",
  },
  {
    id: "v3",
    text: "Book Value = Cost minus {blank} {blank}.",
    answer: "accumulated depreciation",
    hint: "This is the total depreciation taken since the asset was purchased.",
  },
  {
    id: "v4",
    text: "Using {blank} between sheets means changing cost in the register automatically updates the schedule.",
    answer: "formula linking",
    alternativeAnswers: ["cell references", "linked formulas"],
    hint: "Formulas that pull values from one sheet to another.",
  },
  {
    id: "v5",
    text: "A common trap is {blank} the annual expense instead of calculating it with a formula.",
    answer: "hard-coding",
    alternativeAnswers: ["typing", "entering manually"],
    hint: "When you type a number directly instead of using a formula.",
  },
  {
    id: "v6",
    text: "A workbook {blank} checks that book value equals cost minus accumulated depreciation.",
    answer: "check",
    alternativeAnswers: ["validation", "error check"],
    hint: "A formula that flags when something is wrong.",
  },
];

// Asset Register reference preview
const assetRegisterData: SpreadsheetData = [
  [
    { value: "", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "A", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "B", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "C", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "D", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "E", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "F", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "G", readOnly: true, className: "bg-slate-100 font-bold" },
  ],
  [
    { value: "Asset Register", readOnly: true, className: "bg-blue-100 font-bold text-blue-900" },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
  ],
  [
    { value: "Row", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Asset ID", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Description", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Cost", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Useful Life", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Salvage Value", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Method", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Purchase Date", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "3", readOnly: true, className: "bg-slate-50" },
    { value: "A-001", readOnly: true },
    { value: "Delivery Van", readOnly: true },
    { value: 30000, readOnly: true },
    { value: 5, readOnly: true },
    { value: 5000, readOnly: true },
    { value: "SL", readOnly: true },
    { value: "1/15/2025", readOnly: true },
  ],
  [
    { value: "4", readOnly: true, className: "bg-slate-50" },
    { value: "A-002", readOnly: true },
    { value: "3D Printer", readOnly: true },
    { value: 15000, readOnly: true },
    { value: 4, readOnly: true },
    { value: 1500, readOnly: true },
    { value: "SL", readOnly: true },
    { value: "3/1/2025", readOnly: true },
  ],
  [
    { value: "5", readOnly: true, className: "bg-slate-50" },
    { value: "A-003", readOnly: true },
    { value: "Server Rack", readOnly: true },
    { value: 8000, readOnly: true },
    { value: 3, readOnly: true },
    { value: 800, readOnly: true },
    { value: "DDB", readOnly: true },
    { value: "6/1/2025", readOnly: true },
  ],
];

// Depreciation Schedule reference preview
const depreciationScheduleData: SpreadsheetData = [
  [
    { value: "", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "A", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "B", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "C", readOnly: true, className: "bg-slate-100 font-bold" },
    { value: "D", readOnly: true, className: "bg-slate-100 font-bold" },
  ],
  [
    { value: "Depreciation Schedule — A-001 Delivery Van", readOnly: true, className: "bg-green-100 font-bold text-green-900" },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
  ],
  [
    { value: "Year", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Annual Expense", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Accumulated Depreciation", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Book Value", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Check", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "Start", readOnly: true },
    { value: "—", readOnly: true },
    { value: "—", readOnly: true },
    { value: 30000, readOnly: true },
    { value: "OK", readOnly: true },
  ],
  [
    { value: 1, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 25000, readOnly: true },
    { value: "OK", readOnly: true },
  ],
  [
    { value: 2, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 10000, readOnly: true },
    { value: 20000, readOnly: true },
    { value: "OK", readOnly: true },
  ],
  [
    { value: 3, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 15000, readOnly: true },
    { value: 15000, readOnly: true },
    { value: "OK", readOnly: true },
  ],
  [
    { value: 4, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 20000, readOnly: true },
    { value: 10000, readOnly: true },
    { value: "OK", readOnly: true },
  ],
  [
    { value: 5, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 25000, readOnly: true },
    { value: 5000, readOnly: true },
    { value: "OK", readOnly: true },
  ],
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson05Data} unit={unit08Data} phase={phase2} phases={lesson05Phases} />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            {/* Tool Anatomy */}
            <Card className="border-green-200 bg-white shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                  Anatomy of the Asset Register Workbook
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  Two Sheets, One Source of Truth
                </Badge>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  The workbook has two main sheets that work together. The <strong>Asset Register</strong> lists every 
                  long-term asset with its key details. The <strong>Depreciation Schedule</strong> calculates how each 
                  asset loses value year by year.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-6">Sheet 1: Asset Register</h3>
                <p className="text-slate-700 mb-2">
                  Each row is one asset. The columns store everything needed to calculate depreciation:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4">
                  <li><strong>Asset ID</strong> — unique identifier (e.g., A-001)</li>
                  <li><strong>Description</strong> — what the asset is</li>
                  <li><strong>Cost</strong> — what you paid for it</li>
                  <li><strong>Useful Life</strong> — how many years it will last</li>
                  <li><strong>Salvage Value</strong> — what it will be worth at the end</li>
                  <li><strong>Method</strong> — SL (straight-line) or DDB (double-declining balance)</li>
                  <li><strong>Purchase Date</strong> — when you bought it</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-6">Sheet 2: Depreciation Schedule</h3>
                <p className="text-slate-700 mb-2">
                  Each row is one year of an asset&apos;s life. The columns calculate:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4">
                  <li><strong>Annual Expense</strong> — depreciation for that year</li>
                  <li><strong>Accumulated Depreciation</strong> — total depreciation taken so far</li>
                  <li><strong>Book Value</strong> — cost minus accumulated depreciation</li>
                  <li><strong>Check</strong> — verifies Book Value = Cost − Accumulated Depreciation</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 not-prose">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Formula Architecture
                  </h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p><strong>Depreciable Base (SL):</strong> <code className="bg-blue-100 px-1 rounded">=(Cost - SalvageValue) / UsefulLife</code></p>
                    <p><strong>Accumulated Depreciation (Year N):</strong> <code className="bg-blue-100 px-1 rounded">=PriorYearAccum + CurrentYearExpense</code></p>
                    <p><strong>Book Value:</strong> <code className="bg-blue-100 px-1 rounded">=Cost - AccumulatedDepreciation</code></p>
                    <p><strong>Check:</strong> <code className="bg-blue-100 px-1 rounded">=IF(BookValue = Cost - AccumDep, &quot;OK&quot;, &quot;ERROR&quot;)</code></p>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 not-prose mt-4">
                  <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Common Failure Mode: Hard-Coded Numbers
                  </h3>
                  <p className="text-amber-800 text-sm">
                    The most common error is typing the annual expense directly into the schedule instead of 
                    calculating it from the register. If cost changes, a hard-coded number does not update. 
                    Always use a formula that references the register&apos;s cost, life, and salvage value cells.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Asset Register Preview */}
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-slate-900">Reference: Asset Register Layout</CardTitle>
                <CardDescription>This is what your Asset Register sheet should look like when complete.</CardDescription>
              </CardHeader>
              <CardContent>
                <SpreadsheetWrapper
                  initialData={assetRegisterData}
                  readOnly={true}
                  columnLabels={["", "A", "B", "C", "D", "E", "F", "G"]}
                />
              </CardContent>
            </Card>

            {/* Depreciation Schedule Preview */}
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-slate-900">Reference: Depreciation Schedule Layout (A-001, SL)</CardTitle>
                <CardDescription>Annual expense is constant for straight-line. Book value reaches salvage value in the final year.</CardDescription>
              </CardHeader>
              <CardContent>
                <SpreadsheetWrapper
                  initialData={depreciationScheduleData}
                  readOnly={true}
                  columnLabels={["", "A", "B", "C", "D", "E"]}
                />
              </CardContent>
            </Card>

            {/* Vocabulary Check */}
            <FillInTheBlank
              sentences={vocabSentences}
              title="Key Vocabulary: Asset Register and Depreciation Schedule"
              description="Fill in the key concepts that make a professional asset tracking workbook."
              showWordList={true}
              randomizeWordOrder={true}
              showHints={true}
            />
          </div>
        </div>

        <PhaseFooter lesson={lesson05Data} unit={unit08Data} phase={phase2} phases={lesson05Phases} />
      </div>
    </div>
  );
}
