'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, PlayCircle } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🎯 Phase 1: Rehearsal Purpose</Badge>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <PlayCircle className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                    Project Rehearsal: Shared Data, Shared Standard
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-gray-800">
                    Before you jump into your independent group project, we're going to do a guided rehearsal together.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-blue-800 flex items-center gap-2">
                          <Users className="w-5 h-5" /> Today: Guided Rehearsal
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-blue-900">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Everyone uses the same teacher-provided data</li>
                          <li>High teacher guidance</li>
                          <li>Practice the project structure</li>
                          <li>Compare quality directly with classmates</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-purple-800 flex items-center gap-2">
                          <Target className="w-5 h-5" /> Next: Real Project
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-purple-900">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Your group gets its own unique dataset</li>
                          <li>More independent work</li>
                          <li>Apply what you rehearse today</li>
                          <li>Create your own investor-ready deliverable</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2">
                    <Users className="w-5 h-5" /> Turn & Talk (3 minutes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-900 font-medium mb-2">What are you most curious about in the project?</p>
                  <ul className="list-disc list-inside text-yellow-900 space-y-1">
                    <li>What makes a workbook feel trustworthy to an investor?</li>
                    <li>What parts of today's rehearsal do you think will be hardest to transfer?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

