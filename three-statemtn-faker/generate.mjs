// % Update: Generate coherent three-statement data + Ratios sheet (ESM)
// Run: node generate.mjs

import { faker } from '@faker-js/faker';
import ExcelJS from 'exceljs';

(async () => {
  // ---------- 1) Assumptions (bounded randomness) ----------
  const netRevenue = faker.number.int({ min: 20000, max: 35000 });
  const returnsRate  = faker.number.float({ min: 0.01, max: 0.03, precision: 0.0001 });
  const serviceShare = faker.number.float({ min: 0.05, max: 0.15, precision: 0.0001 });

  const salesRevenue   = Math.round(netRevenue * (1 - serviceShare));
  const serviceRevenue = Math.round(netRevenue * serviceShare);
  const salesReturns   = Math.round(salesRevenue * returnsRate);

  const grossMargin = faker.number.float({ min: 0.40, max: 0.60, precision: 0.0001 });
  const cogs        = Math.round(netRevenue * (1 - grossMargin));

  const rentExpense         = 1200;
  const wagesExpense        = faker.number.int({ min: 3800, max: 5200 });
  const utilitiesExpense    = faker.number.int({ min: 400, max: 650 });
  const depreciationExpense = faker.number.int({ min: 300, max: 500 });

  const operatingExpenses = rentExpense + wagesExpense + utilitiesExpense + depreciationExpense;
  const operatingIncome  = netRevenue - cogs - operatingExpenses;

  const interestIncome  = faker.number.int({ min: 30, max: 90 });
  const interestExpense = faker.number.int({ min: 180, max: 360 });

  const incomeBeforeTax  = operatingIncome + interestIncome - interestExpense;
  const taxRate          = 0.08;
  const incomeTaxExpense = Math.round(Math.max(0, incomeBeforeTax) * taxRate);
  const netIncome        = incomeBeforeTax - incomeTaxExpense;

  const dividends = faker.number.int({ min: 600, max: 1200 });

  // Working capital timing
  const DSO = faker.number.int({ min: 45, max: 80 });
  const DIO = faker.number.int({ min: 60, max: 120 });
  const DPO = faker.number.int({ min: 30, max: 55 });

  const aveAR  = Math.round((netRevenue / 365) * DSO);
  const aveInv = Math.round((cogs / 365) * DIO);
  const aveAP  = Math.round((cogs / 365) * DPO);

  const beginAR  = Math.round(aveAR  * faker.number.float({ min: 0.9, max: 1.1, precision: 0.0001 }));
  const beginInv = Math.round(aveInv * faker.number.float({ min: 0.9, max: 1.1, precision: 0.0001 }));
  const beginAP  = Math.round(aveAP  * faker.number.float({ min: 0.9, max: 1.1, precision: 0.0001 }));

  const endAR  = Math.max(0, 2 * aveAR  - beginAR);
  const endInv = Math.max(0, 2 * aveInv - beginInv);
  const endAP  = Math.max(0, 2 * aveAP  - beginAP);

  const beginPrepaid  = 1000, endPrepaid  = 1200;
  const beginSupplies =  300, endSupplies =  350;

  const beginWagesPay = 800, endWagesPay = 950;
  const beginUnearned = 400, endUnearned = 600;
  const beginIntPay   =  80, endIntPay   = 120;

  const equipment     = 16000;
  const beginAccumDep = 2400;
  const endAccumDep   = beginAccumDep + depreciationExpense;

  const bankLoanLT  = 10000;
  const commonStock = 15000;
  const beginRE     = 5200;

  // Balance sheet end (cash plug)
  const currentAssetsEndNoCash = endAR + endInv + endPrepaid + endSupplies;
  const currentLiabEnd         = endAP + endWagesPay + endUnearned + endIntPay;
  const netPPEEnd              = equipment - endAccumDep;

  const endRE          = beginRE + netIncome - dividends;
  const totalEquityEnd = commonStock + endRE;
  const totalLiabEnd   = currentLiabEnd + bankLoanLT;

  const nonCashAssetsEnd   = currentAssetsEndNoCash + netPPEEnd;
  const totalAssetsEnd     = totalLiabEnd + totalEquityEnd;
  const endCash            = Math.max(500, totalAssetsEnd - nonCashAssetsEnd);
  const totalCurrAssetsEnd = endCash + currentAssetsEndNoCash;

  // Cash flow tie to get beginning cash
  const wcEffect =
    (-(endAR - beginAR)) + (-(endInv - beginInv)) + (-(endPrepaid - beginPrepaid)) + (-(endSupplies - beginSupplies)) +
    ((endAP - beginAP))  + ((endWagesPay - beginWagesPay)) + ((endUnearned - beginUnearned)) + ((endIntPay - beginIntPay));

  const CFO = netIncome + depreciationExpense + wcEffect;
  const CFI = 0;
  const CFF = -dividends;
  const netChangeCash = CFO + CFI + CFF;
  const beginCash = Math.max(1000, endCash - netChangeCash);

  // ---------- 2) Build workbook ----------
  const wb = new ExcelJS.Workbook();

  // Elements
  const wsEl = wb.addWorksheet('Elements');
  const elementsRows = [
    ['Element','Amount','DEALER','Hint'],
    ['Sales Revenue', salesRevenue, 'R', 'Topline sales (credit).'],
    ['Sales Returns & Allowances', salesReturns, 'E', 'Contra-revenue (debit).'],
    ['Service Revenue', serviceRevenue, 'R', 'Earned services (credit).'],
    ['Cost of Goods Sold', cogs, 'E', 'Expense when inventory is sold.'],
    ['Rent Expense', rentExpense, 'E', 'Period expense.'],
    ['Wages Expense', wagesExpense, 'E', 'Period expense.'],
    ['Utilities Expense', utilitiesExpense, 'E', 'Period expense.'],
    ['Depreciation Expense', depreciationExpense, 'E', 'Noncash add-back on C/F.'],
    ['Interest Income', interestIncome, 'R', 'Other income (credit).'],
    ['Interest Expense', interestExpense, 'E', 'Financing cost.'],
    ['Income Tax Expense', incomeTaxExpense, 'E', 'Tax on profit.'],
    ['Owner Draw / Dividends', dividends, 'D', 'Distribution to owners; not an expense.'],
    ['Cash', endCash, 'A', 'Ending cash; ties to Cash Flow ending.'],
    ['Accounts Receivable', endAR, 'A', 'WC asset (affects C/F).'],
    ['Inventory', endInv, 'A', 'WC asset (affects C/F).'],
    ['Prepaid Rent', endPrepaid, 'A', 'WC asset (affects C/F).'],
    ['Supplies', endSupplies, 'A', 'WC asset (affects C/F).'],
    ['Equipment', equipment, 'A', 'Long-term asset.'],
    ['Accumulated Depreciation - Equip.', endAccumDep, 'A', 'Contra-asset (credit).'],
    ['Accounts Payable', endAP, 'L', 'WC liability (affects C/F).'],
    ['Wages Payable', endWagesPay, 'L', 'WC liability (affects C/F).'],
    ['Unearned Revenue', endUnearned, 'L', 'WC liability (affects C/F).'],
    ['Interest Payable', endIntPay, 'L', 'WC liability (affects C/F).'],
    ['Bank Loan (Long-term)', bankLoanLT, 'L', 'Long-term liability.'],
    ['Common Stock', commonStock, 'E', 'Contributed capital (credit).'],
    ['Retained Earnings (Beg.)', beginRE, 'E', 'Rolls forward each period.'],
  ];
  wsEl.addRows(elementsRows);
  wsEl.columns.forEach((c, i) => { if (i === 0) c.width = 34; if (i === 1) c.width = 16; if (i === 3) c.width = 42; });
  wsEl.addTable({ name: 'Elements', ref: 'A1', headerRow: true,
    columns: [{name:'Element'},{name:'Amount'},{name:'DEALER'},{name:'Hint'}],
    rows: elementsRows.slice(1) });

  // BeginningBalances
  const wsBeg = wb.addWorksheet('BeginningBalances');
  const beginRows = [
    ['Account','Beginning_Balance'],
    ['Cash', beginCash],
    ['Accounts Receivable', beginAR],
    ['Inventory', beginInv],
    ['Prepaid Rent', beginPrepaid],
    ['Supplies', beginSupplies],
    ['Equipment', equipment],
    ['Accumulated Depreciation - Equip.', beginAccumDep],
    ['Accounts Payable', beginAP],
    ['Wages Payable', beginWagesPay],
    ['Unearned Revenue', beginUnearned],
    ['Interest Payable', beginIntPay],
    ['Bank Loan (Long-term)', bankLoanLT],
    ['Common Stock', commonStock],
    ['Retained Earnings (Beg.)', beginRE],
  ];
  wsBeg.addRows(beginRows);
  wsBeg.columns.forEach((c, i) => { if (i === 0) c.width = 34; if (i === 1) c.width = 22; });
  wsBeg.addTable({ name: 'BeginningBalances', ref: 'A1', headerRow: true,
    columns: [{name:'Account'},{name:'Beginning_Balance'}],
    rows: beginRows.slice(1) });

  // ---------- 3) Ratios sheet (pulls, begin/end, averages, ratios) ----------
  const wsR = wb.addWorksheet('Ratios');
  wsR.getColumn(1).width = 36;
  wsR.getColumn(2).width = 24;

  const put = (r, label, f) => {
    wsR.getCell(`A${r}`).value = label;
    wsR.getCell(`A${r}`).font = { bold: true };
    wsR.getCell(`B${r}`).value = { formula: (f[0] === '=' ? f.slice(1) : f) };
    return r + 1;
  };

  let r = 1;

  // IS pulls
  r = put(r,'Sales Revenue','=XLOOKUP("Sales Revenue",Elements[Element],Elements[Amount])');              // B1
  r = put(r,'Sales Returns & Allowances','=XLOOKUP("Sales Returns & Allowances",Elements[Element],Elements[Amount])'); // B2
  r = put(r,'Service Revenue','=XLOOKUP("Service Revenue",Elements[Element],Elements[Amount])');           // B3
  r = put(r,'Net Revenue','=B1-B2+B3');                                                                    // B4
  r = put(r,'COGS','=XLOOKUP("Cost of Goods Sold",Elements[Element],Elements[Amount])');                   // B5
  r = put(r,'Gross Profit','=B4-B5');                                                                      // B6
  r = put(r,'Rent Expense','=XLOOKUP("Rent Expense",Elements[Element],Elements[Amount])');                  // B7
  r = put(r,'Wages Expense','=XLOOKUP("Wages Expense",Elements[Element],Elements[Amount])');                // B8
  r = put(r,'Utilities Expense','=XLOOKUP("Utilities Expense",Elements[Element],Elements[Amount])');        // B9
  r = put(r,'Depreciation Expense','=XLOOKUP("Depreciation Expense",Elements[Element],Elements[Amount])');  // B10
  r = put(r,'Operating Expenses (sum)','=SUM(B7:B10)');                                                     // B11
  r = put(r,'Operating Income','=B6-B11');                                                                  // B12
  r = put(r,'Interest Income','=XLOOKUP("Interest Income",Elements[Element],Elements[Amount])');            // B13
  r = put(r,'Interest Expense','=XLOOKUP("Interest Expense",Elements[Element],Elements[Amount])');          // B14
  r = put(r,'Income Before Tax','=B12+B13-B14');                                                            // B15
  r = put(r,'Income Tax Expense','=XLOOKUP("Income Tax Expense",Elements[Element],Elements[Amount])');      // B16
  r = put(r,'Net Income','=B15-B16');                                                                       // B17

  // End balances
  r = put(r,'Cash (End)','=XLOOKUP("Cash",Elements[Element],Elements[Amount])');                            // B18
  r = put(r,'A/R (End)','=XLOOKUP("Accounts Receivable",Elements[Element],Elements[Amount])');             // B19
  r = put(r,'Inventory (End)','=XLOOKUP("Inventory",Elements[Element],Elements[Amount])');                 // B20
  r = put(r,'Prepaid Rent (End)','=XLOOKUP("Prepaid Rent",Elements[Element],Elements[Amount])');           // B21
  r = put(r,'Supplies (End)','=XLOOKUP("Supplies",Elements[Element],Elements[Amount])');                   // B22
  r = put(r,'A/P (End)','=XLOOKUP("Accounts Payable",Elements[Element],Elements[Amount])');               // B23
  r = put(r,'Wages Payable (End)','=XLOOKUP("Wages Payable",Elements[Element],Elements[Amount])');        // B24
  r = put(r,'Unearned Revenue (End)','=XLOOKUP("Unearned Revenue",Elements[Element],Elements[Amount])');  // B25
  r = put(r,'Interest Payable (End)','=XLOOKUP("Interest Payable",Elements[Element],Elements[Amount])');  // B26
  r = put(r,'Equipment (End)','=XLOOKUP("Equipment",Elements[Element],Elements[Amount])');                 // B27
  r = put(r,'Accum Dep (End)','=XLOOKUP("Accumulated Depreciation - Equip.",Elements[Element],Elements[Amount])'); // B28
  r = put(r,'Bank Loan LT (End)','=XLOOKUP("Bank Loan (Long-term)",Elements[Element],Elements[Amount])'); // B29
  r = put(r,'Common Stock (End)','=XLOOKUP("Common Stock",Elements[Element],Elements[Amount])');           // B30
  r = put(r,'Dividends (Period)','=XLOOKUP("Owner Draw / Dividends",Elements[Element],Elements[Amount])'); // B31
  r = put(r,'RE (Beg from Elements)','=XLOOKUP("Retained Earnings (Beg.)",Elements[Element],Elements[Amount])'); // B32

  r = put(r,'Total Current Assets (End)','=SUM(B18:B22)'); // B33
  r = put(r,'Net PPE (End)','=B27-B28');                  // B34
  r = put(r,'Total Assets (End)','=B33+B34');             // B35
  r = put(r,'Total Current Liab (End)','=SUM(B23:B26)');  // B36
  r = put(r,'Total Liabilities (End)','=B36+B29');        // B37
  r = put(r,'RE (End)','=B32+B17-B31');                   // B38
  r = put(r,'Total Equity (End)','=B30+B38');             // B39

  // Begin balances
  r = put(r,'Cash (Beg)','=XLOOKUP("Cash",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B40
  r = put(r,'A/R (Beg)','=XLOOKUP("Accounts Receivable",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B41
  r = put(r,'Inventory (Beg)','=XLOOKUP("Inventory",BeginningBalances[Account],BeginningBalances[Beginning_Balance])');     // B42
  r = put(r,'Prepaid Rent (Beg)','=XLOOKUP("Prepaid Rent",BeginningBalances[Account],BeginningBalances[Beginning_Balance])');// B43
  r = put(r,'Supplies (Beg)','=XLOOKUP("Supplies",BeginningBalances[Account],BeginningBalances[Beginning_Balance])');       // B44
  r = put(r,'A/P (Beg)','=XLOOKUP("Accounts Payable",BeginningBalances[Account],BeginningBalances[Beginning_Balance])');    // B45
  r = put(r,'Wages Payable (Beg)','=XLOOKUP("Wages Payable",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B46
  r = put(r,'Unearned Revenue (Beg)','=XLOOKUP("Unearned Revenue",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B47
  r = put(r,'Interest Payable (Beg)','=XLOOKUP("Interest Payable",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B48
  r = put(r,'Equipment (Beg)','=XLOOKUP("Equipment",BeginningBalances[Account],BeginningBalances[Beginning_Balance])');     // B49
  r = put(r,'Accum Dep (Beg)','=XLOOKUP("Accumulated Depreciation - Equip.",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B50
  r = put(r,'Bank Loan LT (Beg)','=XLOOKUP("Bank Loan (Long-term)",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B51
  r = put(r,'Common Stock (Beg)','=XLOOKUP("Common Stock",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B52
  r = put(r,'RE (Beg) [check]','=XLOOKUP("Retained Earnings (Beg.)",BeginningBalances[Account],BeginningBalances[Beginning_Balance])'); // B53

  r = put(r,'Total Current Assets (Beg)','=SUM(B40:B44)'); // B54
  r = put(r,'Net PPE (Beg)','=B49-B50');                   // B55
  r = put(r,'Total Assets (Beg)','=B54+B55');              // B56
  r = put(r,'Total Current Liab (Beg)','=SUM(B45:B48)');   // B57
  r = put(r,'Total Liabilities (Beg)','=B57+B51');         // B58
  r = put(r,'Total Equity (Beg)','=B52+B53');              // B59

  // Averages
  r = put(r,'Avg A/R','=AVERAGE(B19,B41)');              // B60
  r = put(r,'Avg Inventory','=AVERAGE(B20,B42)');        // B61
  r = put(r,'Avg Total Assets','=AVERAGE(B35,B56)');     // B62
  r = put(r,'Avg Equity','=AVERAGE(B39,B59)');           // B63

  // Ratios
  const rStart = r;
  r = put(r,'Gross Margin','=B6/B4');                    // B64
  r = put(r,'Operating Margin','=B12/B4');               // B65
  r = put(r,'Net Margin','=B17/B4');                     // B66
  r = put(r,'Current Ratio','=B33/B36');                 // B67
  r = put(r,'Quick Ratio','=(B18+B19)/B36');             // B68
  r = put(r,'Debt-to-Equity','=B37/B39');                // B69
  r = put(r,'ROA','=B17/B62');                           // B70
  r = put(r,'ROE','=B17/B63');                           // B71
  r = put(r,'A/R Turnover','=B4/B60');                   // B72
  r = put(r,'DSO (days)','=IF(B72=0,"n/a",365/B72)');    // B73
  r = put(r,'Inventory Turnover','=B5/B61');             // B74
  r = put(r,'DIO (days)','=IF(B74=0,"n/a",365/B74)');    // B75

  // Formats (Excel computes on open)
  ['B64','B65','B66','B70','B71'].forEach(addr => wsR.getCell(addr).numFmt = '0.0%');
  ['B67','B68','B69','B72','B74'].forEach(addr => wsR.getCell(addr).numFmt = '0.00');
  ['B73','B75'].forEach(addr => wsR.getCell(addr).numFmt = '0');

  wsR.getCell('D1').value = 'Notes';
  wsR.getCell('D2').value = '↑ better: margins, ROA/ROE, Current/Quick, A/R Turnover, Inv Turnover';
  wsR.getCell('D3').value = '↓ better: Debt-to-Equity (risk), DSO (days), DIO (days)';

  // ---------- 4) Save ----------
  const outName = 'ThreeStatements_Faker.xlsx';
  await wb.xlsx.writeFile(outName);
  console.log(`Created: ${outName}`);
})();

