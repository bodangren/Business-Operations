import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, AlertTriangle, DollarSign } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[0]; // Phase 1: Hook

const comprehensionQuestions = [
  {
    id: "q1",
    question: "What is Sarah's main problem with her current pricing strategy?",
    answers: [
      "She's pricing to cover costs, not to reflect the true value her company provides",
      "She's charging too much compared to her competitors",
      "She doesn't know how to calculate her business expenses",
      "Her clients don't want to pay for her services"
    ],
    explanation: "Sarah discovered her pricing strategy was wrong - she was setting prices just to cover costs rather than reflecting the real value TechStart Solutions provided to clients."
  },
  {
    id: "q2", 
    question: "According to the scenario, what happened to Sarah's profit as her business grew?",
    answers: [
      "Her profit was actually going down even though more money was coming in",
      "Her profit increased dramatically with each new project", 
      "Her profit stayed exactly the same",
      "She started losing money on every project"
    ],
    explanation: "Even with more money coming in from bigger projects, Sarah's profit was actually going down - a common problem when pricing strategy doesn't account for true value."
  },
  {
    id: "q3",
    question: "Why is understanding markup vs. margin important for businesses like Sarah's?",
    answers: [
      "Mixing up these concepts can cost a business a lot of money",
      "They are exactly the same calculation with different names",
      "Only large corporations need to worry about these calculations",
      "These concepts only apply to retail businesses"
    ],
    explanation: "Many businesses lose money by confusing markup and margin calculations. They sound similar but measure profit differently, and mixing them up can be costly."
  },
  {
    id: "q4",
    question: "What does this lesson suggest about pricing based only on costs?",
    answers: [
      "It doesn't capture the true value a business provides to customers",
      "It's the most accurate way to set prices",
      "It always leads to higher profits",
      "It's only appropriate for new businesses"
    ],
    explanation: "Pricing based only on covering costs misses the real value a business creates for customers. Effective pricing should reflect the worth of the solution provided."
  }
];

export default function Unit06Lesson02Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Engaging Hook Scenario */}
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Sarah's Pricing Wake-Up Call
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  Sarah Chen was celebrating. TechStart Solutions had just landed three major projects back-to-back: 
                  a complex e-commerce website for a growing retailer ($8,500), a comprehensive social media strategy 
                  for a local restaurant chain ($3,200), and SEO optimization for a dental practice ($4,100). 
                  Her business was growing faster than ever, and she had even hired Alex as her first full-time employee.
                </p>
                
                <p>
                  But when Sarah sat down to review her financial reports at the end of the quarter, she discovered 
                  something alarming: <strong>her profit margins were actually shrinking</strong>. Even though more money 
                  was coming in, she was working harder and keeping less. The numbers didn't make sense.
                </p>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-900 mb-2">Sarah's Pricing Reality Check</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-green-700">Previous Quarter (Solo Work)</p>
                      <ul className="text-green-600 space-y-1">
                        <li>• Revenue: $12,000</li>
                        <li>• Expenses: $4,000</li>
                        <li>• Profit: $8,000 (67%)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">Current Quarter (With Growth)</p>
                      <ul className="text-red-600 space-y-1">
                        <li>• Revenue: $15,800</li>
                        <li>• Expenses: $11,200</li>
                        <li>• Profit: $4,600 (29%)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  Sarah realized her entire <strong>pricing strategy was wrong</strong>. She had been setting prices 
                  just to cover her costs and add a small buffer, not to reflect the real value TechStart Solutions 
                  provided to her clients. When her expenses grew with her business, her simple cost-plus approach 
                  was no longer working.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why This Matters */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 leading-relaxed">
                Understanding the difference between <strong>markup</strong> and <strong>margin</strong> isn't just about 
                following rules—it's about building a sustainable, profitable business. Sarah's story shows how even 
                successful entrepreneurs can make costly pricing mistakes when they don't understand these fundamental 
                concepts. Today, you'll learn how to avoid Sarah's mistake and set prices that reflect true value while 
                ensuring profitability.
              </p>
            </CardContent>
          </Card>

          {/* Turn and Talk Discussion */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-3">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-purple-800 mb-3">
                Think about Sarah's situation. Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-800">
                <li>What do you think went wrong with Sarah's original pricing strategy?</li>
                <li>How might understanding "markup vs. margin" help Sarah price her services better?</li>
                <li>What would you advise Sarah to consider when setting prices beyond just covering costs?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <ComprehensionCheck
            title="Hook: Understanding Sarah's Pricing Challenge"
            description="Test your understanding of the business problem Sarah faces with her pricing strategy"
            questions={comprehensionQuestions}
            showExplanations={true}
          />
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}