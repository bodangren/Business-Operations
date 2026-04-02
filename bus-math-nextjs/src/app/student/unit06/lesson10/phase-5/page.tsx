import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson10Data, unit06Data, lesson10Phases } from "../lesson-data"
import { projectGroups } from "../../project-workbooks"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[4]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <PhaseHeader unit={unit06Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-600 text-white">
              Phase 5: Final Submission
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Submit Your Final Workbook and Presentation Artifact</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Presentations are done. Now it is time to officially submit your work.
              This phase ensures every team turns in a complete, polished, and correctly named set of deliverables.
              Check each item carefully before submitting.
            </p>
          </div>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="text-xl">Submission Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Your team must submit the following items to receive full credit for Milestone 3:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">1. Final Workbook</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Your complete Excel workbook with all seven sheets. This is the primary evidence of your analysis.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li><strong>File Name:</strong> Must follow the convention <code className="bg-amber-100 px-1 rounded">Period-TeamName-Unit06-Project.xlsx</code></li>
                    <li><strong>Sheets:</strong> CostSetup, PriceOptions, Feasibility, TargetProfit, PriceSensitivity, ProfitMatrix, Dashboard</li>
                    <li><strong>Quality:</strong> All formulas working, no blank cells, clean formatting</li>
                    <li><strong>Dashboard:</strong> Must include recommendation, 3+ cited numbers, and risk statement</li>
                  </ul>
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">2. Presentation Artifact</p>
                  <p className="text-sm text-gray-700 mt-1">
                    A written record of your recommendation. This can be a memo, slide deck, or structured notes.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li><strong>Content:</strong> Must include your Claim, Evidence, Risk, and Close</li>
                    <li><strong>Format:</strong> PDF, PowerPoint, or Word document</li>
                    <li><strong>Clarity:</strong> Should be readable by someone who did not attend your presentation</li>
                    <li><strong>Evidence:</strong> Must cite the same numbers you used in your oral presentation</li>
                  </ul>
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">3. Individual Reflection</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Each team member submits their own reflection (completed in Phase 6).
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li><strong>Topic:</strong> What you learned about pricing, risk, and teamwork</li>
                    <li><strong>Length:</strong> 3-5 thoughtful sentences</li>
                    <li><strong>Honesty:</strong> Reflect on both successes and challenges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle>Final Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Before you submit, verify every item below. Your teacher will use this checklist to grade your submission.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-900 mb-2">Workbook Checks</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>File name matches convention</li>
                    <li>All 7 sheets present and complete</li>
                    <li>Dashboard is polished and readable</li>
                    <li>Recommendation includes 3+ cited numbers</li>
                    <li>Risk statement is specific and honest</li>
                    <li>No calculation errors in supporting sheets</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-900 mb-2">Artifact Checks</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Artifact includes Claim, Evidence, Risk, Close</li>
                    <li>Numbers match the workbook exactly</li>
                    <li>Formatting is professional and clear</li>
                    <li>File is saved in correct format (PDF/PPTX/DOCX)</li>
                    <li>Reflection is complete for each team member</li>
                    <li>All files are submitted to the correct location</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle>How to Submit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Follow these steps to submit your deliverables:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Save your files:</strong> Ensure your workbook and artifact are saved with the correct names</li>
                <li><strong>Check your work:</strong> Run through the checklist above one last time</li>
                <li><strong>Upload:</strong> Submit your files to the designated folder or learning management system</li>
                <li><strong>Confirm:</strong> Verify that your teacher received all files and they open correctly</li>
                <li><strong>Reflect:</strong> Complete your individual reflection in Phase 6</li>
              </ol>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-amber-800">
                  <strong>Missing file recovery:</strong> If you need to re-download your starter workbook, use the links below.
                  Note that you will need to rebuild your analysis if you lost your working file.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                  {projectGroups.map((group) => (
                    <li key={group.id}>
                      <strong>{group.label}:</strong>{" "}
                      <a className="underline text-blue-600" href={group.workbookPath} download>
                        {group.workbookFile}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What Happens After Submission?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Once you submit:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Your teacher will review your workbook and artifact using the rubric</li>
                <li>You will receive feedback on technical accuracy, strategic rationale, and communication</li>
                <li>Your reflection will be reviewed for depth of understanding</li>
                <li>Final grades will be posted after all submissions are evaluated</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
