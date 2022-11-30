import 'dotenv/config';
import { Sequelize } from 'sequelize';

const DB_nome = process.env.DB_DATABASE;
const DB_usuario = process.env.DB_USER;
const DB_pass = process.env.DB_PASSWORD;
const DB_dialect: any = process.env.DIALECT;
const DB_host = process.env.DB_HOST;

export const DataBese = new Sequelize(DB_nome, DB_usuario, DB_pass, {
  dialect: DB_dialect,
  host: DB_host,
});

DataBese.authenticate()
  .then(() => {
    console.log(
      '👍 👍 Successful Connection! 👍 👍',
    );
  })
  .catch((err: string) => {
    console.error(
      '👎👎 Connection Failure:' + err + '👎👎',
    );
  });