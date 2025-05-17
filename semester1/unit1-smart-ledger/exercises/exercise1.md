---
title: "Building a Basic Self-Auditing Ledger"
unit: 1
semester: 1
week: 1
type: "exercise"
difficulty: "medium"
estimated_time: "45 minutes"
skills:
  - "Excel Tables"
  - "SUMIF function"
  - "Trial balance"
related_concepts:
  - "Accounting Equation"
  - "Double-Entry Bookkeeping"
---

# Exercise 1: Building a Basic Self-Auditing Ledger

## Instructions

In this exercise, you will create a basic self-auditing ledger in Excel that includes automatic checks to ensure your financial records are accurate and balanced. You will record several transactions, implement SUMIF formulas to total debits and credits by account, and create a trial balance to verify your ledger is balanced.

## Scenario

You are the financial advisor for a new food truck business called "Bytes & Bites" that specializes in tech-themed food items. The owner, a former software developer, has invested $15,000 to start the business and has asked you to set up a proper accounting system that will help attract future investors.

## Tasks

1. Create a new Excel workbook and set up a ledger with the following columns:
   - Date
   - Transaction Description
   - Account
   - Debit
   - Credit
   - Running Balance

2. Format the ledger as an Excel Table with appropriate headers and formatting.

3. Create a list of accounts with the following categories:
   - Assets: Cash, Accounts Receivable, Inventory, Equipment
   - Liabilities: Accounts Payable, Loans Payable
   - Equity: Owner's Equity, Revenue, Expenses

4. Record the following transactions in your ledger:
   - Jan 1: Owner invests $15,000 cash in the business
   - Jan 5: Purchase food truck for $10,000 cash
   - Jan 8: Purchase inventory (food supplies) for $2,000 cash
   - Jan 10: Purchase cooking equipment for $1,500 on account
   - Jan 15: Pay $500 toward the equipment purchased on account
   - Jan 20: Sales for the week total $3,000 cash
   - Jan 22: Purchase additional inventory for $1,000 on account
   - Jan 25: Pay $800 for employee wages
   - Jan 28: Sales for the week total $3,500 cash
   - Jan 30: Pay $500 toward the inventory purchased on account

5. Implement SUMIF formulas to calculate the total debits and credits for each account.

6. Create a trial balance section that lists all accounts with their debit or credit balances.

7. Implement a check formula that verifies total debits equal total credits.

8. Add conditional formatting to highlight any transaction where debits don't equal credits.

## Requirements

- Your ledger must be formatted as an Excel Table
- Each transaction must affect at least two accounts (double-entry)
- The accounting equation (A = L + E) must remain in balance
- SUMIF formulas must correctly calculate totals for each account
- The trial balance must show that total debits equal total credits
- The check formula must accurately identify whether the ledger is balanced
- Conditional formatting must highlight any unbalanced transactions

## Hints

::: hint
For the Owner's investment transaction on Jan 1, you would debit Cash (asset) and credit Owner's Equity. Remember that debits increase assets, while credits increase liabilities and equity.
:::

::: hint
When recording sales, you would debit Cash (asset) and credit Revenue (increases equity). For expenses like wages, you would debit Expenses (decreases equity) and credit Cash.
:::

::: hint
To create a SUMIF formula to total all debits for the Cash account, use: `=SUMIF(AccountColumn,"Cash",DebitColumn)`
:::

::: hint
For your trial balance check formula, use: `=IF(ABS(SUM(DebitColumn)-SUM(CreditColumn))=0,"BALANCED","ERROR")`
:::

## Submission

Submit your completed Excel workbook. Your file should be named "YourName_Exercise1_SelfAuditingLedger.xlsx".

## Rubric

| Criteria | Excellent | Satisfactory | Needs Improvement |
|----------|-----------|--------------|-------------------|
| **Ledger Structure** | Excel Table is properly formatted with all required columns; accounts are well-organized | Basic Excel Table with required columns; adequate organization of accounts | Incomplete table structure; poor organization of accounts |
| **Transaction Accuracy** | All 10 transactions are correctly recorded with proper debits and credits | Most transactions are correctly recorded with minor errors | Several transactions have major errors in debits and credits |
| **SUMIF Implementation** | SUMIF formulas correctly calculate totals for all accounts | SUMIF formulas work for most accounts with minor issues | SUMIF formulas have significant errors or are missing |
| **Trial Balance** | Trial balance is complete and correctly balanced | Trial balance has minor errors but concept is understood | Trial balance has major errors or is missing |
| **Self-Auditing Features** | Check formula and conditional formatting work perfectly to identify errors | Basic check formula and conditional formatting implemented with minor issues | Self-auditing features are incomplete or non-functional |