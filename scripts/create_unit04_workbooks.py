from __future__ import annotations
from pathlib import Path

from excel_utils import build_sheet, write_workbook_file, BOLD_STYLES

BASE_DIR = Path('bus-math-nextjs/public/resources')
BASE_DIR.mkdir(parents=True, exist_ok=True)

# Base raw data with intentional issues (extra spaces, duplicates, inconsistent casing)
raw_sales_rows = [
    ['OrderID', 'Customer', 'Product', 'Day', 'SalesAmount'],
    ['ORD-101', 'Delilah Moore', 'Cold Brew', 'Monday', 185.50],
    ['ORD-102', ' martin perez', 'Bagel Box ', 'Tuesday', 142.75],
    ['ORD-103', 'Linh Tran', 'Cold Brew', 'Wednesday', 198.25],
    ['ORD-104', 'Riley Chen', 'Overnight Oats', 'Thursday', 156.80],
    ['ORD-105', 'Delilah Moore', 'Cold Brew', 'Monday', 185.50],  # duplicate order
    ['ORD-106', 'MARTIN PEREZ', 'Bagel Box', 'Tuesday', 142.75],  # casing difference
    ['ORD-107', 'Linh Tran  ', 'Energy Muffins', 'Wednesday', 167.20],
    ['ORD-108', 'Ava Singh', 'Protein Smoothie', 'Friday', 214.90],
    ['ORD-109', 'Riley Chen', 'Overnight Oats', 'Thursday', 156.80],  # duplicate amount/order
    ['ORD-110', 'Noah Patel', 'Energy Muffins', 'Saturday', 172.40],
    ['ORD-111', '  Ava Singh', 'Protein Smoothie', 'Friday', 214.90],  # leading spaces duplicate
]

def make_sheet_from_rows(rows):
    grid = []
    for r in rows:
        grid.append([
            {'value': value, 'type': 'str'} if isinstance(value, str) else {'value': value}
            for value in r
        ])
    return build_sheet(grid)

raw_sales_sheet = make_sheet_from_rows(raw_sales_rows)

# Cleaned data used from Lesson 5 onward
cleaned_sales_rows = [
    ['OrderID', 'Customer', 'Product', 'Day', 'SalesAmount'],
    ['ORD-101', 'Delilah Moore', 'Cold Brew', 'Monday', 185.50],
    ['ORD-102', 'Martin Perez', 'Bagel Box', 'Tuesday', 142.75],
    ['ORD-103', 'Linh Tran', 'Cold Brew', 'Wednesday', 198.25],
    ['ORD-104', 'Riley Chen', 'Overnight Oats', 'Thursday', 156.80],
    ['ORD-107', 'Linh Tran', 'Energy Muffins', 'Wednesday', 167.20],
    ['ORD-108', 'Ava Singh', 'Protein Smoothie', 'Friday', 214.90],
    ['ORD-110', 'Noah Patel', 'Energy Muffins', 'Saturday', 172.40],
]
cleaned_sales_sheet = make_sheet_from_rows(cleaned_sales_rows)

# Lesson 4: Cleaning Data
lesson4_student_sales_cleaned = build_sheet([
    [{'value': 'OrderID', 'type': 'str'}, {'value': 'Customer', 'type': 'str'}, {'value': 'Product', 'type': 'str'}, {'value': 'Day', 'type': 'str'}, {'value': 'SalesAmount', 'type': 'str'}]
])

write_workbook_file(
    BASE_DIR,
    'unit04-lesson04-student.xlsx',
    [
        ('SalesRaw', raw_sales_sheet),
        ('CleanedSales', lesson4_student_sales_cleaned),
    ],
    styles=BOLD_STYLES,
)

lesson4_teacher_cleaned = cleaned_sales_sheet

write_workbook_file(
    BASE_DIR,
    'unit04-lesson04-teacher.xlsx',
    [
        ('SalesRaw', raw_sales_sheet),
        ('CleanedSales', lesson4_teacher_cleaned),
    ],
    styles=BOLD_STYLES,
)

# Lesson 5: Descriptive statistics
summary_headers = [
    [{'value': 'Metric', 'type': 'str', 'style': 1}, {'value': 'Value', 'type': 'str', 'style': 1}],
    [{'value': 'Average Sales', 'type': 'str'}, {'formula': 'AVERAGE(CleanedSales!E:E)', 'result': 179.85}],
    [{'value': 'Median Sales', 'type': 'str'}, {'formula': 'MEDIAN(CleanedSales!E:E)', 'result': 172.40}],
    [{'value': 'Standard Deviation', 'type': 'str'}, {'formula': 'STDEV.S(CleanedSales!E:E)', 'result': 24.76}],
    [{'value': 'Total Transactions', 'type': 'str'}, {'formula': 'COUNTA(CleanedSales!A:A)', 'result': 8}],
]
summary_stats_teacher = build_sheet(summary_headers)
summary_stats_student = build_sheet([
    [{'value': 'Metric', 'type': 'str', 'style': 1}, {'value': 'Value', 'type': 'str', 'style': 1}],
    [{'value': 'Average Sales', 'type': 'str'}, None],
    [{'value': 'Median Sales', 'type': 'str'}, None],
    [{'value': 'Standard Deviation', 'type': 'str'}, None],
    [{'value': 'Total Transactions', 'type': 'str'}, None],
])

