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
      question: 'Sarah is preparing to meet with a potential angel investor. What would be the investor\'s biggest concern about her current notebook system?',
      answers: [
        'The investor cannot verify the accuracy or completeness of financial information',
        'The notebook pages are not the right size',
        'Sarah\'s handwriting is difficult to read',
        'Notebooks are outdated technology'
      ],
      explanation: 'An angel investor needs to verify financial information for due diligence. A notebook system makes it impossible to quickly validate numbers, check calculations, or ensure all transactions are properly recorded and categorized.'
    },
    {
      id: 'q2',
      question: 'If Sarah\'s business grows from 3 clients to 30 clients, which problem will become most critical with her notebook system?',
      answers: [
        'The time required to manually calculate totals and find specific transactions will become overwhelming',
        'She will run out of notebook pages',
        'Her clients will be unhappy with handwritten invoices',
        'She will need to hire someone to help with the writing'
      ],
      explanation: 'As transaction volume increases, the manual effort to organize, find, and calculate totals becomes exponentially more time-consuming and error-prone, making it impossible to efficiently manage the business or prepare investor-ready reports.'
    },
    {
      id: 'q3',
      question: 'What is the most important benefit of a "self-auditing" ledger system for Sarah\'s business credibility?',
      answers: [
        'It automatically checks for errors and ensures mathematical accuracy, giving investors confidence in the numbers',
        'It makes the ledger look more professional and modern',
        'It reduces the amount of paperwork Sarah needs to store',
        'It allows Sarah to work faster on client projects'
      ],
      explanation: 'A self-auditing system provides automatic error checking and mathematical verification, which is crucial for investor confidence. When numbers can be instantly verified as accurate and complete, it demonstrates professional financial management.'
    }
  ]

  const scenarioSentences = [
    {
      id: 'scenario1',
      text: "When Sarah's potential angel investor asks to see her financial records, the biggest risk is that the {blank} system cannot provide {blank} and {blank} financial information.",
      answer: 'notebook, accurate, organized',
      hint: "Think about what investors need to see"
    },
    {
      id: 'scenario2',
      text: "Sarah realizes that as her business grows, she needs a system that can automatically {blank} transactions and {blank} mathematical accuracy.",
      answer: 'categorize, verify',
      hint: "What would a smart ledger do automatically?"
    },
    {
      id: 'scenario3',
      text: "The driving question for this unit asks how to design a {blank}-{blank} ledger that would convince investors that Sarah keeps {blank} {blank} from day 1.",
      answer: 'self-auditing, clean books',
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
          {/* The Self-Auditing Ledger Concept - Textbook Content */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 text-white">Independent Practice</Badge>
                <CardTitle className="text-purple-800 dark:text-purple-200">
                  Designing the Solution: What Makes a Ledger "Self-Auditing"?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  Now it's time to work independently and think critically about the solution Sarah needs. 
                  You've learned about her business model, understood the importance of transaction categorization, 
                  and seen how chaotic record-keeping creates serious business risks. 
                  In this phase, you'll analyze what it means to build a "self-auditing" ledger system.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mt-8">What Does "Self-Auditing" Mean?</h3>
                <p className="text-lg leading-relaxed">
                  Remember our driving question: <strong>"How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?"</strong> 
                  But what exactly does "self-auditing" mean in the context of financial record-keeping?
                </p>

                <p className="text-lg leading-relaxed">
                  A self-auditing ledger is a financial system that automatically checks its own accuracy and flags potential errors. 
                  Instead of relying on manual calculations and hoping for the best, the system continuously validates that:
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-300 my-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">Key Features of a Self-Auditing System</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-sm">1</div>
                      <div>
                        <p className="font-semibold">Mathematical Accuracy</p>
                        <p className="text-sm text-purple-700">All calculations are performed automatically and verified for correctness</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-sm">2</div>
                      <div>
                        <p className="font-semibold">Balance Verification</p>
                        <p className="text-sm text-purple-700">The system ensures that all entries maintain proper accounting balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-sm">3</div>
                      <div>
                        <p className="font-semibold">Error Detection</p>
                        <p className="text-sm text-purple-700">Automatic identification of inconsistencies, missing data, or unusual patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-sm">4</div>
                      <div>
                        <p className="font-semibold">Instant Reporting</p>
                        <p className="text-sm text-purple-700">Real-time generation of financial summaries and investor-ready reports</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-purple-800 mt-8">Why Investors Demand Self-Auditing Systems</h3>
                <p className="text-lg leading-relaxed">
                  Think about it from an investor's perspective. If you were considering investing $50,000 or $100,000 in Sarah's business, 
                  you would need confidence that the financial information she provides is accurate and complete. 
                  A self-auditing ledger provides that confidence in several critical ways:
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Due Diligence Efficiency:</strong> Instead of spending weeks manually verifying Sarah's notebook entries, 
                  investors can quickly review system-generated reports that are mathematically guaranteed to be correct.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Ongoing Monitoring:</strong> After investment, investors can receive regular updates knowing that the numbers 
                  are systematically verified, not just hopeful estimates from scattered records.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Professional Standards:</strong> A self-auditing system demonstrates that Sarah understands and implements 
                  professional business practices, reducing the perceived risk of the investment.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mt-8">The Technology Behind the Solution</h3>
                <p className="text-lg leading-relaxed">
                  While the concept of self-auditing might sound complex, the technology is actually quite accessible. 
                  Throughout this unit, you'll learn to build Sarah's Smart Ledger using Microsoft Excel—a tool that's both 
                  powerful enough to handle professional financial management and familiar enough for entrepreneurs to use confidently.
                </p>

                <p className="text-lg leading-relaxed">
                  The key is learning to harness Excel's advanced features: structured tables for organization, 
                  automated formulas for calculations, and conditional formatting for error detection. 
                  When these features work together, they create a system that's far more reliable and professional 
                  than any manual record-keeping approach.
                </p>
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