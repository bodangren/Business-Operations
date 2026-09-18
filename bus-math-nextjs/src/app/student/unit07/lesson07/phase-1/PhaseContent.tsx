import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, Target } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-red-100 text-red-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">🎯 Phase 1: Rehearsal Purpose</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Dress Rehearsal Before the Real Project</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Today is not the real project. It is a guided practice run. Every student in the class is working with the <strong>same shared dataset</strong> on purpose — so we can compare reasoning quality, evidence chains, and workbook standards directly. In Lessons 08-10, your group will get its own business scenario and must recreate everything you practice today without a teacher model to follow step by step.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Why a Rehearsal?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-900 space-y-3">
              <p>
                You have already learned FIFO, LIFO, Specific ID, and Weighted Average by hand (Lessons 02-04). You have built workbooks that switch methods and calculate turnover (Lessons 05-06). Now you need to prove you can put it all together into a <strong>complete, investor-ready inventory analysis</strong> — and that is harder than it sounds.
              </p>
              <p>
                The rehearsal gives you a safe space to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Practice the exact workbook structure you will reuse in the project</li>
                <li>See what a complete recommendation looks like before you write your own</li>
                <li>Learn to audit workbook quality using a shared standard</li>
                <li>Identify which habits and structures you must carry forward independently</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Today vs. The Real Project
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h3 className="font-bold text-amber-800 mb-2">Today (Rehearsal)</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Everyone uses the same shared dataset</li>
                    <li>Teacher model available for reference</li>
                    <li>Guided audit and structured practice</li>
                    <li>Peer critique focuses on learning the standard</li>
                    <li>Mistakes are expected and part of the process</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h3 className="font-bold text-amber-800 mb-2">Lessons 08-10 (Project)</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Each group gets its own unique dataset</li>
                    <li>No step-by-step teacher model</li>
                    <li>Your team makes all structure decisions</li>
                    <li>Peer critique evaluates final deliverable quality</li>
                    <li>Your recommendation must stand on its own evidence</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk (2 minutes)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <p className="font-medium mb-2">Discussion Prompt:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>What part of the inventory project are you most unsure about?</li>
                <li>What would make a workbook feel weak or untrustworthy to you as a reader?</li>
                <li>What one habit from Lessons 05-06 do you most want to carry into the project?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
