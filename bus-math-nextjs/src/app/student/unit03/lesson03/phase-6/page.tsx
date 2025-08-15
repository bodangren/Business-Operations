import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ArrowRight, TrendingUp, Users } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[5]; // Closing phase

const reflectionPrompts = [
  {
    id: 'courage-income-statement',
    category: 'courage' as const,
    prompt: 'Building professional INDEX/MATCH formulas can feel intimidating. What was the most challenging Excel technique you tackled today, and how did you push through your comfort zone to master it?',
    placeholder: 'Think about specific moments when you felt uncertain about a formula or technique but persisted anyway. What gave you the courage to keep trying when Excel seemed complex or overwhelming?'
  },
  {
    id: 'adaptability-formulas',
    category: 'adaptability' as const,
    prompt: 'When your INDEX/MATCH formulas returned errors or unexpected results, how did you adapt your approach? Describe a specific time you had to troubleshoot or adjust your strategy.',
    placeholder: 'Reflect on how you handled formula errors, missing data, or unexpected results. How did you modify your approach when your first attempt didn\'t work as planned?'
  },
  {
    id: 'persistence-professional-modeling',
    category: 'persistence' as const,
    prompt: 'Professional financial modeling requires attention to detail and persistence through complex formulas. When did you feel like giving up today, but chose to persist? What motivated you to continue?',
    placeholder: 'Consider moments when the technical details felt overwhelming or when you wanted to use shortcuts instead of proper professional techniques. What kept you committed to building a truly professional model?'
  }
];

export default function Unit03Lesson03Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
            <Lightbulb className="h-8 w-8" />
            Closing: The First Chapter of Your Financial Story
          </h2>
          
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-200 mb-8">
            <p className="text-lg leading-relaxed text-indigo-900">
              Congratulations! You've just written the first chapter of your business's financial storyboard. Like Sarah, 
              you've moved beyond basic spreadsheets to create a professional Income Statement that investors can trust 
              and understand. But this is just the beginning—the plot of your story is only one part of the complete 
              three-statement narrative.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            What You've Accomplished Today
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">🔧 Technical Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Built dynamic INDEX/MATCH formulas</li>
                  <li>• Used named table references professionally</li>
                  <li>• Created automatically updating financial models</li>
                  <li>• Applied validation checks for accuracy</li>
                  <li>• Demonstrated Excel modeling best practices</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg">💼 Business Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Analyzed expense ratios and profit margins</li>
                  <li>• Connected Income Statement to investor needs</li>
                  <li>• Understood financial statement integration</li>
                  <li>• Developed strategic insights from financial data</li>
                  <li>• Built credible, professional presentations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            Sarah's Journey Continues
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Remember where Sarah started this lesson—with perfectly organized internal records that weren't enough for 
            investors. Now she has the first part of her professional financial storyboard: an Income Statement that 
            automatically tells the "plot" of her business profitability. But investors need the complete story.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3 text-lg flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Looking Ahead: Completing the Storyboard
            </h4>
            <p className="text-amber-800 mb-3">
              The Income Statement answers "Is the business profitable?" But investors have two more critical questions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-amber-300">
                <h5 className="font-medium text-amber-900 mb-2">🏢 The Balance Sheet</h5>
                <p className="text-amber-700 text-sm">
                  "What does the business own vs. owe?" This shows the financial position and connects to 
                  your Income Statement through Retained Earnings.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-amber-300">
                <h5 className="font-medium text-amber-900 mb-2">💰 Cash Flow Statement</h5>
                <p className="text-amber-700 text-sm">
                  "How is cash actually moving?" Profitability and cash flow are different—this statement 
                  shows the real liquidity story.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3 text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Your Growth as a Business Leader
            </h4>
            <p className="text-blue-800">
              Today you moved from student to practitioner. You built the same professional financial models that 
              successful entrepreneurs use to secure funding, make strategic decisions, and communicate with stakeholders. 
              The INDEX/MATCH skills you mastered are the foundation for every advanced Excel technique you'll encounter 
              in business.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            Reflection: Your Learning Journey
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Take a few minutes to reflect on your experience building professional Income Statements. How did you 
            demonstrate courage, adaptability, and persistence through the technical challenges? This metacognitive 
            reflection helps you recognize your growth and prepare for even more complex financial modeling ahead.
          </p>
        </div>

        <ReflectionJournal
          unitTitle="Income Statement Construction Reflection"
          prompts={reflectionPrompts}
        />

        <div className="prose prose-lg max-w-none mt-8">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2 text-lg flex items-center gap-2">
              <Users className="h-5 w-5" />
              Community & Collaboration
            </h3>
            <p className="text-purple-800 mb-3">
              You didn't just learn Excel formulas today—you practiced the collaborative skills that make businesses 
              successful. Through peer critique, discussion, and problem-solving together, you built both technical 
              competence and professional communication skills.
            </p>
            <p className="text-purple-700 text-sm">
              <strong>Remember:</strong> In the real world, financial models are always reviewed by teams. The peer 
              feedback process you practiced mirrors how professionals ensure accuracy and improve their work.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border border-green-200 mt-6">
            <h3 className="font-semibold text-green-900 mb-3 text-lg">🌟 Unit 3 Progress: The Journey Continues</h3>
            <p className="text-green-800 mb-3">
              You've completed the first major milestone of Unit 3. Sarah now has her Income Statement—the "plot" of 
              her business story. But the complete three-statement storyboard requires integration with the Balance 
              Sheet and Cash Flow Statement.
            </p>
            <p className="text-blue-800 text-sm">
              <strong>Next Steps:</strong> You'll learn how Net Income flows into Retained Earnings, how cash flow 
              differs from profit, and how to build KPI dashboards that summarize complex financial stories for busy 
              investors. The foundation you built today makes everything ahead possible.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mt-6">
            <h3 className="font-semibold text-indigo-900 mb-2 text-lg">🎯 Key Takeaway</h3>
            <p className="text-indigo-800">
              Professional financial modeling isn't just about Excel formulas—it's about building trust, telling 
              compelling stories with data, and creating systems that scale with business growth. Today you took 
              a major step toward thinking like an entrepreneur who can confidently present to investors, banks, 
              and business partners.
            </p>
            <p className="text-indigo-700 text-sm mt-3 italic">
              "The difference between amateur and professional isn't perfection—it's methodology, transparency, 
              and the ability to build systems that others can trust and understand."
            </p>
          </div>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  );
}