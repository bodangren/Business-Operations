import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, BookOpen, Target } from "lucide-react"
import { Week } from "@/types/unit"

interface LearningSequenceProps {
  learningSequence: {
    weeks: Week[]
  }
}

export function LearningSequence({ learningSequence }: LearningSequenceProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Calendar className="h-6 w-6 text-purple-600" />
        Learning Sequence
      </h2>
      
      <div className="space-y-6">
        {learningSequence.weeks.map((week) => (
          <Card key={week.weekNumber} className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="bg-purple-100 text-purple-800">
                  Week {week.weekNumber}
                </Badge>
                <span>{week.title}</span>
              </CardTitle>
              <p className="text-muted-foreground">{week.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {week.days.map((day) => (
                  <div key={day.day} className="border-l-2 border-purple-200 pl-4 py-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Day {day.day}
                      </Badge>
                      <h4 className="font-medium">{day.focus}</h4>
                      {day.milestone && (
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-800">
                          <Target className="h-3 w-3 mr-1" />
                          Milestone
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <h5 className="font-medium text-muted-foreground mb-1 flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          Activities:
                        </h5>
                        <ul className="space-y-1 ml-4">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {day.resources.length > 0 && (
                        <div>
                          <h5 className="font-medium text-muted-foreground mb-1">Resources:</h5>
                          <div className="flex flex-wrap gap-1 ml-4">
                            {day.resources.map((resource, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {resource}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {day.milestone && (
                        <div className="mt-2 p-2 bg-yellow-50 rounded border-l-2 border-yellow-400">
                          <p className="text-xs font-medium text-yellow-800">
                            📍 {day.milestone}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}