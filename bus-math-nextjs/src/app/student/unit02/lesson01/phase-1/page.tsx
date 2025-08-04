import Lesson01Phase1 from "@/components/student/Lesson01Phase1"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const videoData = {
    title: "The Automation Breakthrough: Conquering the Month-End Nightmare",
    description: "Sarah's business is growing, but so is her administrative workload. A weekend-long 'bank reconciliation nightmare' reveals the flaws in her manual system. With advice from her mentor, Marcus, Sarah discovers the power of automation to cut her month-end closing time from days to hours. Learn why this step is crucial for freeing up time to focus on growth.",
    youtubeId: "Je7SPYOw9Vk",
    duration: "5:15",
    transcript: `(Sarah is on camera, appearing more settled and professional than in the first video. The setting is the same.)

So, I had my smart ledger, and I was feeling pretty good. The business was growing. I even landed my first monthly retainer client, a local fitness studio. That was a big deal—it meant consistent revenue every month. But it also meant more transactions, more data entry, more things to keep track of.

And that's when I hit the next wall. It happened at the end of the month. I sat down to do my first real 'month-end closing,' you know, reconcile my books with my bank account. It turned into a complete nightmare. I spent my entire weekend on it. My 'smart' ledger was still manual, and I found so many little errors—a typo here, a missed transaction there—and they threw all my numbers off. It was incredibly frustrating. I thought I had solved my bookkeeping problem, but I had just created a new one: a process that took way too much of my time.

I was talking about it with my mentor, Marcus Rodriguez. I was just venting, really, about how I wasted a whole weekend. He was pretty direct. He told me my time was the most valuable asset in my business, and I was wasting it on tasks that a machine could do better. He pointed out that those little errors I found weren't so little; they could have serious tax consequences down the road. He was the one who pushed me to stop thinking about just *recording* my finances and start thinking about *automating* them.

That's where the idea of the 'Month-End Wizard' came from. The driving question for me became, how can I cut this process from two days down to two hours without sacrificing accuracy?. I dove into learning how to use things like macros and advanced formulas right there in my spreadsheet. The goal was to build a system that could do the heavy lifting for me—the routine checks, the calculations, the reconciliations. It's all about making the system work for you, not the other way around.

And it worked. That weekend-long nightmare literally became a two-hour task. The feeling was just... empowering. All that time I got back, I could now spend on what actually grows the business—finding bigger clients and improving my services. But this new efficiency created a new kind of ambition. I started going after bigger projects, but I quickly found out that serious people—like banks and investors—don't just want to hear that your books are accurate. They want to see them presented in a very specific way. They want professional financial statements. And learning how to create those... well, that was the next major hurdle.`
  }

  const comprehensionQuestions = [
    {
      id: 'q1',
      question: 'What milestone achievement marked the beginning of Sarah\'s new challenges in Unit 2?',
      answers: ['Landing her first monthly retainer client (fitness studio)', 'Getting her first $10,000 project', 'Hiring her first employee', 'Opening a business bank account'],
      explanation: 'Sarah landed her first monthly retainer client, a local fitness studio, which meant consistent revenue but also more transactions and complexity in her month-end processes.'
    },
    {
      id: 'q2',
      question: 'How long did Sarah\'s first month-end closing process take, and why was this a problem?',
      answers: ['An entire weekend, which was an unsustainable use of her valuable time', 'One full day, which interfered with client work', 'Three hours, which was too long for a small business', 'Two weeks, which delayed her financial reporting'],
      explanation: 'Sarah spent her entire weekend on month-end closing, and her mentor Marcus pointed out that this was wasting her most valuable asset—her time—on tasks a machine could do better.'
    },
    {
      id: 'q3',
      question: 'What was Sarah\'s driving question that led to the "Month-End Wizard" concept?',
      answers: ['How can I cut this process from two days down to two hours without sacrificing accuracy?', 'How can I hire someone to do my bookkeeping for me?', 'How can I avoid doing month-end closing altogether?', 'How can I convince my clients to pay faster?'],
      explanation: 'Sarah\'s specific goal was to reduce her month-end closing time from two days to two hours while maintaining accuracy through automation and advanced Excel features like macros and formulas.'
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
      welcomeText: 'After launching TechStart Solutions, Sarah had her "Smart Ledger" from Unit 1, and for a while, she was feeling pretty good. Her business was growing, and she even landed her first monthly retainer client, a local fitness studio. This meant more consistent revenue, but it also meant more transactions, more data entry, and more complexity. And that\'s when she hit the next wall.',
      contextText: 'It happened at the end of the month. Sarah sat down to do her first real "month-end closing," the process of finalizing her books and reconciling them with her bank account. It turned into what she later called a "complete nightmare." She spent her entire weekend hunched over her laptop. Her "smart" ledger was still completely manual, and as she cross-referenced every transaction, she found dozens of tiny errors—a typo in one number, a missed software subscription fee in another. Each small mistake threw her totals off, sending her on long, frustrating hunts for the source of the problem. She thought she had solved her bookkeeping problem, but she realized she had just created a new one: a process that was eating up her most valuable resource—time.'
    },
    reflectionText: 'Frustrated, she vented to her mentor, Marcus Rodriguez, about how she had wasted a whole weekend on administrative work. Marcus was direct. He told her that her time was the most valuable asset in her business, and she was wasting it on tasks that a machine could do better and more accurately. He pointed out that those little errors weren\'t so little; they could have serious consequences down the road. He was the one who pushed her to stop thinking about just recording her finances and start thinking about automating them.',
    transitionText: "Sarah's story demonstrates that business growth isn't just about getting more customers—it's about building systems that can scale efficiently. In the next phase, we'll dive deeper into the specific challenges of month-end closing procedures and explore why GAAP compliance makes automation both necessary and complex.",
    turnAndTalkPrompt: {
      description: "Think about a time when you or someone you know spent way too much time on a repetitive task that could have been made more efficient. Share with a partner:",
      questions: [
        "What was the task and why was it so time-consuming?",
        "What errors or problems occurred because of the manual process?",
        "How could technology or automation have helped?",
        "How does this connect to Sarah's month-end closing challenge?"
      ]
    }
  }

  const additionalContent = (
    <div className="prose prose-lg max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">The Weekend Nightmare: Why Automation Matters</h3>
      
      <p className="text-base leading-relaxed">
        This conversation sparked a new goal for Sarah, which has become the essential question for our unit. She asked herself, <strong>"What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?"</strong> Before you can build your own solution to this problem, it's important to understand the challenge firsthand.
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