write_workbook_file(
    BASE_DIR,
    'unit04-lesson05-student.xlsx',
    [
        ('CleanedSales', cleaned_sales_sheet),
        ('SummaryStats', summary_stats_student),
    ],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit04-lesson05-teacher.xlsx',
    [
        ('CleanedSales', cleaned_sales_sheet),
        ('SummaryStats', summary_stats_teacher),
    ],
    styles=BOLD_STYLES,
)

# Lesson 6: Average sales by weekday for charting
weekday_rows = [
    [{'value': 'Day', 'type': 'str', 'style': 1}, {'value': 'Average Sales', 'type': 'str', 'style': 1}],
    [{'value': 'Monday', 'type': 'str'}, {'formula': 'AVERAGEIF(CleanedSales!D:D,"Monday",CleanedSales!E:E)', 'result': 185.5}],
    [{'value': 'Tuesday', 'type': 'str'}, {'formula': 'AVERAGEIF(CleanedSales!D:D,"Tuesday",CleanedSales!E:E)', 'result': 142.75}],
    [{'value': 'Wednesday', 'type': 'str'}, {'formula': 'AVERAGEIF(CleanedSales!D:D,"Wednesday",CleanedSales!E:E)', 'result': 182.725}],
    [{'value': 'Thursday', 'type': 'str'}, {'formula': 'AVERAGEIF(CleanedSales!D:D,"Thursday",CleanedSales!E:E)', 'result': 156.8}],
    [{'value': 'Friday', 'type': 'str'}, {'formula': 'AVERAGEIF(CleanedSales!D:D,"Friday",CleanedSales!E:E)', 'result': 214.9}],
    [{'value': 'Saturday', 'type': 'str'}, {'formula': 'AVERAGEIF(CleanedSales!D:D,"Saturday",CleanedSales!E:E)', 'result': 172.4}],
]
weekday_student = build_sheet([
    [{'value': 'Day', 'type': 'str', 'style': 1}, {'value': 'Average Sales', 'type': 'str', 'style': 1}],
    [{'value': 'Monday', 'type': 'str'}, None],
    [{'value': 'Tuesday', 'type': 'str'}, None],
    [{'value': 'Wednesday', 'type': 'str'}, None],
    [{'value': 'Thursday', 'type': 'str'}, None],
    [{'value': 'Friday', 'type': 'str'}, None],
    [{'value': 'Saturday', 'type': 'str'}, None],
])
weekday_teacher = build_sheet(weekday_rows)

write_workbook_file(
    BASE_DIR,
    'unit04-lesson06-student.xlsx',
    [
        ('CleanedSales', cleaned_sales_sheet),
        ('SummaryStats', summary_stats_teacher),
        ('DayAverages', weekday_student),
    ],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit04-lesson06-teacher.xlsx',
    [
        ('CleanedSales', cleaned_sales_sheet),
        ('SummaryStats', summary_stats_teacher),
        ('DayAverages', weekday_teacher),
    ],
    styles=BOLD_STYLES,
)

# Lesson 7: Forecasting
monthly_sales_grid = [
    [{'value': 'Month', 'type': 'str', 'style': 1}, {'value': 'Sales', 'type': 'str', 'style': 1}, {'value': 'Forecast', 'type': 'str', 'style': 1}],
    [{'value': 1}, {'value': 9600}, None],
    [{'value': 2}, {'value': 10020}, None],
    [{'value': 3}, {'value': 10450}, None],
    [{'value': 4}, {'value': 10980}, None],
    [{'value': 5}, {'value': 11520}, None],
    [{'value': 6}, {'value': 11950}, None],
    [{'value': 7}, None, None],
]
monthly_sales_student = build_sheet(monthly_sales_grid)
monthly_sales_teacher = build_sheet([
    [{'value': 'Month', 'type': 'str', 'style': 1}, {'value': 'Sales', 'type': 'str', 'style': 1}, {'value': 'Forecast', 'type': 'str', 'style': 1}],
    [{'value': 1}, {'value': 9600}, None],
    [{'value': 2}, {'value': 10020}, None],
    [{'value': 3}, {'value': 10450}, None],
    [{'value': 4}, {'value': 10980}, None],
    [{'value': 5}, {'value': 11520}, None],
    [{'value': 6}, {'value': 11950}, None],
    [{'value': 7}, None, {'formula': 'FORECAST.LINEAR(A8,B2:B7,A2:A7)', 'result': 12380.0}],
])

write_workbook_file(
    BASE_DIR,
    'unit04-lesson07-student.xlsx',
    [
        ('CleanedSales', cleaned_sales_sheet),
        ('DayAverages', weekday_teacher),
        ('MonthlySales', monthly_sales_student),
    ],
    styles=BOLD_STYLES,
)

write_workbook_file(
    BASE_DIR,
    'unit04-lesson07-teacher.xlsx',
    [
        ('CleanedSales', cleaned_sales_sheet),
        ('DayAverages', weekday_teacher),
        ('MonthlySales', monthly_sales_teacher),
    ],
    styles=BOLD_STYLES,
)
