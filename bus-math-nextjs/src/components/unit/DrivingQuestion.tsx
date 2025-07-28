import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

interface DrivingQuestionProps {
  drivingQuestion: {
    question: string
    context: string
    scenario?: string
  }
}

export function DrivingQuestion({ drivingQuestion }: DrivingQuestionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <HelpCircle className="h-6 w-6 text-blue-600" />
        Driving Question
      </h2>
      
      <Card className="border-l-4 border-l-primary bg-gradient-to-r from-blue-50/50 to-transparent">
        <CardContent className="pt-6">
          <blockquote className="text-lg font-semibold mb-4 text-primary">
            "{drivingQuestion.question}"
          </blockquote>
          
          <p className="text-muted-foreground leading-relaxed">
            {drivingQuestion.context}
          </p>
          
          {drivingQuestion.scenario && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm">
                <strong>Scenario:</strong> {drivingQuestion.scenario}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}