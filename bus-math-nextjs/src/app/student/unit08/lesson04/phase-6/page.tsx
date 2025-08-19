'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowRight, Star, Target, Lightbulb, Users } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";

const phase6 = lesson04Phases.find(p => p.sequence === 6)!;

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader unit={unit08Data} lesson={lesson04Data} phase={phase6} phases={lesson04Phases} />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              🎯 Phase 6: Closing
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                  Scenario Manager Mastery Complete: Your Investment-Grade Skills
                </h1>

                <Card className="border-green-200 bg-green-50 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Trophy className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-green-800 mb-2">Congratulations!</CardTitle>
                    <p className="text-green-700">You've mastered professional scenario modeling techniques</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-green-800">
                      Sarah Chen walks into her follow-up investor meeting with complete confidence. Her 
                      TechStart Solutions financial model can instantly answer any "what if" question the 
                      VCs might ask. More importantly, <strong>you've developed the same professional 
                      Excel skills that separate funded startups from rejected pitches.</strong>
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What You've Accomplished</h3>

                <p className="text-lg leading-relaxed">
                  Today's lesson has transformed you from a basic Excel user into someone who can build 
                  investment-grade financial models. These aren't just academic skills—they're the exact 
                  capabilities that venture capitalists, investment banks, and Fortune 500 companies expect 
                  from their analysts and entrepreneurs.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
                        <Target className="h-5 w-5" />
                        Technical Mastery Achieved
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-blue-800 space-y-2">
                        <li>✅ <strong>Excel Scenario Manager:</strong> Professional setup with changing cells, result tracking, and summary reports</li>
                        <li>✅ <strong>Advanced Functions:</strong> INDIRECT, INDEX/MATCH, and CHOOSE for dynamic modeling</li>
                        <li>✅ <strong>Data Tables:</strong> One and two-variable sensitivity analysis for investor presentations</li>
                        <li>✅ <strong>Professional Standards:</strong> Absolute references, named ranges, and error checking</li>
                        <li>✅ <strong>Office365 Compatibility:</strong> Cloud-based advanced modeling without VBA macros</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-purple-900 flex items-center gap-2 text-lg">
                        <Star className="h-5 w-5" />
                        Business Acumen Developed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-purple-800 space-y-2">
                        <li>✅ <strong>Investor Mindset:</strong> Understanding why VCs demand scenario analysis</li>
                        <li>✅ <strong>Risk Assessment:</strong> Modeling optimistic, realistic, and pessimistic business conditions</li>
                        <li>✅ <strong>Strategic Analysis:</strong> Advanced scenarios like competitive response and economic stress tests</li>
                        <li>✅ <strong>Communication Skills:</strong> Presenting complex financial models to non-experts</li>
                        <li>✅ <strong>Professional Confidence:</strong> Building models that withstand investor scrutiny</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Competitive Advantage You've Gained</h3>

                <p className="text-lg leading-relaxed">
                  Most business students graduate knowing basic Excel—SUM, AVERAGE, maybe a simple chart. 
                  But you now possess sophisticated financial modeling skills that most professionals learn 
                  on the job (if ever). This gives you a significant competitive advantage in internships, 
                  job interviews, and your eventual career.
                </p>

                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader>
                    <CardTitle className="text-amber-900 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Real-World Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 mb-4">
                      The scenario modeling skills you've mastered are used daily by professionals across industries:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-amber-100 p-3 rounded">
                        <h4 className="font-semibold text-amber-900 mb-2">Investment & Finance:</h4>
                        <ul className="text-xs text-amber-800 space-y-1">
                          <li>• VC associates modeling startup investment returns</li>
                          <li>• Investment bankers creating acquisition scenarios</li>
                          <li>• Corporate finance teams planning capital allocation</li>
                          <li>• Portfolio managers stress-testing investment strategies</li>
                        </ul>
                      </div>
                      <div className="bg-amber-100 p-3 rounded">
                        <h4 className="font-semibold text-amber-900 mb-2">Business Strategy:</h4>
                        <ul className="text-xs text-amber-800 space-y-1">
                          <li>• Management consultants analyzing client opportunities</li>
                          <li>• Startup founders pitching to investors</li>
                          <li>• Business development teams evaluating partnerships</li>
                          <li>• Strategic planners modeling market entry scenarios</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Connection to Unit 8's Driving Question</h3>

                <p className="text-lg leading-relaxed">
                  Remember our unit's essential question: <em>"Can we convince a micro-VC that our 
                  first-year financial model is robust enough to merit funding?"</em> Today's lesson 
                  has equipped you with a crucial piece of the answer. Professional scenario modeling 
                  proves to investors that you understand risk, have planned for uncertainty, and 
                  possess the analytical sophistication they expect from fundable entrepreneurs.
                </p>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-900 flex items-center gap-2">
                      <ArrowRight className="h-5 w-5" />
                      Looking Ahead: Lesson 5 Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-800 mb-3">
                      <strong>Next Up: Advanced Data Analysis & Sensitivity Modeling</strong>
                    </p>
                    <p className="text-purple-800 text-sm">
                      You've mastered basic scenario switching. In Lesson 5, you'll learn to build 
                      sophisticated sensitivity analysis with tornado charts, Monte Carlo simulations 
                      (using Excel's built-in tools), and create the kind of dynamic dashboards that 
                      make investors say "yes." Get ready to take your financial modeling to the absolute 
                      professional level that VCs expect from unicorn startups.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-900 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Your Growing Professional Network
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800 mb-3">
                      The skills you've developed connect you to a valuable professional community:
                    </p>
                    <div className="text-sm text-green-700 space-y-2">
                      <p>
                        <strong>LinkedIn Connections:</strong> You can now meaningfully network with financial 
                        analysts, startup founders, and VC professionals who use these exact techniques daily.
                      </p>
                      <p>
                        <strong>Internship Applications:</strong> When applications ask about Excel skills, you can 
                        specifically mention "advanced scenario modeling and sensitivity analysis" rather than 
                        generic "proficient in Excel."
                      </p>
                      <p>
                        <strong>Job Interview Confidence:</strong> You can speak intelligently about financial 
                        modeling in interviews for finance, consulting, and business strategy roles.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Sarah Chen's story continues, but your journey in financial modeling excellence has 
                  just reached a major milestone. You've developed skills that will serve you throughout 
                  your career, whether you become an entrepreneur, join a startup, enter finance, or 
                  pursue any business role that requires analytical thinking and professional presentation.
                </p>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-3 text-blue-900">🌟 Excellence Achieved</h3>
                    <p className="text-blue-800">
                      You now possess the scenario modeling skills that separate amateur spreadsheet users 
                      from investment-grade financial analysts. Take a moment to appreciate this significant 
                      achievement—and get ready to build on it in our next advanced lesson!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Reflection: Your Financial Modeling Journey
          </h2>
          <ReflectionJournal />
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson04Data} phase={phase6} phases={lesson04Phases} />
    </div>
  );
}