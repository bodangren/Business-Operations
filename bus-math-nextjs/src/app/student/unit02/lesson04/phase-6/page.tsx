import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight, Trophy, Rocket, Users } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Closing
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Tables Mastery Complete: Building Your Automated Future
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Synthesize your Excel Tables learning and prepare for advanced month-end automation in the lessons ahead.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Learning Synthesis */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Trophy className="h-6 w-6" />
                What You've Accomplished
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  Congratulations! You've just mastered the foundation skills that separate amateur 
                  spreadsheet users from professional business automation specialists. Let's reflect 
                  on the powerful capabilities you now possess.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-900">💼 Technical Mastery Achieved:</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Excel Tables Creation:</strong> Build self-expanding data structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Structured References:</strong> Write formulas that never break</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>SUMIF Mastery:</strong> Automate conditional calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Named Ranges:</strong> Create readable, maintainable systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Error Prevention:</strong> Design robust, professional models</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-green-900">🚀 Business Impact Understanding:</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Time Efficiency:</strong> Transform days of work into hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Scalability:</strong> Build systems that grow with business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Professional Standards:</strong> Meet investor expectations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Quality Assurance:</strong> Implement error-checking protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Collaboration:</strong> Design user-friendly interfaces</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 p-6 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-900 mb-3">Sarah's Transformation Story:</h4>
                <blockquote className="text-green-800 italic mb-2">
                  "Before learning Excel Tables, I spent entire weekends fixing broken formulas and updating 
                  ranges manually. Now, adding new transactions is as simple as typing in a new row. My 
                  month-end procedures that used to take 16 hours now take less than 2 hours, and I can 
                  actually trust my numbers when I present to investors."
                </blockquote>
                <p className="text-sm text-green-700">— Sarah Chen, TechStart Solutions</p>
              </div>
            </CardContent>
          </Card>

          {/* Connection to Unit Challenge */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                Connection to the Month-End Wizard Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-blue-800">
                <p>
                  Remember Unit 2's driving question: <em>"What automation can cut our month-end closing time 
                  from two days to two hours without sacrificing GAAP accuracy?"</em> You've just built the 
                  foundation that makes this ambitious goal achievable.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 text-center">
                  <div className="text-2xl text-blue-600 mb-2">📊</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Foundation Built</h4>
                  <p className="text-sm text-blue-800">
                    Excel Tables and SUMIF functions provide the data structure and calculation 
                    engine for automated month-end procedures.
                  </p>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 text-center">
                  <div className="text-2xl text-blue-600 mb-2">⚡</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Next: Automation</h4>
                  <p className="text-sm text-blue-800">
                    Lesson 5 will add VBA macros and user interfaces to create the complete 
                    Month-End Wizard system.
                  </p>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 text-center">
                  <div className="text-2xl text-blue-600 mb-2">🎯</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Goal: 2 Hours</h4>
                  <p className="text-sm text-blue-800">
                    With Excel Tables handling data expansion and SUMIF automating calculations, 
                    the 2-hour target becomes realistic.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reflection Journal */}
          <ReflectionJournal />

          {/* Looking Ahead */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <ArrowRight className="h-6 w-6" />
                Looking Ahead: Your Automation Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-purple-800">
                <p>
                  You've completed the foundational layer of professional Excel automation. Here's 
                  what's coming next in your journey to building the complete Month-End Wizard:
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-100 p-6 rounded-lg border border-purple-300">
                    <h4 className="font-semibold text-purple-900 mb-3">🔧 Lesson 5: Advanced Automation</h4>
                    <ul className="text-sm text-purple-800 space-y-2">
                      <li>• VBA macros for one-click month-end processing</li>
                      <li>• User-friendly button interfaces</li>
                      <li>• Advanced error-checking and validation</li>
                      <li>• Professional formatting automation</li>
                      <li>• Complete Month-End Wizard prototype</li>
                    </ul>
                  </div>

                  <div className="bg-purple-100 p-6 rounded-lg border border-purple-300">
                    <h4 className="font-semibold text-purple-900 mb-3">🎤 Lessons 6-10: Mastery & Presentation</h4>
                    <ul className="text-sm text-purple-800 space-y-2">
                      <li>• Professional documentation and user guides</li>
                      <li>• System testing and quality assurance</li>
                      <li>• Innovation Fair presentation preparation</li>
                      <li>• Live demonstration to authentic audiences</li>
                      <li>• Portfolio development and reflection</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-purple-300">
                  <h4 className="font-semibold text-purple-900 mb-3">💡 Skills That Transfer Beyond This Unit:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• <strong>Unit 3:</strong> Financial statement automation</li>
                      <li>• <strong>Unit 4:</strong> Statistical analysis dashboards</li>
                      <li>• <strong>Unit 5:</strong> Payroll calculation systems</li>
                      <li>• <strong>Unit 6:</strong> Cost-volume-profit analysis tools</li>
                    </ul>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• <strong>Unit 7:</strong> Asset tracking and depreciation</li>
                      <li>• <strong>Unit 8:</strong> Comprehensive financial modeling</li>
                      <li>• <strong>Capstone:</strong> Investor-ready business models</li>
                      <li>• <strong>Future Career:</strong> Professional automation specialist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Celebrating Success */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <Rocket className="h-6 w-6" />
                Celebrating Your Professional Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-yellow-800">
                <p>
                  Take a moment to appreciate the significant professional skills you've developed. 
                  The Excel Tables and SUMIF mastery you've achieved is directly applicable to 
                  real-world business challenges and career opportunities.
                </p>
              </div>

              <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-300">
                <h4 className="font-semibold text-yellow-900 mb-4 text-center">🏆 Achievement Unlocked: Excel Automation Specialist</h4>
                
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl text-yellow-600 mb-2">📈</div>
                    <div className="font-semibold text-yellow-900">Efficiency Expert</div>
                    <p className="text-xs text-yellow-700">Can reduce manual processes by 75%+</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl text-yellow-600 mb-2">⚙️</div>
                    <div className="font-semibold text-yellow-900">System Builder</div>
                    <p className="text-xs text-yellow-700">Creates scalable automation solutions</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl text-yellow-600 mb-2">💼</div>
                    <div className="font-semibold text-yellow-900">Business Ready</div>
                    <p className="text-xs text-yellow-700">Meets professional industry standards</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-yellow-700 font-medium">
                  You're now equipped with skills that many business professionals spend years developing. 
                  These capabilities will serve you throughout your academic and professional career!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Community Connection */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <Users className="h-6 w-6" />
                Share Your Success with the Community
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-indigo-800">
                <p>
                  Your Excel Tables mastery is something to be proud of and share. Consider how you 
                  might help others in your learning community and beyond.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-900">📚 Peer Support Opportunities:</h4>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Help classmates troubleshoot Excel Tables issues</li>
                    <li>• Share your best SUMIF formula examples</li>
                    <li>• Mentor students in earlier lessons</li>
                    <li>• Lead study groups for upcoming assessments</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-900">🌟 Real-World Applications:</h4>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Help family members organize their finances</li>
                    <li>• Volunteer to automate processes for local nonprofits</li>
                    <li>• Create tools for student organizations</li>
                    <li>• Build portfolio examples for future internships</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-100 p-4 rounded border border-indigo-300 text-center">
                <p className="text-sm text-indigo-700">
                  <strong>Remember:</strong> The best way to solidify your learning is to teach others. 
                  Look for opportunities to share your Excel automation expertise!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}