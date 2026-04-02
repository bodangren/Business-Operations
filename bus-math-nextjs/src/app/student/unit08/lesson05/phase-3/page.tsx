'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import AssetRegisterSimulator from "@/components/business-simulations/AssetRegisterSimulator";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const phase3 = lesson05Phases.find(p => p.sequence === 3)!;

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson05Data} unit={unit08Data} phase={phase3} phases={lesson05Phases} />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <Card className="border-purple-200 bg-white shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-purple-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                  Safe Rehearsal: Depreciation Schedule Logic
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  Practice Before You Build
                </Badge>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  Before you open Excel, practice the depreciation schedule logic here. 
                  The simulator below lets you pick an asset from TechStart&apos;s register, 
                  predict its depreciation by hand, and then see the full schedule.
                </p>
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  This mirrors exactly what you will build in Phase 4. If you can predict the 
                  schedule correctly here, you know the logic is ready for Excel.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 not-prose">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    What You Are Practicing
                  </h3>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                    <li><strong>Depreciable base:</strong> Cost minus salvage value</li>
                    <li><strong>Annual expense (SL):</strong> Depreciable base divided by useful life</li>
                    <li><strong>Accumulated depreciation:</strong> Running total of annual expenses</li>
                    <li><strong>Book value:</strong> Cost minus accumulated depreciation</li>
                    <li><strong>Check:</strong> Does book value equal cost minus accumulated depreciation?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Simulator Component */}
            <AssetRegisterSimulator />

            {/* Bridge to Phase 4 */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Bridge to Phase 4: Build in Excel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 mb-2">
                  You have practiced the logic. Now you will build it for real.
                </p>
                <p className="text-green-800">
                  In Phase 4, open the <strong>Asset Register Starter Workbook</strong> and build both sheets: 
                  the asset register with all required fields, and the depreciation schedule with linked formulas. 
                  The layout will match the reference previews you saw in Phase 2.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <PhaseFooter lesson={lesson05Data} unit={unit08Data} phase={phase3} phases={lesson05Phases} />
      </div>
    </div>
  );
}
