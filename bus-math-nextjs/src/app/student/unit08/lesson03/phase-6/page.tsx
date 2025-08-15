'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ArrowRight, Target, Rocket, Trophy, Users } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";

const phase6 = lesson03Phases.find(p => p.sequence === 6)!;

const reflectionPrompts = [
  {
    id: 'courage-integration',
    category: 'courage' as const,
    prompt: 'Today you learned to integrate complex financial statements - a skill that intimidates many business professionals. What was the most challenging aspect that required you to push outside your comfort zone?',
    placeholder: 'Think about moments when the concepts felt overwhelming, but you persisted anyway. How did you find the courage to tackle three-statement integration when it seemed complex at first?'
  },
  {
    id: 'adaptability-connections',
    category: 'adaptability' as const,
    prompt: 'When you discovered how the three statements connect, how did you adjust your understanding from seeing them as separate reports to viewing them as an integrated system?',
    placeholder: 'Describe how your approach to financial analysis changed as you learned about cross-sheet linking and statement relationships. What mental models did you have to adapt?'
  },
  {
    id: 'persistence-mastery',
    category: 'persistence' as const,
    prompt: 'Building professional financial models requires attention to detail and persistence through complex formulas. Describe a moment when you wanted to give up on understanding the integration concepts but kept working through it.',
    placeholder: 'Reflect on your journey from confusion to clarity. What motivated you to persist when the Balance Sheet and Cash Flow relationships felt difficult to grasp?'
  }
];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase6}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          {/* Closing Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Lesson Synthesis: The Foundation for Financial Modeling Excellence</h2>
            
            <p className="text-lg leading-relaxed">
              Sarah closes her laptop with a sense of accomplishment. The three financial statements 
              are no longer mysterious, separate documents—they're an integrated system that tells 
              the complete story of her business. "I finally understand why investors insist on seeing 
              all three statements working together," she tells Jennifer. "It's not just about the 
              numbers; it's about proving the numbers are trustworthy."
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-6 rounded-lg my-6">
              <h3 className="text-green-900 font-semibold mb-3 flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                What You've Mastered Today
              </h3>
              <p className="text-green-800 mb-4">
                Today's lesson has given you the foundational skills that professional financial analysts, 
                investment bankers, and successful entrepreneurs rely on every day. You now understand:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Technical Mastery</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Three-statement integration principles</li>
                    <li>• Balance Sheet and Cash Flow connections</li>
                    <li>• Cross-sheet linking best practices</li>
                    <li>• Professional model validation techniques</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Strategic Understanding</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Why investors demand integrated models</li>
                    <li>• How cash flow differs from profitability</li>
                    <li>• The investor perspective on financial reliability</li>
                    <li>• Building credibility through technical precision</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Path Forward in Unit 8</h3>
            
            <p className="text-lg leading-relaxed">
              Jennifer reminds Sarah that today's lesson is just the beginning of her Unit 8 journey. 
              "Now that you understand how the statements integrate, we'll use Excel to build a dynamic 
              model where changing one assumption updates everything automatically. Then we'll add 
              scenario analysis, so you can show investors how your business performs under different conditions."
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-sm">
                    <ArrowRight className="h-4 w-4" />
                    Next: Excel Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-blue-800">
                    Build dynamic links between Income Statement, Balance Sheet, and Cash Flow using 
                    advanced Excel formulas and cross-sheet references
                  </p>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Day 4-5</Badge>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4" />
                    Then: Scenario Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-purple-800">
                    Use Scenario Manager to test optimistic, pessimistic, and realistic business 
                    conditions, showing investors you've planned for different futures
                  </p>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">Day 6-7</Badge>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-orange-900 flex items-center gap-2 text-sm">
                    <Rocket className="h-4 w-4" />
                    Finally: VC Presentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-orange-800">
                    Present your complete financial model to a real VC panel, demonstrating 
                    mastery of investor-ready financial modeling and business communication
                  </p>
                  <Badge className="mt-2 bg-orange-100 text-orange-800">Day 8-10</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-6">
              <h4 className="text-amber-900 font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Real-World Application
              </h4>
              <p className="text-amber-800 mb-3">
                The skills you've developed today extend far beyond this classroom:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-amber-900 mb-2">Career Applications:</h5>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Financial analyst roles at corporations</li>
                    <li>• Investment banking and consulting</li>
                    <li>• Startup founding and fundraising</li>
                    <li>• Business development and strategy</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-amber-900 mb-2">Life Skills:</h5>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Personal financial planning and budgeting</li>
                    <li>• Investment decision-making</li>
                    <li>• Understanding business news and markets</li>
                    <li>• Evaluating business opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sarah's Investor Confidence</h3>
            
            <p className="text-lg leading-relaxed">
              As Sarah prepares for her next meeting with the venture capitalists, she feels a new 
              level of confidence. "I don't just have financial statements anymore," she reflects. 
              "I have an integrated financial model that shows how every part of my business connects. 
              When they ask tough questions about my cash flow or challenge my assumptions, I'll be ready."
            </p>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg my-6">
              <h5 className="text-green-900 font-medium mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Key Insight for Your Journey
              </h5>
              <p className="text-green-800 text-sm">
                Like Sarah, you now possess a skill that sets you apart from most business students 
                and even many professionals. Three-statement integration is advanced material typically 
                taught in MBA programs and professional certification courses. You're building expertise 
                that will serve you throughout your career in business, finance, or entrepreneurship.
              </p>
            </div>
          </div>

          {/* Reflection Journal */}
          <ReflectionJournal
            unitTitle="Unit 8, Lesson 3: Balance Sheet & Cash Flow Integration"
            prompts={reflectionPrompts}
          />

          {/* Preview Card */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Looking Ahead: Excel Mastery and Dynamic Modeling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-800 mb-4">
                In the next lessons, you'll transform your understanding into a working Excel model 
                that demonstrates true professional competency. Sarah's journey toward securing 
                $500,000 in funding continues with advanced Excel techniques that make her model 
                dynamic, scenario-ready, and investor-impressive.
              </p>
              
              <div className="bg-white p-4 rounded border border-indigo-200">
                <h5 className="font-medium text-indigo-900 mb-2">Coming Up in Unit 8:</h5>
                <ul className="text-indigo-800 text-sm space-y-1">
                  <li>• <strong>Lesson 4:</strong> Advanced Excel linking and formula integrity</li>
                  <li>• <strong>Lesson 5:</strong> Scenario Manager and sensitivity analysis</li>
                  <li>• <strong>Lesson 6:</strong> Professional model auditing and peer review</li>
                  <li>• <strong>Lesson 7:</strong> VC pitch deck development and storytelling</li>
                  <li>• <strong>Lessons 8-10:</strong> Mock VC presentations and Q&A mastery</li>
                </ul>
              </div>

              <p className="text-indigo-800 mt-4 font-medium">
                Each lesson builds toward Sarah's ultimate goal: convincing sophisticated investors 
                that TechStart Solutions deserves their trust and capital. Your mastery of these 
                skills will position you for success in any business career you choose.
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase6}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}