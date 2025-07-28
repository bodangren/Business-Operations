import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Wrench, BarChart3 } from "lucide-react"

interface UnitOverviewProps {
  objectives: {
    content: string[]
    skills: string[]
    deliverables: string[]
  }
}

export function UnitOverview({ objectives }: UnitOverviewProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Unit Overview</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-blue-600" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {objectives.content.map((objective, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Wrench className="h-5 w-5 text-orange-600" />
              Tools & Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {objectives.skills.map((skill, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Final Deliverables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {objectives.deliverables.map((deliverable, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}