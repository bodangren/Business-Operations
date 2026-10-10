"""Recompute selected Unit 07 and Unit 08 practice examples from source inputs.

This script records the 2026-10-09 baseline. Stored source values are historical.
Use practice-evidence.mjs and the regression tests to check the repaired source. It does not test UI
behavior or read workbook files.
"""
from math import floor

# Unit 07 Lesson 02, CostAssignmentPractice scenario 1.
layers = [(12, 18), (15, 20), (10, 22)]
sold = 20
gafs = sum(units * cost for units, cost in layers)
cheapest = sorted(layers, key=lambda row: row[1])
priciest = sorted(layers, key=lambda row: row[1], reverse=True)

def assigned_cost(ordered_layers, units_sold):
    remaining = units_sold
    cost = 0
    for units, unit_cost in ordered_layers:
        used = min(remaining, units)
        cost += used * unit_cost
        remaining -= used
    assert remaining == 0
    return cost

cogs_min = assigned_cost(cheapest, sold)
cogs_max = assigned_cost(priciest, sold)
print("u07-l02 scenario1:", {
    "gafs_units": sum(units for units, _ in layers),
    "gafs_value": gafs,
    "feasible_cogs_range": (cogs_min, cogs_max),
    "feasible_ending_inventory_range": (gafs - cogs_max, gafs - cogs_min),
    "baseline_cogs_range": (sold * min(cost for _, cost in layers), sold * max(cost for _, cost in layers)),
})

# Unit 07 Lesson 03. Reproduce a legal Math.random draw pattern for the source
# generator: ending=20, 4 purchases, sold=25, base cost=30, and .99 for each
# non-final layer size, cost increment, and base-cost increment draw.
ending_units, units_sold, purchase_count, base_cost = 20, 25, 4, 30
total_units = ending_units + units_sold
units_assigned = 0
purchases = []
for i in range(purchase_count):
    if i == purchase_count - 1:
        units = total_units - units_assigned
    else:
        bound = min(30, total_units - units_assigned - (purchase_count - i - 1) * 5)
        units = floor(0.99 * bound) + 10
    cost = base_cost + (i * floor(0.99 * 5) + 3)
    purchases.append((units, cost))
    units_assigned += units
    base_cost += floor(0.99 * 4) + 2

def fifo_cost(rows, count):
    remaining = count
    total = 0
    for units, cost in rows:
        take = min(remaining, units)
        total += take * cost
        remaining -= take
        if remaining <= 0:
            break
    return total

def lifo_cost(rows, count):
    remaining = count
    total = 0
    for units, cost in reversed(rows):
        take = min(remaining, units)
        total += take * cost
        remaining -= take
        if remaining <= 0:
            break
    return total

print("u07-l03 generated case:", {
    "total_units": total_units,
    "purchases_units_cost": purchases,
    "units_sum": sum(units for units, _ in purchases),
    "fifo_cogs": fifo_cost(purchases, units_sold),
    "lifo_cogs": lifo_cost(purchases, units_sold),
})

# Unit 07 Lesson 04, WeightedAvgPractice sugar scenario.
sugar = [(200, 0.40), (500, 0.44), (300, 0.48)]
sugar_units = sum(units for units, _ in sugar)
sugar_cost = sum(units * cost for units, cost in sugar)
sugar_avg = round((sugar_cost / sugar_units) * 100) / 100
sugar_sold = 600
sugar_remaining = sugar_units - sugar_sold
sugar_cogs = sugar_sold * sugar_avg
sugar_ei = sugar_remaining * sugar_avg
print("u07-l04 sugar:", {
    "units": sugar_units,
    "gafs": sugar_cost,
    "exact_average": sugar_cost / sugar_units,
    "baseline_average": sugar_avg,
    "baseline_cogs": sugar_cogs,
    "baseline_ending_inventory": sugar_ei,
    "baseline_sum": sugar_cogs + sugar_ei,
})

# Unit 08 Lesson 03, a valid StraightLineMastery generated combination.
cost, salvage, life = 28000, 3000, 6
annual = round((cost - salvage) / life)
accumulated = annual * life
book_value = cost - accumulated
print("u08-l03 straight-line rounding case:", {
    "cost": cost,
    "salvage": salvage,
    "life": life,
    "baseline_annual_expense": annual,
    "baseline_final_accumulated_depreciation": accumulated,
    "baseline_final_book_value": book_value,
    "expected_final_book_value": salvage,
})

# Unit 08 Lesson 03, PartialYearDepreciationLab fixed example.
van_annual = (30000 - 5000) / 5
van_partial = van_annual * 9 / 12
laptop_annual = (12000 - 2000) / 4
laptop_partial = laptop_annual * 6 / 12
print("u08-l03 partial-year:", {
    "van_annual": van_annual,
    "van_partial": van_partial,
    "laptop_annual": laptop_annual,
    "laptop_partial": laptop_partial,
    "combined_depreciation": van_partial + laptop_partial,
    "van_ending_book_value": 30000 - van_partial,
})

# Unit 08 Lesson 04, DDBSalvageFloorLab fixed example.
ddb_values = [12000, 7200, 4320, 1480, 0]
print("u08-l04 DDB floor:", {
    "year4_raw": 6480 * 0.4,
    "year4_adjusted": 6480 - 5000,
    "year4_ending_book_value": 5000,
    "year5_expense_after_floor": ddb_values[4],
    "final_book_value": 5000,
})
