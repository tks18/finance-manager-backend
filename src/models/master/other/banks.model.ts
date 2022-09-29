import { Model, DataTypes } from 'sequelize';
import {
  CreditCardMaster,
  DebitCardMaster,
  Incomes,
  Expenses,
  Investments,
  OpeningBalances,
} from '@models';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Association,
} from 'sequelize';

/**
 * @class Bank Master Table
 */
export class BankMaster extends Model<
  InferAttributes<
    BankMaster,
    {
      omit:
        | 'creditCards'
        | 'debitCards'
        | 'incomes'
        | 'expenses'
        | 'investments'
        | 'openingBalances';
    }
  >,
  InferCreationAttributes<
    BankMaster,
    {
      omit:
        | 'creditCards'
        | 'debitCards'
        | 'incomes'
        | 'expenses'
        | 'investments'
        | 'openingBalances';
    }
  >
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare bank_branch: string;
  declare account_type: string;
  declare account_no: string;
  declare customer_id: string;
  declare ifsc_code: string;
  declare netbanking_username: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getCreditCards: HasManyGetAssociationsMixin<CreditCardMaster>;
  declare addCreditCard: HasManyAddAssociationMixin<CreditCardMaster, number>;
  declare addCreditCards: HasManyAddAssociationsMixin<CreditCardMaster, number>;
  declare setCreditCards: HasManySetAssociationsMixin<CreditCardMaster, number>;
  declare removeCreditCard: HasManyRemoveAssociationMixin<
    CreditCardMaster,
    number
  >;
  declare removeCreditCards: HasManyRemoveAssociationsMixin<
    CreditCardMaster,
    number
  >;
  declare hasCreditCard: HasManyHasAssociationMixin<CreditCardMaster, number>;
  declare hasCreditCards: HasManyHasAssociationsMixin<CreditCardMaster, number>;
  declare countCreditCards: HasManyCountAssociationsMixin;
  declare createCreditCard: HasManyCreateAssociationMixin<
    CreditCardMaster,
    'bank_id'
  >;

  declare creditCards?: NonAttribute<CreditCardMaster[]>;

  declare getDebitCards: HasManyGetAssociationsMixin<DebitCardMaster>;
  declare addDebitCard: HasManyAddAssociationMixin<DebitCardMaster, number>;
  declare addDebitCards: HasManyAddAssociationsMixin<DebitCardMaster, number>;
  declare setDebitCards: HasManySetAssociationsMixin<DebitCardMaster, number>;
  declare removeDebitCard: HasManyRemoveAssociationMixin<
    DebitCardMaster,
    number
  >;
  declare removeDebitCards: HasManyRemoveAssociationsMixin<
    DebitCardMaster,
    number
  >;
  declare hasDebitCard: HasManyHasAssociationMixin<DebitCardMaster, number>;
  declare hasDebitCards: HasManyHasAssociationsMixin<DebitCardMaster, number>;
  declare countDebitCards: HasManyCountAssociationsMixin;
  declare createDebitCard: HasManyCreateAssociationMixin<
    DebitCardMaster,
    'bank_id'
  >;

  declare debitCards?: NonAttribute<DebitCardMaster[]>;

  declare getIncomes: HasManyGetAssociationsMixin<Incomes>;
  declare addIncome: HasManyAddAssociationMixin<Incomes, number>;
  declare addIncomes: HasManyAddAssociationsMixin<Incomes, number>;
  declare setIncomes: HasManySetAssociationsMixin<Incomes, number>;
  declare removeIncome: HasManyRemoveAssociationMixin<Incomes, number>;
  declare removeIncomes: HasManyRemoveAssociationsMixin<Incomes, number>;
  declare hasIncome: HasManyHasAssociationMixin<Incomes, number>;
  declare hasIncomes: HasManyHasAssociationsMixin<Incomes, number>;
  declare countIncomes: HasManyCountAssociationsMixin;
  declare createIncome: HasManyCreateAssociationMixin<Incomes, 'bank_id'>;

  declare incomes?: NonAttribute<DebitCardMaster[]>;

  declare getExpenses: HasManyGetAssociationsMixin<Expenses>;
  declare addExpense: HasManyAddAssociationMixin<Expenses, number>;
  declare addExpenses: HasManyAddAssociationsMixin<Expenses, number>;
  declare setExpenses: HasManySetAssociationsMixin<Expenses, number>;
  declare removeExpense: HasManyRemoveAssociationMixin<Expenses, number>;
  declare removeExpenses: HasManyRemoveAssociationsMixin<Expenses, number>;
  declare hasExpense: HasManyHasAssociationMixin<Expenses, number>;
  declare hasExpenses: HasManyHasAssociationsMixin<Expenses, number>;
  declare countExpenses: HasManyCountAssociationsMixin;
  declare createExpense: HasManyCreateAssociationMixin<Expenses, 'bank_id'>;

  declare expenses?: NonAttribute<Expenses[]>;

  declare getInvestments: HasManyGetAssociationsMixin<Investments>;
  declare addInvestment: HasManyAddAssociationMixin<Investments, number>;
  declare addInvestments: HasManyAddAssociationsMixin<Investments, number>;
  declare setInvestments: HasManySetAssociationsMixin<Investments, number>;
  declare removeInvestment: HasManyRemoveAssociationMixin<Investments, number>;
  declare removeInvestments: HasManyRemoveAssociationsMixin<
    Investments,
    number
  >;
  declare hasInvestment: HasManyHasAssociationMixin<Investments, number>;
  declare hasInvestments: HasManyHasAssociationsMixin<Investments, number>;
  declare countInvestments: HasManyCountAssociationsMixin;
  declare createInvestment: HasManyCreateAssociationMixin<
    Investments,
    'bank_id'
  >;

  declare investments?: NonAttribute<Investments[]>;

  declare getOpeningBalances: HasManyGetAssociationsMixin<OpeningBalances>;
  declare addOpeningBalance: HasManyAddAssociationMixin<
    OpeningBalances,
    number
  >;
  declare addOpeningBalances: HasManyAddAssociationsMixin<
    OpeningBalances,
    number
  >;
  declare setOpeningBalances: HasManySetAssociationsMixin<
    OpeningBalances,
    number
  >;
  declare removeOpeningBalance: HasManyRemoveAssociationMixin<
    OpeningBalances,
    number
  >;
  declare removeOpeningBalances: HasManyRemoveAssociationsMixin<
    OpeningBalances,
    number
  >;
  declare hasOpeningBalance: HasManyHasAssociationMixin<
    OpeningBalances,
    number
  >;
  declare hasOpeningBalances: HasManyHasAssociationsMixin<
    OpeningBalances,
    number
  >;
  declare countOpeningBalances: HasManyCountAssociationsMixin;
  declare createOpeningBalance: HasManyCreateAssociationMixin<
    OpeningBalances,
    'bank_id'
  >;

  declare openingBalances?: NonAttribute<OpeningBalances[]>;

  declare static associations: {
    creditCards: Association<BankMaster, CreditCardMaster>;
    debitCards: Association<BankMaster, DebitCardMaster>;
    incomes: Association<BankMaster, Incomes>;
    expenses: Association<BankMaster, Expenses>;
    investments: Association<BankMaster, Investments>;
    openingBalances: Association<BankMaster, OpeningBalances>;
  };
}

/**
 * Initializes Bank Master Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initBankMaster(sequelize: Sequelize): void {
  BankMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      bank_branch: DataTypes.STRING,
      account_type: DataTypes.STRING,
      account_no: DataTypes.STRING,
      customer_id: DataTypes.STRING,
      ifsc_code: DataTypes.STRING,
      netbanking_username: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterBanks' },
  );
}
