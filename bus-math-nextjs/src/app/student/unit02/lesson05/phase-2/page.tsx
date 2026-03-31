import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, AlertCircle } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabSentences = [
  {
    id: "s1",
    text: "A {blank} gives a cell or range a readable name like 'PeriodStart' so formulas are self-documenting.",
    answer: "named range",
    alternativeAnswers: ["named range", "name", "named cell"],
    hint: "This replaces A1-style references with meaningful labels"
  },
  {
    id: "s2",
    text: "An {blank} area is a section of the workbook where users type data without touching calculation formulas.",
    answer: "input",
    alternativeAnswers: ["input", "data entry", "user input"],
    hint: "Keep data and formulas in separate zones"
  },
  {
    id: "s3",
    text: "A {blank}-triggered flow runs multiple calculation steps when the user clicks a single control.",
    answer: "button",
    alternativeAnswers: ["button", "macro button", "click"],
    hint: "One click replaces six manual steps"
  },
  {
    id: "s4",
    text: "A {blank} checkpoint compares expected totals to actual totals to prove the automation ran correctly.",
    answer: "verification",
    alternativeAnswers: ["verification", "audit", "control", "check"],
    hint: "This proves the numbers are trustworthy"
  }
]

const comprehensionQuestions = [
  {
    id: "q1",
    question: "Why should input areas be physically separated from calculation blocks in the workbook?",
    answers: [
      "So users cannot accidentally overwrite formulas when entering data",
      "Because Excel requires inputs and formulas to be on different sheets",
      "So the workbook file size stays small",
      "Because named ranges only work on separate sheets"
    ],
    explanation: "Separating inputs from calculations prevents users from accidentally deleting or overwriting formulas. It also makes the workbook easier to audit—you can see exactly which cells are user-provided and which are computed."
  },
  {
    id: "q2",
    question: "What is the most common failure mode when building a button-triggered macro flow?",
    answers: [
      "The macro references cells that moved or were renamed, causing it to run on the wrong data",
      "The button is the wrong color and users cannot find it",
      "Excel does not support buttons in workbooks",
      "Macros always delete the original data when they run"
    ],
    explanation: "The most common failure is a broken reference: the macro points to a cell address that changed when someone inserted a row or renamed a sheet. Named ranges reduce this risk because they follow the data even when cells move."
  },
  {
    id: "q3",
    question: "Which named range would be most useful for a month-end close automation?",
    answers: [
      "AdjustingEntries, CloseChecklist, AdjustedTB, CloseStatus",
      "Data1, Data2, Data3, Data4",
      "Sheet1!A1, Sheet1!A2, Sheet1!A3",
      "TempRange1, TempRange2, TempRange3"
    ],
    explanation: "Meaningful names like AdjustingEntries and CloseChecklist make the workbook self-documenting. Anyone can understand what each block does without reading the formulas. Generic names like Data1 provide no context."
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson05Data} 
        phase={currentPhase}
        phases={lesson05Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">
              Phase 2: Tool Anatomy
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              The Parts of a Clickable Close
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four building blocks turn a manual checklist into a one-click automation.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Before you build, you need to understand the four parts that make automation work. Each part has a specific job. If any one is missing or broken, the whole flow fails.
            </p>
          </div>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                The Four Building Blocks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                <h4 className="font-semibold text-emerald-900 mb-2">1. Named Ranges</h4>
                <p className="text-sm text-emerald-800">
                  A named range gives a cell or range a readable label. Instead of referencing <code>=SUM(C2:C50)</code>, you write <code>=SUM(AdjustingEntries)</code>. Named ranges follow the data when rows are inserted or deleted, so formulas do not break.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Where to find it in Excel:</strong> Select a cell or range → Formula tab → Define Name → Type a name like "PeriodStart".
                </p>
              </div>

              <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                <h4 className="font-semibold text-emerald-900 mb-2">2. Input Areas</h4>
                <p className="text-sm text-emerald-800">
                  An input area is a clearly labeled section where users type data—adjustment amounts, period dates, account balances. Input areas are <strong>separate from calculation blocks</strong> so users never accidentally overwrite a formula.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Design rule:</strong> Color-code input cells (e.g., light yellow) so users know exactly where to type.
                </p>
              </div>

              <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                <h4 className="font-semibold text-emerald-900 mb-2">3. Calculation Blocks</h4>
                <p className="text-sm text-emerald-800">
                  Each step of the close checklist becomes a calculation block. Block 1 computes adjusting entries. Block 2 produces the adjusted trial balance. Block 3 generates the financial statements. Each block reads from named ranges and input areas—never from hard-coded cell addresses.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Key rule:</strong> Every block should be testable independently. You should be able to verify Block 1 without running Block 2.
                </p>
              </div>

              <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                <h4 className="font-semibold text-emerald-900 mb-2">4. Button-Triggered Flow</h4>
                <p className="text-sm text-emerald-800">
                  A button (form control or macro button) runs the calculation blocks in order when clicked. The flow is: read inputs → run Block 1 → verify → run Block 2 → verify → report status. A <strong>CloseStatus</strong> cell shows "Complete" or "Error—check flagged items" after the flow runs.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Where to find it in Excel:</strong> Developer tab → Insert → Button (Form Control) → Assign a macro.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Common Failure Modes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-1">Hard-coded cell references</h5>
                  <p className="text-sm text-red-800">
                    Using <code>=C2+C50</code> instead of named ranges means the formula breaks when someone inserts a row. Always use named ranges.
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-1">Mixed inputs and formulas</h5>
                  <p className="text-sm text-red-800">
                    If users type data into cells that contain formulas, the automation breaks. Keep input areas physically separate and color-coded.
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-1">No verification checkpoint</h5>
                  <p className="text-sm text-red-800">
                    A button that runs without checking its results is dangerous. Always add a verification step that confirms debits equal credits.
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-1">Macro security blocks the button</h5>
                  <p className="text-sm text-red-800">
                    Excel may disable macros by default. Save the workbook as <code>.xlsm</code> (macro-enabled) and enable content when opening.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            title="Automation Vocabulary Check"
            description="Complete these sentences with the correct automation terminology."
            sentences={vocabSentences}
            showHints={true}
          />

          <ComprehensionCheck
            title="Tool Anatomy Check"
            description="Test your understanding of the four building blocks and their failure modes."
            questions={comprehensionQuestions}
            showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
