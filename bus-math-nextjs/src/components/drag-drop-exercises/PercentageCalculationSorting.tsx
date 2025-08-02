/**
 * PercentageCalculationSorting Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import PercentageCalculationSorting from '@/components/drag-drop-exercises/PercentageCalculationSorting'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <PercentageCalculationSorting />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * No props are required - it initializes with default café business scenarios and randomization.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn to categorize different percentage calculations used in business
 * operations analysis, supporting Unit 4's data-driven café optimization theme.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Drag & Drop Interface**: Students see 18 different café business scenarios that require
 *    percentage calculations and must drag each to its correct calculation type category.
 * 
 * 2. **Calculation Categories**: The interface displays four main calculation types:
 *    - Percentage Change: Growth rates, sales increases/decreases, variance analysis
 *    - Percentage of Total: Market share, expense ratios, component analysis
 *    - Percentage Increase/Decrease: Efficiency improvements, cost reductions, profit margins
 *    - Weighted Averages: Blended rates, composite metrics, balanced scorecards
 * 
 * 3. **Real-World Context**: Each scenario includes café-specific business problems:
 *    - "Morning rush sales increased from $1,200 to $1,440 this month"
 *    - "Labor costs represent $3,200 of our $8,500 monthly expenses"
 *    - "Customer satisfaction scores: Service 85% (40%), Quality 92% (35%), Value 78% (25%)"
 * 
 * 4. **Statistical Context**: Links to Unit 4's POS data analysis by showing different ways
 *    percentages are used in data interpretation and business decision making.
 * 
 * 5. **Hint System**: Students can toggle hints to see calculation formulas and business
 *    applications for each percentage type.
 * 
 * 6. **Immediate Feedback**: When students check their answers:
 *    - Correct placements turn green with calculation formula displays
 *    - Incorrect placements turn red (students can move them to try again)
 *    - Score tracking with percentage accuracy
 * 
 * EDUCATIONAL VALUE:
 * ==================
 * - Reinforces mathematical foundations needed for POS data analysis
 * - Prepares students for statistical analysis and interpretation
 * - Connects percentage calculations to real business decision making
 * - Supports Excel Analysis ToolPak work with percentage-based metrics
 * - Builds foundation for regression analysis and forecasting models
 */

'use client'

import { useState, useCallback } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, RotateCcw, CheckCircle, XCircle, Calculator, TrendingUp, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

// Types
interface BusinessScenario {
  id: string
  scenario: string
  calculationType: string
  description: string
  formula: string
  businessContext: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  dataValues: string
}

interface CalculationCategory {
  id: string
  name: string
  description: string
  emoji: string
  formula: string
  businessUse: string
  scenarios: BusinessScenario[]
  color: string
}

