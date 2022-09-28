import { Model, DataTypes, ForeignKey, NonAttribute } from 'sequelize';
import { BankMaster } from './banks.model';
import type {
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

/**
 * @class Debit Card Master Table
 */
export class DebitCardMaster extends Model<
  InferAttributes<DebitCardMaster>,
  InferCreationAttributes<DebitCardMaster>
> {
  declare _id: CreationOptional<number>;
  declare card_name: string;
  declare card_type: string;
  declare card_gateway_vendor: string;
  declare bank_id: ForeignKey<BankMaster['_id']>;
  declare card_no: string;
  declare card_expiry_month: number;
  declare card_expiry_year: number;
  declare card_cvv_code: number;
  declare is_international: boolean;
  declare atm_limit: number;
  declare ecom_limit: number;
  declare tap_enabled: boolean;
  declare tap_limit: number;
  declare pos_limit: number;
  declare international_limit: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare bank?: NonAttribute<BankMaster>;
}

/**
 * Defines the Relationships for the Model
 */
function defineRelationships(): void {
  BankMaster.hasMany(DebitCardMaster, {
    sourceKey: '_id',
    foreignKey: 'bank_id',
    as: 'debitCards',
  });
  DebitCardMaster.belongsTo(BankMaster, {
    targetKey: '_id',
    foreignKey: 'bank_id',
    as: 'bank',
  });
}

/**
 * Initializes Debit Card Master Table in Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initDebitCardMaster(sequelize: Sequelize): void {
  DebitCardMaster.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      card_name: DataTypes.STRING,
      card_type: DataTypes.STRING,
      card_gateway_vendor: DataTypes.STRING,
      bank_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: BankMaster,
          key: '_id',
        },
      },
      card_no: DataTypes.STRING,
      card_expiry_month: DataTypes.INTEGER,
      card_expiry_year: DataTypes.INTEGER,
      card_cvv_code: DataTypes.INTEGER,
      is_international: DataTypes.BOOLEAN,
      atm_limit: DataTypes.DECIMAL,
      ecom_limit: DataTypes.DECIMAL,
      tap_enabled: DataTypes.BOOLEAN,
      tap_limit: DataTypes.DECIMAL,
      pos_limit: DataTypes.DECIMAL,
      international_limit: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterDebitCards' },
  );

  defineRelationships();
}
