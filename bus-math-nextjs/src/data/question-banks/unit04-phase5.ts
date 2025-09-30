export type Unit04LessonId =
  | "lesson01"
  | "lesson02"
  | "lesson03"
  | "lesson04"
  | "lesson05"
  | "lesson06"
  | "lesson07";

export interface Unit04Phase5Question {
  id: string;
  lessonId: Unit04LessonId;
  lessonTitle: string;
  prompt: string;
  correctAnswer: string;
  distractors: string[];
  explanation: string;
  objectiveTags: string[];
}

export interface Unit04Phase5Filter {
  lessonIds?: Unit04LessonId[];
  tags?: string[];
}

export interface ComprehensionCheckItem {
  id: string;
  question: string;
  answers: string[];
  explanation: string;
}

const lesson01Questions: Unit04Phase5Question[] = [
  {
    id: "lesson01-q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Data-Driven Café: Introduction to Statistical Analysis",
    prompt: "What is the main purpose of using descriptive statistics in the café project?",
    correctAnswer: "To understand the basic features and patterns of the sales data through summary measures.",
    distractors: [
      "To predict future sales with complete accuracy and eliminate all business uncertainty.",
      "To create a new menu for the café based solely on statistical formulas.",
      "To track employee work hours and calculate payroll for the entire team."
    ],
    explanation: "Descriptive statistics like mean, median, and mode help summarize and understand the main characteristics of a dataset, which is the first step in analysis.",
    objectiveTags: ["descriptive-statistics", "data-analysis-foundations"]
  },
  {
    id: "lesson01-q2",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01 - Data-Driven Café: Introduction to Statistical Analysis",
    prompt: "Why is it important to specialize in a focus area like 'Beverage Mix Optimization' or 'Pastry Inventory Management'?",
    correctAnswer: "To make the complex problem more manageable and allow for deeper focused analysis.",
    distractors: [
      "Because the manager said so and following instructions without questioning is important.",
      "To make the project more complicated and demonstrate advanced statistical techniques.",
      "To avoid looking at the full dataset which could reveal inconvenient patterns."
    ],
    explanation: "Breaking a large, complex problem into smaller, specialized areas allows teams to conduct a more focused and in-depth analysis rather than being overwhelmed by too much data at once.",
    objectiveTags: ["problem-decomposition", "analytical-focus"]
  }
];

