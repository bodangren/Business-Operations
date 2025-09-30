export type Unit07LessonId =
  | "lesson01"
  | "lesson02"
  | "lesson03"
  | "lesson04"
  | "lesson05"
  | "lesson06"
  | "lesson07";

export interface Unit07Phase5Question {
  id: string;
  lessonId: Unit07LessonId;
  lessonTitle: string;
  prompt: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
  objectiveTags: string[];
}

export interface Unit07Phase5Filter {
  lessonIds?: Unit07LessonId[];
  tags?: string[];
}

export interface ComprehensionCheckItem {
  id: string;
  question: string;
  answers: string[];
  explanation: string;
}

const lesson01Questions: Unit07Phase5Question[] = [
  {
    id: "lesson01-q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Data Exploration",
    prompt: "Why do professional teams spread the cost of long-lived equipment across several years instead of expensing it right away?",
    correctAnswer: "Spreading the cost matches each year's expense to the income that equipment helps generate over its useful life.",
    distractors: [
      "Expensing everything early would make the balance sheet look too strong for lenders.",
      "Investors prefer to see expenses delayed until the asset needs repairs.",
      "Tax rules require every company to delay expenses until an audit happens."
    ],
    explanation:
      "The matching principle says expenses should line up with the revenue they help create. Depreciation spreads the cost so the financial statements stay honest across the asset's life.",
    objectiveTags: ["matching-principle", "depreciation-fundamentals"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Data Exploration",
    prompt: "TechStart wants cash for growth but also wants to impress investors. Which blended method choice best supports both goals?",
    correctAnswer: "Use double-declining balance for upfront tax relief and FIFO inventory for stronger reported profits, then explain the rationale clearly to investors.",
    distractors: [
      "Stay on straight-line depreciation and LIFO inventory so statements remain perfectly consistent every year.",
      "Switch methods every quarter so the reports always match current investor questions.",
      "Delay equipment and inventory purchases until the fundraising round is complete."
    ],
    explanation:
      "Accelerated depreciation protects cash in the early years, while FIFO shows higher profits. Together they balance cash flow and investor optics, as long as Sarah documents the strategy.",
    objectiveTags: ["method-selection", "investor-readiness"]
  },
  {
    id: "lesson01-q3",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Data Exploration",
    prompt: "When inventory costs climb quickly, what trade-off should Sarah expect when comparing LIFO and FIFO?",
    correctAnswer: "LIFO boosts cash by reducing taxable income, while FIFO highlights higher profit that investors may want to see.",
    distractors: [
      "LIFO always wins because it mirrors the physical flow of TechStart's hardware shipments.",
      "FIFO guarantees the lowest taxes because it keeps the oldest costs in Cost of Goods Sold.",
      "Both methods lead to the same profit as long as the total inventory purchased is identical."
    ],
    explanation:
      "Rising costs make LIFO show higher COGS and lower profit, which trims taxes. FIFO uses older, cheaper costs in COGS, so profit looks stronger but taxes increase.",
    objectiveTags: ["inventory-strategy", "cash-flow"]
  },
  {
    id: "lesson01-q4",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Data Exploration",
    prompt: "Sarah buys equipment for $18,000, expects $2,000 salvage value, and a five-year life. What is the annual straight-line depreciation?",
    correctAnswer: "$3,200 because ($18,000 - $2,000) divided by 5 equals $3,200 per year.",
    distractors: [
      "$3,600 because the asset cost simply spreads into equal $3,600 chunks.",
      "$2,800 because salvage value should be ignored until the final year.",
      "$4,000 because investors prefer to see round numbers on depreciation schedules."
    ],
    explanation:
      "Straight-line depreciation uses the cost minus salvage value, then divides by useful life. ($18,000 - $2,000) ÷ 5 = $3,200.",
    objectiveTags: ["depreciation-calculation", "excel-functions"]
  },
  {
    id: "lesson01-q5",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Data Exploration",
    prompt: "Why would a cash-strapped company lean toward LIFO when costs are rising fast?",
    correctAnswer: "Higher Cost of Goods Sold under LIFO lowers taxable income and protects scarce cash.",
    distractors: [
      "LIFO always increases book value, which impresses creditors during tough seasons.",
      "LIFO is easier to explain to auditors, so it shortens the year-end review.",
      "LIFO eliminates the need for inventory counts, saving payroll immediately."
    ],
    explanation:
      "LIFO assigns the newest, most expensive layers to COGS. That pushes profit and taxes down, which keeps more cash inside the business when it matters most.",
    objectiveTags: ["cash-flow", "inventory-strategy"]
  },
  {
    id: "lesson01-q6",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Launch & Data Exploration",
    prompt: "What guiding question should Sarah ask before locking in any depreciation or inventory method?",
    correctAnswer: "Does this combination support our cash flow, tax plan, and investor story for the next stage of growth?",
    distractors: [
      "Which option matches whatever nearby tech companies already use?",
      "Which method keeps the spreadsheet formulas the shortest and simplest?",
      "Which approach lets us change accounting policies the least often during audits?"
    ],
    explanation:
      "Method choices are strategic. Sarah has to pick the mix that best supports TechStart's goals around cash, taxes, and external reporting.",
    objectiveTags: ["method-selection", "strategy-alignment"]
  }
];
const lesson02Questions: Unit07Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "A company buys equipment for $60,000, expects $6,000 salvage value, and plans to use it for nine years. What is the annual straight-line depreciation expense?",
    correctAnswer: "$6,000 because ($60,000 - $6,000) divided by 9 years equals $6,000.",
    distractors: [
      "$6,667 because each year should show one-ninth of the original purchase price.",
      "$5,400 because depreciation should match the equipment's expected salvage value.",
      "$7,333 because the first year receives a bonus deduction before leveling off."
    ],
    explanation:
      "Straight-line depreciation spreads the depreciable base (cost minus salvage value) evenly across the useful life. ($60,000 – $6,000) ÷ 9 = $6,000 per year.",
    objectiveTags: ["depreciation-calculation", "excel-functions"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "Which Excel function correctly returns the third year of double-declining balance depreciation for a $45,000 asset with $3,000 salvage value and six-year life?",
    correctAnswer: "=DDB(45000,3000,6,3)",
    distractors: [
      "=DDB(45000,3000,3,6)",
      "=SLN(45000,3000,6)*2",
      "=DDB(42000,3000,6,3)"
    ],
    explanation:
      "The DDB function syntax is DDB(cost, salvage, life, period). Plugging in the third period returns the third-year depreciation charge.",
    objectiveTags: ["excel-functions", "depreciation-calculation"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "Why would a fast-growing tech firm choose double-declining balance (DDB) over straight-line depreciation for laptops and servers?",
    correctAnswer: "DDB front-loads depreciation, creating larger early tax deductions that free cash for reinvestment.",
    distractors: [
      "DDB spreads costs evenly, which keeps the budget the same every month.",
      "DDB raises the book value of the assets so the balance sheet looks stronger.",
      "DDB is a legal requirement whenever a company buys computer equipment."
    ],
    explanation:
      "High-growth firms value cash. Accelerated depreciation lowers taxable income sooner, matching the rapid obsolescence of technology assets.",
    objectiveTags: ["method-selection", "cash-flow"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "An $80,000 machine has a four-year life and $8,000 salvage value. How much more Year 1 depreciation does DDB provide compared with straight-line?",
    correctAnswer: "$22,000 more because DDB records $40,000 while straight-line records $18,000 in the first year.",
    distractors: [
      "$18,000 more because straight-line starts lower and catches up later.",
      "$15,000 more because both methods average out by the second year.",
      "$12,000 more because DDB doubles the straight-line amount for the first half of the life."
    ],
    explanation:
      "Straight-line Year 1 = ($80,000 – $8,000) ÷ 4 = $18,000. DDB Year 1 = $80,000 × (2 ÷ 4) = $40,000. The difference is $22,000.",
    objectiveTags: ["depreciation-calculation", "cash-flow"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "A manufacturer whose equipment usage rises and falls with production volume wants the fairest expense pattern. Which method should it consider?",
    correctAnswer: "Units of Production, because it ties depreciation to the actual hours or units the equipment produces.",
    distractors: [
      "Straight-line, because identical annual amounts simplify the monthly close.",
      "Double-declining balance, because bigger early deductions always improve decisions.",
      "Rotating methods each year, because variety keeps the statements adaptable."
    ],
    explanation:
      "Units of Production aligns expense with usage. When production varies, matching depreciation to output provides the most accurate story.",
    objectiveTags: ["method-selection", "operations-fit"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "How do straight-line and double-declining balance differ on the financial statements in the first year?",
    correctAnswer: "DDB shows lower net income and a lower book value because the expense is higher right away.",
    distractors: [
      "DDB shows higher net income because the expense is deferred until later years.",
      "Both methods produce identical income statements in every period, so only disclosures change.",
      "DDB affects only the cash flow statement while the income statement stays the same as straight-line."
    ],
    explanation:
      "Accelerated methods record more expense up front, which cuts net income and increases accumulated depreciation compared to straight-line.",
    objectiveTags: ["financial-reporting", "depreciation-analysis"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "Why would investors care about the depreciation method a leadership team selects?",
    correctAnswer: "Method choice signals how management balances tax strategy, cash timing, and performance storytelling.",
    distractors: [
      "Investors only care about the total dollar amount of depreciation, not when it hits.",
      "Depreciation methods never influence investor decisions because GAAP requires one option.",
      "All companies must use the same method, so it cannot reveal anything about leadership."
    ],
    explanation:
      "Sophisticated investors read method choices as evidence of strategic thinking. They look for clear reasoning around cash, taxes, and comparability.",
    objectiveTags: ["investor-readiness", "strategy-alignment"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "TechStart's $100,000 asset has a five-year life, $10,000 salvage value, and a 30% tax rate. How much extra cash does DDB free up in Year 1 compared with straight-line?",
    correctAnswer: "$6,600 because the extra $22,000 depreciation saves $6,600 in taxes at 30%.",
    distractors: [
      "$9,900 because accelerated methods always double the tax benefit in Year 1.",
      "$4,500 because the tax savings equal one quarter of the extra depreciation.",
      "$12,000 because DDB eliminates taxes for the first half of the asset's life."
    ],
    explanation:
      "Straight-line records $18,000, while DDB records $40,000. The $22,000 difference × 30% tax rate equals $6,600 of cash preserved.",
    objectiveTags: ["cash-flow", "depreciation-analysis"]
  },
  {
    id: "lesson02-q9",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "Why do auditors insist that companies apply depreciation methods consistently period after period?",
    correctAnswer: "Consistency keeps statements comparable over time, supporting credible valuations and trend analysis.",
    distractors: [
      "Consistency maximizes profit every year without additional work.",
      "Consistency reduces the number of journal entries needed during the close.",
      "Consistency automatically unlocks every available tax incentive with no planning."
    ],
    explanation:
      "Reliable financial reporting depends on seeing changes in performance, not changes caused by switching accounting methods.",
    objectiveTags: ["financial-reporting", "controls"]
  },
  {
    id: "lesson02-q10",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Depreciation Techniques",
    prompt: "Sarah wants early cash savings but also wants investors to understand her plan. How should she handle depreciation on her $18,000 purchase?",
    correctAnswer: "Use DDB for tax purposes and document why the acceleration supports TechStart's growth story.",
    distractors: [
      "Stick with straight-line only because investors dislike any method differences.",
      "Switch back and forth each quarter to keep the reported profit aligned with investor meetings.",
      "Expense the full $18,000 immediately so no one has to monitor the schedule."
    ],
    explanation:
      "Strategic accounting combines valid tax benefits with transparent storytelling. Sarah can choose DDB as long as she explains the reasoning.",
    objectiveTags: ["method-selection", "investor-readiness"]
  }
];
const lesson03Questions: Unit07Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "A retailer buys laptops in three waves: 10 @ $800, 15 @ $850, and 12 @ $900. If 20 units sell in March using FIFO, what Cost of Goods Sold should the ledger show?",
    correctAnswer: "$16,750 because FIFO uses 10 units at $800 plus 10 units at $850.",
    distractors: [
      "$17,000 by multiplying 20 units by the $850 blended price.",
      "$18,000 because the current selling month should use the $900 layer.",
      "$16,500 because FIFO averages the first two layers into one cost."
    ],
    explanation:
      "FIFO assigns the oldest costs first: 10 × $800 = $8,000 and 10 × $850 = $8,500. Together they create $16,750 of Cost of Goods Sold.",
    objectiveTags: ["fifo-lifo-calculations", "inventory-valuation"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "Using the same purchase data, what Cost of Goods Sold results when TechStart applies LIFO to the 20 units sold?",
    correctAnswer: "$17,600 because LIFO uses 12 units at $900 and 8 units at $850.",
    distractors: [
      "$16,750 because inventory cost should match the FIFO amount.",
      "$18,000 because LIFO always applies the newest full layer first.",
      "$16,000 because the earliest layer sets the cost no matter the method."
    ],
    explanation:
      "LIFO pulls the newest layers. March contributes 12 × $900 = $10,800. The remaining 8 units come from February at $850 = $6,800. Together they total $17,600.",
    objectiveTags: ["fifo-lifo-calculations", "inventory-valuation"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "In a rising-price environment, how do FIFO and LIFO typically differ on the income statement?",
    correctAnswer: "LIFO reports higher Cost of Goods Sold and therefore lower net income than FIFO.",
    distractors: [
      "FIFO reports higher Cost of Goods Sold and lower net income than LIFO.",
      "Both methods post identical numbers as long as unit counts stay the same.",
      "FIFO always gives the lowest profit because it keeps the newest costs in inventory."
    ],
    explanation:
      "When costs climb, LIFO pulls the newest, priciest inventory into COGS. That lifts expense, trims profit, and reduces taxes relative to FIFO.",
    objectiveTags: ["inventory-strategy", "financial-reporting"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "Why might a startup pitching investors prefer FIFO results during fundraising?",
    correctAnswer: "FIFO shows higher profits in inflationary periods, helping demonstrate momentum to potential investors.",
    distractors: [
      "FIFO is always the simplest method, so it signals strong internal controls.",
      "FIFO automatically delivers better cash flow than any other method.",
      "FIFO is required for every company that presents to venture capital firms."
    ],
    explanation:
      "FIFO leaves the newer, more expensive layers in inventory, so COGS stays lower and profit appears stronger—useful when telling a growth story.",
    objectiveTags: ["investor-readiness", "inventory-strategy"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "In an inflationary market, which method often appeals to a profitable, cash-rich company and why?",
    correctAnswer: "LIFO because it raises COGS, trims taxable income, and preserves cash.",
    distractors: [
      "FIFO because investors focus only on reported profit, not cash flow.",
      "Either method, since inventory accounting never impacts cash in real life.",
      "FIFO because modern systems make it easier to track historical layers."
    ],
    explanation:
      "Higher COGS under LIFO reduces taxable income. Mature companies that can explain the strategy often choose LIFO to manage cash outflows.",
    objectiveTags: ["cash-flow", "inventory-strategy"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "Which business is least suited for LIFO, even if it could reduce taxes?",
    correctAnswer: "A grocery chain with perishable dairy products that must sell older items first.",
    distractors: [
      "An oil refinery that regularly replenishes large crude inventories.",
      "A steel manufacturer building long-term commodity layers.",
      "A technology retailer managing fast-moving electronics."
    ],
    explanation:
      "Perishables must rotate first-in, first-out to avoid spoilage. LIFO would misstate the real flow and create safety issues.",
    objectiveTags: ["operations-fit", "inventory-controls"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "What compliance step is required when a company wants to move from FIFO to LIFO for U.S. taxes?",
    correctAnswer: "Secure IRS approval and apply LIFO consistently for both tax and financial statements.",
    distractors: [
      "Change only the tax return while keeping FIFO on the financial statements.",
      "Test LIFO for a single year and then switch back to compare results.",
      "File amended returns for the prior three years before adopting LIFO."
    ],
    explanation:
      "The IRS conformity rule requires companies using LIFO for taxes to use it in financial reporting as well. Formal approval is part of the change.",
    objectiveTags: ["compliance", "inventory-controls"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "During the simulation, storage costs increased when inventory piled up. How does that relate to inventory method choice?",
    correctAnswer: "FIFO can leave higher-cost layers on the shelves longer, increasing carrying costs like storage and insurance.",
    distractors: [
      "LIFO always eliminates storage costs because newer purchases sell instantly.",
      "Carrying costs have nothing to do with accounting methods, only warehouse size.",
      "FIFO removes storage costs entirely because it sends the oldest units out first."
    ],
    explanation:
      "Method choice affects ending inventory value. Higher balances mean more insurance, storage, and obsolescence risk that teams must watch.",
    objectiveTags: ["inventory-strategy", "operations-fit"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "How can inventory method selection influence the inventory turnover ratio?",
    correctAnswer: "LIFO can make turnover look higher because it raises COGS and lowers ending inventory in inflationary periods.",
    distractors: [
      "FIFO always produces superior turnover ratios for every company.",
      "Turnover ignores accounting methods and only reflects warehouse efficiency.",
      "LIFO always lowers turnover because it delays selling the newest goods."
    ],
    explanation:
      "Turnover = COGS ÷ Average Inventory. LIFO can inflate COGS and shrink the denominator, making operations appear faster than they truly are.",
    objectiveTags: ["kpi-analysis", "inventory-strategy"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Inventory Methods Introduction",
    prompt: "When advising a business on FIFO versus LIFO, what should be the primary decision filter?",
    correctAnswer: "Align the method with the company's strategy, cash needs, and stakeholder expectations.",
    distractors: [
      "Pick whichever method is fastest to calculate inside Excel.",
      "Copy whatever method competitors use to stay consistent.",
      "Choose the option that maximizes reported profit every single quarter."
    ],
    explanation:
      "Inventory accounting is strategic. Leaders weigh cash flow, taxes, investor messaging, compliance, and operational realities before finalizing a choice.",
    objectiveTags: ["strategy-alignment", "inventory-strategy"]
  }
];
const lesson04Questions: Unit07Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "When purchase costs are rising, which inventory method usually reports the lower profit and why?",
    correctAnswer: "LIFO, because it pushes the newest, higher costs into Cost of Goods Sold right away.",
    distractors: [
      "FIFO, because it leaves the newest costs on the balance sheet as inventory layers.",
      "Weighted Average, because it blends the costs and always lowers profit first.",
      "Specific Identification, because it assigns every item the most recent supplier price."
    ],
    explanation:
      "In inflationary periods, LIFO moves the priciest layers to COGS sooner, shrinking profit and taxable income compared to FIFO.",
    objectiveTags: ["inventory-strategy", "financial-reporting"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "Which Excel feature keeps formulas expanding automatically as Sarah adds new purchase or sales rows?",
    correctAnswer: "Excel Tables with structured references that grow and update links automatically.",
    distractors: [
      "Manual named ranges that require editing whenever the data changes.",
      "Absolute references like $A$2:$A$100 that lock the range size permanently.",
      "Paste Special values so the formulas stay frozen after each refresh."
    ],
    explanation:
      "Tables turn ranges into living data sources so lookups, charts, and Totals follow the data without manual rewiring.",
    objectiveTags: ["excel-automation", "structured-references"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "A validation rule catches a negative UnitCost entry. What should the model do?",
    correctAnswer: "Flag the record with a clear error until the team corrects the bad input.",
    distractors: [
      "Ignore the row so totals continue without interruption.",
      "Convert the cost to zero so the calculation can finish quietly.",
      "Hide the row from reports so auditors never see the problem."
    ],
    explanation:
      "Professional models surface data issues immediately. Blocking the error protects COGS, margins, and investor trust.",
    objectiveTags: ["validation-controls", "data-integrity"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "Which modern Excel function replaces brittle VLOOKUP formulas in TechStart's inventory model?",
    correctAnswer: "XLOOKUP, because it supports left/right searches, exact matches, and graceful error handling.",
    distractors: [
      "HLOOKUP, which only searches across rows but still has the same limits as VLOOKUP.",
      "OFFSET, which is volatile and harder to audit for stakeholders.",
      "INDEX alone, without MATCH, which cannot pick the correct row by itself."
    ],
    explanation:
      "XLOOKUP delivers flexible lookups with readable syntax and built-in defaults, reducing formula risk.",
    objectiveTags: ["excel-functions", "excel-automation"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "Purchases arrive at 30 units @$20, 30 units @$22, and 50 units @$24. A 60-unit sale occurs. What FIFO Cost of Goods Sold does the table produce?",
    correctAnswer: "$1,260 because it takes 30 units at $20 plus 30 units at $22.",
    distractors: [
      "$1,200 because FIFO averages the two oldest costs evenly.",
      "$1,320 because it blends the first three layers together.",
      "$1,440 because the most recent $24 layer gets consumed first."
    ],
    explanation:
      "FIFO clears the oldest layers: 30 × $20 = $600 and 30 × $22 = $660. Together the sale costs $1,260.",
    objectiveTags: ["fifo-lifo-calculations", "inventory-valuation"]
  },
  {
    id: "lesson04-q6",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "Which practice aligns with investor expectations for Sarah's workbook?",
    correctAnswer: "Label methods clearly and pair dashboards with validation checks that prove accuracy.",
    distractors: [
      "Rely on bright colors alone if the grand totals appear reasonable.",
      "Hide input sheets to keep the file clean for presentations.",
      "Update results manually each month as long as changes are documented."
    ],
    explanation:
      "Investors value transparency. Clear labels plus automated checks show Sarah controls her data and stands behind the results.",
    objectiveTags: ["investor-readiness", "validation-controls"]
  },
  {
    id: "lesson04-q7",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "What formula pattern safely calculates weighted totals for a specific condition inside the table?",
    correctAnswer: "Use SUMPRODUCT with logical tests to multiply quantities and costs for the matching rows.",
    distractors: [
      "Apply SUM to visible cells and hope filters remove any unwanted values.",
      "Multiply each row manually and paste the results into a summary tab.",
      "Combine COUNTIF and SUM, which cannot multiply quantities by price in one step."
    ],
    explanation:
      "SUMPRODUCT handles filtered calculations in a single, auditable formula—crucial for inventory valuation and KPI tiles.",
    objectiveTags: ["excel-functions", "inventory-valuation"]
  },
  {
    id: "lesson04-q8",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "If supplier prices fall instead of rise, which method often reports the higher profit and why?",
    correctAnswer: "FIFO, because it moves the older, higher-cost layers into COGS first, leaving cheaper stock on the balance sheet.",
    distractors: [
      "LIFO, because it keeps old costs in COGS until the market settles.",
      "Both methods tie because price direction does not influence profit.",
      "Neither method changes profit because quantity sold stays the same."
    ],
    explanation:
      "When costs drop, selling the older, higher layers first (FIFO) elevates COGS and leaves lower-cost inventory, which can increase reported profit.",
    objectiveTags: ["inventory-strategy", "financial-reporting"]
  },
  {
    id: "lesson04-q9",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "What is an inventory 'layer' in Sarah's model?",
    correctAnswer: "A group of units purchased at the same cost that moves through the valuation engine together.",
    distractors: [
      "A color-coding template applied to rows for readability.",
      "A worksheet tab dedicated to a specific supplier order.",
      "A pivot table filter used to slice the data by region."
    ],
    explanation:
      "Each purchase event becomes its own cost layer. FIFO and LIFO choose which layers move to COGS and which remain in inventory.",
    objectiveTags: ["inventory-valuation", "data-structure"]
  },
  {
    id: "lesson04-q10",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - FIFO/LIFO Inventory Valuation with Excel Tables",
    prompt: "After adding two new purchases, what is the best stress test for the workbook?",
    correctAnswer: "Confirm COGS and ending inventory recalculate without touching any formulas.",
    distractors: [
      "Rebuild each formula from scratch just to be safe.",
      "Change the protection settings so edits are easier next time.",
      "Take a screenshot of the table before anyone else makes changes."
    ],
    explanation:
      "Robust models update automatically as tables grow. If totals adjust without rewiring formulas, the design is investor ready.",
    objectiveTags: ["validation-controls", "excel-automation"]
  }
];
const lesson05Questions: Unit07Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "Which workbook setup scales cleanly as TechStart keeps adding transactions?",
    correctAnswer: "Build Excel Tables and use structured references such as Sales[Qty] so formulas expand automatically.",
    distractors: [
      "Keep fixed ranges like A2:A100 to protect calculation speed.",
      "Copy entire formula blocks for each month to preserve history.",
      "Hide any extra columns so teammates avoid touching critical logic."
    ],
    explanation:
      "Tables plus structured references grow with the data and stay readable for audits, preventing broken formulas during growth spurts.",
    objectiveTags: ["structured-references", "excel-automation"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "When prices climb, which inventory statement stays true?",
    correctAnswer: "LIFO books higher COGS and lowers profit for the current period compared to FIFO.",
    distractors: [
      "FIFO immediately raises COGS and drops profit below LIFO.",
      "Weighted Average always matches FIFO in any pricing environment.",
      "All methods deliver the same Cost of Goods Sold if the units sold are identical."
    ],
    explanation:
      "Rising costs mean LIFO consumes the newest layers first, so expenses rise and reported income dips.",
    objectiveTags: ["inventory-strategy", "financial-reporting"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "Sarah wants to switch between FIFO, LIFO, and Weighted Average with one choice. What design keeps the model stable?",
    correctAnswer: "Use a data-validation dropdown that drives formulas referencing the selected method.",
    distractors: [
      "Maintain separate files with pasted values for each method.",
      "Run find-and-replace on method names when the scenario changes.",
      "Store handwritten method notes on a hidden sheet for reference."
    ],
    explanation:
      "A single control cell keeps every helper formula aligned, avoiding human rewrites and version drift.",
    objectiveTags: ["method-switching", "excel-automation"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "Which validation rule removes the biggest risk before it pollutes COGS?",
    correctAnswer: "Block any purchase row with a negative or zero UnitCost so errors stop at the source.",
    distractors: [
      "Auto-color headers blue to show the sheet is protected.",
      "Freeze the top rows so users always see column titles.",
      "Left-align numeric fields so the sheet looks consistent."
    ],
    explanation:
      "A bad unit cost cascades through every metric. Preventing the entry up front keeps the ledger trustworthy.",
    objectiveTags: ["validation-controls", "data-integrity"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "How should Sarah prevent #N/A from tanking dashboard visuals?",
    correctAnswer: "Wrap lookups in IFNA or IFERROR and return a clear message the team can act on.",
    distractors: [
      "Convert every error to zero so charts stay filled in.",
      "Delete rows that display #N/A before meetings.",
      "Hide any columns that surface errors to keep stakeholders calm."
    ],
    explanation:
      "Friendly error handling preserves trust. It explains what went wrong without hiding the issue or corrupting metrics.",
    objectiveTags: ["error-handling", "investor-readiness"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "What formula describes the weighted-average cost per unit during rolling updates?",
    correctAnswer: "Divide the running total cost by the running total units on hand at each step.",
    distractors: [
      "Divide total sales dollars by total units sold to date.",
      "Use the cost from the most recent purchase only.",
      "Compute Cost of Goods Sold divided by ending inventory for each period."
    ],
    explanation:
      "Weighted average tracks cumulative cost and quantity, ensuring each sale uses the blended rate up to that moment.",
    objectiveTags: ["weighted-average", "inventory-valuation"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "A return comes in as a negative sales quantity. How should the model respond?",
    correctAnswer: "Increase inventory on hand and reinstate the appropriate cost layers for that method.",
    distractors: [
      "Ignore the return in COGS because it already left the warehouse.",
      "Reduce the purchase quantities to offset the negative sale.",
      "Flip the number to a positive sale so totals remain easy to read."
    ],
    explanation:
      "Returns rebuild stock. FIFO, LIFO, and Weighted Average each need logic to restore the affected layers correctly.",
    objectiveTags: ["inventory-controls", "data-integrity"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "Some transactions show dates far outside the reporting window. What is the investor-ready response?",
    correctAnswer: "Trigger a validation warning and document the resolution so the audit trail stays intact.",
    distractors: [
      "Delete the out-of-period rows so they never confuse stakeholders.",
      "Just reformat the column so the dates look consistent.",
      "Sort the table newest to oldest and move on without notes."
    ],
    explanation:
      "Flagging and commenting preserves evidence, keeps reviewers informed, and prevents silent data loss.",
    objectiveTags: ["validation-controls", "investor-readiness"]
  },
  {
    id: "lesson05-q9",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "What does investor-ready communication look like beside the metrics?",
    correctAnswer: "Provide clear labels, method notes, and rationale right next to the reported results.",
    distractors: [
      "Share totals without context so executives can form their own narrative.",
      "Expand the workbook to dozens of tabs so every detail lives separately.",
      "Hide validation messages to keep the interface clean for presentations."
    ],
    explanation:
      "Stakeholders trust models that explain assumptions and give quick access to decisions and risks.",
    objectiveTags: ["investor-readiness", "communication"]
  },
  {
    id: "lesson05-q10",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Inventory Automation",
    prompt: "How does choosing LIFO this quarter impact TechStart's cash position?",
    correctAnswer: "It lowers taxable income through higher COGS, preserving more cash in the business now.",
    distractors: [
      "It raises taxes immediately but improves cash flow through better reporting.",
      "It has no effect on cash because inventory methods are non-cash adjustments.",
      "It guarantees higher reported profit, which automatically boosts cash."
    ],
    explanation:
      "In inflationary cycles, LIFO reduces profit today, which trims the tax payment and supports near-term cash needs.",
    objectiveTags: ["cash-flow", "inventory-strategy"]
  }
];
const lesson06Questions: Unit07Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Presentation: Inventory Decision Dashboard",
    prompt: "What is the most reliable way to switch scenarios by name inside the dashboard?",
    correctAnswer: "Use XLOOKUP with exact match and wrap it in IFNA to flag missing scenario names immediately.",
    distractors: [
      "Use VLOOKUP with approximate match so close spellings still work.",
      "Chain multiple nested IF statements across worksheets.",
      "Copy and paste values between scenario sheets whenever something changes."
    ],
    explanation:
      "Exact-match lookups plus IFNA deliver the right scenario every time and warn presenters when an input is mistyped.",
    objectiveTags: ["scenario-planning", "excel-functions"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Presentation: Inventory Decision Dashboard",
    prompt: "Charts keep breaking as new rows appear. What structural fix prevents that?",
    correctAnswer: "Bind charts to structured references coming from Excel Tables so the ranges expand automatically.",
    distractors: [
      "Rely on named ranges with fixed end points so the layout stays locked.",
      "Move the chart to its own sheet with a static range reference.",
      "Copy totals into a hidden chart range after every update."
    ],
    explanation:
      "Tables resize themselves, keeping visuals current without manual maintenance—a must for live investor demos.",
    objectiveTags: ["structured-references", "dashboard-design"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Presentation: Inventory Decision Dashboard",
    prompt: "How should Sarah combine IFERROR and IFNA in a professional workbook?",
    correctAnswer: "Use IFNA to catch missing lookup results and IFERROR for other calculation issues so messages stay specific.",
    distractors: [
      "Treat IFNA and IFERROR as identical because they deliver the same outcome.",
      "Reserve IFERROR for charts only and leave lookups exposed.",
      "Use IFNA to format numbers as percentages before presenting."
    ],
    explanation:
      "Different wrappers handle different risks. Specific messaging helps users troubleshoot quickly without hiding problems.",
    objectiveTags: ["error-handling", "excel-functions"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Presentation: Inventory Decision Dashboard",
    prompt: "Which KPI mix delivers decision-ready insight for investors reviewing inventory?",
    correctAnswer: "Gross margin %, turnover, days on hand, and stockout risk with clear thresholds.",
    distractors: [
      "Only total units sold each month because executives prefer simple counts.",
      "A set of random percentages without explaining targets.",
      "Colorful tiles with no numbers, letting the visuals carry the narrative."
    ],
    explanation:
      "Investors need metrics tied to cash and risk. The right mix translates raw data into operational decisions.",
    objectiveTags: ["kpi-storytelling", "investor-readiness"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Presentation: Inventory Decision Dashboard",
    prompt: "Which validation rule protects data integrity before metrics roll up?",
    correctAnswer: "Block negative or zero UnitCost values and missing SKUs at the input stage.",
    distractors: [
      "Format column headings in bold so data entry feels official.",
      "Hide helper columns so teammates focus on the main dashboard.",
      "Merge cells for labels to give the sheet a cleaner look."
    ],
    explanation:
      "Strong validation keeps dirty inputs from reaching analytics, protecting trust during executive reviews.",
    objectiveTags: ["validation-controls", "data-integrity"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Presentation: Inventory Decision Dashboard",
    prompt: "When would INDEX-MATCH still be the right choice over XLOOKUP?",
    correctAnswer: "When the Excel version lacks XLOOKUP but exact-match switching is still required.",
    distractors: [
      "When an approximate match is better than an exact match for lookups.",
      "When volatile formulas are desired to force recalculation on every edit.",
      "When scenarios should be toggled manually instead of by formula."
    ],
    explanation:
      "INDEX-MATCH remains a dependable pattern when newer functions are unavailable, keeping logic precise and auditable.",
    objectiveTags: ["excel-functions", "scenario-planning"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Presentation: Inventory Decision Dashboard",
    prompt: "What belongs in the executive summary of Sarah's dashboard?",
    correctAnswer: "A concise recommendation that ties KPI results to the next decision.",
    distractors: [
      "A paragraph listing every formula used inside the workbook.",
      "Suppressed warnings so the summary looks perfectly clean.",
      "Screenshots from unrelated sheets to show the file's depth."
    ],
    explanation:
      "Executives need conclusions and actions. Summaries translate analytics into confident direction.",
    objectiveTags: ["investor-readiness", "kpi-storytelling"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration & Presentation: Inventory Decision Dashboard",
    prompt: "Which recurring issue most often derails a live dashboard demo?",
    correctAnswer: "A stale AsOfDate and chart ranges that no longer follow the updated tables.",
    distractors: [
      "Too many cell comments explaining the logic.",
      "Worksheet names that are shorter than expected.",
      "Totals formatted in bold instead of regular weight."
    ],
    explanation:
      "Out-of-date timestamps or broken chart links instantly damage credibility. Keeping them current is non-negotiable.",
    objectiveTags: ["data-integrity", "dashboard-design"]
  }
];
const lesson07Questions: Unit07Phase5Question[] = [
  {
    id: "lesson07-q1",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Model Completion, QA, and Presentation",
    prompt: "During peer audit a chart stops updating after new rows arrive. What is the most likely root cause?",
    correctAnswer: "The chart still references a static range instead of the Table's structured reference.",
    distractors: [
      "Too many color themes were applied to the chart this week.",
      "Worksheet protection blocked the chart from refreshing.",
      "Renaming the workbook prevented Excel from finding the data."
    ],
    explanation:
      "Charts must follow tables or named references that expand. Static ranges freeze visuals the moment data grows.",
    objectiveTags: ["excel-automation", "data-integrity"]
  },
  {
    id: "lesson07-q2",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Production Studio: Model Completion, QA, and Presentation",
    prompt: "A SKU lookup fails during QA. What response keeps the model investor-ready?",
    correctAnswer: "Wrap the lookup in IFNA and display a clear 'SKU not found — check the name' message.",
    distractors: [
      "Leave the #N/A error visible so teammates can guess what went wrong.",
      "Convert the error to zero so the dashboard keeps its shape.",
      "Hide the entire row so the failure disappears before review."
    ],
    explanation:
      "Clear, specific error messages guide teammates to fix inputs quickly while preserving transparency.",
    objectiveTags: ["error-handling", "investor-readiness"]
  }
];

export const unit07Phase5QuestionBank: Unit07Phase5Question[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions
];

export function getUnit07Phase5Questions(filter?: Unit07Phase5Filter): Unit07Phase5Question[] {
  const { lessonIds, tags } = filter ?? {};

  return unit07Phase5QuestionBank.filter(question => {
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

export function drawRandomUnit07Phase5Questions(count: number, filter?: Unit07Phase5Filter): Unit07Phase5Question[] {
  const available = getUnit07Phase5Questions(filter);
  if (count >= available.length) {
    return shuffle(available);
  }
  return shuffle(available).slice(0, count);
}

export function toComprehensionCheckItems(questions: Unit07Phase5Question[]): ComprehensionCheckItem[] {
  return questions.map(question => ({
    id: question.id,
    question: question.prompt,
    answers: [question.correctAnswer, ...question.distractors],
    explanation: question.explanation
  }));
}

export function getUnit07Phase5ComprehensionCheckItems(filter?: Unit07Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(getUnit07Phase5Questions(filter));
}

export function drawUnit07Phase5ComprehensionCheckItems(count: number, filter?: Unit07Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(drawRandomUnit07Phase5Questions(count, filter));
}
