import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, AlertCircle } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"

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
    text: "A {blank} formula links the verification results to a visible Complete or Review message.",
    answer: "status",
    alternativeAnswers: ["status", "status formula", "control"],
    hint: "This message tells the user whether the close checks passed"
  },
  {
    id: "s4",
    text: "A {blank} checkpoint compares expected totals to actual totals to prove the automation ran correctly.",
    answer: "verification",
    alternativeAnswers: ["verification", "audit", "control", "check"],
    hint: "This proves the numbers are trustworthy"
  }
]

/**
 * Explain the linked workbook controls.
 * @returns The lesson content and activity controls.
 */
export default function Phase2Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-emerald-50">
      
      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">
              Phase 2: Tool Anatomy
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              The Parts of a Linked Close Model
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four building blocks turn a manual checklist into a live control model.
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
                  A named range gives a cell or range a readable label. Instead of <code>=SUM(C2:C50)</code>, you can write <code>=SUM(AdjustingEntries)</code>. Check the named range after you change the source layout. A deleted source can still cause a broken reference.
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
                  Each step of the close checklist becomes a calculation block. Block 1 computes adjusting entries. Block 2 produces the adjusted trial balance. Block 3 generates the financial statements. Use named inputs and cell references to link the blocks. Do not type calculated totals into output cells.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Key rule:</strong> Every block should be testable independently. You should be able to verify Block 1 without running Block 2.
                </p>
              </div>

              <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                <h4 className="font-semibold text-emerald-900 mb-2">4. Status Formula</h4>
                <p className="text-sm text-emerald-800">
                  A status formula first checks that the required cells contain numbers. It shows <strong>Not finished</strong> if data are missing. It then checks the adjustment difference and adjusted trial balance difference. Zero differences give <strong>Complete</strong>. Other results give <strong>Review flagged items</strong>. A balanced entry can still use the wrong amount. Compare each input with its source.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Formula pattern:</strong> <code>=IF(RequiredCellsMissing,"Not finished",IF(AND(AdjustmentDifference=0,AdjustedTBDifference=0),"Complete","Review flagged items"))</code>. This is a pattern. Use the cell references in the Lesson 5 tutorial for the workbook formula.
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
                  <h5 className="font-semibold text-red-900 mb-1">Typed output totals</h5>
                  <p className="text-sm text-red-800">
                    A typed total stays fixed when an input changes. Use a formula that refers to the source cells. Use named ranges to make important inputs easier to identify.
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
                    A status cell without visible source checks is not trustworthy. Show the debit-credit differences next to the status formula.
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-1">Status is fixed text</h5>
                  <p className="text-sm text-red-800">
                    A typed status does not respond to changed inputs. Use a formula that reads both verification cells.
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

        </section>
      </div>

    </div>
  )
}
