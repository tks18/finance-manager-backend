import * as masterTables from './master';
import * as factTables from './fact';
import * as authTables from './auth';
import * as SettingsTables from './settings';
import type { Sequelize } from 'sequelize';

const allFunctions: ((sequelize: Sequelize) => void)[] = [
  masterTables.initCalendarMaster,
  masterTables.initExpenseCategoryMaster,
  masterTables.initExpenseMaster,
  masterTables.initIncomeCategoryMaster,
  masterTables.initIncomeMaster,
  masterTables.initInvestmentCategoryMaster,
  masterTables.initInvestmentMaster,
  masterTables.initBankMaster,
  masterTables.initCreditCardMaster,
  masterTables.initDebitCardMaster,
  masterTables.initEMIMaster,
  masterTables.initInsuranceMaster,
  masterTables.initAssetCategoryMaster,
  masterTables.initAssetMaster,
  masterTables.initInvestmentAgentMaster,
  factTables.initIncomes,
  factTables.initExpenses,
  factTables.initInvestments,
  factTables.initOpeningBalances,
  factTables.initMarketData,
  authTables.initUsers,
  SettingsTables.initSettings,
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
