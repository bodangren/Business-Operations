import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, BarChart3 } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[1];

const vocabularyExercise = [
  {
    id: "vocab-1",
    text: "A {blank} compares two or more pricing options side-by-side to see which reaches the profit target.",
    answer: "scenario",
    hint: "Each option represents a different business decision path"
  },
  {
    id: "vocab-2", 
    text: "The {blank} is the revenue minus variable costs—the amount each unit contributes to covering fixed costs.",
    answer: "contribution margin",
    hint: "This is the key metric for CVP analysis"
  },
  {
    id: "vocab-3",
    text: "{blank} sensitivity means understanding which input (price, volume, or costs) creates the biggest change in profit.",
    answer: "Sensitivity",
    hint: "Small changes in sensitive variables have large effects"
  },
  {
    id: "vocab-4",
    text: "A structured {blank} shows price, volume, revenue, costs, and profit for each scenario in columns.",
    answer: "table",
    hint: "This helps you compare options visually"
  },
  {
    id: "vocab-5",
    text: "When the volume needed to hit profit exceeds capacity, the scenario is not {blank} even if the math works.",
    answer: "realistic",
    hint: "Business constraints matter as much as math"
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Core Content */}
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                    Building the Scenario Comparison Table
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Structured Analysis for Pricing Decisions
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-slate-800">
                    Sarah needed a way to see both scenarios at once—not just the math, but the <strong>business 
                    trade-offs</strong>. Jennifer showed her how to build a structured comparison table.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Sarah's Base Numbers (from Lesson 03)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-blue-100 text-blue-900">
                            <th className="p-2 border border-blue-200 text-left">Metric</th>
                            <th className="p-2 border border-blue-200">Current</th>
                          </tr>
                        </thead>
                        <tbody className="text-blue-800">
                          <tr><td className="p-2 border border-blue-200">Fixed Costs</td><td className="p-2 border border-blue-200 text-right">$8,100</td></tr>
                          <tr><td className="p-2 border border-blue-200">Variable Cost / Project</td><td className="p-2 border border-blue-200 text-right">$880</td></tr>
                          <tr><td className="p-2 border border-blue-200">Current Price</td><td className="p-2 border border-blue-200 text-right">$1,350</td></tr>
                          <tr><td className="p-2 border border-blue-200">Current Volume</td><td className="p-2 border border-blue-200 text-right">24 projects</td></tr>
                          <tr><td className="p-2 border border-blue-200">Contribution Margin</td><td className="p-2 border border-blue-200 text-right">$470 ($1,350 - $880)</td></tr>
                          <tr><td className="p-2 border border-blue-200">Current Profit</td><td className="p-2 border border-blue-200 text-right">$3,180</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">The Two-Path Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900">
                          <th className="p-2 border border-slate-200 text-left">Metric</th>
                          <th className="p-2 border border-slate-200 bg-green-50 text-green-900">Path A: Premium</th>
                          <th className="p-2 border border-slate-200 bg-blue-50 text-blue-900">Path B: Volume</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr><td className="p-2 border border-slate-200">Price</td><td className="p-2 border border-slate-200 text-right">$1,635</td><td className="p-2 border border-slate-200 text-right">$1,350</td></tr>
                        <tr><td className="p-2 border border-slate-200">Volume</td><td className="p-2 border border-slate-200 text-right">24 projects</td><td className="p-2 border border-slate-200 text-right">39 projects</td></tr>
                        <tr><td className="p-2 border border-slate-200">Revenue</td><td className="p-2 border border-slate-200 text-right">$39,240</td><td className="p-2 border border-slate-200 text-right">$52,650</td></tr>
                        <tr><td className="p-2 border border-slate-200">Variable Costs</td><td className="p-2 border border-slate-200 text-right">$21,120</td><td className="p-2 border border-slate-200 text-right">$34,320</td></tr>
                        <tr><td className="p-2 border border-slate-200">Contribution Margin</td><td className="p-2 border border-slate-200 text-right">$18,120</td><td className="p-2 border border-slate-200 text-right">$18,320</td></tr>
                        <tr><td className="p-2 border border-slate-200">Fixed Costs</td><td className="p-2 border border-slate-200 text-right">$8,100</td><td className="p-2 border border-slate-200 text-right">$8,100</td></tr>
                        <tr className="font-bold"><td className="p-2 border border-slate-200">Profit</td><td className="p-2 border border-slate-200 text-right">$10,020</td><td className="p-2 border border-slate-200 text-right">$10,220</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6">
                    <h4 className="font-semibold text-amber-900 mb-2">🔍 What the Table Reveals</h4>
                    <ul className="list-disc list-inside space-y-1 text-amber-800 text-sm">
                      <li><strong>Both paths work mathematically</strong>—they both hit ~$10,000 profit</li>
                      <li><strong>Path B (Volume) actually earns $200 more</strong>—but needs 15 more projects</li>
                      <li><strong>Contribution margin is nearly identical</strong>—$470 vs. $472 per project</li>
                      <li><strong>The real question is capacity and market</strong>—not just the spreadsheet</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Vocabulary Exercise */}
              <FillInTheBlank
                sentences={vocabularyExercise}
                title="Scenario Comparison Vocabulary"
                description="Master the key terms for comparing pricing scenarios."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />

              {/* Business Reality Note */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Strategy Note: Sensitivity Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-amber-900 text-sm leading-relaxed">
                    The comparison table reveals something important: <strong>volume changes affect revenue more than price changes</strong> in this case. But this isn't always true!
                  </p>
                  <p className="text-amber-900 text-sm leading-relaxed">
                    In Guided Practice, we'll add a complication—a competitor price change—that shifts 
                    which variable matters most. Understanding sensitivity helps Sarah prioritize 
                    which "lever" to pull.
                  </p>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready for Complications?</h3>
                  <p className="text-gray-700">
                    In Guided Practice, we'll add a meaningful complication: what happens when a 
                    competitor drops their price? This will shift the scenario comparison dramatically.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}
