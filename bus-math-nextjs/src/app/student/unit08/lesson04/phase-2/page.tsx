'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, BarChart3 } from "lucide-react";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";
import { withBasePath } from "@/lib/paths";
import Image from "next/image";

const phase2 = lesson04Phases.find(p => p.sequence === 2)!;

const fillInBlankSentences = [
  {
    id: "ddb-1",
    text: "The DDB rate is {blank} times the straight-line rate",
    answer: "two",
    hint: "This is why it is called 'double'-declining balance",
    category: "DDB Rate"
  },
  {
    id: "ddb-2",
    text: "Under DDB, you apply the rate to the beginning {blank} value, not the depreciable base",
    answer: "book",
    hint: "This is the asset's current value on the balance sheet",
    category: "DDB Calculation"
  },
  {
    id: "ddb-3",
    text: "DDB depreciation expense is {blank} in early years compared to straight-line",
    answer: "higher",
    hint: "This is why it is called 'accelerated' depreciation",
    category: "Method Comparison"
  },
  {
    id: "ddb-4",
    text: "Book value can never fall below {blank} value under any depreciation method",
    answer: "salvage",
    hint: "This is the estimated resale value at the end of the asset's life",
    category: "Salvage Floor"
  },
  {
    id: "ddb-5",
    text: "DDB does not subtract salvage value when calculating the annual {blank}",
    answer: "expense",
    hint: "Unlike straight-line, the floor is only checked at the end",
    category: "DDB Rule"
  },
  {
    id: "ddb-6",
    text: "A business that wants lower reported profit in early years might choose {blank} depreciation",
    answer: "accelerated",
    hint: "This method records more expense upfront",
    category: "Business Choice"
  }
];

