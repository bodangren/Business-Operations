'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AccountCategorization from '@/components/drag-drop-exercises/AccountCategorization';
import { JournalEntryBuilding } from '@/components/exercises/JournalEntryBuilding';

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
              
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="font-semibold mb-2">Trial Balance Sorting</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Drag-and-drop exercise for organizing accounts into proper trial balance format
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🚧 Planned
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}