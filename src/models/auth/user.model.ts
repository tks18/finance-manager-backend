import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import type {
  Sequelize,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

/**
 * @class Users Table
 */
export class Users extends Model<
  InferAttributes<Users>,
  InferCreationAttributes<Users>
> {
  declare _id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare password: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  /**
   * Creates a Hashed Password with the Inputed Password
   */
  public async hashPasswordnSave(): Promise<boolean> {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    await this.save({ fields: ['password'] });
    return true;
  }

  /**
   * Authenticates User with the Password Provided
   *
   * @param {string} input - User Inputed Password
   */
  public async authenticate(input: string): Promise<boolean> {
    return bcrypt.compare(input, this.password);
  }
}

/**
 * Initializes Users Table in the Database for Syncing
 *
 * @param {Sequelize} sequelize - Sequelize Object
 */
export function initUsers(sequelize: Sequelize) {
  Users.init(
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { allowNull: false, type: DataTypes.STRING },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: { allowNull: false, type: DataTypes.STRING },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, timestamps: true, tableName: 'MasterUsers' },
  );
}
