"""Build the Unit 2 Lesson 5 and Lesson 6 Excel for the web workbooks."""

from __future__ import annotations

from copy import copy
from pathlib import Path

from openpyxl import Workbook
from openpyxl.formatting.rule import CellIsRule, FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.workbook.defined_name import DefinedName


ROOT = Path(__file__).resolve().parents[1]
RESOURCES = ROOT / "public" / "resources"

MONEY_FORMAT = '$#,##0.00;[Red]($#,##0.00);-'
THIN_GRAY = Side(style="thin", color="D1D5DB")
HEADER_FILL = PatternFill("solid", fgColor="1F4E78")
SUBHEADER_FILL = PatternFill("solid", fgColor="D9EAF7")
INPUT_FILL = PatternFill("solid", fgColor="FFF2CC")
FORMULA_FILL = PatternFill("solid", fgColor="F3F4F6")
PASS_FILL = PatternFill("solid", fgColor="E2F0D9")
WARNING_FILL = PatternFill("solid", fgColor="FCE8E6")

INPUTS = (
    ("Supplies used", "SuppliesUsed", 1_200, 5_500),
    ("Insurance expired", "InsuranceExpired", 300, 1_200),
    ("Depreciation expense", "DepreciationExpense", 400, 2_000),
    ("Wages accrued", "WagesAccrued", 1_800, 4_000),
    ("Revenue earned", "RevenueEarned", 1_200, 1_200),
)

ACCOUNTS = (
    ("Cash", 9_000, 0, None, None),
    ("Accounts Receivable", 4_000, 0, None, None),
    ("Supplies", 5_500, 0, None, "SuppliesUsed"),
    ("Prepaid Insurance", 1_200, 0, None, "InsuranceExpired"),
    ("Equipment", 32_000, 0, None, None),
    ("Accumulated Depreciation", 0, 0, None, "DepreciationExpense"),
    ("Accounts Payable", 0, 6_000, None, None),
    ("Wages Payable", 0, 0, None, "WagesAccrued"),
    ("Unearned Revenue", 0, 1_200, "RevenueEarned", None),
    ("Owner Capital", 0, 30_000, None, None),
    ("Service Revenue", 0, 14_500, None, "RevenueEarned"),
    ("Supplies Expense", 0, 0, "SuppliesUsed", None),
    ("Insurance Expense", 0, 0, "InsuranceExpired", None),
    ("Depreciation Expense", 0, 0, "DepreciationExpense", None),
    ("Wages Expense", 0, 0, "WagesAccrued", None),
)

SCENARIOS = (
    ("March", 1_200, 300, 400, 1_800, 1_200),
    ("April", 1_450, 300, 400, 2_100, 900),
    ("May", 1_000, 300, 400, 1_650, 1_100),
)


def style_row(ws, row: int, fill: PatternFill = HEADER_FILL) -> None:
    """Apply a header style to each used cell in one row."""
    for cell in ws[row]:
        if cell.value is None:
            continue
        cell.fill = copy(fill)
        cell.font = Font(color="FFFFFF" if fill == HEADER_FILL else "1F2937", bold=True)
        cell.alignment = Alignment(horizontal="center")
        cell.border = Border(bottom=THIN_GRAY)


def set_widths(ws, widths: dict[str, float]) -> None:
    """Set worksheet column widths from a column-to-width mapping."""
    for column, width in widths.items():
        ws.column_dimensions[column].width = width


def set_print_layout(ws) -> None:
    """Fit the used range to one landscape page width."""
    ws.page_setup.orientation = "landscape"
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.print_area = ws.calculate_dimension()
    ws.oddFooter.center.text = "Page &P of &N"


def add_defined_name(workbook: Workbook, name: str, reference: str) -> None:
    """Add one workbook-level defined name for an absolute cell reference."""
    workbook.defined_names.add(DefinedName(name, attr_text=reference))


def add_inputs_sheet(workbook: Workbook, scenario_links: bool) -> None:
    """Add the five adjustment inputs and visible validation checks."""
    ws = workbook.create_sheet("Inputs")
    ws.merge_cells("A1:D1")
    ws["A1"] = "TechStart Month-End Adjustment Inputs"
    ws["A2"] = "Enter or select the period amounts. Yellow cells are inputs."
    ws.append([])
    ws.append(["Input", "Amount", "Maximum", "Validation"])

    for index, (label, name, amount, maximum) in enumerate(INPUTS, start=5):
        ws.cell(index, 1, label)
        ws.cell(index, 2, amount)
        ws.cell(index, 3, maximum)
        ws.cell(index, 4, "")
        ws.cell(index, 2).fill = copy(INPUT_FILL)
        ws.cell(index, 2).font = Font(color="0070C0")
        for column in (2, 3):
            ws.cell(index, column).number_format = MONEY_FORMAT
        add_defined_name(workbook, name, f"'Inputs'!$B${index}")

    if scenario_links:
        for row in range(5, 10):
            scenario_column = row - 3
            ws.cell(row, 2).value = (
                f'=INDEX(Scenarios!${chr(64 + scenario_column)}$4:${chr(64 + scenario_column)}$6,'
                'MATCH(SelectedPeriod,Scenarios!$A$4:$A$6,0))'
            )
            ws.cell(row, 4).value = f'=IF(AND(B{row}>=0,B{row}<=C{row}),"OK","Review")'

        red_rule = FormulaRule(formula=['$D5="Review"'], fill=WARNING_FILL)
        ws.conditional_formatting.add("B5:D9", red_rule)

    ws.freeze_panes = "A5"
    ws.sheet_view.showGridLines = False
    style_row(ws, 1)
    style_row(ws, 4, SUBHEADER_FILL)
    set_widths(ws, {"A": 28, "B": 16, "C": 16, "D": 18})
    set_print_layout(ws)