// Default café business scenarios for percentage calculations
const DEFAULT_SCENARIOS: BusinessScenario[] = [
  {
    id: 'morning-rush-growth',
    scenario: 'Morning rush sales increased from $1,200 to $1,440 this month',
    calculationType: 'PercentageChange',
    description: 'Calculate the percentage increase in morning rush sales',
    formula: '((New Value - Old Value) / Old Value) × 100',
    businessContext: 'Track revenue growth trends to optimize staffing and inventory',
    difficulty: 'Easy',
    dataValues: 'Old: $1,200, New: $1,440'
  },
  {
    id: 'waste-reduction',
    scenario: 'Food waste decreased from 8.5% to 6.2% after implementing portion controls',
    calculationType: 'PercentagePointChange',
    description: 'Calculate the percentage point change in waste reduction',
    formula: 'New Percentage - Old Percentage',
    businessContext: 'Measure operational efficiency improvements',
    difficulty: 'Medium',
    dataValues: 'Old: 8.5%, New: 6.2%'
  },
  {
    id: 'customer-retention',
    scenario: 'Customer retention rate improved from 73% to 81% with the new loyalty program',
    calculationType: 'PercentageChange',
    description: 'Calculate the relative percentage improvement in retention',
    formula: '((New % - Old %) / Old %) × 100',
    businessContext: 'Evaluate marketing program effectiveness',
    difficulty: 'Hard',
    dataValues: 'Old: 73%, New: 81%'
  },
  {
    id: 'labor-expense-ratio',
    scenario: 'Labor costs represent $3,200 of our $8,500 monthly expenses',
    calculationType: 'PercentageOfTotal',
    description: 'Calculate what percentage labor represents of total expenses',
    formula: '(Part / Whole) × 100',
    businessContext: 'Analyze cost structure for budget optimization',
    difficulty: 'Easy',
    dataValues: 'Part: $3,200, Whole: $8,500'
  },
  {
    id: 'cogs-percentage',
    scenario: 'Cost of goods sold is $2,450 out of $6,800 in total revenue',
    calculationType: 'PercentageOfTotal',
    description: 'Calculate COGS as a percentage of revenue',
    formula: '(COGS / Revenue) × 100',
    businessContext: 'Monitor gross profit margin and pricing strategy',
    difficulty: 'Easy',
    dataValues: 'COGS: $2,450, Revenue: $6,800'
  },
  {
    id: 'peak-hours-sales',
    scenario: 'Peak hours (7-10am, 11am-2pm) generate $4,320 of our $6,800 daily sales',
    calculationType: 'PercentageOfTotal',
    description: 'Calculate what percentage of sales occur during peak hours',
    formula: '(Peak Sales / Total Sales) × 100',
    businessContext: 'Optimize staffing schedules and capacity planning',
    difficulty: 'Medium',
    dataValues: 'Peak: $4,320, Total: $6,800'
  },
  {
    id: 'menu-item-distribution',
    scenario: 'Beverages: 340 units, Pastries: 85 units, Sandwiches: 125 units sold today',
    calculationType: 'PercentageOfTotal',
    description: 'Calculate the percentage distribution of menu categories',
    formula: '(Category Units / Total Units) × 100',
    businessContext: 'Guide inventory purchasing and menu optimization',
    difficulty: 'Medium',
    dataValues: 'Beverages: 340, Pastries: 85, Sandwiches: 125'
  },
  {
    id: 'latte-price-increase',
    scenario: 'Latte price increased from $4.25 to $4.65 due to rising milk costs',
    calculationType: 'PercentageChange',
    description: 'Calculate the percentage increase in latte price',
    formula: '((New Price - Old Price) / Old Price) × 100',
    businessContext: 'Communicate price changes to customers and analyze impact',
    difficulty: 'Easy',
    dataValues: 'Old: $4.25, New: $4.65'
  },
  {
    id: 'energy-cost-reduction',
    scenario: 'Monthly electricity costs reduced from $650 to $520 with LED lighting',
    calculationType: 'PercentageChange',
    description: 'Calculate the percentage decrease in energy costs',
    formula: '((Old Cost - New Cost) / Old Cost) × 100',
    businessContext: 'Measure ROI on sustainability investments',
    difficulty: 'Easy',
    dataValues: 'Old: $650, New: $520'
  },
  {
    id: 'customer-wait-time',
    scenario: 'Average customer wait time decreased 15% after adding a second espresso machine',
    calculationType: 'PercentageChange',
    description: 'Express operational improvement as percentage decrease',
    formula: 'Given as 15% decrease directly',
    businessContext: 'Quantify customer experience improvements',
    difficulty: 'Easy',
    dataValues: '15% decrease given'
  },
  {
    id: 'profit-margin-improvement',
    scenario: 'Gross profit margin improved from 58% to 63% through supplier negotiations',
    calculationType: 'PercentagePointChange',
    description: 'Calculate the percentage point increase in margin',
    formula: 'New Margin - Old Margin',
    businessContext: 'Track financial performance improvements',
    difficulty: 'Medium',
    dataValues: 'Old: 58%, New: 63%'
  },
  {
    id: 'customer-satisfaction-weighted',
    scenario: 'Customer satisfaction: Service 85% (40% weight), Quality 92% (35% weight), Value 78% (25% weight)',
    calculationType: 'WeightedAverage',
    description: 'Calculate overall weighted customer satisfaction score',
    formula: '(Score₁ × Weight₁) + (Score₂ × Weight₂) + (Score₃ × Weight₃)',
    businessContext: 'Create balanced performance metrics for management',
    difficulty: 'Hard',
    dataValues: 'Service: 85%×40%, Quality: 92%×35%, Value: 78%×25%'
  },
  {
    id: 'blended-coffee-cost',
    scenario: 'Blend recipe: Premium beans $12/lb (30%), Regular beans $8/lb (50%), Decaf beans $10/lb (20%)',
    calculationType: 'WeightedAverage',
    description: 'Calculate the weighted average cost per pound of coffee blend',
    formula: '(Cost₁ × Weight₁) + (Cost₂ × Weight₂) + (Cost₃ × Weight₃)',
    businessContext: 'Determine accurate cost basis for pricing decisions',
    difficulty: 'Hard',
    dataValues: '$12×30% + $8×50% + $10×20%'
  },
  {
    id: 'employee-performance-score',
    scenario: 'Employee review: Speed 78% (25%), Accuracy 95% (40%), Customer Service 88% (35%)',
    calculationType: 'WeightedAverage',
    description: 'Calculate weighted employee performance score',
    formula: '(Speed × 0.25) + (Accuracy × 0.40) + (Service × 0.35)',
    businessContext: 'Fair performance evaluation for raises and promotions',
    difficulty: 'Medium',
    dataValues: 'Speed: 78%×25%, Accuracy: 95%×40%, Service: 88%×35%'
  },
  {
    id: 'seasonal-menu-adoption',
    scenario: 'Fall menu items: 15% of orders in September, 28% in October, 42% in November',
    calculationType: 'PercentageChange',
    description: 'Track percentage changes in seasonal menu adoption',
    formula: 'Multiple percentage changes over time',
    businessContext: 'Plan seasonal inventory and marketing campaigns',
    difficulty: 'Medium',
    dataValues: 'Sep: 15%, Oct: 28%, Nov: 42%'
  },
  {
    id: 'loyalty-program-impact',
    scenario: 'Loyalty members represent 180 of 450 daily customers and spend 25% more per visit',
    calculationType: 'PercentageOfTotal',
    description: 'Calculate loyalty member percentage and analyze spending impact',
    formula: '(Loyalty Customers / Total Customers) × 100',
    businessContext: 'Evaluate customer retention program effectiveness',
    difficulty: 'Medium',
    dataValues: 'Loyalty: 180, Total: 450, +25% spending'
  },
  {
    id: 'inventory-turnover-change',
    scenario: 'Coffee bean inventory turns over 12 times annually, up from 9 times last year',
    calculationType: 'PercentageChange',
    description: 'Calculate the percentage improvement in inventory turnover',
    formula: '((New Turnover - Old Turnover) / Old Turnover) × 100',
    businessContext: 'Measure efficiency in inventory management',
    difficulty: 'Medium',
    dataValues: 'Old: 9 turns, New: 12 turns'
  },
  {
    id: 'market-share-analysis',
    scenario: 'Our café has $68,000 monthly revenue in a local market worth $850,000',
    calculationType: 'PercentageOfTotal',
    description: 'Calculate market share percentage in local coffee market',
    formula: '(Our Revenue / Total Market) × 100',
    businessContext: 'Strategic planning and competitive positioning',
    difficulty: 'Easy',
    dataValues: 'Our Revenue: $68,000, Market: $850,000'
  }
]

