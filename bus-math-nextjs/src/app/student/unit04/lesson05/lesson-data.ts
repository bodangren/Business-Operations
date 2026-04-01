// Data-Driven Café, Lesson 5: Data Cleaning and Analysis
export const lesson05Data = {
  id: "u04_l05_data_cleaning",
  title: "Data Cleaning and Analysis",
  sequence: 5,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Clean raw café POS data using Excel tools (TRIM, Text-to-Columns, Remove Duplicates)",
    "Identify and handle outliers using z-score analysis",
    "Apply filters and sorting to prepare data for statistical analysis",
    "Document data quality decisions for audit and investor review"
  ],
  keyConcepts: [
    "Data cleaning workflow: import, inspect, clean, validate",
    "TRIM, PROPER, Text-to-Columns for messy text data",
    "Remove Duplicates and filter functions for data quality",
    "Outlier detection using z-scores and IQR methods",
    "Documentation and audit trail for data decisions"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Use excel-lessons skill: business pressure first, then tool mechanics, safe rehearsal, workbook sprint"
  ],
  rationale: "Clean data is the foundation of reliable forecasts. Before predicting future sales, students must transform raw POS data into an analysis-ready format using professional Excel tools.",
  status: "Revised"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Excel-lessons skill uses standard six-phase names
export const lesson05Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Business scenario where data cleaning matters for investor decisions"
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Data cleaning patterns, Excel tool locations, common failure modes"
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice cleaning logic before touching the real workbook"
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the cleaned dataset with verification checkpoints"
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check and business communication artifact"
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize cleaning work, preview statistical analysis"
  }
]
