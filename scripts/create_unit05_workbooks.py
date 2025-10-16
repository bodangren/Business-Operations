from __future__ import annotations
from pathlib import Path

from excel_utils import build_sheet, write_workbook_file, BOLD_STYLES

BASE_DIR = Path('bus-math-nextjs/public/resources')
BASE_DIR.mkdir(parents=True, exist_ok=True)

employees = [
    ('Ava Singh', 28.50, 46),
    ('Delilah Moore', 25.00, 38),
    ('Linh Tran', 27.75, 42),
    ('Martin Perez', 24.50, 36),
    ('Riley Chen', 26.25, 50),
]

# Lesson 4 tables
payroll_student_rows = [
    [
        {'value': 'Employee', 'type': 'str', 'style': 1},
        {'value': 'Hourly Rate', 'type': 'str', 'style': 1},
        {'value': 'Hours Worked', 'type': 'str', 'style': 1},
        {'value': 'Regular Hours', 'type': 'str', 'style': 1},
        {'value': 'Overtime Hours', 'type': 'str', 'style': 1},
        {'value': 'Regular Pay', 'type': 'str', 'style': 1},
        {'value': 'Overtime Pay', 'type': 'str', 'style': 1},
        {'value': 'Gross Pay', 'type': 'str', 'style': 1},
    ]
]
for name, rate, hours in employees:
    payroll_student_rows.append([
        {'value': name, 'type': 'str'},
        {'value': rate},
        {'value': hours},
        None,
        None,
        None,
        None,
        None,
    ])

payroll_teacher_rows = [payroll_student_rows[0]]
for idx, (name, rate, hours) in enumerate(employees, start=2):
    regular_hours = min(hours, 40)
    overtime_hours = max(hours - 40, 0)
    regular_pay = regular_hours * rate
    overtime_pay = overtime_hours * rate * 1.5
    gross_pay = regular_pay + overtime_pay
    payroll_teacher_rows.append([
        {'value': name, 'type': 'str'},
        {'value': rate},
        {'value': hours},
        {'formula': f'MIN(C{idx},40)', 'result': regular_hours},
        {'formula': f'MAX(C{idx}-40,0)', 'result': overtime_hours},
        {'formula': f'D{idx}*B{idx}', 'result': regular_pay},
        {'formula': f'E{idx}*B{idx}*1.5', 'result': overtime_pay},
        {'formula': f'F{idx}+G{idx}', 'result': gross_pay},
    ])

payroll_student_sheet = build_sheet(payroll_student_rows)
payroll_teacher_sheet = build_sheet(payroll_teacher_rows)