const lesson02Questions: Unit04Phase5Question[] = [
  {
    id: "lesson02-q1",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "A café manager discovers that their POS system exports data with product names like ' Latte', 'Latte ', and 'LATTE' all appearing as separate items. What Excel function should they use FIRST to fix this problem?",
    correctAnswer: "TRIM to remove extra spaces, then standardize capitalization across entries.",
    distractors: [
      "Remove Duplicates to eliminate identical entries before addressing format issues.",
      "Text-to-Columns to separate the data into component parts for easier editing.",
      "VLOOKUP to find correct product names and replace the incorrect entries."
    ],
    explanation: "The TRIM function removes leading and trailing spaces, which is the first step before standardizing capitalization. This ensures 'Latte', ' Latte', and 'Latte ' all become 'Latte' before addressing case differences.",
    objectiveTags: ["data-cleaning", "text-functions", "excel-automation"]
  },
  {
    id: "lesson02-q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "Sarah's client gives her a dataset where timestamps appear as '2023-10-15T14:30:22'. She needs separate Date and Time columns for her analysis. Which Excel tool would be most efficient?",
    correctAnswer: "Text-to-Columns using 'T' as the delimiter to split into Date and Time.",
    distractors: [
      "Find and Replace to remove the 'T' character without separating the data.",
      "Manual copy and paste for each entry to create separate columns by hand.",
      "Delete the entire timestamp column since it cannot be separated efficiently."
    ],
    explanation: "Text-to-Columns can split the timestamp at the 'T' delimiter, automatically creating separate Date and Time columns in one operation. This is much more efficient than manual methods.",
    objectiveTags: ["data-cleaning", "text-to-columns", "date-handling"]
  },
  {
    id: "lesson02-q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "You're analyzing sales data and find that removing duplicates reduced your dataset from 15,000 to 14,850 transactions. What should your next step be?",
    correctAnswer: "Investigate why 150 duplicates existed to prevent future data quality issues.",
    distractors: [
      "Assume the POS system is working correctly and continue with current analysis.",
      "Add the duplicates back to avoid losing data that might be important later.",
      "Report the issue to IT but continue with current analysis without investigation."
    ],
    explanation: "Finding 150 duplicate transactions (1% of data) suggests a systematic problem with the data collection process. A professional analyst investigates root causes to prevent recurring data quality issues.",
    objectiveTags: ["data-quality", "root-cause-analysis", "professional-standards"]
  },
  {
    id: "lesson02-q4",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "A business analyst notices that their cleaned dataset still shows unusual patterns: 'Coffee' sales spike dramatically at 3 AM on weekends. What's the most likely explanation?",
    correctAnswer: "The timestamp cleaning process may have errors that need validation against business logic.",
    distractors: [
      "The café is busier at 3 AM than during normal hours due to customer preferences.",
      "Coffee is more popular on weekends which explains the unusual timing pattern.",
      "The cleaning process worked perfectly and this represents actual customer behavior."
    ],
    explanation: "Unusual patterns like 3 AM sales spikes often indicate data cleaning errors, possibly in timestamp processing or timezone conversions. Always validate cleaned data against logical business patterns.",
    objectiveTags: ["data-validation", "logical-checks", "error-detection"]
  },
  {
    id: "lesson02-q5",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "Which of the following scenarios would cause the MOST severe business impact if data cleaning is skipped?",
    correctAnswer: "Inventory system ordering double the needed pastries due to duplicate sales entries.",
    distractors: [
      "Customer names having inconsistent capitalization in the database without affecting analysis.",
      "Product descriptions having extra spaces that don't affect calculations or summaries.",
      "Date formats being displayed differently in reports but representing correct values."
    ],
    explanation: "Duplicate sales entries directly impact financial calculations and inventory decisions. Ordering double the pastries leads to waste, spoilage, and direct financial loss, making this the most severe business impact.",
    objectiveTags: ["business-impact", "data-quality", "decision-making"]
  },
  {
    id: "lesson02-q6",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "You're preparing café data for statistical analysis and discover entries like 'Iced Coffee', 'IcedCoffee', 'Iced_Coffee', and 'ICED COFFEE'. How should a professional data analyst handle this?",
    correctAnswer: "Standardize all variations to one format (e.g., 'Iced Coffee') and document the decision.",
    distractors: [
      "Keep all variations to preserve original data integrity and avoid data manipulation.",
      "Remove all entries that don't match the most common format to simplify the dataset.",
      "Use only the first occurrence and delete the rest without standardization rules."
    ],
    explanation: "Professional data cleaning requires standardization to ensure accurate analysis while documenting decisions for transparency. All variations should be converted to one standard format with clear documentation.",
    objectiveTags: ["data-standardization", "professional-documentation", "data-cleaning"]
  },
  {
    id: "lesson02-q7",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "TechStart Solutions' client provides transaction data where amounts appear as '$4.50', '4.5', '4.50', and '$04.50'. What's the best approach for analysis?",
    correctAnswer: "Convert all to consistent number format (4.50) removing symbols and leading zeros.",
    distractors: [
      "Leave as text format to preserve original appearance and avoid data transformation.",
      "Use only entries that are already in number format to avoid conversion errors.",
      "Replace all with the most common format without removing currency symbols first."
    ],
    explanation: "For numerical analysis, amounts must be converted to a consistent number format. Removing currency symbols and standardizing decimal places ensures calculations work correctly while maintaining data integrity.",
    objectiveTags: ["number-formatting", "data-transformation", "excel-functions"]
  },
  {
    id: "lesson02-q8",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "After cleaning a large dataset, what's the most important validation step before beginning analysis?",
    correctAnswer: "Compare key statistics (totals, counts, ranges) between original and cleaned data to ensure integrity.",
    distractors: [
      "Check that the file size has decreased after cleaning to confirm efficiency.",
      "Verify that all text entries use the same capitalization for consistency.",
      "Confirm that the number of columns has increased for additional analysis fields."
    ],
    explanation: "Data integrity validation is crucial. Comparing key statistics ensures the cleaning process didn't introduce errors or accidentally remove legitimate data. This professional practice prevents analysis based on corrupted cleaned data.",
    objectiveTags: ["data-validation", "integrity-checks", "professional-standards"]
  },
  {
    id: "lesson02-q9",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "The café manager asks: 'How do I know if my cleaned data is analysis-ready?' What's the best professional response?",
    correctAnswer: "Clean data has consistent formats, no duplicates, standardized categories, and passes validation checks against business logic.",
    distractors: [
      "All text is properly capitalized and there are no spaces in any entries.",
      "The data looks neat and organized in the spreadsheet with good colors.",
      "Excel can open the file without error messages or warning dialogues appearing."
    ],
    explanation: "Analysis-ready data meets multiple professional standards: consistent formatting, no duplicates, standardized categories, and logical validation. This comprehensive definition ensures reliable analysis results.",
    objectiveTags: ["data-readiness", "quality-standards", "professional-communication"]
  },
  {
    id: "lesson02-q10",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02 - Data Cleaning: Excel Techniques for Real-World Datasets",
    prompt: "Sarah learns that 60-80% of data analysts' time is spent on cleaning data. Why is this such a critical skill in modern business?",
    correctAnswer: "Real-world data is inherently messy, and business decisions require reliable, clean data for accuracy.",
    distractors: [
      "Data cleaning is the most difficult part of analysis work to learn.",
      "Cleaning data impresses clients more than analysis results and recommendations do.",
      "It's a requirement for all data analyst certifications and professional exams."
    ],
    explanation: "Data cleaning is critical because real-world data from various sources (POS systems, sensors, forms) is inherently messy. Business decisions based on dirty data can be catastrophically wrong, making cleaning a crucial professional skill.",
    objectiveTags: ["career-readiness", "professional-context", "data-quality"]
  }
];

