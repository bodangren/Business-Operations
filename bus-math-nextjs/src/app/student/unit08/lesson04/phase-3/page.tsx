'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Lightbulb } from "lucide-react";
import DDBSalvageFloorLab from "../DDBSalvageFloorLab";

const phase3 = lesson04Phases.find(p => p.sequence === 3)!;

export default function Phase3Page() {
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

            <Card className="border-orange-200 bg-white my-6">
              <CardHeader>
                <CardTitle className="text-orange-900">Activity: Salvage-Floor Guided Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Work through the DDB schedule in sequence. First handle the normal years, then catch the year where the
                  raw DDB amount would push book value below salvage value, and finally explain the business effect.
                </p>
                <DDBSalvageFloorLab />
              </CardContent>
            </Card>

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
                  What signal tells you that a DDB calculation needs the salvage-floor adjustment?
                </p>
                <p className="text-sm text-purple-700">
                  The trigger is simple: after you calculate the raw DDB expense, check the resulting ending book value.
                  If it would fall below salvage value, the raw amount cannot stand and must be reduced.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter lesson={lesson04Data} unit={unit08Data} phase={phase3} phases={lesson04Phases} />
      </div>
    </div>
  );
}
