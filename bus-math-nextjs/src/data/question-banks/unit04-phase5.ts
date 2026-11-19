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

/** Review questions grouped by the lesson that teaches each objective. */
export const unit04Phase5QuestionBank: Unit04Phase5Question[] = [
  {
    id: "lesson01-classroom-1",
    lessonId: "lesson01",
    lessonTitle: "Weekend Profit and Waste",
    prompt: "A café prepares 200 units and wastes 6. What is its waste rate?",
    correctAnswer: "3%",
    distractors: ["6%", "30%", "0.03%"],
    explanation: "Divide 6 by 200. The result is 0.03, or 3%.",
    objectiveTags: ["waste-rate"],
  },
  {
    id: "lesson01-classroom-2",
    lessonId: "lesson01",
    lessonTitle: "Weekend Profit and Waste",
    prompt: "A plan prepares 120 units and expects to waste 3. How many units are available?",
    correctAnswer: "117 units",
    distractors: ["120 units", "123 units", "40 units"],
    explanation: "Subtract the 3 wasted units from the 120 prepared units.",
    objectiveTags: ["demand-coverage"],
  },
  {
    id: "lesson01-classroom-3",
    lessonId: "lesson01",
    lessonTitle: "Weekend Profit and Waste",
    prompt: "The café wastes 2 of 50 units one weekend and 4 of 150 the next. What is the combined rate?",
    correctAnswer: "3%",
    distractors: ["4%", "6%", "2%"],
    explanation: "Divide 6 total wasted units by 200 total prepared units.",
    objectiveTags: ["waste-rate"],
  },
  {
    id: "lesson02-classroom-1",
    lessonId: "lesson02",
    lessonTitle: "Descriptive Statistics",
    prompt: "What is the mean of 125, 143, 132, 156, 128, 147, and 139 customers?",
    correctAnswer: "About 138.57 customers",
    distractors: ["About 152.86 customers", "139.50 customers", "970 customers"],
    explanation: "The sum is 970. Divide by seven.",
    objectiveTags: ["descriptive-statistics"],
  },
  {
    id: "lesson02-classroom-2",
    lessonId: "lesson02",
    lessonTitle: "Descriptive Statistics",
    prompt: "The sorted hourly tips are $12, $15, $18, $22, $25, $28, $32, and $85. What is the median?",
    correctAnswer: "$23.50",
    distractors: ["$25.00", "$22.00", "$29.63"],
    explanation: "There are eight values. Average the fourth and fifth values.",
    objectiveTags: ["descriptive-statistics"],
  },
  {
    id: "lesson02-classroom-3",
    lessonId: "lesson02",
    lessonTitle: "Descriptive Statistics",
    prompt: "Daily counts range from 125 to 156 customers. What is the range?",
    correctAnswer: "31 customers",
    distractors: ["125 customers", "156 customers", "281 customers"],
    explanation: "Subtract the minimum from the maximum.",
    objectiveTags: ["descriptive-statistics"],
  },
  {
    id: "lesson03-classroom-1",
    lessonId: "lesson03",
    lessonTitle: "Outliers and Data Quality",
    prompt: "An item has a z-score of −1.51. Does it pass the rule to flag a value when its absolute z-score is greater than 2?",
    correctAnswer: "It stays inside the limit.",
    distractors: ["It is flagged because it is negative.", "It is flagged because the magnitude exceeds 2.", "It is flagged because every below-average value is unusual."],
    explanation: "The magnitude is 1.51. Check source records if the transaction still looks unusual.",
    objectiveTags: ["z-score"],
  },
  {
    id: "lesson03-classroom-2",
    lessonId: "lesson03",
    lessonTitle: "Outliers and Data Quality",
    prompt: "An unusually large sale matches a catering receipt. What should you do?",
    correctAnswer: "Keep the record and explain the catering sale.",
    distractors: ["Remove the record because it is large.", "Replace it with the mean.", "Change the receipt to match regular sales."],
    explanation: "Source evidence confirms the sale. Record why it differs.",
    objectiveTags: ["outliers"],
  },
  {
    id: "lesson03-classroom-3",
    lessonId: "lesson03",
    lessonTitle: "Outliers and Data Quality",
    prompt: "What happens if the reference standard deviation is zero?",
    correctAnswer: "The z-score is undefined.",
    distractors: ["The z-score is always zero.", "The z-score is always 2.", "Use the range as the z-score."],
    explanation: "The formula would divide by zero.",
    objectiveTags: ["z-score"],
  },
  {
    id: "lesson04-classroom-1",
    lessonId: "lesson04",
    lessonTitle: "Forecasting Logic",
    prompt: "Use y = 4x + 80. What does the line predict for weekend 8?",
    correctAnswer: "112 orders",
    distractors: ["92 orders", "84 orders", "120 orders"],
    explanation: "Substitute 8 for x to get 4 × 8 + 80 = 112.",
    objectiveTags: ["forecasting"],
  },
  {
    id: "lesson04-classroom-2",
    lessonId: "lesson04",
    lessonTitle: "Forecasting Logic",
    prompt: "The observed weekends are 1 to 5. What is an estimate for weekend 8 called?",
    correctAnswer: "Extrapolation",
    distractors: ["Interpolation", "Median", "Duplicate check"],
    explanation: "Weekend 8 is outside the observed range.",
    objectiveTags: ["forecasting"],
  },
  {
    id: "lesson04-classroom-3",
    lessonId: "lesson04",
    lessonTitle: "Forecasting Logic",
    prompt: "What does a high R² describe?",
    correctAnswer: "How much variation in the observed results the fitted line accounts for.",
    distractors: ["The exact accuracy of the next forecast.", "Proof that one input causes the outcome.", "The number of future weekends to forecast."],
    explanation: "Fit uses observed results. Changes in conditions can affect future results.",
    objectiveTags: ["model-fit"],
  },
  {
    id: "lesson05-classroom-1",
    lessonId: "lesson05",
    lessonTitle: "Data Cleaning and Analysis",
    prompt: "Two rows have the same date and different quantities. What should you do?",
    correctAnswer: "Check the source and compare all fields before removing anything.",
    distractors: ["Delete one row when the dates match.", "Change both quantities to the mean.", "Delete both rows."],
    explanation: "A repeated date alone does not establish an exact duplicate.",
    objectiveTags: ["data-cleaning"],
  },
  {
    id: "lesson05-classroom-2",
    lessonId: "lesson05",
    lessonTitle: "Data Cleaning and Analysis",
    prompt: "What does PROPER(TRIM(\"  saturday \")) return?",
    correctAnswer: "Saturday",
    distractors: ["SATURDAY", "  saturday ", "saturday"],
    explanation: "TRIM removes extra spaces. PROPER capitalizes the first letter.",
    objectiveTags: ["data-cleaning"],
  },
  {
    id: "lesson05-classroom-3",
    lessonId: "lesson05",
    lessonTitle: "Data Cleaning and Analysis",
    prompt: "Which formula counts numeric weekend labels without counting the table header?",
    correctAnswer: "COUNT(CleanPOS[Weekend])",
    distractors: ["COUNTA(Analysis!A:A)", "SUM(CleanPOS[Weekend])", "AVERAGE(CleanPOS[Weekend])"],
    explanation: "The structured reference supplies the data cells. COUNT counts numeric values.",
    objectiveTags: ["descriptive-statistics"],
  },
  {
    id: "lesson06-classroom-1",
    lessonId: "lesson06",
    lessonTitle: "Decision Dashboard",
    prompt: "The selected scenario name has no match. What should the model show?",
    correctAnswer: "An input warning. Check the selected name and the Plans table.",
    distractors: ["A passing result with zero waste.", "A blank success message.", "The next plan in the table."],
    explanation: "SUMIF can return zero when no name matches. Check for exactly one match before reporting a result.",
    objectiveTags: ["scenario-validation"],
  },
  {
    id: "lesson06-classroom-2",
    lessonId: "lesson06",
    lessonTitle: "Decision Dashboard",
    prompt: "A plan prepares zero units. Can the model use that denominator to report a waste rate?",
    correctAnswer: "No. Show an input warning and check the planned quantity.",
    distractors: ["Yes. Report 0%.", "Yes. Report 3%.", "Yes. Assume the plan passes."],
    explanation: "The prepared quantity must be positive for division.",
    objectiveTags: ["scenario-validation"],
  },
  {
    id: "lesson06-classroom-3",
    lessonId: "lesson06",
    lessonTitle: "Decision Dashboard",
    prompt: "A ninth weekend is added below the fixed chart range. What should you check?",
    correctAnswer: "Extend the chart source and verify that the new point appears.",
    distractors: ["Assume it appears because the formulas use tables.", "Change the scenario to High.", "Change the chart title."],
    explanation: "Changing a value in the chart source and adding a row to that source are separate operations.",
    objectiveTags: ["chart-source"],
  },
  {
    id: "lesson06-classroom-4",
    lessonId: "lesson06",
    lessonTitle: "Decision Dashboard",
    prompt: "Which column supplies the known y values in the weekend forecast?",
    correctAnswer: "CleanPOS[Orders]",
    distractors: ["CleanPOS[Weekend]", "Plans[Scenario]", "Plans[Plan waste]"],
    explanation: "The forecast estimates orders from the weekend number.",
    objectiveTags: ["forecasting"],
  },
  {
    id: "lesson07-classroom-1",
    lessonId: "lesson07",
    lessonTitle: "Project Rehearsal",
    prompt: "Dashboard E7 displays planned waste. Where do you trace it next?",
    correctAnswer: "Forecasting B9",
    distractors: ["The chart title", "A new workbook", "A raw order count alone"],
    explanation: "Dashboard E7 links to the planned waste rate on Forecasting.",
    objectiveTags: ["evidence-trace"],
  },
  {
    id: "lesson07-classroom-2",
    lessonId: "lesson07",
    lessonTitle: "Project Rehearsal",
    prompt: "Which result should your recommendation explain?",
    correctAnswer: "Whether the selected plan covers demand and meets the waste target.",
    distractors: ["Whether the workbook has the most charts.", "Whether each scenario produces the same result.", "Whether the forecast is an exact promise."],
    explanation: "Use both checks. State the trade-off if a plan fails one.",
    objectiveTags: ["demand-coverage"],
  },
  {
    id: "lesson07-classroom-3",
    lessonId: "lesson07",
    lessonTitle: "Project Rehearsal",
    prompt: "What workbook do you use when the group project starts?",
    correctAnswer: "Your assigned group workbook with the same five sheets.",
    distractors: ["The rehearsal file with shared data.", "A blank workbook with a different sheet map.", "A new workbook at each milestone."],
    explanation: "Use the group workbook from Lesson 8 through Lesson 10.",
    objectiveTags: ["evidence-trace"],
  }
];

/** @returns Questions that match the selected lessons and tags. */
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

/** @returns A shuffled selection of matching questions. */
export function drawRandomUnit04Phase5Questions(count: number, filter?: Unit04Phase5Filter): Unit04Phase5Question[] {
  const available = getUnit04Phase5Questions(filter);
  if (count >= available.length) {
    return shuffle(available);
  }
  return shuffle(available).slice(0, count);
}

/** @returns Question items for the comprehension check. */
export function toComprehensionCheckItems(questions: Unit04Phase5Question[]): ComprehensionCheckItem[] {
  return questions.map(question => ({
    id: question.id,
    question: question.prompt,
    answers: [question.correctAnswer, ...question.distractors],
    explanation: question.explanation
  }));
}

/** @returns Matching questions in comprehension-check format. */
export function getUnit04Phase5ComprehensionCheckItems(filter?: Unit04Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(getUnit04Phase5Questions(filter));
}

/** @returns A shuffled selection in comprehension-check format. */
export function drawUnit04Phase5ComprehensionCheckItems(count: number, filter?: Unit04Phase5Filter): ComprehensionCheckItem[] {
  return toComprehensionCheckItems(drawRandomUnit04Phase5Questions(count, filter));
}
