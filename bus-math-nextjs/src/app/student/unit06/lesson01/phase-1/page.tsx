import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle } from "lucide-react"
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const currentPhase = lesson01Phases[0]
  
  const videoData = {
    title: "The Profit Paradox: Why Higher Revenue Doesn't Always Mean More Profit",
    description: "Sarah Chen confronts a common entrepreneurial paradox - her business is growing but profit margins are shrinking. She must figure out what pricing strategy will let her hit profit targets while staying competitive.",
    youtubeId: "DQpR1dbtQnc",
    duration: "4:45",
    transcript: "(Sarah is on camera. She looks thoughtful, like someone who has been solving a complex puzzle.)\n\nSo, with Alex, my new developer, on the team, TechStart was a different company. We were a team of two, and we could take on much bigger projects. Our monthly revenue was higher than it had ever been.\n\nBut when I ran my financial review for the quarter, I got this cold, sinking feeling. The numbers didn't make sense. Even though our revenue was way up, our profit margin had actually decreased by 22 percent. All the new expenses—payroll, benefits, expanded software subscriptions—were eating away at our profitability. We were working harder than ever, managing more complex projects, but the business itself was becoming less healthy. It was a scary paradox.\n\nTwo things happened at once that really opened my eyes. First, a competitor launched a service very similar to ours, but they priced it 40 percent higher than we did, and they were successful with it. At the same time, some of my best clients were giving me feedback that we could be charging a premium for the quality we were delivering. That's when it hit me: my entire pricing strategy was wrong. I was pricing to cover my costs, not pricing based on the value I was providing. And that margin squeeze was threatening the long-term sustainability of my business.\n\nThis brings us to the 'PriceLab Challenge'. The driving question I had to answer was, what pricing strategy would let us hit our profit targets while still being competitive? It forced me to move beyond simple cost-plus pricing. I had to learn about things like Cost-Volume-Profit analysis to understand my break-even points, and more importantly, learn about value-based pricing. It's a fundamental shift, moving from 'what do I need to charge?' to 'what is the result I deliver worth to my client?'\n\nWe completely revamped our pricing model. We repositioned TechStart from a 'budget option' to a 'premium boutique agency'. And it worked. Our profit margins recovered, and we were able to pay Alex a competitive salary while still growing the business sustainably."
  }

  const comprehensionQuestions = [
    {
      id: "q1",
      question: "What happened to TechStart's profit margins even though revenue was higher than ever?",
      answers: [
        "Profit margins stayed the same",
        "Profit margins increased along with revenue",
        "Profit margins decreased by 22%",
        "Profit margins doubled"
      ],
      explanation: "Despite higher revenue, Sarah discovered that profit margins had actually decreased by 22% due to new expenses like payroll, benefits, and expanded software subscriptions."
    },
    {
      id: "q2", 
      question: "What key insight did Sarah have about her pricing strategy?",
      answers: [
        "She was pricing too high for the market",
        "She was pricing to cover costs, not based on value provided",
        "Her competitors were using unfair pricing tactics",
        "She needed to lower prices to compete"
      ],
      explanation: "Sarah realized her entire pricing strategy was wrong - she was pricing just to cover her costs rather than pricing based on the value she was providing to clients."
    },
    {
      id: "q3",
      question: "Why was Sarah's competitor able to charge 40% more for similar services?",
      answers: [
        "They had higher costs",
        "They were losing money on every sale",
        "They were pricing based on value, not just cost",
        "They had fewer customers"
      ],
      explanation: "The competitor was successful at a higher price because they were pricing based on the value they provided, not just covering their costs. This is called value-based pricing."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Welcome to Unit 6: The PriceLab Challenge!
          </p>
          
          <p className="text-base leading-relaxed text-gray-700">
            Imagine you're <strong>Sarah Chen</strong>, the founder of TechStart Solutions. Her business is growing fast, landing bigger projects and even hiring her first employee, Alex. This is exciting, but it also means more expenses. Sarah realized something scary: even with more money coming in, her <em>profit</em> was actually going <em>down</em>. She was working harder for less profit, which is a big problem for any business trying to grow.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This is a common puzzle for many business owners. They think if they just sell more, they'll make more money. But it's not always true! Sarah had to figure out why her profit margins were shrinking and, more importantly, what she could do about it.
          </p>
        </div>

        <VideoPlayer video={videoData} />

        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding Sarah's Problem"
          description="Test your understanding of Sarah's pricing challenge and why higher revenue doesn't always mean higher profit."
          showExplanations={true}
        />

        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
          <CardHeader>
            <CardTitle className="text-orange-900 dark:text-orange-200 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-orange-900 dark:text-orange-200 mb-2">
                  Discussion Prompt (3 minutes):
                </p>
                <p className="text-orange-800 dark:text-orange-300">
                  Think about two similar products or services you've seen with very different prices—like brand-name vs. generic products, or premium vs. budget options. What might explain these price differences?
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-orange-800 dark:text-orange-300">
                  <li>Why might a business choose to be the most expensive option in their market?</li>
                  <li>How could working harder and selling more actually result in less profit?</li>
                  <li>What factors besides the cost to make something should influence its price?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Profit Paradox</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Sarah's story reveals one of the most dangerous traps in business: the assumption that more sales automatically means more profit. With Alex on her team, TechStart Solutions was busier than ever. They were taking on bigger projects, serving more clients, and bringing in record revenue. On the surface, everything looked great.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            But when Sarah sat down to review her quarterly financials, she got a shock. Despite all that extra revenue, her profit margins had actually <em>dropped by 22%</em>. The new expenses—Alex's salary, additional software licenses, expanded office space, and benefits—were eating away at her bottom line faster than the revenue was growing.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This is what we call the <strong>"Profit Paradox"</strong>—working harder and selling more, but actually making less money per dollar of revenue. It's a wake-up call that many growing businesses face, and it forced Sarah to confront a hard truth: her pricing strategy was fundamentally broken.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            The eye-opening moment came when Sarah discovered that a competitor was charging 40% more for similar services—and they were <em>successful</em>. Even her own clients were telling her she could charge premium prices for the quality she delivered. She realized she had been pricing to cover her costs, not pricing based on the value she provided.
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
