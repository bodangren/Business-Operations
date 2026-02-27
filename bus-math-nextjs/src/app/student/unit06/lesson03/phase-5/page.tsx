import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit06Phase5ComprehensionCheckItems } from "@/data/question-banks/unit06-phase5";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[4]; // Assessment

export default function Phase5Page() {
  const assessmentQuestions = getUnit06Phase5ComprehensionCheckItems({ lessonIds: ["lesson03"] });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Assessment: CVP Decision Readiness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-orange-700 leading-relaxed">
                This check measures whether you can make and defend pricing choices using the exact flow
                from this lesson.
              </p>
              <ul className="list-disc list-inside text-sm text-orange-800 space-y-1">
                <li>Compare contribution margin dollars and ratios across options.</li>
                <li>Rank break-even difficulty under shared fixed costs.</li>
                <li>Test options against a real capacity limit.</li>
                <li>Reverse-solve for target profit using required price or required units.</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Lesson 3 Mastery Check"
            description="CM, break-even, feasibility, and reverse-solving decisions"
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Professional Relevance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 mb-3">
                These are the same calculations analysts use when investors ask:
              </p>
              <ul className="list-disc list-inside text-sm text-purple-700 space-y-1">
                <li>"Which price option is safest at current capacity?"</li>
                <li>"How far are we from break-even under each strategy?"</li>
                <li>"What price or volume do we need to hit our target profit?"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Looking Ahead
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700">
                In Lesson 4, you&apos;ll automate today&apos;s reverse-solving with Goal Seek so Sarah can
                answer investor "what-if" questions in seconds.
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
