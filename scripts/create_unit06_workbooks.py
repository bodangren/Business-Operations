from __future__ import annotations
from pathlib import Path

from excel_utils import build_sheet, write_workbook_file, BOLD_STYLES

BASE_DIR = Path('bus-math-nextjs/public/resources')
BASE_DIR.mkdir(parents=True, exist_ok=True)

VARIABLE_COST = 28.0
FIXED_COST = 18500
EXPECTED_UNITS = 950
TARGET_PROFIT = 10000


def contribution_margin(price: float) -> float:
    return price - VARIABLE_COST


def projected_profit(price: float) -> float:
    return (price - VARIABLE_COST) * EXPECTED_UNITS - FIXED_COST


def break_even_units(price: float) -> float:
    cm = contribution_margin(price)
    return FIXED_COST / cm if cm else 0


def build_model_sheet(price: float, include_formulas: bool) -> str:
    rows = []
    rows.append([
        {'value': 'Cost-Volume-Profit Model', 'type': 'str', 'style': 1},
        None,
    ])
    rows.append([
        {'value': 'Unit Price ($)', 'type': 'str'},
        {'value': price},
    ])
    rows.append([
        {'value': 'Variable Cost per Unit ($)', 'type': 'str'},
        {'value': VARIABLE_COST},
    ])
    rows.append([
        {'value': 'Contribution Margin per Unit ($)', 'type': 'str'},
        {'formula': '=B2-B3', 'result': contribution_margin(price)} if include_formulas else None,
    ])
    rows.append([
        {'value': 'Contribution Margin Ratio', 'type': 'str'},
        {'formula': '=B4/B2', 'result': contribution_margin(price)/price} if include_formulas else None,
    ])
    rows.append([
        {'value': 'Total Fixed Costs ($)', 'type': 'str'},
        {'value': FIXED_COST},
    ])
    rows.append([
        {'value': 'Break-Even Units', 'type': 'str'},
        {'formula': '=B6/B4', 'result': break_even_units(price)} if include_formulas else None,
    ])
    rows.append([
        {'value': 'Break-Even Sales ($)', 'type': 'str'},
        {'formula': '=B7*B2', 'result': break_even_units(price)*price} if include_formulas else None,
    ])
    rows.append([
        {'value': 'Expected Units Sold', 'type': 'str'},
        {'value': EXPECTED_UNITS},
    ])
    rows.append([
        {'value': 'Target Profit ($)', 'type': 'str'},
        {'value': TARGET_PROFIT},
    ])
    rows.append([
        {'value': 'Projected Profit ($)', 'type': 'str'},
        {'formula': '=(B2-B3)*B9-B6', 'result': projected_profit(price)} if include_formulas else None,
    ])
    return build_sheet(rows)


# Lesson 4
model_student_l4 = build_model_sheet(price=52.0, include_formulas=False)
model_teacher_l4 = build_model_sheet(price=52.0, include_formulas=True)

write_workbook_file(
    BASE_DIR,
    'unit06-lesson04-student.xlsx',
    [('Model', model_student_l4)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit06-lesson04-teacher.xlsx',
    [('Model', model_teacher_l4)],
    styles=BOLD_STYLES,
)

# Lesson 5 (after goal seek price -> 58)
model_student_l5 = build_model_sheet(price=52.0, include_formulas=True)
model_teacher_l5 = build_model_sheet(price=58.0, include_formulas=True)

write_workbook_file(
    BASE_DIR,
    'unit06-lesson05-student.xlsx',
    [('Model', model_student_l5)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit06-lesson05-teacher.xlsx',
    [('Model', model_teacher_l5)],
    styles=BOLD_STYLES,
)

# Lesson 6: One-variable data table (Units Sold)
units_list = [700, 800, 900, 1000, 1100, 1200]

def build_units_table(price: float, include_results: bool) -> str:
    rows = [
        [None, {'value': 'Units Sold', 'type': 'str', 'style': 1}, {'formula': '=Model!B11', 'result': projected_profit(price)}],
    ]
    for units in units_list:
        profit = (price - VARIABLE_COST) * units - FIXED_COST
        rows.append([
            None,
            {'value': units},
            {'value': profit} if include_results else None,
        ])
    return build_sheet(rows)

units_table_student = build_units_table(price=58.0, include_results=False)
units_table_teacher = build_units_table(price=58.0, include_results=True)

write_workbook_file(
    BASE_DIR,
    'unit06-lesson06-student.xlsx',
    [('Model', model_teacher_l5), ('UnitsDataTable', units_table_student)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit06-lesson06-teacher.xlsx',
    [('Model', model_teacher_l5), ('UnitsDataTable', units_table_teacher)],
    styles=BOLD_STYLES,
)

# Lesson 7: Two-variable data table (Price vs Units)
price_options = [54, 56, 58, 60]
unit_options = [800, 900, 1000, 1100]

def build_price_units_table(include_results: bool) -> str:
    rows = []
    header_row = [{'formula': '=Model!B11', 'result': projected_profit(58.0)}]
    header_row.extend([{'value': price, 'type': 'str'} for price in price_options])
    rows.append(header_row)
    for units in unit_options:
        row = [{'value': units}]
        for price in price_options:
            profit = (price - VARIABLE_COST) * units - FIXED_COST
            row.append({'value': profit} if include_results else None)
        rows.append(row)
    return build_sheet(rows)

price_units_student = build_price_units_table(include_results=False)
price_units_teacher = build_price_units_table(include_results=True)

write_workbook_file(
    BASE_DIR,
    'unit06-lesson07-student.xlsx',
    [
        ('Model', model_teacher_l5),
        ('UnitsDataTable', units_table_teacher),
        ('PriceVolumeMatrix', price_units_student),
    ],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit06-lesson07-teacher.xlsx',
    [
        ('Model', model_teacher_l5),
        ('UnitsDataTable', units_table_teacher),
        ('PriceVolumeMatrix', price_units_teacher),
    ],
    styles=BOLD_STYLES,
)
