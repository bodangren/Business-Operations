import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ClipboardList, MonitorCheck, PenTool } from "lucide-react"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[3]

const deliverables = [
  "Taxable income table completed for every employee in the dataset",
  "Pay stub layout linked to the selector with no broken references",
  "Professional styling: logo placeholder, section headers, net pay highlight",
  "Print-ready formatting (fit to 1 page, margins 0.5 in, readable fonts)",
  "QA checklist completed (FIT, FICA, state tax match manual calculations)"
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-100">
      <PhaseHeader lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="max-w-full whitespace-normal text-center leading-tight bg-emerald-100 text-emerald-900 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">
            🛠️ Phase 4: Independent Practice
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Finish the Pay Stub Studio</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            You have 15 minutes. Work with focus, but produce your own file. Every student will export a PDF of one pay stub
            for peer critique tomorrow.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Scenario Expectations</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Each employee must produce a believable pay stub (no blank taxes unless that state truly has zero).</li>
                <li>Include Additional Withholding on the stub even if it is 0 this period.</li>
                <li>Create a memo line that explains the pay period (e.g., "Pay Period: Mar 1–Mar 14, 2025").</li>
                <li>Optional: Add a QR code or placeholder for a digital signature to show professionalism.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <MonitorCheck className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Deliverables Checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800">
              <ul className="list-disc list-inside space-y-1">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <PenTool className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Design Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>Use fonts like Source Sans or Calibri for readability.</li>
                <li>Add thin divider lines between sections to guide the eye.</li>
                <li>Keep colors subtle (2 accent colors max) so the stub prints clearly in grayscale.</li>
              </ul>
            </CardContent>
          </Card>

          <Alert className="border-amber-200 bg-amber-50">
            <AlertDescription className="text-amber-900 text-sm">
              <strong>QA Reminder:</strong> Pick two employees and recalc FIT/FICA/State with a calculator. If your workbook
              disagrees by more than $0.50, fix it before exporting.
            </AlertDescription>
          </Alert>
        </section>
      </main>

      <PhaseFooter lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
