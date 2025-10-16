from __future__ import annotations
from pathlib import Path

from excel_utils import build_sheet, write_workbook_file, BOLD_STYLES

BASE_DIR = Path('bus-math-nextjs/public/resources')
BASE_DIR.mkdir(parents=True, exist_ok=True)

# Shared Trial Balance
trial_balance_grid = [
    [
        {'value': 'Account', 'type': 'str'},
        {'value': 'Type', 'type': 'str'},
        {'value': 'Debit', 'type': 'str'},
        {'value': 'Credit', 'type': 'str'},
    ],
    [{'value': 'Sales Revenue', 'type': 'str'}, {'value': 'Revenue', 'type': 'str'}, None, {'value': 16800}],
    [{'value': 'Service Revenue', 'type': 'str'}, {'value': 'Revenue', 'type': 'str'}, None, {'value': 3600}],
    [{'value': 'Cost of Goods Sold', 'type': 'str'}, {'value': 'Expense', 'type': 'str'}, {'value': 9100}, None],
    [{'value': 'Operating Expense', 'type': 'str'}, {'value': 'Expense', 'type': 'str'}, {'value': 2800}, None],
    [{'value': 'Rent Expense', 'type': 'str'}, {'value': 'Expense', 'type': 'str'}, {'value': 1200}, None],
    [{'value': 'Salaries Expense', 'type': 'str'}, {'value': 'Expense', 'type': 'str'}, {'value': 2400}, None],
    [{'value': 'Cash', 'type': 'str'}, {'value': 'Asset', 'type': 'str'}, {'value': 5200}, None],
    [{'value': 'Accounts Receivable', 'type': 'str'}, {'value': 'Asset', 'type': 'str'}, {'value': 3400}, None],
    [{'value': 'Inventory', 'type': 'str'}, {'value': 'Asset', 'type': 'str'}, {'value': 2600}, None],
    [{'value': 'Prepaid Insurance', 'type': 'str'}, {'value': 'Asset', 'type': 'str'}, {'value': 300}, None],
    [{'value': 'Equipment', 'type': 'str'}, {'value': 'Asset', 'type': 'str'}, {'value': 6500}, None],
    [{'value': 'Accounts Payable', 'type': 'str'}, {'value': 'Liability', 'type': 'str'}, None, {'value': 2100}],
    [{'value': 'Notes Payable', 'type': 'str'}, {'value': 'Liability', 'type': 'str'}, None, {'value': 3000}],
    [{'value': 'Common Stock', 'type': 'str'}, {'value': 'Equity', 'type': 'str'}, None, {'value': 5000}],
    [{'value': 'Retained Earnings', 'type': 'str'}, {'value': 'Equity', 'type': 'str'}, None, {'value': 3000}],
]
trial_balance_sheet = build_sheet(trial_balance_grid)

# Lesson 4 Income Statement
income_statement_student = build_sheet([
    [{'value': 'Income Statement', 'type': 'str'}],
    [None],
    [{'value': 'Revenue', 'type': 'str', 'style': 1}],
    [{'value': 'Sales Revenue', 'type': 'str'}, None],
    [{'value': 'Service Revenue', 'type': 'str'}, None],
    [{'value': 'Total Revenue', 'type': 'str'}, None],
    [None],
    [{'value': 'Expenses', 'type': 'str', 'style': 1}],
    [{'value': 'Cost of Goods Sold', 'type': 'str'}, None],
    [{'value': 'Operating Expense', 'type': 'str'}, None],
    [{'value': 'Rent Expense', 'type': 'str'}, None],
    [{'value': 'Salaries Expense', 'type': 'str'}, None],
    [{'value': 'Total Expenses', 'type': 'str'}, None],
    [None],
    [{'value': 'Net Income', 'type': 'str'}, None],
])

