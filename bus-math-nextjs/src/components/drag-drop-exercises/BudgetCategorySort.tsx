/**
 * BudgetCategorySort Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import BudgetCategorySort from '@/components/drag-drop-exercises/BudgetCategorySort'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <BudgetCategorySort />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * No props are required - it initializes with default café expenses and randomization.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn to organize café operating expenses into budget categories,
 * supporting Unit 4's data-driven operations optimization theme.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Drag & Drop Interface**: Students see 15 different café expenses in a randomized bank
 *    and must drag each expense to its correct budget category.
 * 
 * 2. **Budget Categories**: The interface displays five main budget categories:
 *    - Cost of Goods Sold (COGS): Direct costs of making products
 *    - Labor: Staff wages and benefits
 *    - Overhead: Fixed operational costs
 *    - Marketing: Customer acquisition and retention
 *    - Administrative: Business operations and management
 * 
 * 3. **Real-World Context**: Each expense includes café-specific descriptions:
 *    - Coffee Beans: "Raw materials for beverages (primary ingredient cost)"
 *    - Barista Wages: "Hourly pay for café staff who make drinks and serve customers"
 *    - Rent: "Monthly cost for café space and location"
 * 
 * 4. **Hint System**: Students can toggle hints to see detailed explanations of each
 *    budget category and how expenses impact profit margins and operational efficiency.
 * 
 * 5. **Statistical Context**: Links to Unit 4's POS data analysis by showing how
 *    different expense categories affect profitability and waste reduction goals.
 * 
 * 6. **Immediate Feedback**: When students check their answers:
 *    - Correct placements turn green with profit impact indicators
 *    - Incorrect placements turn red (students can move them to try again)
 *    - Score tracking with percentage accuracy for statistical connection
 * 
 * EDUCATIONAL VALUE:
 * ==================
 * - Reinforces understanding of café business operations from Unit 4 scenario
 * - Prepares students for cost-benefit analysis in POS data project
 * - Connects expense categorization to waste reduction and profit maximization
 * - Supports Excel Analysis ToolPak work by understanding data categories
 * - Builds foundation for break-even analysis in later units
 */

'use client'

import { useState, useCallback } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, RotateCcw, CheckCircle, XCircle, TrendingDown, TrendingUp } from 'lucide-react'

// Types
interface BudgetExpense {
  id: string
  name: string
  category: string
  description: string
  amount: number
  impact: 'High' | 'Medium' | 'Low'
  cafeContext: string
}

interface BudgetCategory {
  id: string
  name: string
  description: string
  emoji: string
  profitImpact: string
  expenses: BudgetExpense[]
  color: string
}

