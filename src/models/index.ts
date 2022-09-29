import {
  initCalendarMaster,
  initExpenseCategoryMaster,
  initExpenseMaster,
  initIncomeCategoryMaster,
  initIncomeMaster,
  initInvestmentCategoryMaster,
  initInvestmentMaster,
  initBankMaster,
  initCreditCardMaster,
  initDebitCardMaster,
  initEMIMaster,
  initInsuranceMaster,
  initAssetCategoryMaster,
  initAssetMaster,
} from './master';
import {
  initIncomes,
  initExpenses,
  initInvestments,
  initOpeningBalances,
  initMarketData,
} from './fact';
import type { Sequelize } from 'sequelize';

const allFunctions: ((sequelize: Sequelize) => void)[] = [
  initCalendarMaster,
  initExpenseCategoryMaster,
  initExpenseMaster,
  initIncomeCategoryMaster,
  initIncomeMaster,
  initInvestmentCategoryMaster,
  initInvestmentMaster,
  initBankMaster,
  initCreditCardMaster,
  initDebitCardMaster,
  initEMIMaster,
  initInsuranceMaster,
  initAssetCategoryMaster,
  initAssetMaster,
  initIncomes,
  initExpenses,
  initInvestments,
  initOpeningBalances,
  initMarketData,
];

/**
 * Initializes all the Sequelize Models for Syncing with Database
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initAllModels(sequelize: Sequelize) {
  allFunctions.forEach((initFunc) => {
    initFunc(sequelize);
  });
}

export * from './master';
export * from './fact';
