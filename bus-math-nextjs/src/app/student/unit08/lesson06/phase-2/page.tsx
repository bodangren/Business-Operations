'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, BookOpen, Calculator } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[1];

const vocabSentences = [
  { id: "u08l06-v1", text: "The {blank} rule prorates annual depreciation for assets bought during the year.", answer: "partial-year", alternativeAnswers: ["partial year", "partial-year depreciation"], hint: "It uses months in service" },
  { id: "u08l06-v2", text: "The fraction {blank} tells Excel how much of the annual depreciation belongs in Year 1.", answer: "months in service divided by 12", alternativeAnswers: ["months/12", "months in service / 12"], hint: "A time-in-service fraction" },
  { id: "u08l06-v3", text: "The Excel function {blank} calculates straight-line depreciation per period.", answer: "SLN", alternativeAnswers: ["SLN()", "sln"], hint: "Straight-line function" },
  { id: "u08l06-v4", text: "The Excel function {blank} calculates double-declining balance depreciation for a period.", answer: "DDB", alternativeAnswers: ["DDB()", "ddb"], hint: "Accelerated method function" },
  { id: "u08l06-v5", text: "Depreciation expense reduces operating income on the {blank}.", answer: "income statement", alternativeAnswers: ["income statement", "P&L", "profit and loss"], hint: "Profit report" },
  { id: "u08l06-v6", text: "Accumulated depreciation reduces net book value on the {blank}.", answer: "balance sheet", alternativeAnswers: ["balance sheet"], hint: "Assets report" },
  { id: "u08l06-v7", text: "Net book value equals fixed asset cost minus {blank}.", answer: "accumulated depreciation", alternativeAnswers: ["accum depreciation", "accumulated dep"], hint: "Running total of depreciation" },
  { id: "u08l06-v8", text: "A recommendation should cite numbers from the workbook as {blank}.", answer: "evidence", alternativeAnswers: ["evidence", "support"], hint: "Proof for your claim" }
];

const partialYearPreview: SpreadsheetData = [
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
    { value: "Partial-Year Depreciation", readOnly: true, className: "bg-indigo-100 font-bold text-indigo-900" },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
    { value: "", readOnly: true }, { value: "", readOnly: true }, { value: "", readOnly: true },
  ],
  [
    { value: "Row", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Asset", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Months", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Cost", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Salvage", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "Life", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "SLN Yr1", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "DDB Yr1", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "SL End BV", readOnly: true, className: "bg-slate-50 font-semibold" },
    { value: "DDB End BV", readOnly: true, className: "bg-slate-50 font-semibold" },
  ],
  [
    { value: "3", readOnly: true, className: "bg-slate-50" },
    { value: "Delivery Van", readOnly: true },
    { value: 9, readOnly: true },
    { value: 30000, readOnly: true },
    { value: 5000, readOnly: true },
    { value: 5, readOnly: true },
    { value: 3750, readOnly: true },
    { value: 9000, readOnly: true },
    { value: 26250, readOnly: true },
    { value: 21000, readOnly: true },
  ],
  [
    { value: "4", readOnly: true, className: "bg-slate-50" },
    { value: "Laptop Set", readOnly: true },
    { value: 6, readOnly: true },
    { value: 12000, readOnly: true },
    { value: 2000, readOnly: true },
    { value: 4, readOnly: true },
    { value: 1250, readOnly: true },
    { value: 3000, readOnly: true },
    { value: 10750, readOnly: true },
    { value: 9000, readOnly: true },
  ],
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                    <BookOpen className="h-6 w-6" /> Anatomy of the Partial-Year Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-slate-800">
                    Lesson 6 starts with a fresh workbook. The asset register supplies cost, salvage value, useful life, purchase date, and months in service. The calculation sheets use <strong>SLN()</strong> and <strong>DDB()</strong>, then prorate Year 1 depreciation by <strong>months in service / 12</strong>.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Calculator className="h-4 w-4" /> Formula Patterns You Will Build
                    </h3>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                      <li><strong>Full-year SL:</strong> <code>=SLN(Cost, Salvage, Life)</code></li>
                      <li><strong>Full-year DDB:</strong> <code>=DDB(Cost, Salvage, Life, 1)</code></li>
                      <li><strong>Partial-year SL:</strong> <code>=SLN(Cost, Salvage, Life) * Months / 12</code></li>
                      <li><strong>Partial-year DDB:</strong> <code>=DDB(Cost, Salvage, Life, 1) * Months / 12</code></li>
                      <li><strong>Ending book value:</strong> <code>=Cost - Year1Depreciation</code></li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mt-4">
                    <h3 className="font-semibold text-emerald-900 mb-2">Statement Connection</h3>
                    <p className="text-emerald-800">
                      After the depreciation sheet works, the mini income statement pulls depreciation expense into operating income. The mini balance sheet pulls accumulated depreciation into net book value.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-indigo-900 text-lg">Reference Preview: Partial-Year Depreciation</CardTitle>
                  <CardDescription>These are example outputs. In the workbook, students build the formulas that produce them.</CardDescription>
                </CardHeader>
                <CardContent>
                  <SpreadsheetWrapper
                    initialData={partialYearPreview}
                    readOnly={true}
                    columnLabels={["", "A", "B", "C", "D", "E", "F", "G", "H", "I"]}
                  />
                </CardContent>
              </Card>

              <FillInTheBlank
                sentences={vocabSentences}
                title="Partial-Year and Statement Vocabulary Warm-Up"
                description="Fill each blank using the workbook terms you will use in today&apos;s build."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 text-base flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> Workbook Checklist Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-emerald-900 space-y-1">
                    <li>Asset register includes purchase date and months in service</li>
                    <li>SL calculations use <code>SLN()</code></li>
                    <li>DDB calculations use <code>DDB()</code></li>
                    <li>Year 1 depreciation is prorated by months in service</li>
                    <li>Mini income statement links to depreciation expense</li>
                    <li>Mini balance sheet links to accumulated depreciation and net book value</li>
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
