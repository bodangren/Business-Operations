
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit04Phase5ComprehensionCheckItems } from "@/data/question-banks/unit04-phase5";

export default function Phase5Content() {
  const assessmentQuestions = [
    ...getUnit04Phase5ComprehensionCheckItems({ lessonIds: ["lesson01"] }).slice(0, 2),
    {
      id: "lesson01-q3",
      question: "A café's daily sales include a few unusually busy festival days. Which summary measure best describes a typical day?",
      answers: [
        "The median, because it is less affected by the few extreme days",
        "The mean, because it always equals the most common value",
        "The range, because it shows the most frequent sales level",
        "The total, because it ignores how many days are in the data"
      ],
      explanation: "The median resists distortion from a handful of extreme values, so it better represents a typical day than the mean when the data include outliers."
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="space-y-6">

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800">Assessment: Checking for Understanding</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Let's check your understanding of the key concepts from this lesson. Answer the following questions to the best of your ability.
            </p>
          </CardContent>
        </Card>

        <ComprehensionCheck
          questions={assessmentQuestions}
          title="Unit 4 Lesson 1 Assessment"
          description="Demonstrate your understanding of descriptive statistics and data analysis foundations"
          showExplanations={true}
          allowRetry={false}
        />
        </div>

      </div>
    </div>
  )
}
