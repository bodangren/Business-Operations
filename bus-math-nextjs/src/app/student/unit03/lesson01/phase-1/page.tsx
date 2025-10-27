import Lesson01Phase1 from "@/components/student/Lesson01Phase1"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const videoData = {
    title: "Speaking the Language of Investors: Creating Financial Statements",
    description: "A major client opportunity and interest from a potential investor force Sarah to level up her financial reporting. With her CPA Jennifer Kim, she learns that her internal records aren't enough. Discover how the three core financial statements—the Income Statement, Balance Sheet, and Cash Flow Statement—work together as a 'storyboard' to tell the official story of her business's health to banks and investors.",
    youtubeId: "XHZjrjOcr7E",
    duration: "2:58",
    transcript: `(Sarah is on camera. She seems more confident, speaking with the assurance of someone who has overcome a significant professional challenge.)

Okay, so my back-office was finally running smoothly. The automation was working, and it freed me up to think bigger. And a huge opportunity came along—a regional retail chain needed a comprehensive e-commerce solution. It was a massive project, the kind that could really put TechStart on the map. But a project that big requires a lot of upfront resources, so I knew I'd need to secure a business line of credit from the bank to manage the cash flow.

I walked into the bank feeling pretty confident. I had my clean, automated ledger. I knew my numbers. But the loan officer looked at my spreadsheet and basically said, 'This is nice, but where are your financial statements?'. At almost the same time, my mentor, Marcus, introduced me to a potential investor who was interested in my business, and he asked for the exact same thing: 'real financial statements'. I had all the data, but I didn't know how to speak their language.

That was a huge 'aha' moment for me. I realized that my internal records, as accurate as they were, were for *me*. But the rest of the business world—banks, investors, stakeholders—they need to see the official story of your company's health. And that story is told through three specific documents. I knew I was out of my depth, so I made one of the best decisions of my career so far: I hired a professional CPA who specializes in startups, Jennifer Kim, to guide me.

Jennifer described the three financial statements as a 'storyboard' for the business, and that just clicked for me. The driving question I had to answer was, how do my daily transactions tell a story of profit and health that an investor can trust?. Jennifer explained that the Income Statement tells the plot—are you profitable?. The Balance Sheet shows the setting—what you own versus what you owe. And the Statement of Cash Flows is the action—how money is actually moving in and out of the business.

With Jennifer's help, I created my first full set of professional financial statements. I got the line of credit, and we landed that big retail client. It was a major turning point. I didn't just feel like a freelancer anymore; I felt like a real CEO. And that confidence pushed me to be more proactive. But as I started dealing with more sophisticated clients, they started asking tougher questions. They didn't just want me to do the work; they wanted me to prove the value with data—to show them a real return on their investment. And that meant I had to learn how to analyze their data, not just my own.`
  }

  const comprehensionQuestions = [
    {
      id: 'q1',
      question: 'What major opportunity came Sarah\'s way that required her to seek a business line of credit?',
      answers: ['A regional retail chain needing a comprehensive e-commerce solution', 'A local bakery wanting a new website', 'A fitness studio requesting social media management', 'A dental office needing SEO work'],
      explanation: 'A regional retail chain needed a comprehensive e-commerce solution, which was a massive project that could put TechStart on the map but required more upfront resources than Sarah had on hand.'
    },
    {
      id: 'q2',
      question: 'What was the loan officer\'s response when Sarah showed her automated ledger spreadsheet?',
      answers: ['"This is nice, but where are your financial statements?"', '"Your numbers look great, here\'s your loan"', '"This spreadsheet is too complicated"', '"You need more business experience first"'],
      explanation: 'The loan officer acknowledged that Sarah\'s internal records were nice, but pointed out that she needed proper financial statements to meet banking requirements for a business line of credit.'
    },
    {
      id: 'q3',
      question: 'How did Jennifer Kim, the CPA, describe the three financial statements to Sarah?',
      answers: ['As a "storyboard" for the business', 'As three separate, unrelated reports', 'As complicated accounting requirements', 'As tools only CPAs can understand'],
      explanation: 'Jennifer described the three financial statements as a "storyboard" for the business, with the Income Statement as the plot, the Balance Sheet as the setting, and the Cash Flow Statement as the action—all working together to tell one coherent story.'
    }
  ]

  const unitConfig = {
    colorScheme: {
      primary: "purple",
      secondary: "purple-200",
      text: "purple-800",
      cardBg: "purple-50",
      cardBorder: "purple-200"
    },
    introText: {
      welcomeText: "With her back-office operations finally running smoothly, Sarah's confidence was at an all-time high. The automation you helped her build was working perfectly, and it gave her the time she needed to focus on growth. A huge opportunity suddenly came her way—a regional retail chain needed a massive e-commerce solution. This was the kind of project that could put TechStart Solutions on the map. But a project of that size required more resources than she had on hand. To manage it, she knew she'd need to secure a business line of credit from a bank.",
      contextText: 'Feeling prepared, Sarah walked into the bank with her clean, automated ledger from Unit 2. She knew her numbers inside and out. But after looking at her detailed spreadsheet, the loan officer said something that stopped her in her tracks: "This is nice, but where are your financial statements?". As if on cue, at almost the exact same time, her mentor introduced her to a potential investor who was interested in TechStart. His first question was the same: he wanted to see "real financial statements".'
    },
    reflectionText: 'This was a huge "aha" moment for Sarah. She realized that her internal records, as accurate as they were, were for her. The rest of the professional world needed to see the official story of her company\'s health, and that story is told through three specific documents. She knew she was out of her depth, so she hired a CPA named Jennifer Kim to guide her.',
    transitionText: "Before we start building Sarah's storyboard, we're going to do a little detective work. We'll look at how a massive company like Tesla tells its financial story by examining its official quarterly report. You'll see how the words in their report connect to the numbers on their statements. Then, we'll get to work turning the raw data from your Unit 1 venture into a compelling financial story of your own.",
    turnAndTalkPrompt: {
      description: "Think about a time when you had to explain something important to someone who needed information in a specific format (like a teacher, coach, or parent). Share with a partner:",
      questions: [
        "What was the situation and what information did you need to communicate?",
        "How did you have to adapt your explanation to meet their expectations?",
        "Why do you think different audiences need information presented differently?",
        "How does this connect to Sarah's challenge with banks and investors?"
      ]
    }
  }

  const additionalContent = (
    <div className="prose prose-lg max-w-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">The Day the Spreadsheet Wasn't Enough</h3>
      
      <p className="text-base leading-relaxed">
        Jennifer described the three financial statements as a <strong>"storyboard" for the business</strong>, and this idea immediately clicked for Sarah. This became the central challenge she had to solve: <strong>How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?</strong>
      </p>
      
      <p className="text-base leading-relaxed">
        Jennifer explained that this storyboard has three parts that work together to tell one coherent story:
      </p>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li><strong>The Income Statement:</strong> This tells the <em>plot</em> of the story. Is the business profitable?</li>
        <li><strong>The Balance Sheet:</strong> This shows the <em>setting</em>. What does the business own versus what does it owe?</li>
        <li><strong>The Statement of Cash Flows:</strong> This is the <em>action</em>. How is cash actually moving through the business?</li>
      </ul>
    </div>
  )

  return (
    <Lesson01Phase1
      lesson01Data={lesson01Data}
      unitData={unit03Data}
      lesson01Phases={lesson01Phases}
      videoData={videoData}
      comprehensionQuestions={comprehensionQuestions}
      unitConfig={unitConfig}
      additionalContent={additionalContent}
    />
  )
}
