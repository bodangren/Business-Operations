import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[5]; // Closing

const reflectionPrompts = [
  {
    id: "courage-feasibility",
    category: "courage" as const,
    prompt:
      "Which pricing option felt hardest to defend, and what evidence gave you the confidence to make a final recommendation anyway?",
    placeholder:
      "Name the option, explain the risk, and describe the data point (CM, break-even, or capacity) that helped you decide."
  },
  {
    id: "adaptability-reverse-solve",
    category: "adaptability" as const,
    prompt:
      "How did your thinking change when you moved from forward calculations (profit from a price) to reverse solving (required price or units for a target profit)?",
    placeholder:
      "Describe one assumption you had to revise after running the reverse-solve step."
  },
  {
    id: "persistence-cvp",
    category: "persistence" as const,
    prompt:
      "When the numbers did not support your first strategy, how did you keep working until you found a feasible plan?",
    placeholder:
      "Explain where you got stuck and what step-by-step approach helped you get unstuck."
  }
];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                What You Built in Lesson 3
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-indigo-700 leading-relaxed">
                Today you moved past cost sorting and into real pricing decisions Sarah can defend in
                front of investors.
              </p>
              <ul className="list-disc list-inside text-sm text-indigo-800 space-y-1">
                <li>Contribution Margin Sprint: compared three pricing options with one cost base.</li>
                <li>Break-Even Ladder: ranked options by break-even difficulty.</li>
                <li>Capacity Reality Check: tested each option against monthly delivery limits.</li>
                <li>Target-Profit Reverse Solve: worked backward to required units or price.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Why This Matters for Investor Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 text-sm leading-relaxed">
                Investors rarely ask only "What is your price?" They ask whether the price is feasible,
                what break-even looks like, and how quickly the team can hit target profit. You now have
                a clear framework for answering those questions with evidence.
              </p>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="Unit 6 Lesson 3: CVP Decision Flow"
            prompts={reflectionPrompts}
          />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Bridge to Lesson 4
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700">
                Next, you&apos;ll use Goal Seek to automate the reverse-solving work you did manually today,
                so pricing and profit targets can be updated instantly during live business discussions.
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
