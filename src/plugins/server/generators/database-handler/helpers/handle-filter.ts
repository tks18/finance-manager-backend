/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Op } from 'sequelize';
import { WhereOptions } from 'sequelize';

const operatorsMap: Record<string, symbol> = {
  eq: Op.eq,
  ne: Op.ne,
  is: Op.is,
  not: Op.not,
  or: Op.or,
  gt: Op.gt,
  gte: Op.gte,
  lt: Op.lt,
  lte: Op.lte,
  between: Op.between,
  notBetween: Op.notBetween,
};

export const handleFilter = (oldObject: any) => {
  const newObject: WhereOptions = {};
  for (const key in oldObject) {
    const value = oldObject[key];
    if (operatorsMap[key]) {
      const op = operatorsMap[key];
      if (Array.isArray(value)) {
        newObject[op as any] = value.map((obj) => {
          if (typeof obj === 'number' || typeof obj === 'string') {
            return obj;
          } else {
            return handleFilter(obj);
          }
        });
      } else if (typeof value === 'object') {
        newObject[op as any] = handleFilter(value);
      } else {
        newObject[op as any] = value;
      }
    } else {
      if (Array.isArray(value)) {
        newObject[key] = value.map((obj) => {
          if (typeof obj === 'number' || typeof obj === 'string') {
            return obj;
          } else {
            return handleFilter(obj);
          }
        });
      } else if (typeof value === 'object') {
        newObject[key] = handleFilter(value);
      } else {
        newObject[key] = value;
      }
    }
  }
  return newObject;
};
