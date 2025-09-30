
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { drawUnit06Phase5ComprehensionCheckItems } from "@/data/question-banks/unit06-phase5";

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!
  const questions = drawUnit06Phase5ComprehensionCheckItems(4, { lessonIds: ["lesson01"] })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">Assessment: Data Cleaning Concepts</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Let's check your understanding of the key data cleaning concepts from this lesson.
            </p>
          </CardContent>
        </Card>

        <ComprehensionCheck questions={questions} allowRetry={false} />
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
