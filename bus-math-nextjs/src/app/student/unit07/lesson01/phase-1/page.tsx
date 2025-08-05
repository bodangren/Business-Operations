import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle } from "lucide-react"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const currentPhase = lesson01Phases[0] // Hook phase
  
  // Video data from intro-videos.json
  const videoData = {
    title: "Building Value: Smart Asset Management and Depreciation",
    description: "TechStart moves into its first real office, complete with an $18,000 investment in new equipment. Sarah learns from her CPA, Jennifer, that these aren't just expenses—they're long-term assets. This video explores the strategic power of depreciation to improve cash flow, optimize taxes, and professionally represent company value, making the business 'investment ready'.",
    youtubeId: "Je7SPYOw9Vk",
    duration: "4:28",
    transcript: "(Sarah is on camera in her new, professional office space. She speaks with a calm, forward-thinking authority.)\n\nRepositioning as a premium agency was a huge success. It meant we finally had the resources to move out of our shared workspace and get our first real office. It was a big step, a sign that we were becoming a serious company. And with a new office comes new equipment. We made a major investment—about $18,000 in new computers, software, and office furniture to get everything set up properly.\n\nMy first instinct was just to record that $18,000 as a big one-time expense. But when I talked to my CPA, Jennifer Kim, she stopped me. She explained that these items weren't just simple expenses; they were long-term assets. How I accounted for them would have a big impact on my taxes and the official value of my company on the books. On top of that, our new business insurance policy required a detailed inventory of all our physical assets.\n\nJennifer was the one who introduced me to the concept of depreciation. That was the 'aha' moment. I realized that instead of taking one huge hit to my profit in a single month, I could spread the expense of an asset out over its useful life. This was a strategic tool. By choosing the right depreciation method, I could lower my taxable income each year, which would directly improve our cash flow. It also became clear that if we were ever going to look for serious investment, having a professional asset management system wasn't optional—it was a requirement.\n\nThis led me right into the 'Asset & Inventory Tracker' unit. I had to answer the question, 'Which depreciation and inventory methods best align with our cash-flow and tax strategy?'. I learned the difference between methods like Straight-Line depreciation and others like Double-Declining-Balance. It's not just about following rules; it's about making a strategic choice that fits your business goals. It's about accurately representing your company's value on the Balance Sheet while also being as tax-efficient as possible.\n\nSo, we implemented a professional asset management system. It made us more tax-efficient, and it made the business look much more professional and 'investment ready'. And that was the final piece of the puzzle. At this point, I had clean books, automated processes, professional financial statements, a data-driven pricing model, a payroll system, and now, a way to manage our assets. All the individual systems were finally in place. And that meant I was ready for the final test: integrating everything into one comprehensive financial model to try and secure funding for our future."
  }

  // Comprehension questions
  const comprehensionQuestions = [
    {
      id: "q1",
      question: "What was Sarah's first instinct when she spent $18,000 on new equipment?",
      answers: [
        "To spread the cost over several years",
        "To record it as a big one-time expense", 
        "To ask her CPA for advice first",
        "To depreciate it using the straight-line method"
      ],
      explanation: "Sarah's first instinct was to record the $18,000 as a big one-time expense, like buying paper clips or paying the internet bill, until her CPA Jennifer explained these were long-term assets."
    },
    {
      id: "q2", 
      question: "Why did Jennifer Kim tell Sarah these items were 'long-term assets' rather than simple expenses?",
      answers: [
        "Because they cost more than $1,000",
        "Because they would help her business for years, not just one month",
        "Because the IRS requires it for all equipment purchases",
        "Because her insurance company demanded it"
      ],
      explanation: "Jennifer explained that items like computers and office furniture would help TechStart's business for years, making them long-term assets rather than simple one-time expenses."
    },
    {
      id: "q3",
      question: "What is the strategic benefit of depreciation for cash flow?",
      answers: [
        "It increases revenue each year",
        "It eliminates the need for insurance",
        "It lowers taxable income each year, improving cash flow",
        "It makes equipment last longer"
      ],
      explanation: "By choosing the right depreciation method, Sarah could lower her taxable income each year, which directly improves cash flow by reducing tax payments."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        {/* Welcome to Asset & Inventory Tracker */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Welcome to Unit 7: Asset & Inventory Tracker! In this unit, we're going to dive into how businesses manage their valuable possessions and the goods they sell. Think of it like taking care of everything from the shiny new computers in an office to all the delicious ingredients in a bakery. We'll explore how these items are accounted for over time, and why choosing the right methods can make a big difference for a company's money and taxes.
          </p>
          
          <p className="text-base leading-relaxed text-gray-700">
            Our main question for this unit is: <strong>"Which depreciation and inventory methods best align with our cash-flow and tax strategy?"</strong> This might sound like a mouthful, but don't worry! We'll break down each part, connecting it to real business situations and showing you how to use math and Excel to make smart choices.
          </p>
        </div>

        {/* Sarah's Story Video */}
        <VideoPlayer video={videoData} />

        {/* Sarah's Next Big Step */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sarah's Next Big Step</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Remember Sarah from TechStart Solutions? She's been on an amazing journey, building a smart ledger, automating her month-end close, creating professional financial statements, analyzing data, managing payroll, and even revamping her pricing. Each step has made her business stronger and more professional.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Now, TechStart Solutions has moved into its first real office! This is a huge milestone, a sign that her business is growing and becoming a serious company. But with a new office comes new needs. Sarah made a significant investment, spending about $18,000 on brand new computers, software, and office furniture to get everything set up perfectly.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Her first thought was simple: just record this $18,000 as a big expense, like buying paper clips or paying the internet bill. But her CPA, Jennifer Kim, immediately told her to stop. Jennifer explained that these items weren't just simple expenses; they were <em>long-term assets</em>. How Sarah accounted for them would have a big impact on her taxes and the official value of her company. Plus, her new business insurance policy needed a detailed list of all her physical assets.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This was a big "aha!" moment for Sarah. She realized that these new items, like her powerful new computers, would help her business for years, not just for a single month. This introduced her to a powerful accounting concept: <strong>depreciation</strong>.
          </p>
        </div>

        {/* The Cost of Misvaluation */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Cost of Misvaluation</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Have you ever heard of a company getting into big trouble because of how they kept track of their stuff? It happens more often than you might think! To kick off this unit, we're going to hear from a real local auditor. They're going to share a true story (don't worry, it's anonymized to protect the company) about a business that faced serious financial and legal issues because they didn't properly value their inventory.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Imagine the auditor telling you about a company that messed up its inventory numbers. What could happen?
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Big Fines:</strong> Public companies can face fines from $100,000 to millions from groups like the SEC if their numbers aren't right.</li>
            <li><strong>Lost Trust:</strong> If investors can't trust a company's numbers, they might not want to put their money into it. This can hurt the company's stock price and make it hard to get funding in the future.</li>
            <li><strong>More Audit Costs:</strong> When a company's records are messy, auditors have to work extra hard, and that costs the company more money.</li>
            <li><strong>Tax Trouble:</strong> Errors can mess up taxes not just for one year, but for many years!</li>
          </ul>

          <p className="text-base leading-relaxed text-gray-700">
            These are some serious consequences, and they all come back to one thing: accurate financial records, especially for assets and inventory. This real-world story shows us exactly why the choices businesses make about depreciation and inventory methods are so important for their cash flow and tax strategy.
          </p>
        </div>

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding Asset Management"
          description="Test your understanding of Sarah's transition from simple expenses to strategic asset management."
          showExplanations={true}
        />

        {/* Turn and Talk */}
        <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
          <CardHeader>
            <CardTitle className="text-green-900 dark:text-green-200 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-green-900 dark:text-green-200 mb-2">
                  Discussion Prompt (3 minutes):
                </p>
                <p className="text-green-800 dark:text-green-300">
                  Think about expensive items your family owns that are used for many years—like a car, computer, or furniture. How do you think their value changes over time?
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-green-800 dark:text-green-300">
                  <li>Why might it be unfair to count the full cost of a $18,000 computer system as an expense in just one month?</li>
                  <li>How could spreading that cost over several years be more accurate and helpful for planning?</li>
                  <li>What kinds of business decisions might be affected by how you account for expensive equipment?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Unit Challenge Preview */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Challenge</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            After hearing about this case, your team will get to work with some real-world data, just like Sarah. We'll provide you with an anonymized dataset of assets and inventory – you'll see different types of equipment and goods, and start thinking about how they might be valued.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            You'll also get to pick an industry for your project: retail, manufacturing, or technology. Each of these industries has different kinds of assets and inventory challenges, and your choice will help shape the strategic decisions you make throughout the unit. For example, a retail business might have a lot of clothes or gadgets as inventory, while a manufacturing business might have raw materials and big machines. A technology company, like Sarah's, might have lots of computers and specialized software.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This unit's challenge is to build a system that helps a business choose the best ways to account for its assets and inventory. You'll be aiming to answer that big question: "Which depreciation and inventory methods best align with our cash-flow and tax strategy?" By the end of this unit, you'll be able to recommend smart financial choices to real business leaders, just like a financial advisor!
          </p>
        </div>

        {/* Transition to Next Phase */}
        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed text-gray-700">
            Now that you understand the real-world stakes of asset and inventory management, you're ready to dive into the technical details. In the next phase, we'll explore depreciation techniques—how businesses strategically spread the cost of long-term assets over their useful lives to optimize cash flow and taxes. You'll learn the difference between methods like Straight-Line and Double-Declining Balance depreciation, and discover why these choices matter so much for business success.
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson01Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}