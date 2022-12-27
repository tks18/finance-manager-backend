import * as Models from '@models';
import {
  BadRequest,
  InternalServerError,
  NotAllowed,
  UnAuthorized,
} from '@plugins/errors';
import { marketDataMethods } from '@plugins/market-data-server';
import {
  createdResponse,
  errorResponseHandler,
  okResponse,
} from '@plugins/server/responses';
import { IDBRouteConfig } from '@plugins/server/types';
import { RequestHandler } from 'express';
import { DateTime } from 'luxon';

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
        path: '/market-data',
        model: Models.MarketData,
        modelName: 'MarketData',
        additionalRouteHandler: (router) => {
          router.post('/update-market-data', (async (req, res) => {
            try {
              const StartCalendarDate = process.env['MARKETSTARTDATE'];
              if (StartCalendarDate) {
                const sessionToken = req.headers['x-session-token'];
                if (sessionToken) {
                  const endInvestmentMarketDate = await Models.Settings.findOne(
                    {
                      where: {
                        name: 'end_investment_market_date',
                        type: 'date',
                      },
                    },
                  );
                  let startDate = '';
                  let endDate = '';
                  let proceedToInvstServer: boolean;
                  if (endInvestmentMarketDate) {
                    const startDatetimeObj = DateTime.fromFormat(
                      endInvestmentMarketDate.value,
                      'yyyy-LL-dd',
                    );
                    const endDatetimeObj = DateTime.now().plus({ days: -1 });
                    if (
                      startDatetimeObj.toISODate() !==
                        endDatetimeObj.toISODate() &&
                      endDatetimeObj.toUnixInteger() >=
                        startDatetimeObj.toUnixInteger()
                    ) {
                      proceedToInvstServer = false;
                    } else {
                      proceedToInvstServer = true;
                    }
                    startDate = startDatetimeObj.toFormat('yyyy-LL-dd');
                    endDate = endDatetimeObj.toFormat('yyyy-LL-dd');
                  } else {
                    startDate = StartCalendarDate;
                    endDate = DateTime.now()
                      .plus({ days: -1 })
                      .toFormat('yyyy-LL-dd');
                    const startInvestmentMarketDate =
                      await Models.Settings.findOne({
                        where: {
                          name: 'start_investment_market_date',
                          type: 'date',
                        },
                      });
                    if (!startInvestmentMarketDate) {
                      await Models.Settings.create({
                        name: 'start_investment_market_date',
                        type: 'date',
                        value: startDate,
                      });
                    }
                    proceedToInvstServer = true;
                  }
                  if (proceedToInvstServer) {
                    const marketDataInput = {
                      start: startDate,
                      end: endDate,
                    };
                    const marketData = await marketDataMethods.getMarketDate(
                      String(sessionToken),
                      marketDataInput,
                    );
                    const marketDataAdded = await Models.MarketData.bulkCreate(
                      marketData,
                    );
                    const endInvestmentDate = await Models.Settings.findOne({
                      where: {
                        name: 'end_investment_market_date',
                        type: 'date',
                      },
                    });
                    if (endInvestmentDate) {
                      await Models.Settings.update(
                        {
                          value: endDate,
                        },
                        {
                          where: {
                            name: 'end_investment_market_date',
                            type: 'date',
                          },
                        },
                      );
                    } else {
                      await Models.Settings.create({
                        name: 'end_investment_market_date',
                        type: 'date',
                        value: endDate,
                      });
                    }
                    createdResponse(
                      res,
                      `Total of ${marketDataAdded.length} number of Records Added to Database Based on the Investment Master and ticker data Available`,
                    );
                  } else {
                    throw new NotAllowed(
                      'Investment Market Data Cannot be Updated when the start date and end date are same',
                    );
                  }
                } else {
                  throw new InternalServerError(
                    'Please Set CALENDARSTARTDATE Variable to Environment',
                    'ENV Variable not Found',
                  );
                }
              } else {
                throw new UnAuthorized(
                  'Not Able to Find Session Token in the Request, Rejecting the request',
                );
              }
            } catch (e) {
              console.log(e);
              errorResponseHandler(res, e);
            }
          }) as RequestHandler);
        },
      },
      {
        path: '/opening-balances',
        model: Models.OpeningBalances,
        modelName: 'OpeningBalances',
      },
    ],
  },
];
