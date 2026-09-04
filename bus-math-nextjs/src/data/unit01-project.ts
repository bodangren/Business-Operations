export const UNIT01_PROJECT_SHEETS = [
  "Transactions",
  "Trial Balance",
  "Error Checks",
  "Executive Summary",
] as const

export interface Unit01ProjectGroup {
  id: string
  name: string
  scenario: string
  datasetUrl: string
  workbookUrl: string
}

export const UNIT01_PROJECT_GROUPS: Unit01ProjectGroup[] = [
  {
    id: "g1",
    name: "Food Truck Venture",
    scenario: "Assess whether the food truck has clean books and enough cash for its next service week.",
    datasetUrl: "/resources/unit01-group1-foodtruck.csv",
    workbookUrl: "/resources/unit01-group1-starter.xlsx",
  },
  {
    id: "g2",
    name: "E-commerce Business",
    scenario: "Assess whether the online store can fund its next inventory order without hiding a cash risk.",
    datasetUrl: "/resources/unit01-group2-ecommerce.csv",
    workbookUrl: "/resources/unit01-group2-starter.xlsx",
  },
  {
    id: "g3",
    name: "Tutoring Service",
    scenario: "Assess whether the tutoring service can add teaching hours while keeping its records reliable.",
    datasetUrl: "/resources/unit01-group3-tutoring.csv",
    workbookUrl: "/resources/unit01-group3-starter.xlsx",
  },
  {
    id: "g4",
    name: "Event Planning Studio",
    scenario: "Assess whether the studio can accept a larger event while protecting client deposits and cash.",
    datasetUrl: "/resources/unit01-group4-custom.csv",
    workbookUrl: "/resources/unit01-group4-starter.xlsx",
  },
]

export const UNIT01_REHEARSAL_EVIDENCE = {
  totalDebits: 8_620.98,
  totalCredits: 8_620.98,
  totalRevenue: 4_850,
  totalExpenses: 2_817.99,
  netIncome: 2_032.01,
  cashBalance: 1_697.01,
  profitMarginPercent: 41.9,
} as const
