from __future__ import annotations
from pathlib import Path

from excel_utils import build_sheet, write_workbook_file, BOLD_STYLES

BASE_DIR = Path('bus-math-nextjs/public/resources')
BASE_DIR.mkdir(parents=True, exist_ok=True)

MONTHS = 6
BASE_START_UNITS = 800
BASE_GROWTH = 0.06
BASE_PRICE = 45.0
COST_PER_UNIT = 21.0
OPERATING_EXPENSE = 12000.0

SCENARIOS = [
    (1, 'Base Case', 0.06, 45.0),
    (2, 'Best Case', 0.08, 47.0),
    (3, 'Worst Case', 0.04, 43.0),
]


def forecast_units(start_units: float, growth_rate: float, months: int = MONTHS) -> list[float]:
    units = []
    current = start_units
    for _ in range(months):
        units.append(current)
        current = round(current * (1 + growth_rate), 2)
    return units


def build_assumptions_sheet(include_scenarios: bool, selection: int = 1, include_if_formulas: bool = False) -> str:
    rows = []
    rows.append([{'value': 'Model Assumptions', 'type': 'str', 'style': 1}, None])
    rows.append([None, None])
    rows.append([{'value': 'Starting Units (Month 1)', 'type': 'str'}, {'value': BASE_START_UNITS}])
    rows.append([{'value': 'Monthly Growth Rate', 'type': 'str'}, {'value': BASE_GROWTH} if not include_scenarios else None])
    rows.append([{'value': 'Price per Unit ($)', 'type': 'str'}, {'value': BASE_PRICE} if not include_scenarios else None])
    rows.append([{'value': 'Cost per Unit ($)', 'type': 'str'}, {'value': COST_PER_UNIT}])
    rows.append([{'value': 'Monthly Operating Expenses ($)', 'type': 'str'}, {'value': OPERATING_EXPENSE}])

    if include_scenarios:
        rows.append([None, None])
        rows.append([{'value': 'Scenario Selection (1=Base, 2=Best, 3=Worst)', 'type': 'str'}, {'value': selection}])
        rows.append([None, None])
        rows.append([
            {'value': 'Scenario ID', 'type': 'str', 'style': 1},
            {'value': 'Name', 'type': 'str', 'style': 1},
            {'value': 'Growth Rate', 'type': 'str', 'style': 1},
            {'value': 'Price per Unit ($)', 'type': 'str', 'style': 1},
        ])
        for scen_id, name, growth, price in SCENARIOS:
            rows.append([
                {'value': scen_id},
                {'value': name, 'type': 'str'},
                {'value': growth},
                {'value': price},
            ])
        rows.append([None, None, None, None])
        growth_formula = 'IF($B$9=1,$C$12,IF($B$9=2,$C$13,$C$14))'
        price_formula = 'IF($B$9=1,$D$12,IF($B$9=2,$D$13,$D$14))'
        rows.append([
            {'value': 'Active Growth Rate', 'type': 'str'},
            ({'formula': growth_formula, 'result': SCENARIOS[selection-1][2]} if include_if_formulas else {'value': SCENARIOS[selection-1][2]}),
        ])
        rows.append([
            {'value': 'Active Price per Unit ($)', 'type': 'str'},
            ({'formula': price_formula, 'result': SCENARIOS[selection-1][3]} if include_if_formulas else {'value': SCENARIOS[selection-1][3]}),
        ])
    return build_sheet(rows)


