import { UnitIntroductionData } from "@/types/sections"

export const unit01IntroData: UnitIntroductionData = {
  unitNumber: "Unit 1",
  unitTitle: "Smart Ledger Launch",
  drivingQuestion: "How can we design a self‑auditing ledger that would convince a potential angel investor we keep \"clean books\" from day 1?",
  
  introVideo: {
    youtubeId: "IN4MBaOdLRY",
    title: "Unit 1 Introduction: Building Smart Ledgers for Startups",
    duration: "2:52",
    description: "Welcome to Unit 1! This video introduces the challenge of creating professional bookkeeping systems that angel investors trust.",
    transcript: `When I first launched TechStart Solutions, the feeling was just… incredible. I remember landing my first few clients back-to-back. There was a local bakery who needed a new website—that was a $2,200 project. Then a pet groomer for a social media setup, which was about $650. And right after that, a dental office for SEO work for another $1,100. The money was actually coming in. I honestly thought, "Okay, this is it. I'm doing it."

But what nobody saw was the chaos behind the curtain. While I was so focused on delivering great work for them, my own business records... they were a disaster. I was tracking everything in notebooks. Seriously. Every invoice, every payment, every little software subscription. I was just scribbling it down, thinking I could keep it all straight in my head. I felt completely overwhelmed by just the most basic record-keeping.

The real wake-up call came when I started thinking about taxes. I had this moment of pure panic. I looked at this stack of notebooks and just thought, "How am I ever going to pull accurate numbers out of this? What's my actual profit? If an accountant asks me for a specific receipt, am I going to spend a week looking for it?" I realized my system wasn't just messy; it was a huge risk. It was totally unsustainable.

That's when I decided I needed to build what this course calls a "Smart Ledger." It wasn't just about making a list. It was about building a real system—something organized, something I could trust. The idea was to have "clean books" from day one. I learned pretty quickly that you don't do this just for your accountant or for some future investor. You do it for yourself, so you can actually understand what's happening in your own company and make decisions based on facts, not just gut feelings.

Once I built that first proper ledger, it was like a weight was lifted. I wasn't overwhelmed anymore. I had clarity. I could see my actual financial health in real time, and that gave me so much confidence. But, of course, solving one problem just shows you the next one. My new, organized system made it painfully obvious just how much time I was spending on manual data entry. Every single transaction still had to be typed in by hand. And that new challenge—all that wasted time—is what pushed me to figure out automation, which I think is what you're covering next.`
  },
  
  entryEvent: {
    title: "Entry Event: Startup Founder's Challenge",
    description: "Join a live Zoom Q&A with a local startup founder who will share the real challenges of early bookkeeping and provide your team with actual transaction data to work with.",
    activities: [
      "Case study video of a start‑up founder about early bookkeeping challenges",
      "Founder shares three anonymized CSV transaction dumps from real startups",
      "Form teams and select a start‑up venture (food truck, e‑commerce, tutoring) or pitch your own",
      "Begin exploring the transaction data to understand the scope of your ledger project"
    ],
    resources: [
      "Transaction CSVs from real startups",
      "\"Choosing Your Venture\" handout",
      "Founder contact information for follow-up questions"
    ]
  },

  projectOverview: {
    scenario: "Your team represents a startup seeking angel investment. Investors will scrutinize your financial controls before writing a check. You must build a self-auditing ledger system that demonstrates you can maintain \"clean books\" from day one.",
    teamStructure: "3-4 person teams with specialized roles: Financial Modeler, UX/Documentation Lead, Data Auditor",
    deliverable: "4-minute investor pitch + live Excel workbook demo showing self-auditing features",
    timeline: "2 weeks (10 class days) with 3 major milestones and public presentation to real investors"
  },

  learningObjectives: {
    content: [
      "Apply the accounting equation (Assets = Liabilities + Equity)",
      "Record debits and credits for common transactions",
      "Generate and interpret a trial balance",
      "Understand double-entry bookkeeping principles",
      "Create professional financial documentation"
    ],
    skills: [
      "Create Excel Tables and structured references",
      "Use SUMIF to aggregate debits/credits",
      "Build conditional‑format rules (\"red flags\")",
      "Implement basic error‑check formulas",
      "Professional spreadsheet formatting and documentation"
    ],
    deliverables: [
      "Complete Smart Ledger Excel workbook with real transaction data",
      "4-minute investor pitch + live demo to angel investor panel",
      "Self-auditing error detection system with visual indicators",
      "Professional documentation and user guide",
      "Trial balance with automated validation (100% accuracy required)"
    ]
  },

  nextSectionHref: "/units/unit01-smart-ledger/concepts"
}