const lesson03Questions: Unit04Phase5Question[] = [
  {
    id: "lesson03-q1",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "Sarah calculates that the café's weekend transactions have a mean of $8.50 and a standard deviation of $3.20. A transaction of $18.10 has what z-score?",
    correctAnswer: "3.0, indicating a significant outlier requiring investigation since z > 2.",
    distractors: [
      "2.5, which falls within normal variation and requires no further action.",
      "1.8, suggesting the transaction is unusual but not statistically significant.",
      "4.2, which would indicate an error in the standard deviation calculation."
    ],
    explanation: "z = (18.10 - 8.50) / 3.20 = 9.60 / 3.20 = 3.0. This is a significant outlier requiring investigation since z > 2.",
    objectiveTags: ["z-scores", "outlier-detection", "statistical-calculations"]
  },
  {
    id: "lesson03-q2",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "In Excel's Analysis ToolPak, which tool generates mean, median, standard deviation, and other key statistics in one comprehensive report?",
    correctAnswer: "Descriptive Statistics, which produces a comprehensive summary report of central tendency measures.",
    distractors: [
      "Regression Analysis, which focuses on relationships between variables rather than summaries.",
      "Histogram, which shows frequency distribution but doesn't calculate summary statistics.",
      "Sampling, which selects subsets of data rather than computing statistical summaries."
    ],
    explanation: "Descriptive Statistics provides a comprehensive summary including all central tendency and variability measures that data analysts need for professional reports.",
    objectiveTags: ["excel-analysis-toolpak", "descriptive-statistics", "professional-reporting"]
  },
  {
    id: "lesson03-q3",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "Sarah finds a $0.01 transaction in the café data with a z-score of -2.8. What should she do with this outlier?",
    correctAnswer: "Investigate as a likely data entry error and consider removing it from analysis.",
    distractors: [
      "Include it in analysis since all data is valuable regardless of statistical significance.",
      "Ignore z-scores for small amounts since they don't affect overall business patterns.",
      "Change the transaction amount to match the mean to maintain statistical balance."
    ],
    explanation: "A z-score of -2.8 indicates this is statistically unusual. A $0.01 transaction doesn't make business sense for any café item, suggesting a data entry error that should be investigated and likely removed.",
    objectiveTags: ["outlier-handling", "data-quality", "business-judgment"]
  },
  {
    id: "lesson03-q4",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "The café's transaction data shows: Beverages (mean=$4.20), Food (mean=$9.80), Pastries (mean=$3.50). What insight can Sarah provide to management?",
    correctAnswer: "Food items generate the highest average revenue per transaction and should be promoted strategically.",
    distractors: [
      "All categories perform equally and need no changes in marketing or operations.",
      "Pastries are overpriced and should be eliminated from the menu immediately.",
      "Only beverage sales matter for profitability so other categories can be ignored."
    ],
    explanation: "Food items generate more than double the revenue of other categories. Sarah should recommend promoting food items, analyzing their profit margins, and potentially expanding food offerings during peak hours.",
    objectiveTags: ["category-analysis", "business-insights", "strategic-recommendations"]
  },
  {
    id: "lesson03-q5",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "When Sarah uses =AVERAGEIF(E:E,'Beverage',D:D) in Excel, what is she calculating?",
    correctAnswer: "The average transaction amount for all beverage purchases in the dataset.",
    distractors: [
      "The total number of beverage transactions recorded in the data file.",
      "The highest beverage price in the dataset across all transaction records.",
      "The median beverage transaction amount excluding outliers from the calculation."
    ],
    explanation: "AVERAGEIF calculates the mean of values in column D where the corresponding value in column E equals 'Beverage'. This gives the average spending per beverage transaction.",
    objectiveTags: ["excel-functions", "averageif", "category-analysis"]
  },
  {
    id: "lesson03-q6",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "Sarah discovers that removing outliers changes the mean from $8.50 to $7.20. What does this tell her about the outliers?",
    correctAnswer: "The outliers were unusually high values that inflated the original mean significantly.",
    distractors: [
      "The outliers were unusually low values that reduced the original mean below normal.",
      "The outliers had no impact on central tendency measures in the analysis.",
      "The analysis is incorrect since means shouldn't change when removing data points."
    ],
    explanation: "When removing outliers decreases the mean significantly, it indicates the outliers were unusually high values pulling the average upward. This is why professionals also report median, which is less affected by outliers.",
    objectiveTags: ["outlier-impact", "central-tendency", "statistical-interpretation"]
  },
  {
    id: "lesson03-q7",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "A professional data consultant needs to explain outliers to a café manager who isn't trained in statistics. What's the best approach?",
    correctAnswer: "Use business context: 'These are transactions that don't fit typical customer patterns and need investigation'",
    distractors: [
      "Show the z-score formula and mathematical calculations to demonstrate technical expertise.",
      "List all statistical measures and let the manager decide which ones are important.",
      "Focus only on the mean and ignore outliers entirely to simplify the discussion."
    ],
    explanation: "Effective consultants translate statistical concepts into business language. Focusing on business impact and actionable insights helps non-technical stakeholders understand and act on findings.",
    objectiveTags: ["professional-communication", "stakeholder-management", "business-translation"]
  },
  {
    id: "lesson03-q8",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "Sarah finds that 90% of café transactions fall between $2-15, but 5% are above $20. What business strategy should she recommend?",
    correctAnswer: "Investigate high-value transactions to understand customer segments and create targeted promotions.",
    distractors: [
      "Remove all transactions above $20 as statistical errors that distort analysis.",
      "Focus only on the 90% majority and ignore outliers in strategic planning.",
      "Increase all menu prices to match the high-value transactions immediately."
    ],
    explanation: "High-value transactions might represent catering orders, group purchases, or premium customers. Understanding these segments could lead to new revenue opportunities through targeted marketing or expanded catering services.",
    objectiveTags: ["business-strategy", "customer-segmentation", "revenue-optimization"]
  },
  {
    id: "lesson03-q9",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "In statistical analysis for business, why is standard deviation more useful than just knowing the mean?",
    correctAnswer: "Standard deviation shows customer behavior variability, helping predict demand consistency for planning.",
    distractors: [
      "Standard deviation is easier to calculate than other measures of spread.",
      "Standard deviation always equals the mean in good datasets with clean data.",
      "Standard deviation is only used for academic purposes not business applications."
    ],
    explanation: "Standard deviation reveals whether customers have consistent spending patterns (low std dev) or highly variable behavior (high std dev). This impacts inventory planning, staffing, and pricing strategies.",
    objectiveTags: ["variability", "business-planning", "statistical-application"]
  },
  {
    id: "lesson03-q10",
    lessonId: "lesson03",
    lessonTitle: "Lesson 03 - Descriptive Statistics and Outlier Detection",
    prompt: "Sarah's final recommendation states: 'Based on z-score analysis, we identified 3 data errors and 2 legitimate catering orders.' This demonstrates what professional skill?",
    correctAnswer: "Combining statistical analysis with business judgment to make actionable recommendations that drive decisions.",
    distractors: [
      "Using complex formulas to impress clients with technical knowledge and expertise.",
      "Applying statistics without considering business context or practical implications.",
      "Focusing on mathematical accuracy over practical insights that stakeholders can use."
    ],
    explanation: "The best data consultants combine statistical rigor with business understanding. Sarah's ability to distinguish between errors and legitimate business events shows professional-level analytical thinking.",
    objectiveTags: ["professional-judgment", "actionable-insights", "business-acumen"]
  }
];

