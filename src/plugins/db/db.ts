import { Sequelize } from 'sequelize';
import { dblog } from '@plugins/logger';
import { InternalServerError } from '@plugins/errors';

const constructDBObject = () => {
  const { DBHOST, DBPORT, DATABASENAME, DBUSERNAME, DBPASSWORD } = process.env;
  if (DBHOST && DBPORT && DATABASENAME && DBUSERNAME && DBPASSWORD) {
    return new Sequelize({
      dialect: 'postgres',
      host: DBHOST,
      port: Number(DBPORT),
      database: DATABASENAME,
      username: DBUSERNAME,
      password: DBPASSWORD,
      logging: dblog.debug.bind(dblog),
    });
  } else {
    throw new InternalServerError(
      'Env Variables (DBHOST, DBPORT, DATABASENAME, DBUSERNAME, DBPASSWORD) Required for Connecting to Database',
      'DBConnectError',
    );
  }
};

export const sequelize = constructDBObject();

/**
 * Connects to Postgres Database using Sequelize and tries to Authenticate with DB
 * @param {Sequelize} sequelize - Sequelize DB Object
 */
export async function authenticateDB(sequelize: Sequelize): Promise<void> {
  try {
    await sequelize.authenticate();
  } catch (e) {
    throw new InternalServerError(
      `Error While Authenticating Database: ${String(e)}`,
      'DBConnectError',
    );
  }
}

/**
 * Closes the Sequelize Database Connection
 * @param {Sequelize} sequelize - Sequelize Database Object
 */
export async function closeDB(sequelize: Sequelize): Promise<void> {
  await sequelize.close();
}