def build_model_sheet(
    price_ref: str,
    growth_ref: str,
    base_units_ref: str,
    include_formulas: bool,
    price_value: float,
    growth_value: float,
    cost_ref: str = 'Assumptions!B6',
    operating_ref: str = 'Assumptions!B7',
    start_units: float = BASE_START_UNITS,
    cost_value: float = COST_PER_UNIT,
    operating_value: float = OPERATING_EXPENSE,
) -> str:
    units = forecast_units(start_units, growth_value)
    revenues = [round(u * price_value, 2) for u in units]
    cogs = [round(u * cost_value, 2) for u in units]
    gross_profit = [round(rev - cost, 2) for rev, cost in zip(revenues, cogs)]
    net_income = [round(gp - operating_value, 2) for gp in gross_profit]

    header = [{'value': 'Metric', 'type': 'str', 'style': 1}]
    for month in range(1, MONTHS + 1):
        header.append({'value': f'Month {month}', 'type': 'str', 'style': 1})
    rows = [header]

    def month_letter(col: int) -> str:
        # column 2 corresponds to B, etc.
        return chr(64 + col)

    # Units
    unit_row = [{'value': 'Units Sold', 'type': 'str'}]
    for idx in range(1, MONTHS + 1):
        col_letter = month_letter(idx + 1)
        if idx == 1:
            formula = f'={base_units_ref}'
        else:
            prev_col = month_letter(idx)
            formula = f'={prev_col}2*(1+{growth_ref})'
        unit_row.append({'formula': formula, 'result': units[idx-1]} if include_formulas else None)
    rows.append(unit_row)

    # Revenue
    revenue_row = [{'value': 'Revenue ($)', 'type': 'str'}]
    for idx in range(1, MONTHS + 1):
        col_letter = month_letter(idx + 1)
        formula = f'={col_letter}2*{price_ref}'
        revenue_row.append({'formula': formula, 'result': revenues[idx-1]} if include_formulas else None)
    rows.append(revenue_row)

    # COGS
    cogs_row = [{'value': 'Cost of Goods Sold ($)', 'type': 'str'}]
    for idx in range(1, MONTHS + 1):
        col_letter = month_letter(idx + 1)
        formula = f'={col_letter}2*{cost_ref}'
        cogs_row.append({'formula': formula, 'result': cogs[idx-1]} if include_formulas else None)
    rows.append(cogs_row)

    # Gross Profit
    gp_row = [{'value': 'Gross Profit ($)', 'type': 'str'}]
    for idx in range(1, MONTHS + 1):
        col = month_letter(idx + 1)
        formula = f'={col}3-{col}4'
        gp_row.append({'formula': formula, 'result': gross_profit[idx-1]} if include_formulas else None)
    rows.append(gp_row)

    # Operating Expenses
    op_row = [{'value': 'Operating Expenses ($)', 'type': 'str'}]
    for _ in range(1, MONTHS + 1):
        op_row.append({'formula': f'={operating_ref}', 'result': operating_value} if include_formulas else None)
    rows.append(op_row)

    # Net Income
    ni_row = [{'value': 'Net Income ($)', 'type': 'str'}]
    for idx in range(1, MONTHS + 1):
        col = month_letter(idx + 1)
        formula = f'={col}5-{col}6'
        ni_row.append({'formula': formula, 'result': net_income[idx-1]} if include_formulas else None)
    rows.append(ni_row)

    return build_sheet(rows)


def build_audit_sheet() -> str:
    rows = [
        [{'value': 'Audit View', 'type': 'str', 'style': 1}, None],
        [None, None],
        [{'value': 'Metric', 'type': 'str', 'style': 1}, {'value': 'Value', 'type': 'str', 'style': 1}],
        [{'value': 'Month 6 Units', 'type': 'str'}, {'formula': '=Model!G2'}],
        [{'value': 'Month 6 Revenue ($)', 'type': 'str'}, {'formula': '=Model!G3'}],
        [{'value': 'Month 6 Net Income ($)', 'type': 'str'}, {'formula': '=Model!G7'}],
        [None, None],
        [{'value': 'Cumulative Net Income ($)', 'type': 'str'}, {'formula': '=SUM(Model!B7:G7)'}],
    ]
    return build_sheet(rows)


