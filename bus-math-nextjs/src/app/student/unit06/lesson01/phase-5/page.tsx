
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!

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

        <ComprehensionCheck
          questions={[
            {
              id: "q1",
              question: "Why is it important to remove extra spaces from data?",
              answers: [
                "Because it makes the data look messy.",
                "Because extra spaces can cause errors in calculations and analysis.",
                "Because it saves storage space.",
                "Because it makes the data more secure."
              ],
              explanation: "Extra spaces can cause issues with sorting, filtering, and calculations, as they make text strings unique (e.g., 'Latte ' is different from 'Latte')."
            },
            {
              id: "q2",
              question: "What is the purpose of standardizing data?",
              answers: [
                "To make sure all data is in the same language.",
                "To ensure that the same data is represented in the same way.",
                "To make the data more interesting.",
                "To add more variety to the data."
              ],
              explanation: "Standardizing data (e.g., making sure 'Latte' and 'latte' are both entered as 'Latte') is crucial for accurate grouping and analysis."
            }
          ]}
          allowRetry={false}
        />
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
