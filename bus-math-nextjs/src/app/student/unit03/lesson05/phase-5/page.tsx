import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = [
  {
    id: "u3a1",
    question: "Best practice for mapping AccountID to StatementLine?",
    answers: [
      "XLOOKUP with if_not_found using Map Table columns",
      "VLOOKUP with approximate match and fixed ranges",
      "INDEX only with hard‑coded row numbers",
      "Manual copy/paste into a summary sheet"
    ],
    explanation: "XLOOKUP with the if_not_found argument prevents #N/A and keeps logic readable with tables."
  },
  {
    id: "u3a2",
    question: "Which validation proves the cash flow statement ties to the balance sheet?",
    answers: [
      "EndingCash = BeginningCash + NetCashFlow (within tolerance)",
      "Revenue − Expenses = Net Income",
      "Assets = Liabilities + Equity",
      "Gross Margin % = Revenue / COGS"
    ],
    explanation: "Cash reconciliation confirms the cash bridge is accurate."
  },
  {
    id: "u3a3",
    question: "What breaks first when using fixed ranges like C2:C200?",
    answers: [
      "New rows are excluded from totals",
      "Formulas calculate twice as fast",
      "XLOOKUP stops working",
      "Tables cannot be created"
    ],
    explanation: "Fixed ranges don’t auto‑expand; tables do."
  },
  {
    id: "u3a4",
    question: "Cleanest way to route logic for Base/Stretch/Conservative?",
    answers: [
      "SWITCH(Scenario, " + '"Base",1,"Stretch",1.1,"Conservative",0.9)' + ")",
      "Nested IF(Scenario=\"Base\",1, IF(Scenario=\"Stretch\",1.1,0.9))",
      "Multiple copies of each formula on different sheets",
      "Manual overrides for each month"
    ],
    explanation: "SWITCH is more readable and maintainable than nested IFs for discrete modes."
  },
  {
    id: "u3a5",
    question: "Where should audit flags live for investor confidence?",
    answers: [
      "Visible near the summary with clear labels",
      "Hidden on a helper tab",
      "Embedded in long formulas only",
      "Left for manual checks later"
    ],
    explanation: "Flags should be obvious and close to the story you’re telling."
  },
  {
    id: "u3a6",
    question: "Which rollup pattern is correct for COGS?",
    answers: [
      "SUMIFS(TransactionTable[Amount], TransactionTable[StatementLine], " + '"COGS"' + ")",
      "SUMIF(C:C, " + '"COGS"' + ", TransactionTable[Amount])",
      "SUM(TransactionTable[Amount]=\"COGS\")",
      "AVERAGEIFS(TransactionTable[Amount], TransactionTable[StatementLine], " + '"COGS"' + ")"
    ],
    explanation: "SUMIFS with table columns and exact criteria is the standard."
  },
  {
    id: "u3a7",
    question: "If Assets − (Liabilities + Equity) = 1.25, what should your model do?",
    answers: [
      "Surface a red validation flag with guidance",
      "Hide the error until month‑end",
      "Round to 0 and move on",
      "Delete the outlier row"
    ],
    explanation: "Professional models never hide tie breaks; they guide fixes."
  },
  {
    id: "u3a8",
    question: "Best way to document assumptions for investors?",
    answers: [
      "A short, labeled block near KPIs with scenario notes",
      "A long email chain",
      "Hidden comments on random cells",
      "No documentation to keep it clean"
    ],
    explanation: "Concise, visible documentation builds trust and speeds review."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Three‑Statement Automation: Professional Mastery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate both technical accuracy and applied business judgment. Aim for investor‑ready clarity.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ComprehensionCheck
            title="Mastery Check"
            description="8 questions on automation patterns, validation, and communication."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Performance Standards</CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-900">
              <ul className="list-disc list-inside space-y-1">
                <li>All links use tables and exact matches.</li>
                <li>Scenario switch is readable and controls the right drivers.</li>
                <li>Validation flags are present and accurate.</li>
                <li>Summary is clear, concise, and professional.</li>
              </ul>
              <p className="mt-3 text-sm">
                Career connection: Analysts and consultants rely on these patterns daily to maintain model integrity
                under time pressure while communicating results to executives and investors.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

