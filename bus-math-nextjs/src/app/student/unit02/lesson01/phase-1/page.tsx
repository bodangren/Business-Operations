import Lesson01Phase1 from "@/components/student/Lesson01Phase1"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const videoData = {
    title: "The Closing Crisis: Growing Pains",
    description: "Sarah's business is growing, but her month-end closing process isn't scaling. A weekend-long reconciliation reveals a serious bottleneck that could jeopardize her next big opportunity. Learn why accurate and timely month-end closing is critical for business growth.",
    youtubeId: "1O_YHSGpZDo",
    duration: "2:55",
    transcript: `(Sarah is on camera, appearing more settled and professional than in the first video. The setting is the same.)

So, I had my smart ledger from Unit 1, and I was feeling pretty good. I think I had solved my bookkeeping problem, but I had just created a new one: a process that took way too much of my time.

The real problem hit at the end of the month. I sat down to close my books for the first time properly—you know, match everything to the bank, account for any accrued expenses, make sure the income statement matched reality. I expected it to take a few hours. Instead, I spent my entire weekend.

Here's the thing: I had more transactions than ever before. I had a new retainer client, a local fitness studio, that pays monthly in advance. I had software subscriptions I'd forgotten to record. I had expenses I'd incurred but not yet paid. My cash ledger didn't show the whole picture.

I started making adjusting entries—things I knew I should have been recording all month. Every time I added one adjustment, I found another place where the numbers didn't match. I was chasing my own tail. By Sunday night, I was exhausted and my financials still didn't feel trustworthy.

And then came the scary part. I got a call from a banker I'd been talking to. They were interested in a loan to help me scale, but they asked for my most recent financial statements. I looked at what I had and... I wasn't confident enough to send it. What if the numbers were wrong? What if they found errors and decided my business wasn't as solid as I said it was?

I realized then that slow, manual month-end closing isn't just annoying. It's a risk. It delays decision-making. It creates uncertainty. And it can cost you real opportunities when you can't produce accurate financials on demand.`
  }

  const comprehensionQuestions = [
    {
      id: 'q1',
      question: 'Why was Sarah\'s "smart ledger" from Unit 1 no longer sufficient for her growing business?',
      answers: ['It didn\'t handle accruals, deferrals, and adjusting entries needed for proper month-end closing', 'It was too expensive to maintain', 'It couldn\'t connect to her bank account', 'It didn\'t support multiple clients'],
      explanation: 'Sarah\'s cash-based ledger worked when transactions were simple, but as her business grew with retainer clients, software subscriptions, and accrued expenses, she needed accrual recording and adjusting entries to show the full picture.'
    },
    {
      id: 'q2',
      question: 'What happened when Sarah tried to close her books for the first time properly?',
      answers: ['She spent her entire weekend chasing errors and adjusting entries', 'She finished in 2 hours with no problems', 'She realized her ledger was already perfect', 'She found all transactions automatically matched'],
      explanation: 'Sarah expected month-end closing to take a few hours but spent her entire weekend because she had to discover and record accruals, deferrals, and other adjusting entries that her cash ledger hadn\'t been tracking.'
    },
    {
      id: 'q3',
      question: 'What was the immediate business consequence of Sarah\'s slow, uncertain month-end closing process?',
      answers: ['She couldn\'t confidently send financial statements to a banker considering a loan', 'She lost her biggest client', 'She had to pay a fine to the IRS', 'Her bank account was frozen'],
      explanation: 'When a banker asked for Sarah\'s most recent financial statements for a loan application, she wasn\'t confident enough to send them because her month-end closing process was slow and uncertain about accuracy.'
    }
  ]

  const unitConfig = {
    colorScheme: {
      primary: "orange",
      secondary: "orange-200",
      text: "orange-800",
      cardBg: "orange-50",
      cardBorder: "orange-200"
    },
    introText: {
      welcomeText: 'Sarah\'s business is growing, but her financial reporting process isn\'t keeping up. What happens when a founder can\'t close the books quickly and accurately? In this unit, you\'ll experience the month-end closing crisis and learn the accounting workflow that every growing business must master.',
      contextText: 'Month-end closing is the process of finalizing financial records for a reporting period. It requires accruals, deferrals, adjusting entries, and closing entries—accounting moves that ensure financial statements accurately represent business performance. When this process is slow or unreliable, businesses can\'t make decisions, can\'t report to stakeholders, and can\'t access capital when they need it most.'
    },
    reflectionText: 'Sarah\'s story shows that month-end closing isn\'t just an accounting exercise—it\'s a business control issue. Delayed closing means delayed decisions. Uncertain numbers mean uncertain strategy. In the next phase, you\'ll see the complete month-end close workflow and understand what every business must track to grow confidently.',
    transitionText: "In this unit, we'll master the month-end close workflow. You'll learn why adjusting entries are necessary, how closing entries reset accounts, and how to build a system that turns a weekend nightmare into a reliable, repeatable process.",
    turnAndTalkPrompt: {
      description: "Discuss with a partner: Why would a bank or investor care about timely, accurate month-end closing?",
      questions: [
        "What decisions can a business make with current financials that it can't make without them?",
        "What would it signal if a business owner couldn't produce financial statements when asked?",
        "How might delayed closing affect a business's ability to get a loan or attract investors?",
        "Why is accuracy just as important as speed in month-end closing?"
      ]
    }
  }

  const additionalContent = (
    <div className="prose prose-lg max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">The Month-End Closing Problem</h3>
      
      <p className="text-base leading-relaxed mb-4">
        Sarah's experience reveals the core question for this unit: <strong>How can a growing business close the month quickly and accurately while maintaining GAAP compliance?</strong>
      </p>

      <p className="text-base leading-relaxed">
        Month-end closing isn't just about matching transactions to a bank statement. It requires:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Accruals:</strong> Recording revenue when earned and expenses when incurred, even if cash hasn't changed hands</li>
        <li><strong>Deferrals:</strong> Handling prepaid expenses and unearned revenue correctly</li>
        <li><strong>Adjusting entries:</strong> Updating account balances before closing the period</li>
        <li><strong>Closing entries:</strong> Resetting temporary accounts to prepare for the next period</li>
      </ul>

      <p className="text-base leading-relaxed">
        When this process takes days instead of hours, business decisions are delayed, opportunities are missed, and stakeholder confidence is at risk.
      </p>
    </div>
  )

  return (
    <Lesson01Phase1
      lesson01Data={lesson01Data}
      unitData={unit02Data}
      lesson01Phases={lesson01Phases}
      videoData={videoData}
      comprehensionQuestions={comprehensionQuestions}
      unitConfig={unitConfig}
      additionalContent={additionalContent}
    />
  )
}
