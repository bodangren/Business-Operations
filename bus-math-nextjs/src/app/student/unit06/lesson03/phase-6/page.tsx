import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ArrowRight, Target, BookOpen } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[5]; // Closing phase

const cvpReflectionPrompts = [
  {
    id: 'courage-cvp',
    category: 'courage' as const,
    prompt: 'Building a CVP model from scratch required stepping into unfamiliar Excel territory. Describe a specific moment when you had to push through uncertainty or confusion to master a new concept or formula.',
    placeholder: 'Think about moments when the Excel formulas seemed complex, when you had to figure out cell references, or when you tackled the break-even calculations for the first time...'
  },
  {
    id: 'adaptability-cvp',
    category: 'adaptability' as const,
    prompt: 'CVP analysis involves juggling multiple variables and seeing how changes ripple through the entire model. How did you adapt your thinking or approach when your initial calculations didn\'t match expected results, or when you discovered errors in your Excel model?',
    placeholder: 'Consider times when you had to troubleshoot formulas, adjust your cost categorizations, or modify your approach based on feedback or new understanding...'
  },
  {
    id: 'persistence-cvp',
    category: 'persistence' as const,
    prompt: 'Professional Excel modeling requires attention to detail and persistence through multiple iterations. Describe a specific challenge in this lesson where you wanted to give up but kept working until you achieved the correct result.',
    placeholder: 'Reflect on moments with challenging Excel functions, complex break-even scenarios, or when creating professional charts required multiple attempts to get right...'
  }
];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Closing Introduction */}
          <Card className="border-indigo-200 bg-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-indigo-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                Reflecting on Your CVP Journey
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                Learning Integration &amp; Growth
              </Badge>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                Congratulations on completing your comprehensive exploration of Cost-Volume-Profit 
                analysis! You've journeyed from understanding Sarah's profit puzzle to building 
                sophisticated Excel models that reveal the hidden relationships between costs, 
                volume, and profitability.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
                <h3 className="font-semibold text-indigo-900 mb-3">What You've Accomplished</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-indigo-800 mb-2">Technical Mastery:</h4>
                    <ul className="text-indigo-700 text-sm space-y-1">
                      <li>• Built dynamic CVP models with Excel formulas</li>
                      <li>• Mastered break-even calculations and analysis</li>
                      <li>• Created professional business charts</li>
                      <li>• Applied scenario analysis techniques</li>
                      <li>• Used Goal Seek for strategic planning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800 mb-2">Strategic Thinking:</h4>
                    <ul className="text-indigo-700 text-sm space-y-1">
                      <li>• Connected pricing decisions to profitability</li>
                      <li>• Analyzed cost behavior and business risk</li>
                      <li>• Developed data-driven decision frameworks</li>
                      <li>• Understood investor-quality financial analysis</li>
                      <li>• Applied models to real business scenarios</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">The Bigger Picture</h3>
                <p className="text-green-800">
                  CVP analysis is more than formulas and charts—it's a fundamental business thinking 
                  skill. You now understand how successful entrepreneurs like Sarah make informed 
                  decisions about pricing, growth, and investment. These analytical capabilities 
                  set you apart in any business context.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Learning Connections */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Target className="w-5 w-5" />
                Connecting Your Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Previous Units</h4>
                  <p className="text-purple-700 text-sm">
                    Your accounting fundamentals from Units 1-2 provided the foundation for 
                    understanding cost categories. Your Excel skills built progressively to 
                    enable today's sophisticated modeling.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Current Application</h4>
                  <p className="text-purple-700 text-sm">
                    CVP analysis bridges accounting knowledge with strategic planning. 
                    You can now analyze any business model and understand its 
                    profitability drivers and risk factors.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Future Building</h4>
                  <p className="text-purple-700 text-sm">
                    These CVP skills will enhance your capstone project financial 
                    models and support advanced topics like investment analysis 
                    and business valuation in upcoming units.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CAP Framework Reflection */}
          <ReflectionJournal
            unitTitle="CVP Model Construction - Lesson 3 Reflection"
            prompts={cvpReflectionPrompts}
            className="bg-white border-gray-200"
          />

          {/* Key Insights & Applications */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <BookOpen className="w-5 w-5" />
                Key Insights for Future Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Professional Readiness</h4>
                  <p className="text-orange-700">
                    You've developed skills that practicing financial analysts use daily. Your ability 
                    to build dynamic Excel models, understand cost behavior, and connect analysis to 
                    business strategy demonstrates professional-level competency.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Entrepreneurial Foundation</h4>
                  <p className="text-orange-700">
                    Like Sarah, any entrepreneur must understand their unit economics. Your CVP 
                    modeling skills provide the analytical foundation for launching and scaling 
                    successful ventures, making you a more credible business leader.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-orange-200">
                  <h4 className="font-semibent text-orange-800 mb-2">Continuous Learning</h4>
                  <p className="text-orange-700">
                    The problem-solving persistence you developed while mastering Excel formulas 
                    and business concepts transfers to any complex challenge. You've proven you 
                    can learn sophisticated technical skills and apply them strategically.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps & Unit Preview */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <ArrowRight className="w-5 w-5" />
                Looking Ahead: The PriceLab Challenge Continues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                This lesson on CVP model construction is just one piece of the larger PriceLab 
                Challenge. Your growing expertise in cost-volume-profit analysis will support 
                the remaining lessons in Unit 6:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Upcoming Skills:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Goal Seek for target profit scenarios</li>
                    <li>• Data tables for sensitivity analysis</li>
                    <li>• Competitive pricing strategy development</li>
                    <li>• Professional business presentations</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Final Challenge:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Town Hall pricing debate preparation</li>
                    <li>• Data-driven pricing recommendations</li>
                    <li>• Professional stakeholder presentations</li>
                    <li>• Portfolio-ready business analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Celebration of Achievement */}
          <Card className="border-green-200 bg-green-50 text-center">
            <CardContent className="p-8">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Lesson 3 Complete - CVP Mastery Achieved!
              </h3>
              <p className="text-green-700 mb-4">
                You've successfully mastered Cost-Volume-Profit analysis and demonstrated the 
                analytical skills that drive successful businesses. Your journey from understanding 
                Sarah's challenge to building professional CVP models shows remarkable growth.
              </p>
              <p className="text-green-600 font-semibold">
                Ready to tackle the next challenge in your PriceLab journey!
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase} 
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}