import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle } from "lucide-react"
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const currentPhase = lesson01Phases[0] // Hook phase
  
  // Video data from intro-videos.json
  const videoData = {
    title: "The Profit Paradox: Why Higher Revenue Doesn't Always Mean More Profit",
    description: "With a new team member, TechStart's revenue is higher than ever, but a financial review reveals a scary truth: profit margins have plummeted by 22%. Sarah confronts a common entrepreneurial paradox and learns a critical lesson in strategic pricing. Discover how she moved from pricing based on cost to pricing based on value to ensure her business's long-term sustainability.",
    youtubeId: "Je7SPYOw9Vk",
    duration: "4:45",
    transcript: "(Sarah is on camera. She looks thoughtful, like someone who has been solving a complex puzzle.)\n\nSo, with Alex, my new developer, on the team, TechStart was a different company. We were a team of two, and we could take on much bigger projects. Our monthly revenue was higher than it had ever been.\n\nBut when I ran my financial review for the quarter, I got this cold, sinking feeling. The numbers didn't make sense. Even though our revenue was way up, our profit margin had actually decreased by 22 percent. All the new expenses—payroll, benefits, expanded software subscriptions—were eating away at our profitability. We were working harder than ever, managing more complex projects, but the business itself was becoming less healthy. It was a scary paradox.\n\nTwo things happened at once that really opened my eyes. First, a competitor launched a service very similar to ours, but they priced it 40 percent higher than we did, and they were successful with it. At the same time, some of my best clients were giving me feedback that we could be charging a premium for the quality we were delivering. That's when it hit me: my entire pricing strategy was wrong. I was pricing to cover my costs, not pricing based on the value I was providing. And that margin squeeze was threatening the long-term sustainability of my business.\n\nThis brings us to the 'PriceLab Challenge'. The driving question I had to answer was, what pricing strategy would let us hit our profit targets while still being competitive?. It forced me to move beyond simple cost-plus pricing. I had to learn about things like Cost-Volume-Profit analysis to understand my break-even points, and more importantly, learn about value-based pricing. It's a fundamental shift, moving from 'what do I need to charge?' to 'what is the result I deliver worth to my client?'\n\nWe completely revamped our pricing model. We repositioned TechStart from a 'budget option' to a 'premium boutique agency'. And it worked. Our profitability rebounded, and the business was finally on a sustainable path. This success and our new premium positioning allowed us to take another huge step: moving into our first real office space. But that came with its own challenge—making major equipment purchases and learning how to manage those physical assets properly for tax and insurance purposes."
  }

  // Comprehension questions
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
      question: "How did Sarah's repositioning strategy work out?",
      answers: [
        "It failed and she had to lower prices again",
        "It worked temporarily but wasn't sustainable",
        "It worked and profitability rebounded",
        "It caused her to lose too many clients"
      ],
      explanation: "Sarah successfully repositioned TechStart from a 'budget option' to a 'premium boutique agency,' which led to rebounding profitability and a sustainable business path."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        {/* Welcome to PriceLab Challenge */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Welcome to Unit 6: The PriceLab Challenge!
          </p>
          
          <p className="text-base leading-relaxed text-gray-700">
            Imagine you're Sarah, the founder of TechStart Solutions. Her business is growing fast, landing bigger projects and even hiring her first employee, Alex. This is exciting, but it also means more expenses. Sarah realized something scary: even with more money coming in, her <em>profit</em> was actually going <em>down</em>. She was working harder for less profit, which is a big problem for any business trying to grow.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This is a common puzzle for many business owners. They think if they just sell more, they'll make more money. But it's not always true! Sarah had to figure out why her profit margins were shrinking and, more importantly, what she could do about it. She discovered her entire <strong>pricing strategy</strong> was wrong. She was setting prices just to cover her costs, not to reflect the real value her company provided. This unit is all about learning how to avoid Sarah's mistake and how to set prices smartly.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Our big question for this unit is: <strong>What pricing strategy hits our profit target while staying competitive in the local market?</strong>
          </p>
        </div>

        {/* Sarah's Story Video */}
        <VideoPlayer video={videoData} />

        {/* The Profit Paradox Explanation */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Profit Paradox</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Sarah's story reveals one of the most dangerous traps in business: the assumption that more sales automatically means more profit. With Alex on her team, TechStart Solutions was busier than ever. They were taking on bigger projects, serving more clients, and bringing in record revenue. On the surface, everything looked great.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            But when Sarah sat down to review her quarterly financials, she got a shock. Despite all that extra revenue, her profit margins had actually <em>dropped by 22%</em>. The new expenses—Alex's salary, additional software licenses, expanded office space, and benefits—were eating away at her bottom line faster than the revenue was growing.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This is what we call the "Profit Paradox"—working harder and selling more, but actually making less money per dollar of revenue. It's a wake-up call that many growing businesses face, and it forced Sarah to confront a hard truth: her pricing strategy was fundamentally broken.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            The eye-opening moment came when Sarah discovered that a competitor was charging 40% more for similar services—and they were <em>successful</em>. Even her own clients were telling her she could charge premium prices for the quality she delivered. She realized she had been pricing to cover her costs, not pricing based on the value she provided.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This revelation changed everything. Sarah had to learn the difference between cost-plus pricing (just covering expenses) and value-based pricing (charging what your service is actually worth to the client). It's a fundamental shift from asking "What do I need to charge?" to asking "What is the result I deliver worth to my client?"
          </p>
        </div>

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding the Profit Paradox"
          description="Test your understanding of Sarah's pricing challenge and why higher revenue doesn't always mean higher profit."
          showExplanations={true}
        />

        {/* Turn and Talk */}
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
                  Think about two similar products you've seen with very different prices—like brand-name vs. generic medicines, or designer vs. regular clothing. What might explain these price differences?
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

        {/* Unit Learning Goals */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            By the end of this unit, you'll be able to avoid Sarah's costly mistake and master strategic pricing. You'll learn to:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Understand the difference between <strong>markup</strong> and <strong>margin</strong> calculations</li>
            <li>Figure out your <strong>break-even point</strong>—where your business stops losing money and starts making money</li>
            <li>Build powerful models in Excel to see how changes in price, costs, or sales volume affect your profit</li>
            <li>Use these models to make smart pricing decisions that help your business grow and stay strong</li>
          </ul>

          <p className="text-base leading-relaxed text-gray-700">
            Just like Sarah had to learn how to price her services based on their true worth, you'll learn how to make sure your business ventures are not just busy, but truly profitable. Let's dive in!
          </p>
        </div>

        {/* Transition to Next Phase */}
        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed text-gray-700">
            Now that you understand the stakes of strategic pricing, you're ready to become a "price detective." In the next phase, we'll explore how businesses gather competitive intelligence and use powerful Excel tools like Power Query to automatically collect and analyze competitor pricing data. You'll learn the first step in building a data-driven pricing strategy that avoids the profit paradox that nearly derailed Sarah's business.
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