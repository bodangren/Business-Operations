'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Calculator, ArrowRight, Lightbulb } from "lucide-react";

const phase3 = lesson03Phases.find(p => p.sequence === 3)!;

export default function Phase3Page() {
  const cost1 = 30000;
  const salvage1 = 5000;
  const life1 = 5;
  const annual1 = (cost1 - salvage1) / life1;

  const cost2 = 12000;
  const salvage2 = 2000;
  const life2 = 4;
  const annual2 = (cost2 - salvage2) / life2;

  const monthsOwned = 9;
  const partialYearExpense = Math.round(annual1 * (monthsOwned / 12));

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase3}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complication: Partial-Year Depreciation</h2>

            <p className="text-lg leading-relaxed">
              So far, you have assumed TechStart bought the van on January 1 — the first day of the 
              fiscal year. But what if the van arrives on <strong>April 1</strong>? The company only 
              owned it for 9 months of Year 1. Should the full year's depreciation still apply?
            </p>

            <Card className="border-amber-200 bg-amber-50 my-6">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  The Partial-Year Rule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  Depreciation is recorded only for the months the asset is <strong>actually in service</strong>. 
                  If the van was used for 9 out of 12 months in Year 1, then Year 1 depreciation 
                  should be 9/12 of the full annual amount.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Worked Example: Van Purchased April 1</h3>

            <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg space-y-3">
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600 text-white shrink-0 mt-1">Step 1</Badge>
                <div>
                  <p className="font-semibold text-gray-900">Calculate the full annual expense</p>
                  <p className="font-mono text-indigo-700">
                    ($30,000 − $5,000) ÷ 5 = $5,000 per year
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600 text-white shrink-0 mt-1">Step 2</Badge>
                <div>
                  <p className="font-semibold text-gray-900">Count months in service</p>
                  <p className="text-gray-700">
                    April through December = 9 months
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600 text-white shrink-0 mt-1">Step 3</Badge>
                <div>
                  <p className="font-semibold text-gray-900">Prorate for the partial year</p>
                  <p className="font-mono text-indigo-700">
                    $5,000 × (9 ÷ 12) = $3,750
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Multiple Assets Scenario</h3>

            <p className="text-lg leading-relaxed">
              TechStart does not just own one van. By the end of Year 1, the company has purchased 
              two assets at different times. Let us trace both.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Asset</th>
                    <th className="border border-gray-300 p-3 text-right">Cost</th>
                    <th className="border border-gray-300 p-3 text-right">Salvage</th>
                    <th className="border border-gray-300 p-3 text-right">Life</th>
                    <th className="border border-gray-300 p-3 text-right">Purchase Date</th>
                    <th className="border border-gray-300 p-3 text-right">Year 1 Expense</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Delivery Van</td>
                    <td className="border border-gray-300 p-3 text-right">${cost1.toLocaleString()}</td>
                    <td className="border border-gray-300 p-3 text-right">${salvage1.toLocaleString()}</td>
                    <td className="border border-gray-300 p-3 text-right">{life1} yrs</td>
                    <td className="border border-gray-300 p-3 text-center">April 1</td>
                    <td className="border border-gray-300 p-3 text-right font-bold text-indigo-700">${partialYearExpense.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Laptops</td>
                    <td className="border border-gray-300 p-3 text-right">${cost2.toLocaleString()}</td>
                    <td className="border border-gray-300 p-3 text-right">${salvage2.toLocaleString()}</td>
                    <td className="border border-gray-300 p-3 text-right">{life2} yrs</td>
                    <td className="border border-gray-300 p-3 text-center">July 1</td>
                    <td className="border border-gray-300 p-3 text-right font-bold text-indigo-700">${Math.round(annual2 * (6 / 12)).toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Van: $5,000 × 9/12 = $3,750. Laptops: $2,500 × 6/12 = $1,500. Total Year 1 depreciation = $5,250.
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
                  Why does the purchase date matter for depreciation but not for the asset's cost?
                </p>
                <p className="text-orange-700 text-sm">
                  The <strong>cost</strong> is recorded in full on the day of purchase — the company 
                  spent $30,000 regardless of the month. But <strong>depreciation</strong> measures 
                  how much of the asset's value was consumed during the accounting period. If the 
                  asset was only in service for part of the year, it only contributed part of a year's 
                  worth of value.
                </p>
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-800 m-0">
                <strong>Key insight:</strong> In real business, assets are purchased throughout the 
                year. Partial-year depreciation is the norm, not the exception. Always check the 
                purchase date before recording depreciation.
              </p>
            </div>
          </div>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Practice: Explain Your Reasoning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded border border-purple-200">
                <p className="font-medium text-purple-900 mb-2">
                  Scenario: TechStart buys a $15,000 packaging machine on October 1. It has a 5-year 
                  life and $3,000 salvage value. What is the Year 1 depreciation expense?
                </p>
                <div className="space-y-2 text-sm text-purple-700">
                  <p><strong>Step 1:</strong> Depreciable base = $15,000 − $3,000 = $12,000</p>
                  <p><strong>Step 2:</strong> Full annual expense = $12,000 ÷ 5 = $2,400</p>
                  <p><strong>Step 3:</strong> Months in service = October, November, December = 3 months</p>
                  <p><strong>Step 4:</strong> Year 1 expense = $2,400 × (3/12) = $600</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-purple-200">
                <p className="font-medium text-purple-900 mb-2">
                  Why does the book value at the end of Year 1 equal $14,400?
                </p>
                <p className="text-sm text-purple-700">
                  Book Value = Cost − Accumulated Depreciation = $15,000 − $600 = $14,400. 
                  Only one partial year of depreciation has been recorded so far.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase3}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
