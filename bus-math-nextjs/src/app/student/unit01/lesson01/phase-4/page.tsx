import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit01Data, lesson01Phases } from "../lesson-data"

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!

  const independentQuestions = [
    {
      id: 'q1',
      question: 'When Sarah hires an assistant instead of building a professional ledger system, what\'s the biggest problem from an investor\'s perspective?',
      answers: [
        'An assistant doesn\'t provide automatic verification that the accounting equation stays balanced',
        'An assistant costs too much money',
        'An assistant can\'t write fast enough',
        'An assistant doesn\'t know Excel formulas'
      ],
      explanation: 'Investors care about automatic checks and verification systems. An assistant can record transactions, but doesn\'t create the self-auditing proof that every transaction keeps the accounting equation balanced—that\'s what "clean books" really means.'
    },
    {
      id: 'q2',
      question: 'Sarah considers updating her accounting equation only at month-end to save time. Why would this fail the investor trust test?',
      answers: [
        'Investors need to see current financial position anytime, not just once per month',
        'Month-end calculations take too long',
        'Updating the equation monthly is illegal',
        'Investors only care about year-end totals'
      ],
      explanation: 'The accounting equation is a real-time scoreboard. Investors ask "What\'s your equity right now?" and expect an immediate answer. Month-end updates mean Sarah can\'t tell anyone her financial position between updates—exactly the problem her notebook system already has.'
    },
    {
      id: 'q3',
      question: 'What does the accounting equation ASSETS = LIABILITIES + EQUITY actually track for Sarah?',
      answers: [
        'Everything Sarah owns, everything she owes, and what the business is worth at any moment',
        'Just Sarah\'s bank account balance and monthly expenses',
        'Only the loans Sarah has taken from banks',
        'The profit Sarah earned this month only'
      ],
      explanation: 'The accounting equation is the complete scoreboard: assets (what she owns), liabilities (what she owes), and equity (what\'s left for the owner). This must stay balanced after every single transaction—that\'s why automatic equation checking is essential for investor confidence.'
    }
  ]

  const scenarioSentences = [
    {
      id: 'scenario1',
      text: "When Sarah's potential angel investor asks 'What are your assets, liabilities, and equity?', the biggest risk is that her notebook system cannot provide {blank} to that question instantly.",
      answer: 'an answer',
      hint: "Think about the accounting equation as a scoreboard"
    },
    {
      id: 'scenario2',
      text: "Sarah realizes that as her business grows, she needs a system that can automatically update the accounting equation so she always knows what she owns, what she owes, and what her business is {blank}.",
      answer: 'worth',
      hint: "What does equity represent in the accounting equation?"
    },
    {
      id: 'scenario3',
      text: "The driving question for this unit asks how to design a {blank} ledger that would convince investors that Sarah keeps her accounting equation balanced from day 1.",
      answer: 'self-auditing',
      hint: "This is our main unit goal"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bounded Decision Practice - Textbook Content */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 text-white">Independent Practice</Badge>
                <CardTitle className="text-purple-800 dark:text-purple-200">
                  Make Business Decisions: What Would You Choose?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  Now it's time to work independently and make some business decisions. Sarah faces real choices 
                  as she tries to fix her financial chaos. Each decision affects whether she'll be able to 
                  convince an investor that she keeps "clean books."
                </p>

                <p className="text-lg leading-relaxed">
                  For each decision below, think carefully about what matters most to building a self-auditing 
                  ledger that investors will trust. Don't worry about technical details yet—focus on what makes 
                  a financial system credible and professional.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Scoreboard Reminder */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600 text-white">Unit Scoreboard</Badge>
                <CardTitle className="text-blue-800 dark:text-blue-200">
                  Remember: The Accounting Equation
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  Every decision Sarah makes must support her ability to keep this scoreboard accurate and balanced:
                </p>
                <div className="bg-white p-6 rounded-lg border-4 border-blue-400 my-6 text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-4">
                    ASSETS = LIABILITIES + EQUITY
                  </div>
                  <p className="text-blue-700">
                    Every transaction must keep both sides equal
                  </p>
                </div>
                <p className="text-base leading-relaxed">
                  When Sarah makes decisions about how to track her finances, she's really deciding how she'll maintain this equation. 
                  Think about how each option below affects her ability to know what her assets, liabilities, and equity actually are.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Decision 1: Staffing vs. Technology */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Decision 1: What System Best Supports the Accounting Equation?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah is overwhelmed with paperwork. She has two immediate options for improving her system:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                    <h4 className="font-bold text-purple-800 mb-2">Option A: Hire an Assistant</h4>
                    <p className="text-sm text-purple-700 mb-2">
                      Pay someone $2,500/month to record all transactions in notebooks, just like Sarah does now.
                    </p>
                    <div className="text-xs text-gray-600">
                      Cost: $30,000/year | System: Still manual, still notebook-based
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-800 mb-2">Option B: Build a Professional Ledger</h4>
                    <p className="text-sm text-green-700 mb-2">
                      Spend time building a system that automatically checks whether every transaction keeps the accounting equation balanced.
                    </p>
                    <div className="text-xs text-gray-600">
                      Cost: Time investment | System: Automatic, verifies equation balance
                    </div>
                </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                  <h4 className="font-semibold text-purple-800 mb-2">Think Independently:</h4>
                  <p className="text-sm text-purple-700">
                    From an investor's perspective, which option makes it easier to see the accounting equation at any moment? 
                    If Sarah pays $30,000/year for an assistant, can she instantly tell you her assets, liabilities, and equity? 
                    What would investors ask about each option?
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Decision 2: Recording Frequency */}
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <CardTitle className="text-orange-800 dark:text-orange-200">
                Decision 2: When Should Sarah Update Her Scoreboard?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah wonders if she needs to update the accounting equation after every transaction, or if month-end updates would work:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-orange-300">
                    <h4 className="font-bold text-orange-800 mb-2">Option A: Month-End Updates</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      Keep doing what she does now: update the accounting equation at the end of each month when preparing taxes.
                    </p>
                    <div className="text-xs text-gray-600">
                      Time saved: Yes | Know your equation right now? No
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-800 mb-2">Option B: Real-Time Updates</h4>
                    <p className="text-sm text-green-700 mb-2">
                      Update the accounting equation after every transaction so it's always current and accurate.
                    </p>
                    <div className="text-xs text-gray-600">
                      Time saved: No | Know your equation right now? Yes, always
                    </div>
                  </div>
                </div>

                <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                  <h4 className="font-semibold text-orange-800 mb-2">Think Independently:</h4>
                  <p className="text-sm text-orange-700">
                    If an investor asks "What's your equity right now?", which option lets Sarah answer? 
                    If Sarah waits until month-end to update the equation, what risks does she create for business decisions? 
                    Why does maintaining a current scoreboard matter for investor confidence?
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Decision 3: Verification Strategy */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Decision 3: How Will Sarah Prove Her Equation Stays Balanced?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah realizes that investors need proof that her accounting equation actually works—they won't just trust her word:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                    <h4 className="font-bold text-red-800 mb-2">Option A: Manual Math Checks</h4>
                    <p className="text-sm text-red-700 mb-2">
                      Add up all accounts by hand with a calculator when investors ask for verification.
                    </p>
                    <div className="text-xs text-gray-600">
                      Proves equation balances? Maybe, when you remember to check | Catches mistakes? No
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-800 mb-2">Option B: Automatic Equation Check</h4>
                    <p className="text-sm text-green-700 mb-2">
                      Build a system that automatically proves the accounting equation balances after every entry.
                    </p>
                    <div className="text-xs text-gray-600">
                      Proves equation balances? Yes, every time | Catches mistakes? Yes, immediately
                    </div>
                </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h4 className="font-semibold text-green-800 mb-2">Think Independently:</h4>
                  <p className="text-sm text-green-700">
                    If Sarah uses Option A and makes one tiny math mistake, what happens? If she uses Option B and makes 
                    a mistake, what happens? Which option shows investors that Sarah understands why the accounting equation matters 
                    for trustworthy financial records?
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investor Perspective Analysis */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Think Like an Investor: Critical Analysis Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck questions={independentQuestions} />
            </CardContent>
          </Card>

          {/* Real-World Business Scenarios */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Independent Problem Solving: Business Scenario Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Work through these realistic business scenarios that Sarah might face. Think carefully about 
                  the challenges and what solutions would be needed:
                </p>

                <div className="grid gap-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Scenario A: Tax Season Crisis</h4>
                    <p className="text-sm mb-4">
                      It's March, and Sarah's accountant needs a complete record of all business income and expenses 
                      for the tax year. Sarah has 4 notebooks with transactions scattered throughout, some pages are 
                      torn, and she realizes she may have forgotten to record some monthly software subscriptions.
                    </p>
                    <div className="bg-blue-100 p-3 rounded text-xs">
                      <strong>Think independently:</strong> What specific problems would Sarah face trying to 
                      prepare accurate tax documents? How might this affect her business legally and financially? 
                      What would a Smart Ledger system provide that notebooks cannot?
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Scenario B: Investor Due Diligence</h4>
                    <p className="text-sm mb-4">
                      A potential angel investor wants to review Sarah's financial performance before investing $75,000. 
                      They ask for: monthly revenue totals, expense categories, profit margins, and verification that 
                      all numbers are mathematically accurate. They need this information within 48 hours.
                    </p>
                    <div className="bg-blue-100 p-3 rounded text-xs">
                      <strong>Think independently:</strong> Can Sarah's notebook system provide this information 
                      quickly and accurately? What impression does this create about her business management? 
                      How would "clean books" change this scenario?
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Scenario C: Growth Planning Challenge</h4>
                    <p className="text-sm mb-4">
                      Sarah wants to expand TechStart Solutions by hiring her first employee. She needs to understand 
                      her true profit margins, predict cash flow needs, and determine if she can afford a $4,000/month 
                      salary plus benefits. She has 6 months of notebook records to analyze.
                    </p>
                    <div className="bg-blue-100 p-3 rounded text-xs">
                      <strong>Think independently:</strong> What calculations would Sarah need to make? How confident 
                      could she be in business decisions based on notebook data? What risks does this create for 
                      her business growth?
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scenario-Based Fill in the Blanks */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Complete the Business Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Complete these statements about Sarah's business challenges and the solution she needs:
              </p>
              <FillInTheBlank 
                sentences={scenarioSentences}
                title="Business Analysis Practice"
                description="Complete these statements about Sarah's business challenges and the solution she needs"
              />
            </CardContent>
          </Card>

          {/* Strategic Thinking Exercise */}
          <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
            <CardHeader>
              <CardTitle className="text-indigo-800 dark:text-indigo-200">
                Independent Strategic Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Individual Reflection Task:</strong> Write a brief analysis (3-4 sentences) for each question. 
                  Think about this from both Sarah's perspective and a potential investor's perspective:
                </p>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-indigo-800">Question 1: Risk Assessment</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    What are the top 3 business risks that Sarah's notebook system creates? 
                    Consider legal, financial, and operational risks.
                  </p>
                  <div className="bg-indigo-100 p-3 rounded text-xs">
                    Think about: accuracy, compliance, growth limitations, investor confidence
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-indigo-800">Question 2: Solution Requirements</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    What are the essential features that Sarah's Smart Ledger must have to solve these problems? 
                    What would make it "self-auditing"?
                  </p>
                  <div className="bg-indigo-100 p-3 rounded text-xs">
                    Think about: automation, error-checking, organization, investor credibility
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preparation for Assessment */}
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <CardTitle className="text-orange-800 dark:text-orange-200">
                Preparing for the Next Phase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg leading-relaxed">
                  You've now worked independently to analyze complex business scenarios and think critically 
                  about the challenges that motivated Sarah to build a Smart Ledger system. You understand both 
                  the operational problems and the investor confidence issues that poor record-keeping creates.
                </p>
                <p className="text-lg leading-relaxed">
                  In the next phase, you'll be assessed on your understanding of these concepts and your ability 
                  to apply them to new situations. Be ready to demonstrate your knowledge of business transactions, 
                  financial credibility, and the essential features of a professional ledger system.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}