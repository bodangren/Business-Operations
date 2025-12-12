import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ClipboardList, Share2 } from "lucide-react"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[4] // Assessment phase

const assessmentQuestions = [
  {
    id: "assess-1",
    question: "Which part of today's calculator guarantees you're referencing the correct tax table?",
    answers: [
      "The data-validation selector tied to your named ranges",
      "Typing the table name manually",
      "Color-coding the sheet",
      "Adding a logo"
    ],
    explanation: "The selector enforces valid table names, so the lookup always pulls from the right range."
  },
  {
    id: "assess-2",
    question: "Why does the lookup formula use approximate match mode (the final argument = 1)?",
    answers: [
      "It finds the closest income bracket when the exact value isn't listed",
      "It makes Excel run faster",
      "It prevents negative numbers",
      "It hides the formula from other users"
    ],
    explanation: "Approximate match moves to the correct bracket so Sarah always gets the right yearly tax."
  },
  {
    id: "assess-3",
    question: "What should you do if the selector shows a blank after you rename a tax table?",
    answers: [
      "Update the named range list so the selector still points to a valid name",
      "Ignore it and hope the lookup still works",
      "Delete the entire workbook",
      "Switch to a random table"
    ],
    explanation: "Whenever you rename a table, refresh the validation list to keep the selector + lookup in sync."
  }
]

export default function Phase5Page() {
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
            Assessment: Defend Your Selector + Lookup
          </h2>
          <p className="text-lg leading-relaxed">
            A calculator is only useful if someone else can trust it. Prove your build works by walking through the rubric below, 
            trading calculators with a partner, and finishing the checkpoint quiz.
          </p>
        </div>

        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-100">
                <Share2 className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 text-lg mb-1">
                  Partner Exchange (6 minutes)
                </h3>
                <ul className="list-disc list-inside text-sm text-purple-900 space-y-1">
                  <li>Swap laptops or share screens.</li>
                  <li>Have your partner pick a new taxable income and selector option.</li>
                  <li>They should explain what they trust and what they question about your lookup.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-100">
                <ClipboardList className="h-6 w-6 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-900 text-lg mb-1">
                  Peer Critique Snapshot
                </h3>
                <p className="text-green-800 text-sm mb-3">
                  Capture structured feedback using the PeerCritiqueForm. Focus on clarity, accuracy, and explainability.
                </p>
                <PeerCritiqueForm
                  projectTitle="Unit 05 Lesson 03 – Tax Table Selector"
                  peerName="Partner"
                  unitNumber={5}
                />
                <p className="text-xs text-green-700 mt-2">
                  Use the “Excel Technical Skills” section to comment on selector accuracy and lookup logic, and the “Business Analysis” or “Presentation” sections to capture client-facing explanations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-slate-100">
                <CheckCircle2 className="h-6 w-6 text-slate-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 text-lg mb-1">
                  Selector + Lookup Checkpoint
                </h3>
                <p className="text-slate-700 text-sm mb-3">
                  Answer these items to confirm you can explain the technical choices behind your build.
                </p>
                <ComprehensionCheck
                  title="Selector Integrity Quiz"
                  description="Three quick questions about the architecture you just built"
                  questions={assessmentQuestions}
                  showExplanations={true}
                  allowRetry={true}
                />
              </div>
            </div>
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
