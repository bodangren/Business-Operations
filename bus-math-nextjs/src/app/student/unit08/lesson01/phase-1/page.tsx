import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const currentPhase = lesson01Phases[0] // Hook phase
  
  // Video data from intro-videos.json
  const videoData = {
    title: "The Final Test: Building an Integrated Model for Investors",
    description: "The moment Sarah has been working for has arrived: a Series A investor is interested, and they want a 3-year financial projection in six weeks. In this capstone video, Sarah integrates every skill she's learned—from ledgers to pricing to asset management—into a single, dynamic financial model. See how all the pieces come together to create a compelling, data-backed story for the future.",
    youtubeId: "Je7SPYOw9Vk",
    duration: "5:12",
    transcript: "(Sarah is on camera in her office. She looks sharp, focused, and carries the air of a confident CEO. This is the culmination of her journey.)\n\nSo, this is it. This is the moment that everything has been building towards. My mentor, Marcus, made a connection, and a Series A investor has confirmed they're interested in TechStart Solutions. We're officially in the due diligence process for a $500,000 investment proposal. It's exciting, and honestly, it's terrifying.\n\nThe investors were impressed with our journey so far, but they're not investing in the past. They're investing in the future. They didn't just want to see our history; they wanted to see our vision. They gave me my assignment: deliver a comprehensive, integrated 3-year financial projection for the business. And I had six weeks to do it.\n\nMy 'aha' moment for this final step wasn't about learning a new concept. It was the realization that this was the final exam. Every single thing I had learned over the last 15 months was about to be tested in this one project. The smart ledger from Unit 1, the automation from Unit 2, the three-statement story from Unit 3, the data analysis, the payroll simulator, the pricing strategy, the asset tracker... all of it. They all had to come together and work perfectly in one dynamic model.\n\nThis is what the 'Year-1 Startup Model' unit is all about. The driving question is no longer about one piece of the business; it's, 'Can we convince a micro-VC that our financial model is robust enough to merit funding?'. It's about building a model where the Income Statement, the Balance Sheet, and the Statement of Cash Flows are all interconnected. You change one assumption—like how fast you think you can grow—and the entire model updates. It lets you run different scenarios and show investors a credible, data-backed story about where the business is headed.\n\nBuilding that model was the hardest thing I've ever done, but it was also the most rewarding. It forced me to integrate every lesson, every mistake, and every success into a single narrative about the future of my company. This entire journey, from tracking expenses in a notebook to pitching investors for half a million dollars, has been about building these skills piece by piece. Each unit was a building block, and this final model is the structure we built. It's the ultimate proof that with the right systems and the right skills, you can turn an idea into an investment-ready business."
  }

  // Comprehension questions
  const comprehensionQuestions = [
    {
      id: "q1",
      question: "What assignment did the Series A investor give Sarah?",
      answers: [
        "Create a marketing plan for the next year",
        "Deliver a comprehensive, integrated 3-year financial projection", 
        "Hire more employees and expand the team",
        "Move to a larger office space"
      ],
      explanation: "The investors wanted to see Sarah's vision for the future, so they asked for a comprehensive, integrated 3-year financial projection for the business, which she had six weeks to complete."
    },
    {
      id: "q2", 
      question: "What was Sarah's 'aha' moment for this final challenge?",
      answers: [
        "Learning a completely new financial concept",
        "Realizing she needed to hire a financial advisor",
        "Understanding this was the final exam that tested everything she'd learned",
        "Discovering she could use artificial intelligence to build the model"
      ],
      explanation: "Sarah realized this wasn't about learning something new—it was the final exam where every skill from all previous units had to come together and work perfectly in one dynamic model."
    },
    {
      id: "q3",
      question: "What makes an integrated financial model different from individual financial statements?",
      answers: [
        "It uses more complex mathematical formulas",
        "It only focuses on the Income Statement",
        "All statements are interconnected—changing one assumption updates the entire model",
        "It requires special software to build"
      ],
      explanation: "In an integrated model, the Income Statement, Balance Sheet, and Cash Flow Statement are all interconnected. When you change one assumption, like growth rate, the entire model updates automatically."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        {/* Welcome to Year-1 Startup Model */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Welcome to Unit 8, the grand finale of our "Math for Business Operations" course! Throughout this journey, we've tackled real-world business challenges, just like a growing entrepreneur named Sarah Chen. From her first messy notebook to launching a sophisticated digital marketing company, you've learned to master the math that makes businesses thrive. Now, it's time to put all those pieces together.
          </p>
          
          <p className="text-base leading-relaxed text-gray-700">
            Our essential question for this unit is: <strong>Can we convince a micro-VC that our first-year financial model is robust enough to merit funding?</strong>
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Imagine this: All your hard work in building ledgers, automating tasks, understanding profit, managing assets, and creating financial statements has led to this moment. You're not just doing math anymore; you're building a complete, dynamic story of your business's future—a story powerful enough to attract serious investors.
          </p>
        </div>

        {/* Sarah's Story Video */}
        <VideoPlayer video={videoData} />

        {/* The Investor's Eye */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Investor's Eye – Spotting Red Flags</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Think back to Sarah Chen's journey with TechStart Solutions. She faced challenge after challenge, each one pushing her to learn a new mathematical or business skill. Now, after mastering all those individual "building blocks," Sarah stands at the precipice of her biggest challenge yet: securing a $500,000 investment.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Sarah knows this is her "final exam". Investors aren't just looking at what happened in the past; they want to see a clear vision for the future. And that future needs to be backed by a rock-solid financial model. Venture capitalists (VCs)—the professional investors who fund promising startups—are incredibly skilled at spotting "red flags". These aren't just minor mistakes; they are critical errors that can immediately disqualify a business from getting funded.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Some common red flags include:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Hard-coded numbers instead of formulas:</strong> This shows a lack of sophistication and makes your model inflexible.</li>
            <li><strong>Circular references:</strong> These are formula errors where a calculation depends on its own result, causing the model to break.</li>
            <li><strong>Unrealistic "hockey-stick" growth assumptions:</strong> Investors want to see realistic plans, not just overly optimistic guesses.</li>
            <li><strong>Missing scenario analysis:</strong> Not showing different possibilities (like best-case, worst-case) tells investors you haven't thought about risks.</li>
            <li><strong>Poor presentation quality:</strong> A messy model suggests a messy business.</li>
          </ul>

          <p className="text-base leading-relaxed text-gray-700">
            Today, you'll step into the shoes of a VC. You'll analyze examples of failed startup models and learn to identify these red flags. This isn't just about finding errors; it's about understanding what makes a financial model <em>credible</em> and <em>convincing</em> to someone who might invest real money in your idea. Can you build a financial model that avoids these pitfalls and convinces an investor to say "yes"? That's the challenge for this unit.
          </p>
        </div>

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding the Final Challenge"
          description="Test your understanding of Sarah's ultimate business challenge and what makes a financial model investment-ready."
          showExplanations={true}
        />

        {/* Turn and Talk */}
        <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
          <CardHeader>
            <CardTitle className="text-purple-900 dark:text-purple-200 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-purple-900 dark:text-purple-200 mb-2">
                  Discussion Prompt (3 minutes):
                </p>
                <p className="text-purple-800 dark:text-purple-300">
                  Think about a time when you had to put together everything you learned in a class for a final project or presentation. How did it feel different from individual assignments?
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-purple-800 dark:text-purple-300">
                  <li>What do you think makes a financial model "credible" to someone considering investing their money?</li>
                  <li>Why might investors care more about the future than the past when evaluating a business?</li>
                  <li>If you were investing your own money in a business, what would you want to see in their financial plan?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Journey So Far */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Journey So Far</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Remember Sarah's initial chaos with tracking everything in notebooks? You helped her build a "Smart Ledger" in Unit 1. Then, you helped her automate her month-end processes in Unit 2 with the "Month-End Wizard". In Unit 3, you learned to "speak the language of investors" by creating professional Income Statements, Balance Sheets, and Cash Flow Statements. Later, you explored pricing strategies (Unit 6) and managing assets (Unit 7).
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Sarah realized that for her final pitch to investors, all these individual systems had to come together into one comprehensive, dynamic model. This is the essence of <strong>three-statement integration</strong>. It means linking your Income Statement, Balance Sheet, and Cash Flow Statement so they "talk" to each other. When you change one number—like how fast your sales grow—every other part of the model updates automatically, like magic!
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This entire journey, from tracking expenses in a notebook to pitching investors for half a million dollars, has been about building these skills piece by piece. Each unit was a building block, and this final model is the structure we built. It's the ultimate proof that with the right systems and the right skills, you can turn an idea into an investment-ready business.
          </p>
        </div>

        {/* Transition to Next Phase */}
        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed text-gray-700">
            Now that you understand the stakes of this final challenge, you're ready to begin connecting the dots. In the next phase, we'll explore the power of integration—how to link all your financial statements so they work together as one dynamic system. You'll learn the cross-sheet linking techniques that transform individual spreadsheets into a comprehensive business model worthy of investor attention.
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}