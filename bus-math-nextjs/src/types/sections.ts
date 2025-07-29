export interface VideoContent {
  youtubeId: string
  title: string
  duration?: string
  description?: string
  transcript: string
}

export interface EntryEvent {
  title: string
  description: string
  activities: string[]
  resources?: string[]
}

export interface ProjectOverview {
  scenario: string
  teamStructure: string
  deliverable: string
  timeline: string
}

export interface UnitIntroductionData {
  unitNumber: string
  unitTitle: string
  drivingQuestion: string
  introVideo?: VideoContent
  entryEvent: EntryEvent
  projectOverview: ProjectOverview
  learningObjectives: {
    content: string[]
    skills: string[]
    deliverables: string[]
  }
  nextSectionHref?: string
}