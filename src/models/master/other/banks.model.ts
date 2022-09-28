import { Model, DataTypes } from 'sequelize';
import { CreditCardMaster, DebitCardMaster } from '@models';
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
  InferAttributes<BankMaster, { omit: 'creditCards' | 'debitCards' }>,
  InferCreationAttributes<BankMaster, { omit: 'creditCards' | 'debitCards' }>
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

  declare static associations: {
    creditCards: Association<BankMaster, CreditCardMaster>;
    debitCards: Association<BankMaster, DebitCardMaster>;
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
