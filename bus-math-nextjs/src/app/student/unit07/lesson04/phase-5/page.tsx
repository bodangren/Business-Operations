import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter" 
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[4]

export default function Unit07Lesson04Phase5() {
  const assessmentQuestions = [
    {
      id: "a1",
      question: "In a period of rising prices, which method typically results in lower reported profit?",
      answers: [
        "LIFO",
        "FIFO",
        "Weighted Average",
        "Specific Identification"
      ],
      explanation: "LIFO assigns the most recent (higher) costs to COGS, lowering profit."
    },
    {
      id: "a2",
      question: "Which Excel feature ensures formulas expand as new rows are added?",
      answers: [
        "Excel Tables with structured references",
        "Manual named ranges",
        "Absolute references ($A$2:$A$100)",
        "Paste Special values"
      ],
      explanation: "Excel Tables automatically resize and keep references consistent."
    },
    {
      id: "a3",
      question: "Your model shows negative UnitCost. What should a professional validation rule do?",
      answers: [
        "Flag the row as an error until corrected",
        "Ignore the row",
        "Set the cost to zero",
        "Hide the row so it doesn’t print"
      ],
      explanation: "Professional models surface errors clearly so they can be fixed."
    },
    {
      id: "a4",
      question: "Which function best replaces VLOOKUP for flexible, robust lookups?",
      answers: [
        "XLOOKUP",
        "HLOOKUP",
        "OFFSET",
        "INDEX alone"
      ],
      explanation: "XLOOKUP handles left/right lookups and better error control."
    },
    {
      id: "a5",
      question: "A sale of 60 units occurs after three purchases: 30 @ $20, 30 @ $22, 50 @ $24. FIFO COGS is:",
      answers: [
        "$1,260",
        "$1,200",
        "$1,320",
        "$1,440"
      ],
      explanation: "FIFO uses first 30@$20 (600) + next 30@$22 (660) = $1,260."
    },
    {
      id: "a6",
      question: "Which statement aligns with investor expectations?",
      answers: [
        "Models should include clear method labels and validation checks",
        "Pretty colors are enough if totals look right",
        "Hiding inputs makes models ‘cleaner’",
        "Manual updates are fine if documented"
      ],
      explanation: "Transparency and validation build trust in reported figures."
    },
    {
      id: "a7",
      question: "What is a safe way to calculate weighted totals by condition?",
      answers: [
        "SUMPRODUCT with logical tests",
        "SUM over visible cells only",
        "Manually multiplying and summing each row",
        "COUNTIF plus SUM"
      ],
      explanation: "SUMPRODUCT can multiply arrays filtered by conditions for weighted sums."
    },
    {
      id: "a8",
      question: "If prices are falling, which method likely shows higher profit?",
      answers: [
        "FIFO",
        "LIFO",
        "Both are the same",
        "Neither method affects profit"
      ],
      explanation: "FIFO uses older, higher costs when prices fall, often yielding higher profits."
    },
    {
      id: "a9",
      question: "Which is the best description of a ‘layer’ in inventory valuation?",
      answers: [
        "A batch of units purchased at the same cost",
        "A formatting style in Excel",
        "A worksheet tab",
        "A pivot table filter"
      ],
      explanation: "Each purchase at a given unit cost forms a cost layer used for allocation."
    },
    {
      id: "a10",
      question: "What should you do after adding two new purchases to test robustness?",
      answers: [
        "Verify COGS and Ending Inventory update without editing formulas",
        "Rebuild all formulas from scratch",
        "Change the sheet protection settings",
        "Screenshot the workbook"
      ],
      explanation: "Well‑built models update automatically when the tables grow."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">📊 Phase 5: Assessment</Badge>
          <h1 className="text-3xl font-bold text-gray-900">FIFO/LIFO: Professional Mastery Assessment</h1>
        </div>

        <ComprehensionCheck
          title="Comprehensive Knowledge Check"
          description="Apply both technical skills and business judgment."
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}

