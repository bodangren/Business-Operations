"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, MousePointer2, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[1];

const mechanicQuestions = [
  {
    id: "mech-1",
    question: "In the Goal Seek dialog box, which field tells Excel WHAT result you want?",
    answers: [
      "Set Cell",
      "To Value",
      "By Changing Cell",
      "Options"
    ],
    explanation: "'Set Cell' is the cell containing the formula whose result you want to control—in this case, your Profit cell."
  },
  {
    id: "mech-2",
    question: "If you want to find the price needed to hit your target profit, which cell goes in 'By Changing Cell'?",
    answers: [
      "Your Price input cell",
      "Your Profit formula cell",
      "Your Fixed Costs cell",
      "Your Volume cell"
    ],
    explanation: "You put your Price input cell in 'By Changing Cell' because that's the variable you want Excel to adjust to reach your target."
  },
  {
    id: "mech-3",
    question: "What happens if you put a volume cell in 'By Changing Cell' but a price cell in 'Set Cell' by mistake?",
    answers: [
      "Goal Seek will try to change volume to hit your profit target (which may not be what you want)",
      "Excel will crash",
      "Goal Seek will calculate correctly anyway",
      "The dialog box will show an error"
    ],
    explanation: "Goal Seek will still run—it will find the volume needed for your profit target. But if you wanted to find price instead, the answer will be wrong."
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Core Concept */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-blue-800 mb-2">
                    Mastering Goal Seek
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Reverse-Engineering with Three Fields
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-slate-800">
                    <strong>Goal Seek</strong> is Excel's "reverse calculator." Instead of typing inputs and 
                    seeing a result, you tell it the result you want, and it finds the input that produces it.
                    Think of it like a sniper scope: you锁定目标 (lock on target), and Excel adjusts until it hits it.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                      <h4 className="font-bold text-blue-900 mb-2">Set Cell</h4>
                      <p className="text-xs text-slate-600">
                        The result cell (profit formula) you want to control
                      </p>
                      <p className="text-[10px] text-slate-500 mt-2 font-mono bg-slate-100 px-2 py-1 rounded inline">=Profit</p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                      <h4 className="font-bold text-blue-900 mb-2">To Value</h4>
                      <p className="text-xs text-slate-600">
                        The target number you want that result to equal
                      </p>
                      <p className="text-[10px] text-slate-500 mt-2 font-mono bg-slate-100 px-2 py-1 rounded inline">$15,000</p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                      <h4 className="font-bold text-blue-900 mb-2">By Changing Cell</h4>
                      <p className="text-xs text-slate-600">
                        The input cell (price or volume) Excel will adjust
                      </p>
                      <p className="text-[10px] text-slate-500 mt-2 font-mono bg-slate-100 px-2 py-1 rounded inline">=Price</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mechanics Section */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <MousePointer2 className="w-5 h-5" />
                    Mechanics: The Goal Seek Dialog Box
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-700">
                    You find Goal Seek at <em>Data &gt; What-If Analysis &gt; Goal Seek</em>. 
                    The dialog has exactly three boxes. Here's how to fill each one:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="bg-blue-600 text-white rounded w-28 h-8 flex items-center justify-center font-bold text-xs shrink-0">Set Cell</div>
                      <div>
                        <p className="text-sm text-blue-900 font-medium">Click your Profit formula cell</p>
                        <p className="text-xs text-blue-800">
                          This must be a formula cell (not a plain number). In Sarah's workbook, this is the cell showing Total Profit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="bg-blue-600 text-white rounded w-28 h-8 flex items-center justify-center font-bold text-xs shrink-0">To Value</div>
                      <div>
                        <p className="text-sm text-blue-900 font-medium">Type your target profit</p>
                        <p className="text-xs text-blue-800">
                          Enter the number—not a formula. For Sarah, this is $15,000. Do not include dollar signs or commas.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="bg-blue-600 text-white rounded w-28 h-8 flex items-center justify-center font-bold text-xs shrink-0">By Changing Cell</div>
                      <div>
                        <p className="text-sm text-blue-900 font-medium">Click your Price (or Volume) input cell</p>
                        <p className="text-xs text-blue-800">
                          This must be an input cell that the profit formula references. In Sarah's case, the Price cell.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-amber-900">Common Mistake #1: Wrong Set Cell</p>
                      <p className="text-xs text-amber-800">
                        If you select a plain number cell instead of the profit formula, Goal Seek will do nothing. 
                        Make sure "Set Cell" contains <code className="bg-amber-100 px-1">=TotalProfit</code> (a formula), not a static number.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-amber-900">Common Mistake #2: Impossible Target</p>
                      <p className="text-xs text-amber-800">
                        If your target is mathematically impossible (like $1M profit when max revenue is $50K), 
                        Goal Seek will show an error. Always verify your target is reasonable first.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mechanics Check */}
              <ComprehensionCheck
                title="Mechanics Check: Goal Seek Dialog"
                description="Before we practice, let's make sure we know which box is which."
                questions={mechanicQuestions}
                showExplanations={true}
              />

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready to Reverse-Engineer?</h3>
                  <p className="text-gray-700">
                    In Guided Practice, you'll use a simulator to practice the Goal Seek workflow 
                    before touching the real workbook.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}
