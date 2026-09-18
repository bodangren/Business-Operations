'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stars, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 py-8">

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <Card className="border-indigo-200 bg-white shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Stars className="w-8 h-8 text-indigo-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                  What You Can Now Do
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  Reflection and Handoff
                </Badge>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  You built a professional asset register and depreciation schedule in Excel. 
                  Your workbook calculates annual expense, tracks accumulated depreciation, 
                  and verifies book value automatically. When cost or useful life changes, 
                  everything updates.
                </p>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200 not-prose">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Key Takeaways
                  </h3>
                  <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                    <li><strong>One source of truth:</strong> The asset register stores each asset&apos;s details once</li>
                    <li><strong>Linked formulas:</strong> The schedule references the register, so changes flow through</li>
                    <li><strong>Book value logic:</strong> Book Value = Cost − Accumulated Depreciation, every row</li>
                    <li><strong>Verification checks:</strong> The check column flags errors before they reach investors</li>
                    <li><strong>Professional standards:</strong> No hard-coded numbers in formula cells</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 not-prose mt-4">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    What Comes Next: Lesson 06
                  </h3>
                  <p className="text-blue-800 text-sm">
                    In Lesson 06, you will extend this workbook to <strong>compare depreciation methods side by side</strong>. 
                    You will add a method comparison section that shows straight-line vs. double-declining balance 
                    for the same assets, calculate the income statement and balance sheet impact of each method, 
                    and write a short defense of which method TechStart should use. Your asset register from today 
                    becomes the foundation for that comparison.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </div>
  );
}
