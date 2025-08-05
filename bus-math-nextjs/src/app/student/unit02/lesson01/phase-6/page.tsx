import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Button } from "@/components/ui/button"
import { Lightbulb, ArrowRight, Target, CheckCircle } from "lucide-react"

export default function Phase6Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 6)!

  const reflectionPrompts = [
    {
      id: 'automation-understanding',
      prompt: 'Reflect on Sarah\'s "weekend nightmare" experience. What did this teach you about the hidden costs of manual processes in business operations? Connect this to your own experiences with repetitive tasks.',
      category: 'courage' as const,
      placeholder: 'Think about how Sarah had the courage to confront her inefficient processes and seek solutions...'
    },
    {
      id: 'competitive-advantage',
      prompt: 'Marcus Rodriguez told Sarah that automation creates competitive advantage beyond just time savings. Based on this lesson, explain how automation can help a business compete more effectively in their market.',
      category: 'adaptability' as const,
      placeholder: 'Consider how businesses must adapt their processes to stay competitive...'
    },
    {
      id: 'personal-application',
      prompt: 'Think about your future career goals. What manual processes in your field of interest could benefit from automation? How would you identify and prioritize these opportunities?',
      category: 'persistence' as const,
      placeholder: 'Reflect on how persistent problem-solving leads to innovative solutions...'
    },
    {
      id: 'entrepreneurial-mindset',
      prompt: 'Sarah turned her frustrating problem into an innovative solution. What does this teach you about the entrepreneurial mindset? How can problems become opportunities for innovation?',
      category: 'courage' as const,
      placeholder: 'Describe how entrepreneurial courage transforms problems into opportunities...'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        {/* Lesson Synthesis */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Closing: Synthesis & Reflection
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                You've completed the first lesson of your Month-End Wizard journey! Let's synthesize what you've learned and reflect on how these insights will guide your automation project and future entrepreneurial thinking.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Insights from Sarah's Journey</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Problems are Opportunities:</strong> Sarah's "weekend nightmare" became the inspiration for her automation solution</li>
                  <li>• <strong>Time is the Ultimate Asset:</strong> Manual processes waste the entrepreneur's most valuable resource</li>
                  <li>• <strong>Scalability Requires Systems:</strong> Growing businesses need automated processes to handle increased complexity</li>
                  <li>• <strong>Automation Creates Competitive Advantage:</strong> Beyond time savings, automation enables better decisions and professional credibility</li>
                </ul>
              </div>

              <p className="text-base leading-relaxed">
                These principles aren't just about accounting—they apply to any business process that can be systematized and improved. As you build your Month-End Wizard, you're developing skills that will serve you throughout your entrepreneurial career.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Learning Journey Reflection */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <ReflectionJournal
              unitTitle="Automation Analysis & Business Process Improvement"
              prompts={reflectionPrompts}
            />
          </CardContent>
        </Card>

        {/* Preview of Coming Lessons */}
        <Card className="border-amber-200 bg-amber-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <ArrowRight className="h-6 w-6" />
              Looking Ahead: Your Month-End Wizard Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-amber-700 leading-relaxed">
                This lesson established the foundation for your automation project. In the coming lessons, you'll learn the technical skills needed to build your own Month-End Wizard and experience the satisfaction of transforming manual frustration into automated efficiency.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Coming Next: Technical Skills
                  </h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Accrual accounting principles and GAAP compliance</li>
                    <li>• Straight-line depreciation calculations</li>
                    <li>• Closing entries and trial balance automation</li>
                    <li>• Excel macros and VBA programming</li>
                    <li>• User interface design for business tools</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Your Final Deliverable
                  </h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Fully functional Month-End Wizard automation</li>
                    <li>• Time-to-close under 2 hours (vs. Sarah's 2 days)</li>
                    <li>• Professional presentation to business audience</li>
                    <li>• Innovation Fair demonstration</li>
                    <li>• Real-world solution portfolio piece</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  🚀 <strong>Your Automation Adventure Begins:</strong> You now understand why automation matters. In Lesson 2, you'll start building the technical knowledge to create your own business-changing solution.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-indigo-200 bg-indigo-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-indigo-800">Ready for the Next Challenge?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-indigo-700 leading-relaxed">
                You've successfully completed Lesson 1 and demonstrated your understanding of automation principles. You're ready to begin the technical journey of building your Month-End Wizard.
              </p>

              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-indigo-800 font-medium">What you've accomplished:</p>
                  <ul className="text-indigo-700 text-sm space-y-1">
                    <li>✅ Analyzed process bottlenecks and automation opportunities</li>
                    <li>✅ Understood the business case for automation investment</li>
                    <li>✅ Applied analytical skills to new business scenarios</li>
                    <li>✅ Connected automation concepts to competitive advantage</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button 
                    asChild 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3"
                  >
                    <a href="/student/unit02/lesson02">
                      Continue to Lesson 2: Core Concepts
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm font-medium">
                  💡 <strong>Teacher Note:</strong> Students should complete their reflection journal entries before moving to Lesson 2. This reflection will inform their approach to the technical automation work ahead.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}