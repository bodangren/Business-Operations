import type { IndexRecord, UnitId } from "@/types/glossary"
import { glossaryData } from "@/data/glossary"
import { generateIndexRecords } from "@/lib/glossary"
import { UNITS } from "@/data/unit-registry"

const unitPages: Array<{ title: string; href: string; id: UnitId }> = UNITS.map((u) => ({
  title: u.label,
  href: u.studentHref,
  id: u.unitId,
}))

const lessonPages: Array<{ title: string; href: string; unitId?: UnitId }> = [
  // Unit 1: Smart Ledger Launch
  { title: "Introduction: Sarah's Challenge", href: "/student/unit01/lesson01", unitId: "unit01" },
  { title: "Classifying Transactions: How Business Events Change the Accounting Equation", href: "/student/unit01/lesson02", unitId: "unit01" },
  { title: "Debit, Credit, and Trial Balance", href: "/student/unit01/lesson03", unitId: "unit01" },
  { title: "Excel Model: Move Manual Ledger to Excel Table", href: "/student/unit01/lesson04", unitId: "unit01" },
  { title: "Build Self-Auditing Formulas and Error Flags", href: "/student/unit01/lesson05", unitId: "unit01" },
  { title: "Investor-Facing Summary & Workbook Polish", href: "/student/unit01/lesson06", unitId: "unit01" },
  { title: "Project Rehearsal: Shared Data, Shared Standard", href: "/student/unit01/lesson07", unitId: "unit01" },
  { title: "Project Milestone 1: Kickoff & Workbook Setup", href: "/student/unit01/lesson08", unitId: "unit01" },
  { title: "Project Milestone 2: Complete Workbook & Rehearse", href: "/student/unit01/lesson09", unitId: "unit01" },
  { title: "Project Milestone 3: Final Presentation & Submission", href: "/student/unit01/lesson10", unitId: "unit01" },
  // Unit 2: Month-End Wizard
  { title: "Launch: The Month-End Closing Crisis", href: "/student/unit02/lesson01", unitId: "unit02" },
  { title: "Accruals and Deferrals: Timing Is Everything", href: "/student/unit02/lesson02", unitId: "unit02" },
  { title: "Closing Entries: Resetting Temporary Accounts", href: "/student/unit02/lesson03", unitId: "unit02" },
  { title: "Complete Manual Month-End Flow", href: "/student/unit02/lesson04", unitId: "unit02" },
  { title: "Build First Automation Layer", href: "/student/unit02/lesson05", unitId: "unit02" },
  { title: "Polish Wizard Interface: Validation, Controls, and Auditability", href: "/student/unit02/lesson06", unitId: "unit02" },
  { title: "Project Rehearsal: Guided Practice with Shared Data", href: "/student/unit02/lesson07", unitId: "unit02" },
  { title: "Project Kickoff: Your Group's Month-End Scenario", href: "/student/unit02/lesson08", unitId: "unit02" },
  { title: "Complete Workbook and Rehearse Demo", href: "/student/unit02/lesson09", unitId: "unit02" },
  { title: "PBL Milestone 3: Final Innovation Fair Demo", href: "/student/unit02/lesson10", unitId: "unit02" },
  // Unit 3: Three-Statement Storyboard
  { title: "Launch: The Investor Question", href: "/student/unit03/lesson01", unitId: "unit03" },
  { title: "Build the Income Statement", href: "/student/unit03/lesson02", unitId: "unit03" },
  { title: "Build the Balance Sheet and Retained Earnings", href: "/student/unit03/lesson03", unitId: "unit03" },
  { title: "Indirect Cash Flow Statement and Ratio Interpretation", href: "/student/unit03/lesson04", unitId: "unit03" },
  { title: "Link the Three Statements: Cross-Sheet References and Integrity Checks", href: "/student/unit03/lesson05", unitId: "unit03" },
  { title: "Integration & Dashboard: Decision-Ready Three-Statement Model", href: "/student/unit03/lesson06", unitId: "unit03" },
  { title: "Project Rehearsal: Three-Statement Workbook Audit", href: "/student/unit03/lesson07", unitId: "unit03" },
  { title: "Presentation Prep: KPI Dashboard Design", href: "/student/unit03/lesson08", unitId: "unit03" },
  { title: "Mock Panel & Revisions: Expert Critique Session", href: "/student/unit03/lesson09", unitId: "unit03" },
  { title: "Public Presentation: Demo Day Investor Showcase", href: "/student/unit03/lesson10", unitId: "unit03" },
  // Unit 4: Data-Driven Café
  { title: "Launch: Weekend Profit vs. Waste", href: "/student/unit04/lesson01", unitId: "unit04" },
  { title: "Descriptive Statistics: What Does Normal Look Like?", href: "/student/unit04/lesson02", unitId: "unit04" },
  { title: "Outliers and Data Quality", href: "/student/unit04/lesson03", unitId: "unit04" },
  { title: "Forecasting Logic: Predicting the Future from Past Data", href: "/student/unit04/lesson04", unitId: "unit04" },
  { title: "Data Cleaning and Analysis", href: "/student/unit04/lesson05", unitId: "unit04" },
  { title: "Integration & Presentation: Decision-Ready Dashboard", href: "/student/unit04/lesson06", unitId: "unit04" },
  { title: "Project Rehearsal: Café Analysis Walkthrough", href: "/student/unit04/lesson07", unitId: "unit04" },
  { title: "Project Kickoff: Team Setup", href: "/student/unit04/lesson08", unitId: "unit04" },
  { title: "Mock Panel & Revision: Presentation Rehearsal", href: "/student/unit04/lesson09", unitId: "unit04" },
  { title: "Public Presentation: Café Management Showcase", href: "/student/unit04/lesson10", unitId: "unit04" },
  // Unit 5: PayDay Simulator
  { title: "Launch & Explore: The Payroll Cash Crunch", href: "/student/unit05/lesson01", unitId: "unit05" },
  { title: "Skill Introduction: Gross to Net Calculations", href: "/student/unit05/lesson02", unitId: "unit05" },
  { title: "Deductions and Net Pay", href: "/student/unit05/lesson03", unitId: "unit05" },
  { title: "Payroll Timing and Liabilities", href: "/student/unit05/lesson04", unitId: "unit05" },
  { title: "Schedule-to-Pay: Building the Weekly Labor Engine", href: "/student/unit05/lesson05", unitId: "unit05" },
  { title: "Pay Stub Studio: Taxes, Net Pay, and Proof", href: "/student/unit05/lesson06", unitId: "unit05" },
  { title: "Project Rehearsal: Shared Payroll Workbook Audit", href: "/student/unit05/lesson07", unitId: "unit05" },
  { title: "Project Kickoff — Your Payroll Workbook", href: "/student/unit05/lesson08", unitId: "unit05" },
  { title: "PBL Milestone 2: Prototype + Rehearsal (PayDay Simulator)", href: "/student/unit05/lesson09", unitId: "unit05" },
  { title: "Public Presentation: YouTube Publication & Business Q&A", href: "/student/unit05/lesson10", unitId: "unit05" },
  // Unit 6: PriceLab Challenge
  { title: "Launch: The Pricing Problem", href: "/student/unit06/lesson01", unitId: "unit06" },
  { title: "Markup vs. Margin Concepts", href: "/student/unit06/lesson02", unitId: "unit06" },
  { title: "CVP Model Construction", href: "/student/unit06/lesson03", unitId: "unit06" },
  { title: "Scenario Comparison & Sensitivity Reasoning", href: "/student/unit06/lesson04", unitId: "unit06" },
  { title: "Goal Seek: Hit Your Profit Target", href: "/student/unit06/lesson05", unitId: "unit06" },
  { title: "Data Tables: Sensitivity Analysis", href: "/student/unit06/lesson06", unitId: "unit06" },
  { title: "Project Rehearsal: Shared Workbook, Evidence Chain, and Quality Standard", href: "/student/unit06/lesson07", unitId: "unit06" },
  { title: "Project Kickoff: Group Workbook Setup and First Analysis", href: "/student/unit06/lesson08", unitId: "unit06" },
  { title: "Complete the Workbook and Rehearse the Recommendation", href: "/student/unit06/lesson09", unitId: "unit06" },
  { title: "Final Presentation, Submission, and Reflection", href: "/student/unit06/lesson10", unitId: "unit06" },
  // Unit 7: Inventory Accounting
  { title: "Unit Launch: Sarah's Inventory Problem", href: "/student/unit07/lesson01", unitId: "unit07" },
  { title: "Inventory Cost Flow Foundations: Beginning Inventory, Purchases, and COGS", href: "/student/unit07/lesson02", unitId: "unit07" },
  { title: "FIFO and LIFO: Two Ways to Value the Same Inventory", href: "/student/unit07/lesson03", unitId: "unit07" },
  { title: "Specific Identification and Weighted Average", href: "/student/unit07/lesson04", unitId: "unit07" },
  { title: "Build the Inventory Method Workbook", href: "/student/unit07/lesson05", unitId: "unit07" },
  { title: "Build the Scenario-Switch Dashboard", href: "/student/unit07/lesson06", unitId: "unit07" },
  { title: "Project Rehearsal: One Shared Dataset, One Shared Workbook", href: "/student/unit07/lesson07", unitId: "unit07" },
  { title: "Group Project Kickoff: New Business, New Inventory Data, Same Workbook Logic", href: "/student/unit07/lesson08", unitId: "unit07" },
  { title: "Group Project Build: Complete the Workbook and Rehearse the Recommendation", href: "/student/unit07/lesson09", unitId: "unit07" },
  { title: "Final Presentation: Defend Ending Inventory, Method Choice, and Business Recommendation", href: "/student/unit07/lesson10", unitId: "unit07" },
  // Unit 8: Fixed Assets and Depreciation
  { title: "Sarah's Equipment Purchase — Why Long-Term Assets Are Different", href: "/student/unit08/lesson01", unitId: "unit08" },
  { title: "When Does a Cost Become an Asset? — Capitalization, Useful Life, and Salvage Value", href: "/student/unit08/lesson02", unitId: "unit08" },
  { title: "Straight-Line Depreciation", href: "/student/unit08/lesson03", unitId: "unit08" },
  { title: "Double-Declining Balance and Method Comparison", href: "/student/unit08/lesson04", unitId: "unit08" },
  { title: "Build Asset Register and Depreciation Schedule", href: "/student/unit08/lesson05", unitId: "unit08" },
  { title: "Method Comparison and Investor-Ready Summary", href: "/student/unit08/lesson06", unitId: "unit08" },
  { title: "Project Rehearsal: Depreciation Workbook with Shared Data", href: "/student/unit08/lesson07", unitId: "unit08" },
  { title: "Project Kickoff: Group Fixed-Asset Datasets", href: "/student/unit08/lesson08", unitId: "unit08" },
  { title: "Complete Workbook and Depreciation Recommendation", href: "/student/unit08/lesson09", unitId: "unit08" },
  { title: "PBL Milestone 3: Fixed-Asset Recommendation Presentations", href: "/student/unit08/lesson10", unitId: "unit08" },
]

const extraPages: Array<{
  label: string
  href: string
  category: IndexRecord["category"]
  description?: string
}> = [
  {
    label: "Preface",
    href: "/frontmatter/preface",
    category: "frontmatter",
    description: "Course introduction and reading guide",
  },
  {
    label: "Acknowledgments",
    href: "/frontmatter/acknowledgments",
    category: "frontmatter",
    description: "Credits and acknowledgments",
  },
  {
    label: "Capstone Project",
    href: "/capstone",
    category: "capstone",
    description: "Year-end capstone project",
  },
  {
    label: "Bilingual Glossary",
    href: "/backmatter/glossary",
    category: "backmatter",
    description: "Study key terms in English and Chinese",
  },
  {
    label: "Subject Index",
    href: "/backmatter/index",
    category: "backmatter",
    description: "Search replacement — find any page by keyword",
  },
]

export const indexRecords: IndexRecord[] = generateIndexRecords(
  glossaryData,
  unitPages,
  lessonPages,
  extraPages
)
