---
title: "Smart Ledger Launch"
unit: 1
semester: 1
week: 1-2
type: "unit"
learning_objectives:
  - "Apply the accounting equation (Assets = Liabilities + Equity)"
  - "Record debits and credits for common transactions"
  - "Generate and interpret a trial balance"
excel_skills:
  - "Create Excel Tables and structured references"
  - "Use SUMIF to aggregate debits/credits"
  - "Build conditional-format rules ('red flags')"
  - "Implement basic error-check formulas"
prerequisites:
  - "Basic Excel familiarity"
related_units:
  - "unit2-month-end-wizard"
---

# Unit 1: Smart Ledger Launch

## Driving Question

> How can we design a self-auditing ledger that would convince a potential angel investor we keep "clean books" from day 1?

## Overview

In this two-week unit, students will learn to create a self-auditing ledger in Excel that automatically checks for errors and ensures financial records are accurate and reliable. This foundational skill is critical for any business seeking investor confidence. Students will apply the accounting equation, record transactions using debits and credits, and implement Excel formulas to automate ledger calculations and error checking.

## Entry Event (Day 1)

- Zoom Q&A with a local start-up founder about early bookkeeping challenges
- Founder shares three anonymized CSV "transaction dumps"

## Learning Objectives

### Content (Accounting)

1. Apply the accounting equation (Assets = Liabilities + Equity)
2. Record debits and credits for common transactions
3. Generate and interpret a trial balance

### Skills (Excel)

- Create Excel Tables and structured references
- Use SUMIF to aggregate debits/credits
- Build conditional-format rules ("red flags")
- Implement basic error-check formulas

## Weekly Schedule

### Week 1: Building the Prototype Ledger

| Day | Focus | Activities | Resources | Milestone |
|----:|-------|------------|-----------|-----------|
| 1 | **Launch & Explore** | • Entry Event: Founder's talk & dataset reveal<br>• Form teams; select a start-up (food truck, e-commerce, tutoring) or pitch your own | • Transaction CSVs<br>• "Choosing Your Venture" handout | — |
| 2 | **Accounting Equation & Excel Tables** | • Mini-lesson: Accounting equation & T-accounts<br>• Demo: Convert raw CSV to Excel Table<br>• Hands-on: Format table, add headers | • Sample ledger template (Excel) | — |
| 3 | **Journal Entries Practice** | • Guided practice: Record 10 sample transactions<br>• Peer-quiz: Exchange ledgers & identify errors | • Journal-entry worksheet | Milestone ①: Prototype ledger with 10 transactions |
| 4 | **SUMIF & Auto-Totals** | • Teach: SUMIF to total debits/credits by account<br>• Lab: Implement SUMIF in your ledger; test on sample data | • SUMIF formula cheat-sheet | — |
| 5 | **Sprint Retrospective** | • Team reflection: What worked? What blocked you?<br>• Teacher & peer feedback on prototype | • Retrospective protocol sheet | — |

### Week 2: Adding Self-Audit & Pitch Prep

| Day | Focus | Activities | Resources | Milestone |
|----:|-------|------------|-----------|-----------|
| 6 | **Conditional-Format "Red Flags"** | • Demo: Highlight negative balances, missing entries<br>• Lab: Build three "red-flag" rules (e.g., debit ≠ credit) | • Conditional formatting guide | Milestone ②: Integrated "red-flag" rules |
| 7 | **Trial-Balance Auto-Check** | • Teach: Trial balance logic; write check formula (`ABS(sum_debits–sum_credits)=0`)<br>• Lab & test on full dataset | • Trial-balance formula snippet | Milestone ③: Trial balance auto-check passes 100% |
| 8 | **Pitch Workshop** | • Structure: 4-min pitch + live demo<br>• Students storyboard key points; rehearse in teams | • Pitch storyboard template | — |
| 9 | **Panel Rehearsal & Revision** | • Mock panel (peers + teacher) Q&A<br>• Revise workbook & slide deck based on feedback | • Peer-feedback form | — |
| 10 | **Public Presentation** | • 4-min pitch video + live demo to PTA panel<br>• Collect panel feedback for final reflection | • Recording setup guide | Final deliverable |

