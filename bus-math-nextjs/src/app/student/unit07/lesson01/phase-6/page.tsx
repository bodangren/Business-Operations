import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"

export default function Phase6Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 6)!

  const reflectionPrompts = [
    {
      id: 'courage-1',
      category: 'courage' as const,
      prompt: 'Describe a moment during this lesson when you had to challenge your initial assumptions about how businesses should handle their assets and inventory. What made you reconsider your first instinct?',
      placeholder: 'I initially thought that businesses should always... but then I realized that strategic thinking requires...'
    },
    {
      id: 'courage-2', 
      category: 'courage' as const,
      prompt: 'How did analyzing the serious consequences of asset and inventory misvaluation change your perspective on the importance of financial accuracy in business?',
      placeholder: 'Learning about companies facing millions in fines made me understand that...'
    },
    {
      id: 'adaptability-1',
      category: 'adaptability' as const,
      prompt: 'How did you adapt your thinking when you discovered that the "best" depreciation or inventory method depends entirely on a company\'s specific strategic goals rather than universal rules?',
      placeholder: 'At first I was looking for the "right" answer, but I learned to adapt by...'
    },
    {
      id: 'adaptability-2',
      category: 'adaptability' as const,
      prompt: 'Describe how you modified your approach when analyzing different industry scenarios (retail, manufacturing, technology). What different factors did you need to consider?',
      placeholder: 'When I switched from thinking about [first industry] to [chosen industry], I had to adapt by considering...'
    },
    {
      id: 'persistence-1',
      category: 'persistence' as const,
      prompt: 'What was the most challenging concept in this lesson (depreciation methods, inventory valuation, strategic trade-offs), and how did you work through your confusion to reach understanding?',
      placeholder: 'The most challenging part was understanding... I persisted by...'
    },
    {
      id: 'persistence-2',
      category: 'persistence' as const,
      prompt: 'How will you continue building your strategic financial analysis skills as you move into the more technical aspects of this unit (Excel modeling, ratio calculations, board presentations)?',
      placeholder: 'To continue growing my financial analysis skills, I will persist in...'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit07Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Closing & Synthesis Introduction */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 text-white">Synthesis & Reflection</Badge>
                <CardTitle className="text-purple-800 dark:text-purple-200">
                  Reflecting on Strategic Financial Analysis and Building Forward
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  Congratulations! You've completed the foundational lesson of Unit 7: Asset & Inventory Tracker. You've moved from understanding Sarah's simple desire to "just expense everything" to grasping the sophisticated strategic thinking that drives professional financial decision-making.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mt-6">What You've Accomplished Today</h3>
                <p className="text-lg leading-relaxed">
                  Today's journey took you through the critical foundation of strategic asset and inventory management. You've developed the analytical framework that will guide you through the remaining lessons as you build toward your final Board Advisory Brief presentation.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-300 my-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">Today's Key Learning Achievements:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-2">🎯 Strategic Thinking Development:</h5>
                      <ul className="text-sm space-y-1 text-blue-700">
                        <li>• Understanding that method choice aligns with business goals</li>
                        <li>• Recognizing trade-offs between cash flow and reported profits</li>
                        <li>• Analyzing real business scenarios with multiple constraints</li>
                        <li>• Developing industry-specific strategic perspectives</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">📊 Technical Foundation Building:</h5>
                      <ul className="text-sm space-y-1 text-green-700">
                        <li>• Distinguishing between assets and inventory</li>
                        <li>• Understanding SLN vs. DDB depreciation implications</li>
                        <li>• Grasping FIFO vs. LIFO strategic applications</li>
                        <li>• Connecting methods to cash flow and tax strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Journey Ahead Preview */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                The Strategic Journey Ahead: Building Your Advisory Brief
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  Your learning today provides the strategic foundation for the exciting work ahead. Over the next lessons, you'll apply these concepts through hands-on Excel modeling, advanced calculations, and ultimately present your recommendations to a real Board of Directors panel.
                </p>

                <h3 className="text-xl font-semibold text-blue-800 mt-6">Coming Up in Unit 7:</h3>
                <div className="bg-white p-6 rounded-lg border-2 border-blue-300 my-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-orange-700">Lesson 2-3: Technical Implementation</h4>
                      <p className="text-sm text-orange-600">Build sophisticated Excel models using SLN/DDB functions and FIFO/LIFO array formulas to bring your strategic thinking to life</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-700">Lesson 4-5: Advanced Analysis</h4>
                      <p className="text-sm text-green-600">Create dynamic models with dropdown menus and INDEX/MATCH formulas, plus professional ratio analysis and visualization</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-700">Lesson 6-8: Strategic Communication</h4>
                      <p className="text-sm text-purple-600">Develop your written advisory brief and prepare for your 5-minute live pitch to business professionals</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-red-700">Lesson 9-10: Board Presentation</h4>
                      <p className="text-sm text-red-600">Present your strategic recommendations to a panel of local business leaders, accountants, and auditors</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  Each lesson builds on today's strategic foundation, adding technical depth and professional communication skills that will serve you throughout your business career.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CAP Framework Reflection */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                CAP Framework Reflection: Courage, Adaptability, Persistence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Use the CAP framework to reflect deeply on your learning experience today. Your insights will help you continue growing as a strategic financial analyst:
                </p>
                
                <ReflectionJournal 
                  unitTitle="Unit 7: Asset & Inventory Tracker - Lesson 1"
                  prompts={reflectionPrompts}
                />
              </div>
            </CardContent>
          </Card>

          {/* Connection to Capstone Project */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Connecting to Your Year-1 Startup Model Capstone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-amber max-w-none">
                <p className="text-lg leading-relaxed">
                  The strategic thinking you've developed today directly supports your capstone project: the Year-1 Startup Model with integrated financial statements and scenario analysis for VC presentations.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-amber-300 my-6">
                  <h4 className="text-lg font-semibold text-amber-800 mb-4">Capstone Project Connections:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-blue-700">Asset Planning for Startups</h5>
                      <p className="text-sm text-blue-600">Your startup model will need strategic decisions about equipment purchases, depreciation methods, and cash flow optimization—exactly what you're learning now.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-green-700">Investor Presentation Skills</h5>
                      <p className="text-sm text-green-600">The board presentation skills you're developing will directly transfer to pitching VCs and angel investors for your capstone startup model.</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibant text-orange-700">Strategic Financial Analysis</h5>
                      <p className="text-sm text-orange-600">Understanding how financial method choices impact investor perception and cash flow will be crucial for your startup's financial projections and scenario planning.</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  By mastering asset and inventory strategy now, you're building the expertise to create sophisticated, investor-ready financial models for your capstone presentation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Professional Skills Development */}
          <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
            <CardHeader>
              <CardTitle className="text-indigo-800 dark:text-indigo-200">
                Professional Skills You're Developing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  The competencies you're building in this unit directly align with real-world business and finance career paths:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h4 className="font-semibold text-indigo-800 mb-3">💼 Career Applications:</h4>
                    <ul className="text-sm space-y-2 text-indigo-600">
                      <li>• <strong>Financial Analyst:</strong> Asset valuation and strategic recommendations</li>
                      <li>• <strong>Management Consultant:</strong> Business strategy and operational optimization</li>
                      <li>• <strong>Investment Banking:</strong> Company valuation and due diligence</li>
                      <li>• <strong>Entrepreneurship:</strong> Strategic financial planning and investor relations</li>
                      <li>• <strong>Corporate Finance:</strong> Capital allocation and tax strategy</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border">
                    <h4 className="font-semibold text-indigo-800 mb-3">🎯 Professional Competencies:</h4>
                    <ul className="text-sm space-y-2 text-indigo-600">
                      <li>• <strong>Strategic Thinking:</strong> Analyzing trade-offs and business implications</li>
                      <li>• <strong>Technical Proficiency:</strong> Advanced Excel modeling and financial calculations</li>
                      <li>• <strong>Communication:</strong> Presenting complex financial concepts clearly</li>
                      <li>• <strong>Problem-Solving:</strong> Integrating multiple business constraints and objectives</li>
                      <li>• <strong>Industry Analysis:</strong> Understanding sector-specific financial strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Looking Forward: Next Lesson Preview */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Ready for Lesson 2: Depreciation Techniques Deep Dive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  You're now ready to dive deep into the technical implementation of your strategic insights. In Lesson 2, you'll master the Excel functions and formulas that bring depreciation strategies to life.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-300 my-6">
                  <h4 className="text-lg font-semibant text-purple-800 mb-4">Lesson 2 Preview: "Depreciation Techniques"</h4>
                  <div className="grid gap-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-blue-700">Excel Mastery</h5>
                      <p className="text-sm text-blue-600">Learn to use SLN() and DDB() functions to create professional depreciation schedules that support your strategic recommendations</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-green-700">Real Asset Analysis</h5>
                      <p className="text-sm text-green-600">Apply your methods to Sarah's actual $18,000 equipment purchase and compare financial impacts</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-orange-700">Strategic Validation</h5>
                      <p className="text-sm text-orange-600">Use calculations to prove your strategic recommendations and build toward your advisory brief</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  <strong>You're on track to become a strategic financial advisor!</strong> Today's foundation in strategic thinking, combined with the technical skills you'll develop next, will position you to deliver compelling, data-driven recommendations to real business leaders.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Remember Sarah's story and her CPA Jennifer's guidance—you're learning to think like the financial professionals who help businesses make strategic decisions that drive growth and success.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit07Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}