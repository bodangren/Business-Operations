import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight, CheckCircle, Zap } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[5] // Phase 6

const lesson03Reflections = [
  {
    id: 'courage-adjusting-entries',
    category: 'courage' as const,
    prompt: 'What was the most challenging adjusting entry concept that required you to step outside your comfort zone and really think differently about when transactions should be recorded?',
    placeholder: 'Describe a specific moment when accrual accounting challenged your assumptions about timing revenue or expenses...'
  },
  {
    id: 'adaptability-gaap-thinking',
    category: 'adaptability' as const,
    prompt: 'How did you adjust your approach when you discovered that proper GAAP accounting is more complex than simple cash-based recording? What strategies helped you adapt?',
    placeholder: 'Think about times when you had to change your strategy for analyzing business scenarios or creating journal entries...'
  },
  {
    id: 'persistence-month-end-mastery',
    category: 'persistence' as const,
    prompt: 'Describe a moment when the complexity of month-end adjustments made you want to give up, but you kept working through the challenge. What motivated you to continue?',
    placeholder: 'Reflect on your perseverance with difficult concepts like depreciation calculations or closing entries...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit02Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Lesson Synthesis */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                Closing Reflection: Your Journey with Adjusting Entries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-indigo-900">
                <p>
                  Congratulations! You've mastered one of the most crucial skills in professional accounting: 
                  creating accurate adjusting entries that comply with GAAP principles. This isn't just 
                  academic knowledge—you now understand the foundation that every automated accounting 
                  system is built upon.
                </p>

                <p>
                  Think back to where you started this lesson: Sarah's four confusing scenarios that 
                  turned her weekend into a nightmare. Now you can confidently analyze those situations 
                  and create the proper journal entries that will make her financial statements 
                  professionally accurate and investor-ready.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-200 text-green-800">Knowledge Gained</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Technical Mastery</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• GAAP principles for revenue recognition and matching</li>
                      <li>• Four types of adjusting entries and when to use them</li>
                      <li>• Straight-line depreciation calculations and recording</li>
                      <li>• Closing entry process for month-end procedures</li>
                      <li>• Professional journal entry creation and validation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <Badge className="bg-blue-200 text-blue-800">Skills Developed</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-blue-900 mb-2">Professional Capabilities</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Business scenario analysis and decision-making</li>
                      <li>• Systematic approach to complex accounting challenges</li>
                      <li>• Quality control through self-checking procedures</li>
                      <li>• Understanding automation requirements and logic</li>
                      <li>• Professional communication of financial concepts</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Connection to Unit Challenge */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                The Path to Sarah's Month-End Wizard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-amber-900">
                <p>
                  Now that you understand the accounting logic behind each adjusting entry, you're ready 
                  for the next phase of Unit 2: building the automation that will transform Sarah's 
                  two-day month-end nightmare into a two-hour streamlined process.
                </p>

                <p>
                  Every automated accounting system—from QuickBooks to enterprise ERP software—relies 
                  on the principles you've mastered in this lesson. The difference is that instead of 
                  a human analyzing each scenario and creating journal entries manually, the software 
                  applies these same logical rules automatically.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-200 not-prose">
                <h4 className="font-semibold text-amber-900 mb-2">Coming Up in Unit 2:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Next</Badge>
                    <p className="text-sm text-amber-800">
                      <strong>Gallery Walk & Peer Review:</strong> Share your adjusting entry knowledge and learn 
                      from classmates' approaches to complex scenarios
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Soon</Badge>
                    <p className="text-sm text-amber-800">
                      <strong>Building Automation Logic:</strong> Convert your manual process knowledge into 
                      decision trees that can drive automated month-end systems
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Goal</Badge>
                    <p className="text-sm text-amber-800">
                      <strong>Month-End Wizard:</strong> Create a functional prototype that can process Sarah's 
                      four scenarios automatically with accuracy validation
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-amber-900">
                <p>
                  Remember: you're not just learning accounting—you're building the foundation to revolutionize 
                  how small businesses handle their most time-consuming and error-prone financial processes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reflection Journal */}
          <ReflectionJournal
            unitTitle="Unit 2 Lesson 3: Four Scenarios into Ledger"
            prompts={lesson03Reflections}
          />

          {/* Looking Forward */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Preparing for Success in the Next Lesson</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-green-900">
                <p>
                  As you move forward in Unit 2, you'll build on today's foundation to create increasingly 
                  sophisticated automation tools. To prepare for success:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4 not-prose">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">Review and Reinforce</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-800">
                          Practice identifying adjusting entry types in new business scenarios
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-800">
                          Ensure you can calculate depreciation and revenue recognition quickly
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-800">
                          Understand why each GAAP principle exists and how it serves financial statement users
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">Think Like a System Designer</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-800">
                          Consider what information a computer would need to make these same decisions
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-800">
                          Think about how you would explain your decision-making process to someone else
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-800">
                          Imagine the data inputs and validation checks an automated system would require
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200 mt-4 not-prose">
                  <p className="text-green-800">
                    <strong>Your Journey Continues:</strong> You've mastered the "why" behind adjusting entries. 
                    Next, you'll learn the "how" of automating them—taking Sarah's business from weekend 
                    frustration to professional efficiency.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  )
}