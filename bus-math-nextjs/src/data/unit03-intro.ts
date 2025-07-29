import { UnitIntroductionData } from "@/types/sections"

export const unit03IntroData: UnitIntroductionData = {
  unitNumber: "Unit 3", 
  unitTitle: "Three-Statement Storyboard",
  drivingQuestion: "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?",
  
  introVideo: {
    youtubeId: "dQw4w9WgXcQ",
    title: "Unit 3 Introduction: Building Financial Statements That Tell Your Story",
    duration: "4:28",
    description: "Sarah explains how individual transactions create the big picture financial narrative that banks and investors need to evaluate your business.",
    transcript: `Hi! Sarah again, and I need to share the moment everything clicked for me about financial statements.

    By month five, TechStart was doing really well. I had two retainer clients, bigger projects coming in, and was making around $4,000 per month. My smart ledger was tracking everything perfectly, and my month-end wizard was saving me tons of time. I felt like I had this accounting thing figured out.

    Then opportunity knocked. A regional retail chain wanted a comprehensive e-commerce solution worth $12,000 - by far my biggest project yet. But to handle something that large, I needed a business line of credit from the bank.

    The loan officer was friendly enough, but when she asked for my financial statements, I froze. I said, "I have all my transactions in Excel, perfectly organized!" She smiled and said, "That's great, but I need to see your Income Statement, Balance Sheet, and Cash Flow Statement."

    I had no idea what she was talking about. I mean, I knew those were things businesses had, but I thought they were for big corporations, not a one-person digital marketing agency working out of her apartment.

    That same week, Marcus introduced me to a potential angel investor who took one look at my ledger and said, "This is nice transaction tracking, but where's the story? How do I know if you're actually profitable? What's your cash situation? Are you solvent?"

    That's when I realized I had been collecting data but not telling the story. Every journal entry I made was like a sentence, but I wasn't putting those sentences together into paragraphs that explained what was really happening in my business.

    So I hired Jennifer Kim, a CPA who specializes in startups. She taught me how my daily transactions flow into three interconnected statements that tell the complete story of business performance. The Income Statement shows profitability, the Balance Sheet shows financial health, and the Cash Flow Statement shows where money actually moves.

    When I finally got my three-statement model working, it was like putting on glasses for the first time. I could see patterns I'd never noticed. I understood why some profitable months still felt cash-poor. I could answer investor questions with confidence.

    In this unit, you're going to build an integrated three-statement model that transforms your transaction data into a compelling financial narrative. You'll learn to speak the language that banks and investors understand.

    Trust me, once you can tell your financial story clearly, doors open that you didn't even know existed. Let's build your storyboard!`
  },
  
  entryEvent: {
    title: "Entry Event: Dissecting Tesla's Financial Story",
    description: "Analyze Tesla's latest 10-Q filing to understand how individual transactions create the big picture financial narrative that investors rely on for decision-making.",
    activities: [
      "Dissect Tesla's (or local firm's) latest 10-Q, mapping narrative threads to specific line items",
      "Receive raw Unit 1 journal entries and trial balance data as your starting point",
      "Form teams and assign specialized roles for the three-statement integration project",
      "Identify the story threads that connect daily transactions to investor presentations"
    ],
    resources: [
      "Tesla 10-Q excerpt with highlighted narrative elements",
      "Unit 1 journal entries and trial balance data",
      "Financial statement interconnection diagram",
      "Investor presentation examples"
    ]
  },

  projectOverview: {
    scenario: "Using your Unit 1 ledger data, create an integrated three-statement model that tells a compelling financial story. Present to a mock investor panel showing how your daily accounting flows into trustworthy profit, balance sheet, and cash flow narratives.",
    teamStructure: "3-4 person teams with roles: Financial Analyst, Dashboard Designer, Storytelling Lead, Quality Assurance",
    deliverable: "Investor one-pager + interactive Excel workbook with integrated statements and KPI dashboard",
    timeline: "2 weeks culminating in Demo Day presentation to mock investor panel (local CPAs and entrepreneurs)"
  },

  learningObjectives: {
    content: [
      "Construct an Income Statement from journal-entry data",
      "Link and reconcile Balance Sheet accounts, including Retained Earnings",
      "Prepare an Indirect Cash Flow Statement",
      "Interpret key ratios (Current Ratio, Return on Assets, etc.)",
      "Create compelling financial narratives for investors"
    ],
    skills: [
      "Cross-sheet linking with INDEX/MATCH and named ranges",
      "Building dynamic dashboards with charts and sparklines",
      "Creating interactive KPI dashboard slices",
      "Advanced conditional formatting for data visualization",
      "Professional financial presentation design"
    ],
    deliverables: [
      "Integrated three-statement Excel model with cross-sheet linking",
      "Interactive KPI dashboard with industry-relevant metrics",
      "Professional investor one-pager with key insights",
      "Demo Day presentation to mock investor panel",
      "Revised model incorporating investor feedback"
    ]
  },

  nextSectionHref: "/units/unit03-three-statement-storyboard/concepts"
}