// Default café expenses for the exercise
const DEFAULT_EXPENSES: BudgetExpense[] = [
  {
    id: 'coffee-beans',
    name: 'Coffee Beans',
    category: 'COGS',
    description: 'Premium coffee beans from suppliers',
    amount: 1200,
    impact: 'High',
    cafeContext: 'Raw materials for beverages (primary ingredient cost)'
  },
  {
    id: 'milk-dairy',
    name: 'Milk & Dairy',
    category: 'COGS',
    description: 'Fresh milk, cream, and dairy products',
    amount: 800,
    impact: 'High',
    cafeContext: 'Essential ingredients for lattes, cappuccinos, and pastries'
  },
  {
    id: 'pastry-ingredients',
    name: 'Pastry Ingredients',
    category: 'COGS',
    description: 'Flour, sugar, and baking supplies',
    amount: 450,
    impact: 'Medium',
    cafeContext: 'Direct costs for making fresh baked goods and desserts'
  },
  {
    id: 'barista-wages',
    name: 'Barista Wages',
    category: 'Labor',
    description: 'Hourly wages for café staff',
    amount: 3200,
    impact: 'High',
    cafeContext: 'Hourly pay for café staff who make drinks and serve customers'
  },
  {
    id: 'shift-supervisor',
    name: 'Shift Supervisor',
    category: 'Labor',
    description: 'Manager salary for shift oversight',
    amount: 1800,
    impact: 'Medium',
    cafeContext: 'Leadership position ensuring quality service and operations'
  },
  {
    id: 'benefits-payroll-tax',
    name: 'Benefits & Payroll Tax',
    category: 'Labor',
    description: 'Employee benefits and employer taxes',
    amount: 960,
    impact: 'Medium',
    cafeContext: 'Legal requirements and employee retention costs'
  },
  {
    id: 'rent-lease',
    name: 'Rent/Lease',
    category: 'Overhead',
    description: 'Monthly rent for café location',
    amount: 2500,
    impact: 'High',
    cafeContext: 'Monthly cost for café space and prime location'
  },
  {
    id: 'utilities',
    name: 'Utilities',
    category: 'Overhead',
    description: 'Electricity, gas, water, internet',
    amount: 650,
    impact: 'Medium',
    cafeContext: 'Power for espresso machines, lighting, and Wi-Fi for customers'
  },
  {
    id: 'equipment-maintenance',
    name: 'Equipment Maintenance',
    category: 'Overhead',
    description: 'Espresso machine and equipment repairs',
    amount: 300,
    impact: 'Medium',
    cafeContext: 'Keeping coffee machines and POS systems running smoothly'
  },
  {
    id: 'insurance',
    name: 'Insurance',
    category: 'Overhead',
    description: 'Business liability and property insurance',
    amount: 250,
    impact: 'Low',
    cafeContext: 'Protection against accidents and business risks'
  },
  {
    id: 'social-media-ads',
    name: 'Social Media Ads',
    category: 'Marketing',
    description: 'Facebook and Instagram advertising',
    amount: 200,
    impact: 'Medium',
    cafeContext: 'Attracting new customers and promoting daily specials'
  },
  {
    id: 'loyalty-program',
    name: 'Loyalty Program',
    category: 'Marketing',
    description: 'Customer rewards and promotions',
    amount: 150,
    impact: 'Medium',
    cafeContext: 'App-based rewards encouraging repeat customers'
  },
  {
    id: 'point-of-sale-system',
    name: 'POS System',
    category: 'Administrative',
    description: 'Point-of-sale software and processing',
    amount: 180,
    impact: 'Low',
    cafeContext: 'Technology for order processing and data collection'
  },
  {
    id: 'accounting-bookkeeping',
    name: 'Accounting & Bookkeeping',
    category: 'Administrative',
    description: 'Financial management services',
    amount: 120,
    impact: 'Low',
    cafeContext: 'Professional services for financial reporting and taxes'
  },
  {
    id: 'licenses-permits',
    name: 'Licenses & Permits',
    category: 'Administrative',
    description: 'Business licenses and health permits',
    amount: 80,
    impact: 'Low',
    cafeContext: 'Legal requirements for operating a food service business'
  }
]

