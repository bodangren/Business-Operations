import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, FileText, Activity, BookOpen, Users, Target } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"

export default function Phase2Content() {

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

  return (
    <div className="bg-gradient-to-br from-slate-50 to-green-50">
      <div className="space-y-6">

        <div className="max-w-4xl mx-auto space-y-8">
          {/* The Scoreboard Card */}
          <Card className="border-purple-200 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100">
              <CardTitle className="text-purple-900 flex flex-col gap-1">
                The Unit Scoreboard
                <span className="text-base font-normal text-purple-700">
                  Three numbers that tell whether Sarah's business is healthy.
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <p className="text-base text-gray-700">
                Every business leader tracks a scoreboard. Sarah's scoreboard has three lines. If any one of them is weak, the whole story falls apart.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Profit */}
                <div className="rounded-xl border-2 border-purple-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-purple-100 text-purple-800 text-xs uppercase tracking-wide">Profit</Badge>
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Did the business earn more than it spent this period?
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <p className="text-xs font-semibold text-purple-900 uppercase">Equation</p>
                    <p className="text-lg font-bold text-purple-700 mt-1">
                      Revenue − Expenses = Net Income
                    </p>
                  </div>
                  <p className="text-xs text-purple-700 mt-3">
                    <strong>Why it matters:</strong> Profit is the plot. Without it, the story has no momentum.
                  </p>
                </div>

                {/* Solvency */}
                <div className="rounded-xl border-2 border-blue-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-blue-100 text-blue-800 text-xs uppercase tracking-wide">Solvency</Badge>
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Does the business own more than it owes?
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <p className="text-xs font-semibold text-blue-900 uppercase">Equation</p>
                    <p className="text-lg font-bold text-blue-700 mt-1">
                      Assets = Liabilities + Equity
                    </p>
                  </div>
                  <p className="text-xs text-blue-700 mt-3">
                    <strong>Why it matters:</strong> Solvency is the setting. It tells lenders whether the business can survive a bad month.
                  </p>
                </div>

                {/* Cash */}
                <div className="rounded-xl border-2 border-indigo-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-indigo-100 text-indigo-800 text-xs uppercase tracking-wide">Cash</Badge>
                    <Activity className="w-4 h-4 text-indigo-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Is there enough cash on hand to pay bills today?
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                    <p className="text-xs font-semibold text-indigo-900 uppercase">Equation</p>
                    <p className="text-lg font-bold text-indigo-700 mt-1">
                      Operating + Investing + Financing = Δ Cash
                    </p>
                  </div>
                  <p className="text-xs text-indigo-700 mt-3">
                    <strong>Why it matters:</strong> Cash is the action. A profitable business with no cash still can't make payroll.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-purple-800">
                <strong>Memory device:</strong> Profit = plot. Solvency = setting. Cash = action. Every spreadsheet you build this unit should trace back to these three lines.
              </div>
            </CardContent>
          </Card>

          {/* Introduction Section */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                The Three-Statement Storyboard
              </CardTitle>
              <CardDescription>
                How the scoreboard connects to the three financial statements
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
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

                <h4 className="text-lg font-semibold text-gray-900 mb-3">How Each Statement Feeds the Scoreboard</h4>
                <p className="text-base leading-relaxed mb-4">
                  Jennifer described the three financial statements as a <strong>"storyboard" for the business</strong>, and this idea immediately clicked for Sarah. Each statement feeds one line on the scoreboard:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-purple-700">
                        <TrendingUp className="w-4 h-4" />
                        Income Statement → Profit
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-1">The Plot</p>
                      <p className="text-xs text-gray-600">Is the business profitable?</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-blue-700">
                        <FileText className="w-4 h-4" />
                        Balance Sheet → Solvency
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-1">The Setting</p>
                      <p className="text-xs text-gray-600">What does the business own versus what does it owe?</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-indigo-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-indigo-700">
                        <Activity className="w-4 h-4" />
                        Cash Flow → Cash
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

          {/* Fill in the Blank Exercise */}
          <FillInTheBlank
            sentences={fillInBlanks}
            title="Three-Statement Storyboard Components"
            description="Complete these sentences about the role of each financial statement in the business storyboard"
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          {/* Scoreboard Scan Activity */}
          <Card className="border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100">
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Scoreboard Scan: Read the Story in 30 Seconds
              </CardTitle>
              <CardDescription>
                Practice reading all three scoreboard lines at once
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base text-gray-700 mb-4">
                Investors don't read one statement and stop. They scan all three lines of the scoreboard at once. Try it with this simplified TechStart snapshot.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                  <p className="text-xs font-semibold text-purple-900 uppercase mb-2">Profit (Income Statement)</p>
                  <p className="text-sm text-purple-800">Revenue: $4,350</p>
                  <p className="text-sm text-purple-800">Expenses: $1,170</p>
                  <p className="text-sm font-bold text-purple-900 mt-1">Net Income: $3,180</p>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <p className="text-xs font-semibold text-blue-900 uppercase mb-2">Solvency (Balance Sheet)</p>
                  <p className="text-sm text-blue-800">Total Assets: $22,700</p>
                  <p className="text-sm text-blue-800">Total Liabilities: $8,400</p>
                  <p className="text-sm font-bold text-blue-900 mt-1">Equity: $14,300</p>
                </div>
                <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                  <p className="text-xs font-semibold text-indigo-900 uppercase mb-2">Cash (Cash Flow)</p>
                  <p className="text-sm text-indigo-800">Operating: +$2,900</p>
                  <p className="text-sm text-indigo-800">Investing: −$1,200</p>
                  <p className="text-sm font-bold text-indigo-900 mt-1">Net Change: +$2,500</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-800 font-semibold mb-1">Quick scan questions:</p>
                <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                  <li>Is TechStart profitable? Which line told you that?</li>
                  <li>Could TechStart survive a slow month? Which line tells you that?</li>
                  <li>Did cash go up or down? Which line tells you that?</li>
                  <li>If you had to flag one risk, what would it be?</li>
                </ul>
              </div>
            </CardContent>
          </Card>

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
        </div>

      </div>
    </div>
  )
}
