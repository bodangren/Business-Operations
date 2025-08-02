"use client"

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'

// Phase types based on MCP curriculum structure
export type LessonPhase = 'Hook' | 'Introduction' | 'Guided Practice' | 'Independent Practice' | 'Assessment' | 'Closing'

export interface LessonPhaseProgress {
  lessonId: string
  phaseId: string
  phaseName: LessonPhase
  isCompleted: boolean
  timeSpent?: number
  lastAccessed?: Date
  notes?: string
}

export interface LessonProgress {
  lessonId: string
  lessonNumber: number
  lessonTitle: string
  phases: LessonPhaseProgress[]
  overallProgress: number // 0-100 percentage
  isCompleted: boolean
  totalTimeSpent: number
}

export interface UnitProgress {
  unitId: string
  unitTitle: string
  lessons: LessonProgress[]
  overallProgress: number // 0-100 percentage
  isCompleted: boolean
  totalTimeSpent: number
  startDate?: Date
  completionDate?: Date
}

interface ProgressState {
  units: { [unitId: string]: UnitProgress }
  currentUnit?: string
  currentLesson?: string
  currentPhase?: string
  isLoading: boolean
  error?: string
}

type ProgressAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | undefined }
  | { type: 'LOAD_PROGRESS'; payload: { [unitId: string]: UnitProgress } }
  | { type: 'SET_CURRENT_CONTEXT'; payload: { unitId?: string; lessonId?: string; phaseId?: string } }
  | { type: 'UPDATE_PHASE_PROGRESS'; payload: { unitId: string; lessonId: string; phaseId: string; progress: Partial<LessonPhaseProgress> } }
  | { type: 'COMPLETE_PHASE'; payload: { unitId: string; lessonId: string; phaseId: string } }
  | { type: 'RESET_UNIT_PROGRESS'; payload: { unitId: string } }
  | { type: 'INITIALIZE_UNIT'; payload: UnitProgress }

interface LessonProgressContextType {
  state: ProgressState
  // Progress tracking methods
  completePhase: (unitId: string, lessonId: string, phaseId: string) => void
  updatePhaseProgress: (unitId: string, lessonId: string, phaseId: string, progress: Partial<LessonPhaseProgress>) => void
  setCurrentContext: (unitId?: string, lessonId?: string, phaseId?: string) => void
  
  // Data access methods
  getUnitProgress: (unitId: string) => UnitProgress | undefined
  getLessonProgress: (unitId: string, lessonId: string) => LessonProgress | undefined
  getPhaseProgress: (unitId: string, lessonId: string, phaseId: string) => LessonPhaseProgress | undefined
  
  // Calculation methods
  calculateLessonProgress: (unitId: string, lessonId: string) => number
  calculateUnitProgress: (unitId: string) => number
  
  // Utility methods
  resetUnitProgress: (unitId: string) => void
  initializeUnit: (unitId: string, unitTitle: string, lessons: any[]) => void
  exportProgress: () => string
  importProgress: (data: string) => void
}

const initialState: ProgressState = {
  units: {},
  isLoading: false
}

