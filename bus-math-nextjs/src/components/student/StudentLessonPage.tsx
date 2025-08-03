"use client"

import React, { useEffect, useState } from 'react'
import { useLessonProgress } from '@/contexts/LessonProgressContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, BookOpen, Clock, CheckCircle } from 'lucide-react'
import { LessonPhaseContent } from '../lesson/LessonPhaseContent'
import { SelfPacedNavigation } from './SelfPacedNavigation'
import { ProgressTracker } from './ProgressTracker'
import { BilingualVocabularyGlossary } from '../ell-support/BilingualVocabularyGlossary'
import { MultilingualSupport } from './MultilingualSupport'
import { ReadingLevelAdjuster } from './ReadingLevelAdjuster'

interface StudentLessonPageProps {
  unitId: string
  lessonNumber: number
}

interface Phase {
  id: string;
  name: string;
  sequence: number;
  description: string;
}

interface LessonData {
  id: string;
  title: string;
  learningObjectives: string[];
  phases: Phase[];
}

export function StudentLessonPage({ unitId, lessonNumber }: StudentLessonPageProps) {
  const {
    setCurrentContext,
    calculateLessonProgress,
    completePhase,
  } = useLessonProgress()

  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  const [lessonData, setLessonData] = useState<LessonData | null>(null)
  const [phases, setPhases] = useState<Phase[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState('en');
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [readingLevel, setReadingLevel] = useState('medium');


  // Load lesson data from MCP
  useEffect(() => {
    const loadLessonData = async () => {
      setIsLoading(true)
      try {
        // This would normally fetch from MCP, but for now we'll simulate
        // In a real implementation, you'd call the MCP functions here
        const mockLessonData: LessonData = {
          id: `lesson-${lessonNumber}`,
          title: `Lesson ${lessonNumber}: Business Concepts`,
          learningObjectives: [
            'Understand key business terminology',
            'Apply accounting principles',
            'Create professional presentations'
          ],
          phases: [
            { id: 'hook', name: 'Hook', sequence: 1, description: 'Engaging opener to capture student interest' },
            { id: 'intro', name: 'Introduction', sequence: 2, description: 'Introduce key concepts and vocabulary' },
            { id: 'guided', name: 'Guided Practice', sequence: 3, description: 'Teacher-led practice activities' },
            { id: 'independent', name: 'Independent Practice', sequence: 4, description: 'Student-led practice and exploration' },
            { id: 'assessment', name: 'Assessment', sequence: 5, description: 'Check for understanding' },
            { id: 'closing', name: 'Closing', sequence: 6, description: 'Wrap up and preview next lesson' }
          ]
        }
        
        setLessonData(mockLessonData)
        setPhases(mockLessonData.phases)
        setCurrentContext(unitId, mockLessonData.id, mockLessonData.phases[0]?.id)
      } catch (error) {
        console.error('Failed to load lesson data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadLessonData()
  }, [unitId, lessonNumber, setCurrentContext])

  const handlePhaseComplete = () => {
    if (lessonData && phases[currentPhaseIndex]) {
      completePhase(unitId, lessonData.id, phases[currentPhaseIndex].id)
      
      // Auto-advance to next phase
      if (currentPhaseIndex < phases.length - 1) {
        setCurrentPhaseIndex(currentPhaseIndex + 1)
        setCurrentContext(unitId, lessonData.id, phases[currentPhaseIndex + 1].id)
      }
    }
  }

  const navigateToPhase = (index: number) => {
    if (index >= 0 && index < phases.length) {
      setCurrentPhaseIndex(index)
      if (lessonData) {
        setCurrentContext(unitId, lessonData.id, phases[index].id)
      }
    }
  }

  const currentPhase = phases[currentPhaseIndex]
  const lessonProgress = lessonData ? calculateLessonProgress(unitId, lessonData.id) : 0

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading lesson...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {lessonData?.title || `Lesson ${lessonNumber}`}
              </h1>
              <p className="text-gray-600 text-base mt-2">
                Unit {unitId.replace('unit', '')} • Lesson {lessonNumber}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <ProgressTracker 
                lessonProgress={lessonProgress}
                currentPhase={currentPhaseIndex + 1}
                totalPhases={phases.length}
              />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Lesson Progress
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(lessonProgress)}%
              </span>
            </div>
            <Progress value={lessonProgress} className="h-2" />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Self-Paced Navigation Sidebar */}
          <div className="lg:col-span-1">
            <SelfPacedNavigation
              phases={phases}
              currentPhaseIndex={currentPhaseIndex}
              onPhaseSelect={navigateToPhase}
              lessonProgress={lessonProgress}
              language={language}
              fontSize={fontSize}
              highContrast={highContrast}
            />
            
            {showVocabulary && (
              <div className="mt-6">
                <BilingualVocabularyGlossary
                  lessonNumber={lessonNumber}
                  language={language}
                  fontSize={fontSize}
                  highContrast={highContrast}
                />
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className={`${highContrast ? 'bg-gray-900 border-gray-700' : 'bg-white'} shadow-lg`}>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className={`flex items-center gap-2 ${fontSize === 'large' ? 'text-2xl' : fontSize === 'medium' ? 'text-xl' : 'text-lg'} ${highContrast ? 'text-white' : ''}`}>
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <MultilingualSupport
                      en={currentPhase?.name || 'Loading...'}
                      zh={getChinesePhaseTranslation(currentPhase?.name)}
                      language={language}
                    />
                  </CardTitle>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`${fontSize === 'large' ? 'text-sm' : 'text-xs'}`}>
                      <MultilingualSupport
                        en={`Phase ${currentPhaseIndex + 1} of ${phases.length}`}
                        zh={`第${currentPhaseIndex + 1}阶段，共${phases.length}阶段`}
                        language={language}
                      />
                    </Badge>
                    <Badge variant="secondary" className={`${fontSize === 'large' ? 'text-sm' : 'text-xs'}`}>
                      <Clock className="h-3 w-3 mr-1" />
                      <MultilingualSupport
                        en="15 min"
                        zh="15分钟"
                        language={language}
                      />
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {currentPhase && (
                  <div className="space-y-6">
                    {/* Phase Description */}
                    <div className={`p-4 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-blue-50'}`}>
                      <p className={`${fontSize === 'large' ? 'text-lg' : 'text-base'} ${highContrast ? 'text-gray-200' : 'text-gray-700'}`}>
                        <ReadingLevelAdjuster
                          content={currentPhase.description}
                          level={readingLevel}
                          language={language}
                        />
                      </p>
                    </div>

                    {/* Phase Content */}
                    <LessonPhaseContent
                      phaseId={currentPhase.id}
                      phaseName={currentPhase.name}
                      unitId={unitId}
                      lessonNumber={lessonNumber}
                      language={language}
                      readingLevel={readingLevel}
                      fontSize={fontSize}
                      highContrast={highContrast}
                    />

                    {/* Navigation */}
                    <div className="flex justify-between items-center pt-6 border-t">
                      <Button
                        variant="outline"
                        onClick={() => navigateToPhase(currentPhaseIndex - 1)}
                        disabled={currentPhaseIndex === 0}
                        className={fontSize === 'large' ? 'text-lg px-6 py-3' : ''}
                      >
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        <MultilingualSupport
                          en="Previous"
                          zh="上一个"
                          language={language}
                        />
                      </Button>

                      <Button
                        onClick={handlePhaseComplete}
                        className={`bg-green-600 hover:bg-green-700 ${fontSize === 'large' ? 'text-lg px-6 py-3' : ''}`}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <MultilingualSupport
                          en="Complete Phase"
                          zh="完成阶段"
                          language={language}
                        />
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => navigateToPhase(currentPhaseIndex + 1)}
                        disabled={currentPhaseIndex === phases.length - 1}
                        className={fontSize === 'large' ? 'text-lg px-6 py-3' : ''}
                      >
                        <MultilingualSupport
                          en="Next"
                          zh="下一个"
                          language={language}
                        />
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function getChinesePhaseTranslation(phaseName?: string): string {
  const translations: Record<string, string> = {
    'Hook': '引入',
    'Introduction': '介绍',
    'Guided Practice': '指导练习',
    'Independent Practice': '独立练习',
    'Assessment': '评估',
    'Closing': '总结'
  }
  return translations[phaseName || ''] || phaseName || ''
}