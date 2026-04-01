import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lightbulb } from "lucide-react"
import CrossSheetLinkSimulator from "@/components/business-simulations/CrossSheetLinkSimulator"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              Phase 3: Safe Rehearsal
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Practice Cross-Sheet Links Before the Real Build</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Before you open the workbook, practice identifying the correct cross-sheet reference
              for each critical link. This simulator mirrors the exact linking logic you will build next.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                How This Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-purple-900">
              <p className="text-sm">
                Each challenge shows you a <strong>source</strong> cell on one sheet and a <strong>target</strong> cell on another.
                Your job is to pick the correct cross-sheet formula that links them.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Read the source and target carefully</li>
                <li>Choose the formula that creates a live link (not a hard-coded value)</li>
                <li>Submit to see whether you are correct and why</li>
                <li>Complete all 5 challenges before moving to the workbook sprint</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-white">
            <CardHeader>
              <CardTitle className="text-gray-900">Link Logic Trainer</CardTitle>
              <CardDescription>
                Select the correct cross-sheet formula for each scenario.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CrossSheetLinkSimulator />
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Bridge to Phase 4: The Workbook Sprint
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-blue-900">
              <p className="text-sm">
                In the next phase, you will open the actual TechStart workbook and build these links yourself.
                Here is what you need to know before you start:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Starting file:</strong> <span className="font-mono">/resources/unit03-lesson05-student.xlsx</span></li>
                <li><strong>What is already built:</strong> Three separate tabs (Income Statement, Balance Sheet, Cash Flow) with correct numbers but no links between them</li>
                <li><strong>Your job:</strong> Add cross-sheet references and integrity checks so the three statements work as one model</li>
                <li><strong>Definition of Done:</strong> All three links work, all integrity checks show &ldquo;OK&rdquo;, and changing one number updates all statements</li>
              </ul>
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
