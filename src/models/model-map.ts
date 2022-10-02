import * as masterTables from './master';
import * as factTables from './fact';

export const modelIncludeMap = () => ({
  masterTables: {
    assets: {
      category: {
        assets: { model: masterTables.AssetMaster, as: 'assets' },
      },
      master: {
        calendarRecord: {
          model: masterTables.CalendarMaster,
          as: 'calendarRecord',
        },
        emiRecord: {
          model: masterTables.EMIMaster,
          as: 'emiRecord',
        },
        category: {
          model: masterTables.AssetCategoryMaster,
          as: 'assetCategory',
        },
        transactions: {
          model: factTables.Expenses,
          as: 'transactions',
        },
      },
    },
    calendar: {
      assets: { model: masterTables.AssetMaster, as: 'assets' },
      emi: {
        start: { model: masterTables.EMIMaster, as: 'EMIStartRecords' },
        end: { model: masterTables.EMIMaster, as: 'EMIEndRecords' },
      },
      insurances: { model: masterTables.InsuranceMaster, as: 'insurances' },
      incomes: { model: factTables.Incomes, as: 'incomes' },
      expenses: { model: factTables.Expenses, as: 'expenses' },
      investments: { model: factTables.Investments, as: 'investments' },
      openingBalances: {
        model: factTables.OpeningBalances,
        as: 'openingBalances',
      },
      marketRecords: { model: factTables.MarketData, as: 'marketRecords' },
    },
    expenses: {
      category: {
        expenses: { model: masterTables.ExpenseMaster, as: 'expenses' },
      },
      master: {
        category: {
          model: masterTables.ExpenseCategoryMaster,
          as: 'expenseCategory',
        },
        transactions: {
          model: factTables.Expenses,
          as: 'transactions',
        },
      },
    },
    incomes: {
      category: {
        incomes: { model: masterTables.IncomeMaster, as: 'incomes' },
      },
      master: {
        category: {
          model: masterTables.IncomeCategoryMaster,
          as: 'incomeCategory',
        },
        transactions: {
          model: factTables.Incomes,
          as: 'transactions',
        },
      },
    },
    investments: {
      category: {
        investments: {
          model: masterTables.InvestmentMaster,
          as: 'investments',
        },
      },
      master: {
        category: {
          model: masterTables.InvestmentCategoryMaster,
          as: 'investmentCategory',
        },
        transactions: {
          model: factTables.Investments,
          as: 'transactions',
        },
      },
    },
    others: {
      banks: {
        creditCards: {
          model: masterTables.CreditCardMaster,
          as: 'creditCards',
        },
        debitCards: { model: masterTables.DebitCardMaster, as: 'debitCards' },
        incomes: { model: factTables.Incomes, as: 'incomes' },
        expenses: { model: factTables.Expenses, as: 'expenses' },
        investments: { model: factTables.Investments, as: 'investments' },
        openingBalances: {
          model: factTables.OpeningBalances,
          as: 'openingBalances',
        },
      },
      creditCards: {
        emiRecords: { model: masterTables.EMIMaster, as: 'emiRecords' },
        bankRecord: { model: masterTables.BankMaster, as: 'bankRecords' },
      },
      debitCards: {
        bankRecord: { model: masterTables.BankMaster, as: 'bankRecords' },
      },
      emi: {
        assets: { model: masterTables.AssetMaster, as: 'assets' },
        transactions: { model: factTables.Expenses, as: 'transactions' },
        calendar: {
          startRecord: {
            model: masterTables.CalendarMaster,
            as: 'startCalendarDateRecord',
          },
          endRecord: {
            model: masterTables.CalendarMaster,
            as: 'endCalendarDateRecord',
          },
        },
        creditCard: { model: masterTables.CreditCardMaster, as: 'creditCard' },
      },
      insurances: {
        transactions: { model: factTables.Expenses, as: 'transactions' },
        calendarRecord: {
          model: masterTables.CalendarMaster,
          as: 'calendarRecord',
        },
      },
    },
  },
  factTables: {
    incomes: {
      calendarRecord: {
        model: masterTables.CalendarMaster,
        as: 'calendarRecord',
      },
      masterRecord: { model: masterTables.IncomeMaster, as: 'masterRecord' },
      bankRecord: { model: masterTables.BankMaster, as: 'bankRecord' },
      investmentRecord: {
        model: masterTables.InvestmentMaster,
        as: 'investmentRecord',
      },
    },
    expenses: {
      calendarRecord: {
        model: masterTables.CalendarMaster,
        as: 'calendarRecord',
      },
      masterRecord: { model: masterTables.ExpenseMaster, as: 'masterRecord' },
      bankRecord: { model: masterTables.BankMaster, as: 'bankRecord' },
      assetRecord: { model: masterTables.AssetMaster, as: 'assetRecord' },
      emiRecord: { model: masterTables.EMIMaster, as: 'emiRecord' },
      insuranceRecord: {
        model: masterTables.InsuranceMaster,
        as: 'insuranceRecord',
      },
    },
    investments: {
      calendarRecord: {
        model: masterTables.CalendarMaster,
        as: 'calendarRecord',
      },
      masterRecord: {
        model: masterTables.InvestmentMaster,
        as: 'masterRecord',
      },
      bankRecord: { model: masterTables.BankMaster, as: 'bankRecord' },
    },
    openingBalances: {
      calendarRecord: {
        model: masterTables.CalendarMaster,
        as: 'calendarRecord',
      },
      masterRecord: {
        model: masterTables.InvestmentMaster,
        as: 'masterRecord',
      },
    },
    marketData: {
      calendarRecord: {
        model: masterTables.CalendarMaster,
        as: 'calendarRecord',
      },
      bankRecord: { model: masterTables.BankMaster, as: 'bankRecord' },
    },
  },
});
