import { getLessonScenario } from "@/data/scenarios"
import {
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit02Data } from "./lesson-data"

const lessonScenario = getLessonScenario("unit02", 3)

export const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
export const lessonHeader = mapLessonMetadata(lessonScenario)
export const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit02Data.sequence
}

export { lessonScenario }
