// Student-facing curriculum interfaces for dynamic routing and navigation

export interface StudentUnit {
  id: string
  unitNumber: number
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  status: 'locked' | 'available' | 'in_progress' | 'completed'
  
  // Unit overview information for students
  drivingQuestion: {
    question: string
    context: string
  }
  
  objectives: {
    content: string[]
    skills: string[]
    deliverables: string[]
  }
  
  // Simplified assessment information for students
  performanceTask: {
    title: string
    description: string
    requirements: string[]
  }
  
  milestones: StudentMilestone[]
  lessons: StudentLesson[]
  
  // Student choice options
  ventures?: string[]
  roles?: string[]
  presentationFormats?: string[]
  
  // Prerequisites displayed to students
  prerequisites: {
    knowledge: string[]
    technology: string[]
  }
}

export interface StudentMilestone {
  id: string
  day: number
  title: string
  description: string
  criteria: string[]
  status: 'locked' | 'available' | 'in_progress' | 'completed'
  dueDate?: string
}

export interface StudentLesson {
  id: string
  unitId: string
  lessonNumber: number
  title: string
  description?: string
  duration: number // minutes
  status: 'locked' | 'available' | 'in_progress' | 'completed'
  
  // Learning targets displayed to students
  learningObjectives: string[]
  keyConcepts: string[]
  
  // Lesson structure
  phases: StudentLessonPhase[]
  
  // Progress tracking
  completedPhases: string[] // Array of phase IDs
  timeSpent?: number // minutes
  lastAccessed?: string // ISO date string
}

export interface StudentLessonPhase {
  id: string
  lessonId: string
  phaseName: 'Hook' | 'Introduction' | 'Guided Practice' | 'Independent Practice' | 'Assessment' | 'Closing'
  phaseNumber: number
  title?: string
  description: string
  estimatedDuration?: number // minutes
  status: 'locked' | 'available' | 'in_progress' | 'completed'
  
  // Content and interactions
  content: LessonPhaseContent
  
  // Progress tracking
  timeSpent?: number // minutes
  completedAt?: string // ISO date string
  attempts?: number
  score?: number
}

export interface LessonPhaseContent {
  type: 'video' | 'interactive' | 'discussion' | 'practice' | 'assessment' | 'presentation' | 'reflection'
  
  // Content components
  video?: {
    title: string
    duration: string
    description: string
    youtubeId?: string
  }
  
  // Interactive components (mapped to actual React components)
  interactiveComponents?: Array<{
    componentName: string // e.g., 'ComprehensionCheck', 'BusinessTransactionCategorization'
    props?: Record<string, any>
    required: boolean
  }>
  
  // Discussion prompts
  discussionPrompts?: Array<{
    question: string
    type: 'individual' | 'pair' | 'group' | 'class'
    duration?: number
  }>
  
  // Practice activities
  practiceActivities?: Array<{
    title: string
    description: string
    instructions: string[]
    materials?: string[]
    duration?: number
  }>
  
  // Assessment items
  assessmentItems?: Array<{
    type: 'formative' | 'summative'
    title: string
    description: string
    criteria: string[]
    rubric?: string[]
  }>
  
  // Text content and instructions
  instructions?: string[]
  materials?: string[]
  callouts?: Array<{
    type: 'tip' | 'important' | 'definition' | 'example' | 'reflection'
    title: string
    content: string
  }>
}

// Progress tracking types
export interface StudentProgress {
  unitId: string
  lessonId?: string
  phaseId?: string
  status: 'not_started' | 'in_progress' | 'completed'
  completedAt?: string
  timeSpent: number // minutes
  score?: number
  attempts?: number
  lastAccessed: string
}

export interface StudentCurriculumData {
  userId: string
  units: StudentUnit[]
  progress: StudentProgress[]
  preferences: {
    language: 'en' | 'zh' // English or Mandarin
    pace: 'self_paced' | 'instructor_led'
    notifications: boolean
  }
  lastAccessed: string
}

// Utility types for navigation and routing
export type UnitSlug = `unit${string}` // e.g., 'unit01', 'unit02'
export type LessonSlug = `lesson${string}` // e.g., 'lesson01', 'lesson02'
export type PhaseSlug = 'hook' | 'introduction' | 'guided-practice' | 'independent-practice' | 'assessment' | 'closing'

export interface NavigationContext {
  currentUnit: string
  currentLesson?: string
  currentPhase?: string
  availableUnits: string[]
  nextPhase?: {
    unitId: string
    lessonId: string
    phaseId: string
  }
  prevPhase?: {
    unitId: string
    lessonId: string
    phaseId: string
  }
}