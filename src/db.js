import 'dotenv/config'


import Sequelize from 'sequelize';

const database = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
     host: process.env.DB_HOST,
     dialect: process.env.DIALECT,
});

sequelize.authenticate()
     .then(() => {
          console.log('👍 👍 Conexação com o banco de dados foi estabelecida com sucesso! 👍 👍');
     })
     .catch(err => {
          console.error('👎👎 Erro: Conexação com o banco de dados não realizada:' + err + '👎👎');
     });
module.exports = database;
