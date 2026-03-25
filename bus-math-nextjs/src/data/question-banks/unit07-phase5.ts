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
    lessonTitle: "Lesson 01 - Why Ending Inventory Goes Wrong",
    prompt: "What does the unit's enduring understanding say about ending inventory?",
    correctAnswer: "Ending Inventory equals Beginning Inventory plus Purchases minus Cost of Goods Sold.",
    distractors: [
      "Ending Inventory equals Beginning Inventory minus Purchases plus Cost of Goods Sold.",
      "Ending Inventory equals Sales plus Purchases minus Gross Profit.",
      "Ending Inventory equals Beginning Inventory plus Revenue minus Expenses."
    ],
    explanation:
      "The whole unit centers on one formula: Ending Inventory = Beginning Inventory + Purchases - Cost of Goods Sold. Students need to know what each part means before they compare methods.",
    objectiveTags: ["ending-inventory-formula", "unit-launch"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Why Ending Inventory Goes Wrong",
    prompt: "Which event adds more goods to what Sarah has available to sell this month?",
    correctAnswer: "A new shipment of launch kits bought for future client sales.",
    distractors: [
      "The electricity bill for the store.",
      "A customer's payment for a completed sale.",
      "The owner's monthly rent payment."
    ],
    explanation:
      "Purchases are new inventory coming into the business. Regular bills and customer payments matter, but they do not add goods to the shelf.",
    objectiveTags: ["purchases", "record-classification"]
  },
  {
    id: "lesson01-q3",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Why Ending Inventory Goes Wrong",
    prompt: "Why does a missing purchase record make ending inventory unreliable?",
    correctAnswer: "It leaves goods out of the formula, so the business understates what was available for sale and what may still remain on hand.",
    distractors: [
      "It only changes revenue, not inventory.",
      "It affects taxes only if the business changes methods later.",
      "It matters only when a lender asks for statements."
    ],
    explanation:
      "If purchases are missing, the records understate the total goods available. That means the reported ending inventory and COGS can both be wrong.",
    objectiveTags: ["missing-records", "formula-risk"]
  },
  {
    id: "lesson01-q4",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Why Ending Inventory Goes Wrong",
    prompt: "Why is ending inventory not the same thing as profit?",
    correctAnswer: "Because unsold inventory is still an asset on the shelf until a sale happens and cost moves out of inventory.",
    distractors: [
      "Because profit always stays lower than inventory in every business.",
      "Because inventory becomes profit as soon as the goods are purchased.",
      "Because ending inventory matters only for taxes, not for business decisions."
    ],
    explanation:
      "Inventory can sit on the shelf at month-end as an asset. Profit changes when the business actually sells goods and matches that sale with cost.",
    objectiveTags: ["cogs", "formula-components"]
  },
  {
    id: "lesson01-q5",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Why Ending Inventory Goes Wrong",
    prompt: "A manager cannot explain beginning inventory, purchases, and sales clearly. What is the biggest business risk?",
    correctAnswer: "The ending inventory number becomes hard to trust, which weakens profit analysis, planning, and outside confidence.",
    distractors: [
      "The business automatically loses the right to keep inventory records.",
      "Suppliers stop shipping goods until the formulas are corrected.",
      "The company must close all future stores immediately."
    ],
    explanation:
      "Weak inventory records do not just create bookkeeping confusion. They damage trust in profit, taxes, planning, and any recommendation based on inventory data.",
    objectiveTags: ["business-risk", "investor-readiness"]
  },
  {
    id: "lesson01-q6",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Why Ending Inventory Goes Wrong",
    prompt: "Why does Lesson 1 focus so heavily on the ending inventory formula before teaching FIFO, LIFO, specific identification, or weighted average?",
    correctAnswer: "Students need to understand what number they are defending before they learn different methods for calculating it.",
    distractors: [
      "The methods only matter if the business chooses to ignore the formula later.",
      "The formula is temporary and gets replaced once Excel is introduced.",
      "Method choice matters only for presentation design, not for accounting."
    ],
    explanation:
      "The methods are important, but first students need the big picture: what ending inventory is, what records feed it, and why the number matters.",
    objectiveTags: ["unit-launch", "method-preview"]
  }
];
const lesson02Questions: Unit07Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "Sarah starts the month with 10 kits valued at $180 total. She buys 15 more kits for $300. What is her Goods Available for Sale (GAFS)?",
    correctAnswer: "25 units worth $480, because Beginning Inventory ($180) plus Purchases ($300) equals GAFS.",
    distractors: [
      "25 units worth $300, because only the new purchases count toward what's available.",
      "15 units worth $300, because the beginning inventory was already sold last month.",
      "10 units worth $180, because purchases stay separate until the next accounting period."
    ],
    explanation:
      "Goods Available for Sale combines everything the business could sell: Beginning Inventory + Purchases. The formula gives both units (10 + 15 = 25) and value ($180 + $300 = $480).",
    objectiveTags: ["gafs-calculation", "inventory-formula"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "What is the relationship between physical flow and cost flow?",
    correctAnswer: "Physical flow tracks boxes moving on and off the shelf, while cost flow tracks which dollar amounts move into COGS or stay in inventory.",
    distractors: [
      "Physical flow and cost flow always match exactly—the same boxes equal the same dollars.",
      "Physical flow matters for accounting, but cost flow is only used for tax purposes.",
      "Cost flow determines how many boxes are on the shelf at month-end."
    ],
    explanation:
      "Physical flow is about quantity (boxes, units). Cost flow is about value (dollars). When costs vary across purchases, the same physical sale can produce different cost assignments.",
    objectiveTags: ["physical-flow", "cost-flow", "inventory-concepts"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "Sarah has three layers: 10 units @ $18, 20 units @ $20, and 10 units @ $22. She sells 15 units. Why can't we immediately say exactly what COGS should be?",
    correctAnswer: "Because we don't know which cost layers the 15 sold units came from—they could be from the $18 layer, the $20 layer, or a mix.",
    distractors: [
      "Because COGS is always calculated at the end of the year, not per sale.",
      "Because Sarah hasn't told us the selling price of the units.",
      "Because inventory accounting doesn't track individual sales."
    ],
    explanation:
      "When the same type of item was purchased at different costs, a sale doesn't automatically tell us which cost to assign. That's why businesses need consistent methods like FIFO or LIFO.",
    objectiveTags: ["cost-layers", "cogs-uncertainty"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "If GAFS equals $800 and COGS equals $320, what is Ending Inventory?",
    correctAnswer: "$480, because Ending Inventory = GAFS - COGS ($800 - $320 = $480).",
    distractors: [
      "$1,120, because you add COGS to GAFS to find what's left.",
      "$320, because Ending Inventory always equals COGS.",
      "Cannot be determined without knowing how many units were sold."
    ],
    explanation:
      "The formula is: Ending Inventory = Beginning Inventory + Purchases - COGS, or simply Ending Inventory = GAFS - COGS. The units don't change the dollar calculation.",
    objectiveTags: ["ending-inventory-formula", "inventory-formula"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "Why do inventory 'layers' form in the first place?",
    correctAnswer: "Layers form when a business purchases the same type of item at different costs over time.",
    distractors: [
      "Layers form when items are stacked on different shelves in the warehouse.",
      "Layers form only when a business uses the LIFO method.",
      "Layers form when some items are damaged and others are not."
    ],
    explanation:
      "Each purchase at a new cost creates a new 'layer' of inventory. Even though the items are identical physically, their recorded costs differ based on when they were bought.",
    objectiveTags: ["cost-layers", "inventory-concepts"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "Sarah's GAFS is $736 and she sells 20 units. Her costs range from $18 to $22 per unit. What is the possible range for COGS?",
    correctAnswer: "$360 to $440, because 20 units × $18 = $360 (minimum) and 20 units × $22 = $440 (maximum).",
    distractors: [
      "$736, because COGS always equals GAFS when items are sold.",
      "$400, because you should always use the average cost.",
      "$18 to $22, because that's the cost per unit range."
    ],
    explanation:
      "COGS depends on which layers the sold units came from. The minimum assumes all sold units came from the cheapest layer; the maximum assumes all came from the most expensive layer.",
    objectiveTags: ["cogs-range", "inventory-valuation"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "What happens to the inventory formula when Sarah forgets to record a $250 purchase?",
    correctAnswer: "GAFS is understated by $250, which means either COGS is understated or Ending Inventory is understated (or both are wrong).",
    distractors: [
      "Nothing happens because purchases don't affect the inventory formula.",
      "Only the balance sheet is affected, not the income statement.",
      "COGS automatically increases to compensate for the missing record."
    ],
    explanation:
      "Every purchase feeds the GAFS calculation. If a purchase is missing, the whole formula breaks down—GAFS is too low, and the split between COGS and Ending Inventory cannot be trusted.",
    objectiveTags: ["missing-records", "formula-integrity"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "Why does this lesson avoid teaching FIFO and LIFO rules explicitly?",
    correctAnswer: "Students need to understand WHY cost assignment matters before learning the formal rules for HOW to assign costs.",
    distractors: [
      "FIFO and LIFO are no longer used in modern accounting.",
      "The lesson ran out of time to cover the methods.",
      "FIFO and LIFO only matter for tax purposes, not for understanding inventory."
    ],
    explanation:
      "Lesson 2 builds the foundation: GAFS, cost layers, and the range of possible COGS values. Once students see why the answer isn't obvious, Lesson 3 introduces FIFO and LIFO as the formal rules that solve the puzzle.",
    objectiveTags: ["lesson-design", "inventory-concepts"]
  },
  {
    id: "lesson02-q9",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "A business has 40 units available for sale worth $800 total. They sell 30 units. If COGS could be anywhere from $540 to $660, what does this mean for Ending Inventory?",
    correctAnswer: "Ending Inventory could range from $140 to $260, because higher COGS means lower Ending Inventory ($800 - $660 = $140) and lower COGS means higher Ending Inventory ($800 - $540 = $260).",
    distractors: [
      "Ending Inventory is fixed at $200 because 10 units remain.",
      "Ending Inventory equals COGS, so it's also between $540 and $660.",
      "Ending Inventory is $800 regardless of COGS."
    ],
    explanation:
      "GAFS must split between COGS and Ending Inventory. When COGS has a range, Ending Inventory has the inverse range. They always sum to GAFS.",
    objectiveTags: ["cogs-range", "ending-inventory-formula"]
  },
  {
    id: "lesson02-q10",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Inventory Cost Flow Foundations",
    prompt: "Sarah shows her inventory records to a potential investor. Why might the investor ask which inventory valuation method she uses?",
    correctAnswer: "Because different methods can produce different COGS and Ending Inventory numbers from the exact same transactions, which affects reported profit.",
    distractors: [
      "Investors are just curious about accounting rules.",
      "The method determines whether Sarah can sell the inventory at all.",
      "Investors want to make sure Sarah uses the same method as her competitors."
    ],
    explanation:
      "Sophisticated investors know that FIFO, LIFO, and other methods can change profit by hundreds or thousands of dollars. Understanding the method helps them interpret the numbers correctly.",
    objectiveTags: ["investor-readiness", "method-choice"]
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
