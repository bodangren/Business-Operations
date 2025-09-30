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
    prompt: "Sarah buys web hosting for $50 and charges a client $125. What is her markup percentage?",
    correctAnswer: "150%",
    distractors: ["60%", "40%", "250%"],
    explanation:
      "Markup = (Price − Cost) ÷ Cost. ($125 − $50) ÷ $50 = $75 ÷ $50 = 1.50, or 150%.",
    objectiveTags: ["markup", "pricing-basics", "calculations"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Using the same example ($50 cost, $125 price), what is Sarah's margin percentage?",
    correctAnswer: "60%",
    distractors: ["150%", "40%", "250%"],
    explanation:
      "Margin = (Price − Cost) ÷ Price. ($125 − $50) ÷ $125 = $75 ÷ $125 = 0.60, or 60%.",
    objectiveTags: ["margin", "pricing-basics", "calculations"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Why do business owners focus more on margin than markup when planning?",
    correctAnswer: "Margin shows the portion of each sales dollar that becomes profit, which drives planning decisions.",
    distractors: [
      "Markup is harder to calculate than margin.",
      "Margin always produces a higher percentage than markup.",
      "Financial reports do not allow markup calculations."
    ],
    explanation:
      "Margin connects directly to profit planning because it shows how many cents of every dollar stay in the business after costs.",
    objectiveTags: ["margin", "strategy", "pricing-insight"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "If Sarah needs a 40% margin on a project that costs $300, what price should she charge?",
    correctAnswer: "$500",
    distractors: ["$420", "$120", "$750"],
    explanation:
      "Price = Cost ÷ (1 − Margin). $300 ÷ (1 − 0.40) = $300 ÷ 0.60 = $500.",
    objectiveTags: ["margin", "pricing", "calculations"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "A competitor charges $400 for the same service that costs Sarah $300. What is her markup if she matches their price?",
    correctAnswer: "33.3%",
    distractors: ["25%", "75%", "133.3%"],
    explanation:
      "Markup = ($400 − $300) ÷ $300 = $100 ÷ $300 = 0.333..., or about 33.3%.",
    objectiveTags: ["markup", "competitive-analysis", "pricing"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Sarah's fixed costs are $8,000 per month and variable costs are $40 per project. She charges $100. How many projects to break even?",
    correctAnswer: "133 projects",
    distractors: ["200 projects", "80 projects", "267 projects"],
    explanation:
      "Contribution per project = $100 − $40 = $60. Break-even = $8,000 ÷ $60 ≈ 133 projects.",
    objectiveTags: ["cvp", "break-even", "pricing"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "A competitor boasts about a 200% markup with $60 costs. What is their price?",
    correctAnswer: "$180",
    distractors: ["$120", "$160", "$240"],
    explanation:
      "Price = Cost + (Cost × Markup). $60 + ($60 × 2.00) = $60 + $120 = $180.",
    objectiveTags: ["markup", "pricing", "competitive-analysis"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "What is the main risk if a business confuses markup and margin?",
    correctAnswer: "They may price too low and fail to cover costs even with strong sales volume.",
    distractors: [
      "Customers will always notice the mistake right away.",
      "The IRS fines the business for using markup instead of margin.",
      "Only large corporations are affected by the difference."
    ],
    explanation:
      "Misunderstanding the percentages often tricks owners into believing a price is profitable when it is not, leading to real losses.",
    objectiveTags: ["margin", "risk", "pricing-strategy"]
  },
  {
    id: "lesson02-q9",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Sarah wants to raise her margin from 40% to 50% on a $200 cost project. How much must price increase?",
    correctAnswer: "$66.67",
    distractors: ["$133.33", "$100", "$50"],
    explanation:
      "Price at 40% margin: $200 ÷ 0.60 = $333.33. Price at 50% margin: $200 ÷ 0.50 = $400. Increase = $66.67.",
    objectiveTags: ["margin", "pricing", "strategic-adjustment"]
  },
  {
    id: "lesson02-q10",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Markup vs. Margin Concepts",
    prompt: "Which statement best links cost structure to pricing flexibility in a competitive market?",
    correctAnswer: "Businesses with higher fixed costs and low variable costs can temporarily reduce price because each sale still contributes a lot toward profit.",
    distractors: [
      "Cost structure has nothing to do with pricing flexibility.",
      "Higher variable costs always create better margins.",
      "Fixed costs are always better than variable costs when pricing."
    ],
    explanation:
      "A high contribution margin per sale gives room to adjust prices without immediately going negative, which is critical in competition.",
    objectiveTags: ["cvp", "pricing-strategy", "cost-structure"]
  }
];

const lesson03Questions: Unit06Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "Fixed costs are $12,000, variable cost per unit is $30, and price is $80. What is break-even in units?",
    correctAnswer: "240 units",
    distractors: ["400 units", "150 units", "200 units"],
    explanation:
      "Break-even units = Fixed Costs ÷ (Price − Variable Cost) = $12,000 ÷ ($80 − $30) = 240 units.",
    objectiveTags: ["cvp", "break-even", "calculations"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "With the same business, how many units are needed to earn $15,000 profit?",
    correctAnswer: "540 units",
    distractors: ["300 units", "480 units", "600 units"],
    explanation:
      "Target units = (Fixed Costs + Target Profit) ÷ Contribution Margin = ($12,000 + $15,000) ÷ $50 = 540 units.",
    objectiveTags: ["cvp", "target-profit", "calculations"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "Which Excel feature quickly finds the price needed to hit a profit goal?",
    correctAnswer: "Goal Seek from the Data tab",
    distractors: ["VLOOKUP", "PMT", "SUMIF"],
    explanation:
      "Goal Seek works backward from a desired outcome to the required input, making it perfect for CVP target setting.",
    objectiveTags: ["excel-tools", "goal-seek", "cvp"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "Contribution margin ratio is 40%. If revenue is $100,000, how much covers fixed costs and profit?",
    correctAnswer: "$40,000",
    distractors: ["$60,000", "$100,000", "$25,000"],
    explanation:
      "Contribution = Revenue × Contribution Margin Ratio = $100,000 × 0.40 = $40,000.",
    objectiveTags: ["cvp", "contribution-margin", "calculations"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "What happens to break-even when fixed costs rise and price and variable cost stay the same?",
    correctAnswer: "Break-even units increase because more contribution margin is needed to cover fixed costs.",
    distractors: [
      "Break-even units fall because costs are higher.",
      "Break-even stays the same regardless of fixed costs.",
      "Break-even cannot be calculated without more information."
    ],
    explanation:
      "Break-even = Fixed Costs ÷ Contribution Margin. Higher fixed costs require more units to cover them.",
    objectiveTags: ["cvp", "sensitivity", "risk"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "Why should Sarah reference input cells in formulas instead of typing numbers directly?",
    correctAnswer: "Cell references keep the model dynamic so updates ripple through automatically.",
    distractors: [
      "Excel formulas do not allow typed numbers.",
      "It makes the file smaller when saving to OneDrive.",
      "It hides the calculations from investors during demos."
    ],
    explanation:
      "Professional models adjust instantly as inputs change. Hard-coding numbers freezes the math and causes mistakes.",
    objectiveTags: ["modeling", "best-practices", "cvp"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "A restaurant has a 35% contribution margin ratio and wants $7,000 more profit. How much extra revenue is needed?",
    correctAnswer: "$20,000",
    distractors: ["$7,000", "$2,450", "$24,500"],
    explanation:
      "Required revenue increase = Target profit increase ÷ Contribution Margin Ratio = $7,000 ÷ 0.35 = $20,000.",
    objectiveTags: ["cvp", "margin-of-safety", "calculations"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "What three lines belong on a classic break-even chart?",
    correctAnswer: "Fixed Costs (flat), Total Costs (sloped), Revenue (sloped)",
    distractors: [
      "Variable Costs, Fixed Costs, Profit",
      "Revenue, Expenses, Net Income",
      "Units Sold, Price, Total Sales"
    ],
    explanation:
      "Those lines show when revenue crosses total cost, making the break-even point easy to see.",
    objectiveTags: ["cvp", "data-visualization", "communication"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "Why is knowing your break-even point valuable to Sarah?",
    correctAnswer: "It sets minimum sales targets and guides pricing, budgeting, and risk planning.",
    distractors: [
      "It automatically increases profit margins overnight.",
      "It eliminates all business risk no matter what happens.",
      "It guarantees customer satisfaction even if service slips."
    ],
    explanation:
      "Break-even analysis informs decisions about volume goals and cost management. It does not solve everything but it frames the strategy.",
    objectiveTags: ["cvp", "strategy", "planning"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - CVP Model Construction",
    prompt: "If sales volume sits at 150% of break-even, what does that mean?",
    correctAnswer: "The company is profitable with a 50% margin of safety above minimum requirements.",
    distractors: [
      "The business is losing money and must cut prices.",
      "The business is exactly at break-even and making no profit.",
      "The business needs to shut down production immediately."
    ],
    explanation:
      "Operating at 150% of break-even shows a cushion. Profitability is likely, and leadership can withstand some sales dips.",
    objectiveTags: ["cvp", "margin-of-safety", "risk"]
  }
];

const lesson04Questions: Unit06Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Sarah wants $60,000 profit next year but her model shows $35,000 at $3,000 per project. What is the smartest Excel move?",
    correctAnswer: "Run Goal Seek with Set Cell = profit, To Value = 60,000, By Changing Cell = price per project.",
    distractors: [
      "Use SUM to add every possible project combination.",
      "Run VLOOKUP on competitor pricing tables.",
      "Guess higher prices until the profit cell looks right."
    ],
    explanation:
      "Goal Seek is built to reverse engineer the exact price that delivers the target profit, showing investors a precise answer.",
    objectiveTags: ["goal-seek", "target-profit", "excel-tools"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Within Goal Seek, what does the 'By Changing Cell' field represent?",
    correctAnswer: "The single input cell Excel adjusts to hit the target value in the formula cell.",
    distractors: [
      "The cell that contains the target value.",
      "The formula that will be overwritten by Goal Seek.",
      "The output cell that displays the final profit."
    ],
    explanation:
      "Goal Seek manipulates one input. That cell must contain a value (not a formula) that feeds the formula being solved.",
    objectiveTags: ["goal-seek", "excel-tools", "modeling"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "An investor asks how higher fixed costs change the required price. Why is Goal Seek perfect for the answer?",
    correctAnswer: "Update fixed costs, then Goal Seek the new price that keeps profit on target.",
    distractors: [
      "Goal Seek pulls live competitor data automatically.",
      "Goal Seek creates polished charts for the presentation.",
      "Goal Seek emails the investor a summary without Sarah's help."
    ],
    explanation:
      "Goal Seek quickly recalculates the exact price that maintains profit, proving Sarah can respond in meetings with confidence.",
    objectiveTags: ["goal-seek", "scenario-analysis", "investor-readiness"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Break-even is 85 units and Sarah wants it to fall to 60 units using price only. How should Goal Seek be set up?",
    correctAnswer: "Set Cell = break-even formula, To Value = 60, By Changing Cell = price per unit.",
    distractors: [
      "Set Cell = price per unit, To Value = 60, By Changing Cell = break-even formula.",
      "Set Cell = fixed costs, To Value = 60, By Changing Cell = variable cost.",
      "Set Cell = sales volume, To Value = 85, By Changing Cell = break-even formula."
    ],
    explanation:
      "The break-even formula cell must equal 60. Goal Seek adjusts price until that formula outputs 60 units.",
    objectiveTags: ["goal-seek", "break-even", "modeling"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Why is Goal Seek mastery critical during investor presentations?",
    correctAnswer: "Investors expect instant, precise answers to \"what if\" questions about pricing and profit targets.",
    distractors: [
      "Goal Seek automatically creates slide decks for board meetings.",
      "Investors refuse to fund companies that use manual formulas.",
      "Goal Seek guarantees higher profit without effort."
    ],
    explanation:
      "Being able to show a target-driven calculation in real time builds trust and positions Sarah as a prepared Founder.",
    objectiveTags: ["investor-readiness", "goal-seek", "communication"]
  },
  {
    id: "lesson04-q6",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "A firm wants to know the maximum variable cost per project that still allows a 30% margin. How should Sarah respond?",
    correctAnswer: "Goal Seek the profit margin formula to 30% by changing the variable cost cell.",
    distractors: [
      "Goal Seek the variable cost cell to 30% by changing the margin formula.",
      "Goal Seek total revenue to 30% by changing units sold.",
      "Goal Seek average selling price to 30% by changing fixed costs."
    ],
    explanation:
      "The margin formula is the output. Goal Seek manipulates the variable cost input until the formula equals 30%.",
    objectiveTags: ["goal-seek", "pricing", "scenario-analysis"]
  },
  {
    id: "lesson04-q7",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "What does it show when Sarah reaches $75,000 profit either by raising price or selling more units?",
    correctAnswer: "Goal Seek can solve the same target by adjusting different decision levers depending on the changing cell.",
    distractors: [
      "Goal Seek always produces multiple answers automatically.",
      "Goal Seek only works with price increases, not volume changes.",
      "Goal Seek results are unreliable when profit goals are large."
    ],
    explanation:
      "Sarah can run Goal Seek on price or volume as long as the model links those inputs to profit. It showcases strategic flexibility.",
    objectiveTags: ["goal-seek", "scenario-analysis", "strategy"]
  },
  {
    id: "lesson04-q8",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Hiring two more developers will raise fixed costs by $8,000. Which Goal Seek setup answers the break-even question?",
    correctAnswer: "Update fixed costs, set Goal Seek to profit = 0, and change the volume cell to see new break-even units.",
    distractors: [
      "Goal Seek automatically calculates payroll costs without updating the model.",
      "Goal Seek compares salary levels across different industries.",
      "Goal Seek writes the job descriptions for the new hires."
    ],
    explanation:
      "Goal Seek focuses on one variable at a time. Setting profit to zero finds the exact sales volume needed after adding fixed costs.",
    objectiveTags: ["goal-seek", "break-even", "planning"]
  },
  {
    id: "lesson04-q9",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Why is Goal Seek better than manual trial and error for scenario planning?",
    correctAnswer: "Goal Seek delivers mathematically precise answers fast, even under pressure.",
    distractors: [
      "Goal Seek makes charts more colorful.",
      "Goal Seek runs faster than a calculator app.",
      "Goal Seek eliminates the need for financial planning."
    ],
    explanation:
      "Precision and speed impress stakeholders and reduce mistakes compared to guessing and retyping numbers.",
    objectiveTags: ["goal-seek", "professionalism", "analysis"]
  },
  {
    id: "lesson04-q10",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Goal Seek for Target Profit Scenarios",
    prompt: "Sarah must present conservative, optimistic, and stretch profit goals. What's the professional approach?",
    correctAnswer: "Run Goal Seek for each target, capture the required price or volume, and document the assumptions for the audience.",
    distractors: [
      "Run Goal Seek once and guess the other two numbers.",
      "Build three separate workbooks instead of using Goal Seek.",
      "Wait for investors to pick a favorite scenario before doing any math."
    ],
    explanation:
      "Investors expect precise comparisons. Running Goal Seek for each scenario ensures Sarah has exact numbers ready with full context.",
    objectiveTags: ["goal-seek", "scenario-analysis", "communication"]
  }
];

const lesson05Questions: Unit06Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Which statement best describes a one-variable Data Table?",
    correctAnswer: "It changes one input value and watches how a single output formula responds.",
    distractors: [
      "It changes two inputs and returns two outputs at once.",
      "It must use VLOOKUP to locate results.",
      "It requires a macro every time it runs."
    ],
    explanation:
      "One-variable tables are perfect for testing pricing or volume changes against one result cell like profit.",
    objectiveTags: ["data-tables", "automation", "cvp"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "When do two-variable Data Tables shine?",
    correctAnswer: "When Sarah wants to see how combinations of price and units impact profit in one grid.",
    distractors: [
      "When she needs to summarize expenses by department.",
      "When she must analyze customer names alphabetically.",
      "When she wants to format dates and times for printing."
    ],
    explanation:
      "Two-variable tables handle two inputs simultaneously, giving investors a quick heat map of how profit shifts.",
    objectiveTags: ["data-tables", "scenario-analysis", "cvp"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Which formula pairing keeps a profit cell professional during demos?",
    correctAnswer: "Wrap the profit formula in IFERROR (or IFNA) with a clear message if inputs are missing.",
    distractors: [
      "Use TEXTJOIN to combine the numbers into one cell.",
      "Apply HYPERLINK so investors can click the profit cell.",
      "Merge the profit cell with the title for easy formatting."
    ],
    explanation:
      "Error handling prevents scary #DIV/0! messages and guides the audience if an assumption is blank.",
    objectiveTags: ["error-handling", "professionalism", "cvp"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Which validation rule should never be skipped in a CVP dashboard?",
    correctAnswer: "Flag negative variable costs because they are unrealistic and signal a data error.",
    distractors: [
      "Allow blank product IDs because investors only care about totals.",
      "Ignore stale dates as long as last month looked good.",
      "Skip checks on out-of-range prices to keep the sheet simple."
    ],
    explanation:
      "Strong validation guards against unrealistic inputs and protects Sarah's credibility.",
    objectiveTags: ["data-validation", "risk", "cvp"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "What does method switching mean in Sarah's model?",
    correctAnswer: "Using Goal Seek or Driver Table toggles to solve for whichever input (price, units, fixed, variable) matches the question.",
    distractors: [
      "Changing the color palette between worksheets.",
      "Swapping data tabs every time she presents.",
      "Deleting old data so new scenarios feel fresh."
    ],
    explanation:
      "Professionals flex between tools and inputs so the model answers whatever the stakeholder cares about most.",
    objectiveTags: ["method-switching", "scenario-analysis", "automation"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Why do investors ask about margin of safety in the CVP summary?",
    correctAnswer: "It shows how far actual plans sit above break-even, revealing the cushion if sales dip.",
    distractors: [
      "It makes the dashboard colors brighter for presentations.",
      "It speeds up printing handouts before meetings.",
      "It hides other errors in the model from the audience."
    ],
    explanation:
      "Margin of safety expresses risk in practical terms, giving investors confidence in Sarah's projections.",
    objectiveTags: ["margin-of-safety", "investor-readiness", "risk"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "What structure screams investor-ready inside Sarah's workbook?",
    correctAnswer: "Inputs grouped together, calculations in one area, outputs cleanly displayed, plus quick documentation and validation notes.",
    distractors: [
      "Hiding key formulas on secret sheets so nobody can edit them.",
      "Merging cells throughout the data table to save space.",
      "Replacing formulas with hard-coded numbers right before the presentation."
    ],
    explanation:
      "Clarity and documentation show Sarah owns the numbers and understands the system she built.",
    objectiveTags: ["model-structure", "professionalism", "communication"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "When does a Data Table beat Goal Seek?",
    correctAnswer: "When Sarah wants to explore many \"what if\" combinations at the same time.",
    distractors: [
      "When she needs to change one number to hit a single exact target.",
      "When formatting slide titles for the investor deck.",
      "When standardizing customer names during data cleanup."
    ],
    explanation:
      "Goal Seek answers one target, while Data Tables map a whole landscape of options so decision-makers can compare paths.",
    objectiveTags: ["data-tables", "scenario-analysis", "tool-selection"]
  },
  {
    id: "lesson05-q9",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Which formula pairing strengthens clarity inside the automation model?",
    correctAnswer: "IFERROR with structured references like Table[Price] for every key calculation.",
    distractors: [
      "LEFT and RIGHT to trim chart titles.",
      "RANDBETWEEN and RAND to generate surprise scenarios.",
      "TODAY and NOW to timestamp every single cell."
    ],
    explanation:
      "Structured references read like sentences and IFERROR keeps the experience polished, signaling professionalism.",
    objectiveTags: ["structured-references", "error-handling", "automation"]
  },
  {
    id: "lesson05-q10",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced CVP Automation: Scenario Runner & Data Tables",
    prompt: "Operating leverage helps Sarah explain what?",
    correctAnswer: "How sensitive profit is when sales volume goes up or down because of high fixed costs.",
    distractors: [
      "How many Chrome tabs the team opened while modeling.",
      "Which theme color to use on the cover slide.",
      "Which cells have been merged together."
    ],
    explanation:
      "Operating leverage connects cost structure to risk and upside, language investors care about.",
    objectiveTags: ["operating-leverage", "cvp", "risk"]
  }
];

const lesson06Questions: Unit06Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "What is the best way to switch scenarios by name inside an investor dashboard?",
    correctAnswer: "Use XLOOKUP or INDEX-MATCH with validation so each name pulls the right driver set.",
    distractors: [
      "Paste the chosen scenario values into the model before every meeting.",
      "Depend on SUMIF across multiple hidden scenario sheets.",
      "Use approximate matches so Excel can guess which scenario you wanted."
    ],
    explanation:
      "Exact-match lookups tied to a driver table keep the dashboard trustworthy and fast when questions change.",
    objectiveTags: ["scenario-runner", "lookups", "investor-readiness"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Charts stop updating as more rows load. What is the correct fix?",
    correctAnswer: "Build visuals off the Excel Table so structured references expand with the data.",
    distractors: [
      "Hard-code the range and add extra colors to distract viewers.",
      "Turn off automatic calculation before every meeting.",
      "Move the chart to a separate sheet so the range stays small."
    ],
    explanation:
      "Charts tied to Tables update automatically, keeping the story aligned with the freshest numbers.",
    objectiveTags: ["structured-references", "data-visualization", "automation"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Which validation rule earns the most trust from investors?",
    correctAnswer: "Alert users when the As-Of date is stale or when rate assumptions drift outside approved limits.",
    distractors: [
      "Hide errors by turning the font color white.",
      "Delete suspicious rows without documenting why.",
      "Rely on screenshots instead of live data."
    ],
    explanation:
      "Clear guardrails protect from old or wild assumptions sneaking into the summary, proving Sarah monitors risk.",
    objectiveTags: ["data-validation", "risk", "investor-readiness"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "When is a driver table better than Excel's Scenario Manager?",
    correctAnswer: "When Sarah needs dynamic switching, aligned charts, and visible documentation on one canvas.",
    distractors: [
      "When she wants to avoid documenting any assumptions.",
      "When she prefers spreading logic across many files.",
      "When she wants to hide assumptions so no one questions them."
    ],
    explanation:
      "Driver tables embed the logic in rows that can be filtered, audited, and linked to visuals without extra clicks.",
    objectiveTags: ["scenario-runner", "model-structure", "automation"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "How do you prevent #N/A errors when someone types a scenario name wrong?",
    correctAnswer: "Wrap the lookup in IFNA (or IFERROR) and show a friendly \"Scenario not found\" message.",
    distractors: [
      "Put SUM around the lookup so it averages the mistake.",
      "Use LEFT to shorten the name and hope it matches.",
      "Ignore the error so people learn to spell it correctly."
    ],
    explanation:
      "Friendly error handling keeps the dashboard polished and guides the user to correct the issue quickly.",
    objectiveTags: ["error-handling", "lookups", "ux"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Which KPI trio is most decision-ready for pricing strategy?",
    correctAnswer: "Unit margin, break-even units, and runway months.",
    distractors: [
      "Total row count, number of tabs, cell color usage.",
      "Days since last save, workbook file size, sheet count.",
      "Average character count in cell labels."],
    explanation:
      "Those KPIs translate directly to risk, sustainability, and pricing power, the exact talking points investors want.",
    objectiveTags: ["kpi-selection", "pricing", "investor-readiness"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "In a live investor Q&A, what should Sarah display first when a scenario is requested?",
    correctAnswer: "Switch the scenario toggle, display refreshed KPIs, and summarize the recommendation in one sentence.",
    distractors: [
      "Scroll through raw data exports to show how many rows she imported.",
      "Open the VBA editor to prove the workbook is advanced.",
      "Read an email thread explaining why the model exists."
    ],
    explanation:
      "Leading with the decision view keeps the conversation focused and shows Sarah controls the tool.",
    objectiveTags: ["communication", "investor-readiness", "scenario-runner"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "What upgrade most improves auditability for the dashboard?",
    correctAnswer: "Document driver-to-output connections with clear comments or a mini legend on the page.",
    distractors: [
      "Hide supporting sheets behind passwords so nobody can view them.",
      "Merge cells around every chart to lock the layout.",
      "Copy values over formulas so nothing changes during review."
    ],
    explanation:
      "Investors need to trace assumptions quickly. Short notes or legends point them to the source without derailing the meeting.",
    objectiveTags: ["audit-trail", "communication", "documentation"]
  },
  {
    id: "lesson06-q9",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "Sarah's dashboard feels busy. What redesign keeps the data powerful without overwhelming viewers?",
    correctAnswer: "Group inputs on the left, KPIs up top, visuals on the right, and leave breathing room between sections.",
    distractors: [
      "Shrink the font to 6pt so everything fits on one screen.",
      "Stack all charts in one column without labels.",
      "Remove the KPIs entirely so investors can calculate them mentally."
    ],
    explanation:
      "Clear layout helps decision-makers follow the story instantly, which is critical when time is limited.",
    objectiveTags: ["dashboard-design", "ux", "communication"]
  },
  {
    id: "lesson06-q10",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration Dashboard: Scenario Runner + Investor Summary",
    prompt: "How should Sarah close an investor walkthrough of the dashboard?",
    correctAnswer: "Restate the recommended scenario, note the risk guardrails, and invite questions with the model ready to flex.",
    distractors: [
      "Email the workbook and end the call without discussion.",
      "Switch to a random worksheet to show off color coding.",
      "Delete all scenarios except the one she prefers."
    ],
    explanation:
      "Summarizing action steps while demonstrating adaptability reinforces confidence in both the numbers and Sarah's leadership.",
    objectiveTags: ["investor-readiness", "communication", "leadership"]
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