const progressReducer = (state: ProgressState, action: ProgressAction): ProgressState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    
    case 'LOAD_PROGRESS':
      return { ...state, units: action.payload, isLoading: false }
    
    case 'SET_CURRENT_CONTEXT':
      return {
        ...state,
        currentUnit: action.payload.unitId,
        currentLesson: action.payload.lessonId,
        currentPhase: action.payload.phaseId
      }
    
    case 'INITIALIZE_UNIT':
      return {
        ...state,
        units: {
          ...state.units,
          [action.payload.unitId]: action.payload
        }
      }
    
    case 'UPDATE_PHASE_PROGRESS': {
      const { unitId, lessonId, phaseId, progress } = action.payload
      const unit = state.units[unitId]
      if (!unit) return state

      const updatedLessons = unit.lessons.map(lesson => {
        if (lesson.lessonId === lessonId) {
          const updatedPhases = lesson.phases.map(phase => {
            if (phase.phaseId === phaseId) {
              const updatedPhase = { ...phase, ...progress, lastAccessed: new Date() }
              return updatedPhase
            }
            return phase
          })
          
          // Recalculate lesson progress
          const completedPhases = updatedPhases.filter(p => p.isCompleted).length
          const overallProgress = Math.round((completedPhases / updatedPhases.length) * 100)
          
          return {
            ...lesson,
            phases: updatedPhases,
            overallProgress,
            isCompleted: overallProgress === 100,
            totalTimeSpent: updatedPhases.reduce((sum, p) => sum + (p.timeSpent || 0), 0)
          }
        }
        return lesson
      })

      // Recalculate unit progress
      const totalLessonProgress = updatedLessons.reduce((sum, lesson) => sum + lesson.overallProgress, 0)
      const unitOverallProgress = Math.round(totalLessonProgress / updatedLessons.length)
      
      const updatedUnit = {
        ...unit,
        lessons: updatedLessons,
        overallProgress: unitOverallProgress,
        isCompleted: unitOverallProgress === 100,
        totalTimeSpent: updatedLessons.reduce((sum, lesson) => sum + lesson.totalTimeSpent, 0),
        completionDate: unitOverallProgress === 100 ? new Date() : unit.completionDate
      }

      return {
        ...state,
        units: {
          ...state.units,
          [unitId]: updatedUnit
        }
      }
    }
    
    case 'COMPLETE_PHASE': {
      const { unitId, lessonId, phaseId } = action.payload
      return progressReducer(state, {
        type: 'UPDATE_PHASE_PROGRESS',
        payload: {
          unitId,
          lessonId,
          phaseId,
          progress: { isCompleted: true }
        }
      })
    }
    
    case 'RESET_UNIT_PROGRESS': {
      const { unitId } = action.payload
      const unit = state.units[unitId]
      if (!unit) return state

      const resetLessons = unit.lessons.map(lesson => ({
        ...lesson,
        phases: lesson.phases.map(phase => ({
          ...phase,
          isCompleted: false,
          timeSpent: 0,
          lastAccessed: undefined,
          notes: undefined
        })),
        overallProgress: 0,
        isCompleted: false,
        totalTimeSpent: 0
      }))

      return {
        ...state,
        units: {
          ...state.units,
          [unitId]: {
            ...unit,
            lessons: resetLessons,
            overallProgress: 0,
            isCompleted: false,
            totalTimeSpent: 0,
            completionDate: undefined
          }
        }
      }
    }
    
    default:
      return state
  }
}

const LessonProgressContext = createContext<LessonProgressContextType | undefined>(undefined)

interface LessonProgressProviderProps {
  children: ReactNode
}

