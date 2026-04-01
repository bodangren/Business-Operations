import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Lightbulb, TrendingUp } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[5]

const reflectionPrompts = [
  {
    id: "courage-net-pay",
    category: "courage" as const,
    prompt: "Describe a moment when you felt unsure about which deduction to apply first or how to handle a specific situation. What did you do to work through it?",
    placeholder: "Maybe you weren't sure about the order of deductions, or how 401k affects the calculation..."
  },
  {
    id: "adaptability-employer",
    category: "adaptability" as const,
    prompt: "How did you explain to someone why employer cost is higher than gross pay? How would you help a new business owner understand this?",
    placeholder: "Think about how you would make the 7.65% employer match make sense to someone who has never run payroll..."
  },
  {
    id: "persistence-deductions",
    category: "persistence" as const,
    prompt: "What was most challenging about calculating net pay for different employee types (hourly vs. salary vs. tipped)? How did you keep going when the numbers got complex?",
    placeholder: "Maybe handling the tipped employee scenario or making sure you didn't forget any deduction..."
  }
]

export default function Phase6Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Wrap-Up: From Gross to Net to Total Cost
          </h2>
          <p className="text-lg leading-relaxed">
            Today you learned the complete picture of what payroll really costs: what employees take home (net pay) 
            and what employers actually pay (total cost). Sarah can now answer both questions.
          </p>
        </div>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              What You Learned Today
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-green-900">
            <ul className="list-disc list-inside space-y-1">
              <li>Gross pay minus all deductions equals net pay (take-home)</li>
              <li>Employee deductions: federal tax, Social Security (6.2%), Medicare (1.45%), state tax</li>
              <li>Employer matches Social Security (6.2%) and Medicare (1.45%) on top of gross</li>
              <li>Employer total cost is approximately gross × 1.0765</li>
              <li>Pre-tax 401k contributions reduce taxable income</li>
              <li>Tipped employees must report tips as taxable gross</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Connection to the Cash-Crunch Story
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-purple-900">
            <p>Here's why today's lesson matters for TechStart's cash crunch:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong>Budgeting:</strong> Sarah must budget for employer cost, not just gross wages</li>
              <li><strong>Cash timing:</strong> Deductions are collected from employees but paid to the government on different schedules</li>
              <li><strong>Decision-making:</strong> A $50k salary actually costs ~$53,800 - that matters for hiring decisions</li>
              <li><strong>Compliance:</strong> Missing FICA matches or withholding can result in penalties</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Preview: Lesson 4 - Payroll Timing and Liabilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-slate-800">
            <p>Next lesson tackles the timing problem:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>When does the employer actually pay the taxes to the government?</li>
              <li>Why might the bank balance disagree with the payroll register?</li>
              <li>What happens if Sarah misses a tax deposit deadline?</li>
              <li>How do paycheck dates affect cash flow timing?</li>
            </ul>
          </CardContent>
        </Card>

        <ReflectionJournal
          unitTitle="Unit 5 Lesson 3: Deductions and Net Pay"
          prompts={reflectionPrompts}
        />

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Take-It-Forward Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-amber-900">
            <p>
              Before next class, calculate your own (hypothetical) budget: If you earned $25/hour and worked 40 hours 
              per week, what would your bi-weekly gross be? Then calculate your estimated net pay after typical deductions. 
              Bring your numbers to class.
            </p>
          </CardContent>
        </Card>
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