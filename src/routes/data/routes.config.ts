import * as Models from '@models';
import { IDBRouteConfig } from '@plugins/server/types';

export const routesConfig: IDBRouteConfig[] = [
  {
    path: '/masters',
    routes: [
      {
        path: '/assets',
        routes: [
          {
            path: '/categories',
            model: Models.AssetCategoryMaster,
            modelName: 'AssetCategoryMaster',
          },
          {
            path: '/master',
            model: Models.AssetMaster,
            modelName: 'AssetMaster',
          },
        ],
      },
      {
        path: '/banks',
        model: Models.BankMaster,
        modelName: 'BankMaster',
      },
      {
        path: '/credit-cards',
        model: Models.CreditCardMaster,
        modelName: 'CreditCardMaster',
      },
      {
        path: '/debit-cards',
        model: Models.DebitCardMaster,
        modelName: 'DebitCardMaster',
      },
      {
        path: '/emi',
        model: Models.EMIMaster,
        modelName: 'EMIMaster',
      },
      {
        path: '/expenses',
        routes: [
          {
            path: '/categories',
            model: Models.ExpenseCategoryMaster,
            modelName: 'ExpenseCategoryMaster',
          },
          {
            path: '/master',
            model: Models.ExpenseMaster,
            modelName: 'ExpenseMaster',
          },
        ],
      },
      {
        path: '/incomes',
        routes: [
          {
            path: '/categories',
            model: Models.IncomeCategoryMaster,
            modelName: 'IncomeCategoryMaster',
          },
          {
            path: '/master',
            model: Models.IncomeMaster,
            modelName: 'IncomeMaster',
          },
        ],
      },
      {
        path: '/insurances',
        model: Models.InsuranceMaster,
        modelName: 'InsuranceMaster',
      },
      {
        path: '/investments',
        routes: [
          {
            path: '/categories',
            model: Models.InvestmentCategoryMaster,
            modelName: 'InvestmentCategoryMaster',
          },
          {
            path: '/master',
            model: Models.InvestmentMaster,
            modelName: 'InvestmentMaster',
          },
        ],
      },
    ],
  },
  {
    path: '/transactions',
    routes: [
      {
        path: '/calendar',
        model: Models.CalendarMaster,
        modelName: 'CalendarMaster',
        options: {
          get: true,
          add: false,
          edit: false,
          delete: false,
        },
      },
      {
        path: '/expenses',
        model: Models.Expenses,
        modelName: 'Expenses',
      },
      {
        path: '/incomes',
        model: Models.Incomes,
        modelName: 'Incomes',
      },
      {
        path: '/investments',
        model: Models.Investments,
        modelName: 'Investments',
      },
      {
        path: '/opening-balances',
        model: Models.OpeningBalances,
        modelName: 'OpeningBalances',
      },
    ],
  },
];
