import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lightbulb, BookOpen, Target, Award } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"

export default function Phase6Page() {
  const currentPhase = lesson01Phases[5] // Closing phase

  const reflectionPrompts = [
    {
      id: 'courage-1',
      category: 'courage' as const,
      prompt: 'What was the most challenging concept today that required you to step outside your comfort zone and think like a business professional?',
      placeholder: 'Think about moments when you had to analyze complex financial scenarios or explain business concepts like an investor would...'
    },
    {
      id: 'adaptability-1',
      category: 'adaptability' as const,
      prompt: 'How did you adapt your thinking when you learned that different audiences (internal management vs. external investors) need information presented differently?',
      placeholder: 'Reflect on how your understanding of financial communication changed throughout the lesson...'
    },
    {
      id: 'persistence-1',
      category: 'persistence' as const,
      prompt: 'Describe a moment when the financial concepts felt overwhelming, but you kept working to understand the connections between the three statements.',
      placeholder: 'Consider times when you had to work through complex scenarios or persist through challenging assessment questions...'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Lesson Synthesis */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Lesson Synthesis: Your Financial Detective Journey
              </CardTitle>
              <CardDescription>
                Reflecting on today's learning and preparing for tomorrow's challenges
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Today you've taken the same crucial step that Sarah took when she realized her internal spreadsheets weren't enough. You've learned to think like a business professional who understands that <strong>different audiences need information in specific formats</strong>.
                </p>

                <p className="text-base leading-relaxed mb-4">
                  Just as Jennifer Kim guided Sarah through understanding the three-statement storyboard, you've developed the foundational knowledge to transform raw accounting data into professional financial statements that tell compelling business stories.
                </p>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-purple-800 mb-2">Today's Key Insights</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Integration is everything:</strong> The three financial statements work together as one storyboard, not separate reports</li>
                    <li>• <strong>Audience matters:</strong> External stakeholders need standardized formats that follow professional accounting principles</li>
                    <li>• <strong>Numbers tell stories:</strong> Financial data reveals business performance, stability, and cash management capabilities</li>
                    <li>• <strong>Professional communication:</strong> Learning to speak the language of investors and banks opens doors to growth opportunities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection to Sarah's Journey */}
          <Card className="border-purple-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Sarah's Success: The Result of Financial Literacy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Remember why Sarah needed to learn these skills? She had a huge opportunity—a regional retail chain needed a comprehensive e-commerce solution that could put TechStart Solutions on the map. But to handle a project of that scale, she needed a business line of credit.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Before: The Problem</h4>
                    <ul className="text-sm text-red-600 space-y-1">
                      <li>• Bank loan officer: "Where are your financial statements?"</li>
                      <li>• Investor: "I need to see real financial statements"</li>
                      <li>• Sarah felt unprepared and unprofessional</li>
                      <li>• Great opportunity at risk due to communication gap</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">After: The Success</h4>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Created integrated three-statement storyboard</li>
                      <li>• Secured the business line of credit</li>
                      <li>• Landed the major retail chain project</li>
                      <li>• Gained investor confidence and interest</li>
                    </ul>
                  </div>
                </div>

                <p className="text-base leading-relaxed">
                  <strong>The transformation was remarkable:</strong> Sarah went from feeling like "just a freelancer" to confident CEO who could communicate with banks and investors in their own language. This is the power of financial literacy—it opens doors to opportunities that would otherwise remain closed.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Looking Ahead */}
          <Card className="border-purple-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Tomorrow's Challenge: Building Your First Income Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Now that you understand <em>why</em> the three-statement storyboard matters and <em>how</em> it works as an integrated system, tomorrow you'll start building your own. We'll begin with the "plot"—constructing a professional Income Statement using advanced Excel formulas.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Tomorrow's Learning Preview</h4>
                  <p className="text-yellow-700 text-sm mb-2">You'll learn to transform raw trial balance data into professional financial statements using:</p>
                  <ul className="text-yellow-600 text-sm space-y-1 list-disc list-inside">
                    <li><strong>INDEX/MATCH formulas:</strong> Dynamic links that automatically update when data changes</li>
                    <li><strong>Professional formatting:</strong> Creating investor-ready presentation quality</li>
                    <li><strong>Revenue and expense categorization:</strong> Organizing data for maximum clarity</li>
                    <li><strong>Formula auditing:</strong> Building self-checking systems for accuracy</li>
                  </ul>
                </div>

                <p className="text-base leading-relaxed">
                  By the end of tomorrow's lesson, you'll have created the same type of Income Statement that helped Sarah demonstrate TechStart Solutions' profitability to the bank. Each lesson builds on the previous one, just like Sarah's journey from basic bookkeeping to sophisticated financial modeling.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CAP Reflection Journal */}
          <ReflectionJournal
            unitTitle="Unit 3 Lesson 1: Three-Statement Storyboard Introduction"
            prompts={reflectionPrompts}
          />

          {/* Preparation for Success */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Preparing for Tomorrow's Success
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                <strong>To be ready for tomorrow's Excel work, consider reviewing:</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Excel Skills Refresher</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Basic formula construction (=, cell references)</li>
                    <li>Understanding of VLOOKUP function concepts</li>
                    <li>Cell formatting and professional presentation</li>
                    <li>Creating clear headers and organization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Conceptual Preparation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Review your Unit 1 trial balance data</li>
                    <li>Think about revenue vs. expense categories</li>
                    <li>Consider what makes a report "professional"</li>
                    <li>Recall the accounting equation relationships</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Questions for tonight's reflection:</strong> How will you apply tomorrow's Excel skills to your own Unit 1 business venture? What story do you want your financial statements to tell about your business's potential?
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Closing Motivation */}
          <Card className="border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-green-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Your Journey to Financial Professional
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Every successful entrepreneur has a moment when they realize they need to speak the language of business professionals. Today, you've taken that crucial first step. You now understand why Sarah needed more than just good bookkeeping—she needed to communicate her business story in a way that banks and investors could understand and trust.
                </p>

                <p className="text-base leading-relaxed mb-4">
                  The skills you're building in this unit aren't just academic exercises. They're the same skills that:
                </p>

                <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                  <li>Help entrepreneurs secure funding for growth opportunities</li>
                  <li>Enable business owners to make data-driven strategic decisions</li>
                  <li>Build credibility with professional partners and stakeholders</li>
                  <li>Create transparency that builds trust with investors and lenders</li>
                </ul>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-700 text-sm font-semibold">
                    Tomorrow, you'll start building the actual tools that transformed Sarah from a freelancer into a confident CEO. The journey continues—and you're ready for the next challenge.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}