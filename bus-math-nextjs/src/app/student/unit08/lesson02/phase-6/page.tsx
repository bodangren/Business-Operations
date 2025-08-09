import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ArrowRight, Star } from "lucide-react";
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[5]; // Closing phase

// Custom reflection prompts for this specific lesson
const integrationReflectionPrompts = [
  {
    id: 'courage-integration',
    category: 'courage' as const,
    prompt: 'Three-statement integration requires stepping outside the comfort zone of working with individual spreadsheets. What was the most challenging aspect of thinking about financial statements as an integrated system rather than separate documents?',
    placeholder: 'Reflect on moments when the complexity felt overwhelming, when you had to trust that the connections would make sense, or when you pushed through confusion about cross-sheet formulas...'
  },
  {
    id: 'adaptability-integration',
    category: 'adaptability' as const,
    prompt: 'As you worked through the integration exercises, how did you adapt your approach when you encountered concepts that didn\'t match your initial expectations? How did you adjust your mental model of how financial statements work together?',
    placeholder: 'Think about times when you had to revise your understanding, change your problem-solving strategy, or adapt to the interconnected nature of financial modeling...'
  },
  {
    id: 'persistence-integration',
    category: 'persistence' as const,
    prompt: 'Building integrated financial models requires persistence through technical complexity and business logic challenges. Describe a specific moment when you wanted to give up on understanding integration but pushed through. What motivated you to continue?',
    placeholder: 'Consider moments of frustration with formula syntax, confusion about statement relationships, or when the business logic seemed too complex to master...'
  }
];

