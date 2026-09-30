import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarClock, MessageCircle, Users } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-100">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-orange-100 text-orange-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">
              📅 Phase 1: Hook
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900">When the Schedule and Payroll Disagree</h2>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Sarah just signed Harbor Market, a neighborhood grocery store with five departments. A single Friday overtime
              mistake cost the store $1,870 because the whiteboard schedule and the payroll workbook told two different
              stories. Today’s mission: stitch the roster, the visual schedule, and the cash math together so TechStart can
              protect every payday.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-white/80">
            <CardHeader className="flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-orange-900">Week 18 Crisis Report</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-orange-900">
              <p>
                The bakery lead, Sierra, was booked for six morning shifts on paper but the payroll sheet only saw four. Two
                cashiers ended up double-scheduled on Saturday night, so both clocked in and the deli never had coverage. When
                payroll ran, three people crossed 40 hours and the business owner only found out when the bank balance dipped
                below rent money.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Scheduling lived on the wall → payroll couldn’t see it.</li>
                <li>Employees changed availability mid-week → no record inside the spreadsheet.</li>
                <li>Manager spent four hours reconciling by hand → investors called it “avoidable chaos.”</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">The Fix: One Workbook, Three Coordinated Sheets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-green-900">
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>EmployeeRoster</strong>: IDs, roles, hourly rates, departments, availability windows.</li>
                <li><strong>WeeklySchedule</strong>: A visual grid (Sun–Sat vs. shift blocks) that only pulls names from the roster.</li>
                <li><strong>Hours &amp; Gross</strong>: SUMIFS rolls the schedule into total hours and gross pay per employee.</li>
              </ol>
              <p>
                When all three talk to each other, Sarah can answer a client’s favorite question: “What happens to payroll if I
                open a new Sunday shift?” before saying yes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-700" />
              <CardTitle className="text-purple-900">Turn and Talk (3 minutes)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-purple-900">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-medium">Discuss with a partner:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Where have you seen a paper or screenshot schedule cause payroll confusion?</li>
                    <li>What information must live in the roster so the schedule stays trustworthy?</li>
                    <li>How will this new schedule feed the Payday Simulator you built in Lessons 01–04?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
