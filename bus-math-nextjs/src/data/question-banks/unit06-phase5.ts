export type Unit06LessonId =
  | "lesson01"
  | "lesson02"
  | "lesson03"
  | "lesson04"
  | "lesson05"
  | "lesson06"
  | "lesson07";

export interface Unit06Phase5Question {
  id: string;
  lessonId: Unit06LessonId;
  lessonTitle: string;
  prompt: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
  objectiveTags: string[];
}

export interface Unit06Phase5Filter {
  lessonIds?: Unit06LessonId[];
  tags?: string[];
}

export interface ComprehensionCheckItem {
  id: string;
  question: string;
  answers: string[];
  explanation: string;
}

const lesson01Questions: Unit06Phase5Question[] = [
  {
    id: "lesson01-q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "Why does Sarah remove extra spaces and stray characters as soon as data lands in Power Query?",
    correctAnswer: "Hidden spaces make values look different, break lookups, and throw off KPI calculations.",
    distractors: [
      "Investors dislike seeing empty cells when they skim a worksheet.",
      "Shortcut keys in Power Query do not work when a table contains blank cells.",
      "Extra spaces take up too much storage when Sarah exports the workbook."
    ],
    explanation:
      "Two records that look identical to a human can be treated as different if a space or stray character is hiding. Cleaning immediately keeps lookups, joins, and pivot tables reliable.",
    objectiveTags: ["power-query", "data-cleaning", "investor-readiness"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "Power Query shows the same coffee drink spelled three different ways. What is the correct response?",
    correctAnswer: "Standardize the values so every record uses the agreed business spelling before loading the table.",
    distractors: [
      "Delete the duplicate rows so the table keeps moving quickly.",
      "Highlight the cells in yellow and fix them later in Excel.",
      "Export the raw file to Word to see which spelling looks better."
    ],
    explanation:
      "Standard spelling keeps categories aligned and prevents miscounts. Sarah documents the change in the Applied Steps pane so anyone reviewing understands the clean-up move.",
    objectiveTags: ["power-query", "data-quality", "standardization"]
  },
  {
    id: "lesson01-q3",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "Why does Sarah convert imported columns to the correct data types before closing and loading?",
    correctAnswer: "Accurate data types let Excel sort, filter, and calculate without weird errors or text-based math.",
    distractors: [
      "Changing data types makes the worksheet colors update automatically.",
      "Typing by hand in Excel after the load is faster than adjusting types in Power Query.",
      "Investors require Sarah to show the data type menu during meetings."
    ],
    explanation:
      "Marking money as Currency, dates as Date, and quantities as Whole Number keeps every downstream formula correct. It also prevents Power Query from loading text that should be numbers.",
    objectiveTags: ["power-query", "data-types", "data-integrity"]
  },
  {
    id: "lesson01-q4",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "Sarah merged three supplier CSV files in Power Query. What step proves to investors that nothing was lost?",
    correctAnswer: "Document the append step and show a validation column that counts records before and after the merge.",
    distractors: [
      "Email the raw CSV files to investors and ask them to trust the merge.",
      "Rename all worksheets using investor initials for extra transparency.",
      "Skip validation because append steps are always perfect in Power Query."
    ],
    explanation:
      "Professional analysts keep a simple check that confirms the merged table has the expected number of rows. Documentation inside Power Query shows the process is repeatable and auditable.",
    objectiveTags: ["power-query", "data-validation", "investor-readiness"]
  },
  {
    id: "lesson01-q5",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "A new competitor file arrives each Monday. What keeps the dashboard current with almost zero manual work?",
    correctAnswer: "Store the file in the same folder, refresh the query, and rely on documented Applied Steps to run automatically.",
    distractors: [
      "Copy and paste the new rows into Excel, then rebuild every pivot table by hand.",
      "Rename the query every week so Sarah can tell which refresh happened when.",
      "Export the model to PDF so investors see a locked version instead of live data."
    ],
    explanation:
      "Refreshing a well-built query pulls new files, cleans them, and updates every connected visual. That reliability is why investors trust Sarah's system.",
    objectiveTags: ["power-query", "automation", "refresh-process"]
  },
  {
    id: "lesson01-q6",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "Why does Sarah load the cleaned table into Excel as a Table object instead of a static range?",
    correctAnswer: "Tables expand automatically, keep filters active, and feed structured references to formulas and charts.",
    distractors: [
      "Tables hide the data so no one can change it by accident.",
      "Static ranges calculate faster when Sarah opens the workbook on a laptop.",
      "Investors refuse to review models that use normal cell references."
    ],
    explanation:
      "Excel Tables pair perfectly with Power Query because they refresh smoothly and keep every formula and chart pointing at the right rows, even as records grow.",
    objectiveTags: ["excel-tables", "structured-references", "data-integration"]
  },
  {
    id: "lesson01-q7",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "Sarah builds a query to remove duplicate café names. Which approach keeps the originals for auditing?",
    correctAnswer: "Group the duplicates in Power Query, keep the first record, and add a flag column that marks which rows were removed.",
    distractors: [
      "Delete duplicates directly in Excel so nobody can see the old entries.",
      "Copy the sheet and store duplicate rows on a second tab with no labels.",
      "Print the list of duplicates and file it in a binder for future reference."
    ],
    explanation:
      "A flag column or duplicate summary keeps a clear record of what changed. Investors can see the logic and trust that removals were thoughtful, not accidental.",
    objectiveTags: ["power-query", "data-cleaning", "audit-trail"]
  },
  {
    id: "lesson01-q8",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "During a live demo, a data source fails to connect. How should Sarah respond?",
    correctAnswer: "Show the query error, explain the cause, and walk through the retry steps so the audience trusts the process.",
    distractors: [
      "Close Excel and reopen it, hoping the error message disappears.",
      "Blame the internet connection and move on without addressing the issue.",
      "Hide the query pane so nobody notices the refresh failure."
    ],
    explanation:
      "Professional analysts acknowledge issues and demonstrate control. Explaining the fix maintains credibility even when a refresh fails.",
    objectiveTags: ["investor-readiness", "error-handling", "data-refresh"]
  },
  {
    id: "lesson01-q9",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "How does Sarah prove that imported competitor prices tie back to original CSV files?",
    correctAnswer: "Include a SourceFile column in the query so every row lists the file name it came from.",
    distractors: [
      "Email investors a screenshot of the folder path every Friday.",
      "Rename the worksheet after the restaurant that paid the highest price.",
      "Remove file references to keep the table simple and easier to read."
    ],
    explanation:
      "Source columns build trust by showing exactly where each record originated. Auditors can trace the data without guesswork.",
    objectiveTags: ["power-query", "lineage", "transparency"]
  },
  {
    id: "lesson01-q10",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Competitor Data Import",
    prompt: "After the refresh, Sarah spots a new menu item category that does not exist in her reporting. What is the smart next move?",
    correctAnswer: "Log the issue, coordinate with the team to add the category, and update the transformation steps so the model stays accurate.",
    distractors: [
      "Delete all rows that mention the new category so the chart still matches last week's output.",
      "Ignore the category until investors specifically request an explanation.",
      "Copy the rows into a hidden sheet and hope nobody asks about them."
    ],
    explanation:
      "Spotting and resolving mismatched categories quickly keeps the dashboard reliable and shows Sarah safeguards the integrity of the model.",
    objectiveTags: ["data-governance", "data-quality", "team-communication"]
  }
];

const lesson02Questions: Unit06Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "TechStart's variable cost for a web project is $880. Sarah charges $1,200. What is her markup percentage?",
    correctAnswer: "36.4%",
    distractors: ["26.7%", "40.0%", "73.3%"],
    explanation:
      "Markup = (Price − Cost) ÷ Cost = ($1,200 − $880) ÷ $880 = $320 ÷ $880 ≈ 36.4%. The denominator is cost, so markup always shows a higher percentage than margin for the same $320 profit.",
    objectiveTags: ["markup", "pricing-basics", "calculations"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Using the same TechStart project ($880 cost, $1,200 price), what is the gross margin percentage?",
    correctAnswer: "26.7%",
    distractors: ["36.4%", "73.3%", "40.0%"],
    explanation:
      "Margin = (Price − Cost) ÷ Price = ($1,200 − $880) ÷ $1,200 = $320 ÷ $1,200 ≈ 26.7%. The denominator shifts to revenue, which is why margin is always lower than markup for the same profit.",
    objectiveTags: ["margin", "pricing-basics", "calculations"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Sarah wants a 40% gross margin on projects that cost $880 to deliver. What price must she charge?",
    correctAnswer: "$1,467",
    distractors: ["$1,232", "$1,200", "$1,320"],
    explanation:
      "Price = Cost ÷ (1 − Margin) = $880 ÷ 0.60 ≈ $1,467. A common mistake is adding 40% of cost to get $1,232 — but that is a 40% markup, not a 40% margin. The two formulas give very different prices.",
    objectiveTags: ["margin", "pricing", "calculations"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "TechStart has $8,100 in monthly fixed costs, $880 variable cost per project, and charges $1,200. How many projects per month to break even?",
    correctAnswer: "26 projects",
    distractors: ["7 projects", "10 projects", "33 projects"],
    explanation:
      "Contribution margin per project = $1,200 − $880 = $320. Break-even = ⌈$8,100 ÷ $320⌉ = ⌈25.3⌉ = 26 projects. At 25 projects, Sarah would still lose about $100 that month.",
    objectiveTags: ["cvp", "break-even", "calculations"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Alex asks for a $600/month raise, raising TechStart's fixed costs from $8,100 to $8,700. How many additional projects per month does Sarah now need to break even?",
    correctAnswer: "2 more projects",
    distractors: [
      "1 more project",
      "3 more projects",
      "No change — fixed costs don't affect break-even"
    ],
    explanation:
      "Old break-even: ⌈$8,100 ÷ $320⌉ = 26. New break-even: ⌈$8,700 ÷ $320⌉ = 28. Sarah needs 2 extra projects each month to absorb Alex's raise — about one extra small project per two weeks.",
    objectiveTags: ["cvp", "break-even", "cost-structure"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "TechStart's break-even is 26 projects per month. Sarah currently completes 25. What does her income statement look like?",
    correctAnswer: "She's losing approximately $100 per month — just below break-even",
    distractors: [
      "She has a 4% margin of safety above break-even",
      "She's exactly at break-even with zero profit",
      "She's profitable because 25 is close to 26"
    ],
    explanation:
      "Revenue = 25 × $1,200 = $30,000. Total costs = $8,100 + 25 × $880 = $30,100. Profit = −$100. Being one project short of break-even is still a loss — there is no cushion at all.",
    objectiveTags: ["cvp", "margin-of-safety", "analysis"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Sarah wants $5,000 monthly profit and currently completes 25 projects per month. If volume is fixed, what price must she charge?",
    correctAnswer: "$1,404",
    distractors: ["$1,200", "$1,340", "$1,520"],
    explanation:
      "Set profit = 25P − $8,100 − (25 × $880) = $5,000. So 25P = $5,000 + $8,100 + $22,000 = $35,100. Price = $35,100 ÷ 25 = $1,404. This is exactly what the Goal Seek tab calculates automatically.",
    objectiveTags: ["goal-seek", "pricing", "calculations"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "TechStart's contribution margin per project is $320 and the project price is $1,200. What is the contribution margin ratio, and what does it mean?",
    correctAnswer: "26.7% — Sarah keeps $0.27 of every revenue dollar after paying variable costs",
    distractors: [
      "36.4% — Sarah keeps $0.36 of every revenue dollar after paying variable costs",
      "73.3% — that is the share of revenue that goes to variable costs",
      "32.0% — that is the ratio of contribution margin to fixed costs"
    ],
    explanation:
      "CMR = Contribution Margin ÷ Price = $320 ÷ $1,200 = 26.7%. For every dollar Sarah collects, 26.7 cents remain after variable costs. Those cents must first cover fixed costs, and any amount beyond break-even becomes profit.",
    objectiveTags: ["cvp", "contribution-margin", "calculations"]
  },
  {
    id: "lesson02-q9",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Sarah tells a client her markup on an $880 project is 36.4%. The client's financial advisor says her margin is only 26.7%. Sarah panics. Who is right?",
    correctAnswer: "Both are correct — they describe the same $320 profit from different denominators (cost vs. revenue)",
    distractors: [
      "Sarah is wrong — professionals only express profitability as margin, never markup",
      "The advisor is wrong — markup and margin always produce the same percentage",
      "Neither is right — you need the selling price to calculate either number"
    ],
    explanation:
      "Markup (36.4%) divides $320 profit by the $880 cost base. Margin (26.7%) divides the same $320 by the $1,200 revenue base. Same dollars, different story. Confusing them when setting prices — not just describing them — is where businesses get into trouble.",
    objectiveTags: ["markup", "margin", "pricing-insight"]
  },
  {
    id: "lesson02-q10",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "A competitor offers the same services at $900 per project. An advisor suggests Sarah match the price to win more clients. Given TechStart's $880 variable cost, what does the data show?",
    correctAnswer: "Break-even would jump to 405 projects per month — completely unachievable for a small agency",
    distractors: [
      "Break-even would only increase by 2–3 projects, so matching is reasonable",
      "Lower prices always attract more volume, so revenue would still cover costs",
      "The break-even point would fall because more clients would hire Sarah"
    ],
    explanation:
      "At $900: contribution margin = $900 − $880 = $20 per project. Break-even = $8,100 ÷ $20 = 405 projects per month. TechStart would need to grow 16× its current volume just to break even — the competitor's price would bankrupt a business with TechStart's cost structure.",
    objectiveTags: ["cvp", "pricing-strategy", "competitive-analysis"]
  }
];

const lesson03Questions: Unit06Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "If Sarah charges $1,350 and variable cost is $880, what is contribution margin per project?",
    correctAnswer: "$470",
    distractors: ["$320", "$620", "$1,350"],
    explanation:
      "Contribution margin per project = Price − Variable Cost = $1,350 − $880 = $470.",
    objectiveTags: ["cvp", "contribution-margin", "calculations"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "At a $1,500 price with $880 variable cost, what is the contribution margin ratio?",
    correctAnswer: "41.3%",
    distractors: ["58.7%", "32.0%", "62.0%"],
    explanation:
      "CM ratio = ($1,500 − $880) ÷ $1,500 = $620 ÷ $1,500 = 41.3%.",
    objectiveTags: ["cvp", "contribution-margin", "calculations"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "With fixed costs of $8,100 and CM of $320 at a $1,200 price, what is break-even volume?",
    correctAnswer: "26 projects",
    distractors: ["18 projects", "14 projects", "24 projects"],
    explanation:
      "Break-even = Ceiling($8,100 ÷ $320) = Ceiling(25.3) = 26 projects.",
    objectiveTags: ["cvp", "break-even", "calculations"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "Which option gives the easiest break-even target under the same $8,100 fixed costs?",
    correctAnswer: "$1,500 price option",
    distractors: ["$1,200 price option", "$1,350 price option", "All three are equal"],
    explanation:
      "Higher CM lowers break-even. At $1,500 price, CM is $620 and break-even is only 14 projects, the lowest of the three.",
    objectiveTags: ["cvp", "break-even", "pricing-strategy"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "Sarah can complete at most 24 projects per month. Which price option is not feasible?",
    correctAnswer: "$1,200 option, because break-even is 26 projects",
    distractors: [
      "$1,350 option, because break-even is 18 projects",
      "$1,500 option, because break-even is 14 projects",
      "None of them, because all are below break-even"
    ],
    explanation:
      "A 24-project capacity cannot support a 26-project break-even requirement, so the $1,200 option is not feasible.",
    objectiveTags: ["cvp", "feasibility", "capacity"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "At a $1,350 price and 24 projects, what is Sarah's monthly profit?",
    correctAnswer: "$3,180",
    distractors: [
      "$11,280",
      "$8,100",
      "$470"
    ],
    explanation:
      "Profit = (CM × Units) − Fixed Costs = ($470 × 24) − $8,100 = $3,180.",
    objectiveTags: ["cvp", "profit-analysis", "calculations"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt:
      "Sarah calculates that hitting $12,000 profit at the $1,350 price requires 43 projects. TechStart's capacity is 24 projects. What is the correct decision?",
    correctAnswer:
      "The $1,350 option cannot reach $12,000 profit at current capacity — Sarah must raise her price or lower her profit target.",
    distractors: [
      "Complete 43 projects by working extra hours this month.",
      "The $1,350 option is still the best choice because it has the highest client demand.",
      "Reduce fixed costs to $4,700 so break-even drops to 10 projects."
    ],
    explanation:
      "Required units (43) far exceeds TechStart's 24-project ceiling. The reverse-solve result is a decision signal: at $1,350, the $12,000 target is operationally impossible. Sarah must either choose a higher price (e.g., $1,500) or set a realistic target within capacity.",
    objectiveTags: ["cvp", "target-profit", "reverse-solving", "feasibility", "decision-making"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "If Sarah is capped at 24 projects and wants $12,000 profit, what price per project is required?",
    correctAnswer: "About $1,718",
    distractors: [
      "About $1,350",
      "About $1,500",
      "About $1,200"
    ],
    explanation:
      "Required price = Variable Cost + (Fixed Costs + Target Profit) ÷ Units = $880 + ($20,100 ÷ 24) = $1,717.50.",
    objectiveTags: ["cvp", "target-profit", "reverse-solving"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "Why is a capacity reality check required after break-even calculations?",
    correctAnswer: "A strategy can look profitable in theory but still be impossible to deliver operationally.",
    distractors: [
      "Capacity checks replace contribution margin calculations.",
      "Capacity only matters when fixed costs are zero.",
      "If break-even is known, capacity is irrelevant."
    ],
    explanation:
      "Investor-ready decisions must be mathematically correct and operationally realistic. Capacity is that reality filter.",
    objectiveTags: ["cvp", "feasibility", "strategy"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt:
      "TechStart can only complete 20 projects next month due to Alex's vacation. An investor asks which pricing strategy Sarah should use. What is the BEST answer?",
    correctAnswer:
      "$1,500 Premium Plus — it breaks even at 14 projects, giving a 6-project safety cushion and $4,300 profit at 20 projects.",
    distractors: [
      "$1,350 Balanced Core — it's the safest mid-range option and produces positive profit.",
      "$1,200 Value Launch — lower prices attract more clients and cover the shortfall.",
      "Any option works because 20 projects is above break-even for all three strategies."
    ],
    explanation:
      "At 20 projects: $1,200 loses money (break-even needs 26 projects); $1,350 earns $1,300 profit (break-even = 18, just covered); $1,500 earns $4,300 profit (break-even = 14, strong cushion). When capacity drops, the highest-CM option provides the most resilience — a core CVP insight for investor conversations.",
    objectiveTags: ["cvp", "feasibility", "decision-making", "capacity", "pricing-strategy"]
  }
];

const lesson04Questions: Unit06Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Sarah currently makes $3,180 profit at 24 projects ($1,350 price). Michael Chen asks what price she needs to hit $10,000 profit. What is the correct Goal Seek setup?",
    correctAnswer: "Set Cell = Profit, To Value = 10000, By Changing Cell = Price.",
    distractors: [
      "Set Cell = Price, To Value = 10000, By Changing Cell = Profit.",
      "Set Cell = Units, To Value = 24, By Changing Cell = Price.",
      "Set Cell = Fixed Costs, To Value = 10000, By Changing Cell = Profit."
    ],
    explanation:
      "Profit is the target formula cell (Set Cell). The desired amount is $10,000 (To Value). We want Excel to find the Price (By Changing Cell).",
    objectiveTags: ["goal-seek", "target-profit", "mechanics"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Goal Seek tells Sarah she needs 39 projects to hit her profit goal. She only has capacity for 24. What is the professional interpretation of this result?",
    correctAnswer: "The strategy is mathematically correct but operationally impossible without more hiring.",
    distractors: [
      "The Goal Seek tool is broken and needs to be refreshed.",
      "Sarah should work 24/7 until all 39 projects are done.",
      "She should ignore the capacity limit and tell investors she'll hit the target."
    ],
    explanation:
      "Goal Seek finds the math solution, but the entrepreneur must apply the reality filter. If the required volume exceeds capacity, the strategy is a 'no-go'.",
    objectiveTags: ["goal-seek", "feasibility", "decision-making"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Why must the 'By Changing Cell' in Goal Seek contain a value, not a formula?",
    correctAnswer: "Excel must be able to overwrite the cell with new numbers to see how the target formula responds.",
    distractors: [
      "Formulas are too complex for Goal Seek to understand.",
      "By Changing Cells are reserved for text labels only.",
      "Using a formula in a changing cell would crash the entire workbook."
    ],
    explanation:
      "Goal Seek works by 'plugging in' different numbers. If the cell contains a formula, Excel cannot overwrite it with trial values.",
    objectiveTags: ["goal-seek", "excel-tools", "mechanics"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "If Sarah wants her break-even point to be exactly 15 projects, which parameter should she use for 'To Value'?",
    correctAnswer: "15",
    distractors: ["0", "$8,100", "$10,000"],
    explanation:
      "The 'To Value' is always the specific target number you want your 'Set Cell' (the break-even formula) to reach.",
    objectiveTags: ["goal-seek", "break-even", "mechanics"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "In a Town Hall debate, a competitor claims Sarah can't be profitable at low volume. How does Goal Seek help her defend her business?",
    correctAnswer: "She can instantly show the exact price or cost reduction needed to be profitable at any volume level.",
    distractors: [
      "She can use Goal Seek to hide her actual expenses from the audience.",
      "Goal Seek can automatically change the competitor's prices in their models.",
      "It creates a distraction so she doesn't have to answer the question."
    ],
    explanation:
      "Goal Seek provides the data-driven proof that a path to profitability exists, allowing Sarah to respond with precision and confidence.",
    objectiveTags: ["investor-readiness", "communication", "strategy"]
  },
  {
    id: "lesson04-q6",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Sarah's fixed costs are $8,100. She wants to know the maximum variable cost per project that allows her to break even at just 10 projects (at a $1,350 price). What is her 'Set Cell'?",
    correctAnswer: "The Profit formula cell (which should be set to 0).",
    distractors: [
      "The Fixed Costs cell ($8,100).",
      "The Volume cell (10 projects).",
      "The Variable Cost cell."
    ],
    explanation:
      "Break-even is defined as Profit = 0. Therefore, the profit formula cell is the 'Set Cell' we want to reach 0.",
    objectiveTags: ["goal-seek", "break-even", "mechanics"]
  },
  {
    id: "lesson04-q7",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "What is the primary risk of relying ONLY on Goal Seek for pricing decisions?",
    correctAnswer: "It might suggest a price that the market is unwilling to pay.",
    distractors: [
      "It might calculate the math incorrectly.",
      "It takes too long to run on a standard laptop.",
      "It requires a paid subscription to use in Excel."
    ],
    explanation:
      "Goal Seek finds a mathematical solution. The business owner must decide if that solution is competitive and realistic in the marketplace.",
    objectiveTags: ["strategy", "risk-assessment", "decision-making"]
  },
  {
    id: "lesson04-q8",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Sarah finds that to hit her goal, she needs to reduce fixed costs by $2,500. What is the 'By Changing Cell' in this Goal Seek setup?",
    correctAnswer: "The Fixed Costs input cell.",
    distractors: [
      "The Total Profit cell.",
      "The $2,500 target cell.",
      "The Revenue formula cell."
    ],
    explanation:
      "We want to know the new fixed cost level, so that input cell is what Goal Seek must change.",
    objectiveTags: ["goal-seek", "cost-optimization", "mechanics"]
  },
  {
    id: "lesson04-q9",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Which Excel menu contains the Goal Seek tool?",
    correctAnswer: "Data > What-If Analysis",
    distractors: [
      "Home > Formulas",
      "Insert > Analysis Tools",
      "Review > Calculation"
    ],
    explanation:
      "Goal Seek is part of the 'What-If Analysis' toolkit located on the Data tab.",
    objectiveTags: ["excel-tools", "mechanics"]
  },
  {
    id: "lesson04-q10",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "If Goal Seek fails to find a solution, what is the most likely reason?",
    correctAnswer: "The 'By Changing Cell' is not connected to the 'Set Cell' by any formulas.",
    distractors: [
      "The internet connection is too slow for the solver.",
      "Sarah didn't use enough colors in her worksheet.",
      "The target profit is higher than $1,000,000."
    ],
    explanation:
      "Goal Seek works by changing an input and watching the output. If there is no formula link between them, changing the input does nothing to the output.",
    objectiveTags: ["goal-seek", "troubleshooting", "modeling"]
  }
];

const lesson05Questions: Unit06Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Sarah builds a 2-Variable Data Table. She puts Price in the column and Volume in the row. What must she select for the 'Row Input Cell'?",
    correctAnswer: "The Volume input cell in her model.",
    distractors: [
      "The Price input cell in her model.",
      "The Total Profit formula cell.",
      "The top-left corner of the grid."
    ],
    explanation:
      "The 'Row Input Cell' tells Excel which cell in the model should be replaced by the values listed in the table's first row (Volume).",
    objectiveTags: ["data-tables", "mechanics"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "A 2-Variable table shows identical results in every single cell. What is the most likely error Sarah made?",
    correctAnswer: "She didn't link the top-left corner of the grid to the result formula.",
    distractors: [
      "She used too many rows in the table.",
      "She forgot to apply Conditional Formatting.",
      "She included fixed costs in the table range."
    ],
    explanation:
      "The top-left corner of a 2-variable table must be a direct reference (e.g., =B12) to the formula you want Excel to calculate.",
    objectiveTags: ["data-tables", "troubleshooting"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Looking at her completed 'Pricing Map', Sarah sees that at a $1,200 price, her profit cell is red at 10, 15, and 20 units. What does this tell her?",
    correctAnswer: "A $1,200 price is too low to break even at current volume levels.",
    distractors: [
      "The Excel formula is broken.",
      "The competitor's price is higher than $1,200.",
      "She should immediately fire Alex to reduce costs."
    ],
    explanation:
      "The red cells represent negative profit. If the 'map' is red, the business is losing money in those specific scenarios.",
    objectiveTags: ["data-tables", "analysis", "decision-making"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Why is a Data Table considered 'live' automation?",
    correctAnswer: "If Sarah changes her fixed costs, every single value in the Data Table updates instantly.",
    distractors: [
      "It plays a sound whenever a target is reached.",
      "It automatically sends an email to investors.",
      "It requires a live internet connection to function."
    ],
    explanation:
      "Data Tables are dynamic. Because they are linked to the underlying model, any change to fixed or variable costs ripples through the entire matrix.",
    objectiveTags: ["automation", "mechanics"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "An investor asks Sarah, 'How sensitive is your profit to a 10% drop in volume?' Which tool provides the best visual proof?",
    correctAnswer: "A 1-Variable Data Table showing profit across a range of volumes.",
    distractors: [
      "A Goal Seek calculation for one volume level.",
      "A pie chart of last month's expenses.",
      "A written list of customer testimonials."
    ],
    explanation:
      "A Data Table (sensitivity analysis) shows the 'sensitivity' by displaying exactly how profit drops as volume decreases across multiple levels.",
    objectiveTags: ["sensitivity-analysis", "investor-readiness"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Sarah wraps her profit formula in =IFERROR(formula, 'Check Inputs'). Why is this a professional standard?",
    correctAnswer: "It prevents ugly error codes like #DIV/0! from appearing during an investor presentation.",
    distractors: [
      "It makes the spreadsheet calculate 2x faster.",
      "It automatically corrects mathematical mistakes.",
      "It hides the fact that Sarah hasn't finished the workbook."
    ],
    explanation:
      "Error handling keeps the model polished and user-friendly, ensuring that stakeholders see clear messages instead of confusing technical errors.",
    objectiveTags: ["professionalism", "error-handling"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "In a Town Hall debate, Sarah shows her 'Pricing Map' with a clear Green Zone. What does this demonstrate to the audience?",
    correctAnswer: "That she has a wide range of feasible prices that remain profitable, making her business resilient.",
    distractors: [
      "That she is the best at picking colors in Excel.",
      "That she doesn't care about making a profit.",
      "That she is planning to double her prices next month."
    ],
    explanation:
      "A large 'Green Zone' (Profit) shows resilience—the business can handle fluctuations in volume or price and still survive.",
    objectiveTags: ["strategy", "communication", "resilience"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "If Sarah wants to see the impact of Price, Volume, AND Fixed Costs all at once, can she use a single Data Table?",
    correctAnswer: "No, Data Tables are limited to a maximum of 2 variables.",
    distractors: [
      "Yes, she can use a 3-Variable Data Table.",
      "Yes, but only if she uses the 1-Variable tool three times.",
      "No, Excel doesn't allow tracking Fixed Costs in tables."
    ],
    explanation:
      "Data Tables have a hard limit of two variables (Row and Column). For three or more variables, analysts use 'Scenario Manager' or multiple tables.",
    objectiveTags: ["data-tables", "mechanics", "limitations"]
  },
  {
    id: "lesson05-q9",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "What is the primary benefit of using 'Structured References' (like Table[Price]) in CVP automation?",
    correctAnswer: "Formulas become easier to read and automatically expand as new data is added.",
    distractors: [
      "They allow Sarah to use Goal Seek without opening the menu.",
      "They change the font of the workbook to look more professional.",
      "They hide the formulas from people who don't have a password."
    ],
    explanation:
      "Structured references act like 'natural language' for Excel, making the math easier for investors to follow and audit.",
    objectiveTags: ["structured-references", "professionalism"]
  },
  {
    id: "lesson05-q10",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "How does a 'Pricing Map' help Sarah handle a competitor's price drop?",
    correctAnswer: "She can instantly see the 'break-even volume' for the competitor's price and decide if it's realistic.",
    distractors: [
      "It automatically sends a legal cease-and-desist to the competitor.",
      "It tells her exactly which customers to call first.",
      "It lowers her fixed costs automatically to match the competition."
    ],
    explanation:
      "The map shows the trade-off. If price drops, she can see exactly how much volume she needs to maintain her desired profit.",
    objectiveTags: ["strategy", "competitive-analysis"]
  }
];

const lesson06Questions: Unit06Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Sarah wants her dashboard charts to update instantly when she switches scenarios. What is the most professional way to set this up?",
    correctAnswer: "Link the charts to an XLOOKUP summary area, not the raw data tables.",
    distractors: [
      "Re-build the charts every time she switches scenarios.",
      "Copy and paste the new numbers into the chart range.",
      "Hide all the rows that she doesn't want to see in the chart."
    ],
    explanation:
      "By linking charts to a dynamic XLOOKUP summary, the visuals become 'live' steering wheels that respond to the scenario toggle.",
    objectiveTags: ["dashboard-design", "integration"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "In the formula =XLOOKUP($B$4, A11:A14, D11:D14), what does cell B4 represent?",
    correctAnswer: "The 'Steering Wheel' toggle where Sarah selects the scenario name.",
    distractors: [
      "The result of the calculation.",
      "The entire data table range.",
      "The name of the investor she is presenting to."
    ],
    explanation:
      "Cell B4 is the Lookup_Value. It is the key that tells Excel which specific scenario to search for in the summary table.",
    objectiveTags: ["xlookup", "mechanics"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Why should Sarah use Data Validation (Dropdowns) for her scenario toggle cell?",
    correctAnswer: "To prevent typing errors that would break the XLOOKUP connection.",
    distractors: [
      "To make the spreadsheet use less memory.",
      "To prevent investors from seeing the hidden formulas.",
      "To automatically calculate the fixed costs."
    ],
    explanation:
      "XLOOKUP requires an exact match. Dropdowns ensure the toggle always matches the names in the data table engine.",
    objectiveTags: ["data-validation", "professionalism"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "An investor asks, 'What happens if we lose 20% of our customers?' How does the Integration Dashboard help Sarah answer?",
    correctAnswer: "She switches the toggle to 'Downside Case' and reads the updated Profit KPI instantly.",
    distractors: [
      "She opens her Lesson 1 notes to find the customer list.",
      "She runs a Goal Seek to find the break-even point.",
      "She explains that 20% is too high a number to calculate."
    ],
    explanation:
      "A dashboard allows for instant response. By having pre-calculated scenarios, Sarah shows she has already planned for risks.",
    objectiveTags: ["investor-readiness", "strategy"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "If Sarah's dashboard shows a #N/A error after she selects a scenario, what is the most likely problem?",
    correctAnswer: "The name in the toggle does not match any name in the 'Lookup_Array' exactly.",
    distractors: [
      "The computer has run out of battery.",
      "The profit formula is too complex for XLOOKUP.",
      "The chart has too many colors."
    ],
    explanation:
      "#N/A means 'Not Available.' It usually happens when a lookup tool can't find the specific key it was told to search for.",
    objectiveTags: ["troubleshooting", "xlookup"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "What is the 'Z-Pattern' in professional dashboard design?",
    correctAnswer: "Placing the most important information (Logo/Toggles/KPIs) along the top and left paths where the eye travels first.",
    distractors: [
      "Arranging the data tables in the shape of a Z.",
      "Using only 26 rows of data in every worksheet.",
      "Applying a diagonal gradient to all charts."
    ],
    explanation:
      "The Z-Pattern follows how people naturally scan a page. Putting the 'Steering Wheel' at the top-left makes the dashboard intuitive for users.",
    objectiveTags: ["dashboard-design", "ux"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Sarah adds an 'Executive Summary' text box to her dashboard. What should this box contain?",
    correctAnswer: "A clear recommendation based on the data and a note about the biggest risk.",
    distractors: [
      "A list of every formula used in the workbook.",
      "A set of instructions on how to use Excel.",
      "A copy of the company's employee handbook."
    ],
    explanation:
      "A dashboard should provide both the 'What' (Data) and the 'So What' (Strategic recommendation).",
    objectiveTags: ["communication", "professionalism"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "How does 'Absolute Referencing' ($B$4) help when wiring a dashboard?",
    correctAnswer: "It allows Sarah to copy her XLOOKUP formula to other cells while keeping the toggle cell locked.",
    distractors: [
      "It makes the formula results appear in a larger font.",
      "It prevents other users from changing the profit target.",
      "It automatically formats the results as currency."
    ],
    explanation:
      "Dashboard components usually all look at the same one toggle cell. Absolute references keep that link 'sticky' when copying formulas.",
    objectiveTags: ["excel-mechanics", "efficiency"]
  },
  {
    id: "lesson06-q9",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Which function can Sarah use to hide errors if her scenario engine is missing data?",
    correctAnswer: "IFNA or IFERROR",
    distractors: [
      "SUMIF",
      "VLOOKUP",
      "CONCATENATE"
    ],
    explanation:
      "IFNA allows Sarah to replace an error message with a clean note like 'Select Scenario', keeping the dashboard professional.",
    objectiveTags: ["error-handling", "professionalism"]
  },
  {
    id: "lesson06-q10",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Sarah's investor is impressed by her dashboard. Why does this build 'Professional Trust'?",
    correctAnswer: "It shows she has a systematic, data-driven approach to her business and can respond to changes instantly.",
    distractors: [
      "It proves she spent 100 hours working on the spreadsheet.",
      "It shows she has the most expensive version of Excel.",
      "It guarantees the business will never have a bad month."
    ],
    explanation:
      "A dashboard signals leadership and preparation. Investors trust founders who can steer their business using precise tools.",
    objectiveTags: ["leadership", "investor-readiness"]
  }
];

const lesson07Questions: Unit06Phase5Question[] = [
  {
    id: "lesson07-q1",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "A peer audit finds a chart still linked to A1:C10 while the table has 200 rows. What should Sarah do?",
    correctAnswer: "Rebind the chart to the Table[Column] reference so visuals expand with new data.",
    distractors: [
      "Leave the range alone to avoid breaking the chart before the meeting.",
      "Paste values into the chart source so it never changes.",
      "Hide the extra rows so the original range looks accurate."
    ],
    explanation:
      "Charts must follow the table or investors see outdated numbers. Structured references fix the link instantly.",
    objectiveTags: ["quality-assurance", "structured-references", "investor-readiness"]
  },
  {
    id: "lesson07-q2",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "Why do investor-ready models wrap XLOOKUP in IFNA or IFERROR?",
    correctAnswer: "It provides a helpful message when a lookup fails so reviewers know what to fix.",
    distractors: [
      "It makes the workbook calculate faster than standard XLOOKUP.",
      "It hides every error from investors permanently.",
      "It replaces the need for structured references in tables."
    ],
    explanation:
      "Friendly error handling reduces confusion, keeps the audit trail clean, and builds trust with stakeholders.",
    objectiveTags: ["error-handling", "investor-readiness", "quality-assurance"]
  },
  {
    id: "lesson07-q3",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "What belongs on the final QA checklist before investor review?",
    correctAnswer: "Validate assumptions, refresh all queries, confirm charts update, and lock any helper sheets.",
    distractors: [
      "Add bright colors to every cell so the workbook feels energetic.",
      "Delete comments so investors cannot see the decision trail.",
      "Rename tabs with inside jokes for the team."
    ],
    explanation:
      "A disciplined QA checklist ensures the model is accurate, current, and professional before going public.",
    objectiveTags: ["quality-assurance", "process", "investor-readiness"]
  },
  {
    id: "lesson07-q4",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "During rehearsal, Sarah's teammate spots inconsistent formatting between charts. What is the right response?",
    correctAnswer: "Align fonts, colors, and labels so the story feels unified and easy to scan.",
    distractors: [
      "Ignore it because the numbers are correct.",
      "Hide the chart and hope nobody asks about it.",
      "Add more fonts and colors to show creativity."
    ],
    explanation:
      "Visual consistency reduces distraction and signals Sarah pays attention to detail, an investor expectation.",
    objectiveTags: ["presentation", "visual-design", "investor-readiness"]
  },
  {
    id: "lesson07-q5",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "What should Sarah bring to the peer audit meeting besides the workbook?",
    correctAnswer: "A Definition of Done checklist and notes on unresolved questions for quick delegation.",
    distractors: [
      "Nothing—peer audits should be purely conversational.",
      "Printed screenshots of every worksheet.",
      "A list of excuses in case an error appears."
    ],
    explanation:
      "Prepared materials keep the review focused, help capture action items, and demonstrate leadership.",
    objectiveTags: ["peer-audit", "process", "leadership"]
  },
  {
    id: "lesson07-q6",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "Why does Sarah rehearse the investor story using the actual dashboard?",
    correctAnswer: "Practicing with live toggles builds muscle memory so she can respond smoothly under pressure.",
    distractors: [
      "It lets her memorize the exact order of spreadsheet tabs.",
      "It guarantees no technical glitches will ever happen in real life.",
      "It gives her time to add extra jokes to the slides."
    ],
    explanation:
      "Rehearsal reduces surprises and proves Sarah can navigate the deck and model confidently when stakes are high.",
    objectiveTags: ["presentation", "investor-readiness", "confidence"]
  },
  {
    id: "lesson07-q7",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "A teammate suggests hard-coding the final numbers to avoid last-minute changes. Why is that a risk?",
    correctAnswer: "Hard-coding hides the formulas and breaks the self-checking design investors expect.",
    distractors: [
      "Excel refuses to print values that are typed manually.",
      "Manual values always load slower during presentations.",
      "Formatted numbers cannot be copied into PowerPoint."
    ],
    explanation:
      "Locking in values removes transparency and makes updates or audits far harder, threatening trust.",
    objectiveTags: ["quality-assurance", "transparency", "best-practices"]
  },
  {
    id: "lesson07-q8",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "How should Sarah respond if an investor asks for a scenario she has not modeled yet?",
    correctAnswer: "Acknowledge the request, outline how quickly she can build it, and note the data needed while logging the follow-up.",
    distractors: [
      "Promise the scenario is already handled even if it is not.",
      "Refuse to consider the idea because it was last-minute.",
      "Blame the team for not thinking of it earlier."
    ],
    explanation:
      "Honest, action-oriented responses keep trust high and show Sarah leads with transparency.",
    objectiveTags: ["communication", "leadership", "investor-readiness"]
  },
  {
    id: "lesson07-q9",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "What closing slide or section should finish an investor readiness presentation?",
    correctAnswer: "A concise summary of the recommendation, supporting metrics, and a call to action for next steps.",
    distractors: [
      "A collage of behind-the-scenes photos from the team lab day.",
      "A dense table of raw data with no explanation.",
      "A list of software shortcuts used in the model."
    ],
    explanation:
      "Finishing with a decision-oriented summary tells investors exactly what Sarah wants them to do with the information.",
    objectiveTags: ["presentation", "communication", "investor-readiness"]
  },
  {
    id: "lesson07-q10",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Completion, QA, and Presentation Readiness",
    prompt: "After peer review, Sarah updates the workbook. What final step locks in the improvements?",
    correctAnswer: "Version the file, update the change log, and circulate the refreshed dashboard to partners.",
    distractors: [
      "Delete the previous version so nobody compares old assumptions.",
      "Rename the file Final_Final.xlsx and leave it on her desktop.",
      "Skip documentation because the updates were obvious."
    ],
    explanation:
      "Version control and communication keep everyone aligned and show Sarah runs a disciplined process.",
    objectiveTags: ["process", "documentation", "team-communication"]
  }
];

export const unit06Phase5QuestionBank: Unit06Phase5Question[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions
];

export function getUnit06Phase5Questions(filter?: Unit06Phase5Filter): Unit06Phase5Question[] {
  const { lessonIds, tags } = filter ?? {};

  return unit06Phase5QuestionBank.filter(question => {
    const matchesLesson = !lessonIds || lessonIds.includes(question.lessonId);
    const matchesTags = !tags || tags.length === 0 || tags.some(tag => question.objectiveTags.includes(tag));
    return matchesLesson && matchesTags;
  });
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function drawRandomUnit06Phase5Questions(count: number, filter?: Unit06Phase5Filter): Unit06Phase5Question[] {
  const available = getUnit06Phase5Questions(filter);
  if (count >= available.length) {
    return shuffle(available);
  }
  return shuffle(available).slice(0, count);
}

export function toComprehensionCheckItems(questions: Unit06Phase5Question[]): ComprehensionCheckItem[] {
  return questions.map(question => ({
    id: question.id,
    question: question.prompt,
    answers: [question.correctAnswer, ...question.distractors],
    explanation: question.explanation
  }));
}

export function getUnit06Phase5ComprehensionCheckItems(filter?: Unit06Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(getUnit06Phase5Questions(filter));
}

export function drawUnit06Phase5ComprehensionCheckItems(count: number, filter?: Unit06Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(drawRandomUnit06Phase5Questions(count, filter));
}