income_statement_teacher = build_sheet([
    [{'value': 'Income Statement', 'type': 'str', 'style': 1}],
    [None],
    [{'value': 'Revenue', 'type': 'str', 'style': 1}],
    [{'value': 'Sales Revenue', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Sales Revenue")', 'result': 16800}],
    [{'value': 'Service Revenue', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Service Revenue")', 'result': 3600}],
    [{'value': 'Total Revenue', 'type': 'str'}, {'formula': 'SUM(B4:B5)', 'result': 20400}],
    [None],
    [{'value': 'Expenses', 'type': 'str', 'style': 1}],
    [{'value': 'Cost of Goods Sold', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Cost of Goods Sold")', 'result': 9100}],
    [{'value': 'Operating Expense', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Operating Expense")', 'result': 2800}],
    [{'value': 'Rent Expense', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Rent Expense")', 'result': 1200}],
    [{'value': 'Salaries Expense', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Salaries Expense")', 'result': 2400}],
    [{'value': 'Total Expenses', 'type': 'str'}, {'formula': 'SUM(B9:B12)', 'result': 15500}],
    [None],
    [{'value': 'Net Income', 'type': 'str'}, {'formula': 'B6-B13', 'result': 4900}],
])

write_workbook_file(BASE_DIR, 'unit03-lesson04-student.xlsx', [('TrialBalance', trial_balance_sheet), ('IncomeStatement', income_statement_student)], styles=BOLD_STYLES)
write_workbook_file(BASE_DIR, 'unit03-lesson04-teacher.xlsx', [('TrialBalance', trial_balance_sheet), ('IncomeStatement', income_statement_teacher)], styles=BOLD_STYLES)

# Lesson 5 Balance Sheet
balance_sheet_student = build_sheet([
    [{'value': 'Balance Sheet', 'type': 'str'}],
    [None],
    [{'value': 'Assets', 'type': 'str', 'style': 1}],
    [{'value': 'Cash', 'type': 'str'}, None],
    [{'value': 'Accounts Receivable', 'type': 'str'}, None],
    [{'value': 'Inventory', 'type': 'str'}, None],
    [{'value': 'Prepaid Insurance', 'type': 'str'}, None],
    [{'value': 'Equipment', 'type': 'str'}, None],
    [{'value': 'Total Assets', 'type': 'str'}, None],
    [None],
    [{'value': 'Liabilities', 'type': 'str', 'style': 1}],
    [{'value': 'Accounts Payable', 'type': 'str'}, None],
    [{'value': 'Notes Payable', 'type': 'str'}, None],
    [{'value': 'Total Liabilities', 'type': 'str'}, None],
    [None],
    [{'value': 'Equity', 'type': 'str', 'style': 1}],
    [{'value': 'Common Stock', 'type': 'str'}, None],
    [{'value': 'Retained Earnings', 'type': 'str'}, None],
    [{'value': 'Current Year Net Income', 'type': 'str'}, None],
    [{'value': 'Total Equity', 'type': 'str'}, None],
    [{'value': 'Total Liabilities & Equity', 'type': 'str'}, None],
    [{'value': 'Balance Check', 'type': 'str'}, None],
])

balance_sheet_teacher = build_sheet([
    [{'value': 'Balance Sheet', 'type': 'str', 'style': 1}],
    [None],
    [{'value': 'Assets', 'type': 'str', 'style': 1}],
    [{'value': 'Cash', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Cash")', 'result': 5200}],
    [{'value': 'Accounts Receivable', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Accounts Receivable")', 'result': 3400}],
    [{'value': 'Inventory', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Inventory")', 'result': 2600}],
    [{'value': 'Prepaid Insurance', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Prepaid Insurance")', 'result': 300}],
    [{'value': 'Equipment', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Equipment")', 'result': 6500}],
    [{'value': 'Total Assets', 'type': 'str'}, {'formula': 'SUM(B4:B8)', 'result': 18000}],
    [None],
    [{'value': 'Liabilities', 'type': 'str', 'style': 1}],
    [{'value': 'Accounts Payable', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Accounts Payable")', 'result': 2100}],
    [{'value': 'Notes Payable', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Notes Payable")', 'result': 3000}],
    [{'value': 'Total Liabilities', 'type': 'str'}, {'formula': 'SUM(B12:B13)', 'result': 5100}],
    [None],
    [{'value': 'Equity', 'type': 'str', 'style': 1}],
    [{'value': 'Common Stock', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Common Stock")', 'result': 5000}],
    [{'value': 'Retained Earnings', 'type': 'str'}, {'formula': 'SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Retained Earnings")', 'result': 3000}],
    [{'value': 'Current Year Net Income', 'type': 'str'}, {'formula': 'IncomeStatement!B15', 'result': 4900}],
    [{'value': 'Total Equity', 'type': 'str'}, {'formula': 'SUM(B17:B19)', 'result': 12900}],
    [{'value': 'Total Liabilities & Equity', 'type': 'str'}, {'formula': 'B14+B20', 'result': 18000}],
    [{'value': 'Balance Check', 'type': 'str'}, {'formula': 'B9-(B21)', 'result': 0}],
])

write_workbook_file(BASE_DIR, 'unit03-lesson05-student.xlsx', [('TrialBalance', trial_balance_sheet), ('IncomeStatement', income_statement_teacher), ('BalanceSheet', balance_sheet_student)], styles=BOLD_STYLES)
write_workbook_file(BASE_DIR, 'unit03-lesson05-teacher.xlsx', [('TrialBalance', trial_balance_sheet), ('IncomeStatement', income_statement_teacher), ('BalanceSheet', balance_sheet_teacher)], styles=BOLD_STYLES)

# Lesson 6 XLOOKUP
employee_data = [
    ['Employee ID', 'Name', 'Hourly Rate'],
    ['1001', 'Ava Patel', 28.5],
    ['1002', 'Jordan Ellis', 24.0],
    ['1003', 'Mina Torres', 26.75],
    ['1004', 'Diego Nguyen', 23.5],
    ['1005', 'Haru Sato', 27.25],
]

data_sheet = build_sheet([[{'value': cell, 'type': 'str'} if isinstance(cell, str) else {'value': cell} for cell in row] for row in employee_data])

payroll_student = build_sheet([
    [{'value': 'Employee Lookup', 'type': 'str'}],
    [None],
    [{'value': 'Employee ID', 'type': 'str'}, None],
    [{'value': 'Employee Name', 'type': 'str'}, None],
    [{'value': 'Hourly Rate', 'type': 'str'}, None],
    [{'value': 'Hours Worked', 'type': 'str'}, None],
])

payroll_teacher = build_sheet([
    [{'value': 'Employee Lookup', 'type': 'str', 'style': 1}],
    [None],
    [{'value': 'Employee ID', 'type': 'str'}, None],
    [{'value': 'Employee Name', 'type': 'str'}, {'formula': 'XLOOKUP(B3,Data!A2:A6,Data!B2:B6,"Not found")', 'type': 'str', 'result': ''}],
    [{'value': 'Hourly Rate', 'type': 'str'}, {'formula': 'XLOOKUP(B3,Data!A2:A6,Data!C2:C6,"",0,1)'}],
    [{'value': 'Hours Worked', 'type': 'str'}, None],
])

write_workbook_file(BASE_DIR, 'unit03-lesson06-student.xlsx', [('Data', data_sheet), ('Payroll', payroll_student)], styles=BOLD_STYLES)
write_workbook_file(BASE_DIR, 'unit03-lesson06-teacher.xlsx', [('Data', data_sheet), ('Payroll', payroll_teacher)], styles=BOLD_STYLES)

# Lesson 7 Cash Flow
cashflow_student = build_sheet([
    [{'value': 'Cash Flow Statement (Indirect)', 'type': 'str'}],
    [None],
    [{'value': 'Net Income', 'type': 'str'}, None],
    [{'value': 'Adjustments for Working Capital', 'type': 'str', 'style': 1}],
    [{'value': 'Change in Accounts Receivable', 'type': 'str'}, None],
    [{'value': 'Change in Inventory', 'type': 'str'}, None],
    [{'value': 'Change in Accounts Payable', 'type': 'str'}, None],
    [{'value': 'Net Cash from Operating Activities', 'type': 'str'}, None],
    [None],
    [{'value': 'Beginning Cash', 'type': 'str'}, None],
    [{'value': 'Ending Cash', 'type': 'str'}, None],
    [None],
    [{'value': 'Support Schedule', 'type': 'str', 'style': 1}],
    [{'value': 'Account', 'type': 'str'}, {'value': 'Beginning', 'type': 'str'}, {'value': 'Ending', 'type': 'str'}],
    [{'value': 'Accounts Receivable', 'type': 'str'}, {'value': 400}, {'value': 3400}],
    [{'value': 'Inventory', 'type': 'str'}, {'value': 1800}, {'value': 2600}],
    [{'value': 'Accounts Payable', 'type': 'str'}, {'value': 2700}, {'value': 2100}],
])

cashflow_teacher = build_sheet([
    [{'value': 'Cash Flow Statement (Indirect)', 'type': 'str', 'style': 1}],
    [None],
    [{'value': 'Net Income', 'type': 'str'}, {'formula': 'IncomeStatement!B15', 'result': 4900}],
    [{'value': 'Adjustments for Working Capital', 'type': 'str', 'style': 1}],
    [{'value': 'Change in Accounts Receivable', 'type': 'str'}, {'formula': '-1*(C15-B15)', 'result': -3000}],
    [{'value': 'Change in Inventory', 'type': 'str'}, {'formula': '-1*(C16-B16)', 'result': -800}],
    [{'value': 'Change in Accounts Payable', 'type': 'str'}, {'formula': 'C17-B17', 'result': -600}],
    [{'value': 'Net Cash from Operating Activities', 'type': 'str'}, {'formula': 'B3+SUM(B5:B7)', 'result': 500}],
    [None],
    [{'value': 'Beginning Cash', 'type': 'str'}, {'value': 4700}],
    [{'value': 'Ending Cash', 'type': 'str'}, {'formula': 'B10+B8', 'result': 5200}],
    [None],
    [{'value': 'Support Schedule', 'type': 'str', 'style': 1}],
    [{'value': 'Account', 'type': 'str'}, {'value': 'Beginning', 'type': 'str'}, {'value': 'Ending', 'type': 'str'}],
    [{'value': 'Accounts Receivable', 'type': 'str'}, {'value': 400}, {'value': 3400}],
    [{'value': 'Inventory', 'type': 'str'}, {'value': 1800}, {'value': 2600}],
    [{'value': 'Accounts Payable', 'type': 'str'}, {'value': 2700}, {'value': 2100}],
])

write_workbook_file(BASE_DIR, 'unit03-lesson07-student.xlsx', [
    ('TrialBalance', trial_balance_sheet),
    ('IncomeStatement', income_statement_teacher),
    ('BalanceSheet', balance_sheet_teacher),
    ('CashFlow', cashflow_student),
], styles=BOLD_STYLES)

write_workbook_file(BASE_DIR, 'unit03-lesson07-teacher.xlsx', [
    ('TrialBalance', trial_balance_sheet),
    ('IncomeStatement', income_statement_teacher),
    ('BalanceSheet', balance_sheet_teacher),
    ('CashFlow', cashflow_teacher),
], styles=BOLD_STYLES)
