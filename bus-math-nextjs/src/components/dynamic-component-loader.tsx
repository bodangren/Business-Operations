'use client'

import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Loader2, AlertTriangle } from 'lucide-react'

interface DynamicComponentLoaderProps {
  componentName: string
  props?: Record<string, any>
  required?: boolean
}

// Dynamic imports for all our interactive components
const componentMap: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  // Accounting Components
  'TAccountsVisualization': () => import('@/components/accounting/TAccountsVisualization'),
  'TransactionJournal': () => import('@/components/accounting/TransactionJournal'),
  'JournalEntry': () => import('@/components/accounting/JournalEntry'),
  'TAccountDetailed': () => import('@/components/accounting/TAccountDetailed'),
  'TAccountSimple': () => import('@/components/accounting/TAccountSimple'),
  'TrialBalance': () => import('@/components/accounting/TrialBalance'),

  // Exercise Components
  'ComprehensionCheck': () => import('@/components/exercises/ComprehensionCheck'),
  'DragAndDrop': () => import('@/components/exercises/DragAndDrop'),
  'FillInTheBlank': () => import('@/components/exercises/FillInTheBlank'),
  'JournalEntryBuilding': () => import('@/components/exercises/JournalEntryBuilding'),
  'ReflectionJournal': () => import('@/components/exercises/ReflectionJournal'),
  'PeerCritiqueForm': () => import('@/components/exercises/PeerCritiqueForm'),
  'FeedbackCollector': () => import('@/components/exercises/FeedbackCollector'),

  // Drag and Drop Exercises
  'BusinessTransactionCategorization': () => import('@/components/drag-drop/BusinessTransactionCategorization'),
  'AccountCategorization': () => import('@/components/drag-drop-exercises/AccountCategorization'),
  'BreakEvenComponents': () => import('@/components/drag-drop-exercises/BreakEvenComponents'),
  'CashFlowTimeline': () => import('@/components/drag-drop-exercises/CashFlowTimeline'),
  'FinancialStatementMatching': () => import('@/components/drag-drop-exercises/FinancialStatementMatching'),
  'TrialBalanceSorting': () => import('@/components/drag-drop-exercises/TrialBalanceSorting'),
  'RatioMatching': () => import('@/components/drag-drop-exercises/RatioMatching'),
  'BudgetCategorySort': () => import('@/components/drag-drop-exercises/BudgetCategorySort'),
  'PercentageCalculationSorting': () => import('@/components/drag-drop-exercises/PercentageCalculationSorting'),
  'InventoryFlowDiagram': () => import('@/components/drag-drop-exercises/InventoryFlowDiagram'),

  // Business Simulations
  'BudgetBalancer': () => import('@/components/business-simulations/BudgetBalancer'),
  'CashFlowChallenge': () => import('@/components/business-simulations/CashFlowChallenge'),
  'InventoryManager': () => import('@/components/business-simulations/InventoryManager'),
  'LemonadeStand': () => import('@/components/business-simulations/LemonadeStand'),
  'StartupJourney': () => import('@/components/business-simulations/StartupJourney'),
  'ErrorCheckingSystem': () => import('@/components/business-simulations/ErrorCheckingSystem'),
  'PitchPresentationBuilder': () => import('@/components/business-simulations/PitchPresentationBuilder'),

  // Financial Calculations
  'InterestCalculationBuilder': () => import('@/components/financial-calculations/InterestCalculationBuilder'),
  'BreakEvenAnalysisCalculator': () => import('@/components/financial-calculations/BreakEvenAnalysisCalculator'),
  'DepreciationMethodBuilder': () => import('@/components/financial-calculations/DepreciationMethodBuilder'),

  // Charts
  'BarChart': () => import('@/components/charts/BarChart'),
  'BreakEvenChart': () => import('@/components/charts/BreakEvenChart'),
  'DoughnutChart': () => import('@/components/charts/DoughnutChart'),
  'FinancialDashboard': () => import('@/components/charts/FinancialDashboard'),
  'LineChart': () => import('@/components/charts/LineChart'),
  'PieChart': () => import('@/components/charts/PieChart'),

  // Financial Reports
  'BalanceSheetDetailed': () => import('@/components/financial-reports/BalanceSheetDetailed'),
  'BalanceSheetSimple': () => import('@/components/financial-reports/BalanceSheetSimple'),
  'CashFlowStatementDetailed': () => import('@/components/financial-reports/CashFlowStatementDetailed'),
  'CashFlowStatementSimple': () => import('@/components/financial-reports/CashFlowStatementSimple'),
  'IncomeStatementDetailed': () => import('@/components/financial-reports/IncomeStatementDetailed'),
  'IncomeStatementSimple': () => import('@/components/financial-reports/IncomeStatementSimple'),

  // ELL Support
  'BilingualVocabularyGlossary': () => import('@/components/ell-support/BilingualVocabularyGlossary'),
  'VisualInfographic': () => import('@/components/ell-support/VisualInfographic'),

  // Spreadsheet
  'SpreadsheetTemplates': () => import('@/components/spreadsheet/SpreadsheetTemplates'),
}

// Create dynamic components with loading states
const createDynamicComponent = (componentName: string) => {
  if (!componentMap[componentName]) {
    return null
  }

  return dynamic(componentMap[componentName], {
    loading: () => (
      <Card className="border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin mr-2" />
            <span>Loading {componentName}...</span>
          </div>
        </CardContent>
      </Card>
    ),
    ssr: false
  })
}

export function DynamicComponentLoader({ componentName, props = {}, required = false }: DynamicComponentLoaderProps) {
  // Check if component exists in map first
  if (!componentMap[componentName]) {
    return (
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <AlertTriangle className="w-5 h-5" />
            Component Not Found
            {required && (
              <Badge variant="destructive" className="ml-2">Required</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-700">
            The component <strong>{componentName}</strong> is not available in the component map.
          </p>
          <p className="text-sm text-yellow-600 mt-2">
            Available components: {Object.keys(componentMap).join(', ')}
            {required && ' This activity is required to proceed.'}
          </p>
        </CardContent>
      </Card>
    )
  }

  const DynamicComponent = createDynamicComponent(componentName)

  if (!DynamicComponent) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800">
            <AlertTriangle className="w-5 h-5" />
            Component Load Error
            {required && (
              <Badge variant="destructive" className="ml-2">Required</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-700">
            Failed to create dynamic component for <strong>{componentName}</strong>.
          </p>
          <p className="text-sm text-red-600 mt-2">
            This might be due to an import error or component export issue.
            {required && ' This activity is required to proceed.'}
          </p>
        </CardContent>
      </Card>
    )
  }

  return <DynamicComponent {...props} />
}

// Helper function to get all available component names
export function getAvailableComponents(): string[] {
  return Object.keys(componentMap).sort()
}

// Helper function to check if a component exists
export function componentExists(componentName: string): boolean {
  return componentName in componentMap
}