export default function PercentageCalculationSorting() {
  const [scenarios, setScenarios] = useState<BusinessScenario[]>(() => 
    [...DEFAULT_SCENARIOS].sort(() => Math.random() - 0.5)
  );
  
  const [categories, setCategories] = useState<CalculationCategory[]>([
    {
      id: 'percentage-change',
      name: 'Percentage Change',
      description: 'Growth rates, variance analysis, trend measurement',
      emoji: '📈',
      formula: '((New - Old) / Old) × 100',
      businessUse: 'Track performance changes over time periods',
      scenarios: [],
      color: 'bg-blue-50 border-blue-200 hover:border-blue-300'
    },
    {
      id: 'percentage-of-total',
      name: 'Percentage of Total',
      description: 'Component analysis, market share, expense ratios',
      emoji: '🥧',
      formula: '(Part / Whole) × 100',
      businessUse: 'Analyze composition and relative importance',
      scenarios: [],
      color: 'bg-green-50 border-green-200 hover:border-green-300'
    },
    {
      id: 'percentage-point-change',
      name: 'Percentage Point Change',
      description: 'Direct differences between percentages (not relative change)',
      emoji: '↕️',
      formula: 'New Percentage - Old Percentage',
      businessUse: 'Compare rates, margins, and percentage-based metrics',
      scenarios: [],
      color: 'bg-purple-50 border-purple-200 hover:border-purple-300'
    },
    {
      id: 'weighted-average',
      name: 'Weighted Average',
      description: 'Balanced scorecards, blended rates, composite metrics',
      emoji: '⚖️',
      formula: 'Σ(Value × Weight)',
      businessUse: 'Create balanced performance measurements',
      scenarios: [],
      color: 'bg-orange-50 border-orange-200 hover:border-orange-300'
    }
  ]);

  const [showHints, setShowHints] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [score, setScore] = useState(0)

  // Handle drag and drop
  const onDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    // Moving within the same category
    if (destination.droppableId === source.droppableId) {
      if (destination.index === source.index) return;

      if (source.droppableId === 'scenario-bank') {
        const newScenarios = Array.from(scenarios);
        const [reorderedScenario] = newScenarios.splice(source.index, 1);
        newScenarios.splice(destination.index, 0, reorderedScenario);
        setScenarios(newScenarios);
      } else {
        const category = categories.find(cat => cat.id === source.droppableId);
        if (category) {
          const newCategoryScenarios = Array.from(category.scenarios);
          const [reorderedScenario] = newCategoryScenarios.splice(source.index, 1);
          newCategoryScenarios.splice(destination.index, 0, reorderedScenario);
          
          setCategories(prev => prev.map(cat => 
            cat.id === source.droppableId 
              ? { ...cat, scenarios: newCategoryScenarios }
              : cat
          ));
        }
      }
      return;
    }

    // Moving between different categories
    const scenario = scenarios.find(sc => sc.id === draggableId) ||
                    categories.flatMap(cat => cat.scenarios).find(sc => sc.id === draggableId);
    
    if (!scenario) return;

    // Remove from source
    if (source.droppableId === 'scenario-bank') {
      setScenarios(prev => prev.filter(sc => sc.id !== draggableId));
    } else {
      setCategories(prev => prev.map(cat => 
        cat.id === source.droppableId 
          ? { ...cat, scenarios: cat.scenarios.filter(sc => sc.id !== draggableId) }
          : cat
      ));
    }

    // Add to destination
    if (destination.droppableId === 'scenario-bank') {
      setScenarios(prev => {
        const newScenarios = [...prev];
        newScenarios.splice(destination.index, 0, scenario);
        return newScenarios;
      });
    } else {
      setCategories(prev => prev.map(cat => 
        cat.id === destination.droppableId 
          ? { 
              ...cat, 
              scenarios: [
                ...cat.scenarios.slice(0, destination.index),
                scenario,
                ...cat.scenarios.slice(destination.index)
              ]
            }
          : cat
      ));
    }
  }, [scenarios, categories]);

  // Check answers
  const checkAnswers = () => {
    let correctCount = 0;
    const totalScenarios = categories.reduce((sum, cat) => sum + cat.scenarios.length, 0);

    categories.forEach(category => {
      category.scenarios.forEach(scenario => {
        const correctCategory = scenario.calculationType === 'PercentageChange' ? 'percentage-change' : 
                              scenario.calculationType === 'PercentageOfTotal' ? 'percentage-of-total' :
                              scenario.calculationType === 'PercentagePointChange' ? 'percentage-point-change' :
                              'weighted-average';
        
        if (category.id === correctCategory) {
          correctCount++;
        }
      });
    });

    setScore(Math.round((correctCount / DEFAULT_SCENARIOS.length) * 100));
    setAttempts(prev => prev + 1);
    setShowResults(true);
  };

  // Reset the exercise
  const resetExercise = () => {
    setScenarios([...DEFAULT_SCENARIOS].sort(() => Math.random() - 0.5));
    setCategories(prev => prev.map(cat => ({ ...cat, scenarios: [] })));
    setShowResults(false);
    setScore(0);
  };

  const remainingScenarios = scenarios.length;
  const isComplete = remainingScenarios === 0;

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl">☕</span>
          <h1 className="text-3xl font-bold text-gray-900">Café Percentage Calculation Sorting</h1>
          <span className="text-4xl">📊</span>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sort café business scenarios by the type of percentage calculation needed. 
          This builds mathematical foundations for Unit 4's POS data analysis and statistical reporting.
        </p>
        
        <div className="mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowInstructions(!showInstructions)}
            className="flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            How to Play
            {showInstructions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>
        
        {/* Stats Display */}
        <div className="flex justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">Scenarios Remaining:</span>
            <Badge variant={remainingScenarios === 0 ? "default" : "destructive"} className="text-lg px-3 py-1">
              {remainingScenarios}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Categories Used:</span>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {categories.filter(cat => cat.scenarios.length > 0).length}
            </Badge>
          </div>
          {attempts > 0 && (
            <div className="flex items-center gap-2">
              <span className="font-medium">Score:</span>
              <Badge variant={score >= 80 ? "default" : score >= 60 ? "secondary" : "destructive"} className="text-lg px-3 py-1">
                {score}%
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play Café Percentage Calculation Sorting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Objective</h4>
              <p className="text-blue-700">
                Learn to identify different types of percentage calculations used in business analysis. 
                Sort café business scenarios into the correct calculation categories to build mathematical foundations for POS data analysis.
              </p>
            </div>
            
            {/* Step-by-Step Instructions */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">📋 Step-by-Step Instructions</h4>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li><strong>Read Each Scenario:</strong> Look at the café business scenarios in the left column</li>
                <li><strong>Identify the Calculation Type:</strong> Determine what type of percentage calculation is needed</li>
                <li><strong>Drag to Category:</strong> Drag each scenario to the correct calculation type category</li>
                <li><strong>Use Hints (Optional):</strong> Click "Show Hints" to see formulas and usage examples</li>
                <li><strong>Check Your Work:</strong> Once all scenarios are sorted, click "Check Answers" to see your score</li>
              </ol>
            </div>
            
            {/* Calculation Categories Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-100 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">📈 Percentage Change</h5>
                <p className="text-sm text-blue-700 mb-2"><strong>Formula:</strong> ((New - Old) / Old) × 100</p>
                <p className="text-sm text-blue-700 mb-2"><strong>When to use:</strong> Measuring relative growth or decline</p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• Sales growth from month to month</li>
                  <li>• Customer retention improvements</li>
                  <li>• Inventory turnover changes</li>
                  <li>• Price increases or decreases</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">🥧 Percentage of Total</h5>
                <p className="text-sm text-green-700 mb-2"><strong>Formula:</strong> (Part / Whole) × 100</p>
                <p className="text-sm text-green-700 mb-2"><strong>When to use:</strong> Analyzing composition or share</p>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• Labor costs as % of total expenses</li>
                  <li>• Market share analysis</li>
                  <li>• Product mix percentages</li>
                  <li>• Peak hours sales contribution</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-100 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">↕️ Percentage Point Change</h5>
                <p className="text-sm text-purple-700 mb-2"><strong>Formula:</strong> New Percentage - Old Percentage</p>
                <p className="text-sm text-purple-700 mb-2"><strong>When to use:</strong> Direct difference between rates</p>
                <ul className="text-xs text-purple-600 space-y-1">
                  <li>• Profit margin improvements</li>
                  <li>• Waste reduction percentages</li>
                  <li>• Interest rate changes</li>
                  <li>• Performance metric differences</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">⚖️ Weighted Average</h5>
                <p className="text-sm text-orange-700 mb-2"><strong>Formula:</strong> Σ(Value × Weight)</p>
                <p className="text-sm text-orange-700 mb-2"><strong>When to use:</strong> Combining multiple metrics</p>
                <ul className="text-xs text-orange-600 space-y-1">
                  <li>• Customer satisfaction scores</li>
                  <li>• Employee performance ratings</li>
                  <li>• Blended product costs</li>
                  <li>• Composite financial metrics</li>
                </ul>
              </div>
            </div>
            
            {/* Key Differences */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">🔍 Key Differences to Remember</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="p-3 bg-white rounded-lg border">
                  <p className="text-sm"><strong>Percentage Change vs. Percentage Point Change:</strong></p>
                  <p className="text-xs text-gray-600 mt-1">
                    Change: How much did it grow relatively? Point Change: What's the direct difference between two percentages?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: 5% → 7% = 40% change OR 2 percentage point change
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <p className="text-sm"><strong>Percentage of Total vs. Weighted Average:</strong></p>
                  <p className="text-xs text-gray-600 mt-1">
                    Of Total: What portion of the whole? Weighted: Combining values with different importance levels
                  </p>
                </div>
              </div>
            </div>
            
            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Look for keywords:</strong> "increased from/to" = Change, "out of total" = Of Total</li>
                <li>• <strong>Check the data:</strong> Are there weights or percentages given? Might be Weighted Average</li>
                <li>• <strong>Two percentages:</strong> If comparing two rates directly, likely Percentage Point Change</li>
                <li>• <strong>Part vs. Whole:</strong> If analyzing components of a total, use Percentage of Total</li>
              </ul>
            </div>
            
            {/* Business Context */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">☕ Business Context</h4>
              <p className="text-sm text-blue-700">
                You're analyzing data for a café business, similar to Unit 4's Data-Driven Café project. 
                Understanding these percentage calculations is essential for POS data analysis, performance tracking, 
                and making data-driven business decisions. These skills prepare you for statistical analysis and Excel's Analysis ToolPak.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => setShowHints(!showHints)}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Lightbulb className="w-4 h-4" />
          {showHints ? 'Hide' : 'Show'} Hints
        </Button>
        
        <Button
          onClick={checkAnswers}
          disabled={!isComplete}
          className="flex items-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Check Answers
        </Button>
        
        <Button
          onClick={resetExercise}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Scenario Bank */}
          <div className="lg:col-span-2">
            <Card className="h-fit sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🧮 Business Scenarios
                  <Badge variant="secondary">{scenarios.length}</Badge>
                </CardTitle>
                <CardDescription>
                  Drag scenarios to the correct calculation type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Droppable droppableId="scenario-bank">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`min-h-[300px] p-4 rounded-lg border-2 border-dashed transition-colors ${
                        snapshot.isDraggingOver 
                          ? 'border-gray-400 bg-gray-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      {scenarios.map((scenario, index) => (
                        <Draggable key={scenario.id} draggableId={scenario.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`mb-3 p-3 bg-white rounded-lg border shadow-sm cursor-move transition-all ${
                                snapshot.isDragging ? 'rotate-3 shadow-lg' : 'hover:shadow-md'
                              }`}
                            >
                              <div className="text-sm font-medium mb-2 leading-tight">
                                {scenario.scenario}
                              </div>
                              <div className="flex justify-between items-center mb-1">
                                <Badge 
                                  variant={scenario.difficulty === 'Hard' ? 'destructive' : scenario.difficulty === 'Medium' ? 'secondary' : 'outline'}
                                  className="text-xs"
                                >
                                  {scenario.difficulty}
                                </Badge>
                                <Calculator className="w-3 h-3 text-gray-400" />
                              </div>
                              {showHints && (
                                <div className="text-xs text-blue-600 italic mt-2">
                                  {scenario.businessContext}
                                </div>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </CardContent>
            </Card>
          </div>

          {/* Calculation Categories */}
          <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {categories.map((category) => {
              const correctScenarios = showResults ? category.scenarios.filter(scenario => {
                const correctCategory = scenario.calculationType === 'PercentageChange' ? 'percentage-change' : 
                                      scenario.calculationType === 'PercentageOfTotal' ? 'percentage-of-total' :
                                      scenario.calculationType === 'PercentagePointChange' ? 'percentage-point-change' :
                                      'weighted-average';
                return category.id === correctCategory;
              }).length : 0;

              return (
                <Card key={category.id} className={`${category.color} transition-colors`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-base">
                      <span className="flex items-center gap-2">
                        <span className="text-xl">{category.emoji}</span>
                        {category.name}
                      </span>
                      <Badge variant="secondary">{category.scenarios.length}</Badge>
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                    {showHints && (
                      <div className="space-y-1">
                        <div className="text-xs text-purple-600 italic flex items-center gap-1">
                          <Calculator className="w-3 h-3" />
                          Formula: {category.formula}
                        </div>
                        <div className="text-xs text-green-600 italic flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Use case: {category.businessUse}
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Droppable droppableId={category.id}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`min-h-[200px] p-3 rounded-lg border-2 border-dashed transition-colors ${
                            snapshot.isDraggingOver 
                              ? 'border-gray-400 bg-white/80' 
                              : 'border-gray-200'
                          }`}
                        >
                          {category.scenarios.map((scenario, index) => {
                            const correctCategory = scenario.calculationType === 'PercentageChange' ? 'percentage-change' : 
                                                  scenario.calculationType === 'PercentageOfTotal' ? 'percentage-of-total' :
                                                  scenario.calculationType === 'PercentagePointChange' ? 'percentage-point-change' :
                                                  'weighted-average';
                            const isCorrect = category.id === correctCategory;

                            return (
                              <Draggable key={scenario.id} draggableId={scenario.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`mb-2 p-3 bg-white rounded border cursor-move transition-all ${
                                      snapshot.isDragging ? 'rotate-2 shadow-lg' : 'hover:shadow-sm'
                                    } ${
                                      showResults 
                                        ? isCorrect 
                                          ? 'border-green-500 bg-green-50' 
                                          : 'border-red-500 bg-red-50'
                                        : ''
                                    }`}
                                  >
                                    <div className="flex justify-between items-start mb-2">
                                      <span className="text-sm font-medium leading-tight flex-1 pr-2">
                                        {scenario.scenario}
                                      </span>
                                      {showResults && (
                                        isCorrect ? <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> 
                                                 : <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                                      )}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      {scenario.dataValues}
                                    </div>
                                    {showResults && showHints && (
                                      <div className="text-xs text-blue-600 mt-1 italic">
                                        Formula: {scenario.formula}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </DragDropContext>

      {/* Results Summary */}
      {showResults && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Percentage Calculation Analysis Results</h3>
              <p className="text-gray-600 mb-4">
                Mastering percentage calculations is essential for POS data analysis and business decision making.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Accuracy Score</div>
                  <div className="text-2xl font-bold text-blue-600">{score}%</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Scenarios Sorted</div>
                  <div className="text-2xl font-bold text-green-600">{DEFAULT_SCENARIOS.length}</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Categories Used</div>
                  <div className="text-2xl font-bold text-purple-600">{categories.filter(cat => cat.scenarios.length > 0).length}</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Attempts</div>
                  <div className="text-2xl font-bold text-orange-600">{attempts}</div>
                </div>
              </div>
              {score >= 80 && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Excellent! You're ready for advanced statistical analysis.</span>
                  </div>
                </div>
              )}
              {score < 60 && (
                <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <div className="text-yellow-800">
                    <span className="font-medium">Review the formulas and try again.</span>
                    <div className="text-sm mt-1">Focus on understanding when each calculation type is used in business contexts.</div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}