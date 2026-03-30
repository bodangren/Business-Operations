import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Button } from "@/components/ui/button"
import { Lightbulb, ArrowRight, Target } from "lucide-react"

export default function Phase6Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 6)!

  const reflectionPrompts = [
    {
      id: 'closing-understanding',
      prompt: 'Reflect on Sarah\'s "weekend nightmare" experience. What did this teach you about hidden costs of delayed month-end closing? How might slow closing affect a business\'s ability to grow, make decisions, or access capital?',
      category: 'courage' as const,
      placeholder: 'Think about how Sarah had to confront her inefficient process and what it cost her...'
    },
    {
      id: 'scoreboard-meaning',
      prompt: 'The month-end close workflow scoreboard tracks timing, accuracy, and compliance. Which dimension do you think is most critical for a growing business? Why might different businesses prioritize different dimensions?',
      category: 'adaptability' as const,
      placeholder: 'Consider how different businesses might weigh speed vs. accuracy vs. compliance differently...'
    },
    {
      id: 'personal-application',
      prompt: 'Think about a business or organization you\'re familiar with (could be a job, family business, or volunteer group). What financial processes might they struggle to close on time? How would slow closing affect them?',
      category: 'persistence' as const,
      placeholder: 'Reflect on how closing challenges appear in different contexts and what they cost...'
    },
    {
      id: 'surface-vs-deep',
      prompt: 'What does it mean to distinguish between "surface activity" and "the deeper accounting problem"? How can you apply this thinking to other complex problems you encounter—not just in business?',
      category: 'courage' as const,
      placeholder: 'Describe how this distinction applies to problem-solving beyond accounting...'
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
              Closing: Month-End Close Workflow Formula
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                You've completed the launch lesson for Unit 2: Month-End Wizard. Let's lock in the key formula you'll use throughout this unit.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">The Month-End Close Workflow Formula</h3>
                <p className="text-blue-700 leading-relaxed mb-4">
                  <strong>Accruals + Deferrals + Adjusting Entries + Closing Entries = Complete Month-End Close</strong>
                </p>
                <p className="text-blue-600 text-sm">
                  Each component of this formula addresses a specific GAAP requirement: matching revenue to expenses, handling prepaid items, updating account balances, and preparing for the next period.
                </p>
              </div>

              <div className="space-y-4 my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What You Now Understand</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Founder Problem</h4>
                    <p className="text-green-700 text-sm">Sarah can't close her month quickly or accurately enough to support business decisions and stakeholder requests.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Month-End Close Workflow Scoreboard</h4>
                    <p className="text-green-700 text-sm">Timing (speed), Accuracy (error-free), and Compliance (GAAP adjustments complete).</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Business Impact of Slow Closing</h4>
                    <p className="text-green-700 text-sm">Delayed decisions, reduced stakeholder confidence, and missed opportunities for growth and capital.</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Surface vs. Deep Problem</h4>
                    <p className="text-green-700 text-sm">Cash ledger is surface solution; deep problem is need for accrual accounting workflow.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Journey Reflection */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <ReflectionJournal
              unitTitle="Month-End Closing Crisis & Launch"
              prompts={reflectionPrompts}
            />
          </CardContent>
        </Card>

        {/* Preview of Next Lesson */}
        <Card className="border-amber-200 bg-amber-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <ArrowRight className="h-6 w-6" />
              Coming Next: Accruals and Deferrals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-amber-700 leading-relaxed">
                In Lesson 2, you'll learn the first part of the month-end close workflow formula: <strong>Accruals and Deferrals</strong>. These are the adjusting entries that make accrual accounting work.
              </p>

              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  What You'll Learn in Lesson 2
                </h4>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li>• <strong>Accruals:</strong> Recording revenue when earned and expenses when incurred, even if cash hasn't changed hands</li>
                  <li>• <strong>Deferrals:</strong> Handling prepaid expenses as they're used and unearned revenue as it's earned</li>
                  <li>• <strong>Why These Matter:</strong> Without accruals and deferrals, financial statements don't show true business performance</li>
                  <li>• <strong>Accounting Practice:</strong> You'll practice identifying and recording accruals and deferrals in concrete business scenarios</li>
                </ul>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  🚀 <strong>Your Journey:</strong> After Lesson 2, you'll have mastered accruals and deferrals—essential building blocks for your complete month-end close workflow. Lessons 3 and 4 will teach you closing entries and the complete manual flow before you automate in later lessons.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-indigo-200 bg-indigo-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-indigo-800">Ready for Accruals and Deferrals?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-indigo-700 leading-relaxed">
                You've completed the launch lesson and established the founder problem and month-end close workflow scoreboard. You're ready to learn the technical accounting foundation in Lesson 2.
              </p>

              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-indigo-800 font-medium">What you've accomplished:</p>
                  <ul className="text-indigo-700 text-sm space-y-1">
                    <li>✅ Identified Sarah's founder problem</li>
                    <li>✅ Understood the month-end close workflow scoreboard</li>
                    <li>✅ Explored business impact of slow closing</li>
                    <li>✅ Distinguished surface activity from deeper problem</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button 
                    asChild 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3"
                  >
                    <a href="/student/unit02/lesson02">
                      Continue to Lesson 2: Accruals and Deferrals
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm font-medium">
                  💡 <strong>Remember:</strong> The month-end close workflow formula (Accruals + Deferrals + Adjusting Entries + Closing Entries) will guide everything you learn in this unit. Lesson 2 teaches you the first two terms.
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
