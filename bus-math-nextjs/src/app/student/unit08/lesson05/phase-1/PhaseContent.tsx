'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, Shield, FileSpreadsheet } from "lucide-react";

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-b from-red-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-8">

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            {/* Narrative Hook */}
            <Card className="border-red-200 bg-white shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                  Sarah&apos;s Board Meeting Stress Test
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  Fragile Lists vs. Linked Asset Register
                </Badge>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  TechStart Solutions has grown. Sarah now owns a delivery van, two 3D printers, and a server rack. 
                  At the quarterly board meeting, an investor asks: <em>&ldquo;What is the total book value of your equipment, 
                  and how much depreciation expense hit your income statement this year?&rdquo;</em>
                </p>
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  Sarah opens her notes. She has a handwritten list of purchases and a separate spreadsheet with 
                  last year&apos;s depreciation. The numbers do not match. The room goes quiet.
                </p>
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  Her accountant later explains: <em>&ldquo;Professional companies use a <strong>linked asset register</strong> — 
                  one source of truth for every asset. A <strong>depreciation schedule</strong> auto-calculates annual expense, 
                  accumulated depreciation, and book value. When cost or useful life changes, everything updates.&rdquo;</em>
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 not-prose">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5" />
                    Why This Matters
                  </h3>
                  <p className="text-green-800">
                    A linked asset register saves time, prevents embarrassing errors, and builds investor trust. 
                    When book value updates automatically and matches the balance sheet, Sarah shows she manages 
                    assets professionally.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Turn and Talk */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Turn and Talk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-blue-900 mb-2">Discussion Prompt (3 minutes):</p>
                <p className="text-blue-800 mb-2">
                  Think about what happens when asset tracking falls apart. Discuss:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>What happens when the asset list and depreciation schedule are not linked?</li>
                  <li>Which fields does an investor need to see to trust your asset tracking?</li>
                  <li>How does a formula-driven schedule save time compared to manual updates?</li>
                </ul>
                <div className="mt-3 flex items-center gap-2 text-slate-700">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Professional standard: one source of truth, linked by formula.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
