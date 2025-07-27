/**
 * AccountCategorization Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import AccountCategorization from '@/components/drag-drop-exercises/AccountCategorization'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <AccountCategorization />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * No props are required - it initializes with default accounts and randomization.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn the fundamental accounting equation (Assets = Liabilities + Equity)
 * and how to categorize different business accounts into their proper classifications.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Drag & Drop Interface**: Students see 12 different business accounts in a randomized bank
 *    and must drag each account to its correct category in the accounting equation visualization.
 * 
 * 2. **Visual Accounting Equation**: The interface displays the classic accounting equation:
 *    - Left side: Assets (things the business owns)
 *    - Right side: Liabilities + Equity (claims against assets)
 *    - Additional sections for Revenue and Expenses
 * 
 * 3. **Real-World Examples**: Each account includes student-friendly descriptions:
 *    - Cash: "Like the money in your wallet or checking account"
 *    - Equipment: "Like a pizza oven in a pizza shop or computers in an office"
 *    - Accounts Payable: "Like owing money to the store where you bought supplies"
 * 
 * 4. **Hint System**: Students can toggle hints to see real-world examples of each account,
 *    helping them connect abstract accounting concepts to everyday experiences.
 * 
 * 5. **Immediate Feedback**: When students check their answers:
 *    - Correct placements turn green
 *    - Incorrect placements turn red (students can move them to try again)
 *    - Score and attempt counter track progress
 * 
 * 6. **Progressive Learning**: Students can:
 *    - Practice multiple times with different randomized account orders
 *    - Use hints when needed, then try without hints
 *    - Build confidence through repeated successful categorization
 * 
 * KEY LEARNING OUTCOMES:
 * - Understand that Assets = Liabilities + Equity (fundamental accounting equation)
 * - Identify the 5 main account categories: Assets, Liabilities, Equity, Revenue, Expenses
 * - Classify specific accounts into proper categories
 * - Connect accounting terminology to real-world business examples
 * - Build foundation for more advanced accounting topics like journal entries and financial statements
 * 
 * ACCOUNTS INCLUDED:
 * Assets: Cash, Accounts Receivable, Equipment, Inventory
 * Liabilities: Accounts Payable, Notes Payable
 * Equity: Owner's Equity, Retained Earnings
 * Revenue: Service Revenue, Sales Revenue
 * Expenses: Rent Expense, Salary Expense
 */

'use client';

import { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, ChevronDown, ChevronUp, RotateCcw, CheckCircle } from 'lucide-react';

interface Account {
  id: string;
  name: string;
  category: 'Assets' | 'Liabilities' | 'Equity' | 'Revenue' | 'Expenses';
  description: string;
  realWorldExample: string;
}

interface DroppedAccount {
  account: Account;
  isCorrect: boolean;
}

interface CategoryZone {
  id: string;
  name: string;
  description: string;
  emoji: string;
  accounts: DroppedAccount[];
}