write_workbook_file(
    BASE_DIR,
    'unit05-lesson04-student.xlsx',
    [('Payroll', payroll_student_sheet)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit05-lesson04-teacher.xlsx',
    [('Payroll', payroll_teacher_sheet)],
    styles=BOLD_STYLES,
)

# Lesson 5 Tax tables and tax rate lookup
income_brackets = [
    ['Gross Pay Minimum', 'Tax Rate'],
    [0, 0.10],
    [800, 0.12],
    [1000, 0.14],
    [1200, 0.16],
    [1400, 0.18],
]

tax_table_sheet = build_sheet([
    [{'value': row[0], 'type': 'str', 'style': 1}, {'value': row[1], 'type': 'str', 'style': 1}] if i == 0 else
    [{'value': row[0]}, {'value': row[1]}]
    for i, row in enumerate(income_brackets)
])

payroll_student_l5 = build_sheet([
    row[:8] + [None]
    if idx == 0 else
    row[:8] + [None]
    for idx, row in enumerate(payroll_teacher_rows)
])

payroll_teacher_l5_rows = []
def tax_rate_for_gross(amount: float) -> float:
    if amount >= 1400:
        return 0.18
    if amount >= 1200:
        return 0.16
    if amount >= 1000:
        return 0.14
    if amount >= 800:
        return 0.12
    return 0.10


for idx, row in enumerate(payroll_teacher_rows):
    if idx == 0:
        payroll_teacher_l5_rows.append(row[:8] + [{'value': 'Tax Rate', 'type': 'str', 'style': 1}])
    else:
        gross_value = payroll_teacher_rows[idx][7]['result']
        payroll_teacher_l5_rows.append(row[:8] + [{
            'formula': f'XLOOKUP(H{idx},TaxTables!$A$2:$A$6,TaxTables!$B$2:$B$6,,0,-1)',
            'result': tax_rate_for_gross(gross_value),
        }])

payroll_teacher_l5 = build_sheet(payroll_teacher_l5_rows)

write_workbook_file(
    BASE_DIR,
    'unit05-lesson05-student.xlsx',
    [('Payroll', payroll_student_l5), ('TaxTables', tax_table_sheet)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit05-lesson05-teacher.xlsx',
    [('Payroll', payroll_teacher_l5), ('TaxTables', tax_table_sheet)],
    styles=BOLD_STYLES,
)

# Lesson 6 Net pay
payroll_student_l6_rows = []
for idx, row in enumerate(payroll_teacher_l5_rows):
    if idx == 0:
        payroll_student_l6_rows.append(row + [{'value': 'Tax Amount', 'type': 'str', 'style': 1}, {'value': 'Net Pay', 'type': 'str', 'style': 1}])
    else:
        payroll_student_l6_rows.append(row + [None, None])
payroll_student_l6 = build_sheet(payroll_student_l6_rows)

payroll_teacher_l6_rows = []
for idx, row in enumerate(payroll_teacher_l5_rows):
    if idx == 0:
        payroll_teacher_l6_rows.append(row + [{'value': 'Tax Amount', 'type': 'str', 'style': 1}, {'value': 'Net Pay', 'type': 'str', 'style': 1}])
    else:
        tax_rate_formula = payroll_teacher_l5_rows[idx][8]['formula']
        tax_rate_result = payroll_teacher_l5_rows[idx][8]['result']
        gross = payroll_teacher_rows[idx][7]['result']
        tax_amount = gross * tax_rate_result
        payroll_teacher_l6_rows.append(row + [
            {'formula': f'I{idx}*H{idx}', 'result': tax_amount},
            {'formula': f'H{idx}-J{idx}', 'result': gross - tax_amount},
        ])
payroll_teacher_l6 = build_sheet(payroll_teacher_l6_rows)

write_workbook_file(
    BASE_DIR,
    'unit05-lesson06-student.xlsx',
    [('Payroll', payroll_student_l6), ('TaxTables', tax_table_sheet)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit05-lesson06-teacher.xlsx',
    [('Payroll', payroll_teacher_l6), ('TaxTables', tax_table_sheet)],
    styles=BOLD_STYLES,
)

# Lesson 7 Data validation additions (teacher version only)
list_names = 'Ava Singh,Delilah Moore,Linh Tran,Martin Perez,Riley Chen'
data_validation_xml = f'''  <dataValidations count="2">
    <dataValidation type="list" allowBlank="0" showDropDown="1" sqref="A2:A6">
      <formula1>"{list_names}"</formula1>
    </dataValidation>
    <dataValidation type="whole" allowBlank="0" showInputMessage="1" showErrorMessage="1" sqref="C2:C6">
      <formula1>0</formula1>
      <formula2>80</formula2>
    </dataValidation>
  </dataValidations>'''

payroll_student_l7 = payroll_student_l6
payroll_teacher_l7 = build_sheet(payroll_teacher_l6_rows, extra=data_validation_xml)

write_workbook_file(
    BASE_DIR,
    'unit05-lesson07-student.xlsx',
    [('Payroll', payroll_student_l7), ('TaxTables', tax_table_sheet)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit05-lesson07-teacher.xlsx',
    [('Payroll', payroll_teacher_l7), ('TaxTables', tax_table_sheet)],
    styles=BOLD_STYLES,
)
