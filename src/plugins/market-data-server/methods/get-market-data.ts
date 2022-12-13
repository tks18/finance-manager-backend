import { axios } from '@plugins/axios';
import { marketDataRoutes } from '@plugins/market-data-server';
import { MarketData } from '@models/fact/market-data';

import type { IGetMarketDataInput } from './types';
import type { ISuccessResponse } from '@plugins/market-data-server/types';
import { InternalServerError } from '@plugins/errors';
import { MakeNullishOptional } from 'sequelize/types/utils';

/**
 * Gets the Market Data for all the Stocks in Investment Master Model which has ticker data
 *
 * @param {string} token - Session Token String
 * @param {IGetMarketDataInput} data - input for updateMarketData API
 */
export async function getMarketDate(
  token: string,
  data: IGetMarketDataInput,
): Promise<MarketData[]> {
  const marketDataServer = process.env['MARKETDATASERVER'];
  if (marketDataServer) {
    const url = `${marketDataServer}${marketDataRoutes.investments.generateMarketData}`;
    const response = await axios.post<
      ISuccessResponse<MakeNullishOptional<MarketData>[]>
    >(url, data, {
      headers: {
        'x-session-token': token,
      },
    });
    const marketData = response.data.data;
    return marketData;
  } else {
    throw new InternalServerError(
      'MarketDataServer Env Variable Not found, please add the same',
      'ENV Variable Not found',
    );
  }
}
