import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Target, 
  CheckCircle, 
  BookOpen, 
  Clock,
  Users,
  FileText,
  TrendingUp
} from "lucide-react"
import { UnitOverview as UnitOverviewType } from "@/types/lesson-plan"

interface UnitOverviewProps {
  unitOverview: UnitOverviewType
}

export function UnitOverviewComponent({ unitOverview }: UnitOverviewProps) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Unit {unitOverview.unitNumber}: {unitOverview.unitTitle}
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          {unitOverview.description}
        </p>
        
        {/* Unit Meta */}
        <div className="flex flex-wrap gap-4 p-4 bg-slate-50 dark:bg-slate-950/20 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span><strong>Duration:</strong> {unitOverview.meta.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span><strong>Grade Level:</strong> {unitOverview.meta.gradeLevel}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span><strong>Course:</strong> {unitOverview.meta.course}</span>
          </div>
        </div>
      </header>

      {/* Essential Question */}
      <section className="mb-8">
        <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-purple-800 dark:text-purple-200 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Essential Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-700 dark:text-purple-300 italic text-lg">
              {unitOverview.essentialQuestion}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Learning Targets */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-red-600" />
          Learning Targets
        </h2>
        
        <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-red-800 dark:text-red-200">
              Students will be able to...
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {unitOverview.learningTargets.map((target, index) => (
                <li key={index} className="flex items-start gap-2 text-red-700 dark:text-red-300">
                  <span className="mt-1">•</span>
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Skills & Assessment Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-blue-600" />
          Skills & Assessment Overview
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                Excel Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {unitOverview.excelSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Business Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {unitOverview.businessSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-orange-600" />
              Key Assessments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {unitOverview.keyAssessments.map((assessment, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/10 rounded-lg">
                  <Badge variant="secondary">Assessment {index + 1}</Badge>
                  <span className="text-orange-700 dark:text-orange-300">{assessment}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Capstone Connection */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Connection to Capstone Project</h2>
        
        <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-green-800 dark:text-green-200">
              How This Unit Builds Toward Semester 2
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 dark:text-green-300">
              {unitOverview.capstoneConnection}
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}