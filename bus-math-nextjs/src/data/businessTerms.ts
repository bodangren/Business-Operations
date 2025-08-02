export interface BilingualBusinessTerm {
  id: string;
  english: string;
  chinese: string;
  pinyin: string;
  definition: {
    english: string;
    chinese: string;
  };
  example: {
    english: string;
    chinese: string;
  };
  category: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  unit: string;
  culturalContext?: {
    english: string;
    chinese: string;
  };
  excelFunction?: string;
}

export const businessTerms: BilingualBusinessTerm[] = [
  // Unit 1: Smart Ledger Launch - Basic Accounting Terms
  {
    id: 'asset',
    english: 'Asset',
    chinese: '资产',
    pinyin: 'zī chǎn',
    definition: {
      english: 'Something valuable that a business owns, like cash, equipment, or buildings.',
      chinese: '企业拥有的有价值的东西，如现金、设备或建筑物。'
    },
    example: {
      english: 'The company\'s main assets are its computers and office building.',
      chinese: '公司的主要资产是计算机和办公楼。'
    },
    category: 'accounting',
    difficulty: 'basic',
    unit: 'unit01'
  },
  {
    id: 'liability',
    english: 'Liability',
    chinese: '负债',
    pinyin: 'fù zhài',
    definition: {
      english: 'Money that a business owes to others, like loans or bills to pay.',
      chinese: '企业欠他人的钱，如贷款或应付账单。'
    },
    example: {
      english: 'The store has a liability of $5,000 for the equipment loan.',
      chinese: '这家店对设备贷款有5000美元的负债。'
    },
    category: 'accounting',
    difficulty: 'basic',
    unit: 'unit01'
  },
  {
    id: 'equity',
    english: 'Equity',
    chinese: '股本',
    pinyin: 'gǔ běn',
    definition: {
      english: 'The owner\'s share of the business after paying all debts.',
      chinese: '偿还所有债务后，所有者在企业中的份额。'
    },
    example: {
      english: 'If assets are $10,000 and liabilities are $3,000, equity is $7,000.',
      chinese: '如果资产是10000美元，负债是3000美元，股本就是7000美元。'
    },
    category: 'accounting',
    difficulty: 'basic',
    unit: 'unit01'
  },
  {
    id: 'revenue',
    english: 'Revenue',
    chinese: '收入',
    pinyin: 'shōu rù',
    definition: {
      english: 'Money earned from selling products or services.',
      chinese: '通过销售产品或服务赚取的钱。'
    },
    example: {
      english: 'The bakery\'s revenue last month was $8,000 from cake sales.',
      chinese: '面包店上个月的蛋糕销售收入是8000美元。'
    },
    category: 'accounting',
    difficulty: 'basic',
    unit: 'unit01'
  },
  {
    id: 'expense',
    english: 'Expense',
    chinese: '费用',
    pinyin: 'fèi yòng',
    definition: {
      english: 'Money spent to run the business, like rent, supplies, or wages.',
      chinese: '经营企业所花费的钱，如租金、用品或工资。'
    },
    example: {
      english: 'Monthly expenses include $1,200 for rent and $800 for supplies.',
      chinese: '每月费用包括1200美元的租金和800美元的用品费。'
    },
    category: 'accounting',
    difficulty: 'basic',
    unit: 'unit01'
  },
  {
    id: 'journal-entry',
    english: 'Journal Entry',
    chinese: '日记账分录',
    pinyin: 'rì jì zhàng fēn lù',
    definition: {
      english: 'A record of a business transaction showing what accounts are affected.',
      chinese: '记录商业交易的记录，显示哪些科目受到影响。'
    },
    example: {
      english: 'When buying supplies, we make a journal entry to record the expense.',
      chinese: '购买用品时，我们做日记账分录来记录费用。'
    },
    category: 'accounting',
    difficulty: 'intermediate',
    unit: 'unit01',
    culturalContext: {
      english: 'Similar to keeping a diary, but for business money activities.',
      chinese: '类似于记日记，但是记录的是商业资金活动。'
    }
  },
  {
    id: 'debit',
    english: 'Debit',
    chinese: '借方',
    pinyin: 'jiè fāng',
    definition: {
      english: 'Left side of an account that increases assets and expenses.',
      chinese: '科目的左侧，用于增加资产和费用。'
    },
    example: {
      english: 'When we buy equipment, we debit (increase) the equipment account.',
      chinese: '当我们购买设备时，我们借记（增加）设备科目。'
    },
    category: 'accounting',
    difficulty: 'intermediate',
    unit: 'unit01',
    culturalContext: {
      english: 'Think of "debit" as "receiving something" for the business.',
      chinese: '把"借方"想象成企业"收到某样东西"。'
    }
  },
  {
    id: 'credit',
    english: 'Credit',
    chinese: '贷方',
    pinyin: 'dài fāng',
    definition: {
      english: 'Right side of an account that increases liabilities and equity.',
      chinese: '科目的右侧，用于增加负债和股本。'
    },
    example: {
      english: 'When we get a loan, we credit (increase) the loan payable account.',
      chinese: '当我们获得贷款时，我们贷记（增加）应付贷款科目。'
    },
    category: 'accounting',
    difficulty: 'intermediate',
    unit: 'unit01',
    culturalContext: {
      english: 'Think of "credit" as "giving something" or owing something.',
      chinese: '把"贷方"想象成"给出某样东西"或欠某样东西。'
    }
  },

  // Unit 2: Excel Functions and Formulas
  {
    id: 'formula',
    english: 'Formula',
    chinese: '公式',
    pinyin: 'gōng shì',
    definition: {
      english: 'A mathematical instruction in Excel that calculates values automatically.',
      chinese: 'Excel中自动计算数值的数学指令。'
    },
    example: {
      english: '=A1+B1 is a formula that adds the values in cells A1 and B1.',
      chinese: '=A1+B1是一个将A1和B1单元格中的值相加的公式。'
    },
    category: 'excel',
    difficulty: 'basic',
    unit: 'unit02',
    excelFunction: '=SUM()'
  },
  {
    id: 'cell-reference',
    english: 'Cell Reference',
    chinese: '单元格引用',
    pinyin: 'dān yuán gé yǐn yòng',
    definition: {
      english: 'The address of a cell in Excel, like A1 or B5.',
      chinese: 'Excel中单元格的地址，如A1或B5。'
    },
    example: {
      english: 'Cell A1 contains the number 100, so we can reference it in formulas.',
      chinese: '单元格A1包含数字100，所以我们可以在公式中引用它。'
    },
    category: 'excel',
    difficulty: 'basic',
    unit: 'unit02'
  },

  // Unit 3: Financial Statements
  {
    id: 'income-statement',
    english: 'Income Statement',
    chinese: '损益表',
    pinyin: 'sǔn yì biǎo',
    definition: {
      english: 'A report showing how much money a business made or lost over time.',
      chinese: '显示企业在一段时间内赚了多少钱或亏了多少钱的报告。'
    },
    example: {
      english: 'The income statement shows we earned $50,000 and spent $30,000.',
      chinese: '损益表显示我们赚了50000美元，花了30000美元。'
    },
    category: 'financial-reports',
    difficulty: 'intermediate',
    unit: 'unit03'
  },
  {
    id: 'balance-sheet',
    english: 'Balance Sheet',
    chinese: '资产负债表',
    pinyin: 'zī chǎn fù zhài biǎo',
    definition: {
      english: 'A report showing what a business owns and owes at a specific date.',
      chinese: '显示企业在特定日期拥有什么和欠什么的报告。'
    },
    example: {
      english: 'The balance sheet shows we have $25,000 in assets and $10,000 in debts.',
      chinese: '资产负债表显示我们有25000美元的资产和10000美元的债务。'
    },
    category: 'financial-reports',
    difficulty: 'intermediate',
    unit: 'unit03'
  },

  // Unit 4: Statistics and Data Analysis
  {
    id: 'average',
    english: 'Average',
    chinese: '平均值',
    pinyin: 'píng jūn zhí',
    definition: {
      english: 'The sum of all numbers divided by how many numbers there are.',
      chinese: '所有数字的总和除以数字的个数。'
    },
    example: {
      english: 'The average of 10, 20, and 30 is (10+20+30)÷3 = 20.',
      chinese: '10、20和30的平均值是(10+20+30)÷3 = 20。'
    },
    category: 'statistics',
    difficulty: 'basic',
    unit: 'unit04',
    excelFunction: '=AVERAGE()'
  },
  {
    id: 'forecast',
    english: 'Forecast',
    chinese: '预测',
    pinyin: 'yù cè',
    definition: {
      english: 'Using past data to predict what might happen in the future.',
      chinese: '使用过去的数据来预测未来可能发生的事情。'
    },
    example: {
      english: 'Based on sales data, we forecast selling 500 items next month.',
      chinese: '根据销售数据，我们预测下个月将销售500件商品。'
    },
    category: 'statistics',
    difficulty: 'intermediate',
    unit: 'unit04'
  },

  // Unit 5: Payroll and Cash Flow
  {
    id: 'payroll',
    english: 'Payroll',
    chinese: '工资单',
    pinyin: 'gōng zī dān',
    definition: {
      english: 'The total amount of wages paid to all employees.',
      chinese: '支付给所有员工的工资总额。'
    },
    example: {
      english: 'This month\'s payroll is $15,000 for all five employees.',
      chinese: '这个月所有五名员工的工资单是15000美元。'
    },
    category: 'payroll',
    difficulty: 'intermediate',
    unit: 'unit05'
  },
  {
    id: 'cash-flow',
    english: 'Cash Flow',
    chinese: '现金流',
    pinyin: 'xiàn jīn liú',
    definition: {
      english: 'The movement of money in and out of a business.',
      chinese: '资金进出企业的流动。'
    },
    example: {
      english: 'Good cash flow means more money comes in than goes out.',
      chinese: '良好的现金流意味着流入的资金比流出的资金多。'
    },
    category: 'finance',
    difficulty: 'intermediate',
    unit: 'unit05'
  },

  // Unit 6: Cost Analysis
  {
    id: 'break-even',
    english: 'Break-Even Point',
    chinese: '盈亏平衡点',
    pinyin: 'yíng kuī píng héng diǎn',
    definition: {
      english: 'The point where total income equals total costs - no profit, no loss.',
      chinese: '总收入等于总成本的点——无利润，无损失。'
    },
    example: {
      english: 'We need to sell 100 items to break even on our costs.',
      chinese: '我们需要销售100件商品才能在成本上盈亏平衡。'
    },
    category: 'cost-analysis',
    difficulty: 'advanced',
    unit: 'unit06'
  },
  {
    id: 'fixed-cost',
    english: 'Fixed Cost',
    chinese: '固定成本',
    pinyin: 'gù dìng chéng běn',
    definition: {
      english: 'Costs that stay the same no matter how much you produce, like rent.',
      chinese: '无论你生产多少，都保持不变的成本，如租金。'
    },
    example: {
      english: 'Office rent of $2,000 per month is a fixed cost.',
      chinese: '每月2000美元的办公室租金是固定成本。'
    },
    category: 'cost-analysis',
    difficulty: 'intermediate',
    unit: 'unit06'
  },
  {
    id: 'variable-cost',
    english: 'Variable Cost',
    chinese: '可变成本',
    pinyin: 'kě biàn chéng běn',
    definition: {
      english: 'Costs that change based on how much you produce, like materials.',
      chinese: '根据你生产多少而变化的成本，如材料。'
    },
    example: {
      english: 'If each product needs $5 in materials, that\'s a variable cost.',
      chinese: '如果每个产品需要5美元的材料，那就是可变成本。'
    },
    category: 'cost-analysis',
    difficulty: 'intermediate',
    unit: 'unit06'
  },

  // Unit 7: Assets and Inventory
  {
    id: 'depreciation',
    english: 'Depreciation',
    chinese: '折旧',
    pinyin: 'zhé jiù',
    definition: {
      english: 'The decrease in value of an asset over time due to use or age.',
      chinese: '资产因使用或年久而随时间减少的价值。'
    },
    example: {
      english: 'A $10,000 computer might depreciate $2,000 each year.',
      chinese: '一台10000美元的计算机每年可能折旧2000美元。'
    },
    category: 'assets',
    difficulty: 'advanced',
    unit: 'unit07'
  },
  {
    id: 'inventory',
    english: 'Inventory',
    chinese: '库存',
    pinyin: 'kù cún',
    definition: {
      english: 'Goods that a business has ready to sell to customers.',
      chinese: '企业准备销售给客户的商品。'
    },
    example: {
      english: 'The store has 200 shirts in inventory ready for sale.',
      chinese: '这家店库存有200件衬衫准备销售。'
    },
    category: 'inventory',
    difficulty: 'basic',
    unit: 'unit07'
  },

  // Unit 8: Advanced Financial Modeling
  {
    id: 'scenario-analysis',
    english: 'Scenario Analysis',
    chinese: '情景分析',
    pinyin: 'qíng jǐng fēn xī',
    definition: {
      english: 'Testing different possible situations to see how they affect the business.',
      chinese: '测试不同的可能情况，以了解它们如何影响企业。'
    },
    example: {
      english: 'We test best case, worst case, and normal case scenarios.',
      chinese: '我们测试最好情况、最坏情况和正常情况的情景。'
    },
    category: 'financial-modeling',
    difficulty: 'advanced',
    unit: 'unit08'
  },
  {
    id: 'kpi',
    english: 'Key Performance Indicator (KPI)',
    chinese: '关键绩效指标',
    pinyin: 'guān jiàn jì xiào zhǐ biāo',
    definition: {
      english: 'Important measurements that show how well a business is doing.',
      chinese: '显示企业表现如何的重要衡量标准。'
    },
    example: {
      english: 'Monthly sales growth of 5% is a key performance indicator.',
      chinese: '每月5%的销售增长是一个关键绩效指标。'
    },
    category: 'financial-modeling',
    difficulty: 'advanced',
    unit: 'unit08'
  }
];

export const getTermsByUnit = (unit: string): BilingualBusinessTerm[] => {
  return businessTerms.filter(term => term.unit === unit);
};

export const getTermsByCategory = (category: string): BilingualBusinessTerm[] => {
  return businessTerms.filter(term => term.category === category);
};

export const getTermsByDifficulty = (difficulty: 'basic' | 'intermediate' | 'advanced'): BilingualBusinessTerm[] => {
  return businessTerms.filter(term => term.difficulty === difficulty);
};

export const searchTerms = (query: string, language: 'english' | 'chinese' = 'english'): BilingualBusinessTerm[] => {
  const lowerQuery = query.toLowerCase();
  return businessTerms.filter(term => {
    if (language === 'english') {
      return term.english.toLowerCase().includes(lowerQuery) ||
             term.definition.english.toLowerCase().includes(lowerQuery) ||
             term.pinyin.toLowerCase().includes(lowerQuery);
    } else {
      return term.chinese.includes(query) ||
             term.definition.chinese.includes(query) ||
             term.english.toLowerCase().includes(lowerQuery);
    }
  });
};