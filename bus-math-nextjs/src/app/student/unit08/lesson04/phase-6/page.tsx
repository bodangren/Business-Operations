'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ChevronRight, Building2 } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";

const phase6 = lesson04Phases.find(p => p.sequence === 6)!;

const reflectionPrompts = [
  {
    id: 'confidence-ddb',
    category: 'confidence' as const,
    prompt: 'How confident do you feel calculating DDB depreciation and comparing it with straight-line? What step still feels tricky?',
    placeholder: 'Think about the DDB steps: find the rate, apply to book value, check the salvage floor. Which step do you trust most? Which one makes you pause?'
  },
  {
    id: 'method-choice',
    category: 'understanding' as const,
    prompt: 'If you were Sarah, which depreciation method would you choose for TechStart\'s delivery van? Why?',
    placeholder: 'Consider both methods: straight-line is simpler and more predictable. DDB gives tax advantages early on. Think about what matters most for a growing business.'
  },
  {
    id: 'business-signal',
    category: 'understanding' as const,
    prompt: 'What signal in a business scenario tells you that accelerated depreciation makes more sense than straight-line?',
    placeholder: 'Think about asset types, tax strategy, and how different assets lose value. When would a company prefer higher early expenses?'
  }
];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson04Data} unit={unit08Data} phase={phase6} phases={lesson04Phases} />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Now Know About DDB and Method Choice</h2>

            <p className="text-lg leading-relaxed">
              Sarah now has two powerful tools in her depreciation toolkit. She can calculate 
              straight-line for simplicity and DDB for tax advantage. More importantly, she 
              understands why the choice matters.
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
                    <p className="font-medium text-green-900">The DDB Formula</p>
                    <p className="text-sm text-green-800 font-mono">
                      DDB Rate = 2 × (1 ÷ Useful Life)
                    </p>
                    <p className="text-sm text-green-800 font-mono mt-1">
                      Expense = Beginning Book Value × DDB Rate
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="font-medium text-green-900">The Salvage Floor</p>
                    <p className="text-sm text-green-800">
                      Book value can never fall below salvage value. If the calculated expense 
                      would violate this rule, reduce the expense to the floor amount.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="font-medium text-green-900">Method Comparison</p>
                    <p className="text-sm text-green-800">
                      DDB records higher expense in early years and lower expense in later years 
                      compared to straight-line. Total depreciation over the asset's life is the 
                      same under both methods.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="font-medium text-green-900">The Business Choice</p>
                    <p className="text-sm text-green-800">
                      Choose DDB for tax advantage and realistic matching on fast-depreciating 
                      assets. Choose straight-line for simplicity and steady profit reporting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What Comes Next</h3>

            <p className="text-lg leading-relaxed">
              Now that you understand both depreciation methods by hand, it is time to build 
              them into Excel. In Lesson 05, you will create a professional asset register 
              and depreciation schedule workbook that can handle multiple assets, multiple 
              methods, and automatic calculations.
            </p>

            <Card className="border-blue-200 bg-blue-50 my-6">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Preview: Build the Asset Register
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-3">
                  In the next lesson, you will build an Excel workbook that includes:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-700">An asset register listing all fixed assets with cost, life, and salvage value</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-700">A depreciation schedule that calculates expense, accumulated depreciation, and book value</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-700">Formula-driven calculations that update automatically when you change assumptions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-700">A method comparison section that shows SL vs DDB side by side</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-amber-800 m-0">
                <strong>Why this matters:</strong> The manual calculations you mastered in Lessons 03 
                and 04 are the foundation. Excel will do the arithmetic, but you need to understand 
                the logic to build correct formulas and catch errors.
              </p>
            </div>
          </div>

          <ReflectionJournal
            unitTitle="Unit 8, Lesson 04: DDB and Method Comparison"
            prompts={reflectionPrompts}
          />
        </div>

        <PhaseFooter lesson={lesson04Data} unit={unit08Data} phase={phase6} phases={lesson04Phases} />
      </div>
    </div>
  );
}
