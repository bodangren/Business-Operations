import { UnitIntroductionData } from "@/types/sections"

export const unit02IntroData: UnitIntroductionData = {
  unitNumber: "Unit 2",
  unitTitle: "Month-End Wizard",
  drivingQuestion: "What automation can cut our month‑end closing time from two days to two hours without sacrificing GAAP accuracy?",
  
  introVideo: {
    youtubeId: "dQw4w9WgXcQ",
    title: "Unit 2 Introduction: Automating Month-End Processes",
    duration: "4:15",
    description: "Learn how to transform time-consuming manual month-end processes into efficient automated systems using Excel macros and VBA.",
    transcript: `So, I had my smart ledger, and I was feeling pretty good. The business was growing. I even landed my first monthly retainer client, a local fitness studio, which was a big deal. It meant consistent revenue every month. But it also meant more transactions, more data entry, and more things to keep track of.

And that's when I hit the next wall. It happened at the end of the month. I sat down to do my first real 'month-end closing'—to reconcile my books with my bank account. It turned into a complete nightmare. I spent my entire weekend on it. My 'smart' ledger was still manual, and I found so many little errors—a typo here, a missed transaction there—and they threw all my numbers off. It was incredibly frustrating. I thought I had solved my bookkeeping problem, but I had just created a new one: a process that was eating up all of my time.

I was talking about it with my mentor, Marcus Rodriguez. I was just venting, really, about how I'd wasted a whole weekend. He was pretty direct. He told me my time was the most valuable asset in my business, and I was wasting it on tasks that a machine could do better. He pointed out that those little errors I found weren't so little; he said they could have had serious tax consequences down the road. He was the one who pushed me to stop thinking about just recording my finances and start thinking about automating them.

That's where the idea of the "Month-End Wizard" came from. The driving question for me became, how can I cut this process from two days down to two hours without sacrificing accuracy? I dove into learning how to use things like macros and more advanced formulas right there in my spreadsheet. The goal was to build a system that could do the heavy lifting for me—the routine checks, the calculations, the reconciliations. It’s all about making the system work for you, not the other way around.

And it worked. That weekend-long nightmare literally became a two-hour task. The feeling was just... empowering. All that time I got back, I could now spend on what actually grows the business—finding bigger clients and improving my services. But this new efficiency created a new kind of ambition. I started going after larger projects, but I quickly found out that serious people—like banks and potential investors—don't just want to hear that your books are accurate. They want to see them presented in a very specific, professional way. They want real financial statements. And learning how to create those... well, that was the next major hurdle.`
  },
  
  entryEvent: {
    title: "Entry Event: The Real Cost of Slow Closes",
    description: "Watch a CFO's vlog about the hidden costs of manual month-end processes, then experience the pain firsthand with our \"shoebox receipt\" sorting challenge.",
    activities: [
      "Watch CFO vlog clip on the real cost of slow month-end closes",
      "In-class \"shoebox receipt\" challenge: manually sort a pile of mock receipts and time yourselves",
      "Form teams and choose your automation focus area (accruals, deferrals, depreciation, or closing entries)",
      "Analyze timing data to understand the efficiency opportunity"
    ],
    resources: [
      "CFO vlog video link",
      "Receipt data packet for sorting challenge",
      "Stopwatch and timing sheets",
      "Month-end close timeline examples"
    ]
  },

  projectOverview: {
    scenario: "Your startup has grown and month-end closing now takes 2 full days of manual work. Investors are asking for faster, more accurate financial reporting. Build an automated Month-End Wizard that can cut closing time to under 2 hours.",
    teamStructure: "3-4 person teams with roles: Automation Expert, Tax/Accounting Specialist, UX Designer",
    deliverable: "Interactive Excel Month-End Wizard with UI buttons and automated processes + Innovation Fair demo",
    timeline: "2 weeks with live simulation testing and public Innovation Fair presentation"
  },

  learningObjectives: {
    content: [
      "Explain and record accruals and deferrals in accordance with GAAP",
      "Compute straight‑line (SLN) depreciation for fixed assets",
      "Prepare closing entries to zero out temporary accounts",
      "Understand month-end close processes and timing pressures"
    ],
    skills: [
      "Define and use named ranges for dynamic ledgers",
      "Record and edit macros with the macro recorder",
      "Write simple VBA procedures to insert adjusting entries (optional)",
      "Create user‑friendly buttons and form controls to trigger macros"
    ],
    deliverables: [
      "Interactive Excel Month-End Wizard with automation buttons",
      "Live demo showing time-to-close under 2 hours",
      "User documentation and error-checking routines",
      "Innovation Fair booth presentation with visitor feedback",
      "Post-fair improvement plan based on user testing"
    ]
  },

  nextSectionHref: "/units/unit02-month-end-wizard/concepts"
}