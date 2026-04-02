'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, FileText, Shield } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const phase5 = lesson05Phases.find(p => p.sequence === 5)!;

const assessmentQuestions = [
  {
    id: "u08l05-audit-1",
    question: "An asset costs $20,000, has a 4-year life, and $2,000 salvage value using straight-line. What is the Year 2 book value?",
    answers: [
      "$11,000",
      "$15,500",
      "$9,000",
      "$18,000"
    ],
    explanation: "Depreciable base = $20,000 - $2,000 = $18,000. Annual expense = $18,000 / 4 = $4,500. Year 2 accumulated = $9,000. Book value = $20,000 - $9,000 = $11,000."
  },
  {
    id: "u08l05-audit-2",
    question: "Your depreciation schedule shows 'ERROR' in the check column for Year 3. What is the most likely cause?",
    answers: [
      "The book value formula does not match Cost minus Accumulated Depreciation",
      "The asset was purchased in Year 3",
      "The salvage value is too high",
      "The method should be DDB instead of SL"
    ],
    explanation: "The check column flags when Book Value ≠ Cost − Accumulated Depreciation. This usually means the book value formula is wrong or accumulated depreciation is not calculated correctly."
  },
  {
    id: "u08l05-audit-3",
    question: "Why is it important that the depreciation schedule references the asset register by formula instead of typing numbers?",
    answers: [
      "So changes to cost or useful life in the register automatically update the schedule",
      "So the workbook looks more professional",
      "So the file size is smaller",
      "So you can use more colors"
    ],
    explanation: "Formula linking ensures that if cost, life, or salvage value changes in the register, the schedule recalculates automatically. Hard-coded numbers break this link."
  },
  {
    id: "u08l05-audit-4",
    question: "What should the final year's book value equal in a correctly built depreciation schedule?",
    answers: [
      "The salvage value",
      "Zero",
      "The original cost",
      "The annual depreciation expense"
    ],
    explanation: "At the end of the asset's useful life, accumulated depreciation equals the depreciable base (Cost - Salvage). Therefore book value = Cost - (Cost - Salvage) = Salvage Value."
  },
  {
    id: "u08l05-audit-5",
    question: "An investor asks for the total depreciation expense hitting the income statement this year. Where do you find this number?",
    answers: [
      "Sum of Year 1 annual expenses for all assets in the depreciation schedule",
      "The cost of the newest asset",
      "The book value of the oldest asset",
      "The salvage value total"
    ],
    explanation: "Total depreciation expense is the sum of each asset's annual expense for the current year. This flows from the depreciation schedule to the income statement."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson05Data} unit={unit08Data} phase={phase5} phases={lesson05Phases} />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <Card className="border-yellow-200 bg-white shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-yellow-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                  Audit and Explain: Is Your Workbook Trustworthy?
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  Technical Check + Artifact Task
                </Badge>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-800 mb-4">
                  Complete the technical check below, then write a short audit response defending 
                  your workbook&apos;s trustworthiness. An investor should be able to read your response 
                  and feel confident in your asset tracking.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 not-prose">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    What This Checks
                  </h3>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                    <li>You can calculate book value from cost and accumulated depreciation</li>
                    <li>You understand why formula linking matters</li>
                    <li>You can identify and diagnose check column errors</li>
                    <li>You know where to find total depreciation expense</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Technical MCQ Check */}
            <ComprehensionCheck
              title="Technical Check: Asset Register and Depreciation Logic"
              description="Test your understanding of workbook mechanics and depreciation calculations."
              questions={assessmentQuestions}
              showExplanations={true}
              allowRetry={true}
            />

            {/* Artifact Task */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Artifact Task: Audit Response Memo
                </CardTitle>
                <CardDescription className="text-green-700">
                  Write a short memo (3-4 sentences) defending your workbook&apos;s trustworthiness.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-green-800">
                  <strong>Scenario:</strong> An investor reviews your asset register and asks: 
                  &ldquo;How do I know these numbers are correct and will update if something changes?&rdquo;
                </p>
                <p className="text-green-800">
                  <strong>Your task:</strong> Write a response that:
                </p>
                <ul className="list-disc list-inside text-green-800">
                  <li>Names the two sheets in your workbook and what each proves</li>
                  <li>Explains how formulas keep the schedule linked to the register</li>
                  <li>Describes the check column and what &ldquo;OK&rdquo; means</li>
                  <li>Cites one specific number from your workbook as evidence</li>
                </ul>
                <div className="bg-white p-4 rounded border border-green-200">
                  <textarea
                    className="w-full h-32 p-3 border rounded text-sm text-slate-700"
                    placeholder="Write your audit response here. Example: 'Our workbook has two sheets...'"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <PhaseFooter lesson={lesson05Data} unit={unit08Data} phase={phase5} phases={lesson05Phases} />
      </div>
    </div>
  );
}
