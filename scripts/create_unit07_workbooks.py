from __future__ import annotations
from pathlib import Path

from excel_utils import build_sheet, write_workbook_file, BOLD_STYLES

BASE_DIR = Path('bus-math-nextjs/public/resources')
BASE_DIR.mkdir(parents=True, exist_ok=True)

ASSETS = [
    ('Delivery Van', 42000, 5000, 5),
    ('Espresso Machine', 18500, 1500, 7),
    ('POS Terminals', 9600, 0, 4),
    ('Furniture Set', 12500, 1200, 6),
    ('Refrigeration Units', 15800, 2000, 8),
]

PURCHASES = [
    ('2025-01-05', 120, 18.40),
    ('2025-01-12', 80, 19.10),
    ('2025-01-20', 100, 19.60),
    ('2025-01-28', 90, 19.80),
]

SALES = [
    ('2025-01-15', 70),
    ('2025-01-22', 90),
    ('2025-01-30', 100),
]

FIFO_SUMMARY = {
    'COGS Units': 260,
    'COGS Cost': 4912.00,
    'Ending Inventory Units': 130,
    'Ending Inventory Cost': 2566.00,
}

LIFO_SUMMARY = {
    'COGS Units': 260,
    'COGS Cost': 5079.00,
    'Ending Inventory Units': 130,
    'Ending Inventory Cost': 2399.00,
}


def ddb_first_year(cost: float, salvage: float, life: float) -> float:
    return ((cost - salvage) * 2 / life)


def build_depreciation_sheet(include_formulas: bool, include_selected: bool, method_value: str | None = None) -> str:
    rows = []
    rows.append([
        {'value': 'Asset Depreciation Schedule', 'type': 'str', 'style': 1},
        None,
        None,
        None,
        None,
        None,
        ({'value': 'Selected Depreciation', 'type': 'str', 'style': 1} if include_selected else None),
    ])
    rows.append([None] * (7 if include_selected else 6))
    rows.append([
        {'value': 'Method (SLN or DDB)', 'type': 'str'},
        {'value': method_value, 'type': 'str'} if method_value else None,
        None,
        None,
        None,
        None,
        None,
    ])
    rows.append([None] * (7 if include_selected else 6))
    header = [
        {'value': 'Asset', 'type': 'str', 'style': 1},
        {'value': 'Cost', 'type': 'str', 'style': 1},
        {'value': 'Salvage', 'type': 'str', 'style': 1},
        {'value': 'Useful Life (Years)', 'type': 'str', 'style': 1},
        {'value': 'SLN Annual Depreciation', 'type': 'str', 'style': 1},
        {'value': 'DDB Year 1', 'type': 'str', 'style': 1},
    ]
    if include_selected:
        header.append({'value': 'Selected Depreciation', 'type': 'str', 'style': 1})
    rows.append(header)

    start_row = 6
    for index, (name, cost, salvage, life) in enumerate(ASSETS, start=start_row):
        sln_formula = f'SLN(B{index},C{index},D{index})'
        ddb_formula = f'DDB(B{index},C{index},D{index},1)'
        sln_value = (cost - salvage) / life
        ddb_value = ddb_first_year(cost, salvage, life)
        row = [
            {'value': name, 'type': 'str'},
            {'value': cost},
            {'value': salvage},
            {'value': life},
            {'formula': sln_formula, 'result': sln_value} if include_formulas else None,
            {'formula': ddb_formula, 'result': ddb_value} if include_formulas else None,
        ]
        if include_selected:
            selected_result = sln_value if (method_value or "SLN").upper() == 'SLN' else ddb_value
            row.append({
                'formula': f'IF(UPPER($B$3)="SLN",E{index},F{index})',
                'result': selected_result,
            })
        rows.append(row)
    return build_sheet(rows)


