import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase6Page() {
  const currentPhase = lesson01Phases[5] // Closing phase

  // Custom reflection prompts for Unit 8 Lesson 1
  const reflectionPrompts = [
    {
      id: 'courage-unit8',
      category: 'courage' as const,
      prompt: 'What was most challenging about stepping into the role of a venture capitalist and evaluating startup models? How did you push through initial uncertainty?',
      placeholder: 'Think about moments when you had to make tough investment judgments or challenge assumptions that seemed unrealistic...'
    },
    {
      id: 'adaptability-unit8',
      category: 'adaptability' as const,
      prompt: 'How did your evaluation criteria evolve as you practiced analyzing different startup models? What did you learn to look for that you initially missed?',
      placeholder: 'Reflect on how your VC mindset developed and what made you adjust your analysis approach...'
    },
    {
      id: 'persistence-unit8',
      category: 'persistence' as const,
      prompt: 'When analyzing complex financial models became overwhelming, what strategies helped you stay focused on finding the most important red flags and opportunities?',
      placeholder: 'Describe how you persevered through challenging model analysis and maintained attention to detail...'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        {/* Closing Introduction */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Closing: From Analysis to Action</h1>
          
          <p className="text-lg leading-relaxed">
            Congratulations! You've successfully developed the analytical skills of a professional venture capitalist. You can now identify red flags that kill funding, evaluate financial model integrity, and make informed investment decisions based on both technical quality and business viability.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This foundational lesson has prepared you for the exciting work ahead: building your own comprehensive, integrated financial model that could actually attract real investment. You now understand exactly what investors are looking for—and what immediately disqualifies a startup from consideration.
          </p>
        </div>

        {/* Key Insights Summary */}
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Key Insights from Lesson 1
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-900 mb-2">Red Flags That Kill Deals</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Hard-coded numbers instead of formulas</li>
                  <li>• Circular references that break calculations</li>
                  <li>• Unrealistic growth assumptions</li>
                  <li>• Missing scenario analysis</li>
                  <li>• Poor presentation quality</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-900 mb-2">Investment-Ready Qualities</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Three-statement integration</li>
                  <li>• Evidence-based assumptions</li>
                  <li>• Comprehensive risk analysis</li>
                  <li>• Professional presentation</li>
                  <li>• Deep business understanding</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-100 p-3 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">
                💡 Remember: VCs invest in entrepreneurs who understand their business deeply and can build credible, risk-aware financial projections.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Unit Journey Ahead */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            Your Unit 8 Journey: Building an Investment-Ready Model
          </h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Over the next 9 lessons, you'll follow Sarah's path from individual financial statements to a fully integrated startup model. Each lesson builds on your VC evaluation skills while adding new technical capabilities:
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">What You'll Build:</h3>
            <ul className="list-disc list-inside space-y-2 text-green-800">
              <li><strong>Lessons 2-3:</strong> Integrated three-statement model with cross-sheet linking</li>
              <li><strong>Lessons 4-5:</strong> Scenario analysis with best case, worst case, and base case projections</li>
              <li><strong>Lessons 6-7:</strong> Sensitivity analysis and professional presentation standards</li>
              <li><strong>Lessons 8-9:</strong> Pitch deck development and mock VC panel preparation</li>
              <li><strong>Lesson 10:</strong> Live presentation to real VC mentors and entrepreneurs</li>
            </ul>
          </div>

          <p className="text-base leading-relaxed text-gray-700">
            By the end of Unit 8, you'll have created the same type of comprehensive financial model that Sarah used to secure her $500,000 Series A investment. More importantly, you'll have demonstrated mastery of the mathematical and business skills that separate successful entrepreneurs from those who never get funded.
          </p>
        </div>

        {/* CAP Reflection */}
        <ReflectionJournal
          unitTitle="Unit 8, Lesson 1: VC Red Flags & Investment Analysis"
          prompts={reflectionPrompts}
        />

        {/* Next Steps Preview */}
        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
          <CardHeader>
            <CardTitle className="text-orange-900 dark:text-orange-200 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Coming Up: Lesson 2 - The Power of Integration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-orange-800 dark:text-orange-300">
              Now that you understand what investors look for, you're ready to start building. In Lesson 2, you'll begin creating the technical foundation of your startup model:
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-orange-900 mb-2">Lesson 2 Preview: Three-Statement Integration</h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Learn cross-sheet linking techniques that connect Income Statement, Balance Sheet, and Cash Flow</li>
                <li>• Practice named ranges and absolute references for professional formula construction</li>
                <li>• Build dynamic relationships so changing one assumption updates your entire model</li>
                <li>• Avoid the technical red flags you learned to identify in today's lesson</li>
              </ul>
            </div>
            
            <div className="bg-orange-100 p-3 rounded-lg">
              <p className="text-sm text-orange-800 font-medium">
                🎯 Your Challenge: Apply your VC evaluation skills as you build—constantly ask yourself, "Would I invest in a model like this?"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Milestone Connection */}
        <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
          <CardHeader>
            <CardTitle className="text-purple-900 dark:text-purple-200 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Unit Milestones: Your Path to Investment Readiness
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-800 dark:text-purple-300">
              Remember the Unit 8 milestones you're working toward. Today's lesson provides the evaluation framework for achieving each one:
            </p>
            
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border-l-4 border-purple-400">
                <p className="font-medium text-purple-900 mb-1">Milestone 1 (Day 3): Fully Linked 3-Statement Forecast</p>
                <p className="text-sm text-purple-800">
                  Use your red flag knowledge to ensure formula integrity and proper integration
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg border-l-4 border-purple-400">
                <p className="font-medium text-purple-900 mb-1">Milestone 2 (Day 6): Model Runs 3 Scenarios</p>
                <p className="text-sm text-purple-800">
                  Apply your risk analysis skills to create meaningful best, worst, and base case scenarios
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg border-l-4 border-purple-400">
                <p className="font-medium text-purple-900 mb-1">Final Deliverable (Day 10): VC Presentation</p>
                <p className="text-sm text-purple-800">
                  Demonstrate the professional standards and business insight you learned to evaluate today
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inspiring Conclusion */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            From Student to Entrepreneur
          </h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Today marks a significant transition in your learning journey. You began this course learning basic bookkeeping with Sarah's messy notebooks. Now, you're analyzing startup models with the sophistication of professional investors.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This transformation reflects the same growth path that successful entrepreneurs follow. They start with basic business ideas and gradually develop the financial modeling skills, risk awareness, and professional presentation abilities needed to attract serious investment.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            As you move into the hands-on model building phases of Unit 8, remember that you're not just completing a school project—you're developing the same skills that real entrepreneurs use to turn ideas into funded businesses. The model you build in this unit could be the foundation for your own future startup.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 my-6">
            <p className="text-indigo-800 font-medium">
              "Sarah realized that for her final pitch to investors, all these individual systems had to come together into one comprehensive, dynamic model. This is the essence of three-statement integration."
            </p>
            <p className="text-sm text-indigo-600 mt-2">
              — From today's textbook reading, describing the challenge you're now ready to tackle
            </p>
          </div>

          <p className="text-base leading-relaxed text-gray-700">
            Get ready to build something remarkable. Your integrated financial model will demonstrate that you've truly mastered the mathematics of business operations—and that you understand what it takes to turn an entrepreneurial vision into investment-ready reality.
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}