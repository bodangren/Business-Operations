import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, AlertTriangle, TrendingUp, Target } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson01Phases[1] // Introduction phase

  // Red Flags Matching Exercise
  const redFlagsItems = [
    { id: '1', content: 'Hard-coded numbers instead of formulas', matchId: '2', hint: 'Shows lack of sophistication and inflexibility' },
    { id: '2', content: 'Makes model inflexible and unsophisticated', matchId: '1' },
    { id: '3', content: 'Circular references', matchId: '4', hint: 'Formula errors where calculations depend on their own results' },
    { id: '4', content: 'Causes model to break due to self-referencing formulas', matchId: '3' },
    { id: '5', content: 'Unrealistic "hockey-stick" growth assumptions', matchId: '6', hint: 'Overly optimistic projections without realistic basis' },
    { id: '6', content: 'Overly optimistic guesses rather than realistic plans', matchId: '5' },
    { id: '7', content: 'Missing scenario analysis', matchId: '8', hint: 'Not considering different business possibilities' },
    { id: '8', content: 'Shows you haven\'t thought about business risks', matchId: '7' },
  ]

  // Comprehension questions about VC red flags
  const comprehensionQuestions = [
    {
      id: "q1",
      question: "Why do venture capitalists focus more on future projections than past performance when evaluating startups?",
      answers: [
        "Past performance is too difficult to verify",
        "They are investing in the business's future potential, not its history",
        "Future projections are easier to understand than financial statements",
        "Past performance doesn't include all the important financial data"
      ],
      explanation: "VCs invest in future potential. They want to see a clear vision for where the business is headed and how their investment will generate returns, which requires credible future projections rather than just historical data."
    },
    {
      id: "q2",
      question: "What makes a financial model 'credible' to professional investors?",
      answers: [
        "Using the most advanced Excel features and complex formulas",
        "Having realistic assumptions, proper formulas, and scenario analysis",
        "Showing only optimistic projections with high growth rates",
        "Including as much historical data as possible"
      ],
      explanation: "Credible models have realistic assumptions backed by research, use proper formulas (not hard-coded numbers), include scenario analysis to show risk awareness, and demonstrate professional construction and presentation quality."
    },
    {
      id: "q3",
      question: "According to the textbook, what is Sarah's biggest challenge in Unit 8?",
      answers: [
        "Learning completely new Excel functions for the first time",
        "Hiring employees to help build the financial model",
        "Integrating all previous skills into one comprehensive, dynamic model",
        "Finding investors who are willing to fund her business"
      ],
      explanation: "Sarah's challenge isn't learning new concepts—it's integrating every skill from all previous units (ledgers, automation, statements, analysis, etc.) into one comprehensive model that works as a complete system."
    }
  ]

  // Integration concepts matching
  const integrationItems = [
    { id: '1', content: 'Three-statement integration', matchId: '2', hint: 'Linking all financial statements together' },
    { id: '2', content: 'Income Statement, Balance Sheet, and Cash Flow linked together', matchId: '1' },
    { id: '3', content: 'Cross-sheet linking', matchId: '4', hint: 'Technical method for connecting spreadsheet data' },
    { id: '4', content: 'Connecting data between different Excel sheets with formulas', matchId: '3' },
    { id: '5', content: 'Dynamic model', matchId: '6', hint: 'Model that updates automatically when assumptions change' },
    { id: '6', content: 'Changes one assumption and entire model updates automatically', matchId: '5' },
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
        {/* Introduction: The Investor's Perspective */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Day 1: The Investor's Eye – Spotting Red Flags</h1>
          
          <p className="text-lg leading-relaxed">
            Think back to Sarah Chen's journey with TechStart Solutions. She faced challenge after challenge, each one pushing her to learn a new mathematical or business skill. Now, after mastering all those individual "building blocks," Sarah stands at the precipice of her biggest challenge yet: securing a $500,000 investment.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Sarah knows this is her "final exam". Investors aren't just looking at what happened in the past; they want to see a clear vision for the future. And that future needs to be backed by a rock-solid financial model. Venture capitalists (VCs)—the professional investors who fund promising startups—are incredibly skilled at spotting "red flags". These aren't just minor mistakes; they are critical errors that can immediately disqualify a business from getting funded.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            Common Red Flags That Kill Funding
          </h2>

          <p className="text-base leading-relaxed text-gray-700">
            Some common red flags include:
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              <li><strong>Hard-coded numbers instead of formulas:</strong> This shows a lack of sophistication and makes your model inflexible.</li>
              <li><strong>Circular references:</strong> These are formula errors where a calculation depends on its own result, causing the model to break.</li>
              <li><strong>Unrealistic "hockey-stick" growth assumptions:</strong> Investors want to see realistic plans, not just overly optimistic guesses.</li>
              <li><strong>Missing scenario analysis:</strong> Not showing different possibilities (like best-case, worst-case) tells investors you haven't thought about risks.</li>
              <li><strong>Poor presentation quality:</strong> A messy model suggests a messy business.</li>
            </ul>
          </div>

          <p className="text-base leading-relaxed text-gray-700">
            Today, you'll step into the shoes of a VC. You'll analyze examples of failed startup models and learn to identify these red flags. This isn't just about finding errors; it's about understanding what makes a financial model <em>credible</em> and <em>convincing</em> to someone who might invest real money in your idea. Can you build a financial model that avoids these pitfalls and convinces an investor to say "yes"? That's the challenge for this unit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            The Power of Integration
          </h2>

          <p className="text-base leading-relaxed text-gray-700">
            Remember Sarah's initial chaos with tracking everything in notebooks? You helped her build a "Smart Ledger" in Unit 1. Then, you helped her automate her month-end processes in Unit 2 with the "Month-End Wizard". In Unit 3, you learned to "speak the language of investors" by creating professional Income Statements, Balance Sheets, and Cash Flow Statements. Later, you explored pricing strategies (Unit 6) and managing assets (Unit 7).
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Sarah realized that for her final pitch to investors, all these individual systems had to come together into one comprehensive, dynamic model. This is the essence of <strong>three-statement integration</strong>. It means linking your Income Statement, Balance Sheet, and Cash Flow Statement so they "talk" to each other. When you change one number—like how fast your sales grow—every other part of the model updates automatically, like magic!
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This seamless connection is created through <strong>cross-sheet linking</strong>. Think of it like building a house: you have the foundation (your ledger), the walls (your individual statements), and now you're adding the plumbing and electrical wiring that connect everything so it works as one system.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Sheet Linking Best Practices</h3>
          
          <p className="text-base leading-relaxed text-gray-700">
            To make sure your model is professional and accurate, here are some cross-sheet linking best practices:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Use named ranges for key variables:</strong> Instead of referring to "B5," give it a clear name like "Revenue_Growth_Rate". This makes formulas easier to read and understand.</li>
              <li><strong>Consistent sheet naming and organization:</strong> Keep your Excel sheets organized (e.g., "Assumptions," "P&L," "Balance_Sheet").</li>
              <li><strong>Absolute vs. relative references:</strong> Know when to use '$' to lock a cell reference ($B$5) so it doesn't change when you copy formulas.</li>
            </ul>
          </div>

          <p className="text-base leading-relaxed text-gray-700">
            Today, you'll start practicing this by linking your Income Statement accounts to your underlying data, just like Sarah had to link her revenue from client projects to her main financial statements.
          </p>
        </div>

        {/* Red Flags Matching Exercise */}
        <DragAndDrop
          items={redFlagsItems}
          title="Identifying VC Red Flags"
          description="Match each common financial model error with its impact on investor confidence. Understanding these red flags will help you build a more credible model."
          leftColumnTitle="Red Flag Issues"
          rightColumnTitle="Impact on Investors"
          showHints={true}
          shuffleItems={true}
        />

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding Investor Evaluation"
          description="Test your understanding of what venture capitalists look for in financial models and why integration is crucial for investment readiness."
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
                  If you were a venture capitalist with $500,000 to invest, what would you want to see in a startup's financial model before writing a check?
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-purple-800 dark:text-purple-300">
                  <li>What would make you confident that the entrepreneur really understands their business?</li>
                  <li>How would you tell the difference between realistic growth projections and wishful thinking?</li>
                  <li>Why might an investor care more about how well the statements are connected than the individual numbers?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Concepts Matching */}
        <DragAndDrop
          items={integrationItems}
          title="Understanding Financial Model Integration"
          description="Match the integration concepts with their definitions to understand how sophisticated financial models work."
          leftColumnTitle="Integration Concepts"
          rightColumnTitle="Definitions"
          showHints={true}
          shuffleItems={true}
        />

        {/* The Investment Challenge */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-green-600" />
            Your Investment Challenge
          </h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Throughout this unit, you'll be working toward the same goal as Sarah: building a comprehensive, integrated financial model that could convince real investors to fund your business. This isn't just an academic exercise—you'll be presenting your model to actual business professionals who understand what makes a financial plan credible.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Your challenge is to create a financial model that avoids all the red flags we've discussed today while demonstrating the sophistication that comes from true three-statement integration. By the end of this unit, you'll have built something that Sarah would be proud to present to her Series A investors.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            In the next phase, we'll begin the hands-on work of guided practice with VC evaluation criteria, where you'll start applying these concepts to analyze real startup scenarios and understand what separates amateur models from investment-grade financial projections.
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