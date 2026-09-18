import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb } from "lucide-react";

 // Closing

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="space-y-8">

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                What You Built in Lesson 3
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-indigo-700 leading-relaxed">
                Today you moved past cost sorting and into real pricing decisions Sarah can defend in
                front of investors.
              </p>
              <ul className="list-disc list-inside text-sm text-indigo-800 space-y-1">
                <li>Contribution Margin Sprint: compared three pricing options with one cost base.</li>
                <li>Break-Even Ladder: ranked options by break-even difficulty.</li>
                <li>Capacity Reality Check: tested each option against monthly delivery limits.</li>
                <li>Target-Profit Reverse Solve: worked backward to required units or price.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Why This Matters for Investor Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 text-sm leading-relaxed">
                Investors rarely ask only "What is your price?" They ask whether the price is feasible,
                what break-even looks like, and how quickly the team can hit target profit. You now have
                a clear framework for answering those questions with evidence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Bridge to Lesson 4
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700">
                Next, you&apos;ll use Goal Seek to automate the reverse-solving work you did manually today,
                so pricing and profit targets can be updated instantly during live business discussions.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
