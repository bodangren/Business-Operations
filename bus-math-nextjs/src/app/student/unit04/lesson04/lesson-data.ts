// Data-Driven Café, Lesson 4 data - Forecasting Logic and Regression
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit04Data = UNIT_REF_MAP[4]
export const lesson04Data = {
  id: "mds5vu00qkk4xiaq3ha",
  title: "Forecasting Logic: Predicting the Future from Past Data",
  sequence: 4,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Explain what a trend line reveals about business data and what it does not promise",
    "Interpret the slope and fit of a regression line in business terms",
    "Identify when forecasting is appropriate and when it creates false confidence",
    "Use patterns in historical data to make reasonable predictions about future outcomes"
  ],
  keyConcepts: [
    "Trend line: A visual representation of the general direction data is moving",
    "Slope: The rate of change - how much the outcome changes for each unit increase in the input",
    "Fit (R-squared): How closely data points cluster around the trend line - not quality, but consistency",
    "Forecasting danger zone: Predictions become unreliable further from the data's time range"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Concrete café examples showing how past weekend patterns predict future performance",
    "Representational supports using scatter plots and trend lines before any formulas",
    "Algorithmic practice with auto-checking for forecast interpretation under reduced scaffolding"
  ],
  rationale: "Students need to understand what forecasting can and cannot do before building Excel models. This lesson bridges descriptive statistics and outliers (Lessons 2-3) to the Excel build lessons (5-6) by establishing the logic that Excel will automate.",
  status: "Ready for Dev"
}


export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "The café manager asks: 'Last year this weekend was busy - what should we expect this year?'",
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Trend lines and regression: Finding the story hidden in your data",
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Drawing and interpreting trend lines with café data",
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Forecasting challenges with auto-checking and feedback",
  },
  {
    id: "phase_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "MCQ exit ticket on forecasting logic and common misconceptions",
  },
  {
    id: "phase_closing_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflection and preview to Excel build lessons",
  }
]