const lesson04Questions: Unit04Phase5Question[] = [
  {
    id: "lesson04-q1",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Charts: Professional Data Visualization",
    prompt: "Looking at this chart showing café revenue by hour, what business decision should the manager make about staffing?",
    correctAnswer: "Schedule 2 additional staff from 10 AM - 12 PM to handle the $4,200 revenue peak effectively.",
    distractors: [
      "Reduce staff during all hours since revenue is declining after noon each day.",
      "Keep staffing constant throughout the day regardless of revenue patterns shown.",
      "Only schedule extra staff during the 8 AM opening hour to greet customers."
    ],
    explanation: "The chart shows peak revenue of $4,200 between 10 AM - 12 PM. This high-revenue period requires adequate staffing to maintain service quality and maximize sales potential. Strategic staffing during peaks while reducing during valleys optimizes labor costs.",
    objectiveTags: ["chart-interpretation", "business-decisions", "staffing-optimization"]
  },
  {
    id: "lesson04-q2",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Charts: Professional Data Visualization",
    prompt: "Sarah creates a pie chart showing that beverages represent 45% of total café revenue, food 35%, and desserts 20%. What inventory strategy should this drive?",
    correctAnswer: "Prioritize beverage inventory and supplier relationships since they drive nearly half of revenue.",
    distractors: [
      "Focus equally on all categories since they all contribute to revenue in some way.",
      "Eliminate desserts since they have the lowest percentage of total revenue.",
      "Order the same quantity of all items regardless of revenue contribution shown."
    ],
    explanation: "Since beverages generate 45% of revenue, they should receive priority in inventory planning, supplier negotiations, and quality control. The highest revenue contributors deserve the most attention to ensure availability and quality.",
    objectiveTags: ["inventory-management", "revenue-analysis", "strategic-planning"]
  },
  {
    id: "lesson04-q3",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Charts: Professional Data Visualization",
    prompt: "In Excel, Sarah adds a linear trendline to her scatter plot showing advertising spend vs. weekly sales. The R-squared value is 0.82. What does this tell her about the relationship?",
    correctAnswer: "Strong relationship (82% of sales variation explained by advertising) - reliable for forecasting purposes.",
    distractors: [
      "Weak relationship (only 18% correlation) - advertising doesn't affect sales significantly.",
      "Perfect relationship - advertising guarantees sales increases in all situations.",
      "No relationship exists between advertising and sales based on this R-squared value."
    ],
    explanation: "R-squared of 0.82 means 82% of sales variation can be explained by advertising spend, indicating a strong relationship. Values above 0.7 are generally considered reliable for business forecasting and decision-making.",
    objectiveTags: ["trendlines", "r-squared", "forecasting", "correlation-analysis"]
  },
  {
    id: "lesson04-q4",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Charts: Professional Data Visualization",
    prompt: "The café manager looks at Sarah's line chart and says, 'I see customer traffic drops 30% at 2 PM every day. Should we close early?' How should Sarah respond using data visualization principles?",
    correctAnswer: "Create additional charts showing revenue per customer and operational costs to provide complete context.",
    distractors: [
      "Agree immediately since the chart shows declining traffic without further analysis.",
      "Dismiss the manager's concern since one chart shows the full picture already.",
      "Recommend closing based solely on traffic patterns without cost analysis."
    ],
    explanation: "Good data visualization tells complete stories. Traffic decline alone doesn't justify closing - Sarah needs to analyze revenue per customer, fixed costs, and profitability during low-traffic periods to make informed recommendations.",
    objectiveTags: ["comprehensive-analysis", "business-judgment", "data-storytelling"]
  },
  {
    id: "lesson04-q5",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Charts: Professional Data Visualization",
    prompt: "Sarah builds a dashboard combining 4 charts: hourly sales, product mix, seasonal trends, and cost breakdown. What makes this more valuable than individual charts?",
    correctAnswer: "Reveals connections between metrics and tells a complete business story for strategic decision-making.",
    distractors: [
      "Looks more impressive to clients but provides the same information as separate charts.",
      "Uses more advanced Excel features but offers no additional business value to users.",
      "Combines unrelated data that confuses rather than clarifies business insights."
    ],
    explanation: "Dashboards reveal relationships between metrics that individual charts miss. For example, seasonal trends might explain product mix changes, while cost breakdown connects to pricing strategy. Integration creates strategic business intelligence.",
    objectiveTags: ["dashboard-design", "integrated-analysis", "strategic-intelligence"]
  },
  {
    id: "lesson04-q6",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Charts: Professional Data Visualization",
    prompt: "When creating charts for business executives, which formatting approach demonstrates professional data visualization standards?",
    correctAnswer: "Clear titles stating business insights, professional colors, minimal gridlines, and data labels only where they add value.",
    distractors: [
      "Bright colors, 3D effects, and decorative elements to make charts more visually appealing.",
      "Maximum detail with every possible data label and chart element displayed prominently.",
      "Generic titles and default Excel formatting to save time in chart creation."
    ],
    explanation: "Professional charts prioritize clarity and insight over decoration. Clear titles, appropriate colors, strategic use of labels, and minimal visual clutter help busy executives quickly understand and act on data insights.",
    objectiveTags: ["professional-standards", "chart-formatting", "executive-communication"]
  },
  {
    id: "lesson04-q7",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Charts: Professional Data Visualization",
    prompt: "Sarah discovers that her café charts reveal a 15% revenue increase following weather-related advertising campaigns. What Excel feature would best help her forecast this relationship for future campaigns?",
    correctAnswer: "Scatter plot with linear trendline showing campaign spend vs. revenue increase with R-squared.",
    distractors: [
      "Pie chart showing proportion of revenue from different advertising types used.",
      "Column chart comparing campaign costs across different months of operation.",
      "Line chart showing general revenue trends over time without campaign data."
    ],
    explanation: "Scatter plots with trendlines are specifically designed to show relationships between two variables (advertising spend and revenue) and provide forecasting capability through the trendline equation and R-squared value.",
    objectiveTags: ["scatter-plots", "forecasting", "relationship-analysis"]
  },
  {
    id: "lesson04-q8",
    lessonId: "lesson04",
    lessonTitle: "Lesson 04 - Excel Charts: Professional Data Visualization",
    prompt: "The café wants to reduce food waste from 8% to 3%. Which combination of Excel charts would best support Sarah's waste reduction strategy?",
    correctAnswer: "Line chart for daily waste trends + Column chart comparing waste by menu item + Pie chart showing waste cost breakdown.",
    distractors: [
      "Single pie chart showing current waste percentages by category without trends.",
      "Line chart showing only total monthly waste trends without item details.",
      "Column chart comparing waste to industry averages without internal breakdown."
    ],
    explanation: "Waste reduction requires multi-dimensional analysis: trends over time (line chart), item-specific patterns (column chart), and cost impact (pie chart). This combination reveals when, what, and how much waste occurs, enabling targeted interventions.",
    objectiveTags: ["multi-dimensional-analysis", "waste-reduction", "chart-selection"]
  }
];

