/* eslint-disable @typescript-eslint/no-explicit-any */
import dotProp from 'dot-prop';
import { modelIncludeMap } from '@models/model-map';
import { Includeable, Order } from 'sequelize';

const mapToModel = (
  accessString: string,
  map: ReturnType<typeof modelIncludeMap>,
): Includeable => {
  if (dotProp.has(map, accessString)) {
    const prop = dotProp.get(map, accessString);
    return prop as Includeable;
  } else {
    return accessString;
  }
};

export const handleOrder = (
  orderMap: string[][],
  modelMap: ReturnType<typeof modelIncludeMap>,
): Order => {
  if (Array.isArray(orderMap)) {
    const formattedOrderMap = orderMap.map((order) =>
      order.map((includeVal) => mapToModel(includeVal, modelMap)),
    );
    return formattedOrderMap as Order;
  } else {
    return [];
  }
};
