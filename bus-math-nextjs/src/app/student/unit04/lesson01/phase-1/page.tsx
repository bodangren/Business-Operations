import Lesson01Phase1 from "@/components/student/Lesson01Phase1"
import { lesson01Data, unit04Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const videoData = {
    title: "Data as a Weapon: Using Analytics for Competitive Advantage",
    description: "Revenue is growing, but Sarah realizes she's flying blind in a competitive market. A client's request for an ROI analysis and a shocking discovery that she's underpriced by 15% forces her to embrace data. See how Sarah transitions from simple reporting to using data analysis as a strategic weapon for pricing, proving value, and winning bigger contracts.",
    youtubeId: "MKNYfuGZntk",
    duration: "2:51",
    transcript: `So, having professional financial statements was a game-changer. It gave me the confidence to start competing for much bigger projects. My business was doing well, but the market was getting more competitive. I found myself bidding on things like a digital marketing contract for the municipal government, where you're up against larger, more established agencies. Gut feelings and a nice portfolio just weren't going to be enough to win.

I started running into two big problems. First, I noticed a competing agency was charging significantly more, and they were still winning big clients. Second, my own clients were getting more sophisticated. One of them asked me for a detailed Return on Investment—or ROI—analysis to justify what they were spending with me. They wanted hard numbers. I realized I had to get better at using data not just for my own business, but to prove my value and make strategic decisions.

The real 'aha' moment came when I finally did a deep competitive analysis. I was honestly shocked. I discovered that my pricing was about 15% below the market average for the level of quality I was delivering. I was just leaving money on the table because I hadn't done the research. That's when it hit me: data analysis isn't some boring, academic exercise. It's a competitive weapon. My gut feeling was wrong, but the data was telling me the truth.

So I had to learn how to be a data-driven business owner. This unit's driving question is about using sales data to help a café maximize profit, but the principle was exactly the same for my business. It's about moving beyond just reporting what happened and starting to analyze *why* it happened and what you should do next. It's about digging into trends, deeply understanding metrics like ROI, and then using that insight to make strategic choices about my pricing, my services, and where I should focus my energy.

Once I started using data this way, everything changed. I was able to confidently adjust my pricing to reflect my value. I could walk into a client meeting and show them a clear, data-backed report on the return they were getting. I won bigger and better projects. But, this success led directly to the next big problem. I was winning so much new work that I was consistently working over 60 hours a week. I had hit my personal capacity. I knew that if I wanted the business to keep growing, I couldn't do it alone anymore.`
  }

  const comprehensionQuestions = [
    {
      id: 'q1',
      question: 'What shocking discovery did Sarah make during her competitive analysis?',
      answers: ['Her pricing was about 15% below market average for her quality level', 'She was charging 25% more than competitors', 'Her services were lower quality than competitors', 'She was working in the wrong industry'],
      explanation: 'Sarah discovered that her pricing was about 15% below the market average for the level of quality she was delivering, meaning she was leaving money on the table because she hadn\'t done proper market research.'
    },
    {
      id: 'q2',
      question: 'What two big problems did Sarah encounter as her business grew more competitive?',
      answers: ['Competitors charging more while still winning clients, and clients requesting ROI analysis', 'Not enough time and too many employees', 'Bad reviews and declining sales', 'Technical problems and software issues'],
      explanation: 'Sarah faced two challenges: noticing that competing agencies were charging significantly more and still winning big clients, and her own clients becoming more sophisticated by requesting detailed ROI analyses to justify their spending.'
    },
    {
      id: 'q3',
      question: 'According to Sarah, what is data analysis in business?',
      answers: ['A competitive weapon', 'A boring academic exercise', 'An optional nice-to-have skill', 'Something only accountants need to know'],
      explanation: 'Sarah realized that "data analysis isn\'t some boring, academic exercise. It\'s a competitive weapon." This insight helped her move beyond gut feelings to make strategic, data-driven decisions about pricing, services, and business focus.'
    }
  ]

  const unitConfig = {
    colorScheme: {
      primary: "green",
      secondary: "green-200",
      text: "green-800",
      cardBg: "green-50",
      cardBorder: "green-200"
    },
    introText: {
      welcomeText: "Welcome to the next stage of your business journey! In our last units, we've followed Sarah Chen, the founder of TechStart Solutions, as she built her business from the ground up. We saw her go from scribbling transactions in a messy notebook to building a self-auditing smart ledger. She then took the next step by automating her month-end processes to save precious time. But as her business grew, she hit a new, more complicated wall.",
      contextText: "Sarah had a gut feeling she was doing well, but feelings don't pay the bills. She decided to do a deep analysis of her market and got a huge shock. She discovered that her pricing was about 15% below the market average for the quality she was delivering. She was leaving money on the table! It was then that Sarah had a critical \"aha\" moment: data analysis isn't just a boring chore for accountants. It's a competitive weapon. She realized that to truly grow her business, she had to move beyond just recording what happened and start analyzing why it happened to predict what she should do next."
    },
    reflectionText: "This is one of the most important lessons in modern business. Gut feelings are great, but data provides the truth. Learning to analyze data is what separates successful entrepreneurs from those who are just guessing. This is the skill that helped Sarah confidently raise her prices, prove her value to clients, and win bigger projects.",
    transitionText: "This is your first step into the world of data analytics. You have the data, you have the challenge, and you have your team. It's time to dig in and see what secrets the numbers are hiding. In the next phase, we'll start cleaning up this messy real-world data to prepare it for analysis—because as you'll learn, real-world data is always messy.",
    turnAndTalkPrompt: {
      description: "Think about a time when you or someone you know made assumptions about what people wanted, but the reality was different. Share with a partner:",
      questions: [
        "What was the situation and what assumptions were made?",
        "How did you discover the assumptions were wrong?",
        "What data or evidence would have helped avoid the mistake?",
        "How does this connect to Sarah's pricing discovery and the café's waste problem?"
      ]
    }
  }

  const additionalContent = (
    <div className="prose prose-lg max-w-none">
      <p className="text-base leading-relaxed">
        To master this skill, we're going to step into the shoes of a data consultant. Our new "client" is the campus café, a bustling hub that has a big problem. They have tons of sales data, but they don't know what it's telling them. Your mission is to use their data to create a plan that will make their business more profitable and efficient. The essential question you must answer is: <strong>Given two years of POS data, what inventory and staffing plan will maximize weekend profits without raising waste above 3%?</strong>
      </p>
      
      <p className="text-base leading-relaxed">
        You are about to learn how to turn raw numbers into a powerful story that can change how a business operates. Let's get started.
      </p>
    </div>
  )

  return (
    <Lesson01Phase1
      lesson01Data={lesson01Data}
      unitData={unit04Data}
      lesson01Phases={lesson01Phases}
      videoData={videoData}
      comprehensionQuestions={comprehensionQuestions}
      unitConfig={unitConfig}
      additionalContent={additionalContent}
    />
  )
}
