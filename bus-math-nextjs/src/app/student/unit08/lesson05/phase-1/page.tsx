'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, Shield, FileSpreadsheet } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const phase1 = lesson05Phases.find(p => p.sequence === 1)!;

const hookQuestions = [
  {
    id: "u08l05-hook-1",
    question: "Sarah's board asks for a complete list of every asset, its book value, and annual depreciation. What is the fastest way to produce this?",
    answers: [
      "A linked asset register and depreciation schedule in Excel",
      "A handwritten list updated each year",
      "Separate sticky notes on the whiteboard",
      "Asking the accountant to recalculate from scratch"
    ],
    explanation: "A linked asset register stores each asset's details once, and a depreciation schedule auto-calculates annual expense, accumulated depreciation, and book value. Changes update everywhere."
  },
  {
    id: "u08l05-hook-2",
    question: "An investor notices the book value on Sarah's balance sheet does not match her asset list. What most likely went wrong?",
    answers: [
      "The asset list and schedule are not linked — someone updated one but not the other",
      "Depreciation was calculated correctly in both places",
      "The salvage value was set to zero in both places",
      "The useful life is the same for all assets"
    ],
    explanation: "When the register and schedule are not linked by formula, updates in one place do not flow to the other. Linked formulas keep book value consistent."
  },
  {
    id: "u08l05-hook-3",
    question: "Which field must every row in a professional asset register include?",
    answers: [
      "Asset ID, description, cost, useful life, salvage value, method, and purchase date",
      "Only the asset name and cost",
      "The vendor's phone number",
      "The color of the asset"
    ],
    explanation: "A complete asset register needs enough data to calculate depreciation: cost, useful life, salvage value, and method. Asset ID and purchase date support tracking and audit."
  },
  {
    id: "u08l05-hook-4",
    question: "What makes a depreciation schedule trustworthy to an investor?",
    answers: [
      "Formulas link to the register; book value = cost minus accumulated depreciation; checks flag errors",
      "Numbers are typed in by hand so they look clean",
      "The schedule is on a hidden sheet",
      "Only the final year's total is shown"
    ],
    explanation: "Trustworthy schedules are transparent, formula-driven, and self-checking. Investors can trace every number back to its source."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson05Data} unit={unit08Data} phase={phase1} phases={lesson05Phases} />

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

            {/* Comprehension Check */}
            <ComprehensionCheck
              title="Stress Test: Will Your Asset Register Hold Up?"
              description="Predict the right tool and spot fragile patterns that reduce credibility."
              questions={hookQuestions}
              showExplanations={true}
              allowRetry={true}
            />

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

        <PhaseFooter lesson={lesson05Data} unit={unit08Data} phase={phase1} phases={lesson05Phases} />
      </div>
    </div>
  );
}
