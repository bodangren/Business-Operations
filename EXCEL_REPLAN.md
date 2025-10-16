# Excel Curriculum Replanning

This document outlines a revised, simplified curriculum for the Excel-focused lessons in each unit. The goal is to break down complex topics into a sequence of 4 lessons, each focusing on 1-2 core skills that can be demonstrated by a teacher and practiced by students in approximately 30-35 minutes.

## Guiding Principles

1.  **One Concept at a Time:** Each lesson introduces only one or two new, closely related skills.
2.  **Repetition is Key:** Skills from earlier lessons are repeated and used in later lessons.
3.  **Data is Provided:** Students will work from pre-made templates with raw data. No time will be spent on manual data entry.
4.  **Build to a Goal:** The four lessons in each unit build upon each other to create a single, coherent final product.

---

## Unit 1: Smart Ledger Launch

**Core Accounting Goal:** Build a self-auditing ledger and trial balance.

### Lesson 4: Intro to Excel Tables
*   **Skills:**
    1.  Formatting a range as an Excel Table.
    2.  Using basic `SUM` formulas with structured references (e.g., `=SUM(Table1[Debit])`).
*   **Demo Data Structure:** A single sheet with a simple, unformatted list of 10-15 journal entries (Date, Account, Debit, Credit).
*   **Lesson Outcome:** Students will have a professionally formatted Excel Table. At the bottom, they will have cells that sum the total debits and total credits for the entire table.

### Lesson 5: Aggregating with `SUMIF`
*   **Skills:**
    1.  (Review) Excel Tables.
    2.  Writing a `SUMIF` formula to aggregate data based on a condition.
*   **Demo Data Structure:** Two sheets.
    1.  `Journal`: The completed table of transactions from the previous lesson.
    2.  `TrialBalance`: A list of unique account names with empty Debit and Credit columns.
*   **Lesson Outcome:** Students will have a `TrialBalance` sheet that uses `SUMIF` to automatically pull and sum the total debits and credits for each account from the `Journal` sheet.

### Lesson 6: Visual Error Checking
*   **Skills:**
    1.  (Review) `SUMIF` and Tables.
    2.  Applying Conditional Formatting to highlight cells based on a rule.
*   **Demo Data Structure:** The completed workbook from Lesson 5. We will add a "Check" column to the `TrialBalance` sheet.
*   **Lesson Outcome:** The `TrialBalance` sheet will have a "Check" column (`=Debit-Credit`). Conditional formatting will turn the cell green if the result is 0 and red if it is not, giving an instant visual cue for unbalanced entries.

### Lesson 7: Final Ledger Validation
*   **Skills:**
    1.  (Review) Conditional Formatting and `SUMIF`.
    2.  Using the `ABS` function for a final balance check.
*   **Demo Data Structure:** The completed workbook from Lesson 6.
*   **Lesson Outcome:** At the bottom of the `TrialBalance` sheet, students will build a final validation check. It will sum the total debits and credits for the whole trial balance and use the formula `=ABS(TotalDebits - TotalCredits)` to show the absolute difference. A label will clearly state if the ledger is balanced or not.

---

## Unit 2: Month-End Wizard

**Core Accounting Goal:** Understand and automate month-end adjustments like accruals, deferrals, and depreciation.

### Lesson 4: Organizing with Named Ranges
*   **Skills:**
    1.  Defining Named Ranges for key cells.
    2.  Using Named Ranges in simple formulas.
*   **Demo Data Structure:** A simple, one-sheet financial summary with labels like "Total Revenue," "Total Expenses," and "Net Income," each with a hard-coded value next to it.
*   **Lesson Outcome:** Students will have named key cells (e.g., `Total_Revenue`) and use those names in the `Net_Income` formula (e.g., `=Total_Revenue-Total_Expenses`).

### Lesson 5: Basic Adjusting Entries
*   **Skills:**
    1.  (Review) Using basic formulas (`SUM`, division).
    2.  Calculating a simple straight-line depreciation (`SLN` function).
*   **Demo Data Structure:** A sheet with a small list of fixed assets (e.g., "Company Van," "Laptop") with their cost, salvage value, and useful life.
*   **Lesson Outcome:** Students will create a simple depreciation schedule that calculates the annual depreciation for each asset using the `SLN` function.