def adjustment_rows() -> tuple[tuple[str, str | None, str | None], ...]:
    """Return the balanced debit and credit lines for all five adjustments."""
    return (
        ("Supplies Expense", "SuppliesUsed", None),
        ("Supplies", None, "SuppliesUsed"),
        ("Insurance Expense", "InsuranceExpired", None),
        ("Prepaid Insurance", None, "InsuranceExpired"),
        ("Depreciation Expense", "DepreciationExpense", None),
        ("Accumulated Depreciation", None, "DepreciationExpense"),
        ("Wages Expense", "WagesAccrued", None),
        ("Wages Payable", None, "WagesAccrued"),
        ("Unearned Revenue", "RevenueEarned", None),
        ("Service Revenue", None, "RevenueEarned"),
    )


def add_close_model_sheet(workbook: Workbook, completed: bool) -> None:
    """Add the adjustment journal and adjusted trial balance model."""
    ws = workbook.create_sheet("Close Model")
    ws.merge_cells("A1:G1")
    ws["A1"] = "TechStart Month-End Close Model"
    ws.append([])
    ws.append(["Adjustment Account", "Debit", "Credit"])

    for row, (account, debit_name, credit_name) in enumerate(adjustment_rows(), start=4):
        ws.cell(row, 1, account)
        if completed:
            ws.cell(row, 2, f"={debit_name}" if debit_name else 0)
            ws.cell(row, 3, f"={credit_name}" if credit_name else 0)
        for column in (2, 3):
            ws.cell(row, column).number_format = MONEY_FORMAT
            ws.cell(row, column).fill = copy(FORMULA_FILL)

    ws["A14"] = "Adjustment totals"
    ws["A15"] = "Adjustment difference"
    if completed:
        ws["B14"] = "=SUM(B4:B13)"
        ws["C14"] = "=SUM(C4:C13)"
        ws["B15"] = "=B14-C14"
    for cell in ("B14", "C14", "B15"):
        ws[cell].number_format = MONEY_FORMAT

    ws["A18"] = "Account"
    ws["B18"] = "Unadjusted Debit"
    ws["C18"] = "Unadjusted Credit"
    ws["D18"] = "Adjustment Debit"
    ws["E18"] = "Adjustment Credit"
    ws["F18"] = "Adjusted Debit"
    ws["G18"] = "Adjusted Credit"

    for row, (account, debit, credit, adjustment_debit, adjustment_credit) in enumerate(ACCOUNTS, start=19):
        ws.cell(row, 1, account)
        ws.cell(row, 2, debit)
        ws.cell(row, 3, credit)
        if completed:
            ws.cell(row, 4, f"={adjustment_debit}" if adjustment_debit else 0)
            ws.cell(row, 5, f"={adjustment_credit}" if adjustment_credit else 0)
            ws.cell(row, 6, f"=MAX((B{row}+D{row})-(C{row}+E{row}),0)")
            ws.cell(row, 7, f"=MAX((C{row}+E{row})-(B{row}+D{row}),0)")
        for column in range(2, 8):
            ws.cell(row, column).number_format = MONEY_FORMAT
            if column >= 4:
                ws.cell(row, column).fill = copy(FORMULA_FILL)

    ws["A34"] = "Adjusted trial balance totals"
    ws["A35"] = "Adjusted trial balance difference"
    if completed:
        ws["F34"] = "=SUM(F19:F33)"
        ws["G34"] = "=SUM(G19:G33)"
        ws["F35"] = "=F34-G34"
    for cell in ("F34", "G34", "F35"):
        ws[cell].number_format = MONEY_FORMAT

    ws.freeze_panes = "A19"
    ws.sheet_view.showGridLines = False
    style_row(ws, 1)
    style_row(ws, 3, SUBHEADER_FILL)
    style_row(ws, 18, SUBHEADER_FILL)
    set_widths(ws, {"A": 30, "B": 18, "C": 18, "D": 18, "E": 18, "F": 18, "G": 18})
    set_print_layout(ws)


