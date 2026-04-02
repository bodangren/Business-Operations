'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Lightbulb, Calculator } from "lucide-react";

const phase3 = lesson04Phases.find(p => p.sequence === 3)!;

export default function Phase3Page() {
  const cost = 30000;
  const salvage = 5000;
  const life = 5;
  const ddbRate = 2 / life;

  const ddbSchedule: { year: number; beginBV: number; rawExpense: number; adjustedExpense: number; endBV: number; note: string }[] = [];
  let bv = cost;
  for (let year = 1; year <= life; year++) {
    const rawExpense = Math.round(bv * ddbRate);
    let adjustedExpense = rawExpense;
    let note = '';
    if (bv - rawExpense < salvage) {
      adjustedExpense = Math.max(0, Math.round(bv - salvage));
      note = 'Adjusted to salvage floor';
    }
    bv -= adjustedExpense;
    ddbSchedule.push({ year, beginBV: cost - ddbSchedule.reduce((s, r) => s + r.adjustedExpense, 0), rawExpense, adjustedExpense, endBV: bv, note });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson04Data} unit={unit08Data} phase={phase3} phases={lesson04Phases} />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complication: The Salvage Value Floor</h2>

            <p className="text-lg leading-relaxed">
              There is one critical rule in DDB that students often miss: <strong>book value can never 
              fall below salvage value</strong>. This means that in the later years of an asset's life, 
              the DDB calculation may produce an expense that is too large. When that happens, you must 
              adjust the expense downward.
            </p>

            <Card className="border-amber-200 bg-amber-50 my-6">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  The Salvage Floor Rule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  If the calculated DDB expense would push book value below the salvage value, 
                  replace the calculated expense with the amount that brings book value exactly 
                  to the salvage value. In the final year, the expense is often a "plug" figure.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Worked Example: When the Floor Kicks In</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Year</th>
                    <th className="border border-gray-300 p-2 text-right">Begin BV</th>
                    <th className="border border-gray-300 p-2 text-right">Raw DDB (40%)</th>
                    <th className="border border-gray-300 p-2 text-right">Adjusted Expense</th>
                    <th className="border border-gray-300 p-2 text-right">End BV</th>
                    <th className="border border-gray-300 p-2">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Year 1</td>
                    <td className="border border-gray-300 p-2 text-right">$30,000</td>
                    <td className="border border-gray-300 p-2 text-right">$12,000</td>
                    <td className="border border-gray-300 p-2 text-right font-bold">$12,000</td>
                    <td className="border border-gray-300 p-2 text-right">$18,000</td>
                    <td className="border border-gray-300 p-2">Normal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Year 2</td>
                    <td className="border border-gray-300 p-2 text-right">$18,000</td>
                    <td className="border border-gray-300 p-2 text-right">$7,200</td>
                    <td className="border border-gray-300 p-2 text-right font-bold">$7,200</td>
                    <td className="border border-gray-300 p-2 text-right">$10,800</td>
                    <td className="border border-gray-300 p-2">Normal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Year 3</td>
                    <td className="border border-gray-300 p-2 text-right">$10,800</td>
                    <td className="border border-gray-300 p-2 text-right">$4,320</td>
                    <td className="border border-gray-300 p-2 text-right font-bold">$4,320</td>
                    <td className="border border-gray-300 p-2 text-right">$6,480</td>
                    <td className="border border-gray-300 p-2">Normal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Year 4</td>
                    <td className="border border-gray-300 p-2 text-right">$6,480</td>
                    <td className="border border-gray-300 p-2 text-right">$2,592</td>
                    <td className="border border-gray-300 p-2 text-right font-bold text-red-700">$1,480</td>
                    <td className="border border-gray-300 p-2 text-right">$5,000</td>
                    <td className="border border-gray-300 p-2 text-red-700 font-medium">Floor hit!</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-2 font-medium">Year 5</td>
                    <td className="border border-gray-300 p-2 text-right">$5,000</td>
                    <td className="border border-gray-300 p-2 text-right">$2,000</td>
                    <td className="border border-gray-300 p-2 text-right font-bold">$0</td>
                    <td className="border border-gray-300 p-2 text-right">$5,000</td>
                    <td className="border border-gray-300 p-2">Already at salvage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              In Year 4, raw DDB would be $2,592, which would push book value to $3,888 — below the 
              $5,000 salvage value. So the expense is capped at $1,480 ($6,480 − $5,000). Year 5 has 
              zero expense because the asset is already at salvage value.
            </p>

            <Card className="border-orange-200 bg-orange-50 my-6">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Think About It
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-orange-800">
                  Why does the salvage value floor exist? What would happen to the financial 
                  statements if book value fell below salvage value?
                </p>
                <p className="text-orange-700 text-sm">
                  The salvage value represents what the company expects to recover when it sells 
                  the asset. If book value fell below that amount, the company would be recording 
                  more expense than the asset actually lost in value — which would understate profit 
                  and mislead investors.
                </p>
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-800 m-0">
                <strong>Key insight:</strong> The salvage value floor is the most common DDB mistake 
                on exams and in practice. Always check: would this year's expense push book value 
                below salvage? If yes, adjust.
              </p>
            </div>
          </div>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Practice: Explain the Floor Adjustment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded border border-purple-200">
                <p className="font-medium text-purple-900 mb-2">
                  Scenario: A $20,000 machine with 4-year life and $2,000 salvage value. DDB rate = 50%.
                </p>
                <div className="space-y-2 text-sm text-purple-700">
                  <p><strong>Year 1:</strong> $20,000 × 50% = $10,000. BV = $10,000. Normal.</p>
                  <p><strong>Year 2:</strong> $10,000 × 50% = $5,000. BV = $5,000. Normal.</p>
                  <p><strong>Year 3:</strong> $5,000 × 50% = $2,500. But $5,000 − $2,500 = $2,500, which is above $2,000 salvage. So $2,500 is fine. BV = $2,500.</p>
                  <p><strong>Year 4:</strong> $2,500 × 50% = $1,250. But $2,500 − $1,250 = $1,250, which is BELOW $2,000 salvage. Expense is capped at $500. BV = $2,000.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter lesson={lesson04Data} unit={unit08Data} phase={phase3} phases={lesson04Phases} />
      </div>
    </div>
  );
}