const lesson05Questions: Unit04Phase5Question[] = [
  {
    id: "lesson05-q1",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Forecasting: FORECAST.LINEAR and Automation",
    prompt: "Why do structured references make forecasts more reliable as data grows?",
    correctAnswer: "They auto-expand with new rows and keep formulas current without manual updates.",
    distractors: [
      "They calculate faster than regular ranges in all Excel versions.",
      "They prevent all errors permanently regardless of data quality issues.",
      "They color code cells automatically to improve visual appearance."
    ],
    explanation: "Tables expand automatically, so formulas like Sales[Units] always include the latest data.",
    objectiveTags: ["structured-references", "forecast-automation", "excel-tables"]
  },
  {
    id: "lesson05-q2",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Forecasting: FORECAST.LINEAR and Automation",
    prompt: "Which formula creates a Promo-Adjusted regression by excluding promo days?",
    correctAnswer: "FORECAST.LINEAR([@Week], FILTER(Sales[Units], Sales[PromoFlag]=0), FILTER(Sales[Week], Sales[PromoFlag]=0))",
    distractors: [
      "FORECAST.LINEAR([@Week], Sales[Units], Sales[Week]) + 10 for adjustment",
      "AVERAGE(Sales[Units]) to get typical non-promotional performance",
      "SUMIF(Sales[PromoFlag], 0, Sales[Units]) to calculate baseline total"
    ],
    explanation: "Filtering both Units and Week by PromoFlag=0 creates a regression on non-promo history.",
    objectiveTags: ["forecast-linear", "filter-functions", "promo-adjustment"]
  },
  {
    id: "lesson05-q3",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Forecasting: FORECAST.LINEAR and Automation",
    prompt: "What's the best way to handle missing MenuID lookups in investor-facing sheets?",
    correctAnswer: "Use XLOOKUP with an if_not_found default like \"Unknown\" for graceful handling.",
    distractors: [
      "Hide errors by changing font color to white so they're not visible.",
      "Delete rows with missing IDs to clean up the dataset completely.",
      "Replace formulas with static text to avoid lookup errors entirely."
    ],
    explanation: "Graceful defaults preserve output quality and highlight issues without crashing the model.",
    objectiveTags: ["xlookup", "error-handling", "investor-readiness"]
  },
  {
    id: "lesson05-q4",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Forecasting: FORECAST.LINEAR and Automation",
    prompt: "Which validation is MOST critical before presenting a forecast?",
    correctAnswer: "Flag stale dates and show count of outliers in an Audit Panel for transparency.",
    distractors: [
      "Check cell background colors to ensure consistent formatting throughout.",
      "Bold all totals to make them stand out in the presentation.",
      "Freeze the header row for easier navigation during review."
    ],
    explanation: "Investors need to see current, clean data and that issues are known and controlled.",
    objectiveTags: ["validation", "audit-panel", "data-quality-control"]
  },
  {
    id: "lesson05-q5",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Forecasting: FORECAST.LINEAR and Automation",
    prompt: "A scenario toggle switches Baseline vs. Promo-Adjusted. Which function is ideal?",
    correctAnswer: "SWITCH or IFS on a named Scenario cell for clear logical routing.",
    distractors: [
      "VLOOKUP with approximate match to find closest scenario automatically.",
      "ROUNDUP to adjust numbers based on scenario selection.",
      "TEXTSPLIT to separate scenario names into component parts."
    ],
    explanation: "SWITCH/IFS route logic clearly based on the chosen scenario.",
    objectiveTags: ["scenario-modeling", "switch-function", "dynamic-formulas"]
  },
  {
    id: "lesson05-q6",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Forecasting: FORECAST.LINEAR and Automation",
    prompt: "Which statement best describes SUMPRODUCT in this unit?",
    correctAnswer: "It filters and aggregates across multiple criteria for segmented views of data.",
    distractors: [
      "It replaces all charting needs by creating visual representations automatically.",
      "It turns errors into zeros to clean up formula results automatically.",
      "It formats currencies automatically based on regional settings."
    ],
    explanation: "SUMPRODUCT is a flexible way to compute filtered totals (e.g., Drinks this week).",
    objectiveTags: ["sumproduct", "multi-criteria-analysis", "aggregation"]
  },
  {
    id: "lesson05-q7",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Forecasting: FORECAST.LINEAR and Automation",
    prompt: "Why add plain-language notes near inputs?",
    correctAnswer: "They make assumptions visible and auditable for transparency and trust.",
    distractors: [
      "They speed up Excel recalculation by optimizing formula processing.",
      "They hide complexity from teachers during project evaluation.",
      "They enable macros to run automatically when the file opens."
    ],
    explanation: "Notes communicate assumptions and limits—crucial for trust and handoffs.",
    objectiveTags: ["documentation", "transparency", "professional-communication"]
  },
  {
    id: "lesson05-q8",
    lessonId: "lesson05",
    lessonTitle: "Lesson 05 - Advanced Forecasting: FORECAST.LINEAR and Automation",
    prompt: "Your forecast still shows #N/A. What's the first fix to try?",
    correctAnswer: "Wrap the expression in IFERROR and check the upstream lookup for issues.",
    distractors: [
      "Change the cell to text format to suppress the error display.",
      "Delete the workbook and start over from the beginning.",
      "Decrease zoom to 90% to make the error less noticeable."
    ],
    explanation: "IFERROR prevents visible breaks; then trace the source (often a missing key).",
    objectiveTags: ["error-troubleshooting", "iferror", "formula-debugging"]
  }
];

