// Types for teacher lesson plan components and standardized unit planning

export interface UnitMeta {
  duration: string
  gradeLevel: string
  course: string
}

export interface LearningObjective {
  category: 'content' | 'technical' | 'enduring'
  items: string[]
}

export interface PerformanceTask {
  title: string
  description: string
  scenario: string
  requirements: string[]
  context: string
}

export interface MilestoneAssessment {
  day: number
  title: string
  description: string
  criteria: string[]
}

export interface RubricCriteria {
  name: string
  weight: string
  exemplary: string
  proficient: string
  developing: string
}

export interface DailyLesson {
  day: number
  title: string
  focus: string
  duration: string
  activities: LessonActivity[]
  materials: string[]
}

export interface LessonActivity {
  name: string
  duration: string
  description: string
  details: string[]
  callout?: {
    type: 'tip' | 'important' | 'definition' | 'example' | 'reflection' | 'technical' | 'checkpoint' | 'strategy' | 'professional' | 'assessment'
    title: string
    content: string
    items?: string[]
  }
  video?: {
    title: string
    duration: string
    description: string
    youtubeId?: string
  }
  interactiveActivities?: Array<{
    type: 'multiple-choice' | 'drag-drop' | 'turn-talk' | 'think-pair-share'
    title: string
    description: string
    duration: string
  }>
}

export interface AssessmentStrategy {
  category: 'formative' | 'feedback' | 'differentiation'
  title: string
  strategies: string[]
}

export interface DifferentiationSupport {
  audience: 'struggling' | 'advanced' | 'ell'
  title: string
  strategies: string[]
}

export interface ResourceCategory {
  category: 'technology' | 'instructional' | 'external'
  title: string
  items: Array<{
    name: string
    link?: string
    description?: string
  }>
}

export interface ReflectionSection {
  questions: string[]
  dataCollection: string[]
  nextUnitPrep: string[]
}

// Main lesson plan data structure
export interface UnitLessonPlan {
  unitNumber: number
  unitTitle: string
  description: string
  essentialQuestion: string
  meta: UnitMeta
  
  // Stage 1: Desired Results
  objectives: {
    enduring: string[]
    knowledge: LearningObjective[]
    skills: LearningObjective[]
  }
  
  // Stage 2: Assessment Evidence
  assessment: {
    performanceTask: PerformanceTask
    milestones: MilestoneAssessment[]
    rubric: RubricCriteria[]
  }
  
  // Stage 3: Learning Plan
  learningPlan: {
    overview: {
      phases: Array<{
        title: string
        description: string
        days: string
      }>
    }
    dailyLessons: DailyLesson[]
  }
  
  // Additional sections
  assessmentStrategies: AssessmentStrategy[]
  differentiation: DifferentiationSupport[]
  resources: ResourceCategory[]
  reflection: ReflectionSection
}

// For unit overview pages (lighter than full lesson plans)
export interface UnitOverview {
  unitNumber: number
  unitTitle: string
  description: string
  essentialQuestion: string
  meta: UnitMeta
  learningTargets: string[]
  keyAssessments: string[]
  excelSkills: string[]
  businessSkills: string[]
  capstoneConnection: string
}