import { LessonScenario } from "@/types/lesson-scenarios"
import { unit01Lesson01Scenario } from "./unit01/lesson01"
import { unit01Lesson02Scenario } from "./unit01/lesson02"
import { unit01Lesson03Scenario } from "./unit01/lesson03"
import { unit01Lesson04Scenario } from "./unit01/lesson04"
import { unit01Lesson05Scenario } from "./unit01/lesson05"
import { unit01Lesson06Scenario } from "./unit01/lesson06"
import { unit01Lesson07Scenario } from "./unit01/lesson07"
import { unit01Lesson08Scenario } from "./unit01/lesson08"
import { unit01Lesson09Scenario } from "./unit01/lesson09"
import { unit01Lesson10Scenario } from "./unit01/lesson10"

const scenarioRegistry: Record<string, Record<number, LessonScenario>> = {
  unit01: {
    1: unit01Lesson01Scenario,
    2: unit01Lesson02Scenario,
    3: unit01Lesson03Scenario,
    4: unit01Lesson04Scenario,
    5: unit01Lesson05Scenario,
    6: unit01Lesson06Scenario,
    7: unit01Lesson07Scenario,
    8: unit01Lesson08Scenario,
    9: unit01Lesson09Scenario,
    10: unit01Lesson10Scenario
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

const _lesson01Slug = unit01Lesson01Scenario.metadata.slug
void _lesson01Slug
