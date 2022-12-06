import * as Models from '@models';
import { BadRequest } from '@plugins/errors';
import { errorResponseHandler, okResponse } from '@plugins/server/responses';
import { IDBRouteConfig } from '@plugins/server/types';
import { RequestHandler } from 'express';

export const routesConfig: IDBRouteConfig[] = [
  {
    path: '/masters',
    routes: [
      {
        path: '/calendar',
        model: Models.CalendarMaster,
        modelName: 'CalendarMaster',
        options: {
          get: false,
          add: false,
          edit: false,
          delete: false,
        },
        additionalRouteHandler: (router, model) => {
          router.post('/get-date-id', (async (req, res) => {
            try {
              const { dateToFind }: { dateToFind: string } = req.body;
              if (dateToFind) {
                const [doc] = (await model.findAll({
                  where: {
                    date: dateToFind,
                  },
                  attributes: ['_id'],
                  limit: 1,
                })) as Models.CalendarMaster[];
                okResponse(res, {
                  dateId: doc._id,
                });
              } else {
                throw new BadRequest('dateToFind', 'Request.body');
              }
            } catch (e) {
              errorResponseHandler(res, e);
            }
          }) as RequestHandler);
        },
      },
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
