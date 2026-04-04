'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, BarChart3 } from "lucide-react";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";

const phase2 = lesson03Phases.find(p => p.sequence === 2)!;

const fillInBlankSentences = [
  {
    id: "sl-1",
    text: "The depreciable base equals Cost minus {blank}",
    answer: "Salvage Value",
    hint: "This is what the asset will be worth at the end of its life",
    category: "Depreciable Base"
  },
  {
    id: "sl-2",
    text: "Under straight-line, the annual depreciation expense is the {blank} every year",
    answer: "same",
    hint: "This method spreads cost evenly across all years",
    category: "Straight-Line Feature"
  },
  {
    id: "sl-3",
    text: "Accumulated depreciation is the total depreciation recorded from Year 1 through the {blank} year",
    answer: "current",
    hint: "It grows larger each year as more depreciation is recorded",
    category: "Accumulated Depreciation"
  },
  {
    id: "sl-4",
    text: "Book Value equals Cost minus {blank} Depreciation",
    answer: "Accumulated",
    hint: "This is the running total of all depreciation recorded so far",
    category: "Book Value Formula"
  },
  {
    id: "sl-5",
    text: "Depreciation Expense appears on the {blank} Statement",
    answer: "Income",
    hint: "This statement shows the company's profitability for a period",
    category: "Statement Impact"
  },
  {
    id: "sl-6",
    text: "Accumulated Depreciation appears on the {blank} Sheet as a contra-asset",
    answer: "Balance",
    hint: "This statement shows what the company owns and owes at a point in time",
    category: "Statement Impact"
  }
];

export default function Phase2Page() {
  const cost = 30000;
  const salvage = 5000;
  const life = 5;
  const depreciableBase = cost - salvage;
  const annualExpense = depreciableBase / life;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase2}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Straight-Line Method</h2>

            <p className="text-lg leading-relaxed">
              Sarah's accountant shows her the simplest way to spread the van's cost across its 
              5-year life. The method is called <strong>straight-line depreciation</strong> because 
              the expense is the same — a straight, flat line — every single year.
            </p>

            <Card className="border-blue-200 bg-blue-50 my-6">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  The Straight-Line Formula
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <p className="text-xl font-bold text-blue-800">
                    Annual Depreciation Expense = (Cost − Salvage Value) ÷ Useful Life
                  </p>
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <p className="text-lg text-gray-800">
                      = ($30,000 − $5,000) ÷ 5 years
                    </p>
                    <p className="text-lg text-gray-800">
                      = $25,000 ÷ 5
                    </p>
                    <p className="text-2xl font-bold text-blue-700">
                      = $5,000 per year
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Step-by-Step Breakdown</h3>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-600 text-white shrink-0 mt-1">Step 1</Badge>
                  <div>
                    <p className="font-semibold text-gray-900">Find the depreciable base</p>
                    <p className="text-gray-700">
                      Subtract the salvage value from the cost. This tells you how much total value 
                      the asset will lose over its life.
                    </p>
                    <p className="font-mono text-blue-700 mt-1">
                      $30,000 − $5,000 = $25,000 depreciable base
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-600 text-white shrink-0 mt-1">Step 2</Badge>
                  <div>
                    <p className="font-semibold text-gray-900">Divide by useful life</p>
                    <p className="text-gray-700">
                      Spread the depreciable base evenly across the number of years the asset will last.
                    </p>
                    <p className="font-mono text-blue-700 mt-1">
                      $25,000 ÷ 5 years = $5,000 per year
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-600 text-white shrink-0 mt-1">Step 3</Badge>
                  <div>
                    <p className="font-semibold text-gray-900">Track accumulated depreciation and book value</p>
                    <p className="text-gray-700">
                      Each year, add $5,000 to accumulated depreciation and subtract it from the cost 
                      to find the book value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Full Depreciation Schedule</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Year</th>
                    <th className="border border-gray-300 p-3 text-right">Annual Expense</th>
                    <th className="border border-gray-300 p-3 text-right">Accumulated Depreciation</th>
                    <th className="border border-gray-300 p-3 text-right">Book Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((year) => {
                    const accumulated = annualExpense * year;
                    const bookValue = cost - accumulated;
                    return (
                      <tr key={year} className={year === 5 ? "bg-green-50" : ""}>
                        <td className="border border-gray-300 p-3 font-medium">Year {year}</td>
                        <td className="border border-gray-300 p-3 text-right">${annualExpense.toLocaleString()}</td>
                        <td className="border border-gray-300 p-3 text-right">${accumulated.toLocaleString()}</td>
                        <td className="border border-gray-300 p-3 text-right">${bookValue.toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Notice: the annual expense stays at $5,000 every year. Accumulated depreciation grows by 
              $5,000 each year. Book value shrinks by $5,000 each year until it reaches the $5,000 
              salvage value in Year 5.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Statement Impact</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 flex items-center gap-2 text-base">
                    <FileText className="h-4 w-4" />
                    Income Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-800">
                    Each year, <strong>Depreciation Expense of $5,000</strong> reduces net income. 
                    This matches the cost of the van to the revenue it helps generate.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                    <BarChart3 className="h-4 w-4" />
                    Balance Sheet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800">
                    <strong>Accumulated Depreciation</strong> grows each year, reducing the van's 
                    book value. By Year 5, book value equals the $5,000 salvage value.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-amber-800 m-0">
                <strong>Remember:</strong> Book Value = Cost − Accumulated Depreciation. This formula 
                is the backbone of fixed-asset accounting and will appear throughout this unit.
              </p>
            </div>
          </div>

          <FillInTheBlank
            sentences={fillInBlankSentences}
            title="Straight-Line Vocabulary Check"
            description="Complete these key terms about straight-line depreciation"
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase2}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
