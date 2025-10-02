import { getUnit01Phase5ComprehensionCheckItems, type ComprehensionCheckItem } from "@/data/question-banks/unit01-phase5"
import {
  type LessonScenario,
  type PhaseScenario,
  type PhaseComponentInstance,
  type VideoScenario,
  type MultipleChoiceQuestionScenario,
  type FillInBlankScenario,
  type ReflectionPromptScenario
} from "@/types/lesson-scenarios"
import type { VideoContent } from "@/types/sections"
import type { LessonPhase } from "@/components/student/PhaseHeader"

type QuestionBankResolver = (filter?: Record<string, unknown>) => ComprehensionCheckItem[]

const QUESTION_BANK_RESOLVERS: Record<string, QuestionBankResolver> = {
  "unit01-phase5": filter =>
    getUnit01Phase5ComprehensionCheckItems(filter as Parameters<typeof getUnit01Phase5ComprehensionCheckItems>[0])
}

export interface AdaptedComprehensionCheck {
  title?: string
  description?: string
  allowRetry?: boolean
  showExplanations?: boolean
  questions: Array<{
    id: string
    question: string
    answers: string[]
    explanation?: string
  }>
}

export interface AdaptedFillInTheBlank {
  title: string
  sentences: FillInBlankScenario[]
}

export interface AdaptedReflectionJournal {
  title: string
  unitTitle?: string
  prompts: ReflectionPromptScenario["entries"]
  journalingFocus?: string
}

export interface AdaptedTurnAndTalk {
  title: string
  duration: string
  description: string
  prompts: string[]
}

export interface AdaptedPeerReview {
  projectTitle: string
  defaultPeerName?: string
  rubricFocus?: string[]
  instructions?: string
}

export function getPhaseBySequence(lessonScenario: LessonScenario, sequence: number): PhaseScenario {
  const phase = lessonScenario.phases.find(item => item.sequence === sequence)
  if (!phase) {
    throw new Error(`Phase with sequence ${sequence} not found in scenario '${lessonScenario.metadata.slug}'.`)
  }
  return phase
}

export function mapScenarioPhaseToLessonPhase(phase: PhaseScenario): LessonPhase {
  return {
    id: phase.id,
    phaseName: phase.name,
    sequence: phase.sequence,
    description: phase.summary
  }
}

export function mapScenarioPhasesToLessonPhases(lessonScenario: LessonScenario): LessonPhase[] {
  return lessonScenario.phases.map(mapScenarioPhaseToLessonPhase)
}

export function mapLessonMetadata(lessonScenario: LessonScenario) {
  return {
    id: lessonScenario.metadata.lessonId,
    title: lessonScenario.metadata.title,
    sequence: lessonScenario.metadata.lessonNumber,
    unitId: lessonScenario.metadata.unitId
  }
}

type ExtractComponentInstance<TType extends PhaseComponentInstance["type"]> = Extract<
  PhaseComponentInstance,
  { type: TType }
>

export function getPhaseComponent<TType extends PhaseComponentInstance["type"]>(
  phase: PhaseScenario,
  type: TType
): ExtractComponentInstance<TType> | undefined {
  return phase.components.find((component): component is ExtractComponentInstance<TType> => component.type === type)
}

export function adaptVideoScenario(videoScenario: VideoScenario): VideoContent {
  return {
    youtubeId: videoScenario.youtubeId,
    title: videoScenario.title,
    duration: videoScenario.duration,
    description: videoScenario.description,
    transcript: videoScenario.transcript
  }
}

export function adaptComprehensionCheck(component: ExtractComponentInstance<"comprehensionCheck">): AdaptedComprehensionCheck {
  const { data } = component

  let questions: AdaptedComprehensionCheck["questions"] = []

  if (data.questions && data.questions.length > 0) {
    questions = data.questions.map(mapMultipleChoiceQuestion)
  } else if (data.questionBankRef) {
    const resolver = QUESTION_BANK_RESOLVERS[data.questionBankRef.bankId]
    if (!resolver) {
      throw new Error(`No resolver registered for question bank '${data.questionBankRef.bankId}'.`)
    }
    const resolved = resolver(data.questionBankRef.filter)
    questions = resolved.map(item => ({
      id: item.id,
      question: item.question,
      answers: ensureUniqueAnswers(item.answers),
      explanation: item.explanation
    }))
  } else {
    throw new Error("Comprehension check scenario is missing both direct questions and a question bank reference.")
  }

  return {
    title: data.title,
    description: data.description,
    allowRetry: data.allowRetry,
    showExplanations: data.showExplanations,
    questions
  }
}

export function adaptFillInTheBlank(component: ExtractComponentInstance<"fillInTheBlank">): AdaptedFillInTheBlank {
  return {
    title: component.data.title,
    sentences: component.data.items
  }
}

export function adaptTurnAndTalk(component: ExtractComponentInstance<"turnAndTalk">): AdaptedTurnAndTalk {
  return {
    title: component.data.title,
    duration: component.data.duration,
    description: component.data.description,
    prompts: component.data.prompts
  }
}

export function adaptReflection(component: ExtractComponentInstance<"reflection">): AdaptedReflectionJournal {
  return {
    title: component.data.title,
    unitTitle: component.data.unitTitle,
    prompts: component.data.entries,
    journalingFocus: component.data.journalingFocus
  }
}

export function adaptPeerReview(component: ExtractComponentInstance<"peerReview">): AdaptedPeerReview {
  return {
    projectTitle: component.data.projectTitle,
    defaultPeerName: component.data.defaultPeerName,
    rubricFocus: component.data.rubricFocus,
    instructions: component.data.instructions
  }
}

function ensureUniqueAnswers(answers: string[]): string[] {
  const seen = new Set<string>()
  const ordered: string[] = []
  for (const answer of answers) {
    if (!seen.has(answer)) {
      ordered.push(answer)
      seen.add(answer)
    }
  }
  return ordered
}

function mapMultipleChoiceQuestion(question: MultipleChoiceQuestionScenario) {
  return {
    id: question.id,
    question: question.prompt,
    answers: ensureUniqueAnswers([question.correctAnswer, ...question.distractors]),
    explanation: question.explanation
  }
}
