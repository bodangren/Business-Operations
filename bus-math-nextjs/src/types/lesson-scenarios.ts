export type LessonPhaseName =
  | "Hook"
  | "Introduction"
  | "Guided Practice"
  | "Independent Practice"
  | "Assessment"
  | "Closing"

export interface ScenarioResourceRef {
  id: string
  kind: "video" | "dataset" | "document" | "slide" | "external"
  title: string
  description?: string
  path?: string
  url?: string
  attribution?: string
}

export type NarrativeBlock =
  | {
      type: "heading"
      level: 2 | 3 | 4
      text: string
    }
  | {
      type: "paragraph"
      text: string
    }
  | {
      type: "list"
      style: "ordered" | "unordered"
      items: string[]
    }
  | {
      type: "callout"
      intent: "tip" | "warning" | "whyItMatters" | "story" | "question"
      title: string
      body: string
      bullets?: string[]
    }

export interface MultipleChoiceQuestionScenario {
  id: string
  prompt: string
  correctAnswer: string
  distractors: string[]
  explanation?: string
}

export interface FillInBlankScenario {
  id: string
  text: string
  answer: string
  hint?: string
}

export interface TurnAndTalkScenario {
  title: string
  duration: string
  description: string
  prompts: string[]
}

export interface ReflectionPromptScenario {
  title: string
  unitTitle?: string
  entries: Array<{
    id: string
    category: "courage" | "adaptability" | "persistence"
    prompt: string
    placeholder: string
  }>
  journalingFocus?: string
}

export interface VideoScenario {
  id: string
  title: string
  youtubeId: string
  duration: string
  description: string
  transcript: string
  thumbnailUrl?: string
  resourceRefId?: string
}

export interface TAccountTransaction {
  id: string
  date: string
  description: string
  amount: number
  reference?: string
}

export interface TAccountScenario {
  accountName: string
  accountType: "asset" | "liability" | "equity" | "revenue" | "expense"
  debits: TAccountTransaction[]
  credits: TAccountTransaction[]
  title?: string
  showBalance?: boolean
  showFormulas?: boolean
}

export interface JournalEntryExerciseScenario {
  id: string
  description: string
  correctEntry: Array<{
    account: string
    debit: number
    credit: number
  }>
  explanation: string
}

export interface TransactionJournalEntryLine {
  id: string
  account: string
  accountType: "asset" | "liability" | "equity" | "revenue" | "expense"
  debit: number
  credit: number
}

export interface TransactionJournalEntryScenario {
  id: string
  entryNumber: string
  date: string
  description: string
  clientFocus: string
  lines: TransactionJournalEntryLine[]
  isBalanced: boolean
}

export interface TrialBalanceAccountScenario {
  name: string
  balance: number
  correctSide: "debit" | "credit"
  category: "Assets" | "Liabilities" | "Equity" | "Revenue" | "Expenses"
}

export interface TAccountsVisualizationTransaction {
  id: string
  date: string
  description: string
  amount: number
  reference?: string
}

export interface TAccountsVisualizationAccount {
  id: string
  name: string
  type: "asset" | "liability" | "equity"
  debits: TAccountsVisualizationTransaction[]
  credits: TAccountsVisualizationTransaction[]
}

export type PhaseComponentInstance =
  | {
      type: "video"
      component: "VideoPlayer"
      data: VideoScenario
    }
  | {
      type: "comprehensionCheck"
      component: "ComprehensionCheck"
      data: {
        title: string
        description?: string
        questions?: MultipleChoiceQuestionScenario[]
        questionBankRef?: {
          bankId: string
          filter?: Record<string, unknown>
        }
        allowRetry?: boolean
        showExplanations?: boolean
      }
    }
  | {
      type: "fillInTheBlank"
      component: "FillInTheBlank"
      data: {
        title: string
        items: FillInBlankScenario[]
      }
    }
  | {
      type: "dragAndDrop"
      component: string
      data: Record<string, unknown>
      mcpComponentId?: string
      description?: string
    }
  | {
      type: "turnAndTalk"
      component: "TurnAndTalk"
      data: TurnAndTalkScenario
    }
  | {
      type: "reflection"
      component: "ReflectionJournal"
      data: ReflectionPromptScenario
    }
  | {
      type: "peerReview"
      component: "PeerCritiqueForm"
      data: {
        projectTitle: string
        rubricFocus?: string[]
        defaultPeerName?: string
        instructions?: string
      }
    }
  | {
      type: "tAccount"
      component: "TAccountSimple"
      data: TAccountScenario
    }
  | {
      type: "journalEntry"
      component: "JournalEntryBuilding"
      data: {
        title?: string
        description?: string
        availableAccounts?: string[]
        scenarios: JournalEntryExerciseScenario[]
      }
    }
  | {
      type: "transactionJournal"
      component: "TransactionJournal"
      data: {
        title?: string
        clientTypes?: string[]
        initialTransactions?: TransactionJournalEntryScenario[]
        maxTransactions?: number
        showAnalytics?: boolean
      }
    }
  | {
      type: "trialBalance"
      component: "TrialBalanceSorting"
      data: {
        title?: string
        description?: string
        accounts: TrialBalanceAccountScenario[]
        initialShuffle?: boolean
      }
    }
  | {
      type: "tAccountsVisualization"
      component: "TAccountsVisualization"
      data: {
        title?: string
        accounts?: TAccountsVisualizationAccount[]
        showAccountingEquation?: boolean
        showBalances?: boolean
        interactive?: boolean
      }
    }

export interface TeacherPhaseNotes {
  keyPoints: string[]
  facilitationTips?: string[]
  misconceptions?: string[]
  presenterNotes?: string
  timingMinutes?: number
}

export interface PhaseScenario {
  id: string
  name: LessonPhaseName
  title: string
  sequence: number
  summary: string
  objectives: string[]
  narrative: NarrativeBlock[]
  components: PhaseComponentInstance[]
  datasets?: ScenarioResourceRef[]
  teacherNotes?: TeacherPhaseNotes
}

export interface LessonScenarioMetadata {
  unitId: string
  unitTitle: string
  lessonId: string
  lessonNumber: number
  title: string
  drivingQuestion: string
  durationMinutes: number
  focus: string
  slug: string
}

export interface LessonScenario {
  metadata: LessonScenarioMetadata
  phases: PhaseScenario[]
  sharedResources?: ScenarioResourceRef[]
  teacherGuidance?: {
    overview: string
    pacingHighlights: string[]
    assessments: string[]
  }
}