### Lesson 6: Recording a Simple Macro
*   **Skills:**
    1.  Using the Macro Recorder to record a set of formatting steps.
    2.  Assigning a macro to a button.
*   **Demo Data Structure:** An unformatted block of data (e.g., a simple report with a title, headers, and numbers).
*   **Lesson Outcome:** Students will have a button on their worksheet that, when clicked, automatically applies a consistent set of formatting (e.g., bolding the title, adding borders to headers, formatting numbers as currency) to the data block.

### Lesson 7: Linking Adjustments to a Report
*   **Skills:**
    1.  (Review) Named Ranges.
    2.  Simple cell linking (`=`) across different worksheets.
*   **Demo Data Structure:** A two-sheet workbook.
    1.  `Adjustments`: The depreciation schedule from Lesson 5.
    2.  `Report`: A simple financial report that needs to include "Depreciation Expense."
*   **Lesson Outcome:** The "Depreciation Expense" line on the `Report` sheet will be dynamically linked to the total depreciation calculated on the `Adjustments` sheet, ensuring the report updates automatically.

---

## Unit 3: Three-Statement Storyboard

**Core Accounting Goal:** Construct and link the three core financial statements.

### Lesson 4: Building the Income Statement
*   **Skills:**
    1.  (Review) `SUMIF` or `SUMIFS`.
    2.  Grouping and subtotaling data.
*   **Demo Data Structure:** A sheet with a trial balance, including various revenue and expense accounts.
*   **Lesson Outcome:** A properly formatted Income Statement on a new sheet that pulls data from the trial balance to calculate Net Income.

### Lesson 5: Building the Balance Sheet
*   **Skills:**
    1.  (Review) Linking cells across sheets.
    2.  Ensuring the accounting equation (Assets = Liabilities + Equity) balances.
*   **Demo Data Structure:** The workbook from Lesson 4, plus the trial balance data for asset, liability, and equity accounts.
*   **Lesson Outcome:** A Balance Sheet that correctly categorizes accounts and links Net Income from the Income Statement to the Retained Earnings section in Equity. A check formula (`=TotalAssets - (TotalLiabilities + TotalEquity)`) will validate the balance.

### Lesson 6: Intro to `XLOOKUP`
*   **Skills:**
    1.  Using `XLOOKUP` to find and retrieve data from a list.
*   **Demo Data Structure:** A simple two-sheet workbook.
    1.  `Data`: A list of employee IDs, names, and hourly pay rates.
    2.  `Payroll`: A sheet where a user can type in an employee ID and have their name and pay rate appear automatically.
*   **Lesson Outcome:** A simple payroll lookup tool where entering an ID in one cell uses `XLOOKUP` to populate the employee's details in adjacent cells.

### Lesson 7: Linking the Cash Flow Statement
*   **Skills:**
    1.  (Review) Cross-sheet linking and basic formulas.
    2.  Understanding the logic of an indirect cash flow statement.
*   **Demo Data Structure:** The completed workbook with the Income Statement and Balance Sheet.
*   **Lesson Outcome:** A simplified, indirect-method Cash Flow Statement that starts with Net Income (linked from the Income Statement) and adjusts for changes in Balance Sheet accounts to arrive at the final cash balance.

---

## Unit 4: Data-Driven Café

**Core Accounting Goal:** Use statistical analysis to make data-driven business recommendations.

### Lesson 4: Cleaning Data
*   **Skills:**
    1.  Using the `TRIM` function to remove extra spaces.
    2.  Using "Remove Duplicates" to clean a dataset.
*   **Demo Data Structure:** A single sheet with a "dirty" list of sales data (e.g., extra spaces in product names, duplicate rows).
*   **Lesson Outcome:** Students will have a clean, unique list of sales transactions, ready for analysis.

### Lesson 5: Descriptive Statistics
*   **Skills:**
    1.  Using `AVERAGE`, `MEDIAN`, and `STDEV.S` functions.
*   **Demo Data Structure:** The cleaned dataset of sales transactions from the previous lesson.
*   **Lesson Outcome:** A summary table showing the mean, median, and standard deviation of sales data (e.g., average sale amount per transaction).

### Lesson 6: Visualizing Data with Charts
*   **Skills:**
    1.  (Review) Calculating averages.
    2.  Creating a simple Bar Chart or Line Chart.
