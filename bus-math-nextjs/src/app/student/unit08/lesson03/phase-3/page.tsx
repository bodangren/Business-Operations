'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import PartialYearDepreciationLab from "../PartialYearDepreciationLab";

const phase3 = lesson03Phases.find(p => p.sequence === 3)!;

export default function Phase3Page() {
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

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What Changes in This Phase</h3>

            <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg space-y-3">
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600 text-white shrink-0 mt-1">1</Badge>
                <p className="text-gray-800">Start with the normal straight-line annual expense.</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600 text-white shrink-0 mt-1">2</Badge>
                <p className="text-gray-800">Convert that full-year amount into a partial-year amount using months in service.</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600 text-white shrink-0 mt-1">3</Badge>
                <p className="text-gray-800">Update total depreciation and book value with the partial-year number, not the full-year one.</p>
              </div>
            </div>

            <Card className="border-indigo-200 bg-white my-6">
              <CardHeader>
                <CardTitle className="text-indigo-900 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Activity: Partial-Year Depreciation Lab
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Work through a two-asset Year 1 schedule. The representation stays stable while the support fades:
                  full-year amount first, proration second, final schedule check last.
                </p>
                <PartialYearDepreciationLab />
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
                  What signal tells you to switch from the normal straight-line schedule to a partial-year schedule?
                </p>
                <p className="text-sm text-purple-700">
                  The trigger is the <strong>in-service date</strong>. If the asset was not in service for the full accounting year,
                  the straight-line annual amount has to be prorated by the fraction of the year actually used.
                </p>
              </div>

              <div className="bg-white p-4 rounded border border-purple-200">
                <p className="font-medium text-purple-900 mb-2">
                  Why does the purchase date matter for depreciation but not for original cost?
                </p>
                <p className="text-sm text-purple-700">
                  The original cost is recorded in full when the asset is purchased. Depreciation, however, measures how much value
                  was used during the accounting period, so it depends on how many months the asset was actually in service.
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
