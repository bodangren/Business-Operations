import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ArrowRight } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[5]; // Phase 6: Closing

const reflectionPrompts = [
  {
    id: "courage-pricing",
    category: "courage" as const,
    prompt:
      "Learning about markup vs. margin revealed how pricing mistakes can quietly hurt a business. What was the most challenging concept you worked through today, and how did you push past confusion to understand it?",
    placeholder:
      "Think about the moment something clicked — or the moment you struggled. What did you do to work through it?",
  },
  {
    id: "adaptability-strategy",
    category: "adaptability" as const,
    prompt:
      "As you built Sarah's cost structure in Phase 3 and ran scenarios in Phase 4, how did your thinking about pricing change? What assumptions did you have to revise?",
    placeholder:
      "Reflect on how your initial instincts compared to what the data showed. Where did you have to adjust your approach?",
  },
  {
    id: "persistence-mastery",
    category: "persistence" as const,
    prompt:
      "The advanced analysis in Phase 4 required sustained attention through multiple tabs and scenarios. When did the work feel hard or tedious, and what kept you going?",
    placeholder:
      "Consider a specific moment of frustration or difficulty. What strategy helped you persist toward understanding?",
  },
];

export default function Unit06Lesson02Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* What you accomplished */}
          <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                What You Built Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-indigo-700 leading-relaxed">
                You came into this lesson with a business mystery: how could Sarah earn more and keep less?
                You leave with the answer — and the tools to make sure it doesn't happen again.
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-1">🔍 Problem Diagnosis</h4>
                  <p className="text-sm text-indigo-800">
                    You identified why Sarah's profit was shrinking despite growing revenue: cost-plus
                    pricing can't adapt to business growth or competitive pressure.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-1">🧮 Mathematical Foundation</h4>
                  <p className="text-sm text-indigo-800">
                    You mastered the key distinction — markup is profit as a percentage of cost; margin
                    is profit as a percentage of revenue. Same profit, entirely different numbers. Investors
                    speak margin.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-1">📊 Cost Structure Mapping</h4>
                  <p className="text-sm text-indigo-800">
                    You sorted TechStart's real expenses into fixed and variable buckets and watched the
                    break-even point respond live on the CVP chart.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-1">⚙️ Advanced Analysis</h4>
                  <p className="text-sm text-indigo-800">
                    You used Goal Seek, Data Tables, and sensitivity analysis to generate strategic pricing
                    recommendations — the same tools professional consultants use with clients.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection to Town Hall */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Your Pricing Journey Continues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 leading-relaxed mb-4">
                The markup vs. margin foundation you've built today is exactly what you'll need for Unit 6's
                culminating challenge: developing a data-driven pricing strategy and defending it in a
                Town Hall debate in front of real business stakeholders.
              </p>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• <strong>Day 3:</strong> Build comprehensive CVP models with automated Excel</li>
                <li>• <strong>Days 6–7:</strong> Master Goal Seek and Data Tables for what-if analysis</li>
                <li>• <strong>Day 8:</strong> Develop and refine your pricing recommendation</li>
                <li>• <strong>Day 10:</strong> Present and defend your strategy to business professionals</li>
              </ul>
            </CardContent>
          </Card>

          {/* Reflection Journal — the last thing students do before leaving the lesson */}
          <ReflectionJournal
            unitTitle="Unit 6 Lesson 2: Markup vs. Margin"
            prompts={reflectionPrompts}
          />
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
