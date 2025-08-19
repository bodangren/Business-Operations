import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Target, ArrowRight, Trophy, BookOpen } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[5] // Closing phase

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit05Data} 
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Data Validation Mastery Complete - Building Your Future
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              {/* Achievement Celebration */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  From Basic Calculator to Bulletproof Business System
                </h2>
                
                <p className="text-lg leading-relaxed">
                  Congratulations! You've transformed from someone who builds basic Excel calculators 
                  into someone who designs professional, bulletproof business systems. The data validation 
                  and conditional formatting skills you've mastered represent a fundamental shift in 
                  thinking—from reactive problem-solving to proactive problem prevention.
                </p>

                <p className="text-lg leading-relaxed">
                  Sarah's $3,200 mistake taught you that accuracy alone isn't enough in business. 
                  Professional systems must be reliable, user-friendly, and designed to prevent errors 
                  before they can cause damage. These are the same principles that separate successful 
                  businesses from those that struggle with operational problems.
                </p>
              </div>

              {/* Learning Synthesis */}
              <Card className="border-indigo-200 bg-indigo-50 my-6">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    What You've Accomplished
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-800 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technical Mastery:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Advanced Data Validation with business rules</li>
                        <li>Conditional Formatting for visual error alerts</li>
                        <li>Multi-layer validation system design</li>
                        <li>Professional error prevention strategies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Business Thinking:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Risk assessment and prevention planning</li>
                        <li>User experience and system reliability design</li>
                        <li>Professional standards and investor confidence</li>
                        <li>Systematic approach to operational excellence</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Connection to Unit Driving Question */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">
                  Answering the Unit's Essential Question
                </h3>
                
                <p className="text-lg leading-relaxed">
                  <strong>"How can a small business owner predict payroll cash-outs and still make rent on time?"</strong>
                </p>

                <p className="text-lg leading-relaxed">
                  The bulletproof validation system you've built is a critical foundation for answering 
                  this question. Before Sarah can predict cash flow timing, she needs to trust that her 
                  payroll calculations are accurate and error-free. The validation features you've mastered 
                  ensure that every paycheck calculation is correct, providing the reliable foundation 
                  needed for cash flow forecasting and business growth.
                </p>
              </div>

              {/* Preview of Next Lesson */}
              <Card className="border-indigo-200 bg-indigo-50 my-6">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Coming Next: Scaling to Multi-Employee Systems
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-800 space-y-3">
                  <p>
                    Your bulletproof single-employee calculator is ready, but Sarah's business is growing. 
                    In the next lesson, you'll learn to scale your validation system to handle multiple 
                    employees efficiently using:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>XLOOKUP functions</strong> for employee data management</li>
                    <li><strong>Dynamic validation rules</strong> that adapt to different employee types</li>
                    <li><strong>Bilingual pay stub generation</strong> with data validation</li>
                    <li><strong>Bank reconciliation systems</strong> with error-checking</li>
                  </ul>
                  <p className="font-semibold">
                    The validation foundation you've built today will be essential for managing the 
                    complexity of a growing business.
                  </p>
                </CardContent>
              </Card>

              {/* Professional Development Reflection */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">
                  Your Professional Growth Journey
                </h3>
                
                <p className="text-lg leading-relaxed">
                  Take a moment to reflect on how far you've come. You started this lesson understanding 
                  basic Excel formulas. You're finishing it as someone who thinks like a professional 
                  system designer—someone who anticipates problems, designs solutions, and builds 
                  systems that support business growth.
                </p>

                <p className="text-lg leading-relaxed">
                  These aren't just Excel skills. They're professional problem-solving and systems 
                  thinking skills that will serve you in any career path you choose.
                </p>
              </div>

              {/* CAP Framework Reflection */}
              <div className="mt-8">
                <ReflectionJournal />
              </div>

              {/* Resources for Continued Learning */}
              <Card className="border-indigo-200 bg-indigo-50 my-6">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Continue Building Your Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-800 space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Practice Opportunities:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Apply validation rules to other business scenarios (inventory, sales, budgeting)</li>
                      <li>Design error-checking systems for family budgets or personal finance</li>
                      <li>Help local businesses or organizations improve their Excel systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Topics to Explore:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Custom data validation formulas with complex business rules</li>
                      <li>Dynamic conditional formatting that adapts to changing data</li>
                      <li>Integration with other Microsoft Office applications</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Final Achievement Recognition */}
              <Alert className="border-indigo-200 bg-indigo-50 my-6">
                <Target className="h-4 w-4 text-indigo-600" />
                <AlertDescription className="text-indigo-800">
                  <strong>Achievement Unlocked:</strong> You've mastered professional data validation 
                  and error prevention—skills that demonstrate systematic thinking and operational 
                  excellence. You're now ready to tackle the advanced payroll modeling challenges 
                  that await in the next lessons of your PayDay Simulator journey.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter
        unit={unit05Data}
        lesson={lesson04Data}
        phase={currentPhase} 
        phases={lesson04Phases}
      />
    </div>
  )
}