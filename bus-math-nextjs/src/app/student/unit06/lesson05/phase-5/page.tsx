import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[4]; // Assessment

const assessmentQuestions = [
  {
    id: "assess-1",
    question: "Which statement is true about one‑variable Data Tables?",
    answers: [
      "They vary one input and read one output formula",
      "They vary two inputs and read two outputs",
      "They must use VLOOKUP",
      "They require macros"
    ],
    explanation: "A one‑variable Data Table varies one input (e.g., price) and reads a single output formula (e.g., profit)."
  },
  {
    id: "assess-2",
    question: "Two‑variable Data Tables are best when you want to compare:",
    answers: [
      "Price and units combinations on profit",
      "Expenses by department",
      "Dates and times",
      "Customer names"
    ],
    explanation: "They produce a sensitivity grid for two changing inputs, often price and volume."
  },
  {
    id: "assess-3",
    question: "Professional error handling for a Profit cell typically uses:",
    answers: [
      "IFERROR(calculation, 0)",
      "TEXTJOIN",
      "HYPERLINK",
      "MERGE"
    ],
    explanation: "IFERROR prevents scary error messages during demos while inputs are incomplete."
  },
  {
    id: "assess-4",
    question: "Which is NOT a good validation rule for CVP inputs?",
    answers: [
      "Allow negative variable costs to slip through",
      "Flag blank product IDs",
      "Warn on stale dates",
      "Check for out‑of‑range prices"
    ],
    explanation: "Negative variable costs are not realistic and should be flagged immediately."
  },
  {
    id: "assess-5",
    question: "Method switching means:",
    answers: [
      "Solving for different inputs (price, units, fixed, variable) to hit a profit target",
      "Changing spreadsheet colors",
      "Swapping worksheets",
      "Deleting old data"
    ],
    explanation: "Analysts switch the ‘by changing’ input based on the decision being tested."
  },
  {
    id: "assess-6",
    question: "Why do investors care about margin of safety?",
    answers: [
      "It shows how far above break‑even the current plan operates",
      "It makes charts colorful",
      "It speeds up printing",
      "It hides errors"
    ],
    explanation: "Margin of safety communicates risk cushion if sales drop."
  },
  {
    id: "assess-7",
    question: "A clear, investor‑ready model will usually include:",
    answers: [
      "Inputs section, calculations, outputs, documentation, and validation",
      "Hidden rows and columns to protect secrets",
      "Merged cells in data tables",
      "Random hard‑coded overrides"
    ],
    explanation: "Good structure + transparency builds credibility."
  },
  {
    id: "assess-8",
    question: "When should you prefer Data Tables over Goal Seek?",
    answers: [
      "When exploring many what‑if scenarios at once",
      "When changing a single input to match one exact target",
      "When formatting titles",
      "When cleaning text"
    ],
    explanation: "Data Tables are for broad scenario analysis; Goal Seek is for one exact target."
  },
  {
    id: "assess-9",
    question: "Which formula pair best supports professional CVP models?",
    answers: [
      "IFERROR + structured references",
      "LEFT + RIGHT",
      "RANDBETWEEN + RAND",
      "TODAY + NOW"
    ],
    explanation: "Error handling plus clear Table[Column] references improve reliability and readability."
  },
  {
    id: "assess-10",
    question: "Operating leverage is most useful for explaining:",
    answers: [
      "How sensitive profit is to changes in sales volume",
      "How many tabs are open",
      "The color of the theme",
      "Which cells are merged"
    ],
    explanation: "It quantifies profit sensitivity when fixed costs are a large share of total costs."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit06Data} 
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
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    Advanced CVP: Professional Mastery Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    Answer each question to show technical skill and business judgment. 
                    Investor‑ready means accurate automation and clear communication.
                  </p>
                </CardContent>
              </Card>

              <ComprehensionCheck 
                title="CVP Automation Knowledge Check"
                description="8–10 comprehensive questions mixing technical knowledge and applied business judgment."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={true}
              />

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}

