import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FileText } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[4];

const assessmentQuestions = [
  {
    id: "u08l06-a1",
    question: "An asset has full-year SLN depreciation of $6,000 and was in service for 8 months. What is Year 1 depreciation?",
    answers: ["$4,000", "$6,000", "$3,000", "$8,000"],
    correctAnswer: 0,
    explanation: "Partial-year depreciation = $6,000 * 8/12 = $4,000."
  },
  {
    id: "u08l06-a2",
    question: "Which formula pattern correctly applies the partial-year rule to DDB Year 1?",
    answers: [
      "=DDB(cost, salvage, life, 1) * months / 12",
      "=DDB(cost, salvage, life, months)",
      "=SLN(cost, salvage, life) * 12 / months",
      "=cost * months / 12"
    ],
    correctAnswer: 0,
    explanation: "Use DDB for the full-year period 1 amount, then prorate by months in service divided by 12."
  },
  {
    id: "u08l06-a3",
    question: "Where does depreciation expense reduce reported profit?",
    answers: ["Mini income statement", "Asset register", "Purchase order", "Cash receipt"],
    correctAnswer: 0,
    explanation: "Depreciation expense is subtracted on the income statement when calculating operating income."
  },
  {
    id: "u08l06-a4",
    question: "In the mini balance sheet, net book value equals:",
    answers: [
      "Fixed asset cost minus accumulated depreciation",
      "Revenue minus depreciation expense",
      "DDB expense minus SL expense",
      "Salvage value minus cost"
    ],
    correctAnswer: 0,
    explanation: "Net book value is the fixed asset cost after subtracting accumulated depreciation."
  },
  {
    id: "u08l06-a5",
    question: "A good depreciation recommendation should cite:",
    answers: [
      "Specific numbers from the workbook, such as operating income and net book value differences",
      "Only which formula was easiest to type",
      "Only the original asset cost",
      "No numbers, only personal preference"
    ],
    correctAnswer: 0,
    explanation: "Professional recommendations use evidence from the workbook, especially statement impact numbers."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <ComprehensionCheck
                title="Partial-Year Workbook Logic Check"
                description="Show your understanding of partial-year depreciation, built-in Excel functions, and statement impact."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={true}
              />

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-base flex items-center gap-2">
                    <FileText className="h-5 w-5" /> Artifact Task: Depreciation Method Recommendation Memo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-800">
                  <p>
                    Write a short memo (3-5 sentences) to Sarah recommending a Year 1 depreciation method for assets purchased during the year. Use evidence from your partial-year workbook and mini statements.
                  </p>
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Your memo should include:</h4>
                    <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                      <li><strong>Claim:</strong> Which method do you recommend and why?</li>
                      <li><strong>Evidence:</strong> Cite at least two numbers, such as Year 1 depreciation, operating income, or net book value differences</li>
                      <li><strong>Risk:</strong> What is one limitation or tradeoff of your recommended method?</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Example structure:</h4>
                    <p className="text-sm text-slate-700 italic">
                      "I recommend [method] because [reason]. Our partial-year workbook shows that this method produces Year 1 depreciation of $[amount], operating income of $[amount], and net book value of $[amount]. However, [risk/limitation]."
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded border border-blue-300 text-sm">
                    <strong className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> Professional standard:</strong>
                    <span> A good recommendation connects method choice to the income statement and balance sheet.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  );
}