*   **Demo Data Structure:** A summary table of data, such as average sales by day of the week.
*   **Lesson Outcome:** A professional-looking chart that visually represents the sales data, making it easy to spot trends (e.g., "Which day has the highest sales?").

### Lesson 7: Intro to Forecasting
*   **Skills:**
    1.  Using the `FORECAST.LINEAR` function.
*   **Demo Data Structure:** A simple, two-column list of historical data (e.g., `Month` and `Sales`).
*   **Lesson Outcome:** A simple forecasting model where students can input a future month number and get a predicted sales figure based on historical trends.

---

## Unit 5: PayDay Simulator

**Core Accounting Goal:** Calculate payroll, including various withholdings and taxes.

### Lesson 4: Gross Pay Calculator
*   **Skills:**
    1.  (Review) Basic multiplication and `SUM`.
    2.  Simple `IF` statement for overtime.
*   **Demo Data Structure:** A list of employees with their hourly rate. A space to input "Hours Worked."
*   **Lesson Outcome:** A calculator where inputting hours worked for an employee calculates their regular pay and overtime pay (for hours > 40), resulting in a final Gross Pay.

### Lesson 5: Using `XLOOKUP` for Tax Tables
*   **Skills:**
    1.  (Review) `XLOOKUP`.
    2.  Using `XLOOKUP` with an approximate match to find the correct tax bracket.
*   **Demo Data Structure:** A `Payroll` sheet and a `TaxTables` sheet. The tax table will have income brackets and corresponding tax rates.
*   **Lesson Outcome:** On the `Payroll` sheet, the Gross Pay will be used in an `XLOOKUP` formula to find the correct tax rate from the `TaxTables` sheet.

### Lesson 6: Net Pay Calculation
*   **Skills:**
    1.  (Review) Basic formulas.
    2.  Combining multiple formulas to create a multi-step calculation.
*   **Demo Data Structure:** The workbook from the previous lesson.
*   **Lesson Outcome:** A complete payroll calculator that starts with hours worked, calculates Gross Pay, finds the tax rate, computes the tax amount, and subtracts it to find the final Net Pay.

### Lesson 7: Data Validation
*   **Skills:**
    1.  Using Data Validation to create a dropdown list.
    2.  Using Data Validation to restrict input (e.g., only allow positive numbers).
*   **Demo Data Structure:** The payroll calculator from the previous lesson.
*   **Lesson Outcome:** The "Employee" field will be a dropdown list of names. The "Hours Worked" field will only accept numbers between 0 and 80, preventing data entry errors.

---

## Unit 6: PriceLab Challenge

**Core Accounting Goal:** Perform Cost-Volume-Profit (CVP) analysis to inform pricing strategy.

### Lesson 4: CVP Model Setup
*   **Skills:**
    1.  (Review) Basic formulas.
    2.  Structuring a CVP model with clear inputs (Price, Variable Cost, Fixed Cost).
*   **Demo Data Structure:** A blank sheet. The demo will involve creating labels and input cells for Price, Variable Cost per Unit, and Total Fixed Costs.
*   **Lesson Outcome:** A simple, clean CVP model that calculates Contribution Margin and Break-Even Point in units.

### Lesson 5: "What-If" with Goal Seek
*   **Skills:**
    1.  (Review) CVP model structure.
    2.  Using the "Goal Seek" tool.
*   **Demo Data Structure:** The CVP model from the previous lesson.
*   **Lesson Outcome:** Students will use Goal Seek to answer questions like, "What price do I need to charge to achieve a target profit of $10,000?"

### Lesson 6: One-Variable Data Table
*   **Skills:**
    1.  (Review) CVP model structure.
    2.  Creating a one-variable Data Table.
*   **Demo Data Structure:** The CVP model from Lesson 4.
*   **Lesson Outcome:** A table that automatically shows how "Net Profit" changes as the "Number of Units Sold" changes, allowing for quick scenario comparison.

### Lesson 7: Two-Variable Data Table
*   **Skills:**
    1.  (Review) Data Tables.
    2.  Creating a two-variable Data Table.
*   **Demo Data Structure:** The CVP model from Lesson 4.
*   **Lesson Outcome:** A matrix that shows how "Net Profit" changes as both "Price" and "Units Sold" change simultaneously, providing a comprehensive view of risk and opportunity.

