'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TAccountSimple } from '@/components/accounting/TAccountSimple'
import { TAccountDetailed } from '@/components/accounting/TAccountDetailed'
import { JournalEntry } from '@/components/accounting/JournalEntry'
import { TrialBalance } from '@/components/accounting/TrialBalance'
import TAccountsVisualization from '@/components/accounting/TAccountsVisualization'
import { TransactionJournal } from '@/components/accounting/TransactionJournal'

export default function AccountingDebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-green-800">Double-Entry Accounting Components Debug Page</CardTitle>
            <CardDescription className="text-lg">
              Testing and debugging accounting components for teaching double-entry bookkeeping
            </CardDescription>
          </CardHeader>
        </Card>

        {/* T-Accounts Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">T-Account Components</CardTitle>
            <CardDescription>
              Simple and detailed T-account components for visualizing debits and credits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Simple Cash T-Account */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple T-Account - Cash (Asset)</h3>
              <TAccountSimple
                accountName="Cash"
                accountType="asset"
                debits={[
                  {
                    id: '1',
                    date: '2024-01-01',
                    description: 'Initial investment',
                    amount: 10000,
                    reference: 'JE001'
                  },
                  {
                    id: '2',
                    date: '2024-01-05',
                    description: 'Cash sale',
                    amount: 1500,
                    reference: 'JE003'
                  }
                ]}
                credits={[
                  {
                    id: '3',
                    date: '2024-01-03',
                    description: 'Equipment purchase',
                    amount: 5000,
                    reference: 'JE002'
                  }
                ]}
                showFormulas={true}
                title="Cash Account Example"
              />
            </div>

            {/* Simple Revenue T-Account */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple T-Account - Sales Revenue</h3>
              <TAccountSimple
                accountName="Sales Revenue"
                accountType="revenue"
                debits={[]}
                credits={[
                  {
                    id: '1',
                    date: '2024-01-05',
                    description: 'Cash sale',
                    amount: 1500,
                    reference: 'JE003'
                  },
                  {
                    id: '2',
                    date: '2024-01-10',
                    description: 'Credit sale',
                    amount: 2500,
                    reference: 'JE004'
                  }
                ]}
                showFormulas={true}
                title="Revenue Account Example"
              />
            </div>

            {/* Detailed Equipment T-Account */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Detailed T-Account - Equipment (Asset)</h3>
              <TAccountDetailed
                accountName="Equipment"
                accountType="asset"
                accountNumber="1500"
                beginningBalance={0}
                debits={[
                  {
                    id: '1',
                    date: '2024-01-03',
                    description: 'Computer system purchase',
                    amount: 5000,
                    reference: 'JE002',
                    journalEntry: 'Equipment purchase',
                    category: 'investing'
                  },
                  {
                    id: '2',
                    date: '2024-01-15',
                    description: 'Office furniture',
                    amount: 2000,
                    reference: 'JE005',
                    journalEntry: 'Furniture acquisition',
                    category: 'investing'
                  },
                  {
                    id: '3',
                    date: '2024-01-20',
                    description: 'Additional software',
                    amount: 1200,
                    reference: 'JE006',
                    journalEntry: 'Software purchase',
                    category: 'operating'
                  }
                ]}
                credits={[]}
                showRunningBalance={true}
                interactive={true}
                title="Detailed Equipment Account"
              />
            </div>

            {/* Accounts Payable with transactions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Detailed T-Account - Accounts Payable (Liability)</h3>
              <TAccountDetailed
                accountName="Accounts Payable"
                accountType="liability"
                accountNumber="2100"
                beginningBalance={2000}
                debits={[
                  {
                    id: '1',
                    date: '2024-01-12',
                    description: 'Payment to supplier',
                    amount: 1500,
                    reference: 'JE007',
                    journalEntry: 'Supplier payment',
                    category: 'operating'
                  }
                ]}
                credits={[
                  {
                    id: '2',
                    date: '2024-01-08',
                    description: 'Inventory purchase on credit',
                    amount: 3000,
                    reference: 'JE008',
                    journalEntry: 'Inventory on credit',
                    category: 'operating'
                  },
                  {
                    id: '3',
                    date: '2024-01-18',
                    description: 'Office supplies on credit',
                    amount: 500,
                    reference: 'JE009',
                    journalEntry: 'Supplies purchase',
                    category: 'operating'
                  }
                ]}
                showRunningBalance={true}
                interactive={true}
                title="Accounts Payable with Beginning Balance"
              />
            </div>
          </CardContent>
        </Card>

        {/* T-Accounts Visualization Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">T-Accounts Visualization Component</CardTitle>
            <CardDescription>
              Visual representation of multiple T-accounts showing the accounting equation: Assets = Liabilities + Equity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Basic Visualization */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Basic T-Accounts Visualization</h3>
              <TAccountsVisualization 
                showAccountingEquation={true}
                showBalances={true}
                interactive={false}
                title="Small Business T-Accounts Overview"
              />
            </div>

            {/* Interactive Version */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive T-Accounts Visualization</h3>
              <TAccountsVisualization 
                showAccountingEquation={true}
                showBalances={true}
                interactive={true}
                title="Interactive Learning Environment"
              />
            </div>

            {/* Custom Accounts Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Custom Accounts Setup</h3>
              <TAccountsVisualization 
                accounts={[
                  {
                    id: 'checking',
                    name: 'Checking Account',
                    type: 'asset',
                    debits: [
                      { id: '1', date: '2024-01-01', description: 'Opening Balance', amount: 25000 },
                      { id: '2', date: '2024-01-15', description: 'Customer Payment', amount: 8500 },
                    ],
                    credits: [
                      { id: '3', date: '2024-01-05', description: 'Rent Payment', amount: 3500 },
                      { id: '4', date: '2024-01-20', description: 'Supplier Payment', amount: 6000 },
                    ]
                  },
                  {
                    id: 'inventory',
                    name: 'Inventory',
                    type: 'asset',
                    debits: [
                      { id: '5', date: '2024-01-10', description: 'Inventory Purchase', amount: 15000 },
                    ],
                    credits: [
                      { id: '6', date: '2024-01-25', description: 'Cost of Sales', amount: 8000 },
                    ]
                  },
                  {
                    id: 'loan-payable',
                    name: 'Bank Loan Payable',
                    type: 'liability',
                    debits: [
                      { id: '7', date: '2024-01-31', description: 'Principal Payment', amount: 2000 },
                    ],
                    credits: [
                      { id: '8', date: '2024-01-01', description: 'Loan Proceeds', amount: 50000 },
                    ]
                  },
                  {
                    id: 'retained-earnings',
                    name: 'Retained Earnings',
                    type: 'equity',
                    debits: [],
                    credits: [
                      { id: '9', date: '2024-01-01', description: 'Prior Year Profits', amount: 12000 },
                    ]
                  },
                ]}
                showAccountingEquation={true}
                showBalances={true}
                interactive={true}
                title="Retail Business Example"
              />
            </div>
          </CardContent>
        </Card>

        {/* Journal Entry Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Journal Entry Components</CardTitle>
            <CardDescription>
              Interactive journal entry components showing double-entry nature
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Simple Journal Entry */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple Journal Entry - Equipment Purchase</h3>
              <JournalEntry
                entryNumber="JE002"
                date="2024-01-03"
                description="Purchase computer system for office"
                reference="Invoice #1234"
                lines={[
                  {
                    id: '1',
                    account: 'Equipment',
                    accountType: 'asset',
                    debit: 5000,
                    description: 'Computer system'
                  },
                  {
                    id: '2',
                    account: 'Cash',
                    accountType: 'asset',
                    credit: 5000,
                    description: 'Payment for equipment'
                  }
                ]}
                showExplanation={true}
                title="Basic Equipment Purchase Entry"
              />
            </div>

            {/* Complex Journal Entry */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Complex Journal Entry - Mixed Transaction</h3>
              <JournalEntry
                entryNumber="JE010" 
                date="2024-01-25"
                description="Monthly adjusting entries for depreciation and accrued expenses"
                reference="AJE-Jan2024"
                lines={[
                  {
                    id: '1',
                    account: 'Depreciation Expense',
                    accountType: 'expense',
                    debit: 500,
                    description: 'Monthly depreciation on equipment'
                  },
                  {
                    id: '2',
                    account: 'Accumulated Depreciation - Equipment',
                    accountType: 'asset',
                    credit: 500,
                    description: 'Contra asset account'
                  },
                  {
                    id: '3',
                    account: 'Utilities Expense',
                    accountType: 'expense',
                    debit: 300,
                    description: 'Accrued utilities for January'
                  },
                  {
                    id: '4',
                    account: 'Utilities Payable',
                    accountType: 'liability',
                    credit: 300,
                    description: 'Amount owed for utilities'
                  }
                ]}
                showExplanation={true}
                interactive={true}
                title="Complex Adjusting Entry"
              />
            </div>

            {/* Revenue Journal Entry */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Revenue Journal Entry - Credit Sale</h3>
              <JournalEntry
                entryNumber="JE004"
                date="2024-01-10"
                description="Sale of products on credit to ABC Company"
                reference="Sales Invoice #5678"
                lines={[
                  {
                    id: '1',
                    account: 'Accounts Receivable',
                    accountType: 'asset',
                    debit: 2500,
                    description: 'Amount owed by ABC Company'
                  },
                  {
                    id: '2',
                    account: 'Sales Revenue',
                    accountType: 'revenue',
                    credit: 2500,
                    description: 'Revenue from product sales'
                  }
                ]}
                showExplanation={true}
                title="Credit Sales Entry"
              />
            </div>

            {/* Unbalanced Entry Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Unbalanced Entry Example (Teaching Tool)</h3>
              <JournalEntry
                entryNumber="JE999"
                date="2024-01-31"
                description="Example of an unbalanced entry for teaching purposes"
                reference="ERROR-DEMO"
                lines={[
                  {
                    id: '1',
                    account: 'Cash',
                    accountType: 'asset',
                    debit: 1000,
                    description: 'Cash received'
                  },
                  {
                    id: '2',
                    account: 'Sales Revenue',
                    accountType: 'revenue',
                    credit: 1200,
                    description: 'Revenue recorded'
                  }
                ]}
                showValidation={true}
                showExplanation={true}
                title="Unbalanced Entry (Error Demo)"
              />
            </div>
          </CardContent>
        </Card>

        {/* Trial Balance Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Trial Balance Components</CardTitle>
            <CardDescription>
              Trial balance components for verifying accounting equation balance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Simple Trial Balance */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple Trial Balance - Small Business</h3>
              <TrialBalance
                companyName="ABC Small Business"
                periodEnding="January 31, 2024"
                accounts={[
                  {
                    id: '1',
                    accountNumber: '1000',
                    accountName: 'Cash',
                    accountType: 'asset',
                    normalBalance: 'debit',
                    debitBalance: 6500
                  },
                  {
                    id: '2',
                    accountNumber: '1200',
                    accountName: 'Accounts Receivable',
                    accountType: 'asset',
                    normalBalance: 'debit',
                    debitBalance: 2500
                  },
                  {
                    id: '3',
                    accountNumber: '1500',
                    accountName: 'Equipment',
                    accountType: 'asset',
                    normalBalance: 'debit',
                    debitBalance: 8200
                  },
                  {
                    id: '4',
                    accountNumber: '1510',
                    accountName: 'Accumulated Depreciation - Equipment',
                    accountType: 'asset',
                    normalBalance: 'credit',
                    creditBalance: 500
                  },
                  {
                    id: '5',
                    accountNumber: '2100',
                    accountName: 'Accounts Payable',
                    accountType: 'liability',
                    normalBalance: 'credit',
                    creditBalance: 4000
                  },
                  {
                    id: '6',
                    accountNumber: '2200',
                    accountName: 'Utilities Payable',
                    accountType: 'liability',
                    normalBalance: 'credit',
                    creditBalance: 300
                  },
                  {
                    id: '7',
                    accountNumber: '3000',
                    accountName: 'Common Stock',
                    accountType: 'equity',
                    normalBalance: 'credit',
                    creditBalance: 10000
                  },
                  {
                    id: '8',
                    accountNumber: '4000',
                    accountName: 'Sales Revenue',
                    accountType: 'revenue',
                    normalBalance: 'credit',
                    creditBalance: 4000
                  },
                  {
                    id: '9',
                    accountNumber: '5000',
                    accountName: 'Depreciation Expense',
                    accountType: 'expense',
                    normalBalance: 'debit',
                    debitBalance: 500
                  },
                  {
                    id: '10',
                    accountNumber: '5100',
                    accountName: 'Utilities Expense',
                    accountType: 'expense',
                    normalBalance: 'debit',
                    debitBalance: 300
                  }
                ]}
                showAccountNumbers={true}
                showAccountTypes={true}
                groupByType={false}
                interactive={true}
                title="Balanced Trial Balance Example"
              />
            </div>

            {/* Grouped Trial Balance */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Grouped Trial Balance View</h3>
              <TrialBalance
                companyName="XYZ Corporation"
                periodEnding="December 31, 2024"
                accounts={[
                  // Assets
                  {
                    id: '1',
                    accountNumber: '1000',
                    accountName: 'Cash',
                    accountType: 'asset',
                    normalBalance: 'debit',
                    debitBalance: 15000
                  },
                  {
                    id: '2',
                    accountNumber: '1100',
                    accountName: 'Accounts Receivable',
                    accountType: 'asset',
                    normalBalance: 'debit',
                    debitBalance: 8500
                  },
                  {
                    id: '3',
                    accountNumber: '1300',
                    accountName: 'Inventory',
                    accountType: 'asset',
                    normalBalance: 'debit',
                    debitBalance: 12000
                  },
                  {
                    id: '4',
                    accountNumber: '1500',
                    accountName: 'Equipment',
                    accountType: 'asset',
                    normalBalance: 'debit',
                    debitBalance: 25000
                  },
                  // Liabilities
                  {
                    id: '5',
                    accountNumber: '2000',
                    accountName: 'Accounts Payable',
                    accountType: 'liability',
                    normalBalance: 'credit',
                    creditBalance: 6500
                  },
                  {
                    id: '6',
                    accountNumber: '2100',
                    accountName: 'Notes Payable',
                    accountType: 'liability',
                    normalBalance: 'credit',
                    creditBalance: 15000
                  },
                  // Equity
                  {
                    id: '7',
                    accountNumber: '3000',
                    accountName: 'Common Stock',
                    accountType: 'equity',
                    normalBalance: 'credit',
                    creditBalance: 20000
                  },
                  {
                    id: '8',
                    accountNumber: '3100',
                    accountName: 'Retained Earnings',
                    accountType: 'equity',
                    normalBalance: 'credit',
                    creditBalance: 8000
                  },
                  // Revenue
                  {
                    id: '9',
                    accountNumber: '4000',
                    accountName: 'Sales Revenue',
                    accountType: 'revenue',
                    normalBalance: 'credit',
                    creditBalance: 45000
                  },
                  // Expenses
                  {
                    id: '10',
                    accountNumber: '5000',
                    accountName: 'Cost of Goods Sold',
                    accountType: 'expense',
                    normalBalance: 'debit',
                    debitBalance: 27000
                  },
                  {
                    id: '11',
                    accountNumber: '5100',
                    accountName: 'Salaries Expense',
                    accountType: 'expense',
                    normalBalance: 'debit',
                    debitBalance: 18000
                  },
                  {
                    id: '12',
                    accountNumber: '5200',
                    accountName: 'Rent Expense',
                    accountType: 'expense',
                    normalBalance: 'debit',
                    debitBalance: 12000
                  },
                  {
                    id: '13',
                    accountNumber: '5300',
                    accountName: 'Utilities Expense',
                    accountType: 'expense',
                    normalBalance: 'debit',
                    debitBalance: 3600
                  },
                  {
                    id: '14',
                    accountNumber: '5400',
                    accountName: 'Insurance Expense',
                    accountType: 'expense',
                    normalBalance: 'debit',
                    debitBalance: 2400
                  }
                ]}
                showAccountNumbers={true}
                showAccountTypes={false}
                groupByType={true}
                interactive={true}
                title="Comprehensive Trial Balance by Account Type"
              />
            </div>

            {/* Unbalanced Trial Balance Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Unbalanced Trial Balance (Teaching Example)</h3>
              <TrialBalance
                companyName="Learning Company Inc."
                periodEnding="March 31, 2024"
                accounts={[
                  {
                    id: '1',
                    accountNumber: '1000',
                    accountName: 'Cash',
                    accountType: 'asset',
                    normalBalance: 'debit',
                    debitBalance: 5000
                  },
                  {
                    id: '2',
                    accountNumber: '2000',
                    accountName: 'Accounts Payable',
                    accountType: 'liability',
                    normalBalance: 'credit',
                    creditBalance: 2000
                  },
                  {
                    id: '3',
                    accountNumber: '3000',
                    accountName: 'Common Stock',
                    accountType: 'equity',
                    normalBalance: 'credit',
                    creditBalance: 2500 // This creates an imbalance
                  }
                ]}
                showValidation={true}
                interactive={true}
                title="Unbalanced Trial Balance (Error Demonstration)"
              />
            </div>
          </CardContent>
        </Card>

        {/* Transaction Journal Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Transaction Journal Component</CardTitle>
            <CardDescription>
              Interactive transaction journal for managing startup transactions and building a self-auditing ledger system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Basic Transaction Journal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Smart Ledger Transaction Journal - Unit 1</h3>
              <TransactionJournal
                title="Startup Transaction Journal"
                clientTypes={[
                  'Tech Startup',
                  'E-commerce Business', 
                  'Service Provider',
                  'Manufacturing',
                  'Retail Store',
                  'Consulting Firm',
                  'Restaurant/Food Service',
                  'Creative Agency'
                ]}
                maxTransactions={8}
                showAnalytics={true}
                initialTransactions={[
                  {
                    id: 'demo-1',
                    entryNumber: 'JE001',
                    date: '2024-01-01',
                    description: 'Initial founder investment',
                    clientFocus: 'Tech Startup',
                    reference: 'Founder Investment',
                    isBalanced: true,
                    lines: [
                      {
                        id: 'line-1',
                        account: 'Cash',
                        accountType: 'asset',
                        debit: 50000,
                        description: 'Founder cash investment'
                      },
                      {
                        id: 'line-2',
                        account: 'Owner\'s Equity',
                        accountType: 'equity',
                        credit: 50000,
                        description: 'Initial equity contribution'
                      }
                    ]
                  },
                  {
                    id: 'demo-2',
                    entryNumber: 'JE002',
                    date: '2024-01-05',
                    description: 'Equipment purchase for development',
                    clientFocus: 'Tech Startup',
                    reference: 'Equipment Purchase',
                    isBalanced: true,
                    lines: [
                      {
                        id: 'line-3',
                        account: 'Equipment',
                        accountType: 'asset',
                        debit: 15000,
                        description: 'Development computers and servers'
                      },
                      {
                        id: 'line-4',
                        account: 'Cash',
                        accountType: 'asset',
                        credit: 15000,
                        description: 'Payment for equipment'
                      }
                    ]
                  }
                ]}
              />
            </div>

            {/* Simplified Version */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simplified Transaction Journal</h3>
              <TransactionJournal
                title="Basic Transaction Recorder"
                clientTypes={['Small Business', 'Freelancer', 'Startup']}
                maxTransactions={5}
                showAnalytics={false}
              />
            </div>
          </CardContent>
        </Card>

        {/* Component Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Component Usage Examples</CardTitle>
            <CardDescription>
              Code examples for implementing double-entry accounting components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">TAccountSimple Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { TAccountSimple } from '@/components/accounting/TAccountSimple'

<TAccountSimple
  accountName="Cash"
  accountType="asset"
  debits={[
    {
      id: '1',
      date: '2024-01-01',
      description: 'Initial investment',
      amount: 10000,
      reference: 'JE001'
    }
  ]}
  credits={[
    {
      id: '2',
      date: '2024-01-03',
      description: 'Equipment purchase',
      amount: 5000,
      reference: 'JE002'
    }
  ]}
  showFormulas={true}
  title="Cash Account"
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">TAccountDetailed Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { TAccountDetailed } from '@/components/accounting/TAccountDetailed'

<TAccountDetailed
  accountName="Equipment"
  accountType="asset"
  accountNumber="1500"
  beginningBalance={0}
  debits={[...]}
  credits={[...]}
  showRunningBalance={true}
  interactive={true}
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">JournalEntry Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { JournalEntry } from '@/components/accounting/JournalEntry'

<JournalEntry
  entryNumber="JE002"
  date="2024-01-03"
  description="Purchase computer system for office"
  lines={[
    {
      id: '1',
      account: 'Equipment',
      accountType: 'asset',
      debit: 5000
    },
    {
      id: '2',
      account: 'Cash',
      accountType: 'asset',
      credit: 5000
    }
  ]}
  showExplanation={true}
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">TAccountsVisualization Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import TAccountsVisualization from '@/components/accounting/TAccountsVisualization'

// Basic usage with default accounts
<TAccountsVisualization 
  showAccountingEquation={true}
  showBalances={true}
  interactive={false}
/>

// Interactive version with custom accounts
<TAccountsVisualization 
  accounts={[
    {
      id: 'cash',
      name: 'Cash',
      type: 'asset',
      debits: [{ id: '1', date: '2024-01-01', description: 'Investment', amount: 50000 }],
      credits: [{ id: '2', date: '2024-01-05', description: 'Equipment', amount: 15000 }]
    },
    {
      id: 'loan',
      name: 'Bank Loan',
      type: 'liability', 
      debits: [],
      credits: [{ id: '3', date: '2024-01-01', description: 'Loan proceeds', amount: 30000 }]
    }
  ]}
  showAccountingEquation={true}
  interactive={true}
  title="My Business T-Accounts"
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">TrialBalance Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { TrialBalance } from '@/components/accounting/TrialBalance'

<TrialBalance
  companyName="ABC Company"
  periodEnding="December 31, 2024"
  accounts={[
    {
      id: '1',
      accountNumber: '1000',
      accountName: 'Cash',
      accountType: 'asset',
      normalBalance: 'debit',
      debitBalance: 10000
    },
    // ... more accounts
  ]}
  groupByType={true}
  interactive={true}
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Educational Features:</h4>
                <div className="text-sm space-y-2">
                  <div><strong>T-Accounts:</strong> Visual representation of debits and credits with automatic balance calculations</div>
                  <div><strong>T-Accounts Visualization:</strong> Multiple T-accounts with accounting equation verification (Assets = Liabilities + Equity)</div>
                  <div><strong>Journal Entries:</strong> Interactive double-entry validation with accounting equation impact analysis</div>
                  <div><strong>Trial Balance:</strong> Automatic balance verification with grouping and analysis features</div>
                  <div><strong>Teaching Tools:</strong> Built-in formulas, explanations, and error demonstrations</div>
                  <div><strong>Interactive Features:</strong> Toggle details, show/hide calculations, and responsive design</div>
                  <div><strong>Shadcn Integration:</strong> Consistent styling with modern UI components and accessibility</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}