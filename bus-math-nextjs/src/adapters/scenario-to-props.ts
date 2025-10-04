import {
  getUnit01Phase5ComprehensionCheckItems,
  type ComprehensionCheckItem
} from "@/data/question-banks/unit01-phase5"
import { getUnit02Phase5ComprehensionCheckItems } from "@/data/question-banks/unit02-phase5"
import {
  type LessonScenario,
  type PhaseScenario,
  type PhaseComponentInstance,
  type VideoScenario,
  type MultipleChoiceQuestionScenario,
  type FillInBlankScenario,
  type ReflectionPromptScenario,
  type TAccountScenario,
  type JournalEntryExerciseScenario,
  type TransactionJournalEntryScenario,
  type TrialBalanceAccountScenario,
  type TAccountsVisualizationAccount
} from "@/types/lesson-scenarios"
import type { VideoContent } from "@/types/sections"
import type { LessonPhase } from "@/components/student/PhaseHeader"

type QuestionBankResolver = (filter?: Record<string, unknown>) => ComprehensionCheckItem[]

const QUESTION_BANK_RESOLVERS: Record<string, QuestionBankResolver> = {
  "unit01-phase5": filter =>
    getUnit01Phase5ComprehensionCheckItems(filter as Parameters<typeof getUnit01Phase5ComprehensionCheckItems>[0]),
  "unit02-phase5": filter =>
    getUnit02Phase5ComprehensionCheckItems(filter as Parameters<typeof getUnit02Phase5ComprehensionCheckItems>[0])
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

export interface AdaptedDragAndDropItem {
  id: string
  content: string
  matchId: string
  hint?: string
  category?: string
  description?: string
}

export interface AdaptedDragAndDrop {
  title: string
  description: string
  leftColumnTitle?: string
  rightColumnTitle?: string
  items: AdaptedDragAndDropItem[]
  showHints?: boolean
  shuffleItems?: boolean
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

export interface AdaptedTAccount {
  accountName: string
  accountType: TAccountScenario["accountType"]
  debits: TAccountScenario["debits"]
  credits: TAccountScenario["credits"]
  showBalance?: boolean
  showFormulas?: boolean
  title?: string
}

export interface AdaptedJournalEntry {
  title?: string
  description?: string
  availableAccounts?: string[]
  scenarios: JournalEntryExerciseScenario[]
}

export interface AdaptedTransactionJournal {
  title?: string
  clientTypes?: string[]
  initialTransactions?: TransactionJournalEntryScenario[]
  maxTransactions?: number
  showAnalytics?: boolean
}

export interface AdaptedTrialBalanceSorting {
  title?: string
  description?: string
  accounts: TrialBalanceAccountScenario[]
  initialShuffle?: boolean
}

export interface AdaptedTAccountsVisualization {
  title?: string
  accounts?: TAccountsVisualizationAccount[]
  showAccountingEquation?: boolean
  showBalances?: boolean
  interactive?: boolean
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

export function adaptDragAndDrop(component: ExtractComponentInstance<"dragAndDrop">): AdaptedDragAndDrop {
  const data = component.data as Record<string, unknown> | undefined

  if (!data) {
    throw new Error("Drag-and-drop scenario is missing configuration data.")
  }

  const { title, description, leftColumnTitle, rightColumnTitle, items, showHints, shuffleItems } = data

  if (typeof title !== "string" || typeof description !== "string") {
    throw new Error("Drag-and-drop scenario requires a title and description string.")
  }

  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(`Drag-and-drop scenario '${title}' must include at least one matching item.`)
  }

  const mappedItems: AdaptedDragAndDropItem[] = items.map((rawItem, index) => {
    const item = rawItem as Record<string, unknown>
    const id = item.id
    const content = item.content
    const matchId = item.matchId

    if (typeof id !== "string" || typeof content !== "string" || typeof matchId !== "string") {
      throw new Error(`Drag-and-drop item at index ${index} is missing required string fields (id, content, matchId).`)
    }

    return {
      id,
      content,
      matchId,
      hint: typeof item.hint === "string" ? item.hint : undefined,
      category: typeof item.category === "string" ? item.category : undefined,
      description: typeof item.description === "string" ? item.description : undefined
    }
  })

  return {
    title,
    description,
    leftColumnTitle: typeof leftColumnTitle === "string" ? leftColumnTitle : undefined,
    rightColumnTitle: typeof rightColumnTitle === "string" ? rightColumnTitle : undefined,
    items: mappedItems,
    showHints: typeof showHints === "boolean" ? showHints : undefined,
    shuffleItems: typeof shuffleItems === "boolean" ? shuffleItems : undefined
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

export function adaptTAccount(component: ExtractComponentInstance<"tAccount">): AdaptedTAccount {
  return {
    accountName: component.data.accountName,
    accountType: component.data.accountType,
    debits: component.data.debits,
    credits: component.data.credits,
    showBalance: component.data.showBalance,
    showFormulas: component.data.showFormulas,
    title: component.data.title
  }
}

export function adaptJournalEntry(component: ExtractComponentInstance<"journalEntry">): AdaptedJournalEntry {
  return {
    title: component.data.title,
    description: component.data.description,
    availableAccounts: component.data.availableAccounts,
    scenarios: component.data.scenarios
  }
}

export function adaptTransactionJournal(
  component: ExtractComponentInstance<"transactionJournal">
): AdaptedTransactionJournal {
  return {
    title: component.data.title,
    clientTypes: component.data.clientTypes,
    initialTransactions: component.data.initialTransactions,
    maxTransactions: component.data.maxTransactions,
    showAnalytics: component.data.showAnalytics
  }
}

export function adaptTrialBalance(
  component: ExtractComponentInstance<"trialBalance">
): AdaptedTrialBalanceSorting {
  return {
    title: component.data.title,
    description: component.data.description,
    accounts: component.data.accounts,
    initialShuffle: component.data.initialShuffle
  }
}

export function adaptTAccountsVisualization(
  component: ExtractComponentInstance<"tAccountsVisualization">
): AdaptedTAccountsVisualization {
  return {
    title: component.data.title,
    accounts: component.data.accounts,
    showAccountingEquation: component.data.showAccountingEquation,
    showBalances: component.data.showBalances,
    interactive: component.data.interactive
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