---

## Unit 7: Asset & Inventory Tracker

**Core Accounting Goal:** Model depreciation and inventory valuation methods (FIFO/LIFO).

### Lesson 4: SLN and DDB Depreciation
*   **Skills:**
    1.  Using the `SLN` (Straight-Line) depreciation function.
    2.  Using the `DDB` (Double-Declining Balance) depreciation function.
*   **Demo Data Structure:** A list of fixed assets with their cost, salvage value, and useful life.
*   **Lesson Outcome:** A depreciation schedule showing the annual depreciation expense for each asset calculated using both the SLN and DDB methods side-by-side.

### Lesson 5: FIFO Inventory Method
*   **Skills:**
    1.  (Review) Basic formulas (`SUM`, multiplication).
    2.  Applying the FIFO (First-In, First-Out) logic.
*   **Demo Data Structure:** A list of inventory purchases (Date, Units, Cost per Unit) and a record of units sold.
*   **Lesson Outcome:** A table that calculates the Cost of Goods Sold (COGS) and the value of Ending Inventory using the FIFO method.

### Lesson 6: LIFO Inventory Method
*   **Skills:**
    1.  (Review) FIFO logic.
    2.  Applying the LIFO (Last-In, First-Out) logic.
*   **Demo Data Structure:** The same inventory data from the previous lesson.
*   **Lesson Outcome:** A table that calculates COGS and Ending Inventory using the LIFO method, allowing for a direct comparison with the FIFO results.

### Lesson 7: Dynamic Method Selection with `IF`
*   **Skills:**
    1.  (Review) `SLN` and `DDB` functions.
    2.  Using an `IF` statement to switch between two calculations.
*   **Demo Data Structure:** The depreciation schedule from Lesson 4. An input cell will be created for "Method Selection."
*   **Lesson Outcome:** A dynamic depreciation schedule. If a user types "SLN" in the method cell, the schedule calculates using `SLN`. If they type "DDB," it automatically switches to the `DDB` calculation.

---

## Unit 8: Year-1 Startup Model

**Core Accounting Goal:** Build an integrated 3-statement financial model for a startup.

### Lesson 4: Model Assumptions & Drivers
*   **Skills:**
    1.  (Review) Structuring a model with clear inputs.
    2.  Linking assumption cells to the main model.
*   **Demo Data Structure:** A two-sheet workbook.
    1.  `Assumptions`: A clean input sheet for key business drivers (e.g., Monthly Growth Rate, Price per Unit, Cost per Unit).
    2.  `Model`: A monthly forecast (e.g., an Income Statement).
*   **Lesson Outcome:** A financial model where the calculations are driven by the input cells on the `Assumptions` sheet. Changing the "Growth Rate" on the assumptions sheet will automatically update the entire forecast.

### Lesson 5: Scenario Building with `IF`
*   **Skills:**
    1.  (Review) `IF` statements.
    2.  Creating "Best Case," "Base Case," and "Worst Case" scenarios.
*   **Demo Data Structure:** The model from the previous lesson. We will add a single input cell for "Scenario Selection" (e.g., a user can type 1, 2, or 3).
*   **Lesson Outcome:** The model's key drivers (like growth rate) will be driven by an `IF` statement that looks at the scenario selection cell, allowing the entire forecast to toggle between different scenarios.

### Lesson 6: Auditing Formulas
*   **Skills:**
    1.  Using the "Trace Precedents" tool to understand formula dependencies.
    2.  Using the "Trace Dependents" tool to see what a cell affects.
*   **Demo Data Structure:** A complex, pre-built financial model with many linked cells.
*   **Lesson Outcome:** Students will be able to click on a key output cell (like Net Income) and visually trace all the input cells that feed into it, helping them understand and debug complex models.

### Lesson 7: Circular Reference and Iterative Calculations
*   **Skills:**
    1.  Understanding and resolving a simple circular reference.
    2.  Enabling iterative calculations to model concepts like interest on a changing cash balance.
*   **Demo Data Structure:** A simplified model where `Interest Income` is calculated based on the `Cash Balance`, but the `Cash Balance` itself depends on `Net Income` (which includes interest income).
*   **Lesson Outcome:** Students will learn how to identify a circular reference, why it occurs in financial modeling, and how to enable iterative calculations in Excel to solve it correctly.
