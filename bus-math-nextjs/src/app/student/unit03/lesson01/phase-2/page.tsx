import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, FileText, DollarSign, Activity, BookOpen, Users, Target } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson01Phases[1] // Introduction phase

  const comprehensionQuestions1 = [
    {
      id: 'q1',
      question: 'What is the central challenge Sarah needs to solve in this unit?',
      answers: [
        'How do today\'s journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?',
        'How to create more detailed spreadsheets for internal use',
        'How to hire more employees for her growing business',
        'How to improve her website design skills'
      ],
      explanation: 'Sarah must learn to transform her internal records into a comprehensive financial story that speaks the official language of investors, banks, and the business world through three integrated financial statements.'
    },
    {
      id: 'q2',
      question: 'According to Jennifer Kim, what does the Income Statement represent in the business storyboard?',
      answers: [
        'The plot - Is the business profitable?',
        'The setting - What does the business own vs owe?',
        'The action - How is cash moving through the business?',
        'The characters - Who runs the business?'
      ],
      explanation: 'The Income Statement tells the plot of the story by answering the fundamental question: Is the business profitable? It shows the relationship between revenues and expenses over a specific period.'
    },
    {
      id: 'q3',
      question: 'What makes the three financial statements work as a "storyboard" rather than separate reports?',
      answers: [
        'They work together to tell one coherent story of business performance',
        'They are printed on the same type of paper',
        'They use the same accounting software',
        'They are prepared by the same person'
      ],
      explanation: 'The three financial statements function as an integrated storyboard because they work together to tell one coherent story - the Income Statement shows the plot (profitability), the Balance Sheet shows the setting (financial position), and the Cash Flow Statement shows the action (cash movement).'
    }
  ]

  const fillInBlanks = [
    {
      id: '1',
      text: 'The {blank} tells the plot of the story by showing if the business is profitable.',
      answer: 'Income Statement',
      hint: 'This statement shows revenues minus expenses'
    },
    {
      id: '2',
      text: 'The {blank} shows the setting by displaying what the business owns versus what it owes.',
      answer: 'Balance Sheet',
      hint: 'This statement shows assets, liabilities, and equity at a point in time'
    },
    {
      id: '3',
      text: 'The {blank} reveals the action by tracking how cash actually moves through the business.',
      answer: 'Statement of Cash Flows',
      hint: 'This statement shows cash from operating, investing, and financing activities'
    }
  ]

  const comprehensionQuestions2 = [
    {
      id: 'q4',
      question: 'What was the loan officer\'s reaction to Sarah\'s detailed internal spreadsheet?',
      answers: [
        '"This is nice, but where are your financial statements?"',
        '"This is exactly what we need for the loan approval"',
        '"Your spreadsheet is too complicated for a small business"',
        '"You need to simplify this data before we can review it"'
      ],
      explanation: 'The loan officer acknowledged that Sarah\'s internal records were nice but pointed out that banks require proper financial statements that follow standardized formats and speak the official language of the financial world.'
    },
    {
      id: 'q5',
      question: 'Why did Sarah need to hire CPA Jennifer Kim to guide her?',
      answers: [
        'She realized her internal records were for her, but the business world needed the official story told through specific documents',
        'She didn\'t have enough time to do the work herself',
        'The bank required all documents to be prepared by a CPA',
        'Her spreadsheet software wasn\'t working properly'
      ],
      explanation: 'Sarah recognized that while her internal records were accurate and useful for her own management, she needed to learn how to communicate her business story in the standardized language that investors, banks, and other stakeholders expect and understand.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction Section */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Introduction: The Three-Statement Storyboard
              </CardTitle>
              <CardDescription>
                Understanding how financial statements work together to tell a complete business story
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Day the Spreadsheet Wasn't Enough</h3>
                
                <p className="text-base leading-relaxed mb-4">
                  With her back-office operations finally running smoothly, Sarah's confidence was at an all-time high. The automation you helped her build was working perfectly, and it gave her the time she needed to focus on growth. A huge opportunity suddenly came her way—a regional retail chain needed a massive e-commerce solution. This was the kind of project that could put TechStart Solutions on the map. But a project of that size required more resources than she had on hand. To manage it, she knew she'd need to secure a business line of credit from a bank.
                </p>

                <p className="text-base leading-relaxed mb-4">
                  Feeling prepared, Sarah walked into the bank with her clean, automated ledger from Unit 2. She knew her numbers inside and out. But after looking at her detailed spreadsheet, the loan officer said something that stopped her in her tracks: <strong>"This is nice, but where are your financial statements?"</strong>. As if on cue, at almost the exact same time, her mentor introduced her to a potential investor who was interested in TechStart. His first question was the same: he wanted to see "real financial statements".
                </p>

                <p className="text-base leading-relaxed mb-4">
                  This was a huge "aha" moment for Sarah. She realized that her internal records, as accurate as they were, were for <em>her</em>. The rest of the professional world needed to see the official story of her company's health, and that story is told through three specific documents. She knew she was out of her depth, so she hired a CPA named Jennifer Kim to guide her.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-purple-800 mb-2">The Central Challenge</h4>
                  <p className="text-purple-700 italic">
                    <strong>How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?</strong>
                  </p>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">The Three-Part Storyboard</h4>
                <p className="text-base leading-relaxed mb-4">
                  Jennifer described the three financial statements as a <strong>"storyboard" for the business</strong>, and this idea immediately clicked for Sarah. Jennifer explained that this storyboard has three parts that work together to tell one coherent story:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-purple-700">
                        <TrendingUp className="w-4 h-4" />
                        Income Statement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-1">The Plot</p>
                      <p className="text-xs text-gray-600">Is the business profitable?</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-purple-700">
                        <FileText className="w-4 h-4" />
                        Balance Sheet
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-1">The Setting</p>
                      <p className="text-xs text-gray-600">What does the business own versus what does it owe?</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-purple-700">
                        <Activity className="w-4 h-4" />
                        Statement of Cash Flows
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-1">The Action</p>
                      <p className="text-xs text-gray-600">How is cash actually moving through the business?</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-base leading-relaxed mb-4">
                  Before we start building Sarah's storyboard, we're going to do a little detective work. We'll look at how a massive company like Tesla tells its financial story by dissecting its 10-Q, which is its official quarterly report. You'll see how the words in their report connect to the numbers on their statements. Then, we'll get to work turning the raw data from your Unit 1 venture into a compelling financial story of your own.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check 1 */}
          <ComprehensionCheck
            questions={comprehensionQuestions1}
            title="Understanding the Business Challenge"
            description="Test your understanding of Sarah's situation and the three-statement storyboard concept"
            showExplanations={true}
            allowRetry={true}
          />

          {/* Fill in the Blank Exercise */}
          <FillInTheBlank
            sentences={fillInBlanks}
            title="Three-Statement Storyboard Components"
            description="Complete these sentences about the role of each financial statement in the business storyboard"
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          {/* Why This Matters Section */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800">Why This Matters: Speaking the Language of Business</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Sarah's experience reveals a critical business reality: <strong>different audiences need information in specific formats</strong>. Her internal spreadsheets were perfect for managing day-to-day operations, but banks and investors require standardized financial statements that follow Generally Accepted Accounting Principles (GAAP).
                </p>

                <p className="text-base leading-relaxed mb-4">
                  This is similar to how you might write a text message to a friend versus a formal essay for English class—the content might be similar, but the format and language need to match your audience's expectations. In business, financial statements are the "formal essay" format that the professional world expects.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Real-World Connection</h4>
                  <p className="text-yellow-700 text-sm">
                    Every public company must file quarterly reports (10-Q) and annual reports (10-K) with the SEC using standardized financial statements. Private companies seeking loans or investment must provide similar documentation. This isn't just academic—it's how the business world actually operates.
                  </p>
                </div>

                <p className="text-base leading-relaxed">
                  Throughout this unit, you'll learn to transform raw accounting data into professional financial statements that tell a compelling story about business performance, financial position, and cash flow management—the same skills Sarah needed to secure her business line of credit and attract investors.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check 2 */}
          <ComprehensionCheck
            questions={comprehensionQuestions2}
            title="Professional Communication Requirements"
            description="Verify your understanding of why businesses need standardized financial statements"
            showExplanations={true}
            allowRetry={true}
          />

          {/* Turn and Talk */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Turn and Talk: Format Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                <strong>Partner Discussion (3 minutes):</strong> Think about different situations in your life where you've had to present the same information in different formats for different audiences.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 mb-4">
                <li>How do you communicate with teachers versus friends about the same topic?</li>
                <li>How would you describe your weekend differently to your parents versus your best friend?</li>
                <li>Why do you think businesses need to follow specific formats when communicating with banks and investors?</li>
                <li>What could happen if a business only provided informal records to professional stakeholders?</li>
              </ul>
              <Badge variant="outline" className="text-purple-700 border-purple-300">
                Be ready to share one insight with the class
              </Badge>
            </CardContent>
          </Card>

          {/* Learning Objectives Preview */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Target className="w-5 h-5" />
                What We'll Build Together
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                By the end of this unit, you'll be able to create the same integrated financial storyboard that helped Sarah secure her business growth funding:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Build Income Statements with INDEX/MATCH formulas</li>
                    <li>Create Balance Sheets with integrated Retained Earnings</li>
                    <li>Construct Cash Flow Statements using the Indirect Method</li>
                    <li>Design KPI dashboards with financial ratios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Communication</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Present financial stories to investor panels</li>
                    <li>Explain business performance using integrated statements</li>
                    <li>Demonstrate Excel model functionality professionally</li>
                    <li>Answer stakeholder questions with confidence</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}