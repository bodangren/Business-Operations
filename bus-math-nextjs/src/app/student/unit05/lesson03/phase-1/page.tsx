import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Calculator, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[0] // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "Why is Sarah afraid to hire Alex, even though her business is successful?",
    answers: [
      "She fears not having enough cash to pay him consistently", 
      "She doesn't trust Alex's programming skills",
      "She doesn't want to share profits with another person",
      "She thinks hiring employees is illegal for small businesses"
    ],
    explanation: "Sarah's main fear is cash flow management. Having enough revenue doesn't guarantee having cash available when payroll is due, especially with irregular project-based income."
  },
  {
    id: "hook-2", 
    question: "What specific problem does a payroll calculator solve for business owners?",
    answers: [
      "It predicts exactly how much cash will be needed for each payday",
      "It eliminates the need to pay taxes on employee wages", 
      "It allows businesses to pay employees less than minimum wage",
      "It automatically deposits money into employee bank accounts"
    ],
    explanation: "A payroll calculator helps predict cash needs by accurately computing gross pay, taxes, and deductions to determine net pay amounts and timing."
  },
  {
    id: "hook-3",
    question: "In the story about Maria's café, what caused her payroll checks to bounce?",
    answers: [
      "Timing mismatch between cash earnings and electronic payroll withdrawals",
      "She didn't have enough total revenue to cover payroll",
      "Her employees worked too many overtime hours", 
      "The bank made an error processing her business account"
    ],
    explanation: "Maria had the money but faced a timing problem - payroll left her account immediately on Friday, but weekend cash sales weren't deposited until Monday."
  }
]

export default function Phase1Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        {/* Hook Story */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Sarah's Big Decision
          </h2>
          
          <p className="text-lg leading-relaxed">
            Sarah Chen stared at her laptop screen, looking at the email that had just changed everything. 
            A major client wanted TechStart Solutions to build a complete e-commerce platform—a six-month 
            project worth $75,000. It was the kind of contract that could transform her small business into 
            something much bigger.
          </p>

          <p className="text-lg leading-relaxed">
            But there was one massive problem: she couldn't do it alone. The project required 40 hours 
            of development work per week, and Sarah was already working 50+ hours on her current clients. 
            She'd have to turn down this life-changing opportunity unless she made a decision that 
            terrified her more than any business challenge she'd faced.
          </p>

          <p className="text-lg leading-relaxed">
            She needed to hire her first employee.
          </p>
        </div>

        {/* Business Challenge */}
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>The Friday Crisis:</strong> Sarah remembered Maria's café story from her entrepreneurship class. 
            Maria's business was thriving, but her payroll checks bounced because the cash from weekend sales 
            hadn't been deposited when Friday payroll hit her account. The timing mismatch nearly destroyed 
            employee trust and her business reputation.
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Sarah had already talked to Alex Rodriguez, a talented developer she'd met at a local tech meetup. 
            Alex was interested in joining TechStart as her first full-time employee at $65,000 per year. 
            The math seemed simple: the big contract would pay $75,000, Alex's salary would cost $65,000, 
            leaving $10,000 profit. But Sarah knew business math was never that simple.
          </p>

          <p className="text-lg leading-relaxed">
            What would Alex actually cost? How much would show up in his bank account each month? When 
            exactly would that money leave her business account? Sarah realized she needed more than 
            gut feelings and rough estimates. She needed a system—a tool that could predict every penny 
            of payroll costs and timing.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Why This Matters
          </h3>
          <p className="text-blue-800">
            Today you'll build the exact tool Sarah needs: a prototype payroll calculator. This isn't 
            just about math—it's about giving entrepreneurs the confidence to grow their teams. By the 
            end of this lesson, you'll understand how to calculate gross pay, apply tax withholdings, 
            and use Excel's IF functions to handle different employee types. Most importantly, you'll 
            see how accurate payroll calculations connect to cash flow management and business growth.
          </p>
        </div>

        {/* Think-Pair-Share */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-green-900 mb-2">
              Discussion Prompt (3 minutes):
            </p>
            <p className="text-green-800 mb-2">
              Think about Sarah's situation with hiring Alex. Share with a partner:
            </p>
            <ul className="list-disc list-inside space-y-1 text-green-800">
              <li>What hidden costs might Sarah face beyond Alex's $65,000 salary?</li>
              <li>How could a payroll calculator help her avoid Maria's "Friday Crisis"?</li>
              <li>What Excel skills would be most valuable for building this tool?</li>
            </ul>
          </CardContent>
        </Card>

        {/* Comprehension Check */}
        <ComprehensionCheck
          title="Understanding the Payroll Challenge"
          description="Test your understanding of the business problem we're solving."
          questions={hookQuestions}
          showExplanations={true}
        />
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}