"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Calculator } from "lucide-react";
import BreakEvenMastery from "@/components/exercises/BreakEvenMastery";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[3]; // Independent Practice

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Independent Practice: Break-Even & CVP Mastery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-purple-700 leading-relaxed">
                In Guided Practice you worked through Sarah&apos;s POS service scenario step by step.
                Now you&apos;ll build fluency with contribution margin and break-even calculations by 
                practicing on fresh problems until you can solve them reliably.
              </p>
              <div className="bg-white rounded border border-purple-200 p-4 text-sm text-purple-900 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold">Fixed Costs</p>
                  <p className="text-purple-700">Monthly costs that don't change with volume</p>
                </div>
                <div>
                  <p className="font-semibold">Variable Cost</p>
                  <p className="text-purple-700">Cost per unit that scales with sales</p>
                </div>
                <div>
                  <p className="font-semibold">Selling Price</p>
                  <p className="text-purple-700">Revenue per unit sold</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <BreakEvenMastery />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Key Formulas Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded border border-green-200">
                  <p className="font-semibold text-green-900">Contribution Margin ($)</p>
                  <p className="text-green-700 font-mono">CM = Price − Variable Cost</p>
                  <p className="text-green-600 text-xs mt-1">How much each unit contributes to fixed costs</p>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <p className="font-semibold text-green-900">Contribution Margin Ratio (%)</p>
                  <p className="text-green-700 font-mono">CM% = (CM ÷ Price) × 100</p>
                  <p className="text-green-600 text-xs mt-1">Percentage of each sales dollar available for fixed costs</p>
                </div>
                <div className="bg-white p-3 rounded border border-amber-200">
                  <p className="font-semibold text-amber-900">Break-Even Units</p>
                  <p className="text-amber-700 font-mono">BE = ⌈Fixed Costs ÷ CM⌉</p>
                  <p className="text-amber-600 text-xs mt-1">Units needed to cover all costs (always round UP)</p>
                </div>
                <div className="bg-white p-3 rounded border border-amber-200">
                  <p className="font-semibold text-amber-900">Break-Even Dollars</p>
                  <p className="text-amber-700 font-mono">BE$ = ⌈Fixed Costs ÷ CM%⌉</p>
                  <p className="text-amber-600 text-xs mt-1">Revenue needed to break even</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Mastery Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-amber-700">You&apos;ve achieved mastery when you can:</p>
              <ul className="list-disc list-inside text-amber-800 text-sm space-y-1">
                <li>Calculate contribution margin in dollars for any pricing scenario</li>
                <li>Calculate contribution margin ratio as a percentage</li>
                <li>Find break-even in units (always remembering to round UP)</li>
                <li>Find break-even in dollars of revenue</li>
                <li>Explain what each metric tells you about business viability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Coming Up: Assessment</h3>
              <p className="text-gray-700">
                Phase 5 will check whether you can apply these calculations to defend pricing decisions
                using contribution margin, break-even rankings, and feasibility reasoning.
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
