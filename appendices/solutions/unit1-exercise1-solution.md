---
title: "Solution: Building a Basic Self-Auditing Ledger"
unit: 1
semester: 1
type: "solution"
related_exercise: "semester1/unit1-smart-ledger/exercises/exercise1.md"
---

# Solution: Building a Basic Self-Auditing Ledger

This document provides a detailed solution for Exercise 1: Building a Basic Self-Auditing Ledger from Unit 1: Smart Ledger Launch.

## Excel Setup

### Ledger Structure

Create a new Excel workbook with a sheet named "Ledger" and set up the following columns:
- Date
- Transaction Description
- Account
- Debit
- Credit
- Running Balance

Format this range as an Excel Table (Insert > Table) with appropriate headers and formatting.

### Account List

Create a separate section or sheet with the following account categories:

**Assets:**
- Cash
- Accounts Receivable
- Inventory
- Equipment

**Liabilities:**
- Accounts Payable
- Loans Payable

**Equity:**
- Owner's Equity
- Revenue
- Expenses

## Transaction Entries

Here are the correct journal entries for each transaction:

### 1. Jan 1: Owner invests $15,000 cash in the business

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 1 | Owner investment | Cash | $15,000 | |
| Jan 1 | Owner investment | Owner's Equity | | $15,000 |

**Explanation:** When an owner invests in a business, the business receives cash (an asset, which increases with a debit) and the owner's equity increases (with a credit).

### 2. Jan 5: Purchase food truck for $10,000 cash

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 5 | Purchase food truck | Equipment | $10,000 | |
| Jan 5 | Purchase food truck | Cash | | $10,000 |

**Explanation:** When purchasing equipment with cash, one asset (Equipment) increases with a debit, while another asset (Cash) decreases with a credit.

### 3. Jan 8: Purchase inventory (food supplies) for $2,000 cash

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 8 | Purchase inventory | Inventory | $2,000 | |
| Jan 8 | Purchase inventory | Cash | | $2,000 |

**Explanation:** When purchasing inventory with cash, one asset (Inventory) increases with a debit, while another asset (Cash) decreases with a credit.

### 4. Jan 10: Purchase cooking equipment for $1,500 on account

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 10 | Purchase equipment on account | Equipment | $1,500 | |
| Jan 10 | Purchase equipment on account | Accounts Payable | | $1,500 |

**Explanation:** When purchasing equipment on account, an asset (Equipment) increases with a debit, and a liability (Accounts Payable) increases with a credit.

### 5. Jan 15: Pay $500 toward the equipment purchased on account

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 15 | Partial payment for equipment | Accounts Payable | $500 | |
| Jan 15 | Partial payment for equipment | Cash | | $500 |

**Explanation:** When paying a liability, the liability (Accounts Payable) decreases with a debit, and an asset (Cash) decreases with a credit.

### 6. Jan 20: Sales for the week total $3,000 cash

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 20 | Weekly sales | Cash | $3,000 | |
| Jan 20 | Weekly sales | Revenue | | $3,000 |

**Explanation:** When recording sales, an asset (Cash) increases with a debit, and equity (Revenue) increases with a credit.

### 7. Jan 22: Purchase additional inventory for $1,000 on account

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 22 | Purchase inventory on account | Inventory | $1,000 | |
| Jan 22 | Purchase inventory on account | Accounts Payable | | $1,000 |

**Explanation:** When purchasing inventory on account, an asset (Inventory) increases with a debit, and a liability (Accounts Payable) increases with a credit.

### 8. Jan 25: Pay $800 for employee wages

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 25 | Employee wages | Expenses | $800 | |
| Jan 25 | Employee wages | Cash | | $800 |

**Explanation:** When paying wages, an expense (which decreases equity) increases with a debit, and an asset (Cash) decreases with a credit.

### 9. Jan 28: Sales for the week total $3,500 cash

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 28 | Weekly sales | Cash | $3,500 | |
| Jan 28 | Weekly sales | Revenue | | $3,500 |

**Explanation:** When recording sales, an asset (Cash) increases with a debit, and equity (Revenue) increases with a credit.

### 10. Jan 30: Pay $500 toward the inventory purchased on account

| Date | Transaction Description | Account | Debit | Credit |
|------|-------------------------|---------|-------|--------|
| Jan 30 | Partial payment for inventory | Accounts Payable | $500 | |
| Jan 30 | Partial payment for inventory | Cash | | $500 |

**Explanation:** When paying a liability, the liability (Accounts Payable) decreases with a debit, and an asset (Cash) decreases with a credit.

## SUMIF Formulas

To calculate the total debits and credits for each account, use SUMIF formulas. Assuming your Excel Table is named "LedgerTable":

```excel
=SUMIF(LedgerTable[Account],"Cash",LedgerTable[Debit])
```

This formula calculates the total debits for the Cash account. Repeat for each account and for both debits and credits.

