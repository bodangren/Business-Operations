import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit07Data = UNIT_REF_MAP[7]
export const lesson06Data = {
  id: "u07l06",
  title: "Build the Scenario-Switch Dashboard",
  sequence: 6,
  unitId: "u07",
  learningObjectives: [
    "Build a selector-driven workbook that switches scenario and inventory method from control cells",
    "Use table lookups to return selected UnitsSold, COGS, and Ending Inventory from summary rows",
    "Calculate turnover, days on hand, and gross margin from selected outputs",
    "Run visible checks so the model is trusted before recommendation"
  ],
  keyConcepts: [
    "Control cell architecture: SelectedScenario, SelectedMethod, SelectedKey",
    "Composite-key lookup chain from MethodSummary to Outputs",
    "KPI chain: revenue, average inventory, turnover, and days-on-hand",
    "Checks-first interpretation: verify balance before business recommendation"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Business pressure hook",
    "Tool anatomy with reference decoder",
    "Safe rehearsal walkthrough",
    "Workbook sprint with sheet checkpoints"
  ],
  rationale:
    "Lesson 06 extends Lesson 05 method outputs into a live decision tool. Students build a scenario+method selector chain, connect it to KPI interpretation, and defend recommendations with auditable workbook evidence.",
  status: "Complete"
}


export const lesson06Phases = [
  {
    id: "u07l06-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Investor pressure: compare scenario and method outcomes in one live dashboard"
  },
  {
    id: "u07l06-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Teach selector controls, lookup chain anatomy, KPI formulas, and reference meanings"
  },
  {
    id: "u07l06-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Rehearse the workbook sheet flow with guided formula decoding and talk-through practice"
  },
  {
    id: "u07l06-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the real multi-sheet scenario-switch workbook with selector and KPI checks"
  },
  {
    id: "u07l06-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check plus recommendation memo using workbook evidence"
  },
  {
    id: "u07l06-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on selector fluency, model trust, and transfer to project rehearsal"
  }
]
