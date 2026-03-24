import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users } from "lucide-react"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"
import SarahInventoryRiskTriage from "../SarahInventoryRiskTriage"

const currentPhase = lesson01Phases[0]

const videoData = {
  title: "Sarah's Inventory Wake-Up Call",
  description:
    "Sarah Chen thought TechStart Solutions was ready for its next funding conversation. Then a simple question about ending inventory exposed a weak system. This launch video introduces the shared business problem for Unit 07.",
  youtubeId: "Z5XM90DfSeg",
  duration: "4:28",
  transcript:
    "I thought TechStart Solutions was finally looking polished. We had better systems, stronger pricing, and bigger clients. I had even started adding physical client launch kits to some service packages. These kits included printed promo cards, branded materials, and event supplies that we ordered in batches and sold as part of our work. When I met with my mentor to prepare for a lender conversation, she stopped on one number: ending inventory. I had a count from the shelf, but I could not clearly explain how the number was built. Some purchase records were still buried in email, some sales were recorded late, and a few items were counted without matching cost details. She told me that if I could not defend ending inventory, then I could not fully defend profit either. That was the moment I realized ending inventory is not just a stockroom number. It affects profit, taxes, planning, and trust. If I could not explain that number clearly, then I was not as investor-ready as I thought. Unit 07 begins with that problem. Your job is to learn how businesses build, check, and defend ending inventory with records that make sense to owners, lenders, and investors."
}

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <PhaseHeader unit={unit07Data} lesson={lesson01Data} phase={currentPhase} phases={lesson01Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">Phase 1: Hook</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Sarah Has a Founder Problem, Not a Vocabulary Problem</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Lesson 1 starts with tension. Sarah has inventory on the shelf, sales moving through the month,
              and one ending inventory number she cannot defend.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          <VideoPlayer video={videoData} />

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Unit 07 Problem in One Sentence
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-950">
              Sarah can count what is on the shelf, but she cannot clearly explain how the ending inventory number was built.
            </CardContent>
          </Card>

          <SarahInventoryRiskTriage />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-950 space-y-2">
              <p className="font-medium">Discussion prompt:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>If you were Sarah&apos;s lender, what would make you nervous first?</li>
                <li>Why is "I know what is on the shelf" not a strong enough answer?</li>
                <li>What kind of business decision could go wrong if this number is weak?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson01Data} phase={currentPhase} phases={lesson01Phases} />
    </div>
  )
}
