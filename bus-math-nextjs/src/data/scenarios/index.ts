import { LessonScenario } from "@/types/lesson-scenarios"
import { unit01Lesson01Scenario } from "./unit01/lesson01"

const scenarioRegistry: Record<string, Record<number, LessonScenario>> = {
  unit01: {
    1: unit01Lesson01Scenario
  }
}

const _scenarioSlugRegistry: Record<string, true> = {}

for (const unitKey of Object.keys(scenarioRegistry)) {
  const unitScenarios = scenarioRegistry[unitKey]
  for (const lessonKey of Object.keys(unitScenarios)) {
    const scenario = unitScenarios[Number(lessonKey)]
    const slug = scenario.metadata.slug

    if (_scenarioSlugRegistry[slug]) {
      throw new Error(`Duplicate lesson scenario slug detected: ${slug}`)
    }

    _scenarioSlugRegistry[slug] = true
  }
}

for (const unitId of Object.keys(scenarioRegistry)) {
  Object.freeze(scenarioRegistry[unitId])
}

Object.freeze(scenarioRegistry)

export type ScenarioRegistry = typeof scenarioRegistry

export function getLessonScenario(unitId: string, lessonNumber: number): LessonScenario {
  const unitScenarios = scenarioRegistry[unitId]

  if (!unitScenarios) {
    throw new Error(`Lesson scenarios for unit '${unitId}' have not been migrated yet.`)
  }

  const scenario = unitScenarios[lessonNumber]

  if (!scenario) {
    throw new Error(
      `Lesson ${lessonNumber} for unit '${unitId}' has not been migrated to the scenario registry yet.`
    )
  }

  return scenario
}

export function hasLessonScenario(unitId: string, lessonNumber: number): boolean {
  const unitScenarios = scenarioRegistry[unitId]
  if (!unitScenarios) {
    return false
  }
  return Boolean(unitScenarios[lessonNumber])
}

export function listAvailableLessonScenarios(): Array<{
  unitId: string
  lessonNumber: number
  slug: string
}> {
  const entries: Array<{ unitId: string; lessonNumber: number; slug: string }> = []

  for (const unitId of Object.keys(scenarioRegistry)) {
    const unitScenarios = scenarioRegistry[unitId]
    for (const lessonNumber of Object.keys(unitScenarios)) {
      const numericLesson = Number(lessonNumber)
      const scenario = unitScenarios[numericLesson]
      entries.push({ unitId, lessonNumber: numericLesson, slug: scenario.metadata.slug })
    }
  }

  return entries
}

export const registeredLessonScenarios = scenarioRegistry

const _lesson01Slug: "unit01-lesson01" = unit01Lesson01Scenario.metadata.slug
void _lesson01Slug
