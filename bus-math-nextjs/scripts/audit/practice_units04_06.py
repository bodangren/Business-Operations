#!/usr/bin/env python3
"""Recompute the 2026-10-09 baseline examples.

Stored values below are historical. Use practice-evidence.mjs and the regression
tests to check the repaired TypeScript components.
"""

from decimal import Decimal, ROUND_CEILING
from statistics import mean, median, pstdev, stdev


def money(value: float) -> str:
    return f"${value:,.2f}"


weekends = [480, 495, 510, 505, 490, 500, 515]
weekends_with_event = weekends + [2100]
traffic = [125, 143, 132, 156, 128, 147, 139]

transactions = [4.25, 2.75, 5.25, 12.95, 127.50, 3.50, 8.75, 0.05, 6.95, 2.25]
without_catering = [value for value in transactions if value != 127.50]

print("Historical baseline: 2026-10-09. Stored values are not current source values.")
print("Unit 04 Lesson 02")
print(f"  Weekends without event: mean {money(mean(weekends))}")
print(f"  Weekends with $2,100 event: mean {money(mean(weekends_with_event))}")
print(f"  Daily traffic: sum {sum(traffic)}, mean {mean(traffic):.4f}, median {median(traffic)}")

print("Unit 04 Lesson 03")
print(
    "  Transactions: sum {}, mean {}, population SD {}, sample SD {}".format(
        money(sum(transactions)),
        money(mean(transactions)),
        money(pstdev(transactions)),
        money(stdev(transactions)),
    )
)
print(
    "  Without catering order: mean {}, population SD {}, sample SD {}".format(
        money(mean(without_catering)),
        money(pstdev(without_catering)),
        money(stdev(without_catering)),
    )
)
displayed_mean = 17.42
displayed_sd = 38.47
for value in (127.50, 0.05):
    print(f"  z for ${value:.2f} using displayed mean/SD: {(value - displayed_mean) / displayed_sd:.4f}")

print("Unit 05 Lesson 02: source-transcribed classroom bracket schedule")
print("  Arithmetic only; this script does not execute the live TypeScript components.")
tax_cases = [
    # name, period wages, periods, hint base/threshold/rate, table base/threshold/rate, stored result
    ("Alex regular", 2140, 26, 1192.50, 11925, 0.12, 5578.50, 48475, 0.22, 318.45),
    ("Alex overtime", 2660, 26, 5578.50, 48475, 0.22, 5578.50, 48475, 0.22, 412.90),
    ("Maria HOH", 2480, 26, 1700.00, 17000, 0.12, 1700.00, 17000, 0.12, 286.20),
    ("Jordan MFJ", 3480, 26, 2385.00, 23850, 0.12, 2385.00, 23850, 0.12, 399.25),
]
for name, period_wages, periods, hint_base, hint_threshold, hint_rate, table_base, table_threshold, table_rate, stored in tax_cases:
    annual_wages = period_wages * periods
    hinted = (hint_base + (annual_wages - hint_threshold) * hint_rate) / periods
    classroom_table = (table_base + (annual_wages - table_threshold) * table_rate) / periods
    print(
        f"  {name}: annualized ${annual_wages:,.0f}; hinted formula {money(hinted)}; "
        f"displayed-table bracket {money(classroom_table)}; stored {money(stored)}"
    )

print("Unit 05 Lesson 04: sample payroll validation rows")
for hours, rate, stored_gross in ((45, 18.50, 832.50), (52, 16.75, 871.00)):
    regular = min(hours, 40)
    overtime = max(0, hours - 40)
    overtime_gross = regular * rate + overtime * rate * 1.5
    print(
        f"  {hours} hours at {money(rate)}/hour: overtime gross {money(overtime_gross)}; "
        f"stored gross {money(stored_gross)}"
    )

print("Unit 06 Lesson 05: Goal Seek")
fixed_costs, variable_cost, target_profit, volume = 12000, 880, 15000, 25
price = variable_cost + (fixed_costs + target_profit) / volume
claimed_price = 1388
claimed_profit = (claimed_price - variable_cost) * volume - fixed_costs
print(f"  Exact price for target: {money(price)}")
print(f"  Profit at baseline $1,388: {money(claimed_profit)}")

print("Unit 06 Lesson 04: generated comparison variants")
variants = [
    (5000, 200, 500, 15),
    (8000, 150, 400, 30),
    (10000, 300, 800, 20),
    (6000, 250, 600, 18),
]
for seed, (fixed, variable, current_price, current_volume) in enumerate(variants):
    target = 3000
    margin = current_price - variable
    premium_price = int(
        (Decimal(fixed + target) / Decimal(current_volume) + Decimal(variable)).to_integral_value(
            rounding=ROUND_CEILING
        )
    )
    volume_required = int(
        (Decimal(fixed + target) / Decimal(margin)).to_integral_value(rounding=ROUND_CEILING)
    )
    volume_option = volume_required + seed % 3
    premium_profit = (premium_price - variable) * current_volume - fixed
    volume_profit = margin * volume_option - fixed
    stored_answer = "premium" if seed % 2 == 0 else "volume"
    print(
        f"  seed {seed}: premium price {premium_price}, profit {premium_profit}; "
        f"volume {volume_option}, profit {volume_profit}; stored answer {stored_answer}"
    )