const DEFAULT_ACCOUNTS: Account[] = [
  {
    id: 'cash',
    name: 'Cash',
    category: 'Assets',
    description: 'Money on hand or in bank accounts',
    realWorldExample: 'Like the money in your wallet or checking account'
  },
  {
    id: 'accounts-receivable',
    name: 'Accounts Receivable',
    category: 'Assets',
    description: 'Money customers owe you',
    realWorldExample: 'Like when you do chores and parents promise to pay you later'
  },
  {
    id: 'equipment',
    name: 'Equipment',
    category: 'Assets',
    description: 'Tools and machinery the business owns',
    realWorldExample: 'Like a pizza oven in a pizza shop or computers in an office'
  },
  {
    id: 'inventory',
    name: 'Inventory',
    category: 'Assets',
    description: 'Products ready to sell',
    realWorldExample: 'Like shoes in a shoe store or ingredients in a restaurant'
  },
  {
    id: 'accounts-payable',
    name: 'Accounts Payable',
    category: 'Liabilities',
    description: 'Money you owe to suppliers',
    realWorldExample: 'Like owing money to the store where you bought supplies'
  },
  {
    id: 'notes-payable',
    name: 'Notes Payable',
    category: 'Liabilities',
    description: 'Formal loans you must repay',
    realWorldExample: 'Like a car loan or student loan with scheduled payments'
  },
  {
    id: 'owners-equity',
    name: "Owner's Equity",
    category: 'Equity',
    description: "Owner's investment in the business",
    realWorldExample: 'Like the money you put in to start your lemonade stand'
  },
  {
    id: 'retained-earnings',
    name: 'Retained Earnings',
    category: 'Equity',
    description: 'Profits kept in the business',
    realWorldExample: 'Like saving your birthday money instead of spending it'
  },
  {
    id: 'service-revenue',
    name: 'Service Revenue',
    category: 'Revenue',
    description: 'Money earned from providing services',
    realWorldExample: 'Like money earned from tutoring or dog walking'
  },
  {
    id: 'sales-revenue',
    name: 'Sales Revenue',
    category: 'Revenue',
    description: 'Money earned from selling products',
    realWorldExample: 'Like money from selling lemonade or cookies'
  },
  {
    id: 'rent-expense',
    name: 'Rent Expense',
    category: 'Expenses',
    description: 'Cost of renting space',
    realWorldExample: 'Like paying rent for your apartment or office space'
  },
  {
    id: 'salary-expense',
    name: 'Salary Expense',
    category: 'Expenses',
    description: 'Cost of paying employees',
    realWorldExample: 'Like paying workers at a fast-food restaurant'
  }
];

