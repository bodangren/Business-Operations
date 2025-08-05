import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { ArrowRight, CheckCircle, Lightbulb, Target } from "lucide-react"
import Link from "next/link"
import { lesson01Data, unit01Data, lesson01Phases } from "../lesson-data"

export default function Phase6Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 6)!

  const reflectionPrompts = [
    {
      id: 'connection',
      category: 'courage' as const,
      prompt: 'How does Sarah\'s challenge connect to your own experiences with organization and planning?',
      placeholder: 'Think about times when poor organization created problems for you or someone you know...'
    },
    {
      id: 'investor_thinking',
      category: 'adaptability' as const,
      prompt: 'What was most surprising to you about thinking like an investor? What would you look for if you were investing your own money?',
      placeholder: 'Consider what would make you confident in someone else\'s business...'
    },
    {
      id: 'business_insight',
      category: 'persistence' as const,
      prompt: 'What is the most important insight you gained about professional business management today?',
      placeholder: 'Think about what separates successful businesses from struggling ones...'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Lesson Synthesis */}
          <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-indigo-600 text-white">Closing</Badge>
                <CardTitle className="text-indigo-800 dark:text-indigo-200">
                  Synthesis: The Foundation for Sarah's Smart Ledger Journey
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-indigo max-w-none">
                <p className="text-lg leading-relaxed">
                  Today you've experienced the exact challenge that drives our entire unit: Sarah's need for a 
                  trustworthy, professional financial management system. You've seen how even a talented entrepreneur 
                  with great client success can face serious business risks from poor record-keeping.
                </p>
                
                <p className="text-lg leading-relaxed">
                  More importantly, you've learned to think like an investor—understanding that financial credibility 
                  isn't just about accuracy, it's about demonstrating the professional systems and controls that give 
                  stakeholders confidence in a business's management and growth potential.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Learning Outcomes */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                What You've Accomplished Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800">Business Model Understanding</h4>
                      <p className="text-sm text-green-700">
                        You understand TechStart Solutions' services, revenue model, and the specific transactions 
                        that Sarah needs to track for business success.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800">Risk Analysis Skills</h4>
                      <p className="text-sm text-green-700">
                        You can identify and analyze the specific business risks that manual record-keeping creates 
                        for operations, compliance, and growth.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800">Investor Perspective</h4>
                      <p className="text-sm text-green-700">
                        You understand what investors look for in financial records and why "clean books" are 
                        essential for building stakeholder confidence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800">Solution Framework</h4>
                      <p className="text-sm text-green-700">
                        You grasp the concept of a "self-auditing" ledger and how it addresses the core challenges 
                        of transaction categorization and mathematical accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Journey Ahead */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                The Smart Ledger Journey: What's Coming Next
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Now that you understand the problem and the requirements, you're ready to start building the solution. 
                  Here's the exciting learning journey ahead:
                </p>

                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-300 flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Next Lessons: Core Accounting Principles</h4>
                      <p className="text-sm text-blue-700">
                        Learn the fundamental language of business: the Accounting Equation, debit and credit rules, 
                        and how every transaction maintains perfect mathematical balance.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-blue-300 flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Lightbulb className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Excel Mastery: Building the Smart System</h4>
                      <p className="text-sm text-blue-700">
                        Master Excel Tables, SUMIF functions, and conditional formatting to create Sarah's 
                        self-auditing ledger with automatic error-checking capabilities.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-blue-300 flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Investor Presentation: Demonstrating Clean Books</h4>
                      <p className="text-sm text-blue-700">
                        Present your completed Smart Ledger system to real business professionals, demonstrating 
                        how it solves Sarah's challenges and builds investor confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reflection Journal */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Learning Reflection: Connect Today's Insights to Your Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal 
                prompts={reflectionPrompts}
                unitTitle="Lesson 1 Reflection: Sarah's Challenge and Business Credibility"
              />
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Ready to Build the Solution?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  You've identified the problem, analyzed the requirements, and thought like an investor. 
                  Now it's time to start building Sarah's Smart Ledger system using the fundamental 
                  principles of accounting and the power of Excel automation.
                </p>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-amber-700">
                    <strong>Coming up in Lesson 2:</strong> The Accounting Equation and the language of business
                  </div>
                  
                  <Button asChild className="bg-amber-600 hover:bg-amber-700">
                    <Link href="/student/unit01/lesson02" className="flex items-center gap-2">
                      Continue to Lesson 2
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Unit Progress Reminder */}
          <Card className="border-gray-200 bg-gray-50 dark:bg-gray-950/10">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">
                Your Unit 1 Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    <strong>Lesson 1 Complete:</strong> Sarah's Challenge & Business Credibility ✓
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Ready to learn the Accounting Equation and start building the Smart Ledger
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-800">1/10</div>
                  <div className="text-xs text-gray-500">Lessons Complete</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}