import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <Card className="border-blue-200">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-blue-600" />
          Driving Question
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <blockquote className="text-lg font-semibold text-primary">
          "{drivingQuestion.question}"
        </blockquote>
        
        <p className="text-muted-foreground leading-relaxed">
          {drivingQuestion.context}
        </p>
        
        {drivingQuestion.scenario && (
          <div className="p-4 bg-muted/50 rounded-lg border">
            <p className="text-sm">
              <strong>Scenario:</strong> {drivingQuestion.scenario}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}