export const LessonProgressProvider: React.FC<LessonProgressProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(progressReducer, initialState)

  // Load progress from localStorage on initialization
  useEffect(() => {
    const loadStoredProgress = async () => {
      dispatch({ type: 'SET_LOADING', payload: true })
      try {
        const stored = localStorage.getItem('lesson_progress')
        if (stored) {
          const parsed = JSON.parse(stored)
          // Convert date strings back to Date objects
          const processedData: { [unitId: string]: UnitProgress } = {}
          
          Object.keys(parsed).forEach(unitId => {
            const unit = parsed[unitId]
            processedData[unitId] = {
              ...unit,
              startDate: unit.startDate ? new Date(unit.startDate) : undefined,
              completionDate: unit.completionDate ? new Date(unit.completionDate) : undefined,
              lessons: unit.lessons.map((lesson: any) => ({
                ...lesson,
                phases: lesson.phases.map((phase: any) => ({
                  ...phase,
                  lastAccessed: phase.lastAccessed ? new Date(phase.lastAccessed) : undefined
                }))
              }))
            }
          })
          
          dispatch({ type: 'LOAD_PROGRESS', payload: processedData })
        } else {
          dispatch({ type: 'SET_LOADING', payload: false })
        }
      } catch (error) {
        console.error('Failed to load progress from localStorage:', error)
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load saved progress' })
      }
    }

    loadStoredProgress()
  }, [])

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    if (!state.isLoading && Object.keys(state.units).length > 0) {
      try {
        localStorage.setItem('lesson_progress', JSON.stringify(state.units))
      } catch (error) {
        console.error('Failed to save progress to localStorage:', error)
      }
    }
  }, [state.units, state.isLoading])

  const completePhase = (unitId: string, lessonId: string, phaseId: string) => {
    dispatch({
      type: 'COMPLETE_PHASE',
      payload: { unitId, lessonId, phaseId }
    })
  }

  const updatePhaseProgress = (unitId: string, lessonId: string, phaseId: string, progress: Partial<LessonPhaseProgress>) => {
    dispatch({
      type: 'UPDATE_PHASE_PROGRESS',
      payload: { unitId, lessonId, phaseId, progress }
    })
  }

  const setCurrentContext = (unitId?: string, lessonId?: string, phaseId?: string) => {
    dispatch({
      type: 'SET_CURRENT_CONTEXT',
      payload: { unitId, lessonId, phaseId }
    })
  }

  const getUnitProgress = (unitId: string): UnitProgress | undefined => {
    return state.units[unitId]
  }

  const getLessonProgress = (unitId: string, lessonId: string): LessonProgress | undefined => {
    const unit = state.units[unitId]
    return unit?.lessons.find(lesson => lesson.lessonId === lessonId)
  }

  const getPhaseProgress = (unitId: string, lessonId: string, phaseId: string): LessonPhaseProgress | undefined => {
    const lesson = getLessonProgress(unitId, lessonId)
    return lesson?.phases.find(phase => phase.phaseId === phaseId)
  }

  const calculateLessonProgress = (unitId: string, lessonId: string): number => {
    const lesson = getLessonProgress(unitId, lessonId)
    return lesson?.overallProgress || 0
  }

  const calculateUnitProgress = (unitId: string): number => {
    const unit = getUnitProgress(unitId)
    return unit?.overallProgress || 0
  }

  const resetUnitProgress = (unitId: string) => {
    dispatch({
      type: 'RESET_UNIT_PROGRESS',
      payload: { unitId }
    })
  }

  const initializeUnit = (unitId: string, unitTitle: string, lessons: any[]) => {
    // Don't reinitialize if unit already exists
    if (state.units[unitId]) return

    const unitProgress: UnitProgress = {
      unitId,
      unitTitle,
      lessons: lessons.map(lesson => ({
        lessonId: lesson.id,
        lessonNumber: lesson.sequence,
        lessonTitle: lesson.title,
        phases: [], // Will be populated when phases are loaded
        overallProgress: 0,
        isCompleted: false,
        totalTimeSpent: 0
      })),
      overallProgress: 0,
      isCompleted: false,
      totalTimeSpent: 0,
      startDate: new Date()
    }

    dispatch({
      type: 'INITIALIZE_UNIT',
      payload: unitProgress
    })
  }

  const exportProgress = (): string => {
    return JSON.stringify(state.units, null, 2)
  }

  const importProgress = (data: string) => {
    try {
      const parsed = JSON.parse(data)
      dispatch({ type: 'LOAD_PROGRESS', payload: parsed })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Invalid progress data format' })
    }
  }

  const contextValue: LessonProgressContextType = {
    state,
    completePhase,
    updatePhaseProgress,
    setCurrentContext,
    getUnitProgress,
    getLessonProgress,
    getPhaseProgress,
    calculateLessonProgress,
    calculateUnitProgress,
    resetUnitProgress,
    initializeUnit,
    exportProgress,
    importProgress
  }

  return (
    <LessonProgressContext.Provider value={contextValue}>
      {children}
    </LessonProgressContext.Provider>
  )
}

export const useLessonProgress = (): LessonProgressContextType => {
  const context = useContext(LessonProgressContext)
  if (!context) {
    throw new Error('useLessonProgress must be used within a LessonProgressProvider')
  }
  return context
}