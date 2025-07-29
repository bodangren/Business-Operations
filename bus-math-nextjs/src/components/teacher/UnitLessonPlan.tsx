import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Target, 
  CheckCircle, 
  BookOpen, 
  Clock,
  Users,
  AlertTriangle,
  Lightbulb,
  Info,
  FileText,
  Settings,
  MessageSquare,
  Code,
  Flag,
  TrendingUp,
  Briefcase,
  GraduationCap
} from "lucide-react"
import { UnitLessonPlan } from "@/types/lesson-plan"

interface UnitLessonPlanProps {
  lessonPlan: UnitLessonPlan
}

export function UnitLessonPlanComponent({ lessonPlan }: UnitLessonPlanProps) {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Unit {lessonPlan.unitNumber}: {lessonPlan.unitTitle}
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          {lessonPlan.description}
        </p>
        
        {/* Unit Meta */}
        <div className="flex flex-wrap gap-4 p-4 bg-slate-50 dark:bg-slate-950/20 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span><strong>Duration:</strong> {lessonPlan.meta.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span><strong>Grade Level:</strong> {lessonPlan.meta.gradeLevel}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span><strong>Course:</strong> {lessonPlan.meta.course}</span>
          </div>
        </div>
      </header>

      {/* Stage 1: Desired Results */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-red-600" />
          Stage 1: Identify Desired Results
        </h2>
        
        {/* Essential Question */}
        <Card className="mb-6 border-purple-200 bg-purple-50 dark:bg-purple-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-purple-800 dark:text-purple-200">
              Essential Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-700 dark:text-purple-300 italic text-lg">
              {lessonPlan.essentialQuestion}
            </p>
          </CardContent>
        </Card>

        {/* Objectives */}
        <div className="space-y-6">
          {/* Enduring Understandings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Enduring Understandings</CardTitle>
              <CardDescription>Students will understand that...</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lessonPlan.objectives.enduring.map((understanding, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{understanding}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Knowledge & Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Students will know...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {lessonPlan.objectives.knowledge.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2 text-primary">
                      {category.category === 'content' ? 'Accounting Content' : 'Excel Technical Skills'}
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Students will be able to...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {lessonPlan.objectives.skills.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2 text-primary">
                      {category.category === 'content' ? 'Accounting Skills' : 'Excel Skills'}
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stage 2: Assessment Evidence */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-blue-600" />
          Stage 2: Determine Acceptable Evidence
        </h2>

        {/* Performance Task */}
        <Card className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
              Performance Task (Summative Assessment)
            </CardTitle>
            <CardDescription className="text-blue-700 dark:text-blue-300 font-medium">
              {lessonPlan.assessment.performanceTask.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-blue-700 dark:text-blue-300">
            <p className="mb-4"><strong>Scenario:</strong> {lessonPlan.assessment.performanceTask.scenario}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Performance Requirements:</h4>
              <ul className="space-y-1">
                {lessonPlan.assessment.performanceTask.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Authentic Context:</h4>
              <p>{lessonPlan.assessment.performanceTask.context}</p>
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Milestone Assessments (Formative)</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {lessonPlan.assessment.milestones.map((milestone, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    Milestone {index + 1}
                    <Badge variant="secondary">Day {milestone.day}</Badge>
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {milestone.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {milestone.criteria.map((criterion, critIndex) => (
                      <li key={critIndex} className="flex items-start gap-2">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rubric */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Success Criteria & Rubric</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-medium">Criteria</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-medium">Weight</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-medium">Exemplary (A)</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-medium">Proficient (B-C)</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-medium">Developing (D)</th>
                  </tr>
                </thead>
                <tbody>
                  {lessonPlan.assessment.rubric.map((criteria, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-900/50" : ""}>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">
                        {criteria.name}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">
                        {criteria.weight}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">
                        {criteria.exemplary}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">
                        {criteria.proficient}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3">
                        {criteria.developing}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Stage 3: Learning Plan */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-green-600" />
          Stage 3: Plan Learning Experiences and Instruction
        </h2>

        {/* Learning Sequence Overview */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Learning Sequence Overview</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {lessonPlan.learningPlan.overview.phases.map((phase, index) => (
              <Card key={index} className="text-center border-green-200 bg-green-50 dark:bg-green-950/10">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    {phase.title}
                  </h4>
                  <Badge variant="secondary" className="mb-3">{phase.days}</Badge>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Plans */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">Detailed Daily Plans</h3>
          
          {lessonPlan.learningPlan.dailyLessons.map((lesson, index) => (
            <DailyLessonCard key={index} lesson={lesson} />
          ))}
        </div>
      </section>

      {/* Assessment Strategies & Differentiation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Assessment Strategies & Differentiation</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Assessment Strategies */}
          <div className="space-y-6">
            {lessonPlan.assessmentStrategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strategy.strategies.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Differentiation */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Differentiation Support</h3>
            {lessonPlan.differentiation.map((support, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{support.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {support.strategies.map((strategy, stratIndex) => (
                      <li key={stratIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Required Resources & Materials</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {lessonPlan.resources.map((resource, index) => (
            <Card key={index} className="bg-slate-50 dark:bg-slate-950/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm">
                      {item.link ? (
                        <a href={item.link} className="text-primary hover:underline">
                          {item.name}
                        </a>
                      ) : (
                        <span><strong>{item.name.split(':')[0]}:</strong> {item.name.split(':').slice(1).join(':')}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Reflection & Continuous Improvement</h2>
        
        <div className="space-y-6">
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-amber-800 dark:text-amber-200">
                Post-Unit Reflection Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-amber-700 dark:text-amber-300">
                {lessonPlan.reflection.questions.map((question, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Collection for Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lessonPlan.reflection.dataCollection.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preparation for Next Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lessonPlan.reflection.nextUnitPrep.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Separate component for daily lesson cards
function DailyLessonCard({ lesson }: { lesson: any }) {
  const getCalloutIcon = (type: string) => {
    switch (type) {
      case 'tip': return <Lightbulb className="h-5 w-5" />
      case 'important': return <AlertTriangle className="h-5 w-5" />
      case 'definition': return <Info className="h-5 w-5" />
      case 'example': return <FileText className="h-5 w-5" />
      case 'reflection': return <MessageSquare className="h-5 w-5" />
      case 'technical': return <Code className="h-5 w-5" />
      case 'checkpoint': return <Flag className="h-5 w-5" />
      case 'strategy': return <TrendingUp className="h-5 w-5" />
      case 'professional': return <Briefcase className="h-5 w-5" />
      case 'assessment': return <GraduationCap className="h-5 w-5" />
      default: return <Info className="h-5 w-5" />
    }
  }

  const getCalloutColors = (type: string) => {
    switch (type) {
      case 'tip': return 'border-blue-200 bg-blue-50 dark:bg-blue-950/10 text-blue-800 dark:text-blue-200'
      case 'important': return 'border-red-200 bg-red-50 dark:bg-red-950/10 text-red-800 dark:text-red-200'
      case 'definition': return 'border-green-200 bg-green-50 dark:bg-green-950/10 text-green-800 dark:text-green-200'
      case 'example': return 'border-purple-200 bg-purple-50 dark:bg-purple-950/10 text-purple-800 dark:text-purple-200'
      case 'reflection': return 'border-amber-200 bg-amber-50 dark:bg-amber-950/10 text-amber-800 dark:text-amber-200'
      case 'technical': return 'border-slate-200 bg-slate-50 dark:bg-slate-950/10 text-slate-800 dark:text-slate-200'
      case 'checkpoint': return 'border-orange-200 bg-orange-50 dark:bg-orange-950/10 text-orange-800 dark:text-orange-200'
      case 'strategy': return 'border-teal-200 bg-teal-50 dark:bg-teal-950/10 text-teal-800 dark:text-teal-200'
      case 'professional': return 'border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10 text-indigo-800 dark:text-indigo-200'
      case 'assessment': return 'border-cyan-200 bg-cyan-50 dark:bg-cyan-950/10 text-cyan-800 dark:text-cyan-200'
      default: return 'border-gray-200 bg-gray-50 dark:bg-gray-950/10 text-gray-800 dark:text-gray-200'
    }
  }

  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="text-xl">Day {lesson.day}: {lesson.title}</CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span><strong>Focus:</strong> {lesson.focus}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {lesson.duration}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {lesson.activities.map((activity: any, index: number) => (
          <div key={index}>
            <h4 className="text-lg font-medium text-primary border-b border-gray-200 pb-2 mb-3">
              {activity.name} ({activity.duration})
            </h4>
            
            <p className="mb-3">{activity.description}</p>
            
            {activity.video && (
              <Card className="mb-4 border-purple-200 bg-purple-50 dark:bg-purple-950/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2 text-purple-800 dark:text-purple-200">
                    <FileText className="h-5 w-5" />
                    {activity.video.title} ({activity.video.duration})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 dark:text-purple-300">{activity.video.description}</p>
                  {activity.video.youtubeId && (
                    <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">
                      YouTube ID: {activity.video.youtubeId}
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {activity.interactiveActivities && (
              <div className="mb-4 space-y-2">
                <h5 className="font-medium text-primary">Interactive Activities:</h5>
                {activity.interactiveActivities.map((interactiveActivity: any, intIndex: number) => (
                  <Card key={intIndex} className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-orange-800 dark:text-orange-200">
                          {interactiveActivity.title}
                        </span>
                        <Badge variant="outline" className="text-orange-700 dark:text-orange-300">
                          {interactiveActivity.duration}
                        </Badge>
                      </div>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">
                        <strong>{interactiveActivity.type}:</strong> {interactiveActivity.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activity.callout && (
              <Card className={`mb-4 ${getCalloutColors(activity.callout.type)}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    {getCalloutIcon(activity.callout.type)}
                    {activity.callout.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{activity.callout.content}</p>
                  {activity.callout.items && (
                    <ul className="space-y-1">
                      {activity.callout.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            )}
            
            <ul className="space-y-2">
              {activity.details.map((detail: string, detailIndex: number) => (
                <li key={detailIndex} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        {lesson.materials.length > 0 && (
          <div>
            <h4 className="text-lg font-medium text-primary mb-3">Materials Needed</h4>
            <ul className="space-y-1">
              {lesson.materials.map((material: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span className="text-sm">{material}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}