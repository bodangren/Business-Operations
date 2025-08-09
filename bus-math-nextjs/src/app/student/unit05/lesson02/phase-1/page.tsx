import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter" 
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, AlertTriangle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson02Phases[0] // Phase 1: Hook

const hookQuestions = [
  {
    id: '1',
    question: 'What was the main reason Sarah from TechStart Solutions had to turn down the $25,000 project?',
    answers: [
      'She didn\'t have enough time to do the work herself',
      'She didn\'t have the technical skills required',
      'The client couldn\'t pay enough money',
      'She was too busy with other projects'
    ],
    explanation: 'Sarah\'s business was so successful that she reached her capacity limit. She realized she needed to hire help to grow her business further.'
  },
  {
    id: '2', 
    question: 'What is Sarah\'s biggest fear about hiring her first employee, Alex?',
    answers: [
      'Not having enough cash in the bank on payday',
      'Alex might not be a good worker',
      'She might lose control of her business',
      'The employee might steal from the company'
    ],
    explanation: 'Cash flow timing is the nightmare that keeps small business owners awake at night. Having enough money overall isn\'t the same as having it available when payroll is due.'
  },
  {
    id: '3',
    question: 'What happened to Maria\'s café that illustrates the payroll cash crunch problem?',
    answers: [
      'Her payroll checks bounced because the weekend cash sales weren\'t deposited yet',
      'She didn\'t have enough revenue to cover payroll',
      'Her employees quit because she couldn\'t pay them',
      'She had to close the café due to lack of funds'
    ],
    explanation: 'Maria had the money, but the timing was wrong. The payroll left her account instantly on Friday, but the weekend cash wasn\'t deposited until Monday, causing an overdraft.'
  },
  {
    id: '4',
    question: 'What is the main purpose of building a "Payday Simulator"?',
    answers: [
      'To predict when payroll cash is needed so you can avoid timing problems',
      'To calculate how much to pay employees',
      'To track employee hours worked',
      'To manage employee benefits and deductions'
    ],
    explanation: 'The Payday Simulator helps business owners see into the future of their bank account, predicting cash needs to avoid the timing traps that create payroll crises.'
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="max-w-4xl mx-auto px-6 pb-8 space-y-8">
        {/* Hook Content */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              Every Business Owner's Nightmare
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              The Friday Crisis
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              It's 3 PM on a Friday. Sarah just processed payroll for her first employee, Alex. 
              The money left her business account instantly. Over the weekend, her business was busy and made great sales. 
              But when she checks her account Monday morning—disaster strikes.
            </p>
          </div>

          {/* Story Content */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 text-2xl">Maria's Café: A Cautionary Tale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-red-800">
              <p className="text-lg leading-relaxed">
                Maria's café was thriving. Her employees were happy, customers loved her coffee, and business was good. 
                Every Friday, she ran payroll like clockwork—a routine she'd done dozens of times before.
              </p>
              <p className="text-lg leading-relaxed">
                But this particular Friday was different. After processing payroll, she noticed her account balance was getting low. 
                "No problem," she thought. "We'll have a busy weekend, and I'll deposit the cash sales Monday morning."
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                Monday morning arrived with a shock: her account was overdrawn. The payroll checks were bouncing.
              </p>
              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <p className="font-semibold mb-2">The Critical Problem:</p>
                <p>
                  Maria had the money—her weekend sales proved that. But she didn't have it when she needed it. 
                  The payroll left her account instantly on Friday, but the weekend cash wouldn't be available until Monday. 
                  Now she faced an impossible choice: let her employees' paychecks bounce and lose their trust, 
                  or take out an expensive emergency loan to cover the gap.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sarah's Challenge */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-2xl">Sarah's Growth Dilemma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-800">
              <p className="text-lg leading-relaxed">
                After implementing her data-driven decision making system, Sarah's TechStart Solutions has never been busier. 
                In fact, she recently had to turn down a $25,000 project because she simply didn't have the time to do the work herself.
              </p>
              <p className="text-lg leading-relaxed">
                The solution is clear: hire her first employee, Alex, a talented developer. 
                But the thought terrifies her. It's not just about paying a salary—it's about being responsible for someone else's livelihood.
              </p>
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                <p className="font-semibold mb-2">Sarah's Fear:</p>
                <p>
                  "What if I end up like Maria? What if I can't make payroll on time? 
                  My cash flow is still irregular because I work on a project basis. 
                  Adding a big, fixed cost every month feels like walking a tightrope without a safety net."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why This Matters */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                💡 Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-800">
              <p className="text-lg leading-relaxed">
                Understanding gross-to-net pay calculations isn't just about math—it's about building the foundation for confident hiring decisions. 
                When you know exactly how much each paycheck will cost, you can predict your cash needs and avoid the timing disasters that destroy small businesses.
              </p>
              <p className="text-lg leading-relaxed">
                Today, you'll master the mathematics behind every single paycheck. By the end of this lesson, 
                you'll understand how Sarah can calculate exactly what Alex will cost her business, 
                not just in gross salary, but in the true take-home amount after all taxes and deductions.
              </p>
              <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                <p className="font-semibold mb-2">Your Mission:</p>
                <p>
                  Master the precise calculations that transform gross pay into net pay, 
                  so you can help Sarah build a Payday Simulator that predicts exactly when and how much cash she'll need. 
                  No more Friday crises. No more sleepless nights. Just confident, data-driven hiring decisions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Think-Pair-Share Discussion */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-blue-800 mb-2">
                Think about Maria's payroll crisis and Sarah's hiring fears. 
                Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>What specific timing problems could arise when managing payroll for a small business?</li>
                <li>How might irregular income (like Sarah's project-based work) make payroll planning even more challenging?</li>
                <li>What information would Sarah need to predict her payroll cash requirements accurately?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <ComprehensionCheck
            questions={hookQuestions}
            title="Understanding the Payroll Cash Challenge"
            description="Test your understanding of why cash flow timing matters for payroll management"
            showExplanations={true}
          />
        </div>
      </main>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}