export default function AccountCategorization() {
  const [accounts, setAccounts] = useState<Account[]>(() => 
    [...DEFAULT_ACCOUNTS].sort(() => Math.random() - 0.5)
  );
  
  const [categories, setCategories] = useState<CategoryZone[]>([
    {
      id: 'assets',
      name: 'Assets',
      description: 'Things the business OWNS that have value',
      emoji: '💰',
      accounts: []
    },
    {
      id: 'liabilities',
      name: 'Liabilities',
      description: 'Money the business OWES to others',
      emoji: '📝',
      accounts: []
    },
    {
      id: 'equity',
      name: 'Equity',
      description: "The owner's CLAIM on business assets",
      emoji: '👑',
      accounts: []
    },
    {
      id: 'revenue',
      name: 'Revenue',
      description: 'Money EARNED from business activities',
      emoji: '📈',
      accounts: []
    },
    {
      id: 'expenses',
      name: 'Expenses',
      description: 'Money SPENT to run the business',
      emoji: '💸',
      accounts: []
    }
  ]);

  const [attempts, setAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [score, setScore] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const onDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (source.droppableId === 'accounts-bank') {
      // Moving from bank to category
      const account = accounts.find(acc => acc.id === draggableId);
      if (!account) return;

      const targetCategory = categories.find(cat => cat.id === destination.droppableId);
      if (!targetCategory) return;

      const isCorrect = account.category.toLowerCase() === targetCategory.id;

      setAccounts(prev => prev.filter(acc => acc.id !== draggableId));
      setCategories(prev => prev.map(cat => 
        cat.id === destination.droppableId
          ? {
              ...cat,
              accounts: [
                ...cat.accounts,
                { account, isCorrect }
              ]
            }
          : cat
      ));
    } else if (destination.droppableId === 'accounts-bank') {
      // Moving from category back to bank
      const sourceCategory = categories.find(cat => cat.id === source.droppableId);
      if (!sourceCategory) return;

      const droppedAccount = sourceCategory.accounts[source.index];
      if (!droppedAccount) return;

      setCategories(prev => prev.map(cat => 
        cat.id === source.droppableId
          ? {
              ...cat,
              accounts: cat.accounts.filter((_, index) => index !== source.index)
            }
          : cat
      ));
      setAccounts(prev => [...prev, droppedAccount.account]);
    } else {
      // Moving between categories
      const sourceCategory = categories.find(cat => cat.id === source.droppableId);
      const targetCategory = categories.find(cat => cat.id === destination.droppableId);
      
      if (!sourceCategory || !targetCategory) return;

      const droppedAccount = sourceCategory.accounts[source.index];
      if (!droppedAccount) return;

      const isCorrect = droppedAccount.account.category.toLowerCase() === destination.droppableId;

      setCategories(prev => prev.map(cat => {
        if (cat.id === source.droppableId) {
          return {
            ...cat,
            accounts: cat.accounts.filter((_, index) => index !== source.index)
          };
        }
        if (cat.id === destination.droppableId) {
          const newAccounts = [...cat.accounts];
          newAccounts.splice(destination.index, 0, { 
            account: droppedAccount.account, 
            isCorrect 
          });
          return {
            ...cat,
            accounts: newAccounts
          };
        }
        return cat;
      }));
    }
  }, [accounts, categories]);

  const checkAnswers = () => {
    setAttempts(prev => prev + 1);
    
    const totalPlaced = categories.reduce((sum, cat) => sum + cat.accounts.length, 0);
    const correctlyPlaced = categories.reduce((sum, cat) => 
      sum + cat.accounts.filter(item => item.isCorrect).length, 0
    );
    
    const newScore = totalPlaced > 0 ? Math.round((correctlyPlaced / totalPlaced) * 100) : 0;
    setScore(newScore);
    
    if (newScore === 100 && totalPlaced === DEFAULT_ACCOUNTS.length) {
      setFeedbackMessage(`🎉 Perfect! You correctly categorized all ${totalPlaced} accounts! You understand the accounting equation: Assets = Liabilities + Equity!`);
    } else if (totalPlaced === DEFAULT_ACCOUNTS.length) {
      setFeedbackMessage(`You placed all accounts but got ${correctlyPlaced} out of ${totalPlaced} correct (${newScore}%). Look at the red highlighted accounts and try moving them to the right categories!`);
    } else {
      setFeedbackMessage(`Keep going! You've placed ${totalPlaced} out of ${DEFAULT_ACCOUNTS.length} accounts. ${correctlyPlaced} are in the right place so far!`);
    }
    
    setShowFeedback(true);
  };

  const resetExercise = () => {
    setAccounts([...DEFAULT_ACCOUNTS].sort(() => Math.random() - 0.5));
    setCategories(prev => prev.map(cat => ({ ...cat, accounts: [] })));
    setAttempts(0);
    setScore(0);
    setShowFeedback(false);
    setShowHints(false);
  };

  const toggleHints = () => {
    setShowHints(prev => !prev);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <span className="text-3xl">🏦</span>
            Account Categorization Challenge
          </CardTitle>
          <CardDescription className="text-lg">
            Learn the fundamental accounting equation by categorizing business accounts!
          </CardDescription>
          <div className="mt-4 flex items-center justify-center gap-4">
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
            <div className="flex gap-4 text-sm font-semibold">
              <Badge variant="outline" className="text-blue-600">
                Attempts: {attempts}
              </Badge>
              <Badge variant="outline" className="text-green-600">
                Score: {score}%
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play Account Categorization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Objective</h4>
              <p className="text-blue-700">
                Learn the fundamental accounting equation: <strong>Assets = Liabilities + Equity</strong>. 
                Drag each business account to its correct category to understand how businesses organize their finances.
              </p>
            </div>

            {/* How to Play */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">🎮 How to Play</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">1. Drag & Drop</h5>
                  <p className="text-sm text-blue-700">
                    Drag each account from the bank to its correct category box. 
                    You can move accounts between categories if you change your mind.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">2. Use Hints</h5>
                  <p className="text-sm text-blue-700">
                    Click "Show Hints" to see real-world examples of each account. 
                    This helps connect accounting terms to everyday experiences.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">3. Check Answers</h5>
                  <p className="text-sm text-blue-700">
                    Click "Check Answers" to see your results. 
                    Correct accounts turn green, incorrect ones turn red.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">4. Keep Practicing</h5>
                  <p className="text-sm text-blue-700">
                    Try to get 100% score! Reset to practice with a new randomized order.
                  </p>
                </div>
              </div>
            </div>

            {/* Account Categories */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">📚 Account Categories</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">💰</span>
                    <h5 className="font-medium text-green-800">Assets</h5>
                  </div>
                  <p className="text-sm text-green-700">Things the business OWNS</p>
                  <p className="text-xs text-green-600 mt-1">Examples: Cash, Equipment, Inventory</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📝</span>
                    <h5 className="font-medium text-red-800">Liabilities</h5>
                  </div>
                  <p className="text-sm text-red-700">Money the business OWES</p>
                  <p className="text-xs text-red-600 mt-1">Examples: Accounts Payable, Loans</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">👑</span>
                    <h5 className="font-medium text-purple-800">Equity</h5>
                  </div>
                  <p className="text-sm text-purple-700">Owner's CLAIM on business</p>
                  <p className="text-xs text-purple-600 mt-1">Examples: Owner's Equity, Retained Earnings</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📈</span>
                    <h5 className="font-medium text-emerald-800">Revenue</h5>
                  </div>
                  <p className="text-sm text-emerald-700">Money EARNED by business</p>
                  <p className="text-xs text-emerald-600 mt-1">Examples: Sales Revenue, Service Revenue</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">💸</span>
                    <h5 className="font-medium text-orange-800">Expenses</h5>
                  </div>
                  <p className="text-sm text-orange-700">Money SPENT by business</p>
                  <p className="text-xs text-orange-600 mt-1">Examples: Rent Expense, Salary Expense</p>
                </div>
              </div>
            </div>

            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">💡 Success Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Think about ownership:</strong> Does the business own it? (Asset) Owe it? (Liability)</li>
                <li>• <strong>Use real-world examples:</strong> Connect "Accounts Receivable" to "money owed by customers"</li>
                <li>• <strong>Remember the equation:</strong> Assets always equal Liabilities + Equity</li>
                <li>• <strong>Revenue vs. Expenses:</strong> Revenue increases equity, expenses decrease it</li>
                <li>• <strong>Practice makes perfect:</strong> Try multiple times to build confidence</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Game Area */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Interactive Categorization Exercise</CardTitle>
          <CardDescription className="text-center">
            Drag accounts from the bank below to their correct categories in the accounting equation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            {/* Accounts Bank */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-center">
                📚 Accounts to Classify
              </h3>
              <Droppable droppableId="accounts-bank" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`min-h-[100px] p-4 border-2 border-dashed rounded-lg transition-colors ${
                      snapshot.isDraggingOver 
                        ? 'border-blue-400 bg-blue-50' 
                        : 'border-gray-300 bg-gray-50'
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 justify-center">
                      {accounts.map((account, index) => (
                        <Draggable key={account.id} draggableId={account.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`bg-white border-2 border-blue-200 rounded-lg p-3 cursor-grab shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${
                                snapshot.isDragging ? 'rotate-3 shadow-lg' : ''
                              }`}
                              title={showHints ? `${account.description} - ${account.realWorldExample}` : account.description}
                            >
                              <div className="font-semibold text-gray-800">{account.name}</div>
                              {showHints && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {account.realWorldExample}
                                </div>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                    {accounts.length === 0 && (
                      <div className="text-center text-gray-500 py-8">
                        🎉 All accounts have been categorized!
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            </div>

        {/* Accounting Equation */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
            The Accounting Equation
          </h3>
          
          {/* Assets = Liabilities + Equity */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-8">
            {/* Assets */}
            <div className="md:col-span-2">
              <CategoryDropZone 
                category={categories[0]} 
                showHints={showHints}
              />
            </div>
            
            <div className="text-center text-2xl font-bold text-blue-600">=</div>
            
            {/* Liabilities */}
            <div>
              <CategoryDropZone 
                category={categories[1]} 
                showHints={showHints}
              />
            </div>
            
            <div className="text-center text-xl font-bold text-blue-600">+</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Equity */}
            <div>
              <CategoryDropZone 
                category={categories[2]} 
                showHints={showHints}
              />
            </div>
            
            {/* Revenue */}
            <div>
              <CategoryDropZone 
                category={categories[3]} 
                showHints={showHints}
              />
            </div>
            
            {/* Expenses */}
            <div>
              <CategoryDropZone 
                category={categories[4]} 
                showHints={showHints}
              />
            </div>
          </div>
        </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mb-6">
              <Button
                onClick={checkAnswers}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Check Answers
              </Button>
              <Button
                onClick={resetExercise}
                variant="outline"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button
                onClick={toggleHints}
                variant="outline"
                className={showHints ? 'bg-purple-50 border-purple-300' : ''}
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                {showHints ? 'Hide' : 'Show'} Hints
              </Button>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 rounded-lg text-center font-semibold ${
                score === 100 
                  ? 'bg-green-100 border border-green-400 text-green-800'
                  : 'bg-yellow-100 border border-yellow-400 text-yellow-800'
              }`}>
                {feedbackMessage}
              </div>
            )}
          </DragDropContext>
        </CardContent>
      </Card>

      {/* Educational Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
            <span className="text-lg">💡</span>
            Remember the Accounting Equation:
          </h4>
          <div className="text-center mb-4">
            <span className="text-lg font-bold text-blue-800">Assets = Liabilities + Equity</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 text-sm">
            <div className="p-2 bg-white rounded border border-blue-200">
              <div className="font-semibold text-green-800">💰 Assets</div>
              <div className="text-green-700">Things the business owns</div>
            </div>
            <div className="p-2 bg-white rounded border border-blue-200">
              <div className="font-semibold text-red-800">📝 Liabilities</div>
              <div className="text-red-700">Money the business owes</div>
            </div>
            <div className="p-2 bg-white rounded border border-blue-200">
              <div className="font-semibold text-purple-800">👑 Equity</div>
              <div className="text-purple-700">Owner's claim on business</div>
            </div>
            <div className="p-2 bg-white rounded border border-blue-200">
              <div className="font-semibold text-emerald-800">📈 Revenue</div>
              <div className="text-emerald-700">Money earned by business</div>
            </div>
            <div className="p-2 bg-white rounded border border-blue-200">
              <div className="font-semibold text-orange-800">💸 Expenses</div>
              <div className="text-orange-700">Money spent by business</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface CategoryDropZoneProps {
  category: CategoryZone;
  showHints: boolean;
}

function CategoryDropZone({ category, showHints }: CategoryDropZoneProps) {
  return (
    <div className="text-center">
      <h4 className="font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
        <span className="text-2xl">{category.emoji}</span>
        {category.name}
      </h4>
      <p className="text-xs text-gray-600 mb-3">{category.description}</p>
      
      <Droppable droppableId={category.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[120px] p-3 border-2 border-dashed rounded-lg transition-colors ${
              snapshot.isDraggingOver
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 bg-gray-50'
            }`}
          >
            {category.accounts.length === 0 ? (
              <div className="text-gray-400 text-sm py-8">
                Drop {category.name.toLowerCase()} accounts here
              </div>
            ) : (
              <div className="space-y-2">
                {category.accounts.map((item, index) => (
                  <Draggable key={item.account.id} draggableId={item.account.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`p-2 rounded cursor-grab transition-all ${
                          snapshot.isDragging 
                            ? 'shadow-lg rotate-2' 
                            : ''
                        } ${
                          item.isCorrect 
                            ? 'bg-green-500 text-white' 
                            : 'bg-red-500 text-white'
                        }`}
                        title={showHints ? `${item.account.description} - ${item.account.realWorldExample}` : item.account.description}
                      >
                        <div className="font-semibold text-sm">{item.account.name}</div>
                        {showHints && (
                          <div className="text-xs opacity-90 mt-1">
                            {item.account.realWorldExample}
                          </div>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}