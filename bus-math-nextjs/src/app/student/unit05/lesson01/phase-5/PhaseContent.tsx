
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { drawUnit05Phase5ComprehensionCheckItems } from "@/data/question-banks/unit05-phase5";

export default function Phase5Content() {
  const questions = [
    ...drawUnit05Phase5ComprehensionCheckItems(2, { lessonIds: ["lesson01"] }),
    {
      id: "lesson01-q3",
      question: "An employee earns $18/hour and works exactly 40 hours. What is their gross pay for the week?",
      answers: [
        "$720",
        "$700",
        "$760",
        "$18"
      ],
      explanation: "Gross pay is the regular rate times the hours worked before any deductions: $18 × 40 = $720."
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="space-y-6">

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">Assessment: Checking for Understanding</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Let's check your understanding of the key concepts from this lesson. Answer the following questions to the best of your ability.
            </p>
          </CardContent>
        </Card>

        <ComprehensionCheck
          questions={questions}
          allowRetry={false}
        />
        </div>

      </div>
    </div>
  )
}
