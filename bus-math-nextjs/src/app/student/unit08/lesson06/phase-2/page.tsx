'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, BookOpen, AlertTriangle } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[1];

const vocabSentences = [
  { id: "u08l06-v1", text: "The {blank} ensures DDB never drives book value below the salvage amount.", answer: "salvage value floor", alternativeAnswers: ["salvage floor", "salvage value check"], hint: "Critical DDB safeguard" },
  { id: "u08l06-v2", text: "A {blank} sheet shows SL and DDB results side by side for each asset.", answer: "comparison", alternativeAnswers: ["method comparison", "comparison sheet"], hint: "The new sheet you will build" },
  { id: "u08l06-v3", text: "Total depreciation over an asset's life always equals Cost minus {blank}.", answer: "Salvage Value", alternativeAnswers: ["salvage value", "salvage"], hint: "The ending book value target" },
  { id: "u08l06-v4", text: "The {blank} shows how depreciation expense reduces net income each year.", answer: "income statement", alternativeAnswers: ["income statement", "P&L", "profit and loss"], hint: "Where expense appears" },
  { id: "u08l06-v5", text: "Book value appears on the {blank} as Cost minus Accumulated Depreciation.", answer: "balance sheet", alternativeAnswers: ["balance sheet"], hint: "Where assets are reported" },
  { id: "u08l06-v6", text: "DDB Year 1 expense equals Book Value at start of year times {blank}.", answer: "2 divided by useful life", alternativeAnswers: ["2/life", "2 / useful life", "2/useful life", "double the straight-line rate"], hint: "The DDB rate formula" },
  { id: "u08l06-v7", text: "A workbook {blank} column flags when Book Value does not equal Cost minus Accumulated Depreciation.", answer: "check", alternativeAnswers: ["check", "verification", "audit check"], hint: "Trustworthiness feature" },
  { id: "u08l06-v8", text: "Front-loaded depreciation means {blank} expense is higher in early years.", answer: "DDB", alternativeAnswers: ["DDB", "double-declining balance", "accelerated"], hint: "The accelerated method" }
];

// Comparison sheet reference preview
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
  ],
  [
    { value: "Method Comparison", readOnly: true, className: "bg-indigo-100 font-bold text-indigo-900" },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
    { value: "", readOnly: true }, { value: "", readOnly: true },
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
  ],
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📘 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                    <BookOpen className="h-6 w-6" /> Anatomy of the Method Comparison Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-slate-800">
                    Your Lesson 05 asset register has one depreciation method per asset. Today you add a 
                    <strong> Comparison sheet</strong> that shows <strong>both straight-line and double-declining balance</strong> side by side 
                    for every asset. This lets you see the real business impact of your method choice.
                  </p>
                  <h3 className="text-lg font-semibold text-green-900 mt-6">The Comparison Sheet Layout</h3>
                  <p className="text-slate-800">
                    Each row represents one asset from your register. The columns show key numbers for both methods:
                    Year 1 expense, final-year book value, and total depreciation. Both methods must end at the same salvage value.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">Formula Patterns You Will Build</h3>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                      <li><strong>SL annual expense:</strong> <code>(Cost − Salvage) / Life</code> — same every year</li>
                      <li><strong>DDB rate:</strong> <code>2 / Life</code> — applied to book value at start of each year</li>
                      <li><strong>DDB expense:</strong> <code>MIN(BookValue × Rate, BookValue − Salvage)</code> — the MIN enforces the salvage floor</li>
                      <li><strong>Check column:</strong> <code>IF(BookValue = Cost − AccumDep, &quot;OK&quot;, &quot;ERROR&quot;)</code> — verifies the book value logic</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
                    <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" /> Common Failure Mode: Missing Salvage Floor
                    </h3>
                    <p className="text-amber-800">
                      The most common DDB error is forgetting to cap the final year&apos;s expense. Without the salvage floor, 
                      DDB can drive book value below salvage value. In Excel, use <code>MIN(BookValue × Rate, BookValue − Salvage)</code> 
                      so the last year&apos;s expense never pushes book value too low.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Reference Preview: Comparison Sheet */}
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-indigo-900 text-lg">Reference Preview: Method Comparison Sheet</CardTitle>
                  <CardDescription>This is what your completed comparison sheet should look like. Both methods end at the same salvage value.</CardDescription>
                </CardHeader>
                <CardContent>
                  <SpreadsheetWrapper
                    initialData={comparisonSheetData}
                    readOnly={true}
                    columnLabels={["", "A", "B", "C", "D", "E", "F", "G", "H"]}
                  />
                </CardContent>
              </Card>

              <FillInTheBlank
                sentences={vocabSentences}
                title="Method Comparison Vocabulary Warm‑Up"
                description="Fill each blank using depreciation and workbook terms you will use in today&apos;s build."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 text-base flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> Comparison Workbook Checklist (Preview)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-emerald-900 space-y-1">
                    <li>Comparison sheet has one row per asset from the register</li>
                    <li>SL and DDB Year 1 expense calculated correctly for each asset</li>
                    <li>DDB uses salvage value floor (MIN formula)</li>
                    <li>Both methods end at the same salvage value</li>
                    <li>Check column verifies Book Value = Cost − Accumulated Depreciation</li>
                    <li>Statement impact summary shows expense timing difference</li>
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
