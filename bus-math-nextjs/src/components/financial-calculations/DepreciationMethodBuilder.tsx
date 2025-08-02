/**
 * DepreciationMethodBuilder Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { DepreciationMethodBuilder } from '@/components/financial-calculations/DepreciationMethodBuilder'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <DepreciationMethodBuilder />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * No props are required - it initializes with realistic business scenario values.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Master 4 depreciation methods and understand tax strategy implications
 * for Unit 7 Asset & Inventory Tracker curriculum.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Asset Scenario Selection**: Choose from 4 realistic business scenarios with
 *    pre-configured asset types, costs, and business contexts.
 * 
 * 2. **Method Comparison**: Compare Straight-line, Double Declining Balance, 
 *    Sum-of-Years-Digits, and Units of Production methods side-by-side.
 * 
 * 3. **Interactive Calculations**: Input custom asset values and see instant
 *    year-by-year depreciation schedules with business implications.
 * 
 * 4. **Tax Strategy Analysis**: Understand how depreciation method selection
 *    affects cash flow, tax obligations, and financial statement presentation.
 * 
 * 5. **Excel Formula Integration**: Generate professional Excel formulas
 *    (SLN, DDB, SYD) for real-world business modeling.
 * 
 * 6. **Business Context Learning**: Each scenario includes realistic business
 *    rationale for method selection based on industry best practices.
 * 
 * KEY LEARNING OUTCOMES:
 * - Master calculations for all 4 standard depreciation methods
 * - Understand tax implications of accelerated vs. straight-line depreciation
 * - Apply method selection criteria based on asset type and business strategy
 * - Build Excel proficiency with depreciation functions
 * - Connect asset management decisions to cash flow and financial statements
 * - Develop professional presentation skills for audit and investor scenarios
 */

'use client'

