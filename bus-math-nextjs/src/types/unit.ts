export interface UnitData {
  id: string
  title: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  
  drivingQuestion: {
    question: string
    context: string
    scenario?: string
  }
  
  objectives: {
    content: string[]
    skills: string[]
    deliverables: string[]
  }
  
  assessment: {
    performanceTask: {
      title: string
      description: string
      requirements: string[]
      context?: string
    }
    milestones: Milestone[]
    rubric: RubricCriteria[]
  }
  
  learningSequence: {
    weeks: Week[]
  }
  
  studentChoices: {
    ventures?: string[]
    roles?: string[]
    presentationFormats?: string[]
  }
  
  prerequisites: {
    knowledge: string[]
    technology: string[]
    resources: Resource[]
  }
  
  differentiation?: {
    struggling: string[]
    advanced: string[]
    ell: string[]
  }
}

export interface Milestone {
  id: string
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

export interface Week {
  weekNumber: number
  title: string
  description: string
  days: Day[]
}

export interface Day {
  day: number
  focus: string
  activities: string[]
  resources: string[]
  milestone?: string
}

export interface Resource {
  title: string
  url?: string
  type: 'download' | 'link' | 'external'
}