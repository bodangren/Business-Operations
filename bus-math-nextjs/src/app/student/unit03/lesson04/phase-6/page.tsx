import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowRight, Lightbulb, Target } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[5]; // Closing phase

export default function Unit03Lesson04Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Excel Mastery Complete - Building Your Professional Future
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                From Excel Crisis to Professional Excellence: Your Transformation Journey
              </h1>
              
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-200 mb-8">
                <p className="text-lg leading-relaxed text-indigo-900">
                  You've just completed the same transformational journey that took Sarah from a devastating investor meeting 
                  to securing major funding and client contracts. The INDEX/MATCH and named range techniques you've mastered 
                  represent more than Excel skills—they're the foundation of professional competence that opens doors in the 
                  business world. Let's celebrate your achievement and look ahead to how these skills will serve your future.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Professional Excel Arsenal
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                In just one lesson, you've acquired the advanced Excel skills that separate professional financial modelers 
                from amateur spreadsheet users. These aren't just functions—they're the building blocks of systems that 
                handle millions of dollars in business decisions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 text-lg">✅ Technical Skills Mastered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li><strong>INDEX/MATCH Functions:</strong> Robust, flexible lookup formulas</li>
                      <li><strong>Named Ranges:</strong> Professional formula documentation</li>
                      <li><strong>Dynamic Formulas:</strong> Self-updating calculation systems</li>
                      <li><strong>Error Handling:</strong> Bulletproof professional presentations</li>
                      <li><strong>Pattern Matching:</strong> Advanced account categorization</li>
                      <li><strong>Multi-Period Analysis:</strong> Trend and growth calculations</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800 text-lg">🎯 Professional Competencies Developed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li><strong>Investor-Ready Modeling:</strong> Wall Street quality standards</li>
                      <li><strong>System Thinking:</strong> Building maintainable business tools</li>
                      <li><strong>Quality Control:</strong> Professional presentation standards</li>
                      <li><strong>Technical Communication:</strong> Self-documenting formulas</li>
                      <li><strong>Problem Solving:</strong> Complex business scenario analysis</li>
                      <li><strong>Attention to Detail:</strong> Error-free professional output</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sarah's Success: The Power of Professional Standards
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Sarah's transformation didn't happen by accident. When she committed to learning professional-grade Excel techniques, 
                she was making a strategic investment in her business credibility. The results speak for themselves:
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3 text-xl flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Sarah's Measurable Business Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Financial Results:</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Secured $50,000 line of credit after model rebuild</li>
                      <li>• Landed three major clients through investor referrals</li>
                      <li>• Reduced monthly reporting time from 8 hours to 30 minutes</li>
                      <li>• Increased investor confidence and follow-up meetings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Professional Recognition:</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Invited to present at local entrepreneur meetups</li>
                      <li>• Asked to mentor other startup founders on financial modeling</li>
                      <li>• Featured in business journal article on financial best practices</li>
                      <li>• Recruited for corporate board advisory position</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Career Advantage: Where These Skills Lead
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                The INDEX/MATCH mastery you've developed isn't just about this unit—it's about positioning yourself for 
                career opportunities that require analytical sophistication and technical competence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800 text-lg">💼 Career Paths</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li><strong>Financial Analyst:</strong> Investment banking, corporate finance</li>
                      <li><strong>Management Consultant:</strong> Strategy firms, business optimization</li>
                      <li><strong>Entrepreneur:</strong> Startup founder with financial credibility</li>
                      <li><strong>Business Analyst:</strong> Data-driven decision making roles</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-800 text-lg">🎓 Academic Readiness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-700 text-sm">
                      <li><strong>College Business Courses:</strong> Advanced spreadsheet modeling</li>
                      <li><strong>Internship Applications:</strong> Technical skills differentiation</li>
                      <li><strong>Case Competitions:</strong> Professional presentation standards</li>
                      <li><strong>Research Projects:</strong> Advanced data analysis capabilities</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-teal-200 bg-teal-50">
                  <CardHeader>
                    <CardTitle className="text-teal-800 text-lg">🚀 Immediate Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-teal-700 text-sm">
                      <li><strong>Part-time Jobs:</strong> Bookkeeping, data entry roles</li>
                      <li><strong>Family Business:</strong> Financial system improvements</li>
                      <li><strong>School Projects:</strong> Advanced data analysis techniques</li>
                      <li><strong>Personal Finance:</strong> Sophisticated budgeting systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Looking Ahead: Lesson05 Advanced Automation
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Your INDEX/MATCH foundation has prepared you for lesson05, where you'll learn to automate entire financial 
                processes. You'll build conditional formatting systems that catch errors automatically, create data validation 
                rules that prevent mistakes before they happen, and develop dashboard visualizations that turn data into insights.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                <h3 className="font-semibent text-blue-900 mb-3 text-xl flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Preview: What's Coming Next
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Lesson05 - Conditional Formatting & Error Checking:</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Visual error detection systems that highlight problems automatically</li>
                      <li>• Trial balance validation that prevents unbalanced entries</li>
                      <li>• Professional color-coding standards for financial statements</li>
                      <li>• Dashboard warning systems for key performance indicators</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Building on Your INDEX/MATCH Skills:</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Conditional formatting rules that use your dynamic formulas</li>
                      <li>• Error checking systems that validate INDEX/MATCH results</li>
                      <li>• Dashboard indicators that leverage your named ranges</li>
                      <li>• Integrated systems that combine all your new skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReflectionJournal />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Key Learning Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-800 mb-4">
                Reflect on these transformational insights from your Excel mastery journey:
              </p>
              <ul className="list-disc list-inside space-y-2 text-indigo-700 text-sm">
                <li>Professional Excel skills signal overall business competence to investors</li>
                <li>Technical excellence creates confidence in your management capabilities</li>
                <li>Dynamic systems save time and reduce errors in growing businesses</li>
                <li>Advanced functions like INDEX/MATCH are industry standards, not optional</li>
                <li>Named ranges and error handling separate amateur from professional work</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Connecting to Unit Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                Your INDEX/MATCH mastery directly supports Unit 3's driving question:
              </p>
              <blockquote className="text-green-700 italic border-l-4 border-green-400 pl-4 mb-4">
                "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?"
              </blockquote>
              <p className="text-green-700 text-sm">
                The dynamic formulas you've built create the "flow" mechanism that transforms trial balance data into 
                trustworthy financial statements automatically. This technical foundation enables the integrated 
                three-statement storyboard you'll complete in upcoming lessons.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 max-w-4xl mx-auto">
          <h3 className="font-semibold text-indigo-900 mb-2 text-xl flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Congratulations: You've Joined the Professional Ranks
          </h3>
          <p className="text-indigo-800 leading-relaxed">
            Today you've achieved something significant: you've mastered the same Excel techniques used by Wall Street analysts, 
            management consultants, and successful entrepreneurs worldwide. The INDEX/MATCH and named range skills you've developed 
            aren't just academic exercises—they're the professional tools that will serve you throughout your business career. 
            As you continue building your three-statement financial storyboard, remember that each formula you write with these 
            techniques is a step toward the kind of technical excellence that impresses investors, employers, and business partners.
          </p>
        </div>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  );
}