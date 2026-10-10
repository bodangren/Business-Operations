import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target } from "lucide-react"
import ClosingEntryPractice from "@/components/exercises/ClosingEntryPractice"


/**
 * Present independent closing-entry practice.
 * @returns The lesson content and activity controls.
 */
export default function Phase4Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="space-y-8">

        <div className="max-w-4xl mx-auto space-y-8">

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Deliberate Practice: Close the Books
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-purple-900">
                <p>
                  You know the four-step closing procedure. Now it's time to build speed and accuracy.
                  Each round gives you a new set of adjusted account balances. Your job is to identify
                  the correct accounts, debit and credit sides, and amounts for each closing entry. Then check the balances after posting.
                </p>
                <p>
                  The interface stays the same every round. Only the numbers change. Work through each
                  set carefully, then check your answers. If you miss, review the worked example before
                  trying the next round.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 not-prose">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-200 text-green-800">Mastery Target</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-800">
                      Get <strong>3 consecutive rounds</strong> correct to demonstrate mastery of the closing procedure.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-blue-200 text-blue-800">Feedback</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-800">
                      Feedback appears <strong>after you submit</strong>. If you miss, a worked example is available.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-amber-200 text-amber-800">Format</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-amber-800">
                      Select the <strong>account and side</strong> for each line. Enter a nonnegative journal amount. A loss reverses the Income Summary entry.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <ClosingEntryPractice masteryTarget={3} />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Quick Reference: The Four Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="not-prose space-y-2 text-sm text-blue-900">
                <div className="flex gap-2">
                  <Badge className="bg-blue-500 text-white flex-shrink-0">1</Badge>
                  <p>Close <strong>all revenue</strong> accounts to Income Summary (debit revenues, credit Income Summary for the total)</p>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-blue-500 text-white flex-shrink-0">2</Badge>
                  <p>Close <strong>all expense</strong> accounts to Income Summary (credit expenses, debit Income Summary for the total)</p>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-blue-500 text-white flex-shrink-0">3</Badge>
                  <p>Close <strong>Income Summary</strong> to Retained Earnings (the balance is net income or net loss)</p>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-blue-500 text-white flex-shrink-0">4</Badge>
                  <p>Close <strong>Dividends</strong> to Retained Earnings (credit Dividends, debit Retained Earnings)</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  )
}