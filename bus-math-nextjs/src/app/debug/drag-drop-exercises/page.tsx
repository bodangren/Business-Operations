'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AccountCategorization from '@/components/drag-drop-exercises/AccountCategorization';
import { JournalEntryBuilding } from '@/components/exercises/JournalEntryBuilding';
import { TrialBalanceSorting } from '@/components/drag-drop-exercises/TrialBalanceSorting';
import { FinancialStatementMatching } from '@/components/drag-drop-exercises/FinancialStatementMatching';
import { BusinessTransactionCategorization } from '@/components/drag-drop/BusinessTransactionCategorization';
import { CashFlowTimeline } from '@/components/drag-drop-exercises/CashFlowTimeline';
import { BreakEvenComponents } from '@/components/drag-drop-exercises/BreakEvenComponents';

export default function DragDropExercisesDebugPage() {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-purple-800">Drag & Drop Exercises Debug Page</CardTitle>
            <CardDescription className="text-lg">
              Interactive drag-and-drop components for accounting education
            </CardDescription>
          </CardHeader>
        </Card>


        {/* Account Categorization Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Account Categorization Component</CardTitle>
            <CardDescription>
              Interactive drag-and-drop exercise teaching the fundamental accounting equation and account classification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Learning Experience</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <AccountCategorization />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Journal Entry Building Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Journal Entry Building Component</CardTitle>
            <CardDescription>
              Interactive drag-and-drop exercise teaching double-entry bookkeeping and journal entry creation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Double-Entry Bookkeeping</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <JournalEntryBuilding />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trial Balance Sorting Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Trial Balance Sorting Component</CardTitle>
            <CardDescription>
              Interactive drag-and-drop exercise teaching trial balance organization and account classification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Trial Balance Organization</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <TrialBalanceSorting />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Statement Matching Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Financial Statement Matching Component</CardTitle>
            <CardDescription>
              Interactive drag-and-drop exercise teaching financial statement identification and line item categorization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Financial Statement Learning</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <FinancialStatementMatching />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Transaction Categorization Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Business Transaction Categorization Component</CardTitle>
            <CardDescription>
              Interactive drag-and-drop exercise teaching cash flow statement organization and business activity classification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Cash Flow Categorization</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <BusinessTransactionCategorization />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cash Flow Timeline Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Cash Flow Timeline Component</CardTitle>
            <CardDescription>
              Interactive drag-and-drop exercise teaching cash flow visualization and timeline management over a 12-week period
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Cash Flow Timeline Management</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <CashFlowTimeline />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Break Even Components Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Break-Even Components Component</CardTitle>
            <CardDescription>
              Interactive drag-and-drop exercise teaching break-even analysis by categorizing fixed and variable costs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Break-Even Analysis Builder</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <BreakEvenComponents />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Component Usage Examples</CardTitle>
            <CardDescription>
              Code examples for implementing drag-and-drop exercise components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">AccountCategorization Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import AccountCategorization from '@/components/drag-drop-exercises/AccountCategorization'

// Basic usage
<AccountCategorization />

// The component includes:
// - Randomized account order for each session
// - Built-in scoring and attempt tracking  
// - Real-world examples and hints
// - Mobile-responsive drag-and-drop
// - Immediate feedback and validation
// - Educational information panel`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">JournalEntryBuilding Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { JournalEntryBuilding } from '@/components/exercises/JournalEntryBuilding'

// Basic usage
<JournalEntryBuilding />

// The component includes:
// - Multiple transaction scenarios to practice
// - Drag-and-drop account selection
// - Real-time balance validation
// - Built-in debit/credit rules and hints
// - Comprehensive feedback system
// - Progressive difficulty levels`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">TrialBalanceSorting Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { TrialBalanceSorting } from '@/components/drag-drop-exercises/TrialBalanceSorting'

// Basic usage
<TrialBalanceSorting />

// The component includes:
// - 12 pre-configured accounts with realistic balances
// - Drag-and-drop sorting into debit/credit columns
// - Real-time balance calculation and verification
// - Color-coded feedback for correct/incorrect placement
// - Built-in instructions with account classification guide
// - Comprehensive trial balance education experience`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">FinancialStatementMatching Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { FinancialStatementMatching } from '@/components/drag-drop-exercises/FinancialStatementMatching'

// Basic usage
<FinancialStatementMatching />

// The component includes:
// - 14 financial line items with realistic examples
// - Drag-and-drop classification into Income Statement, Balance Sheet, and Cash Flow
// - Real-time feedback with educational hints
// - Comprehensive built-in instructions with financial statement guides
// - Scoring system with percentage tracking
// - Mobile-responsive design with professional styling`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">BusinessTransactionCategorization Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { BusinessTransactionCategorization } from '@/components/drag-drop/BusinessTransactionCategorization'

// Basic usage
<BusinessTransactionCategorization />

// The component includes:
// - 16 realistic business transactions with varying difficulty levels
// - Drag-and-drop classification into Operating, Investing, and Financing activities
// - Built-in comprehensive instructions with category definitions and examples
// - Real-time feedback with correct/incorrect visual indicators
// - Progressive difficulty from easy to hard transactions
// - Score tracking with percentage and attempt counting
// - Mobile-responsive design with professional cash flow theme`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">CashFlowTimeline Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { CashFlowTimeline } from '@/components/drag-drop-exercises/CashFlowTimeline'

// Basic usage
<CashFlowTimeline />

// The component includes:
// - 13 realistic cash flow items (6 inflows, 7 outflows) over 12 weeks
// - Drag-and-drop timeline positioning with visual cash flow management
// - Real-time running balance calculation with positive/negative indicators
// - Built-in comprehensive instructions with business context and tips
// - Visual timeline chart showing cash position changes week by week
// - Score tracking with accuracy percentage and placement validation
// - Professional cash management theme with business scenarios`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">BreakEvenComponents Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { BreakEvenComponents } from '@/components/drag-drop-exercises/BreakEvenComponents'

// Basic usage
<BreakEvenComponents />

// The component includes:
// - 15 realistic business cost items (7 fixed costs, 8 variable costs)
// - Drag-and-drop categorization into Fixed Costs and Variable Costs
// - Real-time break-even calculations with contribution margin analysis
// - Interactive sales price adjustment to see impact on break-even point
// - Built-in comprehensive instructions with cost behavior explanations
// - Visual indicators for correct/incorrect cost categorizations
// - Professional break-even analysis theme with business formulas`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Required Dependencies:</h4>
                <pre className="text-sm overflow-x-auto">
{`// Install required packages
npm install @hello-pangea/dnd

// Component dependencies:
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Planned Components */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Component Status</CardTitle>
            <CardDescription>
              Current status of drag-and-drop exercise components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Account Categorization</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive component for learning the fundamental accounting equation and account classification
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Journal Entry Building</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive component for constructing journal entries using double-entry bookkeeping principles
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>
              
              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Trial Balance Sorting</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Drag-and-drop exercise for organizing accounts into proper trial balance format with real-time balance verification
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Financial Statement Matching</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive exercise for learning to classify line items into Income Statement, Balance Sheet, and Cash Flow Statement
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Business Transaction Categorization</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive exercise for categorizing business transactions into Operating, Investing, and Financing activities for cash flow statement preparation
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Cash Flow Timeline</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive timeline exercise for arranging cash inflows and outflows over a 12-week period to visualize cash management patterns
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Break-Even Components</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive exercise for categorizing fixed and variable costs to learn break-even analysis concepts
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Percentage Calculation Sorting</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Sort business scenarios by calculation type (markup, discount, tax, commission) to understand percentage applications
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Ratio Matching</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Match financial ratios to their formulas and business meanings to understand financial analysis concepts
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Budget Category Sort</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Organize expenses into budget categories (fixed, variable, discretionary) for personal and business budgeting
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Interest Calculation Builder</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Drag components to build simple and compound interest calculations for loans and investments
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Payroll Component Sorting</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Sort payroll items into gross pay, deductions, and net pay categories to understand payroll processing
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Inventory Flow Diagram</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Arrange inventory costs in FIFO/LIFO flow patterns to visualize inventory valuation methods
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Depreciation Method Builder</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Build depreciation schedules by dragging method components to understand asset depreciation concepts
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Business Cycle Sorting</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Arrange business activities in proper operational cycle order to understand business process flow
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}