## Key Concepts

::: key-concept
**The Accounting Equation**: Assets = Liabilities + Equity. This fundamental equation must always be in balance and forms the foundation of double-entry bookkeeping.
:::

::: key-concept
**Double-Entry Accounting**: Every transaction affects at least two accounts. The sum of debits must equal the sum of credits for each transaction.
:::

::: key-concept
**Trial Balance**: A list of all accounts with their debit or credit balances to verify that total debits equal total credits, confirming the ledger is in balance.
:::

::: key-concept
**Self-Auditing Ledger**: A financial record-keeping system with built-in checks and balances that automatically identifies errors and inconsistencies.
:::

## Student Voice & Choice

- **Venture selection:** Choose from provided startups or propose your own
- **Role allocation:** Financial modeler, UX/documentation lead, data auditor
- **Presentation style:** Slide deck, live demo, or screencast format

## Reflection & Revision

- **After Milestone ① (Day 5):** Sprint retrospective using "Start–Stop–Continue" protocol
- **After mock panel (Day 9):** Revision plan with teacher checkpoint

## Assessment Evidence & Rubric

| Criteria | Weight | Exemplar Indicators |
|----------|:------:|---------------------|
| **Accuracy** | 45% | All transactions correctly posted; balances reconcile |
| **Functionality** | 25% | SUMIF and trial-balance checks work on full dataset |
| **User Documentation** | 15% | Clear instructions, comments, and labeled sections |
| **Pitch Clarity & Persuasion** | 15% | Engaging narrative; addresses investor concerns |

## Resources & Templates

- **Excel Starter Workbook:** Pre-built Table, sample transactions, formula placeholders
- **Cheat-Sheets:** SUMIF, conditional formatting, trial-balance formula
- **Feedback Forms:** Peer-review and panel-review rubrics
- **Pitch Storyboard Template**

## Differentiation & Supports

- **Scaffolded formulas:** Provide partial SUMIF syntax for students needing support
- **Extension:** Challenge advanced students to build dynamic dropdowns for account selection
- **Peer Tutoring:** Pair students strong in Excel with those needing extra help

## Public Product & Audience

- **Deliverable:** 4-minute video pitch + live Excel workbook demo
- **Audience:** PTA members with finance backgrounds; feedback used for iteration

## Next Steps after Unit 1

- Archive final ledgers in digital portfolio
- Teams write a 1-page reflection: "How our self-audit ledger builds investor trust"
- Prepare transition to Unit 2's month-end automation challenge

## Excel Walkthrough: Creating a Self-Auditing Ledger

Here's an example of how to implement a SUMIF formula to total debits by account:

```excel
=SUMIF(AccountColumn,"Cash",DebitColumn)
```

And here's how to create a trial balance check formula:

```excel
=IF(ABS(SUM(DebitColumn)-SUM(CreditColumn))=0,"BALANCED","ERROR")
```

## Exercises

::: exercise #1
Create a basic ledger with the following accounts: Cash, Accounts Receivable, Inventory, Accounts Payable, and Owner's Equity. Record the following transactions:
1. Owner invests $10,000 in the business
2. Purchase inventory for $5,000 cash
3. Purchase equipment for $2,000 on account
4. Sell inventory costing $1,000 for $1,500 cash

Implement a SUMIF formula to total debits and credits for each account, and create a trial balance to verify your ledger is balanced.
:::

::: exercise #2
Using the ledger from Exercise #1, implement three conditional formatting "red flag" rules:
1. Highlight any transaction where debits don't equal credits
2. Highlight any negative account balances
3. Highlight any missing account names

Test your rules by intentionally creating errors in your ledger, then fix the errors to ensure your ledger passes all checks.
:::

## Summary

In this unit, students learn to create a self-auditing ledger that builds investor confidence through accurate financial record-keeping. By applying the accounting equation, recording transactions correctly, and implementing Excel formulas for automatic error checking, students develop essential skills for financial management and reporting.

The project culminates in a professional pitch to demonstrate how their self-auditing ledger ensures financial transparency and accuracy—key factors in gaining investor trust.