import React, { useState, useMemo, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { 
  Calculator,
  Factory,
  Truck,
  ChefHat,
  Monitor,
  TrendingDown,
  FileSpreadsheet,
  DollarSign,
  Calendar,
  Settings,
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Target,
  BarChart3,
  Clock,
  Wrench
} from 'lucide-react'

interface AssetScenario {
  id: string
  name: string
  icon: any
  description: string
  assetType: string
  cost: number
  salvageValue: number
  usefulLife: number
  estimatedUnits: number
  businessContext: string
  methodRecommendation: string
  taxStrategy: string
}

interface DepreciationInputs {
  cost: number
  salvageValue: number
  usefulLife: number
  estimatedUnits: number
  actualUnits: number[]
}

interface DepreciationSchedule {
  year: number
  beginningBookValue: number
  depreciationExpense: number
  accumulatedDepreciation: number
  endingBookValue: number
}

interface MethodResults {
  straightLine: DepreciationSchedule[]
  doubleDeclining: DepreciationSchedule[]
  sumOfYears: DepreciationSchedule[]
  unitsOfProduction: DepreciationSchedule[]
}

const assetScenarios: AssetScenario[] = [
  {
    id: 'commercial-oven',
    name: 'Commercial Oven',
    icon: ChefHat,
    description: 'Restaurant equipment for consistent food production',
    assetType: 'Kitchen Equipment',
    cost: 15000,
    salvageValue: 1000,
    usefulLife: 10,
    estimatedUnits: 50000,
    businessContext: 'Bakery expanding operations with consistent daily usage patterns',
    methodRecommendation: 'Straight-line method provides predictable expense matching revenue patterns',
    taxStrategy: 'Conservative approach maintains steady tax deductions across asset life'
  },
  {
    id: 'delivery-truck',
    name: 'Delivery Truck',
    icon: Truck,
    description: 'Transportation vehicle for business operations',
    assetType: 'Vehicle',
    cost: 35000,
    salvageValue: 5000,
    usefulLife: 8,
    estimatedUnits: 200000,
    businessContext: 'E-commerce business requiring reliable delivery capacity',
    methodRecommendation: 'Double declining balance maximizes early tax benefits for cash flow',
    taxStrategy: 'Accelerated depreciation improves early-year cash flow for growth investment'
  },
  {
    id: 'pos-system',
    name: 'POS System',
    icon: Monitor,
    description: 'Point-of-sale technology for retail operations',
    assetType: 'Technology',
    cost: 8000,
    salvageValue: 500,
    usefulLife: 5,
    estimatedUnits: 25000,
    businessContext: 'Retail store upgrading to integrated inventory and payment processing',
    methodRecommendation: 'Sum-of-years method reflects rapid technology obsolescence patterns',
    taxStrategy: 'Accelerated method accounts for fast depreciation of technology assets'
  },
  {
    id: 'manufacturing-equipment',
    name: 'Manufacturing Equipment',
    icon: Factory,
    description: 'Production machinery for manufacturing operations',
    assetType: 'Manufacturing',
    cost: 50000,
    salvageValue: 2000,
    usefulLife: 12,
    estimatedUnits: 100000,
    businessContext: 'Manufacturing facility with variable production schedules based on orders',
    methodRecommendation: 'Units of production matches depreciation with actual asset usage',
    taxStrategy: 'Activity-based method provides accurate cost allocation for product pricing'
  }
]

export function DepreciationMethodBuilder() {
  const [selectedScenario, setSelectedScenario] = useState<AssetScenario>(assetScenarios[0])
  const [inputs, setInputs] = useState<DepreciationInputs>({
    cost: assetScenarios[0].cost,
    salvageValue: assetScenarios[0].salvageValue,
    usefulLife: assetScenarios[0].usefulLife,
    estimatedUnits: assetScenarios[0].estimatedUnits,
    actualUnits: [8000, 9500, 10200, 8800, 7500] // Default 5 years of production
  })

  const [showInstructions, setShowInstructions] = useState(false)
  const [showFormulas, setShowFormulas] = useState(false)

  // Calculate depreciation schedules for all methods
  const results: MethodResults = useMemo(() => {
    const depreciableBase = inputs.cost - inputs.salvageValue
    const straightLineRate = depreciableBase / inputs.usefulLife
    
    // Straight-line method
    const straightLine: DepreciationSchedule[] = []
    let bookValue = inputs.cost
    
    for (let year = 1; year <= inputs.usefulLife; year++) {
      const depreciationExpense = straightLineRate
      const accumulatedDepreciation = straightLineRate * year
      const endingBookValue = inputs.cost - accumulatedDepreciation
      
      straightLine.push({
        year,
        beginningBookValue: bookValue,
        depreciationExpense,
        accumulatedDepreciation,
        endingBookValue: Math.max(endingBookValue, inputs.salvageValue)
      })
      
      bookValue = Math.max(endingBookValue, inputs.salvageValue)
    }

    // Double declining balance method
    const doubleDeclining: DepreciationSchedule[] = []
    const ddRate = (2 / inputs.usefulLife)
    bookValue = inputs.cost
    let totalAccumulated = 0
    
    for (let year = 1; year <= inputs.usefulLife; year++) {
      const maxDepreciation = bookValue - inputs.salvageValue
      const ddDepreciation = bookValue * ddRate
      const depreciationExpense = Math.min(ddDepreciation, maxDepreciation)
      
      totalAccumulated += depreciationExpense
      const endingBookValue = inputs.cost - totalAccumulated
      
      doubleDeclining.push({
        year,
        beginningBookValue: bookValue,
        depreciationExpense,
        accumulatedDepreciation: totalAccumulated,
        endingBookValue: Math.max(endingBookValue, inputs.salvageValue)
      })
      
      bookValue = Math.max(endingBookValue, inputs.salvageValue)
      if (bookValue <= inputs.salvageValue) break
    }

    // Sum-of-years digits method
    const sumOfYears: DepreciationSchedule[] = []
    const sumOfYearsDigits = (inputs.usefulLife * (inputs.usefulLife + 1)) / 2
    bookValue = inputs.cost
    totalAccumulated = 0
    
    for (let year = 1; year <= inputs.usefulLife; year++) {
      const remainingLife = inputs.usefulLife - year + 1
      const depreciationExpense = (remainingLife / sumOfYearsDigits) * depreciableBase
      totalAccumulated += depreciationExpense
      const endingBookValue = inputs.cost - totalAccumulated
      
      sumOfYears.push({
        year,
        beginningBookValue: bookValue,
        depreciationExpense,
        accumulatedDepreciation: totalAccumulated,
        endingBookValue: Math.max(endingBookValue, inputs.salvageValue)
      })
      
      bookValue = Math.max(endingBookValue, inputs.salvageValue)
    }

    // Units of production method
    const unitsOfProduction: DepreciationSchedule[] = []
    const costPerUnit = depreciableBase / inputs.estimatedUnits
    bookValue = inputs.cost
    totalAccumulated = 0
    
    const yearsToShow = Math.min(inputs.actualUnits.length, inputs.usefulLife)
    for (let year = 1; year <= yearsToShow; year++) {
      const unitsThisYear = inputs.actualUnits[year - 1] || 0
      const depreciationExpense = unitsThisYear * costPerUnit
      totalAccumulated += depreciationExpense
      const endingBookValue = inputs.cost - totalAccumulated
      
      unitsOfProduction.push({
        year,
        beginningBookValue: bookValue,
        depreciationExpense,
        accumulatedDepreciation: totalAccumulated,
        endingBookValue: Math.max(endingBookValue, inputs.salvageValue)
      })
      
      bookValue = Math.max(endingBookValue, inputs.salvageValue)
    }

    return {
      straightLine,
      doubleDeclining,
      sumOfYears,
      unitsOfProduction
    }
  }, [inputs])

  const handleScenarioChange = useCallback((scenario: AssetScenario) => {
    setSelectedScenario(scenario)
    setInputs({
      cost: scenario.cost,
      salvageValue: scenario.salvageValue,
      usefulLife: scenario.usefulLife,
      estimatedUnits: scenario.estimatedUnits,
      actualUnits: inputs.actualUnits // Keep existing actual units
    })
  }, [inputs.actualUnits])

  const handleInputChange = useCallback((field: keyof DepreciationInputs, value: number | number[]) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }, [])

  const resetToDefaults = useCallback(() => {
    setInputs({
      cost: selectedScenario.cost,
      salvageValue: selectedScenario.salvageValue,
      usefulLife: selectedScenario.usefulLife,
      estimatedUnits: selectedScenario.estimatedUnits,
      actualUnits: [8000, 9500, 10200, 8800, 7500]
    })
  }, [selectedScenario])

  const exportToExcel = useCallback(() => {
    // Generate Excel formulas and data
    const excelData = [
      ['Asset Depreciation Analysis - ' + selectedScenario.name],
      [''],
      ['Asset Information:'],
      ['Cost', inputs.cost],
      ['Salvage Value', inputs.salvageValue],
      ['Useful Life', inputs.usefulLife + ' years'],
      ['Estimated Units', inputs.estimatedUnits],
      [''],
      ['Excel Formulas:'],
      ['Straight-Line Annual:', `=SLN(${inputs.cost},${inputs.salvageValue},${inputs.usefulLife})`],
      ['Double Declining Year 1:', `=DDB(${inputs.cost},${inputs.salvageValue},${inputs.usefulLife},1)`],
      ['Sum-of-Years Year 1:', `=SYD(${inputs.cost},${inputs.salvageValue},${inputs.usefulLife},1)`],
      ['Units of Production:', `=(${inputs.cost}-${inputs.salvageValue})/${inputs.estimatedUnits}*ActualUnits`]
    ]
    
    const csvContent = excelData.map(row => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `depreciation-analysis-${selectedScenario.id}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, [selectedScenario, inputs])

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <Calculator className="w-8 h-8 text-green-600" />
            Asset Depreciation Method Builder
            <TrendingDown className="w-8 h-8 text-blue-600" />
          </CardTitle>
          <CardDescription className="text-lg">
            Master depreciation calculations and tax strategy for Unit 7 Asset & Inventory Tracker
          </CardDescription>
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Calculator className="w-3 h-3 mr-1" />
              4 Methods
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <DollarSign className="w-3 h-3 mr-1" />
              Tax Strategy
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <FileSpreadsheet className="w-3 h-3 mr-1" />
              Excel Integration
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              <Target className="w-3 h-3 mr-1" />
              Business Context
            </Badge>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              How to Use
              {showInstructions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFormulas(!showFormulas)}
              className="flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Excel Formulas
              {showFormulas ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Unit 7 Asset & Inventory Tracker - Depreciation Learning Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Learning Objective */}
            <div>
              <h4 className="font-semibold text-green-800 mb-2">🎯 Learning Objective</h4>
              <p className="text-green-700">
                Master the four standard depreciation methods and understand how depreciation method selection 
                impacts cash flow, tax strategy, and financial statement presentation for business decision-making.
              </p>
            </div>

            {/* Scenario Overview */}
            <div>
              <h4 className="font-semibold text-green-800 mb-3">🏭 Business Scenarios</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {assetScenarios.map((scenario) => {
                  const Icon = scenario.icon
                  return (
                    <div key={scenario.id} className="p-3 bg-white rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-green-600" />
                        <h5 className="font-medium text-green-800">{scenario.name}</h5>
                      </div>
                      <p className="text-xs text-green-600 mb-1">{scenario.description}</p>
                      <p className="text-xs text-green-700 font-medium">${scenario.cost.toLocaleString()} asset</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Depreciation Methods */}
            <div>
              <h4 className="font-semibold text-green-800 mb-3">📊 Depreciation Methods Explained</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-100 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2">Straight-Line Method</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Equal depreciation expense each year</li>
                    <li>• Best for assets with consistent usage</li>
                    <li>• Simple and predictable for budgeting</li>
                    <li>• Conservative tax approach</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-800 mb-2">Double Declining Balance</h5>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Higher depreciation in early years</li>
                    <li>• Accelerated tax benefits</li>
                    <li>• Good for rapidly depreciating assets</li>
                    <li>• Improves early cash flow</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-800 mb-2">Sum-of-Years Digits</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Accelerated but less aggressive than DDB</li>
                    <li>• Good for technology assets</li>
                    <li>• Gradual reduction in depreciation</li>
                    <li>• Balances tax benefits with stability</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">Units of Production</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Based on actual asset usage</li>
                    <li>• Variable depreciation by activity</li>
                    <li>• Best for manufacturing equipment</li>
                    <li>• Matches expenses to revenue</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div>
              <h4 className="font-semibold text-green-800 mb-3">🔢 Step-by-Step Instructions</h4>
              <ol className="list-decimal list-inside space-y-2 text-green-700">
                <li><strong>Choose Asset Scenario:</strong> Select from 4 realistic business scenarios</li>
                <li><strong>Review Business Context:</strong> Understand why each method fits the scenario</li>
                <li><strong>Analyze Depreciation Schedules:</strong> Compare year-by-year calculations</li>
                <li><strong>Examine Tax Implications:</strong> Understand cash flow and tax strategy impacts</li>
                <li><strong>Generate Excel Formulas:</strong> Build professional depreciation models</li>
                <li><strong>Make Method Recommendation:</strong> Justify selection based on business needs</li>
              </ol>
            </div>

            {/* Business Context */}
            <div>
              <h4 className="font-semibold text-green-800 mb-2">🏪 Unit 7 Business Context</h4>
              <p className="text-sm text-green-700">
                You're working with a local auditor who has shared real-world examples of companies facing 
                inventory misvaluation and asset depreciation challenges. Your analysis will help businesses 
                make informed decisions about asset acquisition, depreciation method selection, and tax strategy 
                planning. This connects directly to cash flow management and financial statement accuracy.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Excel Formulas Panel */}
      {showFormulas && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5" />
              Excel Depreciation Formulas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg border">
                <h5 className="font-medium mb-2 text-blue-800">SLN (Straight-Line)</h5>
                <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2">
                  =SLN(cost, salvage_value, life)
                </p>
                <p className="text-xs text-blue-600">
                  Example: =SLN(15000, 1000, 10) = $1,400/year
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <h5 className="font-medium mb-2 text-blue-800">DDB (Double Declining)</h5>
                <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2">
                  =DDB(cost, salvage_value, life, period)
                </p>
                <p className="text-xs text-blue-600">
                  Example: =DDB(35000, 5000, 8, 1) = $8,750 Year 1
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <h5 className="font-medium mb-2 text-blue-800">SYD (Sum-of-Years)</h5>
                <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2">
                  =SYD(cost, salvage_value, life, period)
                </p>
                <p className="text-xs text-blue-600">
                  Example: =SYD(8000, 500, 5, 1) = $2,500 Year 1
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <h5 className="font-medium mb-2 text-blue-800">Units of Production</h5>
                <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2">
                  =(cost-salvage)/total_units*actual_units
                </p>
                <p className="text-xs text-blue-600">
                  Example: =(50000-2000)/100000*8000 = $3,840
                </p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Excel Pro Tips</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Use absolute references ($A$1) for cost, salvage, and life cells</li>
                <li>• Create a depreciation schedule table with formulas for each year</li>
                <li>• Use conditional formatting to highlight accelerated depreciation patterns</li>
                <li>• Build summary tables comparing total depreciation across methods</li>
                <li>• Add charts to visualize depreciation patterns over time</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Asset Scenario Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-green-600" />
            Asset Scenario Selection
          </CardTitle>
          <CardDescription>
            Choose a realistic business scenario to analyze depreciation methods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {assetScenarios.map((scenario) => {
              const Icon = scenario.icon
              const isSelected = selectedScenario.id === scenario.id
              return (
                <Card 
                  key={scenario.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    isSelected ? 'ring-2 ring-green-500 bg-green-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleScenarioChange(scenario)}
                >
                  <CardContent className="p-4 text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-green-600' : 'text-gray-600'}`} />
                    <h3 className="font-semibold mb-1">{scenario.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{scenario.assetType}</p>
                    <p className="text-lg font-bold text-green-600">${scenario.cost.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{scenario.usefulLife} years</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          {/* Selected Scenario Details */}
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              {React.createElement(selectedScenario.icon, { className: "w-5 h-5" })}
              {selectedScenario.name} - Business Context
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-green-700 mb-1">Context:</p>
                <p className="text-green-600">{selectedScenario.businessContext}</p>
              </div>
              <div>
                <p className="font-medium text-green-700 mb-1">Method Recommendation:</p>
                <p className="text-green-600">{selectedScenario.methodRecommendation}</p>
              </div>
              <div>
                <p className="font-medium text-green-700 mb-1">Tax Strategy:</p>
                <p className="text-green-600">{selectedScenario.taxStrategy}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="inputs" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="inputs">
            <Settings className="w-4 h-4 mr-2" />
            Asset Details
          </TabsTrigger>
          <TabsTrigger value="comparison">
            <BarChart3 className="w-4 h-4 mr-2" />
            Method Comparison
          </TabsTrigger>
          <TabsTrigger value="schedules">
            <Calendar className="w-4 h-4 mr-2" />
            Depreciation Schedules
          </TabsTrigger>
          <TabsTrigger value="analysis">
            <Target className="w-4 h-4 mr-2" />
            Business Analysis
          </TabsTrigger>
        </TabsList>

        {/* Asset Details Tab */}
        <TabsContent value="inputs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                Asset Information & Inputs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cost" className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    Asset Cost ($)
                  </Label>
                  <Input
                    id="cost"
                    type="number"
                    value={inputs.cost}
                    onChange={(e) => handleInputChange('cost', Number(e.target.value) || 0)}
                    min={0}
                    step={1000}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-600">Initial purchase price</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salvageValue" className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-orange-600" />
                    Salvage Value ($)
                  </Label>
                  <Input
                    id="salvageValue"
                    type="number"
                    value={inputs.salvageValue}
                    onChange={(e) => handleInputChange('salvageValue', Number(e.target.value) || 0)}
                    min={0}
                    step={500}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-600">Estimated end-of-life value</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="usefulLife" className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    Useful Life (years)
                  </Label>
                  <Input
                    id="usefulLife"
                    type="number"
                    value={inputs.usefulLife}
                    onChange={(e) => handleInputChange('usefulLife', Number(e.target.value) || 1)}
                    min={1}
                    max={50}
                    step={1}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-600">Expected asset lifespan</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedUnits" className="flex items-center gap-2">
                    <Factory className="w-4 h-4 text-blue-600" />
                    Estimated Units
                  </Label>
                  <Input
                    id="estimatedUnits"
                    type="number"
                    value={inputs.estimatedUnits}
                    onChange={(e) => handleInputChange('estimatedUnits', Number(e.target.value) || 1)}
                    min={1}
                    step={1000}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-600">Total lifetime production</p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Annual Production Units (for Units of Production method)</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {inputs.actualUnits.map((units, index) => (
                    <div key={index} className="space-y-2">
                      <Label htmlFor={`year${index + 1}`}>Year {index + 1}</Label>
                      <Input
                        id={`year${index + 1}`}
                        type="number"
                        value={units}
                        onChange={(e) => {
                          const newUnits = [...inputs.actualUnits]
                          newUnits[index] = Number(e.target.value) || 0
                          handleInputChange('actualUnits', newUnits)
                        }}
                        min={0}
                        step={100}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button onClick={resetToDefaults} variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset to Scenario Defaults
                </Button>
                <Button onClick={exportToExcel} className="bg-green-600 hover:bg-green-700">
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export to Excel
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Method Comparison Tab */}
        <TabsContent value="comparison" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg text-blue-800">Straight-Line</CardTitle>
                <p className="text-sm text-blue-600">Consistent Annual Expense</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-800">
                  ${((inputs.cost - inputs.salvageValue) / inputs.usefulLife).toFixed(0)}
                </p>
                <p className="text-sm text-blue-600">per year</p>
                <div className="mt-4 space-y-1 text-xs text-blue-700">
                  <p>• Predictable expenses</p>
                  <p>• Conservative approach</p>
                  <p>• Simple calculations</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg text-purple-800">Double Declining</CardTitle>
                <p className="text-sm text-purple-600">Accelerated Early Years</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-purple-800">
                  ${(inputs.cost * (2 / inputs.usefulLife)).toFixed(0)}
                </p>
                <p className="text-sm text-purple-600">Year 1</p>
                <div className="mt-4 space-y-1 text-xs text-purple-700">
                  <p>• Maximum tax benefits</p>
                  <p>• Improved cash flow</p>
                  <p>• Front-loaded expenses</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg text-orange-800">Sum-of-Years</CardTitle>
                <p className="text-sm text-orange-600">Gradual Acceleration</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-orange-800">
                  ${(((inputs.cost - inputs.salvageValue) * inputs.usefulLife) / ((inputs.usefulLife * (inputs.usefulLife + 1)) / 2)).toFixed(0)}
                </p>
                <p className="text-sm text-orange-600">Year 1</p>
                <div className="mt-4 space-y-1 text-xs text-orange-700">
                  <p>• Balanced approach</p>
                  <p>• Technology assets</p>
                  <p>• Moderate acceleration</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg text-green-800">Units Production</CardTitle>
                <p className="text-sm text-green-600">Usage-Based</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-green-800">
                  ${(((inputs.cost - inputs.salvageValue) / inputs.estimatedUnits) * (inputs.actualUnits[0] || 0)).toFixed(0)}
                </p>
                <p className="text-sm text-green-600">Year 1</p>
                <div className="mt-4 space-y-1 text-xs text-green-700">
                  <p>• Matches usage</p>
                  <p>• Variable by activity</p>
                  <p>• Manufacturing focus</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>5-Year Depreciation Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Year</th>
                      <th className="border border-gray-300 p-3 text-right">Straight-Line</th>
                      <th className="border border-gray-300 p-3 text-right">Double Declining</th>
                      <th className="border border-gray-300 p-3 text-right">Sum-of-Years</th>
                      <th className="border border-gray-300 p-3 text-right">Units Production</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((year) => (
                      <tr key={year} className={year % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                        <td className="border border-gray-300 p-3 font-medium">Year {year}</td>
                        <td className="border border-gray-300 p-3 text-right">
                          ${results.straightLine[year - 1]?.depreciationExpense.toFixed(0) || '0'}
                        </td>
                        <td className="border border-gray-300 p-3 text-right">
                          ${results.doubleDeclining[year - 1]?.depreciationExpense.toFixed(0) || '0'}
                        </td>
                        <td className="border border-gray-300 p-3 text-right">
                          ${results.sumOfYears[year - 1]?.depreciationExpense.toFixed(0) || '0'}
                        </td>
                        <td className="border border-gray-300 p-3 text-right">
                          ${results.unitsOfProduction[year - 1]?.depreciationExpense.toFixed(0) || '0'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Depreciation Schedules Tab */}
        <TabsContent value="schedules" className="space-y-6">
          <Tabs defaultValue="straightline" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="straightline">Straight-Line</TabsTrigger>
              <TabsTrigger value="doubledeclining">Double Declining</TabsTrigger>
              <TabsTrigger value="sumofyears">Sum-of-Years</TabsTrigger>
              <TabsTrigger value="unitsproduction">Units Production</TabsTrigger>
            </TabsList>

            {/* Straight-Line Schedule */}
            <TabsContent value="straightline">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    Straight-Line Depreciation Schedule
                  </CardTitle>
                  <CardDescription>
                    Equal annual depreciation: ${((inputs.cost - inputs.salvageValue) / inputs.usefulLife).toFixed(2)} per year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="border border-gray-300 p-3 text-center">Year</th>
                          <th className="border border-gray-300 p-3 text-right">Beginning Book Value</th>
                          <th className="border border-gray-300 p-3 text-right">Depreciation Expense</th>
                          <th className="border border-gray-300 p-3 text-right">Accumulated Depreciation</th>
                          <th className="border border-gray-300 p-3 text-right">Ending Book Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.straightLine.map((row) => (
                          <tr key={row.year} className={row.year % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                            <td className="border border-gray-300 p-3 text-center font-medium">{row.year}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.beginningBookValue.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right font-medium text-blue-600">${row.depreciationExpense.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.accumulatedDepreciation.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.endingBookValue.toFixed(0)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Excel Formula:</strong> =SLN({inputs.cost}, {inputs.salvageValue}, {inputs.usefulLife})
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Double Declining Schedule */}
            <TabsContent value="doubledeclining">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-purple-600" />
                    Double Declining Balance Schedule
                  </CardTitle>
                  <CardDescription>
                    Depreciation rate: {((2 / inputs.usefulLife) * 100).toFixed(1)}% per year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-purple-50">
                          <th className="border border-gray-300 p-3 text-center">Year</th>
                          <th className="border border-gray-300 p-3 text-right">Beginning Book Value</th>
                          <th className="border border-gray-300 p-3 text-right">Depreciation Expense</th>
                          <th className="border border-gray-300 p-3 text-right">Accumulated Depreciation</th>
                          <th className="border border-gray-300 p-3 text-right">Ending Book Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.doubleDeclining.map((row) => (
                          <tr key={row.year} className={row.year % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                            <td className="border border-gray-300 p-3 text-center font-medium">{row.year}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.beginningBookValue.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right font-medium text-purple-600">${row.depreciationExpense.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.accumulatedDepreciation.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.endingBookValue.toFixed(0)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-700">
                      <strong>Excel Formula:</strong> =DDB({inputs.cost}, {inputs.salvageValue}, {inputs.usefulLife}, [year])
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sum-of-Years Schedule */}
            <TabsContent value="sumofyears">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                    Sum-of-Years Digits Schedule
                  </CardTitle>
                  <CardDescription>
                    Sum of years: {(inputs.usefulLife * (inputs.usefulLife + 1)) / 2}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-orange-50">
                          <th className="border border-gray-300 p-3 text-center">Year</th>
                          <th className="border border-gray-300 p-3 text-right">Beginning Book Value</th>
                          <th className="border border-gray-300 p-3 text-right">Depreciation Expense</th>
                          <th className="border border-gray-300 p-3 text-right">Accumulated Depreciation</th>
                          <th className="border border-gray-300 p-3 text-right">Ending Book Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.sumOfYears.map((row) => (
                          <tr key={row.year} className={row.year % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                            <td className="border border-gray-300 p-3 text-center font-medium">{row.year}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.beginningBookValue.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right font-medium text-orange-600">${row.depreciationExpense.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.accumulatedDepreciation.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.endingBookValue.toFixed(0)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-700">
                      <strong>Excel Formula:</strong> =SYD({inputs.cost}, {inputs.salvageValue}, {inputs.usefulLife}, [year])
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Units of Production Schedule */}
            <TabsContent value="unitsproduction">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-green-600" />
                    Units of Production Schedule
                  </CardTitle>
                  <CardDescription>
                    Cost per unit: ${((inputs.cost - inputs.salvageValue) / inputs.estimatedUnits).toFixed(4)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="border border-gray-300 p-3 text-center">Year</th>
                          <th className="border border-gray-300 p-3 text-right">Units Produced</th>
                          <th className="border border-gray-300 p-3 text-right">Beginning Book Value</th>
                          <th className="border border-gray-300 p-3 text-right">Depreciation Expense</th>
                          <th className="border border-gray-300 p-3 text-right">Ending Book Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.unitsOfProduction.map((row, index) => (
                          <tr key={row.year} className={row.year % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                            <td className="border border-gray-300 p-3 text-center font-medium">{row.year}</td>
                            <td className="border border-gray-300 p-3 text-right">{inputs.actualUnits[index]?.toLocaleString() || '0'}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.beginningBookValue.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right font-medium text-green-600">${row.depreciationExpense.toFixed(0)}</td>
                            <td className="border border-gray-300 p-3 text-right">${row.endingBookValue.toFixed(0)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700">
                      <strong>Excel Formula:</strong> =({inputs.cost}-{inputs.salvageValue})/{inputs.estimatedUnits}*[units_produced]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Business Analysis Tab */}
        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Strategic Depreciation Analysis
              </CardTitle>
              <CardDescription>
                Business implications and method selection guidance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Cash Flow Impact */}
              <div>
                <h4 className="font-semibold text-lg mb-4">5-Year Cash Flow Impact (Tax Benefits)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-medium text-gray-800">Early Years Tax Benefits (Years 1-2)</h5>
                    <div className="space-y-2 text-sm">
                      {[
                        { method: 'Double Declining', total: results.doubleDeclining.slice(0, 2).reduce((sum, row) => sum + row.depreciationExpense, 0), color: 'text-purple-600' },
                        { method: 'Sum-of-Years', total: results.sumOfYears.slice(0, 2).reduce((sum, row) => sum + row.depreciationExpense, 0), color: 'text-orange-600' },
                        { method: 'Units Production', total: results.unitsOfProduction.slice(0, 2).reduce((sum, row) => sum + row.depreciationExpense, 0), color: 'text-green-600' },
                        { method: 'Straight-Line', total: results.straightLine.slice(0, 2).reduce((sum, row) => sum + row.depreciationExpense, 0), color: 'text-blue-600' }
                      ].sort((a, b) => b.total - a.total).map((item, index) => (
                        <div key={item.method} className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{index + 1}</Badge>
                            {item.method}
                          </span>
                          <span className={`font-medium ${item.color}`}>
                            ${item.total.toFixed(0)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium text-gray-800">Total Depreciation Comparison</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Depreciable Base:</span>
                        <span className="font-medium">${(inputs.cost - inputs.salvageValue).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>All Methods (Total):</span>
                        <span className="font-medium text-green-600">${(inputs.cost - inputs.salvageValue).toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Note: All methods depreciate the same total amount, only timing differs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Method Recommendations */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Method Selection Guidance</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-green-50 border-green-200">
                    <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Recommended: {selectedScenario.methodRecommendation.split(' ')[0]} {selectedScenario.methodRecommendation.split(' ')[1]}
                    </h5>
                    <p className="text-sm text-green-700 mb-3">{selectedScenario.methodRecommendation}</p>
                    <p className="text-sm text-green-600">{selectedScenario.taxStrategy}</p>
                  </Card>

                  <Card className="p-4 bg-yellow-50 border-yellow-200">
                    <h5 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Key Considerations
                    </h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Cash flow timing needs</li>
                      <li>• Tax planning strategy</li>
                      <li>• Asset usage patterns</li>
                      <li>• Financial reporting goals</li>
                      <li>• Industry standards</li>
                    </ul>
                  </Card>
                </div>
              </div>

              {/* Business Context */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Unit 7 Business Context</h4>
                <p className="text-sm text-blue-700 mb-3">{selectedScenario.businessContext}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="font-medium text-blue-800">Asset Type:</p>
                    <p className="text-blue-600">{selectedScenario.assetType}</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">Investment:</p>
                    <p className="text-blue-600">${selectedScenario.cost.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">Expected Life:</p>
                    <p className="text-blue-600">{selectedScenario.usefulLife} years</p>
                  </div>
                </div>
              </div>

              {/* Educational Footer */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">📚 Unit 7 Learning Connection</h4>
                <p className="text-sm text-green-700 mb-2">
                  This depreciation analysis directly supports Unit 7's driving question: 
                  <em>"Which depreciation and inventory methods best align with our cash‑flow and tax strategy?"</em>
                </p>
                <div className="text-xs text-green-600">
                  <p>• Connect to cash flow management and working capital optimization</p>
                  <p>• Apply to real audit scenarios with local CPA mentorship</p>
                  <p>• Build Excel models for professional stakeholder presentations</p>
                  <p>• Develop tax planning strategies for business growth phases</p>
                </div>
              </div>

              {/* Export Section */}
              <div className="flex justify-center gap-4 pt-4">
                <Button onClick={exportToExcel} className="bg-green-600 hover:bg-green-700">
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export Analysis to Excel
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Save PDF Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default DepreciationMethodBuilder