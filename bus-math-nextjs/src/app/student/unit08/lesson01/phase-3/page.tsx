import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import BusinessTransactionCategorization from "@/components/drag-drop/BusinessTransactionCategorization"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, Search, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson01Phases[2] // Guided Practice phase

  // Startup Model Quality Assessment items
  const qualityItems = [
    { id: '1', content: 'All formulas properly linked between sheets', matchId: '2', hint: 'Technical excellence in model construction' },
    { id: '2', content: 'Professional Model Integrity', matchId: '1' },
    { id: '3', content: 'Growth assumptions backed by market research', matchId: '4', hint: 'Evidence-based business planning' },
    { id: '4', content: 'Realistic Business Assumptions', matchId: '3' },
    { id: '5', content: 'Best case, worst case, and base case scenarios', matchId: '6', hint: 'Comprehensive risk analysis' },
    { id: '6', content: 'Thorough Scenario Analysis', matchId: '5' },
    { id: '7', content: 'Clean formatting with clear navigation', matchId: '8', hint: 'Professional presentation standards' },
    { id: '8', content: 'Professional Presentation Quality', matchId: '7' },
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
        {/* Guided Practice Introduction */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Guided Practice: Analyzing Startup Models Like a VC</h1>
          
          <p className="text-lg leading-relaxed">
            Now that you understand what venture capitalists look for in financial models and the common red flags that can kill funding, it's time to practice identifying these issues in real startup scenarios. In this guided practice, you'll work with your teacher and classmates to develop the critical eye of a professional investor.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Remember Sarah's challenge: she needs to create a model that avoids red flags while demonstrating the sophistication that comes from three-statement integration. Today, you'll practice the evaluation skills that will help you build that same level of quality in your own models.
          </p>
        </div>

        {/* The VC Evaluation Process */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Search className="h-6 w-6 text-blue-600" />
            How VCs Evaluate Financial Models
          </h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            When venture capitalists receive a financial model from a startup, they follow a systematic evaluation process. Understanding this process will help you build models that pass their scrutiny:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">The VC Evaluation Checklist</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li><strong>Technical Check:</strong> Do the formulas work? Are sheets properly linked? Any circular references?</li>
              <li><strong>Assumption Review:</strong> Are growth rates realistic? Are costs based on research or guesswork?</li>
              <li><strong>Scenario Testing:</strong> Did they consider different outcomes? What happens if sales are 50% lower?</li>
              <li><strong>Presentation Quality:</strong> Is it professional? Easy to navigate? Would I feel confident showing this to my partners?</li>
            </ol>
          </div>

          <p className="text-base leading-relaxed text-gray-700">
            Each of these areas can make or break an investment decision. A technically perfect model with unrealistic assumptions will get rejected just as quickly as a model with great assumptions but broken formulas.
          </p>
        </div>

        {/* Quality Assessment Exercise */}
        <DragAndDrop
          items={qualityItems}
          title="VC Quality Assessment Framework"
          description="Match specific model characteristics with the quality categories VCs use to evaluate startup financial models. This framework will guide your own model development."
          leftColumnTitle="Model Characteristics"
          rightColumnTitle="Quality Categories"
          showHints={true}
          shuffleItems={true}
        />

        {/* Guided Analysis Activity */}
        <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
          <CardHeader>
            <CardTitle className="text-green-900 dark:text-green-200 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Guided Analysis: TechStart's Early Model
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-green-800 dark:text-green-300">
              Let's analyze an early version of Sarah's financial model together. Your teacher will share a simplified version of TechStart Solutions' first investor presentation. As a class, we'll identify:
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <ul className="list-disc list-inside space-y-2 text-green-800">
                <li><strong>Red Flags Found:</strong> What errors would concern investors?</li>
                <li><strong>Strengths to Keep:</strong> What elements show business understanding?</li>
                <li><strong>Integration Opportunities:</strong> How could the statements be better connected?</li>
                <li><strong>Presentation Improvements:</strong> What would make it more professional?</li>
              </ul>
            </div>
            <p className="text-sm text-green-700 font-medium">
              Take notes during this analysis—you'll use these insights when building your own model later in the unit.
            </p>
          </CardContent>
        </Card>

        {/* Think-Pair-Share Activity */}
        <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
          <CardHeader>
            <CardTitle className="text-purple-900 dark:text-purple-200 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Think-Pair-Share: Red Flag Detective
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-purple-900 dark:text-purple-200 mb-2">
                  Activity Instructions (8 minutes total):
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium text-purple-900 mb-1">Think (2 minutes):</p>
                    <p className="text-purple-800 text-sm">
                      Review the sample startup model excerpt your teacher provided. Identify at least 2 red flags and 1 strength you notice.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium text-purple-900 mb-1">Pair (3 minutes):</p>
                    <p className="text-purple-800 text-sm">
                      Share your findings with a partner. Compare your lists and discuss why each item is a red flag or strength from an investor's perspective.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium text-purple-900 mb-1">Share (3 minutes):</p>
                    <p className="text-purple-800 text-sm">
                      Report back to the class. We'll create a master list of red flags found and discuss how to fix each one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Transaction Practice */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice: Startup Cash Flow Analysis</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            One area where many startup models fail is in properly categorizing cash flows. VCs pay close attention to how entrepreneurs classify their business activities because it reveals their understanding of business operations. Let's practice with startup-specific transactions:
          </p>
        </div>

        <BusinessTransactionCategorization />

        {/* Professional Tips Section */}
        <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/10">
          <CardHeader>
            <CardTitle className="text-yellow-900 dark:text-yellow-200 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Professional Tips: Building Credible Models
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-yellow-800 dark:text-yellow-300">
              Based on real VC feedback, here are the most important tips for building credible financial models:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-yellow-900 mb-2">Formula Integrity</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Never hard-code numbers in projection cells</li>
                  <li>• Use named ranges for key assumptions</li>
                  <li>• Test all formulas with extreme values</li>
                  <li>• Document complex calculations</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-yellow-900 mb-2">Realistic Assumptions</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Research industry benchmarks</li>
                  <li>• Start conservative, then show upside</li>
                  <li>• Explain the logic behind each assumption</li>
                  <li>• Include sensitivity analysis</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800 font-medium">
                💡 Remember: VCs would rather fund a conservative model that exceeds expectations than an aggressive model that falls short.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Preparation for Independent Practice */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparing for Independent Analysis</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            You've now practiced identifying red flags in startup models with guidance from your teacher and classmates. You understand the VC evaluation framework and have seen how professional investors analyze financial projections.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            In the next phase, you'll work independently to analyze different startup scenarios and apply your new evaluation skills. You'll be working with different models than we analyzed today, giving you a chance to transfer your learning to new contexts—just like real VCs do when they evaluate multiple investment opportunities.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-700 font-medium mb-2">Key Takeaways from Guided Practice:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ VCs follow a systematic evaluation process focusing on technical quality, assumptions, scenarios, and presentation</li>
              <li>✓ Red flags can be technical (broken formulas) or business-related (unrealistic assumptions)</li>
              <li>✓ Professional models demonstrate both Excel expertise and business understanding</li>
              <li>✓ Cash flow categorization reveals how well entrepreneurs understand their business operations</li>
            </ul>
          </div>
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