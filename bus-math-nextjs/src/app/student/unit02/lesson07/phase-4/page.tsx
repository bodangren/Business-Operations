'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ArrowUpRight, FileText } from "lucide-react"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[3]

const transferFeatures = [
  {
    category: "Structure",
    items: [
      "Same seven-sheet tab structure (Data, Adjustments, Trial Balance, Financial Statements, Closing Entries, Recommendation, Assumptions)",
      "Clear color-coding for inputs vs. calculations vs. outputs",
      "Named ranges for all key data blocks"
    ]
  },
  {
    category: "Evidence Chain",
    items: [
      "Every recommendation on the Recommendation sheet must cite specific numbers from other sheets",
      "Adjusting entries must have written reasons",
      "Trial balance must show debits equal credits"
    ]
  },
  {
    category: "Communication",
    items: [
      "At least one clear recommendation statement (claim + evidence)",
      "At least one risk or limitation statement",
      "Assumptions sheet with date, version, and data source"
    ]
  },
  {
    category: "Quality Checks",
    items: [
      "No hard-coded outputs in Financial Statements — all pull from Adjustments or Trial Balance",
      "No broken formulas or #REF! errors",
      "Post-closing trial balance contains only permanent accounts"
    ]
  }
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">Phase 4: Polish and Transfer Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Write Your Recommendation Statement
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-purple-900">
                  <p>
                    Using the shared rehearsal workbook, write a recommendation statement on your own (or with your group). This is practice for the real project. Your recommendation must follow this format:
                  </p>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg mt-4">
                    <p className="font-mono text-sm">
                      <strong>Claim:</strong> [What should TechStart do?]
                      <br />
                      <strong>Evidence:</strong> [Cite 2-3 specific numbers from the workbook that support this claim.]
                      <br />
                      <strong>Risk:</strong> [Name one limitation or risk that could change this recommendation.]
                    </p>
                  </div>
                  <p className="mt-4">
                    Example: <em>"TechStart should delay its equipment purchase until Q2. Evidence: Net income this month was only $300 after $8,800 in depreciation, and cash on hand is $12,000 against $9,500 in monthly operating costs. Risk: If a key client pays early, the cash position could improve enough to proceed."</em>
                  </p>
                  <p className="mt-4">
                    Write your own recommendation below. Use numbers from the shared workbook.
                  </p>
                  <textarea
                    className="w-full min-h-[150px] p-4 border border-purple-300 rounded-lg mt-2 text-purple-900 resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Claim: ...&#10;&#10;Evidence: ...&#10;&#10;Risk: ..."
                  />
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    What Must You Transfer to the Real Project?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900">
                  <p className="mb-4">
                    In Lessons 08–10, your team will receive a <strong>different dataset</strong> and work independently. The structures below are what you must recreate from scratch. Check each one as you confirm you understand it.
                  </p>
                  <div className="space-y-4">
                    {transferFeatures.map((category) => (
                      <div key={category.category} className="p-4 bg-white rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">{category.category}</h4>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm">
                              <span className="flex-shrink-0 w-4 h-4 border-2 border-purple-400 rounded mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5" />
                    Polish Checklist: Before You Move On
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900 space-y-3">
                  <p>Review the shared workbook one more time. Can you confirm each item?</p>
                  <ul className="list-none space-y-2">
                    {[
                      "The recommendation cites specific numbers that I can find on another sheet",
                      "The risk statement acknowledges a real uncertainty (not a generic disclaimer)",
                      "All adjusting entries have written reasons",
                      "The Assumptions sheet has a date and version",
                      "I could recreate this workbook structure with a different dataset"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 border-2 border-amber-400 rounded mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
