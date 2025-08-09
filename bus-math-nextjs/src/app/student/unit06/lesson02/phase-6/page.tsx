import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ArrowRight, Star, Target, TrendingUp } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[5]; // Phase 6: Closing

const reflectionPrompts = [
  {
    id: "courage-pricing",
    category: "courage" as const,
    prompt: "Learning about markup vs. margin revealed how pricing mistakes can hurt businesses. What was the most challenging aspect of understanding these concepts, and how did you push through when the math or business logic felt overwhelming?",
    placeholder: "Think about moments when you had to tackle difficult calculations or challenge your assumptions about pricing. Describe how you found the courage to keep working through complex scenarios..."
  },
  {
    id: "adaptability-strategy",
    category: "adaptability" as const,
    prompt: "As you worked through Sarah's pricing challenges, how did you adjust your thinking when you discovered that markup and margin give different perspectives on the same profit? What strategies did you develop for switching between these different ways of analyzing business problems?",
    placeholder: "Reflect on times when you had to change your approach or reconsider your initial thoughts about pricing strategies. How did you adapt to new information or feedback..."
  },
  {
    id: "persistence-mastery",
    category: "persistence" as const,
    prompt: "The advanced pricing analysis in Phase 4 required sustained effort and attention to detail. When did you feel like giving up on the complex scenarios, and what motivated you to continue working toward mastery of these business concepts?",
    placeholder: "Consider the moments when the analysis felt too complicated or when you made calculation errors. What helped you persist and develop confidence in your pricing analysis skills..."
  }
];

export default function Unit06Lesson02Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Closing Summary */}
          <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                Closing: Your Pricing Strategy Foundation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-indigo-700 leading-relaxed">
                Congratulations! You've mastered one of the most important foundational concepts in business: 
                the difference between markup and margin. Like Sarah discovered, understanding these concepts 
                is crucial for making pricing decisions that sustain and grow a profitable business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white border-green-200">
                  <CardContent className="p-4 text-center">
                    <Star className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800">Technical Mastery</h3>
                    <p className="text-sm text-green-700">You can now calculate and interpret both markup and margin percentages with confidence</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-4 text-center">
                    <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-800">Strategic Thinking</h3>
                    <p className="text-sm text-blue-700">You understand how cost structure affects pricing flexibility and competitive positioning</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-purple-200">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-800">Professional Skills</h3>
                    <p className="text-sm text-purple-700">You've used advanced Excel techniques to create investor-ready business analysis</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800">Essential Insights for Sarah's Success</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-emerald-700 leading-relaxed">
                Your work today solved Sarah's original problem. Here's what you've accomplished:
              </p>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-emerald-200">
                  <h4 className="font-semibold text-emerald-900 mb-2">🔍 Problem Diagnosis</h4>
                  <p className="text-sm text-emerald-800">
                    You identified why Sarah's profit margins were shrinking despite increased revenue - 
                    her cost-plus pricing approach couldn't adapt to business growth and market competition.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-emerald-200">
                  <h4 className="font-semibold text-emerald-900 mb-2">🧮 Mathematical Foundation</h4>
                  <p className="text-sm text-emerald-800">
                    You mastered the critical difference between markup (profit as % of cost) and margin 
                    (profit as % of selling price), and why margin is more useful for business decisions.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-emerald-200">
                  <h4 className="font-semibold text-emerald-900 mb-2">📊 Advanced Analysis</h4>
                  <p className="text-sm text-emerald-800">
                    You used professional-level tools like Goal Seek and Data Tables to create sophisticated 
                    pricing recommendations that balance profitability with competitive positioning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection to Unit Challenge */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Looking Ahead: The PriceLab Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 leading-relaxed mb-4">
                Your markup vs. margin mastery is the foundation for Unit 6's culminating challenge: 
                developing a data-driven pricing strategy that you'll defend in a Town Hall debate 
                with real business stakeholders.
              </p>
              
              <div className="bg-white p-4 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Next Steps in Your Pricing Journey
                </h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• <strong>Day 3:</strong> Build comprehensive CVP models with automated Excel features</li>
                  <li>• <strong>Days 6-7:</strong> Master Goal Seek and Data Tables for sensitivity analysis</li>
                  <li>• <strong>Day 8:</strong> Develop compelling pricing recommendations</li>
                  <li>• <strong>Day 10:</strong> Present and defend your strategy to business professionals</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Reflection Journal */}
          <ReflectionJournal
            unitTitle="Unit 6 Lesson 2: Markup vs. Margin Mastery"
            prompts={reflectionPrompts}
          />

          {/* Motivational Closing */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Your Professional Development Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 leading-relaxed mb-4">
                The skills you've developed today - mathematical precision, strategic thinking, and 
                professional analysis - are exactly what employers value in business roles. You're 
                not just learning about pricing; you're developing the analytical mindset that 
                drives successful careers in business, consulting, and entrepreneurship.
              </p>
              
              <div className="bg-white p-4 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Career-Ready Skills You've Gained</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-800">
                  <ul className="space-y-1">
                    <li>• Advanced Excel modeling and analysis</li>
                    <li>• Financial calculation accuracy and speed</li>
                    <li>• Strategic thinking about competitive markets</li>
                    <li>• Professional presentation of business insights</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Critical evaluation of business strategies</li>
                    <li>• Data-driven decision making</li>
                    <li>• Understanding of cost-profit relationships</li>
                    <li>• Confidence in tackling complex business problems</li>
                  </ul>
                </div>
              </div>

              <p className="text-purple-600 mt-4 font-medium text-center">
                You're well-prepared for the advanced challenges ahead in the PriceLab Challenge! 
                Your journey toward becoming a confident business analyst continues.
              </p>
            </CardContent>
          </Card>
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