def build_inventory_sheet(summary: dict[str, float], title: str, include_summary_values: bool) -> str:
    rows = []
    rows.append([
        {'value': title, 'type': 'str', 'style': 1}, None, None,
    ])
    rows.append([None, None, None])
    rows.append([
        {'value': 'Purchases', 'type': 'str', 'style': 1}, None, None,
    ])
    rows.append([
        {'value': 'Date', 'type': 'str', 'style': 1},
        {'value': 'Units', 'type': 'str', 'style': 1},
        {'value': 'Cost per Unit', 'type': 'str', 'style': 1},
    ])
    for date, units, cost in PURCHASES:
        rows.append([
            {'value': date, 'type': 'str'},
            {'value': units},
            {'value': cost},
        ])
    rows.append([None, None, None])
    rows.append([
        {'value': 'Sales', 'type': 'str', 'style': 1}, None, None,
    ])
    rows.append([
        {'value': 'Date', 'type': 'str', 'style': 1},
        {'value': 'Units Sold', 'type': 'str', 'style': 1},
        None,
    ])
    for date, units in SALES:
        rows.append([
            {'value': date, 'type': 'str'},
            {'value': units},
            None,
        ])
    rows.append([None, None, None])
    rows.append([
        {'value': 'Summary', 'type': 'str', 'style': 1}, None, None,
    ])
    summary_rows = [
        ('COGS Units', summary['COGS Units']),
        ('COGS Cost ($)', summary['COGS Cost']),
        ('Ending Inventory Units', summary['Ending Inventory Units']),
        ('Ending Inventory Cost ($)', summary['Ending Inventory Cost']),
    ]
    for label, value in summary_rows:
        rows.append([
            {'value': label, 'type': 'str'},
            {'value': value} if include_summary_values else None,
            None,
        ])
    return build_sheet(rows)

# Lesson 4
depr_student_l4 = build_depreciation_sheet(include_formulas=False, include_selected=False, method_value='SLN')
depr_teacher_l4 = build_depreciation_sheet(include_formulas=True, include_selected=False, method_value='SLN')

write_workbook_file(
    BASE_DIR,
    'unit07-lesson04-student.xlsx',
    [('Depreciation', depr_student_l4)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit07-lesson04-teacher.xlsx',
    [('Depreciation', depr_teacher_l4)],
    styles=BOLD_STYLES,
)

# Lesson 5 FIFO
fifo_student_sheet = build_inventory_sheet(FIFO_SUMMARY, 'FIFO Costing Worksheet', include_summary_values=False)
fifo_teacher_sheet = build_inventory_sheet(FIFO_SUMMARY, 'FIFO Costing Worksheet', include_summary_values=True)

write_workbook_file(
    BASE_DIR,
    'unit07-lesson05-student.xlsx',
    [('Depreciation', depr_teacher_l4), ('InventoryFIFO', fifo_student_sheet)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit07-lesson05-teacher.xlsx',
    [('Depreciation', depr_teacher_l4), ('InventoryFIFO', fifo_teacher_sheet)],
    styles=BOLD_STYLES,
)

# Lesson 6 LIFO
lifo_student_sheet = build_inventory_sheet(LIFO_SUMMARY, 'LIFO Costing Worksheet', include_summary_values=False)
lifo_teacher_sheet = build_inventory_sheet(LIFO_SUMMARY, 'LIFO Costing Worksheet', include_summary_values=True)

write_workbook_file(
    BASE_DIR,
    'unit07-lesson06-student.xlsx',
    [('Depreciation', depr_teacher_l4), ('InventoryLIFO', lifo_student_sheet)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit07-lesson06-teacher.xlsx',
    [('Depreciation', depr_teacher_l4), ('InventoryLIFO', lifo_teacher_sheet)],
    styles=BOLD_STYLES,
)

# Lesson 7 Dynamic method selection
depr_student_l7 = build_depreciation_sheet(include_formulas=True, include_selected=True, method_value='SLN')
depr_teacher_l7 = build_depreciation_sheet(include_formulas=True, include_selected=True, method_value='DDB')

write_workbook_file(
    BASE_DIR,
    'unit07-lesson07-student.xlsx',
    [('Depreciation', depr_student_l7), ('InventoryLIFO', lifo_teacher_sheet)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit07-lesson07-teacher.xlsx',
    [('Depreciation', depr_teacher_l7), ('InventoryLIFO', lifo_teacher_sheet)],
    styles=BOLD_STYLES,
)
