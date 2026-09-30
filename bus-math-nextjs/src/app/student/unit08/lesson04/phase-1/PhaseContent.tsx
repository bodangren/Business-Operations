'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Scale } from "lucide-react";

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-8">

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-purple-600 to-orange-600 text-white p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8" />
                <h2 className="text-2xl font-bold m-0">The Straight-Line Problem</h2>
              </div>
              <p className="text-xl leading-relaxed m-0">
                Sarah's accountant points out something important: straight-line depreciation 
                is simple, but it does not always match how assets actually lose value.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              In Lesson 03, you learned that straight-line depreciation records the <strong>same 
              expense every year</strong>. For TechStart's $30,000 van, that was $5,000 per year 
              for 5 years. But think about it: does a van really lose the same amount of value 
              in Year 5 as it does in Year 1?
            </p>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5" />
                  The Reality Check
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800">
                  A brand-new van driven off the lot loses thousands of dollars in value immediately. 
                  By Year 5, most of the value is already gone. Straight-line ignores this pattern. 
                  For tax purposes and for matching real economic loss, many businesses prefer an 
                  <strong> accelerated depreciation</strong> method.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Two Methods, Two Pictures</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-base">
                    <Scale className="h-4 w-4" />
                    Straight-Line
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-800">
                    $5,000 expense every year. Simple and predictable. But does not match 
                    how the van actually loses value.
                  </p>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Equal each year</Badge>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                    <TrendingDown className="h-4 w-4" />
                    Double-Declining Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800">
                    Higher expense in early years, lower in later years. Matches the real 
                    pattern of asset value loss more closely.
                  </p>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">Accelerated</Badge>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed">
              In this lesson, you will learn how <strong>double-declining balance (DDB)</strong> works, 
              why businesses choose it over straight-line, and how the same asset produces very 
              different financial pictures under each method.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-amber-800 m-0">
                <strong>Key formula:</strong> DDB Rate = 2 × (1 ÷ Useful Life). Then apply that rate 
                to the <em>beginning book value</em> each year — not the depreciable base.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
