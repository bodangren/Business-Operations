import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Award, TrendingUp, Calculator, Lightbulb, BarChart3 } from "lucide-react";
import MarkupMarginMastery from "@/components/exercises/MarkupMarginMastery";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[3]; // Phase 4: Independent Practice

export default function Unit06Lesson02Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Independent Practice Introduction */}
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Independent Practice: Markup vs. Margin Mastery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-purple-700 leading-relaxed">
                Time to build fluency with markup and margin calculations! You'll work through problems 
                that vary the numbers algorithmically until you can calculate both percentages reliably.
                This is the same procedural fluency you'll need for break-even analysis in the next lesson.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white border-green-200">
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800">Fluency Goal</h3>
                    <p className="text-sm text-green-700">5 consecutive correct answers</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-4 text-center">
                    <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-800">Skill Target</h3>
                    <p className="text-sm text-blue-700">Distinguish markup from margin</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-orange-200">
                  <CardContent className="p-4 text-center">
                    <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-orange-800">Preparation</h3>
                    <p className="text-sm text-orange-700">Ready for break-even next</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Mastery Component */}
          <MarkupMarginMastery />

          {/* Connection to Break-Even */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Why This Matters for Break-Even
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-indigo-700 leading-relaxed">
                Once you can calculate margin reliably, you're ready for break-even analysis. 
                The key connection: margin tells you how much of each revenue dollar is profit 
                available to cover fixed costs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">Contribution Margin</h4>
                  <p className="text-sm text-indigo-800">
                    Your margin on each project is the "contribution" it makes toward covering 
                    Sarah's fixed costs (office, salary, insurance). Every project at 40% margin 
                    contributes $0.40 of each dollar toward the fixed cost floor.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">Break-Even Formula</h4>
                  <p className="text-sm text-indigo-800">
                    Fixed Costs ÷ Contribution Margin = Break-Even Point (in units or dollars)
                    You'll practice this in Lesson 3 — but first, make sure markup and margin 
                    calculations are automatic.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">What Sarah Now Knows</h4>
                <p className="text-sm text-green-800">
                  With reliable markup and margin skills, Sarah can quickly evaluate any pricing 
                  proposal, understand what percentage of revenue she actually keeps, and defend 
                  her prices to investors using the language they speak: margin.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}