
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit05Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit05Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

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
          questions={[
            {
              id: "q1",
              question: "An employee works 45 hours a week at a rate of $20/hour. What is their gross pay for the week, assuming overtime is 1.5 times the regular rate for hours over 40?",
              answers: [
                "$950",
                "$900",
                "$1350",
                "$1000"
              ],
              explanation: "Regular pay: 40 hours * $20/hour = $800. Overtime hours: 45 - 40 = 5 hours. Overtime rate: $20/hour * 1.5 = $30/hour. Overtime pay: 5 hours * $30/hour = $150. Gross pay: $800 + $150 = $950."
            },
            {
              id: "q2",
              question: "A salaried employee earns $52,000 per year and is paid bi-weekly. What is their gross pay per paycheck?",
              answers: [
                "$2,000",
                "$1,000",
                "$4,333.33",
                "$2,166.67"
              ],
              explanation: "There are 26 bi-weekly pay periods in a year. $52,000 / 26 = $2,000."
            }
          ]}
          allowRetry={false}
        />
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit05Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
