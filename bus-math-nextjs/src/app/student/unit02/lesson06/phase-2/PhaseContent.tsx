import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, AlertCircle } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"

const vocabSentences = [
  {
    id: "s1",
    text: "A {blank} rule prevents users from entering invalid data before the automation runs.",
    answer: "validation",
    alternativeAnswers: ["validation", "data validation", "input validation"],
    hint: "This is the first line of defense against bad data"
  },
  {
    id: "s2",
    text: "A {blank} lets users select from predefined options without typing into formula cells.",
    answer: "dropdown",
    alternativeAnswers: ["dropdown", "drop-down", "data validation list", "list"],
    hint: "A user-facing control for scenario selection"
  },
  {
    id: "s3",
    text: "An {blank} panel shows inputs, outputs, and verification results in one visible place.",
    answer: "audit",
    alternativeAnswers: ["audit", "audit trail", "control"],
    hint: "This proves the numbers are trustworthy"
  },
  {
    id: "s4",
    text: "{blank} accuracy means the workbook follows consistent accounting rules and produces verifiable results.",
    answer: "GAAP",
    alternativeAnswers: ["GAAP", "generally accepted accounting principles", "accounting"],
    hint: "The standard for financial reporting credibility"
  }
]

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
              The Parts of a Polished Interface
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three building blocks turn a working automation into a usable, trustworthy tool.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Your Lesson 5 workbook runs the close. But it is a prototype—functional but not polished. Today you add three layers that make it professional.
            </p>
          </div>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                The Three Polish Layers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                <h4 className="font-semibold text-emerald-900 mb-2">1. Validation Rules</h4>
                <p className="text-sm text-emerald-800">
                  Validation rules check inputs before the automation runs. They catch negative amounts, missing account IDs, dates outside the period, and any value that would produce wrong results. Use Excel's Data Validation feature (Data tab → Data Validation) and conditional formatting to make violations visible.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Common failure mode:</strong> Validation that silently allows bad data. Always make violations visible—use red borders, error messages, or flag cells.
                </p>
              </div>

              <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                <h4 className="font-semibold text-emerald-900 mb-2">2. User-Facing Controls</h4>
                <p className="text-sm text-emerald-800">
                  Controls like dropdowns, toggle cells, and labeled input areas let users change scenarios without touching formulas. A dropdown for the close period (March, April, May) is safer than asking users to find and edit the right cells.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Where to find it in Excel:</strong> Data tab → Data Validation → Allow: List → enter options (e.g., "March,April,May"). Link the dropdown to a cell that your formulas reference.
                </p>
              </div>

              <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                <h4 className="font-semibold text-emerald-900 mb-2">3. Audit Panel</h4>
                <p className="text-sm text-emerald-800">
                  An audit panel is a visible summary at the top of the sheet showing: the inputs used, the outputs produced, and whether verification checks passed. It answers the question "How do I know this is correct?" without requiring anyone to read formulas.
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  <strong>Design rule:</strong> The audit panel should be readable in 10 seconds. Use clear labels, green/red indicators, and no more than 5-7 key values.
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
                  <h5 className="font-semibold text-red-900 mb-1">Validation that is invisible</h5>
                  <p className="text-sm text-red-800">
                    If validation only exists in hidden logic, users will not see errors until the output is wrong. Always make validation visible on the sheet.
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-1">Dropdowns that do not drive formulas</h5>
                  <p className="text-sm text-red-800">
                    A dropdown that changes a cell but is not referenced by any formula is decorative, not functional. Always link the control to your calculation logic.
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-1">Audit panel that is too long</h5>
                  <p className="text-sm text-red-800">
                    An audit panel with 20 items is not readable. Limit it to the 5-7 most important values: period, total adjustments, verification status, and key outputs.
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-1">No GAAP traceability</h5>
                  <p className="text-sm text-red-800">
                    If someone cannot trace an output back to its input and the rule that produced it, the workbook is not GAAP-compliant. Label every calculation block.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            title="Polish Vocabulary Check"
            description="Complete these sentences with the correct terminology."
            sentences={vocabSentences}
            showHints={true}
          />

        </section>
      </div>

    </div>
  )
}