def build_cash_loop_sheet(include_results: bool) -> str:
    # Solve ending cash with interest on ending balance: E = B3 + B4 + rate*E => E = (B3+B4)/(1-rate)
    rate = 0.02
    operating_cash = None  # placeholder; formula will reference Model sheet
    rows = [
        [{'value': 'Circular Cash Forecast', 'type': 'str', 'style': 1}, None],
        [None, None],
        [{'value': 'Beginning Cash ($)', 'type': 'str'}, {'value': 20000}],
        [{'value': 'Operating Cash Flow ($)', 'type': 'str'}, {'formula': '=SUM(Model!B7:G7)'}],
        [{'value': 'Interest Rate', 'type': 'str'}, {'value': rate}],
        [{'value': 'Interest Income ($)', 'type': 'str'}, {'value': 653.06 if include_results else None}],
        [{'value': 'Ending Cash ($)', 'type': 'str'}, {'value': 32653.06 if include_results else None}],
        [None, None],
        [{'value': 'Note:', 'type': 'str'}, {'value': 'Enable iterative calculation to compute interest on ending cash.' if include_results else None, 'type': 'str'}],
    ]
    return build_sheet(rows)

# Lesson 4
assumptions_l4_student = build_assumptions_sheet(include_scenarios=False)
assumptions_l4_teacher = build_assumptions_sheet(include_scenarios=False)
model_l4_student = build_model_sheet('Assumptions!B5', 'Assumptions!B4', 'Assumptions!B3', include_formulas=False, price_value=BASE_PRICE, growth_value=BASE_GROWTH)
model_l4_teacher = build_model_sheet('Assumptions!B5', 'Assumptions!B4', 'Assumptions!B3', include_formulas=True, price_value=BASE_PRICE, growth_value=BASE_GROWTH)

write_workbook_file(
    BASE_DIR,
    'unit08-lesson04-student.xlsx',
    [('Assumptions', assumptions_l4_student), ('Model', model_l4_student)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit08-lesson04-teacher.xlsx',
    [('Assumptions', assumptions_l4_teacher), ('Model', model_l4_teacher)],
    styles=BOLD_STYLES,
)

# Lesson 5 scenarios
assumptions_l5_student = build_assumptions_sheet(include_scenarios=True, selection=1, include_if_formulas=False)
assumptions_l5_teacher = build_assumptions_sheet(include_scenarios=True, selection=2, include_if_formulas=True)
model_l5_student = build_model_sheet('Assumptions!B17', 'Assumptions!B16', 'Assumptions!B3', include_formulas=True, price_value=BASE_PRICE, growth_value=BASE_GROWTH)
model_l5_teacher = build_model_sheet('Assumptions!B17', 'Assumptions!B16', 'Assumptions!B3', include_formulas=True, price_value=SCENARIOS[1][3], growth_value=SCENARIOS[1][2])

audit_sheet = build_audit_sheet()

write_workbook_file(
    BASE_DIR,
    'unit08-lesson05-student.xlsx',
    [('Assumptions', assumptions_l5_student), ('Model', model_l5_student)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit08-lesson05-teacher.xlsx',
    [('Assumptions', assumptions_l5_teacher), ('Model', model_l5_teacher)],
    styles=BOLD_STYLES,
)

# Lesson 6 auditing
write_workbook_file(
    BASE_DIR,
    'unit08-lesson06-student.xlsx',
    [('Assumptions', assumptions_l5_teacher), ('Model', model_l5_teacher), ('AuditPractice', audit_sheet)],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit08-lesson06-teacher.xlsx',
    [('Assumptions', assumptions_l5_teacher), ('Model', model_l5_teacher), ('AuditPractice', audit_sheet)],
    styles=BOLD_STYLES,
)

# Lesson 7 circular reference demo
cash_loop_student = build_cash_loop_sheet(include_results=False)
cash_loop_teacher = build_cash_loop_sheet(include_results=True)

write_workbook_file(
    BASE_DIR,
    'unit08-lesson07-student.xlsx',
    [
        ('Assumptions', assumptions_l5_teacher),
        ('Model', model_l5_teacher),
        ('AuditPractice', audit_sheet),
        ('CashLoop', cash_loop_student),
    ],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit08-lesson07-teacher.xlsx',
    [
        ('Assumptions', assumptions_l5_teacher),
        ('Model', model_l5_teacher),
        ('AuditPractice', audit_sheet),
        ('CashLoop', cash_loop_teacher),
    ],
    styles=BOLD_STYLES,
)
