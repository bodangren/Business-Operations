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
    question: "A $20,000 asset with a 5-year life and $2,000 salvage value. What is the Year 1 DDB expense?",
    answers: ["$8,000", "$3,600", "$4,000", "$10,000"],
    correctAnswer: 0,
    explanation: "DDB Year 1 = Cost × (2 / Life) = $20,000 × (2/5) = $8,000. Note: DDB uses full cost, not depreciable base."
  },
  {
    id: "u08l06-a2",
    question: "Why does DDB show lower net income than SL in Year 1?",
    answers: [
      "DDB expense is higher in Year 1, reducing profit more",
      "DDB uses a different tax rate",
      "SL includes salvage value in Year 1 but DDB does not",
      "DDB expenses the entire cost in Year 1"
    ],
    correctAnswer: 0,
    explanation: "DDB front-loads depreciation expense. Higher expense means lower net income. This is the key tradeoff of accelerated depreciation."
  },
  {
    id: "u08l06-a3",
    question: "What is the total depreciation over the asset's life under SL vs DDB?",
    answers: [
      "The same for both methods",
      "DDB depreciates more total",
      "SL depreciates more total",
      "It depends on the salvage value"
    ],
    correctAnswer: 0,
    explanation: "Both methods depreciate exactly Cost − Salvage Value over the asset's life. The only difference is timing."
  },
  {
    id: "u08l06-a4",
    question: "Your DDB schedule shows a book value of $500 below salvage value in the final year. What went wrong?",
    answers: [
      "The salvage value floor was not applied — the MIN formula is missing or incorrect",
      "The straight-line rate was used instead of the DDB rate",
      "The cost was entered incorrectly in the register",
      "The accumulated depreciation formula references the wrong cell"
    ],
    correctAnswer: 0,
    explanation: "DDB without a salvage floor can drive book value below salvage. The fix is MIN(BookValue × Rate, BookValue − Salvage) for each year's expense."
  },
  {
    id: "u08l06-a5",
    question: "An investor asks why TechStart uses straight-line. The best evidence-based answer is:",
    answers: [
      "Straight-line matches the asset's steady use pattern, giving predictable expense and stable reported profit",
      "Straight-line is easier to calculate in Excel",
      "Double-declining balance is not allowed for financial reporting",
      "The auditor insisted on straight-line"
    ],
    correctAnswer: 0,
    explanation: "SL is appropriate when an asset provides steady benefit. The comparison workbook lets you show both methods and defend the choice based on the asset's actual use pattern."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              ✅ Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <ComprehensionCheck
                title="Method Comparison & Workbook Logic Check"
                description="Show your understanding of depreciation method comparison, workbook checks, and statement impact."
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
                    Write a short memo (3-5 sentences) to Sarah recommending a depreciation method for TechStart&apos;s new delivery van 
                    ($30,000 cost, 5-year life, $5,000 salvage value). Use evidence from your comparison workbook.
                  </p>
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Your memo should include:</h4>
                    <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                      <li><strong>Claim:</strong> Which method do you recommend and why?</li>
                      <li><strong>Evidence:</strong> Cite at least two numbers from your comparison workbook (e.g., Year 1 expense difference, book value difference)</li>
                      <li><strong>Risk:</strong> What is one limitation or risk of your recommended method?</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Example structure:</h4>
                    <p className="text-sm text-slate-700 italic">
                      &quot;I recommend straight-line depreciation for the delivery van because [reason]. 
                      Our comparison workbook shows that DDB would expense $[amount] more in Year 1, reducing 
                      reported profit by [amount]. However, [risk/limitation].&quot;
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded border border-blue-300 text-sm">
                    <strong className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> Professional standard:</strong>
                    <span> A good recommendation uses workbook evidence, not opinion. Cite specific numbers from your comparison sheet.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  );
}