const lesson06Questions: Unit04Phase5Question[] = [
  {
    id: "lesson06-q1",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "Best pattern for scenario switching by name?",
    correctAnswer: "Driver table + XLOOKUP exact-match with IFNA for graceful error handling.",
    distractors: [
      "Three separate scenario sheets with copied formulas requiring manual updates.",
      "HLOOKUP with approximate match to find close scenario names automatically.",
      "Manual retyping of assumptions for each scenario change during analysis."
    ],
    explanation: "Exact-match prevents silent wrong matches; IFNA handles missing names safely.",
    objectiveTags: ["scenario-switching", "xlookup", "dashboard-design"]
  },
  {
    id: "lesson06-q2",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "Chart ranges break when rows are added. What fixes it?",
    correctAnswer: "Use Table[Column] structured references feeding outputs for dynamic expansion.",
    distractors: [
      "Extend A2:A50 manually each week when new data is added.",
      "Paste values onto a chart sheet to freeze the data permanently.",
      "Turn on iterative calculation to update ranges automatically."
    ],
    explanation: "Structured references auto-expand with tables, keeping visuals stable.",
    objectiveTags: ["chart-maintenance", "structured-references", "dynamic-ranges"]
  },
  {
    id: "lesson06-q3",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "A scenario name is misspelled. What should the model show?",
    correctAnswer: "A clear message via IFNA/IFERROR and a validation flag to guide correction.",
    distractors: [
      "Zeros everywhere with no explanation of what went wrong.",
      "A random scenario's numbers without any warning to the user.",
      "A blank dashboard with all cells displaying nothing at all."
    ],
    explanation: "Graceful errors protect trust and guide fixes.",
    objectiveTags: ["error-handling", "user-guidance", "dashboard-reliability"]
  },
  {
    id: "lesson06-q4",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "Which KPI set supports an investor decision for the café?",
    correctAnswer: "Runway months, gross margin, daily traffic, cash coverage for operational sustainability.",
    distractors: [
      "Font size, color theme, number of tabs for visual presentation.",
      "Sheet protection, hidden rows, merged cells for security features.",
      "Total characters in formulas to measure model complexity."
    ],
    explanation: "KPI thresholds connect model outputs to business choices.",
    objectiveTags: ["kpi-selection", "investor-metrics", "business-intelligence"]
  },
  {
    id: "lesson06-q5",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "What is a sign of fragile integration?",
    correctAnswer: "Charts pointing to static ranges like $A$2:$A$50 that don't expand.",
    distractors: [
      "Inputs documented next to assumptions for clarity and transparency.",
      "Validation panel showing stale dates that need to be updated.",
      "Executive summary linked to outputs using cell references."
    ],
    explanation: "Static ranges break as data grows.",
    objectiveTags: ["model-fragility", "best-practices", "maintenance-issues"]
  },
  {
    id: "lesson06-q6",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "Why use exact match instead of approximate match?",
    correctAnswer: "Prevents wrong scenario matches and silent errors that corrupt analysis results.",
    distractors: [
      "It recalculates faster in all cases regardless of data size.",
      "It reduces the number of columns needed in the lookup table.",
      "It makes charts look nicer with better color schemes automatically."
    ],
    explanation: "Decision-ready dashboards need correctness first.",
    objectiveTags: ["lookup-accuracy", "exact-match", "error-prevention"]
  },
  {
    id: "lesson06-q7",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "Which statement defines \"investor-ready\" here?",
    correctAnswer: "Clear, reliable, auditable outputs with visible validation showing data quality.",
    distractors: [
      "A single sheet with large fonts for easy reading only.",
      "No formulas, values only to prevent formula viewing.",
      "All assumptions hidden from view to protect proprietary methods."
    ],
    explanation: "Clarity, reliability, and auditability build trust.",
    objectiveTags: ["investor-readiness", "quality-standards", "professional-presentation"]
  },
  {
    id: "lesson06-q8",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "Which fallback communicates best during live Q&A?",
    correctAnswer: "IFERROR(calc, \"Check Inputs\") next to a red validation badge for clear guidance.",
    distractors: [
      "#N/A errors across the page without any explanation provided.",
      "Cell comments only that require hovering to read the message.",
      "Hidden sheets with notes that aren't visible during presentations."
    ],
    explanation: "Students should show issues clearly and guide next steps.",
    objectiveTags: ["live-presentation", "error-communication", "user-experience"]
  },
  {
    id: "lesson06-q9",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "When is INDEX-MATCH preferred?",
    correctAnswer: "When XLOOKUP isn't available or compatibility is required with older Excel versions.",
    distractors: [
      "When approximate match is desired for flexible scenario matching.",
      "When there is only one scenario and exact match isn't needed.",
      "When you need to merge cells for better visual presentation."
    ],
    explanation: "INDEX-MATCH is the classic exact-match combo.",
    objectiveTags: ["index-match", "excel-compatibility", "lookup-alternatives"]
  },
  {
    id: "lesson06-q10",
    lessonId: "lesson06",
    lessonTitle: "Lesson 06 - Integration and Dashboards: Scenario Modeling",
    prompt: "Best way to prove chart stability?",
    correctAnswer: "Add rows to the table and watch visuals update automatically without manual intervention.",
    distractors: [
      "Screenshot the chart to show what it looked like at one point in time.",
      "Describe it with text only without demonstrating actual functionality.",
      "Hide all the source data so reviewers can't see the underlying structure."
    ],
    explanation: "Demonstrating dynamic updates shows real readiness.",
    objectiveTags: ["chart-testing", "dynamic-demonstration", "quality-assurance"]
  }
];

