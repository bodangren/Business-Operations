import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "When Sarah spent $18,000 on new computers and office furniture for TechStart Solutions, why did her CPA Jennifer tell her to stop recording this as a simple expense?",
    answers: [
      "These items are long-term assets that will help her business for years, not just one month",
      "She doesn't have enough cash to cover the expense right now",
      "The items cost too much money to be considered business expenses", 
      "Jennifer wanted Sarah to return the equipment to save money"
    ],
    explanation: "Jennifer recognized that computers and office furniture are long-term assets that will benefit TechStart Solutions over multiple years, making them candidates for depreciation rather than immediate expensing."
  },
  {
    id: "hook-2", 
    question: "What is the main business concept that Sarah discovered when she realized her new computers would help her business for years?",
    answers: [
      "Depreciation - spreading the cost of long-term assets over their useful life",
      "Appreciation - increasing the value of assets over time",
      "Amortization - paying off loans in equal monthly payments",
      "Capitalization - borrowing money to buy expensive equipment"
    ],
    explanation: "Sarah discovered depreciation, which is the accounting method of spreading the cost of long-term assets over the years they will be used to generate revenue."
  },
  {
    id: "hook-3",
    question: "Why is choosing the right depreciation method important for a business like TechStart Solutions?",
    answers: [
      "It affects cash flow, tax obligations, and the company's official value",
      "It determines how much money Sarah can spend on new equipment",
      "It decides which insurance company she should choose for coverage",
      "It controls how many employees she can hire for the business"
    ],
    explanation: "Depreciation method selection has significant financial implications - it affects taxable income (and thus taxes), cash flow timing, and how assets appear on financial statements that investors review."
  },
  {
    id: "hook-4",
    question: "What triggered Sarah's need to understand asset depreciation beyond just the $18,000 purchase?",
    answers: [
      "Her business insurance policy needed a detailed list of all physical assets",
      "The bank required a list of assets before approving a business loan", 
      "Her customers wanted to see a list of her business equipment",
      "The government required all businesses to file asset depreciation reports"
    ],
    explanation: "Sarah's new business insurance policy needed a detailed asset list, which highlighted the importance of properly tracking and valuing her business assets over time."
  }
];

export default function Unit07Lesson02Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-4 pb-8 space-y-8">
        
        {/* Opening Scenario */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
              🏢 Sarah's Big Milestone: TechStart's First Real Office
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-green-900">
              Remember Sarah from TechStart Solutions? She's been on an amazing journey, building a smart ledger, 
              automating her month-end close, creating professional financial statements, analyzing data, managing 
              payroll, and revamping her pricing strategy. Each step has made her business stronger and more professional.
            </p>
            
            <p className="text-lg leading-relaxed text-green-900">
              Now, TechStart Solutions has moved into its first real office! This is a huge milestone, a sign that 
              her business is growing and becoming a serious company. But with a new office comes new challenges.
            </p>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <h3 className="font-semibold text-green-800 mb-2">The $18,000 Investment</h3>
              <p className="text-green-800">
                Sarah made a significant investment, spending about <strong>$18,000</strong> on brand new computers, 
                software, and office furniture to get everything set up perfectly. Her first thought was simple: 
                just record this $18,000 as a big expense, like buying paper clips or paying the internet bill.
              </p>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Jennifer's Warning</h3>
              <p className="text-yellow-800">
                But her CPA, Jennifer Kim, immediately told her to <strong>stop</strong>. Jennifer explained that 
                these items weren't just simple expenses; they were <em>long-term assets</em>. How Sarah accounted 
                for them would have a big impact on her taxes and the official value of her company.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-green-900">
              This was a big "aha!" moment for Sarah. She realized that these new items, like her powerful new 
              computers, would help her business for years, not just for a single month. This introduced her to 
              a powerful accounting concept: <strong>depreciation</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Why This Matters */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Why This Matters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800">
              Understanding depreciation isn't just about following accounting rules—it's about making smart 
              financial decisions that affect cash flow, tax obligations, and investor confidence. When Sarah 
              shows potential investors her asset management strategy, they can immediately see that she 
              understands how to optimize her business's financial resources over time.
            </p>
          </CardContent>
        </Card>

        {/* Turn and Talk */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-purple-900 mb-2">
              Discussion Prompt (3 minutes):
            </p>
            <p className="text-purple-800 mb-2">
              Think about Sarah's experience with the $18,000 equipment purchase. Share with a partner:
            </p>
            <ul className="list-disc list-inside space-y-1 text-purple-800">
              <li>What would happen if Sarah treated all equipment purchases as immediate expenses?</li>
              <li>How might this affect her taxes and cash flow in the first year versus future years?</li>
              <li>Why would investors care about how she accounts for these assets?</li>
            </ul>
          </CardContent>
        </Card>

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={hookQuestions}
          title="Understanding Sarah's Asset Challenge"
          description="Test your understanding of why depreciation matters for business decision-making."
          showExplanations={true}
        />

        {/* Connection to Learning */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">🎯 Today's Learning Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-800 mb-4">
              Today we'll explore the <strong>Depreciation Techniques</strong> that Sarah needs to master. 
              You'll learn how to calculate and apply different depreciation methods, understanding their 
              impact on cash flow and tax strategy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Key Concepts:</h4>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Straight-Line (SLN) depreciation method</li>
                  <li>• Double-Declining Balance (DDB) method</li>
                  <li>• Excel SLN and DDB functions</li>
                  <li>• Business impact of method selection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Learning Objectives:</h4>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Calculate depreciation schedules using multiple methods</li>
                  <li>• Build automated depreciation schedules with Excel functions</li>
                  <li>• Analyze cash flow and tax implications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}