export default function BudgetCategorySort() {
  const [expenses, setExpenses] = useState<BudgetExpense[]>(() => 
    [...DEFAULT_EXPENSES].sort(() => Math.random() - 0.5)
  );
  
  const [categories, setCategories] = useState<BudgetCategory[]>([
    {
      id: 'cogs',
      name: 'Cost of Goods Sold (COGS)',
      description: 'Direct costs of products sold to customers',
      emoji: '🥤',
      profitImpact: 'Directly reduces gross profit margin',
      expenses: [],
      color: 'bg-red-50 border-red-200 hover:border-red-300'
    },
    {
      id: 'labor',
      name: 'Labor Costs',
      description: 'Employee wages, benefits, and payroll taxes',
      emoji: '👥',
      profitImpact: 'Major controllable expense affecting operating margin',
      expenses: [],
      color: 'bg-blue-50 border-blue-200 hover:border-blue-300'
    },
    {
      id: 'overhead',
      name: 'Overhead (Fixed Costs)',
      description: 'Fixed operational expenses that don\'t vary with sales',
      emoji: '🏪',
      profitImpact: 'Fixed costs that must be covered by contribution margin',
      expenses: [],
      color: 'bg-purple-50 border-purple-200 hover:border-purple-300'
    },
    {
      id: 'marketing',
      name: 'Marketing & Customer Acquisition',
      description: 'Advertising and customer retention investments',
      emoji: '📱',
      profitImpact: 'Investment to drive revenue growth and customer loyalty',
      expenses: [],
      color: 'bg-green-50 border-green-200 hover:border-green-300'
    },
    {
      id: 'administrative',
      name: 'Administrative Expenses',
      description: 'Business operations and management costs',
      emoji: '📊',
      profitImpact: 'Necessary costs for business operations and compliance',
      expenses: [],
      color: 'bg-orange-50 border-orange-200 hover:border-orange-300'
    }
  ]);

  const [showHints, setShowHints] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [score, setScore] = useState(0)

  // Handle drag and drop
  const onDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    // Moving within the same category
    if (destination.droppableId === source.droppableId) {
      if (destination.index === source.index) return;

      if (source.droppableId === 'expense-bank') {
        const newExpenses = Array.from(expenses);
        const [reorderedExpense] = newExpenses.splice(source.index, 1);
        newExpenses.splice(destination.index, 0, reorderedExpense);
        setExpenses(newExpenses);
      } else {
        const category = categories.find(cat => cat.id === source.droppableId);
        if (category) {
          const newCategoryExpenses = Array.from(category.expenses);
          const [reorderedExpense] = newCategoryExpenses.splice(source.index, 1);
          newCategoryExpenses.splice(destination.index, 0, reorderedExpense);
          
          setCategories(prev => prev.map(cat => 
            cat.id === source.droppableId 
              ? { ...cat, expenses: newCategoryExpenses }
              : cat
          ));
        }
      }
      return;
    }

    // Moving between different categories
    const expense = expenses.find(exp => exp.id === draggableId) ||
                   categories.flatMap(cat => cat.expenses).find(exp => exp.id === draggableId);
    
    if (!expense) return;

    // Remove from source
    if (source.droppableId === 'expense-bank') {
      setExpenses(prev => prev.filter(exp => exp.id !== draggableId));
    } else {
      setCategories(prev => prev.map(cat => 
        cat.id === source.droppableId 
          ? { ...cat, expenses: cat.expenses.filter(exp => exp.id !== draggableId) }
          : cat
      ));
    }

    // Add to destination
    if (destination.droppableId === 'expense-bank') {
      setExpenses(prev => {
        const newExpenses = [...prev];
        newExpenses.splice(destination.index, 0, expense);
        return newExpenses;
      });
    } else {
      setCategories(prev => prev.map(cat => 
        cat.id === destination.droppableId 
          ? { 
              ...cat, 
              expenses: [
                ...cat.expenses.slice(0, destination.index),
                expense,
                ...cat.expenses.slice(destination.index)
              ]
            }
          : cat
      ));
    }
  }, [expenses, categories]);

  // Check answers
  const checkAnswers = () => {
    let correctCount = 0;
    const totalExpenses = categories.reduce((sum, cat) => sum + cat.expenses.length, 0);

    categories.forEach(category => {
      category.expenses.forEach(expense => {
        const correctCategory = expense.category === 'COGS' ? 'cogs' : 
                              expense.category === 'Labor' ? 'labor' :
                              expense.category === 'Overhead' ? 'overhead' :
                              expense.category === 'Marketing' ? 'marketing' :
                              'administrative';
        
        if (category.id === correctCategory) {
          correctCount++;
        }
      });
    });

    setScore(Math.round((correctCount / DEFAULT_EXPENSES.length) * 100));
    setAttempts(prev => prev + 1);
    setShowResults(true);
  };

  // Reset the exercise
  const resetExercise = () => {
    setExpenses([...DEFAULT_EXPENSES].sort(() => Math.random() - 0.5));
    setCategories(prev => prev.map(cat => ({ ...cat, expenses: [] })));
    setShowResults(false);
    setScore(0);
  };

  // Calculate total monthly budget
  const totalBudget = categories.reduce((sum, cat) => 
    sum + cat.expenses.reduce((catSum, exp) => catSum + exp.amount, 0), 0
  );

  const remainingExpenses = expenses.length;
  const isComplete = remainingExpenses === 0;

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl">☕</span>
          <h1 className="text-3xl font-bold text-gray-900">Café Budget Category Sort</h1>
          <span className="text-4xl">📊</span>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Organize café operating expenses into budget categories to support data-driven decision making. 
          This connects to Unit 4's POS data analysis by understanding how different costs impact profitability and waste reduction.
        </p>
        
        {/* Stats Display */}
        <div className="flex justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">Monthly Budget:</span>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              ${totalBudget.toLocaleString()}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Expenses Remaining:</span>
            <Badge variant={remainingExpenses === 0 ? "default" : "destructive"} className="text-lg px-3 py-1">
              {remainingExpenses}
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Expense Bank */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💰 Café Expenses
                  <Badge variant="secondary">{expenses.length}</Badge>
                </CardTitle>
                <CardDescription>
                  Drag expenses to the correct budget category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Droppable droppableId="expense-bank">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
                        snapshot.isDraggingOver 
                          ? 'border-gray-400 bg-gray-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      {expenses.map((expense, index) => (
                        <Draggable key={expense.id} draggableId={expense.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`mb-2 p-3 bg-white rounded-lg border shadow-sm cursor-move transition-all ${
                                snapshot.isDragging ? 'rotate-3 shadow-lg' : 'hover:shadow-md'
                              }`}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium text-sm">{expense.name}</span>
                                <Badge 
                                  variant={expense.impact === 'High' ? 'destructive' : expense.impact === 'Medium' ? 'secondary' : 'outline'}
                                  className="text-xs"
                                >
                                  {expense.impact}
                                </Badge>
                              </div>
                              <div className="text-xs text-gray-600 mb-1">
                                ${expense.amount.toLocaleString()}/month
                              </div>
                              {showHints && (
                                <div className="text-xs text-blue-600 italic">
                                  {expense.cafeContext}
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

          {/* Budget Categories */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {categories.map((category) => {
              const categoryTotal = category.expenses.reduce((sum, exp) => sum + exp.amount, 0);
              const correctExpenses = showResults ? category.expenses.filter(exp => {
                const correctCategory = exp.category === 'COGS' ? 'cogs' : 
                                      exp.category === 'Labor' ? 'labor' :
                                      exp.category === 'Overhead' ? 'overhead' :
                                      exp.category === 'Marketing' ? 'marketing' :
                                      'administrative';
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
                      <Badge variant="secondary">{category.expenses.length}</Badge>
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                    {showHints && (
                      <div className="text-xs text-purple-600 italic flex items-center gap-1">
                        <TrendingDown className="w-3 h-3" />
                        {category.profitImpact}
                      </div>
                    )}
                    {categoryTotal > 0 && (
                      <div className="text-sm font-medium text-gray-700">
                        Total: ${categoryTotal.toLocaleString()}/month
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Droppable droppableId={category.id}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`min-h-[150px] p-3 rounded-lg border-2 border-dashed transition-colors ${
                            snapshot.isDraggingOver 
                              ? 'border-gray-400 bg-white/80' 
                              : 'border-gray-200'
                          }`}
                        >
                          {category.expenses.map((expense, index) => {
                            const correctCategory = expense.category === 'COGS' ? 'cogs' : 
                                                  expense.category === 'Labor' ? 'labor' :
                                                  expense.category === 'Overhead' ? 'overhead' :
                                                  expense.category === 'Marketing' ? 'marketing' :
                                                  'administrative';
                            const isCorrect = category.id === correctCategory;

                            return (
                              <Draggable key={expense.id} draggableId={expense.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`mb-2 p-2 bg-white rounded border cursor-move transition-all ${
                                      snapshot.isDragging ? 'rotate-2 shadow-lg' : 'hover:shadow-sm'
                                    } ${
                                      showResults 
                                        ? isCorrect 
                                          ? 'border-green-500 bg-green-50' 
                                          : 'border-red-500 bg-red-50'
                                        : ''
                                    }`}
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-sm font-medium">{expense.name}</span>
                                      {showResults && (
                                        isCorrect ? <CheckCircle className="w-4 h-4 text-green-600" /> 
                                                 : <XCircle className="w-4 h-4 text-red-600" />
                                      )}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      ${expense.amount.toLocaleString()}/month
                                    </div>
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
              <h3 className="text-xl font-bold mb-2">Budget Analysis Results</h3>
              <p className="text-gray-600 mb-4">
                Understanding expense categories is crucial for POS data analysis and profit optimization.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Accuracy Score</div>
                  <div className="text-2xl font-bold text-blue-600">{score}%</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Total Budget</div>
                  <div className="text-2xl font-bold text-green-600">${totalBudget.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Categories Used</div>
                  <div className="text-2xl font-bold text-purple-600">{categories.filter(cat => cat.expenses.length > 0).length}</div>
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
                    <span className="font-medium">Excellent work! You're ready for POS data analysis.</span>
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