export interface LessonContent {
  lessonNumber: number;
  title: string;
  description: string;
  keyLearningOutcomes: string[];
  businessContext: string;
  mainContent: string;
  practicalApplications: string[];
  commonMistakes?: string[];
  professionalTips?: string[];
  vocabularyTerms?: {
    term: string;
    definition: string;
    businessExample?: string;
  }[];
}