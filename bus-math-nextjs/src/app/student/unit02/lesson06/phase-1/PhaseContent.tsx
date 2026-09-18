import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ShieldCheck, Users } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">
      
      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              Phase 1: Tool Pressure
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              It Runs—But Can Anyone Else Use It?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah built the automation. Now she needs to make it usable, trustworthy, and professional.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              In Lesson 5, Sarah built a linked close model. It works with the original inputs. But when her part-time bookkeeper tried to use it for a new month, three things went wrong:
            </p>
          </div>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                What Went Wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-100 p-4 rounded border border-red-300">
                <h5 className="font-semibold text-red-900 mb-2">Problem 1: No Input Guards</h5>
                <p className="text-sm text-red-800">
                  The bookkeeper typed a negative number into the Supplies field. The automation ran without complaint and produced a negative expense. No validation rule caught the error.
                </p>
              </div>
              <div className="bg-red-100 p-4 rounded border border-red-300">
                <h5 className="font-semibold text-red-900 mb-2">Problem 2: No Way to Switch Scenarios</h5>
                <p className="text-sm text-red-800">
                  When April arrived, the bookkeeper did not know which cells to change. There was no dropdown, no toggle, no clear instruction. She edited cells at random and broke the formulas.
                </p>
              </div>
              <div className="bg-red-100 p-4 rounded border border-red-300">
                <h5 className="font-semibold text-red-900 mb-2">Problem 3: No Audit Trail</h5>
                <p className="text-sm text-red-800">
                  Sarah's accountant asked: "What inputs did you use? What changed from last month?" There was no record. The workbook produced numbers but could not explain them.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                What Polish Adds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800">
                A polished wizard interface is not about making things look pretty. It is about making the workbook <strong>usable by someone who did not build it</strong>. Today you will add:
              </p>
              <ul className="text-sm text-green-800 space-y-1 ml-4 list-disc">
                <li><strong>Validation rules</strong> that catch bad inputs before formulas use them</li>
                <li><strong>User-facing controls</strong> (dropdowns, toggle cells) that let scenarios change without editing formulas</li>
                <li><strong>An audit panel</strong> that shows inputs, outputs, and verification results in one place</li>
              </ul>
              <div className="bg-green-100 p-4 rounded border border-green-300 mt-4">
                <p className="text-sm text-green-700">
                  <strong>Today's target:</strong> Transform the Lesson 5 automation into a polished, usable month-end tool that maintains GAAP accuracy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-2 font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>What makes a spreadsheet feel professional vs. amateur?</li>
                <li>If you handed your Lesson 5 workbook to a stranger, what would they struggle with?</li>
                <li>What visible proof would convince an accountant that your numbers are correct?</li>
              </ul>
            </CardContent>
          </Card>

        </section>
      </div>

    </div>
  )
}
