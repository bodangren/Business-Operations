import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Star } from "lucide-react"
import { Milestone, RubricCriteria } from "@/types/unit"

interface AssessmentOverviewProps {
  assessment: {
    performanceTask: {
      title: string
      description: string
      requirements: string[]
      context?: string
    }
    milestones: Milestone[]
    rubric: RubricCriteria[]
  }
}

export function AssessmentOverview({ assessment }: AssessmentOverviewProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Target className="h-6 w-6 text-green-600" />
        Assessment Overview
      </h2>
      
      {/* Performance Task */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Final Performance Task
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h4 className="font-semibold text-lg">{assessment.performanceTask.title}</h4>
          
          <p className="text-muted-foreground">
            {assessment.performanceTask.description}
          </p>
          
          {assessment.performanceTask.context && (
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm">
                <strong>Context:</strong> {assessment.performanceTask.context}
              </p>
            </div>
          )}
          
          <div>
            <h5 className="font-medium mb-2">Requirements:</h5>
            <ul className="space-y-1">
              {assessment.performanceTask.requirements.map((req, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      
      {/* Milestones */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Key Milestones</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {assessment.milestones.map((milestone) => (
            <Card key={milestone.id} className="border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center justify-between">
                  <span>{milestone.title}</span>
                  <Badge variant="outline">Day {milestone.day}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {milestone.description}
                </p>
                <ul className="space-y-1">
                  {milestone.criteria.map((criterion, index) => (
                    <li key={index} className="text-xs flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Rubric Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Assessment Rubric</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assessment.rubric.map((criteria, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{criteria.name}</h4>
                  <Badge variant="secondary">{criteria.weight}</Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="space-y-1">
                    <div className="font-medium text-green-700">Exemplary</div>
                    <p className="text-muted-foreground">{criteria.exemplary}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium text-yellow-700">Proficient</div>
                    <p className="text-muted-foreground">{criteria.proficient}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium text-red-700">Developing</div>
                    <p className="text-muted-foreground">{criteria.developing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}