const lesson07Questions: Unit04Phase5Question[] = [
  {
    id: "lesson07-q1",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Investor Readiness and Audit: Professional Standards",
    prompt: "Lookup returns #N/A on a new scenario. Best fix?",
    correctAnswer: "Wrap in IFNA with a clear message to guide users toward resolution.",
    distractors: [
      "Hide the row so the error doesn't show in the presentation.",
      "Replace with zero which makes the dashboard look clean.",
      "Format the cell green to suggest everything is working fine."
    ],
    explanation: "Tell users what to check; don't hide problems.",
    objectiveTags: ["error-handling", "user-guidance", "professional-standards"]
  },
  {
    id: "lesson07-q2",
    lessonId: "lesson07",
    lessonTitle: "Lesson 07 - Investor Readiness and Audit: Professional Standards",
    prompt: "Your chart misses the last two weeks of data. Root cause?",
    correctAnswer: "Chart references a fixed range, not a table that expands automatically.",
    distractors: [
      "The font is too small for Excel to display the data properly.",
      "You need more colors to distinguish between different data series.",
      "Sheet is protected which prevents charts from updating with data."
    ],
    explanation: "Bind visuals to table columns to auto-expand.",
    objectiveTags: ["chart-maintenance", "structured-references", "troubleshooting"]
  }
];

export const unit04Phase5QuestionBank: Unit04Phase5Question[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions
];

export function getUnit04Phase5Questions(filter?: Unit04Phase5Filter): Unit04Phase5Question[] {
  const { lessonIds, tags } = filter ?? {};

  return unit04Phase5QuestionBank.filter(question => {
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

export function drawRandomUnit04Phase5Questions(count: number, filter?: Unit04Phase5Filter): Unit04Phase5Question[] {
  const available = getUnit04Phase5Questions(filter);
  if (count >= available.length) {
    return shuffle(available);
  }
  return shuffle(available).slice(0, count);
}

export function toComprehensionCheckItems(questions: Unit04Phase5Question[]): ComprehensionCheckItem[] {
  return questions.map(question => ({
    id: question.id,
    question: question.prompt,
    answers: [question.correctAnswer, ...question.distractors],
    explanation: question.explanation
  }));
}

export function getUnit04Phase5ComprehensionCheckItems(filter?: Unit04Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(getUnit04Phase5Questions(filter));
}

export function drawUnit04Phase5ComprehensionCheckItems(count: number, filter?: Unit04Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(drawRandomUnit04Phase5Questions(count, filter));
}