export default function Unit08Lesson02Phase6() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit08Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* Closing Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Synthesis and Reflection: Your Integration Journey
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            You've just completed a fundamental milestone in your financial modeling journey. Understanding 
            three-statement integration isn't just about mastering Excel techniques - it's about developing 
            the systems thinking that distinguishes professional entrepreneurs from amateur business owners. 
            Like Sarah discovered in her investor meeting, this skill set is the foundation for building 
            credibility with serious investors.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            As you prepare to build your complete Year-1 Startup Model in the remaining lessons, take time 
            to reflect on the learning process itself. The CAP framework (Courage, Adaptability, Persistence) 
            will be essential as you tackle increasingly sophisticated modeling challenges that mirror the 
            real-world complexity of business planning.
          </p>
        </div>

        {/* Key Accomplishments */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-900 mb-4 text-xl flex items-center gap-2">
            <Star className="h-5 w-5" />
            What You've Accomplished
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">Technical Mastery</h4>
              <ul className="list-disc list-inside space-y-2 text-green-800 text-sm">
                <li>Understand the interdependencies between Income Statement, Balance Sheet, and Cash Flow Statement</li>
                <li>Recognize how formula integrity creates dynamic, adaptable financial models</li>
                <li>Master the validation principles that ensure mathematical consistency</li>
                <li>Apply cross-sheet reference techniques for professional model construction</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">Strategic Thinking</h4>
              <ul className="list-disc list-inside space-y-2 text-green-800 text-sm">
                <li>Appreciate why integration demonstrates entrepreneurial sophistication to investors</li>
                <li>Understand how business decisions create ripple effects across financial statements</li>
                <li>Recognize the power of scenario analysis enabled by integrated models</li>
                <li>Connect technical modeling skills to strategic business communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Bigger Picture */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-4 text-xl flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            The Bigger Picture: Your Year-1 Startup Model
          </h3>
          <p className="text-blue-800 leading-relaxed mb-4">
            Today's integration principles are the foundation for your capstone challenge: building a complete, 
            investor-ready financial model that can withstand the scrutiny of professional venture capitalists. 
            Sarah's success didn't happen overnight - it built layer by layer, starting with exactly the concepts 
            you've mastered today.
          </p>
          
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-3 flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              From Integration to Investment-Ready Model
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-blue-700 text-sm">
              <div className="text-center p-2 bg-blue-50 rounded">
                <div className="font-semibold mb-1">Foundation</div>
                <div className="text-xs">Three-statement integration (Today)</div>
              </div>
              <div className="text-center p-2 bg-blue-50 rounded">
                <div className="font-semibold mb-1">Complexity</div>
                <div className="text-xs">Scenario analysis &amp; sensitivity</div>
              </div>
              <div className="text-center p-2 bg-blue-50 rounded">
                <div className="font-semibold mb-1">Professional Standards</div>
                <div className="text-xs">Industry-grade formatting &amp; validation</div>
              </div>
              <div className="text-center p-2 bg-blue-50 rounded">
                <div className="font-semibold mb-1">Investor Presentation</div>
                <div className="text-xs">VC Demo Day pitch with live model</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sarah's Continued Journey */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-purple-900 mb-4 text-xl">Sarah's Story Continues</h3>
          <p className="text-purple-800 leading-relaxed mb-4">
            Remember Sarah's transformation from that initial awkward investor meeting to building a sophisticated, 
            integrated model? That journey continues in Unit 8 as she faces increasingly complex modeling challenges: 
            building scenario analysis for different growth rates, creating sensitivity tables for key variables, 
            and ultimately delivering a flawless presentation that wins her the $500,000 investment round.
          </p>
          <p className="text-purple-800 leading-relaxed">
            Your integration skills from today are the foundation that makes everything else possible. Without solid 
            integration, there's no reliable scenario analysis. Without formula integrity, there's no investor confidence. 
            Today's seemingly technical concepts are actually the strategic thinking skills that separate successful 
            entrepreneurs from the rest.
          </p>
        </div>

        {/* CAP Framework Reflection */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">CAP Framework Reflection</h3>
            <p className="text-gray-600">
              Use the reflection journal below to process your learning journey through the lens of 
              Courage, Adaptability, and Persistence. These metacognitive skills will be essential 
              as modeling challenges increase in complexity.
            </p>
          </div>
          
          <ReflectionJournal
            unitTitle="Three-Statement Integration Learning Reflection"
            prompts={integrationReflectionPrompts}
          />
        </div>

        {/* Preview of Next Learning */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-4 text-xl">Preview: What's Coming Next</h3>
          <p className="text-yellow-800 leading-relaxed mb-4">
            In the next lesson, you'll take integration to the next level by completing Sarah's Balance Sheet 
            integration with sophisticated working capital modeling. You'll learn how growth creates cash flow 
            challenges, why profitable companies can still run out of money, and how professional models 
            anticipate and plan for these scenarios.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-yellow-300">
              <h4 className="font-medium text-yellow-900 mb-2">Technical Skills</h4>
              <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                <li>Complete Cash Flow Statement integration with working capital adjustments</li>
                <li>Build dynamic Balance Sheet models that respond to operational changes</li>
                <li>Implement validation checks that ensure model integrity under all scenarios</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-300">
              <h4 className="font-medium text-yellow-900 mb-2">Business Applications</h4>
              <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                <li>Understand why rapid growth can create cash flow crises</li>
                <li>Model the working capital implications of different business strategies</li>
                <li>Prepare for investor questions about cash management and growth sustainability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Motivation */}
        <div className="text-center bg-gray-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">You're Building Something Extraordinary</h3>
          <p className="text-lg leading-relaxed mb-4">
            Every professional financial modeler started exactly where you are today - mastering the integration 
            principles that seem complex now but will become second nature with practice. Sarah's investor success 
            began with understanding these same concepts you've just learned.
          </p>
          <p className="text-lg leading-relaxed">
            As you continue building your Year-1 Startup Model, remember that you're not just learning Excel techniques - 
            you're developing the systematic thinking that creates successful entrepreneurs and convinces investors 
            to fund ambitious dreams. Keep building, keep integrating, and keep pushing toward that final VC Demo Day presentation.
          </p>
        </div>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}