export default function Phase2Page() {
  const cost = 30000;
  const salvage = 5000;
  const life = 5;
  const slRate = 1 / life;
  const ddbRate = 2 * slRate;

  const ddbSchedule: { year: number; beginBV: number; expense: number; accumulated: number; endBV: number }[] = [];
  let bv = cost;
  let accum = 0;
  for (let year = 1; year <= life; year++) {
    let expense = Math.round(bv * ddbRate);
    if (bv - expense < salvage) {
      expense = Math.max(0, Math.round(bv - salvage));
    }
    accum += expense;
    bv -= expense;
    ddbSchedule.push({ year, beginBV: cost - (accum - expense), expense, accumulated: accum, endBV: bv });
  }

  const slExpense = Math.round((cost - salvage) / life);
  const slSchedule = Array.from({ length: life }, (_, i) => ({
    year: i + 1,
    expense: slExpense,
    accumulated: slExpense * (i + 1),
    endBV: cost - slExpense * (i + 1),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson04Data}
          unit={unit08Data}
          phase={phase2}
          phases={lesson04Phases}
        />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Double-Declining Balance Method</h2>

            <p className="text-lg leading-relaxed">
              Sarah's accountant shows her how DDB works. The key difference from straight-line: 
              instead of dividing the depreciable base by years, you apply a <strong>double rate</strong> 
              to the asset's <strong>current book value</strong> each year.
            </p>

            <Card className="border-purple-200 bg-purple-50 my-6">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  The DDB Formula
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <p className="text-xl font-bold text-purple-800">
                    DDB Rate = 2 × (1 ÷ Useful Life)
                  </p>
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <p className="text-lg text-gray-800">
                      For a 5-year asset: DDB Rate = 2 × (1 ÷ 5) = 2 × 0.20 = <strong>40%</strong>
                    </p>
                    <p className="text-lg text-gray-800 mt-2">
                      Year 1 Expense = $30,000 × 40% = <strong>$12,000</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Step-by-Step Breakdown</h3>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 text-white shrink-0 mt-1">Step 1</Badge>
                  <div>
                    <p className="font-semibold text-gray-900">Find the DDB rate</p>
                    <p className="text-gray-700">
                      Double the straight-line rate. For a 5-year asset: 2 × (1/5) = 40%.
                    </p>
                    <p className="font-mono text-purple-700 mt-1">
                      DDB Rate = 2 × 20% = 40%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 text-white shrink-0 mt-1">Step 2</Badge>
                  <div>
                    <p className="font-semibold text-gray-900">Multiply rate by beginning book value</p>
                    <p className="text-gray-700">
                      Unlike straight-line, you do NOT subtract salvage value first. Apply the rate 
                      directly to the book value at the start of each year.
                    </p>
                    <p className="font-mono text-purple-700 mt-1">
                      Year 1: $30,000 × 40% = $12,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 text-white shrink-0 mt-1">Step 3</Badge>
                  <div>
                    <p className="font-semibold text-gray-900">Check the salvage value floor</p>
                    <p className="text-gray-700">
                      If the calculated expense would push book value below salvage value, reduce the 
                      expense so book value equals salvage value exactly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-purple-200 bg-white my-8 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-purple-900">Visual Model: How DDB Front-Loads Depreciation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  This infographic uses a different asset and different numbers, but it shows the same method shape
                  you are learning here: bigger depreciation in early years, smaller depreciation later, and a hard
                  stop at salvage value.
                </p>
                <figure className="overflow-hidden rounded-xl border border-purple-200 bg-slate-50 shadow-sm">
                  <Image
                    src={withBasePath("/images/depreciation-double-declining-balance.png")}
                    alt="Double-declining balance depreciation infographic showing higher early-year depreciation, falling book value, and the salvage-value floor."
                    width={1600}
                    height={1200}
                    className="h-auto w-full"
                  />
                  <figcaption className="px-4 py-3 text-sm text-purple-900">
                    Use this to check the pattern: DDB applies a constant rate to a shrinking book value, so the dollar expense starts high and then tapers.
                  </figcaption>
                </figure>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">DDB vs Straight-Line: Side by Side</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Year</th>
                    <th className="border border-gray-300 p-2">DDB Expense</th>
                    <th className="border border-gray-300 p-2">DDB Book Value</th>
                    <th className="border border-gray-300 p-2">SL Expense</th>
                    <th className="border border-gray-300 p-2">SL Book Value</th>
                    <th className="border border-gray-300 p-2">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {ddbSchedule.map((row, i) => (
                    <tr key={row.year}>
                      <td className="border border-gray-300 p-2 font-medium">Year {row.year}</td>
                      <td className="border border-gray-300 p-2 text-right font-bold text-purple-700">${row.expense.toLocaleString()}</td>
                      <td className="border border-gray-300 p-2 text-right">${row.endBV.toLocaleString()}</td>
                      <td className="border border-gray-300 p-2 text-right text-blue-700">${slSchedule[i].expense.toLocaleString()}</td>
                      <td className="border border-gray-300 p-2 text-right text-blue-700">${slSchedule[i].endBV.toLocaleString()}</td>
                      <td className="border border-gray-300 p-2 text-right text-orange-700">
                        {row.expense > slSchedule[i].expense ? '+' : ''}${(row.expense - slSchedule[i].expense).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Notice: DDB records $12,000 in Year 1 vs straight-line's $5,000. That is $7,000 more 
              expense — and $7,000 less reported profit — in the first year alone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Why Choose DDB?</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 flex items-center gap-2 text-base">
                    <FileText className="h-4 w-4" />
                    Tax Advantage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-800">
                    Higher early-year expenses mean lower reported profit, which means lower taxes 
                    in the early years. This keeps more cash in the business when it is growing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                    <BarChart3 className="h-4 w-4" />
                    Realistic Matching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800">
                    Vehicles, computers, and equipment lose more value early. DDB matches the 
                    expense pattern to the actual economic loss.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-amber-800 m-0">
                <strong>Critical rule:</strong> Under DDB, you do NOT subtract salvage value before 
                calculating the expense. The salvage value only acts as a floor — book value can 
                never go below it.
              </p>
            </div>
          </div>

          <FillInTheBlank
            sentences={fillInBlankSentences}
            title="DDB Vocabulary Check"
            description="Complete these key terms about double-declining balance depreciation"
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </div>

        <PhaseFooter
          lesson={lesson04Data}
          unit={unit08Data}
          phase={phase2}
          phases={lesson04Phases}
        />
      </div>
    </div>
  );
}
