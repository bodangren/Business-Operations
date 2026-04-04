'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingDown, ChevronRight } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";

const phase6 = lesson03Phases.find(p => p.sequence === 6)!;

const reflectionPrompts = [
  {
    id: 'confidence-sl',
    category: 'confidence' as const,
    prompt: 'How confident do you feel calculating straight-line depreciation by hand? What step still feels tricky?',
    placeholder: 'Think about the four steps: find depreciable base, divide by life, multiply for accumulated, subtract for book value. Which step do you trust most? Which one makes you pause?'
  },
  {
    id: 'business-connection',
    category: 'understanding' as const,
    prompt: 'Why would an investor care about the depreciation method a company chooses? How does straight-line affect what the financial statements show?',
    placeholder: 'Connect the method to the business story. Think about how spreading cost evenly affects reported profit year to year, and what that means for someone evaluating the company.'
  },
  {
    id: 'method-signal',
    category: 'understanding' as const,
    prompt: 'What signal in a business scenario tells you that straight-line depreciation is the right method to use?',
    placeholder: 'Think about the types of assets and situations where equal annual expense makes the most sense. When would you choose straight-line over other methods?'
  }
];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase6}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Now Know About Straight-Line Depreciation</h2>

            <p className="text-lg leading-relaxed">
              Sarah closes her depreciation schedule with confidence. She can now explain exactly 
              how the van's cost flows through her financial statements over five years — and why 
              that matters to anyone reading her books.
            </p>

            <Card className="border-green-200 bg-green-50 my-6">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Key Takeaways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="font-medium text-green-900">The Formula</p>
                    <p className="text-sm text-green-800 font-mono">
                      Annual Expense = (Cost − Salvage Value) ÷ Useful Life
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="font-medium text-green-900">The Enduring Relationship</p>
                    <p className="text-sm text-green-800 font-mono">
                      Book Value = Cost − Accumulated Depreciation
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="font-medium text-green-900">The Pattern</p>
                    <p className="text-sm text-green-800">
                      Straight-line produces the same expense every year. Accumulated depreciation 
                      grows steadily. Book value shrinks steadily until it reaches salvage value.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="font-medium text-green-900">The Business Reason</p>
                    <p className="text-sm text-green-800">
                      Matching principle: spread the cost of an asset across the years it helps 
                      generate revenue. This gives a fair picture of profitability each year.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What Comes Next</h3>

            <p className="text-lg leading-relaxed">
              Straight-line is the simplest method — and the most commonly used. But it is not 
              the only option. Some assets lose value faster in their early years. A brand-new 
              delivery van, for example, loses more value in Year 1 than in Year 5. For those 
              situations, accountants use <strong>accelerated depreciation</strong> methods.
            </p>

            <Card className="border-blue-200 bg-blue-50 my-6">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5" />
                  Preview: Double-Declining Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-3">
                  In the next lesson, you will learn the <strong>double-declining balance (DDB)</strong> 
                  method — an accelerated approach that records higher depreciation in early years 
                  and lower depreciation in later years.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-700">DDB ignores salvage value in the initial calculation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-700">The depreciation rate is double the straight-line rate</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-700">Book value can never fall below salvage value</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-700">You will compare DDB and straight-line side by side</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-amber-800 m-0">
                <strong>Why method choice matters:</strong> The depreciation method a company 
                chooses affects reported profit, tax liability, and how investors perceive the 
                business. In Lesson 04, you will see how the same asset produces very different 
                financial pictures under different methods.
              </p>
            </div>
          </div>

          <ReflectionJournal
            unitTitle="Unit 8, Lesson 03: Straight-Line Depreciation"
            prompts={reflectionPrompts}
          />
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase6}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