## Trial Balance

Create a trial balance section with the following structure:

| Account | Debit | Credit |
|---------|-------|--------|
| Cash | =SUMIF(LedgerTable[Account],"Cash",LedgerTable[Debit])-SUMIF(LedgerTable[Account],"Cash",LedgerTable[Credit]) | |
| Accounts Receivable | =SUMIF(LedgerTable[Account],"Accounts Receivable",LedgerTable[Debit])-SUMIF(LedgerTable[Account],"Accounts Receivable",LedgerTable[Credit]) | |
| Inventory | =SUMIF(LedgerTable[Account],"Inventory",LedgerTable[Debit])-SUMIF(LedgerTable[Account],"Inventory",LedgerTable[Credit]) | |
| Equipment | =SUMIF(LedgerTable[Account],"Equipment",LedgerTable[Debit])-SUMIF(LedgerTable[Account],"Equipment",LedgerTable[Credit]) | |
| Accounts Payable | | =SUMIF(LedgerTable[Account],"Accounts Payable",LedgerTable[Credit])-SUMIF(LedgerTable[Account],"Accounts Payable",LedgerTable[Debit]) |
| Loans Payable | | =SUMIF(LedgerTable[Account],"Loans Payable",LedgerTable[Credit])-SUMIF(LedgerTable[Account],"Loans Payable",LedgerTable[Debit]) |
| Owner's Equity | | =SUMIF(LedgerTable[Account],"Owner's Equity",LedgerTable[Credit])-SUMIF(LedgerTable[Account],"Owner's Equity",LedgerTable[Debit]) |
| Revenue | | =SUMIF(LedgerTable[Account],"Revenue",LedgerTable[Credit])-SUMIF(LedgerTable[Account],"Revenue",LedgerTable[Debit]) |
| Expenses | =SUMIF(LedgerTable[Account],"Expenses",LedgerTable[Debit])-SUMIF(LedgerTable[Account],"Expenses",LedgerTable[Credit]) | |
| **Total** | =SUM(DebitColumn) | =SUM(CreditColumn) |

Note: Place positive balances in their natural balance column (debit for assets and expenses, credit for liabilities, equity, and revenue).

## Check Formula

To verify that total debits equal total credits, use this formula:

```excel
=IF(ABS(SUM(DebitColumn)-SUM(CreditColumn))=0,"BALANCED","ERROR")
```

## Conditional Formatting

### 1. Highlight Unbalanced Transactions

Select the range containing both debit and credit columns, then create a conditional formatting rule:

- Select "Use a formula to determine which cells to format"
- Enter the formula: `=ABS(DebitCell-CreditCell)>0`
- Choose a red fill format

### 2. Highlight Negative Account Balances

In your trial balance, create a conditional formatting rule for the debit column:

- Select "Use a formula to determine which cells to format"
- Enter the formula: `=AND(A1<>"Total",B1<0)`
- Choose a red fill format

Repeat for the credit column with a similar formula.

### 3. Highlight Missing Account Names

In your ledger table, create a conditional formatting rule for the account column:

- Select "Use a formula to determine which cells to format"
- Enter the formula: `=AND(ROW()>HeaderRow,ISBLANK(AccountCell))`
- Choose a red fill format

## Final Account Balances

After recording all transactions, the account balances should be:

| Account | Balance |
|---------|---------|
| Cash | $4,700 (debit) |
| Accounts Receivable | $0 |
| Inventory | $3,000 (debit) |
| Equipment | $11,500 (debit) |
| Accounts Payable | $1,500 (credit) |
| Loans Payable | $0 |
| Owner's Equity | $15,000 (credit) |
| Revenue | $6,500 (credit) |
| Expenses | $800 (debit) |

## Accounting Equation Verification

Assets = Liabilities + Equity

$4,700 (Cash) + $3,000 (Inventory) + $11,500 (Equipment) = $1,500 (Accounts Payable) + $15,000 (Owner's Equity) + $6,500 (Revenue) - $800 (Expenses)

$19,200 = $1,500 + $15,000 + $6,500 - $800

$19,200 = $19,200 ✓

## Common Mistakes and Troubleshooting

1. **Reversed Debits and Credits**: Remember that assets and expenses increase with debits, while liabilities, equity, and revenue increase with credits.

2. **Unbalanced Transactions**: Each transaction must have equal debits and credits. If your trial balance doesn't balance, check each transaction individually.

3. **SUMIF Formula Errors**: Ensure you're using the correct column references in your SUMIF formulas. The first parameter should be the account column, the second parameter should be the account name, and the third parameter should be the debit or credit column.

4. **Conditional Formatting Not Working**: Check that your formulas reference the correct cells and that you've applied the formatting to the appropriate range.

5. **Running Balance Calculation**: If you're calculating running balances for each account, ensure you're using the correct formula based on the account type.