def add_control_panel_sheet(workbook: Workbook, completed: bool, lesson_six: bool) -> None:
    """Add the visible control panel and status formulas."""
    ws = workbook.create_sheet("Control Panel")
    ws.merge_cells("A1:B1")
    ws["A1"] = "Month-End Close Control Panel"
    rows = (
        (3, "Selected period"),
        (4, "Total adjustment debits"),
        (5, "Total adjustment credits"),
        (6, "Adjustment difference"),
        (7, "Adjusted trial balance difference"),
        (8, "Failed validation checks"),
        (9, "CloseStatus"),
    )
    for row, label in rows:
        ws.cell(row, 1, label)

    ws["B3"] = "March"
    ws["B3"].fill = copy(INPUT_FILL)
    ws["B3"].font = Font(color="0070C0")
    add_defined_name(workbook, "SelectedPeriod", "'Control Panel'!$B$3")

    if completed:
        ws["B4"] = "='Close Model'!B14"
        ws["B5"] = "='Close Model'!C14"
        ws["B6"] = "='Close Model'!B15"
        ws["B7"] = "='Close Model'!F35"
        ws["B8"] = '=COUNTIF(Inputs!D5:D9,"Review")' if lesson_six else 0
        ws["B9"] = '=IF(AND(B6=0,B7=0,B8=0),"Complete","Review flagged items")'

    for row in range(4, 8):
        ws.cell(row, 2).number_format = MONEY_FORMAT
        ws.cell(row, 2).fill = copy(FORMULA_FILL)
    for row in (8, 9):
        ws.cell(row, 2).fill = copy(FORMULA_FILL)

    if lesson_six:
        validation = DataValidation(type="list", formula1='"March,April,May"', allow_blank=False)
        validation.promptTitle = "Select a period"
        validation.prompt = "Select March, April, or May."
        validation.errorTitle = "Invalid period"
        validation.error = "Select a period from the list."
        validation.errorStyle = "stop"
        validation.showErrorMessage = True
        validation.showInputMessage = True
        ws.add_data_validation(validation)
        validation.add(ws["B3"])

    ws.conditional_formatting.add("B9", CellIsRule(operator="equal", formula=['"Complete"'], fill=PASS_FILL))
    ws.conditional_formatting.add("B9", CellIsRule(operator="notEqual", formula=['"Complete"'], fill=WARNING_FILL))
    ws.sheet_view.showGridLines = False
    style_row(ws, 1)
    set_widths(ws, {"A": 36, "B": 24})
    set_print_layout(ws)


def add_scenarios_sheet(workbook: Workbook) -> None:
    """Add the period scenario table used by the Lesson 6 dropdown."""
    ws = workbook.create_sheet("Scenarios")
    ws.merge_cells("A1:F1")
    ws["A1"] = "Month-End Scenarios"
    ws["A2"] = "The selected period controls all five values on the Inputs sheet."
    ws.append([])
    ws.append(["Period", *[label for label, _, _, _ in INPUTS]])
    for values in SCENARIOS:
        ws.append(values)
    for row in range(5, 8):
        for column in range(2, 7):
            ws.cell(row, column).number_format = MONEY_FORMAT
    for column in range(2, 7):
        ws.cell(4, column).alignment = Alignment(wrap_text=True, horizontal="center")
        for row in range(5, 8):
            ws.cell(row, column).number_format = MONEY_FORMAT
    ws.sheet_view.showGridLines = False
    style_row(ws, 1)
    style_row(ws, 4, SUBHEADER_FILL)
    set_widths(ws, {"A": 16, "B": 18, "C": 18, "D": 22, "E": 18, "F": 18})
    set_print_layout(ws)


def save_workbook(workbook: Workbook, filename: str) -> None:
    """Set calculation options and save one workbook resource."""
    workbook.calculation.fullCalcOnLoad = True
    workbook.calculation.forceFullCalc = True
    workbook.calculation.calcMode = "auto"
    workbook.save(RESOURCES / filename)


def build_lesson_five(completed: bool, filename: str) -> None:
    """Build one Lesson 5 starter or teacher workbook."""
    workbook = Workbook()
    workbook.remove(workbook.active)
    add_inputs_sheet(workbook, scenario_links=False)
    add_close_model_sheet(workbook, completed=completed)
    add_control_panel_sheet(workbook, completed=completed, lesson_six=False)
    save_workbook(workbook, filename)


def build_lesson_six(completed: bool, filename: str) -> None:
    """Build one Lesson 6 starter or teacher workbook."""
    workbook = Workbook()
    workbook.remove(workbook.active)
    add_inputs_sheet(workbook, scenario_links=completed)
    add_close_model_sheet(workbook, completed=True)
    add_control_panel_sheet(workbook, completed=True, lesson_six=completed)
    add_scenarios_sheet(workbook)
    save_workbook(workbook, filename)


def main() -> None:
    """Build all four Unit 2 Excel for the web workbook resources."""
    build_lesson_five(False, "unit02-lesson05-student.xlsx")
    build_lesson_five(True, "unit02-lesson05-teacher.xlsx")
    build_lesson_six(False, "unit02-lesson06-student.xlsx")
    build_lesson_six(True, "unit02-lesson06-teacher.xlsx")
    print("Built four Unit 2 Excel for the web workbooks.")


if __name__ == "__main__":
    main()
